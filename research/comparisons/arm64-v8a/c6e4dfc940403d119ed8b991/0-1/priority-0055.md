# v16.0.1 → v16.0.2 · 最優先の変更候補 (55)

[一覧の目次](README.md)

<a id="compare-a8aec3ee7144d10671d436fb84468b56"></a>

### [`008ebb78`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008eb/008ebb78.md) → [`008ebbcc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008eb/008ebbcc.md) FUN_008ebbcc

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`008f6764`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008f6/008f6764.md) · 呼出先 14件 [`00440ec0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00440/00440ec0.md) [`0048791c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00487/0048791c.md) [`0048793c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00487/0048793c.md) [`00487e20`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00487/00487e20.md) [`00488658`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00488/00488658.md)
- 新版 呼出元 1件 [`008f67b8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008f6/008f67b8.md) · 呼出先 14件 [`00440f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00440/00440f00.md) [`0048795c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00487/0048795c.md) [`0048797c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00487/0048797c.md) [`00487e60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00487/00487e60.md) [`00488698`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00488/00488698.md)

変更の種類 branch_value, call_argument_candidate, comparison, comparison_count, constant, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, store_condition, store_value, unresolved_store_alignment

命令の説明率　旧版 91.23% / 新版 91.23%

優先判定に残った影響 `branch_value` 1件, `call_argument_candidate` 2件, `store_condition` 2件, `store_value` 4件, `unresolved_store_alignment` 1件

アドレスに依存する影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "008ebc20",
      "incomplete_value": false,
      "site": "008ebc28",
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
      "definition_site": "008ebbcc",
      "incomplete_value": false,
      "site": "008ebbd4",
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
      "definition_site": "008ebc48",
      "incomplete_value": true,
      "site": "008ebc58",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:2e0:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008ebbf4",
      "incomplete_value": true,
      "site": "008ebc04",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:2a0:8"
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
      "definition_site": "008ebc44",
      "incomplete_value": true,
      "site": "008ebc5c",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:9e2:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008ebbf0",
      "incomplete_value": true,
      "site": "008ebc08",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:a2f:8"
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
      "008ebc28",
      "DATA",
      [
        "storage",
        "00c64d38",
        null,
        "undefined *"
      ]
    ],
    [
      "008ebc44",
      "READ",
      [
        "storage",
        "002a4a2f",
        null,
        "string"
      ]
    ],
    [
      "008ebc44",
      "READ",
      [
        "storage",
        "002a4a3f",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "008ebc28",
      "DATA",
      [
        "storage",
        "00c64e08",
        null,
        "undefined *"
      ]
    ],
    [
      "008ebc44",
      "READ",
      [
        "storage",
        "002a49e2",
        null,
        "string"
      ]
    ],
    [
      "008ebc44",
      "READ",
      [
        "storage",
        "002a49f2",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 008ebbe0 ["INT_ADD", "register:40f0:8", ["const:8ebbe0:8", "const:4:8"]]
- 008ebbe0 ["CALL", null, ["callee:00c57f60:8"]]
+ 008ebc34 ["INT_ADD", "register:40f0:8", ["const:8ebc34:8", "const:4:8"]]
+ 008ebc34 ["CALL", null, ["callee:00c57f60:8"]]
- 008ebc34 ["INT_ADD", "register:40f0:8", ["const:8ebc34:8", "const:4:8"]]
- 008ebc34 ["CALL", null, ["callee:00c57f80:8"]]
+ 008ebc88 ["INT_ADD", "register:40f0:8", ["const:8ebc88:8", "const:4:8"]]
+ 008ebc88 ["CALL", null, ["callee:00c57f80:8"]]
- 008ebc58 ["INT_ADD", "register:40f0:8", ["const:8ebc58:8", "const:4:8"]]
- 008ebc58 ["CALL", null, ["callee:0048795c:8"]]
+ 008ebcac ["INT_ADD", "register:40f0:8", ["const:8ebcac:8", "const:4:8"]]
+ 008ebcac ["CALL", null, ["callee:0048795c:8"]]
~~~


<a id="compare-bf8d464f011d4840b70232440be5af55"></a>

### [`008ebe74`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008eb/008ebe74.md) → [`008ebec8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008eb/008ebec8.md) FUN_008ebec8

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 1件 [`008f6764`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008f6/008f6764.md) · 呼出先 8件 [`00440ec0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00440/00440ec0.md) [`00800378`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00800/00800378.md) [`0080062c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00800/0080062c.md) [`00804074`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00804/00804074.md) [`008f89ec`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008f8/008f89ec.md)
- 新版 呼出元 1件 [`008f67b8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008f6/008f67b8.md) · 呼出先 8件 [`00440f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00440/00440f00.md) [`008003d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00800/008003d0.md) [`00800684`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00800/00800684.md) [`008040cc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00804/008040cc.md) [`008f8a40`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008f8/008f8a40.md)

変更の種類 branch_condition_or_target, call, call_target, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, operands_and_dependencies, operation_sequence, store_condition, unresolved_branch_alignment

命令の説明率　旧版 94.94% / 新版 94.94%

優先判定に残った影響 `call_target` 1件, `store_condition` 1件, `unresolved_branch_alignment` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_target",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "008ebf3c",
      "value": [
        "leaf",
        "ram:8040cc:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "008ebee8",
      "value": [
        "leaf",
        "ram:804074:8"
      ]
    },
    "ordinal": 2,
    "slot": 0
  },
  {
    "confidence": "limited",
    "guard": [
      [
        "CONDITIONAL_JUMP",
        "008ebef8"
      ],
      [
        "CONDITIONAL_JUMP",
        "008ebf4c"
      ]
    ],
    "kind": "store_condition",
    "new": {
      "definition_site": "008ebf4c",
      "incomplete_value": true,
      "site": "008ebf04",
      "value": [
        "BOOL_NEGATE",
        "1",
        [
          [
            "INT_LESSEQUAL",
            "1",
            [
              [
                "live",
                "register:4040:8"
              ],
              [
                "live",
                "register:40d0:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008ebef8",
      "incomplete_value": true,
      "site": "008ebeb0",
      "value": [
        "BOOL_NEGATE",
        "1",
        [
          [
            "INT_LESSEQUAL",
            "1",
            [
              "LOAD",
              "LOAD"
            ]
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
      "008ebf3c",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "00804074"
      ]
    ],
    [
      "unmatched:008ebef8",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "008ebf04"
      ]
    ]
  ],
  "added": [
    [
      "008ebf3c",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "008040cc"
      ]
    ],
    [
      "008ebf4c",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "008ebf04"
      ]
    ]
  ]
}
~~~


~~~diff
- 008ebee8 ["INT_ADD", "register:40f0:8", ["const:8ebee8:8", "const:4:8"]]
- 008ebee8 ["CALL", null, ["ram:804074:8"]]
+ 008ebf3c ["INT_ADD", "register:40f0:8", ["const:8ebf3c:8", "const:4:8"]]
+ 008ebf3c ["CALL", null, ["ram:8040cc:8"]]
- 008ebf3c ["INT_NOTEQUAL", "tmp:0:1", ["register:4040:8", "const:0:8"]]
- 008ebf3c ["CBRANCH", null, ["local:b16:8", "tmp:0:1"]]
+ 008ebf90 ["INT_NOTEQUAL", "tmp:0:1", ["register:4040:8", "const:0:8"]]
+ 008ebf90 ["CBRANCH", null, ["local:b17:8", "tmp:0:1"]]
- 008ebea4 ["CBRANCH", null, ["local:b14:8", "register:101:1"]]
+ 008ebef8 ["CBRANCH", null, ["local:b15:8", "register:101:1"]]
~~~


<a id="compare-17d03f86624a52b519f49a2dc5762f5d"></a>

### [`008ebfb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008eb/008ebfb0.md) → [`008ec004`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008ec/008ec004.md) FUN_008ec004

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`008ef9f4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008ef/008ef9f4.md) · 呼出先 8件 [`0046d490`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0046d/0046d490.md) [`0048ce54`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0048c/0048ce54.md) [`0052dd00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0052d/0052dd00.md) [`005cd0f0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005cd/005cd0f0.md) [`006648a0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00664/006648a0.md)
- 新版 呼出元 1件 [`008efa48`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008ef/008efa48.md) · 呼出先 8件 [`0046d4d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046d/0046d4d0.md) [`0048ce94`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048c/0048ce94.md) [`0052dd40`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0052d/0052dd40.md) [`005cd130`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005cd/005cd130.md) [`006648e0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00664/006648e0.md)

変更の種類 constant, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, store_value, unresolved_store_alignment

命令の説明率　旧版 86.46% / 新版 86.46%

優先判定に残った影響 `store_value` 4件, `unresolved_store_alignment` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "008ec040",
      "incomplete_value": true,
      "site": "008ec050",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:bfb:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008ebfec",
      "incomplete_value": true,
      "site": "008ebffc",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:c57:8"
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
      "definition_site": "008ec054",
      "incomplete_value": true,
      "site": "008ec054",
      "value": [
        "LOAD",
        "8",
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
      "definition_site": "008ec000",
      "incomplete_value": true,
      "site": "008ec000",
      "value": [
        "LOAD",
        "8",
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
      "definition_site": "008ec048",
      "incomplete_value": true,
      "site": "008ec058",
      "value": [
        "LOAD",
        "16",
        [
          [
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
      "definition_site": "008ebff4",
      "incomplete_value": true,
      "site": "008ec004",
      "value": [
        "LOAD",
        "16",
        [
          [
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
      "unmatched:008ebfd8",
      "WRITE",
      [
        "storage",
        "Stack[-0x38]",
        null,
        null
      ]
    ],
    [
      "008ec040",
      "READ",
      [
        "storage",
        "002a5c57",
        null,
        "string"
      ]
    ],
    [
      "008ec044",
      "READ",
      [
        "storage",
        "002a5c66",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "008ec02c",
      "WRITE",
      [
        "storage",
        "Stack[-0x38]",
        null,
        null
      ]
    ],
    [
      "008ec040",
      "READ",
      [
        "storage",
        "002a5bfb",
        null,
        "string"
      ]
    ],
    [
      "008ec044",
      "READ",
      [
        "storage",
        "002a5c0a",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 008ebfd8 ["COPY", "tmp:0:8", ["register:4040:8"]]
- 008ebfd8 ["INT_ADD", "tmp:1:8", ["register:40e8:8", "const:fffffffffffffff8:8"]]
- 008ebfd8 ["STORE", null, ["const:1b1:8", "tmp:1:8", "tmp:0:8"]]
- 008ebfdc ["INT_ADD", "register:40f0:8", ["const:8ebfdc:8", "const:4:8"]]
- 008ebfdc ["CALL", null, ["callee:00c57f60:8"]]
+ 008ec030 ["INT_ADD", "register:40f0:8", ["const:8ec030:8", "const:4:8"]]
+ 008ec030 ["CALL", null, ["callee:00c57f60:8"]]
- 008ebfe0 ["COPY", "register:4040:8", ["const:2a5000:8"]]
~~~


<a id="compare-e407fe4896ea16e499611b2d5b089a60"></a>

### [`008ec2a0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008ec/008ec2a0.md) → [`008ec2f4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008ec/008ec2f4.md) FUN_008ec2f4

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`008ef9f4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008ef/008ef9f4.md) · 呼出先 18件 [`0043bb20`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043bb20.md) [`0047e8dc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047e/0047e8dc.md) [`0047edb4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047e/0047edb4.md) [`0048ce54`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0048c/0048ce54.md) [`00492e08`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00492/00492e08.md)
- 新版 呼出元 1件 [`008efa48`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008ef/008efa48.md) · 呼出先 18件 [`0043bb60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bb60.md) [`0047e91c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047e/0047e91c.md) [`0047edf4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047e/0047edf4.md) [`0048ce94`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048c/0048ce94.md) [`00492e48`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00492/00492e48.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies, store_destination, store_value

命令の説明率　旧版 92.86% / 新版 92.86%

優先判定に残った影響 `call_argument_candidate` 13件, `store_destination` 7件, `store_value` 4件

アドレスに依存する影響 `store_destination` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "008ec3e0",
      "incomplete_value": true,
      "site": "008ec3e0",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:be1:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008ec38c",
      "incomplete_value": true,
      "site": "008ec38c",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:c3d:8"
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
      "definition_site": "008ec578",
      "incomplete_value": true,
      "site": "008ec578",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:bee:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008ec524",
      "incomplete_value": true,
      "site": "008ec524",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:c4a:8"
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
    "kind": "store_destination",
    "new": {
      "definition_site": "008ec894",
      "incomplete_value": false,
      "site": "008ec894",
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
            "const:6e0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008ec840",
      "incomplete_value": false,
      "site": "008ec840",
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
            "const:610:8"
          ]
        ]
      ]
    },
    "ordinal": 35,
    "slot": 1
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "008ec3b8",
      "READ",
      [
        "storage",
        "00ca4f38",
        null,
        "undefined1"
      ]
    ],
    [
      "008ec3cc",
      "READ",
      [
        "storage",
        "002abc3d",
        null,
        "string"
      ]
    ],
    [
      "008ec454",
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
      "008ec3b8",
      "READ",
      [
        "storage",
        "00ca5038",
        null,
        "undefined1"
      ]
    ],
    [
      "008ec3cc",
      "READ",
      [
        "storage",
        "002abbe1",
        null,
        "string"
      ]
    ],
    [
      "008ec454",
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
- 008ec3e0 ["INT_ADD", "register:40f0:8", ["const:8ec3e0:8", "const:4:8"]]
- 008ec3e0 ["CALL", null, ["callee:0043bb60:8"]]
+ 008ec434 ["INT_ADD", "register:40f0:8", ["const:8ec434:8", "const:4:8"]]
+ 008ec434 ["CALL", null, ["callee:0043bb60:8"]]
- 008ec420 ["INT_ADD", "register:40f0:8", ["const:8ec420:8", "const:4:8"]]
- 008ec420 ["CALL", null, ["callee:0047e91c:8"]]
+ 008ec474 ["INT_ADD", "register:40f0:8", ["const:8ec474:8", "const:4:8"]]
+ 008ec474 ["CALL", null, ["callee:0047e91c:8"]]
- 008ec560 ["INT_ADD", "register:40f0:8", ["const:8ec560:8", "const:4:8"]]
- 008ec560 ["CALL", null, ["callee:0047e91c:8"]]
+ 008ec5b4 ["INT_ADD", "register:40f0:8", ["const:8ec5b4:8", "const:4:8"]]
+ 008ec5b4 ["CALL", null, ["callee:0047e91c:8"]]
~~~


<a id="compare-8b6a25b09d0962860ffc20d2b4dff80b"></a>

### [`008eca3c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008ec/008eca3c.md) → [`008eca90`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008ec/008eca90.md) FUN_008eca90

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`008f7e78`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008f7/008f7e78.md) · 呼出先 7件 [`00467860`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00467/00467860.md) [`00468804`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00468/00468804.md) [`00468f88`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00468/00468f88.md) [`0046c9c4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0046c/0046c9c4.md) [`008514f8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00851/008514f8.md)
- 新版 呼出元 1件 [`008f7ecc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008f7/008f7ecc.md) · 呼出先 7件 [`004678a0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00467/004678a0.md) [`00468844`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00468/00468844.md) [`00468fc8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00468/00468fc8.md) [`0046ca04`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046c/0046ca04.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)

変更の種類 branch_value, call, call_argument_candidate, call_target, constant, control_flow, local_def_use, operands_and_dependencies

命令の説明率　旧版 94.34% / 新版 94.34%

優先判定に残った影響 `branch_value` 1件, `call_argument_candidate` 5件, `call_target` 8件

~~~json
[
  {
    "confidence": "limited",
    "kind": "branch_value",
    "new": {
      "definition_site": "008ecaac",
      "incomplete_value": true,
      "site": "008ecaac",
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
      "definition_site": "008eca58",
      "incomplete_value": true,
      "site": "008eca58",
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
      "definition_site": "008ecab4",
      "incomplete_value": false,
      "site": "008ecac8",
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
      "definition_site": "008eca60",
      "incomplete_value": false,
      "site": "008eca74",
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
      "definition_site": "008ecabc",
      "incomplete_value": false,
      "site": "008ecac8",
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
            "const:9a0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008eca68",
      "incomplete_value": false,
      "site": "008eca74",
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
            "const:8d0:8"
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
      "008ecaa8",
      "READ",
      [
        "storage",
        "00ca4978",
        null,
        "undefined8"
      ]
    ],
    [
      "008ecab4",
      "PARAM",
      [
        "storage",
        "00c65e58",
        null,
        "pointer __((offset(0x10)))"
      ]
    ],
    [
      "008ecabc",
      "PARAM",
      [
        "storage",
        "00c858d0",
        null,
        "pointer __((offset(0x10)))"
      ]
    ]
  ],
  "added": [
    [
      "008ecaa8",
      "READ",
      [
        "storage",
        "00ca4a78",
        null,
        "undefined8"
      ]
    ],
    [
      "008ecab4",
      "PARAM",
      [
        "storage",
        "00c65f28",
        null,
        "pointer __((offset(0x10)))"
      ]
    ],
    [
      "008ecabc",
      "PARAM",
      [
        "storage",
        "00c859a0",
        null,
        "pointer __((offset(0x10)))"
      ]
    ]
  ]
}
~~~


~~~diff
- 008eca74 ["INT_ADD", "register:40f0:8", ["const:8eca74:8", "const:4:8"]]
- 008eca74 ["CALL", null, ["callee:00c586e0:8"]]
+ 008ecac8 ["INT_ADD", "register:40f0:8", ["const:8ecac8:8", "const:4:8"]]
+ 008ecac8 ["CALL", null, ["callee:00c586e0:8"]]
- 008ecac8 ["INT_ADD", "register:40f0:8", ["const:8ecac8:8", "const:4:8"]]
- 008ecac8 ["CALL", null, ["callee:0046ca04:8"]]
+ 008ecb1c ["INT_ADD", "register:40f0:8", ["const:8ecb1c:8", "const:4:8"]]
+ 008ecb1c ["CALL", null, ["callee:0046ca04:8"]]
- 008ecc08 ["INT_ADD", "register:40f0:8", ["const:8ecc08:8", "const:4:8"]]
- 008ecc08 ["CALL", null, ["ram:8c9da8:8"]]
+ 008ecc5c ["INT_ADD", "register:40f0:8", ["const:8ecc5c:8", "const:4:8"]]
+ 008ecc5c ["CALL", null, ["ram:8c9dfc:8"]]
~~~


<a id="compare-6d9a654042bd1ee00a9009dcf4c4a9f8"></a>

### [`008ece60`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008ec/008ece60.md) → [`008eceb4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008ec/008eceb4.md) FUN_008eceb4

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 1件 [`008f6ae8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008f6/008f6ae8.md) · 呼出先 2件 [`00c53d00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c53/00c53d00.md) [`00c57e80`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e80.md)
- 新版 呼出元 1件 [`008f6b3c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008f6/008f6b3c.md) · 呼出先 2件 [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md)

変更の種類 branch_condition_or_target, call, call_argument_candidate, call_count, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_call_alignment

命令の説明率　旧版 90.65% / 新版 90.65%

優先判定に残った影響 `call_argument_candidate` 1件, `unresolved_branch_alignment` 3件, `unresolved_call_alignment` 3件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "008ed040",
      "incomplete_value": false,
      "site": "008ed044",
      "value": [
        "leaf",
        "const:ffffffffffffffff:8"
      ]
    },
    "ordinal": 24,
    "slot": 1
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:008ecf68",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "008ecfe8"
      ]
    ],
    [
      "unmatched:008ecf74",
      "UNCONDITIONAL_CALL",
      [
        "mapped_function",
        "00c53da0"
      ]
    ],
    [
      "unmatched:008ecf78",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "008ecfe8"
      ]
    ]
  ],
  "added": [
    [
      "008ecfbc",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "008ecfe8"
      ]
    ],
    [
      "008ecfc8",
      "UNCONDITIONAL_CALL",
      [
        "mapped_function",
        "00c53da0"
      ]
    ],
    [
      "008ecfcc",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "008ecfe8"
      ]
    ]
  ]
}
~~~


~~~diff
- 008ecff0 ["COPY", "register:0:8", ["register:4040:8"]]
- 008ecff0 ["INT_ADD", "register:40f0:8", ["const:8ecff0:8", "const:4:8"]]
- 008ecff0 ["CALLIND", null, ["register:0:8"]]
+ 008ed044 ["COPY", "register:0:8", ["register:4040:8"]]
+ 008ed044 ["INT_ADD", "register:40f0:8", ["const:8ed044:8", "const:4:8"]]
+ 008ed044 ["CALLIND", null, ["register:0:8"]]
- 008ed044 ["INT_ADD", "register:40f0:8", ["const:8ed044:8", "const:4:8"]]
- 008ed044 ["CALL", null, ["callee:00c53da0:8"]]
+ 008ed098 ["INT_ADD", "register:40f0:8", ["const:8ed098:8", "const:4:8"]]
+ 008ed098 ["CALL", null, ["callee:00c53da0:8"]]
- 008ece8c ["INT_ADD", "register:40f0:8", ["const:8ece8c:8", "const:4:8"]]
- 008ece8c ["CALL", null, ["callee:00c53da0:8"]]
+ 008ecee0 ["INT_ADD", "register:40f0:8", ["const:8ecee0:8", "const:4:8"]]
+ 008ecee0 ["CALL", null, ["callee:00c53da0:8"]]
~~~


<a id="compare-993d51e74569bbb61b675f5b799cad40"></a>

### [`008ed1b8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008ed/008ed1b8.md) → [`008ed20c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008ed/008ed20c.md) FUN_008ed20c

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 3件 [`008ef9f4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008ef/008ef9f4.md) [`008f3044`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008f3/008f3044.md) [`008f6694`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008f6/008f6694.md) · 呼出先 53件 [`0043bb20`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043bb20.md) [`00440ec0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00440/00440ec0.md) [`0046e770`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0046e/0046e770.md) [`0046e780`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0046e/0046e780.md) [`0046e970`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0046e/0046e970.md)
- 新版 呼出元 3件 [`008efa48`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008ef/008efa48.md) [`008f3098`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008f3/008f3098.md) [`008f66e8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008f6/008f66e8.md) · 呼出先 53件 [`0043bb60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bb60.md) [`00440f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00440/00440f00.md) [`0046e7b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046e/0046e7b0.md) [`0046e7c0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046e/0046e7c0.md) [`0046e9b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046e/0046e9b0.md)

変更の種類 branch_condition_or_target, call, call_argument_candidate, call_target, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, local_def_use, memory_read, memory_read_count, operands_and_dependencies, operation_sequence, store_value, unresolved_branch_alignment, unresolved_call_alignment, unresolved_return_alignment, unresolved_store_alignment

命令の説明率　旧版 83.55% / 新版 83.55%

優先判定に残った影響 `call_argument_candidate` 22件, `call_target` 6件, `store_value` 4件, `unresolved_branch_alignment` 35件, `unresolved_call_alignment` 39件, `unresolved_return_alignment` 1件, `unresolved_store_alignment` 63件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "008ed8fc",
      "incomplete_value": false,
      "site": "008ed8fc",
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
      "definition_site": "008ed8a8",
      "incomplete_value": false,
      "site": "008ed8a8",
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
    "ordinal": 52,
    "slot": 2
  },
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "008ed928",
      "incomplete_value": false,
      "site": "008ed928",
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
            "const:ec4:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008ed8d4",
      "incomplete_value": false,
      "site": "008ed8d4",
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
            "const:f20:8"
          ]
        ]
      ]
    },
    "ordinal": 56,
    "slot": 2
  },
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "008ed950",
      "incomplete_value": false,
      "site": "008ed950",
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
      "definition_site": "008ed8fc",
      "incomplete_value": false,
      "site": "008ed8fc",
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
    "ordinal": 57,
    "slot": 2
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:008ed1b8",
      "WRITE",
      [
        "storage",
        "Stack[-0x60]",
        null,
        null
      ]
    ],
    [
      "unmatched:008ed1bc",
      "WRITE",
      [
        "storage",
        "Stack[-0x50]",
        null,
        null
      ]
    ],
    [
      "unmatched:008ed1c0",
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
      "008ed20c",
      "WRITE",
      [
        "storage",
        "Stack[-0x60]",
        null,
        null
      ]
    ],
    [
      "008ed210",
      "WRITE",
      [
        "storage",
        "Stack[-0x50]",
        null,
        null
      ]
    ],
    [
      "008ed214",
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
- 008ed39c ["INT_ADD", "register:40f0:8", ["const:8ed39c:8", "const:4:8"]]
- 008ed39c ["CALL", null, ["ram:66506c:8"]]
+ 008ed3f0 ["INT_ADD", "register:40f0:8", ["const:8ed3f0:8", "const:4:8"]]
+ 008ed3f0 ["CALL", null, ["ram:6650ac:8"]]
- 008ed854 ["INT_ADD", "register:40f0:8", ["const:8ed854:8", "const:4:8"]]
- 008ed854 ["CALL", null, ["callee:00851550:8"]]
+ 008ed8a8 ["INT_ADD", "register:40f0:8", ["const:8ed8a8:8", "const:4:8"]]
+ 008ed8a8 ["CALL", null, ["callee:00851550:8"]]
- 008edd6c ["INT_ADD", "register:40f0:8", ["const:8edd6c:8", "const:4:8"]]
- 008edd6c ["CALL", null, ["callee:0047e91c:8"]]
+ 008eddc0 ["INT_ADD", "register:40f0:8", ["const:8eddc0:8", "const:4:8"]]
+ 008eddc0 ["CALL", null, ["callee:0047e91c:8"]]
~~~


<a id="compare-6e2acba10e241573ee0bf4705094f794"></a>

### [`008ef908`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008ef/008ef908.md) → [`008ef95c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008ef/008ef95c.md) FUN_008ef95c

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`008f6694`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008f6/008f6694.md) · 呼出先 5件 [`0046c9c4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0046c/0046c9c4.md) [`006c0f2c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006c0/006c0f2c.md) [`006c1f30`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006c1/006c1f30.md) [`008514f8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00851/008514f8.md) [`00c58610`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58610.md)
- 新版 呼出元 1件 [`008f66e8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008f6/008f66e8.md) · 呼出先 5件 [`0046ca04`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046c/0046ca04.md) [`006c0f84`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006c0/006c0f84.md) [`006c1f88`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006c1/006c1f88.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md) [`00c586e0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c586e0.md)

変更の種類 branch_value, call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 93.22% / 新版 93.22%

優先判定に残った影響 `branch_value` 1件, `call_argument_candidate` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "branch_value",
    "new": {
      "definition_site": "008ef97c",
      "incomplete_value": true,
      "site": "008ef97c",
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
      "definition_site": "008ef928",
      "incomplete_value": true,
      "site": "008ef928",
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
      "definition_site": "008ef984",
      "incomplete_value": false,
      "site": "008ef998",
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
      "definition_site": "008ef930",
      "incomplete_value": false,
      "site": "008ef944",
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
      "definition_site": "008ef98c",
      "incomplete_value": false,
      "site": "008ef998",
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
            "const:9a0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008ef938",
      "incomplete_value": false,
      "site": "008ef944",
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
            "const:8d0:8"
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
      "008ef978",
      "READ",
      [
        "storage",
        "00ca4978",
        null,
        "undefined8"
      ]
    ],
    [
      "008ef984",
      "PARAM",
      [
        "storage",
        "00c65e58",
        null,
        "pointer __((offset(0x10)))"
      ]
    ],
    [
      "008ef98c",
      "PARAM",
      [
        "storage",
        "00c858d0",
        null,
        "pointer __((offset(0x10)))"
      ]
    ]
  ],
  "added": [
    [
      "008ef978",
      "READ",
      [
        "storage",
        "00ca4a78",
        null,
        "undefined8"
      ]
    ],
    [
      "008ef984",
      "PARAM",
      [
        "storage",
        "00c65f28",
        null,
        "pointer __((offset(0x10)))"
      ]
    ],
    [
      "008ef98c",
      "PARAM",
      [
        "storage",
        "00c859a0",
        null,
        "pointer __((offset(0x10)))"
      ]
    ]
  ]
}
~~~


~~~diff
- 008ef944 ["INT_ADD", "register:40f0:8", ["const:8ef944:8", "const:4:8"]]
- 008ef944 ["CALL", null, ["callee:00c586e0:8"]]
+ 008ef998 ["INT_ADD", "register:40f0:8", ["const:8ef998:8", "const:4:8"]]
+ 008ef998 ["CALL", null, ["callee:00c586e0:8"]]
- 008ef924 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:978:8"]]
- 008ef924 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
+ 008ef978 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:a78:8"]]
+ 008ef978 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
- 008ef930 ["COPY", "tmp:0:8", ["const:e58:8"]]
- 008ef930 ["INT_CARRY", "register:105:1", ["register:4008:8", "tmp:0:8"]]
- 008ef930 ["INT_SCARRY", "register:106:1", ["register:4008:8", "tmp:0:8"]]
- 008ef930 ["INT_ADD", "tmp:1:8", ["register:4008:8", "tmp:0:8"]]
+ 008ef984 ["COPY", "tmp:0:8", ["const:f28:8"]]
+ 008ef984 ["INT_CARRY", "register:105:1", ["register:4008:8", "tmp:0:8"]]
+ 008ef984 ["INT_SCARRY", "register:106:1", ["register:4008:8", "tmp:0:8"]]
+ 008ef984 ["INT_ADD", "tmp:1:8", ["register:4008:8", "tmp:0:8"]]
~~~


<a id="compare-177b1e9cce00dfeffe75048e7074337b"></a>

### [`008ef9f4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008ef/008ef9f4.md) → [`008efa48`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008ef/008efa48.md) FUN_008efa48

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 1件 [`008f6740`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008f6/008f6740.md) · 呼出先 41件 [`0043bb20`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043bb20.md) [`0043bba4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043bba4.md) [`0046c9c4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0046c/0046c9c4.md) [`0046ed8c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0046e/0046ed8c.md) [`0046ee04`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0046e/0046ee04.md)
- 新版 呼出元 1件 [`008f6794`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008f6/008f6794.md) · 呼出先 41件 [`0043bb60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bb60.md) [`0043bbe4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bbe4.md) [`0046ca04`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046c/0046ca04.md) [`0046edcc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046e/0046edcc.md) [`0046ee44`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046e/0046ee44.md)

変更の種類 branch_condition_or_target, call, call_argument_candidate, call_target, cfg_edge_inventory, constant, control_flow, local_def_use, memory_read, memory_read_count, operands_and_dependencies, operation_sequence, store_condition, store_value, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 93.95% / 新版 93.95%

優先判定に残った影響 `call_argument_candidate` 10件, `call_target` 3件, `store_condition` 2件, `unresolved_branch_alignment` 9件, `unresolved_call_alignment` 6件, `unresolved_store_alignment` 10件

アドレスに依存する影響 `store_value` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "008efd48",
      "incomplete_value": true,
      "site": "008efd4c",
      "value": [
        "LOAD",
        "8",
        [
          [
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
      "definition_site": "008efcf4",
      "incomplete_value": true,
      "site": "008efcf8",
      "value": [
        "LOAD",
        "8",
        [
          [
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
    "ordinal": 27,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "008efed4",
      "incomplete_value": true,
      "site": "008efed8",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:e50:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008efe80",
      "incomplete_value": true,
      "site": "008efe84",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:e10:8"
              ]
            ]
          ]
        ]
      ]
    },
    "ordinal": 39,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "008efc60",
      "incomplete_value": true,
      "site": "008efc64",
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
      "unmatched:008efa88",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "008efc7c"
      ]
    ],
    [
      "unmatched:008efb58",
      "READ",
      [
        "storage",
        "00c9b528",
        null,
        "pointer"
      ]
    ],
    [
      "unmatched:008efb64",
      "DATA",
      [
        "storage",
        "00ca3fac",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "008efadc",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "008efc7c"
      ]
    ],
    [
      "008efbac",
      "READ",
      [
        "storage",
        "00c9b5f8",
        null,
        "pointer"
      ]
    ],
    [
      "008efbb8",
      "DATA",
      [
        "storage",
        "00ca407c",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 008efc64 ["INT_ADD", "register:40f0:8", ["const:8efc64:8", "const:4:8"]]
- 008efc64 ["CALL", null, ["callee:00b03c30:8"]]
+ 008efcb8 ["INT_ADD", "register:40f0:8", ["const:8efcb8:8", "const:4:8"]]
+ 008efcb8 ["CALL", null, ["callee:00b03c30:8"]]
- 008efca4 ["CBRANCH", null, ["local:b54:8", "register:102:1"]]
+ 008efcf8 ["CBRANCH", null, ["local:b53:8", "register:102:1"]]
- 008efd58 ["COPY", "tmp:0:8", ["register:4048:8"]]
- 008efd58 ["LOAD", "register:5000:16", ["const:1b1:8", "tmp:0:8"]]
- 008efd58 ["COPY", "register:5010:8", ["const:0:8"]]
- 008efd58 ["COPY", "register:5018:8", ["const:0:8"]]
~~~


<a id="compare-f344af0b6f4e5b04e98728803b8c9c05"></a>

### [`008f09d4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008f0/008f09d4.md) → [`008f0a28`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008f0/008f0a28.md) FUN_008f0a28

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 1件 [`008f7e78`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008f7/008f7e78.md) · 呼出先 41件 [`0043bba4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043bba4.md) [`00467860`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00467/00467860.md) [`00467b2c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00467/00467b2c.md) [`00467b60`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00467/00467b60.md) [`00467f54`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00467/00467f54.md)
- 新版 呼出元 1件 [`008f7ecc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008f7/008f7ecc.md) · 呼出先 41件 [`0043bbe4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bbe4.md) [`004678a0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00467/004678a0.md) [`00467b6c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00467/00467b6c.md) [`00467ba0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00467/00467ba0.md) [`00467f94`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00467/00467f94.md)

変更の種類 branch_condition_or_target, branch_value, call, call_argument_candidate, call_target, cfg_edge_inventory, constant, control_flow, local_def_use, operands_and_dependencies, operation_sequence, store_condition, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 84.16% / 新版 84.16%

優先判定に残った影響 `call_argument_candidate` 24件, `call_target` 1件, `store_condition` 3件, `unresolved_branch_alignment` 14件, `unresolved_call_alignment` 34件, `unresolved_store_alignment` 4件

アドレスに依存する影響 `branch_value` 1件, `store_condition` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "branch_value",
    "new": {
      "definition_site": "008f0a6c",
      "incomplete_value": true,
      "site": "008f0a6c",
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
      "definition_site": "008f0a18",
      "incomplete_value": true,
      "site": "008f0a18",
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
      "definition_site": "008f0a74",
      "incomplete_value": false,
      "site": "008f0a88",
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
      "definition_site": "008f0a20",
      "incomplete_value": false,
      "site": "008f0a34",
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
      "definition_site": "008f0a7c",
      "incomplete_value": false,
      "site": "008f0a88",
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
            "const:9a0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008f0a28",
      "incomplete_value": false,
      "site": "008f0a34",
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
            "const:8d0:8"
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
      "008f0a68",
      "READ",
      [
        "storage",
        "00ca4978",
        null,
        "undefined8"
      ]
    ],
    [
      "008f0a74",
      "PARAM",
      [
        "storage",
        "00c65e58",
        null,
        "pointer __((offset(0x10)))"
      ]
    ],
    [
      "008f0a7c",
      "PARAM",
      [
        "storage",
        "00c858d0",
        null,
        "pointer __((offset(0x10)))"
      ]
    ]
  ],
  "added": [
    [
      "008f0a68",
      "READ",
      [
        "storage",
        "00ca4a78",
        null,
        "undefined8"
      ]
    ],
    [
      "008f0a74",
      "PARAM",
      [
        "storage",
        "00c65f28",
        null,
        "pointer __((offset(0x10)))"
      ]
    ],
    [
      "008f0a7c",
      "PARAM",
      [
        "storage",
        "00c859a0",
        null,
        "pointer __((offset(0x10)))"
      ]
    ]
  ]
}
~~~


~~~diff
- 008f0a34 ["INT_ADD", "register:40f0:8", ["const:8f0a34:8", "const:4:8"]]
- 008f0a34 ["CALL", null, ["callee:00c586e0:8"]]
+ 008f0a88 ["INT_ADD", "register:40f0:8", ["const:8f0a88:8", "const:4:8"]]
+ 008f0a88 ["CALL", null, ["callee:00c586e0:8"]]
- 008f0a6c ["INT_ADD", "register:40f0:8", ["const:8f0a6c:8", "const:4:8"]]
- 008f0a6c ["CALL", null, ["callee:0046ca04:8"]]
+ 008f0ac0 ["INT_ADD", "register:40f0:8", ["const:8f0ac0:8", "const:4:8"]]
+ 008f0ac0 ["CALL", null, ["callee:0046ca04:8"]]
- 008f0c10 ["INT_ADD", "register:40f0:8", ["const:8f0c10:8", "const:4:8"]]
- 008f0c10 ["CALL", null, ["ram:665d28:8"]]
+ 008f0c64 ["INT_ADD", "register:40f0:8", ["const:8f0c64:8", "const:4:8"]]
+ 008f0c64 ["CALL", null, ["ram:665d68:8"]]
~~~


<a id="compare-f7d1d93751f23fd408e2102265d472c8"></a>

### [`008f22e4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008f2/008f22e4.md) → [`008f2338`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008f2/008f2338.md) FUN_008f2338

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal` · `cfg_change`

- 旧版 呼出元 1件 [`008f3044`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008f3/008f3044.md) · 呼出先 1件 [`008514f8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00851/008514f8.md)
- 新版 呼出元 1件 [`008f3098`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008f3/008f3098.md) · 呼出先 1件 [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)

変更の種類 cfg_edge_inventory, constant, control_flow, control_flow_count, local_def_use, operands_and_dependencies, operation_sequence, unresolved_return_alignment

命令の説明率　旧版 97.30% / 新版 97.30%

アドレスに依存する影響 `unresolved_return_alignment` 1件

~~~diff
- 008f22f8 ["INT_ADD", "register:40f0:8", ["const:8f22f8:8", "const:4:8"]]
- 008f22f8 ["CALL", null, ["callee:00851550:8"]]
+ 008f234c ["INT_ADD", "register:40f0:8", ["const:8f234c:8", "const:4:8"]]
+ 008f234c ["CALL", null, ["callee:00851550:8"]]
- 008f2304 ["INT_ADD", "register:40f0:8", ["const:8f2304:8", "const:4:8"]]
- 008f2304 ["CALL", null, ["callee:00851550:8"]]
+ 008f2358 ["INT_ADD", "register:40f0:8", ["const:8f2358:8", "const:4:8"]]
+ 008f2358 ["CALL", null, ["callee:00851550:8"]]
- 008f2374 ["COPY", "register:0:8", ["register:40f0:8"]]
- 008f2374 ["RETURN", null, ["register:0:8"]]
~~~


<a id="compare-376df084baa7319158582fe6fca05523"></a>

### [`008f2378`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008f2/008f2378.md) → [`008f23cc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008f2/008f23cc.md) FUN_008f23cc

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 1件 [`008eb51c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008eb/008eb51c.md) · 呼出先 12件 [`0047edb4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047e/0047edb4.md) [`00633374`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00633/00633374.md) [`00666320`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00666/00666320.md) [`008514f8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00851/008514f8.md) [`008f8ac4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008f8/008f8ac4.md)
- 新版 呼出元 1件 [`008eb570`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008eb/008eb570.md) · 呼出先 12件 [`0047edf4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047e/0047edf4.md) [`006333b4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00633/006333b4.md) [`00666360`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00666/00666360.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md) [`008f8b18`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008f8/008f8b18.md)

変更の種類 branch_condition_or_target, call, call_argument_candidate, call_count, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 70.18% / 新版 70.18%

優先判定に残った影響 `call_argument_candidate` 4件, `unresolved_branch_alignment` 7件, `unresolved_call_alignment` 4件, `unresolved_store_alignment` 4件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "008f2510",
      "incomplete_value": false,
      "site": "008f2524",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:2ba000:8"
          ],
          [
            "leaf",
            "const:910:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008f24bc",
      "incomplete_value": false,
      "site": "008f24d0",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:2ba000:8"
          ],
          [
            "leaf",
            "const:964:8"
          ]
        ]
      ]
    },
    "ordinal": 8,
    "slot": 4
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "008f24fc",
      "incomplete_value": true,
      "site": "008f2510",
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
            "const:f00:8"
          ]
        ]
      ]
    },
    "ordinal": 9,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "008f25cc",
      "incomplete_value": true,
      "site": "008f25d0",
      "value": [
        "live",
        "register:4098:8"
      ]
    },
    "old": null,
    "ordinal": 15,
    "slot": 1
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:008f242c",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "008f249c"
      ]
    ],
    [
      "008f24a4",
      "DATA",
      [
        "storage",
        "003c92d0",
        "fde_003c92d0",
        "dword"
      ]
    ],
    [
      "008f24a8",
      "DATA",
      [
        "storage",
        "003c92d8",
        null,
        "dword"
      ]
    ]
  ],
  "added": [
    [
      "008f2480",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "008f249c"
      ]
    ],
    [
      "008f24a4",
      "DATA",
      [
        "storage",
        "003c92d0",
        null,
        "uleb128"
      ]
    ],
    [
      "008f24a8",
      "DATA",
      [
        "storage",
        "003c92d8",
        null,
        "byte[11]"
      ]
    ]
  ]
}
~~~


