# v16.0.1 → v16.0.2 · 最優先の変更候補 (53)

[一覧の目次](README.md)

<a id="compare-b0841a0dbb15f6dc7463c4ac8b6f9d21"></a>

### [`008ced74`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008ce/008ced74.md) → [`008cedc8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008ce/008cedc8.md) FUN_008cedc8

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 2件 [`008ce5c4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008ce/008ce5c4.md) [`008ced74`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008ce/008ced74.md) · 呼出先 3件 [`008ced74`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008ce/008ced74.md) [`00c53d00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c53/00c53d00.md) [`00c57e80`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e80.md)
- 新版 呼出元 2件 [`008ce618`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008ce/008ce618.md) [`008cedc8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008ce/008cedc8.md) · 呼出先 3件 [`008cedc8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008ce/008cedc8.md) [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md)

変更の種類 branch_condition_or_target, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_store_alignment

命令の説明率　旧版 93.25% / 新版 93.25%

優先判定に残った影響 `unresolved_branch_alignment` 6件, `unresolved_store_alignment` 3件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:008cee48",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "008cee78"
      ]
    ],
    [
      "unmatched:008cef5c",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "008cef34"
      ]
    ],
    [
      "008cf020",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "unmatched:008cefa8"
      ]
    ]
  ],
  "added": [
    [
      "008cee9c",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "008cee78"
      ]
    ],
    [
      "008cefb0",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "008cef34"
      ]
    ],
    [
      "008cf020",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "008ceffc"
      ]
    ]
  ]
}
~~~


~~~diff
- 008ced74 ["INT_EQUAL", "tmp:0:1", ["register:4020:8", "const:0:8"]]
- 008ced74 ["CBRANCH", null, ["local:b95:8", "tmp:0:1"]]
+ 008cedc8 ["INT_EQUAL", "tmp:0:1", ["register:4020:8", "const:0:8"]]
+ 008cedc8 ["CBRANCH", null, ["local:b96:8", "tmp:0:1"]]
- 008ceda4 ["INT_NOTEQUAL", "tmp:0:1", ["register:100:1", "register:103:1"]]
- 008ceda4 ["BOOL_OR", "tmp:1:1", ["register:101:1", "tmp:0:1"]]
- 008ceda4 ["CBRANCH", null, ["local:b46:8", "tmp:1:1"]]
+ 008cedf8 ["INT_NOTEQUAL", "tmp:0:1", ["register:100:1", "register:103:1"]]
+ 008cedf8 ["BOOL_OR", "tmp:1:1", ["register:101:1", "tmp:0:1"]]
+ 008cedf8 ["CBRANCH", null, ["local:b47:8", "tmp:1:1"]]
- 008cedac ["INT_NOTEQUAL", "tmp:0:1", ["register:100:1", "register:103:1"]]
- 008cedac ["BOOL_OR", "tmp:1:1", ["register:101:1", "tmp:0:1"]]
- 008cedac ["CBRANCH", null, ["local:b46:8", "tmp:1:1"]]
+ 008cee00 ["INT_NOTEQUAL", "tmp:0:1", ["register:100:1", "register:103:1"]]
+ 008cee00 ["BOOL_OR", "tmp:1:1", ["register:101:1", "tmp:0:1"]]
+ 008cee00 ["CBRANCH", null, ["local:b47:8", "tmp:1:1"]]
~~~


<a id="compare-d5d005a6ec1155b04475b460981f40a0"></a>

