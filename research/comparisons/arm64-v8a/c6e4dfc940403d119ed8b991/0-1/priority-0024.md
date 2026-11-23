# v16.0.1 → v16.0.2 · 最優先の変更候補 (24)

[一覧の目次](README.md)

<a id="compare-71538b71ea4931b56f4f4158f1ad30d4"></a>

### [`005b9668`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005b9/005b9668.md) → [`005b96a8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005b9/005b96a8.md) _INIT_61

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 5件 [`0043ae70`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043a/0043ae70.md) [`0043b7f8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043b7f8.md) [`00c57e30`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e30.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md)
- 新版 呼出元 0件  · 呼出先 5件 [`0043aeb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043a/0043aeb0.md) [`0043b838`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b838.md) [`00c57f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f00.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies, operation_sequence, store_value

命令の説明率　旧版 84.75% / 新版 84.75%

優先判定に残った影響 `call_argument_candidate` 1件, `store_value` 7件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "005b96e4",
      "incomplete_value": true,
      "site": "005b9700",
      "value": [
        "LOAD",
        "16",
        [
          [
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
      "definition_site": "005b96a4",
      "incomplete_value": true,
      "site": "005b96c0",
      "value": [
        "LOAD",
        "16",
        [
          [
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
      "definition_site": "005b9708",
      "incomplete_value": true,
      "site": "005b9724",
      "value": [
        "LOAD",
        "16",
        [
          [
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
      "definition_site": "005b96c8",
      "incomplete_value": true,
      "site": "005b96e4",
      "value": [
        "LOAD",
        "16",
        [
          [
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
      "definition_site": "005b9728",
      "incomplete_value": true,
      "site": "005b9744",
      "value": [
        "LOAD",
        "16",
        [
          [
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
      "definition_site": "005b96e8",
      "incomplete_value": true,
      "site": "005b9704",
      "value": [
        "LOAD",
        "16",
        [
          [
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
      "005b96e4",
      "READ",
      [
        "storage",
        "002b7f26",
        null,
        "string"
      ]
    ],
    [
      "005b9708",
      "READ",
      [
        "storage",
        "002b7f39",
        null,
        "string"
      ]
    ],
    [
      "005b9728",
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
      "005b96e4",
      "READ",
      [
        "storage",
        "002b7f66",
        null,
        "string"
      ]
    ],
    [
      "005b9708",
      "READ",
      [
        "storage",
        "002b7f79",
        null,
        "string"
      ]
    ],
    [
      "005b9728",
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
- 005b96e0 ["COPY", "tmp:0:8", ["const:dc2:8"]]
- 005b96e0 ["INT_CARRY", "register:105:1", ["register:4050:8", "tmp:0:8"]]
- 005b96e0 ["INT_SCARRY", "register:106:1", ["register:4050:8", "tmp:0:8"]]
- 005b96e0 ["INT_ADD", "tmp:1:8", ["register:4050:8", "tmp:0:8"]]
+ 005b9720 ["COPY", "tmp:0:8", ["const:d6e:8"]]
+ 005b9720 ["INT_CARRY", "register:105:1", ["register:4050:8", "tmp:0:8"]]
+ 005b9720 ["INT_SCARRY", "register:106:1", ["register:4050:8", "tmp:0:8"]]
+ 005b9720 ["INT_ADD", "tmp:1:8", ["register:4050:8", "tmp:0:8"]]
- 005b9700 ["COPY", "tmp:0:8", ["const:f62:8"]]
- 005b9700 ["INT_CARRY", "register:105:1", ["register:4050:8", "tmp:0:8"]]
- 005b9700 ["INT_SCARRY", "register:106:1", ["register:4050:8", "tmp:0:8"]]
- 005b9700 ["INT_ADD", "tmp:1:8", ["register:4050:8", "tmp:0:8"]]
+ 005b9740 ["COPY", "tmp:0:8", ["const:f15:8"]]
+ 005b9740 ["INT_CARRY", "register:105:1", ["register:4050:8", "tmp:0:8"]]
+ 005b9740 ["INT_SCARRY", "register:106:1", ["register:4050:8", "tmp:0:8"]]
+ 005b9740 ["INT_ADD", "tmp:1:8", ["register:4050:8", "tmp:0:8"]]
- 005b989c ["INT_ADD", "register:40f0:8", ["const:5b989c:8", "const:4:8"]]
- 005b989c ["CALL", null, ["callee:00c57f00:8"]]
+ 005b98dc ["INT_ADD", "register:40f0:8", ["const:5b98dc:8", "const:4:8"]]
+ 005b98dc ["CALL", null, ["callee:00c57f00:8"]]
~~~


<a id="compare-b979e956ae7be653a5f16c91b69be0f0"></a>

### [`005b9a98`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005b9/005b9a98.md) → [`005b9ad8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005b9/005b9ad8.md) FUN_005b9ad8

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00851a0c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00851/00851a0c.md) · 呼出先 2件 [`0048ccf8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0048c/0048ccf8.md) [`0048ce84`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0048c/0048ce84.md)
- 新版 呼出元 1件 [`00851a64`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851a64.md) · 呼出先 2件 [`0048cd38`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048c/0048cd38.md) [`0048cec4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048c/0048cec4.md)

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
      "site": "005b9af4",
      "value": [
        "leaf",
        "ram:48cd38:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "005b9ab4",
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
      "005b9af4",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0048ccf8"
      ]
    ]
  ],
  "added": [
    [
      "005b9af4",
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
- 005b9ab4 ["INT_ADD", "register:40f0:8", ["const:5b9ab4:8", "const:4:8"]]
- 005b9ab4 ["CALL", null, ["ram:48ccf8:8"]]
+ 005b9af4 ["INT_ADD", "register:40f0:8", ["const:5b9af4:8", "const:4:8"]]
+ 005b9af4 ["CALL", null, ["ram:48cd38:8"]]
- 005b9ab8 ["INT_ADD", "register:40f0:8", ["const:5b9ab8:8", "const:4:8"]]
- 005b9ab8 ["CALL", null, ["callee:0048cec4:8"]]
+ 005b9af8 ["INT_ADD", "register:40f0:8", ["const:5b9af8:8", "const:4:8"]]
+ 005b9af8 ["CALL", null, ["callee:0048cec4:8"]]
~~~


<a id="compare-70ea0d8f689d50e7f81d5a624b94ea55"></a>

### [`005b9ae0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005b9/005b9ae0.md) → [`005b9b20`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005b9/005b9b20.md) FUN_005b9b20

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`0075eb80`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0075e/0075eb80.md) · 呼出先 3件 [`0048ccf8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0048c/0048ccf8.md) [`0048ce84`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0048c/0048ce84.md) [`005b9b54`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005b9/005b9b54.md)
- 新版 呼出元 1件 [`0075ebd8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0075e/0075ebd8.md) · 呼出先 3件 [`0048cd38`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048c/0048cd38.md) [`0048cec4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048c/0048cec4.md) [`005b9b94`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005b9/005b9b94.md)

変更の種類 call, call_target, constant, operands_and_dependencies

命令の説明率　旧版 96.55% / 新版 96.55%

優先判定に残った影響 `call_target` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_target",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "005b9b40",
      "value": [
        "leaf",
        "ram:48cd38:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "005b9b00",
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
      "005b9b40",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0048ccf8"
      ]
    ]
  ],
  "added": [
    [
      "005b9b40",
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
- 005b9b00 ["INT_ADD", "register:40f0:8", ["const:5b9b00:8", "const:4:8"]]
- 005b9b00 ["CALL", null, ["ram:48ccf8:8"]]
+ 005b9b40 ["INT_ADD", "register:40f0:8", ["const:5b9b40:8", "const:4:8"]]
+ 005b9b40 ["CALL", null, ["ram:48cd38:8"]]
- 005b9b04 ["INT_ADD", "register:40f0:8", ["const:5b9b04:8", "const:4:8"]]
- 005b9b04 ["CALL", null, ["callee:0048cec4:8"]]
+ 005b9b44 ["INT_ADD", "register:40f0:8", ["const:5b9b44:8", "const:4:8"]]
+ 005b9b44 ["CALL", null, ["callee:0048cec4:8"]]
- 005b9b2c ["INT_ADD", "register:40f0:8", ["const:5b9b2c:8", "const:4:8"]]
- 005b9b2c ["CALL", null, ["callee:005b9b94:8"]]
+ 005b9b6c ["INT_ADD", "register:40f0:8", ["const:5b9b6c:8", "const:4:8"]]
+ 005b9b6c ["CALL", null, ["callee:005b9b94:8"]]
~~~


<a id="compare-cf0cb08a93fda2912af242439888e274"></a>

### [`005b9b54`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005b9/005b9b54.md) → [`005b9b94`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005b9/005b9b94.md) FUN_005b9b94

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`005b9ae0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005b9/005b9ae0.md) · 呼出先 18件 [`0043bba4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043bba4.md) [`0048792c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00487/0048792c.md) [`0048793c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00487/0048793c.md) [`00487a64`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00487/00487a64.md) [`00487e20`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00487/00487e20.md)
- 新版 呼出元 1件 [`005b9b20`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005b9/005b9b20.md) · 呼出先 18件 [`0043bbe4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bbe4.md) [`0048796c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00487/0048796c.md) [`0048797c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00487/0048797c.md) [`00487aa4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00487/00487aa4.md) [`00487e60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00487/00487e60.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies, store_destination, store_value

命令の説明率　旧版 93.65% / 新版 93.65%

優先判定に残った影響 `call_argument_candidate` 1件, `store_destination` 1件, `store_value` 4件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "005b9be4",
      "incomplete_value": false,
      "site": "005b9bec",
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
      "definition_site": "005b9ba4",
      "incomplete_value": false,
      "site": "005b9bac",
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
    "ordinal": 15,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "005b9dd4",
      "incomplete_value": true,
      "site": "005b9dd8",
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
      "definition_site": "005b9d94",
      "incomplete_value": true,
      "site": "005b9d98",
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
      "definition_site": "005b9dd0",
      "incomplete_value": true,
      "site": "005b9ddc",
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
      "definition_site": "005b9d90",
      "incomplete_value": true,
      "site": "005b9d9c",
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
      "005b9bec",
      "DATA",
      [
        "storage",
        "00c64d38",
        null,
        "undefined *"
      ]
    ],
    [
      "005b9c14",
      "PARAM",
      [
        "storage",
        "00ca6870",
        null,
        null
      ]
    ],
    [
      "005b9dc4",
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
      "005b9bec",
      "DATA",
      [
        "storage",
        "00c64e08",
        null,
        "undefined *"
      ]
    ],
    [
      "005b9c14",
      "PARAM",
      [
        "storage",
        "00ca6970",
        null,
        null
      ]
    ],
    [
      "005b9dc4",
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
- 005b9be0 ["INT_ADD", "register:40f0:8", ["const:5b9be0:8", "const:4:8"]]
- 005b9be0 ["CALL", null, ["callee:00492e48:8"]]
+ 005b9c20 ["INT_ADD", "register:40f0:8", ["const:5b9c20:8", "const:4:8"]]
+ 005b9c20 ["CALL", null, ["callee:00492e48:8"]]
- 005b9c20 ["INT_ADD", "register:40f0:8", ["const:5b9c20:8", "const:4:8"]]
- 005b9c20 ["CALL", null, ["callee:0048796c:8"]]
+ 005b9c60 ["INT_ADD", "register:40f0:8", ["const:5b9c60:8", "const:4:8"]]
+ 005b9c60 ["CALL", null, ["callee:0048796c:8"]]
- 005b9ddc ["INT_ADD", "register:40f0:8", ["const:5b9ddc:8", "const:4:8"]]
- 005b9ddc ["CALL", null, ["callee:00c58080:8"]]
+ 005b9e1c ["INT_ADD", "register:40f0:8", ["const:5b9e1c:8", "const:4:8"]]
+ 005b9e1c ["CALL", null, ["callee:00c58080:8"]]
~~~


<a id="compare-7c9ad3d59d2b0f4b29b97248ee53e819"></a>

### [`005b9f34`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005b9/005b9f34.md) → [`005b9f74`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005b9/005b9f74.md) _INIT_62

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 7件 [`0043ae70`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043a/0043ae70.md) [`0043b7f8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043b7f8.md) [`00bc47f0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bc4/00bc47f0.md) [`00c57e30`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e30.md) [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md)
- 新版 呼出元 0件  · 呼出先 7件 [`0043aeb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043a/0043aeb0.md) [`0043b838`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b838.md) [`00bc488c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bc4/00bc488c.md) [`00c57f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f00.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies, operation_sequence, store_destination, store_value

命令の説明率　旧版 81.63% / 新版 81.63%

優先判定に残った影響 `call_argument_candidate` 4件, `store_destination` 2件, `store_value` 8件

アドレスに依存する影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "005b9fb0",
      "incomplete_value": true,
      "site": "005b9fcc",
      "value": [
        "LOAD",
        "16",
        [
          [
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
      "definition_site": "005b9f70",
      "incomplete_value": true,
      "site": "005b9f8c",
      "value": [
        "LOAD",
        "16",
        [
          [
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
      "definition_site": "005b9fd4",
      "incomplete_value": true,
      "site": "005b9ff0",
      "value": [
        "LOAD",
        "16",
        [
          [
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
      "definition_site": "005b9f94",
      "incomplete_value": true,
      "site": "005b9fb0",
      "value": [
        "LOAD",
        "16",
        [
          [
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
      "definition_site": "005b9ff4",
      "incomplete_value": true,
      "site": "005ba010",
      "value": [
        "LOAD",
        "16",
        [
          [
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
      "definition_site": "005b9fb4",
      "incomplete_value": true,
      "site": "005b9fd0",
      "value": [
        "LOAD",
        "16",
        [
          [
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
      "005b9fb0",
      "READ",
      [
        "storage",
        "002b7f26",
        null,
        "string"
      ]
    ],
    [
      "005b9fd4",
      "READ",
      [
        "storage",
        "002b7f39",
        null,
        "string"
      ]
    ],
    [
      "005b9ff4",
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
      "005b9fb0",
      "READ",
      [
        "storage",
        "002b7f66",
        null,
        "string"
      ]
    ],
    [
      "005b9fd4",
      "READ",
      [
        "storage",
        "002b7f79",
        null,
        "string"
      ]
    ],
    [
      "005b9ff4",
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
- 005b9fac ["COPY", "tmp:0:8", ["const:dc2:8"]]
- 005b9fac ["INT_CARRY", "register:105:1", ["register:4050:8", "tmp:0:8"]]
- 005b9fac ["INT_SCARRY", "register:106:1", ["register:4050:8", "tmp:0:8"]]
- 005b9fac ["INT_ADD", "tmp:1:8", ["register:4050:8", "tmp:0:8"]]
+ 005b9fec ["COPY", "tmp:0:8", ["const:d6e:8"]]
+ 005b9fec ["INT_CARRY", "register:105:1", ["register:4050:8", "tmp:0:8"]]
+ 005b9fec ["INT_SCARRY", "register:106:1", ["register:4050:8", "tmp:0:8"]]
+ 005b9fec ["INT_ADD", "tmp:1:8", ["register:4050:8", "tmp:0:8"]]
- 005b9fcc ["COPY", "tmp:0:8", ["const:f62:8"]]
- 005b9fcc ["INT_CARRY", "register:105:1", ["register:4050:8", "tmp:0:8"]]
- 005b9fcc ["INT_SCARRY", "register:106:1", ["register:4050:8", "tmp:0:8"]]
- 005b9fcc ["INT_ADD", "tmp:1:8", ["register:4050:8", "tmp:0:8"]]
+ 005ba00c ["COPY", "tmp:0:8", ["const:f15:8"]]
+ 005ba00c ["INT_CARRY", "register:105:1", ["register:4050:8", "tmp:0:8"]]
+ 005ba00c ["INT_SCARRY", "register:106:1", ["register:4050:8", "tmp:0:8"]]
+ 005ba00c ["INT_ADD", "tmp:1:8", ["register:4050:8", "tmp:0:8"]]
- 005ba154 ["COPY", "tmp:0:8", ["const:f90:8"]]
- 005ba154 ["INT_CARRY", "register:105:1", ["register:4098:8", "tmp:0:8"]]
- 005ba154 ["INT_SCARRY", "register:106:1", ["register:4098:8", "tmp:0:8"]]
- 005ba154 ["INT_ADD", "tmp:1:8", ["register:4098:8", "tmp:0:8"]]
+ 005ba194 ["COPY", "tmp:0:8", ["const:60:8"]]
+ 005ba194 ["INT_CARRY", "register:105:1", ["register:4098:8", "tmp:0:8"]]
+ 005ba194 ["INT_SCARRY", "register:106:1", ["register:4098:8", "tmp:0:8"]]
+ 005ba194 ["INT_ADD", "tmp:1:8", ["register:4098:8", "tmp:0:8"]]
~~~


<a id="compare-a6d23792e155c8dd16e31e0822d46f1a"></a>

### [`005ba310`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005ba/005ba310.md) → [`005ba350`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005ba/005ba350.md) FUN_005ba350

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00851a0c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00851/00851a0c.md) · 呼出先 12件 [`0047e60c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047e/0047e60c.md) [`0047e8dc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047e/0047e8dc.md) [`0047edb4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047e/0047edb4.md) [`00597ec8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00597/00597ec8.md) [`00c53d00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c53/00c53d00.md)
- 新版 呼出元 1件 [`00851a64`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851a64.md) · 呼出先 12件 [`0047e64c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047e/0047e64c.md) [`0047e91c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047e/0047e91c.md) [`0047edf4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047e/0047edf4.md) [`00597f08`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00597/00597f08.md) [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies, operation_sequence, store_destination, store_value

命令の説明率　旧版 84.40% / 新版 84.40%

優先判定に残った影響 `call_argument_candidate` 12件, `store_destination` 7件, `store_value` 5件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "005ba38c",
      "incomplete_value": false,
      "site": "005ba390",
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
            "const:ac0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "005ba34c",
      "incomplete_value": false,
      "site": "005ba350",
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
            "const:9f0:8"
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
      "definition_site": "005ba410",
      "incomplete_value": true,
      "site": "005ba410",
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
      "definition_site": "005ba3d0",
      "incomplete_value": true,
      "site": "005ba3d0",
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
    "ordinal": 23,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "005ba40c",
      "incomplete_value": true,
      "site": "005ba414",
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
      "definition_site": "005ba3cc",
      "incomplete_value": true,
      "site": "005ba3d4",
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
      "005ba390",
      "DATA",
      [
        "storage",
        "00c709f0",
        null,
        "undefined *"
      ]
    ],
    [
      "005ba3b0",
      "PARAM",
      [
        "storage",
        "002d7334",
        null,
        "string"
      ]
    ],
    [
      "005ba3c4",
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
      "005ba390",
      "DATA",
      [
        "storage",
        "00c70ac0",
        null,
        "undefined *"
      ]
    ],
    [
      "005ba3b0",
      "PARAM",
      [
        "storage",
        "002d7374",
        null,
        "string"
      ]
    ],
    [
      "005ba3c4",
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
- 005ba3f4 ["INT_ADD", "register:40f0:8", ["const:5ba3f4:8", "const:4:8"]]
- 005ba3f4 ["CALL", null, ["callee:0047e64c:8"]]
+ 005ba434 ["INT_ADD", "register:40f0:8", ["const:5ba434:8", "const:4:8"]]
+ 005ba434 ["CALL", null, ["callee:0047e64c:8"]]
- 005ba414 ["INT_ADD", "register:40f0:8", ["const:5ba414:8", "const:4:8"]]
- 005ba414 ["CALL", null, ["callee:00c53da0:8"]]
+ 005ba454 ["INT_ADD", "register:40f0:8", ["const:5ba454:8", "const:4:8"]]
+ 005ba454 ["CALL", null, ["callee:00c53da0:8"]]
- 005ba500 ["INT_ADD", "register:40f0:8", ["const:5ba500:8", "const:4:8"]]
- 005ba500 ["CALL", null, ["callee:0047e91c:8"]]
+ 005ba540 ["INT_ADD", "register:40f0:8", ["const:5ba540:8", "const:4:8"]]
+ 005ba540 ["CALL", null, ["callee:0047e91c:8"]]
~~~


<a id="compare-79176fc51b601344d223a4e2e2ea4aef"></a>

### [`005ba798`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005ba/005ba798.md) → [`005ba7d8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005ba/005ba7d8.md) FUN_005ba7d8

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`005badf4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005ba/005badf4.md) · 呼出先 14件 [`0047acf4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047a/0047acf4.md) [`0047b7c0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047b/0047b7c0.md) [`0047b7c8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047b/0047b7c8.md) [`0047b84c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047b/0047b84c.md) [`0047cf08`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047c/0047cf08.md)
- 新版 呼出元 1件 [`005bae34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005ba/005bae34.md) · 呼出先 14件 [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md) [`0047b800`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047b/0047b800.md) [`0047b808`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047b/0047b808.md) [`0047b88c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047b/0047b88c.md) [`0047cf48`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047cf48.md)

変更の種類 call, call_target, constant, operands_and_dependencies

命令の説明率　旧版 92.86% / 新版 92.86%

優先判定に残った影響 `call_target` 8件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_target",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "005ba82c",
      "value": [
        "leaf",
        "ram:b1f4c4:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "005ba7ec",
      "value": [
        "leaf",
        "ram:b1f428:8"
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
      "site": "005ba8c4",
      "value": [
        "leaf",
        "ram:b28ff0:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "005ba884",
      "value": [
        "leaf",
        "ram:b28f54:8"
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
      "site": "005ba918",
      "value": [
        "leaf",
        "ram:47ad34:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "005ba8d8",
      "value": [
        "leaf",
        "ram:47acf4:8"
      ]
    },
    "ordinal": 20,
    "slot": 0
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "005ba82c",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "00b1f428"
      ]
    ],
    [
      "005ba8b8",
      "DATA",
      [
        "storage",
        "003c79f8",
        null,
        "qword"
      ]
    ],
    [
      "005ba8c4",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "00b28f54"
      ]
    ]
  ],
  "added": [
    [
      "005ba82c",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "00b1f4c4"
      ]
    ],
    [
      "005ba8b8",
      "DATA",
      [
        "storage",
        "003c79f8",
        null,
        "dword"
      ]
    ],
    [
      "005ba8c4",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "00b28ff0"
      ]
    ]
  ]
}
~~~


~~~diff
- 005ba7ac ["INT_ADD", "register:40f0:8", ["const:5ba7ac:8", "const:4:8"]]
- 005ba7ac ["CALL", null, ["callee:00851550:8"]]
+ 005ba7ec ["INT_ADD", "register:40f0:8", ["const:5ba7ec:8", "const:4:8"]]
+ 005ba7ec ["CALL", null, ["callee:00851550:8"]]
- 005ba7ec ["INT_ADD", "register:40f0:8", ["const:5ba7ec:8", "const:4:8"]]
- 005ba7ec ["CALL", null, ["ram:b1f428:8"]]
+ 005ba82c ["INT_ADD", "register:40f0:8", ["const:5ba82c:8", "const:4:8"]]
+ 005ba82c ["CALL", null, ["ram:b1f4c4:8"]]
- 005ba884 ["INT_ADD", "register:40f0:8", ["const:5ba884:8", "const:4:8"]]
- 005ba884 ["CALL", null, ["ram:b28f54:8"]]
+ 005ba8c4 ["INT_ADD", "register:40f0:8", ["const:5ba8c4:8", "const:4:8"]]
+ 005ba8c4 ["CALL", null, ["ram:b28ff0:8"]]
~~~


<a id="compare-04e3cc607c06ebf3bf921a3bfc234b9a"></a>

### [`005ba958`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005ba/005ba958.md) → [`005ba998`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005ba/005ba998.md) FUN_005ba998

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 12件 [`005badcc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005ba/005badcc.md) [`005bae9c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005ba/005bae9c.md) [`00c53d00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c53/00c53d00.md) [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md) [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md)
- 新版 呼出元 0件  · 呼出先 12件 [`005bae0c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005ba/005bae0c.md) [`005baedc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005ba/005baedc.md) [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies, store_value

命令の説明率　旧版 95.40% / 新版 95.40%

優先判定に残った影響 `call_argument_candidate` 1件, `store_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "005baa28",
      "incomplete_value": true,
      "site": "005baa34",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:d90:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "005ba9e8",
      "incomplete_value": true,
      "site": "005ba9f4",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:d50:8"
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
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "005baae8",
      "incomplete_value": false,
      "site": "005baaec",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:2a3000:8"
          ],
          [
            "leaf",
            "const:eda:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "005baaa8",
      "incomplete_value": false,
      "site": "005baaac",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:2a3000:8"
          ],
          [
            "leaf",
            "const:f27:8"
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
      "005ba9e0",
      "DATA",
      [
        "storage",
        "00c70a50",
        null,
        "pointer"
      ]
    ],
    [
      "005baa28",
      "READ",
      [
        "storage",
        "002c2d50",
        null,
        null
      ]
    ],
    [
      "005baa3c",
      "PARAM",
      [
        "storage",
        "005bae9c",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "005ba9e0",
      "DATA",
      [
        "storage",
        "00c70b20",
        null,
        "pointer"
      ]
    ],
    [
      "005baa28",
      "READ",
      [
        "storage",
        "002c2d90",
        null,
        null
      ]
    ],
    [
      "005baa3c",
      "PARAM",
      [
        "storage",
        "005baedc",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 005baa34 ["INT_ADD", "register:40f0:8", ["const:5baa34:8", "const:4:8"]]
- 005baa34 ["CALL", null, ["callee:00c53da0:8"]]
+ 005baa74 ["INT_ADD", "register:40f0:8", ["const:5baa74:8", "const:4:8"]]
+ 005baa74 ["CALL", null, ["callee:00c53da0:8"]]
- 005baaac ["INT_ADD", "register:40f0:8", ["const:5baaac:8", "const:4:8"]]
- 005baaac ["CALL", null, ["callee:00c581f0:8"]]
+ 005baaec ["INT_ADD", "register:40f0:8", ["const:5baaec:8", "const:4:8"]]
+ 005baaec ["CALL", null, ["callee:00c581f0:8"]]
- 005ba984 ["INT_ADD", "register:40f0:8", ["const:5ba984:8", "const:4:8"]]
- 005ba984 ["CALL", null, ["callee:00c57f60:8"]]
+ 005ba9c4 ["INT_ADD", "register:40f0:8", ["const:5ba9c4:8", "const:4:8"]]
+ 005ba9c4 ["CALL", null, ["callee:00c57f60:8"]]
~~~


<a id="compare-02ef3b185d547ba9b5b8e935aa66507e"></a>

### [`005bab64`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005ba/005bab64.md) → [`005baba4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005ba/005baba4.md) FUN_005baba4

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 4件 [`00c53d00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c53/00c53d00.md) [`00c57e80`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e80.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c584e0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c584e0.md)
- 新版 呼出元 0件  · 呼出先 4件 [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c585b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c585b0.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 95.56% / 新版 95.56%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "005babbc",
      "incomplete_value": false,
      "site": "005babc0",
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
            "const:ac0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "005bab7c",
      "incomplete_value": false,
      "site": "005bab80",
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
            "const:9f0:8"
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
      "005babc0",
      "DATA",
      [
        "storage",
        "00c709f0",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "005babc0",
      "DATA",
      [
        "storage",
        "00c70ac0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 005babc0 ["INT_ADD", "register:40f0:8", ["const:5babc0:8", "const:4:8"]]
- 005babc0 ["CALL", null, ["callee:00c53da0:8"]]
+ 005bac00 ["INT_ADD", "register:40f0:8", ["const:5bac00:8", "const:4:8"]]
+ 005bac00 ["CALL", null, ["callee:00c53da0:8"]]
- 005bab7c ["COPY", "tmp:0:8", ["const:9f0:8"]]
- 005bab7c ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 005bab7c ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 005bab7c ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 005babbc ["COPY", "tmp:0:8", ["const:ac0:8"]]
+ 005babbc ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 005babbc ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 005babbc ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
- 005bab8c ["INT_ADD", "register:40f0:8", ["const:5bab8c:8", "const:4:8"]]
- 005bab8c ["CALL", null, ["callee:00c57f80:8"]]
+ 005babcc ["INT_ADD", "register:40f0:8", ["const:5babcc:8", "const:4:8"]]
+ 005babcc ["CALL", null, ["callee:00c57f80:8"]]
~~~


<a id="compare-42075977eb96892ecfe22e0061483795"></a>

### [`005bad78`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005ba/005bad78.md) → [`005badb8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005ba/005badb8.md) FUN_005badb8

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 5件 [`00c57e60`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e60.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c580d0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c580d0.md) [`00c582f0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c582f0.md) [`00c58300`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58300.md)
- 新版 呼出元 0件  · 呼出先 5件 [`00c57f30`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f30.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c581a0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c581a0.md) [`00c583c0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c583c0.md) [`00c583d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c583d0.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 85.71% / 新版 85.71%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "005baddc",
      "incomplete_value": true,
      "site": "005baddc",
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
      "definition_site": "005bad9c",
      "incomplete_value": true,
      "site": "005bad9c",
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
      "005badd0",
      "READ",
      [
        "storage",
        "00c9ac50",
        null,
        "pointer"
      ]
    ],
    [
      "005baddc",
      "DATA",
      [
        "storage",
        "00c92cd8",
        null,
        "pointer"
      ]
    ]
  ],
  "added": [
    [
      "005badd0",
      "READ",
      [
        "storage",
        "00c9ad20",
        null,
        "pointer"
      ]
    ],
    [
      "005baddc",
      "DATA",
      [
        "storage",
        "00c92da8",
        null,
        "pointer"
      ]
    ]
  ]
}
~~~


~~~diff
- 005bad90 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:c50:8"]]
- 005bad90 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
+ 005badd0 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:d20:8"]]
+ 005badd0 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
- 005bada0 ["INT_ADD", "register:40f0:8", ["const:5bada0:8", "const:4:8"]]
- 005bada0 ["CALL", null, ["callee:00c581a0:8"]]
+ 005bade0 ["INT_ADD", "register:40f0:8", ["const:5bade0:8", "const:4:8"]]
+ 005bade0 ["CALL", null, ["callee:00c581a0:8"]]
- 005bada8 ["INT_ADD", "register:40f0:8", ["const:5bada8:8", "const:4:8"]]
- 005bada8 ["CALL", null, ["callee:00c57f30:8"]]
+ 005bade8 ["INT_ADD", "register:40f0:8", ["const:5bade8:8", "const:4:8"]]
+ 005bade8 ["CALL", null, ["callee:00c57f30:8"]]
~~~


<a id="compare-395fe107d5915680000b1c5b582f9402"></a>

### [`005bafb8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005ba/005bafb8.md) → [`005baff8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005ba/005baff8.md) _INIT_63

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 5件 [`0043ae70`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043a/0043ae70.md) [`0043b7f8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043b7f8.md) [`00c57e30`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e30.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md)
- 新版 呼出元 0件  · 呼出先 5件 [`0043aeb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043a/0043aeb0.md) [`0043b838`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b838.md) [`00c57f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f00.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies, operation_sequence, store_value

命令の説明率　旧版 87.57% / 新版 87.57%

優先判定に残った影響 `call_argument_candidate` 3件, `store_value` 5件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "005bb078",
      "incomplete_value": true,
      "site": "005bb094",
      "value": [
        "LOAD",
        "16",
        [
          [
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
      "definition_site": "005bb038",
      "incomplete_value": true,
      "site": "005bb054",
      "value": [
        "LOAD",
        "16",
        [
          [
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
      "definition_site": "005bb098",
      "incomplete_value": true,
      "site": "005bb0b0",
      "value": [
        "LOAD",
        "16",
        [
          [
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
      "definition_site": "005bb058",
      "incomplete_value": true,
      "site": "005bb070",
      "value": [
        "LOAD",
        "16",
        [
          [
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
      "definition_site": "005bb0b4",
      "incomplete_value": true,
      "site": "005bb0d0",
      "value": [
        "LOAD",
        "16",
        [
          [
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
      "definition_site": "005bb074",
      "incomplete_value": true,
      "site": "005bb090",
      "value": [
        "LOAD",
        "16",
        [
          [
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
      "005bb034",
      "READ",
      [
        "storage",
        "002b7f26",
        null,
        "string"
      ]
    ],
    [
      "005bb058",
      "READ",
      [
        "storage",
        "002b7f39",
        null,
        "string"
      ]
    ],
    [
      "005bb078",
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
      "005bb034",
      "READ",
      [
        "storage",
        "002b7f66",
        null,
        "string"
      ]
    ],
    [
      "005bb058",
      "READ",
      [
        "storage",
        "002b7f79",
        null,
        "string"
      ]
    ],
    [
      "005bb078",
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
- 005bb030 ["COPY", "tmp:0:8", ["const:dc2:8"]]
- 005bb030 ["INT_CARRY", "register:105:1", ["register:4050:8", "tmp:0:8"]]
- 005bb030 ["INT_SCARRY", "register:106:1", ["register:4050:8", "tmp:0:8"]]
- 005bb030 ["INT_ADD", "tmp:1:8", ["register:4050:8", "tmp:0:8"]]
+ 005bb070 ["COPY", "tmp:0:8", ["const:d6e:8"]]
+ 005bb070 ["INT_CARRY", "register:105:1", ["register:4050:8", "tmp:0:8"]]
+ 005bb070 ["INT_SCARRY", "register:106:1", ["register:4050:8", "tmp:0:8"]]
+ 005bb070 ["INT_ADD", "tmp:1:8", ["register:4050:8", "tmp:0:8"]]
- 005bb050 ["COPY", "tmp:0:8", ["const:f62:8"]]
- 005bb050 ["INT_CARRY", "register:105:1", ["register:4050:8", "tmp:0:8"]]
- 005bb050 ["INT_SCARRY", "register:106:1", ["register:4050:8", "tmp:0:8"]]
- 005bb050 ["INT_ADD", "tmp:1:8", ["register:4050:8", "tmp:0:8"]]
+ 005bb090 ["COPY", "tmp:0:8", ["const:f15:8"]]
+ 005bb090 ["INT_CARRY", "register:105:1", ["register:4050:8", "tmp:0:8"]]
+ 005bb090 ["INT_SCARRY", "register:106:1", ["register:4050:8", "tmp:0:8"]]
+ 005bb090 ["INT_ADD", "tmp:1:8", ["register:4050:8", "tmp:0:8"]]
- 005bb1ec ["INT_ADD", "register:40f0:8", ["const:5bb1ec:8", "const:4:8"]]
- 005bb1ec ["CALL", null, ["callee:00c57f00:8"]]
+ 005bb22c ["INT_ADD", "register:40f0:8", ["const:5bb22c:8", "const:4:8"]]
+ 005bb22c ["CALL", null, ["callee:00c57f00:8"]]
~~~


<a id="compare-f37e0eceade53c5f51dfbc034522200c"></a>

### [`005bb384`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005bb/005bb384.md) → [`005bb3c4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005bb/005bb3c4.md) FUN_005bb3c4

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`005bb348`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005bb/005bb348.md) · 呼出先 14件 [`0043bba4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043bba4.md) [`0048791c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00487/0048791c.md) [`0048793c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00487/0048793c.md) [`00487b80`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00487/00487b80.md) [`00487e20`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00487/00487e20.md)
- 新版 呼出元 1件 [`005bb388`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005bb/005bb388.md) · 呼出先 14件 [`0043bbe4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bbe4.md) [`0048795c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00487/0048795c.md) [`0048797c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00487/0048797c.md) [`00487bc0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00487/00487bc0.md) [`00487e60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00487/00487e60.md)

変更の種類 constant, operands_and_dependencies, operation_sequence, store_destination, store_value

命令の説明率　旧版 90.55% / 新版 90.55%

優先判定に残った影響 `store_destination` 1件, `store_value` 7件

アドレスに依存する影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "005bb404",
      "incomplete_value": false,
      "site": "005bb410",
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
      "definition_site": "005bb3c4",
      "incomplete_value": false,
      "site": "005bb3d0",
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
      "definition_site": "005bb438",
      "incomplete_value": true,
      "site": "005bb448",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:2cf:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "005bb3f8",
      "incomplete_value": true,
      "site": "005bb408",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:31c:8"
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
      "definition_site": "005bb43c",
      "incomplete_value": true,
      "site": "005bb44c",
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
      "definition_site": "005bb3fc",
      "incomplete_value": true,
      "site": "005bb40c",
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
      "005bb410",
      "DATA",
      [
        "storage",
        "00c64d38",
        null,
        "undefined *"
      ]
    ],
    [
      "005bb438",
      "READ",
      [
        "storage",
        "002a131c",
        null,
        "string"
      ]
    ],
    [
      "005bb43c",
      "READ",
      [
        "storage",
        "002a132c",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "005bb410",
      "DATA",
      [
        "storage",
        "00c64e08",
        null,
        "undefined *"
      ]
    ],
    [
      "005bb438",
      "READ",
      [
        "storage",
        "002a12cf",
        null,
        "string"
      ]
    ],
    [
      "005bb43c",
      "READ",
      [
        "storage",
        "002a12df",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 005bb44c ["INT_ADD", "register:40f0:8", ["const:5bb44c:8", "const:4:8"]]
- 005bb44c ["CALL", null, ["callee:0043bbe4:8"]]
+ 005bb48c ["INT_ADD", "register:40f0:8", ["const:5bb48c:8", "const:4:8"]]
+ 005bb48c ["CALL", null, ["callee:0043bbe4:8"]]
- 005bb648 ["INT_ADD", "register:40f0:8", ["const:5bb648:8", "const:4:8"]]
- 005bb648 ["CALL", null, ["callee:00c58080:8"]]
+ 005bb688 ["INT_ADD", "register:40f0:8", ["const:5bb688:8", "const:4:8"]]
+ 005bb688 ["CALL", null, ["callee:00c58080:8"]]
- 005bb3b8 ["INT_ADD", "register:40f0:8", ["const:5bb3b8:8", "const:4:8"]]
- 005bb3b8 ["CALL", null, ["callee:00487e60:8"]]
+ 005bb3f8 ["INT_ADD", "register:40f0:8", ["const:5bb3f8:8", "const:4:8"]]
+ 005bb3f8 ["CALL", null, ["callee:00487e60:8"]]
~~~


<a id="compare-767df08e0970d1a0332662674982cc5d"></a>

### [`005bb6f8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005bb/005bb6f8.md) → [`005bb738`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005bb/005bb738.md) FUN_005bb738

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`005bb348`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005bb/005bb348.md) · 呼出先 13件 [`0043bba4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043bba4.md) [`0048791c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00487/0048791c.md) [`0048793c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00487/0048793c.md) [`00487e20`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00487/00487e20.md) [`00488658`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00488/00488658.md)
- 新版 呼出元 1件 [`005bb388`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005bb/005bb388.md) · 呼出先 13件 [`0043bbe4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bbe4.md) [`0048795c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00487/0048795c.md) [`0048797c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00487/0048797c.md) [`00487e60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00487/00487e60.md) [`00488698`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00488/00488698.md)

変更の種類 constant, operands_and_dependencies, operation_sequence, store_destination, store_value

命令の説明率　旧版 96.17% / 新版 96.17%

優先判定に残った影響 `store_destination` 1件, `store_value` 7件

アドレスに依存する影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "005bb778",
      "incomplete_value": false,
      "site": "005bb77c",
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
      "definition_site": "005bb738",
      "incomplete_value": false,
      "site": "005bb73c",
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
      "definition_site": "005bb794",
      "incomplete_value": true,
      "site": "005bb7a4",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:8e2:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "005bb754",
      "incomplete_value": true,
      "site": "005bb764",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:93e:8"
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
      "definition_site": "005bb798",
      "incomplete_value": true,
      "site": "005bb7a8",
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
      "definition_site": "005bb758",
      "incomplete_value": true,
      "site": "005bb768",
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
    "ordinal": 17,
    "slot": 2
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "005bb77c",
      "DATA",
      [
        "storage",
        "00c64d38",
        null,
        "undefined *"
      ]
    ],
    [
      "005bb794",
      "READ",
      [
        "storage",
        "002ad93e",
        null,
        "string"
      ]
    ],
    [
      "005bb798",
      "READ",
      [
        "storage",
        "002ad94e",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "005bb77c",
      "DATA",
      [
        "storage",
        "00c64e08",
        null,
        "undefined *"
      ]
    ],
    [
      "005bb794",
      "READ",
      [
        "storage",
        "002ad8e2",
        null,
        "string"
      ]
    ],
    [
      "005bb798",
      "READ",
      [
        "storage",
        "002ad8f2",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 005bbde0 ["INT_ADD", "register:40f0:8", ["const:5bbde0:8", "const:4:8"]]
- 005bbde0 ["CALL", null, ["callee:00488698:8"]]
+ 005bbe20 ["INT_ADD", "register:40f0:8", ["const:5bbe20:8", "const:4:8"]]
+ 005bbe20 ["CALL", null, ["callee:00488698:8"]]
- 005bbe54 ["INT_ADD", "register:40f0:8", ["const:5bbe54:8", "const:4:8"]]
- 005bbe54 ["CALL", null, ["callee:00c58080:8"]]
+ 005bbe94 ["INT_ADD", "register:40f0:8", ["const:5bbe94:8", "const:4:8"]]
+ 005bbe94 ["CALL", null, ["callee:00c58080:8"]]
- 005bb730 ["INT_ADD", "register:40f0:8", ["const:5bb730:8", "const:4:8"]]
- 005bb730 ["CALL", null, ["callee:00487e60:8"]]
+ 005bb770 ["INT_ADD", "register:40f0:8", ["const:5bb770:8", "const:4:8"]]
+ 005bb770 ["CALL", null, ["callee:00487e60:8"]]
~~~


<a id="compare-d28afb75377f17393a425f1b95653b44"></a>

### [`005bbf14`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005bb/005bbf14.md) → [`005bbf54`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005bb/005bbf54.md) FUN_005bbf54

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`005bb348`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005bb/005bb348.md) · 呼出先 15件 [`00440ec0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00440/00440ec0.md) [`0048791c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00487/0048791c.md) [`0048793c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00487/0048793c.md) [`00487b80`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00487/00487b80.md) [`00487e20`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00487/00487e20.md)
- 新版 呼出元 1件 [`005bb388`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005bb/005bb388.md) · 呼出先 15件 [`00440f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00440/00440f00.md) [`0048795c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00487/0048795c.md) [`0048797c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00487/0048797c.md) [`00487bc0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00487/00487bc0.md) [`00487e60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00487/00487e60.md)

変更の種類 constant, operands_and_dependencies, operation_sequence, store_value

命令の説明率　旧版 93.41% / 新版 93.41%

優先判定に残った影響 `store_value` 4件

アドレスに依存する影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "005bbf94",
      "incomplete_value": false,
      "site": "005bbf9c",
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
      "definition_site": "005bbf54",
      "incomplete_value": false,
      "site": "005bbf5c",
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
      "definition_site": "005bbfb8",
      "incomplete_value": true,
      "site": "005bbfc8",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:14a:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "005bbf78",
      "incomplete_value": true,
      "site": "005bbf88",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:197:8"
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
      "definition_site": "005bbfbc",
      "incomplete_value": true,
      "site": "005bbfcc",
      "value": [
        "LOAD",
        "16",
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
                "const:9:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "005bbf7c",
      "incomplete_value": true,
      "site": "005bbf8c",
      "value": [
        "LOAD",
        "16",
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
                "const:9:8"
              ]
            ]
          ]
        ]
      ]
    },
    "ordinal": 17,
    "slot": 2
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "005bbf9c",
      "DATA",
      [
        "storage",
        "00c64d38",
        null,
        "undefined *"
      ]
    ],
    [
      "005bbfb8",
      "READ",
      [
        "storage",
        "002a2197",
        null,
        "string"
      ]
    ],
    [
      "005bbfbc",
      "READ",
      [
        "storage",
        "002a21a0",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "005bbf9c",
      "DATA",
      [
        "storage",
        "00c64e08",
        null,
        "undefined *"
      ]
    ],
    [
      "005bbfb8",
      "READ",
      [
        "storage",
        "002a214a",
        null,
        "string"
      ]
    ],
    [
      "005bbfbc",
      "READ",
      [
        "storage",
        "002a2153",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 005bbf48 ["INT_ADD", "register:40f0:8", ["const:5bbf48:8", "const:4:8"]]
- 005bbf48 ["CALL", null, ["callee:00487e60:8"]]
+ 005bbf88 ["INT_ADD", "register:40f0:8", ["const:5bbf88:8", "const:4:8"]]
+ 005bbf88 ["CALL", null, ["callee:00487e60:8"]]
- 005bbfd0 ["INT_ADD", "register:40f0:8", ["const:5bbfd0:8", "const:4:8"]]
- 005bbfd0 ["CALL", null, ["callee:0048795c:8"]]
+ 005bc010 ["INT_ADD", "register:40f0:8", ["const:5bc010:8", "const:4:8"]]
+ 005bc010 ["CALL", null, ["callee:0048795c:8"]]
- 005bbf54 ["COPY", "tmp:0:8", ["const:d38:8"]]
- 005bbf54 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 005bbf54 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 005bbf54 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 005bbf94 ["COPY", "tmp:0:8", ["const:e08:8"]]
+ 005bbf94 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 005bbf94 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 005bbf94 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
~~~


<a id="compare-ca688ac4ee1fb213a61e2907dfd02276"></a>

### [`005bc238`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005bc/005bc238.md) → [`005bc278`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005bc/005bc278.md) FUN_005bc278

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`005bb348`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005bb/005bb348.md) · 呼出先 15件 [`00440ec0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00440/00440ec0.md) [`00470840`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00470/00470840.md) [`0048791c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00487/0048791c.md) [`0048793c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00487/0048793c.md) [`00487b80`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00487/00487b80.md)
- 新版 呼出元 1件 [`005bb388`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005bb/005bb388.md) · 呼出先 15件 [`00440f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00440/00440f00.md) [`00470880`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00470/00470880.md) [`0048795c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00487/0048795c.md) [`0048797c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00487/0048797c.md) [`00487bc0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00487/00487bc0.md)

変更の種類 constant, operands_and_dependencies, operation_sequence, store_destination, store_value

命令の説明率　旧版 88.41% / 新版 88.41%

優先判定に残った影響 `store_destination` 1件, `store_value` 7件

アドレスに依存する影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "005bc2bc",
      "incomplete_value": false,
      "site": "005bc2c4",
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
      "definition_site": "005bc27c",
      "incomplete_value": false,
      "site": "005bc284",
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
      "definition_site": "005bc2e0",
      "incomplete_value": true,
      "site": "005bc2f0",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:750:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "005bc2a0",
      "incomplete_value": true,
      "site": "005bc2b0",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:7a4:8"
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
      "definition_site": "005bc2e4",
      "incomplete_value": true,
      "site": "005bc2f4",
      "value": [
        "LOAD",
        "16",
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
                "const:9:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "005bc2a4",
      "incomplete_value": true,
      "site": "005bc2b4",
      "value": [
        "LOAD",
        "16",
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
                "const:9:8"
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
      "005bc2c4",
      "DATA",
      [
        "storage",
        "00c64d38",
        null,
        "undefined *"
      ]
    ],
    [
      "005bc2e0",
      "READ",
      [
        "storage",
        "002bc7a4",
        null,
        "string"
      ]
    ],
    [
      "005bc2e4",
      "READ",
      [
        "storage",
        "002bc7ad",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "005bc2c4",
      "DATA",
      [
        "storage",
        "00c64e08",
        null,
        "undefined *"
      ]
    ],
    [
      "005bc2e0",
      "READ",
      [
        "storage",
        "002bc750",
        null,
        "string"
      ]
    ],
    [
      "005bc2e4",
      "READ",
      [
        "storage",
        "002bc759",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 005bc270 ["INT_ADD", "register:40f0:8", ["const:5bc270:8", "const:4:8"]]
- 005bc270 ["CALL", null, ["callee:00487e60:8"]]
+ 005bc2b0 ["INT_ADD", "register:40f0:8", ["const:5bc2b0:8", "const:4:8"]]
+ 005bc2b0 ["CALL", null, ["callee:00487e60:8"]]
- 005bc430 ["INT_ADD", "register:40f0:8", ["const:5bc430:8", "const:4:8"]]
- 005bc430 ["CALL", null, ["callee:00c58080:8"]]
+ 005bc470 ["INT_ADD", "register:40f0:8", ["const:5bc470:8", "const:4:8"]]
+ 005bc470 ["CALL", null, ["callee:00c58080:8"]]
- 005bc27c ["COPY", "tmp:0:8", ["const:d38:8"]]
- 005bc27c ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 005bc27c ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 005bc27c ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 005bc2bc ["COPY", "tmp:0:8", ["const:e08:8"]]
+ 005bc2bc ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 005bc2bc ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 005bc2bc ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
~~~


<a id="compare-2548dd90b0ac669835ec62919918b979"></a>

### [`005bc518`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005bc/005bc518.md) → [`005bc558`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005bc/005bc558.md) FUN_005bc558

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`005bb348`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005bb/005bb348.md) · 呼出先 14件 [`0043bba4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043bba4.md) [`0048791c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00487/0048791c.md) [`0048793c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00487/0048793c.md) [`00487b80`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00487/00487b80.md) [`00487e20`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00487/00487e20.md)
- 新版 呼出元 1件 [`005bb388`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005bb/005bb388.md) · 呼出先 14件 [`0043bbe4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bbe4.md) [`0048795c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00487/0048795c.md) [`0048797c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00487/0048797c.md) [`00487bc0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00487/00487bc0.md) [`00487e60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00487/00487e60.md)

変更の種類 constant, operands_and_dependencies, operation_sequence, store_destination, store_value

命令の説明率　旧版 87.74% / 新版 87.74%

優先判定に残った影響 `store_destination` 1件, `store_value` 7件

アドレスに依存する影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "005bc598",
      "incomplete_value": false,
      "site": "005bc5a8",
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
      "definition_site": "005bc558",
      "incomplete_value": false,
      "site": "005bc568",
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
      "definition_site": "005bc5cc",
      "incomplete_value": true,
      "site": "005bc5dc",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:3a:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "005bc58c",
      "incomplete_value": true,
      "site": "005bc59c",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:9:8"
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
      "definition_site": "005bc5d0",
      "incomplete_value": true,
      "site": "005bc5e0",
      "value": [
        "LOAD",
        "16",
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
      "definition_site": "005bc590",
      "incomplete_value": true,
      "site": "005bc5a0",
      "value": [
        "LOAD",
        "16",
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
      "005bc5a8",
      "DATA",
      [
        "storage",
        "00c64d38",
        null,
        "undefined *"
      ]
    ],
    [
      "005bc5cc",
      "READ",
      [
        "storage",
        "002b5009",
        null,
        "string"
      ]
    ],
    [
      "005bc5d0",
      "READ",
      [
        "storage",
        "002b5017",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "005bc5a8",
      "DATA",
      [
        "storage",
        "00c64e08",
        null,
        "undefined *"
      ]
    ],
    [
      "005bc5cc",
      "READ",
      [
        "storage",
        "002b503a",
        null,
        "string"
      ]
    ],
    [
      "005bc5d0",
      "READ",
      [
        "storage",
        "002b5048",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 005bc5e0 ["INT_ADD", "register:40f0:8", ["const:5bc5e0:8", "const:4:8"]]
- 005bc5e0 ["CALL", null, ["callee:0043bbe4:8"]]
+ 005bc620 ["INT_ADD", "register:40f0:8", ["const:5bc620:8", "const:4:8"]]
+ 005bc620 ["CALL", null, ["callee:0043bbe4:8"]]
- 005bc724 ["INT_ADD", "register:40f0:8", ["const:5bc724:8", "const:4:8"]]
- 005bc724 ["CALL", null, ["callee:00c58080:8"]]
+ 005bc764 ["INT_ADD", "register:40f0:8", ["const:5bc764:8", "const:4:8"]]
+ 005bc764 ["CALL", null, ["callee:00c58080:8"]]
- 005bc54c ["INT_ADD", "register:40f0:8", ["const:5bc54c:8", "const:4:8"]]
- 005bc54c ["CALL", null, ["callee:00487e60:8"]]
+ 005bc58c ["INT_ADD", "register:40f0:8", ["const:5bc58c:8", "const:4:8"]]
+ 005bc58c ["CALL", null, ["callee:00487e60:8"]]
~~~


<a id="compare-eebd514e257e02e58967e309422fb28b"></a>

### [`005bc7cc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005bc/005bc7cc.md) → [`005bc80c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005bc/005bc80c.md) FUN_005bc80c

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 2件 [`00af0108`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00af0/00af0108.md) [`00af06c0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00af0/00af06c0.md) · 呼出先 59件 [`0043bba4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043bba4.md) [`00440ec0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00440/00440ec0.md) [`0046d7b0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0046d/0046d7b0.md) [`0046dabc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0046d/0046dabc.md) [`0046dad4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0046d/0046dad4.md)
- 新版 呼出元 2件 [`00af01a4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00af0/00af01a4.md) [`00af075c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00af0/00af075c.md) · 呼出先 59件 [`0043bbe4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bbe4.md) [`00440f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00440/00440f00.md) [`0046d7f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046d/0046d7f0.md) [`0046dafc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046d/0046dafc.md) [`0046db14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046d/0046db14.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 99.52% / 新版 99.52%

優先判定に残った影響 `store_value` 5件

アドレスに依存する影響 `store_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "005bcbf8",
      "incomplete_value": true,
      "site": "005bcc04",
      "value": [
        "LOAD",
        "16",
        [
          [
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
      "definition_site": "005bcbb8",
      "incomplete_value": true,
      "site": "005bcbc4",
      "value": [
        "LOAD",
        "16",
        [
          [
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
    "ordinal": 52,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "005bde68",
      "incomplete_value": true,
      "site": "005bde70",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:7d0:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "005bde28",
      "incomplete_value": true,
      "site": "005bde30",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:790:8"
              ]
            ]
          ]
        ]
      ]
    },
    "ordinal": 213,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "005bde74",
      "incomplete_value": true,
      "site": "005bde78",
      "value": [
        "LOAD",
        "16",
        [
          [
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
      "definition_site": "005bde34",
      "incomplete_value": true,
      "site": "005bde38",
      "value": [
        "LOAD",
        "16",
        [
          [
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
    "ordinal": 214,
    "slot": 2
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "005bca74",
      "DATA",
      [
        "storage",
        "0039b97c",
        null,
        "dword"
      ]
    ],
    [
      "005bcb50",
      "READ",
      [
        "storage",
        "002b8e1d",
        null,
        "string"
      ]
    ],
    [
      "005bcbf8",
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
      "005bca74",
      "DATA",
      [
        "storage",
        "0039b97c",
        null,
        "byte[23]"
      ]
    ],
    [
      "005bcb50",
      "READ",
      [
        "storage",
        "002b8dc9",
        null,
        "string"
      ]
    ],
    [
      "005bcbf8",
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
- 005bc80c ["INT_ADD", "register:40f0:8", ["const:5bc80c:8", "const:4:8"]]
- 005bc80c ["CALL", null, ["callee:00851550:8"]]
+ 005bc84c ["INT_ADD", "register:40f0:8", ["const:5bc84c:8", "const:4:8"]]
+ 005bc84c ["CALL", null, ["callee:00851550:8"]]
- 005bc81c ["INT_ADD", "register:40f0:8", ["const:5bc81c:8", "const:4:8"]]
- 005bc81c ["CALL", null, ["callee:00851550:8"]]
+ 005bc85c ["INT_ADD", "register:40f0:8", ["const:5bc85c:8", "const:4:8"]]
+ 005bc85c ["CALL", null, ["callee:00851550:8"]]
- 005bc82c ["INT_ADD", "register:40f0:8", ["const:5bc82c:8", "const:4:8"]]
- 005bc82c ["CALL", null, ["callee:00851550:8"]]
+ 005bc86c ["INT_ADD", "register:40f0:8", ["const:5bc86c:8", "const:4:8"]]
+ 005bc86c ["CALL", null, ["callee:00851550:8"]]
~~~


<a id="compare-cf1a3a379ba840729ab26c1e21be5f66"></a>

### [`005c1830`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005c1/005c1830.md) → [`005c1870`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005c1/005c1870.md) FUN_005c1870

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`005bbf14`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005bb/005bbf14.md) · 呼出先 1件 [`0043b778`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043b778.md)
- 新版 呼出元 1件 [`005bbf54`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005bb/005bbf54.md) · 呼出先 1件 [`0043b7b8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b7b8.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 80.00% / 新版 80.00%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "005c187c",
      "incomplete_value": false,
      "site": "005c1880",
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
      "definition_site": "005c183c",
      "incomplete_value": false,
      "site": "005c1840",
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
      "005c187c",
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
      "005c187c",
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
- 005c1840 ["INT_ADD", "register:40f0:8", ["const:5c1840:8", "const:4:8"]]
- 005c1840 ["CALL", null, ["callee:0043b7b8:8"]]
+ 005c1880 ["INT_ADD", "register:40f0:8", ["const:5c1880:8", "const:4:8"]]
+ 005c1880 ["CALL", null, ["callee:0043b7b8:8"]]
- 005c183c ["COPY", "tmp:0:8", ["const:f4c:8"]]
- 005c183c ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 005c183c ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 005c183c ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 005c187c ["COPY", "tmp:0:8", ["const:f8c:8"]]
+ 005c187c ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 005c187c ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 005c187c ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
~~~


<a id="compare-0a40ff53bc386a5c182a10d26462a785"></a>

### [`005c1844`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005c1/005c1844.md) → [`005c1884`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005c1/005c1884.md) FUN_005c1884

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 9件 [`005bc7cc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005bc/005bc7cc.md) [`006847fc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00684/006847fc.md) [`007435f0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00743/007435f0.md) [`00744478`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00744/00744478.md) [`007bda44`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007bd/007bda44.md) · 呼出先 2件 [`005c19fc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005c1/005c19fc.md) [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md)
- 新版 呼出元 9件 [`005bc80c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005bc/005bc80c.md) [`0068483c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00684/0068483c.md) [`00743648`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00743/00743648.md) [`007444d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00744/007444d0.md) [`007bda9c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007bd/007bda9c.md) · 呼出先 2件 [`005c1a3c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005c1/005c1a3c.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 96.36% / 新版 96.36%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "005c19bc",
      "incomplete_value": true,
      "site": "005c19c8",
      "value": [
        "LOAD",
        "16",
        [
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
                "const:ba0:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "005c197c",
      "incomplete_value": true,
      "site": "005c1988",
      "value": [
        "LOAD",
        "16",
        [
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
                "const:b60:8"
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
      "005c19a0",
      "READ",
      [
        "storage",
        "002c2bb0",
        null,
        null
      ]
    ],
    [
      "005c19ac",
      "READ",
      [
        "storage",
        "002c26f0",
        null,
        null
      ]
    ],
    [
      "005c19bc",
      "READ",
      [
        "storage",
        "002c2b60",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "005c19a0",
      "READ",
      [
        "storage",
        "002c2bf0",
        null,
        null
      ]
    ],
    [
      "005c19ac",
      "READ",
      [
        "storage",
        "002c2730",
        null,
        null
      ]
    ],
    [
      "005c19bc",
      "READ",
      [
        "storage",
        "002c2ba0",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 005c1960 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:bb0:8"]]
- 005c1960 ["LOAD", "register:5000:16", ["const:1b1:8", "tmp:0:8"]]
- 005c1960 ["COPY", "register:5010:8", ["const:0:8"]]
- 005c1960 ["COPY", "register:5018:8", ["const:0:8"]]
+ 005c19a0 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:bf0:8"]]
+ 005c19a0 ["LOAD", "register:5000:16", ["const:1b1:8", "tmp:0:8"]]
+ 005c19a0 ["COPY", "register:5010:8", ["const:0:8"]]
+ 005c19a0 ["COPY", "register:5018:8", ["const:0:8"]]
- 005c196c ["INT_ADD", "tmp:0:8", ["register:4050:8", "const:6f0:8"]]
- 005c196c ["LOAD", "register:5040:16", ["const:1b1:8", "tmp:0:8"]]
- 005c196c ["COPY", "register:5050:8", ["const:0:8"]]
- 005c196c ["COPY", "register:5058:8", ["const:0:8"]]
+ 005c19ac ["INT_ADD", "tmp:0:8", ["register:4050:8", "const:730:8"]]
+ 005c19ac ["LOAD", "register:5040:16", ["const:1b1:8", "tmp:0:8"]]
+ 005c19ac ["COPY", "register:5050:8", ["const:0:8"]]
+ 005c19ac ["COPY", "register:5058:8", ["const:0:8"]]
- 005c197c ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:b60:8"]]
- 005c197c ["LOAD", "register:5000:16", ["const:1b1:8", "tmp:0:8"]]
- 005c197c ["COPY", "register:5010:8", ["const:0:8"]]
- 005c197c ["COPY", "register:5018:8", ["const:0:8"]]
+ 005c19bc ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:ba0:8"]]
+ 005c19bc ["LOAD", "register:5000:16", ["const:1b1:8", "tmp:0:8"]]
+ 005c19bc ["COPY", "register:5010:8", ["const:0:8"]]
+ 005c19bc ["COPY", "register:5018:8", ["const:0:8"]]
~~~


<a id="compare-c9d52d2c5bd6f02ffc7d20c425703677"></a>

### [`005c1cc8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005c1/005c1cc8.md) → [`005c1d08`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005c1/005c1d08.md) FUN_005c1d08

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`005bc7cc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005bc/005bc7cc.md) · 呼出先 1件 [`0043b778`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043b778.md)
- 新版 呼出元 1件 [`005bc80c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005bc/005bc80c.md) · 呼出先 1件 [`0043b7b8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b7b8.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 80.00% / 新版 80.00%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "005c1d14",
      "incomplete_value": false,
      "site": "005c1d18",
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
      "definition_site": "005c1cd4",
      "incomplete_value": false,
      "site": "005c1cd8",
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
      "005c1d14",
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
      "005c1d14",
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
- 005c1cd8 ["INT_ADD", "register:40f0:8", ["const:5c1cd8:8", "const:4:8"]]
- 005c1cd8 ["CALL", null, ["callee:0043b7b8:8"]]
+ 005c1d18 ["INT_ADD", "register:40f0:8", ["const:5c1d18:8", "const:4:8"]]
+ 005c1d18 ["CALL", null, ["callee:0043b7b8:8"]]
- 005c1cd4 ["COPY", "tmp:0:8", ["const:f4c:8"]]
- 005c1cd4 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 005c1cd4 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 005c1cd4 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 005c1d14 ["COPY", "tmp:0:8", ["const:f8c:8"]]
+ 005c1d14 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 005c1d14 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 005c1d14 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
~~~


<a id="compare-de5b38ee47176f353afd2301e891be69"></a>

### [`005c1cdc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005c1/005c1cdc.md) → [`005c1d1c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005c1/005c1d1c.md) FUN_005c1d1c

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 8件 [`005bc7cc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005bc/005bc7cc.md) [`0069a504`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0069a/0069a504.md) [`0069f0fc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0069f/0069f0fc.md) [`006a2a90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006a2/006a2a90.md) [`0089e87c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0089e/0089e87c.md) · 呼出先 1件 [`0043b778`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043b778.md)
- 新版 呼出元 8件 [`005bc80c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005bc/005bc80c.md) [`0069a55c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0069a/0069a55c.md) [`0069f154`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0069f/0069f154.md) [`006a2ae8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006a2/006a2ae8.md) [`0089e8d4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0089e/0089e8d4.md) · 呼出先 1件 [`0043b7b8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b7b8.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 80.00% / 新版 80.00%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "005c1d28",
      "incomplete_value": false,
      "site": "005c1d2c",
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
      "definition_site": "005c1ce8",
      "incomplete_value": false,
      "site": "005c1cec",
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
      "005c1d28",
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
      "005c1d28",
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
- 005c1cec ["INT_ADD", "register:40f0:8", ["const:5c1cec:8", "const:4:8"]]
- 005c1cec ["CALL", null, ["callee:0043b7b8:8"]]
+ 005c1d2c ["INT_ADD", "register:40f0:8", ["const:5c1d2c:8", "const:4:8"]]
+ 005c1d2c ["CALL", null, ["callee:0043b7b8:8"]]
- 005c1ce8 ["COPY", "tmp:0:8", ["const:f4c:8"]]
- 005c1ce8 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 005c1ce8 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 005c1ce8 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 005c1d28 ["COPY", "tmp:0:8", ["const:f8c:8"]]
+ 005c1d28 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 005c1d28 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 005c1d28 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
~~~


<a id="compare-54329a7c0ba3fa4da2517ec7b10bf257"></a>

### [`005c3ecc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005c3/005c3ecc.md) → [`005c3f0c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005c3/005c3f0c.md) _INIT_64

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
      "definition_site": "005c3f6c",
      "incomplete_value": true,
      "site": "005c3f88",
      "value": [
        "LOAD",
        "16",
        [
          [
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
      "definition_site": "005c3f2c",
      "incomplete_value": true,
      "site": "005c3f48",
      "value": [
        "LOAD",
        "16",
        [
          [
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
      "definition_site": "005c3fc8",
      "incomplete_value": true,
      "site": "005c3fe4",
      "value": [
        "LOAD",
        "16",
        [
          [
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
      "definition_site": "005c3f88",
      "incomplete_value": true,
      "site": "005c3fa4",
      "value": [
        "LOAD",
        "16",
        [
          [
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
      "definition_site": "005c3fe8",
      "incomplete_value": true,
      "site": "005c4004",
      "value": [
        "LOAD",
        "16",
        [
          [
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
      "definition_site": "005c3fa8",
      "incomplete_value": true,
      "site": "005c3fc4",
      "value": [
        "LOAD",
        "16",
        [
          [
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
      "005c3f48",
      "READ",
      [
        "storage",
        "002b7f26",
        null,
        "string"
      ]
    ],
    [
      "005c3f6c",
      "READ",
      [
        "storage",
        "002b7f39",
        null,
        "string"
      ]
    ],
    [
      "005c3f8c",
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
      "005c3f48",
      "READ",
      [
        "storage",
        "002b7f66",
        null,
        "string"
      ]
    ],
    [
      "005c3f6c",
      "READ",
      [
        "storage",
        "002b7f79",
        null,
        "string"
      ]
    ],
    [
      "005c3f8c",
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
- 005c3f64 ["COPY", "tmp:0:8", ["const:f62:8"]]
- 005c3f64 ["INT_CARRY", "register:105:1", ["register:4050:8", "tmp:0:8"]]
- 005c3f64 ["INT_SCARRY", "register:106:1", ["register:4050:8", "tmp:0:8"]]
- 005c3f64 ["INT_ADD", "tmp:1:8", ["register:4050:8", "tmp:0:8"]]
+ 005c3fa4 ["COPY", "tmp:0:8", ["const:f15:8"]]
+ 005c3fa4 ["INT_CARRY", "register:105:1", ["register:4050:8", "tmp:0:8"]]
+ 005c3fa4 ["INT_SCARRY", "register:106:1", ["register:4050:8", "tmp:0:8"]]
+ 005c3fa4 ["INT_ADD", "tmp:1:8", ["register:4050:8", "tmp:0:8"]]
- 005c4100 ["INT_ADD", "register:40f0:8", ["const:5c4100:8", "const:4:8"]]
- 005c4100 ["CALL", null, ["callee:00c57f00:8"]]
+ 005c4140 ["INT_ADD", "register:40f0:8", ["const:5c4140:8", "const:4:8"]]
+ 005c4140 ["CALL", null, ["callee:00c57f00:8"]]
- 005c3ef8 ["COPY", "tmp:0:8", ["const:8a0:8"]]
- 005c3ef8 ["INT_CARRY", "register:105:1", ["register:4098:8", "tmp:0:8"]]
- 005c3ef8 ["INT_SCARRY", "register:106:1", ["register:4098:8", "tmp:0:8"]]
- 005c3ef8 ["INT_ADD", "tmp:1:8", ["register:4098:8", "tmp:0:8"]]
+ 005c3f38 ["COPY", "tmp:0:8", ["const:9a0:8"]]
+ 005c3f38 ["INT_CARRY", "register:105:1", ["register:4098:8", "tmp:0:8"]]
+ 005c3f38 ["INT_SCARRY", "register:106:1", ["register:4098:8", "tmp:0:8"]]
+ 005c3f38 ["INT_ADD", "tmp:1:8", ["register:4098:8", "tmp:0:8"]]
~~~


<a id="compare-49e116456a2d2bab7add83dfd613a98f"></a>

### [`005c425c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005c4/005c425c.md) → [`005c429c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005c4/005c429c.md) FUN_005c429c

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`005c8efc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005c8/005c8efc.md) · 呼出先 16件 [`00447ef4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00447/00447ef4.md) [`0047e60c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047e/0047e60c.md) [`0047edb4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047e/0047edb4.md) [`005c45a0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005c4/005c45a0.md) [`00687628`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00687/00687628.md)
- 新版 呼出元 1件 [`005c8f3c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005c8/005c8f3c.md) · 呼出先 16件 [`00447f34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00447/00447f34.md) [`0047e64c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047e/0047e64c.md) [`0047edf4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047e/0047edf4.md) [`005c45e0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005c4/005c45e0.md) [`00687668`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00687/00687668.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies, operation_sequence, store_value

命令の説明率　旧版 89.02% / 新版 89.02%

優先判定に残った影響 `call_argument_candidate` 4件, `store_value` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "005c43b4",
      "incomplete_value": true,
      "site": "005c43c4",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:8e:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "005c4374",
      "incomplete_value": true,
      "site": "005c4384",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:e2:8"
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
      "definition_site": "005c43c8",
      "incomplete_value": true,
      "site": "005c43c8",
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
      "definition_site": "005c4388",
      "incomplete_value": true,
      "site": "005c4388",
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
    "ordinal": 27,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "005c44d4",
      "incomplete_value": false,
      "site": "005c44d8",
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
      "definition_site": "005c4494",
      "incomplete_value": false,
      "site": "005c4498",
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
      "005c4344",
      "READ",
      [
        "storage",
        "00ca4f38",
        null,
        "undefined1"
      ]
    ],
    [
      "005c4360",
      "READ",
      [
        "storage",
        "002b0d9c",
        null,
        "string"
      ]
    ],
    [
      "005c4364",
      "READ",
      [
        "storage",
        "002b0dab",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "005c4344",
      "READ",
      [
        "storage",
        "00ca5038",
        null,
        "undefined1"
      ]
    ],
    [
      "005c4360",
      "READ",
      [
        "storage",
        "002b0d40",
        null,
        "string"
      ]
    ],
    [
      "005c4364",
      "READ",
      [
        "storage",
        "002b0d4f",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 005c43c4 ["INT_ADD", "register:40f0:8", ["const:5c43c4:8", "const:4:8"]]
- 005c43c4 ["CALL", null, ["callee:00c53da0:8"]]
+ 005c4404 ["INT_ADD", "register:40f0:8", ["const:5c4404:8", "const:4:8"]]
+ 005c4404 ["CALL", null, ["callee:00c53da0:8"]]
- 005c4458 ["COPY", "register:0:8", ["register:4040:8"]]
- 005c4458 ["INT_ADD", "register:40f0:8", ["const:5c4458:8", "const:4:8"]]
- 005c4458 ["CALLIND", null, ["register:0:8"]]
+ 005c4498 ["COPY", "register:0:8", ["register:4040:8"]]
+ 005c4498 ["INT_ADD", "register:40f0:8", ["const:5c4498:8", "const:4:8"]]
+ 005c4498 ["CALLIND", null, ["register:0:8"]]
- 005c4494 ["COPY", "tmp:0:8", ["const:f38:8"]]
- 005c4494 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 005c4494 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 005c4494 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 005c44d4 ["COPY", "tmp:0:8", ["const:38:8"]]
+ 005c44d4 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 005c44d4 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 005c44d4 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
~~~


<a id="compare-a101a4250843145be63693e589afa631"></a>

### [`005c45a0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005c4/005c45a0.md) → [`005c45e0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005c4/005c45e0.md) FUN_005c45e0

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 2件 [`005c425c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005c4/005c425c.md) [`005c6978`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005c6/005c6978.md) · 呼出先 12件 [`0048ce54`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0048c/0048ce54.md) [`00684fb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00684/00684fb0.md) [`00685374`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00685/00685374.md) [`00685588`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00685/00685588.md) [`00687628`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00687/00687628.md)
- 新版 呼出元 2件 [`005c429c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005c4/005c429c.md) [`005c69b8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005c6/005c69b8.md) · 呼出先 12件 [`0048ce94`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048c/0048ce94.md) [`00684ff0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00684/00684ff0.md) [`006853b4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00685/006853b4.md) [`006855c8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00685/006855c8.md) [`00687668`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00687/00687668.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies, store_value

命令の説明率　旧版 95.14% / 新版 95.14%

優先判定に残った影響 `call_argument_candidate` 1件, `store_value` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "005c4768",
      "incomplete_value": true,
      "site": "005c4768",
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
                "const:ae7:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "005c4728",
      "incomplete_value": true,
      "site": "005c4728",
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
                "const:b3b:8"
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
      "definition_site": "005c475c",
      "incomplete_value": true,
      "site": "005c476c",
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
      "definition_site": "005c471c",
      "incomplete_value": true,
      "site": "005c472c",
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
    "ordinal": 28,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "005c4658",
      "incomplete_value": false,
      "site": "005c4660",
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
      "definition_site": "005c4618",
      "incomplete_value": false,
      "site": "005c4620",
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
      "005c4658",
      "PARAM",
      [
        "storage",
        "002bc7be",
        null,
        null
      ]
    ],
    [
      "005c4758",
      "READ",
      [
        "storage",
        "002bdb3b",
        null,
        "string"
      ]
    ],
    [
      "005c475c",
      "READ",
      [
        "storage",
        "002bdb42",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "005c4658",
      "PARAM",
      [
        "storage",
        "002bc76a",
        null,
        null
      ]
    ],
    [
      "005c4758",
      "READ",
      [
        "storage",
        "002bdae7",
        null,
        "string"
      ]
    ],
    [
      "005c475c",
      "READ",
      [
        "storage",
        "002bdaee",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 005c4620 ["INT_ADD", "register:40f0:8", ["const:5c4620:8", "const:4:8"]]
- 005c4620 ["CALL", null, ["callee:00c58040:8"]]
+ 005c4660 ["INT_ADD", "register:40f0:8", ["const:5c4660:8", "const:4:8"]]
+ 005c4660 ["CALL", null, ["callee:00c58040:8"]]
- 005c46e8 ["INT_ADD", "register:40f0:8", ["const:5c46e8:8", "const:4:8"]]
- 005c46e8 ["CALL", null, ["callee:00851550:8"]]
+ 005c4728 ["INT_ADD", "register:40f0:8", ["const:5c4728:8", "const:4:8"]]
+ 005c4728 ["CALL", null, ["callee:00851550:8"]]
- 005c45d4 ["INT_ADD", "register:40f0:8", ["const:5c45d4:8", "const:4:8"]]
- 005c45d4 ["CALL", null, ["callee:00851550:8"]]
+ 005c4614 ["INT_ADD", "register:40f0:8", ["const:5c4614:8", "const:4:8"]]
+ 005c4614 ["CALL", null, ["callee:00851550:8"]]
~~~


<a id="compare-41a808761ed421ea3482485d47b3622f"></a>

### [`005c4958`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005c4/005c4958.md) → [`005c4998`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005c4/005c4998.md) FUN_005c4998

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`005c7d00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005c7/005c7d00.md) · 呼出先 30件 [`0043bba4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043bba4.md) [`00467860`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00467/00467860.md) [`00467b60`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00467/00467b60.md) [`00469ccc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00469/00469ccc.md) [`0046a250`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0046a/0046a250.md)
- 新版 呼出元 1件 [`005c7d40`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005c7/005c7d40.md) · 呼出先 30件 [`0043bbe4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bbe4.md) [`004678a0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00467/004678a0.md) [`00467ba0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00467/00467ba0.md) [`00469d0c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00469/00469d0c.md) [`0046a290`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046a/0046a290.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 98.41% / 新版 98.41%

優先判定に残った影響 `call_argument_candidate` 12件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "005c4c78",
      "incomplete_value": true,
      "site": "005c4c90",
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
      "definition_site": "005c4c38",
      "incomplete_value": true,
      "site": "005c4c50",
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
    "ordinal": 20,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "005c4c80",
      "incomplete_value": false,
      "site": "005c4c90",
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
      "definition_site": "005c4c40",
      "incomplete_value": false,
      "site": "005c4c50",
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
    "ordinal": 20,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "005c4c88",
      "incomplete_value": false,
      "site": "005c4c90",
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
            "const:290:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "005c4c48",
      "incomplete_value": false,
      "site": "005c4c50",
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
            "const:1c0:8"
          ]
        ]
      ]
    },
    "ordinal": 20,
    "slot": 3
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "005c4c78",
      "READ",
      [
        "storage",
        "00ca4978",
        null,
        "undefined8"
      ]
    ],
    [
      "005c4c80",
      "PARAM",
      [
        "storage",
        "00c65e58",
        null,
        "pointer __((offset(0x10)))"
      ]
    ],
    [
      "005c4c88",
      "PARAM",
      [
        "storage",
        "00c711c0",
        null,
        "pointer __((offset(0x10)))"
      ]
    ]
  ],
  "added": [
    [
      "005c4c78",
      "READ",
      [
        "storage",
        "00ca4a78",
        null,
        "undefined8"
      ]
    ],
    [
      "005c4c80",
      "PARAM",
      [
        "storage",
        "00c65f28",
        null,
        "pointer __((offset(0x10)))"
      ]
    ],
    [
      "005c4c88",
      "PARAM",
      [
        "storage",
        "00c71290",
        null,
        "pointer __((offset(0x10)))"
      ]
    ]
  ]
}
~~~


~~~diff
- 005c4c50 ["INT_ADD", "register:40f0:8", ["const:5c4c50:8", "const:4:8"]]
- 005c4c50 ["CALL", null, ["callee:00c586e0:8"]]
+ 005c4c90 ["INT_ADD", "register:40f0:8", ["const:5c4c90:8", "const:4:8"]]
+ 005c4c90 ["CALL", null, ["callee:00c586e0:8"]]
- 005c4c90 ["INT_ADD", "register:40f0:8", ["const:5c4c90:8", "const:4:8"]]
- 005c4c90 ["CALL", null, ["callee:00a46950:8"]]
+ 005c4cd0 ["INT_ADD", "register:40f0:8", ["const:5c4cd0:8", "const:4:8"]]
+ 005c4cd0 ["CALL", null, ["callee:00a46950:8"]]
- 005c4d30 ["COPY", "register:0:8", ["register:4040:8"]]
- 005c4d30 ["INT_ADD", "register:40f0:8", ["const:5c4d30:8", "const:4:8"]]
- 005c4d30 ["CALLIND", null, ["register:0:8"]]
+ 005c4d70 ["COPY", "register:0:8", ["register:4040:8"]]
+ 005c4d70 ["INT_ADD", "register:40f0:8", ["const:5c4d70:8", "const:4:8"]]
+ 005c4d70 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-f664e809c8ce4caff2b23254cbffdec8"></a>

### [`005c6154`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005c6/005c6154.md) → [`005c6194`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005c6/005c6194.md) FUN_005c6194

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 8件 [`005fe66c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005fe/005fe66c.md) [`00606ae4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00606/00606ae4.md) [`006103bc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00610/006103bc.md) [`007cceec`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007cc/007cceec.md) [`00a46650`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a46/00a46650.md) · 呼出先 2件 [`005d8bc8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005d8/005d8bc8.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md)
- 新版 呼出元 8件 [`005fe6ac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005fe/005fe6ac.md) [`00606b24`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00606/00606b24.md) [`006103fc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00610/006103fc.md) [`007ccf44`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007cc/007ccf44.md) [`00a466a4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a46/00a466a4.md) · 呼出先 2件 [`005d8c08`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005d8/005d8c08.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 84.21% / 新版 84.21%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "005c61bc",
      "incomplete_value": true,
      "site": "005c61bc",
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
      "definition_site": "005c617c",
      "incomplete_value": true,
      "site": "005c617c",
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
      "005c61b4",
      "READ",
      [
        "storage",
        "00c9b368",
        null,
        "pointer"
      ]
    ],
    [
      "005c61bc",
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
      "005c61b4",
      "READ",
      [
        "storage",
        "00c9b438",
        null,
        "pointer"
      ]
    ],
    [
      "005c61bc",
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
- 005c6174 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:368:8"]]
- 005c6174 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
+ 005c61b4 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:438:8"]]
+ 005c61b4 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
- 005c6180 ["INT_ADD", "register:40f0:8", ["const:5c6180:8", "const:4:8"]]
- 005c6180 ["CALL", null, ["callee:005d8c08:8"]]
+ 005c61c0 ["INT_ADD", "register:40f0:8", ["const:5c61c0:8", "const:4:8"]]
+ 005c61c0 ["CALL", null, ["callee:005d8c08:8"]]
~~~


<a id="compare-49fefd792e555bf763c44dbf56de5233"></a>

### [`005c61a0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005c6/005c61a0.md) → [`005c61e0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005c6/005c61e0.md) FUN_005c61e0

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 4件 [`005fe66c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005fe/005fe66c.md) [`00606ae4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00606/00606ae4.md) [`006103bc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00610/006103bc.md) [`007cceec`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007cc/007cceec.md) · 呼出先 4件 [`005d8bc8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005d8/005d8bc8.md) [`00c53d00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c53/00c53d00.md) [`00c57e80`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e80.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md)
- 新版 呼出元 4件 [`005fe6ac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005fe/005fe6ac.md) [`00606b24`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00606/00606b24.md) [`006103fc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00610/006103fc.md) [`007ccf44`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007cc/007ccf44.md) · 呼出先 4件 [`005d8c08`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005d8/005d8c08.md) [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 82.86% / 新版 82.86%

優先判定に残った影響 `store_value` 2件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "005c6204",
      "incomplete_value": false,
      "site": "005c6208",
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
      "definition_site": "005c61c4",
      "incomplete_value": false,
      "site": "005c61c8",
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
    "ordinal": 5,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "005c6248",
      "incomplete_value": true,
      "site": "005c6248",
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
      "definition_site": "005c6208",
      "incomplete_value": true,
      "site": "005c6208",
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
      "005c6208",
      "DATA",
      [
        "storage",
        "00c8b7b0",
        null,
        "undefined *"
      ]
    ],
    [
      "005c6240",
      "READ",
      [
        "storage",
        "00c9b368",
        null,
        "pointer"
      ]
    ],
    [
      "005c6248",
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
      "005c6208",
      "DATA",
      [
        "storage",
        "00c8b880",
        null,
        "undefined *"
      ]
    ],
    [
      "005c6240",
      "READ",
      [
        "storage",
        "00c9b438",
        null,
        "pointer"
      ]
    ],
    [
      "005c6248",
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
- 005c61bc ["COPY", "tmp:0:8", ["const:7a0:8"]]
- 005c61bc ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 005c61bc ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 005c61bc ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 005c61fc ["COPY", "tmp:0:8", ["const:870:8"]]
+ 005c61fc ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 005c61fc ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 005c61fc ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 005c61d8 ["INT_ADD", "register:40f0:8", ["const:5c61d8:8", "const:4:8"]]
- 005c61d8 ["CALL", null, ["callee:00c53da0:8"]]
+ 005c6218 ["INT_ADD", "register:40f0:8", ["const:5c6218:8", "const:4:8"]]
+ 005c6218 ["CALL", null, ["callee:00c53da0:8"]]
- 005c61ec ["COPY", "register:0:8", ["register:4040:8"]]
- 005c61ec ["INT_ADD", "register:40f0:8", ["const:5c61ec:8", "const:4:8"]]
- 005c61ec ["CALLIND", null, ["register:0:8"]]
+ 005c622c ["COPY", "register:0:8", ["register:4040:8"]]
+ 005c622c ["INT_ADD", "register:40f0:8", ["const:5c622c:8", "const:4:8"]]
+ 005c622c ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-c1e22a0127c2742d4973d6459bb9f9db"></a>

### [`005c6300`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005c6/005c6300.md) → [`005c6340`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005c6/005c6340.md) FUN_005c6340

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00985418`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00985/00985418.md) · 呼出先 23件 [`0043bba4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043bba4.md) [`00440ec0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00440/00440ec0.md) [`00470840`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00470/00470840.md) [`0048791c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00487/0048791c.md) [`0048793c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00487/0048793c.md)
- 新版 呼出元 1件 [`0098546c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00985/0098546c.md) · 呼出先 23件 [`0043bbe4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bbe4.md) [`00440f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00440/00440f00.md) [`00470880`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00470/00470880.md) [`0048795c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00487/0048795c.md) [`0048797c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00487/0048797c.md)

変更の種類 constant, operands_and_dependencies, store_destination, store_value

命令の説明率　旧版 95.89% / 新版 95.89%

優先判定に残った影響 `store_destination` 1件, `store_value` 5件

アドレスに依存する影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "005c64d0",
      "incomplete_value": false,
      "site": "005c64d8",
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
      "definition_site": "005c6490",
      "incomplete_value": false,
      "site": "005c6498",
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
    "ordinal": 24,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "005c6500",
      "incomplete_value": true,
      "site": "005c6500",
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
                "const:b80:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "005c64c0",
      "incomplete_value": true,
      "site": "005c64c0",
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
                "const:bdc:8"
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
      "definition_site": "005c6874",
      "incomplete_value": true,
      "site": "005c6878",
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
      "definition_site": "005c6834",
      "incomplete_value": true,
      "site": "005c6838",
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
      "005c64d8",
      "DATA",
      [
        "storage",
        "00c64d38",
        null,
        "undefined *"
      ]
    ],
    [
      "005c64ec",
      "READ",
      [
        "storage",
        "002afbdc",
        null,
        "string"
      ]
    ],
    [
      "005c64f4",
      "READ",
      [
        "storage",
        "002afbe2",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "005c64d8",
      "DATA",
      [
        "storage",
        "00c64e08",
        null,
        "undefined *"
      ]
    ],
    [
      "005c64ec",
      "READ",
      [
        "storage",
        "002afb80",
        null,
        "string"
      ]
    ],
    [
      "005c64f4",
      "READ",
      [
        "storage",
        "002afb86",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 005c6480 ["INT_ADD", "register:40f0:8", ["const:5c6480:8", "const:4:8"]]
- 005c6480 ["CALL", null, ["callee:00487e60:8"]]
+ 005c64c0 ["INT_ADD", "register:40f0:8", ["const:5c64c0:8", "const:4:8"]]
+ 005c64c0 ["CALL", null, ["callee:00487e60:8"]]
- 005c681c ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:bb0:8"]]
- 005c681c ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
+ 005c685c ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:c80:8"]]
+ 005c685c ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
- 005c687c ["INT_ADD", "register:40f0:8", ["const:5c687c:8", "const:4:8"]]
- 005c687c ["CALL", null, ["callee:00c58080:8"]]
+ 005c68bc ["INT_ADD", "register:40f0:8", ["const:5c68bc:8", "const:4:8"]]
+ 005c68bc ["CALL", null, ["callee:00c58080:8"]]
~~~


<a id="compare-68b80323dbe8d11c5bf96d7a4e9431c8"></a>

### [`005c6978`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005c6/005c6978.md) → [`005c69b8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005c6/005c69b8.md) FUN_005c69b8

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`0098dc08`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0098d/0098dc08.md) · 呼出先 37件 [`0043bb20`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043bb20.md) [`0044d920`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0044d/0044d920.md) [`0046c9c4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0046c/0046c9c4.md) [`0046da54`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0046d/0046da54.md) [`0046dad4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0046d/0046dad4.md)
- 新版 呼出元 1件 [`0098dc5c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0098d/0098dc5c.md) · 呼出先 37件 [`0043bb60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bb60.md) [`0044d960`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0044d/0044d960.md) [`0046ca04`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046c/0046ca04.md) [`0046da94`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046d/0046da94.md) [`0046db14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046d/0046db14.md)

変更の種類 call, call_target, constant, operands_and_dependencies, store_value

命令の説明率　旧版 99.07% / 新版 99.07%

優先判定に残った影響 `call_target` 2件, `store_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "005c6aa0",
      "incomplete_value": true,
      "site": "005c6aa0",
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
      "definition_site": "005c6a60",
      "incomplete_value": true,
      "site": "005c6a60",
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
    "ordinal": 13,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "call_target",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "005c6a74",
      "value": [
        "leaf",
        "ram:48cd38:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "005c6a34",
      "value": [
        "leaf",
        "ram:48ccf8:8"
      ]
    },
    "ordinal": 6,
    "slot": 0
  },
  {
    "confidence": "limited",
    "kind": "call_target",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "005c6d18",
      "value": [
        "leaf",
        "ram:47ad34:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "005c6cd8",
      "value": [
        "leaf",
        "ram:47acf4:8"
      ]
    },
    "ordinal": 44,
    "slot": 0
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "005c6a38",
      "DATA",
      [
        "storage",
        "0039b1bc",
        null,
        "uleb128"
      ]
    ],
    [
      "005c6a50",
      "DATA",
      [
        "storage",
        "0039b1bc",
        null,
        "uleb128"
      ]
    ],
    [
      "005c6a58",
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
      "005c6a38",
      "DATA",
      [
        "storage",
        "0039b1bc",
        null,
        "qword"
      ]
    ],
    [
      "005c6a50",
      "DATA",
      [
        "storage",
        "0039b1bc",
        null,
        "qword"
      ]
    ],
    [
      "005c6a58",
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
- 005c6a34 ["INT_ADD", "register:40f0:8", ["const:5c6a34:8", "const:4:8"]]
- 005c6a34 ["CALL", null, ["ram:48ccf8:8"]]
+ 005c6a74 ["INT_ADD", "register:40f0:8", ["const:5c6a74:8", "const:4:8"]]
+ 005c6a74 ["CALL", null, ["ram:48cd38:8"]]
- 005c6cd8 ["INT_ADD", "register:40f0:8", ["const:5c6cd8:8", "const:4:8"]]
- 005c6cd8 ["CALL", null, ["ram:47acf4:8"]]
+ 005c6d18 ["INT_ADD", "register:40f0:8", ["const:5c6d18:8", "const:4:8"]]
+ 005c6d18 ["CALL", null, ["ram:47ad34:8"]]
- 005c69ac ["INT_ADD", "register:40f0:8", ["const:5c69ac:8", "const:4:8"]]
- 005c69ac ["CALL", null, ["callee:00851550:8"]]
+ 005c69ec ["INT_ADD", "register:40f0:8", ["const:5c69ec:8", "const:4:8"]]
+ 005c69ec ["CALL", null, ["callee:00851550:8"]]
~~~


<a id="compare-9ae4687f61dfffec9a265ea98b2bacc7"></a>

### [`005c7220`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005c7/005c7220.md) → [`005c7260`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005c7/005c7260.md) FUN_005c7260

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`005c6978`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005c6/005c6978.md) · 呼出先 12件 [`0047acf4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047a/0047acf4.md) [`0047cdd4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047c/0047cdd4.md) [`008514f8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00851/008514f8.md) [`00859b4c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00859/00859b4c.md) [`0085b2a4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0085b/0085b2a4.md)
- 新版 呼出元 1件 [`005c69b8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005c6/005c69b8.md) · 呼出先 12件 [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md) [`0047ce14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047ce14.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md) [`00859ba4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00859/00859ba4.md) [`0085b2fc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0085b/0085b2fc.md)

変更の種類 call, call_target, constant, operands_and_dependencies

命令の説明率　旧版 98.78% / 新版 98.78%

優先判定に残った影響 `call_target` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_target",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "005c7324",
      "value": [
        "leaf",
        "ram:47ad34:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "005c72e4",
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
      "site": "005c7560",
      "value": [
        "leaf",
        "ram:47ad34:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "005c7520",
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
      "005c7278",
      "READ",
      [
        "storage",
        "002c4158",
        null,
        "undefined8"
      ]
    ],
    [
      "005c7324",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047acf4"
      ]
    ],
    [
      "005c7560",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047acf4"
      ]
    ]
  ],
  "added": [
    [
      "005c7278",
      "READ",
      [
        "storage",
        "002c4198",
        null,
        "undefined8"
      ]
    ],
    [
      "005c7324",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ],
    [
      "005c7560",
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
- 005c72e4 ["INT_ADD", "register:40f0:8", ["const:5c72e4:8", "const:4:8"]]
- 005c72e4 ["CALL", null, ["ram:47acf4:8"]]
+ 005c7324 ["INT_ADD", "register:40f0:8", ["const:5c7324:8", "const:4:8"]]
+ 005c7324 ["CALL", null, ["ram:47ad34:8"]]
- 005c7324 ["INT_ADD", "register:40f0:8", ["const:5c7324:8", "const:4:8"]]
- 005c7324 ["CALL", null, ["callee:008b6f04:8"]]
+ 005c7364 ["INT_ADD", "register:40f0:8", ["const:5c7364:8", "const:4:8"]]
+ 005c7364 ["CALL", null, ["callee:008b6f04:8"]]
- 005c74e0 ["INT_ADD", "register:40f0:8", ["const:5c74e0:8", "const:4:8"]]
- 005c74e0 ["CALL", null, ["callee:00851550:8"]]
+ 005c7520 ["INT_ADD", "register:40f0:8", ["const:5c7520:8", "const:4:8"]]
+ 005c7520 ["CALL", null, ["callee:00851550:8"]]
~~~


<a id="compare-7f2d5432a284dc756148871b9f7d4279"></a>

### [`005c7d00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005c7/005c7d00.md) → [`005c7d40`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005c7/005c7d40.md) FUN_005c7d40

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`0099703c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00997/0099703c.md) · 呼出先 29件 [`0043bb20`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043bb20.md) [`00467860`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00467/00467860.md) [`00467b2c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00467/00467b2c.md) [`00467db4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00467/00467db4.md) [`00467f1c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00467/00467f1c.md)
- 新版 呼出元 1件 [`00997090`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00997/00997090.md) · 呼出先 29件 [`0043bb60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bb60.md) [`004678a0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00467/004678a0.md) [`00467b6c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00467/00467b6c.md) [`00467df4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00467/00467df4.md) [`00467f5c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00467/00467f5c.md)

変更の種類 branch_value, call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 99.39% / 新版 99.39%

優先判定に残った影響 `call_argument_candidate` 2件

アドレスに依存する影響 `branch_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "branch_value",
    "new": {
      "definition_site": "005c8384",
      "incomplete_value": true,
      "site": "005c8384",
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
      "definition_site": "005c8344",
      "incomplete_value": true,
      "site": "005c8344",
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
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "005c838c",
      "incomplete_value": false,
      "site": "005c839c",
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
      "definition_site": "005c834c",
      "incomplete_value": false,
      "site": "005c835c",
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
    "ordinal": 70,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "005c8394",
      "incomplete_value": false,
      "site": "005c839c",
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
            "const:290:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "005c8354",
      "incomplete_value": false,
      "site": "005c835c",
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
            "const:1c0:8"
          ]
        ]
      ]
    },
    "ordinal": 70,
    "slot": 3
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "005c8230",
      "READ",
      [
        "storage",
        "00c9ab68",
        null,
        "pointer"
      ]
    ],
    [
      "005c830c",
      "PARAM",
      [
        "storage",
        "00ca4c70",
        null,
        "undefined8"
      ]
    ],
    [
      "005c8380",
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
      "005c8230",
      "READ",
      [
        "storage",
        "00c9ac38",
        null,
        "pointer"
      ]
    ],
    [
      "005c830c",
      "PARAM",
      [
        "storage",
        "00ca4d70",
        null,
        "undefined8"
      ]
    ],
    [
      "005c8380",
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
- 005c835c ["INT_ADD", "register:40f0:8", ["const:5c835c:8", "const:4:8"]]
- 005c835c ["CALL", null, ["callee:00c586e0:8"]]
+ 005c839c ["INT_ADD", "register:40f0:8", ["const:5c839c:8", "const:4:8"]]
+ 005c839c ["CALL", null, ["callee:00c586e0:8"]]
- 005c7d48 ["INT_ADD", "register:40f0:8", ["const:5c7d48:8", "const:4:8"]]
- 005c7d48 ["CALL", null, ["callee:004678a0:8"]]
+ 005c7d88 ["INT_ADD", "register:40f0:8", ["const:5c7d88:8", "const:4:8"]]
+ 005c7d88 ["CALL", null, ["callee:004678a0:8"]]
- 005c7d54 ["INT_ADD", "register:40f0:8", ["const:5c7d54:8", "const:4:8"]]
- 005c7d54 ["CALL", null, ["callee:00851550:8"]]
+ 005c7d94 ["INT_ADD", "register:40f0:8", ["const:5c7d94:8", "const:4:8"]]
+ 005c7d94 ["CALL", null, ["callee:00851550:8"]]
~~~


<a id="compare-ac4ebd8275a945ca4a98a762c413ed67"></a>

### [`005c8efc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005c8/005c8efc.md) → [`005c8f3c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005c8/005c8f3c.md) FUN_005c8f3c

根拠 `instruction_blocks_cfg_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 2件 [`00985418`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00985/00985418.md) [`0098dc08`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0098d/0098dc08.md) · 呼出先 70件 [`0043bb20`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043bb20.md) [`0043bba4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043bba4.md) [`00440f70`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00440/00440f70.md) [`00447ef4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00447/00447ef4.md) [`0046c9c4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0046c/0046c9c4.md)
- 新版 呼出元 2件 [`0098546c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00985/0098546c.md) [`0098dc5c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0098d/0098dc5c.md) · 呼出先 70件 [`0043bb60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bb60.md) [`0043bbe4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bbe4.md) [`00440fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00440/00440fb0.md) [`00447f34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00447/00447f34.md) [`0046ca04`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046c/0046ca04.md)

変更の種類 branch_value, call_argument_candidate, constant, operands_and_dependencies, store_value

命令の説明率　旧版 98.61% / 新版 98.61%

優先判定に残った影響 `branch_value` 1件, `call_argument_candidate` 14件, `store_value` 6件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "005ca720",
      "incomplete_value": false,
      "site": "005ca720",
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
            "const:2b8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "005ca6e0",
      "incomplete_value": false,
      "site": "005ca6e0",
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
            "const:1e8:8"
          ]
        ]
      ]
    },
    "ordinal": 245,
    "slot": 2
  },
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "005ca874",
      "incomplete_value": false,
      "site": "005ca874",
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
      "definition_site": "005ca834",
      "incomplete_value": false,
      "site": "005ca834",
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
    "ordinal": 255,
    "slot": 2
  },
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "005caf68",
      "incomplete_value": false,
      "site": "005caf68",
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
      "definition_site": "005caf28",
      "incomplete_value": false,
      "site": "005caf28",
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
    "ordinal": 311,
    "slot": 2
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "005c8f80",
      "DATA",
      [
        "storage",
        "0042ef40",
        null,
        "dword"
      ]
    ],
    [
      "005c8f98",
      "DATA",
      [
        "storage",
        "0042ef40",
        null,
        "dword"
      ]
    ],
    [
      "005c91d4",
      "DATA",
      [
        "storage",
        "0039b22c",
        "fde_0039b22c",
        "dword"
      ]
    ]
  ],
  "added": [
    [
      "005c8f80",
      "DATA",
      [
        "storage",
        "0042ef40",
        null,
        "uleb128"
      ]
    ],
    [
      "005c8f98",
      "DATA",
      [
        "storage",
        "0042ef40",
        null,
        "uleb128"
      ]
    ],
    [
      "005c91d4",
      "DATA",
      [
        "storage",
        "0039b22c",
        null,
        "dword"
      ]
    ]
  ]
}
~~~


~~~diff
- 005c9dfc ["INT_ADD", "register:40f0:8", ["const:5c9dfc:8", "const:4:8"]]
- 005c9dfc ["CALL", null, ["callee:00c58030:8"]]
+ 005c9e3c ["INT_ADD", "register:40f0:8", ["const:5c9e3c:8", "const:4:8"]]
+ 005c9e3c ["CALL", null, ["callee:00c58030:8"]]
- 005ca984 ["INT_ADD", "register:40f0:8", ["const:5ca984:8", "const:4:8"]]
- 005ca984 ["CALL", null, ["callee:00c586e0:8"]]
+ 005ca9c4 ["INT_ADD", "register:40f0:8", ["const:5ca9c4:8", "const:4:8"]]
+ 005ca9c4 ["CALL", null, ["callee:00c586e0:8"]]
- 005ca9ac ["INT_ADD", "register:40f0:8", ["const:5ca9ac:8", "const:4:8"]]
- 005ca9ac ["CALL", null, ["callee:005d872c:8"]]
+ 005ca9ec ["INT_ADD", "register:40f0:8", ["const:5ca9ec:8", "const:4:8"]]
+ 005ca9ec ["CALL", null, ["callee:005d872c:8"]]
~~~


<a id="compare-d882b83be58ad1bca33c5edbfd6f82aa"></a>

### [`005cc1b4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005cc/005cc1b4.md) → [`005cc1f4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005cc/005cc1f4.md) FUN_005cc1f4

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`005c8efc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005c8/005c8efc.md) · 呼出先 12件 [`0043bb20`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043bb20.md) [`00447ef4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00447/00447ef4.md) [`0047e60c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047e/0047e60c.md) [`0047edb4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047e/0047edb4.md) [`00c53cd0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c53/00c53cd0.md)
- 新版 呼出元 1件 [`005c8f3c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005c8/005c8f3c.md) · 呼出先 12件 [`0043bb60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bb60.md) [`00447f34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00447/00447f34.md) [`0047e64c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047e/0047e64c.md) [`0047edf4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047e/0047edf4.md) [`00c53d70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53d70.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies, operation_sequence, store_destination, store_value

命令の説明率　旧版 84.97% / 新版 84.97%

優先判定に残った影響 `call_argument_candidate` 6件, `store_destination` 7件, `store_value` 5件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "005cc2e8",
      "incomplete_value": true,
      "site": "005cc2fc",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:76f:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "005cc2a8",
      "incomplete_value": true,
      "site": "005cc2bc",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:7c3:8"
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
      "definition_site": "005cc320",
      "incomplete_value": true,
      "site": "005cc330",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:164:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "005cc2e0",
      "incomplete_value": true,
      "site": "005cc2f0",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:1b1:8"
              ]
            ]
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
      "definition_site": "005cc334",
      "incomplete_value": true,
      "site": "005cc334",
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
      "definition_site": "005cc2f4",
      "incomplete_value": true,
      "site": "005cc2f4",
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
      "005cc2d4",
      "READ",
      [
        "storage",
        "00ca4f38",
        null,
        "undefined1"
      ]
    ],
    [
      "005cc2e8",
      "READ",
      [
        "storage",
        "002bc7c3",
        null,
        "string"
      ]
    ],
    [
      "005cc320",
      "READ",
      [
        "storage",
        "002a21b1",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "005cc2d4",
      "READ",
      [
        "storage",
        "00ca5038",
        null,
        "undefined1"
      ]
    ],
    [
      "005cc2e8",
      "READ",
      [
        "storage",
        "002bc76f",
        null,
        "string"
      ]
    ],
    [
      "005cc320",
      "READ",
      [
        "storage",
        "002a2164",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 005cc2d0 ["INT_ADD", "register:40f0:8", ["const:5cc2d0:8", "const:4:8"]]
- 005cc2d0 ["CALL", null, ["callee:00447f34:8"]]
+ 005cc310 ["INT_ADD", "register:40f0:8", ["const:5cc310:8", "const:4:8"]]
+ 005cc310 ["CALL", null, ["callee:00447f34:8"]]
- 005cc2fc ["COPY", "tmp:0:8", ["const:f00:8"]]
- 005cc2fc ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 005cc2fc ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 005cc2fc ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 005cc33c ["COPY", "tmp:0:8", ["const:0:8"]]
+ 005cc33c ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 005cc33c ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 005cc33c ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
- 005cc310 ["INT_ADD", "register:40f0:8", ["const:5cc310:8", "const:4:8"]]
- 005cc310 ["CALL", null, ["callee:0047e64c:8"]]
+ 005cc350 ["INT_ADD", "register:40f0:8", ["const:5cc350:8", "const:4:8"]]
+ 005cc350 ["CALL", null, ["callee:0047e64c:8"]]
~~~


<a id="compare-c8ac3cdd54b2efbcbe2cf9a7064bc5ac"></a>

### [`005cc514`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005cc/005cc514.md) → [`005cc554`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005cc/005cc554.md) FUN_005cc554

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 2件 [`005fe66c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005fe/005fe66c.md) [`007cceec`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007cc/007cceec.md) · 呼出先 4件 [`005d8bc8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005d8/005d8bc8.md) [`00c53d00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c53/00c53d00.md) [`00c57e80`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e80.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md)
- 新版 呼出元 2件 [`005fe6ac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005fe/005fe6ac.md) [`007ccf44`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007cc/007ccf44.md) · 呼出先 4件 [`005d8c08`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005d8/005d8c08.md) [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 82.86% / 新版 82.86%

優先判定に残った影響 `store_value` 2件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "005cc578",
      "incomplete_value": false,
      "site": "005cc57c",
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
      "definition_site": "005cc538",
      "incomplete_value": false,
      "site": "005cc53c",
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
    "ordinal": 5,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "005cc5bc",
      "incomplete_value": true,
      "site": "005cc5bc",
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
      "definition_site": "005cc57c",
      "incomplete_value": true,
      "site": "005cc57c",
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
      "005cc57c",
      "DATA",
      [
        "storage",
        "00c8b7b0",
        null,
        "undefined *"
      ]
    ],
    [
      "005cc5b4",
      "READ",
      [
        "storage",
        "00c9b368",
        null,
        "pointer"
      ]
    ],
    [
      "005cc5bc",
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
      "005cc57c",
      "DATA",
      [
        "storage",
        "00c8b880",
        null,
        "undefined *"
      ]
    ],
    [
      "005cc5b4",
      "READ",
      [
        "storage",
        "00c9b438",
        null,
        "pointer"
      ]
    ],
    [
      "005cc5bc",
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
- 005cc530 ["COPY", "tmp:0:8", ["const:7a0:8"]]
- 005cc530 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 005cc530 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 005cc530 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 005cc570 ["COPY", "tmp:0:8", ["const:870:8"]]
+ 005cc570 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 005cc570 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 005cc570 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 005cc54c ["INT_ADD", "register:40f0:8", ["const:5cc54c:8", "const:4:8"]]
- 005cc54c ["CALL", null, ["callee:00c53da0:8"]]
+ 005cc58c ["INT_ADD", "register:40f0:8", ["const:5cc58c:8", "const:4:8"]]
+ 005cc58c ["CALL", null, ["callee:00c53da0:8"]]
- 005cc560 ["COPY", "register:0:8", ["register:4040:8"]]
- 005cc560 ["INT_ADD", "register:40f0:8", ["const:5cc560:8", "const:4:8"]]
- 005cc560 ["CALLIND", null, ["register:0:8"]]
+ 005cc5a0 ["COPY", "register:0:8", ["register:4040:8"]]
+ 005cc5a0 ["INT_ADD", "register:40f0:8", ["const:5cc5a0:8", "const:4:8"]]
+ 005cc5a0 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-b8fe04b4b7fd829169e7511869b65bd6"></a>

### [`005ccd04`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005cc/005ccd04.md) → [`005ccd44`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005cc/005ccd44.md) FUN_005ccd44

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 7件 [`006788e0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00678/006788e0.md) [`006ac918`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006ac/006ac918.md) [`006bbc98`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006bb/006bbc98.md) [`00914e30`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00914/00914e30.md) [`009248c8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00924/009248c8.md) · 呼出先 16件 [`00447ef4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00447/00447ef4.md) [`0046d490`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0046d/0046d490.md) [`0047acf4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047a/0047acf4.md) [`0047cdd4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047c/0047cdd4.md) [`0048ce54`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0048c/0048ce54.md)
- 新版 呼出元 7件 [`00678920`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00678/00678920.md) [`006ac970`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006ac/006ac970.md) [`006bbcf0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006bb/006bbcf0.md) [`00914e84`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00914/00914e84.md) [`0092491c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00924/0092491c.md) · 呼出先 16件 [`00447f34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00447/00447f34.md) [`0046d4d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046d/0046d4d0.md) [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md) [`0047ce14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047ce14.md) [`0048ce94`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048c/0048ce94.md)

変更の種類 call, call_argument_candidate, call_target, constant, operands_and_dependencies, operation_sequence, store_value

命令の説明率　旧版 90.75% / 新版 90.75%

優先判定に残った影響 `call_argument_candidate` 2件, `call_target` 1件, `store_value` 5件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "005ccdbc",
      "incomplete_value": true,
      "site": "005ccdd0",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:42b:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "005ccd7c",
      "incomplete_value": true,
      "site": "005ccd90",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:47f:8"
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
      "definition_site": "005ccdc0",
      "incomplete_value": true,
      "site": "005ccdd4",
      "value": [
        "LOAD",
        "16",
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
      "definition_site": "005ccd80",
      "incomplete_value": true,
      "site": "005ccd94",
      "value": [
        "LOAD",
        "16",
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
    "ordinal": 13,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "005ccdc4",
      "incomplete_value": true,
      "site": "005ccdd8",
      "value": [
        "LOAD",
        "16",
        [
          [
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
      "definition_site": "005ccd84",
      "incomplete_value": true,
      "site": "005ccd98",
      "value": [
        "LOAD",
        "16",
        [
          [
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
      "005ccd98",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047acf4"
      ]
    ],
    [
      "005ccdbc",
      "READ",
      [
        "storage",
        "002ba47f",
        null,
        "string"
      ]
    ],
    [
      "005ccdc0",
      "READ",
      [
        "storage",
        "002ba489",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "005ccd98",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ],
    [
      "005ccdbc",
      "READ",
      [
        "storage",
        "002ba42b",
        null,
        "string"
      ]
    ],
    [
      "005ccdc0",
      "READ",
      [
        "storage",
        "002ba435",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 005ccd58 ["INT_ADD", "register:40f0:8", ["const:5ccd58:8", "const:4:8"]]
- 005ccd58 ["CALL", null, ["ram:47acf4:8"]]
+ 005ccd98 ["INT_ADD", "register:40f0:8", ["const:5ccd98:8", "const:4:8"]]
+ 005ccd98 ["CALL", null, ["ram:47ad34:8"]]
- 005ccde0 ["COPY", "tmp:0:8", ["const:28:8"]]
- 005ccde0 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 005ccde0 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 005ccde0 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 005cce20 ["COPY", "tmp:0:8", ["const:59:8"]]
+ 005cce20 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 005cce20 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 005cce20 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 005cce18 ["COPY", "tmp:0:8", ["const:827:8"]]
- 005cce18 ["INT_CARRY", "register:105:1", ["register:4010:8", "tmp:0:8"]]
- 005cce18 ["INT_SCARRY", "register:106:1", ["register:4010:8", "tmp:0:8"]]
- 005cce18 ["INT_ADD", "tmp:1:8", ["register:4010:8", "tmp:0:8"]]
+ 005cce58 ["COPY", "tmp:0:8", ["const:7cb:8"]]
+ 005cce58 ["INT_CARRY", "register:105:1", ["register:4010:8", "tmp:0:8"]]
+ 005cce58 ["INT_SCARRY", "register:106:1", ["register:4010:8", "tmp:0:8"]]
+ 005cce58 ["INT_ADD", "tmp:1:8", ["register:4010:8", "tmp:0:8"]]
~~~


<a id="compare-41810756eaf122f153e6a1d96a854c03"></a>

### [`005cd0f0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005cd/005cd0f0.md) → [`005cd130`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005cd/005cd130.md) FUN_005cd130

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 53件 [`005ccd04`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005cc/005ccd04.md) [`005db488`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005db/005db488.md) [`00606ae4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00606/00606ae4.md) [`0060a8a0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0060a/0060a8a0.md) [`0060e0c4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0060e/0060e0c4.md) · 呼出先 14件 [`0043b764`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043b764.md) [`0043bb20`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043bb20.md) [`00493dc8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00493/00493dc8.md) [`005cd660`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005cd/005cd660.md) [`005d5c60`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005d5/005d5c60.md)
- 新版 呼出元 53件 [`005ccd44`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005cc/005ccd44.md) [`005db4c8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005db/005db4c8.md) [`00606b24`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00606/00606b24.md) [`0060a8e0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0060a/0060a8e0.md) [`0060e104`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0060e/0060e104.md) · 呼出先 14件 [`0043b7a4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b7a4.md) [`0043bb60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bb60.md) [`00493e08`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00493/00493e08.md) [`005cd6a0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005cd/005cd6a0.md) [`005d5ca0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005d5/005d5ca0.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 99.57% / 新版 99.57%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "005cd168",
      "incomplete_value": false,
      "site": "005cd17c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:2a7000:8"
          ],
          [
            "leaf",
            "const:a17:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "005cd128",
      "incomplete_value": false,
      "site": "005cd13c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:2a7000:8"
          ],
          [
            "leaf",
            "const:a73:8"
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
      "005cd168",
      "PARAM",
      [
        "storage",
        "002a7a73",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "005cd168",
      "PARAM",
      [
        "storage",
        "002a7a17",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 005cd13c ["INT_ADD", "register:40f0:8", ["const:5cd13c:8", "const:4:8"]]
- 005cd13c ["CALL", null, ["callee:005cd6a0:8"]]
+ 005cd17c ["INT_ADD", "register:40f0:8", ["const:5cd17c:8", "const:4:8"]]
+ 005cd17c ["CALL", null, ["callee:005cd6a0:8"]]
- 005cd128 ["COPY", "tmp:0:8", ["const:a73:8"]]
- 005cd128 ["INT_CARRY", "register:105:1", ["register:4008:8", "tmp:0:8"]]
- 005cd128 ["INT_SCARRY", "register:106:1", ["register:4008:8", "tmp:0:8"]]
- 005cd128 ["INT_ADD", "tmp:1:8", ["register:4008:8", "tmp:0:8"]]
+ 005cd168 ["COPY", "tmp:0:8", ["const:a17:8"]]
+ 005cd168 ["INT_CARRY", "register:105:1", ["register:4008:8", "tmp:0:8"]]
+ 005cd168 ["INT_SCARRY", "register:106:1", ["register:4008:8", "tmp:0:8"]]
+ 005cd168 ["INT_ADD", "tmp:1:8", ["register:4008:8", "tmp:0:8"]]
- 005cd188 ["INT_ADD", "register:40f0:8", ["const:5cd188:8", "const:4:8"]]
- 005cd188 ["CALL", null, ["callee:0043bb60:8"]]
+ 005cd1c8 ["INT_ADD", "register:40f0:8", ["const:5cd1c8:8", "const:4:8"]]
+ 005cd1c8 ["CALL", null, ["callee:0043bb60:8"]]
~~~


<a id="compare-261e10dbd324b7e3b1e7891e967f612c"></a>

### [`005cd660`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005cd/005cd660.md) → [`005cd6a0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005cd/005cd6a0.md) FUN_005cd6a0

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 2件 [`005cd0f0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005cd/005cd0f0.md) [`0088c870`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0088c/0088c870.md) · 呼出先 8件 [`005cd768`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005cd/005cd768.md) [`005cd7b8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005cd/005cd7b8.md) [`005cdafc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005cd/005cdafc.md) [`00c53f5c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c53/00c53f5c.md) [`00c57fe0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57fe0.md)
- 新版 呼出元 2件 [`005cd130`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005cd/005cd130.md) [`0088c8c8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0088c/0088c8c8.md) · 呼出先 8件 [`005cd7a8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005cd/005cd7a8.md) [`005cd7f8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005cd/005cd7f8.md) [`005cdb3c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005cd/005cdb3c.md) [`00c53ffc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53ffc.md) [`00c580b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c580b0.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 95.56% / 新版 95.56%

優先判定に残った影響 `call_argument_candidate` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "005cd6c8",
      "incomplete_value": true,
      "site": "005cd6cc",
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
                "const:d00:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "005cd688",
      "incomplete_value": true,
      "site": "005cd68c",
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
                "const:c30:8"
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
      "definition_site": "005cd6dc",
      "incomplete_value": true,
      "site": "005cd6e0",
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
                "const:448:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "005cd69c",
      "incomplete_value": true,
      "site": "005cd6a0",
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
                "const:378:8"
              ]
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
      "005cd6c8",
      "READ",
      [
        "storage",
        "00c9ac30",
        null,
        "pointer"
      ]
    ],
    [
      "005cd6c8",
      "PARAM",
      [
        "storage",
        "01127e18",
        "std::__ndk1::ctype<char>::id",
        "undefined8"
      ]
    ],
    [
      "005cd6dc",
      "READ",
      [
        "storage",
        "00c9b378",
        null,
        "pointer"
      ]
    ]
  ],
  "added": [
    [
      "005cd6c8",
      "READ",
      [
        "storage",
        "00c9ad00",
        null,
        "pointer"
      ]
    ],
    [
      "005cd6c8",
      "PARAM",
      [
        "storage",
        "01127f18",
        "std::__ndk1::ctype<char>::id",
        "undefined8"
      ]
    ],
    [
      "005cd6dc",
      "READ",
      [
        "storage",
        "00c9b448",
        null,
        "pointer"
      ]
    ]
  ]
}
~~~


~~~diff
- 005cd68c ["INT_ADD", "register:40f0:8", ["const:5cd68c:8", "const:4:8"]]
- 005cd68c ["CALL", null, ["callee:00c58350:8"]]
+ 005cd6cc ["INT_ADD", "register:40f0:8", ["const:5cd6cc:8", "const:4:8"]]
+ 005cd6cc ["CALL", null, ["callee:00c58350:8"]]
- 005cd6a0 ["INT_ADD", "register:40f0:8", ["const:5cd6a0:8", "const:4:8"]]
- 005cd6a0 ["CALL", null, ["callee:00c58350:8"]]
+ 005cd6e0 ["INT_ADD", "register:40f0:8", ["const:5cd6e0:8", "const:4:8"]]
+ 005cd6e0 ["CALL", null, ["callee:00c58350:8"]]
- 005cd67c ["INT_ADD", "register:40f0:8", ["const:5cd67c:8", "const:4:8"]]
- 005cd67c ["CALL", null, ["callee:00c5a870:8"]]
+ 005cd6bc ["INT_ADD", "register:40f0:8", ["const:5cd6bc:8", "const:4:8"]]
+ 005cd6bc ["CALL", null, ["callee:00c5a870:8"]]
~~~


<a id="compare-cc6048412566dc5dd763187ee1b4bc86"></a>

### [`005cd7b8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005cd/005cd7b8.md) → [`005cd7f8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005cd/005cd7f8.md) FUN_005cd7f8

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 2件 [`005cd660`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005cd/005cd660.md) [`005ce600`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005ce/005ce600.md) · 呼出先 11件 [`005cdd00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005cd/005cdd00.md) [`005cde8c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005cd/005cde8c.md) [`005ce000`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005ce/005ce000.md) [`005ce1b4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005ce/005ce1b4.md) [`005ce368`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005ce/005ce368.md)
- 新版 呼出元 2件 [`005cd6a0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005cd/005cd6a0.md) [`005ce640`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005ce/005ce640.md) · 呼出先 11件 [`005cdd40`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005cd/005cdd40.md) [`005cdecc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005cd/005cdecc.md) [`005ce040`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005ce/005ce040.md) [`005ce1f4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005ce/005ce1f4.md) [`005ce3a8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005ce/005ce3a8.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 93.75% / 新版 93.75%

優先判定に残った影響 `store_value` 3件

アドレスに依存する影響 `store_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "005cd834",
      "incomplete_value": true,
      "site": "005cd838",
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
      "definition_site": "005cd7f4",
      "incomplete_value": true,
      "site": "005cd7f8",
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
      "definition_site": "005cd854",
      "incomplete_value": true,
      "site": "005cd854",
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
      "definition_site": "005cd814",
      "incomplete_value": true,
      "site": "005cd814",
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
    "ordinal": 13,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "005cd878",
      "incomplete_value": true,
      "site": "005cd878",
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
      "definition_site": "005cd838",
      "incomplete_value": true,
      "site": "005cd838",
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
      "005cd830",
      "READ",
      [
        "storage",
        "00c9b380",
        null,
        "pointer"
      ]
    ],
    [
      "005cd838",
      "DATA",
      [
        "storage",
        "00c70a98",
        null,
        "pointer"
      ]
    ],
    [
      "005cd84c",
      "READ",
      [
        "storage",
        "00c9b388",
        null,
        "pointer"
      ]
    ]
  ],
  "added": [
    [
      "005cd830",
      "READ",
      [
        "storage",
        "00c9b450",
        null,
        "pointer"
      ]
    ],
    [
      "005cd838",
      "DATA",
      [
        "storage",
        "00c70b68",
        null,
        "pointer"
      ]
    ],
    [
      "005cd84c",
      "READ",
      [
        "storage",
        "00c9b458",
        null,
        "pointer"
      ]
    ]
  ]
}
~~~


~~~diff
- 005cd7e4 ["INT_ADD", "register:40f0:8", ["const:5cd7e4:8", "const:4:8"]]
- 005cd7e4 ["CALL", null, ["callee:00c57f60:8"]]
+ 005cd824 ["INT_ADD", "register:40f0:8", ["const:5cd824:8", "const:4:8"]]
+ 005cd824 ["CALL", null, ["callee:00c57f60:8"]]
- 005cd7f0 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:380:8"]]
- 005cd7f0 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
+ 005cd830 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:450:8"]]
+ 005cd830 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
- 005cd800 ["INT_ADD", "register:40f0:8", ["const:5cd800:8", "const:4:8"]]
- 005cd800 ["CALL", null, ["callee:00c57f60:8"]]
+ 005cd840 ["INT_ADD", "register:40f0:8", ["const:5cd840:8", "const:4:8"]]
+ 005cd840 ["CALL", null, ["callee:00c57f60:8"]]
~~~


<a id="compare-4ca71246ba95219292d4b1fe553e6877"></a>

### [`005cdafc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005cd/005cdafc.md) → [`005cdb3c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005cd/005cdb3c.md) FUN_005cdb3c

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`005cd660`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005cd/005cd660.md) · 呼出先 4件 [`00c37288`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c37/00c37288.md) [`00c57ef0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ef0.md) [`00c57f10`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57f10.md) [`00c5a7b0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5a7b0.md)
- 新版 呼出元 1件 [`005cd6a0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005cd/005cd6a0.md) · 呼出先 4件 [`00c37324`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c37/00c37324.md) [`00c57fc0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fc0.md) [`00c57fe0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fe0.md) [`00c5a880`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5a880.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 85.71% / 新版 85.71%

優先判定に残った影響 `call_argument_candidate` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "005cdb68",
      "incomplete_value": true,
      "site": "005cdb70",
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
                "const:480:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "005cdb28",
      "incomplete_value": true,
      "site": "005cdb30",
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
                "const:3b0:8"
              ]
            ]
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
      "definition_site": "005cdb6c",
      "incomplete_value": true,
      "site": "005cdb70",
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
                "const:488:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "005cdb2c",
      "incomplete_value": true,
      "site": "005cdb30",
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
                "const:3b8:8"
              ]
            ]
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
      "005cdb68",
      "READ",
      [
        "storage",
        "00c9b3b0",
        null,
        "pointer"
      ]
    ],
    [
      "005cdb68",
      "PARAM",
      [
        "storage",
        "00c965b8",
        "std::__ndk1::regex_error::typeinfo",
        "pointer __((offset(0x10)))"
      ]
    ],
    [
      "005cdb6c",
      "READ",
      [
        "storage",
        "00c9b3b8",
        null,
        "pointer"
      ]
    ]
  ],
  "added": [
    [
      "005cdb68",
      "READ",
      [
        "storage",
        "00c9b480",
        null,
        "pointer"
      ]
    ],
    [
      "005cdb68",
      "PARAM",
      [
        "storage",
        "00c96688",
        "std::__ndk1::regex_error::typeinfo",
        "pointer __((offset(0x10)))"
      ]
    ],
    [
      "005cdb6c",
      "READ",
      [
        "storage",
        "00c9b488",
        null,
        "pointer"
      ]
    ]
  ]
}
~~~


~~~diff
- 005cdb30 ["INT_ADD", "register:40f0:8", ["const:5cdb30:8", "const:4:8"]]
- 005cdb30 ["CALL", null, ["callee:00c57fe0:8"]]
+ 005cdb70 ["INT_ADD", "register:40f0:8", ["const:5cdb70:8", "const:4:8"]]
+ 005cdb70 ["CALL", null, ["callee:00c57fe0:8"]]
- 005cdb0c ["INT_ADD", "register:40f0:8", ["const:5cdb0c:8", "const:4:8"]]
- 005cdb0c ["CALL", null, ["callee:00c57fc0:8"]]
+ 005cdb4c ["INT_ADD", "register:40f0:8", ["const:5cdb4c:8", "const:4:8"]]
+ 005cdb4c ["CALL", null, ["callee:00c57fc0:8"]]
- 005cdb18 ["INT_ADD", "register:40f0:8", ["const:5cdb18:8", "const:4:8"]]
- 005cdb18 ["CALL", null, ["callee:00c5a880:8"]]
+ 005cdb58 ["INT_ADD", "register:40f0:8", ["const:5cdb58:8", "const:4:8"]]
+ 005cdb58 ["CALL", null, ["callee:00c5a880:8"]]
~~~


<a id="compare-f5578a2837c73c786000836cacca3280"></a>

### [`005cdd00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005cd/005cdd00.md) → [`005cdd40`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005cd/005cdd40.md) FUN_005cdd40

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 2件 [`005cd7b8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005cd/005cd7b8.md) [`005ce000`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005ce/005ce000.md) · 呼出先 4件 [`005d51b0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005d5/005d51b0.md) [`005d51fc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005d5/005d51fc.md) [`005d5408`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005d5/005d5408.md) [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md)
- 新版 呼出元 2件 [`005cd7f8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005cd/005cd7f8.md) [`005ce040`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005ce/005ce040.md) · 呼出先 4件 [`005d51f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005d5/005d51f0.md) [`005d523c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005d5/005d523c.md) [`005d5448`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005d5/005d5448.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 96.97% / 新版 96.97%

優先判定に残った影響 `store_value` 1件

アドレスに依存する影響 `store_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "005cdd9c",
      "incomplete_value": true,
      "site": "005cddb4",
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
      "definition_site": "005cdd5c",
      "incomplete_value": true,
      "site": "005cdd74",
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
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "005cde74",
      "incomplete_value": true,
      "site": "005cde8c",
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
      "definition_site": "005cde34",
      "incomplete_value": true,
      "site": "005cde4c",
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
      "005cdd88",
      "READ",
      [
        "storage",
        "00c9b3c0",
        null,
        "pointer"
      ]
    ],
    [
      "005cddb4",
      "DATA",
      [
        "storage",
        "00c70be8",
        null,
        "pointer"
      ]
    ],
    [
      "005cde68",
      "READ",
      [
        "storage",
        "00c9b3c8",
        null,
        "pointer"
      ]
    ]
  ],
  "added": [
    [
      "005cdd88",
      "READ",
      [
        "storage",
        "00c9b490",
        null,
        "pointer"
      ]
    ],
    [
      "005cddb4",
      "DATA",
      [
        "storage",
        "00c70cb8",
        null,
        "pointer"
      ]
    ],
    [
      "005cde68",
      "READ",
      [
        "storage",
        "00c9b498",
        null,
        "pointer"
      ]
    ]
  ]
}
~~~


~~~diff
- 005cdd38 ["INT_ADD", "register:40f0:8", ["const:5cdd38:8", "const:4:8"]]
- 005cdd38 ["CALL", null, ["callee:00c57f60:8"]]
+ 005cdd78 ["INT_ADD", "register:40f0:8", ["const:5cdd78:8", "const:4:8"]]
+ 005cdd78 ["CALL", null, ["callee:00c57f60:8"]]
- 005cdd48 ["INT_ADD", "tmp:0:8", ["register:4050:8", "const:3c0:8"]]
- 005cdd48 ["LOAD", "register:4050:8", ["const:1b1:8", "tmp:0:8"]]
+ 005cdd88 ["INT_ADD", "tmp:0:8", ["register:4050:8", "const:490:8"]]
+ 005cdd88 ["LOAD", "register:4050:8", ["const:1b1:8", "tmp:0:8"]]
- 005cddcc ["INT_ADD", "register:40f0:8", ["const:5cddcc:8", "const:4:8"]]
- 005cddcc ["CALL", null, ["callee:005d523c:8"]]
+ 005cde0c ["INT_ADD", "register:40f0:8", ["const:5cde0c:8", "const:4:8"]]
+ 005cde0c ["CALL", null, ["callee:005d523c:8"]]
~~~


<a id="compare-e23517923b332d8ee5223d9ad6f2854a"></a>

### [`005ce368`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005ce/005ce368.md) → [`005ce3a8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005ce/005ce3a8.md) FUN_005ce3a8

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`005cd7b8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005cd/005cd7b8.md) · 呼出先 4件 [`00c37288`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c37/00c37288.md) [`00c57ef0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ef0.md) [`00c57f10`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57f10.md) [`00c5a7b0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5a7b0.md)
- 新版 呼出元 1件 [`005cd7f8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005cd/005cd7f8.md) · 呼出先 4件 [`00c37324`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c37/00c37324.md) [`00c57fc0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fc0.md) [`00c57fe0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fe0.md) [`00c5a880`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5a880.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 85.71% / 新版 85.71%

優先判定に残った影響 `call_argument_candidate` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "005ce3d4",
      "incomplete_value": true,
      "site": "005ce3dc",
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
                "const:480:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "005ce394",
      "incomplete_value": true,
      "site": "005ce39c",
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
                "const:3b0:8"
              ]
            ]
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
      "definition_site": "005ce3d8",
      "incomplete_value": true,
      "site": "005ce3dc",
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
                "const:488:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "005ce398",
      "incomplete_value": true,
      "site": "005ce39c",
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
                "const:3b8:8"
              ]
            ]
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
      "005ce3d4",
      "READ",
      [
        "storage",
        "00c9b3b0",
        null,
        "pointer"
      ]
    ],
    [
      "005ce3d4",
      "PARAM",
      [
        "storage",
        "00c965b8",
        "std::__ndk1::regex_error::typeinfo",
        "pointer __((offset(0x10)))"
      ]
    ],
    [
      "005ce3d8",
      "READ",
      [
        "storage",
        "00c9b3b8",
        null,
        "pointer"
      ]
    ]
  ],
  "added": [
    [
      "005ce3d4",
      "READ",
      [
        "storage",
        "00c9b480",
        null,
        "pointer"
      ]
    ],
    [
      "005ce3d4",
      "PARAM",
      [
        "storage",
        "00c96688",
        "std::__ndk1::regex_error::typeinfo",
        "pointer __((offset(0x10)))"
      ]
    ],
    [
      "005ce3d8",
      "READ",
      [
        "storage",
        "00c9b488",
        null,
        "pointer"
      ]
    ]
  ]
}
~~~


~~~diff
- 005ce39c ["INT_ADD", "register:40f0:8", ["const:5ce39c:8", "const:4:8"]]
- 005ce39c ["CALL", null, ["callee:00c57fe0:8"]]
+ 005ce3dc ["INT_ADD", "register:40f0:8", ["const:5ce3dc:8", "const:4:8"]]
+ 005ce3dc ["CALL", null, ["callee:00c57fe0:8"]]
- 005ce378 ["INT_ADD", "register:40f0:8", ["const:5ce378:8", "const:4:8"]]
- 005ce378 ["CALL", null, ["callee:00c57fc0:8"]]
+ 005ce3b8 ["INT_ADD", "register:40f0:8", ["const:5ce3b8:8", "const:4:8"]]
+ 005ce3b8 ["CALL", null, ["callee:00c57fc0:8"]]
- 005ce384 ["INT_ADD", "register:40f0:8", ["const:5ce384:8", "const:4:8"]]
- 005ce384 ["CALL", null, ["callee:00c5a880:8"]]
+ 005ce3c4 ["INT_ADD", "register:40f0:8", ["const:5ce3c4:8", "const:4:8"]]
+ 005ce3c4 ["CALL", null, ["callee:00c5a880:8"]]
~~~


<a id="compare-ab5faea1e4b250aee1e1e95c277f8f81"></a>

### [`005ce600`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005ce/005ce600.md) → [`005ce640`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005ce/005ce640.md) FUN_005ce640

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 2件 [`005ce4cc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005ce/005ce4cc.md) [`005ce56c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005ce/005ce56c.md) · 呼出先 8件 [`005cd718`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005cd/005cd718.md) [`005cd7b8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005cd/005cd7b8.md) [`005cef7c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005ce/005cef7c.md) [`005cefe8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005ce/005cefe8.md) [`005cf09c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005cf/005cf09c.md)
- 新版 呼出元 2件 [`005ce50c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005ce/005ce50c.md) [`005ce5ac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005ce/005ce5ac.md) · 呼出先 8件 [`005cd758`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005cd/005cd758.md) [`005cd7f8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005cd/005cd7f8.md) [`005cefbc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005ce/005cefbc.md) [`005cf028`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005cf/005cf028.md) [`005cf0dc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005cf/005cf0dc.md)

変更の種類 constant, operands_and_dependencies, operation_sequence, store_value

命令の説明率　旧版 95.61% / 新版 95.61%

優先判定に残った影響 `store_value` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "005ce850",
      "incomplete_value": true,
      "site": "005ce850",
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
      "definition_site": "005ce810",
      "incomplete_value": true,
      "site": "005ce810",
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
    "ordinal": 15,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "005ce8a0",
      "incomplete_value": true,
      "site": "005ce8a0",
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
      "definition_site": "005ce860",
      "incomplete_value": true,
      "site": "005ce860",
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
      "005ce770",
      "READ",
      [
        "storage",
        "00c9b3c0",
        null,
        "pointer"
      ]
    ],
    [
      "005ce79c",
      "READ",
      [
        "storage",
        "00c9b3c8",
        null,
        "pointer"
      ]
    ],
    [
      "005ce7c0",
      "DATA",
      [
        "storage",
        "00c70c30",
        null,
        "pointer"
      ]
    ]
  ],
  "added": [
    [
      "005ce770",
      "READ",
      [
        "storage",
        "00c9b490",
        null,
        "pointer"
      ]
    ],
    [
      "005ce79c",
      "READ",
      [
        "storage",
        "00c9b498",
        null,
        "pointer"
      ]
    ],
    [
      "005ce7c0",
      "DATA",
      [
        "storage",
        "00c70d00",
        null,
        "pointer"
      ]
    ]
  ]
}
~~~


~~~diff
- 005ce850 ["INT_ADD", "tmp:0:8", ["register:4048:8", "const:3d8:8"]]
- 005ce850 ["LOAD", "register:4048:8", ["const:1b1:8", "tmp:0:8"]]
+ 005ce890 ["INT_ADD", "tmp:0:8", ["register:4048:8", "const:4a8:8"]]
+ 005ce890 ["LOAD", "register:4048:8", ["const:1b1:8", "tmp:0:8"]]
- 005ce690 ["INT_ADD", "register:40f0:8", ["const:5ce690:8", "const:4:8"]]
- 005ce690 ["CALL", null, ["callee:005cefbc:8"]]
+ 005ce6d0 ["INT_ADD", "register:40f0:8", ["const:5ce6d0:8", "const:4:8"]]
+ 005ce6d0 ["CALL", null, ["callee:005cefbc:8"]]
- 005ce6b0 ["INT_ADD", "register:40f0:8", ["const:5ce6b0:8", "const:4:8"]]
- 005ce6b0 ["CALL", null, ["callee:005cd7f8:8"]]
+ 005ce6f0 ["INT_ADD", "register:40f0:8", ["const:5ce6f0:8", "const:4:8"]]
+ 005ce6f0 ["CALL", null, ["callee:005cd7f8:8"]]
~~~


<a id="compare-a35d7f16181b1094b0c41361eda3e101"></a>

### [`005ce964`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005ce/005ce964.md) → [`005ce9a4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005ce/005ce9a4.md) FUN_005ce9a4

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 2件 [`005ce4cc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005ce/005ce4cc.md) [`005ce56c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005ce/005ce56c.md) · 呼出先 10件 [`005cdb48`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005cd/005cdb48.md) [`005cf09c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005cf/005cf09c.md) [`005d0650`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005d0/005d0650.md) [`005d07a4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005d0/005d07a4.md) [`005d07f0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005d0/005d07f0.md)
- 新版 呼出元 2件 [`005ce50c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005ce/005ce50c.md) [`005ce5ac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005ce/005ce5ac.md) · 呼出先 10件 [`005cdb88`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005cd/005cdb88.md) [`005cf0dc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005cf/005cf0dc.md) [`005d0690`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005d0/005d0690.md) [`005d07e4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005d0/005d07e4.md) [`005d0830`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005d0/005d0830.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 98.28% / 新版 98.28%

優先判定に残った影響 `store_value` 1件

アドレスに依存する影響 `store_value` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "005ce9fc",
      "incomplete_value": true,
      "site": "005cea0c",
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
      "definition_site": "005ce9bc",
      "incomplete_value": true,
      "site": "005ce9cc",
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
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "005ceb50",
      "incomplete_value": true,
      "site": "005ceb68",
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
      "definition_site": "005ceb10",
      "incomplete_value": true,
      "site": "005ceb28",
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
    "ordinal": 15,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "005cebfc",
      "incomplete_value": true,
      "site": "005cec0c",
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
      "definition_site": "005cebbc",
      "incomplete_value": true,
      "site": "005cebcc",
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
      "005ce9f4",
      "READ",
      [
        "storage",
        "00c9b3e0",
        null,
        "pointer"
      ]
    ],
    [
      "005cea0c",
      "DATA",
      [
        "storage",
        "00c70d08",
        null,
        "pointer"
      ]
    ],
    [
      "005ceb3c",
      "READ",
      [
        "storage",
        "00c9b3e8",
        null,
        "pointer"
      ]
    ]
  ],
  "added": [
    [
      "005ce9f4",
      "READ",
      [
        "storage",
        "00c9b4b0",
        null,
        "pointer"
      ]
    ],
    [
      "005cea0c",
      "DATA",
      [
        "storage",
        "00c70dd8",
        null,
        "pointer"
      ]
    ],
    [
      "005ceb3c",
      "READ",
      [
        "storage",
        "00c9b4b8",
        null,
        "pointer"
      ]
    ]
  ]
}
~~~


~~~diff
- 005ce9a8 ["INT_ADD", "register:40f0:8", ["const:5ce9a8:8", "const:4:8"]]
- 005ce9a8 ["CALL", null, ["callee:00c57f60:8"]]
+ 005ce9e8 ["INT_ADD", "register:40f0:8", ["const:5ce9e8:8", "const:4:8"]]
+ 005ce9e8 ["CALL", null, ["callee:00c57f60:8"]]
- 005ce9b4 ["INT_ADD", "tmp:0:8", ["register:4048:8", "const:3e0:8"]]
- 005ce9b4 ["LOAD", "register:4048:8", ["const:1b1:8", "tmp:0:8"]]
+ 005ce9f4 ["INT_ADD", "tmp:0:8", ["register:4048:8", "const:4b0:8"]]
+ 005ce9f4 ["LOAD", "register:4048:8", ["const:1b1:8", "tmp:0:8"]]
- 005cea2c ["INT_ADD", "register:40f0:8", ["const:5cea2c:8", "const:4:8"]]
- 005cea2c ["CALL", null, ["callee:005d092c:8"]]
+ 005cea6c ["INT_ADD", "register:40f0:8", ["const:5cea6c:8", "const:4:8"]]
+ 005cea6c ["CALL", null, ["callee:005d092c:8"]]
~~~


<a id="compare-0e8ef845fc09d4e33246fb7f86a0180f"></a>

### [`005cef7c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005ce/005cef7c.md) → [`005cefbc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005ce/005cefbc.md) FUN_005cefbc

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`005ce600`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005ce/005ce600.md) · 呼出先 2件 [`00c58280`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58280.md) [`00c5a7a0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5a7a0.md)
- 新版 呼出元 1件 [`005ce640`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005ce/005ce640.md) · 呼出先 2件 [`00c58350`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58350.md) [`00c5a870`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5a870.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 90.91% / 新版 90.91%

優先判定に残った影響 `call_argument_candidate` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "005cefd8",
      "incomplete_value": true,
      "site": "005cefdc",
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
                "const:d00:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "005cef98",
      "incomplete_value": true,
      "site": "005cef9c",
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
                "const:c30:8"
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
      "definition_site": "005cefec",
      "incomplete_value": true,
      "site": "005ceff0",
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
                "const:448:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "005cefac",
      "incomplete_value": true,
      "site": "005cefb0",
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
                "const:378:8"
              ]
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
      "005cefd8",
      "READ",
      [
        "storage",
        "00c9ac30",
        null,
        "pointer"
      ]
    ],
    [
      "005cefd8",
      "PARAM",
      [
        "storage",
        "01127e18",
        "std::__ndk1::ctype<char>::id",
        "undefined8"
      ]
    ],
    [
      "005cefec",
      "READ",
      [
        "storage",
        "00c9b378",
        null,
        "pointer"
      ]
    ]
  ],
  "added": [
    [
      "005cefd8",
      "READ",
      [
        "storage",
        "00c9ad00",
        null,
        "pointer"
      ]
    ],
    [
      "005cefd8",
      "PARAM",
      [
        "storage",
        "01127f18",
        "std::__ndk1::ctype<char>::id",
        "undefined8"
      ]
    ],
    [
      "005cefec",
      "READ",
      [
        "storage",
        "00c9b448",
        null,
        "pointer"
      ]
    ]
  ]
}
~~~


~~~diff
- 005cef9c ["INT_ADD", "register:40f0:8", ["const:5cef9c:8", "const:4:8"]]
- 005cef9c ["CALL", null, ["callee:00c58350:8"]]
+ 005cefdc ["INT_ADD", "register:40f0:8", ["const:5cefdc:8", "const:4:8"]]
+ 005cefdc ["CALL", null, ["callee:00c58350:8"]]
- 005cefb0 ["INT_ADD", "register:40f0:8", ["const:5cefb0:8", "const:4:8"]]
- 005cefb0 ["CALL", null, ["callee:00c58350:8"]]
+ 005ceff0 ["INT_ADD", "register:40f0:8", ["const:5ceff0:8", "const:4:8"]]
+ 005ceff0 ["CALL", null, ["callee:00c58350:8"]]
- 005cef8c ["INT_ADD", "register:40f0:8", ["const:5cef8c:8", "const:4:8"]]
- 005cef8c ["CALL", null, ["callee:00c5a870:8"]]
+ 005cefcc ["INT_ADD", "register:40f0:8", ["const:5cefcc:8", "const:4:8"]]
+ 005cefcc ["CALL", null, ["callee:00c5a870:8"]]
~~~


<a id="compare-75611a3d88173d7e172e17dea2211d58"></a>

### [`005cefe8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005ce/005cefe8.md) → [`005cf028`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005cf/005cf028.md) FUN_005cf028

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`005ce600`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005ce/005ce600.md) · 呼出先 3件 [`00c53cd0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c53/00c53cd0.md) [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md) [`00c5a7d0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5a7d0.md)
- 新版 呼出元 1件 [`005ce640`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005ce/005ce640.md) · 呼出先 3件 [`00c53d70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53d70.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c5a8a0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5a8a0.md)

変更の種類 constant, operands_and_dependencies, operation_sequence, store_value

命令の説明率　旧版 91.11% / 新版 91.11%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "005cf070",
      "incomplete_value": true,
      "site": "005cf070",
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
      "definition_site": "005cf030",
      "incomplete_value": true,
      "site": "005cf030",
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
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "005cf060",
      "READ",
      [
        "storage",
        "00c9b3f8",
        null,
        "pointer"
      ]
    ],
    [
      "005cf070",
      "DATA",
      [
        "storage",
        "00c70cc0",
        null,
        "pointer"
      ]
    ]
  ],
  "added": [
    [
      "005cf060",
      "READ",
      [
        "storage",
        "00c9b4c8",
        null,
        "pointer"
      ]
    ],
    [
      "005cf070",
      "DATA",
      [
        "storage",
        "00c70d90",
        null,
        "pointer"
      ]
    ]
  ]
}
~~~


~~~diff
- 005cf010 ["INT_ADD", "register:40f0:8", ["const:5cf010:8", "const:4:8"]]
- 005cf010 ["CALL", null, ["callee:00c57f60:8"]]
+ 005cf050 ["INT_ADD", "register:40f0:8", ["const:5cf050:8", "const:4:8"]]
+ 005cf050 ["CALL", null, ["callee:00c57f60:8"]]
- 005cf020 ["INT_ADD", "tmp:0:8", ["register:4048:8", "const:3f8:8"]]
- 005cf020 ["LOAD", "register:4048:8", ["const:1b1:8", "tmp:0:8"]]
+ 005cf060 ["INT_ADD", "tmp:0:8", ["register:4048:8", "const:4c8:8"]]
+ 005cf060 ["LOAD", "register:4048:8", ["const:1b1:8", "tmp:0:8"]]
- 005cf024 ["COPY", "register:40b0:8", ["register:4000:8"]]
~~~


<a id="compare-0fcd926f3a1f25512a60f2981cef5773"></a>

### [`005cf09c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005cf/005cf09c.md) → [`005cf0dc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005cf/005cf0dc.md) FUN_005cf0dc

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 4件 [`005ce600`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005ce/005ce600.md) [`005ce964`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005ce/005ce964.md) [`005d51fc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005d5/005d51fc.md) [`005d586c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005d5/005d586c.md) · 呼出先 4件 [`00c37288`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c37/00c37288.md) [`00c57ef0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ef0.md) [`00c57f10`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57f10.md) [`00c5a7b0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5a7b0.md)
- 新版 呼出元 4件 [`005ce640`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005ce/005ce640.md) [`005ce9a4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005ce/005ce9a4.md) [`005d523c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005d5/005d523c.md) [`005d58ac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005d5/005d58ac.md) · 呼出先 4件 [`00c37324`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c37/00c37324.md) [`00c57fc0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fc0.md) [`00c57fe0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fe0.md) [`00c5a880`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5a880.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 85.71% / 新版 85.71%

優先判定に残った影響 `call_argument_candidate` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "005cf108",
      "incomplete_value": true,
      "site": "005cf110",
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
                "const:480:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "005cf0c8",
      "incomplete_value": true,
      "site": "005cf0d0",
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
                "const:3b0:8"
              ]
            ]
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
      "definition_site": "005cf10c",
      "incomplete_value": true,
      "site": "005cf110",
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
                "const:488:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "005cf0cc",
      "incomplete_value": true,
      "site": "005cf0d0",
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
                "const:3b8:8"
              ]
            ]
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
      "005cf108",
      "READ",
      [
        "storage",
        "00c9b3b0",
        null,
        "pointer"
      ]
    ],
    [
      "005cf108",
      "PARAM",
      [
        "storage",
        "00c965b8",
        "std::__ndk1::regex_error::typeinfo",
        "pointer __((offset(0x10)))"
      ]
    ],
    [
      "005cf10c",
      "READ",
      [
        "storage",
        "00c9b3b8",
        null,
        "pointer"
      ]
    ]
  ],
  "added": [
    [
      "005cf108",
      "READ",
      [
        "storage",
        "00c9b480",
        null,
        "pointer"
      ]
    ],
    [
      "005cf108",
      "PARAM",
      [
        "storage",
        "00c96688",
        "std::__ndk1::regex_error::typeinfo",
        "pointer __((offset(0x10)))"
      ]
    ],
    [
      "005cf10c",
      "READ",
      [
        "storage",
        "00c9b488",
        null,
        "pointer"
      ]
    ]
  ]
}
~~~


~~~diff
- 005cf0d0 ["INT_ADD", "register:40f0:8", ["const:5cf0d0:8", "const:4:8"]]
- 005cf0d0 ["CALL", null, ["callee:00c57fe0:8"]]
+ 005cf110 ["INT_ADD", "register:40f0:8", ["const:5cf110:8", "const:4:8"]]
+ 005cf110 ["CALL", null, ["callee:00c57fe0:8"]]
- 005cf0ac ["INT_ADD", "register:40f0:8", ["const:5cf0ac:8", "const:4:8"]]
- 005cf0ac ["CALL", null, ["callee:00c57fc0:8"]]
+ 005cf0ec ["INT_ADD", "register:40f0:8", ["const:5cf0ec:8", "const:4:8"]]
+ 005cf0ec ["CALL", null, ["callee:00c57fc0:8"]]
- 005cf0b8 ["INT_ADD", "register:40f0:8", ["const:5cf0b8:8", "const:4:8"]]
- 005cf0b8 ["CALL", null, ["callee:00c5a880:8"]]
+ 005cf0f8 ["INT_ADD", "register:40f0:8", ["const:5cf0f8:8", "const:4:8"]]
+ 005cf0f8 ["CALL", null, ["callee:00c5a880:8"]]
~~~


<a id="compare-1fbb28d0245da4d1f6addd22b3553b05"></a>

### [`005cf228`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005cf/005cf228.md) → [`005cf268`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005cf/005cf268.md) FUN_005cf268

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c58290`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58290.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c58360`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58360.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 86.96% / 新版 86.96%

優先判定に残った影響 `store_value` 1件

アドレスに依存する影響 `store_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "005cf284",
      "incomplete_value": true,
      "site": "005cf284",
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
      "definition_site": "005cf244",
      "incomplete_value": true,
      "site": "005cf244",
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
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "005cf298",
      "incomplete_value": true,
      "site": "005cf29c",
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
      "definition_site": "005cf258",
      "incomplete_value": true,
      "site": "005cf25c",
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
      "005cf27c",
      "READ",
      [
        "storage",
        "00c9b3d8",
        null,
        "pointer"
      ]
    ],
    [
      "005cf284",
      "DATA",
      [
        "storage",
        "00c70c78",
        null,
        "pointer"
      ]
    ],
    [
      "005cf290",
      "READ",
      [
        "storage",
        "00c9b3a8",
        null,
        "pointer"
      ]
    ]
  ],
  "added": [
    [
      "005cf27c",
      "READ",
      [
        "storage",
        "00c9b4a8",
        null,
        "pointer"
      ]
    ],
    [
      "005cf284",
      "DATA",
      [
        "storage",
        "00c70d48",
        null,
        "pointer"
      ]
    ],
    [
      "005cf290",
      "READ",
      [
        "storage",
        "00c9b478",
        null,
        "pointer"
      ]
    ]
  ]
}
~~~


~~~diff
- 005cf23c ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:3d8:8"]]
- 005cf23c ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
+ 005cf27c ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:4a8:8"]]
+ 005cf27c ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
- 005cf248 ["INT_ADD", "register:40f0:8", ["const:5cf248:8", "const:4:8"]]
- 005cf248 ["CALL", null, ["callee:00c58360:8"]]
+ 005cf288 ["INT_ADD", "register:40f0:8", ["const:5cf288:8", "const:4:8"]]
+ 005cf288 ["CALL", null, ["callee:00c58360:8"]]
- 005cf250 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:3a8:8"]]
- 005cf250 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
+ 005cf290 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:478:8"]]
+ 005cf290 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-75c559218620a40fa4f84eb6c8b5ec6d"></a>

### [`005cf284`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005cf/005cf284.md) → [`005cf2c4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005cf/005cf2c4.md) FUN_005cf2c4

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c58290`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58290.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c58360`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58360.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 86.36% / 新版 86.36%

優先判定に残った影響 `store_value` 1件

アドレスに依存する影響 `store_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "005cf2e0",
      "incomplete_value": true,
      "site": "005cf2e0",
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
      "definition_site": "005cf2a0",
      "incomplete_value": true,
      "site": "005cf2a0",
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
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "005cf2f4",
      "incomplete_value": true,
      "site": "005cf2f8",
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
      "definition_site": "005cf2b4",
      "incomplete_value": true,
      "site": "005cf2b8",
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
      "005cf2d8",
      "READ",
      [
        "storage",
        "00c9b3d8",
        null,
        "pointer"
      ]
    ],
    [
      "005cf2e0",
      "DATA",
      [
        "storage",
        "00c70c78",
        null,
        "pointer"
      ]
    ],
    [
      "005cf2ec",
      "READ",
      [
        "storage",
        "00c9b3a8",
        null,
        "pointer"
      ]
    ]
  ],
  "added": [
    [
      "005cf2d8",
      "READ",
      [
        "storage",
        "00c9b4a8",
        null,
        "pointer"
      ]
    ],
    [
      "005cf2e0",
      "DATA",
      [
        "storage",
        "00c70d48",
        null,
        "pointer"
      ]
    ],
    [
      "005cf2ec",
      "READ",
      [
        "storage",
        "00c9b478",
        null,
        "pointer"
      ]
    ]
  ]
}
~~~


~~~diff
- 005cf298 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:3d8:8"]]
- 005cf298 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
+ 005cf2d8 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:4a8:8"]]
+ 005cf2d8 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
- 005cf2a4 ["INT_ADD", "register:40f0:8", ["const:5cf2a4:8", "const:4:8"]]
- 005cf2a4 ["CALL", null, ["callee:00c58360:8"]]
+ 005cf2e4 ["INT_ADD", "register:40f0:8", ["const:5cf2e4:8", "const:4:8"]]
+ 005cf2e4 ["CALL", null, ["callee:00c58360:8"]]
- 005cf2ac ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:3a8:8"]]
- 005cf2ac ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
+ 005cf2ec ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:478:8"]]
+ 005cf2ec ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-345a3c62e18b35775ce4409f4fc0f45d"></a>

### [`005cf3ec`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005cf/005cf3ec.md) → [`005cf42c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005cf/005cf42c.md) FUN_005cf42c

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 3件 [`00c53d00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c53/00c53d00.md) [`00c57e80`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e80.md) [`00c58290`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58290.md)
- 新版 呼出元 0件  · 呼出先 3件 [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md) [`00c58360`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58360.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 91.67% / 新版 91.67%

優先判定に残った影響 `store_value` 1件

アドレスに依存する影響 `store_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "005cf448",
      "incomplete_value": true,
      "site": "005cf44c",
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
      "definition_site": "005cf408",
      "incomplete_value": true,
      "site": "005cf40c",
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
    "ordinal": 4,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "005cf490",
      "incomplete_value": true,
      "site": "005cf494",
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
      "definition_site": "005cf450",
      "incomplete_value": true,
      "site": "005cf454",
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
      "005cf440",
      "READ",
      [
        "storage",
        "00c9b3f8",
        null,
        "pointer"
      ]
    ],
    [
      "005cf44c",
      "DATA",
      [
        "storage",
        "00c70cc0",
        null,
        "pointer"
      ]
    ],
    [
      "005cf488",
      "READ",
      [
        "storage",
        "00c9b3a8",
        null,
        "pointer"
      ]
    ]
  ],
  "added": [
    [
      "005cf440",
      "READ",
      [
        "storage",
        "00c9b4c8",
        null,
        "pointer"
      ]
    ],
    [
      "005cf44c",
      "DATA",
      [
        "storage",
        "00c70d90",
        null,
        "pointer"
      ]
    ],
    [
      "005cf488",
      "READ",
      [
        "storage",
        "00c9b478",
        null,
        "pointer"
      ]
    ]
  ]
}
~~~


~~~diff
- 005cf400 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:3f8:8"]]
- 005cf400 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
+ 005cf440 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:4c8:8"]]
+ 005cf440 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
- 005cf41c ["INT_ADD", "register:40f0:8", ["const:5cf41c:8", "const:4:8"]]
- 005cf41c ["CALL", null, ["callee:00c53da0:8"]]
+ 005cf45c ["INT_ADD", "register:40f0:8", ["const:5cf45c:8", "const:4:8"]]
+ 005cf45c ["CALL", null, ["callee:00c53da0:8"]]
- 005cf430 ["COPY", "register:0:8", ["register:4040:8"]]
- 005cf430 ["INT_ADD", "register:40f0:8", ["const:5cf430:8", "const:4:8"]]
- 005cf430 ["CALLIND", null, ["register:0:8"]]
+ 005cf470 ["COPY", "register:0:8", ["register:4040:8"]]
+ 005cf470 ["INT_ADD", "register:40f0:8", ["const:5cf470:8", "const:4:8"]]
+ 005cf470 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-d894109330162d3cd97baf916e672f6a"></a>

### [`005cf47c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005cf/005cf47c.md) → [`005cf4bc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005cf/005cf4bc.md) FUN_005cf4bc

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 4件 [`00c53d00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c53/00c53d00.md) [`00c57e80`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e80.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c58290`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58290.md)
- 新版 呼出元 0件  · 呼出先 4件 [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c58360`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58360.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 91.43% / 新版 91.43%

優先判定に残った影響 `store_value` 1件

アドレスに依存する影響 `store_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "005cf4d8",
      "incomplete_value": true,
      "site": "005cf4dc",
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
      "definition_site": "005cf498",
      "incomplete_value": true,
      "site": "005cf49c",
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
    "ordinal": 4,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "005cf520",
      "incomplete_value": true,
      "site": "005cf524",
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
      "definition_site": "005cf4e0",
      "incomplete_value": true,
      "site": "005cf4e4",
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
      "005cf4d0",
      "READ",
      [
        "storage",
        "00c9b3f8",
        null,
        "pointer"
      ]
    ],
    [
      "005cf4dc",
      "DATA",
      [
        "storage",
        "00c70cc0",
        null,
        "pointer"
      ]
    ],
    [
      "005cf518",
      "READ",
      [
        "storage",
        "00c9b3a8",
        null,
        "pointer"
      ]
    ]
  ],
  "added": [
    [
      "005cf4d0",
      "READ",
      [
        "storage",
        "00c9b4c8",
        null,
        "pointer"
      ]
    ],
    [
      "005cf4dc",
      "DATA",
      [
        "storage",
        "00c70d90",
        null,
        "pointer"
      ]
    ],
    [
      "005cf518",
      "READ",
      [
        "storage",
        "00c9b478",
        null,
        "pointer"
      ]
    ]
  ]
}
~~~


~~~diff
- 005cf490 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:3f8:8"]]
- 005cf490 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
+ 005cf4d0 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:4c8:8"]]
+ 005cf4d0 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
- 005cf4ac ["INT_ADD", "register:40f0:8", ["const:5cf4ac:8", "const:4:8"]]
- 005cf4ac ["CALL", null, ["callee:00c53da0:8"]]
+ 005cf4ec ["INT_ADD", "register:40f0:8", ["const:5cf4ec:8", "const:4:8"]]
+ 005cf4ec ["CALL", null, ["callee:00c53da0:8"]]
- 005cf4c0 ["COPY", "register:0:8", ["register:4040:8"]]
- 005cf4c0 ["INT_ADD", "register:40f0:8", ["const:5cf4c0:8", "const:4:8"]]
- 005cf4c0 ["CALLIND", null, ["register:0:8"]]
+ 005cf500 ["COPY", "register:0:8", ["register:4040:8"]]
+ 005cf500 ["INT_ADD", "register:40f0:8", ["const:5cf500:8", "const:4:8"]]
+ 005cf500 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-fad2d93adc97300c2f90efcd530edd05"></a>

### [`005cfcfc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005cf/005cfcfc.md) → [`005cfd3c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005cf/005cfd3c.md) FUN_005cfd3c

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 4件 [`005cfb34`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005cf/005cfb34.md) [`005cfda0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005cf/005cfda0.md) [`005d0384`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005d0/005d0384.md) [`005d808c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005d8/005d808c.md) · 呼出先 1件 [`0043b778`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043b778.md)
- 新版 呼出元 4件 [`005cfb74`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005cf/005cfb74.md) [`005cfde0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005cf/005cfde0.md) [`005d03c4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005d0/005d03c4.md) [`005d80cc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005d8/005d80cc.md) · 呼出先 1件 [`0043b7b8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b7b8.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 80.00% / 新版 80.00%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "005cfd48",
      "incomplete_value": false,
      "site": "005cfd4c",
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
      "definition_site": "005cfd08",
      "incomplete_value": false,
      "site": "005cfd0c",
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
      "005cfd48",
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
      "005cfd48",
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
- 005cfd0c ["INT_ADD", "register:40f0:8", ["const:5cfd0c:8", "const:4:8"]]
- 005cfd0c ["CALL", null, ["callee:0043b7b8:8"]]
+ 005cfd4c ["INT_ADD", "register:40f0:8", ["const:5cfd4c:8", "const:4:8"]]
+ 005cfd4c ["CALL", null, ["callee:0043b7b8:8"]]
- 005cfd08 ["COPY", "tmp:0:8", ["const:f4c:8"]]
- 005cfd08 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 005cfd08 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 005cfd08 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 005cfd48 ["COPY", "tmp:0:8", ["const:f8c:8"]]
+ 005cfd48 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 005cfd48 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 005cfd48 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
~~~


<a id="compare-9cb907a1cc02935031c7997404cf5b43"></a>

### [`005cfd54`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005cf/005cfd54.md) → [`005cfd94`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005cf/005cfd94.md) FUN_005cfd94

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 3件 [`005cf6c0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005cf/005cf6c0.md) [`005d6110`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005d6/005d6110.md) [`005d69f0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005d6/005d69f0.md) · 呼出先 4件 [`00c37288`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c37/00c37288.md) [`00c57ef0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ef0.md) [`00c57f10`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57f10.md) [`00c5a7b0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5a7b0.md)
- 新版 呼出元 3件 [`005cf700`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005cf/005cf700.md) [`005d6150`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005d6/005d6150.md) [`005d6a30`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005d6/005d6a30.md) · 呼出先 4件 [`00c37324`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c37/00c37324.md) [`00c57fc0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fc0.md) [`00c57fe0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fe0.md) [`00c5a880`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5a880.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 85.71% / 新版 85.71%

優先判定に残った影響 `call_argument_candidate` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "005cfdc0",
      "incomplete_value": true,
      "site": "005cfdc8",
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
                "const:480:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "005cfd80",
      "incomplete_value": true,
      "site": "005cfd88",
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
                "const:3b0:8"
              ]
            ]
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
      "definition_site": "005cfdc4",
      "incomplete_value": true,
      "site": "005cfdc8",
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
                "const:488:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "005cfd84",
      "incomplete_value": true,
      "site": "005cfd88",
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
                "const:3b8:8"
              ]
            ]
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
      "005cfdc0",
      "READ",
      [
        "storage",
        "00c9b3b0",
        null,
        "pointer"
      ]
    ],
    [
      "005cfdc0",
      "PARAM",
      [
        "storage",
        "00c965b8",
        "std::__ndk1::regex_error::typeinfo",
        "pointer __((offset(0x10)))"
      ]
    ],
    [
      "005cfdc4",
      "READ",
      [
        "storage",
        "00c9b3b8",
        null,
        "pointer"
      ]
    ]
  ],
  "added": [
    [
      "005cfdc0",
      "READ",
      [
        "storage",
        "00c9b480",
        null,
        "pointer"
      ]
    ],
    [
      "005cfdc0",
      "PARAM",
      [
        "storage",
        "00c96688",
        "std::__ndk1::regex_error::typeinfo",
        "pointer __((offset(0x10)))"
      ]
    ],
    [
      "005cfdc4",
      "READ",
      [
        "storage",
        "00c9b488",
        null,
        "pointer"
      ]
    ]
  ]
}
~~~


~~~diff
- 005cfd88 ["INT_ADD", "register:40f0:8", ["const:5cfd88:8", "const:4:8"]]
- 005cfd88 ["CALL", null, ["callee:00c57fe0:8"]]
+ 005cfdc8 ["INT_ADD", "register:40f0:8", ["const:5cfdc8:8", "const:4:8"]]
+ 005cfdc8 ["CALL", null, ["callee:00c57fe0:8"]]
- 005cfd64 ["INT_ADD", "register:40f0:8", ["const:5cfd64:8", "const:4:8"]]
- 005cfd64 ["CALL", null, ["callee:00c57fc0:8"]]
+ 005cfda4 ["INT_ADD", "register:40f0:8", ["const:5cfda4:8", "const:4:8"]]
+ 005cfda4 ["CALL", null, ["callee:00c57fc0:8"]]
- 005cfd70 ["INT_ADD", "register:40f0:8", ["const:5cfd70:8", "const:4:8"]]
- 005cfd70 ["CALL", null, ["callee:00c5a880:8"]]
+ 005cfdb0 ["INT_ADD", "register:40f0:8", ["const:5cfdb0:8", "const:4:8"]]
+ 005cfdb0 ["CALL", null, ["callee:00c5a880:8"]]
~~~


<a id="compare-983446a2acbf33dcb74fb76ffee2b38c"></a>

### [`005cff18`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005cf/005cff18.md) → [`005cff58`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005cf/005cff58.md) FUN_005cff58

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 3件 [`005cf6c0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005cf/005cf6c0.md) [`005d6110`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005d6/005d6110.md) [`005d69f0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005d6/005d69f0.md) · 呼出先 4件 [`00c37288`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c37/00c37288.md) [`00c57ef0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ef0.md) [`00c57f10`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57f10.md) [`00c5a7b0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5a7b0.md)
- 新版 呼出元 3件 [`005cf700`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005cf/005cf700.md) [`005d6150`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005d6/005d6150.md) [`005d6a30`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005d6/005d6a30.md) · 呼出先 4件 [`00c37324`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c37/00c37324.md) [`00c57fc0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fc0.md) [`00c57fe0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fe0.md) [`00c5a880`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5a880.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 85.71% / 新版 85.71%

優先判定に残った影響 `call_argument_candidate` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "005cff84",
      "incomplete_value": true,
      "site": "005cff8c",
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
                "const:480:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "005cff44",
      "incomplete_value": true,
      "site": "005cff4c",
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
                "const:3b0:8"
              ]
            ]
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
      "definition_site": "005cff88",
      "incomplete_value": true,
      "site": "005cff8c",
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
                "const:488:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "005cff48",
      "incomplete_value": true,
      "site": "005cff4c",
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
                "const:3b8:8"
              ]
            ]
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
      "005cff84",
      "READ",
      [
        "storage",
        "00c9b3b0",
        null,
        "pointer"
      ]
    ],
    [
      "005cff84",
      "PARAM",
      [
        "storage",
        "00c965b8",
        "std::__ndk1::regex_error::typeinfo",
        "pointer __((offset(0x10)))"
      ]
    ],
    [
      "005cff88",
      "READ",
      [
        "storage",
        "00c9b3b8",
        null,
        "pointer"
      ]
    ]
  ],
  "added": [
    [
      "005cff84",
      "READ",
      [
        "storage",
        "00c9b480",
        null,
        "pointer"
      ]
    ],
    [
      "005cff84",
      "PARAM",
      [
        "storage",
        "00c96688",
        "std::__ndk1::regex_error::typeinfo",
        "pointer __((offset(0x10)))"
      ]
    ],
    [
      "005cff88",
      "READ",
      [
        "storage",
        "00c9b488",
        null,
        "pointer"
      ]
    ]
  ]
}
~~~


~~~diff
- 005cff4c ["INT_ADD", "register:40f0:8", ["const:5cff4c:8", "const:4:8"]]
- 005cff4c ["CALL", null, ["callee:00c57fe0:8"]]
+ 005cff8c ["INT_ADD", "register:40f0:8", ["const:5cff8c:8", "const:4:8"]]
+ 005cff8c ["CALL", null, ["callee:00c57fe0:8"]]
- 005cff28 ["INT_ADD", "register:40f0:8", ["const:5cff28:8", "const:4:8"]]
- 005cff28 ["CALL", null, ["callee:00c57fc0:8"]]
+ 005cff68 ["INT_ADD", "register:40f0:8", ["const:5cff68:8", "const:4:8"]]
+ 005cff68 ["CALL", null, ["callee:00c57fc0:8"]]
- 005cff34 ["INT_ADD", "register:40f0:8", ["const:5cff34:8", "const:4:8"]]
- 005cff34 ["CALL", null, ["callee:00c5a880:8"]]
+ 005cff74 ["INT_ADD", "register:40f0:8", ["const:5cff74:8", "const:4:8"]]
+ 005cff74 ["CALL", null, ["callee:00c5a880:8"]]
~~~


<a id="compare-f6bb6dbc083df43463272976f4e16c3d"></a>

### [`005d0370`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005d0/005d0370.md) → [`005d03b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005d0/005d03b0.md) FUN_005d03b0

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`005cffec`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005cf/005cffec.md) · 呼出先 1件 [`0043b778`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043b778.md)
- 新版 呼出元 1件 [`005d002c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005d0/005d002c.md) · 呼出先 1件 [`0043b7b8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b7b8.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 80.00% / 新版 80.00%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "005d03bc",
      "incomplete_value": false,
      "site": "005d03c0",
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
      "definition_site": "005d037c",
      "incomplete_value": false,
      "site": "005d0380",
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
      "005d03bc",
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
      "005d03bc",
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
- 005d0380 ["INT_ADD", "register:40f0:8", ["const:5d0380:8", "const:4:8"]]
- 005d0380 ["CALL", null, ["callee:0043b7b8:8"]]
+ 005d03c0 ["INT_ADD", "register:40f0:8", ["const:5d03c0:8", "const:4:8"]]
+ 005d03c0 ["CALL", null, ["callee:0043b7b8:8"]]
- 005d037c ["COPY", "tmp:0:8", ["const:f4c:8"]]
- 005d037c ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 005d037c ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 005d037c ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 005d03bc ["COPY", "tmp:0:8", ["const:f8c:8"]]
+ 005d03bc ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 005d03bc ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 005d03bc ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
~~~


<a id="compare-06968ad715d3c891dfc6f153fbcbebfe"></a>

### [`005d063c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005d0/005d063c.md) → [`005d067c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005d0/005d067c.md) FUN_005d067c

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 3件 [`005cfda0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005cf/005cfda0.md) [`005d0510`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005d0/005d0510.md) [`005d8278`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005d8/005d8278.md) · 呼出先 1件 [`0043b778`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043b778.md)
- 新版 呼出元 3件 [`005cfde0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005cf/005cfde0.md) [`005d0550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005d0/005d0550.md) [`005d82b8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005d8/005d82b8.md) · 呼出先 1件 [`0043b7b8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b7b8.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 80.00% / 新版 80.00%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "005d0688",
      "incomplete_value": false,
      "site": "005d068c",
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
      "definition_site": "005d0648",
      "incomplete_value": false,
      "site": "005d064c",
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
      "005d0688",
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
      "005d0688",
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
- 005d064c ["INT_ADD", "register:40f0:8", ["const:5d064c:8", "const:4:8"]]
- 005d064c ["CALL", null, ["callee:0043b7b8:8"]]
+ 005d068c ["INT_ADD", "register:40f0:8", ["const:5d068c:8", "const:4:8"]]
+ 005d068c ["CALL", null, ["callee:0043b7b8:8"]]
- 005d0648 ["COPY", "tmp:0:8", ["const:f4c:8"]]
- 005d0648 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 005d0648 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 005d0648 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 005d0688 ["COPY", "tmp:0:8", ["const:f8c:8"]]
+ 005d0688 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 005d0688 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 005d0688 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
~~~


<a id="compare-2c3e82a53d4f7e15ec66673fb1541a98"></a>

### [`005d07a4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005d0/005d07a4.md) → [`005d07e4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005d0/005d07e4.md) FUN_005d07e4

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`005ce964`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005ce/005ce964.md) · 呼出先 4件 [`00c37288`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c37/00c37288.md) [`00c57ef0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ef0.md) [`00c57f10`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57f10.md) [`00c5a7b0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5a7b0.md)
- 新版 呼出元 1件 [`005ce9a4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005ce/005ce9a4.md) · 呼出先 4件 [`00c37324`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c37/00c37324.md) [`00c57fc0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fc0.md) [`00c57fe0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fe0.md) [`00c5a880`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5a880.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 85.71% / 新版 85.71%

優先判定に残った影響 `call_argument_candidate` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "005d0810",
      "incomplete_value": true,
      "site": "005d0818",
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
                "const:480:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "005d07d0",
      "incomplete_value": true,
      "site": "005d07d8",
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
                "const:3b0:8"
              ]
            ]
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
      "definition_site": "005d0814",
      "incomplete_value": true,
      "site": "005d0818",
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
                "const:488:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "005d07d4",
      "incomplete_value": true,
      "site": "005d07d8",
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
                "const:3b8:8"
              ]
            ]
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
      "005d0810",
      "READ",
      [
        "storage",
        "00c9b3b0",
        null,
        "pointer"
      ]
    ],
    [
      "005d0810",
      "PARAM",
      [
        "storage",
        "00c965b8",
        "std::__ndk1::regex_error::typeinfo",
        "pointer __((offset(0x10)))"
      ]
    ],
    [
      "005d0814",
      "READ",
      [
        "storage",
        "00c9b3b8",
        null,
        "pointer"
      ]
    ]
  ],
  "added": [
    [
      "005d0810",
      "READ",
      [
        "storage",
        "00c9b480",
        null,
        "pointer"
      ]
    ],
    [
      "005d0810",
      "PARAM",
      [
        "storage",
        "00c96688",
        "std::__ndk1::regex_error::typeinfo",
        "pointer __((offset(0x10)))"
      ]
    ],
    [
      "005d0814",
      "READ",
      [
        "storage",
        "00c9b488",
        null,
        "pointer"
      ]
    ]
  ]
}
~~~