~~~diff
- 008f24d0 ["INT_ADD", "register:40f0:8", ["const:8f24d0:8", "const:4:8"]]
- 008f24d0 ["CALL", null, ["callee:008f8b18:8"]]
+ 008f2524 ["INT_ADD", "register:40f0:8", ["const:8f2524:8", "const:4:8"]]
+ 008f2524 ["CALL", null, ["callee:008f8b18:8"]]
+ 008f24d0 ["BRANCH", null, ["local:b1:8"]]
- 008f2510 ["INT_ADD", "register:40f0:8", ["const:8f2510:8", "const:4:8"]]
- 008f2510 ["CALL", null, ["callee:006333b4:8"]]
+ 008f2564 ["INT_ADD", "register:40f0:8", ["const:8f2564:8", "const:4:8"]]
+ 008f2564 ["CALL", null, ["callee:006333b4:8"]]
~~~


<a id="compare-bda000cc3503681d61a0a59efa7e8922"></a>

### [`008f2694`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008f2/008f2694.md) → [`008f26e8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008f2/008f26e8.md) FUN_008f26e8

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 1件 [`008f53b0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008f5/008f53b0.md) · 呼出先 14件 [`0043bba4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043bba4.md) [`006647c0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00664/006647c0.md) [`00664830`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00664/00664830.md) [`00665c7c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00665/00665c7c.md) [`00665cb8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00665/00665cb8.md)
- 新版 呼出元 1件 [`008f5404`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008f5/008f5404.md) · 呼出先 14件 [`0043bbe4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bbe4.md) [`00664800`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00664/00664800.md) [`00664870`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00664/00664870.md) [`00665cbc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00665/00665cbc.md) [`00665cf8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00665/00665cf8.md)

変更の種類 branch_condition_or_target, call, call_argument_candidate, call_count, constant, control_flow, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 74.83% / 新版 74.83%

優先判定に残った影響 `call_argument_candidate` 3件, `unresolved_branch_alignment` 26件, `unresolved_call_alignment` 9件, `unresolved_store_alignment` 25件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "008f275c",
      "incomplete_value": true,
      "site": "008f2760",
      "value": [
        "INT_ZEXT",
        "8",
        [
          [
            "live",
            "register:4040:4"
          ]
        ]
      ]
    },
    "old": null,
    "ordinal": 3,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "008f2b68",
      "incomplete_value": true,
      "site": "008f2b6c",
      "value": [
        "INT_SUB",
        "8",
        [
          [
            "live",
            "register:40e8:8"
          ],
          [
            "leaf",
            "const:28:8"
          ]
        ]
      ]
    },
    "old": null,
    "ordinal": 30,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "008f2c58",
      "incomplete_value": true,
      "site": "008f2c70",
      "value": [
        "LOAD",
        "8",
        [
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
                "register:40c0:8"
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
      "unmatched:008f2698",
      "WRITE",
      [
        "storage",
        "Stack[-0x60]",
        null,
        null
      ]
    ],
    [
      "unmatched:008f269c",
      "WRITE",
      [
        "storage",
        "Stack[-0x50]",
        null,
        null
      ]
    ],
    [
      "unmatched:008f26d4",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "00665c7c"
      ]
    ]
  ],
  "added": [
    [
      "008f26ec",
      "WRITE",
      [
        "storage",
        "Stack[-0x60]",
        null,
        null
      ]
    ],
    [
      "008f26f0",
      "WRITE",
      [
        "storage",
        "Stack[-0x50]",
        null,
        null
      ]
    ],
    [
      "008f2728",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "00665cbc"
      ]
    ]
  ]
}
~~~


~~~diff
- 008f270c ["INT_ADD", "register:40f0:8", ["const:8f270c:8", "const:4:8"]]
- 008f270c ["CALL", null, ["callee:00664800:8"]]
+ 008f2760 ["INT_ADD", "register:40f0:8", ["const:8f2760:8", "const:4:8"]]
+ 008f2760 ["CALL", null, ["callee:00664800:8"]]
- 008f2b18 ["INT_ADD", "register:40f0:8", ["const:8f2b18:8", "const:4:8"]]
- 008f2b18 ["CALL", null, ["callee:00676aa0:8"]]
+ 008f2b6c ["INT_ADD", "register:40f0:8", ["const:8f2b6c:8", "const:4:8"]]
+ 008f2b6c ["CALL", null, ["callee:00676aa0:8"]]
- 008f2b6c ["INT_ADD", "register:40f0:8", ["const:8f2b6c:8", "const:4:8"]]
- 008f2b6c ["CALL", null, ["callee:00c57f60:8"]]
~~~


<a id="compare-c348aa7cf01d95201f44f0359c2d7bd6"></a>

### [`008f3950`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008f3/008f3950.md) → [`008f39a4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008f3/008f39a4.md) FUN_008f39a4

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 1件 [`006d8768`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006d8/006d8768.md) · 呼出先 2件 [`00c53d00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c53/00c53d00.md) [`00c57e80`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e80.md)
- 新版 呼出元 1件 [`006d87c0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006d8/006d87c0.md) · 呼出先 2件 [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md)

変更の種類 branch_condition_or_target, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, operands_and_dependencies, operation_sequence, unresolved_branch_alignment

命令の説明率　旧版 95.45% / 新版 95.45%

優先判定に残った影響 `unresolved_branch_alignment` 1件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:008f3968",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "008f39d0"
      ]
    ]
  ],
  "added": [
    [
      "008f39bc",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "008f39d0"
      ]
    ]
  ]
}
~~~


~~~diff
- 008f3968 ["INT_EQUAL", "tmp:0:1", ["register:4098:8", "const:0:8"]]
- 008f3968 ["CBRANCH", null, ["local:b3:8", "tmp:0:1"]]
- 008f3974 ["INT_ADD", "register:40f0:8", ["const:8f3974:8", "const:4:8"]]
- 008f3974 ["CALL", null, ["callee:00c53da0:8"]]
+ 008f39c8 ["INT_ADD", "register:40f0:8", ["const:8f39c8:8", "const:4:8"]]
+ 008f39c8 ["CALL", null, ["callee:00c53da0:8"]]
- 008f3978 ["INT_EQUAL", "tmp:0:1", ["register:4000:8", "const:0:8"]]
- 008f3978 ["CBRANCH", null, ["local:b4:8", "tmp:0:1"]]
+ 008f39cc ["INT_EQUAL", "tmp:0:1", ["register:4000:8", "const:0:8"]]
+ 008f39cc ["CBRANCH", null, ["local:b3:8", "tmp:0:1"]]
~~~


<a id="compare-f2308bc9c162fdac7e9de21fa13fca13"></a>

### [`008f53b0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008f5/008f53b0.md) → [`008f5404`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008f5/008f5404.md) FUN_008f5404

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`008f6694`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008f6/008f6694.md) · 呼出先 27件 [`0043bba4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043bba4.md) [`00440ec0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00440/00440ec0.md) [`0046c9c4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0046c/0046c9c4.md) [`00470840`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00470/00470840.md) [`006647c0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00664/006647c0.md)
- 新版 呼出元 1件 [`008f66e8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008f6/008f66e8.md) · 呼出先 27件 [`0043bbe4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bbe4.md) [`00440f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00440/00440f00.md) [`0046ca04`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046c/0046ca04.md) [`00470880`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00470/00470880.md) [`00664800`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00664/00664800.md)

変更の種類 branch_value, call, call_argument_candidate, call_target, constant, operands_and_dependencies, store_condition, store_destination

命令の説明率　旧版 98.82% / 新版 98.82%

優先判定に残った影響 `call_argument_candidate` 3件, `call_target` 2件

アドレスに依存する影響 `branch_value` 1件, `store_condition` 2件, `store_destination` 2件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_destination",
    "new": {
      "definition_site": "008f5a14",
      "incomplete_value": false,
      "site": "008f5a14",
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
            "const:6e0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008f59c0",
      "incomplete_value": false,
      "site": "008f59c0",
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
            "const:610:8"
          ]
        ]
      ]
    },
    "ordinal": 109,
    "slot": 1
  },
  {
    "confidence": "bounded",
    "kind": "store_destination",
    "new": {
      "definition_site": "008f5a34",
      "incomplete_value": false,
      "site": "008f5a34",
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
            "const:6e4:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008f59e0",
      "incomplete_value": false,
      "site": "008f59e0",
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
            "const:614:8"
          ]
        ]
      ]
    },
    "ordinal": 110,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "branch_value",
    "new": {
      "definition_site": "008f5440",
      "incomplete_value": true,
      "site": "008f5440",
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
      "definition_site": "008f53ec",
      "incomplete_value": true,
      "site": "008f53ec",
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
      "008f543c",
      "READ",
      [
        "storage",
        "00ca4978",
        null,
        "undefined8"
      ]
    ],
    [
      "008f5448",
      "PARAM",
      [
        "storage",
        "00c65e58",
        null,
        "pointer __((offset(0x10)))"
      ]
    ],
    [
      "008f5450",
      "PARAM",
      [
        "storage",
        "00c858d0",
        null,
        "pointer __((offset(0x10)))"
      ]
    ]
  ],
  "added": [
    [
      "008f543c",
      "READ",
      [
        "storage",
        "00ca4a78",
        null,
        "undefined8"
      ]
    ],
    [
      "008f5448",
      "PARAM",
      [
        "storage",
        "00c65f28",
        null,
        "pointer __((offset(0x10)))"
      ]
    ],
    [
      "008f5450",
      "PARAM",
      [
        "storage",
        "00c859a0",
        null,
        "pointer __((offset(0x10)))"
      ]
    ]
  ]
}
~~~


~~~diff
- 008f5408 ["INT_ADD", "register:40f0:8", ["const:8f5408:8", "const:4:8"]]
- 008f5408 ["CALL", null, ["callee:00c586e0:8"]]
+ 008f545c ["INT_ADD", "register:40f0:8", ["const:8f545c:8", "const:4:8"]]
+ 008f545c ["CALL", null, ["callee:00c586e0:8"]]
- 008f5730 ["INT_ADD", "register:40f0:8", ["const:8f5730:8", "const:4:8"]]
- 008f5730 ["CALL", null, ["ram:665c7c:8"]]
+ 008f5784 ["INT_ADD", "register:40f0:8", ["const:8f5784:8", "const:4:8"]]
+ 008f5784 ["CALL", null, ["ram:665cbc:8"]]
- 008f5780 ["INT_ADD", "register:40f0:8", ["const:8f5780:8", "const:4:8"]]
- 008f5780 ["CALL", null, ["callee:008f9c68:8"]]
+ 008f57d4 ["INT_ADD", "register:40f0:8", ["const:8f57d4:8", "const:4:8"]]
+ 008f57d4 ["CALL", null, ["callee:008f9c68:8"]]
~~~


<a id="compare-61110e10a962126f4cf72abad7cef6a7"></a>

### [`008f5be4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008f5/008f5be4.md) → [`008f5c38`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008f5/008f5c38.md) FUN_008f5c38

根拠 `similar_code_calls_and_string` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`008f6740`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008f6/008f6740.md) · 呼出先 17件 [`0043bba4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043bba4.md) [`0048ce54`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0048c/0048ce54.md) [`00676a60`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00676/00676a60.md) [`006c0f38`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006c0/006c0f38.md) [`006c2018`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006c2/006c2018.md)
- 新版 呼出元 1件 [`008f6794`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008f6/008f6794.md) · 呼出先 17件 [`0043bbe4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bbe4.md) [`0048ce94`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048c/0048ce94.md) [`00676aa0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00676/00676aa0.md) [`006c0f90`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006c0/006c0f90.md) [`006c2070`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006c2/006c2070.md)

変更の種類 call, call_argument_candidate, call_target, constant, local_def_use, operands_and_dependencies, store_value, unresolved_call_alignment

命令の説明率　旧版 95.73% / 新版 95.73%

優先判定に残った影響 `call_argument_candidate` 1件, `call_target` 3件, `store_value` 4件, `unresolved_call_alignment` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "008f6168",
      "incomplete_value": true,
      "site": "008f617c",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:2e0:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008f6114",
      "incomplete_value": true,
      "site": "008f6128",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:2a0:8"
              ]
            ]
          ]
        ]
      ]
    },
    "ordinal": 57,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "008f6174",
      "incomplete_value": true,
      "site": "008f6184",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:f8:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008f6120",
      "incomplete_value": true,
      "site": "008f6130",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:154:8"
              ]
            ]
          ]
        ]
      ]
    },
    "ordinal": 59,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "008f6174",
      "incomplete_value": true,
      "site": "008f6184",
      "value": [
        "LOAD",
        "16",
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
      "definition_site": "008f6120",
      "incomplete_value": true,
      "site": "008f6130",
      "value": [
        "LOAD",
        "16",
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
    "ordinal": 60,
    "slot": 2
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "008f5ca8",
      "PARAM",
      [
        "storage",
        "002c86f5",
        null,
        null
      ]
    ],
    [
      "008f5d0c",
      "PARAM",
      [
        "storage",
        "002c86f5",
        null,
        null
      ]
    ],
    [
      "008f5d24",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "008f3044"
      ]
    ]
  ],
  "added": [
    [
      "008f5ca8",
      "PARAM",
      [
        "storage",
        "002c8735",
        null,
        null
      ]
    ],
    [
      "008f5d0c",
      "PARAM",
      [
        "storage",
        "002c8735",
        null,
        null
      ]
    ],
    [
      "008f5d24",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "008f3098"
      ]
    ]
  ]
}
~~~


~~~diff
- 008f5cd0 ["INT_ADD", "register:40f0:8", ["const:8f5cd0:8", "const:4:8"]]
- 008f5cd0 ["CALL", null, ["ram:8f3044:8"]]
+ 008f5d24 ["INT_ADD", "register:40f0:8", ["const:8f5d24:8", "const:4:8"]]
+ 008f5d24 ["CALL", null, ["ram:8f3098:8"]]
- 008f5d7c ["INT_ADD", "register:40f0:8", ["const:8f5d7c:8", "const:4:8"]]
- 008f5d7c ["CALL", null, ["callee:008f9c68:8"]]
+ 008f5dd0 ["INT_ADD", "register:40f0:8", ["const:8f5dd0:8", "const:4:8"]]
+ 008f5dd0 ["CALL", null, ["callee:008f9c68:8"]]
- 008f5d88 ["INT_ADD", "register:40f0:8", ["const:8f5d88:8", "const:4:8"]]
- 008f5d88 ["CALL", null, ["ram:8f3044:8"]]
+ 008f5ddc ["INT_ADD", "register:40f0:8", ["const:8f5ddc:8", "const:4:8"]]
+ 008f5ddc ["CALL", null, ["ram:8f3098:8"]]
~~~


<a id="compare-6722ab12ac5eb53a688df490bf5de5e5"></a>

### [`008f62e4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008f6/008f62e4.md) → [`008f6338`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008f6/008f6338.md) FUN_008f6338

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 1件 [`008f7e78`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008f7/008f7e78.md) · 呼出先 14件 [`00467860`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00467/00467860.md) [`00468804`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00468/00468804.md) [`00468f88`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00468/00468f88.md) [`0046965c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00469/0046965c.md) [`0046c9c4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0046c/0046c9c4.md)
- 新版 呼出元 1件 [`008f7ecc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008f7/008f7ecc.md) · 呼出先 14件 [`004678a0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00467/004678a0.md) [`00468844`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00468/00468844.md) [`00468fc8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00468/00468fc8.md) [`0046969c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00469/0046969c.md) [`0046ca04`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046c/0046ca04.md)

変更の種類 branch_condition_or_target, branch_value, call, call_argument_candidate, call_target, comparison, comparison_count, constant, control_flow, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 85.59% / 新版 85.59%

優先判定に残った影響 `call_argument_candidate` 3件, `call_target` 1件, `unresolved_branch_alignment` 1件, `unresolved_call_alignment` 2件, `unresolved_store_alignment` 3件

アドレスに依存する影響 `branch_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "branch_value",
    "new": {
      "definition_site": "008f6370",
      "incomplete_value": true,
      "site": "008f6370",
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
      "definition_site": "008f631c",
      "incomplete_value": true,
      "site": "008f631c",
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
    "new": null,
    "old": {
      "definition_site": "008f6334",
      "incomplete_value": false,
      "site": "008f6338",
      "value": [
        "leaf",
        "const:0:8"
      ]
    },
    "ordinal": 0,
    "slot": 4
  },
  {
    "confidence": "limited",
    "kind": "call_target",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "008f64c0",
      "value": [
        "leaf",
        "ram:8f32b4:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "008f646c",
      "value": [
        "leaf",
        "ram:8f3260:8"
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
      "unmatched:008f6310",
      "WRITE",
      [
        "storage",
        "Stack[-0x68]",
        null,
        null
      ]
    ],
    [
      "008f636c",
      "READ",
      [
        "storage",
        "00ca4978",
        null,
        "undefined8"
      ]
    ],
    [
      "unmatched:008f6324",
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
      "008f6364",
      "WRITE",
      [
        "storage",
        "Stack[-0x68]",
        null,
        null
      ]
    ],
    [
      "008f636c",
      "READ",
      [
        "storage",
        "00ca4a78",
        null,
        "undefined8"
      ]
    ],
    [
      "008f6378",
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
- 008f6338 ["INT_ADD", "register:40f0:8", ["const:8f6338:8", "const:4:8"]]
- 008f6338 ["CALL", null, ["callee:00c586e0:8"]]
+ 008f638c ["INT_ADD", "register:40f0:8", ["const:8f638c:8", "const:4:8"]]
+ 008f638c ["CALL", null, ["callee:00c586e0:8"]]
- 008f646c ["INT_ADD", "register:40f0:8", ["const:8f646c:8", "const:4:8"]]
- 008f646c ["CALL", null, ["ram:8f3260:8"]]
+ 008f64c0 ["INT_ADD", "register:40f0:8", ["const:8f64c0:8", "const:4:8"]]
+ 008f64c0 ["CALL", null, ["ram:8f32b4:8"]]
- 008f65f0 ["INT_ADD", "register:40f0:8", ["const:8f65f0:8", "const:4:8"]]
- 008f65f0 ["CALL", null, ["callee:00468fc8:8"]]
+ 008f6644 ["INT_ADD", "register:40f0:8", ["const:8f6644:8", "const:4:8"]]
+ 008f6644 ["CALL", null, ["callee:00468fc8:8"]]
~~~


<a id="compare-e1d3cf5012bb6ae9dd41754e310d8505"></a>

### [`008f6694`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008f6/008f6694.md) → [`008f66e8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008f6/008f66e8.md) FUN_008f66e8

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`008f6764`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008f6/008f6764.md) · 呼出先 7件 [`0066d0dc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0066d/0066d0dc.md) [`006c41bc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006c4/006c41bc.md) [`006d1848`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006d1/006d1848.md) [`008ed1b8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008ed/008ed1b8.md) [`008ef908`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008ef/008ef908.md)
- 新版 呼出元 1件 [`008f67b8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008f6/008f67b8.md) · 呼出先 7件 [`0066d11c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0066d/0066d11c.md) [`006c4214`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006c4/006c4214.md) [`006d18a0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006d1/006d18a0.md) [`008ed20c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008ed/008ed20c.md) [`008ef95c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008ef/008ef95c.md)

変更の種類 branch_value, call, call_argument_candidate, call_target, constant, local_def_use, operands_and_dependencies

命令の説明率　旧版 88.37% / 新版 88.37%

優先判定に残った影響 `branch_value` 1件, `call_argument_candidate` 2件, `call_target` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "branch_value",
    "new": {
      "definition_site": "008f6700",
      "incomplete_value": true,
      "site": "008f6700",
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
      "definition_site": "008f66ac",
      "incomplete_value": true,
      "site": "008f66ac",
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
      "definition_site": "008f6708",
      "incomplete_value": false,
      "site": "008f671c",
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
      "definition_site": "008f66b4",
      "incomplete_value": false,
      "site": "008f66c8",
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
      "definition_site": "008f6710",
      "incomplete_value": false,
      "site": "008f671c",
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
            "const:9a0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008f66bc",
      "incomplete_value": false,
      "site": "008f66c8",
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
            "const:8d0:8"
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
      "008f66fc",
      "READ",
      [
        "storage",
        "00ca4978",
        null,
        "undefined8"
      ]
    ],
    [
      "008f6708",
      "PARAM",
      [
        "storage",
        "00c65e58",
        null,
        "pointer __((offset(0x10)))"
      ]
    ],
    [
      "008f6710",
      "PARAM",
      [
        "storage",
        "00c858d0",
        null,
        "pointer __((offset(0x10)))"
      ]
    ]
  ],
  "added": [
    [
      "008f66fc",
      "READ",
      [
        "storage",
        "00ca4a78",
        null,
        "undefined8"
      ]
    ],
    [
      "008f6708",
      "PARAM",
      [
        "storage",
        "00c65f28",
        null,
        "pointer __((offset(0x10)))"
      ]
    ],
    [
      "008f6710",
      "PARAM",
      [
        "storage",
        "00c859a0",
        null,
        "pointer __((offset(0x10)))"
      ]
    ]
  ]
}
~~~


~~~diff
- 008f66c8 ["INT_ADD", "register:40f0:8", ["const:8f66c8:8", "const:4:8"]]
- 008f66c8 ["CALL", null, ["callee:00c586e0:8"]]
+ 008f671c ["INT_ADD", "register:40f0:8", ["const:8f671c:8", "const:4:8"]]
+ 008f671c ["CALL", null, ["callee:00c586e0:8"]]
- 008f6724 ["INT_ADD", "register:40f0:8", ["const:8f6724:8", "const:4:8"]]
- 008f6724 ["CALL", null, ["ram:6d1848:8"]]
+ 008f6778 ["INT_ADD", "register:40f0:8", ["const:8f6778:8", "const:4:8"]]
+ 008f6778 ["CALL", null, ["ram:6d18a0:8"]]
- 008f66a8 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:978:8"]]
- 008f66a8 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
+ 008f66fc ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:a78:8"]]
+ 008f66fc ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-0d353452afdffc863a5b2e1b08e48889"></a>

### [`008f89ec`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008f8/008f89ec.md) → [`008f8a40`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008f8/008f8a40.md) FUN_008f8a40

