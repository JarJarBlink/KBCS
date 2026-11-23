# v16.0.1 → v16.0.2 · 最優先の変更候補 (85)

[一覧の目次](README.md)

<a id="compare-2d538984bd1327cbabe59ce20a47eac1"></a>

### [`00b7737c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b77/00b7737c.md) → [`00b77418`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b77/00b77418.md) _ZN11flatbuffers11NumToStringIjEENSt6__ndk112basic_stringIcNS1_11char_traitsIcEENS1_9allocatorIcEEEET_

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`00c5bff0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5bff0.md) · 呼出先 8件 [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md) [`00c581b0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c581b0.md) [`00c581e0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c581e0.md) [`00c58290`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58290.md)
- 新版 呼出元 1件 [`00c5c0c0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5c0c0.md) · 呼出先 8件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md) [`00c58280`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58280.md) [`00c582b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c582b0.md) [`00c58360`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58360.md)

変更の種類 call_argument_candidate, comparison, comparison_count, constant, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_store_alignment

命令の説明率　旧版 80.22% / 新版 80.22%

優先判定に残った影響 `call_argument_candidate` 5件, `unresolved_store_alignment` 6件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "00b773dc",
      "incomplete_value": true,
      "site": "00b773f8",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "INT_ADD",
            "8",
            [
              "INT_SUB",
              [
                "leaf",
                "const:10:8"
              ]
            ]
          ],
          [
            "leaf",
            "const:80:8"
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
      "definition_site": "00b773e0",
      "incomplete_value": true,
      "site": "00b773f8",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "INT_ADD",
            "8",
            [
              "INT_SUB",
              [
                "leaf",
                "const:10:8"
              ]
            ]
          ],
          [
            "leaf",
            "const:18:8"
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
      "definition_site": "00b774bc",
      "incomplete_value": true,
      "site": "00b774d4",
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
            "const:20:8"
          ]
        ]
      ]
    },
    "old": null,
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
      "00b7744c",
      "READ",
      [
        "storage",
        "00c9ac18",
        null,
        "pointer"
      ]
    ],
    [
      "00b77450",
      "READ",
      [
        "storage",
        "00c9b840",
        null,
        "pointer"
      ]
    ],
    [
      "unmatched:00b773ec",
      "DATA",
      [
        "storage",
        "00c90bd0",
        null,
        "pointer"
      ]
    ]
  ],
  "added": [
    [
      "00b7744c",
      "READ",
      [
        "storage",
        "00c9ace8",
        null,
        "pointer"
      ]
    ],
    [
      "00b77450",
      "READ",
      [
        "storage",
        "00c9b910",
        null,
        "pointer"
      ]
    ],
    [
      "00b77488",
      "DATA",
      [
        "storage",
        "00c90ca0",
        null,
        "pointer"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b773f8 ["INT_ADD", "register:40f0:8", ["const:b773f8:8", "const:4:8"]]
- 00b773f8 ["CALL", null, ["callee:00c582b0:8"]]
+ 00b77494 ["INT_ADD", "register:40f0:8", ["const:b77494:8", "const:4:8"]]
+ 00b77494 ["CALL", null, ["callee:00c582b0:8"]]
- 00b77438 ["INT_ADD", "register:40f0:8", ["const:b77438:8", "const:4:8"]]
- 00b77438 ["CALL", null, ["callee:00c5a870:8"]]
+ 00b774d4 ["INT_ADD", "register:40f0:8", ["const:b774d4:8", "const:4:8"]]
+ 00b774d4 ["CALL", null, ["callee:00c5a870:8"]]
- 00b77474 ["INT_ADD", "register:40f0:8", ["const:b77474:8", "const:4:8"]]
- 00b77474 ["CALL", null, ["callee:00c58a30:8"]]
+ 00b77510 ["INT_ADD", "register:40f0:8", ["const:b77510:8", "const:4:8"]]
+ 00b77510 ["CALL", null, ["callee:00c58a30:8"]]
~~~


<a id="compare-75bcb64575c68bf36bfdee7b2cf796d3"></a>

### [`00b7752c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b77/00b7752c.md) → [`00b775c8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b77/00b775c8.md) _ZN11flatbuffers6Parser13ParseAnyValueERNS_5ValueEPNS_8FieldDefEmPKNS_9StructDefEmb

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 2件 [`00b7752c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b77/00b7752c.md) [`00c5c530`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5c/00c5c530.md) · 呼出先 29件 [`00b5abb4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b5a/00b5abb4.md) [`00b7752c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b77/00b7752c.md) [`00b780bc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b78/00b780bc.md) [`00b78960`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b78/00b78960.md) [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md)
- 新版 呼出元 2件 [`00b775c8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b77/00b775c8.md) [`00c5c600`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5c600.md) · 呼出先 29件 [`00b5ac50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b5a/00b5ac50.md) [`00b775c8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b77/00b775c8.md) [`00b78158`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b78/00b78158.md) [`00b789fc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b78/00b789fc.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, constant, control_flow, local_def_use, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 95.27% / 新版 95.27%

優先判定に残った影響 `call_argument_candidate` 7件, `unresolved_branch_alignment` 6件, `unresolved_call_alignment` 1件, `unresolved_store_alignment` 3件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "00b77664",
      "incomplete_value": true,
      "site": "00b77670",
      "value": [
        "live",
        "register:40a8:8"
      ]
    },
    "ordinal": 4,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b77730",
      "incomplete_value": true,
      "site": "00b77744",
      "value": [
        "LOAD",
        "8",
        [
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
                "register:40a0:8"
              ],
              [
                "leaf",
                "const:8:8"
              ]
            ]
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
    "new": {
      "definition_site": "00b77734",
      "incomplete_value": true,
      "site": "00b77744",
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
            "const:20:8"
          ]
        ]
      ]
    },
    "old": null,
    "ordinal": 6,
    "slot": 3
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "00b77620",
      "DATA",
      [
        "storage",
        "0030e0a7",
        "switchD_00b77594::switchdataD_0030e0a7",
        "byte"
      ]
    ],
    [
      "unmatched:00b77800",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b778c8"
      ]
    ],
    [
      "unmatched:00b77848",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b77b50"
      ]
    ]
  ],
  "added": [
    [
      "00b77620",
      "DATA",
      [
        "storage",
        "0030e0e7",
        "switchD_00b77630::switchdataD_0030e0e7",
        "byte"
      ]
    ],
    [
      "00b7789c",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b778c8"
      ]
    ],
    [
      "00b778e4",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b77b50"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b77670 ["INT_ADD", "register:40f0:8", ["const:b77670:8", "const:4:8"]]
- 00b77670 ["CALL", null, ["callee:00c5c880:8"]]
+ 00b7770c ["INT_ADD", "register:40f0:8", ["const:b7770c:8", "const:4:8"]]
+ 00b7770c ["CALL", null, ["callee:00c5c880:8"]]
- 00b776a8 ["INT_ADD", "register:40f0:8", ["const:b776a8:8", "const:4:8"]]
- 00b776a8 ["CALL", null, ["callee:00c5c550:8"]]
+ 00b77744 ["INT_ADD", "register:40f0:8", ["const:b77744:8", "const:4:8"]]
+ 00b77744 ["CALL", null, ["callee:00c5c550:8"]]
- 00b77860 ["INT_ADD", "register:40f0:8", ["const:b77860:8", "const:4:8"]]
- 00b77860 ["CALL", null, ["callee:00b5ac50:8"]]
+ 00b778fc ["INT_ADD", "register:40f0:8", ["const:b778fc:8", "const:4:8"]]
+ 00b778fc ["CALL", null, ["callee:00b5ac50:8"]]
~~~


<a id="compare-e2dcb453854c3d69e3c11a2dd98846c2"></a>

### [`00b780bc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b78/00b780bc.md) → [`00b78158`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b78/00b78158.md) FUN_00b78158

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 5件 [`00b75440`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b75/00b75440.md) [`00b7752c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b77/00b7752c.md) [`00b78e04`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b78/00b78e04.md) [`00b7b278`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b7b/00b7b278.md) [`00b7bffc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b7b/00b7bffc.md) · 呼出先 12件 [`00b98720`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b98/00b98720.md) [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md) [`00c57f80`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57f80.md)
- 新版 呼出元 5件 [`00b754dc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b75/00b754dc.md) [`00b775c8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b77/00b775c8.md) [`00b78ea0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b78/00b78ea0.md) [`00b7b314`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b7b/00b7b314.md) [`00b7c098`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b7c/00b7c098.md) · 呼出先 12件 [`00b987bc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b98/00b987bc.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md) [`00c58050`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58050.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 97.15% / 新版 97.15%

優先判定に残った影響 `call_argument_candidate` 7件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b782e8",
      "incomplete_value": false,
      "site": "00b782fc",
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
            "const:dfc:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b7824c",
      "incomplete_value": false,
      "site": "00b78260",
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
            "const:dbc:8"
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
      "definition_site": "00b7830c",
      "incomplete_value": false,
      "site": "00b7832c",
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
            "const:ecd:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b78270",
      "incomplete_value": false,
      "site": "00b78290",
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
            "const:e8d:8"
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
    "new": {
      "definition_site": "00b78350",
      "incomplete_value": false,
      "site": "00b78358",
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
            "const:b69:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b782b4",
      "incomplete_value": false,
      "site": "00b782bc",
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
            "const:bb6:8"
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
      "00b78198",
      "READ",
      [
        "storage",
        "00c9b830",
        null,
        "pointer"
      ]
    ],
    [
      "00b781dc",
      "READ",
      [
        "storage",
        "011261e0",
        "flatbuffers::ClassicLocale::instance_",
        "undefined8"
      ]
    ],
    [
      "00b781f0",
      "READ",
      [
        "storage",
        "011261e0",
        "flatbuffers::ClassicLocale::instance_",
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00b78198",
      "READ",
      [
        "storage",
        "00c9b900",
        null,
        "pointer"
      ]
    ],
    [
      "00b781dc",
      "READ",
      [
        "storage",
        "011262e0",
        "flatbuffers::ClassicLocale::instance_",
        "undefined8"
      ]
    ],
    [
      "00b781f0",
      "READ",
      [
        "storage",
        "011262e0",
        "flatbuffers::ClassicLocale::instance_",
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b78260 ["INT_ADD", "register:40f0:8", ["const:b78260:8", "const:4:8"]]
- 00b78260 ["CALL", null, ["callee:00c590a0:8"]]
+ 00b782fc ["INT_ADD", "register:40f0:8", ["const:b782fc:8", "const:4:8"]]
+ 00b782fc ["CALL", null, ["callee:00c590a0:8"]]
- 00b78290 ["INT_ADD", "register:40f0:8", ["const:b78290:8", "const:4:8"]]
- 00b78290 ["CALL", null, ["callee:00c58050:8"]]
+ 00b7832c ["INT_ADD", "register:40f0:8", ["const:b7832c:8", "const:4:8"]]
+ 00b7832c ["CALL", null, ["callee:00c58050:8"]]
- 00b782bc ["INT_ADD", "register:40f0:8", ["const:b782bc:8", "const:4:8"]]
- 00b782bc ["CALL", null, ["callee:00c58180:8"]]
+ 00b78358 ["INT_ADD", "register:40f0:8", ["const:b78358:8", "const:4:8"]]
+ 00b78358 ["CALL", null, ["callee:00c58180:8"]]
~~~


<a id="compare-7582fd720b94e59b7e9a4f90368cbaee"></a>

### [`00b78960`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b78/00b78960.md) → [`00b789fc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b78/00b789fc.md) FUN_00b789fc

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 5件 [`00b75440`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b75/00b75440.md) [`00b7752c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b77/00b7752c.md) [`00b78e04`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b78/00b78e04.md) [`00b7b278`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b7b/00b7b278.md) [`00b7bffc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b7b/00b7bffc.md) · 呼出先 12件 [`00b97f00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b97/00b97f00.md) [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md) [`00c57f80`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57f80.md)
- 新版 呼出元 5件 [`00b754dc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b75/00b754dc.md) [`00b775c8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b77/00b775c8.md) [`00b78ea0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b78/00b78ea0.md) [`00b7b314`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b7b/00b7b314.md) [`00b7c098`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b7c/00b7c098.md) · 呼出先 12件 [`00b97f9c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b97/00b97f9c.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md) [`00c58050`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58050.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 97.15% / 新版 97.15%

優先判定に残った影響 `call_argument_candidate` 7件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b78b8c",
      "incomplete_value": false,
      "site": "00b78ba0",
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
            "const:dfc:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b78af0",
      "incomplete_value": false,
      "site": "00b78b04",
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
            "const:dbc:8"
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
      "definition_site": "00b78bb0",
      "incomplete_value": false,
      "site": "00b78bd0",
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
            "const:ecd:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b78b14",
      "incomplete_value": false,
      "site": "00b78b34",
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
            "const:e8d:8"
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
    "new": {
      "definition_site": "00b78bf4",
      "incomplete_value": false,
      "site": "00b78bfc",
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
            "const:b69:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b78b58",
      "incomplete_value": false,
      "site": "00b78b60",
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
            "const:bb6:8"
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
      "00b78a3c",
      "READ",
      [
        "storage",
        "00c9b830",
        null,
        "pointer"
      ]
    ],
    [
      "00b78a80",
      "READ",
      [
        "storage",
        "011261e0",
        "flatbuffers::ClassicLocale::instance_",
        "undefined8"
      ]
    ],
    [
      "00b78a94",
      "READ",
      [
        "storage",
        "011261e0",
        "flatbuffers::ClassicLocale::instance_",
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00b78a3c",
      "READ",
      [
        "storage",
        "00c9b900",
        null,
        "pointer"
      ]
    ],
    [
      "00b78a80",
      "READ",
      [
        "storage",
        "011262e0",
        "flatbuffers::ClassicLocale::instance_",
        "undefined8"
      ]
    ],
    [
      "00b78a94",
      "READ",
      [
        "storage",
        "011262e0",
        "flatbuffers::ClassicLocale::instance_",
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b78b04 ["INT_ADD", "register:40f0:8", ["const:b78b04:8", "const:4:8"]]
- 00b78b04 ["CALL", null, ["callee:00c590a0:8"]]
+ 00b78ba0 ["INT_ADD", "register:40f0:8", ["const:b78ba0:8", "const:4:8"]]
+ 00b78ba0 ["CALL", null, ["callee:00c590a0:8"]]
- 00b78b34 ["INT_ADD", "register:40f0:8", ["const:b78b34:8", "const:4:8"]]
- 00b78b34 ["CALL", null, ["callee:00c58050:8"]]
+ 00b78bd0 ["INT_ADD", "register:40f0:8", ["const:b78bd0:8", "const:4:8"]]
+ 00b78bd0 ["CALL", null, ["callee:00c58050:8"]]
- 00b78b60 ["INT_ADD", "register:40f0:8", ["const:b78b60:8", "const:4:8"]]
- 00b78b60 ["CALL", null, ["callee:00c58180:8"]]
+ 00b78bfc ["INT_ADD", "register:40f0:8", ["const:b78bfc:8", "const:4:8"]]
+ 00b78bfc ["CALL", null, ["callee:00c58180:8"]]
~~~


<a id="compare-1a749605fe1e1a57dc72dff538abb28f"></a>

### [`00b78e04`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b78/00b78e04.md) → [`00b78ea0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b78/00b78ea0.md) _ZN11flatbuffers6Parser10ParseTableERKNS_9StructDefEPNSt6__ndk112basic_stringIcNS4_11char_traitsIcEENS4_9allocatorIcEEEEPj

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`00c5c480`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5c/00c5c480.md) · 呼出先 41件 [`00b76d2c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b76/00b76d2c.md) [`00b780bc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b78/00b780bc.md) [`00b78960`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b78/00b78960.md) [`00b7d130`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b7d/00b7d130.md) [`00b7d688`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b7d/00b7d688.md)
- 新版 呼出元 1件 [`00c5c550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5c550.md) · 呼出先 41件 [`00b76dc8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b76/00b76dc8.md) [`00b78158`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b78/00b78158.md) [`00b789fc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b78/00b789fc.md) [`00b7d1cc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b7d/00b7d1cc.md) [`00b7d724`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b7d/00b7d724.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, constant, control_flow, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, store_value, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 56.44% / 新版 56.44%

優先判定に残った影響 `call_argument_candidate` 7件, `store_value` 3件, `unresolved_branch_alignment` 180件, `unresolved_call_alignment` 27件, `unresolved_store_alignment` 85件

アドレスに依存する影響 `store_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00b79250",
      "incomplete_value": true,
      "site": "00b79264",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:77a:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b791b4",
      "incomplete_value": true,
      "site": "00b791c8",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:749:8"
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
      "definition_site": "00b79250",
      "incomplete_value": true,
      "site": "00b79264",
      "value": [
        "LOAD",
        "16",
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
      "definition_site": "00b791b4",
      "incomplete_value": true,
      "site": "00b791c8",
      "value": [
        "LOAD",
        "16",
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
    "ordinal": 48,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00b79254",
      "incomplete_value": true,
      "site": "00b79268",
      "value": [
        "LOAD",
        "16",
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
                "const:1e:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b791b8",
      "incomplete_value": true,
      "site": "00b791cc",
      "value": [
        "LOAD",
        "16",
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
                "const:1e:8"
              ]
            ]
          ]
        ]
      ]
    },
    "ordinal": 49,
    "slot": 2
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00b78e3c",
      "WRITE",
      [
        "storage",
        "Stack[-0x70]",
        null,
        null
      ]
    ],
    [
      "00b78f88",
      "READ",
      [
        "storage",
        "002c27d0",
        null,
        null
      ]
    ],
    [
      "unmatched:00b78f0c",
      "WRITE",
      [
        "storage",
        "Stack[-0x100]",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "00b78ed8",
      "WRITE",
      [
        "storage",
        "Stack[-0x70]",
        null,
        null
      ]
    ],
    [
      "00b78f88",
      "READ",
      [
        "storage",
        "002c2810",
        null,
        null
      ]
    ],
    [
      "00b78fa8",
      "WRITE",
      [
        "storage",
        "Stack[-0x100]",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 00b78ff4 ["INT_ADD", "register:40f0:8", ["const:b78ff4:8", "const:4:8"]]
- 00b78ff4 ["CALL", null, ["callee:00c58180:8"]]
+ 00b79090 ["INT_ADD", "register:40f0:8", ["const:b79090:8", "const:4:8"]]
+ 00b79090 ["CALL", null, ["callee:00c58180:8"]]
- 00b7912c ["INT_ADD", "register:40f0:8", ["const:b7912c:8", "const:4:8"]]
- 00b7912c ["CALL", null, ["callee:00c5c820:8"]]
+ 00b791c8 ["INT_ADD", "register:40f0:8", ["const:b791c8:8", "const:4:8"]]
+ 00b791c8 ["CALL", null, ["callee:00c5c820:8"]]
- 00b79148 ["BRANCH", null, ["local:b39:8"]]
+ 00b791e4 ["BRANCH", null, ["local:b40:8"]]
~~~


<a id="compare-435479f1b8227f155f0b02a6cf418f24"></a>

### [`00b7b278`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b7b/00b7b278.md) → [`00b7b314`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b7b/00b7b314.md) _ZN11flatbuffers6Parser11ParseVectorERKNS_4TypeEPjPNS_8FieldDefEm

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`00c5c4e0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5c/00c5c4e0.md) · 呼出先 31件 [`00b76d2c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b76/00b76d2c.md) [`00b780bc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b78/00b780bc.md) [`00b78960`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b78/00b78960.md) [`00b7d130`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b7d/00b7d130.md) [`00b7d688`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b7d/00b7d688.md)
- 新版 呼出元 1件 [`00c5c5b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5c5b0.md) · 呼出先 31件 [`00b76dc8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b76/00b76dc8.md) [`00b78158`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b78/00b78158.md) [`00b789fc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b78/00b789fc.md) [`00b7d1cc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b7d/00b7d1cc.md) [`00b7d724`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b7d/00b7d724.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, constant, control_flow, local_def_use, memory_read, memory_read_count, operands_and_dependencies, operation_sequence, store_value, unresolved_branch_alignment, unresolved_call_alignment, unresolved_return_alignment, unresolved_store_alignment

命令の説明率　旧版 72.83% / 新版 72.83%

優先判定に残った影響 `call_argument_candidate` 3件, `store_value` 1件, `unresolved_branch_alignment` 30件, `unresolved_call_alignment` 7件, `unresolved_return_alignment` 1件, `unresolved_store_alignment` 27件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00b7b6c8",
      "incomplete_value": true,
      "site": "00b7b6c8",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:9f9:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b7b62c",
      "incomplete_value": true,
      "site": "00b7b62c",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:9b9:8"
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
    "new": null,
    "old": {
      "definition_site": "00b7bac8",
      "incomplete_value": true,
      "site": "00b7bacc",
      "value": [
        "live",
        "register:40b8:8"
      ]
    },
    "ordinal": 20,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "00b7bb40",
      "incomplete_value": true,
      "site": "00b7bb4c",
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
    "ordinal": 25,
    "slot": 3
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "00b7b3d4",
      "DATA",
      [
        "storage",
        "0030e0da",
        "switchD_00b7b344::switchdataD_0030e0da",
        "byte"
      ]
    ],
    [
      "00b7b4c0",
      "DATA",
      [
        "storage",
        "0030e0ed",
        "switchD_00b7b430::switchdataD_0030e0ed",
        "byte"
      ]
    ],
    [
      "00b7b520",
      "DATA",
      [
        "storage",
        "0030e100",
        "switchD_00b7b49c::switchdataD_0030e100",
        "byte"
      ]
    ]
  ],
  "added": [
    [
      "00b7b3d4",
      "DATA",
      [
        "storage",
        "0030e11a",
        "switchD_00b7b3e0::switchdataD_0030e11a",
        "byte"
      ]
    ],
    [
      "00b7b4c0",
      "DATA",
      [
        "storage",
        "0030e12d",
        "switchD_00b7b4cc::switchdataD_0030e12d",
        "byte"
      ]
    ],
    [
      "00b7b520",
      "DATA",
      [
        "storage",
        "0030e140",
        "switchD_00b7b538::switchdataD_0030e140",
        "byte"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b7bab0 ["INT_ADD", "register:40f0:8", ["const:b7bab0:8", "const:4:8"]]
- 00b7bab0 ["CALL", null, ["callee:00b7ef04:8"]]
+ 00b7bb4c ["INT_ADD", "register:40f0:8", ["const:b7bb4c:8", "const:4:8"]]
+ 00b7bb4c ["CALL", null, ["callee:00b7ef04:8"]]
- 00b7bacc ["INT_ADD", "register:40f0:8", ["const:b7bacc:8", "const:4:8"]]
- 00b7bacc ["CALL", null, ["callee:00c5c300:8"]]
+ 00b7bb68 ["INT_ADD", "register:40f0:8", ["const:b7bb68:8", "const:4:8"]]
+ 00b7bb68 ["CALL", null, ["callee:00c5c300:8"]]
+ 00b7bacc ["COPY", "tmp:0:8", ["register:40a8:8"]]
+ 00b7bacc ["LOAD", "tmp:1:4", ["const:1b1:8", "tmp:0:8"]]
+ 00b7bacc ["INT_ZEXT", "register:4040:8", ["tmp:1:4"]]
~~~


<a id="compare-b060201f689e7ef8316134bef4a3f224"></a>

### [`00b7bffc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b7b/00b7bffc.md) → [`00b7c098`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b7c/00b7c098.md) _ZN11flatbuffers6Parser10ParseArrayERNS_5ValueE

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 1件 [`00c5c460`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5c/00c5c460.md) · 呼出先 31件 [`00b76d2c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b76/00b76d2c.md) [`00b780bc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b78/00b780bc.md) [`00b78960`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b78/00b78960.md) [`00b7d130`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b7d/00b7d130.md) [`00b7d688`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b7d/00b7d688.md)
- 新版 呼出元 1件 [`00c5c530`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5c530.md) · 呼出先 31件 [`00b76dc8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b76/00b76dc8.md) [`00b78158`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b78/00b78158.md) [`00b789fc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b78/00b789fc.md) [`00b7d1cc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b7d/00b7d1cc.md) [`00b7d724`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b7d/00b7d724.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 62.82% / 新版 62.82%

優先判定に残った影響 `call_argument_candidate` 3件, `unresolved_branch_alignment` 33件, `unresolved_call_alignment` 9件, `unresolved_store_alignment` 53件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "00b7c33c",
      "incomplete_value": true,
      "site": "00b7c348",
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
            "const:a0:8"
          ]
        ]
      ]
    },
    "ordinal": 9,
    "slot": 3
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "00b7c5a0",
      "incomplete_value": true,
      "site": "00b7c5ac",
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
            "const:a0:8"
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
    "new": {
      "definition_site": "00b7ca30",
      "incomplete_value": false,
      "site": "00b7ca40",
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
            "const:b69:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b7c994",
      "incomplete_value": false,
      "site": "00b7c9a4",
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
            "const:bb6:8"
          ]
        ]
      ]
    },
    "ordinal": 41,
    "slot": 1
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00b7c000",
      "WRITE",
      [
        "storage",
        "Stack[-0x60]",
        null,
        null
      ]
    ],
    [
      "unmatched:00b7c004",
      "WRITE",
      [
        "storage",
        "Stack[-0x50]",
        null,
        null
      ]
    ],
    [
      "unmatched:00b7c008",
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
      "00b7c09c",
      "WRITE",
      [
        "storage",
        "Stack[-0x60]",
        null,
        null
      ]
    ],
    [
      "00b7c0a0",
      "WRITE",
      [
        "storage",
        "Stack[-0x50]",
        null,
        null
      ]
    ],
    [
      "00b7c0a4",
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
- 00b7c348 ["INT_ADD", "register:40f0:8", ["const:b7c348:8", "const:4:8"]]
- 00b7c348 ["CALL", null, ["callee:00b7dee8:8"]]
+ 00b7c3e4 ["INT_ADD", "register:40f0:8", ["const:b7c3e4:8", "const:4:8"]]
+ 00b7c3e4 ["CALL", null, ["callee:00b7dee8:8"]]
+ 00b7c348 ["INT_RIGHT", "tmp:0:4", ["register:4050:4", "const:0:4"]]
+ 00b7c348 ["INT_AND", "tmp:1:4", ["tmp:0:4", "const:1:4"]]
+ 00b7c348 ["INT_EQUAL", "tmp:2:1", ["tmp:1:4", "const:0:4"]]
+ 00b7c348 ["INT_EQUAL", "tmp:3:1", ["tmp:2:1", "const:0:1"]]
- 00b7c510 ["INT_NOTEQUAL", "tmp:0:1", ["register:4040:4", "const:0:4"]]
- 00b7c510 ["CBRANCH", null, ["local:b6:8", "tmp:0:1"]]
+ 00b7c5ac ["INT_NOTEQUAL", "tmp:0:1", ["register:4040:4", "const:0:4"]]
+ 00b7c5ac ["CBRANCH", null, ["local:b4:8", "tmp:0:1"]]
~~~


<a id="compare-9634eb38c0da081f9b9d60ea5e3e2a4f"></a>

### [`00b7ca48`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b7c/00b7ca48.md) → [`00b7cae4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b7c/00b7cae4.md) _ZN11flatbuffers6Parser9ParseHashERNS_5ValueEPNS_8FieldDefE

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 1件 [`00c5c7b0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5c/00c5c7b0.md) · 呼出先 11件 [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md) [`00c5b850`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5b850.md) [`00c5bfe0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5bfe0.md) [`00c5bff0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5bff0.md)
- 新版 呼出元 1件 [`00c5c880`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5c880.md) · 呼出先 11件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md) [`00c5b920`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b920.md) [`00c5c0b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5c0b0.md) [`00c5c0c0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5c0c0.md)

変更の種類 branch_condition_or_target, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 46.05% / 新版 46.05%

優先判定に残った影響 `unresolved_branch_alignment` 22件, `unresolved_call_alignment` 12件, `unresolved_store_alignment` 2件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00b7cae4",
      "DATA",
      [
        "storage",
        "0030e186",
        "switchD_00b7caec::switchdataD_0030e186",
        "byte"
      ]
    ],
    [
      "00b7cb88",
      "COMPUTED_JUMP",
      [
        "local_branch",
        "unmatched:00b7cb50"
      ]
    ],
    [
      "00b7cb88",
      "COMPUTED_JUMP",
      [
        "local_branch",
        "unmatched:00b7cb28"
      ]
    ]
  ],
  "added": [
    [
      "00b7cb80",
      "DATA",
      [
        "storage",
        "0030e1c6",
        "switchD_00b7cb88::switchdataD_0030e1c6",
        "byte"
      ]
    ],
    [
      "00b7cb88",
      "COMPUTED_JUMP",
      [
        "local_branch",
        "00b7cbec"
      ]
    ],
    [
      "00b7cb88",
      "COMPUTED_JUMP",
      [
        "local_branch",
        "00b7cbc4"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b7caa4 ["INT_ADD", "register:40f0:8", ["const:b7caa4:8", "const:4:8"]]
- 00b7caa4 ["CALL", null, ["callee:00c5cb40:8"]]
+ 00b7cb40 ["INT_ADD", "register:40f0:8", ["const:b7cb40:8", "const:4:8"]]
+ 00b7cb40 ["CALL", null, ["callee:00c5cb40:8"]]
- 00b7cac4 ["INT_ADD", "register:40f0:8", ["const:b7cac4:8", "const:4:8"]]
- 00b7cac4 ["CALL", null, ["callee:00c57f80:8"]]
+ 00b7cb60 ["INT_ADD", "register:40f0:8", ["const:b7cb60:8", "const:4:8"]]
+ 00b7cb60 ["CALL", null, ["callee:00c57f80:8"]]
- 00b7cad4 ["BOOL_NEGATE", "tmp:0:1", ["register:101:1"]]
- 00b7cad4 ["BOOL_AND", "tmp:1:1", ["register:102:1", "tmp:0:1"]]
- 00b7cad4 ["CBRANCH", null, ["local:b103:8", "tmp:1:1"]]
+ 00b7cb70 ["BOOL_NEGATE", "tmp:0:1", ["register:101:1"]]
+ 00b7cb70 ["BOOL_AND", "tmp:1:1", ["register:102:1", "tmp:0:1"]]
+ 00b7cb70 ["CBRANCH", null, ["local:b102:8", "tmp:1:1"]]
~~~


<a id="compare-5a1adefec69cb325f1773c9ce7075b10"></a>

### [`00b7d04c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b7d/00b7d04c.md) → [`00b7d0e8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b7d/00b7d0e8.md) _ZN11flatbuffers21FlatBufferBuilderImplILb0EE10AddElementIhEEvtT_S3_

根拠 `symbol` · `raw_instruction_pcode` · `bounded` · 参照 `equal` · `cfg_change`

- 旧版 呼出元 1件 [`00c5c1e0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5c/00c5c1e0.md) · 呼出先 1件 [`00c5c1a0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5c/00c5c1a0.md)
- 新版 呼出元 1件 [`00c5c2b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5c2b0.md) · 呼出先 1件 [`00c5c270`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5c270.md)

変更の種類 branch_condition_or_target, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_store_alignment

命令の説明率　旧版 92.98% / 新版 92.98%

優先判定に残った影響 `unresolved_store_alignment` 1件

~~~diff
- 00b7d078 ["INT_EQUAL", "tmp:0:1", ["register:4040:4", "const:0:4"]]
- 00b7d078 ["CBRANCH", null, ["local:b14:8", "tmp:0:1"]]
+ 00b7d114 ["INT_EQUAL", "tmp:0:1", ["register:4040:4", "const:0:4"]]
+ 00b7d114 ["CBRANCH", null, ["local:b12:8", "tmp:0:1"]]
- 00b7d0a4 ["INT_ADD", "register:40f0:8", ["const:b7d0a4:8", "const:4:8"]]
- 00b7d0a4 ["CALL", null, ["callee:00c5c270:8"]]
+ 00b7d140 ["INT_ADD", "register:40f0:8", ["const:b7d140:8", "const:4:8"]]
+ 00b7d140 ["CALL", null, ["callee:00c5c270:8"]]
- 00b7d0d8 ["BOOL_NEGATE", "tmp:0:1", ["register:101:1"]]
- 00b7d0d8 ["CBRANCH", null, ["local:b11:8", "tmp:0:1"]]
+ 00b7d174 ["BOOL_NEGATE", "tmp:0:1", ["register:101:1"]]
+ 00b7d174 ["CBRANCH", null, ["local:b10:8", "tmp:0:1"]]
~~~


<a id="compare-9083d0977abfe382d7a995a97800bd31"></a>

### [`00b7d130`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b7d/00b7d130.md) → [`00b7d1cc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b7d/00b7d1cc.md) FUN_00b7d1cc

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 4件 [`00b75440`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b75/00b75440.md) [`00b78e04`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b78/00b78e04.md) [`00b7b278`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b7b/00b7b278.md) [`00b7bffc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b7b/00b7bffc.md) · 呼出先 12件 [`00b980a0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b98/00b980a0.md) [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md) [`00c57f80`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57f80.md)
- 新版 呼出元 4件 [`00b754dc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b75/00b754dc.md) [`00b78ea0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b78/00b78ea0.md) [`00b7b314`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b7b/00b7b314.md) [`00b7c098`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b7c/00b7c098.md) · 呼出先 12件 [`00b9813c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b98/00b9813c.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md) [`00c58050`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58050.md)

変更の種類 branch_condition_or_target, call, call_argument_candidate, call_count, cfg_edge_inventory, constant, control_flow, local_def_use, memory_read, memory_read_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 84.21% / 新版 84.21%

優先判定に残った影響 `call_argument_candidate` 5件, `unresolved_branch_alignment` 2件, `unresolved_call_alignment` 10件, `unresolved_store_alignment` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "00b7d250",
      "incomplete_value": true,
      "site": "00b7d260",
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
      "definition_site": "00b7d398",
      "incomplete_value": true,
      "site": "00b7d3a4",
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
    "ordinal": 6,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b7d39c",
      "incomplete_value": false,
      "site": "00b7d3a4",
      "value": [
        "leaf",
        "const:1:8"
      ]
    },
    "old": null,
    "ordinal": 6,
    "slot": 3
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "00b7d20c",
      "READ",
      [
        "storage",
        "00c9b830",
        null,
        "pointer"
      ]
    ],
    [
      "00b7d250",
      "READ",
      [
        "storage",
        "011261e0",
        "flatbuffers::ClassicLocale::instance_",
        "undefined8"
      ]
    ],
    [
      "00b7d264",
      "READ",
      [
        "storage",
        "011261e0",
        "flatbuffers::ClassicLocale::instance_",
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00b7d20c",
      "READ",
      [
        "storage",
        "00c9b900",
        null,
        "pointer"
      ]
    ],
    [
      "00b7d250",
      "READ",
      [
        "storage",
        "011262e0",
        "flatbuffers::ClassicLocale::instance_",
        "undefined8"
      ]
    ],
    [
      "00b7d264",
      "READ",
      [
        "storage",
        "011262e0",
        "flatbuffers::ClassicLocale::instance_",
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b7d260 ["INT_ADD", "register:40f0:8", ["const:b7d260:8", "const:4:8"]]
- 00b7d260 ["CALL", null, ["callee:00c580b0:8"]]
+ 00b7d2fc ["INT_ADD", "register:40f0:8", ["const:b7d2fc:8", "const:4:8"]]
+ 00b7d2fc ["CALL", null, ["callee:00c580b0:8"]]
- 00b7d308 ["INT_ADD", "register:40f0:8", ["const:b7d308:8", "const:4:8"]]
- 00b7d308 ["CALL", null, ["callee:00c58050:8"]]
+ 00b7d3a4 ["INT_ADD", "register:40f0:8", ["const:b7d3a4:8", "const:4:8"]]
+ 00b7d3a4 ["CALL", null, ["callee:00c58050:8"]]
- 00b7d378 ["INT_ADD", "register:40f0:8", ["const:b7d378:8", "const:4:8"]]
- 00b7d378 ["CALL", null, ["callee:00c57f80:8"]]
+ 00b7d414 ["INT_ADD", "register:40f0:8", ["const:b7d414:8", "const:4:8"]]
+ 00b7d414 ["CALL", null, ["callee:00c57f80:8"]]
~~~


<a id="compare-468a6e9e3a0500725d3478eb6ab9d39c"></a>

### [`00b7d688`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b7d/00b7d688.md) → [`00b7d724`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b7d/00b7d724.md) FUN_00b7d724

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 4件 [`00b75440`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b75/00b75440.md) [`00b78e04`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b78/00b78e04.md) [`00b7b278`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b7b/00b7b278.md) [`00b7bffc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b7b/00b7bffc.md) · 呼出先 12件 [`00b98240`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b98/00b98240.md) [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md) [`00c57f80`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57f80.md)
- 新版 呼出元 4件 [`00b754dc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b75/00b754dc.md) [`00b78ea0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b78/00b78ea0.md) [`00b7b314`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b7b/00b7b314.md) [`00b7c098`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b7c/00b7c098.md) · 呼出先 12件 [`00b982dc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b98/00b982dc.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md) [`00c58050`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58050.md)

変更の種類 branch_condition_or_target, call_argument_candidate, comparison, comparison_count, constant, control_flow, local_def_use, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_call_alignment, unresolved_return_alignment, unresolved_store_alignment

命令の説明率　旧版 84.21% / 新版 84.21%

優先判定に残った影響 `call_argument_candidate` 6件, `unresolved_branch_alignment` 3件, `unresolved_call_alignment` 7件, `unresolved_return_alignment` 1件, `unresolved_store_alignment` 11件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b7d8b8",
      "incomplete_value": false,
      "site": "00b7d8cc",
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
            "const:dfc:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b7d81c",
      "incomplete_value": false,
      "site": "00b7d830",
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
            "const:dbc:8"
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
      "definition_site": "00b7d8dc",
      "incomplete_value": false,
      "site": "00b7d8fc",
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
            "const:ecd:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b7d840",
      "incomplete_value": false,
      "site": "00b7d860",
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
            "const:e8d:8"
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
    "new": {
      "definition_site": "00b7d920",
      "incomplete_value": false,
      "site": "00b7d928",
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
            "const:b69:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b7d884",
      "incomplete_value": false,
      "site": "00b7d88c",
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
            "const:bb6:8"
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
      "00b7d764",
      "READ",
      [
        "storage",
        "00c9b830",
        null,
        "pointer"
      ]
    ],
    [
      "00b7d7a8",
      "READ",
      [
        "storage",
        "011261e0",
        "flatbuffers::ClassicLocale::instance_",
        "undefined8"
      ]
    ],
    [
      "00b7d7bc",
      "READ",
      [
        "storage",
        "011261e0",
        "flatbuffers::ClassicLocale::instance_",
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00b7d764",
      "READ",
      [
        "storage",
        "00c9b900",
        null,
        "pointer"
      ]
    ],
    [
      "00b7d7a8",
      "READ",
      [
        "storage",
        "011262e0",
        "flatbuffers::ClassicLocale::instance_",
        "undefined8"
      ]
    ],
    [
      "00b7d7bc",
      "READ",
      [
        "storage",
        "011262e0",
        "flatbuffers::ClassicLocale::instance_",
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b7d830 ["INT_ADD", "register:40f0:8", ["const:b7d830:8", "const:4:8"]]
- 00b7d830 ["CALL", null, ["callee:00c590a0:8"]]
+ 00b7d8cc ["INT_ADD", "register:40f0:8", ["const:b7d8cc:8", "const:4:8"]]
+ 00b7d8cc ["CALL", null, ["callee:00c590a0:8"]]
- 00b7d860 ["INT_ADD", "register:40f0:8", ["const:b7d860:8", "const:4:8"]]
- 00b7d860 ["CALL", null, ["callee:00c58050:8"]]
+ 00b7d8fc ["INT_ADD", "register:40f0:8", ["const:b7d8fc:8", "const:4:8"]]
+ 00b7d8fc ["CALL", null, ["callee:00c58050:8"]]
- 00b7d88c ["INT_ADD", "register:40f0:8", ["const:b7d88c:8", "const:4:8"]]
- 00b7d88c ["CALL", null, ["callee:00c58180:8"]]
+ 00b7d928 ["INT_ADD", "register:40f0:8", ["const:b7d928:8", "const:4:8"]]
+ 00b7d928 ["CALL", null, ["callee:00c58180:8"]]
~~~


<a id="compare-cdf76a072035d17934a8800cee38ed1f"></a>

### [`00b7dafc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b7d/00b7dafc.md) → [`00b7db98`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b7d/00b7db98.md) _ZN11flatbuffers21FlatBufferBuilderImplILb0EE10AddElementIsEEvtT_

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`00c5c1f0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5c/00c5c1f0.md) · 呼出先 1件 [`00c5c1a0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5c/00c5c1a0.md)
- 新版 呼出元 1件 [`00c5c2c0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5c2c0.md) · 呼出先 1件 [`00c5c270`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5c270.md)

変更の種類 branch_condition_or_target, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, operands_and_dependencies, operation_sequence, store_condition, unresolved_branch_alignment

命令の説明率　旧版 97.10% / 新版 97.10%

優先判定に残った影響 `store_condition` 1件, `unresolved_branch_alignment` 1件

~~~json
[
  {
    "confidence": "limited",
    "guard": [
      [
        "FALL_THROUGH",
        "00b7db20"
      ],
      [
        "FALL_THROUGH",
        "00b7dbbc"
      ]
    ],
    "kind": "store_condition",
    "new": {
      "definition_site": "00b7dbbc",
      "incomplete_value": true,
      "site": "00b7dbc4",
      "value": [
        "BOOL_AND",
        "1",
        [
          [
            "INT_LESSEQUAL",
            "1",
            [
              [
                "leaf",
                "const:1:8"
              ],
              "LOAD"
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
      "definition_site": "00b7db20",
      "incomplete_value": true,
      "site": "00b7db28",
      "value": [
        "BOOL_AND",
        "1",
        [
          [
            "INT_LESSEQUAL",
            "1",
            [
              [
                "leaf",
                "const:1:8"
              ],
              [
                "live",
                "register:4040:8"
              ]
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
      "unmatched:00b7db20",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b7dbc8"
      ]
    ]
  ],
  "added": [
    [
      "00b7dbbc",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b7dbc8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b7db1c ["COPY", "tmp:0:8", ["const:1:8"]]
- 00b7db1c ["INT_LESSEQUAL", "register:105:1", ["tmp:0:8", "register:4040:8"]]
- 00b7db1c ["INT_SBORROW", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00b7db1c ["INT_SUB", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 00b7db20 ["BOOL_NEGATE", "tmp:0:1", ["register:101:1"]]
- 00b7db20 ["BOOL_AND", "tmp:1:1", ["register:102:1", "tmp:0:1"]]
- 00b7db20 ["CBRANCH", null, ["local:b4:8", "tmp:1:1"]]
- 00b7db34 ["INT_EQUAL", "tmp:0:1", ["register:40b0:4", "const:0:4"]]
- 00b7db34 ["CBRANCH", null, ["local:b8:8", "tmp:0:1"]]
+ 00b7dbd0 ["INT_EQUAL", "tmp:0:1", ["register:40b0:4", "const:0:4"]]
+ 00b7dbd0 ["CBRANCH", null, ["local:b6:8", "tmp:0:1"]]
~~~


<a id="compare-b8c7a8ab1641321e3e42b329457c4241"></a>

### [`00b7de4c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b7d/00b7de4c.md) → [`00b7dee8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b7d/00b7dee8.md) FUN_00b7dee8

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 4件 [`00b75440`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b75/00b75440.md) [`00b78e04`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b78/00b78e04.md) [`00b7b278`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b7b/00b7b278.md) [`00b7bffc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b7b/00b7bffc.md) · 呼出先 12件 [`00b98580`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b98/00b98580.md) [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md) [`00c57f80`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57f80.md)
- 新版 呼出元 4件 [`00b754dc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b75/00b754dc.md) [`00b78ea0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b78/00b78ea0.md) [`00b7b314`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b7b/00b7b314.md) [`00b7c098`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b7c/00b7c098.md) · 呼出先 12件 [`00b9861c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b98/00b9861c.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md) [`00c58050`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58050.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, constant, control_flow, local_def_use, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 79.30% / 新版 79.30%

優先判定に残った影響 `call_argument_candidate` 3件, `unresolved_branch_alignment` 2件, `unresolved_call_alignment` 11件, `unresolved_store_alignment` 11件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b7e0a0",
      "incomplete_value": false,
      "site": "00b7e0c0",
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
            "const:ecd:8"
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
    "new": {
      "definition_site": "00b7e1ac",
      "incomplete_value": false,
      "site": "00b7e1cc",
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
            "const:ecd:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b7e110",
      "incomplete_value": false,
      "site": "00b7e130",
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
            "const:e8d:8"
          ]
        ]
      ]
    },
    "ordinal": 15,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b7e1dc",
      "incomplete_value": false,
      "site": "00b7e1f8",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:2a1000:8"
          ],
          [
            "leaf",
            "const:b6e:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b7e140",
      "incomplete_value": false,
      "site": "00b7e15c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:2a1000:8"
          ],
          [
            "leaf",
            "const:bbb:8"
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
      "00b7df28",
      "READ",
      [
        "storage",
        "00c9b830",
        null,
        "pointer"
      ]
    ],
    [
      "00b7df6c",
      "READ",
      [
        "storage",
        "011261e0",
        "flatbuffers::ClassicLocale::instance_",
        "undefined8"
      ]
    ],
    [
      "00b7df80",
      "READ",
      [
        "storage",
        "011261e0",
        "flatbuffers::ClassicLocale::instance_",
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00b7df28",
      "READ",
      [
        "storage",
        "00c9b900",
        null,
        "pointer"
      ]
    ],
    [
      "00b7df6c",
      "READ",
      [
        "storage",
        "011262e0",
        "flatbuffers::ClassicLocale::instance_",
        "undefined8"
      ]
    ],
    [
      "00b7df80",
      "READ",
      [
        "storage",
        "011262e0",
        "flatbuffers::ClassicLocale::instance_",
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b7e024 ["INT_ADD", "register:40f0:8", ["const:b7e024:8", "const:4:8"]]
- 00b7e024 ["CALL", null, ["callee:00c58050:8"]]
+ 00b7e0c0 ["INT_ADD", "register:40f0:8", ["const:b7e0c0:8", "const:4:8"]]
+ 00b7e0c0 ["CALL", null, ["callee:00c58050:8"]]
- 00b7e094 ["INT_ADD", "register:40f0:8", ["const:b7e094:8", "const:4:8"]]
- 00b7e094 ["CALL", null, ["callee:00c57f80:8"]]
+ 00b7e130 ["INT_ADD", "register:40f0:8", ["const:b7e130:8", "const:4:8"]]
+ 00b7e130 ["CALL", null, ["callee:00c57f80:8"]]
- 00b7e130 ["INT_ADD", "register:40f0:8", ["const:b7e130:8", "const:4:8"]]
- 00b7e130 ["CALL", null, ["callee:00c58050:8"]]
+ 00b7e1cc ["INT_ADD", "register:40f0:8", ["const:b7e1cc:8", "const:4:8"]]
+ 00b7e1cc ["CALL", null, ["callee:00c58050:8"]]
~~~


<a id="compare-deabf76c758259d5b51eb656d3eca32a"></a>

### [`00b7e2c0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b7e/00b7e2c0.md) → [`00b7e35c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b7e/00b7e35c.md) _ZN11flatbuffers21FlatBufferBuilderImplILb0EE11PushElementIijEET0_T_

根拠 `symbol` · `raw_instruction_pcode` · `bounded` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`00c5c240`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5c/00c5c240.md) · 呼出先 1件 [`00c5c1a0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5c/00c5c1a0.md)
- 新版 呼出元 1件 [`00c5c310`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5c310.md) · 呼出先 1件 [`00c5c270`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5c270.md)

変更の種類 branch_condition_or_target, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_store_alignment

命令の説明率　旧版 87.93% / 新版 87.93%

優先判定に残った影響 `unresolved_branch_alignment` 3件, `unresolved_store_alignment` 2件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00b7e2f8",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b7e3f4"
      ]
    ],
    [
      "unmatched:00b7e33c",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b7e3f4"
      ]
    ],
    [
      "00b7e3f0",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "unmatched:00b7e344"
      ]
    ]
  ],
  "added": [
    [
      "00b7e394",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b7e3f4"
      ]
    ],
    [
      "00b7e3d8",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b7e3f4"
      ]
    ],
    [
      "00b7e3f0",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b7e3e0"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b7e2f8 ["CBRANCH", null, ["local:b9:8", "register:101:1"]]
- 00b7e30c ["CBRANCH", null, ["local:b5:8", "register:102:1"]]
+ 00b7e3a8 ["CBRANCH", null, ["local:b7:8", "register:102:1"]]
- 00b7e318 ["INT_ADD", "register:40f0:8", ["const:b7e318:8", "const:4:8"]]
- 00b7e318 ["CALL", null, ["callee:00c5c270:8"]]
+ 00b7e3b4 ["INT_ADD", "register:40f0:8", ["const:b7e3b4:8", "const:4:8"]]
+ 00b7e3b4 ["CALL", null, ["callee:00c5c270:8"]]
~~~


<a id="compare-2940a970e938abfef87d380ceef69bf4"></a>

### [`00b7e3a8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b7e/00b7e3a8.md) → [`00b7e444`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b7e/00b7e444.md) _ZN11flatbuffers21FlatBufferBuilderImplILb0EE11PushElementIjjEET0_T_

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `equal` · `cfg_change`

- 旧版 呼出元 1件 [`00c5c250`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5c/00c5c250.md) · 呼出先 1件 [`00c5c1a0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5c/00c5c1a0.md)
- 新版 呼出元 1件 [`00c5c320`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5c320.md) · 呼出先 1件 [`00c5c270`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5c270.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, constant, control_flow, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b7e4f0",
      "incomplete_value": false,
      "site": "00b7e4f8",
      "value": [
        "leaf",
        "const:4:8"
      ]
    },
    "old": null,
    "ordinal": 1,
    "slot": 2
  }
]
~~~


~~~diff
- 00b7e45c ["INT_ADD", "register:40f0:8", ["const:b7e45c:8", "const:4:8"]]
- 00b7e45c ["CALL", null, ["callee:00c5c270:8"]]
+ 00b7e4f8 ["INT_ADD", "register:40f0:8", ["const:b7e4f8:8", "const:4:8"]]
+ 00b7e4f8 ["CALL", null, ["callee:00c5c270:8"]]
- 00b7e400 ["INT_ADD", "register:40f0:8", ["const:b7e400:8", "const:4:8"]]
- 00b7e400 ["CALL", null, ["callee:00c5c270:8"]]
+ 00b7e49c ["INT_ADD", "register:40f0:8", ["const:b7e49c:8", "const:4:8"]]
+ 00b7e49c ["CALL", null, ["callee:00c5c270:8"]]
- 00b7e450 ["BOOL_NEGATE", "tmp:0:1", ["register:101:1"]]
- 00b7e450 ["CBRANCH", null, ["local:b11:8", "tmp:0:1"]]
+ 00b7e4ec ["BOOL_NEGATE", "tmp:0:1", ["register:101:1"]]
+ 00b7e4ec ["CBRANCH", null, ["local:b10:8", "tmp:0:1"]]
~~~


<a id="compare-49b13638f70aa2fe4029f87ab09bb3d2"></a>

### [`00b7e490`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b7e/00b7e490.md) → [`00b7e52c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b7e/00b7e52c.md) FUN_00b7e52c

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 4件 [`00b75440`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b75/00b75440.md) [`00b78e04`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b78/00b78e04.md) [`00b7b278`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b7b/00b7b278.md) [`00b7bffc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b7b/00b7bffc.md) · 呼出先 12件 [`00b988c0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b98/00b988c0.md) [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md) [`00c57f80`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57f80.md)
- 新版 呼出元 4件 [`00b754dc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b75/00b754dc.md) [`00b78ea0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b78/00b78ea0.md) [`00b7b314`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b7b/00b7b314.md) [`00b7c098`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b7c/00b7c098.md) · 呼出先 12件 [`00b9895c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b98/00b9895c.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md) [`00c58050`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58050.md)

変更の種類 branch_condition_or_target, call, call_argument_candidate, call_count, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, local_def_use, memory_read, memory_read_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 76.61% / 新版 76.61%

優先判定に残った影響 `call_argument_candidate` 3件, `unresolved_branch_alignment` 2件, `unresolved_call_alignment` 11件, `unresolved_store_alignment` 12件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b7e65c",
      "incomplete_value": false,
      "site": "00b7e67c",
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
            "const:ecd:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b7e5c0",
      "incomplete_value": false,
      "site": "00b7e5e0",
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
            "const:e8d:8"
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
    "new": {
      "definition_site": "00b7e68c",
      "incomplete_value": false,
      "site": "00b7e6a8",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:2a1000:8"
          ],
          [
            "leaf",
            "const:b6e:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b7e5f0",
      "incomplete_value": false,
      "site": "00b7e60c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:2a1000:8"
          ],
          [
            "leaf",
            "const:bbb:8"
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
      "definition_site": "00b7e824",
      "incomplete_value": false,
      "site": "00b7e844",
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
            "const:ecd:8"
          ]
        ]
      ]
    },
    "old": null,
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
      "00b7e5c4",
      "UNCONDITIONAL_JUMP",
      [
        "local_branch",
        "unmatched:00b7e598"
      ]
    ],
    [
      "00b7e600",
      "UNCONDITIONAL_JUMP",
      [
        "local_branch",
        "unmatched:00b7e760"
      ]
    ],
    [
      "unmatched:00b7e59c",
      "PARAM",
      [
        "storage",
        "002b6dbc",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "00b7e5c4",
      "UNCONDITIONAL_JUMP",
      [
        "local_branch",
        "00b7e634"
      ]
    ],
    [
      "00b7e600",
      "UNCONDITIONAL_JUMP",
      [
        "local_branch",
        "00b7e7fc"
      ]
    ],
    [
      "00b7e638",
      "PARAM",
      [
        "storage",
        "002b6dfc",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b7e5e0 ["INT_ADD", "register:40f0:8", ["const:b7e5e0:8", "const:4:8"]]
- 00b7e5e0 ["CALL", null, ["callee:00c58050:8"]]
+ 00b7e67c ["INT_ADD", "register:40f0:8", ["const:b7e67c:8", "const:4:8"]]
+ 00b7e67c ["CALL", null, ["callee:00c58050:8"]]
- 00b7e60c ["INT_ADD", "register:40f0:8", ["const:b7e60c:8", "const:4:8"]]
- 00b7e60c ["CALL", null, ["callee:00c58050:8"]]
+ 00b7e6a8 ["INT_ADD", "register:40f0:8", ["const:b7e6a8:8", "const:4:8"]]
+ 00b7e6a8 ["CALL", null, ["callee:00c58050:8"]]
- 00b7e67c ["INT_SUB", "register:4040:8", ["register:40e8:8", "const:60:8"]]
~~~


<a id="compare-b8c58f6d97811ae90d568da6f9a3dd60"></a>

### [`00b7e954`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b7e/00b7e954.md) → [`00b7e9f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b7e/00b7e9f0.md) FUN_00b7e9f0

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 4件 [`00b75440`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b75/00b75440.md) [`00b78e04`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b78/00b78e04.md) [`00b7b278`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b7b/00b7b278.md) [`00b7bffc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b7b/00b7bffc.md) · 呼出先 12件 [`00b98a60`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b98/00b98a60.md) [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md) [`00c57f80`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57f80.md)
- 新版 呼出元 4件 [`00b754dc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b75/00b754dc.md) [`00b78ea0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b78/00b78ea0.md) [`00b7b314`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b7b/00b7b314.md) [`00b7c098`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b7c/00b7c098.md) · 呼出先 12件 [`00b98afc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b98/00b98afc.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md) [`00c58050`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58050.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 97.39% / 新版 97.39%

優先判定に残った影響 `call_argument_candidate` 7件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b7eb10",
      "incomplete_value": false,
      "site": "00b7eb24",
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
            "const:dfc:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b7ea74",
      "incomplete_value": false,
      "site": "00b7ea88",
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
            "const:dbc:8"
          ]
        ]
      ]
    },
    "ordinal": 4,
    "slot": 3
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b7eb34",
      "incomplete_value": false,
      "site": "00b7eb54",
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
            "const:ecd:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b7ea98",
      "incomplete_value": false,
      "site": "00b7eab8",
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
            "const:e8d:8"
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
    "new": {
      "definition_site": "00b7eb64",
      "incomplete_value": false,
      "site": "00b7eb80",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:2a1000:8"
          ],
          [
            "leaf",
            "const:b6e:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b7eac8",
      "incomplete_value": false,
      "site": "00b7eae4",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:2a1000:8"
          ],
          [
            "leaf",
            "const:bbb:8"
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
      "00b7eb10",
      "PARAM",
      [
        "storage",
        "002b6dbc",
        null,
        "string"
      ]
    ],
    [
      "00b7eb34",
      "PARAM",
      [
        "storage",
        "002b5e8d",
        null,
        null
      ]
    ],
    [
      "00b7eb64",
      "PARAM",
      [
        "storage",
        "002a1bbb",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "00b7eb10",
      "PARAM",
      [
        "storage",
        "002b6dfc",
        null,
        "string"
      ]
    ],
    [
      "00b7eb34",
      "PARAM",
      [
        "storage",
        "002b5ecd",
        null,
        null
      ]
    ],
    [
      "00b7eb64",
      "PARAM",
      [
        "storage",
        "002a1b6e",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b7ea88 ["INT_ADD", "register:40f0:8", ["const:b7ea88:8", "const:4:8"]]
- 00b7ea88 ["CALL", null, ["callee:00c590a0:8"]]
+ 00b7eb24 ["INT_ADD", "register:40f0:8", ["const:b7eb24:8", "const:4:8"]]
+ 00b7eb24 ["CALL", null, ["callee:00c590a0:8"]]
- 00b7eab8 ["INT_ADD", "register:40f0:8", ["const:b7eab8:8", "const:4:8"]]
- 00b7eab8 ["CALL", null, ["callee:00c58050:8"]]
+ 00b7eb54 ["INT_ADD", "register:40f0:8", ["const:b7eb54:8", "const:4:8"]]
+ 00b7eb54 ["CALL", null, ["callee:00c58050:8"]]
- 00b7eae4 ["INT_ADD", "register:40f0:8", ["const:b7eae4:8", "const:4:8"]]
- 00b7eae4 ["CALL", null, ["callee:00c58050:8"]]
+ 00b7eb80 ["INT_ADD", "register:40f0:8", ["const:b7eb80:8", "const:4:8"]]
+ 00b7eb80 ["CALL", null, ["callee:00c58050:8"]]
~~~


<a id="compare-4ea167630cade9619a06139107e5d0e4"></a>

### [`00b7ee68`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b7e/00b7ee68.md) → [`00b7ef04`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b7e/00b7ef04.md) FUN_00b7ef04

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 4件 [`00b75440`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b75/00b75440.md) [`00b78e04`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b78/00b78e04.md) [`00b7b278`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b7b/00b7b278.md) [`00b7bffc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b7b/00b7bffc.md) · 呼出先 11件 [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md) [`00c57f80`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57f80.md) [`00c57fe0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57fe0.md)
- 新版 呼出元 4件 [`00b754dc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b75/00b754dc.md) [`00b78ea0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b78/00b78ea0.md) [`00b7b314`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b7b/00b7b314.md) [`00b7c098`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b7c/00b7c098.md) · 呼出先 11件 [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md) [`00c58050`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58050.md) [`00c580b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c580b0.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 97.64% / 新版 97.64%

優先判定に残った影響 `call_argument_candidate` 3件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b7efd4",
      "incomplete_value": false,
      "site": "00b7efe8",
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
            "const:dfc:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b7ef38",
      "incomplete_value": false,
      "site": "00b7ef4c",
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
            "const:dbc:8"
          ]
        ]
      ]
    },
    "ordinal": 4,
    "slot": 3
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b7eff8",
      "incomplete_value": false,
      "site": "00b7f018",
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
            "const:ecd:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b7ef5c",
      "incomplete_value": false,
      "site": "00b7ef7c",
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
            "const:e8d:8"
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
    "new": {
      "definition_site": "00b7f03c",
      "incomplete_value": false,
      "site": "00b7f044",
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
            "const:b69:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b7efa0",
      "incomplete_value": false,
      "site": "00b7efa8",
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
            "const:bb6:8"
          ]
        ]
      ]
    },
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
      "00b7efd4",
      "PARAM",
      [
        "storage",
        "002b6dbc",
        null,
        "string"
      ]
    ],
    [
      "00b7eff8",
      "PARAM",
      [
        "storage",
        "002b5e8d",
        null,
        null
      ]
    ],
    [
      "00b7f03c",
      "PARAM",
      [
        "storage",
        "002a0bb6",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "00b7efd4",
      "PARAM",
      [
        "storage",
        "002b6dfc",
        null,
        "string"
      ]
    ],
    [
      "00b7eff8",
      "PARAM",
      [
        "storage",
        "002b5ecd",
        null,
        null
      ]
    ],
    [
      "00b7f03c",
      "PARAM",
      [
        "storage",
        "002a0b69",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b7ef4c ["INT_ADD", "register:40f0:8", ["const:b7ef4c:8", "const:4:8"]]
- 00b7ef4c ["CALL", null, ["callee:00c590a0:8"]]
+ 00b7efe8 ["INT_ADD", "register:40f0:8", ["const:b7efe8:8", "const:4:8"]]
+ 00b7efe8 ["CALL", null, ["callee:00c590a0:8"]]
- 00b7ef7c ["INT_ADD", "register:40f0:8", ["const:b7ef7c:8", "const:4:8"]]
- 00b7ef7c ["CALL", null, ["callee:00c58050:8"]]
+ 00b7f018 ["INT_ADD", "register:40f0:8", ["const:b7f018:8", "const:4:8"]]
+ 00b7f018 ["CALL", null, ["callee:00c58050:8"]]
- 00b7efa8 ["INT_ADD", "register:40f0:8", ["const:b7efa8:8", "const:4:8"]]
- 00b7efa8 ["CALL", null, ["callee:00c58180:8"]]
+ 00b7f044 ["INT_ADD", "register:40f0:8", ["const:b7f044:8", "const:4:8"]]
+ 00b7f044 ["CALL", null, ["callee:00c58180:8"]]
~~~


<a id="compare-def99d7b363c0f37aa83d4ede3945e61"></a>

### [`00b7f148`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b7f/00b7f148.md) → [`00b7f1e4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b7f/00b7f1e4.md) FUN_00b7f1e4

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 5件 [`00b75440`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b75/00b75440.md) [`00b78e04`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b78/00b78e04.md) [`00b7b278`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b7b/00b7b278.md) [`00b7bffc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b7b/00b7bffc.md) [`00b8176c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b81/00b8176c.md) · 呼出先 11件 [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md) [`00c57f80`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57f80.md) [`00c57fe0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57fe0.md)
- 新版 呼出元 5件 [`00b754dc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b75/00b754dc.md) [`00b78ea0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b78/00b78ea0.md) [`00b7b314`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b7b/00b7b314.md) [`00b7c098`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b7c/00b7c098.md) [`00b81808`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b81/00b81808.md) · 呼出先 11件 [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md) [`00c58050`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58050.md) [`00c580b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c580b0.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 97.69% / 新版 97.69%

優先判定に残った影響 `call_argument_candidate` 3件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b7f2b4",
      "incomplete_value": false,
      "site": "00b7f2c8",
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
            "const:dfc:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b7f218",
      "incomplete_value": false,
      "site": "00b7f22c",
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
            "const:dbc:8"
          ]
        ]
      ]
    },
    "ordinal": 4,
    "slot": 3
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b7f2d8",
      "incomplete_value": false,
      "site": "00b7f2f8",
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
            "const:ecd:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b7f23c",
      "incomplete_value": false,
      "site": "00b7f25c",
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
            "const:e8d:8"
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
    "new": {
      "definition_site": "00b7f31c",
      "incomplete_value": false,
      "site": "00b7f324",
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
            "const:b69:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b7f280",
      "incomplete_value": false,
      "site": "00b7f288",
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
            "const:bb6:8"
          ]
        ]
      ]
    },
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
      "00b7f2b4",
      "PARAM",
      [
        "storage",
        "002b6dbc",
        null,
        "string"
      ]
    ],
    [
      "00b7f2d8",
      "PARAM",
      [
        "storage",
        "002b5e8d",
        null,
        null
      ]
    ],
    [
      "00b7f31c",
      "PARAM",
      [
        "storage",
        "002a0bb6",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "00b7f2b4",
      "PARAM",
      [
        "storage",
        "002b6dfc",
        null,
        "string"
      ]
    ],
    [
      "00b7f2d8",
      "PARAM",
      [
        "storage",
        "002b5ecd",
        null,
        null
      ]
    ],
    [
      "00b7f31c",
      "PARAM",
      [
        "storage",
        "002a0b69",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b7f22c ["INT_ADD", "register:40f0:8", ["const:b7f22c:8", "const:4:8"]]
- 00b7f22c ["CALL", null, ["callee:00c590a0:8"]]
+ 00b7f2c8 ["INT_ADD", "register:40f0:8", ["const:b7f2c8:8", "const:4:8"]]
+ 00b7f2c8 ["CALL", null, ["callee:00c590a0:8"]]
- 00b7f25c ["INT_ADD", "register:40f0:8", ["const:b7f25c:8", "const:4:8"]]
- 00b7f25c ["CALL", null, ["callee:00c58050:8"]]
+ 00b7f2f8 ["INT_ADD", "register:40f0:8", ["const:b7f2f8:8", "const:4:8"]]
+ 00b7f2f8 ["CALL", null, ["callee:00c58050:8"]]
- 00b7f288 ["INT_ADD", "register:40f0:8", ["const:b7f288:8", "const:4:8"]]
- 00b7f288 ["CALL", null, ["callee:00c58180:8"]]
+ 00b7f324 ["INT_ADD", "register:40f0:8", ["const:b7f324:8", "const:4:8"]]
+ 00b7f324 ["CALL", null, ["callee:00c58180:8"]]
~~~


<a id="compare-ff59ab8cc6055ac29bc0b53b8ba2e3af"></a>

### [`00b7f864`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b7f/00b7f864.md) → [`00b7f900`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b7f/00b7f900.md) _ZN11flatbuffers6Parser19ParseAlignAttributeERKNSt6__ndk112basic_stringIcNS1_11char_traitsIcEENS1_9allocatorIcEEEEmPm

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`00c5c680`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5c/00c5c680.md) · 呼出先 8件 [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md) [`00c57f80`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57f80.md) [`00c580b0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c580b0.md) [`00c5bfe0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5bfe0.md)
- 新版 呼出元 1件 [`00c5c750`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5c750.md) · 呼出先 8件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md) [`00c58050`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58050.md) [`00c58180`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58180.md) [`00c5c0b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5c0b0.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 98.04% / 新版 98.04%

優先判定に残った影響 `call_argument_candidate` 4件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b7fa20",
      "incomplete_value": false,
      "site": "00b7fa30",
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
            "const:ae2:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b7f984",
      "incomplete_value": false,
      "site": "00b7f994",
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
            "const:b2f:8"
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
      "definition_site": "00b7fa38",
      "incomplete_value": false,
      "site": "00b7fa44",
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
            "const:f6c:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b7f99c",
      "incomplete_value": false,
      "site": "00b7f9a8",
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
            "const:fc0:8"
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
      "definition_site": "00b7faa0",
      "incomplete_value": false,
      "site": "00b7fabc",
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
            "const:baa:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b7fa04",
      "incomplete_value": false,
      "site": "00b7fa20",
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
            "const:b79:8"
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
      "00b7f994",
      "READ",
      [
        "storage",
        "00c9b830",
        null,
        "pointer"
      ]
    ],
    [
      "00b7f9ac",
      "READ",
      [
        "storage",
        "00c9b830",
        null,
        "pointer"
      ]
    ],
    [
      "00b7f9bc",
      "READ",
      [
        "storage",
        "011261e0",
        "flatbuffers::ClassicLocale::instance_",
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00b7f994",
      "READ",
      [
        "storage",
        "00c9b900",
        null,
        "pointer"
      ]
    ],
    [
      "00b7f9ac",
      "READ",
      [
        "storage",
        "00c9b900",
        null,
        "pointer"
      ]
    ],
    [
      "00b7f9bc",
      "READ",
      [
        "storage",
        "011262e0",
        "flatbuffers::ClassicLocale::instance_",
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b7f8f8 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:830:8"]]
- 00b7f8f8 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
+ 00b7f994 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:900:8"]]
+ 00b7f994 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
- 00b7f984 ["COPY", "tmp:0:8", ["const:b2f:8"]]
- 00b7f984 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 00b7f984 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 00b7f984 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 00b7fa20 ["COPY", "tmp:0:8", ["const:ae2:8"]]
+ 00b7fa20 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 00b7fa20 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 00b7fa20 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
- 00b7f994 ["INT_ADD", "register:40f0:8", ["const:b7f994:8", "const:4:8"]]
- 00b7f994 ["CALL", null, ["callee:00c58180:8"]]
+ 00b7fa30 ["INT_ADD", "register:40f0:8", ["const:b7fa30:8", "const:4:8"]]
+ 00b7fa30 ["CALL", null, ["callee:00c58180:8"]]
~~~


<a id="compare-b4dd84e05595ffb7b32e7cdd96ed3c98"></a>

### [`00b7fb94`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b7f/00b7fb94.md) → [`00b7fc30`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b7f/00b7fc30.md) _ZN11flatbuffers11NumToStringImEENSt6__ndk112basic_stringIcNS1_11char_traitsIcEENS1_9allocatorIcEEEET_

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`00c5c010`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5c/00c5c010.md) · 呼出先 8件 [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md) [`00c581b0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c581b0.md) [`00c581e0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c581e0.md) [`00c58200`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58200.md)
- 新版 呼出元 1件 [`00c5c0e0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5c0e0.md) · 呼出先 8件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md) [`00c58280`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58280.md) [`00c582b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c582b0.md) [`00c582d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c582d0.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 91.11% / 新版 91.11%

優先判定に残った影響 `store_value` 2件

アドレスに依存する影響 `store_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00b7fc88",
      "incomplete_value": true,
      "site": "00b7fc9c",
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
      "definition_site": "00b7fbec",
      "incomplete_value": true,
      "site": "00b7fc00",
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
    "ordinal": 15,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00b7fc80",
      "incomplete_value": true,
      "site": "00b7fca0",
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
      "definition_site": "00b7fbe4",
      "incomplete_value": true,
      "site": "00b7fc04",
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
    "ordinal": 16,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00b7fd10",
      "incomplete_value": true,
      "site": "00b7fd1c",
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
      "definition_site": "00b7fc74",
      "incomplete_value": true,
      "site": "00b7fc80",
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
      "00b7fc60",
      "READ",
      [
        "storage",
        "00c9ac18",
        null,
        "pointer"
      ]
    ],
    [
      "00b7fc64",
      "READ",
      [
        "storage",
        "00c9b840",
        null,
        "pointer"
      ]
    ],
    [
      "00b7fc9c",
      "DATA",
      [
        "storage",
        "00c90bd0",
        null,
        "pointer"
      ]
    ]
  ],
  "added": [
    [
      "00b7fc60",
      "READ",
      [
        "storage",
        "00c9ace8",
        null,
        "pointer"
      ]
    ],
    [
      "00b7fc64",
      "READ",
      [
        "storage",
        "00c9b910",
        null,
        "pointer"
      ]
    ],
    [
      "00b7fc9c",
      "DATA",
      [
        "storage",
        "00c90ca0",
        null,
        "pointer"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b7fbc4 ["INT_ADD", "tmp:0:8", ["register:40d0:8", "const:c18:8"]]
- 00b7fbc4 ["LOAD", "register:40d0:8", ["const:1b1:8", "tmp:0:8"]]
+ 00b7fc60 ["INT_ADD", "tmp:0:8", ["register:40d0:8", "const:ce8:8"]]
+ 00b7fc60 ["LOAD", "register:40d0:8", ["const:1b1:8", "tmp:0:8"]]
- 00b7fbc8 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:840:8"]]
- 00b7fbc8 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
+ 00b7fc64 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:910:8"]]
+ 00b7fc64 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
- 00b7fc0c ["INT_ADD", "register:40f0:8", ["const:b7fc0c:8", "const:4:8"]]
- 00b7fc0c ["CALL", null, ["callee:00c582b0:8"]]
+ 00b7fca8 ["INT_ADD", "register:40f0:8", ["const:b7fca8:8", "const:4:8"]]
+ 00b7fca8 ["CALL", null, ["callee:00c582b0:8"]]
~~~


<a id="compare-9bb042c174296163080c300fdfe7d4a2"></a>

### [`00b80370`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b80/00b80370.md) → [`00b8040c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b80/00b8040c.md) _ZN11flatbuffers6Parser21ParseNestedFlatbufferERNS_5ValueEPNS_8FieldDefEmPKNS_9StructDefE

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`00c5c6b0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5c/00c5c6b0.md) · 呼出先 20件 [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md) [`00c580b0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c580b0.md) [`00c5b140`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5b140.md)
- 新版 呼出元 1件 [`00c5c780`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5c780.md) · 呼出先 20件 [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md) [`00c58180`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58180.md) [`00c5b210`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b210.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies, store_value

命令の説明率　旧版 96.75% / 新版 96.75%

優先判定に残った影響 `call_argument_candidate` 2件, `store_value` 5件

アドレスに依存する影響 `store_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00b80500",
      "incomplete_value": true,
      "site": "00b80510",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:210:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b80464",
      "incomplete_value": true,
      "site": "00b80474",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:1d0:8"
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
      "definition_site": "00b8050c",
      "incomplete_value": true,
      "site": "00b8051c",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:b0e:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b80470",
      "incomplete_value": true,
      "site": "00b80480",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:b5b:8"
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
      "definition_site": "00b8050c",
      "incomplete_value": true,
      "site": "00b8051c",
      "value": [
        "LOAD",
        "16",
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
      "definition_site": "00b80470",
      "incomplete_value": true,
      "site": "00b80480",
      "value": [
        "LOAD",
        "16",
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
      "00b80500",
      "READ",
      [
        "storage",
        "002c31d0",
        null,
        null
      ]
    ],
    [
      "00b8050c",
      "READ",
      [
        "storage",
        "002a1b5b",
        null,
        "string"
      ]
    ],
    [
      "00b8050c",
      "READ",
      [
        "storage",
        "002a1b6b",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "00b80500",
      "READ",
      [
        "storage",
        "002c3210",
        null,
        null
      ]
    ],
    [
      "00b8050c",
      "READ",
      [
        "storage",
        "002a1b0e",
        null,
        "string"
      ]
    ],
    [
      "00b8050c",
      "READ",
      [
        "storage",
        "002a1b1e",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b803d8 ["INT_ADD", "register:40f0:8", ["const:b803d8:8", "const:4:8"]]
- 00b803d8 ["CALL", null, ["callee:00c5c600:8"]]
+ 00b80474 ["INT_ADD", "register:40f0:8", ["const:b80474:8", "const:4:8"]]
+ 00b80474 ["CALL", null, ["callee:00c5c600:8"]]
- 00b804a4 ["INT_ADD", "register:40f0:8", ["const:b804a4:8", "const:4:8"]]
- 00b804a4 ["CALL", null, ["callee:00c58180:8"]]
+ 00b80540 ["INT_ADD", "register:40f0:8", ["const:b80540:8", "const:4:8"]]
+ 00b80540 ["CALL", null, ["callee:00c58180:8"]]
- 00b80708 ["INT_ADD", "register:40f0:8", ["const:b80708:8", "const:4:8"]]
- 00b80708 ["CALL", null, ["callee:00c58180:8"]]
+ 00b807a4 ["INT_ADD", "register:40f0:8", ["const:b807a4:8", "const:4:8"]]
+ 00b807a4 ["CALL", null, ["callee:00c58180:8"]]
~~~


<a id="compare-2cca04fde4f8c9390cd03ba00fb04695"></a>

### [`00b80dcc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b80/00b80dcc.md) → [`00b80e68`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b80/00b80e68.md) _ZN11flatbuffers6Parser19ParseEnumFromStringERKNS_4TypeEPNSt6__ndk112basic_stringIcNS4_11char_traitsIcEENS4_9allocatorIcEEEE

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`00c5c690`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5c/00c5c690.md) · 呼出先 11件 [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md) [`00c57fd0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57fd0.md) [`00c580b0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c580b0.md)
- 新版 呼出元 1件 [`00c5c760`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5c760.md) · 呼出先 11件 [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md) [`00c580a0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c580a0.md) [`00c58180`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58180.md)

変更の種類 branch_condition_or_target, call_argument_candidate, constant, control_flow, local_def_use, operands_and_dependencies, store_value, unresolved_store_alignment

命令の説明率　旧版 94.59% / 新版 94.59%

優先判定に残った影響 `call_argument_candidate` 4件, `store_value` 5件, `unresolved_store_alignment` 2件

アドレスに依存する影響 `store_value` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00b80ec4",
      "incomplete_value": true,
      "site": "00b80ef0",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:240:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b80e28",
      "incomplete_value": true,
      "site": "00b80e54",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:200:8"
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
      "definition_site": "00b810cc",
      "incomplete_value": true,
      "site": "00b810dc",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:64c:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b81030",
      "incomplete_value": true,
      "site": "00b81040",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:61b:8"
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
      "definition_site": "00b810cc",
      "incomplete_value": true,
      "site": "00b810dc",
      "value": [
        "LOAD",
        "16",
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
      "definition_site": "00b81030",
      "incomplete_value": true,
      "site": "00b81040",
      "value": [
        "LOAD",
        "16",
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
      "00b80ec4",
      "READ",
      [
        "storage",
        "002c3200",
        null,
        null
      ]
    ],
    [
      "00b80fd8",
      "PARAM",
      [
        "storage",
        "002ae2aa",
        null,
        "string"
      ]
    ],
    [
      "00b80fec",
      "PARAM",
      [
        "storage",
        "002a0bb6",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "00b80ec4",
      "READ",
      [
        "storage",
        "002c3240",
        null,
        null
      ]
    ],
    [
      "00b80fd8",
      "PARAM",
      [
        "storage",
        "002ae24e",
        null,
        "string"
      ]
    ],
    [
      "00b80fec",
      "PARAM",
      [
        "storage",
        "002a0b69",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b80f40 ["INT_ADD", "register:40f0:8", ["const:b80f40:8", "const:4:8"]]
- 00b80f40 ["CALL", null, ["callee:00c58180:8"]]
+ 00b80fdc ["INT_ADD", "register:40f0:8", ["const:b80fdc:8", "const:4:8"]]
+ 00b80fdc ["CALL", null, ["callee:00c58180:8"]]
- 00b80fa8 ["INT_ADD", "register:40f0:8", ["const:b80fa8:8", "const:4:8"]]
- 00b80fa8 ["CALL", null, ["callee:00c5b8c0:8"]]
+ 00b81044 ["INT_ADD", "register:40f0:8", ["const:b81044:8", "const:4:8"]]
+ 00b81044 ["CALL", null, ["callee:00c5b8c0:8"]]
- 00b810b8 ["INT_ADD", "register:40f0:8", ["const:b810b8:8", "const:4:8"]]
- 00b810b8 ["CALL", null, ["callee:00c58180:8"]]
+ 00b81154 ["INT_ADD", "register:40f0:8", ["const:b81154:8", "const:4:8"]]
+ 00b81154 ["CALL", null, ["callee:00c58180:8"]]
~~~


<a id="compare-354ec2ea324a12a043b704a52a24a99e"></a>

### [`00b8126c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b81/00b8126c.md) → [`00b81308`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b81/00b81308.md) _ZN11flatbuffers11NumToStringIsEENSt6__ndk112basic_stringIcNS1_11char_traitsIcEENS1_9allocatorIcEEEET_