### [`008cf3f4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008cf/008cf3f4.md) → [`008cf448`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008cf/008cf448.md) FUN_008cf448

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
      "definition_site": "008cf46c",
      "incomplete_value": false,
      "site": "008cf46c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c84000:8"
          ],
          [
            "leaf",
            "const:88:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008cf418",
      "incomplete_value": false,
      "site": "008cf418",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c83000:8"
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
      "008cf46c",
      "DATA",
      [
        "storage",
        "00c83fb8",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "008cf46c",
      "DATA",
      [
        "storage",
        "00c84088",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 008cf408 ["INT_ADD", "register:40f0:8", ["const:8cf408:8", "const:4:8"]]
- 008cf408 ["CALL", null, ["callee:00c57f60:8"]]
+ 008cf45c ["INT_ADD", "register:40f0:8", ["const:8cf45c:8", "const:4:8"]]
+ 008cf45c ["CALL", null, ["callee:00c57f60:8"]]
- 008cf410 ["COPY", "register:4040:8", ["const:c83000:8"]]
+ 008cf464 ["COPY", "register:4040:8", ["const:c84000:8"]]
- 008cf414 ["COPY", "tmp:0:8", ["const:fb8:8"]]
- 008cf414 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 008cf414 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 008cf414 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 008cf468 ["COPY", "tmp:0:8", ["const:88:8"]]
+ 008cf468 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 008cf468 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 008cf468 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-3f97010f689ef930a24dc5706af6d1ed"></a>

### [`008cf444`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008cf/008cf444.md) → [`008cf498`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008cf/008cf498.md) FUN_008cf498

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 5件 [`0047acf4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047a/0047acf4.md) [`0047cdd4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047c/0047cdd4.md) [`008514f8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00851/008514f8.md) [`008bf8c4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008bf/008bf8c4.md) [`008c28bc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008c2/008c28bc.md)
- 新版 呼出元 0件  · 呼出先 5件 [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md) [`0047ce14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047ce14.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md) [`008bf91c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008bf/008bf91c.md) [`008c2914`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008c2/008c2914.md)

変更の種類 call, call_target, constant, operands_and_dependencies

命令の説明率　旧版 91.67% / 新版 91.67%

優先判定に残った影響 `call_target` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_target",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "008cf4b8",
      "value": [
        "leaf",
        "ram:47ad34:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "008cf464",
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
      "site": "008cf4c4",
      "value": [
        "leaf",
        "ram:47ad34:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "008cf470",
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
      "008cf4b8",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047acf4"
      ]
    ],
    [
      "008cf4c4",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047acf4"
      ]
    ]
  ],
  "added": [
    [
      "008cf4b8",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ],
    [
      "008cf4c4",
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
- 008cf464 ["INT_ADD", "register:40f0:8", ["const:8cf464:8", "const:4:8"]]
- 008cf464 ["CALL", null, ["ram:47acf4:8"]]
+ 008cf4b8 ["INT_ADD", "register:40f0:8", ["const:8cf4b8:8", "const:4:8"]]
+ 008cf4b8 ["CALL", null, ["ram:47ad34:8"]]
- 008cf470 ["INT_ADD", "register:40f0:8", ["const:8cf470:8", "const:4:8"]]
- 008cf470 ["CALL", null, ["ram:47acf4:8"]]
+ 008cf4c4 ["INT_ADD", "register:40f0:8", ["const:8cf4c4:8", "const:4:8"]]
+ 008cf4c4 ["CALL", null, ["ram:47ad34:8"]]
- 008cf48c ["INT_ADD", "register:40f0:8", ["const:8cf48c:8", "const:4:8"]]
- 008cf48c ["CALL", null, ["callee:008bf91c:8"]]
+ 008cf4e0 ["INT_ADD", "register:40f0:8", ["const:8cf4e0:8", "const:4:8"]]
+ 008cf4e0 ["CALL", null, ["callee:008bf91c:8"]]
~~~


<a id="compare-fd5932a355784d7eedb2311cb065829f"></a>

### [`008cf4d0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008cf/008cf4d0.md) → [`008cf524`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008cf/008cf524.md) FUN_008cf524

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
      "definition_site": "008cf548",
      "incomplete_value": false,
      "site": "008cf548",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c84000:8"
          ],
          [
            "leaf",
            "const:108:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008cf4f4",
      "incomplete_value": false,
      "site": "008cf4f4",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c84000:8"
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
      "008cf548",
      "DATA",
      [
        "storage",
        "00c84038",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "008cf548",
      "DATA",
      [
        "storage",
        "00c84108",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 008cf4e4 ["INT_ADD", "register:40f0:8", ["const:8cf4e4:8", "const:4:8"]]
- 008cf4e4 ["CALL", null, ["callee:00c57f60:8"]]
+ 008cf538 ["INT_ADD", "register:40f0:8", ["const:8cf538:8", "const:4:8"]]
+ 008cf538 ["CALL", null, ["callee:00c57f60:8"]]
- 008cf4f0 ["COPY", "tmp:0:8", ["const:38:8"]]
- 008cf4f0 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 008cf4f0 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 008cf4f0 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 008cf544 ["COPY", "tmp:0:8", ["const:108:8"]]
+ 008cf544 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 008cf544 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 008cf544 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-7d7fa31b2d8acf11e722695573a74cc0"></a>

### [`008cf6c0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008cf/008cf6c0.md) → [`008cf714`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008cf/008cf714.md) FUN_008cf714

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
      "definition_site": "008cf728",
      "incomplete_value": false,
      "site": "008cf72c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c84000:8"
          ],
          [
            "leaf",
            "const:188:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008cf6d4",
      "incomplete_value": false,
      "site": "008cf6d8",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c84000:8"
          ],
          [
            "leaf",
            "const:b8:8"
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
      "008cf72c",
      "DATA",
      [
        "storage",
        "00c840b8",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "008cf72c",
      "DATA",
      [
        "storage",
        "00c84188",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 008cf6cc ["INT_ADD", "register:40f0:8", ["const:8cf6cc:8", "const:4:8"]]
- 008cf6cc ["CALL", null, ["callee:00c57f60:8"]]
+ 008cf720 ["INT_ADD", "register:40f0:8", ["const:8cf720:8", "const:4:8"]]
+ 008cf720 ["CALL", null, ["callee:00c57f60:8"]]
- 008cf6d4 ["COPY", "tmp:0:8", ["const:b8:8"]]
- 008cf6d4 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 008cf6d4 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 008cf6d4 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 008cf728 ["COPY", "tmp:0:8", ["const:188:8"]]
+ 008cf728 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 008cf728 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 008cf728 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-6c4044a9bdaa7dc991d4f801d30f0a03"></a>

### [`008cf6fc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008cf/008cf6fc.md) → [`008cf750`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008cf/008cf750.md) FUN_008cf750

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 4件 [`0047acf4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047a/0047acf4.md) [`0047cdd4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047c/0047cdd4.md) [`008514f8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00851/008514f8.md) [`008c28bc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008c2/008c28bc.md)
- 新版 呼出元 0件  · 呼出先 4件 [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md) [`0047ce14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047ce14.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md) [`008c2914`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008c2/008c2914.md)

変更の種類 call, call_target, constant, operands_and_dependencies

命令の説明率　旧版 92.31% / 新版 92.31%

優先判定に残った影響 `call_target` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_target",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "008cf770",
      "value": [
        "leaf",
        "ram:47ad34:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "008cf71c",
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
      "site": "008cf77c",
      "value": [
        "leaf",
        "ram:47ad34:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "008cf728",
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
      "008cf770",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047acf4"
      ]
    ],
    [
      "008cf77c",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047acf4"
      ]
    ]
  ],
  "added": [
    [
      "008cf770",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ],
    [
      "008cf77c",
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
- 008cf71c ["INT_ADD", "register:40f0:8", ["const:8cf71c:8", "const:4:8"]]
- 008cf71c ["CALL", null, ["ram:47acf4:8"]]
+ 008cf770 ["INT_ADD", "register:40f0:8", ["const:8cf770:8", "const:4:8"]]
+ 008cf770 ["CALL", null, ["ram:47ad34:8"]]
- 008cf728 ["INT_ADD", "register:40f0:8", ["const:8cf728:8", "const:4:8"]]
- 008cf728 ["CALL", null, ["ram:47acf4:8"]]
+ 008cf77c ["INT_ADD", "register:40f0:8", ["const:8cf77c:8", "const:4:8"]]
+ 008cf77c ["CALL", null, ["ram:47ad34:8"]]
- 008cf73c ["INT_ADD", "register:40f0:8", ["const:8cf73c:8", "const:4:8"]]
- 008cf73c ["CALL", null, ["callee:00851550:8"]]
+ 008cf790 ["INT_ADD", "register:40f0:8", ["const:8cf790:8", "const:4:8"]]
+ 008cf790 ["CALL", null, ["callee:00851550:8"]]
~~~


<a id="compare-eaddba3f1a26334a5795a728e086e00d"></a>

### [`008cf790`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008cf/008cf790.md) → [`008cf7e4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008cf/008cf7e4.md) FUN_008cf7e4

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
      "definition_site": "008cf7f8",
      "incomplete_value": false,
      "site": "008cf7fc",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c84000:8"
          ],
          [
            "leaf",
            "const:208:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008cf7a4",
      "incomplete_value": false,
      "site": "008cf7a8",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c84000:8"
          ],
          [
            "leaf",
            "const:138:8"
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
      "008cf7fc",
      "DATA",
      [
        "storage",
        "00c84138",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "008cf7fc",
      "DATA",
      [
        "storage",
        "00c84208",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 008cf79c ["INT_ADD", "register:40f0:8", ["const:8cf79c:8", "const:4:8"]]
- 008cf79c ["CALL", null, ["callee:00c57f60:8"]]
+ 008cf7f0 ["INT_ADD", "register:40f0:8", ["const:8cf7f0:8", "const:4:8"]]
+ 008cf7f0 ["CALL", null, ["callee:00c57f60:8"]]
- 008cf7a4 ["COPY", "tmp:0:8", ["const:138:8"]]
- 008cf7a4 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 008cf7a4 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 008cf7a4 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 008cf7f8 ["COPY", "tmp:0:8", ["const:208:8"]]
+ 008cf7f8 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 008cf7f8 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 008cf7f8 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-8a3a2b96c9b7d1adf72ea3c6da7a893d"></a>

### [`008cf7cc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008cf/008cf7cc.md) → [`008cf820`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008cf/008cf820.md) FUN_008cf820

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
      "site": "008cf83c",
      "value": [
        "leaf",
        "ram:47ad34:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "008cf7e8",
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
      "008cf83c",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047acf4"
      ]
    ]
  ],
  "added": [
    [
      "008cf83c",
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
- 008cf7e8 ["INT_ADD", "register:40f0:8", ["const:8cf7e8:8", "const:4:8"]]
- 008cf7e8 ["CALL", null, ["ram:47acf4:8"]]
+ 008cf83c ["INT_ADD", "register:40f0:8", ["const:8cf83c:8", "const:4:8"]]
+ 008cf83c ["CALL", null, ["ram:47ad34:8"]]
- 008cf7f4 ["INT_ADD", "register:40f0:8", ["const:8cf7f4:8", "const:4:8"]]
- 008cf7f4 ["CALL", null, ["callee:0047ce14:8"]]
+ 008cf848 ["INT_ADD", "register:40f0:8", ["const:8cf848:8", "const:4:8"]]
+ 008cf848 ["CALL", null, ["callee:0047ce14:8"]]
~~~


<a id="compare-86278319b90ffd6cdc2c90946774736b"></a>

### [`008cf838`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008cf/008cf838.md) → [`008cf88c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008cf/008cf88c.md) FUN_008cf88c

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
      "definition_site": "008cf8a0",
      "incomplete_value": false,
      "site": "008cf8a4",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c84000:8"
          ],
          [
            "leaf",
            "const:288:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008cf84c",
      "incomplete_value": false,
      "site": "008cf850",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c84000:8"
          ],
          [
            "leaf",
            "const:1b8:8"
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
      "008cf8a4",
      "DATA",
      [
        "storage",
        "00c841b8",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "008cf8a4",
      "DATA",
      [
        "storage",
        "00c84288",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 008cf844 ["INT_ADD", "register:40f0:8", ["const:8cf844:8", "const:4:8"]]
- 008cf844 ["CALL", null, ["callee:00c57f60:8"]]
+ 008cf898 ["INT_ADD", "register:40f0:8", ["const:8cf898:8", "const:4:8"]]
+ 008cf898 ["CALL", null, ["callee:00c57f60:8"]]
- 008cf84c ["COPY", "tmp:0:8", ["const:1b8:8"]]
- 008cf84c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 008cf84c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 008cf84c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 008cf8a0 ["COPY", "tmp:0:8", ["const:288:8"]]
+ 008cf8a0 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 008cf8a0 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 008cf8a0 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-9b6463a1793a1199fd9a1beba728084f"></a>

### [`008cf874`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008cf/008cf874.md) → [`008cf8c8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008cf/008cf8c8.md) FUN_008cf8c8

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
      "site": "008cf8e4",
      "value": [
        "leaf",
        "ram:47ad34:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "008cf890",
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
      "008cf8e4",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047acf4"
      ]
    ]
  ],
  "added": [
    [
      "008cf8e4",
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
- 008cf890 ["INT_ADD", "register:40f0:8", ["const:8cf890:8", "const:4:8"]]
- 008cf890 ["CALL", null, ["ram:47acf4:8"]]
+ 008cf8e4 ["INT_ADD", "register:40f0:8", ["const:8cf8e4:8", "const:4:8"]]
+ 008cf8e4 ["CALL", null, ["ram:47ad34:8"]]
- 008cf89c ["INT_ADD", "register:40f0:8", ["const:8cf89c:8", "const:4:8"]]
- 008cf89c ["CALL", null, ["callee:0047ce14:8"]]
+ 008cf8f0 ["INT_ADD", "register:40f0:8", ["const:8cf8f0:8", "const:4:8"]]
+ 008cf8f0 ["CALL", null, ["callee:0047ce14:8"]]
~~~


<a id="compare-5d9a5825904d537f99f3b7884d309cdd"></a>

### [`008cf8e0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008cf/008cf8e0.md) → [`008cf934`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008cf/008cf934.md) FUN_008cf934

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
      "definition_site": "008cf948",
      "incomplete_value": false,
      "site": "008cf94c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c84000:8"
          ],
          [
            "leaf",
            "const:308:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008cf8f4",
      "incomplete_value": false,
      "site": "008cf8f8",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c84000:8"
          ],
          [
            "leaf",
            "const:238:8"
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
      "008cf94c",
      "DATA",
      [
        "storage",
        "00c84238",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "008cf94c",
      "DATA",
      [
        "storage",
        "00c84308",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 008cf8ec ["INT_ADD", "register:40f0:8", ["const:8cf8ec:8", "const:4:8"]]
- 008cf8ec ["CALL", null, ["callee:00c57f60:8"]]
+ 008cf940 ["INT_ADD", "register:40f0:8", ["const:8cf940:8", "const:4:8"]]
+ 008cf940 ["CALL", null, ["callee:00c57f60:8"]]
- 008cf8f4 ["COPY", "tmp:0:8", ["const:238:8"]]
- 008cf8f4 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 008cf8f4 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 008cf8f4 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 008cf948 ["COPY", "tmp:0:8", ["const:308:8"]]
+ 008cf948 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 008cf948 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 008cf948 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-8f0efc6c5fba5ba5220db4d9c5852818"></a>

### [`008cf91c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008cf/008cf91c.md) → [`008cf970`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008cf/008cf970.md) FUN_008cf970

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 10件 [`0047acf4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047a/0047acf4.md) [`0047cdd4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047c/0047cdd4.md) [`008514f8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00851/008514f8.md) [`008b9178`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008b9/008b9178.md) [`008c28bc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008c2/008c28bc.md)
- 新版 呼出元 0件  · 呼出先 10件 [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md) [`0047ce14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047ce14.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md) [`008b91d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b9/008b91d0.md) [`008c2914`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008c2/008c2914.md)

変更の種類 call, call_target, constant, operands_and_dependencies, store_value

命令の説明率　旧版 97.03% / 新版 97.03%

優先判定に残った影響 `call_target` 1件, `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "008cfa94",
      "incomplete_value": false,
      "site": "008cfa9c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c84000:8"
          ],
          [
            "leaf",
            "const:378:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008cfa40",
      "incomplete_value": false,
      "site": "008cfa48",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c84000:8"
          ],
          [
            "leaf",
            "const:2a8:8"
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
      "site": "008cf9a8",
      "value": [
        "leaf",
        "ram:47ad34:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "008cf954",
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
      "008cf9a8",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047acf4"
      ]
    ],
    [
      "008cfa9c",
      "DATA",
      [
        "storage",
        "00c842a8",
        null,
        "undefined *"
      ]
    ],
    [
      "008cfad8",
      "READ",
      [
        "storage",
        "00c842c8",
        null,
        "pointer"
      ]
    ]
  ],
  "added": [
    [
      "008cf9a8",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ],
    [
      "008cfa30",
      "DATA",
      [
        "storage",
        "0044deac",
        null,
        null
      ]
    ],
    [
      "008cfa60",
      "DATA",
      [
        "storage",
        "0044deac",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 008cf954 ["INT_ADD", "register:40f0:8", ["const:8cf954:8", "const:4:8"]]
- 008cf954 ["CALL", null, ["ram:47acf4:8"]]
+ 008cf9a8 ["INT_ADD", "register:40f0:8", ["const:8cf9a8:8", "const:4:8"]]
+ 008cf9a8 ["CALL", null, ["ram:47ad34:8"]]
- 008cf960 ["INT_ADD", "register:40f0:8", ["const:8cf960:8", "const:4:8"]]
- 008cf960 ["CALL", null, ["callee:0047ce14:8"]]
+ 008cf9b4 ["INT_ADD", "register:40f0:8", ["const:8cf9b4:8", "const:4:8"]]
+ 008cf9b4 ["CALL", null, ["callee:0047ce14:8"]]
- 008cf964 ["INT_ADD", "register:40f0:8", ["const:8cf964:8", "const:4:8"]]
- 008cf964 ["CALL", null, ["callee:00851550:8"]]
+ 008cf9b8 ["INT_ADD", "register:40f0:8", ["const:8cf9b8:8", "const:4:8"]]
+ 008cf9b8 ["CALL", null, ["callee:00851550:8"]]
~~~


<a id="compare-e020fd1b156136c485770a3fd9d297c3"></a>

### [`008cfb28`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008cf/008cfb28.md) → [`008cfb7c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008cf/008cfb7c.md) FUN_008cfb7c

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
      "definition_site": "008cfb90",
      "incomplete_value": false,
      "site": "008cfb94",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c84000:8"
          ],
          [
            "leaf",
            "const:378:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008cfb3c",
      "incomplete_value": false,
      "site": "008cfb40",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c84000:8"
          ],
          [
            "leaf",
            "const:2a8:8"
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
      "008cfb94",
      "DATA",
      [
        "storage",
        "00c842a8",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "008cfb94",
      "DATA",
      [
        "storage",
        "00c84378",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 008cfb34 ["INT_ADD", "register:40f0:8", ["const:8cfb34:8", "const:4:8"]]
- 008cfb34 ["CALL", null, ["callee:00c57f60:8"]]
+ 008cfb88 ["INT_ADD", "register:40f0:8", ["const:8cfb88:8", "const:4:8"]]
+ 008cfb88 ["CALL", null, ["callee:00c57f60:8"]]
- 008cfb3c ["COPY", "tmp:0:8", ["const:2a8:8"]]
- 008cfb3c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 008cfb3c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 008cfb3c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 008cfb90 ["COPY", "tmp:0:8", ["const:378:8"]]
+ 008cfb90 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 008cfb90 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 008cfb90 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-b92aa5b5b88bc363df0c6135550c7eed"></a>

### [`008cfb4c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008cf/008cfb4c.md) → [`008cfba0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008cf/008cfba0.md) FUN_008cfba0

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
      "definition_site": "008cfba4",
      "incomplete_value": false,
      "site": "008cfba8",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c84000:8"
          ],
          [
            "leaf",
            "const:378:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008cfb50",
      "incomplete_value": false,
      "site": "008cfb54",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c84000:8"
          ],
          [
            "leaf",
            "const:2a8:8"
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
      "008cfba8",
      "DATA",
      [
        "storage",
        "00c842a8",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "008cfba8",
      "DATA",
      [
        "storage",
        "00c84378",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 008cfb50 ["COPY", "tmp:0:8", ["const:2a8:8"]]
- 008cfb50 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 008cfb50 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 008cfb50 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 008cfba4 ["COPY", "tmp:0:8", ["const:378:8"]]
+ 008cfba4 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 008cfba4 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 008cfba4 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-e57a68ccc5416f399f6f91d818bba5fe"></a>

### [`008cfc1c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008cf/008cfc1c.md) → [`008cfc70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008cf/008cfc70.md) FUN_008cfc70

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
      "definition_site": "008cfc7c",
      "incomplete_value": false,
      "site": "008cfc80",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c84000:8"
          ],
          [
            "leaf",
            "const:408:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008cfc28",
      "incomplete_value": false,
      "site": "008cfc2c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c84000:8"
          ],
          [
            "leaf",
            "const:338:8"
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
      "008cfc80",
      "DATA",
      [
        "storage",
        "00c84338",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "008cfc80",
      "DATA",
      [
        "storage",
        "00c84408",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 008cfc28 ["COPY", "tmp:0:8", ["const:338:8"]]
- 008cfc28 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 008cfc28 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 008cfc28 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 008cfc7c ["COPY", "tmp:0:8", ["const:408:8"]]
+ 008cfc7c ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 008cfc7c ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 008cfc7c ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
~~~


<a id="compare-e79ee354097a19679c255a1c3fa772b3"></a>

### [`008cfc40`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008cf/008cfc40.md) → [`008cfc94`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008cf/008cfc94.md) FUN_008cfc94

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
      "definition_site": "008cfc9c",
      "incomplete_value": false,
      "site": "008cfca0",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c84000:8"
          ],
          [
            "leaf",
            "const:408:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008cfc48",
      "incomplete_value": false,
      "site": "008cfc4c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c84000:8"
          ],
          [
            "leaf",
            "const:338:8"
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
      "008cfca0",
      "DATA",
      [
        "storage",
        "00c84338",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "008cfca0",
      "DATA",
      [
        "storage",
        "00c84408",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 008cfc48 ["COPY", "tmp:0:8", ["const:338:8"]]
- 008cfc48 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 008cfc48 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 008cfc48 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 008cfc9c ["COPY", "tmp:0:8", ["const:408:8"]]
+ 008cfc9c ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 008cfc9c ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 008cfc9c ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
- 008cfc6c ["INT_ADD", "register:40f0:8", ["const:8cfc6c:8", "const:4:8"]]
- 008cfc6c ["CALL", null, ["callee:00c57f80:8"]]
+ 008cfcc0 ["INT_ADD", "register:40f0:8", ["const:8cfcc0:8", "const:4:8"]]
+ 008cfcc0 ["CALL", null, ["callee:00c57f80:8"]]
~~~


<a id="compare-c6fa77b8ecda5925705cd328897eb3d1"></a>

### [`008cfc80`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008cf/008cfc80.md) → [`008cfcd4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008cf/008cfcd4.md) FUN_008cfcd4

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
      "definition_site": "008cfcf4",
      "incomplete_value": false,
      "site": "008cfcfc",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c84000:8"
          ],
          [
            "leaf",
            "const:408:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008cfca0",
      "incomplete_value": false,
      "site": "008cfca8",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c84000:8"
          ],
          [
            "leaf",
            "const:338:8"
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
      "008cfcfc",
      "DATA",
      [
        "storage",
        "00c84338",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "008cfcfc",
      "DATA",
      [
        "storage",
        "00c84408",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 008cfc98 ["INT_ADD", "register:40f0:8", ["const:8cfc98:8", "const:4:8"]]
- 008cfc98 ["CALL", null, ["callee:00c57f60:8"]]
+ 008cfcec ["INT_ADD", "register:40f0:8", ["const:8cfcec:8", "const:4:8"]]
+ 008cfcec ["CALL", null, ["callee:00c57f60:8"]]
- 008cfca0 ["COPY", "tmp:0:8", ["const:338:8"]]
- 008cfca0 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 008cfca0 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 008cfca0 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 008cfcf4 ["COPY", "tmp:0:8", ["const:408:8"]]
+ 008cfcf4 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 008cfcf4 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 008cfcf4 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 008cfcd4 ["INT_ADD", "register:40f0:8", ["const:8cfcd4:8", "const:4:8"]]
- 008cfcd4 ["CALL", null, ["callee:00c57f60:8"]]
+ 008cfd28 ["INT_ADD", "register:40f0:8", ["const:8cfd28:8", "const:4:8"]]
+ 008cfd28 ["CALL", null, ["callee:00c57f60:8"]]
~~~


<a id="compare-df67f9c383a91020d2c54aac1591e1fe"></a>

### [`008cfd38`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008cf/008cfd38.md) → [`008cfd8c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008cf/008cfd8c.md) FUN_008cfd8c

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `bounded` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 3件 [`00470840`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00470/00470840.md) [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md) [`00c58000`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58000.md)
- 新版 呼出元 0件  · 呼出先 3件 [`00470880`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00470/00470880.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c580d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c580d0.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 93.75% / 新版 93.75%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "008cfda0",
      "incomplete_value": false,
      "site": "008cfda8",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c84000:8"
          ],
          [
            "leaf",
            "const:408:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008cfd4c",
      "incomplete_value": false,
      "site": "008cfd54",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c84000:8"
          ],
          [
            "leaf",
            "const:338:8"
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
      "008cfda8",
      "DATA",
      [
        "storage",
        "00c84338",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "008cfda8",
      "DATA",
      [
        "storage",
        "00c84408",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 008cfd4c ["COPY", "tmp:0:8", ["const:338:8"]]
- 008cfd4c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 008cfd4c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 008cfd4c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 008cfda0 ["COPY", "tmp:0:8", ["const:408:8"]]
+ 008cfda0 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 008cfda0 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 008cfda0 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 008cfd80 ["INT_ADD", "register:40f0:8", ["const:8cfd80:8", "const:4:8"]]
- 008cfd80 ["CALL", null, ["callee:00c57f60:8"]]
+ 008cfdd4 ["INT_ADD", "register:40f0:8", ["const:8cfdd4:8", "const:4:8"]]
+ 008cfdd4 ["CALL", null, ["callee:00c57f60:8"]]
- 008cfd98 ["INT_ADD", "register:40f0:8", ["const:8cfd98:8", "const:4:8"]]
- 008cfd98 ["CALL", null, ["callee:00c580d0:8"]]
+ 008cfdec ["INT_ADD", "register:40f0:8", ["const:8cfdec:8", "const:4:8"]]
+ 008cfdec ["CALL", null, ["callee:00c580d0:8"]]
~~~


<a id="compare-b9ad4bf4108b8bca7c7f2c4d2ef5114e"></a>

### [`008d053c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008d0/008d053c.md) → [`008d0590`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008d0/008d0590.md) FUN_008d0590

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
      "definition_site": "008d05a4",
      "incomplete_value": false,
      "site": "008d05a8",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c84000:8"
          ],
          [
            "leaf",
            "const:488:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008d0550",
      "incomplete_value": false,
      "site": "008d0554",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c84000:8"
          ],
          [
            "leaf",
            "const:3b8:8"
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
      "008d05a8",
      "DATA",
      [
        "storage",
        "00c843b8",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "008d05a8",
      "DATA",
      [
        "storage",
        "00c84488",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 008d0548 ["INT_ADD", "register:40f0:8", ["const:8d0548:8", "const:4:8"]]
- 008d0548 ["CALL", null, ["callee:00c57f60:8"]]
+ 008d059c ["INT_ADD", "register:40f0:8", ["const:8d059c:8", "const:4:8"]]
+ 008d059c ["CALL", null, ["callee:00c57f60:8"]]
- 008d0550 ["COPY", "tmp:0:8", ["const:3b8:8"]]
- 008d0550 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 008d0550 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 008d0550 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 008d05a4 ["COPY", "tmp:0:8", ["const:488:8"]]
+ 008d05a4 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 008d05a4 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 008d05a4 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-9e7f6cdfcc0fbacf07b44a70d124f95e"></a>

### [`008d05b8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008d0/008d05b8.md) → [`008d060c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008d0/008d060c.md) FUN_008d060c

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
      "definition_site": "008d0620",
      "incomplete_value": false,
      "site": "008d0624",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c84000:8"
          ],
          [
            "leaf",
            "const:508:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008d05cc",
      "incomplete_value": false,
      "site": "008d05d0",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c84000:8"
          ],
          [
            "leaf",
            "const:438:8"
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
      "008d0624",
      "DATA",
      [
        "storage",
        "00c84438",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "008d0624",
      "DATA",
      [
        "storage",
        "00c84508",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 008d05c4 ["INT_ADD", "register:40f0:8", ["const:8d05c4:8", "const:4:8"]]
- 008d05c4 ["CALL", null, ["callee:00c57f60:8"]]
+ 008d0618 ["INT_ADD", "register:40f0:8", ["const:8d0618:8", "const:4:8"]]
+ 008d0618 ["CALL", null, ["callee:00c57f60:8"]]
- 008d05cc ["COPY", "tmp:0:8", ["const:438:8"]]
- 008d05cc ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 008d05cc ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 008d05cc ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 008d0620 ["COPY", "tmp:0:8", ["const:508:8"]]
+ 008d0620 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 008d0620 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 008d0620 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-0d4f464fd842cf63a0f2bcf75442b0c7"></a>

### [`008d05f4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008d0/008d05f4.md) → [`008d0648`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008d0/008d0648.md) FUN_008d0648

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 1件 [`008514f8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00851/008514f8.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)

変更の種類 constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment

命令の説明率　旧版 91.11% / 新版 91.11%

アドレスに依存する影響 `unresolved_branch_alignment` 1件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:008d061c",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "008d06dc"
      ]
    ]
  ],
  "added": [
    [
      "008d0670",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "008d06dc"
      ]
    ]
  ]
}
~~~


~~~diff
- 008d0608 ["INT_ADD", "register:40f0:8", ["const:8d0608:8", "const:4:8"]]
- 008d0608 ["CALL", null, ["callee:00851550:8"]]
+ 008d065c ["INT_ADD", "register:40f0:8", ["const:8d065c:8", "const:4:8"]]
+ 008d065c ["CALL", null, ["callee:00851550:8"]]
- 008d061c ["CBRANCH", null, ["local:b6:8", "register:101:1"]]
- 008d0620 ["INT_ADD", "register:40f0:8", ["const:8d0620:8", "const:4:8"]]
- 008d0620 ["CALL", null, ["callee:00851550:8"]]
+ 008d0674 ["INT_ADD", "register:40f0:8", ["const:8d0674:8", "const:4:8"]]
+ 008d0674 ["CALL", null, ["callee:00851550:8"]]
~~~


<a id="compare-815004dd5f30b5b313b1aeba53bb567f"></a>

### [`008d06d4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008d0/008d06d4.md) → [`008d0728`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008d0/008d0728.md) FUN_008d0728

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
      "definition_site": "008d073c",
      "incomplete_value": false,
      "site": "008d0740",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c84000:8"
          ],
          [
            "leaf",
            "const:588:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008d06e8",
      "incomplete_value": false,
      "site": "008d06ec",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c84000:8"
          ],
          [
            "leaf",
            "const:4b8:8"
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
      "008d0740",
      "DATA",
      [
        "storage",
        "00c844b8",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "008d0740",
      "DATA",
      [
        "storage",
        "00c84588",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 008d06e0 ["INT_ADD", "register:40f0:8", ["const:8d06e0:8", "const:4:8"]]
- 008d06e0 ["CALL", null, ["callee:00c57f60:8"]]
+ 008d0734 ["INT_ADD", "register:40f0:8", ["const:8d0734:8", "const:4:8"]]
+ 008d0734 ["CALL", null, ["callee:00c57f60:8"]]
- 008d06e8 ["COPY", "tmp:0:8", ["const:4b8:8"]]
- 008d06e8 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 008d06e8 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 008d06e8 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 008d073c ["COPY", "tmp:0:8", ["const:588:8"]]
+ 008d073c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 008d073c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 008d073c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-1602ac010498b01886d9e590e0dfca39"></a>

### [`008d0710`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008d0/008d0710.md) → [`008d0764`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008d0/008d0764.md) FUN_008d0764

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 6件 [`008514f8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00851/008514f8.md) [`008c28bc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008c2/008c28bc.md) [`008d0858`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008d0/008d0858.md) [`008d085c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008d0/008d085c.md) [`00acabd4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00aca/00acabd4.md)
- 新版 呼出元 0件  · 呼出先 6件 [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md) [`008c2914`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008c2/008c2914.md) [`008d08ac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008d0/008d08ac.md) [`008d08b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008d0/008d08b0.md) [`00acac44`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00aca/00acac44.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_store_alignment

命令の説明率　旧版 82.05% / 新版 82.05%

優先判定に残った影響 `call_argument_candidate` 1件, `unresolved_store_alignment` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "008d0754",
      "incomplete_value": true,
      "site": "008d0758",
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
            "const:d90:8"
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
      "unmatched:008d0744",
      "DATA",
      [
        "storage",
        "00c84528",
        null,
        "undefined *"
      ]
    ],
    [
      "unmatched:008d0744",
      "WRITE",
      [
        "storage",
        "Stack[-0x60]",
        null,
        null
      ]
    ],
    [
      "unmatched:008d0748",
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
      "008d0798",
      "DATA",
      [
        "storage",
        "00c845f8",
        null,
        "undefined *"
      ]
    ],
    [
      "008d0798",
      "WRITE",
      [
        "storage",
        "Stack[-0x60]",
        null,
        null
      ]
    ],
    [
      "008d079c",
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
- 008d0758 ["INT_ADD", "register:40f0:8", ["const:8d0758:8", "const:4:8"]]
- 008d0758 ["CALL", null, ["callee:00acac44:8"]]
+ 008d07ac ["INT_ADD", "register:40f0:8", ["const:8d07ac:8", "const:4:8"]]
+ 008d07ac ["CALL", null, ["callee:00acac44:8"]]
- 008d072c ["INT_ADD", "register:40f0:8", ["const:8d072c:8", "const:4:8"]]
- 008d072c ["CALL", null, ["callee:00851550:8"]]
+ 008d0780 ["INT_ADD", "register:40f0:8", ["const:8d0780:8", "const:4:8"]]
+ 008d0780 ["CALL", null, ["callee:00851550:8"]]
- 008d0730 ["INT_ADD", "register:40f0:8", ["const:8d0730:8", "const:4:8"]]
- 008d0730 ["CALL", null, ["callee:008c2914:8"]]
+ 008d0784 ["INT_ADD", "register:40f0:8", ["const:8d0784:8", "const:4:8"]]
+ 008d0784 ["CALL", null, ["callee:008c2914:8"]]
~~~


<a id="compare-d157caee8ec446fd4964aa98fde6b58c"></a>

### [`008d0824`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008d0/008d0824.md) → [`008d0878`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008d0/008d0878.md) FUN_008d0878

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
      "definition_site": "008d088c",
      "incomplete_value": false,
      "site": "008d0890",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c84000:8"
          ],
          [
            "leaf",
            "const:5f8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008d0838",
      "incomplete_value": false,
      "site": "008d083c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c84000:8"
          ],
          [
            "leaf",
            "const:528:8"
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
      "008d0890",
      "DATA",
      [
        "storage",
        "00c84528",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "008d0890",
      "DATA",
      [
        "storage",
        "00c845f8",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 008d0830 ["INT_ADD", "register:40f0:8", ["const:8d0830:8", "const:4:8"]]
- 008d0830 ["CALL", null, ["callee:00c57f60:8"]]
+ 008d0884 ["INT_ADD", "register:40f0:8", ["const:8d0884:8", "const:4:8"]]
+ 008d0884 ["CALL", null, ["callee:00c57f60:8"]]
- 008d0838 ["COPY", "tmp:0:8", ["const:528:8"]]
- 008d0838 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 008d0838 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 008d0838 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 008d088c ["COPY", "tmp:0:8", ["const:5f8:8"]]
+ 008d088c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 008d088c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 008d088c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-c67a238ee15671f730a1a639a16cbf78"></a>

### [`008d0848`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008d0/008d0848.md) → [`008d089c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008d0/008d089c.md) FUN_008d089c

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 0件 
- 新版 呼出元 0件  · 呼出先 0件 

変更の種類 comparison, comparison_count, constant, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_store_alignment

命令の説明率　旧版 50.00% / 新版 50.00%

優先判定に残った影響 `unresolved_store_alignment` 1件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:008d0850",
      "DATA",
      [
        "storage",
        "00c84528",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "008d08a4",
      "DATA",
      [
        "storage",
        "00c845f8",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 008d084c ["COPY", "tmp:0:8", ["const:528:8"]]
- 008d084c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 008d084c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 008d084c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 008d0850 ["COPY", "tmp:0:8", ["register:4008:8"]]
- 008d0850 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4040:8"]]
+ 008d08a0 ["COPY", "tmp:0:8", ["const:5f8:8"]]
+ 008d08a0 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 008d08a0 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 008d08a0 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-e677f77574c9a0c5a4f634f1af618854"></a>

### [`008d0928`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008d0/008d0928.md) → [`008d097c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008d0/008d097c.md) _INIT_171

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 5件 [`0043ae70`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043a/0043ae70.md) [`0043b7f8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043b7f8.md) [`00c57e30`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e30.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md)
- 新版 呼出元 0件  · 呼出先 5件 [`0043aeb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043a/0043aeb0.md) [`0043b838`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b838.md) [`00c57f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f00.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)

変更の種類 call_argument_candidate, comparison, comparison_count, constant, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, store_value, unresolved_store_alignment

命令の説明率　旧版 85.31% / 新版 85.31%

優先判定に残った影響 `call_argument_candidate` 3件, `store_value` 3件, `unresolved_store_alignment` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "008d09b8",
      "incomplete_value": true,
      "site": "008d09d4",
      "value": [
        "LOAD",
        "16",
        [
          [
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
      "definition_site": "008d0964",
      "incomplete_value": true,
      "site": "008d0980",
      "value": [
        "LOAD",
        "16",
        [
          [
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
      "definition_site": "008d09dc",
      "incomplete_value": true,
      "site": "008d09f8",
      "value": [
        "LOAD",
        "16",
        [
          [
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
      "definition_site": "008d0988",
      "incomplete_value": true,
      "site": "008d09a4",
      "value": [
        "LOAD",
        "16",
        [
          [
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
      "definition_site": "008d0a58",
      "incomplete_value": true,
      "site": "008d0a74",
      "value": [
        "LOAD",
        "16",
        [
          [
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
      "definition_site": "008d0a04",
      "incomplete_value": true,
      "site": "008d0a20",
      "value": [
        "LOAD",
        "16",
        [
          [
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
      "008d09b8",
      "READ",
      [
        "storage",
        "002b7f26",
        null,
        "string"
      ]
    ],
    [
      "008d09dc",
      "READ",
      [
        "storage",
        "002b7f39",
        null,
        "string"
      ]
    ],
    [
      "008d09fc",
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
      "008d09b8",
      "READ",
      [
        "storage",
        "002b7f66",
        null,
        "string"
      ]
    ],
    [
      "008d09dc",
      "READ",
      [
        "storage",
        "002b7f79",
        null,
        "string"
      ]
    ],
    [
      "008d09fc",
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
+ 008d0a20 ["COPY", "tmp:0:4", ["register:4048:4"]]
+ 008d0a20 ["INT_ADD", "tmp:1:8", ["register:8:8", "const:81:8"]]
+ 008d0a20 ["STORE", null, ["const:1b1:8", "tmp:1:8", "tmp:0:2"]]
- 008d0b5c ["INT_ADD", "register:40f0:8", ["const:8d0b5c:8", "const:4:8"]]
- 008d0b5c ["CALL", null, ["callee:00c57f00:8"]]
+ 008d0bb0 ["INT_ADD", "register:40f0:8", ["const:8d0bb0:8", "const:4:8"]]
+ 008d0bb0 ["CALL", null, ["callee:00c57f00:8"]]
- 008d0954 ["COPY", "tmp:0:8", ["const:958:8"]]
- 008d0954 ["INT_CARRY", "register:105:1", ["register:4098:8", "tmp:0:8"]]
- 008d0954 ["INT_SCARRY", "register:106:1", ["register:4098:8", "tmp:0:8"]]
- 008d0954 ["INT_ADD", "tmp:1:8", ["register:4098:8", "tmp:0:8"]]
+ 008d09a8 ["COPY", "tmp:0:8", ["const:a58:8"]]
+ 008d09a8 ["INT_CARRY", "register:105:1", ["register:4098:8", "tmp:0:8"]]
+ 008d09a8 ["INT_SCARRY", "register:106:1", ["register:4098:8", "tmp:0:8"]]
+ 008d09a8 ["INT_ADD", "tmp:1:8", ["register:4098:8", "tmp:0:8"]]
~~~


<a id="compare-14e2c0dcd828f14313eea2a95a3ff8dc"></a>

### [`008d0cb8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008d0/008d0cb8.md) → [`008d0d0c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008d0/008d0d0c.md) FUN_008d0d0c

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`008d1c40`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008d1/008d1c40.md) · 呼出先 20件 [`00447ef4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00447/00447ef4.md) [`0047e60c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047e/0047e60c.md) [`0047e8dc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047e/0047e8dc.md) [`0047edb4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047e/0047edb4.md) [`0048ce54`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0048c/0048ce54.md)
- 新版 呼出元 1件 [`008d1c94`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008d1/008d1c94.md) · 呼出先 20件 [`00447f34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00447/00447f34.md) [`0047e64c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047e/0047e64c.md) [`0047e91c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047e/0047e91c.md) [`0047edf4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047e/0047edf4.md) [`0048ce94`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048c/0048ce94.md)

変更の種類 call, call_argument_candidate, call_target, constant, operands_and_dependencies, store_destination, store_value

命令の説明率　旧版 84.81% / 新版 84.81%

優先判定に残った影響 `call_argument_candidate` 31件, `call_target` 1件, `store_destination` 7件, `store_value` 24件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "008d0d54",
      "incomplete_value": false,
      "site": "008d0d58",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c84000:8"
          ],
          [
            "leaf",
            "const:688:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008d0d00",
      "incomplete_value": false,
      "site": "008d0d04",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c84000:8"
          ],
          [
            "leaf",
            "const:5b8:8"
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
      "definition_site": "008d0e4c",
      "incomplete_value": true,
      "site": "008d0e4c",
      "value": [
        "LOAD",
        "8",
        [
          [
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
      "definition_site": "008d0df8",
      "incomplete_value": true,
      "site": "008d0df8",
      "value": [
        "LOAD",
        "8",
        [
          [
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
    "ordinal": 35,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "008d0e64",
      "incomplete_value": true,
      "site": "008d0e64",
      "value": [
        "LOAD",
        "8",
        [
          [
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
      "definition_site": "008d0e10",
      "incomplete_value": true,
      "site": "008d0e10",
      "value": [
        "LOAD",
        "8",
        [
          [
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
    "ordinal": 37,
    "slot": 2
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "008d0d58",
      "DATA",
      [
        "storage",
        "00c845b8",
        null,
        "undefined *"
      ]
    ],
    [
      "008d0e1c",
      "READ",
      [
        "storage",
        "00ca4f38",
        null,
        "undefined1"
      ]
    ],
    [
      "008d0e3c",
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
      "008d0d58",
      "DATA",
      [
        "storage",
        "00c84688",
        null,
        "undefined *"
      ]
    ],
    [
      "008d0e1c",
      "READ",
      [
        "storage",
        "00ca5038",
        null,
        "undefined1"
      ]
    ],
    [
      "008d0e3c",
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
- 008d0dbc ["INT_ADD", "register:40f0:8", ["const:8d0dbc:8", "const:4:8"]]
- 008d0dbc ["CALL", null, ["callee:00c57f50:8"]]
+ 008d0e10 ["INT_ADD", "register:40f0:8", ["const:8d0e10:8", "const:4:8"]]
+ 008d0e10 ["CALL", null, ["callee:00c57f50:8"]]
- 008d0dc0 ["COPY", "register:40e0:8", ["const:ca4000:8"]]
+ 008d0e14 ["COPY", "register:40e0:8", ["const:ca5000:8"]]
- 008d0e34 ["INT_ADD", "register:40f0:8", ["const:8d0e34:8", "const:4:8"]]
- 008d0e34 ["CALL", null, ["callee:006333b4:8"]]
+ 008d0e88 ["INT_ADD", "register:40f0:8", ["const:8d0e88:8", "const:4:8"]]
+ 008d0e88 ["CALL", null, ["callee:006333b4:8"]]
~~~


<a id="compare-cef86ca1e4aee467ee2cfd36e20934c0"></a>

### [`008d1a28`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008d1/008d1a28.md) → [`008d1a7c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008d1/008d1a7c.md) FUN_008d1a7c

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 2件 [`008d0cb8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008d0/008d0cb8.md) [`00a95ffc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a95/00a95ffc.md) · 呼出先 10件 [`0047e60c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047e/0047e60c.md) [`0047edb4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047e/0047edb4.md) [`00b3cad8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b3c/00b3cad8.md) [`00c53d00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c53/00c53d00.md) [`00c57e30`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e30.md)
- 新版 呼出元 2件 [`008d0d0c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008d0/008d0d0c.md) [`00a9606c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a96/00a9606c.md) · 呼出先 10件 [`0047e64c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047e/0047e64c.md) [`0047edf4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047e/0047edf4.md) [`00b3cb74`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b3c/00b3cb74.md) [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f00.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies, operation_sequence, store_destination, store_value

命令の説明率　旧版 74.78% / 新版 74.78%

優先判定に残った影響 `call_argument_candidate` 6件, `store_destination` 7件, `store_value` 6件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "008d1aa8",
      "incomplete_value": false,
      "site": "008d1ab0",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c84000:8"
          ],
          [
            "leaf",
            "const:6d8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008d1a54",
      "incomplete_value": false,
      "site": "008d1a5c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c84000:8"
          ],
          [
            "leaf",
            "const:608:8"
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
      "definition_site": "008d1af4",
      "incomplete_value": true,
      "site": "008d1af4",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:769:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008d1aa0",
      "incomplete_value": true,
      "site": "008d1aa0",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:7c5:8"
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
      "definition_site": "008d1b0c",
      "incomplete_value": true,
      "site": "008d1b0c",
      "value": [
        "LOAD",
        "8",
        [
          [
            "leaf",
            "const:1b1:8"
          ],
          [
            "INT_ADD",
            "8",
            [
              [
                "leaf",
                "const:2be000:8"
              ],
              [
                "leaf",
                "const:fa8:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008d1ab8",
      "incomplete_value": true,
      "site": "008d1ab8",
      "value": [
        "LOAD",
        "8",
        [
          [
            "leaf",
            "const:1b1:8"
          ],
          [
            "INT_ADD",
            "8",
            [
              [
                "leaf",
                "const:2be000:8"
              ],
              [
                "leaf",
                "const:ffc:8"
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
      "008d1ab0",
      "DATA",
      [
        "storage",
        "00c84608",
        null,
        "pointer"
      ]
    ],
    [
      "008d1ac4",
      "READ",
      [
        "storage",
        "00ca4f38",
        null,
        "undefined1"
      ]
    ],
    [
      "008d1ae4",
      "READ",
      [
        "storage",
        "002ab7c5",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "008d1ab0",
      "DATA",
      [
        "storage",
        "00c846d8",
        null,
        "pointer"
      ]
    ],
    [
      "008d1ac4",
      "READ",
      [
        "storage",
        "00ca5038",
        null,
        "undefined1"
      ]
    ],
    [
      "008d1ae4",
      "READ",
      [
        "storage",
        "002ab769",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 008d1a4c ["INT_ADD", "register:40f0:8", ["const:8d1a4c:8", "const:4:8"]]
- 008d1a4c ["CALL", null, ["callee:00b3cb74:8"]]
+ 008d1aa0 ["INT_ADD", "register:40f0:8", ["const:8d1aa0:8", "const:4:8"]]
+ 008d1aa0 ["CALL", null, ["callee:00b3cb74:8"]]
- 008d1a64 ["COPY", "tmp:0:8", ["const:f38:8"]]
- 008d1a64 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 008d1a64 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 008d1a64 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 008d1ab8 ["COPY", "tmp:0:8", ["const:38:8"]]
+ 008d1ab8 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 008d1ab8 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 008d1ab8 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 008d1ad8 ["INT_ADD", "register:40f0:8", ["const:8d1ad8:8", "const:4:8"]]
- 008d1ad8 ["CALL", null, ["callee:0047e64c:8"]]
+ 008d1b2c ["INT_ADD", "register:40f0:8", ["const:8d1b2c:8", "const:4:8"]]
+ 008d1b2c ["CALL", null, ["callee:0047e64c:8"]]
~~~


<a id="compare-1f16f1a3fee9d1a9d62aa000bc8f01d1"></a>

### [`008d1c40`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008d1/008d1c40.md) → [`008d1c94`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008d1/008d1c94.md) FUN_008d1c94

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00856e2c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00856/00856e2c.md) · 呼出先 16件 [`0048ce84`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0048c/0048ce84.md) [`0066d0dc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0066d/0066d0dc.md) [`008b7994`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008b7/008b7994.md) [`008d0cb8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008d0/008d0cb8.md) [`008d83fc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008d8/008d83fc.md)
- 新版 呼出元 1件 [`00856e84`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00856/00856e84.md) · 呼出先 16件 [`0048cec4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048c/0048cec4.md) [`0066d11c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0066d/0066d11c.md) [`008b79ec`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b7/008b79ec.md) [`008d0d0c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008d0/008d0d0c.md) [`008d8450`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008d8/008d8450.md)

変更の種類 branch_value, call_argument_candidate, constant, operands_and_dependencies, store_destination, store_value

命令の説明率　旧版 86.84% / 新版 86.84%

優先判定に残った影響 `branch_value` 2件, `call_argument_candidate` 2件, `store_destination` 3件, `store_value` 4件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_destination",
    "new": {
      "definition_site": "008d1cd8",
      "incomplete_value": false,
      "site": "008d1cd8",
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
      "definition_site": "008d1c84",
      "incomplete_value": false,
      "site": "008d1c84",
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
    "ordinal": 9,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "008d1cd0",
      "incomplete_value": true,
      "site": "008d1cd8",
      "value": [
        "LOAD",
        "8",
        [
          [
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
      "definition_site": "008d1c7c",
      "incomplete_value": true,
      "site": "008d1c84",
      "value": [
        "LOAD",
        "8",
        [
          [
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
    "ordinal": 9,
    "slot": 2
  },
  {
    "confidence": "bounded",
    "kind": "store_destination",
    "new": {
      "definition_site": "008d1cdc",
      "incomplete_value": false,
      "site": "008d1cdc",
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
      "definition_site": "008d1c88",
      "incomplete_value": false,
      "site": "008d1c88",
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
      "008d1cd0",
      "READ",
      [
        "storage",
        "00ca4978",
        null,
        "undefined8"
      ]
    ],
    [
      "008d1cd4",
      "READ",
      [
        "storage",
        "00ca4968",
        null,
        "undefined8"
      ]
    ],
    [
      "008d1cd8",
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
      "008d1cd0",
      "READ",
      [
        "storage",
        "00ca4a78",
        null,
        "undefined8"
      ]
    ],
    [
      "008d1cd4",
      "READ",
      [
        "storage",
        "00ca4a68",
        null,
        "undefined8"
      ]
    ],
    [
      "008d1cd8",
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
- 008d1c84 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:968:8"]]
- 008d1c84 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4048:8"]]
+ 008d1cd8 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:a68:8"]]
+ 008d1cd8 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4048:8"]]
- 008d1c88 ["INT_ADD", "tmp:0:8", ["register:40a8:8", "const:978:8"]]
- 008d1c88 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4050:8"]]
+ 008d1cdc ["INT_ADD", "tmp:0:8", ["register:40a8:8", "const:a78:8"]]
+ 008d1cdc ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4050:8"]]
- 008d1c8c ["INT_ADD", "register:40f0:8", ["const:8d1c8c:8", "const:4:8"]]
- 008d1c8c ["CALL", null, ["callee:00c57f60:8"]]
+ 008d1ce0 ["INT_ADD", "register:40f0:8", ["const:8d1ce0:8", "const:4:8"]]
+ 008d1ce0 ["CALL", null, ["callee:00c57f60:8"]]
~~~


<a id="compare-65eac82eaa9c7538afaf4a266633354f"></a>

### [`008d1eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008d1/008d1eb0.md) → [`008d1f04`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008d1/008d1f04.md) FUN_008d1f04

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 4件 [`0088c870`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0088c/0088c870.md) [`008ad7a4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008ad/008ad7a4.md) [`008d31f8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008d3/008d31f8.md) [`008d9c04`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008d9/008d9c04.md) · 呼出先 28件 [`0046c9c4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0046c/0046c9c4.md) [`00489f4c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00489/00489f4c.md) [`0048ce84`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0048c/0048ce84.md) [`005d8bc8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005d8/005d8bc8.md) [`008b6f10`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008b6/008b6f10.md)
- 新版 呼出元 4件 [`0088c8c8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0088c/0088c8c8.md) [`008ad7fc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008ad/008ad7fc.md) [`008d324c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008d3/008d324c.md) [`008d9c58`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008d9/008d9c58.md) · 呼出先 28件 [`0046ca04`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046c/0046ca04.md) [`00489f8c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00489/00489f8c.md) [`0048cec4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048c/0048cec4.md) [`005d8c08`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005d8/005d8c08.md) [`008b6f68`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b6/008b6f68.md)

変更の種類 branch_condition_or_target, branch_value, call, call_argument_candidate, call_count, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, operands_and_dependencies, operation_sequence, store_condition, store_value, unresolved_branch_alignment, unresolved_call_alignment, unresolved_return_alignment, unresolved_store_alignment

命令の説明率　旧版 76.16% / 新版 76.16%

優先判定に残った影響 `call_argument_candidate` 7件, `store_condition` 1件, `store_value` 3件, `unresolved_branch_alignment` 18件, `unresolved_call_alignment` 23件, `unresolved_return_alignment` 1件, `unresolved_store_alignment` 23件

アドレスに依存する影響 `branch_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "008d2014",
      "incomplete_value": false,
      "site": "008d2014",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c84000:8"
          ],
          [
            "leaf",
            "const:878:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008d1fc0",
      "incomplete_value": false,
      "site": "008d1fc0",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c84000:8"
          ],
          [
            "leaf",
            "const:7a8:8"
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
      "definition_site": "008d2260",
      "incomplete_value": false,
      "site": "008d2260",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c84000:8"
          ],
          [
            "leaf",
            "const:978:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008d220c",
      "incomplete_value": false,
      "site": "008d220c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c84000:8"
          ],
          [
            "leaf",
            "const:8a8:8"
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
      "definition_site": "008d2478",
      "incomplete_value": false,
      "site": "008d2478",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c84000:8"
          ],
          [
            "leaf",
            "const:9f8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008d2424",
      "incomplete_value": false,
      "site": "008d2424",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c84000:8"
          ],
          [
            "leaf",
            "const:928:8"
          ]
        ]
      ]
    },
    "ordinal": 53,
    "slot": 2
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "008d1f40",
      "READ",
      [
        "storage",
        "00ca4978",
        null,
        "undefined8"
      ]
    ],
    [
      "008d1f4c",
      "PARAM",
      [
        "storage",
        "00c65e58",
        null,
        "pointer __((offset(0x10)))"
      ]
    ],
    [
      "008d1f54",
      "PARAM",
      [
        "storage",
        "00c845e0",
        null,
        "pointer __((offset(0x10)))"
      ]
    ]
  ],
  "added": [
    [
      "008d1f40",
      "READ",
      [
        "storage",
        "00ca4a78",
        null,
        "undefined8"
      ]
    ],
    [
      "008d1f4c",
      "PARAM",
      [
        "storage",
        "00c65f28",
        null,
        "pointer __((offset(0x10)))"
      ]
    ],
    [
      "008d1f54",
      "PARAM",
      [
        "storage",
        "00c846b0",
        null,
        "pointer __((offset(0x10)))"
      ]
    ]
  ]
}
~~~


~~~diff
- 008d1f0c ["INT_ADD", "register:40f0:8", ["const:8d1f0c:8", "const:4:8"]]
- 008d1f0c ["CALL", null, ["callee:00c586e0:8"]]
+ 008d1f60 ["INT_ADD", "register:40f0:8", ["const:8d1f60:8", "const:4:8"]]
+ 008d1f60 ["CALL", null, ["callee:00c586e0:8"]]
- 008d1f60 ["INT_ADD", "register:40f0:8", ["const:8d1f60:8", "const:4:8"]]
- 008d1f60 ["CALL", null, ["callee:00489f8c:8"]]
+ 008d1fb4 ["INT_ADD", "register:40f0:8", ["const:8d1fb4:8", "const:4:8"]]
+ 008d1fb4 ["CALL", null, ["callee:00489f8c:8"]]
- 008d2014 ["COPY", "register:0:8", ["register:4040:8"]]
- 008d2014 ["INT_ADD", "register:40f0:8", ["const:8d2014:8", "const:4:8"]]
- 008d2014 ["CALLIND", null, ["register:0:8"]]
+ 008d2068 ["COPY", "register:0:8", ["register:4040:8"]]
+ 008d2068 ["INT_ADD", "register:40f0:8", ["const:8d2068:8", "const:4:8"]]
+ 008d2068 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-f5763138608e41a9abeb541df94a611d"></a>

### [`008d29a8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008d2/008d29a8.md) → [`008d29fc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008d2/008d29fc.md) FUN_008d29fc

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 2件 [`00732ecc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00732/00732ecc.md) [`008d1eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008d1/008d1eb0.md) · 呼出先 0件 
- 新版 呼出元 2件 [`00732f24`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00732/00732f24.md) [`008d1f04`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008d1/008d1f04.md) · 呼出先 0件 

変更の種類 branch_condition_or_target, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, operands_and_dependencies, operation_sequence, return_value_candidate, unresolved_branch_alignment

命令の説明率　旧版 90.48% / 新版 90.48%

優先判定に残った影響 `return_value_candidate` 1件

アドレスに依存する影響 `unresolved_branch_alignment` 5件

~~~json
[
  {
    "confidence": "limited",
    "kind": "return_value_candidate",
    "new": null,
    "old": {
      "definition_site": "008d29f4",
      "incomplete_value": false,
      "site": "008d29f8",
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
      "unmatched:008d2a20",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "008d2ac8"
      ]
    ],
    [
      "unmatched:008d2a40",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "008d2aa4"
      ]
    ],
    [
      "unmatched:008d2a4c",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "008d2aa8"
      ]
    ]
  ],
  "added": [
    [
      "008d2a74",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "008d2ac8"
      ]
    ],
    [
      "008d2a94",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "008d2aa4"
      ]
    ],
    [
      "008d2aa0",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "008d2aa8"
      ]
    ]
  ]
}
~~~


~~~diff
- 008d29f0 ["BOOL_NEGATE", "tmp:0:1", ["register:101:1"]]
- 008d29f0 ["CBRANCH", null, ["local:b2:8", "tmp:0:1"]]
+ 008d2a44 ["BOOL_NEGATE", "tmp:0:1", ["register:101:1"]]
+ 008d2a44 ["CBRANCH", null, ["local:b3:8", "tmp:0:1"]]
- 008d2a20 ["BOOL_NEGATE", "tmp:0:1", ["register:101:1"]]
- 008d2a20 ["BOOL_AND", "tmp:1:1", ["register:102:1", "tmp:0:1"]]
- 008d2a20 ["CBRANCH", null, ["local:b13:8", "tmp:1:1"]]
- 008d2a34 ["BOOL_NEGATE", "tmp:0:1", ["register:101:1"]]
- 008d2a34 ["INT_EQUAL", "tmp:1:1", ["register:100:1", "register:103:1"]]
- 008d2a34 ["BOOL_AND", "tmp:2:1", ["tmp:0:1", "tmp:1:1"]]
- 008d2a34 ["CBRANCH", null, ["local:b11:8", "tmp:2:1"]]
+ 008d2a88 ["BOOL_NEGATE", "tmp:0:1", ["register:101:1"]]
+ 008d2a88 ["INT_EQUAL", "tmp:1:1", ["register:100:1", "register:103:1"]]
+ 008d2a88 ["BOOL_AND", "tmp:2:1", ["tmp:0:1", "tmp:1:1"]]
+ 008d2a88 ["CBRANCH", null, ["local:b13:8", "tmp:2:1"]]
~~~


<a id="compare-d781f82c1e65cc2e6db7a56bd6843852"></a>

### [`008d2b38`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008d2/008d2b38.md) → [`008d2b8c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008d2/008d2b8c.md) FUN_008d2b8c

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 5件 [`00769d84`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00769/00769d84.md) [`008d2aa4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008d2/008d2aa4.md) [`008d870c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008d8/008d870c.md) [`008d9a40`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008d9/008d9a40.md) [`008d9c04`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008d9/008d9c04.md) · 呼出先 19件 [`0043bba4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043bba4.md) [`0048ce54`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0048c/0048ce54.md) [`005dbd14`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005db/005dbd14.md) [`0071bed8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0071b/0071bed8.md) [`0071ec1c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0071e/0071ec1c.md)
- 新版 呼出元 5件 [`00769ddc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00769/00769ddc.md) [`008d2af8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008d2/008d2af8.md) [`008d8760`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008d8/008d8760.md) [`008d9a94`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008d9/008d9a94.md) [`008d9c58`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008d9/008d9c58.md) · 呼出先 19件 [`0043bbe4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bbe4.md) [`0048ce94`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048c/0048ce94.md) [`005dbd54`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005db/005dbd54.md) [`0071bf30`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0071b/0071bf30.md) [`0071ec74`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0071e/0071ec74.md)

変更の種類 branch_condition_or_target, call, call_argument_candidate, call_target, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, store_value, unresolved_branch_alignment, unresolved_store_alignment

命令の説明率　旧版 96.18% / 新版 96.18%

優先判定に残った影響 `call_argument_candidate` 2件, `call_target` 2件, `store_value` 1件, `unresolved_branch_alignment` 1件, `unresolved_store_alignment` 4件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "008d2f80",
      "incomplete_value": false,
      "site": "008d2f80",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c84000:8"
          ],
          [
            "leaf",
            "const:c78:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008d2f2c",
      "incomplete_value": false,
      "site": "008d2f2c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c84000:8"
          ],
          [
            "leaf",
            "const:ba8:8"
          ]
        ]
      ]
    },
    "ordinal": 54,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "008d2d08",
      "incomplete_value": true,
      "site": "008d2d10",
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
    "old": null,
    "ordinal": 5,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "008d2ccc",
      "incomplete_value": false,
      "site": "008d2cd0",
      "value": [
        "leaf",
        "const:0:8"
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
      "unmatched:008d2b3c",
      "WRITE",
      [
        "storage",
        "Stack[-0x60]",
        null,
        null
      ]
    ],
    [
      "unmatched:008d2b40",
      "WRITE",
      [
        "storage",
        "Stack[-0x50]",
        null,
        null
      ]
    ],
    [
      "unmatched:008d2c64",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "008d2d00"
      ]
    ]
  ],
  "added": [
    [
      "008d2b90",
      "WRITE",
      [
        "storage",
        "Stack[-0x60]",
        null,
        null
      ]
    ],
    [
      "008d2b94",
      "WRITE",
      [
        "storage",
        "Stack[-0x50]",
        null,
        null
      ]
    ],
    [
      "008d2cb8",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "008d2d00"
      ]
    ]
  ]
}
~~~


~~~diff
- 008d2cbc ["INT_ADD", "register:40f0:8", ["const:8d2cbc:8", "const:4:8"]]
- 008d2cbc ["CALL", null, ["callee:00c58020:8"]]
+ 008d2d10 ["INT_ADD", "register:40f0:8", ["const:8d2d10:8", "const:4:8"]]
+ 008d2d10 ["CALL", null, ["callee:00c58020:8"]]
- 008d2cd0 ["INT_ADD", "register:40f0:8", ["const:8d2cd0:8", "const:4:8"]]
- 008d2cd0 ["CALL", null, ["callee:00c58030:8"]]
+ 008d2d24 ["INT_ADD", "register:40f0:8", ["const:8d2d24:8", "const:4:8"]]
+ 008d2d24 ["CALL", null, ["callee:00c58030:8"]]
- 008d2d04 ["INT_ADD", "register:40f0:8", ["const:8d2d04:8", "const:4:8"]]
- 008d2d04 ["CALL", null, ["callee:00c57f80:8"]]
+ 008d2d58 ["INT_ADD", "register:40f0:8", ["const:8d2d58:8", "const:4:8"]]
+ 008d2d58 ["CALL", null, ["callee:00c57f80:8"]]
~~~


<a id="compare-8c74bef6729b4d91161694ddd30f757c"></a>

### [`008d31f8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008d3/008d31f8.md) → [`008d324c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008d3/008d324c.md) FUN_008d324c

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 1件 [`00856e2c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00856/00856e2c.md) · 呼出先 17件 [`0044da38`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0044d/0044da38.md) [`0047edb4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047e/0047edb4.md) [`0048ccf8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0048c/0048ccf8.md) [`0048ce84`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0048c/0048ce84.md) [`0048eef0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0048e/0048eef0.md)
- 新版 呼出元 1件 [`00856e84`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00856/00856e84.md) · 呼出先 17件 [`0044da78`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0044d/0044da78.md) [`0047edf4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047e/0047edf4.md) [`0048cd38`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048c/0048cd38.md) [`0048cec4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048c/0048cec4.md) [`0048ef30`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048e/0048ef30.md)

変更の種類 branch_condition_or_target, branch_value, call, call_argument_candidate, call_target, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, store_value, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 76.56% / 新版 76.56%

優先判定に残った影響 `call_argument_candidate` 1件, `call_target` 1件, `store_value` 1件, `unresolved_branch_alignment` 3件, `unresolved_call_alignment` 5件, `unresolved_store_alignment` 10件

アドレスに依存する影響 `branch_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "008d3448",
      "incomplete_value": true,
      "site": "008d3448",
      "value": [
        "LOAD",
        "8",
        [
          [
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
      "definition_site": "008d33f4",
      "incomplete_value": true,
      "site": "008d33f4",
      "value": [
        "LOAD",
        "8",
        [
          [
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
    "ordinal": 19,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "branch_value",
    "new": {
      "definition_site": "008d3290",
      "incomplete_value": true,
      "site": "008d3290",
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
      "definition_site": "008d323c",
      "incomplete_value": true,
      "site": "008d323c",
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
    "kind": "call_target",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "008d33f4",
      "value": [
        "leaf",
        "ram:48cd38:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "008d33a0",
      "value": [
        "leaf",
        "ram:48ccf8:8"
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
      "unmatched:008d3228",
      "WRITE",
      [
        "storage",
        "Stack[-0x58]",
        null,
        null
      ]
    ],
    [
      "unmatched:008d322c",
      "READ",
      [
        "storage",
        "00ca4f38",
        null,
        "undefined1"
      ]
    ],
    [
      "008d328c",
      "READ",
      [
        "storage",
        "00ca4f30",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "008d327c",
      "WRITE",
      [
        "storage",
        "Stack[-0x58]",
        null,
        null
      ]
    ],
    [
      "008d3280",
      "READ",
      [
        "storage",
        "00ca5038",
        null,
        "undefined1"
      ]
    ],
    [
      "008d328c",
      "READ",
      [
        "storage",
        "00ca5030",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 008d334c ["INT_EQUAL", "tmp:0:1", ["register:4000:8", "const:0:8"]]
- 008d334c ["CBRANCH", null, ["local:b18:8", "tmp:0:1"]]
+ 008d33a0 ["INT_EQUAL", "tmp:0:1", ["register:4000:8", "const:0:8"]]
+ 008d33a0 ["CBRANCH", null, ["local:b19:8", "tmp:0:1"]]
- 008d33a0 ["INT_ADD", "register:40f0:8", ["const:8d33a0:8", "const:4:8"]]
- 008d33a0 ["CALL", null, ["ram:48ccf8:8"]]
+ 008d33f4 ["INT_ADD", "register:40f0:8", ["const:8d33f4:8", "const:4:8"]]
+ 008d33f4 ["CALL", null, ["ram:48cd38:8"]]
- 008d33bc ["INT_ADD", "register:40f0:8", ["const:8d33bc:8", "const:4:8"]]
- 008d33bc ["CALL", null, ["callee:00c58040:8"]]
+ 008d3410 ["INT_ADD", "register:40f0:8", ["const:8d3410:8", "const:4:8"]]
+ 008d3410 ["CALL", null, ["callee:00c58040:8"]]
~~~


<a id="compare-389233a57bd9b12e3ec359d9bfcb25d2"></a>

### [`008d35ac`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008d3/008d35ac.md) → [`008d3600`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008d3/008d3600.md) FUN_008d3600

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal` · `compiler_shape_candidate`

- 旧版 呼出元 4件 [`0075b9c4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0075b/0075b9c4.md) [`00a06510`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a06/00a06510.md) [`00a065dc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a06/00a065dc.md) [`00a06674`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a06/00a06674.md) · 呼出先 0件 
- 新版 呼出元 4件 [`0075ba1c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0075b/0075ba1c.md) [`00a06564`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a06/00a06564.md) [`00a06630`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a06/00a06630.md) [`00a066c8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a06/00a066c8.md) · 呼出先 0件 

変更の種類 cfg_edge_inventory

命令の説明率　旧版 100.00% / 新版 100.00%

<a id="compare-e81df939a13dc8375c4c13502bb82597"></a>

### [`008d35f0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008d3/008d35f0.md) → [`008d3644`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008d3/008d3644.md) FUN_008d3644

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `bounded` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 6件 [`0075eb80`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0075e/0075eb80.md) [`007bda44`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007bd/007bda44.md) [`0088c870`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0088c/0088c870.md) [`008ad7a4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008ad/008ad7a4.md) [`008d31f8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008d3/008d31f8.md) · 呼出先 4件 [`008514f8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00851/008514f8.md) [`00865af4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00865/00865af4.md) [`00a1a6a4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a1a/00a1a6a4.md) [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md)
- 新版 呼出元 6件 [`0075ebd8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0075e/0075ebd8.md) [`007bda9c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007bd/007bda9c.md) [`0088c8c8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0088c/0088c8c8.md) [`008ad7fc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008ad/008ad7fc.md) [`008d324c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008d3/008d324c.md) · 呼出先 4件 [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md) [`00865b4c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00865/00865b4c.md) [`00a1a6f8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a1a/00a1a6f8.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)

変更の種類 branch_condition_or_target, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_return_alignment, unresolved_store_alignment

命令の説明率　旧版 84.21% / 新版 84.21%

優先判定に残った影響 `unresolved_branch_alignment` 4件, `unresolved_return_alignment` 1件, `unresolved_store_alignment` 5件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:008d35f4",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "unmatched:008d35f8",
      "WRITE",
      [
        "storage",
        "Stack[-0x28]",
        null,
        null
      ]
    ],
    [
      "unmatched:008d35fc",
      "WRITE",
      [
        "storage",
        "Stack[-0x18]",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "008d3648",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "008d364c",
      "WRITE",
      [
        "storage",
        "Stack[-0x28]",
        null,
        null
      ]
    ],
    [
      "008d3650",
      "WRITE",
      [
        "storage",
        "Stack[-0x18]",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 008d35f0 ["INT_SUB", "register:8:8", ["register:8:8", "const:40:8"]]
- 008d35f4 ["INT_ADD", "tmp:0:8", ["register:8:8", "const:10:8"]]
- 008d35f4 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:5100:8"]]
- 008d35f8 ["COPY", "tmp:0:8", ["register:40e8:8"]]
- 008d35f8 ["COPY", "tmp:1:8", ["register:40f0:8"]]
- 008d35f8 ["INT_ADD", "tmp:2:8", ["register:8:8", "const:18:8"]]
- 008d35f8 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
~~~


<a id="compare-e51cb5f10b1149cc23415b6f28084ced"></a>

### [`008d389c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008d3/008d389c.md) → [`008d38f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008d3/008d38f0.md) FUN_008d38f0

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 1件 [`00859b58`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00859/00859b58.md) · 呼出先 39件 [`00467a88`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00467/00467a88.md) [`00467af0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00467/00467af0.md) [`00467b2c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00467/00467b2c.md) [`00467b60`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00467/00467b60.md) [`00467f54`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00467/00467f54.md)
- 新版 呼出元 1件 [`00859bb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00859/00859bb0.md) · 呼出先 39件 [`00467ac8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00467/00467ac8.md) [`00467b30`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00467/00467b30.md) [`00467b6c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00467/00467b6c.md) [`00467ba0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00467/00467ba0.md) [`00467f94`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00467/00467f94.md)

変更の種類 branch_condition_or_target, branch_value, call, call_argument_candidate, call_target, cfg_edge_inventory, constant, control_flow, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 87.33% / 新版 87.33%

優先判定に残った影響 `call_argument_candidate` 49件, `call_target` 1件, `unresolved_branch_alignment` 8件, `unresolved_call_alignment` 6件, `unresolved_store_alignment` 3件

アドレスに依存する影響 `branch_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "branch_value",
    "new": {
      "definition_site": "008d3928",
      "incomplete_value": true,
      "site": "008d3928",
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
      "definition_site": "008d38d4",
      "incomplete_value": true,
      "site": "008d38d4",
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
      "definition_site": "008d393c",
      "incomplete_value": false,
      "site": "008d3950",
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
      "definition_site": "008d38e8",
      "incomplete_value": false,
      "site": "008d38fc",
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
      "definition_site": "008d3944",
      "incomplete_value": false,
      "site": "008d3950",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c84000:8"
          ],
          [
            "leaf",
            "const:6b0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008d38f0",
      "incomplete_value": false,
      "site": "008d38fc",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c84000:8"
          ],
          [
            "leaf",
            "const:5e0:8"
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
      "unmatched:008d38a0",
      "WRITE",
      [
        "storage",
        "Stack[-0x70]",
        null,
        null
      ]
    ],
    [
      "unmatched:008d38a4",
      "WRITE",
      [
        "storage",
        "Stack[-0x60]",
        null,
        null
      ]
    ],
    [
      "008d3924",
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
      "008d38f4",
      "WRITE",
      [
        "storage",
        "Stack[-0x70]",
        null,
        null
      ]
    ],
    [
      "008d38f8",
      "WRITE",
      [
        "storage",
        "Stack[-0x60]",
        null,
        null
      ]
    ],
    [
      "008d3924",
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
- 008d38d4 ["INT_EQUAL", "tmp:0:1", ["register:4040:8", "const:0:8"]]
- 008d38d4 ["CBRANCH", null, ["local:b146:8", "tmp:0:1"]]
+ 008d3928 ["INT_EQUAL", "tmp:0:1", ["register:4040:8", "const:0:8"]]
+ 008d3928 ["CBRANCH", null, ["local:b151:8", "tmp:0:1"]]
- 008d38fc ["INT_ADD", "register:40f0:8", ["const:8d38fc:8", "const:4:8"]]
- 008d38fc ["CALL", null, ["callee:00c586e0:8"]]
+ 008d3950 ["INT_ADD", "register:40f0:8", ["const:8d3950:8", "const:4:8"]]
+ 008d3950 ["CALL", null, ["callee:00c586e0:8"]]
- 008d3b4c ["INT_ADD", "register:40f0:8", ["const:8d3b4c:8", "const:4:8"]]
- 008d3b4c ["CALL", null, ["callee:00467b30:8"]]
+ 008d3ba0 ["INT_ADD", "register:40f0:8", ["const:8d3ba0:8", "const:4:8"]]
+ 008d3ba0 ["CALL", null, ["callee:00467b30:8"]]
~~~


<a id="compare-afa2db51ad284d0f578b1a5be25a92e4"></a>

### [`008d4d5c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008d4/008d4d5c.md) → [`008d4db0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008d4/008d4db0.md) FUN_008d4db0

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`008d2b38`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008d2/008d2b38.md) · 呼出先 9件 [`0043bba4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043bba4.md) [`00440ec0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00440/00440ec0.md) [`005dc300`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005dc/005dc300.md) [`008d8238`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008d8/008d8238.md) [`00c53f5c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c53/00c53f5c.md)
- 新版 呼出元 1件 [`008d2b8c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008d2/008d2b8c.md) · 呼出先 9件 [`0043bbe4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bbe4.md) [`00440f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00440/00440f00.md) [`005dc340`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005dc/005dc340.md) [`008d828c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008d8/008d828c.md) [`00c53ffc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53ffc.md)

変更の種類 branch_condition_or_target, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, store_condition, unresolved_branch_alignment, unresolved_store_alignment

命令の説明率　旧版 89.49% / 新版 89.49%

優先判定に残った影響 `store_condition` 3件, `unresolved_branch_alignment` 10件, `unresolved_store_alignment` 7件

~~~json
[
  {
    "confidence": "limited",
    "guard": [
      [
        "FALL_THROUGH",
        "008d4df4"
      ],
      [
        "FALL_THROUGH",
        "008d4e48"
      ]
    ],
    "kind": "store_condition",
    "new": {
      "definition_site": "008d4e44",
      "incomplete_value": true,
      "site": "008d4e54",
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
                "register:40c0:8"
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
      "definition_site": "008d4df0",
      "incomplete_value": true,
      "site": "008d4e00",
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
    "ordinal": 18,
    "slot": 0
  },
  {
    "confidence": "limited",
    "guard": [
      [
        "FALL_THROUGH",
        "008d4df4"
      ],
      [
        "FALL_THROUGH",
        "008d4e48"
      ]
    ],
    "kind": "store_condition",
    "new": {
      "definition_site": "008d4e44",
      "incomplete_value": true,
      "site": "008d4e54",
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
                "register:40c0:8"
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
      "definition_site": "008d4df0",
      "incomplete_value": true,
      "site": "008d4e00",
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
    "ordinal": 19,
    "slot": 0
  },
  {
    "confidence": "limited",
    "guard": [
      [
        "FALL_THROUGH",
        "008d4efc"
      ],
      [
        "FALL_THROUGH",
        "008d4f50"
      ]
    ],
    "kind": "store_condition",
    "new": {
      "definition_site": "008d4f50",
      "incomplete_value": true,
      "site": "008d4f54",
      "value": [
        "INT_EQUAL",
        "1",
        [
          [
            "live",
            "register:4040:8"
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008d4efc",
      "incomplete_value": true,
      "site": "008d4f00",
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
              [
                "live",
                "register:4040:8"
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
    "ordinal": 34,
    "slot": 0
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:008d4d60",
      "WRITE",
      [
        "storage",
        "Stack[-0x60]",
        null,
        null
      ]
    ],
    [
      "unmatched:008d4d64",
      "WRITE",
      [
        "storage",
        "Stack[-0x50]",
        null,
        null
      ]
    ],
    [
      "unmatched:008d4d68",
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
      "008d4db4",
      "WRITE",
      [
        "storage",
        "Stack[-0x60]",
        null,
        null
      ]
    ],
    [
      "008d4db8",
      "WRITE",
      [
        "storage",
        "Stack[-0x50]",
        null,
        null
      ]
    ],
    [
      "008d4dbc",
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
- 008d4eac ["INT_EQUAL", "tmp:0:1", ["register:4040:8", "const:0:8"]]
- 008d4eac ["CBRANCH", null, ["local:b18:8", "tmp:0:1"]]
+ 008d4f00 ["INT_EQUAL", "tmp:0:1", ["register:4040:8", "const:0:8"]]
+ 008d4f00 ["CBRANCH", null, ["local:b20:8", "tmp:0:1"]]
- 008d4d5c ["INT_SUB", "register:8:8", ["register:8:8", "const:b0:8"]]
- 008d4d60 ["COPY", "tmp:0:8", ["register:40e8:8"]]
- 008d4d60 ["COPY", "tmp:1:8", ["register:40f0:8"]]
- 008d4d60 ["INT_ADD", "tmp:2:8", ["register:8:8", "const:50:8"]]
- 008d4d60 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
~~~


<a id="compare-119a9f2ee4a6f04063b261d9512603b6"></a>

### [`008d51a4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008d5/008d51a4.md) → [`008d51f8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008d5/008d51f8.md) FUN_008d51f8

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 2件 [`00769d84`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00769/00769d84.md) [`008d8b5c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008d8/008d8b5c.md) · 呼出先 12件 [`0048ce50`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0048c/0048ce50.md) [`0048ce54`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0048c/0048ce54.md) [`008ba868`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008ba/008ba868.md) [`008d548c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008d5/008d548c.md) [`008d9af4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008d9/008d9af4.md)
- 新版 呼出元 2件 [`00769ddc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00769/00769ddc.md) [`008d8bb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008d8/008d8bb0.md) · 呼出先 12件 [`0048ce90`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048c/0048ce90.md) [`0048ce94`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048c/0048ce94.md) [`008ba8c0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008ba/008ba8c0.md) [`008d54e0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008d5/008d54e0.md) [`008d9b48`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008d9/008d9b48.md)

変更の種類 branch_condition_or_target, call, call_argument_candidate, call_count, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, store_value, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 77.04% / 新版 77.04%

優先判定に残った影響 `call_argument_candidate` 2件, `store_value` 1件, `unresolved_branch_alignment` 3件, `unresolved_call_alignment` 4件, `unresolved_store_alignment` 4件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "008d5360",
      "incomplete_value": false,
      "site": "008d5360",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c84000:8"
          ],
          [
            "leaf",
            "const:df8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008d530c",
      "incomplete_value": false,
      "site": "008d530c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c84000:8"
          ],
          [
            "leaf",
            "const:d28:8"
          ]
        ]
      ]
    },
    "ordinal": 19,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "008d5250",
      "incomplete_value": true,
      "site": "008d5254",
      "value": [
        "live",
        "register:8:8"
      ]
    },
    "old": null,
    "ordinal": 1,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "008d527c",
      "incomplete_value": true,
      "site": "008d5280",
      "value": [
        "live",
        "register:8:8"
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
      "unmatched:008d51c8",
      "WRITE",
      [
        "storage",
        "Stack[-0x38]",
        null,
        null
      ]
    ],
    [
      "unmatched:008d51cc",
      "UNCONDITIONAL_CALL",
      [
        "mapped_function",
        "0048ce90"
      ]
    ],
    [
      "unmatched:008d51d0",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "008d52a4"
      ]
    ]
  ],
  "added": [
    [
      "008d521c",
      "WRITE",
      [
        "storage",
        "Stack[-0x38]",
        null,
        null
      ]
    ],
    [
      "008d5220",
      "UNCONDITIONAL_CALL",
      [
        "mapped_function",
        "0048ce90"
      ]
    ],
    [
      "008d5224",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "008d52a4"
      ]
    ]
  ]
}
~~~


~~~diff
- 008d5200 ["INT_ADD", "register:40f0:8", ["const:8d5200:8", "const:4:8"]]
- 008d5200 ["CALL", null, ["callee:0048ce94:8"]]
+ 008d5254 ["INT_ADD", "register:40f0:8", ["const:8d5254:8", "const:4:8"]]
+ 008d5254 ["CALL", null, ["callee:0048ce94:8"]]
- 008d5254 ["COPY", "tmp:0:8", ["const:baa:8"]]
- 008d5254 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 008d5254 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 008d5254 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
- 008d5280 ["INT_ADD", "register:40f0:8", ["const:8d5280:8", "const:4:8"]]
- 008d5280 ["CALL", null, ["callee:0048ce94:8"]]
+ 008d52d4 ["INT_ADD", "register:40f0:8", ["const:8d52d4:8", "const:4:8"]]
+ 008d52d4 ["CALL", null, ["callee:0048ce94:8"]]
~~~


<a id="compare-fd0b5936f0fafda1246d0ce880e9ac30"></a>

### [`008d548c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008d5/008d548c.md) → [`008d54e0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008d5/008d54e0.md) FUN_008d54e0

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 2件 [`0043c258`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043c/0043c258.md) [`008d51a4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008d5/008d51a4.md) · 呼出先 17件 [`0044b7a4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0044b/0044b7a4.md) [`005618ec`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00561/005618ec.md) [`00561b24`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00561/00561b24.md) [`00561cec`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00561/00561cec.md) [`00561d34`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00561/00561d34.md)
- 新版 呼出元 2件 [`0043c298`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043c/0043c298.md) [`008d51f8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008d5/008d51f8.md) · 呼出先 17件 [`0044b7e4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0044b/0044b7e4.md) [`0056192c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00561/0056192c.md) [`00561b64`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00561/00561b64.md) [`00561d2c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00561/00561d2c.md) [`00561d74`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00561/00561d74.md)

変更の種類 branch_condition_or_target, call, call_argument_candidate, call_count, call_target, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 92.11% / 新版 92.11%

優先判定に残った影響 `call_argument_candidate` 2件, `call_target` 1件, `unresolved_call_alignment` 3件, `unresolved_store_alignment` 6件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_target",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "008d5520",
      "value": [
        "leaf",
        "ram:768430:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "008d54cc",
      "value": [
        "leaf",
        "ram:7683d8:8"
      ]
    },
    "ordinal": 1,
    "slot": 0
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "008d5540",
      "incomplete_value": true,
      "site": "008d5548",
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
            "const:359:8"
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
      "definition_site": "008d5608",
      "incomplete_value": true,
      "site": "008d5610",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:cd8:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008d55b4",
      "incomplete_value": true,
      "site": "008d55bc",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:c08:8"
              ]
            ]
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
      "008d5520",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "007683d8"
      ]
    ],
    [
      "unmatched:008d551c",
      "WRITE",
      [
        "storage",
        "Stack[-0x87]",
        null,
        null
      ]
    ],
    [
      "unmatched:008d5528",
      "READ",
      [
        "storage",
        "002c1801",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "008d5520",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "00768430"
      ]
    ],
    [
      "008d5570",
      "WRITE",
      [
        "storage",
        "Stack[-0x87]",
        null,
        null
      ]
    ],
    [
      "008d557c",
      "READ",
      [
        "storage",
        "002c1841",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 008d54cc ["INT_ADD", "register:40f0:8", ["const:8d54cc:8", "const:4:8"]]
- 008d54cc ["CALL", null, ["ram:7683d8:8"]]
+ 008d5520 ["INT_ADD", "register:40f0:8", ["const:8d5520:8", "const:4:8"]]
+ 008d5520 ["CALL", null, ["ram:768430:8"]]
- 008d5520 ["COPY", "register:4048:8", ["const:2c1000:8"]]
- 008d5548 ["INT_ADD", "register:40f0:8", ["const:8d5548:8", "const:4:8"]]
- 008d5548 ["CALL", null, ["callee:00c58040:8"]]
+ 008d559c ["INT_ADD", "register:40f0:8", ["const:8d559c:8", "const:4:8"]]
+ 008d559c ["CALL", null, ["callee:00c58040:8"]]
~~~


<a id="compare-abdd9ab159e84cd88a4821efbe073d05"></a>

### [`008d5a7c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008d5/008d5a7c.md) → [`008d5ad0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008d5/008d5ad0.md) FUN_008d5ad0

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `changed`

- 旧版 呼出元 1件 [`0084e59c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0084e/0084e59c.md) · 呼出先 3件 [`005c179c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005c1/005c179c.md) [`00865af4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00865/00865af4.md) [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md)
- 新版 呼出元 1件 [`0084e5f4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0084e/0084e5f4.md) · 呼出先 3件 [`005c17dc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005c1/005c17dc.md) [`00865b4c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00865/00865b4c.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)

変更の種類 comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, operands_and_dependencies, operation_sequence, store_value, unresolved_branch_alignment

命令の説明率　旧版 93.48% / 新版 93.48%

アドレスに依存する影響 `store_value` 1件, `unresolved_branch_alignment` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "008d5b5c",
      "incomplete_value": true,
      "site": "008d5b5c",
      "value": [
        "live",
        "register:4040:8"
      ]
    },
    "old": {
      "definition_site": "008d5b08",
      "incomplete_value": true,
      "site": "008d5b08",
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
            "register:8:8"
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
      "unmatched:008d5b18",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "008d5b84"
      ]
    ]
  ],
  "added": [
    [
      "008d5b6c",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "008d5b84"
      ]
    ]
  ]
}
~~~


~~~diff
- 008d5ab8 ["INT_ADD", "register:40f0:8", ["const:8d5ab8:8", "const:4:8"]]
- 008d5ab8 ["CALL", null, ["callee:005c17dc:8"]]
+ 008d5b0c ["INT_ADD", "register:40f0:8", ["const:8d5b0c:8", "const:4:8"]]
+ 008d5b0c ["CALL", null, ["callee:005c17dc:8"]]
- 008d5af4 ["INT_ADD", "register:40f0:8", ["const:8d5af4:8", "const:4:8"]]
- 008d5af4 ["CALL", null, ["callee:00865b4c:8"]]
+ 008d5b48 ["INT_ADD", "register:40f0:8", ["const:8d5b48:8", "const:4:8"]]
+ 008d5b48 ["CALL", null, ["callee:00865b4c:8"]]
- 008d5b14 ["INT_LESSEQUAL", "register:105:1", ["register:4048:8", "register:4040:8"]]
- 008d5b14 ["INT_SBORROW", "register:106:1", ["register:4040:8", "register:4048:8"]]
- 008d5b14 ["INT_SUB", "tmp:0:8", ["register:4040:8", "register:4048:8"]]
- 008d5b14 ["INT_SLESS", "register:107:1", ["tmp:0:8", "const:0:8"]]
~~~


<a id="compare-0a576d888e1f17ecc8187cb67b912559"></a>

### [`008d5c7c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008d5/008d5c7c.md) → [`008d5cd0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008d5/008d5cd0.md) FUN_008d5cd0

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`00a06d9c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a06/00a06d9c.md) · 呼出先 6件 [`0043bba4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043bba4.md) [`004802f8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00480/004802f8.md) [`004803f0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00480/004803f0.md) [`00480744`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00480/00480744.md) [`005c179c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005c1/005c179c.md)
- 新版 呼出元 1件 [`00a06df0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a06/00a06df0.md) · 呼出先 6件 [`0043bbe4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bbe4.md) [`00480338`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00480/00480338.md) [`00480430`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00480/00480430.md) [`00480784`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00480/00480784.md) [`005c17dc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005c1/005c17dc.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, operands_and_dependencies, operation_sequence, store_condition, unresolved_branch_alignment, unresolved_return_alignment

命令の説明率　旧版 96.15% / 新版 96.15%

優先判定に残った影響 `call_argument_candidate` 5件, `store_condition` 2件, `unresolved_branch_alignment` 4件, `unresolved_return_alignment` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "008d5d40",
      "incomplete_value": true,
      "site": "008d5d48",
      "value": [
        "live",
        "register:40a0:8"
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
      "definition_site": "008d5d64",
      "incomplete_value": true,
      "site": "008d5d6c",
      "value": [
        "live",
        "register:40a0:8"
      ]
    },
    "old": null,
    "ordinal": 9,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "008d5d88",
      "incomplete_value": true,
      "site": "008d5d90",
      "value": [
        "INT_SUB",
        "8",
        [
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
                "const:b8:8"
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
      "unmatched:008d5dc0",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "008d5e3c"
      ]
    ],
    [
      "unmatched:008d5de0",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "008d5e18"
      ]
    ],
    [
      "unmatched:008d5e14",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "008d5db8"
      ]
    ]
  ],
  "added": [
    [
      "008d5e14",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "008d5e3c"
      ]
    ],
    [
      "008d5e34",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "008d5e18"
      ]
    ],
    [
      "008d5e68",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "008d5db8"
      ]
    ]
  ]
}
~~~


~~~diff
- 008d5cf4 ["INT_ADD", "register:40f0:8", ["const:8d5cf4:8", "const:4:8"]]
- 008d5cf4 ["CALL", null, ["callee:00480784:8"]]
+ 008d5d48 ["INT_ADD", "register:40f0:8", ["const:8d5d48:8", "const:4:8"]]
+ 008d5d48 ["CALL", null, ["callee:00480784:8"]]
- 008d5d18 ["INT_ADD", "register:40f0:8", ["const:8d5d18:8", "const:4:8"]]
- 008d5d18 ["CALL", null, ["callee:00480430:8"]]
+ 008d5d6c ["INT_ADD", "register:40f0:8", ["const:8d5d6c:8", "const:4:8"]]
+ 008d5d6c ["CALL", null, ["callee:00480430:8"]]
- 008d5d3c ["INT_ADD", "register:40f0:8", ["const:8d5d3c:8", "const:4:8"]]
- 008d5d3c ["CALL", null, ["callee:005c17dc:8"]]
+ 008d5d90 ["INT_ADD", "register:40f0:8", ["const:8d5d90:8", "const:4:8"]]
+ 008d5d90 ["CALL", null, ["callee:005c17dc:8"]]
~~~


<a id="compare-69af53a1267f4d7307cf30998587a4ca"></a>

### [`008d5e84`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008d5/008d5e84.md) → [`008d5ed8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008d5/008d5ed8.md) FUN_008d5ed8

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`00769d84`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00769/00769d84.md) · 呼出先 0件 
- 新版 呼出元 1件 [`00769ddc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00769/00769ddc.md) · 呼出先 0件 

変更の種類 branch_condition_or_target, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, operands_and_dependencies, operation_sequence, return_value_candidate, unresolved_branch_alignment

命令の説明率　旧版 85.51% / 新版 85.51%

優先判定に残った影響 `return_value_candidate` 1件

アドレスに依存する影響 `unresolved_branch_alignment` 5件

~~~json
[
  {
    "confidence": "limited",
    "kind": "return_value_candidate",
    "new": null,
    "old": {
      "definition_site": "008d5f28",
      "incomplete_value": false,
      "site": "008d5f2c",
      "value": [
        "leaf",
        "const:1:8"
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
      "unmatched:008d5ef0",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "008d5f54"
      ]
    ],
    [
      "unmatched:008d5f1c",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "008d5fa0"
      ]
    ],
    [
      "unmatched:008d5f60",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "008d5fc8"
      ]
    ]
  ],
  "added": [
    [
      "008d5f44",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "008d5f54"
      ]
    ],
    [
      "008d5f70",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "008d5fa0"
      ]
    ],
    [
      "008d5fb4",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "008d5fc8"
      ]
    ]
  ]
}
~~~


~~~diff
- 008d5ec8 ["BOOL_NEGATE", "tmp:0:1", ["register:101:1"]]
- 008d5ec8 ["BOOL_AND", "tmp:1:1", ["register:102:1", "tmp:0:1"]]
- 008d5ec8 ["CBRANCH", null, ["local:b15:8", "tmp:1:1"]]
+ 008d5f1c ["BOOL_NEGATE", "tmp:0:1", ["register:101:1"]]
+ 008d5f1c ["BOOL_AND", "tmp:1:1", ["register:102:1", "tmp:0:1"]]
+ 008d5f1c ["CBRANCH", null, ["local:b16:8", "tmp:1:1"]]
- 008d5ed4 ["BOOL_NEGATE", "tmp:0:1", ["register:102:1"]]
- 008d5ed4 ["BOOL_OR", "tmp:1:1", ["tmp:0:1", "register:101:1"]]
- 008d5ed4 ["CBRANCH", null, ["local:b13:8", "tmp:1:1"]]
+ 008d5f28 ["BOOL_NEGATE", "tmp:0:1", ["register:102:1"]]
+ 008d5f28 ["BOOL_OR", "tmp:1:1", ["tmp:0:1", "register:101:1"]]
+ 008d5f28 ["CBRANCH", null, ["local:b14:8", "tmp:1:1"]]
- 008d5ee4 ["BOOL_NEGATE", "tmp:0:1", ["register:101:1"]]
- 008d5ee4 ["INT_EQUAL", "tmp:1:1", ["register:100:1", "register:103:1"]]
- 008d5ee4 ["BOOL_AND", "tmp:2:1", ["tmp:0:1", "tmp:1:1"]]
- 008d5ee4 ["CBRANCH", null, ["local:b10:8", "tmp:2:1"]]
+ 008d5f38 ["BOOL_NEGATE", "tmp:0:1", ["register:101:1"]]
+ 008d5f38 ["INT_EQUAL", "tmp:1:1", ["register:100:1", "register:103:1"]]
+ 008d5f38 ["BOOL_AND", "tmp:2:1", ["tmp:0:1", "tmp:1:1"]]
+ 008d5f38 ["CBRANCH", null, ["local:b9:8", "tmp:2:1"]]
~~~


<a id="compare-0eca99557a13dbbcb34d0ab3d79f4731"></a>

### [`008d6108`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008d6/008d6108.md) → [`008d615c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008d6/008d615c.md) FUN_008d615c

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 2件 [`008da7a4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008da/008da7a4.md) [`008daea8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008da/008daea8.md) · 呼出先 3件 [`0044108c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00441/0044108c.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md)
- 新版 呼出元 2件 [`008da7f8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008da/008da7f8.md) [`008daefc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008da/008daefc.md) · 呼出先 3件 [`004410cc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00441/004410cc.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)

変更の種類 branch_condition_or_target, call, call_argument_candidate, call_count, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 53.11% / 新版 53.11%

優先判定に残った影響 `call_argument_candidate` 9件, `unresolved_branch_alignment` 45件, `unresolved_call_alignment` 29件, `unresolved_store_alignment` 33件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "008d6254",
      "incomplete_value": true,
      "site": "008d6258",
      "value": [
        "LOAD",
        "8",
        [
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
    "ordinal": 7,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "008d6320",
      "incomplete_value": true,
      "site": "008d6328",
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
            "const:10:8"
          ]
        ]
      ]
    },
    "old": null,
    "ordinal": 9,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "008d6324",
      "incomplete_value": true,
      "site": "008d6328",
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
            "const:18:8"
          ]
        ]
      ]
    },
    "old": null,
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
      "008d61dc",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "unmatched:008d61fc"
      ]
    ],
    [
      "008d6244",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "unmatched:008d61fc"
      ]
    ],
    [
      "unmatched:008d6208",
      "READ",
      [
        "storage",
        "002b5e99",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "008d61dc",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "008d6250"
      ]
    ],
    [
      "008d6244",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "008d6250"
      ]
    ],
    [
      "008d625c",
      "READ",
      [
        "storage",
        "002b5ed9",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 008d6258 ["INT_ADD", "register:40f0:8", ["const:8d6258:8", "const:4:8"]]
- 008d6258 ["CALL", null, ["callee:00c57f80:8"]]
+ 008d62ac ["INT_ADD", "register:40f0:8", ["const:8d62ac:8", "const:4:8"]]
+ 008d62ac ["CALL", null, ["callee:00c57f80:8"]]
+ 008d6258 ["COPY", "register:4040:8", ["const:22:8"]]
- 008d62d4 ["INT_ADD", "register:40f0:8", ["const:8d62d4:8", "const:4:8"]]
- 008d62d4 ["CALL", null, ["callee:004410cc:8"]]
+ 008d6328 ["INT_ADD", "register:40f0:8", ["const:8d6328:8", "const:4:8"]]
+ 008d6328 ["CALL", null, ["callee:004410cc:8"]]
~~~


<a id="compare-885b5bee454f5cab6565d6842d64b5ac"></a>

### [`008d6c90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008d6/008d6c90.md) → [`008d6ce4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008d6/008d6ce4.md) FUN_008d6ce4

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c53d00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c53/00c53d00.md) [`00c57e80`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e80.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, constant, control_flow, control_flow_count, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_return_alignment, unresolved_store_alignment

命令の説明率　旧版 80.00% / 新版 80.00%

優先判定に残った影響 `call_argument_candidate` 2件, `unresolved_return_alignment` 1件, `unresolved_store_alignment` 3件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "008d6cfc",
      "incomplete_value": false,
      "site": "008d6d00",
      "value": [
        "leaf",
        "const:ffffffffffffffff:8"
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
      "definition_site": "008d6cf8",
      "incomplete_value": true,
      "site": "008d6d00",
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
      "unmatched:008d6c90",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "unmatched:008d6c94",
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
      "008d6ce4",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "008d6ce8",
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
- 008d6cac ["INT_ADD", "register:40f0:8", ["const:8d6cac:8", "const:4:8"]]
- 008d6cac ["CALL", null, ["callee:00c53da0:8"]]
+ 008d6d00 ["INT_ADD", "register:40f0:8", ["const:8d6d00:8", "const:4:8"]]
+ 008d6d00 ["CALL", null, ["callee:00c53da0:8"]]
- 008d6c90 ["COPY", "tmp:0:8", ["register:40e8:8"]]
- 008d6c90 ["COPY", "tmp:1:8", ["register:40f0:8"]]
- 008d6c90 ["INT_ADD", "register:8:8", ["register:8:8", "const:ffffffffffffffe0:8"]]
- 008d6c90 ["STORE", null, ["const:1b1:8", "register:8:8", "tmp:0:8"]]
- 008d6c94 ["INT_ADD", "tmp:0:8", ["register:8:8", "const:10:8"]]
- 008d6c94 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4098:8"]]
~~~


<a id="compare-6b112a09839bca8caad8fa80ebfed092"></a>

### [`008d6ce0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008d6/008d6ce0.md) → [`008d6d34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008d6/008d6d34.md) FUN_008d6d34

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 1件 [`0089d4c8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0089d/0089d4c8.md) · 呼出先 19件 [`0044b7a4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0044b/0044b7a4.md) [`005618ec`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00561/005618ec.md) [`00561b24`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00561/00561b24.md) [`00561cec`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00561/00561cec.md) [`00561d34`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00561/00561d34.md)
- 新版 呼出元 1件 [`0089d520`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0089d/0089d520.md) · 呼出先 19件 [`0044b7e4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0044b/0044b7e4.md) [`0056192c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00561/0056192c.md) [`00561b64`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00561/00561b64.md) [`00561d2c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00561/00561d2c.md) [`00561d74`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00561/00561d74.md)

変更の種類 branch_condition_or_target, call, call_argument_candidate, call_count, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, store_value, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 71.95% / 新版 71.95%

優先判定に残った影響 `call_argument_candidate` 5件, `store_value` 1件, `unresolved_branch_alignment` 7件, `unresolved_call_alignment` 8件, `unresolved_store_alignment` 14件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "008d6fb4",
      "incomplete_value": false,
      "site": "008d6fb8",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c85000:8"
          ],
          [
            "leaf",
            "const:f8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008d6f60",
      "incomplete_value": false,
      "site": "008d6f64",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c85000:8"
          ],
          [
            "leaf",
            "const:28:8"
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
    "new": {
      "definition_site": "008d6d88",
      "incomplete_value": false,
      "site": "008d6d90",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:2a2000:8"
          ],
          [
            "leaf",
            "const:579:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008d6d34",
      "incomplete_value": false,
      "site": "008d6d3c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:2a2000:8"
          ],
          [
            "leaf",
            "const:5c6:8"
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
      "definition_site": "008d6db8",
      "incomplete_value": true,
      "site": "008d6dc0",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:cd8:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008d6d64",
      "incomplete_value": true,
      "site": "008d6d6c",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:c08:8"
              ]
            ]
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
      "unmatched:008d6ce4",
      "WRITE",
      [
        "storage",
        "Stack[-0x40]",
        null,
        null
      ]
    ],
    [
      "unmatched:008d6d00",
      "WRITE",
      [
        "storage",
        "Stack[-0x48]",
        null,
        null
      ]
    ],
    [
      "unmatched:008d6d18",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "007683d8"
      ]
    ]
  ],
  "added": [
    [
      "008d6d38",
      "WRITE",
      [
        "storage",
        "Stack[-0x40]",
        null,
        null
      ]
    ],
    [
      "008d6d54",
      "WRITE",
      [
        "storage",
        "Stack[-0x48]",
        null,
        null
      ]
    ],
    [
      "008d6d6c",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "00768430"
      ]
    ]
  ]
}
~~~


~~~diff
- 008d6d3c ["INT_ADD", "register:40f0:8", ["const:8d6d3c:8", "const:4:8"]]
- 008d6d3c ["CALL", null, ["callee:00c58040:8"]]
+ 008d6d90 ["INT_ADD", "register:40f0:8", ["const:8d6d90:8", "const:4:8"]]
+ 008d6d90 ["CALL", null, ["callee:00c58040:8"]]
- 008d6d6c ["INT_ADD", "register:40f0:8", ["const:8d6d6c:8", "const:4:8"]]
- 008d6d6c ["CALL", null, ["callee:00561d74:8"]]
+ 008d6dc0 ["INT_ADD", "register:40f0:8", ["const:8d6dc0:8", "const:4:8"]]
+ 008d6dc0 ["CALL", null, ["callee:00561d74:8"]]
+ 008d6d6c ["INT_ADD", "register:40f0:8", ["const:8d6d6c:8", "const:4:8"]]
+ 008d6d6c ["CALL", null, ["ram:768430:8"]]
~~~


<a id="compare-df14285a5d40ee03ac3118e11f35e7ee"></a>

### [`008d71f4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008d7/008d71f4.md) → [`008d7248`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008d7/008d7248.md) FUN_008d7248

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`00b28f54`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b28/00b28f54.md) · 呼出先 18件 [`0043bba4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043bba4.md) [`00440ec0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00440/00440ec0.md) [`0048791c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00487/0048791c.md) [`0048793c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00487/0048793c.md) [`00487a64`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00487/00487a64.md)
- 新版 呼出元 1件 [`00b28ff0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b28/00b28ff0.md) · 呼出先 18件 [`0043bbe4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bbe4.md) [`00440f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00440/00440f00.md) [`0048795c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00487/0048795c.md) [`0048797c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00487/0048797c.md) [`00487aa4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00487/00487aa4.md)

変更の種類 branch_condition_or_target, call, call_argument_candidate, call_count, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, store_destination, store_value, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 91.07% / 新版 91.07%

優先判定に残った影響 `call_argument_candidate` 2件, `store_destination` 1件, `store_value` 3件, `unresolved_branch_alignment` 1件, `unresolved_call_alignment` 2件, `unresolved_store_alignment` 3件

アドレスに依存する影響 `store_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "008d75f0",
      "incomplete_value": true,
      "site": "008d75f4",
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
      "definition_site": "008d759c",
      "incomplete_value": true,
      "site": "008d75a0",
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
    "ordinal": 55,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "008d75ec",
      "incomplete_value": true,
      "site": "008d75f8",
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
      "definition_site": "008d7598",
      "incomplete_value": true,
      "site": "008d75a4",
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
    "ordinal": 56,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_destination",
    "new": {
      "definition_site": "008d7604",
      "incomplete_value": true,
      "site": "008d7604",
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
      "definition_site": "008d75b0",
      "incomplete_value": true,
      "site": "008d75b0",
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
    "ordinal": 57,
    "slot": 1
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:008d7220",
      "WRITE",
      [
        "storage",
        "Stack[-0x210]",
        null,
        null
      ]
    ],
    [
      "unmatched:008d7248",
      "DATA",
      [
        "storage",
        "00c64d38",
        null,
        "undefined *"
      ]
    ],
    [
      "unmatched:008d7248",
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
      "008d7274",
      "WRITE",
      [
        "storage",
        "Stack[-0x210]",
        null,
        null
      ]
    ],
    [
      "008d729c",
      "DATA",
      [
        "storage",
        "00c64e08",
        null,
        "undefined *"
      ]
    ],
    [
      "008d729c",
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
- 008d73a0 ["INT_ADD", "register:40f0:8", ["const:8d73a0:8", "const:4:8"]]
- 008d73a0 ["CALL", null, ["callee:0048797c:8"]]
+ 008d73f4 ["INT_ADD", "register:40f0:8", ["const:8d73f4:8", "const:4:8"]]
+ 008d73f4 ["CALL", null, ["callee:0048797c:8"]]
- 008d73b0 ["INT_ADD", "register:40f0:8", ["const:8d73b0:8", "const:4:8"]]
- 008d73b0 ["CALL", null, ["callee:0048797c:8"]]
+ 008d7404 ["INT_ADD", "register:40f0:8", ["const:8d7404:8", "const:4:8"]]
+ 008d7404 ["CALL", null, ["callee:0048797c:8"]]
- 008d755c ["INT_ADD", "register:40f0:8", ["const:8d755c:8", "const:4:8"]]
- 008d755c ["CALL", null, ["callee:008d82a0:8"]]
+ 008d75b0 ["INT_ADD", "register:40f0:8", ["const:8d75b0:8", "const:4:8"]]
+ 008d75b0 ["CALL", null, ["callee:008d82a0:8"]]
~~~


<a id="compare-c76ecddc285bf968b1a109b6f04f68c2"></a>

### [`008d76e8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008d7/008d76e8.md) → [`008d773c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008d7/008d773c.md) FUN_008d773c

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 6件 [`007bda44`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007bd/007bda44.md) [`007c7ef0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007c7/007c7ef0.md) [`007cceec`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007cc/007cceec.md) [`007df0e8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007df/007df0e8.md) [`007efca8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007ef/007efca8.md) · 呼出先 6件 [`008d8238`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008d8/008d8238.md) [`00c53f5c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c53/00c53f5c.md) [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md)
- 新版 呼出元 6件 [`007bda9c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007bd/007bda9c.md) [`007c7f48`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007c7/007c7f48.md) [`007ccf44`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007cc/007ccf44.md) [`007df140`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007df/007df140.md) [`007efd00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007ef/007efd00.md) · 呼出先 6件 [`008d828c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008d8/008d828c.md) [`00c53ffc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53ffc.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_store_alignment

命令の説明率　旧版 92.94% / 新版 92.94%

優先判定に残った影響 `call_argument_candidate` 2件, `unresolved_branch_alignment` 6件, `unresolved_store_alignment` 3件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "008d78c4",
      "incomplete_value": true,
      "site": "008d78c8",
      "value": [
        "live",
        "register:40a8:8"
      ]
    },
    "ordinal": 2,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "008d79a8",
      "incomplete_value": true,
      "site": "008d79ac",
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
            "const:18:8"
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
      "unmatched:008d76ec",
      "WRITE",
      [
        "storage",
        "Stack[-0x60]",
        null,
        null
      ]
    ],
    [
      "unmatched:008d7788",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "008d795c"
      ]
    ],
    [
      "unmatched:008d77b0",
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
      "008d7740",
      "WRITE",
      [
        "storage",
        "Stack[-0x60]",
        null,
        null
      ]
    ],
    [
      "008d77c4",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "008d795c"
      ]
    ],
    [
      "008d7804",
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
- 008d7874 ["INT_NOTEQUAL", "tmp:0:1", ["register:40a8:8", "const:0:8"]]
- 008d7874 ["CBRANCH", null, ["local:b40:8", "tmp:0:1"]]
+ 008d78c8 ["INT_NOTEQUAL", "tmp:0:1", ["register:40a8:8", "const:0:8"]]
+ 008d78c8 ["CBRANCH", null, ["local:b41:8", "tmp:0:1"]]
- 008d78c8 ["INT_ADD", "register:40f0:8", ["const:8d78c8:8", "const:4:8"]]
- 008d78c8 ["CALL", null, ["callee:00c57f80:8"]]
+ 008d791c ["INT_ADD", "register:40f0:8", ["const:8d791c:8", "const:4:8"]]
+ 008d791c ["CALL", null, ["callee:00c57f80:8"]]
- 008d7958 ["INT_ADD", "register:40f0:8", ["const:8d7958:8", "const:4:8"]]
- 008d7958 ["CALL", null, ["callee:008d828c:8"]]
+ 008d79ac ["INT_ADD", "register:40f0:8", ["const:8d79ac:8", "const:4:8"]]
+ 008d79ac ["CALL", null, ["callee:008d828c:8"]]
~~~


<a id="compare-71dc35aefd5c51e6df7fe2af5a19266b"></a>

### [`008d7990`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008d7/008d7990.md) → [`008d79e4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008d7/008d79e4.md) FUN_008d79e4

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`008d9a40`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008d9/008d9a40.md) · 呼出先 9件 [`0043bba4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043bba4.md) [`0071c460`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0071c/0071c460.md) [`008514f8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00851/008514f8.md) [`008783f0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00878/008783f0.md) [`00a1a6a4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a1a/00a1a6a4.md)
- 新版 呼出元 1件 [`008d9a94`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008d9/008d9a94.md) · 呼出先 9件 [`0043bbe4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bbe4.md) [`0071c4b8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0071c/0071c4b8.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md) [`00878448`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00878/00878448.md) [`00a1a6f8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a1a/00a1a6f8.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, store_condition, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 83.10% / 新版 83.10%

優先判定に残った影響 `call_argument_candidate` 1件, `store_condition` 2件, `unresolved_branch_alignment` 7件, `unresolved_call_alignment` 3件, `unresolved_store_alignment` 13件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "008d7c30",
      "incomplete_value": true,
      "site": "008d7c3c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:40b8:8"
          ],
          [
            "leaf",
            "const:8:8"
          ]
        ]
      ]
    },
    "ordinal": 8,
    "slot": 1
  },
  {
    "confidence": "limited",
    "guard": [
      [
        "FALL_THROUGH",
        "008d7b9c"
      ],
      [
        "FALL_THROUGH",
        "008d7bf0"
      ]
    ],
    "kind": "store_condition",
    "new": {
      "definition_site": "008d7bec",
      "incomplete_value": true,
      "site": "008d7c10",
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
      "definition_site": null,
      "incomplete_value": true,
      "site": "008d7bbc",
      "value": [
        "live",
        "register:101:1"
      ]
    },
    "ordinal": 44,
    "slot": 0
  },
  {
    "confidence": "limited",
    "guard": [
      [
        "FALL_THROUGH",
        "008d7b9c"
      ],
      [
        "FALL_THROUGH",
        "008d7bf0"
      ]
    ],
    "kind": "store_condition",
    "new": {
      "definition_site": "008d7bec",
      "incomplete_value": true,
      "site": "008d7c10",
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
      "definition_site": null,
      "incomplete_value": true,
      "site": "008d7bbc",
      "value": [
        "live",
        "register:101:1"
      ]
    },
    "ordinal": 45,
    "slot": 0
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:008d79a4",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "unmatched:008d79dc",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "008d7a44"
      ]
    ],
    [
      "unmatched:008d79e0",
      "UNCONDITIONAL_JUMP",
      [
        "local_branch",
        "008d7a64"
      ]
    ]
  ],
  "added": [
    [
      "008d79f8",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "008d7a30",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "008d7a44"
      ]
    ],
    [
      "008d7a34",
      "UNCONDITIONAL_JUMP",
      [
        "local_branch",
        "008d7a64"
      ]
    ]
  ]
}
~~~


~~~diff
- 008d7c10 ["INT_ADD", "tmp:0:8", ["register:8:8", "const:50:8"]]
- 008d7c10 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4040:8"]]
- 008d7c3c ["INT_ADD", "register:40f0:8", ["const:8d7c3c:8", "const:4:8"]]
- 008d7c3c ["CALL", null, ["callee:00c5a910:8"]]
+ 008d7c90 ["INT_ADD", "register:40f0:8", ["const:8d7c90:8", "const:4:8"]]
+ 008d7c90 ["CALL", null, ["callee:00c5a910:8"]]
- 008d79a4 ["COPY", "tmp:0:8", ["register:40b0:8"]]
- 008d79a4 ["COPY", "tmp:1:8", ["register:40a8:8"]]
- 008d79a4 ["INT_ADD", "tmp:2:8", ["register:8:8", "const:120:8"]]
- 008d79a4 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
~~~


<a id="compare-4ed84fa6499d34cafbad8fec761ae5c5"></a>

### [`008d7edc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008d7/008d7edc.md) → [`008d7f30`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008d7/008d7f30.md) FUN_008d7f30

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 1件 [`008d8154`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008d8/008d8154.md) · 呼出先 3件 [`00672b48`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00672/00672b48.md) [`00c53d00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c53/00c53d00.md) [`00c57e80`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e80.md)
- 新版 呼出元 1件 [`008d81a8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008d8/008d81a8.md) · 呼出先 3件 [`00672b88`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00672/00672b88.md) [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 72.15% / 新版 72.15%

優先判定に残った影響 `call_argument_candidate` 6件, `unresolved_branch_alignment` 8件, `unresolved_call_alignment` 3件, `unresolved_store_alignment` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "008d8004",
      "incomplete_value": true,
      "site": "008d8008",
      "value": [
        "live",
        "register:40a0:8"
      ]
    },
    "old": null,
    "ordinal": 11,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "008d8034",
      "incomplete_value": true,
      "site": "008d8038",
      "value": [
        "live",
        "register:40a0:8"
      ]
    },
    "old": null,
    "ordinal": 14,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "008d7ff0",
      "incomplete_value": true,
      "site": "008d7ff8",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:40a0:8"
          ],
          [
            "leaf",
            "const:8:8"
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
      "unmatched:008d7ef8",
      "DATA",
      [
        "storage",
        "00c845b8",
        null,
        "undefined *"
      ]
    ],
    [
      "unmatched:008d7f0c",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "008d7f7c"
      ]
    ],
    [
      "unmatched:008d7f6c",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "008d7fdc"
      ]
    ]
  ],
  "added": [
    [
      "008d7f4c",
      "DATA",
      [
        "storage",
        "00c84688",
        null,
        "undefined *"
      ]
    ],
    [
      "008d7f60",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "008d7f7c"
      ]
    ],
    [
      "008d7fc0",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "008d7fdc"
      ]
    ]
  ]
}
~~~


~~~diff
- 008d7fb4 ["INT_ADD", "register:40f0:8", ["const:8d7fb4:8", "const:4:8"]]
- 008d7fb4 ["CALL", null, ["callee:00c57f50:8"]]
+ 008d8008 ["INT_ADD", "register:40f0:8", ["const:8d8008:8", "const:4:8"]]
+ 008d8008 ["CALL", null, ["callee:00c57f50:8"]]
- 008d7fe4 ["INT_ADD", "register:40f0:8", ["const:8d7fe4:8", "const:4:8"]]
- 008d7fe4 ["CALL", null, ["callee:00c57f50:8"]]
+ 008d8038 ["INT_ADD", "register:40f0:8", ["const:8d8038:8", "const:4:8"]]
+ 008d8038 ["CALL", null, ["callee:00c57f50:8"]]
- 008d7ff8 ["INT_ADD", "register:40f0:8", ["const:8d7ff8:8", "const:4:8"]]
- 008d7ff8 ["CALL", null, ["callee:00c53da0:8"]]
+ 008d804c ["INT_ADD", "register:40f0:8", ["const:8d804c:8", "const:4:8"]]
+ 008d804c ["CALL", null, ["callee:00c53da0:8"]]
~~~


<a id="compare-ca750a62610ca568dbcb463f471b8026"></a>

### [`008d8178`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008d8/008d8178.md) → [`008d81cc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008d8/008d81cc.md) FUN_008d81cc

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 3件 [`00672b48`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00672/00672b48.md) [`00c53d00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c53/00c53d00.md) [`00c57e80`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e80.md)
- 新版 呼出元 0件  · 呼出先 3件 [`00672b88`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00672/00672b88.md) [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 91.30% / 新版 91.30%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "008d81e4",
      "incomplete_value": false,
      "site": "008d81e8",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c84000:8"
          ],
          [
            "leaf",
            "const:6d8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008d8190",
      "incomplete_value": false,
      "site": "008d8194",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c84000:8"
          ],
          [
            "leaf",
            "const:608:8"
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
      "008d81e8",
      "DATA",
      [
        "storage",
        "00c84608",
        null,
        "pointer"
      ]
    ]
  ],
  "added": [
    [
      "008d81e8",
      "DATA",
      [
        "storage",
        "00c846d8",
        null,
        "pointer"
      ]
    ]
  ]
}
~~~


~~~diff
- 008d8190 ["COPY", "tmp:0:8", ["const:608:8"]]
- 008d8190 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 008d8190 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 008d8190 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 008d81e4 ["COPY", "tmp:0:8", ["const:6d8:8"]]
+ 008d81e4 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 008d81e4 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 008d81e4 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 008d81a4 ["INT_ADD", "register:40f0:8", ["const:8d81a4:8", "const:4:8"]]
- 008d81a4 ["CALL", null, ["callee:00c53da0:8"]]
+ 008d81f8 ["INT_ADD", "register:40f0:8", ["const:8d81f8:8", "const:4:8"]]
+ 008d81f8 ["CALL", null, ["callee:00c53da0:8"]]
- 008d81b8 ["COPY", "register:0:8", ["register:4040:8"]]
- 008d81b8 ["INT_ADD", "register:40f0:8", ["const:8d81b8:8", "const:4:8"]]
- 008d81b8 ["CALLIND", null, ["register:0:8"]]
+ 008d820c ["COPY", "register:0:8", ["register:4040:8"]]
+ 008d820c ["INT_ADD", "register:40f0:8", ["const:8d820c:8", "const:4:8"]]
+ 008d820c ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-a0344cad3cc775317cfdd62bd709e91c"></a>

### [`008d81d4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008d8/008d81d4.md) → [`008d8228`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008d8/008d8228.md) FUN_008d8228

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 4件 [`00672b48`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00672/00672b48.md) [`00c53d00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c53/00c53d00.md) [`00c57e80`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e80.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md)
- 新版 呼出元 0件  · 呼出先 4件 [`00672b88`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00672/00672b88.md) [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)

変更の種類 call_argument_candidate, constant, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, store_value, unresolved_store_alignment

命令の説明率　旧版 88.00% / 新版 88.00%

優先判定に残った影響 `call_argument_candidate` 1件, `store_value` 1件, `unresolved_store_alignment` 2件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "008d8240",
      "incomplete_value": false,
      "site": "008d8244",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c84000:8"
          ],
          [
            "leaf",
            "const:6d8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008d81ec",
      "incomplete_value": false,
      "site": "008d81f0",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c84000:8"
          ],
          [
            "leaf",
            "const:608:8"
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
    "new": null,
    "old": {
      "definition_site": "008d81fc",
      "incomplete_value": false,
      "site": "008d8200",
      "value": [
        "leaf",
        "const:ffffffffffffffff:8"
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
      "unmatched:008d81d8",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "008d8244",
      "DATA",
      [
        "storage",
        "00c84608",
        null,
        "pointer"
      ]
    ]
  ],
  "added": [
    [
      "008d822c",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "008d8244",
      "DATA",
      [
        "storage",
        "00c846d8",
        null,
        "pointer"
      ]
    ]
  ]
}
~~~


~~~diff
- 008d8200 ["INT_ADD", "register:40f0:8", ["const:8d8200:8", "const:4:8"]]
- 008d8200 ["CALL", null, ["callee:00c53da0:8"]]
+ 008d8254 ["INT_ADD", "register:40f0:8", ["const:8d8254:8", "const:4:8"]]
+ 008d8254 ["CALL", null, ["callee:00c53da0:8"]]
- 008d81d8 ["COPY", "tmp:0:8", ["register:40a0:8"]]
- 008d81d8 ["COPY", "tmp:1:8", ["register:4098:8"]]
- 008d81d8 ["INT_ADD", "tmp:2:8", ["register:8:8", "const:10:8"]]
- 008d81d8 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
- 008d81ec ["COPY", "tmp:0:8", ["const:608:8"]]
- 008d81ec ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 008d81ec ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 008d81ec ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 008d8240 ["COPY", "tmp:0:8", ["const:6d8:8"]]
+ 008d8240 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 008d8240 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 008d8240 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-b7afd78fb4911f1420dc83579a94b453"></a>

### [`008d8238`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008d8/008d8238.md) → [`008d828c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008d8/008d828c.md) FUN_008d828c

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 7件 [`008d2b38`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008d2/008d2b38.md) [`008d4d5c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008d4/008d4d5c.md) [`008d71f4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008d7/008d71f4.md) [`008d76e8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008d7/008d76e8.md) [`008d824c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008d8/008d824c.md) · 呼出先 1件 [`0043b778`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043b778.md)
- 新版 呼出元 7件 [`008d2b8c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008d2/008d2b8c.md) [`008d4db0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008d4/008d4db0.md) [`008d7248`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008d7/008d7248.md) [`008d773c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008d7/008d773c.md) [`008d82a0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008d8/008d82a0.md) · 呼出先 1件 [`0043b7b8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b7b8.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 80.00% / 新版 80.00%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "008d8298",
      "incomplete_value": false,
      "site": "008d829c",
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
      "definition_site": "008d8244",
      "incomplete_value": false,
      "site": "008d8248",
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
      "008d8298",
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
      "008d8298",
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
- 008d8248 ["INT_ADD", "register:40f0:8", ["const:8d8248:8", "const:4:8"]]
- 008d8248 ["CALL", null, ["callee:0043b7b8:8"]]
+ 008d829c ["INT_ADD", "register:40f0:8", ["const:8d829c:8", "const:4:8"]]
+ 008d829c ["CALL", null, ["callee:0043b7b8:8"]]
- 008d8244 ["COPY", "tmp:0:8", ["const:f4c:8"]]
- 008d8244 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 008d8244 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 008d8244 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 008d8298 ["COPY", "tmp:0:8", ["const:f8c:8"]]
+ 008d8298 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 008d8298 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 008d8298 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
~~~


<a id="compare-0e2cdc87d28a8bec58aa5ae883809247"></a>

### [`008d83b4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008d8/008d83b4.md) → [`008d8408`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008d8/008d8408.md) FUN_008d8408

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
      "definition_site": "008d842c",
      "incomplete_value": false,
      "site": "008d842c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c84000:8"
          ],
          [
            "leaf",
            "const:6f8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008d83d8",
      "incomplete_value": false,
      "site": "008d83d8",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c84000:8"
          ],
          [
            "leaf",
            "const:628:8"
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
      "008d842c",
      "DATA",
      [
        "storage",
        "00c84628",
        null,
        "pointer"
      ]
    ]
  ],
  "added": [
    [
      "008d842c",
      "DATA",
      [
        "storage",
        "00c846f8",
        null,
        "pointer"
      ]
    ]
  ]
}
~~~


~~~diff
- 008d83c8 ["INT_ADD", "register:40f0:8", ["const:8d83c8:8", "const:4:8"]]
- 008d83c8 ["CALL", null, ["callee:00c57f60:8"]]
+ 008d841c ["INT_ADD", "register:40f0:8", ["const:8d841c:8", "const:4:8"]]
+ 008d841c ["CALL", null, ["callee:00c57f60:8"]]
- 008d83d4 ["COPY", "tmp:0:8", ["const:628:8"]]
- 008d83d4 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 008d83d4 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 008d83d4 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 008d8428 ["COPY", "tmp:0:8", ["const:6f8:8"]]
+ 008d8428 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 008d8428 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 008d8428 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-b456399696a3f5e09a8a4113282186fa"></a>

### [`008d83e8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008d8/008d83e8.md) → [`008d843c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008d8/008d843c.md) FUN_008d843c

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
      "definition_site": "008d8448",
      "incomplete_value": false,
      "site": "008d8448",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c84000:8"
          ],
          [
            "leaf",
            "const:6f8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008d83f4",
      "incomplete_value": false,
      "site": "008d83f4",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c84000:8"
          ],
          [
            "leaf",
            "const:628:8"
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
      "008d8448",
      "DATA",
      [
        "storage",
        "00c84628",
        null,
        "pointer"
      ]
    ]
  ],
  "added": [
    [
      "008d8448",
      "DATA",
      [
        "storage",
        "00c846f8",
        null,
        "pointer"
      ]
    ]
  ]
}
~~~


