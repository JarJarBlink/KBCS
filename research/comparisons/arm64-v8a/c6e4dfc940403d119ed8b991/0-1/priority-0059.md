# v16.0.1 → v16.0.2 · 最優先の変更候補 (59)

[一覧の目次](README.md)

<a id="compare-b6d53102a59285e9ef717c7367a376b8"></a>

### [`009a3a68`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009a3/009a3a68.md) → [`009a3abc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009a3/009a3abc.md) FUN_009a3abc

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
      "definition_site": "009a3ac8",
      "incomplete_value": false,
      "site": "009a3ac8",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c88000:8"
          ],
          [
            "leaf",
            "const:4e0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "009a3a74",
      "incomplete_value": false,
      "site": "009a3a74",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c88000:8"
          ],
          [
            "leaf",
            "const:410:8"
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
      "009a3ac8",
      "DATA",
      [
        "storage",
        "00c88410",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "009a3ac8",
      "DATA",
      [
        "storage",
        "00c884e0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 009a3a70 ["COPY", "tmp:0:8", ["const:410:8"]]
- 009a3a70 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 009a3a70 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 009a3a70 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 009a3ac4 ["COPY", "tmp:0:8", ["const:4e0:8"]]
+ 009a3ac4 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 009a3ac4 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 009a3ac4 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
~~~


<a id="compare-fe5ab6b8de25fb837b4c275753f2ad73"></a>

### [`009a3ac8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009a3/009a3ac8.md) → [`009a3b1c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009a3/009a3b1c.md) FUN_009a3b1c

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)

変更の種類 comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, operands_and_dependencies, operation_sequence, unresolved_return_alignment

命令の説明率　旧版 66.67% / 新版 66.67%

優先判定に残った影響 `unresolved_return_alignment` 1件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "009a3b34",
      "DATA",
      [
        "storage",
        "00c88490",
        null,
        "undefined *"
      ]
    ],
    [
      "unmatched:009a3ae4",
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
      "009a3b34",
      "DATA",
      [
        "storage",
        "00c88560",
        null,
        "undefined *"
      ]
    ],
    [
      "009a3b38",
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
- 009a3ad4 ["INT_ADD", "register:40f0:8", ["const:9a3ad4:8", "const:4:8"]]
- 009a3ad4 ["CALL", null, ["callee:00c57f60:8"]]
+ 009a3b28 ["INT_ADD", "register:40f0:8", ["const:9a3b28:8", "const:4:8"]]
+ 009a3b28 ["CALL", null, ["callee:00c57f60:8"]]
- 009a3adc ["COPY", "tmp:0:8", ["const:490:8"]]
- 009a3adc ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 009a3adc ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 009a3adc ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 009a3ae4 ["COPY", "tmp:0:8", ["register:8:8"]]
- 009a3ae4 ["INT_ADD", "register:8:8", ["register:8:8", "const:10:8"]]
- 009a3ae4 ["LOAD", "tmp:1:8", ["const:1b1:8", "tmp:0:8"]]
- 009a3ae4 ["INT_ADD", "tmp:2:8", ["tmp:0:8", "const:8:8"]]
~~~


<a id="compare-e3315686342321e5e1ee126eb32554d6"></a>

### [`009a3aec`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009a3/009a3aec.md) → [`009a3b40`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009a3/009a3b40.md) FUN_009a3b40

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
      "definition_site": "009a3b44",
      "incomplete_value": false,
      "site": "009a3b48",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c88000:8"
          ],
          [
            "leaf",
            "const:560:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "009a3af0",
      "incomplete_value": false,
      "site": "009a3af4",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c88000:8"
          ],
          [
            "leaf",
            "const:490:8"
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
      "009a3b48",
      "DATA",
      [
        "storage",
        "00c88490",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "009a3b48",
      "DATA",
      [
        "storage",
        "00c88560",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 009a3af0 ["COPY", "tmp:0:8", ["const:490:8"]]
- 009a3af0 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 009a3af0 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 009a3af0 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 009a3b44 ["COPY", "tmp:0:8", ["const:560:8"]]
+ 009a3b44 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 009a3b44 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 009a3b44 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-beb2702eb127a6a143f254bcf548b0ed"></a>

### [`009a3b04`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009a3/009a3b04.md) → [`009a3b58`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009a3/009a3b58.md) FUN_009a3b58

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 3件 [`0047acf4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047a/0047acf4.md) [`0047cdd4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047c/0047cdd4.md) [`008b9178`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008b9/008b9178.md)
- 新版 呼出元 0件  · 呼出先 3件 [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md) [`0047ce14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047ce14.md) [`008b91d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b9/008b91d0.md)

変更の種類 branch_condition_or_target, call, call_count, cfg_edge_inventory, constant, control_flow, operands_and_dependencies, operation_sequence, unresolved_call_alignment

命令の説明率　旧版 94.44% / 新版 94.44%

優先判定に残った影響 `unresolved_call_alignment` 1件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:009a3b28",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047acf4"
      ]
    ]
  ],
  "added": [
    [
      "009a3b7c",
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
- 009a3b0c ["BOOL_NEGATE", "tmp:0:1", ["register:101:1"]]
- 009a3b0c ["CBRANCH", null, ["local:b4:8", "tmp:0:1"]]
+ 009a3b60 ["BOOL_NEGATE", "tmp:0:1", ["register:101:1"]]
+ 009a3b60 ["CBRANCH", null, ["local:b5:8", "tmp:0:1"]]
- 009a3b14 ["INT_NOTEQUAL", "tmp:0:1", ["register:4040:4", "const:0:4"]]
- 009a3b14 ["CBRANCH", null, ["local:b4:8", "tmp:0:1"]]
+ 009a3b68 ["INT_NOTEQUAL", "tmp:0:1", ["register:4040:4", "const:0:4"]]
+ 009a3b68 ["CBRANCH", null, ["local:b5:8", "tmp:0:1"]]
- 009a3b28 ["INT_ADD", "register:40f0:8", ["const:9a3b28:8", "const:4:8"]]
- 009a3b28 ["CALL", null, ["ram:47acf4:8"]]
~~~


<a id="compare-a9ae46adebc2ca3d912d46f07a49b250"></a>

### [`009a3b78`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009a3/009a3b78.md) → [`009a3bcc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009a3/009a3bcc.md) FUN_009a3bcc

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
      "definition_site": "009a3be0",
      "incomplete_value": false,
      "site": "009a3be4",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c88000:8"
          ],
          [
            "leaf",
            "const:5e0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "009a3b8c",
      "incomplete_value": false,
      "site": "009a3b90",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c88000:8"
          ],
          [
            "leaf",
            "const:510:8"
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
      "009a3be4",
      "DATA",
      [
        "storage",
        "00c88510",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "009a3be4",
      "DATA",
      [
        "storage",
        "00c885e0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 009a3b84 ["INT_ADD", "register:40f0:8", ["const:9a3b84:8", "const:4:8"]]
- 009a3b84 ["CALL", null, ["callee:00c57f60:8"]]
+ 009a3bd8 ["INT_ADD", "register:40f0:8", ["const:9a3bd8:8", "const:4:8"]]
+ 009a3bd8 ["CALL", null, ["callee:00c57f60:8"]]
- 009a3b8c ["COPY", "tmp:0:8", ["const:510:8"]]
- 009a3b8c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 009a3b8c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 009a3b8c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 009a3be0 ["COPY", "tmp:0:8", ["const:5e0:8"]]
+ 009a3be0 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 009a3be0 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 009a3be0 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-38bed5f6a14ae57dd0949e00c143b505"></a>

### [`009a3b9c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009a3/009a3b9c.md) → [`009a3bf0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009a3/009a3bf0.md) FUN_009a3bf0

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
      "definition_site": "009a3bf4",
      "incomplete_value": false,
      "site": "009a3bf8",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c88000:8"
          ],
          [
            "leaf",
            "const:5e0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "009a3ba0",
      "incomplete_value": false,
      "site": "009a3ba4",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c88000:8"
          ],
          [
            "leaf",
            "const:510:8"
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
      "009a3bf8",
      "DATA",
      [
        "storage",
        "00c88510",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "009a3bf8",
      "DATA",
      [
        "storage",
        "00c885e0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 009a3ba0 ["COPY", "tmp:0:8", ["const:510:8"]]
- 009a3ba0 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 009a3ba0 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 009a3ba0 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 009a3bf4 ["COPY", "tmp:0:8", ["const:5e0:8"]]
+ 009a3bf4 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 009a3bf4 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 009a3bf4 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-bb2b91fb9a7543c7736a7ebeba045e21"></a>

### [`009a3bb4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009a3/009a3bb4.md) → [`009a3c08`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009a3/009a3c08.md) FUN_009a3c08

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 3件 [`0047acf4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047a/0047acf4.md) [`0047cdd4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047c/0047cdd4.md) [`008b9178`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008b9/008b9178.md)
- 新版 呼出元 0件  · 呼出先 3件 [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md) [`0047ce14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047ce14.md) [`008b91d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b9/008b91d0.md)

変更の種類 branch_condition_or_target, call, call_count, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_call_alignment

命令の説明率　旧版 77.78% / 新版 77.78%

優先判定に残った影響 `unresolved_branch_alignment` 1件, `unresolved_call_alignment` 1件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:009a3bbc",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "009a3c4c"
      ]
    ],
    [
      "unmatched:009a3bd8",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047acf4"
      ]
    ]
  ],
  "added": [
    [
      "009a3c10",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "009a3c4c"
      ]
    ],
    [
      "009a3c2c",
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
- 009a3bb4 ["COPY", "tmp:0:8", ["register:4010:8"]]
- 009a3bb4 ["LOAD", "tmp:1:4", ["const:1b1:8", "tmp:0:8"]]
- 009a3bb4 ["INT_ZEXT", "register:4040:8", ["tmp:1:4"]]
- 009a3bb8 ["COPY", "tmp:0:4", ["const:2:4"]]
- 009a3bb8 ["INT_LESSEQUAL", "register:105:1", ["const:2:4", "register:4040:4"]]
- 009a3bb8 ["INT_SBORROW", "register:106:1", ["register:4040:4", "const:2:4"]]
- 009a3bb8 ["INT_SUB", "tmp:1:4", ["register:4040:4", "tmp:0:4"]]
- 009a3bbc ["BOOL_NEGATE", "tmp:0:1", ["register:101:1"]]
- 009a3bbc ["CBRANCH", null, ["local:b6:8", "tmp:0:1"]]
~~~


<a id="compare-191def64daac0c6d0f90b17763285c41"></a>

### [`009a3c28`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009a3/009a3c28.md) → [`009a3c7c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009a3/009a3c7c.md) FUN_009a3c7c

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
      "definition_site": "009a3c90",
      "incomplete_value": false,
      "site": "009a3c94",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c88000:8"
          ],
          [
            "leaf",
            "const:660:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "009a3c3c",
      "incomplete_value": false,
      "site": "009a3c40",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c88000:8"
          ],
          [
            "leaf",
            "const:590:8"
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
      "009a3c94",
      "DATA",
      [
        "storage",
        "00c88590",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "009a3c94",
      "DATA",
      [
        "storage",
        "00c88660",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 009a3c34 ["INT_ADD", "register:40f0:8", ["const:9a3c34:8", "const:4:8"]]
- 009a3c34 ["CALL", null, ["callee:00c57f60:8"]]
+ 009a3c88 ["INT_ADD", "register:40f0:8", ["const:9a3c88:8", "const:4:8"]]
+ 009a3c88 ["CALL", null, ["callee:00c57f60:8"]]
- 009a3c3c ["COPY", "tmp:0:8", ["const:590:8"]]
- 009a3c3c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 009a3c3c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 009a3c3c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 009a3c90 ["COPY", "tmp:0:8", ["const:660:8"]]
+ 009a3c90 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 009a3c90 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 009a3c90 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-297ab5d2d18289a3fcc1bd55a96df3c8"></a>

### [`009a3c4c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009a3/009a3c4c.md) → [`009a3ca0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009a3/009a3ca0.md) FUN_009a3ca0

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
      "unmatched:009a3c54",
      "DATA",
      [
        "storage",
        "00c88590",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "009a3ca8",
      "DATA",
      [
        "storage",
        "00c88660",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 009a3c4c ["COPY", "register:4040:8", ["const:c88000:8"]]
- 009a3c50 ["COPY", "tmp:0:8", ["const:590:8"]]
- 009a3c50 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 009a3c50 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 009a3c50 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 009a3c54 ["COPY", "tmp:0:8", ["register:4008:8"]]
- 009a3c54 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4040:8"]]
~~~


<a id="compare-6410b134b5e8add9b4c39fd2e9206a09"></a>

### [`009a3c64`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009a3/009a3c64.md) → [`009a3cb8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009a3/009a3cb8.md) FUN_009a3cb8

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
      "site": "009a3cdc",
      "value": [
        "leaf",
        "ram:47ad34:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "009a3c88",
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
      "009a3cdc",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047acf4"
      ]
    ]
  ],
  "added": [
    [
      "009a3cdc",
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
- 009a3c88 ["INT_ADD", "register:40f0:8", ["const:9a3c88:8", "const:4:8"]]
- 009a3c88 ["CALL", null, ["ram:47acf4:8"]]
+ 009a3cdc ["INT_ADD", "register:40f0:8", ["const:9a3cdc:8", "const:4:8"]]
+ 009a3cdc ["CALL", null, ["ram:47ad34:8"]]
- 009a3c94 ["INT_ADD", "register:40f0:8", ["const:9a3c94:8", "const:4:8"]]
- 009a3c94 ["CALL", null, ["callee:0047ce14:8"]]
+ 009a3ce8 ["INT_ADD", "register:40f0:8", ["const:9a3ce8:8", "const:4:8"]]
+ 009a3ce8 ["CALL", null, ["callee:0047ce14:8"]]
~~~


<a id="compare-2bc7bc301c0a3ef47d7cc32fa073873f"></a>

### [`009a3cd4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009a3/009a3cd4.md) → [`009a3d28`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009a3/009a3d28.md) _INIT_191

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 5件 [`0043ae70`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043a/0043ae70.md) [`0043b7f8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043b7f8.md) [`00c57e30`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e30.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md)
- 新版 呼出元 0件  · 呼出先 5件 [`0043aeb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043a/0043aeb0.md) [`0043b838`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b838.md) [`00c57f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f00.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_store_alignment

命令の説明率　旧版 76.27% / 新版 76.27%

優先判定に残った影響 `call_argument_candidate` 4件, `unresolved_store_alignment` 14件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "009a3e84",
      "incomplete_value": false,
      "site": "009a3e88",
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
            "const:c40:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "009a3e30",
      "incomplete_value": false,
      "site": "009a3e34",
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
            "const:b40:8"
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
      "definition_site": "009a3e74",
      "incomplete_value": false,
      "site": "009a3e88",
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
                "const:1123000:8"
              ],
              [
                "leaf",
                "const:c40:8"
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
      "definition_site": "009a3e20",
      "incomplete_value": false,
      "site": "009a3e34",
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
                "const:1123000:8"
              ],
              [
                "leaf",
                "const:b40:8"
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
    "ordinal": 0,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "009a3e60",
      "incomplete_value": true,
      "site": "009a3e70",
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
      "unmatched:009a3cd8",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "unmatched:009a3d04",
      "WRITE",
      [
        "storage",
        "Stack[-0x38]",
        null,
        null
      ]
    ],
    [
      "unmatched:009a3d10",
      "READ",
      [
        "storage",
        "002b7f26",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "009a3d2c",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "009a3d58",
      "WRITE",
      [
        "storage",
        "Stack[-0x38]",
        null,
        null
      ]
    ],
    [
      "009a3d64",
      "READ",
      [
        "storage",
        "002b7f66",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 009a3e34 ["INT_ADD", "register:40f0:8", ["const:9a3e34:8", "const:4:8"]]
- 009a3e34 ["CALL", null, ["callee:0043b838:8"]]
+ 009a3e88 ["INT_ADD", "register:40f0:8", ["const:9a3e88:8", "const:4:8"]]
+ 009a3e88 ["CALL", null, ["callee:0043b838:8"]]
- 009a3e70 ["INT_ADD", "register:40f0:8", ["const:9a3e70:8", "const:4:8"]]
- 009a3e70 ["CALL", null, ["callee:0043b838:8"]]
+ 009a3ec4 ["INT_ADD", "register:40f0:8", ["const:9a3ec4:8", "const:4:8"]]
+ 009a3ec4 ["CALL", null, ["callee:0043b838:8"]]
+ 009a3e70 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:10:8"]]
+ 009a3e70 ["COPY", "tmp:1:8", ["const:0:8"]]
+ 009a3e70 ["STORE", null, ["const:1b1:8", "tmp:0:8", "tmp:1:8"]]
~~~


<a id="compare-f9f2145a9960cc00afc63bbea529ba6d"></a>

### [`009a4100`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009a4/009a4100.md) → [`009a4154`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009a4/009a4154.md) FUN_009a4154

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `bounded` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 5件 [`0094726c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00947/0094726c.md) [`009617a0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00961/009617a0.md) [`00963fd8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00963/00963fd8.md) [`0098dc08`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0098d/0098dc08.md) [`0099703c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00997/0099703c.md) · 呼出先 2件 [`008514f8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00851/008514f8.md) [`0099691c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00996/0099691c.md)
- 新版 呼出元 5件 [`009472c0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00947/009472c0.md) [`009617f4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00961/009617f4.md) [`0096402c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00964/0096402c.md) [`0098dc5c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0098d/0098dc5c.md) [`00997090`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00997/00997090.md) · 呼出先 2件 [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md) [`00996970`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00996/00996970.md)

変更の種類 branch_condition_or_target, call, call_count, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 58.48% / 新版 58.48%

優先判定に残った影響 `unresolved_call_alignment` 7件, `unresolved_store_alignment` 5件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:009a4100",
      "WRITE",
      [
        "storage",
        "Stack[-0x40]",
        null,
        null
      ]
    ],
    [
      "unmatched:009a4104",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "unmatched:009a4108",
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
      "009a4154",
      "WRITE",
      [
        "storage",
        "Stack[-0x40]",
        null,
        null
      ]
    ],
    [
      "009a4158",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "009a415c",
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
- 009a4100 ["COPY", "tmp:0:8", ["register:40e8:8"]]
- 009a4100 ["COPY", "tmp:1:8", ["register:40f0:8"]]
- 009a4100 ["INT_ADD", "register:8:8", ["register:8:8", "const:ffffffffffffffc0:8"]]
- 009a4100 ["STORE", null, ["const:1b1:8", "register:8:8", "tmp:0:8"]]
- 009a4104 ["INT_ADD", "tmp:0:8", ["register:8:8", "const:10:8"]]
- 009a4104 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:40b8:8"]]
- 009a4108 ["COPY", "tmp:0:8", ["register:40b0:8"]]
- 009a4108 ["COPY", "tmp:1:8", ["register:40a8:8"]]
- 009a4108 ["INT_ADD", "tmp:2:8", ["register:8:8", "const:20:8"]]
- 009a4108 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
~~~


<a id="compare-75a87fd610f600e3a6d42d23d4904e82"></a>

### [`009a4734`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009a4/009a4734.md) → [`009a4788`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009a4/009a4788.md) _INIT_192

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 5件 [`0043ae70`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043a/0043ae70.md) [`0043b7f8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043b7f8.md) [`00c57e30`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e30.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md)
- 新版 呼出元 0件  · 呼出先 5件 [`0043aeb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043a/0043aeb0.md) [`0043b838`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b838.md) [`00c57f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f00.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)

変更の種類 call_argument_candidate, comparison, comparison_count, constant, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, store_value, unresolved_store_alignment

命令の説明率　旧版 87.01% / 新版 87.01%

優先判定に残った影響 `call_argument_candidate` 3件, `store_value` 3件, `unresolved_store_alignment` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "009a4844",
      "incomplete_value": true,
      "site": "009a4860",
      "value": [
        "LOAD",
        "16",
        [
          [
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
      "definition_site": "009a47f0",
      "incomplete_value": true,
      "site": "009a480c",
      "value": [
        "LOAD",
        "16",
        [
          [
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
      "definition_site": "009a4864",
      "incomplete_value": true,
      "site": "009a4880",
      "value": [
        "LOAD",
        "16",
        [
          [
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
      "definition_site": "009a4810",
      "incomplete_value": true,
      "site": "009a482c",
      "value": [
        "LOAD",
        "16",
        [
          [
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
      "definition_site": "009a4884",
      "incomplete_value": true,
      "site": "009a48c8",
      "value": [
        "LOAD",
        "16",
        [
          [
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
      "definition_site": "009a4830",
      "incomplete_value": true,
      "site": "009a4874",
      "value": [
        "LOAD",
        "16",
        [
          [
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
      "009a47c4",
      "READ",
      [
        "storage",
        "002b7f26",
        null,
        "string"
      ]
    ],
    [
      "unmatched:009a478c",
      "WRITE",
      [
        "storage",
        "Stack[-0x10f]",
        null,
        null
      ]
    ],
    [
      "unmatched:009a4794",
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
      "009a47c4",
      "READ",
      [
        "storage",
        "002b7f66",
        null,
        "string"
      ]
    ],
    [
      "009a47e0",
      "WRITE",
      [
        "storage",
        "Stack[-0x10f]",
        null,
        null
      ]
    ],
    [
      "009a47e8",
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
- 009a4968 ["INT_ADD", "register:40f0:8", ["const:9a4968:8", "const:4:8"]]
- 009a4968 ["CALL", null, ["callee:00c57f00:8"]]
+ 009a49bc ["INT_ADD", "register:40f0:8", ["const:9a49bc:8", "const:4:8"]]
+ 009a49bc ["CALL", null, ["callee:00c57f00:8"]]
- 009a4760 ["COPY", "tmp:0:8", ["const:b58:8"]]
- 009a4760 ["INT_CARRY", "register:105:1", ["register:4098:8", "tmp:0:8"]]
- 009a4760 ["INT_SCARRY", "register:106:1", ["register:4098:8", "tmp:0:8"]]
- 009a4760 ["INT_ADD", "tmp:1:8", ["register:4098:8", "tmp:0:8"]]
+ 009a47b4 ["COPY", "tmp:0:8", ["const:c58:8"]]
+ 009a47b4 ["INT_CARRY", "register:105:1", ["register:4098:8", "tmp:0:8"]]
+ 009a47b4 ["INT_SCARRY", "register:106:1", ["register:4098:8", "tmp:0:8"]]
+ 009a47b4 ["INT_ADD", "tmp:1:8", ["register:4098:8", "tmp:0:8"]]
- 009a4768 ["COPY", "register:4048:8", ["const:2b7000:8"]]
~~~


<a id="compare-8a7ff18b78adfc0101a885e8b50247ab"></a>

### [`009a4ac4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009a4/009a4ac4.md) → [`009a4b18`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009a4/009a4b18.md) _INIT_193

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 5件 [`0043ae70`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043a/0043ae70.md) [`0043b7f8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043b7f8.md) [`00c57e30`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e30.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md)
- 新版 呼出元 0件  · 呼出先 5件 [`0043aeb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043a/0043aeb0.md) [`0043b838`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b838.md) [`00c57f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f00.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)

変更の種類 branch_condition_or_target, call_argument_candidate, comparison, comparison_count, constant, control_flow, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_store_alignment

命令の説明率　旧版 79.66% / 新版 79.66%

優先判定に残った影響 `call_argument_candidate` 7件, `unresolved_branch_alignment` 1件, `unresolved_store_alignment` 12件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "009a4c74",
      "incomplete_value": false,
      "site": "009a4c78",
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
            "const:c70:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "009a4c20",
      "incomplete_value": false,
      "site": "009a4c24",
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
            "const:b70:8"
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
      "definition_site": "009a4c64",
      "incomplete_value": false,
      "site": "009a4c78",
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
                "const:1123000:8"
              ],
              [
                "leaf",
                "const:c70:8"
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
      "definition_site": "009a4c10",
      "incomplete_value": false,
      "site": "009a4c24",
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
                "const:1123000:8"
              ],
              [
                "leaf",
                "const:b70:8"
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
    "ordinal": 0,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "009a4c50",
      "incomplete_value": true,
      "site": "009a4c60",
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
      "unmatched:009a4af4",
      "WRITE",
      [
        "storage",
        "Stack[-0x38]",
        null,
        null
      ]
    ],
    [
      "unmatched:009a4b00",
      "READ",
      [
        "storage",
        "002b7f26",
        null,
        "string"
      ]
    ],
    [
      "unmatched:009a4b1c",
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
      "009a4b48",
      "WRITE",
      [
        "storage",
        "Stack[-0x38]",
        null,
        null
      ]
    ],
    [
      "009a4b54",
      "READ",
      [
        "storage",
        "002b7f66",
        null,
        "string"
      ]
    ],
    [
      "009a4b70",
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
- 009a4c24 ["INT_ADD", "register:40f0:8", ["const:9a4c24:8", "const:4:8"]]
- 009a4c24 ["CALL", null, ["callee:0043b838:8"]]
+ 009a4c78 ["INT_ADD", "register:40f0:8", ["const:9a4c78:8", "const:4:8"]]
+ 009a4c78 ["CALL", null, ["callee:0043b838:8"]]
- 009a4c60 ["INT_ADD", "register:40f0:8", ["const:9a4c60:8", "const:4:8"]]
- 009a4c60 ["CALL", null, ["callee:0043b838:8"]]
+ 009a4cb4 ["INT_ADD", "register:40f0:8", ["const:9a4cb4:8", "const:4:8"]]
+ 009a4cb4 ["CALL", null, ["callee:0043b838:8"]]
+ 009a4c60 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:10:8"]]
+ 009a4c60 ["COPY", "tmp:1:8", ["const:0:8"]]
+ 009a4c60 ["STORE", null, ["const:1b1:8", "tmp:0:8", "tmp:1:8"]]
~~~


<a id="compare-d069b7567973c32d751db26540d7232e"></a>

### [`009a4e5c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009a4/009a4e5c.md) → [`009a4eb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009a4/009a4eb0.md) FUN_009a4eb0

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`0089bc8c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0089b/0089bc8c.md) · 呼出先 1件 [`0048e0b8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0048e/0048e0b8.md)
- 新版 呼出元 1件 [`0089bce4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0089b/0089bce4.md) · 呼出先 1件 [`0048e0f8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048e/0048e0f8.md)

変更の種類 call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_store_alignment

命令の説明率　旧版 54.55% / 新版 54.55%

優先判定に残った影響 `call_argument_candidate` 1件, `unresolved_store_alignment` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "009a4ec0",
      "incomplete_value": false,
      "site": "009a4ec8",
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
            "const:ca0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "009a4e6c",
      "incomplete_value": false,
      "site": "009a4e74",
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
            "const:ba0:8"
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
      "unmatched:009a4e5c",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "unmatched:009a4e6c",
      "PARAM",
      [
        "storage",
        "01123ba0",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "009a4eb0",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "009a4ec0",
      "PARAM",
      [
        "storage",
        "01123ca0",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 009a4e74 ["INT_ADD", "register:40f0:8", ["const:9a4e74:8", "const:4:8"]]
- 009a4e74 ["CALL", null, ["callee:0048e0f8:8"]]
+ 009a4ec8 ["INT_ADD", "register:40f0:8", ["const:9a4ec8:8", "const:4:8"]]
+ 009a4ec8 ["CALL", null, ["callee:0048e0f8:8"]]
- 009a4e5c ["COPY", "tmp:0:8", ["register:40e8:8"]]
- 009a4e5c ["COPY", "tmp:1:8", ["register:40f0:8"]]
- 009a4e5c ["INT_ADD", "register:8:8", ["register:8:8", "const:fffffffffffffff0:8"]]
- 009a4e5c ["STORE", null, ["const:1b1:8", "register:8:8", "tmp:0:8"]]
- 009a4e60 ["COPY", "register:40e8:8", ["register:8:8"]]
~~~


<a id="compare-32a7f0cfb3b9b2e339fa00b8f52537a8"></a>

### [`009a4e88`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009a4/009a4e88.md) → [`009a4edc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009a4/009a4edc.md) FUN_009a4edc

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`0089bc8c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0089b/0089bc8c.md) · 呼出先 1件 [`0048e0b8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0048e/0048e0b8.md)
- 新版 呼出元 1件 [`0089bce4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0089b/0089bce4.md) · 呼出先 1件 [`0048e0f8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048e/0048e0f8.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 90.91% / 新版 90.91%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "009a4eec",
      "incomplete_value": false,
      "site": "009a4ef4",
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
            "const:cc0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "009a4e98",
      "incomplete_value": false,
      "site": "009a4ea0",
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
            "const:bc0:8"
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
      "009a4eec",
      "PARAM",
      [
        "storage",
        "01123bc0",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "009a4eec",
      "PARAM",
      [
        "storage",
        "01123cc0",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 009a4ea0 ["INT_ADD", "register:40f0:8", ["const:9a4ea0:8", "const:4:8"]]
- 009a4ea0 ["CALL", null, ["callee:0048e0f8:8"]]
+ 009a4ef4 ["INT_ADD", "register:40f0:8", ["const:9a4ef4:8", "const:4:8"]]
+ 009a4ef4 ["CALL", null, ["callee:0048e0f8:8"]]
- 009a4e98 ["COPY", "tmp:0:8", ["const:bc0:8"]]
- 009a4e98 ["INT_CARRY", "register:105:1", ["register:4008:8", "tmp:0:8"]]
- 009a4e98 ["INT_SCARRY", "register:106:1", ["register:4008:8", "tmp:0:8"]]
- 009a4e98 ["INT_ADD", "tmp:1:8", ["register:4008:8", "tmp:0:8"]]
+ 009a4eec ["COPY", "tmp:0:8", ["const:cc0:8"]]
+ 009a4eec ["INT_CARRY", "register:105:1", ["register:4008:8", "tmp:0:8"]]
+ 009a4eec ["INT_SCARRY", "register:106:1", ["register:4008:8", "tmp:0:8"]]
+ 009a4eec ["INT_ADD", "tmp:1:8", ["register:4008:8", "tmp:0:8"]]
~~~


<a id="compare-aaf1a3ea987b775e55252d2fe88aa2cc"></a>

### [`009a4eb4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009a4/009a4eb4.md) → [`009a4f08`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009a4/009a4f08.md) FUN_009a4f08

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `bounded` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`0089bc8c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0089b/0089bc8c.md) · 呼出先 12件 [`0048e194`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0048e/0048e194.md) [`00493c78`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00493/00493c78.md) [`00493c80`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00493/00493c80.md) [`00493ce8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00493/00493ce8.md) [`009a50c0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009a5/009a50c0.md)
- 新版 呼出元 1件 [`0089bce4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0089b/0089bce4.md) · 呼出先 12件 [`0048e1d4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048e/0048e1d4.md) [`00493cb8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00493/00493cb8.md) [`00493cc0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00493/00493cc0.md) [`00493d28`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00493/00493d28.md) [`009a5114`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009a5/009a5114.md)

変更の種類 branch_condition_or_target, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, store_value, unresolved_store_alignment

命令の説明率　旧版 89.41% / 新版 89.41%

優先判定に残った影響 `store_value` 2件, `unresolved_store_alignment` 5件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "009a4f94",
      "incomplete_value": false,
      "site": "009a4f94",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c88000:8"
          ],
          [
            "leaf",
            "const:6e0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "009a4f40",
      "incomplete_value": false,
      "site": "009a4f40",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c88000:8"
          ],
          [
            "leaf",
            "const:610:8"
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
      "definition_site": "009a4fac",
      "incomplete_value": false,
      "site": "009a4fb0",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c88000:8"
          ],
          [
            "leaf",
            "const:770:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "009a4f58",
      "incomplete_value": false,
      "site": "009a4f5c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c88000:8"
          ],
          [
            "leaf",
            "const:6a0:8"
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
      "unmatched:009a4eb8",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "unmatched:009a4ebc",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "unmatched:009a4ed4",
      "WRITE",
      [
        "storage",
        "Stack[-0x28]",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "009a4f0c",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "009a4f10",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "009a4f28",
      "WRITE",
      [
        "storage",
        "Stack[-0x28]",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 009a4eec ["INT_ADD", "register:40f0:8", ["const:9a4eec:8", "const:4:8"]]
- 009a4eec ["CALL", null, ["callee:0048e1d4:8"]]
+ 009a4f40 ["INT_ADD", "register:40f0:8", ["const:9a4f40:8", "const:4:8"]]
+ 009a4f40 ["CALL", null, ["callee:0048e1d4:8"]]
- 009a4eb4 ["INT_SUB", "register:8:8", ["register:8:8", "const:c0:8"]]
- 009a4eb8 ["COPY", "tmp:0:8", ["register:40e8:8"]]
- 009a4eb8 ["COPY", "tmp:1:8", ["register:40f0:8"]]
- 009a4eb8 ["INT_ADD", "tmp:2:8", ["register:8:8", "const:a0:8"]]
- 009a4eb8 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
~~~


<a id="compare-74e051d86a5040a37bcc0447f6409c85"></a>

### [`009a50c0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009a5/009a50c0.md) → [`009a5114`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009a5/009a5114.md) FUN_009a5114

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 1件 [`009a4eb4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009a4/009a4eb4.md) · 呼出先 13件 [`00598b34`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00598/00598b34.md) [`00598cf4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00598/00598cf4.md) [`005a7534`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005a7/005a7534.md) [`00795e24`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00795/00795e24.md) [`00795e5c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00795/00795e5c.md)
- 新版 呼出元 1件 [`009a4f08`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009a4/009a4f08.md) · 呼出先 13件 [`00598b74`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00598/00598b74.md) [`00598d34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00598/00598d34.md) [`005a7574`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005a7/005a7574.md) [`00795e7c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00795/00795e7c.md) [`00795eb4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00795/00795eb4.md)

変更の種類 branch_condition_or_target, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 86.07% / 新版 86.07%

優先判定に残った影響 `unresolved_branch_alignment` 3件, `unresolved_call_alignment` 4件, `unresolved_store_alignment` 4件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:009a50f0",
      "WRITE",
      [
        "storage",
        "Stack[-0x48]",
        null,
        null
      ]
    ],
    [
      "unmatched:009a5134",
      "DATA",
      [
        "storage",
        "00c6da20",
        null,
        "undefined *"
      ]
    ],
    [
      "unmatched:009a518c",
      "WRITE",
      [
        "storage",
        "Stack[-0xc0]",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "009a5144",
      "WRITE",
      [
        "storage",
        "Stack[-0x48]",
        null,
        null
      ]
    ],
    [
      "009a5188",
      "DATA",
      [
        "storage",
        "00c6daf0",
        null,
        "undefined *"
      ]
    ],
    [
      "009a51e0",
      "WRITE",
      [
        "storage",
        "Stack[-0xc0]",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 009a50e4 ["INT_ADD", "tmp:0:8", ["register:40c0:8", "const:28:8"]]
- 009a50e4 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
- 009a50e8 ["COPY", "register:40a0:8", ["register:4010:8"]]
- 009a50ec ["COPY", "register:40b0:8", ["register:4008:8"]]
~~~


<a id="compare-6bb06a218ca8a09eba6b86ca0ed4566a"></a>

### [`009a5508`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009a5/009a5508.md) → [`009a555c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009a5/009a555c.md) FUN_009a555c

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`0089bc8c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0089b/0089bc8c.md) · 呼出先 12件 [`0048e194`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0048e/0048e194.md) [`00493c78`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00493/00493c78.md) [`00493c80`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00493/00493c80.md) [`00493ce8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00493/00493ce8.md) [`009a57b4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009a5/009a57b4.md)
- 新版 呼出元 1件 [`0089bce4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0089b/0089bce4.md) · 呼出先 12件 [`0048e1d4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048e/0048e1d4.md) [`00493cb8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00493/00493cb8.md) [`00493cc0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00493/00493cc0.md) [`00493d28`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00493/00493d28.md) [`009a5808`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009a5/009a5808.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, constant, control_flow, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, store_value, unresolved_branch_alignment, unresolved_store_alignment

命令の説明率　旧版 94.02% / 新版 94.02%

優先判定に残った影響 `call_argument_candidate` 4件, `store_value` 2件, `unresolved_branch_alignment` 1件, `unresolved_store_alignment` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "009a5650",
      "incomplete_value": false,
      "site": "009a5650",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c88000:8"
          ],
          [
            "leaf",
            "const:7f0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "009a55fc",
      "incomplete_value": false,
      "site": "009a55fc",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c88000:8"
          ],
          [
            "leaf",
            "const:720:8"
          ]
        ]
      ]
    },
    "ordinal": 13,
    "slot": 2
  },
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "009a566c",
      "incomplete_value": false,
      "site": "009a5670",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c88000:8"
          ],
          [
            "leaf",
            "const:880:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "009a5618",
      "incomplete_value": false,
      "site": "009a561c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c88000:8"
          ],
          [
            "leaf",
            "const:7b0:8"
          ]
        ]
      ]
    },
    "ordinal": 16,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "009a556c",
      "incomplete_value": true,
      "site": "009a5570",
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
      "unmatched:009a5530",
      "WRITE",
      [
        "storage",
        "Stack[-0xb8]",
        null,
        null
      ]
    ],
    [
      "009a5650",
      "DATA",
      [
        "storage",
        "00c88720",
        null,
        "undefined *"
      ]
    ],
    [
      "009a5670",
      "DATA",
      [
        "storage",
        "00c887b0",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "009a5584",
      "WRITE",
      [
        "storage",
        "Stack[-0xb8]",
        null,
        null
      ]
    ],
    [
      "009a5650",
      "DATA",
      [
        "storage",
        "00c887f0",
        null,
        "undefined *"
      ]
    ],
    [
      "009a5670",
      "DATA",
      [
        "storage",
        "00c88880",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 009a5570 ["INT_ADD", "register:40f0:8", ["const:9a5570:8", "const:4:8"]]
- 009a5570 ["CALL", null, ["callee:00493d28:8"]]
+ 009a55c4 ["INT_ADD", "register:40f0:8", ["const:9a55c4:8", "const:4:8"]]
+ 009a55c4 ["CALL", null, ["callee:00493d28:8"]]
- 009a5580 ["INT_ADD", "register:40f0:8", ["const:9a5580:8", "const:4:8"]]
- 009a5580 ["CALL", null, ["callee:00493d28:8"]]
+ 009a55d4 ["INT_ADD", "register:40f0:8", ["const:9a55d4:8", "const:4:8"]]
+ 009a55d4 ["CALL", null, ["callee:00493d28:8"]]
- 009a55c8 ["INT_ADD", "register:40f0:8", ["const:9a55c8:8", "const:4:8"]]
- 009a55c8 ["CALL", null, ["callee:00493cc0:8"]]
+ 009a561c ["INT_ADD", "register:40f0:8", ["const:9a561c:8", "const:4:8"]]
+ 009a561c ["CALL", null, ["callee:00493cc0:8"]]
~~~


<a id="compare-85941e07d8006979a4f16156faf83e85"></a>

### [`009a57b4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009a5/009a57b4.md) → [`009a5808`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009a5/009a5808.md) FUN_009a5808

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 1件 [`009a5508`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009a5/009a5508.md) · 呼出先 13件 [`00598b34`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00598/00598b34.md) [`00598cf4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00598/00598cf4.md) [`005a8538`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005a8/005a8538.md) [`00795e24`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00795/00795e24.md) [`00795e5c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00795/00795e5c.md)
- 新版 呼出元 1件 [`009a555c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009a5/009a555c.md) · 呼出先 13件 [`00598b74`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00598/00598b74.md) [`00598d34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00598/00598d34.md) [`005a8578`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005a8/005a8578.md) [`00795e7c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00795/00795e7c.md) [`00795eb4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00795/00795eb4.md)

変更の種類 branch_condition_or_target, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, store_condition, store_value, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 93.60% / 新版 93.60%

優先判定に残った影響 `store_condition` 1件, `store_value` 1件, `unresolved_branch_alignment` 1件, `unresolved_call_alignment` 2件, `unresolved_store_alignment` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "009a5880",
      "incomplete_value": false,
      "site": "009a5884",
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
      "definition_site": "009a582c",
      "incomplete_value": false,
      "site": "009a5830",
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
    "ordinal": 11,
    "slot": 2
  },
  {
    "confidence": "limited",
    "guard": [
      [
        "FALL_THROUGH",
        "009a581c"
      ],
      [
        "FALL_THROUGH",
        "009a5870"
      ]
    ],
    "kind": "store_condition",
    "new": {
      "definition_site": "009a5870",
      "incomplete_value": true,
      "site": "009a5884",
      "value": [
        "INT_EQUAL",
        "1",
        [
          [
            "live",
            "register:40a8:8"
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "009a581c",
      "incomplete_value": true,
      "site": "009a5830",
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
      "unmatched:009a581c",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "009a58ac"
      ]
    ],
    [
      "009a5884",
      "DATA",
      [
        "storage",
        "00c6da20",
        null,
        "undefined *"
      ]
    ],
    [
      "unmatched:009a5900",
      "DATA",
      [
        "storage",
        "00c888b0",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "009a5870",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "009a58ac"
      ]
    ],
    [
      "009a5884",
      "DATA",
      [
        "storage",
        "00c6daf0",
        null,
        "undefined *"
      ]
    ],
    [
      "009a5954",
      "DATA",
      [
        "storage",
        "00c88980",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 009a57ec ["INT_ADD", "register:40f0:8", ["const:9a57ec:8", "const:4:8"]]
- 009a57ec ["CALL", null, ["callee:00c57f60:8"]]
+ 009a5840 ["INT_ADD", "register:40f0:8", ["const:9a5840:8", "const:4:8"]]
+ 009a5840 ["CALL", null, ["callee:00c57f60:8"]]
- 009a57fc ["INT_ADD", "register:40f0:8", ["const:9a57fc:8", "const:4:8"]]
- 009a57fc ["CALL", null, ["callee:005a8578:8"]]
+ 009a5850 ["INT_ADD", "register:40f0:8", ["const:9a5850:8", "const:4:8"]]
+ 009a5850 ["CALL", null, ["callee:005a8578:8"]]
- 009a5810 ["INT_ADD", "register:40f0:8", ["const:9a5810:8", "const:4:8"]]
- 009a5810 ["CALL", null, ["callee:009a87cc:8"]]
+ 009a5864 ["INT_ADD", "register:40f0:8", ["const:9a5864:8", "const:4:8"]]
+ 009a5864 ["CALL", null, ["callee:009a87cc:8"]]
~~~


<a id="compare-38f27f3a3451530fc81d6a165516fba7"></a>

### [`009a5c04`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009a5/009a5c04.md) → [`009a5c58`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009a5/009a5c58.md) FUN_009a5c58

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 2件 [`009a63a0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009a6/009a63a0.md) [`009a6cfc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009a6/009a6cfc.md) · 呼出先 12件 [`0043bb20`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043bb20.md) [`00474198`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00474/00474198.md) [`0048ccf8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0048c/0048ccf8.md) [`00492ccc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00492/00492ccc.md) [`00748fb8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00748/00748fb8.md)
- 新版 呼出元 2件 [`009a63f4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009a6/009a63f4.md) [`009a6d50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009a6/009a6d50.md) · 呼出先 12件 [`0043bb60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bb60.md) [`004741d8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00474/004741d8.md) [`0048cd38`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048c/0048cd38.md) [`00492d0c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00492/00492d0c.md) [`00749010`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00749/00749010.md)

変更の種類 branch_condition_or_target, call, call_argument_candidate, call_target, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, store_value, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 85.77% / 新版 85.77%

優先判定に残った影響 `call_argument_candidate` 7件, `call_target` 1件, `store_value` 2件, `unresolved_branch_alignment` 3件, `unresolved_call_alignment` 1件, `unresolved_store_alignment` 10件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "009a5e74",
      "incomplete_value": true,
      "site": "009a5e74",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:faf:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "009a5e20",
      "incomplete_value": true,
      "site": "009a5e20",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:b:8"
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
      "definition_site": "009a5e5c",
      "incomplete_value": true,
      "site": "009a5e78",
      "value": [
        "LOAD",
        "8",
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
      "definition_site": "009a5e08",
      "incomplete_value": true,
      "site": "009a5e24",
      "value": [
        "LOAD",
        "8",
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
    "ordinal": 30,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "009a5cc0",
      "incomplete_value": true,
      "site": "009a5cc8",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "INT_SUB",
            "8",
            [
              [
                "live",
                "register:8:8"
              ],
              [
                "leaf",
                "const:120:8"
              ]
            ]
          ],
          [
            "leaf",
            "const:60:8"
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
      "unmatched:009a5c54",
      "READ",
      [
        "storage",
        "002ba9cd",
        null,
        "string"
      ]
    ],
    [
      "unmatched:009a5c5c",
      "WRITE",
      [
        "storage",
        "Stack[-0xb4]",
        null,
        null
      ]
    ],
    [
      "unmatched:009a5c60",
      "WRITE",
      [
        "storage",
        "Stack[-0xb8]",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "009a5ca8",
      "READ",
      [
        "storage",
        "002ba979",
        null,
        "string"
      ]
    ],
    [
      "009a5cb0",
      "WRITE",
      [
        "storage",
        "Stack[-0xb4]",
        null,
        null
      ]
    ],
    [
      "009a5cb4",
      "WRITE",
      [
        "storage",
        "Stack[-0xb8]",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 009a5c74 ["INT_ADD", "register:40f0:8", ["const:9a5c74:8", "const:4:8"]]
- 009a5c74 ["CALL", null, ["callee:00749010:8"]]
+ 009a5cc8 ["INT_ADD", "register:40f0:8", ["const:9a5cc8:8", "const:4:8"]]
+ 009a5cc8 ["CALL", null, ["callee:00749010:8"]]
- 009a5cc8 ["COPY", "tmp:0:8", ["const:a5c:8"]]
- 009a5cc8 ["INT_CARRY", "register:105:1", ["register:40b0:8", "tmp:0:8"]]
- 009a5cc8 ["INT_SCARRY", "register:106:1", ["register:40b0:8", "tmp:0:8"]]
- 009a5cc8 ["INT_ADD", "tmp:1:8", ["register:40b0:8", "tmp:0:8"]]
- 009a5d8c ["INT_ADD", "register:40f0:8", ["const:9a5d8c:8", "const:4:8"]]
- 009a5d8c ["CALL", null, ["callee:00c58050:8"]]
+ 009a5de0 ["INT_ADD", "register:40f0:8", ["const:9a5de0:8", "const:4:8"]]
+ 009a5de0 ["CALL", null, ["callee:00c58050:8"]]
~~~


<a id="compare-6e1ca728af494c880aaa101702b6baf3"></a>

### [`009a6170`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009a6/009a6170.md) → [`009a61c4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009a6/009a61c4.md) FUN_009a61c4

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)

変更の種類 branch_condition_or_target, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, operands_and_dependencies, operation_sequence, store_condition, unresolved_branch_alignment

命令の説明率　旧版 88.00% / 新版 88.00%

優先判定に残った影響 `store_condition` 1件, `unresolved_branch_alignment` 1件

~~~json
[
  {
    "confidence": "limited",
    "guard": [
      [
        "FALL_THROUGH",
        "009a6184"
      ],
      [
        "FALL_THROUGH",
        "009a61d8"
      ]
    ],
    "kind": "store_condition",
    "new": {
      "definition_site": "009a61d8",
      "incomplete_value": true,
      "site": "009a61ec",
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
                "register:4000:8"
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
      "definition_site": "009a6184",
      "incomplete_value": true,
      "site": "009a6198",
      "value": [
        "INT_EQUAL",
        "1",
        [
          [
            "live",
            "register:4098:8"
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
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:009a6184",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "009a621c"
      ]
    ],
    [
      "009a61ec",
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
      "009a61d8",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "009a621c"
      ]
    ],
    [
      "009a61ec",
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
- 009a6184 ["INT_EQUAL", "tmp:0:1", ["register:4098:8", "const:0:8"]]
- 009a6184 ["CBRANCH", null, ["local:b10:8", "tmp:0:1"]]
- 009a6188 ["COPY", "register:4040:8", ["const:c6d000:8"]]
- 009a618c ["COPY", "tmp:0:8", ["const:a10:8"]]
- 009a618c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 009a618c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 009a618c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-9950dcfbece18afd8469b4c4afbefd2d"></a>

### [`009a6258`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009a6/009a6258.md) → [`009a62ac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009a6/009a62ac.md) FUN_009a62ac

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)

変更の種類 branch_condition_or_target, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_store_alignment

命令の説明率　旧版 84.00% / 新版 84.00%

優先判定に残った影響 `unresolved_store_alignment` 1件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:009a6280",
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
      "009a62d4",
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
- 009a626c ["INT_EQUAL", "tmp:0:1", ["register:4098:8", "const:0:8"]]
- 009a626c ["CBRANCH", null, ["local:b6:8", "tmp:0:1"]]
+ 009a62c0 ["INT_EQUAL", "tmp:0:1", ["register:4098:8", "const:0:8"]]
+ 009a62c0 ["CBRANCH", null, ["local:b7:8", "tmp:0:1"]]
- 009a6274 ["COPY", "tmp:0:8", ["const:a10:8"]]
- 009a6274 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 009a6274 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 009a6274 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 009a6278 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:20:8"]]
- 009a6278 ["LOAD", "tmp:1:1", ["const:1b1:8", "tmp:0:8"]]
- 009a6278 ["INT_ZEXT", "register:4048:8", ["tmp:1:1"]]
~~~


<a id="compare-bb9e0550efd1e177f0db0eb8b218d918"></a>

### [`009a6380`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009a6/009a6380.md) → [`009a63d4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009a6/009a63d4.md) FUN_009a63d4

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
      "definition_site": "009a63dc",
      "incomplete_value": false,
      "site": "009a63e0",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c88000:8"
          ],
          [
            "leaf",
            "const:6e0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "009a6388",
      "incomplete_value": false,
      "site": "009a638c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c88000:8"
          ],
          [
            "leaf",
            "const:610:8"
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
      "009a63e0",
      "DATA",
      [
        "storage",
        "00c88610",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "009a63e0",
      "DATA",
      [
        "storage",
        "00c886e0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 009a6388 ["COPY", "tmp:0:8", ["const:610:8"]]
- 009a6388 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 009a6388 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 009a6388 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 009a63dc ["COPY", "tmp:0:8", ["const:6e0:8"]]
+ 009a63dc ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 009a63dc ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 009a63dc ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
~~~


<a id="compare-607e8332e1abd3a597693faebdaa9220"></a>

### [`009a63a0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009a6/009a63a0.md) → [`009a63f4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009a6/009a63f4.md) FUN_009a63f4

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 9件 [`0043bb20`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043bb20.md) [`005a780c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005a7/005a780c.md) [`009a5c04`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009a5/009a5c04.md) [`009a689c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009a6/009a689c.md) [`009a6a4c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009a6/009a6a4c.md)
- 新版 呼出元 0件  · 呼出先 9件 [`0043bb60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bb60.md) [`005a784c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005a7/005a784c.md) [`009a5c58`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009a5/009a5c58.md) [`009a68f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009a6/009a68f0.md) [`009a6aa0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009a6/009a6aa0.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, operands_and_dependencies, operation_sequence, store_value, unresolved_branch_alignment, unresolved_call_alignment

命令の説明率　旧版 90.52% / 新版 90.52%

優先判定に残った影響 `call_argument_candidate` 2件, `store_value` 1件, `unresolved_branch_alignment` 7件, `unresolved_call_alignment` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "009a6610",
      "incomplete_value": true,
      "site": "009a6610",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:8f8:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "009a65bc",
      "incomplete_value": true,
      "site": "009a65bc",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:8b8:8"
              ]
            ]
          ]
        ]
      ]
    },
    "ordinal": 42,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "009a6448",
      "incomplete_value": true,
      "site": "009a6450",
      "value": [
        "INT_SRIGHT",
        "8",
        [
          [
            "live",
            "register:4040:8"
          ],
          [
            "leaf",
            "const:5:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "009a63f4",
      "incomplete_value": true,
      "site": "009a63fc",
      "value": [
        "INT_SRIGHT",
        "8",
        [
          [
            "INT_SUB",
            "8",
            [
              [
                "live",
                "register:4010:8"
              ],
              [
                "live",
                "register:4008:8"
              ]
            ]
          ],
          [
            "leaf",
            "const:5:8"
          ]
        ]
      ]
    },
    "ordinal": 0,
    "slot": 4
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "009a656c",
      "incomplete_value": true,
      "site": "009a6570",
      "value": [
        "LOAD",
        "8",
        [
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
                "const:50:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": null,
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
      "unmatched:009a6408",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "009a659c"
      ]
    ],
    [
      "009a65c4",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "009a6470"
      ]
    ],
    [
      "unmatched:009a6570",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "009a65b4"
      ]
    ]
  ],
  "added": [
    [
      "009a645c",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "009a659c"
      ]
    ],
    [
      "009a6564",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "009a6470"
      ]
    ],
    [
      "009a65c4",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "009a65b4"
      ]
    ]
  ]
}
~~~


~~~diff
- 009a63fc ["INT_ADD", "register:40f0:8", ["const:9a63fc:8", "const:4:8"]]
- 009a63fc ["CALL", null, ["callee:005a784c:8"]]
+ 009a6450 ["INT_ADD", "register:40f0:8", ["const:9a6450:8", "const:4:8"]]
+ 009a6450 ["CALL", null, ["callee:005a784c:8"]]
- 009a651c ["INT_ADD", "register:40f0:8", ["const:9a651c:8", "const:4:8"]]
- 009a651c ["CALL", null, ["callee:00c57f80:8"]]
+ 009a6570 ["INT_ADD", "register:40f0:8", ["const:9a6570:8", "const:4:8"]]
+ 009a6570 ["CALL", null, ["callee:00c57f80:8"]]
- 009a6568 ["CBRANCH", null, ["local:b33:8", "register:101:1"]]
+ 009a65bc ["CBRANCH", null, ["local:b32:8", "register:101:1"]]
~~~


<a id="compare-0158facd4338202a2a3a5d4375b1318b"></a>

### [`009a6824`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009a6/009a6824.md) → [`009a6878`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009a6/009a6878.md) FUN_009a6878

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)

変更の種類 branch_condition_or_target, cfg_edge_inventory, constant, control_flow, control_flow_count, local_def_use, operands_and_dependencies, operation_sequence, unresolved_branch_alignment

命令の説明率　旧版 96.67% / 新版 96.67%

優先判定に残った影響 `unresolved_branch_alignment` 1件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:009a685c",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "009a68c8"
      ]
    ]
  ],
  "added": [
    [
      "009a68b0",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "009a68c8"
      ]
    ]
  ]
}
~~~


~~~diff
- 009a6838 ["INT_EQUAL", "tmp:0:1", ["register:40a0:8", "const:0:8"]]
- 009a6838 ["CBRANCH", null, ["local:b9:8", "tmp:0:1"]]
+ 009a688c ["INT_EQUAL", "tmp:0:1", ["register:40a0:8", "const:0:8"]]
+ 009a688c ["CBRANCH", null, ["local:b8:8", "tmp:0:1"]]
- 009a684c ["BOOL_NEGATE", "tmp:0:1", ["register:101:1"]]
- 009a684c ["CBRANCH", null, ["local:b5:8", "tmp:0:1"]]
+ 009a68a0 ["BOOL_NEGATE", "tmp:0:1", ["register:101:1"]]
+ 009a68a0 ["CBRANCH", null, ["local:b4:8", "tmp:0:1"]]
- 009a6850 ["BRANCH", null, ["local:b8:8"]]
+ 009a68a4 ["BRANCH", null, ["local:b7:8"]]
~~~


<a id="compare-02d6fbf3cca11c1b741de978e51898b5"></a>

### [`009a689c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009a6/009a689c.md) → [`009a68f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009a6/009a68f0.md) FUN_009a68f0

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `changed`

- 旧版 呼出元 1件 [`009a63a0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009a6/009a63a0.md) · 呼出先 4件 [`00440ec0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00440/00440ec0.md) [`009a69e4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009a6/009a69e4.md) [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md)
- 新版 呼出元 1件 [`009a63f4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009a6/009a63f4.md) · 呼出先 4件 [`00440f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00440/00440f00.md) [`009a6a38`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009a6/009a6a38.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)

変更の種類 comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, operands_and_dependencies, operation_sequence, unresolved_branch_alignment

命令の説明率　旧版 91.46% / 新版 91.46%

アドレスに依存する影響 `unresolved_branch_alignment` 1件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:009a68c8",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "009a6a2c"
      ]
    ]
  ],
  "added": [
    [
      "009a691c",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "009a6a2c"
      ]
    ]
  ]
}
~~~


~~~diff
- 009a68ac ["COPY", "register:40e8:8", ["register:8:8"]]
- 009a68b8 ["INT_SUB", "register:4040:8", ["register:4040:8", "register:4048:8"]]
- 009a68bc ["INT_SRIGHT", "register:40a8:8", ["register:4040:8", "const:5:8"]]
~~~


<a id="compare-6dd5b99bc0243510e88f6d3038dacaf4"></a>

### [`009a69e4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009a6/009a69e4.md) → [`009a6a38`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009a6/009a6a38.md) FUN_009a6a38

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 2件 [`009a689c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009a6/009a689c.md) [`009a6a4c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009a6/009a6a4c.md) · 呼出先 1件 [`0043b778`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043b778.md)
- 新版 呼出元 2件 [`009a68f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009a6/009a68f0.md) [`009a6aa0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009a6/009a6aa0.md) · 呼出先 1件 [`0043b7b8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b7b8.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 80.00% / 新版 80.00%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "009a6a44",
      "incomplete_value": false,
      "site": "009a6a48",
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
      "definition_site": "009a69f0",
      "incomplete_value": false,
      "site": "009a69f4",
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
      "009a6a44",
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
      "009a6a44",
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
- 009a69f4 ["INT_ADD", "register:40f0:8", ["const:9a69f4:8", "const:4:8"]]
- 009a69f4 ["CALL", null, ["callee:0043b7b8:8"]]
+ 009a6a48 ["INT_ADD", "register:40f0:8", ["const:9a6a48:8", "const:4:8"]]
+ 009a6a48 ["CALL", null, ["callee:0043b7b8:8"]]
- 009a69f0 ["COPY", "tmp:0:8", ["const:f4c:8"]]
- 009a69f0 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 009a69f0 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 009a69f0 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 009a6a44 ["COPY", "tmp:0:8", ["const:f8c:8"]]
+ 009a6a44 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 009a6a44 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 009a6a44 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
~~~


<a id="compare-1feded4c252ab35be937b2b55010a174"></a>

### [`009a69f8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009a6/009a69f8.md) → [`009a6a4c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009a6/009a6a4c.md) FUN_009a6a4c

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `equal` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, constant, control_flow, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "009a6a34",
      "incomplete_value": true,
      "site": "009a6a38",
      "value": [
        "LOAD",
        "8",
        [
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
                "const:fffffffffffffff8:8"
              ]
            ]
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
- 009a6a38 ["INT_ADD", "register:40f0:8", ["const:9a6a38:8", "const:4:8"]]
- 009a6a38 ["CALL", null, ["callee:00c57f80:8"]]
+ 009a6a8c ["INT_ADD", "register:40f0:8", ["const:9a6a8c:8", "const:4:8"]]
+ 009a6a8c ["CALL", null, ["callee:00c57f80:8"]]
- 009a6a28 ["CBRANCH", null, ["local:b7:8", "register:101:1"]]
+ 009a6a7c ["CBRANCH", null, ["local:b8:8", "register:101:1"]]
~~~


<a id="compare-14dccf407c6963065e6bfac87b96df1a"></a>

### [`009a6a4c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009a6/009a6a4c.md) → [`009a6aa0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009a6/009a6aa0.md) FUN_009a6aa0

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`009a63a0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009a6/009a63a0.md) · 呼出先 6件 [`0043bb20`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043bb20.md) [`009a69e4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009a6/009a69e4.md) [`009a6ba8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009a6/009a6ba8.md) [`00c53f5c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c53/00c53f5c.md) [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md)
- 新版 呼出元 1件 [`009a63f4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009a6/009a63f4.md) · 呼出先 6件 [`0043bb60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bb60.md) [`009a6a38`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009a6/009a6a38.md) [`009a6bfc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009a6/009a6bfc.md) [`00c53ffc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53ffc.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_return_alignment, unresolved_store_alignment

命令の説明率　旧版 89.16% / 新版 89.16%

優先判定に残った影響 `call_argument_candidate` 1件, `unresolved_branch_alignment` 1件, `unresolved_return_alignment` 1件, `unresolved_store_alignment` 4件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "009a6b64",
      "incomplete_value": true,
      "site": "009a6b68",
      "value": [
        "live",
        "register:4098:8"
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
      "009a6adc",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "009a6be0"
      ]
    ],
    [
      "unmatched:009a6ab8",
      "WRITE",
      [
        "storage",
        "Stack[-0x68]",
        null,
        null
      ]
    ],
    [
      "unmatched:009a6af4",
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
      "009a6adc",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "009a6ba8"
      ]
    ],
    [
      "009a6b0c",
      "WRITE",
      [
        "storage",
        "Stack[-0x68]",
        null,
        null
      ]
    ],
    [
      "009a6b48",
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
- 009a6b68 ["INT_ADD", "register:40f0:8", ["const:9a6b68:8", "const:4:8"]]
- 009a6b68 ["CALL", null, ["callee:009a6a38:8"]]
+ 009a6bbc ["INT_ADD", "register:40f0:8", ["const:9a6bbc:8", "const:4:8"]]
+ 009a6bbc ["CALL", null, ["callee:009a6a38:8"]]
- 009a6a78 ["INT_EQUAL", "tmp:0:1", ["register:4018:8", "const:0:8"]]
- 009a6a78 ["CBRANCH", null, ["local:b17:8", "tmp:0:1"]]
+ 009a6acc ["INT_EQUAL", "tmp:0:1", ["register:4018:8", "const:0:8"]]
+ 009a6acc ["CBRANCH", null, ["local:b16:8", "tmp:0:1"]]
- 009a6a88 ["INT_NOTEQUAL", "tmp:0:1", ["register:4040:8", "const:0:8"]]
- 009a6a88 ["CBRANCH", null, ["local:b20:8", "tmp:0:1"]]
+ 009a6adc ["INT_NOTEQUAL", "tmp:0:1", ["register:4040:8", "const:0:8"]]
+ 009a6adc ["CBRANCH", null, ["local:b19:8", "tmp:0:1"]]
~~~


<a id="compare-c0e5c3b8afa5dfedebcb442858c9ac17"></a>

### [`009a6ba8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009a6/009a6ba8.md) → [`009a6bfc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009a6/009a6bfc.md) FUN_009a6bfc

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal` · `cfg_change`

- 旧版 呼出元 1件 [`009a6a4c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009a6/009a6a4c.md) · 呼出先 1件 [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md)
- 新版 呼出元 1件 [`009a6aa0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009a6/009a6aa0.md) · 呼出先 1件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)

変更の種類 cfg_edge_inventory, constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 009a6c0c ["INT_ADD", "register:40f0:8", ["const:9a6c0c:8", "const:4:8"]]
- 009a6c0c ["CALL", null, ["callee:00c57f80:8"]]
+ 009a6c60 ["INT_ADD", "register:40f0:8", ["const:9a6c60:8", "const:4:8"]]
+ 009a6c60 ["CALL", null, ["callee:00c57f80:8"]]
~~~


<a id="compare-09a6a0165efa00084458a8e1f724666e"></a>

### [`009a6c34`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009a6/009a6c34.md) → [`009a6c88`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009a6/009a6c88.md) FUN_009a6c88

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
      "definition_site": "009a6c9c",
      "incomplete_value": false,
      "site": "009a6ca0",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c88000:8"
          ],
          [
            "leaf",
            "const:770:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "009a6c48",
      "incomplete_value": false,
      "site": "009a6c4c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c88000:8"
          ],
          [
            "leaf",
            "const:6a0:8"
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
      "009a6ca0",
      "DATA",
      [
        "storage",
        "00c886a0",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "009a6ca0",
      "DATA",
      [
        "storage",
        "00c88770",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 009a6c40 ["INT_ADD", "register:40f0:8", ["const:9a6c40:8", "const:4:8"]]
- 009a6c40 ["CALL", null, ["callee:00c57f60:8"]]
+ 009a6c94 ["INT_ADD", "register:40f0:8", ["const:9a6c94:8", "const:4:8"]]
+ 009a6c94 ["CALL", null, ["callee:00c57f60:8"]]
- 009a6c48 ["COPY", "tmp:0:8", ["const:6a0:8"]]
- 009a6c48 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 009a6c48 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 009a6c48 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 009a6c9c ["COPY", "tmp:0:8", ["const:770:8"]]
+ 009a6c9c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 009a6c9c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 009a6c9c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-88c0f2e69dc6973a50cc2bcdeba72298"></a>

### [`009a6c58`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009a6/009a6c58.md) → [`009a6cac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009a6/009a6cac.md) FUN_009a6cac

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
      "definition_site": "009a6cb0",
      "incomplete_value": false,
      "site": "009a6cb4",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c88000:8"
          ],
          [
            "leaf",
            "const:770:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "009a6c5c",
      "incomplete_value": false,
      "site": "009a6c60",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c88000:8"
          ],
          [
            "leaf",
            "const:6a0:8"
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
      "009a6cb4",
      "DATA",
      [
        "storage",
        "00c886a0",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "009a6cb4",
      "DATA",
      [
        "storage",
        "00c88770",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 009a6c5c ["COPY", "tmp:0:8", ["const:6a0:8"]]
- 009a6c5c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 009a6c5c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 009a6c5c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 009a6cb0 ["COPY", "tmp:0:8", ["const:770:8"]]
+ 009a6cb0 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 009a6cb0 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 009a6cb0 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-52aff59490b0e5d84f3da503eca763d4"></a>

### [`009a6ca4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009a6/009a6ca4.md) → [`009a6cf8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009a6/009a6cf8.md) FUN_009a6cf8

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)

変更の種類 comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_return_alignment, unresolved_store_alignment

命令の説明率　旧版 71.43% / 新版 71.43%

優先判定に残った影響 `unresolved_return_alignment` 1件, `unresolved_store_alignment` 1件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:009a6cc8",
      "DATA",
      [
        "storage",
        "00c88720",
        null,
        "undefined *"
      ]
    ],
    [
      "unmatched:009a6cd4",
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
      "009a6d1c",
      "DATA",
      [
        "storage",
        "00c887f0",
        null,
        "undefined *"
      ]
    ],
    [
      "009a6d28",
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
- 009a6cb8 ["INT_ADD", "register:40f0:8", ["const:9a6cb8:8", "const:4:8"]]
- 009a6cb8 ["CALL", null, ["callee:00c57f60:8"]]
+ 009a6d0c ["INT_ADD", "register:40f0:8", ["const:9a6d0c:8", "const:4:8"]]
+ 009a6d0c ["CALL", null, ["callee:00c57f60:8"]]
- 009a6cc4 ["COPY", "tmp:0:8", ["const:720:8"]]
- 009a6cc4 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 009a6cc4 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 009a6cc4 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 009a6cc8 ["COPY", "tmp:0:8", ["register:4000:8"]]
- 009a6cc8 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4040:8"]]
~~~


<a id="compare-a89d41a8ec5a0a4f5a513a5105a8e316"></a>

### [`009a6cdc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009a6/009a6cdc.md) → [`009a6d30`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009a6/009a6d30.md) FUN_009a6d30

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
      "definition_site": "009a6d38",
      "incomplete_value": false,
      "site": "009a6d3c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c88000:8"
          ],
          [
            "leaf",
            "const:7f0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "009a6ce4",
      "incomplete_value": false,
      "site": "009a6ce8",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c88000:8"
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
      "009a6d3c",
      "DATA",
      [
        "storage",
        "00c88720",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "009a6d3c",
      "DATA",
      [
        "storage",
        "00c887f0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 009a6ce4 ["COPY", "tmp:0:8", ["const:720:8"]]
- 009a6ce4 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 009a6ce4 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 009a6ce4 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 009a6d38 ["COPY", "tmp:0:8", ["const:7f0:8"]]
+ 009a6d38 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 009a6d38 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 009a6d38 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
~~~


<a id="compare-3c7c37965022b2277522a7da6102e64b"></a>

### [`009a6cfc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009a6/009a6cfc.md) → [`009a6d50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009a6/009a6d50.md) FUN_009a6d50

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 5件 [`009a5c04`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009a5/009a5c04.md) [`00c53d00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c53/00c53d00.md) [`00c57e80`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e80.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md)
- 新版 呼出元 0件  · 呼出先 5件 [`009a5c58`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009a5/009a5c58.md) [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)

変更の種類 branch_condition_or_target, call_argument_candidate, comparison, comparison_count, constant, control_flow, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_store_alignment

命令の説明率　旧版 82.35% / 新版 82.35%

優先判定に残った影響 `call_argument_candidate` 3件, `unresolved_store_alignment` 6件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "009a6db0",
      "incomplete_value": true,
      "site": "009a6db8",
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
    "ordinal": 0,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "009a6db4",
      "incomplete_value": true,
      "site": "009a6db8",
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
    "ordinal": 0,
    "slot": 3
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "009a6d9c",
      "incomplete_value": true,
      "site": "009a6da0",
      "value": [
        "live",
        "register:4098:8"
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
      "unmatched:009a6d30",
      "WRITE",
      [
        "storage",
        "Stack[-0x37]",
        null,
        null
      ]
    ],
    [
      "unmatched:009a6d3c",
      "READ",
      [
        "storage",
        "002a7fab",
        null,
        "string"
      ]
    ],
    [
      "unmatched:009a6d44",
      "WRITE",
      [
        "storage",
        "Stack[-0x33]",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "009a6d84",
      "WRITE",
      [
        "storage",
        "Stack[-0x37]",
        null,
        null
      ]
    ],
    [
      "009a6d90",
      "READ",
      [
        "storage",
        "002a7f4f",
        null,
        "string"
      ]
    ],
    [
      "009a6d98",
      "WRITE",
      [
        "storage",
        "Stack[-0x33]",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 009a6d64 ["INT_ADD", "register:40f0:8", ["const:9a6d64:8", "const:4:8"]]
- 009a6d64 ["CALL", null, ["callee:009a5c58:8"]]
+ 009a6db8 ["INT_ADD", "register:40f0:8", ["const:9a6db8:8", "const:4:8"]]
+ 009a6db8 ["CALL", null, ["callee:009a5c58:8"]]
- 009a6da0 ["INT_ADD", "register:40f0:8", ["const:9a6da0:8", "const:4:8"]]
- 009a6da0 ["CALL", null, ["callee:00c57f50:8"]]
+ 009a6df4 ["INT_ADD", "register:40f0:8", ["const:9a6df4:8", "const:4:8"]]
+ 009a6df4 ["CALL", null, ["callee:00c57f50:8"]]
+ 009a6da0 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:28:8"]]
+ 009a6da0 ["LOAD", "tmp:1:4", ["const:1b1:8", "tmp:0:8"]]
+ 009a6da0 ["INT_SEXT", "register:4018:8", ["tmp:1:4"]]
~~~


<a id="compare-3cb762314f53e606f7ced55395543213"></a>

### [`009a6e2c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009a6/009a6e2c.md) → [`009a6e80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009a6/009a6e80.md) FUN_009a6e80

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c53d00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c53/00c53d00.md) [`00c57e80`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e80.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md)

変更の種類 branch_condition_or_target, cfg_edge_inventory, constant, control_flow, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 009a6e3c ["INT_EQUAL", "tmp:0:1", ["register:4098:8", "const:0:8"]]
- 009a6e3c ["CBRANCH", null, ["local:b3:8", "tmp:0:1"]]
+ 009a6e90 ["INT_EQUAL", "tmp:0:1", ["register:4098:8", "const:0:8"]]
+ 009a6e90 ["CBRANCH", null, ["local:b2:8", "tmp:0:1"]]
- 009a6e48 ["INT_ADD", "register:40f0:8", ["const:9a6e48:8", "const:4:8"]]
- 009a6e48 ["CALL", null, ["callee:00c53da0:8"]]
+ 009a6e9c ["INT_ADD", "register:40f0:8", ["const:9a6e9c:8", "const:4:8"]]
+ 009a6e9c ["CALL", null, ["callee:00c53da0:8"]]
- 009a6e4c ["INT_EQUAL", "tmp:0:1", ["register:4000:8", "const:0:8"]]
- 009a6e4c ["CBRANCH", null, ["local:b4:8", "tmp:0:1"]]
+ 009a6ea0 ["INT_EQUAL", "tmp:0:1", ["register:4000:8", "const:0:8"]]
+ 009a6ea0 ["CBRANCH", null, ["local:b3:8", "tmp:0:1"]]
~~~


<a id="compare-604453cc07c7ffa3390a6e4152150384"></a>

### [`009a6e80`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009a6/009a6e80.md) → [`009a6ed4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009a6/009a6ed4.md) FUN_009a6ed4

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
      "definition_site": "009a6ee8",
      "incomplete_value": false,
      "site": "009a6eec",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c88000:8"
          ],
          [
            "leaf",
            "const:880:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "009a6e94",
      "incomplete_value": false,
      "site": "009a6e98",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c88000:8"
          ],
          [
            "leaf",
            "const:7b0:8"
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
      "009a6eec",
      "DATA",
      [
        "storage",
        "00c887b0",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "009a6eec",
      "DATA",
      [
        "storage",
        "00c88880",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 009a6e8c ["INT_ADD", "register:40f0:8", ["const:9a6e8c:8", "const:4:8"]]
- 009a6e8c ["CALL", null, ["callee:00c57f60:8"]]
+ 009a6ee0 ["INT_ADD", "register:40f0:8", ["const:9a6ee0:8", "const:4:8"]]
+ 009a6ee0 ["CALL", null, ["callee:00c57f60:8"]]
- 009a6e94 ["COPY", "tmp:0:8", ["const:7b0:8"]]
- 009a6e94 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 009a6e94 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 009a6e94 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 009a6ee8 ["COPY", "tmp:0:8", ["const:880:8"]]
+ 009a6ee8 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 009a6ee8 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 009a6ee8 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-cbf2081d63eadab0752ff93d72bf37d1"></a>

### [`009a6ea4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009a6/009a6ea4.md) → [`009a6ef8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009a6/009a6ef8.md) FUN_009a6ef8

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
      "unmatched:009a6eac",
      "DATA",
      [
        "storage",
        "00c887b0",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "009a6f00",
      "DATA",
      [
        "storage",
        "00c88880",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 009a6ea8 ["COPY", "tmp:0:8", ["const:7b0:8"]]
- 009a6ea8 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 009a6ea8 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 009a6ea8 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 009a6eac ["COPY", "tmp:0:8", ["register:4008:8"]]
- 009a6eac ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4040:8"]]
+ 009a6efc ["COPY", "tmp:0:8", ["const:880:8"]]
+ 009a6efc ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 009a6efc ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 009a6efc ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-50e9fba40c4839d869c2204adf0cd390"></a>

### [`009a6ee8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009a6/009a6ee8.md) → [`009a6f3c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009a6/009a6f3c.md) FUN_009a6f3c

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 2件 [`009a5c04`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009a5/009a5c04.md) [`009a6ee8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009a6/009a6ee8.md) · 呼出先 22件 [`0043b764`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043b764.md) [`0043bb20`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043bb20.md) [`0043ddd8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043d/0043ddd8.md) [`00440f70`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00440/00440f70.md) [`00441cec`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00441/00441cec.md)
- 新版 呼出元 2件 [`009a5c58`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009a5/009a5c58.md) [`009a6f3c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009a6/009a6f3c.md) · 呼出先 22件 [`0043b7a4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b7a4.md) [`0043bb60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bb60.md) [`0043de18`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043d/0043de18.md) [`00440fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00440/00440fb0.md) [`00441d2c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00441/00441d2c.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 89.37% / 新版 89.37%

優先判定に残った影響 `call_argument_candidate` 13件, `unresolved_branch_alignment` 7件, `unresolved_call_alignment` 2件, `unresolved_store_alignment` 5件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "009a7024",
      "incomplete_value": true,
      "site": "009a702c",
      "value": [
        "live",
        "register:40d8:8"
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
      "definition_site": "009a7020",
      "incomplete_value": true,
      "site": "009a702c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:40c8:8"
          ],
          [
            "live",
            "register:40a8:8"
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
      "definition_site": "009a7028",
      "incomplete_value": true,
      "site": "009a702c",
      "value": [
        "live",
        "register:40d0:8"
      ]
    },
    "old": null,
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
      "unmatched:009a6f84",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "009a6fb4"
      ]
    ],
    [
      "009a7090",
      "PARAM",
      [
        "storage",
        "002b7f53",
        null,
        null
      ]
    ],
    [
      "009a70b4",
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
      "009a6fd8",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "009a6fb4"
      ]
    ],
    [
      "009a7090",
      "PARAM",
      [
        "storage",
        "002b7f93",
        null,
        null
      ]
    ],
    [
      "009a70b4",
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
- 009a6fd8 ["INT_ADD", "register:40f0:8", ["const:9a6fd8:8", "const:4:8"]]
- 009a6fd8 ["CALL", null, ["callee:00c58010:8"]]
+ 009a702c ["INT_ADD", "register:40f0:8", ["const:9a702c:8", "const:4:8"]]
+ 009a702c ["CALL", null, ["callee:00c58010:8"]]
- 009a7044 ["INT_ADD", "register:40f0:8", ["const:9a7044:8", "const:4:8"]]
- 009a7044 ["CALL", null, ["callee:00441ed4:8"]]
+ 009a7098 ["INT_ADD", "register:40f0:8", ["const:9a7098:8", "const:4:8"]]
+ 009a7098 ["CALL", null, ["callee:00441ed4:8"]]
- 009a706c ["INT_ADD", "register:40f0:8", ["const:9a706c:8", "const:4:8"]]
- 009a706c ["CALL", null, ["callee:00442834:8"]]
+ 009a70c0 ["INT_ADD", "register:40f0:8", ["const:9a70c0:8", "const:4:8"]]
+ 009a70c0 ["CALL", null, ["callee:00442834:8"]]
~~~


<a id="compare-fa0d936993466e23ff8aa0c1fe2a4195"></a>

### [`009a76e8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009a7/009a76e8.md) → [`009a773c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009a7/009a773c.md) FUN_009a773c

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 4件 [`009a5c04`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009a5/009a5c04.md) [`009a76e8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009a7/009a76e8.md) [`009b0504`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009b0/009b0504.md) [`00b0e934`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b0e/00b0e934.md) · 呼出先 23件 [`0043b764`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043b764.md) [`0043bb20`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043bb20.md) [`0043ddd8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043d/0043ddd8.md) [`00440f70`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00440/00440f70.md) [`00441cec`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00441/00441cec.md)
- 新版 呼出元 4件 [`009a5c58`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009a5/009a5c58.md) [`009a773c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009a7/009a773c.md) [`009b0558`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009b0/009b0558.md) [`00b0e9d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b0e/00b0e9d0.md) · 呼出先 23件 [`0043b7a4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b7a4.md) [`0043bb60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bb60.md) [`0043de18`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043d/0043de18.md) [`00440fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00440/00440fb0.md) [`00441d2c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00441/00441d2c.md)

変更の種類 branch_condition_or_target, call, call_argument_candidate, call_count, cfg_edge_inventory, constant, control_flow, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, store_condition, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 83.74% / 新版 83.74%

優先判定に残った影響 `call_argument_candidate` 14件, `store_condition` 4件, `unresolved_branch_alignment` 13件, `unresolved_call_alignment` 8件, `unresolved_store_alignment` 3件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "009a77cc",
      "incomplete_value": true,
      "site": "009a77d8",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:40d0:8"
          ],
          [
            "live",
            "register:40a8:8"
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
      "definition_site": "009a7890",
      "incomplete_value": false,
      "site": "009a7898",
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
      "definition_site": "009a783c",
      "incomplete_value": false,
      "site": "009a7844",
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
      "definition_site": "009a794c",
      "incomplete_value": false,
      "site": "009a7954",
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
      "definition_site": "009a78f8",
      "incomplete_value": false,
      "site": "009a7900",
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
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:009a775c",
      "WRITE",
      [
        "storage",
        "Stack[-0xe8]",
        null,
        null
      ]
    ],
    [
      "009a7890",
      "PARAM",
      [
        "storage",
        "002b7f53",
        null,
        null
      ]
    ],
    [
      "009a78b0",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "unmatched:009a79e8"
      ]
    ]
  ],
  "added": [
    [
      "009a77b0",
      "WRITE",
      [
        "storage",
        "Stack[-0xe8]",
        null,
        null
      ]
    ],
    [
      "009a7890",
      "PARAM",
      [
        "storage",
        "002b7f93",
        null,
        null
      ]
    ],
    [
      "009a78b0",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "009a7a3c"
      ]
    ]
  ]
}
~~~


~~~diff
- 009a7784 ["INT_EQUAL", "tmp:0:1", ["register:100:1", "register:103:1"]]
- 009a7784 ["CBRANCH", null, ["local:b3:8", "tmp:0:1"]]
+ 009a77d8 ["INT_EQUAL", "tmp:0:1", ["register:100:1", "register:103:1"]]
+ 009a77d8 ["CBRANCH", null, ["local:b4:8", "tmp:0:1"]]
- 009a77d8 ["INT_ADD", "register:40f0:8", ["const:9a77d8:8", "const:4:8"]]
- 009a77d8 ["CALL", null, ["callee:00c58010:8"]]
+ 009a782c ["INT_ADD", "register:40f0:8", ["const:9a782c:8", "const:4:8"]]
+ 009a782c ["CALL", null, ["callee:00c58010:8"]]
- 009a7844 ["INT_ADD", "register:40f0:8", ["const:9a7844:8", "const:4:8"]]
- 009a7844 ["CALL", null, ["callee:00441ed4:8"]]
+ 009a7898 ["INT_ADD", "register:40f0:8", ["const:9a7898:8", "const:4:8"]]
+ 009a7898 ["CALL", null, ["callee:00441ed4:8"]]
~~~


<a id="compare-f399722b4c98cbb9bd4e5e4279d5ff25"></a>

### [`009a801c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009a8/009a801c.md) → [`009a8070`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009a8/009a8070.md) FUN_009a8070

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`009a50c0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009a5/009a50c0.md) · 呼出先 7件 [`00597ed0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00597/00597ed0.md) [`005b733c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005b7/005b733c.md) [`00c53cd0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c53/00c53cd0.md) [`00c53d00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c53/00c53d00.md) [`00c57e80`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e80.md)
- 新版 呼出元 1件 [`009a5114`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009a5/009a5114.md) · 呼出先 7件 [`00597f10`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00597/00597f10.md) [`005b737c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005b7/005b737c.md) [`00c53d70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53d70.md) [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md)

変更の種類 call_argument_candidate, constant, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, store_value, unresolved_store_alignment

命令の説明率　旧版 92.21% / 新版 92.21%

優先判定に残った影響 `call_argument_candidate` 1件, `store_value` 2件, `unresolved_store_alignment` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "009a809c",
      "value": [
        "live",
        "register:4040:8"
      ]
    },
    "old": {
      "definition_site": "009a8040",
      "incomplete_value": true,
      "site": "009a8048",
      "value": [
        "LOAD",
        "8",
        [
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
                "const:28:8"
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
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "009a80a8",
      "incomplete_value": false,
      "site": "009a80b0",
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
      "definition_site": "009a8054",
      "incomplete_value": false,
      "site": "009a805c",
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
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "009a80c8",
      "incomplete_value": false,
      "site": "009a80cc",
      "value": [
        "leaf",
        "const:1:8"
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
      "009a80b0",
      "DATA",
      [
        "storage",
        "00c705c0",
        null,
        "pointer"
      ]
    ],
    [
      "009a8168",
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
      "009a80b0",
      "DATA",
      [
        "storage",
        "00c70690",
        null,
        "pointer"
      ]
    ],
    [
      "009a8168",
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
- 009a809c ["COPY", "register:0:8", ["register:4040:8"]]
- 009a809c ["INT_ADD", "register:40f0:8", ["const:9a809c:8", "const:4:8"]]
- 009a809c ["CALLIND", null, ["register:0:8"]]
+ 009a80f0 ["COPY", "register:0:8", ["register:4040:8"]]
+ 009a80f0 ["INT_ADD", "register:40f0:8", ["const:9a80f0:8", "const:4:8"]]
+ 009a80f0 ["CALLIND", null, ["register:0:8"]]
- 009a80cc ["INT_ADD", "register:40f0:8", ["const:9a80cc:8", "const:4:8"]]
- 009a80cc ["CALL", null, ["callee:00c53d70:8"]]
+ 009a8120 ["INT_ADD", "register:40f0:8", ["const:9a8120:8", "const:4:8"]]
+ 009a8120 ["CALL", null, ["callee:00c53d70:8"]]
- 009a8040 ["INT_ADD", "tmp:0:8", ["register:40c0:8", "const:28:8"]]
- 009a8040 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-daca3db4d9c437d814ae8757a9a9e3f1"></a>

### [`009a8194`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009a8/009a8194.md) → [`009a81e8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009a8/009a81e8.md) FUN_009a81e8

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 0件 
- 新版 呼出元 0件  · 呼出先 0件 

変更の種類 branch_value, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, operands_and_dependencies, operation_sequence, unresolved_return_alignment

命令の説明率　旧版 88.89% / 新版 88.89%

優先判定に残った影響 `branch_value` 1件, `unresolved_return_alignment` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "branch_value",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "009a8214",
      "value": [
        "live",
        "register:101:1"
      ]
    },
    "old": {
      "definition_site": "009a81b8",
      "incomplete_value": true,
      "site": "009a81c0",
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
                "register:4000:8"
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
      "009a8210",
      "DATA",
      [
        "storage",
        "00c88830",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "009a8210",
      "DATA",
      [
        "storage",
        "00c88900",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 009a81ac ["COPY", "tmp:0:8", ["const:830:8"]]
- 009a81ac ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 009a81ac ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 009a81ac ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 009a8200 ["COPY", "tmp:0:8", ["const:900:8"]]
+ 009a8200 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 009a8200 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 009a8200 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 009a81b8 ["INT_LESSEQUAL", "register:105:1", ["register:4048:8", "register:4000:8"]]
- 009a81b8 ["INT_SBORROW", "register:106:1", ["register:4000:8", "register:4048:8"]]
- 009a81b8 ["INT_SUB", "tmp:0:8", ["register:4000:8", "register:4048:8"]]
- 009a81b8 ["INT_SLESS", "register:107:1", ["tmp:0:8", "const:0:8"]]
- 009a81e0 ["COPY", "register:0:8", ["register:4040:8"]]
- 009a81e0 ["INT_ADD", "register:40f0:8", ["const:9a81e0:8", "const:4:8"]]
- 009a81e0 ["CALLIND", null, ["register:0:8"]]
+ 009a8234 ["COPY", "register:0:8", ["register:4040:8"]]
+ 009a8234 ["INT_ADD", "register:40f0:8", ["const:9a8234:8", "const:4:8"]]
+ 009a8234 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-42199a3cc31cffbd94dc29cd2802e9bb"></a>

### [`009a8224`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009a8/009a8224.md) → [`009a8278`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009a8/009a8278.md) FUN_009a8278

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)

変更の種類 branch_condition_or_target, call, call_count, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, local_def_use, memory_read, memory_read_count, operands_and_dependencies, operation_sequence, unresolved_call_alignment

命令の説明率　旧版 85.71% / 新版 85.71%

優先判定に残った影響 `unresolved_call_alignment` 1件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "009a82a0",
      "DATA",
      [
        "storage",
        "00c88830",
        null,
        "undefined *"
      ]
    ],
    [
      "unmatched:009a829c",
      "COMPUTED_CALL",
      [
        "unresolved_target",
        null
      ]
    ]
  ],
  "added": [
    [
      "009a82a0",
      "DATA",
      [
        "storage",
        "00c88900",
        null,
        "undefined *"
      ]
    ],
    [
      "009a82f0",
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
- 009a823c ["COPY", "tmp:0:8", ["const:830:8"]]
- 009a823c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 009a823c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 009a823c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 009a8240 ["COPY", "tmp:0:8", ["const:40:8"]]
- 009a8240 ["INT_CARRY", "register:105:1", ["register:4098:8", "tmp:0:8"]]
- 009a8240 ["INT_SCARRY", "register:106:1", ["register:4098:8", "tmp:0:8"]]
- 009a8240 ["INT_ADD", "tmp:1:8", ["register:4098:8", "tmp:0:8"]]
- 009a8244 ["COPY", "tmp:0:8", ["const:10:8"]]
- 009a8244 ["INT_CARRY", "register:105:1", ["register:4098:8", "tmp:0:8"]]
- 009a8244 ["INT_SCARRY", "register:106:1", ["register:4098:8", "tmp:0:8"]]
- 009a8244 ["INT_ADD", "tmp:1:8", ["register:4098:8", "tmp:0:8"]]
~~~


<a id="compare-4e645b3be96e08fcb249d7b5af25fcb8"></a>

### [`009a82b0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009a8/009a82b0.md) → [`009a8304`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009a8/009a8304.md) FUN_009a8304

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)

変更の種類 branch_condition_or_target, call_argument_candidate, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, store_condition, unresolved_branch_alignment, unresolved_store_alignment

命令の説明率　旧版 82.98% / 新版 82.98%

優先判定に残った影響 `call_argument_candidate` 1件, `store_condition` 1件, `unresolved_branch_alignment` 2件, `unresolved_store_alignment` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "009a8344",
      "incomplete_value": true,
      "site": "009a8354",
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
            "const:40:8"
          ]
        ]
      ]
    },
    "ordinal": 4,
    "slot": 2
  },
  {
    "confidence": "limited",
    "guard": [
      [
        "CONDITIONAL_JUMP",
        "009a82f0"
      ],
      [
        "CONDITIONAL_JUMP",
        "009a8344"
      ]
    ],
    "kind": "store_condition",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "009a8360",
      "value": [
        "live",
        "register:101:1"
      ]
    },
    "old": {
      "definition_site": "009a82ec",
      "incomplete_value": true,
      "site": "009a830c",
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
                "register:4000:8"
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
      "unmatched:009a82e0",
      "DATA",
      [
        "storage",
        "00c88830",
        null,
        "undefined *"
      ]
    ],
    [
      "unmatched:009a82e4",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "009a8354"
      ]
    ],
    [
      "unmatched:009a82f0",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "009a835c"
      ]
    ]
  ],
  "added": [
    [
      "009a8334",
      "DATA",
      [
        "storage",
        "00c88900",
        null,
        "undefined *"
      ]
    ],
    [
      "009a8338",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "009a8354"
      ]
    ],
    [
      "009a8344",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "009a835c"
      ]
    ]
  ]
}
~~~


~~~diff
- 009a8354 ["COPY", "register:0:8", ["register:4040:8"]]
- 009a8354 ["INT_ADD", "register:40f0:8", ["const:9a8354:8", "const:4:8"]]
- 009a8354 ["CALLIND", null, ["register:0:8"]]
+ 009a83a8 ["COPY", "register:0:8", ["register:4040:8"]]
+ 009a83a8 ["INT_ADD", "register:40f0:8", ["const:9a83a8:8", "const:4:8"]]
+ 009a83a8 ["CALLIND", null, ["register:0:8"]]
- 009a82c8 ["INT_ADD", "register:40f0:8", ["const:9a82c8:8", "const:4:8"]]
- 009a82c8 ["CALL", null, ["callee:00c57f60:8"]]
+ 009a831c ["INT_ADD", "register:40f0:8", ["const:9a831c:8", "const:4:8"]]
+ 009a831c ["CALL", null, ["callee:00c57f60:8"]]
- 009a82d8 ["COPY", "tmp:0:8", ["const:830:8"]]
- 009a82d8 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 009a82d8 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 009a82d8 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-4b152e48dc9a75b884a940ebc91b1544"></a>

### [`009a83b8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009a8/009a83b8.md) → [`009a840c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009a8/009a840c.md) FUN_009a840c

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 0件 
- 新版 呼出元 0件  · 呼出先 0件 

変更の種類 branch_condition_or_target, call, call_count, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, operands_and_dependencies, operation_sequence, store_condition, store_value, unresolved_branch_alignment, unresolved_call_alignment, unresolved_return_alignment

命令の説明率　旧版 59.62% / 新版 59.62%

優先判定に残った影響 `store_condition` 2件, `store_value` 1件, `unresolved_branch_alignment` 2件, `unresolved_call_alignment` 3件, `unresolved_return_alignment` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "009a8434",
      "incomplete_value": false,
      "site": "009a8434",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c88000:8"
          ],
          [
            "leaf",
            "const:900:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "009a83e0",
      "incomplete_value": false,
      "site": "009a83e0",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c88000:8"
          ],
          [
            "leaf",
            "const:830:8"
          ]
        ]
      ]
    },
    "ordinal": 5,
    "slot": 2
  },
  {
    "confidence": "limited",
    "guard": [
      [
        "FALL_THROUGH",
        "009a83f0"
      ],
      [
        "FALL_THROUGH",
        "009a8444"
      ]
    ],
    "kind": "store_condition",
    "new": {
      "definition_site": "009a8440",
      "incomplete_value": true,
      "site": "009a8454",
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
                "register:4000:8"
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
    "old": {
      "definition_site": "009a83ec",
      "incomplete_value": true,
      "site": "009a8400",
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
                "register:4000:8"
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
    "ordinal": 6,
    "slot": 0
  },
  {
    "confidence": "limited",
    "guard": [
      [
        "CONDITIONAL_JUMP",
        "009a83f0"
      ],
      [
        "CONDITIONAL_JUMP",
        "009a8444"
      ]
    ],
    "kind": "store_condition",
    "new": {
      "definition_site": "009a8440",
      "incomplete_value": true,
      "site": "009a8474",
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
                "register:4000:8"
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
    "old": {
      "definition_site": "009a83ec",
      "incomplete_value": true,
      "site": "009a8420",
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
                "register:4000:8"
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
      "009a8434",
      "DATA",
      [
        "storage",
        "00c88830",
        null,
        "undefined *"
      ]
    ],
    [
      "unmatched:009a83f0",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "009a8474"
      ]
    ],
    [
      "unmatched:009a843c",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "009a84ac"
      ]
    ]
  ],
  "added": [
    [
      "009a8434",
      "DATA",
      [
        "storage",
        "00c88900",
        null,
        "undefined *"
      ]
    ],
    [
      "009a8444",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "009a8474"
      ]
    ],
    [
      "009a8490",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "009a84ac"
      ]
    ]
  ]
}
~~~


~~~diff
- 009a8434 ["COPY", "register:0:8", ["register:4040:8"]]
- 009a8434 ["INT_ADD", "register:40f0:8", ["const:9a8434:8", "const:4:8"]]
- 009a8434 ["CALLIND", null, ["register:0:8"]]
- 009a8454 ["COPY", "register:0:8", ["register:4040:8"]]
- 009a8454 ["INT_ADD", "register:40f0:8", ["const:9a8454:8", "const:4:8"]]
- 009a8454 ["CALLIND", null, ["register:0:8"]]
- 009a8474 ["COPY", "register:0:8", ["register:4040:8"]]
- 009a8474 ["INT_ADD", "register:40f0:8", ["const:9a8474:8", "const:4:8"]]
- 009a8474 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-53833d5f908cb1083a585e39b628f51f"></a>

### [`009a85c8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009a8/009a85c8.md) → [`009a861c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009a8/009a861c.md) FUN_009a861c

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 5件 [`00459d74`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00459/00459d74.md) [`00c53cd0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c53/00c53cd0.md) [`00c53d00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c53/00c53d00.md) [`00c57e80`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e80.md) [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md)
- 新版 呼出元 0件  · 呼出先 5件 [`00459db4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00459/00459db4.md) [`00c53d70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53d70.md) [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, operands_and_dependencies, operation_sequence, unresolved_branch_alignment

命令の説明率　旧版 96.47% / 新版 96.47%

優先判定に残った影響 `call_argument_candidate` 2件, `unresolved_branch_alignment` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "009a8638",
      "incomplete_value": true,
      "site": "009a8640",
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
    "ordinal": 3,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "009a86a4",
      "incomplete_value": true,
      "site": "009a86ac",
      "value": [
        "live",
        "register:8:8"
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
      "unmatched:009a8644",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "009a8704"
      ]
    ],
    [
      "unmatched:009a86ec",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "009a87a0"
      ]
    ]
  ],
  "added": [
    [
      "009a8698",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "009a8704"
      ]
    ],
    [
      "009a8740",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "009a87a0"
      ]
    ]
  ]
}
~~~


~~~diff
- 009a8640 ["INT_ADD", "register:40f0:8", ["const:9a8640:8", "const:4:8"]]
- 009a8640 ["CALL", null, ["callee:00c53da0:8"]]
+ 009a8694 ["INT_ADD", "register:40f0:8", ["const:9a8694:8", "const:4:8"]]
+ 009a8694 ["CALL", null, ["callee:00c53da0:8"]]
- 009a86ac ["COPY", "register:0:8", ["register:4040:8"]]
- 009a86ac ["INT_ADD", "register:40f0:8", ["const:9a86ac:8", "const:4:8"]]
- 009a86ac ["CALLIND", null, ["register:0:8"]]
+ 009a8700 ["COPY", "register:0:8", ["register:4040:8"]]
+ 009a8700 ["INT_ADD", "register:40f0:8", ["const:9a8700:8", "const:4:8"]]
+ 009a8700 ["CALLIND", null, ["register:0:8"]]
- 009a85f4 ["INT_EQUAL", "tmp:0:1", ["register:40b0:8", "const:0:8"]]
- 009a85f4 ["CBRANCH", null, ["local:b6:8", "tmp:0:1"]]
+ 009a8648 ["INT_EQUAL", "tmp:0:1", ["register:40b0:8", "const:0:8"]]
+ 009a8648 ["CBRANCH", null, ["local:b7:8", "tmp:0:1"]]
~~~


<a id="compare-5d85601619d8367f4057323c25f53ad7"></a>

### [`009a8778`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009a8/009a8778.md) → [`009a87cc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009a8/009a87cc.md) FUN_009a87cc

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 1件 [`009a57b4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009a5/009a57b4.md) · 呼出先 7件 [`00597ed0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00597/00597ed0.md) [`005b733c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005b7/005b733c.md) [`00c53cd0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c53/00c53cd0.md) [`00c53d00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c53/00c53d00.md) [`00c57e80`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e80.md)
- 新版 呼出元 1件 [`009a5808`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009a5/009a5808.md) · 呼出先 7件 [`00597f10`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00597/00597f10.md) [`005b737c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005b7/005b737c.md) [`00c53d70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53d70.md) [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md)

変更の種類 branch_condition_or_target, call, call_argument_candidate, call_count, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 87.01% / 新版 87.01%

優先判定に残った影響 `call_argument_candidate` 1件, `unresolved_branch_alignment` 1件, `unresolved_call_alignment` 2件, `unresolved_store_alignment` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "009a883c",
      "incomplete_value": true,
      "site": "009a8844",
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
      "unmatched:009a87b8",
      "DATA",
      [
        "storage",
        "00c705c0",
        null,
        "pointer"
      ]
    ],
    [
      "unmatched:009a87d4",
      "WRITE",
      [
        "storage",
        "Stack[-0x50]",
        null,
        null
      ]
    ],
    [
      "unmatched:009a8870",
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
      "009a880c",
      "DATA",
      [
        "storage",
        "00c70690",
        null,
        "pointer"
      ]
    ],
    [
      "009a8828",
      "WRITE",
      [
        "storage",
        "Stack[-0x50]",
        null,
        null
      ]
    ],
    [
      "009a88c4",
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
- 009a8844 ["INT_ADD", "register:40f0:8", ["const:9a8844:8", "const:4:8"]]
- 009a8844 ["CALL", null, ["callee:00c53d70:8"]]
+ 009a8898 ["INT_ADD", "register:40f0:8", ["const:9a8898:8", "const:4:8"]]
+ 009a8898 ["CALL", null, ["callee:00c53d70:8"]]
- 009a87a8 ["INT_ADD", "register:40f0:8", ["const:9a87a8:8", "const:4:8"]]
- 009a87a8 ["CALL", null, ["callee:00c57f60:8"]]
+ 009a87fc ["INT_ADD", "register:40f0:8", ["const:9a87fc:8", "const:4:8"]]
+ 009a87fc ["CALL", null, ["callee:00c57f60:8"]]
- 009a87b0 ["COPY", "tmp:0:8", ["const:5c0:8"]]
- 009a87b0 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 009a87b0 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 009a87b0 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-57c13dd3fd1830e05403568901172190"></a>

### [`009a88f0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009a8/009a88f0.md) → [`009a8944`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009a8/009a8944.md) FUN_009a8944

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 0件 
- 新版 呼出元 0件  · 呼出先 0件 

変更の種類 branch_condition_or_target, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, operands_and_dependencies, operation_sequence, store_value, unresolved_branch_alignment

命令の説明率　旧版 86.11% / 新版 86.11%

優先判定に残った影響 `store_value` 1件, `unresolved_branch_alignment` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "009a895c",
      "incomplete_value": false,
      "site": "009a896c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c88000:8"
          ],
          [
            "leaf",
            "const:980:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "009a8908",
      "incomplete_value": false,
      "site": "009a8918",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c88000:8"
          ],
          [
            "leaf",
            "const:8b0:8"
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
      "009a896c",
      "DATA",
      [
        "storage",
        "00c888b0",
        null,
        "undefined *"
      ]
    ],
    [
      "unmatched:009a8948",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "009a89ac"
      ]
    ]
  ],
  "added": [
    [
      "009a896c",
      "DATA",
      [
        "storage",
        "00c88980",
        null,
        "undefined *"
      ]
    ],
    [
      "009a899c",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "009a89ac"
      ]
    ]
  ]
}
~~~


~~~diff
- 009a8908 ["COPY", "tmp:0:8", ["const:8b0:8"]]
- 009a8908 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 009a8908 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 009a8908 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 009a895c ["COPY", "tmp:0:8", ["const:980:8"]]
+ 009a895c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 009a895c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 009a895c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 009a893c ["COPY", "register:0:8", ["register:4040:8"]]
- 009a893c ["INT_ADD", "register:40f0:8", ["const:9a893c:8", "const:4:8"]]
- 009a893c ["CALLIND", null, ["register:0:8"]]
+ 009a8990 ["COPY", "register:0:8", ["register:4040:8"]]
+ 009a8990 ["INT_ADD", "register:40f0:8", ["const:9a8990:8", "const:4:8"]]
+ 009a8990 ["CALLIND", null, ["register:0:8"]]
- 009a8944 ["INT_LESSEQUAL", "register:105:1", ["register:40a0:8", "register:4000:8"]]
- 009a8944 ["INT_SBORROW", "register:106:1", ["register:4000:8", "register:40a0:8"]]
- 009a8944 ["INT_SUB", "tmp:0:8", ["register:4000:8", "register:40a0:8"]]
- 009a8944 ["INT_SLESS", "register:107:1", ["tmp:0:8", "const:0:8"]]
~~~


<a id="compare-bef1443b16f9cf40e1227905227d0b36"></a>

### [`009a8a0c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009a8/009a8a0c.md) → [`009a8a60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009a8/009a8a60.md) FUN_009a8a60

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)

変更の種類 branch_condition_or_target, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, store_condition, unresolved_branch_alignment, unresolved_store_alignment

命令の説明率　旧版 85.11% / 新版 85.11%

優先判定に残った影響 `store_condition` 1件, `unresolved_branch_alignment` 1件, `unresolved_store_alignment` 4件

~~~json
[
  {
    "confidence": "limited",
    "guard": [
      [
        "CONDITIONAL_JUMP",
        "009a8a88"
      ],
      [
        "CONDITIONAL_JUMP",
        "009a8adc"
      ]
    ],
    "kind": "store_condition",
    "new": {
      "definition_site": "009a8ad8",
      "incomplete_value": true,
      "site": "009a8afc",
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
                "register:4000:8"
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
    "old": {
      "definition_site": "009a8a84",
      "incomplete_value": true,
      "site": "009a8aa8",
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
                "register:4000:8"
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
      "unmatched:009a8a0c",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "unmatched:009a8a10",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "unmatched:009a8a3c",
      "DATA",
      [
        "storage",
        "00c888b0",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "009a8a60",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "009a8a64",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "009a8a90",
      "DATA",
      [
        "storage",
        "00c88980",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 009a8a0c ["COPY", "tmp:0:8", ["register:40e8:8"]]
- 009a8a0c ["COPY", "tmp:1:8", ["register:40f0:8"]]
- 009a8a0c ["INT_ADD", "register:8:8", ["register:8:8", "const:ffffffffffffffd0:8"]]
- 009a8a0c ["STORE", null, ["const:1b1:8", "register:8:8", "tmp:0:8"]]
- 009a8a10 ["INT_ADD", "tmp:0:8", ["register:8:8", "const:10:8"]]
- 009a8a10 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:40a8:8"]]
- 009a8a24 ["INT_ADD", "register:40f0:8", ["const:9a8a24:8", "const:4:8"]]
- 009a8a24 ["CALL", null, ["callee:00c57f60:8"]]
+ 009a8a78 ["INT_ADD", "register:40f0:8", ["const:9a8a78:8", "const:4:8"]]
+ 009a8a78 ["CALL", null, ["callee:00c57f60:8"]]
~~~


<a id="compare-dbc8648cea24de1e3bbd47ec11ee7df0"></a>

### [`009a8b14`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009a8/009a8b14.md) → [`009a8b68`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009a8/009a8b68.md) FUN_009a8b68

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 0件 
- 新版 呼出元 0件  · 呼出先 0件 

変更の種類 branch_condition_or_target, call, call_count, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 86.54% / 新版 86.54%

優先判定に残った影響 `unresolved_branch_alignment` 1件, `unresolved_call_alignment` 1件, `unresolved_store_alignment` 4件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:009a8b14",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "unmatched:009a8b18",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "unmatched:009a8b3c",
      "DATA",
      [
        "storage",
        "00c888b0",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "009a8b68",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "009a8b6c",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "009a8b90",
      "DATA",
      [
        "storage",
        "00c88980",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 009a8b14 ["COPY", "tmp:0:8", ["register:40e8:8"]]
- 009a8b14 ["COPY", "tmp:1:8", ["register:40f0:8"]]
- 009a8b14 ["INT_ADD", "register:8:8", ["register:8:8", "const:ffffffffffffffd0:8"]]
- 009a8b14 ["STORE", null, ["const:1b1:8", "register:8:8", "tmp:0:8"]]
- 009a8b18 ["INT_ADD", "tmp:0:8", ["register:8:8", "const:10:8"]]
- 009a8b18 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:40a8:8"]]
- 009a8b34 ["COPY", "tmp:0:8", ["const:8b0:8"]]
- 009a8b34 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 009a8b34 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 009a8b34 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-bd72adfa75b0b58571b27ff79e2cdac7"></a>

### [`009a8ca4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009a8/009a8ca4.md) → [`009a8cf8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009a8/009a8cf8.md) FUN_009a8cf8

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 1件 [`009a57b4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009a5/009a57b4.md) · 呼出先 1件 [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md)
- 新版 呼出元 1件 [`009a5808`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009a5/009a5808.md) · 呼出先 1件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)

変更の種類 cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, operands_and_dependencies, operation_sequence, unresolved_branch_alignment

命令の説明率　旧版 93.75% / 新版 93.75%

アドレスに依存する影響 `unresolved_branch_alignment` 1件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:009a8cc4",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "009a8d28"
      ]
    ]
  ],
  "added": [
    [
      "009a8d18",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "009a8d28"
      ]
    ]
  ]
}
~~~


~~~diff
- 009a8cc0 ["INT_LESSEQUAL", "register:105:1", ["register:4048:8", "register:4000:8"]]
- 009a8cc0 ["INT_SBORROW", "register:106:1", ["register:4000:8", "register:4048:8"]]
- 009a8cc0 ["INT_SUB", "tmp:0:8", ["register:4000:8", "register:4048:8"]]
- 009a8cc0 ["INT_SLESS", "register:107:1", ["tmp:0:8", "const:0:8"]]
- 009a8cc4 ["CBRANCH", null, ["local:b4:8", "register:101:1"]]
- 009a8ce4 ["COPY", "register:0:8", ["register:4040:8"]]
- 009a8ce4 ["INT_ADD", "register:40f0:8", ["const:9a8ce4:8", "const:4:8"]]
- 009a8ce4 ["CALLIND", null, ["register:0:8"]]
+ 009a8d38 ["COPY", "register:0:8", ["register:4040:8"]]
+ 009a8d38 ["INT_ADD", "register:40f0:8", ["const:9a8d38:8", "const:4:8"]]
+ 009a8d38 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-d29fb34647060fd9d12acf7d9ad69f12"></a>

### [`009a8d24`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009a8/009a8d24.md) → [`009a8d78`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009a8/009a8d78.md) FUN_009a8d78

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 5件 [`00459d74`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00459/00459d74.md) [`00c53cd0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c53/00c53cd0.md) [`00c53d00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c53/00c53d00.md) [`00c57e80`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e80.md) [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md)
- 新版 呼出元 0件  · 呼出先 5件 [`00459db4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00459/00459db4.md) [`00c53d70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53d70.md) [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)

変更の種類 branch_condition_or_target, call, call_argument_candidate, call_count, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 91.76% / 新版 91.76%

優先判定に残った影響 `call_argument_candidate` 1件, `unresolved_branch_alignment` 2件, `unresolved_call_alignment` 1件, `unresolved_store_alignment` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "009a8d54",
      "incomplete_value": true,
      "site": "009a8d5c",
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
            "const:8:8"
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
      "unmatched:009a8d28",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "unmatched:009a8d78",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "unmatched:009a8dd0"
      ]
    ],
    [
      "unmatched:009a8dcc",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "009a8dd0"
      ]
    ]
  ],
  "added": [
    [
      "009a8d7c",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "009a8dcc",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "009a8e24"
      ]
    ],
    [
      "009a8e20",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "009a8dd0"
      ]
    ]
  ]
}
~~~


~~~diff
- 009a8d5c ["INT_ADD", "register:40f0:8", ["const:9a8d5c:8", "const:4:8"]]
- 009a8d5c ["CALL", null, ["callee:00c53d70:8"]]
+ 009a8db0 ["INT_ADD", "register:40f0:8", ["const:9a8db0:8", "const:4:8"]]
+ 009a8db0 ["CALL", null, ["callee:00c53d70:8"]]
- 009a8d24 ["INT_SUB", "register:8:8", ["register:8:8", "const:60:8"]]
- 009a8d28 ["COPY", "tmp:0:8", ["register:40e8:8"]]
- 009a8d28 ["COPY", "tmp:1:8", ["register:40f0:8"]]
- 009a8d28 ["INT_ADD", "tmp:2:8", ["register:8:8", "const:30:8"]]
- 009a8d28 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
~~~


<a id="compare-1267e9244e2f5b34b5eca426e4cd1e3e"></a>

### [`009a8ed4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009a8/009a8ed4.md) → [`009a8f28`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009a8/009a8f28.md) _INIT_194

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 7件 [`0043ae70`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043a/0043ae70.md) [`0043b7f8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043b7f8.md) [`00bc47f0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bc4/00bc47f0.md) [`00c57e30`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e30.md) [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md)
- 新版 呼出元 0件  · 呼出先 7件 [`0043aeb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043a/0043aeb0.md) [`0043b838`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b838.md) [`00bc488c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bc4/00bc488c.md) [`00c57f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f00.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, constant, control_flow, control_flow_count, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, store_destination, store_value, unresolved_branch_alignment, unresolved_store_alignment

命令の説明率　旧版 70.83% / 新版 70.83%

優先判定に残った影響 `call_argument_candidate` 9件, `store_destination` 3件, `store_value` 8件, `unresolved_branch_alignment` 1件, `unresolved_store_alignment` 11件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "009a8f64",
      "incomplete_value": true,
      "site": "009a8f80",
      "value": [
        "LOAD",
        "16",
        [
          [
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
      "definition_site": "009a8f10",
      "incomplete_value": true,
      "site": "009a8f2c",
      "value": [
        "LOAD",
        "16",
        [
          [
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
      "definition_site": "009a8f88",
      "incomplete_value": true,
      "site": "009a8fa4",
      "value": [
        "LOAD",
        "16",
        [
          [
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
      "definition_site": "009a8f34",
      "incomplete_value": true,
      "site": "009a8f50",
      "value": [
        "LOAD",
        "16",
        [
          [
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
      "definition_site": "009a8fa8",
      "incomplete_value": true,
      "site": "009a8fc4",
      "value": [
        "LOAD",
        "16",
        [
          [
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
      "definition_site": "009a8f54",
      "incomplete_value": true,
      "site": "009a8f70",
      "value": [
        "LOAD",
        "16",
        [
          [
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
      "009a8f64",
      "READ",
      [
        "storage",
        "002b7f26",
        null,
        "string"
      ]
    ],
    [
      "009a8f88",
      "READ",
      [
        "storage",
        "002b7f39",
        null,
        "string"
      ]
    ],
    [
      "009a8fa8",
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
      "009a8f64",
      "READ",
      [
        "storage",
        "002b7f66",
        null,
        "string"
      ]
    ],
    [
      "009a8f88",
      "READ",
      [
        "storage",
        "002b7f79",
        null,
        "string"
      ]
    ],
    [
      "009a8fa8",
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
- 009a8fc8 ["COPY", "tmp:0:8", ["const:f09:8"]]
- 009a8fc8 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 009a8fc8 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 009a8fc8 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 009a901c ["COPY", "tmp:0:8", ["const:ebc:8"]]
+ 009a901c ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 009a901c ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 009a901c ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
- 009a9034 ["INT_ADD", "register:40f0:8", ["const:9a9034:8", "const:4:8"]]
- 009a9034 ["CALL", null, ["callee:0043b838:8"]]
+ 009a9088 ["INT_ADD", "register:40f0:8", ["const:9a9088:8", "const:4:8"]]
+ 009a9088 ["CALL", null, ["callee:0043b838:8"]]
- 009a9070 ["INT_ADD", "register:40f0:8", ["const:9a9070:8", "const:4:8"]]
- 009a9070 ["CALL", null, ["callee:0043b838:8"]]
+ 009a90c4 ["INT_ADD", "register:40f0:8", ["const:9a90c4:8", "const:4:8"]]
+ 009a90c4 ["CALL", null, ["callee:0043b838:8"]]
~~~


<a id="compare-761858692f8c54395bfefde944b204b1"></a>

### [`009a9300`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009a9/009a9300.md) → [`009a9354`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009a9/009a9354.md) FUN_009a9354

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 4件 [`007644e4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00764/007644e4.md) [`009acc30`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009ac/009acc30.md) [`009b5bb8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009b5/009b5bb8.md) [`009b5c2c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009b5/009b5c2c.md) · 呼出先 2件 [`00a33b9c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a33/00a33b9c.md) [`00c58190`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58190.md)
- 新版 呼出元 4件 [`0076453c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00764/0076453c.md) [`009acc84`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009ac/009acc84.md) [`009b5c0c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009b5/009b5c0c.md) [`009b5c80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009b5/009b5c80.md) · 呼出先 2件 [`00a33bf0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a33/00a33bf0.md) [`00c58260`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58260.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 96.00% / 新版 96.00%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "009a9374",
      "incomplete_value": false,
      "site": "009a937c",
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
            "const:38e:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "009a9320",
      "incomplete_value": false,
      "site": "009a9328",
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
            "const:3ea:8"
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
      "009a9374",
      "PARAM",
      [
        "storage",
        "002a63ea",
        null,
        "undefined1"
      ]
    ]
  ],
  "added": [
    [
      "009a9374",
      "PARAM",
      [
        "storage",
        "002a638e",
        null,
        "undefined1"
      ]
    ]
  ]
}
~~~


~~~diff
- 009a9328 ["INT_ADD", "register:40f0:8", ["const:9a9328:8", "const:4:8"]]
- 009a9328 ["CALL", null, ["callee:00c58260:8"]]
+ 009a937c ["INT_ADD", "register:40f0:8", ["const:9a937c:8", "const:4:8"]]
+ 009a937c ["CALL", null, ["callee:00c58260:8"]]
- 009a9320 ["COPY", "tmp:0:8", ["const:3ea:8"]]
- 009a9320 ["INT_CARRY", "register:105:1", ["register:4008:8", "tmp:0:8"]]
- 009a9320 ["INT_SCARRY", "register:106:1", ["register:4008:8", "tmp:0:8"]]
- 009a9320 ["INT_ADD", "tmp:1:8", ["register:4008:8", "tmp:0:8"]]
+ 009a9374 ["COPY", "tmp:0:8", ["const:38e:8"]]
+ 009a9374 ["INT_CARRY", "register:105:1", ["register:4008:8", "tmp:0:8"]]
+ 009a9374 ["INT_SCARRY", "register:106:1", ["register:4008:8", "tmp:0:8"]]
+ 009a9374 ["INT_ADD", "tmp:1:8", ["register:4008:8", "tmp:0:8"]]
- 009a934c ["INT_ADD", "register:40f0:8", ["const:9a934c:8", "const:4:8"]]
- 009a934c ["CALL", null, ["callee:00a33bf0:8"]]
+ 009a93a0 ["INT_ADD", "register:40f0:8", ["const:9a93a0:8", "const:4:8"]]
+ 009a93a0 ["CALL", null, ["callee:00a33bf0:8"]]
~~~


<a id="compare-66789b62bb7a1768978bbc4a2b06f4b5"></a>

### [`009a9444`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009a9/009a9444.md) → [`009a9498`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009a9/009a9498.md) FUN_009a9498

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 2件 [`009b5bb8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009b5/009b5bb8.md) [`00a06d9c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a06/00a06d9c.md) · 呼出先 7件 [`004802f8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00480/004802f8.md) [`004803f0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00480/004803f0.md) [`004807cc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00480/004807cc.md) [`00a33b9c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a33/00a33b9c.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md)
- 新版 呼出元 2件 [`009b5c0c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009b5/009b5c0c.md) [`00a06df0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a06/00a06df0.md) · 呼出先 7件 [`00480338`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00480/00480338.md) [`00480430`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00480/00480430.md) [`0048080c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00480/0048080c.md) [`00a33bf0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a33/00a33bf0.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_store_alignment

命令の説明率　旧版 90.22% / 新版 90.22%

優先判定に残った影響 `call_argument_candidate` 4件, `unresolved_branch_alignment` 1件, `unresolved_store_alignment` 7件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "009a9494",
      "incomplete_value": true,
      "site": "009a949c",
      "value": [
        "live",
        "register:40a0:8"
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
      "definition_site": "009a94c0",
      "incomplete_value": true,
      "site": "009a94c8",
      "value": [
        "INT_ZEXT",
        "8",
        [
          [
            "live",
            "register:4000:4"
          ]
        ]
      ]
    },
    "ordinal": 6,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "009a9530",
      "incomplete_value": true,
      "site": "009a9534",
      "value": [
        "live",
        "register:40a0:8"
      ]
    },
    "ordinal": 13,
    "slot": 1
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:009a9448",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "unmatched:009a944c",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "unmatched:009a9450",
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
      "009a949c",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "009a94a0",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "009a94a4",
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
- 009a9474 ["INT_ADD", "register:40f0:8", ["const:9a9474:8", "const:4:8"]]
- 009a9474 ["CALL", null, ["callee:00480430:8"]]
+ 009a94c8 ["INT_ADD", "register:40f0:8", ["const:9a94c8:8", "const:4:8"]]
+ 009a94c8 ["CALL", null, ["callee:00480430:8"]]
- 009a949c ["INT_ADD", "register:40f0:8", ["const:9a949c:8", "const:4:8"]]
- 009a949c ["CALL", null, ["callee:00480338:8"]]
+ 009a94f0 ["INT_ADD", "register:40f0:8", ["const:9a94f0:8", "const:4:8"]]
+ 009a94f0 ["CALL", null, ["callee:00480338:8"]]
+ 009a949c ["COPY", "tmp:0:8", ["register:40e8:8"]]
+ 009a949c ["COPY", "tmp:1:8", ["register:40f0:8"]]
+ 009a949c ["INT_ADD", "tmp:2:8", ["register:8:8", "const:20:8"]]
+ 009a949c ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
~~~


<a id="compare-37f1856743e2db180f5df8ffb67684ff"></a>

### [`009a95f0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009a9/009a95f0.md) → [`009a9644`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009a9/009a9644.md) FUN_009a9644

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`009b5c2c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009b5/009b5c2c.md) · 呼出先 9件 [`0048ce84`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0048c/0048ce84.md) [`0080062c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00800/0080062c.md) [`00a33b9c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a33/00a33b9c.md) [`00a33c1c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a33/00a33c1c.md) [`00a34644`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a34/00a34644.md)
- 新版 呼出元 1件 [`009b5c80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009b5/009b5c80.md) · 呼出先 9件 [`0048cec4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048c/0048cec4.md) [`00800684`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00800/00800684.md) [`00a33bf0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a33/00a33bf0.md) [`00a33c70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a33/00a33c70.md) [`00a34698`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a34/00a34698.md)

変更の種類 branch_condition_or_target, call_argument_candidate, comparison, comparison_count, constant, control_flow, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_store_alignment

命令の説明率　旧版 96.74% / 新版 96.74%

優先判定に残った影響 `call_argument_candidate` 4件, `unresolved_store_alignment` 3件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "009a96b8",
      "incomplete_value": true,
      "site": "009a96d4",
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
            "const:38:8"
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
    "new": {
      "definition_site": "009a96bc",
      "incomplete_value": false,
      "site": "009a96d4",
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
    "ordinal": 5,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "009a96e4",
      "incomplete_value": true,
      "site": "009a96e8",
      "value": [
        "live",
        "register:40a8:8"
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
      "unmatched:009a95f0",
      "WRITE",
      [
        "storage",
        "Stack[-0x40]",
        null,
        null
      ]
    ],
    [
      "unmatched:009a95f4",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "unmatched:009a964c",
      "PARAM",
      [
        "storage",
        "002a63ea",
        null,
        "undefined1"
      ]
    ]
  ],
  "added": [
    [
      "009a9644",
      "WRITE",
      [
        "storage",
        "Stack[-0x40]",
        null,
        null
      ]
    ],
    [
      "009a9648",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "009a96a0",
      "PARAM",
      [
        "storage",
        "002a638e",
        null,
        "undefined1"
      ]
    ]
  ]
}
~~~


~~~diff
- 009a965c ["INT_ADD", "register:40f0:8", ["const:9a965c:8", "const:4:8"]]
- 009a965c ["CALL", null, ["callee:00c58260:8"]]
+ 009a96b0 ["INT_ADD", "register:40f0:8", ["const:9a96b0:8", "const:4:8"]]
+ 009a96b0 ["CALL", null, ["callee:00c58260:8"]]
- 009a9680 ["INT_ADD", "register:40f0:8", ["const:9a9680:8", "const:4:8"]]
- 009a9680 ["CALL", null, ["callee:00a33bf0:8"]]
+ 009a96d4 ["INT_ADD", "register:40f0:8", ["const:9a96d4:8", "const:4:8"]]
+ 009a96d4 ["CALL", null, ["callee:00a33bf0:8"]]
- 009a9694 ["INT_ADD", "register:40f0:8", ["const:9a9694:8", "const:4:8"]]
- 009a9694 ["CALL", null, ["callee:00a378d0:8"]]
+ 009a96e8 ["INT_ADD", "register:40f0:8", ["const:9a96e8:8", "const:4:8"]]
+ 009a96e8 ["CALL", null, ["callee:00a378d0:8"]]
~~~


<a id="compare-5b4e873c11f025fbb389546481236c1c"></a>

### [`009a9768`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009a9/009a9768.md) → [`009a97bc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009a9/009a97bc.md) FUN_009a97bc

根拠 `leaf_bytes_and_local_order` · `raw_instruction_pcode` · `observed` · 参照 `equal` · `compiler_shape_candidate`

- 旧版 呼出元 9件 [`0072b1a0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0072b/0072b1a0.md) [`007644e4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00764/007644e4.md) [`007929c8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00792/007929c8.md) [`00793908`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00793/00793908.md) [`009acc30`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009ac/009acc30.md) · 呼出先 0件 
- 新版 呼出元 9件 [`0072b1f8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0072b/0072b1f8.md) [`0076453c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00764/0076453c.md) [`00792a20`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00792/00792a20.md) [`00793960`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00793/00793960.md) [`009acc84`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009ac/009acc84.md) · 呼出先 0件 

変更の種類 cfg_edge_inventory

命令の説明率　旧版 0.00% / 新版 0.00%

<a id="compare-9b046eeb43f8ac96b881b1002ede7b56"></a>

### [`009a9778`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009a9/009a9778.md) → [`009a97cc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009a9/009a97cc.md) FUN_009a97cc

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal` · `cfg_change`

- 旧版 呼出元 1件 [`009b3b68`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009b3/009b3b68.md) · 呼出先 0件 
- 新版 呼出元 1件 [`009b3bbc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009b3/009b3bbc.md) · 呼出先 0件 

変更の種類 branch_condition_or_target, cfg_edge_inventory, control_flow, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 009a9784 ["INT_EQUAL", "tmp:0:1", ["register:100:1", "register:103:1"]]
- 009a9784 ["CBRANCH", null, ["local:b5:8", "tmp:0:1"]]
+ 009a97d8 ["INT_EQUAL", "tmp:0:1", ["register:100:1", "register:103:1"]]
+ 009a97d8 ["CBRANCH", null, ["local:b4:8", "tmp:0:1"]]
~~~


<a id="compare-e974652246da7b8a3a9fc7634f00bcfd"></a>

### [`009a9790`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009a9/009a9790.md) → [`009a97e4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009a9/009a97e4.md) FUN_009a97e4

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 1件 [`009aa07c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009aa/009aa07c.md) · 呼出先 15件 [`0044b754`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0044b/0044b754.md) [`00459d74`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00459/00459d74.md) [`00561d34`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00561/00561d34.md) [`00752280`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00752/00752280.md) [`009ab0e8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009ab/009ab0e8.md)
- 新版 呼出元 1件 [`009aa0d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009aa/009aa0d0.md) · 呼出先 15件 [`0044b794`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0044b/0044b794.md) [`00459db4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00459/00459db4.md) [`00561d74`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00561/00561d74.md) [`007522d8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00752/007522d8.md) [`009ab13c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009ab/009ab13c.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, store_value, unresolved_branch_alignment, unresolved_call_alignment, unresolved_return_alignment, unresolved_store_alignment

命令の説明率　旧版 83.29% / 新版 83.29%

優先判定に残った影響 `call_argument_candidate` 9件, `store_value` 2件, `unresolved_branch_alignment` 2件, `unresolved_call_alignment` 6件, `unresolved_return_alignment` 1件, `unresolved_store_alignment` 21件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "009a99f4",
      "incomplete_value": true,
      "site": "009a99f4",
      "value": [
        "LOAD",
        "8",
        [
          [
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
      "definition_site": "009a99a0",
      "incomplete_value": true,
      "site": "009a99a0",
      "value": [
        "LOAD",
        "8",
        [
          [
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
    "ordinal": 42,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "009a99ec",
      "incomplete_value": true,
      "site": "009a9a00",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:68d:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "009a9998",
      "incomplete_value": true,
      "site": "009a99ac",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:6e9:8"
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
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "009a9864",
      "incomplete_value": true,
      "site": "009a9868",
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
      "unmatched:009a9794",
      "WRITE",
      [
        "storage",
        "Stack[-0x50]",
        null,
        null
      ]
    ],
    [
      "unmatched:009a9798",
      "WRITE",
      [
        "storage",
        "Stack[-0x40]",
        null,
        null
      ]
    ],
    [
      "unmatched:009a980c",
      "PARAM",
      [
        "storage",
        "002b7a0f",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "009a97e8",
      "WRITE",
      [
        "storage",
        "Stack[-0x50]",
        null,
        null
      ]
    ],
    [
      "009a97ec",
      "WRITE",
      [
        "storage",
        "Stack[-0x40]",
        null,
        null
      ]
    ],
    [
      "009a9860",
      "PARAM",
      [
        "storage",
        "002b7a4f",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 009a9814 ["INT_ADD", "register:40f0:8", ["const:9a9814:8", "const:4:8"]]
- 009a9814 ["CALL", null, ["callee:00c58040:8"]]
+ 009a9868 ["INT_ADD", "register:40f0:8", ["const:9a9868:8", "const:4:8"]]
+ 009a9868 ["CALL", null, ["callee:00c58040:8"]]
- 009a9878 ["INT_ADD", "register:40f0:8", ["const:9a9878:8", "const:4:8"]]
- 009a9878 ["CALL", null, ["callee:00c58040:8"]]
+ 009a98cc ["INT_ADD", "register:40f0:8", ["const:9a98cc:8", "const:4:8"]]
+ 009a98cc ["CALL", null, ["callee:00c58040:8"]]
- 009a9918 ["INT_ADD", "register:40f0:8", ["const:9a9918:8", "const:4:8"]]
- 009a9918 ["CALL", null, ["callee:00561d74:8"]]
+ 009a996c ["INT_ADD", "register:40f0:8", ["const:9a996c:8", "const:4:8"]]
+ 009a996c ["CALL", null, ["callee:00561d74:8"]]
~~~


<a id="compare-18aa50472a3c6e629b186147b71d1182"></a>

### [`009a9fe0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009a9/009a9fe0.md) → [`009aa034`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009aa/009aa034.md) FUN_009aa034

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal` · `cfg_change`

- 旧版 呼出元 3件 [`009b2210`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009b2/009b2210.md) [`009b6270`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009b6/009b6270.md) [`009b6848`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009b6/009b6848.md) · 呼出先 1件 [`00c58430`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58430.md)
- 新版 呼出元 3件 [`009b2264`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009b2/009b2264.md) [`009b62c4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009b6/009b62c4.md) [`009b689c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009b6/009b689c.md) · 呼出先 1件 [`00c58500`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58500.md)

変更の種類 branch_condition_or_target, cfg_edge_inventory, constant, control_flow, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 009aa00c ["INT_ADD", "register:40f0:8", ["const:9aa00c:8", "const:4:8"]]
- 009aa00c ["CALL", null, ["callee:00c58500:8"]]
+ 009aa060 ["INT_ADD", "register:40f0:8", ["const:9aa060:8", "const:4:8"]]
+ 009aa060 ["CALL", null, ["callee:00c58500:8"]]
- 009aa034 ["BOOL_NEGATE", "tmp:0:1", ["register:101:1"]]
- 009aa034 ["CBRANCH", null, ["local:b7:8", "tmp:0:1"]]
+ 009aa088 ["BOOL_NEGATE", "tmp:0:1", ["register:101:1"]]
+ 009aa088 ["CBRANCH", null, ["local:b8:8", "tmp:0:1"]]
- 009aa048 ["INT_RIGHT", "tmp:0:4", ["register:40a0:4", "const:0:4"]]
- 009aa048 ["INT_AND", "tmp:1:4", ["tmp:0:4", "const:1:4"]]
- 009aa048 ["INT_EQUAL", "tmp:2:1", ["tmp:1:4", "const:0:4"]]
- 009aa048 ["INT_EQUAL", "tmp:3:1", ["tmp:2:1", "const:1:1"]]
+ 009aa09c ["INT_RIGHT", "tmp:0:4", ["register:40a0:4", "const:0:4"]]
+ 009aa09c ["INT_AND", "tmp:1:4", ["tmp:0:4", "const:1:4"]]
+ 009aa09c ["INT_EQUAL", "tmp:2:1", ["tmp:1:4", "const:0:4"]]
+ 009aa09c ["INT_EQUAL", "tmp:3:1", ["tmp:2:1", "const:1:1"]]
~~~


<a id="compare-9290cbc40b706695a187ff16e833e587"></a>

### [`009aa07c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009aa/009aa07c.md) → [`009aa0d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009aa/009aa0d0.md) FUN_009aa0d0

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 1件 [`009bf6d8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009bf/009bf6d8.md) · 呼出先 16件 [`0044b754`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0044b/0044b754.md) [`00561d34`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00561/00561d34.md) [`00752280`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00752/00752280.md) [`009a9790`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009a9/009a9790.md) [`009ab740`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009ab/009ab740.md)
- 新版 呼出元 1件 [`009bf72c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009bf/009bf72c.md) · 呼出先 16件 [`0044b794`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0044b/0044b794.md) [`00561d74`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00561/00561d74.md) [`007522d8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00752/007522d8.md) [`009a97e4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009a9/009a97e4.md) [`009ab794`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009ab/009ab794.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, store_value, unresolved_branch_alignment, unresolved_return_alignment, unresolved_store_alignment

命令の説明率　旧版 88.89% / 新版 88.89%

優先判定に残った影響 `call_argument_candidate` 5件, `store_value` 3件, `unresolved_branch_alignment` 3件, `unresolved_return_alignment` 1件, `unresolved_store_alignment` 6件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "009aa2f4",
      "incomplete_value": true,
      "site": "009aa2f4",
      "value": [
        "LOAD",
        "8",
        [
          [
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
      "definition_site": "009aa2a0",
      "incomplete_value": true,
      "site": "009aa2a0",
      "value": [
        "LOAD",
        "8",
        [
          [
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
    "ordinal": 37,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "009aa2f8",
      "incomplete_value": true,
      "site": "009aa2f8",
      "value": [
        "LOAD",
        "8",
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
      "definition_site": "009aa2a4",
      "incomplete_value": true,
      "site": "009aa2a4",
      "value": [
        "LOAD",
        "8",
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
    "ordinal": 38,
    "slot": 2
  },
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "009aa358",
      "incomplete_value": false,
      "site": "009aa358",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c88000:8"
          ],
          [
            "leaf",
            "const:b00:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "009aa304",
      "incomplete_value": false,
      "site": "009aa304",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c88000:8"
          ],
          [
            "leaf",
            "const:a30:8"
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
      "unmatched:009aa0cc",
      "DATA",
      [
        "storage",
        "00c889b0",
        null,
        "undefined *"
      ]
    ],
    [
      "unmatched:009aa0cc",
      "WRITE",
      [
        "storage",
        "Stack[-0x80]",
        null,
        null
      ]
    ],
    [
      "unmatched:009aa0d0",
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
      "009aa120",
      "DATA",
      [
        "storage",
        "00c88a80",
        null,
        "undefined *"
      ]
    ],
    [
      "009aa120",
      "WRITE",
      [
        "storage",
        "Stack[-0x80]",
        null,
        null
      ]
    ],
    [
      "009aa124",
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
- 009aa204 ["INT_ADD", "register:40f0:8", ["const:9aa204:8", "const:4:8"]]
- 009aa204 ["CALL", null, ["callee:00c58040:8"]]
+ 009aa258 ["INT_ADD", "register:40f0:8", ["const:9aa258:8", "const:4:8"]]
+ 009aa258 ["CALL", null, ["callee:00c58040:8"]]
- 009aa234 ["INT_ADD", "register:40f0:8", ["const:9aa234:8", "const:4:8"]]
- 009aa234 ["CALL", null, ["callee:00561d74:8"]]
+ 009aa288 ["INT_ADD", "register:40f0:8", ["const:9aa288:8", "const:4:8"]]
+ 009aa288 ["CALL", null, ["callee:00561d74:8"]]
- 009aa24c ["INT_RIGHT", "tmp:0:4", ["register:4040:4", "const:0:4"]]
- 009aa24c ["INT_AND", "tmp:1:4", ["tmp:0:4", "const:1:4"]]
- 009aa24c ["INT_EQUAL", "tmp:2:1", ["tmp:1:4", "const:0:4"]]
- 009aa24c ["INT_EQUAL", "tmp:3:1", ["tmp:2:1", "const:0:1"]]
+ 009aa2a0 ["INT_RIGHT", "tmp:0:4", ["register:4040:4", "const:0:4"]]
+ 009aa2a0 ["INT_AND", "tmp:1:4", ["tmp:0:4", "const:1:4"]]
+ 009aa2a0 ["INT_EQUAL", "tmp:2:1", ["tmp:1:4", "const:0:4"]]
+ 009aa2a0 ["INT_EQUAL", "tmp:3:1", ["tmp:2:1", "const:0:1"]]
~~~


<a id="compare-a30bf50726d5eb3238c8d4601ab52cd0"></a>

### [`009aa624`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009aa/009aa624.md) → [`009aa678`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009aa/009aa678.md) FUN_009aa678

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`009b6c58`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009b6/009b6c58.md) · 呼出先 18件 [`00440ec0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00440/00440ec0.md) [`00440f5c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00440/00440f5c.md) [`00470840`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00470/00470840.md) [`005a9f54`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005a9/005a9f54.md) [`005aa170`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005aa/005aa170.md)
- 新版 呼出元 1件 [`009b6cac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009b6/009b6cac.md) · 呼出先 18件 [`00440f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00440/00440f00.md) [`00440f9c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00440/00440f9c.md) [`00470880`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00470/00470880.md) [`005a9f94`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005a9/005a9f94.md) [`005aa1b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005aa/005aa1b0.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, constant, control_flow, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, store_condition, unresolved_branch_alignment, unresolved_store_alignment

命令の説明率　旧版 90.91% / 新版 90.91%

優先判定に残った影響 `call_argument_candidate` 11件, `store_condition` 3件, `unresolved_branch_alignment` 9件, `unresolved_store_alignment` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "009aa6e8",
      "incomplete_value": true,
      "site": "009aa6f0",
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
            "const:98:8"
          ]
        ]
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
      "definition_site": "009aa6ec",
      "incomplete_value": true,
      "site": "009aa6f0",
      "value": [
        "live",
        "register:40b0:8"
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
      "definition_site": "009aa7e4",
      "incomplete_value": true,
      "site": "009aa7e8",
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
            "const:70:8"
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
      "unmatched:009aa67c",
      "WRITE",
      [
        "storage",
        "Stack[-0x1b8]",
        null,
        null
      ]
    ],
    [
      "009aa88c",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "unmatched:009aa898"
      ]
    ],
    [
      "unmatched:009aa894",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "009aa890"
      ]
    ]
  ],
  "added": [
    [
      "009aa6d0",
      "WRITE",
      [
        "storage",
        "Stack[-0x1b8]",
        null,
        null
      ]
    ],
    [
      "009aa88c",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "009aa8ec"
      ]
    ],
    [
      "009aa8e8",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "009aa890"
      ]
    ]
  ]
}
~~~


~~~diff
- 009aa69c ["INT_ADD", "register:40f0:8", ["const:9aa69c:8", "const:4:8"]]
- 009aa69c ["CALL", null, ["callee:005a9f94:8"]]
+ 009aa6f0 ["INT_ADD", "register:40f0:8", ["const:9aa6f0:8", "const:4:8"]]
+ 009aa6f0 ["CALL", null, ["callee:005a9f94:8"]]
- 009aa6f0 ["INT_ADD", "register:40f0:8", ["const:9aa6f0:8", "const:4:8"]]
- 009aa6f0 ["CALL", null, ["callee:00c580d0:8"]]
+ 009aa744 ["INT_ADD", "register:40f0:8", ["const:9aa744:8", "const:4:8"]]
+ 009aa744 ["CALL", null, ["callee:00c580d0:8"]]
- 009aa794 ["INT_ADD", "register:40f0:8", ["const:9aa794:8", "const:4:8"]]
- 009aa794 ["CALL", null, ["callee:009abd14:8"]]
+ 009aa7e8 ["INT_ADD", "register:40f0:8", ["const:9aa7e8:8", "const:4:8"]]
+ 009aa7e8 ["CALL", null, ["callee:009abd14:8"]]
~~~


<a id="compare-b6d5bcad7aa98350a7938c48eb9fbeeb"></a>

### [`009aae00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009aa/009aae00.md) → [`009aae54`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009aa/009aae54.md) FUN_009aae54

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `bounded` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`009b0504`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009b0/009b0504.md) · 呼出先 3件 [`0074a7d4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0074a/0074a7d4.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md)
- 新版 呼出元 1件 [`009b0558`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009b0/009b0558.md) · 呼出先 3件 [`0074a82c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0074a/0074a82c.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)

変更の種類 branch_condition_or_target, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_store_alignment

命令の説明率　旧版 88.52% / 新版 88.52%

優先判定に残った影響 `unresolved_branch_alignment` 1件, `unresolved_store_alignment` 1件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:009aae20",
      "WRITE",
      [
        "storage",
        "Stack[-0x48]",
        null,
        null
      ]
    ],
    [
      "unmatched:009aae2c",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "009aaf14"
      ]
    ]
  ],
  "added": [
    [
      "009aae74",
      "WRITE",
      [
        "storage",
        "Stack[-0x48]",
        null,
        null
      ]
    ],
    [
      "009aae80",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "009aaf14"
      ]
    ]
  ]
}
~~~


~~~diff
- 009aae14 ["COPY", "tmp:0:8", ["const:60:8"]]
- 009aae14 ["INT_CARRY", "register:105:1", ["register:8:8", "tmp:0:8"]]
- 009aae14 ["INT_SCARRY", "register:106:1", ["register:8:8", "tmp:0:8"]]
- 009aae14 ["INT_ADD", "tmp:1:8", ["register:8:8", "tmp:0:8"]]
- 009aae18 ["COPY", "register:40a8:8", ["register:1660:8"]]
- 009aae1c ["INT_ADD", "tmp:0:8", ["register:40a8:8", "const:28:8"]]
- 009aae1c ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-1f8eebaa84fbdfbe6b4e45423fc8ae1d"></a>

### [`009aaef4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009aa/009aaef4.md) → [`009aaf48`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009aa/009aaf48.md) FUN_009aaf48

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 0件 
- 新版 呼出元 0件  · 呼出先 0件 

変更の種類 branch_condition_or_target, cfg_edge_inventory, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, operands_and_dependencies, operation_sequence, store_value

命令の説明率　旧版 76.47% / 新版 76.47%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "009aaf54",
      "incomplete_value": false,
      "site": "009aaf60",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c88000:8"
          ],
          [
            "leaf",
            "const:a00:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "009aaf00",
      "incomplete_value": false,
      "site": "009aaf0c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c88000:8"
          ],
          [
            "leaf",
            "const:930:8"
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
      "009aaf60",
      "DATA",
      [
        "storage",
        "00c88930",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "009aaf60",
      "DATA",
      [
        "storage",
        "00c88a00",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 009aaf00 ["COPY", "tmp:0:8", ["const:930:8"]]
- 009aaf00 ["INT_CARRY", "register:105:1", ["register:4050:8", "tmp:0:8"]]
- 009aaf00 ["INT_SCARRY", "register:106:1", ["register:4050:8", "tmp:0:8"]]
- 009aaf00 ["INT_ADD", "tmp:1:8", ["register:4050:8", "tmp:0:8"]]
+ 009aaf54 ["COPY", "tmp:0:8", ["const:a00:8"]]
+ 009aaf54 ["INT_CARRY", "register:105:1", ["register:4050:8", "tmp:0:8"]]
+ 009aaf54 ["INT_SCARRY", "register:106:1", ["register:4050:8", "tmp:0:8"]]
+ 009aaf54 ["INT_ADD", "tmp:1:8", ["register:4050:8", "tmp:0:8"]]
- 009aaf14 ["INT_EQUAL", "tmp:0:1", ["register:4000:8", "const:0:8"]]
- 009aaf14 ["CBRANCH", null, ["local:b5:8", "tmp:0:1"]]
+ 009aaf68 ["INT_EQUAL", "tmp:0:1", ["register:4000:8", "const:0:8"]]
+ 009aaf68 ["CBRANCH", null, ["local:b6:8", "tmp:0:1"]]
- 009aaf2c ["COPY", "tmp:0:8", ["register:4040:8"]]
- 009aaf2c ["COPY", "tmp:1:8", ["tmp:0:8"]]
- 009aaf2c ["INT_LEFT", "tmp:1:8", ["tmp:1:8", "const:0:8"]]
- 009aaf2c ["INT_ADD", "tmp:2:8", ["register:4048:8", "tmp:1:8"]]
~~~


<a id="compare-c00dcdedef864c7afaddb01f30201d8e"></a>

### [`009aaf38`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009aa/009aaf38.md) → [`009aaf8c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009aa/009aaf8c.md) FUN_009aaf8c

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)

変更の種類 branch_condition_or_target, call, call_count, cfg_edge_inventory, constant, control_flow, local_def_use, memory_read, memory_read_count, operands_and_dependencies, operation_sequence, store_value, unresolved_call_alignment

命令の説明率　旧版 82.61% / 新版 82.61%

優先判定に残った影響 `store_value` 1件, `unresolved_call_alignment` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "009aafa4",
      "incomplete_value": false,
      "site": "009aafb0",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c88000:8"
          ],
          [
            "leaf",
            "const:a00:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "009aaf50",
      "incomplete_value": false,
      "site": "009aaf5c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c88000:8"
          ],
          [
            "leaf",
            "const:930:8"
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
      "009aafb0",
      "DATA",
      [
        "storage",
        "00c88930",
        null,
        "undefined *"
      ]
    ],
    [
      "unmatched:009aaf80",
      "COMPUTED_CALL",
      [
        "unresolved_target",
        null
      ]
    ]
  ],
  "added": [
    [
      "009aafb0",
      "DATA",
      [
        "storage",
        "00c88a00",
        null,
        "undefined *"
      ]
    ],
    [
      "009aafd4",
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
- 009aaf50 ["COPY", "tmp:0:8", ["const:930:8"]]
- 009aaf50 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 009aaf50 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 009aaf50 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 009aafa4 ["COPY", "tmp:0:8", ["const:a00:8"]]
+ 009aafa4 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 009aafa4 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 009aafa4 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 009aaf60 ["CBRANCH", null, ["local:b3:8", "register:101:1"]]
+ 009aafb4 ["CBRANCH", null, ["local:b4:8", "register:101:1"]]
- 009aaf64 ["INT_EQUAL", "tmp:0:1", ["register:4000:8", "const:0:8"]]
- 009aaf64 ["CBRANCH", null, ["local:b5:8", "tmp:0:1"]]
+ 009aafb8 ["INT_EQUAL", "tmp:0:1", ["register:4000:8", "const:0:8"]]
+ 009aafb8 ["CBRANCH", null, ["local:b7:8", "tmp:0:1"]]
~~~


<a id="compare-335e321a19ead67828c3f39c8df7fa54"></a>

### [`009aaf94`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009aa/009aaf94.md) → [`009aafe8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009aa/009aafe8.md) FUN_009aafe8

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)

変更の種類 branch_condition_or_target, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_store_alignment

命令の説明率　旧版 87.88% / 新版 87.88%

優先判定に残った影響 `unresolved_branch_alignment` 1件, `unresolved_store_alignment` 2件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:009aafc0",
      "DATA",
      [
        "storage",
        "00c88930",
        null,
        "undefined *"
      ]
    ],
    [
      "unmatched:009aafc8",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "009ab038"
      ]
    ]
  ],
  "added": [
    [
      "009ab014",
      "DATA",
      [
        "storage",
        "00c88a00",
        null,
        "undefined *"
      ]
    ],
    [
      "009ab01c",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "009ab038"
      ]
    ]
  ]
}
~~~


~~~diff
- 009aafa8 ["INT_ADD", "register:40f0:8", ["const:9aafa8:8", "const:4:8"]]
- 009aafa8 ["CALL", null, ["callee:00c57f60:8"]]
+ 009aaffc ["INT_ADD", "register:40f0:8", ["const:9aaffc:8", "const:4:8"]]
+ 009aaffc ["CALL", null, ["callee:00c57f60:8"]]
- 009aafbc ["COPY", "tmp:0:8", ["const:930:8"]]
- 009aafbc ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 009aafbc ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 009aafbc ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
- 009aafc0 ["COPY", "tmp:0:8", ["register:4098:8"]]
- 009aafc0 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4048:8"]]
~~~


<a id="compare-9de7a1b1ddd177425e433b6859da8ac3"></a>

### [`009ab02c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009ab/009ab02c.md) → [`009ab080`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009ab/009ab080.md) FUN_009ab080

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 0件 
- 新版 呼出元 0件  · 呼出先 0件 

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 93.94% / 新版 93.94%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "009ab0a0",
      "incomplete_value": false,
      "site": "009ab0a4",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c88000:8"
          ],
          [
            "leaf",
            "const:a00:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "009ab04c",
      "incomplete_value": false,
      "site": "009ab050",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c88000:8"
          ],
          [
            "leaf",
            "const:930:8"
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
      "009ab0a4",
      "DATA",
      [
        "storage",
        "00c88930",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "009ab0a4",
      "DATA",
      [
        "storage",
        "00c88a00",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 009ab04c ["COPY", "tmp:0:8", ["const:930:8"]]
- 009ab04c ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 009ab04c ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 009ab04c ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 009ab0a0 ["COPY", "tmp:0:8", ["const:a00:8"]]
+ 009ab0a0 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 009ab0a0 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 009ab0a0 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
- 009ab070 ["COPY", "register:0:8", ["register:4040:8"]]
- 009ab070 ["INT_ADD", "register:40f0:8", ["const:9ab070:8", "const:4:8"]]
- 009ab070 ["CALLIND", null, ["register:0:8"]]
+ 009ab0c4 ["COPY", "register:0:8", ["register:4040:8"]]
+ 009ab0c4 ["INT_ADD", "register:40f0:8", ["const:9ab0c4:8", "const:4:8"]]
+ 009ab0c4 ["CALLIND", null, ["register:0:8"]]
- 009ab098 ["COPY", "register:0:8", ["register:4040:8"]]
- 009ab098 ["INT_ADD", "register:40f0:8", ["const:9ab098:8", "const:4:8"]]
- 009ab098 ["CALLIND", null, ["register:0:8"]]
+ 009ab0ec ["COPY", "register:0:8", ["register:4040:8"]]
+ 009ab0ec ["INT_ADD", "register:40f0:8", ["const:9ab0ec:8", "const:4:8"]]
+ 009ab0ec ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-5845951663ec7bd56b78ed9a021b930b"></a>

### [`009ab0e8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009ab/009ab0e8.md) → [`009ab13c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009ab/009ab13c.md) FUN_009ab13c

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 1件 [`009a9790`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009a9/009a9790.md) · 呼出先 1件 [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md)
- 新版 呼出元 1件 [`009a97e4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009a9/009a97e4.md) · 呼出先 1件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)

変更の種類 cfg_edge_inventory, constant, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_store_alignment

命令の説明率　旧版 85.00% / 新版 85.00%

アドレスに依存する影響 `unresolved_store_alignment` 3件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:009ab0e8",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "unmatched:009ab0ec",
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
      "009ab13c",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "009ab140",
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
- 009ab0e8 ["COPY", "tmp:0:8", ["register:40e8:8"]]
- 009ab0e8 ["COPY", "tmp:1:8", ["register:40f0:8"]]
- 009ab0e8 ["INT_ADD", "register:8:8", ["register:8:8", "const:ffffffffffffffe0:8"]]
- 009ab0e8 ["STORE", null, ["const:1b1:8", "register:8:8", "tmp:0:8"]]
- 009ab0ec ["INT_ADD", "tmp:0:8", ["register:8:8", "const:10:8"]]
- 009ab0ec ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4098:8"]]
- 009ab0f0 ["COPY", "register:40e8:8", ["register:8:8"]]
~~~


<a id="compare-3d7b47b5d9a519f9a87a644a7ca9cba2"></a>

### [`009ab138`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009ab/009ab138.md) → [`009ab18c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009ab/009ab18c.md) FUN_009ab18c

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 8件 [`0044108c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00441/0044108c.md) [`00459d74`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00459/00459d74.md) [`00596f2c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00596/00596f2c.md) [`00c53cd0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c53/00c53cd0.md) [`00c53d00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c53/00c53d00.md)
- 新版 呼出元 0件  · 呼出先 8件 [`004410cc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00441/004410cc.md) [`00459db4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00459/00459db4.md) [`00596f6c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00596/00596f6c.md) [`00c53d70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53d70.md) [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md)

変更の種類 branch_condition_or_target, call, call_argument_candidate, call_count, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, store_condition, store_value, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 89.81% / 新版 89.81%

優先判定に残った影響 `call_argument_candidate` 1件, `store_condition` 4件, `store_value` 3件, `unresolved_branch_alignment` 6件, `unresolved_call_alignment` 3件, `unresolved_store_alignment` 5件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "009ab358",
      "incomplete_value": true,
      "site": "009ab358",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:7e:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "009ab304",
      "incomplete_value": true,
      "site": "009ab304",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:d2:8"
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
      "definition_site": "009ab34c",
      "incomplete_value": true,
      "site": "009ab35c",
      "value": [
        "LOAD",
        "8",
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
      "definition_site": "009ab2f8",
      "incomplete_value": true,
      "site": "009ab308",
      "value": [
        "LOAD",
        "8",
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
    "ordinal": 21,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "009ab4d8",
      "incomplete_value": true,
      "site": "009ab4d8",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:19c:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "009ab484",
      "incomplete_value": true,
      "site": "009ab484",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:1e9:8"
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
      "unmatched:009ab13c",
      "WRITE",
      [
        "storage",
        "Stack[-0x40]",
        null,
        null
      ]
    ],
    [
      "unmatched:009ab1b0",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "009ab230"
      ]
    ],
    [
      "009ab204",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "009ab2e8"
      ]
    ]
  ],
  "added": [
    [
      "009ab190",
      "WRITE",
      [
        "storage",
        "Stack[-0x40]",
        null,
        null
      ]
    ],
    [
      "009ab204",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "009ab230"
      ]
    ],
    [
      "009ab234",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "009ab2e8"
      ]
    ]
  ]
}
~~~


~~~diff
- 009ab19c ["INT_ADD", "register:40f0:8", ["const:9ab19c:8", "const:4:8"]]
- 009ab19c ["CALL", null, ["callee:00c53d70:8"]]
+ 009ab1f0 ["INT_ADD", "register:40f0:8", ["const:9ab1f0:8", "const:4:8"]]
+ 009ab1f0 ["CALL", null, ["callee:00c53d70:8"]]
- 009ab1d8 ["INT_ADD", "register:40f0:8", ["const:9ab1d8:8", "const:4:8"]]
- 009ab1d8 ["CALL", null, ["callee:00c57f50:8"]]
+ 009ab22c ["INT_ADD", "register:40f0:8", ["const:9ab22c:8", "const:4:8"]]
+ 009ab22c ["CALL", null, ["callee:00c57f50:8"]]
- 009ab1e0 ["INT_EQUAL", "tmp:0:1", ["register:40a0:8", "const:0:8"]]
- 009ab1e0 ["CBRANCH", null, ["local:b27:8", "tmp:0:1"]]
+ 009ab204 ["INT_EQUAL", "tmp:0:1", ["register:40a0:8", "const:0:8"]]
+ 009ab204 ["CBRANCH", null, ["local:b12:8", "tmp:0:1"]]
~~~


<a id="compare-fccd8b111dd4cbf07ec541186e65ee2f"></a>

### [`009ab70c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009ab/009ab70c.md) → [`009ab760`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009ab/009ab760.md) FUN_009ab760

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
      "definition_site": "009ab774",
      "incomplete_value": false,
      "site": "009ab778",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c88000:8"
          ],
          [
            "leaf",
            "const:a80:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "009ab720",
      "incomplete_value": false,
      "site": "009ab724",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c88000:8"
          ],
          [
            "leaf",
            "const:9b0:8"
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
      "009ab778",
      "DATA",
      [
        "storage",
        "00c889b0",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "009ab778",
      "DATA",
      [
        "storage",
        "00c88a80",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 009ab718 ["INT_ADD", "register:40f0:8", ["const:9ab718:8", "const:4:8"]]
- 009ab718 ["CALL", null, ["callee:00c57f60:8"]]
+ 009ab76c ["INT_ADD", "register:40f0:8", ["const:9ab76c:8", "const:4:8"]]
+ 009ab76c ["CALL", null, ["callee:00c57f60:8"]]
- 009ab720 ["COPY", "tmp:0:8", ["const:9b0:8"]]
- 009ab720 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 009ab720 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 009ab720 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 009ab774 ["COPY", "tmp:0:8", ["const:a80:8"]]
+ 009ab774 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 009ab774 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 009ab774 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-af24d3001ac33b3eb954bd48f5d54532"></a>

### [`009ab730`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009ab/009ab730.md) → [`009ab784`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009ab/009ab784.md) FUN_009ab784

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
      "definition_site": "009ab788",
      "incomplete_value": false,
      "site": "009ab78c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c88000:8"
          ],
          [
            "leaf",
            "const:a80:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "009ab734",
      "incomplete_value": false,
      "site": "009ab738",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c88000:8"
          ],
          [
            "leaf",
            "const:9b0:8"
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
      "009ab78c",
      "DATA",
      [
        "storage",
        "00c889b0",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "009ab78c",
      "DATA",
      [
        "storage",
        "00c88a80",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 009ab734 ["COPY", "tmp:0:8", ["const:9b0:8"]]
- 009ab734 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 009ab734 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 009ab734 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 009ab788 ["COPY", "tmp:0:8", ["const:a80:8"]]
+ 009ab788 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 009ab788 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 009ab788 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-abe97b27dc22f498446ccd17ee111eea"></a>

### [`009ab778`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009ab/009ab778.md) → [`009ab7cc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009ab/009ab7cc.md) FUN_009ab7cc

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
      "definition_site": "009ab7f0",
      "incomplete_value": false,
      "site": "009ab7f0",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c88000:8"
          ],
          [
            "leaf",
            "const:b00:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "009ab79c",
      "incomplete_value": false,
      "site": "009ab79c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c88000:8"
          ],
          [
            "leaf",
            "const:a30:8"
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
      "009ab7f0",
      "DATA",
      [
        "storage",
        "00c88a30",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "009ab7f0",
      "DATA",
      [
        "storage",
        "00c88b00",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 009ab78c ["INT_ADD", "register:40f0:8", ["const:9ab78c:8", "const:4:8"]]
- 009ab78c ["CALL", null, ["callee:00c57f60:8"]]
+ 009ab7e0 ["INT_ADD", "register:40f0:8", ["const:9ab7e0:8", "const:4:8"]]
+ 009ab7e0 ["CALL", null, ["callee:00c57f60:8"]]
- 009ab798 ["COPY", "tmp:0:8", ["const:a30:8"]]
- 009ab798 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 009ab798 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 009ab798 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 009ab7ec ["COPY", "tmp:0:8", ["const:b00:8"]]
+ 009ab7ec ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 009ab7ec ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 009ab7ec ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-9b9278ec4477199e53b98c077cc7d6a9"></a>

### [`009ab7ac`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009ab/009ab7ac.md) → [`009ab800`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009ab/009ab800.md) FUN_009ab800

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
      "definition_site": "009ab80c",
      "incomplete_value": false,
      "site": "009ab80c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c88000:8"
          ],
          [
            "leaf",
            "const:b00:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "009ab7b8",
      "incomplete_value": false,
      "site": "009ab7b8",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c88000:8"
          ],
          [
            "leaf",
            "const:a30:8"
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
      "009ab80c",
      "DATA",
      [
        "storage",
        "00c88a30",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "009ab80c",
      "DATA",
      [
        "storage",
        "00c88b00",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 009ab7b4 ["COPY", "tmp:0:8", ["const:a30:8"]]
- 009ab7b4 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 009ab7b4 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 009ab7b4 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 009ab808 ["COPY", "tmp:0:8", ["const:b00:8"]]
+ 009ab808 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 009ab808 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 009ab808 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
~~~


<a id="compare-19916d1dc94020fa21bd5956eff7889e"></a>

### [`009ab7c8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009ab/009ab7c8.md) → [`009ab81c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009ab/009ab81c.md) FUN_009ab81c

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 7件 [`0044108c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00441/0044108c.md) [`00596f2c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00596/00596f2c.md) [`00c53cd0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c53/00c53cd0.md) [`00c53d00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c53/00c53d00.md) [`00c57e80`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e80.md)
- 新版 呼出元 0件  · 呼出先 7件 [`004410cc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00441/004410cc.md) [`00596f6c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00596/00596f6c.md) [`00c53d70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53d70.md) [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md)

変更の種類 call, call_argument_candidate, call_count, constant, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, store_value, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 93.77% / 新版 93.77%

優先判定に残った影響 `call_argument_candidate` 1件, `store_value` 3件, `unresolved_call_alignment` 2件, `unresolved_store_alignment` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "009ab948",
      "incomplete_value": true,
      "site": "009ab948",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:7e:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "009ab8f4",
      "incomplete_value": true,
      "site": "009ab8f4",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:d2:8"
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
      "definition_site": "009ab93c",
      "incomplete_value": true,
      "site": "009ab94c",
      "value": [
        "LOAD",
        "8",
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
      "definition_site": "009ab8e8",
      "incomplete_value": true,
      "site": "009ab8f8",
      "value": [
        "LOAD",
        "8",
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
    "ordinal": 16,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "009abac0",
      "incomplete_value": true,
      "site": "009abac0",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:19c:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "009aba6c",
      "incomplete_value": true,
      "site": "009aba6c",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:1e9:8"
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
      "unmatched:009ab818",
      "WRITE",
      [
        "storage",
        "Stack[-0x60]",
        null,
        null
      ]
    ],
    [
      "009ab938",
      "READ",
      [
        "storage",
        "002b90d2",
        null,
        "string"
      ]
    ],
    [
      "009ab93c",
      "READ",
      [
        "storage",
        "002b90d9",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "009ab86c",
      "WRITE",
      [
        "storage",
        "Stack[-0x60]",
        null,
        null
      ]
    ],
    [
      "009ab938",
      "READ",
      [
        "storage",
        "002b907e",
        null,
        "string"
      ]
    ],
    [
      "009ab93c",
      "READ",
      [
        "storage",
        "002b9085",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 009ab828 ["INT_ADD", "register:40f0:8", ["const:9ab828:8", "const:4:8"]]
- 009ab828 ["CALL", null, ["callee:00c53d70:8"]]
+ 009ab87c ["INT_ADD", "register:40f0:8", ["const:9ab87c:8", "const:4:8"]]
+ 009ab87c ["CALL", null, ["callee:00c53d70:8"]]
+ 009aba6c ["COPY", "tmp:0:8", ["register:4000:8"]]
+ 009aba6c ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
- 009ab808 ["COPY", "register:0:8", ["register:4048:8"]]
- 009ab808 ["INT_ADD", "register:40f0:8", ["const:9ab808:8", "const:4:8"]]
- 009ab808 ["CALLIND", null, ["register:0:8"]]
+ 009ab85c ["COPY", "register:0:8", ["register:4048:8"]]
+ 009ab85c ["INT_ADD", "register:40f0:8", ["const:9ab85c:8", "const:4:8"]]
+ 009ab85c ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-4a9fcffea3f314aa4f51f3053f1b704e"></a>

### [`009abcc0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009ab/009abcc0.md) → [`009abd14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009ab/009abd14.md) FUN_009abd14

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`009aa624`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009aa/009aa624.md) · 呼出先 7件 [`00440ec0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00440/00440ec0.md) [`009abea0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009ab/009abea0.md) [`009ac048`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009ac/009ac048.md) [`009ac1f4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009ac/009ac1f4.md) [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md)
- 新版 呼出元 1件 [`009aa678`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009aa/009aa678.md) · 呼出先 7件 [`00440f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00440/00440f00.md) [`009abef4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009ab/009abef4.md) [`009ac09c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009ac/009ac09c.md) [`009ac248`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009ac/009ac248.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, store_condition, unresolved_branch_alignment, unresolved_store_alignment

命令の説明率　旧版 83.78% / 新版 83.78%

優先判定に残った影響 `call_argument_candidate` 1件, `store_condition` 1件, `unresolved_branch_alignment` 2件, `unresolved_store_alignment` 6件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "009abdfc",
      "incomplete_value": true,
      "site": "009abe00",
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
        "009abd20"
      ],
      [
        "FALL_THROUGH",
        "009abd74"
      ]
    ],
    "kind": "store_condition",
    "new": {
      "definition_site": "009abd74",
      "incomplete_value": true,
      "site": "009abd84",
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
    "old": {
      "definition_site": "009abd20",
      "incomplete_value": true,
      "site": "009abd30",
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
      "unmatched:009abd20",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "009abea0"
      ]
    ],
    [
      "unmatched:009abd64",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "009abdd4"
      ]
    ]
  ],
  "added": [
    [
      "009abd74",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "009abea0"
      ]
    ],
    [
      "009abdb8",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "009abdd4"
      ]
    ]
  ]
}
~~~


~~~diff
- 009abe00 ["INT_ADD", "register:40f0:8", ["const:9abe00:8", "const:4:8"]]
- 009abe00 ["CALL", null, ["callee:009abef4:8"]]
+ 009abe54 ["INT_ADD", "register:40f0:8", ["const:9abe54:8", "const:4:8"]]
+ 009abe54 ["CALL", null, ["callee:009abef4:8"]]
+ 009abe00 ["INT_ADD", "tmp:0:8", ["register:4048:8", "const:8:8"]]
+ 009abe00 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:5000:16"]]
- 009abcfc ["INT_SUB", "register:4040:8", ["register:4040:8", "register:4050:8"]]
~~~


<a id="compare-9d04e2b009720e31d7e63052cf8421bd"></a>

### [`009abea0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009ab/009abea0.md) → [`009abef4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009ab/009abef4.md) FUN_009abef4

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `bounded` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`009abcc0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009ab/009abcc0.md) · 呼出先 2件 [`009ac05c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009ac/009ac05c.md) [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md)
- 新版 呼出元 1件 [`009abd14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009ab/009abd14.md) · 呼出先 2件 [`009ac0b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009ac/009ac0b0.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)

変更の種類 branch_condition_or_target, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_store_alignment

命令の説明率　旧版 78.31% / 新版 78.31%

優先判定に残った影響 `unresolved_store_alignment` 11件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:009abed4",
      "WRITE",
      [
        "storage",
        "Stack[-0x58]",
        null,
        null
      ]
    ],
    [
      "unmatched:009abee8",
      "WRITE",
      [
        "storage",
        "Stack[-0x68]",
        null,
        null
      ]
    ],
    [
      "unmatched:009abeec",
      "WRITE",
      [
        "storage",
        "Stack[-0x48]",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "009abf28",
      "WRITE",
      [
        "storage",
        "Stack[-0x58]",
        null,
        null
      ]
    ],
    [
      "009abf3c",
      "WRITE",
      [
        "storage",
        "Stack[-0x68]",
        null,
        null
      ]
    ],
    [
      "009abf40",
      "WRITE",
      [
        "storage",
        "Stack[-0x48]",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 009abed0 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:8:8"]]
- 009abed0 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
- 009abed4 ["COPY", "tmp:0:8", ["register:4000:8"]]
- 009abed4 ["COPY", "tmp:1:8", ["register:4048:8"]]
- 009abed4 ["INT_ADD", "tmp:2:8", ["register:8:8", "const:18:8"]]
- 009abed4 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
- 009abed8 ["INT_SUB", "register:4050:8", ["register:4008:8", "register:4010:8"]]
~~~


<a id="compare-a8d57d4d7a406e7cd29ecb12f9235e20"></a>

### [`009ac010`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009ac/009ac010.md) → [`009ac064`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009ac/009ac064.md) FUN_009ac064

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 2件 [`009ac1f4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009ac/009ac1f4.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md)
- 新版 呼出元 0件  · 呼出先 2件 [`009ac248`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009ac/009ac248.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)

変更の種類 branch_condition_or_target, cfg_edge_inventory, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, operands_and_dependencies, operation_sequence, unresolved_return_alignment

命令の説明率　旧版 78.57% / 新版 78.57%

優先判定に残った影響 `unresolved_return_alignment` 1件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "009ac080",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "009ac084"
      ]
    ],
    [
      "unmatched:009ac030",
      "READ",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "unmatched:009ac034",
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
      "009ac080",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "009ac090"
      ]
    ],
    [
      "009ac090",
      "READ",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "009ac094",
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
- 009ac024 ["INT_ADD", "register:40f0:8", ["const:9ac024:8", "const:4:8"]]
- 009ac024 ["CALL", null, ["callee:009ac248:8"]]
+ 009ac078 ["INT_ADD", "register:40f0:8", ["const:9ac078:8", "const:4:8"]]
+ 009ac078 ["CALL", null, ["callee:009ac248:8"]]
- 009ac02c ["INT_EQUAL", "tmp:0:1", ["register:4000:8", "const:0:8"]]
- 009ac02c ["CBRANCH", null, ["local:b2:8", "tmp:0:1"]]
+ 009ac080 ["INT_EQUAL", "tmp:0:1", ["register:4000:8", "const:0:8"]]
+ 009ac080 ["CBRANCH", null, ["local:b3:8", "tmp:0:1"]]
- 009ac030 ["INT_ADD", "tmp:0:8", ["register:8:8", "const:10:8"]]
- 009ac030 ["LOAD", "register:4098:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-99cab06fbf27a4f9bc50b04706d5806d"></a>

### [`009ac048`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009ac/009ac048.md) → [`009ac09c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009ac/009ac09c.md) FUN_009ac09c

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 2件 [`009abcc0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009ab/009abcc0.md) [`009ac2b8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009ac/009ac2b8.md) · 呼出先 1件 [`0043b778`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043b778.md)
- 新版 呼出元 2件 [`009abd14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009ab/009abd14.md) [`009ac30c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009ac/009ac30c.md) · 呼出先 1件 [`0043b7b8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b7b8.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 80.00% / 新版 80.00%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "009ac0a8",
      "incomplete_value": false,
      "site": "009ac0ac",
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
      "definition_site": "009ac054",
      "incomplete_value": false,
      "site": "009ac058",
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
      "009ac0a8",
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
      "009ac0a8",
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
- 009ac058 ["INT_ADD", "register:40f0:8", ["const:9ac058:8", "const:4:8"]]
- 009ac058 ["CALL", null, ["callee:0043b7b8:8"]]
+ 009ac0ac ["INT_ADD", "register:40f0:8", ["const:9ac0ac:8", "const:4:8"]]
+ 009ac0ac ["CALL", null, ["callee:0043b7b8:8"]]
- 009ac054 ["COPY", "tmp:0:8", ["const:f4c:8"]]
- 009ac054 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 009ac054 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 009ac054 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 009ac0a8 ["COPY", "tmp:0:8", ["const:f8c:8"]]
+ 009ac0a8 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 009ac0a8 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 009ac0a8 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
~~~


<a id="compare-140b89b07c778bb58b1bbd048db513d3"></a>

### [`009ac05c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009ac/009ac05c.md) → [`009ac0b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009ac/009ac0b0.md) FUN_009ac0b0

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `bounded` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`009abea0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009ab/009abea0.md) · 呼出先 1件 [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md)
- 新版 呼出元 1件 [`009abef4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009ab/009abef4.md) · 呼出先 1件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)

変更の種類 branch_condition_or_target, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, operands_and_dependencies, operation_sequence, unresolved_branch_alignment

命令の説明率　旧版 97.73% / 新版 97.73%

優先判定に残った影響 `unresolved_branch_alignment` 1件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:009ac090",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "009ac12c"
      ]
    ]
  ],
  "added": [
    [
      "009ac0e4",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "009ac12c"
      ]
    ]
  ]
}
~~~


~~~diff
- 009ac060 ["CBRANCH", null, ["local:b18:8", "register:101:1"]]
+ 009ac0b4 ["CBRANCH", null, ["local:b17:8", "register:101:1"]]
- 009ac088 ["CBRANCH", null, ["local:b17:8", "register:101:1"]]
+ 009ac0dc ["CBRANCH", null, ["local:b16:8", "register:101:1"]]
- 009ac090 ["INT_EQUAL", "tmp:0:1", ["register:40a8:8", "const:0:8"]]
- 009ac090 ["CBRANCH", null, ["local:b13:8", "tmp:0:1"]]
~~~


<a id="compare-6636bfbcba4dc55329361f24e7aaa3e9"></a>

### [`009ac144`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009ac/009ac144.md) → [`009ac198`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009ac/009ac198.md) FUN_009ac198

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal` · `cfg_change`

- 旧版 呼出元 1件 [`009ac10c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009ac/009ac10c.md) · 呼出先 1件 [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md)
- 新版 呼出元 1件 [`009ac160`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009ac/009ac160.md) · 呼出先 1件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)

変更の種類 branch_condition_or_target, cfg_edge_inventory, constant, control_flow, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 009ac148 ["CBRANCH", null, ["local:b16:8", "register:101:1"]]
+ 009ac19c ["CBRANCH", null, ["local:b17:8", "register:101:1"]]
- 009ac170 ["CBRANCH", null, ["local:b15:8", "register:101:1"]]
+ 009ac1c4 ["CBRANCH", null, ["local:b16:8", "register:101:1"]]
- 009ac178 ["INT_EQUAL", "tmp:0:1", ["register:40a8:8", "const:0:8"]]
- 009ac178 ["CBRANCH", null, ["local:b11:8", "tmp:0:1"]]
+ 009ac1cc ["INT_EQUAL", "tmp:0:1", ["register:40a8:8", "const:0:8"]]
+ 009ac1cc ["CBRANCH", null, ["local:b12:8", "tmp:0:1"]]
~~~


<a id="compare-f5185dd516c4c4850b2181b00432607f"></a>

### [`009ac1f4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009ac/009ac1f4.md) → [`009ac248`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009ac/009ac248.md) FUN_009ac248

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `bounded` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 2件 [`009abcc0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009ab/009abcc0.md) [`009ac010`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009ac/009ac010.md) · 呼出先 1件 [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md)
- 新版 呼出元 2件 [`009abd14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009ab/009abd14.md) [`009ac064`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009ac/009ac064.md) · 呼出先 1件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)

変更の種類 branch_condition_or_target, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_store_alignment

命令の説明率　旧版 91.84% / 新版 91.84%

優先判定に残った影響 `unresolved_branch_alignment` 1件, `unresolved_store_alignment` 5件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:009ac1f4",
      "WRITE",
      [
        "storage",
        "Stack[-0x40]",
        null,
        null
      ]
    ],
    [
      "unmatched:009ac1f8",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "unmatched:009ac1fc",
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
      "009ac248",
      "WRITE",
      [
        "storage",
        "Stack[-0x40]",
        null,
        null
      ]
    ],
    [
      "009ac24c",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "009ac250",
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
- 009ac1f4 ["COPY", "tmp:0:8", ["register:40e8:8"]]
- 009ac1f4 ["COPY", "tmp:1:8", ["register:40f0:8"]]
- 009ac1f4 ["INT_ADD", "register:8:8", ["register:8:8", "const:ffffffffffffffc0:8"]]
- 009ac1f4 ["STORE", null, ["const:1b1:8", "register:8:8", "tmp:0:8"]]
- 009ac1f8 ["INT_ADD", "tmp:0:8", ["register:8:8", "const:10:8"]]
- 009ac1f8 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:40b8:8"]]
- 009ac1fc ["COPY", "tmp:0:8", ["register:40b0:8"]]
- 009ac1fc ["COPY", "tmp:1:8", ["register:40a8:8"]]
- 009ac1fc ["INT_ADD", "tmp:2:8", ["register:8:8", "const:20:8"]]
- 009ac1fc ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
~~~


<a id="compare-6806c813988b9054a40edf3b5918d493"></a>

### [`009ac2b8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009ac/009ac2b8.md) → [`009ac30c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009ac/009ac30c.md) FUN_009ac30c

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 3件 [`009aadd0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009aa/009aadd0.md) [`009acc30`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009ac/009acc30.md) [`009b58e8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009b5/009b58e8.md) · 呼出先 6件 [`0074a7d4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0074a/0074a7d4.md) [`009ac048`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009ac/009ac048.md) [`009ac400`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009ac/009ac400.md) [`00c53f5c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c53/00c53f5c.md) [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md)
- 新版 呼出元 3件 [`009aae24`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009aa/009aae24.md) [`009acc84`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009ac/009acc84.md) [`009b593c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009b5/009b593c.md) · 呼出先 6件 [`0074a82c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0074a/0074a82c.md) [`009ac09c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009ac/009ac09c.md) [`009ac454`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009ac/009ac454.md) [`00c53ffc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53ffc.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)

変更の種類 branch_condition_or_target, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, store_condition, unresolved_branch_alignment, unresolved_store_alignment

命令の説明率　旧版 78.21% / 新版 78.21%

優先判定に残った影響 `store_condition` 8件, `unresolved_branch_alignment` 1件, `unresolved_store_alignment` 12件

~~~json
[
  {
    "confidence": "limited",
    "guard": [
      [
        "FALL_THROUGH",
        "009ac304"
      ],
      [
        "FALL_THROUGH",
        "009ac358"
      ]
    ],
    "kind": "store_condition",
    "new": {
      "definition_site": "009ac354",
      "incomplete_value": true,
      "site": "009ac384",
      "value": [
        "INT_LESSEQUAL",
        "1",
        [
          [
            "INT_OR",
            "8",
            [
              "INT_AND",
              [
                "leaf",
                "const:2e8000000000000:8"
              ]
            ]
          ],
          [
            "live",
            "register:4018:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "009ac300",
      "incomplete_value": true,
      "site": "009ac330",
      "value": [
        "INT_LESSEQUAL",
        "1",
        [
          [
            "INT_OR",
            "8",
            [
              "INT_AND",
              [
                "leaf",
                "const:2e8000000000000:8"
              ]
            ]
          ],
          [
            "live",
            "register:4018:8"
          ]
        ]
      ]
    },
    "ordinal": 11,
    "slot": 0
  },
  {
    "confidence": "limited",
    "guard": [
      [
        "FALL_THROUGH",
        "009ac304"
      ],
      [
        "FALL_THROUGH",
        "009ac358"
      ]
    ],
    "kind": "store_condition",
    "new": {
      "definition_site": "009ac354",
      "incomplete_value": true,
      "site": "009ac384",
      "value": [
        "INT_LESSEQUAL",
        "1",
        [
          [
            "INT_OR",
            "8",
            [
              "INT_AND",
              [
                "leaf",
                "const:2e8000000000000:8"
              ]
            ]
          ],
          [
            "live",
            "register:4018:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "009ac300",
      "incomplete_value": true,
      "site": "009ac330",
      "value": [
        "INT_LESSEQUAL",
        "1",
        [
          [
            "INT_OR",
            "8",
            [
              "INT_AND",
              [
                "leaf",
                "const:2e8000000000000:8"
              ]
            ]
          ],
          [
            "live",
            "register:4018:8"
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
        "FALL_THROUGH",
        "009ac304"
      ],
      [
        "FALL_THROUGH",
        "009ac358"
      ]
    ],
    "kind": "store_condition",
    "new": {
      "definition_site": "009ac354",
      "incomplete_value": true,
      "site": "009ac388",
      "value": [
        "INT_LESSEQUAL",
        "1",
        [
          [
            "INT_OR",
            "8",
            [
              "INT_AND",
              [
                "leaf",
                "const:2e8000000000000:8"
              ]
            ]
          ],
          [
            "live",
            "register:4018:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "009ac300",
      "incomplete_value": true,
      "site": "009ac334",
      "value": [
        "INT_LESSEQUAL",
        "1",
        [
          [
            "INT_OR",
            "8",
            [
              "INT_AND",
              [
                "leaf",
                "const:2e8000000000000:8"
              ]
            ]
          ],
          [
            "live",
            "register:4018:8"
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
      "unmatched:009ac2bc",
      "WRITE",
      [
        "storage",
        "Stack[-0x40]",
        null,
        null
      ]
    ],
    [
      "unmatched:009ac2c0",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "unmatched:009ac2c4",
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
      "009ac310",
      "WRITE",
      [
        "storage",
        "Stack[-0x40]",
        null,
        null
      ]
    ],
    [
      "009ac314",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "009ac318",
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
- 009ac2e4 ["INT_EQUAL", "tmp:0:1", ["register:4018:8", "const:0:8"]]
- 009ac2e4 ["CBRANCH", null, ["local:b11:8", "tmp:0:1"]]
+ 009ac338 ["INT_EQUAL", "tmp:0:1", ["register:4018:8", "const:0:8"]]
+ 009ac338 ["CBRANCH", null, ["local:b12:8", "tmp:0:1"]]
+ 009ac330 ["INT_ADD", "tmp:0:8", ["register:8:8", "const:18:8"]]
+ 009ac330 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 009ac334 ["COPY", "tmp:0:4", ["const:0:4"]]
+ 009ac334 ["COPY", "tmp:1:4", ["tmp:0:4"]]
+ 009ac334 ["INT_ADD", "tmp:2:8", ["register:8:8", "const:20:8"]]
+ 009ac334 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:1:1"]]
~~~


<a id="compare-e77fd044adfbb3fb1fb742770aafcd68"></a>

### [`009ac400`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009ac/009ac400.md) → [`009ac454`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009ac/009ac454.md) FUN_009ac454

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`009ac2b8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009ac/009ac2b8.md) · 呼出先 2件 [`00869ef4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00869/00869ef4.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md)
- 新版 呼出元 1件 [`009ac30c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009ac/009ac30c.md) · 呼出先 2件 [`00869f4c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00869/00869f4c.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)

変更の種類 cfg_edge_inventory, constant, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_store_alignment

命令の説明率　旧版 88.24% / 新版 88.24%

アドレスに依存する影響 `unresolved_store_alignment` 1件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:009ac41c",
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
      "009ac470",
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
- 009ac41c ["INT_ADD", "tmp:0:8", ["register:8:8", "const:10:8"]]
- 009ac41c ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4098:8"]]
- 009ac420 ["COPY", "register:40e8:8", ["register:8:8"]]
- 009ac42c ["INT_ADD", "register:40f0:8", ["const:9ac42c:8", "const:4:8"]]
- 009ac42c ["CALL", null, ["callee:00869f4c:8"]]
+ 009ac480 ["INT_ADD", "register:40f0:8", ["const:9ac480:8", "const:4:8"]]
+ 009ac480 ["CALL", null, ["callee:00869f4c:8"]]
~~~


<a id="compare-1a0d99d4d871db3b8cc151c047e51652"></a>

### [`009ac444`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009ac/009ac444.md) → [`009ac498`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009ac/009ac498.md) _INIT_195

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 5件 [`0043ae70`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043a/0043ae70.md) [`0043b7f8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043b7f8.md) [`00c57e30`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e30.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md)
- 新版 呼出元 0件  · 呼出先 5件 [`0043aeb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043a/0043aeb0.md) [`0043b838`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b838.md) [`00c57f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f00.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)

変更の種類 call_argument_candidate, comparison, comparison_count, constant, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, store_value, unresolved_store_alignment

命令の説明率　旧版 84.75% / 新版 84.75%

優先判定に残った影響 `call_argument_candidate` 3件, `store_value` 5件, `unresolved_store_alignment` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "009ac518",
      "incomplete_value": true,
      "site": "009ac534",
      "value": [
        "LOAD",
        "16",
        [
          [
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
      "definition_site": "009ac4c4",
      "incomplete_value": true,
      "site": "009ac4e0",
      "value": [
        "LOAD",
        "16",
        [
          [
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
      "definition_site": "009ac538",
      "incomplete_value": true,
      "site": "009ac550",
      "value": [
        "LOAD",
        "16",
        [
          [
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
      "definition_site": "009ac4e4",
      "incomplete_value": true,
      "site": "009ac4fc",
      "value": [
        "LOAD",
        "16",
        [
          [
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
      "definition_site": "009ac554",
      "incomplete_value": true,
      "site": "009ac570",
      "value": [
        "LOAD",
        "16",
        [
          [
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
      "definition_site": "009ac500",
      "incomplete_value": true,
      "site": "009ac51c",
      "value": [
        "LOAD",
        "16",
        [
          [
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
      "009ac4d4",
      "READ",
      [
        "storage",
        "002b7f26",
        null,
        "string"
      ]
    ],
    [
      "unmatched:009ac49c",
      "WRITE",
      [
        "storage",
        "Stack[-0x10f]",
        null,
        null
      ]
    ],
    [
      "unmatched:009ac4a4",
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
      "009ac4d4",
      "READ",
      [
        "storage",
        "002b7f66",
        null,
        "string"
      ]
    ],
    [
      "009ac4f0",
      "WRITE",
      [
        "storage",
        "Stack[-0x10f]",
        null,
        null
      ]
    ],
    [
      "009ac4f8",
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
+ 009ac4fc ["COPY", "tmp:0:4", ["register:4048:4"]]
+ 009ac4fc ["INT_ADD", "tmp:1:8", ["register:8:8", "const:41:8"]]
+ 009ac4fc ["STORE", null, ["const:1b1:8", "tmp:1:8", "tmp:0:2"]]
- 009ac678 ["INT_ADD", "register:40f0:8", ["const:9ac678:8", "const:4:8"]]
- 009ac678 ["CALL", null, ["callee:00c57f00:8"]]
+ 009ac6cc ["INT_ADD", "register:40f0:8", ["const:9ac6cc:8", "const:4:8"]]
+ 009ac6cc ["CALL", null, ["callee:00c57f00:8"]]
- 009ac470 ["COPY", "tmp:0:8", ["const:bd8:8"]]
- 009ac470 ["INT_CARRY", "register:105:1", ["register:4098:8", "tmp:0:8"]]
- 009ac470 ["INT_SCARRY", "register:106:1", ["register:4098:8", "tmp:0:8"]]
- 009ac470 ["INT_ADD", "tmp:1:8", ["register:4098:8", "tmp:0:8"]]
+ 009ac4c4 ["COPY", "tmp:0:8", ["const:cd8:8"]]
+ 009ac4c4 ["INT_CARRY", "register:105:1", ["register:4098:8", "tmp:0:8"]]
+ 009ac4c4 ["INT_SCARRY", "register:106:1", ["register:4098:8", "tmp:0:8"]]
+ 009ac4c4 ["INT_ADD", "tmp:1:8", ["register:4098:8", "tmp:0:8"]]
~~~


<a id="compare-3b480cddb423477b35f7ccc7c06f36ca"></a>

### [`009ac890`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009ac/009ac890.md) → [`009ac8e4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009ac/009ac8e4.md) FUN_009ac8e4

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 1件 [`009af988`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009af/009af988.md) · 呼出先 3件 [`00c53d00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c53/00c53d00.md) [`00c57e80`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e80.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md)
- 新版 呼出元 1件 [`009af9dc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009af/009af9dc.md) · 呼出先 3件 [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)

変更の種類 branch_condition_or_target, cfg_edge_inventory, constant, control_flow, control_flow_count, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_store_alignment

命令の説明率　旧版 86.84% / 新版 86.84%

優先判定に残った影響 `unresolved_branch_alignment` 1件, `unresolved_store_alignment` 6件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:009ac890",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "unmatched:009ac894",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "unmatched:009ac898",
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
      "009ac8e4",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "009ac8e8",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "009ac8ec",
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
- 009ac890 ["COPY", "tmp:0:8", ["register:40e8:8"]]
- 009ac890 ["COPY", "tmp:1:8", ["register:40f0:8"]]
- 009ac890 ["INT_ADD", "register:8:8", ["register:8:8", "const:ffffffffffffffd0:8"]]
- 009ac890 ["STORE", null, ["const:1b1:8", "register:8:8", "tmp:0:8"]]
- 009ac894 ["COPY", "tmp:0:8", ["register:40b0:8"]]
- 009ac894 ["COPY", "tmp:1:8", ["register:40a8:8"]]
- 009ac894 ["INT_ADD", "tmp:2:8", ["register:8:8", "const:10:8"]]
- 009ac894 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
- 009ac898 ["COPY", "tmp:0:8", ["register:40a0:8"]]
- 009ac898 ["COPY", "tmp:1:8", ["register:4098:8"]]
- 009ac898 ["INT_ADD", "tmp:2:8", ["register:8:8", "const:20:8"]]
- 009ac898 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
~~~


<a id="compare-b6fa3ccb0fa1c1731f1e045ffb71fa8d"></a>

### [`009acc30`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009ac/009acc30.md) → [`009acc84`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009ac/009acc84.md) FUN_009acc84

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 1件 [`00a8a418`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a8a/00a8a418.md) · 呼出先 16件 [`0043bb20`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043bb20.md) [`00869ef4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00869/00869ef4.md) [`009a9300`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009a9/009a9300.md) [`009a9768`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009a9/009a9768.md) [`009ac2b8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009ac/009ac2b8.md)
- 新版 呼出元 1件 [`00a8a488`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a8a/00a8a488.md) · 呼出先 16件 [`0043bb60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bb60.md) [`00869f4c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00869/00869f4c.md) [`009a9354`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009a9/009a9354.md) [`009a97bc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009a9/009a97bc.md) [`009ac30c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009ac/009ac30c.md)

変更の種類 branch_condition_or_target, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, operands_and_dependencies, operation_sequence, store_value, unresolved_branch_alignment

命令の説明率　旧版 94.00% / 新版 94.00%

優先判定に残った影響 `store_value` 1件, `unresolved_branch_alignment` 3件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "009acde8",
      "incomplete_value": false,
      "site": "009acdf4",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c88000:8"
          ],
          [
            "leaf",
            "const:b80:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "009acd94",
      "incomplete_value": false,
      "site": "009acda0",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c88000:8"
          ],
          [
            "leaf",
            "const:ab0:8"
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
      "unmatched:009acd54",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "009acdc4"
      ]
    ],
    [
      "009acdf4",
      "DATA",
      [
        "storage",
        "00c88ab0",
        null,
        "pointer"
      ]
    ],
    [
      "009ace64",
      "READ",
      [
        "storage",
        "00c88ac0",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "009acda8",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "009acdc4"
      ]
    ],
    [
      "009acdf4",
      "DATA",
      [
        "storage",
        "00c88b80",
        null,
        "pointer"
      ]
    ],
    [
      "009ace64",
      "READ",
      [
        "storage",
        "00c88b90",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 009acdf4 ["INT_EQUAL", "tmp:0:1", ["register:40a8:8", "const:0:8"]]
- 009acdf4 ["CBRANCH", null, ["local:b19:8", "tmp:0:1"]]
+ 009ace48 ["INT_EQUAL", "tmp:0:1", ["register:40a8:8", "const:0:8"]]
+ 009ace48 ["CBRANCH", null, ["local:b18:8", "tmp:0:1"]]
- 009acca8 ["INT_ADD", "register:40f0:8", ["const:9acca8:8", "const:4:8"]]
- 009acca8 ["CALL", null, ["callee:0043bb60:8"]]
+ 009accfc ["INT_ADD", "register:40f0:8", ["const:9accfc:8", "const:4:8"]]
+ 009accfc ["CALL", null, ["callee:0043bb60:8"]]
- 009accf4 ["INT_ADD", "register:40f0:8", ["const:9accf4:8", "const:4:8"]]
- 009accf4 ["CALL", null, ["callee:009ac30c:8"]]
+ 009acd48 ["INT_ADD", "register:40f0:8", ["const:9acd48:8", "const:4:8"]]
+ 009acd48 ["CALL", null, ["callee:009ac30c:8"]]
~~~


<a id="compare-b056542da47c132aeb20e1601459dafc"></a>

### [`009acef8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009ac/009acef8.md) → [`009acf4c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009ac/009acf4c.md) FUN_009acf4c

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 1件 [`0084e59c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0084e/0084e59c.md) · 呼出先 2件 [`00c53d00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c53/00c53d00.md) [`00c57e80`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e80.md)
- 新版 呼出元 1件 [`0084e5f4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0084e/0084e5f4.md) · 呼出先 2件 [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md)

変更の種類 cfg_edge_inventory, constant, control_flow, control_flow_count, local_def_use, operands_and_dependencies, operation_sequence, unresolved_return_alignment

命令の説明率　旧版 96.43% / 新版 96.43%

アドレスに依存する影響 `unresolved_return_alignment` 1件

~~~diff
- 009acf30 ["INT_ADD", "register:40f0:8", ["const:9acf30:8", "const:4:8"]]
- 009acf30 ["CALL", null, ["callee:00c53da0:8"]]
+ 009acf84 ["INT_ADD", "register:40f0:8", ["const:9acf84:8", "const:4:8"]]
+ 009acf84 ["CALL", null, ["callee:00c53da0:8"]]
- 009acf44 ["COPY", "register:0:8", ["register:4040:8"]]
- 009acf44 ["INT_ADD", "register:40f0:8", ["const:9acf44:8", "const:4:8"]]
- 009acf44 ["CALLIND", null, ["register:0:8"]]
+ 009acf98 ["COPY", "register:0:8", ["register:4040:8"]]
+ 009acf98 ["INT_ADD", "register:40f0:8", ["const:9acf98:8", "const:4:8"]]
+ 009acf98 ["CALLIND", null, ["register:0:8"]]
- 009acf4c ["INT_ADD", "register:40f0:8", ["const:9acf4c:8", "const:4:8"]]
- 009acf4c ["CALL", null, ["callee:00c57f50:8"]]
+ 009acfa0 ["INT_ADD", "register:40f0:8", ["const:9acfa0:8", "const:4:8"]]
+ 009acfa0 ["CALL", null, ["callee:00c57f50:8"]]
~~~


<a id="compare-b4765c8b2d318fb993e48eed01c9ec3c"></a>

### [`009acf68`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009ac/009acf68.md) → [`009acfbc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009ac/009acfbc.md) FUN_009acfbc

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 1件 [`0075eb80`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0075e/0075eb80.md) · 呼出先 18件 [`00440ec0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00440/00440ec0.md) [`006b8c44`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006b8/006b8c44.md) [`00806614`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00806/00806614.md) [`009b0be8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009b0/009b0be8.md) [`009b0d44`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009b0/009b0d44.md)
- 新版 呼出元 1件 [`0075ebd8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0075e/0075ebd8.md) · 呼出先 18件 [`00440f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00440/00440f00.md) [`006b8c9c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006b8/006b8c9c.md) [`0080666c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00806/0080666c.md) [`009b0c3c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009b0/009b0c3c.md) [`009b0d98`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009b0/009b0d98.md)

変更の種類 branch_condition_or_target, call_argument_candidate, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_call_alignment

命令の説明率　旧版 91.28% / 新版 91.28%

優先判定に残った影響 `call_argument_candidate` 2件, `unresolved_branch_alignment` 9件, `unresolved_call_alignment` 3件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "009ad0bc",
      "incomplete_value": true,
      "site": "009ad0c0",
      "value": [
        "INT_LEFT",
        "8",
        [
          [
            "live",
            "register:40e0:8"
          ],
          [
            "leaf",
            "const:3:8"
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
    "new": null,
    "old": {
      "definition_site": "009ad310",
      "incomplete_value": true,
      "site": "009ad314",
      "value": [
        "live",
        "register:4098:8"
      ]
    },
    "ordinal": 25,
    "slot": 1
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:009ad08c",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "009ad4d8"
      ]
    ],
    [
      "unmatched:009ad1d0",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "009ad25c"
      ]
    ],
    [
      "unmatched:009ad1e8",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "009ad21c"
      ]
    ]
  ],
  "added": [
    [
      "009ad0e0",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "009ad430"
      ]
    ],
    [
      "009ad224",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "009ad25c"
      ]
    ],
    [
      "009ad23c",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "009ad21c"
      ]
    ]
  ]
}
~~~


~~~diff
- 009ad06c ["COPY", "register:0:8", ["register:4040:8"]]
- 009ad06c ["INT_ADD", "register:40f0:8", ["const:9ad06c:8", "const:4:8"]]
- 009ad06c ["CALLIND", null, ["register:0:8"]]
+ 009ad0c0 ["COPY", "register:0:8", ["register:4040:8"]]
+ 009ad0c0 ["INT_ADD", "register:40f0:8", ["const:9ad0c0:8", "const:4:8"]]
+ 009ad0c0 ["CALLIND", null, ["register:0:8"]]
- 009ad0c0 ["INT_ADD", "register:40f0:8", ["const:9ad0c0:8", "const:4:8"]]
- 009ad0c0 ["CALL", null, ["callee:00c57f60:8"]]
+ 009ad114 ["INT_ADD", "register:40f0:8", ["const:9ad114:8", "const:4:8"]]
+ 009ad114 ["CALL", null, ["callee:00c57f60:8"]]
- 009ad314 ["INT_ADD", "register:40f0:8", ["const:9ad314:8", "const:4:8"]]
- 009ad314 ["CALL", null, ["callee:009b0c3c:8"]]
+ 009ad368 ["INT_ADD", "register:40f0:8", ["const:9ad368:8", "const:4:8"]]
+ 009ad368 ["CALL", null, ["callee:009b0c3c:8"]]
~~~


<a id="compare-b873e0eb0ef01581dd439ddd0cf8a474"></a>

### [`009ad4a4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009ad/009ad4a4.md) → [`009ad4f8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009ad/009ad4f8.md) FUN_009ad4f8

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 1件 [`007644e4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00764/007644e4.md) · 呼出先 11件 [`009b0bdc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009b0/009b0bdc.md) [`009b0be8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009b0/009b0be8.md) [`009b3b00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009b3/009b3b00.md) [`009b4154`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009b4/009b4154.md) [`009b5c2c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009b5/009b5c2c.md)
- 新版 呼出元 1件 [`0076453c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00764/0076453c.md) · 呼出先 11件 [`009b0c30`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009b0/009b0c30.md) [`009b0c3c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009b0/009b0c3c.md) [`009b3b54`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009b3/009b3b54.md) [`009b41a8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009b4/009b41a8.md) [`009b5c80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009b5/009b5c80.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, operands_and_dependencies, operation_sequence, store_value, unresolved_branch_alignment

命令の説明率　旧版 97.33% / 新版 97.33%

優先判定に残った影響 `call_argument_candidate` 3件, `store_value` 1件, `unresolved_branch_alignment` 2件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "009ad648",
      "incomplete_value": false,
      "site": "009ad654",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c88000:8"
          ],
          [
            "leaf",
            "const:b80:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "009ad5f4",
      "incomplete_value": false,
      "site": "009ad600",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c88000:8"
          ],
          [
            "leaf",
            "const:ab0:8"
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
    "new": null,
    "old": {
      "definition_site": "009ad570",
      "incomplete_value": false,
      "site": "009ad574",
      "value": [
        "leaf",
        "const:1:8"
      ]
    },
    "ordinal": 6,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "009ad588",
      "incomplete_value": false,
      "site": "009ad58c",
      "value": [
        "leaf",
        "const:ffffffffffffffff:8"
      ]
    },
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
      "unmatched:009ad580",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "009ad600"
      ]
    ],
    [
      "unmatched:009ad5b0",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "009ad630"
      ]
    ],
    [
      "009ad654",
      "DATA",
      [
        "storage",
        "00c88ab0",
        null,
        "pointer"
      ]
    ]
  ],
  "added": [
    [
      "009ad5d4",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "009ad600"
      ]
    ],
    [
      "009ad604",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "009ad630"
      ]
    ],
    [
      "009ad654",
      "DATA",
      [
        "storage",
        "00c88b80",
        null,
        "pointer"
      ]
    ]
  ]
}
~~~


~~~diff
- 009ad520 ["INT_ADD", "register:40f0:8", ["const:9ad520:8", "const:4:8"]]
- 009ad520 ["CALL", null, ["callee:009b41a8:8"]]
+ 009ad574 ["INT_ADD", "register:40f0:8", ["const:9ad574:8", "const:4:8"]]
+ 009ad574 ["CALL", null, ["callee:009b41a8:8"]]
- 009ad574 ["INT_ADD", "register:40f0:8", ["const:9ad574:8", "const:4:8"]]
- 009ad574 ["CALL", null, ["callee:00c53d70:8"]]
+ 009ad5c8 ["INT_ADD", "register:40f0:8", ["const:9ad5c8:8", "const:4:8"]]
+ 009ad5c8 ["CALL", null, ["callee:00c53d70:8"]]
- 009ad58c ["INT_ADD", "register:40f0:8", ["const:9ad58c:8", "const:4:8"]]
- 009ad58c ["CALL", null, ["callee:00c53da0:8"]]
+ 009ad5e0 ["INT_ADD", "register:40f0:8", ["const:9ad5e0:8", "const:4:8"]]
+ 009ad5e0 ["CALL", null, ["callee:00c53da0:8"]]
~~~


<a id="compare-5bbdecf6a1f7fee8f89b4c5d13be69ed"></a>

### [`009ad750`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009ad/009ad750.md) → [`009ad7a4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009ad/009ad7a4.md) FUN_009ad7a4

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 1件 [`007644e4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00764/007644e4.md) · 呼出先 3件 [`009b4154`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009b4/009b4154.md) [`00c53d00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c53/00c53d00.md) [`00c57e80`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e80.md)
- 新版 呼出元 1件 [`0076453c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00764/0076453c.md) · 呼出先 3件 [`009b41a8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009b4/009b41a8.md) [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md)

変更の種類 branch_condition_or_target, call, call_count, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_call_alignment

命令の説明率　旧版 86.67% / 新版 86.67%

優先判定に残った影響 `unresolved_branch_alignment` 2件, `unresolved_call_alignment` 3件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:009ad7a4",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "009ad7d4"
      ]
    ],
    [
      "unmatched:009ad858",
      "UNCONDITIONAL_CALL",
      [
        "mapped_function",
        "00c53da0"
      ]
    ],
    [
      "unmatched:009ad85c",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "009ad890"
      ]
    ]
  ],
  "added": [
    [
      "009ad7f8",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "009ad7d4"
      ]
    ],
    [
      "009ad8ac",
      "UNCONDITIONAL_CALL",
      [
        "mapped_function",
        "00c53da0"
      ]
    ],
    [
      "009ad8b0",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "009ad890"
      ]
    ]
  ]
}
~~~


~~~diff
- 009ad784 ["INT_ADD", "register:40f0:8", ["const:9ad784:8", "const:4:8"]]
- 009ad784 ["CALL", null, ["callee:009b41a8:8"]]
+ 009ad7d8 ["INT_ADD", "register:40f0:8", ["const:9ad7d8:8", "const:4:8"]]
+ 009ad7d8 ["CALL", null, ["callee:009b41a8:8"]]
- 009ad78c ["CBRANCH", null, ["local:b6:8", "register:101:1"]]
+ 009ad7e0 ["CBRANCH", null, ["local:b5:8", "register:101:1"]]
- 009ad7a4 ["BOOL_NEGATE", "tmp:0:1", ["register:102:1"]]
- 009ad7a4 ["CBRANCH", null, ["local:b2:8", "tmp:0:1"]]
~~~


<a id="compare-efd833cba92bd7c92923b6ca3ee44c9f"></a>

### [`009ad87c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009ad/009ad87c.md) → [`009ad8d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009ad/009ad8d0.md) FUN_009ad8d0

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 1件 [`0043c258`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043c/0043c258.md) · 呼出先 7件 [`009b46a0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009b4/009b46a0.md) [`009b5ca4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009b5/009b5ca4.md) [`009b5d54`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009b5/009b5d54.md) [`00c53cd0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c53/00c53cd0.md) [`00c53d00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c53/00c53d00.md)
- 新版 呼出元 1件 [`0043c298`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043c/0043c298.md) · 呼出先 7件 [`009b46f4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009b4/009b46f4.md) [`009b5cf8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009b5/009b5cf8.md) [`009b5da8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009b5/009b5da8.md) [`00c53d70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53d70.md) [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md)

変更の種類 branch_condition_or_target, call, call_argument_candidate, call_count, cfg_edge_inventory, constant, control_flow, local_def_use, operands_and_dependencies, operation_sequence, unresolved_call_alignment

命令の説明率　旧版 98.21% / 新版 98.21%

優先判定に残った影響 `call_argument_candidate` 2件, `unresolved_call_alignment` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "009ad8e0",
      "incomplete_value": true,
      "site": "009ad8e4",
      "value": [
        "live",
        "register:40a0:8"
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
      "definition_site": "009ad904",
      "incomplete_value": true,
      "site": "009ad90c",
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
      "unmatched:009ad920",
      "COMPUTED_CALL",
      [
        "unresolved_target",
        null
      ]
    ]
  ],
  "added": [
    [
      "009ad974",
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
- 009ad8e4 ["INT_ADD", "register:40f0:8", ["const:9ad8e4:8", "const:4:8"]]
- 009ad8e4 ["CALL", null, ["callee:009b46f4:8"]]
+ 009ad938 ["INT_ADD", "register:40f0:8", ["const:9ad938:8", "const:4:8"]]
+ 009ad938 ["CALL", null, ["callee:009b46f4:8"]]
- 009ad90c ["INT_ADD", "register:40f0:8", ["const:9ad90c:8", "const:4:8"]]
- 009ad90c ["CALL", null, ["callee:00c53da0:8"]]
+ 009ad960 ["INT_ADD", "register:40f0:8", ["const:9ad960:8", "const:4:8"]]
+ 009ad960 ["CALL", null, ["callee:00c53da0:8"]]
- 009ad8b0 ["CBRANCH", null, ["local:b13:8", "register:101:1"]]
+ 009ad904 ["CBRANCH", null, ["local:b15:8", "register:101:1"]]
~~~


<a id="compare-aacde92efd4941709849850fb15f66e7"></a>

### [`009ad980`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009ad/009ad980.md) → [`009ad9d4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009ad/009ad9d4.md) FUN_009ad9d4

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 11件 [`007644e4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00764/007644e4.md) [`007929c8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00792/007929c8.md) [`0085d4f4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0085d/0085d4f4.md) [`009afea8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009af/009afea8.md) [`009b8b50`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009b8/009b8b50.md) · 呼出先 9件 [`00440ec0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00440/00440ec0.md) [`009b1e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009b1/009b1e90.md) [`00c53cd0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c53/00c53cd0.md) [`00c53d00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c53/00c53d00.md) [`00c57e80`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e80.md)
- 新版 呼出元 11件 [`0076453c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00764/0076453c.md) [`00792a20`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00792/00792a20.md) [`0085d54c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0085d/0085d54c.md) [`009afefc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009af/009afefc.md) [`009b8ba4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009b8/009b8ba4.md) · 呼出先 9件 [`00440f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00440/00440f00.md) [`009b1ee4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009b1/009b1ee4.md) [`00c53d70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53d70.md) [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md)

変更の種類 branch_condition_or_target, call_argument_candidate, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_store_alignment

命令の説明率　旧版 86.92% / 新版 86.92%

優先判定に残った影響 `call_argument_candidate` 1件, `unresolved_branch_alignment` 2件, `unresolved_store_alignment` 13件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "009adac8",
      "incomplete_value": true,
      "site": "009adad0",
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
      "unmatched:009ad984",
      "WRITE",
      [
        "storage",
        "Stack[-0x60]",
        null,
        null
      ]
    ],
    [
      "unmatched:009ad988",
      "WRITE",
      [
        "storage",
        "Stack[-0x50]",
        null,
        null
      ]
    ],
    [
      "unmatched:009ad98c",
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
      "009ad9d8",
      "WRITE",
      [
        "storage",
        "Stack[-0x60]",
        null,
        null
      ]
    ],
    [
      "009ad9dc",
      "WRITE",
      [
        "storage",
        "Stack[-0x50]",
        null,
        null
      ]
    ],
    [
      "009ad9e0",
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
- 009adad0 ["INT_ADD", "register:40f0:8", ["const:9adad0:8", "const:4:8"]]
- 009adad0 ["CALL", null, ["callee:00c53da0:8"]]
+ 009adb24 ["INT_ADD", "register:40f0:8", ["const:9adb24:8", "const:4:8"]]
+ 009adb24 ["CALL", null, ["callee:00c53da0:8"]]
- 009ad980 ["INT_SUB", "register:8:8", ["register:8:8", "const:80:8"]]
- 009ad984 ["COPY", "tmp:0:8", ["register:40e8:8"]]
- 009ad984 ["COPY", "tmp:1:8", ["register:40f0:8"]]
- 009ad984 ["INT_ADD", "tmp:2:8", ["register:8:8", "const:20:8"]]
- 009ad984 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
~~~


<a id="compare-622f25ceb1aa7cc5555383c10cfdcdb6"></a>

### [`009adb78`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009ad/009adb78.md) → [`009adbcc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009ad/009adbcc.md) FUN_009adbcc

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 2件 [`0072b1a0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0072b/0072b1a0.md) [`00793908`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00793/00793908.md) · 呼出先 5件 [`009b5c94`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009b5/009b5c94.md) [`00c53cd0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c53/00c53cd0.md) [`00c53d00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c53/00c53d00.md) [`00c57e80`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e80.md) [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md)
- 新版 呼出元 2件 [`0072b1f8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0072b/0072b1f8.md) [`00793960`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00793/00793960.md) · 呼出先 5件 [`009b5ce8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009b5/009b5ce8.md) [`00c53d70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53d70.md) [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)

変更の種類 branch_condition_or_target, cfg_edge_inventory, constant, control_flow, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_store_alignment

命令の説明率　旧版 91.38% / 新版 91.38%

優先判定に残った影響 `unresolved_store_alignment` 8件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:009adb7c",
      "WRITE",
      [
        "storage",
        "Stack[-0x50]",
        null,
        null
      ]
    ],
    [
      "unmatched:009adb80",
      "WRITE",
      [
        "storage",
        "Stack[-0x40]",
        null,
        null
      ]
    ],
    [
      "unmatched:009adb84",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "009adbd0",
      "WRITE",
      [
        "storage",
        "Stack[-0x50]",
        null,
        null
      ]
    ],
    [
      "009adbd4",
      "WRITE",
      [
        "storage",
        "Stack[-0x40]",
        null,
        null
      ]
    ],
    [
      "009adbd8",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 009adb78 ["INT_SUB", "register:8:8", ["register:8:8", "const:70:8"]]
- 009adb7c ["COPY", "tmp:0:8", ["register:40e8:8"]]
- 009adb7c ["COPY", "tmp:1:8", ["register:40f0:8"]]
- 009adb7c ["INT_ADD", "tmp:2:8", ["register:8:8", "const:20:8"]]
- 009adb7c ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
- 009adb80 ["COPY", "tmp:0:8", ["register:40d0:8"]]
- 009adb80 ["COPY", "tmp:1:8", ["register:40c8:8"]]
- 009adb80 ["INT_ADD", "tmp:2:8", ["register:8:8", "const:30:8"]]
- 009adb80 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
~~~


<a id="compare-e9922235d2adba22a24e1b9cb111ee3f"></a>

### [`009adc84`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009ad/009adc84.md) → [`009adcd8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009ad/009adcd8.md) FUN_009adcd8

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 3件 [`0061304c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00613/0061304c.md) [`00613c64`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00613/00613c64.md) [`007df0e8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007df/007df0e8.md) · 呼出先 6件 [`009aad20`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009aa/009aad20.md) [`009b5c94`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009b5/009b5c94.md) [`00c53cd0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c53/00c53cd0.md) [`00c53d00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c53/00c53d00.md) [`00c57e80`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e80.md)
- 新版 呼出元 3件 [`0061308c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00613/0061308c.md) [`00613ca4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00613/00613ca4.md) [`007df140`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007df/007df140.md) · 呼出先 6件 [`009aad74`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009aa/009aad74.md) [`009b5ce8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009b5/009b5ce8.md) [`00c53d70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53d70.md) [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md)

変更の種類 comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment

命令の説明率　旧版 94.20% / 新版 94.20%

アドレスに依存する影響 `unresolved_branch_alignment` 1件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:009add40",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "009ade0c"
      ]
    ],
    [
      "unmatched:009add88",
      "DATA",
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
      "009add94",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "009ade0c"
      ]
    ],
    [
      "009adddc",
      "DATA",
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
- 009adcd4 ["INT_ADD", "register:40f0:8", ["const:9adcd4:8", "const:4:8"]]
- 009adcd4 ["CALL", null, ["callee:00c53d70:8"]]
+ 009add28 ["INT_ADD", "register:40f0:8", ["const:9add28:8", "const:4:8"]]
+ 009add28 ["CALL", null, ["callee:00c53d70:8"]]
- 009adcdc ["INT_ADD", "register:40f0:8", ["const:9adcdc:8", "const:4:8"]]
- 009adcdc ["CALL", null, ["callee:009b5ce8:8"]]
+ 009add30 ["INT_ADD", "register:40f0:8", ["const:9add30:8", "const:4:8"]]
+ 009add30 ["CALL", null, ["callee:009b5ce8:8"]]
- 009adcfc ["INT_ADD", "register:40f0:8", ["const:9adcfc:8", "const:4:8"]]
- 009adcfc ["CALL", null, ["callee:00c53da0:8"]]
+ 009add50 ["INT_ADD", "register:40f0:8", ["const:9add50:8", "const:4:8"]]
+ 009add50 ["CALL", null, ["callee:00c53da0:8"]]
~~~


<a id="compare-94b407c7c23627725ff4ad422f1bf659"></a>

### [`009addbc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009ad/009addbc.md) → [`009ade10`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009ad/009ade10.md) FUN_009ade10

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 1件 [`0061304c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00613/0061304c.md) · 呼出先 6件 [`009b5c94`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009b5/009b5c94.md) [`009b5cd4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009b5/009b5cd4.md) [`00c53cd0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c53/00c53cd0.md) [`00c53d00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c53/00c53d00.md) [`00c57e80`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e80.md)
- 新版 呼出元 1件 [`0061308c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00613/0061308c.md) · 呼出先 6件 [`009b5ce8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009b5/009b5ce8.md) [`009b5d28`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009b5/009b5d28.md) [`00c53d70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53d70.md) [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, constant, control_flow, control_flow_count, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_store_alignment

命令の説明率　旧版 92.42% / 新版 92.42%

優先判定に残った影響 `call_argument_candidate` 2件, `unresolved_branch_alignment` 1件, `unresolved_store_alignment` 5件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "009ade64",
      "incomplete_value": true,
      "site": "009ade68",
      "value": [
        "live",
        "register:40a8:8"
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
      "definition_site": "009ade40",
      "incomplete_value": true,
      "site": "009ade44",
      "value": [
        "live",
        "register:40b0:8"
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
      "unmatched:009addc0",
      "WRITE",
      [
        "storage",
        "Stack[-0x50]",
        null,
        null
      ]
    ],
    [
      "unmatched:009addc4",
      "WRITE",
      [
        "storage",
        "Stack[-0x40]",
        null,
        null
      ]
    ],
    [
      "unmatched:009adde4",
      "WRITE",
      [
        "storage",
        "Stack[-0x58]",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "009ade14",
      "WRITE",
      [
        "storage",
        "Stack[-0x50]",
        null,
        null
      ]
    ],
    [
      "009ade18",
      "WRITE",
      [
        "storage",
        "Stack[-0x40]",
        null,
        null
      ]
    ],
    [
      "009ade38",
      "WRITE",
      [
        "storage",
        "Stack[-0x58]",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 009addf0 ["CBRANCH", null, ["local:b14:8", "register:101:1"]]
+ 009ade44 ["CBRANCH", null, ["local:b13:8", "register:101:1"]]
- 009ade14 ["INT_ADD", "register:40f0:8", ["const:9ade14:8", "const:4:8"]]
- 009ade14 ["CALL", null, ["callee:009b5ce8:8"]]
+ 009ade68 ["INT_ADD", "register:40f0:8", ["const:9ade68:8", "const:4:8"]]
+ 009ade68 ["CALL", null, ["callee:009b5ce8:8"]]
- 009ade44 ["INT_ADD", "register:40f0:8", ["const:9ade44:8", "const:4:8"]]
- 009ade44 ["CALL", null, ["callee:00c57f50:8"]]
+ 009ade98 ["INT_ADD", "register:40f0:8", ["const:9ade98:8", "const:4:8"]]
+ 009ade98 ["CALL", null, ["callee:00c57f50:8"]]
~~~


<a id="compare-84c8e8c7b7bb95ec9498645dc5a7fd5e"></a>

### [`009ae00c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009ae/009ae00c.md) → [`009ae060`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009ae/009ae060.md) FUN_009ae060

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 1件 [`0061304c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00613/0061304c.md) · 呼出先 6件 [`009b5c94`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009b5/009b5c94.md) [`009b5ca4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009b5/009b5ca4.md) [`00c53cd0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c53/00c53cd0.md) [`00c53d00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c53/00c53d00.md) [`00c57e80`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e80.md)
- 新版 呼出元 1件 [`0061308c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00613/0061308c.md) · 呼出先 6件 [`009b5ce8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009b5/009b5ce8.md) [`009b5cf8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009b5/009b5cf8.md) [`00c53d70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53d70.md) [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, constant, control_flow, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

優先判定に残った影響 `call_argument_candidate` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "009ae0c4",
      "incomplete_value": false,
      "site": "009ae0c8",
      "value": [
        "leaf",
        "const:ffffffffffffffff:8"
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
      "definition_site": "009ae0c0",
      "incomplete_value": true,
      "site": "009ae0c8",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:40a8:8"
          ],
          [
            "leaf",
            "const:8:8"
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


~~~diff
- 009ae074 ["INT_ADD", "register:40f0:8", ["const:9ae074:8", "const:4:8"]]
- 009ae074 ["CALL", null, ["callee:00c53da0:8"]]
+ 009ae0c8 ["INT_ADD", "register:40f0:8", ["const:9ae0c8:8", "const:4:8"]]
+ 009ae0c8 ["CALL", null, ["callee:00c53da0:8"]]
- 009ae058 ["INT_ADD", "register:40f0:8", ["const:9ae058:8", "const:4:8"]]
- 009ae058 ["CALL", null, ["callee:00c53d70:8"]]
+ 009ae0ac ["INT_ADD", "register:40f0:8", ["const:9ae0ac:8", "const:4:8"]]
+ 009ae0ac ["CALL", null, ["callee:00c53d70:8"]]
- 009ae060 ["INT_ADD", "register:40f0:8", ["const:9ae060:8", "const:4:8"]]
- 009ae060 ["CALL", null, ["callee:009b5ce8:8"]]
+ 009ae0b4 ["INT_ADD", "register:40f0:8", ["const:9ae0b4:8", "const:4:8"]]
+ 009ae0b4 ["CALL", null, ["callee:009b5ce8:8"]]
~~~


<a id="compare-adc921daab39e16ed0de83109c0ce85a"></a>

### [`009ae130`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009ae/009ae130.md) → [`009ae184`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009ae/009ae184.md) FUN_009ae184

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 1件 [`0061304c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00613/0061304c.md) · 呼出先 6件 [`009b3b68`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009b3/009b3b68.md) [`009b5c94`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009b5/009b5c94.md) [`00c53cd0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c53/00c53cd0.md) [`00c53d00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c53/00c53d00.md) [`00c57e80`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e80.md)
- 新版 呼出元 1件 [`0061308c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00613/0061308c.md) · 呼出先 6件 [`009b3bbc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009b3/009b3bbc.md) [`009b5ce8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009b5/009b5ce8.md) [`00c53d70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53d70.md) [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment

命令の説明率　旧版 92.86% / 新版 92.86%

優先判定に残った影響 `call_argument_candidate` 2件, `unresolved_branch_alignment` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "009ae1a0",
      "incomplete_value": false,
      "site": "009ae1a4",
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
      "definition_site": "009ae1bc",
      "incomplete_value": true,
      "site": "009ae1c0",
      "value": [
        "live",
        "register:40b8:8"
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
      "unmatched:009ae1d4",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "009ae1c8"
      ]
    ],
    [
      "unmatched:009ae214",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "009ae2bc"
      ]
    ],
    [
      "unmatched:009ae230",
      "READ",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "009ae228",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "009ae1c8"
      ]
    ],
    [
      "009ae268",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "009ae2bc"
      ]
    ],
    [
      "009ae284",
      "READ",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 009ae1a4 ["INT_ADD", "register:40f0:8", ["const:9ae1a4:8", "const:4:8"]]
- 009ae1a4 ["CALL", null, ["callee:00c53da0:8"]]
+ 009ae1f8 ["INT_ADD", "register:40f0:8", ["const:9ae1f8:8", "const:4:8"]]
+ 009ae1f8 ["CALL", null, ["callee:00c53da0:8"]]
- 009ae1c0 ["INT_ADD", "register:40f0:8", ["const:9ae1c0:8", "const:4:8"]]
- 009ae1c0 ["CALL", null, ["callee:00c57f50:8"]]
+ 009ae214 ["INT_ADD", "register:40f0:8", ["const:9ae214:8", "const:4:8"]]
+ 009ae214 ["CALL", null, ["callee:00c57f50:8"]]
- 009ae164 ["CBRANCH", null, ["local:b11:8", "register:101:1"]]
+ 009ae1b8 ["CBRANCH", null, ["local:b12:8", "register:101:1"]]
~~~


<a id="compare-2d26cfcdc76c062aadf6a1205a792c50"></a>

### [`009ae26c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009ae/009ae26c.md) → [`009ae2c0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009ae/009ae2c0.md) FUN_009ae2c0

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 4件 [`0078bd58`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0078b/0078bd58.md) [`009ae26c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009ae/009ae26c.md) [`009b2210`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009b2/009b2210.md) [`00a917b4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a91/00a917b4.md) · 呼出先 15件 [`00459d74`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00459/00459d74.md) [`00752280`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00752/00752280.md) [`009ae26c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009ae/009ae26c.md) [`009b2190`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009b2/009b2190.md) [`009b25b4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009b2/009b25b4.md)
- 新版 呼出元 4件 [`0078bdb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0078b/0078bdb0.md) [`009ae2c0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009ae/009ae2c0.md) [`009b2264`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009b2/009b2264.md) [`00a91824`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a91/00a91824.md) · 呼出先 15件 [`00459db4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00459/00459db4.md) [`007522d8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00752/007522d8.md) [`009ae2c0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009ae/009ae2c0.md) [`009b21e4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009b2/009b21e4.md) [`009b2608`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009b2/009b2608.md)

変更の種類 branch_condition_or_target, call, call_argument_candidate, call_count, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, store_condition, unresolved_branch_alignment, unresolved_call_alignment, unresolved_return_alignment, unresolved_store_alignment

命令の説明率　旧版 87.09% / 新版 87.09%

優先判定に残った影響 `call_argument_candidate` 4件, `store_condition` 2件, `unresolved_branch_alignment` 6件, `unresolved_call_alignment` 7件, `unresolved_return_alignment` 1件, `unresolved_store_alignment` 3件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "009ae3ec",
      "incomplete_value": true,
      "site": "009ae3f4",
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
            "const:90:8"
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
    "new": null,
    "old": {
      "definition_site": "009ae440",
      "incomplete_value": true,
      "site": "009ae448",
      "value": [
        "live",
        "register:4098:8"
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
      "definition_site": "009ae590",
      "incomplete_value": true,
      "site": "009ae59c",
      "value": [
        "live",
        "register:40a0:8"
      ]
    },
    "ordinal": 23,
    "slot": 1
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:009ae29c",
      "WRITE",
      [
        "storage",
        "Stack[-0x58]",
        null,
        null
      ]
    ],
    [
      "009ae5a8",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "009ae3d8"
      ]
    ],
    [
      "unmatched:009ae47c",
      "READ",
      [
        "storage",
        "Stack[-0x160]",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "009ae2f0",
      "WRITE",
      [
        "storage",
        "Stack[-0x58]",
        null,
        null
      ]
    ],
    [
      "009ae374",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "009ae3d8"
      ]
    ],
    [
      "009ae4d0",
      "READ",
      [
        "storage",
        "Stack[-0x160]",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 009ae3f4 ["COPY", "register:0:8", ["register:4040:8"]]
- 009ae3f4 ["INT_ADD", "register:40f0:8", ["const:9ae3f4:8", "const:4:8"]]
- 009ae3f4 ["CALLIND", null, ["register:0:8"]]
+ 009ae448 ["COPY", "register:0:8", ["register:4040:8"]]
+ 009ae448 ["INT_ADD", "register:40f0:8", ["const:9ae448:8", "const:4:8"]]
+ 009ae448 ["CALLIND", null, ["register:0:8"]]
- 009ae448 ["COPY", "register:0:8", ["register:4040:8"]]
- 009ae448 ["INT_ADD", "register:40f0:8", ["const:9ae448:8", "const:4:8"]]
- 009ae448 ["CALLIND", null, ["register:0:8"]]
+ 009ae49c ["COPY", "register:0:8", ["register:4040:8"]]
+ 009ae49c ["INT_ADD", "register:40f0:8", ["const:9ae49c:8", "const:4:8"]]
+ 009ae49c ["CALLIND", null, ["register:0:8"]]
- 009ae59c ["INT_ADD", "register:40f0:8", ["const:9ae59c:8", "const:4:8"]]
- 009ae59c ["CALL", null, ["callee:009b4954:8"]]
+ 009ae5f0 ["INT_ADD", "register:40f0:8", ["const:9ae5f0:8", "const:4:8"]]
+ 009ae5f0 ["CALL", null, ["callee:009b4954:8"]]
~~~


<a id="compare-c493adf106d3cc0a534550381c90a94e"></a>

### [`009ae988`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009ae/009ae988.md) → [`009ae9dc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009ae/009ae9dc.md) FUN_009ae9dc

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 1件 [`00a8a418`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a8a/00a8a418.md) · 呼出先 10件 [`009b26d8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009b2/009b26d8.md) [`009b26dc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009b2/009b26dc.md) [`009b3b68`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009b3/009b3b68.md) [`009b5ca4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009b5/009b5ca4.md) [`009b5cb4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009b5/009b5cb4.md)
- 新版 呼出元 1件 [`00a8a488`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a8a/00a8a488.md) · 呼出先 10件 [`009b272c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009b2/009b272c.md) [`009b2730`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009b2/009b2730.md) [`009b3bbc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009b3/009b3bbc.md) [`009b5cf8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009b5/009b5cf8.md) [`009b5d08`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009b5/009b5d08.md)

変更の種類 branch_condition_or_target, constant, control_flow, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_store_alignment

命令の説明率　旧版 96.25% / 新版 96.25%

優先判定に残った影響 `unresolved_store_alignment` 2件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:009ae998",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "009aea78",
      "DATA",
      [
        "storage",
        "00c88c00",
        null,
        "undefined *"
      ]
    ],
    [
      "009aeab4",
      "READ",
      [
        "storage",
        "00c88c20",
        null,
        "pointer"
      ]
    ]
  ],
  "added": [
    [
      "009ae9ec",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "009aea78",
      "DATA",
      [
        "storage",
        "00c88cd0",
        null,
        "undefined *"
      ]
    ],
    [
      "009aeab4",
      "READ",
      [
        "storage",
        "00c88cf0",
        null,
        "pointer"
      ]
    ]
  ]
}
~~~


~~~diff
- 009ae998 ["COPY", "tmp:0:8", ["register:40b0:8"]]
- 009ae998 ["COPY", "tmp:1:8", ["register:40a8:8"]]
- 009ae998 ["INT_ADD", "tmp:2:8", ["register:8:8", "const:80:8"]]
- 009ae998 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
- 009ae9c0 ["COPY", "tmp:0:8", ["const:c00:8"]]
- 009ae9c0 ["INT_CARRY", "register:105:1", ["register:40c8:8", "tmp:0:8"]]
- 009ae9c0 ["INT_SCARRY", "register:106:1", ["register:40c8:8", "tmp:0:8"]]
- 009ae9c0 ["INT_ADD", "tmp:1:8", ["register:40c8:8", "tmp:0:8"]]
+ 009aea14 ["COPY", "tmp:0:8", ["const:cd0:8"]]
+ 009aea14 ["INT_CARRY", "register:105:1", ["register:40c8:8", "tmp:0:8"]]
+ 009aea14 ["INT_SCARRY", "register:106:1", ["register:40c8:8", "tmp:0:8"]]
+ 009aea14 ["INT_ADD", "tmp:1:8", ["register:40c8:8", "tmp:0:8"]]
- 009ae9ec ["INT_ADD", "register:40f0:8", ["const:9ae9ec:8", "const:4:8"]]
- 009ae9ec ["CALL", null, ["callee:00c53d70:8"]]
+ 009aea40 ["INT_ADD", "register:40f0:8", ["const:9aea40:8", "const:4:8"]]
+ 009aea40 ["CALL", null, ["callee:00c53d70:8"]]
~~~