根拠 `symbol` · `raw_instruction_pcode` · `bounded` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`00c5c020`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5c/00c5c020.md) · 呼出先 8件 [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md) [`00c581b0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c581b0.md) [`00c581e0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c581e0.md) [`00c58290`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58290.md)
- 新版 呼出元 1件 [`00c5c0f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5c0f0.md) · 呼出先 8件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md) [`00c58280`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58280.md) [`00c582b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c582b0.md) [`00c58360`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58360.md)

変更の種類 branch_condition_or_target, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_return_alignment, unresolved_store_alignment

命令の説明率　旧版 80.22% / 新版 80.22%

優先判定に残った影響 `unresolved_return_alignment` 1件, `unresolved_store_alignment` 5件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00b812a0",
      "READ",
      [
        "storage",
        "00c9ac18",
        null,
        "pointer"
      ]
    ],
    [
      "unmatched:00b812a4",
      "READ",
      [
        "storage",
        "00c9b840",
        null,
        "pointer"
      ]
    ],
    [
      "unmatched:00b812dc",
      "DATA",
      [
        "storage",
        "00c90bd0",
        null,
        "pointer"
      ]
    ]
  ],
  "added": [
    [
      "00b8133c",
      "READ",
      [
        "storage",
        "00c9ace8",
        null,
        "pointer"
      ]
    ],
    [
      "00b81340",
      "READ",
      [
        "storage",
        "00c9b910",
        null,
        "pointer"
      ]
    ],
    [
      "00b81378",
      "DATA",
      [
        "storage",
        "00c90ca0",
        null,
        "pointer"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b812a0 ["INT_ADD", "tmp:0:8", ["register:40d0:8", "const:c18:8"]]
- 00b812a0 ["LOAD", "register:40d0:8", ["const:1b1:8", "tmp:0:8"]]
- 00b812a4 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:840:8"]]
- 00b812a4 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
- 00b812b8 ["COPY", "tmp:0:8", ["const:18:8"]]
- 00b812b8 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00b812b8 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00b812b8 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-963ac62591534fbb8c5294c70dbbeb1a"></a>

### [`00b813d8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b81/00b813d8.md) → [`00b81474`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b81/00b81474.md) _ZN11flatbuffers11NumToStringItEENSt6__ndk112basic_stringIcNS1_11char_traitsIcEENS1_9allocatorIcEEEET_

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`00c5c030`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5c/00c5c030.md) · 呼出先 8件 [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md) [`00c581b0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c581b0.md) [`00c581e0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c581e0.md) [`00c58290`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58290.md)
- 新版 呼出元 1件 [`00c5c100`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5c100.md) · 呼出先 8件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md) [`00c58280`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58280.md) [`00c582b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c582b0.md) [`00c58360`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58360.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_store_alignment

命令の説明率　旧版 64.84% / 新版 64.84%

優先判定に残った影響 `call_argument_candidate` 2件, `unresolved_store_alignment` 9件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b814d4",
      "incomplete_value": true,
      "site": "00b814f0",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "INT_ADD",
            "8",
            [
              "INT_SUB",
              [
                "leaf",
                "const:10:8"
              ]
            ]
          ],
          [
            "leaf",
            "const:80:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b81438",
      "incomplete_value": true,
      "site": "00b81454",
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
                "const:10:8"
              ]
            ]
          ],
          [
            "leaf",
            "const:80:8"
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
      "definition_site": "00b814d8",
      "incomplete_value": true,
      "site": "00b814f0",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "INT_ADD",
            "8",
            [
              "INT_SUB",
              [
                "leaf",
                "const:10:8"
              ]
            ]
          ],
          [
            "leaf",
            "const:18:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b8143c",
      "incomplete_value": true,
      "site": "00b81454",
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
                "const:10:8"
              ]
            ]
          ],
          [
            "leaf",
            "const:18:8"
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
      "unmatched:00b813f8",
      "WRITE",
      [
        "storage",
        "Stack[-0x198]",
        null,
        null
      ]
    ],
    [
      "unmatched:00b81404",
      "WRITE",
      [
        "storage",
        "Stack[-0x19c]",
        null,
        null
      ]
    ],
    [
      "unmatched:00b8140c",
      "READ",
      [
        "storage",
        "00c9ac18",
        null,
        "pointer"
      ]
    ]
  ],
  "added": [
    [
      "00b81494",
      "WRITE",
      [
        "storage",
        "Stack[-0x198]",
        null,
        null
      ]
    ],
    [
      "00b814a0",
      "WRITE",
      [
        "storage",
        "Stack[-0x19c]",
        null,
        null
      ]
    ],
    [
      "00b814a8",
      "READ",
      [
        "storage",
        "00c9ace8",
        null,
        "pointer"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b81454 ["INT_ADD", "register:40f0:8", ["const:b81454:8", "const:4:8"]]
- 00b81454 ["CALL", null, ["callee:00c582b0:8"]]
+ 00b814f0 ["INT_ADD", "register:40f0:8", ["const:b814f0:8", "const:4:8"]]
+ 00b814f0 ["CALL", null, ["callee:00c582b0:8"]]
- 00b814f0 ["INT_RIGHT", "tmp:0:4", ["register:4040:4", "const:0:4"]]
- 00b814f0 ["INT_AND", "tmp:1:4", ["tmp:0:4", "const:1:4"]]
- 00b814f0 ["INT_EQUAL", "tmp:2:1", ["tmp:1:4", "const:0:4"]]
- 00b814f0 ["INT_EQUAL", "tmp:3:1", ["tmp:2:1", "const:1:1"]]
+ 00b8158c ["INT_RIGHT", "tmp:0:4", ["register:4040:4", "const:0:4"]]
+ 00b8158c ["INT_AND", "tmp:1:4", ["tmp:0:4", "const:1:4"]]
+ 00b8158c ["INT_EQUAL", "tmp:2:1", ["tmp:1:4", "const:0:4"]]
+ 00b8158c ["INT_EQUAL", "tmp:3:1", ["tmp:2:1", "const:1:1"]]
- 00b813f4 ["COPY", "tmp:0:8", ["const:190:8"]]
- 00b813f4 ["INT_CARRY", "register:105:1", ["register:8:8", "tmp:0:8"]]
- 00b813f4 ["INT_SCARRY", "register:106:1", ["register:8:8", "tmp:0:8"]]
- 00b813f4 ["INT_ADD", "tmp:1:8", ["register:8:8", "tmp:0:8"]]
~~~


<a id="compare-00f66b1cd12407681b5b7f20168f6dc1"></a>

### [`00b81544`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b81/00b81544.md) → [`00b815e0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b81/00b815e0.md) _ZN11flatbuffers6Parser10TokenErrorEv

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`00c5c490`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5c/00c5c490.md) · 呼出先 10件 [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md) [`00c57fe0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57fe0.md) [`00c58000`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58000.md)
- 新版 呼出元 1件 [`00c5c560`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5c560.md) · 呼出先 10件 [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md) [`00c580b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c580b0.md) [`00c580d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c580d0.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, constant, control_flow, control_flow_count, local_def_use, operands_and_dependencies, operation_sequence, store_condition, unresolved_branch_alignment, unresolved_return_alignment, unresolved_store_alignment

命令の説明率　旧版 91.30% / 新版 91.30%

優先判定に残った影響 `call_argument_candidate` 5件, `store_condition` 3件, `unresolved_branch_alignment` 1件, `unresolved_return_alignment` 1件, `unresolved_store_alignment` 5件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b816ac",
      "incomplete_value": true,
      "site": "00b816b0",
      "value": [
        "LOAD",
        "8",
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
              "INT_LEFT"
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b81610",
      "incomplete_value": true,
      "site": "00b81614",
      "value": [
        "LOAD",
        "8",
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
              "INT_LEFT"
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
      "definition_site": "00b81750",
      "incomplete_value": false,
      "site": "00b81760",
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
            "const:605:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b816b4",
      "incomplete_value": false,
      "site": "00b816c4",
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
            "const:661:8"
          ]
        ]
      ]
    },
    "ordinal": 6,
    "slot": 3
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b81784",
      "incomplete_value": false,
      "site": "00b8178c",
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
            "const:b69:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b816e8",
      "incomplete_value": false,
      "site": "00b816f0",
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
            "const:bb6:8"
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
      "unmatched:00b8157c",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b81644"
      ]
    ],
    [
      "00b816a0",
      "DATA",
      [
        "storage",
        "00c90958",
        null,
        "undefined *"
      ]
    ],
    [
      "unmatched:00b816b4",
      "PARAM",
      [
        "storage",
        "002b0661",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "00b81618",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b81644"
      ]
    ],
    [
      "00b816a0",
      "DATA",
      [
        "storage",
        "00c90a28",
        null,
        "undefined *"
      ]
    ],
    [
      "00b81750",
      "PARAM",
      [
        "storage",
        "002b0605",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b81614 ["INT_ADD", "register:40f0:8", ["const:b81614:8", "const:4:8"]]
- 00b81614 ["CALL", null, ["callee:00c580b0:8"]]
+ 00b816b0 ["INT_ADD", "register:40f0:8", ["const:b816b0:8", "const:4:8"]]
+ 00b816b0 ["CALL", null, ["callee:00c580b0:8"]]
- 00b8161c ["CBRANCH", null, ["local:b29:8", "register:102:1"]]
+ 00b816b8 ["CBRANCH", null, ["local:b31:8", "register:102:1"]]
- 00b81628 ["CBRANCH", null, ["local:b16:8", "register:102:1"]]
+ 00b816c4 ["CBRANCH", null, ["local:b17:8", "register:102:1"]]
~~~


<a id="compare-f783feae9aeeeed54a60a622a1a6f736"></a>

### [`00b8176c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b81/00b8176c.md) → [`00b81808`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b81/00b81808.md) _ZN11flatbuffers6Parser13ParseFunctionEPKNSt6__ndk112basic_stringIcNS1_11char_traitsIcEENS1_9allocatorIcEEEERNS_5ValueE

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`00c5c540`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5c/00c5c540.md) · 呼出先 23件 [`00b5abb4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b5a/00b5abb4.md) [`00b7f148`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b7f/00b7f148.md) [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md)
- 新版 呼出元 1件 [`00c5c610`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5c610.md) · 呼出先 23件 [`00b5ac50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b5a/00b5ac50.md) [`00b7f1e4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b7f/00b7f1e4.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, constant, control_flow, local_def_use, operands_and_dependencies, operation_sequence, store_value, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 84.54% / 新版 84.54%

優先判定に残った影響 `call_argument_candidate` 20件, `store_value` 2件, `unresolved_branch_alignment` 8件, `unresolved_call_alignment` 9件, `unresolved_store_alignment` 18件

アドレスに依存する影響 `store_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00b81e60",
      "incomplete_value": true,
      "site": "00b81e74",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:b90:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b81dc4",
      "incomplete_value": true,
      "site": "00b81dd8",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:b50:8"
              ]
            ]
          ]
        ]
      ]
    },
    "ordinal": 79,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00b81e70",
      "incomplete_value": true,
      "site": "00b81e90",
      "value": [
        "LOAD",
        "16",
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
      "definition_site": "00b81dd4",
      "incomplete_value": true,
      "site": "00b81df4",
      "value": [
        "LOAD",
        "16",
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
    "ordinal": 82,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00b81e78",
      "incomplete_value": true,
      "site": "00b81e94",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:628:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b81ddc",
      "incomplete_value": true,
      "site": "00b81df8",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:684:8"
              ]
            ]
          ]
        ]
      ]
    },
    "ordinal": 83,
    "slot": 2
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00b81784",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "unmatched:00b817a4",
      "WRITE",
      [
        "storage",
        "Stack[-0x70]",
        null,
        null
      ]
    ],
    [
      "unmatched:00b81914",
      "PARAM",
      [
        "storage",
        "002b1648",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "00b81820",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "00b81840",
      "WRITE",
      [
        "storage",
        "Stack[-0x70]",
        null,
        null
      ]
    ],
    [
      "00b819b0",
      "PARAM",
      [
        "storage",
        "002b15ec",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b81868 ["INT_ADD", "register:40f0:8", ["const:b81868:8", "const:4:8"]]
- 00b81868 ["CALL", null, ["callee:00c580d0:8"]]
+ 00b81904 ["INT_ADD", "register:40f0:8", ["const:b81904:8", "const:4:8"]]
+ 00b81904 ["CALL", null, ["callee:00c580d0:8"]]
- 00b81898 ["INT_NOTEQUAL", "tmp:0:1", ["register:4040:4", "const:0:4"]]
- 00b81898 ["CBRANCH", null, ["local:b59:8", "tmp:0:1"]]
+ 00b81934 ["INT_NOTEQUAL", "tmp:0:1", ["register:4040:4", "const:0:4"]]
+ 00b81934 ["CBRANCH", null, ["local:b56:8", "tmp:0:1"]]
- 00b81904 ["INT_RIGHT", "tmp:0:4", ["register:4040:4", "const:0:4"]]
- 00b81904 ["INT_AND", "tmp:1:4", ["tmp:0:4", "const:1:4"]]
- 00b81904 ["INT_EQUAL", "tmp:2:1", ["tmp:1:4", "const:0:4"]]
- 00b81904 ["INT_EQUAL", "tmp:3:1", ["tmp:2:1", "const:0:1"]]
+ 00b819a0 ["INT_RIGHT", "tmp:0:4", ["register:4040:4", "const:0:4"]]
+ 00b819a0 ["INT_AND", "tmp:1:4", ["tmp:0:4", "const:1:4"]]
+ 00b819a0 ["INT_EQUAL", "tmp:2:1", ["tmp:1:4", "const:0:4"]]
+ 00b819a0 ["INT_EQUAL", "tmp:3:1", ["tmp:2:1", "const:0:1"]]
~~~


<a id="compare-0130aa77b61e704000e818cf1d61b3a6"></a>

### [`00b82154`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b82/00b82154.md) → [`00b821f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b82/00b821f0.md) _ZN11flatbuffers6Parser13TryTypedValueEPKNSt6__ndk112basic_stringIcNS1_11char_traitsIcEENS1_9allocatorIcEEEEibRNS_5ValueENS_8BaseTypeEPb

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`00c5c570`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5c/00c5c570.md) · 呼出先 11件 [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md) [`00c57f80`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57f80.md) [`00c57fe0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57fe0.md)
- 新版 呼出元 1件 [`00c5c640`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5c640.md) · 呼出先 11件 [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md) [`00c58050`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58050.md) [`00c580b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c580b0.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, local_def_use, memory_read, memory_read_count, operands_and_dependencies, operation_sequence, store_value, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 89.59% / 新版 89.59%

優先判定に残った影響 `call_argument_candidate` 6件, `store_value` 3件, `unresolved_branch_alignment` 4件, `unresolved_call_alignment` 2件, `unresolved_store_alignment` 5件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00b82290",
      "incomplete_value": true,
      "site": "00b822a8",
      "value": [
        "LOAD",
        "16",
        [
          [
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
      "definition_site": "00b821f4",
      "incomplete_value": true,
      "site": "00b8220c",
      "value": [
        "LOAD",
        "16",
        [
          [
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
    "ordinal": 15,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00b82294",
      "incomplete_value": true,
      "site": "00b822ac",
      "value": [
        "LOAD",
        "16",
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
      "definition_site": "00b821f8",
      "incomplete_value": true,
      "site": "00b82210",
      "value": [
        "LOAD",
        "16",
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
    "ordinal": 16,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00b82298",
      "incomplete_value": true,
      "site": "00b822b0",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:73a:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b821fc",
      "incomplete_value": true,
      "site": "00b82214",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:709:8"
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
      "00b82290",
      "READ",
      [
        "storage",
        "002c2a90",
        null,
        null
      ]
    ],
    [
      "00b82294",
      "READ",
      [
        "storage",
        "002b4713",
        null,
        "string"
      ]
    ],
    [
      "00b82298",
      "READ",
      [
        "storage",
        "002b4709",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "00b82290",
      "READ",
      [
        "storage",
        "002c2ad0",
        null,
        null
      ]
    ],
    [
      "00b82294",
      "READ",
      [
        "storage",
        "002b4744",
        null,
        "string"
      ]
    ],
    [
      "00b82298",
      "READ",
      [
        "storage",
        "002b473a",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b822a8 ["INT_ADD", "register:40f0:8", ["const:b822a8:8", "const:4:8"]]
- 00b822a8 ["CALL", null, ["callee:00c58050:8"]]
+ 00b82344 ["INT_ADD", "register:40f0:8", ["const:b82344:8", "const:4:8"]]
+ 00b82344 ["CALL", null, ["callee:00c58050:8"]]
- 00b8231c ["INT_ADD", "register:40f0:8", ["const:b8231c:8", "const:4:8"]]
- 00b8231c ["CALL", null, ["callee:00c58050:8"]]
+ 00b823b8 ["INT_ADD", "register:40f0:8", ["const:b823b8:8", "const:4:8"]]
+ 00b823b8 ["CALL", null, ["callee:00c58050:8"]]
- 00b82420 ["INT_ADD", "register:40f0:8", ["const:b82420:8", "const:4:8"]]
- 00b82420 ["CALL", null, ["callee:00c580d0:8"]]
+ 00b824bc ["INT_ADD", "register:40f0:8", ["const:b824bc:8", "const:4:8"]]
+ 00b824bc ["CALL", null, ["callee:00c580d0:8"]]
~~~


<a id="compare-a767ef37d83bb7ee1e60ca0a3983f7b8"></a>

### [`00b82b78`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b82/00b82b78.md) → [`00b82c14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b82/00b82c14.md) _ZN11flatbuffers7EnumDef16RemoveDuplicatesEv

根拠 `symbol` · `raw_instruction_pcode` · `bounded` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`00c5c810`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5c/00c5c810.md) · 呼出先 3件 [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c57f40`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57f40.md) [`00c5b920`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5b920.md)
- 新版 呼出元 1件 [`00c5c8e0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5c8e0.md) · 呼出先 3件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c58010`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58010.md) [`00c5b9f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b9f0.md)

変更の種類 branch_condition_or_target, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment

命令の説明率　旧版 95.00% / 新版 95.00%

優先判定に残った影響 `unresolved_branch_alignment` 1件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00b82c6c",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b82cf4"
      ]
    ]
  ],
  "added": [
    [
      "00b82d08",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b82cf4"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b82bec ["INT_ADD", "register:40f0:8", ["const:b82bec:8", "const:4:8"]]
- 00b82bec ["CALL", null, ["callee:00c5b9f0:8"]]
+ 00b82c88 ["INT_ADD", "register:40f0:8", ["const:b82c88:8", "const:4:8"]]
+ 00b82c88 ["CALL", null, ["callee:00c5b9f0:8"]]
- 00b82bf4 ["INT_ADD", "register:40f0:8", ["const:b82bf4:8", "const:4:8"]]
- 00b82bf4 ["CALL", null, ["callee:00c57f80:8"]]
+ 00b82c90 ["INT_ADD", "register:40f0:8", ["const:b82c90:8", "const:4:8"]]
+ 00b82c90 ["CALL", null, ["callee:00c57f80:8"]]
- 00b82c1c ["INT_NOTEQUAL", "tmp:0:1", ["register:4048:8", "const:0:8"]]
- 00b82c1c ["CBRANCH", null, ["local:b16:8", "tmp:0:1"]]
+ 00b82cb8 ["INT_NOTEQUAL", "tmp:0:1", ["register:4048:8", "const:0:8"]]
+ 00b82cb8 ["CBRANCH", null, ["local:b17:8", "tmp:0:1"]]
~~~


<a id="compare-ee3bbe0a82e677d180583c59b6b553a3"></a>

### [`00b82cb8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b82/00b82cb8.md) → [`00b82d54`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b82/00b82d54.md) _ZN11flatbuffers6Parser9ParseEnumEbPPNS_7EnumDefEPKc

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`00c5c7a0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5c/00c5c7a0.md) · 呼出先 36件 [`0054a614`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0054a/0054a614.md) [`00babf9c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bab/00babf9c.md) [`00bad3f8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bad/00bad3f8.md) [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md)
- 新版 呼出元 1件 [`00c5c870`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5c870.md) · 呼出先 36件 [`0054a654`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0054a/0054a654.md) [`00bac038`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bac/00bac038.md) [`00bad494`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bad/00bad494.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, constant, control_flow, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, store_value, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 92.38% / 新版 92.38%

優先判定に残った影響 `call_argument_candidate` 14件, `store_value` 22件, `unresolved_branch_alignment` 2件, `unresolved_call_alignment` 2件, `unresolved_store_alignment` 27件

アドレスに依存する影響 `store_value` 3件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00b83318",
      "incomplete_value": true,
      "site": "00b83334",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:180:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b8327c",
      "incomplete_value": true,
      "site": "00b83298",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:140:8"
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
      "definition_site": "00b83324",
      "incomplete_value": true,
      "site": "00b83338",
      "value": [
        "LOAD",
        "16",
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
                "const:20:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b83288",
      "incomplete_value": true,
      "site": "00b8329c",
      "value": [
        "LOAD",
        "16",
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
                "const:20:8"
              ]
            ]
          ]
        ]
      ]
    },
    "ordinal": 95,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00b83324",
      "incomplete_value": true,
      "site": "00b83338",
      "value": [
        "LOAD",
        "16",
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
      "definition_site": "00b83288",
      "incomplete_value": true,
      "site": "00b8329c",
      "value": [
        "LOAD",
        "16",
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
    "ordinal": 96,
    "slot": 2
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00b82d58",
      "WRITE",
      [
        "storage",
        "Stack[-0x1c0]",
        null,
        null
      ]
    ],
    [
      "unmatched:00b82d5c",
      "WRITE",
      [
        "storage",
        "Stack[-0x1c8]",
        null,
        null
      ]
    ],
    [
      "unmatched:00b82d60",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b82e1c"
      ]
    ]
  ],
  "added": [
    [
      "00b82df4",
      "WRITE",
      [
        "storage",
        "Stack[-0x1c0]",
        null,
        null
      ]
    ],
    [
      "00b82df8",
      "WRITE",
      [
        "storage",
        "Stack[-0x1c8]",
        null,
        null
      ]
    ],
    [
      "00b82dfc",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b82e1c"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b83130 ["INT_ADD", "register:40f0:8", ["const:b83130:8", "const:4:8"]]
- 00b83130 ["CALL", null, ["callee:00c5cb40:8"]]
+ 00b831cc ["INT_ADD", "register:40f0:8", ["const:b831cc:8", "const:4:8"]]
+ 00b831cc ["CALL", null, ["callee:00c5cb40:8"]]
- 00b831cc ["INT_SUB", "register:4008:8", ["register:40e8:8", "const:98:8"]]
- 00b831fc ["BRANCH", null, ["local:b75:8"]]
+ 00b83298 ["BRANCH", null, ["local:b73:8"]]
~~~


<a id="compare-dd2c03a4b563de660a9df864c77fbe4f"></a>

### [`00b84314`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b84/00b84314.md) → [`00b843b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b84/00b843b0.md) _ZN11flatbuffers6Parser9StartEnumERKNSt6__ndk112basic_stringIcNS1_11char_traitsIcEENS1_9allocatorIcEEEEbPPNS_7EnumDefE

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`00c5c7e0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5c/00c5c7e0.md) · 呼出先 9件 [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md) [`00c580b0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c580b0.md) [`00c5b0b0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5b0b0.md)
- 新版 呼出元 1件 [`00c5c8b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5c8b0.md) · 呼出先 9件 [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md) [`00c58180`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58180.md) [`00c5b180`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b180.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_store_alignment

命令の説明率　旧版 93.98% / 新版 93.98%

優先判定に残った影響 `call_argument_candidate` 4件, `unresolved_branch_alignment` 2件, `unresolved_store_alignment` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b84500",
      "incomplete_value": false,
      "site": "00b8450c",
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
            "const:275:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b84464",
      "incomplete_value": false,
      "site": "00b84470",
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
            "const:2d1:8"
          ]
        ]
      ]
    },
    "ordinal": 6,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b84514",
      "incomplete_value": false,
      "site": "00b84520",
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
            "const:b69:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b84478",
      "incomplete_value": false,
      "site": "00b84484",
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
            "const:bb6:8"
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
    "new": null,
    "old": {
      "definition_site": "00b8448c",
      "incomplete_value": true,
      "site": "00b84490",
      "value": [
        "live",
        "register:40a0:8"
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
      "unmatched:00b84370",
      "READ",
      [
        "storage",
        "002c3ed8",
        null,
        "undefined8"
      ]
    ],
    [
      "unmatched:00b843c0",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b84480"
      ]
    ],
    [
      "unmatched:00b843f4",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b844b4"
      ]
    ]
  ],
  "added": [
    [
      "00b8440c",
      "READ",
      [
        "storage",
        "002c3f18",
        null,
        "undefined8"
      ]
    ],
    [
      "00b8445c",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b84480"
      ]
    ],
    [
      "00b84490",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b844b4"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b84470 ["INT_ADD", "register:40f0:8", ["const:b84470:8", "const:4:8"]]
- 00b84470 ["CALL", null, ["callee:00c58180:8"]]
+ 00b8450c ["INT_ADD", "register:40f0:8", ["const:b8450c:8", "const:4:8"]]
+ 00b8450c ["CALL", null, ["callee:00c58180:8"]]
- 00b84484 ["INT_ADD", "register:40f0:8", ["const:b84484:8", "const:4:8"]]
- 00b84484 ["CALL", null, ["callee:00c58180:8"]]
+ 00b84520 ["INT_ADD", "register:40f0:8", ["const:b84520:8", "const:4:8"]]
+ 00b84520 ["CALL", null, ["callee:00c58180:8"]]
- 00b84490 ["INT_ADD", "register:40f0:8", ["const:b84490:8", "const:4:8"]]
- 00b84490 ["CALL", null, ["callee:00c5c840:8"]]
+ 00b8452c ["INT_ADD", "register:40f0:8", ["const:b8452c:8", "const:4:8"]]
+ 00b8452c ["CALL", null, ["callee:00c5c840:8"]]
~~~


<a id="compare-d4efd693d4047002e0f908ba32b4d8f4"></a>

### [`00b84528`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b84/00b84528.md) → [`00b845c4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b84/00b845c4.md) _ZNK11flatbuffers6Parser27SupportsUnionUnderlyingTypeEv

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal` · `compiler_shape_candidate`

- 旧版 呼出元 0件  · 呼出先 0件 
- 新版 呼出元 0件  · 呼出先 0件 

変更の種類 cfg_edge_inventory

命令の説明率　旧版 0.00% / 新版 0.00%

<a id="compare-bbc875e04b4acb5e65003a7a401d77a6"></a>

### [`00b8453c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b84/00b8453c.md) → [`00b845d8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b84/00b845d8.md) _ZN11flatbuffers6Parser16ParseProtoOptionEv

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal` · `cfg_change`

- 旧版 呼出元 1件 [`00c5c620`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5c/00c5c620.md) · 呼出先 3件 [`00c5c560`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5c/00c5c560.md) [`00c5c6f0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5c/00c5c6f0.md) [`00c5c750`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5c/00c5c750.md)
- 新版 呼出元 1件 [`00c5c6f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5c6f0.md) · 呼出先 3件 [`00c5c630`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5c630.md) [`00c5c7c0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5c7c0.md) [`00c5c820`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5c820.md)

変更の種類 branch_condition_or_target, cfg_edge_inventory, constant, control_flow, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00b84554 ["INT_ADD", "register:40f0:8", ["const:b84554:8", "const:4:8"]]
- 00b84554 ["CALL", null, ["callee:00c5c7c0:8"]]
+ 00b845f0 ["INT_ADD", "register:40f0:8", ["const:b845f0:8", "const:4:8"]]
+ 00b845f0 ["CALL", null, ["callee:00c5c7c0:8"]]
- 00b84564 ["INT_NOTEQUAL", "tmp:0:1", ["register:4040:4", "const:0:4"]]
- 00b84564 ["CBRANCH", null, ["local:b19:8", "tmp:0:1"]]
+ 00b84600 ["INT_NOTEQUAL", "tmp:0:1", ["register:4040:4", "const:0:4"]]
+ 00b84600 ["CBRANCH", null, ["local:b16:8", "tmp:0:1"]]
- 00b84570 ["INT_ADD", "register:40f0:8", ["const:b84570:8", "const:4:8"]]
- 00b84570 ["CALL", null, ["callee:00c5c630:8"]]
+ 00b8460c ["INT_ADD", "register:40f0:8", ["const:b8460c:8", "const:4:8"]]
+ 00b8460c ["CALL", null, ["callee:00c5c630:8"]]
~~~


<a id="compare-3dc07a4bd7e66d0ce8fe1d33ad7130d4"></a>

### [`00b84634`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b84/00b84634.md) → [`00b846d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b84/00b846d0.md) _ZN11flatbuffers14EnumValBuilder21AssignEnumeratorValueERKNSt6__ndk112basic_stringIcNS1_11char_traitsIcEENS1_9allocatorIcEEEE

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`00c5c190`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5c/00c5c190.md) · 呼出先 7件 [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md) [`00c57f80`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57f80.md) [`00c580b0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c580b0.md) [`00c5c1b0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5c/00c5c1b0.md)
- 新版 呼出元 1件 [`00c5c260`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5c260.md) · 呼出先 7件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md) [`00c58050`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58050.md) [`00c58180`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58180.md) [`00c5c280`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5c280.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 97.44% / 新版 97.44%

優先判定に残った影響 `call_argument_candidate` 3件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b847d4",
      "incomplete_value": false,
      "site": "00b847e0",
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
            "const:b9d:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b84738",
      "incomplete_value": false,
      "site": "00b84744",
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
            "const:b5d:8"
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
    "new": {
      "definition_site": "00b847e8",
      "incomplete_value": false,
      "site": "00b847f8",
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
            "const:ecd:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b8474c",
      "incomplete_value": false,
      "site": "00b8475c",
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
            "const:e8d:8"
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
      "definition_site": "00b8481c",
      "incomplete_value": false,
      "site": "00b84824",
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
            "const:b69:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b84780",
      "incomplete_value": false,
      "site": "00b84788",
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
            "const:bb6:8"
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
      "00b847d4",
      "PARAM",
      [
        "storage",
        "002c0b5d",
        null,
        "string"
      ]
    ],
    [
      "00b847e8",
      "PARAM",
      [
        "storage",
        "002b5e8d",
        null,
        null
      ]
    ],
    [
      "00b8481c",
      "PARAM",
      [
        "storage",
        "002a0bb6",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "00b847d4",
      "PARAM",
      [
        "storage",
        "002c0b9d",
        null,
        "string"
      ]
    ],
    [
      "00b847e8",
      "PARAM",
      [
        "storage",
        "002b5ecd",
        null,
        null
      ]
    ],
    [
      "00b8481c",
      "PARAM",
      [
        "storage",
        "002a0b69",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b84744 ["INT_ADD", "register:40f0:8", ["const:b84744:8", "const:4:8"]]
- 00b84744 ["CALL", null, ["callee:00c58180:8"]]
+ 00b847e0 ["INT_ADD", "register:40f0:8", ["const:b847e0:8", "const:4:8"]]
+ 00b847e0 ["CALL", null, ["callee:00c58180:8"]]
- 00b8475c ["INT_ADD", "register:40f0:8", ["const:b8475c:8", "const:4:8"]]
- 00b8475c ["CALL", null, ["callee:00c58050:8"]]
+ 00b847f8 ["INT_ADD", "register:40f0:8", ["const:b847f8:8", "const:4:8"]]
+ 00b847f8 ["CALL", null, ["callee:00c58050:8"]]
- 00b84788 ["INT_ADD", "register:40f0:8", ["const:b84788:8", "const:4:8"]]
- 00b84788 ["CALL", null, ["callee:00c58180:8"]]
+ 00b84824 ["INT_ADD", "register:40f0:8", ["const:b84824:8", "const:4:8"]]
+ 00b84824 ["CALL", null, ["callee:00c58180:8"]]
~~~


<a id="compare-6e583e8022d92107a69dcacce1f0e7b0"></a>

### [`00b84808`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b84/00b84808.md) → [`00b848a4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b84/00b848a4.md) _ZN11flatbuffers11SymbolTableINS_4TypeEE3AddERKNSt6__ndk112basic_stringIcNS3_11char_traitsIcEENS3_9allocatorIcEEEEPS1_

根拠 `symbol` · `raw_instruction_pcode` · `bounded` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`00c5c050`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5c/00c5c050.md) · 呼出先 9件 [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md) [`00c58000`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58000.md) [`00c5b140`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5b140.md)
- 新版 呼出元 1件 [`00c5c120`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5c120.md) · 呼出先 9件 [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md) [`00c580d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c580d0.md) [`00c5b210`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b210.md)

変更の種類 branch_condition_or_target, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_return_alignment, unresolved_store_alignment

命令の説明率　旧版 94.55% / 新版 94.55%

優先判定に残った影響 `unresolved_branch_alignment` 1件, `unresolved_return_alignment` 1件, `unresolved_store_alignment` 1件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00b8483c",
      "WRITE",
      [
        "storage",
        "Stack[-0x68]",
        null,
        null
      ]
    ],
    [
      "unmatched:00b8486c",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b84934"
      ]
    ]
  ],
  "added": [
    [
      "00b848d8",
      "WRITE",
      [
        "storage",
        "Stack[-0x68]",
        null,
        null
      ]
    ],
    [
      "00b84908",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b84934"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b8483c ["INT_ADD", "tmp:0:8", ["register:8:8", "const:8:8"]]
- 00b8483c ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4040:8"]]
- 00b84848 ["CBRANCH", null, ["local:b2:8", "register:102:1"]]
+ 00b848e4 ["CBRANCH", null, ["local:b3:8", "register:102:1"]]
- 00b84860 ["INT_SRIGHT", "register:40d0:8", ["register:40b8:8", "const:3:8"]]
~~~


<a id="compare-983830f54e2cc619b19dee0909bb2a1d"></a>

### [`00b849c0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b84/00b849c0.md) → [`00b84a5c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b84/00b84a5c.md) _ZN11flatbuffers6Parser11StartStructERKNSt6__ndk112basic_stringIcNS1_11char_traitsIcEENS1_9allocatorIcEEEEPPNS_9StructDefE

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`00c5c500`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5c/00c5c500.md) · 呼出先 8件 [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md) [`00c580b0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c580b0.md) [`00c58fd0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58fd0.md) [`00c5b0b0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5b0b0.md)
- 新版 呼出元 1件 [`00c5c5d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5c5d0.md) · 呼出先 8件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md) [`00c58180`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58180.md) [`00c590a0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c59/00c590a0.md) [`00c5b180`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b180.md)

変更の種類 branch_condition_or_target, call_argument_candidate, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, operands_and_dependencies, operation_sequence, unresolved_branch_alignment

命令の説明率　旧版 96.03% / 新版 96.03%

優先判定に残った影響 `call_argument_candidate` 3件, `unresolved_branch_alignment` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b84b90",
      "incomplete_value": true,
      "site": "00b84ba0",
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
            "const:abb:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b84af4",
      "incomplete_value": false,
      "site": "00b84b04",
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
            "const:b08:8"
          ]
        ]
      ]
    },
    "ordinal": 4,
    "slot": 3
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b84bc4",
      "incomplete_value": false,
      "site": "00b84bcc",
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
            "const:b69:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b84b28",
      "incomplete_value": false,
      "site": "00b84b30",
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
            "const:bb6:8"
          ]
        ]
      ]
    },
    "ordinal": 5,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b84bac",
      "incomplete_value": true,
      "site": "00b84bcc",
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
      "unmatched:00b84a14",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b84ad4"
      ]
    ],
    [
      "unmatched:00b84a44",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b84b04"
      ]
    ],
    [
      "unmatched:00b84af4",
      "PARAM",
      [
        "storage",
        "0029fb08",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "00b84ab0",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b84ad4"
      ]
    ],
    [
      "00b84ae0",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b84b04"
      ]
    ],
    [
      "00b84b90",
      "PARAM",
      [
        "storage",
        "0029fabb",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b84b04 ["INT_ADD", "register:40f0:8", ["const:b84b04:8", "const:4:8"]]
- 00b84b04 ["CALL", null, ["callee:00c590a0:8"]]
+ 00b84ba0 ["INT_ADD", "register:40f0:8", ["const:b84ba0:8", "const:4:8"]]
+ 00b84ba0 ["CALL", null, ["callee:00c590a0:8"]]
- 00b84b30 ["INT_ADD", "register:40f0:8", ["const:b84b30:8", "const:4:8"]]
- 00b84b30 ["CALL", null, ["callee:00c58180:8"]]
+ 00b84bcc ["INT_ADD", "register:40f0:8", ["const:b84bcc:8", "const:4:8"]]
+ 00b84bcc ["CALL", null, ["callee:00c58180:8"]]
- 00b849fc ["INT_ADD", "register:40f0:8", ["const:b849fc:8", "const:4:8"]]
- 00b849fc ["CALL", null, ["callee:00c5c730:8"]]
+ 00b84a98 ["INT_ADD", "register:40f0:8", ["const:b84a98:8", "const:4:8"]]
+ 00b84a98 ["CALL", null, ["callee:00c5c730:8"]]
~~~


<a id="compare-863ea24bc45d5e77aeb75e58d933d047"></a>

### [`00b84bb8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b84/00b84bb8.md) → [`00b84c54`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b84/00b84c54.md) _ZN11flatbuffers6Parser10CheckClashERNSt6__ndk16vectorIPNS_8FieldDefENS1_9allocatorIS4_EEEEPNS_9StructDefEPKcNS_8BaseTypeE

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`00c5c440`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5c/00c5c440.md) · 呼出先 10件 [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md) [`00c57f80`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57f80.md) [`00c57fe0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57fe0.md) [`00c58050`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58050.md)
- 新版 呼出元 1件 [`00c5c510`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5c510.md) · 呼出先 10件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md) [`00c58050`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58050.md) [`00c580b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c580b0.md) [`00c58120`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58120.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, constant, control_flow, control_flow_count, local_def_use, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_store_alignment

命令の説明率　旧版 92.18% / 新版 92.18%

優先判定に残った影響 `call_argument_candidate` 6件, `unresolved_branch_alignment` 4件, `unresolved_store_alignment` 6件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "00b84cfc",
      "incomplete_value": true,
      "site": "00b84d00",
      "value": [
        "live",
        "register:40c8:8"
      ]
    },
    "ordinal": 4,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "00b84cf8",
      "incomplete_value": true,
      "site": "00b84d00",
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
            "const:70:8"
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
      "definition_site": "00b84e20",
      "incomplete_value": false,
      "site": "00b84e2c",
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
            "const:b58:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b84d84",
      "incomplete_value": false,
      "site": "00b84d90",
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
            "const:b18:8"
          ]
        ]
      ]
    },
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
      "unmatched:00b84c5c",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b84cbc"
      ]
    ],
    [
      "unmatched:00b84c74",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b84f18"
      ]
    ],
    [
      "unmatched:00b84ccc",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b84cbc"
      ]
    ]
  ],
  "added": [
    [
      "00b84cf8",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b84cbc"
      ]
    ],
    [
      "00b84d10",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b84f18"
      ]
    ],
    [
      "00b84d68",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b84cbc"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b84cf4 ["INT_ADD", "register:40f0:8", ["const:b84cf4:8", "const:4:8"]]
- 00b84cf4 ["CALL", null, ["callee:00c5b8c0:8"]]
+ 00b84d90 ["INT_ADD", "register:40f0:8", ["const:b84d90:8", "const:4:8"]]
+ 00b84d90 ["CALL", null, ["callee:00c5b8c0:8"]]
- 00b84d00 ["INT_ADD", "register:40f0:8", ["const:b84d00:8", "const:4:8"]]
- 00b84d00 ["CALL", null, ["callee:00c5cb70:8"]]
+ 00b84d9c ["INT_ADD", "register:40f0:8", ["const:b84d9c:8", "const:4:8"]]
+ 00b84d9c ["CALL", null, ["callee:00c5cb70:8"]]
- 00b84d08 ["CBRANCH", null, ["local:b34:8", "register:101:1"]]
+ 00b84da4 ["CBRANCH", null, ["local:b36:8", "register:101:1"]]
~~~


<a id="compare-292cd0e2a45588e94a9226404bb27762"></a>

### [`00b84e84`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b84/00b84e84.md) → [`00b84f20`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b84/00b84f20.md) _ZNK11flatbuffers6Parser16GetIncludedFilesEv

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c5ca60`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5c/00c5ca60.md) [`00c5cff0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5c/00c5cff0.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c5cb30`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5cb30.md) [`00c5d0c0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5d0c0.md)

