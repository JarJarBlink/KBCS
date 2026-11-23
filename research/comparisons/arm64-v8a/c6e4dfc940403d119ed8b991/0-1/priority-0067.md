# v16.0.1 → v16.0.2 · 最優先の変更候補 (67)

[一覧の目次](README.md)

<a id="compare-9155f6a417b0be63ff9c39a929f7a014"></a>

### [`00a99f0c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a99/00a99f0c.md) → [`00a99f7c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a99/00a99f7c.md) FUN_00a99f7c

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)

変更の種類 comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_store_alignment

命令の説明率　旧版 86.36% / 新版 86.36%

アドレスに依存する影響 `unresolved_branch_alignment` 1件, `unresolved_store_alignment` 5件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00a99f0c",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "unmatched:00a99f10",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "unmatched:00a99f14",
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
      "00a99f7c",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "00a99f80",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "00a99f84",
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
- 00a99f0c ["COPY", "tmp:0:8", ["register:40e8:8"]]
- 00a99f0c ["COPY", "tmp:1:8", ["register:40f0:8"]]
- 00a99f0c ["INT_ADD", "register:8:8", ["register:8:8", "const:ffffffffffffffd0:8"]]
- 00a99f0c ["STORE", null, ["const:1b1:8", "register:8:8", "tmp:0:8"]]
- 00a99f10 ["INT_ADD", "tmp:0:8", ["register:8:8", "const:10:8"]]
- 00a99f10 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:40a8:8"]]
- 00a99f14 ["COPY", "tmp:0:8", ["register:40a0:8"]]
- 00a99f14 ["COPY", "tmp:1:8", ["register:4098:8"]]
- 00a99f14 ["INT_ADD", "tmp:2:8", ["register:8:8", "const:20:8"]]
- 00a99f14 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
~~~


<a id="compare-540f87e1cb645e3a45a3b99374390ab0"></a>