~~~diff
- 005d07d8 ["INT_ADD", "register:40f0:8", ["const:5d07d8:8", "const:4:8"]]
- 005d07d8 ["CALL", null, ["callee:00c57fe0:8"]]
+ 005d0818 ["INT_ADD", "register:40f0:8", ["const:5d0818:8", "const:4:8"]]
+ 005d0818 ["CALL", null, ["callee:00c57fe0:8"]]
- 005d07b4 ["INT_ADD", "register:40f0:8", ["const:5d07b4:8", "const:4:8"]]
- 005d07b4 ["CALL", null, ["callee:00c57fc0:8"]]
+ 005d07f4 ["INT_ADD", "register:40f0:8", ["const:5d07f4:8", "const:4:8"]]
+ 005d07f4 ["CALL", null, ["callee:00c57fc0:8"]]
- 005d07c0 ["INT_ADD", "register:40f0:8", ["const:5d07c0:8", "const:4:8"]]
- 005d07c0 ["CALL", null, ["callee:00c5a880:8"]]
+ 005d0800 ["INT_ADD", "register:40f0:8", ["const:5d0800:8", "const:4:8"]]
+ 005d0800 ["CALL", null, ["callee:00c5a880:8"]]
~~~


<a id="compare-92aaa7c97a768d6f2896674df706e2e3"></a>