変更の種類 branch_condition_or_target, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, operands_and_dependencies, operation_sequence, store_condition, unresolved_branch_alignment

命令の説明率　旧版 90.91% / 新版 90.91%

優先判定に残った影響 `store_condition` 3件, `unresolved_branch_alignment` 1件

~~~json
[
  {
    "confidence": "limited",
    "guard": [
      [
        "CONDITIONAL_JUMP",
        "00b84eac"
      ],
      [
        "CONDITIONAL_JUMP",
        "00b84f48"
      ]
    ],
    "kind": "store_condition",
    "new": {
      "definition_site": "00b84f44",
      "incomplete_value": true,
      "site": "00b84f64",
      "value": [
        "INT_EQUAL",
        "1",
        [
          [
            "INT_SUB",
            "8",
            [
              "INT_ADD",
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
      "definition_site": "00b84ea8",
      "incomplete_value": true,
      "site": "00b84ec8",
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
                "register:4040:8"
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
    "ordinal": 4,
    "slot": 0
  },
  {
    "confidence": "limited",
    "guard": [
      [
        "CONDITIONAL_JUMP",
        "00b84eac"
      ],
      [
        "CONDITIONAL_JUMP",
        "00b84f48"
      ]
    ],
    "kind": "store_condition",
    "new": {
      "definition_site": "00b84f44",
      "incomplete_value": true,
      "site": "00b84f64",
      "value": [
        "INT_EQUAL",
        "1",
        [
          [
            "INT_SUB",
            "8",
            [
              "INT_ADD",
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
      "definition_site": "00b84ea8",
      "incomplete_value": true,
      "site": "00b84ec8",
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
                "register:4040:8"
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
    "ordinal": 5,
    "slot": 0
  },
  {
    "confidence": "limited",
    "guard": [
      [
        "CONDITIONAL_JUMP",
        "00b84eac"
      ],
      [
        "CONDITIONAL_JUMP",
        "00b84f48"
      ]
    ],
    "kind": "store_condition",
    "new": {
      "definition_site": "00b84f44",
      "incomplete_value": true,
      "site": "00b84f68",
      "value": [
        "INT_EQUAL",
        "1",
        [
          [
            "INT_SUB",
            "8",
            [
              "INT_ADD",
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
      "definition_site": "00b84ea8",
      "incomplete_value": true,
      "site": "00b84ecc",
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
                "register:4040:8"
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
      "unmatched:00b84eac",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b84f64"
      ]
    ]
  ],
  "added": [
    [
      "00b84f48",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b84f64"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b84ea0 ["INT_ADD", "register:40f0:8", ["const:b84ea0:8", "const:4:8"]]
- 00b84ea0 ["CALL", null, ["callee:00c5cb30:8"]]
+ 00b84f3c ["INT_ADD", "register:40f0:8", ["const:b84f3c:8", "const:4:8"]]
+ 00b84f3c ["CALL", null, ["callee:00c5cb30:8"]]
- 00b84ea8 ["INT_LESSEQUAL", "register:105:1", ["register:4000:8", "register:4040:8"]]
- 00b84ea8 ["INT_SBORROW", "register:106:1", ["register:4040:8", "register:4000:8"]]
- 00b84ea8 ["INT_SUB", "tmp:0:8", ["register:4040:8", "register:4000:8"]]
- 00b84ea8 ["INT_SLESS", "register:107:1", ["tmp:0:8", "const:0:8"]]
- 00b84eac ["CBRANCH", null, ["local:b3:8", "register:101:1"]]
~~~


<a id="compare-7128e678c610f4ef21c5703e3eaf6fab"></a>

### [`00b84edc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b84/00b84edc.md) → [`00b84f78`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b84/00b84f78.md) _ZNSt6__ndk16vectorIN11flatbuffers12IncludedFileENS_9allocatorIS2_EEEC2INS_21__tree_const_iteratorIS2_PNS_11__tree_nodeIS2_PvEElEEEET_NS_9en

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`00c5cff0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5c/00c5cff0.md) · 呼出先 3件 [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md) [`00c5b140`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5b140.md) [`00c5b5b0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5b5b0.md)
- 新版 呼出元 1件 [`00c5d0c0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5d0c0.md) · 呼出先 3件 [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c5b210`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b210.md) [`00c5b680`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b680.md)

変更の種類 branch_condition_or_target, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, operands_and_dependencies, operation_sequence, store_condition, unresolved_branch_alignment, unresolved_return_alignment

命令の説明率　旧版 93.02% / 新版 93.02%

優先判定に残った影響 `store_condition` 1件, `unresolved_branch_alignment` 2件, `unresolved_return_alignment` 1件

~~~json
[
  {
    "confidence": "limited",
    "guard": [
      [
        "CONDITIONAL_JUMP",
        "00b84fb4"
      ],
      [
        "CONDITIONAL_JUMP",
        "00b85050"
      ]
    ],
    "kind": "store_condition",
    "new": {
      "definition_site": "00b85048",
      "incomplete_value": true,
      "site": "00b850b4",
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
                "register:40a8:8"
              ],
              [
                "live",
                "register:4098:8"
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
      "definition_site": null,
      "incomplete_value": true,
      "site": "00b85018",
      "value": [
        "live",
        "register:101:1"
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
      "unmatched:00b84fb4",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b850b4"
      ]
    ],
    [
      "unmatched:00b85010",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b85098"
      ]
    ]
  ],
  "added": [
    [
      "00b85050",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b850b4"
      ]
    ],
    [
      "00b850ac",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b85098"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b84f80 ["CBRANCH", null, ["local:b24:8", "register:102:1"]]
+ 00b8501c ["CBRANCH", null, ["local:b23:8", "register:102:1"]]
- 00b84f90 ["INT_ADD", "register:40f0:8", ["const:b84f90:8", "const:4:8"]]
- 00b84f90 ["CALL", null, ["callee:00c57f60:8"]]
+ 00b8502c ["INT_ADD", "register:40f0:8", ["const:b8502c:8", "const:4:8"]]
+ 00b8502c ["CALL", null, ["callee:00c57f60:8"]]
- 00b84fa4 ["BRANCH", null, ["local:b15:8"]]
+ 00b85040 ["BRANCH", null, ["local:b14:8"]]
~~~


<a id="compare-c6ad8b5fa5927d4065a1181d7426783e"></a>

### [`00b8505c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b85/00b8505c.md) → [`00b850f8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b85/00b850f8.md) _ZN11flatbuffers6Parser15UniqueNamespaceEPNS_9NamespaceE

根拠 `symbol` · `raw_instruction_pcode` · `bounded` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`00c5c5d0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5c/00c5c5d0.md) · 呼出先 5件 [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c58000`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58000.md) [`00c58050`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58050.md) [`00c5b140`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5b140.md)
- 新版 呼出元 1件 [`00c5c6a0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5c6a0.md) · 呼出先 5件 [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c580d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c580d0.md) [`00c58120`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58120.md) [`00c5b210`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b210.md)

変更の種類 branch_condition_or_target, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_return_alignment, unresolved_store_alignment

命令の説明率　旧版 89.19% / 新版 89.19%

優先判定に残った影響 `unresolved_branch_alignment` 8件, `unresolved_return_alignment` 1件, `unresolved_store_alignment` 1件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00b850ac",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b85208"
      ]
    ],
    [
      "unmatched:00b85110",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b85140"
      ]
    ],
    [
      "unmatched:00b85154",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b851d4"
      ]
    ]
  ],
  "added": [
    [
      "00b85148",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b85208"
      ]
    ],
    [
      "00b851ac",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b85140"
      ]
    ],
    [
      "00b851f0",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b851d4"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b8508c ["CBRANCH", null, ["local:b19:8", "register:101:1"]]
+ 00b85128 ["CBRANCH", null, ["local:b21:8", "register:101:1"]]
- 00b850a0 ["BRANCH", null, ["local:b3:8"]]
+ 00b8513c ["BRANCH", null, ["local:b4:8"]]
- 00b850a8 ["INT_LESSEQUAL", "register:105:1", ["register:40d0:8", "register:40b8:8"]]
- 00b850a8 ["INT_SBORROW", "register:106:1", ["register:40b8:8", "register:40d0:8"]]
- 00b850a8 ["INT_SUB", "tmp:0:8", ["register:40b8:8", "register:40d0:8"]]
- 00b850a8 ["INT_SLESS", "register:107:1", ["tmp:0:8", "const:0:8"]]
~~~


<a id="compare-c7464d14f8acc77e4a3f34e712e00a14"></a>

### [`00b852ac`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b85/00b852ac.md) → [`00b85348`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b85/00b85348.md) _ZN11flatbuffers6Parser15UnqualifiedNameERKNSt6__ndk112basic_stringIcNS1_11char_traitsIcEENS1_9allocatorIcEEEE

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`00c5c5e0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5c/00c5c5e0.md) · 呼出先 7件 [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md) [`00c57fd0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57fd0.md) [`00c5b650`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5b650.md)
- 新版 呼出元 1件 [`00c5c6b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5c6b0.md) · 呼出先 7件 [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md) [`00c580a0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c580a0.md) [`00c5b720`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b720.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, operands_and_dependencies, operation_sequence, unresolved_branch_alignment

命令の説明率　旧版 93.00% / 新版 93.00%

優先判定に残った影響 `call_argument_candidate` 2件, `unresolved_branch_alignment` 6件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "00b85380",
      "incomplete_value": true,
      "site": "00b85384",
      "value": [
        "live",
        "register:40b0:8"
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
      "definition_site": "00b8537c",
      "incomplete_value": true,
      "site": "00b85384",
      "value": [
        "live",
        "register:8:8"
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
      "unmatched:00b8530c",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b8547c"
      ]
    ],
    [
      "unmatched:00b853b8",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b85480"
      ]
    ]
  ],
  "added": [
    [
      "00b853a8",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b8547c"
      ]
    ],
    [
      "00b85454",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b85480"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b85384 ["INT_ADD", "register:40f0:8", ["const:b85384:8", "const:4:8"]]
- 00b85384 ["CALL", null, ["callee:00c5b720:8"]]
+ 00b85420 ["INT_ADD", "register:40f0:8", ["const:b85420:8", "const:4:8"]]
+ 00b85420 ["CALL", null, ["callee:00c5b720:8"]]
- 00b852e4 ["INT_ADD", "register:40f0:8", ["const:b852e4:8", "const:4:8"]]
- 00b852e4 ["CALL", null, ["callee:00c57f60:8"]]
+ 00b85380 ["INT_ADD", "register:40f0:8", ["const:b85380:8", "const:4:8"]]
+ 00b85380 ["CALL", null, ["callee:00c57f60:8"]]
- 00b85304 ["COPY", "tmp:0:8", ["register:4058:8"]]
- 00b85304 ["CBRANCH", null, ["const:2:4", "register:101:1"]]
- 00b85304 ["COPY", "tmp:0:8", ["register:4048:8"]]
- 00b85304 ["COPY", "register:4010:8", ["tmp:0:8"]]
~~~


<a id="compare-1017d2386946bbed5ceb436341381127"></a>

### [`00b8543c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b85/00b8543c.md) → [`00b854d8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b85/00b854d8.md) _ZN11flatbuffers6Parser9ParseDeclEPKc

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`00c5c790`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5c/00c5c790.md) · 呼出先 30件 [`0054a614`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0054a/0054a614.md) [`00b76d2c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b76/00b76d2c.md) [`00b862ac`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b86/00b862ac.md) [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md)
- 新版 呼出元 1件 [`00c5c860`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5c860.md) · 呼出先 30件 [`0054a654`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0054a/0054a654.md) [`00b76dc8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b76/00b76dc8.md) [`00b86348`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b86/00b86348.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)

変更の種類 branch_condition_or_target, call, call_argument_candidate, call_count, cfg_edge_inventory, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, store_condition, store_value, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 79.11% / 新版 79.11%

優先判定に残った影響 `call_argument_candidate` 15件, `store_condition` 1件, `store_value` 7件, `unresolved_branch_alignment` 19件, `unresolved_call_alignment` 15件, `unresolved_store_alignment` 40件

アドレスに依存する影響 `store_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00b85604",
      "incomplete_value": true,
      "site": "00b85634",
      "value": [
        "LOAD",
        "16",
        [
          [
            "leaf",
            "const:1b1:8"
          ],
          [
            "INT_ADD",
            "8",
            [
              [
                "leaf",
                "const:2b2000:8"
              ],
              [
                "leaf",
                "const:6da:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b85568",
      "incomplete_value": true,
      "site": "00b85598",
      "value": [
        "LOAD",
        "16",
        [
          [
            "leaf",
            "const:1b1:8"
          ],
          [
            "INT_ADD",
            "8",
            [
              [
                "leaf",
                "const:2b2000:8"
              ],
              [
                "leaf",
                "const:6a9:8"
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
      "definition_site": "00b85a18",
      "incomplete_value": true,
      "site": "00b85a18",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:598:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b8597c",
      "incomplete_value": true,
      "site": "00b8597c",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:5f4:8"
              ]
            ]
          ]
        ]
      ]
    },
    "ordinal": 70,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00b85a1c",
      "incomplete_value": true,
      "site": "00b85a1c",
      "value": [
        "LOAD",
        "8",
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
      "definition_site": "00b85980",
      "incomplete_value": true,
      "site": "00b85980",
      "value": [
        "LOAD",
        "8",
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
    "ordinal": 71,
    "slot": 2
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00b8547c",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b85574"
      ]
    ],
    [
      "unmatched:00b8550c",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b855dc"
      ]
    ],
    [
      "unmatched:00b85524",
      "PARAM",
      [
        "storage",
        "002c1c1e",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "00b85518",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b85574"
      ]
    ],
    [
      "00b855a8",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b855dc"
      ]
    ],
    [
      "00b855c0",
      "PARAM",
      [
        "storage",
        "002c1c5e",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
+ 00b85598 ["INT_RIGHT", "register:4050:8", ["register:4040:8", "const:1:8"]]
- 00b855a0 ["INT_ADD", "register:40f0:8", ["const:b855a0:8", "const:4:8"]]
- 00b855a0 ["CALL", null, ["callee:00c58180:8"]]
+ 00b8563c ["INT_ADD", "register:40f0:8", ["const:b8563c:8", "const:4:8"]]
+ 00b8563c ["CALL", null, ["callee:00c58180:8"]]
+ 00b855a0 ["COPY", "tmp:0:8", ["register:4050:8"]]
+ 00b855a0 ["CBRANCH", null, ["const:2:4", "register:101:1"]]
+ 00b855a0 ["COPY", "tmp:0:8", ["register:4048:8"]]
+ 00b855a0 ["COPY", "register:4048:8", ["tmp:0:8"]]
~~~


<a id="compare-1835aab59c13d27265b6ae95e1f0e0c9"></a>

### [`00b863e4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b86/00b863e4.md) → [`00b86480`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b86/00b86480.md) _ZN11flatbuffers6Parser12ParseServiceEPKc

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`00c5c510`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5c/00c5c510.md) · 呼出先 21件 [`0054a614`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0054a/0054a614.md) [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md) [`00c57fe0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57fe0.md)
- 新版 呼出元 1件 [`00c5c5e0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5c5e0.md) · 呼出先 21件 [`0054a654`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0054a/0054a654.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md) [`00c580b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c580b0.md)

変更の種類 branch_condition_or_target, call, call_argument_candidate, call_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, store_value, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 94.13% / 新版 94.13%

優先判定に残った影響 `call_argument_candidate` 6件, `store_value` 3件, `unresolved_branch_alignment` 7件, `unresolved_call_alignment` 3件, `unresolved_store_alignment` 6件

アドレスに依存する影響 `store_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00b86a40",
      "incomplete_value": true,
      "site": "00b86a50",
      "value": [
        "LOAD",
        "16",
        [
          [
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
      "definition_site": "00b869a4",
      "incomplete_value": true,
      "site": "00b869b4",
      "value": [
        "LOAD",
        "16",
        [
          [
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
    "ordinal": 90,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00b86c78",
      "incomplete_value": true,
      "site": "00b86c88",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:ae0:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b86bdc",
      "incomplete_value": true,
      "site": "00b86bec",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:b2d:8"
              ]
            ]
          ]
        ]
      ]
    },
    "ordinal": 119,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00b86c78",
      "incomplete_value": true,
      "site": "00b86c88",
      "value": [
        "LOAD",
        "16",
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
      "definition_site": "00b86bdc",
      "incomplete_value": true,
      "site": "00b86bec",
      "value": [
        "LOAD",
        "16",
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
    "ordinal": 120,
    "slot": 2
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00b86620",
      "READ",
      [
        "storage",
        "002c3ed8",
        null,
        "undefined8"
      ]
    ],
    [
      "unmatched:00b86690",
      "UNCONDITIONAL_CALL",
      [
        "mapped_function",
        "00c5b180"
      ]
    ],
    [
      "unmatched:00b866a0",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b86760"
      ]
    ]
  ],
  "added": [
    [
      "00b866bc",
      "READ",
      [
        "storage",
        "002c3f18",
        null,
        "undefined8"
      ]
    ],
    [
      "00b8673c",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b86760"
      ]
    ],
    [
      "00b8675c",
      "UNCONDITIONAL_CALL",
      [
        "mapped_function",
        "00c5b180"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b86820 ["INT_ADD", "register:40f0:8", ["const:b86820:8", "const:4:8"]]
- 00b86820 ["CALL", null, ["callee:00c57f60:8"]]
+ 00b868bc ["INT_ADD", "register:40f0:8", ["const:b868bc:8", "const:4:8"]]
+ 00b868bc ["CALL", null, ["callee:00c57f60:8"]]
- 00b86870 ["BRANCH", null, ["local:b72:8"]]
+ 00b8690c ["BRANCH", null, ["local:b73:8"]]
- 00b8690c ["INT_ADD", "register:40f0:8", ["const:b8690c:8", "const:4:8"]]
- 00b8690c ["CALL", null, ["callee:00c58180:8"]]
+ 00b869a8 ["INT_ADD", "register:40f0:8", ["const:b869a8:8", "const:4:8"]]
+ 00b869a8 ["CALL", null, ["callee:00c58180:8"]]
~~~


<a id="compare-0c556caf4a728e60b7e7c3f9716aa8f8"></a>

### [`00b86e44`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b86/00b86e44.md) → [`00b86ee0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b86/00b86ee0.md) _ZN11flatbuffers11SymbolTableINS_10ServiceDefEE3AddERKNSt6__ndk112basic_stringIcNS3_11char_traitsIcEENS3_9allocatorIcEEEEPS1_

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`00c5c040`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5c/00c5c040.md) · 呼出先 9件 [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md) [`00c58000`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58000.md) [`00c5b140`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5b140.md)
- 新版 呼出元 1件 [`00c5c110`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5c110.md) · 呼出先 9件 [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md) [`00c580d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c580d0.md) [`00c5b210`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b210.md)

変更の種類 branch_condition_or_target, call_argument_candidate, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_store_alignment

命令の説明率　旧版 92.73% / 新版 92.73%

優先判定に残った影響 `call_argument_candidate` 2件, `unresolved_branch_alignment` 2件, `unresolved_store_alignment` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "00b86edc",
      "incomplete_value": true,
      "site": "00b86ee0",
      "value": [
        "INT_LEFT",
        "8",
        [
          [
            "live",
            "register:40d8:8"
          ],
          [
            "leaf",
            "const:3:8"
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
      "definition_site": "00b87004",
      "incomplete_value": true,
      "site": "00b8700c",
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
            "const:20:8"
          ]
        ]
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
      "unmatched:00b86e78",
      "WRITE",
      [
        "storage",
        "Stack[-0x68]",
        null,
        null
      ]
    ],
    [
      "unmatched:00b86ea8",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b86f70"
      ]
    ],
    [
      "unmatched:00b86fd4",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b87094"
      ]
    ]
  ],
  "added": [
    [
      "00b86f14",
      "WRITE",
      [
        "storage",
        "Stack[-0x68]",
        null,
        null
      ]
    ],
    [
      "00b86f44",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b86f70"
      ]
    ],
    [
      "00b87070",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b87094"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b86ee0 ["INT_ADD", "register:40f0:8", ["const:b86ee0:8", "const:4:8"]]
- 00b86ee0 ["CALL", null, ["callee:00c57f60:8"]]
+ 00b86f7c ["INT_ADD", "register:40f0:8", ["const:b86f7c:8", "const:4:8"]]
+ 00b86f7c ["CALL", null, ["callee:00c57f60:8"]]
- 00b86f70 ["INT_ADD", "register:40f0:8", ["const:b86f70:8", "const:4:8"]]
- 00b86f70 ["CALL", null, ["callee:00c5b680:8"]]
+ 00b8700c ["INT_ADD", "register:40f0:8", ["const:b8700c:8", "const:4:8"]]
+ 00b8700c ["CALL", null, ["callee:00c5b680:8"]]
- 00b86e78 ["INT_ADD", "tmp:0:8", ["register:8:8", "const:8:8"]]
- 00b86e78 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4040:8"]]
~~~


<a id="compare-1e8e36101e0a58e5b5aa7977050683ac"></a>

### [`00b86ffc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b86/00b86ffc.md) → [`00b87098`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b87/00b87098.md) _ZN11flatbuffers11SymbolTableINS_7RPCCallEE3AddERKNSt6__ndk112basic_stringIcNS3_11char_traitsIcEENS3_9allocatorIcEEEEPS1_

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`00c5c090`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5c/00c5c090.md) · 呼出先 9件 [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md) [`00c58000`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58000.md) [`00c5b140`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5b140.md)
- 新版 呼出元 1件 [`00c5c160`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5c160.md) · 呼出先 9件 [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md) [`00c580d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c580d0.md) [`00c5b210`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b210.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, store_condition, unresolved_branch_alignment, unresolved_store_alignment

命令の説明率　旧版 94.55% / 新版 94.55%

優先判定に残った影響 `call_argument_candidate` 3件, `store_condition` 5件, `unresolved_branch_alignment` 4件, `unresolved_store_alignment` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "00b870d8",
      "incomplete_value": true,
      "site": "00b870e0",
      "value": [
        "live",
        "register:40a0:8"
      ]
    },
    "ordinal": 4,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "00b870dc",
      "incomplete_value": true,
      "site": "00b870e0",
      "value": [
        "live",
        "register:40a8:8"
      ]
    },
    "ordinal": 4,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b871b0",
      "incomplete_value": false,
      "site": "00b871b4",
      "value": [
        "leaf",
        "const:40:8"
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
      "unmatched:00b87080",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b871f4"
      ]
    ],
    [
      "unmatched:00b870ec",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b87194"
      ]
    ],
    [
      "unmatched:00b8710c",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b87214"
      ]
    ]
  ],
  "added": [
    [
      "00b8711c",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b871f4"
      ]
    ],
    [
      "00b87188",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b87194"
      ]
    ],
    [
      "00b871a8",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b87214"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b87098 ["INT_ADD", "register:40f0:8", ["const:b87098:8", "const:4:8"]]
- 00b87098 ["CALL", null, ["callee:00c57f60:8"]]
+ 00b87134 ["INT_ADD", "register:40f0:8", ["const:b87134:8", "const:4:8"]]
+ 00b87134 ["CALL", null, ["callee:00c57f60:8"]]
- 00b870e0 ["INT_ADD", "register:40f0:8", ["const:b870e0:8", "const:4:8"]]
- 00b870e0 ["CALL", null, ["callee:00c5d000:8"]]
+ 00b8717c ["INT_ADD", "register:40f0:8", ["const:b8717c:8", "const:4:8"]]
+ 00b8717c ["CALL", null, ["callee:00c5d000:8"]]
- 00b87118 ["INT_ADD", "register:40f0:8", ["const:b87118:8", "const:4:8"]]
- 00b87118 ["CALL", null, ["callee:00c57f60:8"]]
+ 00b871b4 ["INT_ADD", "register:40f0:8", ["const:b871b4:8", "const:4:8"]]
+ 00b871b4 ["CALL", null, ["callee:00c57f60:8"]]
~~~


<a id="compare-dc9da482c09459b10293f17ab2656e97"></a>

### [`00b873cc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b87/00b873cc.md) → [`00b87468`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b87/00b87468.md) _ZN11flatbuffers6Parser13MarkGeneratedEv

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 0件 
- 新版 呼出元 0件  · 呼出先 0件 

変更の種類 branch_condition_or_target, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_store_alignment

命令の説明率　旧版 57.14% / 新版 57.14%

アドレスに依存する影響 `unresolved_branch_alignment` 4件, `unresolved_store_alignment` 4件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "00b8748c",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "unmatched:00b87428"
      ]
    ],
    [
      "unmatched:00b8741c",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "unmatched:00b87408"
      ]
    ],
    [
      "unmatched:00b87424",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b874d8"
      ]
    ]
  ],
  "added": [
    [
      "00b8748c",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b874c4"
      ]
    ],
    [
      "00b874b8",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b874a4"
      ]
    ],
    [
      "00b874c0",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b874d8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b873f4 ["INT_AND", "register:4058:8", ["register:4050:8", "const:3ffffffffffffffe:8"]]
- 00b873f8 ["COPY", "tmp:0:8", ["const:8:8"]]
- 00b873f8 ["INT_CARRY", "register:105:1", ["register:4060:8", "tmp:0:8"]]
- 00b873f8 ["INT_SCARRY", "register:106:1", ["register:4060:8", "tmp:0:8"]]
- 00b873f8 ["INT_ADD", "tmp:1:8", ["register:4060:8", "tmp:0:8"]]
- 00b873fc ["INT_LEFT", "tmp:0:8", ["register:4058:8", "const:3:4"]]
- 00b873fc ["COPY", "tmp:1:8", ["tmp:0:8"]]
- 00b873fc ["INT_CARRY", "register:105:1", ["register:4060:8", "tmp:1:8"]]
- 00b873fc ["INT_SCARRY", "register:106:1", ["register:4060:8", "tmp:1:8"]]
~~~


<a id="compare-1284e3d63f04bacf20aeaddb499c85c8"></a>

### [`00b874e4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b87/00b874e4.md) → [`00b87580`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b87/00b87580.md) _ZN11flatbuffers6Parser14ParseNamespaceEv

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`00c5c580`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5c/00c5c580.md) · 呼出先 9件 [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c58000`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58000.md) [`00c5b140`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5b140.md) [`00c5b5b0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5b5b0.md)
- 新版 呼出元 1件 [`00c5c650`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5c650.md) · 呼出先 9件 [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c580d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c580d0.md) [`00c5b210`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b210.md) [`00c5b680`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b680.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, store_condition, unresolved_branch_alignment, unresolved_store_alignment

命令の説明率　旧版 95.00% / 新版 95.00%

優先判定に残った影響 `call_argument_candidate` 2件, `store_condition` 1件, `unresolved_branch_alignment` 1件, `unresolved_store_alignment` 5件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b875d4",
      "incomplete_value": false,
      "site": "00b875d8",
      "value": [
        "leaf",
        "const:20:8"
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
      "definition_site": "00b87718",
      "incomplete_value": true,
      "site": "00b87728",
      "value": [
        "live",
        "register:40a0:8"
      ]
    },
    "old": null,
    "ordinal": 10,
    "slot": 1
  },
  {
    "confidence": "limited",
    "guard": [
      [
        "FALL_THROUGH",
        "00b8760c"
      ],
      [
        "FALL_THROUGH",
        "00b876a8"
      ]
    ],
    "kind": "store_condition",
    "new": {
      "definition_site": "00b876a4",
      "incomplete_value": true,
      "site": "00b876bc",
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
      "site": "00b87620",
      "value": [
        "live",
        "register:101:1"
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
      "unmatched:00b874f4",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "unmatched:00b874f8",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "unmatched:00b8760c",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b876c4"
      ]
    ]
  ],
  "added": [
    [
      "00b87590",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "00b87594",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "00b876a8",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b876c4"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b8753c ["INT_ADD", "register:40f0:8", ["const:b8753c:8", "const:4:8"]]
- 00b8753c ["CALL", null, ["callee:00c57f60:8"]]
+ 00b875d8 ["INT_ADD", "register:40f0:8", ["const:b875d8:8", "const:4:8"]]
+ 00b875d8 ["CALL", null, ["callee:00c57f60:8"]]
- 00b875d8 ["INT_ADD", "register:40f0:8", ["const:b875d8:8", "const:4:8"]]
- 00b875d8 ["CALL", null, ["callee:00c580d0:8"]]
+ 00b87674 ["INT_ADD", "register:40f0:8", ["const:b87674:8", "const:4:8"]]
+ 00b87674 ["CALL", null, ["callee:00c580d0:8"]]
- 00b8768c ["INT_ADD", "register:40f0:8", ["const:b8768c:8", "const:4:8"]]
- 00b8768c ["CALL", null, ["callee:00c5c6a0:8"]]
+ 00b87728 ["INT_ADD", "register:40f0:8", ["const:b87728:8", "const:4:8"]]
+ 00b87728 ["CALL", null, ["callee:00c5c6a0:8"]]
~~~


<a id="compare-92f4e6ae834d479eb5724740b40ea401"></a>

### [`00b876c4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b87/00b876c4.md) → [`00b87760`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b87/00b87760.md) _ZN11flatbuffers6Parser14ParseProtoDeclEv

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`00c5c590`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5c/00c5c590.md) · 呼出先 25件 [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md) [`00c57fe0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57fe0.md) [`00c58000`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58000.md)
- 新版 呼出元 1件 [`00c5c660`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5c660.md) · 呼出先 25件 [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md) [`00c580b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c580b0.md) [`00c580d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c580d0.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 95.69% / 新版 95.69%

優先判定に残った影響 `call_argument_candidate` 5件, `unresolved_branch_alignment` 3件, `unresolved_call_alignment` 1件, `unresolved_store_alignment` 4件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b87aa0",
      "incomplete_value": true,
      "site": "00b87aa4",
      "value": [
        "LOAD",
        "8",
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
              "INT_LEFT"
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b87a04",
      "incomplete_value": true,
      "site": "00b87a08",
      "value": [
        "live",
        "register:40b0:8"
      ]
    },
    "ordinal": 13,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b87c60",
      "incomplete_value": false,
      "site": "00b87c70",
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
            "const:23b:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b87bc4",
      "incomplete_value": false,
      "site": "00b87bd4",
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
            "const:297:8"
          ]
        ]
      ]
    },
    "ordinal": 23,
    "slot": 3
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b87c94",
      "incomplete_value": false,
      "site": "00b87c9c",
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
            "const:b69:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b87bf8",
      "incomplete_value": false,
      "site": "00b87c00",
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
            "const:bb6:8"
          ]
        ]
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
      "unmatched:00b876f4",
      "WRITE",
      [
        "storage",
        "Stack[-0x68]",
        null,
        null
      ]
    ],
    [
      "unmatched:00b87720",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b87904"
      ]
    ],
    [
      "unmatched:00b87738",
      "PARAM",
      [
        "storage",
        "002b26be",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "00b87790",
      "WRITE",
      [
        "storage",
        "Stack[-0x68]",
        null,
        null
      ]
    ],
    [
      "00b877bc",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b87904"
      ]
    ],
    [
      "00b877d4",
      "PARAM",
      [
        "storage",
        "002b26ef",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b8796c ["INT_RIGHT", "tmp:0:4", ["register:4048:4", "const:0:4"]]
- 00b8796c ["INT_AND", "tmp:1:4", ["tmp:0:4", "const:1:4"]]
- 00b8796c ["INT_EQUAL", "tmp:2:1", ["tmp:1:4", "const:0:4"]]
- 00b8796c ["INT_EQUAL", "tmp:3:1", ["tmp:2:1", "const:1:1"]]
+ 00b87a08 ["INT_RIGHT", "tmp:0:4", ["register:4048:4", "const:0:4"]]
+ 00b87a08 ["INT_AND", "tmp:1:4", ["tmp:0:4", "const:1:4"]]
+ 00b87a08 ["INT_EQUAL", "tmp:2:1", ["tmp:1:4", "const:0:4"]]
+ 00b87a08 ["INT_EQUAL", "tmp:3:1", ["tmp:2:1", "const:1:1"]]
- 00b87a08 ["INT_ADD", "register:40f0:8", ["const:b87a08:8", "const:4:8"]]
- 00b87a08 ["CALL", null, ["callee:00c580b0:8"]]
+ 00b87aa4 ["INT_ADD", "register:40f0:8", ["const:b87aa4:8", "const:4:8"]]
+ 00b87aa4 ["CALL", null, ["callee:00c580b0:8"]]
- 00b87bd4 ["INT_ADD", "register:40f0:8", ["const:b87bd4:8", "const:4:8"]]
- 00b87bd4 ["CALL", null, ["callee:00c590a0:8"]]
+ 00b87c70 ["INT_ADD", "register:40f0:8", ["const:b87c70:8", "const:4:8"]]
+ 00b87c70 ["CALL", null, ["callee:00c590a0:8"]]
~~~


<a id="compare-a0bb420f0a88dbca93f7439c7ac6cc82"></a>

### [`00b88148`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b88/00b88148.md) → [`00b881e4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b88/00b881e4.md) _ZN11flatbuffers6Parser16ParseProtoFieldsEPNS_9StructDefEbb

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 2件 [`00b88148`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b88/00b88148.md) [`00c5c610`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5c/00c5c610.md) · 呼出先 35件 [`00b88148`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b88/00b88148.md) [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md) [`00c57f80`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57f80.md)
- 新版 呼出元 2件 [`00b881e4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b88/00b881e4.md) [`00c5c6e0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5c6e0.md) · 呼出先 35件 [`00b881e4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b88/00b881e4.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md) [`00c58050`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58050.md)

変更の種類 branch_condition_or_target, call_argument_candidate, comparison, comparison_count, constant, control_flow, local_def_use, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_call_alignment, unresolved_return_alignment, unresolved_store_alignment

命令の説明率　旧版 94.76% / 新版 94.76%

優先判定に残った影響 `call_argument_candidate` 17件, `unresolved_branch_alignment` 5件, `unresolved_call_alignment` 1件, `unresolved_return_alignment` 1件, `unresolved_store_alignment` 18件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b88520",
      "incomplete_value": true,
      "site": "00b88524",
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
            "const:6d2:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b88484",
      "incomplete_value": true,
      "site": "00b88488",
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
            "const:72e:8"
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
      "definition_site": "00b88540",
      "incomplete_value": true,
      "site": "00b88544",
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
            "const:682:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b884a4",
      "incomplete_value": true,
      "site": "00b884a8",
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
            "const:651:8"
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
      "definition_site": "00b88570",
      "incomplete_value": true,
      "site": "00b88574",
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
            "const:c64:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b884d4",
      "incomplete_value": true,
      "site": "00b884d8",
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
            "const:cb1:8"
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
      "unmatched:00b881e0",
      "READ",
      [
        "storage",
        "Stack[-0x70]",
        null,
        null
      ]
    ],
    [
      "unmatched:00b88218",
      "WRITE",
      [
        "storage",
        "Stack[-0x2f0]",
        null,
        null
      ]
    ],
    [
      "unmatched:00b88220",
      "WRITE",
      [
        "storage",
        "Stack[-0x2f8]",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "00b8827c",
      "READ",
      [
        "storage",
        "Stack[-0x70]",
        null,
        null
      ]
    ],
    [
      "00b882b4",
      "WRITE",
      [
        "storage",
        "Stack[-0x2f0]",
        null,
        null
      ]
    ],
    [
      "00b882bc",
      "WRITE",
      [
        "storage",
        "Stack[-0x2f8]",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 00b883ec ["CBRANCH", null, ["local:b148:8", "register:101:1"]]
+ 00b88488 ["CBRANCH", null, ["local:b149:8", "register:101:1"]]
- 00b88488 ["INT_ADD", "register:40f0:8", ["const:b88488:8", "const:4:8"]]
- 00b88488 ["CALL", null, ["callee:00c58120:8"]]
+ 00b88524 ["INT_ADD", "register:40f0:8", ["const:b88524:8", "const:4:8"]]
+ 00b88524 ["CALL", null, ["callee:00c58120:8"]]
- 00b884a8 ["INT_ADD", "register:40f0:8", ["const:b884a8:8", "const:4:8"]]
- 00b884a8 ["CALL", null, ["callee:00c58120:8"]]
+ 00b88544 ["INT_ADD", "register:40f0:8", ["const:b88544:8", "const:4:8"]]
+ 00b88544 ["CALL", null, ["callee:00c58120:8"]]
~~~


<a id="compare-f6e2e91522924f5ad07aac5fdaccfeda"></a>

### [`00b89970`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b89/00b89970.md) → [`00b89a0c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b89/00b89a0c.md) _ZN11flatbuffers6Parser24ParseProtoCurliesOrIdentEv

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c5c6f0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5c/00c5c6f0.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c5c7c0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5c7c0.md)

変更の種類 cfg_edge_inventory, constant, control_flow, control_flow_count, local_def_use, operands_and_dependencies, operation_sequence, unresolved_return_alignment

命令の説明率　旧版 97.44% / 新版 97.44%

アドレスに依存する影響 `unresolved_return_alignment` 1件

~~~diff
- 00b8998c ["INT_ADD", "register:40f0:8", ["const:b8998c:8", "const:4:8"]]
- 00b8998c ["CALL", null, ["callee:00c5c7c0:8"]]
+ 00b89a28 ["INT_ADD", "register:40f0:8", ["const:b89a28:8", "const:4:8"]]
+ 00b89a28 ["CALL", null, ["callee:00c5c7c0:8"]]
- 00b899c4 ["INT_ADD", "register:40f0:8", ["const:b899c4:8", "const:4:8"]]
- 00b899c4 ["CALL", null, ["callee:00c5c7c0:8"]]
+ 00b89a60 ["INT_ADD", "register:40f0:8", ["const:b89a60:8", "const:4:8"]]
+ 00b89a60 ["CALL", null, ["callee:00c5c7c0:8"]]
- 00b89a08 ["COPY", "register:0:8", ["register:40f0:8"]]
- 00b89a08 ["RETURN", null, ["register:0:8"]]
~~~


<a id="compare-96b7d50434dab0a21075181b391e2214"></a>

### [`00b89a0c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b89/00b89a0c.md) → [`00b89aa8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b89/00b89aa8.md) _ZN11flatbuffers11SymbolTableINS_7EnumDefEE3AddERKNSt6__ndk112basic_stringIcNS3_11char_traitsIcEENS3_9allocatorIcEEEEPS1_

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal` · `cfg_change`

- 旧版 呼出元 1件 [`00c5c070`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5c/00c5c070.md) · 呼出先 9件 [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md) [`00c58000`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58000.md) [`00c5b140`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5b140.md)
- 新版 呼出元 1件 [`00c5c140`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5c140.md) · 呼出先 9件 [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md) [`00c580d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c580d0.md) [`00c5b210`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b210.md)

変更の種類 branch_condition_or_target, cfg_edge_inventory, constant, control_flow, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00b89a90 ["INT_EQUAL", "tmp:0:1", ["register:40d8:8", "const:0:8"]]
- 00b89a90 ["CBRANCH", null, ["local:b18:8", "tmp:0:1"]]
+ 00b89b2c ["INT_EQUAL", "tmp:0:1", ["register:40d8:8", "const:0:8"]]
+ 00b89b2c ["CBRANCH", null, ["local:b19:8", "tmp:0:1"]]
- 00b89a9c ["INT_ADD", "register:40f0:8", ["const:b89a9c:8", "const:4:8"]]
- 00b89a9c ["CALL", null, ["callee:00c5b210:8"]]
+ 00b89b38 ["INT_ADD", "register:40f0:8", ["const:b89b38:8", "const:4:8"]]
+ 00b89b38 ["CALL", null, ["callee:00c5b210:8"]]
- 00b89aa8 ["INT_ADD", "register:40f0:8", ["const:b89aa8:8", "const:4:8"]]
- 00b89aa8 ["CALL", null, ["callee:00c57f60:8"]]
+ 00b89b44 ["INT_ADD", "register:40f0:8", ["const:b89b44:8", "const:4:8"]]
+ 00b89b44 ["CALL", null, ["callee:00c57f60:8"]]
~~~


<a id="compare-084d2b8047f3adffc38a169ab062bc42"></a>

### [`00b89bc4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b89/00b89bc4.md) → [`00b89c60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b89/00b89c60.md) _ZN11flatbuffers6Parser18ParseProtoMapFieldEPNS_9StructDefE

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`00c5c670`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5c/00c5c670.md) · 呼出先 15件 [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md) [`00c57f80`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57f80.md) [`00c58000`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58000.md)
- 新版 呼出元 1件 [`00c5c740`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5c740.md) · 呼出先 15件 [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md) [`00c58050`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58050.md) [`00c580d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c580d0.md)

変更の種類 branch_condition_or_target, call, call_argument_candidate, call_count, cfg_edge_inventory, constant, control_flow, local_def_use, operands_and_dependencies, operation_sequence, store_condition, store_value, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 92.10% / 新版 92.10%

優先判定に残った影響 `call_argument_candidate` 20件, `store_condition` 4件, `unresolved_branch_alignment` 5件, `unresolved_call_alignment` 2件, `unresolved_store_alignment` 4件

アドレスに依存する影響 `store_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00b8a028",
      "incomplete_value": true,
      "site": "00b8a048",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:a8:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b89f8c",
      "incomplete_value": true,
      "site": "00b89fac",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:68:8"
              ]
            ]
          ]
        ]
      ]
    },
    "ordinal": 73,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "00b89c78",
      "incomplete_value": true,
      "site": "00b89c90",
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
            "const:a8:8"
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
      "definition_site": "00b89d70",
      "incomplete_value": true,
      "site": "00b89d74",
      "value": [
        "live",
        "register:40a8:8"
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
      "unmatched:00b89ce0",
      "WRITE",
      [
        "storage",
        "Stack[-0xf0]",
        null,
        null
      ]
    ],
    [
      "unmatched:00b89ce4",
      "UNCONDITIONAL_JUMP",
      [
        "local_branch",
        "00b89de8"
      ]
    ],
    [
      "00b89e2c",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "unmatched:00b89da8"
      ]
    ]
  ],
  "added": [
    [
      "00b89d7c",
      "WRITE",
      [
        "storage",
        "Stack[-0xf0]",
        null,
        null
      ]
    ],
    [
      "00b89d80",
      "UNCONDITIONAL_JUMP",
      [
        "local_branch",
        "00b89de8"
      ]
    ],
    [
      "00b89e2c",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b89e44"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b89c90 ["INT_ADD", "register:40f0:8", ["const:b89c90:8", "const:4:8"]]
- 00b89c90 ["CALL", null, ["callee:00c5c8a0:8"]]
+ 00b89d2c ["INT_ADD", "register:40f0:8", ["const:b89d2c:8", "const:4:8"]]
+ 00b89d2c ["CALL", null, ["callee:00c5c8a0:8"]]
- 00b89d54 ["INT_ADD", "register:40f0:8", ["const:b89d54:8", "const:4:8"]]
- 00b89d54 ["CALL", null, ["callee:00c5c7c0:8"]]
+ 00b89df0 ["INT_ADD", "register:40f0:8", ["const:b89df0:8", "const:4:8"]]
+ 00b89df0 ["CALL", null, ["callee:00c5c7c0:8"]]
- 00b89d74 ["INT_ADD", "register:40f0:8", ["const:b89d74:8", "const:4:8"]]
- 00b89d74 ["CALL", null, ["callee:00c5c820:8"]]
+ 00b89e10 ["INT_ADD", "register:40f0:8", ["const:b89e10:8", "const:4:8"]]
+ 00b89e10 ["CALL", null, ["callee:00c5c820:8"]]
~~~


<a id="compare-e0a1162672187f0d50a42491da3284b1"></a>

### [`00b8a0e8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b8a/00b8a0e8.md) → [`00b8a184`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b8a/00b8a184.md) _ZN11flatbuffers6Parser22ParseTypeFromProtoTypeEPNS_4TypeE

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`00c5c6c0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5c/00c5c6c0.md) · 呼出先 5件 [`00c57fe0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57fe0.md) [`00c58050`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58050.md) [`00c5b140`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5b140.md) [`00c5c5a0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5c/00c5c5a0.md) [`00c5c6f0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5c/00c5c6f0.md)
- 新版 呼出元 1件 [`00c5c790`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5c790.md) · 呼出先 5件 [`00c580b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c580b0.md) [`00c58120`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58120.md) [`00c5b210`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b210.md) [`00c5c670`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5c670.md) [`00c5c7c0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5c7c0.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, operands_and_dependencies, operation_sequence, unresolved_branch_alignment

命令の説明率　旧版 94.12% / 新版 94.12%

優先判定に残った影響 `call_argument_candidate` 1件, `unresolved_branch_alignment` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b8a1dc",
      "incomplete_value": true,
      "site": "00b8a1e0",
      "value": [
        "live",
        "register:40b8:8"
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
      "00b8a1d4",
      "READ",
      [
        "storage",
        "00c90868",
        null,
        "pointer"
      ]
    ],
    [
      "00b8a1dc",
      "PARAM",
      [
        "storage",
        "002bbe82",
        null,
        "string"
      ]
    ],
    [
      "00b8a1dc",
      "PARAM",
      [
        "storage",
        "002ae273",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "00b8a1d4",
      "READ",
      [
        "storage",
        "00c90938",
        null,
        "pointer"
      ]
    ],
    [
      "00b8a1dc",
      "PARAM",
      [
        "storage",
        "002bbe2e",
        null,
        "string"
      ]
    ],
    [
      "00b8a1dc",
      "PARAM",
      [
        "storage",
        "002ae217",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b8a144 ["INT_ADD", "register:40f0:8", ["const:b8a144:8", "const:4:8"]]
- 00b8a144 ["CALL", null, ["callee:00c580b0:8"]]
+ 00b8a1e0 ["INT_ADD", "register:40f0:8", ["const:b8a1e0:8", "const:4:8"]]
+ 00b8a1e0 ["CALL", null, ["callee:00c580b0:8"]]
- 00b8a0fc ["COPY", "tmp:0:8", ["const:40:8"]]
- 00b8a0fc ["INT_CARRY", "register:105:1", ["register:8:8", "tmp:0:8"]]
- 00b8a0fc ["INT_SCARRY", "register:106:1", ["register:8:8", "tmp:0:8"]]
- 00b8a0fc ["INT_ADD", "tmp:1:8", ["register:8:8", "tmp:0:8"]]
- 00b8a128 ["COPY", "tmp:0:8", ["const:e82:8"]]
- 00b8a128 ["INT_CARRY", "register:105:1", ["register:40b8:8", "tmp:0:8"]]
- 00b8a128 ["INT_SCARRY", "register:106:1", ["register:40b8:8", "tmp:0:8"]]
- 00b8a128 ["INT_ADD", "tmp:1:8", ["register:40b8:8", "tmp:0:8"]]
~~~


<a id="compare-f8440501a0cc38416ac114360e76a0c2"></a>

### [`00b8a1f8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b8a/00b8a1f8.md) → [`00b8a294`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b8a/00b8a294.md) _ZN11flatbuffers6Parser13ParseProtoKeyEv

根拠 `symbol` · `raw_instruction_pcode` · `bounded` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`00c5c560`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5c/00c5c560.md) · 呼出先 2件 [`00c5c6f0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5c/00c5c6f0.md) [`00c5c750`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5c/00c5c750.md)
- 新版 呼出元 1件 [`00c5c630`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5c630.md) · 呼出先 2件 [`00c5c7c0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5c7c0.md) [`00c5c820`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5c820.md)

変更の種類 branch_condition_or_target, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_return_alignment, unresolved_store_alignment

命令の説明率　旧版 92.42% / 新版 92.42%

優先判定に残った影響 `unresolved_return_alignment` 1件, `unresolved_store_alignment` 5件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00b8a1f8",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "unmatched:00b8a1fc",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "unmatched:00b8a200",
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
      "00b8a294",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "00b8a298",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "00b8a29c",
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
- 00b8a1f8 ["COPY", "tmp:0:8", ["register:40a8:8"]]
- 00b8a1f8 ["INT_ADD", "register:8:8", ["register:8:8", "const:ffffffffffffffd0:8"]]
- 00b8a1f8 ["STORE", null, ["const:1b1:8", "register:8:8", "tmp:0:8"]]
- 00b8a1fc ["COPY", "tmp:0:8", ["register:40a0:8"]]
- 00b8a1fc ["COPY", "tmp:1:8", ["register:4098:8"]]
- 00b8a1fc ["INT_ADD", "tmp:2:8", ["register:8:8", "const:10:8"]]
- 00b8a1fc ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
- 00b8a200 ["COPY", "tmp:0:8", ["register:40e8:8"]]
- 00b8a200 ["COPY", "tmp:1:8", ["register:40f0:8"]]
- 00b8a200 ["INT_ADD", "tmp:2:8", ["register:8:8", "const:20:8"]]
- 00b8a200 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
~~~


<a id="compare-df4deffddb9da59c3df283e1c8dc3a1f"></a>

### [`00b8a300`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b8a/00b8a300.md) → [`00b8a39c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b8a/00b8a39c.md) _ZN11flatbuffers14EnumValBuilder16AcceptEnumeratorERKNSt6__ndk112basic_stringIcNS1_11char_traitsIcEENS1_9allocatorIcEEEE

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`00c5c180`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5c/00c5c180.md) · 呼出先 6件 [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md) [`00c580b0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c580b0.md) [`00c5c080`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5c/00c5c080.md) [`00c5c170`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5c/00c5c170.md)
- 新版 呼出元 1件 [`00c5c250`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5c250.md) · 呼出先 6件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md) [`00c58180`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58180.md) [`00c5c150`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5c150.md) [`00c5c240`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5c240.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_return_alignment, unresolved_store_alignment

命令の説明率　旧版 84.38% / 新版 84.38%

優先判定に残った影響 `call_argument_candidate` 4件, `unresolved_return_alignment` 1件, `unresolved_store_alignment` 6件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "00b8a380",
      "incomplete_value": true,
      "site": "00b8a384",
      "value": [
        "live",
        "register:40a0:8"
      ]
    },
    "ordinal": 2,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b8a428",
      "incomplete_value": false,
      "site": "00b8a434",
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
            "const:b69:8"
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
      "definition_site": "00b8a43c",
      "incomplete_value": true,
      "site": "00b8a440",
      "value": [
        "live",
        "register:40a8:8"
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
      "unmatched:00b8a304",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "unmatched:00b8a308",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "unmatched:00b8a30c",
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
      "00b8a3a0",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "00b8a3a4",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "00b8a3a8",
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
- 00b8a384 ["INT_ADD", "register:40f0:8", ["const:b8a384:8", "const:4:8"]]
- 00b8a384 ["CALL", null, ["callee:00c58180:8"]]
+ 00b8a420 ["INT_ADD", "register:40f0:8", ["const:b8a420:8", "const:4:8"]]
+ 00b8a420 ["CALL", null, ["callee:00c58180:8"]]
- 00b8a398 ["INT_ADD", "register:40f0:8", ["const:b8a398:8", "const:4:8"]]
- 00b8a398 ["CALL", null, ["callee:00c58180:8"]]
+ 00b8a434 ["INT_ADD", "register:40f0:8", ["const:b8a434:8", "const:4:8"]]
+ 00b8a434 ["CALL", null, ["callee:00c58180:8"]]
- 00b8a3a4 ["INT_ADD", "register:40f0:8", ["const:b8a3a4:8", "const:4:8"]]
- 00b8a3a4 ["CALL", null, ["callee:00c5c840:8"]]
+ 00b8a440 ["INT_ADD", "register:40f0:8", ["const:b8a440:8", "const:4:8"]]
+ 00b8a440 ["CALL", null, ["callee:00c5c840:8"]]
~~~


<a id="compare-9d8bf66b8ca2be2880d5cab699cbd291"></a>

### [`00b8a400`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b8a/00b8a400.md) → [`00b8a49c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b8a/00b8a49c.md) _ZN11flatbuffers6Parser30ParseFlexBufferNumericConstantEPN11flexbuffers7BuilderE

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`00c5c6e0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5c/00c5c6e0.md) · 呼出先 6件 [`00b998ec`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b99/00b998ec.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md) [`00c580b0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c580b0.md) [`00c585c0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c585c0.md)
- 新版 呼出元 1件 [`00c5c7b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5c7b0.md) · 呼出先 6件 [`00b99988`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b99/00b99988.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md) [`00c58180`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58180.md) [`00c58690`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58690.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_return_alignment, unresolved_store_alignment

命令の説明率　旧版 92.31% / 新版 92.31%

優先判定に残った影響 `call_argument_candidate` 2件, `unresolved_branch_alignment` 1件, `unresolved_return_alignment` 1件, `unresolved_store_alignment` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b8a50c",
      "incomplete_value": false,
      "site": "00b8a518",
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
            "const:755:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b8a470",
      "incomplete_value": false,
      "site": "00b8a47c",
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
            "const:724:8"
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
      "definition_site": "00b8a520",
      "incomplete_value": false,
      "site": "00b8a52c",
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
            "const:b69:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b8a484",
      "incomplete_value": false,
      "site": "00b8a490",
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
            "const:bb6:8"
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
      "unmatched:00b8a42c",
      "WRITE",
      [
        "storage",
        "Stack[-0x48]",
        null,
        null
      ]
    ],
    [
      "00b8a50c",
      "PARAM",
      [
        "storage",
        "002b4724",
        null,
        "string"
      ]
    ],
    [
      "00b8a520",
      "PARAM",
      [
        "storage",
        "002a0bb6",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "00b8a4c8",
      "WRITE",
      [
        "storage",
        "Stack[-0x48]",
        null,
        null
      ]
    ],
    [
      "00b8a50c",
      "PARAM",
      [
        "storage",
        "002b4755",
        null,
        "string"
      ]
    ],
    [
      "00b8a520",
      "PARAM",
      [
        "storage",
        "002a0b69",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b8a47c ["INT_ADD", "register:40f0:8", ["const:b8a47c:8", "const:4:8"]]
- 00b8a47c ["CALL", null, ["callee:00c58180:8"]]
+ 00b8a518 ["INT_ADD", "register:40f0:8", ["const:b8a518:8", "const:4:8"]]
+ 00b8a518 ["CALL", null, ["callee:00c58180:8"]]
- 00b8a490 ["INT_ADD", "register:40f0:8", ["const:b8a490:8", "const:4:8"]]
- 00b8a490 ["CALL", null, ["callee:00c58180:8"]]
+ 00b8a52c ["INT_ADD", "register:40f0:8", ["const:b8a52c:8", "const:4:8"]]
+ 00b8a52c ["CALL", null, ["callee:00c58180:8"]]
- 00b8a518 ["BOOL_NEGATE", "tmp:0:1", ["register:101:1"]]
- 00b8a518 ["CBRANCH", null, ["local:b13:8", "tmp:0:1"]]
~~~


<a id="compare-9b8e9b6a638dea980ea3a2d2e0c51947"></a>

### [`00b8a538`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b8a/00b8a538.md) → [`00b8a5d4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b8a/00b8a5d4.md) _ZN11flatbuffers6Parser20ParseFlexBufferValueEPN11flexbuffers7BuilderE

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 2件 [`00b8a538`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b8a/00b8a538.md) [`00c5c6a0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5c/00c5c6a0.md) · 呼出先 22件 [`00b8a538`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b8a/00b8a538.md) [`00b998ec`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b99/00b998ec.md) [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md)
- 新版 呼出元 2件 [`00b8a5d4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b8a/00b8a5d4.md) [`00c5c770`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5c770.md) · 呼出先 22件 [`00b8a5d4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b8a/00b8a5d4.md) [`00b99988`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b99/00b99988.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, store_value, unresolved_branch_alignment, unresolved_store_alignment

命令の説明率　旧版 93.39% / 新版 93.39%

優先判定に残った影響 `call_argument_candidate` 1件, `store_value` 6件, `unresolved_branch_alignment` 2件, `unresolved_store_alignment` 13件

アドレスに依存する影響 `call_argument_candidate` 1件, `store_value` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00b8aab4",
      "incomplete_value": true,
      "site": "00b8aac4",
      "value": [
        "LOAD",
        "16",
        [
          [
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
    "old": {
      "definition_site": "00b8aa18",
      "incomplete_value": true,
      "site": "00b8aa28",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:620:8"
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
      "definition_site": "00b8aab8",
      "incomplete_value": true,
      "site": "00b8aac8",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:2e8:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b8aa1c",
      "incomplete_value": true,
      "site": "00b8aa2c",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:344:8"
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
      "definition_site": "00b8aab8",
      "incomplete_value": true,
      "site": "00b8aac8",
      "value": [
        "LOAD",
        "16",
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
      "definition_site": "00b8aa1c",
      "incomplete_value": true,
      "site": "00b8aa2c",
      "value": [
        "LOAD",
        "16",
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
      "unmatched:00b8a53c",
      "WRITE",
      [
        "storage",
        "Stack[-0x60]",
        null,
        null
      ]
    ],
    [
      "unmatched:00b8a540",
      "WRITE",
      [
        "storage",
        "Stack[-0x50]",
        null,
        null
      ]
    ],
    [
      "unmatched:00b8a544",
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
      "00b8a5d8",
      "WRITE",
      [
        "storage",
        "Stack[-0x60]",
        null,
        null
      ]
    ],
    [
      "00b8a5dc",
      "WRITE",
      [
        "storage",
        "Stack[-0x50]",
        null,
        null
      ]
    ],
    [
      "00b8a5e0",
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
- 00b8a990 ["INT_EQUAL", "tmp:0:1", ["register:40d0:8", "const:0:8"]]
- 00b8a990 ["CBRANCH", null, ["local:b67:8", "tmp:0:1"]]
+ 00b8aa2c ["INT_EQUAL", "tmp:0:1", ["register:40d0:8", "const:0:8"]]
+ 00b8aa2c ["CBRANCH", null, ["local:b63:8", "tmp:0:1"]]
- 00b8a9a4 ["CBRANCH", null, ["local:b95:8", "register:101:1"]]
+ 00b8aa40 ["CBRANCH", null, ["local:b91:8", "register:101:1"]]
- 00b8aa40 ["INT_ADD", "register:40f0:8", ["const:b8aa40:8", "const:4:8"]]
- 00b8aa40 ["CALL", null, ["callee:00c58180:8"]]
+ 00b8aadc ["INT_ADD", "register:40f0:8", ["const:b8aadc:8", "const:4:8"]]
+ 00b8aadc ["CALL", null, ["callee:00c58180:8"]]
~~~


<a id="compare-924a858fd373a402569f2258ba004e6c"></a>

### [`00b8ae34`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b8a/00b8ae34.md) → [`00b8aed0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b8a/00b8aed0.md) _ZN11flexbuffers7Builder6EndMapEm

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `equal` · `cfg_change`

- 旧版 呼出元 1件 [`00c5c8d0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5c/00c5c8d0.md) · 呼出先 8件 [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md) [`00c58000`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58000.md) [`00c5b140`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5b140.md)
- 新版 呼出元 1件 [`00c5c9a0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5c9a0.md) · 呼出先 8件 [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md) [`00c580d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c580d0.md) [`00c5b210`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b210.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, constant, control_flow, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

優先判定に残った影響 `call_argument_candidate` 4件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "00b8af88",
      "incomplete_value": true,
      "site": "00b8af8c",
      "value": [
        "INT_LEFT",
        "8",
        [
          [
            "live",
            "register:40d8:8"
          ],
          [
            "leaf",
            "const:4:8"
          ]
        ]
      ]
    },
    "ordinal": 5,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b8b048",
      "incomplete_value": true,
      "site": "00b8b054",
      "value": [
        "live",
        "register:40c0:8"
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
      "definition_site": "00b8b04c",
      "incomplete_value": true,
      "site": "00b8b054",
      "value": [
        "live",
        "register:40a8:8"
      ]
    },
    "old": null,
    "ordinal": 6,
    "slot": 2
  }
]
~~~


~~~diff
- 00b8af8c ["INT_ADD", "register:40f0:8", ["const:b8af8c:8", "const:4:8"]]
- 00b8af8c ["CALL", null, ["callee:00c57f60:8"]]
+ 00b8b028 ["INT_ADD", "register:40f0:8", ["const:b8b028:8", "const:4:8"]]
+ 00b8b028 ["CALL", null, ["callee:00c57f60:8"]]
- 00b8afb8 ["INT_ADD", "register:40f0:8", ["const:b8afb8:8", "const:4:8"]]
- 00b8afb8 ["CALL", null, ["callee:00c580d0:8"]]
+ 00b8b054 ["INT_ADD", "register:40f0:8", ["const:b8b054:8", "const:4:8"]]
+ 00b8b054 ["CALL", null, ["callee:00c580d0:8"]]
- 00b8aea4 ["INT_ADD", "register:40f0:8", ["const:b8aea4:8", "const:4:8"]]
- 00b8aea4 ["CALL", null, ["callee:00c5cee0:8"]]
+ 00b8af40 ["INT_ADD", "register:40f0:8", ["const:b8af40:8", "const:4:8"]]
+ 00b8af40 ["CALL", null, ["callee:00c5cee0:8"]]
~~~


<a id="compare-6d21026a583acce4707eb3083a0b95f2"></a>

### [`00b8b010`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b8b/00b8b010.md) → [`00b8b0ac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b8b/00b8b0ac.md) _ZN11flexbuffers7Builder9EndVectorEmbb

根拠 `symbol` · `raw_instruction_pcode` · `bounded` · 参照 `equal` · `cfg_change`

- 旧版 呼出元 1件 [`00c5c910`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5c/00c5c910.md) · 呼出先 6件 [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c58000`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58000.md) [`00c5b140`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5b140.md) [`00c5c8b0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5c/00c5c8b0.md)
- 新版 呼出元 1件 [`00c5c9e0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5c9e0.md) · 呼出先 6件 [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c580d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c580d0.md) [`00c5b210`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b210.md) [`00c5c980`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5c980.md)

変更の種類 branch_condition_or_target, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_store_alignment

命令の説明率　旧版 97.70% / 新版 97.70%

優先判定に残った影響 `unresolved_store_alignment` 2件

~~~diff
- 00b8b05c ["INT_ADD", "register:40f0:8", ["const:b8b05c:8", "const:4:8"]]
- 00b8b05c ["CALL", null, ["callee:00c5c980:8"]]
+ 00b8b0f8 ["INT_ADD", "register:40f0:8", ["const:b8b0f8:8", "const:4:8"]]
+ 00b8b0f8 ["CALL", null, ["callee:00c5c980:8"]]
- 00b8b088 ["INT_ADD", "register:40f0:8", ["const:b8b088:8", "const:4:8"]]
- 00b8b088 ["CALL", null, ["callee:00c5d0e0:8"]]
+ 00b8b124 ["INT_ADD", "register:40f0:8", ["const:b8b124:8", "const:4:8"]]
+ 00b8b124 ["CALL", null, ["callee:00c5d0e0:8"]]
- 00b8b0b4 ["BRANCH", null, ["local:b19:8"]]
+ 00b8b150 ["BRANCH", null, ["local:b18:8"]]
~~~


<a id="compare-d2b9346205b94aed7ca185d94f0c37e1"></a>

### [`00b8b200`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b8b/00b8b200.md) → [`00b8b29c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b8b/00b8b29c.md) _ZN11flatbuffers6Parser14StartParseFileEPKcS2_

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`00c5c5b0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5c/00c5c5b0.md) · 呼出先 8件 [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md) [`00c57fe0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57fe0.md) [`00c580b0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c580b0.md) [`00c5b0b0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5b0b0.md)
- 新版 呼出元 1件 [`00c5c680`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5c680.md) · 呼出先 8件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md) [`00c580b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c580b0.md) [`00c58180`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58180.md) [`00c5b180`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b180.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment

命令の説明率　旧版 93.62% / 新版 93.62%

優先判定に残った影響 `call_argument_candidate` 3件, `unresolved_branch_alignment` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b8b32c",
      "incomplete_value": true,
      "site": "00b8b330",
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
      "definition_site": "00b8b38c",
      "incomplete_value": false,
      "site": "00b8b3a8",
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
            "const:b69:8"
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
      "definition_site": "00b8b394",
      "incomplete_value": true,
      "site": "00b8b3a8",
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
      "00b8b2d8",
      "PARAM",
      [
        "storage",
        "002a63ea",
        null,
        "undefined1"
      ]
    ],
    [
      "unmatched:00b8b2d4",
      "READ",
      [
        "storage",
        "002a611d",
        null,
        "string"
      ]
    ],
    [
      "unmatched:00b8b2f0",
      "PARAM",
      [
        "storage",
        "002a0bb6",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "00b8b2d8",
      "PARAM",
      [
        "storage",
        "002a638e",
        null,
        "undefined1"
      ]
    ],
    [
      "00b8b370",
      "READ",
      [
        "storage",
        "002a60c1",
        null,
        "string"
      ]
    ],
    [
      "00b8b38c",
      "PARAM",
      [
        "storage",
        "002a0b69",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b8b294 ["INT_ADD", "register:40f0:8", ["const:b8b294:8", "const:4:8"]]
- 00b8b294 ["CALL", null, ["callee:00c5c720:8"]]
+ 00b8b330 ["INT_ADD", "register:40f0:8", ["const:b8b330:8", "const:4:8"]]
+ 00b8b330 ["CALL", null, ["callee:00c5c720:8"]]
- 00b8b30c ["INT_ADD", "register:40f0:8", ["const:b8b30c:8", "const:4:8"]]
- 00b8b30c ["CALL", null, ["callee:00c58180:8"]]
+ 00b8b3a8 ["INT_ADD", "register:40f0:8", ["const:b8b3a8:8", "const:4:8"]]
+ 00b8b3a8 ["CALL", null, ["callee:00c58180:8"]]
- 00b8b228 ["COPY", "tmp:0:8", ["const:3ea:8"]]
- 00b8b228 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 00b8b228 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 00b8b228 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
~~~


<a id="compare-73ddbb99a200eb0602b5de77293d474a"></a>

### [`00b8b378`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b8b/00b8b378.md) → [`00b8b414`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b8b/00b8b414.md) _ZN11flexbuffers7Builder6FinishEv

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`00c5c8e0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5c/00c5c8e0.md) · 呼出先 4件 [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md) [`00c5c900`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5c/00c5c900.md) [`00c5d070`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5d/00c5d070.md) [`00c5d080`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5d/00c5d080.md)
- 新版 呼出元 1件 [`00c5c9b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5c9b0.md) · 呼出先 4件 [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md) [`00c5c9d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5c9d0.md) [`00c5d140`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5d140.md) [`00c5d150`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5d150.md)

変更の種類 call_argument_candidate, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_return_alignment, unresolved_store_alignment

命令の説明率　旧版 93.75% / 新版 93.75%

アドレスに依存する影響 `call_argument_candidate` 5件, `unresolved_branch_alignment` 1件, `unresolved_return_alignment` 1件, `unresolved_store_alignment` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "00b8b490",
      "incomplete_value": true,
      "site": "00b8b4a8",
      "value": [
        "live",
        "register:4098:8"
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
      "definition_site": "00b8b48c",
      "incomplete_value": true,
      "site": "00b8b4a8",
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
    "ordinal": 2,
    "slot": 3
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "00b8b4b0",
      "incomplete_value": true,
      "site": "00b8b4c4",
      "value": [
        "LOAD",
        "8",
        [
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
                "const:8:8"
              ]
            ]
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
      "unmatched:00b8b398",
      "WRITE",
      [
        "storage",
        "Stack[-0x38]",
        null,
        null
      ]
    ],
    [
      "unmatched:00b8b3e8",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b8b4bc"
      ]
    ]
  ],
  "added": [
    [
      "00b8b434",
      "WRITE",
      [
        "storage",
        "Stack[-0x38]",
        null,
        null
      ]
    ],
    [
      "00b8b484",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b8b4bc"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b8b4a8 ["INT_ADD", "register:40f0:8", ["const:b8b4a8:8", "const:4:8"]]
- 00b8b4a8 ["CALL", null, ["callee:00c5d150:8"]]
+ 00b8b544 ["INT_ADD", "register:40f0:8", ["const:b8b544:8", "const:4:8"]]
+ 00b8b544 ["CALL", null, ["callee:00c5d150:8"]]
- 00b8b4c4 ["INT_ADD", "register:40f0:8", ["const:b8b4c4:8", "const:4:8"]]
- 00b8b4c4 ["CALL", null, ["callee:00c5d150:8"]]
+ 00b8b560 ["INT_ADD", "register:40f0:8", ["const:b8b560:8", "const:4:8"]]
+ 00b8b560 ["CALL", null, ["callee:00c5d150:8"]]
- 00b8b398 ["INT_ADD", "tmp:0:8", ["register:8:8", "const:18:8"]]
- 00b8b398 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4040:8"]]
~~~


<a id="compare-ee8eee478286e1b569ff6f7d4438490f"></a>

### [`00b8b4f8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b8b/00b8b4f8.md) → [`00b8b594`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b8b/00b8b594.md) _ZN11flatbuffers6Parser9ParseRootEPKcPS2_S2_

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`00c5c7c0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5c/00c5c7c0.md) · 呼出先 17件 [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md) [`00c57f40`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57f40.md) [`00c57f80`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57f80.md) [`00c580b0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c580b0.md)
- 新版 呼出元 1件 [`00c5c890`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5c890.md) · 呼出先 17件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md) [`00c58010`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58010.md) [`00c58050`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58050.md) [`00c58180`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58180.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, constant, control_flow, local_def_use, operands_and_dependencies, store_condition, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 92.25% / 新版 92.25%

優先判定に残った影響 `call_argument_candidate` 14件, `store_condition` 6件, `unresolved_branch_alignment` 8件, `unresolved_call_alignment` 1件, `unresolved_store_alignment` 3件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "00b8b600",
      "incomplete_value": true,
      "site": "00b8b604",
      "value": [
        "LOAD",
        "8",
        [
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
                "const:ffffffffffffff98:8"
              ]
            ]
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
      "definition_site": "00b8b73c",
      "incomplete_value": true,
      "site": "00b8b740",
      "value": [
        "live",
        "register:40c0:8"
      ]
    },
    "ordinal": 7,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b8b8f4",
      "incomplete_value": false,
      "site": "00b8b8fc",
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
            "const:b5f:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b8b858",
      "incomplete_value": false,
      "site": "00b8b860",
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
            "const:b1f:8"
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
      "00b8b7ac",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "unmatched:00b8b644"
      ]
    ],
    [
      "unmatched:00b8b640",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b8b748"
      ]
    ],
    [
      "unmatched:00b8b650",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "unmatched:00b8b664"
      ]
    ]
  ],
  "added": [
    [
      "00b8b6cc",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b8b6e0"
      ]
    ],
    [
      "00b8b6dc",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b8b748"
      ]
    ],
    [
      "00b8b6ec",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b8b700"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b8b5f0 ["INT_ADD", "register:40f0:8", ["const:b8b5f0:8", "const:4:8"]]
- 00b8b5f0 ["CALL", null, ["callee:00c5c520:8"]]
+ 00b8b68c ["INT_ADD", "register:40f0:8", ["const:b8b68c:8", "const:4:8"]]
+ 00b8b68c ["CALL", null, ["callee:00c5c520:8"]]
- 00b8b5fc ["INT_RIGHT", "tmp:0:4", ["register:4040:4", "const:0:4"]]
- 00b8b5fc ["INT_AND", "tmp:1:4", ["tmp:0:4", "const:1:4"]]
- 00b8b5fc ["INT_EQUAL", "tmp:2:1", ["tmp:1:4", "const:0:4"]]
- 00b8b5fc ["INT_EQUAL", "tmp:3:1", ["tmp:2:1", "const:1:1"]]
+ 00b8b698 ["INT_RIGHT", "tmp:0:4", ["register:4040:4", "const:0:4"]]
+ 00b8b698 ["INT_AND", "tmp:1:4", ["tmp:0:4", "const:1:4"]]
+ 00b8b698 ["INT_EQUAL", "tmp:2:1", ["tmp:1:4", "const:0:4"]]
+ 00b8b698 ["INT_EQUAL", "tmp:3:1", ["tmp:2:1", "const:1:1"]]
- 00b8b604 ["INT_ADD", "register:40f0:8", ["const:b8b604:8", "const:4:8"]]
- 00b8b604 ["CALL", null, ["callee:00c57f80:8"]]
+ 00b8b6a0 ["INT_ADD", "register:40f0:8", ["const:b8b6a0:8", "const:4:8"]]
+ 00b8b6a0 ["CALL", null, ["callee:00c57f80:8"]]
~~~


<a id="compare-67ae826397793577cff1fc95ffa7d4d0"></a>

### [`00b8bb6c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b8b/00b8bb6c.md) → [`00b8bc08`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b8b/00b8bc08.md) _ZN11flatbuffers6Parser9ParseJsonEPKcS2_

根拠 `symbol` · `raw_instruction_pcode` · `bounded` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 4件 [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md) [`00c5ba10`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5ba10.md) [`00c5c4b0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5c/00c5c4b0.md) [`00c5c5b0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5c/00c5c5b0.md)
- 新版 呼出元 0件  · 呼出先 4件 [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md) [`00c5bae0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5bae0.md) [`00c5c580`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5c580.md) [`00c5c680`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5c680.md)

変更の種類 branch_condition_or_target, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_return_alignment, unresolved_store_alignment

命令の説明率　旧版 91.30% / 新版 91.30%

優先判定に残った影響 `unresolved_branch_alignment` 1件, `unresolved_return_alignment` 1件, `unresolved_store_alignment` 5件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00b8bb7c",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "unmatched:00b8bb80",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "unmatched:00b8bb9c",
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
      "00b8bc18",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "00b8bc1c",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "00b8bc38",
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
- 00b8bb7c ["COPY", "tmp:0:8", ["register:40a0:8"]]
- 00b8bb7c ["COPY", "tmp:1:8", ["register:4098:8"]]
- 00b8bb7c ["INT_ADD", "tmp:2:8", ["register:8:8", "const:50:8"]]
- 00b8bb7c ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
- 00b8bb80 ["COPY", "tmp:0:8", ["register:40e8:8"]]
- 00b8bb80 ["COPY", "tmp:1:8", ["register:40f0:8"]]
- 00b8bb80 ["INT_ADD", "tmp:2:8", ["register:8:8", "const:60:8"]]
- 00b8bb80 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
- 00b8bb84 ["COPY", "tmp:0:8", ["const:60:8"]]
- 00b8bb84 ["INT_CARRY", "register:105:1", ["register:8:8", "tmp:0:8"]]
- 00b8bb84 ["INT_SCARRY", "register:106:1", ["register:8:8", "tmp:0:8"]]
- 00b8bb84 ["INT_ADD", "tmp:1:8", ["register:8:8", "tmp:0:8"]]
~~~


<a id="compare-92cb20510cd558999eefdba7e97b81e7"></a>

### [`00b8bc80`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b8b/00b8bc80.md) → [`00b8bd1c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b8b/00b8bd1c.md) _ZN11flatbuffers6Parser11DoParseJsonEv

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`00c5c4b0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5c/00c5c4b0.md) · 呼出先 8件 [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md) [`00c580b0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c580b0.md) [`00c5c330`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5c/00c5c330.md)
- 新版 呼出元 1件 [`00c5c580`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5c580.md) · 呼出先 8件 [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md) [`00c58180`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58180.md) [`00c5c400`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5c400.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, store_condition, unresolved_branch_alignment, unresolved_return_alignment, unresolved_store_alignment

命令の説明率　旧版 80.14% / 新版 80.14%

優先判定に残った影響 `call_argument_candidate` 3件, `store_condition` 1件, `unresolved_branch_alignment` 1件, `unresolved_return_alignment` 1件, `unresolved_store_alignment` 12件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b8be20",
      "incomplete_value": false,
      "site": "00b8be2c",
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
            "const:b69:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b8bd84",
      "incomplete_value": false,
      "site": "00b8bd90",
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
            "const:bb6:8"
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
    "new": null,
    "old": {
      "definition_site": "00b8bd98",
      "incomplete_value": true,
      "site": "00b8bd9c",
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
      "definition_site": "00b8bd94",
      "incomplete_value": true,
      "site": "00b8bd9c",
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
      "unmatched:00b8bca4",
      "WRITE",
      [
        "storage",
        "Stack[-0x38]",
        null,
        null
      ]
    ],
    [
      "unmatched:00b8bcb0",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b8bd98"
      ]
    ],
    [
      "unmatched:00b8bcd8",
      "READ",
      [
        "storage",
        "002c2240",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "00b8bd40",
      "WRITE",
      [
        "storage",
        "Stack[-0x38]",
        null,
        null
      ]
    ],
    [
      "00b8bd4c",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b8bd98"
      ]
    ],
    [
      "00b8bd74",
      "READ",
      [
        "storage",
        "002c2280",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 00b8bd90 ["INT_ADD", "register:40f0:8", ["const:b8bd90:8", "const:4:8"]]
- 00b8bd90 ["CALL", null, ["callee:00c58180:8"]]
+ 00b8be2c ["INT_ADD", "register:40f0:8", ["const:b8be2c:8", "const:4:8"]]
+ 00b8be2c ["CALL", null, ["callee:00c58180:8"]]
- 00b8bd9c ["INT_ADD", "register:40f0:8", ["const:b8bd9c:8", "const:4:8"]]
- 00b8bd9c ["CALL", null, ["callee:00c5c840:8"]]
+ 00b8be38 ["INT_ADD", "register:40f0:8", ["const:b8be38:8", "const:4:8"]]
+ 00b8be38 ["CALL", null, ["callee:00c5c840:8"]]
- 00b8be2c ["INT_EQUAL", "tmp:0:1", ["register:4050:8", "const:0:8"]]
- 00b8be2c ["CBRANCH", null, ["local:b31:8", "tmp:0:1"]]
+ 00b8bec8 ["INT_EQUAL", "tmp:0:1", ["register:4050:8", "const:0:8"]]
+ 00b8bec8 ["CBRANCH", null, ["local:b28:8", "tmp:0:1"]]
~~~


<a id="compare-95c88a20b461154c72464cedc0db9419"></a>

### [`00b8bec4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b8b/00b8bec4.md) → [`00b8bf60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b8b/00b8bf60.md) _ZN11flatbuffers6Parser7DoParseEPKcPS2_S2_S2_

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 2件 [`00b8bec4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b8b/00b8bec4.md) [`00c5c760`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5c/00c5c760.md) · 呼出先 39件 [`006394bc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00639/006394bc.md) [`00b8bec4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b8b/00b8bec4.md) [`00b8dab8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b8d/00b8dab8.md) [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md)
- 新版 呼出元 2件 [`00b8bf60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b8b/00b8bf60.md) [`00c5c830`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5c830.md) · 呼出先 39件 [`006394fc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00639/006394fc.md) [`00b8bf60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b8b/00b8bf60.md) [`00b8db54`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b8d/00b8db54.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, operands_and_dependencies, operation_sequence, store_condition, store_value, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 86.80% / 新版 86.80%

優先判定に残った影響 `call_argument_candidate` 25件, `store_condition` 6件, `store_value` 8件, `unresolved_branch_alignment` 34件, `unresolved_call_alignment` 19件, `unresolved_store_alignment` 31件

アドレスに依存する影響 `store_value` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00b8ce30",
      "incomplete_value": true,
      "site": "00b8ce64",
      "value": [
        "LOAD",
        "16",
        [
          [
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
      "definition_site": "00b8cd94",
      "incomplete_value": true,
      "site": "00b8cdc8",
      "value": [
        "LOAD",
        "16",
        [
          [
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
    "ordinal": 179,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00b8d674",
      "incomplete_value": true,
      "site": "00b8d694",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:5b0:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b8d5d8",
      "incomplete_value": true,
      "site": "00b8d5f8",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:570:8"
              ]
            ]
          ]
        ]
      ]
    },
    "ordinal": 241,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00b8d684",
      "incomplete_value": true,
      "site": "00b8d698",
      "value": [
        "LOAD",
        "16",
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
                "const:29:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b8d5e8",
      "incomplete_value": true,
      "site": "00b8d5fc",
      "value": [
        "LOAD",
        "16",
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
                "const:29:8"
              ]
            ]
          ]
        ]
      ]
    },
    "ordinal": 242,
    "slot": 2
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00b8bf70",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b8c01c"
      ]
    ],
    [
      "unmatched:00b8bf7c",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b8d6f4"
      ]
    ],
    [
      "unmatched:00b8bfac",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b8c030"
      ]
    ]
  ],
  "added": [
    [
      "00b8c00c",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b8c01c"
      ]
    ],
    [
      "00b8c018",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b8d6f4"
      ]
    ],
    [
      "00b8c048",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b8c030"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b8c058 ["INT_ADD", "register:40f0:8", ["const:b8c058:8", "const:4:8"]]
- 00b8c058 ["CALL", null, ["callee:00c580b0:8"]]
+ 00b8c0f4 ["INT_ADD", "register:40f0:8", ["const:b8c0f4:8", "const:4:8"]]
+ 00b8c0f4 ["CALL", null, ["callee:00c580b0:8"]]
- 00b8c088 ["INT_ADD", "register:40f0:8", ["const:b8c088:8", "const:4:8"]]
- 00b8c088 ["CALL", null, ["callee:00c580b0:8"]]
+ 00b8c124 ["INT_ADD", "register:40f0:8", ["const:b8c124:8", "const:4:8"]]
+ 00b8c124 ["CALL", null, ["callee:00c580b0:8"]]
- 00b8c54c ["INT_ADD", "register:40f0:8", ["const:b8c54c:8", "const:4:8"]]
- 00b8c54c ["CALL", null, ["callee:00c58120:8"]]
+ 00b8d000 ["INT_ADD", "register:40f0:8", ["const:b8d000:8", "const:4:8"]]
+ 00b8d000 ["CALL", null, ["callee:00c58120:8"]]
~~~


<a id="compare-52807317c8454de25fef7d89fb28eecf"></a>

### [`00b8d7c0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b8d/00b8d7c0.md) → [`00b8d85c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b8d/00b8d85c.md) _ZN11flatbuffers6Parser16CheckPrivateLeakEv

根拠 `symbol` · `raw_instruction_pcode` · `bounded` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`00c5c5f0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5c/00c5c5f0.md) · 呼出先 1件 [`00c5c6d0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5c/00c5c6d0.md)
- 新版 呼出元 1件 [`00c5c6c0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5c6c0.md) · 呼出先 1件 [`00c5c7a0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5c7a0.md)

変更の種類 branch_condition_or_target, call, call_count, cfg_edge_inventory, constant, control_flow, operands_and_dependencies, operation_sequence, unresolved_call_alignment

命令の説明率　旧版 98.70% / 新版 98.70%

優先判定に残った影響 `unresolved_call_alignment` 1件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00b8d8c4",
      "UNCONDITIONAL_CALL",
      [
        "mapped_function",
        "00c5c7a0"
      ]
    ]
  ],
  "added": [
    [
      "00b8d960",
      "UNCONDITIONAL_CALL",
      [
        "mapped_function",
        "00c5c7a0"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b8d7dc ["INT_EQUAL", "tmp:0:1", ["register:4048:4", "const:0:4"]]
- 00b8d7dc ["CBRANCH", null, ["local:b23:8", "tmp:0:1"]]
+ 00b8d878 ["INT_EQUAL", "tmp:0:1", ["register:4048:4", "const:0:4"]]
+ 00b8d878 ["CBRANCH", null, ["local:b24:8", "tmp:0:1"]]
- 00b8d828 ["INT_ADD", "register:40f0:8", ["const:b8d828:8", "const:4:8"]]
- 00b8d828 ["CALL", null, ["callee:00c5c7a0:8"]]
+ 00b8d8c4 ["INT_ADD", "register:40f0:8", ["const:b8d8c4:8", "const:4:8"]]
+ 00b8d8c4 ["CALL", null, ["callee:00c5c7a0:8"]]
- 00b8d834 ["INT_NOTEQUAL", "tmp:0:1", ["register:4040:4", "const:0:4"]]
- 00b8d834 ["CBRANCH", null, ["local:b24:8", "tmp:0:1"]]
+ 00b8d8d0 ["INT_NOTEQUAL", "tmp:0:1", ["register:4040:4", "const:0:4"]]
+ 00b8d8d0 ["CBRANCH", null, ["local:b25:8", "tmp:0:1"]]
~~~


<a id="compare-e9287b128bb3a85026fafa3a7d18f989"></a>

### [`00b8d8f4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b8d/00b8d8f4.md) → [`00b8d990`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b8d/00b8d990.md) _ZN11flatbuffers6Parser26CheckPrivatelyLeakedFieldsERKNS_10DefinitionES3_

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`00c5c6d0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5c/00c5c6d0.md) · 呼出先 6件 [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md) [`00c580b0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c580b0.md) [`00c5c770`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5c/00c5c770.md)
- 新版 呼出元 1件 [`00c5c7a0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5c7a0.md) · 呼出先 6件 [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md) [`00c58180`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58180.md) [`00c5c840`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5c840.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, store_condition, unresolved_branch_alignment, unresolved_return_alignment, unresolved_store_alignment

命令の説明率　旧版 73.45% / 新版 73.45%

優先判定に残った影響 `call_argument_candidate` 5件, `store_condition` 6件, `unresolved_branch_alignment` 2件, `unresolved_return_alignment` 1件, `unresolved_store_alignment` 16件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "00b8d9d0",
      "incomplete_value": true,
      "site": "00b8d9d4",
      "value": [
        "LOAD",
        "8",
        [
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
    "ordinal": 3,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b8da7c",
      "incomplete_value": false,
      "site": "00b8da80",
      "value": [
        "leaf",
        "const:50:8"
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
      "definition_site": "00b8dac0",
      "incomplete_value": false,
      "site": "00b8dac8",
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
            "const:b69:8"
          ]
        ]
      ]
    },
    "old": null,
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
      "unmatched:00b8d8f8",
      "WRITE",
      [
        "storage",
        "Stack[-0x40]",
        null,
        null
      ]
    ],
    [
      "unmatched:00b8d8fc",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "unmatched:00b8d900",
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
      "00b8d994",
      "WRITE",
      [
        "storage",
        "Stack[-0x40]",
        null,
        null
      ]
    ],
    [
      "00b8d998",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "00b8d99c",
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
- 00b8d9d4 ["INT_ADD", "register:40f0:8", ["const:b8d9d4:8", "const:4:8"]]
- 00b8d9d4 ["CALL", null, ["callee:00c57f80:8"]]
+ 00b8da70 ["INT_ADD", "register:40f0:8", ["const:b8da70:8", "const:4:8"]]
+ 00b8da70 ["CALL", null, ["callee:00c57f80:8"]]
- 00b8d9e4 ["INT_ADD", "register:40f0:8", ["const:b8d9e4:8", "const:4:8"]]
- 00b8d9e4 ["CALL", null, ["callee:00c57f60:8"]]
+ 00b8da80 ["INT_ADD", "register:40f0:8", ["const:b8da80:8", "const:4:8"]]
+ 00b8da80 ["CALL", null, ["callee:00c57f60:8"]]
- 00b8d9ec ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:d70:8"]]
- 00b8d9ec ["LOAD", "register:5000:16", ["const:1b1:8", "tmp:0:8"]]
- 00b8d9ec ["COPY", "register:5010:8", ["const:0:8"]]
- 00b8d9ec ["COPY", "register:5018:8", ["const:0:8"]]
+ 00b8da88 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:db0:8"]]
+ 00b8da88 ["LOAD", "register:5000:16", ["const:1b1:8", "tmp:0:8"]]
+ 00b8da88 ["COPY", "register:5010:8", ["const:0:8"]]
+ 00b8da88 ["COPY", "register:5018:8", ["const:0:8"]]
~~~


<a id="compare-2bbb3d93d6976363b55e9fe159b5a371"></a>

### [`00b8dab8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b8d/00b8dab8.md) → [`00b8db54`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b8d/00b8db54.md) FUN_00b8db54

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`00b8bec4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b8b/00b8bec4.md) · 呼出先 7件 [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md) [`00c57fe0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57fe0.md) [`00c58000`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58000.md)
- 新版 呼出元 1件 [`00b8bf60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b8b/00b8bf60.md) · 呼出先 7件 [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md) [`00c580b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c580b0.md) [`00c580d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c580d0.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, store_condition, unresolved_branch_alignment, unresolved_store_alignment

命令の説明率　旧版 77.88% / 新版 77.88%

優先判定に残った影響 `call_argument_candidate` 2件, `store_condition` 4件, `unresolved_branch_alignment` 2件, `unresolved_store_alignment` 9件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b8dbdc",
      "incomplete_value": true,
      "site": "00b8dbe0",
      "value": [
        "INT_AND",
        "8",
        [
          [
            "live",
            "register:4040:8"
          ],
          [
            "leaf",
            "const:fffffffffffffff0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b8db40",
      "incomplete_value": true,
      "site": "00b8db44",
      "value": [
        "live",
        "register:40b8:8"
      ]
    },
    "ordinal": 1,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b8dbf4",
      "incomplete_value": true,
      "site": "00b8dc00",
      "value": [
        "live",
        "register:40b0:8"
      ]
    },
    "old": null,
    "ordinal": 2,
    "slot": 1
  },
  {
    "confidence": "limited",
    "guard": [
      [
        "FALL_THROUGH",
        "00b8db1c"
      ],
      [
        "FALL_THROUGH",
        "00b8dbb8"
      ]
    ],
    "kind": "store_condition",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "00b8dbc8",
      "value": [
        "live",
        "register:102:1"
      ]
    },
    "old": {
      "definition_site": "00b8db18",
      "incomplete_value": true,
      "site": "00b8db2c",
      "value": [
        "INT_LESSEQUAL",
        "1",
        [
          [
            "leaf",
            "const:17:8"
          ],
          [
            "live",
            "register:4000:8"
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
      "unmatched:00b8dabc",
      "WRITE",
      [
        "storage",
        "Stack[-0x50]",
        null,
        null
      ]
    ],
    [
      "unmatched:00b8dac0",
      "WRITE",
      [
        "storage",
        "Stack[-0x40]",
        null,
        null
      ]
    ],
    [
      "unmatched:00b8dac4",
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
      "00b8db58",
      "WRITE",
      [
        "storage",
        "Stack[-0x50]",
        null,
        null
      ]
    ],
    [
      "00b8db5c",
      "WRITE",
      [
        "storage",
        "Stack[-0x40]",
        null,
        null
      ]
    ],
    [
      "00b8db60",
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
- 00b8db44 ["INT_ADD", "register:40f0:8", ["const:b8db44:8", "const:4:8"]]
- 00b8db44 ["CALL", null, ["callee:00c57f60:8"]]
+ 00b8dbe0 ["INT_ADD", "register:40f0:8", ["const:b8dbe0:8", "const:4:8"]]
+ 00b8dbe0 ["CALL", null, ["callee:00c57f60:8"]]
+ 00b8db54 ["INT_SUB", "register:8:8", ["register:8:8", "const:90:8"]]
- 00b8db64 ["INT_ADD", "register:40f0:8", ["const:b8db64:8", "const:4:8"]]
- 00b8db64 ["CALL", null, ["callee:00c580d0:8"]]
+ 00b8dc00 ["INT_ADD", "register:40f0:8", ["const:b8dc00:8", "const:4:8"]]
+ 00b8dc00 ["CALL", null, ["callee:00c580d0:8"]]
~~~


<a id="compare-563c6423cdd257020c9ea80460179ed3"></a>

### [`00b8dc58`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b8d/00b8dc58.md) → [`00b8dcf4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b8d/00b8dcf4.md) _ZNK11flatbuffers6Parser25GetIncludedFilesRecursiveERKNSt6__ndk112basic_stringIcNS1_11char_traitsIcEENS1_9allocatorIcEEEE

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 10件 [`0054a614`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0054a/0054a614.md) [`0054dc50`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0054d/0054dc50.md) [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md)
- 新版 呼出元 0件  · 呼出先 10件 [`0054a654`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0054a/0054a654.md) [`0054dc90`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0054d/0054dc90.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, store_condition, unresolved_branch_alignment, unresolved_return_alignment, unresolved_store_alignment

命令の説明率　旧版 84.43% / 新版 84.43%

優先判定に残った影響 `call_argument_candidate` 2件, `store_condition` 1件, `unresolved_branch_alignment` 6件, `unresolved_return_alignment` 1件, `unresolved_store_alignment` 30件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "00b8df68",
      "incomplete_value": true,
      "site": "00b8df74",
      "value": [
        "live",
        "register:40d0:8"
      ]
    },
    "ordinal": 14,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "00b8df6c",
      "incomplete_value": true,
      "site": "00b8df74",
      "value": [
        "live",
        "register:40c8:8"
      ]
    },
    "ordinal": 14,
    "slot": 2
  },
  {
    "confidence": "limited",
    "guard": [
      [
        "FALL_THROUGH",
        "00b8dea8"
      ],
      [
        "FALL_THROUGH",
        "00b8df44"
      ]
    ],
    "kind": "store_condition",
    "new": {
      "definition_site": "00b8df44",
      "incomplete_value": true,
      "site": "00b8df48",
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
      "definition_site": "00b8dea8",
      "incomplete_value": true,
      "site": "00b8deac",
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
    "ordinal": 55,
    "slot": 0
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00b8dc5c",
      "WRITE",
      [
        "storage",
        "Stack[-0x60]",
        null,
        null
      ]
    ],
    [
      "unmatched:00b8dc60",
      "WRITE",
      [
        "storage",
        "Stack[-0x50]",
        null,
        null
      ]
    ],
    [
      "unmatched:00b8dc64",
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
      "00b8dcf8",
      "WRITE",
      [
        "storage",
        "Stack[-0x60]",
        null,
        null
      ]
    ],
    [
      "00b8dcfc",
      "WRITE",
      [
        "storage",
        "Stack[-0x50]",
        null,
        null
      ]
    ],
    [
      "00b8dd00",
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
+ 00b8deac ["COPY", "tmp:0:8", ["const:0:8"]]
+ 00b8deac ["COPY", "tmp:1:8", ["tmp:0:8"]]
+ 00b8deac ["INT_ADD", "register:4040:8", ["register:4040:8", "const:20:8"]]
+ 00b8deac ["STORE", null, ["const:1b1:8", "register:4040:8", "tmp:1:8"]]
- 00b8ded8 ["INT_ADD", "register:40f0:8", ["const:b8ded8:8", "const:4:8"]]
- 00b8ded8 ["CALL", null, ["callee:00c5cf20:8"]]
+ 00b8df74 ["INT_ADD", "register:40f0:8", ["const:b8df74:8", "const:4:8"]]
+ 00b8df74 ["CALL", null, ["callee:00c5cf20:8"]]
- 00b8df74 ["INT_ADD", "register:40f0:8", ["const:b8df74:8", "const:4:8"]]
- 00b8df74 ["CALL", null, ["callee:00c580d0:8"]]
+ 00b8e010 ["INT_ADD", "register:40f0:8", ["const:b8e010:8", "const:4:8"]]
+ 00b8e010 ["CALL", null, ["callee:00c580d0:8"]]
~~~


<a id="compare-71d90b448e9c28678b299969014a2e54"></a>

### [`00b8e0dc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b8e/00b8e0dc.md) → [`00b8e178`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b8e/00b8e178.md) _ZN11flatbuffers6Parser9SerializeEv

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 32件 [`005408d0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00540/005408d0.md) [`0054a614`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0054a/0054a614.md) [`00bb095c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bb0/00bb095c.md) [`00bb1640`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bb1/00bb1640.md) [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md)
- 新版 呼出元 0件  · 呼出先 32件 [`00540910`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00540/00540910.md) [`0054a654`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0054a/0054a654.md) [`00bb09f8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bb0/00bb09f8.md) [`00bb16dc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bb1/00bb16dc.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, store_condition, store_value, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 87.95% / 新版 87.95%

優先判定に残った影響 `call_argument_candidate` 9件, `store_condition` 4件, `unresolved_branch_alignment` 21件, `unresolved_call_alignment` 5件, `unresolved_store_alignment` 23件

アドレスに依存する影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "00b8e360",
      "incomplete_value": false,
      "site": "00b8e360",
      "value": [
        "leaf",
        "const:bb16dc:8"
      ]
    },
    "old": {
      "definition_site": "00b8e2c4",
      "incomplete_value": false,
      "site": "00b8e2c4",
      "value": [
        "leaf",
        "const:bb1640:8"
      ]
    },
    "ordinal": 31,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b8e204",
      "incomplete_value": true,
      "site": "00b8e20c",
      "value": [
        "LOAD",
        "8",
        [
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
                "register:40a0:8"
              ],
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
      "definition_site": "00b8e168",
      "incomplete_value": true,
      "site": "00b8e170",
      "value": [
        "LOAD",
        "8",
        [
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
                "register:40a8:8"
              ],
              [
                "leaf",
                "const:8:8"
              ]
            ]
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
      "definition_site": "00b8e1ac",
      "incomplete_value": true,
      "site": "00b8e1b8",
      "value": [
        "live",
        "register:40a0:8"
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
      "unmatched:00b8e0e0",
      "WRITE",
      [
        "storage",
        "Stack[-0x60]",
        null,
        null
      ]
    ],
    [
      "unmatched:00b8e0e4",
      "WRITE",
      [
        "storage",
        "Stack[-0x50]",
        null,
        null
      ]
    ],
    [
      "unmatched:00b8e0e8",
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
      "00b8e17c",
      "WRITE",
      [
        "storage",
        "Stack[-0x60]",
        null,
        null
      ]
    ],
    [
      "00b8e180",
      "WRITE",
      [
        "storage",
        "Stack[-0x50]",
        null,
        null
      ]
    ],
    [
      "00b8e184",
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
- 00b8e170 ["INT_ADD", "register:40f0:8", ["const:b8e170:8", "const:4:8"]]
- 00b8e170 ["CALL", null, ["callee:00c5bae0:8"]]
+ 00b8e20c ["INT_ADD", "register:40f0:8", ["const:b8e20c:8", "const:4:8"]]
+ 00b8e20c ["CALL", null, ["callee:00c5bae0:8"]]
+ 00b8e178 ["INT_SUB", "register:8:8", ["register:8:8", "const:140:8"]]
+ 00b8e17c ["COPY", "tmp:0:8", ["register:40e0:8"]]
+ 00b8e17c ["COPY", "tmp:1:8", ["register:40d8:8"]]
+ 00b8e17c ["INT_ADD", "tmp:2:8", ["register:8:8", "const:e0:8"]]
+ 00b8e17c ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
~~~


<a id="compare-0dcd24f29a62185a120aaa38aa1861d7"></a>

### [`00b8f0b8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b8f/00b8f0b8.md) → [`00b8f154`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b8f/00b8f154.md) _ZNK11flatbuffers7EnumDef9SerializeEPNS_21FlatBufferBuilderImplILb0EEERKNS_6ParserE

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`00c5ca00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5c/00c5ca00.md) · 呼出先 22件 [`00b92e98`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b92/00b92e98.md) [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md) [`00c58000`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58000.md)
- 新版 呼出元 1件 [`00c5cad0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5cad0.md) · 呼出先 22件 [`00b92f34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b92/00b92f34.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md) [`00c580d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c580d0.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, store_condition, unresolved_branch_alignment, unresolved_store_alignment

命令の説明率　旧版 97.21% / 新版 97.21%

優先判定に残った影響 `call_argument_candidate` 6件, `store_condition` 1件, `unresolved_branch_alignment` 3件, `unresolved_store_alignment` 3件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "00b8f2a8",
      "incomplete_value": true,
      "site": "00b8f2b0",
      "value": [
        "live",
        "register:40a0:8"
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
      "definition_site": "00b8f2ac",
      "incomplete_value": true,
      "site": "00b8f2b0",
      "value": [
        "live",
        "register:40c8:8"
      ]
    },
    "ordinal": 8,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b8f45c",
      "incomplete_value": true,
      "site": "00b8f464",
      "value": [
        "live",
        "register:40e0:8"
      ]
    },
    "old": {
      "definition_site": "00b8f3c0",
      "incomplete_value": true,
      "site": "00b8f3c8",
      "value": [
        "INT_AND",
        "8",
        [
          [
            "INT_ADD",
            "8",
            [
              [
                "live",
                "register:40d8:8"
              ],
              [
                "leaf",
                "const:10:8"
              ]
            ]
          ],
          [
            "leaf",
            "const:fffffffffffffff0:8"
          ]
        ]
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
      "00b8f2c8",
      "READ",
      [
        "storage",
        "00c9b870",
        null,
        "pointer"
      ]
    ],
    [
      "unmatched:00b8f27c",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b8f320"
      ]
    ]
  ],
  "added": [
    [
      "00b8f2c8",
      "READ",
      [
        "storage",
        "00c9b940",
        null,
        "pointer"
      ]
    ],
    [
      "00b8f318",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b8f320"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b8f2b0 ["INT_ADD", "register:40f0:8", ["const:b8f2b0:8", "const:4:8"]]
- 00b8f2b0 ["CALL", null, ["callee:00c5c270:8"]]
+ 00b8f34c ["INT_ADD", "register:40f0:8", ["const:b8f34c:8", "const:4:8"]]
+ 00b8f34c ["CALL", null, ["callee:00c5c270:8"]]
- 00b8f3c8 ["INT_ADD", "register:40f0:8", ["const:b8f3c8:8", "const:4:8"]]
- 00b8f3c8 ["CALL", null, ["callee:00c57f60:8"]]
+ 00b8f464 ["INT_ADD", "register:40f0:8", ["const:b8f464:8", "const:4:8"]]
+ 00b8f464 ["CALL", null, ["callee:00c57f60:8"]]
- 00b8f3e8 ["INT_ADD", "register:40f0:8", ["const:b8f3e8:8", "const:4:8"]]
- 00b8f3e8 ["CALL", null, ["callee:00c580d0:8"]]
+ 00b8f484 ["INT_ADD", "register:40f0:8", ["const:b8f484:8", "const:4:8"]]
+ 00b8f484 ["CALL", null, ["callee:00c580d0:8"]]
~~~


<a id="compare-9cd45af41193cfb2aae91385ccff9939"></a>

### [`00b8f534`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b8f/00b8f534.md) → [`00b8f5d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b8f/00b8f5d0.md) _ZNK11flatbuffers10ServiceDef9SerializeEPNS_21FlatBufferBuilderImplILb0EEERKNS_6ParserE

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`00c5c9c0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5c/00c5c9c0.md) · 呼出先 19件 [`00b92e98`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b92/00b92e98.md) [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md) [`00c58000`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58000.md)
- 新版 呼出元 1件 [`00c5ca90`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5ca90.md) · 呼出先 19件 [`00b92f34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b92/00b92f34.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md) [`00c580d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c580d0.md)

変更の種類 branch_condition_or_target, call_argument_candidate, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, store_condition, unresolved_branch_alignment, unresolved_store_alignment

命令の説明率　旧版 94.46% / 新版 94.46%

優先判定に残った影響 `call_argument_candidate` 3件, `store_condition` 2件, `unresolved_branch_alignment` 7件, `unresolved_store_alignment` 4件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "00b8f620",
      "incomplete_value": true,
      "site": "00b8f62c",
      "value": [
        "live",
        "register:40c8:8"
      ]
    },
    "ordinal": 2,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b8f6f8",
      "incomplete_value": false,
      "site": "00b8f704",
      "value": [
        "leaf",
        "const:3e8:8"
      ]
    },
    "old": null,
    "ordinal": 4,
    "slot": 3
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "00b8f6d4",
      "incomplete_value": true,
      "site": "00b8f6e0",
      "value": [
        "live",
        "register:40a0:8"
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
      "00b8f744",
      "READ",
      [
        "storage",
        "00c9b878",
        null,
        "pointer"
      ]
    ],
    [
      "unmatched:00b8f6f8",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b8f79c"
      ]
    ],
    [
      "unmatched:00b8f7a8",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b8f858"
      ]
    ]
  ],
  "added": [
    [
      "00b8f744",
      "READ",
      [
        "storage",
        "00c9b948",
        null,
        "pointer"
      ]
    ],
    [
      "00b8f794",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b8f79c"
      ]
    ],
    [
      "00b8f844",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b8f858"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b8f62c ["INT_ADD", "register:40f0:8", ["const:b8f62c:8", "const:4:8"]]
- 00b8f62c ["CALL", null, ["callee:00c580d0:8"]]
+ 00b8f6c8 ["INT_ADD", "register:40f0:8", ["const:b8f6c8:8", "const:4:8"]]
+ 00b8f6c8 ["CALL", null, ["callee:00c580d0:8"]]
- 00b8f668 ["INT_ADD", "register:40f0:8", ["const:b8f668:8", "const:4:8"]]
- 00b8f668 ["CALL", null, ["callee:00c5cb10:8"]]
+ 00b8f704 ["INT_ADD", "register:40f0:8", ["const:b8f704:8", "const:4:8"]]
+ 00b8f704 ["CALL", null, ["callee:00c5cb10:8"]]
- 00b8f6e0 ["INT_ADD", "register:40f0:8", ["const:b8f6e0:8", "const:4:8"]]
- 00b8f6e0 ["CALL", null, ["callee:00c5c320:8"]]
+ 00b8f77c ["INT_ADD", "register:40f0:8", ["const:b8f77c:8", "const:4:8"]]
+ 00b8f77c ["CALL", null, ["callee:00c5c320:8"]]
~~~


<a id="compare-ceb19efde9c5be6c0f5fe901e34f17f3"></a>

### [`00b8fd20`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b8f/00b8fd20.md) → [`00b8fdbc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b8f/00b8fdbc.md) _ZN11flatbuffers21FlatBufferBuilderImplILb0EE26CreateVectorOfSortedTablesIN10reflection4EnumENSt6__ndk19allocatorINS_6OffsetIS4_EEEEEENS7_IN

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`00c5c2e0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5c/00c5c2e0.md) · 呼出先 7件 [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md) [`00c5a850`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5a850.md) [`00c5c1a0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5c/00c5c1a0.md) [`00c5c250`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5c/00c5c250.md)
- 新版 呼出元 1件 [`00c5c3b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5c3b0.md) · 呼出先 7件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md) [`00c5a920`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5a920.md) [`00c5c270`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5c270.md) [`00c5c320`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5c320.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, store_condition, unresolved_branch_alignment, unresolved_store_alignment

命令の説明率　旧版 94.92% / 新版 94.92%

優先判定に残った影響 `call_argument_candidate` 6件, `store_condition` 1件, `unresolved_branch_alignment` 2件, `unresolved_store_alignment` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "00b8fde8",
      "incomplete_value": true,
      "site": "00b8fdec",
      "value": [
        "live",
        "register:40c8:8"
      ]
    },
    "ordinal": 3,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b8fe8c",
      "incomplete_value": false,
      "site": "00b8fe9c",
      "value": [
        "leaf",
        "const:4:8"
      ]
    },
    "old": null,
    "ordinal": 4,
    "slot": 3
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b8feb0",
      "incomplete_value": true,
      "site": "00b8febc",
      "value": [
        "live",
        "register:4098:8"
      ]
    },
    "old": null,
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
      "00b8fdf4",
      "READ",
      [
        "storage",
        "00c9b858",
        null,
        "pointer"
      ]
    ],
    [
      "00b8fe1c",
      "READ",
      [
        "storage",
        "00c9b520",
        null,
        "pointer"
      ]
    ],
    [
      "00b8fe30",
      "PARAM",
      [
        "storage",
        "003104a1",
        "std::nothrow",
        "undefined1"
      ]
    ]
  ],
  "added": [
    [
      "00b8fdf4",
      "READ",
      [
        "storage",
        "00c9b928",
        null,
        "pointer"
      ]
    ],
    [
      "00b8fe1c",
      "READ",
      [
        "storage",
        "00c9b5f0",
        null,
        "pointer"
      ]
    ],
    [
      "00b8fe30",
      "PARAM",
      [
        "storage",
        "003104e1",
        "std::nothrow",
        "undefined1"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b8fdec ["INT_ADD", "register:40f0:8", ["const:b8fdec:8", "const:4:8"]]
- 00b8fdec ["CALL", null, ["callee:00c57f80:8"]]
+ 00b8fe88 ["INT_ADD", "register:40f0:8", ["const:b8fe88:8", "const:4:8"]]
+ 00b8fe88 ["CALL", null, ["callee:00c57f80:8"]]
- 00b8fe00 ["INT_ADD", "register:40f0:8", ["const:b8fe00:8", "const:4:8"]]
- 00b8fe00 ["CALL", null, ["callee:00c5c350:8"]]
+ 00b8fe9c ["INT_ADD", "register:40f0:8", ["const:b8fe9c:8", "const:4:8"]]
+ 00b8fe9c ["CALL", null, ["callee:00c5c350:8"]]
- 00b8fe20 ["INT_ADD", "register:40f0:8", ["const:b8fe20:8", "const:4:8"]]
- 00b8fe20 ["CALL", null, ["callee:00c5c320:8"]]
+ 00b8febc ["INT_ADD", "register:40f0:8", ["const:b8febc:8", "const:4:8"]]
+ 00b8febc ["CALL", null, ["callee:00c5c320:8"]]
~~~


<a id="compare-2db7d070445dcd05e08964286d1dbfb4"></a>

### [`00b8fef8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b8f/00b8fef8.md) → [`00b8ff94`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b8f/00b8ff94.md) _ZN11flatbuffers21FlatBufferBuilderImplILb0EE26CreateVectorOfSortedTablesIN10reflection7ServiceENSt6__ndk19allocatorINS_6OffsetIS4_EEEEEENS7

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`00c5c310`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5c/00c5c310.md) · 呼出先 7件 [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md) [`00c5a850`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5a850.md) [`00c5c1a0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5c/00c5c1a0.md) [`00c5c250`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5c/00c5c250.md)
- 新版 呼出元 1件 [`00c5c3e0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5c3e0.md) · 呼出先 7件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md) [`00c5a920`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5a920.md) [`00c5c270`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5c270.md) [`00c5c320`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5c320.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, constant, control_flow, local_def_use, operands_and_dependencies, operation_sequence, unresolved_return_alignment

命令の説明率　旧版 95.76% / 新版 95.76%

優先判定に残った影響 `call_argument_candidate` 5件, `unresolved_return_alignment` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "00b8ff68",
      "incomplete_value": true,
      "site": "00b8ff70",
      "value": [
        "INT_LEFT",
        "8",
        [
          [
            "live",
            "register:40b8:8"
          ],
          [
            "leaf",
            "const:2:8"
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
      "definition_site": "00b8ff6c",
      "incomplete_value": true,
      "site": "00b8ff70",
      "value": [
        "live",
        "register:40c0:8"
      ]
    },
    "ordinal": 0,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b90044",
      "incomplete_value": true,
      "site": "00b90058",
      "value": [
        "live",
        "register:40a0:8"
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
      "00b8ffcc",
      "READ",
      [
        "storage",
        "00c9b880",
        null,
        "pointer"
      ]
    ],
    [
      "00b8fff4",
      "READ",
      [
        "storage",
        "00c9b520",
        null,
        "pointer"
      ]
    ],
    [
      "00b90008",
      "PARAM",
      [
        "storage",
        "003104a1",
        "std::nothrow",
        "undefined1"
      ]
    ]
  ],
  "added": [
    [
      "00b8ffcc",
      "READ",
      [
        "storage",
        "00c9b950",
        null,
        "pointer"
      ]
    ],
    [
      "00b8fff4",
      "READ",
      [
        "storage",
        "00c9b5f0",
        null,
        "pointer"
      ]
    ],
    [
      "00b90008",
      "PARAM",
      [
        "storage",
        "003104e1",
        "std::nothrow",
        "undefined1"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b8ff70 ["INT_ADD", "register:40f0:8", ["const:b8ff70:8", "const:4:8"]]
- 00b8ff70 ["CALL", null, ["callee:00c5a920:8"]]
+ 00b9000c ["INT_ADD", "register:40f0:8", ["const:b9000c:8", "const:4:8"]]
+ 00b9000c ["CALL", null, ["callee:00c5a920:8"]]
- 00b8ffbc ["INT_ADD", "register:40f0:8", ["const:b8ffbc:8", "const:4:8"]]
- 00b8ffbc ["CALL", null, ["callee:00c5cc00:8"]]
+ 00b90058 ["INT_ADD", "register:40f0:8", ["const:b90058:8", "const:4:8"]]
+ 00b90058 ["CALL", null, ["callee:00c5cc00:8"]]
- 00b8ff30 ["INT_ADD", "tmp:0:8", ["register:4050:8", "const:880:8"]]
- 00b8ff30 ["LOAD", "register:4050:8", ["const:1b1:8", "tmp:0:8"]]
+ 00b8ffcc ["INT_ADD", "tmp:0:8", ["register:4050:8", "const:950:8"]]
+ 00b8ffcc ["LOAD", "register:4050:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-73ebed784b6e7d23bd44ae90f5b25f88"></a>

### [`00b900d0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b90/00b900d0.md) → [`00b9016c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b90/00b9016c.md) _ZN10reflection12CreateSchemaERN11flatbuffers21FlatBufferBuilderImplILb0EEENS0_6OffsetINS0_6VectorINS4_INS_6ObjectEEEjEEEENS4_INS5_INS4_INS_

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`00c5bf80`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5bf80.md) · 呼出先 9件 [`00c5c1a0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5c/00c5c1a0.md) [`00c5c270`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5c/00c5c270.md) [`00c5c340`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5c/00c5c340.md) [`00c5c360`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5c/00c5c360.md) [`00c5c370`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5c/00c5c370.md)
- 新版 呼出元 1件 [`00c5c050`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5c050.md) · 呼出先 9件 [`00c5c270`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5c270.md) [`00c5c340`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5c340.md) [`00c5c410`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5c410.md) [`00c5c430`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5c430.md) [`00c5c440`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5c440.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, constant, control_flow, control_flow_count, local_def_use, operands_and_dependencies, operation_sequence, unresolved_branch_alignment

命令の説明率　旧版 98.85% / 新版 98.85%

優先判定に残った影響 `call_argument_candidate` 11件, `unresolved_branch_alignment` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b901c4",
      "incomplete_value": true,
      "site": "00b901c8",
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
      "definition_site": "00b901c0",
      "incomplete_value": true,
      "site": "00b901c8",
      "value": [
        "INT_ZEXT",
        "8",
        [
          [
            "live",
            "register:4038:4"
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
    "new": null,
    "old": {
      "definition_site": "00b90194",
      "incomplete_value": false,
      "site": "00b9019c",
      "value": [
        "leaf",
        "const:12:8"
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
      "unmatched:00b90144",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b901f4"
      ]
    ]
  ],
  "added": [
    [
      "00b901e0",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b901f4"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b9012c ["INT_ADD", "register:40f0:8", ["const:b9012c:8", "const:4:8"]]
- 00b9012c ["CALL", null, ["callee:00c5c340:8"]]
+ 00b901c8 ["INT_ADD", "register:40f0:8", ["const:b901c8:8", "const:4:8"]]
+ 00b901c8 ["CALL", null, ["callee:00c5c340:8"]]
- 00b9019c ["INT_ADD", "register:40f0:8", ["const:b9019c:8", "const:4:8"]]
- 00b9019c ["CALL", null, ["callee:00c5c450:8"]]
+ 00b90238 ["INT_ADD", "register:40f0:8", ["const:b90238:8", "const:4:8"]]
+ 00b90238 ["CALL", null, ["callee:00c5c450:8"]]
- 00b901ac ["INT_ADD", "register:40f0:8", ["const:b901ac:8", "const:4:8"]]
- 00b901ac ["CALL", null, ["callee:00c5c4b0:8"]]
+ 00b90248 ["INT_ADD", "register:40f0:8", ["const:b90248:8", "const:4:8"]]
+ 00b90248 ["CALL", null, ["callee:00c5c4b0:8"]]
~~~


<a id="compare-bb0ef6f9358d4ce4057e63159411e9eb"></a>

### [`00b90454`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b90/00b90454.md) → [`00b904f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b90/00b904f0.md) _ZN11flatbuffers21FlatBufferBuilderImplILb0EE26CreateVectorOfSortedTablesIN10reflection5FieldENSt6__ndk19allocatorINS_6OffsetIS4_EEEEEENS7_I

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`00c5c2f0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5c/00c5c2f0.md) · 呼出先 7件 [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md) [`00c5a850`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5a850.md) [`00c5c1a0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5c/00c5c1a0.md) [`00c5c250`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5c/00c5c250.md)
- 新版 呼出元 1件 [`00c5c3c0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5c3c0.md) · 呼出先 7件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md) [`00c5a920`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5a920.md) [`00c5c270`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5c270.md) [`00c5c320`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5c320.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, operands_and_dependencies, operation_sequence, store_condition, unresolved_branch_alignment, unresolved_return_alignment

命令の説明率　旧版 95.76% / 新版 95.76%

優先判定に残った影響 `call_argument_candidate` 5件, `store_condition` 1件, `unresolved_branch_alignment` 1件, `unresolved_return_alignment` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "00b9052c",
      "incomplete_value": true,
      "site": "00b90534",
      "value": [
        "live",
        "register:4098:8"
      ]
    },
    "ordinal": 4,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "00b90530",
      "incomplete_value": true,
      "site": "00b90534",
      "value": [
        "live",
        "register:40a8:8"
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
      "definition_site": "00b90524",
      "incomplete_value": false,
      "site": "00b90534",
      "value": [
        "leaf",
        "const:4:8"
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
      "00b90528",
      "READ",
      [
        "storage",
        "00c9b860",
        null,
        "pointer"
      ]
    ],
    [
      "00b90550",
      "READ",
      [
        "storage",
        "00c9b520",
        null,
        "pointer"
      ]
    ],
    [
      "00b90564",
      "PARAM",
      [
        "storage",
        "003104a1",
        "std::nothrow",
        "undefined1"
      ]
    ]
  ],
  "added": [
    [
      "00b90528",
      "READ",
      [
        "storage",
        "00c9b930",
        null,
        "pointer"
      ]
    ],
    [
      "00b90550",
      "READ",
      [
        "storage",
        "00c9b5f0",
        null,
        "pointer"
      ]
    ],
    [
      "00b90564",
      "PARAM",
      [
        "storage",
        "003104e1",
        "std::nothrow",
        "undefined1"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b90534 ["INT_ADD", "register:40f0:8", ["const:b90534:8", "const:4:8"]]
- 00b90534 ["CALL", null, ["callee:00c5c350:8"]]
+ 00b905d0 ["INT_ADD", "register:40f0:8", ["const:b905d0:8", "const:4:8"]]
+ 00b905d0 ["CALL", null, ["callee:00c5c350:8"]]
- 00b90554 ["INT_ADD", "register:40f0:8", ["const:b90554:8", "const:4:8"]]
- 00b90554 ["CALL", null, ["callee:00c5c320:8"]]
+ 00b905f0 ["INT_ADD", "register:40f0:8", ["const:b905f0:8", "const:4:8"]]
+ 00b905f0 ["CALL", null, ["callee:00c5c320:8"]]
- 00b905f0 ["INT_ADD", "register:40f0:8", ["const:b905f0:8", "const:4:8"]]
- 00b905f0 ["CALL", null, ["callee:00c5c320:8"]]
+ 00b9068c ["INT_ADD", "register:40f0:8", ["const:b9068c:8", "const:4:8"]]
+ 00b9068c ["CALL", null, ["callee:00c5c320:8"]]
~~~


<a id="compare-b47f0a760b7ca2e518fb6a9f91dc06ad"></a>

### [`00b9062c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b90/00b9062c.md) → [`00b906c8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b90/00b906c8.md) _ZNK11flatbuffers10Definition19SerializeAttributesEPNS_21FlatBufferBuilderImplILb0EEERKNS_6ParserE

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 1件 [`00b92e98`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b92/00b92e98.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00b92f34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b92/00b92f34.md)

変更の種類 cfg_edge_inventory, constant, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_store_alignment

命令の説明率　旧版 71.43% / 新版 71.43%

アドレスに依存する影響 `unresolved_store_alignment` 2件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00b9062c",
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
      "00b906c8",
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
- 00b9062c ["COPY", "tmp:0:8", ["register:40e8:8"]]
- 00b9062c ["COPY", "tmp:1:8", ["register:40f0:8"]]
- 00b9062c ["INT_ADD", "register:8:8", ["register:8:8", "const:fffffffffffffff0:8"]]
- 00b9062c ["STORE", null, ["const:1b1:8", "register:8:8", "tmp:0:8"]]
- 00b90630 ["COPY", "register:40e8:8", ["register:8:8"]]
- 00b90638 ["INT_ADD", "register:40f0:8", ["const:b90638:8", "const:4:8"]]
- 00b90638 ["CALL", null, ["callee:00b92f34:8"]]
+ 00b906d4 ["INT_ADD", "register:40f0:8", ["const:b906d4:8", "const:4:8"]]
+ 00b906d4 ["CALL", null, ["callee:00b92f34:8"]]
~~~


<a id="compare-6d0075363d49f4e11f0d05532d75e6bf"></a>

### [`00b90648`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b90/00b90648.md) → [`00b906e4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b90/00b906e4.md) _ZN10reflection12CreateObjectERN11flatbuffers21FlatBufferBuilderImplILb0EEENS0_6OffsetINS0_6StringEEENS4_INS0_6VectorINS4_INS_5FieldEEEjEEEE

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`00c5bf70`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5bf70.md) · 呼出先 8件 [`00c5c1a0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5c/00c5c1a0.md) [`00c5c1e0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5c/00c5c1e0.md) [`00c5c240`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5c/00c5c240.md) [`00c5c340`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5c/00c5c340.md) [`00c5c370`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5c/00c5c370.md)
- 新版 呼出元 1件 [`00c5c040`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5c040.md) · 呼出先 8件 [`00c5c270`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5c270.md) [`00c5c2b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5c2b0.md) [`00c5c310`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5c310.md) [`00c5c410`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5c410.md) [`00c5c440`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5c440.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, constant, control_flow, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_store_alignment

命令の説明率　旧版 83.33% / 新版 83.33%

優先判定に残った影響 `call_argument_candidate` 1件, `unresolved_branch_alignment` 1件, `unresolved_store_alignment` 11件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b90748",
      "incomplete_value": true,
      "site": "00b90754",
      "value": [
        "INT_AND",
        "8",
        [
          [
            "live",
            "register:40d8:8"
          ],
          [
            "leaf",
            "const:ffffffff:8"
          ]
        ]
      ]
    },
    "old": null,
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
      "unmatched:00b90648",
      "WRITE",
      [
        "storage",
        "Stack[-0x60]",
        null,
        null
      ]
    ],
    [
      "unmatched:00b9064c",
      "WRITE",
      [
        "storage",
        "Stack[-0x50]",
        null,
        null
      ]
    ],
    [
      "unmatched:00b90650",
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
      "00b906e4",
      "WRITE",
      [
        "storage",
        "Stack[-0x60]",
        null,
        null
      ]
    ],
    [
      "00b906e8",
      "WRITE",
      [
        "storage",
        "Stack[-0x50]",
        null,
        null
      ]
    ],
    [
      "00b906ec",
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
- 00b906b8 ["INT_ADD", "register:40f0:8", ["const:b906b8:8", "const:4:8"]]
- 00b906b8 ["CALL", null, ["callee:00c5c4c0:8"]]
+ 00b90754 ["INT_ADD", "register:40f0:8", ["const:b90754:8", "const:4:8"]]
+ 00b90754 ["CALL", null, ["callee:00c5c4c0:8"]]
- 00b90754 ["INT_ZEXT", "register:40c0:8", ["register:4000:4"]]
- 00b90648 ["COPY", "tmp:0:8", ["register:40d8:8"]]
- 00b90648 ["INT_ADD", "register:8:8", ["register:8:8", "const:ffffffffffffffa0:8"]]
- 00b90648 ["STORE", null, ["const:1b1:8", "register:8:8", "tmp:0:8"]]
~~~


<a id="compare-66ef7ffc4474dbc16c2529ee0808d120"></a>

### [`00b90810`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b90/00b90810.md) → [`00b908ac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b90/00b908ac.md) _ZN11flatbuffers9StructDef11DeserializeERNS_6ParserEPKN10reflection6ObjectE

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`00c5c890`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5c/00c5c890.md) · 呼出先 14件 [`00b93150`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b93/00b93150.md) [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md) [`00c58000`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58000.md)
- 新版 呼出元 1件 [`00c5c960`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5c960.md) · 呼出先 14件 [`00b931ec`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b93/00b931ec.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md) [`00c580d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c580d0.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, local_def_use, memory_read, memory_read_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 94.60% / 新版 94.60%

優先判定に残った影響 `call_argument_candidate` 8件, `unresolved_branch_alignment` 1件, `unresolved_call_alignment` 2件, `unresolved_store_alignment` 4件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "00b90a70",
      "incomplete_value": true,
      "site": "00b90a74",
      "value": [
        "LOAD",
        "8",
        [
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
                "register:40a0:8"
              ],
              [
                "leaf",
                "const:10:8"
              ]
            ]
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
      "definition_site": "00b90b38",
      "incomplete_value": true,
      "site": "00b90b3c",
      "value": [
        "LOAD",
        "8",
        [
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
                "const:38:8"
              ]
            ]
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
      "definition_site": "00b90bfc",
      "incomplete_value": true,
      "site": "00b90c00",
      "value": [
        "INT_LEFT",
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
      "definition_site": "00b90b60",
      "incomplete_value": true,
      "site": "00b90b64",
      "value": [
        "live",
        "register:40b0:8"
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
      "unmatched:00b90ab0",
      "READ",
      [
        "storage",
        "002b05f4",
        null,
        "string"
      ]
    ],
    [
      "unmatched:00b90ab4",
      "READ",
      [
        "storage",
        "002b05fa",
        null,
        "string"
      ]
    ],
    [
      "unmatched:00b90ad4",
      "WRITE",
      [
        "storage",
        "Stack[-0x89]",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "00b90b4c",
      "READ",
      [
        "storage",
        "002b0598",
        null,
        "string"
      ]
    ],
    [
      "00b90b50",
      "READ",
      [
        "storage",
        "002b059e",
        null,
        "string"
      ]
    ],
    [
      "00b90b70",
      "WRITE",
      [
        "storage",
        "Stack[-0x89]",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 00b90a74 ["INT_ADD", "register:40f0:8", ["const:b90a74:8", "const:4:8"]]
- 00b90a74 ["CALL", null, ["callee:00c57f80:8"]]
+ 00b90b10 ["INT_ADD", "register:40f0:8", ["const:b90b10:8", "const:4:8"]]
+ 00b90b10 ["CALL", null, ["callee:00c57f80:8"]]
- 00b90aa0 ["INT_ADD", "register:40f0:8", ["const:b90aa0:8", "const:4:8"]]
- 00b90aa0 ["CALL", null, ["callee:00c57f80:8"]]
+ 00b90b3c ["INT_ADD", "register:40f0:8", ["const:b90b3c:8", "const:4:8"]]
+ 00b90b3c ["CALL", null, ["callee:00c57f80:8"]]
- 00b90b3c ["COPY", "tmp:0:8", ["register:40c0:8"]]
- 00b90b3c ["LOAD", "tmp:1:4", ["const:1b1:8", "tmp:0:8"]]
- 00b90b3c ["INT_ZEXT", "register:4040:8", ["tmp:1:4"]]
~~~


<a id="compare-8493393e5857f19c263df70e8dbf35f4"></a>

### [`00b90e2c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b90/00b90e2c.md) → [`00b90ec8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b90/00b90ec8.md) _ZN11flatbuffers8FieldDef11DeserializeERNS_6ParserEPKN10reflection5FieldE

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`00c5c840`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5c/00c5c840.md) · 呼出先 12件 [`00b93150`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b93/00b93150.md) [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md) [`00c58000`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58000.md)
- 新版 呼出元 1件 [`00c5c910`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5c910.md) · 呼出先 12件 [`00b931ec`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b93/00b931ec.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md) [`00c580d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c580d0.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, store_condition, unresolved_branch_alignment, unresolved_return_alignment, unresolved_store_alignment

命令の説明率　旧版 85.06% / 新版 85.06%

優先判定に残った影響 `call_argument_candidate` 11件, `store_condition` 5件, `unresolved_branch_alignment` 18件, `unresolved_return_alignment` 1件, `unresolved_store_alignment` 12件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "00b90f00",
      "incomplete_value": true,
      "site": "00b90f04",
      "value": [
        "LOAD",
        "8",
        [
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
                "const:10:8"
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
    "new": {
      "definition_site": "00b9120c",
      "incomplete_value": true,
      "site": "00b91214",
      "value": [
        "live",
        "register:40b0:8"
      ]
    },
    "old": {
      "definition_site": "00b91170",
      "incomplete_value": true,
      "site": "00b91178",
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
            "const:48:8"
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
      "definition_site": "00b91234",
      "incomplete_value": true,
      "site": "00b91250",
      "value": [
        "live",
        "register:40b0:8"
      ]
    },
    "old": null,
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
      "unmatched:00b90f38",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b90ff0"
      ]
    ],
    [
      "unmatched:00b90f40",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b90ff0"
      ]
    ],
    [
      "unmatched:00b90f74",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b91024"
      ]
    ]
  ],
  "added": [
    [
      "00b90fd4",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b90ff0"
      ]
    ],
    [
      "00b90fdc",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b90ff0"
      ]
    ],
    [
      "00b91010",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b91024"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b90f04 ["INT_ADD", "register:40f0:8", ["const:b90f04:8", "const:4:8"]]
- 00b90f04 ["CALL", null, ["callee:00c57f80:8"]]
+ 00b90fa0 ["INT_ADD", "register:40f0:8", ["const:b90fa0:8", "const:4:8"]]
+ 00b90fa0 ["CALL", null, ["callee:00c57f80:8"]]
- 00b910c0 ["INT_EQUAL", "tmp:0:1", ["register:4050:8", "const:0:8"]]
- 00b910c0 ["CBRANCH", null, ["local:b60:8", "tmp:0:1"]]
+ 00b9115c ["INT_EQUAL", "tmp:0:1", ["register:4050:8", "const:0:8"]]
+ 00b9115c ["CBRANCH", null, ["local:b56:8", "tmp:0:1"]]
+ 00b910dc ["COPY", "tmp:0:8", ["register:40b0:8"]]
+ 00b910dc ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:5000:16"]]
~~~


<a id="compare-17e8110898694b6fa1fcbfc9bd3a34a0"></a>

### [`00b914a8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b91/00b914a8.md) → [`00b91544`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b91/00b91544.md) _ZNK11flatbuffers4Type9SerializeEPNS_21FlatBufferBuilderImplILb0EEE

根拠 `symbol` · `raw_instruction_pcode` · `bounded` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`00c5c9d0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5c/00c5c9d0.md) · 呼出先 1件 [`00c5bf50`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5bf50.md)
- 新版 呼出元 1件 [`00c5caa0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5caa0.md) · 呼出先 1件 [`00c5c020`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5c020.md)