### [`00a99fc0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a99/00a99fc0.md) → [`00a9a030`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a9a/00a9a030.md) FUN_00a9a030

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
      "definition_site": "00a9a044",
      "incomplete_value": false,
      "site": "00a9a048",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c8c000:8"
          ],
          [
            "leaf",
            "const:9b8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00a99fd4",
      "incomplete_value": false,
      "site": "00a99fd8",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c8c000:8"
          ],
          [
            "leaf",
            "const:8e8:8"
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
      "00a9a048",
      "DATA",
      [
        "storage",
        "00c8c8e8",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00a9a048",
      "DATA",
      [
        "storage",
        "00c8c9b8",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00a99fcc ["INT_ADD", "register:40f0:8", ["const:a99fcc:8", "const:4:8"]]
- 00a99fcc ["CALL", null, ["callee:00c57f60:8"]]
+ 00a9a03c ["INT_ADD", "register:40f0:8", ["const:a9a03c:8", "const:4:8"]]
+ 00a9a03c ["CALL", null, ["callee:00c57f60:8"]]
- 00a99fd4 ["COPY", "tmp:0:8", ["const:8e8:8"]]
- 00a99fd4 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00a99fd4 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00a99fd4 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00a9a044 ["COPY", "tmp:0:8", ["const:9b8:8"]]
+ 00a9a044 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00a9a044 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00a9a044 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-b0f5a895062d33ed2320d955ad22df77"></a>

### [`00a99ffc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a99/00a99ffc.md) → [`00a9a06c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a9a/00a9a06c.md) FUN_00a9a06c

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 4件 [`0047acf4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047a/0047acf4.md) [`0047cdd4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047c/0047cdd4.md) [`008514f8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00851/008514f8.md) [`0092e3e0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0092e/0092e3e0.md)
- 新版 呼出元 0件  · 呼出先 4件 [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md) [`0047ce14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047ce14.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md) [`0092e434`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0092e/0092e434.md)

変更の種類 call, call_target, constant, operands_and_dependencies

命令の説明率　旧版 92.59% / 新版 92.59%

優先判定に残った影響 `call_target` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_target",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "00a9a08c",
      "value": [
        "leaf",
        "ram:47ad34:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "00a9a01c",
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
      "site": "00a9a098",
      "value": [
        "leaf",
        "ram:47ad34:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "00a9a028",
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
      "00a9a08c",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047acf4"
      ]
    ],
    [
      "00a9a098",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047acf4"
      ]
    ]
  ],
  "added": [
    [
      "00a9a08c",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ],
    [
      "00a9a098",
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
- 00a9a01c ["INT_ADD", "register:40f0:8", ["const:a9a01c:8", "const:4:8"]]
- 00a9a01c ["CALL", null, ["ram:47acf4:8"]]
+ 00a9a08c ["INT_ADD", "register:40f0:8", ["const:a9a08c:8", "const:4:8"]]
+ 00a9a08c ["CALL", null, ["ram:47ad34:8"]]
- 00a9a028 ["INT_ADD", "register:40f0:8", ["const:a9a028:8", "const:4:8"]]
- 00a9a028 ["CALL", null, ["ram:47acf4:8"]]
+ 00a9a098 ["INT_ADD", "register:40f0:8", ["const:a9a098:8", "const:4:8"]]
+ 00a9a098 ["CALL", null, ["ram:47ad34:8"]]
- 00a9a03c ["INT_ADD", "register:40f0:8", ["const:a9a03c:8", "const:4:8"]]
- 00a9a03c ["CALL", null, ["callee:00851550:8"]]
+ 00a9a0ac ["INT_ADD", "register:40f0:8", ["const:a9a0ac:8", "const:4:8"]]
+ 00a9a0ac ["CALL", null, ["callee:00851550:8"]]
~~~


<a id="compare-57e4981565d22a12736014785f216caa"></a>

### [`00a9a094`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a9a/00a9a094.md) → [`00a9a104`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a9a/00a9a104.md) FUN_00a9a104

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)

変更の種類 cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_return_alignment, unresolved_store_alignment

命令の説明率　旧版 55.56% / 新版 55.56%

優先判定に残った影響 `unresolved_return_alignment` 1件, `unresolved_store_alignment` 1件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00a9a0ac",
      "DATA",
      [
        "storage",
        "00c8c968",
        null,
        "undefined *"
      ]
    ],
    [
      "unmatched:00a9a0b0",
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
      "00a9a11c",
      "DATA",
      [
        "storage",
        "00c8ca38",
        null,
        "undefined *"
      ]
    ],
    [
      "00a9a120",
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
- 00a9a0a0 ["INT_ADD", "register:40f0:8", ["const:a9a0a0:8", "const:4:8"]]
- 00a9a0a0 ["CALL", null, ["callee:00c57f60:8"]]
+ 00a9a110 ["INT_ADD", "register:40f0:8", ["const:a9a110:8", "const:4:8"]]
+ 00a9a110 ["CALL", null, ["callee:00c57f60:8"]]
- 00a9a0a8 ["COPY", "tmp:0:8", ["const:968:8"]]
- 00a9a0a8 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00a9a0a8 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00a9a0a8 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 00a9a0ac ["COPY", "tmp:0:8", ["register:4000:8"]]
- 00a9a0ac ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4040:8"]]
~~~


<a id="compare-1b0de547fc88b16cddaca4d5a5a7ebc7"></a>

### [`00a9a0d0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a9a/00a9a0d0.md) → [`00a9a140`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a9a/00a9a140.md) FUN_00a9a140

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `equal` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 7件 [`0054075c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00540/0054075c.md) [`00769260`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00769/00769260.md) [`008514f8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00851/008514f8.md) [`009bd45c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009bd/009bd45c.md) [`00a1a6a4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a1a/00a1a6a4.md)
- 新版 呼出元 0件  · 呼出先 7件 [`0054079c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00540/0054079c.md) [`007692b8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00769/007692b8.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md) [`009bd4b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009bd/009bd4b0.md) [`00a1a6f8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a1a/00a1a6f8.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, constant, control_flow, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

優先判定に残った影響 `call_argument_candidate` 3件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "00a9a160",
      "incomplete_value": true,
      "site": "00a9a16c",
      "value": [
        "live",
        "register:40a0:8"
      ]
    },
    "ordinal": 5,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "00a9a164",
      "incomplete_value": false,
      "site": "00a9a16c",
      "value": [
        "leaf",
        "const:0:8"
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
      "definition_site": "00a9a15c",
      "incomplete_value": true,
      "site": "00a9a16c",
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
    "ordinal": 5,
    "slot": 4
  }
]
~~~


~~~diff
- 00a9a16c ["INT_ADD", "register:40f0:8", ["const:a9a16c:8", "const:4:8"]]
- 00a9a16c ["CALL", null, ["callee:007692b8:8"]]
+ 00a9a1dc ["INT_ADD", "register:40f0:8", ["const:a9a1dc:8", "const:4:8"]]
+ 00a9a1dc ["CALL", null, ["callee:007692b8:8"]]
- 00a9a0f8 ["CBRANCH", null, ["local:b13:8", "register:101:1"]]
+ 00a9a168 ["CBRANCH", null, ["local:b14:8", "register:101:1"]]
- 00a9a10c ["INT_ADD", "register:40f0:8", ["const:a9a10c:8", "const:4:8"]]
- 00a9a10c ["CALL", null, ["callee:009bd4b0:8"]]
+ 00a9a17c ["INT_ADD", "register:40f0:8", ["const:a9a17c:8", "const:4:8"]]
+ 00a9a17c ["CALL", null, ["callee:009bd4b0:8"]]
~~~


<a id="compare-894f6cbd036c06622c4834e75375c066"></a>

### [`00a9a23c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a9a/00a9a23c.md) → [`00a9a2ac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a9a/00a9a2ac.md) FUN_00a9a2ac

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
      "definition_site": "00a9a2c0",
      "incomplete_value": false,
      "site": "00a9a2c4",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c8c000:8"
          ],
          [
            "leaf",
            "const:ab8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00a9a250",
      "incomplete_value": false,
      "site": "00a9a254",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c8c000:8"
          ],
          [
            "leaf",
            "const:9e8:8"
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
      "00a9a2c4",
      "DATA",
      [
        "storage",
        "00c8c9e8",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00a9a2c4",
      "DATA",
      [
        "storage",
        "00c8cab8",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00a9a248 ["INT_ADD", "register:40f0:8", ["const:a9a248:8", "const:4:8"]]
- 00a9a248 ["CALL", null, ["callee:00c57f60:8"]]
+ 00a9a2b8 ["INT_ADD", "register:40f0:8", ["const:a9a2b8:8", "const:4:8"]]
+ 00a9a2b8 ["CALL", null, ["callee:00c57f60:8"]]
- 00a9a250 ["COPY", "tmp:0:8", ["const:9e8:8"]]
- 00a9a250 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00a9a250 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00a9a250 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00a9a2c0 ["COPY", "tmp:0:8", ["const:ab8:8"]]
+ 00a9a2c0 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00a9a2c0 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00a9a2c0 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-bc60dd0a81d94b95a0309eb64cb1fb75"></a>

### [`00a9a2a8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a9a/00a9a2a8.md) → [`00a9a318`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a9a/00a9a318.md) FUN_00a9a318

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
      "definition_site": "00a9a33c",
      "incomplete_value": false,
      "site": "00a9a33c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c8c000:8"
          ],
          [
            "leaf",
            "const:b38:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00a9a2cc",
      "incomplete_value": false,
      "site": "00a9a2cc",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c8c000:8"
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
      "00a9a33c",
      "DATA",
      [
        "storage",
        "00c8ca68",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00a9a33c",
      "DATA",
      [
        "storage",
        "00c8cb38",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00a9a2bc ["INT_ADD", "register:40f0:8", ["const:a9a2bc:8", "const:4:8"]]
- 00a9a2bc ["CALL", null, ["callee:00c57f60:8"]]
+ 00a9a32c ["INT_ADD", "register:40f0:8", ["const:a9a32c:8", "const:4:8"]]
+ 00a9a32c ["CALL", null, ["callee:00c57f60:8"]]
- 00a9a2c8 ["COPY", "tmp:0:8", ["const:a68:8"]]
- 00a9a2c8 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00a9a2c8 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00a9a2c8 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00a9a338 ["COPY", "tmp:0:8", ["const:b38:8"]]
+ 00a9a338 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00a9a338 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00a9a338 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-5a452d0d848b727942e5d84cc5762fb6"></a>

### [`00a9a2dc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a9a/00a9a2dc.md) → [`00a9a34c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a9a/00a9a34c.md) FUN_00a9a34c

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
      "definition_site": "00a9a358",
      "incomplete_value": false,
      "site": "00a9a358",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c8c000:8"
          ],
          [
            "leaf",
            "const:b38:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00a9a2e8",
      "incomplete_value": false,
      "site": "00a9a2e8",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c8c000:8"
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
      "00a9a358",
      "DATA",
      [
        "storage",
        "00c8ca68",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00a9a358",
      "DATA",
      [
        "storage",
        "00c8cb38",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00a9a2e4 ["COPY", "tmp:0:8", ["const:a68:8"]]
- 00a9a2e4 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 00a9a2e4 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 00a9a2e4 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 00a9a354 ["COPY", "tmp:0:8", ["const:b38:8"]]
+ 00a9a354 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 00a9a354 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 00a9a354 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
~~~


<a id="compare-ed0f24770e8a8ea7a44d5ca95b7bfb9a"></a>

### [`00a9a364`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a9a/00a9a364.md) → [`00a9a3d4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a9a/00a9a3d4.md) FUN_00a9a3d4

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
      "definition_site": "00a9a3f8",
      "incomplete_value": false,
      "site": "00a9a3f8",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c8c000:8"
          ],
          [
            "leaf",
            "const:bb8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00a9a388",
      "incomplete_value": false,
      "site": "00a9a388",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c8c000:8"
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
      "00a9a3f8",
      "DATA",
      [
        "storage",
        "00c8cae8",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00a9a3f8",
      "DATA",
      [
        "storage",
        "00c8cbb8",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00a9a378 ["INT_ADD", "register:40f0:8", ["const:a9a378:8", "const:4:8"]]
- 00a9a378 ["CALL", null, ["callee:00c57f60:8"]]
+ 00a9a3e8 ["INT_ADD", "register:40f0:8", ["const:a9a3e8:8", "const:4:8"]]
+ 00a9a3e8 ["CALL", null, ["callee:00c57f60:8"]]
- 00a9a384 ["COPY", "tmp:0:8", ["const:ae8:8"]]
- 00a9a384 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00a9a384 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00a9a384 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00a9a3f4 ["COPY", "tmp:0:8", ["const:bb8:8"]]
+ 00a9a3f4 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00a9a3f4 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00a9a3f4 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-2a65c6ecf673e93306dfbe416b383c55"></a>

### [`00a9a398`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a9a/00a9a398.md) → [`00a9a408`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a9a/00a9a408.md) FUN_00a9a408

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
      "definition_site": "00a9a414",
      "incomplete_value": false,
      "site": "00a9a414",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c8c000:8"
          ],
          [
            "leaf",
            "const:bb8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00a9a3a4",
      "incomplete_value": false,
      "site": "00a9a3a4",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c8c000:8"
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
      "00a9a414",
      "DATA",
      [
        "storage",
        "00c8cae8",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00a9a414",
      "DATA",
      [
        "storage",
        "00c8cbb8",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00a9a3a0 ["COPY", "tmp:0:8", ["const:ae8:8"]]
- 00a9a3a0 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 00a9a3a0 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 00a9a3a0 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 00a9a410 ["COPY", "tmp:0:8", ["const:bb8:8"]]
+ 00a9a410 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 00a9a410 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 00a9a410 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
~~~


<a id="compare-c2995fba651b95a763a64bd3aa5bb45e"></a>

### [`00a9a3b4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a9a/00a9a3b4.md) → [`00a9a424`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a9a/00a9a424.md) FUN_00a9a424

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 4件 [`0047acf4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047a/0047acf4.md) [`0047cdd4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047c/0047cdd4.md) [`008b9178`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008b9/008b9178.md) [`00a957c8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a95/00a957c8.md)
- 新版 呼出元 0件  · 呼出先 4件 [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md) [`0047ce14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047ce14.md) [`008b91d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b9/008b91d0.md) [`00a95838`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a95/00a95838.md)

変更の種類 call, call_count, constant, local_def_use, memory_read, memory_read_count, operands_and_dependencies, operation_sequence, unresolved_call_alignment

命令の説明率　旧版 86.96% / 新版 86.96%

優先判定に残った影響 `unresolved_call_alignment` 1件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00a9a3d8",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047acf4"
      ]
    ]
  ],
  "added": [
    [
      "00a9a448",
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
- 00a9a3d0 ["COPY", "register:40e8:8", ["register:8:8"]]
- 00a9a3d4 ["COPY", "tmp:0:8", ["register:4008:8"]]
- 00a9a3d4 ["LOAD", "register:4098:8", ["const:1b1:8", "tmp:0:8"]]
- 00a9a3d8 ["INT_ADD", "register:40f0:8", ["const:a9a3d8:8", "const:4:8"]]
- 00a9a3d8 ["CALL", null, ["ram:47acf4:8"]]
~~~


<a id="compare-07729a8acdd8aefb023f9f2ccc9d5303"></a>

### [`00a9a43c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a9a/00a9a43c.md) → [`00a9a4ac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a9a/00a9a4ac.md) FUN_00a9a4ac

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
      "definition_site": "00a9a4d0",
      "incomplete_value": false,
      "site": "00a9a4d0",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c8c000:8"
          ],
          [
            "leaf",
            "const:c38:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00a9a460",
      "incomplete_value": false,
      "site": "00a9a460",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c8c000:8"
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
      "00a9a4d0",
      "DATA",
      [
        "storage",
        "00c8cb68",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00a9a4d0",
      "DATA",
      [
        "storage",
        "00c8cc38",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00a9a450 ["INT_ADD", "register:40f0:8", ["const:a9a450:8", "const:4:8"]]
- 00a9a450 ["CALL", null, ["callee:00c57f60:8"]]
+ 00a9a4c0 ["INT_ADD", "register:40f0:8", ["const:a9a4c0:8", "const:4:8"]]
+ 00a9a4c0 ["CALL", null, ["callee:00c57f60:8"]]
- 00a9a45c ["COPY", "tmp:0:8", ["const:b68:8"]]
- 00a9a45c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00a9a45c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00a9a45c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00a9a4cc ["COPY", "tmp:0:8", ["const:c38:8"]]
+ 00a9a4cc ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00a9a4cc ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00a9a4cc ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-8b42c80f284d1c97a7a9c5272c3e80b2"></a>

### [`00a9a470`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a9a/00a9a470.md) → [`00a9a4e0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a9a/00a9a4e0.md) FUN_00a9a4e0

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
      "definition_site": "00a9a4ec",
      "incomplete_value": false,
      "site": "00a9a4ec",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c8c000:8"
          ],
          [
            "leaf",
            "const:c38:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00a9a47c",
      "incomplete_value": false,
      "site": "00a9a47c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c8c000:8"
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
      "00a9a4ec",
      "DATA",
      [
        "storage",
        "00c8cb68",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00a9a4ec",
      "DATA",
      [
        "storage",
        "00c8cc38",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00a9a478 ["COPY", "tmp:0:8", ["const:b68:8"]]
- 00a9a478 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 00a9a478 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 00a9a478 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 00a9a4e8 ["COPY", "tmp:0:8", ["const:c38:8"]]
+ 00a9a4e8 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 00a9a4e8 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 00a9a4e8 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
~~~


<a id="compare-76cb617ee09200b8e7abaccf3a5b6419"></a>

### [`00a9a48c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a9a/00a9a48c.md) → [`00a9a4fc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a9a/00a9a4fc.md) FUN_00a9a4fc

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 12件 [`0047acf4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047a/0047acf4.md) [`0047cdd4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047c/0047cdd4.md) [`0048ce54`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0048c/0048ce54.md) [`008b9178`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008b9/008b9178.md) [`008b9858`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008b9/008b9858.md)
- 新版 呼出元 0件  · 呼出先 12件 [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md) [`0047ce14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047ce14.md) [`0048ce94`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048c/0048ce94.md) [`008b91d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b9/008b91d0.md) [`008b98b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b9/008b98b0.md)

変更の種類 branch_condition_or_target, call, call_argument_candidate, call_target, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, operands_and_dependencies, operation_sequence, store_value, unresolved_branch_alignment

命令の説明率　旧版 87.74% / 新版 87.74%

優先判定に残った影響 `call_argument_candidate` 1件, `call_target` 1件, `store_value` 3件, `unresolved_branch_alignment` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00a9a5ac",
      "incomplete_value": true,
      "site": "00a9a5ac",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:7de:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00a9a53c",
      "incomplete_value": true,
      "site": "00a9a53c",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:82b:8"
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
      "definition_site": "00a9a5a0",
      "incomplete_value": true,
      "site": "00a9a5b0",
      "value": [
        "LOAD",
        "8",
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
      "definition_site": "00a9a530",
      "incomplete_value": true,
      "site": "00a9a540",
      "value": [
        "LOAD",
        "8",
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
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "00a9a5cc",
      "incomplete_value": false,
      "site": "00a9a5cc",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c8c000:8"
          ],
          [
            "leaf",
            "const:ca8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00a9a55c",
      "incomplete_value": false,
      "site": "00a9a55c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c8c000:8"
          ],
          [
            "leaf",
            "const:bd8:8"
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
      "00a9a540",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047acf4"
      ]
    ],
    [
      "00a9a59c",
      "READ",
      [
        "storage",
        "002a182b",
        null,
        "string"
      ]
    ],
    [
      "00a9a5a0",
      "READ",
      [
        "storage",
        "002a1832",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "00a9a540",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ],
    [
      "00a9a59c",
      "READ",
      [
        "storage",
        "002a17de",
        null,
        "string"
      ]
    ],
    [
      "00a9a5a0",
      "READ",
      [
        "storage",
        "002a17e5",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 00a9a4d0 ["INT_ADD", "register:40f0:8", ["const:a9a4d0:8", "const:4:8"]]
- 00a9a4d0 ["CALL", null, ["ram:47acf4:8"]]
+ 00a9a540 ["INT_ADD", "register:40f0:8", ["const:a9a540:8", "const:4:8"]]
+ 00a9a540 ["CALL", null, ["ram:47ad34:8"]]
- 00a9a4ec ["BOOL_NEGATE", "tmp:0:1", ["register:101:1"]]
- 00a9a4ec ["CBRANCH", null, ["local:b22:8", "tmp:0:1"]]
+ 00a9a55c ["BOOL_NEGATE", "tmp:0:1", ["register:101:1"]]
+ 00a9a55c ["CBRANCH", null, ["local:b21:8", "tmp:0:1"]]
- 00a9a608 ["INT_ADD", "register:40f0:8", ["const:a9a608:8", "const:4:8"]]
- 00a9a608 ["CALL", null, ["callee:00c57f80:8"]]
+ 00a9a678 ["INT_ADD", "register:40f0:8", ["const:a9a678:8", "const:4:8"]]
+ 00a9a678 ["CALL", null, ["callee:00c57f80:8"]]
~~~


<a id="compare-bb797ca13ffa323cfd7c5acd42fff0f6"></a>

### [`00a9a6f0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a9a/00a9a6f0.md) → [`00a9a760`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a9a/00a9a760.md) FUN_00a9a760

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)

変更の種類 call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_return_alignment, unresolved_store_alignment

命令の説明率　旧版 61.54% / 新版 61.54%

優先判定に残った影響 `call_argument_candidate` 1件, `unresolved_return_alignment` 1件, `unresolved_store_alignment` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00a9a770",
      "incomplete_value": false,
      "site": "00a9a774",
      "value": [
        "leaf",
        "const:10:8"
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
      "unmatched:00a9a714",
      "DATA",
      [
        "storage",
        "00c8cbd8",
        null,
        "undefined *"
      ]
    ],
    [
      "unmatched:00a9a718",
      "READ",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "unmatched:00a9a71c",
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
      "00a9a784",
      "DATA",
      [
        "storage",
        "00c8cca8",
        null,
        "undefined *"
      ]
    ],
    [
      "00a9a788",
      "READ",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "00a9a78c",
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
- 00a9a704 ["INT_ADD", "register:40f0:8", ["const:a9a704:8", "const:4:8"]]
- 00a9a704 ["CALL", null, ["callee:00c57f60:8"]]
+ 00a9a774 ["INT_ADD", "register:40f0:8", ["const:a9a774:8", "const:4:8"]]
+ 00a9a774 ["CALL", null, ["callee:00c57f60:8"]]
- 00a9a710 ["COPY", "tmp:0:8", ["const:bd8:8"]]
- 00a9a710 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00a9a710 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00a9a710 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 00a9a714 ["COPY", "tmp:0:8", ["register:4040:8"]]
- 00a9a714 ["COPY", "tmp:1:8", ["register:4048:8"]]
- 00a9a714 ["COPY", "tmp:2:8", ["register:4000:8"]]
- 00a9a714 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
~~~


<a id="compare-7ac4be144fed6fd1b20bfaa69e6aef35"></a>

### [`00a9a724`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a9a/00a9a724.md) → [`00a9a794`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a9a/00a9a794.md) FUN_00a9a794

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
      "definition_site": "00a9a7a0",
      "incomplete_value": false,
      "site": "00a9a7a0",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c8c000:8"
          ],
          [
            "leaf",
            "const:ca8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00a9a730",
      "incomplete_value": false,
      "site": "00a9a730",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c8c000:8"
          ],
          [
            "leaf",
            "const:bd8:8"
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
      "00a9a7a0",
      "DATA",
      [
        "storage",
        "00c8cbd8",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00a9a7a0",
      "DATA",
      [
        "storage",
        "00c8cca8",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00a9a72c ["COPY", "tmp:0:8", ["const:bd8:8"]]
- 00a9a72c ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 00a9a72c ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 00a9a72c ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 00a9a79c ["COPY", "tmp:0:8", ["const:ca8:8"]]
+ 00a9a79c ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 00a9a79c ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 00a9a79c ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
~~~


<a id="compare-f50c4a01169e25c5c9cfbf9dd740ed56"></a>

### [`00a9a740`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a9a/00a9a740.md) → [`00a9a7b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a9a/00a9a7b0.md) FUN_00a9a7b0

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
      "site": "00a9a7d4",
      "value": [
        "leaf",
        "ram:47ad34:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "00a9a764",
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
      "00a9a7d4",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047acf4"
      ]
    ]
  ],
  "added": [
    [
      "00a9a7d4",
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
- 00a9a764 ["INT_ADD", "register:40f0:8", ["const:a9a764:8", "const:4:8"]]
- 00a9a764 ["CALL", null, ["ram:47acf4:8"]]
+ 00a9a7d4 ["INT_ADD", "register:40f0:8", ["const:a9a7d4:8", "const:4:8"]]
+ 00a9a7d4 ["CALL", null, ["ram:47ad34:8"]]
- 00a9a770 ["INT_ADD", "register:40f0:8", ["const:a9a770:8", "const:4:8"]]
- 00a9a770 ["CALL", null, ["callee:0047ce14:8"]]
+ 00a9a7e0 ["INT_ADD", "register:40f0:8", ["const:a9a7e0:8", "const:4:8"]]
+ 00a9a7e0 ["CALL", null, ["callee:0047ce14:8"]]
~~~


<a id="compare-cf07aa1217f02c16b5eaefa8c1a7ad58"></a>

### [`00a9a7b4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a9a/00a9a7b4.md) → [`00a9a824`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a9a/00a9a824.md) FUN_00a9a824

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)

変更の種類 cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_return_alignment, unresolved_store_alignment

命令の説明率　旧版 61.54% / 新版 61.54%

優先判定に残った影響 `unresolved_return_alignment` 1件, `unresolved_store_alignment` 2件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00a9a7d8",
      "DATA",
      [
        "storage",
        "00c8cc68",
        null,
        "undefined *"
      ]
    ],
    [
      "unmatched:00a9a7dc",
      "READ",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "unmatched:00a9a7e0",
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
      "00a9a848",
      "DATA",
      [
        "storage",
        "00c8cd38",
        null,
        "undefined *"
      ]
    ],
    [
      "00a9a84c",
      "READ",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "00a9a850",
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
- 00a9a7c8 ["INT_ADD", "register:40f0:8", ["const:a9a7c8:8", "const:4:8"]]
- 00a9a7c8 ["CALL", null, ["callee:00c57f60:8"]]
+ 00a9a838 ["INT_ADD", "register:40f0:8", ["const:a9a838:8", "const:4:8"]]
+ 00a9a838 ["CALL", null, ["callee:00c57f60:8"]]
- 00a9a7d4 ["COPY", "tmp:0:8", ["const:c68:8"]]
- 00a9a7d4 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00a9a7d4 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00a9a7d4 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 00a9a7d8 ["COPY", "tmp:0:8", ["register:4040:8"]]
- 00a9a7d8 ["COPY", "tmp:1:8", ["register:4048:8"]]
- 00a9a7d8 ["COPY", "tmp:2:8", ["register:4000:8"]]
- 00a9a7d8 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
~~~


<a id="compare-d484e53b1e241c286f6969cd18955320"></a>

### [`00a9a7e8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a9a/00a9a7e8.md) → [`00a9a858`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a9a/00a9a858.md) FUN_00a9a858

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
      "definition_site": "00a9a864",
      "incomplete_value": false,
      "site": "00a9a864",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c8c000:8"
          ],
          [
            "leaf",
            "const:d38:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00a9a7f4",
      "incomplete_value": false,
      "site": "00a9a7f4",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c8c000:8"
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
      "00a9a864",
      "DATA",
      [
        "storage",
        "00c8cc68",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00a9a864",
      "DATA",
      [
        "storage",
        "00c8cd38",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00a9a7f0 ["COPY", "tmp:0:8", ["const:c68:8"]]
- 00a9a7f0 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 00a9a7f0 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 00a9a7f0 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 00a9a860 ["COPY", "tmp:0:8", ["const:d38:8"]]
+ 00a9a860 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 00a9a860 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 00a9a860 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
~~~


<a id="compare-05db045c622d8cf0dba057c6e570e803"></a>

### [`00a9a804`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a9a/00a9a804.md) → [`00a9a874`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a9a/00a9a874.md) FUN_00a9a874

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 12件 [`0044f8e0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0044f/0044f8e0.md) [`004552f8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00455/004552f8.md) [`0047acf4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047a/0047acf4.md) [`0047cdd4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047c/0047cdd4.md) [`00764384`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00764/00764384.md)
- 新版 呼出元 0件  · 呼出先 12件 [`0044f920`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0044f/0044f920.md) [`00455338`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00455/00455338.md) [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md) [`0047ce14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047ce14.md) [`007643dc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00764/007643dc.md)

変更の種類 branch_condition_or_target, call, call_target, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, store_value, unresolved_store_alignment

命令の説明率　旧版 88.57% / 新版 88.57%

優先判定に残った影響 `call_target` 2件, `store_value` 1件, `unresolved_store_alignment` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "00a9a8d0",
      "incomplete_value": false,
      "site": "00a9a8d0",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c8c000:8"
          ],
          [
            "leaf",
            "const:da8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00a9a860",
      "incomplete_value": false,
      "site": "00a9a860",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c8c000:8"
          ],
          [
            "leaf",
            "const:cd8:8"
          ]
        ]
      ]
    },
    "ordinal": 7,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "call_target",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "00a9a8b8",
      "value": [
        "leaf",
        "ram:7643dc:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "00a9a848",
      "value": [
        "leaf",
        "ram:764384:8"
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
      "site": "00a9a94c",
      "value": [
        "leaf",
        "ram:47ad34:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "00a9a8dc",
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
      "unmatched:00a9a820",
      "WRITE",
      [
        "storage",
        "Stack[-0x38]",
        null,
        null
      ]
    ],
    [
      "00a9a8b8",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "00764384"
      ]
    ],
    [
      "00a9a8d0",
      "DATA",
      [
        "storage",
        "00c8ccd8",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00a9a890",
      "WRITE",
      [
        "storage",
        "Stack[-0x38]",
        null,
        null
      ]
    ],
    [
      "00a9a8b8",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "007643dc"
      ]
    ],
    [
      "00a9a8d0",
      "DATA",
      [
        "storage",
        "00c8cda8",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00a9a848 ["INT_ADD", "register:40f0:8", ["const:a9a848:8", "const:4:8"]]
- 00a9a848 ["CALL", null, ["ram:764384:8"]]
+ 00a9a8b8 ["INT_ADD", "register:40f0:8", ["const:a9a8b8:8", "const:4:8"]]
+ 00a9a8b8 ["CALL", null, ["ram:7643dc:8"]]
- 00a9a8b8 ["INT_ADD", "register:40f0:8", ["const:a9a8b8:8", "const:4:8"]]
- 00a9a8b8 ["CALL", null, ["callee:00c57f80:8"]]
+ 00a9a928 ["INT_ADD", "register:40f0:8", ["const:a9a928:8", "const:4:8"]]
+ 00a9a928 ["CALL", null, ["callee:00c57f80:8"]]
- 00a9a8dc ["INT_ADD", "register:40f0:8", ["const:a9a8dc:8", "const:4:8"]]
- 00a9a8dc ["CALL", null, ["ram:47acf4:8"]]
+ 00a9a94c ["INT_ADD", "register:40f0:8", ["const:a9a94c:8", "const:4:8"]]
+ 00a9a94c ["CALL", null, ["ram:47ad34:8"]]
~~~


<a id="compare-c2ab509f0aaf1f2cc34fbb2f6415fbab"></a>

### [`00a9a9dc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a9a/00a9a9dc.md) → [`00a9aa4c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a9a/00a9aa4c.md) FUN_00a9aa4c

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
      "definition_site": "00a9aa70",
      "incomplete_value": false,
      "site": "00a9aa70",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c8c000:8"
          ],
          [
            "leaf",
            "const:da8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00a9aa00",
      "incomplete_value": false,
      "site": "00a9aa00",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c8c000:8"
          ],
          [
            "leaf",
            "const:cd8:8"
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
      "00a9aa70",
      "DATA",
      [
        "storage",
        "00c8ccd8",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00a9aa70",
      "DATA",
      [
        "storage",
        "00c8cda8",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00a9a9f0 ["INT_ADD", "register:40f0:8", ["const:a9a9f0:8", "const:4:8"]]
- 00a9a9f0 ["CALL", null, ["callee:00c57f60:8"]]
+ 00a9aa60 ["INT_ADD", "register:40f0:8", ["const:a9aa60:8", "const:4:8"]]
+ 00a9aa60 ["CALL", null, ["callee:00c57f60:8"]]
- 00a9a9fc ["COPY", "tmp:0:8", ["const:cd8:8"]]
- 00a9a9fc ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00a9a9fc ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00a9a9fc ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00a9aa6c ["COPY", "tmp:0:8", ["const:da8:8"]]
+ 00a9aa6c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00a9aa6c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00a9aa6c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-3f2061f6e3ce9bcc8b517943ad4d0262"></a>

### [`00a9aa10`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a9a/00a9aa10.md) → [`00a9aa80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a9a/00a9aa80.md) FUN_00a9aa80

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
      "definition_site": "00a9aa8c",
      "incomplete_value": false,
      "site": "00a9aa8c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c8c000:8"
          ],
          [
            "leaf",
            "const:da8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00a9aa1c",
      "incomplete_value": false,
      "site": "00a9aa1c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c8c000:8"
          ],
          [
            "leaf",
            "const:cd8:8"
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
      "00a9aa8c",
      "DATA",
      [
        "storage",
        "00c8ccd8",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00a9aa8c",
      "DATA",
      [
        "storage",
        "00c8cda8",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00a9aa18 ["COPY", "tmp:0:8", ["const:cd8:8"]]
- 00a9aa18 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 00a9aa18 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 00a9aa18 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 00a9aa88 ["COPY", "tmp:0:8", ["const:da8:8"]]
+ 00a9aa88 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 00a9aa88 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 00a9aa88 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
~~~


<a id="compare-d2adc6c8bbec1f388def1d6b48f8f8e2"></a>

### [`00a9aa2c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a9a/00a9aa2c.md) → [`00a9aa9c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a9a/00a9aa9c.md) FUN_00a9aa9c

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 3件 [`008514f8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00851/008514f8.md) [`00853c70`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00853/00853c70.md) [`00a89b5c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a89/00a89b5c.md)
- 新版 呼出元 0件  · 呼出先 3件 [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md) [`00853cc8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00853/00853cc8.md) [`00a89bcc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a89/00a89bcc.md)

変更の種類 branch_condition_or_target, cfg_edge_inventory, constant, control_flow, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00a9aa40 ["BOOL_NEGATE", "tmp:0:1", ["register:101:1"]]
- 00a9aa40 ["CBRANCH", null, ["local:b5:8", "tmp:0:1"]]
+ 00a9aab0 ["BOOL_NEGATE", "tmp:0:1", ["register:101:1"]]
+ 00a9aab0 ["CBRANCH", null, ["local:b4:8", "tmp:0:1"]]
- 00a9aa4c ["INT_EQUAL", "tmp:0:1", ["register:4040:8", "const:0:8"]]
- 00a9aa4c ["CBRANCH", null, ["local:b5:8", "tmp:0:1"]]
+ 00a9aabc ["INT_EQUAL", "tmp:0:1", ["register:4040:8", "const:0:8"]]
+ 00a9aabc ["CBRANCH", null, ["local:b4:8", "tmp:0:1"]]
- 00a9aa50 ["INT_ADD", "register:40f0:8", ["const:a9aa50:8", "const:4:8"]]
- 00a9aa50 ["CALL", null, ["callee:00851550:8"]]
+ 00a9aac0 ["INT_ADD", "register:40f0:8", ["const:a9aac0:8", "const:4:8"]]
+ 00a9aac0 ["CALL", null, ["callee:00851550:8"]]
~~~


<a id="compare-0e8933497b904e9b839c0fe7c7f8201e"></a>

### [`00a9aae4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a9a/00a9aae4.md) → [`00a9ab54`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a9a/00a9ab54.md) FUN_00a9ab54

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
      "unmatched:00a9aafc",
      "DATA",
      [
        "storage",
        "00c8cd68",
        null,
        "undefined *"
      ]
    ],
    [
      "unmatched:00a9ab00",
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
      "00a9ab6c",
      "DATA",
      [
        "storage",
        "00c8ce38",
        null,
        "undefined *"
      ]
    ],
    [
      "00a9ab70",
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
- 00a9aaf0 ["INT_ADD", "register:40f0:8", ["const:a9aaf0:8", "const:4:8"]]
- 00a9aaf0 ["CALL", null, ["callee:00c57f60:8"]]
+ 00a9ab60 ["INT_ADD", "register:40f0:8", ["const:a9ab60:8", "const:4:8"]]
+ 00a9ab60 ["CALL", null, ["callee:00c57f60:8"]]
- 00a9aaf8 ["COPY", "tmp:0:8", ["const:d68:8"]]
- 00a9aaf8 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00a9aaf8 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00a9aaf8 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 00a9aafc ["COPY", "tmp:0:8", ["register:4000:8"]]
- 00a9aafc ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4040:8"]]
~~~


<a id="compare-aa97e231c482d0ac822fc78f2b192158"></a>

### [`00a9ab08`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a9a/00a9ab08.md) → [`00a9ab78`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a9a/00a9ab78.md) FUN_00a9ab78

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 0件 
- 新版 呼出元 0件  · 呼出先 0件 

変更の種類 cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_return_alignment, unresolved_store_alignment

命令の説明率　旧版 0.00% / 新版 0.00%

優先判定に残った影響 `unresolved_return_alignment` 1件, `unresolved_store_alignment` 1件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00a9ab10",
      "DATA",
      [
        "storage",
        "00c8cd68",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00a9ab80",
      "DATA",
      [
        "storage",
        "00c8ce38",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00a9ab08 ["COPY", "register:4040:8", ["const:c8c000:8"]]
- 00a9ab0c ["COPY", "tmp:0:8", ["const:d68:8"]]
- 00a9ab0c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00a9ab0c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00a9ab0c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 00a9ab10 ["COPY", "tmp:0:8", ["register:4008:8"]]
- 00a9ab10 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4040:8"]]
~~~


<a id="compare-0bcb4c7d21374edc06e933a22128b431"></a>

### [`00a9ab20`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a9a/00a9ab20.md) → [`00a9ab90`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a9a/00a9ab90.md) FUN_00a9ab90

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 5件 [`0046cac8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0046c/0046cac8.md) [`0047acf4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047a/0047acf4.md) [`0047cdd4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047c/0047cdd4.md) [`008514f8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00851/008514f8.md) [`008b9178`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008b9/008b9178.md)
- 新版 呼出元 0件  · 呼出先 5件 [`0046cb08`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046c/0046cb08.md) [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md) [`0047ce14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047ce14.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md) [`008b91d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b9/008b91d0.md)

変更の種類 call, call_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 79.31% / 新版 79.31%

優先判定に残った影響 `unresolved_branch_alignment` 1件, `unresolved_call_alignment` 1件, `unresolved_store_alignment` 3件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00a9ab20",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "unmatched:00a9ab24",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "unmatched:00a9ab40",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00a9abd8"
      ]
    ]
  ],
  "added": [
    [
      "00a9ab90",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "00a9ab94",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "00a9abb0",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00a9abd8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00a9ab20 ["COPY", "tmp:0:8", ["register:40e8:8"]]
- 00a9ab20 ["COPY", "tmp:1:8", ["register:40f0:8"]]
- 00a9ab20 ["INT_ADD", "register:8:8", ["register:8:8", "const:ffffffffffffffe0:8"]]
- 00a9ab20 ["STORE", null, ["const:1b1:8", "register:8:8", "tmp:0:8"]]
- 00a9ab24 ["INT_ADD", "tmp:0:8", ["register:8:8", "const:10:8"]]
- 00a9ab24 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4098:8"]]
- 00a9ab28 ["COPY", "register:40e8:8", ["register:8:8"]]
~~~


<a id="compare-845b6df32926aac74c9fd1e94260a782"></a>

### [`00a9abc0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a9a/00a9abc0.md) → [`00a9ac30`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a9a/00a9ac30.md) FUN_00a9ac30

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
      "definition_site": "00a9ac44",
      "incomplete_value": false,
      "site": "00a9ac48",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c8c000:8"
          ],
          [
            "leaf",
            "const:eb8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00a9abd4",
      "incomplete_value": false,
      "site": "00a9abd8",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c8c000:8"
          ],
          [
            "leaf",
            "const:de8:8"
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
      "00a9ac48",
      "DATA",
      [
        "storage",
        "00c8cde8",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00a9ac48",
      "DATA",
      [
        "storage",
        "00c8ceb8",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00a9abcc ["INT_ADD", "register:40f0:8", ["const:a9abcc:8", "const:4:8"]]
- 00a9abcc ["CALL", null, ["callee:00c57f60:8"]]
+ 00a9ac3c ["INT_ADD", "register:40f0:8", ["const:a9ac3c:8", "const:4:8"]]
+ 00a9ac3c ["CALL", null, ["callee:00c57f60:8"]]
- 00a9abd4 ["COPY", "tmp:0:8", ["const:de8:8"]]
- 00a9abd4 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00a9abd4 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00a9abd4 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00a9ac44 ["COPY", "tmp:0:8", ["const:eb8:8"]]
+ 00a9ac44 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00a9ac44 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00a9ac44 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-35c4de7811b1936cca2a8aa092b34108"></a>

### [`00a9abe4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a9a/00a9abe4.md) → [`00a9ac54`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a9a/00a9ac54.md) FUN_00a9ac54

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
      "definition_site": "00a9ac58",
      "incomplete_value": false,
      "site": "00a9ac5c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c8c000:8"
          ],
          [
            "leaf",
            "const:eb8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00a9abe8",
      "incomplete_value": false,
      "site": "00a9abec",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c8c000:8"
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
      "00a9ac5c",
      "DATA",
      [
        "storage",
        "00c8cde8",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00a9ac5c",
      "DATA",
      [
        "storage",
        "00c8ceb8",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00a9abe8 ["COPY", "tmp:0:8", ["const:de8:8"]]
- 00a9abe8 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00a9abe8 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00a9abe8 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00a9ac58 ["COPY", "tmp:0:8", ["const:eb8:8"]]
+ 00a9ac58 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00a9ac58 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00a9ac58 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-3f132d0595680932b627462ed93f8dbc"></a>

### [`00a9aca4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a9a/00a9aca4.md) → [`00a9ad14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a9a/00a9ad14.md) FUN_00a9ad14

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
      "definition_site": "00a9ad28",
      "incomplete_value": false,
      "site": "00a9ad2c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c8c000:8"
          ],
          [
            "leaf",
            "const:f38:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00a9acb8",
      "incomplete_value": false,
      "site": "00a9acbc",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c8c000:8"
          ],
          [
            "leaf",
            "const:e68:8"
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
      "00a9ad2c",
      "DATA",
      [
        "storage",
        "00c8ce68",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00a9ad2c",
      "DATA",
      [
        "storage",
        "00c8cf38",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00a9acb0 ["INT_ADD", "register:40f0:8", ["const:a9acb0:8", "const:4:8"]]
- 00a9acb0 ["CALL", null, ["callee:00c57f60:8"]]
+ 00a9ad20 ["INT_ADD", "register:40f0:8", ["const:a9ad20:8", "const:4:8"]]
+ 00a9ad20 ["CALL", null, ["callee:00c57f60:8"]]
- 00a9acb8 ["COPY", "tmp:0:8", ["const:e68:8"]]
- 00a9acb8 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00a9acb8 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00a9acb8 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00a9ad28 ["COPY", "tmp:0:8", ["const:f38:8"]]
+ 00a9ad28 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00a9ad28 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00a9ad28 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-13954b9f31479a7d0a0264ef93af1e0f"></a>

### [`00a9acc8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a9a/00a9acc8.md) → [`00a9ad38`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a9a/00a9ad38.md) FUN_00a9ad38

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
      "definition_site": "00a9ad3c",
      "incomplete_value": false,
      "site": "00a9ad40",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c8c000:8"
          ],
          [
            "leaf",
            "const:f38:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00a9accc",
      "incomplete_value": false,
      "site": "00a9acd0",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c8c000:8"
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
      "00a9ad40",
      "DATA",
      [
        "storage",
        "00c8ce68",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00a9ad40",
      "DATA",
      [
        "storage",
        "00c8cf38",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00a9accc ["COPY", "tmp:0:8", ["const:e68:8"]]
- 00a9accc ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00a9accc ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00a9accc ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00a9ad3c ["COPY", "tmp:0:8", ["const:f38:8"]]
+ 00a9ad3c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00a9ad3c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00a9ad3c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-0dd3b04f661ae2f16f42a89407d86009"></a>

### [`00a9ad88`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a9a/00a9ad88.md) → [`00a9adf8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a9a/00a9adf8.md) FUN_00a9adf8

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
      "definition_site": "00a9ae1c",
      "incomplete_value": false,
      "site": "00a9ae1c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c8c000:8"
          ],
          [
            "leaf",
            "const:fb8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00a9adac",
      "incomplete_value": false,
      "site": "00a9adac",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c8c000:8"
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
      "00a9ae1c",
      "DATA",
      [
        "storage",
        "00c8cee8",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00a9ae1c",
      "DATA",
      [
        "storage",
        "00c8cfb8",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00a9ad9c ["INT_ADD", "register:40f0:8", ["const:a9ad9c:8", "const:4:8"]]
- 00a9ad9c ["CALL", null, ["callee:00c57f60:8"]]
+ 00a9ae0c ["INT_ADD", "register:40f0:8", ["const:a9ae0c:8", "const:4:8"]]
+ 00a9ae0c ["CALL", null, ["callee:00c57f60:8"]]
- 00a9ada8 ["COPY", "tmp:0:8", ["const:ee8:8"]]
- 00a9ada8 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00a9ada8 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00a9ada8 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00a9ae18 ["COPY", "tmp:0:8", ["const:fb8:8"]]
+ 00a9ae18 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00a9ae18 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00a9ae18 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-7a1318d9533dd911aca728eafe73ad24"></a>

### [`00a9adbc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a9a/00a9adbc.md) → [`00a9ae2c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a9a/00a9ae2c.md) FUN_00a9ae2c

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
      "definition_site": "00a9ae38",
      "incomplete_value": false,
      "site": "00a9ae38",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c8c000:8"
          ],
          [
            "leaf",
            "const:fb8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00a9adc8",
      "incomplete_value": false,
      "site": "00a9adc8",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c8c000:8"
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
      "00a9ae38",
      "DATA",
      [
        "storage",
        "00c8cee8",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00a9ae38",
      "DATA",
      [
        "storage",
        "00c8cfb8",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00a9adc4 ["COPY", "tmp:0:8", ["const:ee8:8"]]
- 00a9adc4 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 00a9adc4 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 00a9adc4 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 00a9ae34 ["COPY", "tmp:0:8", ["const:fb8:8"]]
+ 00a9ae34 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 00a9ae34 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 00a9ae34 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
~~~


<a id="compare-7dc08d6a8996ab8bc26da2986c679177"></a>

### [`00a9add8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a9a/00a9add8.md) → [`00a9ae48`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a9a/00a9ae48.md) FUN_00a9ae48

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 2件 [`00a8e5b4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a8e/00a8e5b4.md) [`00a919dc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a91/00a919dc.md) · 呼出先 10件 [`00764384`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00764/00764384.md) [`008877d0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00887/008877d0.md) [`008877d8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00887/008877d8.md) [`008877e0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00887/008877e0.md) [`00b33150`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b33/00b33150.md)
- 新版 呼出元 2件 [`00a8e624`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a8e/00a8e624.md) [`00a91a4c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a91/00a91a4c.md) · 呼出先 10件 [`007643dc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00764/007643dc.md) [`00887828`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00887/00887828.md) [`00887830`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00887/00887830.md) [`00887838`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00887/00887838.md) [`00b331ec`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b33/00b331ec.md)

変更の種類 call, call_argument_candidate, call_target, constant, operands_and_dependencies, store_value

命令の説明率　旧版 93.59% / 新版 93.59%

優先判定に残った影響 `call_argument_candidate` 1件, `call_target` 1件, `store_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00a9aeb0",
      "incomplete_value": true,
      "site": "00a9aeb0",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:141:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00a9ae40",
      "incomplete_value": true,
      "site": "00a9ae40",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:19d:8"
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
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00a9aebc",
      "incomplete_value": false,
      "site": "00a9aec4",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:1124000:8"
          ],
          [
            "leaf",
            "const:208:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00a9ae4c",
      "incomplete_value": false,
      "site": "00a9ae54",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:1124000:8"
          ],
          [
            "leaf",
            "const:108:8"
          ]
        ]
      ]
    },
    "ordinal": 3,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "call_target",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "00a9af2c",
      "value": [
        "leaf",
        "ram:7643dc:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "00a9aebc",
      "value": [
        "leaf",
        "ram:764384:8"
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
      "00a9ae9c",
      "READ",
      [
        "storage",
        "002af19d",
        null,
        "string"
      ]
    ],
    [
      "00a9aebc",
      "PARAM",
      [
        "storage",
        "01124108",
        null,
        "undefined1"
      ]
    ],
    [
      "00a9af2c",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "00764384"
      ]
    ]
  ],
  "added": [
    [
      "00a9ae9c",
      "READ",
      [
        "storage",
        "002af141",
        null,
        "string"
      ]
    ],
    [
      "00a9aebc",
      "PARAM",
      [
        "storage",
        "01124208",
        null,
        "undefined1"
      ]
    ],
    [
      "00a9af2c",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "007643dc"
      ]
    ]
  ]
}
~~~


~~~diff
- 00a9ae4c ["COPY", "tmp:0:8", ["const:108:8"]]
- 00a9ae4c ["INT_CARRY", "register:105:1", ["register:4008:8", "tmp:0:8"]]
- 00a9ae4c ["INT_SCARRY", "register:106:1", ["register:4008:8", "tmp:0:8"]]
- 00a9ae4c ["INT_ADD", "tmp:1:8", ["register:4008:8", "tmp:0:8"]]
+ 00a9aebc ["COPY", "tmp:0:8", ["const:208:8"]]
+ 00a9aebc ["INT_CARRY", "register:105:1", ["register:4008:8", "tmp:0:8"]]
+ 00a9aebc ["INT_SCARRY", "register:106:1", ["register:4008:8", "tmp:0:8"]]
+ 00a9aebc ["INT_ADD", "tmp:1:8", ["register:4008:8", "tmp:0:8"]]
- 00a9ae54 ["INT_ADD", "register:40f0:8", ["const:a9ae54:8", "const:4:8"]]
- 00a9ae54 ["CALL", null, ["callee:00b331ec:8"]]
+ 00a9aec4 ["INT_ADD", "register:40f0:8", ["const:a9aec4:8", "const:4:8"]]
+ 00a9aec4 ["CALL", null, ["callee:00b331ec:8"]]
- 00a9aebc ["INT_ADD", "register:40f0:8", ["const:a9aebc:8", "const:4:8"]]
- 00a9aebc ["CALL", null, ["ram:764384:8"]]
+ 00a9af2c ["INT_ADD", "register:40f0:8", ["const:a9af2c:8", "const:4:8"]]
+ 00a9af2c ["CALL", null, ["ram:7643dc:8"]]
~~~


<a id="compare-c30f2b380005457e53895b79b03e8157"></a>

### [`00a9af6c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a9a/00a9af6c.md) → [`00a9afdc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a9a/00a9afdc.md) FUN_00a9afdc

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
      "definition_site": "00a9b000",
      "incomplete_value": false,
      "site": "00a9b000",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c8d000:8"
          ],
          [
            "leaf",
            "const:38:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00a9af90",
      "incomplete_value": false,
      "site": "00a9af90",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c8c000:8"
          ],
          [
            "leaf",
            "const:f68:8"
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
      "00a9b000",
      "DATA",
      [
        "storage",
        "00c8cf68",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00a9b000",
      "DATA",
      [
        "storage",
        "00c8d038",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00a9af80 ["INT_ADD", "register:40f0:8", ["const:a9af80:8", "const:4:8"]]
- 00a9af80 ["CALL", null, ["callee:00c57f60:8"]]
+ 00a9aff0 ["INT_ADD", "register:40f0:8", ["const:a9aff0:8", "const:4:8"]]
+ 00a9aff0 ["CALL", null, ["callee:00c57f60:8"]]
- 00a9af88 ["COPY", "register:4040:8", ["const:c8c000:8"]]
+ 00a9aff8 ["COPY", "register:4040:8", ["const:c8d000:8"]]
- 00a9af8c ["COPY", "tmp:0:8", ["const:f68:8"]]
- 00a9af8c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00a9af8c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00a9af8c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00a9affc ["COPY", "tmp:0:8", ["const:38:8"]]
+ 00a9affc ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00a9affc ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00a9affc ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-8aff714f48d084086d919fdd1aa68d5b"></a>

### [`00a9b0ac`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a9b/00a9b0ac.md) → [`00a9b11c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a9b/00a9b11c.md) FUN_00a9b11c

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
      "definition_site": "00a9b140",
      "incomplete_value": false,
      "site": "00a9b140",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c8d000:8"
          ],
          [
            "leaf",
            "const:b8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00a9b0d0",
      "incomplete_value": false,
      "site": "00a9b0d0",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c8c000:8"
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
      "00a9b140",
      "DATA",
      [
        "storage",
        "00c8cfe8",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00a9b140",
      "DATA",
      [
        "storage",
        "00c8d0b8",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00a9b0c0 ["INT_ADD", "register:40f0:8", ["const:a9b0c0:8", "const:4:8"]]
- 00a9b0c0 ["CALL", null, ["callee:00c57f60:8"]]
+ 00a9b130 ["INT_ADD", "register:40f0:8", ["const:a9b130:8", "const:4:8"]]
+ 00a9b130 ["CALL", null, ["callee:00c57f60:8"]]
- 00a9b0c8 ["COPY", "register:4040:8", ["const:c8c000:8"]]
+ 00a9b138 ["COPY", "register:4040:8", ["const:c8d000:8"]]
- 00a9b0cc ["COPY", "tmp:0:8", ["const:fe8:8"]]
- 00a9b0cc ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00a9b0cc ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00a9b0cc ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00a9b13c ["COPY", "tmp:0:8", ["const:b8:8"]]
+ 00a9b13c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00a9b13c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00a9b13c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-06a02b867aeb784679afaccd71266c79"></a>

### [`00a9b1d4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a9b/00a9b1d4.md) → [`00a9b244`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a9b/00a9b244.md) FUN_00a9b244

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
      "definition_site": "00a9b268",
      "incomplete_value": false,
      "site": "00a9b268",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c8d000:8"
          ],
          [
            "leaf",
            "const:138:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00a9b1f8",
      "incomplete_value": false,
      "site": "00a9b1f8",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c8d000:8"
          ],
          [
            "leaf",
            "const:68:8"
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
      "00a9b268",
      "DATA",
      [
        "storage",
        "00c8d068",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00a9b268",
      "DATA",
      [
        "storage",
        "00c8d138",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00a9b1e8 ["INT_ADD", "register:40f0:8", ["const:a9b1e8:8", "const:4:8"]]
- 00a9b1e8 ["CALL", null, ["callee:00c57f60:8"]]
+ 00a9b258 ["INT_ADD", "register:40f0:8", ["const:a9b258:8", "const:4:8"]]
+ 00a9b258 ["CALL", null, ["callee:00c57f60:8"]]
- 00a9b1f4 ["COPY", "tmp:0:8", ["const:68:8"]]
- 00a9b1f4 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00a9b1f4 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00a9b1f4 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00a9b264 ["COPY", "tmp:0:8", ["const:138:8"]]
+ 00a9b264 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00a9b264 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00a9b264 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-5bc299f4b63e344f4fc25ab8e9021bbb"></a>

### [`00a9b208`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a9b/00a9b208.md) → [`00a9b278`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a9b/00a9b278.md) FUN_00a9b278

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
      "definition_site": "00a9b284",
      "incomplete_value": false,
      "site": "00a9b284",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c8d000:8"
          ],
          [
            "leaf",
            "const:138:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00a9b214",
      "incomplete_value": false,
      "site": "00a9b214",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c8d000:8"
          ],
          [
            "leaf",
            "const:68:8"
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
      "00a9b284",
      "DATA",
      [
        "storage",
        "00c8d068",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00a9b284",
      "DATA",
      [
        "storage",
        "00c8d138",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00a9b210 ["COPY", "tmp:0:8", ["const:68:8"]]
- 00a9b210 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 00a9b210 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 00a9b210 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 00a9b280 ["COPY", "tmp:0:8", ["const:138:8"]]
+ 00a9b280 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 00a9b280 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 00a9b280 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
~~~


<a id="compare-83372f79e54b2b0bc1863b98e05bdfbb"></a>

### [`00a9b224`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a9b/00a9b224.md) → [`00a9b294`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a9b/00a9b294.md) FUN_00a9b294

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 5件 [`0047acf4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047a/0047acf4.md) [`0047cdd4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047c/0047cdd4.md) [`0082eaf8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0082e/0082eaf8.md) [`00853c70`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00853/00853c70.md) [`00a927fc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a92/00a927fc.md)
- 新版 呼出元 0件  · 呼出先 5件 [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md) [`0047ce14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047ce14.md) [`0082eb50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0082e/0082eb50.md) [`00853cc8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00853/00853cc8.md) [`00a9286c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a92/00a9286c.md)

変更の種類 branch_condition_or_target, call, call_argument_candidate, call_target, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, operands_and_dependencies, operation_sequence, unresolved_return_alignment

命令の説明率　旧版 88.57% / 新版 88.57%

優先判定に残った影響 `call_argument_candidate` 3件, `call_target` 2件, `unresolved_return_alignment` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_target",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "00a9b2b8",
      "value": [
        "leaf",
        "ram:47ad34:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "00a9b248",
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
      "site": "00a9b2c4",
      "value": [
        "leaf",
        "ram:47ad34:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "00a9b254",
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
    "new": null,
    "old": {
      "definition_site": "00a9b28c",
      "incomplete_value": true,
      "site": "00a9b290",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "INT_ADD",
            "8",
            [
              [
                "live",
                "register:4098:8"
              ],
              "INT_LEFT"
            ]
          ],
          [
            "leaf",
            "const:b48:8"
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
      "00a9b2b8",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047acf4"
      ]
    ],
    [
      "00a9b2c4",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047acf4"
      ]
    ]
  ],
  "added": [
    [
      "00a9b2b8",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ],
    [
      "00a9b2c4",
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
- 00a9b248 ["INT_ADD", "register:40f0:8", ["const:a9b248:8", "const:4:8"]]
- 00a9b248 ["CALL", null, ["ram:47acf4:8"]]
+ 00a9b2b8 ["INT_ADD", "register:40f0:8", ["const:a9b2b8:8", "const:4:8"]]
+ 00a9b2b8 ["CALL", null, ["ram:47ad34:8"]]
- 00a9b254 ["INT_ADD", "register:40f0:8", ["const:a9b254:8", "const:4:8"]]
- 00a9b254 ["CALL", null, ["ram:47acf4:8"]]
+ 00a9b2c4 ["INT_ADD", "register:40f0:8", ["const:a9b2c4:8", "const:4:8"]]
+ 00a9b2c4 ["CALL", null, ["ram:47ad34:8"]]
- 00a9b290 ["INT_ADD", "register:40f0:8", ["const:a9b290:8", "const:4:8"]]
- 00a9b290 ["CALL", null, ["callee:0082eb50:8"]]
+ 00a9b300 ["INT_ADD", "register:40f0:8", ["const:a9b300:8", "const:4:8"]]
+ 00a9b300 ["CALL", null, ["callee:0082eb50:8"]]
~~~


<a id="compare-f110d8f45ed4301505b75a05efa00aec"></a>

### [`00a9b2dc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a9b/00a9b2dc.md) → [`00a9b34c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a9b/00a9b34c.md) FUN_00a9b34c

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
      "definition_site": "00a9b370",
      "incomplete_value": false,
      "site": "00a9b370",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c8d000:8"
          ],
          [
            "leaf",
            "const:1b8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00a9b300",
      "incomplete_value": false,
      "site": "00a9b300",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c8d000:8"
          ],
          [
            "leaf",
            "const:e8:8"
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
      "00a9b370",
      "DATA",
      [
        "storage",
        "00c8d0e8",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00a9b370",
      "DATA",
      [
        "storage",
        "00c8d1b8",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00a9b2f0 ["INT_ADD", "register:40f0:8", ["const:a9b2f0:8", "const:4:8"]]
- 00a9b2f0 ["CALL", null, ["callee:00c57f60:8"]]
+ 00a9b360 ["INT_ADD", "register:40f0:8", ["const:a9b360:8", "const:4:8"]]
+ 00a9b360 ["CALL", null, ["callee:00c57f60:8"]]
- 00a9b2fc ["COPY", "tmp:0:8", ["const:e8:8"]]
- 00a9b2fc ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00a9b2fc ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00a9b2fc ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00a9b36c ["COPY", "tmp:0:8", ["const:1b8:8"]]
+ 00a9b36c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00a9b36c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00a9b36c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-ed798f18b5f30a8beec6e20df8a02640"></a>

### [`00a9b310`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a9b/00a9b310.md) → [`00a9b380`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a9b/00a9b380.md) FUN_00a9b380

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
      "definition_site": "00a9b38c",
      "incomplete_value": false,
      "site": "00a9b38c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c8d000:8"
          ],
          [
            "leaf",
            "const:1b8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00a9b31c",
      "incomplete_value": false,
      "site": "00a9b31c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c8d000:8"
          ],
          [
            "leaf",
            "const:e8:8"
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
      "00a9b38c",
      "DATA",
      [
        "storage",
        "00c8d0e8",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00a9b38c",
      "DATA",
      [
        "storage",
        "00c8d1b8",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00a9b318 ["COPY", "tmp:0:8", ["const:e8:8"]]
- 00a9b318 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 00a9b318 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 00a9b318 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 00a9b388 ["COPY", "tmp:0:8", ["const:1b8:8"]]
+ 00a9b388 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 00a9b388 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 00a9b388 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
~~~


<a id="compare-537a6c4db1d448ea16018cd90d42f243"></a>

### [`00a9b32c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a9b/00a9b32c.md) → [`00a9b39c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a9b/00a9b39c.md) FUN_00a9b39c

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 4件 [`0047acf4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047a/0047acf4.md) [`0047cdd4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047c/0047cdd4.md) [`0082eaf8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0082e/0082eaf8.md) [`00a927fc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a92/00a927fc.md)
- 新版 呼出元 0件  · 呼出先 4件 [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md) [`0047ce14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047ce14.md) [`0082eb50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0082e/0082eb50.md) [`00a9286c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a92/00a9286c.md)

変更の種類 call, call_target, constant, operands_and_dependencies

命令の説明率　旧版 93.55% / 新版 93.55%

優先判定に残った影響 `call_target` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_target",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "00a9b3c0",
      "value": [
        "leaf",
        "ram:47ad34:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "00a9b350",
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
      "site": "00a9b3cc",
      "value": [
        "leaf",
        "ram:47ad34:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "00a9b35c",
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
      "00a9b3c0",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047acf4"
      ]
    ],
    [
      "00a9b3cc",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047acf4"
      ]
    ]
  ],
  "added": [
    [
      "00a9b3c0",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ],
    [
      "00a9b3cc",
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
- 00a9b350 ["INT_ADD", "register:40f0:8", ["const:a9b350:8", "const:4:8"]]
- 00a9b350 ["CALL", null, ["ram:47acf4:8"]]
+ 00a9b3c0 ["INT_ADD", "register:40f0:8", ["const:a9b3c0:8", "const:4:8"]]
+ 00a9b3c0 ["CALL", null, ["ram:47ad34:8"]]
- 00a9b35c ["INT_ADD", "register:40f0:8", ["const:a9b35c:8", "const:4:8"]]
- 00a9b35c ["CALL", null, ["ram:47acf4:8"]]
+ 00a9b3cc ["INT_ADD", "register:40f0:8", ["const:a9b3cc:8", "const:4:8"]]
+ 00a9b3cc ["CALL", null, ["ram:47ad34:8"]]
- 00a9b388 ["INT_ADD", "register:40f0:8", ["const:a9b388:8", "const:4:8"]]
- 00a9b388 ["CALL", null, ["callee:0082eb50:8"]]
+ 00a9b3f8 ["INT_ADD", "register:40f0:8", ["const:a9b3f8:8", "const:4:8"]]
+ 00a9b3f8 ["CALL", null, ["callee:0082eb50:8"]]
~~~


<a id="compare-854246555032efeedb86b56c791b3d00"></a>

### [`00a9b3d0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a9b/00a9b3d0.md) → [`00a9b440`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a9b/00a9b440.md) _INIT_231

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 6件 [`0043ae70`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043a/0043ae70.md) [`0043b7f8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043b7f8.md) [`00bc47f0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bc4/00bc47f0.md) [`00c57e30`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e30.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md)
- 新版 呼出元 0件  · 呼出先 6件 [`0043aeb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043a/0043aeb0.md) [`0043b838`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b838.md) [`00bc488c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bc4/00bc488c.md) [`00c57f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f00.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)

変更の種類 branch_condition_or_target, call, call_argument_candidate, call_count, cfg_edge_inventory, constant, control_flow, operands_and_dependencies, operation_sequence, store_destination, store_value, unresolved_call_alignment

命令の説明率　旧版 74.04% / 新版 74.04%

優先判定に残った影響 `call_argument_candidate` 5件, `store_destination` 11件, `store_value` 9件, `unresolved_call_alignment` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00a9b47c",
      "incomplete_value": true,
      "site": "00a9b498",
      "value": [
        "LOAD",
        "16",
        [
          [
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
      "definition_site": "00a9b40c",
      "incomplete_value": true,
      "site": "00a9b428",
      "value": [
        "LOAD",
        "16",
        [
          [
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
      "definition_site": "00a9b4a0",
      "incomplete_value": true,
      "site": "00a9b4bc",
      "value": [
        "LOAD",
        "16",
        [
          [
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
      "definition_site": "00a9b430",
      "incomplete_value": true,
      "site": "00a9b44c",
      "value": [
        "LOAD",
        "16",
        [
          [
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
      "definition_site": "00a9b4c0",
      "incomplete_value": true,
      "site": "00a9b4dc",
      "value": [
        "LOAD",
        "16",
        [
          [
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
      "definition_site": "00a9b450",
      "incomplete_value": true,
      "site": "00a9b46c",
      "value": [
        "LOAD",
        "16",
        [
          [
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
      "00a9b47c",
      "READ",
      [
        "storage",
        "002b7f26",
        null,
        "string"
      ]
    ],
    [
      "00a9b4a0",
      "READ",
      [
        "storage",
        "002b7f39",
        null,
        "string"
      ]
    ],
    [
      "00a9b4c0",
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
      "00a9b47c",
      "READ",
      [
        "storage",
        "002b7f66",
        null,
        "string"
      ]
    ],
    [
      "00a9b4a0",
      "READ",
      [
        "storage",
        "002b7f79",
        null,
        "string"
      ]
    ],
    [
      "00a9b4c0",
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
- 00a9b3fc ["COPY", "tmp:0:8", ["const:d8:8"]]
- 00a9b3fc ["INT_CARRY", "register:105:1", ["register:4098:8", "tmp:0:8"]]
- 00a9b3fc ["INT_SCARRY", "register:106:1", ["register:4098:8", "tmp:0:8"]]
- 00a9b3fc ["INT_ADD", "tmp:1:8", ["register:4098:8", "tmp:0:8"]]
+ 00a9b46c ["COPY", "tmp:0:8", ["const:1d8:8"]]
+ 00a9b46c ["INT_CARRY", "register:105:1", ["register:4098:8", "tmp:0:8"]]
+ 00a9b46c ["INT_SCARRY", "register:106:1", ["register:4098:8", "tmp:0:8"]]
+ 00a9b46c ["INT_ADD", "tmp:1:8", ["register:4098:8", "tmp:0:8"]]
- 00a9b530 ["INT_ADD", "register:40f0:8", ["const:a9b530:8", "const:4:8"]]
- 00a9b530 ["CALL", null, ["callee:0043b838:8"]]
+ 00a9b5a0 ["INT_ADD", "register:40f0:8", ["const:a9b5a0:8", "const:4:8"]]
+ 00a9b5a0 ["CALL", null, ["callee:0043b838:8"]]
- 00a9b580 ["INT_ADD", "register:40f0:8", ["const:a9b580:8", "const:4:8"]]
- 00a9b580 ["CALL", null, ["callee:0043b838:8"]]
+ 00a9b5f0 ["INT_ADD", "register:40f0:8", ["const:a9b5f0:8", "const:4:8"]]
+ 00a9b5f0 ["CALL", null, ["callee:0043b838:8"]]
~~~


<a id="compare-b0f8cc2584fc1483fa8c8925a7453bd2"></a>

### [`00a9bcd4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a9b/00a9bcd4.md) → [`00a9bd44`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a9b/00a9bd44.md) _INIT_232

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
      "definition_site": "00a9bd80",
      "incomplete_value": true,
      "site": "00a9bd9c",
      "value": [
        "LOAD",
        "16",
        [
          [
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
      "definition_site": "00a9bd10",
      "incomplete_value": true,
      "site": "00a9bd2c",
      "value": [
        "LOAD",
        "16",
        [
          [
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
      "definition_site": "00a9bda4",
      "incomplete_value": true,
      "site": "00a9bdc0",
      "value": [
        "LOAD",
        "16",
        [
          [
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
      "definition_site": "00a9bd34",
      "incomplete_value": true,
      "site": "00a9bd50",
      "value": [
        "LOAD",
        "16",
        [
          [
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
      "definition_site": "00a9bdc4",
      "incomplete_value": true,
      "site": "00a9bde0",
      "value": [
        "LOAD",
        "16",
        [
          [
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
      "definition_site": "00a9bd54",
      "incomplete_value": true,
      "site": "00a9bd70",
      "value": [
        "LOAD",
        "16",
        [
          [
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
      "00a9bd80",
      "READ",
      [
        "storage",
        "002b7f26",
        null,
        "string"
      ]
    ],
    [
      "00a9bda4",
      "READ",
      [
        "storage",
        "002b7f39",
        null,
        "string"
      ]
    ],
    [
      "00a9bdc4",
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
      "00a9bd80",
      "READ",
      [
        "storage",
        "002b7f66",
        null,
        "string"
      ]
    ],
    [
      "00a9bda4",
      "READ",
      [
        "storage",
        "002b7f79",
        null,
        "string"
      ]
    ],
    [
      "00a9bdc4",
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
- 00a9bd00 ["COPY", "tmp:0:8", ["const:120:8"]]
- 00a9bd00 ["INT_CARRY", "register:105:1", ["register:4098:8", "tmp:0:8"]]
- 00a9bd00 ["INT_SCARRY", "register:106:1", ["register:4098:8", "tmp:0:8"]]
- 00a9bd00 ["INT_ADD", "tmp:1:8", ["register:4098:8", "tmp:0:8"]]
+ 00a9bd70 ["COPY", "tmp:0:8", ["const:220:8"]]
+ 00a9bd70 ["INT_CARRY", "register:105:1", ["register:4098:8", "tmp:0:8"]]
+ 00a9bd70 ["INT_SCARRY", "register:106:1", ["register:4098:8", "tmp:0:8"]]
+ 00a9bd70 ["INT_ADD", "tmp:1:8", ["register:4098:8", "tmp:0:8"]]
- 00a9be34 ["INT_ADD", "register:40f0:8", ["const:a9be34:8", "const:4:8"]]
- 00a9be34 ["CALL", null, ["callee:0043b838:8"]]
+ 00a9bea4 ["INT_ADD", "register:40f0:8", ["const:a9bea4:8", "const:4:8"]]
+ 00a9bea4 ["CALL", null, ["callee:0043b838:8"]]
- 00a9be84 ["INT_ADD", "register:40f0:8", ["const:a9be84:8", "const:4:8"]]
- 00a9be84 ["CALL", null, ["callee:0043b838:8"]]
+ 00a9bef4 ["INT_ADD", "register:40f0:8", ["const:a9bef4:8", "const:4:8"]]
+ 00a9bef4 ["CALL", null, ["callee:0043b838:8"]]
~~~


<a id="compare-be7367551bdcc8503ef9b3e36934c2ca"></a>

### [`00a9c064`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a9c/00a9c064.md) → [`00a9c0d4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a9c/00a9c0d4.md) FUN_00a9c0d4

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`00b1ae20`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b1a/00b1ae20.md) · 呼出先 20件 [`0043bba4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043bba4.md) [`00440ec0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00440/00440ec0.md) [`00470840`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00470/00470840.md) [`0048791c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00487/0048791c.md) [`0048793c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00487/0048793c.md)
- 新版 呼出元 1件 [`00b1aebc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b1a/00b1aebc.md) · 呼出先 20件 [`0043bbe4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bbe4.md) [`00440f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00440/00440f00.md) [`00470880`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00470/00470880.md) [`0048795c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00487/0048795c.md) [`0048797c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00487/0048797c.md)

変更の種類 constant, operands_and_dependencies, operation_sequence, store_destination, store_value

命令の説明率　旧版 93.97% / 新版 93.97%

優先判定に残った影響 `store_destination` 1件, `store_value` 8件

アドレスに依存する影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "00a9c118",
      "incomplete_value": false,
      "site": "00a9c11c",
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
      "definition_site": "00a9c0a8",
      "incomplete_value": false,
      "site": "00a9c0ac",
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
      "definition_site": "00a9c14c",
      "incomplete_value": true,
      "site": "00a9c16c",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:b16:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00a9c0dc",
      "incomplete_value": true,
      "site": "00a9c0fc",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:ad6:8"
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
      "definition_site": "00a9c2b0",
      "incomplete_value": true,
      "site": "00a9c2c0",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:1b8:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00a9c240",
      "incomplete_value": true,
      "site": "00a9c250",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:214:8"
              ]
            ]
          ]
        ]
      ]
    },
    "ordinal": 39,
    "slot": 2
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "00a9c11c",
      "DATA",
      [
        "storage",
        "00c64d38",
        null,
        "undefined *"
      ]
    ],
    [
      "00a9c14c",
      "READ",
      [
        "storage",
        "002b6ad6",
        null,
        "string"
      ]
    ],
    [
      "00a9c2b0",
      "READ",
      [
        "storage",
        "002a8214",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "00a9c11c",
      "DATA",
      [
        "storage",
        "00c64e08",
        null,
        "undefined *"
      ]
    ],
    [
      "00a9c14c",
      "READ",
      [
        "storage",
        "002b6b16",
        null,
        "string"
      ]
    ],
    [
      "00a9c2b0",
      "READ",
      [
        "storage",
        "002a81b8",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 00a9c2c4 ["INT_ADD", "register:40f0:8", ["const:a9c2c4:8", "const:4:8"]]
- 00a9c2c4 ["CALL", null, ["callee:00488598:8"]]
+ 00a9c334 ["INT_ADD", "register:40f0:8", ["const:a9c334:8", "const:4:8"]]
+ 00a9c334 ["CALL", null, ["callee:00488598:8"]]
- 00a9c09c ["INT_ADD", "register:40f0:8", ["const:a9c09c:8", "const:4:8"]]
- 00a9c09c ["CALL", null, ["callee:00487e60:8"]]
+ 00a9c10c ["INT_ADD", "register:40f0:8", ["const:a9c10c:8", "const:4:8"]]
+ 00a9c10c ["CALL", null, ["callee:00487e60:8"]]
- 00a9c0a8 ["COPY", "tmp:0:8", ["const:d38:8"]]
- 00a9c0a8 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00a9c0a8 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00a9c0a8 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00a9c118 ["COPY", "tmp:0:8", ["const:e08:8"]]
+ 00a9c118 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00a9c118 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00a9c118 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-b529ded6cd0fbf94155454fc04936430"></a>

### [`00a9c6f0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a9c/00a9c6f0.md) → [`00a9c760`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a9c/00a9c760.md) FUN_00a9c760

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 4件 [`00763d58`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00763/00763d58.md) [`0078c21c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0078c/0078c21c.md) [`00a9b7fc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a9b/00a9b7fc.md) [`00aa0268`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00aa0/00aa0268.md) · 呼出先 22件 [`0043bba4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043bba4.md) [`00470840`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00470/00470840.md) [`007457bc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00745/007457bc.md) [`00800378`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00800/00800378.md) [`0080062c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00800/0080062c.md)
- 新版 呼出元 4件 [`00763db0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00763/00763db0.md) [`0078c274`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0078c/0078c274.md) [`00a9b86c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a9b/00a9b86c.md) [`00aa02d8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00aa0/00aa02d8.md) · 呼出先 22件 [`0043bbe4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bbe4.md) [`00470880`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00470/00470880.md) [`00745814`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00745/00745814.md) [`008003d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00800/008003d0.md) [`00800684`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00800/00800684.md)

変更の種類 branch_condition_or_target, call, call_argument_candidate, call_target, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 55.69% / 新版 55.69%

優先判定に残った影響 `call_argument_candidate` 1件, `call_target` 3件, `unresolved_branch_alignment` 137件, `unresolved_call_alignment` 67件, `unresolved_store_alignment` 248件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_target",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "00a9e110",
      "value": [
        "leaf",
        "ram:8040cc:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "00a9e0a0",
      "value": [
        "leaf",
        "ram:804074:8"
      ]
    },
    "ordinal": 89,
    "slot": 0
  },
  {
    "confidence": "limited",
    "kind": "call_target",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "00a9e304",
      "value": [
        "leaf",
        "ram:8040cc:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "00a9e294",
      "value": [
        "leaf",
        "ram:804074:8"
      ]
    },
    "ordinal": 99,
    "slot": 0
  },
  {
    "confidence": "limited",
    "kind": "call_target",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "00a9e570",
      "value": [
        "leaf",
        "ram:8040cc:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "00a9e500",
      "value": [
        "leaf",
        "ram:804074:8"
      ]
    },
    "ordinal": 115,
    "slot": 0
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "00a9c8a8",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "unmatched:00a9c860"
      ]
    ],
    [
      "unmatched:00a9c848",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00a9c8a0"
      ]
    ],
    [
      "unmatched:00a9c850",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00a9c924"
      ]
    ]
  ],
  "added": [
    [
      "00a9c8a8",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00a9c8d0"
      ]
    ],
    [
      "00a9c8b8",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00a9c8a0"
      ]
    ],
    [
      "00a9c8c0",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00a9c924"
      ]
    ]
  ]
}
~~~


~~~diff
- 00a9e0a0 ["INT_ADD", "register:40f0:8", ["const:a9e0a0:8", "const:4:8"]]
- 00a9e0a0 ["CALL", null, ["ram:804074:8"]]
+ 00a9e110 ["INT_ADD", "register:40f0:8", ["const:a9e110:8", "const:4:8"]]
+ 00a9e110 ["CALL", null, ["ram:8040cc:8"]]
+ 00a9e0a0 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:18:8"]]
+ 00a9e0a0 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
- 00a9e110 ["COPY", "tmp:0:8", ["const:0:8"]]
- 00a9e110 ["COPY", "tmp:1:8", ["const:0:8"]]
- 00a9e110 ["COPY", "tmp:2:8", ["tmp:1:8"]]
- 00a9e110 ["COPY", "tmp:3:8", ["tmp:0:8"]]
~~~


<a id="compare-42e73a35a42502ee5b820dad12154442"></a>

### [`00a9edec`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a9e/00a9edec.md) → [`00a9ee5c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a9e/00a9ee5c.md) FUN_00a9ee5c

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 1件 [`00a9c6f0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a9c/00a9c6f0.md) · 呼出先 16件 [`00440ec0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00440/00440ec0.md) [`008001ec`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00800/008001ec.md) [`00804074`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00804/00804074.md) [`0080645c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00806/0080645c.md) [`00806614`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00806/00806614.md)
- 新版 呼出元 1件 [`00a9c760`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a9c/00a9c760.md) · 呼出先 16件 [`00440f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00440/00440f00.md) [`00800244`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00800/00800244.md) [`008040cc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00804/008040cc.md) [`008064b4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00806/008064b4.md) [`0080666c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00806/0080666c.md)

変更の種類 branch_condition_or_target, call, call_target, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, operands_and_dependencies, operation_sequence, unresolved_branch_alignment

命令の説明率　旧版 94.39% / 新版 94.39%

優先判定に残った影響 `call_target` 1件, `unresolved_branch_alignment` 4件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_target",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "00a9f074",
      "value": [
        "leaf",
        "ram:8040cc:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "00a9f004",
      "value": [
        "leaf",
        "ram:804074:8"
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
      "unmatched:00a9eeac",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00a9eed0"
      ]
    ],
    [
      "unmatched:00a9eee8",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00a9efdc"
      ]
    ],
    [
      "00a9f074",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "00804074"
      ]
    ]
  ],
  "added": [
    [
      "00a9ef1c",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00a9eed0"
      ]
    ],
    [
      "00a9ef58",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00a9efdc"
      ]
    ],
    [
      "00a9f074",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "008040cc"
      ]
    ]
  ]
}
~~~


~~~diff
- 00a9f004 ["INT_ADD", "register:40f0:8", ["const:a9f004:8", "const:4:8"]]
- 00a9f004 ["CALL", null, ["ram:804074:8"]]
+ 00a9f074 ["INT_ADD", "register:40f0:8", ["const:a9f074:8", "const:4:8"]]
+ 00a9f074 ["CALL", null, ["ram:8040cc:8"]]
- 00a9f074 ["CBRANCH", null, ["local:b33:8", "register:101:1"]]
+ 00a9f0e4 ["CBRANCH", null, ["local:b34:8", "register:101:1"]]
- 00a9ee24 ["INT_ADD", "register:40f0:8", ["const:a9ee24:8", "const:4:8"]]
- 00a9ee24 ["CALL", null, ["callee:00851550:8"]]
+ 00a9ee94 ["INT_ADD", "register:40f0:8", ["const:a9ee94:8", "const:4:8"]]
+ 00a9ee94 ["CALL", null, ["callee:00851550:8"]]
~~~


<a id="compare-5967b20671d415e0ce1ceddc34399639"></a>

### [`00a9f41c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a9f/00a9f41c.md) → [`00a9f48c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a9f/00a9f48c.md) FUN_00a9f48c

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `bounded` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`00763d58`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00763/00763d58.md) · 呼出先 4件 [`0055f578`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0055f/0055f578.md) [`00a9f65c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a9f/00a9f65c.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md)
- 新版 呼出元 1件 [`00763db0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00763/00763db0.md) · 呼出先 4件 [`0055f5b8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0055f/0055f5b8.md) [`00a9f6cc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a9f/00a9f6cc.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)

変更の種類 branch_condition_or_target, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, operands_and_dependencies, operation_sequence, unresolved_branch_alignment

命令の説明率　旧版 98.52% / 新版 98.52%

優先判定に残った影響 `unresolved_branch_alignment` 1件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00a9f488",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00a9f510"
      ]
    ]
  ],
  "added": [
    [
      "00a9f4f8",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00a9f510"
      ]
    ]
  ]
}
~~~


~~~diff
- 00a9f458 ["INT_ADD", "register:40f0:8", ["const:a9f458:8", "const:4:8"]]
- 00a9f458 ["CALL", null, ["callee:00a9f6cc:8"]]
+ 00a9f4c8 ["INT_ADD", "register:40f0:8", ["const:a9f4c8:8", "const:4:8"]]
+ 00a9f4c8 ["CALL", null, ["callee:00a9f6cc:8"]]
- 00a9f464 ["CBRANCH", null, ["local:b3:8", "register:101:1"]]
+ 00a9f4d4 ["CBRANCH", null, ["local:b4:8", "register:101:1"]]
- 00a9f484 ["COPY", "tmp:0:8", ["const:2:8"]]
- 00a9f484 ["INT_LESSEQUAL", "register:105:1", ["tmp:0:8", "register:4040:8"]]
- 00a9f484 ["INT_SBORROW", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00a9f484 ["INT_SUB", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-f1688e8a051f9921f18ad58d2c7f2ae1"></a>

### [`00a9f65c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a9f/00a9f65c.md) → [`00a9f6cc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a9f/00a9f6cc.md) FUN_00a9f6cc

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `bounded` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`00a9f41c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a9f/00a9f41c.md) · 呼出先 8件 [`00470840`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00470/00470840.md) [`00615ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00615/00615ee0.md) [`00aa0268`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00aa0/00aa0268.md) [`00aa0f7c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00aa0/00aa0f7c.md) [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md)
- 新版 呼出元 1件 [`00a9f48c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a9f/00a9f48c.md) · 呼出先 8件 [`00470880`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00470/00470880.md) [`00615f20`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00615/00615f20.md) [`00aa02d8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00aa0/00aa02d8.md) [`00aa0fec`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00aa0/00aa0fec.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)

変更の種類 branch_condition_or_target, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, operands_and_dependencies, operation_sequence, unresolved_branch_alignment

命令の説明率　旧版 99.00% / 新版 99.00%

優先判定に残った影響 `unresolved_branch_alignment` 1件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00a9f7fc",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00a9f898"
      ]
    ]
  ],
  "added": [
    [
      "00a9f86c",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00a9f898"
      ]
    ]
  ]
}
~~~


~~~diff
- 00a9f69c ["INT_ADD", "register:40f0:8", ["const:a9f69c:8", "const:4:8"]]
- 00a9f69c ["CALL", null, ["callee:00aa02d8:8"]]
+ 00a9f70c ["INT_ADD", "register:40f0:8", ["const:a9f70c:8", "const:4:8"]]
+ 00a9f70c ["CALL", null, ["callee:00aa02d8:8"]]
- 00a9f6d4 ["INT_RIGHT", "tmp:0:8", ["register:40b0:8", "const:3f:4"]]
- 00a9f6d4 ["INT_AND", "tmp:1:8", ["tmp:0:8", "const:1:8"]]
- 00a9f6d4 ["INT_EQUAL", "tmp:2:1", ["tmp:1:8", "const:0:8"]]
- 00a9f6d4 ["INT_EQUAL", "tmp:3:1", ["tmp:2:1", "const:0:1"]]
+ 00a9f744 ["INT_RIGHT", "tmp:0:8", ["register:40b0:8", "const:3f:4"]]
+ 00a9f744 ["INT_AND", "tmp:1:8", ["tmp:0:8", "const:1:8"]]
+ 00a9f744 ["INT_EQUAL", "tmp:2:1", ["tmp:1:8", "const:0:8"]]
+ 00a9f744 ["INT_EQUAL", "tmp:3:1", ["tmp:2:1", "const:0:1"]]
- 00a9f6dc ["INT_ADD", "register:40f0:8", ["const:a9f6dc:8", "const:4:8"]]
- 00a9f6dc ["CALL", null, ["callee:00c57f60:8"]]
+ 00a9f74c ["INT_ADD", "register:40f0:8", ["const:a9f74c:8", "const:4:8"]]
+ 00a9f74c ["CALL", null, ["callee:00c57f60:8"]]
~~~


<a id="compare-89e9a97b9d78624074c6c1d17cd0ad5e"></a>

### [`00a9fa24`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a9f/00a9fa24.md) → [`00a9fa94`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a9f/00a9fa94.md) FUN_00a9fa94

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 1件 [`00763d58`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00763/00763d58.md) · 呼出先 21件 [`0043bb20`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043bb20.md) [`00440ec0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00440/00440ec0.md) [`00470840`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00470/00470840.md) [`0047e8dc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047e/0047e8dc.md) [`0047edb4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047e/0047edb4.md)
- 新版 呼出元 1件 [`00763db0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00763/00763db0.md) · 呼出先 21件 [`0043bb60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bb60.md) [`00440f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00440/00440f00.md) [`00470880`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00470/00470880.md) [`0047e91c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047e/0047e91c.md) [`0047edf4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047e/0047edf4.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, constant, control_flow, local_def_use, memory_read, memory_read_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment

命令の説明率　旧版 97.59% / 新版 97.59%

優先判定に残った影響 `call_argument_candidate` 2件, `unresolved_branch_alignment` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00aa0070",
      "incomplete_value": false,
      "site": "00aa0098",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:47e000:8"
          ],
          [
            "leaf",
            "const:df4:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00aa0000",
      "incomplete_value": false,
      "site": "00aa0028",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:47e000:8"
          ],
          [
            "leaf",
            "const:db4:8"
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
      "definition_site": "00aa0088",
      "incomplete_value": false,
      "site": "00aa0098",
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
      "definition_site": "00aa0018",
      "incomplete_value": false,
      "site": "00aa0028",
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
    "ordinal": 33,
    "slot": 3
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00a9fc2c",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00a9fcb8"
      ]
    ],
    [
      "00a9fd68",
      "PARAM",
      [
        "storage",
        "002bc7be",
        null,
        null
      ]
    ],
    [
      "00a9ff48",
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
      "00a9fc9c",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00a9fcb8"
      ]
    ],
    [
      "00a9fd68",
      "PARAM",
      [
        "storage",
        "002bc76a",
        null,
        null
      ]
    ],
    [
      "00a9ff48",
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
- 00aa0028 ["INT_ADD", "register:40f0:8", ["const:aa0028:8", "const:4:8"]]
- 00aa0028 ["CALL", null, ["callee:00c57f00:8"]]
+ 00aa0098 ["INT_ADD", "register:40f0:8", ["const:aa0098:8", "const:4:8"]]
+ 00aa0098 ["CALL", null, ["callee:00c57f00:8"]]
- 00a9fa68 ["INT_ADD", "register:40f0:8", ["const:a9fa68:8", "const:4:8"]]
- 00a9fa68 ["CALL", null, ["callee:00a9f208:8"]]
+ 00a9fad8 ["INT_ADD", "register:40f0:8", ["const:a9fad8:8", "const:4:8"]]
+ 00a9fad8 ["CALL", null, ["callee:00a9f208:8"]]
- 00a9fa7c ["INT_ADD", "register:4040:8", ["register:4040:8", "const:20:8"]]
- 00a9fa7c ["LOAD", "tmp:0:1", ["const:1b1:8", "register:4040:8"]]
- 00a9fa7c ["INT_ZEXT", "register:4048:8", ["tmp:0:1"]]
~~~


<a id="compare-3a741b6fbaf0bb4b2cc4b1464c090772"></a>

### [`00aa0268`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00aa0/00aa0268.md) → [`00aa02d8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00aa0/00aa02d8.md) FUN_00aa02d8

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `bounded` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`00a9f65c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a9f/00a9f65c.md) · 呼出先 18件 [`0043bba4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043bba4.md) [`00470840`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00470/00470840.md) [`00615ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00615/00615ee0.md) [`00676a60`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00676/00676a60.md) [`00727d1c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00727/00727d1c.md)
- 新版 呼出元 1件 [`00a9f6cc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a9f/00a9f6cc.md) · 呼出先 18件 [`0043bbe4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bbe4.md) [`00470880`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00470/00470880.md) [`00615f20`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00615/00615f20.md) [`00676aa0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00676/00676aa0.md) [`00727d74`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00727/00727d74.md)

変更の種類 branch_condition_or_target, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 95.58% / 新版 95.58%

優先判定に残った影響 `unresolved_branch_alignment` 4件, `unresolved_call_alignment` 1件, `unresolved_store_alignment` 14件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00aa02b4",
      "READ",
      [
        "storage",
        "002c40e0",
        null,
        "undefined8"
      ]
    ],
    [
      "unmatched:00aa02c0",
      "WRITE",
      [
        "storage",
        "Stack[-0x150]",
        null,
        null
      ]
    ],
    [
      "unmatched:00aa0308",
      "READ",
      [
        "storage",
        "002c3df0",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00aa0324",
      "READ",
      [
        "storage",
        "002c4120",
        null,
        "undefined8"
      ]
    ],
    [
      "00aa0330",
      "WRITE",
      [
        "storage",
        "Stack[-0x150]",
        null,
        null
      ]
    ],
    [
      "00aa0378",
      "READ",
      [
        "storage",
        "002c3e30",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00aa02a4 ["INT_ADD", "register:40f0:8", ["const:aa02a4:8", "const:4:8"]]
- 00aa02a4 ["CALL", null, ["callee:00c57f60:8"]]
+ 00aa0314 ["INT_ADD", "register:40f0:8", ["const:aa0314:8", "const:4:8"]]
+ 00aa0314 ["CALL", null, ["callee:00c57f60:8"]]
- 00aa02b4 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:e0:8"]]
- 00aa02b4 ["LOAD", "register:5000:8", ["const:1b1:8", "tmp:0:8"]]
- 00aa02b4 ["COPY", "register:5008:8", ["const:0:8"]]
- 00aa02b4 ["COPY", "register:5010:8", ["const:0:8"]]
- 00aa02b8 ["COPY", "register:4040:8", ["const:1:8"]]
~~~


<a id="compare-42e9704bba67246acf6150282e8c688f"></a>

### [`00aa0f7c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00aa0/00aa0f7c.md) → [`00aa0fec`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00aa0/00aa0fec.md) FUN_00aa0fec

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `bounded` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`00a9f65c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a9f/00a9f65c.md) · 呼出先 12件 [`00470840`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00470/00470840.md) [`00615ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00615/00615ee0.md) [`00674724`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00674/00674724.md) [`00675b40`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00675/00675b40.md) [`00800378`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00800/00800378.md)
- 新版 呼出元 1件 [`00a9f6cc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a9f/00a9f6cc.md) · 呼出先 12件 [`00470880`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00470/00470880.md) [`00615f20`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00615/00615f20.md) [`00674764`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00674/00674764.md) [`00675b80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00675/00675b80.md) [`008003d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00800/008003d0.md)

変更の種類 branch_condition_or_target, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, local_def_use, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_return_alignment

命令の説明率　旧版 93.22% / 新版 93.22%

優先判定に残った影響 `unresolved_branch_alignment` 1件, `unresolved_return_alignment` 1件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "00aa1074",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "unmatched:00aa12a0"
      ]
    ],
    [
      "00aa1094",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "unmatched:00aa12a0"
      ]
    ],
    [
      "00aa10b4",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00aa1310"
      ]
    ]
  ],
  "added": [
    [
      "00aa1074",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00aa1310"
      ]
    ],
    [
      "00aa1094",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00aa1310"
      ]
    ],
    [
      "00aa10b4",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00aa1344"
      ]
    ]
  ]
}
~~~


~~~diff
- 00aa0fb8 ["INT_ADD", "register:40f0:8", ["const:aa0fb8:8", "const:4:8"]]
- 00aa0fb8 ["CALL", null, ["callee:00851550:8"]]
+ 00aa1028 ["INT_ADD", "register:40f0:8", ["const:aa1028:8", "const:4:8"]]
+ 00aa1028 ["CALL", null, ["callee:00851550:8"]]
- 00aa0fc8 ["INT_ADD", "register:40f0:8", ["const:aa0fc8:8", "const:4:8"]]
- 00aa0fc8 ["CALL", null, ["callee:00675b80:8"]]
+ 00aa1038 ["INT_ADD", "register:40f0:8", ["const:aa1038:8", "const:4:8"]]
+ 00aa1038 ["CALL", null, ["callee:00675b80:8"]]
- 00aa0fd8 ["INT_ADD", "register:40f0:8", ["const:aa0fd8:8", "const:4:8"]]
- 00aa0fd8 ["CALL", null, ["callee:00674764:8"]]
+ 00aa1048 ["INT_ADD", "register:40f0:8", ["const:aa1048:8", "const:4:8"]]
+ 00aa1048 ["CALL", null, ["callee:00674764:8"]]
~~~


<a id="compare-0956d6039572a1ab32ede1950f709e02"></a>

### [`00aa1504`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00aa1/00aa1504.md) → [`00aa1574`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00aa1/00aa1574.md) FUN_00aa1574

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`00aa0268`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00aa0/00aa0268.md) · 呼出先 3件 [`0043bba4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043bba4.md) [`008514f8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00851/008514f8.md) [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md)
- 新版 呼出元 1件 [`00aa02d8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00aa0/00aa02d8.md) · 呼出先 3件 [`0043bbe4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bbe4.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)

変更の種類 branch_condition_or_target, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, store_condition, store_value, unresolved_branch_alignment, unresolved_store_alignment

命令の説明率　旧版 85.78% / 新版 85.78%

優先判定に残った影響 `store_condition` 1件, `store_value` 4件, `unresolved_branch_alignment` 2件, `unresolved_store_alignment` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00aa15d4",
      "incomplete_value": true,
      "site": "00aa15e0",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:160:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00aa1564",
      "incomplete_value": true,
      "site": "00aa1570",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:120:8"
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
      "definition_site": "00aa15e4",
      "incomplete_value": true,
      "site": "00aa15f0",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:d40:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00aa1574",
      "incomplete_value": true,
      "site": "00aa1580",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:d00:8"
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
      "definition_site": "00aa15f4",
      "incomplete_value": true,
      "site": "00aa15f8",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:190:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00aa1584",
      "incomplete_value": true,
      "site": "00aa1588",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:150:8"
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
      "00aa15d4",
      "READ",
      [
        "storage",
        "002c2120",
        null,
        null
      ]
    ],
    [
      "00aa15e4",
      "READ",
      [
        "storage",
        "002c2d00",
        null,
        null
      ]
    ],
    [
      "00aa15f4",
      "READ",
      [
        "storage",
        "002c3150",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "00aa15d4",
      "READ",
      [
        "storage",
        "002c2160",
        null,
        null
      ]
    ],
    [
      "00aa15e4",
      "READ",
      [
        "storage",
        "002c2d40",
        null,
        null
      ]
    ],
    [
      "00aa15f4",
      "READ",
      [
        "storage",
        "002c3190",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 00aa15a0 ["CBRANCH", null, ["local:b35:8", "register:101:1"]]
+ 00aa1610 ["CBRANCH", null, ["local:b33:8", "register:101:1"]]
- 00aa1600 ["COPY", "tmp:0:8", ["register:40a0:8"]]
- 00aa1600 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
- 00aa1548 ["INT_ADD", "register:40f0:8", ["const:aa1548:8", "const:4:8"]]
- 00aa1548 ["CALL", null, ["callee:00851550:8"]]
+ 00aa15b8 ["INT_ADD", "register:40f0:8", ["const:aa15b8:8", "const:4:8"]]
+ 00aa15b8 ["CALL", null, ["callee:00851550:8"]]
~~~


<a id="compare-28b53a45383c1bb3fe593cf5e0c35318"></a>

### [`00aa18c4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00aa1/00aa18c4.md) → [`00aa1934`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00aa1/00aa1934.md) FUN_00aa1934

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `bounded` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`00a9c064`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a9c/00a9c064.md) · 呼出先 4件 [`00440ec0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00440/00440ec0.md) [`00aa1a8c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00aa1/00aa1a8c.md) [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md)
- 新版 呼出元 1件 [`00a9c0d4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a9c/00a9c0d4.md) · 呼出先 4件 [`00440f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00440/00440f00.md) [`00aa1afc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00aa1/00aa1afc.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)

変更の種類 branch_condition_or_target, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_store_alignment

命令の説明率　旧版 87.72% / 新版 87.72%

優先判定に残った影響 `unresolved_branch_alignment` 1件, `unresolved_store_alignment` 9件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00aa18c4",
      "WRITE",
      [
        "storage",
        "Stack[-0x40]",
        null,
        null
      ]
    ],
    [
      "unmatched:00aa18c8",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "unmatched:00aa18cc",
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
      "00aa1934",
      "WRITE",
      [
        "storage",
        "Stack[-0x40]",
        null,
        null
      ]
    ],
    [
      "00aa1938",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "00aa193c",
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
- 00aa18c4 ["COPY", "tmp:0:8", ["register:40e8:8"]]
- 00aa18c4 ["COPY", "tmp:1:8", ["register:40f0:8"]]
- 00aa18c4 ["INT_ADD", "register:8:8", ["register:8:8", "const:ffffffffffffffc0:8"]]
- 00aa18c4 ["STORE", null, ["const:1b1:8", "register:8:8", "tmp:0:8"]]
- 00aa18c8 ["COPY", "tmp:0:8", ["register:40c0:8"]]
- 00aa18c8 ["COPY", "tmp:1:8", ["register:40b8:8"]]
- 00aa18c8 ["INT_ADD", "tmp:2:8", ["register:8:8", "const:10:8"]]
- 00aa18c8 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
- 00aa18cc ["COPY", "tmp:0:8", ["register:40b0:8"]]
- 00aa18cc ["COPY", "tmp:1:8", ["register:40a8:8"]]
- 00aa18cc ["INT_ADD", "tmp:2:8", ["register:8:8", "const:20:8"]]
- 00aa18cc ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
~~~


<a id="compare-6fadd01fc1bcea36aafc135501044974"></a>

### [`00aa1a8c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00aa1/00aa1a8c.md) → [`00aa1afc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00aa1/00aa1afc.md) FUN_00aa1afc

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`00aa18c4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00aa1/00aa18c4.md) · 呼出先 1件 [`0043b778`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043b778.md)
- 新版 呼出元 1件 [`00aa1934`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00aa1/00aa1934.md) · 呼出先 1件 [`0043b7b8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b7b8.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 80.00% / 新版 80.00%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00aa1b08",
      "incomplete_value": false,
      "site": "00aa1b0c",
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
      "definition_site": "00aa1a98",
      "incomplete_value": false,
      "site": "00aa1a9c",
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
      "00aa1b08",
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
      "00aa1b08",
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
- 00aa1a9c ["INT_ADD", "register:40f0:8", ["const:aa1a9c:8", "const:4:8"]]
- 00aa1a9c ["CALL", null, ["callee:0043b7b8:8"]]
+ 00aa1b0c ["INT_ADD", "register:40f0:8", ["const:aa1b0c:8", "const:4:8"]]
+ 00aa1b0c ["CALL", null, ["callee:0043b7b8:8"]]
- 00aa1a98 ["COPY", "tmp:0:8", ["const:f4c:8"]]
- 00aa1a98 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 00aa1a98 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 00aa1a98 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 00aa1b08 ["COPY", "tmp:0:8", ["const:f8c:8"]]
+ 00aa1b08 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 00aa1b08 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 00aa1b08 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
~~~


<a id="compare-f56fe52339dfeb6314b7880b515c5e96"></a>

### [`00aa1aa0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00aa1/00aa1aa0.md) → [`00aa1b10`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00aa1/00aa1b10.md) FUN_00aa1b10

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 2件 [`00aa13ec`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00aa1/00aa13ec.md) [`00aa1dac`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00aa1/00aa1dac.md) · 呼出先 0件 
- 新版 呼出元 2件 [`00aa145c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00aa1/00aa145c.md) [`00aa1e1c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00aa1/00aa1e1c.md) · 呼出先 0件 

変更の種類 branch_condition_or_target, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, operands_and_dependencies, operation_sequence, unresolved_branch_alignment

命令の説明率　旧版 98.11% / 新版 98.11%

アドレスに依存する影響 `unresolved_branch_alignment` 2件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00aa1af4",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00aa1c24"
      ]
    ],
    [
      "unmatched:00aa1bf4",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00aa1c7c"
      ]
    ]
  ],
  "added": [
    [
      "00aa1b64",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00aa1c24"
      ]
    ],
    [
      "00aa1c64",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00aa1c7c"
      ]
    ]
  ]
}
~~~


~~~diff
- 00aa1ac8 ["CBRANCH", null, ["local:b12:8", "register:101:1"]]
+ 00aa1b38 ["CBRANCH", null, ["local:b13:8", "register:101:1"]]
- 00aa1af4 ["INT_EQUAL", "tmp:0:1", ["register:4058:8", "const:0:8"]]
- 00aa1af4 ["CBRANCH", null, ["local:b28:8", "tmp:0:1"]]
- 00aa1b04 ["INT_NOTEQUAL", "tmp:0:1", ["register:4060:8", "const:0:8"]]
- 00aa1b04 ["CBRANCH", null, ["local:b10:8", "tmp:0:1"]]
+ 00aa1b74 ["INT_NOTEQUAL", "tmp:0:1", ["register:4060:8", "const:0:8"]]
+ 00aa1b74 ["CBRANCH", null, ["local:b11:8", "tmp:0:1"]]
~~~


<a id="compare-8b9d6187c8717be694f750abfa9df3fa"></a>

### [`00aa1d10`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00aa1/00aa1d10.md) → [`00aa1d80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00aa1/00aa1d80.md) FUN_00aa1d80

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)

変更の種類 branch_condition_or_target, cfg_edge_inventory, constant, control_flow, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_store_alignment

命令の説明率　旧版 84.21% / 新版 84.21%

優先判定に残った影響 `unresolved_store_alignment` 3件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00aa1d10",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "unmatched:00aa1d14",
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
      "00aa1d80",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "00aa1d84",
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
- 00aa1d10 ["COPY", "tmp:0:8", ["register:40e8:8"]]
- 00aa1d10 ["COPY", "tmp:1:8", ["register:40f0:8"]]
- 00aa1d10 ["INT_ADD", "register:8:8", ["register:8:8", "const:ffffffffffffffe0:8"]]
- 00aa1d10 ["STORE", null, ["const:1b1:8", "register:8:8", "tmp:0:8"]]
- 00aa1d14 ["INT_ADD", "tmp:0:8", ["register:8:8", "const:10:8"]]
- 00aa1d14 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4098:8"]]
- 00aa1d18 ["COPY", "register:40e8:8", ["register:8:8"]]
~~~


<a id="compare-3a38c670c1233c14b1bdddd01928e894"></a>

### [`00aa1dac`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00aa1/00aa1dac.md) → [`00aa1e1c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00aa1/00aa1e1c.md) FUN_00aa1e1c

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `equal` · `cfg_change`

- 旧版 呼出元 1件 [`00aa0268`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00aa0/00aa0268.md) · 呼出先 4件 [`0043bba4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043bba4.md) [`00aa1aa0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00aa1/00aa1aa0.md) [`00aa1c48`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00aa1/00aa1c48.md) [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md)
- 新版 呼出元 1件 [`00aa02d8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00aa0/00aa02d8.md) · 呼出先 4件 [`0043bbe4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bbe4.md) [`00aa1b10`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00aa1/00aa1b10.md) [`00aa1cb8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00aa1/00aa1cb8.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)

変更の種類 branch_condition_or_target, cfg_edge_inventory, constant, control_flow, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_store_alignment

命令の説明率　旧版 95.77% / 新版 95.77%

優先判定に残った影響 `unresolved_store_alignment` 4件

~~~diff
- 00aa1dd4 ["CBRANCH", null, ["local:b15:8", "register:101:1"]]
+ 00aa1e44 ["CBRANCH", null, ["local:b13:8", "register:101:1"]]
- 00aa1df0 ["CBRANCH", null, ["local:b15:8", "register:101:1"]]
+ 00aa1e60 ["CBRANCH", null, ["local:b13:8", "register:101:1"]]
- 00aa1e08 ["INT_ADD", "register:40f0:8", ["const:aa1e08:8", "const:4:8"]]
- 00aa1e08 ["CALL", null, ["callee:00aa1b10:8"]]
+ 00aa1e78 ["INT_ADD", "register:40f0:8", ["const:aa1e78:8", "const:4:8"]]
+ 00aa1e78 ["CALL", null, ["callee:00aa1b10:8"]]
~~~


<a id="compare-f3bbb90e80a4ff588e460974b54176c3"></a>

### [`00aa1ec8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00aa1/00aa1ec8.md) → [`00aa1f38`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00aa1/00aa1f38.md) _INIT_233

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 5件 [`0043ae70`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043a/0043ae70.md) [`0043b7f8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043b7f8.md) [`00c57e30`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e30.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md)
- 新版 呼出元 0件  · 呼出先 5件 [`0043aeb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043a/0043aeb0.md) [`0043b838`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b838.md) [`00c57f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f00.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_store_alignment

命令の説明率　旧版 81.36% / 新版 81.36%

優先判定に残った影響 `call_argument_candidate` 7件, `unresolved_store_alignment` 10件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "00aa2054",
      "incomplete_value": true,
      "site": "00aa2064",
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
    "new": {
      "definition_site": "00aa20d8",
      "incomplete_value": true,
      "site": "00aa20e8",
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
    "ordinal": 4,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00aa20dc",
      "incomplete_value": true,
      "site": "00aa20e8",
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
            "const:80:8"
          ]
        ]
      ]
    },
    "old": null,
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
      "unmatched:00aa1ef8",
      "WRITE",
      [
        "storage",
        "Stack[-0x38]",
        null,
        null
      ]
    ],
    [
      "unmatched:00aa1f04",
      "READ",
      [
        "storage",
        "002b7f26",
        null,
        "string"
      ]
    ],
    [
      "unmatched:00aa1f20",
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
      "00aa1f68",
      "WRITE",
      [
        "storage",
        "Stack[-0x38]",
        null,
        null
      ]
    ],
    [
      "00aa1f74",
      "READ",
      [
        "storage",
        "002b7f66",
        null,
        "string"
      ]
    ],
    [
      "00aa1f90",
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
- 00aa2064 ["INT_ADD", "register:40f0:8", ["const:aa2064:8", "const:4:8"]]
- 00aa2064 ["CALL", null, ["callee:0043b838:8"]]
+ 00aa20d4 ["INT_ADD", "register:40f0:8", ["const:aa20d4:8", "const:4:8"]]
+ 00aa20d4 ["CALL", null, ["callee:0043b838:8"]]
- 00aa2078 ["INT_ADD", "register:40f0:8", ["const:aa2078:8", "const:4:8"]]
- 00aa2078 ["CALL", null, ["callee:0043b838:8"]]
+ 00aa20e8 ["INT_ADD", "register:40f0:8", ["const:aa20e8:8", "const:4:8"]]
+ 00aa20e8 ["CALL", null, ["callee:0043b838:8"]]
- 00aa208c ["INT_ADD", "register:40f0:8", ["const:aa208c:8", "const:4:8"]]
- 00aa208c ["CALL", null, ["callee:0043b838:8"]]
+ 00aa20fc ["INT_ADD", "register:40f0:8", ["const:aa20fc:8", "const:4:8"]]
+ 00aa20fc ["CALL", null, ["callee:0043b838:8"]]
~~~


<a id="compare-cc53fabc0e71fc715470a6c4e4807db2"></a>

### [`00aa2258`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00aa2/00aa2258.md) → [`00aa22c8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00aa2/00aa22c8.md) _INIT_234

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 5件 [`0043ae70`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043a/0043ae70.md) [`0043b7f8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043b7f8.md) [`00c57e30`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e30.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md)
- 新版 呼出元 0件  · 呼出先 5件 [`0043aeb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043a/0043aeb0.md) [`0043b838`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b838.md) [`00c57f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f00.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_store_alignment

命令の説明率　旧版 81.36% / 新版 81.36%

優先判定に残った影響 `call_argument_candidate` 6件, `unresolved_store_alignment` 10件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00aa2414",
      "incomplete_value": true,
      "site": "00aa2428",
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
      "definition_site": "00aa241c",
      "incomplete_value": true,
      "site": "00aa2428",
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
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00aa2420",
      "incomplete_value": true,
      "site": "00aa2428",
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
    "slot": 4
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00aa2288",
      "WRITE",
      [
        "storage",
        "Stack[-0x38]",
        null,
        null
      ]
    ],
    [
      "unmatched:00aa2294",
      "READ",
      [
        "storage",
        "002b7f26",
        null,
        "string"
      ]
    ],
    [
      "unmatched:00aa229c",
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
      "00aa22f8",
      "WRITE",
      [
        "storage",
        "Stack[-0x38]",
        null,
        null
      ]
    ],
    [
      "00aa2304",
      "READ",
      [
        "storage",
        "002b7f66",
        null,
        "string"
      ]
    ],
    [
      "00aa230c",
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
- 00aa23b8 ["INT_ADD", "register:40f0:8", ["const:aa23b8:8", "const:4:8"]]
- 00aa23b8 ["CALL", null, ["callee:0043b838:8"]]
+ 00aa2428 ["INT_ADD", "register:40f0:8", ["const:aa2428:8", "const:4:8"]]
+ 00aa2428 ["CALL", null, ["callee:0043b838:8"]]
- 00aa241c ["INT_ADD", "register:40f0:8", ["const:aa241c:8", "const:4:8"]]
- 00aa241c ["CALL", null, ["callee:0043b838:8"]]
+ 00aa248c ["INT_ADD", "register:40f0:8", ["const:aa248c:8", "const:4:8"]]
+ 00aa248c ["CALL", null, ["callee:0043b838:8"]]
- 00aa248c ["INT_ADD", "register:40f0:8", ["const:aa248c:8", "const:4:8"]]
- 00aa248c ["CALL", null, ["callee:00c57f00:8"]]
+ 00aa24fc ["INT_ADD", "register:40f0:8", ["const:aa24fc:8", "const:4:8"]]
+ 00aa24fc ["CALL", null, ["callee:00c57f00:8"]]
~~~


<a id="compare-c1abcf34b50b3fe2ad7add72bea112c7"></a>

### [`00aa25e8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00aa2/00aa25e8.md) → [`00aa2658`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00aa2/00aa2658.md) FUN_00aa2658

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`00b28f54`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b28/00b28f54.md) · 呼出先 16件 [`0043bba4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043bba4.md) [`00442930`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00442/00442930.md) [`0048791c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00487/0048791c.md) [`0048793c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00487/0048793c.md) [`00487a64`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00487/00487a64.md)
- 新版 呼出元 1件 [`00b28ff0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b28/00b28ff0.md) · 呼出先 16件 [`0043bbe4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bbe4.md) [`00442970`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00442/00442970.md) [`0048795c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00487/0048795c.md) [`0048797c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00487/0048797c.md) [`00487aa4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00487/00487aa4.md)

変更の種類 branch_condition_or_target, call, call_argument_candidate, call_count, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 76.11% / 新版 76.11%

優先判定に残った影響 `call_argument_candidate` 5件, `unresolved_branch_alignment` 7件, `unresolved_call_alignment` 3件, `unresolved_store_alignment` 16件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00aa273c",
      "incomplete_value": true,
      "site": "00aa2744",
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
    "ordinal": 6,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00aa2740",
      "incomplete_value": false,
      "site": "00aa2744",
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
    "ordinal": 6,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "00aa2810",
      "incomplete_value": true,
      "site": "00aa2818",
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
    "ordinal": 14,
    "slot": 1
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00aa25f8",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "unmatched:00aa25fc",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "unmatched:00aa2600",
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
      "00aa2668",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "00aa266c",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "00aa2670",
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
- 00aa26d4 ["INT_ADD", "register:40f0:8", ["const:aa26d4:8", "const:4:8"]]
- 00aa26d4 ["CALL", null, ["callee:0048797c:8"]]
+ 00aa2744 ["INT_ADD", "register:40f0:8", ["const:aa2744:8", "const:4:8"]]
+ 00aa2744 ["CALL", null, ["callee:0048797c:8"]]
- 00aa27a8 ["INT_EQUAL", "tmp:0:1", ["register:40a8:8", "const:0:8"]]
- 00aa27a8 ["CBRANCH", null, ["local:b29:8", "tmp:0:1"]]
+ 00aa2818 ["INT_EQUAL", "tmp:0:1", ["register:40a8:8", "const:0:8"]]
+ 00aa2818 ["CBRANCH", null, ["local:b30:8", "tmp:0:1"]]
- 00aa2818 ["INT_ADD", "register:40f0:8", ["const:aa2818:8", "const:4:8"]]
- 00aa2818 ["CALL", null, ["callee:00487aa4:8"]]
+ 00aa2888 ["INT_ADD", "register:40f0:8", ["const:aa2888:8", "const:4:8"]]
+ 00aa2888 ["CALL", null, ["callee:00487aa4:8"]]
~~~


<a id="compare-45177f95199de795c0ffdfe6de16b29b"></a>

### [`00aa29d4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00aa2/00aa29d4.md) → [`00aa2a44`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00aa2/00aa2a44.md) FUN_00aa2a44

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `bounded` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)

変更の種類 branch_condition_or_target, cfg_edge_inventory, constant, control_flow, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_store_alignment

命令の説明率　旧版 88.24% / 新版 88.24%

優先判定に残った影響 `unresolved_store_alignment` 3件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00aa29d4",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "unmatched:00aa29d8",
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
      "00aa2a44",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "00aa2a48",
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
- 00aa29d4 ["COPY", "tmp:0:8", ["register:40e8:8"]]
- 00aa29d4 ["COPY", "tmp:1:8", ["register:40f0:8"]]
- 00aa29d4 ["INT_ADD", "register:8:8", ["register:8:8", "const:ffffffffffffffe0:8"]]
- 00aa29d4 ["STORE", null, ["const:1b1:8", "register:8:8", "tmp:0:8"]]
- 00aa29d8 ["INT_ADD", "tmp:0:8", ["register:8:8", "const:10:8"]]
- 00aa29d8 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4098:8"]]
- 00aa29e8 ["INT_EQUAL", "tmp:0:1", ["register:4098:8", "const:0:8"]]
- 00aa29e8 ["CBRANCH", null, ["local:b5:8", "tmp:0:1"]]
+ 00aa2a58 ["INT_EQUAL", "tmp:0:1", ["register:4098:8", "const:0:8"]]
+ 00aa2a58 ["CBRANCH", null, ["local:b7:8", "tmp:0:1"]]
~~~


<a id="compare-5ba74fc2d8141f34fc32df5998a11d00"></a>

### [`00aa2a18`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00aa2/00aa2a18.md) → [`00aa2a88`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00aa2/00aa2a88.md) FUN_00aa2a88

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`0084e59c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0084e/0084e59c.md) · 呼出先 1件 [`0086be6c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0086b/0086be6c.md)
- 新版 呼出元 1件 [`0084e5f4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0084e/0084e5f4.md) · 呼出先 1件 [`0086bec4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0086b/0086bec4.md)

変更の種類 cfg_edge_inventory, constant, control_flow, control_flow_count, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_return_alignment, unresolved_store_alignment

命令の説明率　旧版 66.67% / 新版 66.67%

アドレスに依存する影響 `unresolved_return_alignment` 1件, `unresolved_store_alignment` 3件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00aa2a18",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "unmatched:00aa2a1c",
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
      "00aa2a88",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "00aa2a8c",
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
- 00aa2a18 ["COPY", "tmp:0:8", ["register:40e8:8"]]
- 00aa2a18 ["COPY", "tmp:1:8", ["register:40f0:8"]]
- 00aa2a18 ["INT_ADD", "register:8:8", ["register:8:8", "const:ffffffffffffffe0:8"]]
- 00aa2a18 ["STORE", null, ["const:1b1:8", "register:8:8", "tmp:0:8"]]
- 00aa2a1c ["INT_ADD", "tmp:0:8", ["register:8:8", "const:10:8"]]
- 00aa2a1c ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4098:8"]]
- 00aa2a20 ["COPY", "register:40e8:8", ["register:8:8"]]
~~~


<a id="compare-2e8b03ca3fc0a32a4e8f15b03a896d1a"></a>

### [`00aa2a48`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00aa2/00aa2a48.md) → [`00aa2ab8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00aa2/00aa2ab8.md) FUN_00aa2ab8

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`00a2b2e8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a2b/00a2b2e8.md) · 呼出先 3件 [`00480b38`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00480/00480b38.md) [`00480b90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00480/00480b90.md) [`00480be8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00480/00480be8.md)
- 新版 呼出元 1件 [`00a2b33c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a2b/00a2b33c.md) · 呼出先 3件 [`00480b78`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00480/00480b78.md) [`00480bd0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00480/00480bd0.md) [`00480c28`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00480/00480c28.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_return_alignment, unresolved_store_alignment

命令の説明率　旧版 77.78% / 新版 77.78%

優先判定に残った影響 `call_argument_candidate` 3件, `unresolved_branch_alignment` 2件, `unresolved_return_alignment` 1件, `unresolved_store_alignment` 5件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00aa2adc",
      "incomplete_value": true,
      "site": "00aa2ae0",
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
    "ordinal": 0,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00aa2b1c",
      "incomplete_value": true,
      "site": "00aa2b20",
      "value": [
        "live",
        "register:4098:8"
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
      "definition_site": "00aa2ab8",
      "incomplete_value": true,
      "site": "00aa2abc",
      "value": [
        "INT_ZEXT",
        "8",
        [
          [
            "live",
            "register:40a0:4"
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
      "unmatched:00aa2a48",
      "WRITE",
      [
        "storage",
        "Stack[-0x40]",
        null,
        null
      ]
    ],
    [
      "unmatched:00aa2a4c",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "unmatched:00aa2a50",
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
      "00aa2ab8",
      "WRITE",
      [
        "storage",
        "Stack[-0x40]",
        null,
        null
      ]
    ],
    [
      "00aa2abc",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "00aa2ac0",
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
- 00aa2a70 ["INT_ADD", "register:40f0:8", ["const:aa2a70:8", "const:4:8"]]
- 00aa2a70 ["CALL", null, ["callee:00480bd0:8"]]
+ 00aa2ae0 ["INT_ADD", "register:40f0:8", ["const:aa2ae0:8", "const:4:8"]]
+ 00aa2ae0 ["CALL", null, ["callee:00480bd0:8"]]
- 00aa2ab0 ["INT_ADD", "register:40f0:8", ["const:aa2ab0:8", "const:4:8"]]
- 00aa2ab0 ["CALL", null, ["callee:00480c28:8"]]
+ 00aa2b20 ["INT_ADD", "register:40f0:8", ["const:aa2b20:8", "const:4:8"]]
+ 00aa2b20 ["CALL", null, ["callee:00480c28:8"]]
- 00aa2abc ["INT_ADD", "register:40f0:8", ["const:aa2abc:8", "const:4:8"]]
- 00aa2abc ["CALL", null, ["callee:00480b78:8"]]
+ 00aa2b2c ["INT_ADD", "register:40f0:8", ["const:aa2b2c:8", "const:4:8"]]
+ 00aa2b2c ["CALL", null, ["callee:00480b78:8"]]
~~~


<a id="compare-69f709023ff884e1e8caba865006b542"></a>

### [`00aa2cf0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00aa2/00aa2cf0.md) → [`00aa2d60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00aa2/00aa2d60.md) FUN_00aa2d60

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 4件 [`005fe66c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005fe/005fe66c.md) [`00606ae4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00606/00606ae4.md) [`007cceec`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007cc/007cceec.md) [`007df0e8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007df/007df0e8.md) · 呼出先 1件 [`00442930`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00442/00442930.md)
- 新版 呼出元 4件 [`005fe6ac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005fe/005fe6ac.md) [`00606b24`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00606/00606b24.md) [`007ccf44`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007cc/007ccf44.md) [`007df140`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007df/007df140.md) · 呼出先 1件 [`00442970`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00442/00442970.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 97.14% / 新版 97.14%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00aa2dcc",
      "incomplete_value": false,
      "site": "00aa2dd0",
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
      "definition_site": "00aa2d5c",
      "incomplete_value": false,
      "site": "00aa2d60",
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
      "00aa2dcc",
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
      "00aa2dcc",
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
- 00aa2d60 ["INT_ADD", "register:40f0:8", ["const:aa2d60:8", "const:4:8"]]
- 00aa2d60 ["CALL", null, ["callee:00442970:8"]]
+ 00aa2dd0 ["INT_ADD", "register:40f0:8", ["const:aa2dd0:8", "const:4:8"]]
+ 00aa2dd0 ["CALL", null, ["callee:00442970:8"]]
- 00aa2d5c ["COPY", "tmp:0:8", ["const:1bd:8"]]
- 00aa2d5c ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 00aa2d5c ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 00aa2d5c ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 00aa2dcc ["COPY", "tmp:0:8", ["const:170:8"]]
+ 00aa2dcc ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 00aa2dcc ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 00aa2dcc ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
~~~


<a id="compare-3e3cd8097e039e717fe01f59a1ef53b8"></a>

### [`00aa2d7c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00aa2/00aa2d7c.md) → [`00aa2dec`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00aa2/00aa2dec.md) FUN_00aa2dec

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`007cceec`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007cc/007cceec.md) · 呼出先 1件 [`00442930`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00442/00442930.md)
- 新版 呼出元 1件 [`007ccf44`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007cc/007ccf44.md) · 呼出先 1件 [`00442970`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00442/00442970.md)

変更の種類 call_argument_candidate, cfg_edge_inventory, constant, operands_and_dependencies, return_value_candidate

命令の説明率　旧版 96.77% / 新版 96.77%

優先判定に残った影響 `call_argument_candidate` 1件, `return_value_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00aa2e48",
      "incomplete_value": false,
      "site": "00aa2e4c",
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
      "definition_site": "00aa2dd8",
      "incomplete_value": false,
      "site": "00aa2ddc",
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
    "ordinal": 0,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "return_value_candidate",
    "new": null,
    "old": {
      "definition_site": "00aa2dec",
      "incomplete_value": true,
      "site": "00aa2df4",
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
    "slot": 0
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "00aa2e48",
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
      "00aa2e48",
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
- 00aa2ddc ["INT_ADD", "register:40f0:8", ["const:aa2ddc:8", "const:4:8"]]
- 00aa2ddc ["CALL", null, ["callee:00442970:8"]]
+ 00aa2e4c ["INT_ADD", "register:40f0:8", ["const:aa2e4c:8", "const:4:8"]]
+ 00aa2e4c ["CALL", null, ["callee:00442970:8"]]
- 00aa2dd8 ["COPY", "tmp:0:8", ["const:1bd:8"]]
- 00aa2dd8 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 00aa2dd8 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 00aa2dd8 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 00aa2e48 ["COPY", "tmp:0:8", ["const:170:8"]]
+ 00aa2e48 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 00aa2e48 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 00aa2e48 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
~~~


<a id="compare-b3beaf69afc331baf46aff3de32942e8"></a>

### [`00aa2df8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00aa2/00aa2df8.md) → [`00aa2e68`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00aa2/00aa2e68.md) FUN_00aa2e68

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 4件 [`005fe66c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005fe/005fe66c.md) [`007bda44`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007bd/007bda44.md) [`007cceec`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007cc/007cceec.md) [`007df0e8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007df/007df0e8.md) · 呼出先 1件 [`00442930`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00442/00442930.md)
- 新版 呼出元 4件 [`005fe6ac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005fe/005fe6ac.md) [`007bda9c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007bd/007bda9c.md) [`007ccf44`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007cc/007ccf44.md) [`007df140`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007df/007df140.md) · 呼出先 1件 [`00442970`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00442/00442970.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, constant, control_flow, operands_and_dependencies

命令の説明率　旧版 96.77% / 新版 96.77%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00aa2ec4",
      "incomplete_value": false,
      "site": "00aa2ec8",
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
      "definition_site": "00aa2e54",
      "incomplete_value": false,
      "site": "00aa2e58",
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
      "00aa2ec4",
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
      "00aa2ec4",
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
- 00aa2e58 ["INT_ADD", "register:40f0:8", ["const:aa2e58:8", "const:4:8"]]
- 00aa2e58 ["CALL", null, ["callee:00442970:8"]]
+ 00aa2ec8 ["INT_ADD", "register:40f0:8", ["const:aa2ec8:8", "const:4:8"]]
+ 00aa2ec8 ["CALL", null, ["callee:00442970:8"]]
- 00aa2e04 ["INT_EQUAL", "tmp:0:1", ["register:4040:8", "const:0:8"]]
- 00aa2e04 ["CBRANCH", null, ["local:b12:8", "tmp:0:1"]]
+ 00aa2e74 ["INT_EQUAL", "tmp:0:1", ["register:4040:8", "const:0:8"]]
+ 00aa2e74 ["CBRANCH", null, ["local:b11:8", "tmp:0:1"]]
- 00aa2e0c ["BRANCH", null, ["local:b4:8"]]
+ 00aa2e7c ["BRANCH", null, ["local:b3:8"]]
~~~


<a id="compare-3f40e61a0628ec694cac337cab842e48"></a>

### [`00aa2e74`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00aa2/00aa2e74.md) → [`00aa2ee4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00aa2/00aa2ee4.md) FUN_00aa2ee4

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 2件 [`005fe66c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005fe/005fe66c.md) [`007cceec`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007cc/007cceec.md) · 呼出先 4件 [`0043bba4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043bba4.md) [`00494610`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00494/00494610.md) [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md)
- 新版 呼出元 2件 [`005fe6ac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005fe/005fe6ac.md) [`007ccf44`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007cc/007ccf44.md) · 呼出先 4件 [`0043bbe4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bbe4.md) [`00494650`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00494/00494650.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)

変更の種類 branch_condition_or_target, call_argument_candidate, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, operands_and_dependencies, operation_sequence, unresolved_branch_alignment

命令の説明率　旧版 99.25% / 新版 99.25%

優先判定に残った影響 `call_argument_candidate` 3件, `unresolved_branch_alignment` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00aa2f58",
      "incomplete_value": false,
      "site": "00aa2f60",
      "value": [
        "leaf",
        "const:28:8"
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
      "definition_site": "00aa3020",
      "incomplete_value": true,
      "site": "00aa3024",
      "value": [
        "LOAD",
        "8",
        [
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
    "ordinal": 3,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "00aa305c",
      "incomplete_value": true,
      "site": "00aa3068",
      "value": [
        "live",
        "register:40a0:8"
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
      "unmatched:00aa2ed4",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00aa2f2c"
      ]
    ]
  ],
  "added": [
    [
      "00aa2f44",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00aa2f2c"
      ]
    ]
  ]
}
~~~


~~~diff
- 00aa2ef0 ["INT_ADD", "register:40f0:8", ["const:aa2ef0:8", "const:4:8"]]
- 00aa2ef0 ["CALL", null, ["callee:00c57f60:8"]]
+ 00aa2f60 ["INT_ADD", "register:40f0:8", ["const:aa2f60:8", "const:4:8"]]
+ 00aa2f60 ["CALL", null, ["callee:00c57f60:8"]]
- 00aa2f60 ["BOOL_NEGATE", "tmp:0:1", ["register:101:1"]]
- 00aa2f60 ["INT_EQUAL", "tmp:1:1", ["register:100:1", "register:103:1"]]
- 00aa2f60 ["BOOL_AND", "tmp:2:1", ["tmp:0:1", "tmp:1:1"]]
- 00aa2f60 ["CBRANCH", null, ["local:b14:8", "tmp:2:1"]]
+ 00aa2fd0 ["BOOL_NEGATE", "tmp:0:1", ["register:101:1"]]
+ 00aa2fd0 ["INT_EQUAL", "tmp:1:1", ["register:100:1", "register:103:1"]]
+ 00aa2fd0 ["BOOL_AND", "tmp:2:1", ["tmp:0:1", "tmp:1:1"]]
+ 00aa2fd0 ["CBRANCH", null, ["local:b15:8", "tmp:2:1"]]
- 00aa2fb4 ["INT_ADD", "register:40f0:8", ["const:aa2fb4:8", "const:4:8"]]
- 00aa2fb4 ["CALL", null, ["callee:0043bbe4:8"]]
+ 00aa3024 ["INT_ADD", "register:40f0:8", ["const:aa3024:8", "const:4:8"]]
+ 00aa3024 ["CALL", null, ["callee:0043bbe4:8"]]
~~~


<a id="compare-841574053999a68458301331607a1418"></a>

### [`00aa3088`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00aa3/00aa3088.md) → [`00aa30f8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00aa3/00aa30f8.md) _INIT_235

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
      "definition_site": "00aa3318",
      "incomplete_value": false,
      "site": "00aa332c",
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
      "definition_site": "00aa32a8",
      "incomplete_value": false,
      "site": "00aa32bc",
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
      "definition_site": "00aa3320",
      "incomplete_value": false,
      "site": "00aa332c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:1124000:8"
          ],
          [
            "leaf",
            "const:268:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00aa32b0",
      "incomplete_value": false,
      "site": "00aa32bc",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:1124000:8"
          ],
          [
            "leaf",
            "const:168:8"
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
      "definition_site": "00aa3328",
      "incomplete_value": false,
      "site": "00aa332c",
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
      "definition_site": "00aa32b8",
      "incomplete_value": false,
      "site": "00aa32bc",
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
      "unmatched:00aa30b8",
      "WRITE",
      [
        "storage",
        "Stack[-0x38]",
        null,
        null
      ]
    ],
    [
      "unmatched:00aa30c4",
      "READ",
      [
        "storage",
        "002b7f26",
        null,
        "string"
      ]
    ],
    [
      "unmatched:00aa30e0",
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
      "00aa3128",
      "WRITE",
      [
        "storage",
        "Stack[-0x38]",
        null,
        null
      ]
    ],
    [
      "00aa3134",
      "READ",
      [
        "storage",
        "002b7f66",
        null,
        "string"
      ]
    ],
    [
      "00aa3150",
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
- 00aa324c ["INT_ADD", "register:40f0:8", ["const:aa324c:8", "const:4:8"]]
- 00aa324c ["CALL", null, ["callee:0043b838:8"]]
+ 00aa32bc ["INT_ADD", "register:40f0:8", ["const:aa32bc:8", "const:4:8"]]
+ 00aa32bc ["CALL", null, ["callee:0043b838:8"]]
- 00aa32bc ["INT_ADD", "register:40f0:8", ["const:aa32bc:8", "const:4:8"]]
- 00aa32bc ["CALL", null, ["callee:00c57f00:8"]]
+ 00aa332c ["INT_ADD", "register:40f0:8", ["const:aa332c:8", "const:4:8"]]
+ 00aa332c ["CALL", null, ["callee:00c57f00:8"]]
- 00aa3338 ["INT_ADD", "register:40f0:8", ["const:aa3338:8", "const:4:8"]]
- 00aa3338 ["CALL", null, ["callee:00c57f80:8"]]
+ 00aa33a8 ["INT_ADD", "register:40f0:8", ["const:aa33a8:8", "const:4:8"]]
+ 00aa33a8 ["CALL", null, ["callee:00c57f80:8"]]
~~~


<a id="compare-95de22a24f725d27c50dc7ea1018a63a"></a>

### [`00aa3418`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00aa3/00aa3418.md) → [`00aa3488`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00aa3/00aa3488.md) FUN_00aa3488

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal` · `cfg_change`

- 旧版 呼出元 1件 [`00aae544`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00aae/00aae544.md) · 呼出先 1件 [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md)
- 新版 呼出元 1件 [`00aae5b4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00aae/00aae5b4.md) · 呼出先 1件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)

変更の種類 cfg_edge_inventory, constant, control_flow, control_flow_count, local_def_use, operands_and_dependencies, operation_sequence, unresolved_return_alignment

命令の説明率　旧版 94.12% / 新版 94.12%

アドレスに依存する影響 `unresolved_return_alignment` 1件

~~~diff
- 00aa3448 ["INT_ADD", "register:40f0:8", ["const:aa3448:8", "const:4:8"]]
- 00aa3448 ["CALL", null, ["callee:00c57f80:8"]]
+ 00aa34b8 ["INT_ADD", "register:40f0:8", ["const:aa34b8:8", "const:4:8"]]
+ 00aa34b8 ["CALL", null, ["callee:00c57f80:8"]]
- 00aa3458 ["COPY", "register:0:8", ["register:40f0:8"]]
- 00aa3458 ["RETURN", null, ["register:0:8"]]
+ 00aa34c8 ["COPY", "register:0:8", ["register:40f0:8"]]
+ 00aa34c8 ["RETURN", null, ["register:0:8"]]
~~~


<a id="compare-51b871f36c7d2cf5d5567d242408ddf8"></a>

### [`00aa3460`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00aa3/00aa3460.md) → [`00aa34d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00aa3/00aa34d0.md) FUN_00aa34d0

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 15件 [`00481460`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00481/00481460.md) [`00482b0c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00482/00482b0c.md) [`005fe66c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005fe/005fe66c.md) [`00616244`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00616/00616244.md) [`0062626c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00626/0062626c.md) · 呼出先 8件 [`00784280`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00784/00784280.md) [`008514f8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00851/008514f8.md) [`0087929c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00879/0087929c.md) [`00aac9f4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00aac/00aac9f4.md) [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md)
- 新版 呼出元 15件 [`004814a0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00481/004814a0.md) [`00482b4c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00482/00482b4c.md) [`005fe6ac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005fe/005fe6ac.md) [`00616284`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00616/00616284.md) [`006262ac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00626/006262ac.md) · 呼出先 8件 [`007842d8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00784/007842d8.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md) [`008792f4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00879/008792f4.md) [`00aaca64`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00aac/00aaca64.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, store_value, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 78.69% / 新版 78.69%

優先判定に残った影響 `call_argument_candidate` 6件, `store_value` 21件, `unresolved_call_alignment` 4件, `unresolved_store_alignment` 16件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "00aa3608",
      "incomplete_value": false,
      "site": "00aa3608",
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
      "definition_site": "00aa3598",
      "incomplete_value": false,
      "site": "00aa3598",
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
    "ordinal": 21,
    "slot": 2
  },
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "00aa3638",
      "incomplete_value": false,
      "site": "00aa3638",
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
            "const:313:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00aa35c8",
      "incomplete_value": false,
      "site": "00aa35c8",
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
            "const:36f:8"
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
      "definition_site": "00aa366c",
      "incomplete_value": false,
      "site": "00aa366c",
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
      "definition_site": "00aa35fc",
      "incomplete_value": false,
      "site": "00aa35fc",
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
      "unmatched:00aa3464",
      "WRITE",
      [
        "storage",
        "Stack[-0x60]",
        null,
        null
      ]
    ],
    [
      "unmatched:00aa3468",
      "WRITE",
      [
        "storage",
        "Stack[-0x50]",
        null,
        null
      ]
    ],
    [
      "unmatched:00aa346c",
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
      "00aa34d4",
      "WRITE",
      [
        "storage",
        "Stack[-0x60]",
        null,
        null
      ]
    ],
    [
      "00aa34d8",
      "WRITE",
      [
        "storage",
        "Stack[-0x50]",
        null,
        null
      ]
    ],
    [
      "00aa34dc",
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
- 00aa3504 ["INT_ADD", "register:40f0:8", ["const:aa3504:8", "const:4:8"]]
- 00aa3504 ["CALL", null, ["callee:00c5a900:8"]]
+ 00aa3574 ["INT_ADD", "register:40f0:8", ["const:aa3574:8", "const:4:8"]]
+ 00aa3574 ["CALL", null, ["callee:00c5a900:8"]]
+ 00aa35c8 ["INT_SUB", "register:4098:8", ["register:40e8:8", "const:90:8"]]
- 00aa35d8 ["INT_ADD", "register:40f0:8", ["const:aa35d8:8", "const:4:8"]]
- 00aa35d8 ["CALL", null, ["callee:00c5a900:8"]]
+ 00aa3648 ["INT_ADD", "register:40f0:8", ["const:aa3648:8", "const:4:8"]]
+ 00aa3648 ["CALL", null, ["callee:00c5a900:8"]]
~~~


<a id="compare-36de8fd9aaf0f518bc637ac51c69bbd8"></a>

### [`00aa3e24`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00aa3/00aa3e24.md) → [`00aa3e94`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00aa3/00aa3e94.md) FUN_00aa3e94

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 41件 [`005c87c0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005c8/005c87c0.md) [`005fe66c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005fe/005fe66c.md) [`00605254`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00605/00605254.md) [`00611e60`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00611/00611e60.md) [`0062ade8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0062a/0062ade8.md) · 呼出先 47件 [`0043ddd8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043d/0043ddd8.md) [`00447ef4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00447/00447ef4.md) [`00481e80`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00481/00481e80.md) [`004a684c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/004a6/004a684c.md) [`005ae5e8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005ae/005ae5e8.md)
- 新版 呼出元 41件 [`005c8800`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005c8/005c8800.md) [`005fe6ac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005fe/005fe6ac.md) [`00605294`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00605/00605294.md) [`00611ea0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00611/00611ea0.md) [`0062ae28`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0062a/0062ae28.md) · 呼出先 47件 [`0043de18`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043d/0043de18.md) [`00447f34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00447/00447f34.md) [`00481ec0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00481/00481ec0.md) [`004a688c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/004a6/004a688c.md) [`005ae628`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005ae/005ae628.md)

変更の種類 branch_condition_or_target, call, call_argument_candidate, call_count, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 53.11% / 新版 53.11%

優先判定に残った影響 `call_argument_candidate` 53件, `unresolved_branch_alignment` 22件, `unresolved_call_alignment` 106件, `unresolved_store_alignment` 10件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00aa3fa0",
      "incomplete_value": false,
      "site": "00aa3fa8",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:29f000:8"
          ],
          [
            "leaf",
            "const:7c3:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00aa3f30",
      "incomplete_value": false,
      "site": "00aa3f38",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:29f000:8"
          ],
          [
            "leaf",
            "const:810:8"
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
      "definition_site": "00aa4000",
      "incomplete_value": true,
      "site": "00aa4004",
      "value": [
        "LOAD",
        "8",
        [
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
                "const:e8:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": null,
    "ordinal": 7,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00aa401c",
      "incomplete_value": false,
      "site": "00aa402c",
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
      "definition_site": "00aa3fac",
      "incomplete_value": false,
      "site": "00aa3fbc",
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
      "unmatched:00aa3e24",
      "WRITE",
      [
        "storage",
        "Stack[-0x40]",
        null,
        null
      ]
    ],
    [
      "unmatched:00aa3e28",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "unmatched:00aa3e2c",
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
      "00aa3e94",
      "WRITE",
      [
        "storage",
        "Stack[-0x40]",
        null,
        null
      ]
    ],
    [
      "00aa3e98",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "00aa3e9c",
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
- 00aa3f38 ["INT_ADD", "register:40f0:8", ["const:aa3f38:8", "const:4:8"]]
- 00aa3f38 ["CALL", null, ["callee:0043de18:8"]]
+ 00aa3fa8 ["INT_ADD", "register:40f0:8", ["const:aa3fa8:8", "const:4:8"]]
+ 00aa3fa8 ["CALL", null, ["callee:0043de18:8"]]
- 00aa3f4c ["INT_ADD", "register:40f0:8", ["const:aa3f4c:8", "const:4:8"]]
- 00aa3f4c ["CALL", null, ["callee:00800684:8"]]
+ 00aa3fbc ["INT_ADD", "register:40f0:8", ["const:aa3fbc:8", "const:4:8"]]
+ 00aa3fbc ["CALL", null, ["callee:00800684:8"]]
- 00aa3f70 ["INT_ADD", "register:40f0:8", ["const:aa3f70:8", "const:4:8"]]
- 00aa3f70 ["CALL", null, ["callee:00c57f80:8"]]
+ 00aa3fe0 ["INT_ADD", "register:40f0:8", ["const:aa3fe0:8", "const:4:8"]]
+ 00aa3fe0 ["CALL", null, ["callee:00c57f80:8"]]
~~~


<a id="compare-2ce98d941f3441f9e1c214661085c07d"></a>

### [`00aa5928`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00aa5/00aa5928.md) → [`00aa5998`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00aa5/00aa5998.md) FUN_00aa5998

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 1件 [`00aa3e24`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00aa3/00aa3e24.md) · 呼出先 24件 [`0043bb20`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043bb20.md) [`0043bba4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043bba4.md) [`00442930`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00442/00442930.md) [`0048792c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00487/0048792c.md) [`0048793c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00487/0048793c.md)
- 新版 呼出元 1件 [`00aa3e94`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00aa3/00aa3e94.md) · 呼出先 24件 [`0043bb60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bb60.md) [`0043bbe4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bbe4.md) [`00442970`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00442/00442970.md) [`0048796c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00487/0048796c.md) [`0048797c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00487/0048797c.md)

変更の種類 branch_condition_or_target, call, call_argument_candidate, call_target, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, store_condition, store_value, unresolved_branch_alignment, unresolved_call_alignment, unresolved_return_alignment, unresolved_store_alignment

命令の説明率　旧版 77.59% / 新版 77.59%

優先判定に残った影響 `call_argument_candidate` 7件, `call_target` 1件, `store_condition` 1件, `unresolved_branch_alignment` 13件, `unresolved_call_alignment` 2件, `unresolved_return_alignment` 1件, `unresolved_store_alignment` 39件

アドレスに依存する影響 `store_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00aa5ee0",
      "incomplete_value": true,
      "site": "00aa5ee4",
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
      "definition_site": "00aa5e70",
      "incomplete_value": true,
      "site": "00aa5e74",
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
    "ordinal": 74,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "00aa595c",
      "incomplete_value": false,
      "site": "00aa5968",
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
            "const:837:8"
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
      "definition_site": "00aa5a88",
      "incomplete_value": true,
      "site": "00aa5a98",
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
            "const:b0:8"
          ]
        ]
      ]
    },
    "old": null,
    "ordinal": 6,
    "slot": 1
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00aa593c",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "unmatched:00aa5948",
      "WRITE",
      [
        "storage",
        "Stack[-0x26c]",
        null,
        null
      ]
    ],
    [
      "unmatched:00aa5954",
      "WRITE",
      [
        "storage",
        "Stack[-0x278]",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "00aa59ac",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "00aa59b8",
      "WRITE",
      [
        "storage",
        "Stack[-0x26c]",
        null,
        null
      ]
    ],
    [
      "00aa59c4",
      "WRITE",
      [
        "storage",
        "Stack[-0x278]",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 00aa5968 ["INT_ADD", "register:40f0:8", ["const:aa5968:8", "const:4:8"]]
- 00aa5968 ["CALL", null, ["callee:00aaca64:8"]]
+ 00aa59d8 ["INT_ADD", "register:40f0:8", ["const:aa59d8:8", "const:4:8"]]
+ 00aa59d8 ["CALL", null, ["callee:00aaca64:8"]]
- 00aa5a28 ["INT_ADD", "register:40f0:8", ["const:aa5a28:8", "const:4:8"]]
- 00aa5a28 ["CALL", null, ["callee:00b11188:8"]]
+ 00aa5a98 ["INT_ADD", "register:40f0:8", ["const:aa5a98:8", "const:4:8"]]
+ 00aa5a98 ["CALL", null, ["callee:00b11188:8"]]
- 00aa5a54 ["INT_ADD", "register:40f0:8", ["const:aa5a54:8", "const:4:8"]]
- 00aa5a54 ["CALL", null, ["callee:0048797c:8"]]
+ 00aa5ac4 ["INT_ADD", "register:40f0:8", ["const:aa5ac4:8", "const:4:8"]]
+ 00aa5ac4 ["CALL", null, ["callee:0048797c:8"]]
~~~


<a id="compare-0f6805318e7ed9eb2ac168b9af73d690"></a>

### [`00aa60e0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00aa6/00aa60e0.md) → [`00aa6150`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00aa6/00aa6150.md) FUN_00aa6150

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 1件 [`00aa3e24`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00aa3/00aa3e24.md) · 呼出先 31件 [`0043bb20`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043bb20.md) [`0043bba4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043bba4.md) [`00442930`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00442/00442930.md) [`0048792c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00487/0048792c.md) [`0048793c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00487/0048793c.md)
- 新版 呼出元 1件 [`00aa3e94`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00aa3/00aa3e94.md) · 呼出先 31件 [`0043bb60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bb60.md) [`0043bbe4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bbe4.md) [`00442970`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00442/00442970.md) [`0048796c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00487/0048796c.md) [`0048797c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00487/0048797c.md)

変更の種類 branch_condition_or_target, call, call_argument_candidate, call_target, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, store_condition, store_destination, store_value, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 88.25% / 新版 88.25%

優先判定に残った影響 `call_argument_candidate` 4件, `call_target` 1件, `store_condition` 1件, `store_destination` 1件, `store_value` 8件, `unresolved_branch_alignment` 4件, `unresolved_call_alignment` 1件, `unresolved_store_alignment` 23件

アドレスに依存する影響 `store_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00aa6208",
      "incomplete_value": true,
      "site": "00aa6210",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:fb0:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00aa6198",
      "incomplete_value": true,
      "site": "00aa61a0",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:f70:8"
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
      "definition_site": "00aa6204",
      "incomplete_value": true,
      "site": "00aa6214",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:880:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00aa6194",
      "incomplete_value": true,
      "site": "00aa61a4",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:8cd:8"
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
      "definition_site": "00aa6204",
      "incomplete_value": true,
      "site": "00aa6214",
      "value": [
        "LOAD",
        "16",
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
      "definition_site": "00aa6194",
      "incomplete_value": true,
      "site": "00aa61a4",
      "value": [
        "LOAD",
        "16",
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
      "unmatched:00aa60e0",
      "WRITE",
      [
        "storage",
        "Stack[-0x60]",
        null,
        null
      ]
    ],
    [
      "unmatched:00aa60e4",
      "WRITE",
      [
        "storage",
        "Stack[-0x50]",
        null,
        null
      ]
    ],
    [
      "unmatched:00aa60e8",
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
      "00aa6150",
      "WRITE",
      [
        "storage",
        "Stack[-0x60]",
        null,
        null
      ]
    ],
    [
      "00aa6154",
      "WRITE",
      [
        "storage",
        "Stack[-0x50]",
        null,
        null
      ]
    ],
    [
      "00aa6158",
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
- 00aa6134 ["INT_ADD", "register:40f0:8", ["const:aa6134:8", "const:4:8"]]
- 00aa6134 ["CALL", null, ["callee:00803dd4:8"]]
+ 00aa61a4 ["INT_ADD", "register:40f0:8", ["const:aa61a4:8", "const:4:8"]]
+ 00aa61a4 ["CALL", null, ["callee:00803dd4:8"]]
- 00aa6214 ["INT_ADD", "register:40f0:8", ["const:aa6214:8", "const:4:8"]]
- 00aa6214 ["CALL", null, ["callee:00487e60:8"]]
+ 00aa6284 ["INT_ADD", "register:40f0:8", ["const:aa6284:8", "const:4:8"]]
+ 00aa6284 ["CALL", null, ["callee:00487e60:8"]]
- 00aa6294 ["INT_ADD", "register:40f0:8", ["const:aa6294:8", "const:4:8"]]
- 00aa6294 ["CALL", null, ["callee:00487aa4:8"]]
+ 00aa6304 ["INT_ADD", "register:40f0:8", ["const:aa6304:8", "const:4:8"]]
+ 00aa6304 ["CALL", null, ["callee:00487aa4:8"]]
~~~


<a id="compare-cdaa27e99e54330acb5c88ae062d916c"></a>

### [`00aa6960`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00aa6/00aa6960.md) → [`00aa69d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00aa6/00aa69d0.md) FUN_00aa69d0

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`00aa3e24`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00aa3/00aa3e24.md) · 呼出先 7件 [`0043bba4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043bba4.md) [`008514f8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00851/008514f8.md) [`0087929c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00879/0087929c.md) [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md) [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md)
- 新版 呼出元 1件 [`00aa3e94`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00aa3/00aa3e94.md) · 呼出先 7件 [`0043bbe4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bbe4.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md) [`008792f4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00879/008792f4.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)

変更の種類 branch_condition_or_target, call, call_argument_candidate, call_count, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 83.43% / 新版 83.43%

優先判定に残った影響 `call_argument_candidate` 5件, `unresolved_branch_alignment` 1件, `unresolved_call_alignment` 2件, `unresolved_store_alignment` 7件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "00aa6b54",
      "incomplete_value": true,
      "site": "00aa6b5c",
      "value": [
        "live",
        "register:8:8"
      ]
    },
    "ordinal": 14,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00aa6bd0",
      "incomplete_value": true,
      "site": "00aa6bdc",
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
            "const:68:8"
          ]
        ]
      ]
    },
    "old": null,
    "ordinal": 15,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00aa6bd4",
      "incomplete_value": true,
      "site": "00aa6bdc",
      "value": [
        "live",
        "register:8:8"
      ]
    },
    "old": null,
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
      "unmatched:00aa6994",
      "DATA",
      [
        "storage",
        "002aeaf4",
        null,
        "string"
      ]
    ],
    [
      "unmatched:00aa6994",
      "WRITE",
      [
        "storage",
        "Stack[-0xd8]",
        null,
        null
      ]
    ],
    [
      "unmatched:00aa69c0",
      "DATA",
      [
        "storage",
        "002b2eed",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "00aa6a04",
      "DATA",
      [
        "storage",
        "002aea98",
        null,
        "string"
      ]
    ],
    [
      "00aa6a04",
      "WRITE",
      [
        "storage",
        "Stack[-0xd8]",
        null,
        null
      ]
    ],
    [
      "00aa6a30",
      "DATA",
      [
        "storage",
        "002b2f1e",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 00aa6b5c ["INT_ADD", "register:40f0:8", ["const:aa6b5c:8", "const:4:8"]]
- 00aa6b5c ["CALL", null, ["callee:00c5a900:8"]]
+ 00aa6bcc ["INT_ADD", "register:40f0:8", ["const:aa6bcc:8", "const:4:8"]]
+ 00aa6bcc ["CALL", null, ["callee:00c5a900:8"]]
- 00aa6b6c ["INT_ADD", "register:40f0:8", ["const:aa6b6c:8", "const:4:8"]]
- 00aa6b6c ["CALL", null, ["callee:00c5a910:8"]]
+ 00aa6bdc ["INT_ADD", "register:40f0:8", ["const:aa6bdc:8", "const:4:8"]]
+ 00aa6bdc ["CALL", null, ["callee:00c5a910:8"]]
- 00aa6b78 ["INT_ADD", "register:40f0:8", ["const:aa6b78:8", "const:4:8"]]
- 00aa6b78 ["CALL", null, ["callee:00c5a900:8"]]
+ 00aa6be8 ["INT_ADD", "register:40f0:8", ["const:aa6be8:8", "const:4:8"]]
+ 00aa6be8 ["CALL", null, ["callee:00c5a900:8"]]
~~~


<a id="compare-b9e2dff05996c591b1eef015769d9125"></a>

### [`00aa6cb8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00aa6/00aa6cb8.md) → [`00aa6d28`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00aa6/00aa6d28.md) FUN_00aa6d28

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00aa3e24`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00aa3/00aa3e24.md) · 呼出先 9件 [`006ea4f4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006ea/006ea4f4.md) [`00784280`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00784/00784280.md) [`008514f8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00851/008514f8.md) [`0087929c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00879/0087929c.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md)
- 新版 呼出元 1件 [`00aa3e94`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00aa3/00aa3e94.md) · 呼出先 9件 [`006ea54c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006ea/006ea54c.md) [`007842d8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00784/007842d8.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md) [`008792f4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00879/008792f4.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)

変更の種類 call, call_argument_candidate, call_count, comparison, comparison_count, constant, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, store_value, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 78.46% / 新版 78.46%

優先判定に残った影響 `call_argument_candidate` 3件, `store_value` 3件, `unresolved_call_alignment` 2件, `unresolved_store_alignment` 6件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "00aa6d80",
      "incomplete_value": false,
      "site": "00aa6d8c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:2bb000:8"
          ],
          [
            "leaf",
            "const:c95:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00aa6d10",
      "incomplete_value": false,
      "site": "00aa6d1c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:2bb000:8"
          ],
          [
            "leaf",
            "const:ce9:8"
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
      "definition_site": "00aa6df4",
      "incomplete_value": false,
      "site": "00aa6dfc",
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
            "const:a5e:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00aa6d84",
      "incomplete_value": false,
      "site": "00aa6d8c",
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
            "const:aba:8"
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
      "definition_site": "00aa6e64",
      "incomplete_value": false,
      "site": "00aa6e6c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:2af000:8"
          ],
          [
            "leaf",
            "const:bcf:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00aa6df4",
      "incomplete_value": false,
      "site": "00aa6dfc",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:2af000:8"
          ],
          [
            "leaf",
            "const:c2b:8"
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
      "unmatched:00aa6ce4",
      "WRITE",
      [
        "storage",
        "Stack[-0x48]",
        null,
        null
      ]
    ],
    [
      "unmatched:00aa6cf0",
      "DATA",
      [
        "storage",
        "002aeaf4",
        null,
        "string"
      ]
    ],
    [
      "unmatched:00aa6cf0",
      "WRITE",
      [
        "storage",
        "Stack[-0xc8]",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "00aa6d54",
      "WRITE",
      [
        "storage",
        "Stack[-0x48]",
        null,
        null
      ]
    ],
    [
      "00aa6d60",
      "DATA",
      [
        "storage",
        "002aea98",
        null,
        "string"
      ]
    ],
    [
      "00aa6d60",
      "WRITE",
      [
        "storage",
        "Stack[-0xc8]",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 00aa6d7c ["INT_ADD", "register:40f0:8", ["const:aa6d7c:8", "const:4:8"]]
- 00aa6d7c ["CALL", null, ["callee:00c5a9c0:8"]]
+ 00aa6dec ["INT_ADD", "register:40f0:8", ["const:aa6dec:8", "const:4:8"]]
+ 00aa6dec ["CALL", null, ["callee:00c5a9c0:8"]]
- 00aa6dc8 ["INT_ADD", "register:40f0:8", ["const:aa6dc8:8", "const:4:8"]]
- 00aa6dc8 ["CALL", null, ["callee:00c5a900:8"]]
+ 00aa6e38 ["INT_ADD", "register:40f0:8", ["const:aa6e38:8", "const:4:8"]]
+ 00aa6e38 ["CALL", null, ["callee:00c5a900:8"]]
- 00aa6dec ["INT_ADD", "register:40f0:8", ["const:aa6dec:8", "const:4:8"]]
- 00aa6dec ["CALL", null, ["callee:007842d8:8"]]
+ 00aa6e5c ["INT_ADD", "register:40f0:8", ["const:aa6e5c:8", "const:4:8"]]
+ 00aa6e5c ["CALL", null, ["callee:007842d8:8"]]
~~~


<a id="compare-4f64b37bb9bdb55796eaf8ffa5ede1be"></a>

### [`00aa6fa4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00aa6/00aa6fa4.md) → [`00aa7014`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00aa7/00aa7014.md) FUN_00aa7014

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`00aa3e24`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00aa3/00aa3e24.md) · 呼出先 5件 [`008514f8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00851/008514f8.md) [`0087929c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00879/0087929c.md) [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md) [`00c5a830`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5a830.md) [`00c5a840`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5a840.md)
- 新版 呼出元 1件 [`00aa3e94`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00aa3/00aa3e94.md) · 呼出先 5件 [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md) [`008792f4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00879/008792f4.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md) [`00c5a900`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5a900.md) [`00c5a910`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5a910.md)

変更の種類 branch_condition_or_target, call, call_argument_candidate, call_count, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 81.69% / 新版 81.69%

優先判定に残った影響 `call_argument_candidate` 4件, `unresolved_branch_alignment` 1件, `unresolved_call_alignment` 1件, `unresolved_store_alignment` 3件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00aa70b0",
      "incomplete_value": true,
      "site": "00aa70bc",
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
            "const:28:8"
          ]
        ]
      ]
    },
    "old": null,
    "ordinal": 4,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00aa70b4",
      "incomplete_value": true,
      "site": "00aa70bc",
      "value": [
        "live",
        "register:8:8"
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
      "definition_site": "00aa70d8",
      "incomplete_value": false,
      "site": "00aa70e8",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:29f000:8"
          ],
          [
            "leaf",
            "const:7e1:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00aa7068",
      "incomplete_value": false,
      "site": "00aa7078",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:29f000:8"
          ],
          [
            "leaf",
            "const:82e:8"
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
      "unmatched:00aa6fd4",
      "DATA",
      [
        "storage",
        "002aeaf4",
        null,
        "string"
      ]
    ],
    [
      "unmatched:00aa6fd4",
      "WRITE",
      [
        "storage",
        "Stack[-0x78]",
        null,
        null
      ]
    ],
    [
      "unmatched:00aa7000",
      "DATA",
      [
        "storage",
        "002a38c6",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "00aa7044",
      "DATA",
      [
        "storage",
        "002aea98",
        null,
        "string"
      ]
    ],
    [
      "00aa7044",
      "WRITE",
      [
        "storage",
        "Stack[-0x78]",
        null,
        null
      ]
    ],
    [
      "00aa7070",
      "DATA",
      [
        "storage",
        "002a3879",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 00aa704c ["INT_ADD", "register:40f0:8", ["const:aa704c:8", "const:4:8"]]
- 00aa704c ["CALL", null, ["callee:00c5a910:8"]]
+ 00aa70bc ["INT_ADD", "register:40f0:8", ["const:aa70bc:8", "const:4:8"]]
+ 00aa70bc ["CALL", null, ["callee:00c5a910:8"]]
- 00aa7078 ["INT_ADD", "register:40f0:8", ["const:aa7078:8", "const:4:8"]]
- 00aa7078 ["CALL", null, ["callee:008792f4:8"]]
+ 00aa70e8 ["INT_ADD", "register:40f0:8", ["const:aa70e8:8", "const:4:8"]]
+ 00aa70e8 ["CALL", null, ["callee:008792f4:8"]]
- 00aa7094 ["INT_ADD", "register:40f0:8", ["const:aa7094:8", "const:4:8"]]
- 00aa7094 ["CALL", null, ["callee:00c5a900:8"]]
+ 00aa7104 ["INT_ADD", "register:40f0:8", ["const:aa7104:8", "const:4:8"]]
+ 00aa7104 ["CALL", null, ["callee:00c5a900:8"]]
~~~


<a id="compare-89af2f7ba47d531e4eb4d854dc8e9c4d"></a>

### [`00aa711c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00aa7/00aa711c.md) → [`00aa718c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00aa7/00aa718c.md) FUN_00aa718c

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`00aa3e24`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00aa3/00aa3e24.md) · 呼出先 1件 [`00aac9f4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00aac/00aac9f4.md)
- 新版 呼出元 1件 [`00aa3e94`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00aa3/00aa3e94.md) · 呼出先 1件 [`00aaca64`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00aac/00aaca64.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 81.82% / 新版 81.82%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00aa71a0",
      "incomplete_value": false,
      "site": "00aa71a4",
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
            "const:7e3:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00aa7130",
      "incomplete_value": false,
      "site": "00aa7134",
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
            "const:837:8"
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
      "00aa71a0",
      "PARAM",
      [
        "storage",
        "002b9837",
        null,
        "string"
      ]
    ],
    [
      "00aa71b0",
      "PARAM",
      [
        "storage",
        "002b5757",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "00aa71a0",
      "PARAM",
      [
        "storage",
        "002b97e3",
        null,
        "string"
      ]
    ],
    [
      "00aa71b0",
      "PARAM",
      [
        "storage",
        "002b5797",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 00aa7134 ["INT_ADD", "register:40f0:8", ["const:aa7134:8", "const:4:8"]]
- 00aa7134 ["CALL", null, ["callee:00aaca64:8"]]
+ 00aa71a4 ["INT_ADD", "register:40f0:8", ["const:aa71a4:8", "const:4:8"]]
+ 00aa71a4 ["CALL", null, ["callee:00aaca64:8"]]
- 00aa7130 ["COPY", "tmp:0:8", ["const:837:8"]]
- 00aa7130 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 00aa7130 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 00aa7130 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 00aa71a0 ["COPY", "tmp:0:8", ["const:7e3:8"]]
+ 00aa71a0 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 00aa71a0 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 00aa71a0 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
- 00aa7140 ["COPY", "tmp:0:8", ["const:757:8"]]
- 00aa7140 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 00aa7140 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 00aa7140 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 00aa71b0 ["COPY", "tmp:0:8", ["const:797:8"]]
+ 00aa71b0 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 00aa71b0 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 00aa71b0 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
~~~


<a id="compare-59ce98591f43737af5f2c651b8ee5e5b"></a>

### [`00aa7148`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00aa7/00aa7148.md) → [`00aa71b8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00aa7/00aa71b8.md) FUN_00aa71b8

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`00aa3e24`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00aa3/00aa3e24.md) · 呼出先 1件 [`00aac9f4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00aac/00aac9f4.md)
- 新版 呼出元 1件 [`00aa3e94`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00aa3/00aa3e94.md) · 呼出先 1件 [`00aaca64`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00aac/00aaca64.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 81.82% / 新版 81.82%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00aa71cc",
      "incomplete_value": false,
      "site": "00aa71d0",
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
            "const:368:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00aa715c",
      "incomplete_value": false,
      "site": "00aa7160",
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
            "const:337:8"
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
      "00aa71cc",
      "PARAM",
      [
        "storage",
        "002b3337",
        null,
        "string"
      ]
    ],
    [
      "00aa71dc",
      "PARAM",
      [
        "storage",
        "002b5743",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "00aa71cc",
      "PARAM",
      [
        "storage",
        "002b3368",
        null,
        "string"
      ]
    ],
    [
      "00aa71dc",
      "PARAM",
      [
        "storage",
        "002b5783",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 00aa7160 ["INT_ADD", "register:40f0:8", ["const:aa7160:8", "const:4:8"]]
- 00aa7160 ["CALL", null, ["callee:00aaca64:8"]]
+ 00aa71d0 ["INT_ADD", "register:40f0:8", ["const:aa71d0:8", "const:4:8"]]
+ 00aa71d0 ["CALL", null, ["callee:00aaca64:8"]]
- 00aa715c ["COPY", "tmp:0:8", ["const:337:8"]]
- 00aa715c ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 00aa715c ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 00aa715c ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 00aa71cc ["COPY", "tmp:0:8", ["const:368:8"]]
+ 00aa71cc ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 00aa71cc ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 00aa71cc ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
- 00aa716c ["COPY", "tmp:0:8", ["const:743:8"]]
- 00aa716c ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 00aa716c ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 00aa716c ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 00aa71dc ["COPY", "tmp:0:8", ["const:783:8"]]
+ 00aa71dc ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 00aa71dc ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 00aa71dc ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
~~~


<a id="compare-fcca8461a2701d5047b82036b20b72e5"></a>

### [`00aa738c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00aa7/00aa738c.md) → [`00aa73fc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00aa7/00aa73fc.md) FUN_00aa73fc

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 1件 [`00aa3e24`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00aa3/00aa3e24.md) · 呼出先 22件 [`0043bb20`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043bb20.md) [`0043bba4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043bba4.md) [`0048792c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00487/0048792c.md) [`0048793c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00487/0048793c.md) [`00487a64`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00487/00487a64.md)
- 新版 呼出元 1件 [`00aa3e94`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00aa3/00aa3e94.md) · 呼出先 22件 [`0043bb60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bb60.md) [`0043bbe4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bbe4.md) [`0048796c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00487/0048796c.md) [`0048797c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00487/0048797c.md) [`00487aa4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00487/00487aa4.md)

変更の種類 branch_condition_or_target, call, call_argument_candidate, call_count, call_target, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, store_condition, store_destination, store_value, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 83.88% / 新版 83.88%

優先判定に残った影響 `call_argument_candidate` 10件, `call_target` 1件, `store_condition` 1件, `store_destination` 1件, `store_value` 3件, `unresolved_branch_alignment` 5件, `unresolved_call_alignment` 1件, `unresolved_store_alignment` 14件

アドレスに依存する影響 `store_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00aa778c",
      "incomplete_value": true,
      "site": "00aa7790",
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
      "definition_site": "00aa771c",
      "incomplete_value": true,
      "site": "00aa7720",
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
    "ordinal": 45,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00aa7788",
      "incomplete_value": true,
      "site": "00aa7794",
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
      "definition_site": "00aa7718",
      "incomplete_value": true,
      "site": "00aa7724",
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
    "ordinal": 46,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_destination",
    "new": {
      "definition_site": "00aa77a0",
      "incomplete_value": true,
      "site": "00aa77a0",
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
      "definition_site": "00aa7730",
      "incomplete_value": true,
      "site": "00aa7730",
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
    "ordinal": 47,
    "slot": 1
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00aa73b4",
      "WRITE",
      [
        "storage",
        "Stack[-0x58]",
        null,
        null
      ]
    ],
    [
      "unmatched:00aa73b8",
      "UNCONDITIONAL_CALL",
      [
        "mapped_function",
        "00c57f60"
      ]
    ],
    [
      "unmatched:00aa73c8",
      "READ",
      [
        "storage",
        "002a38fb",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "00aa7424",
      "WRITE",
      [
        "storage",
        "Stack[-0x58]",
        null,
        null
      ]
    ],
    [
      "00aa7428",
      "UNCONDITIONAL_CALL",
      [
        "mapped_function",
        "00c57f60"
      ]
    ],
    [
      "00aa7438",
      "READ",
      [
        "storage",
        "002a38ae",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 00aa7418 ["INT_ADD", "register:40f0:8", ["const:aa7418:8", "const:4:8"]]
- 00aa7418 ["CALL", null, ["callee:00492e48:8"]]
+ 00aa7488 ["INT_ADD", "register:40f0:8", ["const:aa7488:8", "const:4:8"]]
+ 00aa7488 ["CALL", null, ["callee:00492e48:8"]]
- 00aa7438 ["INT_ADD", "register:40f0:8", ["const:aa7438:8", "const:4:8"]]
- 00aa7438 ["CALL", null, ["callee:00c57f80:8"]]
+ 00aa74a8 ["INT_ADD", "register:40f0:8", ["const:aa74a8:8", "const:4:8"]]
+ 00aa74a8 ["CALL", null, ["callee:00c57f80:8"]]
+ 00aa7438 ["COPY", "tmp:0:8", ["register:4040:8"]]
+ 00aa7438 ["LOAD", "register:5000:16", ["const:1b1:8", "tmp:0:8"]]
+ 00aa7438 ["COPY", "register:5010:8", ["const:0:8"]]
+ 00aa7438 ["COPY", "register:5018:8", ["const:0:8"]]
~~~


<a id="compare-60611af048d2b20661c4981305f49b0a"></a>

### [`00aa78e0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00aa7/00aa78e0.md) → [`00aa7950`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00aa7/00aa7950.md) FUN_00aa7950

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`00aa3e24`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00aa3/00aa3e24.md) · 呼出先 18件 [`0043b764`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043b764.md) [`00442930`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00442/00442930.md) [`00447ef4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00447/00447ef4.md) [`0063dc44`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0063d/0063dc44.md) [`00641adc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00641/00641adc.md)
- 新版 呼出元 1件 [`00aa3e94`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00aa3/00aa3e94.md) · 呼出先 18件 [`0043b7a4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b7a4.md) [`00442970`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00442/00442970.md) [`00447f34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00447/00447f34.md) [`0063dc84`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0063d/0063dc84.md) [`00641b1c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00641/00641b1c.md)

変更の種類 branch_condition_or_target, call, call_argument_candidate, call_count, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, store_condition, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 77.04% / 新版 77.04%

優先判定に残った影響 `call_argument_candidate` 27件, `store_condition` 5件, `unresolved_branch_alignment` 16件, `unresolved_call_alignment` 9件, `unresolved_store_alignment` 22件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00aa79bc",
      "incomplete_value": true,
      "site": "00aa79c0",
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
    "old": {
      "definition_site": "00aa794c",
      "incomplete_value": true,
      "site": "00aa7950",
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
            "register:40a8:8"
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
    "new": {
      "definition_site": "00aa79b4",
      "incomplete_value": true,
      "site": "00aa79c0",
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
    "old": null,
    "ordinal": 3,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "00aa7ab4",
      "incomplete_value": true,
      "site": "00aa7ac4",
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
            "const:68:8"
          ]
        ]
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
      "00aa79a8",
      "DATA",
      [
        "storage",
        "004347d0",
        null,
        "byte[47]"
      ]
    ],
    [
      "unmatched:00aa7a0c",
      "WRITE",
      [
        "storage",
        "Stack[-0xb8]",
        null,
        null
      ]
    ],
    [
      "unmatched:00aa7a14",
      "READ",
      [
        "storage",
        "002c07ad",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "00aa79a8",
      "DATA",
      [
        "storage",
        "004347d0",
        null,
        "dword"
      ]
    ],
    [
      "00aa7a7c",
      "WRITE",
      [
        "storage",
        "Stack[-0xb8]",
        null,
        null
      ]
    ],
    [
      "00aa7a84",
      "READ",
      [
        "storage",
        "002c07ed",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 00aa7950 ["INT_ADD", "register:40f0:8", ["const:aa7950:8", "const:4:8"]]
- 00aa7950 ["CALL", null, ["callee:0063dc84:8"]]
+ 00aa79c0 ["INT_ADD", "register:40f0:8", ["const:aa79c0:8", "const:4:8"]]
+ 00aa79c0 ["CALL", null, ["callee:0063dc84:8"]]
- 00aa7ac4 ["INT_ADD", "register:40f0:8", ["const:aa7ac4:8", "const:4:8"]]
- 00aa7ac4 ["CALL", null, ["callee:00aae23c:8"]]
+ 00aa7b34 ["INT_ADD", "register:40f0:8", ["const:aa7b34:8", "const:4:8"]]
+ 00aa7b34 ["CALL", null, ["callee:00aae23c:8"]]
- 00aa7ad8 ["INT_ADD", "register:40f0:8", ["const:aa7ad8:8", "const:4:8"]]
- 00aa7ad8 ["CALL", null, ["callee:00aae23c:8"]]
+ 00aa7b48 ["INT_ADD", "register:40f0:8", ["const:aa7b48:8", "const:4:8"]]
+ 00aa7b48 ["CALL", null, ["callee:00aae23c:8"]]
~~~


<a id="compare-5ac54908c02b2a04da8e607246e71f2b"></a>

### [`00aa8304`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00aa8/00aa8304.md) → [`00aa8374`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00aa8/00aa8374.md) FUN_00aa8374

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`00aa3e24`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00aa3/00aa3e24.md) · 呼出先 5件 [`008514f8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00851/008514f8.md) [`0087929c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00879/0087929c.md) [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md) [`00c5a830`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5a830.md) [`00c5a840`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5a840.md)
- 新版 呼出元 1件 [`00aa3e94`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00aa3/00aa3e94.md) · 呼出先 5件 [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md) [`008792f4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00879/008792f4.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md) [`00c5a900`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5a900.md) [`00c5a910`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5a910.md)

変更の種類 branch_condition_or_target, call, call_argument_candidate, call_count, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 74.07% / 新版 74.07%

優先判定に残った影響 `call_argument_candidate` 3件, `unresolved_call_alignment` 3件, `unresolved_store_alignment` 5件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00aa83d8",
      "incomplete_value": true,
      "site": "00aa83e0",
      "value": [
        "live",
        "register:8:8"
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
      "definition_site": "00aa8420",
      "incomplete_value": true,
      "site": "00aa8428",
      "value": [
        "live",
        "register:8:8"
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
      "definition_site": "00aa8424",
      "incomplete_value": false,
      "site": "00aa8428",
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
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00aa8328",
      "WRITE",
      [
        "storage",
        "Stack[-0x38]",
        null,
        null
      ]
    ],
    [
      "unmatched:00aa8334",
      "DATA",
      [
        "storage",
        "002aeaf4",
        null,
        "string"
      ]
    ],
    [
      "unmatched:00aa8334",
      "WRITE",
      [
        "storage",
        "Stack[-0x78]",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "00aa8398",
      "WRITE",
      [
        "storage",
        "Stack[-0x38]",
        null,
        null
      ]
    ],
    [
      "00aa83a4",
      "DATA",
      [
        "storage",
        "002aea98",
        null,
        "string"
      ]
    ],
    [
      "00aa83a4",
      "WRITE",
      [
        "storage",
        "Stack[-0x78]",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 00aa8370 ["INT_ADD", "register:40f0:8", ["const:aa8370:8", "const:4:8"]]
- 00aa8370 ["CALL", null, ["callee:00c5a900:8"]]
+ 00aa83e0 ["INT_ADD", "register:40f0:8", ["const:aa83e0:8", "const:4:8"]]
+ 00aa83e0 ["CALL", null, ["callee:00c5a900:8"]]
- 00aa83b8 ["INT_ADD", "register:40f0:8", ["const:aa83b8:8", "const:4:8"]]
- 00aa83b8 ["CALL", null, ["callee:00c5a900:8"]]
+ 00aa8428 ["INT_ADD", "register:40f0:8", ["const:aa8428:8", "const:4:8"]]
+ 00aa8428 ["CALL", null, ["callee:00c5a900:8"]]
- 00aa83e0 ["BRANCH", null, ["local:b8:8"]]
~~~


<a id="compare-e8bdeeb13785a7eb0b4d2c6bf19a57ef"></a>

### [`00aa84a4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00aa8/00aa84a4.md) → [`00aa8514`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00aa8/00aa8514.md) FUN_00aa8514

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`00aa3e24`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00aa3/00aa3e24.md) · 呼出先 12件 [`00442930`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00442/00442930.md) [`006625d8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00662/006625d8.md) [`00784280`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00784/00784280.md) [`008514f8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00851/008514f8.md) [`0087929c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00879/0087929c.md)
- 新版 呼出元 1件 [`00aa3e94`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00aa3/00aa3e94.md) · 呼出先 12件 [`00442970`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00442/00442970.md) [`00662618`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00662/00662618.md) [`007842d8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00784/007842d8.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md) [`008792f4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00879/008792f4.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_store_alignment

命令の説明率　旧版 86.10% / 新版 86.10%

優先判定に残った影響 `call_argument_candidate` 30件, `unresolved_branch_alignment` 1件, `unresolved_store_alignment` 11件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "00aa85fc",
      "incomplete_value": true,
      "site": "00aa860c",
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
    "ordinal": 0,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "00aa8608",
      "incomplete_value": true,
      "site": "00aa860c",
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
      "definition_site": "00aa8600",
      "incomplete_value": true,
      "site": "00aa860c",
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
            "const:48:8"
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
      "unmatched:00aa855c",
      "WRITE",
      [
        "storage",
        "Stack[-0xef]",
        null,
        null
      ]
    ],
    [
      "unmatched:00aa8564",
      "WRITE",
      [
        "storage",
        "Stack[-0x98]",
        null,
        null
      ]
    ],
    [
      "unmatched:00aa8568",
      "READ",
      [
        "storage",
        "002c07ad",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "00aa85cc",
      "WRITE",
      [
        "storage",
        "Stack[-0xef]",
        null,
        null
      ]
    ],
    [
      "00aa85d4",
      "WRITE",
      [
        "storage",
        "Stack[-0x98]",
        null,
        null
      ]
    ],
    [
      "00aa85d8",
      "READ",
      [
        "storage",
        "002c07ed",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 00aa860c ["INT_ADD", "register:40f0:8", ["const:aa860c:8", "const:4:8"]]
- 00aa860c ["CALL", null, ["callee:00aae23c:8"]]
+ 00aa867c ["INT_ADD", "register:40f0:8", ["const:aa867c:8", "const:4:8"]]
+ 00aa867c ["CALL", null, ["callee:00aae23c:8"]]
- 00aa8620 ["INT_ADD", "register:40f0:8", ["const:aa8620:8", "const:4:8"]]
- 00aa8620 ["CALL", null, ["callee:00aae23c:8"]]
+ 00aa8690 ["INT_ADD", "register:40f0:8", ["const:aa8690:8", "const:4:8"]]
+ 00aa8690 ["CALL", null, ["callee:00aae23c:8"]]
+ 00aa8620 ["INT_ADD", "tmp:0:8", ["register:8:8", "const:b4:8"]]
+ 00aa8620 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4048:4"]]
~~~


<a id="compare-943760a246635911dfa40d2e68fc7718"></a>

### [`00aa89f8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00aa8/00aa89f8.md) → [`00aa8a68`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00aa8/00aa8a68.md) FUN_00aa8a68

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`00aa3e24`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00aa3/00aa3e24.md) · 呼出先 5件 [`008514f8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00851/008514f8.md) [`0087929c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00879/0087929c.md) [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md) [`00c5a830`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5a830.md) [`00c5a840`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5a840.md)
- 新版 呼出元 1件 [`00aa3e94`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00aa3/00aa3e94.md) · 呼出先 5件 [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md) [`008792f4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00879/008792f4.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md) [`00c5a900`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5a900.md) [`00c5a910`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5a910.md)

変更の種類 branch_condition_or_target, call, call_argument_candidate, call_count, comparison, comparison_count, constant, control_flow, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 28.67% / 新版 28.67%

優先判定に残った影響 `call_argument_candidate` 3件, `unresolved_call_alignment` 38件, `unresolved_store_alignment` 43件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00aa8b6c",
      "incomplete_value": true,
      "site": "00aa8b74",
      "value": [
        "INT_ADD",
        "8",
        [
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
                "const:18:8"
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
    "ordinal": 9,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "00aa8b90",
      "incomplete_value": true,
      "site": "00aa8b98",
      "value": [
        "live",
        "register:8:8"
      ]
    },
    "ordinal": 13,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00aa8cdc",
      "incomplete_value": false,
      "site": "00aa8cec",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:2bf000:8"
          ],
          [
            "leaf",
            "const:652:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00aa8c6c",
      "incomplete_value": false,
      "site": "00aa8c7c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:2bf000:8"
          ],
          [
            "leaf",
            "const:6a6:8"
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
      "unmatched:00aa8a20",
      "WRITE",
      [
        "storage",
        "Stack[-0x48]",
        null,
        null
      ]
    ],
    [
      "00aa8a9c",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "unmatched:00aa8cbc"
      ]
    ],
    [
      "unmatched:00aa8a44",
      "DATA",
      [
        "storage",
        "002aeaf4",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "00aa8a90",
      "WRITE",
      [
        "storage",
        "Stack[-0x48]",
        null,
        null
      ]
    ],
    [
      "00aa8a9c",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00aa8d2c"
      ]
    ],
    [
      "00aa8ab4",
      "DATA",
      [
        "storage",
        "002aea98",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 00aa8b04 ["INT_ADD", "register:40f0:8", ["const:aa8b04:8", "const:4:8"]]
- 00aa8b04 ["CALL", null, ["callee:00c5a900:8"]]
+ 00aa8b74 ["INT_ADD", "register:40f0:8", ["const:aa8b74:8", "const:4:8"]]
+ 00aa8b74 ["CALL", null, ["callee:00c5a900:8"]]
- 00aa8b74 ["INT_ADD", "tmp:0:8", ["register:8:8", "const:40:8"]]
- 00aa8b74 ["COPY", "tmp:1:4", ["const:0:4"]]
- 00aa8b74 ["STORE", null, ["const:1b1:8", "tmp:0:8", "tmp:1:4"]]
- 00aa8b98 ["INT_ADD", "register:40f0:8", ["const:aa8b98:8", "const:4:8"]]
- 00aa8b98 ["CALL", null, ["callee:00c5a900:8"]]
+ 00aa8c08 ["INT_ADD", "register:40f0:8", ["const:aa8c08:8", "const:4:8"]]
+ 00aa8c08 ["CALL", null, ["callee:00c5a900:8"]]
~~~


<a id="compare-5ecbe33bf771eaf2dcb6617fa24ceddc"></a>

### [`00aa8f88`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00aa8/00aa8f88.md) → [`00aa8ff8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00aa8/00aa8ff8.md) FUN_00aa8ff8

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`00aa3e24`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00aa3/00aa3e24.md) · 呼出先 9件 [`00784280`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00784/00784280.md) [`008514f8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00851/008514f8.md) [`0087929c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00879/0087929c.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md)
- 新版 呼出元 1件 [`00aa3e94`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00aa3/00aa3e94.md) · 呼出先 9件 [`007842d8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00784/007842d8.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md) [`008792f4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00879/008792f4.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)

変更の種類 call, call_count, comparison, comparison_count, constant, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, store_value, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 81.72% / 新版 81.72%

優先判定に残った影響 `store_value` 1件, `unresolved_branch_alignment` 1件, `unresolved_call_alignment` 1件, `unresolved_store_alignment` 3件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00aa9098",
      "incomplete_value": false,
      "site": "00aa90a0",
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
      "definition_site": "00aa9028",
      "incomplete_value": true,
      "site": "00aa9030",
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
      "00aa904c",
      "PARAM",
      [
        "storage",
        "002a7f20",
        null,
        "string"
      ]
    ],
    [
      "00aa904c",
      "PARAM",
      [
        "storage",
        "002b0f11",
        null,
        "string"
      ]
    ],
    [
      "unmatched:00aa900c",
      "DATA",
      [
        "storage",
        "002aeaf4",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "00aa904c",
      "PARAM",
      [
        "storage",
        "002a7ec4",
        null,
        "string"
      ]
    ],
    [
      "00aa904c",
      "PARAM",
      [
        "storage",
        "002b0eb5",
        null,
        "string"
      ]
    ],
    [
      "00aa907c",
      "DATA",
      [
        "storage",
        "002aea98",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 00aa8fc0 ["COPY", "tmp:0:8", ["const:f20:8"]]
- 00aa8fc0 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00aa8fc0 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00aa8fc0 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00aa9030 ["COPY", "tmp:0:8", ["const:ec4:8"]]
+ 00aa9030 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00aa9030 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00aa9030 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 00aa90a0 ["INT_ADD", "register:40f0:8", ["const:aa90a0:8", "const:4:8"]]
- 00aa90a0 ["CALL", null, ["callee:008792f4:8"]]
+ 00aa9110 ["INT_ADD", "register:40f0:8", ["const:aa9110:8", "const:4:8"]]
+ 00aa9110 ["CALL", null, ["callee:008792f4:8"]]
- 00aa8fd0 ["COPY", "tmp:0:8", ["const:f11:8"]]
- 00aa8fd0 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 00aa8fd0 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 00aa8fd0 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 00aa9040 ["COPY", "tmp:0:8", ["const:eb5:8"]]
+ 00aa9040 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 00aa9040 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 00aa9040 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
~~~


<a id="compare-2fca2197cb2b04f805cab2fa5d059299"></a>

### [`00aa91a8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00aa9/00aa91a8.md) → [`00aa9218`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00aa9/00aa9218.md) FUN_00aa9218

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`00aa3e24`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00aa3/00aa3e24.md) · 呼出先 5件 [`008514f8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00851/008514f8.md) [`0087929c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00879/0087929c.md) [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md) [`00c5a830`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5a830.md) [`00c5a840`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5a840.md)
- 新版 呼出元 1件 [`00aa3e94`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00aa3/00aa3e94.md) · 呼出先 5件 [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md) [`008792f4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00879/008792f4.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md) [`00c5a900`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5a900.md) [`00c5a910`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5a910.md)

変更の種類 call, call_argument_candidate, call_count, comparison, comparison_count, constant, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, store_value, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 83.87% / 新版 83.87%

優先判定に残った影響 `call_argument_candidate` 1件, `store_value` 5件, `unresolved_call_alignment` 1件, `unresolved_store_alignment` 2件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "00aa924c",
      "incomplete_value": false,
      "site": "00aa9250",
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
      "definition_site": "00aa91dc",
      "incomplete_value": false,
      "site": "00aa91e0",
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
    "ordinal": 8,
    "slot": 2
  },
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "00aa9270",
      "incomplete_value": false,
      "site": "00aa927c",
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
      "definition_site": "00aa9200",
      "incomplete_value": false,
      "site": "00aa920c",
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
    "ordinal": 12,
    "slot": 2
  },
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "00aa92e4",
      "incomplete_value": false,
      "site": "00aa92ec",
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
            "const:a5e:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00aa9274",
      "incomplete_value": false,
      "site": "00aa927c",
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
            "const:aba:8"
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
      "00aa9250",
      "DATA",
      [
        "storage",
        "002aeaf4",
        null,
        "string"
      ]
    ],
    [
      "00aa927c",
      "DATA",
      [
        "storage",
        "002a7f20",
        null,
        "string"
      ]
    ],
    [
      "unmatched:00aa921c",
      "UNCONDITIONAL_CALL",
      [
        "mapped_function",
        "00c5a900"
      ]
    ]
  ],
  "added": [
    [
      "00aa9250",
      "DATA",
      [
        "storage",
        "002aea98",
        null,
        "string"
      ]
    ],
    [
      "00aa927c",
      "DATA",
      [
        "storage",
        "002a7ec4",
        null,
        "string"
      ]
    ],
    [
      "00aa928c",
      "UNCONDITIONAL_CALL",
      [
        "mapped_function",
        "00c5a900"
      ]
    ]
  ]
}
~~~


~~~diff
- 00aa9260 ["INT_ADD", "register:40f0:8", ["const:aa9260:8", "const:4:8"]]
- 00aa9260 ["CALL", null, ["callee:00c5a910:8"]]
+ 00aa92d0 ["INT_ADD", "register:40f0:8", ["const:aa92d0:8", "const:4:8"]]
+ 00aa92d0 ["CALL", null, ["callee:00c5a910:8"]]
- 00aa92c0 ["INT_ADD", "register:40f0:8", ["const:aa92c0:8", "const:4:8"]]
- 00aa92c0 ["CALL", null, ["callee:00c5a900:8"]]
+ 00aa9330 ["INT_ADD", "register:40f0:8", ["const:aa9330:8", "const:4:8"]]
+ 00aa9330 ["CALL", null, ["callee:00c5a900:8"]]
- 00aa9320 ["COPY", "tmp:0:8", ["const:4ce:8"]]
- 00aa9320 ["INT_CARRY", "register:105:1", ["register:4008:8", "tmp:0:8"]]
- 00aa9320 ["INT_SCARRY", "register:106:1", ["register:4008:8", "tmp:0:8"]]
- 00aa9320 ["INT_ADD", "tmp:1:8", ["register:4008:8", "tmp:0:8"]]
+ 00aa9390 ["COPY", "tmp:0:8", ["const:4ff:8"]]
+ 00aa9390 ["INT_CARRY", "register:105:1", ["register:4008:8", "tmp:0:8"]]
+ 00aa9390 ["INT_SCARRY", "register:106:1", ["register:4008:8", "tmp:0:8"]]
+ 00aa9390 ["INT_ADD", "tmp:1:8", ["register:4008:8", "tmp:0:8"]]
~~~


<a id="compare-95b4f2ca0a611fbaeab552803f442bbe"></a>

### [`00aa942c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00aa9/00aa942c.md) → [`00aa949c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00aa9/00aa949c.md) FUN_00aa949c

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 1件 [`00aa3e24`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00aa3/00aa3e24.md) · 呼出先 32件 [`0043bb20`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043bb20.md) [`0043bba4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043bba4.md) [`0043ddd8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043d/0043ddd8.md) [`00442930`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00442/00442930.md) [`00447ef4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00447/00447ef4.md)
- 新版 呼出元 1件 [`00aa3e94`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00aa3/00aa3e94.md) · 呼出先 32件 [`0043bb60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bb60.md) [`0043bbe4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bbe4.md) [`0043de18`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043d/0043de18.md) [`00442970`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00442/00442970.md) [`00447f34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00447/00447f34.md)

変更の種類 branch_condition_or_target, call, call_argument_candidate, call_count, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, store_condition, store_value, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 29.36% / 新版 29.36%

優先判定に残った影響 `call_argument_candidate` 15件, `store_condition` 6件, `store_value` 12件, `unresolved_branch_alignment` 22件, `unresolved_call_alignment` 280件, `unresolved_store_alignment` 338件

アドレスに依存する影響 `store_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00aa9500",
      "incomplete_value": true,
      "site": "00aa9500",
      "value": [
        "LOAD",
        "8",
        [
          [
            "leaf",
            "const:1b1:8"
          ],
          [
            "INT_ADD",
            "8",
            [
              [
                "leaf",
                "const:2bf000:8"
              ],
              [
                "leaf",
                "const:67b:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00aa9490",
      "incomplete_value": true,
      "site": "00aa9490",
      "value": [
        "LOAD",
        "8",
        [
          [
            "leaf",
            "const:1b1:8"
          ],
          [
            "INT_ADD",
            "8",
            [
              [
                "leaf",
                "const:2bf000:8"
              ],
              [
                "leaf",
                "const:6cf:8"
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
      "definition_site": "00aa9538",
      "incomplete_value": true,
      "site": "00aa9538",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:f94:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00aa94c8",
      "incomplete_value": true,
      "site": "00aa94c8",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:ff0:8"
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
      "definition_site": "00aa954c",
      "incomplete_value": true,
      "site": "00aa954c",
      "value": [
        "LOAD",
        "8",
        [
          [
            "leaf",
            "const:1b1:8"
          ],
          [
            "INT_ADD",
            "8",
            [
              [
                "leaf",
                "const:2bf000:8"
              ],
              [
                "leaf",
                "const:671:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00aa94dc",
      "incomplete_value": true,
      "site": "00aa94dc",
      "value": [
        "LOAD",
        "8",
        [
          [
            "leaf",
            "const:1b1:8"
          ],
          [
            "INT_ADD",
            "8",
            [
              [
                "leaf",
                "const:2bf000:8"
              ],
              [
                "leaf",
                "const:6c5:8"
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
      "00aa94d0",
      "READ",
      [
        "storage",
        "002bf6cf",
        null,
        "string"
      ]
    ],
    [
      "00aa9520",
      "READ",
      [
        "storage",
        "002acff0",
        null,
        "string"
      ]
    ],
    [
      "00aa9530",
      "READ",
      [
        "storage",
        "002bf6c5",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "00aa94d0",
      "READ",
      [
        "storage",
        "002bf67b",
        null,
        "string"
      ]
    ],
    [
      "00aa9520",
      "READ",
      [
        "storage",
        "002acf94",
        null,
        "string"
      ]
    ],
    [
      "00aa9530",
      "READ",
      [
        "storage",
        "002bf671",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 00aa94d0 ["COPY", "tmp:0:8", ["const:c4b:8"]]
- 00aa94d0 ["INT_CARRY", "register:105:1", ["register:4058:8", "tmp:0:8"]]
- 00aa94d0 ["INT_SCARRY", "register:106:1", ["register:4058:8", "tmp:0:8"]]
- 00aa94d0 ["INT_ADD", "tmp:1:8", ["register:4058:8", "tmp:0:8"]]
+ 00aa9540 ["COPY", "tmp:0:8", ["const:bf7:8"]]
+ 00aa9540 ["INT_CARRY", "register:105:1", ["register:4058:8", "tmp:0:8"]]
+ 00aa9540 ["INT_SCARRY", "register:106:1", ["register:4058:8", "tmp:0:8"]]
+ 00aa9540 ["INT_ADD", "tmp:1:8", ["register:4058:8", "tmp:0:8"]]
- 00aa95b0 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:2a0:8"]]
- 00aa95b0 ["LOAD", "register:5000:16", ["const:1b1:8", "tmp:0:8"]]
- 00aa95b0 ["COPY", "register:5010:8", ["const:0:8"]]
- 00aa95b0 ["COPY", "register:5018:8", ["const:0:8"]]
+ 00aa9620 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:2e0:8"]]
+ 00aa9620 ["LOAD", "register:5000:16", ["const:1b1:8", "tmp:0:8"]]
+ 00aa9620 ["COPY", "register:5010:8", ["const:0:8"]]
+ 00aa9620 ["COPY", "register:5018:8", ["const:0:8"]]
- 00aa9634 ["COPY", "tmp:0:8", ["const:d38:8"]]
- 00aa9634 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00aa9634 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00aa9634 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00aa96a4 ["COPY", "tmp:0:8", ["const:e08:8"]]
+ 00aa96a4 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00aa96a4 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00aa96a4 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-d5ccaa877bc401eeeb98b05b0f5be2ad"></a>

### [`00aac268`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00aac/00aac268.md) → [`00aac2d8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00aac/00aac2d8.md) FUN_00aac2d8

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`00aa3e24`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00aa3/00aa3e24.md) · 呼出先 5件 [`008514f8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00851/008514f8.md) [`0087929c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00879/0087929c.md) [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md) [`00c5a830`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5a830.md) [`00c5a840`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5a840.md)
- 新版 呼出元 1件 [`00aa3e94`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00aa3/00aa3e94.md) · 呼出先 5件 [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md) [`008792f4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00879/008792f4.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md) [`00c5a900`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5a900.md) [`00c5a910`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5a910.md)

変更の種類 call, call_argument_candidate, call_count, comparison, comparison_count, constant, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 62.10% / 新版 62.10%

優先判定に残った影響 `call_argument_candidate` 6件, `unresolved_call_alignment` 9件, `unresolved_store_alignment` 14件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "00aac3a8",
      "incomplete_value": true,
      "site": "00aac3b0",
      "value": [
        "live",
        "register:8:8"
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
      "definition_site": "00aac3ac",
      "incomplete_value": false,
      "site": "00aac3b0",
      "value": [
        "leaf",
        "const:1:8"
      ]
    },
    "ordinal": 9,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00aac438",
      "incomplete_value": true,
      "site": "00aac440",
      "value": [
        "live",
        "register:8:8"
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
      "unmatched:00aac2a0",
      "DATA",
      [
        "storage",
        "002aeaf4",
        null,
        "string"
      ]
    ],
    [
      "unmatched:00aac2a0",
      "WRITE",
      [
        "storage",
        "Stack[-0xc8]",
        null,
        null
      ]
    ],
    [
      "unmatched:00aac2a4",
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
      "00aac310",
      "DATA",
      [
        "storage",
        "002aea98",
        null,
        "string"
      ]
    ],
    [
      "00aac310",
      "WRITE",
      [
        "storage",
        "Stack[-0xc8]",
        null,
        null
      ]
    ],
    [
      "00aac314",
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
- 00aac3b0 ["INT_ADD", "register:40f0:8", ["const:aac3b0:8", "const:4:8"]]
- 00aac3b0 ["CALL", null, ["callee:00c5a900:8"]]
+ 00aac420 ["INT_ADD", "register:40f0:8", ["const:aac420:8", "const:4:8"]]
+ 00aac420 ["CALL", null, ["callee:00c5a900:8"]]
- 00aac3d0 ["INT_ADD", "register:40f0:8", ["const:aac3d0:8", "const:4:8"]]
- 00aac3d0 ["CALL", null, ["callee:00c5a900:8"]]
+ 00aac440 ["INT_ADD", "register:40f0:8", ["const:aac440:8", "const:4:8"]]
+ 00aac440 ["CALL", null, ["callee:00c5a900:8"]]
- 00aac3f0 ["INT_ADD", "register:40f0:8", ["const:aac3f0:8", "const:4:8"]]
- 00aac3f0 ["CALL", null, ["callee:008792f4:8"]]
+ 00aac460 ["INT_ADD", "register:40f0:8", ["const:aac460:8", "const:4:8"]]
+ 00aac460 ["CALL", null, ["callee:008792f4:8"]]
~~~


<a id="compare-b5ed92172e2cad1e1ccfc35b602ce99b"></a>

### [`00aac4ec`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00aac/00aac4ec.md) → [`00aac55c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00aac/00aac55c.md) FUN_00aac55c

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`00aa3e24`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00aa3/00aa3e24.md) · 呼出先 5件 [`008514f8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00851/008514f8.md) [`0087929c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00879/0087929c.md) [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md) [`00c5a830`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5a830.md) [`00c5a840`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5a840.md)
- 新版 呼出元 1件 [`00aa3e94`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00aa3/00aa3e94.md) · 呼出先 5件 [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md) [`008792f4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00879/008792f4.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md) [`00c5a900`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5a900.md) [`00c5a910`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5a910.md)

変更の種類 call, call_argument_candidate, call_count, comparison, comparison_count, constant, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, store_value, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 81.45% / 新版 81.45%

優先判定に残った影響 `call_argument_candidate` 1件, `store_value` 6件, `unresolved_call_alignment` 1件, `unresolved_store_alignment` 2件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "00aac590",
      "incomplete_value": false,
      "site": "00aac594",
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
      "definition_site": "00aac520",
      "incomplete_value": false,
      "site": "00aac524",
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
    "ordinal": 8,
    "slot": 2
  },
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "00aac5b4",
      "incomplete_value": false,
      "site": "00aac5c0",
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
            "const:393:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00aac544",
      "incomplete_value": false,
      "site": "00aac550",
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
            "const:362:8"
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
      "definition_site": "00aac5d8",
      "incomplete_value": false,
      "site": "00aac5e0",
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
      "definition_site": "00aac568",
      "incomplete_value": false,
      "site": "00aac570",
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
      "00aac594",
      "DATA",
      [
        "storage",
        "002aeaf4",
        null,
        "string"
      ]
    ],
    [
      "00aac5c0",
      "DATA",
      [
        "storage",
        "002b3362",
        null,
        "string"
      ]
    ],
    [
      "00aac5e0",
      "DATA",
      [
        "storage",
        "002b1e48",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "00aac594",
      "DATA",
      [
        "storage",
        "002aea98",
        null,
        "string"
      ]
    ],
    [
      "00aac5c0",
      "DATA",
      [
        "storage",
        "002b3393",
        null,
        "string"
      ]
    ],
    [
      "00aac5e0",
      "DATA",
      [
        "storage",
        "002b1e79",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 00aac5e0 ["INT_ADD", "register:40f0:8", ["const:aac5e0:8", "const:4:8"]]
- 00aac5e0 ["CALL", null, ["callee:00c5a900:8"]]
+ 00aac650 ["INT_ADD", "register:40f0:8", ["const:aac650:8", "const:4:8"]]
+ 00aac650 ["CALL", null, ["callee:00c5a900:8"]]
- 00aac610 ["INT_ADD", "tmp:0:8", ["register:8:8", "const:80:8"]]
- 00aac610 ["COPY", "tmp:1:4", ["const:0:4"]]
- 00aac610 ["STORE", null, ["const:1b1:8", "tmp:0:8", "tmp:1:4"]]
- 00aac664 ["COPY", "tmp:0:8", ["const:514:8"]]
- 00aac664 ["INT_CARRY", "register:105:1", ["register:4008:8", "tmp:0:8"]]
- 00aac664 ["INT_SCARRY", "register:106:1", ["register:4008:8", "tmp:0:8"]]
- 00aac664 ["INT_ADD", "tmp:1:8", ["register:4008:8", "tmp:0:8"]]
+ 00aac6d4 ["COPY", "tmp:0:8", ["const:545:8"]]
+ 00aac6d4 ["INT_CARRY", "register:105:1", ["register:4008:8", "tmp:0:8"]]
+ 00aac6d4 ["INT_SCARRY", "register:106:1", ["register:4008:8", "tmp:0:8"]]
+ 00aac6d4 ["INT_ADD", "tmp:1:8", ["register:4008:8", "tmp:0:8"]]
~~~


<a id="compare-365e24100b82d67340e06d232c38d158"></a>

### [`00aac770`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00aac/00aac770.md) → [`00aac7e0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00aac/00aac7e0.md) FUN_00aac7e0

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`00aa3e24`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00aa3/00aa3e24.md) · 呼出先 5件 [`008514f8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00851/008514f8.md) [`0087929c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00879/0087929c.md) [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md) [`00c5a830`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5a830.md) [`00c5a840`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5a840.md)
- 新版 呼出元 1件 [`00aa3e94`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00aa3/00aa3e94.md) · 呼出先 5件 [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md) [`008792f4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00879/008792f4.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md) [`00c5a900`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5a900.md) [`00c5a910`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5a910.md)

変更の種類 call_argument_candidate, constant, local_def_use, operands_and_dependencies, operation_sequence, store_value

命令の説明率　旧版 85.48% / 新版 85.48%

優先判定に残った影響 `call_argument_candidate` 3件, `store_value` 6件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "00aac814",
      "incomplete_value": false,
      "site": "00aac818",
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
      "definition_site": "00aac7a4",
      "incomplete_value": false,
      "site": "00aac7a8",
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
    "ordinal": 8,
    "slot": 2
  },
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "00aac838",
      "incomplete_value": false,
      "site": "00aac844",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:2a9000:8"
          ],
          [
            "leaf",
            "const:4d6:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00aac7c8",
      "incomplete_value": false,
      "site": "00aac7d4",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:2a9000:8"
          ],
          [
            "leaf",
            "const:4a7:8"
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
      "definition_site": "00aac85c",
      "incomplete_value": false,
      "site": "00aac864",
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
      "definition_site": "00aac7ec",
      "incomplete_value": false,
      "site": "00aac7f4",
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
      "00aac818",
      "DATA",
      [
        "storage",
        "002aeaf4",
        null,
        "string"
      ]
    ],
    [
      "00aac844",
      "DATA",
      [
        "storage",
        "002a94a7",
        null,
        "string"
      ]
    ],
    [
      "00aac864",
      "DATA",
      [
        "storage",
        "002b1e48",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "00aac818",
      "DATA",
      [
        "storage",
        "002aea98",
        null,
        "string"
      ]
    ],
    [
      "00aac844",
      "DATA",
      [
        "storage",
        "002a94d6",
        null,
        "string"
      ]
    ],
    [
      "00aac864",
      "DATA",
      [
        "storage",
        "002b1e79",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 00aac828 ["INT_ADD", "register:40f0:8", ["const:aac828:8", "const:4:8"]]
- 00aac828 ["CALL", null, ["callee:00c5a910:8"]]
+ 00aac898 ["INT_ADD", "register:40f0:8", ["const:aac898:8", "const:4:8"]]
+ 00aac898 ["CALL", null, ["callee:00c5a910:8"]]
- 00aac864 ["INT_ADD", "register:40f0:8", ["const:aac864:8", "const:4:8"]]
- 00aac864 ["CALL", null, ["callee:00c5a900:8"]]
+ 00aac8d4 ["INT_ADD", "register:40f0:8", ["const:aac8d4:8", "const:4:8"]]
+ 00aac8d4 ["CALL", null, ["callee:00c5a900:8"]]
- 00aac888 ["INT_ADD", "register:40f0:8", ["const:aac888:8", "const:4:8"]]
- 00aac888 ["CALL", null, ["callee:00c5a900:8"]]
+ 00aac8f8 ["INT_ADD", "register:40f0:8", ["const:aac8f8:8", "const:4:8"]]
+ 00aac8f8 ["CALL", null, ["callee:00c5a900:8"]]
~~~


<a id="compare-768faedd1bc7cec6dd60a89613d8a30c"></a>

### [`00aac9f4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00aac/00aac9f4.md) → [`00aaca64`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00aac/00aaca64.md) FUN_00aaca64

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 7件 [`00aa3460`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00aa3/00aa3460.md) [`00aa3e24`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00aa3/00aa3e24.md) [`00aa5928`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00aa5/00aa5928.md) [`00aa60e0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00aa6/00aa60e0.md) [`00aa711c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00aa7/00aa711c.md) · 呼出先 10件 [`008026b8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00802/008026b8.md) [`00802b58`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00802/00802b58.md) [`00802ca8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00802/00802ca8.md) [`00802ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00802/00802ee0.md) [`00803d7c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00803/00803d7c.md)
- 新版 呼出元 7件 [`00aa34d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00aa3/00aa34d0.md) [`00aa3e94`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00aa3/00aa3e94.md) [`00aa5998`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00aa5/00aa5998.md) [`00aa6150`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00aa6/00aa6150.md) [`00aa718c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00aa7/00aa718c.md) · 呼出先 10件 [`00802710`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00802/00802710.md) [`00802bb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00802/00802bb0.md) [`00802d00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00802/00802d00.md) [`00802f38`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00802/00802f38.md) [`00803dd4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00803/00803dd4.md)

変更の種類 branch_condition_or_target, call_argument_candidate, comparison, comparison_count, constant, control_flow, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 61.23% / 新版 61.23%

優先判定に残った影響 `call_argument_candidate` 14件, `unresolved_call_alignment` 12件, `unresolved_store_alignment` 25件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00aacae0",
      "incomplete_value": false,
      "site": "00aacae4",
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
    "ordinal": 3,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00aacbb8",
      "incomplete_value": true,
      "site": "00aacbc4",
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
            "const:68:8"
          ]
        ]
      ]
    },
    "old": null,
    "ordinal": 12,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00aacbbc",
      "incomplete_value": true,
      "site": "00aacbc4",
      "value": [
        "live",
        "register:8:8"
      ]
    },
    "old": null,
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
      "unmatched:00aac9f8",
      "WRITE",
      [
        "storage",
        "Stack[-0x40]",
        null,
        null
      ]
    ],
    [
      "unmatched:00aac9fc",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "unmatched:00aaca00",
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
      "00aaca68",
      "WRITE",
      [
        "storage",
        "Stack[-0x40]",
        null,
        null
      ]
    ],
    [
      "00aaca6c",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "00aaca70",
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
- 00aaca74 ["INT_ADD", "register:40f0:8", ["const:aaca74:8", "const:4:8"]]
- 00aaca74 ["CALL", null, ["callee:00802bb0:8"]]
+ 00aacae4 ["INT_ADD", "register:40f0:8", ["const:aacae4:8", "const:4:8"]]
+ 00aacae4 ["CALL", null, ["callee:00802bb0:8"]]
- 00aacb54 ["INT_ADD", "register:40f0:8", ["const:aacb54:8", "const:4:8"]]
- 00aacb54 ["CALL", null, ["callee:00c5a910:8"]]
+ 00aacbc4 ["INT_ADD", "register:40f0:8", ["const:aacbc4:8", "const:4:8"]]
+ 00aacbc4 ["CALL", null, ["callee:00c5a910:8"]]
- 00aacbc4 ["INT_ADD", "register:40f0:8", ["const:aacbc4:8", "const:4:8"]]
- 00aacbc4 ["CALL", null, ["callee:00802f38:8"]]
+ 00aacc34 ["INT_ADD", "register:40f0:8", ["const:aacc34:8", "const:4:8"]]
+ 00aacc34 ["CALL", null, ["callee:00802f38:8"]]
~~~


<a id="compare-ff517ae84e3dfd8c7c7f783a62f13392"></a>

### [`00aacea4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00aac/00aacea4.md) → [`00aacf14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00aac/00aacf14.md) FUN_00aacf14

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 5件 [`0047377c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00473/0047377c.md) [`00769d84`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00769/00769d84.md) [`0085bb70`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0085b/0085bb70.md) [`0088c4ac`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0088c/0088c4ac.md) [`008add38`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008ad/008add38.md) · 呼出先 12件 [`004476f4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00447/004476f4.md) [`005e0d68`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005e0/005e0d68.md) [`00784280`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00784/00784280.md) [`008514f8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00851/008514f8.md) [`00853c70`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00853/00853c70.md)
- 新版 呼出元 5件 [`004737bc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00473/004737bc.md) [`00769ddc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00769/00769ddc.md) [`0085bbc8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0085b/0085bbc8.md) [`0088c504`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0088c/0088c504.md) [`008add90`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008ad/008add90.md) · 呼出先 12件 [`00447734`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00447/00447734.md) [`005e0da8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005e0/005e0da8.md) [`007842d8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00784/007842d8.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md) [`00853cc8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00853/00853cc8.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_call_alignment, unresolved_return_alignment, unresolved_store_alignment

命令の説明率　旧版 48.64% / 新版 48.64%

優先判定に残った影響 `call_argument_candidate` 10件, `unresolved_branch_alignment` 2件, `unresolved_call_alignment` 26件, `unresolved_return_alignment` 1件, `unresolved_store_alignment` 51件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "00aad010",
      "incomplete_value": true,
      "site": "00aad018",
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
            "const:e0:8"
          ]
        ]
      ]
    },
    "ordinal": 11,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00aad090",
      "incomplete_value": true,
      "site": "00aad098",
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
    "ordinal": 12,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "00aad0a0",
      "incomplete_value": true,
      "site": "00aad0a8",
      "value": [
        "live",
        "register:8:8"
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
      "unmatched:00aacea4",
      "WRITE",
      [
        "storage",
        "Stack[-0x50]",
        null,
        null
      ]
    ],
    [
      "unmatched:00aacea8",
      "WRITE",
      [
        "storage",
        "Stack[-0x40]",
        null,
        null
      ]
    ],
    [
      "unmatched:00aaced8",
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
      "00aacf14",
      "WRITE",
      [
        "storage",
        "Stack[-0x50]",
        null,
        null
      ]
    ],
    [
      "00aacf18",
      "WRITE",
      [
        "storage",
        "Stack[-0x40]",
        null,
        null
      ]
    ],
    [
      "00aacf48",
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
- 00aacfa8 ["INT_ADD", "register:40f0:8", ["const:aacfa8:8", "const:4:8"]]
- 00aacfa8 ["CALL", null, ["callee:007842d8:8"]]
+ 00aad018 ["INT_ADD", "register:40f0:8", ["const:aad018:8", "const:4:8"]]
+ 00aad018 ["CALL", null, ["callee:007842d8:8"]]
- 00aad018 ["INT_ADD", "register:40f0:8", ["const:aad018:8", "const:4:8"]]
- 00aad018 ["CALL", null, ["callee:00c5a900:8"]]
+ 00aad088 ["INT_ADD", "register:40f0:8", ["const:aad088:8", "const:4:8"]]
+ 00aad088 ["CALL", null, ["callee:00c5a900:8"]]
- 00aad028 ["INT_ADD", "register:40f0:8", ["const:aad028:8", "const:4:8"]]
- 00aad028 ["CALL", null, ["callee:007842d8:8"]]
+ 00aad098 ["INT_ADD", "register:40f0:8", ["const:aad098:8", "const:4:8"]]
+ 00aad098 ["CALL", null, ["callee:007842d8:8"]]
~~~


<a id="compare-8425cc305820e4a6254d69d410fc5f29"></a>

### [`00aad69c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00aad/00aad69c.md) → [`00aad70c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00aad/00aad70c.md) FUN_00aad70c

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 1件 [`0088c870`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0088c/0088c870.md) · 呼出先 21件 [`0043bb20`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043bb20.md) [`0043bba4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043bba4.md) [`00442930`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00442/00442930.md) [`0046d490`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0046d/0046d490.md) [`0048792c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00487/0048792c.md)
- 新版 呼出元 1件 [`0088c8c8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0088c/0088c8c8.md) · 呼出先 21件 [`0043bb60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bb60.md) [`0043bbe4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bbe4.md) [`00442970`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00442/00442970.md) [`0046d4d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046d/0046d4d0.md) [`0048796c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00487/0048796c.md)

変更の種類 branch_condition_or_target, call, call_argument_candidate, call_count, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, store_value, unresolved_branch_alignment, unresolved_call_alignment, unresolved_return_alignment, unresolved_store_alignment

命令の説明率　旧版 80.30% / 新版 80.30%

優先判定に残った影響 `call_argument_candidate` 6件, `unresolved_branch_alignment` 13件, `unresolved_call_alignment` 7件, `unresolved_return_alignment` 1件, `unresolved_store_alignment` 15件

アドレスに依存する影響 `store_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00aadd60",
      "incomplete_value": true,
      "site": "00aadd64",
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
      "definition_site": "00aadcf0",
      "incomplete_value": true,
      "site": "00aadcf4",
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
    "ordinal": 63,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00aadc20",
      "incomplete_value": true,
      "site": "00aadc24",
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
    "old": {
      "definition_site": "00aadbb0",
      "incomplete_value": false,
      "site": "00aadbb4",
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
    "ordinal": 29,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "00aadc34",
      "incomplete_value": true,
      "site": "00aadc44",
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
            "const:60:8"
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
      "unmatched:00aad718",
      "DATA",
      [
        "storage",
        "00c64d38",
        null,
        "undefined *"
      ]
    ],
    [
      "unmatched:00aad718",
      "WRITE",
      [
        "storage",
        "Stack[-0x1d8]",
        null,
        null
      ]
    ],
    [
      "unmatched:00aad720",
      "UNCONDITIONAL_CALL",
      [
        "mapped_function",
        "00c57f60"
      ]
    ]
  ],
  "added": [
    [
      "00aad788",
      "DATA",
      [
        "storage",
        "00c64e08",
        null,
        "undefined *"
      ]
    ],
    [
      "00aad788",
      "WRITE",
      [
        "storage",
        "Stack[-0x1d8]",
        null,
        null
      ]
    ],
    [
      "00aad790",
      "UNCONDITIONAL_CALL",
      [
        "mapped_function",
        "00c57f60"
      ]
    ]
  ]
}
~~~


~~~diff
- 00aadb44 ["INT_ADD", "register:40f0:8", ["const:aadb44:8", "const:4:8"]]
- 00aadb44 ["CALL", null, ["callee:00c58120:8"]]
+ 00aadbb4 ["INT_ADD", "register:40f0:8", ["const:aadbb4:8", "const:4:8"]]
+ 00aadbb4 ["CALL", null, ["callee:00c58120:8"]]
- 00aadbb4 ["INT_ADD", "register:40f0:8", ["const:aadbb4:8", "const:4:8"]]
- 00aadbb4 ["CALL", null, ["callee:00442970:8"]]
+ 00aadc24 ["INT_ADD", "register:40f0:8", ["const:aadc24:8", "const:4:8"]]
+ 00aadc24 ["CALL", null, ["callee:00442970:8"]]
- 00aadbd4 ["INT_EQUAL", "tmp:0:1", ["register:40d8:4", "const:0:4"]]
- 00aadbd4 ["CBRANCH", null, ["local:b68:8", "tmp:0:1"]]
+ 00aadc44 ["INT_EQUAL", "tmp:0:1", ["register:40d8:4", "const:0:4"]]
+ 00aadc44 ["CBRANCH", null, ["local:b67:8", "tmp:0:1"]]
~~~


<a id="compare-4bee8fc1c8e497b15aaf459369e657ef"></a>

### [`00aadfa4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00aad/00aadfa4.md) → [`00aae014`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00aae/00aae014.md) FUN_00aae014

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, operands_and_dependencies, operation_sequence, unresolved_branch_alignment

命令の説明率　旧版 93.55% / 新版 93.55%

優先判定に残った影響 `call_argument_candidate` 1件, `unresolved_branch_alignment` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "00aadfec",
      "incomplete_value": true,
      "site": "00aadff0",
      "value": [
        "LOAD",
        "8",
        [
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


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00aadfcc",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00aae06c"
      ]
    ]
  ],
  "added": [
    [
      "00aae03c",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00aae06c"
      ]
    ]
  ]
}
~~~


~~~diff
- 00aadff0 ["INT_ADD", "register:40f0:8", ["const:aadff0:8", "const:4:8"]]
- 00aadff0 ["CALL", null, ["callee:00c57f80:8"]]
+ 00aae060 ["INT_ADD", "register:40f0:8", ["const:aae060:8", "const:4:8"]]
+ 00aae060 ["CALL", null, ["callee:00c57f80:8"]]
- 00aadfb8 ["INT_EQUAL", "tmp:0:1", ["register:40a0:8", "const:0:8"]]
- 00aadfb8 ["CBRANCH", null, ["local:b9:8", "tmp:0:1"]]
+ 00aae028 ["INT_EQUAL", "tmp:0:1", ["register:40a0:8", "const:0:8"]]
+ 00aae028 ["CBRANCH", null, ["local:b10:8", "tmp:0:1"]]
- 00aadfc8 ["INT_LESSEQUAL", "register:105:1", ["register:40a0:8", "register:4040:8"]]
- 00aadfc8 ["INT_SBORROW", "register:106:1", ["register:4040:8", "register:40a0:8"]]
- 00aadfc8 ["INT_SUB", "tmp:0:8", ["register:4040:8", "register:40a0:8"]]
- 00aadfc8 ["INT_SLESS", "register:107:1", ["tmp:0:8", "const:0:8"]]
~~~


<a id="compare-1e908235b642ec315273601f466291cb"></a>

### [`00aae020`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00aae/00aae020.md) → [`00aae090`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00aae/00aae090.md) FUN_00aae090

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal` · `cfg_change`

- 旧版 呼出元 1件 [`00aa942c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00aa9/00aa942c.md) · 呼出先 1件 [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md)
- 新版 呼出元 1件 [`00aa949c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00aa9/00aa949c.md) · 呼出先 1件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)

変更の種類 branch_condition_or_target, cfg_edge_inventory, constant, control_flow, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00aae034 ["INT_RIGHT", "tmp:0:4", ["register:4040:4", "const:0:4"]]
- 00aae034 ["INT_AND", "tmp:1:4", ["tmp:0:4", "const:1:4"]]
- 00aae034 ["INT_EQUAL", "tmp:2:1", ["tmp:1:4", "const:0:4"]]
- 00aae034 ["INT_EQUAL", "tmp:3:1", ["tmp:2:1", "const:0:1"]]
+ 00aae0a4 ["INT_RIGHT", "tmp:0:4", ["register:4040:4", "const:0:4"]]
+ 00aae0a4 ["INT_AND", "tmp:1:4", ["tmp:0:4", "const:1:4"]]
+ 00aae0a4 ["INT_EQUAL", "tmp:2:1", ["tmp:1:4", "const:0:4"]]
+ 00aae0a4 ["INT_EQUAL", "tmp:3:1", ["tmp:2:1", "const:0:1"]]
- 00aae03c ["INT_RIGHT", "tmp:0:4", ["register:4040:4", "const:0:4"]]
- 00aae03c ["INT_AND", "tmp:1:4", ["tmp:0:4", "const:1:4"]]
- 00aae03c ["INT_EQUAL", "tmp:2:1", ["tmp:1:4", "const:0:4"]]
- 00aae03c ["INT_EQUAL", "tmp:3:1", ["tmp:2:1", "const:0:1"]]
+ 00aae0ac ["INT_RIGHT", "tmp:0:4", ["register:4040:4", "const:0:4"]]
+ 00aae0ac ["INT_AND", "tmp:1:4", ["tmp:0:4", "const:1:4"]]
+ 00aae0ac ["INT_EQUAL", "tmp:2:1", ["tmp:1:4", "const:0:4"]]
+ 00aae0ac ["INT_EQUAL", "tmp:3:1", ["tmp:2:1", "const:0:1"]]
- 00aae044 ["INT_RIGHT", "tmp:0:4", ["register:4040:4", "const:0:4"]]
- 00aae044 ["INT_AND", "tmp:1:4", ["tmp:0:4", "const:1:4"]]
- 00aae044 ["INT_EQUAL", "tmp:2:1", ["tmp:1:4", "const:0:4"]]
- 00aae044 ["INT_EQUAL", "tmp:3:1", ["tmp:2:1", "const:0:1"]]
+ 00aae0b4 ["INT_RIGHT", "tmp:0:4", ["register:4040:4", "const:0:4"]]
+ 00aae0b4 ["INT_AND", "tmp:1:4", ["tmp:0:4", "const:1:4"]]
+ 00aae0b4 ["INT_EQUAL", "tmp:2:1", ["tmp:1:4", "const:0:4"]]
+ 00aae0b4 ["INT_EQUAL", "tmp:3:1", ["tmp:2:1", "const:0:1"]]
~~~


<a id="compare-c1fa56d9a6ee62d87819d5e807808aed"></a>

### [`00aae12c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00aae/00aae12c.md) → [`00aae19c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00aae/00aae19c.md) FUN_00aae19c

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal` · `cfg_change`

- 旧版 呼出元 2件 [`00aa942c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00aa9/00aa942c.md) [`00aae12c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00aae/00aae12c.md) · 呼出先 3件 [`00652ccc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00652/00652ccc.md) [`00aae12c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00aae/00aae12c.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md)
- 新版 呼出元 2件 [`00aa949c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00aa9/00aa949c.md) [`00aae19c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00aae/00aae19c.md) · 呼出先 3件 [`00652d0c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00652/00652d0c.md) [`00aae19c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00aae/00aae19c.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)

変更の種類 branch_condition_or_target, cfg_edge_inventory, constant, control_flow, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00aae12c ["INT_EQUAL", "tmp:0:1", ["register:4008:8", "const:0:8"]]
- 00aae12c ["CBRANCH", null, ["local:b2:8", "tmp:0:1"]]
+ 00aae19c ["INT_EQUAL", "tmp:0:1", ["register:4008:8", "const:0:8"]]
+ 00aae19c ["CBRANCH", null, ["local:b3:8", "tmp:0:1"]]
- 00aae14c ["INT_ADD", "register:40f0:8", ["const:aae14c:8", "const:4:8"]]
- 00aae14c ["CALL", null, ["local:b0:8"]]
+ 00aae1bc ["INT_ADD", "register:40f0:8", ["const:aae1bc:8", "const:4:8"]]
+ 00aae1bc ["CALL", null, ["local:b0:8"]]
- 00aae158 ["INT_ADD", "register:40f0:8", ["const:aae158:8", "const:4:8"]]
- 00aae158 ["CALL", null, ["local:b0:8"]]
+ 00aae1c8 ["INT_ADD", "register:40f0:8", ["const:aae1c8:8", "const:4:8"]]
+ 00aae1c8 ["CALL", null, ["local:b0:8"]]
~~~


<a id="compare-e5847ff9b77246716f85f3cc84123332"></a>

### [`00aae17c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00aae/00aae17c.md) → [`00aae1ec`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00aae/00aae1ec.md) FUN_00aae1ec

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `equal` · `cfg_change`

- 旧版 呼出元 3件 [`00aa5928`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00aa5/00aa5928.md) [`00aa60e0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00aa6/00aa60e0.md) [`00aae17c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00aae/00aae17c.md) · 呼出先 3件 [`005b9ee4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005b9/005b9ee4.md) [`00aae17c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00aae/00aae17c.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md)
- 新版 呼出元 3件 [`00aa5998`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00aa5/00aa5998.md) [`00aa6150`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00aa6/00aa6150.md) [`00aae1ec`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00aae/00aae1ec.md) · 呼出先 3件 [`005b9f24`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005b9/005b9f24.md) [`00aae1ec`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00aae/00aae1ec.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, constant, control_flow, local_def_use, operands_and_dependencies, operation_sequence

命令の説明率　旧版 95.00% / 新版 95.00%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00aae208",
      "incomplete_value": true,
      "site": "00aae20c",
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
      "definition_site": "00aae198",
      "incomplete_value": true,
      "site": "00aae19c",
      "value": [
        "live",
        "register:4040:8"
      ]
    },
    "ordinal": 0,
    "slot": 2
  }
]
~~~


~~~diff
- 00aae19c ["INT_ADD", "register:40f0:8", ["const:aae19c:8", "const:4:8"]]
- 00aae19c ["CALL", null, ["local:b0:8"]]
+ 00aae20c ["INT_ADD", "register:40f0:8", ["const:aae20c:8", "const:4:8"]]
+ 00aae20c ["CALL", null, ["local:b0:8"]]
- 00aae17c ["INT_EQUAL", "tmp:0:1", ["register:4008:8", "const:0:8"]]
- 00aae17c ["CBRANCH", null, ["local:b4:8", "tmp:0:1"]]
+ 00aae1ec ["INT_EQUAL", "tmp:0:1", ["register:4008:8", "const:0:8"]]
+ 00aae1ec ["CBRANCH", null, ["local:b2:8", "tmp:0:1"]]
- 00aae198 ["COPY", "register:4008:8", ["register:4040:8"]]
~~~


<a id="compare-f66cfa722d522fe18bcba50921ab2662"></a>

### [`00aae1cc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00aae/00aae1cc.md) → [`00aae23c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00aae/00aae23c.md) FUN_00aae23c

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `equal` · `cfg_change`

- 旧版 呼出元 2件 [`00aa78e0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00aa7/00aa78e0.md) [`00aa84a4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00aa8/00aa84a4.md) · 呼出先 5件 [`0043bb20`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043bb20.md) [`0043bba4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043bba4.md) [`00aae2fc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00aae/00aae2fc.md) [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md) [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md)
- 新版 呼出元 2件 [`00aa7950`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00aa7/00aa7950.md) [`00aa8514`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00aa8/00aa8514.md) · 呼出先 5件 [`0043bb60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bb60.md) [`0043bbe4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bbe4.md) [`00aae36c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00aae/00aae36c.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)

変更の種類 branch_condition_or_target, cfg_edge_inventory, constant, control_flow, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, return_value_candidate, unresolved_store_alignment

命令の説明率　旧版 95.52% / 新版 95.52%

優先判定に残った影響 `return_value_candidate` 1件, `unresolved_store_alignment` 3件

~~~json
[
  {
    "confidence": "limited",
    "kind": "return_value_candidate",
    "new": null,
    "old": {
      "definition_site": "00aae2b8",
      "incomplete_value": true,
      "site": "00aae2d0",
      "value": [
        "live",
        "register:40a0:8"
      ]
    },
    "ordinal": 0,
    "slot": 0
  }
]
~~~


~~~diff
- 00aae204 ["INT_ADD", "register:40f0:8", ["const:aae204:8", "const:4:8"]]
- 00aae204 ["CALL", null, ["callee:00aae36c:8"]]
+ 00aae274 ["INT_ADD", "register:40f0:8", ["const:aae274:8", "const:4:8"]]
+ 00aae274 ["CALL", null, ["callee:00aae36c:8"]]
- 00aae224 ["INT_ADD", "register:40f0:8", ["const:aae224:8", "const:4:8"]]
- 00aae224 ["CALL", null, ["callee:00c57f60:8"]]
+ 00aae294 ["INT_ADD", "register:40f0:8", ["const:aae294:8", "const:4:8"]]
+ 00aae294 ["CALL", null, ["callee:00c57f60:8"]]
- 00aae244 ["INT_RIGHT", "tmp:0:4", ["register:4050:4", "const:0:4"]]
- 00aae244 ["INT_AND", "tmp:1:4", ["tmp:0:4", "const:1:4"]]
- 00aae244 ["INT_EQUAL", "tmp:2:1", ["tmp:1:4", "const:0:4"]]
- 00aae244 ["INT_EQUAL", "tmp:3:1", ["tmp:2:1", "const:0:1"]]
+ 00aae2b4 ["INT_RIGHT", "tmp:0:4", ["register:4050:4", "const:0:4"]]
+ 00aae2b4 ["INT_AND", "tmp:1:4", ["tmp:0:4", "const:1:4"]]
+ 00aae2b4 ["INT_EQUAL", "tmp:2:1", ["tmp:1:4", "const:0:4"]]
+ 00aae2b4 ["INT_EQUAL", "tmp:3:1", ["tmp:2:1", "const:0:1"]]
~~~


<a id="compare-58b66d5d290a6ccdb232f924ee4ab42d"></a>

### [`00aae2fc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00aae/00aae2fc.md) → [`00aae36c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00aae/00aae36c.md) FUN_00aae36c

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`00aae1cc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00aae/00aae1cc.md) · 呼出先 0件 
- 新版 呼出元 1件 [`00aae23c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00aae/00aae23c.md) · 呼出先 0件 

変更の種類 branch_condition_or_target, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, operands_and_dependencies, operation_sequence, return_value_candidate, store_condition, unresolved_branch_alignment

命令の説明率　旧版 94.34% / 新版 94.34%

優先判定に残った影響 `return_value_candidate` 1件, `store_condition` 2件

アドレスに依存する影響 `unresolved_branch_alignment` 5件

~~~json
[
  {
    "confidence": "limited",
    "kind": "return_value_candidate",
    "new": null,
    "old": {
      "definition_site": "00aae400",
      "incomplete_value": true,
      "site": "00aae40c",
      "value": [
        "live",
        "register:4018:8"
      ]
    },
    "ordinal": 3,
    "slot": 0
  },
  {
    "confidence": "limited",
    "guard": [
      [
        "CONDITIONAL_JUMP",
        "00aae344"
      ],
      [
        "CONDITIONAL_JUMP",
        "00aae3b4"
      ]
    ],
    "kind": "store_condition",
    "new": {
      "definition_site": "00aae3b4",
      "incomplete_value": true,
      "site": "00aae474",
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
      "definition_site": "00aae344",
      "incomplete_value": true,
      "site": "00aae404",
      "value": [
        "INT_EQUAL",
        "1",
        [
          [
            "INT_SLESS",
            "1",
            [
              "INT_SUB",
              [
                "leaf",
                "const:0:4"
              ]
            ]
          ],
          [
            "INT_SBORROW",
            "1",
            [
              [
                "live",
                "register:4050:4"
              ],
              [
                "live",
                "register:4048:4"
              ]
            ]
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
        "CONDITIONAL_JUMP",
        "00aae344"
      ],
      [
        "CONDITIONAL_JUMP",
        "00aae3b4"
      ]
    ],
    "kind": "store_condition",
    "new": {
      "definition_site": "00aae3b4",
      "incomplete_value": true,
      "site": "00aae478",
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
      "definition_site": "00aae344",
      "incomplete_value": true,
      "site": "00aae408",
      "value": [
        "INT_EQUAL",
        "1",
        [
          [
            "INT_SLESS",
            "1",
            [
              "INT_SUB",
              [
                "leaf",
                "const:0:4"
              ]
            ]
          ],
          [
            "INT_SBORROW",
            "1",
            [
              [
                "live",
                "register:4050:4"
              ],
              [
                "live",
                "register:4048:4"
              ]
            ]
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
      "unmatched:00aae314",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00aae3b0"
      ]
    ],
    [
      "unmatched:00aae344",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00aae470"
      ]
    ],
    [
      "unmatched:00aae360",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00aae3c8"
      ]
    ]
  ],
  "added": [
    [
      "00aae384",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00aae3b0"
      ]
    ],
    [
      "00aae3b4",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00aae470"
      ]
    ],
    [
      "00aae3d0",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00aae3c8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00aae394 ["INT_EQUAL", "tmp:0:1", ["register:100:1", "register:103:1"]]
- 00aae394 ["CBRANCH", null, ["local:b20:8", "tmp:0:1"]]
+ 00aae404 ["INT_EQUAL", "tmp:0:1", ["register:100:1", "register:103:1"]]
+ 00aae404 ["CBRANCH", null, ["local:b22:8", "tmp:0:1"]]
- 00aae398 ["INT_EQUAL", "tmp:0:1", ["register:4048:8", "const:0:8"]]
- 00aae398 ["CBRANCH", null, ["local:b28:8", "tmp:0:1"]]
+ 00aae408 ["INT_EQUAL", "tmp:0:1", ["register:4048:8", "const:0:8"]]
+ 00aae408 ["CBRANCH", null, ["local:b30:8", "tmp:0:1"]]
- 00aae474 ["INT_NOTEQUAL", "tmp:0:1", ["register:100:1", "register:103:1"]]
- 00aae474 ["CBRANCH", null, ["local:b38:8", "tmp:0:1"]]
+ 00aae4e4 ["INT_NOTEQUAL", "tmp:0:1", ["register:100:1", "register:103:1"]]
+ 00aae4e4 ["CBRANCH", null, ["local:b41:8", "tmp:0:1"]]
~~~


<a id="compare-e75341c27f3219a7815fe34d69df2a15"></a>

### [`00aae4a4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00aae/00aae4a4.md) → [`00aae514`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00aae/00aae514.md) FUN_00aae514

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)

変更の種類 constant, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_store_alignment

命令の説明率　旧版 85.00% / 新版 85.00%

アドレスに依存する影響 `unresolved_store_alignment` 1件

~~~diff
- 00aae4a4 ["COPY", "register:4040:8", ["register:4000:8"]]
- 00aae4a8 ["COPY", "tmp:0:8", ["register:4000:8"]]
- 00aae4a8 ["LOAD", "register:4000:8", ["const:1b1:8", "tmp:0:8"]]
- 00aae4ac ["COPY", "tmp:0:8", ["register:4040:8"]]
- 00aae4ac ["COPY", "tmp:1:8", ["const:0:8"]]
- 00aae4ac ["STORE", null, ["const:1b1:8", "tmp:0:8", "tmp:1:8"]]
~~~


<a id="compare-56e71bd0443bef92692c2f41b0e3d7c5"></a>

### [`00aae4f4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00aae/00aae4f4.md) → [`00aae564`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00aae/00aae564.md) FUN_00aae564

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `changed`

- 旧版 呼出元 3件 [`00aa78e0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00aa7/00aa78e0.md) [`00aa84a4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00aa8/00aa84a4.md) [`00aae4f4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00aae/00aae4f4.md) · 呼出先 2件 [`00aae4f4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00aae/00aae4f4.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md)
- 新版 呼出元 3件 [`00aa7950`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00aa7/00aa7950.md) [`00aa8514`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00aa8/00aa8514.md) [`00aae564`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00aae/00aae564.md) · 呼出先 2件 [`00aae564`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00aae/00aae564.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)

変更の種類 call_argument_candidate, constant, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_store_alignment

命令の説明率　旧版 90.00% / 新版 90.00%

アドレスに依存する影響 `call_argument_candidate` 1件, `unresolved_store_alignment` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "00aae508",
      "incomplete_value": true,
      "site": "00aae510",
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
    "slot": 2
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00aae4fc",
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
      "00aae56c",
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
- 00aae510 ["INT_ADD", "register:40f0:8", ["const:aae510:8", "const:4:8"]]
- 00aae510 ["CALL", null, ["local:b0:8"]]
+ 00aae580 ["INT_ADD", "register:40f0:8", ["const:aae580:8", "const:4:8"]]
+ 00aae580 ["CALL", null, ["local:b0:8"]]
- 00aae4fc ["COPY", "tmp:0:8", ["register:40a0:8"]]
- 00aae4fc ["COPY", "tmp:1:8", ["register:4098:8"]]
- 00aae4fc ["INT_ADD", "tmp:2:8", ["register:8:8", "const:10:8"]]
- 00aae4fc ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
- 00aae500 ["COPY", "register:40e8:8", ["register:8:8"]]
~~~


