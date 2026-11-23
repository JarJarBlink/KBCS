# v16.0.2 → v16.0.3 · 最優先の変更候補 (82)

[一覧の目次](README.md)

<a id="compare-7be74f3fdc00973c02a6060615733586"></a>

### [`00b055a4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b05/00b055a4.md) → [`00b06598`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b06/00b06598.md) FUN_00b06598

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`00a4f424`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a4f/00a4f424.md) · 呼出先 2件 [`005e7460`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005e7/005e7460.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)
- 新版 呼出元 1件 [`00a50418`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a50/00a50418.md) · 呼出先 2件 [`005e7810`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005e7/005e7810.md) [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md)

変更の種類 branch_condition_or_target, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_store_alignment

命令の説明率　旧版 70.21% / 新版 70.21%

優先判定に残った影響 `unresolved_store_alignment` 6件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00b055a4",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "unmatched:00b055a8",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "unmatched:00b055ac",
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
      "00b06598",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "00b0659c",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "00b065a0",
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
- 00b055a4 ["COPY", "tmp:0:8", ["register:40e8:8"]]
- 00b055a4 ["COPY", "tmp:1:8", ["register:40f0:8"]]
- 00b055a4 ["INT_ADD", "register:8:8", ["register:8:8", "const:ffffffffffffffd0:8"]]
- 00b055a4 ["STORE", null, ["const:1b1:8", "register:8:8", "tmp:0:8"]]
- 00b055a8 ["COPY", "tmp:0:8", ["register:40b0:8"]]
- 00b055a8 ["COPY", "tmp:1:8", ["register:40a8:8"]]
- 00b055a8 ["INT_ADD", "tmp:2:8", ["register:8:8", "const:10:8"]]
- 00b055a8 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
- 00b055ac ["COPY", "tmp:0:8", ["register:40a0:8"]]
- 00b055ac ["COPY", "tmp:1:8", ["register:4098:8"]]
- 00b055ac ["INT_ADD", "tmp:2:8", ["register:8:8", "const:20:8"]]
- 00b055ac ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
~~~


<a id="compare-90ddc376365cce578cfe241ab4dd55cc"></a>

### [`00b05660`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b05/00b05660.md) → [`00b06654`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b06/00b06654.md) FUN_00b06654

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`00a4f424`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a4f/00a4f424.md) · 呼出先 3件 [`005e7460`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005e7/005e7460.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md) [`00afeb84`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00afe/00afeb84.md)
- 新版 呼出元 1件 [`00a50418`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a50/00a50418.md) · 呼出先 3件 [`005e7810`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005e7/005e7810.md) [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md) [`00affb78`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00aff/00affb78.md)

変更の種類 branch_condition_or_target, call_argument_candidate, comparison, comparison_count, constant, control_flow, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_store_alignment

命令の説明率　旧版 73.81% / 新版 73.81%

優先判定に残った影響 `call_argument_candidate` 6件, `unresolved_store_alignment` 6件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "00b0568c",
      "incomplete_value": true,
      "site": "00b05690",
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
                "register:4000:8"
              ],
              "INT_MULT"
            ]
          ],
          [
            "leaf",
            "const:2768:8"
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
      "definition_site": "00b066c8",
      "incomplete_value": true,
      "site": "00b066e4",
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
    "old": null,
    "ordinal": 3,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b066b8",
      "incomplete_value": true,
      "site": "00b066e4",
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
      "unmatched:00b05660",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "unmatched:00b05664",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "unmatched:00b05668",
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
      "00b06654",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "00b06658",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "00b0665c",
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
- 00b05690 ["INT_ADD", "register:40f0:8", ["const:b05690:8", "const:4:8"]]
- 00b05690 ["CALL", null, ["callee:005e7810:8"]]
+ 00b06684 ["INT_ADD", "register:40f0:8", ["const:b06684:8", "const:4:8"]]
+ 00b06684 ["CALL", null, ["callee:005e7810:8"]]
- 00b056f0 ["INT_ADD", "register:40f0:8", ["const:b056f0:8", "const:4:8"]]
- 00b056f0 ["CALL", null, ["callee:00affb78:8"]]
+ 00b066e4 ["INT_ADD", "register:40f0:8", ["const:b066e4:8", "const:4:8"]]
+ 00b066e4 ["CALL", null, ["callee:00affb78:8"]]
- 00b05660 ["COPY", "tmp:0:8", ["register:40e8:8"]]
- 00b05660 ["COPY", "tmp:1:8", ["register:40f0:8"]]
- 00b05660 ["INT_ADD", "register:8:8", ["register:8:8", "const:ffffffffffffffd0:8"]]
- 00b05660 ["STORE", null, ["const:1b1:8", "register:8:8", "tmp:0:8"]]
~~~


<a id="compare-253ed0f5e0f4f5bfe745e83267426ab8"></a>

### [`00b05a54`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b05/00b05a54.md) → [`00b06a48`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b06/00b06a48.md) FUN_00b06a48

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`00a4f424`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a4f/00a4f424.md) · 呼出先 3件 [`005e7460`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005e7/005e7460.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md) [`00afeb84`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00afe/00afeb84.md)
- 新版 呼出元 1件 [`00a50418`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a50/00a50418.md) · 呼出先 3件 [`005e7810`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005e7/005e7810.md) [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md) [`00affb78`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00aff/00affb78.md)

変更の種類 constant, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_store_alignment

命令の説明率　旧版 82.69% / 新版 82.69%

アドレスに依存する影響 `unresolved_store_alignment` 7件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00b05a54",
      "WRITE",
      [
        "storage",
        "Stack[-0x40]",
        null,
        null
      ]
    ],
    [
      "unmatched:00b05a58",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "unmatched:00b05a5c",
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
      "00b06a48",
      "WRITE",
      [
        "storage",
        "Stack[-0x40]",
        null,
        null
      ]
    ],
    [
      "00b06a4c",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "00b06a50",
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
- 00b05a54 ["COPY", "tmp:0:8", ["register:40e8:8"]]
- 00b05a54 ["COPY", "tmp:1:8", ["register:40f0:8"]]
- 00b05a54 ["INT_ADD", "register:8:8", ["register:8:8", "const:ffffffffffffffc0:8"]]
- 00b05a54 ["STORE", null, ["const:1b1:8", "register:8:8", "tmp:0:8"]]
- 00b05a58 ["INT_ADD", "tmp:0:8", ["register:8:8", "const:10:8"]]
- 00b05a58 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:40b8:8"]]
- 00b05a5c ["COPY", "tmp:0:8", ["register:40b0:8"]]
- 00b05a5c ["COPY", "tmp:1:8", ["register:40a8:8"]]
- 00b05a5c ["INT_ADD", "tmp:2:8", ["register:8:8", "const:20:8"]]
- 00b05a5c ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
~~~


<a id="compare-fda73f58429bfbd8835c96adf32e0cf8"></a>

### [`00b05bdc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b05/00b05bdc.md) → [`00b06bd0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b06/00b06bd0.md) FUN_00b06bd0

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal` · `cfg_change`

- 旧版 呼出元 1件 [`00a4f424`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a4f/00a4f424.md) · 呼出先 2件 [`005e7460`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005e7/005e7460.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)
- 新版 呼出元 1件 [`00a50418`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a50/00a50418.md) · 呼出先 2件 [`005e7810`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005e7/005e7810.md) [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md)

変更の種類 branch_condition_or_target, cfg_edge_inventory, constant, control_flow, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00b05bf0 ["INT_ADD", "register:40f0:8", ["const:b05bf0:8", "const:4:8"]]
- 00b05bf0 ["CALL", null, ["callee:008524fc:8"]]
+ 00b06be4 ["INT_ADD", "register:40f0:8", ["const:b06be4:8", "const:4:8"]]
+ 00b06be4 ["CALL", null, ["callee:008524fc:8"]]
- 00b05c04 ["INT_ADD", "register:40f0:8", ["const:b05c04:8", "const:4:8"]]
- 00b05c04 ["CALL", null, ["callee:005e7810:8"]]
+ 00b06bf8 ["INT_ADD", "register:40f0:8", ["const:b06bf8:8", "const:4:8"]]
+ 00b06bf8 ["CALL", null, ["callee:005e7810:8"]]
- 00b05c08 ["INT_RIGHT", "tmp:0:4", ["register:4000:4", "const:0:4"]]
- 00b05c08 ["INT_AND", "tmp:1:4", ["tmp:0:4", "const:1:4"]]
- 00b05c08 ["INT_EQUAL", "tmp:2:1", ["tmp:1:4", "const:0:4"]]
- 00b05c08 ["INT_EQUAL", "tmp:3:1", ["tmp:2:1", "const:0:1"]]
+ 00b06bfc ["INT_RIGHT", "tmp:0:4", ["register:4000:4", "const:0:4"]]
+ 00b06bfc ["INT_AND", "tmp:1:4", ["tmp:0:4", "const:1:4"]]
+ 00b06bfc ["INT_EQUAL", "tmp:2:1", ["tmp:1:4", "const:0:4"]]
+ 00b06bfc ["INT_EQUAL", "tmp:3:1", ["tmp:2:1", "const:0:1"]]
~~~


<a id="compare-7ff9a9c0a7633f041683c10f144996e8"></a>

### [`00b05ce0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b05/00b05ce0.md) → [`00b06cd4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b06/00b06cd4.md) FUN_00b06cd4

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `equal` · `cfg_change`

- 旧版 呼出元 1件 [`00a4f424`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a4f/00a4f424.md) · 呼出先 3件 [`005e7460`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005e7/005e7460.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md) [`00afeb84`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00afe/00afeb84.md)
- 新版 呼出元 1件 [`00a50418`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a50/00a50418.md) · 呼出先 3件 [`005e7810`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005e7/005e7810.md) [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md) [`00affb78`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00aff/00affb78.md)

変更の種類 branch_condition_or_target, call_argument_candidate, constant, control_flow, local_def_use, memory_read, memory_read_count, operands_and_dependencies, operation_sequence

命令の説明率　旧版 97.62% / 新版 97.62%

優先判定に残った影響 `call_argument_candidate` 5件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b06d48",
      "incomplete_value": true,
      "site": "00b06d64",
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
    "old": null,
    "ordinal": 3,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b06d38",
      "incomplete_value": true,
      "site": "00b06d64",
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
    "old": null,
    "ordinal": 3,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b06d3c",
      "incomplete_value": true,
      "site": "00b06d64",
      "value": [
        "INT_ZEXT",
        "8",
        [
          [
            "live",
            "register:4098:4"
          ]
        ]
      ]
    },
    "old": null,
    "ordinal": 3,
    "slot": 3
  }
]
~~~


~~~diff
- 00b05d70 ["INT_ADD", "register:40f0:8", ["const:b05d70:8", "const:4:8"]]
- 00b05d70 ["CALL", null, ["callee:00affb78:8"]]
+ 00b06d64 ["INT_ADD", "register:40f0:8", ["const:b06d64:8", "const:4:8"]]
+ 00b06d64 ["CALL", null, ["callee:00affb78:8"]]
- 00b05cfc ["INT_ADD", "register:40f0:8", ["const:b05cfc:8", "const:4:8"]]
- 00b05cfc ["CALL", null, ["callee:008524fc:8"]]
+ 00b06cf0 ["INT_ADD", "register:40f0:8", ["const:b06cf0:8", "const:4:8"]]
+ 00b06cf0 ["CALL", null, ["callee:008524fc:8"]]
- 00b05d10 ["INT_ADD", "register:40f0:8", ["const:b05d10:8", "const:4:8"]]
- 00b05d10 ["CALL", null, ["callee:005e7810:8"]]
+ 00b06d04 ["INT_ADD", "register:40f0:8", ["const:b06d04:8", "const:4:8"]]
+ 00b06d04 ["CALL", null, ["callee:005e7810:8"]]
~~~


<a id="compare-4f4bac7f76d924fbe324705fa435ed3f"></a>

### [`00b05d88`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b05/00b05d88.md) → [`00b06d7c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b06/00b06d7c.md) FUN_00b06d7c

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `equal` · `cfg_change`

- 旧版 呼出元 4件 [`005f57d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005f5/005f57d0.md) [`006855c8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00685/006855c8.md) [`006c6e68`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006c6/006c6e68.md) [`00a4f424`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a4f/00a4f424.md) · 呼出先 3件 [`005e7460`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005e7/005e7460.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md) [`00afeb84`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00afe/00afeb84.md)
- 新版 呼出元 4件 [`005f5b80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005f5/005f5b80.md) [`00685978`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00685/00685978.md) [`006c7218`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/006c7/006c7218.md) [`00a50418`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a50/00a50418.md) · 呼出先 3件 [`005e7810`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005e7/005e7810.md) [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md) [`00affb78`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00aff/00affb78.md)

変更の種類 call_argument_candidate, cfg_edge_inventory, constant, control_flow, local_def_use, memory_read, memory_read_count, operands_and_dependencies, operation_sequence

命令の説明率　旧版 97.14% / 新版 97.14%

優先判定に残った影響 `call_argument_candidate` 3件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "00b05ddc",
      "incomplete_value": true,
      "site": "00b05dfc",
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
    "ordinal": 3,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "00b05dd4",
      "incomplete_value": true,
      "site": "00b05dfc",
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
    "ordinal": 3,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "00b05de0",
      "incomplete_value": true,
      "site": "00b05dfc",
      "value": [
        "INT_ZEXT",
        "8",
        [
          [
            "live",
            "register:4098:4"
          ]
        ]
      ]
    },
    "ordinal": 3,
    "slot": 3
  }
]
~~~


~~~diff
- 00b05dfc ["INT_ADD", "register:40f0:8", ["const:b05dfc:8", "const:4:8"]]
- 00b05dfc ["CALL", null, ["callee:00affb78:8"]]
+ 00b06df0 ["INT_ADD", "register:40f0:8", ["const:b06df0:8", "const:4:8"]]
+ 00b06df0 ["CALL", null, ["callee:00affb78:8"]]
- 00b05da4 ["INT_ADD", "register:40f0:8", ["const:b05da4:8", "const:4:8"]]
- 00b05da4 ["CALL", null, ["callee:008524fc:8"]]
+ 00b06d98 ["INT_ADD", "register:40f0:8", ["const:b06d98:8", "const:4:8"]]
+ 00b06d98 ["CALL", null, ["callee:008524fc:8"]]
- 00b05db8 ["INT_ADD", "register:40f0:8", ["const:b05db8:8", "const:4:8"]]
- 00b05db8 ["CALL", null, ["callee:005e7810:8"]]
+ 00b06dac ["INT_ADD", "register:40f0:8", ["const:b06dac:8", "const:4:8"]]
+ 00b06dac ["CALL", null, ["callee:005e7810:8"]]
~~~


<a id="compare-aa70a24ae907d9034174a9da5092c28f"></a>

### [`00b05e14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b05/00b05e14.md) → [`00b06e08`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b06/00b06e08.md) FUN_00b06e08

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `equal` · `cfg_change`

- 旧版 呼出元 1件 [`00700b50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00700/00700b50.md) · 呼出先 5件 [`005e7460`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005e7/005e7460.md) [`0066a448`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0066a/0066a448.md) [`00802bb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00802/00802bb0.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md) [`00afeb84`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00afe/00afeb84.md)
- 新版 呼出元 1件 [`00700f00`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00700/00700f00.md) · 呼出先 5件 [`005e7810`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005e7/005e7810.md) [`0066a7f8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0066a/0066a7f8.md) [`00803b14`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00803/00803b14.md) [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md) [`00affb78`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00aff/00affb78.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, constant, control_flow, local_def_use, memory_read, memory_read_count, operands_and_dependencies, operation_sequence, return_value_candidate

命令の説明率　旧版 97.87% / 新版 97.87%

優先判定に残った影響 `call_argument_candidate` 4件, `return_value_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "00b05e60",
      "incomplete_value": true,
      "site": "00b05e80",
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
    "ordinal": 3,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "00b05e58",
      "incomplete_value": true,
      "site": "00b05e80",
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
    "ordinal": 3,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "00b05e64",
      "incomplete_value": true,
      "site": "00b05e80",
      "value": [
        "INT_ZEXT",
        "8",
        [
          [
            "live",
            "register:4098:4"
          ]
        ]
      ]
    },
    "ordinal": 3,
    "slot": 3
  }
]
~~~


~~~diff
- 00b05e80 ["INT_ADD", "register:40f0:8", ["const:b05e80:8", "const:4:8"]]
- 00b05e80 ["CALL", null, ["callee:00affb78:8"]]
+ 00b06e74 ["INT_ADD", "register:40f0:8", ["const:b06e74:8", "const:4:8"]]
+ 00b06e74 ["CALL", null, ["callee:00affb78:8"]]
- 00b05e30 ["INT_ADD", "register:40f0:8", ["const:b05e30:8", "const:4:8"]]
- 00b05e30 ["CALL", null, ["callee:008524fc:8"]]
+ 00b06e24 ["INT_ADD", "register:40f0:8", ["const:b06e24:8", "const:4:8"]]
+ 00b06e24 ["CALL", null, ["callee:008524fc:8"]]
- 00b05e44 ["INT_ADD", "register:40f0:8", ["const:b05e44:8", "const:4:8"]]
- 00b05e44 ["CALL", null, ["callee:005e7810:8"]]
+ 00b06e38 ["INT_ADD", "register:40f0:8", ["const:b06e38:8", "const:4:8"]]
+ 00b06e38 ["CALL", null, ["callee:005e7810:8"]]
~~~


<a id="compare-56fee2843e0a502f963a57e3f5f17748"></a>

### [`00b05ed0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b05/00b05ed0.md) → [`00b06ec4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b06/00b06ec4.md) FUN_00b06ec4

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `equal` · `cfg_change`

- 旧版 呼出元 1件 [`00a4f424`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a4f/00a4f424.md) · 呼出先 3件 [`005e7460`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005e7/005e7460.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md) [`00afeb84`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00afe/00afeb84.md)
- 新版 呼出元 1件 [`00a50418`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a50/00a50418.md) · 呼出先 3件 [`005e7810`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005e7/005e7810.md) [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md) [`00affb78`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00aff/00affb78.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, local_def_use, operands_and_dependencies, operation_sequence

命令の説明率　旧版 97.62% / 新版 97.62%

優先判定に残った影響 `call_argument_candidate` 6件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b06ef0",
      "incomplete_value": true,
      "site": "00b06ef4",
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
                "register:4000:8"
              ],
              "INT_MULT"
            ]
          ],
          [
            "leaf",
            "const:2768:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b05efc",
      "incomplete_value": true,
      "site": "00b05f00",
      "value": [
        "INT_ADD",
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
      "definition_site": "00b05f44",
      "incomplete_value": true,
      "site": "00b05f60",
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
    "ordinal": 3,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "00b05f34",
      "incomplete_value": true,
      "site": "00b05f60",
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
    "ordinal": 3,
    "slot": 2
  }
]
~~~


~~~diff
- 00b05f00 ["INT_ADD", "register:40f0:8", ["const:b05f00:8", "const:4:8"]]
- 00b05f00 ["CALL", null, ["callee:005e7810:8"]]
+ 00b06ef4 ["INT_ADD", "register:40f0:8", ["const:b06ef4:8", "const:4:8"]]
+ 00b06ef4 ["CALL", null, ["callee:005e7810:8"]]
- 00b05f60 ["INT_ADD", "register:40f0:8", ["const:b05f60:8", "const:4:8"]]
- 00b05f60 ["CALL", null, ["callee:00affb78:8"]]
+ 00b06f54 ["INT_ADD", "register:40f0:8", ["const:b06f54:8", "const:4:8"]]
+ 00b06f54 ["CALL", null, ["callee:00affb78:8"]]
- 00b05eec ["INT_ADD", "register:40f0:8", ["const:b05eec:8", "const:4:8"]]
- 00b05eec ["CALL", null, ["callee:008524fc:8"]]
+ 00b06ee0 ["INT_ADD", "register:40f0:8", ["const:b06ee0:8", "const:4:8"]]
+ 00b06ee0 ["CALL", null, ["callee:008524fc:8"]]
~~~


<a id="compare-eda4ac1f7e9127d19d2b5513f480a1d2"></a>

### [`00b05f78`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b05/00b05f78.md) → [`00b06f6c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b06/00b06f6c.md) FUN_00b06f6c

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`00a4f424`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a4f/00a4f424.md) · 呼出先 3件 [`005e7460`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005e7/005e7460.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md) [`00afeb84`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00afe/00afeb84.md)
- 新版 呼出元 1件 [`00a50418`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a50/00a50418.md) · 呼出先 3件 [`005e7810`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005e7/005e7810.md) [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md) [`00affb78`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00aff/00affb78.md)

変更の種類 branch_condition_or_target, call_argument_candidate, constant, control_flow, local_def_use, memory_read, memory_read_count, operands_and_dependencies, operation_sequence

命令の説明率　旧版 88.10% / 新版 88.10%

優先判定に残った影響 `call_argument_candidate` 5件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b06f98",
      "incomplete_value": true,
      "site": "00b06f9c",
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
                "register:4000:8"
              ],
              "INT_MULT"
            ]
          ],
          [
            "leaf",
            "const:2768:8"
          ]
        ]
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
      "definition_site": "00b06fe0",
      "incomplete_value": true,
      "site": "00b06ffc",
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
    "old": null,
    "ordinal": 3,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b06fd0",
      "incomplete_value": true,
      "site": "00b06ffc",
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
      "unmatched:00b05fd0",
      "DATA",
      [
        "storage",
        "0023d2f0",
        null,
        "Elf64_Rela[1815]"
      ]
    ]
  ],
  "added": [
    [
      "00b06fc4",
      "DATA",
      [
        "storage",
        "0023d2f0",
        null,
        "Elf64_Rela[1815]"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b05fa8 ["INT_ADD", "register:40f0:8", ["const:b05fa8:8", "const:4:8"]]
- 00b05fa8 ["CALL", null, ["callee:005e7810:8"]]
+ 00b06f9c ["INT_ADD", "register:40f0:8", ["const:b06f9c:8", "const:4:8"]]
+ 00b06f9c ["CALL", null, ["callee:005e7810:8"]]
- 00b06008 ["INT_ADD", "register:40f0:8", ["const:b06008:8", "const:4:8"]]
- 00b06008 ["CALL", null, ["callee:00affb78:8"]]
+ 00b06ffc ["INT_ADD", "register:40f0:8", ["const:b06ffc:8", "const:4:8"]]
+ 00b06ffc ["CALL", null, ["callee:00affb78:8"]]
- 00b05f94 ["INT_ADD", "register:40f0:8", ["const:b05f94:8", "const:4:8"]]
- 00b05f94 ["CALL", null, ["callee:008524fc:8"]]
+ 00b06f88 ["INT_ADD", "register:40f0:8", ["const:b06f88:8", "const:4:8"]]
+ 00b06f88 ["CALL", null, ["callee:008524fc:8"]]
~~~


<a id="compare-d234097b2bbf5f21a0bcd6207ecca27e"></a>

### [`00b06020`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b06/00b06020.md) → [`00b07014`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b07/00b07014.md) FUN_00b07014

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `equal` · `cfg_change`

- 旧版 呼出元 1件 [`00a4f424`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a4f/00a4f424.md) · 呼出先 3件 [`005e7460`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005e7/005e7460.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md) [`00afeb84`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00afe/00afeb84.md)
- 新版 呼出元 1件 [`00a50418`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a50/00a50418.md) · 呼出先 3件 [`005e7810`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005e7/005e7810.md) [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md) [`00affb78`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00aff/00affb78.md)

変更の種類 branch_condition_or_target, call_argument_candidate, constant, control_flow, local_def_use, memory_read, memory_read_count, operands_and_dependencies, operation_sequence

命令の説明率　旧版 90.48% / 新版 90.48%

優先判定に残った影響 `call_argument_candidate` 3件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "00b06094",
      "incomplete_value": true,
      "site": "00b060b0",
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
    "ordinal": 3,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "00b06084",
      "incomplete_value": true,
      "site": "00b060b0",
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
    "ordinal": 3,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "00b06088",
      "incomplete_value": true,
      "site": "00b060b0",
      "value": [
        "INT_ZEXT",
        "8",
        [
          [
            "live",
            "register:4098:4"
          ]
        ]
      ]
    },
    "ordinal": 3,
    "slot": 3
  }
]
~~~


~~~diff
- 00b060b0 ["INT_ADD", "register:40f0:8", ["const:b060b0:8", "const:4:8"]]
- 00b060b0 ["CALL", null, ["callee:00affb78:8"]]
+ 00b070a4 ["INT_ADD", "register:40f0:8", ["const:b070a4:8", "const:4:8"]]
+ 00b070a4 ["CALL", null, ["callee:00affb78:8"]]
- 00b0603c ["INT_ADD", "register:40f0:8", ["const:b0603c:8", "const:4:8"]]
- 00b0603c ["CALL", null, ["callee:008524fc:8"]]
+ 00b07030 ["INT_ADD", "register:40f0:8", ["const:b07030:8", "const:4:8"]]
+ 00b07030 ["CALL", null, ["callee:008524fc:8"]]
- 00b06050 ["INT_ADD", "register:40f0:8", ["const:b06050:8", "const:4:8"]]
- 00b06050 ["CALL", null, ["callee:005e7810:8"]]
+ 00b07044 ["INT_ADD", "register:40f0:8", ["const:b07044:8", "const:4:8"]]
+ 00b07044 ["CALL", null, ["callee:005e7810:8"]]
~~~


<a id="compare-d8c23fa805b7745c798371d28588d59d"></a>

### [`00b060c8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b06/00b060c8.md) → [`00b070bc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b07/00b070bc.md) FUN_00b070bc

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `equal` · `cfg_change`

- 旧版 呼出元 1件 [`00a4f424`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a4f/00a4f424.md) · 呼出先 5件 [`0046dafc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046d/0046dafc.md) [`005e7460`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005e7/005e7460.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md) [`00afeb84`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00afe/00afeb84.md) [`00b027c8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b02/00b027c8.md)
- 新版 呼出元 1件 [`00a50418`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a50/00a50418.md) · 呼出先 5件 [`0046de1c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0046d/0046de1c.md) [`005e7810`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005e7/005e7810.md) [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md) [`00affb78`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00aff/00affb78.md) [`00b037bc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b03/00b037bc.md)

変更の種類 branch_condition_or_target, constant, control_flow, operands_and_dependencies, return_value_candidate

命令の説明率　旧版 100.00% / 新版 100.00%

優先判定に残った影響 `return_value_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "return_value_candidate",
    "new": {
      "definition_site": "00b07118",
      "incomplete_value": true,
      "site": "00b0712c",
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
    "ordinal": 0,
    "slot": 0
  }
]
~~~


~~~diff
- 00b060e8 ["INT_ADD", "register:40f0:8", ["const:b060e8:8", "const:4:8"]]
- 00b060e8 ["CALL", null, ["callee:008524fc:8"]]
+ 00b070dc ["INT_ADD", "register:40f0:8", ["const:b070dc:8", "const:4:8"]]
+ 00b070dc ["CALL", null, ["callee:008524fc:8"]]
- 00b060fc ["INT_ADD", "register:40f0:8", ["const:b060fc:8", "const:4:8"]]
- 00b060fc ["CALL", null, ["callee:005e7810:8"]]
+ 00b070f0 ["INT_ADD", "register:40f0:8", ["const:b070f0:8", "const:4:8"]]
+ 00b070f0 ["CALL", null, ["callee:005e7810:8"]]
- 00b06104 ["INT_ADD", "register:40f0:8", ["const:b06104:8", "const:4:8"]]
- 00b06104 ["CALL", null, ["callee:008524fc:8"]]
+ 00b070f8 ["INT_ADD", "register:40f0:8", ["const:b070f8:8", "const:4:8"]]
+ 00b070f8 ["CALL", null, ["callee:008524fc:8"]]
~~~


<a id="compare-c4137631e0f462aaff55cdf54ffe4934"></a>

### [`00b061d8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b06/00b061d8.md) → [`00b071cc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b07/00b071cc.md) FUN_00b071cc

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`00a4f424`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a4f/00a4f424.md) · 呼出先 3件 [`005e7460`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005e7/005e7460.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md) [`00afeb84`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00afe/00afeb84.md)
- 新版 呼出元 1件 [`00a50418`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a50/00a50418.md) · 呼出先 3件 [`005e7810`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005e7/005e7810.md) [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md) [`00affb78`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00aff/00affb78.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_store_alignment

命令の説明率　旧版 76.19% / 新版 76.19%

優先判定に残った影響 `call_argument_candidate` 3件, `unresolved_store_alignment` 6件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b07240",
      "incomplete_value": true,
      "site": "00b0725c",
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
    "old": null,
    "ordinal": 3,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b07244",
      "incomplete_value": false,
      "site": "00b0725c",
      "value": [
        "leaf",
        "const:3c:8"
      ]
    },
    "old": null,
    "ordinal": 3,
    "slot": 4
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b07248",
      "incomplete_value": false,
      "site": "00b0725c",
      "value": [
        "leaf",
        "const:1:8"
      ]
    },
    "old": null,
    "ordinal": 3,
    "slot": 5
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00b061d8",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "unmatched:00b061dc",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "unmatched:00b061e0",
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
      "00b071cc",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "00b071d0",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "00b071d4",
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
- 00b06268 ["INT_ADD", "register:40f0:8", ["const:b06268:8", "const:4:8"]]
- 00b06268 ["CALL", null, ["callee:00affb78:8"]]
+ 00b0725c ["INT_ADD", "register:40f0:8", ["const:b0725c:8", "const:4:8"]]
+ 00b0725c ["CALL", null, ["callee:00affb78:8"]]
- 00b061d8 ["COPY", "tmp:0:8", ["register:40e8:8"]]
- 00b061d8 ["COPY", "tmp:1:8", ["register:40f0:8"]]
- 00b061d8 ["INT_ADD", "register:8:8", ["register:8:8", "const:ffffffffffffffd0:8"]]
- 00b061d8 ["STORE", null, ["const:1b1:8", "register:8:8", "tmp:0:8"]]
- 00b061dc ["COPY", "tmp:0:8", ["register:40b0:8"]]
- 00b061dc ["COPY", "tmp:1:8", ["register:40a8:8"]]
- 00b061dc ["INT_ADD", "tmp:2:8", ["register:8:8", "const:10:8"]]
- 00b061dc ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
~~~


<a id="compare-14588e93c648186250698362fc151c35"></a>

### [`00b06280`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b06/00b06280.md) → [`00b07274`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b07/00b07274.md) FUN_00b07274

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `bounded` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 2件 [`006c6e68`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006c6/006c6e68.md) [`00a4f424`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a4f/00a4f424.md) · 呼出先 3件 [`005e7460`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005e7/005e7460.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md) [`00afeb84`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00afe/00afeb84.md)
- 新版 呼出元 2件 [`006c7218`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/006c7/006c7218.md) [`00a50418`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a50/00a50418.md) · 呼出先 3件 [`005e7810`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005e7/005e7810.md) [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md) [`00affb78`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00aff/00affb78.md)

変更の種類 branch_condition_or_target, cfg_edge_inventory, constant, control_flow, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_store_alignment

命令の説明率　旧版 90.48% / 新版 90.48%

優先判定に残った影響 `unresolved_store_alignment` 6件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00b06280",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "unmatched:00b06284",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "unmatched:00b06288",
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
      "00b07274",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "00b07278",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "00b0727c",
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
- 00b06280 ["COPY", "tmp:0:8", ["register:40e8:8"]]
- 00b06280 ["COPY", "tmp:1:8", ["register:40f0:8"]]
- 00b06280 ["INT_ADD", "register:8:8", ["register:8:8", "const:ffffffffffffffd0:8"]]
- 00b06280 ["STORE", null, ["const:1b1:8", "register:8:8", "tmp:0:8"]]
- 00b06284 ["COPY", "tmp:0:8", ["register:40b0:8"]]
- 00b06284 ["COPY", "tmp:1:8", ["register:40a8:8"]]
- 00b06284 ["INT_ADD", "tmp:2:8", ["register:8:8", "const:10:8"]]
- 00b06284 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
- 00b06288 ["COPY", "tmp:0:8", ["register:40a0:8"]]
- 00b06288 ["COPY", "tmp:1:8", ["register:4098:8"]]
- 00b06288 ["INT_ADD", "tmp:2:8", ["register:8:8", "const:20:8"]]
- 00b06288 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
~~~


<a id="compare-8198cefca61bd6a3358ff21c249fd7a4"></a>

### [`00b069f8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b06/00b069f8.md) → [`00b079ec`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b07/00b079ec.md) FUN_00b079ec

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 2件 [`006c6e68`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006c6/006c6e68.md) [`006cb228`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006cb/006cb228.md) · 呼出先 10件 [`0043bbe4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bbe4.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md) [`00853cc8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00853/00853cc8.md) [`00903f98`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00903/00903f98.md) [`009e1014`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009e1/009e1014.md)
- 新版 呼出元 2件 [`006c7218`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/006c7/006c7218.md) [`006cb5d8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/006cb/006cb5d8.md) · 呼出先 10件 [`0043bf04`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bf04.md) [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md) [`00854c74`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00854/00854c74.md) [`00904f44`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00904/00904f44.md) [`009e1fc0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009e1/009e1fc0.md)