根拠 `code_and_unique_call_neighborhood` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 2件 [`008ebb78`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008eb/008ebb78.md) [`008ebe74`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008eb/008ebe74.md) · 呼出先 1件 [`0043b778`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043b778.md)
- 新版 呼出元 2件 [`008ebbcc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008eb/008ebbcc.md) [`008ebec8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008eb/008ebec8.md) · 呼出先 1件 [`0043b7b8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b7b8.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 80.00% / 新版 80.00%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "008f8a4c",
      "incomplete_value": false,
      "site": "008f8a50",
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
      "definition_site": "008f89f8",
      "incomplete_value": false,
      "site": "008f89fc",
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
      "008f8a4c",
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
      "008f8a4c",
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
- 008f89fc ["INT_ADD", "register:40f0:8", ["const:8f89fc:8", "const:4:8"]]
- 008f89fc ["CALL", null, ["callee:0043b7b8:8"]]
+ 008f8a50 ["INT_ADD", "register:40f0:8", ["const:8f8a50:8", "const:4:8"]]
+ 008f8a50 ["CALL", null, ["callee:0043b7b8:8"]]
- 008f89f8 ["COPY", "tmp:0:8", ["const:f4c:8"]]
- 008f89f8 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 008f89f8 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 008f89f8 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 008f8a4c ["COPY", "tmp:0:8", ["const:f8c:8"]]
+ 008f8a4c ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 008f8a4c ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 008f8a4c ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
~~~


<a id="compare-51cd17ef04737b5d9d543f82c98052a3"></a>

### [`008f8a04`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008f8/008f8a04.md) → [`008f8a58`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008f8/008f8a58.md) FUN_008f8a58

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
      "definition_site": "008f8a7c",
      "incomplete_value": false,
      "site": "008f8a7c",
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
            "const:9c8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008f8a28",
      "incomplete_value": false,
      "site": "008f8a28",
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
            "const:8f8:8"
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
      "008f8a7c",
      "DATA",
      [
        "storage",
        "00c858f8",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "008f8a7c",
      "DATA",
      [
        "storage",
        "00c859c8",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 008f8a18 ["INT_ADD", "register:40f0:8", ["const:8f8a18:8", "const:4:8"]]
- 008f8a18 ["CALL", null, ["callee:00c57f60:8"]]
+ 008f8a6c ["INT_ADD", "register:40f0:8", ["const:8f8a6c:8", "const:4:8"]]
+ 008f8a6c ["CALL", null, ["callee:00c57f60:8"]]
- 008f8a24 ["COPY", "tmp:0:8", ["const:8f8:8"]]
- 008f8a24 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 008f8a24 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 008f8a24 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 008f8a78 ["COPY", "tmp:0:8", ["const:9c8:8"]]
+ 008f8a78 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 008f8a78 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 008f8a78 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-732791edd1ef34363f4cda38caa5b925"></a>

### [`008f8a38`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008f8/008f8a38.md) → [`008f8a8c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008f8/008f8a8c.md) FUN_008f8a8c

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
      "definition_site": "008f8a98",
      "incomplete_value": false,
      "site": "008f8a98",
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
            "const:9c8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008f8a44",
      "incomplete_value": false,
      "site": "008f8a44",
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
            "const:8f8:8"
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
      "008f8a98",
      "DATA",
      [
        "storage",
        "00c858f8",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "008f8a98",
      "DATA",
      [
        "storage",
        "00c859c8",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 008f8a40 ["COPY", "tmp:0:8", ["const:8f8:8"]]
- 008f8a40 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 008f8a40 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 008f8a40 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 008f8a94 ["COPY", "tmp:0:8", ["const:9c8:8"]]
+ 008f8a94 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 008f8a94 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 008f8a94 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
~~~


<a id="compare-cafc43f441209350e2ab3f15957a92fc"></a>

### [`008f8a54`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008f8/008f8a54.md) → [`008f8aa8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008f8/008f8aa8.md) FUN_008f8aa8

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
      "site": "008f8acc",
      "value": [
        "leaf",
        "ram:47ad34:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "008f8a78",
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
      "008f8acc",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047acf4"
      ]
    ]
  ],
  "added": [
    [
      "008f8acc",
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
- 008f8a78 ["INT_ADD", "register:40f0:8", ["const:8f8a78:8", "const:4:8"]]
- 008f8a78 ["CALL", null, ["ram:47acf4:8"]]
+ 008f8acc ["INT_ADD", "register:40f0:8", ["const:8f8acc:8", "const:4:8"]]
+ 008f8acc ["CALL", null, ["ram:47ad34:8"]]
- 008f8a84 ["INT_ADD", "register:40f0:8", ["const:8f8a84:8", "const:4:8"]]
- 008f8a84 ["CALL", null, ["callee:0047ce14:8"]]
+ 008f8ad8 ["INT_ADD", "register:40f0:8", ["const:8f8ad8:8", "const:4:8"]]
+ 008f8ad8 ["CALL", null, ["callee:0047ce14:8"]]
~~~


<a id="compare-b558fad2239d47a46f54a46cac25814b"></a>

### [`008f8ac4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008f8/008f8ac4.md) → [`008f8b18`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008f8/008f8b18.md) FUN_008f8b18

根拠 `code_and_unique_call_neighborhood` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 2件 [`008f2378`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008f2/008f2378.md) [`008f8ac4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008f8/008f8ac4.md) · 呼出先 22件 [`0043b764`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043b764.md) [`0043bb20`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043bb20.md) [`0043ddd8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043d/0043ddd8.md) [`00440f70`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00440/00440f70.md) [`00441cec`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00441/00441cec.md)
- 新版 呼出元 2件 [`008f23cc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008f2/008f23cc.md) [`008f8b18`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008f8/008f8b18.md) · 呼出先 22件 [`0043b7a4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b7a4.md) [`0043bb60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bb60.md) [`0043de18`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043d/0043de18.md) [`00440fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00440/00440fb0.md) [`00441d2c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00441/00441d2c.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, operands_and_dependencies, operation_sequence, store_condition, unresolved_branch_alignment, unresolved_store_alignment

命令の説明率　旧版 96.15% / 新版 96.15%

優先判定に残った影響 `call_argument_candidate` 7件, `store_condition` 1件, `unresolved_branch_alignment` 2件, `unresolved_store_alignment` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "008f8c74",
      "incomplete_value": false,
      "site": "008f8c7c",
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
      "definition_site": "008f8c20",
      "incomplete_value": false,
      "site": "008f8c28",
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
      "definition_site": "008f8c98",
      "incomplete_value": false,
      "site": "008f8ca4",
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
      "definition_site": "008f8c44",
      "incomplete_value": false,
      "site": "008f8c50",
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
      "definition_site": "008f8dcc",
      "incomplete_value": false,
      "site": "008f8dd4",
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
      "definition_site": "008f8d78",
      "incomplete_value": false,
      "site": "008f8d80",
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
      "unmatched:008f8b34",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "008f8d48"
      ]
    ],
    [
      "unmatched:008f8b64",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "008f8b94"
      ]
    ],
    [
      "008f8c74",
      "PARAM",
      [
        "storage",
        "002b7f53",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "008f8b88",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "008f8d48"
      ]
    ],
    [
      "008f8bb8",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "008f8b94"
      ]
    ],
    [
      "008f8c74",
      "PARAM",
      [
        "storage",
        "002b7f93",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 008f8c28 ["INT_ADD", "register:40f0:8", ["const:8f8c28:8", "const:4:8"]]
- 008f8c28 ["CALL", null, ["callee:00441ed4:8"]]
+ 008f8c7c ["INT_ADD", "register:40f0:8", ["const:8f8c7c:8", "const:4:8"]]
+ 008f8c7c ["CALL", null, ["callee:00441ed4:8"]]
- 008f8c50 ["INT_ADD", "register:40f0:8", ["const:8f8c50:8", "const:4:8"]]
- 008f8c50 ["CALL", null, ["callee:00442834:8"]]
+ 008f8ca4 ["INT_ADD", "register:40f0:8", ["const:8f8ca4:8", "const:4:8"]]
+ 008f8ca4 ["CALL", null, ["callee:00442834:8"]]
- 008f8c7c ["BOOL_NEGATE", "tmp:0:1", ["register:101:1"]]
- 008f8c7c ["CBRANCH", null, ["local:b62:8", "tmp:0:1"]]
+ 008f8cd0 ["BOOL_NEGATE", "tmp:0:1", ["register:101:1"]]
+ 008f8cd0 ["CBRANCH", null, ["local:b63:8", "tmp:0:1"]]
~~~


<a id="compare-8322d2c3a4731bfbe32337b29f6c8eda"></a>

### [`008f92dc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008f9/008f92dc.md) → [`008f9330`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008f9/008f9330.md) FUN_008f9330

根拠 `code_and_unique_call_neighborhood` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 2件 [`008f8ac4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008f8/008f8ac4.md) [`008f92dc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008f9/008f92dc.md) · 呼出先 23件 [`0043b764`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043b764.md) [`0043bb20`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043bb20.md) [`0043ddd8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043d/0043ddd8.md) [`00440f70`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00440/00440f70.md) [`00441cec`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00441/00441cec.md)
- 新版 呼出元 2件 [`008f8b18`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008f8/008f8b18.md) [`008f9330`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008f9/008f9330.md) · 呼出先 23件 [`0043b7a4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b7a4.md) [`0043bb60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bb60.md) [`0043de18`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043d/0043de18.md) [`00440fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00440/00440fb0.md) [`00441d2c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00441/00441d2c.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 98.69% / 新版 98.69%

優先判定に残った影響 `call_argument_candidate` 7件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "008f9488",
      "incomplete_value": false,
      "site": "008f9490",
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
      "definition_site": "008f9434",
      "incomplete_value": false,
      "site": "008f943c",
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
      "definition_site": "008f9544",
      "incomplete_value": false,
      "site": "008f954c",
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
      "definition_site": "008f94f0",
      "incomplete_value": false,
      "site": "008f94f8",
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
    "ordinal": 4,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "008f955c",
      "incomplete_value": false,
      "site": "008f9568",
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
      "definition_site": "008f9508",
      "incomplete_value": false,
      "site": "008f9514",
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
      "008f9488",
      "PARAM",
      [
        "storage",
        "002b7f53",
        null,
        null
      ]
    ],
    [
      "008f9544",
      "PARAM",
      [
        "storage",
        "002b5de7",
        null,
        null
      ]
    ],
    [
      "008f955c",
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
      "008f9488",
      "PARAM",
      [
        "storage",
        "002b7f93",
        null,
        null
      ]
    ],
    [
      "008f9544",
      "PARAM",
      [
        "storage",
        "002b5e27",
        null,
        null
      ]
    ],
    [
      "008f955c",
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
- 008f943c ["INT_ADD", "register:40f0:8", ["const:8f943c:8", "const:4:8"]]
- 008f943c ["CALL", null, ["callee:00441ed4:8"]]
+ 008f9490 ["INT_ADD", "register:40f0:8", ["const:8f9490:8", "const:4:8"]]
+ 008f9490 ["CALL", null, ["callee:00441ed4:8"]]
- 008f94f8 ["INT_ADD", "register:40f0:8", ["const:8f94f8:8", "const:4:8"]]
- 008f94f8 ["CALL", null, ["callee:00441ed4:8"]]
+ 008f954c ["INT_ADD", "register:40f0:8", ["const:8f954c:8", "const:4:8"]]
+ 008f954c ["CALL", null, ["callee:00441ed4:8"]]
- 008f9514 ["INT_ADD", "register:40f0:8", ["const:8f9514:8", "const:4:8"]]
- 008f9514 ["CALL", null, ["callee:00442834:8"]]
+ 008f9568 ["INT_ADD", "register:40f0:8", ["const:8f9568:8", "const:4:8"]]
+ 008f9568 ["CALL", null, ["callee:00442834:8"]]
~~~


<a id="compare-649a8047bc57426d85179b3547b7bad2"></a>

### [`008f9d9c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008f9/008f9d9c.md) → [`008f9df0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008f9/008f9df0.md) FUN_008f9df0

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
      "definition_site": "008f9e04",
      "incomplete_value": false,
      "site": "008f9e08",
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
            "const:a48:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008f9db0",
      "incomplete_value": false,
      "site": "008f9db4",
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
            "const:978:8"
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
      "008f9e08",
      "DATA",
      [
        "storage",
        "00c85978",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "008f9e08",
      "DATA",
      [
        "storage",
        "00c85a48",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 008f9da8 ["INT_ADD", "register:40f0:8", ["const:8f9da8:8", "const:4:8"]]
- 008f9da8 ["CALL", null, ["callee:00c57f60:8"]]
+ 008f9dfc ["INT_ADD", "register:40f0:8", ["const:8f9dfc:8", "const:4:8"]]
+ 008f9dfc ["CALL", null, ["callee:00c57f60:8"]]
- 008f9db0 ["COPY", "tmp:0:8", ["const:978:8"]]
- 008f9db0 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 008f9db0 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 008f9db0 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 008f9e04 ["COPY", "tmp:0:8", ["const:a48:8"]]
+ 008f9e04 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 008f9e04 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 008f9e04 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-0f709096a95d789a535fed296a1d1b43"></a>

### [`008f9e08`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008f9/008f9e08.md) → [`008f9e5c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008f9/008f9e5c.md) FUN_008f9e5c

根拠 `code_and_unique_call_neighborhood` · `raw_instruction_pcode` · `observed` · 参照 `changed`

- 旧版 呼出元 3件 [`008f52ec`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008f5/008f52ec.md) [`008f9e08`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008f9/008f9e08.md) [`008fa27c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008fa/008fa27c.md) · 呼出先 4件 [`008f9e08`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008f9/008f9e08.md) [`008fa10c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008fa/008fa10c.md) [`008fa27c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008fa/008fa27c.md) [`008fa544`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008fa/008fa544.md)
- 新版 呼出元 3件 [`008f5340`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008f5/008f5340.md) [`008f9e5c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008f9/008f9e5c.md) [`008fa2d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008fa/008fa2d0.md) · 呼出先 4件 [`008f9e5c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008f9/008f9e5c.md) [`008fa160`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008fa/008fa160.md) [`008fa2d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008fa/008fa2d0.md) [`008fa598`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008fa/008fa598.md)

変更の種類 constant, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_store_alignment

命令の説明率　旧版 99.48% / 新版 99.48%

アドレスに依存する影響 `unresolved_store_alignment` 2件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:008f9e14",
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
      "008f9e68",
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
- 008f9e14 ["COPY", "tmp:0:8", ["register:40b0:8"]]
- 008f9e14 ["COPY", "tmp:1:8", ["register:40a8:8"]]
- 008f9e14 ["INT_ADD", "tmp:2:8", ["register:8:8", "const:30:8"]]
- 008f9e14 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
- 008f9e54 ["INT_ADD", "register:40f0:8", ["const:8f9e54:8", "const:4:8"]]
- 008f9e54 ["CALL", null, ["callee:008fa160:8"]]
+ 008f9ea8 ["INT_ADD", "register:40f0:8", ["const:8f9ea8:8", "const:4:8"]]
+ 008f9ea8 ["CALL", null, ["callee:008fa160:8"]]
+ 008f9e68 ["COPY", "tmp:0:8", ["register:40b0:8"]]
+ 008f9e68 ["COPY", "tmp:1:8", ["register:40a8:8"]]
+ 008f9e68 ["INT_ADD", "tmp:2:8", ["register:8:8", "const:30:8"]]
+ 008f9e68 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
~~~


<a id="compare-4d9a24e6aebc347c29b9318053b664f7"></a>

### [`008fa10c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008fa/008fa10c.md) → [`008fa160`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008fa/008fa160.md) FUN_008fa160

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 3件 [`008f9e08`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008f9/008f9e08.md) [`008fa27c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008fa/008fa27c.md) [`008fa544`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008fa/008fa544.md) · 呼出先 3件 [`008514f8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00851/008514f8.md) [`008f9c14`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008f9/008f9c14.md) [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md)
- 新版 呼出元 3件 [`008f9e5c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008f9/008f9e5c.md) [`008fa2d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008fa/008fa2d0.md) [`008fa598`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008fa/008fa598.md) · 呼出先 3件 [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md) [`008f9c68`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008f9/008f9c68.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)

変更の種類 call_argument_candidate, constant, local_def_use, operands_and_dependencies, store_value

命令の説明率　旧版 93.48% / 新版 93.48%

優先判定に残った影響 `call_argument_candidate` 2件, `store_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "008fa1b4",
      "value": [
        "live",
        "register:40b8:8"
      ]
    },
    "old": {
      "definition_site": "008fa148",
      "incomplete_value": true,
      "site": "008fa160",
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
    "ordinal": 11,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "008fa20c",
      "incomplete_value": false,
      "site": "008fa214",
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
      "definition_site": "008fa1b8",
      "incomplete_value": false,
      "site": "008fa1c0",
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
    "ordinal": 5,
    "slot": 3
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "008fa260",
      "incomplete_value": false,
      "site": "008fa268",
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
      "definition_site": "008fa20c",
      "incomplete_value": false,
      "site": "008fa214",
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
      "008fa1b0",
      "PARAM",
      [
        "storage",
        "002c86f5",
        null,
        null
      ]
    ],
    [
      "008fa1d8",
      "PARAM",
      [
        "storage",
        "002c86f5",
        null,
        null
      ]
    ],
    [
      "008fa20c",
      "PARAM",
      [
        "storage",
        "002c86f5",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "008fa1b0",
      "PARAM",
      [
        "storage",
        "002c8735",
        null,
        null
      ]
    ],
    [
      "008fa1d8",
      "PARAM",
      [
        "storage",
        "002c8735",
        null,
        null
      ]
    ],
    [
      "008fa20c",
      "PARAM",
      [
        "storage",
        "002c8735",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 008fa16c ["INT_ADD", "register:40f0:8", ["const:8fa16c:8", "const:4:8"]]
- 008fa16c ["CALL", null, ["callee:00851550:8"]]
+ 008fa1c0 ["INT_ADD", "register:40f0:8", ["const:8fa1c0:8", "const:4:8"]]
+ 008fa1c0 ["CALL", null, ["callee:00851550:8"]]
- 008fa1c0 ["INT_ADD", "register:40f0:8", ["const:8fa1c0:8", "const:4:8"]]
- 008fa1c0 ["CALL", null, ["callee:008f9c68:8"]]
+ 008fa214 ["INT_ADD", "register:40f0:8", ["const:8fa214:8", "const:4:8"]]
+ 008fa214 ["CALL", null, ["callee:008f9c68:8"]]
- 008fa214 ["INT_ADD", "register:40f0:8", ["const:8fa214:8", "const:4:8"]]
- 008fa214 ["CALL", null, ["callee:008f9c68:8"]]
+ 008fa268 ["INT_ADD", "register:40f0:8", ["const:8fa268:8", "const:4:8"]]
+ 008fa268 ["CALL", null, ["callee:008f9c68:8"]]
~~~


<a id="compare-51eddb1dcd76bb3a68f5852e6a7e056b"></a>

### [`008fa27c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008fa/008fa27c.md) → [`008fa2d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008fa/008fa2d0.md) FUN_008fa2d0

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`008f9e08`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008f9/008f9e08.md) · 呼出先 2件 [`008f9e08`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008f9/008f9e08.md) [`008fa10c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008fa/008fa10c.md)
- 新版 呼出元 1件 [`008f9e5c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008f9/008f9e5c.md) · 呼出先 2件 [`008f9e5c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008f9/008f9e5c.md) [`008fa160`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008fa/008fa160.md)

変更の種類 branch_condition_or_target, call_argument_candidate, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, store_condition, unresolved_branch_alignment, unresolved_store_alignment

命令の説明率　旧版 93.82% / 新版 93.82%

優先判定に残った影響 `call_argument_candidate` 2件, `store_condition` 1件, `unresolved_branch_alignment` 1件, `unresolved_store_alignment` 3件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "008fa378",
      "incomplete_value": true,
      "site": "008fa37c",
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
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "008fa40c",
      "incomplete_value": true,
      "site": "008fa410",
      "value": [
        "live",
        "register:40b0:8"
      ]
    },
    "old": {
      "definition_site": "008fa3b8",
      "incomplete_value": true,
      "site": "008fa3bc",
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
            "register:40c0:8"
          ]
        ]
      ]
    },
    "ordinal": 3,
    "slot": 2
  },
  {
    "confidence": "limited",
    "guard": [
      [
        "FALL_THROUGH",
        "008fa2b4"
      ],
      [
        "FALL_THROUGH",
        "008fa308"
      ]
    ],
    "kind": "store_condition",
    "new": {
      "definition_site": "008fa308",
      "incomplete_value": true,
      "site": "008fa328",
      "value": [
        "BOOL_NEGATE",
        "1",
        [
          [
            "live",
            "register:101:1"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008fa2b4",
      "incomplete_value": true,
      "site": "008fa2d4",
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
      "unmatched:008fa280",
      "WRITE",
      [
        "storage",
        "Stack[-0x60]",
        null,
        null
      ]
    ],
    [
      "unmatched:008fa284",
      "WRITE",
      [
        "storage",
        "Stack[-0x50]",
        null,
        null
      ]
    ],
    [
      "unmatched:008fa2b4",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "008fa350"
      ]
    ]
  ],
  "added": [
    [
      "008fa2d4",
      "WRITE",
      [
        "storage",
        "Stack[-0x60]",
        null,
        null
      ]
    ],
    [
      "008fa2d8",
      "WRITE",
      [
        "storage",
        "Stack[-0x50]",
        null,
        null
      ]
    ],
    [
      "008fa308",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "008fa350"
      ]
    ]
  ]
}
~~~


~~~diff
+ 008fa2d4 ["COPY", "tmp:0:8", ["register:40e8:8"]]
+ 008fa2d4 ["COPY", "tmp:1:8", ["register:40f0:8"]]
+ 008fa2d4 ["INT_ADD", "register:8:8", ["register:8:8", "const:ffffffffffffffa0:8"]]
+ 008fa2d4 ["STORE", null, ["const:1b1:8", "register:8:8", "tmp:0:8"]]
- 008fa368 ["CBRANCH", null, ["local:b15:8", "register:101:1"]]
+ 008fa3bc ["CBRANCH", null, ["local:b14:8", "register:101:1"]]
- 008fa37c ["INT_ADD", "register:40f0:8", ["const:8fa37c:8", "const:4:8"]]
- 008fa37c ["CALL", null, ["callee:008fa160:8"]]
+ 008fa3d0 ["INT_ADD", "register:40f0:8", ["const:8fa3d0:8", "const:4:8"]]
+ 008fa3d0 ["CALL", null, ["callee:008fa160:8"]]
~~~


<a id="compare-85b77bfceb6ccfc15e77bd40ce7754dd"></a>

### [`008fa544`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008fa/008fa544.md) → [`008fa598`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008fa/008fa598.md) FUN_008fa598

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 2件 [`008f9e08`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008f9/008f9e08.md) [`008fa544`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008fa/008fa544.md) · 呼出先 3件 [`008fa10c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008fa/008fa10c.md) [`008fa544`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008fa/008fa544.md) [`00c57f40`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57f40.md)
- 新版 呼出元 2件 [`008f9e5c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008f9/008f9e5c.md) [`008fa598`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008fa/008fa598.md) · 呼出先 3件 [`008fa160`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008fa/008fa160.md) [`008fa598`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008fa/008fa598.md) [`00c58010`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58010.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_store_alignment

命令の説明率　旧版 94.83% / 新版 94.83%

優先判定に残った影響 `call_argument_candidate` 1件, `unresolved_branch_alignment` 5件, `unresolved_store_alignment` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "008fa74c",
      "incomplete_value": true,
      "site": "008fa750",
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
    "old": {
      "definition_site": "008fa6f8",
      "incomplete_value": true,
      "site": "008fa6fc",
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
    "slot": 1
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:008fa5c8",
      "WRITE",
      [
        "storage",
        "Stack[-0x70]",
        null,
        null
      ]
    ],
    [
      "unmatched:008fa5cc",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "008fa704"
      ]
    ],
    [
      "unmatched:008fa648",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "008fa788"
      ]
    ]
  ],
  "added": [
    [
      "008fa61c",
      "WRITE",
      [
        "storage",
        "Stack[-0x70]",
        null,
        null
      ]
    ],
    [
      "008fa620",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "008fa704"
      ]
    ],
    [
      "008fa69c",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "008fa788"
      ]
    ]
  ]
}
~~~


~~~diff
- 008fa6a8 ["BOOL_NEGATE", "tmp:0:1", ["register:101:1"]]
- 008fa6a8 ["CBRANCH", null, ["local:b25:8", "tmp:0:1"]]
+ 008fa6fc ["BOOL_NEGATE", "tmp:0:1", ["register:101:1"]]
+ 008fa6fc ["CBRANCH", null, ["local:b24:8", "tmp:0:1"]]
- 008fa6fc ["INT_ADD", "register:40f0:8", ["const:8fa6fc:8", "const:4:8"]]
- 008fa6fc ["CALL", null, ["callee:008fa160:8"]]
+ 008fa750 ["INT_ADD", "register:40f0:8", ["const:8fa750:8", "const:4:8"]]
+ 008fa750 ["CALL", null, ["callee:008fa160:8"]]
- 008fa564 ["INT_EQUAL", "tmp:0:1", ["register:4020:8", "const:0:8"]]
- 008fa564 ["CBRANCH", null, ["local:b87:8", "tmp:0:1"]]
+ 008fa5b8 ["INT_EQUAL", "tmp:0:1", ["register:4020:8", "const:0:8"]]
+ 008fa5b8 ["CBRANCH", null, ["local:b86:8", "tmp:0:1"]]
~~~


<a id="compare-5025e14df2c87c17655e148c5987f841"></a>