### [`005d08a0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005d0/005d08a0.md) → [`005d08e0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005d0/005d08e0.md) FUN_005d08e0

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 4件 [`005ce964`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005ce/005ce964.md) [`005d0bb8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005d0/005d0bb8.md) [`005d347c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005d3/005d347c.md) [`005d35a0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005d3/005d35a0.md) · 呼出先 4件 [`00c37288`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c37/00c37288.md) [`00c57ef0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ef0.md) [`00c57f10`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57f10.md) [`00c5a7b0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5a7b0.md)
- 新版 呼出元 4件 [`005ce9a4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005ce/005ce9a4.md) [`005d0bf8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005d0/005d0bf8.md) [`005d34bc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005d3/005d34bc.md) [`005d35e0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005d3/005d35e0.md) · 呼出先 4件 [`00c37324`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c37/00c37324.md) [`00c57fc0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fc0.md) [`00c57fe0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fe0.md) [`00c5a880`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5a880.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 85.71% / 新版 85.71%

優先判定に残った影響 `call_argument_candidate` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "005d090c",
      "incomplete_value": true,
      "site": "005d0914",
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
                "const:480:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "005d08cc",
      "incomplete_value": true,
      "site": "005d08d4",
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
                "const:3b0:8"
              ]
            ]
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
      "definition_site": "005d0910",
      "incomplete_value": true,
      "site": "005d0914",
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
                "const:488:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "005d08d0",
      "incomplete_value": true,
      "site": "005d08d4",
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
                "const:3b8:8"
              ]
            ]
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
      "005d090c",
      "READ",
      [
        "storage",
        "00c9b3b0",
        null,
        "pointer"
      ]
    ],
    [
      "005d090c",
      "PARAM",
      [
        "storage",
        "00c965b8",
        "std::__ndk1::regex_error::typeinfo",
        "pointer __((offset(0x10)))"
      ]
    ],
    [
      "005d0910",
      "READ",
      [
        "storage",
        "00c9b3b8",
        null,
        "pointer"
      ]
    ]
  ],
  "added": [
    [
      "005d090c",
      "READ",
      [
        "storage",
        "00c9b480",
        null,
        "pointer"
      ]
    ],
    [
      "005d090c",
      "PARAM",
      [
        "storage",
        "00c96688",
        "std::__ndk1::regex_error::typeinfo",
        "pointer __((offset(0x10)))"
      ]
    ],
    [
      "005d0910",
      "READ",
      [
        "storage",
        "00c9b488",
        null,
        "pointer"
      ]
    ]
  ]
}
~~~


~~~diff
- 005d08d4 ["INT_ADD", "register:40f0:8", ["const:5d08d4:8", "const:4:8"]]
- 005d08d4 ["CALL", null, ["callee:00c57fe0:8"]]
+ 005d0914 ["INT_ADD", "register:40f0:8", ["const:5d0914:8", "const:4:8"]]
+ 005d0914 ["CALL", null, ["callee:00c57fe0:8"]]
- 005d08b0 ["INT_ADD", "register:40f0:8", ["const:5d08b0:8", "const:4:8"]]
- 005d08b0 ["CALL", null, ["callee:00c57fc0:8"]]
+ 005d08f0 ["INT_ADD", "register:40f0:8", ["const:5d08f0:8", "const:4:8"]]
+ 005d08f0 ["CALL", null, ["callee:00c57fc0:8"]]
- 005d08bc ["INT_ADD", "register:40f0:8", ["const:5d08bc:8", "const:4:8"]]
- 005d08bc ["CALL", null, ["callee:00c5a880:8"]]
+ 005d08fc ["INT_ADD", "register:40f0:8", ["const:5d08fc:8", "const:4:8"]]
+ 005d08fc ["CALL", null, ["callee:00c5a880:8"]]
~~~


<a id="compare-32fe5d4df330349d1782bb606be0bf72"></a>

### [`005d0eb8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005d0/005d0eb8.md) → [`005d0ef8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005d0/005d0ef8.md) FUN_005d0ef8

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 7件 [`005d07f0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005d0/005d07f0.md) [`005d08ec`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005d0/005d08ec.md) [`005d0bb8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005d0/005d0bb8.md) [`005d35a0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005d3/005d35a0.md) [`005d5648`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005d5/005d5648.md) · 呼出先 2件 [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md) [`00c5a7d0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5a7d0.md)
- 新版 呼出元 7件 [`005d0830`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005d0/005d0830.md) [`005d092c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005d0/005d092c.md) [`005d0bf8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005d0/005d0bf8.md) [`005d35e0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005d3/005d35e0.md) [`005d5688`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005d5/005d5688.md) · 呼出先 2件 [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c5a8a0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5a8a0.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 93.75% / 新版 93.75%

優先判定に残った影響 `store_value` 1件

アドレスに依存する影響 `store_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "005d0f3c",
      "incomplete_value": true,
      "site": "005d0f3c",
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
      "definition_site": "005d0efc",
      "incomplete_value": true,
      "site": "005d0efc",
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
    "ordinal": 6,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "005d0fc0",
      "incomplete_value": true,
      "site": "005d0fc0",
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
      "definition_site": "005d0f80",
      "incomplete_value": true,
      "site": "005d0f80",
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
      "005d0f2c",
      "READ",
      [
        "storage",
        "00c9b400",
        null,
        "pointer"
      ]
    ],
    [
      "005d0f3c",
      "DATA",
      [
        "storage",
        "00c70de0",
        null,
        "pointer"
      ]
    ],
    [
      "005d0f5c",
      "READ",
      [
        "storage",
        "00c9b408",
        null,
        "pointer"
      ]
    ]
  ],
  "added": [
    [
      "005d0f2c",
      "READ",
      [
        "storage",
        "00c9b4d0",
        null,
        "pointer"
      ]
    ],
    [
      "005d0f3c",
      "DATA",
      [
        "storage",
        "00c70eb0",
        null,
        "pointer"
      ]
    ],
    [
      "005d0f5c",
      "READ",
      [
        "storage",
        "00c9b4d8",
        null,
        "pointer"
      ]
    ]
  ]
}
~~~


~~~diff
- 005d0ee0 ["INT_ADD", "register:40f0:8", ["const:5d0ee0:8", "const:4:8"]]
- 005d0ee0 ["CALL", null, ["callee:00c57f60:8"]]
+ 005d0f20 ["INT_ADD", "register:40f0:8", ["const:5d0f20:8", "const:4:8"]]
+ 005d0f20 ["CALL", null, ["callee:00c57f60:8"]]
- 005d0eec ["INT_ADD", "tmp:0:8", ["register:4048:8", "const:400:8"]]
- 005d0eec ["LOAD", "register:4048:8", ["const:1b1:8", "tmp:0:8"]]
+ 005d0f2c ["INT_ADD", "tmp:0:8", ["register:4048:8", "const:4d0:8"]]
+ 005d0f2c ["LOAD", "register:4048:8", ["const:1b1:8", "tmp:0:8"]]
- 005d0f0c ["INT_ADD", "register:40f0:8", ["const:5d0f0c:8", "const:4:8"]]
- 005d0f0c ["CALL", null, ["callee:00c57f60:8"]]
+ 005d0f4c ["INT_ADD", "register:40f0:8", ["const:5d0f4c:8", "const:4:8"]]
+ 005d0f4c ["CALL", null, ["callee:00c57f60:8"]]
~~~


<a id="compare-ce7d858ce66354c0c8f091ff03478012"></a>

### [`005d0ff8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005d0/005d0ff8.md) → [`005d1038`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005d1/005d1038.md) FUN_005d1038

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 4件 [`005d08ec`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005d0/005d08ec.md) [`005d16e4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005d1/005d16e4.md) [`005d51fc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005d5/005d51fc.md) [`005d580c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005d5/005d580c.md) · 呼出先 4件 [`00c37288`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c37/00c37288.md) [`00c57ef0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ef0.md) [`00c57f10`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57f10.md) [`00c5a7b0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5a7b0.md)
- 新版 呼出元 4件 [`005d092c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005d0/005d092c.md) [`005d1724`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005d1/005d1724.md) [`005d523c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005d5/005d523c.md) [`005d584c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005d5/005d584c.md) · 呼出先 4件 [`00c37324`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c37/00c37324.md) [`00c57fc0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fc0.md) [`00c57fe0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fe0.md) [`00c5a880`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5a880.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 85.71% / 新版 85.71%

優先判定に残った影響 `call_argument_candidate` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "005d1064",
      "incomplete_value": true,
      "site": "005d106c",
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
                "const:480:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "005d1024",
      "incomplete_value": true,
      "site": "005d102c",
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
                "const:3b0:8"
              ]
            ]
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
      "definition_site": "005d1068",
      "incomplete_value": true,
      "site": "005d106c",
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
                "const:488:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "005d1028",
      "incomplete_value": true,
      "site": "005d102c",
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
                "const:3b8:8"
              ]
            ]
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
      "005d1064",
      "READ",
      [
        "storage",
        "00c9b3b0",
        null,
        "pointer"
      ]
    ],
    [
      "005d1064",
      "PARAM",
      [
        "storage",
        "00c965b8",
        "std::__ndk1::regex_error::typeinfo",
        "pointer __((offset(0x10)))"
      ]
    ],
    [
      "005d1068",
      "READ",
      [
        "storage",
        "00c9b3b8",
        null,
        "pointer"
      ]
    ]
  ],
  "added": [
    [
      "005d1064",
      "READ",
      [
        "storage",
        "00c9b480",
        null,
        "pointer"
      ]
    ],
    [
      "005d1064",
      "PARAM",
      [
        "storage",
        "00c96688",
        "std::__ndk1::regex_error::typeinfo",
        "pointer __((offset(0x10)))"
      ]
    ],
    [
      "005d1068",
      "READ",
      [
        "storage",
        "00c9b488",
        null,
        "pointer"
      ]
    ]
  ]
}
~~~