変更の種類 branch_condition_or_target, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment

命令の説明率　旧版 84.75% / 新版 84.75%

優先判定に残った影響 `unresolved_branch_alignment` 2件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00b914c0",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b915ec"
      ]
    ],
    [
      "00b9156c",
      "DATA",
      [
        "storage",
        "0030e1aa",
        "switchD_00b914dc::switchdataD_0030e1aa",
        "byte"
      ]
    ],
    [
      "unmatched:00b914ec",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b915fc"
      ]
    ]
  ],
  "added": [
    [
      "00b9155c",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b915ec"
      ]
    ],
    [
      "00b9156c",
      "DATA",
      [
        "storage",
        "0030e1ea",
        "switchD_00b91578::switchdataD_0030e1ea",
        "byte"
      ]
    ],
    [
      "00b91588",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b915fc"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b914c0 ["BOOL_NEGATE", "tmp:0:1", ["register:101:1"]]
- 00b914c0 ["BOOL_AND", "tmp:1:1", ["register:102:1", "tmp:0:1"]]
- 00b914c0 ["CBRANCH", null, ["local:b15:8", "tmp:1:1"]]
- 00b914c4 ["COPY", "register:4048:8", ["const:30e000:8"]]
- 00b914c8 ["COPY", "tmp:0:8", ["const:1aa:8"]]
- 00b914c8 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 00b914c8 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 00b914c8 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 00b91564 ["COPY", "tmp:0:8", ["const:1ea:8"]]
+ 00b91564 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 00b91564 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 00b91564 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
~~~


<a id="compare-0a81302efde98a7413bc85fd327dab91"></a>

### [`00b91594`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b91/00b91594.md) → [`00b91630`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b91/00b91630.md) _ZN10reflection11CreateFieldERN11flatbuffers21FlatBufferBuilderImplILb0EEENS0_6OffsetINS0_6StringEEENS4_INS_4TypeEEEttldbbbNS4_INS0_6VectorI

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`00c5bf60`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5bf60.md) · 呼出先 10件 [`00c5c1a0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5c/00c5c1a0.md) [`00c5c1e0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5c/00c5c1e0.md) [`00c5c210`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5c/00c5c210.md) [`00c5c220`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5c/00c5c220.md) [`00c5c260`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5c/00c5c260.md)
- 新版 呼出元 1件 [`00c5c030`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5c030.md) · 呼出先 10件 [`00c5c270`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5c270.md) [`00c5c2b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5c2b0.md) [`00c5c2e0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5c2e0.md) [`00c5c2f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5c2f0.md) [`00c5c330`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5c330.md)

変更の種類 branch_condition_or_target, call_argument_candidate, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, store_condition, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 82.58% / 新版 82.58%

優先判定に残った影響 `call_argument_candidate` 13件, `store_condition` 1件, `unresolved_branch_alignment` 2件, `unresolved_call_alignment` 1件, `unresolved_store_alignment` 13件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b917cc",
      "incomplete_value": true,
      "site": "00b917d4",
      "value": [
        "live",
        "register:4098:8"
      ]
    },
    "old": null,
    "ordinal": 8,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b917c8",
      "incomplete_value": false,
      "site": "00b917d4",
      "value": [
        "leaf",
        "const:1c:8"
      ]
    },
    "old": null,
    "ordinal": 8,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b917c4",
      "incomplete_value": true,
      "site": "00b917d4",
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
      "unmatched:00b915a8",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "unmatched:00b915ac",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "unmatched:00b915b4",
      "READ",
      [
        "storage",
        "Stack[0x20]",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "00b91644",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "00b91648",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "00b91650",
      "READ",
      [
        "storage",
        "Stack[0x20]",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
+ 00b9165c ["COPY", "register:40d8:8", ["register:4010:8"]]
- 00b91738 ["INT_ADD", "register:40f0:8", ["const:b91738:8", "const:4:8"]]
- 00b91738 ["CALL", null, ["callee:00c5c2e0:8"]]
+ 00b917d4 ["INT_ADD", "register:40f0:8", ["const:b917d4:8", "const:4:8"]]
+ 00b917d4 ["CALL", null, ["callee:00c5c2e0:8"]]
- 00b9174c ["INT_ADD", "register:40f0:8", ["const:b9174c:8", "const:4:8"]]
- 00b9174c ["CALL", null, ["callee:00c5c2e0:8"]]
+ 00b917e8 ["INT_ADD", "register:40f0:8", ["const:b917e8:8", "const:4:8"]]
+ 00b917e8 ["CALL", null, ["callee:00c5c2e0:8"]]
~~~


<a id="compare-2e93f99c96fe25632f6b80c9c8a9135a"></a>

### [`00b91800`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b91/00b91800.md) → [`00b9189c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b91/00b9189c.md) _ZN11flatbuffers4Type11DeserializeERKNS_6ParserEPKN10reflection4TypeE

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal` · `cfg_change`

- 旧版 呼出元 1件 [`00c5c430`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5c/00c5c430.md) · 呼出先 0件 
- 新版 呼出元 1件 [`00c5c500`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5c500.md) · 呼出先 0件 

変更の種類 branch_condition_or_target, cfg_edge_inventory, control_flow, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00b91800 ["INT_EQUAL", "tmp:0:1", ["register:4010:8", "const:0:8"]]
- 00b91800 ["CBRANCH", null, ["local:b29:8", "tmp:0:1"]]
+ 00b9189c ["INT_EQUAL", "tmp:0:1", ["register:4010:8", "const:0:8"]]
+ 00b9189c ["CBRANCH", null, ["local:b31:8", "tmp:0:1"]]
- 00b91814 ["BOOL_NEGATE", "tmp:0:1", ["register:102:1"]]
- 00b91814 ["BOOL_OR", "tmp:1:1", ["tmp:0:1", "register:101:1"]]
- 00b91814 ["CBRANCH", null, ["local:b10:8", "tmp:1:1"]]
+ 00b918b0 ["BOOL_NEGATE", "tmp:0:1", ["register:102:1"]]
+ 00b918b0 ["BOOL_OR", "tmp:1:1", ["tmp:0:1", "register:101:1"]]
+ 00b918b0 ["CBRANCH", null, ["local:b12:8", "tmp:1:1"]]
- 00b9181c ["INT_EQUAL", "tmp:0:1", ["register:4050:8", "const:0:8"]]
- 00b9181c ["CBRANCH", null, ["local:b4:8", "tmp:0:1"]]
+ 00b918b8 ["INT_EQUAL", "tmp:0:1", ["register:4050:8", "const:0:8"]]
+ 00b918b8 ["CBRANCH", null, ["local:b5:8", "tmp:0:1"]]
~~~


<a id="compare-663e11b374c63a1cb6ddccf89f749670"></a>

### [`00b9192c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b91/00b9192c.md) → [`00b919c8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b91/00b919c8.md) _ZN11flatbuffers13FloatToStringIdEENSt6__ndk112basic_stringIcNS1_11char_traitsIcEENS1_9allocatorIcEEEET_i

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`00c5c0c0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5c/00c5c0c0.md) · 呼出先 9件 [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md) [`00c581b0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c581b0.md) [`00c581e0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c581e0.md) [`00c58210`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58210.md)
- 新版 呼出元 1件 [`00c5c190`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5c190.md) · 呼出先 9件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md) [`00c58280`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58280.md) [`00c582b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c582b0.md) [`00c582e0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c582e0.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_return_alignment, unresolved_store_alignment

命令の説明率　旧版 68.46% / 新版 68.46%

優先判定に残った影響 `call_argument_candidate` 2件, `unresolved_branch_alignment` 3件, `unresolved_return_alignment` 1件, `unresolved_store_alignment` 25件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b91a78",
      "incomplete_value": true,
      "site": "00b91a8c",
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
            "const:20:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b919dc",
      "incomplete_value": true,
      "site": "00b919f0",
      "value": [
        "live",
        "register:40a8:8"
      ]
    },
    "ordinal": 1,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b91ac8",
      "incomplete_value": true,
      "site": "00b91af4",
      "value": [
        "live",
        "register:40b8:8"
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
      "unmatched:00b91930",
      "WRITE",
      [
        "storage",
        "Stack[-0x70]",
        null,
        null
      ]
    ],
    [
      "unmatched:00b91934",
      "WRITE",
      [
        "storage",
        "Stack[-0x60]",
        null,
        null
      ]
    ],
    [
      "unmatched:00b91938",
      "WRITE",
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
      "00b919cc",
      "WRITE",
      [
        "storage",
        "Stack[-0x70]",
        null,
        null
      ]
    ],
    [
      "00b919d0",
      "WRITE",
      [
        "storage",
        "Stack[-0x60]",
        null,
        null
      ]
    ],
    [
      "00b919d4",
      "WRITE",
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
- 00b919f0 ["INT_ADD", "register:40f0:8", ["const:b919f0:8", "const:4:8"]]
- 00b919f0 ["CALL", null, ["callee:00c5a870:8"]]
+ 00b91a8c ["INT_ADD", "register:40f0:8", ["const:b91a8c:8", "const:4:8"]]
+ 00b91a8c ["CALL", null, ["callee:00c5a870:8"]]
- 00b91a58 ["INT_ADD", "register:40f0:8", ["const:b91a58:8", "const:4:8"]]
- 00b91a58 ["CALL", null, ["callee:00c582e0:8"]]
+ 00b91af4 ["INT_ADD", "register:40f0:8", ["const:b91af4:8", "const:4:8"]]
+ 00b91af4 ["CALL", null, ["callee:00c582e0:8"]]
- 00b91af4 ["BRANCH", null, ["local:b16:8"]]
+ 00b91b90 ["BRANCH", null, ["local:b17:8"]]
~~~


<a id="compare-06e943509be4dec98b5156c9a604980c"></a>

### [`00b91b80`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b91/00b91b80.md) → [`00b91c1c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b91/00b91c1c.md) _ZNK11flatbuffers7RPCCall9SerializeEPNS_21FlatBufferBuilderImplILb0EEERKNS_6ParserE

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `equal` · `cfg_change`

- 旧版 呼出元 1件 [`00c5ca20`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5c/00c5ca20.md) · 呼出先 8件 [`00b92e98`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b92/00b92e98.md) [`00c5c2a0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5c/00c5c2a0.md) [`00c5c2c0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5c/00c5c2c0.md) [`00c5c340`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5c/00c5c340.md) [`00c5c360`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5c/00c5c360.md)
- 新版 呼出元 1件 [`00c5caf0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5caf0.md) · 呼出先 8件 [`00b92f34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b92/00b92f34.md) [`00c5c370`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5c370.md) [`00c5c390`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5c390.md) [`00c5c410`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5c410.md) [`00c5c430`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5c430.md)

変更の種類 branch_condition_or_target, call_argument_candidate, constant, control_flow, local_def_use, operands_and_dependencies, operation_sequence

命令の説明率　旧版 98.48% / 新版 98.48%

優先判定に残った影響 `call_argument_candidate` 4件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "00b91c28",
      "incomplete_value": true,
      "site": "00b91c30",
      "value": [
        "live",
        "register:4098:8"
      ]
    },
    "ordinal": 4,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "00b91c24",
      "incomplete_value": false,
      "site": "00b91c30",
      "value": [
        "leaf",
        "const:a:8"
      ]
    },
    "ordinal": 4,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b91cf0",
      "incomplete_value": false,
      "site": "00b91cfc",
      "value": [
        "leaf",
        "const:4:8"
      ]
    },
    "old": null,
    "ordinal": 7,
    "slot": 2
  }
]
~~~