### [`008fab54`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008fa/008fab54.md) → [`008faba8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008fa/008faba8.md) FUN_008faba8

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
      "definition_site": "008fabbc",
      "incomplete_value": false,
      "site": "008fabc0",
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
            "const:ac8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008fab68",
      "incomplete_value": false,
      "site": "008fab6c",
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
            "const:9f8:8"
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
      "008fabc0",
      "DATA",
      [
        "storage",
        "00c859f8",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "008fabc0",
      "DATA",
      [
        "storage",
        "00c85ac8",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 008fab60 ["INT_ADD", "register:40f0:8", ["const:8fab60:8", "const:4:8"]]
- 008fab60 ["CALL", null, ["callee:00c57f60:8"]]
+ 008fabb4 ["INT_ADD", "register:40f0:8", ["const:8fabb4:8", "const:4:8"]]
+ 008fabb4 ["CALL", null, ["callee:00c57f60:8"]]
- 008fab68 ["COPY", "tmp:0:8", ["const:9f8:8"]]
- 008fab68 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 008fab68 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 008fab68 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 008fabbc ["COPY", "tmp:0:8", ["const:ac8:8"]]
+ 008fabbc ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 008fabbc ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 008fabbc ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-69a70ebb6f9138a1299d0e27d8b82363"></a>

### [`008fab78`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008fa/008fab78.md) → [`008fabcc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008fa/008fabcc.md) FUN_008fabcc

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
      "definition_site": "008fabd0",
      "incomplete_value": false,
      "site": "008fabd4",
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
            "const:ac8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008fab7c",
      "incomplete_value": false,
      "site": "008fab80",
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
            "const:9f8:8"
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
      "008fabd4",
      "DATA",
      [
        "storage",
        "00c859f8",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "008fabd4",
      "DATA",
      [
        "storage",
        "00c85ac8",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 008fab7c ["COPY", "tmp:0:8", ["const:9f8:8"]]
- 008fab7c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 008fab7c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 008fab7c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 008fabd0 ["COPY", "tmp:0:8", ["const:ac8:8"]]
+ 008fabd0 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 008fabd0 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 008fabd0 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-58546bb7f7c3ceb01b95401ec554ef8e"></a>

### [`008fab90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008fa/008fab90.md) → [`008fabe4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008fa/008fabe4.md) FUN_008fabe4

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 12件 [`0047acf4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047a/0047acf4.md) [`0047cdd4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047c/0047cdd4.md) [`0048ce54`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0048c/0048ce54.md) [`008514f8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00851/008514f8.md) [`008b9178`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008b9/008b9178.md)
- 新版 呼出元 0件  · 呼出先 12件 [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md) [`0047ce14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047ce14.md) [`0048ce94`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048c/0048ce94.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md) [`008b91d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b9/008b91d0.md)

変更の種類 call, call_target, comparison, comparison_count, constant, operands_and_dependencies, operation_sequence, store_value

命令の説明率　旧版 89.25% / 新版 89.25%

優先判定に残った影響 `call_target` 1件, `store_value` 4件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "008fac78",
      "incomplete_value": true,
      "site": "008fac8c",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:2e0:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008fac24",
      "incomplete_value": true,
      "site": "008fac38",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:2a0:8"
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
      "definition_site": "008fac84",
      "incomplete_value": true,
      "site": "008fac94",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:322:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008fac30",
      "incomplete_value": true,
      "site": "008fac40",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:37e:8"
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
      "definition_site": "008fac84",
      "incomplete_value": true,
      "site": "008fac94",
      "value": [
        "LOAD",
        "16",
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
      "definition_site": "008fac30",
      "incomplete_value": true,
      "site": "008fac40",
      "value": [
        "LOAD",
        "16",
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
    "ordinal": 11,
    "slot": 2
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "008fac1c",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047acf4"
      ]
    ],
    [
      "008fac78",
      "READ",
      [
        "storage",
        "002c32a0",
        null,
        null
      ]
    ],
    [
      "008fac84",
      "READ",
      [
        "storage",
        "002aa37e",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "008fac1c",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ],
    [
      "008fac78",
      "READ",
      [
        "storage",
        "002c32e0",
        null,
        null
      ]
    ],
    [
      "008fac84",
      "READ",
      [
        "storage",
        "002aa322",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 008fabc8 ["INT_ADD", "register:40f0:8", ["const:8fabc8:8", "const:4:8"]]
- 008fabc8 ["CALL", null, ["ram:47acf4:8"]]
+ 008fac1c ["INT_ADD", "register:40f0:8", ["const:8fac1c:8", "const:4:8"]]
+ 008fac1c ["CALL", null, ["ram:47ad34:8"]]
- 008fac08 ["INT_ADD", "register:40f0:8", ["const:8fac08:8", "const:4:8"]]
- 008fac08 ["CALL", null, ["callee:00851550:8"]]
+ 008fac5c ["INT_ADD", "register:40f0:8", ["const:8fac5c:8", "const:4:8"]]
+ 008fac5c ["CALL", null, ["callee:00851550:8"]]
- 008fabd4 ["INT_ADD", "register:40f0:8", ["const:8fabd4:8", "const:4:8"]]
- 008fabd4 ["CALL", null, ["callee:0047ce14:8"]]
+ 008fac28 ["INT_ADD", "register:40f0:8", ["const:8fac28:8", "const:4:8"]]
+ 008fac28 ["CALL", null, ["callee:0047ce14:8"]]
~~~


<a id="compare-465d1b6303786cb251de265650aaca4b"></a>

### [`008fadc0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008fa/008fadc0.md) → [`008fae14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008fa/008fae14.md) FUN_008fae14

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)

変更の種類 cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_return_alignment, unresolved_store_alignment

命令の説明率　旧版 55.56% / 新版 55.56%

優先判定に残った影響 `unresolved_return_alignment` 1件, `unresolved_store_alignment` 1件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:008fadd8",
      "DATA",
      [
        "storage",
        "00c85a68",
        null,
        "undefined *"
      ]
    ],
    [
      "unmatched:008faddc",
      "DATA",
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
      "008fae2c",
      "DATA",
      [
        "storage",
        "00c85b38",
        null,
        "undefined *"
      ]
    ],
    [
      "008fae30",
      "DATA",
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
- 008fadcc ["INT_ADD", "register:40f0:8", ["const:8fadcc:8", "const:4:8"]]
- 008fadcc ["CALL", null, ["callee:00c57f60:8"]]
+ 008fae20 ["INT_ADD", "register:40f0:8", ["const:8fae20:8", "const:4:8"]]
+ 008fae20 ["CALL", null, ["callee:00c57f60:8"]]
- 008fadd4 ["COPY", "tmp:0:8", ["const:a68:8"]]
- 008fadd4 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 008fadd4 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 008fadd4 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 008fadd8 ["COPY", "tmp:0:8", ["register:4000:8"]]
- 008fadd8 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4040:8"]]
~~~


<a id="compare-16640e2c0e9940d93bb6522d2d46b08f"></a>

### [`008fade4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008fa/008fade4.md) → [`008fae38`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008fa/008fae38.md) FUN_008fae38

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
      "definition_site": "008fae3c",
      "incomplete_value": false,
      "site": "008fae40",
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
            "const:b38:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008fade8",
      "incomplete_value": false,
      "site": "008fadec",
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
            "const:a68:8"
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
      "008fae40",
      "DATA",
      [
        "storage",
        "00c85a68",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "008fae40",
      "DATA",
      [
        "storage",
        "00c85b38",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 008fade8 ["COPY", "tmp:0:8", ["const:a68:8"]]
- 008fade8 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 008fade8 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 008fade8 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 008fae3c ["COPY", "tmp:0:8", ["const:b38:8"]]
+ 008fae3c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 008fae3c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 008fae3c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-520f1057f99952ca5dd10c841d4fa6aa"></a>

### [`008fadfc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008fa/008fadfc.md) → [`008fae50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008fa/008fae50.md) FUN_008fae50

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 4件 [`0047acf4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047a/0047acf4.md) [`0047cdd4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047c/0047cdd4.md) [`008514f8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00851/008514f8.md) [`008b9178`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008b9/008b9178.md)
- 新版 呼出元 0件  · 呼出先 4件 [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md) [`0047ce14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047ce14.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md) [`008b91d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b9/008b91d0.md)

変更の種類 branch_condition_or_target, call, call_argument_candidate, call_count, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_call_alignment

命令の説明率　旧版 84.00% / 新版 84.00%

優先判定に残った影響 `call_argument_candidate` 1件, `unresolved_branch_alignment` 1件, `unresolved_call_alignment` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "008fae28",
      "incomplete_value": false,
      "site": "008fae2c",
      "value": [
        "leaf",
        "const:0:8"
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
      "unmatched:008fae04",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "008faeb0"
      ]
    ],
    [
      "unmatched:008fae20",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047acf4"
      ]
    ]
  ],
  "added": [
    [
      "008fae58",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "008faeb0"
      ]
    ],
    [
      "008fae74",
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
- 008fae2c ["INT_ADD", "register:40f0:8", ["const:8fae2c:8", "const:4:8"]]
- 008fae2c ["CALL", null, ["callee:0047ce14:8"]]
+ 008fae80 ["INT_ADD", "register:40f0:8", ["const:8fae80:8", "const:4:8"]]
+ 008fae80 ["CALL", null, ["callee:0047ce14:8"]]
- 008fadfc ["COPY", "tmp:0:8", ["register:4010:8"]]
- 008fadfc ["LOAD", "tmp:1:4", ["const:1b1:8", "tmp:0:8"]]
- 008fadfc ["INT_ZEXT", "register:4040:8", ["tmp:1:4"]]
- 008fae00 ["COPY", "tmp:0:4", ["const:2:4"]]
- 008fae00 ["INT_LESSEQUAL", "register:105:1", ["const:2:4", "register:4040:4"]]
- 008fae00 ["INT_SBORROW", "register:106:1", ["register:4040:4", "const:2:4"]]
- 008fae00 ["INT_SUB", "tmp:1:4", ["register:4040:4", "tmp:0:4"]]
~~~


<a id="compare-40b90009db86ce18806f6fec57c4d895"></a>

### [`008fae88`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008fa/008fae88.md) → [`008faedc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008fa/008faedc.md) FUN_008faedc

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 1件 [`008f6764`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008f6/008f6764.md) · 呼出先 12件 [`0047edb4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047e/0047edb4.md) [`00633374`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00633/00633374.md) [`007581d0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00758/007581d0.md) [`00862c50`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00862/00862c50.md) [`00864538`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00864/00864538.md)
- 新版 呼出元 1件 [`008f67b8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008f6/008f67b8.md) · 呼出先 12件 [`0047edf4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047e/0047edf4.md) [`006333b4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00633/006333b4.md) [`00758228`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00758/00758228.md) [`00862ca8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00862/00862ca8.md) [`00864590`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00864/00864590.md)

変更の種類 branch_condition_or_target, call, call_argument_candidate, call_count, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, store_value, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 31.49% / 新版 31.49%

優先判定に残った影響 `call_argument_candidate` 7件, `store_value` 6件, `unresolved_branch_alignment` 61件, `unresolved_call_alignment` 64件, `unresolved_store_alignment` 102件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "008fb674",
      "incomplete_value": true,
      "site": "008fb674",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:50a:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008fb620",
      "incomplete_value": true,
      "site": "008fb620",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:557:8"
              ]
            ]
          ]
        ]
      ]
    },
    "ordinal": 88,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "008fb68c",
      "incomplete_value": true,
      "site": "008fb68c",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:bc9:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008fb638",
      "incomplete_value": true,
      "site": "008fb638",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:c1d:8"
              ]
            ]
          ]
        ]
      ]
    },
    "ordinal": 90,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "008fb690",
      "incomplete_value": true,
      "site": "008fb690",
      "value": [
        "LOAD",
        "8",
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
      "definition_site": "008fb63c",
      "incomplete_value": true,
      "site": "008fb63c",
      "value": [
        "LOAD",
        "8",
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
    "ordinal": 91,
    "slot": 2
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:008fae8c",
      "WRITE",
      [
        "storage",
        "Stack[-0x50]",
        null,
        null
      ]
    ],
    [
      "unmatched:008faecc",
      "DATA",
      [
        "storage",
        "00c85af8",
        null,
        "pointer"
      ]
    ],
    [
      "unmatched:008faed8",
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
      "008faee0",
      "WRITE",
      [
        "storage",
        "Stack[-0x50]",
        null,
        null
      ]
    ],
    [
      "008faf20",
      "DATA",
      [
        "storage",
        "00c85bc8",
        null,
        "pointer"
      ]
    ],
    [
      "008faf2c",
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
- 008faf44 ["INT_ADD", "register:40f0:8", ["const:8faf44:8", "const:4:8"]]
- 008faf44 ["CALL", null, ["callee:006333b4:8"]]
+ 008faf98 ["INT_ADD", "register:40f0:8", ["const:8faf98:8", "const:4:8"]]
+ 008faf98 ["CALL", null, ["callee:006333b4:8"]]
+ 008faf44 ["COPY", "register:4040:8", ["const:2b6000:8"]]
- 008fafc4 ["INT_ADD", "register:40f0:8", ["const:8fafc4:8", "const:4:8"]]
- 008fafc4 ["CALL", null, ["callee:00864590:8"]]
+ 008fb018 ["INT_ADD", "register:40f0:8", ["const:8fb018:8", "const:4:8"]]
+ 008fb018 ["CALL", null, ["callee:00864590:8"]]
~~~


<a id="compare-f9c0b151d797710aacb4209b05795eb8"></a>

### [`008fbb6c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008fb/008fbb6c.md) → [`008fbbc0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008fb/008fbbc0.md) FUN_008fbbc0

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 4件 [`00682324`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00682/00682324.md) [`00c53d00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c53/00c53d00.md) [`00c57e80`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e80.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md)
- 新版 呼出元 0件  · 呼出先 4件 [`00682364`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00682/00682364.md) [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 90.00% / 新版 90.00%

優先判定に残った影響 `store_value` 2件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "008fbbd8",
      "incomplete_value": false,
      "site": "008fbbdc",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c78000:8"
          ],
          [
            "leaf",
            "const:400:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008fbb84",
      "incomplete_value": false,
      "site": "008fbb88",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c78000:8"
          ],
          [
            "leaf",
            "const:330:8"
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
      "definition_site": "008fbc14",
      "incomplete_value": false,
      "site": "008fbc18",
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
      "definition_site": "008fbbc0",
      "incomplete_value": false,
      "site": "008fbbc4",
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
      "008fbbdc",
      "DATA",
      [
        "storage",
        "00c78330",
        null,
        "pointer"
      ]
    ],
    [
      "008fbc18",
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
      "008fbbdc",
      "DATA",
      [
        "storage",
        "00c78400",
        null,
        "pointer"
      ]
    ],
    [
      "008fbc18",
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
- 008fbb84 ["COPY", "tmp:0:8", ["const:330:8"]]
- 008fbb84 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 008fbb84 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 008fbb84 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 008fbbd8 ["COPY", "tmp:0:8", ["const:400:8"]]
+ 008fbbd8 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 008fbbd8 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 008fbbd8 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 008fbb98 ["INT_ADD", "register:40f0:8", ["const:8fbb98:8", "const:4:8"]]
- 008fbb98 ["CALL", null, ["callee:00c53da0:8"]]
+ 008fbbec ["INT_ADD", "register:40f0:8", ["const:8fbbec:8", "const:4:8"]]
+ 008fbbec ["CALL", null, ["callee:00c53da0:8"]]
- 008fbbac ["COPY", "register:0:8", ["register:4040:8"]]
- 008fbbac ["INT_ADD", "register:40f0:8", ["const:8fbbac:8", "const:4:8"]]
- 008fbbac ["CALLIND", null, ["register:0:8"]]
+ 008fbc00 ["COPY", "register:0:8", ["register:4040:8"]]
+ 008fbc00 ["INT_ADD", "register:40f0:8", ["const:8fbc00:8", "const:4:8"]]
+ 008fbc00 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-f53cc3279d2a82fd33809b11e35f3a92"></a>

### [`008fbc0c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008fb/008fbc0c.md) → [`008fbc60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008fb/008fbc60.md) _INIT_175

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
      "definition_site": "008fbc9c",
      "incomplete_value": true,
      "site": "008fbcb8",
      "value": [
        "LOAD",
        "16",
        [
          [
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
      "definition_site": "008fbc48",
      "incomplete_value": true,
      "site": "008fbc64",
      "value": [
        "LOAD",
        "16",
        [
          [
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
      "definition_site": "008fbcc0",
      "incomplete_value": true,
      "site": "008fbcdc",
      "value": [
        "LOAD",
        "16",
        [
          [
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
      "definition_site": "008fbc6c",
      "incomplete_value": true,
      "site": "008fbc88",
      "value": [
        "LOAD",
        "16",
        [
          [
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
      "definition_site": "008fbce0",
      "incomplete_value": true,
      "site": "008fbcfc",
      "value": [
        "LOAD",
        "16",
        [
          [
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
      "definition_site": "008fbc8c",
      "incomplete_value": true,
      "site": "008fbca8",
      "value": [
        "LOAD",
        "16",
        [
          [
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
      "008fbc9c",
      "READ",
      [
        "storage",
        "002b7f26",
        null,
        "string"
      ]
    ],
    [
      "008fbcc0",
      "READ",
      [
        "storage",
        "002b7f39",
        null,
        "string"
      ]
    ],
    [
      "008fbce0",
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
      "008fbc9c",
      "READ",
      [
        "storage",
        "002b7f66",
        null,
        "string"
      ]
    ],
    [
      "008fbcc0",
      "READ",
      [
        "storage",
        "002b7f79",
        null,
        "string"
      ]
    ],
    [
      "008fbce0",
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
- 008fbd00 ["COPY", "tmp:0:8", ["const:f09:8"]]
- 008fbd00 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 008fbd00 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 008fbd00 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 008fbd54 ["COPY", "tmp:0:8", ["const:ebc:8"]]
+ 008fbd54 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 008fbd54 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 008fbd54 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
- 008fbd6c ["INT_ADD", "register:40f0:8", ["const:8fbd6c:8", "const:4:8"]]
- 008fbd6c ["CALL", null, ["callee:0043b838:8"]]
+ 008fbdc0 ["INT_ADD", "register:40f0:8", ["const:8fbdc0:8", "const:4:8"]]
+ 008fbdc0 ["CALL", null, ["callee:0043b838:8"]]
- 008fbda8 ["INT_ADD", "register:40f0:8", ["const:8fbda8:8", "const:4:8"]]
- 008fbda8 ["CALL", null, ["callee:0043b838:8"]]
+ 008fbdfc ["INT_ADD", "register:40f0:8", ["const:8fbdfc:8", "const:4:8"]]
+ 008fbdfc ["CALL", null, ["callee:0043b838:8"]]
~~~


<a id="compare-dc7130d2438f4b044032dbc093719721"></a>

### [`008fbf9c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008fb/008fbf9c.md) → [`008fbff0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008fb/008fbff0.md) _INIT_176

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
      "definition_site": "008fc02c",
      "incomplete_value": true,
      "site": "008fc048",
      "value": [
        "LOAD",
        "16",
        [
          [
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
      "definition_site": "008fbfd8",
      "incomplete_value": true,
      "site": "008fbff4",
      "value": [
        "LOAD",
        "16",
        [
          [
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
      "definition_site": "008fc050",
      "incomplete_value": true,
      "site": "008fc06c",
      "value": [
        "LOAD",
        "16",
        [
          [
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
      "definition_site": "008fbffc",
      "incomplete_value": true,
      "site": "008fc018",
      "value": [
        "LOAD",
        "16",
        [
          [
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
      "definition_site": "008fc070",
      "incomplete_value": true,
      "site": "008fc08c",
      "value": [
        "LOAD",
        "16",
        [
          [
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
      "definition_site": "008fc01c",
      "incomplete_value": true,
      "site": "008fc038",
      "value": [
        "LOAD",
        "16",
        [
          [
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
      "008fc02c",
      "READ",
      [
        "storage",
        "002b7f26",
        null,
        "string"
      ]
    ],
    [
      "008fc050",
      "READ",
      [
        "storage",
        "002b7f39",
        null,
        "string"
      ]
    ],
    [
      "008fc070",
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
      "008fc02c",
      "READ",
      [
        "storage",
        "002b7f66",
        null,
        "string"
      ]
    ],
    [
      "008fc050",
      "READ",
      [
        "storage",
        "002b7f79",
        null,
        "string"
      ]
    ],
    [
      "008fc070",
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
- 008fc090 ["COPY", "tmp:0:8", ["const:f09:8"]]
- 008fc090 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 008fc090 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 008fc090 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 008fc0e4 ["COPY", "tmp:0:8", ["const:ebc:8"]]
+ 008fc0e4 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 008fc0e4 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 008fc0e4 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
- 008fc0fc ["INT_ADD", "register:40f0:8", ["const:8fc0fc:8", "const:4:8"]]
- 008fc0fc ["CALL", null, ["callee:0043b838:8"]]
+ 008fc150 ["INT_ADD", "register:40f0:8", ["const:8fc150:8", "const:4:8"]]
+ 008fc150 ["CALL", null, ["callee:0043b838:8"]]
- 008fc138 ["INT_ADD", "register:40f0:8", ["const:8fc138:8", "const:4:8"]]
- 008fc138 ["CALL", null, ["callee:0043b838:8"]]
+ 008fc18c ["INT_ADD", "register:40f0:8", ["const:8fc18c:8", "const:4:8"]]
+ 008fc18c ["CALL", null, ["callee:0043b838:8"]]
~~~


<a id="compare-748cbb641be59e0ccd62a1c33584b385"></a>

### [`008fc5f0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008fc/008fc5f0.md) → [`008fc644`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008fc/008fc644.md) FUN_008fc644

根拠 `similar_code_calls_and_string` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`008fe9e4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008fe/008fe9e4.md) · 呼出先 16件 [`0043bba4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043bba4.md) [`00447ef4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00447/00447ef4.md) [`0046c9c4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0046c/0046c9c4.md) [`005c179c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005c1/005c179c.md) [`008514f8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00851/008514f8.md)
- 新版 呼出元 1件 [`008fea38`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008fe/008fea38.md) · 呼出先 16件 [`0043bbe4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bbe4.md) [`00447f34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00447/00447f34.md) [`0046ca04`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046c/0046ca04.md) [`005c17dc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005c1/005c17dc.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)

変更の種類 constant, operands_and_dependencies, operation_sequence, store_value

命令の説明率　旧版 97.54% / 新版 97.54%

優先判定に残った影響 `store_value` 3件

アドレスに依存する影響 `store_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "008fc6d4",
      "incomplete_value": true,
      "site": "008fc6e4",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:859:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008fc680",
      "incomplete_value": true,
      "site": "008fc690",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:819:8"
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
      "definition_site": "008fc6d8",
      "incomplete_value": true,
      "site": "008fc6e8",
      "value": [
        "LOAD",
        "8",
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
      "definition_site": "008fc684",
      "incomplete_value": true,
      "site": "008fc694",
      "value": [
        "LOAD",
        "8",
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
    "ordinal": 28,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "008fc6dc",
      "incomplete_value": true,
      "site": "008fc6ec",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:2e0:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008fc688",
      "incomplete_value": true,
      "site": "008fc698",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:2a0:8"
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
      "008fc6d4",
      "READ",
      [
        "storage",
        "002c1819",
        null,
        "string"
      ]
    ],
    [
      "008fc6d8",
      "READ",
      [
        "storage",
        "002c1829",
        null,
        "string"
      ]
    ],
    [
      "008fc6dc",
      "READ",
      [
        "storage",
        "002c22a0",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "008fc6d4",
      "READ",
      [
        "storage",
        "002c1859",
        null,
        "string"
      ]
    ],
    [
      "008fc6d8",
      "READ",
      [
        "storage",
        "002c1869",
        null,
        "string"
      ]
    ],
    [
      "008fc6dc",
      "READ",
      [
        "storage",
        "002c22e0",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 008fc670 ["INT_ADD", "register:40f0:8", ["const:8fc670:8", "const:4:8"]]
- 008fc670 ["CALL", null, ["callee:00c57f60:8"]]
+ 008fc6c4 ["INT_ADD", "register:40f0:8", ["const:8fc6c4:8", "const:4:8"]]
+ 008fc6c4 ["CALL", null, ["callee:00c57f60:8"]]
- 008fc678 ["COPY", "tmp:0:8", ["const:819:8"]]
- 008fc678 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 008fc678 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 008fc678 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 008fc6cc ["COPY", "tmp:0:8", ["const:859:8"]]
+ 008fc6cc ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 008fc6cc ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 008fc6cc ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 008fc67c ["COPY", "register:4048:8", ["const:2c2000:8"]]
~~~


<a id="compare-2a7efdc703abd4e39121853ee7ec65e4"></a>

### [`008fcba0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008fc/008fcba0.md) → [`008fcbf4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008fc/008fcbf4.md) FUN_008fcbf4

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`008fc5f0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008fc/008fc5f0.md) · 呼出先 12件 [`0043bba4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043bba4.md) [`0048791c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00487/0048791c.md) [`0048793c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00487/0048793c.md) [`00487e20`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00487/00487e20.md) [`00488658`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00488/00488658.md)
- 新版 呼出元 1件 [`008fc644`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008fc/008fc644.md) · 呼出先 12件 [`0043bbe4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bbe4.md) [`0048795c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00487/0048795c.md) [`0048797c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00487/0048797c.md) [`00487e60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00487/00487e60.md) [`00488698`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00488/00488698.md)

変更の種類 comparison, comparison_count, constant, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, store_value, unresolved_store_alignment

命令の説明率　旧版 96.04% / 新版 96.04%

優先判定に残った影響 `store_value` 1件, `unresolved_store_alignment` 3件

アドレスに依存する影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "008fcc60",
      "incomplete_value": false,
      "site": "008fcc64",
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
      "definition_site": "008fcc0c",
      "incomplete_value": false,
      "site": "008fcc10",
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
    "ordinal": 21,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "008fcdf0",
      "incomplete_value": true,
      "site": "008fcdf4",
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
      "definition_site": "008fcd9c",
      "incomplete_value": true,
      "site": "008fcda0",
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
      "008fcc64",
      "DATA",
      [
        "storage",
        "00c64d38",
        null,
        "undefined *"
      ]
    ],
    [
      "unmatched:008fcd6c",
      "READ",
      [
        "storage",
        "00c9abb0",
        null,
        "pointer"
      ]
    ],
    [
      "unmatched:008fcd70",
      "READ",
      [
        "storage",
        "00c9abb8",
        null,
        "pointer"
      ]
    ]
  ],
  "added": [
    [
      "008fcc64",
      "DATA",
      [
        "storage",
        "00c64e08",
        null,
        "undefined *"
      ]
    ],
    [
      "008fcdc0",
      "READ",
      [
        "storage",
        "00c9ac80",
        null,
        "pointer"
      ]
    ],
    [
      "008fcdc4",
      "READ",
      [
        "storage",
        "00c9ac88",
        null,
        "pointer"
      ]
    ]
  ]
}
~~~


~~~diff
- 008fcc04 ["INT_ADD", "register:40f0:8", ["const:8fcc04:8", "const:4:8"]]
- 008fcc04 ["CALL", null, ["callee:00487e60:8"]]
+ 008fcc58 ["INT_ADD", "register:40f0:8", ["const:8fcc58:8", "const:4:8"]]
+ 008fcc58 ["CALL", null, ["callee:00487e60:8"]]
- 008fcc0c ["COPY", "tmp:0:8", ["const:d38:8"]]
- 008fcc0c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 008fcc0c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 008fcc0c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 008fcc60 ["COPY", "tmp:0:8", ["const:e08:8"]]
+ 008fcc60 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 008fcc60 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 008fcc60 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 008fcc24 ["INT_ADD", "register:40f0:8", ["const:8fcc24:8", "const:4:8"]]
- 008fcc24 ["CALL", null, ["callee:00b11188:8"]]
+ 008fcc78 ["INT_ADD", "register:40f0:8", ["const:8fcc78:8", "const:4:8"]]
+ 008fcc78 ["CALL", null, ["callee:00b11188:8"]]
~~~


<a id="compare-a396246a7f775cc64787193f1494a2db"></a>

### [`008fd1e0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008fd/008fd1e0.md) → [`008fd234`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008fd/008fd234.md) FUN_008fd234

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `bounded` · 参照 `changed`

- 旧版 呼出元 2件 [`008fc5f0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008fc/008fc5f0.md) [`008fd500`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008fd/008fd500.md) · 呼出先 9件 [`0048ce54`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0048c/0048ce54.md) [`005c179c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005c1/005c179c.md) [`005da584`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005da/005da584.md) [`00691800`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00691/00691800.md) [`0071ed00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0071e/0071ed00.md)
- 新版 呼出元 2件 [`008fc644`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008fc/008fc644.md) [`008fd554`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008fd/008fd554.md) · 呼出先 9件 [`0048ce94`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048c/0048ce94.md) [`005c17dc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005c1/005c17dc.md) [`005da5c4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005da/005da5c4.md) [`00691858`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00691/00691858.md) [`0071ed58`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0071e/0071ed58.md)

変更の種類 comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, operands_and_dependencies, operation_sequence, unresolved_branch_alignment

命令の説明率　旧版 97.12% / 新版 97.12%

優先判定に残った影響 `unresolved_branch_alignment` 1件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "008fd2dc",
      "READ",
      [
        "storage",
        "0029f635",
        null,
        "string"
      ]
    ],
    [
      "008fd2e0",
      "READ",
      [
        "storage",
        "0029f63c",
        null,
        "string"
      ]
    ],
    [
      "unmatched:008fd380",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "008fd3cc"
      ]
    ]
  ],
  "added": [
    [
      "008fd2dc",
      "READ",
      [
        "storage",
        "0029f5e8",
        null,
        "string"
      ]
    ],
    [
      "008fd2e0",
      "READ",
      [
        "storage",
        "0029f5ef",
        null,
        "string"
      ]
    ],
    [
      "008fd3d4",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "008fd3cc"
      ]
    ]
  ]
}
~~~


~~~diff
- 008fd218 ["INT_ADD", "register:40f0:8", ["const:8fd218:8", "const:4:8"]]
- 008fd218 ["CALL", null, ["callee:008ac3d8:8"]]
+ 008fd26c ["INT_ADD", "register:40f0:8", ["const:8fd26c:8", "const:4:8"]]
+ 008fd26c ["CALL", null, ["callee:008ac3d8:8"]]
- 008fd23c ["INT_ADD", "register:40f0:8", ["const:8fd23c:8", "const:4:8"]]
- 008fd23c ["CALL", null, ["callee:00691858:8"]]
+ 008fd290 ["INT_ADD", "register:40f0:8", ["const:8fd290:8", "const:4:8"]]
+ 008fd290 ["CALL", null, ["callee:00691858:8"]]
- 008fd25c ["INT_ADD", "register:40f0:8", ["const:8fd25c:8", "const:4:8"]]
- 008fd25c ["CALL", null, ["callee:00691858:8"]]
+ 008fd2b0 ["INT_ADD", "register:40f0:8", ["const:8fd2b0:8", "const:4:8"]]
+ 008fd2b0 ["CALL", null, ["callee:00691858:8"]]
~~~


<a id="compare-d14e22c4639dc9960da1773c8065a929"></a>

### [`008fd500`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008fd/008fd500.md) → [`008fd554`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008fd/008fd554.md) FUN_008fd554

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 1件 [`008fed30`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008fe/008fed30.md) · 呼出先 43件 [`0043bb20`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043bb20.md) [`0043ddd8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043d/0043ddd8.md) [`0046c9c4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0046c/0046c9c4.md) [`0046e778`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0046e/0046e778.md) [`0046e788`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0046e/0046e788.md)
- 新版 呼出元 1件 [`008fed84`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008fe/008fed84.md) · 呼出先 43件 [`0043bb60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bb60.md) [`0043de18`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043d/0043de18.md) [`0046ca04`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046c/0046ca04.md) [`0046e7b8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046e/0046e7b8.md) [`0046e7c8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046e/0046e7c8.md)

変更の種類 branch_condition_or_target, call, call_argument_candidate, call_count, call_target, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, operands_and_dependencies, operation_sequence, store_value, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 68.66% / 新版 68.66%

優先判定に残った影響 `call_argument_candidate` 16件, `call_target` 4件, `store_value` 2件, `unresolved_branch_alignment` 22件, `unresolved_call_alignment` 65件, `unresolved_store_alignment` 3件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "008fd6e8",
      "incomplete_value": false,
      "site": "008fd6e8",
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
            "const:c00:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008fd694",
      "incomplete_value": false,
      "site": "008fd694",
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
            "const:b30:8"
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
      "definition_site": "008fdf74",
      "incomplete_value": false,
      "site": "008fdf74",
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
            "const:c80:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008fdf20",
      "incomplete_value": false,
      "site": "008fdf20",
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
            "const:bb0:8"
          ]
        ]
      ]
    },
    "ordinal": 76,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "call_target",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "008fd5b8",
      "value": [
        "leaf",
        "ram:47ad34:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "008fd564",
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
      "008fd5b8",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047acf4"
      ]
    ],
    [
      "008fd5e0",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047acf4"
      ]
    ],
    [
      "unmatched:008fd60c",
      "PARAM",
      [
        "storage",
        "0029f635",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "008fd5b8",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ],
    [
      "008fd5e0",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ],
    [
      "008fd660",
      "PARAM",
      [
        "storage",
        "0029f5e8",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 008fd564 ["INT_ADD", "register:40f0:8", ["const:8fd564:8", "const:4:8"]]
- 008fd564 ["CALL", null, ["ram:47acf4:8"]]
+ 008fd5b8 ["INT_ADD", "register:40f0:8", ["const:8fd5b8:8", "const:4:8"]]
+ 008fd5b8 ["CALL", null, ["ram:47ad34:8"]]
- 008fd58c ["INT_ADD", "register:40f0:8", ["const:8fd58c:8", "const:4:8"]]
- 008fd58c ["CALL", null, ["ram:47acf4:8"]]
+ 008fd5e0 ["INT_ADD", "register:40f0:8", ["const:8fd5e0:8", "const:4:8"]]
+ 008fd5e0 ["CALL", null, ["ram:47ad34:8"]]
- 008fd5b8 ["INT_ADD", "register:40f0:8", ["const:8fd5b8:8", "const:4:8"]]
- 008fd5b8 ["CALL", null, ["callee:0085b338:8"]]
+ 008fd60c ["INT_ADD", "register:40f0:8", ["const:8fd60c:8", "const:4:8"]]
+ 008fd60c ["CALL", null, ["callee:0085b338:8"]]
~~~


<a id="compare-a2b874db0c91daaf941986f350dfec18"></a>

### [`008fe5e4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008fe/008fe5e4.md) → [`008fe638`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008fe/008fe638.md) FUN_008fe638

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 2件 [`005c179c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005c1/005c179c.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md)
- 新版 呼出元 0件  · 呼出先 2件 [`005c17dc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005c1/005c17dc.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)

変更の種類 cfg_edge_inventory, constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 008fe5fc ["INT_ADD", "register:40f0:8", ["const:8fe5fc:8", "const:4:8"]]
- 008fe5fc ["CALL", null, ["callee:005c17dc:8"]]
+ 008fe650 ["INT_ADD", "register:40f0:8", ["const:8fe650:8", "const:4:8"]]
+ 008fe650 ["CALL", null, ["callee:005c17dc:8"]]
- 008fe608 ["INT_ADD", "register:40f0:8", ["const:8fe608:8", "const:4:8"]]
- 008fe608 ["CALL", null, ["callee:005c17dc:8"]]
+ 008fe65c ["INT_ADD", "register:40f0:8", ["const:8fe65c:8", "const:4:8"]]
+ 008fe65c ["CALL", null, ["callee:005c17dc:8"]]
~~~


<a id="compare-44e064e273d913392e0888c7022bc449"></a>

### [`008fe630`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008fe/008fe630.md) → [`008fe684`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008fe/008fe684.md) FUN_008fe684

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`008ff040`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008ff/008ff040.md) · 呼出先 12件 [`00467860`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00467/00467860.md) [`00469144`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00469/00469144.md) [`0046bd54`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0046b/0046bd54.md) [`0046c9c4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0046c/0046c9c4.md) [`0046ed8c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0046e/0046ed8c.md)
- 新版 呼出元 1件 [`008ff094`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008ff/008ff094.md) · 呼出先 12件 [`004678a0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00467/004678a0.md) [`00469184`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00469/00469184.md) [`0046bd94`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046b/0046bd94.md) [`0046ca04`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046c/0046ca04.md) [`0046edcc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046e/0046edcc.md)

変更の種類 branch_condition_or_target, branch_value, call_argument_candidate, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_call_alignment

命令の説明率　旧版 91.14% / 新版 91.14%

優先判定に残った影響 `branch_value` 1件, `call_argument_candidate` 10件, `unresolved_branch_alignment` 2件, `unresolved_call_alignment` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "branch_value",
    "new": {
      "definition_site": "008fe6bc",
      "incomplete_value": true,
      "site": "008fe6bc",
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
      "definition_site": "008fe668",
      "incomplete_value": true,
      "site": "008fe668",
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
    "new": null,
    "old": {
      "definition_site": "008fe678",
      "incomplete_value": true,
      "site": "008fe684",
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
            "const:b08:8"
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
      "definition_site": "008fe704",
      "incomplete_value": true,
      "site": "008fe708",
      "value": [
        "live",
        "register:4098:8"
      ]
    },
    "old": null,
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
      "008fe6b8",
      "READ",
      [
        "storage",
        "00ca4978",
        null,
        "undefined8"
      ]
    ],
    [
      "unmatched:008fe670",
      "PARAM",
      [
        "storage",
        "00c65e58",
        null,
        "pointer __((offset(0x10)))"
      ]
    ],
    [
      "unmatched:008fe678",
      "PARAM",
      [
        "storage",
        "00c85b08",
        null,
        "pointer __((offset(0x10)))"
      ]
    ]
  ],
  "added": [
    [
      "008fe6b8",
      "READ",
      [
        "storage",
        "00ca4a78",
        null,
        "undefined8"
      ]
    ],
    [
      "008fe6c4",
      "PARAM",
      [
        "storage",
        "00c65f28",
        null,
        "pointer __((offset(0x10)))"
      ]
    ],
    [
      "008fe6cc",
      "PARAM",
      [
        "storage",
        "00c85bd8",
        null,
        "pointer __((offset(0x10)))"
      ]
    ]
  ]
}
~~~


~~~diff
- 008fe684 ["INT_ADD", "register:40f0:8", ["const:8fe684:8", "const:4:8"]]
- 008fe684 ["CALL", null, ["callee:00c586e0:8"]]
+ 008fe6d8 ["INT_ADD", "register:40f0:8", ["const:8fe6d8:8", "const:4:8"]]
+ 008fe6d8 ["CALL", null, ["callee:00c586e0:8"]]
- 008fe6b4 ["INT_ADD", "register:40f0:8", ["const:8fe6b4:8", "const:4:8"]]
- 008fe6b4 ["CALL", null, ["callee:008aca34:8"]]
+ 008fe708 ["INT_ADD", "register:40f0:8", ["const:8fe708:8", "const:4:8"]]
+ 008fe708 ["CALL", null, ["callee:008aca34:8"]]
- 008fe708 ["COPY", "tmp:0:8", ["const:b08:8"]]
- 008fe708 ["INT_CARRY", "register:105:1", ["register:4010:8", "tmp:0:8"]]
- 008fe708 ["INT_SCARRY", "register:106:1", ["register:4010:8", "tmp:0:8"]]
- 008fe708 ["INT_ADD", "tmp:1:8", ["register:4010:8", "tmp:0:8"]]
~~~


<a id="compare-25b599c723c773e0b08428f23ef42c89"></a>

### [`008fe9e4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008fe/008fe9e4.md) → [`008fea38`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008fe/008fea38.md) FUN_008fea38

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00856e2c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00856/00856e2c.md) · 呼出先 19件 [`005c179c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005c1/005c179c.md) [`0066d0dc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0066d/0066d0dc.md) [`0086a164`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0086a/0086a164.md) [`008fc5f0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008fc/008fc5f0.md) [`008ff8cc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008ff/008ff8cc.md)
- 新版 呼出元 1件 [`00856e84`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00856/00856e84.md) · 呼出先 19件 [`005c17dc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005c1/005c17dc.md) [`0066d11c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0066d/0066d11c.md) [`0086a1bc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0086a/0086a1bc.md) [`008fc644`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008fc/008fc644.md) [`008ff920`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008ff/008ff920.md)

変更の種類 branch_value, call, call_argument_candidate, call_target, constant, operands_and_dependencies, store_destination, store_value

命令の説明率　旧版 91.44% / 新版 91.44%

優先判定に残った影響 `branch_value` 2件, `call_argument_candidate` 2件, `call_target` 1件, `store_destination` 3件, `store_value` 4件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_destination",
    "new": {
      "definition_site": "008feba8",
      "incomplete_value": false,
      "site": "008feba8",
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
      "definition_site": "008feb54",
      "incomplete_value": false,
      "site": "008feb54",
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
    "ordinal": 36,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "008feba0",
      "incomplete_value": true,
      "site": "008feba8",
      "value": [
        "LOAD",
        "8",
        [
          [
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
      "definition_site": "008feb4c",
      "incomplete_value": true,
      "site": "008feb54",
      "value": [
        "LOAD",
        "8",
        [
          [
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
    "ordinal": 36,
    "slot": 2
  },
  {
    "confidence": "bounded",
    "kind": "store_destination",
    "new": {
      "definition_site": "008febac",
      "incomplete_value": false,
      "site": "008febac",
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
      "definition_site": "008feb58",
      "incomplete_value": false,
      "site": "008feb58",
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
    "ordinal": 37,
    "slot": 1
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "008feba0",
      "READ",
      [
        "storage",
        "00ca4978",
        null,
        "undefined8"
      ]
    ],
    [
      "008feba4",
      "READ",
      [
        "storage",
        "00ca4968",
        null,
        "undefined8"
      ]
    ],
    [
      "008feba8",
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
      "008feba0",
      "READ",
      [
        "storage",
        "00ca4a78",
        null,
        "undefined8"
      ]
    ],
    [
      "008feba4",
      "READ",
      [
        "storage",
        "00ca4a68",
        null,
        "undefined8"
      ]
    ],
    [
      "008feba8",
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
- 008feb50 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:968:8"]]
- 008feb50 ["LOAD", "register:4050:8", ["const:1b1:8", "tmp:0:8"]]
+ 008feba4 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:a68:8"]]
+ 008feba4 ["LOAD", "register:4050:8", ["const:1b1:8", "tmp:0:8"]]
- 008feb54 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:968:8"]]
- 008feb54 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4048:8"]]
+ 008feba8 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:a68:8"]]
+ 008feba8 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4048:8"]]
- 008feb58 ["INT_ADD", "tmp:0:8", ["register:40b0:8", "const:978:8"]]
- 008feb58 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4050:8"]]
+ 008febac ["INT_ADD", "tmp:0:8", ["register:40b0:8", "const:a78:8"]]
+ 008febac ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4050:8"]]
~~~


<a id="compare-d22818d7d4f57a1e8da5b67c47aeccb3"></a>

### [`008fed30`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008fe/008fed30.md) → [`008fed84`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008fe/008fed84.md) FUN_008fed84

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00856e2c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00856/00856e2c.md) · 呼出先 10件 [`00447ef4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00447/00447ef4.md) [`0044cdb4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0044c/0044cdb4.md) [`0044cfc0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0044c/0044cfc0.md) [`0048ccf8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0048c/0048ccf8.md) [`0048eef0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0048e/0048eef0.md)
- 新版 呼出元 1件 [`00856e84`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00856/00856e84.md) · 呼出先 10件 [`00447f34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00447/00447f34.md) [`0044cdf4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0044c/0044cdf4.md) [`0044d000`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0044d/0044d000.md) [`0048cd38`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048c/0048cd38.md) [`0048ef30`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048e/0048ef30.md)