~~~diff
- 005d102c ["INT_ADD", "register:40f0:8", ["const:5d102c:8", "const:4:8"]]
- 005d102c ["CALL", null, ["callee:00c57fe0:8"]]
+ 005d106c ["INT_ADD", "register:40f0:8", ["const:5d106c:8", "const:4:8"]]
+ 005d106c ["CALL", null, ["callee:00c57fe0:8"]]
- 005d1008 ["INT_ADD", "register:40f0:8", ["const:5d1008:8", "const:4:8"]]
- 005d1008 ["CALL", null, ["callee:00c57fc0:8"]]
+ 005d1048 ["INT_ADD", "register:40f0:8", ["const:5d1048:8", "const:4:8"]]
+ 005d1048 ["CALL", null, ["callee:00c57fc0:8"]]
- 005d1014 ["INT_ADD", "register:40f0:8", ["const:5d1014:8", "const:4:8"]]
- 005d1014 ["CALL", null, ["callee:00c5a880:8"]]
+ 005d1054 ["INT_ADD", "register:40f0:8", ["const:5d1054:8", "const:4:8"]]
+ 005d1054 ["CALL", null, ["callee:00c5a880:8"]]
~~~


<a id="compare-38f143c94657d3a19b4c8620e9290d62"></a>

### [`005d110c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005d1/005d110c.md) → [`005d114c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005d1/005d114c.md) FUN_005d114c

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c58290`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58290.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c58360`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58360.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 86.96% / 新版 86.96%