~~~diff
- 00b91bd0 ["INT_ADD", "register:40f0:8", ["const:b91bd0:8", "const:4:8"]]
- 00b91bd0 ["CALL", null, ["callee:00b92f34:8"]]
+ 00b91c6c ["INT_ADD", "register:40f0:8", ["const:b91c6c:8", "const:4:8"]]
+ 00b91c6c ["CALL", null, ["callee:00b92f34:8"]]
- 00b91c30 ["INT_ADD", "register:40f0:8", ["const:b91c30:8", "const:4:8"]]
- 00b91c30 ["CALL", null, ["callee:00c5c4c0:8"]]
+ 00b91ccc ["INT_ADD", "register:40f0:8", ["const:b91ccc:8", "const:4:8"]]
+ 00b91ccc ["CALL", null, ["callee:00c5c4c0:8"]]
- 00b91c60 ["INT_ADD", "register:40f0:8", ["const:b91c60:8", "const:4:8"]]
- 00b91c60 ["CALL", null, ["callee:00c5c440:8"]]
+ 00b91cfc ["INT_ADD", "register:40f0:8", ["const:b91cfc:8", "const:4:8"]]
+ 00b91cfc ["CALL", null, ["callee:00c5c440:8"]]
~~~


<a id="compare-6e48a05756e78b66589c4ae1c6d761c2"></a>