変更の種類 call, call_target, constant, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, store_value, unresolved_store_alignment

命令の説明率　旧版 93.55% / 新版 93.55%

優先判定に残った影響 `call_target` 2件, `store_value` 1件, `unresolved_store_alignment` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "008fef34",
      "incomplete_value": true,
      "site": "008fef34",
      "value": [
        "LOAD",
        "8",
        [
          [
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
      "definition_site": "008feee0",
      "incomplete_value": true,
      "site": "008feee0",
      "value": [
        "LOAD",
        "8",
        [
          [
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
    "ordinal": 23,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "call_target",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "008fee14",
      "value": [
        "leaf",
        "ram:48cd38:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "008fedc0",
      "value": [
        "leaf",
        "ram:48ccf8:8"
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
      "site": "008feed8",
      "value": [
        "leaf",
        "ram:48cd38:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "008fee84",
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
      "008feddc",
      "DATA",
      [
        "storage",
        "0039b1bc",
        null,
        "uleb128"
      ]
    ],
    [
      "008fede8",
      "DATA",
      [
        "storage",
        "0039b1bc",
        null,
        "uleb128"
      ]
    ],
    [
      "008fee14",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0048ccf8"
      ]
    ]
  ],
  "added": [
    [
      "008feddc",
      "DATA",
      [
        "storage",
        "0039b1bc",
        null,
        "qword"
      ]
    ],
    [
      "008fede8",
      "DATA",
      [
        "storage",
        "0039b1bc",
        null,
        "qword"
      ]
    ],
    [
      "008fee14",
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
- 008fedc0 ["INT_ADD", "register:40f0:8", ["const:8fedc0:8", "const:4:8"]]
- 008fedc0 ["CALL", null, ["ram:48ccf8:8"]]
+ 008fee14 ["INT_ADD", "register:40f0:8", ["const:8fee14:8", "const:4:8"]]
+ 008fee14 ["CALL", null, ["ram:48cd38:8"]]
- 008fee84 ["INT_ADD", "register:40f0:8", ["const:8fee84:8", "const:4:8"]]
- 008fee84 ["CALL", null, ["ram:48ccf8:8"]]
+ 008feed8 ["INT_ADD", "register:40f0:8", ["const:8feed8:8", "const:4:8"]]
+ 008feed8 ["CALL", null, ["ram:48cd38:8"]]
- 008fed9c ["INT_ADD", "register:40f0:8", ["const:8fed9c:8", "const:4:8"]]
- 008fed9c ["CALL", null, ["callee:00851550:8"]]
+ 008fedf0 ["INT_ADD", "register:40f0:8", ["const:8fedf0:8", "const:4:8"]]
+ 008fedf0 ["CALL", null, ["callee:00851550:8"]]
~~~


<a id="compare-3fede64df22e53b087555ceb2823db4a"></a>

### [`008ff040`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008ff/008ff040.md) → [`008ff094`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008ff/008ff094.md) FUN_008ff094

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`00859b58`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00859/00859b58.md) · 呼出先 15件 [`00467860`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00467/00467860.md) [`00467b2c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00467/00467b2c.md) [`00467f54`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00467/00467f54.md) [`00469c04`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00469/00469c04.md) [`0046c9c4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0046c/0046c9c4.md)
- 新版 呼出元 1件 [`00859bb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00859/00859bb0.md) · 呼出先 15件 [`004678a0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00467/004678a0.md) [`00467b6c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00467/00467b6c.md) [`00467f94`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00467/00467f94.md) [`00469c44`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00469/00469c44.md) [`0046ca04`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046c/0046ca04.md)

変更の種類 branch_value, call_argument_candidate, comparison, comparison_count, constant, local_def_use, operands_and_dependencies, operation_sequence

命令の説明率　旧版 98.18% / 新版 98.18%

優先判定に残った影響 `call_argument_candidate` 6件

アドレスに依存する影響 `branch_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "branch_value",
    "new": {
      "definition_site": "008ff0b4",
      "incomplete_value": true,
      "site": "008ff0b4",
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
      "definition_site": "008ff060",
      "incomplete_value": true,
      "site": "008ff060",
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
    "new": null,
    "old": {
      "definition_site": "008ff080",
      "incomplete_value": false,
      "site": "008ff084",
      "value": [
        "leaf",
        "const:0:8"
      ]
    },
    "ordinal": 0,
    "slot": 4
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "008ff100",
      "incomplete_value": true,
      "site": "008ff104",
      "value": [
        "live",
        "register:40a0:8"
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
      "008ff0b0",
      "READ",
      [
        "storage",
        "00ca4978",
        null,
        "undefined8"
      ]
    ],
    [
      "008ff0c4",
      "PARAM",
      [
        "storage",
        "00c65e58",
        null,
        "pointer __((offset(0x10)))"
      ]
    ],
    [
      "unmatched:008ff078",
      "PARAM",
      [
        "storage",
        "00c85b08",
        null,
        "pointer __((offset(0x10)))"
      ]
    ]
  ],
  "added": [
    [
      "008ff0b0",
      "READ",
      [
        "storage",
        "00ca4a78",
        null,
        "undefined8"
      ]
    ],
    [
      "008ff0c4",
      "PARAM",
      [
        "storage",
        "00c65f28",
        null,
        "pointer __((offset(0x10)))"
      ]
    ],
    [
      "008ff0cc",
      "PARAM",
      [
        "storage",
        "00c85bd8",
        null,
        "pointer __((offset(0x10)))"
      ]
    ]
  ]
}
~~~


~~~diff
- 008ff084 ["INT_ADD", "register:40f0:8", ["const:8ff084:8", "const:4:8"]]
- 008ff084 ["CALL", null, ["callee:00c586e0:8"]]
+ 008ff0d8 ["INT_ADD", "register:40f0:8", ["const:8ff0d8:8", "const:4:8"]]
+ 008ff0d8 ["CALL", null, ["callee:00c586e0:8"]]
- 008ff0b0 ["INT_ADD", "register:40f0:8", ["const:8ff0b0:8", "const:4:8"]]
- 008ff0b0 ["CALL", null, ["callee:0046cac4:8"]]
+ 008ff104 ["INT_ADD", "register:40f0:8", ["const:8ff104:8", "const:4:8"]]
+ 008ff104 ["CALL", null, ["callee:0046cac4:8"]]
- 008ff0d0 ["INT_ADD", "register:40f0:8", ["const:8ff0d0:8", "const:4:8"]]
- 008ff0d0 ["CALL", null, ["callee:00469c44:8"]]
+ 008ff124 ["INT_ADD", "register:40f0:8", ["const:8ff124:8", "const:4:8"]]
+ 008ff124 ["CALL", null, ["callee:00469c44:8"]]
~~~


<a id="compare-026e2a946d71c1b44a45f107fe64bd6f"></a>

### [`008ff1fc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008ff/008ff1fc.md) → [`008ff250`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008ff/008ff250.md) FUN_008ff250

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
      "definition_site": "008ff274",
      "incomplete_value": false,
      "site": "008ff274",
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
            "const:c00:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008ff220",
      "incomplete_value": false,
      "site": "008ff220",
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
      "008ff274",
      "DATA",
      [
        "storage",
        "00c85b30",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "008ff274",
      "DATA",
      [
        "storage",
        "00c85c00",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 008ff210 ["INT_ADD", "register:40f0:8", ["const:8ff210:8", "const:4:8"]]
- 008ff210 ["CALL", null, ["callee:00c57f60:8"]]
+ 008ff264 ["INT_ADD", "register:40f0:8", ["const:8ff264:8", "const:4:8"]]
+ 008ff264 ["CALL", null, ["callee:00c57f60:8"]]
- 008ff21c ["COPY", "tmp:0:8", ["const:b30:8"]]
- 008ff21c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 008ff21c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 008ff21c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 008ff270 ["COPY", "tmp:0:8", ["const:c00:8"]]
+ 008ff270 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 008ff270 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 008ff270 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-1ef0f9207ba0a0119bf2c82d1496330f"></a>

### [`008ff230`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008ff/008ff230.md) → [`008ff284`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008ff/008ff284.md) FUN_008ff284

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
      "definition_site": "008ff290",
      "incomplete_value": false,
      "site": "008ff290",
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
            "const:c00:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008ff23c",
      "incomplete_value": false,
      "site": "008ff23c",
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
      "008ff290",
      "DATA",
      [
        "storage",
        "00c85b30",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "008ff290",
      "DATA",
      [
        "storage",
        "00c85c00",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 008ff238 ["COPY", "tmp:0:8", ["const:b30:8"]]
- 008ff238 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 008ff238 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 008ff238 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 008ff28c ["COPY", "tmp:0:8", ["const:c00:8"]]
+ 008ff28c ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 008ff28c ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 008ff28c ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
~~~


<a id="compare-6a470392746bc95264087d909107b8f4"></a>

### [`008ff24c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008ff/008ff24c.md) → [`008ff2a0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008ff/008ff2a0.md) FUN_008ff2a0

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 3件 [`0047acf4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047a/0047acf4.md) [`0047cdd4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047c/0047cdd4.md) [`008b9178`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008b9/008b9178.md)
- 新版 呼出元 0件  · 呼出先 3件 [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md) [`0047ce14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047ce14.md) [`008b91d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b9/008b91d0.md)

変更の種類 call, call_target, constant, operands_and_dependencies

命令の説明率　旧版 95.00% / 新版 95.00%

優先判定に残った影響 `call_target` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_target",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "008ff2c4",
      "value": [
        "leaf",
        "ram:47ad34:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "008ff270",
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
      "008ff2c4",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047acf4"
      ]
    ]
  ],
  "added": [
    [
      "008ff2c4",
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
- 008ff270 ["INT_ADD", "register:40f0:8", ["const:8ff270:8", "const:4:8"]]
- 008ff270 ["CALL", null, ["ram:47acf4:8"]]
+ 008ff2c4 ["INT_ADD", "register:40f0:8", ["const:8ff2c4:8", "const:4:8"]]
+ 008ff2c4 ["CALL", null, ["ram:47ad34:8"]]
- 008ff27c ["INT_ADD", "register:40f0:8", ["const:8ff27c:8", "const:4:8"]]
- 008ff27c ["CALL", null, ["callee:0047ce14:8"]]
+ 008ff2d0 ["INT_ADD", "register:40f0:8", ["const:8ff2d0:8", "const:4:8"]]
+ 008ff2d0 ["CALL", null, ["callee:0047ce14:8"]]
~~~


<a id="compare-1d83258f9e65855c59fc411e62bb422f"></a>

### [`008ff2c4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008ff/008ff2c4.md) → [`008ff318`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008ff/008ff318.md) FUN_008ff318

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 2件 [`005c179c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005c1/005c179c.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md)
- 新版 呼出元 0件  · 呼出先 2件 [`005c17dc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005c1/005c17dc.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 90.48% / 新版 90.48%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "008ff334",
      "incomplete_value": false,
      "site": "008ff334",
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
            "const:c80:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008ff2e0",
      "incomplete_value": false,
      "site": "008ff2e0",
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
      "008ff334",
      "DATA",
      [
        "storage",
        "00c85bb0",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "008ff334",
      "DATA",
      [
        "storage",
        "00c85c80",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 008ff2d8 ["COPY", "tmp:0:8", ["const:bb0:8"]]
- 008ff2d8 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 008ff2d8 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 008ff2d8 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 008ff32c ["COPY", "tmp:0:8", ["const:c80:8"]]
+ 008ff32c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 008ff32c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 008ff32c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 008ff2e4 ["INT_ADD", "register:40f0:8", ["const:8ff2e4:8", "const:4:8"]]
- 008ff2e4 ["CALL", null, ["callee:005c17dc:8"]]
+ 008ff338 ["INT_ADD", "register:40f0:8", ["const:8ff338:8", "const:4:8"]]
+ 008ff338 ["CALL", null, ["callee:005c17dc:8"]]
- 008ff2f0 ["INT_ADD", "register:40f0:8", ["const:8ff2f0:8", "const:4:8"]]
- 008ff2f0 ["CALL", null, ["callee:005c17dc:8"]]
+ 008ff344 ["INT_ADD", "register:40f0:8", ["const:8ff344:8", "const:4:8"]]
+ 008ff344 ["CALL", null, ["callee:005c17dc:8"]]
~~~


<a id="compare-d48cff0aaaee359e0d8afff095a4ac9d"></a>

### [`008ff318`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008ff/008ff318.md) → [`008ff36c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008ff/008ff36c.md) FUN_008ff36c

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 2件 [`005c179c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005c1/005c179c.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md)
- 新版 呼出元 0件  · 呼出先 2件 [`005c17dc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005c1/005c17dc.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)

変更の種類 comparison, comparison_count, constant, local_def_use, operands_and_dependencies, operation_sequence, store_value

命令の説明率　旧版 90.00% / 新版 90.00%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "008ff388",
      "incomplete_value": true,
      "site": "008ff388",
      "value": [
        "live",
        "register:4040:8"
      ]
    },
    "old": {
      "definition_site": "008ff334",
      "incomplete_value": true,
      "site": "008ff334",
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
      "008ff388",
      "DATA",
      [
        "storage",
        "00c85bb0",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "008ff388",
      "DATA",
      [
        "storage",
        "00c85c80",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 008ff32c ["COPY", "tmp:0:8", ["const:bb0:8"]]
- 008ff32c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 008ff32c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 008ff32c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 008ff338 ["INT_ADD", "register:40f0:8", ["const:8ff338:8", "const:4:8"]]
- 008ff338 ["CALL", null, ["callee:005c17dc:8"]]
+ 008ff38c ["INT_ADD", "register:40f0:8", ["const:8ff38c:8", "const:4:8"]]
+ 008ff38c ["CALL", null, ["callee:005c17dc:8"]]
- 008ff344 ["INT_ADD", "register:40f0:8", ["const:8ff344:8", "const:4:8"]]
- 008ff344 ["CALL", null, ["callee:005c17dc:8"]]
+ 008ff398 ["INT_ADD", "register:40f0:8", ["const:8ff398:8", "const:4:8"]]
+ 008ff398 ["CALL", null, ["callee:005c17dc:8"]]
~~~


<a id="compare-0d59489127f4fb671779d1290142a233"></a>

### [`008ff368`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008ff/008ff368.md) → [`008ff3bc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008ff/008ff3bc.md) FUN_008ff3bc

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 2件 [`008ff67c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008ff/008ff67c.md) [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md)
- 新版 呼出元 0件  · 呼出先 2件 [`008ff6d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008ff/008ff6d0.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 87.50% / 新版 87.50%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "008ff3e0",
      "incomplete_value": false,
      "site": "008ff3e0",
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
            "const:c80:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008ff38c",
      "incomplete_value": false,
      "site": "008ff38c",
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
            "const:bb0:8"
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
      "008ff3e0",
      "DATA",
      [
        "storage",
        "00c85bb0",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "008ff3e0",
      "DATA",
      [
        "storage",
        "00c85c80",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 008ff37c ["INT_ADD", "register:40f0:8", ["const:8ff37c:8", "const:4:8"]]
- 008ff37c ["CALL", null, ["callee:00c57f60:8"]]
+ 008ff3d0 ["INT_ADD", "register:40f0:8", ["const:8ff3d0:8", "const:4:8"]]
+ 008ff3d0 ["CALL", null, ["callee:00c57f60:8"]]
- 008ff388 ["COPY", "tmp:0:8", ["const:bb0:8"]]
- 008ff388 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 008ff388 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 008ff388 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 008ff3dc ["COPY", "tmp:0:8", ["const:c80:8"]]
+ 008ff3dc ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 008ff3dc ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 008ff3dc ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 008ff394 ["INT_ADD", "register:40f0:8", ["const:8ff394:8", "const:4:8"]]
- 008ff394 ["CALL", null, ["callee:008ff6d0:8"]]
+ 008ff3e8 ["INT_ADD", "register:40f0:8", ["const:8ff3e8:8", "const:4:8"]]
+ 008ff3e8 ["CALL", null, ["callee:008ff6d0:8"]]
~~~


<a id="compare-3e9e9d8771415637705816151b6a4e45"></a>

### [`008ff3bc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008ff/008ff3bc.md) → [`008ff410`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008ff/008ff410.md) FUN_008ff410

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 1件 [`008ff67c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008ff/008ff67c.md)
- 新版 呼出元 0件  · 呼出先 1件 [`008ff6d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008ff/008ff6d0.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 71.43% / 新版 71.43%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "008ff41c",
      "incomplete_value": false,
      "site": "008ff41c",
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
            "const:c80:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008ff3c8",
      "incomplete_value": false,
      "site": "008ff3c8",
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
      "008ff41c",
      "DATA",
      [
        "storage",
        "00c85bb0",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "008ff41c",
      "DATA",
      [
        "storage",
        "00c85c80",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 008ff3c4 ["COPY", "tmp:0:8", ["const:bb0:8"]]
- 008ff3c4 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 008ff3c4 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 008ff3c4 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 008ff418 ["COPY", "tmp:0:8", ["const:c80:8"]]
+ 008ff418 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 008ff418 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 008ff418 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
~~~


<a id="compare-5d260974ec9c9362a1156313842c67ba"></a>

### [`008ff424`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008ff/008ff424.md) → [`008ff478`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008ff/008ff478.md) FUN_008ff478

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `equal` · `cfg_change`

- 旧版 呼出元 1件 [`008fd500`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008fd/008fd500.md) · 呼出先 2件 [`005c179c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005c1/005c179c.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md)
- 新版 呼出元 1件 [`008fd554`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008fd/008fd554.md) · 呼出先 2件 [`005c17dc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005c1/005c17dc.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, constant, control_flow, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "008ff4a8",
      "incomplete_value": true,
      "site": "008ff4ac",
      "value": [
        "LOAD",
        "8",
        [
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
                "const:20:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": null,
    "ordinal": 2,
    "slot": 1
  }
]
~~~


~~~diff
- 008ff458 ["INT_ADD", "register:40f0:8", ["const:8ff458:8", "const:4:8"]]
- 008ff458 ["CALL", null, ["callee:00c57f80:8"]]
+ 008ff4ac ["INT_ADD", "register:40f0:8", ["const:8ff4ac:8", "const:4:8"]]
+ 008ff4ac ["CALL", null, ["callee:00c57f80:8"]]
- 008ff43c ["INT_ADD", "register:40f0:8", ["const:8ff43c:8", "const:4:8"]]
- 008ff43c ["CALL", null, ["callee:005c17dc:8"]]
+ 008ff490 ["INT_ADD", "register:40f0:8", ["const:8ff490:8", "const:4:8"]]
+ 008ff490 ["CALL", null, ["callee:005c17dc:8"]]
- 008ff448 ["INT_ADD", "register:40f0:8", ["const:8ff448:8", "const:4:8"]]
- 008ff448 ["CALL", null, ["callee:005c17dc:8"]]
+ 008ff49c ["INT_ADD", "register:40f0:8", ["const:8ff49c:8", "const:4:8"]]
+ 008ff49c ["CALL", null, ["callee:005c17dc:8"]]
~~~


<a id="compare-170a10a423f27488a634e12ee08f072c"></a>

### [`008ff46c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008ff/008ff46c.md) → [`008ff4c0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008ff/008ff4c0.md) FUN_008ff4c0

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 10件 [`0043bba4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043bba4.md) [`0047acf4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047a/0047acf4.md) [`0047cdd4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047c/0047cdd4.md) [`0071c460`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0071c/0071c460.md) [`008514f8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00851/008514f8.md)
- 新版 呼出元 0件  · 呼出先 10件 [`0043bbe4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bbe4.md) [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md) [`0047ce14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047ce14.md) [`0071c4b8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0071c/0071c4b8.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)

変更の種類 branch_value, call, call_target, comparison, comparison_count, constant, local_def_use, operands_and_dependencies, operation_sequence

命令の説明率　旧版 96.72% / 新版 96.72%

優先判定に残った影響 `branch_value` 1件, `call_target` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "branch_value",
    "new": {
      "definition_site": "008ff53c",
      "incomplete_value": true,
      "site": "008ff53c",
      "value": [
        "BOOL_NEGATE",
        "1",
        [
          [
            "live",
            "register:101:1"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008ff4e8",
      "incomplete_value": true,
      "site": "008ff4e8",
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
    "ordinal": 2,
    "slot": 0
  },
  {
    "confidence": "limited",
    "kind": "call_target",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "008ff4ec",
      "value": [
        "leaf",
        "ram:47ad34:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "008ff498",
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
      "008ff4ec",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047acf4"
      ]
    ]
  ],
  "added": [
    [
      "008ff4ec",
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
- 008ff498 ["INT_ADD", "register:40f0:8", ["const:8ff498:8", "const:4:8"]]
- 008ff498 ["CALL", null, ["ram:47acf4:8"]]
+ 008ff4ec ["INT_ADD", "register:40f0:8", ["const:8ff4ec:8", "const:4:8"]]
+ 008ff4ec ["CALL", null, ["ram:47ad34:8"]]
- 008ff4ec ["INT_ADD", "register:40f0:8", ["const:8ff4ec:8", "const:4:8"]]
- 008ff4ec ["CALL", null, ["callee:00851550:8"]]
+ 008ff540 ["INT_ADD", "register:40f0:8", ["const:8ff540:8", "const:4:8"]]
+ 008ff540 ["CALL", null, ["callee:00851550:8"]]
- 008ff47c ["COPY", "register:40e8:8", ["register:8:8"]]
~~~


<a id="compare-31cba2d049da5e0fa015709e1a62699b"></a>

### [`008ff774`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008ff/008ff774.md) → [`008ff7c8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008ff/008ff7c8.md) FUN_008ff7c8

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
      "definition_site": "008ff7ec",
      "incomplete_value": false,
      "site": "008ff7ec",
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
            "const:d00:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008ff798",
      "incomplete_value": false,
      "site": "008ff798",
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
      "008ff7ec",
      "DATA",
      [
        "storage",
        "00c85c30",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "008ff7ec",
      "DATA",
      [
        "storage",
        "00c85d00",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 008ff788 ["INT_ADD", "register:40f0:8", ["const:8ff788:8", "const:4:8"]]
- 008ff788 ["CALL", null, ["callee:00c57f60:8"]]
+ 008ff7dc ["INT_ADD", "register:40f0:8", ["const:8ff7dc:8", "const:4:8"]]
+ 008ff7dc ["CALL", null, ["callee:00c57f60:8"]]
- 008ff794 ["COPY", "tmp:0:8", ["const:c30:8"]]
- 008ff794 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 008ff794 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 008ff794 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 008ff7e8 ["COPY", "tmp:0:8", ["const:d00:8"]]
+ 008ff7e8 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 008ff7e8 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 008ff7e8 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-468fe1e9cbc55c74d716b1a642907d95"></a>

### [`008ff7a8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008ff/008ff7a8.md) → [`008ff7fc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008ff/008ff7fc.md) FUN_008ff7fc

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
      "definition_site": "008ff808",
      "incomplete_value": false,
      "site": "008ff808",
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
            "const:d00:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008ff7b4",
      "incomplete_value": false,
      "site": "008ff7b4",
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
      "008ff808",
      "DATA",
      [
        "storage",
        "00c85c30",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "008ff808",
      "DATA",
      [
        "storage",
        "00c85d00",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 008ff7b0 ["COPY", "tmp:0:8", ["const:c30:8"]]
- 008ff7b0 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 008ff7b0 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 008ff7b0 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 008ff804 ["COPY", "tmp:0:8", ["const:d00:8"]]
+ 008ff804 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 008ff804 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 008ff804 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
~~~


<a id="compare-385e0ea4e7c1b56e378b7046b6e74cd8"></a>

### [`008ff7c4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008ff/008ff7c4.md) → [`008ff818`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008ff/008ff818.md) FUN_008ff818

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 4件 [`007562a4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00756/007562a4.md) [`008514f8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00851/008514f8.md) [`0085bb70`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0085b/0085bb70.md) [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md)
- 新版 呼出元 0件  · 呼出先 4件 [`007562fc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00756/007562fc.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md) [`0085bbc8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0085b/0085bbc8.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)

変更の種類 branch_condition_or_target, call, call_count, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 68.63% / 新版 68.63%

優先判定に残った影響 `unresolved_branch_alignment` 1件, `unresolved_call_alignment` 2件, `unresolved_store_alignment` 8件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:008ff7c4",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "unmatched:008ff7c8",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "unmatched:008ff7cc",
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
      "008ff818",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "008ff81c",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "008ff820",
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
- 008ff7c4 ["COPY", "tmp:0:8", ["register:40e8:8"]]
- 008ff7c4 ["COPY", "tmp:1:8", ["register:40f0:8"]]
- 008ff7c4 ["INT_ADD", "register:8:8", ["register:8:8", "const:ffffffffffffffd0:8"]]
- 008ff7c4 ["STORE", null, ["const:1b1:8", "register:8:8", "tmp:0:8"]]
- 008ff7c8 ["INT_ADD", "tmp:0:8", ["register:8:8", "const:10:8"]]
- 008ff7c8 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:40a8:8"]]
- 008ff7cc ["COPY", "tmp:0:8", ["register:40a0:8"]]
- 008ff7cc ["COPY", "tmp:1:8", ["register:4098:8"]]
- 008ff7cc ["INT_ADD", "tmp:2:8", ["register:8:8", "const:20:8"]]
- 008ff7cc ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
~~~


<a id="compare-471569fef3cafecffe029e2b12627d7a"></a>

### [`008ff8cc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008ff/008ff8cc.md) → [`008ff920`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008ff/008ff920.md) FUN_008ff920

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 1件 [`008fe9e4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008fe/008fe9e4.md) · 呼出先 29件 [`0043b764`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043b764.md) [`0043bb20`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043bb20.md) [`004476f4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00447/004476f4.md) [`00447ef4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00447/00447ef4.md) [`0046e7c4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0046e/0046e7c4.md)
- 新版 呼出元 1件 [`008fea38`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008fe/008fea38.md) · 呼出先 29件 [`0043b7a4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b7a4.md) [`0043bb60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bb60.md) [`00447734`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00447/00447734.md) [`00447f34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00447/00447f34.md) [`0046e804`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046e/0046e804.md)

変更の種類 branch_condition_or_target, branch_value, call, call_argument_candidate, call_count, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, store_destination, store_value, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 55.42% / 新版 55.42%

優先判定に残った影響 `branch_value` 1件, `call_argument_candidate` 9件, `store_destination` 1件, `store_value` 5件, `unresolved_branch_alignment` 81件, `unresolved_call_alignment` 73件, `unresolved_store_alignment` 112件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "008ffd34",
      "incomplete_value": true,
      "site": "008ffd34",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:76:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "009000a4",
      "incomplete_value": true,
      "site": "009000a4",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:f31:8"
              ]
            ]
          ]
        ]
      ]
    },
    "ordinal": 94,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "008ffd4c",
      "incomplete_value": true,
      "site": "008ffd4c",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:e9a:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "009000bc",
      "incomplete_value": true,
      "site": "009000bc",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:7e8:8"
              ]
            ]
          ]
        ]
      ]
    },
    "ordinal": 96,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "008ffd50",
      "incomplete_value": true,
      "site": "008ffd50",
      "value": [
        "LOAD",
        "8",
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
      "definition_site": "009000c0",
      "incomplete_value": true,
      "site": "009000c0",
      "value": [
        "LOAD",
        "8",
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
    "ordinal": 97,
    "slot": 2
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:008ff910",
      "DATA",
      [
        "storage",
        "00c85cb0",
        null,
        "pointer"
      ]
    ],
    [
      "unmatched:008ff950",
      "READ",
      [
        "storage",
        "00ca4f38",
        null,
        "undefined1"
      ]
    ],
    [
      "unmatched:008ff954",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00900c2c"
      ]
    ]
  ],
  "added": [
    [
      "008ff964",
      "DATA",
      [
        "storage",
        "00c85d80",
        null,
        "pointer"
      ]
    ],
    [
      "008ff9a4",
      "READ",
      [
        "storage",
        "00ca5038",
        null,
        "undefined1"
      ]
    ],
    [
      "008ff9a8",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00900c2c"
      ]
    ]
  ]
}
~~~


~~~diff
- 008ff9c0 ["INT_ADD", "register:40f0:8", ["const:8ff9c0:8", "const:4:8"]]
- 008ff9c0 ["CALL", null, ["callee:0047e64c:8"]]
+ 008ffa14 ["INT_ADD", "register:40f0:8", ["const:8ffa14:8", "const:4:8"]]
+ 008ffa14 ["CALL", null, ["callee:0047e64c:8"]]
+ 008ff9c0 ["COPY", "tmp:0:8", ["const:3ce:8"]]
+ 008ff9c0 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 008ff9c0 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 008ff9c0 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 008ffa14 ["INT_RIGHT", "tmp:0:4", ["register:4040:4", "const:0:4"]]
- 008ffa14 ["INT_AND", "tmp:1:4", ["tmp:0:4", "const:1:4"]]
- 008ffa14 ["INT_EQUAL", "tmp:2:1", ["tmp:1:4", "const:0:4"]]
- 008ffa14 ["INT_EQUAL", "tmp:3:1", ["tmp:2:1", "const:0:1"]]
~~~


<a id="compare-a25691c7f23af80320a46abb2c3be2d4"></a>

### [`0090118c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00901/0090118c.md) → [`009011e0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00901/009011e0.md) FUN_009011e0

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`009012b4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00901/009012b4.md) · 呼出先 6件 [`0046e8a4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0046e/0046e8a4.md) [`0046efdc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0046e/0046efdc.md) [`00682324`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00682/00682324.md) [`00c53d00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c53/00c53d00.md) [`00c57e80`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e80.md)
- 新版 呼出元 1件 [`00901308`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00901/00901308.md) · 呼出先 6件 [`0046e8e4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046e/0046e8e4.md) [`0046f01c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046f/0046f01c.md) [`00682364`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00682/00682364.md) [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 94.59% / 新版 94.59%

優先判定に残った影響 `store_value` 2件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "009011fc",
      "incomplete_value": false,
      "site": "00901200",
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
            "const:d80:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "009011a8",
      "incomplete_value": false,
      "site": "009011ac",
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
            "const:cb0:8"
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
      "definition_site": "009012c0",
      "incomplete_value": false,
      "site": "009012c4",
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
      "definition_site": "0090126c",
      "incomplete_value": false,
      "site": "00901270",
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
      "00901200",
      "DATA",
      [
        "storage",
        "00c85cb0",
        null,
        "pointer"
      ]
    ],
    [
      "009012c4",
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
      "00901200",
      "DATA",
      [
        "storage",
        "00c85d80",
        null,
        "pointer"
      ]
    ],
    [
      "009012c4",
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
- 009011a8 ["COPY", "tmp:0:8", ["const:cb0:8"]]
- 009011a8 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 009011a8 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 009011a8 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 009011fc ["COPY", "tmp:0:8", ["const:d80:8"]]
+ 009011fc ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 009011fc ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 009011fc ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 009011cc ["INT_ADD", "register:40f0:8", ["const:9011cc:8", "const:4:8"]]
- 009011cc ["CALL", null, ["callee:0046e8e4:8"]]
+ 00901220 ["INT_ADD", "register:40f0:8", ["const:901220:8", "const:4:8"]]
+ 00901220 ["CALL", null, ["callee:0046e8e4:8"]]
- 009011e0 ["INT_ADD", "register:40f0:8", ["const:9011e0:8", "const:4:8"]]
- 009011e0 ["CALL", null, ["callee:00c57f80:8"]]
+ 00901234 ["INT_ADD", "register:40f0:8", ["const:901234:8", "const:4:8"]]
+ 00901234 ["CALL", null, ["callee:00c57f80:8"]]
~~~


<a id="compare-d120d61d3c804b52d9e0c5763751a7b5"></a>

### [`00901500`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00901/00901500.md) → [`00901554`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00901/00901554.md) FUN_00901554

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
      "definition_site": "00901568",
      "incomplete_value": false,
      "site": "0090156c",
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
            "const:da0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00901514",
      "incomplete_value": false,
      "site": "00901518",
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
            "const:cd0:8"
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
      "0090156c",
      "DATA",
      [
        "storage",
        "00c85cd0",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "0090156c",
      "DATA",
      [
        "storage",
        "00c85da0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 0090150c ["INT_ADD", "register:40f0:8", ["const:90150c:8", "const:4:8"]]
- 0090150c ["CALL", null, ["callee:00c57f60:8"]]
+ 00901560 ["INT_ADD", "register:40f0:8", ["const:901560:8", "const:4:8"]]
+ 00901560 ["CALL", null, ["callee:00c57f60:8"]]
- 00901514 ["COPY", "tmp:0:8", ["const:cd0:8"]]
- 00901514 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00901514 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00901514 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00901568 ["COPY", "tmp:0:8", ["const:da0:8"]]
+ 00901568 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00901568 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00901568 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-f043187a47e2bdc45d0d35ae2bcadb9e"></a>

### [`00901524`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00901/00901524.md) → [`00901578`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00901/00901578.md) FUN_00901578

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
      "definition_site": "0090157c",
      "incomplete_value": false,
      "site": "00901580",
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
            "const:da0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00901528",
      "incomplete_value": false,
      "site": "0090152c",
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
            "const:cd0:8"
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
      "00901580",
      "DATA",
      [
        "storage",
        "00c85cd0",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00901580",
      "DATA",
      [
        "storage",
        "00c85da0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00901528 ["COPY", "tmp:0:8", ["const:cd0:8"]]
- 00901528 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00901528 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00901528 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 0090157c ["COPY", "tmp:0:8", ["const:da0:8"]]
+ 0090157c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 0090157c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 0090157c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-6ac769a93f23c1244e256ff3175038df"></a>

### [`0090153c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00901/0090153c.md) → [`00901590`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00901/00901590.md) FUN_00901590

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 0件  · 呼出先 1件 [`008514f8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00851/008514f8.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)

変更の種類 constant, control_flow, control_flow_count, local_def_use, operands_and_dependencies, operation_sequence, unresolved_return_alignment

命令の説明率　旧版 88.89% / 新版 88.89%

アドレスに依存する影響 `unresolved_return_alignment` 1件

~~~diff
- 00901544 ["INT_ADD", "register:40f0:8", ["const:901544:8", "const:4:8"]]
- 00901544 ["CALL", null, ["callee:00851550:8"]]
+ 00901598 ["INT_ADD", "register:40f0:8", ["const:901598:8", "const:4:8"]]
+ 00901598 ["CALL", null, ["callee:00851550:8"]]
- 0090155c ["COPY", "register:0:8", ["register:40f0:8"]]
- 0090155c ["RETURN", null, ["register:0:8"]]
+ 009015b0 ["COPY", "register:0:8", ["register:40f0:8"]]
+ 009015b0 ["RETURN", null, ["register:0:8"]]
~~~


<a id="compare-a698d46d32c8e413ed5e94d391dd49bb"></a>

### [`0090158c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00901/0090158c.md) → [`009015e0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00901/009015e0.md) FUN_009015e0

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
      "definition_site": "00901604",
      "incomplete_value": false,
      "site": "00901604",
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
            "const:e20:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "009015b0",
      "incomplete_value": false,
      "site": "009015b0",
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
            "const:d50:8"
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
      "00901604",
      "DATA",
      [
        "storage",
        "00c85d50",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00901604",
      "DATA",
      [
        "storage",
        "00c85e20",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 009015a0 ["INT_ADD", "register:40f0:8", ["const:9015a0:8", "const:4:8"]]
- 009015a0 ["CALL", null, ["callee:00c57f60:8"]]
+ 009015f4 ["INT_ADD", "register:40f0:8", ["const:9015f4:8", "const:4:8"]]
+ 009015f4 ["CALL", null, ["callee:00c57f60:8"]]
- 009015ac ["COPY", "tmp:0:8", ["const:d50:8"]]
- 009015ac ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 009015ac ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 009015ac ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00901600 ["COPY", "tmp:0:8", ["const:e20:8"]]
+ 00901600 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00901600 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00901600 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-6f1ff4d9dd70082ffdb99a0212dc1c6e"></a>

### [`009015c0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00901/009015c0.md) → [`00901614`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00901/00901614.md) FUN_00901614

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
      "unmatched:009015cc",
      "DATA",
      [
        "storage",
        "00c85d50",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00901620",
      "DATA",
      [
        "storage",
        "00c85e20",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 009015c8 ["COPY", "tmp:0:8", ["const:d50:8"]]
- 009015c8 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 009015c8 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 009015c8 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
- 009015cc ["COPY", "tmp:0:8", ["register:4048:8"]]
- 009015cc ["COPY", "tmp:1:8", ["register:4040:8"]]
- 009015cc ["COPY", "tmp:2:8", ["register:4008:8"]]
- 009015cc ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
+ 0090161c ["COPY", "tmp:0:8", ["const:e20:8"]]
+ 0090161c ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 0090161c ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 0090161c ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
~~~


<a id="compare-abc65eea6833de99d8f54c76578bea99"></a>

### [`009015dc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00901/009015dc.md) → [`00901630`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00901/00901630.md) FUN_00901630

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 5件 [`00901744`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00901/00901744.md) [`00901748`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00901/00901748.md) [`00ac9594`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00ac9/00ac9594.md) [`00acabd4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00aca/00acabd4.md) [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md)
- 新版 呼出元 0件  · 呼出先 5件 [`00901798`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00901/00901798.md) [`0090179c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00901/0090179c.md) [`00ac9604`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00ac9/00ac9604.md) [`00acac44`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00aca/00acac44.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies, store_value

命令の説明率　旧版 95.24% / 新版 95.24%

優先判定に残った影響 `call_argument_candidate` 1件, `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "00901670",
      "incomplete_value": false,
      "site": "00901670",
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
            "const:e90:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0090161c",
      "incomplete_value": false,
      "site": "0090161c",
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
            "const:dc0:8"
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
      "definition_site": "0090165c",
      "incomplete_value": true,
      "site": "00901660",
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
            "INT_ZEXT",
            "8",
            [
              "INT_OR"
            ]
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
      "00901670",
      "DATA",
      [
        "storage",
        "00c85dc0",
        null,
        "undefined *"
      ]
    ],
    [
      "009016a8",
      "READ",
      [
        "storage",
        "00c85de0",
        null,
        "pointer"
      ]
    ],
    [
      "009016a8",
      "READ",
      [
        "storage",
        "00c85de8",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00901670",
      "DATA",
      [
        "storage",
        "00c85e90",
        null,
        "undefined *"
      ]
    ],
    [
      "009016a8",
      "READ",
      [
        "storage",
        "00c85eb0",
        null,
        "pointer"
      ]
    ],
    [
      "009016a8",
      "READ",
      [
        "storage",
        "00c85eb8",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 0090160c ["INT_ADD", "register:40f0:8", ["const:90160c:8", "const:4:8"]]
- 0090160c ["CALL", null, ["callee:00ac9604:8"]]
+ 00901660 ["INT_ADD", "register:40f0:8", ["const:901660:8", "const:4:8"]]
+ 00901660 ["CALL", null, ["callee:00ac9604:8"]]
- 00901614 ["COPY", "tmp:0:8", ["const:dc0:8"]]
- 00901614 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00901614 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00901614 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00901668 ["COPY", "tmp:0:8", ["const:e90:8"]]
+ 00901668 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00901668 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00901668 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 0090162c ["INT_ADD", "register:40f0:8", ["const:90162c:8", "const:4:8"]]
- 0090162c ["CALL", null, ["callee:00acac44:8"]]
+ 00901680 ["INT_ADD", "register:40f0:8", ["const:901680:8", "const:4:8"]]
+ 00901680 ["CALL", null, ["callee:00acac44:8"]]
~~~


<a id="compare-bae0662b40ff6e8a34fe23c959518ba0"></a>

### [`009016fc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00901/009016fc.md) → [`00901750`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00901/00901750.md) FUN_00901750

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
      "definition_site": "00901774",
      "incomplete_value": false,
      "site": "00901774",
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
            "const:e90:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00901720",
      "incomplete_value": false,
      "site": "00901720",
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
            "const:dc0:8"
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
      "00901774",
      "DATA",
      [
        "storage",
        "00c85dc0",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00901774",
      "DATA",
      [
        "storage",
        "00c85e90",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00901710 ["INT_ADD", "register:40f0:8", ["const:901710:8", "const:4:8"]]
- 00901710 ["CALL", null, ["callee:00c57f60:8"]]
+ 00901764 ["INT_ADD", "register:40f0:8", ["const:901764:8", "const:4:8"]]
+ 00901764 ["CALL", null, ["callee:00c57f60:8"]]
- 0090171c ["COPY", "tmp:0:8", ["const:dc0:8"]]
- 0090171c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 0090171c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 0090171c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00901770 ["COPY", "tmp:0:8", ["const:e90:8"]]
+ 00901770 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00901770 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00901770 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-027c787599f9862a9913a2e79e0c914e"></a>

### [`00901730`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00901/00901730.md) → [`00901784`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00901/00901784.md) FUN_00901784

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
      "definition_site": "00901790",
      "incomplete_value": false,
      "site": "00901790",
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
            "const:e90:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0090173c",
      "incomplete_value": false,
      "site": "0090173c",
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
            "const:dc0:8"
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
      "00901790",
      "DATA",
      [
        "storage",
        "00c85dc0",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00901790",
      "DATA",
      [
        "storage",
        "00c85e90",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00901738 ["COPY", "tmp:0:8", ["const:dc0:8"]]
- 00901738 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 00901738 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 00901738 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 0090178c ["COPY", "tmp:0:8", ["const:e90:8"]]
+ 0090178c ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 0090178c ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 0090178c ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
~~~


<a id="compare-7b18a41078f6bcc7dd51efdfc18f9282"></a>

### [`0090174c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00901/0090174c.md) → [`009017a0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00901/009017a0.md) FUN_009017a0

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 4件 [`007562a4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00756/007562a4.md) [`008514f8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00851/008514f8.md) [`0085bb70`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0085b/0085bb70.md) [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md)
- 新版 呼出元 0件  · 呼出先 4件 [`007562fc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00756/007562fc.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md) [`0085bbc8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0085b/0085bbc8.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)

変更の種類 branch_value, call, call_target, constant, operands_and_dependencies, store_destination, store_value

命令の説明率　旧版 82.61% / 新版 82.61%

優先判定に残った影響 `branch_value` 1件, `call_target` 1件, `store_destination` 3件, `store_value` 2件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_destination",
    "new": {
      "definition_site": "009017d4",
      "incomplete_value": false,
      "site": "009017d4",
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
      "definition_site": "00901780",
      "incomplete_value": false,
      "site": "00901780",
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
      "definition_site": "009017c8",
      "incomplete_value": true,
      "site": "009017d4",
      "value": [
        "LOAD",
        "8",
        [
          [
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
      "definition_site": "00901774",
      "incomplete_value": true,
      "site": "00901780",
      "value": [
        "LOAD",
        "8",
        [
          [
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
      "definition_site": "009017d8",
      "incomplete_value": false,
      "site": "009017d8",
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
      "definition_site": "00901784",
      "incomplete_value": false,
      "site": "00901784",
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
      "009017c8",
      "READ",
      [
        "storage",
        "00ca4978",
        null,
        "undefined8"
      ]
    ],
    [
      "009017cc",
      "READ",
      [
        "storage",
        "00ca4968",
        null,
        "undefined8"
      ]
    ],
    [
      "009017d4",
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
      "009017c8",
      "READ",
      [
        "storage",
        "00ca4a78",
        null,
        "undefined8"
      ]
    ],
    [
      "009017cc",
      "READ",
      [
        "storage",
        "00ca4a68",
        null,
        "undefined8"
      ]
    ],
    [
      "009017d4",
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
- 00901780 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:968:8"]]
- 00901780 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4048:8"]]
+ 009017d4 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:a68:8"]]
+ 009017d4 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4048:8"]]
- 00901784 ["INT_ADD", "tmp:0:8", ["register:40b0:8", "const:978:8"]]
- 00901784 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4050:8"]]
+ 009017d8 ["INT_ADD", "tmp:0:8", ["register:40b0:8", "const:a78:8"]]
+ 009017d8 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4050:8"]]
- 00901794 ["INT_ADD", "register:40f0:8", ["const:901794:8", "const:4:8"]]
- 00901794 ["CALL", null, ["ram:7562a4:8"]]
+ 009017e8 ["INT_ADD", "register:40f0:8", ["const:9017e8:8", "const:4:8"]]
+ 009017e8 ["CALL", null, ["ram:7562fc:8"]]
~~~


<a id="compare-2b7f50a2048e9d07f2026543d286d455"></a>

### [`00901840`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00901/00901840.md) → [`00901894`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00901/00901894.md) _INIT_177

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 5件 [`0043ae70`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043a/0043ae70.md) [`0043b7f8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043b7f8.md) [`00c57e30`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e30.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md)
- 新版 呼出元 0件  · 呼出先 5件 [`0043aeb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043a/0043aeb0.md) [`0043b838`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b838.md) [`00c57f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f00.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)

変更の種類 call_argument_candidate, comparison, comparison_count, constant, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, store_value, unresolved_store_alignment

命令の説明率　旧版 85.88% / 新版 85.88%

優先判定に残った影響 `call_argument_candidate` 8件, `store_value` 4件, `unresolved_store_alignment` 3件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "009018d0",
      "incomplete_value": true,
      "site": "009018ec",
      "value": [
        "LOAD",
        "16",
        [
          [
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
      "definition_site": "0090187c",
      "incomplete_value": true,
      "site": "00901898",
      "value": [
        "LOAD",
        "16",
        [
          [
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
      "definition_site": "009018f4",
      "incomplete_value": true,
      "site": "00901910",
      "value": [
        "LOAD",
        "16",
        [
          [
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
      "definition_site": "009018a0",
      "incomplete_value": true,
      "site": "009018bc",
      "value": [
        "LOAD",
        "16",
        [
          [
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
      "definition_site": "00901934",
      "incomplete_value": true,
      "site": "0090194c",
      "value": [
        "LOAD",
        "16",
        [
          [
            "leaf",
            "const:1b1:8"
          ],
          [
            "live",
            "register:4050:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "009018e0",
      "incomplete_value": true,
      "site": "009018f8",
      "value": [
        "LOAD",
        "16",
        [
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
      "unmatched:00901844",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "009018d0",
      "READ",
      [
        "storage",
        "002b7f26",
        null,
        "string"
      ]
    ],
    [
      "009018f4",
      "READ",
      [
        "storage",
        "002b7f39",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "00901898",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "009018d0",
      "READ",
      [
        "storage",
        "002b7f66",
        null,
        "string"
      ]
    ],
    [
      "009018f4",
      "READ",
      [
        "storage",
        "002b7f79",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
+ 00901898 ["COPY", "tmp:0:8", ["register:40e8:8"]]
+ 00901898 ["COPY", "tmp:1:8", ["register:40f0:8"]]
+ 00901898 ["INT_ADD", "tmp:2:8", ["register:8:8", "const:f0:8"]]
+ 00901898 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
- 009019b4 ["INT_ADD", "register:40f0:8", ["const:9019b4:8", "const:4:8"]]
- 009019b4 ["CALL", null, ["callee:0043b838:8"]]
+ 00901a08 ["INT_ADD", "register:40f0:8", ["const:901a08:8", "const:4:8"]]
+ 00901a08 ["CALL", null, ["callee:0043b838:8"]]
- 00901a04 ["INT_ADD", "register:40f0:8", ["const:901a04:8", "const:4:8"]]
- 00901a04 ["CALL", null, ["callee:0043b838:8"]]
+ 00901a58 ["INT_ADD", "register:40f0:8", ["const:901a58:8", "const:4:8"]]
+ 00901a58 ["CALL", null, ["callee:0043b838:8"]]
~~~


<a id="compare-657dbdd25992dd67b2f0e060b035810f"></a>

### [`00901bd0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00901/00901bd0.md) → [`00901c24`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00901/00901c24.md) FUN_00901c24

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 3件 [`007cceec`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007cc/007cceec.md) [`009e1278`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009e1/009e1278.md) [`00a47f00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a47/00a47f00.md) · 呼出先 16件 [`00487e20`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00487/00487e20.md) [`00488434`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00488/00488434.md) [`00488658`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00488/00488658.md) [`00596f2c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00596/00596f2c.md) [`00597608`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00597/00597608.md)
- 新版 呼出元 3件 [`007ccf44`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007cc/007ccf44.md) [`009e12cc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009e1/009e12cc.md) [`00a47f54`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a47/00a47f54.md) · 呼出先 16件 [`00487e60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00487/00487e60.md) [`00488474`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00488/00488474.md) [`00488698`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00488/00488698.md) [`00596f6c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00596/00596f6c.md) [`00597648`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00597/00597648.md)

変更の種類 comparison, comparison_count, constant, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, store_destination, store_value, unresolved_store_alignment

命令の説明率　旧版 87.84% / 新版 87.84%

優先判定に残った影響 `store_destination` 1件, `store_value` 3件, `unresolved_store_alignment` 8件

アドレスに依存する影響 `store_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00901dd4",
      "incomplete_value": true,
      "site": "00901dd8",
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
      "definition_site": "00901d80",
      "incomplete_value": true,
      "site": "00901d84",
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
      "definition_site": "00901dd0",
      "incomplete_value": true,
      "site": "00901ddc",
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
      "definition_site": "00901d7c",
      "incomplete_value": true,
      "site": "00901d88",
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
    "ordinal": 21,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_destination",
    "new": {
      "definition_site": "00901de8",
      "incomplete_value": true,
      "site": "00901de8",
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
      "definition_site": "00901d94",
      "incomplete_value": true,
      "site": "00901d94",
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
    "ordinal": 22,
    "slot": 1
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00901bd4",
      "WRITE",
      [
        "storage",
        "Stack[-0x40]",
        null,
        null
      ]
    ],
    [
      "unmatched:00901bd8",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "unmatched:00901bdc",
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
      "00901c28",
      "WRITE",
      [
        "storage",
        "Stack[-0x40]",
        null,
        null
      ]
    ],
    [
      "00901c2c",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "00901c30",
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
- 00901d30 ["INT_ADD", "register:40f0:8", ["const:901d30:8", "const:4:8"]]
- 00901d30 ["CALL", null, ["callee:00488698:8"]]
+ 00901d84 ["INT_ADD", "register:40f0:8", ["const:901d84:8", "const:4:8"]]
+ 00901d84 ["CALL", null, ["callee:00488698:8"]]
- 00901bd0 ["INT_SUB", "register:8:8", ["register:8:8", "const:1f0:8"]]
- 00901bd4 ["COPY", "tmp:0:8", ["register:40e8:8"]]
- 00901bd4 ["COPY", "tmp:1:8", ["register:40f0:8"]]
- 00901bd4 ["INT_ADD", "tmp:2:8", ["register:8:8", "const:1b0:8"]]
- 00901bd4 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
~~~


<a id="compare-2923e6f2d269948193ef03ec030481a7"></a>

### [`00901e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00901/00901e90.md) → [`00901ee4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00901/00901ee4.md) FUN_00901ee4

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 1件 [`00901bd0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00901/00901bd0.md) · 呼出先 17件 [`0043bba4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043bba4.md) [`00440ec0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00440/00440ec0.md) [`0044108c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00441/0044108c.md) [`00493b20`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00493/00493b20.md) [`005c179c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005c1/005c179c.md)
- 新版 呼出元 1件 [`00901c24`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00901/00901c24.md) · 呼出先 17件 [`0043bbe4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bbe4.md) [`00440f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00440/00440f00.md) [`004410cc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00441/004410cc.md) [`00493b60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00493/00493b60.md) [`005c17dc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005c1/005c17dc.md)

変更の種類 branch_condition_or_target, call, call_argument_candidate, call_count, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, operands_and_dependencies, operation_sequence, store_value, unresolved_branch_alignment, unresolved_call_alignment

命令の説明率　旧版 88.49% / 新版 88.49%

優先判定に残った影響 `call_argument_candidate` 2件, `store_value` 2件, `unresolved_branch_alignment` 43件, `unresolved_call_alignment` 11件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "009025dc",
      "incomplete_value": true,
      "site": "009025e8",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:8ab:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00902588",
      "incomplete_value": true,
      "site": "00902594",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:86b:8"
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
      "definition_site": "00903084",
      "incomplete_value": true,
      "site": "00903084",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:a05:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00903030",
      "incomplete_value": true,
      "site": "00903030",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:a52:8"
              ]
            ]
          ]
        ]
      ]
    },
    "ordinal": 176,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "00903168",
      "incomplete_value": true,
      "site": "0090316c",
      "value": [
        "LOAD",
        "8",
        [
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
                "const:40:8"
              ]
            ]
          ]
        ]
      ]
    },
    "ordinal": 92,
    "slot": 1
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00901f90",
      "READ",
      [
        "storage",
        "Stack[-0x98]",
        null,
        null
      ]
    ],
    [
      "unmatched:00901f94",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00901ff4"
      ]
    ],
    [
      "unmatched:00901f98",
      "READ",
      [
        "storage",
        "Stack[-0x88]",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "00901fe4",
      "READ",
      [
        "storage",
        "Stack[-0x98]",
        null,
        null
      ]
    ],
    [
      "00901fe8",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00901ff4"
      ]
    ],
    [
      "00901fec",
      "READ",
      [
        "storage",
        "Stack[-0x88]",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 009025e8 ["INT_ADD", "register:40f0:8", ["const:9025e8:8", "const:4:8"]]
- 009025e8 ["CALL", null, ["callee:004410cc:8"]]
+ 0090263c ["INT_ADD", "register:40f0:8", ["const:90263c:8", "const:4:8"]]
+ 0090263c ["CALL", null, ["callee:004410cc:8"]]
- 00902fdc ["INT_ADD", "register:40f0:8", ["const:902fdc:8", "const:4:8"]]
- 00902fdc ["CALL", null, ["callee:004410cc:8"]]
+ 00903030 ["INT_ADD", "register:40f0:8", ["const:903030:8", "const:4:8"]]
+ 00903030 ["CALL", null, ["callee:004410cc:8"]]
- 0090316c ["INT_ADD", "register:40f0:8", ["const:90316c:8", "const:4:8"]]
- 0090316c ["CALL", null, ["callee:00c57f80:8"]]
+ 009031c0 ["INT_ADD", "register:40f0:8", ["const:9031c0:8", "const:4:8"]]
+ 009031c0 ["CALL", null, ["callee:00c57f80:8"]]
~~~


<a id="compare-14b9ce1b200ccd694c8e19078fac218b"></a>

### [`009039a0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00903/009039a0.md) → [`009039f4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00903/009039f4.md) FUN_009039f4

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`0090397c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00903/0090397c.md) · 呼出先 12件 [`0048791c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00487/0048791c.md) [`0048793c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00487/0048793c.md) [`00487a64`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00487/00487a64.md) [`00487e20`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00487/00487e20.md) [`00488658`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00488/00488658.md)
- 新版 呼出元 1件 [`009039d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00903/009039d0.md) · 呼出先 12件 [`0048795c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00487/0048795c.md) [`0048797c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00487/0048797c.md) [`00487aa4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00487/00487aa4.md) [`00487e60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00487/00487e60.md) [`00488698`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00488/00488698.md)

変更の種類 constant, operands_and_dependencies, store_destination, store_value

命令の説明率　旧版 91.08% / 新版 91.08%

優先判定に残った影響 `store_destination` 1件, `store_value` 5件

アドレスに依存する影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "00903a2c",
      "incomplete_value": false,
      "site": "00903a30",
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
      "definition_site": "009039d8",
      "incomplete_value": false,
      "site": "009039dc",
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
      "definition_site": "00903a48",
      "incomplete_value": true,
      "site": "00903a60",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:912:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "009039f4",
      "incomplete_value": true,
      "site": "00903a0c",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:966:8"
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
      "definition_site": "00903bc8",
      "incomplete_value": true,
      "site": "00903bcc",
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
      "definition_site": "00903b74",
      "incomplete_value": true,
      "site": "00903b78",
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
      "00903a30",
      "DATA",
      [
        "storage",
        "00c64d38",
        null,
        "undefined *"
      ]
    ],
    [
      "00903a48",
      "READ",
      [
        "storage",
        "002ba966",
        null,
        "string"
      ]
    ],
    [
      "00903bb8",
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
      "00903a30",
      "DATA",
      [
        "storage",
        "00c64e08",
        null,
        "undefined *"
      ]
    ],
    [
      "00903a48",
      "READ",
      [
        "storage",
        "002ba912",
        null,
        "string"
      ]
    ],
    [
      "00903bb8",
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
- 00903b48 ["INT_ADD", "register:40f0:8", ["const:903b48:8", "const:4:8"]]
- 00903b48 ["CALL", null, ["callee:00c57f80:8"]]
+ 00903b9c ["INT_ADD", "register:40f0:8", ["const:903b9c:8", "const:4:8"]]
+ 00903b9c ["CALL", null, ["callee:00c57f80:8"]]
- 009039cc ["INT_ADD", "register:40f0:8", ["const:9039cc:8", "const:4:8"]]
- 009039cc ["CALL", null, ["callee:00487e60:8"]]
+ 00903a20 ["INT_ADD", "register:40f0:8", ["const:903a20:8", "const:4:8"]]
+ 00903a20 ["CALL", null, ["callee:00487e60:8"]]
- 009039d8 ["COPY", "tmp:0:8", ["const:d38:8"]]
- 009039d8 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 009039d8 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 009039d8 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00903a2c ["COPY", "tmp:0:8", ["const:e08:8"]]
+ 00903a2c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00903a2c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00903a2c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-f358fda9a6198f08f86ff305be5926a5"></a>

### [`00903c70`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00903/00903c70.md) → [`00903cc4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00903/00903cc4.md) FUN_00903cc4

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`0090397c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00903/0090397c.md) · 呼出先 12件 [`0048791c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00487/0048791c.md) [`0048793c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00487/0048793c.md) [`00487a64`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00487/00487a64.md) [`00487e20`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00487/00487e20.md) [`00488658`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00488/00488658.md)
- 新版 呼出元 1件 [`009039d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00903/009039d0.md) · 呼出先 12件 [`0048795c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00487/0048795c.md) [`0048797c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00487/0048797c.md) [`00487aa4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00487/00487aa4.md) [`00487e60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00487/00487e60.md) [`00488698`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00488/00488698.md)

変更の種類 constant, operands_and_dependencies, store_destination, store_value

命令の説明率　旧版 91.14% / 新版 91.14%

優先判定に残った影響 `store_destination` 1件, `store_value` 5件

アドレスに依存する影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "00903cfc",
      "incomplete_value": false,
      "site": "00903d04",
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
      "definition_site": "00903ca8",
      "incomplete_value": false,
      "site": "00903cb0",
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
    "ordinal": 9,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00903d1c",
      "incomplete_value": true,
      "site": "00903d34",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:cec:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00903cc8",
      "incomplete_value": true,
      "site": "00903ce0",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:d48:8"
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
      "definition_site": "00903e9c",
      "incomplete_value": true,
      "site": "00903ea0",
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
      "definition_site": "00903e48",
      "incomplete_value": true,
      "site": "00903e4c",
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
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "00903d04",
      "DATA",
      [
        "storage",
        "00c64d38",
        null,
        "undefined *"
      ]
    ],
    [
      "00903d1c",
      "READ",
      [
        "storage",
        "002acd48",
        null,
        "string"
      ]
    ],
    [
      "00903e8c",
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
      "00903d04",
      "DATA",
      [
        "storage",
        "00c64e08",
        null,
        "undefined *"
      ]
    ],
    [
      "00903d1c",
      "READ",
      [
        "storage",
        "002accec",
        null,
        "string"
      ]
    ],
    [
      "00903e8c",
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
- 00903e1c ["INT_ADD", "register:40f0:8", ["const:903e1c:8", "const:4:8"]]
- 00903e1c ["CALL", null, ["callee:00c57f80:8"]]
+ 00903e70 ["INT_ADD", "register:40f0:8", ["const:903e70:8", "const:4:8"]]
+ 00903e70 ["CALL", null, ["callee:00c57f80:8"]]
- 00903c9c ["INT_ADD", "register:40f0:8", ["const:903c9c:8", "const:4:8"]]
- 00903c9c ["CALL", null, ["callee:00487e60:8"]]
+ 00903cf0 ["INT_ADD", "register:40f0:8", ["const:903cf0:8", "const:4:8"]]
+ 00903cf0 ["CALL", null, ["callee:00487e60:8"]]
- 00903ca8 ["COPY", "tmp:0:8", ["const:d38:8"]]
- 00903ca8 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00903ca8 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00903ca8 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00903cfc ["COPY", "tmp:0:8", ["const:e08:8"]]
+ 00903cfc ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00903cfc ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00903cfc ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-05c7fe5280eb7b41a38285ab53c66a9b"></a>

### [`009042e0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00904/009042e0.md) → [`00904334`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00904/00904334.md) FUN_00904334

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`00901e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00901/00901e90.md) · 呼出先 1件 [`0043b778`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043b778.md)
- 新版 呼出元 1件 [`00901ee4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00901/00901ee4.md) · 呼出先 1件 [`0043b7b8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b7b8.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 80.00% / 新版 80.00%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00904340",
      "incomplete_value": false,
      "site": "00904344",
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
      "definition_site": "009042ec",
      "incomplete_value": false,
      "site": "009042f0",
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
      "00904340",
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
      "00904340",
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
- 009042f0 ["INT_ADD", "register:40f0:8", ["const:9042f0:8", "const:4:8"]]
- 009042f0 ["CALL", null, ["callee:0043b7b8:8"]]
+ 00904344 ["INT_ADD", "register:40f0:8", ["const:904344:8", "const:4:8"]]
+ 00904344 ["CALL", null, ["callee:0043b7b8:8"]]
- 009042ec ["COPY", "tmp:0:8", ["const:f4c:8"]]
- 009042ec ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 009042ec ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 009042ec ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 00904340 ["COPY", "tmp:0:8", ["const:f8c:8"]]
+ 00904340 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 00904340 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 00904340 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
~~~


<a id="compare-77ac4200766f8ab94df401190850cb42"></a>

### [`00904478`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00904/00904478.md) → [`009044cc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00904/009044cc.md) FUN_009044cc

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`009042f4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00904/009042f4.md) · 呼出先 1件 [`0043b778`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043b778.md)
- 新版 呼出元 1件 [`00904348`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00904/00904348.md) · 呼出先 1件 [`0043b7b8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b7b8.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 80.00% / 新版 80.00%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "009044d8",
      "incomplete_value": false,
      "site": "009044dc",
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
      "definition_site": "00904484",
      "incomplete_value": false,
      "site": "00904488",
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
      "009044d8",
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
      "009044d8",
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
- 00904488 ["INT_ADD", "register:40f0:8", ["const:904488:8", "const:4:8"]]
- 00904488 ["CALL", null, ["callee:0043b7b8:8"]]
+ 009044dc ["INT_ADD", "register:40f0:8", ["const:9044dc:8", "const:4:8"]]
+ 009044dc ["CALL", null, ["callee:0043b7b8:8"]]
- 00904484 ["COPY", "tmp:0:8", ["const:f4c:8"]]
- 00904484 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 00904484 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 00904484 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 009044d8 ["COPY", "tmp:0:8", ["const:f8c:8"]]
+ 009044d8 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 009044d8 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 009044d8 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
~~~


<a id="compare-0db9836fd29912e38e32efdfd5edead4"></a>

### [`00904610`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00904/00904610.md) → [`00904664`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00904/00904664.md) FUN_00904664

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`0090448c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00904/0090448c.md) · 呼出先 1件 [`0043b778`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043b778.md)
- 新版 呼出元 1件 [`009044e0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00904/009044e0.md) · 呼出先 1件 [`0043b7b8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b7b8.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 80.00% / 新版 80.00%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00904670",
      "incomplete_value": false,
      "site": "00904674",
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
      "definition_site": "0090461c",
      "incomplete_value": false,
      "site": "00904620",
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
      "00904670",
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
      "00904670",
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
- 00904620 ["INT_ADD", "register:40f0:8", ["const:904620:8", "const:4:8"]]
- 00904620 ["CALL", null, ["callee:0043b7b8:8"]]
+ 00904674 ["INT_ADD", "register:40f0:8", ["const:904674:8", "const:4:8"]]
+ 00904674 ["CALL", null, ["callee:0043b7b8:8"]]
- 0090461c ["COPY", "tmp:0:8", ["const:f4c:8"]]
- 0090461c ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 0090461c ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 0090461c ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 00904670 ["COPY", "tmp:0:8", ["const:f8c:8"]]
+ 00904670 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 00904670 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 00904670 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
~~~


<a id="compare-bbecd897a9fe3d3e2f6c26cf2dd0074a"></a>

### [`00904624`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00904/00904624.md) → [`00904678`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00904/00904678.md) _INIT_178

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
      "definition_site": "009046b4",
      "incomplete_value": true,
      "site": "009046d0",
      "value": [
        "LOAD",
        "16",
        [
          [
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
      "definition_site": "00904660",
      "incomplete_value": true,
      "site": "0090467c",
      "value": [
        "LOAD",
        "16",
        [
          [
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
      "definition_site": "009046d8",
      "incomplete_value": true,
      "site": "009046f4",
      "value": [
        "LOAD",
        "16",
        [
          [
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
      "definition_site": "00904684",
      "incomplete_value": true,
      "site": "009046a0",
      "value": [
        "LOAD",
        "16",
        [
          [
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
      "definition_site": "009046f8",
      "incomplete_value": true,
      "site": "00904714",
      "value": [
        "LOAD",
        "16",
        [
          [
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
      "definition_site": "009046a4",
      "incomplete_value": true,
      "site": "009046c0",
      "value": [
        "LOAD",
        "16",
        [
          [
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
      "009046b4",
      "READ",
      [
        "storage",
        "002b7f26",
        null,
        "string"
      ]
    ],
    [
      "009046d8",
      "READ",
      [
        "storage",
        "002b7f39",
        null,
        "string"
      ]
    ],
    [
      "009046f8",
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
      "009046b4",
      "READ",
      [
        "storage",
        "002b7f66",
        null,
        "string"
      ]
    ],
    [
      "009046d8",
      "READ",
      [
        "storage",
        "002b7f79",
        null,
        "string"
      ]
    ],
    [
      "009046f8",
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
- 00904718 ["COPY", "tmp:0:8", ["const:f09:8"]]
- 00904718 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 00904718 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 00904718 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 0090476c ["COPY", "tmp:0:8", ["const:ebc:8"]]
+ 0090476c ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 0090476c ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 0090476c ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
- 00904784 ["INT_ADD", "register:40f0:8", ["const:904784:8", "const:4:8"]]
- 00904784 ["CALL", null, ["callee:0043b838:8"]]
+ 009047d8 ["INT_ADD", "register:40f0:8", ["const:9047d8:8", "const:4:8"]]
+ 009047d8 ["CALL", null, ["callee:0043b838:8"]]
- 009047c0 ["INT_ADD", "register:40f0:8", ["const:9047c0:8", "const:4:8"]]
- 009047c0 ["CALL", null, ["callee:0043b838:8"]]
+ 00904814 ["INT_ADD", "register:40f0:8", ["const:904814:8", "const:4:8"]]
+ 00904814 ["CALL", null, ["callee:0043b838:8"]]
~~~


<a id="compare-ebbbbc284bfd617b4328f59dd0575340"></a>

### [`009049b4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00904/009049b4.md) → [`00904a08`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00904/00904a08.md) FUN_00904a08

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 2件 [`00911be4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00911/00911be4.md) [`00a7c4f4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a7c/00a7c4f4.md) · 呼出先 48件 [`0043bb20`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043bb20.md) [`0043bba4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043bba4.md) [`0043ddd8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043d/0043ddd8.md) [`00447ef4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00447/00447ef4.md) [`0046e538`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0046e/0046e538.md)
- 新版 呼出元 2件 [`00911c38`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00911/00911c38.md) [`00a7c564`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a7c/00a7c564.md) · 呼出先 48件 [`0043bb60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bb60.md) [`0043bbe4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bbe4.md) [`0043de18`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043d/0043de18.md) [`00447f34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00447/00447f34.md) [`0046e578`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046e/0046e578.md)

変更の種類 call, call_argument_candidate, call_target, constant, operands_and_dependencies, store_destination, store_value

命令の説明率　旧版 85.35% / 新版 85.35%

優先判定に残った影響 `call_argument_candidate` 112件, `call_target` 2件, `store_destination` 77件, `store_value` 87件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "00904a48",
      "incomplete_value": false,
      "site": "00904a50",
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
            "const:f20:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "009049f4",
      "incomplete_value": false,
      "site": "009049fc",
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
            "const:e50:8"
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
      "definition_site": "00904bb4",
      "incomplete_value": true,
      "site": "00904bb4",
      "value": [
        "LOAD",
        "8",
        [
          [
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
      "definition_site": "00904b60",
      "incomplete_value": true,
      "site": "00904b60",
      "value": [
        "LOAD",
        "8",
        [
          [
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
    "ordinal": 51,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00904bcc",
      "incomplete_value": true,
      "site": "00904bcc",
      "value": [
        "LOAD",
        "8",
        [
          [
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
      "definition_site": "00904b78",
      "incomplete_value": true,
      "site": "00904b78",
      "value": [
        "LOAD",
        "8",
        [
          [
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
      "00904a50",
      "DATA",
      [
        "storage",
        "00c85e50",
        null,
        "pointer"
      ]
    ],
    [
      "00904b84",
      "READ",
      [
        "storage",
        "00ca4f38",
        null,
        "undefined1"
      ]
    ],
    [
      "00904ba4",
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
      "00904a50",
      "DATA",
      [
        "storage",
        "00c85f20",
        null,
        "pointer"
      ]
    ],
    [
      "00904b84",
      "READ",
      [
        "storage",
        "00ca5038",
        null,
        "undefined1"
      ]
    ],
    [
      "00904ba4",
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
- 00904b28 ["COPY", "register:4040:8", ["const:ca4000:8"]]
+ 00904b7c ["COPY", "register:4040:8", ["const:ca5000:8"]]
- 00904c04 ["COPY", "tmp:0:8", ["const:f38:8"]]
- 00904c04 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00904c04 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00904c04 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00904c58 ["COPY", "tmp:0:8", ["const:38:8"]]
+ 00904c58 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00904c58 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00904c58 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 00904cac ["INT_ADD", "register:40f0:8", ["const:904cac:8", "const:4:8"]]
- 00904cac ["CALL", null, ["callee:00c53da0:8"]]
+ 00904d00 ["INT_ADD", "register:40f0:8", ["const:904d00:8", "const:4:8"]]
+ 00904d00 ["CALL", null, ["callee:00c53da0:8"]]
~~~


<a id="compare-3efc50120ee915f6f850e2ef25abf088"></a>

### [`00908314`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00908/00908314.md) → [`00908368`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00908/00908368.md) FUN_00908368

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 2件 [`009049b4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00904/009049b4.md) [`00985418`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00985/00985418.md) · 呼出先 16件 [`0047e60c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047e/0047e60c.md) [`0047edb4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047e/0047edb4.md) [`005d86ec`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005d8/005d86ec.md) [`00633374`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00633/00633374.md) [`007581d0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00758/007581d0.md)
- 新版 呼出元 2件 [`00904a08`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00904/00904a08.md) [`0098546c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00985/0098546c.md) · 呼出先 16件 [`0047e64c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047e/0047e64c.md) [`0047edf4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047e/0047edf4.md) [`005d872c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005d8/005d872c.md) [`006333b4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00633/006333b4.md) [`00758228`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00758/00758228.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 20.50% / 新版 20.50%

優先判定に残った影響 `call_argument_candidate` 5件, `unresolved_branch_alignment` 173件, `unresolved_call_alignment` 171件, `unresolved_store_alignment` 270件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00908448",
      "incomplete_value": false,
      "site": "00908450",
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
      "definition_site": "009083f4",
      "incomplete_value": false,
      "site": "009083fc",
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
    "ordinal": 1,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "009089a8",
      "incomplete_value": true,
      "site": "009089b4",
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
            "const:40:8"
          ]
        ]
      ]
    },
    "ordinal": 49,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00908e34",
      "incomplete_value": false,
      "site": "00908e3c",
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
      "definition_site": "00908de0",
      "incomplete_value": false,
      "site": "00908de8",
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
    "ordinal": 84,
    "slot": 1
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00908354",
      "DATA",
      [
        "storage",
        "00c85e70",
        null,
        "pointer"
      ]
    ],
    [
      "009083e4",
      "READ",
      [
        "storage",
        "00ca4f38",
        null,
        "undefined1"
      ]
    ],
    [
      "unmatched:009083a0",
      "WRITE",
      [
        "storage",
        "Stack[-0x95]",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "009083a8",
      "DATA",
      [
        "storage",
        "00c85f40",
        null,
        "pointer"
      ]
    ],
    [
      "009083e4",
      "READ",
      [
        "storage",
        "00ca5038",
        null,
        "undefined1"
      ]
    ],
    [
      "009083f4",
      "WRITE",
      [
        "storage",
        "Stack[-0x95]",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 009083fc ["INT_ADD", "register:40f0:8", ["const:9083fc:8", "const:4:8"]]
- 009083fc ["CALL", null, ["callee:006333b4:8"]]
+ 00908450 ["INT_ADD", "register:40f0:8", ["const:908450:8", "const:4:8"]]
+ 00908450 ["CALL", null, ["callee:006333b4:8"]]
+ 009083fc ["COPY", "register:4040:8", ["const:2b6000:8"]]
- 00908450 ["INT_RIGHT", "tmp:0:4", ["register:4040:4", "const:0:4"]]
- 00908450 ["INT_AND", "tmp:1:4", ["tmp:0:4", "const:1:4"]]
- 00908450 ["INT_EQUAL", "tmp:2:1", ["tmp:1:4", "const:0:4"]]
- 00908450 ["INT_EQUAL", "tmp:3:1", ["tmp:2:1", "const:1:1"]]
~~~


<a id="compare-cf4e9610eb357141504c615a4805db71"></a>

### [`0090a1d0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0090a/0090a1d0.md) → [`0090a224`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0090a/0090a224.md) FUN_0090a224

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 3件 [`009049b4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00904/009049b4.md) [`0090dcfc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0090d/0090dcfc.md) [`00914e30`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00914/00914e30.md) · 呼出先 13件 [`00447ef4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00447/00447ef4.md) [`0047e8dc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047e/0047e8dc.md) [`0047edb4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047e/0047edb4.md) [`0048ce54`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0048c/0048ce54.md) [`005626f4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00562/005626f4.md)
- 新版 呼出元 3件 [`00904a08`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00904/00904a08.md) [`0090dd50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0090d/0090dd50.md) [`00914e84`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00914/00914e84.md) · 呼出先 13件 [`00447f34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00447/00447f34.md) [`0047e91c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047e/0047e91c.md) [`0047edf4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047e/0047edf4.md) [`0048ce94`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048c/0048ce94.md) [`00562734`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00562/00562734.md)

変更の種類 branch_condition_or_target, call, call_count, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, local_def_use, memory_read, memory_read_count, operands_and_dependencies, operation_sequence, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 93.37% / 新版 93.37%

優先判定に残った影響 `unresolved_call_alignment` 1件, `unresolved_store_alignment` 1件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:0090a200",
      "READ",
      [
        "storage",
        "002a92f8",
        null,
        "string"
      ]
    ],
    [
      "unmatched:0090a22c",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0071bed8"
      ]
    ],
    [
      "0090a300",
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
      "0090a254",
      "READ",
      [
        "storage",
        "002a9327",
        null,
        "string"
      ]
    ],
    [
      "0090a280",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0071bf30"
      ]
    ],
    [
      "0090a300",
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
- 0090a1f8 ["COPY", "tmp:0:8", ["const:2f8:8"]]
- 0090a1f8 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 0090a1f8 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 0090a1f8 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
- 0090a1fc ["INT_ADD", "tmp:0:8", ["register:40c8:8", "const:28:8"]]
- 0090a1fc ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
- 0090a200 ["COPY", "tmp:0:8", ["register:4048:8"]]
- 0090a200 ["LOAD", "register:5000:16", ["const:1b1:8", "tmp:0:8"]]
- 0090a200 ["COPY", "register:5010:8", ["const:0:8"]]
- 0090a200 ["COPY", "register:5018:8", ["const:0:8"]]
~~~


<a id="compare-a3694626b95d09599b099bb8d5caa95a"></a>

### [`0090a5b8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0090a/0090a5b8.md) → [`0090a60c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0090a/0090a60c.md) FUN_0090a60c

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 2件 [`00914e30`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00914/00914e30.md) [`009ccb7c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009cc/009ccb7c.md) · 呼出先 30件 [`0043bba4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043bba4.md) [`004476f4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00447/004476f4.md) [`00447ef4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00447/00447ef4.md) [`0046e970`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0046e/0046e970.md) [`0046f0b4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0046f/0046f0b4.md)
- 新版 呼出元 2件 [`00914e84`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00914/00914e84.md) [`009ccbd0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009cc/009ccbd0.md) · 呼出先 30件 [`0043bbe4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bbe4.md) [`00447734`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00447/00447734.md) [`00447f34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00447/00447f34.md) [`0046e9b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046e/0046e9b0.md) [`0046f0f4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046f/0046f0f4.md)

変更の種類 branch_condition_or_target, branch_value, call, call_argument_candidate, call_count, cfg_edge_inventory, constant, control_flow, local_def_use, memory_read, memory_read_count, operands_and_dependencies, operation_sequence, store_value, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 73.91% / 新版 73.91%

優先判定に残った影響 `call_argument_candidate` 6件, `store_value` 19件, `unresolved_branch_alignment` 20件, `unresolved_call_alignment` 35件, `unresolved_store_alignment` 47件

アドレスに依存する影響 `branch_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "0090aa1c",
      "incomplete_value": true,
      "site": "0090aa1c",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:d01:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0090a9c8",
      "incomplete_value": true,
      "site": "0090a9c8",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:d5d:8"
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
      "definition_site": "0090aa20",
      "incomplete_value": true,
      "site": "0090aa20",
      "value": [
        "LOAD",
        "8",
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
      "definition_site": "0090a9cc",
      "incomplete_value": true,
      "site": "0090a9cc",
      "value": [
        "LOAD",
        "8",
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
    "ordinal": 50,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "0090aa44",
      "incomplete_value": true,
      "site": "0090aa54",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:ce9:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0090a9f0",
      "incomplete_value": true,
      "site": "0090aa00",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:d45:8"
              ]
            ]
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
      "0090a63c",
      "READ",
      [
        "storage",
        "00ca4978",
        null,
        "undefined8"
      ]
    ],
    [
      "0090a650",
      "PARAM",
      [
        "storage",
        "00c65e58",
        null,
        "pointer __((offset(0x10)))"
      ]
    ],
    [
      "0090a658",
      "PARAM",
      [
        "storage",
        "00c74fc0",
        null,
        "pointer __((offset(0x10)))"
      ]
    ]
  ],
  "added": [
    [
      "0090a63c",
      "READ",
      [
        "storage",
        "00ca4a78",
        null,
        "undefined8"
      ]
    ],
    [
      "0090a650",
      "PARAM",
      [
        "storage",
        "00c65f28",
        null,
        "pointer __((offset(0x10)))"
      ]
    ],
    [
      "0090a658",
      "PARAM",
      [
        "storage",
        "00c75090",
        null,
        "pointer __((offset(0x10)))"
      ]
    ]
  ]
}
~~~


~~~diff
- 0090a5ec ["INT_EQUAL", "tmp:0:1", ["register:4040:8", "const:0:8"]]
- 0090a5ec ["CBRANCH", null, ["local:b163:8", "tmp:0:1"]]
+ 0090a640 ["INT_EQUAL", "tmp:0:1", ["register:4040:8", "const:0:8"]]
+ 0090a640 ["CBRANCH", null, ["local:b164:8", "tmp:0:1"]]
- 0090a610 ["INT_ADD", "register:40f0:8", ["const:90a610:8", "const:4:8"]]
- 0090a610 ["CALL", null, ["callee:00c586e0:8"]]
+ 0090a664 ["INT_ADD", "register:40f0:8", ["const:90a664:8", "const:4:8"]]
+ 0090a664 ["CALL", null, ["callee:00c586e0:8"]]
+ 0090aa00 ["COPY", "register:4048:8", ["const:2ac000:8"]]
~~~


<a id="compare-146f85355ee3f7a6671d1c7fd329e4c6"></a>

### [`0090b908`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0090b/0090b908.md) → [`0090b95c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0090b/0090b95c.md) FUN_0090b95c

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 3件 [`0090dcfc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0090d/0090dcfc.md) [`00914e30`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00914/00914e30.md) [`009ccb7c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009cc/009ccb7c.md) · 呼出先 31件 [`0043bba4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043bba4.md) [`00447ef4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00447/00447ef4.md) [`0047c968`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047c/0047c968.md) [`0047e60c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047e/0047e60c.md) [`0047edb4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047e/0047edb4.md)
- 新版 呼出元 3件 [`0090dd50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0090d/0090dd50.md) [`00914e84`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00914/00914e84.md) [`009ccbd0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009cc/009ccbd0.md) · 呼出先 31件 [`0043bbe4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bbe4.md) [`00447f34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00447/00447f34.md) [`0047c9a8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047c9a8.md) [`0047e64c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047e/0047e64c.md) [`0047edf4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047e/0047edf4.md)

変更の種類 branch_condition_or_target, branch_value, call, call_argument_candidate, call_count, call_target, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, store_value, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 47.04% / 新版 47.04%

優先判定に残った影響 `call_argument_candidate` 14件, `call_target` 1件, `unresolved_branch_alignment` 58件, `unresolved_call_alignment` 61件, `unresolved_store_alignment` 135件

アドレスに依存する影響 `branch_value` 1件, `store_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "0090bea4",
      "incomplete_value": true,
      "site": "0090bea8",
      "value": [
        "LOAD",
        "16",
        [
          [
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
      "definition_site": "0090be50",
      "incomplete_value": true,
      "site": "0090be54",
      "value": [
        "LOAD",
        "16",
        [
          [
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
    "ordinal": 64,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "branch_value",
    "new": {
      "definition_site": "0090b990",
      "incomplete_value": true,
      "site": "0090b990",
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
      "definition_site": "0090b93c",
      "incomplete_value": true,
      "site": "0090b93c",
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
    "new": null,
    "old": {
      "definition_site": "0090b958",
      "incomplete_value": false,
      "site": "0090b95c",
      "value": [
        "leaf",
        "const:0:8"
      ]
    },
    "ordinal": 0,
    "slot": 4
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:0090b90c",
      "WRITE",
      [
        "storage",
        "Stack[-0x60]",
        null,
        null
      ]
    ],
    [
      "unmatched:0090b910",
      "WRITE",
      [
        "storage",
        "Stack[-0x50]",
        null,
        null
      ]
    ],
    [
      "unmatched:0090b914",
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
      "0090b960",
      "WRITE",
      [
        "storage",
        "Stack[-0x60]",
        null,
        null
      ]
    ],
    [
      "0090b964",
      "WRITE",
      [
        "storage",
        "Stack[-0x50]",
        null,
        null
      ]
    ],
    [
      "0090b968",
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
- 0090b95c ["INT_ADD", "register:40f0:8", ["const:90b95c:8", "const:4:8"]]
- 0090b95c ["CALL", null, ["callee:00c586e0:8"]]
+ 0090b9b0 ["INT_ADD", "register:40f0:8", ["const:90b9b0:8", "const:4:8"]]
+ 0090b9b0 ["CALL", null, ["callee:00c586e0:8"]]
+ 0090b95c ["INT_SUB", "register:8:8", ["register:8:8", "const:190:8"]]
- 0090b990 ["COPY", "tmp:0:8", ["const:f38:8"]]
- 0090b990 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 0090b990 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 0090b990 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 0090b9e4 ["COPY", "tmp:0:8", ["const:38:8"]]
+ 0090b9e4 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 0090b9e4 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 0090b9e4 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-0a4edc0fa254ff732bf55df9e8012d34"></a>

### [`0090cc54`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0090c/0090cc54.md) → [`0090cca8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0090c/0090cca8.md) FUN_0090cca8

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 3件 [`0090dcfc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0090d/0090dcfc.md) [`00911be4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00911/00911be4.md) [`00914e30`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00914/00914e30.md) · 呼出先 28件 [`0043bba4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043bba4.md) [`0046d490`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0046d/0046d490.md) [`0047e8dc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047e/0047e8dc.md) [`0047edb4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047e/0047edb4.md) [`0048a73c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0048a/0048a73c.md)
- 新版 呼出元 3件 [`0090dd50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0090d/0090dd50.md) [`00911c38`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00911/00911c38.md) [`00914e84`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00914/00914e84.md) · 呼出先 28件 [`0043bbe4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bbe4.md) [`0046d4d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046d/0046d4d0.md) [`0047e91c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047e/0047e91c.md) [`0047edf4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047e/0047edf4.md) [`0048a77c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048a/0048a77c.md)

変更の種類 branch_condition_or_target, branch_value, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 74.59% / 新版 74.59%

優先判定に残った影響 `call_argument_candidate` 19件, `unresolved_branch_alignment` 11件, `unresolved_call_alignment` 19件, `unresolved_store_alignment` 40件

アドレスに依存する影響 `branch_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "branch_value",
    "new": {
      "definition_site": "0090cce4",
      "incomplete_value": true,
      "site": "0090cce4",
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
      "definition_site": "0090cc90",
      "incomplete_value": true,
      "site": "0090cc90",
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
      "definition_site": "0090ccec",
      "incomplete_value": false,
      "site": "0090cd00",
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
      "definition_site": "0090cc98",
      "incomplete_value": false,
      "site": "0090ccac",
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
      "definition_site": "0090ccf4",
      "incomplete_value": false,
      "site": "0090cd00",
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
            "const:90:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0090cca0",
      "incomplete_value": false,
      "site": "0090ccac",
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
            "const:fc0:8"
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
      "0090cce0",
      "READ",
      [
        "storage",
        "00ca4978",
        null,
        "undefined8"
      ]
    ],
    [
      "0090ccec",
      "PARAM",
      [
        "storage",
        "00c65e58",
        null,
        "pointer __((offset(0x10)))"
      ]
    ],
    [
      "0090ccf4",
      "PARAM",
      [
        "storage",
        "00c74fc0",
        null,
        "pointer __((offset(0x10)))"
      ]
    ]
  ],
  "added": [
    [
      "0090cce0",
      "READ",
      [
        "storage",
        "00ca4a78",
        null,
        "undefined8"
      ]
    ],
    [
      "0090ccec",
      "PARAM",
      [
        "storage",
        "00c65f28",
        null,
        "pointer __((offset(0x10)))"
      ]
    ],
    [
      "0090ccf4",
      "PARAM",
      [
        "storage",
        "00c75090",
        null,
        "pointer __((offset(0x10)))"
      ]
    ]
  ]
}
~~~


~~~diff
- 0090ccac ["INT_ADD", "register:40f0:8", ["const:90ccac:8", "const:4:8"]]
- 0090ccac ["CALL", null, ["callee:00c586e0:8"]]
+ 0090cd00 ["INT_ADD", "register:40f0:8", ["const:90cd00:8", "const:4:8"]]
+ 0090cd00 ["CALL", null, ["callee:00c586e0:8"]]
- 0090cd54 ["INT_ADD", "register:40f0:8", ["const:90cd54:8", "const:4:8"]]
- 0090cd54 ["CALL", null, ["callee:0047e91c:8"]]
+ 0090cda8 ["INT_ADD", "register:40f0:8", ["const:90cda8:8", "const:4:8"]]
+ 0090cda8 ["CALL", null, ["callee:0047e91c:8"]]
- 0090cd88 ["COPY", "register:0:8", ["register:4040:8"]]
- 0090cd88 ["INT_ADD", "register:40f0:8", ["const:90cd88:8", "const:4:8"]]
- 0090cd88 ["CALLIND", null, ["register:0:8"]]
+ 0090cddc ["COPY", "register:0:8", ["register:4040:8"]]
+ 0090cddc ["INT_ADD", "register:40f0:8", ["const:90cddc:8", "const:4:8"]]
+ 0090cddc ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-aa22d67c626474635b482a05ad0da2a7"></a>

### [`0090d834`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0090d/0090d834.md) → [`0090d888`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0090d/0090d888.md) FUN_0090d888

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `changed`

- 旧版 呼出元 1件 [`009d3af4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009d3/009d3af4.md) · 呼出先 7件 [`00440ec0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00440/00440ec0.md) [`00470840`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00470/00470840.md) [`00494610`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00494/00494610.md) [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md)
- 新版 呼出元 1件 [`009d3b48`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009d3/009d3b48.md) · 呼出先 7件 [`00440f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00440/00440f00.md) [`00470880`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00470/00470880.md) [`00494650`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00494/00494650.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)

変更の種類 call_argument_candidate, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_store_alignment

命令の説明率　旧版 98.25% / 新版 98.25%

アドレスに依存する影響 `call_argument_candidate` 1件, `unresolved_branch_alignment` 1件, `unresolved_store_alignment` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "0090d954",
      "incomplete_value": true,
      "site": "0090d964",
      "value": [
        "live",
        "register:4098:8"
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
      "unmatched:0090d864",
      "WRITE",
      [
        "storage",
        "Stack[-0x78]",
        null,
        null
      ]
    ],
    [
      "unmatched:0090da38",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "0090da84"
      ]
    ]
  ],
  "added": [
    [
      "0090d8b8",
      "WRITE",
      [
        "storage",
        "Stack[-0x78]",
        null,
        null
      ]
    ],
    [
      "0090da8c",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "0090da84"
      ]
    ]
  ]
}
~~~


~~~diff
- 0090d964 ["INT_ADD", "register:40f0:8", ["const:90d964:8", "const:4:8"]]
- 0090d964 ["CALL", null, ["callee:00c580d0:8"]]
+ 0090d9b8 ["INT_ADD", "register:40f0:8", ["const:90d9b8:8", "const:4:8"]]
+ 0090d9b8 ["CALL", null, ["callee:00c580d0:8"]]
- 0090d860 ["INT_ADD", "tmp:0:8", ["register:4048:8", "const:28:8"]]
- 0090d860 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
- 0090d864 ["COPY", "tmp:0:8", ["register:4040:8"]]
- 0090d864 ["INT_ADD", "tmp:1:8", ["register:40e8:8", "const:ffffffffffffffe8:8"]]
- 0090d864 ["STORE", null, ["const:1b1:8", "tmp:1:8", "tmp:0:8"]]
~~~


<a id="compare-438c8c3480fd68f047b4f9619593ac71"></a>

### [`009112f0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00911/009112f0.md) → [`00911344`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00911/00911344.md) FUN_00911344

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 3件 [`0090dcfc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0090d/0090dcfc.md) [`00911be4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00911/00911be4.md) [`00914e30`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00914/00914e30.md) · 呼出先 7件 [`0043bba4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043bba4.md) [`00489f4c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00489/00489f4c.md) [`0071ad10`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0071a/0071ad10.md) [`0071b524`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0071b/0071b524.md) [`0071b8d4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0071b/0071b8d4.md)
- 新版 呼出元 3件 [`0090dd50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0090d/0090dd50.md) [`00911c38`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00911/00911c38.md) [`00914e84`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00914/00914e84.md) · 呼出先 7件 [`0043bbe4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bbe4.md) [`00489f8c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00489/00489f8c.md) [`0071ad68`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0071a/0071ad68.md) [`0071b57c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0071b/0071b57c.md) [`0071b92c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0071b/0071b92c.md)

変更の種類 call, call_target, constant, operands_and_dependencies

命令の説明率　旧版 98.72% / 新版 98.72%

優先判定に残った影響 `call_target` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_target",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "00911540",
      "value": [
        "leaf",
        "ram:71bf30:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "009114ec",
      "value": [
        "leaf",
        "ram:71bed8:8"
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
      "site": "00911550",
      "value": [
        "leaf",
        "ram:71bf30:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "009114fc",
      "value": [
        "leaf",
        "ram:71bed8:8"
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
      "00911540",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0071bed8"
      ]
    ],
    [
      "00911550",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0071bed8"
      ]
    ],
    [
      "00911580",
      "DATA",
      [
        "storage",
        "003c7974",
        null,
        "byte[11]"
      ]
    ]
  ],
  "added": [
    [
      "00911540",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0071bf30"
      ]
    ],
    [
      "00911550",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0071bf30"
      ]
    ],
    [
      "00911580",
      "DATA",
      [
        "storage",
        "003c7974",
        null,
        "uleb128"
      ]
    ]
  ]
}
~~~


~~~diff
- 009114ec ["INT_ADD", "register:40f0:8", ["const:9114ec:8", "const:4:8"]]
- 009114ec ["CALL", null, ["ram:71bed8:8"]]
+ 00911540 ["INT_ADD", "register:40f0:8", ["const:911540:8", "const:4:8"]]
+ 00911540 ["CALL", null, ["ram:71bf30:8"]]
- 009114fc ["INT_ADD", "register:40f0:8", ["const:9114fc:8", "const:4:8"]]
- 009114fc ["CALL", null, ["ram:71bed8:8"]]
+ 00911550 ["INT_ADD", "register:40f0:8", ["const:911550:8", "const:4:8"]]
+ 00911550 ["CALL", null, ["ram:71bf30:8"]]
- 00911318 ["INT_ADD", "register:40f0:8", ["const:911318:8", "const:4:8"]]
- 00911318 ["CALL", null, ["callee:0071b92c:8"]]
+ 0091136c ["INT_ADD", "register:40f0:8", ["const:91136c:8", "const:4:8"]]
+ 0091136c ["CALL", null, ["callee:0071b92c:8"]]
~~~


<a id="compare-52693f3983c16e630dd52e21787a5247"></a>

### [`00911560`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00911/00911560.md) → [`009115b4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00911/009115b4.md) FUN_009115b4

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 3件 [`0090dcfc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0090d/0090dcfc.md) [`00911be4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00911/00911be4.md) [`00914e30`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00914/00914e30.md) · 呼出先 29件 [`0043bba4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043bba4.md) [`0046c9c4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0046c/0046c9c4.md) [`00489f4c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00489/00489f4c.md) [`0048ce50`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0048c/0048ce50.md) [`0048ce84`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0048c/0048ce84.md)
- 新版 呼出元 3件 [`0090dd50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0090d/0090dd50.md) [`00911c38`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00911/00911c38.md) [`00914e84`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00914/00914e84.md) · 呼出先 29件 [`0043bbe4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bbe4.md) [`0046ca04`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046c/0046ca04.md) [`00489f8c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00489/00489f8c.md) [`0048ce90`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048c/0048ce90.md) [`0048cec4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048c/0048cec4.md)

変更の種類 branch_value, call_argument_candidate, constant, operands_and_dependencies, store_value

命令の説明率　旧版 97.45% / 新版 97.45%

優先判定に残った影響 `call_argument_candidate` 2件, `store_value` 3件

アドレスに依存する影響 `branch_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00911644",
      "incomplete_value": true,
      "site": "00911658",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:3c0:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "009115f0",
      "incomplete_value": true,
      "site": "00911604",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:380:8"
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
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "00911ab0",
      "incomplete_value": false,
      "site": "00911ab0",
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
      "definition_site": "00911a5c",
      "incomplete_value": false,
      "site": "00911a5c",
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
    "ordinal": 47,
    "slot": 2
  },
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "00911b54",
      "incomplete_value": false,
      "site": "00911b58",
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
      "definition_site": "00911b00",
      "incomplete_value": false,
      "site": "00911b04",
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
    "ordinal": 52,
    "slot": 2
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "00911624",
      "READ",
      [
        "storage",
        "002c3dc8",
        null,
        "undefined8"
      ]
    ],
    [
      "00911644",
      "READ",
      [
        "storage",
        "002c4380",
        null,
        "undefined8"
      ]
    ],
    [
      "009119d8",
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
      "00911624",
      "READ",
      [
        "storage",
        "002c3e08",
        null,
        "undefined8"
      ]
    ],
    [
      "00911644",
      "READ",
      [
        "storage",
        "002c43c0",
        null,
        "undefined8"
      ]
    ],
    [
      "009119d8",
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
- 009119a8 ["INT_ADD", "register:40f0:8", ["const:9119a8:8", "const:4:8"]]
- 009119a8 ["CALL", null, ["callee:00c586e0:8"]]
+ 009119fc ["INT_ADD", "register:40f0:8", ["const:9119fc:8", "const:4:8"]]
+ 009119fc ["CALL", null, ["callee:00c586e0:8"]]
- 009115a0 ["INT_ADD", "register:40f0:8", ["const:9115a0:8", "const:4:8"]]
- 009115a0 ["CALL", null, ["callee:0046ca04:8"]]
+ 009115f4 ["INT_ADD", "register:40f0:8", ["const:9115f4:8", "const:4:8"]]
+ 009115f4 ["CALL", null, ["callee:0046ca04:8"]]
- 009115d0 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:dc8:8"]]
- 009115d0 ["LOAD", "register:5000:8", ["const:1b1:8", "tmp:0:8"]]
- 009115d0 ["COPY", "register:5008:8", ["const:0:8"]]
- 009115d0 ["COPY", "register:5010:8", ["const:0:8"]]
+ 00911624 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:e08:8"]]
+ 00911624 ["LOAD", "register:5000:8", ["const:1b1:8", "tmp:0:8"]]
+ 00911624 ["COPY", "register:5008:8", ["const:0:8"]]
+ 00911624 ["COPY", "register:5010:8", ["const:0:8"]]
~~~


<a id="compare-6f91b8f4b3c3326b35a8c83714279304"></a>

### [`00912ab4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00912/00912ab4.md) → [`00912b08`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00912/00912b08.md) FUN_00912b08

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 2件 [`00911be4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00911/00911be4.md) [`00914e30`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00914/00914e30.md) · 呼出先 33件 [`0043bb20`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043bb20.md) [`00447ef4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00447/00447ef4.md) [`0046e970`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0046e/0046e970.md) [`0046f0b4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0046f/0046f0b4.md) [`0046f6e4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0046f/0046f6e4.md)
- 新版 呼出元 2件 [`00911c38`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00911/00911c38.md) [`00914e84`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00914/00914e84.md) · 呼出先 33件 [`0043bb60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bb60.md) [`00447f34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00447/00447f34.md) [`0046e9b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046e/0046e9b0.md) [`0046f0f4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046f/0046f0f4.md) [`0046f724`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046f/0046f724.md)

変更の種類 branch_condition_or_target, branch_value, call, call_argument_candidate, call_count, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, operands_and_dependencies, operation_sequence, store_value, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 45.17% / 新版 45.17%

優先判定に残った影響 `call_argument_candidate` 28件, `store_value` 2件, `unresolved_branch_alignment` 85件, `unresolved_call_alignment` 152件, `unresolved_store_alignment` 177件

アドレスに依存する影響 `branch_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00912f94",
      "incomplete_value": true,
      "site": "00912f94",
      "value": [
        "LOAD",
        "8",
        [
          [
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
      "definition_site": "00912f40",
      "incomplete_value": true,
      "site": "00912f40",
      "value": [
        "LOAD",
        "8",
        [
          [
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
    "ordinal": 49,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "009130c8",
      "incomplete_value": true,
      "site": "009130c8",
      "value": [
        "LOAD",
        "8",
        [
          [
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
      "definition_site": "00913074",
      "incomplete_value": true,
      "site": "00913074",
      "value": [
        "LOAD",
        "8",
        [
          [
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
    "ordinal": 59,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "branch_value",
    "new": {
      "definition_site": "00912b48",
      "incomplete_value": true,
      "site": "00912b48",
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
      "definition_site": "00912af4",
      "incomplete_value": true,
      "site": "00912af4",
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
      "00912b3c",
      "READ",
      [
        "storage",
        "00ca4978",
        null,
        "undefined8"
      ]
    ],
    [
      "00912b50",
      "PARAM",
      [
        "storage",
        "00c65e58",
        null,
        "pointer __((offset(0x10)))"
      ]
    ],
    [
      "00912b58",
      "PARAM",
      [
        "storage",
        "00c74fc0",
        null,
        "pointer __((offset(0x10)))"
      ]
    ]
  ],
  "added": [
    [
      "00912b3c",
      "READ",
      [
        "storage",
        "00ca4a78",
        null,
        "undefined8"
      ]
    ],
    [
      "00912b50",
      "PARAM",
      [
        "storage",
        "00c65f28",
        null,
        "pointer __((offset(0x10)))"
      ]
    ],
    [
      "00912b58",
      "PARAM",
      [
        "storage",
        "00c75090",
        null,
        "pointer __((offset(0x10)))"
      ]
    ]
  ]
}
~~~


~~~diff
- 00912b0c ["INT_ADD", "register:40f0:8", ["const:912b0c:8", "const:4:8"]]
- 00912b0c ["CALL", null, ["callee:00c586e0:8"]]
+ 00912b60 ["INT_ADD", "register:40f0:8", ["const:912b60:8", "const:4:8"]]
+ 00912b60 ["CALL", null, ["callee:00c586e0:8"]]
- 00912b48 ["INT_NOTEQUAL", "tmp:0:1", ["register:4048:4", "const:0:4"]]
- 00912b48 ["CBRANCH", null, ["local:b155:8", "tmp:0:1"]]
+ 00912b9c ["INT_NOTEQUAL", "tmp:0:1", ["register:4048:4", "const:0:4"]]
+ 00912b9c ["CBRANCH", null, ["local:b161:8", "tmp:0:1"]]
- 00912c74 ["INT_ADD", "register:40f0:8", ["const:912c74:8", "const:4:8"]]
- 00912c74 ["CALL", null, ["callee:0048ce94:8"]]
+ 00912cc8 ["INT_ADD", "register:40f0:8", ["const:912cc8:8", "const:4:8"]]
+ 00912cc8 ["CALL", null, ["callee:0048ce94:8"]]
~~~


<a id="compare-944bbc5bfe0d084ec946f1d223bd618b"></a>

### [`0091a294`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0091a/0091a294.md) → [`0091a2e8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0091a/0091a2e8.md) FUN_0091a2e8

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 2件 [`0089d4c8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0089d/0089d4c8.md) [`00914e30`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00914/00914e30.md) · 呼出先 19件 [`0043bba4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043bba4.md) [`00440ec0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00440/00440ec0.md) [`00440f5c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00440/00440f5c.md) [`0044d1cc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0044d/0044d1cc.md) [`00564588`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00564/00564588.md)
- 新版 呼出元 2件 [`0089d520`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0089d/0089d520.md) [`00914e84`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00914/00914e84.md) · 呼出先 19件 [`0043bbe4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bbe4.md) [`00440f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00440/00440f00.md) [`00440f9c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00440/00440f9c.md) [`0044d20c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0044d/0044d20c.md) [`005645c8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00564/005645c8.md)

変更の種類 branch_condition_or_target, call_argument_candidate, comparison, comparison_count, constant, control_flow, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 75.85% / 新版 75.85%

優先判定に残った影響 `call_argument_candidate` 4件, `unresolved_branch_alignment` 16件, `unresolved_call_alignment` 4件, `unresolved_store_alignment` 23件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "0091a34c",
      "incomplete_value": false,
      "site": "0091a354",
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
            "const:519:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0091a2f8",
      "incomplete_value": false,
      "site": "0091a300",
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
            "const:4e8:8"
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
      "definition_site": "0091a368",
      "incomplete_value": false,
      "site": "0091a370",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:2ba000:8"
          ],
          [
            "leaf",
            "const:946:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0091a314",
      "incomplete_value": false,
      "site": "0091a31c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:2ba000:8"
          ],
          [
            "leaf",
            "const:99a:8"
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
      "definition_site": "0091a384",
      "incomplete_value": false,
      "site": "0091a38c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:2b9000:8"
          ],
          [
            "leaf",
            "const:5f8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0091a330",
      "incomplete_value": false,
      "site": "0091a338",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:2b9000:8"
          ],
          [
            "leaf",
            "const:64c:8"
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
      "unmatched:0091a2a8",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "unmatched:0091a2d0",
      "WRITE",
      [
        "storage",
        "Stack[-0x70]",
        null,
        null
      ]
    ],
    [
      "0091a338",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "unmatched:0091a32c"
      ]
    ]
  ],
  "added": [
    [
      "0091a2fc",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "0091a324",
      "WRITE",
      [
        "storage",
        "Stack[-0x70]",
        null,
        null
      ]
    ],
    [
      "0091a338",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "0091a380"
      ]
    ]
  ]
}
~~~


~~~diff
- 0091a300 ["INT_ADD", "register:40f0:8", ["const:91a300:8", "const:4:8"]]
- 0091a300 ["CALL", null, ["callee:00c58260:8"]]
+ 0091a354 ["INT_ADD", "register:40f0:8", ["const:91a354:8", "const:4:8"]]
+ 0091a354 ["CALL", null, ["callee:00c58260:8"]]
- 0091a31c ["INT_ADD", "register:40f0:8", ["const:91a31c:8", "const:4:8"]]
- 0091a31c ["CALL", null, ["callee:00c58260:8"]]
+ 0091a370 ["INT_ADD", "register:40f0:8", ["const:91a370:8", "const:4:8"]]
+ 0091a370 ["CALL", null, ["callee:00c58260:8"]]
+ 0091a31c ["COPY", "register:40b0:8", ["register:4000:8"]]
~~~


<a id="compare-bdbc50a42a27b12104523e10842e8659"></a>

### [`0091aa20`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0091a/0091aa20.md) → [`0091aa74`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0091a/0091aa74.md) FUN_0091aa74

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `bounded` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 4件 [`00911560`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00911/00911560.md) [`00914e30`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00914/00914e30.md) [`0091ab78`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0091a/0091ab78.md) [`00922494`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00922/00922494.md) · 呼出先 8件 [`0043bba4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043bba4.md) [`0071acd4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0071a/0071acd4.md) [`0071acfc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0071a/0071acfc.md) [`0071b524`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0071b/0071b524.md) [`0071b8d4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0071b/0071b8d4.md)
- 新版 呼出元 4件 [`009115b4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00911/009115b4.md) [`00914e84`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00914/00914e84.md) [`0091abcc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0091a/0091abcc.md) [`009224e8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00922/009224e8.md) · 呼出先 8件 [`0043bbe4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bbe4.md) [`0071ad2c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0071a/0071ad2c.md) [`0071ad54`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0071a/0071ad54.md) [`0071b57c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0071b/0071b57c.md) [`0071b92c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0071b/0071b92c.md)

変更の種類 branch_condition_or_target, call, call_count, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_call_alignment

命令の説明率　旧版 93.02% / 新版 93.02%

優先判定に残った影響 `unresolved_branch_alignment` 3件, `unresolved_call_alignment` 1件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:0091aa50",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "0091abb4"
      ]
    ],
    [
      "unmatched:0091aa54",
      "UNCONDITIONAL_CALL",
      [
        "mapped_function",
        "0071b92c"
      ]
    ],
    [
      "unmatched:0091aa60",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "0091aad4"
      ]
    ]
  ],
  "added": [
    [
      "0091aaa4",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "0091abb4"
      ]
    ],
    [
      "0091aaa8",
      "UNCONDITIONAL_CALL",
      [
        "mapped_function",
        "0071b92c"
      ]
    ],
    [
      "0091aab4",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "0091aad4"
      ]
    ]
  ]
}
~~~


~~~diff
- 0091aa38 ["INT_ADD", "register:40f0:8", ["const:91aa38:8", "const:4:8"]]
- 0091aa38 ["CALL", null, ["callee:008119c0:8"]]
+ 0091aa8c ["INT_ADD", "register:40f0:8", ["const:91aa8c:8", "const:4:8"]]
+ 0091aa8c ["CALL", null, ["callee:008119c0:8"]]
- 0091aa50 ["BOOL_NEGATE", "tmp:0:1", ["register:101:1"]]
- 0091aa50 ["CBRANCH", null, ["local:b20:8", "tmp:0:1"]]
- 0091aa54 ["INT_ADD", "register:40f0:8", ["const:91aa54:8", "const:4:8"]]
- 0091aa54 ["CALL", null, ["callee:0071b92c:8"]]
~~~


<a id="compare-28becb5566fa38b2d8db78ecb184e442"></a>

### [`0091ab78`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0091a/0091ab78.md) → [`0091abcc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0091a/0091abcc.md) FUN_0091abcc

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 1件 [`00859b58`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00859/00859b58.md) · 呼出先 71件 [`0043bba4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043bba4.md) [`00467a88`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00467/00467a88.md) [`00467b2c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00467/00467b2c.md) [`00467b60`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00467/00467b60.md) [`00467f54`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00467/00467f54.md)
- 新版 呼出元 1件 [`00859bb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00859/00859bb0.md) · 呼出先 71件 [`0043bbe4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bbe4.md) [`00467ac8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00467/00467ac8.md) [`00467b6c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00467/00467b6c.md) [`00467ba0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00467/00467ba0.md) [`00467f94`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00467/00467f94.md)

変更の種類 branch_condition_or_target, call, call_argument_candidate, call_target, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, local_def_use, memory_read, memory_read_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 80.33% / 新版 80.33%

優先判定に残った影響 `call_argument_candidate` 29件, `call_target` 2件, `unresolved_branch_alignment` 101件, `unresolved_call_alignment` 129件, `unresolved_store_alignment` 7件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "0091ac6c",
      "incomplete_value": true,
      "site": "0091ac74",
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
            "const:90:8"
          ]
        ]
      ]
    },
    "old": null,
    "ordinal": 0,
    "slot": 3
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "0091ac70",
      "incomplete_value": false,
      "site": "0091ac74",
      "value": [
        "leaf",
        "const:0:8"
      ]
    },
    "old": null,
    "ordinal": 0,
    "slot": 4
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "0091af14",
      "incomplete_value": true,
      "site": "0091af24",
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
            "register:40a0:8"
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
      "unmatched:0091aba8",
      "WRITE",
      [
        "storage",
        "Stack[-0xc0]",
        null,
        null
      ]
    ],
    [
      "unmatched:0091abe8",
      "READ",
      [
        "storage",
        "00ca4978",
        null,
        "undefined8"
      ]
    ],
    [
      "unmatched:0091ac08",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "0091ac80"
      ]
    ]
  ],
  "added": [
    [
      "0091abfc",
      "WRITE",
      [
        "storage",
        "Stack[-0xc0]",
        null,
        null
      ]
    ],
    [
      "0091ac3c",
      "READ",
      [
        "storage",
        "00ca4a78",
        null,
        "undefined8"
      ]
    ],
    [
      "0091ac5c",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "0091ac80"
      ]
    ]
  ]
}
~~~


~~~diff
- 0091ac20 ["INT_ADD", "register:40f0:8", ["const:91ac20:8", "const:4:8"]]
- 0091ac20 ["CALL", null, ["callee:00c586e0:8"]]
+ 0091ac74 ["INT_ADD", "register:40f0:8", ["const:91ac74:8", "const:4:8"]]
+ 0091ac74 ["CALL", null, ["callee:00c586e0:8"]]
- 0091ac74 ["COPY", "tmp:0:8", ["const:484:8"]]
- 0091ac74 ["INT_CARRY", "register:105:1", ["register:40c8:8", "tmp:0:8"]]
- 0091ac74 ["INT_SCARRY", "register:106:1", ["register:40c8:8", "tmp:0:8"]]
- 0091ac74 ["INT_ADD", "tmp:1:8", ["register:40c8:8", "tmp:0:8"]]
+ 0091acc8 ["COPY", "tmp:0:8", ["const:554:8"]]
+ 0091acc8 ["INT_CARRY", "register:105:1", ["register:40c8:8", "tmp:0:8"]]
+ 0091acc8 ["INT_SCARRY", "register:106:1", ["register:40c8:8", "tmp:0:8"]]
+ 0091acc8 ["INT_ADD", "tmp:1:8", ["register:40c8:8", "tmp:0:8"]]
- 0091aed0 ["INT_NOTEQUAL", "tmp:0:1", ["register:100:1", "register:103:1"]]
- 0091aed0 ["CBRANCH", null, ["local:b46:8", "tmp:0:1"]]
+ 0091af24 ["INT_NOTEQUAL", "tmp:0:1", ["register:100:1", "register:103:1"]]
+ 0091af24 ["CBRANCH", null, ["local:b45:8", "tmp:0:1"]]
~~~


<a id="compare-549fd3c2149a288f0d20e109394f386c"></a>

### [`0091ff5c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0091f/0091ff5c.md) → [`0091ffb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0091f/0091ffb0.md) FUN_0091ffb0

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 3件 [`009202b4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00920/009202b4.md) [`00a7db60`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a7d/00a7db60.md) [`00a7dbec`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a7d/00a7dbec.md) · 呼出先 7件 [`0046e8a4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0046e/0046e8a4.md) [`0046efdc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0046e/0046efdc.md) [`00672748`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00672/00672748.md) [`00682218`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00682/00682218.md) [`009202d8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00920/009202d8.md)
- 新版 呼出元 3件 [`00920308`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00920/00920308.md) [`00a7dbd0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a7d/00a7dbd0.md) [`00a7dc5c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a7d/00a7dc5c.md) · 呼出先 7件 [`0046e8e4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046e/0046e8e4.md) [`0046f01c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046f/0046f01c.md) [`00672788`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00672/00672788.md) [`00682258`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00682/00682258.md) [`0092032c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00920/0092032c.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies, store_value

命令の説明率　旧版 99.07% / 新版 99.07%

優先判定に残った影響 `call_argument_candidate` 1件, `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "0091ffcc",
      "incomplete_value": false,
      "site": "0091ffd0",
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
            "const:f20:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0091ff78",
      "incomplete_value": false,
      "site": "0091ff7c",
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
            "const:e50:8"
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
      "definition_site": "00920298",
      "incomplete_value": true,
      "site": "0092029c",
      "value": [
        "live",
        "register:40a0:8"
      ]
    },
    "ordinal": 52,
    "slot": 1
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "0091ffd0",
      "DATA",
      [
        "storage",
        "00c85e50",
        null,
        "pointer"
      ]
    ]
  ],
  "added": [
    [
      "0091ffd0",
      "DATA",
      [
        "storage",
        "00c85f20",
        null,
        "pointer"
      ]
    ]
  ]
}
~~~


~~~diff
- 0091ffd0 ["COPY", "register:0:8", ["register:4040:8"]]
- 0091ffd0 ["INT_ADD", "register:40f0:8", ["const:91ffd0:8", "const:4:8"]]
- 0091ffd0 ["CALLIND", null, ["register:0:8"]]
+ 00920024 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00920024 ["INT_ADD", "register:40f0:8", ["const:920024:8", "const:4:8"]]
+ 00920024 ["CALLIND", null, ["register:0:8"]]
- 0092029c ["INT_ADD", "register:40f0:8", ["const:92029c:8", "const:4:8"]]
- 0092029c ["CALL", null, ["callee:00c57f50:8"]]
+ 009202f0 ["INT_ADD", "register:40f0:8", ["const:9202f0:8", "const:4:8"]]
+ 009202f0 ["CALL", null, ["callee:00c57f50:8"]]
- 0091ff78 ["COPY", "tmp:0:8", ["const:e50:8"]]
- 0091ff78 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 0091ff78 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 0091ff78 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 0091ffcc ["COPY", "tmp:0:8", ["const:f20:8"]]
+ 0091ffcc ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 0091ffcc ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 0091ffcc ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-8e069d4e1d9c56292c82a5e9d2a376c8"></a>

### [`009202d8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00920/009202d8.md) → [`0092032c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00920/0092032c.md) FUN_0092032c

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 2件 [`0091ff5c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0091f/0091ff5c.md) [`009204dc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00920/009204dc.md) · 呼出先 5件 [`00672748`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00672/00672748.md) [`00682324`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00682/00682324.md) [`00c53d00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c53/00c53d00.md) [`00c57e80`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e80.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md)
- 新版 呼出元 2件 [`0091ffb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0091f/0091ffb0.md) [`00920530`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00920/00920530.md) · 呼出先 5件 [`00672788`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00672/00672788.md) [`00682364`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00682/00682364.md) [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 70.54% / 新版 70.54%

優先判定に残った影響 `call_argument_candidate` 2件, `unresolved_branch_alignment` 7件, `unresolved_call_alignment` 3件, `unresolved_store_alignment` 3件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "00920334",
      "incomplete_value": false,
      "site": "00920338",
      "value": [
        "leaf",
        "const:ffffffffffffffff:8"
      ]
    },
    "ordinal": 2,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "00920488",
      "incomplete_value": true,
      "site": "0092048c",
      "value": [
        "live",
        "register:40a8:8"
      ]
    },
    "ordinal": 21,
    "slot": 1
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:009202f8",
      "DATA",
      [
        "storage",
        "00c85e70",
        null,
        "pointer"
      ]
    ],
    [
      "00920350",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "unmatched:00920458"
      ]
    ],
    [
      "unmatched:0092033c",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "009203ac"
      ]
    ]
  ],
  "added": [
    [
      "0092034c",
      "DATA",
      [
        "storage",
        "00c85f40",
        null,
        "pointer"
      ]
    ],
    [
      "00920350",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "009204ac"
      ]
    ],
    [
      "00920390",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "009203ac"
      ]
    ]
  ]
}
~~~


~~~diff
- 00920338 ["INT_ADD", "register:40f0:8", ["const:920338:8", "const:4:8"]]
- 00920338 ["CALL", null, ["callee:00c53da0:8"]]
+ 0092038c ["INT_ADD", "register:40f0:8", ["const:92038c:8", "const:4:8"]]
+ 0092038c ["CALL", null, ["callee:00c53da0:8"]]
- 0092048c ["INT_ADD", "register:40f0:8", ["const:92048c:8", "const:4:8"]]
- 0092048c ["CALL", null, ["callee:00c57f50:8"]]
+ 009204e0 ["INT_ADD", "register:40f0:8", ["const:9204e0:8", "const:4:8"]]
+ 009204e0 ["CALL", null, ["callee:00c57f50:8"]]
- 009202f4 ["COPY", "tmp:0:8", ["const:e70:8"]]
- 009202f4 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 009202f4 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 009202f4 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-8dd4b013dee1ed2d3479f0d0405e3d04"></a>

### [`00920500`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00920/00920500.md) → [`00920554`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00920/00920554.md) FUN_00920554

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 2件 [`00909fe0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00909/00909fe0.md) [`00920500`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00920/00920500.md) · 呼出先 22件 [`0043b764`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043b764.md) [`0043bb20`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043bb20.md) [`0043ddd8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043d/0043ddd8.md) [`00440f70`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00440/00440f70.md) [`00441cec`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00441/00441cec.md)
- 新版 呼出元 2件 [`0090a034`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0090a/0090a034.md) [`00920554`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00920/00920554.md) · 呼出先 22件 [`0043b7a4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b7a4.md) [`0043bb60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bb60.md) [`0043de18`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043d/0043de18.md) [`00440fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00440/00440fb0.md) [`00441d2c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00441/00441d2c.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 86.14% / 新版 86.14%

優先判定に残った影響 `call_argument_candidate` 14件, `unresolved_branch_alignment` 10件, `unresolved_call_alignment` 2件, `unresolved_store_alignment` 7件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "009206b0",
      "incomplete_value": true,
      "site": "009206b8",
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
            "const:f93:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0092065c",
      "incomplete_value": false,
      "site": "00920664",
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
    "new": null,
    "old": {
      "definition_site": "009206b0",
      "incomplete_value": true,
      "site": "009206bc",
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
    "new": null,
    "old": {
      "definition_site": "009207e8",
      "incomplete_value": true,
      "site": "009207ec",
      "value": [
        "INT_SUB",
        "8",
        [
          [
            "live",
            "register:40e8:8"
          ],
          [
            "leaf",
            "const:30:8"
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
      "unmatched:00920534",
      "WRITE",
      [
        "storage",
        "Stack[-0x78]",
        null,
        null
      ]
    ],
    [
      "unmatched:0092065c",
      "PARAM",
      [
        "storage",
        "002b7f53",
        null,
        null
      ]
    ],
    [
      "unmatched:009206b0",
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
      "00920588",
      "WRITE",
      [
        "storage",
        "Stack[-0x78]",
        null,
        null
      ]
    ],
    [
      "009206b0",
      "PARAM",
      [
        "storage",
        "002b7f93",
        null,
        null
      ]
    ],
    [
      "00920704",
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
- 00920664 ["INT_ADD", "register:40f0:8", ["const:920664:8", "const:4:8"]]
- 00920664 ["CALL", null, ["callee:00441ed4:8"]]
+ 009206b8 ["INT_ADD", "register:40f0:8", ["const:9206b8:8", "const:4:8"]]
+ 009206b8 ["CALL", null, ["callee:00441ed4:8"]]
- 009206bc ["INT_ADD", "register:40f0:8", ["const:9206bc:8", "const:4:8"]]
- 009206bc ["CALL", null, ["callee:00442834:8"]]
+ 00920710 ["INT_ADD", "register:40f0:8", ["const:920710:8", "const:4:8"]]
+ 00920710 ["CALL", null, ["callee:00442834:8"]]
- 009207ec ["INT_ADD", "register:40f0:8", ["const:9207ec:8", "const:4:8"]]
- 009207ec ["CALL", null, ["callee:00441ed4:8"]]
+ 00920840 ["INT_ADD", "register:40f0:8", ["const:920840:8", "const:4:8"]]
+ 00920840 ["CALL", null, ["callee:00441ed4:8"]]
~~~


<a id="compare-2d3c7cbf30178ee7eb07716b7f493169"></a>

### [`00920eec`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00920/00920eec.md) → [`00920f40`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00920/00920f40.md) FUN_00920f40

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 6件 [`009049b4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00904/009049b4.md) [`00920eec`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00920/00920eec.md) [`00a6fd88`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a6f/00a6fd88.md) [`00a73530`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a73/00a73530.md) [`00a7c4f4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a7c/00a7c4f4.md) · 呼出先 22件 [`0043b764`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043b764.md) [`0043bb20`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043bb20.md) [`0043ddd8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043d/0043ddd8.md) [`00440f70`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00440/00440f70.md) [`00441cec`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00441/00441cec.md)
- 新版 呼出元 6件 [`00904a08`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00904/00904a08.md) [`00920f40`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00920/00920f40.md) [`00a6fdf8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a6f/00a6fdf8.md) [`00a735a0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a73/00a735a0.md) [`00a7c564`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a7c/00a7c564.md) · 呼出先 22件 [`0043b7a4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b7a4.md) [`0043bb60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bb60.md) [`0043de18`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043d/0043de18.md) [`00440fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00440/00440fb0.md) [`00441d2c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00441/00441d2c.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, store_condition, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 82.32% / 新版 82.32%

優先判定に残った影響 `call_argument_candidate` 9件, `store_condition` 10件, `unresolved_branch_alignment` 12件, `unresolved_call_alignment` 5件, `unresolved_store_alignment` 3件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00921094",
      "incomplete_value": true,
      "site": "00921098",
      "value": [
        "INT_SUB",
        "8",
        [
          [
            "live",
            "register:40e8:8"
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
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00921090",
      "incomplete_value": false,
      "site": "00921098",
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
    "old": null,
    "ordinal": 2,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "0092112c",
      "incomplete_value": true,
      "site": "0092113c",
      "value": [
        "INT_SUB",
        "8",
        [
          [
            "live",
            "register:4040:8"
          ],
          [
            "leaf",
            "const:2:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "009210d8",
      "incomplete_value": true,
      "site": "009210e8",
      "value": [
        "INT_SUB",
        "8",
        [
          [
            "INT_SUB",
            "8",
            [
              [
                "live",
                "register:40b0:8"
              ],
              [
                "live",
                "register:40e0:8"
              ]
            ]
          ],
          [
            "leaf",
            "const:2:8"
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
      "unmatched:00920f54",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00921194"
      ]
    ],
    [
      "unmatched:00920f9c",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00921194"
      ]
    ],
    [
      "unmatched:00920fa4",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "009216a4"
      ]
    ]
  ],
  "added": [
    [
      "00920fa8",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00921194"
      ]
    ],
    [
      "00920ff0",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00921194"
      ]
    ],
    [
      "00920ff8",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "009216a4"
      ]
    ]
  ]
}
~~~


~~~diff
- 00921044 ["INT_ADD", "register:40f0:8", ["const:921044:8", "const:4:8"]]
- 00921044 ["CALL", null, ["callee:00441ed4:8"]]
+ 00921098 ["INT_ADD", "register:40f0:8", ["const:921098:8", "const:4:8"]]
+ 00921098 ["CALL", null, ["callee:00441ed4:8"]]
- 00921098 ["COPY", "register:4010:8", ["register:40b8:8"]]
- 009210e8 ["INT_ADD", "register:40f0:8", ["const:9210e8:8", "const:4:8"]]
- 009210e8 ["CALL", null, ["callee:00441e00:8"]]
+ 0092113c ["INT_ADD", "register:40f0:8", ["const:92113c:8", "const:4:8"]]
+ 0092113c ["CALL", null, ["callee:00441e00:8"]]
~~~


<a id="compare-a2c74fda9610e38beba94aa072dc067f"></a>

### [`0092176c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00921/0092176c.md) → [`009217c0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00921/009217c0.md) FUN_009217c0

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)

変更の種類 constant, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, store_value, unresolved_store_alignment

命令の説明率　旧版 76.92% / 新版 76.92%

優先判定に残った影響 `store_value` 1件, `unresolved_store_alignment` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "009217e4",
      "incomplete_value": false,
      "site": "009217e4",
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
            "const:f60:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00921790",
      "incomplete_value": false,
      "site": "00921790",
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
            "const:e90:8"
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
      "unmatched:00921770",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "009217e4",
      "DATA",
      [
        "storage",
        "00c85e90",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "009217c4",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "009217e4",
      "DATA",
      [
        "storage",
        "00c85f60",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00921770 ["INT_ADD", "tmp:0:8", ["register:8:8", "const:10:8"]]
- 00921770 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4098:8"]]
- 00921780 ["INT_ADD", "register:40f0:8", ["const:921780:8", "const:4:8"]]
- 00921780 ["CALL", null, ["callee:00c57f60:8"]]
+ 009217d4 ["INT_ADD", "register:40f0:8", ["const:9217d4:8", "const:4:8"]]
+ 009217d4 ["CALL", null, ["callee:00c57f60:8"]]
- 0092178c ["COPY", "tmp:0:8", ["const:e90:8"]]
- 0092178c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 0092178c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 0092178c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 009217e0 ["COPY", "tmp:0:8", ["const:f60:8"]]
+ 009217e0 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 009217e0 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 009217e0 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-d5e2cfe72b7d72a2f6544a80f22ad9d8"></a>

### [`00921804`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00921/00921804.md) → [`00921858`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00921/00921858.md) FUN_00921858

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
      "unmatched:00921804",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "unmatched:00921808",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "unmatched:00921828",
      "DATA",
      [
        "storage",
        "00c85f10",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00921858",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "0092185c",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "0092187c",
      "DATA",
      [
        "storage",
        "00c85fe0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00921804 ["COPY", "tmp:0:8", ["register:40e8:8"]]
- 00921804 ["COPY", "tmp:1:8", ["register:40f0:8"]]
- 00921804 ["INT_ADD", "register:8:8", ["register:8:8", "const:ffffffffffffffe0:8"]]
- 00921804 ["STORE", null, ["const:1b1:8", "register:8:8", "tmp:0:8"]]
- 00921808 ["INT_ADD", "tmp:0:8", ["register:8:8", "const:10:8"]]
- 00921808 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4098:8"]]
- 0092180c ["COPY", "register:40e8:8", ["register:8:8"]]
~~~


<a id="compare-28df5066b8f46835c1a3fcad9f8c06f0"></a>

### [`00921890`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00921/00921890.md) → [`009218e4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00921/009218e4.md) FUN_009218e4

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
      "definition_site": "009218f8",
      "incomplete_value": false,
      "site": "009218fc",
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
            "const:60:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "009218a4",
      "incomplete_value": false,
      "site": "009218a8",
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
            "const:f90:8"
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
      "009218fc",
      "DATA",
      [
        "storage",
        "00c85f90",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "009218fc",
      "DATA",
      [
        "storage",
        "00c86060",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 0092189c ["INT_ADD", "register:40f0:8", ["const:92189c:8", "const:4:8"]]
- 0092189c ["CALL", null, ["callee:00c57f60:8"]]
+ 009218f0 ["INT_ADD", "register:40f0:8", ["const:9218f0:8", "const:4:8"]]
+ 009218f0 ["CALL", null, ["callee:00c57f60:8"]]
- 009218a0 ["COPY", "register:4040:8", ["const:c85000:8"]]
+ 009218f4 ["COPY", "register:4040:8", ["const:c86000:8"]]
- 009218a4 ["COPY", "tmp:0:8", ["const:f90:8"]]
- 009218a4 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 009218a4 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 009218a4 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 009218f8 ["COPY", "tmp:0:8", ["const:60:8"]]
+ 009218f8 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 009218f8 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 009218f8 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