優先判定に残った影響 `store_value` 1件

アドレスに依存する影響 `store_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "005d1168",
      "incomplete_value": true,
      "site": "005d1168",
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
      "definition_site": "005d1128",
      "incomplete_value": true,
      "site": "005d1128",
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
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "005d117c",
      "incomplete_value": true,
      "site": "005d1180",
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
      "definition_site": "005d113c",
      "incomplete_value": true,
      "site": "005d1140",
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
      "005d1160",
      "READ",
      [
        "storage",
        "00c9b408",
        null,
        "pointer"
      ]
    ],
    [
      "005d1168",
      "DATA",
      [
        "storage",
        "00c70d50",
        null,
        "pointer"
      ]
    ],
    [
      "005d1174",
      "READ",
      [
        "storage",
        "00c9b3a8",
        null,
        "pointer"
      ]
    ]
  ],
  "added": [
    [
      "005d1160",
      "READ",
      [
        "storage",
        "00c9b4d8",
        null,
        "pointer"
      ]
    ],
    [
      "005d1168",
      "DATA",
      [
        "storage",
        "00c70e20",
        null,
        "pointer"
      ]
    ],
    [
      "005d1174",
      "READ",
      [
        "storage",
        "00c9b478",
        null,
        "pointer"
      ]
    ]
  ]
}
~~~


~~~diff
- 005d1120 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:408:8"]]
- 005d1120 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
+ 005d1160 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:4d8:8"]]
+ 005d1160 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
- 005d112c ["INT_ADD", "register:40f0:8", ["const:5d112c:8", "const:4:8"]]
- 005d112c ["CALL", null, ["callee:00c58360:8"]]
+ 005d116c ["INT_ADD", "register:40f0:8", ["const:5d116c:8", "const:4:8"]]
+ 005d116c ["CALL", null, ["callee:00c58360:8"]]
- 005d1134 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:3a8:8"]]
- 005d1134 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
+ 005d1174 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:478:8"]]
+ 005d1174 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-7aa14c674cd9d00e4519f42e1222017f"></a>

### [`005d1168`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005d1/005d1168.md) → [`005d11a8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005d1/005d11a8.md) FUN_005d11a8

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c58290`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58290.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c58360`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58360.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 86.36% / 新版 86.36%