### [`00b91c88`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b91/00b91c88.md) → [`00b91d24`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b91/00b91d24.md) _ZN11flatbuffers7RPCCall11DeserializeERNS_6ParserEPKN10reflection7RPCCallE

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`00c5c830`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5c/00c5c830.md) · 呼出先 7件 [`00b93150`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b93/00b93150.md) [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md) [`00c58000`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58000.md)
- 新版 呼出元 1件 [`00c5c900`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5c900.md) · 呼出先 7件 [`00b931ec`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b93/00b931ec.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md) [`00c580d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c580d0.md)

変更の種類 branch_condition_or_target, call, call_argument_candidate, call_count, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, store_condition, unresolved_branch_alignment, unresolved_call_alignment, unresolved_return_alignment, unresolved_store_alignment

命令の説明率　旧版 77.98% / 新版 77.98%

優先判定に残った影響 `call_argument_candidate` 7件, `store_condition` 6件, `unresolved_branch_alignment` 10件, `unresolved_call_alignment` 2件, `unresolved_return_alignment` 1件, `unresolved_store_alignment` 11件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b91e44",
      "incomplete_value": true,
      "site": "00b91e4c",
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
            "const:48:8"
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
      "definition_site": "00b91e8c",
      "incomplete_value": true,
      "site": "00b91e90",
      "value": [
        "INT_AND",
        "8",
        [
          [
            "INT_ADD",
            "8",
            [
              [
                "live",
                "register:40b8:8"
              ],
              [
                "leaf",
                "const:10:8"
              ]
            ]
          ],
          [
            "leaf",
            "const:1fffffff0:8"
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
    "new": null,
    "old": {
      "definition_site": "00b92034",
      "incomplete_value": true,
      "site": "00b92040",
      "value": [
        "live",
        "register:40b8:8"
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
      "unmatched:00b91ce8",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "unmatched:00b91d04"
      ]
    ],
    [
      "unmatched:00b91cf8",
      "WRITE",
      [
        "storage",
        "Stack[-0x80]",
        null,
        null
      ]
    ],
    [
      "unmatched:00b91cfc",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "unmatched:00b91d24"
      ]
    ]
  ],
  "added": [
    [
      "00b91d84",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b91da0"
      ]
    ],
    [
      "00b91d94",
      "WRITE",
      [
        "storage",
        "Stack[-0x80]",
        null,
        null
      ]
    ],
    [
      "00b91d98",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b91dc0"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b91db0 ["INT_ADD", "register:40f0:8", ["const:b91db0:8", "const:4:8"]]
- 00b91db0 ["CALL", null, ["callee:00b931ec:8"]]
+ 00b91e4c ["INT_ADD", "register:40f0:8", ["const:b91e4c:8", "const:4:8"]]
+ 00b91e4c ["CALL", null, ["callee:00b931ec:8"]]
+ 00b91e24 ["BOOL_NEGATE", "tmp:0:1", ["register:102:1"]]
+ 00b91e24 ["CBRANCH", null, ["local:b17:8", "tmp:0:1"]]
+ 00b91e28 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:a:8"]]
+ 00b91e28 ["LOAD", "tmp:1:2", ["const:1b1:8", "tmp:0:8"]]
+ 00b91e28 ["INT_ZEXT", "register:4040:8", ["tmp:1:2"]]
~~~


<a id="compare-446ec499169e0d7611f6bf4d9ee98e14"></a>

### [`00b920dc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b92/00b920dc.md) → [`00b92178`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b92/00b92178.md) _ZN11flatbuffers10ServiceDef11DeserializeERNS_6ParserEPKN10reflection7ServiceE

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`00c5bfc0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5bfc0.md) · 呼出先 10件 [`00b93150`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b93/00b93150.md) [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md) [`00c58000`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58000.md)
- 新版 呼出元 1件 [`00c5c090`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5c090.md) · 呼出先 10件 [`00b931ec`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b93/00b931ec.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md) [`00c580d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c580d0.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, constant, control_flow, control_flow_count, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, store_condition, unresolved_branch_alignment, unresolved_store_alignment