変更の種類 branch_condition_or_target, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, store_condition, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 38.78% / 新版 38.78%

優先判定に残った影響 `store_condition` 1件, `unresolved_branch_alignment` 44件, `unresolved_call_alignment` 21件, `unresolved_store_alignment` 56件

~~~json
[
  {
    "confidence": "limited",
    "guard": [
      [
        "FALL_THROUGH",
        "00b06df0"
      ],
      [
        "FALL_THROUGH",
        "00b07de4"
      ]
    ],
    "kind": "store_condition",
    "new": {
      "definition_site": "00b07de4",
      "incomplete_value": true,
      "site": "00b07de8",
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
      "definition_site": "00b06df0",
      "incomplete_value": true,
      "site": "00b06df4",
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
      "unmatched:00b06a20",
      "WRITE",
      [
        "storage",
        "Stack[-0x68]",
        null,
        null
      ]
    ],
    [
      "unmatched:00b06b70",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b07a20"
      ]
    ],
    [
      "00b07b74",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "unmatched:00b06b9c"
      ]
    ]
  ],
  "added": [
    [
      "00b07a14",
      "WRITE",
      [
        "storage",
        "Stack[-0x68]",
        null,
        null
      ]
    ],
    [
      "00b07b64",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b07a20"
      ]
    ],
    [
      "00b07b74",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b07b90"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b06a20 ["COPY", "tmp:0:8", ["register:4040:8"]]
- 00b06a20 ["INT_ADD", "tmp:1:8", ["register:40e8:8", "const:fffffffffffffff8:8"]]
- 00b06a20 ["STORE", null, ["const:1b1:8", "tmp:1:8", "tmp:0:8"]]
- 00b06a24 ["INT_EQUAL", "tmp:0:1", ["register:4000:4", "const:0:4"]]
- 00b06a24 ["CBRANCH", null, ["local:b4:8", "tmp:0:1"]]
+ 00b07a18 ["INT_EQUAL", "tmp:0:1", ["register:4000:4", "const:0:4"]]
+ 00b07a18 ["CBRANCH", null, ["local:b5:8", "tmp:0:1"]]
- 00b06a38 ["BOOL_NEGATE", "tmp:0:1", ["register:101:1"]]
- 00b06a38 ["CBRANCH", null, ["local:b119:8", "tmp:0:1"]]
+ 00b07a2c ["BOOL_NEGATE", "tmp:0:1", ["register:101:1"]]
+ 00b07a2c ["CBRANCH", null, ["local:b120:8", "tmp:0:1"]]
~~~


<a id="compare-f59d725a8bd95c26304ad3784f3b530f"></a>

### [`00b07674`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b07/00b07674.md) → [`00b08668`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b08/00b08668.md) _INIT_252

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 5件 [`0043aeb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043a/0043aeb0.md) [`0043b838`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b838.md) [`00c57f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f00.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)
- 新版 呼出元 0件  · 呼出先 5件 [`0043b1d0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043b1d0.md) [`0043bb58`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bb58.md) [`00c58ed0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58ed0.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies, operation_sequence, store_destination, store_value

命令の説明率　旧版 82.49% / 新版 82.49%

優先判定に残った影響 `call_argument_candidate` 5件, `store_destination` 3件, `store_value` 8件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00b086a4",
      "incomplete_value": true,
      "site": "00b086c0",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:35:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b076b0",
      "incomplete_value": true,
      "site": "00b076cc",
      "value": [
        "LOAD",
        "16",
        [
          [
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
    "ordinal": 9,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00b086c8",
      "incomplete_value": true,
      "site": "00b086e4",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:48:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b076d4",
      "incomplete_value": true,
      "site": "00b076f0",
      "value": [
        "LOAD",
        "16",
        [
          [
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
    "ordinal": 12,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00b086e8",
      "incomplete_value": true,
      "site": "00b08704",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:e3d:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b076f4",
      "incomplete_value": true,
      "site": "00b07710",
      "value": [
        "LOAD",
        "16",
        [
          [
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
      "00b086a4",
      "READ",
      [
        "storage",
        "002b7f66",
        null,
        "string"
      ]
    ],
    [
      "00b086c8",
      "READ",
      [
        "storage",
        "002b7f79",
        null,
        "string"
      ]
    ],
    [
      "00b086e8",
      "READ",
      [
        "storage",
        "002b8d6e",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "00b086a4",
      "READ",
      [
        "storage",
        "002b8035",
        null,
        "string"
      ]
    ],
    [
      "00b086c8",
      "READ",
      [
        "storage",
        "002b8048",
        null,
        "string"
      ]
    ],
    [
      "00b086e8",
      "READ",
      [
        "storage",
        "002b8e3d",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b077d4 ["INT_ADD", "register:40f0:8", ["const:b077d4:8", "const:4:8"]]
- 00b077d4 ["CALL", null, ["callee:0043bb58:8"]]
+ 00b087c8 ["INT_ADD", "register:40f0:8", ["const:b087c8:8", "const:4:8"]]
+ 00b087c8 ["CALL", null, ["callee:0043bb58:8"]]
- 00b078a8 ["INT_ADD", "register:40f0:8", ["const:b078a8:8", "const:4:8"]]
- 00b078a8 ["CALL", null, ["callee:00c58ed0:8"]]
+ 00b0889c ["INT_ADD", "register:40f0:8", ["const:b0889c:8", "const:4:8"]]
+ 00b0889c ["CALL", null, ["callee:00c58ed0:8"]]
- 00b0769c ["COPY", "register:4098:8", ["const:1124000:8"]]
+ 00b08690 ["COPY", "register:4098:8", ["const:1125000:8"]]
~~~


<a id="compare-22568cc03998ba39c92e56770b3491a4"></a>

### [`00b07a64`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b07/00b07a64.md) → [`00b08a58`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b08/00b08a58.md) FUN_00b08a58

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00b1f4c4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b1f/00b1f4c4.md) · 呼出先 25件 [`0043bbe4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bbe4.md) [`00440f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00440/00440f00.md) [`004410cc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00441/004410cc.md) [`00442970`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00442/00442970.md) [`00446db0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00446/00446db0.md)
- 新版 呼出元 1件 [`00b204b8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b20/00b204b8.md) · 呼出先 25件 [`0043bf04`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bf04.md) [`00441220`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00441/00441220.md) [`004413ec`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00441/004413ec.md) [`00442c90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00442/00442c90.md) [`004470d0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00447/004470d0.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies, store_destination, store_value

命令の説明率　旧版 97.84% / 新版 97.84%

優先判定に残った影響 `call_argument_candidate` 1件, `store_destination` 1件, `store_value` 8件

アドレスに依存する影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "00b08a9c",
      "incomplete_value": false,
      "site": "00b08aa4",
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
            "const:dd8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b07aa8",
      "incomplete_value": false,
      "site": "00b07ab0",
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
    "ordinal": 15,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00b08b08",
      "incomplete_value": true,
      "site": "00b08b08",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:2ce:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b07b14",
      "incomplete_value": true,
      "site": "00b07b14",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:1f7:8"
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
      "definition_site": "00b08b90",
      "incomplete_value": true,
      "site": "00b08b9c",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:9dc:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b07b9c",
      "incomplete_value": true,
      "site": "00b07ba8",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:99c:8"
              ]
            ]
          ]
        ]
      ]
    },
    "ordinal": 33,
    "slot": 2
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "00b08aa4",
      "DATA",
      [
        "storage",
        "00c64e08",
        null,
        "undefined *"
      ]
    ],
    [
      "00b08b04",
      "READ",
      [
        "storage",
        "002af1f7",
        null,
        "string"
      ]
    ],
    [
      "00b08b90",
      "READ",
      [
        "storage",
        "002a099c",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "00b08aa4",
      "DATA",
      [
        "storage",
        "00c65dd8",
        null,
        "undefined *"
      ]
    ],
    [
      "00b08b04",
      "READ",
      [
        "storage",
        "002af2ce",
        null,
        "string"
      ]
    ],
    [
      "00b08b90",
      "READ",
      [
        "storage",
        "002a09dc",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b07aa4 ["COPY", "register:4040:8", ["const:c64000:8"]]
+ 00b08a98 ["COPY", "register:4040:8", ["const:c65000:8"]]
- 00b08b58 ["INT_ADD", "register:40f0:8", ["const:b08b58:8", "const:4:8"]]
- 00b08b58 ["CALL", null, ["callee:00442c90:8"]]
+ 00b09b4c ["INT_ADD", "register:40f0:8", ["const:b09b4c:8", "const:4:8"]]
+ 00b09b4c ["CALL", null, ["callee:00442c90:8"]]
- 00b07aa0 ["INT_ADD", "register:40f0:8", ["const:b07aa0:8", "const:4:8"]]
- 00b07aa0 ["CALL", null, ["callee:00488180:8"]]
+ 00b08a94 ["INT_ADD", "register:40f0:8", ["const:b08a94:8", "const:4:8"]]
+ 00b08a94 ["CALL", null, ["callee:00488180:8"]]
~~~


<a id="compare-656db3322c855917e240ee72d44919f4"></a>

### [`00b0923c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b09/00b0923c.md) → [`00b0a230`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b0a/00b0a230.md) FUN_00b0a230

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`0096402c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00964/0096402c.md) · 呼出先 2件 [`00442970`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00442/00442970.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)
- 新版 呼出元 1件 [`00964fd8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00964/00964fd8.md) · 呼出先 2件 [`00442c90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00442/00442c90.md) [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 98.11% / 新版 98.11%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b0a294",
      "incomplete_value": false,
      "site": "00b0a298",
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
            "const:1b0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b092a0",
      "incomplete_value": false,
      "site": "00b092a4",
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
      "00b0a294",
      "PARAM",
      [
        "storage",
        "002a0170",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "00b0a294",
      "PARAM",
      [
        "storage",
        "002a01b0",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b092a4 ["INT_ADD", "register:40f0:8", ["const:b092a4:8", "const:4:8"]]
- 00b092a4 ["CALL", null, ["callee:00442c90:8"]]
+ 00b0a298 ["INT_ADD", "register:40f0:8", ["const:b0a298:8", "const:4:8"]]
+ 00b0a298 ["CALL", null, ["callee:00442c90:8"]]
- 00b092a0 ["COPY", "tmp:0:8", ["const:170:8"]]
- 00b092a0 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 00b092a0 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 00b092a0 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 00b0a294 ["COPY", "tmp:0:8", ["const:1b0:8"]]
+ 00b0a294 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 00b0a294 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 00b0a294 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
- 00b092a8 ["INT_ADD", "register:40f0:8", ["const:b092a8:8", "const:4:8"]]
- 00b092a8 ["CALL", null, ["callee:008524fc:8"]]
+ 00b0a29c ["INT_ADD", "register:40f0:8", ["const:b0a29c:8", "const:4:8"]]
+ 00b0a29c ["CALL", null, ["callee:008524fc:8"]]
~~~


<a id="compare-3bedbd79437cd0c673b3d914d9704c3b"></a>

### [`00b09310`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b09/00b09310.md) → [`00b0a304`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b0a/00b0a304.md) _INIT_253

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 5件 [`0043aeb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043a/0043aeb0.md) [`0043b838`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b838.md) [`00c57f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f00.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)
- 新版 呼出元 0件  · 呼出先 5件 [`0043b1d0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043b1d0.md) [`0043bb58`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bb58.md) [`00c58ed0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58ed0.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies, operation_sequence, store_destination, store_value

命令の説明率　旧版 82.49% / 新版 82.49%

優先判定に残った影響 `call_argument_candidate` 5件, `store_destination` 3件, `store_value` 8件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00b0a340",
      "incomplete_value": true,
      "site": "00b0a35c",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:35:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b0934c",
      "incomplete_value": true,
      "site": "00b09368",
      "value": [
        "LOAD",
        "16",
        [
          [
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
    "ordinal": 9,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00b0a364",
      "incomplete_value": true,
      "site": "00b0a380",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:48:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b09370",
      "incomplete_value": true,
      "site": "00b0938c",
      "value": [
        "LOAD",
        "16",
        [
          [
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
    "ordinal": 12,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00b0a384",
      "incomplete_value": true,
      "site": "00b0a3a0",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:e3d:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b09390",
      "incomplete_value": true,
      "site": "00b093ac",
      "value": [
        "LOAD",
        "16",
        [
          [
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
      "00b0a340",
      "READ",
      [
        "storage",
        "002b7f66",
        null,
        "string"
      ]
    ],
    [
      "00b0a364",
      "READ",
      [
        "storage",
        "002b7f79",
        null,
        "string"
      ]
    ],
    [
      "00b0a384",
      "READ",
      [
        "storage",
        "002b8d6e",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "00b0a340",
      "READ",
      [
        "storage",
        "002b8035",
        null,
        "string"
      ]
    ],
    [
      "00b0a364",
      "READ",
      [
        "storage",
        "002b8048",
        null,
        "string"
      ]
    ],
    [
      "00b0a384",
      "READ",
      [
        "storage",
        "002b8e3d",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b09470 ["INT_ADD", "register:40f0:8", ["const:b09470:8", "const:4:8"]]
- 00b09470 ["CALL", null, ["callee:0043bb58:8"]]
+ 00b0a464 ["INT_ADD", "register:40f0:8", ["const:b0a464:8", "const:4:8"]]
+ 00b0a464 ["CALL", null, ["callee:0043bb58:8"]]
- 00b09544 ["INT_ADD", "register:40f0:8", ["const:b09544:8", "const:4:8"]]
- 00b09544 ["CALL", null, ["callee:00c58ed0:8"]]
+ 00b0a538 ["INT_ADD", "register:40f0:8", ["const:b0a538:8", "const:4:8"]]
+ 00b0a538 ["CALL", null, ["callee:00c58ed0:8"]]
- 00b09338 ["COPY", "register:4098:8", ["const:1124000:8"]]
+ 00b0a32c ["COPY", "register:4098:8", ["const:1125000:8"]]
~~~


<a id="compare-67766d1734fcad25d0c7b6e3fad066fc"></a>

### [`00b0b6dc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b0b/00b0b6dc.md) → [`00b0c6d0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b0c/00b0c6d0.md) FUN_00b0c6d0

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 4件 [`007ccf44`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007cc/007ccf44.md) [`00af0074`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00af0/00af0074.md) [`00b0d170`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b0d/00b0d170.md) [`00b0d28c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b0d/00b0d28c.md) · 呼出先 32件 [`0046db34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046d/0046db34.md) [`0048ce94`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048c/0048ce94.md) [`005d8c08`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005d8/005d8c08.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md) [`008b7044`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b7/008b7044.md)
- 新版 呼出元 4件 [`007cdea8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007cd/007cdea8.md) [`00af1068`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00af1/00af1068.md) [`00b0e164`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b0e/00b0e164.md) [`00b0e280`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b0e/00b0e280.md) · 呼出先 32件 [`0046de54`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0046d/0046de54.md) [`0048d1b4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0048d/0048d1b4.md) [`005d8fb8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005d8/005d8fb8.md) [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md) [`008b7ff0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008b7/008b7ff0.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, local_def_use, operands_and_dependencies, operation_sequence, store_value, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 94.44% / 新版 94.44%

優先判定に残った影響 `call_argument_candidate` 1件, `store_value` 5件, `unresolved_call_alignment` 1件, `unresolved_store_alignment` 2件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "00b0c734",
      "incomplete_value": false,
      "site": "00b0c734",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c8f000:8"
          ],
          [
            "leaf",
            "const:e98:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b0b740",
      "incomplete_value": false,
      "site": "00b0b740",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c8e000:8"
          ],
          [
            "leaf",
            "const:ec8:8"
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
      "definition_site": "00b0c76c",
      "incomplete_value": false,
      "site": "00b0c76c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c90000:8"
          ],
          [
            "leaf",
            "const:18:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b0b778",
      "incomplete_value": false,
      "site": "00b0b778",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c8f000:8"
          ],
          [
            "leaf",
            "const:48:8"
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
      "definition_site": "00b0c78c",
      "incomplete_value": false,
      "site": "00b0c78c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c90000:8"
          ],
          [
            "leaf",
            "const:98:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b0b798",
      "incomplete_value": false,
      "site": "00b0b798",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c8f000:8"
          ],
          [
            "leaf",
            "const:c8:8"
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
      "00b0c734",
      "DATA",
      [
        "storage",
        "00c8eec8",
        null,
        "undefined *"
      ]
    ],
    [
      "00b0c76c",
      "DATA",
      [
        "storage",
        "00c8f048",
        null,
        "undefined *"
      ]
    ],
    [
      "00b0c78c",
      "DATA",
      [
        "storage",
        "00c8f0c8",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00b0c734",
      "DATA",
      [
        "storage",
        "00c8fe98",
        null,
        "undefined *"
      ]
    ],
    [
      "00b0c76c",
      "DATA",
      [
        "storage",
        "00c90018",
        null,
        "undefined *"
      ]
    ],
    [
      "00b0c78c",
      "DATA",
      [
        "storage",
        "00c90098",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b0ba1c ["INT_ADD", "register:40f0:8", ["const:b0ba1c:8", "const:4:8"]]
- 00b0ba1c ["CALL", null, ["callee:008ba29c:8"]]
+ 00b0ca10 ["INT_ADD", "register:40f0:8", ["const:b0ca10:8", "const:4:8"]]
+ 00b0ca10 ["CALL", null, ["callee:008ba29c:8"]]
- 00b0b728 ["INT_ADD", "register:40f0:8", ["const:b0b728:8", "const:4:8"]]
- 00b0b728 ["CALL", null, ["callee:00b0c56c:8"]]
+ 00b0c71c ["INT_ADD", "register:40f0:8", ["const:b0c71c:8", "const:4:8"]]
+ 00b0c71c ["CALL", null, ["callee:00b0c56c:8"]]
- 00b0b72c ["INT_EQUAL", "tmp:0:1", ["register:4000:8", "const:0:8"]]
- 00b0b72c ["CBRANCH", null, ["local:b49:8", "tmp:0:1"]]
+ 00b0c720 ["INT_EQUAL", "tmp:0:1", ["register:4000:8", "const:0:8"]]
+ 00b0c720 ["CBRANCH", null, ["local:b48:8", "tmp:0:1"]]
~~~


<a id="compare-0e63bd48fdf7120d6bb41fea2215fb90"></a>

### [`00b0bd9c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b0b/00b0bd9c.md) → [`00b0cd90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b0c/00b0cd90.md) FUN_00b0cd90

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 3件 [`00b0b6dc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b0b/00b0b6dc.md) [`00b0d938`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b0d/00b0d938.md) [`00b0da74`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b0d/00b0da74.md) · 呼出先 20件 [`00442970`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00442/00442970.md) [`00447f34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00447/00447f34.md) [`0047e64c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047e/0047e64c.md) [`0047edf4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047e/0047edf4.md) [`0048ce94`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048c/0048ce94.md)
- 新版 呼出元 3件 [`00b0c6d0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b0c/00b0c6d0.md) [`00b0e92c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b0e/00b0e92c.md) [`00b0ea68`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b0e/00b0ea68.md) · 呼出先 20件 [`00442c90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00442/00442c90.md) [`00448254`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00448/00448254.md) [`0047e96c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047e/0047e96c.md) [`0047f114`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047f/0047f114.md) [`0048d1b4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0048d/0048d1b4.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies, store_destination, store_value

命令の説明率　旧版 91.41% / 新版 91.41%

優先判定に残った影響 `call_argument_candidate` 8件, `store_destination` 7件, `store_value` 3件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_destination",
    "new": {
      "definition_site": "00b0d04c",
      "incomplete_value": false,
      "site": "00b0d04c",
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
                "const:fc0:8"
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
      "definition_site": "00b0c058",
      "incomplete_value": false,
      "site": "00b0c058",
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
    "ordinal": 30,
    "slot": 1
  },
  {
    "confidence": "bounded",
    "kind": "store_destination",
    "new": {
      "definition_site": "00b0d050",
      "incomplete_value": false,
      "site": "00b0d050",
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
            "const:fc0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b0c05c",
      "incomplete_value": false,
      "site": "00b0c05c",
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
    "ordinal": 31,
    "slot": 1
  },
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "00b0d04c",
      "incomplete_value": false,
      "site": "00b0d050",
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
                "const:fc0:8"
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
      "definition_site": "00b0c058",
      "incomplete_value": false,
      "site": "00b0c05c",
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
    "ordinal": 31,
    "slot": 2
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "00b0cf00",
      "READ",
      [
        "storage",
        "002b83bb",
        null,
        "string"
      ]
    ],
    [
      "00b0cf2c",
      "READ",
      [
        "storage",
        "00ca5038",
        null,
        "undefined1"
      ]
    ],
    [
      "00b0cf70",
      "PARAM",
      [
        "storage",
        "00ca5000",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00b0cf00",
      "READ",
      [
        "storage",
        "002b848a",
        null,
        "string"
      ]
    ],
    [
      "00b0cf2c",
      "READ",
      [
        "storage",
        "00ca5ff8",
        null,
        "undefined1"
      ]
    ],
    [
      "00b0cf70",
      "PARAM",
      [
        "storage",
        "00ca5fc0",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b0bf84 ["INT_ADD", "register:40f0:8", ["const:b0bf84:8", "const:4:8"]]
- 00b0bf84 ["CALL", null, ["callee:0047e96c:8"]]
+ 00b0cf78 ["INT_ADD", "register:40f0:8", ["const:b0cf78:8", "const:4:8"]]
+ 00b0cf78 ["CALL", null, ["callee:0047e96c:8"]]
- 00b0c034 ["INT_ADD", "register:40f0:8", ["const:b0c034:8", "const:4:8"]]
- 00b0c034 ["CALL", null, ["callee:00c58ef0:8"]]
+ 00b0d028 ["INT_ADD", "register:40f0:8", ["const:b0d028:8", "const:4:8"]]
+ 00b0d028 ["CALL", null, ["callee:00c58ef0:8"]]
- 00b0c070 ["INT_ADD", "register:40f0:8", ["const:b0c070:8", "const:4:8"]]
- 00b0c070 ["CALL", null, ["callee:00c58ed0:8"]]
+ 00b0d064 ["INT_ADD", "register:40f0:8", ["const:b0d064:8", "const:4:8"]]
+ 00b0d064 ["CALL", null, ["callee:00c58ed0:8"]]
~~~


<a id="compare-9eb096104552a3d4e27c58754b98e9fa"></a>

### [`00b0cac4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b0c/00b0cac4.md) → [`00b0dab8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b0d/00b0dab8.md) FUN_00b0dab8

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 2件 [`00b0c8b8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b0c/00b0c8b8.md) [`00b0caec`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b0c/00b0caec.md) · 呼出先 1件 [`0043b7b8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b7b8.md)
- 新版 呼出元 2件 [`00b0d8ac`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b0d/00b0d8ac.md) [`00b0dae0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b0d/00b0dae0.md) · 呼出先 1件 [`0043bad8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bad8.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 80.00% / 新版 80.00%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b0dac4",
      "incomplete_value": false,
      "site": "00b0dac8",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:2b8000:8"
          ],
          [
            "leaf",
            "const:5b:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b0cad0",
      "incomplete_value": false,
      "site": "00b0cad4",
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
      "00b0dac4",
      "PARAM",
      [
        "storage",
        "002b7f8c",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "00b0dac4",
      "PARAM",
      [
        "storage",
        "002b805b",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b0cad4 ["INT_ADD", "register:40f0:8", ["const:b0cad4:8", "const:4:8"]]
- 00b0cad4 ["CALL", null, ["callee:0043bad8:8"]]
+ 00b0dac8 ["INT_ADD", "register:40f0:8", ["const:b0dac8:8", "const:4:8"]]
+ 00b0dac8 ["CALL", null, ["callee:0043bad8:8"]]
- 00b0cacc ["COPY", "register:4000:8", ["const:2b7000:8"]]
+ 00b0dac0 ["COPY", "register:4000:8", ["const:2b8000:8"]]
- 00b0cad0 ["COPY", "tmp:0:8", ["const:f8c:8"]]
- 00b0cad0 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 00b0cad0 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 00b0cad0 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 00b0dac4 ["COPY", "tmp:0:8", ["const:5b:8"]]
+ 00b0dac4 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 00b0dac4 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 00b0dac4 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
~~~


<a id="compare-34d2b15601b37544e0a4903cceb978bf"></a>

### [`00b0cad8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b0c/00b0cad8.md) → [`00b0dacc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b0d/00b0dacc.md) FUN_00b0dacc

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 2件 [`00b097a4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b09/00b097a4.md) [`00b0af3c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b0a/00b0af3c.md) · 呼出先 1件 [`0043b7b8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b7b8.md)
- 新版 呼出元 2件 [`00b0a798`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b0a/00b0a798.md) [`00b0bf30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b0b/00b0bf30.md) · 呼出先 1件 [`0043bad8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bad8.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 80.00% / 新版 80.00%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b0dad8",
      "incomplete_value": false,
      "site": "00b0dadc",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:2b8000:8"
          ],
          [
            "leaf",
            "const:5b:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b0cae4",
      "incomplete_value": false,
      "site": "00b0cae8",
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
      "00b0dad8",
      "PARAM",
      [
        "storage",
        "002b7f8c",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "00b0dad8",
      "PARAM",
      [
        "storage",
        "002b805b",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b0cae8 ["INT_ADD", "register:40f0:8", ["const:b0cae8:8", "const:4:8"]]
- 00b0cae8 ["CALL", null, ["callee:0043bad8:8"]]
+ 00b0dadc ["INT_ADD", "register:40f0:8", ["const:b0dadc:8", "const:4:8"]]
+ 00b0dadc ["CALL", null, ["callee:0043bad8:8"]]
- 00b0cae0 ["COPY", "register:4000:8", ["const:2b7000:8"]]
+ 00b0dad4 ["COPY", "register:4000:8", ["const:2b8000:8"]]
- 00b0cae4 ["COPY", "tmp:0:8", ["const:f8c:8"]]
- 00b0cae4 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 00b0cae4 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 00b0cae4 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 00b0dad8 ["COPY", "tmp:0:8", ["const:5b:8"]]
+ 00b0dad8 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 00b0dad8 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 00b0dad8 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
~~~


<a id="compare-284d563133d3f5ac281d8829603e4dbf"></a>

### [`00b0cc7c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b0c/00b0cc7c.md) → [`00b0dc70`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b0d/00b0dc70.md) FUN_00b0dc70

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 87.50% / 新版 87.50%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "00b0dc94",
      "incomplete_value": false,
      "site": "00b0dc98",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c8f000:8"
          ],
          [
            "leaf",
            "const:e98:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b0cca0",
      "incomplete_value": false,
      "site": "00b0cca4",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c8e000:8"
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
      "00b0dc98",
      "DATA",
      [
        "storage",
        "00c8eec8",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00b0dc98",
      "DATA",
      [
        "storage",
        "00c8fe98",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b0cc90 ["INT_ADD", "register:40f0:8", ["const:b0cc90:8", "const:4:8"]]
- 00b0cc90 ["CALL", null, ["callee:00c58f30:8"]]
+ 00b0dc84 ["INT_ADD", "register:40f0:8", ["const:b0dc84:8", "const:4:8"]]
+ 00b0dc84 ["CALL", null, ["callee:00c58f30:8"]]
- 00b0cc9c ["COPY", "register:4040:8", ["const:c8e000:8"]]
+ 00b0dc90 ["COPY", "register:4040:8", ["const:c8f000:8"]]
- 00b0cca0 ["COPY", "tmp:0:8", ["const:ec8:8"]]
- 00b0cca0 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00b0cca0 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00b0cca0 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00b0dc94 ["COPY", "tmp:0:8", ["const:e98:8"]]
+ 00b0dc94 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00b0dc94 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00b0dc94 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-ab95653b0e8021e4231f023e19ba17f7"></a>

### [`00b0ccbc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b0c/00b0ccbc.md) → [`00b0dcb0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b0d/00b0dcb0.md) FUN_00b0dcb0

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
      "definition_site": "00b0dcb4",
      "incomplete_value": false,
      "site": "00b0dcb8",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c8f000:8"
          ],
          [
            "leaf",
            "const:e98:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b0ccc0",
      "incomplete_value": false,
      "site": "00b0ccc4",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c8e000:8"
          ],
          [
            "leaf",
            "const:ec8:8"
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
      "00b0dcb8",
      "DATA",
      [
        "storage",
        "00c8eec8",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00b0dcb8",
      "DATA",
      [
        "storage",
        "00c8fe98",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b0ccbc ["COPY", "register:4040:8", ["const:c8e000:8"]]
+ 00b0dcb0 ["COPY", "register:4040:8", ["const:c8f000:8"]]
- 00b0ccc0 ["COPY", "tmp:0:8", ["const:ec8:8"]]
- 00b0ccc0 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00b0ccc0 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00b0ccc0 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00b0dcb4 ["COPY", "tmp:0:8", ["const:e98:8"]]
+ 00b0dcb4 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00b0dcb4 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00b0dcb4 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-39dab70266141dda64aeb2316ee0e576"></a>

### [`00b0cce4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b0c/00b0cce4.md) → [`00b0dcd8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b0d/00b0dcd8.md) FUN_00b0dcd8

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 16件 [`00447f34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00447/00447f34.md) [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md) [`0047ce14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047ce14.md) [`0048ce94`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048c/0048ce94.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)
- 新版 呼出元 0件  · 呼出先 16件 [`00448254`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00448/00448254.md) [`0047b054`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047b/0047b054.md) [`0047d134`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047d/0047d134.md) [`0048d1b4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0048d/0048d1b4.md) [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md)

変更の種類 call, call_target, constant, operands_and_dependencies, store_value

命令の説明率　旧版 93.82% / 新版 93.82%

優先判定に残った影響 `call_target` 1件, `store_value` 4件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00b0ddc0",
      "incomplete_value": true,
      "site": "00b0ddd0",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:9e6:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b0cdcc",
      "incomplete_value": true,
      "site": "00b0cddc",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:91b:8"
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
      "definition_site": "00b0de04",
      "incomplete_value": false,
      "site": "00b0de04",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c8f000:8"
          ],
          [
            "leaf",
            "const:f08:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b0ce10",
      "incomplete_value": false,
      "site": "00b0ce10",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c8e000:8"
          ],
          [
            "leaf",
            "const:f38:8"
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
      "definition_site": "00b0de68",
      "incomplete_value": true,
      "site": "00b0de78",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:438:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b0ce74",
      "incomplete_value": true,
      "site": "00b0ce84",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:361:8"
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
      "00b0dd2c",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ],
    [
      "00b0ddc0",
      "READ",
      [
        "storage",
        "002a391b",
        null,
        "string"
      ]
    ],
    [
      "00b0de04",
      "DATA",
      [
        "storage",
        "00c8ef38",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00b0dd2c",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047b054"
      ]
    ],
    [
      "00b0ddc0",
      "READ",
      [
        "storage",
        "002a39e6",
        null,
        "string"
      ]
    ],
    [
      "00b0de04",
      "DATA",
      [
        "storage",
        "00c8ff08",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b0cd38 ["INT_ADD", "register:40f0:8", ["const:b0cd38:8", "const:4:8"]]
- 00b0cd38 ["CALL", null, ["ram:47ad34:8"]]
+ 00b0dd2c ["INT_ADD", "register:40f0:8", ["const:b0dd2c:8", "const:4:8"]]
+ 00b0dd2c ["CALL", null, ["ram:47b054:8"]]
- 00b0cd44 ["INT_ADD", "register:40f0:8", ["const:b0cd44:8", "const:4:8"]]
- 00b0cd44 ["CALL", null, ["callee:0047d134:8"]]
+ 00b0dd38 ["INT_ADD", "register:40f0:8", ["const:b0dd38:8", "const:4:8"]]
+ 00b0dd38 ["CALL", null, ["callee:0047d134:8"]]
- 00b0cd7c ["INT_ADD", "register:40f0:8", ["const:b0cd7c:8", "const:4:8"]]
- 00b0cd7c ["CALL", null, ["callee:008524fc:8"]]
+ 00b0dd70 ["INT_ADD", "register:40f0:8", ["const:b0dd70:8", "const:4:8"]]
+ 00b0dd70 ["CALL", null, ["callee:008524fc:8"]]
~~~


<a id="compare-fcc11da9a1e55997a25df7d98f1fc81a"></a>

### [`00b0d108`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b0d/00b0d108.md) → [`00b0e0fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b0e/00b0e0fc.md) FUN_00b0e0fc

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 87.50% / 新版 87.50%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "00b0e120",
      "incomplete_value": false,
      "site": "00b0e124",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c8f000:8"
          ],
          [
            "leaf",
            "const:f08:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b0d12c",
      "incomplete_value": false,
      "site": "00b0d130",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c8e000:8"
          ],
          [
            "leaf",
            "const:f38:8"
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
      "00b0e124",
      "DATA",
      [
        "storage",
        "00c8ef38",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00b0e124",
      "DATA",
      [
        "storage",
        "00c8ff08",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b0d11c ["INT_ADD", "register:40f0:8", ["const:b0d11c:8", "const:4:8"]]
- 00b0d11c ["CALL", null, ["callee:00c58f30:8"]]
+ 00b0e110 ["INT_ADD", "register:40f0:8", ["const:b0e110:8", "const:4:8"]]
+ 00b0e110 ["CALL", null, ["callee:00c58f30:8"]]
- 00b0d128 ["COPY", "register:4040:8", ["const:c8e000:8"]]
+ 00b0e11c ["COPY", "register:4040:8", ["const:c8f000:8"]]
- 00b0d12c ["COPY", "tmp:0:8", ["const:f38:8"]]
- 00b0d12c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00b0d12c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00b0d12c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00b0e120 ["COPY", "tmp:0:8", ["const:f08:8"]]
+ 00b0e120 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00b0e120 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00b0e120 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-8c1a760c240f15a3ebcffbe8c05c8525"></a>

### [`00b0d148`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b0d/00b0d148.md) → [`00b0e13c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b0e/00b0e13c.md) FUN_00b0e13c

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
      "definition_site": "00b0e140",
      "incomplete_value": false,
      "site": "00b0e144",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c8f000:8"
          ],
          [
            "leaf",
            "const:f08:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b0d14c",
      "incomplete_value": false,
      "site": "00b0d150",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c8e000:8"
          ],
          [
            "leaf",
            "const:f38:8"
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
      "00b0e144",
      "DATA",
      [
        "storage",
        "00c8ef38",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00b0e144",
      "DATA",
      [
        "storage",
        "00c8ff08",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b0d148 ["COPY", "register:4040:8", ["const:c8e000:8"]]
+ 00b0e13c ["COPY", "register:4040:8", ["const:c8f000:8"]]
- 00b0d14c ["COPY", "tmp:0:8", ["const:f38:8"]]
- 00b0d14c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00b0d14c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00b0d14c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00b0e140 ["COPY", "tmp:0:8", ["const:f08:8"]]
+ 00b0e140 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00b0e140 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00b0e140 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-20d4f73f1cc66748c8906ed9c1f1defc"></a>

### [`00b0d170`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b0d/00b0d170.md) → [`00b0e164`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b0e/00b0e164.md) FUN_00b0e164

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 5件 [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md) [`0047ce14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047ce14.md) [`008b91d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b9/008b91d0.md) [`00b0b6dc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b0b/00b0b6dc.md) [`00b0c2f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b0c/00b0c2f0.md)
- 新版 呼出元 0件  · 呼出先 5件 [`0047b054`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047b/0047b054.md) [`0047d134`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047d/0047d134.md) [`008ba17c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008ba/008ba17c.md) [`00b0c6d0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b0c/00b0c6d0.md) [`00b0d2e4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b0d/00b0d2e4.md)

変更の種類 call, call_target, constant, operands_and_dependencies

命令の説明率　旧版 97.06% / 新版 97.06%

優先判定に残った影響 `call_target` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_target",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "00b0e194",
      "value": [
        "leaf",
        "ram:47b054:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "00b0d1a0",
      "value": [
        "leaf",
        "ram:47ad34:8"
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
      "00b0e194",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ]
  ],
  "added": [
    [
      "00b0e194",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047b054"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b0d1a0 ["INT_ADD", "register:40f0:8", ["const:b0d1a0:8", "const:4:8"]]
- 00b0d1a0 ["CALL", null, ["ram:47ad34:8"]]
+ 00b0e194 ["INT_ADD", "register:40f0:8", ["const:b0e194:8", "const:4:8"]]
+ 00b0e194 ["CALL", null, ["ram:47b054:8"]]
- 00b0d1ac ["INT_ADD", "register:40f0:8", ["const:b0d1ac:8", "const:4:8"]]
- 00b0d1ac ["CALL", null, ["callee:0047d134:8"]]
+ 00b0e1a0 ["INT_ADD", "register:40f0:8", ["const:b0e1a0:8", "const:4:8"]]
+ 00b0e1a0 ["CALL", null, ["callee:0047d134:8"]]
~~~


<a id="compare-7f9a8ae0a5a36702bf0b4389a7597f9e"></a>

### [`00b0d224`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b0d/00b0d224.md) → [`00b0e218`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b0e/00b0e218.md) FUN_00b0e218

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 87.50% / 新版 87.50%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "00b0e23c",
      "incomplete_value": false,
      "site": "00b0e240",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c8f000:8"
          ],
          [
            "leaf",
            "const:f88:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b0d248",
      "incomplete_value": false,
      "site": "00b0d24c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c8e000:8"
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
      "00b0e240",
      "DATA",
      [
        "storage",
        "00c8efb8",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00b0e240",
      "DATA",
      [
        "storage",
        "00c8ff88",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b0d238 ["INT_ADD", "register:40f0:8", ["const:b0d238:8", "const:4:8"]]
- 00b0d238 ["CALL", null, ["callee:00c58f30:8"]]
+ 00b0e22c ["INT_ADD", "register:40f0:8", ["const:b0e22c:8", "const:4:8"]]
+ 00b0e22c ["CALL", null, ["callee:00c58f30:8"]]
- 00b0d244 ["COPY", "register:4040:8", ["const:c8e000:8"]]
+ 00b0e238 ["COPY", "register:4040:8", ["const:c8f000:8"]]
- 00b0d248 ["COPY", "tmp:0:8", ["const:fb8:8"]]
- 00b0d248 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00b0d248 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00b0d248 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00b0e23c ["COPY", "tmp:0:8", ["const:f88:8"]]
+ 00b0e23c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00b0e23c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00b0e23c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-72bfd702d4fa8eef9e1375d91c096244"></a>

### [`00b0d264`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b0d/00b0d264.md) → [`00b0e258`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b0e/00b0e258.md) FUN_00b0e258

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
      "definition_site": "00b0e25c",
      "incomplete_value": false,
      "site": "00b0e260",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c8f000:8"
          ],
          [
            "leaf",
            "const:f88:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b0d268",
      "incomplete_value": false,
      "site": "00b0d26c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c8e000:8"
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
      "00b0e260",
      "DATA",
      [
        "storage",
        "00c8efb8",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00b0e260",
      "DATA",
      [
        "storage",
        "00c8ff88",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b0d264 ["COPY", "register:4040:8", ["const:c8e000:8"]]
+ 00b0e258 ["COPY", "register:4040:8", ["const:c8f000:8"]]
- 00b0d268 ["COPY", "tmp:0:8", ["const:fb8:8"]]
- 00b0d268 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00b0d268 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00b0d268 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00b0e25c ["COPY", "tmp:0:8", ["const:f88:8"]]
+ 00b0e25c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00b0e25c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00b0e25c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-c1ad9d2d7a5fecabd959e12412ddbad9"></a>

### [`00b0d28c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b0d/00b0d28c.md) → [`00b0e280`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b0e/00b0e280.md) FUN_00b0e280

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 5件 [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md) [`0047ce14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047ce14.md) [`008b91d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b9/008b91d0.md) [`00b0b6dc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b0b/00b0b6dc.md) [`00b0c2f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b0c/00b0c2f0.md)
- 新版 呼出元 0件  · 呼出先 5件 [`0047b054`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047b/0047b054.md) [`0047d134`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047d/0047d134.md) [`008ba17c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008ba/008ba17c.md) [`00b0c6d0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b0c/00b0c6d0.md) [`00b0d2e4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b0d/00b0d2e4.md)

変更の種類 call, call_target, constant, operands_and_dependencies

命令の説明率　旧版 97.06% / 新版 97.06%

優先判定に残った影響 `call_target` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_target",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "00b0e2b0",
      "value": [
        "leaf",
        "ram:47b054:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "00b0d2bc",
      "value": [
        "leaf",
        "ram:47ad34:8"
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
      "00b0e2b0",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ]
  ],
  "added": [
    [
      "00b0e2b0",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047b054"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b0d2bc ["INT_ADD", "register:40f0:8", ["const:b0d2bc:8", "const:4:8"]]
- 00b0d2bc ["CALL", null, ["ram:47ad34:8"]]
+ 00b0e2b0 ["INT_ADD", "register:40f0:8", ["const:b0e2b0:8", "const:4:8"]]
+ 00b0e2b0 ["CALL", null, ["ram:47b054:8"]]
- 00b0d2c8 ["INT_ADD", "register:40f0:8", ["const:b0d2c8:8", "const:4:8"]]
- 00b0d2c8 ["CALL", null, ["callee:0047d134:8"]]
+ 00b0e2bc ["INT_ADD", "register:40f0:8", ["const:b0e2bc:8", "const:4:8"]]
+ 00b0e2bc ["CALL", null, ["callee:0047d134:8"]]
~~~


<a id="compare-4290af5091a63f84a3d253ac74bfbaf8"></a>

### [`00b0d340`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b0d/00b0d340.md) → [`00b0e334`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b0e/00b0e334.md) FUN_00b0e334

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 84.62% / 新版 84.62%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "00b0e358",
      "incomplete_value": false,
      "site": "00b0e358",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c90000:8"
          ],
          [
            "leaf",
            "const:18:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b0d364",
      "incomplete_value": false,
      "site": "00b0d364",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c8f000:8"
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
      "00b0e358",
      "DATA",
      [
        "storage",
        "00c8f048",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00b0e358",
      "DATA",
      [
        "storage",
        "00c90018",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b0d354 ["INT_ADD", "register:40f0:8", ["const:b0d354:8", "const:4:8"]]
- 00b0d354 ["CALL", null, ["callee:00c58f30:8"]]
+ 00b0e348 ["INT_ADD", "register:40f0:8", ["const:b0e348:8", "const:4:8"]]
+ 00b0e348 ["CALL", null, ["callee:00c58f30:8"]]
- 00b0d35c ["COPY", "register:4040:8", ["const:c8f000:8"]]
+ 00b0e350 ["COPY", "register:4040:8", ["const:c90000:8"]]
- 00b0d360 ["COPY", "tmp:0:8", ["const:48:8"]]
- 00b0d360 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00b0d360 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00b0d360 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00b0e354 ["COPY", "tmp:0:8", ["const:18:8"]]
+ 00b0e354 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00b0e354 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00b0e354 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-dadb2ae5924166be95f030e0e1cbbf75"></a>

### [`00b0d374`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b0d/00b0d374.md) → [`00b0e368`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b0e/00b0e368.md) FUN_00b0e368

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
      "definition_site": "00b0e374",
      "incomplete_value": false,
      "site": "00b0e374",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c90000:8"
          ],
          [
            "leaf",
            "const:18:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b0d380",
      "incomplete_value": false,
      "site": "00b0d380",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c8f000:8"
          ],
          [
            "leaf",
            "const:48:8"
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
      "00b0e374",
      "DATA",
      [
        "storage",
        "00c8f048",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00b0e374",
      "DATA",
      [
        "storage",
        "00c90018",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b0d378 ["COPY", "register:4048:8", ["const:c8f000:8"]]
+ 00b0e36c ["COPY", "register:4048:8", ["const:c90000:8"]]
- 00b0d37c ["COPY", "tmp:0:8", ["const:48:8"]]
- 00b0d37c ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 00b0d37c ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 00b0d37c ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 00b0e370 ["COPY", "tmp:0:8", ["const:18:8"]]
+ 00b0e370 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 00b0e370 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 00b0e370 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
~~~


<a id="compare-b0747c65a45f64af4e34738d8b8d04dc"></a>

### [`00b0d404`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b0d/00b0d404.md) → [`00b0e3f8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b0e/00b0e3f8.md) FUN_00b0e3f8

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 87.50% / 新版 87.50%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "00b0e41c",
      "incomplete_value": false,
      "site": "00b0e420",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c90000:8"
          ],
          [
            "leaf",
            "const:98:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b0d428",
      "incomplete_value": false,
      "site": "00b0d42c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c8f000:8"
          ],
          [
            "leaf",
            "const:c8:8"
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
      "00b0e420",
      "DATA",
      [
        "storage",
        "00c8f0c8",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00b0e420",
      "DATA",
      [
        "storage",
        "00c90098",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b0d418 ["INT_ADD", "register:40f0:8", ["const:b0d418:8", "const:4:8"]]
- 00b0d418 ["CALL", null, ["callee:00c58f30:8"]]
+ 00b0e40c ["INT_ADD", "register:40f0:8", ["const:b0e40c:8", "const:4:8"]]
+ 00b0e40c ["CALL", null, ["callee:00c58f30:8"]]
- 00b0d424 ["COPY", "register:4040:8", ["const:c8f000:8"]]
+ 00b0e418 ["COPY", "register:4040:8", ["const:c90000:8"]]
- 00b0d428 ["COPY", "tmp:0:8", ["const:c8:8"]]
- 00b0d428 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00b0d428 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00b0d428 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00b0e41c ["COPY", "tmp:0:8", ["const:98:8"]]
+ 00b0e41c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00b0e41c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00b0e41c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-8e0cac4126c42abaf38ab438ecfa87f2"></a>

### [`00b0d444`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b0d/00b0d444.md) → [`00b0e438`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b0e/00b0e438.md) FUN_00b0e438

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
      "definition_site": "00b0e43c",
      "incomplete_value": false,
      "site": "00b0e440",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c90000:8"
          ],
          [
            "leaf",
            "const:98:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b0d448",
      "incomplete_value": false,
      "site": "00b0d44c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c8f000:8"
          ],
          [
            "leaf",
            "const:c8:8"
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
      "00b0e440",
      "DATA",
      [
        "storage",
        "00c8f0c8",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00b0e440",
      "DATA",
      [
        "storage",
        "00c90098",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b0d444 ["COPY", "register:4040:8", ["const:c8f000:8"]]
+ 00b0e438 ["COPY", "register:4040:8", ["const:c90000:8"]]
- 00b0d448 ["COPY", "tmp:0:8", ["const:c8:8"]]
- 00b0d448 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00b0d448 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00b0d448 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00b0e43c ["COPY", "tmp:0:8", ["const:98:8"]]
+ 00b0e43c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00b0e43c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00b0e43c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-5f1575ded44e39da6754b782840e444c"></a>

### [`00b0d8e0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b0d/00b0d8e0.md) → [`00b0e8d4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b0e/00b0e8d4.md) FUN_00b0e8d4

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 85.71% / 新版 85.71%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "00b0e8f4",
      "incomplete_value": false,
      "site": "00b0e8f8",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c90000:8"
          ],
          [
            "leaf",
            "const:118:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b0d900",
      "incomplete_value": false,
      "site": "00b0d904",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c8f000:8"
          ],
          [
            "leaf",
            "const:148:8"
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
      "00b0e8f8",
      "DATA",
      [
        "storage",
        "00c8f148",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00b0e8f8",
      "DATA",
      [
        "storage",
        "00c90118",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b0d8f4 ["INT_ADD", "register:40f0:8", ["const:b0d8f4:8", "const:4:8"]]
- 00b0d8f4 ["CALL", null, ["callee:00c58f30:8"]]
+ 00b0e8e8 ["INT_ADD", "register:40f0:8", ["const:b0e8e8:8", "const:4:8"]]
+ 00b0e8e8 ["CALL", null, ["callee:00c58f30:8"]]
- 00b0d8fc ["COPY", "register:4040:8", ["const:c8f000:8"]]
+ 00b0e8f0 ["COPY", "register:4040:8", ["const:c90000:8"]]
- 00b0d900 ["COPY", "tmp:0:8", ["const:148:8"]]
- 00b0d900 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00b0d900 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00b0d900 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00b0e8f4 ["COPY", "tmp:0:8", ["const:118:8"]]
+ 00b0e8f4 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00b0e8f4 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00b0e8f4 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-04e134c62ccc76cb6d49e63d8f43f513"></a>

### [`00b0d918`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b0d/00b0d918.md) → [`00b0e90c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b0e/00b0e90c.md) FUN_00b0e90c

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
      "definition_site": "00b0e910",
      "incomplete_value": false,
      "site": "00b0e914",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c90000:8"
          ],
          [
            "leaf",
            "const:118:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b0d91c",
      "incomplete_value": false,
      "site": "00b0d920",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c8f000:8"
          ],
          [
            "leaf",
            "const:148:8"
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
      "00b0e914",
      "DATA",
      [
        "storage",
        "00c8f148",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00b0e914",
      "DATA",
      [
        "storage",
        "00c90118",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b0d918 ["COPY", "register:4040:8", ["const:c8f000:8"]]
+ 00b0e90c ["COPY", "register:4040:8", ["const:c90000:8"]]
- 00b0d91c ["COPY", "tmp:0:8", ["const:148:8"]]
- 00b0d91c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00b0d91c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00b0d91c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00b0e910 ["COPY", "tmp:0:8", ["const:118:8"]]
+ 00b0e910 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00b0e910 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00b0e910 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-88a2861def95ce66fcff3647d001c8ca"></a>

### [`00b0d938`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b0d/00b0d938.md) → [`00b0e92c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b0e/00b0e92c.md) FUN_00b0e92c

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 4件 [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md) [`0047ce14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047ce14.md) [`00b0b420`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b0b/00b0b420.md) [`00b0bd9c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b0b/00b0bd9c.md)
- 新版 呼出元 0件  · 呼出先 4件 [`0047b054`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047b/0047b054.md) [`0047d134`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047d/0047d134.md) [`00b0c414`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b0c/00b0c414.md) [`00b0cd90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b0c/00b0cd90.md)

変更の種類 call, call_target, constant, operands_and_dependencies

命令の説明率　旧版 95.65% / 新版 95.65%

優先判定に残った影響 `call_target` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_target",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "00b0e954",
      "value": [
        "leaf",
        "ram:47b054:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "00b0d960",
      "value": [
        "leaf",
        "ram:47ad34:8"
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
      "site": "00b0e960",
      "value": [
        "leaf",
        "ram:47b054:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "00b0d96c",
      "value": [
        "leaf",
        "ram:47ad34:8"
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
      "00b0e954",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ],
    [
      "00b0e960",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ]
  ],
  "added": [
    [
      "00b0e954",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047b054"
      ]
    ],
    [
      "00b0e960",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047b054"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b0d960 ["INT_ADD", "register:40f0:8", ["const:b0d960:8", "const:4:8"]]
- 00b0d960 ["CALL", null, ["ram:47ad34:8"]]
+ 00b0e954 ["INT_ADD", "register:40f0:8", ["const:b0e954:8", "const:4:8"]]
+ 00b0e954 ["CALL", null, ["ram:47b054:8"]]
- 00b0d96c ["INT_ADD", "register:40f0:8", ["const:b0d96c:8", "const:4:8"]]
- 00b0d96c ["CALL", null, ["ram:47ad34:8"]]
+ 00b0e960 ["INT_ADD", "register:40f0:8", ["const:b0e960:8", "const:4:8"]]
+ 00b0e960 ["CALL", null, ["ram:47b054:8"]]
- 00b0d9a0 ["INT_ADD", "register:40f0:8", ["const:b0d9a0:8", "const:4:8"]]
- 00b0d9a0 ["CALL", null, ["callee:00b0c414:8"]]
+ 00b0e994 ["INT_ADD", "register:40f0:8", ["const:b0e994:8", "const:4:8"]]
+ 00b0e994 ["CALL", null, ["callee:00b0c414:8"]]
~~~


<a id="compare-4fa2161941e7cd9040ab1d31a0b00edc"></a>

### [`00b0da1c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b0d/00b0da1c.md) → [`00b0ea10`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b0e/00b0ea10.md) FUN_00b0ea10

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 85.71% / 新版 85.71%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "00b0ea30",
      "incomplete_value": false,
      "site": "00b0ea34",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c90000:8"
          ],
          [
            "leaf",
            "const:198:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b0da3c",
      "incomplete_value": false,
      "site": "00b0da40",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c8f000:8"
          ],
          [
            "leaf",
            "const:1c8:8"
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
      "00b0ea34",
      "DATA",
      [
        "storage",
        "00c8f1c8",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00b0ea34",
      "DATA",
      [
        "storage",
        "00c90198",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b0da30 ["INT_ADD", "register:40f0:8", ["const:b0da30:8", "const:4:8"]]
- 00b0da30 ["CALL", null, ["callee:00c58f30:8"]]
+ 00b0ea24 ["INT_ADD", "register:40f0:8", ["const:b0ea24:8", "const:4:8"]]
+ 00b0ea24 ["CALL", null, ["callee:00c58f30:8"]]
- 00b0da38 ["COPY", "register:4040:8", ["const:c8f000:8"]]
+ 00b0ea2c ["COPY", "register:4040:8", ["const:c90000:8"]]
- 00b0da3c ["COPY", "tmp:0:8", ["const:1c8:8"]]
- 00b0da3c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00b0da3c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00b0da3c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00b0ea30 ["COPY", "tmp:0:8", ["const:198:8"]]
+ 00b0ea30 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00b0ea30 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00b0ea30 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-ea846d615e5fae4fbfe4b64e31975c7e"></a>

### [`00b0da54`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b0d/00b0da54.md) → [`00b0ea48`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b0e/00b0ea48.md) FUN_00b0ea48

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
      "definition_site": "00b0ea4c",
      "incomplete_value": false,
      "site": "00b0ea50",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c90000:8"
          ],
          [
            "leaf",
            "const:198:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b0da58",
      "incomplete_value": false,
      "site": "00b0da5c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c8f000:8"
          ],
          [
            "leaf",
            "const:1c8:8"
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
      "00b0ea50",
      "DATA",
      [
        "storage",
        "00c8f1c8",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00b0ea50",
      "DATA",
      [
        "storage",
        "00c90198",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b0da54 ["COPY", "register:4040:8", ["const:c8f000:8"]]
+ 00b0ea48 ["COPY", "register:4040:8", ["const:c90000:8"]]
- 00b0da58 ["COPY", "tmp:0:8", ["const:1c8:8"]]
- 00b0da58 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00b0da58 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00b0da58 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00b0ea4c ["COPY", "tmp:0:8", ["const:198:8"]]
+ 00b0ea4c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00b0ea4c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00b0ea4c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-c097b466fd9b1fe8af5cf5ae5193bdef"></a>

### [`00b0da74`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b0d/00b0da74.md) → [`00b0ea68`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b0e/00b0ea68.md) FUN_00b0ea68

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 4件 [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md) [`0047ce14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047ce14.md) [`00b0b420`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b0b/00b0b420.md) [`00b0bd9c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b0b/00b0bd9c.md)
- 新版 呼出元 0件  · 呼出先 4件 [`0047b054`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047b/0047b054.md) [`0047d134`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047d/0047d134.md) [`00b0c414`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b0c/00b0c414.md) [`00b0cd90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b0c/00b0cd90.md)

変更の種類 call, call_target, constant, operands_and_dependencies

命令の説明率　旧版 95.00% / 新版 95.00%

優先判定に残った影響 `call_target` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_target",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "00b0ea90",
      "value": [
        "leaf",
        "ram:47b054:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "00b0da9c",
      "value": [
        "leaf",
        "ram:47ad34:8"
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
      "site": "00b0ea9c",
      "value": [
        "leaf",
        "ram:47b054:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "00b0daa8",
      "value": [
        "leaf",
        "ram:47ad34:8"
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
      "00b0ea90",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ],
    [
      "00b0ea9c",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ]
  ],
  "added": [
    [
      "00b0ea90",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047b054"
      ]
    ],
    [
      "00b0ea9c",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047b054"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b0da9c ["INT_ADD", "register:40f0:8", ["const:b0da9c:8", "const:4:8"]]
- 00b0da9c ["CALL", null, ["ram:47ad34:8"]]
+ 00b0ea90 ["INT_ADD", "register:40f0:8", ["const:b0ea90:8", "const:4:8"]]
+ 00b0ea90 ["CALL", null, ["ram:47b054:8"]]
- 00b0daa8 ["INT_ADD", "register:40f0:8", ["const:b0daa8:8", "const:4:8"]]
- 00b0daa8 ["CALL", null, ["ram:47ad34:8"]]
+ 00b0ea9c ["INT_ADD", "register:40f0:8", ["const:b0ea9c:8", "const:4:8"]]
+ 00b0ea9c ["CALL", null, ["ram:47b054:8"]]
- 00b0dae0 ["INT_ADD", "register:40f0:8", ["const:b0dae0:8", "const:4:8"]]
- 00b0dae0 ["CALL", null, ["callee:00b0c414:8"]]
+ 00b0ead4 ["INT_ADD", "register:40f0:8", ["const:b0ead4:8", "const:4:8"]]
+ 00b0ead4 ["CALL", null, ["callee:00b0c414:8"]]
~~~


<a id="compare-73b5a9dbc863c0fd824eb41133c2290a"></a>

### [`00b0dc10`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b0d/00b0dc10.md) → [`00b0ec04`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b0e/00b0ec04.md) _INIT_254

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 5件 [`0043aeb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043a/0043aeb0.md) [`0043b838`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b838.md) [`00c57f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f00.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)
- 新版 呼出元 0件  · 呼出先 5件 [`0043b1d0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043b1d0.md) [`0043bb58`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bb58.md) [`00c58ed0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58ed0.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies, operation_sequence, store_destination, store_value

命令の説明率　旧版 82.49% / 新版 82.49%

優先判定に残った影響 `call_argument_candidate` 5件, `store_destination` 3件, `store_value` 8件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00b0ec40",
      "incomplete_value": true,
      "site": "00b0ec5c",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:35:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b0dc4c",
      "incomplete_value": true,
      "site": "00b0dc68",
      "value": [
        "LOAD",
        "16",
        [
          [
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
    "ordinal": 9,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00b0ec64",
      "incomplete_value": true,
      "site": "00b0ec80",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:48:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b0dc70",
      "incomplete_value": true,
      "site": "00b0dc8c",
      "value": [
        "LOAD",
        "16",
        [
          [
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
    "ordinal": 12,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00b0ec84",
      "incomplete_value": true,
      "site": "00b0eca0",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:e3d:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b0dc90",
      "incomplete_value": true,
      "site": "00b0dcac",
      "value": [
        "LOAD",
        "16",
        [
          [
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
      "00b0ec40",
      "READ",
      [
        "storage",
        "002b7f66",
        null,
        "string"
      ]
    ],
    [
      "00b0ec64",
      "READ",
      [
        "storage",
        "002b7f79",
        null,
        "string"
      ]
    ],
    [
      "00b0ec84",
      "READ",
      [
        "storage",
        "002b8d6e",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "00b0ec40",
      "READ",
      [
        "storage",
        "002b8035",
        null,
        "string"
      ]
    ],
    [
      "00b0ec64",
      "READ",
      [
        "storage",
        "002b8048",
        null,
        "string"
      ]
    ],
    [
      "00b0ec84",
      "READ",
      [
        "storage",
        "002b8e3d",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b0dd70 ["INT_ADD", "register:40f0:8", ["const:b0dd70:8", "const:4:8"]]
- 00b0dd70 ["CALL", null, ["callee:0043bb58:8"]]
+ 00b0ed64 ["INT_ADD", "register:40f0:8", ["const:b0ed64:8", "const:4:8"]]
+ 00b0ed64 ["CALL", null, ["callee:0043bb58:8"]]
- 00b0de44 ["INT_ADD", "register:40f0:8", ["const:b0de44:8", "const:4:8"]]
- 00b0de44 ["CALL", null, ["callee:00c58ed0:8"]]
+ 00b0ee38 ["INT_ADD", "register:40f0:8", ["const:b0ee38:8", "const:4:8"]]
+ 00b0ee38 ["CALL", null, ["callee:00c58ed0:8"]]
- 00b0dc38 ["COPY", "register:4098:8", ["const:1124000:8"]]
+ 00b0ec2c ["COPY", "register:4098:8", ["const:1125000:8"]]
~~~


<a id="compare-ffb51886d5df638e7c7c95a353020373"></a>

### [`00b0dfa0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b0d/00b0dfa0.md) → [`00b0ef94`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b0e/00b0ef94.md) FUN_00b0ef94

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 3件 [`00798ef8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00798/00798ef8.md) [`007a07dc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007a0/007a07dc.md) [`00b0dfa0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b0d/00b0dfa0.md) · 呼出先 16件 [`0043bb60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bb60.md) [`0048ce94`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048c/0048ce94.md) [`00492e48`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00492/00492e48.md) [`005da5c4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005da/005da5c4.md) [`00684ff0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00684/00684ff0.md)
- 新版 呼出元 3件 [`007992d4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00799/007992d4.md) [`007a0bb8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007a0/007a0bb8.md) [`00b0ef94`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b0e/00b0ef94.md) · 呼出先 16件 [`0043be80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043be80.md) [`0048d1b4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0048d/0048d1b4.md) [`00493168`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00493/00493168.md) [`005da974`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005da/005da974.md) [`006853a0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00685/006853a0.md)

変更の種類 branch_condition_or_target, constant, control_flow, local_def_use, operands_and_dependencies, operation_sequence, store_value, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 86.75% / 新版 86.75%

優先判定に残った影響 `store_value` 4件, `unresolved_branch_alignment` 1件, `unresolved_call_alignment` 2件, `unresolved_store_alignment` 7件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00b0f128",
      "incomplete_value": true,
      "site": "00b0f13c",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:e1c:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b0e134",
      "incomplete_value": true,
      "site": "00b0e148",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:d3e:8"
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
      "definition_site": "00b0f204",
      "incomplete_value": true,
      "site": "00b0f214",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:75f:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b0e210",
      "incomplete_value": true,
      "site": "00b0e220",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:694:8"
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
      "definition_site": "00b0f208",
      "incomplete_value": true,
      "site": "00b0f218",
      "value": [
        "LOAD",
        "16",
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
      "definition_site": "00b0e214",
      "incomplete_value": true,
      "site": "00b0e224",
      "value": [
        "LOAD",
        "16",
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
      "00b0f0f4",
      "PARAM",
      [
        "storage",
        "002beafa",
        null,
        null
      ]
    ],
    [
      "00b0f128",
      "READ",
      [
        "storage",
        "002bdd3e",
        null,
        "string"
      ]
    ],
    [
      "00b0f1a8",
      "PARAM",
      [
        "storage",
        "002acac9",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "00b0f0f4",
      "PARAM",
      [
        "storage",
        "002bebd8",
        null,
        null
      ]
    ],
    [
      "00b0f128",
      "READ",
      [
        "storage",
        "002bde1c",
        null,
        "string"
      ]
    ],
    [
      "00b0f1a8",
      "PARAM",
      [
        "storage",
        "002acb96",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b0e004 ["INT_ADD", "register:40f0:8", ["const:b0e004:8", "const:4:8"]]
- 00b0e004 ["CALL", null, ["callee:0073807c:8"]]
+ 00b0eff8 ["INT_ADD", "register:40f0:8", ["const:b0eff8:8", "const:4:8"]]
+ 00b0eff8 ["CALL", null, ["callee:0073807c:8"]]
- 00b0e024 ["COPY", "tmp:0:8", ["const:afa:8"]]
- 00b0e024 ["INT_CARRY", "register:105:1", ["register:4050:8", "tmp:0:8"]]
- 00b0e024 ["INT_SCARRY", "register:106:1", ["register:4050:8", "tmp:0:8"]]
- 00b0e024 ["INT_ADD", "tmp:1:8", ["register:4050:8", "tmp:0:8"]]
+ 00b0f018 ["COPY", "tmp:0:8", ["const:bd8:8"]]
+ 00b0f018 ["INT_CARRY", "register:105:1", ["register:4050:8", "tmp:0:8"]]
+ 00b0f018 ["INT_SCARRY", "register:106:1", ["register:4050:8", "tmp:0:8"]]
+ 00b0f018 ["INT_ADD", "tmp:1:8", ["register:4050:8", "tmp:0:8"]]
- 00b0e034 ["COPY", "tmp:0:8", ["const:76a:8"]]
- 00b0e034 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 00b0e034 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 00b0e034 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 00b0f028 ["COPY", "tmp:0:8", ["const:848:8"]]
+ 00b0f028 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 00b0f028 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 00b0f028 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
~~~


<a id="compare-187a290daa167b4a5e84df4fde451528"></a>

### [`00b0e640`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b0e/00b0e640.md) → [`00b0f634`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b0f/00b0f634.md) _INIT_255

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 5件 [`0043aeb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043a/0043aeb0.md) [`0043b838`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b838.md) [`00c57f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f00.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)
- 新版 呼出元 0件  · 呼出先 5件 [`0043b1d0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043b1d0.md) [`0043bb58`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bb58.md) [`00c58ed0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58ed0.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies, operation_sequence, store_destination, store_value

命令の説明率　旧版 82.49% / 新版 82.49%

優先判定に残った影響 `call_argument_candidate` 5件, `store_destination` 3件, `store_value` 8件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00b0f670",
      "incomplete_value": true,
      "site": "00b0f68c",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:35:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b0e67c",
      "incomplete_value": true,
      "site": "00b0e698",
      "value": [
        "LOAD",
        "16",
        [
          [
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
    "ordinal": 9,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00b0f694",
      "incomplete_value": true,
      "site": "00b0f6b0",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:48:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b0e6a0",
      "incomplete_value": true,
      "site": "00b0e6bc",
      "value": [
        "LOAD",
        "16",
        [
          [
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
    "ordinal": 12,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00b0f6b4",
      "incomplete_value": true,
      "site": "00b0f6d0",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:e3d:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b0e6c0",
      "incomplete_value": true,
      "site": "00b0e6dc",
      "value": [
        "LOAD",
        "16",
        [
          [
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
      "00b0f670",
      "READ",
      [
        "storage",
        "002b7f66",
        null,
        "string"
      ]
    ],
    [
      "00b0f694",
      "READ",
      [
        "storage",
        "002b7f79",
        null,
        "string"
      ]
    ],
    [
      "00b0f6b4",
      "READ",
      [
        "storage",
        "002b8d6e",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "00b0f670",
      "READ",
      [
        "storage",
        "002b8035",
        null,
        "string"
      ]
    ],
    [
      "00b0f694",
      "READ",
      [
        "storage",
        "002b8048",
        null,
        "string"
      ]
    ],
    [
      "00b0f6b4",
      "READ",
      [
        "storage",
        "002b8e3d",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b0e7a0 ["INT_ADD", "register:40f0:8", ["const:b0e7a0:8", "const:4:8"]]
- 00b0e7a0 ["CALL", null, ["callee:0043bb58:8"]]
+ 00b0f794 ["INT_ADD", "register:40f0:8", ["const:b0f794:8", "const:4:8"]]
+ 00b0f794 ["CALL", null, ["callee:0043bb58:8"]]
- 00b0e874 ["INT_ADD", "register:40f0:8", ["const:b0e874:8", "const:4:8"]]
- 00b0e874 ["CALL", null, ["callee:00c58ed0:8"]]
+ 00b0f868 ["INT_ADD", "register:40f0:8", ["const:b0f868:8", "const:4:8"]]
+ 00b0f868 ["CALL", null, ["callee:00c58ed0:8"]]
- 00b0e668 ["COPY", "register:4098:8", ["const:1124000:8"]]
+ 00b0f65c ["COPY", "register:4098:8", ["const:1125000:8"]]
~~~


<a id="compare-01e60046beeef608c4079deff06aeca5"></a>

### [`00b0e9d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b0e/00b0e9d0.md) → [`00b0f9c4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b0f/00b0f9c4.md) FUN_00b0f9c4

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 4件 [`00798ef8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00798/00798ef8.md) [`007acb24`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007ac/007acb24.md) [`007ad15c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007ad/007ad15c.md) [`00b0eb18`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b0e/00b0eb18.md) · 呼出先 7件 [`0048cd38`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048c/0048cd38.md) [`00492d0c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00492/00492d0c.md) [`009a773c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009a7/009a773c.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 4件 [`007992d4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00799/007992d4.md) [`007acf48`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007ac/007acf48.md) [`007ad580`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007ad/007ad580.md) [`00b0fb0c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b0f/00b0fb0c.md) · 呼出先 7件 [`0048d058`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0048d/0048d058.md) [`0049302c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00493/0049302c.md) [`009a86e8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009a8/009a86e8.md) [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 call, call_argument_candidate, call_target, constant, operands_and_dependencies, operation_sequence, store_value

命令の説明率　旧版 84.13% / 新版 84.13%

優先判定に残った影響 `call_argument_candidate` 1件, `call_target` 1件, `store_value` 4件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00b0fa08",
      "incomplete_value": true,
      "site": "00b0fa14",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:e90:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b0ea14",
      "incomplete_value": true,
      "site": "00b0ea20",
      "value": [
        "LOAD",
        "16",
        [
          [
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
    "ordinal": 8,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00b0fa04",
      "incomplete_value": true,
      "site": "00b0fa18",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:449:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b0ea10",
      "incomplete_value": true,
      "site": "00b0ea24",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:372:8"
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
      "definition_site": "00b0fa04",
      "incomplete_value": true,
      "site": "00b0fa18",
      "value": [
        "LOAD",
        "16",
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
      "definition_site": "00b0ea10",
      "incomplete_value": true,
      "site": "00b0ea24",
      "value": [
        "LOAD",
        "16",
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
      "00b0fa04",
      "READ",
      [
        "storage",
        "002b0372",
        null,
        "string"
      ]
    ],
    [
      "00b0fa04",
      "READ",
      [
        "storage",
        "002b0382",
        null,
        "string"
      ]
    ],
    [
      "00b0fa08",
      "READ",
      [
        "storage",
        "002c2e40",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "00b0fa04",
      "READ",
      [
        "storage",
        "002b0449",
        null,
        "string"
      ]
    ],
    [
      "00b0fa04",
      "READ",
      [
        "storage",
        "002b0459",
        null,
        "string"
      ]
    ],
    [
      "00b0fa08",
      "READ",
      [
        "storage",
        "002c2e90",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 00b0ea40 ["INT_ADD", "register:40f0:8", ["const:b0ea40:8", "const:4:8"]]
- 00b0ea40 ["CALL", null, ["callee:00c59230:8"]]
+ 00b0fa34 ["INT_ADD", "register:40f0:8", ["const:b0fa34:8", "const:4:8"]]
+ 00b0fa34 ["CALL", null, ["callee:00c59230:8"]]
- 00b0ea78 ["INT_ADD", "register:40f0:8", ["const:b0ea78:8", "const:4:8"]]
- 00b0ea78 ["CALL", null, ["ram:48cd38:8"]]
+ 00b0fa6c ["INT_ADD", "register:40f0:8", ["const:b0fa6c:8", "const:4:8"]]
+ 00b0fa6c ["CALL", null, ["ram:48d058:8"]]
- 00b0ea00 ["INT_ADD", "register:40f0:8", ["const:b0ea00:8", "const:4:8"]]
- 00b0ea00 ["CALL", null, ["callee:00c58f30:8"]]
+ 00b0f9f4 ["INT_ADD", "register:40f0:8", ["const:b0f9f4:8", "const:4:8"]]
+ 00b0f9f4 ["CALL", null, ["callee:00c58f30:8"]]
~~~


<a id="compare-2911320498eddae2d84463b8484063bb"></a>

### [`00b0eb18`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b0e/00b0eb18.md) → [`00b0fb0c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b0f/00b0fb0c.md) FUN_00b0fb0c

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`0079826c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00798/0079826c.md) · 呼出先 15件 [`0043bb60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bb60.md) [`00451a18`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00451/00451a18.md) [`00459430`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00459/00459430.md) [`005971dc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00597/005971dc.md) [`00597544`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00597/00597544.md)
- 新版 呼出元 1件 [`00798648`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00798/00798648.md) · 呼出先 15件 [`0043be80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043be80.md) [`00451d38`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00451/00451d38.md) [`00459750`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00459/00459750.md) [`005974fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00597/005974fc.md) [`00597864`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00597/00597864.md)

変更の種類 constant, operands_and_dependencies, store_destination, store_value

命令の説明率　旧版 88.89% / 新版 88.89%

優先判定に残った影響 `store_destination` 1件, `store_value` 6件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "00b0fb50",
      "incomplete_value": false,
      "site": "00b0fb5c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c6e000:8"
          ],
          [
            "leaf",
            "const:718:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b0eb5c",
      "incomplete_value": false,
      "site": "00b0eb68",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c6d000:8"
          ],
          [
            "leaf",
            "const:748:8"
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
      "definition_site": "00b0fc0c",
      "incomplete_value": true,
      "site": "00b0fc10",
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
            "const:40:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b0ec18",
      "incomplete_value": true,
      "site": "00b0ec1c",
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
            "const:40:8"
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
      "definition_site": "00b0fc08",
      "incomplete_value": true,
      "site": "00b0fc14",
      "value": [
        "LOAD",
        "8",
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
                "const:8:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b0ec14",
      "incomplete_value": true,
      "site": "00b0ec20",
      "value": [
        "LOAD",
        "8",
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
                "const:8:8"
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
      "00b0fb5c",
      "DATA",
      [
        "storage",
        "00c6d748",
        null,
        "pointer"
      ]
    ],
    [
      "00b0fb98",
      "DATA",
      [
        "storage",
        "00c63830",
        null,
        "pointer"
      ]
    ],
    [
      "00b0fbe4",
      "READ",
      [
        "storage",
        "00c63838",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00b0fb5c",
      "DATA",
      [
        "storage",
        "00c6e718",
        null,
        "pointer"
      ]
    ],
    [
      "00b0fb98",
      "DATA",
      [
        "storage",
        "00c64800",
        null,
        "pointer"
      ]
    ],
    [
      "00b0fbe4",
      "READ",
      [
        "storage",
        "00c64808",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b0eb48 ["INT_ADD", "register:40f0:8", ["const:b0eb48:8", "const:4:8"]]
- 00b0eb48 ["CALL", null, ["callee:00c58f30:8"]]
+ 00b0fb3c ["INT_ADD", "register:40f0:8", ["const:b0fb3c:8", "const:4:8"]]
+ 00b0fb3c ["CALL", null, ["callee:00c58f30:8"]]
- 00b0eb58 ["COPY", "register:4048:8", ["const:c6d000:8"]]
+ 00b0fb4c ["COPY", "register:4048:8", ["const:c6e000:8"]]
- 00b0eb5c ["COPY", "tmp:0:8", ["const:748:8"]]
- 00b0eb5c ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 00b0eb5c ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 00b0eb5c ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 00b0fb50 ["COPY", "tmp:0:8", ["const:718:8"]]
+ 00b0fb50 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 00b0fb50 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 00b0fb50 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
~~~


<a id="compare-568fb6a28aca70393b4525ae2c1dfe31"></a>

### [`00b0f118`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b0f/00b0f118.md) → [`00b1010c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b10/00b1010c.md) _INIT_256

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 5件 [`0043aeb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043a/0043aeb0.md) [`0043b838`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b838.md) [`00c57f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f00.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)
- 新版 呼出元 0件  · 呼出先 5件 [`0043b1d0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043b1d0.md) [`0043bb58`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bb58.md) [`00c58ed0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58ed0.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies, operation_sequence, store_destination, store_value

命令の説明率　旧版 82.49% / 新版 82.49%

優先判定に残った影響 `call_argument_candidate` 5件, `store_destination` 3件, `store_value` 8件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00b10148",
      "incomplete_value": true,
      "site": "00b10164",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:35:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b0f154",
      "incomplete_value": true,
      "site": "00b0f170",
      "value": [
        "LOAD",
        "16",
        [
          [
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
    "ordinal": 9,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00b1016c",
      "incomplete_value": true,
      "site": "00b10188",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:48:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b0f178",
      "incomplete_value": true,
      "site": "00b0f194",
      "value": [
        "LOAD",
        "16",
        [
          [
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
    "ordinal": 12,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00b1018c",
      "incomplete_value": true,
      "site": "00b101a8",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:e3d:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b0f198",
      "incomplete_value": true,
      "site": "00b0f1b4",
      "value": [
        "LOAD",
        "16",
        [
          [
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
      "00b10148",
      "READ",
      [
        "storage",
        "002b7f66",
        null,
        "string"
      ]
    ],
    [
      "00b1016c",
      "READ",
      [
        "storage",
        "002b7f79",
        null,
        "string"
      ]
    ],
    [
      "00b1018c",
      "READ",
      [
        "storage",
        "002b8d6e",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "00b10148",
      "READ",
      [
        "storage",
        "002b8035",
        null,
        "string"
      ]
    ],
    [
      "00b1016c",
      "READ",
      [
        "storage",
        "002b8048",
        null,
        "string"
      ]
    ],
    [
      "00b1018c",
      "READ",
      [
        "storage",
        "002b8e3d",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b0f278 ["INT_ADD", "register:40f0:8", ["const:b0f278:8", "const:4:8"]]
- 00b0f278 ["CALL", null, ["callee:0043bb58:8"]]
+ 00b1026c ["INT_ADD", "register:40f0:8", ["const:b1026c:8", "const:4:8"]]
+ 00b1026c ["CALL", null, ["callee:0043bb58:8"]]
- 00b0f34c ["INT_ADD", "register:40f0:8", ["const:b0f34c:8", "const:4:8"]]
- 00b0f34c ["CALL", null, ["callee:00c58ed0:8"]]
+ 00b10340 ["INT_ADD", "register:40f0:8", ["const:b10340:8", "const:4:8"]]
+ 00b10340 ["CALL", null, ["callee:00c58ed0:8"]]
- 00b0f140 ["COPY", "register:4098:8", ["const:1124000:8"]]
+ 00b10134 ["COPY", "register:4098:8", ["const:1125000:8"]]
~~~


<a id="compare-7eb9dbfc981f2c59fb212277c4c62dff"></a>

### [`00b0f690`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b0f/00b0f690.md) → [`00b10684`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b10/00b10684.md) FUN_00b10684

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`00b1f4c4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b1f/00b1f4c4.md) · 呼出先 13件 [`0043bbe4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bbe4.md) [`0048795c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00487/0048795c.md) [`0048797c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00487/0048797c.md) [`00487e60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00487/00487e60.md) [`00488698`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00488/00488698.md)
- 新版 呼出元 1件 [`00b204b8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b20/00b204b8.md) · 呼出先 13件 [`0043bf04`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bf04.md) [`00487c7c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00487/00487c7c.md) [`00487c9c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00487/00487c9c.md) [`00488180`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00488/00488180.md) [`004889b8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00488/004889b8.md)

変更の種類 constant, operands_and_dependencies, store_destination, store_value

命令の説明率　旧版 90.73% / 新版 90.73%

優先判定に残った影響 `store_destination` 1件, `store_value` 5件

アドレスに依存する影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "00b106bc",
      "incomplete_value": false,
      "site": "00b106c4",
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
            "const:dd8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b0f6c8",
      "incomplete_value": false,
      "site": "00b0f6d0",
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
    "ordinal": 11,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00b106d8",
      "incomplete_value": true,
      "site": "00b106e4",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:8f6:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b0f6e4",
      "incomplete_value": true,
      "site": "00b0f6f0",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:818:8"
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
      "definition_site": "00b1083c",
      "incomplete_value": true,
      "site": "00b10840",
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
      "definition_site": "00b0f848",
      "incomplete_value": true,
      "site": "00b0f84c",
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
    "ordinal": 33,
    "slot": 2
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "00b106c4",
      "DATA",
      [
        "storage",
        "00c64e08",
        null,
        "undefined *"
      ]
    ],
    [
      "00b106d8",
      "READ",
      [
        "storage",
        "002b9818",
        null,
        "string"
      ]
    ],
    [
      "00b1082c",
      "READ",
      [
        "storage",
        "00c9ac80",
        null,
        "pointer"
      ]
    ]
  ],
  "added": [
    [
      "00b106c4",
      "DATA",
      [
        "storage",
        "00c65dd8",
        null,
        "undefined *"
      ]
    ],
    [
      "00b106d8",
      "READ",
      [
        "storage",
        "002b98f6",
        null,
        "string"
      ]
    ],
    [
      "00b1082c",
      "READ",
      [
        "storage",
        "00c9bc50",
        null,
        "pointer"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b0f6c0 ["INT_ADD", "register:40f0:8", ["const:b0f6c0:8", "const:4:8"]]
- 00b0f6c0 ["CALL", null, ["callee:00488180:8"]]
+ 00b106b4 ["INT_ADD", "register:40f0:8", ["const:b106b4:8", "const:4:8"]]
+ 00b106b4 ["CALL", null, ["callee:00488180:8"]]
- 00b0f6c4 ["COPY", "register:4040:8", ["const:c64000:8"]]
+ 00b106b8 ["COPY", "register:4040:8", ["const:c65000:8"]]
- 00b0f6c8 ["COPY", "tmp:0:8", ["const:e08:8"]]
- 00b0f6c8 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00b0f6c8 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00b0f6c8 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00b106bc ["COPY", "tmp:0:8", ["const:dd8:8"]]
+ 00b106bc ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00b106bc ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00b106bc ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-34841b73cfbc1430a6abe8ad36e53c64"></a>

### [`00b0f950`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b0f/00b0f950.md) → [`00b10944`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b10/00b10944.md) FUN_00b10944

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 2件 [`00a85304`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a85/00a85304.md) [`00b0fab4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b0f/00b0fab4.md) · 呼出先 6件 [`00442970`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00442/00442970.md) [`00b10dd0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b10/00b10dd0.md) [`00c53ffc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53ffc.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 2件 [`00a862f8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a86/00a862f8.md) [`00b10aa8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b10/00b10aa8.md) · 呼出先 6件 [`00442c90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00442/00442c90.md) [`00b11dc4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b11/00b11dc4.md) [`00c54fec`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54fec.md) [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 98.88% / 新版 98.88%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b109e4",
      "incomplete_value": false,
      "site": "00b109e8",
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
            "const:1b0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b0f9f0",
      "incomplete_value": false,
      "site": "00b0f9f4",
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
      "00b109e4",
      "PARAM",
      [
        "storage",
        "002a0170",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "00b109e4",
      "PARAM",
      [
        "storage",
        "002a01b0",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b0f9f4 ["INT_ADD", "register:40f0:8", ["const:b0f9f4:8", "const:4:8"]]
- 00b0f9f4 ["CALL", null, ["callee:00442c90:8"]]
+ 00b109e8 ["INT_ADD", "register:40f0:8", ["const:b109e8:8", "const:4:8"]]
+ 00b109e8 ["CALL", null, ["callee:00442c90:8"]]
- 00b0f9f0 ["COPY", "tmp:0:8", ["const:170:8"]]
- 00b0f9f0 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 00b0f9f0 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 00b0f9f0 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 00b109e4 ["COPY", "tmp:0:8", ["const:1b0:8"]]
+ 00b109e4 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 00b109e4 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 00b109e4 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
- 00b0fa20 ["INT_ADD", "register:40f0:8", ["const:b0fa20:8", "const:4:8"]]
- 00b0fa20 ["CALL", null, ["callee:00c58f30:8"]]
+ 00b10a14 ["INT_ADD", "register:40f0:8", ["const:b10a14:8", "const:4:8"]]
+ 00b10a14 ["CALL", null, ["callee:00c58f30:8"]]
~~~


<a id="compare-b24e202e206b057541923e250a57e362"></a>

### [`00b0fab4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b0f/00b0fab4.md) → [`00b10aa8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b10/00b10aa8.md) FUN_00b10aa8

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `bounded` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`00860a44`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00860/00860a44.md) · 呼出先 14件 [`0043bbe4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bbe4.md) [`00440f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00440/00440f00.md) [`0046d7f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046d/0046d7f0.md) [`00470880`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00470/00470880.md) [`007de654`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007de/007de654.md)
- 新版 呼出元 1件 [`008619f0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00861/008619f0.md) · 呼出先 14件 [`0043bf04`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bf04.md) [`00441220`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00441/00441220.md) [`0046db10`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0046d/0046db10.md) [`00470ba0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00470/00470ba0.md) [`007df5b8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007df/007df5b8.md)

変更の種類 branch_condition_or_target, call, call_count, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 73.38% / 新版 73.38%

優先判定に残った影響 `unresolved_branch_alignment` 53件, `unresolved_call_alignment` 16件, `unresolved_store_alignment` 64件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "00b10bc0",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "unmatched:00b0fbe4"
      ]
    ],
    [
      "unmatched:00b0fbd4",
      "UNCONDITIONAL_JUMP",
      [
        "local_branch",
        "unmatched:00b0fc04"
      ]
    ],
    [
      "unmatched:00b0fbe0",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "unmatched:00b0fc04"
      ]
    ]
  ],
  "added": [
    [
      "00b10bc0",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b10bd8"
      ]
    ],
    [
      "00b10bc8",
      "UNCONDITIONAL_JUMP",
      [
        "local_branch",
        "00b10bf8"
      ]
    ],
    [
      "00b10bd4",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b10bf8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b0fae8 ["INT_ADD", "register:40f0:8", ["const:b0fae8:8", "const:4:8"]]
- 00b0fae8 ["CALL", null, ["callee:00b10944:8"]]
+ 00b10adc ["INT_ADD", "register:40f0:8", ["const:b10adc:8", "const:4:8"]]
+ 00b10adc ["CALL", null, ["callee:00b10944:8"]]
- 00b0fb00 ["CBRANCH", null, ["local:b292:8", "register:101:1"]]
+ 00b10af4 ["CBRANCH", null, ["local:b293:8", "register:101:1"]]
- 00b0fb0c ["INT_ADD", "register:40f0:8", ["const:b0fb0c:8", "const:4:8"]]
- 00b0fb0c ["CALL", null, ["callee:008524fc:8"]]
+ 00b10b00 ["INT_ADD", "register:40f0:8", ["const:b10b00:8", "const:4:8"]]
+ 00b10b00 ["CALL", null, ["callee:008524fc:8"]]
~~~


<a id="compare-53679b4edf1f3361d26e909dfcfca198"></a>

### [`00b10dd0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b10/00b10dd0.md) → [`00b11dc4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b11/00b11dc4.md) FUN_00b11dc4

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 2件 [`00b0f4a8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b0f/00b0f4a8.md) [`00b0f950`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b0f/00b0f950.md) · 呼出先 1件 [`0043b7b8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b7b8.md)
- 新版 呼出元 2件 [`00b1049c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b10/00b1049c.md) [`00b10944`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b10/00b10944.md) · 呼出先 1件 [`0043bad8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bad8.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 80.00% / 新版 80.00%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b11dd0",
      "incomplete_value": false,
      "site": "00b11dd4",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:2b8000:8"
          ],
          [
            "leaf",
            "const:5b:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b10ddc",
      "incomplete_value": false,
      "site": "00b10de0",
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
      "00b11dd0",
      "PARAM",
      [
        "storage",
        "002b7f8c",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "00b11dd0",
      "PARAM",
      [
        "storage",
        "002b805b",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b10de0 ["INT_ADD", "register:40f0:8", ["const:b10de0:8", "const:4:8"]]
- 00b10de0 ["CALL", null, ["callee:0043bad8:8"]]
+ 00b11dd4 ["INT_ADD", "register:40f0:8", ["const:b11dd4:8", "const:4:8"]]
+ 00b11dd4 ["CALL", null, ["callee:0043bad8:8"]]
- 00b10dd8 ["COPY", "register:4000:8", ["const:2b7000:8"]]
+ 00b11dcc ["COPY", "register:4000:8", ["const:2b8000:8"]]
- 00b10ddc ["COPY", "tmp:0:8", ["const:f8c:8"]]
- 00b10ddc ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 00b10ddc ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 00b10ddc ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 00b11dd0 ["COPY", "tmp:0:8", ["const:5b:8"]]
+ 00b11dd0 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 00b11dd0 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 00b11dd0 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
~~~


<a id="compare-e4b25f8b6637dabd337ad68271a063ca"></a>

### [`00b10de4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b10/00b10de4.md) → [`00b11dd8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b11/00b11dd8.md) FUN_00b11dd8

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`00b0fab4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b0f/00b0fab4.md) · 呼出先 1件 [`00442970`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00442/00442970.md)
- 新版 呼出元 1件 [`00b10aa8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b10/00b10aa8.md) · 呼出先 1件 [`00442c90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00442/00442c90.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 80.00% / 新版 80.00%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b11de4",
      "incomplete_value": false,
      "site": "00b11de8",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:2b8000:8"
          ],
          [
            "leaf",
            "const:5b:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b10df0",
      "incomplete_value": false,
      "site": "00b10df4",
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
      "00b11de4",
      "PARAM",
      [
        "storage",
        "002b7f8c",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "00b11de4",
      "PARAM",
      [
        "storage",
        "002b805b",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b10df4 ["INT_ADD", "register:40f0:8", ["const:b10df4:8", "const:4:8"]]
- 00b10df4 ["CALL", null, ["callee:00442c90:8"]]
+ 00b11de8 ["INT_ADD", "register:40f0:8", ["const:b11de8:8", "const:4:8"]]
+ 00b11de8 ["CALL", null, ["callee:00442c90:8"]]
- 00b10dec ["COPY", "register:4000:8", ["const:2b7000:8"]]
+ 00b11de0 ["COPY", "register:4000:8", ["const:2b8000:8"]]
- 00b10df0 ["COPY", "tmp:0:8", ["const:f8c:8"]]
- 00b10df0 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 00b10df0 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 00b10df0 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 00b11de4 ["COPY", "tmp:0:8", ["const:5b:8"]]
+ 00b11de4 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 00b11de4 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 00b11de4 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
~~~


<a id="compare-5cc366c134fbf8ba3ccb97575eb1f6a4"></a>

### [`00b10df8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b10/00b10df8.md) → [`00b11dec`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b11/00b11dec.md) _INIT_257

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 5件 [`0043aeb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043a/0043aeb0.md) [`0043b838`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b838.md) [`00c57f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f00.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)
- 新版 呼出元 0件  · 呼出先 5件 [`0043b1d0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043b1d0.md) [`0043bb58`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bb58.md) [`00c58ed0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58ed0.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies, operation_sequence, store_destination, store_value

命令の説明率　旧版 82.49% / 新版 82.49%

優先判定に残った影響 `call_argument_candidate` 5件, `store_destination` 3件, `store_value` 8件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00b11e28",
      "incomplete_value": true,
      "site": "00b11e44",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:35:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b10e34",
      "incomplete_value": true,
      "site": "00b10e50",
      "value": [
        "LOAD",
        "16",
        [
          [
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
    "ordinal": 9,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00b11e4c",
      "incomplete_value": true,
      "site": "00b11e68",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:48:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b10e58",
      "incomplete_value": true,
      "site": "00b10e74",
      "value": [
        "LOAD",
        "16",
        [
          [
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
    "ordinal": 12,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00b11e6c",
      "incomplete_value": true,
      "site": "00b11e88",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:e3d:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b10e78",
      "incomplete_value": true,
      "site": "00b10e94",
      "value": [
        "LOAD",
        "16",
        [
          [
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
      "00b11e28",
      "READ",
      [
        "storage",
        "002b7f66",
        null,
        "string"
      ]
    ],
    [
      "00b11e4c",
      "READ",
      [
        "storage",
        "002b7f79",
        null,
        "string"
      ]
    ],
    [
      "00b11e6c",
      "READ",
      [
        "storage",
        "002b8d6e",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "00b11e28",
      "READ",
      [
        "storage",
        "002b8035",
        null,
        "string"
      ]
    ],
    [
      "00b11e4c",
      "READ",
      [
        "storage",
        "002b8048",
        null,
        "string"
      ]
    ],
    [
      "00b11e6c",
      "READ",
      [
        "storage",
        "002b8e3d",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b10f58 ["INT_ADD", "register:40f0:8", ["const:b10f58:8", "const:4:8"]]
- 00b10f58 ["CALL", null, ["callee:0043bb58:8"]]
+ 00b11f4c ["INT_ADD", "register:40f0:8", ["const:b11f4c:8", "const:4:8"]]
+ 00b11f4c ["CALL", null, ["callee:0043bb58:8"]]
- 00b1102c ["INT_ADD", "register:40f0:8", ["const:b1102c:8", "const:4:8"]]
- 00b1102c ["CALL", null, ["callee:00c58ed0:8"]]
+ 00b12020 ["INT_ADD", "register:40f0:8", ["const:b12020:8", "const:4:8"]]
+ 00b12020 ["CALL", null, ["callee:00c58ed0:8"]]
- 00b10e20 ["COPY", "register:4098:8", ["const:1124000:8"]]
+ 00b11e14 ["COPY", "register:4098:8", ["const:1125000:8"]]
~~~


<a id="compare-331ff366fe03a324551df2a865cb8b3b"></a>

### [`00b11188`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b11/00b11188.md) → [`00b1217c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b12/00b1217c.md) FUN_00b1217c

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 147件 [`0046d160`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046d/0046d160.md) [`0046e9b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046e/0046e9b0.md) [`0046f0f4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046f/0046f0f4.md) [`0047af50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047af50.md) [`00489204`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00489/00489204.md) · 呼出先 20件 [`0043dbe4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043d/0043dbe4.md) [`00470e94`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00470/00470e94.md) [`00471764`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00471/00471764.md) [`00471970`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00471/00471970.md) [`00481470`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00481/00481470.md)
- 新版 呼出元 147件 [`0046d480`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0046d/0046d480.md) [`0046ecd0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0046e/0046ecd0.md) [`0046f414`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0046f/0046f414.md) [`0047b270`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047b/0047b270.md) [`00489524`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00489/00489524.md) · 呼出先 20件 [`0043df04`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043d/0043df04.md) [`004711b4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00471/004711b4.md) [`00471a84`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00471/00471a84.md) [`00471c90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00471/00471c90.md) [`00481790`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00481/00481790.md)

変更の種類 call, call_target, constant, operands_and_dependencies, store_value

命令の説明率　旧版 95.53% / 新版 95.53%

優先判定に残った影響 `call_target` 4件, `store_value` 5件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00b12300",
      "incomplete_value": true,
      "site": "00b12300",
      "value": [
        "LOAD",
        "8",
        [
          [
            "leaf",
            "const:1b1:8"
          ],
          [
            "INT_ADD",
            "8",
            [
              [
                "leaf",
                "const:2a7000:8"
              ],
              [
                "leaf",
                "const:6d8:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b1130c",
      "incomplete_value": true,
      "site": "00b1130c",
      "value": [
        "LOAD",
        "8",
        [
          [
            "leaf",
            "const:1b1:8"
          ],
          [
            "INT_ADD",
            "8",
            [
              [
                "leaf",
                "const:2a7000:8"
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
    "ordinal": 23,
    "slot": 2
  },
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "00b124b0",
      "incomplete_value": false,
      "site": "00b124b4",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c90000:8"
          ],
          [
            "leaf",
            "const:218:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b114bc",
      "incomplete_value": false,
      "site": "00b114c0",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c8f000:8"
          ],
          [
            "leaf",
            "const:248:8"
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
      "definition_site": "00b124e8",
      "incomplete_value": true,
      "site": "00b124e8",
      "value": [
        "LOAD",
        "8",
        [
          [
            "leaf",
            "const:1b1:8"
          ],
          [
            "INT_ADD",
            "8",
            [
              [
                "leaf",
                "const:2a7000:8"
              ],
              [
                "leaf",
                "const:6d8:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b114f4",
      "incomplete_value": true,
      "site": "00b114f4",
      "value": [
        "LOAD",
        "8",
        [
          [
            "leaf",
            "const:1b1:8"
          ],
          [
            "INT_ADD",
            "8",
            [
              [
                "leaf",
                "const:2a7000:8"
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
      "00b121c0",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "00470e94"
      ]
    ],
    [
      "00b1225c",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "00470e94"
      ]
    ],
    [
      "00b122e0",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0048cd38"
      ]
    ]
  ],
  "added": [
    [
      "00b121c0",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "004711b4"
      ]
    ],
    [
      "00b1225c",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "004711b4"
      ]
    ],
    [
      "00b122e0",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0048d058"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b111cc ["INT_ADD", "register:40f0:8", ["const:b111cc:8", "const:4:8"]]
- 00b111cc ["CALL", null, ["ram:470e94:8"]]
+ 00b121c0 ["INT_ADD", "register:40f0:8", ["const:b121c0:8", "const:4:8"]]
+ 00b121c0 ["CALL", null, ["ram:4711b4:8"]]
- 00b11268 ["INT_ADD", "register:40f0:8", ["const:b11268:8", "const:4:8"]]
- 00b11268 ["CALL", null, ["ram:470e94:8"]]
+ 00b1225c ["INT_ADD", "register:40f0:8", ["const:b1225c:8", "const:4:8"]]
+ 00b1225c ["CALL", null, ["ram:4711b4:8"]]
- 00b112ec ["INT_ADD", "register:40f0:8", ["const:b112ec:8", "const:4:8"]]
- 00b112ec ["CALL", null, ["ram:48cd38:8"]]
+ 00b122e0 ["INT_ADD", "register:40f0:8", ["const:b122e0:8", "const:4:8"]]
+ 00b122e0 ["CALL", null, ["ram:48d058:8"]]
~~~


<a id="compare-ef92b40d45deba3cc3610fc959644867"></a>

### [`00b11924`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b11/00b11924.md) → [`00b12918`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b12/00b12918.md) _INIT_258

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 5件 [`0043aeb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043a/0043aeb0.md) [`0043b838`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b838.md) [`00c57f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f00.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)
- 新版 呼出元 0件  · 呼出先 5件 [`0043b1d0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043b1d0.md) [`0043bb58`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bb58.md) [`00c58ed0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58ed0.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies, operation_sequence, store_destination, store_value

命令の説明率　旧版 82.49% / 新版 82.49%

優先判定に残った影響 `call_argument_candidate` 5件, `store_destination` 3件, `store_value` 8件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00b12954",
      "incomplete_value": true,
      "site": "00b12970",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:35:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b11960",
      "incomplete_value": true,
      "site": "00b1197c",
      "value": [
        "LOAD",
        "16",
        [
          [
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
    "ordinal": 9,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00b12978",
      "incomplete_value": true,
      "site": "00b12994",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:48:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b11984",
      "incomplete_value": true,
      "site": "00b119a0",
      "value": [
        "LOAD",
        "16",
        [
          [
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
    "ordinal": 12,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00b12998",
      "incomplete_value": true,
      "site": "00b129b4",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:e3d:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b119a4",
      "incomplete_value": true,
      "site": "00b119c0",
      "value": [
        "LOAD",
        "16",
        [
          [
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
      "00b12954",
      "READ",
      [
        "storage",
        "002b7f66",
        null,
        "string"
      ]
    ],
    [
      "00b12978",
      "READ",
      [
        "storage",
        "002b7f79",
        null,
        "string"
      ]
    ],
    [
      "00b12998",
      "READ",
      [
        "storage",
        "002b8d6e",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "00b12954",
      "READ",
      [
        "storage",
        "002b8035",
        null,
        "string"
      ]
    ],
    [
      "00b12978",
      "READ",
      [
        "storage",
        "002b8048",
        null,
        "string"
      ]
    ],
    [
      "00b12998",
      "READ",
      [
        "storage",
        "002b8e3d",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b11a84 ["INT_ADD", "register:40f0:8", ["const:b11a84:8", "const:4:8"]]
- 00b11a84 ["CALL", null, ["callee:0043bb58:8"]]
+ 00b12a78 ["INT_ADD", "register:40f0:8", ["const:b12a78:8", "const:4:8"]]
+ 00b12a78 ["CALL", null, ["callee:0043bb58:8"]]
- 00b11b58 ["INT_ADD", "register:40f0:8", ["const:b11b58:8", "const:4:8"]]
- 00b11b58 ["CALL", null, ["callee:00c58ed0:8"]]
+ 00b12b4c ["INT_ADD", "register:40f0:8", ["const:b12b4c:8", "const:4:8"]]
+ 00b12b4c ["CALL", null, ["callee:00c58ed0:8"]]
- 00b1194c ["COPY", "register:4098:8", ["const:1124000:8"]]
+ 00b12940 ["COPY", "register:4098:8", ["const:1125000:8"]]
~~~


<a id="compare-8ae44f7282fb2400acbd78de7bb78fcf"></a>

### [`00b11d1c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b11/00b11d1c.md) → [`00b12d10`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b12/00b12d10.md) FUN_00b12d10

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`005ba7d8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005ba/005ba7d8.md) · 呼出先 7件 [`0043e98c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043e/0043e98c.md) [`0043f95c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043f/0043f95c.md) [`00470e94`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00470/00470e94.md) [`00470f74`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00470/00470f74.md) [`00a35bec`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a35/00a35bec.md)
- 新版 呼出元 1件 [`005bab88`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005ba/005bab88.md) · 呼出先 7件 [`0043ecac`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043e/0043ecac.md) [`0043fc7c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043f/0043fc7c.md) [`004711b4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00471/004711b4.md) [`00471294`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00471/00471294.md) [`00a36be0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a36/00a36be0.md)

変更の種類 call, call_target, constant, operands_and_dependencies

命令の説明率　旧版 96.92% / 新版 96.92%

優先判定に残った影響 `call_target` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_target",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "00b12d88",
      "value": [
        "leaf",
        "ram:4711b4:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "00b11d94",
      "value": [
        "leaf",
        "ram:470e94:8"
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
      "00b12d60",
      "READ",
      [
        "storage",
        "00c9b6e0",
        null,
        "pointer"
      ]
    ],
    [
      "00b12d88",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "00470e94"
      ]
    ],
    [
      "00b12d8c",
      "PARAM",
      [
        "storage",
        "011219d8",
        null,
        "undefined1"
      ]
    ]
  ],
  "added": [
    [
      "00b12d60",
      "READ",
      [
        "storage",
        "00c9c6b0",
        null,
        "pointer"
      ]
    ],
    [
      "00b12d88",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "004711b4"
      ]
    ],
    [
      "00b12d8c",
      "PARAM",
      [
        "storage",
        "01122998",
        null,
        "undefined1"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b11d94 ["INT_ADD", "register:40f0:8", ["const:b11d94:8", "const:4:8"]]
- 00b11d94 ["CALL", null, ["ram:470e94:8"]]
+ 00b12d88 ["INT_ADD", "register:40f0:8", ["const:b12d88:8", "const:4:8"]]
+ 00b12d88 ["CALL", null, ["ram:4711b4:8"]]
- 00b11d3c ["INT_ADD", "register:40f0:8", ["const:b11d3c:8", "const:4:8"]]
- 00b11d3c ["CALL", null, ["callee:00a39144:8"]]
+ 00b12d30 ["INT_ADD", "register:40f0:8", ["const:b12d30:8", "const:4:8"]]
+ 00b12d30 ["CALL", null, ["callee:00a39144:8"]]
- 00b11d40 ["INT_ADD", "register:40f0:8", ["const:b11d40:8", "const:4:8"]]
- 00b11d40 ["CALL", null, ["callee:00a36be0:8"]]
+ 00b12d34 ["INT_ADD", "register:40f0:8", ["const:b12d34:8", "const:4:8"]]
+ 00b12d34 ["CALL", null, ["callee:00a36be0:8"]]
~~~


<a id="compare-2b52e889fe7daa02044284e43542c919"></a>

### [`00b130cc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b13/00b130cc.md) → [`00b140c0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b14/00b140c0.md) FUN_00b140c0

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`00b11e20`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b11/00b11e20.md) · 呼出先 13件 [`0043bbe4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bbe4.md) [`0048796c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00487/0048796c.md) [`0048797c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00487/0048797c.md) [`00487e60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00487/00487e60.md) [`00488698`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00488/00488698.md)
- 新版 呼出元 1件 [`00b12e14`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b12/00b12e14.md) · 呼出先 13件 [`0043bf04`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bf04.md) [`00487c8c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00487/00487c8c.md) [`00487c9c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00487/00487c9c.md) [`00488180`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00488/00488180.md) [`004889b8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00488/004889b8.md)

変更の種類 comparison, comparison_count, constant, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, store_value, unresolved_store_alignment

命令の説明率　旧版 89.87% / 新版 89.87%

優先判定に残った影響 `store_value` 3件, `unresolved_store_alignment` 3件

アドレスに依存する影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "00b14100",
      "incomplete_value": false,
      "site": "00b1410c",
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
            "const:dd8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b1310c",
      "incomplete_value": false,
      "site": "00b13118",
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
    "ordinal": 13,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00b14120",
      "incomplete_value": true,
      "site": "00b14138",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:559:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b1312c",
      "incomplete_value": true,
      "site": "00b13144",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:482:8"
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
      "definition_site": "00b1413c",
      "incomplete_value": true,
      "site": "00b1413c",
      "value": [
        "LOAD",
        "8",
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
      "definition_site": "00b13148",
      "incomplete_value": true,
      "site": "00b13148",
      "value": [
        "LOAD",
        "8",
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
      "00b1410c",
      "DATA",
      [
        "storage",
        "00c64e08",
        null,
        "undefined *"
      ]
    ],
    [
      "00b14120",
      "READ",
      [
        "storage",
        "002b1482",
        null,
        "string"
      ]
    ],
    [
      "00b14128",
      "READ",
      [
        "storage",
        "002b1490",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "00b1410c",
      "DATA",
      [
        "storage",
        "00c65dd8",
        null,
        "undefined *"
      ]
    ],
    [
      "00b14120",
      "READ",
      [
        "storage",
        "002b1559",
        null,
        "string"
      ]
    ],
    [
      "00b14128",
      "READ",
      [
        "storage",
        "002b1567",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b13100 ["INT_ADD", "register:40f0:8", ["const:b13100:8", "const:4:8"]]
- 00b13100 ["CALL", null, ["callee:00488180:8"]]
+ 00b140f4 ["INT_ADD", "register:40f0:8", ["const:b140f4:8", "const:4:8"]]
+ 00b140f4 ["CALL", null, ["callee:00488180:8"]]
- 00b13108 ["COPY", "register:4040:8", ["const:c64000:8"]]
+ 00b140fc ["COPY", "register:4040:8", ["const:c65000:8"]]
- 00b1310c ["COPY", "tmp:0:8", ["const:e08:8"]]
- 00b1310c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00b1310c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00b1310c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00b14100 ["COPY", "tmp:0:8", ["const:dd8:8"]]
+ 00b14100 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00b14100 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00b14100 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-0cf0f932dbee4f37b69cf5c627f8bd8b"></a>

### [`00b1d3b8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b1d/00b1d3b8.md) → [`00b1e3ac`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b1e/00b1e3ac.md) FUN_00b1e3ac

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`00b1f4c4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b1f/00b1f4c4.md) · 呼出先 13件 [`00487aa4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00487/00487aa4.md) [`00487e60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00487/00487e60.md) [`004882ac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00488/004882ac.md) [`00488698`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00488/00488698.md) [`0048ce94`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048c/0048ce94.md)
- 新版 呼出元 1件 [`00b204b8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b20/00b204b8.md) · 呼出先 13件 [`00487dc4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00487/00487dc4.md) [`00488180`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00488/00488180.md) [`004885cc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00488/004885cc.md) [`004889b8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00488/004889b8.md) [`0048d1b4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0048d/0048d1b4.md)

変更の種類 branch_condition_or_target, call, call_argument_candidate, call_count, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, store_value, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 69.46% / 新版 69.46%

優先判定に残った影響 `call_argument_candidate` 8件, `unresolved_branch_alignment` 25件, `unresolved_call_alignment` 31件, `unresolved_store_alignment` 46件

アドレスに依存する影響 `store_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00b1eeb8",
      "incomplete_value": true,
      "site": "00b1eebc",
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
      "definition_site": "00b1dec4",
      "incomplete_value": true,
      "site": "00b1dec8",
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
    "ordinal": 103,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b1e4e0",
      "incomplete_value": true,
      "site": "00b1e4e8",
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
            "const:f0:8"
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
      "definition_site": "00b1d654",
      "incomplete_value": true,
      "site": "00b1d65c",
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
            "const:c0:8"
          ]
        ]
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
      "unmatched:00b1d3f0",
      "WRITE",
      [
        "storage",
        "Stack[-0x58]",
        null,
        null
      ]
    ],
    [
      "unmatched:00b1d3f4",
      "UNCONDITIONAL_CALL",
      [
        "mapped_function",
        "00488180"
      ]
    ],
    [
      "unmatched:00b1d404",
      "DATA",
      [
        "storage",
        "00c64e08",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00b1e3e4",
      "WRITE",
      [
        "storage",
        "Stack[-0x58]",
        null,
        null
      ]
    ],
    [
      "00b1e3e8",
      "UNCONDITIONAL_CALL",
      [
        "mapped_function",
        "00488180"
      ]
    ],
    [
      "00b1e3f8",
      "DATA",
      [
        "storage",
        "00c65dd8",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b1d4f4 ["INT_ADD", "register:40f0:8", ["const:b1d4f4:8", "const:4:8"]]
- 00b1d4f4 ["CALL", null, ["callee:00487dc4:8"]]
+ 00b1e4e8 ["INT_ADD", "register:40f0:8", ["const:b1e4e8:8", "const:4:8"]]
+ 00b1e4e8 ["CALL", null, ["callee:00487dc4:8"]]
- 00b1d65c ["INT_ADD", "register:40f0:8", ["const:b1d65c:8", "const:4:8"]]
- 00b1d65c ["CALL", null, ["callee:00493168:8"]]
+ 00b1e650 ["INT_ADD", "register:40f0:8", ["const:b1e650:8", "const:4:8"]]
+ 00b1e650 ["CALL", null, ["callee:00493168:8"]]
- 00b1d6f8 ["INT_ADD", "register:40f0:8", ["const:b1d6f8:8", "const:4:8"]]
- 00b1d6f8 ["CALL", null, ["callee:00c58f50:8"]]
+ 00b1e6ec ["INT_ADD", "register:40f0:8", ["const:b1e6ec:8", "const:4:8"]]
+ 00b1e6ec ["CALL", null, ["callee:00c58f50:8"]]
~~~


<a id="compare-35508a25cec38f6f4e768775aec21782"></a>

### [`00b1f034`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b1f/00b1f034.md) → [`00b20028`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b20/00b20028.md) FUN_00b20028

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 1件 [`005ba7d8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005ba/005ba7d8.md) · 呼出先 14件 [`0043e98c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043e/0043e98c.md) [`0043f7cc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043f/0043f7cc.md) [`0056089c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00560/0056089c.md) [`00597efc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00597/00597efc.md) [`00880d4c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00880/00880d4c.md)
- 新版 呼出元 1件 [`005bab88`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005ba/005bab88.md) · 呼出先 14件 [`0043ecac`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043e/0043ecac.md) [`0043faec`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043f/0043faec.md) [`00560bbc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00560/00560bbc.md) [`0059821c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00598/0059821c.md) [`00881cf8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00881/00881cf8.md)

変更の種類 branch_condition_or_target, call, call_argument_candidate, call_count, comparison, comparison_count, constant, control_flow, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, return_value_candidate, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 81.38% / 新版 81.38%

優先判定に残った影響 `call_argument_candidate` 3件, `return_value_candidate` 1件, `unresolved_call_alignment` 1件, `unresolved_store_alignment` 13件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b202e0",
      "incomplete_value": true,
      "site": "00b202e8",
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
    "old": null,
    "ordinal": 19,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b20368",
      "incomplete_value": true,
      "site": "00b2036c",
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
                "register:40a0:8"
              ],
              "INT_LEFT"
            ]
          ],
          [
            "leaf",
            "const:1c0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b1f374",
      "incomplete_value": true,
      "site": "00b1f378",
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
            "const:1c0:8"
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
      "definition_site": "00b20360",
      "incomplete_value": true,
      "site": "00b2036c",
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
    "old": null,
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
      "00b20078",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "unmatched:00b1f090"
      ]
    ],
    [
      "unmatched:00b1f09c",
      "READ",
      [
        "storage",
        "002aff7e",
        null,
        "string"
      ]
    ],
    [
      "unmatched:00b1f0b0",
      "WRITE",
      [
        "storage",
        "Stack[-0x7f]",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "00b20078",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b20084"
      ]
    ],
    [
      "00b20090",
      "READ",
      [
        "storage",
        "002b0055",
        null,
        "string"
      ]
    ],
    [
      "00b200a4",
      "WRITE",
      [
        "storage",
        "Stack[-0x7f]",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 00b1f2f4 ["INT_ADD", "register:40f0:8", ["const:b1f2f4:8", "const:4:8"]]
- 00b1f2f4 ["CALL", null, ["callee:00c54d90:8"]]
+ 00b202e8 ["INT_ADD", "register:40f0:8", ["const:b202e8:8", "const:4:8"]]
+ 00b202e8 ["CALL", null, ["callee:00c54d90:8"]]
- 00b1f378 ["INT_ADD", "register:40f0:8", ["const:b1f378:8", "const:4:8"]]
- 00b1f378 ["CALL", null, ["callee:00881cf8:8"]]
+ 00b2036c ["INT_ADD", "register:40f0:8", ["const:b2036c:8", "const:4:8"]]
+ 00b2036c ["CALL", null, ["callee:00881cf8:8"]]
- 00b1f05c ["INT_ADD", "register:40f0:8", ["const:b1f05c:8", "const:4:8"]]
- 00b1f05c ["CALL", null, ["callee:00a15a80:8"]]
+ 00b20050 ["INT_ADD", "register:40f0:8", ["const:b20050:8", "const:4:8"]]
+ 00b20050 ["CALL", null, ["callee:00a15a80:8"]]
~~~


<a id="compare-28eb27cb64bf4bddebaea311375cf253"></a>

### [`00b28ff0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b28/00b28ff0.md) → [`00b29fe4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b29/00b29fe4.md) FUN_00b29fe4

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 1件 [`005ba7d8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005ba/005ba7d8.md) · 呼出先 67件 [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md) [`0047af50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047af50.md) [`0048795c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00487/0048795c.md) [`0048797c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00487/0048797c.md) [`00487e60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00487/00487e60.md)
- 新版 呼出元 1件 [`005bab88`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005ba/005bab88.md) · 呼出先 67件 [`0047b054`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047b/0047b054.md) [`0047b270`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047b/0047b270.md) [`00487c7c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00487/00487c7c.md) [`00487c9c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00487/00487c9c.md) [`00488180`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00488/00488180.md)

変更の種類 branch_condition_or_target, call, call_target, constant, control_flow, local_def_use, operands_and_dependencies, operation_sequence, store_destination, store_value, unresolved_branch_alignment, unresolved_call_alignment, unresolved_return_alignment, unresolved_store_alignment

命令の説明率　旧版 92.34% / 新版 92.34%

優先判定に残った影響 `call_target` 3件, `store_destination` 1件, `store_value` 7件, `unresolved_branch_alignment` 1件, `unresolved_call_alignment` 2件, `unresolved_return_alignment` 1件, `unresolved_store_alignment` 4件

アドレスに依存する影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "00b2a01c",
      "incomplete_value": false,
      "site": "00b2a028",
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
            "const:dd8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b29028",
      "incomplete_value": false,
      "site": "00b29034",
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
    "ordinal": 11,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00b2a040",
      "incomplete_value": true,
      "site": "00b2a040",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:88d:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b2904c",
      "incomplete_value": true,
      "site": "00b2904c",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:843:8"
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
      "definition_site": "00b2a044",
      "incomplete_value": true,
      "site": "00b2a044",
      "value": [
        "LOAD",
        "8",
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
      "definition_site": "00b29050",
      "incomplete_value": true,
      "site": "00b29050",
      "value": [
        "LOAD",
        "8",
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
      "00b2a028",
      "DATA",
      [
        "storage",
        "00c64e08",
        null,
        "undefined *"
      ]
    ],
    [
      "00b2a030",
      "READ",
      [
        "storage",
        "002c0843",
        null,
        "string"
      ]
    ],
    [
      "00b2a038",
      "READ",
      [
        "storage",
        "002c0848",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "00b2a028",
      "DATA",
      [
        "storage",
        "00c65dd8",
        null,
        "undefined *"
      ]
    ],
    [
      "00b2a030",
      "READ",
      [
        "storage",
        "002c088d",
        null,
        "string"
      ]
    ],
    [
      "00b2a038",
      "READ",
      [
        "storage",
        "002c0892",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b290c8 ["INT_ADD", "register:40f0:8", ["const:b290c8:8", "const:4:8"]]
- 00b290c8 ["CALL", null, ["ram:9d906c:8"]]
+ 00b2a0bc ["INT_ADD", "register:40f0:8", ["const:b2a0bc:8", "const:4:8"]]
+ 00b2a0bc ["CALL", null, ["ram:9da018:8"]]
- 00b29874 ["INT_ADD", "register:40f0:8", ["const:b29874:8", "const:4:8"]]
- 00b29874 ["CALL", null, ["ram:47ad34:8"]]
+ 00b2a868 ["INT_ADD", "register:40f0:8", ["const:b2a868:8", "const:4:8"]]
+ 00b2a868 ["CALL", null, ["ram:47b054:8"]]
- 00b29908 ["INT_ADD", "register:40f0:8", ["const:b29908:8", "const:4:8"]]
- 00b29908 ["CALL", null, ["ram:aeba48:8"]]
+ 00b2a8fc ["INT_ADD", "register:40f0:8", ["const:b2a8fc:8", "const:4:8"]]
+ 00b2a8fc ["CALL", null, ["ram:aeca3c:8"]]
~~~


<a id="compare-882499481a1d7cb9c8e31b9729fc8628"></a>

### [`00b29a84`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b29/00b29a84.md) → [`00b2aa78`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b2a/00b2aa78.md) FUN_00b2aa78

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal` · `cfg_change`

- 旧版 呼出元 1件 [`00b13398`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b13/00b13398.md) · 呼出先 6件 [`00440f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00440/00440f00.md) [`00753368`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00753/00753368.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c580d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c580d0.md)
- 新版 呼出元 1件 [`00b1438c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b14/00b1438c.md) · 呼出先 6件 [`00441220`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00441/00441220.md) [`00753718`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00753/00753718.md) [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c590a0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c590a0.md)

変更の種類 branch_condition_or_target, cfg_edge_inventory, constant, control_flow, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00b29ac4 ["INT_NOTEQUAL", "tmp:0:1", ["register:4050:8", "const:0:8"]]
- 00b29ac4 ["CBRANCH", null, ["local:b14:8", "tmp:0:1"]]
+ 00b2aab8 ["INT_NOTEQUAL", "tmp:0:1", ["register:4050:8", "const:0:8"]]
+ 00b2aab8 ["CBRANCH", null, ["local:b13:8", "tmp:0:1"]]
- 00b29af0 ["INT_NOTEQUAL", "tmp:0:1", ["register:4040:8", "const:0:8"]]
- 00b29af0 ["CBRANCH", null, ["local:b15:8", "tmp:0:1"]]
+ 00b2aae4 ["INT_NOTEQUAL", "tmp:0:1", ["register:4040:8", "const:0:8"]]
+ 00b2aae4 ["CBRANCH", null, ["local:b14:8", "tmp:0:1"]]
- 00b29afc ["INT_ADD", "register:40f0:8", ["const:b29afc:8", "const:4:8"]]
- 00b29afc ["CALL", null, ["callee:00c58f30:8"]]
+ 00b2aaf0 ["INT_ADD", "register:40f0:8", ["const:b2aaf0:8", "const:4:8"]]
+ 00b2aaf0 ["CALL", null, ["callee:00c58f30:8"]]
~~~


<a id="compare-5789444b23bdfacb187127ca5ad1a814"></a>

### [`00b29bb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b29/00b29bb0.md) → [`00b2aba4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b2a/00b2aba4.md) FUN_00b2aba4

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`00b13398`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b13/00b13398.md) · 呼出先 6件 [`00440f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00440/00440f00.md) [`00b29d60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b29/00b29d60.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c580d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c580d0.md)
- 新版 呼出元 1件 [`00b1438c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b14/00b1438c.md) · 呼出先 6件 [`00441220`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00441/00441220.md) [`00b2ad54`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b2a/00b2ad54.md) [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c590a0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c590a0.md)

変更の種類 branch_condition_or_target, call_argument_candidate, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, operands_and_dependencies, operation_sequence, unresolved_branch_alignment

命令の説明率　旧版 83.33% / 新版 83.33%

優先判定に残った影響 `call_argument_candidate` 6件, `unresolved_branch_alignment` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b2ac9c",
      "incomplete_value": true,
      "site": "00b2aca0",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:320:8"
          ],
          [
            "INT_MULT",
            "8",
            [
              "SUBPIECE",
              [
                "leaf",
                "const:320:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b29ca8",
      "incomplete_value": true,
      "site": "00b29cac",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:320:8"
          ],
          [
            "INT_MULT",
            "8",
            [
              "SUBPIECE",
              [
                "live",
                "register:4040:8"
              ]
            ]
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
      "definition_site": "00b2ace8",
      "incomplete_value": true,
      "site": "00b2acf4",
      "value": [
        "live",
        "register:40b0:8"
      ]
    },
    "old": {
      "definition_site": "00b29cf4",
      "incomplete_value": true,
      "site": "00b29d00",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:4000:8"
          ],
          [
            "INT_MULT",
            "8",
            [
              [
                "live",
                "register:40b0:8"
              ],
              [
                "leaf",
                "const:320:8"
              ]
            ]
          ]
        ]
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
      "definition_site": "00b29cd4",
      "incomplete_value": false,
      "site": "00b29d00",
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
      "unmatched:00b29bec",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b2ac64"
      ]
    ],
    [
      "unmatched:00b29c18",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b2ad48"
      ]
    ]
  ],
  "added": [
    [
      "00b2abe0",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b2ac64"
      ]
    ],
    [
      "00b2ac0c",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b2ad48"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b29cac ["INT_ADD", "register:40f0:8", ["const:b29cac:8", "const:4:8"]]
- 00b29cac ["CALL", null, ["callee:00c59130:8"]]
+ 00b2aca0 ["INT_ADD", "register:40f0:8", ["const:b2aca0:8", "const:4:8"]]
+ 00b2aca0 ["CALL", null, ["callee:00c59130:8"]]
- 00b29d00 ["INT_ADD", "register:40f0:8", ["const:b29d00:8", "const:4:8"]]
- 00b29d00 ["CALL", null, ["callee:00c59130:8"]]
+ 00b2acf4 ["INT_ADD", "register:40f0:8", ["const:b2acf4:8", "const:4:8"]]
+ 00b2acf4 ["CALL", null, ["callee:00c59130:8"]]
- 00b29d18 ["INT_ADD", "register:40f0:8", ["const:b29d18:8", "const:4:8"]]
- 00b29d18 ["CALL", null, ["callee:00c590a0:8"]]
+ 00b2ad0c ["INT_ADD", "register:40f0:8", ["const:b2ad0c:8", "const:4:8"]]
+ 00b2ad0c ["CALL", null, ["callee:00c590a0:8"]]
~~~


<a id="compare-2c0acf9f2d9918cea19efb59d1f74990"></a>

### [`00b29d60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b29/00b29d60.md) → [`00b2ad54`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b2a/00b2ad54.md) FUN_00b2ad54

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`00b29bb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b29/00b29bb0.md) · 呼出先 1件 [`0043b7b8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b7b8.md)
- 新版 呼出元 1件 [`00b2aba4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b2a/00b2aba4.md) · 呼出先 1件 [`0043bad8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bad8.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 80.00% / 新版 80.00%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b2ad60",
      "incomplete_value": false,
      "site": "00b2ad64",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:2b8000:8"
          ],
          [
            "leaf",
            "const:5b:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b29d6c",
      "incomplete_value": false,
      "site": "00b29d70",
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
      "00b2ad60",
      "PARAM",
      [
        "storage",
        "002b7f8c",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "00b2ad60",
      "PARAM",
      [
        "storage",
        "002b805b",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b29d70 ["INT_ADD", "register:40f0:8", ["const:b29d70:8", "const:4:8"]]
- 00b29d70 ["CALL", null, ["callee:0043bad8:8"]]
+ 00b2ad64 ["INT_ADD", "register:40f0:8", ["const:b2ad64:8", "const:4:8"]]
+ 00b2ad64 ["CALL", null, ["callee:0043bad8:8"]]
- 00b29d68 ["COPY", "register:4000:8", ["const:2b7000:8"]]
+ 00b2ad5c ["COPY", "register:4000:8", ["const:2b8000:8"]]
- 00b29d6c ["COPY", "tmp:0:8", ["const:f8c:8"]]
- 00b29d6c ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 00b29d6c ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 00b29d6c ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 00b2ad60 ["COPY", "tmp:0:8", ["const:5b:8"]]
+ 00b2ad60 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 00b2ad60 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 00b2ad60 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
~~~


<a id="compare-1f30e197c0557590ef29090231ecf496"></a>

### [`00b29f08`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b29/00b29f08.md) → [`00b2aefc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b2a/00b2aefc.md) FUN_00b2aefc

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`00b29d74`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b29/00b29d74.md) · 呼出先 1件 [`0043b7b8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b7b8.md)
- 新版 呼出元 1件 [`00b2ad68`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b2a/00b2ad68.md) · 呼出先 1件 [`0043bad8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bad8.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 80.00% / 新版 80.00%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b2af08",
      "incomplete_value": false,
      "site": "00b2af0c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:2b8000:8"
          ],
          [
            "leaf",
            "const:5b:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b29f14",
      "incomplete_value": false,
      "site": "00b29f18",
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
      "00b2af08",
      "PARAM",
      [
        "storage",
        "002b7f8c",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "00b2af08",
      "PARAM",
      [
        "storage",
        "002b805b",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b29f18 ["INT_ADD", "register:40f0:8", ["const:b29f18:8", "const:4:8"]]
- 00b29f18 ["CALL", null, ["callee:0043bad8:8"]]
+ 00b2af0c ["INT_ADD", "register:40f0:8", ["const:b2af0c:8", "const:4:8"]]
+ 00b2af0c ["CALL", null, ["callee:0043bad8:8"]]
- 00b29f10 ["COPY", "register:4000:8", ["const:2b7000:8"]]
+ 00b2af04 ["COPY", "register:4000:8", ["const:2b8000:8"]]
- 00b29f14 ["COPY", "tmp:0:8", ["const:f8c:8"]]
- 00b29f14 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 00b29f14 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 00b29f14 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 00b2af08 ["COPY", "tmp:0:8", ["const:5b:8"]]
+ 00b2af08 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 00b2af08 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 00b2af08 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
~~~


<a id="compare-d9ca4f2a3e95e9256f8d0b0ca7a08657"></a>

### [`00b2a0ac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b2a/00b2a0ac.md) → [`00b2b0a0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b2b/00b2b0a0.md) FUN_00b2b0a0

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`00b29f1c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b29/00b29f1c.md) · 呼出先 1件 [`0043b7b8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b7b8.md)
- 新版 呼出元 1件 [`00b2af10`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b2a/00b2af10.md) · 呼出先 1件 [`0043bad8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bad8.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 80.00% / 新版 80.00%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b2b0ac",
      "incomplete_value": false,
      "site": "00b2b0b0",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:2b8000:8"
          ],
          [
            "leaf",
            "const:5b:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b2a0b8",
      "incomplete_value": false,
      "site": "00b2a0bc",
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
      "00b2b0ac",
      "PARAM",
      [
        "storage",
        "002b7f8c",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "00b2b0ac",
      "PARAM",
      [
        "storage",
        "002b805b",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b2a0bc ["INT_ADD", "register:40f0:8", ["const:b2a0bc:8", "const:4:8"]]
- 00b2a0bc ["CALL", null, ["callee:0043bad8:8"]]
+ 00b2b0b0 ["INT_ADD", "register:40f0:8", ["const:b2b0b0:8", "const:4:8"]]
+ 00b2b0b0 ["CALL", null, ["callee:0043bad8:8"]]
- 00b2a0b4 ["COPY", "register:4000:8", ["const:2b7000:8"]]
+ 00b2b0a8 ["COPY", "register:4000:8", ["const:2b8000:8"]]
- 00b2a0b8 ["COPY", "tmp:0:8", ["const:f8c:8"]]
- 00b2a0b8 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 00b2a0b8 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 00b2a0b8 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 00b2b0ac ["COPY", "tmp:0:8", ["const:5b:8"]]
+ 00b2b0ac ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 00b2b0ac ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 00b2b0ac ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
~~~


<a id="compare-e3447768a82008cc57c99e4ead134fc4"></a>

### [`00b2a1ec`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b2a/00b2a1ec.md) → [`00b2b1e0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b2b/00b2b1e0.md) FUN_00b2b1e0

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`00b2a0c0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b2a/00b2a0c0.md) · 呼出先 1件 [`0043b7b8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b7b8.md)
- 新版 呼出元 1件 [`00b2b0b4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b2b/00b2b0b4.md) · 呼出先 1件 [`0043bad8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bad8.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 80.00% / 新版 80.00%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b2b1ec",
      "incomplete_value": false,
      "site": "00b2b1f0",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:2b8000:8"
          ],
          [
            "leaf",
            "const:5b:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b2a1f8",
      "incomplete_value": false,
      "site": "00b2a1fc",
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
      "00b2b1ec",
      "PARAM",
      [
        "storage",
        "002b7f8c",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "00b2b1ec",
      "PARAM",
      [
        "storage",
        "002b805b",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b2a1fc ["INT_ADD", "register:40f0:8", ["const:b2a1fc:8", "const:4:8"]]
- 00b2a1fc ["CALL", null, ["callee:0043bad8:8"]]
+ 00b2b1f0 ["INT_ADD", "register:40f0:8", ["const:b2b1f0:8", "const:4:8"]]
+ 00b2b1f0 ["CALL", null, ["callee:0043bad8:8"]]
- 00b2a1f4 ["COPY", "register:4000:8", ["const:2b7000:8"]]
+ 00b2b1e8 ["COPY", "register:4000:8", ["const:2b8000:8"]]
- 00b2a1f8 ["COPY", "tmp:0:8", ["const:f8c:8"]]
- 00b2a1f8 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 00b2a1f8 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 00b2a1f8 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 00b2b1ec ["COPY", "tmp:0:8", ["const:5b:8"]]
+ 00b2b1ec ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 00b2b1ec ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 00b2b1ec ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
~~~


<a id="compare-5c37e18c229a3f5b7d051ad604c36c61"></a>

### [`00b2a394`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b2a/00b2a394.md) → [`00b2b388`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b2b/00b2b388.md) FUN_00b2b388

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`00b2a200`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b2a/00b2a200.md) · 呼出先 1件 [`0043b7b8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b7b8.md)
- 新版 呼出元 1件 [`00b2b1f4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b2b/00b2b1f4.md) · 呼出先 1件 [`0043bad8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bad8.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 80.00% / 新版 80.00%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b2b394",
      "incomplete_value": false,
      "site": "00b2b398",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:2b8000:8"
          ],
          [
            "leaf",
            "const:5b:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b2a3a0",
      "incomplete_value": false,
      "site": "00b2a3a4",
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
      "00b2b394",
      "PARAM",
      [
        "storage",
        "002b7f8c",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "00b2b394",
      "PARAM",
      [
        "storage",
        "002b805b",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b2a3a4 ["INT_ADD", "register:40f0:8", ["const:b2a3a4:8", "const:4:8"]]
- 00b2a3a4 ["CALL", null, ["callee:0043bad8:8"]]
+ 00b2b398 ["INT_ADD", "register:40f0:8", ["const:b2b398:8", "const:4:8"]]
+ 00b2b398 ["CALL", null, ["callee:0043bad8:8"]]
- 00b2a39c ["COPY", "register:4000:8", ["const:2b7000:8"]]
+ 00b2b390 ["COPY", "register:4000:8", ["const:2b8000:8"]]
- 00b2a3a0 ["COPY", "tmp:0:8", ["const:f8c:8"]]
- 00b2a3a0 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 00b2a3a0 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 00b2a3a0 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 00b2b394 ["COPY", "tmp:0:8", ["const:5b:8"]]
+ 00b2b394 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 00b2b394 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 00b2b394 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
~~~


<a id="compare-631fded62ff3930af2ef76cfaeaaf32e"></a>

### [`00b2a538`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b2a/00b2a538.md) → [`00b2b52c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b2b/00b2b52c.md) FUN_00b2b52c

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`00b2a3a8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b2a/00b2a3a8.md) · 呼出先 1件 [`0043b7b8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b7b8.md)
- 新版 呼出元 1件 [`00b2b39c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b2b/00b2b39c.md) · 呼出先 1件 [`0043bad8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bad8.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 80.00% / 新版 80.00%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b2b538",
      "incomplete_value": false,
      "site": "00b2b53c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:2b8000:8"
          ],
          [
            "leaf",
            "const:5b:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b2a544",
      "incomplete_value": false,
      "site": "00b2a548",
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
      "00b2b538",
      "PARAM",
      [
        "storage",
        "002b7f8c",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "00b2b538",
      "PARAM",
      [
        "storage",
        "002b805b",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b2a548 ["INT_ADD", "register:40f0:8", ["const:b2a548:8", "const:4:8"]]
- 00b2a548 ["CALL", null, ["callee:0043bad8:8"]]
+ 00b2b53c ["INT_ADD", "register:40f0:8", ["const:b2b53c:8", "const:4:8"]]
+ 00b2b53c ["CALL", null, ["callee:0043bad8:8"]]
- 00b2a540 ["COPY", "register:4000:8", ["const:2b7000:8"]]
+ 00b2b534 ["COPY", "register:4000:8", ["const:2b8000:8"]]
- 00b2a544 ["COPY", "tmp:0:8", ["const:f8c:8"]]
- 00b2a544 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 00b2a544 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 00b2a544 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 00b2b538 ["COPY", "tmp:0:8", ["const:5b:8"]]
+ 00b2b538 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 00b2b538 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 00b2b538 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
~~~


<a id="compare-5f5b743a316375c36f97ce4990a92897"></a>

### [`00b2a54c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b2a/00b2a54c.md) → [`00b2b540`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b2b/00b2b540.md) FUN_00b2b540

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`00b13398`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b13/00b13398.md) · 呼出先 1件 [`0043b7b8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b7b8.md)
- 新版 呼出元 1件 [`00b1438c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b14/00b1438c.md) · 呼出先 1件 [`0043bad8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bad8.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 80.00% / 新版 80.00%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b2b54c",
      "incomplete_value": false,
      "site": "00b2b550",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:2b8000:8"
          ],
          [
            "leaf",
            "const:5b:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b2a558",
      "incomplete_value": false,
      "site": "00b2a55c",
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
      "00b2b54c",
      "PARAM",
      [
        "storage",
        "002b7f8c",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "00b2b54c",
      "PARAM",
      [
        "storage",
        "002b805b",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b2a55c ["INT_ADD", "register:40f0:8", ["const:b2a55c:8", "const:4:8"]]
- 00b2a55c ["CALL", null, ["callee:0043bad8:8"]]
+ 00b2b550 ["INT_ADD", "register:40f0:8", ["const:b2b550:8", "const:4:8"]]
+ 00b2b550 ["CALL", null, ["callee:0043bad8:8"]]
- 00b2a554 ["COPY", "register:4000:8", ["const:2b7000:8"]]
+ 00b2b548 ["COPY", "register:4000:8", ["const:2b8000:8"]]
- 00b2a558 ["COPY", "tmp:0:8", ["const:f8c:8"]]
- 00b2a558 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 00b2a558 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 00b2a558 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 00b2b54c ["COPY", "tmp:0:8", ["const:5b:8"]]
+ 00b2b54c ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 00b2b54c ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 00b2b54c ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
~~~


<a id="compare-3e3a08079da1628e49fd2f31931a5616"></a>

### [`00b2a68c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b2a/00b2a68c.md) → [`00b2b680`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b2b/00b2b680.md) FUN_00b2b680

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`00b2a560`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b2a/00b2a560.md) · 呼出先 1件 [`0043b7b8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b7b8.md)
- 新版 呼出元 1件 [`00b2b554`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b2b/00b2b554.md) · 呼出先 1件 [`0043bad8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bad8.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 80.00% / 新版 80.00%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b2b68c",
      "incomplete_value": false,
      "site": "00b2b690",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:2b8000:8"
          ],
          [
            "leaf",
            "const:5b:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b2a698",
      "incomplete_value": false,
      "site": "00b2a69c",
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
      "00b2b68c",
      "PARAM",
      [
        "storage",
        "002b7f8c",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "00b2b68c",
      "PARAM",
      [
        "storage",
        "002b805b",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b2a69c ["INT_ADD", "register:40f0:8", ["const:b2a69c:8", "const:4:8"]]
- 00b2a69c ["CALL", null, ["callee:0043bad8:8"]]
+ 00b2b690 ["INT_ADD", "register:40f0:8", ["const:b2b690:8", "const:4:8"]]
+ 00b2b690 ["CALL", null, ["callee:0043bad8:8"]]
- 00b2a694 ["COPY", "register:4000:8", ["const:2b7000:8"]]
+ 00b2b688 ["COPY", "register:4000:8", ["const:2b8000:8"]]
- 00b2a698 ["COPY", "tmp:0:8", ["const:f8c:8"]]
- 00b2a698 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 00b2a698 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 00b2a698 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 00b2b68c ["COPY", "tmp:0:8", ["const:5b:8"]]
+ 00b2b68c ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 00b2b68c ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 00b2b68c ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
~~~


<a id="compare-b340f2ee44abd8724163aaf9db70d5eb"></a>

### [`00b2a6a0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b2a/00b2a6a0.md) → [`00b2b694`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b2b/00b2b694.md) FUN_00b2b694

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `equal` · `cfg_change`

- 旧版 呼出元 1件 [`00b13398`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b13/00b13398.md) · 呼出先 6件 [`00440f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00440/00440f00.md) [`00b2a858`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b2a/00b2a858.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c580d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c580d0.md)
- 新版 呼出元 1件 [`00b1438c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b14/00b1438c.md) · 呼出先 6件 [`00441220`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00441/00441220.md) [`00b2b84c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b2b/00b2b84c.md) [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c590a0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c590a0.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, constant, control_flow, local_def_use, operands_and_dependencies, operation_sequence

命令の説明率　旧版 92.73% / 新版 92.73%

優先判定に残った影響 `call_argument_candidate` 5件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b2b7e8",
      "incomplete_value": true,
      "site": "00b2b7ec",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:4050:8"
          ],
          [
            "INT_MULT",
            "8",
            [
              [
                "live",
                "register:4048:8"
              ],
              [
                "live",
                "register:4040:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b2a7f4",
      "incomplete_value": true,
      "site": "00b2a7f8",
      "value": [
        "live",
        "register:40b8:8"
      ]
    },
    "ordinal": 2,
    "slot": 3
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b2b7fc",
      "incomplete_value": true,
      "site": "00b2b804",
      "value": [
        "INT_SUB",
        "8",
        [
          [
            "live",
            "register:40b0:8"
          ],
          [
            "live",
            "register:40a8:8"
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
      "definition_site": "00b2b7f8",
      "incomplete_value": true,
      "site": "00b2b804",
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


~~~diff
- 00b2a7f8 ["INT_ADD", "register:40f0:8", ["const:b2a7f8:8", "const:4:8"]]
- 00b2a7f8 ["CALL", null, ["callee:00c59130:8"]]
+ 00b2b7ec ["INT_ADD", "register:40f0:8", ["const:b2b7ec:8", "const:4:8"]]
+ 00b2b7ec ["CALL", null, ["callee:00c59130:8"]]
- 00b2a810 ["INT_ADD", "register:40f0:8", ["const:b2a810:8", "const:4:8"]]
- 00b2a810 ["CALL", null, ["callee:00c590a0:8"]]
+ 00b2b804 ["INT_ADD", "register:40f0:8", ["const:b2b804:8", "const:4:8"]]
+ 00b2b804 ["CALL", null, ["callee:00c590a0:8"]]
- 00b2a850 ["INT_ADD", "register:40f0:8", ["const:b2a850:8", "const:4:8"]]
- 00b2a850 ["CALL", null, ["callee:00b2b84c:8"]]
+ 00b2b844 ["INT_ADD", "register:40f0:8", ["const:b2b844:8", "const:4:8"]]
+ 00b2b844 ["CALL", null, ["callee:00b2b84c:8"]]
~~~


<a id="compare-a5cb5378f6ab7fe5e67afa8b105c96bb"></a>

### [`00b2a858`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b2a/00b2a858.md) → [`00b2b84c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b2b/00b2b84c.md) FUN_00b2b84c

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`00b2a6a0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b2a/00b2a6a0.md) · 呼出先 1件 [`0043b7b8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b7b8.md)
- 新版 呼出元 1件 [`00b2b694`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b2b/00b2b694.md) · 呼出先 1件 [`0043bad8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bad8.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 80.00% / 新版 80.00%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b2b858",
      "incomplete_value": false,
      "site": "00b2b85c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:2b8000:8"
          ],
          [
            "leaf",
            "const:5b:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b2a864",
      "incomplete_value": false,
      "site": "00b2a868",
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
      "00b2b858",
      "PARAM",
      [
        "storage",
        "002b7f8c",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "00b2b858",
      "PARAM",
      [
        "storage",
        "002b805b",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b2a868 ["INT_ADD", "register:40f0:8", ["const:b2a868:8", "const:4:8"]]
- 00b2a868 ["CALL", null, ["callee:0043bad8:8"]]
+ 00b2b85c ["INT_ADD", "register:40f0:8", ["const:b2b85c:8", "const:4:8"]]
+ 00b2b85c ["CALL", null, ["callee:0043bad8:8"]]
- 00b2a860 ["COPY", "register:4000:8", ["const:2b7000:8"]]
+ 00b2b854 ["COPY", "register:4000:8", ["const:2b8000:8"]]
- 00b2a864 ["COPY", "tmp:0:8", ["const:f8c:8"]]
- 00b2a864 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 00b2a864 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 00b2a864 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 00b2b858 ["COPY", "tmp:0:8", ["const:5b:8"]]
+ 00b2b858 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 00b2b858 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 00b2b858 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
~~~


<a id="compare-e0a67e5574c48a86e94432be9f2ca205"></a>

### [`00b2a870`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b2a/00b2a870.md) → [`00b2b864`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b2b/00b2b864.md) FUN_00b2b864

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 77.78% / 新版 77.78%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "00b2b878",
      "incomplete_value": false,
      "site": "00b2b87c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c90000:8"
          ],
          [
            "leaf",
            "const:288:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b2a884",
      "incomplete_value": false,
      "site": "00b2a888",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c8f000:8"
          ],
          [
            "leaf",
            "const:2b8:8"
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
      "00b2b87c",
      "DATA",
      [
        "storage",
        "00c8f2b8",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00b2b87c",
      "DATA",
      [
        "storage",
        "00c90288",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b2a87c ["INT_ADD", "register:40f0:8", ["const:b2a87c:8", "const:4:8"]]
- 00b2a87c ["CALL", null, ["callee:00c58f30:8"]]
+ 00b2b870 ["INT_ADD", "register:40f0:8", ["const:b2b870:8", "const:4:8"]]
+ 00b2b870 ["CALL", null, ["callee:00c58f30:8"]]
- 00b2a880 ["COPY", "register:4040:8", ["const:c8f000:8"]]
+ 00b2b874 ["COPY", "register:4040:8", ["const:c90000:8"]]
- 00b2a884 ["COPY", "tmp:0:8", ["const:2b8:8"]]
- 00b2a884 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00b2a884 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00b2a884 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00b2b878 ["COPY", "tmp:0:8", ["const:288:8"]]
+ 00b2b878 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00b2b878 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00b2b878 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-5b89ec4adb452fbfc0094d1ee12782f6"></a>

### [`00b2a894`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b2a/00b2a894.md) → [`00b2b888`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b2b/00b2b888.md) FUN_00b2b888

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
      "definition_site": "00b2b88c",
      "incomplete_value": false,
      "site": "00b2b890",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c90000:8"
          ],
          [
            "leaf",
            "const:288:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b2a898",
      "incomplete_value": false,
      "site": "00b2a89c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c8f000:8"
          ],
          [
            "leaf",
            "const:2b8:8"
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
      "00b2b890",
      "DATA",
      [
        "storage",
        "00c8f2b8",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00b2b890",
      "DATA",
      [
        "storage",
        "00c90288",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b2a894 ["COPY", "register:4040:8", ["const:c8f000:8"]]
+ 00b2b888 ["COPY", "register:4040:8", ["const:c90000:8"]]
- 00b2a898 ["COPY", "tmp:0:8", ["const:2b8:8"]]
- 00b2a898 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00b2a898 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00b2a898 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00b2b88c ["COPY", "tmp:0:8", ["const:288:8"]]
+ 00b2b88c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00b2b88c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00b2b88c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-c5b812e106a855ae5cc9cb1ff3fc05db"></a>

### [`00b2ab4c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b2a/00b2ab4c.md) → [`00b2bb40`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b2b/00b2bb40.md) FUN_00b2bb40

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`00b2a8d8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b2a/00b2a8d8.md) · 呼出先 1件 [`0043b7b8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b7b8.md)
- 新版 呼出元 1件 [`00b2b8cc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b2b/00b2b8cc.md) · 呼出先 1件 [`0043bad8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bad8.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 80.00% / 新版 80.00%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b2bb4c",
      "incomplete_value": false,
      "site": "00b2bb50",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:2b8000:8"
          ],
          [
            "leaf",
            "const:5b:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b2ab58",
      "incomplete_value": false,
      "site": "00b2ab5c",
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
      "00b2bb4c",
      "PARAM",
      [
        "storage",
        "002b7f8c",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "00b2bb4c",
      "PARAM",
      [
        "storage",
        "002b805b",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b2ab5c ["INT_ADD", "register:40f0:8", ["const:b2ab5c:8", "const:4:8"]]
- 00b2ab5c ["CALL", null, ["callee:0043bad8:8"]]
+ 00b2bb50 ["INT_ADD", "register:40f0:8", ["const:b2bb50:8", "const:4:8"]]
+ 00b2bb50 ["CALL", null, ["callee:0043bad8:8"]]
- 00b2ab54 ["COPY", "register:4000:8", ["const:2b7000:8"]]
+ 00b2bb48 ["COPY", "register:4000:8", ["const:2b8000:8"]]
- 00b2ab58 ["COPY", "tmp:0:8", ["const:f8c:8"]]
- 00b2ab58 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 00b2ab58 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 00b2ab58 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 00b2bb4c ["COPY", "tmp:0:8", ["const:5b:8"]]
+ 00b2bb4c ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 00b2bb4c ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 00b2bb4c ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
~~~


<a id="compare-6f32b67decb45764165bb34a4bc2b058"></a>

### [`00b2ac54`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b2a/00b2ac54.md) → [`00b2bc48`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b2b/00b2bc48.md) FUN_00b2bc48

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`00b1f4c4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b1f/00b1f4c4.md) · 呼出先 1件 [`0043b7b8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b7b8.md)
- 新版 呼出元 1件 [`00b204b8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b20/00b204b8.md) · 呼出先 1件 [`0043bad8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bad8.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 80.00% / 新版 80.00%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b2bc54",
      "incomplete_value": false,
      "site": "00b2bc58",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:2b8000:8"
          ],
          [
            "leaf",
            "const:5b:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b2ac60",
      "incomplete_value": false,
      "site": "00b2ac64",
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
      "00b2bc54",
      "PARAM",
      [
        "storage",
        "002b7f8c",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "00b2bc54",
      "PARAM",
      [
        "storage",
        "002b805b",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b2ac64 ["INT_ADD", "register:40f0:8", ["const:b2ac64:8", "const:4:8"]]
- 00b2ac64 ["CALL", null, ["callee:0043bad8:8"]]
+ 00b2bc58 ["INT_ADD", "register:40f0:8", ["const:b2bc58:8", "const:4:8"]]
+ 00b2bc58 ["CALL", null, ["callee:0043bad8:8"]]
- 00b2ac5c ["COPY", "register:4000:8", ["const:2b7000:8"]]
+ 00b2bc50 ["COPY", "register:4000:8", ["const:2b8000:8"]]
- 00b2ac60 ["COPY", "tmp:0:8", ["const:f8c:8"]]
- 00b2ac60 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 00b2ac60 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 00b2ac60 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 00b2bc54 ["COPY", "tmp:0:8", ["const:5b:8"]]
+ 00b2bc54 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 00b2bc54 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 00b2bc54 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
~~~


<a id="compare-def9ebb151528ad5c4051b5c94a6ae15"></a>

### [`00b2b10c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b2b/00b2b10c.md) → [`00b2c100`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b2c/00b2c100.md) FUN_00b2c100

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`00b1f4c4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b1f/00b1f4c4.md) · 呼出先 11件 [`00440f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00440/00440f00.md) [`00615f0c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00615/00615f0c.md) [`00652500`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00652/00652500.md) [`0065258c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00652/0065258c.md) [`00b2b390`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b2b/00b2b390.md)
- 新版 呼出元 1件 [`00b204b8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b20/00b204b8.md) · 呼出先 11件 [`00441220`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00441/00441220.md) [`006162bc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00616/006162bc.md) [`006528b0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00652/006528b0.md) [`0065293c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00652/0065293c.md) [`00b2c384`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b2c/00b2c384.md)

変更の種類 branch_condition_or_target, call_argument_candidate, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, operands_and_dependencies, operation_sequence, store_condition, unresolved_branch_alignment

命令の説明率　旧版 98.73% / 新版 98.73%

優先判定に残った影響 `call_argument_candidate` 1件, `store_condition` 1件, `unresolved_branch_alignment` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "00b2b318",
      "incomplete_value": true,
      "site": "00b2b31c",
      "value": [
        "live",
        "register:4098:8"
      ]
    },
    "ordinal": 7,
    "slot": 1
  },
  {
    "confidence": "limited",
    "guard": [
      [
        "FALL_THROUGH",
        "00b2b340"
      ],
      [
        "FALL_THROUGH",
        "00b2c334"
      ]
    ],
    "kind": "store_condition",
    "new": {
      "definition_site": "00b2c334",
      "incomplete_value": true,
      "site": "00b2c344",
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
    "old": {
      "definition_site": "00b2b340",
      "incomplete_value": true,
      "site": "00b2b350",
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
    "ordinal": 29,
    "slot": 0
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00b2b340",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b2c380"
      ]
    ]
  ],
  "added": [
    [
      "00b2c334",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b2c380"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b2b31c ["INT_ADD", "register:40f0:8", ["const:b2b31c:8", "const:4:8"]]
- 00b2b31c ["CALL", null, ["callee:00b2c55c:8"]]
+ 00b2c310 ["INT_ADD", "register:40f0:8", ["const:b2c310:8", "const:4:8"]]
+ 00b2c310 ["CALL", null, ["callee:00b2c55c:8"]]
- 00b2b1a4 ["BOOL_NEGATE", "tmp:0:1", ["register:101:1"]]
- 00b2b1a4 ["BOOL_AND", "tmp:1:1", ["register:102:1", "tmp:0:1"]]
- 00b2b1a4 ["CBRANCH", null, ["local:b25:8", "tmp:1:1"]]
+ 00b2c198 ["BOOL_NEGATE", "tmp:0:1", ["register:101:1"]]
+ 00b2c198 ["BOOL_AND", "tmp:1:1", ["register:102:1", "tmp:0:1"]]
+ 00b2c198 ["CBRANCH", null, ["local:b26:8", "tmp:1:1"]]
- 00b2b1b0 ["INT_ADD", "register:40f0:8", ["const:b2b1b0:8", "const:4:8"]]
- 00b2b1b0 ["CALL", null, ["callee:00c58f30:8"]]
+ 00b2c1a4 ["INT_ADD", "register:40f0:8", ["const:b2c1a4:8", "const:4:8"]]
+ 00b2c1a4 ["CALL", null, ["callee:00c58f30:8"]]
~~~


<a id="compare-fb98cda1e90277702463b24df91c94a1"></a>

### [`00b2b568`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b2b/00b2b568.md) → [`00b2c55c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b2c/00b2c55c.md) FUN_00b2c55c

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`00b2b10c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b2b/00b2b10c.md) · 呼出先 1件 [`0043b7b8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b7b8.md)
- 新版 呼出元 1件 [`00b2c100`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b2c/00b2c100.md) · 呼出先 1件 [`0043bad8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bad8.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 80.00% / 新版 80.00%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b2c568",
      "incomplete_value": false,
      "site": "00b2c56c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:2b8000:8"
          ],
          [
            "leaf",
            "const:5b:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b2b574",
      "incomplete_value": false,
      "site": "00b2b578",
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
      "00b2c568",
      "PARAM",
      [
        "storage",
        "002b7f8c",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "00b2c568",
      "PARAM",
      [
        "storage",
        "002b805b",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b2b578 ["INT_ADD", "register:40f0:8", ["const:b2b578:8", "const:4:8"]]
- 00b2b578 ["CALL", null, ["callee:0043bad8:8"]]
+ 00b2c56c ["INT_ADD", "register:40f0:8", ["const:b2c56c:8", "const:4:8"]]
+ 00b2c56c ["CALL", null, ["callee:0043bad8:8"]]
- 00b2b570 ["COPY", "register:4000:8", ["const:2b7000:8"]]
+ 00b2c564 ["COPY", "register:4000:8", ["const:2b8000:8"]]
- 00b2b574 ["COPY", "tmp:0:8", ["const:f8c:8"]]
- 00b2b574 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 00b2b574 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 00b2b574 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 00b2c568 ["COPY", "tmp:0:8", ["const:5b:8"]]
+ 00b2c568 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 00b2c568 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 00b2c568 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
~~~


<a id="compare-4ed58ccfc0b1d6aabc15aac1f3a9eb13"></a>

### [`00b2b57c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b2b/00b2b57c.md) → [`00b2c570`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b2c/00b2c570.md) _INIT_259

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 6件 [`0043aeb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043a/0043aeb0.md) [`0043b838`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b838.md) [`00bc488c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bc4/00bc488c.md) [`00c57f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f00.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 0件  · 呼出先 6件 [`0043b1d0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043b1d0.md) [`0043bb58`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bb58.md) [`00bc5880`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bc5/00bc5880.md) [`00c58ed0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58ed0.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies, operation_sequence, store_destination, store_value, unresolved_call_alignment

命令の説明率　旧版 74.04% / 新版 74.04%

優先判定に残った影響 `call_argument_candidate` 3件, `store_destination` 11件, `store_value` 9件, `unresolved_call_alignment` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00b2c5ac",
      "incomplete_value": true,
      "site": "00b2c5c8",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:35:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b2b5b8",
      "incomplete_value": true,
      "site": "00b2b5d4",
      "value": [
        "LOAD",
        "16",
        [
          [
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
    "ordinal": 9,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00b2c5d0",
      "incomplete_value": true,
      "site": "00b2c5ec",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:48:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b2b5dc",
      "incomplete_value": true,
      "site": "00b2b5f8",
      "value": [
        "LOAD",
        "16",
        [
          [
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
    "ordinal": 12,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00b2c5f0",
      "incomplete_value": true,
      "site": "00b2c60c",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:e3d:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b2b5fc",
      "incomplete_value": true,
      "site": "00b2b618",
      "value": [
        "LOAD",
        "16",
        [
          [
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
      "00b2c5ac",
      "READ",
      [
        "storage",
        "002b7f66",
        null,
        "string"
      ]
    ],
    [
      "00b2c5d0",
      "READ",
      [
        "storage",
        "002b7f79",
        null,
        "string"
      ]
    ],
    [
      "00b2c5f0",
      "READ",
      [
        "storage",
        "002b8d6e",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "00b2c5ac",
      "READ",
      [
        "storage",
        "002b8035",
        null,
        "string"
      ]
    ],
    [
      "00b2c5d0",
      "READ",
      [
        "storage",
        "002b8048",
        null,
        "string"
      ]
    ],
    [
      "00b2c5f0",
      "READ",
      [
        "storage",
        "002b8e3d",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b2b6dc ["INT_ADD", "register:40f0:8", ["const:b2b6dc:8", "const:4:8"]]
- 00b2b6dc ["CALL", null, ["callee:0043bb58:8"]]
+ 00b2c6d0 ["INT_ADD", "register:40f0:8", ["const:b2c6d0:8", "const:4:8"]]
+ 00b2c6d0 ["CALL", null, ["callee:0043bb58:8"]]
- 00b2b82c ["INT_ADD", "register:40f0:8", ["const:b2b82c:8", "const:4:8"]]
- 00b2b82c ["CALL", null, ["callee:00c58ed0:8"]]
+ 00b2c820 ["INT_ADD", "register:40f0:8", ["const:b2c820:8", "const:4:8"]]
+ 00b2c820 ["CALL", null, ["callee:00c58ed0:8"]]
- 00b2b5a4 ["COPY", "register:4098:8", ["const:1124000:8"]]
+ 00b2c598 ["COPY", "register:4098:8", ["const:1125000:8"]]
~~~


<a id="compare-8ce778382d525070987379425ed528fe"></a>

### [`00b2b990`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b2b/00b2b990.md) → [`00b2c984`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b2c/00b2c984.md) FUN_00b2c984

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`0043b03c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b03c.md) · 呼出先 20件 [`0043e98c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043e/0043e98c.md) [`0043f560`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043f/0043f560.md) [`0046cad0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046c/0046cad0.md) [`0046cafc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046c/0046cafc.md) [`004952c0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00495/004952c0.md)
- 新版 呼出元 1件 [`0043b35c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043b35c.md) · 呼出先 20件 [`0043ecac`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043e/0043ecac.md) [`0043f880`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043f/0043f880.md) [`0046cdf0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0046c/0046cdf0.md) [`0046ce1c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0046c/0046ce1c.md) [`004955e0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00495/004955e0.md)

変更の種類 call_argument_candidate, call_target, constant, operands_and_dependencies, store_value

命令の説明率　旧版 91.08% / 新版 91.08%

優先判定に残った影響 `call_argument_candidate` 2件, `call_target` 2件, `store_value` 2件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "00b2ca38",
      "incomplete_value": false,
      "site": "00b2ca48",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c90000:8"
          ],
          [
            "leaf",
            "const:388:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b2ba44",
      "incomplete_value": false,
      "site": "00b2ba54",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c8f000:8"
          ],
          [
            "leaf",
            "const:3b8:8"
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
      "definition_site": "00b2cb68",
      "incomplete_value": false,
      "site": "00b2cb78",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c90000:8"
          ],
          [
            "leaf",
            "const:308:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b2bb74",
      "incomplete_value": false,
      "site": "00b2bb84",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c8f000:8"
          ],
          [
            "leaf",
            "const:338:8"
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
      "definition_site": "00b2ca64",
      "incomplete_value": true,
      "site": "00b2ca64",
      "value": [
        "LOAD",
        "8",
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
                "const:e8:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b2ba70",
      "incomplete_value": true,
      "site": "00b2ba70",
      "value": [
        "LOAD",
        "8",
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
                "const:e8:8"
              ]
            ]
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
      "00b2ca3c",
      "READ",
      [
        "storage",
        "00c9b310",
        null,
        "pointer"
      ]
    ],
    [
      "00b2ca48",
      "DATA",
      [
        "storage",
        "00c8f3b8",
        null,
        "undefined *"
      ]
    ],
    [
      "00b2ca4c",
      "READ",
      [
        "storage",
        "00ca6610",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00b2ca3c",
      "READ",
      [
        "storage",
        "00c9c2e0",
        null,
        "pointer"
      ]
    ],
    [
      "00b2ca48",
      "DATA",
      [
        "storage",
        "00c90388",
        null,
        "undefined *"
      ]
    ],
    [
      "00b2ca4c",
      "READ",
      [
        "storage",
        "00ca75d0",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b2ba70 ["COPY", "register:0:8", ["register:4040:8"]]
- 00b2ba70 ["INT_ADD", "register:40f0:8", ["const:b2ba70:8", "const:4:8"]]
- 00b2ba70 ["CALLIND", null, ["register:0:8"]]
+ 00b2ca64 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00b2ca64 ["INT_ADD", "register:40f0:8", ["const:b2ca64:8", "const:4:8"]]
+ 00b2ca64 ["CALLIND", null, ["register:0:8"]]
- 00b2bba0 ["COPY", "register:0:8", ["register:4040:8"]]
- 00b2bba0 ["INT_ADD", "register:40f0:8", ["const:b2bba0:8", "const:4:8"]]
- 00b2bba0 ["CALLIND", null, ["register:0:8"]]
+ 00b2cb94 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00b2cb94 ["INT_ADD", "register:40f0:8", ["const:b2cb94:8", "const:4:8"]]
+ 00b2cb94 ["CALLIND", null, ["register:0:8"]]
- 00b2b9b4 ["INT_ADD", "register:40f0:8", ["const:b2b9b4:8", "const:4:8"]]
- 00b2b9b4 ["CALL", null, ["callee:008524fc:8"]]
+ 00b2c9a8 ["INT_ADD", "register:40f0:8", ["const:b2c9a8:8", "const:4:8"]]
+ 00b2c9a8 ["CALL", null, ["callee:008524fc:8"]]
~~~


<a id="compare-d1c61756d8f94c75701b3fe531267c79"></a>

### [`00b2bcf8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b2b/00b2bcf8.md) → [`00b2ccec`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b2c/00b2ccec.md) FUN_00b2ccec

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00b2cee4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b2c/00b2cee4.md) · 呼出先 8件 [`005762f8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00576/005762f8.md) [`00588eac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00588/00588eac.md) [`00589184`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00589/00589184.md) [`0058919c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00589/0058919c.md) [`00589360`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00589/00589360.md)
- 新版 呼出元 1件 [`00b2ded8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b2d/00b2ded8.md) · 呼出先 8件 [`00576618`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00576/00576618.md) [`005891cc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00589/005891cc.md) [`005894a4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00589/005894a4.md) [`005894bc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00589/005894bc.md) [`00589680`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00589/00589680.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 93.42% / 新版 93.42%

優先判定に残った影響 `store_value` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00b2cd34",
      "incomplete_value": true,
      "site": "00b2cd34",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:96:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b2bd40",
      "incomplete_value": true,
      "site": "00b2bd40",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:f3e:8"
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
      "definition_site": "00b2cd2c",
      "incomplete_value": true,
      "site": "00b2cd38",
      "value": [
        "LOAD",
        "8",
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
      "definition_site": "00b2bd38",
      "incomplete_value": true,
      "site": "00b2bd44",
      "value": [
        "LOAD",
        "8",
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
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "00b2cd24",
      "READ",
      [
        "storage",
        "002a5f3e",
        null,
        "string"
      ]
    ],
    [
      "00b2cd2c",
      "READ",
      [
        "storage",
        "002a5f45",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "00b2cd24",
      "READ",
      [
        "storage",
        "002a6096",
        null,
        "string"
      ]
    ],
    [
      "00b2cd2c",
      "READ",
      [
        "storage",
        "002a609d",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b2bd18 ["INT_ADD", "register:40f0:8", ["const:b2bd18:8", "const:4:8"]]
- 00b2bd18 ["CALL", null, ["callee:005891cc:8"]]
+ 00b2cd0c ["INT_ADD", "register:40f0:8", ["const:b2cd0c:8", "const:4:8"]]
+ 00b2cd0c ["CALL", null, ["callee:005891cc:8"]]
- 00b2bd20 ["INT_ADD", "register:40f0:8", ["const:b2bd20:8", "const:4:8"]]
- 00b2bd20 ["CALL", null, ["callee:005894bc:8"]]
+ 00b2cd14 ["INT_ADD", "register:40f0:8", ["const:b2cd14:8", "const:4:8"]]
+ 00b2cd14 ["CALL", null, ["callee:005894bc:8"]]
- 00b2bd28 ["COPY", "register:4048:8", ["const:2a5000:8"]]
+ 00b2cd1c ["COPY", "register:4048:8", ["const:2a6000:8"]]
~~~


<a id="compare-ac8a000990b50aeade258944c87880ea"></a>

### [`00b2be64`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b2b/00b2be64.md) → [`00b2ce58`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b2c/00b2ce58.md) FUN_00b2ce58

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 1件 [`00b2cee4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b2c/00b2cee4.md) · 呼出先 8件 [`005762f8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00576/005762f8.md) [`00588eac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00588/00588eac.md) [`00589184`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00589/00589184.md) [`0058919c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00589/0058919c.md) [`00589360`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00589/00589360.md)
- 新版 呼出元 1件 [`00b2ded8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b2d/00b2ded8.md) · 呼出先 8件 [`00576618`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00576/00576618.md) [`005891cc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00589/005891cc.md) [`005894a4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00589/005894a4.md) [`005894bc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00589/005894bc.md) [`00589680`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00589/00589680.md)

変更の種類 branch_condition_or_target, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, operands_and_dependencies, operation_sequence, store_value, unresolved_branch_alignment

命令の説明率　旧版 93.42% / 新版 93.42%

優先判定に残った影響 `store_value` 1件, `unresolved_branch_alignment` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00b2ce98",
      "incomplete_value": true,
      "site": "00b2ceb0",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:f78:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b2bea4",
      "incomplete_value": true,
      "site": "00b2bebc",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:eab:8"
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
      "00b2ce98",
      "READ",
      [
        "storage",
        "002abeab",
        null,
        "string"
      ]
    ],
    [
      "unmatched:00b2bf78",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b2cfc0"
      ]
    ]
  ],
  "added": [
    [
      "00b2ce98",
      "READ",
      [
        "storage",
        "002abf78",
        null,
        "string"
      ]
    ],
    [
      "00b2cf6c",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b2cfc0"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b2be84 ["INT_ADD", "register:40f0:8", ["const:b2be84:8", "const:4:8"]]
- 00b2be84 ["CALL", null, ["callee:005891cc:8"]]
+ 00b2ce78 ["INT_ADD", "register:40f0:8", ["const:b2ce78:8", "const:4:8"]]
+ 00b2ce78 ["CALL", null, ["callee:005891cc:8"]]
- 00b2be8c ["INT_ADD", "register:40f0:8", ["const:b2be8c:8", "const:4:8"]]
- 00b2be8c ["CALL", null, ["callee:005894bc:8"]]
+ 00b2ce80 ["INT_ADD", "register:40f0:8", ["const:b2ce80:8", "const:4:8"]]
+ 00b2ce80 ["CALL", null, ["callee:005894bc:8"]]
- 00b2be98 ["COPY", "tmp:0:8", ["const:eab:8"]]
- 00b2be98 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 00b2be98 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 00b2be98 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 00b2ce8c ["COPY", "tmp:0:8", ["const:f78:8"]]
+ 00b2ce8c ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 00b2ce8c ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 00b2ce8c ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
~~~


<a id="compare-4c5150a9ab981e4c0436d568b3ffc60b"></a>

### [`00b2bfd0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b2b/00b2bfd0.md) → [`00b2cfc4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b2c/00b2cfc4.md) FUN_00b2cfc4

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00b2cee4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b2c/00b2cee4.md) · 呼出先 8件 [`005762f8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00576/005762f8.md) [`00588eac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00588/00588eac.md) [`00589184`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00589/00589184.md) [`0058919c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00589/0058919c.md) [`00589360`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00589/00589360.md)
- 新版 呼出元 1件 [`00b2ded8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b2d/00b2ded8.md) · 呼出先 8件 [`00576618`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00576/00576618.md) [`005891cc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00589/005891cc.md) [`005894a4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00589/005894a4.md) [`005894bc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00589/005894bc.md) [`00589680`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00589/00589680.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 96.00% / 新版 96.00%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00b2d004",
      "incomplete_value": true,
      "site": "00b2d01c",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:939:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b2c010",
      "incomplete_value": true,
      "site": "00b2c028",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:86a:8"
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
      "00b2d004",
      "READ",
      [
        "storage",
        "002b586a",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "00b2d004",
      "READ",
      [
        "storage",
        "002b5939",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b2bff0 ["INT_ADD", "register:40f0:8", ["const:b2bff0:8", "const:4:8"]]
- 00b2bff0 ["CALL", null, ["callee:005891cc:8"]]
+ 00b2cfe4 ["INT_ADD", "register:40f0:8", ["const:b2cfe4:8", "const:4:8"]]
+ 00b2cfe4 ["CALL", null, ["callee:005891cc:8"]]
- 00b2bff8 ["INT_ADD", "register:40f0:8", ["const:b2bff8:8", "const:4:8"]]
- 00b2bff8 ["CALL", null, ["callee:005894bc:8"]]
+ 00b2cfec ["INT_ADD", "register:40f0:8", ["const:b2cfec:8", "const:4:8"]]
+ 00b2cfec ["CALL", null, ["callee:005894bc:8"]]
- 00b2c004 ["COPY", "tmp:0:8", ["const:86a:8"]]
- 00b2c004 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 00b2c004 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 00b2c004 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 00b2cff8 ["COPY", "tmp:0:8", ["const:939:8"]]
+ 00b2cff8 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 00b2cff8 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 00b2cff8 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
~~~


<a id="compare-f4a13c6faa691a919533ee82bcba9842"></a>

### [`00b2c138`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b2c/00b2c138.md) → [`00b2d12c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b2d/00b2d12c.md) FUN_00b2d12c

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00b2cee4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b2c/00b2cee4.md) · 呼出先 8件 [`005762f8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00576/005762f8.md) [`00588eac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00588/00588eac.md) [`00589184`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00589/00589184.md) [`0058919c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00589/0058919c.md) [`00589360`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00589/00589360.md)
- 新版 呼出元 1件 [`00b2ded8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b2d/00b2ded8.md) · 呼出先 8件 [`00576618`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00576/00576618.md) [`005891cc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00589/005891cc.md) [`005894a4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00589/005894a4.md) [`005894bc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00589/005894bc.md) [`00589680`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00589/00589680.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 95.95% / 新版 95.95%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00b2d16c",
      "incomplete_value": true,
      "site": "00b2d180",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:971:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b2c178",
      "incomplete_value": true,
      "site": "00b2c18c",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:893:8"
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
      "00b2d16c",
      "READ",
      [
        "storage",
        "002b9893",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "00b2d16c",
      "READ",
      [
        "storage",
        "002b9971",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b2c158 ["INT_ADD", "register:40f0:8", ["const:b2c158:8", "const:4:8"]]
- 00b2c158 ["CALL", null, ["callee:005891cc:8"]]
+ 00b2d14c ["INT_ADD", "register:40f0:8", ["const:b2d14c:8", "const:4:8"]]
+ 00b2d14c ["CALL", null, ["callee:005891cc:8"]]
- 00b2c160 ["INT_ADD", "register:40f0:8", ["const:b2c160:8", "const:4:8"]]
- 00b2c160 ["CALL", null, ["callee:005894bc:8"]]
+ 00b2d154 ["INT_ADD", "register:40f0:8", ["const:b2d154:8", "const:4:8"]]
+ 00b2d154 ["CALL", null, ["callee:005894bc:8"]]
- 00b2c16c ["COPY", "tmp:0:8", ["const:893:8"]]
- 00b2c16c ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 00b2c16c ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 00b2c16c ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 00b2d160 ["COPY", "tmp:0:8", ["const:971:8"]]
+ 00b2d160 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 00b2d160 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 00b2d160 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
~~~


<a id="compare-2cc032754bf5e9d5a7128c33b6252362"></a>

### [`00b2c29c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b2c/00b2c29c.md) → [`00b2d290`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b2d/00b2d290.md) FUN_00b2d290

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`0043af6c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043a/0043af6c.md) · 呼出先 19件 [`004678a0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00467/004678a0.md) [`004679ac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00467/004679ac.md) [`0046d9a8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046d/0046d9a8.md) [`0046db40`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046d/0046db40.md) [`0048b3d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048b/0048b3d0.md)
- 新版 呼出元 1件 [`0043b28c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043b28c.md) · 呼出先 19件 [`00467bc0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00467/00467bc0.md) [`00467ccc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00467/00467ccc.md) [`0046dcc8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0046d/0046dcc8.md) [`0046de60`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0046d/0046de60.md) [`0048b6f0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0048b/0048b6f0.md)

変更の種類 call, call_target, constant, operands_and_dependencies, operation_sequence, store_value

命令の説明率　旧版 89.38% / 新版 89.38%

優先判定に残った影響 `call_target` 1件, `store_value` 3件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00b2d2dc",
      "incomplete_value": true,
      "site": "00b2d2dc",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:e98:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b2c2e8",
      "incomplete_value": true,
      "site": "00b2c2e8",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:dc9:8"
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
      "definition_site": "00b2d344",
      "incomplete_value": true,
      "site": "00b2d348",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:1d8:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b2c350",
      "incomplete_value": true,
      "site": "00b2c354",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:188:8"
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
      "definition_site": "00b2d3a0",
      "incomplete_value": true,
      "site": "00b2d3a0",
      "value": [
        "LOAD",
        "8",
        [
          [
            "leaf",
            "const:1b1:8"
          ],
          [
            "INT_ADD",
            "8",
            [
              [
                "leaf",
                "const:2a7000:8"
              ],
              [
                "leaf",
                "const:6d8:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b2c3ac",
      "incomplete_value": true,
      "site": "00b2c3ac",
      "value": [
        "LOAD",
        "8",
        [
          [
            "leaf",
            "const:1b1:8"
          ],
          [
            "INT_ADD",
            "8",
            [
              [
                "leaf",
                "const:2a7000:8"
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
      "00b2d2c8",
      "READ",
      [
        "storage",
        "002b8dc9",
        null,
        "string"
      ]
    ],
    [
      "00b2d344",
      "READ",
      [
        "storage",
        "002c4188",
        null,
        "undefined8"
      ]
    ],
    [
      "00b2d37c",
      "READ",
      [
        "storage",
        "00ca4d94",
        null,
        "undefined4"
      ]
    ]
  ],
  "added": [
    [
      "00b2d2c8",
      "READ",
      [
        "storage",
        "002b8e98",
        null,
        "string"
      ]
    ],
    [
      "00b2d344",
      "READ",
      [
        "storage",
        "002c41d8",
        null,
        "undefined8"
      ]
    ],
    [
      "00b2d37c",
      "READ",
      [
        "storage",
        "00ca5d54",
        null,
        "undefined4"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b2c414 ["INT_ADD", "register:40f0:8", ["const:b2c414:8", "const:4:8"]]
- 00b2c414 ["CALL", null, ["ram:66d0d0:8"]]
+ 00b2d408 ["INT_ADD", "register:40f0:8", ["const:b2d408:8", "const:4:8"]]
+ 00b2d408 ["CALL", null, ["ram:66d480:8"]]
- 00b2c2c4 ["INT_ADD", "register:40f0:8", ["const:b2c2c4:8", "const:4:8"]]
- 00b2c2c4 ["CALL", null, ["callee:00c5bc10:8"]]
+ 00b2d2b8 ["INT_ADD", "register:40f0:8", ["const:b2d2b8:8", "const:4:8"]]
+ 00b2d2b8 ["CALL", null, ["callee:00c5bc10:8"]]
- 00b2c2cc ["COPY", "tmp:0:8", ["const:dc9:8"]]
- 00b2c2cc ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 00b2c2cc ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 00b2c2cc ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 00b2d2c0 ["COPY", "tmp:0:8", ["const:e98:8"]]
+ 00b2d2c0 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 00b2d2c0 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 00b2d2c0 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
~~~


<a id="compare-236f053e9e599890dcbadd03d1eaf08f"></a>

### [`00b2c4c0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b2c/00b2c4c0.md) → [`00b2d4b4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b2d/00b2d4b4.md) FUN_00b2d4b4

根拠 `code_and_unique_call_neighborhood` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`0043b698`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b698.md) · 呼出先 5件 [`0043e98c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043e/0043e98c.md) [`0043f574`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043f/0043f574.md) [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md) [`0047b80c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047b/0047b80c.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)
- 新版 呼出元 1件 [`0043b9b8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043b9b8.md) · 呼出先 5件 [`0043ecac`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043e/0043ecac.md) [`0043f894`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043f/0043f894.md) [`0047b054`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047b/0047b054.md) [`0047bb2c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047b/0047bb2c.md) [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md)

変更の種類 call, call_target, constant, operands_and_dependencies

命令の説明率　旧版 90.91% / 新版 90.91%

優先判定に残った影響 `call_target` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_target",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "00b2d4cc",
      "value": [
        "leaf",
        "ram:47b054:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "00b2c4d8",
      "value": [
        "leaf",
        "ram:47ad34:8"
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
      "00b2d4cc",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ]
  ],
  "added": [
    [
      "00b2d4cc",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047b054"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b2c4d8 ["INT_ADD", "register:40f0:8", ["const:b2c4d8:8", "const:4:8"]]
- 00b2c4d8 ["CALL", null, ["ram:47ad34:8"]]
+ 00b2d4cc ["INT_ADD", "register:40f0:8", ["const:b2d4cc:8", "const:4:8"]]
+ 00b2d4cc ["CALL", null, ["ram:47b054:8"]]
- 00b2c4c8 ["INT_ADD", "register:40f0:8", ["const:b2c4c8:8", "const:4:8"]]
- 00b2c4c8 ["CALL", null, ["callee:008524fc:8"]]
+ 00b2d4bc ["INT_ADD", "register:40f0:8", ["const:b2d4bc:8", "const:4:8"]]
+ 00b2d4bc ["CALL", null, ["callee:008524fc:8"]]
- 00b2c4d4 ["COPY", "register:0:8", ["register:4040:8"]]
- 00b2c4d4 ["INT_ADD", "register:40f0:8", ["const:b2c4d4:8", "const:4:8"]]
- 00b2c4d4 ["CALLIND", null, ["register:0:8"]]
+ 00b2d4c8 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00b2d4c8 ["INT_ADD", "register:40f0:8", ["const:b2d4c8:8", "const:4:8"]]
+ 00b2d4c8 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-34daea7582fef3afa45d232caade6151"></a>

### [`00b2c4ec`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b2c/00b2c4ec.md) → [`00b2d4e0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b2d/00b2d4e0.md) FUN_00b2d4e0

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 2件 [`0043b5fc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b5fc.md) [`00b2d8f4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b2d/00b2d8f4.md) · 呼出先 24件 [`0043b7a4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b7a4.md) [`0043bb60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bb60.md) [`00440f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00440/00440f00.md) [`00442b78`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00442/00442b78.md) [`00470880`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00470/00470880.md)
- 新版 呼出元 2件 [`0043b91c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043b91c.md) [`00b2e8e8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b2e/00b2e8e8.md) · 呼出先 24件 [`0043bac4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bac4.md) [`0043be80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043be80.md) [`00441220`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00441/00441220.md) [`00442e98`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00442/00442e98.md) [`00470ba0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00470/00470ba0.md)

変更の種類 call, call_target, constant, operands_and_dependencies, store_value

命令の説明率　旧版 98.12% / 新版 98.12%

優先判定に残った影響 `call_target` 2件, `store_value` 3件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "00b2d6dc",
      "incomplete_value": false,
      "site": "00b2d6dc",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c90000:8"
          ],
          [
            "leaf",
            "const:408:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b2c6e8",
      "incomplete_value": false,
      "site": "00b2c6e8",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c8f000:8"
          ],
          [
            "leaf",
            "const:438:8"
          ]
        ]
      ]
    },
    "ordinal": 33,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00b2d7b8",
      "incomplete_value": true,
      "site": "00b2d7c4",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:4cf:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b2c7c4",
      "incomplete_value": true,
      "site": "00b2c7d0",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:3f8:8"
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
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00b2daec",
      "incomplete_value": true,
      "site": "00b2dafc",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:a6:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b2caf8",
      "incomplete_value": true,
      "site": "00b2cb08",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:f4e:8"
              ]
            ]
          ]
        ]
      ]
    },
    "ordinal": 75,
    "slot": 2
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "00b2d6dc",
      "DATA",
      [
        "storage",
        "00c8f438",
        null,
        "undefined *"
      ]
    ],
    [
      "00b2d7b8",
      "READ",
      [
        "storage",
        "002b03f8",
        null,
        "string"
      ]
    ],
    [
      "00b2d854",
      "READ",
      [
        "storage",
        "00c8f460",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00b2d6dc",
      "DATA",
      [
        "storage",
        "00c90408",
        null,
        "undefined *"
      ]
    ],
    [
      "00b2d7b8",
      "READ",
      [
        "storage",
        "002b04cf",
        null,
        "string"
      ]
    ],
    [
      "00b2d854",
      "READ",
      [
        "storage",
        "00c90430",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b2cb90 ["INT_ADD", "register:40f0:8", ["const:b2cb90:8", "const:4:8"]]
- 00b2cb90 ["CALL", null, ["ram:48cd38:8"]]
+ 00b2db84 ["INT_ADD", "register:40f0:8", ["const:b2db84:8", "const:4:8"]]
+ 00b2db84 ["CALL", null, ["ram:48d058:8"]]
- 00b2cc44 ["INT_ADD", "register:40f0:8", ["const:b2cc44:8", "const:4:8"]]
- 00b2cc44 ["CALL", null, ["ram:48cd38:8"]]
+ 00b2dc38 ["INT_ADD", "register:40f0:8", ["const:b2dc38:8", "const:4:8"]]
+ 00b2dc38 ["CALL", null, ["ram:48d058:8"]]
- 00b2c520 ["INT_ADD", "register:40f0:8", ["const:b2c520:8", "const:4:8"]]
- 00b2c520 ["CALL", null, ["callee:008524fc:8"]]
+ 00b2d514 ["INT_ADD", "register:40f0:8", ["const:b2d514:8", "const:4:8"]]
+ 00b2d514 ["CALL", null, ["callee:008524fc:8"]]
~~~


<a id="compare-179387f706bd98f7ed17c9b17d673534"></a>

### [`00b2cee4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b2c/00b2cee4.md) → [`00b2ded8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b2d/00b2ded8.md) FUN_00b2ded8

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 2件 [`0043af6c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043a/0043af6c.md) [`0043b2ec`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b2ec.md) · 呼出先 23件 [`0043e98c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043e/0043e98c.md) [`0043f464`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043f/0043f464.md) [`0043f46c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043f/0043f46c.md) [`0043f478`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043f/0043f478.md) [`0046ca94`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046c/0046ca94.md)
- 新版 呼出元 2件 [`0043b28c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043b28c.md) [`0043b60c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043b60c.md) · 呼出先 23件 [`0043ecac`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043e/0043ecac.md) [`0043f784`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043f/0043f784.md) [`0043f78c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043f/0043f78c.md) [`0043f798`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043f/0043f798.md) [`0046cdb4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0046c/0046cdb4.md)

変更の種類 call, call_target, constant, operands_and_dependencies, store_destination, store_value

命令の説明率　旧版 97.14% / 新版 97.14%

優先判定に残った影響 `call_target` 1件, `store_destination` 2件, `store_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00b2df20",
      "incomplete_value": true,
      "site": "00b2df3c",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:5e9:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b2cf2c",
      "incomplete_value": true,
      "site": "00b2cf48",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:51c:8"
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
    "kind": "store_destination",
    "new": {
      "definition_site": "00b2dfe4",
      "incomplete_value": true,
      "site": "00b2dfe4",
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
            "const:28:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b2cff0",
      "incomplete_value": true,
      "site": "00b2cff0",
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
            "const:28:8"
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
      "definition_site": "00b2dfe8",
      "incomplete_value": true,
      "site": "00b2dfe8",
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
            "const:24:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b2cff4",
      "incomplete_value": true,
      "site": "00b2cff4",
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
            "const:24:8"
          ]
        ]
      ]
    },
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
      "00b2df20",
      "READ",
      [
        "storage",
        "002a951c",
        null,
        "string"
      ]
    ],
    [
      "00b2dfe0",
      "READ",
      [
        "storage",
        "00c9ac38",
        null,
        "pointer"
      ]
    ],
    [
      "00b2dfe4",
      "WRITE",
      [
        "storage",
        "00ca4d98",
        null,
        "undefined4"
      ]
    ]
  ],
  "added": [
    [
      "00b2df20",
      "READ",
      [
        "storage",
        "002a95e9",
        null,
        "string"
      ]
    ],
    [
      "00b2dfe0",
      "READ",
      [
        "storage",
        "00c9bc08",
        null,
        "pointer"
      ]
    ],
    [
      "00b2dfe4",
      "WRITE",
      [
        "storage",
        "00ca5d58",
        null,
        "undefined4"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b2d284 ["INT_ADD", "register:40f0:8", ["const:b2d284:8", "const:4:8"]]
- 00b2d284 ["CALL", null, ["ram:48cd38:8"]]
+ 00b2e278 ["INT_ADD", "register:40f0:8", ["const:b2e278:8", "const:4:8"]]
+ 00b2e278 ["CALL", null, ["ram:48d058:8"]]
- 00b2cf08 ["INT_ADD", "register:40f0:8", ["const:b2cf08:8", "const:4:8"]]
- 00b2cf08 ["CALL", null, ["callee:005891cc:8"]]
+ 00b2defc ["INT_ADD", "register:40f0:8", ["const:b2defc:8", "const:4:8"]]
+ 00b2defc ["CALL", null, ["callee:005891cc:8"]]
- 00b2cf10 ["INT_ADD", "register:40f0:8", ["const:b2cf10:8", "const:4:8"]]
- 00b2cf10 ["CALL", null, ["callee:005894bc:8"]]
+ 00b2df04 ["INT_ADD", "register:40f0:8", ["const:b2df04:8", "const:4:8"]]
+ 00b2df04 ["CALL", null, ["callee:005894bc:8"]]
~~~


<a id="compare-84e1a77a0abed28092fd132ffa817f02"></a>

### [`00b2d388`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b2d/00b2d388.md) → [`00b2e37c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b2e/00b2e37c.md) FUN_00b2e37c

根拠 `code_and_unique_call_neighborhood` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 1件 [`0043b3a8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b3a8.md) · 呼出先 1件 [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)
- 新版 呼出元 1件 [`0043b6c8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043b6c8.md) · 呼出先 1件 [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md)

変更の種類 cfg_edge_inventory, constant, control_flow, control_flow_count, local_def_use, operands_and_dependencies, operation_sequence

命令の説明率　旧版 94.44% / 新版 94.44%

~~~diff
- 00b2d3a4 ["INT_ADD", "register:40f0:8", ["const:b2d3a4:8", "const:4:8"]]
- 00b2d3a4 ["CALL", null, ["callee:008524fc:8"]]
+ 00b2e398 ["INT_ADD", "register:40f0:8", ["const:b2e398:8", "const:4:8"]]
+ 00b2e398 ["CALL", null, ["callee:008524fc:8"]]
- 00b2d3cc ["COPY", "register:0:8", ["register:4028:8"]]
- 00b2d3cc ["BRANCHIND", null, ["register:0:8"]]
+ 00b2e3c0 ["COPY", "register:0:8", ["register:4028:8"]]
+ 00b2e3c0 ["BRANCHIND", null, ["register:0:8"]]
~~~


<a id="compare-06ee4b3483a000f054f09ec82a509cc5"></a>

### [`00b2d3d4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b2d/00b2d3d4.md) → [`00b2e3c8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b2e/00b2e3c8.md) FUN_00b2e3c8

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 1件 [`0043b5d4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b5d4.md) · 呼出先 8件 [`0043e98c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043e/0043e98c.md) [`0043f46c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043f/0043f46c.md) [`0043f478`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043f/0043f478.md) [`00444120`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00444/00444120.md) [`00446738`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00446/00446738.md)
- 新版 呼出元 1件 [`0043b8f4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043b8f4.md) · 呼出先 8件 [`0043ecac`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043e/0043ecac.md) [`0043f78c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043f/0043f78c.md) [`0043f798`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043f/0043f798.md) [`00444440`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00444/00444440.md) [`00446a58`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00446/00446a58.md)

変更の種類 branch_condition_or_target, call_argument_candidate, constant, control_flow, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_store_alignment

命令の説明率　旧版 94.87% / 新版 94.87%

優先判定に残った影響 `call_argument_candidate` 1件, `unresolved_store_alignment` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "00b2d438",
      "incomplete_value": false,
      "site": "00b2d43c",
      "value": [
        "leaf",
        "const:2:8"
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
      "unmatched:00b2d3d4",
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
      "00b2e3c8",
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
- 00b2d43c ["INT_ADD", "register:40f0:8", ["const:b2d43c:8", "const:4:8"]]
- 00b2d43c ["CALL", null, ["callee:0066d4cc:8"]]
+ 00b2e430 ["INT_ADD", "register:40f0:8", ["const:b2e430:8", "const:4:8"]]
+ 00b2e430 ["CALL", null, ["callee:0066d4cc:8"]]
- 00b2d3d4 ["COPY", "tmp:0:8", ["register:40e8:8"]]
- 00b2d3d4 ["COPY", "tmp:1:8", ["register:40f0:8"]]
- 00b2d3d4 ["INT_ADD", "register:8:8", ["register:8:8", "const:fffffffffffffff0:8"]]
- 00b2d3d4 ["STORE", null, ["const:1b1:8", "register:8:8", "tmp:0:8"]]
- 00b2d3d8 ["COPY", "register:40e8:8", ["register:8:8"]]
~~~


<a id="compare-e1348ea6f9562a2ac08fc3b2d3eb04e8"></a>

### [`00b2d474`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b2d/00b2d474.md) → [`00b2e468`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b2e/00b2e468.md) FUN_00b2e468

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md)

変更の種類 cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_return_alignment, unresolved_store_alignment

命令の説明率　旧版 55.56% / 新版 55.56%

優先判定に残った影響 `unresolved_return_alignment` 1件, `unresolved_store_alignment` 1件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00b2d48c",
      "DATA",
      [
        "storage",
        "00c8f338",
        null,
        "undefined *"
      ]
    ],
    [
      "unmatched:00b2d490",
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
      "00b2e480",
      "DATA",
      [
        "storage",
        "00c90308",
        null,
        "undefined *"
      ]
    ],
    [
      "00b2e484",
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
- 00b2d480 ["INT_ADD", "register:40f0:8", ["const:b2d480:8", "const:4:8"]]
- 00b2d480 ["CALL", null, ["callee:00c58f30:8"]]
+ 00b2e474 ["INT_ADD", "register:40f0:8", ["const:b2e474:8", "const:4:8"]]
+ 00b2e474 ["CALL", null, ["callee:00c58f30:8"]]
- 00b2d484 ["COPY", "register:4040:8", ["const:c8f000:8"]]
+ 00b2e478 ["COPY", "register:4040:8", ["const:c90000:8"]]
- 00b2d488 ["COPY", "tmp:0:8", ["const:338:8"]]
- 00b2d488 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00b2d488 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00b2d488 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-eef538b8341e008dc3a1d6a737d518cb"></a>

### [`00b2d498`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b2d/00b2d498.md) → [`00b2e48c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b2e/00b2e48c.md) FUN_00b2e48c

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
      "definition_site": "00b2e490",
      "incomplete_value": false,
      "site": "00b2e494",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c90000:8"
          ],
          [
            "leaf",
            "const:308:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b2d49c",
      "incomplete_value": false,
      "site": "00b2d4a0",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c8f000:8"
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
      "00b2e494",
      "DATA",
      [
        "storage",
        "00c8f338",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00b2e494",
      "DATA",
      [
        "storage",
        "00c90308",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b2d498 ["COPY", "register:4040:8", ["const:c8f000:8"]]
+ 00b2e48c ["COPY", "register:4040:8", ["const:c90000:8"]]
- 00b2d49c ["COPY", "tmp:0:8", ["const:338:8"]]
- 00b2d49c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00b2d49c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00b2d49c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00b2e490 ["COPY", "tmp:0:8", ["const:308:8"]]
+ 00b2e490 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00b2e490 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00b2e490 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-9c7f63dec98b7556962ccbeeb40302d4"></a>

### [`00b2d4f8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b2d/00b2d4f8.md) → [`00b2e4ec`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b2e/00b2e4ec.md) FUN_00b2e4ec

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 77.78% / 新版 77.78%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "00b2e500",
      "incomplete_value": false,
      "site": "00b2e504",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c90000:8"
          ],
          [
            "leaf",
            "const:388:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b2d50c",
      "incomplete_value": false,
      "site": "00b2d510",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c8f000:8"
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
      "00b2e504",
      "DATA",
      [
        "storage",
        "00c8f3b8",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00b2e504",
      "DATA",
      [
        "storage",
        "00c90388",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b2d504 ["INT_ADD", "register:40f0:8", ["const:b2d504:8", "const:4:8"]]
- 00b2d504 ["CALL", null, ["callee:00c58f30:8"]]
+ 00b2e4f8 ["INT_ADD", "register:40f0:8", ["const:b2e4f8:8", "const:4:8"]]
+ 00b2e4f8 ["CALL", null, ["callee:00c58f30:8"]]
- 00b2d508 ["COPY", "register:4040:8", ["const:c8f000:8"]]
+ 00b2e4fc ["COPY", "register:4040:8", ["const:c90000:8"]]
- 00b2d50c ["COPY", "tmp:0:8", ["const:3b8:8"]]
- 00b2d50c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00b2d50c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00b2d50c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00b2e500 ["COPY", "tmp:0:8", ["const:388:8"]]
+ 00b2e500 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00b2e500 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00b2e500 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-ad7d722053bd0dafe873306f248068f4"></a>

### [`00b2d51c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b2d/00b2d51c.md) → [`00b2e510`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b2e/00b2e510.md) FUN_00b2e510

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
      "definition_site": "00b2e514",
      "incomplete_value": false,
      "site": "00b2e518",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c90000:8"
          ],
          [
            "leaf",
            "const:388:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b2d520",
      "incomplete_value": false,
      "site": "00b2d524",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c8f000:8"
          ],
          [
            "leaf",
            "const:3b8:8"
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
      "00b2e518",
      "DATA",
      [
        "storage",
        "00c8f3b8",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00b2e518",
      "DATA",
      [
        "storage",
        "00c90388",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b2d51c ["COPY", "register:4040:8", ["const:c8f000:8"]]
+ 00b2e510 ["COPY", "register:4040:8", ["const:c90000:8"]]
- 00b2d520 ["COPY", "tmp:0:8", ["const:3b8:8"]]
- 00b2d520 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00b2d520 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00b2d520 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00b2e514 ["COPY", "tmp:0:8", ["const:388:8"]]
+ 00b2e514 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00b2e514 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00b2e514 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-73ccbe4fe1ab00eab975454b06ef3489"></a>

### [`00b2d578`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b2d/00b2d578.md) → [`00b2e56c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b2e/00b2e56c.md) FUN_00b2e56c

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 1件 [`00b2c4ec`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b2c/00b2c4ec.md) · 呼出先 4件 [`00440f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00440/00440f00.md) [`00b2d77c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b2d/00b2d77c.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 1件 [`00b2d4e0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b2d/00b2d4e0.md) · 呼出先 4件 [`00441220`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00441/00441220.md) [`00b2e770`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b2e/00b2e770.md) [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 branch_condition_or_target, call, call_count, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, return_value_candidate, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 92.91% / 新版 92.91%

優先判定に残った影響 `return_value_candidate` 1件, `unresolved_branch_alignment` 2件, `unresolved_call_alignment` 1件, `unresolved_store_alignment` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "return_value_candidate",
    "new": {
      "definition_site": "00b2e73c",
      "incomplete_value": true,
      "site": "00b2e758",
      "value": [
        "live",
        "register:40a0:8"
      ]
    },
    "old": null,
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
      "unmatched:00b2d6c8",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b2e69c"
      ]
    ],
    [
      "unmatched:00b2d740",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b2e73c"
      ]
    ],
    [
      "unmatched:00b2d6e8",
      "COMPUTED_CALL",
      [
        "unresolved_target",
        null
      ]
    ]
  ],
  "added": [
    [
      "00b2e6bc",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b2e69c"
      ]
    ],
    [
      "00b2e734",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b2e73c"
      ]
    ],
    [
      "00b2e6dc",
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
- 00b2d5c0 ["BOOL_NEGATE", "tmp:0:1", ["register:101:1"]]
- 00b2d5c0 ["BOOL_AND", "tmp:1:1", ["register:102:1", "tmp:0:1"]]
- 00b2d5c0 ["CBRANCH", null, ["local:b31:8", "tmp:1:1"]]
+ 00b2e5b4 ["BOOL_NEGATE", "tmp:0:1", ["register:101:1"]]
+ 00b2e5b4 ["BOOL_AND", "tmp:1:1", ["register:102:1", "tmp:0:1"]]
+ 00b2e5b4 ["CBRANCH", null, ["local:b32:8", "tmp:1:1"]]
- 00b2d5fc ["BOOL_NEGATE", "tmp:0:1", ["register:101:1"]]
- 00b2d5fc ["BOOL_AND", "tmp:1:1", ["register:102:1", "tmp:0:1"]]
- 00b2d5fc ["CBRANCH", null, ["local:b32:8", "tmp:1:1"]]
+ 00b2e5f0 ["BOOL_NEGATE", "tmp:0:1", ["register:101:1"]]
+ 00b2e5f0 ["BOOL_AND", "tmp:1:1", ["register:102:1", "tmp:0:1"]]
+ 00b2e5f0 ["CBRANCH", null, ["local:b33:8", "tmp:1:1"]]
- 00b2d608 ["INT_ADD", "register:40f0:8", ["const:b2d608:8", "const:4:8"]]
- 00b2d608 ["CALL", null, ["callee:00c58f30:8"]]
+ 00b2e5fc ["INT_ADD", "register:40f0:8", ["const:b2e5fc:8", "const:4:8"]]
+ 00b2e5fc ["CALL", null, ["callee:00c58f30:8"]]
~~~


<a id="compare-d4d1ac8b041e9896352b145559940288"></a>

### [`00b2d77c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b2d/00b2d77c.md) → [`00b2e770`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b2e/00b2e770.md) FUN_00b2e770

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`00b2d578`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b2d/00b2d578.md) · 呼出先 1件 [`0043b7b8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b7b8.md)
- 新版 呼出元 1件 [`00b2e56c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b2e/00b2e56c.md) · 呼出先 1件 [`0043bad8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bad8.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 80.00% / 新版 80.00%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b2e77c",
      "incomplete_value": false,
      "site": "00b2e780",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:2b8000:8"
          ],
          [
            "leaf",
            "const:5b:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b2d788",
      "incomplete_value": false,
      "site": "00b2d78c",
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
      "00b2e77c",
      "PARAM",
      [
        "storage",
        "002b7f8c",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "00b2e77c",
      "PARAM",
      [
        "storage",
        "002b805b",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b2d78c ["INT_ADD", "register:40f0:8", ["const:b2d78c:8", "const:4:8"]]
- 00b2d78c ["CALL", null, ["callee:0043bad8:8"]]
+ 00b2e780 ["INT_ADD", "register:40f0:8", ["const:b2e780:8", "const:4:8"]]
+ 00b2e780 ["CALL", null, ["callee:0043bad8:8"]]
- 00b2d784 ["COPY", "register:4000:8", ["const:2b7000:8"]]
+ 00b2e778 ["COPY", "register:4000:8", ["const:2b8000:8"]]
- 00b2d788 ["COPY", "tmp:0:8", ["const:f8c:8"]]
- 00b2d788 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 00b2d788 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 00b2d788 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 00b2e77c ["COPY", "tmp:0:8", ["const:5b:8"]]
+ 00b2e77c ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 00b2e77c ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 00b2e77c ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
~~~


<a id="compare-e8e842d72a1be0567bc513c661ca1d1d"></a>

### [`00b2d790`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b2d/00b2d790.md) → [`00b2e784`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b2e/00b2e784.md) FUN_00b2e784

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 branch_condition_or_target, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_store_alignment

命令の説明率　旧版 50.00% / 新版 50.00%

優先判定に残った影響 `unresolved_store_alignment` 1件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00b2d79c",
      "DATA",
      [
        "storage",
        "00c8f438",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00b2e790",
      "DATA",
      [
        "storage",
        "00c90408",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b2d790 ["INT_ADD", "tmp:0:8", ["register:4000:8", "const:10:8"]]
- 00b2d790 ["LOAD", "tmp:1:1", ["const:1b1:8", "tmp:0:8"]]
- 00b2d790 ["INT_ZEXT", "register:4040:8", ["tmp:1:1"]]
- 00b2d794 ["COPY", "register:4048:8", ["const:c8f000:8"]]
- 00b2d798 ["COPY", "tmp:0:8", ["const:438:8"]]
- 00b2d798 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 00b2d798 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 00b2d798 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
~~~


<a id="compare-88c7db8060e337a946a09ae8f7fcbd5b"></a>

### [`00b2d7b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b2d/00b2d7b0.md) → [`00b2e7a4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b2e/00b2e7a4.md) FUN_00b2e7a4

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 87.50% / 新版 87.50%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "00b2e7ac",
      "incomplete_value": false,
      "site": "00b2e7b0",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c90000:8"
          ],
          [
            "leaf",
            "const:408:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b2d7b8",
      "incomplete_value": false,
      "site": "00b2d7bc",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c8f000:8"
          ],
          [
            "leaf",
            "const:438:8"
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
      "00b2e7b0",
      "DATA",
      [
        "storage",
        "00c8f438",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00b2e7b0",
      "DATA",
      [
        "storage",
        "00c90408",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b2d7b4 ["COPY", "register:4048:8", ["const:c8f000:8"]]
+ 00b2e7a8 ["COPY", "register:4048:8", ["const:c90000:8"]]
- 00b2d7b8 ["COPY", "tmp:0:8", ["const:438:8"]]
- 00b2d7b8 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 00b2d7b8 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 00b2d7b8 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 00b2e7ac ["COPY", "tmp:0:8", ["const:408:8"]]
+ 00b2e7ac ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 00b2e7ac ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 00b2e7ac ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
- 00b2d7dc ["INT_ADD", "register:40f0:8", ["const:b2d7dc:8", "const:4:8"]]
- 00b2d7dc ["CALL", null, ["callee:00c58f50:8"]]
+ 00b2e7d0 ["INT_ADD", "register:40f0:8", ["const:b2e7d0:8", "const:4:8"]]
+ 00b2e7d0 ["CALL", null, ["callee:00c58f50:8"]]
~~~


<a id="compare-3343bb866151f6bc315a1781e15e0dc6"></a>

### [`00b2d7f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b2d/00b2d7f0.md) → [`00b2e7e4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b2e/00b2e7e4.md) FUN_00b2e7e4

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 2件 [`0043bb60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bb60.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)
- 新版 呼出元 0件  · 呼出先 2件 [`0043be80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043be80.md) [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 92.31% / 新版 92.31%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "00b2e814",
      "incomplete_value": false,
      "site": "00b2e814",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c90000:8"
          ],
          [
            "leaf",
            "const:408:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b2d820",
      "incomplete_value": false,
      "site": "00b2d820",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c8f000:8"
          ],
          [
            "leaf",
            "const:438:8"
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
      "00b2e814",
      "DATA",
      [
        "storage",
        "00c8f438",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00b2e814",
      "DATA",
      [
        "storage",
        "00c90408",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b2d804 ["INT_ADD", "register:40f0:8", ["const:b2d804:8", "const:4:8"]]
- 00b2d804 ["CALL", null, ["callee:00c58f30:8"]]
+ 00b2e7f8 ["INT_ADD", "register:40f0:8", ["const:b2e7f8:8", "const:4:8"]]
+ 00b2e7f8 ["CALL", null, ["callee:00c58f30:8"]]
- 00b2d810 ["COPY", "register:4058:8", ["const:c8f000:8"]]
+ 00b2e804 ["COPY", "register:4058:8", ["const:c90000:8"]]
- 00b2d814 ["COPY", "tmp:0:8", ["const:438:8"]]
- 00b2d814 ["INT_CARRY", "register:105:1", ["register:4058:8", "tmp:0:8"]]
- 00b2d814 ["INT_SCARRY", "register:106:1", ["register:4058:8", "tmp:0:8"]]
- 00b2d814 ["INT_ADD", "tmp:1:8", ["register:4058:8", "tmp:0:8"]]
+ 00b2e808 ["COPY", "tmp:0:8", ["const:408:8"]]
+ 00b2e808 ["INT_CARRY", "register:105:1", ["register:4058:8", "tmp:0:8"]]
+ 00b2e808 ["INT_SCARRY", "register:106:1", ["register:4058:8", "tmp:0:8"]]
+ 00b2e808 ["INT_ADD", "tmp:1:8", ["register:4058:8", "tmp:0:8"]]
~~~


<a id="compare-5f1c2fed4623e94faa80548d2fddf505"></a>

### [`00b2d86c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b2d/00b2d86c.md) → [`00b2e860`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b2e/00b2e860.md) FUN_00b2e860

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 1件 [`0043bb60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bb60.md)
- 新版 呼出元 0件  · 呼出先 1件 [`0043be80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043be80.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 87.50% / 新版 87.50%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "00b2e86c",
      "incomplete_value": false,
      "site": "00b2e86c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c90000:8"
          ],
          [
            "leaf",
            "const:408:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b2d878",
      "incomplete_value": false,
      "site": "00b2d878",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c8f000:8"
          ],
          [
            "leaf",
            "const:438:8"
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
      "00b2e86c",
      "DATA",
      [
        "storage",
        "00c8f438",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00b2e86c",
      "DATA",
      [
        "storage",
        "00c90408",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b2d870 ["COPY", "register:4048:8", ["const:c8f000:8"]]
+ 00b2e864 ["COPY", "register:4048:8", ["const:c90000:8"]]
- 00b2d874 ["COPY", "tmp:0:8", ["const:438:8"]]
- 00b2d874 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 00b2d874 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 00b2d874 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 00b2e868 ["COPY", "tmp:0:8", ["const:408:8"]]
+ 00b2e868 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 00b2e868 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 00b2e868 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
~~~