優先判定に残った影響 `store_value` 1件

アドレスに依存する影響 `store_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "005d11c4",
      "incomplete_value": true,
      "site": "005d11c4",
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
      "definition_site": "005d1184",
      "incomplete_value": true,
      "site": "005d1184",
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
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "005d11d8",
      "incomplete_value": true,
      "site": "005d11dc",
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
      "definition_site": "005d1198",
      "incomplete_value": true,
      "site": "005d119c",
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
      "005d11bc",
      "READ",
      [
        "storage",
        "00c9b408",
        null,
        "pointer"
      ]
    ],
    [
      "005d11c4",
      "DATA",
      [
        "storage",
        "00c70d50",
        null,
        "pointer"
      ]
    ],
    [
      "005d11d0",
      "READ",
      [
        "storage",
        "00c9b3a8",
        null,
        "pointer"
      ]
    ]
  ],
  "added": [
    [
      "005d11bc",
      "READ",
      [
        "storage",
        "00c9b4d8",
        null,
        "pointer"
      ]
    ],
    [
      "005d11c4",
      "DATA",
      [
        "storage",
        "00c70e20",
        null,
        "pointer"
      ]
    ],
    [
      "005d11d0",
      "READ",
      [
        "storage",
        "00c9b478",
        null,
        "pointer"
      ]
    ]
  ]
}
~~~


~~~diff
- 005d117c ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:408:8"]]
- 005d117c ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
+ 005d11bc ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:4d8:8"]]
+ 005d11bc ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
- 005d1188 ["INT_ADD", "register:40f0:8", ["const:5d1188:8", "const:4:8"]]
- 005d1188 ["CALL", null, ["callee:00c58360:8"]]
+ 005d11c8 ["INT_ADD", "register:40f0:8", ["const:5d11c8:8", "const:4:8"]]
+ 005d11c8 ["CALL", null, ["callee:00c58360:8"]]
- 005d1190 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:3a8:8"]]
- 005d1190 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
+ 005d11d0 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:478:8"]]
+ 005d11d0 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-01651b23d8ee16535741acec39a751d6"></a>

### [`005d1238`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005d1/005d1238.md) → [`005d1278`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005d1/005d1278.md) FUN_005d1278

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c58290`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58290.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c58360`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58360.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 86.96% / 新版 86.96%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "005d1294",
      "incomplete_value": true,
      "site": "005d1294",
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
      "definition_site": "005d1254",
      "incomplete_value": true,
      "site": "005d1254",
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
      "005d128c",
      "READ",
      [
        "storage",
        "00c9b410",
        null,
        "pointer"
      ]
    ],
    [
      "005d1294",
      "DATA",
      [
        "storage",
        "00c70d98",
        null,
        "pointer"
      ]
    ],
    [
      "005d12a0",
      "READ",
      [
        "storage",
        "00c9b3a8",
        null,
        "pointer"
      ]
    ]
  ],
  "added": [
    [
      "005d128c",
      "READ",
      [
        "storage",
        "00c9b4e0",
        null,
        "pointer"
      ]
    ],
    [
      "005d1294",
      "DATA",
      [
        "storage",
        "00c70e68",
        null,
        "pointer"
      ]
    ],
    [
      "005d12a0",
      "READ",
      [
        "storage",
        "00c9b478",
        null,
        "pointer"
      ]
    ]
  ]
}
~~~


~~~diff
- 005d124c ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:410:8"]]
- 005d124c ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
+ 005d128c ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:4e0:8"]]
+ 005d128c ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
- 005d1258 ["INT_ADD", "register:40f0:8", ["const:5d1258:8", "const:4:8"]]
- 005d1258 ["CALL", null, ["callee:00c58360:8"]]
+ 005d1298 ["INT_ADD", "register:40f0:8", ["const:5d1298:8", "const:4:8"]]
+ 005d1298 ["CALL", null, ["callee:00c58360:8"]]
- 005d1260 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:3a8:8"]]
- 005d1260 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
+ 005d12a0 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:478:8"]]
+ 005d12a0 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-c30c25909ac4a28c92d9b1fe4e657402"></a>

### [`005d1294`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005d1/005d1294.md) → [`005d12d4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005d1/005d12d4.md) FUN_005d12d4

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c58290`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58290.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c58360`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58360.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 86.36% / 新版 86.36%

優先判定に残った影響 `store_value` 1件

アドレスに依存する影響 `store_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "005d12f0",
      "incomplete_value": true,
      "site": "005d12f0",
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
      "definition_site": "005d12b0",
      "incomplete_value": true,
      "site": "005d12b0",
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
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "005d1304",
      "incomplete_value": true,
      "site": "005d1308",
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
      "definition_site": "005d12c4",
      "incomplete_value": true,
      "site": "005d12c8",
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
      "005d12e8",
      "READ",
      [
        "storage",
        "00c9b410",
        null,
        "pointer"
      ]
    ],
    [
      "005d12f0",
      "DATA",
      [
        "storage",
        "00c70d98",
        null,
        "pointer"
      ]
    ],
    [
      "005d12fc",
      "READ",
      [
        "storage",
        "00c9b3a8",
        null,
        "pointer"
      ]
    ]
  ],
  "added": [
    [
      "005d12e8",
      "READ",
      [
        "storage",
        "00c9b4e0",
        null,
        "pointer"
      ]
    ],
    [
      "005d12f0",
      "DATA",
      [
        "storage",
        "00c70e68",
        null,
        "pointer"
      ]
    ],
    [
      "005d12fc",
      "READ",
      [
        "storage",
        "00c9b478",
        null,
        "pointer"
      ]
    ]
  ]
}
~~~


~~~diff
- 005d12a8 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:410:8"]]
- 005d12a8 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
+ 005d12e8 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:4e0:8"]]
+ 005d12e8 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
- 005d12b4 ["INT_ADD", "register:40f0:8", ["const:5d12b4:8", "const:4:8"]]
- 005d12b4 ["CALL", null, ["callee:00c58360:8"]]
+ 005d12f4 ["INT_ADD", "register:40f0:8", ["const:5d12f4:8", "const:4:8"]]
+ 005d12f4 ["CALL", null, ["callee:00c58360:8"]]
- 005d12bc ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:3a8:8"]]
- 005d12bc ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
+ 005d12fc ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:478:8"]]
+ 005d12fc ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-662e8bdb599300d98daed838e1dac076"></a>

### [`005d13c4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005d1/005d13c4.md) → [`005d1404`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005d1/005d1404.md) FUN_005d1404

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c58290`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58290.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c58360`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58360.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 86.96% / 新版 86.96%

優先判定に残った影響 `store_value` 1件

アドレスに依存する影響 `store_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "005d1420",
      "incomplete_value": true,
      "site": "005d1420",
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
      "definition_site": "005d13e0",
      "incomplete_value": true,
      "site": "005d13e0",
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
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "005d1434",
      "incomplete_value": true,
      "site": "005d1438",
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
      "definition_site": "005d13f4",
      "incomplete_value": true,
      "site": "005d13f8",
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
      "005d1418",
      "READ",
      [
        "storage",
        "00c9b420",
        null,
        "pointer"
      ]
    ],
    [
      "005d1420",
      "DATA",
      [
        "storage",
        "00c70e28",
        null,
        "pointer"
      ]
    ],
    [
      "005d142c",
      "READ",
      [
        "storage",
        "00c9b3a8",
        null,
        "pointer"
      ]
    ]
  ],
  "added": [
    [
      "005d1418",
      "READ",
      [
        "storage",
        "00c9b4f0",
        null,
        "pointer"
      ]
    ],
    [
      "005d1420",
      "DATA",
      [
        "storage",
        "00c70ef8",
        null,
        "pointer"
      ]
    ],
    [
      "005d142c",
      "READ",
      [
        "storage",
        "00c9b478",
        null,
        "pointer"
      ]
    ]
  ]
}
~~~


~~~diff
- 005d13d8 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:420:8"]]
- 005d13d8 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
+ 005d1418 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:4f0:8"]]
+ 005d1418 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
- 005d13e4 ["INT_ADD", "register:40f0:8", ["const:5d13e4:8", "const:4:8"]]
- 005d13e4 ["CALL", null, ["callee:00c58360:8"]]
+ 005d1424 ["INT_ADD", "register:40f0:8", ["const:5d1424:8", "const:4:8"]]
+ 005d1424 ["CALL", null, ["callee:00c58360:8"]]
- 005d13ec ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:3a8:8"]]
- 005d13ec ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
+ 005d142c ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:478:8"]]
+ 005d142c ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-ab8c0f305a516816d8433ce556fdcb39"></a>

### [`005d1420`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005d1/005d1420.md) → [`005d1460`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005d1/005d1460.md) FUN_005d1460

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c58290`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58290.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c58360`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58360.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 86.36% / 新版 86.36%

優先判定に残った影響 `store_value` 1件

アドレスに依存する影響 `store_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "005d147c",
      "incomplete_value": true,
      "site": "005d147c",
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
      "definition_site": "005d143c",
      "incomplete_value": true,
      "site": "005d143c",
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
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "005d1490",
      "incomplete_value": true,
      "site": "005d1494",
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
      "definition_site": "005d1450",
      "incomplete_value": true,
      "site": "005d1454",
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
      "005d1474",
      "READ",
      [
        "storage",
        "00c9b420",
        null,
        "pointer"
      ]
    ],
    [
      "005d147c",
      "DATA",
      [
        "storage",
        "00c70e28",
        null,
        "pointer"
      ]
    ],
    [
      "005d1488",
      "READ",
      [
        "storage",
        "00c9b3a8",
        null,
        "pointer"
      ]
    ]
  ],
  "added": [
    [
      "005d1474",
      "READ",
      [
        "storage",
        "00c9b4f0",
        null,
        "pointer"
      ]
    ],
    [
      "005d147c",
      "DATA",
      [
        "storage",
        "00c70ef8",
        null,
        "pointer"
      ]
    ],
    [
      "005d1488",
      "READ",
      [
        "storage",
        "00c9b478",
        null,
        "pointer"
      ]
    ]
  ]
}
~~~


~~~diff
- 005d1434 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:420:8"]]
- 005d1434 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
+ 005d1474 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:4f0:8"]]
+ 005d1474 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
- 005d1440 ["INT_ADD", "register:40f0:8", ["const:5d1440:8", "const:4:8"]]
- 005d1440 ["CALL", null, ["callee:00c58360:8"]]
+ 005d1480 ["INT_ADD", "register:40f0:8", ["const:5d1480:8", "const:4:8"]]
+ 005d1480 ["CALL", null, ["callee:00c58360:8"]]
- 005d1448 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:3a8:8"]]
- 005d1448 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
+ 005d1488 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:478:8"]]
+ 005d1488 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-26857e452978f943436113010e908afc"></a>

### [`005d1560`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005d1/005d1560.md) → [`005d15a0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005d1/005d15a0.md) FUN_005d15a0

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c58290`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58290.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c58360`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58360.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 86.96% / 新版 86.96%

優先判定に残った影響 `store_value` 1件

アドレスに依存する影響 `store_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "005d15bc",
      "incomplete_value": true,
      "site": "005d15bc",
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
      "definition_site": "005d157c",
      "incomplete_value": true,
      "site": "005d157c",
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
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "005d15d0",
      "incomplete_value": true,
      "site": "005d15d4",
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
      "definition_site": "005d1590",
      "incomplete_value": true,
      "site": "005d1594",
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
      "005d15b4",
      "READ",
      [
        "storage",
        "00c9b428",
        null,
        "pointer"
      ]
    ],
    [
      "005d15bc",
      "DATA",
      [
        "storage",
        "00c70e70",
        null,
        "pointer"
      ]
    ],
    [
      "005d15c8",
      "READ",
      [
        "storage",
        "00c9b3a8",
        null,
        "pointer"
      ]
    ]
  ],
  "added": [
    [
      "005d15b4",
      "READ",
      [
        "storage",
        "00c9b4f8",
        null,
        "pointer"
      ]
    ],
    [
      "005d15bc",
      "DATA",
      [
        "storage",
        "00c70f40",
        null,
        "pointer"
      ]
    ],
    [
      "005d15c8",
      "READ",
      [
        "storage",
        "00c9b478",
        null,
        "pointer"
      ]
    ]
  ]
}
~~~


~~~diff
- 005d1574 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:428:8"]]
- 005d1574 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
+ 005d15b4 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:4f8:8"]]
+ 005d15b4 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
- 005d1580 ["INT_ADD", "register:40f0:8", ["const:5d1580:8", "const:4:8"]]
- 005d1580 ["CALL", null, ["callee:00c58360:8"]]
+ 005d15c0 ["INT_ADD", "register:40f0:8", ["const:5d15c0:8", "const:4:8"]]
+ 005d15c0 ["CALL", null, ["callee:00c58360:8"]]
- 005d1588 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:3a8:8"]]
- 005d1588 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
+ 005d15c8 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:478:8"]]
+ 005d15c8 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-0fd0777f86209d6aa8c5e5f03ac973db"></a>

### [`005d15bc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005d1/005d15bc.md) → [`005d15fc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005d1/005d15fc.md) FUN_005d15fc

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c58290`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58290.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c58360`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58360.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 86.36% / 新版 86.36%

優先判定に残った影響 `store_value` 1件

アドレスに依存する影響 `store_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "005d1618",
      "incomplete_value": true,
      "site": "005d1618",
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
      "definition_site": "005d15d8",
      "incomplete_value": true,
      "site": "005d15d8",
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
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "005d162c",
      "incomplete_value": true,
      "site": "005d1630",
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
      "definition_site": "005d15ec",
      "incomplete_value": true,
      "site": "005d15f0",
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
      "005d1610",
      "READ",
      [
        "storage",
        "00c9b428",
        null,
        "pointer"
      ]
    ],
    [
      "005d1618",
      "DATA",
      [
        "storage",
        "00c70e70",
        null,
        "pointer"
      ]
    ],
    [
      "005d1624",
      "READ",
      [
        "storage",
        "00c9b3a8",
        null,
        "pointer"
      ]
    ]
  ],
  "added": [
    [
      "005d1610",
      "READ",
      [
        "storage",
        "00c9b4f8",
        null,
        "pointer"
      ]
    ],
    [
      "005d1618",
      "DATA",
      [
        "storage",
        "00c70f40",
        null,
        "pointer"
      ]
    ],
    [
      "005d1624",
      "READ",
      [
        "storage",
        "00c9b478",
        null,
        "pointer"
      ]
    ]
  ]
}
~~~


~~~diff
- 005d15d0 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:428:8"]]
- 005d15d0 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
+ 005d1610 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:4f8:8"]]
+ 005d1610 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
- 005d15dc ["INT_ADD", "register:40f0:8", ["const:5d15dc:8", "const:4:8"]]
- 005d15dc ["CALL", null, ["callee:00c58360:8"]]
+ 005d161c ["INT_ADD", "register:40f0:8", ["const:5d161c:8", "const:4:8"]]
+ 005d161c ["CALL", null, ["callee:00c58360:8"]]
- 005d15e4 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:3a8:8"]]
- 005d15e4 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
+ 005d1624 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:478:8"]]
+ 005d1624 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-27d7cbf33e6f1917e8846b0b1fbc8214"></a>

### [`005d1900`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005d1/005d1900.md) → [`005d1940`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005d1/005d1940.md) FUN_005d1940

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 2件 [`005d0650`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005d0/005d0650.md) [`005d09b4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005d0/005d09b4.md) · 呼出先 5件 [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md) [`00c58290`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58290.md) [`00c5a7d0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5a7d0.md) [`00c5a7f0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5a7f0.md)
- 新版 呼出元 2件 [`005d0690`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005d0/005d0690.md) [`005d09f4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005d0/005d09f4.md) · 呼出先 5件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md) [`00c58360`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58360.md) [`00c5a8a0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5a8a0.md) [`00c5a8c0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5a8c0.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 96.00% / 新版 96.00%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "005d1988",
      "incomplete_value": true,
      "site": "005d1988",
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
      "definition_site": "005d1948",
      "incomplete_value": true,
      "site": "005d1948",
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
      "005d196c",
      "READ",
      [
        "storage",
        "00c9b430",
        null,
        "pointer"
      ]
    ],
    [
      "005d1988",
      "DATA",
      [
        "storage",
        "00c70f00",
        null,
        "pointer"
      ]
    ]
  ],
  "added": [
    [
      "005d196c",
      "READ",
      [
        "storage",
        "00c9b500",
        null,
        "pointer"
      ]
    ],
    [
      "005d1988",
      "DATA",
      [
        "storage",
        "00c70fd0",
        null,
        "pointer"
      ]
    ]
  ]
}
~~~


~~~diff
- 005d192c ["INT_ADD", "tmp:0:8", ["register:4048:8", "const:430:8"]]
- 005d192c ["LOAD", "register:4048:8", ["const:1b1:8", "tmp:0:8"]]
+ 005d196c ["INT_ADD", "tmp:0:8", ["register:4048:8", "const:500:8"]]
+ 005d196c ["LOAD", "register:4048:8", ["const:1b1:8", "tmp:0:8"]]
- 005d194c ["INT_ADD", "register:40f0:8", ["const:5d194c:8", "const:4:8"]]
- 005d194c ["CALL", null, ["callee:00c5a8a0:8"]]
+ 005d198c ["INT_ADD", "register:40f0:8", ["const:5d198c:8", "const:4:8"]]
+ 005d198c ["CALL", null, ["callee:00c5a8a0:8"]]
- 005d1990 ["INT_ADD", "register:40f0:8", ["const:5d1990:8", "const:4:8"]]
- 005d1990 ["CALL", null, ["callee:00c5a8a0:8"]]
+ 005d19d0 ["INT_ADD", "register:40f0:8", ["const:5d19d0:8", "const:4:8"]]
+ 005d19d0 ["CALL", null, ["callee:00c5a8a0:8"]]
~~~


<a id="compare-b9577e8a685f24bfe6814d29b62c6442"></a>