~~~diff
- 008d83f0 ["COPY", "tmp:0:8", ["const:628:8"]]
- 008d83f0 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 008d83f0 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 008d83f0 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 008d8444 ["COPY", "tmp:0:8", ["const:6f8:8"]]
+ 008d8444 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 008d8444 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 008d8444 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
~~~


<a id="compare-7bbbf96e4c93d279e8dea1c61fe00b05"></a>

### [`008d8404`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008d8/008d8404.md) → [`008d8458`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008d8/008d8458.md) FUN_008d8458

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `bounded` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 5件 [`008b7a10`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008b7/008b7a10.md) [`008d8570`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008d8/008d8570.md) [`008d8574`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008d8/008d8574.md) [`00acabd4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00aca/00acabd4.md) [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md)
- 新版 呼出元 0件  · 呼出先 5件 [`008b7a68`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b7/008b7a68.md) [`008d85c4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008d8/008d85c4.md) [`008d85c8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008d8/008d85c8.md) [`00acac44`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00aca/00acac44.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 95.35% / 新版 95.35%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "008d848c",
      "incomplete_value": false,
      "site": "008d848c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c84000:8"
          ],
          [
            "leaf",
            "const:768:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008d8438",
      "incomplete_value": false,
      "site": "008d8438",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c84000:8"
          ],
          [
            "leaf",
            "const:698:8"
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
      "008d848c",
      "DATA",
      [
        "storage",
        "00c84698",
        null,
        "undefined *"
      ]
    ],
    [
      "008d84c4",
      "READ",
      [
        "storage",
        "00c846b8",
        null,
        "pointer"
      ]
    ],
    [
      "008d84c4",
      "READ",
      [
        "storage",
        "00c846c0",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "008d848c",
      "DATA",
      [
        "storage",
        "00c84768",
        null,
        "undefined *"
      ]
    ],
    [
      "008d84c4",
      "READ",
      [
        "storage",
        "00c84788",
        null,
        "pointer"
      ]
    ],
    [
      "008d84c4",
      "READ",
      [
        "storage",
        "00c84790",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 008d842c ["COPY", "tmp:0:8", ["const:698:8"]]
- 008d842c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 008d842c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 008d842c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 008d8480 ["COPY", "tmp:0:8", ["const:768:8"]]
+ 008d8480 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 008d8480 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 008d8480 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 008d8448 ["INT_ADD", "register:40f0:8", ["const:8d8448:8", "const:4:8"]]
- 008d8448 ["CALL", null, ["callee:00acac44:8"]]
+ 008d849c ["INT_ADD", "register:40f0:8", ["const:8d849c:8", "const:4:8"]]
+ 008d849c ["CALL", null, ["callee:00acac44:8"]]
- 008d8474 ["COPY", "register:0:8", ["register:4040:8"]]
- 008d8474 ["INT_ADD", "register:40f0:8", ["const:8d8474:8", "const:4:8"]]
- 008d8474 ["CALLIND", null, ["register:0:8"]]
+ 008d84c8 ["COPY", "register:0:8", ["register:4040:8"]]
+ 008d84c8 ["INT_ADD", "register:40f0:8", ["const:8d84c8:8", "const:4:8"]]
+ 008d84c8 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-734a433a0f4c0d71d8d1f78974fca2f1"></a>

### [`008d8528`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008d8/008d8528.md) → [`008d857c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008d8/008d857c.md) FUN_008d857c

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
      "definition_site": "008d85a0",
      "incomplete_value": false,
      "site": "008d85a0",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c84000:8"
          ],
          [
            "leaf",
            "const:768:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008d854c",
      "incomplete_value": false,
      "site": "008d854c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c84000:8"
          ],
          [
            "leaf",
            "const:698:8"
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
      "008d85a0",
      "DATA",
      [
        "storage",
        "00c84698",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "008d85a0",
      "DATA",
      [
        "storage",
        "00c84768",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 008d853c ["INT_ADD", "register:40f0:8", ["const:8d853c:8", "const:4:8"]]
- 008d853c ["CALL", null, ["callee:00c57f60:8"]]
+ 008d8590 ["INT_ADD", "register:40f0:8", ["const:8d8590:8", "const:4:8"]]
+ 008d8590 ["CALL", null, ["callee:00c57f60:8"]]
- 008d8548 ["COPY", "tmp:0:8", ["const:698:8"]]
- 008d8548 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 008d8548 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 008d8548 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 008d859c ["COPY", "tmp:0:8", ["const:768:8"]]
+ 008d859c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 008d859c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 008d859c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-4d6d3e71bb6e4cd8ee765de2f66cd985"></a>

### [`008d855c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008d8/008d855c.md) → [`008d85b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008d8/008d85b0.md) FUN_008d85b0

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
      "definition_site": "008d85bc",
      "incomplete_value": false,
      "site": "008d85bc",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c84000:8"
          ],
          [
            "leaf",
            "const:768:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008d8568",
      "incomplete_value": false,
      "site": "008d8568",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c84000:8"
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
      "008d85bc",
      "DATA",
      [
        "storage",
        "00c84698",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "008d85bc",
      "DATA",
      [
        "storage",
        "00c84768",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 008d8564 ["COPY", "tmp:0:8", ["const:698:8"]]
- 008d8564 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 008d8564 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 008d8564 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 008d85b8 ["COPY", "tmp:0:8", ["const:768:8"]]
+ 008d85b8 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 008d85b8 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 008d85b8 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
~~~


<a id="compare-2cefef791adb5e5155b8b18173dd7b51"></a>

### [`008d8578`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008d8/008d8578.md) → [`008d85cc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008d8/008d85cc.md) FUN_008d85cc

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 6件 [`007562a4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00756/007562a4.md) [`008514f8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00851/008514f8.md) [`008b7994`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008b7/008b7994.md) [`008b7a10`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008b7/008b7a10.md) [`00ac863c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00ac8/00ac863c.md)
- 新版 呼出元 0件  · 呼出先 6件 [`007562fc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00756/007562fc.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md) [`008b79ec`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b7/008b79ec.md) [`008b7a68`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b7/008b7a68.md) [`00ac86ac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00ac8/00ac86ac.md)

変更の種類 branch_value, call, call_target, constant, operands_and_dependencies, store_destination, store_value

命令の説明率　旧版 87.69% / 新版 87.69%

優先判定に残った影響 `branch_value` 1件, `call_target` 1件, `store_destination` 3件, `store_value` 2件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_destination",
    "new": {
      "definition_site": "008d864c",
      "incomplete_value": false,
      "site": "008d864c",
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
      "definition_site": "008d85f8",
      "incomplete_value": false,
      "site": "008d85f8",
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
    "ordinal": 11,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "008d8640",
      "incomplete_value": true,
      "site": "008d864c",
      "value": [
        "LOAD",
        "8",
        [
          [
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
      "definition_site": "008d85ec",
      "incomplete_value": true,
      "site": "008d85f8",
      "value": [
        "LOAD",
        "8",
        [
          [
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
    "ordinal": 11,
    "slot": 2
  },
  {
    "confidence": "bounded",
    "kind": "store_destination",
    "new": {
      "definition_site": "008d8650",
      "incomplete_value": false,
      "site": "008d8650",
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
      "definition_site": "008d85fc",
      "incomplete_value": false,
      "site": "008d85fc",
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
    "ordinal": 12,
    "slot": 1
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "008d8640",
      "READ",
      [
        "storage",
        "00ca4978",
        null,
        "undefined8"
      ]
    ],
    [
      "008d8644",
      "READ",
      [
        "storage",
        "00ca4968",
        null,
        "undefined8"
      ]
    ],
    [
      "008d864c",
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
      "008d85f0",
      "DATA",
      [
        "storage",
        "0044e330",
        null,
        null
      ]
    ],
    [
      "008d8640",
      "READ",
      [
        "storage",
        "00ca4a78",
        null,
        "undefined8"
      ]
    ],
    [
      "008d8644",
      "READ",
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
- 008d85a4 ["INT_ADD", "register:40f0:8", ["const:8d85a4:8", "const:4:8"]]
- 008d85a4 ["CALL", null, ["callee:00851550:8"]]
+ 008d85f8 ["INT_ADD", "register:40f0:8", ["const:8d85f8:8", "const:4:8"]]
+ 008d85f8 ["CALL", null, ["callee:00851550:8"]]
- 008d85a8 ["INT_ADD", "register:40f0:8", ["const:8d85a8:8", "const:4:8"]]
- 008d85a8 ["CALL", null, ["callee:00851550:8"]]
+ 008d85fc ["INT_ADD", "register:40f0:8", ["const:8d85fc:8", "const:4:8"]]
+ 008d85fc ["CALL", null, ["callee:00851550:8"]]
- 008d85cc ["INT_ADD", "register:40f0:8", ["const:8d85cc:8", "const:4:8"]]
- 008d85cc ["CALL", null, ["callee:00851550:8"]]
+ 008d8620 ["INT_ADD", "register:40f0:8", ["const:8d8620:8", "const:4:8"]]
+ 008d8620 ["CALL", null, ["callee:00851550:8"]]
~~~


<a id="compare-577227c57e9e3561f1c723df3c279092"></a>

### [`008d86bc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008d8/008d86bc.md) → [`008d8710`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008d8/008d8710.md) FUN_008d8710

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
      "definition_site": "008d8734",
      "incomplete_value": false,
      "site": "008d8734",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c84000:8"
          ],
          [
            "leaf",
            "const:7f8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008d86e0",
      "incomplete_value": false,
      "site": "008d86e0",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c84000:8"
          ],
          [
            "leaf",
            "const:728:8"
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
      "008d8734",
      "DATA",
      [
        "storage",
        "00c84728",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "008d8734",
      "DATA",
      [
        "storage",
        "00c847f8",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 008d86d0 ["INT_ADD", "register:40f0:8", ["const:8d86d0:8", "const:4:8"]]
- 008d86d0 ["CALL", null, ["callee:00c57f60:8"]]
+ 008d8724 ["INT_ADD", "register:40f0:8", ["const:8d8724:8", "const:4:8"]]
+ 008d8724 ["CALL", null, ["callee:00c57f60:8"]]
- 008d86dc ["COPY", "tmp:0:8", ["const:728:8"]]
- 008d86dc ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 008d86dc ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 008d86dc ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 008d8730 ["COPY", "tmp:0:8", ["const:7f8:8"]]
+ 008d8730 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 008d8730 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 008d8730 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-3c703658553b30fab00060e26ddc1f01"></a>

### [`008d86f0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008d8/008d86f0.md) → [`008d8744`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008d8/008d8744.md) FUN_008d8744

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
      "definition_site": "008d8750",
      "incomplete_value": false,
      "site": "008d8750",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c84000:8"
          ],
          [
            "leaf",
            "const:7f8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008d86fc",
      "incomplete_value": false,
      "site": "008d86fc",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c84000:8"
          ],
          [
            "leaf",
            "const:728:8"
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
      "008d8750",
      "DATA",
      [
        "storage",
        "00c84728",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "008d8750",
      "DATA",
      [
        "storage",
        "00c847f8",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 008d86f8 ["COPY", "tmp:0:8", ["const:728:8"]]
- 008d86f8 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 008d86f8 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 008d86f8 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 008d874c ["COPY", "tmp:0:8", ["const:7f8:8"]]
+ 008d874c ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 008d874c ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 008d874c ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
~~~


<a id="compare-a65a6db01d3f46417ce8a03049a6a39d"></a>

### [`008d87cc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008d8/008d87cc.md) → [`008d8820`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008d8/008d8820.md) FUN_008d8820

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
      "definition_site": "008d8844",
      "incomplete_value": false,
      "site": "008d8844",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c84000:8"
          ],
          [
            "leaf",
            "const:878:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008d87f0",
      "incomplete_value": false,
      "site": "008d87f0",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c84000:8"
          ],
          [
            "leaf",
            "const:7a8:8"
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
      "008d8844",
      "DATA",
      [
        "storage",
        "00c847a8",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "008d8844",
      "DATA",
      [
        "storage",
        "00c84878",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 008d87e0 ["INT_ADD", "register:40f0:8", ["const:8d87e0:8", "const:4:8"]]
- 008d87e0 ["CALL", null, ["callee:00c57f60:8"]]
+ 008d8834 ["INT_ADD", "register:40f0:8", ["const:8d8834:8", "const:4:8"]]
+ 008d8834 ["CALL", null, ["callee:00c57f60:8"]]
- 008d87ec ["COPY", "tmp:0:8", ["const:7a8:8"]]
- 008d87ec ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 008d87ec ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 008d87ec ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 008d8840 ["COPY", "tmp:0:8", ["const:878:8"]]
+ 008d8840 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 008d8840 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 008d8840 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-f33db179a6826335e2ef9b275e9f8175"></a>

### [`008d8800`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008d8/008d8800.md) → [`008d8854`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008d8/008d8854.md) FUN_008d8854

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
      "definition_site": "008d8860",
      "incomplete_value": false,
      "site": "008d8860",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c84000:8"
          ],
          [
            "leaf",
            "const:878:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008d880c",
      "incomplete_value": false,
      "site": "008d880c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c84000:8"
          ],
          [
            "leaf",
            "const:7a8:8"
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
      "008d8860",
      "DATA",
      [
        "storage",
        "00c847a8",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "008d8860",
      "DATA",
      [
        "storage",
        "00c84878",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 008d8808 ["COPY", "tmp:0:8", ["const:7a8:8"]]
- 008d8808 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 008d8808 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 008d8808 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 008d885c ["COPY", "tmp:0:8", ["const:878:8"]]
+ 008d885c ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 008d885c ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 008d885c ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
~~~


<a id="compare-c73b9ce5c94db747bde5e442aa06be8a"></a>

### [`008d881c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008d8/008d881c.md) → [`008d8870`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008d8/008d8870.md) FUN_008d8870

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 10件 [`0047acf4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047a/0047acf4.md) [`0047cdd4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047c/0047cdd4.md) [`0048ce50`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0048c/0048ce50.md) [`0048ce54`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0048c/0048ce54.md) [`008b7a10`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008b7/008b7a10.md)
- 新版 呼出元 0件  · 呼出先 10件 [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md) [`0047ce14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047ce14.md) [`0048ce90`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048c/0048ce90.md) [`0048ce94`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048c/0048ce94.md) [`008b7a68`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b7/008b7a68.md)

変更の種類 call, call_target, constant, operands_and_dependencies, store_value

命令の説明率　旧版 93.58% / 新版 93.58%

優先判定に残った影響 `call_target` 2件, `store_value` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "008d8954",
      "incomplete_value": true,
      "site": "008d8968",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:bdb:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008d8900",
      "incomplete_value": true,
      "site": "008d8914",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:baa:8"
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
      "definition_site": "008d8980",
      "incomplete_value": false,
      "site": "008d8988",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c84000:8"
          ],
          [
            "leaf",
            "const:8e8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008d892c",
      "incomplete_value": false,
      "site": "008d8934",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c84000:8"
          ],
          [
            "leaf",
            "const:818:8"
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
      "site": "008d88a8",
      "value": [
        "leaf",
        "ram:47ad34:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "008d8854",
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
      "008d88a8",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047acf4"
      ]
    ],
    [
      "008d88c4",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047acf4"
      ]
    ],
    [
      "008d8954",
      "READ",
      [
        "storage",
        "002b4baa",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "008d88a8",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ],
    [
      "008d88c4",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ],
    [
      "008d8954",
      "READ",
      [
        "storage",
        "002b4bdb",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 008d8854 ["INT_ADD", "register:40f0:8", ["const:8d8854:8", "const:4:8"]]
- 008d8854 ["CALL", null, ["ram:47acf4:8"]]
+ 008d88a8 ["INT_ADD", "register:40f0:8", ["const:8d88a8:8", "const:4:8"]]
+ 008d88a8 ["CALL", null, ["ram:47ad34:8"]]
- 008d8870 ["INT_ADD", "register:40f0:8", ["const:8d8870:8", "const:4:8"]]
- 008d8870 ["CALL", null, ["ram:47acf4:8"]]
+ 008d88c4 ["INT_ADD", "register:40f0:8", ["const:8d88c4:8", "const:4:8"]]
+ 008d88c4 ["CALL", null, ["ram:47ad34:8"]]
- 008d88a4 ["INT_ADD", "register:40f0:8", ["const:8d88a4:8", "const:4:8"]]
- 008d88a4 ["CALL", null, ["callee:0048ce90:8"]]
+ 008d88f8 ["INT_ADD", "register:40f0:8", ["const:8d88f8:8", "const:4:8"]]
+ 008d88f8 ["CALL", null, ["callee:0048ce90:8"]]
~~~


<a id="compare-8cd452ba71699759c0bd577a5fcf2a2a"></a>

### [`008d8a8c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008d8/008d8a8c.md) → [`008d8ae0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008d8/008d8ae0.md) FUN_008d8ae0

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
      "definition_site": "008d8af4",
      "incomplete_value": false,
      "site": "008d8af8",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c84000:8"
          ],
          [
            "leaf",
            "const:8e8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008d8aa0",
      "incomplete_value": false,
      "site": "008d8aa4",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c84000:8"
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
      "008d8af8",
      "DATA",
      [
        "storage",
        "00c84818",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "008d8af8",
      "DATA",
      [
        "storage",
        "00c848e8",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 008d8a98 ["INT_ADD", "register:40f0:8", ["const:8d8a98:8", "const:4:8"]]
- 008d8a98 ["CALL", null, ["callee:00c57f60:8"]]
+ 008d8aec ["INT_ADD", "register:40f0:8", ["const:8d8aec:8", "const:4:8"]]
+ 008d8aec ["CALL", null, ["callee:00c57f60:8"]]
- 008d8aa0 ["COPY", "tmp:0:8", ["const:818:8"]]
- 008d8aa0 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 008d8aa0 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 008d8aa0 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 008d8af4 ["COPY", "tmp:0:8", ["const:8e8:8"]]
+ 008d8af4 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 008d8af4 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 008d8af4 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-857690e71d8fd1a530029708cbb98c11"></a>

### [`008d8ab0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008d8/008d8ab0.md) → [`008d8b04`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008d8/008d8b04.md) FUN_008d8b04

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
      "definition_site": "008d8b08",
      "incomplete_value": false,
      "site": "008d8b0c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c84000:8"
          ],
          [
            "leaf",
            "const:8e8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008d8ab4",
      "incomplete_value": false,
      "site": "008d8ab8",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c84000:8"
          ],
          [
            "leaf",
            "const:818:8"
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
      "008d8b0c",
      "DATA",
      [
        "storage",
        "00c84818",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "008d8b0c",
      "DATA",
      [
        "storage",
        "00c848e8",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 008d8ab4 ["COPY", "tmp:0:8", ["const:818:8"]]
- 008d8ab4 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 008d8ab4 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 008d8ab4 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 008d8b08 ["COPY", "tmp:0:8", ["const:8e8:8"]]
+ 008d8b08 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 008d8b08 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 008d8b08 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-e8720dc9086785c1e6c605e868b269dd"></a>

### [`008d8b0c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008d8/008d8b0c.md) → [`008d8b60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008d8/008d8b60.md) FUN_008d8b60

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
      "definition_site": "008d8b84",
      "incomplete_value": false,
      "site": "008d8b84",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c84000:8"
          ],
          [
            "leaf",
            "const:978:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008d8b30",
      "incomplete_value": false,
      "site": "008d8b30",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c84000:8"
          ],
          [
            "leaf",
            "const:8a8:8"
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
      "008d8b84",
      "DATA",
      [
        "storage",
        "00c848a8",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "008d8b84",
      "DATA",
      [
        "storage",
        "00c84978",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 008d8b20 ["INT_ADD", "register:40f0:8", ["const:8d8b20:8", "const:4:8"]]
- 008d8b20 ["CALL", null, ["callee:00c57f60:8"]]
+ 008d8b74 ["INT_ADD", "register:40f0:8", ["const:8d8b74:8", "const:4:8"]]
+ 008d8b74 ["CALL", null, ["callee:00c57f60:8"]]
- 008d8b2c ["COPY", "tmp:0:8", ["const:8a8:8"]]
- 008d8b2c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 008d8b2c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 008d8b2c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 008d8b80 ["COPY", "tmp:0:8", ["const:978:8"]]
+ 008d8b80 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 008d8b80 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 008d8b80 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-4daacdbd4252e34492e742ebc9113f82"></a>

### [`008d8b40`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008d8/008d8b40.md) → [`008d8b94`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008d8/008d8b94.md) FUN_008d8b94

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
      "definition_site": "008d8ba0",
      "incomplete_value": false,
      "site": "008d8ba0",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c84000:8"
          ],
          [
            "leaf",
            "const:978:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008d8b4c",
      "incomplete_value": false,
      "site": "008d8b4c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c84000:8"
          ],
          [
            "leaf",
            "const:8a8:8"
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
      "008d8ba0",
      "DATA",
      [
        "storage",
        "00c848a8",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "008d8ba0",
      "DATA",
      [
        "storage",
        "00c84978",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 008d8b48 ["COPY", "tmp:0:8", ["const:8a8:8"]]
- 008d8b48 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 008d8b48 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 008d8b48 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 008d8b9c ["COPY", "tmp:0:8", ["const:978:8"]]
+ 008d8b9c ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 008d8b9c ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 008d8b9c ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
~~~


<a id="compare-555e1c2930fc431c7aec5de1298ce510"></a>

### [`008d8b5c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008d8/008d8b5c.md) → [`008d8bb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008d8/008d8bb0.md) FUN_008d8bb0

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 3件 [`0047acf4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047a/0047acf4.md) [`0047cdd4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047c/0047cdd4.md) [`008d51a4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008d5/008d51a4.md)
- 新版 呼出元 0件  · 呼出先 3件 [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md) [`0047ce14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047ce14.md) [`008d51f8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008d5/008d51f8.md)

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
      "site": "008d8bd0",
      "value": [
        "leaf",
        "ram:47ad34:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "008d8b7c",
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
      "site": "008d8bdc",
      "value": [
        "leaf",
        "ram:47ad34:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "008d8b88",
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
      "008d8bd0",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047acf4"
      ]
    ],
    [
      "008d8bdc",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047acf4"
      ]
    ]
  ],
  "added": [
    [
      "008d8bd0",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ],
    [
      "008d8bdc",
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
- 008d8b7c ["INT_ADD", "register:40f0:8", ["const:8d8b7c:8", "const:4:8"]]
- 008d8b7c ["CALL", null, ["ram:47acf4:8"]]
+ 008d8bd0 ["INT_ADD", "register:40f0:8", ["const:8d8bd0:8", "const:4:8"]]
+ 008d8bd0 ["CALL", null, ["ram:47ad34:8"]]
- 008d8b88 ["INT_ADD", "register:40f0:8", ["const:8d8b88:8", "const:4:8"]]
- 008d8b88 ["CALL", null, ["ram:47acf4:8"]]
+ 008d8bdc ["INT_ADD", "register:40f0:8", ["const:8d8bdc:8", "const:4:8"]]
+ 008d8bdc ["CALL", null, ["ram:47ad34:8"]]
~~~


<a id="compare-14580958110e7974fea18dfd12c5de32"></a>

### [`008d8be0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008d8/008d8be0.md) → [`008d8c34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008d8/008d8c34.md) FUN_008d8c34

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
      "definition_site": "008d8c58",
      "incomplete_value": false,
      "site": "008d8c58",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c84000:8"
          ],
          [
            "leaf",
            "const:9f8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008d8c04",
      "incomplete_value": false,
      "site": "008d8c04",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c84000:8"
          ],
          [
            "leaf",
            "const:928:8"
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
      "008d8c58",
      "DATA",
      [
        "storage",
        "00c84928",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "008d8c58",
      "DATA",
      [
        "storage",
        "00c849f8",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 008d8bf4 ["INT_ADD", "register:40f0:8", ["const:8d8bf4:8", "const:4:8"]]
- 008d8bf4 ["CALL", null, ["callee:00c57f60:8"]]
+ 008d8c48 ["INT_ADD", "register:40f0:8", ["const:8d8c48:8", "const:4:8"]]
+ 008d8c48 ["CALL", null, ["callee:00c57f60:8"]]
- 008d8c00 ["COPY", "tmp:0:8", ["const:928:8"]]
- 008d8c00 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 008d8c00 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 008d8c00 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 008d8c54 ["COPY", "tmp:0:8", ["const:9f8:8"]]
+ 008d8c54 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 008d8c54 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 008d8c54 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-8986b1cf3292f3f16fa9b30b9de37790"></a>

### [`008d8c14`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008d8/008d8c14.md) → [`008d8c68`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008d8/008d8c68.md) FUN_008d8c68

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
      "definition_site": "008d8c74",
      "incomplete_value": false,
      "site": "008d8c74",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c84000:8"
          ],
          [
            "leaf",
            "const:9f8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008d8c20",
      "incomplete_value": false,
      "site": "008d8c20",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c84000:8"
          ],
          [
            "leaf",
            "const:928:8"
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
      "008d8c74",
      "DATA",
      [
        "storage",
        "00c84928",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "008d8c74",
      "DATA",
      [
        "storage",
        "00c849f8",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 008d8c1c ["COPY", "tmp:0:8", ["const:928:8"]]
- 008d8c1c ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 008d8c1c ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 008d8c1c ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 008d8c70 ["COPY", "tmp:0:8", ["const:9f8:8"]]
+ 008d8c70 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 008d8c70 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 008d8c70 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
~~~


<a id="compare-2001edce1497f5bd7d727fbf156af359"></a>

### [`008d8c30`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008d8/008d8c30.md) → [`008d8c84`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008d8/008d8c84.md) FUN_008d8c84

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 11件 [`0047acf4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047a/0047acf4.md) [`0047cdd4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047c/0047cdd4.md) [`00597644`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00597/00597644.md) [`008b6e58`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008b6/008b6e58.md) [`008b6e60`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008b6/008b6e60.md)
- 新版 呼出元 0件  · 呼出先 11件 [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md) [`0047ce14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047ce14.md) [`00597684`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00597/00597684.md) [`008b6eb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b6/008b6eb0.md) [`008b6eb8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b6/008b6eb8.md)

変更の種類 call, call_argument_candidate, call_target, constant, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, store_value, unresolved_store_alignment

命令の説明率　旧版 93.10% / 新版 93.10%

優先判定に残った影響 `call_argument_candidate` 1件, `call_target` 2件, `store_value` 1件, `unresolved_store_alignment` 2件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "008d8d74",
      "incomplete_value": false,
      "site": "008d8d74",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c84000:8"
          ],
          [
            "leaf",
            "const:a68:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008d8d20",
      "incomplete_value": false,
      "site": "008d8d20",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c84000:8"
          ],
          [
            "leaf",
            "const:998:8"
          ]
        ]
      ]
    },
    "ordinal": 11,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "call_target",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "008d8cc0",
      "value": [
        "leaf",
        "ram:47ad34:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "008d8c6c",
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
      "site": "008d8cdc",
      "value": [
        "leaf",
        "ram:47ad34:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "008d8c88",
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
      "unmatched:008d8c34",
      "WRITE",
      [
        "storage",
        "Stack[-0x40]",
        null,
        null
      ]
    ],
    [
      "008d8cc0",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047acf4"
      ]
    ],
    [
      "008d8cdc",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047acf4"
      ]
    ]
  ],
  "added": [
    [
      "008d8c88",
      "WRITE",
      [
        "storage",
        "Stack[-0x40]",
        null,
        null
      ]
    ],
    [
      "008d8cc0",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ],
    [
      "008d8cdc",
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
- 008d8c6c ["INT_ADD", "register:40f0:8", ["const:8d8c6c:8", "const:4:8"]]
- 008d8c6c ["CALL", null, ["ram:47acf4:8"]]
+ 008d8cc0 ["INT_ADD", "register:40f0:8", ["const:8d8cc0:8", "const:4:8"]]
+ 008d8cc0 ["CALL", null, ["ram:47ad34:8"]]
- 008d8c88 ["INT_ADD", "register:40f0:8", ["const:8d8c88:8", "const:4:8"]]
- 008d8c88 ["CALL", null, ["ram:47acf4:8"]]
+ 008d8cdc ["INT_ADD", "register:40f0:8", ["const:8d8cdc:8", "const:4:8"]]
+ 008d8cdc ["CALL", null, ["ram:47ad34:8"]]
+ 008d8c88 ["COPY", "tmp:0:8", ["register:40e8:8"]]
+ 008d8c88 ["COPY", "tmp:1:8", ["register:40f0:8"]]
+ 008d8c88 ["INT_ADD", "tmp:2:8", ["register:8:8", "const:40:8"]]
+ 008d8c88 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
~~~


<a id="compare-a17b0f8df66f9e0097111b35c760a79d"></a>

### [`008d8e04`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008d8/008d8e04.md) → [`008d8e58`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008d8/008d8e58.md) FUN_008d8e58

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
      "definition_site": "008d8e7c",
      "incomplete_value": false,
      "site": "008d8e80",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c84000:8"
          ],
          [
            "leaf",
            "const:a68:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008d8e28",
      "incomplete_value": false,
      "site": "008d8e2c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c84000:8"
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
      "008d8e80",
      "DATA",
      [
        "storage",
        "00c84998",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "008d8e80",
      "DATA",
      [
        "storage",
        "00c84a68",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 008d8e18 ["INT_ADD", "register:40f0:8", ["const:8d8e18:8", "const:4:8"]]
- 008d8e18 ["CALL", null, ["callee:00c57f60:8"]]
+ 008d8e6c ["INT_ADD", "register:40f0:8", ["const:8d8e6c:8", "const:4:8"]]
+ 008d8e6c ["CALL", null, ["callee:00c57f60:8"]]
- 008d8e28 ["COPY", "tmp:0:8", ["const:998:8"]]
- 008d8e28 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 008d8e28 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 008d8e28 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 008d8e7c ["COPY", "tmp:0:8", ["const:a68:8"]]
+ 008d8e7c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 008d8e7c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 008d8e7c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-7699a911763ebbedd0bbd7c84153d4d7"></a>

### [`008d8e44`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008d8/008d8e44.md) → [`008d8e98`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008d8/008d8e98.md) FUN_008d8e98

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
      "definition_site": "008d8e9c",
      "incomplete_value": false,
      "site": "008d8ea0",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c84000:8"
          ],
          [
            "leaf",
            "const:a68:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008d8e48",
      "incomplete_value": false,
      "site": "008d8e4c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c84000:8"
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
      "008d8ea0",
      "DATA",
      [
        "storage",
        "00c84998",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "008d8ea0",
      "DATA",
      [
        "storage",
        "00c84a68",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 008d8e48 ["COPY", "tmp:0:8", ["const:998:8"]]
- 008d8e48 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 008d8e48 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 008d8e48 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 008d8e9c ["COPY", "tmp:0:8", ["const:a68:8"]]
+ 008d8e9c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 008d8e9c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 008d8e9c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-8272db45eb9b0ab1e65449a6af3d81b6"></a>

### [`008d8e6c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008d8/008d8e6c.md) → [`008d8ec0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008d8/008d8ec0.md) FUN_008d8ec0

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 22件 [`0043dba4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043d/0043dba4.md) [`0046c9c4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0046c/0046c9c4.md) [`0046ca54`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0046c/0046ca54.md) [`0046cb0c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0046c/0046cb0c.md) [`00550c28`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00550/00550c28.md)
- 新版 呼出元 0件  · 呼出先 22件 [`0043dbe4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043d/0043dbe4.md) [`0046ca04`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046c/0046ca04.md) [`0046ca94`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046c/0046ca94.md) [`0046cb4c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046c/0046cb4c.md) [`00550c68`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00550/00550c68.md)

変更の種類 branch_condition_or_target, call, call_argument_candidate, call_count, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, store_value, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 85.21% / 新版 85.21%

優先判定に残った影響 `call_argument_candidate` 4件, `store_value` 1件, `unresolved_branch_alignment` 2件, `unresolved_call_alignment` 2件, `unresolved_store_alignment` 8件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "008d8f84",
      "incomplete_value": false,
      "site": "008d8f84",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c84000:8"
          ],
          [
            "leaf",
            "const:ad8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008d8f30",
      "incomplete_value": false,
      "site": "008d8f30",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c84000:8"
          ],
          [
            "leaf",
            "const:a08:8"
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
    "new": {
      "definition_site": "008d8fec",
      "incomplete_value": false,
      "site": "008d8ff0",
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
      "definition_site": "008d8f98",
      "incomplete_value": false,
      "site": "008d8f9c",
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
    "ordinal": 8,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "008d9010",
      "incomplete_value": false,
      "site": "008d9014",
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
      "definition_site": "008d8fbc",
      "incomplete_value": false,
      "site": "008d8fc0",
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
      "unmatched:008d8e70",
      "WRITE",
      [
        "storage",
        "Stack[-0x60]",
        null,
        null
      ]
    ],
    [
      "unmatched:008d8e74",
      "WRITE",
      [
        "storage",
        "Stack[-0x50]",
        null,
        null
      ]
    ],
    [
      "unmatched:008d8e9c",
      "READ",
      [
        "storage",
        "00c9ab68",
        null,
        "pointer"
      ]
    ]
  ],
  "added": [
    [
      "008d8ec4",
      "WRITE",
      [
        "storage",
        "Stack[-0x60]",
        null,
        null
      ]
    ],
    [
      "008d8ec8",
      "WRITE",
      [
        "storage",
        "Stack[-0x50]",
        null,
        null
      ]
    ],
    [
      "008d8ef0",
      "READ",
      [
        "storage",
        "00c9ac38",
        null,
        "pointer"
      ]
    ]
  ]
}
~~~


~~~diff
- 008d8f9c ["INT_ADD", "register:40f0:8", ["const:8d8f9c:8", "const:4:8"]]
- 008d8f9c ["CALL", null, ["callee:0046ca94:8"]]
+ 008d8ff0 ["INT_ADD", "register:40f0:8", ["const:8d8ff0:8", "const:4:8"]]
+ 008d8ff0 ["CALL", null, ["callee:0046ca94:8"]]
- 008d8fc0 ["INT_ADD", "register:40f0:8", ["const:8d8fc0:8", "const:4:8"]]
- 008d8fc0 ["CALL", null, ["callee:0046cb4c:8"]]
+ 008d9014 ["INT_ADD", "register:40f0:8", ["const:8d9014:8", "const:4:8"]]
+ 008d9014 ["CALL", null, ["callee:0046cb4c:8"]]
- 008d8ff0 ["INT_ADD", "register:40f0:8", ["const:8d8ff0:8", "const:4:8"]]
- 008d8ff0 ["CALL", null, ["callee:0055a704:8"]]
+ 008d9044 ["INT_ADD", "register:40f0:8", ["const:8d9044:8", "const:4:8"]]
+ 008d9044 ["CALL", null, ["callee:0055a704:8"]]
~~~


<a id="compare-7c459eedd200d3d36e2316197e7fe44a"></a>

### [`008d940c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008d9/008d940c.md) → [`008d9460`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008d9/008d9460.md) FUN_008d9460

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)

変更の種類 constant, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, store_value, unresolved_store_alignment

命令の説明率　旧版 78.57% / 新版 78.57%

優先判定に残った影響 `store_value` 1件, `unresolved_store_alignment` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "008d9480",
      "incomplete_value": false,
      "site": "008d9484",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c84000:8"
          ],
          [
            "leaf",
            "const:ad8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008d942c",
      "incomplete_value": false,
      "site": "008d9430",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c84000:8"
          ],
          [
            "leaf",
            "const:a08:8"
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
      "unmatched:008d9410",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "008d9484",
      "DATA",
      [
        "storage",
        "00c84a08",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "008d9464",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "008d9484",
      "DATA",
      [
        "storage",
        "00c84ad8",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 008d9410 ["INT_ADD", "tmp:0:8", ["register:8:8", "const:10:8"]]
- 008d9410 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4098:8"]]
- 008d9420 ["INT_ADD", "register:40f0:8", ["const:8d9420:8", "const:4:8"]]
- 008d9420 ["CALL", null, ["callee:00c57f60:8"]]
+ 008d9474 ["INT_ADD", "register:40f0:8", ["const:8d9474:8", "const:4:8"]]
+ 008d9474 ["CALL", null, ["callee:00c57f60:8"]]
- 008d942c ["COPY", "tmp:0:8", ["const:a08:8"]]
- 008d942c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 008d942c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 008d942c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 008d9480 ["COPY", "tmp:0:8", ["const:ad8:8"]]
+ 008d9480 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 008d9480 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 008d9480 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-4ba067af504915478977ed04bd3174c0"></a>

### [`008d9444`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008d9/008d9444.md) → [`008d9498`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008d9/008d9498.md) FUN_008d9498

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
      "definition_site": "008d949c",
      "incomplete_value": false,
      "site": "008d94a0",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c84000:8"
          ],
          [
            "leaf",
            "const:ad8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008d9448",
      "incomplete_value": false,
      "site": "008d944c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c84000:8"
          ],
          [
            "leaf",
            "const:a08:8"
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
      "008d94a0",
      "DATA",
      [
        "storage",
        "00c84a08",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "008d94a0",
      "DATA",
      [
        "storage",
        "00c84ad8",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 008d9448 ["COPY", "tmp:0:8", ["const:a08:8"]]
- 008d9448 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 008d9448 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 008d9448 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 008d949c ["COPY", "tmp:0:8", ["const:ad8:8"]]
+ 008d949c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 008d949c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 008d949c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-42a7f80731851480546062a3439808bc"></a>

### [`008d94e4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008d9/008d94e4.md) → [`008d9538`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008d9/008d9538.md) FUN_008d9538

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)

変更の種類 comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_return_alignment, unresolved_store_alignment

命令の説明率　旧版 69.23% / 新版 69.23%

優先判定に残った影響 `unresolved_return_alignment` 1件, `unresolved_store_alignment` 2件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:008d9508",
      "DATA",
      [
        "storage",
        "00c84aa8",
        null,
        "undefined *"
      ]
    ],
    [
      "unmatched:008d9510",
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
      "008d955c",
      "DATA",
      [
        "storage",
        "00c84b78",
        null,
        "undefined *"
      ]
    ],
    [
      "008d9564",
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
- 008d94f8 ["INT_ADD", "register:40f0:8", ["const:8d94f8:8", "const:4:8"]]
- 008d94f8 ["CALL", null, ["callee:00c57f60:8"]]
+ 008d954c ["INT_ADD", "register:40f0:8", ["const:8d954c:8", "const:4:8"]]
+ 008d954c ["CALL", null, ["callee:00c57f60:8"]]
- 008d9504 ["COPY", "tmp:0:8", ["const:aa8:8"]]
- 008d9504 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 008d9504 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 008d9504 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 008d9508 ["COPY", "tmp:0:8", ["register:4040:8"]]
- 008d9508 ["COPY", "tmp:1:8", ["register:4048:8"]]
- 008d9508 ["COPY", "tmp:2:8", ["register:4000:8"]]
- 008d9508 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
~~~


<a id="compare-f325c4cc8a09cdee86fa3e0ddce93900"></a>

### [`008d9518`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008d9/008d9518.md) → [`008d956c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008d9/008d956c.md) FUN_008d956c

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
      "definition_site": "008d9578",
      "incomplete_value": false,
      "site": "008d9578",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c84000:8"
          ],
          [
            "leaf",
            "const:b78:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008d9524",
      "incomplete_value": false,
      "site": "008d9524",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c84000:8"
          ],
          [
            "leaf",
            "const:aa8:8"
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
      "008d9578",
      "DATA",
      [
        "storage",
        "00c84aa8",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "008d9578",
      "DATA",
      [
        "storage",
        "00c84b78",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 008d9520 ["COPY", "tmp:0:8", ["const:aa8:8"]]
- 008d9520 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 008d9520 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 008d9520 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 008d9574 ["COPY", "tmp:0:8", ["const:b78:8"]]
+ 008d9574 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 008d9574 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 008d9574 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
~~~


<a id="compare-e81cc14416da7bede229efeb36959ce6"></a>

### [`008d9534`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008d9/008d9534.md) → [`008d9588`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008d9/008d9588.md) FUN_008d9588

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 7件 [`0047acf4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047a/0047acf4.md) [`0047cdd4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047c/0047cdd4.md) [`008b7a10`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008b7/008b7a10.md) [`008d9704`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008d9/008d9704.md) [`008d9708`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008d9/008d9708.md)
- 新版 呼出元 0件  · 呼出先 7件 [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md) [`0047ce14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047ce14.md) [`008b7a68`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b7/008b7a68.md) [`008d9758`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008d9/008d9758.md) [`008d975c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008d9/008d975c.md)

変更の種類 branch_condition_or_target, call, call_argument_candidate, call_target, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_store_alignment

命令の説明率　旧版 89.71% / 新版 89.71%

優先判定に残った影響 `call_argument_candidate` 1件, `call_target` 2件, `unresolved_store_alignment` 3件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_target",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "008d95c0",
      "value": [
        "leaf",
        "ram:47ad34:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "008d956c",
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
      "site": "008d95dc",
      "value": [
        "leaf",
        "ram:47ad34:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "008d9588",
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
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "008d9668",
      "incomplete_value": true,
      "site": "008d966c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:4098:8"
          ],
          [
            "live",
            "register:4040:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008d9614",
      "incomplete_value": true,
      "site": "008d9618",
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
            "const:2f38:8"
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
      "008d95c0",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047acf4"
      ]
    ],
    [
      "008d95dc",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047acf4"
      ]
    ],
    [
      "unmatched:008d95c8",
      "DATA",
      [
        "storage",
        "00c84b18",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "008d95c0",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ],
    [
      "008d95dc",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ],
    [
      "008d961c",
      "DATA",
      [
        "storage",
        "00c84be8",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 008d956c ["INT_ADD", "register:40f0:8", ["const:8d956c:8", "const:4:8"]]
- 008d956c ["CALL", null, ["ram:47acf4:8"]]
+ 008d95c0 ["INT_ADD", "register:40f0:8", ["const:8d95c0:8", "const:4:8"]]
+ 008d95c0 ["CALL", null, ["ram:47ad34:8"]]
- 008d9588 ["INT_ADD", "register:40f0:8", ["const:8d9588:8", "const:4:8"]]
- 008d9588 ["CALL", null, ["ram:47acf4:8"]]
+ 008d95dc ["INT_ADD", "register:40f0:8", ["const:8d95dc:8", "const:4:8"]]
+ 008d95dc ["CALL", null, ["ram:47ad34:8"]]
- 008d95c0 ["COPY", "tmp:0:8", ["const:b18:8"]]
- 008d95c0 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 008d95c0 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 008d95c0 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-0061c2d237c3f629d90df8e5bbc5cedc"></a>

### [`008d96bc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008d9/008d96bc.md) → [`008d9710`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008d9/008d9710.md) FUN_008d9710

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)

変更の種類 constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, operands_and_dependencies, operation_sequence, store_value, unresolved_return_alignment

命令の説明率　旧版 69.23% / 新版 69.23%

優先判定に残った影響 `store_value` 1件, `unresolved_return_alignment` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "008d9734",
      "incomplete_value": false,
      "site": "008d9734",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c84000:8"
          ],
          [
            "leaf",
            "const:be8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008d96e0",
      "incomplete_value": false,
      "site": "008d96e0",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c84000:8"
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
      "008d9734",
      "DATA",
      [
        "storage",
        "00c84b18",
        null,
        "undefined *"
      ]
    ],
    [
      "unmatched:008d96e8",
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
      "008d9734",
      "DATA",
      [
        "storage",
        "00c84be8",
        null,
        "undefined *"
      ]
    ],
    [
      "008d973c",
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
- 008d96d0 ["INT_ADD", "register:40f0:8", ["const:8d96d0:8", "const:4:8"]]
- 008d96d0 ["CALL", null, ["callee:00c57f60:8"]]
+ 008d9724 ["INT_ADD", "register:40f0:8", ["const:8d9724:8", "const:4:8"]]
+ 008d9724 ["CALL", null, ["callee:00c57f60:8"]]
- 008d96dc ["COPY", "tmp:0:8", ["const:b18:8"]]
- 008d96dc ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 008d96dc ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 008d96dc ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 008d9730 ["COPY", "tmp:0:8", ["const:be8:8"]]
+ 008d9730 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 008d9730 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 008d9730 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 008d96e8 ["COPY", "tmp:0:8", ["register:8:8"]]
- 008d96e8 ["INT_ADD", "register:8:8", ["register:8:8", "const:20:8"]]
- 008d96e8 ["LOAD", "tmp:1:8", ["const:1b1:8", "tmp:0:8"]]
- 008d96e8 ["INT_ADD", "tmp:2:8", ["tmp:0:8", "const:8:8"]]
~~~


<a id="compare-0f93e99bd7a769770668d9ae0cc0ff76"></a>

### [`008d96f0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008d9/008d96f0.md) → [`008d9744`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008d9/008d9744.md) FUN_008d9744

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
      "definition_site": "008d9750",
      "incomplete_value": false,
      "site": "008d9750",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c84000:8"
          ],
          [
            "leaf",
            "const:be8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008d96fc",
      "incomplete_value": false,
      "site": "008d96fc",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c84000:8"
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
      "008d9750",
      "DATA",
      [
        "storage",
        "00c84b18",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "008d9750",
      "DATA",
      [
        "storage",
        "00c84be8",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 008d96f8 ["COPY", "tmp:0:8", ["const:b18:8"]]
- 008d96f8 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 008d96f8 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 008d96f8 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 008d974c ["COPY", "tmp:0:8", ["const:be8:8"]]
+ 008d974c ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 008d974c ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 008d974c ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
~~~


<a id="compare-887057c96261a44f60567516ca770c3e"></a>

### [`008d970c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008d9/008d970c.md) → [`008d9760`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008d9/008d9760.md) FUN_008d9760

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 3件 [`008514f8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00851/008514f8.md) [`008b7994`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008b7/008b7994.md) [`008b7a10`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008b7/008b7a10.md)
- 新版 呼出元 0件  · 呼出先 3件 [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md) [`008b79ec`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b7/008b79ec.md) [`008b7a68`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b7/008b7a68.md)

変更の種類 constant, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_store_alignment

命令の説明率　旧版 96.77% / 新版 96.77%

アドレスに依存する影響 `unresolved_store_alignment` 1件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:008d9710",
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
      "008d9764",
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
- 008d9710 ["INT_ADD", "tmp:0:8", ["register:8:8", "const:10:8"]]
- 008d9710 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:40a8:8"]]
- 008d9724 ["INT_ADD", "register:40f0:8", ["const:8d9724:8", "const:4:8"]]
- 008d9724 ["CALL", null, ["callee:00851550:8"]]
+ 008d9778 ["INT_ADD", "register:40f0:8", ["const:8d9778:8", "const:4:8"]]
+ 008d9778 ["CALL", null, ["callee:00851550:8"]]
- 008d9728 ["INT_ADD", "register:40f0:8", ["const:8d9728:8", "const:4:8"]]
- 008d9728 ["CALL", null, ["callee:00851550:8"]]
+ 008d977c ["INT_ADD", "register:40f0:8", ["const:8d977c:8", "const:4:8"]]
+ 008d977c ["CALL", null, ["callee:00851550:8"]]
~~~


<a id="compare-3f877633ccb7dc8278f191f149a8e1c0"></a>

### [`008d97b0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008d9/008d97b0.md) → [`008d9804`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008d9/008d9804.md) FUN_008d9804

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
      "unmatched:008d97c0",
      "DATA",
      [
        "storage",
        "00c84ba8",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "008d9814",
      "DATA",
      [
        "storage",
        "00c84c78",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 008d97b0 ["COPY", "register:4040:8", ["register:4000:8"]]
- 008d97b4 ["INT_ADD", "tmp:0:8", ["register:4000:8", "const:20:8"]]
- 008d97b4 ["LOAD", "register:4000:8", ["const:1b1:8", "tmp:0:8"]]
- 008d97b8 ["COPY", "register:4048:8", ["const:c84000:8"]]
~~~


<a id="compare-7f9e61d07cc3bd2b98de06b6320b0b35"></a>

### [`008d97d4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008d9/008d97d4.md) → [`008d9828`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008d9/008d9828.md) FUN_008d9828

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)

変更の種類 branch_condition_or_target, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, store_condition, unresolved_branch_alignment, unresolved_store_alignment

命令の説明率　旧版 68.75% / 新版 68.75%

優先判定に残った影響 `store_condition` 4件, `unresolved_branch_alignment` 1件, `unresolved_store_alignment` 1件

~~~json
[
  {
    "confidence": "limited",
    "guard": [
      [
        "FALL_THROUGH",
        "008d97e4"
      ],
      [
        "FALL_THROUGH",
        "008d9838"
      ]
    ],
    "kind": "store_condition",
    "new": {
      "definition_site": "008d9838",
      "incomplete_value": true,
      "site": "008d983c",
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
      "definition_site": "008d97e4",
      "incomplete_value": true,
      "site": "008d97e8",
      "value": [
        "INT_EQUAL",
        "1",
        [
          [
            "live",
            "register:4040:8"
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
    "guard": [
      [
        "FALL_THROUGH",
        "008d97e4"
      ],
      [
        "FALL_THROUGH",
        "008d9838"
      ]
    ],
    "kind": "store_condition",
    "new": {
      "definition_site": "008d9838",
      "incomplete_value": true,
      "site": "008d983c",
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
      "definition_site": "008d97e4",
      "incomplete_value": true,
      "site": "008d97e8",
      "value": [
        "INT_EQUAL",
        "1",
        [
          [
            "live",
            "register:4040:8"
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
    "guard": [
      [
        "FALL_THROUGH",
        "008d97e4"
      ],
      [
        "FALL_THROUGH",
        "008d9838"
      ]
    ],
    "kind": "store_condition",
    "new": {
      "definition_site": "008d9838",
      "incomplete_value": true,
      "site": "008d9840",
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
      "definition_site": "008d97e4",
      "incomplete_value": true,
      "site": "008d97ec",
      "value": [
        "INT_EQUAL",
        "1",
        [
          [
            "live",
            "register:4040:8"
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
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:008d97e0",
      "DATA",
      [
        "storage",
        "00c84ba8",
        null,
        "undefined *"
      ]
    ],
    [
      "unmatched:008d97e4",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "008d9864"
      ]
    ]
  ],
  "added": [
    [
      "008d9834",
      "DATA",
      [
        "storage",
        "00c84c78",
        null,
        "undefined *"
      ]
    ],
    [
      "008d9838",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "008d9864"
      ]
    ]
  ]
}
~~~


~~~diff
- 008d97d4 ["INT_ADD", "tmp:0:8", ["register:4000:8", "const:20:8"]]
- 008d97d4 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
- 008d97d8 ["COPY", "register:4048:8", ["const:c84000:8"]]
- 008d97dc ["COPY", "tmp:0:8", ["const:ba8:8"]]
- 008d97dc ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 008d97dc ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 008d97dc ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
~~~


<a id="compare-b659ddc90ca86900a8a92a83e287695f"></a>

### [`008d9814`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008d9/008d9814.md) → [`008d9868`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008d9/008d9868.md) FUN_008d9868

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `bounded` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 5件 [`008d8238`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008d8/008d8238.md) [`00c53f5c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c53/00c53f5c.md) [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c58000`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58000.md)
- 新版 呼出元 0件  · 呼出先 5件 [`008d828c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008d8/008d828c.md) [`00c53ffc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53ffc.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c580d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c580d0.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 96.77% / 新版 96.77%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "008d98a0",
      "incomplete_value": false,
      "site": "008d98a0",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c84000:8"
          ],
          [
            "leaf",
            "const:c78:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008d984c",
      "incomplete_value": false,
      "site": "008d984c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c84000:8"
          ],
          [
            "leaf",
            "const:ba8:8"
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
      "008d98a0",
      "DATA",
      [
        "storage",
        "00c84ba8",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "008d98a0",
      "DATA",
      [
        "storage",
        "00c84c78",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 008d9830 ["INT_ADD", "register:40f0:8", ["const:8d9830:8", "const:4:8"]]
- 008d9830 ["CALL", null, ["callee:00c57f60:8"]]
+ 008d9884 ["INT_ADD", "register:40f0:8", ["const:8d9884:8", "const:4:8"]]
+ 008d9884 ["CALL", null, ["callee:00c57f60:8"]]
- 008d983c ["COPY", "tmp:0:8", ["const:ba8:8"]]
- 008d983c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 008d983c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 008d983c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 008d9890 ["COPY", "tmp:0:8", ["const:c78:8"]]
+ 008d9890 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 008d9890 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 008d9890 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 008d9894 ["INT_ADD", "register:40f0:8", ["const:8d9894:8", "const:4:8"]]
- 008d9894 ["CALL", null, ["callee:00c57f60:8"]]
+ 008d98e8 ["INT_ADD", "register:40f0:8", ["const:8d98e8:8", "const:4:8"]]
+ 008d98e8 ["CALL", null, ["callee:00c57f60:8"]]
~~~


<a id="compare-f2177af3a9286c81c2455db0d16f99d5"></a>

### [`008d990c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008d9/008d990c.md) → [`008d9960`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008d9/008d9960.md) FUN_008d9960

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `bounded` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 5件 [`008d8238`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008d8/008d8238.md) [`00c53f5c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c53/00c53f5c.md) [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c58000`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58000.md)
- 新版 呼出元 0件  · 呼出先 5件 [`008d828c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008d8/008d828c.md) [`00c53ffc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53ffc.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c580d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c580d0.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 96.55% / 新版 96.55%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "008d998c",
      "incomplete_value": false,
      "site": "008d998c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c84000:8"
          ],
          [
            "leaf",
            "const:c78:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008d9938",
      "incomplete_value": false,
      "site": "008d9938",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c84000:8"
          ],
          [
            "leaf",
            "const:ba8:8"
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
      "008d998c",
      "DATA",
      [
        "storage",
        "00c84ba8",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "008d998c",
      "DATA",
      [
        "storage",
        "00c84c78",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 008d9928 ["COPY", "tmp:0:8", ["const:ba8:8"]]
- 008d9928 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 008d9928 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 008d9928 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 008d997c ["COPY", "tmp:0:8", ["const:c78:8"]]
+ 008d997c ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 008d997c ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 008d997c ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
- 008d9988 ["INT_ADD", "register:40f0:8", ["const:8d9988:8", "const:4:8"]]
- 008d9988 ["CALL", null, ["callee:00c57f60:8"]]
+ 008d99dc ["INT_ADD", "register:40f0:8", ["const:8d99dc:8", "const:4:8"]]
+ 008d99dc ["CALL", null, ["callee:00c57f60:8"]]
- 008d99a0 ["INT_ADD", "register:40f0:8", ["const:8d99a0:8", "const:4:8"]]
- 008d99a0 ["CALL", null, ["callee:00c580d0:8"]]
+ 008d99f4 ["INT_ADD", "register:40f0:8", ["const:8d99f4:8", "const:4:8"]]
+ 008d99f4 ["CALL", null, ["callee:00c580d0:8"]]
~~~


<a id="compare-88bee6b7e1574a689417d25c2ba7a1de"></a>

### [`008d9ac0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008d9/008d9ac0.md) → [`008d9b14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008d9/008d9b14.md) FUN_008d9b14

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
      "definition_site": "008d9b28",
      "incomplete_value": false,
      "site": "008d9b2c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c84000:8"
          ],
          [
            "leaf",
            "const:cf8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008d9ad4",
      "incomplete_value": false,
      "site": "008d9ad8",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c84000:8"
          ],
          [
            "leaf",
            "const:c28:8"
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
      "008d9b2c",
      "DATA",
      [
        "storage",
        "00c84c28",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "008d9b2c",
      "DATA",
      [
        "storage",
        "00c84cf8",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 008d9acc ["INT_ADD", "register:40f0:8", ["const:8d9acc:8", "const:4:8"]]
- 008d9acc ["CALL", null, ["callee:00c57f60:8"]]
+ 008d9b20 ["INT_ADD", "register:40f0:8", ["const:8d9b20:8", "const:4:8"]]
+ 008d9b20 ["CALL", null, ["callee:00c57f60:8"]]
- 008d9ad4 ["COPY", "tmp:0:8", ["const:c28:8"]]
- 008d9ad4 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 008d9ad4 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 008d9ad4 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 008d9b28 ["COPY", "tmp:0:8", ["const:cf8:8"]]
+ 008d9b28 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 008d9b28 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 008d9b28 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-faeaf0a30ddac4a5383d14a9bdeadb1f"></a>

### [`008d9ae4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008d9/008d9ae4.md) → [`008d9b38`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008d9/008d9b38.md) FUN_008d9b38

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
      "definition_site": "008d9b3c",
      "incomplete_value": false,
      "site": "008d9b40",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c84000:8"
          ],
          [
            "leaf",
            "const:cf8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008d9ae8",
      "incomplete_value": false,
      "site": "008d9aec",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c84000:8"
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
      "008d9b40",
      "DATA",
      [
        "storage",
        "00c84c28",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "008d9b40",
      "DATA",
      [
        "storage",
        "00c84cf8",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 008d9ae8 ["COPY", "tmp:0:8", ["const:c28:8"]]
- 008d9ae8 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 008d9ae8 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 008d9ae8 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 008d9b3c ["COPY", "tmp:0:8", ["const:cf8:8"]]
+ 008d9b3c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 008d9b3c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 008d9b3c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-9ef0f7da241caf7e3c217bf7a48d94db"></a>

### [`008d9b40`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008d9/008d9b40.md) → [`008d9b94`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008d9/008d9b94.md) FUN_008d9b94

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
      "definition_site": "008d9ba8",
      "incomplete_value": false,
      "site": "008d9bac",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c84000:8"
          ],
          [
            "leaf",
            "const:d78:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008d9b54",
      "incomplete_value": false,
      "site": "008d9b58",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c84000:8"
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
      "008d9bac",
      "DATA",
      [
        "storage",
        "00c84ca8",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "008d9bac",
      "DATA",
      [
        "storage",
        "00c84d78",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 008d9b4c ["INT_ADD", "register:40f0:8", ["const:8d9b4c:8", "const:4:8"]]
- 008d9b4c ["CALL", null, ["callee:00c57f60:8"]]
+ 008d9ba0 ["INT_ADD", "register:40f0:8", ["const:8d9ba0:8", "const:4:8"]]
+ 008d9ba0 ["CALL", null, ["callee:00c57f60:8"]]
- 008d9b54 ["COPY", "tmp:0:8", ["const:ca8:8"]]
- 008d9b54 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 008d9b54 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 008d9b54 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 008d9ba8 ["COPY", "tmp:0:8", ["const:d78:8"]]
+ 008d9ba8 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 008d9ba8 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 008d9ba8 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-081fc002b5005e3eb4794514ec459a41"></a>

### [`008d9b64`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008d9/008d9b64.md) → [`008d9bb8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008d9/008d9bb8.md) FUN_008d9bb8

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
      "definition_site": "008d9bbc",
      "incomplete_value": false,
      "site": "008d9bc0",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c84000:8"
          ],
          [
            "leaf",
            "const:d78:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008d9b68",
      "incomplete_value": false,
      "site": "008d9b6c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c84000:8"
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
      "008d9bc0",
      "DATA",
      [
        "storage",
        "00c84ca8",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "008d9bc0",
      "DATA",
      [
        "storage",
        "00c84d78",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 008d9b68 ["COPY", "tmp:0:8", ["const:ca8:8"]]
- 008d9b68 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 008d9b68 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 008d9b68 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 008d9bbc ["COPY", "tmp:0:8", ["const:d78:8"]]
+ 008d9bbc ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 008d9bbc ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 008d9bbc ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-db579944fa83434bed8a4d54988f27cd"></a>

### [`008d9bac`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008d9/008d9bac.md) → [`008d9c00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008d9/008d9c00.md) FUN_008d9c00

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
      "definition_site": "008d9c20",
      "incomplete_value": false,
      "site": "008d9c24",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c84000:8"
          ],
          [
            "leaf",
            "const:df8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008d9bcc",
      "incomplete_value": false,
      "site": "008d9bd0",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c84000:8"
          ],
          [
            "leaf",
            "const:d28:8"
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
      "008d9c24",
      "DATA",
      [
        "storage",
        "00c84d28",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "008d9c24",
      "DATA",
      [
        "storage",
        "00c84df8",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 008d9bc0 ["INT_ADD", "register:40f0:8", ["const:8d9bc0:8", "const:4:8"]]
- 008d9bc0 ["CALL", null, ["callee:00c57f60:8"]]
+ 008d9c14 ["INT_ADD", "register:40f0:8", ["const:8d9c14:8", "const:4:8"]]
+ 008d9c14 ["CALL", null, ["callee:00c57f60:8"]]
- 008d9bcc ["COPY", "tmp:0:8", ["const:d28:8"]]
- 008d9bcc ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 008d9bcc ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 008d9bcc ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 008d9c20 ["COPY", "tmp:0:8", ["const:df8:8"]]
+ 008d9c20 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 008d9c20 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 008d9c20 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-987ce0b88ddb1e1a3d2e20c0deefd513"></a>

### [`008d9be4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008d9/008d9be4.md) → [`008d9c38`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008d9/008d9c38.md) FUN_008d9c38

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
      "definition_site": "008d9c3c",
      "incomplete_value": false,
      "site": "008d9c40",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c84000:8"
          ],
          [
            "leaf",
            "const:df8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008d9be8",
      "incomplete_value": false,
      "site": "008d9bec",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c84000:8"
          ],
          [
            "leaf",
            "const:d28:8"
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
      "008d9c40",
      "DATA",
      [
        "storage",
        "00c84d28",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "008d9c40",
      "DATA",
      [
        "storage",
        "00c84df8",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 008d9be8 ["COPY", "tmp:0:8", ["const:d28:8"]]
- 008d9be8 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 008d9be8 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 008d9be8 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 008d9c3c ["COPY", "tmp:0:8", ["const:df8:8"]]
+ 008d9c3c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 008d9c3c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 008d9c3c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-ff4b1e57d4f93b6cd2aa4a662b74445e"></a>

### [`008d9c04`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008d9/008d9c04.md) → [`008d9c58`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008d9/008d9c58.md) FUN_008d9c58

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 28件 [`00447ef4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00447/00447ef4.md) [`0044da38`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0044d/0044da38.md) [`0048ccf8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0048c/0048ccf8.md) [`0048ce54`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0048c/0048ce54.md) [`0048ce84`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0048c/0048ce84.md)
- 新版 呼出元 0件  · 呼出先 28件 [`00447f34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00447/00447f34.md) [`0044da78`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0044d/0044da78.md) [`0048cd38`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048c/0048cd38.md) [`0048ce94`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048c/0048ce94.md) [`0048cec4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048c/0048cec4.md)

変更の種類 call, call_argument_candidate, call_target, constant, operands_and_dependencies, operation_sequence, store_value

命令の説明率　旧版 89.32% / 新版 89.32%

優先判定に残った影響 `call_argument_candidate` 3件, `call_target` 2件, `store_value` 17件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "008d9d34",
      "incomplete_value": true,
      "site": "008d9d4c",
      "value": [
        "LOAD",
        "16",
        [
          [
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
      "definition_site": "008d9ce0",
      "incomplete_value": true,
      "site": "008d9cf8",
      "value": [
        "LOAD",
        "16",
        [
          [
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
    "ordinal": 12,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "008d9d40",
      "incomplete_value": true,
      "site": "008d9d50",
      "value": [
        "LOAD",
        "16",
        [
          [
            "leaf",
            "const:1b1:8"
          ],
          [
            "INT_ADD",
            "8",
            [
              [
                "leaf",
                "const:2aa000:8"
              ],
              [
                "leaf",
                "const:2de:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008d9cec",
      "incomplete_value": true,
      "site": "008d9cfc",
      "value": [
        "LOAD",
        "16",
        [
          [
            "leaf",
            "const:1b1:8"
          ],
          [
            "INT_ADD",
            "8",
            [
              [
                "leaf",
                "const:2aa000:8"
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
    "ordinal": 13,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "008d9d40",
      "incomplete_value": true,
      "site": "008d9d50",
      "value": [
        "LOAD",
        "16",
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
      "definition_site": "008d9cec",
      "incomplete_value": true,
      "site": "008d9cfc",
      "value": [
        "LOAD",
        "16",
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
      "008d9d34",
      "READ",
      [
        "storage",
        "002c2660",
        null,
        null
      ]
    ],
    [
      "008d9d40",
      "READ",
      [
        "storage",
        "002aa33a",
        null,
        "string"
      ]
    ],
    [
      "008d9d40",
      "READ",
      [
        "storage",
        "002aa34a",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "008d9d34",
      "READ",
      [
        "storage",
        "002c26a0",
        null,
        null
      ]
    ],
    [
      "008d9d40",
      "READ",
      [
        "storage",
        "002aa2de",
        null,
        "string"
      ]
    ],
    [
      "008d9d40",
      "READ",
      [
        "storage",
        "002aa2ee",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 008d9dbc ["COPY", "tmp:0:8", ["const:e98:8"]]
- 008d9dbc ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 008d9dbc ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 008d9dbc ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 008d9e10 ["COPY", "tmp:0:8", ["const:f68:8"]]
+ 008d9e10 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 008d9e10 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 008d9e10 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 008d9e10 ["INT_ADD", "register:40f0:8", ["const:8d9e10:8", "const:4:8"]]
- 008d9e10 ["CALL", null, ["ram:48ccf8:8"]]
+ 008d9e64 ["INT_ADD", "register:40f0:8", ["const:8d9e64:8", "const:4:8"]]
+ 008d9e64 ["CALL", null, ["ram:48cd38:8"]]
- 008d9e2c ["INT_ADD", "register:40f0:8", ["const:8d9e2c:8", "const:4:8"]]
- 008d9e2c ["CALL", null, ["callee:00c58040:8"]]
+ 008d9e80 ["INT_ADD", "register:40f0:8", ["const:8d9e80:8", "const:4:8"]]
+ 008d9e80 ["CALL", null, ["callee:00c58040:8"]]
~~~


<a id="compare-a92f45ae4033b94eb0dca457a274020c"></a>

### [`008da364`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008da/008da364.md) → [`008da3b8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008da/008da3b8.md) FUN_008da3b8

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
      "definition_site": "008da3cc",
      "incomplete_value": false,
      "site": "008da3d0",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c84000:8"
          ],
          [
            "leaf",
            "const:e68:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008da378",
      "incomplete_value": false,
      "site": "008da37c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c84000:8"
          ],
          [
            "leaf",
            "const:d98:8"
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
      "008da3d0",
      "DATA",
      [
        "storage",
        "00c84d98",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "008da3d0",
      "DATA",
      [
        "storage",
        "00c84e68",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 008da370 ["INT_ADD", "register:40f0:8", ["const:8da370:8", "const:4:8"]]
- 008da370 ["CALL", null, ["callee:00c57f60:8"]]
+ 008da3c4 ["INT_ADD", "register:40f0:8", ["const:8da3c4:8", "const:4:8"]]
+ 008da3c4 ["CALL", null, ["callee:00c57f60:8"]]
- 008da378 ["COPY", "tmp:0:8", ["const:d98:8"]]
- 008da378 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 008da378 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 008da378 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 008da3cc ["COPY", "tmp:0:8", ["const:e68:8"]]
+ 008da3cc ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 008da3cc ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 008da3cc ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-3b7f6f4ac4f6817d4c1ec4c90e15d081"></a>

### [`008da388`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008da/008da388.md) → [`008da3dc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008da/008da3dc.md) FUN_008da3dc

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
      "definition_site": "008da3e0",
      "incomplete_value": false,
      "site": "008da3e4",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c84000:8"
          ],
          [
            "leaf",
            "const:e68:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008da38c",
      "incomplete_value": false,
      "site": "008da390",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c84000:8"
          ],
          [
            "leaf",
            "const:d98:8"
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
      "008da3e4",
      "DATA",
      [
        "storage",
        "00c84d98",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "008da3e4",
      "DATA",
      [
        "storage",
        "00c84e68",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 008da38c ["COPY", "tmp:0:8", ["const:d98:8"]]
- 008da38c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 008da38c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 008da38c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 008da3e0 ["COPY", "tmp:0:8", ["const:e68:8"]]
+ 008da3e0 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 008da3e0 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 008da3e0 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-10b77b9a1156c9bd078dd98c3a021eb7"></a>

### [`008da3e4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008da/008da3e4.md) → [`008da438`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008da/008da438.md) FUN_008da438

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
      "definition_site": "008da44c",
      "incomplete_value": false,
      "site": "008da450",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c84000:8"
          ],
          [
            "leaf",
            "const:ee8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008da3f8",
      "incomplete_value": false,
      "site": "008da3fc",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c84000:8"
          ],
          [
            "leaf",
            "const:e18:8"
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
      "008da450",
      "DATA",
      [
        "storage",
        "00c84e18",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "008da450",
      "DATA",
      [
        "storage",
        "00c84ee8",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 008da3f0 ["INT_ADD", "register:40f0:8", ["const:8da3f0:8", "const:4:8"]]
- 008da3f0 ["CALL", null, ["callee:00c57f60:8"]]
+ 008da444 ["INT_ADD", "register:40f0:8", ["const:8da444:8", "const:4:8"]]
+ 008da444 ["CALL", null, ["callee:00c57f60:8"]]
- 008da3f8 ["COPY", "tmp:0:8", ["const:e18:8"]]
- 008da3f8 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 008da3f8 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 008da3f8 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 008da44c ["COPY", "tmp:0:8", ["const:ee8:8"]]
+ 008da44c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 008da44c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 008da44c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-bc721bc03278be1a5781f57b12f7881f"></a>

### [`008da408`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008da/008da408.md) → [`008da45c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008da/008da45c.md) FUN_008da45c

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
      "definition_site": "008da460",
      "incomplete_value": false,
      "site": "008da464",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c84000:8"
          ],
          [
            "leaf",
            "const:ee8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008da40c",
      "incomplete_value": false,
      "site": "008da410",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c84000:8"
          ],
          [
            "leaf",
            "const:e18:8"
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
      "008da464",
      "DATA",
      [
        "storage",
        "00c84e18",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "008da464",
      "DATA",
      [
        "storage",
        "00c84ee8",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 008da40c ["COPY", "tmp:0:8", ["const:e18:8"]]
- 008da40c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 008da40c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 008da40c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 008da460 ["COPY", "tmp:0:8", ["const:ee8:8"]]
+ 008da460 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 008da460 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 008da460 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-b936f875886ff8143ad6cc5cd0c0f1f6"></a>

### [`008da464`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008da/008da464.md) → [`008da4b8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008da/008da4b8.md) FUN_008da4b8

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
      "definition_site": "008da4cc",
      "incomplete_value": false,
      "site": "008da4d0",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c84000:8"
          ],
          [
            "leaf",
            "const:f68:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008da478",
      "incomplete_value": false,
      "site": "008da47c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c84000:8"
          ],
          [
            "leaf",
            "const:e98:8"
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
      "008da4d0",
      "DATA",
      [
        "storage",
        "00c84e98",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "008da4d0",
      "DATA",
      [
        "storage",
        "00c84f68",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 008da470 ["INT_ADD", "register:40f0:8", ["const:8da470:8", "const:4:8"]]
- 008da470 ["CALL", null, ["callee:00c57f60:8"]]
+ 008da4c4 ["INT_ADD", "register:40f0:8", ["const:8da4c4:8", "const:4:8"]]
+ 008da4c4 ["CALL", null, ["callee:00c57f60:8"]]
- 008da478 ["COPY", "tmp:0:8", ["const:e98:8"]]
- 008da478 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 008da478 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 008da478 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 008da4cc ["COPY", "tmp:0:8", ["const:f68:8"]]
+ 008da4cc ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 008da4cc ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 008da4cc ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-e1e6eedafe5de9ac9a4cfb875b76b339"></a>

### [`008da488`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008da/008da488.md) → [`008da4dc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008da/008da4dc.md) FUN_008da4dc

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
      "definition_site": "008da4e0",
      "incomplete_value": false,
      "site": "008da4e4",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c84000:8"
          ],
          [
            "leaf",
            "const:f68:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008da48c",
      "incomplete_value": false,
      "site": "008da490",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c84000:8"
          ],
          [
            "leaf",
            "const:e98:8"
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
      "008da4e4",
      "DATA",
      [
        "storage",
        "00c84e98",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "008da4e4",
      "DATA",
      [
        "storage",
        "00c84f68",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 008da48c ["COPY", "tmp:0:8", ["const:e98:8"]]
- 008da48c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 008da48c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 008da48c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 008da4e0 ["COPY", "tmp:0:8", ["const:f68:8"]]
+ 008da4e0 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 008da4e0 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 008da4e0 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-ae317cac56d903cb995e2120c6b096a6"></a>

### [`008da4e4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008da/008da4e4.md) → [`008da538`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008da/008da538.md) FUN_008da538

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
      "definition_site": "008da54c",
      "incomplete_value": false,
      "site": "008da550",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c84000:8"
          ],
          [
            "leaf",
            "const:fe8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008da4f8",
      "incomplete_value": false,
      "site": "008da4fc",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c84000:8"
          ],
          [
            "leaf",
            "const:f18:8"
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
      "008da550",
      "DATA",
      [
        "storage",
        "00c84f18",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "008da550",
      "DATA",
      [
        "storage",
        "00c84fe8",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 008da4f0 ["INT_ADD", "register:40f0:8", ["const:8da4f0:8", "const:4:8"]]
- 008da4f0 ["CALL", null, ["callee:00c57f60:8"]]
+ 008da544 ["INT_ADD", "register:40f0:8", ["const:8da544:8", "const:4:8"]]
+ 008da544 ["CALL", null, ["callee:00c57f60:8"]]
- 008da4f8 ["COPY", "tmp:0:8", ["const:f18:8"]]
- 008da4f8 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 008da4f8 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 008da4f8 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 008da54c ["COPY", "tmp:0:8", ["const:fe8:8"]]
+ 008da54c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 008da54c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 008da54c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