命令の説明率　旧版 96.90% / 新版 96.90%

優先判定に残った影響 `call_argument_candidate` 2件, `store_condition` 6件, `unresolved_branch_alignment` 3件, `unresolved_store_alignment` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b92218",
      "incomplete_value": true,
      "site": "00b92224",
      "value": [
        "live",
        "register:40c0:8"
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
      "definition_site": "00b92360",
      "incomplete_value": true,
      "site": "00b92368",
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
            "const:48:8"
          ]
        ]
      ]
    },
    "ordinal": 10,
    "slot": 1
  },
  {
    "confidence": "limited",
    "guard": [
      [
        "CONDITIONAL_JUMP",
        "00b92470"
      ],
      [
        "CONDITIONAL_JUMP",
        "00b9250c"
      ]
    ],
    "kind": "store_condition",
    "new": {
      "definition_site": "00b9250c",
      "incomplete_value": true,
      "site": "00b92470",
      "value": [
        "BOOL_NEGATE",
        "1",
        [
          [
            "live",
            "register:102:1"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b92470",
      "incomplete_value": true,
      "site": "00b923d4",
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
    "ordinal": 54,
    "slot": 0
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "00b922d4",
      "READ",
      [
        "storage",
        "002c3ed8",
        null,
        "undefined8"
      ]
    ],
    [
      "unmatched:00b92398",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b92538"
      ]
    ],
    [
      "unmatched:00b92470",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b92464"
      ]
    ]
  ],
  "added": [
    [
      "00b922d4",
      "READ",
      [
        "storage",
        "002c3f18",
        null,
        "undefined8"
      ]
    ],
    [
      "00b92434",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b92538"
      ]
    ],
    [
      "00b9250c",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b92464"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b92188 ["INT_ADD", "register:40f0:8", ["const:b92188:8", "const:4:8"]]
- 00b92188 ["CALL", null, ["callee:00c580d0:8"]]
+ 00b92224 ["INT_ADD", "register:40f0:8", ["const:b92224:8", "const:4:8"]]
+ 00b92224 ["CALL", null, ["callee:00c580d0:8"]]
- 00b922cc ["INT_RIGHT", "tmp:0:4", ["register:4000:4", "const:0:4"]]
- 00b922cc ["INT_AND", "tmp:1:4", ["tmp:0:4", "const:1:4"]]
- 00b922cc ["INT_EQUAL", "tmp:2:1", ["tmp:1:4", "const:0:4"]]
- 00b922cc ["INT_EQUAL", "tmp:3:1", ["tmp:2:1", "const:1:1"]]
+ 00b92368 ["INT_RIGHT", "tmp:0:4", ["register:4000:4", "const:0:4"]]
+ 00b92368 ["INT_AND", "tmp:1:4", ["tmp:0:4", "const:1:4"]]
+ 00b92368 ["INT_EQUAL", "tmp:2:1", ["tmp:1:4", "const:0:4"]]
+ 00b92368 ["INT_EQUAL", "tmp:3:1", ["tmp:2:1", "const:1:1"]]
- 00b9233c ["BOOL_NEGATE", "tmp:0:1", ["register:102:1"]]
- 00b9233c ["CBRANCH", null, ["local:b33:8", "tmp:0:1"]]
+ 00b923d8 ["BOOL_NEGATE", "tmp:0:1", ["register:102:1"]]
+ 00b923d8 ["CBRANCH", null, ["local:b29:8", "tmp:0:1"]]
~~~


<a id="compare-0d0b4eb59e2da8049dd8087142000c53"></a>

### [`00b924e4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b92/00b924e4.md) → [`00b92580`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b92/00b92580.md) _ZNK11flatbuffers7EnumVal9SerializeEPNS_21FlatBufferBuilderImplILb0EEERKNS_6ParserE

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `equal` · `cfg_change`

- 旧版 呼出元 1件 [`00c5ca10`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5c/00c5ca10.md) · 呼出先 5件 [`00b92e98`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b92/00b92e98.md) [`00c5bf90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5bf90.md) [`00c5c2a0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5c/00c5c2a0.md) [`00c5c2c0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5c/00c5c2c0.md) [`00c5c9d0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5c/00c5c9d0.md)
- 新版 呼出元 1件 [`00c5cae0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5cae0.md) · 呼出先 5件 [`00b92f34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b92/00b92f34.md) [`00c5c060`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5c060.md) [`00c5c370`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5c370.md) [`00c5c390`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5c390.md) [`00c5caa0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5caa0.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, operands_and_dependencies, operation_sequence, unresolved_return_alignment

命令の説明率　旧版 93.75% / 新版 93.75%

優先判定に残った影響 `call_argument_candidate` 1件, `unresolved_return_alignment` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b92610",
      "incomplete_value": true,
      "site": "00b92624",
      "value": [
        "LOAD",
        "8",
        [
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
                "register:40a0:8"
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
    "old": null,
    "ordinal": 4,
    "slot": 3
  }
]
~~~


~~~diff
- 00b92588 ["INT_ADD", "register:40f0:8", ["const:b92588:8", "const:4:8"]]
- 00b92588 ["CALL", null, ["callee:00c5c060:8"]]
+ 00b92624 ["INT_ADD", "register:40f0:8", ["const:b92624:8", "const:4:8"]]
+ 00b92624 ["CALL", null, ["callee:00c5c060:8"]]
- 00b924f4 ["COPY", "tmp:0:8", ["const:30:8"]]
- 00b924f4 ["INT_CARRY", "register:105:1", ["register:8:8", "tmp:0:8"]]
- 00b924f4 ["INT_SCARRY", "register:106:1", ["register:8:8", "tmp:0:8"]]
- 00b924f4 ["INT_ADD", "tmp:1:8", ["register:8:8", "tmp:0:8"]]
- 00b9251c ["COPY", "register:4000:8", ["register:4098:8"]]
~~~


<a id="compare-b7cc5377e4e8b82f9d6db59803393007"></a>

### [`00b925a4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b92/00b925a4.md) → [`00b92640`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b92/00b92640.md) _ZN11flatbuffers7EnumDef11DeserializeERNS_6ParserEPKN10reflection4EnumE

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`00c5c800`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5c/00c5c800.md) · 呼出先 11件 [`00b93150`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b93/00b93150.md) [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md) [`00c58000`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58000.md)
- 新版 呼出元 1件 [`00c5c8d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5c8d0.md) · 呼出先 11件 [`00b931ec`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b93/00b931ec.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md) [`00c580d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c580d0.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, store_condition, unresolved_branch_alignment, unresolved_store_alignment

命令の説明率　旧版 89.02% / 新版 89.02%

優先判定に残った影響 `call_argument_candidate` 12件, `store_condition` 1件, `unresolved_branch_alignment` 7件, `unresolved_store_alignment` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "00b92658",
      "incomplete_value": true,
      "site": "00b92660",
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
    "new": null,
    "old": {
      "definition_site": "00b92654",
      "incomplete_value": true,
      "site": "00b92660",
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
    "ordinal": 2,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b92788",
      "incomplete_value": false,
      "site": "00b9278c",
      "value": [
        "leaf",
        "const:88:8"
      ]
    },
    "old": null,
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
      "unmatched:00b926b0",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b92758"
      ]
    ],
    [
      "unmatched:00b92788",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b92784"
      ]
    ],
    [
      "unmatched:00b927a0",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b92898"
      ]
    ]
  ],
  "added": [
    [
      "00b9274c",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b92758"
      ]
    ],
    [
      "00b92824",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b92784"
      ]
    ],
    [
      "00b9283c",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b92898"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b92660 ["INT_ADD", "register:40f0:8", ["const:b92660:8", "const:4:8"]]
- 00b92660 ["CALL", null, ["callee:00c5c6b0:8"]]
+ 00b926fc ["INT_ADD", "register:40f0:8", ["const:b926fc:8", "const:4:8"]]
+ 00b926fc ["CALL", null, ["callee:00c5c6b0:8"]]
- 00b926f0 ["INT_ADD", "register:40f0:8", ["const:b926f0:8", "const:4:8"]]
- 00b926f0 ["CALL", null, ["callee:00c57f60:8"]]
+ 00b9278c ["INT_ADD", "register:40f0:8", ["const:b9278c:8", "const:4:8"]]
+ 00b9278c ["CALL", null, ["callee:00c57f60:8"]]
- 00b92748 ["INT_ADD", "register:40f0:8", ["const:b92748:8", "const:4:8"]]
- 00b92748 ["CALL", null, ["callee:00c5c8f0:8"]]
+ 00b927e4 ["INT_ADD", "register:40f0:8", ["const:b927e4:8", "const:4:8"]]
+ 00b927e4 ["CALL", null, ["callee:00c5c8f0:8"]]
~~~


<a id="compare-157fef2026bf3daeb61d1077525b970c"></a>

### [`00b92cc4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b92/00b92cc4.md) → [`00b92d60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b92/00b92d60.md) _ZN11flatbuffers11SymbolTableINS_7EnumValEE3AddERKNSt6__ndk112basic_stringIcNS3_11char_traitsIcEENS3_9allocatorIcEEEEPS1_

根拠 `symbol` · `raw_instruction_pcode` · `bounded` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`00c5c080`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5c/00c5c080.md) · 呼出先 9件 [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md) [`00c58000`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58000.md) [`00c5b140`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5b140.md)
- 新版 呼出元 1件 [`00c5c150`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5c150.md) · 呼出先 9件 [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md) [`00c580d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c580d0.md) [`00c5b210`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b210.md)

変更の種類 branch_condition_or_target, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_return_alignment

命令の説明率　旧版 94.55% / 新版 94.55%

優先判定に残った影響 `unresolved_branch_alignment` 2件, `unresolved_return_alignment` 1件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00b92d28",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b92df0"
      ]
    ],
    [
      "unmatched:00b92d48",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b92ebc"
      ]
    ]
  ],
  "added": [
    [
      "00b92dc4",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b92df0"
      ]
    ],
    [
      "00b92de4",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b92ebc"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b92d1c ["INT_SRIGHT", "register:40d0:8", ["register:40b8:8", "const:3:8"]]
- 00b92d20 ["COPY", "tmp:0:8", ["const:1:8"]]
- 00b92d20 ["INT_CARRY", "register:105:1", ["register:40d0:8", "tmp:0:8"]]
- 00b92d20 ["INT_SCARRY", "register:106:1", ["register:40d0:8", "tmp:0:8"]]
- 00b92d20 ["INT_ADD", "tmp:1:8", ["register:40d0:8", "tmp:0:8"]]
- 00b92d24 ["INT_RIGHT", "register:4050:8", ["register:4048:8", "const:3d:8"]]
~~~


<a id="compare-5dfa69c32aa71408cccf4bbbfc2f85f0"></a>

### [`00b92e7c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b92/00b92e7c.md) → [`00b92f18`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b92/00b92f18.md) _ZNK11flatbuffers7EnumVal19SerializeAttributesEPNS_21FlatBufferBuilderImplILb0EEERKNS_6ParserE

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 1件 [`00b92e98`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b92/00b92e98.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00b92f34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b92/00b92f34.md)