### [`005d1b48`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005d1/005d1b48.md) → [`005d1b88`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005d1/005d1b88.md) FUN_005d1b88

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`005d1c8c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005d1/005d1c8c.md) · 呼出先 2件 [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c58290`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58290.md)
- 新版 呼出元 1件 [`005d1ccc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005d1/005d1ccc.md) · 呼出先 2件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c58360`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58360.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 96.30% / 新版 96.30%

優先判定に残った影響 `store_value` 1件

アドレスに依存する影響 `store_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "005d1ba8",
      "incomplete_value": true,
      "site": "005d1bac",
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
      "definition_site": "005d1b68",
      "incomplete_value": true,
      "site": "005d1b6c",
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
    "ordinal": 6,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "005d1c98",
      "incomplete_value": true,
      "site": "005d1c9c",
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
      "definition_site": "005d1c58",
      "incomplete_value": true,
      "site": "005d1c5c",
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
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "005d1ba0",
      "READ",
      [
        "storage",
        "00c9b430",
        null,
        "pointer"
      ]
    ],
    [
      "005d1bac",
      "DATA",
      [
        "storage",
        "00c70f00",
        null,
        "pointer"
      ]
    ],
    [
      "005d1c90",
      "READ",
      [
        "storage",
        "00c9b3a8",
        null,
        "pointer"
      ]
    ]
  ],
  "added": [
    [
      "005d1ba0",
      "READ",
      [
        "storage",
        "00c9b500",
        null,
        "pointer"
      ]
    ],
    [
      "005d1bac",
      "DATA",
      [
        "storage",
        "00c70fd0",
        null,
        "pointer"
      ]
    ],
    [
      "005d1c90",
      "READ",
      [
        "storage",
        "00c9b478",
        null,
        "pointer"
      ]
    ]
  ]
}
~~~


~~~diff
- 005d1b60 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:430:8"]]
- 005d1b60 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
+ 005d1ba0 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:500:8"]]
+ 005d1ba0 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
- 005d1ba4 ["INT_ADD", "register:40f0:8", ["const:5d1ba4:8", "const:4:8"]]
- 005d1ba4 ["CALL", null, ["callee:00c57f80:8"]]
+ 005d1be4 ["INT_ADD", "register:40f0:8", ["const:5d1be4:8", "const:4:8"]]
+ 005d1be4 ["CALL", null, ["callee:00c57f80:8"]]
- 005d1bb4 ["INT_ADD", "register:40f0:8", ["const:5d1bb4:8", "const:4:8"]]
- 005d1bb4 ["CALL", null, ["callee:00c57f80:8"]]
+ 005d1bf4 ["INT_ADD", "register:40f0:8", ["const:5d1bf4:8", "const:4:8"]]
+ 005d1bf4 ["CALL", null, ["callee:00c57f80:8"]]
~~~


<a id="compare-ea809d5e797abc5f7e853d87fd811aeb"></a>

### [`005d2bb8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005d2/005d2bb8.md) → [`005d2bf8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005d2/005d2bf8.md) FUN_005d2bf8

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 4件 [`005d0650`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005d0/005d0650.md) [`005d2c04`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005d2/005d2c04.md) [`005d30d4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005d3/005d30d4.md) [`005d3360`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005d3/005d3360.md) · 呼出先 4件 [`00c37288`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c37/00c37288.md) [`00c57ef0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ef0.md) [`00c57f10`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57f10.md) [`00c5a7b0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5a7b0.md)
- 新版 呼出元 4件 [`005d0690`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005d0/005d0690.md) [`005d2c44`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005d2/005d2c44.md) [`005d3114`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005d3/005d3114.md) [`005d33a0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005d3/005d33a0.md) · 呼出先 4件 [`00c37324`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c37/00c37324.md) [`00c57fc0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fc0.md) [`00c57fe0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fe0.md) [`00c5a880`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5a880.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 85.71% / 新版 85.71%

優先判定に残った影響 `call_argument_candidate` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "005d2c24",
      "incomplete_value": true,
      "site": "005d2c2c",
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
                "const:480:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "005d2be4",
      "incomplete_value": true,
      "site": "005d2bec",
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
                "const:3b0:8"
              ]
            ]
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
      "definition_site": "005d2c28",
      "incomplete_value": true,
      "site": "005d2c2c",
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
                "const:488:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "005d2be8",
      "incomplete_value": true,
      "site": "005d2bec",
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
                "const:3b8:8"
              ]
            ]
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
      "005d2c24",
      "READ",
      [
        "storage",
        "00c9b3b0",
        null,
        "pointer"
      ]
    ],
    [
      "005d2c24",
      "PARAM",
      [
        "storage",
        "00c965b8",
        "std::__ndk1::regex_error::typeinfo",
        "pointer __((offset(0x10)))"
      ]
    ],
    [
      "005d2c28",
      "READ",
      [
        "storage",
        "00c9b3b8",
        null,
        "pointer"
      ]
    ]
  ],
  "added": [
    [
      "005d2c24",
      "READ",
      [
        "storage",
        "00c9b480",
        null,
        "pointer"
      ]
    ],
    [
      "005d2c24",
      "PARAM",
      [
        "storage",
        "00c96688",
        "std::__ndk1::regex_error::typeinfo",
        "pointer __((offset(0x10)))"
      ]
    ],
    [
      "005d2c28",
      "READ",
      [
        "storage",
        "00c9b488",
        null,
        "pointer"
      ]
    ]
  ]
}
~~~


~~~diff
- 005d2bec ["INT_ADD", "register:40f0:8", ["const:5d2bec:8", "const:4:8"]]
- 005d2bec ["CALL", null, ["callee:00c57fe0:8"]]
+ 005d2c2c ["INT_ADD", "register:40f0:8", ["const:5d2c2c:8", "const:4:8"]]
+ 005d2c2c ["CALL", null, ["callee:00c57fe0:8"]]
- 005d2bc8 ["INT_ADD", "register:40f0:8", ["const:5d2bc8:8", "const:4:8"]]
- 005d2bc8 ["CALL", null, ["callee:00c57fc0:8"]]
+ 005d2c08 ["INT_ADD", "register:40f0:8", ["const:5d2c08:8", "const:4:8"]]
+ 005d2c08 ["CALL", null, ["callee:00c57fc0:8"]]
- 005d2bd4 ["INT_ADD", "register:40f0:8", ["const:5d2bd4:8", "const:4:8"]]
- 005d2bd4 ["CALL", null, ["callee:00c5a880:8"]]
+ 005d2c14 ["INT_ADD", "register:40f0:8", ["const:5d2c14:8", "const:4:8"]]
+ 005d2c14 ["CALL", null, ["callee:00c5a880:8"]]
~~~


<a id="compare-b3e65e768a73ea57e0d33e1234b5770e"></a>

### [`005d3e64`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005d3/005d3e64.md) → [`005d3ea4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005d3/005d3ea4.md) FUN_005d3ea4

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 2件 [`005d30d4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005d3/005d30d4.md) [`005d3360`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005d3/005d3360.md) · 呼出先 4件 [`00c37288`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c37/00c37288.md) [`00c57ef0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ef0.md) [`00c57f10`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57f10.md) [`00c5a7b0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5a7b0.md)
- 新版 呼出元 2件 [`005d3114`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005d3/005d3114.md) [`005d33a0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005d3/005d33a0.md) · 呼出先 4件 [`00c37324`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c37/00c37324.md) [`00c57fc0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fc0.md) [`00c57fe0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fe0.md) [`00c5a880`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5a880.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 85.71% / 新版 85.71%

優先判定に残った影響 `call_argument_candidate` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "005d3ed0",
      "incomplete_value": true,
      "site": "005d3ed8",
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
                "const:480:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "005d3e90",
      "incomplete_value": true,
      "site": "005d3e98",
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
                "const:3b0:8"
              ]
            ]
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
      "definition_site": "005d3ed4",
      "incomplete_value": true,
      "site": "005d3ed8",
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
                "const:488:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "005d3e94",
      "incomplete_value": true,
      "site": "005d3e98",
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
                "const:3b8:8"
              ]
            ]
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
      "005d3ed0",
      "READ",
      [
        "storage",
        "00c9b3b0",
        null,
        "pointer"
      ]
    ],
    [
      "005d3ed0",
      "PARAM",
      [
        "storage",
        "00c965b8",
        "std::__ndk1::regex_error::typeinfo",
        "pointer __((offset(0x10)))"
      ]
    ],
    [
      "005d3ed4",
      "READ",
      [
        "storage",
        "00c9b3b8",
        null,
        "pointer"
      ]
    ]
  ],
  "added": [
    [
      "005d3ed0",
      "READ",
      [
        "storage",
        "00c9b480",
        null,
        "pointer"
      ]
    ],
    [
      "005d3ed0",
      "PARAM",
      [
        "storage",
        "00c96688",
        "std::__ndk1::regex_error::typeinfo",
        "pointer __((offset(0x10)))"
      ]
    ],
    [
      "005d3ed4",
      "READ",
      [
        "storage",
        "00c9b488",
        null,
        "pointer"
      ]
    ]
  ]
}
~~~


~~~diff
- 005d3e98 ["INT_ADD", "register:40f0:8", ["const:5d3e98:8", "const:4:8"]]
- 005d3e98 ["CALL", null, ["callee:00c57fe0:8"]]
+ 005d3ed8 ["INT_ADD", "register:40f0:8", ["const:5d3ed8:8", "const:4:8"]]
+ 005d3ed8 ["CALL", null, ["callee:00c57fe0:8"]]
- 005d3e74 ["INT_ADD", "register:40f0:8", ["const:5d3e74:8", "const:4:8"]]
- 005d3e74 ["CALL", null, ["callee:00c57fc0:8"]]
+ 005d3eb4 ["INT_ADD", "register:40f0:8", ["const:5d3eb4:8", "const:4:8"]]
+ 005d3eb4 ["CALL", null, ["callee:00c57fc0:8"]]
- 005d3e80 ["INT_ADD", "register:40f0:8", ["const:5d3e80:8", "const:4:8"]]
- 005d3e80 ["CALL", null, ["callee:00c5a880:8"]]
+ 005d3ec0 ["INT_ADD", "register:40f0:8", ["const:5d3ec0:8", "const:4:8"]]
+ 005d3ec0 ["CALL", null, ["callee:00c5a880:8"]]
~~~


<a id="compare-0fcd122e1ff1723cb850ae12913dbb73"></a>

### [`005d433c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005d4/005d433c.md) → [`005d437c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005d4/005d437c.md) FUN_005d437c

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`005d2c04`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005d2/005d2c04.md) · 呼出先 4件 [`00c37288`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c37/00c37288.md) [`00c57ef0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ef0.md) [`00c57f10`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57f10.md) [`00c5a7b0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5a7b0.md)
- 新版 呼出元 1件 [`005d2c44`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005d2/005d2c44.md) · 呼出先 4件 [`00c37324`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c37/00c37324.md) [`00c57fc0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fc0.md) [`00c57fe0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fe0.md) [`00c5a880`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5a880.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 85.71% / 新版 85.71%

優先判定に残った影響 `call_argument_candidate` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "005d43a8",
      "incomplete_value": true,
      "site": "005d43b0",
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
                "const:480:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "005d4368",
      "incomplete_value": true,
      "site": "005d4370",
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
                "const:3b0:8"
              ]
            ]
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
      "definition_site": "005d43ac",
      "incomplete_value": true,
      "site": "005d43b0",
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
                "const:488:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "005d436c",
      "incomplete_value": true,
      "site": "005d4370",
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
                "const:3b8:8"
              ]
            ]
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
      "005d43a8",
      "READ",
      [
        "storage",
        "00c9b3b0",
        null,
        "pointer"
      ]
    ],
    [
      "005d43a8",
      "PARAM",
      [
        "storage",
        "00c965b8",
        "std::__ndk1::regex_error::typeinfo",
        "pointer __((offset(0x10)))"
      ]
    ],
    [
      "005d43ac",
      "READ",
      [
        "storage",
        "00c9b3b8",
        null,
        "pointer"
      ]
    ]
  ],
  "added": [
    [
      "005d43a8",
      "READ",
      [
        "storage",
        "00c9b480",
        null,
        "pointer"
      ]
    ],
    [
      "005d43a8",
      "PARAM",
      [
        "storage",
        "00c96688",
        "std::__ndk1::regex_error::typeinfo",
        "pointer __((offset(0x10)))"
      ]
    ],
    [
      "005d43ac",
      "READ",
      [
        "storage",
        "00c9b488",
        null,
        "pointer"
      ]
    ]
  ]
}
~~~


~~~diff
- 005d4370 ["INT_ADD", "register:40f0:8", ["const:5d4370:8", "const:4:8"]]
- 005d4370 ["CALL", null, ["callee:00c57fe0:8"]]
+ 005d43b0 ["INT_ADD", "register:40f0:8", ["const:5d43b0:8", "const:4:8"]]
+ 005d43b0 ["CALL", null, ["callee:00c57fe0:8"]]
- 005d434c ["INT_ADD", "register:40f0:8", ["const:5d434c:8", "const:4:8"]]
- 005d434c ["CALL", null, ["callee:00c57fc0:8"]]
+ 005d438c ["INT_ADD", "register:40f0:8", ["const:5d438c:8", "const:4:8"]]
+ 005d438c ["CALL", null, ["callee:00c57fc0:8"]]
- 005d4358 ["INT_ADD", "register:40f0:8", ["const:5d4358:8", "const:4:8"]]
- 005d4358 ["CALL", null, ["callee:00c5a880:8"]]
+ 005d4398 ["INT_ADD", "register:40f0:8", ["const:5d4398:8", "const:4:8"]]
+ 005d4398 ["CALL", null, ["callee:00c5a880:8"]]
~~~


<a id="compare-0e5871bf52d5353ffd1252ce6bd4173d"></a>

### [`005d483c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005d4/005d483c.md) → [`005d487c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005d4/005d487c.md) FUN_005d487c

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`005d3788`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005d3/005d3788.md) · 呼出先 4件 [`00c37288`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c37/00c37288.md) [`00c57ef0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ef0.md) [`00c57f10`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57f10.md) [`00c5a7b0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5a7b0.md)
- 新版 呼出元 1件 [`005d37c8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005d3/005d37c8.md) · 呼出先 4件 [`00c37324`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c37/00c37324.md) [`00c57fc0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fc0.md) [`00c57fe0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fe0.md) [`00c5a880`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5a880.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 85.71% / 新版 85.71%

優先判定に残った影響 `call_argument_candidate` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "005d48a8",
      "incomplete_value": true,
      "site": "005d48b0",
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
                "const:480:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "005d4868",
      "incomplete_value": true,
      "site": "005d4870",
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
                "const:3b0:8"
              ]
            ]
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
      "definition_site": "005d48ac",
      "incomplete_value": true,
      "site": "005d48b0",
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
                "const:488:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "005d486c",
      "incomplete_value": true,
      "site": "005d4870",
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
                "const:3b8:8"
              ]
            ]
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
      "005d48a8",
      "READ",
      [
        "storage",
        "00c9b3b0",
        null,
        "pointer"
      ]
    ],
    [
      "005d48a8",
      "PARAM",
      [
        "storage",
        "00c965b8",
        "std::__ndk1::regex_error::typeinfo",
        "pointer __((offset(0x10)))"
      ]
    ],
    [
      "005d48ac",
      "READ",
      [
        "storage",
        "00c9b3b8",
        null,
        "pointer"
      ]
    ]
  ],
  "added": [
    [
      "005d48a8",
      "READ",
      [
        "storage",
        "00c9b480",
        null,
        "pointer"
      ]
    ],
    [
      "005d48a8",
      "PARAM",
      [
        "storage",
        "00c96688",
        "std::__ndk1::regex_error::typeinfo",
        "pointer __((offset(0x10)))"
      ]
    ],
    [
      "005d48ac",
      "READ",
      [
        "storage",
        "00c9b488",
        null,
        "pointer"
      ]
    ]
  ]
}
~~~


~~~diff
- 005d4870 ["INT_ADD", "register:40f0:8", ["const:5d4870:8", "const:4:8"]]
- 005d4870 ["CALL", null, ["callee:00c57fe0:8"]]
+ 005d48b0 ["INT_ADD", "register:40f0:8", ["const:5d48b0:8", "const:4:8"]]
+ 005d48b0 ["CALL", null, ["callee:00c57fe0:8"]]
- 005d484c ["INT_ADD", "register:40f0:8", ["const:5d484c:8", "const:4:8"]]
- 005d484c ["CALL", null, ["callee:00c57fc0:8"]]
+ 005d488c ["INT_ADD", "register:40f0:8", ["const:5d488c:8", "const:4:8"]]
+ 005d488c ["CALL", null, ["callee:00c57fc0:8"]]
- 005d4858 ["INT_ADD", "register:40f0:8", ["const:5d4858:8", "const:4:8"]]
- 005d4858 ["CALL", null, ["callee:00c5a880:8"]]
+ 005d4898 ["INT_ADD", "register:40f0:8", ["const:5d4898:8", "const:4:8"]]
+ 005d4898 ["CALL", null, ["callee:00c5a880:8"]]
~~~


<a id="compare-9e79d6e89520d135f311748b3ba3ad20"></a>

### [`005d4a28`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005d4/005d4a28.md) → [`005d4a68`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005d4/005d4a68.md) FUN_005d4a68

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`005d4888`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005d4/005d4888.md) · 呼出先 1件 [`0043b778`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043b778.md)
- 新版 呼出元 1件 [`005d48c8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005d4/005d48c8.md) · 呼出先 1件 [`0043b7b8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b7b8.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 80.00% / 新版 80.00%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "005d4a74",
      "incomplete_value": false,
      "site": "005d4a78",
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
      "definition_site": "005d4a34",
      "incomplete_value": false,
      "site": "005d4a38",
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
      "005d4a74",
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
      "005d4a74",
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
- 005d4a38 ["INT_ADD", "register:40f0:8", ["const:5d4a38:8", "const:4:8"]]
- 005d4a38 ["CALL", null, ["callee:0043b7b8:8"]]
+ 005d4a78 ["INT_ADD", "register:40f0:8", ["const:5d4a78:8", "const:4:8"]]
+ 005d4a78 ["CALL", null, ["callee:0043b7b8:8"]]
- 005d4a34 ["COPY", "tmp:0:8", ["const:f4c:8"]]
- 005d4a34 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 005d4a34 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 005d4a34 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 005d4a74 ["COPY", "tmp:0:8", ["const:f8c:8"]]
+ 005d4a74 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 005d4a74 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 005d4a74 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
~~~


<a id="compare-1803b482d5b082fe42536cd55276a8fc"></a>

### [`005d4a3c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005d4/005d4a3c.md) → [`005d4a7c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005d4/005d4a7c.md) FUN_005d4a7c

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`005d3c58`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005d3/005d3c58.md) · 呼出先 1件 [`0043b778`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043b778.md)
- 新版 呼出元 1件 [`005d3c98`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005d3/005d3c98.md) · 呼出先 1件 [`0043b7b8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b7b8.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 80.00% / 新版 80.00%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "005d4a88",
      "incomplete_value": false,
      "site": "005d4a8c",
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
      "definition_site": "005d4a48",
      "incomplete_value": false,
      "site": "005d4a4c",
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
      "005d4a88",
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
      "005d4a88",
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
- 005d4a4c ["INT_ADD", "register:40f0:8", ["const:5d4a4c:8", "const:4:8"]]
- 005d4a4c ["CALL", null, ["callee:0043b7b8:8"]]
+ 005d4a8c ["INT_ADD", "register:40f0:8", ["const:5d4a8c:8", "const:4:8"]]
+ 005d4a8c ["CALL", null, ["callee:0043b7b8:8"]]
- 005d4a48 ["COPY", "tmp:0:8", ["const:f4c:8"]]
- 005d4a48 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 005d4a48 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 005d4a48 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 005d4a88 ["COPY", "tmp:0:8", ["const:f8c:8"]]
+ 005d4a88 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 005d4a88 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 005d4a88 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
~~~


<a id="compare-b0ba0f08df7e90fdfcfc9f68e510b253"></a>

### [`005d4b48`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005d4/005d4b48.md) → [`005d4b88`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005d4/005d4b88.md) FUN_005d4b88

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 2件 [`005cec1c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005ce/005cec1c.md) [`005d5408`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005d5/005d5408.md) · 呼出先 1件 [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md)
- 新版 呼出元 2件 [`005cec5c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005ce/005cec5c.md) [`005d5448`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005d5/005d5448.md) · 呼出先 1件 [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 90.16% / 新版 90.16%

優先判定に残った影響 `store_value` 2件

アドレスに依存する影響 `store_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "005d4be0",
      "incomplete_value": true,
      "site": "005d4be0",
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
      "definition_site": "005d4ba0",
      "incomplete_value": true,
      "site": "005d4ba0",
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
      "definition_site": "005d4c14",
      "incomplete_value": true,
      "site": "005d4c14",
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
      "definition_site": "005d4bd4",
      "incomplete_value": true,
      "site": "005d4bd4",
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
    "ordinal": 20,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "005d4c44",
      "incomplete_value": true,
      "site": "005d4c4c",
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
      "definition_site": "005d4c04",
      "incomplete_value": true,
      "site": "005d4c0c",
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
    "ordinal": 27,
    "slot": 2
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "005d4bd4",
      "READ",
      [
        "storage",
        "00c9b388",
        null,
        "pointer"
      ]
    ],
    [
      "005d4be0",
      "DATA",
      [
        "storage",
        "00c70b40",
        null,
        "pointer"
      ]
    ],
    [
      "005d4bfc",
      "READ",
      [
        "storage",
        "00c9b438",
        null,
        "pointer"
      ]
    ]
  ],
  "added": [
    [
      "005d4bd4",
      "READ",
      [
        "storage",
        "00c9b458",
        null,
        "pointer"
      ]
    ],
    [
      "005d4be0",
      "DATA",
      [
        "storage",
        "00c70c10",
        null,
        "pointer"
      ]
    ],
    [
      "005d4bfc",
      "READ",
      [
        "storage",
        "00c9b508",
        null,
        "pointer"
      ]
    ]
  ]
}
~~~


~~~diff
- 005d4b94 ["INT_ADD", "tmp:0:8", ["register:4048:8", "const:388:8"]]
- 005d4b94 ["LOAD", "register:4048:8", ["const:1b1:8", "tmp:0:8"]]
+ 005d4bd4 ["INT_ADD", "tmp:0:8", ["register:4048:8", "const:458:8"]]
+ 005d4bd4 ["LOAD", "register:4048:8", ["const:1b1:8", "tmp:0:8"]]
- 005d4b84 ["INT_ADD", "register:40f0:8", ["const:5d4b84:8", "const:4:8"]]
- 005d4b84 ["CALL", null, ["callee:00c57f60:8"]]
+ 005d4bc4 ["INT_ADD", "register:40f0:8", ["const:5d4bc4:8", "const:4:8"]]
+ 005d4bc4 ["CALL", null, ["callee:00c57f60:8"]]
- 005d4bac ["INT_ADD", "register:40f0:8", ["const:5d4bac:8", "const:4:8"]]
- 005d4bac ["CALL", null, ["callee:00c57f60:8"]]
+ 005d4bec ["INT_ADD", "register:40f0:8", ["const:5d4bec:8", "const:4:8"]]
+ 005d4bec ["CALL", null, ["callee:00c57f60:8"]]
~~~


<a id="compare-e231e3abec381f92e49d06265d4abc6c"></a>

### [`005d4c88`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005d4/005d4c88.md) → [`005d4cc8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005d4/005d4cc8.md) FUN_005d4cc8

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 2件 [`005cec1c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005ce/005cec1c.md) [`005d5408`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005d5/005d5408.md) · 呼出先 4件 [`00c37288`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c37/00c37288.md) [`00c57ef0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ef0.md) [`00c57f10`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57f10.md) [`00c5a7b0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5a7b0.md)
- 新版 呼出元 2件 [`005cec5c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005ce/005cec5c.md) [`005d5448`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005d5/005d5448.md) · 呼出先 4件 [`00c37324`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c37/00c37324.md) [`00c57fc0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fc0.md) [`00c57fe0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fe0.md) [`00c5a880`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5a880.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 85.71% / 新版 85.71%

優先判定に残った影響 `call_argument_candidate` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "005d4cf4",
      "incomplete_value": true,
      "site": "005d4cfc",
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
                "const:480:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "005d4cb4",
      "incomplete_value": true,
      "site": "005d4cbc",
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
                "const:3b0:8"
              ]
            ]
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
      "definition_site": "005d4cf8",
      "incomplete_value": true,
      "site": "005d4cfc",
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
                "const:488:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "005d4cb8",
      "incomplete_value": true,
      "site": "005d4cbc",
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
                "const:3b8:8"
              ]
            ]
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
      "005d4cf4",
      "READ",
      [
        "storage",
        "00c9b3b0",
        null,
        "pointer"
      ]
    ],
    [
      "005d4cf4",
      "PARAM",
      [
        "storage",
        "00c965b8",
        "std::__ndk1::regex_error::typeinfo",
        "pointer __((offset(0x10)))"
      ]
    ],
    [
      "005d4cf8",
      "READ",
      [
        "storage",
        "00c9b3b8",
        null,
        "pointer"
      ]
    ]
  ],
  "added": [
    [
      "005d4cf4",
      "READ",
      [
        "storage",
        "00c9b480",
        null,
        "pointer"
      ]
    ],
    [
      "005d4cf4",
      "PARAM",
      [
        "storage",
        "00c96688",
        "std::__ndk1::regex_error::typeinfo",
        "pointer __((offset(0x10)))"
      ]
    ],
    [
      "005d4cf8",
      "READ",
      [
        "storage",
        "00c9b488",
        null,
        "pointer"
      ]
    ]
  ]
}
~~~


~~~diff
- 005d4cbc ["INT_ADD", "register:40f0:8", ["const:5d4cbc:8", "const:4:8"]]
- 005d4cbc ["CALL", null, ["callee:00c57fe0:8"]]
+ 005d4cfc ["INT_ADD", "register:40f0:8", ["const:5d4cfc:8", "const:4:8"]]
+ 005d4cfc ["CALL", null, ["callee:00c57fe0:8"]]
- 005d4c98 ["INT_ADD", "register:40f0:8", ["const:5d4c98:8", "const:4:8"]]
- 005d4c98 ["CALL", null, ["callee:00c57fc0:8"]]
+ 005d4cd8 ["INT_ADD", "register:40f0:8", ["const:5d4cd8:8", "const:4:8"]]
+ 005d4cd8 ["CALL", null, ["callee:00c57fc0:8"]]
- 005d4ca4 ["INT_ADD", "register:40f0:8", ["const:5d4ca4:8", "const:4:8"]]
- 005d4ca4 ["CALL", null, ["callee:00c5a880:8"]]
+ 005d4ce4 ["INT_ADD", "register:40f0:8", ["const:5d4ce4:8", "const:4:8"]]
+ 005d4ce4 ["CALL", null, ["callee:00c5a880:8"]]
~~~


<a id="compare-a17304a4236c52649276e275f1a4f53a"></a>

### [`005d4cd4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005d4/005d4cd4.md) → [`005d4d14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005d4/005d4d14.md) FUN_005d4d14

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 2件 [`005cec1c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005ce/005cec1c.md) [`005d5408`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005d5/005d5408.md) · 呼出先 4件 [`00c37288`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c37/00c37288.md) [`00c57ef0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ef0.md) [`00c57f10`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57f10.md) [`00c5a7b0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5a7b0.md)
- 新版 呼出元 2件 [`005cec5c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005ce/005cec5c.md) [`005d5448`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005d5/005d5448.md) · 呼出先 4件 [`00c37324`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c37/00c37324.md) [`00c57fc0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fc0.md) [`00c57fe0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fe0.md) [`00c5a880`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5a880.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 85.71% / 新版 85.71%

優先判定に残った影響 `call_argument_candidate` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "005d4d40",
      "incomplete_value": true,
      "site": "005d4d48",
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
                "const:480:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "005d4d00",
      "incomplete_value": true,
      "site": "005d4d08",
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
                "const:3b0:8"
              ]
            ]
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
      "definition_site": "005d4d44",
      "incomplete_value": true,
      "site": "005d4d48",
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
                "const:488:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "005d4d04",
      "incomplete_value": true,
      "site": "005d4d08",
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
                "const:3b8:8"
              ]
            ]
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
      "005d4d40",
      "READ",
      [
        "storage",
        "00c9b3b0",
        null,
        "pointer"
      ]
    ],
    [
      "005d4d40",
      "PARAM",
      [
        "storage",
        "00c965b8",
        "std::__ndk1::regex_error::typeinfo",
        "pointer __((offset(0x10)))"
      ]
    ],
    [
      "005d4d44",
      "READ",
      [
        "storage",
        "00c9b3b8",
        null,
        "pointer"
      ]
    ]
  ],
  "added": [
    [
      "005d4d40",
      "READ",
      [
        "storage",
        "00c9b480",
        null,
        "pointer"
      ]
    ],
    [
      "005d4d40",
      "PARAM",
      [
        "storage",
        "00c96688",
        "std::__ndk1::regex_error::typeinfo",
        "pointer __((offset(0x10)))"
      ]
    ],
    [
      "005d4d44",
      "READ",
      [
        "storage",
        "00c9b488",
        null,
        "pointer"
      ]
    ]
  ]
}
~~~


~~~diff
- 005d4d08 ["INT_ADD", "register:40f0:8", ["const:5d4d08:8", "const:4:8"]]
- 005d4d08 ["CALL", null, ["callee:00c57fe0:8"]]
+ 005d4d48 ["INT_ADD", "register:40f0:8", ["const:5d4d48:8", "const:4:8"]]
+ 005d4d48 ["CALL", null, ["callee:00c57fe0:8"]]
- 005d4ce4 ["INT_ADD", "register:40f0:8", ["const:5d4ce4:8", "const:4:8"]]
- 005d4ce4 ["CALL", null, ["callee:00c57fc0:8"]]
+ 005d4d24 ["INT_ADD", "register:40f0:8", ["const:5d4d24:8", "const:4:8"]]
+ 005d4d24 ["CALL", null, ["callee:00c57fc0:8"]]
- 005d4cf0 ["INT_ADD", "register:40f0:8", ["const:5d4cf0:8", "const:4:8"]]
- 005d4cf0 ["CALL", null, ["callee:00c5a880:8"]]
+ 005d4d30 ["INT_ADD", "register:40f0:8", ["const:5d4d30:8", "const:4:8"]]
+ 005d4d30 ["CALL", null, ["callee:00c5a880:8"]]
~~~


<a id="compare-b3b93281ed36a230099114441ff6ef12"></a>

### [`005d4d20`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005d4/005d4d20.md) → [`005d4d60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005d4/005d4d60.md) FUN_005d4d60

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 88.46% / 新版 88.46%

優先判定に残った影響 `store_value` 1件

アドレスに依存する影響 `store_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "005d4d7c",
      "incomplete_value": true,
      "site": "005d4d80",
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
      "definition_site": "005d4d3c",
      "incomplete_value": true,
      "site": "005d4d40",
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
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "005d4da0",
      "incomplete_value": true,
      "site": "005d4da4",
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
      "definition_site": "005d4d60",
      "incomplete_value": true,
      "site": "005d4d64",
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
      "005d4d74",
      "READ",
      [
        "storage",
        "00c9b448",
        null,
        "pointer"
      ]
    ],
    [
      "005d4d80",
      "DATA",
      [
        "storage",
        "00c71038",
        null,
        "pointer"
      ]
    ],
    [
      "005d4d98",
      "READ",
      [
        "storage",
        "00c9b3a8",
        null,
        "pointer"
      ]
    ]
  ],
  "added": [
    [
      "005d4d74",
      "READ",
      [
        "storage",
        "00c9b518",
        null,
        "pointer"
      ]
    ],
    [
      "005d4d80",
      "DATA",
      [
        "storage",
        "00c71108",
        null,
        "pointer"
      ]
    ],
    [
      "005d4d98",
      "READ",
      [
        "storage",
        "00c9b478",
        null,
        "pointer"
      ]
    ]
  ]
}
~~~


~~~diff
- 005d4d34 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:448:8"]]
- 005d4d34 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
+ 005d4d74 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:518:8"]]
+ 005d4d74 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
- 005d4d50 ["COPY", "register:0:8", ["register:4040:8"]]
- 005d4d50 ["INT_ADD", "register:40f0:8", ["const:5d4d50:8", "const:4:8"]]
- 005d4d50 ["CALLIND", null, ["register:0:8"]]
+ 005d4d90 ["COPY", "register:0:8", ["register:4040:8"]]
+ 005d4d90 ["INT_ADD", "register:40f0:8", ["const:5d4d90:8", "const:4:8"]]
+ 005d4d90 ["CALLIND", null, ["register:0:8"]]
- 005d4d58 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:3a8:8"]]
- 005d4d58 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
+ 005d4d98 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:478:8"]]
+ 005d4d98 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-b797c493cb44c5281a1a9689f4270586"></a>

### [`005d5010`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005d5/005d5010.md) → [`005d5050`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005d5/005d5050.md) FUN_005d5050

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 88.46% / 新版 88.46%

優先判定に残った影響 `store_value` 1件

アドレスに依存する影響 `store_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "005d506c",
      "incomplete_value": true,
      "site": "005d5070",
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
      "definition_site": "005d502c",
      "incomplete_value": true,
      "site": "005d5030",
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
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "005d5090",
      "incomplete_value": true,
      "site": "005d5094",
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
      "definition_site": "005d5050",
      "incomplete_value": true,
      "site": "005d5054",
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
      "005d5064",
      "READ",
      [
        "storage",
        "00c9b448",
        null,
        "pointer"
      ]
    ],
    [
      "005d5070",
      "DATA",
      [
        "storage",
        "00c71038",
        null,
        "pointer"
      ]
    ],
    [
      "005d5088",
      "READ",
      [
        "storage",
        "00c9b3a8",
        null,
        "pointer"
      ]
    ]
  ],
  "added": [
    [
      "005d5064",
      "READ",
      [
        "storage",
        "00c9b518",
        null,
        "pointer"
      ]
    ],
    [
      "005d5070",
      "DATA",
      [
        "storage",
        "00c71108",
        null,
        "pointer"
      ]
    ],
    [
      "005d5088",
      "READ",
      [
        "storage",
        "00c9b478",
        null,
        "pointer"
      ]
    ]
  ]
}
~~~


~~~diff
- 005d5024 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:448:8"]]
- 005d5024 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
+ 005d5064 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:518:8"]]
+ 005d5064 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
- 005d5040 ["COPY", "register:0:8", ["register:4040:8"]]
- 005d5040 ["INT_ADD", "register:40f0:8", ["const:5d5040:8", "const:4:8"]]
- 005d5040 ["CALLIND", null, ["register:0:8"]]
+ 005d5080 ["COPY", "register:0:8", ["register:4040:8"]]
+ 005d5080 ["INT_ADD", "register:40f0:8", ["const:5d5080:8", "const:4:8"]]
+ 005d5080 ["CALLIND", null, ["register:0:8"]]
- 005d5048 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:3a8:8"]]
- 005d5048 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
+ 005d5088 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:478:8"]]
+ 005d5088 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-b6dcd24c40cf771cdab176a6ebe8b2e7"></a>

### [`005d5090`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005d5/005d5090.md) → [`005d50d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005d5/005d50d0.md) FUN_005d50d0

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 0件 
- 新版 呼出元 0件  · 呼出先 0件 

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 88.89% / 新版 88.89%

優先判定に残った影響 `store_value` 1件

アドレスに依存する影響 `store_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "005d50ec",
      "incomplete_value": true,
      "site": "005d50f0",
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
      "definition_site": "005d50ac",
      "incomplete_value": true,
      "site": "005d50b0",
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
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "005d5110",
      "incomplete_value": true,
      "site": "005d5114",
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
      "definition_site": "005d50d0",
      "incomplete_value": true,
      "site": "005d50d4",
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
      "005d50e4",
      "READ",
      [
        "storage",
        "00c9b448",
        null,
        "pointer"
      ]
    ],
    [
      "005d50f0",
      "DATA",
      [
        "storage",
        "00c71038",
        null,
        "pointer"
      ]
    ],
    [
      "005d5108",
      "READ",
      [
        "storage",
        "00c9b3a8",
        null,
        "pointer"
      ]
    ]
  ],
  "added": [
    [
      "005d50e4",
      "READ",
      [
        "storage",
        "00c9b518",
        null,
        "pointer"
      ]
    ],
    [
      "005d50f0",
      "DATA",
      [
        "storage",
        "00c71108",
        null,
        "pointer"
      ]
    ],
    [
      "005d5108",
      "READ",
      [
        "storage",
        "00c9b478",
        null,
        "pointer"
      ]
    ]
  ]
}
~~~


~~~diff
- 005d50a4 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:448:8"]]
- 005d50a4 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
+ 005d50e4 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:518:8"]]
+ 005d50e4 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
- 005d50c0 ["COPY", "register:0:8", ["register:4040:8"]]
- 005d50c0 ["INT_ADD", "register:40f0:8", ["const:5d50c0:8", "const:4:8"]]
- 005d50c0 ["CALLIND", null, ["register:0:8"]]
+ 005d5100 ["COPY", "register:0:8", ["register:4040:8"]]
+ 005d5100 ["INT_ADD", "register:40f0:8", ["const:5d5100:8", "const:4:8"]]
+ 005d5100 ["CALLIND", null, ["register:0:8"]]
- 005d50c8 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:3a8:8"]]
- 005d50c8 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
+ 005d5108 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:478:8"]]
+ 005d5108 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-42b822d1389e029a77c2d496c5d8df3e"></a>

### [`005d50fc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005d5/005d50fc.md) → [`005d513c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005d5/005d513c.md) FUN_005d513c

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 88.46% / 新版 88.46%

優先判定に残った影響 `store_value` 1件

アドレスに依存する影響 `store_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "005d5158",
      "incomplete_value": true,
      "site": "005d515c",
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
      "definition_site": "005d5118",
      "incomplete_value": true,
      "site": "005d511c",
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
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "005d517c",
      "incomplete_value": true,
      "site": "005d5180",
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
      "definition_site": "005d513c",
      "incomplete_value": true,
      "site": "005d5140",
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
      "005d5150",
      "READ",
      [
        "storage",
        "00c9b448",
        null,
        "pointer"
      ]
    ],
    [
      "005d515c",
      "DATA",
      [
        "storage",
        "00c71038",
        null,
        "pointer"
      ]
    ],
    [
      "005d5174",
      "READ",
      [
        "storage",
        "00c9b3a8",
        null,
        "pointer"
      ]
    ]
  ],
  "added": [
    [
      "005d5150",
      "READ",
      [
        "storage",
        "00c9b518",
        null,
        "pointer"
      ]
    ],
    [
      "005d515c",
      "DATA",
      [
        "storage",
        "00c71108",
        null,
        "pointer"
      ]
    ],
    [
      "005d5174",
      "READ",
      [
        "storage",
        "00c9b478",
        null,
        "pointer"
      ]
    ]
  ]
}
~~~


