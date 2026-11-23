# v16.0.1 → v16.0.2 · 最優先の変更候補 (40)

[一覧の目次](README.md)

<a id="compare-6114b53e6aec7b5d900ada0dc6ca2029"></a>

### [`007884cc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00788/007884cc.md) → [`00788524`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00788/00788524.md) FUN_00788524

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
      "definition_site": "00788548",
      "incomplete_value": false,
      "site": "0078854c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c79000:8"
          ],
          [
            "leaf",
            "const:680:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "007884f0",
      "incomplete_value": false,
      "site": "007884f4",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c79000:8"
          ],
          [
            "leaf",
            "const:5b0:8"
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
      "0078854c",
      "DATA",
      [
        "storage",
        "00c795b0",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "0078854c",
      "DATA",
      [
        "storage",
        "00c79680",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 007884e0 ["INT_ADD", "register:40f0:8", ["const:7884e0:8", "const:4:8"]]
- 007884e0 ["CALL", null, ["callee:00c57f60:8"]]
+ 00788538 ["INT_ADD", "register:40f0:8", ["const:788538:8", "const:4:8"]]
+ 00788538 ["CALL", null, ["callee:00c57f60:8"]]
- 007884f0 ["COPY", "tmp:0:8", ["const:5b0:8"]]
- 007884f0 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 007884f0 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 007884f0 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00788548 ["COPY", "tmp:0:8", ["const:680:8"]]
+ 00788548 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00788548 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00788548 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-97b40532e11973de27bc4891b0642ea4"></a>

### [`0078850c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00788/0078850c.md) → [`00788564`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00788/00788564.md) FUN_00788564

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
      "definition_site": "00788568",
      "incomplete_value": false,
      "site": "0078856c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c79000:8"
          ],
          [
            "leaf",
            "const:680:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00788510",
      "incomplete_value": false,
      "site": "00788514",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c79000:8"
          ],
          [
            "leaf",
            "const:5b0:8"
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
      "0078856c",
      "DATA",
      [
        "storage",
        "00c795b0",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "0078856c",
      "DATA",
      [
        "storage",
        "00c79680",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00788510 ["COPY", "tmp:0:8", ["const:5b0:8"]]
- 00788510 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00788510 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00788510 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00788568 ["COPY", "tmp:0:8", ["const:680:8"]]
+ 00788568 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00788568 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00788568 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-ee95c7c604c6397c56ce0edc93445884"></a>

### [`00788534`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00788/00788534.md) → [`0078858c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00788/0078858c.md) FUN_0078858c

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 9件 [`00459d74`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00459/00459d74.md) [`0047acf4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047a/0047acf4.md) [`0047cdd4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047c/0047cdd4.md) [`007879e8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00787/007879e8.md) [`008b6ea4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008b6/008b6ea4.md)
- 新版 呼出元 0件  · 呼出先 9件 [`00459db4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00459/00459db4.md) [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md) [`0047ce14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047ce14.md) [`00787a40`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00787/00787a40.md) [`008b6efc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b6/008b6efc.md)

変更の種類 branch_condition_or_target, call, call_target, comparison, comparison_count, constant, control_flow, control_flow_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment

命令の説明率　旧版 94.00% / 新版 94.00%

優先判定に残った影響 `call_target` 2件, `unresolved_branch_alignment` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_target",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "00788704",
      "value": [
        "leaf",
        "ram:47ad34:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "007886ac",
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
      "site": "00788720",
      "value": [
        "leaf",
        "ram:47ad34:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "007886c8",
      "value": [
        "leaf",
        "ram:47acf4:8"
      ]
    },
    "ordinal": 15,
    "slot": 0
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "00788704",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047acf4"
      ]
    ],
    [
      "00788720",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047acf4"
      ]
    ]
  ],
  "added": [
    [
      "00788704",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ],
    [
      "00788720",
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
- 007886ac ["INT_ADD", "register:40f0:8", ["const:7886ac:8", "const:4:8"]]
- 007886ac ["CALL", null, ["ram:47acf4:8"]]
+ 00788704 ["INT_ADD", "register:40f0:8", ["const:788704:8", "const:4:8"]]
+ 00788704 ["CALL", null, ["ram:47ad34:8"]]
- 007886c8 ["INT_ADD", "register:40f0:8", ["const:7886c8:8", "const:4:8"]]
- 007886c8 ["CALL", null, ["ram:47acf4:8"]]
+ 00788720 ["INT_ADD", "register:40f0:8", ["const:788720:8", "const:4:8"]]
+ 00788720 ["CALL", null, ["ram:47ad34:8"]]
- 00788570 ["INT_ADD", "register:40f0:8", ["const:788570:8", "const:4:8"]]
- 00788570 ["CALL", null, ["callee:008b6efc:8"]]
+ 007885c8 ["INT_ADD", "register:40f0:8", ["const:7885c8:8", "const:4:8"]]
+ 007885c8 ["CALL", null, ["callee:008b6efc:8"]]
~~~


<a id="compare-26579db4e613cab18c95152dece463ca"></a>

### [`007887b4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00788/007887b4.md) → [`0078880c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00788/0078880c.md) FUN_0078880c

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`0078812c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00788/0078812c.md) · 呼出先 1件 [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md)
- 新版 呼出元 1件 [`00788184`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00788/00788184.md) · 呼出先 1件 [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)

変更の種類 call, call_argument_candidate, call_count, constant, local_def_use, memory_read, memory_read_count, operands_and_dependencies, operation_sequence, unresolved_call_alignment

命令の説明率　旧版 94.38% / 新版 94.38%

アドレスに依存する影響 `call_argument_candidate` 2件, `unresolved_call_alignment` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "007888a0",
      "incomplete_value": true,
      "site": "007888a8",
      "value": [
        "live",
        "register:4098:8"
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
      "definition_site": "007888a4",
      "incomplete_value": true,
      "site": "007888a8",
      "value": [
        "live",
        "register:40a0:8"
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
      "unmatched:00788850",
      "COMPUTED_CALL",
      [
        "unresolved_target",
        null
      ]
    ],
    [
      "unmatched:007888d8",
      "COMPUTED_CALL",
      [
        "unresolved_target",
        null
      ]
    ]
  ],
  "added": [
    [
      "007888b8",
      "COMPUTED_CALL",
      [
        "unresolved_target",
        null
      ]
    ],
    [
      "00788930",
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
- 00788860 ["COPY", "register:0:8", ["register:4040:8"]]
- 00788860 ["INT_ADD", "register:40f0:8", ["const:788860:8", "const:4:8"]]
- 00788860 ["CALLIND", null, ["register:0:8"]]
+ 007888a8 ["COPY", "register:0:8", ["register:4040:8"]]
+ 007888a8 ["INT_ADD", "register:40f0:8", ["const:7888a8:8", "const:4:8"]]
+ 007888a8 ["CALLIND", null, ["register:0:8"]]
- 00788820 ["COPY", "register:0:8", ["register:4040:8"]]
- 00788820 ["INT_ADD", "register:40f0:8", ["const:788820:8", "const:4:8"]]
- 00788820 ["CALLIND", null, ["register:0:8"]]
+ 00788878 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00788878 ["INT_ADD", "register:40f0:8", ["const:788878:8", "const:4:8"]]
+ 00788878 ["CALLIND", null, ["register:0:8"]]
- 00788830 ["COPY", "register:0:8", ["register:4040:8"]]
- 00788830 ["INT_ADD", "register:40f0:8", ["const:788830:8", "const:4:8"]]
- 00788830 ["CALLIND", null, ["register:0:8"]]
+ 00788888 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00788888 ["INT_ADD", "register:40f0:8", ["const:788888:8", "const:4:8"]]
+ 00788888 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-bba81ec10c9111f6a4e457d43f726b19"></a>

### [`0078891c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00788/0078891c.md) → [`00788974`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00788/00788974.md) _INIT_135

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 5件 [`0043ae70`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043a/0043ae70.md) [`0043b7f8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043b7f8.md) [`00c57e30`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e30.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md)
- 新版 呼出元 0件  · 呼出先 5件 [`0043aeb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043a/0043aeb0.md) [`0043b838`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b838.md) [`00c57f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f00.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)

変更の種類 branch_condition_or_target, call_argument_candidate, comparison, comparison_count, constant, control_flow, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_store_alignment

命令の説明率　旧版 81.36% / 新版 81.36%

優先判定に残った影響 `call_argument_candidate` 4件, `unresolved_store_alignment` 10件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00788b94",
      "incomplete_value": false,
      "site": "00788ba8",
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
      "definition_site": "00788b3c",
      "incomplete_value": false,
      "site": "00788b50",
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
      "definition_site": "00788b9c",
      "incomplete_value": false,
      "site": "00788ba8",
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
            "const:f28:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00788b44",
      "incomplete_value": false,
      "site": "00788b50",
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
            "const:e28:8"
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
      "definition_site": "00788ba4",
      "incomplete_value": false,
      "site": "00788ba8",
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
      "definition_site": "00788b4c",
      "incomplete_value": false,
      "site": "00788b50",
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
      "unmatched:0078894c",
      "WRITE",
      [
        "storage",
        "Stack[-0x38]",
        null,
        null
      ]
    ],
    [
      "unmatched:00788958",
      "READ",
      [
        "storage",
        "002b7f26",
        null,
        "string"
      ]
    ],
    [
      "unmatched:00788960",
      "WRITE",
      [
        "storage",
        "Stack[-0xff]",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "007889a4",
      "WRITE",
      [
        "storage",
        "Stack[-0x38]",
        null,
        null
      ]
    ],
    [
      "007889b0",
      "READ",
      [
        "storage",
        "002b7f66",
        null,
        "string"
      ]
    ],
    [
      "007889b8",
      "WRITE",
      [
        "storage",
        "Stack[-0xff]",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 00788b50 ["INT_ADD", "register:40f0:8", ["const:788b50:8", "const:4:8"]]
- 00788b50 ["CALL", null, ["callee:00c57f00:8"]]
+ 00788ba8 ["INT_ADD", "register:40f0:8", ["const:788ba8:8", "const:4:8"]]
+ 00788ba8 ["CALL", null, ["callee:00c57f00:8"]]
- 00788bcc ["INT_ADD", "register:40f0:8", ["const:788bcc:8", "const:4:8"]]
- 00788bcc ["CALL", null, ["callee:00c57f80:8"]]
+ 00788c24 ["INT_ADD", "register:40f0:8", ["const:788c24:8", "const:4:8"]]
+ 00788c24 ["CALL", null, ["callee:00c57f80:8"]]
- 00788948 ["COPY", "tmp:0:8", ["const:e28:8"]]
- 00788948 ["INT_CARRY", "register:105:1", ["register:4098:8", "tmp:0:8"]]
- 00788948 ["INT_SCARRY", "register:106:1", ["register:4098:8", "tmp:0:8"]]
- 00788948 ["INT_ADD", "tmp:1:8", ["register:4098:8", "tmp:0:8"]]
~~~


<a id="compare-010d2836eca57db1afafd581cd692880"></a>

### [`00788cac`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00788/00788cac.md) → [`00788d04`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00788/00788d04.md) FUN_00788d04

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 1件 [`00856e2c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00856/00856e2c.md) · 呼出先 44件 [`00440ec0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00440/00440ec0.md) [`0046c9c4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0046c/0046c9c4.md) [`00470840`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00470/00470840.md) [`005d8bc8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005d8/005d8bc8.md) [`00606488`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00606/00606488.md)
- 新版 呼出元 1件 [`00856e84`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00856/00856e84.md) · 呼出先 44件 [`00440f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00440/00440f00.md) [`0046ca04`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046c/0046ca04.md) [`00470880`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00470/00470880.md) [`005d8c08`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005d8/005d8c08.md) [`006064c8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00606/006064c8.md)

変更の種類 branch_condition_or_target, call, call_argument_candidate, call_count, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, store_condition, store_value, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 74.68% / 新版 74.68%

優先判定に残った影響 `call_argument_candidate` 2件, `store_condition` 3件, `store_value` 1件, `unresolved_branch_alignment` 39件, `unresolved_call_alignment` 19件, `unresolved_store_alignment` 37件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "00789adc",
      "incomplete_value": false,
      "site": "00789adc",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c79000:8"
          ],
          [
            "leaf",
            "const:9b8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00789a84",
      "incomplete_value": false,
      "site": "00789a84",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c79000:8"
          ],
          [
            "leaf",
            "const:8e8:8"
          ]
        ]
      ]
    },
    "ordinal": 114,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00788d8c",
      "incomplete_value": false,
      "site": "00788da0",
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
      "definition_site": "00788d34",
      "incomplete_value": true,
      "site": "00788d48",
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
            "const:e58:8"
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
      "definition_site": "00788d94",
      "incomplete_value": false,
      "site": "00788da0",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c79000:8"
          ],
          [
            "leaf",
            "const:6f0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00788d3c",
      "incomplete_value": false,
      "site": "00788d48",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c79000:8"
          ],
          [
            "leaf",
            "const:620:8"
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
      "unmatched:00788cf0",
      "READ",
      [
        "storage",
        "00ca4978",
        null,
        "undefined8"
      ]
    ],
    [
      "unmatched:00788cf4",
      "READ",
      [
        "storage",
        "00ca4968",
        null,
        "undefined8"
      ]
    ],
    [
      "unmatched:00788cf8",
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
      "00788d48",
      "READ",
      [
        "storage",
        "00ca4a78",
        null,
        "undefined8"
      ]
    ],
    [
      "00788d4c",
      "READ",
      [
        "storage",
        "00ca4a68",
        null,
        "undefined8"
      ]
    ],
    [
      "00788d50",
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
- 00788d48 ["INT_ADD", "register:40f0:8", ["const:788d48:8", "const:4:8"]]
- 00788d48 ["CALL", null, ["callee:00c586e0:8"]]
+ 00788da0 ["INT_ADD", "register:40f0:8", ["const:788da0:8", "const:4:8"]]
+ 00788da0 ["CALL", null, ["callee:00c586e0:8"]]
+ 00788d48 ["INT_ADD", "tmp:0:8", ["register:40a8:8", "const:a78:8"]]
+ 00788d48 ["LOAD", "register:4048:8", ["const:1b1:8", "tmp:0:8"]]
- 00788da0 ["COPY", "tmp:0:8", ["const:0:8"]]
- 00788da0 ["INT_OR", "register:4058:8", ["tmp:0:8", "const:7ffffffffffffffc:8"]]
~~~


<a id="compare-3ff171ffef1e7239082deec50eb0ccb0"></a>

### [`00789c50`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00789/00789c50.md) → [`00789ca8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00789/00789ca8.md) FUN_00789ca8

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00856e2c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00856/00856e2c.md) · 呼出先 13件 [`0047acf4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047a/0047acf4.md) [`0047cdd4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047c/0047cdd4.md) [`0049f3f0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0049f/0049f3f0.md) [`0067672c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00676/0067672c.md) [`008b6f10`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008b6/008b6f10.md)
- 新版 呼出元 1件 [`00856e84`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00856/00856e84.md) · 呼出先 13件 [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md) [`0047ce14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047ce14.md) [`0049f430`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0049f/0049f430.md) [`0067676c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00676/0067676c.md) [`008b6f68`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b6/008b6f68.md)

変更の種類 call, call_target, constant, operands_and_dependencies

命令の説明率　旧版 99.00% / 新版 99.00%

優先判定に残った影響 `call_target` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_target",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "00789df8",
      "value": [
        "leaf",
        "ram:47ad34:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "00789da0",
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
      "00789df8",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047acf4"
      ]
    ]
  ],
  "added": [
    [
      "00789df8",
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
- 00789da0 ["INT_ADD", "register:40f0:8", ["const:789da0:8", "const:4:8"]]
- 00789da0 ["CALL", null, ["ram:47acf4:8"]]
+ 00789df8 ["INT_ADD", "register:40f0:8", ["const:789df8:8", "const:4:8"]]
+ 00789df8 ["CALL", null, ["ram:47ad34:8"]]
- 00789c90 ["INT_ADD", "register:40f0:8", ["const:789c90:8", "const:4:8"]]
- 00789c90 ["CALL", null, ["callee:00ac8e4c:8"]]
+ 00789ce8 ["INT_ADD", "register:40f0:8", ["const:789ce8:8", "const:4:8"]]
+ 00789ce8 ["CALL", null, ["callee:00ac8e4c:8"]]
- 00789cb0 ["INT_ADD", "register:40f0:8", ["const:789cb0:8", "const:4:8"]]
- 00789cb0 ["CALL", null, ["callee:008b7930:8"]]
+ 00789d08 ["INT_ADD", "register:40f0:8", ["const:789d08:8", "const:4:8"]]
+ 00789d08 ["CALL", null, ["callee:008b7930:8"]]
~~~


<a id="compare-65715429df5fa6f4bc73398e1acead78"></a>

### [`00789de0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00789/00789de0.md) → [`00789e38`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00789/00789e38.md) FUN_00789e38

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`00859b58`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00859/00859b58.md) · 呼出先 64件 [`0043bba4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043bba4.md) [`00467860`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00467/00467860.md) [`00467afc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00467/00467afc.md) [`00467b2c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00467/00467b2c.md) [`00467b60`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00467/00467b60.md)
- 新版 呼出元 1件 [`00859bb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00859/00859bb0.md) · 呼出先 64件 [`0043bbe4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bbe4.md) [`004678a0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00467/004678a0.md) [`00467b3c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00467/00467b3c.md) [`00467b6c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00467/00467b6c.md) [`00467ba0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00467/00467ba0.md)

変更の種類 branch_value, call_argument_candidate, constant, operands_and_dependencies, operation_sequence, store_value

命令の説明率　旧版 99.20% / 新版 99.20%

優先判定に残った影響 `call_argument_candidate` 2件, `store_value` 2件

アドレスに依存する影響 `branch_value` 1件, `store_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "0078a648",
      "incomplete_value": true,
      "site": "0078a654",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:368:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0078a5f0",
      "incomplete_value": true,
      "site": "0078a5fc",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:328:8"
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
      "definition_site": "0078a650",
      "incomplete_value": true,
      "site": "0078a65c",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:d28:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0078a5f8",
      "incomplete_value": true,
      "site": "0078a604",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:ce8:8"
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
    "kind": "store_value",
    "new": {
      "definition_site": "0078a658",
      "incomplete_value": true,
      "site": "0078a65c",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:400:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0078a600",
      "incomplete_value": true,
      "site": "0078a604",
      "value": [
        "LOAD",
        "8",
        [
          [
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
      "00789e7c",
      "READ",
      [
        "storage",
        "00ca4978",
        null,
        "undefined8"
      ]
    ],
    [
      "00789e90",
      "PARAM",
      [
        "storage",
        "00c65e58",
        null,
        "pointer __((offset(0x10)))"
      ]
    ],
    [
      "00789e98",
      "PARAM",
      [
        "storage",
        "00c79620",
        null,
        "pointer __((offset(0x10)))"
      ]
    ]
  ],
  "added": [
    [
      "00789e7c",
      "READ",
      [
        "storage",
        "00ca4a78",
        null,
        "undefined8"
      ]
    ],
    [
      "00789e90",
      "PARAM",
      [
        "storage",
        "00c65f28",
        null,
        "pointer __((offset(0x10)))"
      ]
    ],
    [
      "00789e98",
      "PARAM",
      [
        "storage",
        "00c796f0",
        null,
        "pointer __((offset(0x10)))"
      ]
    ]
  ]
}
~~~


~~~diff
- 00789e4c ["INT_ADD", "register:40f0:8", ["const:789e4c:8", "const:4:8"]]
- 00789e4c ["CALL", null, ["callee:00c586e0:8"]]
+ 00789ea4 ["INT_ADD", "register:40f0:8", ["const:789ea4:8", "const:4:8"]]
+ 00789ea4 ["CALL", null, ["callee:00c586e0:8"]]
- 00789e24 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:978:8"]]
- 00789e24 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
+ 00789e7c ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:a78:8"]]
+ 00789e7c ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
- 00789e38 ["COPY", "tmp:0:8", ["const:e58:8"]]
- 00789e38 ["INT_CARRY", "register:105:1", ["register:4008:8", "tmp:0:8"]]
- 00789e38 ["INT_SCARRY", "register:106:1", ["register:4008:8", "tmp:0:8"]]
- 00789e38 ["INT_ADD", "tmp:1:8", ["register:4008:8", "tmp:0:8"]]
+ 00789e90 ["COPY", "tmp:0:8", ["const:f28:8"]]
+ 00789e90 ["INT_CARRY", "register:105:1", ["register:4008:8", "tmp:0:8"]]
+ 00789e90 ["INT_SCARRY", "register:106:1", ["register:4008:8", "tmp:0:8"]]
+ 00789e90 ["INT_ADD", "tmp:1:8", ["register:4008:8", "tmp:0:8"]]
~~~


<a id="compare-78d806d120e36b7c356f67af29decc0b"></a>

### [`0078bd58`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0078b/0078bd58.md) → [`0078bdb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0078b/0078bdb0.md) FUN_0078bdb0

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`0078df38`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0078d/0078df38.md) · 呼出先 12件 [`0048ccf8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0048c/0048ccf8.md) [`0048ce54`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0048c/0048ce54.md) [`00493690`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00493/00493690.md) [`0049f3f0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0049f/0049f3f0.md) [`0078e914`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0078e/0078e914.md)
- 新版 呼出元 1件 [`0078df90`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0078d/0078df90.md) · 呼出先 12件 [`0048cd38`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048c/0048cd38.md) [`0048ce94`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048c/0048ce94.md) [`004936d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00493/004936d0.md) [`0049f430`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0049f/0049f430.md) [`0078e96c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0078e/0078e96c.md)

変更の種類 call, call_target, constant, operands_and_dependencies, store_value

命令の説明率　旧版 94.17% / 新版 94.17%

優先判定に残った影響 `call_target` 1件, `store_value` 2件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "0078be6c",
      "incomplete_value": false,
      "site": "0078be6c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c79000:8"
          ],
          [
            "leaf",
            "const:ab8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0078be14",
      "incomplete_value": false,
      "site": "0078be14",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c79000:8"
          ],
          [
            "leaf",
            "const:9e8:8"
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
      "definition_site": "0078beb8",
      "incomplete_value": false,
      "site": "0078beb8",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c79000:8"
          ],
          [
            "leaf",
            "const:bb8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0078be60",
      "incomplete_value": false,
      "site": "0078be60",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c79000:8"
          ],
          [
            "leaf",
            "const:ae8:8"
          ]
        ]
      ]
    },
    "ordinal": 17,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "call_target",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "0078bdfc",
      "value": [
        "leaf",
        "ram:48cd38:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "0078bda4",
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
      "0078bdd8",
      "DATA",
      [
        "storage",
        "0039b1d8",
        null,
        "dword"
      ]
    ],
    [
      "0078bde8",
      "DATA",
      [
        "storage",
        "0039b1d8",
        null,
        "dword"
      ]
    ],
    [
      "0078bdfc",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0048ccf8"
      ]
    ]
  ],
  "added": [
    [
      "0078bdd8",
      "DATA",
      [
        "storage",
        "0039b1d8",
        "fde_0039b1d8",
        "dword"
      ]
    ],
    [
      "0078bde8",
      "DATA",
      [
        "storage",
        "0039b1d8",
        "fde_0039b1d8",
        "dword"
      ]
    ],
    [
      "0078bdfc",
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
- 0078bda4 ["INT_ADD", "register:40f0:8", ["const:78bda4:8", "const:4:8"]]
- 0078bda4 ["CALL", null, ["ram:48ccf8:8"]]
+ 0078bdfc ["INT_ADD", "register:40f0:8", ["const:78bdfc:8", "const:4:8"]]
+ 0078bdfc ["CALL", null, ["ram:48cd38:8"]]
- 0078bdb0 ["COPY", "tmp:0:8", ["const:2fa:8"]]
- 0078bdb0 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 0078bdb0 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 0078bdb0 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 0078be08 ["COPY", "tmp:0:8", ["const:33a:8"]]
+ 0078be08 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 0078be08 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 0078be08 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
- 0078bdd8 ["INT_ADD", "register:40f0:8", ["const:78bdd8:8", "const:4:8"]]
- 0078bdd8 ["CALL", null, ["callee:0048ce94:8"]]
+ 0078be30 ["INT_ADD", "register:40f0:8", ["const:78be30:8", "const:4:8"]]
+ 0078be30 ["CALL", null, ["callee:0048ce94:8"]]
~~~


<a id="compare-07015f1631138016d0cb3439177aac28"></a>

### [`0078bfc4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0078b/0078bfc4.md) → [`0078c01c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0078c/0078c01c.md) FUN_0078c01c

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`0078df38`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0078d/0078df38.md) · 呼出先 11件 [`0048ccf8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0048c/0048ccf8.md) [`0048ce54`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0048c/0048ce54.md) [`00493690`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00493/00493690.md) [`0049f3f0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0049f/0049f3f0.md) [`00745a24`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00745/00745a24.md)
- 新版 呼出元 1件 [`0078df90`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0078d/0078df90.md) · 呼出先 11件 [`0048cd38`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048c/0048cd38.md) [`0048ce94`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048c/0048ce94.md) [`004936d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00493/004936d0.md) [`0049f430`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0049f/0049f430.md) [`00745a7c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00745/00745a7c.md)

変更の種類 call, call_target, constant, operands_and_dependencies, store_value

命令の説明率　旧版 93.22% / 新版 93.22%

優先判定に残った影響 `call_target` 1件, `store_value` 3件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "0078c090",
      "incomplete_value": true,
      "site": "0078c090",
      "value": [
        "LOAD",
        "8",
        [
          [
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
      "definition_site": "0078c038",
      "incomplete_value": true,
      "site": "0078c038",
      "value": [
        "LOAD",
        "8",
        [
          [
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
    "ordinal": 11,
    "slot": 2
  },
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "0078c0d8",
      "incomplete_value": false,
      "site": "0078c0d8",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c79000:8"
          ],
          [
            "leaf",
            "const:b38:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0078c080",
      "incomplete_value": false,
      "site": "0078c080",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c79000:8"
          ],
          [
            "leaf",
            "const:a68:8"
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
      "definition_site": "0078c110",
      "incomplete_value": false,
      "site": "0078c110",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c79000:8"
          ],
          [
            "leaf",
            "const:bb8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0078c0b8",
      "incomplete_value": false,
      "site": "0078c0b8",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c79000:8"
          ],
          [
            "leaf",
            "const:ae8:8"
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
      "0078c044",
      "DATA",
      [
        "storage",
        "0039b1d8",
        null,
        "dword"
      ]
    ],
    [
      "0078c060",
      "DATA",
      [
        "storage",
        "0039b1d8",
        null,
        "dword"
      ]
    ],
    [
      "0078c068",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0048ccf8"
      ]
    ]
  ],
  "added": [
    [
      "0078c044",
      "DATA",
      [
        "storage",
        "0039b1d8",
        "fde_0039b1d8",
        "dword"
      ]
    ],
    [
      "0078c060",
      "DATA",
      [
        "storage",
        "0039b1d8",
        "fde_0039b1d8",
        "dword"
      ]
    ],
    [
      "0078c068",
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
- 0078c010 ["INT_ADD", "register:40f0:8", ["const:78c010:8", "const:4:8"]]
- 0078c010 ["CALL", null, ["ram:48ccf8:8"]]
+ 0078c068 ["INT_ADD", "register:40f0:8", ["const:78c068:8", "const:4:8"]]
+ 0078c068 ["CALL", null, ["ram:48cd38:8"]]
- 0078c060 ["INT_ADD", "register:40f0:8", ["const:78c060:8", "const:4:8"]]
- 0078c060 ["CALL", null, ["callee:00c57f80:8"]]
+ 0078c0b8 ["INT_ADD", "register:40f0:8", ["const:78c0b8:8", "const:4:8"]]
+ 0078c0b8 ["CALL", null, ["callee:00c57f80:8"]]
- 0078c01c ["COPY", "tmp:0:8", ["const:2fa:8"]]
- 0078c01c ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 0078c01c ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 0078c01c ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 0078c074 ["COPY", "tmp:0:8", ["const:33a:8"]]
+ 0078c074 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 0078c074 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 0078c074 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
~~~


<a id="compare-03c26486f14f897ae95f9403bd1e2312"></a>

### [`0078c21c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0078c/0078c21c.md) → [`0078c274`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0078c/0078c274.md) FUN_0078c274

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00788cac`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00788/00788cac.md) · 呼出先 25件 [`0046e7c4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0046e/0046e7c4.md) [`0046e970`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0046e/0046e970.md) [`0046eef8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0046e/0046eef8.md) [`0046f0b4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0046f/0046f0b4.md) [`0046f66c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0046f/0046f66c.md)
- 新版 呼出元 1件 [`00788d04`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00788/00788d04.md) · 呼出先 25件 [`0046e804`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046e/0046e804.md) [`0046e9b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046e/0046e9b0.md) [`0046ef38`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046e/0046ef38.md) [`0046f0f4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046f/0046f0f4.md) [`0046f6ac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046f/0046f6ac.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies, operation_sequence, store_destination, store_value

命令の説明率　旧版 83.27% / 新版 83.27%

優先判定に残った影響 `call_argument_candidate` 41件, `store_destination` 14件, `store_value` 49件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "0078c2b4",
      "incomplete_value": false,
      "site": "0078c2b8",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c79000:8"
          ],
          [
            "leaf",
            "const:718:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0078c25c",
      "incomplete_value": false,
      "site": "0078c260",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c79000:8"
          ],
          [
            "leaf",
            "const:648:8"
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
      "definition_site": "0078c324",
      "incomplete_value": true,
      "site": "0078c324",
      "value": [
        "LOAD",
        "8",
        [
          [
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
      "definition_site": "0078c2cc",
      "incomplete_value": true,
      "site": "0078c2cc",
      "value": [
        "LOAD",
        "8",
        [
          [
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
    "ordinal": 30,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "0078c33c",
      "incomplete_value": true,
      "site": "0078c33c",
      "value": [
        "LOAD",
        "8",
        [
          [
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
      "definition_site": "0078c2e4",
      "incomplete_value": true,
      "site": "0078c2e4",
      "value": [
        "LOAD",
        "8",
        [
          [
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
      "0078c2b8",
      "DATA",
      [
        "storage",
        "00c79648",
        null,
        "pointer"
      ]
    ],
    [
      "0078c2f4",
      "READ",
      [
        "storage",
        "00ca4f38",
        null,
        "undefined1"
      ]
    ],
    [
      "0078c314",
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
      "0078c2b8",
      "DATA",
      [
        "storage",
        "00c79718",
        null,
        "pointer"
      ]
    ],
    [
      "0078c2f4",
      "READ",
      [
        "storage",
        "00ca5038",
        null,
        "undefined1"
      ]
    ],
    [
      "0078c314",
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
- 0078c290 ["INT_ADD", "register:40f0:8", ["const:78c290:8", "const:4:8"]]
- 0078c290 ["CALL", null, ["callee:0046e804:8"]]
+ 0078c2e8 ["INT_ADD", "register:40f0:8", ["const:78c2e8:8", "const:4:8"]]
+ 0078c2e8 ["CALL", null, ["callee:0046e804:8"]]
- 0078c2b8 ["COPY", "tmp:0:8", ["const:38e:8"]]
- 0078c2b8 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 0078c2b8 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 0078c2b8 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 0078c310 ["COPY", "tmp:0:8", ["const:3ce:8"]]
+ 0078c310 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 0078c310 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 0078c310 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 0078c33c ["COPY", "register:0:8", ["register:4040:8"]]
- 0078c33c ["INT_ADD", "register:40f0:8", ["const:78c33c:8", "const:4:8"]]
- 0078c33c ["CALLIND", null, ["register:0:8"]]
+ 0078c394 ["COPY", "register:0:8", ["register:4040:8"]]
+ 0078c394 ["INT_ADD", "register:40f0:8", ["const:78c394:8", "const:4:8"]]
+ 0078c394 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-0f68dc9663f1811b4af996fce8386d50"></a>

### [`0078ddcc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0078d/0078ddcc.md) → [`0078de24`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0078d/0078de24.md) FUN_0078de24

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 7件 [`0046e8a4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0046e/0046e8a4.md) [`0046efdc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0046e/0046efdc.md) [`00682324`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00682/00682324.md) [`0078db5c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0078d/0078db5c.md) [`0078dcac`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0078d/0078dcac.md)
- 新版 呼出元 0件  · 呼出先 7件 [`0046e8e4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046e/0046e8e4.md) [`0046f01c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046f/0046f01c.md) [`00682364`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00682/00682364.md) [`0078dbb4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0078d/0078dbb4.md) [`0078dd04`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0078d/0078dd04.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 88.24% / 新版 88.24%

優先判定に残った影響 `store_value` 2件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "0078de34",
      "incomplete_value": false,
      "site": "0078de3c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c79000:8"
          ],
          [
            "leaf",
            "const:718:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0078dddc",
      "incomplete_value": false,
      "site": "0078dde4",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c79000:8"
          ],
          [
            "leaf",
            "const:648:8"
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
      "definition_site": "0078de68",
      "incomplete_value": false,
      "site": "0078de6c",
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
      "definition_site": "0078de10",
      "incomplete_value": false,
      "site": "0078de14",
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
      "0078de3c",
      "DATA",
      [
        "storage",
        "00c79648",
        null,
        "pointer"
      ]
    ],
    [
      "0078de6c",
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
      "0078de3c",
      "DATA",
      [
        "storage",
        "00c79718",
        null,
        "pointer"
      ]
    ],
    [
      "0078de6c",
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
- 0078dddc ["COPY", "tmp:0:8", ["const:648:8"]]
- 0078dddc ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 0078dddc ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 0078dddc ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 0078de34 ["COPY", "tmp:0:8", ["const:718:8"]]
+ 0078de34 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 0078de34 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 0078de34 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 0078ddec ["INT_ADD", "register:40f0:8", ["const:78ddec:8", "const:4:8"]]
- 0078ddec ["CALL", null, ["callee:0046e8e4:8"]]
+ 0078de44 ["INT_ADD", "register:40f0:8", ["const:78de44:8", "const:4:8"]]
+ 0078de44 ["CALL", null, ["callee:0046e8e4:8"]]
- 0078ddf4 ["INT_ADD", "register:40f0:8", ["const:78ddf4:8", "const:4:8"]]
- 0078ddf4 ["CALL", null, ["callee:0046f01c:8"]]
+ 0078de4c ["INT_ADD", "register:40f0:8", ["const:78de4c:8", "const:4:8"]]
+ 0078de4c ["CALL", null, ["callee:0046f01c:8"]]
~~~


<a id="compare-ea0e1803cf502df720c61c77dea5cd1a"></a>

### [`0078de54`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0078d/0078de54.md) → [`0078deac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0078d/0078deac.md) FUN_0078deac

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 8件 [`0046e8a4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0046e/0046e8a4.md) [`0046efdc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0046e/0046efdc.md) [`00682324`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00682/00682324.md) [`0078db5c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0078d/0078db5c.md) [`0078dcac`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0078d/0078dcac.md)
- 新版 呼出元 0件  · 呼出先 8件 [`0046e8e4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046e/0046e8e4.md) [`0046f01c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046f/0046f01c.md) [`00682364`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00682/00682364.md) [`0078dbb4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0078d/0078dbb4.md) [`0078dd04`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0078d/0078dd04.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 88.89% / 新版 88.89%

優先判定に残った影響 `store_value` 2件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "0078debc",
      "incomplete_value": false,
      "site": "0078dec4",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c79000:8"
          ],
          [
            "leaf",
            "const:718:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0078de64",
      "incomplete_value": false,
      "site": "0078de6c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c79000:8"
          ],
          [
            "leaf",
            "const:648:8"
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
      "definition_site": "0078def0",
      "incomplete_value": false,
      "site": "0078def4",
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
      "definition_site": "0078de98",
      "incomplete_value": false,
      "site": "0078de9c",
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
      "0078dec4",
      "DATA",
      [
        "storage",
        "00c79648",
        null,
        "pointer"
      ]
    ],
    [
      "0078def4",
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
      "0078dec4",
      "DATA",
      [
        "storage",
        "00c79718",
        null,
        "pointer"
      ]
    ],
    [
      "0078def4",
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
- 0078de64 ["COPY", "tmp:0:8", ["const:648:8"]]
- 0078de64 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 0078de64 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 0078de64 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 0078debc ["COPY", "tmp:0:8", ["const:718:8"]]
+ 0078debc ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 0078debc ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 0078debc ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 0078de74 ["INT_ADD", "register:40f0:8", ["const:78de74:8", "const:4:8"]]
- 0078de74 ["CALL", null, ["callee:0046e8e4:8"]]
+ 0078decc ["INT_ADD", "register:40f0:8", ["const:78decc:8", "const:4:8"]]
+ 0078decc ["CALL", null, ["callee:0046e8e4:8"]]
- 0078de7c ["INT_ADD", "register:40f0:8", ["const:78de7c:8", "const:4:8"]]
- 0078de7c ["CALL", null, ["callee:0046f01c:8"]]
+ 0078ded4 ["INT_ADD", "register:40f0:8", ["const:78ded4:8", "const:4:8"]]
+ 0078ded4 ["CALL", null, ["callee:0046f01c:8"]]
~~~


<a id="compare-27506ceceb31579038ecc5e356f83ee9"></a>

### [`0078dee8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0078d/0078dee8.md) → [`0078df40`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0078d/0078df40.md) FUN_0078df40

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
      "definition_site": "0078df64",
      "incomplete_value": false,
      "site": "0078df64",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c79000:8"
          ],
          [
            "leaf",
            "const:738:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0078df0c",
      "incomplete_value": false,
      "site": "0078df0c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c79000:8"
          ],
          [
            "leaf",
            "const:668:8"
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
      "0078df64",
      "DATA",
      [
        "storage",
        "00c79668",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "0078df64",
      "DATA",
      [
        "storage",
        "00c79738",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 0078defc ["INT_ADD", "register:40f0:8", ["const:78defc:8", "const:4:8"]]
- 0078defc ["CALL", null, ["callee:00c57f60:8"]]
+ 0078df54 ["INT_ADD", "register:40f0:8", ["const:78df54:8", "const:4:8"]]
+ 0078df54 ["CALL", null, ["callee:00c57f60:8"]]
- 0078df08 ["COPY", "tmp:0:8", ["const:668:8"]]
- 0078df08 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 0078df08 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 0078df08 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 0078df60 ["COPY", "tmp:0:8", ["const:738:8"]]
+ 0078df60 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 0078df60 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 0078df60 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-36303f433951771840b832e2f3215f5c"></a>

### [`0078df1c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0078d/0078df1c.md) → [`0078df74`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0078d/0078df74.md) FUN_0078df74

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
      "definition_site": "0078df80",
      "incomplete_value": false,
      "site": "0078df80",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c79000:8"
          ],
          [
            "leaf",
            "const:738:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0078df28",
      "incomplete_value": false,
      "site": "0078df28",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c79000:8"
          ],
          [
            "leaf",
            "const:668:8"
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
      "0078df80",
      "DATA",
      [
        "storage",
        "00c79668",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "0078df80",
      "DATA",
      [
        "storage",
        "00c79738",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 0078df24 ["COPY", "tmp:0:8", ["const:668:8"]]
- 0078df24 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 0078df24 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 0078df24 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 0078df7c ["COPY", "tmp:0:8", ["const:738:8"]]
+ 0078df7c ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 0078df7c ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 0078df7c ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
~~~


<a id="compare-5548be2e4fc91a2b812b81da2cc195f3"></a>

### [`0078df38`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0078d/0078df38.md) → [`0078df90`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0078d/0078df90.md) FUN_0078df90

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 15件 [`0047acf4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047a/0047acf4.md) [`0047cdd4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047c/0047cdd4.md) [`0049f3f0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0049f/0049f3f0.md) [`00606488`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00606/00606488.md) [`00744208`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00744/00744208.md)
- 新版 呼出元 0件  · 呼出先 15件 [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md) [`0047ce14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047ce14.md) [`0049f430`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0049f/0049f430.md) [`006064c8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00606/006064c8.md) [`00744260`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00744/00744260.md)

変更の種類 call, call_target, constant, operands_and_dependencies, store_value

命令の説明率　旧版 98.12% / 新版 98.12%

優先判定に残った影響 `call_target` 1件, `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "0078e0a4",
      "incomplete_value": false,
      "site": "0078e0a4",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c79000:8"
          ],
          [
            "leaf",
            "const:bb8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0078e04c",
      "incomplete_value": false,
      "site": "0078e04c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c79000:8"
          ],
          [
            "leaf",
            "const:ae8:8"
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
      "site": "0078dfc8",
      "value": [
        "leaf",
        "ram:47ad34:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "0078df70",
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
      "0078dfc8",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047acf4"
      ]
    ],
    [
      "0078e0a4",
      "DATA",
      [
        "storage",
        "00c79ae8",
        null,
        "undefined *"
      ]
    ],
    [
      "0078e180",
      "READ",
      [
        "storage",
        "00c79b08",
        null,
        "pointer"
      ]
    ]
  ],
  "added": [
    [
      "0078dfc8",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ],
    [
      "0078e0a4",
      "DATA",
      [
        "storage",
        "00c79bb8",
        null,
        "undefined *"
      ]
    ],
    [
      "0078e180",
      "READ",
      [
        "storage",
        "00c79bd8",
        null,
        "pointer"
      ]
    ]
  ]
}
~~~


~~~diff
- 0078df70 ["INT_ADD", "register:40f0:8", ["const:78df70:8", "const:4:8"]]
- 0078df70 ["CALL", null, ["ram:47acf4:8"]]
+ 0078dfc8 ["INT_ADD", "register:40f0:8", ["const:78dfc8:8", "const:4:8"]]
+ 0078dfc8 ["CALL", null, ["ram:47ad34:8"]]
- 0078dfb8 ["INT_ADD", "register:40f0:8", ["const:78dfb8:8", "const:4:8"]]
- 0078dfb8 ["CALL", null, ["callee:00ac8e4c:8"]]
+ 0078e010 ["INT_ADD", "register:40f0:8", ["const:78e010:8", "const:4:8"]]
+ 0078e010 ["CALL", null, ["callee:00ac8e4c:8"]]
- 0078e000 ["INT_ADD", "register:40f0:8", ["const:78e000:8", "const:4:8"]]
- 0078e000 ["CALL", null, ["callee:006064c8:8"]]
+ 0078e058 ["INT_ADD", "register:40f0:8", ["const:78e058:8", "const:4:8"]]
+ 0078e058 ["CALL", null, ["callee:006064c8:8"]]
~~~


<a id="compare-acba3a709410788f264fe57e17823290"></a>

### [`0078e230`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0078e/0078e230.md) → [`0078e288`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0078e/0078e288.md) FUN_0078e288

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
      "definition_site": "0078e2ac",
      "incomplete_value": false,
      "site": "0078e2ac",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c79000:8"
          ],
          [
            "leaf",
            "const:7b8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0078e254",
      "incomplete_value": false,
      "site": "0078e254",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c79000:8"
          ],
          [
            "leaf",
            "const:6e8:8"
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
      "0078e2ac",
      "DATA",
      [
        "storage",
        "00c796e8",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "0078e2ac",
      "DATA",
      [
        "storage",
        "00c797b8",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 0078e244 ["INT_ADD", "register:40f0:8", ["const:78e244:8", "const:4:8"]]
- 0078e244 ["CALL", null, ["callee:00c57f60:8"]]
+ 0078e29c ["INT_ADD", "register:40f0:8", ["const:78e29c:8", "const:4:8"]]
+ 0078e29c ["CALL", null, ["callee:00c57f60:8"]]
- 0078e250 ["COPY", "tmp:0:8", ["const:6e8:8"]]
- 0078e250 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 0078e250 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 0078e250 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 0078e2a8 ["COPY", "tmp:0:8", ["const:7b8:8"]]
+ 0078e2a8 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 0078e2a8 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 0078e2a8 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-8f5fa55727262876e211441bb1d7b63a"></a>

### [`0078e264`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0078e/0078e264.md) → [`0078e2bc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0078e/0078e2bc.md) FUN_0078e2bc

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
      "definition_site": "0078e2c8",
      "incomplete_value": false,
      "site": "0078e2c8",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c79000:8"
          ],
          [
            "leaf",
            "const:7b8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0078e270",
      "incomplete_value": false,
      "site": "0078e270",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c79000:8"
          ],
          [
            "leaf",
            "const:6e8:8"
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
      "0078e2c8",
      "DATA",
      [
        "storage",
        "00c796e8",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "0078e2c8",
      "DATA",
      [
        "storage",
        "00c797b8",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 0078e26c ["COPY", "tmp:0:8", ["const:6e8:8"]]
- 0078e26c ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 0078e26c ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 0078e26c ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 0078e2c4 ["COPY", "tmp:0:8", ["const:7b8:8"]]
+ 0078e2c4 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 0078e2c4 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 0078e2c4 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
~~~


<a id="compare-0ca357e2bda2bf26c10755563113a295"></a>

### [`0078e280`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0078e/0078e280.md) → [`0078e2d8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0078e/0078e2d8.md) FUN_0078e2d8

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 10件 [`0047acf4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047a/0047acf4.md) [`0047cdd4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047c/0047cdd4.md) [`00744208`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00744/00744208.md) [`0074423c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00744/0074423c.md) [`008001cc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00800/008001cc.md)
- 新版 呼出元 0件  · 呼出先 10件 [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md) [`0047ce14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047ce14.md) [`00744260`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00744/00744260.md) [`00744294`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00744/00744294.md) [`00800224`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00800/00800224.md)

変更の種類 call, call_target, constant, operands_and_dependencies

命令の説明率　旧版 98.10% / 新版 98.10%

優先判定に残った影響 `call_target` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_target",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "0078e308",
      "value": [
        "leaf",
        "ram:47ad34:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "0078e2b0",
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
      "site": "0078e314",
      "value": [
        "leaf",
        "ram:47ad34:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "0078e2bc",
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
      "0078e308",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047acf4"
      ]
    ],
    [
      "0078e314",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047acf4"
      ]
    ],
    [
      "0078e404",
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
      "0078e308",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ],
    [
      "0078e314",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ],
    [
      "0078e404",
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
- 0078e2b0 ["INT_ADD", "register:40f0:8", ["const:78e2b0:8", "const:4:8"]]
- 0078e2b0 ["CALL", null, ["ram:47acf4:8"]]
+ 0078e308 ["INT_ADD", "register:40f0:8", ["const:78e308:8", "const:4:8"]]
+ 0078e308 ["CALL", null, ["ram:47ad34:8"]]
- 0078e2bc ["INT_ADD", "register:40f0:8", ["const:78e2bc:8", "const:4:8"]]
- 0078e2bc ["CALL", null, ["ram:47acf4:8"]]
+ 0078e314 ["INT_ADD", "register:40f0:8", ["const:78e314:8", "const:4:8"]]
+ 0078e314 ["CALL", null, ["ram:47ad34:8"]]
- 0078e330 ["INT_ADD", "register:40f0:8", ["const:78e330:8", "const:4:8"]]
- 0078e330 ["CALL", null, ["callee:00744260:8"]]
+ 0078e388 ["INT_ADD", "register:40f0:8", ["const:78e388:8", "const:4:8"]]
+ 0078e388 ["CALL", null, ["callee:00744260:8"]]
~~~


<a id="compare-1760878db52e4e7853868f2fd784ad81"></a>

### [`0078e450`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0078e/0078e450.md) → [`0078e4a8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0078e/0078e4a8.md) FUN_0078e4a8

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
      "definition_site": "0078e4cc",
      "incomplete_value": false,
      "site": "0078e4cc",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c79000:8"
          ],
          [
            "leaf",
            "const:838:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0078e474",
      "incomplete_value": false,
      "site": "0078e474",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c79000:8"
          ],
          [
            "leaf",
            "const:768:8"
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
      "0078e4cc",
      "DATA",
      [
        "storage",
        "00c79768",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "0078e4cc",
      "DATA",
      [
        "storage",
        "00c79838",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 0078e464 ["INT_ADD", "register:40f0:8", ["const:78e464:8", "const:4:8"]]
- 0078e464 ["CALL", null, ["callee:00c57f60:8"]]
+ 0078e4bc ["INT_ADD", "register:40f0:8", ["const:78e4bc:8", "const:4:8"]]
+ 0078e4bc ["CALL", null, ["callee:00c57f60:8"]]
- 0078e470 ["COPY", "tmp:0:8", ["const:768:8"]]
- 0078e470 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 0078e470 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 0078e470 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 0078e4c8 ["COPY", "tmp:0:8", ["const:838:8"]]
+ 0078e4c8 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 0078e4c8 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 0078e4c8 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-57a4c4ae5b6895128c79bc599b20eb26"></a>

### [`0078e484`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0078e/0078e484.md) → [`0078e4dc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0078e/0078e4dc.md) FUN_0078e4dc

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
      "definition_site": "0078e4e8",
      "incomplete_value": false,
      "site": "0078e4e8",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c79000:8"
          ],
          [
            "leaf",
            "const:838:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0078e490",
      "incomplete_value": false,
      "site": "0078e490",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c79000:8"
          ],
          [
            "leaf",
            "const:768:8"
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
      "0078e4e8",
      "DATA",
      [
        "storage",
        "00c79768",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "0078e4e8",
      "DATA",
      [
        "storage",
        "00c79838",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 0078e48c ["COPY", "tmp:0:8", ["const:768:8"]]
- 0078e48c ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 0078e48c ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 0078e48c ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 0078e4e4 ["COPY", "tmp:0:8", ["const:838:8"]]
+ 0078e4e4 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 0078e4e4 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 0078e4e4 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
~~~


<a id="compare-cb62ec0f23556c7c56d758edf50415c6"></a>

### [`0078e510`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0078e/0078e510.md) → [`0078e568`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0078e/0078e568.md) FUN_0078e568

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
      "definition_site": "0078e588",
      "incomplete_value": false,
      "site": "0078e58c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c79000:8"
          ],
          [
            "leaf",
            "const:8b8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0078e530",
      "incomplete_value": false,
      "site": "0078e534",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c79000:8"
          ],
          [
            "leaf",
            "const:7e8:8"
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
      "0078e58c",
      "DATA",
      [
        "storage",
        "00c797e8",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "0078e58c",
      "DATA",
      [
        "storage",
        "00c798b8",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 0078e524 ["INT_ADD", "register:40f0:8", ["const:78e524:8", "const:4:8"]]
- 0078e524 ["CALL", null, ["callee:00c57f60:8"]]
+ 0078e57c ["INT_ADD", "register:40f0:8", ["const:78e57c:8", "const:4:8"]]
+ 0078e57c ["CALL", null, ["callee:00c57f60:8"]]
- 0078e530 ["COPY", "tmp:0:8", ["const:7e8:8"]]
- 0078e530 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 0078e530 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 0078e530 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 0078e588 ["COPY", "tmp:0:8", ["const:8b8:8"]]
+ 0078e588 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 0078e588 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 0078e588 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-4806aed6a925e9c9b20f22972009d199"></a>

### [`0078e548`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0078e/0078e548.md) → [`0078e5a0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0078e/0078e5a0.md) FUN_0078e5a0

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
      "definition_site": "0078e5a4",
      "incomplete_value": false,
      "site": "0078e5a8",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c79000:8"
          ],
          [
            "leaf",
            "const:8b8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0078e54c",
      "incomplete_value": false,
      "site": "0078e550",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c79000:8"
          ],
          [
            "leaf",
            "const:7e8:8"
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
      "0078e5a8",
      "DATA",
      [
        "storage",
        "00c797e8",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "0078e5a8",
      "DATA",
      [
        "storage",
        "00c798b8",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 0078e54c ["COPY", "tmp:0:8", ["const:7e8:8"]]
- 0078e54c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 0078e54c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 0078e54c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 0078e5a4 ["COPY", "tmp:0:8", ["const:8b8:8"]]
+ 0078e5a4 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 0078e5a4 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 0078e5a4 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-fbff2c484299f9b6757d6b85eb2d8de8"></a>

### [`0078e598`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0078e/0078e598.md) → [`0078e5f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0078e/0078e5f0.md) FUN_0078e5f0

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
      "definition_site": "0078e614",
      "incomplete_value": false,
      "site": "0078e614",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c79000:8"
          ],
          [
            "leaf",
            "const:938:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0078e5bc",
      "incomplete_value": false,
      "site": "0078e5bc",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c79000:8"
          ],
          [
            "leaf",
            "const:868:8"
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
      "0078e614",
      "DATA",
      [
        "storage",
        "00c79868",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "0078e614",
      "DATA",
      [
        "storage",
        "00c79938",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 0078e5ac ["INT_ADD", "register:40f0:8", ["const:78e5ac:8", "const:4:8"]]
- 0078e5ac ["CALL", null, ["callee:00c57f60:8"]]
+ 0078e604 ["INT_ADD", "register:40f0:8", ["const:78e604:8", "const:4:8"]]
+ 0078e604 ["CALL", null, ["callee:00c57f60:8"]]
- 0078e5b8 ["COPY", "tmp:0:8", ["const:868:8"]]
- 0078e5b8 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 0078e5b8 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 0078e5b8 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 0078e610 ["COPY", "tmp:0:8", ["const:938:8"]]
+ 0078e610 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 0078e610 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 0078e610 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-12a80fbf34e8195694bcd8678639cbc0"></a>

### [`0078e5cc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0078e/0078e5cc.md) → [`0078e624`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0078e/0078e624.md) FUN_0078e624

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
      "definition_site": "0078e630",
      "incomplete_value": false,
      "site": "0078e630",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c79000:8"
          ],
          [
            "leaf",
            "const:938:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0078e5d8",
      "incomplete_value": false,
      "site": "0078e5d8",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c79000:8"
          ],
          [
            "leaf",
            "const:868:8"
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
      "0078e630",
      "DATA",
      [
        "storage",
        "00c79868",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "0078e630",
      "DATA",
      [
        "storage",
        "00c79938",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 0078e5d4 ["COPY", "tmp:0:8", ["const:868:8"]]
- 0078e5d4 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 0078e5d4 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 0078e5d4 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 0078e62c ["COPY", "tmp:0:8", ["const:938:8"]]
+ 0078e62c ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 0078e62c ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 0078e62c ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
~~~


<a id="compare-058626045cd4e6f0cc1f1c8fb8934e15"></a>

### [`0078e654`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0078e/0078e654.md) → [`0078e6ac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0078e/0078e6ac.md) FUN_0078e6ac

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
      "definition_site": "0078e6d0",
      "incomplete_value": false,
      "site": "0078e6d0",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c79000:8"
          ],
          [
            "leaf",
            "const:9b8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0078e678",
      "incomplete_value": false,
      "site": "0078e678",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c79000:8"
          ],
          [
            "leaf",
            "const:8e8:8"
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
      "0078e6d0",
      "DATA",
      [
        "storage",
        "00c798e8",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "0078e6d0",
      "DATA",
      [
        "storage",
        "00c799b8",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 0078e668 ["INT_ADD", "register:40f0:8", ["const:78e668:8", "const:4:8"]]
- 0078e668 ["CALL", null, ["callee:00c57f60:8"]]
+ 0078e6c0 ["INT_ADD", "register:40f0:8", ["const:78e6c0:8", "const:4:8"]]
+ 0078e6c0 ["CALL", null, ["callee:00c57f60:8"]]
- 0078e674 ["COPY", "tmp:0:8", ["const:8e8:8"]]
- 0078e674 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 0078e674 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 0078e674 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 0078e6cc ["COPY", "tmp:0:8", ["const:9b8:8"]]
+ 0078e6cc ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 0078e6cc ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 0078e6cc ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-07c5f79d11c01ec04106aeabc40c9726"></a>

### [`0078e6a4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0078e/0078e6a4.md) → [`0078e6fc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0078e/0078e6fc.md) FUN_0078e6fc

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `bounded` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 6件 [`0078e82c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0078e/0078e82c.md) [`0078e830`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0078e/0078e830.md) [`008b6f18`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008b6/008b6f18.md) [`008b79c8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008b7/008b79c8.md) [`00acabd4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00aca/00acabd4.md)
- 新版 呼出元 0件  · 呼出先 6件 [`0078e884`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0078e/0078e884.md) [`0078e888`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0078e/0078e888.md) [`008b6f70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b6/008b6f70.md) [`008b7a20`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b7/008b7a20.md) [`00acac44`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00aca/00acac44.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 96.00% / 新版 96.00%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "0078e730",
      "incomplete_value": false,
      "site": "0078e730",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c79000:8"
          ],
          [
            "leaf",
            "const:a28:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0078e6d8",
      "incomplete_value": false,
      "site": "0078e6d8",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c79000:8"
          ],
          [
            "leaf",
            "const:958:8"
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
      "0078e730",
      "DATA",
      [
        "storage",
        "00c79958",
        null,
        "undefined *"
      ]
    ],
    [
      "0078e768",
      "READ",
      [
        "storage",
        "00c79978",
        null,
        "pointer"
      ]
    ],
    [
      "0078e768",
      "READ",
      [
        "storage",
        "00c79980",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "0078e730",
      "DATA",
      [
        "storage",
        "00c79a28",
        null,
        "undefined *"
      ]
    ],
    [
      "0078e768",
      "READ",
      [
        "storage",
        "00c79a48",
        null,
        "pointer"
      ]
    ],
    [
      "0078e768",
      "READ",
      [
        "storage",
        "00c79a50",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 0078e6cc ["COPY", "tmp:0:8", ["const:958:8"]]
- 0078e6cc ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 0078e6cc ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 0078e6cc ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 0078e724 ["COPY", "tmp:0:8", ["const:a28:8"]]
+ 0078e724 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 0078e724 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 0078e724 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 0078e6e8 ["INT_ADD", "register:40f0:8", ["const:78e6e8:8", "const:4:8"]]
- 0078e6e8 ["CALL", null, ["callee:00acac44:8"]]
+ 0078e740 ["INT_ADD", "register:40f0:8", ["const:78e740:8", "const:4:8"]]
+ 0078e740 ["CALL", null, ["callee:00acac44:8"]]
- 0078e714 ["COPY", "register:0:8", ["register:4040:8"]]
- 0078e714 ["INT_ADD", "register:40f0:8", ["const:78e714:8", "const:4:8"]]
- 0078e714 ["CALLIND", null, ["register:0:8"]]
+ 0078e76c ["COPY", "register:0:8", ["register:4040:8"]]
+ 0078e76c ["INT_ADD", "register:40f0:8", ["const:78e76c:8", "const:4:8"]]
+ 0078e76c ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-c963aeaa4458ba889ffd56039b42baa3"></a>

### [`0078e7e4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0078e/0078e7e4.md) → [`0078e83c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0078e/0078e83c.md) FUN_0078e83c

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
      "definition_site": "0078e860",
      "incomplete_value": false,
      "site": "0078e860",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c79000:8"
          ],
          [
            "leaf",
            "const:a28:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0078e808",
      "incomplete_value": false,
      "site": "0078e808",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c79000:8"
          ],
          [
            "leaf",
            "const:958:8"
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
      "0078e860",
      "DATA",
      [
        "storage",
        "00c79958",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "0078e860",
      "DATA",
      [
        "storage",
        "00c79a28",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 0078e7f8 ["INT_ADD", "register:40f0:8", ["const:78e7f8:8", "const:4:8"]]
- 0078e7f8 ["CALL", null, ["callee:00c57f60:8"]]
+ 0078e850 ["INT_ADD", "register:40f0:8", ["const:78e850:8", "const:4:8"]]
+ 0078e850 ["CALL", null, ["callee:00c57f60:8"]]
- 0078e804 ["COPY", "tmp:0:8", ["const:958:8"]]
- 0078e804 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 0078e804 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 0078e804 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 0078e85c ["COPY", "tmp:0:8", ["const:a28:8"]]
+ 0078e85c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 0078e85c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 0078e85c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-e97ee931ff256c02a8f096292aa73744"></a>

### [`0078e818`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0078e/0078e818.md) → [`0078e870`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0078e/0078e870.md) FUN_0078e870

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
      "definition_site": "0078e87c",
      "incomplete_value": false,
      "site": "0078e87c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c79000:8"
          ],
          [
            "leaf",
            "const:a28:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0078e824",
      "incomplete_value": false,
      "site": "0078e824",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c79000:8"
          ],
          [
            "leaf",
            "const:958:8"
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
      "0078e87c",
      "DATA",
      [
        "storage",
        "00c79958",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "0078e87c",
      "DATA",
      [
        "storage",
        "00c79a28",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 0078e820 ["COPY", "tmp:0:8", ["const:958:8"]]
- 0078e820 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 0078e820 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 0078e820 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 0078e878 ["COPY", "tmp:0:8", ["const:a28:8"]]
+ 0078e878 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 0078e878 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 0078e878 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
~~~


<a id="compare-1bc0d7ace2bd06866c89e7fa1339c1b9"></a>

### [`0078e8ac`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0078e/0078e8ac.md) → [`0078e904`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0078e/0078e904.md) FUN_0078e904

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`00789de0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00789/00789de0.md) · 呼出先 1件 [`00442930`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00442/00442930.md)
- 新版 呼出元 1件 [`00789e38`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00789/00789e38.md) · 呼出先 1件 [`00442970`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00442/00442970.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 80.00% / 新版 80.00%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "0078e910",
      "incomplete_value": false,
      "site": "0078e914",
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
      "definition_site": "0078e8b8",
      "incomplete_value": false,
      "site": "0078e8bc",
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
      "0078e910",
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
      "0078e910",
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
- 0078e8bc ["INT_ADD", "register:40f0:8", ["const:78e8bc:8", "const:4:8"]]
- 0078e8bc ["CALL", null, ["callee:00442970:8"]]
+ 0078e914 ["INT_ADD", "register:40f0:8", ["const:78e914:8", "const:4:8"]]
+ 0078e914 ["CALL", null, ["callee:00442970:8"]]
- 0078e8b8 ["COPY", "tmp:0:8", ["const:f4c:8"]]
- 0078e8b8 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 0078e8b8 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 0078e8b8 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 0078e910 ["COPY", "tmp:0:8", ["const:f8c:8"]]
+ 0078e910 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 0078e910 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 0078e910 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
~~~


<a id="compare-52f710e8ad24ef6637e46c8be78cd474"></a>

### [`0078e8c4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0078e/0078e8c4.md) → [`0078e91c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0078e/0078e91c.md) FUN_0078e91c

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
      "definition_site": "0078e93c",
      "incomplete_value": false,
      "site": "0078e940",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c79000:8"
          ],
          [
            "leaf",
            "const:ab8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0078e8e4",
      "incomplete_value": false,
      "site": "0078e8e8",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c79000:8"
          ],
          [
            "leaf",
            "const:9e8:8"
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
      "0078e940",
      "DATA",
      [
        "storage",
        "00c799e8",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "0078e940",
      "DATA",
      [
        "storage",
        "00c79ab8",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 0078e8d8 ["INT_ADD", "register:40f0:8", ["const:78e8d8:8", "const:4:8"]]
- 0078e8d8 ["CALL", null, ["callee:00c57f60:8"]]
+ 0078e930 ["INT_ADD", "register:40f0:8", ["const:78e930:8", "const:4:8"]]
+ 0078e930 ["CALL", null, ["callee:00c57f60:8"]]
- 0078e8e4 ["COPY", "tmp:0:8", ["const:9e8:8"]]
- 0078e8e4 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 0078e8e4 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 0078e8e4 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 0078e93c ["COPY", "tmp:0:8", ["const:ab8:8"]]
+ 0078e93c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 0078e93c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 0078e93c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-a8a4748763daa7938f5494b376140a6f"></a>

### [`0078e8fc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0078e/0078e8fc.md) → [`0078e954`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0078e/0078e954.md) FUN_0078e954

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
      "definition_site": "0078e958",
      "incomplete_value": false,
      "site": "0078e95c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c79000:8"
          ],
          [
            "leaf",
            "const:ab8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0078e900",
      "incomplete_value": false,
      "site": "0078e904",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c79000:8"
          ],
          [
            "leaf",
            "const:9e8:8"
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
      "0078e95c",
      "DATA",
      [
        "storage",
        "00c799e8",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "0078e95c",
      "DATA",
      [
        "storage",
        "00c79ab8",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 0078e900 ["COPY", "tmp:0:8", ["const:9e8:8"]]
- 0078e900 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 0078e900 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 0078e900 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 0078e958 ["COPY", "tmp:0:8", ["const:ab8:8"]]
+ 0078e958 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 0078e958 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 0078e958 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-c3711bbd4e08a12520758bf9a26db2db"></a>

### [`0078e91c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0078e/0078e91c.md) → [`0078e974`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0078e/0078e974.md) FUN_0078e974

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 8件 [`0048ccf8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0048c/0048ccf8.md) [`0048e7e0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0048e/0048e7e0.md) [`0049f3f0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0049f/0049f3f0.md) [`0078ed34`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0078e/0078ed34.md) [`0078ed38`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0078e/0078ed38.md)
- 新版 呼出元 0件  · 呼出先 8件 [`0048cd38`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048c/0048cd38.md) [`0048e820`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048e/0048e820.md) [`0049f430`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0049f/0049f430.md) [`0078ed8c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0078e/0078ed8c.md) [`0078ed90`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0078e/0078ed90.md)

変更の種類 call, call_target, constant, operands_and_dependencies, store_value

命令の説明率　旧版 96.30% / 新版 96.30%

優先判定に残った影響 `call_target` 1件, `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "0078e9d4",
      "incomplete_value": false,
      "site": "0078e9d4",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c79000:8"
          ],
          [
            "leaf",
            "const:bb8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0078e97c",
      "incomplete_value": false,
      "site": "0078e97c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c79000:8"
          ],
          [
            "leaf",
            "const:ae8:8"
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
      "site": "0078e9b4",
      "value": [
        "leaf",
        "ram:48cd38:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "0078e95c",
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
      "0078e9b4",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0048ccf8"
      ]
    ],
    [
      "0078e9c0",
      "DATA",
      [
        "storage",
        "0039b1d8",
        null,
        "dword"
      ]
    ],
    [
      "0078e9d4",
      "DATA",
      [
        "storage",
        "00c79ae8",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "0078e9b4",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0048cd38"
      ]
    ],
    [
      "0078e9c0",
      "DATA",
      [
        "storage",
        "0039b1d8",
        "fde_0039b1d8",
        "dword"
      ]
    ],
    [
      "0078e9d4",
      "DATA",
      [
        "storage",
        "00c79bb8",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 0078e95c ["INT_ADD", "register:40f0:8", ["const:78e95c:8", "const:4:8"]]
- 0078e95c ["CALL", null, ["ram:48ccf8:8"]]
+ 0078e9b4 ["INT_ADD", "register:40f0:8", ["const:78e9b4:8", "const:4:8"]]
+ 0078e9b4 ["CALL", null, ["ram:48cd38:8"]]
- 0078e960 ["INT_ADD", "register:40f0:8", ["const:78e960:8", "const:4:8"]]
- 0078e960 ["CALL", null, ["callee:0048e820:8"]]
+ 0078e9b8 ["INT_ADD", "register:40f0:8", ["const:78e9b8:8", "const:4:8"]]
+ 0078e9b8 ["CALL", null, ["callee:0048e820:8"]]
- 0078e974 ["COPY", "tmp:0:8", ["const:ae8:8"]]
- 0078e974 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 0078e974 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 0078e974 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 0078e9cc ["COPY", "tmp:0:8", ["const:bb8:8"]]
+ 0078e9cc ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 0078e9cc ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 0078e9cc ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-a1f1213f886384c2569f31e5f7a4a893"></a>

### [`0078ead8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0078e/0078ead8.md) → [`0078eb30`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0078e/0078eb30.md) FUN_0078eb30

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
      "definition_site": "0078eb50",
      "incomplete_value": false,
      "site": "0078eb54",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c79000:8"
          ],
          [
            "leaf",
            "const:b38:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0078eaf8",
      "incomplete_value": false,
      "site": "0078eafc",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c79000:8"
          ],
          [
            "leaf",
            "const:a68:8"
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
      "0078eb54",
      "DATA",
      [
        "storage",
        "00c79a68",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "0078eb54",
      "DATA",
      [
        "storage",
        "00c79b38",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 0078eaec ["INT_ADD", "register:40f0:8", ["const:78eaec:8", "const:4:8"]]
- 0078eaec ["CALL", null, ["callee:00c57f60:8"]]
+ 0078eb44 ["INT_ADD", "register:40f0:8", ["const:78eb44:8", "const:4:8"]]
+ 0078eb44 ["CALL", null, ["callee:00c57f60:8"]]
- 0078eaf8 ["COPY", "tmp:0:8", ["const:a68:8"]]
- 0078eaf8 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 0078eaf8 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 0078eaf8 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 0078eb50 ["COPY", "tmp:0:8", ["const:b38:8"]]
+ 0078eb50 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 0078eb50 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 0078eb50 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-860d4960a0216de616db3e80d4e9f3a4"></a>

### [`0078eb30`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0078e/0078eb30.md) → [`0078eb88`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0078e/0078eb88.md) FUN_0078eb88

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 8件 [`0048ccf8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0048c/0048ccf8.md) [`0048e7e0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0048e/0048e7e0.md) [`0049f3f0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0049f/0049f3f0.md) [`0078ed34`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0078e/0078ed34.md) [`0078ed38`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0078e/0078ed38.md)
- 新版 呼出元 0件  · 呼出先 8件 [`0048cd38`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048c/0048cd38.md) [`0048e820`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048e/0048e820.md) [`0049f430`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0049f/0049f430.md) [`0078ed8c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0078e/0078ed8c.md) [`0078ed90`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0078e/0078ed90.md)

変更の種類 call, call_target, constant, operands_and_dependencies, store_value

命令の説明率　旧版 96.30% / 新版 96.30%

優先判定に残った影響 `call_target` 1件, `store_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "0078ebe8",
      "incomplete_value": true,
      "site": "0078ebe8",
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
            "const:bb8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0078eb90",
      "incomplete_value": true,
      "site": "0078eb90",
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
            "const:ae8:8"
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
      "site": "0078ebc8",
      "value": [
        "leaf",
        "ram:48cd38:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "0078eb70",
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
      "0078ebc8",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0048ccf8"
      ]
    ],
    [
      "0078ebd4",
      "DATA",
      [
        "storage",
        "0039b1d8",
        null,
        "dword"
      ]
    ],
    [
      "0078ebe8",
      "DATA",
      [
        "storage",
        "00c79ae8",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "0078ebc8",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0048cd38"
      ]
    ],
    [
      "0078ebd4",
      "DATA",
      [
        "storage",
        "0039b1d8",
        "fde_0039b1d8",
        "dword"
      ]
    ],
    [
      "0078ebe8",
      "DATA",
      [
        "storage",
        "00c79bb8",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 0078eb70 ["INT_ADD", "register:40f0:8", ["const:78eb70:8", "const:4:8"]]
- 0078eb70 ["CALL", null, ["ram:48ccf8:8"]]
+ 0078ebc8 ["INT_ADD", "register:40f0:8", ["const:78ebc8:8", "const:4:8"]]
+ 0078ebc8 ["CALL", null, ["ram:48cd38:8"]]
- 0078eb74 ["INT_ADD", "register:40f0:8", ["const:78eb74:8", "const:4:8"]]
- 0078eb74 ["CALL", null, ["callee:0048e820:8"]]
+ 0078ebcc ["INT_ADD", "register:40f0:8", ["const:78ebcc:8", "const:4:8"]]
+ 0078ebcc ["CALL", null, ["callee:0048e820:8"]]
- 0078eb88 ["COPY", "tmp:0:8", ["const:ae8:8"]]
- 0078eb88 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 0078eb88 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 0078eb88 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 0078ebe0 ["COPY", "tmp:0:8", ["const:bb8:8"]]
+ 0078ebe0 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 0078ebe0 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 0078ebe0 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-51994b50d7644a48b67355ed66928b86"></a>

### [`0078ecec`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0078e/0078ecec.md) → [`0078ed44`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0078e/0078ed44.md) FUN_0078ed44

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
      "definition_site": "0078ed68",
      "incomplete_value": false,
      "site": "0078ed68",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c79000:8"
          ],
          [
            "leaf",
            "const:bb8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0078ed10",
      "incomplete_value": false,
      "site": "0078ed10",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c79000:8"
          ],
          [
            "leaf",
            "const:ae8:8"
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
      "0078ed68",
      "DATA",
      [
        "storage",
        "00c79ae8",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "0078ed68",
      "DATA",
      [
        "storage",
        "00c79bb8",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 0078ed00 ["INT_ADD", "register:40f0:8", ["const:78ed00:8", "const:4:8"]]
- 0078ed00 ["CALL", null, ["callee:00c57f60:8"]]
+ 0078ed58 ["INT_ADD", "register:40f0:8", ["const:78ed58:8", "const:4:8"]]
+ 0078ed58 ["CALL", null, ["callee:00c57f60:8"]]
- 0078ed0c ["COPY", "tmp:0:8", ["const:ae8:8"]]
- 0078ed0c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 0078ed0c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 0078ed0c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 0078ed64 ["COPY", "tmp:0:8", ["const:bb8:8"]]
+ 0078ed64 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 0078ed64 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 0078ed64 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-b1a97dc2e993f90ea8308491603c9122"></a>

### [`0078ed20`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0078e/0078ed20.md) → [`0078ed78`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0078e/0078ed78.md) FUN_0078ed78

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
      "definition_site": "0078ed84",
      "incomplete_value": false,
      "site": "0078ed84",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c79000:8"
          ],
          [
            "leaf",
            "const:bb8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0078ed2c",
      "incomplete_value": false,
      "site": "0078ed2c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c79000:8"
          ],
          [
            "leaf",
            "const:ae8:8"
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
      "0078ed84",
      "DATA",
      [
        "storage",
        "00c79ae8",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "0078ed84",
      "DATA",
      [
        "storage",
        "00c79bb8",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 0078ed28 ["COPY", "tmp:0:8", ["const:ae8:8"]]
- 0078ed28 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 0078ed28 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 0078ed28 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 0078ed80 ["COPY", "tmp:0:8", ["const:bb8:8"]]
+ 0078ed80 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 0078ed80 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 0078ed80 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
~~~


<a id="compare-3f04cfc06bfc4d8608a1a5bfc1491cb0"></a>

### [`0078edb4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0078e/0078edb4.md) → [`0078ee0c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0078e/0078ee0c.md) _INIT_136

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
      "definition_site": "0078ee48",
      "incomplete_value": true,
      "site": "0078ee64",
      "value": [
        "LOAD",
        "16",
        [
          [
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
      "definition_site": "0078edf0",
      "incomplete_value": true,
      "site": "0078ee0c",
      "value": [
        "LOAD",
        "16",
        [
          [
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
      "definition_site": "0078ee6c",
      "incomplete_value": true,
      "site": "0078ee88",
      "value": [
        "LOAD",
        "16",
        [
          [
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
      "definition_site": "0078ee14",
      "incomplete_value": true,
      "site": "0078ee30",
      "value": [
        "LOAD",
        "16",
        [
          [
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
      "definition_site": "0078ee8c",
      "incomplete_value": true,
      "site": "0078eea8",
      "value": [
        "LOAD",
        "16",
        [
          [
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
      "definition_site": "0078ee34",
      "incomplete_value": true,
      "site": "0078ee50",
      "value": [
        "LOAD",
        "16",
        [
          [
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
      "0078ee48",
      "READ",
      [
        "storage",
        "002b7f26",
        null,
        "string"
      ]
    ],
    [
      "0078ee6c",
      "READ",
      [
        "storage",
        "002b7f39",
        null,
        "string"
      ]
    ],
    [
      "0078ee8c",
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
      "0078ee48",
      "READ",
      [
        "storage",
        "002b7f66",
        null,
        "string"
      ]
    ],
    [
      "0078ee6c",
      "READ",
      [
        "storage",
        "002b7f79",
        null,
        "string"
      ]
    ],
    [
      "0078ee8c",
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
- 0078ee88 ["COPY", "tmp:0:8", ["const:f5d:8"]]
- 0078ee88 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 0078ee88 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 0078ee88 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 0078eee0 ["COPY", "tmp:0:8", ["const:f10:8"]]
+ 0078eee0 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 0078eee0 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 0078eee0 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
- 0078eea8 ["COPY", "tmp:0:8", ["const:f09:8"]]
- 0078eea8 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 0078eea8 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 0078eea8 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 0078ef00 ["COPY", "tmp:0:8", ["const:ebc:8"]]
+ 0078ef00 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 0078ef00 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 0078ef00 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
- 0078efe8 ["INT_ADD", "register:40f0:8", ["const:78efe8:8", "const:4:8"]]
- 0078efe8 ["CALL", null, ["callee:00c57f00:8"]]
+ 0078f040 ["INT_ADD", "register:40f0:8", ["const:78f040:8", "const:4:8"]]
+ 0078f040 ["CALL", null, ["callee:00c57f00:8"]]
~~~


<a id="compare-0442283283f89156020dd8b729849fa5"></a>

### [`0078fed4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0078f/0078fed4.md) → [`0078ff2c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0078f/0078ff2c.md) FUN_0078ff2c

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`0075eb80`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0075e/0075eb80.md) · 呼出先 15件 [`0046c9c4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0046c/0046c9c4.md) [`0047e60c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047e/0047e60c.md) [`0047edb4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047e/0047edb4.md) [`00790204`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00790/00790204.md) [`00794878`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00794/00794878.md)
- 新版 呼出元 1件 [`0075ebd8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0075e/0075ebd8.md) · 呼出先 15件 [`0046ca04`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046c/0046ca04.md) [`0047e64c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047e/0047e64c.md) [`0047edf4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047e/0047edf4.md) [`0079025c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00790/0079025c.md) [`007948d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00794/007948d0.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies, store_destination, store_value

命令の説明率　旧版 85.89% / 新版 85.89%

優先判定に残った影響 `call_argument_candidate` 7件, `store_destination` 7件, `store_value` 4件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "0078ffbc",
      "incomplete_value": false,
      "site": "0078ffbc",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c79000:8"
          ],
          [
            "leaf",
            "const:c38:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0078ff64",
      "incomplete_value": false,
      "site": "0078ff64",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c79000:8"
          ],
          [
            "leaf",
            "const:b68:8"
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
      "definition_site": "00790078",
      "incomplete_value": false,
      "site": "00790078",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c79000:8"
          ],
          [
            "leaf",
            "const:cb8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00790020",
      "incomplete_value": false,
      "site": "00790020",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c79000:8"
          ],
          [
            "leaf",
            "const:be8:8"
          ]
        ]
      ]
    },
    "ordinal": 16,
    "slot": 2
  },
  {
    "confidence": "bounded",
    "kind": "store_destination",
    "new": {
      "definition_site": "00790188",
      "incomplete_value": false,
      "site": "00790188",
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
      "definition_site": "00790130",
      "incomplete_value": false,
      "site": "00790130",
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
    "ordinal": 20,
    "slot": 1
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "0078ff60",
      "READ",
      [
        "storage",
        "00ca4f38",
        null,
        "undefined1"
      ]
    ],
    [
      "0078ff6c",
      "PARAM",
      [
        "storage",
        "00ca4f00",
        null,
        "undefined8"
      ]
    ],
    [
      "0078ff74",
      "PARAM",
      [
        "storage",
        "00ca7e70",
        null,
        "undefined1"
      ]
    ]
  ],
  "added": [
    [
      "0078ff60",
      "READ",
      [
        "storage",
        "00ca5038",
        null,
        "undefined1"
      ]
    ],
    [
      "0078ff6c",
      "PARAM",
      [
        "storage",
        "00ca5000",
        null,
        "undefined8"
      ]
    ],
    [
      "0078ff74",
      "PARAM",
      [
        "storage",
        "00ca7f70",
        null,
        "undefined1"
      ]
    ]
  ]
}
~~~


~~~diff
- 0078ff30 ["INT_ADD", "register:40f0:8", ["const:78ff30:8", "const:4:8"]]
- 0078ff30 ["CALL", null, ["callee:0047e64c:8"]]
+ 0078ff88 ["INT_ADD", "register:40f0:8", ["const:78ff88:8", "const:4:8"]]
+ 0078ff88 ["CALL", null, ["callee:0047e64c:8"]]
- 0078ffbc ["COPY", "register:0:8", ["register:4040:8"]]
- 0078ffbc ["INT_ADD", "register:40f0:8", ["const:78ffbc:8", "const:4:8"]]
- 0078ffbc ["CALLIND", null, ["register:0:8"]]
+ 00790014 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00790014 ["INT_ADD", "register:40f0:8", ["const:790014:8", "const:4:8"]]
+ 00790014 ["CALLIND", null, ["register:0:8"]]
- 00790078 ["COPY", "register:0:8", ["register:4040:8"]]
- 00790078 ["INT_ADD", "register:40f0:8", ["const:790078:8", "const:4:8"]]
- 00790078 ["CALLIND", null, ["register:0:8"]]
+ 007900d0 ["COPY", "register:0:8", ["register:4040:8"]]
+ 007900d0 ["INT_ADD", "register:40f0:8", ["const:7900d0:8", "const:4:8"]]
+ 007900d0 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-b5d3a2c9c1a1a4490935277747281298"></a>

### [`00790204`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00790/00790204.md) → [`0079025c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00790/0079025c.md) FUN_0079025c

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`0078fed4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0078f/0078fed4.md) · 呼出先 12件 [`005d8bc8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005d8/005d8bc8.md) [`0079517c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00795/0079517c.md) [`008b6f10`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008b6/008b6f10.md) [`008b6fec`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008b6/008b6fec.md) [`00a46784`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a46/00a46784.md)
- 新版 呼出元 1件 [`0078ff2c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0078f/0078ff2c.md) · 呼出先 12件 [`005d8c08`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005d8/005d8c08.md) [`007951d4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00795/007951d4.md) [`008b6f68`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b6/008b6f68.md) [`008b7044`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b7/008b7044.md) [`00a467d8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a46/00a467d8.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 94.64% / 新版 94.64%

優先判定に残った影響 `store_value` 4件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "0079036c",
      "incomplete_value": true,
      "site": "00790370",
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
      "definition_site": "00790314",
      "incomplete_value": true,
      "site": "00790318",
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
    "ordinal": 18,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "007903b0",
      "incomplete_value": true,
      "site": "007903b0",
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
      "definition_site": "00790358",
      "incomplete_value": true,
      "site": "00790358",
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
  },
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "00790448",
      "incomplete_value": false,
      "site": "00790448",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c79000:8"
          ],
          [
            "leaf",
            "const:d38:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "007903f0",
      "incomplete_value": false,
      "site": "007903f0",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c79000:8"
          ],
          [
            "leaf",
            "const:c68:8"
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
      "00790330",
      "READ",
      [
        "storage",
        "00c9b368",
        null,
        "pointer"
      ]
    ],
    [
      "00790344",
      "DATA",
      [
        "storage",
        "00c8b758",
        null,
        "undefined *"
      ]
    ],
    [
      "00790368",
      "READ",
      [
        "storage",
        "00c9b370",
        null,
        "pointer"
      ]
    ]
  ],
  "added": [
    [
      "00790330",
      "READ",
      [
        "storage",
        "00c9b438",
        null,
        "pointer"
      ]
    ],
    [
      "00790344",
      "DATA",
      [
        "storage",
        "00c8b828",
        null,
        "undefined *"
      ]
    ],
    [
      "00790368",
      "READ",
      [
        "storage",
        "00c9b440",
        null,
        "pointer"
      ]
    ]
  ]
}
~~~


~~~diff
- 00790284 ["INT_ADD", "register:40f0:8", ["const:790284:8", "const:4:8"]]
- 00790284 ["CALL", null, ["callee:00a475a0:8"]]
+ 007902dc ["INT_ADD", "register:40f0:8", ["const:7902dc:8", "const:4:8"]]
+ 007902dc ["CALL", null, ["callee:00a475a0:8"]]
- 00790298 ["COPY", "register:0:8", ["register:4040:8"]]
- 00790298 ["INT_ADD", "register:40f0:8", ["const:790298:8", "const:4:8"]]
- 00790298 ["CALLIND", null, ["register:0:8"]]
+ 007902f0 ["COPY", "register:0:8", ["register:4040:8"]]
+ 007902f0 ["INT_ADD", "register:40f0:8", ["const:7902f0:8", "const:4:8"]]
+ 007902f0 ["CALLIND", null, ["register:0:8"]]
- 007902b4 ["INT_ADD", "register:40f0:8", ["const:7902b4:8", "const:4:8"]]
- 007902b4 ["CALL", null, ["callee:00a46950:8"]]
+ 0079030c ["INT_ADD", "register:40f0:8", ["const:79030c:8", "const:4:8"]]
+ 0079030c ["CALL", null, ["callee:00a46950:8"]]
~~~


<a id="compare-98ddb9176628c247b9974578d321da17"></a>

### [`007941d4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00794/007941d4.md) → [`0079422c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00794/0079422c.md) FUN_0079422c

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 4件 [`00791224`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00791/00791224.md) [`00791910`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00791/00791910.md) [`00791e60`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00791/00791e60.md) [`00792484`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00792/00792484.md) · 呼出先 16件 [`0047e8dc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047e/0047e8dc.md) [`0047edb4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047e/0047edb4.md) [`00493998`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00493/00493998.md) [`0054075c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00540/0054075c.md) [`0063674c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00636/0063674c.md)
- 新版 呼出元 4件 [`0079127c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00791/0079127c.md) [`00791968`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00791/00791968.md) [`00791eb8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00791/00791eb8.md) [`007924dc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00792/007924dc.md) · 呼出先 16件 [`0047e91c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047e/0047e91c.md) [`0047edf4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047e/0047edf4.md) [`004939d8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00493/004939d8.md) [`0054079c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00540/0054079c.md) [`0063678c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00636/0063678c.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies, store_destination, store_value

命令の説明率　旧版 94.00% / 新版 94.00%

優先判定に残った影響 `call_argument_candidate` 7件, `store_destination` 7件, `store_value` 2件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_destination",
    "new": {
      "definition_site": "007946a8",
      "incomplete_value": false,
      "site": "007946a8",
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
      "definition_site": "00794650",
      "incomplete_value": false,
      "site": "00794650",
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
    "ordinal": 54,
    "slot": 1
  },
  {
    "confidence": "bounded",
    "kind": "store_destination",
    "new": {
      "definition_site": "007946ac",
      "incomplete_value": false,
      "site": "007946ac",
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
      "definition_site": "00794654",
      "incomplete_value": false,
      "site": "00794654",
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
    "ordinal": 55,
    "slot": 1
  },
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "007946a8",
      "incomplete_value": false,
      "site": "007946ac",
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
      "definition_site": "00794650",
      "incomplete_value": false,
      "site": "00794654",
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
    "ordinal": 55,
    "slot": 2
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "0079426c",
      "READ",
      [
        "storage",
        "00ca4f38",
        null,
        "undefined1"
      ]
    ],
    [
      "007943d4",
      "READ",
      [
        "storage",
        "00c9aca0",
        null,
        "pointer"
      ]
    ],
    [
      "007943d4",
      "PARAM",
      [
        "storage",
        "00ca4fd8",
        null,
        "undefined1"
      ]
    ]
  ],
  "added": [
    [
      "0079426c",
      "READ",
      [
        "storage",
        "00ca5038",
        null,
        "undefined1"
      ]
    ],
    [
      "007943d4",
      "READ",
      [
        "storage",
        "00c9ad70",
        null,
        "pointer"
      ]
    ],
    [
      "007943d4",
      "PARAM",
      [
        "storage",
        "00ca50d8",
        null,
        "undefined1"
      ]
    ]
  ]
}
~~~


~~~diff
- 00794398 ["INT_ADD", "register:40f0:8", ["const:794398:8", "const:4:8"]]
- 00794398 ["CALL", null, ["callee:0047e91c:8"]]
+ 007943f0 ["INT_ADD", "register:40f0:8", ["const:7943f0:8", "const:4:8"]]
+ 007943f0 ["CALL", null, ["callee:0047e91c:8"]]
- 0079461c ["COPY", "register:4000:8", ["const:ca4000:8"]]
+ 00794674 ["COPY", "register:4000:8", ["const:ca5000:8"]]
- 00794628 ["INT_ADD", "register:40f0:8", ["const:794628:8", "const:4:8"]]
- 00794628 ["CALL", null, ["callee:00c57f20:8"]]
+ 00794680 ["INT_ADD", "register:40f0:8", ["const:794680:8", "const:4:8"]]
+ 00794680 ["CALL", null, ["callee:00c57f20:8"]]
~~~


<a id="compare-cae4fd7d0779f6887df56abd3c02d0c7"></a>

### [`00794830`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00794/00794830.md) → [`00794888`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00794/00794888.md) FUN_00794888

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
      "definition_site": "007948ac",
      "incomplete_value": false,
      "site": "007948ac",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c79000:8"
          ],
          [
            "leaf",
            "const:c38:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00794854",
      "incomplete_value": false,
      "site": "00794854",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c79000:8"
          ],
          [
            "leaf",
            "const:b68:8"
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
      "007948ac",
      "DATA",
      [
        "storage",
        "00c79b68",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "007948ac",
      "DATA",
      [
        "storage",
        "00c79c38",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00794844 ["INT_ADD", "register:40f0:8", ["const:794844:8", "const:4:8"]]
- 00794844 ["CALL", null, ["callee:00c57f60:8"]]
+ 0079489c ["INT_ADD", "register:40f0:8", ["const:79489c:8", "const:4:8"]]
+ 0079489c ["CALL", null, ["callee:00c57f60:8"]]
- 00794850 ["COPY", "tmp:0:8", ["const:b68:8"]]
- 00794850 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00794850 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00794850 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 007948a8 ["COPY", "tmp:0:8", ["const:c38:8"]]
+ 007948a8 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 007948a8 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 007948a8 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-58a309e2f0631bc0def9cb08f0d0038f"></a>

### [`00794864`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00794/00794864.md) → [`007948bc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00794/007948bc.md) FUN_007948bc

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
      "definition_site": "007948c8",
      "incomplete_value": false,
      "site": "007948c8",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c79000:8"
          ],
          [
            "leaf",
            "const:c38:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00794870",
      "incomplete_value": false,
      "site": "00794870",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c79000:8"
          ],
          [
            "leaf",
            "const:b68:8"
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
      "007948c8",
      "DATA",
      [
        "storage",
        "00c79b68",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "007948c8",
      "DATA",
      [
        "storage",
        "00c79c38",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 0079486c ["COPY", "tmp:0:8", ["const:b68:8"]]
- 0079486c ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 0079486c ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 0079486c ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 007948c4 ["COPY", "tmp:0:8", ["const:c38:8"]]
+ 007948c4 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 007948c4 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 007948c4 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
~~~


<a id="compare-d15f14d3cac79bbd528a9e714383520f"></a>

### [`007948b8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00794/007948b8.md) → [`00794910`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00794/00794910.md) FUN_00794910

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
      "definition_site": "00794934",
      "incomplete_value": false,
      "site": "00794934",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c79000:8"
          ],
          [
            "leaf",
            "const:cb8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "007948dc",
      "incomplete_value": false,
      "site": "007948dc",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c79000:8"
          ],
          [
            "leaf",
            "const:be8:8"
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
      "00794934",
      "DATA",
      [
        "storage",
        "00c79be8",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00794934",
      "DATA",
      [
        "storage",
        "00c79cb8",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 007948cc ["INT_ADD", "register:40f0:8", ["const:7948cc:8", "const:4:8"]]
- 007948cc ["CALL", null, ["callee:00c57f60:8"]]
+ 00794924 ["INT_ADD", "register:40f0:8", ["const:794924:8", "const:4:8"]]
+ 00794924 ["CALL", null, ["callee:00c57f60:8"]]
- 007948d8 ["COPY", "tmp:0:8", ["const:be8:8"]]
- 007948d8 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 007948d8 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 007948d8 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00794930 ["COPY", "tmp:0:8", ["const:cb8:8"]]
+ 00794930 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00794930 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00794930 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-2f68de120927751964c4d91d22c92388"></a>

### [`007948ec`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00794/007948ec.md) → [`00794944`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00794/00794944.md) FUN_00794944

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
      "definition_site": "00794950",
      "incomplete_value": false,
      "site": "00794950",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c79000:8"
          ],
          [
            "leaf",
            "const:cb8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "007948f8",
      "incomplete_value": false,
      "site": "007948f8",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c79000:8"
          ],
          [
            "leaf",
            "const:be8:8"
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
      "00794950",
      "DATA",
      [
        "storage",
        "00c79be8",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00794950",
      "DATA",
      [
        "storage",
        "00c79cb8",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 007948f4 ["COPY", "tmp:0:8", ["const:be8:8"]]
- 007948f4 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 007948f4 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 007948f4 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 0079494c ["COPY", "tmp:0:8", ["const:cb8:8"]]
+ 0079494c ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 0079494c ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 0079494c ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
~~~


<a id="compare-d0e65bbcf4b87f0013441be6ac264368"></a>

### [`00794b6c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00794/00794b6c.md) → [`00794bc4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00794/00794bc4.md) FUN_00794bc4

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 3件 [`0079493c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00794/0079493c.md) [`0080d860`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0080d/0080d860.md) [`00b2abcc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b2a/00b2abcc.md) · 呼出先 1件 [`0043b778`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043b778.md)
- 新版 呼出元 3件 [`00794994`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00794/00794994.md) [`0080d8b8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0080d/0080d8b8.md) [`00b2ac68`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b2a/00b2ac68.md) · 呼出先 1件 [`0043b7b8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b7b8.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 80.00% / 新版 80.00%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00794bd0",
      "incomplete_value": false,
      "site": "00794bd4",
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
      "definition_site": "00794b78",
      "incomplete_value": false,
      "site": "00794b7c",
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
      "00794bd0",
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
      "00794bd0",
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
- 00794b7c ["INT_ADD", "register:40f0:8", ["const:794b7c:8", "const:4:8"]]
- 00794b7c ["CALL", null, ["callee:0043b7b8:8"]]
+ 00794bd4 ["INT_ADD", "register:40f0:8", ["const:794bd4:8", "const:4:8"]]
+ 00794bd4 ["CALL", null, ["callee:0043b7b8:8"]]
- 00794b78 ["COPY", "tmp:0:8", ["const:f4c:8"]]
- 00794b78 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 00794b78 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 00794b78 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 00794bd0 ["COPY", "tmp:0:8", ["const:f8c:8"]]
+ 00794bd0 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 00794bd0 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 00794bd0 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
~~~


<a id="compare-fe2956c08cca3ba0af3695ef06456277"></a>

### [`00794fa8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00794/00794fa8.md) → [`00795000`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00795/00795000.md) FUN_00795000

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
      "definition_site": "0079500c",
      "incomplete_value": false,
      "site": "00795018",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c79000:8"
          ],
          [
            "leaf",
            "const:d38:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00794fb4",
      "incomplete_value": false,
      "site": "00794fc0",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c79000:8"
          ],
          [
            "leaf",
            "const:c68:8"
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
      "00795018",
      "DATA",
      [
        "storage",
        "00c79c68",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00795018",
      "DATA",
      [
        "storage",
        "00c79d38",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00794fb4 ["COPY", "tmp:0:8", ["const:c68:8"]]
- 00794fb4 ["INT_CARRY", "register:105:1", ["register:4050:8", "tmp:0:8"]]
- 00794fb4 ["INT_SCARRY", "register:106:1", ["register:4050:8", "tmp:0:8"]]
- 00794fb4 ["INT_ADD", "tmp:1:8", ["register:4050:8", "tmp:0:8"]]
+ 0079500c ["COPY", "tmp:0:8", ["const:d38:8"]]
+ 0079500c ["INT_CARRY", "register:105:1", ["register:4050:8", "tmp:0:8"]]
+ 0079500c ["INT_SCARRY", "register:106:1", ["register:4050:8", "tmp:0:8"]]
+ 0079500c ["INT_ADD", "tmp:1:8", ["register:4050:8", "tmp:0:8"]]
~~~


<a id="compare-11441ea13adb8438e7ff8f07cc3768bb"></a>

### [`00794fec`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00794/00794fec.md) → [`00795044`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00795/00795044.md) FUN_00795044

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
      "definition_site": "0079505c",
      "incomplete_value": false,
      "site": "00795068",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c79000:8"
          ],
          [
            "leaf",
            "const:d38:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00795004",
      "incomplete_value": false,
      "site": "00795010",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c79000:8"
          ],
          [
            "leaf",
            "const:c68:8"
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
      "00795068",
      "DATA",
      [
        "storage",
        "00c79c68",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00795068",
      "DATA",
      [
        "storage",
        "00c79d38",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00795004 ["COPY", "tmp:0:8", ["const:c68:8"]]
- 00795004 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00795004 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00795004 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 0079505c ["COPY", "tmp:0:8", ["const:d38:8"]]
+ 0079505c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 0079505c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 0079505c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 00795034 ["COPY", "register:0:8", ["register:4040:8"]]
- 00795034 ["INT_ADD", "register:40f0:8", ["const:795034:8", "const:4:8"]]
- 00795034 ["CALLIND", null, ["register:0:8"]]
+ 0079508c ["COPY", "register:0:8", ["register:4040:8"]]
+ 0079508c ["INT_ADD", "register:40f0:8", ["const:79508c:8", "const:4:8"]]
+ 0079508c ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-d2e9bdc35646e1b32cc5f20312d8d743"></a>

### [`00795048`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00795/00795048.md) → [`007950a0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00795/007950a0.md) FUN_007950a0

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
      "definition_site": "007950cc",
      "incomplete_value": false,
      "site": "007950cc",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c79000:8"
          ],
          [
            "leaf",
            "const:d38:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00795074",
      "incomplete_value": false,
      "site": "00795074",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c79000:8"
          ],
          [
            "leaf",
            "const:c68:8"
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
      "007950cc",
      "DATA",
      [
        "storage",
        "00c79c68",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "007950cc",
      "DATA",
      [
        "storage",
        "00c79d38",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 0079505c ["INT_ADD", "register:40f0:8", ["const:79505c:8", "const:4:8"]]
- 0079505c ["CALL", null, ["callee:00c57f60:8"]]
+ 007950b4 ["INT_ADD", "register:40f0:8", ["const:7950b4:8", "const:4:8"]]
+ 007950b4 ["CALL", null, ["callee:00c57f60:8"]]
- 0079506c ["COPY", "tmp:0:8", ["const:c68:8"]]
- 0079506c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 0079506c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 0079506c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 007950c4 ["COPY", "tmp:0:8", ["const:d38:8"]]
+ 007950c4 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 007950c4 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 007950c4 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 00795090 ["COPY", "register:0:8", ["register:4040:8"]]
- 00795090 ["INT_ADD", "register:40f0:8", ["const:795090:8", "const:4:8"]]
- 00795090 ["CALLIND", null, ["register:0:8"]]
+ 007950e8 ["COPY", "register:0:8", ["register:4040:8"]]
+ 007950e8 ["INT_ADD", "register:40f0:8", ["const:7950e8:8", "const:4:8"]]
+ 007950e8 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-14d2d22f94557ae15005df98f4a5c2d9"></a>

### [`007950d0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00795/007950d0.md) → [`00795128`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00795/00795128.md) FUN_00795128

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
      "definition_site": "00795144",
      "incomplete_value": false,
      "site": "00795144",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c79000:8"
          ],
          [
            "leaf",
            "const:d38:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "007950ec",
      "incomplete_value": false,
      "site": "007950ec",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c79000:8"
          ],
          [
            "leaf",
            "const:c68:8"
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
      "00795144",
      "DATA",
      [
        "storage",
        "00c79c68",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00795144",
      "DATA",
      [
        "storage",
        "00c79d38",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 007950e8 ["COPY", "tmp:0:8", ["const:c68:8"]]
- 007950e8 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 007950e8 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 007950e8 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 00795140 ["COPY", "tmp:0:8", ["const:d38:8"]]
+ 00795140 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 00795140 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 00795140 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
- 0079510c ["COPY", "register:0:8", ["register:4048:8"]]
- 0079510c ["INT_ADD", "register:40f0:8", ["const:79510c:8", "const:4:8"]]
- 0079510c ["CALLIND", null, ["register:0:8"]]
+ 00795164 ["COPY", "register:0:8", ["register:4048:8"]]
+ 00795164 ["INT_ADD", "register:40f0:8", ["const:795164:8", "const:4:8"]]
+ 00795164 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-88f65174755aaabc9cc68e9ce44db2a6"></a>

### [`007951cc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00795/007951cc.md) → [`00795224`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00795/00795224.md) FUN_00795224

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 3件 [`00459d74`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00459/00459d74.md) [`0047acf4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047a/0047acf4.md) [`0047cdd4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047c/0047cdd4.md)
- 新版 呼出元 0件  · 呼出先 3件 [`00459db4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00459/00459db4.md) [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md) [`0047ce14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047ce14.md)

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
      "site": "00795244",
      "value": [
        "leaf",
        "ram:47ad34:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "007951ec",
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
      "site": "00795250",
      "value": [
        "leaf",
        "ram:47ad34:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "007951f8",
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
      "00795244",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047acf4"
      ]
    ],
    [
      "00795250",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047acf4"
      ]
    ]
  ],
  "added": [
    [
      "00795244",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ],
    [
      "00795250",
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
- 007951ec ["INT_ADD", "register:40f0:8", ["const:7951ec:8", "const:4:8"]]
- 007951ec ["CALL", null, ["ram:47acf4:8"]]
+ 00795244 ["INT_ADD", "register:40f0:8", ["const:795244:8", "const:4:8"]]
+ 00795244 ["CALL", null, ["ram:47ad34:8"]]
- 007951f8 ["INT_ADD", "register:40f0:8", ["const:7951f8:8", "const:4:8"]]
- 007951f8 ["CALL", null, ["ram:47acf4:8"]]
+ 00795250 ["INT_ADD", "register:40f0:8", ["const:795250:8", "const:4:8"]]
+ 00795250 ["CALL", null, ["ram:47ad34:8"]]
- 0079522c ["INT_ADD", "register:40f0:8", ["const:79522c:8", "const:4:8"]]
- 0079522c ["CALL", null, ["callee:00459db4:8"]]
+ 00795284 ["INT_ADD", "register:40f0:8", ["const:795284:8", "const:4:8"]]
+ 00795284 ["CALL", null, ["callee:00459db4:8"]]
~~~


<a id="compare-6359396be1cd94dbb748a6e6e5d2ee3a"></a>

### [`00795674`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00795/00795674.md) → [`007956cc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00795/007956cc.md) FUN_007956cc

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`00795258`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00795/00795258.md) · 呼出先 1件 [`0043b778`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043b778.md)
- 新版 呼出元 1件 [`007952b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00795/007952b0.md) · 呼出先 1件 [`0043b7b8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b7b8.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 80.00% / 新版 80.00%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "007956d8",
      "incomplete_value": false,
      "site": "007956dc",
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
      "definition_site": "00795680",
      "incomplete_value": false,
      "site": "00795684",
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
      "007956d8",
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
      "007956d8",
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
- 00795684 ["INT_ADD", "register:40f0:8", ["const:795684:8", "const:4:8"]]
- 00795684 ["CALL", null, ["callee:0043b7b8:8"]]
+ 007956dc ["INT_ADD", "register:40f0:8", ["const:7956dc:8", "const:4:8"]]
+ 007956dc ["CALL", null, ["callee:0043b7b8:8"]]
- 00795680 ["COPY", "tmp:0:8", ["const:f4c:8"]]
- 00795680 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 00795680 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 00795680 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 007956d8 ["COPY", "tmp:0:8", ["const:f8c:8"]]
+ 007956d8 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 007956d8 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 007956d8 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
~~~


<a id="compare-6042ec8fbcda1dcbb71ed6f69417954a"></a>

### [`00795a94`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00795/00795a94.md) → [`00795aec`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00795/00795aec.md) _INIT_138

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
      "definition_site": "00795b6c",
      "incomplete_value": true,
      "site": "00795b88",
      "value": [
        "LOAD",
        "16",
        [
          [
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
      "definition_site": "00795b14",
      "incomplete_value": true,
      "site": "00795b30",
      "value": [
        "LOAD",
        "16",
        [
          [
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
      "definition_site": "00795b8c",
      "incomplete_value": true,
      "site": "00795ba4",
      "value": [
        "LOAD",
        "16",
        [
          [
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
      "definition_site": "00795b34",
      "incomplete_value": true,
      "site": "00795b4c",
      "value": [
        "LOAD",
        "16",
        [
          [
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
      "definition_site": "00795ba8",
      "incomplete_value": true,
      "site": "00795bc4",
      "value": [
        "LOAD",
        "16",
        [
          [
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
      "definition_site": "00795b50",
      "incomplete_value": true,
      "site": "00795b6c",
      "value": [
        "LOAD",
        "16",
        [
          [
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
      "00795b28",
      "READ",
      [
        "storage",
        "002b7f26",
        null,
        "string"
      ]
    ],
    [
      "00795b4c",
      "READ",
      [
        "storage",
        "002b7f39",
        null,
        "string"
      ]
    ],
    [
      "00795b6c",
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
      "00795b28",
      "READ",
      [
        "storage",
        "002b7f66",
        null,
        "string"
      ]
    ],
    [
      "00795b4c",
      "READ",
      [
        "storage",
        "002b7f79",
        null,
        "string"
      ]
    ],
    [
      "00795b6c",
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
- 00795b88 ["COPY", "tmp:0:8", ["const:f09:8"]]
- 00795b88 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 00795b88 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 00795b88 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 00795be0 ["COPY", "tmp:0:8", ["const:ebc:8"]]
+ 00795be0 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 00795be0 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 00795be0 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
- 00795cc8 ["INT_ADD", "register:40f0:8", ["const:795cc8:8", "const:4:8"]]
- 00795cc8 ["CALL", null, ["callee:00c57f00:8"]]
+ 00795d20 ["INT_ADD", "register:40f0:8", ["const:795d20:8", "const:4:8"]]
+ 00795d20 ["CALL", null, ["callee:00c57f00:8"]]
- 00795ac0 ["COPY", "tmp:0:8", ["const:ea0:8"]]
- 00795ac0 ["INT_CARRY", "register:105:1", ["register:4098:8", "tmp:0:8"]]
- 00795ac0 ["INT_SCARRY", "register:106:1", ["register:4098:8", "tmp:0:8"]]
- 00795ac0 ["INT_ADD", "tmp:1:8", ["register:4098:8", "tmp:0:8"]]
+ 00795b18 ["COPY", "tmp:0:8", ["const:fa0:8"]]
+ 00795b18 ["INT_CARRY", "register:105:1", ["register:4098:8", "tmp:0:8"]]
+ 00795b18 ["INT_SCARRY", "register:106:1", ["register:4098:8", "tmp:0:8"]]
+ 00795b18 ["INT_ADD", "tmp:1:8", ["register:4098:8", "tmp:0:8"]]
~~~


<a id="compare-f69c73924a51e74c361bb62b663457a9"></a>

### [`00795e24`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00795/00795e24.md) → [`00795e7c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00795/00795e7c.md) FUN_00795e7c

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 22件 [`0059a708`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0059a/0059a708.md) [`0059ae18`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0059a/0059ae18.md) [`005ad7e0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005ad/005ad7e0.md) [`005ae8e4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005ae/005ae8e4.md) [`005b1e24`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005b1/005b1e24.md) · 呼出先 1件 [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md)
- 新版 呼出元 22件 [`0059a748`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0059a/0059a748.md) [`0059ae58`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0059a/0059ae58.md) [`005ad820`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005ad/005ad820.md) [`005ae924`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005ae/005ae924.md) [`005b1e64`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005b1/005b1e64.md) · 呼出先 1件 [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)

変更の種類 branch_value, constant, operands_and_dependencies, store_condition, store_destination

命令の説明率　旧版 92.86% / 新版 92.86%

優先判定に残った影響 `store_destination` 1件

アドレスに依存する影響 `branch_value` 1件, `store_condition` 4件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_destination",
    "new": {
      "definition_site": "00795ea4",
      "incomplete_value": true,
      "site": "00795ea4",
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
            "const:fd0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00795e4c",
      "incomplete_value": true,
      "site": "00795e4c",
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
            "const:ed0:8"
          ]
        ]
      ]
    },
    "ordinal": 6,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "branch_value",
    "new": {
      "definition_site": "00795e90",
      "incomplete_value": true,
      "site": "00795e90",
      "value": [
        "INT_NOTEQUAL",
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
      "definition_site": "00795e38",
      "incomplete_value": true,
      "site": "00795e38",
      "value": [
        "INT_NOTEQUAL",
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
    "guard": [
      [
        "FALL_THROUGH",
        "00795e38"
      ],
      [
        "FALL_THROUGH",
        "00795e90"
      ]
    ],
    "kind": "store_condition",
    "new": {
      "definition_site": "00795e90",
      "incomplete_value": true,
      "site": "00795e9c",
      "value": [
        "INT_NOTEQUAL",
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
      "definition_site": "00795e38",
      "incomplete_value": true,
      "site": "00795e44",
      "value": [
        "INT_NOTEQUAL",
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
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "00795e8c",
      "READ",
      [
        "storage",
        "00ca7ed0",
        null,
        "undefined8"
      ]
    ],
    [
      "00795ea4",
      "WRITE",
      [
        "storage",
        "00ca7ed0",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00795e8c",
      "READ",
      [
        "storage",
        "00ca7fd0",
        null,
        "undefined8"
      ]
    ],
    [
      "00795ea4",
      "WRITE",
      [
        "storage",
        "00ca7fd0",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00795e4c ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:ed0:8"]]
- 00795e4c ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00795ea4 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:fd0:8"]]
+ 00795ea4 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00795e34 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:ed0:8"]]
- 00795e34 ["LOAD", "register:4000:8", ["const:1b1:8", "tmp:0:8"]]
+ 00795e8c ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:fd0:8"]]
+ 00795e8c ["LOAD", "register:4000:8", ["const:1b1:8", "tmp:0:8"]]
- 00795e40 ["INT_ADD", "register:40f0:8", ["const:795e40:8", "const:4:8"]]
- 00795e40 ["CALL", null, ["callee:00c57f60:8"]]
+ 00795e98 ["INT_ADD", "register:40f0:8", ["const:795e98:8", "const:4:8"]]
+ 00795e98 ["CALL", null, ["callee:00c57f60:8"]]
~~~


<a id="compare-e6f9cd514c8519624a0e79887c459f32"></a>

### [`00796260`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00796/00796260.md) → [`007962b8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00796/007962b8.md) FUN_007962b8

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`00796104`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00796/00796104.md) · 呼出先 1件 [`0043b778`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043b778.md)
- 新版 呼出元 1件 [`0079615c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00796/0079615c.md) · 呼出先 1件 [`0043b7b8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b7b8.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 80.00% / 新版 80.00%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "007962c4",
      "incomplete_value": false,
      "site": "007962c8",
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
      "definition_site": "0079626c",
      "incomplete_value": false,
      "site": "00796270",
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
      "007962c4",
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
      "007962c4",
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
- 00796270 ["INT_ADD", "register:40f0:8", ["const:796270:8", "const:4:8"]]
- 00796270 ["CALL", null, ["callee:0043b7b8:8"]]
+ 007962c8 ["INT_ADD", "register:40f0:8", ["const:7962c8:8", "const:4:8"]]
+ 007962c8 ["CALL", null, ["callee:0043b7b8:8"]]
- 0079626c ["COPY", "tmp:0:8", ["const:f4c:8"]]
- 0079626c ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 0079626c ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 0079626c ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 007962c4 ["COPY", "tmp:0:8", ["const:f8c:8"]]
+ 007962c4 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 007962c4 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 007962c4 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
~~~


<a id="compare-4b63ee61ab840ec692dcba3bc40df43c"></a>

### [`00796274`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00796/00796274.md) → [`007962cc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00796/007962cc.md) _INIT_139

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
      "definition_site": "00796308",
      "incomplete_value": true,
      "site": "00796324",
      "value": [
        "LOAD",
        "16",
        [
          [
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
      "definition_site": "007962b0",
      "incomplete_value": true,
      "site": "007962cc",
      "value": [
        "LOAD",
        "16",
        [
          [
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
      "definition_site": "0079632c",
      "incomplete_value": true,
      "site": "00796348",
      "value": [
        "LOAD",
        "16",
        [
          [
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
      "definition_site": "007962d4",
      "incomplete_value": true,
      "site": "007962f0",
      "value": [
        "LOAD",
        "16",
        [
          [
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
      "definition_site": "0079634c",
      "incomplete_value": true,
      "site": "00796368",
      "value": [
        "LOAD",
        "16",
        [
          [
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
      "definition_site": "007962f4",
      "incomplete_value": true,
      "site": "00796310",
      "value": [
        "LOAD",
        "16",
        [
          [
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
      "00796308",
      "READ",
      [
        "storage",
        "002b7f26",
        null,
        "string"
      ]
    ],
    [
      "0079632c",
      "READ",
      [
        "storage",
        "002b7f39",
        null,
        "string"
      ]
    ],
    [
      "0079634c",
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
      "00796308",
      "READ",
      [
        "storage",
        "002b7f66",
        null,
        "string"
      ]
    ],
    [
      "0079632c",
      "READ",
      [
        "storage",
        "002b7f79",
        null,
        "string"
      ]
    ],
    [
      "0079634c",
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
- 00796348 ["COPY", "tmp:0:8", ["const:f5d:8"]]
- 00796348 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 00796348 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 00796348 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 007963a0 ["COPY", "tmp:0:8", ["const:f10:8"]]
+ 007963a0 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 007963a0 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 007963a0 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
- 00796368 ["COPY", "tmp:0:8", ["const:f09:8"]]
- 00796368 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 00796368 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 00796368 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 007963c0 ["COPY", "tmp:0:8", ["const:ebc:8"]]
+ 007963c0 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 007963c0 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 007963c0 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
- 007963d4 ["INT_ADD", "register:40f0:8", ["const:7963d4:8", "const:4:8"]]
- 007963d4 ["CALL", null, ["callee:0043b838:8"]]
+ 0079642c ["INT_ADD", "register:40f0:8", ["const:79642c:8", "const:4:8"]]
+ 0079642c ["CALL", null, ["callee:0043b838:8"]]
~~~


<a id="compare-57625f388f57d29aa34d376917bb3b1e"></a>

### [`00796634`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00796/00796634.md) → [`0079668c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00796/0079668c.md) FUN_0079668c

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00796604`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00796/00796604.md) · 呼出先 11件 [`0043bb20`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043bb20.md) [`00442930`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00442/00442930.md) [`0046d490`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0046d/0046d490.md) [`00764384`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00764/00764384.md) [`00796fcc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00796/00796fcc.md)
- 新版 呼出元 1件 [`0079665c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00796/0079665c.md) · 呼出先 11件 [`0043bb60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bb60.md) [`00442970`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00442/00442970.md) [`0046d4d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046d/0046d4d0.md) [`007643dc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00764/007643dc.md) [`00797024`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00797/00797024.md)

変更の種類 call, call_argument_candidate, call_target, constant, operands_and_dependencies

命令の説明率　旧版 98.50% / 新版 98.50%

優先判定に残った影響 `call_argument_candidate` 3件, `call_target` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00796834",
      "incomplete_value": false,
      "site": "00796838",
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
      "definition_site": "007967dc",
      "incomplete_value": false,
      "site": "007967e0",
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
  },
  {
    "confidence": "limited",
    "kind": "call_target",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "00796870",
      "value": [
        "leaf",
        "ram:7643dc:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "00796818",
      "value": [
        "leaf",
        "ram:764384:8"
      ]
    },
    "ordinal": 8,
    "slot": 0
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00796884",
      "incomplete_value": false,
      "site": "00796898",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:ca8000:8"
          ],
          [
            "leaf",
            "const:8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0079682c",
      "incomplete_value": false,
      "site": "00796840",
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
            "const:f08:8"
          ]
        ]
      ]
    },
    "ordinal": 9,
    "slot": 3
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "00796834",
      "PARAM",
      [
        "storage",
        "002a01bd",
        null,
        "string"
      ]
    ],
    [
      "00796870",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "00764384"
      ]
    ],
    [
      "00796884",
      "PARAM",
      [
        "storage",
        "00ca7f08",
        null,
        "undefined1"
      ]
    ]
  ],
  "added": [
    [
      "00796834",
      "PARAM",
      [
        "storage",
        "002a0170",
        null,
        "string"
      ]
    ],
    [
      "00796870",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "007643dc"
      ]
    ],
    [
      "00796884",
      "PARAM",
      [
        "storage",
        "00ca8008",
        null,
        "undefined1"
      ]
    ]
  ]
}
~~~


~~~diff
- 007967e0 ["INT_ADD", "register:40f0:8", ["const:7967e0:8", "const:4:8"]]
- 007967e0 ["CALL", null, ["callee:00442970:8"]]
+ 00796838 ["INT_ADD", "register:40f0:8", ["const:796838:8", "const:4:8"]]
+ 00796838 ["CALL", null, ["callee:00442970:8"]]
- 00796818 ["INT_ADD", "register:40f0:8", ["const:796818:8", "const:4:8"]]
- 00796818 ["CALL", null, ["ram:764384:8"]]
+ 00796870 ["INT_ADD", "register:40f0:8", ["const:796870:8", "const:4:8"]]
+ 00796870 ["CALL", null, ["ram:7643dc:8"]]
- 00796840 ["INT_ADD", "register:40f0:8", ["const:796840:8", "const:4:8"]]
- 00796840 ["CALL", null, ["callee:00aadfe8:8"]]
+ 00796898 ["INT_ADD", "register:40f0:8", ["const:796898:8", "const:4:8"]]
+ 00796898 ["CALL", null, ["callee:00aadfe8:8"]]
~~~


<a id="compare-8049d57436294a4e8866715d71275c43"></a>

### [`00796af8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00796/00796af8.md) → [`00796b50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00796/00796b50.md) FUN_00796b50

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`00796604`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00796/00796604.md) · 呼出先 7件 [`00784280`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00784/00784280.md) [`008783f0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00878/008783f0.md) [`0087929c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00879/0087929c.md) [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md) [`00c5a830`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5a830.md)
- 新版 呼出元 1件 [`0079665c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00796/0079665c.md) · 呼出先 7件 [`007842d8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00784/007842d8.md) [`00878448`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00878/00878448.md) [`008792f4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00879/008792f4.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md) [`00c5a900`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5a900.md)

変更の種類 call_argument_candidate, comparison, comparison_count, constant, operands_and_dependencies, operation_sequence, store_value

命令の説明率　旧版 88.79% / 新版 88.79%

優先判定に残った影響 `call_argument_candidate` 2件, `store_value` 10件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "00796b8c",
      "incomplete_value": false,
      "site": "00796b94",
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
            "const:344:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00796b34",
      "incomplete_value": false,
      "site": "00796b3c",
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
            "const:398:8"
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
      "definition_site": "00796bb4",
      "incomplete_value": false,
      "site": "00796bbc",
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
            "const:98:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00796b5c",
      "incomplete_value": false,
      "site": "00796b64",
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
            "const:67:8"
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
      "definition_site": "00796c10",
      "incomplete_value": false,
      "site": "00796c18",
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
            "const:47f:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00796bb8",
      "incomplete_value": false,
      "site": "00796bc0",
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
            "const:4cc:8"
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
      "00796b94",
      "DATA",
      [
        "storage",
        "002b9398",
        null,
        "string"
      ]
    ],
    [
      "00796bbc",
      "DATA",
      [
        "storage",
        "002b4067",
        null,
        "string"
      ]
    ],
    [
      "00796c00",
      "PARAM",
      [
        "storage",
        "00ca7f08",
        null,
        "undefined1"
      ]
    ]
  ],
  "added": [
    [
      "00796b94",
      "DATA",
      [
        "storage",
        "002b9344",
        null,
        "string"
      ]
    ],
    [
      "00796bbc",
      "DATA",
      [
        "storage",
        "002b4098",
        null,
        "string"
      ]
    ],
    [
      "00796c00",
      "PARAM",
      [
        "storage",
        "00ca8008",
        null,
        "undefined1"
      ]
    ]
  ]
}
~~~


~~~diff
- 00796bb0 ["INT_ADD", "register:40f0:8", ["const:796bb0:8", "const:4:8"]]
- 00796bb0 ["CALL", null, ["callee:007842d8:8"]]
+ 00796c08 ["INT_ADD", "register:40f0:8", ["const:796c08:8", "const:4:8"]]
+ 00796c08 ["CALL", null, ["callee:007842d8:8"]]
- 00796c08 ["INT_ADD", "register:40f0:8", ["const:796c08:8", "const:4:8"]]
- 00796c08 ["CALL", null, ["callee:00c5a9c0:8"]]
+ 00796c60 ["INT_ADD", "register:40f0:8", ["const:796c60:8", "const:4:8"]]
+ 00796c60 ["CALL", null, ["callee:00c5a9c0:8"]]
- 00796c9c ["INT_ADD", "register:40f0:8", ["const:796c9c:8", "const:4:8"]]
- 00796c9c ["CALL", null, ["callee:008792f4:8"]]
+ 00796cf4 ["INT_ADD", "register:40f0:8", ["const:796cf4:8", "const:4:8"]]
+ 00796cf4 ["CALL", null, ["callee:008792f4:8"]]
~~~


<a id="compare-dcd3c4533964d8f8fd5057e9db6ee9fa"></a>

### [`00796fcc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00796/00796fcc.md) → [`00797024`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00797/00797024.md) FUN_00797024

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`00796634`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00796/00796634.md) · 呼出先 14件 [`0048792c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00487/0048792c.md) [`00487a64`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00487/00487a64.md) [`00487e20`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00487/00487e20.md) [`00488658`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00488/00488658.md) [`0048ce54`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0048c/0048ce54.md)
- 新版 呼出元 1件 [`0079668c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00796/0079668c.md) · 呼出先 14件 [`0048796c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00487/0048796c.md) [`00487aa4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00487/00487aa4.md) [`00487e60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00487/00487e60.md) [`00488698`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00488/00488698.md) [`0048ce94`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048c/0048ce94.md)

変更の種類 constant, operands_and_dependencies, store_destination, store_value

命令の説明率　旧版 90.08% / 新版 90.08%

優先判定に残った影響 `store_destination` 1件, `store_value` 4件

アドレスに依存する影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "00797058",
      "incomplete_value": false,
      "site": "00797060",
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
      "definition_site": "00797000",
      "incomplete_value": false,
      "site": "00797008",
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
      "definition_site": "00797190",
      "incomplete_value": true,
      "site": "00797194",
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
      "definition_site": "00797138",
      "incomplete_value": true,
      "site": "0079713c",
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
      "definition_site": "0079718c",
      "incomplete_value": true,
      "site": "00797198",
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
      "definition_site": "00797134",
      "incomplete_value": true,
      "site": "00797140",
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
      "00797060",
      "DATA",
      [
        "storage",
        "00c64d38",
        null,
        "undefined *"
      ]
    ],
    [
      "00797088",
      "PARAM",
      [
        "storage",
        "00ca7ef0",
        null,
        null
      ]
    ],
    [
      "00797124",
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
      "00797060",
      "DATA",
      [
        "storage",
        "00c64e08",
        null,
        "undefined *"
      ]
    ],
    [
      "00797088",
      "PARAM",
      [
        "storage",
        "00ca7ff0",
        null,
        null
      ]
    ],
    [
      "00797124",
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
- 00797108 ["INT_ADD", "register:40f0:8", ["const:797108:8", "const:4:8"]]
- 00797108 ["CALL", null, ["callee:00488698:8"]]
+ 00797160 ["INT_ADD", "register:40f0:8", ["const:797160:8", "const:4:8"]]
+ 00797160 ["CALL", null, ["callee:00488698:8"]]
- 00797198 ["INT_ADD", "register:40f0:8", ["const:797198:8", "const:4:8"]]
- 00797198 ["CALL", null, ["callee:00c57f80:8"]]
+ 007971f0 ["INT_ADD", "register:40f0:8", ["const:7971f0:8", "const:4:8"]]
+ 007971f0 ["CALL", null, ["callee:00c57f80:8"]]
- 00796ff8 ["INT_ADD", "register:40f0:8", ["const:796ff8:8", "const:4:8"]]
- 00796ff8 ["CALL", null, ["callee:00487e60:8"]]
+ 00797050 ["INT_ADD", "register:40f0:8", ["const:797050:8", "const:4:8"]]
+ 00797050 ["CALL", null, ["callee:00487e60:8"]]
~~~


<a id="compare-4b12c3c2006a22c2df9e0fe117bd5efe"></a>

### [`00797294`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00797/00797294.md) → [`007972ec`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00797/007972ec.md) _INIT_140

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 7件 [`0043ae70`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043a/0043ae70.md) [`0043b7f8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043b7f8.md) [`00bc47f0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bc4/00bc47f0.md) [`00c57e30`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e30.md) [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md)
- 新版 呼出元 0件  · 呼出先 7件 [`0043aeb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043a/0043aeb0.md) [`0043b838`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b838.md) [`00bc488c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bc4/00bc488c.md) [`00c57f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f00.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies, operation_sequence, store_destination, store_value

命令の説明率　旧版 81.25% / 新版 81.25%

優先判定に残った影響 `call_argument_candidate` 6件, `store_destination` 4件, `store_value` 7件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "0079738c",
      "incomplete_value": true,
      "site": "007973a4",
      "value": [
        "LOAD",
        "16",
        [
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
                "const:f15:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00797334",
      "incomplete_value": true,
      "site": "0079734c",
      "value": [
        "LOAD",
        "16",
        [
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
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "007973a8",
      "incomplete_value": true,
      "site": "007973c4",
      "value": [
        "LOAD",
        "16",
        [
          [
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
      "definition_site": "00797350",
      "incomplete_value": true,
      "site": "0079736c",
      "value": [
        "LOAD",
        "16",
        [
          [
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
      "definition_site": "007973e8",
      "incomplete_value": true,
      "site": "0079742c",
      "value": [
        "LOAD",
        "16",
        [
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
                "const:ebc:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00797390",
      "incomplete_value": true,
      "site": "007973d4",
      "value": [
        "LOAD",
        "16",
        [
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
      "00797328",
      "READ",
      [
        "storage",
        "002b7f26",
        null,
        "string"
      ]
    ],
    [
      "0079734c",
      "READ",
      [
        "storage",
        "002b7f39",
        null,
        "string"
      ]
    ],
    [
      "0079736c",
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
      "00797328",
      "READ",
      [
        "storage",
        "002b7f66",
        null,
        "string"
      ]
    ],
    [
      "0079734c",
      "READ",
      [
        "storage",
        "002b7f79",
        null,
        "string"
      ]
    ],
    [
      "0079736c",
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
- 007974b4 ["COPY", "tmp:0:8", ["const:f90:8"]]
- 007974b4 ["INT_CARRY", "register:105:1", ["register:4098:8", "tmp:0:8"]]
- 007974b4 ["INT_SCARRY", "register:106:1", ["register:4098:8", "tmp:0:8"]]
- 007974b4 ["INT_ADD", "tmp:1:8", ["register:4098:8", "tmp:0:8"]]
+ 0079750c ["COPY", "tmp:0:8", ["const:60:8"]]
+ 0079750c ["INT_CARRY", "register:105:1", ["register:4098:8", "tmp:0:8"]]
+ 0079750c ["INT_SCARRY", "register:106:1", ["register:4098:8", "tmp:0:8"]]
+ 0079750c ["INT_ADD", "tmp:1:8", ["register:4098:8", "tmp:0:8"]]
- 007974c4 ["COPY", "tmp:0:8", ["const:ed8:8"]]
- 007974c4 ["INT_CARRY", "register:105:1", ["register:4008:8", "tmp:0:8"]]
- 007974c4 ["INT_SCARRY", "register:106:1", ["register:4008:8", "tmp:0:8"]]
- 007974c4 ["INT_ADD", "tmp:1:8", ["register:4008:8", "tmp:0:8"]]
+ 0079751c ["COPY", "tmp:0:8", ["const:fd8:8"]]
+ 0079751c ["INT_CARRY", "register:105:1", ["register:4008:8", "tmp:0:8"]]
+ 0079751c ["INT_SCARRY", "register:106:1", ["register:4008:8", "tmp:0:8"]]
+ 0079751c ["INT_ADD", "tmp:1:8", ["register:4008:8", "tmp:0:8"]]
- 007974cc ["INT_ADD", "register:40f0:8", ["const:7974cc:8", "const:4:8"]]
- 007974cc ["CALL", null, ["callee:00c57f00:8"]]
+ 00797524 ["INT_ADD", "register:40f0:8", ["const:797524:8", "const:4:8"]]
+ 00797524 ["CALL", null, ["callee:00c57f00:8"]]
~~~


<a id="compare-a07861576fd4a550f18b7442b35f3b07"></a>

### [`007976a0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00797/007976a0.md) → [`007976f8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00797/007976f8.md) _INIT_141

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
      "definition_site": "00797734",
      "incomplete_value": true,
      "site": "00797750",
      "value": [
        "LOAD",
        "16",
        [
          [
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
      "definition_site": "007976dc",
      "incomplete_value": true,
      "site": "007976f8",
      "value": [
        "LOAD",
        "16",
        [
          [
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
      "definition_site": "007977b4",
      "incomplete_value": true,
      "site": "007977d0",
      "value": [
        "LOAD",
        "16",
        [
          [
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
      "definition_site": "0079775c",
      "incomplete_value": true,
      "site": "00797778",
      "value": [
        "LOAD",
        "16",
        [
          [
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
      "definition_site": "007977d4",
      "incomplete_value": true,
      "site": "007977f0",
      "value": [
        "LOAD",
        "16",
        [
          [
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
      "definition_site": "0079777c",
      "incomplete_value": true,
      "site": "00797798",
      "value": [
        "LOAD",
        "16",
        [
          [
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
      "00797734",
      "READ",
      [
        "storage",
        "002b7f26",
        null,
        "string"
      ]
    ],
    [
      "00797758",
      "READ",
      [
        "storage",
        "002b7f39",
        null,
        "string"
      ]
    ],
    [
      "00797778",
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
      "00797734",
      "READ",
      [
        "storage",
        "002b7f66",
        null,
        "string"
      ]
    ],
    [
      "00797758",
      "READ",
      [
        "storage",
        "002b7f79",
        null,
        "string"
      ]
    ],
    [
      "00797778",
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
- 007978d4 ["INT_ADD", "register:40f0:8", ["const:7978d4:8", "const:4:8"]]
- 007978d4 ["CALL", null, ["callee:00c57f00:8"]]
+ 0079792c ["INT_ADD", "register:40f0:8", ["const:79792c:8", "const:4:8"]]
+ 0079792c ["CALL", null, ["callee:00c57f00:8"]]
- 007976c8 ["COPY", "register:4098:8", ["const:ca7000:8"]]
+ 00797720 ["COPY", "register:4098:8", ["const:ca8000:8"]]
- 007976cc ["COPY", "tmp:0:8", ["const:f20:8"]]
- 007976cc ["INT_CARRY", "register:105:1", ["register:4098:8", "tmp:0:8"]]
- 007976cc ["INT_SCARRY", "register:106:1", ["register:4098:8", "tmp:0:8"]]
- 007976cc ["INT_ADD", "tmp:1:8", ["register:4098:8", "tmp:0:8"]]
+ 00797724 ["COPY", "tmp:0:8", ["const:20:8"]]
+ 00797724 ["INT_CARRY", "register:105:1", ["register:4098:8", "tmp:0:8"]]
+ 00797724 ["INT_SCARRY", "register:106:1", ["register:4098:8", "tmp:0:8"]]
+ 00797724 ["INT_ADD", "tmp:1:8", ["register:4098:8", "tmp:0:8"]]
~~~


<a id="compare-5ef6b9efac8cad97a59b26182cd5cb9a"></a>

### [`00798060`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00798/00798060.md) → [`007980b8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00798/007980b8.md) FUN_007980b8

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`00a8e5b4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a8e/00a8e5b4.md) · 呼出先 10件 [`0048ce54`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0048c/0048ce54.md) [`0079d3f8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0079d/0079d3f8.md) [`0079d3fc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0079d/0079d3fc.md) [`007a074c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007a0/007a074c.md) [`007a0784`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007a0/007a0784.md)
- 新版 呼出元 1件 [`00a8e624`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a8e/00a8e624.md) · 呼出先 10件 [`0048ce94`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048c/0048ce94.md) [`0079d450`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0079d/0079d450.md) [`0079d454`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0079d/0079d454.md) [`007a07a4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007a0/007a07a4.md) [`007a07dc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007a0/007a07dc.md)

変更の種類 constant, operands_and_dependencies, operation_sequence, store_value

命令の説明率　旧版 88.89% / 新版 88.89%

優先判定に残った影響 `store_value` 4件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "0079811c",
      "incomplete_value": true,
      "site": "00798130",
      "value": [
        "LOAD",
        "16",
        [
          [
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
      "definition_site": "007980c4",
      "incomplete_value": true,
      "site": "007980d8",
      "value": [
        "LOAD",
        "16",
        [
          [
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
      "definition_site": "00798128",
      "incomplete_value": true,
      "site": "00798138",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:bc2:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "007980d0",
      "incomplete_value": true,
      "site": "007980e0",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:c1e:8"
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
      "definition_site": "00798128",
      "incomplete_value": true,
      "site": "00798138",
      "value": [
        "LOAD",
        "16",
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
      "definition_site": "007980d0",
      "incomplete_value": true,
      "site": "007980e0",
      "value": [
        "LOAD",
        "16",
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
      "0079811c",
      "READ",
      [
        "storage",
        "002c32a0",
        null,
        null
      ]
    ],
    [
      "00798128",
      "READ",
      [
        "storage",
        "002aec1e",
        null,
        "string"
      ]
    ],
    [
      "00798128",
      "READ",
      [
        "storage",
        "002aec2e",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "0079811c",
      "READ",
      [
        "storage",
        "002c32e0",
        null,
        null
      ]
    ],
    [
      "00798128",
      "READ",
      [
        "storage",
        "002aebc2",
        null,
        "string"
      ]
    ],
    [
      "00798128",
      "READ",
      [
        "storage",
        "002aebd2",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 007980b4 ["INT_ADD", "register:40f0:8", ["const:7980b4:8", "const:4:8"]]
- 007980b4 ["CALL", null, ["callee:00c57f60:8"]]
+ 0079810c ["INT_ADD", "register:40f0:8", ["const:79810c:8", "const:4:8"]]
+ 0079810c ["CALL", null, ["callee:00c57f60:8"]]
- 00798130 ["INT_ADD", "register:40f0:8", ["const:798130:8", "const:4:8"]]
- 00798130 ["CALL", null, ["callee:008bad20:8"]]
+ 00798188 ["INT_ADD", "register:40f0:8", ["const:798188:8", "const:4:8"]]
+ 00798188 ["CALL", null, ["callee:008bad20:8"]]
- 00798138 ["INT_ADD", "register:40f0:8", ["const:798138:8", "const:4:8"]]
- 00798138 ["CALL", null, ["callee:008b98b0:8"]]
+ 00798190 ["INT_ADD", "register:40f0:8", ["const:798190:8", "const:4:8"]]
+ 00798190 ["CALL", null, ["callee:008b98b0:8"]]
~~~


<a id="compare-beec717ee45031cbf562b6cedf9a3512"></a>

### [`00798214`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00798/00798214.md) → [`0079826c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00798/0079826c.md) FUN_0079826c

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`0089788c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00897/0089788c.md) · 呼出先 10件 [`0043bb20`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043bb20.md) [`0048ce54`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0048c/0048ce54.md) [`00540d7c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00540/00540d7c.md) [`007a074c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007a0/007a074c.md) [`007a0784`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007a0/007a0784.md)
- 新版 呼出元 1件 [`008978e4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00897/008978e4.md) · 呼出先 10件 [`0043bb60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bb60.md) [`0048ce94`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048c/0048ce94.md) [`00540dbc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00540/00540dbc.md) [`007a07a4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007a0/007a07a4.md) [`007a07dc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007a0/007a07dc.md)

変更の種類 constant, operands_and_dependencies, operation_sequence, store_value

命令の説明率　旧版 95.62% / 新版 95.62%

優先判定に残った影響 `store_value` 12件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "007982e0",
      "incomplete_value": true,
      "site": "007982f0",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:9e:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00798288",
      "incomplete_value": true,
      "site": "00798298",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:6d:8"
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
      "definition_site": "007982f4",
      "incomplete_value": true,
      "site": "007982f4",
      "value": [
        "LOAD",
        "8",
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
      "definition_site": "0079829c",
      "incomplete_value": true,
      "site": "0079829c",
      "value": [
        "LOAD",
        "8",
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
      "definition_site": "007982e8",
      "incomplete_value": true,
      "site": "007982f8",
      "value": [
        "LOAD",
        "16",
        [
          [
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
      "definition_site": "00798290",
      "incomplete_value": true,
      "site": "007982a0",
      "value": [
        "LOAD",
        "16",
        [
          [
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
      "007982e0",
      "READ",
      [
        "storage",
        "002b406d",
        null,
        "string"
      ]
    ],
    [
      "007982e4",
      "READ",
      [
        "storage",
        "002b407c",
        null,
        "string"
      ]
    ],
    [
      "007982e8",
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
      "007982e0",
      "READ",
      [
        "storage",
        "002b409e",
        null,
        "string"
      ]
    ],
    [
      "007982e4",
      "READ",
      [
        "storage",
        "002b40ad",
        null,
        "string"
      ]
    ],
    [
      "007982e8",
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
- 007982f4 ["INT_ADD", "register:40f0:8", ["const:7982f4:8", "const:4:8"]]
- 007982f4 ["CALL", null, ["callee:00c57f80:8"]]
+ 0079834c ["INT_ADD", "register:40f0:8", ["const:79834c:8", "const:4:8"]]
+ 0079834c ["CALL", null, ["callee:00c57f80:8"]]
- 007983c4 ["INT_ADD", "register:40f0:8", ["const:7983c4:8", "const:4:8"]]
- 007983c4 ["CALL", null, ["callee:0043bb60:8"]]
+ 0079841c ["INT_ADD", "register:40f0:8", ["const:79841c:8", "const:4:8"]]
+ 0079841c ["CALL", null, ["callee:0043bb60:8"]]
- 00798474 ["INT_ADD", "register:40f0:8", ["const:798474:8", "const:4:8"]]
- 00798474 ["CALL", null, ["callee:00c57f80:8"]]
+ 007984cc ["INT_ADD", "register:40f0:8", ["const:7984cc:8", "const:4:8"]]
+ 007984cc ["CALL", null, ["callee:00c57f80:8"]]
~~~


<a id="compare-5ce22b47ea5884f2faeec6accbbd0b1a"></a>

### [`00798ea0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00798/00798ea0.md) → [`00798ef8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00798/00798ef8.md) FUN_00798ef8

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`0089788c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00897/0089788c.md) · 呼出先 31件 [`0043bb20`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043bb20.md) [`0045179c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00451/0045179c.md) [`004519d8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00451/004519d8.md) [`004593f0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00459/004593f0.md) [`0045982c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00459/0045982c.md)
- 新版 呼出元 1件 [`008978e4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00897/008978e4.md) · 呼出先 31件 [`0043bb60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bb60.md) [`004517dc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00451/004517dc.md) [`00451a18`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00451/00451a18.md) [`00459430`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00459/00459430.md) [`0045986c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00459/0045986c.md)

変更の種類 constant, operands_and_dependencies, operation_sequence, store_value

命令の説明率　旧版 91.96% / 新版 91.96%

優先判定に残った影響 `store_value` 19件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "00798f3c",
      "incomplete_value": false,
      "site": "00798f48",
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
      "definition_site": "00798ee4",
      "incomplete_value": false,
      "site": "00798ef0",
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
      "definition_site": "00798f78",
      "incomplete_value": true,
      "site": "00798f84",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:e40:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00798f20",
      "incomplete_value": true,
      "site": "00798f2c",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:e00:8"
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
      "definition_site": "00798f74",
      "incomplete_value": true,
      "site": "00798f88",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:a54:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00798f1c",
      "incomplete_value": true,
      "site": "00798f30",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:ab0:8"
              ]
            ]
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
      "00798f48",
      "DATA",
      [
        "storage",
        "00c63ae0",
        null,
        "pointer"
      ]
    ],
    [
      "00798f74",
      "READ",
      [
        "storage",
        "002a6ab0",
        null,
        "string"
      ]
    ],
    [
      "00798f74",
      "READ",
      [
        "storage",
        "002a6ac0",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "00798f48",
      "DATA",
      [
        "storage",
        "00c63bb0",
        null,
        "pointer"
      ]
    ],
    [
      "00798f74",
      "READ",
      [
        "storage",
        "002a6a54",
        null,
        "string"
      ]
    ],
    [
      "00798f74",
      "READ",
      [
        "storage",
        "002a6a64",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 00798ed8 ["INT_ADD", "register:40f0:8", ["const:798ed8:8", "const:4:8"]]
- 00798ed8 ["CALL", null, ["callee:00c57f60:8"]]
+ 00798f30 ["INT_ADD", "register:40f0:8", ["const:798f30:8", "const:4:8"]]
+ 00798f30 ["CALL", null, ["callee:00c57f60:8"]]
- 00798f5c ["COPY", "tmp:0:8", ["const:6b:8"]]
- 00798f5c ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 00798f5c ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 00798f5c ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 00798fb4 ["COPY", "tmp:0:8", ["const:9a:8"]]
+ 00798fb4 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 00798fb4 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 00798fb4 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
- 00798f84 ["INT_ADD", "register:40f0:8", ["const:798f84:8", "const:4:8"]]
- 00798f84 ["CALL", null, ["callee:004517dc:8"]]
+ 00798fdc ["INT_ADD", "register:40f0:8", ["const:798fdc:8", "const:4:8"]]
+ 00798fdc ["CALL", null, ["callee:004517dc:8"]]
~~~


<a id="compare-471cc713725475dbc6151541d87fae21"></a>

### [`00799c94`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00799/00799c94.md) → [`00799cec`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00799/00799cec.md) FUN_00799cec

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`0079b9c4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0079b/0079b9c4.md) · 呼出先 15件 [`0043bb20`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043bb20.md) [`0043bba4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043bba4.md) [`00442930`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00442/00442930.md) [`00540d7c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00540/00540d7c.md) [`005a42a0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005a4/005a42a0.md)
- 新版 呼出元 1件 [`0079ba1c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0079b/0079ba1c.md) · 呼出先 15件 [`0043bb60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bb60.md) [`0043bbe4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bbe4.md) [`00442970`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00442/00442970.md) [`00540dbc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00540/00540dbc.md) [`005a42e0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005a4/005a42e0.md)

変更の種類 call, call_argument_candidate, call_target, constant, operands_and_dependencies

命令の説明率　旧版 98.19% / 新版 98.19%

優先判定に残った影響 `call_argument_candidate` 3件, `call_target` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_target",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "00799ec8",
      "value": [
        "leaf",
        "ram:71bf30:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "00799e70",
      "value": [
        "leaf",
        "ram:71bed8:8"
      ]
    },
    "ordinal": 4,
    "slot": 0
  },
  {
    "confidence": "limited",
    "kind": "call_target",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "0079a00c",
      "value": [
        "leaf",
        "ram:71bf30:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "00799fb4",
      "value": [
        "leaf",
        "ram:71bed8:8"
      ]
    },
    "ordinal": 8,
    "slot": 0
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "0079a540",
      "incomplete_value": false,
      "site": "0079a544",
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
      "definition_site": "0079a4e8",
      "incomplete_value": false,
      "site": "0079a4ec",
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
    "ordinal": 32,
    "slot": 1
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "00799ec8",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0071bed8"
      ]
    ],
    [
      "0079a00c",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0071bed8"
      ]
    ],
    [
      "0079a520",
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
      "00799ec8",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0071bf30"
      ]
    ],
    [
      "0079a00c",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0071bf30"
      ]
    ],
    [
      "0079a520",
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
- 00799e70 ["INT_ADD", "register:40f0:8", ["const:799e70:8", "const:4:8"]]
- 00799e70 ["CALL", null, ["ram:71bed8:8"]]
+ 00799ec8 ["INT_ADD", "register:40f0:8", ["const:799ec8:8", "const:4:8"]]
+ 00799ec8 ["CALL", null, ["ram:71bf30:8"]]
- 00799fb4 ["INT_ADD", "register:40f0:8", ["const:799fb4:8", "const:4:8"]]
- 00799fb4 ["CALL", null, ["ram:71bed8:8"]]
+ 0079a00c ["INT_ADD", "register:40f0:8", ["const:79a00c:8", "const:4:8"]]
+ 0079a00c ["CALL", null, ["ram:71bf30:8"]]
- 0079a4ec ["INT_ADD", "register:40f0:8", ["const:79a4ec:8", "const:4:8"]]
- 0079a4ec ["CALL", null, ["callee:00442970:8"]]
+ 0079a544 ["INT_ADD", "register:40f0:8", ["const:79a544:8", "const:4:8"]]
+ 0079a544 ["CALL", null, ["callee:00442970:8"]]
~~~


<a id="compare-3efb79c7de566b7ae14e55c62347444f"></a>

### [`0079a840`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0079a/0079a840.md) → [`0079a898`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0079a/0079a898.md) FUN_0079a898

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `bounded` · 参照 `changed`

- 旧版 呼出元 2件 [`0088c120`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0088c/0088c120.md) [`00a8d008`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a8d/00a8d008.md) · 呼出先 6件 [`0079a990`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0079a/0079a990.md) [`0079d85c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0079d/0079d85c.md) [`0079d860`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0079d/0079d860.md) [`0079d8e4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0079d/0079d8e4.md) [`0079d8e8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0079d/0079d8e8.md)
- 新版 呼出元 2件 [`0088c178`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0088c/0088c178.md) [`00a8a488`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a8a/00a8a488.md) · 呼出先 6件 [`0079a9e8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0079a/0079a9e8.md) [`0079d8b4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0079d/0079d8b4.md) [`0079d8b8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0079d/0079d8b8.md) [`0079d93c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0079d/0079d93c.md) [`0079d940`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0079d/0079d940.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 94.34% / 新版 94.34%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "0079a8c0",
      "incomplete_value": false,
      "site": "0079a8c0",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c79000:8"
          ],
          [
            "leaf",
            "const:e38:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0079a868",
      "incomplete_value": false,
      "site": "0079a868",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c79000:8"
          ],
          [
            "leaf",
            "const:d68:8"
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
      "0079a8c0",
      "DATA",
      [
        "storage",
        "00c79d68",
        null,
        "undefined *"
      ]
    ],
    [
      "0079a8d8",
      "DATA",
      [
        "storage",
        "00c79de8",
        null,
        "undefined *"
      ]
    ],
    [
      "0079a910",
      "READ",
      [
        "storage",
        "00c79e08",
        null,
        "pointer"
      ]
    ]
  ],
  "added": [
    [
      "0079a8c0",
      "DATA",
      [
        "storage",
        "00c79e38",
        null,
        "undefined *"
      ]
    ],
    [
      "0079a8d8",
      "DATA",
      [
        "storage",
        "00c79eb8",
        null,
        "undefined *"
      ]
    ],
    [
      "0079a910",
      "READ",
      [
        "storage",
        "00c79ed8",
        null,
        "pointer"
      ]
    ]
  ]
}
~~~


~~~diff
- 0079a864 ["COPY", "tmp:0:8", ["const:d68:8"]]
- 0079a864 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 0079a864 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 0079a864 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 0079a8bc ["COPY", "tmp:0:8", ["const:e38:8"]]
+ 0079a8bc ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 0079a8bc ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 0079a8bc ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 0079a878 ["COPY", "tmp:0:8", ["const:de8:8"]]
- 0079a878 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 0079a878 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 0079a878 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 0079a8d0 ["COPY", "tmp:0:8", ["const:eb8:8"]]
+ 0079a8d0 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 0079a8d0 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 0079a8d0 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 0079a890 ["INT_ADD", "register:40f0:8", ["const:79a890:8", "const:4:8"]]
- 0079a890 ["CALL", null, ["callee:0079a9e8:8"]]
+ 0079a8e8 ["INT_ADD", "register:40f0:8", ["const:79a8e8:8", "const:4:8"]]
+ 0079a8e8 ["CALL", null, ["callee:0079a9e8:8"]]
~~~


<a id="compare-a9315a99b799739131537eda72d9f76a"></a>

### [`0079a990`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0079a/0079a990.md) → [`0079a9e8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0079a/0079a9e8.md) FUN_0079a9e8

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`0079a840`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0079a/0079a840.md) · 呼出先 14件 [`00598b34`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00598/00598b34.md) [`00598cf4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00598/00598cf4.md) [`0059b908`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0059b/0059b908.md) [`00795e24`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00795/00795e24.md) [`00795e5c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00795/00795e5c.md)
- 新版 呼出元 1件 [`0079a898`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0079a/0079a898.md) · 呼出先 14件 [`00598b74`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00598/00598b74.md) [`00598d34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00598/00598d34.md) [`0059b948`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0059b/0059b948.md) [`00795e7c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00795/00795e7c.md) [`00795eb4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00795/00795eb4.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 97.45% / 新版 97.45%

優先判定に残った影響 `store_value` 2件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "0079aa74",
      "incomplete_value": false,
      "site": "0079aa78",
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
      "definition_site": "0079aa1c",
      "incomplete_value": false,
      "site": "0079aa20",
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
    "ordinal": 17,
    "slot": 2
  },
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "0079acc8",
      "incomplete_value": false,
      "site": "0079acc8",
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
      "definition_site": "0079ac70",
      "incomplete_value": false,
      "site": "0079ac70",
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
      "0079aa48",
      "DATA",
      [
        "storage",
        "00c6e6b8",
        null,
        "undefined *"
      ]
    ],
    [
      "0079aa78",
      "DATA",
      [
        "storage",
        "00c6da20",
        null,
        "undefined *"
      ]
    ],
    [
      "0079ab48",
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
      "0079aa48",
      "DATA",
      [
        "storage",
        "00c6e788",
        null,
        "undefined *"
      ]
    ],
    [
      "0079aa78",
      "DATA",
      [
        "storage",
        "00c6daf0",
        null,
        "undefined *"
      ]
    ],
    [
      "0079ab48",
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
- 0079a9c4 ["INT_ADD", "register:40f0:8", ["const:79a9c4:8", "const:4:8"]]
- 0079a9c4 ["CALL", null, ["callee:00c57f60:8"]]
+ 0079aa1c ["INT_ADD", "register:40f0:8", ["const:79aa1c:8", "const:4:8"]]
+ 0079aa1c ["CALL", null, ["callee:00c57f60:8"]]
- 0079a9dc ["INT_ADD", "register:40f0:8", ["const:79a9dc:8", "const:4:8"]]
- 0079a9dc ["CALL", null, ["callee:0059b948:8"]]
+ 0079aa34 ["INT_ADD", "register:40f0:8", ["const:79aa34:8", "const:4:8"]]
+ 0079aa34 ["CALL", null, ["callee:0059b948:8"]]
- 0079a9e4 ["COPY", "tmp:0:8", ["const:6a8:8"]]
- 0079a9e4 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 0079a9e4 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 0079a9e4 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 0079aa3c ["COPY", "tmp:0:8", ["const:778:8"]]
+ 0079aa3c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 0079aa3c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 0079aa3c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-d9b120d14ce88fe2f4d2e455de74a89a"></a>

### [`0079b110`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0079b/0079b110.md) → [`0079b168`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0079b/0079b168.md) FUN_0079b168

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`0079af88`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0079a/0079af88.md) · 呼出先 9件 [`0044f8e0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0044f/0044f8e0.md) [`00452c54`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00452/00452c54.md) [`00764384`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00764/00764384.md) [`007685a4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00768/007685a4.md) [`0079d9dc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0079d/0079d9dc.md)
- 新版 呼出元 1件 [`0079afe0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0079a/0079afe0.md) · 呼出先 9件 [`0044f920`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0044f/0044f920.md) [`00452c94`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00452/00452c94.md) [`007643dc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00764/007643dc.md) [`007685fc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00768/007685fc.md) [`0079da34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0079d/0079da34.md)

変更の種類 call, call_target, constant, operands_and_dependencies, store_value

命令の説明率　旧版 94.23% / 新版 94.23%

優先判定に残った影響 `call_target` 1件, `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "0079b1ac",
      "incomplete_value": false,
      "site": "0079b1ac",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c79000:8"
          ],
          [
            "leaf",
            "const:f38:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0079b154",
      "incomplete_value": false,
      "site": "0079b154",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c79000:8"
          ],
          [
            "leaf",
            "const:e68:8"
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
      "site": "0079b190",
      "value": [
        "leaf",
        "ram:7643dc:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "0079b138",
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
      "0079b190",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "00764384"
      ]
    ],
    [
      "0079b1ac",
      "DATA",
      [
        "storage",
        "00c79e68",
        null,
        "undefined *"
      ]
    ],
    [
      "0079b1ec",
      "READ",
      [
        "storage",
        "00c79e88",
        null,
        "pointer"
      ]
    ]
  ],
  "added": [
    [
      "0079b190",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "007643dc"
      ]
    ],
    [
      "0079b1ac",
      "DATA",
      [
        "storage",
        "00c79f38",
        null,
        "undefined *"
      ]
    ],
    [
      "0079b1ec",
      "READ",
      [
        "storage",
        "00c79f58",
        null,
        "pointer"
      ]
    ]
  ]
}
~~~


~~~diff
- 0079b138 ["INT_ADD", "register:40f0:8", ["const:79b138:8", "const:4:8"]]
- 0079b138 ["CALL", null, ["ram:764384:8"]]
+ 0079b190 ["INT_ADD", "register:40f0:8", ["const:79b190:8", "const:4:8"]]
+ 0079b190 ["CALL", null, ["ram:7643dc:8"]]
- 0079b130 ["INT_ADD", "register:40f0:8", ["const:79b130:8", "const:4:8"]]
- 0079b130 ["CALL", null, ["callee:00851550:8"]]
+ 0079b188 ["INT_ADD", "register:40f0:8", ["const:79b188:8", "const:4:8"]]
+ 0079b188 ["CALL", null, ["callee:00851550:8"]]
- 0079b13c ["INT_ADD", "register:40f0:8", ["const:79b13c:8", "const:4:8"]]
- 0079b13c ["CALL", null, ["callee:00851550:8"]]
+ 0079b194 ["INT_ADD", "register:40f0:8", ["const:79b194:8", "const:4:8"]]
+ 0079b194 ["CALL", null, ["callee:00851550:8"]]
~~~


<a id="compare-012c90d8929c89b1843bcda038c3d7fe"></a>

### [`0079b280`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0079b/0079b280.md) → [`0079b2d8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0079b/0079b2d8.md) FUN_0079b2d8

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed`

- 旧版 呼出元 1件 [`0079d9e4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0079d/0079d9e4.md) · 呼出先 6件 [`0079b3cc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0079b/0079b3cc.md) [`0079db0c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0079d/0079db0c.md) [`0079db10`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0079d/0079db10.md) [`0079db90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0079d/0079db90.md) [`0079db94`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0079d/0079db94.md)
- 新版 呼出元 1件 [`0079da3c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0079d/0079da3c.md) · 呼出先 6件 [`0079b424`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0079b/0079b424.md) [`0079db64`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0079d/0079db64.md) [`0079db68`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0079d/0079db68.md) [`0079dbe8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0079d/0079dbe8.md) [`0079dbec`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0079d/0079dbec.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 92.31% / 新版 92.31%

優先判定に残った影響 `store_value` 2件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "0079b300",
      "incomplete_value": false,
      "site": "0079b300",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c79000:8"
          ],
          [
            "leaf",
            "const:fb8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0079b2a8",
      "incomplete_value": false,
      "site": "0079b2a8",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c79000:8"
          ],
          [
            "leaf",
            "const:ee8:8"
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
      "definition_site": "0079b314",
      "incomplete_value": false,
      "site": "0079b314",
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
            "const:48:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0079b2bc",
      "incomplete_value": false,
      "site": "0079b2bc",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c79000:8"
          ],
          [
            "leaf",
            "const:f78:8"
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
      "0079b300",
      "DATA",
      [
        "storage",
        "00c79ee8",
        null,
        "undefined *"
      ]
    ],
    [
      "0079b314",
      "DATA",
      [
        "storage",
        "00c79f78",
        null,
        "undefined *"
      ]
    ],
    [
      "0079b34c",
      "READ",
      [
        "storage",
        "00c79f98",
        null,
        "pointer"
      ]
    ]
  ],
  "added": [
    [
      "0079b300",
      "DATA",
      [
        "storage",
        "00c79fb8",
        null,
        "undefined *"
      ]
    ],
    [
      "0079b314",
      "DATA",
      [
        "storage",
        "00c7a048",
        null,
        "undefined *"
      ]
    ],
    [
      "0079b34c",
      "READ",
      [
        "storage",
        "00c7a068",
        null,
        "pointer"
      ]
    ]
  ]
}
~~~


~~~diff
- 0079b2a4 ["COPY", "tmp:0:8", ["const:ee8:8"]]
- 0079b2a4 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 0079b2a4 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 0079b2a4 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 0079b2fc ["COPY", "tmp:0:8", ["const:fb8:8"]]
+ 0079b2fc ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 0079b2fc ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 0079b2fc ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 0079b2b4 ["COPY", "register:4040:8", ["const:c79000:8"]]
+ 0079b30c ["COPY", "register:4040:8", ["const:c7a000:8"]]
- 0079b2b8 ["COPY", "tmp:0:8", ["const:f78:8"]]
- 0079b2b8 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 0079b2b8 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 0079b2b8 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 0079b310 ["COPY", "tmp:0:8", ["const:48:8"]]
+ 0079b310 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 0079b310 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 0079b310 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-9db3223d603605c7d2e267757b1f8117"></a>

### [`0079b3cc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0079b/0079b3cc.md) → [`0079b424`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0079b/0079b424.md) FUN_0079b424

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`0079b280`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0079b/0079b280.md) · 呼出先 14件 [`00598b34`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00598/00598b34.md) [`00598cf4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00598/00598cf4.md) [`0059b908`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0059b/0059b908.md) [`00795e24`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00795/00795e24.md) [`00795e5c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00795/00795e5c.md)
- 新版 呼出元 1件 [`0079b2d8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0079b/0079b2d8.md) · 呼出先 14件 [`00598b74`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00598/00598b74.md) [`00598d34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00598/00598d34.md) [`0059b948`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0059b/0059b948.md) [`00795e7c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00795/00795e7c.md) [`00795eb4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00795/00795eb4.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 96.35% / 新版 96.35%

優先判定に残った影響 `store_value` 4件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "0079b480",
      "incomplete_value": false,
      "site": "0079b484",
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
                "const:8f0:8"
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
      "definition_site": "0079b428",
      "incomplete_value": false,
      "site": "0079b42c",
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
                "const:820:8"
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
    "ordinal": 15,
    "slot": 2
  },
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "0079b4b0",
      "incomplete_value": false,
      "site": "0079b4b4",
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
      "definition_site": "0079b458",
      "incomplete_value": false,
      "site": "0079b45c",
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
    "ordinal": 17,
    "slot": 2
  },
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "0079b584",
      "incomplete_value": false,
      "site": "0079b584",
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
      "definition_site": "0079b52c",
      "incomplete_value": false,
      "site": "0079b52c",
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
      "0079b484",
      "DATA",
      [
        "storage",
        "00c6e830",
        null,
        "undefined *"
      ]
    ],
    [
      "0079b4b4",
      "DATA",
      [
        "storage",
        "00c6da20",
        null,
        "undefined *"
      ]
    ],
    [
      "0079b584",
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
      "0079b484",
      "DATA",
      [
        "storage",
        "00c6e900",
        null,
        "undefined *"
      ]
    ],
    [
      "0079b4b4",
      "DATA",
      [
        "storage",
        "00c6daf0",
        null,
        "undefined *"
      ]
    ],
    [
      "0079b584",
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
- 0079b584 ["COPY", "register:0:8", ["register:4040:8"]]
- 0079b584 ["INT_ADD", "register:40f0:8", ["const:79b584:8", "const:4:8"]]
- 0079b584 ["CALLIND", null, ["register:0:8"]]
+ 0079b5dc ["COPY", "register:0:8", ["register:4040:8"]]
+ 0079b5dc ["INT_ADD", "register:40f0:8", ["const:79b5dc:8", "const:4:8"]]
+ 0079b5dc ["CALLIND", null, ["register:0:8"]]
- 0079b400 ["INT_ADD", "register:40f0:8", ["const:79b400:8", "const:4:8"]]
- 0079b400 ["CALL", null, ["callee:00c57f60:8"]]
+ 0079b458 ["INT_ADD", "register:40f0:8", ["const:79b458:8", "const:4:8"]]
+ 0079b458 ["CALL", null, ["callee:00c57f60:8"]]
- 0079b418 ["INT_ADD", "register:40f0:8", ["const:79b418:8", "const:4:8"]]
- 0079b418 ["CALL", null, ["callee:0059b948:8"]]
+ 0079b470 ["INT_ADD", "register:40f0:8", ["const:79b470:8", "const:4:8"]]
+ 0079b470 ["CALL", null, ["callee:0059b948:8"]]
~~~


<a id="compare-1ca849a4511d268b530c172cabfe8bd0"></a>

### [`0079bcbc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0079b/0079bcbc.md) → [`0079bd14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0079b/0079bd14.md) FUN_0079bd14

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`0079b9c4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0079b/0079b9c4.md) · 呼出先 6件 [`0079be08`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0079b/0079be08.md) [`0079dc88`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0079d/0079dc88.md) [`0079dc8c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0079d/0079dc8c.md) [`0079dd0c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0079d/0079dd0c.md) [`0079dd10`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0079d/0079dd10.md)
- 新版 呼出元 1件 [`0079ba1c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0079b/0079ba1c.md) · 呼出先 6件 [`0079be60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0079b/0079be60.md) [`0079dce0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0079d/0079dce0.md) [`0079dce4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0079d/0079dce4.md) [`0079dd64`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0079d/0079dd64.md) [`0079dd68`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0079d/0079dd68.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 92.31% / 新版 92.31%

優先判定に残った影響 `store_value` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "0079bd3c",
      "incomplete_value": true,
      "site": "0079bd3c",
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
            "const:c8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0079bce4",
      "incomplete_value": true,
      "site": "0079bce4",
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
            "const:ff8:8"
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
      "definition_site": "0079bd50",
      "incomplete_value": false,
      "site": "0079bd50",
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
            "const:158:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0079bcf8",
      "incomplete_value": false,
      "site": "0079bcf8",
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
            "const:88:8"
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
      "0079bd3c",
      "DATA",
      [
        "storage",
        "00c79ff8",
        null,
        "undefined *"
      ]
    ],
    [
      "0079bd50",
      "DATA",
      [
        "storage",
        "00c7a088",
        null,
        "undefined *"
      ]
    ],
    [
      "0079bd88",
      "READ",
      [
        "storage",
        "00c7a0a8",
        null,
        "pointer"
      ]
    ]
  ],
  "added": [
    [
      "0079bd3c",
      "DATA",
      [
        "storage",
        "00c7a0c8",
        null,
        "undefined *"
      ]
    ],
    [
      "0079bd50",
      "DATA",
      [
        "storage",
        "00c7a158",
        null,
        "undefined *"
      ]
    ],
    [
      "0079bd88",
      "READ",
      [
        "storage",
        "00c7a178",
        null,
        "pointer"
      ]
    ]
  ]
}
~~~


~~~diff
- 0079bcdc ["COPY", "register:4040:8", ["const:c79000:8"]]
+ 0079bd34 ["COPY", "register:4040:8", ["const:c7a000:8"]]
- 0079bce0 ["COPY", "tmp:0:8", ["const:ff8:8"]]
- 0079bce0 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 0079bce0 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 0079bce0 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 0079bd38 ["COPY", "tmp:0:8", ["const:c8:8"]]
+ 0079bd38 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 0079bd38 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 0079bd38 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 0079bcf4 ["COPY", "tmp:0:8", ["const:88:8"]]
- 0079bcf4 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 0079bcf4 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 0079bcf4 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 0079bd4c ["COPY", "tmp:0:8", ["const:158:8"]]
+ 0079bd4c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 0079bd4c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 0079bd4c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-e28e50cf7261cb09720e0df4ff69757a"></a>

### [`0079be08`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0079b/0079be08.md) → [`0079be60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0079b/0079be60.md) FUN_0079be60

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`0079bcbc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0079b/0079bcbc.md) · 呼出先 15件 [`00598b34`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00598/00598b34.md) [`00598cf4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00598/00598cf4.md) [`005a1728`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005a1/005a1728.md) [`00795e24`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00795/00795e24.md) [`00795e5c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00795/00795e5c.md)
- 新版 呼出元 1件 [`0079bd14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0079b/0079bd14.md) · 呼出先 15件 [`00598b74`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00598/00598b74.md) [`00598d34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00598/00598d34.md) [`005a1768`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005a1/005a1768.md) [`00795e7c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00795/00795e7c.md) [`00795eb4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00795/00795eb4.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 98.43% / 新版 98.43%

優先判定に残った影響 `store_value` 2件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "0079bf70",
      "incomplete_value": false,
      "site": "0079bf70",
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
            "const:1d8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0079bf18",
      "incomplete_value": false,
      "site": "0079bf18",
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
            "const:108:8"
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
      "definition_site": "0079c0f0",
      "incomplete_value": false,
      "site": "0079c0f0",
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
            "const:258:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0079c098",
      "incomplete_value": false,
      "site": "0079c098",
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
            "const:188:8"
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
      "0079bf70",
      "DATA",
      [
        "storage",
        "00c7a108",
        null,
        "undefined *"
      ]
    ],
    [
      "0079c024",
      "READ",
      [
        "storage",
        "00c7a130",
        null,
        "undefined *"
      ]
    ],
    [
      "0079c0f0",
      "DATA",
      [
        "storage",
        "00c7a188",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "0079bf70",
      "DATA",
      [
        "storage",
        "00c7a1d8",
        null,
        "undefined *"
      ]
    ],
    [
      "0079c024",
      "READ",
      [
        "storage",
        "00c7a200",
        null,
        "undefined *"
      ]
    ],
    [
      "0079c0f0",
      "DATA",
      [
        "storage",
        "00c7a258",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 0079bf70 ["COPY", "register:0:8", ["register:4040:8"]]
- 0079bf70 ["INT_ADD", "register:40f0:8", ["const:79bf70:8", "const:4:8"]]
- 0079bf70 ["CALLIND", null, ["register:0:8"]]
+ 0079bfc8 ["COPY", "register:0:8", ["register:4040:8"]]
+ 0079bfc8 ["INT_ADD", "register:40f0:8", ["const:79bfc8:8", "const:4:8"]]
+ 0079bfc8 ["CALLIND", null, ["register:0:8"]]
- 0079be40 ["INT_ADD", "register:40f0:8", ["const:79be40:8", "const:4:8"]]
- 0079be40 ["CALL", null, ["callee:0079c8c4:8"]]
+ 0079be98 ["INT_ADD", "register:40f0:8", ["const:79be98:8", "const:4:8"]]
+ 0079be98 ["CALL", null, ["callee:0079c8c4:8"]]
- 0079be50 ["INT_ADD", "register:40f0:8", ["const:79be50:8", "const:4:8"]]
- 0079be50 ["CALL", null, ["callee:0079de0c:8"]]
+ 0079bea8 ["INT_ADD", "register:40f0:8", ["const:79bea8:8", "const:4:8"]]
+ 0079bea8 ["CALL", null, ["callee:0079de0c:8"]]
~~~


<a id="compare-aa135d7f03f3ca7c1f4163364bc486b2"></a>

### [`0079ca40`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0079c/0079ca40.md) → [`0079ca98`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0079c/0079ca98.md) FUN_0079ca98

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
      "definition_site": "0079cabc",
      "incomplete_value": false,
      "site": "0079cac0",
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
      "definition_site": "0079ca64",
      "incomplete_value": false,
      "site": "0079ca68",
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
      "0079cac0",
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
      "0079cac0",
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
- 0079ca5c ["COPY", "tmp:0:8", ["const:a10:8"]]
- 0079ca5c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 0079ca5c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 0079ca5c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 0079cab4 ["COPY", "tmp:0:8", ["const:ae0:8"]]
+ 0079cab4 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 0079cab4 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 0079cab4 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 0079ca74 ["INT_ADD", "register:40f0:8", ["const:79ca74:8", "const:4:8"]]
- 0079ca74 ["CALL", null, ["callee:00c57f80:8"]]
+ 0079cacc ["INT_ADD", "register:40f0:8", ["const:79cacc:8", "const:4:8"]]
+ 0079cacc ["CALL", null, ["callee:00c57f80:8"]]
- 0079ca84 ["INT_ADD", "register:40f0:8", ["const:79ca84:8", "const:4:8"]]
- 0079ca84 ["CALL", null, ["callee:00c57f80:8"]]
+ 0079cadc ["INT_ADD", "register:40f0:8", ["const:79cadc:8", "const:4:8"]]
+ 0079cadc ["CALL", null, ["callee:00c57f80:8"]]
~~~


<a id="compare-6faa0fc5b4c62f74996a58831c732d6d"></a>

### [`0079cb28`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0079c/0079cb28.md) → [`0079cb80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0079c/0079cb80.md) FUN_0079cb80

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
      "definition_site": "0079cba4",
      "incomplete_value": false,
      "site": "0079cba8",
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
      "definition_site": "0079cb4c",
      "incomplete_value": false,
      "site": "0079cb50",
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
      "0079cba8",
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
      "0079cba8",
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
- 0079cb44 ["COPY", "tmp:0:8", ["const:a10:8"]]
- 0079cb44 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 0079cb44 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 0079cb44 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 0079cb9c ["COPY", "tmp:0:8", ["const:ae0:8"]]
+ 0079cb9c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 0079cb9c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 0079cb9c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 0079cb5c ["INT_ADD", "register:40f0:8", ["const:79cb5c:8", "const:4:8"]]
- 0079cb5c ["CALL", null, ["callee:00c57f80:8"]]
+ 0079cbb4 ["INT_ADD", "register:40f0:8", ["const:79cbb4:8", "const:4:8"]]
+ 0079cbb4 ["CALL", null, ["callee:00c57f80:8"]]
- 0079cb6c ["INT_ADD", "register:40f0:8", ["const:79cb6c:8", "const:4:8"]]
- 0079cb6c ["CALL", null, ["callee:00c57f80:8"]]
+ 0079cbc4 ["INT_ADD", "register:40f0:8", ["const:79cbc4:8", "const:4:8"]]
+ 0079cbc4 ["CALL", null, ["callee:00c57f80:8"]]
~~~


<a id="compare-8e1e36af977f51776d0bd648ea35086a"></a>

### [`0079d3c4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0079d/0079d3c4.md) → [`0079d41c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0079d/0079d41c.md) FUN_0079d41c

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
      "definition_site": "0079d430",
      "incomplete_value": false,
      "site": "0079d434",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c79000:8"
          ],
          [
            "leaf",
            "const:db8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0079d3d8",
      "incomplete_value": false,
      "site": "0079d3dc",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c79000:8"
          ],
          [
            "leaf",
            "const:ce8:8"
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
      "0079d434",
      "DATA",
      [
        "storage",
        "00c79ce8",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "0079d434",
      "DATA",
      [
        "storage",
        "00c79db8",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 0079d3d0 ["INT_ADD", "register:40f0:8", ["const:79d3d0:8", "const:4:8"]]
- 0079d3d0 ["CALL", null, ["callee:00c57f60:8"]]
+ 0079d428 ["INT_ADD", "register:40f0:8", ["const:79d428:8", "const:4:8"]]
+ 0079d428 ["CALL", null, ["callee:00c57f60:8"]]
- 0079d3d8 ["COPY", "tmp:0:8", ["const:ce8:8"]]
- 0079d3d8 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 0079d3d8 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 0079d3d8 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 0079d430 ["COPY", "tmp:0:8", ["const:db8:8"]]
+ 0079d430 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 0079d430 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 0079d430 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-aca617def2fc734218362d42c9fca0e6"></a>

### [`0079d3e8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0079d/0079d3e8.md) → [`0079d440`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0079d/0079d440.md) FUN_0079d440

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
      "definition_site": "0079d444",
      "incomplete_value": false,
      "site": "0079d448",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c79000:8"
          ],
          [
            "leaf",
            "const:db8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0079d3ec",
      "incomplete_value": false,
      "site": "0079d3f0",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c79000:8"
          ],
          [
            "leaf",
            "const:ce8:8"
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
      "0079d448",
      "DATA",
      [
        "storage",
        "00c79ce8",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "0079d448",
      "DATA",
      [
        "storage",
        "00c79db8",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 0079d3ec ["COPY", "tmp:0:8", ["const:ce8:8"]]
- 0079d3ec ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 0079d3ec ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 0079d3ec ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 0079d444 ["COPY", "tmp:0:8", ["const:db8:8"]]
+ 0079d444 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 0079d444 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 0079d444 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-0ca2b92cf81ca07ca6e021f5a60cd980"></a>

### [`0079d400`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0079d/0079d400.md) → [`0079d458`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0079d/0079d458.md) FUN_0079d458

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
      "site": "0079d47c",
      "value": [
        "leaf",
        "ram:47ad34:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "0079d424",
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
      "0079d47c",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047acf4"
      ]
    ]
  ],
  "added": [
    [
      "0079d47c",
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
- 0079d424 ["INT_ADD", "register:40f0:8", ["const:79d424:8", "const:4:8"]]
- 0079d424 ["CALL", null, ["ram:47acf4:8"]]
+ 0079d47c ["INT_ADD", "register:40f0:8", ["const:79d47c:8", "const:4:8"]]
+ 0079d47c ["CALL", null, ["ram:47ad34:8"]]
- 0079d430 ["INT_ADD", "register:40f0:8", ["const:79d430:8", "const:4:8"]]
- 0079d430 ["CALL", null, ["callee:0047ce14:8"]]
+ 0079d488 ["INT_ADD", "register:40f0:8", ["const:79d488:8", "const:4:8"]]
+ 0079d488 ["CALL", null, ["callee:0047ce14:8"]]
~~~


<a id="compare-0cbaf98f8ee75568e1972936c01e1656"></a>

### [`0079d5b8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0079d/0079d5b8.md) → [`0079d610`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0079d/0079d610.md) FUN_0079d610

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`0079d470`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0079d/0079d470.md) · 呼出先 1件 [`0043b778`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043b778.md)
- 新版 呼出元 1件 [`0079d4c8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0079d/0079d4c8.md) · 呼出先 1件 [`0043b7b8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b7b8.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 80.00% / 新版 80.00%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "0079d61c",
      "incomplete_value": false,
      "site": "0079d620",
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
      "definition_site": "0079d5c4",
      "incomplete_value": false,
      "site": "0079d5c8",
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
      "0079d61c",
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
      "0079d61c",
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
- 0079d5c8 ["INT_ADD", "register:40f0:8", ["const:79d5c8:8", "const:4:8"]]
- 0079d5c8 ["CALL", null, ["callee:0043b7b8:8"]]
+ 0079d620 ["INT_ADD", "register:40f0:8", ["const:79d620:8", "const:4:8"]]
+ 0079d620 ["CALL", null, ["callee:0043b7b8:8"]]
- 0079d5c4 ["COPY", "tmp:0:8", ["const:f4c:8"]]
- 0079d5c4 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 0079d5c4 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 0079d5c4 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 0079d61c ["COPY", "tmp:0:8", ["const:f8c:8"]]
+ 0079d61c ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 0079d61c ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 0079d61c ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
~~~


<a id="compare-3bd7bbbfcc6bc718936b515b1dc22370"></a>

### [`0079d814`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0079d/0079d814.md) → [`0079d86c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0079d/0079d86c.md) FUN_0079d86c

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
      "definition_site": "0079d890",
      "incomplete_value": false,
      "site": "0079d890",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c79000:8"
          ],
          [
            "leaf",
            "const:e38:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0079d838",
      "incomplete_value": false,
      "site": "0079d838",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c79000:8"
          ],
          [
            "leaf",
            "const:d68:8"
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
      "0079d890",
      "DATA",
      [
        "storage",
        "00c79d68",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "0079d890",
      "DATA",
      [
        "storage",
        "00c79e38",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 0079d828 ["INT_ADD", "register:40f0:8", ["const:79d828:8", "const:4:8"]]
- 0079d828 ["CALL", null, ["callee:00c57f60:8"]]
+ 0079d880 ["INT_ADD", "register:40f0:8", ["const:79d880:8", "const:4:8"]]
+ 0079d880 ["CALL", null, ["callee:00c57f60:8"]]
- 0079d834 ["COPY", "tmp:0:8", ["const:d68:8"]]
- 0079d834 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 0079d834 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 0079d834 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 0079d88c ["COPY", "tmp:0:8", ["const:e38:8"]]
+ 0079d88c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 0079d88c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 0079d88c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-43b7ff419b56cbec4f2ee623e58b281f"></a>

### [`0079d848`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0079d/0079d848.md) → [`0079d8a0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0079d/0079d8a0.md) FUN_0079d8a0

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
      "definition_site": "0079d8ac",
      "incomplete_value": false,
      "site": "0079d8ac",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c79000:8"
          ],
          [
            "leaf",
            "const:e38:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0079d854",
      "incomplete_value": false,
      "site": "0079d854",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c79000:8"
          ],
          [
            "leaf",
            "const:d68:8"
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
      "0079d8ac",
      "DATA",
      [
        "storage",
        "00c79d68",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "0079d8ac",
      "DATA",
      [
        "storage",
        "00c79e38",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 0079d850 ["COPY", "tmp:0:8", ["const:d68:8"]]
- 0079d850 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 0079d850 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 0079d850 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 0079d8a8 ["COPY", "tmp:0:8", ["const:e38:8"]]
+ 0079d8a8 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 0079d8a8 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 0079d8a8 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
~~~


<a id="compare-7631992d07e95c69e1fd06bf6b1290fc"></a>

### [`0079d89c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0079d/0079d89c.md) → [`0079d8f4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0079d/0079d8f4.md) FUN_0079d8f4

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
      "definition_site": "0079d918",
      "incomplete_value": false,
      "site": "0079d918",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c79000:8"
          ],
          [
            "leaf",
            "const:eb8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0079d8c0",
      "incomplete_value": false,
      "site": "0079d8c0",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c79000:8"
          ],
          [
            "leaf",
            "const:de8:8"
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
      "0079d918",
      "DATA",
      [
        "storage",
        "00c79de8",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "0079d918",
      "DATA",
      [
        "storage",
        "00c79eb8",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 0079d8b0 ["INT_ADD", "register:40f0:8", ["const:79d8b0:8", "const:4:8"]]
- 0079d8b0 ["CALL", null, ["callee:00c57f60:8"]]
+ 0079d908 ["INT_ADD", "register:40f0:8", ["const:79d908:8", "const:4:8"]]
+ 0079d908 ["CALL", null, ["callee:00c57f60:8"]]
- 0079d8bc ["COPY", "tmp:0:8", ["const:de8:8"]]
- 0079d8bc ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 0079d8bc ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 0079d8bc ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 0079d914 ["COPY", "tmp:0:8", ["const:eb8:8"]]
+ 0079d914 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 0079d914 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 0079d914 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-6d51b5b9dc27ef17c694416d057bf505"></a>

### [`0079d8d0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0079d/0079d8d0.md) → [`0079d928`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0079d/0079d928.md) FUN_0079d928

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
      "definition_site": "0079d934",
      "incomplete_value": false,
      "site": "0079d934",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c79000:8"
          ],
          [
            "leaf",
            "const:eb8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0079d8dc",
      "incomplete_value": false,
      "site": "0079d8dc",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c79000:8"
          ],
          [
            "leaf",
            "const:de8:8"
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
      "0079d934",
      "DATA",
      [
        "storage",
        "00c79de8",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "0079d934",
      "DATA",
      [
        "storage",
        "00c79eb8",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 0079d8d8 ["COPY", "tmp:0:8", ["const:de8:8"]]
- 0079d8d8 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 0079d8d8 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 0079d8d8 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 0079d930 ["COPY", "tmp:0:8", ["const:eb8:8"]]
+ 0079d930 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 0079d930 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 0079d930 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
~~~


<a id="compare-feb2986f680c5907422d453df17c82e3"></a>

### [`0079d994`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0079d/0079d994.md) → [`0079d9ec`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0079d/0079d9ec.md) FUN_0079d9ec

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
      "definition_site": "0079da10",
      "incomplete_value": false,
      "site": "0079da10",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c79000:8"
          ],
          [
            "leaf",
            "const:f38:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0079d9b8",
      "incomplete_value": false,
      "site": "0079d9b8",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c79000:8"
          ],
          [
            "leaf",
            "const:e68:8"
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
      "0079da10",
      "DATA",
      [
        "storage",
        "00c79e68",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "0079da10",
      "DATA",
      [
        "storage",
        "00c79f38",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 0079d9a8 ["INT_ADD", "register:40f0:8", ["const:79d9a8:8", "const:4:8"]]
- 0079d9a8 ["CALL", null, ["callee:00c57f60:8"]]
+ 0079da00 ["INT_ADD", "register:40f0:8", ["const:79da00:8", "const:4:8"]]
+ 0079da00 ["CALL", null, ["callee:00c57f60:8"]]
- 0079d9b4 ["COPY", "tmp:0:8", ["const:e68:8"]]
- 0079d9b4 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 0079d9b4 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 0079d9b4 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 0079da0c ["COPY", "tmp:0:8", ["const:f38:8"]]
+ 0079da0c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 0079da0c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 0079da0c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-8717105e8633f7a1d2d15d92606c699f"></a>

### [`0079d9c8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0079d/0079d9c8.md) → [`0079da20`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0079d/0079da20.md) FUN_0079da20

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
      "definition_site": "0079da2c",
      "incomplete_value": false,
      "site": "0079da2c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c79000:8"
          ],
          [
            "leaf",
            "const:f38:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0079d9d4",
      "incomplete_value": false,
      "site": "0079d9d4",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c79000:8"
          ],
          [
            "leaf",
            "const:e68:8"
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
      "0079da2c",
      "DATA",
      [
        "storage",
        "00c79e68",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "0079da2c",
      "DATA",
      [
        "storage",
        "00c79f38",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 0079d9d0 ["COPY", "tmp:0:8", ["const:e68:8"]]
- 0079d9d0 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 0079d9d0 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 0079d9d0 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 0079da28 ["COPY", "tmp:0:8", ["const:f38:8"]]
+ 0079da28 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 0079da28 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 0079da28 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
~~~


<a id="compare-1b3135f29f4e08a6e6789d51193167a7"></a>

### [`0079d9e4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0079d/0079d9e4.md) → [`0079da3c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0079d/0079da3c.md) FUN_0079da3c

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 4件 [`00459d74`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00459/00459d74.md) [`00768e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00768/00768e90.md) [`0079b280`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0079b/0079b280.md) [`008514f8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00851/008514f8.md)
- 新版 呼出元 0件  · 呼出先 4件 [`00459db4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00459/00459db4.md) [`00768ee8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00768/00768ee8.md) [`0079b2d8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0079b/0079b2d8.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)

変更の種類 call, call_target, constant, operands_and_dependencies

命令の説明率　旧版 97.73% / 新版 97.73%

優先判定に残った影響 `call_target` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_target",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "0079da64",
      "value": [
        "leaf",
        "ram:768ee8:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "0079da0c",
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
      "0079da64",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "00768e90"
      ]
    ]
  ],
  "added": [
    [
      "0079da64",
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
- 0079da0c ["INT_ADD", "register:40f0:8", ["const:79da0c:8", "const:4:8"]]
- 0079da0c ["CALL", null, ["ram:768e90:8"]]
+ 0079da64 ["INT_ADD", "register:40f0:8", ["const:79da64:8", "const:4:8"]]
+ 0079da64 ["CALL", null, ["ram:768ee8:8"]]
- 0079da04 ["INT_ADD", "register:40f0:8", ["const:79da04:8", "const:4:8"]]
- 0079da04 ["CALL", null, ["callee:00851550:8"]]
+ 0079da5c ["INT_ADD", "register:40f0:8", ["const:79da5c:8", "const:4:8"]]
+ 0079da5c ["CALL", null, ["callee:00851550:8"]]
- 0079da90 ["INT_ADD", "register:40f0:8", ["const:79da90:8", "const:4:8"]]
- 0079da90 ["CALL", null, ["callee:00459db4:8"]]
+ 0079dae8 ["INT_ADD", "register:40f0:8", ["const:79dae8:8", "const:4:8"]]
+ 0079dae8 ["CALL", null, ["callee:00459db4:8"]]
~~~


<a id="compare-84557618ef63087d9bcb021b62223f6e"></a>

### [`0079dac4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0079d/0079dac4.md) → [`0079db1c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0079d/0079db1c.md) FUN_0079db1c

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
      "definition_site": "0079db40",
      "incomplete_value": false,
      "site": "0079db40",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c79000:8"
          ],
          [
            "leaf",
            "const:fb8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0079dae8",
      "incomplete_value": false,
      "site": "0079dae8",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c79000:8"
          ],
          [
            "leaf",
            "const:ee8:8"
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
      "0079db40",
      "DATA",
      [
        "storage",
        "00c79ee8",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "0079db40",
      "DATA",
      [
        "storage",
        "00c79fb8",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 0079dad8 ["INT_ADD", "register:40f0:8", ["const:79dad8:8", "const:4:8"]]
- 0079dad8 ["CALL", null, ["callee:00c57f60:8"]]
+ 0079db30 ["INT_ADD", "register:40f0:8", ["const:79db30:8", "const:4:8"]]
+ 0079db30 ["CALL", null, ["callee:00c57f60:8"]]
- 0079dae4 ["COPY", "tmp:0:8", ["const:ee8:8"]]
- 0079dae4 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 0079dae4 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 0079dae4 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 0079db3c ["COPY", "tmp:0:8", ["const:fb8:8"]]
+ 0079db3c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 0079db3c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 0079db3c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-0c812d6039a1bed5d7732661958ff874"></a>

### [`0079daf8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0079d/0079daf8.md) → [`0079db50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0079d/0079db50.md) FUN_0079db50

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
      "definition_site": "0079db5c",
      "incomplete_value": false,
      "site": "0079db5c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c79000:8"
          ],
          [
            "leaf",
            "const:fb8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0079db04",
      "incomplete_value": false,
      "site": "0079db04",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c79000:8"
          ],
          [
            "leaf",
            "const:ee8:8"
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
      "0079db5c",
      "DATA",
      [
        "storage",
        "00c79ee8",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "0079db5c",
      "DATA",
      [
        "storage",
        "00c79fb8",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 0079db00 ["COPY", "tmp:0:8", ["const:ee8:8"]]
- 0079db00 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 0079db00 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 0079db00 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 0079db58 ["COPY", "tmp:0:8", ["const:fb8:8"]]
+ 0079db58 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 0079db58 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 0079db58 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
~~~


<a id="compare-f875d268f2704f47679c20e36ed50b9e"></a>

### [`0079db48`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0079d/0079db48.md) → [`0079dba0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0079d/0079dba0.md) FUN_0079dba0

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
      "definition_site": "0079dbc4",
      "incomplete_value": false,
      "site": "0079dbc4",
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
            "const:48:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0079db6c",
      "incomplete_value": false,
      "site": "0079db6c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c79000:8"
          ],
          [
            "leaf",
            "const:f78:8"
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
      "0079dbc4",
      "DATA",
      [
        "storage",
        "00c79f78",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "0079dbc4",
      "DATA",
      [
        "storage",
        "00c7a048",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 0079db5c ["INT_ADD", "register:40f0:8", ["const:79db5c:8", "const:4:8"]]
- 0079db5c ["CALL", null, ["callee:00c57f60:8"]]
+ 0079dbb4 ["INT_ADD", "register:40f0:8", ["const:79dbb4:8", "const:4:8"]]
+ 0079dbb4 ["CALL", null, ["callee:00c57f60:8"]]
- 0079db64 ["COPY", "register:4040:8", ["const:c79000:8"]]
+ 0079dbbc ["COPY", "register:4040:8", ["const:c7a000:8"]]
- 0079db68 ["COPY", "tmp:0:8", ["const:f78:8"]]
- 0079db68 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 0079db68 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 0079db68 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 0079dbc0 ["COPY", "tmp:0:8", ["const:48:8"]]
+ 0079dbc0 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 0079dbc0 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 0079dbc0 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-a22bc72c5de8d9c4b14e0b9a7df74157"></a>

### [`0079db7c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0079d/0079db7c.md) → [`0079dbd4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0079d/0079dbd4.md) FUN_0079dbd4

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
      "definition_site": "0079dbe0",
      "incomplete_value": false,
      "site": "0079dbe0",
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
            "const:48:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0079db88",
      "incomplete_value": false,
      "site": "0079db88",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c79000:8"
          ],
          [
            "leaf",
            "const:f78:8"
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
      "0079dbe0",
      "DATA",
      [
        "storage",
        "00c79f78",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "0079dbe0",
      "DATA",
      [
        "storage",
        "00c7a048",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 0079db80 ["COPY", "register:4048:8", ["const:c79000:8"]]
+ 0079dbd8 ["COPY", "register:4048:8", ["const:c7a000:8"]]
- 0079db84 ["COPY", "tmp:0:8", ["const:f78:8"]]
- 0079db84 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 0079db84 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 0079db84 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 0079dbdc ["COPY", "tmp:0:8", ["const:48:8"]]
+ 0079dbdc ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 0079dbdc ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 0079dbdc ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
~~~


<a id="compare-f366779cb69508991b5e6334f789315e"></a>

### [`0079dc40`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0079d/0079dc40.md) → [`0079dc98`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0079d/0079dc98.md) FUN_0079dc98

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
      "definition_site": "0079dcbc",
      "incomplete_value": false,
      "site": "0079dcbc",
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
            "const:c8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0079dc64",
      "incomplete_value": false,
      "site": "0079dc64",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c79000:8"
          ],
          [
            "leaf",
            "const:ff8:8"
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
      "0079dcbc",
      "DATA",
      [
        "storage",
        "00c79ff8",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "0079dcbc",
      "DATA",
      [
        "storage",
        "00c7a0c8",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 0079dc54 ["INT_ADD", "register:40f0:8", ["const:79dc54:8", "const:4:8"]]
- 0079dc54 ["CALL", null, ["callee:00c57f60:8"]]
+ 0079dcac ["INT_ADD", "register:40f0:8", ["const:79dcac:8", "const:4:8"]]
+ 0079dcac ["CALL", null, ["callee:00c57f60:8"]]
- 0079dc5c ["COPY", "register:4040:8", ["const:c79000:8"]]
+ 0079dcb4 ["COPY", "register:4040:8", ["const:c7a000:8"]]
- 0079dc60 ["COPY", "tmp:0:8", ["const:ff8:8"]]
- 0079dc60 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 0079dc60 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 0079dc60 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 0079dcb8 ["COPY", "tmp:0:8", ["const:c8:8"]]
+ 0079dcb8 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 0079dcb8 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 0079dcb8 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-997fb75ab3183594e8ec770072994126"></a>

### [`0079dc74`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0079d/0079dc74.md) → [`0079dccc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0079d/0079dccc.md) FUN_0079dccc

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
      "definition_site": "0079dcd8",
      "incomplete_value": false,
      "site": "0079dcd8",
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
            "const:c8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0079dc80",
      "incomplete_value": false,
      "site": "0079dc80",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c79000:8"
          ],
          [
            "leaf",
            "const:ff8:8"
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
      "0079dcd8",
      "DATA",
      [
        "storage",
        "00c79ff8",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "0079dcd8",
      "DATA",
      [
        "storage",
        "00c7a0c8",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 0079dc78 ["COPY", "register:4048:8", ["const:c79000:8"]]
+ 0079dcd0 ["COPY", "register:4048:8", ["const:c7a000:8"]]
- 0079dc7c ["COPY", "tmp:0:8", ["const:ff8:8"]]
- 0079dc7c ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 0079dc7c ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 0079dc7c ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 0079dcd4 ["COPY", "tmp:0:8", ["const:c8:8"]]
+ 0079dcd4 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 0079dcd4 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 0079dcd4 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
~~~


<a id="compare-ef8462519cbe21c51175ec369c2dd443"></a>

### [`0079dcc4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0079d/0079dcc4.md) → [`0079dd1c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0079d/0079dd1c.md) FUN_0079dd1c

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
      "definition_site": "0079dd40",
      "incomplete_value": false,
      "site": "0079dd40",
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
            "const:158:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0079dce8",
      "incomplete_value": false,
      "site": "0079dce8",
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
            "const:88:8"
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
      "0079dd40",
      "DATA",
      [
        "storage",
        "00c7a088",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "0079dd40",
      "DATA",
      [
        "storage",
        "00c7a158",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 0079dcd8 ["INT_ADD", "register:40f0:8", ["const:79dcd8:8", "const:4:8"]]
- 0079dcd8 ["CALL", null, ["callee:00c57f60:8"]]
+ 0079dd30 ["INT_ADD", "register:40f0:8", ["const:79dd30:8", "const:4:8"]]
+ 0079dd30 ["CALL", null, ["callee:00c57f60:8"]]
- 0079dce4 ["COPY", "tmp:0:8", ["const:88:8"]]
- 0079dce4 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 0079dce4 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 0079dce4 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 0079dd3c ["COPY", "tmp:0:8", ["const:158:8"]]
+ 0079dd3c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 0079dd3c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 0079dd3c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-116df3d0a1b90a5deab090e23af636a8"></a>

### [`0079dcf8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0079d/0079dcf8.md) → [`0079dd50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0079d/0079dd50.md) FUN_0079dd50

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
      "definition_site": "0079dd5c",
      "incomplete_value": false,
      "site": "0079dd5c",
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
            "const:158:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0079dd04",
      "incomplete_value": false,
      "site": "0079dd04",
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
            "const:88:8"
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
      "0079dd5c",
      "DATA",
      [
        "storage",
        "00c7a088",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "0079dd5c",
      "DATA",
      [
        "storage",
        "00c7a158",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 0079dd00 ["COPY", "tmp:0:8", ["const:88:8"]]
- 0079dd00 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 0079dd00 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 0079dd00 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 0079dd58 ["COPY", "tmp:0:8", ["const:158:8"]]
+ 0079dd58 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 0079dd58 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 0079dd58 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
~~~


<a id="compare-12324029dbb707edf50f9cc88d2aaeff"></a>

### [`0079ddb4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0079d/0079ddb4.md) → [`0079de0c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0079d/0079de0c.md) FUN_0079de0c

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`0079be08`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0079b/0079be08.md) · 呼出先 7件 [`00597ed0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00597/00597ed0.md) [`005b733c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005b7/005b733c.md) [`00c53cd0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c53/00c53cd0.md) [`00c53d00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c53/00c53d00.md) [`00c57e80`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e80.md)
- 新版 呼出元 1件 [`0079be60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0079b/0079be60.md) · 呼出先 7件 [`00597f10`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00597/00597f10.md) [`005b737c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005b7/005b737c.md) [`00c53d70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53d70.md) [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md)

変更の種類 constant, operands_and_dependencies, operation_sequence, store_value

命令の説明率　旧版 96.10% / 新版 96.10%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "0079de44",
      "incomplete_value": false,
      "site": "0079de4c",
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
      "definition_site": "0079ddec",
      "incomplete_value": false,
      "site": "0079ddf4",
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
      "0079de4c",
      "DATA",
      [
        "storage",
        "00c705c0",
        null,
        "pointer"
      ]
    ],
    [
      "0079df04",
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
      "0079de4c",
      "DATA",
      [
        "storage",
        "00c70690",
        null,
        "pointer"
      ]
    ],
    [
      "0079df04",
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
- 0079dde4 ["INT_ADD", "register:40f0:8", ["const:79dde4:8", "const:4:8"]]
- 0079dde4 ["CALL", null, ["callee:00c57f60:8"]]
+ 0079de3c ["INT_ADD", "register:40f0:8", ["const:79de3c:8", "const:4:8"]]
+ 0079de3c ["CALL", null, ["callee:00c57f60:8"]]
- 0079ddec ["COPY", "tmp:0:8", ["const:5c0:8"]]
- 0079ddec ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 0079ddec ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 0079ddec ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 0079de44 ["COPY", "tmp:0:8", ["const:690:8"]]
+ 0079de44 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 0079de44 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 0079de44 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 0079ddf0 ["COPY", "register:4098:8", ["register:4000:8"]]
~~~


<a id="compare-44cddc916c1a8575ed63be6111dc6298"></a>

### [`0079df2c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0079d/0079df2c.md) → [`0079df84`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0079d/0079df84.md) FUN_0079df84

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
      "definition_site": "0079df9c",
      "incomplete_value": false,
      "site": "0079dfac",
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
            "const:1d8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0079df44",
      "incomplete_value": false,
      "site": "0079df54",
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
            "const:108:8"
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
      "0079dfac",
      "DATA",
      [
        "storage",
        "00c7a108",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "0079dfac",
      "DATA",
      [
        "storage",
        "00c7a1d8",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 0079df44 ["COPY", "tmp:0:8", ["const:108:8"]]
- 0079df44 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 0079df44 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 0079df44 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 0079df9c ["COPY", "tmp:0:8", ["const:1d8:8"]]
+ 0079df9c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 0079df9c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 0079df9c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 0079df78 ["COPY", "register:0:8", ["register:4040:8"]]
- 0079df78 ["INT_ADD", "register:40f0:8", ["const:79df78:8", "const:4:8"]]
- 0079df78 ["CALLIND", null, ["register:0:8"]]
+ 0079dfd0 ["COPY", "register:0:8", ["register:4040:8"]]
+ 0079dfd0 ["INT_ADD", "register:40f0:8", ["const:79dfd0:8", "const:4:8"]]
+ 0079dfd0 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-7cc57c93666fdfd2b92c4d70c01f8d16"></a>

### [`0079e048`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0079e/0079e048.md) → [`0079e0a0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0079e/0079e0a0.md) FUN_0079e0a0

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
      "definition_site": "0079e0d0",
      "incomplete_value": false,
      "site": "0079e0d0",
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
            "const:1d8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0079e078",
      "incomplete_value": false,
      "site": "0079e078",
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
            "const:108:8"
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
      "0079e0d0",
      "DATA",
      [
        "storage",
        "00c7a108",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "0079e0d0",
      "DATA",
      [
        "storage",
        "00c7a1d8",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 0079e0d0 ["COPY", "register:0:8", ["register:4040:8"]]
- 0079e0d0 ["INT_ADD", "register:40f0:8", ["const:79e0d0:8", "const:4:8"]]
- 0079e0d0 ["CALLIND", null, ["register:0:8"]]
+ 0079e128 ["COPY", "register:0:8", ["register:4040:8"]]
+ 0079e128 ["INT_ADD", "register:40f0:8", ["const:79e128:8", "const:4:8"]]
+ 0079e128 ["CALLIND", null, ["register:0:8"]]
- 0079e060 ["INT_ADD", "register:40f0:8", ["const:79e060:8", "const:4:8"]]
- 0079e060 ["CALL", null, ["callee:00c57f60:8"]]
+ 0079e0b8 ["INT_ADD", "register:40f0:8", ["const:79e0b8:8", "const:4:8"]]
+ 0079e0b8 ["CALL", null, ["callee:00c57f60:8"]]
- 0079e070 ["COPY", "tmp:0:8", ["const:108:8"]]
- 0079e070 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 0079e070 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 0079e070 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 0079e0c8 ["COPY", "tmp:0:8", ["const:1d8:8"]]
+ 0079e0c8 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 0079e0c8 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 0079e0c8 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-a63355d4822b1b4062406662df490fd5"></a>

### [`0079e150`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0079e/0079e150.md) → [`0079e1a8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0079e/0079e1a8.md) FUN_0079e1a8

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
      "definition_site": "0079e1d0",
      "incomplete_value": false,
      "site": "0079e1d0",
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
            "const:1d8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0079e178",
      "incomplete_value": false,
      "site": "0079e178",
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
            "const:108:8"
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
      "0079e1d0",
      "DATA",
      [
        "storage",
        "00c7a108",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "0079e1d0",
      "DATA",
      [
        "storage",
        "00c7a1d8",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 0079e170 ["COPY", "tmp:0:8", ["const:108:8"]]
- 0079e170 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 0079e170 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 0079e170 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 0079e1c8 ["COPY", "tmp:0:8", ["const:1d8:8"]]
+ 0079e1c8 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 0079e1c8 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 0079e1c8 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 0079e174 ["COPY", "register:40a0:8", ["register:4008:8"]]
- 0079e194 ["COPY", "register:0:8", ["register:4040:8"]]
- 0079e194 ["INT_ADD", "register:40f0:8", ["const:79e194:8", "const:4:8"]]
- 0079e194 ["CALLIND", null, ["register:0:8"]]
+ 0079e1ec ["COPY", "register:0:8", ["register:4040:8"]]
+ 0079e1ec ["INT_ADD", "register:40f0:8", ["const:79e1ec:8", "const:4:8"]]
+ 0079e1ec ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-2d3a7cb686f7456429913f27a5f55d8d"></a>

### [`0079e4f4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0079e/0079e4f4.md) → [`0079e54c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0079e/0079e54c.md) FUN_0079e54c

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
      "definition_site": "0079e558",
      "incomplete_value": false,
      "site": "0079e564",
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
            "const:258:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0079e500",
      "incomplete_value": false,
      "site": "0079e50c",
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
            "const:188:8"
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
      "0079e564",
      "DATA",
      [
        "storage",
        "00c7a188",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "0079e564",
      "DATA",
      [
        "storage",
        "00c7a258",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 0079e500 ["COPY", "tmp:0:8", ["const:188:8"]]
- 0079e500 ["INT_CARRY", "register:105:1", ["register:4050:8", "tmp:0:8"]]
- 0079e500 ["INT_SCARRY", "register:106:1", ["register:4050:8", "tmp:0:8"]]
- 0079e500 ["INT_ADD", "tmp:1:8", ["register:4050:8", "tmp:0:8"]]
+ 0079e558 ["COPY", "tmp:0:8", ["const:258:8"]]
+ 0079e558 ["INT_CARRY", "register:105:1", ["register:4050:8", "tmp:0:8"]]
+ 0079e558 ["INT_SCARRY", "register:106:1", ["register:4050:8", "tmp:0:8"]]
+ 0079e558 ["INT_ADD", "tmp:1:8", ["register:4050:8", "tmp:0:8"]]
~~~


<a id="compare-3b7453f3154487159857ada3674f9e3e"></a>

### [`0079e594`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0079e/0079e594.md) → [`0079e5ec`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0079e/0079e5ec.md) FUN_0079e5ec

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
      "definition_site": "0079e618",
      "incomplete_value": false,
      "site": "0079e618",
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
            "const:258:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0079e5c0",
      "incomplete_value": false,
      "site": "0079e5c0",
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
            "const:188:8"
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
      "0079e618",
      "DATA",
      [
        "storage",
        "00c7a188",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "0079e618",
      "DATA",
      [
        "storage",
        "00c7a258",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 0079e5a8 ["INT_ADD", "register:40f0:8", ["const:79e5a8:8", "const:4:8"]]
- 0079e5a8 ["CALL", null, ["callee:00c57f60:8"]]
+ 0079e600 ["INT_ADD", "register:40f0:8", ["const:79e600:8", "const:4:8"]]
+ 0079e600 ["CALL", null, ["callee:00c57f60:8"]]
- 0079e5b8 ["COPY", "tmp:0:8", ["const:188:8"]]
- 0079e5b8 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 0079e5b8 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 0079e5b8 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 0079e610 ["COPY", "tmp:0:8", ["const:258:8"]]
+ 0079e610 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 0079e610 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 0079e610 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 0079e5dc ["COPY", "register:0:8", ["register:4040:8"]]
- 0079e5dc ["INT_ADD", "register:40f0:8", ["const:79e5dc:8", "const:4:8"]]
- 0079e5dc ["CALLIND", null, ["register:0:8"]]
+ 0079e634 ["COPY", "register:0:8", ["register:4040:8"]]
+ 0079e634 ["INT_ADD", "register:40f0:8", ["const:79e634:8", "const:4:8"]]
+ 0079e634 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-8a4c04487e4a06c62f55710bce9ceb8b"></a>

### [`0079e61c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0079e/0079e61c.md) → [`0079e674`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0079e/0079e674.md) FUN_0079e674

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
      "definition_site": "0079e690",
      "incomplete_value": false,
      "site": "0079e690",
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
            "const:258:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0079e638",
      "incomplete_value": false,
      "site": "0079e638",
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
            "const:188:8"
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
      "0079e690",
      "DATA",
      [
        "storage",
        "00c7a188",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "0079e690",
      "DATA",
      [
        "storage",
        "00c7a258",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 0079e634 ["COPY", "tmp:0:8", ["const:188:8"]]
- 0079e634 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 0079e634 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 0079e634 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 0079e68c ["COPY", "tmp:0:8", ["const:258:8"]]
+ 0079e68c ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 0079e68c ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 0079e68c ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
- 0079e658 ["COPY", "register:0:8", ["register:4048:8"]]
- 0079e658 ["INT_ADD", "register:40f0:8", ["const:79e658:8", "const:4:8"]]
- 0079e658 ["CALLIND", null, ["register:0:8"]]
+ 0079e6b0 ["COPY", "register:0:8", ["register:4048:8"]]
+ 0079e6b0 ["INT_ADD", "register:40f0:8", ["const:79e6b0:8", "const:4:8"]]
+ 0079e6b0 ["CALLIND", null, ["register:0:8"]]
~~~