変更の種類 cfg_edge_inventory, constant, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_store_alignment

命令の説明率　旧版 71.43% / 新版 71.43%

アドレスに依存する影響 `unresolved_store_alignment` 2件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00b92e7c",
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
      "00b92f18",
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
- 00b92e7c ["COPY", "tmp:0:8", ["register:40e8:8"]]
- 00b92e7c ["COPY", "tmp:1:8", ["register:40f0:8"]]
- 00b92e7c ["INT_ADD", "register:8:8", ["register:8:8", "const:fffffffffffffff0:8"]]
- 00b92e7c ["STORE", null, ["const:1b1:8", "register:8:8", "tmp:0:8"]]
- 00b92e80 ["COPY", "register:40e8:8", ["register:8:8"]]
- 00b92e88 ["INT_ADD", "register:40f0:8", ["const:b92e88:8", "const:4:8"]]
- 00b92e88 ["CALL", null, ["callee:00b92f34:8"]]
+ 00b92f24 ["INT_ADD", "register:40f0:8", ["const:b92f24:8", "const:4:8"]]
+ 00b92f24 ["CALL", null, ["callee:00b92f34:8"]]
~~~


<a id="compare-6032c02ece2b150c1ae3b060b58ffa3a"></a>

### [`00b92e98`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b92/00b92e98.md) → [`00b92f34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b92/00b92f34.md) FUN_00b92f34

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 8件 [`00b8ed70`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b8e/00b8ed70.md) [`00b8f0b8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b8f/00b8f0b8.md) [`00b8f534`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b8f/00b8f534.md) [`00b9022c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b90/00b9022c.md) [`00b9062c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b90/00b9062c.md) · 呼出先 10件 [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md) [`00c58000`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58000.md) [`00c5b140`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5b140.md)
- 新版 呼出元 8件 [`00b8ee0c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b8e/00b8ee0c.md) [`00b8f154`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b8f/00b8f154.md) [`00b8f5d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b8f/00b8f5d0.md) [`00b902c8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b90/00b902c8.md) [`00b906c8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b90/00b906c8.md) · 呼出先 10件 [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md) [`00c580d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c580d0.md) [`00c5b210`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b210.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_store_alignment

命令の説明率　旧版 91.28% / 新版 91.28%

優先判定に残った影響 `call_argument_candidate` 2件, `unresolved_branch_alignment` 1件, `unresolved_store_alignment` 16件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b92fa8",
      "incomplete_value": true,
      "site": "00b92fb4",
      "value": [
        "LOAD",
        "8",
        [
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
                "const:8:8"
              ]
            ]
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
      "definition_site": "00b92fb0",
      "incomplete_value": true,
      "site": "00b92fb4",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:40d8:8"
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
    "slot": 2
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00b92e9c",
      "WRITE",
      [
        "storage",
        "Stack[-0x60]",
        null,
        null
      ]
    ],
    [
      "unmatched:00b92ea0",
      "WRITE",
      [
        "storage",
        "Stack[-0x50]",
        null,
        null
      ]
    ],
    [
      "unmatched:00b92ea4",
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
      "00b92f38",
      "WRITE",
      [
        "storage",
        "Stack[-0x60]",
        null,
        null
      ]
    ],
    [
      "00b92f3c",
      "WRITE",
      [
        "storage",
        "Stack[-0x50]",
        null,
        null
      ]
    ],
    [
      "00b92f40",
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
- 00b92f18 ["INT_ADD", "register:40f0:8", ["const:b92f18:8", "const:4:8"]]
- 00b92f18 ["CALL", null, ["callee:00c5cb90:8"]]
+ 00b92fb4 ["INT_ADD", "register:40f0:8", ["const:b92fb4:8", "const:4:8"]]
+ 00b92fb4 ["CALL", null, ["callee:00c5cb90:8"]]
- 00b92fb4 ["CBRANCH", null, ["local:b12:8", "register:102:1"]]
+ 00b93050 ["CBRANCH", null, ["local:b9:8", "register:102:1"]]
- 00b92e98 ["INT_SUB", "register:8:8", ["register:8:8", "const:90:8"]]
~~~


<a id="compare-28fcdf87db48c1a601f481b6c4909cef"></a>

### [`00b93150`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b93/00b93150.md) → [`00b931ec`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b93/00b931ec.md) FUN_00b931ec

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 8件 [`00b90810`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b90/00b90810.md) [`00b90e24`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b90/00b90e24.md) [`00b90e2c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b90/00b90e2c.md) [`00b91c88`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b91/00b91c88.md) [`00b920dc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b92/00b920dc.md) · 呼出先 8件 [`006394bc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00639/006394bc.md) [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md) [`00c58000`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58000.md)
- 新版 呼出元 8件 [`00b908ac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b90/00b908ac.md) [`00b90ec0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b90/00b90ec0.md) [`00b90ec8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b90/00b90ec8.md) [`00b91d24`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b91/00b91d24.md) [`00b92178`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b92/00b92178.md) · 呼出先 8件 [`006394fc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00639/006394fc.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md) [`00c580d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c580d0.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 99.58% / 新版 99.58%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b932a4",
      "incomplete_value": false,
      "site": "00b932a8",
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
            "const:bb:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b93208",
      "incomplete_value": false,
      "site": "00b9320c",
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
            "const:7b:8"
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
      "00b932a4",
      "PARAM",
      [
        "storage",
        "002b807b",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "00b932a4",
      "PARAM",
      [
        "storage",
        "002b80bb",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 00b9320c ["INT_ADD", "register:40f0:8", ["const:b9320c:8", "const:4:8"]]
- 00b9320c ["CALL", null, ["callee:00c5b690:8"]]
+ 00b932a8 ["INT_ADD", "register:40f0:8", ["const:b932a8:8", "const:4:8"]]
+ 00b932a8 ["CALL", null, ["callee:00c5b690:8"]]
- 00b931e8 ["INT_ADD", "register:40f0:8", ["const:b931e8:8", "const:4:8"]]
- 00b931e8 ["CALL", null, ["callee:00c57f60:8"]]
+ 00b93284 ["INT_ADD", "register:40f0:8", ["const:b93284:8", "const:4:8"]]
+ 00b93284 ["CALL", null, ["callee:00c57f60:8"]]
- 00b93208 ["COPY", "tmp:0:8", ["const:7b:8"]]
- 00b93208 ["INT_CARRY", "register:105:1", ["register:4008:8", "tmp:0:8"]]
- 00b93208 ["INT_SCARRY", "register:106:1", ["register:4008:8", "tmp:0:8"]]
- 00b93208 ["INT_ADD", "tmp:1:8", ["register:4008:8", "tmp:0:8"]]
+ 00b932a4 ["COPY", "tmp:0:8", ["const:bb:8"]]
+ 00b932a4 ["INT_CARRY", "register:105:1", ["register:4008:8", "tmp:0:8"]]
+ 00b932a4 ["INT_SCARRY", "register:106:1", ["register:4008:8", "tmp:0:8"]]
+ 00b932a4 ["INT_ADD", "tmp:1:8", ["register:4008:8", "tmp:0:8"]]
~~~


<a id="compare-bc8d41aa5dd14f3979322cd6598890ab"></a>

### [`00b93838`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b93/00b93838.md) → [`00b938d4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b93/00b938d4.md) _ZN11flatbuffers6Parser11DeserializeEPKhm

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 5件 [`00b93948`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b93/00b93948.md) [`00b939e4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b93/00b939e4.md) [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md) [`00c5c4a0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5c/00c5c4a0.md) [`00c5d130`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5d/00c5d130.md)
- 新版 呼出元 0件  · 呼出先 5件 [`00b939e4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b93/00b939e4.md) [`00b93a80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b93/00b93a80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md) [`00c5c570`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5c570.md) [`00c5d200`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5d200.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies, store_value

命令の説明率　旧版 97.06% / 新版 97.06%

優先判定に残った影響 `call_argument_candidate` 2件

アドレスに依存する影響 `store_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00b938f8",
      "incomplete_value": true,
      "site": "00b93928",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:db0:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b9385c",
      "incomplete_value": true,
      "site": "00b9388c",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:d70:8"
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
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b9391c",
      "incomplete_value": false,
      "site": "00b93940",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:2a4000:8"
          ],
          [
            "leaf",
            "const:eaf:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b93880",
      "incomplete_value": false,
      "site": "00b938a4",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:2a4000:8"
          ],
          [
            "leaf",
            "const:f0b:8"
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
      "definition_site": "00b93950",
      "incomplete_value": false,
      "site": "00b93958",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:2a4000:8"
          ],
          [
            "leaf",
            "const:eaf:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b938b4",
      "incomplete_value": false,
      "site": "00b938bc",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:2a4000:8"
          ],
          [
            "leaf",
            "const:f0b:8"
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
      "00b938f8",
      "READ",
      [
        "storage",
        "002c3d70",
        null,
        "undefined8"
      ]
    ],
    [
      "00b9391c",
      "PARAM",
      [
        "storage",
        "002a4f0b",
        null,
        null
      ]
    ],
    [
      "00b93950",
      "PARAM",
      [
        "storage",
        "002a4f0b",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "00b938f8",
      "READ",
      [
        "storage",
        "002c3db0",
        null,
        "undefined8"
      ]
    ],
    [
      "00b9391c",
      "PARAM",
      [
        "storage",
        "002a4eaf",
        null,
        null
      ]
    ],
    [
      "00b93950",
      "PARAM",
      [
        "storage",
        "002a4eaf",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 00b938a4 ["INT_ADD", "register:40f0:8", ["const:b938a4:8", "const:4:8"]]
- 00b938a4 ["CALL", null, ["callee:00c5d200:8"]]
+ 00b93940 ["INT_ADD", "register:40f0:8", ["const:b93940:8", "const:4:8"]]
+ 00b93940 ["CALL", null, ["callee:00c5d200:8"]]
- 00b938bc ["INT_ADD", "register:40f0:8", ["const:b938bc:8", "const:4:8"]]
- 00b938bc ["CALL", null, ["callee:00c5d200:8"]]
+ 00b93958 ["INT_ADD", "register:40f0:8", ["const:b93958:8", "const:4:8"]]
+ 00b93958 ["CALL", null, ["callee:00c5d200:8"]]
- 00b9385c ["INT_ADD", "tmp:0:8", ["register:4048:8", "const:d70:8"]]
- 00b9385c ["LOAD", "register:5000:8", ["const:1b1:8", "tmp:0:8"]]
- 00b9385c ["COPY", "register:5008:8", ["const:0:8"]]
- 00b9385c ["COPY", "register:5010:8", ["const:0:8"]]
+ 00b938f8 ["INT_ADD", "tmp:0:8", ["register:4048:8", "const:db0:8"]]
+ 00b938f8 ["LOAD", "register:5000:8", ["const:1b1:8", "tmp:0:8"]]
+ 00b938f8 ["COPY", "register:5008:8", ["const:0:8"]]
+ 00b938f8 ["COPY", "register:5010:8", ["const:0:8"]]
~~~


<a id="compare-ed3d130bd5efe5aced0d4ccc59c8596e"></a>

### [`00b93948`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b93/00b93948.md) → [`00b939e4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b93/00b939e4.md) _ZN10reflection30VerifySizePrefixedSchemaBufferERN11flatbuffers16VerifierTemplateILb0EEE

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`00b93838`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b93/00b93838.md) · 呼出先 2件 [`00c5c970`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5c/00c5c970.md) [`00c5d130`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5d/00c5d130.md)
- 新版 呼出元 1件 [`00b938d4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b93/00b938d4.md) · 呼出先 2件 [`00c5ca40`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5ca40.md) [`00c5d200`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5d200.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 97.44% / 新版 97.44%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b93a28",
      "incomplete_value": false,
      "site": "00b93a30",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:2a4000:8"
          ],
          [
            "leaf",
            "const:eaf:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b9398c",
      "incomplete_value": false,
      "site": "00b93994",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:2a4000:8"
          ],
          [
            "leaf",
            "const:f0b:8"
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
      "00b93a28",
      "PARAM",
      [
        "storage",
        "002a4f0b",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "00b93a28",
      "PARAM",
      [
        "storage",
        "002a4eaf",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 00b93994 ["INT_ADD", "register:40f0:8", ["const:b93994:8", "const:4:8"]]
- 00b93994 ["CALL", null, ["callee:00c5d200:8"]]
+ 00b93a30 ["INT_ADD", "register:40f0:8", ["const:b93a30:8", "const:4:8"]]
+ 00b93a30 ["CALL", null, ["callee:00c5d200:8"]]
- 00b9398c ["COPY", "tmp:0:8", ["const:f0b:8"]]
- 00b9398c ["INT_CARRY", "register:105:1", ["register:4008:8", "tmp:0:8"]]
- 00b9398c ["INT_SCARRY", "register:106:1", ["register:4008:8", "tmp:0:8"]]
- 00b9398c ["INT_ADD", "tmp:1:8", ["register:4008:8", "tmp:0:8"]]
+ 00b93a28 ["COPY", "tmp:0:8", ["const:eaf:8"]]
+ 00b93a28 ["INT_CARRY", "register:105:1", ["register:4008:8", "tmp:0:8"]]
+ 00b93a28 ["INT_SCARRY", "register:106:1", ["register:4008:8", "tmp:0:8"]]
+ 00b93a28 ["INT_ADD", "tmp:1:8", ["register:4008:8", "tmp:0:8"]]
~~~


<a id="compare-8df44c8f5ad98f1df36ffb04b8a7e120"></a>

### [`00b939e4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b93/00b939e4.md) → [`00b93a80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b93/00b93a80.md) _ZN10reflection18VerifySchemaBufferERN11flatbuffers16VerifierTemplateILb0EEE

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`00b93838`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b93/00b93838.md) · 呼出先 2件 [`00c5c970`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5c/00c5c970.md) [`00c5d130`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5d/00c5d130.md)
- 新版 呼出元 1件 [`00b938d4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b93/00b938d4.md) · 呼出先 2件 [`00c5ca40`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5ca40.md) [`00c5d200`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5d200.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 96.88% / 新版 96.88%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b93aa8",
      "incomplete_value": false,
      "site": "00b93ab4",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:2a4000:8"
          ],
          [
            "leaf",
            "const:eaf:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b93a0c",
      "incomplete_value": false,
      "site": "00b93a18",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:2a4000:8"
          ],
          [
            "leaf",
            "const:f0b:8"
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
      "00b93aa8",
      "PARAM",
      [
        "storage",
        "002a4f0b",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "00b93aa8",
      "PARAM",
      [
        "storage",
        "002a4eaf",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 00b93a18 ["INT_ADD", "register:40f0:8", ["const:b93a18:8", "const:4:8"]]
- 00b93a18 ["CALL", null, ["callee:00c5d200:8"]]
+ 00b93ab4 ["INT_ADD", "register:40f0:8", ["const:b93ab4:8", "const:4:8"]]
+ 00b93ab4 ["CALL", null, ["callee:00c5d200:8"]]
- 00b93a0c ["COPY", "tmp:0:8", ["const:f0b:8"]]
- 00b93a0c ["INT_CARRY", "register:105:1", ["register:4008:8", "tmp:0:8"]]
- 00b93a0c ["INT_SCARRY", "register:106:1", ["register:4008:8", "tmp:0:8"]]
- 00b93a0c ["INT_ADD", "tmp:1:8", ["register:4008:8", "tmp:0:8"]]
+ 00b93aa8 ["COPY", "tmp:0:8", ["const:eaf:8"]]
+ 00b93aa8 ["INT_CARRY", "register:105:1", ["register:4008:8", "tmp:0:8"]]
+ 00b93aa8 ["INT_SCARRY", "register:106:1", ["register:4008:8", "tmp:0:8"]]
+ 00b93aa8 ["INT_ADD", "tmp:1:8", ["register:4008:8", "tmp:0:8"]]
~~~


<a id="compare-6efa4fac9121cb5a7666949e73a41955"></a>

### [`00b950b0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b95/00b950b0.md) → [`00b9514c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b95/00b9514c.md) _ZN11flatbuffers6Parser9ConformToERKS0_

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 18件 [`00b5abb4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b5a/00b5abb4.md) [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md) [`00c57f80`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57f80.md)
- 新版 呼出元 0件  · 呼出先 18件 [`00b5ac50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b5a/00b5ac50.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md) [`00c58050`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58050.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, constant, control_flow, local_def_use, memory_read, memory_read_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_store_alignment

命令の説明率　旧版 93.58% / 新版 93.58%

優先判定に残った影響 `call_argument_candidate` 12件, `unresolved_branch_alignment` 4件, `unresolved_store_alignment` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b954fc",
      "incomplete_value": false,
      "site": "00b95500",
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
            "const:38f:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b95460",
      "incomplete_value": false,
      "site": "00b95464",
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
            "const:3eb:8"
          ]
        ]
      ]
    },
    "ordinal": 13,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b95558",
      "incomplete_value": false,
      "site": "00b9555c",
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
            "const:6c9:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b954bc",
      "incomplete_value": false,
      "site": "00b954c0",
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
            "const:698:8"
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
      "definition_site": "00b9556c",
      "incomplete_value": false,
      "site": "00b95570",
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
            "const:7b5:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b954d0",
      "incomplete_value": false,
      "site": "00b954d4",
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
            "const:786:8"
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
      "00b95250",
      "PARAM",
      [
        "storage",
        "002a63eb",
        null,
        null
      ]
    ],
    [
      "00b95378",
      "PARAM",
      [
        "storage",
        "002a2bfb",
        null,
        "string"
      ]
    ],
    [
      "00b953e0",
      "PARAM",
      [
        "storage",
        "002a6131",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "00b95250",
      "PARAM",
      [
        "storage",
        "002a638f",
        null,
        null
      ]
    ],
    [
      "00b95378",
      "PARAM",
      [
        "storage",
        "002a2bae",
        null,
        "string"
      ]
    ],
    [
      "00b953e0",
      "PARAM",
      [
        "storage",
        "002a60d5",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b95464 ["INT_ADD", "register:40f0:8", ["const:b95464:8", "const:4:8"]]
- 00b95464 ["CALL", null, ["callee:00b5ac50:8"]]
+ 00b95500 ["INT_ADD", "register:40f0:8", ["const:b95500:8", "const:4:8"]]
+ 00b95500 ["CALL", null, ["callee:00b5ac50:8"]]
- 00b954c0 ["INT_ADD", "register:40f0:8", ["const:b954c0:8", "const:4:8"]]
- 00b954c0 ["CALL", null, ["callee:00c58180:8"]]
+ 00b9555c ["INT_ADD", "register:40f0:8", ["const:b9555c:8", "const:4:8"]]
+ 00b9555c ["CALL", null, ["callee:00c58180:8"]]
- 00b954d4 ["INT_ADD", "register:40f0:8", ["const:b954d4:8", "const:4:8"]]
- 00b954d4 ["CALL", null, ["callee:00c58050:8"]]
+ 00b95570 ["INT_ADD", "register:40f0:8", ["const:b95570:8", "const:4:8"]]
+ 00b95570 ["CALL", null, ["callee:00c58050:8"]]
~~~


<a id="compare-0200dda118f54833b033e5e8c3aadd02"></a>

### [`00b959b0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b95/00b959b0.md) → [`00b95a4c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b95/00b95a4c.md) _ZN11flatbuffers11EqualByNameERKNS_4TypeES2_

根拠 `symbol` · `raw_instruction_pcode` · `bounded` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`00c5bfd0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5bfd0.md) · 呼出先 1件 [`00c58050`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58050.md)
- 新版 呼出元 1件 [`00c5c0a0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5c0a0.md) · 呼出先 1件 [`00c58120`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58120.md)

変更の種類 branch_condition_or_target, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, operands_and_dependencies, operation_sequence, unresolved_branch_alignment

命令の説明率　旧版 97.06% / 新版 97.06%

優先判定に残った影響 `unresolved_branch_alignment` 2件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00b95acc",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b95bb8"
      ]
    ]
  ],
  "added": [
    [
      "00b95b68",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b95bb8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b959f0 ["CBRANCH", null, ["local:b15:8", "register:101:1"]]
+ 00b95a8c ["CBRANCH", null, ["local:b14:8", "register:101:1"]]
- 00b95a4c ["INT_EQUAL", "tmp:0:1", ["register:4010:8", "const:0:8"]]
- 00b95a4c ["CBRANCH", null, ["local:b15:8", "tmp:0:1"]]
+ 00b95ae8 ["INT_EQUAL", "tmp:0:1", ["register:4010:8", "const:0:8"]]
+ 00b95ae8 ["CBRANCH", null, ["local:b14:8", "tmp:0:1"]]
- 00b95a74 ["BRANCH", null, ["local:b15:8"]]
+ 00b95b10 ["BRANCH", null, ["local:b14:8"]]
~~~


<a id="compare-4ba015f6b13a827b9d14c108a6e1deb9"></a>

### [`00b95c14`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b95/00b95c14.md) → [`00b95cb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b95/00b95cb0.md) _ZN11flatbuffers19StringToIntegerImplImEEbPT_PKcib

根拠 `symbol` · `raw_instruction_pcode` · `bounded` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`00c5c1c0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5c/00c5c1c0.md) · 呼出先 3件 [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md) [`00c580c0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c580c0.md) [`00c5d160`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5d/00c5d160.md)
- 新版 呼出元 1件 [`00c5c290`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5c290.md) · 呼出先 3件 [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md) [`00c58190`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58190.md) [`00c5d230`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5d230.md)

変更の種類 branch_condition_or_target, call, call_count, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 91.95% / 新版 91.95%

優先判定に残った影響 `unresolved_branch_alignment` 2件, `unresolved_call_alignment` 1件, `unresolved_store_alignment` 1件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00b95c44",
      "WRITE",
      [
        "storage",
        "Stack[-0x48]",
        null,
        null
      ]
    ],
    [
      "00b95cfc",
      "READ",
      [
        "storage",
        "00c9b830",
        null,
        "pointer"
      ]
    ],
    [
      "00b95d54",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "unmatched:00b95cc4"
      ]
    ]
  ],
  "added": [
    [
      "00b95ce0",
      "WRITE",
      [
        "storage",
        "Stack[-0x48]",
        null,
        null
      ]
    ],
    [
      "00b95cf0",
      "UNCONDITIONAL_CALL",
      [
        "mapped_function",
        "00c58190"
      ]
    ],
    [
      "00b95cfc",
      "READ",
      [
        "storage",
        "00c9b900",
        null,
        "pointer"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b95c44 ["INT_ADD", "tmp:0:8", ["register:8:8", "const:8:8"]]
- 00b95c44 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4040:8"]]
- 00b95c48 ["INT_NOTEQUAL", "tmp:0:1", ["register:100:1", "register:103:1"]]
- 00b95c48 ["BOOL_OR", "tmp:1:1", ["register:101:1", "tmp:0:1"]]
- 00b95c48 ["CBRANCH", null, ["local:b5:8", "tmp:1:1"]]
+ 00b95ce4 ["INT_NOTEQUAL", "tmp:0:1", ["register:100:1", "register:103:1"]]
+ 00b95ce4 ["BOOL_OR", "tmp:1:1", ["register:101:1", "tmp:0:1"]]
+ 00b95ce4 ["CBRANCH", null, ["local:b6:8", "tmp:1:1"]]
- 00b95c54 ["INT_ADD", "register:40f0:8", ["const:b95c54:8", "const:4:8"]]
- 00b95c54 ["CALL", null, ["callee:00c58190:8"]]
+ 00b95dbc ["INT_ADD", "register:40f0:8", ["const:b95dbc:8", "const:4:8"]]
+ 00b95dbc ["CALL", null, ["callee:00c58190:8"]]
~~~


<a id="compare-08a27cf419eaa0343150d488321acd3b"></a>

### [`00b95d70`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b95/00b95d70.md) → [`00b95e0c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b95/00b95e0c.md) _ZN11flatbuffers8HashFnv1ItEET_PKc

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 0件 
- 新版 呼出元 0件  · 呼出先 0件 

変更の種類 branch_condition_or_target, cfg_edge_inventory, control_flow, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00b95d7c ["INT_EQUAL", "tmp:0:1", ["register:4050:4", "const:0:4"]]
- 00b95d7c ["CBRANCH", null, ["local:b4:8", "tmp:0:1"]]
+ 00b95e18 ["INT_EQUAL", "tmp:0:1", ["register:4050:4", "const:0:4"]]
+ 00b95e18 ["CBRANCH", null, ["local:b3:8", "tmp:0:1"]]
~~~