~~~diff
- 005d5110 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:448:8"]]
- 005d5110 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
+ 005d5150 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:518:8"]]
+ 005d5150 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
- 005d512c ["COPY", "register:0:8", ["register:4040:8"]]
- 005d512c ["INT_ADD", "register:40f0:8", ["const:5d512c:8", "const:4:8"]]
- 005d512c ["CALLIND", null, ["register:0:8"]]
+ 005d516c ["COPY", "register:0:8", ["register:4040:8"]]
+ 005d516c ["INT_ADD", "register:40f0:8", ["const:5d516c:8", "const:4:8"]]
+ 005d516c ["CALLIND", null, ["register:0:8"]]
- 005d5134 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:3a8:8"]]
- 005d5134 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
+ 005d5174 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:478:8"]]
+ 005d5174 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-3f09beadda5270350c8aca80f9211c5e"></a>

### [`005d51b0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005d5/005d51b0.md) → [`005d51f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005d5/005d51f0.md) FUN_005d51f0

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 2件 [`005cdd00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005cd/005cdd00.md) [`005cde8c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005cd/005cde8c.md) · 呼出先 4件 [`00c37288`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c37/00c37288.md) [`00c57ef0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ef0.md) [`00c57f10`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57f10.md) [`00c5a7b0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5a7b0.md)
- 新版 呼出元 2件 [`005cdd40`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005cd/005cdd40.md) [`005cdecc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005cd/005cdecc.md) · 呼出先 4件 [`00c37324`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c37/00c37324.md) [`00c57fc0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fc0.md) [`00c57fe0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fe0.md) [`00c5a880`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5a880.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 85.71% / 新版 85.71%

優先判定に残った影響 `call_argument_candidate` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "005d521c",
      "incomplete_value": true,
      "site": "005d5224",
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
                "const:480:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "005d51dc",
      "incomplete_value": true,
      "site": "005d51e4",
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
                "const:3b0:8"
              ]
            ]
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
      "definition_site": "005d5220",
      "incomplete_value": true,
      "site": "005d5224",
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
                "const:488:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "005d51e0",
      "incomplete_value": true,
      "site": "005d51e4",
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
                "const:3b8:8"
              ]
            ]
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
      "005d521c",
      "READ",
      [
        "storage",
        "00c9b3b0",
        null,
        "pointer"
      ]
    ],
    [
      "005d521c",
      "PARAM",
      [
        "storage",
        "00c965b8",
        "std::__ndk1::regex_error::typeinfo",
        "pointer __((offset(0x10)))"
      ]
    ],
    [
      "005d5220",
      "READ",
      [
        "storage",
        "00c9b3b8",
        null,
        "pointer"
      ]
    ]
  ],
  "added": [
    [
      "005d521c",
      "READ",
      [
        "storage",
        "00c9b480",
        null,
        "pointer"
      ]
    ],
    [
      "005d521c",
      "PARAM",
      [
        "storage",
        "00c96688",
        "std::__ndk1::regex_error::typeinfo",
        "pointer __((offset(0x10)))"
      ]
    ],
    [
      "005d5220",
      "READ",
      [
        "storage",
        "00c9b488",
        null,
        "pointer"
      ]
    ]
  ]
}
~~~


~~~diff
- 005d51e4 ["INT_ADD", "register:40f0:8", ["const:5d51e4:8", "const:4:8"]]
- 005d51e4 ["CALL", null, ["callee:00c57fe0:8"]]
+ 005d5224 ["INT_ADD", "register:40f0:8", ["const:5d5224:8", "const:4:8"]]
+ 005d5224 ["CALL", null, ["callee:00c57fe0:8"]]
- 005d51c0 ["INT_ADD", "register:40f0:8", ["const:5d51c0:8", "const:4:8"]]
- 005d51c0 ["CALL", null, ["callee:00c57fc0:8"]]
+ 005d5200 ["INT_ADD", "register:40f0:8", ["const:5d5200:8", "const:4:8"]]
+ 005d5200 ["CALL", null, ["callee:00c57fc0:8"]]
- 005d51cc ["INT_ADD", "register:40f0:8", ["const:5d51cc:8", "const:4:8"]]
- 005d51cc ["CALL", null, ["callee:00c5a880:8"]]
+ 005d520c ["INT_ADD", "register:40f0:8", ["const:5d520c:8", "const:4:8"]]
+ 005d520c ["CALL", null, ["callee:00c5a880:8"]]
~~~


<a id="compare-d64e05b6cde8e94e87a4e3e9009a6eae"></a>

### [`005d51fc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005d5/005d51fc.md) → [`005d523c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005d5/005d523c.md) FUN_005d523c

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 2件 [`005cdd00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005cd/005cdd00.md) [`005d51fc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005d5/005d51fc.md) · 呼出先 7件 [`005cf09c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005cf/005cf09c.md) [`005d0ff8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005d0/005d0ff8.md) [`005d1044`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005d1/005d1044.md) [`005d51fc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005d5/005d51fc.md) [`005d5408`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005d5/005d5408.md)
- 新版 呼出元 2件 [`005cdd40`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005cd/005cdd40.md) [`005d523c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005d5/005d523c.md) · 呼出先 7件 [`005cf0dc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005cf/005cf0dc.md) [`005d1038`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005d1/005d1038.md) [`005d1084`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005d1/005d1084.md) [`005d523c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005d5/005d523c.md) [`005d5448`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005d5/005d5448.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 95.42% / 新版 95.42%

優先判定に残った影響 `store_value` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "005d52cc",
      "incomplete_value": true,
      "site": "005d52e4",
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
      "definition_site": "005d528c",
      "incomplete_value": true,
      "site": "005d52a4",
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
    "ordinal": 11,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "005d5420",
      "incomplete_value": true,
      "site": "005d5430",
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
      "definition_site": "005d53e0",
      "incomplete_value": true,
      "site": "005d53f0",
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
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "005d52bc",
      "READ",
      [
        "storage",
        "00c9b3e8",
        null,
        "pointer"
      ]
    ],
    [
      "005d52e4",
      "DATA",
      [
        "storage",
        "00c70f48",
        null,
        "pointer"
      ]
    ],
    [
      "005d5410",
      "READ",
      [
        "storage",
        "00c9b3f0",
        null,
        "pointer"
      ]
    ]
  ],
  "added": [
    [
      "005d52bc",
      "READ",
      [
        "storage",
        "00c9b4b8",
        null,
        "pointer"
      ]
    ],
    [
      "005d52e4",
      "DATA",
      [
        "storage",
        "00c71018",
        null,
        "pointer"
      ]
    ],
    [
      "005d5410",
      "READ",
      [
        "storage",
        "00c9b4c0",
        null,
        "pointer"
      ]
    ]
  ]
}
~~~


~~~diff
- 005d521c ["INT_ADD", "register:40f0:8", ["const:5d521c:8", "const:4:8"]]
- 005d521c ["CALL", null, ["callee:005d5688:8"]]
+ 005d525c ["INT_ADD", "register:40f0:8", ["const:5d525c:8", "const:4:8"]]
+ 005d525c ["CALL", null, ["callee:005d5688:8"]]
- 005d526c ["INT_ADD", "register:40f0:8", ["const:5d526c:8", "const:4:8"]]
- 005d526c ["CALL", null, ["callee:00c57f60:8"]]
+ 005d52ac ["INT_ADD", "register:40f0:8", ["const:5d52ac:8", "const:4:8"]]
+ 005d52ac ["CALL", null, ["callee:00c57f60:8"]]
- 005d527c ["INT_ADD", "tmp:0:8", ["register:4050:8", "const:3e8:8"]]
- 005d527c ["LOAD", "register:4050:8", ["const:1b1:8", "tmp:0:8"]]
+ 005d52bc ["INT_ADD", "tmp:0:8", ["register:4050:8", "const:4b8:8"]]
+ 005d52bc ["LOAD", "register:4050:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-78ffae4ed7ee39b45b34fc1b68fcc191"></a>

### [`005d5758`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005d5/005d5758.md) → [`005d5798`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005d5/005d5798.md) FUN_005d5798

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 0件 
- 新版 呼出元 0件  · 呼出先 0件 

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 72.73% / 新版 72.73%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "005d57a8",
      "incomplete_value": true,
      "site": "005d57ac",
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
      "definition_site": "005d5768",
      "incomplete_value": true,
      "site": "005d576c",
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
      "005d57a0",
      "READ",
      [
        "storage",
        "00c9b3a8",
        null,
        "pointer"
      ]
    ],
    [
      "005d57ac",
      "DATA",
      [
        "storage",
        "00c70bb8",
        null,
        "pointer"
      ]
    ]
  ],
  "added": [
    [
      "005d57a0",
      "READ",
      [
        "storage",
        "00c9b478",
        null,
        "pointer"
      ]
    ],
    [
      "005d57ac",
      "DATA",
      [
        "storage",
        "00c70c88",
        null,
        "pointer"
      ]
    ]
  ]
}
~~~


~~~diff
- 005d5760 ["INT_ADD", "tmp:0:8", ["register:4048:8", "const:3a8:8"]]
- 005d5760 ["LOAD", "register:4048:8", ["const:1b1:8", "tmp:0:8"]]
+ 005d57a0 ["INT_ADD", "tmp:0:8", ["register:4048:8", "const:478:8"]]
+ 005d57a0 ["LOAD", "register:4048:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-d10a05b39da6590e370c3c46e2beec5f"></a>

### [`005d6110`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005d6/005d6110.md) → [`005d6150`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005d6/005d6150.md) FUN_005d6150

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`005d5c60`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005d5/005d5c60.md) · 呼出先 10件 [`005cfd54`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005cf/005cfd54.md) [`005cfda0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005cf/005cfda0.md) [`005cff18`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005cf/005cff18.md) [`005d0510`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005d0/005d0510.md) [`005d7140`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005d7/005d7140.md)
- 新版 呼出元 1件 [`005d5ca0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005d5/005d5ca0.md) · 呼出先 10件 [`005cfd94`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005cf/005cfd94.md) [`005cfde0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005cf/005cfde0.md) [`005cff58`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005cf/005cff58.md) [`005d0550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005d0/005d0550.md) [`005d7180`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005d7/005d7180.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 99.64% / 新版 99.64%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "005d6340",
      "incomplete_value": true,
      "site": "005d6350",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:430:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "005d6300",
      "incomplete_value": true,
      "site": "005d6310",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:3f0:8"
              ]
            ]
          ]
        ]
      ]
    },
    "ordinal": 51,
    "slot": 2
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "005d6340",
      "READ",
      [
        "storage",
        "002c23f0",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "005d6340",
      "READ",
      [
        "storage",
        "002c2430",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 005d6188 ["INT_ADD", "register:40f0:8", ["const:5d6188:8", "const:4:8"]]
- 005d6188 ["CALL", null, ["callee:005d71fc:8"]]
+ 005d61c8 ["INT_ADD", "register:40f0:8", ["const:5d61c8:8", "const:4:8"]]
+ 005d61c8 ["CALL", null, ["callee:005d71fc:8"]]
- 005d6288 ["INT_ADD", "register:40f0:8", ["const:5d6288:8", "const:4:8"]]
- 005d6288 ["CALL", null, ["callee:005d0550:8"]]
+ 005d62c8 ["INT_ADD", "register:40f0:8", ["const:5d62c8:8", "const:4:8"]]
+ 005d62c8 ["CALL", null, ["callee:005d0550:8"]]
- 005d6300 ["INT_ADD", "tmp:0:8", ["register:4060:8", "const:3f0:8"]]
- 005d6300 ["LOAD", "register:5000:16", ["const:1b1:8", "tmp:0:8"]]
- 005d6300 ["COPY", "register:5010:8", ["const:0:8"]]
- 005d6300 ["COPY", "register:5018:8", ["const:0:8"]]
+ 005d6340 ["INT_ADD", "tmp:0:8", ["register:4060:8", "const:430:8"]]
+ 005d6340 ["LOAD", "register:5000:16", ["const:1b1:8", "tmp:0:8"]]
+ 005d6340 ["COPY", "register:5010:8", ["const:0:8"]]
+ 005d6340 ["COPY", "register:5018:8", ["const:0:8"]]
~~~


<a id="compare-d68aed40e2b9ea255d4f24bb89499bc8"></a>

### [`005d86d8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005d8/005d86d8.md) → [`005d8718`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005d8/005d8718.md) FUN_005d8718

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`005d855c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005d8/005d855c.md) · 呼出先 1件 [`0043b778`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043b778.md)
- 新版 呼出元 1件 [`005d859c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005d8/005d859c.md) · 呼出先 1件 [`0043b7b8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b7b8.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 80.00% / 新版 80.00%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "005d8724",
      "incomplete_value": false,
      "site": "005d8728",
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
      "definition_site": "005d86e4",
      "incomplete_value": false,
      "site": "005d86e8",
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
      "005d8724",
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
      "005d8724",
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
- 005d86e8 ["INT_ADD", "register:40f0:8", ["const:5d86e8:8", "const:4:8"]]
- 005d86e8 ["CALL", null, ["callee:0043b7b8:8"]]
+ 005d8728 ["INT_ADD", "register:40f0:8", ["const:5d8728:8", "const:4:8"]]
+ 005d8728 ["CALL", null, ["callee:0043b7b8:8"]]
- 005d86e4 ["COPY", "tmp:0:8", ["const:f4c:8"]]
- 005d86e4 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 005d86e4 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 005d86e4 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 005d8724 ["COPY", "tmp:0:8", ["const:f8c:8"]]
+ 005d8724 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 005d8724 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 005d8724 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
~~~


<a id="compare-e719914d84139ef8e42951e12264f93b"></a>

### [`005d8f34`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005d8/005d8f34.md) → [`005d8f74`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005d8/005d8f74.md) FUN_005d8f74

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
      "definition_site": "005d8f98",
      "incomplete_value": false,
      "site": "005d8f98",
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
            "const:2b8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "005d8f58",
      "incomplete_value": false,
      "site": "005d8f58",
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
            "const:1e8:8"
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
      "005d8f98",
      "DATA",
      [
        "storage",
        "00c711e8",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "005d8f98",
      "DATA",
      [
        "storage",
        "00c712b8",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 005d8f48 ["INT_ADD", "register:40f0:8", ["const:5d8f48:8", "const:4:8"]]
- 005d8f48 ["CALL", null, ["callee:00c57f60:8"]]
+ 005d8f88 ["INT_ADD", "register:40f0:8", ["const:5d8f88:8", "const:4:8"]]
+ 005d8f88 ["CALL", null, ["callee:00c57f60:8"]]
- 005d8f54 ["COPY", "tmp:0:8", ["const:1e8:8"]]
- 005d8f54 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 005d8f54 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 005d8f54 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 005d8f94 ["COPY", "tmp:0:8", ["const:2b8:8"]]
+ 005d8f94 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 005d8f94 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 005d8f94 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-b0211d3646042896fe152e8d4cdfb78f"></a>

### [`005d8f84`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005d8/005d8f84.md) → [`005d8fc4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005d8/005d8fc4.md) FUN_005d8fc4

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 32件 [`0043bba4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043bba4.md) [`0043ddd8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043d/0043ddd8.md) [`0043e828`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043e/0043e828.md) [`00447ef4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00447/00447ef4.md) [`0047acf4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047a/0047acf4.md)
- 新版 呼出元 0件  · 呼出先 32件 [`0043bbe4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bbe4.md) [`0043de18`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043d/0043de18.md) [`0043e868`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043e/0043e868.md) [`00447f34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00447/00447f34.md) [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md)

変更の種類 call, call_argument_candidate, call_target, constant, operands_and_dependencies, store_value

命令の説明率　旧版 96.77% / 新版 96.77%

優先判定に残った影響 `call_argument_candidate` 6件, `call_target` 3件, `store_value` 1件

アドレスに依存する影響 `store_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "005d93fc",
      "incomplete_value": true,
      "site": "005d9400",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:5c0:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "005d93bc",
      "incomplete_value": true,
      "site": "005d93c0",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:580:8"
              ]
            ]
          ]
        ]
      ]
    },
    "ordinal": 46,
    "slot": 2
  },
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "005d9600",
      "incomplete_value": false,
      "site": "005d9600",
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
            "const:3c8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "005d95c0",
      "incomplete_value": false,
      "site": "005d95c0",
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
            "const:2f8:8"
          ]
        ]
      ]
    },
    "ordinal": 54,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "call_target",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "005d9008",
      "value": [
        "leaf",
        "ram:47ad34:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "005d8fc8",
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
      "005d9008",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047acf4"
      ]
    ],
    [
      "005d9024",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047acf4"
      ]
    ],
    [
      "005d9104",
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
      "005d9008",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ],
    [
      "005d9024",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ],
    [
      "005d9104",
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
- 005d8fc8 ["INT_ADD", "register:40f0:8", ["const:5d8fc8:8", "const:4:8"]]
- 005d8fc8 ["CALL", null, ["ram:47acf4:8"]]
+ 005d9008 ["INT_ADD", "register:40f0:8", ["const:5d9008:8", "const:4:8"]]
+ 005d9008 ["CALL", null, ["ram:47ad34:8"]]
- 005d8fe4 ["INT_ADD", "register:40f0:8", ["const:5d8fe4:8", "const:4:8"]]
- 005d8fe4 ["CALL", null, ["ram:47acf4:8"]]
+ 005d9024 ["INT_ADD", "register:40f0:8", ["const:5d9024:8", "const:4:8"]]
+ 005d9024 ["CALL", null, ["ram:47ad34:8"]]
- 005d9148 ["INT_ADD", "register:40f0:8", ["const:5d9148:8", "const:4:8"]]
- 005d9148 ["CALL", null, ["callee:0043de18:8"]]
+ 005d9188 ["INT_ADD", "register:40f0:8", ["const:5d9188:8", "const:4:8"]]
+ 005d9188 ["CALL", null, ["callee:0043de18:8"]]
~~~


<a id="compare-b82da38491537539765d522d8a657b49"></a>

### [`005d9c58`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005d9/005d9c58.md) → [`005d9c98`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005d9/005d9c98.md) FUN_005d9c98

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
      "definition_site": "005d9cac",
      "incomplete_value": false,
      "site": "005d9cb0",
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
            "const:338:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "005d9c6c",
      "incomplete_value": false,
      "site": "005d9c70",
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
            "const:268:8"
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
      "005d9cb0",
      "DATA",
      [
        "storage",
        "00c71268",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "005d9cb0",
      "DATA",
      [
        "storage",
        "00c71338",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 005d9c64 ["INT_ADD", "register:40f0:8", ["const:5d9c64:8", "const:4:8"]]
- 005d9c64 ["CALL", null, ["callee:00c57f60:8"]]
+ 005d9ca4 ["INT_ADD", "register:40f0:8", ["const:5d9ca4:8", "const:4:8"]]
+ 005d9ca4 ["CALL", null, ["callee:00c57f60:8"]]
- 005d9c6c ["COPY", "tmp:0:8", ["const:268:8"]]
- 005d9c6c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 005d9c6c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 005d9c6c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 005d9cac ["COPY", "tmp:0:8", ["const:338:8"]]
+ 005d9cac ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 005d9cac ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 005d9cac ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-5543bd1b479ce53fb7e54c039d42e0dc"></a>

### [`005d9c7c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005d9/005d9c7c.md) → [`005d9cbc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005d9/005d9cbc.md) FUN_005d9cbc

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
      "definition_site": "005d9cc0",
      "incomplete_value": false,
      "site": "005d9cc4",
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
            "const:338:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "005d9c80",
      "incomplete_value": false,
      "site": "005d9c84",
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
            "const:268:8"
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
      "005d9cc4",
      "DATA",
      [
        "storage",
        "00c71268",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "005d9cc4",
      "DATA",
      [
        "storage",
        "00c71338",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 005d9c80 ["COPY", "tmp:0:8", ["const:268:8"]]
- 005d9c80 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 005d9c80 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 005d9c80 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 005d9cc0 ["COPY", "tmp:0:8", ["const:338:8"]]
+ 005d9cc0 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 005d9cc0 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 005d9cc0 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-21e021b10200d2d3d604d532c9343974"></a>

### [`005d9c94`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005d9/005d9c94.md) → [`005d9cd4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005d9/005d9cd4.md) FUN_005d9cd4

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
      "site": "005d9cf8",
      "value": [
        "leaf",
        "ram:47ad34:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "005d9cb8",
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
      "005d9cf8",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047acf4"
      ]
    ]
  ],
  "added": [
    [
      "005d9cf8",
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
- 005d9cb8 ["INT_ADD", "register:40f0:8", ["const:5d9cb8:8", "const:4:8"]]
- 005d9cb8 ["CALL", null, ["ram:47acf4:8"]]
+ 005d9cf8 ["INT_ADD", "register:40f0:8", ["const:5d9cf8:8", "const:4:8"]]
+ 005d9cf8 ["CALL", null, ["ram:47ad34:8"]]
- 005d9cc4 ["INT_ADD", "register:40f0:8", ["const:5d9cc4:8", "const:4:8"]]
- 005d9cc4 ["CALL", null, ["callee:0047ce14:8"]]
+ 005d9d04 ["INT_ADD", "register:40f0:8", ["const:5d9d04:8", "const:4:8"]]
+ 005d9d04 ["CALL", null, ["callee:0047ce14:8"]]
~~~


<a id="compare-f4bcbeee3898b30d5016793e1d39f429"></a>

### [`005d9ef4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005d9/005d9ef4.md) → [`005d9f34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005d9/005d9f34.md) FUN_005d9f34

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
      "definition_site": "005d9f54",
      "incomplete_value": false,
      "site": "005d9f58",
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
            "const:3c8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "005d9f14",
      "incomplete_value": false,
      "site": "005d9f18",
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
            "const:2f8:8"
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
      "005d9f58",
      "DATA",
      [
        "storage",
        "00c712f8",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "005d9f58",
      "DATA",
      [
        "storage",
        "00c713c8",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 005d9f08 ["INT_ADD", "register:40f0:8", ["const:5d9f08:8", "const:4:8"]]
- 005d9f08 ["CALL", null, ["callee:00c57f60:8"]]
+ 005d9f48 ["INT_ADD", "register:40f0:8", ["const:5d9f48:8", "const:4:8"]]
+ 005d9f48 ["CALL", null, ["callee:00c57f60:8"]]
- 005d9f14 ["COPY", "tmp:0:8", ["const:2f8:8"]]
- 005d9f14 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 005d9f14 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 005d9f14 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 005d9f54 ["COPY", "tmp:0:8", ["const:3c8:8"]]
+ 005d9f54 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 005d9f54 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 005d9f54 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-ea4fe27eccf7ce2953c52831bf20d80b"></a>

### [`005d9f2c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005d9/005d9f2c.md) → [`005d9f6c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005d9/005d9f6c.md) FUN_005d9f6c

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
      "definition_site": "005d9f70",
      "incomplete_value": false,
      "site": "005d9f74",
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
            "const:3c8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "005d9f30",
      "incomplete_value": false,
      "site": "005d9f34",
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
            "const:2f8:8"
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
      "005d9f74",
      "DATA",
      [
        "storage",
        "00c712f8",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "005d9f74",
      "DATA",
      [
        "storage",
        "00c713c8",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 005d9f30 ["COPY", "tmp:0:8", ["const:2f8:8"]]
- 005d9f30 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 005d9f30 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 005d9f30 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 005d9f70 ["COPY", "tmp:0:8", ["const:3c8:8"]]
+ 005d9f70 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 005d9f70 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 005d9f70 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-7521737b6c9f300bc13ee986c21d1df9"></a>

### [`005d9f4c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005d9/005d9f4c.md) → [`005d9f8c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005d9/005d9f8c.md) FUN_005d9f8c

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 18件 [`0043bba4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043bba4.md) [`00447ef4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00447/00447ef4.md) [`0047acf4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047a/0047acf4.md) [`0047cdd4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047c/0047cdd4.md) [`0048ce54`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0048c/0048ce54.md)
- 新版 呼出元 0件  · 呼出先 18件 [`0043bbe4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bbe4.md) [`00447f34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00447/00447f34.md) [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md) [`0047ce14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047ce14.md) [`0048ce94`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048c/0048ce94.md)

変更の種類 call, call_target, constant, operands_and_dependencies, operation_sequence, store_value, unresolved_store_alignment

命令の説明率　旧版 91.00% / 新版 91.00%

優先判定に残った影響 `call_target` 2件, `store_value` 7件, `unresolved_store_alignment` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "005da060",
      "incomplete_value": true,
      "site": "005da070",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:7ce:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "005da020",
      "incomplete_value": true,
      "site": "005da030",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:82a:8"
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
      "definition_site": "005da064",
      "incomplete_value": true,
      "site": "005da074",
      "value": [
        "LOAD",
        "16",
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
      "definition_site": "005da024",
      "incomplete_value": true,
      "site": "005da034",
      "value": [
        "LOAD",
        "16",
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
    "ordinal": 14,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "005da068",
      "incomplete_value": true,
      "site": "005da078",
      "value": [
        "LOAD",
        "16",
        [
          [
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
      "definition_site": "005da028",
      "incomplete_value": true,
      "site": "005da038",
      "value": [
        "LOAD",
        "16",
        [
          [
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
      "005d9ff4",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047acf4"
      ]
    ],
    [
      "005da060",
      "READ",
      [
        "storage",
        "002a682a",
        null,
        "string"
      ]
    ],
    [
      "005da064",
      "READ",
      [
        "storage",
        "002a6836",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "005d9ff4",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ],
    [
      "005da060",
      "READ",
      [
        "storage",
        "002a67ce",
        null,
        "string"
      ]
    ],
    [
      "005da064",
      "READ",
      [
        "storage",
        "002a67da",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 005d9fb4 ["INT_ADD", "register:40f0:8", ["const:5d9fb4:8", "const:4:8"]]
- 005d9fb4 ["CALL", null, ["ram:47acf4:8"]]
+ 005d9ff4 ["INT_ADD", "register:40f0:8", ["const:5d9ff4:8", "const:4:8"]]
+ 005d9ff4 ["CALL", null, ["ram:47ad34:8"]]
- 005da0b0 ["INT_ADD", "register:40f0:8", ["const:5da0b0:8", "const:4:8"]]
- 005da0b0 ["CALL", null, ["callee:0048ce94:8"]]
+ 005da0f0 ["INT_ADD", "register:40f0:8", ["const:5da0f0:8", "const:4:8"]]
+ 005da0f0 ["CALL", null, ["callee:0048ce94:8"]]
- 005da330 ["INT_ADD", "register:40f0:8", ["const:5da330:8", "const:4:8"]]
- 005da330 ["CALL", null, ["ram:47acf4:8"]]
+ 005da370 ["INT_ADD", "register:40f0:8", ["const:5da370:8", "const:4:8"]]
+ 005da370 ["CALL", null, ["ram:47ad34:8"]]
~~~


<a id="compare-1f0507738909e6d7c789814222afec76"></a>

### [`005da6ac`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005da/005da6ac.md) → [`005da6ec`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005da/005da6ec.md) FUN_005da6ec

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 4件 [`005da584`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005da/005da584.md) [`005da6ac`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005da/005da6ac.md) [`00628d44`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00628/00628d44.md) [`00667620`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00667/00667620.md) · 呼出先 21件 [`0043b764`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043b764.md) [`0043bb20`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043bb20.md) [`0043ddd8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043d/0043ddd8.md) [`00440f70`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00440/00440f70.md) [`00441cec`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00441/00441cec.md)
- 新版 呼出元 4件 [`005da5c4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005da/005da5c4.md) [`005da6ec`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005da/005da6ec.md) [`00628d84`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00628/00628d84.md) [`00667660`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00667/00667660.md) · 呼出先 21件 [`0043b7a4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b7a4.md) [`0043bb60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bb60.md) [`0043de18`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043d/0043de18.md) [`00440fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00440/00440fb0.md) [`00441d2c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00441/00441d2c.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 98.64% / 新版 98.64%

優先判定に残った影響 `call_argument_candidate` 6件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "005da910",
      "incomplete_value": false,
      "site": "005da918",
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
      "definition_site": "005da8d0",
      "incomplete_value": false,
      "site": "005da8d8",
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
      "definition_site": "005da92c",
      "incomplete_value": false,
      "site": "005da938",
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
      "definition_site": "005da8ec",
      "incomplete_value": false,
      "site": "005da8f8",
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
      "definition_site": "005da9e0",
      "incomplete_value": false,
      "site": "005da9ec",
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
      "definition_site": "005da9a0",
      "incomplete_value": false,
      "site": "005da9ac",
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
      "005da858",
      "PARAM",
      [
        "storage",
        "002b7f53",
        null,
        null
      ]
    ],
    [
      "005da910",
      "PARAM",
      [
        "storage",
        "002b5de7",
        null,
        null
      ]
    ],
    [
      "005da92c",
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
      "005da858",
      "PARAM",
      [
        "storage",
        "002b7f93",
        null,
        null
      ]
    ],
    [
      "005da910",
      "PARAM",
      [
        "storage",
        "002b5e27",
        null,
        null
      ]
    ],
    [
      "005da92c",
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
- 005da8d8 ["INT_ADD", "register:40f0:8", ["const:5da8d8:8", "const:4:8"]]
- 005da8d8 ["CALL", null, ["callee:00441ed4:8"]]
+ 005da918 ["INT_ADD", "register:40f0:8", ["const:5da918:8", "const:4:8"]]
+ 005da918 ["CALL", null, ["callee:00441ed4:8"]]
- 005da8f8 ["INT_ADD", "register:40f0:8", ["const:5da8f8:8", "const:4:8"]]
- 005da8f8 ["CALL", null, ["callee:00442834:8"]]
+ 005da938 ["INT_ADD", "register:40f0:8", ["const:5da938:8", "const:4:8"]]
+ 005da938 ["CALL", null, ["callee:00442834:8"]]
- 005da9ac ["INT_ADD", "register:40f0:8", ["const:5da9ac:8", "const:4:8"]]
- 005da9ac ["CALL", null, ["callee:00442834:8"]]
+ 005da9ec ["INT_ADD", "register:40f0:8", ["const:5da9ec:8", "const:4:8"]]
+ 005da9ec ["CALL", null, ["callee:00442834:8"]]
~~~


<a id="compare-bf30480d73bb9c2ceaacd27c4ce50ccf"></a>

### [`005daf90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005da/005daf90.md) → [`005dafd0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005da/005dafd0.md) FUN_005dafd0

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
      "definition_site": "005dafe4",
      "incomplete_value": false,
      "site": "005dafe8",
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
            "const:438:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "005dafa4",
      "incomplete_value": false,
      "site": "005dafa8",
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
            "const:368:8"
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
      "005dafe8",
      "DATA",
      [
        "storage",
        "00c71368",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "005dafe8",
      "DATA",
      [
        "storage",
        "00c71438",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 005daf9c ["INT_ADD", "register:40f0:8", ["const:5daf9c:8", "const:4:8"]]
- 005daf9c ["CALL", null, ["callee:00c57f60:8"]]
+ 005dafdc ["INT_ADD", "register:40f0:8", ["const:5dafdc:8", "const:4:8"]]
+ 005dafdc ["CALL", null, ["callee:00c57f60:8"]]
- 005dafa4 ["COPY", "tmp:0:8", ["const:368:8"]]
- 005dafa4 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 005dafa4 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 005dafa4 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 005dafe4 ["COPY", "tmp:0:8", ["const:438:8"]]
+ 005dafe4 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 005dafe4 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 005dafe4 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-ed35e0392432ac22ecfa0a5559331634"></a>

### [`005dafb4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005da/005dafb4.md) → [`005daff4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005da/005daff4.md) FUN_005daff4

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
      "definition_site": "005daff8",
      "incomplete_value": false,
      "site": "005daffc",
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
            "const:438:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "005dafb8",
      "incomplete_value": false,
      "site": "005dafbc",
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
            "const:368:8"
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
      "005daffc",
      "DATA",
      [
        "storage",
        "00c71368",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "005daffc",
      "DATA",
      [
        "storage",
        "00c71438",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 005dafb8 ["COPY", "tmp:0:8", ["const:368:8"]]
- 005dafb8 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 005dafb8 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 005dafb8 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 005daff8 ["COPY", "tmp:0:8", ["const:438:8"]]
+ 005daff8 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 005daff8 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 005daff8 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-a6c7ee48410f6b791378d81fb0b85053"></a>

### [`005dafcc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005da/005dafcc.md) → [`005db00c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005db/005db00c.md) FUN_005db00c

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
      "site": "005db028",
      "value": [
        "leaf",
        "ram:47ad34:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "005dafe8",
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
      "005db028",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047acf4"
      ]
    ]
  ],
  "added": [
    [
      "005db028",
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
- 005dafe8 ["INT_ADD", "register:40f0:8", ["const:5dafe8:8", "const:4:8"]]
- 005dafe8 ["CALL", null, ["ram:47acf4:8"]]
+ 005db028 ["INT_ADD", "register:40f0:8", ["const:5db028:8", "const:4:8"]]
+ 005db028 ["CALL", null, ["ram:47ad34:8"]]
- 005daff4 ["INT_ADD", "register:40f0:8", ["const:5daff4:8", "const:4:8"]]
- 005daff4 ["CALL", null, ["callee:0047ce14:8"]]
+ 005db034 ["INT_ADD", "register:40f0:8", ["const:5db034:8", "const:4:8"]]
+ 005db034 ["CALL", null, ["callee:0047ce14:8"]]
~~~


<a id="compare-6d075ca260fbba233802367a57957872"></a>

### [`005db038`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005db/005db038.md) → [`005db078`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005db/005db078.md) FUN_005db078

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
      "definition_site": "005db08c",
      "incomplete_value": false,
      "site": "005db090",
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
            "const:4c8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "005db04c",
      "incomplete_value": false,
      "site": "005db050",
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
            "const:3f8:8"
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
      "005db090",
      "DATA",
      [
        "storage",
        "00c713f8",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "005db090",
      "DATA",
      [
        "storage",
        "00c714c8",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 005db044 ["INT_ADD", "register:40f0:8", ["const:5db044:8", "const:4:8"]]
- 005db044 ["CALL", null, ["callee:00c57f60:8"]]
+ 005db084 ["INT_ADD", "register:40f0:8", ["const:5db084:8", "const:4:8"]]
+ 005db084 ["CALL", null, ["callee:00c57f60:8"]]
- 005db04c ["COPY", "tmp:0:8", ["const:3f8:8"]]
- 005db04c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 005db04c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 005db04c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 005db08c ["COPY", "tmp:0:8", ["const:4c8:8"]]
+ 005db08c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 005db08c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 005db08c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


