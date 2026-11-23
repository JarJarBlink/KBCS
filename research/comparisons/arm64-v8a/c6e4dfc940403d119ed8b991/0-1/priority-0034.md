# v16.0.1 → v16.0.2 · 最優先の変更候補 (34)

[一覧の目次](README.md)

<a id="compare-4a0d3b47ada481365761def03985ff35"></a>

### [`006e0500`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006e0/006e0500.md) → [`006e0558`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006e0/006e0558.md) FUN_006e0558

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `changed`

- 旧版 呼出元 1件 [`0085c14c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0085c/0085c14c.md) · 呼出先 3件 [`00470840`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00470/00470840.md) [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md) [`00c58000`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58000.md)
- 新版 呼出元 1件 [`0085c1a4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0085c/0085c1a4.md) · 呼出先 3件 [`00470880`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00470/00470880.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c580d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c580d0.md)

変更の種類 comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_store_alignment

命令の説明率　旧版 84.62% / 新版 84.62%

アドレスに依存する影響 `unresolved_branch_alignment` 1件, `unresolved_store_alignment` 2件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:006e0508",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "unmatched:006e0524",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "006e05a8"
      ]
    ]
  ],
  "added": [
    [
      "006e0560",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "006e057c",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "006e05a8"
      ]
    ]
  ]
}
~~~


~~~diff
- 006e0508 ["COPY", "tmp:0:8", ["register:40a0:8"]]
- 006e0508 ["COPY", "tmp:1:8", ["register:4098:8"]]
- 006e0508 ["INT_ADD", "tmp:2:8", ["register:8:8", "const:20:8"]]
- 006e0508 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
- 006e050c ["COPY", "register:40e8:8", ["register:8:8"]]
- 006e0520 ["COPY", "tmp:0:8", ["register:40a0:8"]]
- 006e0520 ["INT_LESSEQUAL", "register:105:1", ["tmp:0:8", "register:4040:8"]]
- 006e0520 ["INT_SBORROW", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 006e0520 ["INT_SUB", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-57466561b877fc665def7beb7ca2795b"></a>

### [`006e0610`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006e0/006e0610.md) → [`006e0668`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006e0/006e0668.md) FUN_006e0668

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`006e0a80`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006e0/006e0a80.md) · 呼出先 1件 [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md)
- 新版 呼出元 1件 [`006e0ad8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006e0/006e0ad8.md) · 呼出先 1件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)

変更の種類 branch_condition_or_target, call, call_argument_candidate, call_count, comparison, comparison_count, constant, control_flow, control_flow_count, memory_read, memory_read_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_call_alignment

命令の説明率　旧版 33.80% / 新版 33.80%

優先判定に残った影響 `unresolved_branch_alignment` 7件, `unresolved_call_alignment` 8件

アドレスに依存する影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "006e0758",
      "incomplete_value": true,
      "site": "006e075c",
      "value": [
        "LOAD",
        "8",
        [
          [
            "leaf",
            "const:1b1:8"
          ],
          [
            "INT_ADD",
            "8",
            [
              [
                "leaf",
                "const:ca7000:8"
              ],
              [
                "leaf",
                "const:9e0:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "006e0700",
      "incomplete_value": true,
      "site": "006e0704",
      "value": [
        "LOAD",
        "8",
        [
          [
            "leaf",
            "const:1b1:8"
          ],
          [
            "INT_ADD",
            "8",
            [
              [
                "leaf",
                "const:ca7000:8"
              ],
              [
                "leaf",
                "const:8e0:8"
              ]
            ]
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
      "006e0674",
      "READ",
      [
        "storage",
        "00ca79a8",
        null,
        "undefined1"
      ]
    ],
    [
      "006e0678",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "unmatched:006e0630"
      ]
    ],
    [
      "unmatched:006e0628",
      "READ",
      [
        "storage",
        "00ca79b8",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "006e0674",
      "READ",
      [
        "storage",
        "00ca7aa8",
        null,
        "undefined1"
      ]
    ],
    [
      "006e0678",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "006e0688"
      ]
    ],
    [
      "006e0680",
      "READ",
      [
        "storage",
        "00ca7ab8",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 006e0704 ["INT_ADD", "register:40f0:8", ["const:6e0704:8", "const:4:8"]]
- 006e0704 ["CALL", null, ["callee:00c57f80:8"]]
+ 006e075c ["INT_ADD", "register:40f0:8", ["const:6e075c:8", "const:4:8"]]
+ 006e075c ["CALL", null, ["callee:00c57f80:8"]]
+ 006e0704 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:a18:8"]]
+ 006e0704 ["LOAD", "tmp:1:1", ["const:1b1:8", "tmp:0:8"]]
+ 006e0704 ["INT_ZEXT", "register:4040:8", ["tmp:1:1"]]
- 006e061c ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:9a8:8"]]
- 006e061c ["LOAD", "tmp:1:1", ["const:1b1:8", "tmp:0:8"]]
- 006e061c ["INT_ZEXT", "register:4040:8", ["tmp:1:1"]]
+ 006e0674 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:aa8:8"]]
+ 006e0674 ["LOAD", "tmp:1:1", ["const:1b1:8", "tmp:0:8"]]
+ 006e0674 ["INT_ZEXT", "register:4040:8", ["tmp:1:1"]]
~~~


<a id="compare-25184b089500e710b2b9d854449ce782"></a>

### [`006e072c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006e0/006e072c.md) → [`006e0784`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006e0/006e0784.md) FUN_006e0784

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`006e0a80`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006e0/006e0a80.md) · 呼出先 1件 [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md)
- 新版 呼出元 1件 [`006e0ad8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006e0/006e0ad8.md) · 呼出先 1件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)

変更の種類 branch_condition_or_target, call, call_argument_candidate, call_count, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_call_alignment

命令の説明率　旧版 23.94% / 新版 23.94%

優先判定に残った影響 `unresolved_branch_alignment` 8件, `unresolved_call_alignment` 9件

アドレスに依存する影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "006e0874",
      "incomplete_value": true,
      "site": "006e0878",
      "value": [
        "LOAD",
        "8",
        [
          [
            "leaf",
            "const:1b1:8"
          ],
          [
            "INT_ADD",
            "8",
            [
              [
                "leaf",
                "const:ca7000:8"
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
    "old": {
      "definition_site": "006e081c",
      "incomplete_value": true,
      "site": "006e0820",
      "value": [
        "LOAD",
        "8",
        [
          [
            "leaf",
            "const:1b1:8"
          ],
          [
            "INT_ADD",
            "8",
            [
              [
                "leaf",
                "const:ca7000:8"
              ],
              [
                "leaf",
                "const:9e8:8"
              ]
            ]
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
      "006e0790",
      "READ",
      [
        "storage",
        "00ca7ab0",
        null,
        "undefined1"
      ]
    ],
    [
      "006e0794",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "unmatched:006e074c"
      ]
    ],
    [
      "unmatched:006e0744",
      "READ",
      [
        "storage",
        "00ca7ac0",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "006e0790",
      "READ",
      [
        "storage",
        "00ca7bb0",
        null,
        "undefined1"
      ]
    ],
    [
      "006e0794",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "006e07a4"
      ]
    ],
    [
      "006e079c",
      "READ",
      [
        "storage",
        "00ca7bc0",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 006e07e0 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:a08:8"]]
- 006e07e0 ["LOAD", "tmp:1:1", ["const:1b1:8", "tmp:0:8"]]
- 006e07e0 ["INT_ZEXT", "register:4040:8", ["tmp:1:1"]]
+ 006e0820 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:b20:8"]]
+ 006e0820 ["LOAD", "tmp:1:1", ["const:1b1:8", "tmp:0:8"]]
+ 006e0820 ["INT_ZEXT", "register:4040:8", ["tmp:1:1"]]
- 006e0820 ["INT_ADD", "register:40f0:8", ["const:6e0820:8", "const:4:8"]]
- 006e0820 ["CALL", null, ["callee:00c57f80:8"]]
+ 006e0878 ["INT_ADD", "register:40f0:8", ["const:6e0878:8", "const:4:8"]]
+ 006e0878 ["CALL", null, ["callee:00c57f80:8"]]
- 006e0738 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:ab0:8"]]
- 006e0738 ["LOAD", "tmp:1:1", ["const:1b1:8", "tmp:0:8"]]
- 006e0738 ["INT_ZEXT", "register:4040:8", ["tmp:1:1"]]
+ 006e0790 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:bb0:8"]]
+ 006e0790 ["LOAD", "tmp:1:1", ["const:1b1:8", "tmp:0:8"]]
+ 006e0790 ["INT_ZEXT", "register:4040:8", ["tmp:1:1"]]
~~~


<a id="compare-e54439115f197666f8313ec4a4f90773"></a>

### [`006e15e0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006e1/006e15e0.md) → [`006e1638`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006e1/006e1638.md) FUN_006e1638

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`006ea588`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006ea/006ea588.md) · 呼出先 24件 [`0043bb20`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043bb20.md) [`00440f70`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00440/00440f70.md) [`00442930`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00442/00442930.md) [`0046e770`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0046e/0046e770.md) [`0046e780`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0046e/0046e780.md)
- 新版 呼出元 1件 [`006ea5e0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006ea/006ea5e0.md) · 呼出先 24件 [`0043bb60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bb60.md) [`00440fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00440/00440fb0.md) [`00442970`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00442/00442970.md) [`0046e7b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046e/0046e7b0.md) [`0046e7c0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046e/0046e7c0.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies, store_destination, store_value

命令の説明率　旧版 92.11% / 新版 92.11%

優先判定に残った影響 `call_argument_candidate` 7件, `store_destination` 7件, `store_value` 4件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "006e1768",
      "incomplete_value": true,
      "site": "006e1768",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:427:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "006e1710",
      "incomplete_value": true,
      "site": "006e1710",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:3e7:8"
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
      "definition_site": "006e1874",
      "incomplete_value": true,
      "site": "006e1874",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:fb4:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "006e181c",
      "incomplete_value": true,
      "site": "006e181c",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:f85:8"
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
      "definition_site": "006e1afc",
      "incomplete_value": false,
      "site": "006e1afc",
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
      "definition_site": "006e1aa4",
      "incomplete_value": false,
      "site": "006e1aa4",
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
    "ordinal": 29,
    "slot": 1
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "006e1668",
      "DATA",
      [
        "storage",
        "00434658",
        "fde_00434658",
        "dword"
      ]
    ],
    [
      "006e16b4",
      "PARAM",
      [
        "storage",
        "002a01bd",
        null,
        "string"
      ]
    ],
    [
      "006e16ec",
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
      "006e1668",
      "DATA",
      [
        "storage",
        "00434658",
        null,
        "byte[35]"
      ]
    ],
    [
      "006e16b4",
      "PARAM",
      [
        "storage",
        "002a0170",
        null,
        "string"
      ]
    ],
    [
      "006e16ec",
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
- 006e1608 ["INT_ADD", "register:40f0:8", ["const:6e1608:8", "const:4:8"]]
- 006e1608 ["CALL", null, ["callee:00851550:8"]]
+ 006e1660 ["INT_ADD", "register:40f0:8", ["const:6e1660:8", "const:4:8"]]
+ 006e1660 ["CALL", null, ["callee:00851550:8"]]
- 006e1660 ["INT_ADD", "register:40f0:8", ["const:6e1660:8", "const:4:8"]]
- 006e1660 ["CALL", null, ["callee:00442970:8"]]
+ 006e16b8 ["INT_ADD", "register:40f0:8", ["const:6e16b8:8", "const:4:8"]]
+ 006e16b8 ["CALL", null, ["callee:00442970:8"]]
- 006e1764 ["INT_ADD", "register:40f0:8", ["const:6e1764:8", "const:4:8"]]
- 006e1764 ["CALL", null, ["callee:0047e64c:8"]]
+ 006e17bc ["INT_ADD", "register:40f0:8", ["const:6e17bc:8", "const:4:8"]]
+ 006e17bc ["CALL", null, ["callee:0047e64c:8"]]
~~~


<a id="compare-dcc6c4cec691412d46fe683ffc261b74"></a>

### [`006e1de0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006e1/006e1de0.md) → [`006e1e38`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006e1/006e1e38.md) FUN_006e1e38

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`006ea588`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006ea/006ea588.md) · 呼出先 5件 [`0046c9c4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0046c/0046c9c4.md) [`0046d7b0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0046d/0046d7b0.md) [`0046ee58`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0046e/0046ee58.md) [`004700e0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00470/004700e0.md) [`008514f8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00851/008514f8.md)
- 新版 呼出元 1件 [`006ea5e0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006ea/006ea5e0.md) · 呼出先 5件 [`0046ca04`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046c/0046ca04.md) [`0046d7f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046d/0046d7f0.md) [`0046ee98`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046e/0046ee98.md) [`00470120`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00470/00470120.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)

変更の種類 call, call_argument_candidate, call_count, call_target, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 80.00% / 新版 80.00%

優先判定に残った影響 `call_argument_candidate` 2件, `call_target` 1件, `unresolved_branch_alignment` 1件, `unresolved_call_alignment` 1件, `unresolved_store_alignment` 5件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "call_target",
    "new": {
      "definition_site": null,
      "incomplete_value": false,
      "site": "006e1e54",
      "value": [
        "leaf",
        "callee:0046ca04:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": false,
      "site": "006e1e14",
      "value": [
        "leaf",
        "callee:0046d7f0:8"
      ]
    },
    "ordinal": 2,
    "slot": 0
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "006e1e74",
      "incomplete_value": false,
      "site": "006e1e78",
      "value": [
        "leaf",
        "const:4e20:8"
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
      "definition_site": "006e1ea4",
      "incomplete_value": true,
      "site": "006e1eb8",
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
            "const:2a8:8"
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
      "unmatched:006e1de4",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "unmatched:006e1de8",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "unmatched:006e1dfc",
      "UNCONDITIONAL_CALL",
      [
        "mapped_function",
        "0046ca04"
      ]
    ]
  ],
  "added": [
    [
      "006e1e3c",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "006e1e40",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "006e1e54",
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
- 006e1e14 ["INT_ADD", "register:40f0:8", ["const:6e1e14:8", "const:4:8"]]
- 006e1e14 ["CALL", null, ["callee:0046d7f0:8"]]
+ 006e1e54 ["INT_ADD", "register:40f0:8", ["const:6e1e54:8", "const:4:8"]]
+ 006e1e54 ["CALL", null, ["callee:0046ca04:8"]]
- 006e1e20 ["INT_ADD", "register:40f0:8", ["const:6e1e20:8", "const:4:8"]]
- 006e1e20 ["CALL", null, ["callee:0046d7f0:8"]]
+ 006e1e78 ["INT_ADD", "register:40f0:8", ["const:6e1e78:8", "const:4:8"]]
+ 006e1e78 ["CALL", null, ["callee:0046d7f0:8"]]
- 006e1e54 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:8:8"]]
- 006e1e54 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:5000:8"]]
~~~


<a id="compare-c62f1de66e5c74ba0e01ce382d25fdea"></a>

### [`006e28dc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006e2/006e28dc.md) → [`006e2934`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006e2/006e2934.md) FUN_006e2934

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `equal` · `cfg_change`

- 旧版 呼出元 1件 [`006f86c8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006f8/006f86c8.md) · 呼出先 7件 [`00467860`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00467/00467860.md) [`00467b2c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00467/00467b2c.md) [`0046bd54`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0046b/0046bd54.md) [`0046e7a0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0046e/0046e7a0.md) [`004700b4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00470/004700b4.md)
- 新版 呼出元 1件 [`006f8720`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006f8/006f8720.md) · 呼出先 7件 [`004678a0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00467/004678a0.md) [`00467b6c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00467/00467b6c.md) [`0046bd94`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046b/0046bd94.md) [`0046e7e0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046e/0046e7e0.md) [`004700f4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00470/004700f4.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, constant, control_flow, local_def_use, memory_read, memory_read_count, operands_and_dependencies, operation_sequence

命令の説明率　旧版 86.96% / 新版 86.96%

優先判定に残った影響 `call_argument_candidate` 8件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "006e2900",
      "incomplete_value": true,
      "site": "006e2908",
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
            "const:78:8"
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
      "definition_site": "006e2904",
      "incomplete_value": false,
      "site": "006e2908",
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
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "006e294c",
      "incomplete_value": true,
      "site": "006e295c",
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
            "const:78:8"
          ]
        ]
      ]
    },
    "ordinal": 2,
    "slot": 1
  }
]
~~~


~~~diff
- 006e2908 ["INT_ADD", "register:40f0:8", ["const:6e2908:8", "const:4:8"]]
- 006e2908 ["CALL", null, ["callee:00470120:8"]]
+ 006e2960 ["INT_ADD", "register:40f0:8", ["const:6e2960:8", "const:4:8"]]
+ 006e2960 ["CALL", null, ["callee:00470120:8"]]
- 006e295c ["INT_ADD", "register:40f0:8", ["const:6e295c:8", "const:4:8"]]
- 006e295c ["CALL", null, ["callee:004700f4:8"]]
+ 006e29b4 ["INT_ADD", "register:40f0:8", ["const:6e29b4:8", "const:4:8"]]
+ 006e29b4 ["CALL", null, ["callee:004700f4:8"]]
- 006e29c4 ["INT_ADD", "register:40f0:8", ["const:6e29c4:8", "const:4:8"]]
- 006e29c4 ["CALL", null, ["callee:0046bd94:8"]]
+ 006e2a1c ["INT_ADD", "register:40f0:8", ["const:6e2a1c:8", "const:4:8"]]
+ 006e2a1c ["CALL", null, ["callee:0046bd94:8"]]
~~~


<a id="compare-32e7c6c2b81e87b33ef95669821b2800"></a>

### [`006e29f0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006e2/006e29f0.md) → [`006e2a48`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006e2/006e2a48.md) FUN_006e2a48

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `bounded` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`006e2c74`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006e2/006e2c74.md) · 呼出先 11件 [`0048792c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00487/0048792c.md) [`0048799c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00487/0048799c.md) [`00487a64`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00487/00487a64.md) [`00487e20`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00487/00487e20.md) [`00488658`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00488/00488658.md)
- 新版 呼出元 1件 [`006e2ccc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006e2/006e2ccc.md) · 呼出先 11件 [`0048796c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00487/0048796c.md) [`004879dc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00487/004879dc.md) [`00487aa4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00487/00487aa4.md) [`00487e60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00487/00487e60.md) [`00488698`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00488/00488698.md)

変更の種類 branch_condition_or_target, call, call_count, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, store_value, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 78.01% / 新版 78.01%

優先判定に残った影響 `unresolved_call_alignment` 1件, `unresolved_store_alignment` 15件

アドレスに依存する影響 `store_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "006e2bfc",
      "incomplete_value": true,
      "site": "006e2c00",
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
      "definition_site": "006e2ba4",
      "incomplete_value": true,
      "site": "006e2ba8",
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
      "unmatched:006e29f4",
      "WRITE",
      [
        "storage",
        "Stack[-0x40]",
        null,
        null
      ]
    ],
    [
      "unmatched:006e29f8",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "unmatched:006e29fc",
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
      "006e2a4c",
      "WRITE",
      [
        "storage",
        "Stack[-0x40]",
        null,
        null
      ]
    ],
    [
      "006e2a50",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "006e2a54",
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
- 006e2b50 ["INT_ADD", "register:40f0:8", ["const:6e2b50:8", "const:4:8"]]
- 006e2b50 ["CALL", null, ["callee:004879dc:8"]]
+ 006e2ba8 ["INT_ADD", "register:40f0:8", ["const:6e2ba8:8", "const:4:8"]]
+ 006e2ba8 ["CALL", null, ["callee:004879dc:8"]]
- 006e29f0 ["INT_SUB", "register:8:8", ["register:8:8", "const:1c0:8"]]
- 006e29f4 ["COPY", "tmp:0:8", ["register:40e8:8"]]
- 006e29f4 ["COPY", "tmp:1:8", ["register:40f0:8"]]
- 006e29f4 ["INT_ADD", "tmp:2:8", ["register:8:8", "const:180:8"]]
- 006e29f4 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
~~~


<a id="compare-c8f1c8f4d0736bb50005a0d85eb8cf40"></a>

### [`006e2c74`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006e2/006e2c74.md) → [`006e2ccc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006e2/006e2ccc.md) FUN_006e2ccc

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`006ea588`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006ea/006ea588.md) · 呼出先 22件 [`0043bb20`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043bb20.md) [`00440f70`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00440/00440f70.md) [`0046e770`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0046e/0046e770.md) [`0046e780`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0046e/0046e780.md) [`0046e970`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0046e/0046e970.md)
- 新版 呼出元 1件 [`006ea5e0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006ea/006ea5e0.md) · 呼出先 22件 [`0043bb60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bb60.md) [`00440fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00440/00440fb0.md) [`0046e7b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046e/0046e7b0.md) [`0046e7c0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046e/0046e7c0.md) [`0046e9b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046e/0046e9b0.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies, store_destination, store_value

命令の説明率　旧版 91.37% / 新版 91.37%

優先判定に残った影響 `call_argument_candidate` 6件, `store_destination` 7件, `store_value` 4件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "006e2da4",
      "incomplete_value": true,
      "site": "006e2da4",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:427:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "006e2d4c",
      "incomplete_value": true,
      "site": "006e2d4c",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:3e7:8"
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
      "definition_site": "006e2eb4",
      "incomplete_value": true,
      "site": "006e2eb4",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:fb4:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "006e2e5c",
      "incomplete_value": true,
      "site": "006e2e5c",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:f85:8"
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
      "definition_site": "006e30f4",
      "incomplete_value": false,
      "site": "006e30f4",
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
      "definition_site": "006e309c",
      "incomplete_value": false,
      "site": "006e309c",
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
    "ordinal": 29,
    "slot": 1
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "006e2d20",
      "READ",
      [
        "storage",
        "00ca4f38",
        null,
        "undefined1"
      ]
    ],
    [
      "006e2d94",
      "READ",
      [
        "storage",
        "002c13e7",
        null,
        "string"
      ]
    ],
    [
      "006e2de8",
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
      "006e2d20",
      "READ",
      [
        "storage",
        "00ca5038",
        null,
        "undefined1"
      ]
    ],
    [
      "006e2d94",
      "READ",
      [
        "storage",
        "002c1427",
        null,
        "string"
      ]
    ],
    [
      "006e2de8",
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
- 006e2da4 ["INT_ADD", "register:40f0:8", ["const:6e2da4:8", "const:4:8"]]
- 006e2da4 ["CALL", null, ["callee:0047e64c:8"]]
+ 006e2dfc ["INT_ADD", "register:40f0:8", ["const:6e2dfc:8", "const:4:8"]]
+ 006e2dfc ["CALL", null, ["callee:0047e64c:8"]]
- 006e3020 ["INT_ADD", "register:40f0:8", ["const:6e3020:8", "const:4:8"]]
- 006e3020 ["CALL", null, ["callee:00c57f80:8"]]
+ 006e3078 ["INT_ADD", "register:40f0:8", ["const:6e3078:8", "const:4:8"]]
+ 006e3078 ["CALL", null, ["callee:00c57f80:8"]]
- 006e3050 ["INT_ADD", "register:40f0:8", ["const:6e3050:8", "const:4:8"]]
- 006e3050 ["CALL", null, ["callee:00c57f80:8"]]
+ 006e30a8 ["INT_ADD", "register:40f0:8", ["const:6e30a8:8", "const:4:8"]]
+ 006e30a8 ["CALL", null, ["callee:00c57f80:8"]]
~~~


<a id="compare-73faa0abdc43437dda56fdb9ce6841b9"></a>

### [`006e3258`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006e3/006e3258.md) → [`006e32b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006e3/006e32b0.md) FUN_006e32b0

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `bounded` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`006ea588`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006ea/006ea588.md) · 呼出先 5件 [`0046c9c4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0046c/0046c9c4.md) [`0046d7b0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0046d/0046d7b0.md) [`0046ee58`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0046e/0046ee58.md) [`004700e0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00470/004700e0.md) [`008514f8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00851/008514f8.md)
- 新版 呼出元 1件 [`006ea5e0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006ea/006ea5e0.md) · 呼出先 5件 [`0046ca04`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046c/0046ca04.md) [`0046d7f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046d/0046d7f0.md) [`0046ee98`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046e/0046ee98.md) [`00470120`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00470/00470120.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)

変更の種類 cfg_edge_inventory, constant, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_store_alignment

命令の説明率　旧版 92.00% / 新版 92.00%

優先判定に残った影響 `unresolved_store_alignment` 5件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:006e3258",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "unmatched:006e325c",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "unmatched:006e32b8",
      "READ",
      [
        "storage",
        "002c3f90",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "006e32b0",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "006e32b4",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "006e3310",
      "READ",
      [
        "storage",
        "002c3fd0",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 006e3258 ["COPY", "tmp:0:8", ["register:40e8:8"]]
- 006e3258 ["COPY", "tmp:1:8", ["register:40f0:8"]]
- 006e3258 ["INT_ADD", "register:8:8", ["register:8:8", "const:ffffffffffffffd0:8"]]
- 006e3258 ["STORE", null, ["const:1b1:8", "register:8:8", "tmp:0:8"]]
- 006e325c ["COPY", "tmp:0:8", ["register:40b0:8"]]
- 006e325c ["COPY", "tmp:1:8", ["register:40a8:8"]]
- 006e325c ["INT_ADD", "tmp:2:8", ["register:8:8", "const:10:8"]]
- 006e325c ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
- 006e3270 ["INT_ADD", "register:40f0:8", ["const:6e3270:8", "const:4:8"]]
- 006e3270 ["CALL", null, ["callee:00851550:8"]]
+ 006e32c8 ["INT_ADD", "register:40f0:8", ["const:6e32c8:8", "const:4:8"]]
+ 006e32c8 ["CALL", null, ["callee:00851550:8"]]
~~~


<a id="compare-066bd111a76e9531efda4874807f83db"></a>

### [`006e3d3c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006e3/006e3d3c.md) → [`006e3d94`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006e3/006e3d94.md) FUN_006e3d94

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `bounded` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`006f86c8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006f8/006f86c8.md) · 呼出先 7件 [`00467860`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00467/00467860.md) [`00467b2c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00467/00467b2c.md) [`0046bd54`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0046b/0046bd54.md) [`0046e7a0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0046e/0046e7a0.md) [`004700b4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00470/004700b4.md)
- 新版 呼出元 1件 [`006f8720`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006f8/006f8720.md) · 呼出先 7件 [`004678a0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00467/004678a0.md) [`00467b6c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00467/00467b6c.md) [`0046bd94`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046b/0046bd94.md) [`0046e7e0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046e/0046e7e0.md) [`004700f4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00470/004700f4.md)

変更の種類 branch_condition_or_target, cfg_edge_inventory, constant, control_flow, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_store_alignment

命令の説明率　旧版 91.30% / 新版 91.30%

優先判定に残った影響 `unresolved_store_alignment` 2件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:006e3d50",
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
      "006e3da8",
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
- 006e3d44 ["CBRANCH", null, ["local:b11:8", "register:101:1"]]
+ 006e3d9c ["CBRANCH", null, ["local:b16:8", "register:101:1"]]
- 006e3d50 ["COPY", "tmp:0:8", ["register:40a0:8"]]
- 006e3d50 ["COPY", "tmp:1:8", ["register:4098:8"]]
- 006e3d50 ["INT_ADD", "tmp:2:8", ["register:8:8", "const:20:8"]]
- 006e3d50 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
- 006e3d54 ["COPY", "register:40e8:8", ["register:8:8"]]
~~~


<a id="compare-105fc4e7b28307c744a830b0f4487ee9"></a>

### [`006e3e50`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006e3/006e3e50.md) → [`006e3ea8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006e3/006e3ea8.md) FUN_006e3ea8

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 2件 [`006e5d70`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006e5/006e5d70.md) [`006ef744`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006ef/006ef744.md) · 呼出先 9件 [`00440ec0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00440/00440ec0.md) [`00470840`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00470/00470840.md) [`006fa2d4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006fa/006fa2d4.md) [`008514f8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00851/008514f8.md) [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md)
- 新版 呼出元 2件 [`006e5dc8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006e5/006e5dc8.md) [`006ef79c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006ef/006ef79c.md) · 呼出先 9件 [`00440f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00440/00440f00.md) [`00470880`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00470/00470880.md) [`006fa32c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006fa/006fa32c.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)

変更の種類 branch_condition_or_target, call, call_argument_candidate, call_target, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, store_condition, unresolved_branch_alignment, unresolved_store_alignment

命令の説明率　旧版 89.63% / 新版 89.63%

優先判定に残った影響 `call_argument_candidate` 1件, `call_target` 1件, `store_condition` 2件, `unresolved_branch_alignment` 3件, `unresolved_store_alignment` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_target",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "006e4028",
      "value": [
        "leaf",
        "ram:6fa32c:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "006e3fd0",
      "value": [
        "leaf",
        "ram:6fa2d4:8"
      ]
    },
    "ordinal": 6,
    "slot": 0
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "006e3fe0",
      "incomplete_value": true,
      "site": "006e3fe8",
      "value": [
        "LOAD",
        "8",
        [
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
    "guard": [
      [
        "CONDITIONAL_JUMP",
        "006e3ec4"
      ],
      [
        "CONDITIONAL_JUMP",
        "006e3f1c"
      ]
    ],
    "kind": "store_condition",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "006e3fbc",
      "value": [
        "live",
        "register:101:1"
      ]
    },
    "old": {
      "definition_site": "006e3ec0",
      "incomplete_value": true,
      "site": "006e3f64",
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
                "leaf",
                "const:5a0:8"
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
    "ordinal": 19,
    "slot": 0
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:006e3e78",
      "WRITE",
      [
        "storage",
        "Stack[-0x68]",
        null,
        null
      ]
    ],
    [
      "unmatched:006e3ec4",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "006e3fb8"
      ]
    ],
    [
      "unmatched:006e3f74",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "006e3ffc"
      ]
    ]
  ],
  "added": [
    [
      "006e3ed0",
      "WRITE",
      [
        "storage",
        "Stack[-0x68]",
        null,
        null
      ]
    ],
    [
      "006e3f1c",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "006e3fb8"
      ]
    ],
    [
      "006e3fcc",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "006e3ffc"
      ]
    ]
  ]
}
~~~


~~~diff
+ 006e3f64 ["BOOL_NEGATE", "tmp:0:1", ["register:102:1"]]
+ 006e3f64 ["COPY", "tmp:1:8", ["register:4040:8"]]
+ 006e3f64 ["CBRANCH", null, ["const:2:4", "tmp:0:1"]]
+ 006e3f64 ["COPY", "tmp:1:8", ["register:4048:8"]]
- 006e3f90 ["INT_NOTEQUAL", "tmp:0:1", ["register:4000:8", "const:0:8"]]
- 006e3f90 ["CBRANCH", null, ["local:b36:8", "tmp:0:1"]]
+ 006e3fe8 ["INT_NOTEQUAL", "tmp:0:1", ["register:4000:8", "const:0:8"]]
+ 006e3fe8 ["CBRANCH", null, ["local:b30:8", "tmp:0:1"]]
- 006e3fd0 ["INT_ADD", "register:40f0:8", ["const:6e3fd0:8", "const:4:8"]]
- 006e3fd0 ["CALL", null, ["ram:6fa2d4:8"]]
+ 006e4028 ["INT_ADD", "register:40f0:8", ["const:6e4028:8", "const:4:8"]]
+ 006e4028 ["CALL", null, ["ram:6fa32c:8"]]
~~~


<a id="compare-474cb0089b0ddea43da94b74d324a406"></a>

### [`006e4314`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006e4/006e4314.md) → [`006e436c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006e4/006e436c.md) FUN_006e436c

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`006e5d70`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006e5/006e5d70.md) · 呼出先 2件 [`0043bb20`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043bb20.md) [`008514f8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00851/008514f8.md)
- 新版 呼出元 1件 [`006e5dc8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006e5/006e5dc8.md) · 呼出先 2件 [`0043bb60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bb60.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 90.57% / 新版 90.57%

優先判定に残った影響 `store_value` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "006e43e0",
      "incomplete_value": true,
      "site": "006e43e0",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:214:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "006e4388",
      "incomplete_value": true,
      "site": "006e4388",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:1d4:8"
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
      "definition_site": "006e43d8",
      "incomplete_value": true,
      "site": "006e43e4",
      "value": [
        "LOAD",
        "8",
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
      "definition_site": "006e4380",
      "incomplete_value": true,
      "site": "006e438c",
      "value": [
        "LOAD",
        "8",
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
      "006e43d4",
      "READ",
      [
        "storage",
        "002c01d4",
        null,
        "string"
      ]
    ],
    [
      "006e43d8",
      "READ",
      [
        "storage",
        "002c01db",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "006e43d4",
      "READ",
      [
        "storage",
        "002c0214",
        null,
        "string"
      ]
    ],
    [
      "006e43d8",
      "READ",
      [
        "storage",
        "002c021b",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 006e4330 ["INT_ADD", "register:40f0:8", ["const:6e4330:8", "const:4:8"]]
- 006e4330 ["CALL", null, ["callee:00851550:8"]]
+ 006e4388 ["INT_ADD", "register:40f0:8", ["const:6e4388:8", "const:4:8"]]
+ 006e4388 ["CALL", null, ["callee:00851550:8"]]
- 006e4348 ["INT_ADD", "register:40f0:8", ["const:6e4348:8", "const:4:8"]]
- 006e4348 ["CALL", null, ["callee:00851550:8"]]
+ 006e43a0 ["INT_ADD", "register:40f0:8", ["const:6e43a0:8", "const:4:8"]]
+ 006e43a0 ["CALL", null, ["callee:00851550:8"]]
- 006e4360 ["INT_ADD", "register:40f0:8", ["const:6e4360:8", "const:4:8"]]
- 006e4360 ["CALL", null, ["callee:00851550:8"]]
+ 006e43b8 ["INT_ADD", "register:40f0:8", ["const:6e43b8:8", "const:4:8"]]
+ 006e43b8 ["CALL", null, ["callee:00851550:8"]]
~~~


<a id="compare-bd19ac233c4f5d0cbe5753985c0b3e6e"></a>

### [`006e44e0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006e4/006e44e0.md) → [`006e4538`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006e4/006e4538.md) FUN_006e4538

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 2件 [`006e4d6c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006e4/006e4d6c.md) [`006e5d70`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006e5/006e5d70.md) · 呼出先 16件 [`0043bba4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043bba4.md) [`00447ef4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00447/00447ef4.md) [`0047e60c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047e/0047e60c.md) [`0047edb4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047e/0047edb4.md) [`0048ce54`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0048c/0048ce54.md)
- 新版 呼出元 2件 [`006e4dc4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006e4/006e4dc4.md) [`006e5dc8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006e5/006e5dc8.md) · 呼出先 16件 [`0043bbe4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bbe4.md) [`00447f34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00447/00447f34.md) [`0047e64c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047e/0047e64c.md) [`0047edf4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047e/0047edf4.md) [`0048ce94`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048c/0048ce94.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies, store_destination, store_value

命令の説明率　旧版 84.33% / 新版 84.33%

優先判定に残った影響 `call_argument_candidate` 12件, `store_destination` 14件, `store_value` 10件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "006e45a4",
      "incomplete_value": true,
      "site": "006e45b0",
      "value": [
        "LOAD",
        "16",
        [
          [
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
      "definition_site": "006e454c",
      "incomplete_value": true,
      "site": "006e4558",
      "value": [
        "LOAD",
        "16",
        [
          [
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
    "ordinal": 17,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "006e461c",
      "incomplete_value": true,
      "site": "006e4628",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:fd1:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "006e45c4",
      "incomplete_value": true,
      "site": "006e45d0",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:2d:8"
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
      "definition_site": "006e462c",
      "incomplete_value": true,
      "site": "006e462c",
      "value": [
        "LOAD",
        "8",
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
      "definition_site": "006e45d4",
      "incomplete_value": true,
      "site": "006e45d4",
      "value": [
        "LOAD",
        "8",
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
      "006e45a4",
      "READ",
      [
        "storage",
        "002c2450",
        null,
        null
      ]
    ],
    [
      "006e45dc",
      "DATA",
      [
        "storage",
        "00430ee8",
        null,
        "dword"
      ]
    ],
    [
      "006e45f8",
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
      "006e45a4",
      "READ",
      [
        "storage",
        "002c2490",
        null,
        null
      ]
    ],
    [
      "006e45dc",
      "DATA",
      [
        "storage",
        "00430ee8",
        null,
        "byte[19]"
      ]
    ],
    [
      "006e45f8",
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
- 006e45dc ["INT_ADD", "register:40f0:8", ["const:6e45dc:8", "const:4:8"]]
- 006e45dc ["CALL", null, ["callee:00851550:8"]]
+ 006e4634 ["INT_ADD", "register:40f0:8", ["const:6e4634:8", "const:4:8"]]
+ 006e4634 ["CALL", null, ["callee:00851550:8"]]
- 006e465c ["INT_ADD", "register:40f0:8", ["const:6e465c:8", "const:4:8"]]
- 006e465c ["CALL", null, ["callee:0047e64c:8"]]
+ 006e46b4 ["INT_ADD", "register:40f0:8", ["const:6e46b4:8", "const:4:8"]]
+ 006e46b4 ["CALL", null, ["callee:0047e64c:8"]]
- 006e46b4 ["COPY", "tmp:0:8", ["const:f38:8"]]
- 006e46b4 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 006e46b4 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 006e46b4 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 006e470c ["COPY", "tmp:0:8", ["const:38:8"]]
+ 006e470c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 006e470c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 006e470c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-05c3384e66da13dcaaf3f5488031bfdf"></a>

### [`006e4d6c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006e4/006e4d6c.md) → [`006e4dc4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006e4/006e4dc4.md) FUN_006e4dc4

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 1件 [`006f24d4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006f2/006f24d4.md) · 呼出先 16件 [`0046c9c4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0046c/0046c9c4.md) [`006b2430`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006b2/006b2430.md) [`006c0d14`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006c0/006c0d14.md) [`006c0d70`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006c0/006c0d70.md) [`006c0f2c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006c0/006c0f2c.md)
- 新版 呼出元 1件 [`006f252c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006f2/006f252c.md) · 呼出先 16件 [`0046ca04`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046c/0046ca04.md) [`006b2488`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006b2/006b2488.md) [`006c0d6c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006c0/006c0d6c.md) [`006c0dc8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006c0/006c0dc8.md) [`006c0f84`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006c0/006c0f84.md)

変更の種類 branch_condition_or_target, branch_value, call, call_argument_candidate, cfg_edge_inventory, constant, control_flow, local_def_use, operands_and_dependencies, operation_sequence, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 92.05% / 新版 92.05%

優先判定に残った影響 `call_argument_candidate` 12件, `unresolved_call_alignment` 3件, `unresolved_store_alignment` 9件

アドレスに依存する影響 `branch_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "branch_value",
    "new": {
      "definition_site": "006e4e08",
      "incomplete_value": true,
      "site": "006e4e08",
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
      "definition_site": "006e4db0",
      "incomplete_value": true,
      "site": "006e4db0",
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
      "definition_site": "006e4e10",
      "incomplete_value": false,
      "site": "006e4e24",
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
      "definition_site": "006e4db8",
      "incomplete_value": false,
      "site": "006e4dcc",
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
      "definition_site": "006e4e18",
      "incomplete_value": false,
      "site": "006e4e24",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c73000:8"
          ],
          [
            "leaf",
            "const:8e0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "006e4dc0",
      "incomplete_value": false,
      "site": "006e4dcc",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c73000:8"
          ],
          [
            "leaf",
            "const:810:8"
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
      "006e4e04",
      "READ",
      [
        "storage",
        "00ca4978",
        null,
        "undefined8"
      ]
    ],
    [
      "006e4e10",
      "PARAM",
      [
        "storage",
        "00c65e58",
        null,
        "pointer __((offset(0x10)))"
      ]
    ],
    [
      "006e4e18",
      "PARAM",
      [
        "storage",
        "00c73810",
        null,
        "pointer __((offset(0x10)))"
      ]
    ]
  ],
  "added": [
    [
      "006e4e04",
      "READ",
      [
        "storage",
        "00ca4a78",
        null,
        "undefined8"
      ]
    ],
    [
      "006e4e10",
      "PARAM",
      [
        "storage",
        "00c65f28",
        null,
        "pointer __((offset(0x10)))"
      ]
    ],
    [
      "006e4e18",
      "PARAM",
      [
        "storage",
        "00c738e0",
        null,
        "pointer __((offset(0x10)))"
      ]
    ]
  ]
}
~~~


~~~diff
- 006e4dcc ["INT_ADD", "register:40f0:8", ["const:6e4dcc:8", "const:4:8"]]
- 006e4dcc ["CALL", null, ["callee:00c586e0:8"]]
+ 006e4e24 ["INT_ADD", "register:40f0:8", ["const:6e4e24:8", "const:4:8"]]
+ 006e4e24 ["CALL", null, ["callee:00c586e0:8"]]
- 006e4e08 ["INT_ADD", "register:40f0:8", ["const:6e4e08:8", "const:4:8"]]
- 006e4e08 ["CALL", null, ["callee:006b2488:8"]]
+ 006e4e60 ["INT_ADD", "register:40f0:8", ["const:6e4e60:8", "const:4:8"]]
+ 006e4e60 ["CALL", null, ["callee:006b2488:8"]]
- 006e5088 ["INT_ADD", "register:40f0:8", ["const:6e5088:8", "const:4:8"]]
- 006e5088 ["CALL", null, ["callee:006c0dc8:8"]]
+ 006e50e0 ["INT_ADD", "register:40f0:8", ["const:6e50e0:8", "const:4:8"]]
+ 006e50e0 ["CALL", null, ["callee:006c0dc8:8"]]
~~~


<a id="compare-4c1ed52fa9dbd3b246aee8ac9e913e85"></a>

### [`006e53d4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006e5/006e53d4.md) → [`006e542c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006e5/006e542c.md) FUN_006e542c

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 4件 [`006e4d6c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006e4/006e4d6c.md) [`006ea588`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006ea/006ea588.md) [`006eecac`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006ee/006eecac.md) [`006fe604`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006fe/006fe604.md) · 呼出先 15件 [`00440ec0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00440/00440ec0.md) [`00470840`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00470/00470840.md) [`0048ce84`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0048c/0048ce84.md) [`006e4ac4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006e4/006e4ac4.md) [`006fbdd0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006fb/006fbdd0.md)
- 新版 呼出元 4件 [`006e4dc4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006e4/006e4dc4.md) [`006ea5e0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006ea/006ea5e0.md) [`006eed04`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006ee/006eed04.md) [`006fe65c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006fe/006fe65c.md) · 呼出先 15件 [`00440f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00440/00440f00.md) [`00470880`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00470/00470880.md) [`0048cec4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048c/0048cec4.md) [`006e4b1c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006e4/006e4b1c.md) [`006fbe28`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006fb/006fbe28.md)

変更の種類 branch_condition_or_target, call_argument_candidate, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_call_alignment

命令の説明率　旧版 83.04% / 新版 83.04%

優先判定に残った影響 `call_argument_candidate` 3件, `unresolved_branch_alignment` 21件, `unresolved_call_alignment` 11件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "006e5798",
      "incomplete_value": true,
      "site": "006e57ac",
      "value": [
        "live",
        "register:40a8:8"
      ]
    },
    "old": null,
    "ordinal": 19,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "006e579c",
      "incomplete_value": true,
      "site": "006e57ac",
      "value": [
        "live",
        "register:40a0:8"
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
      "definition_site": "006e57a0",
      "incomplete_value": true,
      "site": "006e57ac",
      "value": [
        "live",
        "register:40b0:8"
      ]
    },
    "old": null,
    "ordinal": 19,
    "slot": 3
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:006e548c",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "006e5604"
      ]
    ],
    [
      "006e54f0",
      "DATA",
      [
        "storage",
        "00436d8c",
        null,
        "dword"
      ]
    ],
    [
      "006e5680",
      "DATA",
      [
        "storage",
        "0038df50",
        null,
        "byte[39]"
      ]
    ]
  ],
  "added": [
    [
      "006e54e4",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "006e5604"
      ]
    ],
    [
      "006e54f0",
      "DATA",
      [
        "storage",
        "00436d8c",
        null,
        "byte[67]"
      ]
    ],
    [
      "006e5680",
      "DATA",
      [
        "storage",
        "0038df50",
        "fde_0038df50",
        "dword"
      ]
    ]
  ]
}
~~~


~~~diff
- 006e5754 ["INT_ADD", "register:40f0:8", ["const:6e5754:8", "const:4:8"]]
- 006e5754 ["CALL", null, ["callee:006fbe28:8"]]
+ 006e57ac ["INT_ADD", "register:40f0:8", ["const:6e57ac:8", "const:4:8"]]
+ 006e57ac ["CALL", null, ["callee:006fbe28:8"]]
- 006e57ac ["BRANCH", null, ["local:b59:8"]]
+ 006e5804 ["BRANCH", null, ["local:b58:8"]]
- 006e540c ["INT_ADD", "register:40f0:8", ["const:6e540c:8", "const:4:8"]]
- 006e540c ["CALL", null, ["callee:0048cec4:8"]]
+ 006e5464 ["INT_ADD", "register:40f0:8", ["const:6e5464:8", "const:4:8"]]
+ 006e5464 ["CALL", null, ["callee:0048cec4:8"]]
~~~


<a id="compare-30163752fa45ed28cd99fe3a92dcc12c"></a>

### [`006e7300`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006e7/006e7300.md) → [`006e7358`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006e7/006e7358.md) FUN_006e7358

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 2件 [`00645294`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00645/00645294.md) [`006e5d70`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006e5/006e5d70.md) · 呼出先 13件 [`0046c9c4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0046c/0046c9c4.md) [`0047acf4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047a/0047acf4.md) [`0047cdd4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047c/0047cdd4.md) [`008514f8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00851/008514f8.md) [`00859b4c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00859/00859b4c.md)
- 新版 呼出元 2件 [`006452d4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00645/006452d4.md) [`006e5dc8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006e5/006e5dc8.md) · 呼出先 13件 [`0046ca04`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046c/0046ca04.md) [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md) [`0047ce14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047ce14.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md) [`00859ba4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00859/00859ba4.md)

変更の種類 call, call_target, constant, local_def_use, memory_read, memory_read_count, operands_and_dependencies, operation_sequence

命令の説明率　旧版 99.05% / 新版 99.05%

優先判定に残った影響 `call_target` 3件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_target",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "006e7638",
      "value": [
        "leaf",
        "ram:47ad34:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "006e75e0",
      "value": [
        "leaf",
        "ram:47acf4:8"
      ]
    },
    "ordinal": 30,
    "slot": 0
  },
  {
    "confidence": "limited",
    "kind": "call_target",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "006e7848",
      "value": [
        "leaf",
        "ram:47ad34:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "006e77f0",
      "value": [
        "leaf",
        "ram:47acf4:8"
      ]
    },
    "ordinal": 40,
    "slot": 0
  },
  {
    "confidence": "limited",
    "kind": "call_target",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "006e79b0",
      "value": [
        "leaf",
        "ram:47ad34:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "006e7958",
      "value": [
        "leaf",
        "ram:47acf4:8"
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
      "unmatched:006e7350",
      "DATA",
      [
        "storage",
        "00332074",
        null,
        "fde_table_entry"
      ]
    ],
    [
      "006e7430",
      "READ",
      [
        "storage",
        "002c4158",
        null,
        "undefined8"
      ]
    ],
    [
      "006e74ac",
      "DATA",
      [
        "storage",
        "0042ef64",
        null,
        "byte[39]"
      ]
    ]
  ],
  "added": [
    [
      "006e73a8",
      "DATA",
      [
        "storage",
        "00332074",
        null,
        "fde_table_entry"
      ]
    ],
    [
      "006e7430",
      "READ",
      [
        "storage",
        "002c4198",
        null,
        "undefined8"
      ]
    ],
    [
      "006e74ac",
      "DATA",
      [
        "storage",
        "0042ef64",
        null,
        "byte[43]"
      ]
    ]
  ]
}
~~~


~~~diff
- 006e75e0 ["INT_ADD", "register:40f0:8", ["const:6e75e0:8", "const:4:8"]]
- 006e75e0 ["CALL", null, ["ram:47acf4:8"]]
+ 006e7638 ["INT_ADD", "register:40f0:8", ["const:6e7638:8", "const:4:8"]]
+ 006e7638 ["CALL", null, ["ram:47ad34:8"]]
- 006e77f0 ["INT_ADD", "register:40f0:8", ["const:6e77f0:8", "const:4:8"]]
- 006e77f0 ["CALL", null, ["ram:47acf4:8"]]
+ 006e7848 ["INT_ADD", "register:40f0:8", ["const:6e7848:8", "const:4:8"]]
+ 006e7848 ["CALL", null, ["ram:47ad34:8"]]
- 006e7958 ["INT_ADD", "register:40f0:8", ["const:6e7958:8", "const:4:8"]]
- 006e7958 ["CALL", null, ["ram:47acf4:8"]]
+ 006e79b0 ["INT_ADD", "register:40f0:8", ["const:6e79b0:8", "const:4:8"]]
+ 006e79b0 ["CALL", null, ["ram:47ad34:8"]]
~~~


<a id="compare-0d5aacc219c2627b1a17551336b13357"></a>

### [`006e7990`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006e7/006e7990.md) → [`006e79e8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006e7/006e79e8.md) FUN_006e79e8

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`006f8a08`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006f8/006f8a08.md) · 呼出先 12件 [`00467860`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00467/00467860.md) [`00467b2c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00467/00467b2c.md) [`00467f54`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00467/00467f54.md) [`0046c9c4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0046c/0046c9c4.md) [`0046ca84`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0046c/0046ca84.md)
- 新版 呼出元 1件 [`006f8a60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006f8/006f8a60.md) · 呼出先 12件 [`004678a0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00467/004678a0.md) [`00467b6c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00467/00467b6c.md) [`00467f94`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00467/00467f94.md) [`0046ca04`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046c/0046ca04.md) [`0046cac4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046c/0046cac4.md)

変更の種類 branch_value, call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 97.67% / 新版 97.67%

優先判定に残った影響 `branch_value` 1件, `call_argument_candidate` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "branch_value",
    "new": {
      "definition_site": "006e7a18",
      "incomplete_value": true,
      "site": "006e7a18",
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
      "definition_site": "006e79c0",
      "incomplete_value": true,
      "site": "006e79c0",
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
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "006e7a20",
      "incomplete_value": false,
      "site": "006e7a30",
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
      "definition_site": "006e79c8",
      "incomplete_value": false,
      "site": "006e79d8",
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
      "definition_site": "006e7a28",
      "incomplete_value": false,
      "site": "006e7a30",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c73000:8"
          ],
          [
            "leaf",
            "const:8e0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "006e79d0",
      "incomplete_value": false,
      "site": "006e79d8",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c73000:8"
          ],
          [
            "leaf",
            "const:810:8"
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
      "006e7a14",
      "READ",
      [
        "storage",
        "00ca4978",
        null,
        "undefined8"
      ]
    ],
    [
      "006e7a20",
      "PARAM",
      [
        "storage",
        "00c65e58",
        null,
        "pointer __((offset(0x10)))"
      ]
    ],
    [
      "006e7a28",
      "PARAM",
      [
        "storage",
        "00c73810",
        null,
        "pointer __((offset(0x10)))"
      ]
    ]
  ],
  "added": [
    [
      "006e7a14",
      "READ",
      [
        "storage",
        "00ca4a78",
        null,
        "undefined8"
      ]
    ],
    [
      "006e7a20",
      "PARAM",
      [
        "storage",
        "00c65f28",
        null,
        "pointer __((offset(0x10)))"
      ]
    ],
    [
      "006e7a28",
      "PARAM",
      [
        "storage",
        "00c738e0",
        null,
        "pointer __((offset(0x10)))"
      ]
    ]
  ]
}
~~~


~~~diff
- 006e79d8 ["INT_ADD", "register:40f0:8", ["const:6e79d8:8", "const:4:8"]]
- 006e79d8 ["CALL", null, ["callee:00c586e0:8"]]
+ 006e7a30 ["INT_ADD", "register:40f0:8", ["const:6e7a30:8", "const:4:8"]]
+ 006e7a30 ["CALL", null, ["callee:00c586e0:8"]]
- 006e79bc ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:978:8"]]
- 006e79bc ["LOAD", "register:4000:8", ["const:1b1:8", "tmp:0:8"]]
+ 006e7a14 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:a78:8"]]
+ 006e7a14 ["LOAD", "register:4000:8", ["const:1b1:8", "tmp:0:8"]]
- 006e79c8 ["COPY", "tmp:0:8", ["const:e58:8"]]
- 006e79c8 ["INT_CARRY", "register:105:1", ["register:4008:8", "tmp:0:8"]]
- 006e79c8 ["INT_SCARRY", "register:106:1", ["register:4008:8", "tmp:0:8"]]
- 006e79c8 ["INT_ADD", "tmp:1:8", ["register:4008:8", "tmp:0:8"]]
+ 006e7a20 ["COPY", "tmp:0:8", ["const:f28:8"]]
+ 006e7a20 ["INT_CARRY", "register:105:1", ["register:4008:8", "tmp:0:8"]]
+ 006e7a20 ["INT_SCARRY", "register:106:1", ["register:4008:8", "tmp:0:8"]]
+ 006e7a20 ["INT_ADD", "tmp:1:8", ["register:4008:8", "tmp:0:8"]]
~~~


<a id="compare-d8b3a87a17cfc9f11f5a08766dbfa297"></a>

### [`006e7c40`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006e7/006e7c40.md) → [`006e7c98`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006e7/006e7c98.md) FUN_006e7c98

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`006e7990`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006e7/006e7990.md) · 呼出先 15件 [`0043bba4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043bba4.md) [`00467860`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00467/00467860.md) [`00467b60`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00467/00467b60.md) [`0046a250`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0046a/0046a250.md) [`0046af18`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0046a/0046af18.md)
- 新版 呼出元 1件 [`006e79e8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006e7/006e79e8.md) · 呼出先 15件 [`0043bbe4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bbe4.md) [`004678a0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00467/004678a0.md) [`00467ba0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00467/00467ba0.md) [`0046a290`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046a/0046a290.md) [`0046af58`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046a/0046af58.md)

変更の種類 branch_condition_or_target, branch_value, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 88.39% / 新版 88.39%

優先判定に残った影響 `call_argument_candidate` 16件, `unresolved_branch_alignment` 15件, `unresolved_call_alignment` 4件, `unresolved_store_alignment` 14件

アドレスに依存する影響 `branch_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "branch_value",
    "new": {
      "definition_site": "006e7cec",
      "incomplete_value": true,
      "site": "006e7cec",
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
      "definition_site": "006e7c94",
      "incomplete_value": true,
      "site": "006e7c94",
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
      "definition_site": "006e7cf4",
      "incomplete_value": false,
      "site": "006e7d08",
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
      "definition_site": "006e7c9c",
      "incomplete_value": false,
      "site": "006e7cb0",
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
      "definition_site": "006e7cfc",
      "incomplete_value": false,
      "site": "006e7d08",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c73000:8"
          ],
          [
            "leaf",
            "const:8e0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "006e7ca4",
      "incomplete_value": false,
      "site": "006e7cb0",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c73000:8"
          ],
          [
            "leaf",
            "const:810:8"
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
      "unmatched:006e7c88",
      "WRITE",
      [
        "storage",
        "Stack[-0xa8]",
        null,
        null
      ]
    ],
    [
      "006e7ce8",
      "READ",
      [
        "storage",
        "00ca4978",
        null,
        "undefined8"
      ]
    ],
    [
      "unmatched:006e7c9c",
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
      "006e7ce0",
      "WRITE",
      [
        "storage",
        "Stack[-0xa8]",
        null,
        null
      ]
    ],
    [
      "006e7ce8",
      "READ",
      [
        "storage",
        "00ca4a78",
        null,
        "undefined8"
      ]
    ],
    [
      "006e7cf4",
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
- 006e7c94 ["INT_EQUAL", "tmp:0:1", ["register:4040:8", "const:0:8"]]
- 006e7c94 ["CBRANCH", null, ["local:b2:8", "tmp:0:1"]]
+ 006e7cec ["INT_EQUAL", "tmp:0:1", ["register:4040:8", "const:0:8"]]
+ 006e7cec ["CBRANCH", null, ["local:b3:8", "tmp:0:1"]]
- 006e7cb0 ["INT_ADD", "register:40f0:8", ["const:6e7cb0:8", "const:4:8"]]
- 006e7cb0 ["CALL", null, ["callee:00c586e0:8"]]
+ 006e7d08 ["INT_ADD", "register:40f0:8", ["const:6e7d08:8", "const:4:8"]]
+ 006e7d08 ["CALL", null, ["callee:00c586e0:8"]]
- 006e7e00 ["INT_ADD", "register:40f0:8", ["const:6e7e00:8", "const:4:8"]]
- 006e7e00 ["CALL", null, ["callee:0046a290:8"]]
+ 006e7e58 ["INT_ADD", "register:40f0:8", ["const:6e7e58:8", "const:4:8"]]
+ 006e7e58 ["CALL", null, ["callee:0046a290:8"]]
~~~


<a id="compare-89bfa539e8211a80da129f5cae109d05"></a>

### [`006e8c1c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006e8/006e8c1c.md) → [`006e8c74`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006e8/006e8c74.md) FUN_006e8c74

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`006ea588`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006ea/006ea588.md) · 呼出先 19件 [`00447ef4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00447/00447ef4.md) [`0046c9c4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0046c/0046c9c4.md) [`0047e60c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047e/0047e60c.md) [`0047edb4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047e/0047edb4.md) [`0048ce54`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0048c/0048ce54.md)
- 新版 呼出元 1件 [`006ea5e0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006ea/006ea5e0.md) · 呼出先 19件 [`00447f34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00447/00447f34.md) [`0046ca04`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046c/0046ca04.md) [`0047e64c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047e/0047e64c.md) [`0047edf4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047e/0047edf4.md) [`0048ce94`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048c/0048ce94.md)

変更の種類 branch_value, call_argument_candidate, constant, operands_and_dependencies, store_destination, store_value

命令の説明率　旧版 88.37% / 新版 88.37%

優先判定に残った影響 `call_argument_candidate` 14件, `store_destination` 14件, `store_value` 10件

アドレスに依存する影響 `branch_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "006e8f74",
      "incomplete_value": true,
      "site": "006e8f84",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:fd1:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "006e8f1c",
      "incomplete_value": true,
      "site": "006e8f2c",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:2d:8"
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
      "definition_site": "006e8f88",
      "incomplete_value": true,
      "site": "006e8f88",
      "value": [
        "LOAD",
        "8",
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
      "definition_site": "006e8f30",
      "incomplete_value": true,
      "site": "006e8f30",
      "value": [
        "LOAD",
        "8",
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
    "ordinal": 42,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "006e8f7c",
      "incomplete_value": true,
      "site": "006e8f8c",
      "value": [
        "LOAD",
        "16",
        [
          [
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
      "definition_site": "006e8f24",
      "incomplete_value": true,
      "site": "006e8f34",
      "value": [
        "LOAD",
        "16",
        [
          [
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
    "ordinal": 43,
    "slot": 2
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "006e8cb0",
      "READ",
      [
        "storage",
        "00ca4978",
        null,
        "undefined8"
      ]
    ],
    [
      "006e8cbc",
      "PARAM",
      [
        "storage",
        "00c65e58",
        null,
        "pointer __((offset(0x10)))"
      ]
    ],
    [
      "006e8cc4",
      "PARAM",
      [
        "storage",
        "00c73810",
        null,
        "pointer __((offset(0x10)))"
      ]
    ]
  ],
  "added": [
    [
      "006e8cb0",
      "READ",
      [
        "storage",
        "00ca4a78",
        null,
        "undefined8"
      ]
    ],
    [
      "006e8cbc",
      "PARAM",
      [
        "storage",
        "00c65f28",
        null,
        "pointer __((offset(0x10)))"
      ]
    ],
    [
      "006e8cc4",
      "PARAM",
      [
        "storage",
        "00c738e0",
        null,
        "pointer __((offset(0x10)))"
      ]
    ]
  ]
}
~~~


~~~diff
- 006e8c78 ["INT_ADD", "register:40f0:8", ["const:6e8c78:8", "const:4:8"]]
- 006e8c78 ["CALL", null, ["callee:00c586e0:8"]]
+ 006e8cd0 ["INT_ADD", "register:40f0:8", ["const:6e8cd0:8", "const:4:8"]]
+ 006e8cd0 ["CALL", null, ["callee:00c586e0:8"]]
- 006e8ed8 ["INT_ADD", "register:40f0:8", ["const:6e8ed8:8", "const:4:8"]]
- 006e8ed8 ["CALL", null, ["callee:006c0dc8:8"]]
+ 006e8f30 ["INT_ADD", "register:40f0:8", ["const:6e8f30:8", "const:4:8"]]
+ 006e8f30 ["CALL", null, ["callee:006c0dc8:8"]]
- 006e8edc ["INT_ADD", "register:40f0:8", ["const:6e8edc:8", "const:4:8"]]
- 006e8edc ["CALL", null, ["callee:00851550:8"]]
+ 006e8f34 ["INT_ADD", "register:40f0:8", ["const:6e8f34:8", "const:4:8"]]
+ 006e8f34 ["CALL", null, ["callee:00851550:8"]]
~~~


<a id="compare-6fc0275dfa4869eee38b5ece424dbead"></a>

### [`006e9e0c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006e9/006e9e0c.md) → [`006e9e64`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006e9/006e9e64.md) FUN_006e9e64

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal` · `cfg_change`

- 旧版 呼出元 4件 [`006f24d4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006f2/006f24d4.md) [`00769d84`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00769/00769d84.md) [`0094726c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00947/0094726c.md) [`0098cf8c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0098c/0098cf8c.md) · 呼出先 1件 [`00c58fd0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58fd0.md)
- 新版 呼出元 4件 [`006f252c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006f2/006f252c.md) [`00769ddc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00769/00769ddc.md) [`009472c0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00947/009472c0.md) [`0098cfe0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0098c/0098cfe0.md) · 呼出先 1件 [`00c590a0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c59/00c590a0.md)

変更の種類 cfg_edge_inventory, constant, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_store_alignment

命令の説明率　旧版 90.91% / 新版 90.91%

アドレスに依存する影響 `unresolved_store_alignment` 2件

~~~diff
- 006e9e3c ["INT_ADD", "register:40f0:8", ["const:6e9e3c:8", "const:4:8"]]
- 006e9e3c ["CALL", null, ["callee:00c590a0:8"]]
+ 006e9e94 ["INT_ADD", "register:40f0:8", ["const:6e9e94:8", "const:4:8"]]
+ 006e9e94 ["CALL", null, ["callee:00c590a0:8"]]
- 006e9e4c ["COPY", "tmp:0:8", ["register:4098:8"]]
- 006e9e4c ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:5000:16"]]
- 006e9e50 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:10:8"]]
- 006e9e50 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4040:8"]]
~~~


<a id="compare-2d63fc8de88d39bc9e1df49f68e8ae82"></a>

### [`006e9e64`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006e9/006e9e64.md) → [`006e9ebc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006e9/006e9ebc.md) FUN_006e9ebc

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`006f8a08`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006f8/006f8a08.md) · 呼出先 13件 [`00467860`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00467/00467860.md) [`00467b60`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00467/00467b60.md) [`00468f88`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00468/00468f88.md) [`00469c04`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00469/00469c04.md) [`0046af0c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0046a/0046af0c.md)
- 新版 呼出元 1件 [`006f8a60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006f8/006f8a60.md) · 呼出先 13件 [`004678a0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00467/004678a0.md) [`00467ba0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00467/00467ba0.md) [`00468fc8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00468/00468fc8.md) [`00469c44`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00469/00469c44.md) [`0046af4c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046a/0046af4c.md)

変更の種類 branch_value, call_argument_candidate, constant, local_def_use, operands_and_dependencies, operation_sequence

命令の説明率　旧版 93.33% / 新版 93.33%

優先判定に残った影響 `branch_value` 1件, `call_argument_candidate` 56件

アドレスに依存する影響 `branch_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "branch_value",
    "new": {
      "definition_site": "006e9efc",
      "incomplete_value": true,
      "site": "006e9efc",
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
      "definition_site": "006e9ea4",
      "incomplete_value": true,
      "site": "006e9ea4",
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
    "kind": "branch_value",
    "new": {
      "definition_site": "006ea520",
      "incomplete_value": true,
      "site": "006ea520",
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
      "definition_site": "006ea4c8",
      "incomplete_value": true,
      "site": "006ea4c8",
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
    "ordinal": 4,
    "slot": 0
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "006e9f04",
      "incomplete_value": false,
      "site": "006e9f18",
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
      "definition_site": "006e9eac",
      "incomplete_value": false,
      "site": "006e9ec0",
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
      "006e9ef8",
      "READ",
      [
        "storage",
        "00ca4978",
        null,
        "undefined8"
      ]
    ],
    [
      "006e9f04",
      "PARAM",
      [
        "storage",
        "00c65e58",
        null,
        "pointer __((offset(0x10)))"
      ]
    ],
    [
      "006e9f0c",
      "PARAM",
      [
        "storage",
        "00c73810",
        null,
        "pointer __((offset(0x10)))"
      ]
    ]
  ],
  "added": [
    [
      "006e9ef8",
      "READ",
      [
        "storage",
        "00ca4a78",
        null,
        "undefined8"
      ]
    ],
    [
      "006e9f04",
      "PARAM",
      [
        "storage",
        "00c65f28",
        null,
        "pointer __((offset(0x10)))"
      ]
    ],
    [
      "006e9f0c",
      "PARAM",
      [
        "storage",
        "00c738e0",
        null,
        "pointer __((offset(0x10)))"
      ]
    ]
  ]
}
~~~


~~~diff
- 006e9ec0 ["INT_ADD", "register:40f0:8", ["const:6e9ec0:8", "const:4:8"]]
- 006e9ec0 ["CALL", null, ["callee:00c586e0:8"]]
+ 006e9f18 ["INT_ADD", "register:40f0:8", ["const:6e9f18:8", "const:4:8"]]
+ 006e9f18 ["CALL", null, ["callee:00c586e0:8"]]
- 006e9efc ["INT_SRIGHT", "register:4040:8", ["register:4040:8", "const:22:8"]]
- 006e9f80 ["INT_ADD", "register:40f0:8", ["const:6e9f80:8", "const:4:8"]]
- 006e9f80 ["CALL", null, ["callee:00469c44:8"]]
+ 006e9fd8 ["INT_ADD", "register:40f0:8", ["const:6e9fd8:8", "const:4:8"]]
+ 006e9fd8 ["CALL", null, ["callee:00469c44:8"]]
~~~


<a id="compare-d41fc5c61989856eccc049fc3c575d22"></a>

### [`006f0654`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006f0/006f0654.md) → [`006f06ac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006f0/006f06ac.md) FUN_006f06ac

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 1件 [`006f1688`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006f1/006f1688.md) · 呼出先 23件 [`00447ef4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00447/00447ef4.md) [`0046e770`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0046e/0046e770.md) [`0046e780`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0046e/0046e780.md) [`0046e970`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0046e/0046e970.md) [`0046f0b4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0046f/0046f0b4.md)
- 新版 呼出元 1件 [`006f16e0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006f1/006f16e0.md) · 呼出先 23件 [`00447f34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00447/00447f34.md) [`0046e7b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046e/0046e7b0.md) [`0046e7c0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046e/0046e7c0.md) [`0046e9b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046e/0046e9b0.md) [`0046f0f4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046f/0046f0f4.md)

変更の種類 branch_condition_or_target, branch_value, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, local_def_use, operands_and_dependencies, operation_sequence, store_value, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 63.72% / 新版 63.72%

優先判定に残った影響 `call_argument_candidate` 13件, `store_value` 12件, `unresolved_branch_alignment` 24件, `unresolved_call_alignment` 51件, `unresolved_store_alignment` 54件

アドレスに依存する影響 `branch_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "006f0730",
      "incomplete_value": true,
      "site": "006f0744",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:6d0:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "006f06d8",
      "incomplete_value": true,
      "site": "006f06ec",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:690:8"
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
      "definition_site": "006f073c",
      "incomplete_value": true,
      "site": "006f0748",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:edb:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "006f06e4",
      "incomplete_value": true,
      "site": "006f06f0",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:eaa:8"
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
      "definition_site": "006f073c",
      "incomplete_value": true,
      "site": "006f0748",
      "value": [
        "LOAD",
        "16",
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
      "definition_site": "006f06e4",
      "incomplete_value": true,
      "site": "006f06f0",
      "value": [
        "LOAD",
        "16",
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
      "006f06e4",
      "READ",
      [
        "storage",
        "00ca4978",
        null,
        "undefined8"
      ]
    ],
    [
      "006f06f0",
      "PARAM",
      [
        "storage",
        "00c65e58",
        null,
        "pointer __((offset(0x10)))"
      ]
    ],
    [
      "006f06f8",
      "PARAM",
      [
        "storage",
        "00c73810",
        null,
        "pointer __((offset(0x10)))"
      ]
    ]
  ],
  "added": [
    [
      "006f06e4",
      "READ",
      [
        "storage",
        "00ca4a78",
        null,
        "undefined8"
      ]
    ],
    [
      "006f06f0",
      "PARAM",
      [
        "storage",
        "00c65f28",
        null,
        "pointer __((offset(0x10)))"
      ]
    ],
    [
      "006f06f8",
      "PARAM",
      [
        "storage",
        "00c738e0",
        null,
        "pointer __((offset(0x10)))"
      ]
    ]
  ]
}
~~~


~~~diff
- 006f0698 ["COPY", "tmp:0:8", ["const:e58:8"]]
- 006f0698 ["INT_CARRY", "register:105:1", ["register:4008:8", "tmp:0:8"]]
- 006f0698 ["INT_SCARRY", "register:106:1", ["register:4008:8", "tmp:0:8"]]
- 006f0698 ["INT_ADD", "tmp:1:8", ["register:4008:8", "tmp:0:8"]]
+ 006f06f0 ["COPY", "tmp:0:8", ["const:f28:8"]]
+ 006f06f0 ["INT_CARRY", "register:105:1", ["register:4008:8", "tmp:0:8"]]
+ 006f06f0 ["INT_SCARRY", "register:106:1", ["register:4008:8", "tmp:0:8"]]
+ 006f06f0 ["INT_ADD", "tmp:1:8", ["register:4008:8", "tmp:0:8"]]
- 006f06ac ["INT_ADD", "register:40f0:8", ["const:6f06ac:8", "const:4:8"]]
- 006f06ac ["CALL", null, ["callee:00c586e0:8"]]
+ 006f0704 ["INT_ADD", "register:40f0:8", ["const:6f0704:8", "const:4:8"]]
+ 006f0704 ["CALL", null, ["callee:00c586e0:8"]]
- 006f0750 ["INT_ADD", "register:40f0:8", ["const:6f0750:8", "const:4:8"]]
- 006f0750 ["CALL", null, ["callee:00470120:8"]]
+ 006f07a8 ["INT_ADD", "register:40f0:8", ["const:6f07a8:8", "const:4:8"]]
+ 006f07a8 ["CALL", null, ["callee:00470120:8"]]
~~~


<a id="compare-b2512fe6dcdefc970a6910d5c4d607bd"></a>

### [`006f1688`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006f1/006f1688.md) → [`006f16e0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006f1/006f16e0.md) FUN_006f16e0

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`006b29a8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006b2/006b29a8.md) · 呼出先 37件 [`0046c9c4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0046c/0046c9c4.md) [`004700e0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00470/004700e0.md) [`0048ce84`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0048c/0048ce84.md) [`005d8bc8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005d8/005d8bc8.md) [`006c0d70`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006c0/006c0d70.md)
- 新版 呼出元 1件 [`006b2a00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006b2/006b2a00.md) · 呼出先 37件 [`0046ca04`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046c/0046ca04.md) [`00470120`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00470/00470120.md) [`0048cec4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048c/0048cec4.md) [`005d8c08`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005d8/005d8c08.md) [`006c0dc8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006c0/006c0dc8.md)

変更の種類 branch_value, call, call_argument_candidate, call_target, constant, operands_and_dependencies, store_value

命令の説明率　旧版 98.19% / 新版 98.19%

優先判定に残った影響 `call_argument_candidate` 6件, `call_target` 1件, `store_value` 2件

アドレスに依存する影響 `branch_value` 1件, `store_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "006f17f0",
      "incomplete_value": true,
      "site": "006f1800",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:1e0:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "006f1798",
      "incomplete_value": true,
      "site": "006f17a8",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:1a0:8"
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
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "006f1cdc",
      "incomplete_value": false,
      "site": "006f1cdc",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c76000:8"
          ],
          [
            "leaf",
            "const:fe8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "006f1c84",
      "incomplete_value": false,
      "site": "006f1c84",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c76000:8"
          ],
          [
            "leaf",
            "const:f18:8"
          ]
        ]
      ]
    },
    "ordinal": 105,
    "slot": 2
  },
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "006f2280",
      "incomplete_value": false,
      "site": "006f2280",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c77000:8"
          ],
          [
            "leaf",
            "const:e8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "006f2228",
      "incomplete_value": false,
      "site": "006f2228",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c77000:8"
          ],
          [
            "leaf",
            "const:18:8"
          ]
        ]
      ]
    },
    "ordinal": 144,
    "slot": 2
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "006f171c",
      "READ",
      [
        "storage",
        "00ca4978",
        null,
        "undefined8"
      ]
    ],
    [
      "006f1730",
      "PARAM",
      [
        "storage",
        "00c65e58",
        null,
        "pointer __((offset(0x10)))"
      ]
    ],
    [
      "006f1738",
      "PARAM",
      [
        "storage",
        "00c73810",
        null,
        "pointer __((offset(0x10)))"
      ]
    ]
  ],
  "added": [
    [
      "006f171c",
      "READ",
      [
        "storage",
        "00ca4a78",
        null,
        "undefined8"
      ]
    ],
    [
      "006f1730",
      "PARAM",
      [
        "storage",
        "00c65f28",
        null,
        "pointer __((offset(0x10)))"
      ]
    ],
    [
      "006f1738",
      "PARAM",
      [
        "storage",
        "00c738e0",
        null,
        "pointer __((offset(0x10)))"
      ]
    ]
  ]
}
~~~


~~~diff
- 006f16e8 ["INT_ADD", "register:40f0:8", ["const:6f16e8:8", "const:4:8"]]
- 006f16e8 ["CALL", null, ["callee:00c586e0:8"]]
+ 006f1740 ["INT_ADD", "register:40f0:8", ["const:6f1740:8", "const:4:8"]]
+ 006f1740 ["CALL", null, ["callee:00c586e0:8"]]
- 006f1728 ["INT_ADD", "register:40f0:8", ["const:6f1728:8", "const:4:8"]]
- 006f1728 ["CALL", null, ["callee:006f06ac:8"]]
+ 006f1780 ["INT_ADD", "register:40f0:8", ["const:6f1780:8", "const:4:8"]]
+ 006f1780 ["CALL", null, ["callee:006f06ac:8"]]
- 006f1a60 ["INT_ADD", "register:40f0:8", ["const:6f1a60:8", "const:4:8"]]
- 006f1a60 ["CALL", null, ["ram:6ea588:8"]]
+ 006f1ab8 ["INT_ADD", "register:40f0:8", ["const:6f1ab8:8", "const:4:8"]]
+ 006f1ab8 ["CALL", null, ["ram:6ea5e0:8"]]
~~~


<a id="compare-019c02b4e22651fbc33a94ad15712dc2"></a>

### [`006f86c8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006f8/006f86c8.md) → [`006f8720`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006f8/006f8720.md) FUN_006f8720

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`006b3480`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006b3/006b3480.md) · 呼出先 11件 [`00467860`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00467/00467860.md) [`00467b2c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00467/00467b2c.md) [`0046bd54`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0046b/0046bd54.md) [`0046e7a0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0046e/0046e7a0.md) [`004700b4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00470/004700b4.md)
- 新版 呼出元 1件 [`006b34d8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006b3/006b34d8.md) · 呼出先 11件 [`004678a0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00467/004678a0.md) [`00467b6c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00467/00467b6c.md) [`0046bd94`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046b/0046bd94.md) [`0046e7e0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046e/0046e7e0.md) [`004700f4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00470/004700f4.md)

変更の種類 call, call_target, constant, operands_and_dependencies

命令の説明率　旧版 98.56% / 新版 98.56%

優先判定に残った影響 `call_target` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_target",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "006f8890",
      "value": [
        "leaf",
        "ram:6df5ac:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "006f8838",
      "value": [
        "leaf",
        "ram:6df554:8"
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
      "006f885c",
      "READ",
      [
        "storage",
        "00c9b4a8",
        null,
        "pointer"
      ]
    ],
    [
      "006f8884",
      "DATA",
      [
        "storage",
        "00ca4484",
        null,
        null
      ]
    ],
    [
      "006f8890",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "006df554"
      ]
    ]
  ],
  "added": [
    [
      "006f885c",
      "READ",
      [
        "storage",
        "00c9b578",
        null,
        "pointer"
      ]
    ],
    [
      "006f8884",
      "DATA",
      [
        "storage",
        "00ca4554",
        null,
        null
      ]
    ],
    [
      "006f8890",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "006df5ac"
      ]
    ]
  ]
}
~~~


~~~diff
- 006f8838 ["INT_ADD", "register:40f0:8", ["const:6f8838:8", "const:4:8"]]
- 006f8838 ["CALL", null, ["ram:6df554:8"]]
+ 006f8890 ["INT_ADD", "register:40f0:8", ["const:6f8890:8", "const:4:8"]]
+ 006f8890 ["CALL", null, ["ram:6df5ac:8"]]
- 006f86ec ["INT_ADD", "register:40f0:8", ["const:6f86ec:8", "const:4:8"]]
- 006f86ec ["CALL", null, ["callee:004678a0:8"]]
+ 006f8744 ["INT_ADD", "register:40f0:8", ["const:6f8744:8", "const:4:8"]]
+ 006f8744 ["CALL", null, ["callee:004678a0:8"]]
- 006f86f4 ["INT_ADD", "register:40f0:8", ["const:6f86f4:8", "const:4:8"]]
- 006f86f4 ["CALL", null, ["callee:00851550:8"]]
+ 006f874c ["INT_ADD", "register:40f0:8", ["const:6f874c:8", "const:4:8"]]
+ 006f874c ["CALL", null, ["callee:00851550:8"]]
~~~


<a id="compare-1894b3c8a10d19a0db8fd5fd811912bc"></a>

### [`006f8a08`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006f8/006f8a08.md) → [`006f8a60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006f8/006f8a60.md) FUN_006f8a60

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`006b3480`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006b3/006b3480.md) · 呼出先 30件 [`00467860`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00467/00467860.md) [`00467b2c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00467/00467b2c.md) [`00467b60`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00467/00467b60.md) [`00467f1c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00467/00467f1c.md) [`00467f54`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00467/00467f54.md)
- 新版 呼出元 1件 [`006b34d8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006b3/006b34d8.md) · 呼出先 30件 [`004678a0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00467/004678a0.md) [`00467b6c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00467/00467b6c.md) [`00467ba0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00467/00467ba0.md) [`00467f5c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00467/00467f5c.md) [`00467f94`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00467/00467f94.md)

変更の種類 branch_condition_or_target, branch_value, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, local_def_use, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 84.38% / 新版 84.38%

優先判定に残った影響 `branch_value` 2件, `call_argument_candidate` 48件, `unresolved_branch_alignment` 6件, `unresolved_call_alignment` 43件, `unresolved_store_alignment` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "branch_value",
    "new": {
      "definition_site": "006f8aac",
      "incomplete_value": true,
      "site": "006f8aac",
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
      "definition_site": "006f8a54",
      "incomplete_value": true,
      "site": "006f8a54",
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
    "kind": "branch_value",
    "new": {
      "definition_site": "006f9aac",
      "incomplete_value": true,
      "site": "006f9aac",
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
                "const:0:4"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "006f9a20",
      "incomplete_value": true,
      "site": "006f9a24",
      "value": [
        "INT_EQUAL",
        "1",
        [
          [
            "INT_SUB",
            "4",
            [
              [
                "live",
                "register:4000:4"
              ],
              [
                "leaf",
                "const:2:4"
              ]
            ]
          ],
          [
            "leaf",
            "const:0:4"
          ]
        ]
      ]
    },
    "ordinal": 60,
    "slot": 0
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "006f8ab4",
      "incomplete_value": false,
      "site": "006f8ac4",
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
      "definition_site": "006f8a5c",
      "incomplete_value": false,
      "site": "006f8a6c",
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
      "006f8a98",
      "READ",
      [
        "storage",
        "00ca4978",
        null,
        "undefined8"
      ]
    ],
    [
      "006f8ab4",
      "PARAM",
      [
        "storage",
        "00c65e58",
        null,
        "pointer __((offset(0x10)))"
      ]
    ],
    [
      "006f8abc",
      "PARAM",
      [
        "storage",
        "00c73810",
        null,
        "pointer __((offset(0x10)))"
      ]
    ]
  ],
  "added": [
    [
      "006f8a98",
      "READ",
      [
        "storage",
        "00ca4a78",
        null,
        "undefined8"
      ]
    ],
    [
      "006f8ab4",
      "PARAM",
      [
        "storage",
        "00c65f28",
        null,
        "pointer __((offset(0x10)))"
      ]
    ],
    [
      "006f8abc",
      "PARAM",
      [
        "storage",
        "00c738e0",
        null,
        "pointer __((offset(0x10)))"
      ]
    ]
  ]
}
~~~


~~~diff
- 006f8a6c ["INT_ADD", "register:40f0:8", ["const:6f8a6c:8", "const:4:8"]]
- 006f8a6c ["CALL", null, ["callee:00c586e0:8"]]
+ 006f8ac4 ["INT_ADD", "register:40f0:8", ["const:6f8ac4:8", "const:4:8"]]
+ 006f8ac4 ["CALL", null, ["callee:00c586e0:8"]]
- 006f8e6c ["INT_ADD", "register:40f0:8", ["const:6f8e6c:8", "const:4:8"]]
- 006f8e6c ["CALL", null, ["callee:00489f8c:8"]]
+ 006f8ec4 ["INT_ADD", "register:40f0:8", ["const:6f8ec4:8", "const:4:8"]]
+ 006f8ec4 ["CALL", null, ["callee:00489f8c:8"]]
- 006f916c ["INT_ADD", "register:40f0:8", ["const:6f916c:8", "const:4:8"]]
- 006f916c ["CALL", null, ["callee:00468fc8:8"]]
+ 006f91c4 ["INT_ADD", "register:40f0:8", ["const:6f91c4:8", "const:4:8"]]
+ 006f91c4 ["CALL", null, ["callee:00468fc8:8"]]
~~~


<a id="compare-2eed455a8e96591bb1d37603aa5f050f"></a>

### [`006f9ed8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006f9/006f9ed8.md) → [`006f9f30`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006f9/006f9f30.md) FUN_006f9f30

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`006dabac`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006da/006dabac.md) · 呼出先 1件 [`0043b778`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043b778.md)
- 新版 呼出元 1件 [`006dac04`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006da/006dac04.md) · 呼出先 1件 [`0043b7b8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b7b8.md)

変更の種類 call, call_count, cfg_edge_inventory, comparison, comparison_count, constant, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 0.00% / 新版 0.00%

優先判定に残った影響 `unresolved_call_alignment` 1件, `unresolved_store_alignment` 2件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:006f9ed8",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "unmatched:006f9ee4",
      "PARAM",
      [
        "storage",
        "002b7f4c",
        null,
        "string"
      ]
    ],
    [
      "unmatched:006f9ee8",
      "UNCONDITIONAL_CALL",
      [
        "mapped_function",
        "0043b7b8"
      ]
    ]
  ],
  "added": [
    [
      "006f9f30",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "006f9f3c",
      "PARAM",
      [
        "storage",
        "002b7f8c",
        null,
        "string"
      ]
    ],
    [
      "006f9f40",
      "UNCONDITIONAL_CALL",
      [
        "mapped_function",
        "0043b7b8"
      ]
    ]
  ]
}
~~~


~~~diff
- 006f9ed8 ["COPY", "tmp:0:8", ["register:40e8:8"]]
- 006f9ed8 ["COPY", "tmp:1:8", ["register:40f0:8"]]
- 006f9ed8 ["INT_ADD", "register:8:8", ["register:8:8", "const:fffffffffffffff0:8"]]
- 006f9ed8 ["STORE", null, ["const:1b1:8", "register:8:8", "tmp:0:8"]]
- 006f9edc ["COPY", "register:40e8:8", ["register:8:8"]]
- 006f9ee0 ["COPY", "register:4000:8", ["const:2b7000:8"]]
~~~


<a id="compare-552703e3e1293547753fe3d5af631e12"></a>

### [`006f9ef0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006f9/006f9ef0.md) → [`006f9f48`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006f9/006f9f48.md) FUN_006f9f48

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
      "unmatched:006f9f14",
      "DATA",
      [
        "storage",
        "00c76918",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "006f9f6c",
      "DATA",
      [
        "storage",
        "00c769e8",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 006f9f04 ["INT_ADD", "register:40f0:8", ["const:6f9f04:8", "const:4:8"]]
- 006f9f04 ["CALL", null, ["callee:00c57f60:8"]]
+ 006f9f5c ["INT_ADD", "register:40f0:8", ["const:6f9f5c:8", "const:4:8"]]
+ 006f9f5c ["CALL", null, ["callee:00c57f60:8"]]
- 006f9f10 ["COPY", "tmp:0:8", ["const:918:8"]]
- 006f9f10 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 006f9f10 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 006f9f10 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 006f9f14 ["COPY", "tmp:0:8", ["register:4040:8"]]
- 006f9f14 ["COPY", "tmp:1:8", ["register:4048:8"]]
- 006f9f14 ["COPY", "tmp:2:8", ["register:4000:8"]]
- 006f9f14 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
~~~


<a id="compare-f51125540cd1850c3ad729a0214ffcea"></a>

### [`006f9f24`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006f9/006f9f24.md) → [`006f9f7c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006f9/006f9f7c.md) FUN_006f9f7c

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 0件 
- 新版 呼出元 0件  · 呼出先 0件 

変更の種類 cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_return_alignment, unresolved_store_alignment

命令の説明率　旧版 0.00% / 新版 0.00%

優先判定に残った影響 `unresolved_return_alignment` 1件, `unresolved_store_alignment` 2件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:006f9f30",
      "DATA",
      [
        "storage",
        "00c76918",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "006f9f88",
      "DATA",
      [
        "storage",
        "00c769e8",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 006f9f24 ["INT_ADD", "tmp:0:8", ["register:4000:8", "const:8:8"]]
- 006f9f24 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
- 006f9f28 ["COPY", "register:4048:8", ["const:c76000:8"]]
- 006f9f2c ["COPY", "tmp:0:8", ["const:918:8"]]
- 006f9f2c ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 006f9f2c ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 006f9f2c ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
~~~


<a id="compare-45c8af1577fde235427bb896deefa327"></a>

### [`006f9f40`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006f9/006f9f40.md) → [`006f9f98`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006f9/006f9f98.md) FUN_006f9f98

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 3件 [`0047acf4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047a/0047acf4.md) [`0047cdd4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047c/0047cdd4.md) [`008b9178`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008b9/008b9178.md)
- 新版 呼出元 0件  · 呼出先 3件 [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md) [`0047ce14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047ce14.md) [`008b91d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b9/008b91d0.md)

変更の種類 call, call_target, constant, operands_and_dependencies

命令の説明率　旧版 92.86% / 新版 92.86%

優先判定に残った影響 `call_target` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_target",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "006f9fb0",
      "value": [
        "leaf",
        "ram:47ad34:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "006f9f58",
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
      "site": "006f9fdc",
      "value": [
        "leaf",
        "ram:47ad34:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "006f9f84",
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
      "006f9fb0",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047acf4"
      ]
    ],
    [
      "006f9fdc",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047acf4"
      ]
    ]
  ],
  "added": [
    [
      "006f9fb0",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ],
    [
      "006f9fdc",
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
- 006f9f58 ["INT_ADD", "register:40f0:8", ["const:6f9f58:8", "const:4:8"]]
- 006f9f58 ["CALL", null, ["ram:47acf4:8"]]
+ 006f9fb0 ["INT_ADD", "register:40f0:8", ["const:6f9fb0:8", "const:4:8"]]
+ 006f9fb0 ["CALL", null, ["ram:47ad34:8"]]
- 006f9f84 ["INT_ADD", "register:40f0:8", ["const:6f9f84:8", "const:4:8"]]
- 006f9f84 ["CALL", null, ["ram:47acf4:8"]]
+ 006f9fdc ["INT_ADD", "register:40f0:8", ["const:6f9fdc:8", "const:4:8"]]
+ 006f9fdc ["CALL", null, ["ram:47ad34:8"]]
- 006f9f90 ["INT_ADD", "register:40f0:8", ["const:6f9f90:8", "const:4:8"]]
- 006f9f90 ["CALL", null, ["callee:0047ce14:8"]]
+ 006f9fe8 ["INT_ADD", "register:40f0:8", ["const:6f9fe8:8", "const:4:8"]]
+ 006f9fe8 ["CALL", null, ["callee:0047ce14:8"]]
~~~


<a id="compare-49bbe4f0dc3bd1f7f43debdff1ad976a"></a>

### [`006f9fdc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006f9/006f9fdc.md) → [`006fa034`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006fa/006fa034.md) FUN_006fa034

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
      "definition_site": "006fa058",
      "incomplete_value": false,
      "site": "006fa058",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c76000:8"
          ],
          [
            "leaf",
            "const:a68:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "006fa000",
      "incomplete_value": false,
      "site": "006fa000",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c76000:8"
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
      "006fa058",
      "DATA",
      [
        "storage",
        "00c76998",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "006fa058",
      "DATA",
      [
        "storage",
        "00c76a68",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 006f9ff0 ["INT_ADD", "register:40f0:8", ["const:6f9ff0:8", "const:4:8"]]
- 006f9ff0 ["CALL", null, ["callee:00c57f60:8"]]
+ 006fa048 ["INT_ADD", "register:40f0:8", ["const:6fa048:8", "const:4:8"]]
+ 006fa048 ["CALL", null, ["callee:00c57f60:8"]]
- 006f9ffc ["COPY", "tmp:0:8", ["const:998:8"]]
- 006f9ffc ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 006f9ffc ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 006f9ffc ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 006fa054 ["COPY", "tmp:0:8", ["const:a68:8"]]
+ 006fa054 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 006fa054 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 006fa054 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-f2817b0a496381f8d6b5952951fea9a7"></a>

### [`006fa010`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006fa/006fa010.md) → [`006fa068`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006fa/006fa068.md) FUN_006fa068

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 0件 
- 新版 呼出元 0件  · 呼出先 0件 

変更の種類 cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_return_alignment, unresolved_store_alignment

命令の説明率　旧版 0.00% / 新版 0.00%

優先判定に残った影響 `unresolved_return_alignment` 1件, `unresolved_store_alignment` 2件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:006fa01c",
      "DATA",
      [
        "storage",
        "00c76998",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "006fa074",
      "DATA",
      [
        "storage",
        "00c76a68",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 006fa010 ["INT_ADD", "tmp:0:8", ["register:4000:8", "const:8:8"]]
- 006fa010 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
- 006fa014 ["COPY", "register:4048:8", ["const:c76000:8"]]
- 006fa018 ["COPY", "tmp:0:8", ["const:998:8"]]
- 006fa018 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 006fa018 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 006fa018 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
~~~


<a id="compare-47c1fcf3a67764e6c5b6c1422a99e82f"></a>

### [`006fa02c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006fa/006fa02c.md) → [`006fa084`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006fa/006fa084.md) FUN_006fa084

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `bounded` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 6件 [`00467860`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00467/00467860.md) [`0046a8e8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0046a/0046a8e8.md) [`0046c9c4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0046c/0046c9c4.md) [`008514f8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00851/008514f8.md) [`008b9290`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008b9/008b9290.md)
- 新版 呼出元 0件  · 呼出先 6件 [`004678a0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00467/004678a0.md) [`0046a928`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046a/0046a928.md) [`0046ca04`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046c/0046ca04.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md) [`008b92e8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b9/008b92e8.md)

変更の種類 branch_condition_or_target, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_store_alignment

命令の説明率　旧版 85.71% / 新版 85.71%

優先判定に残った影響 `unresolved_branch_alignment` 1件, `unresolved_store_alignment` 5件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:006fa02c",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "unmatched:006fa030",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "unmatched:006fa034",
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
      "006fa084",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "006fa088",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "006fa08c",
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
- 006fa02c ["COPY", "tmp:0:8", ["register:40e8:8"]]
- 006fa02c ["COPY", "tmp:1:8", ["register:40f0:8"]]
- 006fa02c ["INT_ADD", "register:8:8", ["register:8:8", "const:ffffffffffffffd0:8"]]
- 006fa02c ["STORE", null, ["const:1b1:8", "register:8:8", "tmp:0:8"]]
- 006fa030 ["INT_ADD", "tmp:0:8", ["register:8:8", "const:10:8"]]
- 006fa030 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:40a8:8"]]
- 006fa034 ["COPY", "tmp:0:8", ["register:40a0:8"]]
- 006fa034 ["COPY", "tmp:1:8", ["register:4098:8"]]
- 006fa034 ["INT_ADD", "tmp:2:8", ["register:8:8", "const:20:8"]]
- 006fa034 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
~~~


<a id="compare-2f73aa7bdb92a49e795ba433bc8dea3a"></a>

### [`006fa0e0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006fa/006fa0e0.md) → [`006fa138`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006fa/006fa138.md) FUN_006fa138

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 2件 [`006dbb6c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006db/006dbb6c.md) [`006dbda8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006db/006dbda8.md) · 呼出先 1件 [`0043b778`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043b778.md)
- 新版 呼出元 2件 [`006dbbc4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006db/006dbbc4.md) [`006dbe00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006db/006dbe00.md) · 呼出先 1件 [`0043b7b8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b7b8.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 80.00% / 新版 80.00%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "006fa144",
      "incomplete_value": false,
      "site": "006fa148",
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
      "definition_site": "006fa0ec",
      "incomplete_value": false,
      "site": "006fa0f0",
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
      "006fa144",
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
      "006fa144",
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
- 006fa0f0 ["INT_ADD", "register:40f0:8", ["const:6fa0f0:8", "const:4:8"]]
- 006fa0f0 ["CALL", null, ["callee:0043b7b8:8"]]
+ 006fa148 ["INT_ADD", "register:40f0:8", ["const:6fa148:8", "const:4:8"]]
+ 006fa148 ["CALL", null, ["callee:0043b7b8:8"]]
- 006fa0ec ["COPY", "tmp:0:8", ["const:f4c:8"]]
- 006fa0ec ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 006fa0ec ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 006fa0ec ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 006fa144 ["COPY", "tmp:0:8", ["const:f8c:8"]]
+ 006fa144 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 006fa144 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 006fa144 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
~~~


<a id="compare-205d5fc8261af55748ba9a8c1e6b3d1c"></a>

### [`006fa0f4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006fa/006fa0f4.md) → [`006fa14c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006fa/006fa14c.md) FUN_006fa14c

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `equal` · `cfg_change`

- 旧版 呼出元 3件 [`006dfdc8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006df/006dfdc8.md) [`006fa0f4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006fa/006fa0f4.md) [`00867068`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00867/00867068.md) · 呼出先 2件 [`006fa0f4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006fa/006fa0f4.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md)
- 新版 呼出元 3件 [`006dfe20`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006df/006dfe20.md) [`006fa14c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006fa/006fa14c.md) [`008670c0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00867/008670c0.md) · 呼出先 2件 [`006fa14c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006fa/006fa14c.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, constant, control_flow, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "006fa160",
      "incomplete_value": true,
      "site": "006fa168",
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
    "old": null,
    "ordinal": 0,
    "slot": 2
  }
]
~~~


~~~diff
- 006fa110 ["INT_ADD", "register:40f0:8", ["const:6fa110:8", "const:4:8"]]
- 006fa110 ["CALL", null, ["local:b0:8"]]
+ 006fa168 ["INT_ADD", "register:40f0:8", ["const:6fa168:8", "const:4:8"]]
+ 006fa168 ["CALL", null, ["local:b0:8"]]
- 006fa168 ["INT_RIGHT", "tmp:0:4", ["register:4040:4", "const:0:4"]]
- 006fa168 ["INT_AND", "tmp:1:4", ["tmp:0:4", "const:1:4"]]
- 006fa168 ["INT_EQUAL", "tmp:2:1", ["tmp:1:4", "const:0:4"]]
- 006fa168 ["INT_EQUAL", "tmp:3:1", ["tmp:2:1", "const:1:1"]]
+ 006fa1c0 ["INT_RIGHT", "tmp:0:4", ["register:4040:4", "const:0:4"]]
+ 006fa1c0 ["INT_AND", "tmp:1:4", ["tmp:0:4", "const:1:4"]]
+ 006fa1c0 ["INT_EQUAL", "tmp:2:1", ["tmp:1:4", "const:0:4"]]
+ 006fa1c0 ["INT_EQUAL", "tmp:3:1", ["tmp:2:1", "const:1:1"]]
- 006fa0f4 ["INT_EQUAL", "tmp:0:1", ["register:4008:8", "const:0:8"]]
- 006fa0f4 ["CBRANCH", null, ["local:b9:8", "tmp:0:1"]]
+ 006fa14c ["INT_EQUAL", "tmp:0:1", ["register:4008:8", "const:0:8"]]
+ 006fa14c ["CBRANCH", null, ["local:b8:8", "tmp:0:1"]]
~~~


<a id="compare-39e8af892b593378d48e22411683fec7"></a>

### [`006fa190`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006fa/006fa190.md) → [`006fa1e8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006fa/006fa1e8.md) FUN_006fa1e8

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `equal` · `cfg_change`

- 旧版 呼出元 1件 [`006dfdc8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006df/006dfdc8.md) · 呼出先 2件 [`0043bba4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043bba4.md) [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md)
- 新版 呼出元 1件 [`006dfe20`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006df/006dfe20.md) · 呼出先 2件 [`0043bbe4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bbe4.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)

変更の種類 branch_condition_or_target, constant, control_flow, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, return_value_candidate, unresolved_store_alignment

命令の説明率　旧版 98.77% / 新版 98.77%

優先判定に残った影響 `return_value_candidate` 1件, `unresolved_store_alignment` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "return_value_candidate",
    "new": {
      "definition_site": "006fa314",
      "incomplete_value": true,
      "site": "006fa328",
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


~~~diff
- 006fa1e0 ["INT_EQUAL", "tmp:0:1", ["register:100:1", "register:103:1"]]
- 006fa1e0 ["CBRANCH", null, ["local:b11:8", "tmp:0:1"]]
+ 006fa238 ["INT_EQUAL", "tmp:0:1", ["register:100:1", "register:103:1"]]
+ 006fa238 ["CBRANCH", null, ["local:b12:8", "tmp:0:1"]]
- 006fa200 ["INT_ADD", "register:40f0:8", ["const:6fa200:8", "const:4:8"]]
- 006fa200 ["CALL", null, ["callee:00c57f60:8"]]
+ 006fa258 ["INT_ADD", "register:40f0:8", ["const:6fa258:8", "const:4:8"]]
+ 006fa258 ["CALL", null, ["callee:00c57f60:8"]]
- 006fa2a0 ["INT_ADD", "register:40f0:8", ["const:6fa2a0:8", "const:4:8"]]
- 006fa2a0 ["CALL", null, ["callee:0043bbe4:8"]]
+ 006fa2f8 ["INT_ADD", "register:40f0:8", ["const:6fa2f8:8", "const:4:8"]]
+ 006fa2f8 ["CALL", null, ["callee:0043bbe4:8"]]
~~~


<a id="compare-c6d3ae26083ff89dbcf63318d48d5394"></a>

### [`006fb0e8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006fb/006fb0e8.md) → [`006fb140`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006fb/006fb140.md) FUN_006fb140

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
      "definition_site": "006fb154",
      "incomplete_value": false,
      "site": "006fb158",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c76000:8"
          ],
          [
            "leaf",
            "const:ae8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "006fb0fc",
      "incomplete_value": false,
      "site": "006fb100",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c76000:8"
          ],
          [
            "leaf",
            "const:a18:8"
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
      "006fb158",
      "DATA",
      [
        "storage",
        "00c76a18",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "006fb158",
      "DATA",
      [
        "storage",
        "00c76ae8",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 006fb0f4 ["INT_ADD", "register:40f0:8", ["const:6fb0f4:8", "const:4:8"]]
- 006fb0f4 ["CALL", null, ["callee:00c57f60:8"]]
+ 006fb14c ["INT_ADD", "register:40f0:8", ["const:6fb14c:8", "const:4:8"]]
+ 006fb14c ["CALL", null, ["callee:00c57f60:8"]]
- 006fb0fc ["COPY", "tmp:0:8", ["const:a18:8"]]
- 006fb0fc ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 006fb0fc ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 006fb0fc ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 006fb154 ["COPY", "tmp:0:8", ["const:ae8:8"]]
+ 006fb154 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 006fb154 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 006fb154 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-bd3822eb34b3b0c133cc1d15e574c8f9"></a>

### [`006fb10c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006fb/006fb10c.md) → [`006fb164`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006fb/006fb164.md) FUN_006fb164

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
      "definition_site": "006fb168",
      "incomplete_value": false,
      "site": "006fb16c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c76000:8"
          ],
          [
            "leaf",
            "const:ae8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "006fb110",
      "incomplete_value": false,
      "site": "006fb114",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c76000:8"
          ],
          [
            "leaf",
            "const:a18:8"
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
      "006fb16c",
      "DATA",
      [
        "storage",
        "00c76a18",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "006fb16c",
      "DATA",
      [
        "storage",
        "00c76ae8",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 006fb110 ["COPY", "tmp:0:8", ["const:a18:8"]]
- 006fb110 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 006fb110 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 006fb110 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 006fb168 ["COPY", "tmp:0:8", ["const:ae8:8"]]
+ 006fb168 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 006fb168 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 006fb168 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-3b7a2ad6c36913764d379fdb1ef1f47c"></a>

### [`006fb18c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006fb/006fb18c.md) → [`006fb1e4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006fb/006fb1e4.md) FUN_006fb1e4

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
      "definition_site": "006fb208",
      "incomplete_value": false,
      "site": "006fb20c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c76000:8"
          ],
          [
            "leaf",
            "const:b68:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "006fb1b0",
      "incomplete_value": false,
      "site": "006fb1b4",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c76000:8"
          ],
          [
            "leaf",
            "const:a98:8"
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
      "006fb20c",
      "DATA",
      [
        "storage",
        "00c76a98",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "006fb20c",
      "DATA",
      [
        "storage",
        "00c76b68",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 006fb1a0 ["INT_ADD", "register:40f0:8", ["const:6fb1a0:8", "const:4:8"]]
- 006fb1a0 ["CALL", null, ["callee:00c57f60:8"]]
+ 006fb1f8 ["INT_ADD", "register:40f0:8", ["const:6fb1f8:8", "const:4:8"]]
+ 006fb1f8 ["CALL", null, ["callee:00c57f60:8"]]
- 006fb1b0 ["COPY", "tmp:0:8", ["const:a98:8"]]
- 006fb1b0 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 006fb1b0 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 006fb1b0 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 006fb208 ["COPY", "tmp:0:8", ["const:b68:8"]]
+ 006fb208 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 006fb208 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 006fb208 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-897737c3ee4cf0661ef674f9c4adcc75"></a>

### [`006fb1f4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006fb/006fb1f4.md) → [`006fb24c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006fb/006fb24c.md) FUN_006fb24c

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 24件 [`0043b764`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043b764.md) [`0046d490`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0046d/0046d490.md) [`0047acf4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047a/0047acf4.md) [`0047cdd4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047c/0047cdd4.md) [`0048ce54`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0048c/0048ce54.md)
- 新版 呼出元 0件  · 呼出先 24件 [`0043b7a4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b7a4.md) [`0046d4d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046d/0046d4d0.md) [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md) [`0047ce14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047ce14.md) [`0048ce94`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048c/0048ce94.md)

変更の種類 call, call_argument_candidate, call_target, constant, operands_and_dependencies, store_value

命令の説明率　旧版 95.31% / 新版 95.31%

優先判定に残った影響 `call_argument_candidate` 1件, `call_target` 4件, `store_value` 4件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "006fb370",
      "incomplete_value": true,
      "site": "006fb384",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:f10:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "006fb318",
      "incomplete_value": true,
      "site": "006fb32c",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:edf:8"
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
      "definition_site": "006fb3d0",
      "incomplete_value": true,
      "site": "006fb3d0",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:c37:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "006fb378",
      "incomplete_value": true,
      "site": "006fb378",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:c8b:8"
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
      "definition_site": "006fb3d4",
      "incomplete_value": true,
      "site": "006fb3d4",
      "value": [
        "LOAD",
        "8",
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
      "definition_site": "006fb37c",
      "incomplete_value": true,
      "site": "006fb37c",
      "value": [
        "LOAD",
        "8",
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
      "006fb298",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047acf4"
      ]
    ],
    [
      "006fb2fc",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "006edde4"
      ]
    ],
    [
      "006fb320",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0063c588"
      ]
    ]
  ],
  "added": [
    [
      "006fb298",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ],
    [
      "006fb2fc",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "006ede3c"
      ]
    ],
    [
      "006fb320",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0063c5c8"
      ]
    ]
  ]
}
~~~


~~~diff
- 006fb240 ["INT_ADD", "register:40f0:8", ["const:6fb240:8", "const:4:8"]]
- 006fb240 ["CALL", null, ["ram:47acf4:8"]]
+ 006fb298 ["INT_ADD", "register:40f0:8", ["const:6fb298:8", "const:4:8"]]
+ 006fb298 ["CALL", null, ["ram:47ad34:8"]]
- 006fb24c ["INT_ADD", "register:40f0:8", ["const:6fb24c:8", "const:4:8"]]
- 006fb24c ["CALL", null, ["callee:0047ce14:8"]]
+ 006fb2a4 ["INT_ADD", "register:40f0:8", ["const:6fb2a4:8", "const:4:8"]]
+ 006fb2a4 ["CALL", null, ["callee:0047ce14:8"]]
- 006fb2a4 ["INT_ADD", "register:40f0:8", ["const:6fb2a4:8", "const:4:8"]]
- 006fb2a4 ["CALL", null, ["ram:6edde4:8"]]
+ 006fb2fc ["INT_ADD", "register:40f0:8", ["const:6fb2fc:8", "const:4:8"]]
+ 006fb2fc ["CALL", null, ["ram:6ede3c:8"]]
~~~


<a id="compare-7955a3284275f3bd78866abac4c5354c"></a>

### [`006fb8c0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006fb/006fb8c0.md) → [`006fb918`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006fb/006fb918.md) FUN_006fb918

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
      "definition_site": "006fb93c",
      "incomplete_value": false,
      "site": "006fb93c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c76000:8"
          ],
          [
            "leaf",
            "const:bd8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "006fb8e4",
      "incomplete_value": false,
      "site": "006fb8e4",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c76000:8"
          ],
          [
            "leaf",
            "const:b08:8"
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
      "006fb93c",
      "DATA",
      [
        "storage",
        "00c76b08",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "006fb93c",
      "DATA",
      [
        "storage",
        "00c76bd8",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 006fb8d4 ["INT_ADD", "register:40f0:8", ["const:6fb8d4:8", "const:4:8"]]
- 006fb8d4 ["CALL", null, ["callee:00c57f60:8"]]
+ 006fb92c ["INT_ADD", "register:40f0:8", ["const:6fb92c:8", "const:4:8"]]
+ 006fb92c ["CALL", null, ["callee:00c57f60:8"]]
- 006fb8e0 ["COPY", "tmp:0:8", ["const:b08:8"]]
- 006fb8e0 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 006fb8e0 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 006fb8e0 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 006fb938 ["COPY", "tmp:0:8", ["const:bd8:8"]]
+ 006fb938 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 006fb938 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 006fb938 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-3fc56fc8b2af62beb69dbcf8018bc30d"></a>

### [`006fb8f4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006fb/006fb8f4.md) → [`006fb94c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006fb/006fb94c.md) FUN_006fb94c

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
      "definition_site": "006fb958",
      "incomplete_value": false,
      "site": "006fb958",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c76000:8"
          ],
          [
            "leaf",
            "const:bd8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "006fb900",
      "incomplete_value": false,
      "site": "006fb900",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c76000:8"
          ],
          [
            "leaf",
            "const:b08:8"
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
      "006fb958",
      "DATA",
      [
        "storage",
        "00c76b08",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "006fb958",
      "DATA",
      [
        "storage",
        "00c76bd8",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 006fb8fc ["COPY", "tmp:0:8", ["const:b08:8"]]
- 006fb8fc ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 006fb8fc ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 006fb8fc ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 006fb954 ["COPY", "tmp:0:8", ["const:bd8:8"]]
+ 006fb954 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 006fb954 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 006fb954 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
~~~


<a id="compare-9a44c465944e72490de6f6daabc369ad"></a>

### [`006fb910`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006fb/006fb910.md) → [`006fb968`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006fb/006fb968.md) FUN_006fb968

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 9件 [`0047acf4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047a/0047acf4.md) [`0047cdd4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047c/0047cdd4.md) [`006b2424`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006b2/006b2424.md) [`006ea588`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006ea/006ea588.md) [`006f0500`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006f0/006f0500.md)
- 新版 呼出元 0件  · 呼出先 9件 [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md) [`0047ce14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047ce14.md) [`006b247c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006b2/006b247c.md) [`006ea5e0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006ea/006ea5e0.md) [`006f0558`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006f0/006f0558.md)

変更の種類 call, call_count, call_target, constant, control_flow, operands_and_dependencies, operation_sequence, unresolved_call_alignment

命令の説明率　旧版 95.24% / 新版 95.24%

優先判定に残った影響 `call_target` 1件, `unresolved_call_alignment` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_target",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "006fba3c",
      "value": [
        "leaf",
        "ram:6f0558:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "006fb9e4",
      "value": [
        "leaf",
        "ram:6f0500:8"
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
      "unmatched:006fb93c",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047acf4"
      ]
    ],
    [
      "006fba3c",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "006f0500"
      ]
    ],
    [
      "006fba54",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "006ea588"
      ]
    ]
  ],
  "added": [
    [
      "006fb994",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ],
    [
      "006fba3c",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "006f0558"
      ]
    ],
    [
      "006fba54",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "006ea5e0"
      ]
    ]
  ]
}
~~~


~~~diff
- 006fb9e4 ["INT_ADD", "register:40f0:8", ["const:6fb9e4:8", "const:4:8"]]
- 006fb9e4 ["CALL", null, ["ram:6f0500:8"]]
+ 006fba3c ["INT_ADD", "register:40f0:8", ["const:6fba3c:8", "const:4:8"]]
+ 006fba3c ["CALL", null, ["ram:6f0558:8"]]
- 006fb93c ["INT_ADD", "register:40f0:8", ["const:6fb93c:8", "const:4:8"]]
- 006fb93c ["CALL", null, ["ram:47acf4:8"]]
- 006fb948 ["INT_ADD", "register:40f0:8", ["const:6fb948:8", "const:4:8"]]
- 006fb948 ["CALL", null, ["callee:0047ce14:8"]]
+ 006fb9a0 ["INT_ADD", "register:40f0:8", ["const:6fb9a0:8", "const:4:8"]]
+ 006fb9a0 ["CALL", null, ["callee:0047ce14:8"]]
~~~


<a id="compare-f1f9ab55799e4878424a2103483c8c9e"></a>

### [`006fba38`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006fb/006fba38.md) → [`006fba90`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006fb/006fba90.md) FUN_006fba90

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
      "definition_site": "006fbab0",
      "incomplete_value": false,
      "site": "006fbab4",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c76000:8"
          ],
          [
            "leaf",
            "const:c68:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "006fba58",
      "incomplete_value": false,
      "site": "006fba5c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c76000:8"
          ],
          [
            "leaf",
            "const:b98:8"
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
      "006fbab4",
      "DATA",
      [
        "storage",
        "00c76b98",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "006fbab4",
      "DATA",
      [
        "storage",
        "00c76c68",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 006fba4c ["INT_ADD", "register:40f0:8", ["const:6fba4c:8", "const:4:8"]]
- 006fba4c ["CALL", null, ["callee:00c57f60:8"]]
+ 006fbaa4 ["INT_ADD", "register:40f0:8", ["const:6fbaa4:8", "const:4:8"]]
+ 006fbaa4 ["CALL", null, ["callee:00c57f60:8"]]
- 006fba58 ["COPY", "tmp:0:8", ["const:b98:8"]]
- 006fba58 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 006fba58 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 006fba58 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 006fbab0 ["COPY", "tmp:0:8", ["const:c68:8"]]
+ 006fbab0 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 006fbab0 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 006fbab0 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-eabf64ffc34c9f350c4bc6dd6aa41ef6"></a>

### [`006fbc5c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006fb/006fbc5c.md) → [`006fbcb4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006fb/006fbcb4.md) FUN_006fbcb4

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
      "definition_site": "006fbcd8",
      "incomplete_value": false,
      "site": "006fbcd8",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c76000:8"
          ],
          [
            "leaf",
            "const:ce8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "006fbc80",
      "incomplete_value": false,
      "site": "006fbc80",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c76000:8"
          ],
          [
            "leaf",
            "const:c18:8"
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
      "006fbcd8",
      "DATA",
      [
        "storage",
        "00c76c18",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "006fbcd8",
      "DATA",
      [
        "storage",
        "00c76ce8",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 006fbc70 ["INT_ADD", "register:40f0:8", ["const:6fbc70:8", "const:4:8"]]
- 006fbc70 ["CALL", null, ["callee:00c57f60:8"]]
+ 006fbcc8 ["INT_ADD", "register:40f0:8", ["const:6fbcc8:8", "const:4:8"]]
+ 006fbcc8 ["CALL", null, ["callee:00c57f60:8"]]
- 006fbc7c ["COPY", "tmp:0:8", ["const:c18:8"]]
- 006fbc7c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 006fbc7c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 006fbc7c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 006fbcd4 ["COPY", "tmp:0:8", ["const:ce8:8"]]
+ 006fbcd4 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 006fbcd4 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 006fbcd4 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-5b0dd6ecb2dfffe2c62ebefe8bf91742"></a>

### [`006fbcac`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006fb/006fbcac.md) → [`006fbd04`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006fb/006fbd04.md) FUN_006fbd04

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 9件 [`0047acf4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047a/0047acf4.md) [`0047cdd4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047c/0047cdd4.md) [`006b2424`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006b2/006b2424.md) [`006ea588`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006ea/006ea588.md) [`006f0500`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006f0/006f0500.md)
- 新版 呼出元 0件  · 呼出先 9件 [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md) [`0047ce14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047ce14.md) [`006b247c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006b2/006b247c.md) [`006ea5e0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006ea/006ea5e0.md) [`006f0558`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006f0/006f0558.md)

変更の種類 call, call_target, constant, control_flow, operands_and_dependencies

命令の説明率　旧版 95.24% / 新版 95.24%

優先判定に残った影響 `call_target` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_target",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "006fbd30",
      "value": [
        "leaf",
        "ram:47ad34:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "006fbcd8",
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
      "site": "006fbdd8",
      "value": [
        "leaf",
        "ram:6f0558:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "006fbd80",
      "value": [
        "leaf",
        "ram:6f0500:8"
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
      "006fbd30",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047acf4"
      ]
    ],
    [
      "006fbdd8",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "006f0500"
      ]
    ],
    [
      "006fbdf0",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "006ea588"
      ]
    ]
  ],
  "added": [
    [
      "006fbd30",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ],
    [
      "006fbdd8",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "006f0558"
      ]
    ],
    [
      "006fbdf0",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "006ea5e0"
      ]
    ]
  ]
}
~~~


~~~diff
- 006fbcd8 ["INT_ADD", "register:40f0:8", ["const:6fbcd8:8", "const:4:8"]]
- 006fbcd8 ["CALL", null, ["ram:47acf4:8"]]
+ 006fbd30 ["INT_ADD", "register:40f0:8", ["const:6fbd30:8", "const:4:8"]]
+ 006fbd30 ["CALL", null, ["ram:47ad34:8"]]
- 006fbd80 ["INT_ADD", "register:40f0:8", ["const:6fbd80:8", "const:4:8"]]
- 006fbd80 ["CALL", null, ["ram:6f0500:8"]]
+ 006fbdd8 ["INT_ADD", "register:40f0:8", ["const:6fbdd8:8", "const:4:8"]]
+ 006fbdd8 ["CALL", null, ["ram:6f0558:8"]]
- 006fbce4 ["INT_ADD", "register:40f0:8", ["const:6fbce4:8", "const:4:8"]]
- 006fbce4 ["CALL", null, ["callee:0047ce14:8"]]
+ 006fbd3c ["INT_ADD", "register:40f0:8", ["const:6fbd3c:8", "const:4:8"]]
+ 006fbd3c ["CALL", null, ["callee:0047ce14:8"]]
~~~


<a id="compare-b8a959f96ec4ef6a18eab7fc7897f53b"></a>

### [`006fbdd0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006fb/006fbdd0.md) → [`006fbe28`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006fb/006fbe28.md) FUN_006fbe28

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 3件 [`006e53d4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006e5/006e53d4.md) [`006fbdd0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006fb/006fbdd0.md) [`006fc15c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006fc/006fc15c.md) · 呼出先 5件 [`006e4ac4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006e4/006e4ac4.md) [`006fbdd0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006fb/006fbdd0.md) [`006fc15c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006fc/006fc15c.md) [`006fc4ac`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006fc/006fc4ac.md) [`008514f8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00851/008514f8.md)
- 新版 呼出元 3件 [`006e542c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006e5/006e542c.md) [`006fbe28`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006fb/006fbe28.md) [`006fc1b4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006fc/006fc1b4.md) · 呼出先 5件 [`006e4b1c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006e4/006e4b1c.md) [`006fbe28`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006fb/006fbe28.md) [`006fc1b4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006fc/006fc1b4.md) [`006fc504`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006fc/006fc504.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)

変更の種類 branch_condition_or_target, constant, control_flow, control_flow_count, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_store_alignment

命令の説明率　旧版 94.71% / 新版 94.71%

優先判定に残った影響 `unresolved_branch_alignment` 2件, `unresolved_store_alignment` 2件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:006fc0b0",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "006fc0f0"
      ]
    ],
    [
      "006fc164",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "006fc118"
      ]
    ],
    [
      "006fc14c",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "unmatched:006fc114"
      ]
    ]
  ],
  "added": [
    [
      "006fc108",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "006fc0f0"
      ]
    ],
    [
      "006fc124",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "006fc118"
      ]
    ],
    [
      "006fc14c",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "006fc16c"
      ]
    ]
  ]
}
~~~


~~~diff
- 006fbe1c ["INT_ADD", "register:40f0:8", ["const:6fbe1c:8", "const:4:8"]]
- 006fbe1c ["CALL", null, ["callee:00851550:8"]]
+ 006fbe74 ["INT_ADD", "register:40f0:8", ["const:6fbe74:8", "const:4:8"]]
+ 006fbe74 ["CALL", null, ["callee:00851550:8"]]
- 006fbe28 ["INT_ADD", "register:40f0:8", ["const:6fbe28:8", "const:4:8"]]
- 006fbe28 ["CALL", null, ["callee:006e4b1c:8"]]
+ 006fbe80 ["INT_ADD", "register:40f0:8", ["const:6fbe80:8", "const:4:8"]]
+ 006fbe80 ["CALL", null, ["callee:006e4b1c:8"]]
- 006fbe30 ["INT_ADD", "register:40f0:8", ["const:6fbe30:8", "const:4:8"]]
- 006fbe30 ["CALL", null, ["callee:00851550:8"]]
+ 006fbe88 ["INT_ADD", "register:40f0:8", ["const:6fbe88:8", "const:4:8"]]
+ 006fbe88 ["CALL", null, ["callee:00851550:8"]]
~~~


<a id="compare-a0414f8a9547affced01879644475ee0"></a>

### [`006fc15c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006fc/006fc15c.md) → [`006fc1b4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006fc/006fc1b4.md) FUN_006fc1b4

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`006fbdd0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006fb/006fbdd0.md) · 呼出先 3件 [`006e4ac4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006e4/006e4ac4.md) [`006fbdd0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006fb/006fbdd0.md) [`008514f8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00851/008514f8.md)
- 新版 呼出元 1件 [`006fbe28`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006fb/006fbe28.md) · 呼出先 3件 [`006e4b1c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006e4/006e4b1c.md) [`006fbe28`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006fb/006fbe28.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)

変更の種類 branch_condition_or_target, call, call_argument_candidate, call_count, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, operands_and_dependencies, operation_sequence, store_condition, unresolved_branch_alignment, unresolved_call_alignment

命令の説明率　旧版 95.75% / 新版 95.75%

優先判定に残った影響 `call_argument_candidate` 2件, `store_condition` 1件, `unresolved_branch_alignment` 1件, `unresolved_call_alignment` 3件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "006fc264",
      "incomplete_value": true,
      "site": "006fc26c",
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
    "ordinal": 7,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "006fc268",
      "incomplete_value": false,
      "site": "006fc26c",
      "value": [
        "leaf",
        "const:2c:8"
      ]
    },
    "ordinal": 7,
    "slot": 3
  },
  {
    "confidence": "limited",
    "guard": [
      [
        "FALL_THROUGH",
        "006fc278"
      ],
      [
        "FALL_THROUGH",
        "006fc2d0"
      ]
    ],
    "kind": "store_condition",
    "new": {
      "definition_site": "006fc2d0",
      "incomplete_value": true,
      "site": "006fc2e0",
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
                "register:40b8:4"
              ],
              [
                "live",
                "register:4000:4"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "006fc278",
      "incomplete_value": true,
      "site": "006fc288",
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
    "ordinal": 16,
    "slot": 0
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:006fc278",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "006fc284"
      ]
    ],
    [
      "unmatched:006fc2a0",
      "UNCONDITIONAL_CALL",
      [
        "mapped_function",
        "00851550"
      ]
    ],
    [
      "unmatched:006fc2ac",
      "UNCONDITIONAL_CALL",
      [
        "mapped_function",
        "006e4b1c"
      ]
    ]
  ],
  "added": [
    [
      "006fc2d0",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "006fc284"
      ]
    ],
    [
      "006fc2f8",
      "UNCONDITIONAL_CALL",
      [
        "mapped_function",
        "00851550"
      ]
    ],
    [
      "006fc304",
      "UNCONDITIONAL_CALL",
      [
        "mapped_function",
        "006e4b1c"
      ]
    ]
  ]
}
~~~


~~~diff
- 006fc26c ["INT_ADD", "register:40f0:8", ["const:6fc26c:8", "const:4:8"]]
- 006fc26c ["CALL", null, ["callee:006e4b1c:8"]]
+ 006fc2c4 ["INT_ADD", "register:40f0:8", ["const:6fc2c4:8", "const:4:8"]]
+ 006fc2c4 ["CALL", null, ["callee:006e4b1c:8"]]
- 006fc1a0 ["INT_ADD", "register:40f0:8", ["const:6fc1a0:8", "const:4:8"]]
- 006fc1a0 ["CALL", null, ["callee:00851550:8"]]
+ 006fc1f8 ["INT_ADD", "register:40f0:8", ["const:6fc1f8:8", "const:4:8"]]
+ 006fc1f8 ["CALL", null, ["callee:00851550:8"]]
- 006fc1ac ["INT_ADD", "register:40f0:8", ["const:6fc1ac:8", "const:4:8"]]
- 006fc1ac ["CALL", null, ["callee:006e4b1c:8"]]
+ 006fc204 ["INT_ADD", "register:40f0:8", ["const:6fc204:8", "const:4:8"]]
+ 006fc204 ["CALL", null, ["callee:006e4b1c:8"]]
~~~


<a id="compare-cf85c7ad4e390dd112746095959273c6"></a>

### [`006fd91c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006fd/006fd91c.md) → [`006fd974`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006fd/006fd974.md) FUN_006fd974

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
      "definition_site": "006fd988",
      "incomplete_value": false,
      "site": "006fd98c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c76000:8"
          ],
          [
            "leaf",
            "const:d68:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "006fd930",
      "incomplete_value": false,
      "site": "006fd934",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c76000:8"
          ],
          [
            "leaf",
            "const:c98:8"
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
      "006fd98c",
      "DATA",
      [
        "storage",
        "00c76c98",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "006fd98c",
      "DATA",
      [
        "storage",
        "00c76d68",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 006fd928 ["INT_ADD", "register:40f0:8", ["const:6fd928:8", "const:4:8"]]
- 006fd928 ["CALL", null, ["callee:00c57f60:8"]]
+ 006fd980 ["INT_ADD", "register:40f0:8", ["const:6fd980:8", "const:4:8"]]
+ 006fd980 ["CALL", null, ["callee:00c57f60:8"]]
- 006fd930 ["COPY", "tmp:0:8", ["const:c98:8"]]
- 006fd930 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 006fd930 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 006fd930 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 006fd988 ["COPY", "tmp:0:8", ["const:d68:8"]]
+ 006fd988 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 006fd988 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 006fd988 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-6dcbee0929e7558483372102b80f45a5"></a>

### [`006fd958`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006fd/006fd958.md) → [`006fd9b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006fd/006fd9b0.md) FUN_006fd9b0

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
      "site": "006fd9cc",
      "value": [
        "leaf",
        "ram:47ad34:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "006fd974",
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
      "006fd9cc",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047acf4"
      ]
    ]
  ],
  "added": [
    [
      "006fd9cc",
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
- 006fd974 ["INT_ADD", "register:40f0:8", ["const:6fd974:8", "const:4:8"]]
- 006fd974 ["CALL", null, ["ram:47acf4:8"]]
+ 006fd9cc ["INT_ADD", "register:40f0:8", ["const:6fd9cc:8", "const:4:8"]]
+ 006fd9cc ["CALL", null, ["ram:47ad34:8"]]
- 006fd980 ["INT_ADD", "register:40f0:8", ["const:6fd980:8", "const:4:8"]]
- 006fd980 ["CALL", null, ["callee:0047ce14:8"]]
+ 006fd9d8 ["INT_ADD", "register:40f0:8", ["const:6fd9d8:8", "const:4:8"]]
+ 006fd9d8 ["CALL", null, ["callee:0047ce14:8"]]
~~~


<a id="compare-f9d009e20ccbab3617b93986a738539f"></a>

### [`006fd9c4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006fd/006fd9c4.md) → [`006fda1c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006fd/006fda1c.md) FUN_006fda1c

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
      "definition_site": "006fda40",
      "incomplete_value": false,
      "site": "006fda44",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c76000:8"
          ],
          [
            "leaf",
            "const:de8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "006fd9e8",
      "incomplete_value": false,
      "site": "006fd9ec",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c76000:8"
          ],
          [
            "leaf",
            "const:d18:8"
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
      "006fda44",
      "DATA",
      [
        "storage",
        "00c76d18",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "006fda44",
      "DATA",
      [
        "storage",
        "00c76de8",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 006fd9d8 ["INT_ADD", "register:40f0:8", ["const:6fd9d8:8", "const:4:8"]]
- 006fd9d8 ["CALL", null, ["callee:00c57f60:8"]]
+ 006fda30 ["INT_ADD", "register:40f0:8", ["const:6fda30:8", "const:4:8"]]
+ 006fda30 ["CALL", null, ["callee:00c57f60:8"]]
- 006fd9e8 ["COPY", "tmp:0:8", ["const:d18:8"]]
- 006fd9e8 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 006fd9e8 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 006fd9e8 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 006fda40 ["COPY", "tmp:0:8", ["const:de8:8"]]
+ 006fda40 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 006fda40 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 006fda40 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-e7d8c93c4890aa00b4ea395c13ca4150"></a>

### [`006fda2c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006fd/006fda2c.md) → [`006fda84`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006fd/006fda84.md) FUN_006fda84

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 20件 [`0043bb20`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043bb20.md) [`0046d490`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0046d/0046d490.md) [`0047acf4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047a/0047acf4.md) [`0047cdd4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047c/0047cdd4.md) [`0048ce54`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0048c/0048ce54.md)
- 新版 呼出元 0件  · 呼出先 21件 [`0043bb60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bb60.md) [`0044d730`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0044d/0044d730.md) [`0046d4d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046d/0046d4d0.md) [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md) [`0047ce14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047ce14.md)

変更の種類 call, call_argument_candidate, call_target, constant, operands_and_dependencies, store_value

命令の説明率　旧版 93.62% / 新版 93.62%

優先判定に残った影響 `call_argument_candidate` 2件, `call_target` 3件, `store_value` 6件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "006fdb88",
      "incomplete_value": true,
      "site": "006fdb9c",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:f10:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "006fdb30",
      "incomplete_value": true,
      "site": "006fdb44",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:edf:8"
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
      "definition_site": "006fdbdc",
      "incomplete_value": true,
      "site": "006fdbdc",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:c37:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "006fdb84",
      "incomplete_value": true,
      "site": "006fdb84",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:c8b:8"
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
      "definition_site": "006fdbe0",
      "incomplete_value": true,
      "site": "006fdbe0",
      "value": [
        "LOAD",
        "8",
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
      "definition_site": "006fdb88",
      "incomplete_value": true,
      "site": "006fdb88",
      "value": [
        "LOAD",
        "8",
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
      "006fdad0",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047acf4"
      ]
    ],
    [
      "006fdb30",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "006edde4"
      ]
    ],
    [
      "006fdb54",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0063c588"
      ]
    ]
  ],
  "added": [
    [
      "006fdad0",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ],
    [
      "006fdb30",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "006ede3c"
      ]
    ],
    [
      "006fdb54",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0063c5c8"
      ]
    ]
  ]
}
~~~


~~~diff
- 006fda78 ["INT_ADD", "register:40f0:8", ["const:6fda78:8", "const:4:8"]]
- 006fda78 ["CALL", null, ["ram:47acf4:8"]]
+ 006fdad0 ["INT_ADD", "register:40f0:8", ["const:6fdad0:8", "const:4:8"]]
+ 006fdad0 ["CALL", null, ["ram:47ad34:8"]]
- 006fdad8 ["INT_ADD", "register:40f0:8", ["const:6fdad8:8", "const:4:8"]]
- 006fdad8 ["CALL", null, ["ram:6edde4:8"]]
+ 006fdb30 ["INT_ADD", "register:40f0:8", ["const:6fdb30:8", "const:4:8"]]
+ 006fdb30 ["CALL", null, ["ram:6ede3c:8"]]
- 006fdafc ["INT_ADD", "register:40f0:8", ["const:6fdafc:8", "const:4:8"]]
- 006fdafc ["CALL", null, ["ram:63c588:8"]]
+ 006fdb54 ["INT_ADD", "register:40f0:8", ["const:6fdb54:8", "const:4:8"]]
+ 006fdb54 ["CALL", null, ["ram:63c5c8:8"]]
~~~


<a id="compare-cc60c0a26c44c9b22dc3a93d750f5292"></a>

### [`006fe138`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006fe/006fe138.md) → [`006fe190`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006fe/006fe190.md) FUN_006fe190

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
      "definition_site": "006fe1b0",
      "incomplete_value": false,
      "site": "006fe1b4",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c76000:8"
          ],
          [
            "leaf",
            "const:e58:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "006fe158",
      "incomplete_value": false,
      "site": "006fe15c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c76000:8"
          ],
          [
            "leaf",
            "const:d88:8"
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
      "006fe1b4",
      "DATA",
      [
        "storage",
        "00c76d88",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "006fe1b4",
      "DATA",
      [
        "storage",
        "00c76e58",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 006fe14c ["INT_ADD", "register:40f0:8", ["const:6fe14c:8", "const:4:8"]]
- 006fe14c ["CALL", null, ["callee:00c57f60:8"]]
+ 006fe1a4 ["INT_ADD", "register:40f0:8", ["const:6fe1a4:8", "const:4:8"]]
+ 006fe1a4 ["CALL", null, ["callee:00c57f60:8"]]
- 006fe158 ["COPY", "tmp:0:8", ["const:d88:8"]]
- 006fe158 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 006fe158 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 006fe158 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 006fe1b0 ["COPY", "tmp:0:8", ["const:e58:8"]]
+ 006fe1b0 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 006fe1b0 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 006fe1b0 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-f5b1c5de672243b546bfc7f514413a71"></a>

### [`006fe170`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006fe/006fe170.md) → [`006fe1c8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006fe/006fe1c8.md) FUN_006fe1c8

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
      "definition_site": "006fe1cc",
      "incomplete_value": false,
      "site": "006fe1d0",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c76000:8"
          ],
          [
            "leaf",
            "const:e58:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "006fe174",
      "incomplete_value": false,
      "site": "006fe178",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c76000:8"
          ],
          [
            "leaf",
            "const:d88:8"
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
      "006fe1d0",
      "DATA",
      [
        "storage",
        "00c76d88",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "006fe1d0",
      "DATA",
      [
        "storage",
        "00c76e58",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 006fe174 ["COPY", "tmp:0:8", ["const:d88:8"]]
- 006fe174 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 006fe174 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 006fe174 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 006fe1cc ["COPY", "tmp:0:8", ["const:e58:8"]]
+ 006fe1cc ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 006fe1cc ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 006fe1cc ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-15967163035d05520223e1ad803871e9"></a>

### [`006fe190`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006fe/006fe190.md) → [`006fe1e8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006fe/006fe1e8.md) FUN_006fe1e8

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 6件 [`0047acf4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047a/0047acf4.md) [`0047cdd4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047c/0047cdd4.md) [`006ea588`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006ea/006ea588.md) [`006f0500`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006f0/006f0500.md) [`008514f8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00851/008514f8.md)
- 新版 呼出元 0件  · 呼出先 6件 [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md) [`0047ce14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047ce14.md) [`006ea5e0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006ea/006ea5e0.md) [`006f0558`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006f0/006f0558.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)

変更の種類 call, call_target, constant, control_flow, operands_and_dependencies

命令の説明率　旧版 93.33% / 新版 93.33%

優先判定に残った影響 `call_target` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_target",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "006fe214",
      "value": [
        "leaf",
        "ram:47ad34:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "006fe1bc",
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
      "site": "006fe268",
      "value": [
        "leaf",
        "ram:6f0558:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "006fe210",
      "value": [
        "leaf",
        "ram:6f0500:8"
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
      "006fe214",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047acf4"
      ]
    ],
    [
      "006fe268",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "006f0500"
      ]
    ],
    [
      "006fe280",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "006ea588"
      ]
    ]
  ],
  "added": [
    [
      "006fe214",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ],
    [
      "006fe268",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "006f0558"
      ]
    ],
    [
      "006fe280",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "006ea5e0"
      ]
    ]
  ]
}
~~~


~~~diff
- 006fe1bc ["INT_ADD", "register:40f0:8", ["const:6fe1bc:8", "const:4:8"]]
- 006fe1bc ["CALL", null, ["ram:47acf4:8"]]
+ 006fe214 ["INT_ADD", "register:40f0:8", ["const:6fe214:8", "const:4:8"]]
+ 006fe214 ["CALL", null, ["ram:47ad34:8"]]
- 006fe210 ["INT_ADD", "register:40f0:8", ["const:6fe210:8", "const:4:8"]]
- 006fe210 ["CALL", null, ["ram:6f0500:8"]]
+ 006fe268 ["INT_ADD", "register:40f0:8", ["const:6fe268:8", "const:4:8"]]
+ 006fe268 ["CALL", null, ["ram:6f0558:8"]]
- 006fe214 ["INT_ADD", "register:40f0:8", ["const:6fe214:8", "const:4:8"]]
- 006fe214 ["CALL", null, ["callee:00851550:8"]]
+ 006fe26c ["INT_ADD", "register:40f0:8", ["const:6fe26c:8", "const:4:8"]]
+ 006fe26c ["CALL", null, ["callee:00851550:8"]]
~~~


<a id="compare-711fd072637998f71ea290a43bdb6f3e"></a>

### [`006fe270`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006fe/006fe270.md) → [`006fe2c8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006fe/006fe2c8.md) FUN_006fe2c8

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
      "definition_site": "006fe2e8",
      "incomplete_value": false,
      "site": "006fe2ec",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c76000:8"
          ],
          [
            "leaf",
            "const:ee8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "006fe290",
      "incomplete_value": false,
      "site": "006fe294",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c76000:8"
          ],
          [
            "leaf",
            "const:e18:8"
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
      "006fe2ec",
      "DATA",
      [
        "storage",
        "00c76e18",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "006fe2ec",
      "DATA",
      [
        "storage",
        "00c76ee8",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 006fe284 ["INT_ADD", "register:40f0:8", ["const:6fe284:8", "const:4:8"]]
- 006fe284 ["CALL", null, ["callee:00c57f60:8"]]
+ 006fe2dc ["INT_ADD", "register:40f0:8", ["const:6fe2dc:8", "const:4:8"]]
+ 006fe2dc ["CALL", null, ["callee:00c57f60:8"]]
- 006fe290 ["COPY", "tmp:0:8", ["const:e18:8"]]
- 006fe290 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 006fe290 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 006fe290 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 006fe2e8 ["COPY", "tmp:0:8", ["const:ee8:8"]]
+ 006fe2e8 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 006fe2e8 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 006fe2e8 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-5935214d976204447592d8253f5b2ac1"></a>

### [`006fe494`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006fe/006fe494.md) → [`006fe4ec`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006fe/006fe4ec.md) FUN_006fe4ec

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)

変更の種類 comparison, comparison_count, constant, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_store_alignment

命令の説明率　旧版 78.57% / 新版 78.57%

優先判定に残った影響 `unresolved_store_alignment` 2件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:006fe4b8",
      "DATA",
      [
        "storage",
        "00c76e98",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "006fe510",
      "DATA",
      [
        "storage",
        "00c76f68",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 006fe4a8 ["INT_ADD", "register:40f0:8", ["const:6fe4a8:8", "const:4:8"]]
- 006fe4a8 ["CALL", null, ["callee:00c57f60:8"]]
+ 006fe500 ["INT_ADD", "register:40f0:8", ["const:6fe500:8", "const:4:8"]]
+ 006fe500 ["CALL", null, ["callee:00c57f60:8"]]
- 006fe4b4 ["COPY", "tmp:0:8", ["const:e98:8"]]
- 006fe4b4 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 006fe4b4 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 006fe4b4 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 006fe4b8 ["COPY", "tmp:0:8", ["register:4000:8"]]
- 006fe4b8 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4040:8"]]
~~~


<a id="compare-475d0bc099aa66745b816f29ef16af0a"></a>

### [`006fe4ec`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006fe/006fe4ec.md) → [`006fe544`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006fe/006fe544.md) FUN_006fe544

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 6件 [`0047acf4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047a/0047acf4.md) [`0047cdd4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047c/0047cdd4.md) [`006ea588`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006ea/006ea588.md) [`006f0500`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006f0/006f0500.md) [`008514f8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00851/008514f8.md)
- 新版 呼出元 0件  · 呼出先 6件 [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md) [`0047ce14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047ce14.md) [`006ea5e0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006ea/006ea5e0.md) [`006f0558`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006f0/006f0558.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)

変更の種類 call, call_target, constant, control_flow, operands_and_dependencies

命令の説明率　旧版 91.89% / 新版 91.89%

優先判定に残った影響 `call_target` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_target",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "006fe56c",
      "value": [
        "leaf",
        "ram:47ad34:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "006fe514",
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
      "site": "006fe5b0",
      "value": [
        "leaf",
        "ram:6f0558:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "006fe558",
      "value": [
        "leaf",
        "ram:6f0500:8"
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
      "006fe56c",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047acf4"
      ]
    ],
    [
      "006fe5b0",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "006f0500"
      ]
    ],
    [
      "006fe5c8",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "006ea588"
      ]
    ]
  ],
  "added": [
    [
      "006fe56c",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ],
    [
      "006fe5b0",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "006f0558"
      ]
    ],
    [
      "006fe5c8",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "006ea5e0"
      ]
    ]
  ]
}
~~~


~~~diff
- 006fe514 ["INT_ADD", "register:40f0:8", ["const:6fe514:8", "const:4:8"]]
- 006fe514 ["CALL", null, ["ram:47acf4:8"]]
+ 006fe56c ["INT_ADD", "register:40f0:8", ["const:6fe56c:8", "const:4:8"]]
+ 006fe56c ["CALL", null, ["ram:47ad34:8"]]
- 006fe558 ["INT_ADD", "register:40f0:8", ["const:6fe558:8", "const:4:8"]]
- 006fe558 ["CALL", null, ["ram:6f0500:8"]]
+ 006fe5b0 ["INT_ADD", "register:40f0:8", ["const:6fe5b0:8", "const:4:8"]]
+ 006fe5b0 ["CALL", null, ["ram:6f0558:8"]]
- 006fe520 ["INT_ADD", "register:40f0:8", ["const:6fe520:8", "const:4:8"]]
- 006fe520 ["CALL", null, ["callee:0047ce14:8"]]
+ 006fe578 ["INT_ADD", "register:40f0:8", ["const:6fe578:8", "const:4:8"]]
+ 006fe578 ["CALL", null, ["callee:0047ce14:8"]]
~~~


<a id="compare-9d1c1cfeab92d0e7af656be73f1b49c2"></a>

### [`006fe5ac`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006fe/006fe5ac.md) → [`006fe604`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006fe/006fe604.md) FUN_006fe604

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
      "definition_site": "006fe624",
      "incomplete_value": false,
      "site": "006fe628",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c76000:8"
          ],
          [
            "leaf",
            "const:fe8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "006fe5cc",
      "incomplete_value": false,
      "site": "006fe5d0",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c76000:8"
          ],
          [
            "leaf",
            "const:f18:8"
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
      "006fe628",
      "DATA",
      [
        "storage",
        "00c76f18",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "006fe628",
      "DATA",
      [
        "storage",
        "00c76fe8",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 006fe5c0 ["INT_ADD", "register:40f0:8", ["const:6fe5c0:8", "const:4:8"]]
- 006fe5c0 ["CALL", null, ["callee:00c57f60:8"]]
+ 006fe618 ["INT_ADD", "register:40f0:8", ["const:6fe618:8", "const:4:8"]]
+ 006fe618 ["CALL", null, ["callee:00c57f60:8"]]
- 006fe5cc ["COPY", "tmp:0:8", ["const:f18:8"]]
- 006fe5cc ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 006fe5cc ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 006fe5cc ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 006fe624 ["COPY", "tmp:0:8", ["const:fe8:8"]]
+ 006fe624 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 006fe624 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 006fe624 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-a088b508a498d58f32e45321f7788509"></a>

### [`006fe5e4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006fe/006fe5e4.md) → [`006fe63c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006fe/006fe63c.md) FUN_006fe63c

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
      "definition_site": "006fe640",
      "incomplete_value": false,
      "site": "006fe644",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c76000:8"
          ],
          [
            "leaf",
            "const:fe8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "006fe5e8",
      "incomplete_value": false,
      "site": "006fe5ec",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c76000:8"
          ],
          [
            "leaf",
            "const:f18:8"
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
      "006fe644",
      "DATA",
      [
        "storage",
        "00c76f18",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "006fe644",
      "DATA",
      [
        "storage",
        "00c76fe8",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 006fe5e8 ["COPY", "tmp:0:8", ["const:f18:8"]]
- 006fe5e8 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 006fe5e8 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 006fe5e8 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 006fe640 ["COPY", "tmp:0:8", ["const:fe8:8"]]
+ 006fe640 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 006fe640 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 006fe640 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-4d5660dd273a078c392ed7e4ed431360"></a>

### [`006fe604`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006fe/006fe604.md) → [`006fe65c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006fe/006fe65c.md) FUN_006fe65c

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 11件 [`0047acf4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047a/0047acf4.md) [`0047cdd4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047c/0047cdd4.md) [`0048ce54`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0048c/0048ce54.md) [`006e53d4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006e5/006e53d4.md) [`006ef744`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006ef/006ef744.md)
- 新版 呼出元 0件  · 呼出先 11件 [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md) [`0047ce14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047ce14.md) [`0048ce94`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048c/0048ce94.md) [`006e542c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006e5/006e542c.md) [`006ef79c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006ef/006ef79c.md)

変更の種類 branch_condition_or_target, call, call_target, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 85.47% / 新版 85.47%

優先判定に残った影響 `call_target` 2件, `unresolved_call_alignment` 1件, `unresolved_store_alignment` 4件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_target",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "006fe698",
      "value": [
        "leaf",
        "ram:47ad34:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "006fe640",
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
      "site": "006fe6b8",
      "value": [
        "leaf",
        "ram:47ad34:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "006fe660",
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
      "006fe698",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047acf4"
      ]
    ],
    [
      "006fe6b8",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047acf4"
      ]
    ],
    [
      "unmatched:006fe6cc",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "006ef744"
      ]
    ]
  ],
  "added": [
    [
      "006fe698",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ],
    [
      "006fe6b8",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ],
    [
      "006fe724",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "006ef79c"
      ]
    ]
  ]
}
~~~


~~~diff
- 006fe640 ["INT_ADD", "register:40f0:8", ["const:6fe640:8", "const:4:8"]]
- 006fe640 ["CALL", null, ["ram:47acf4:8"]]
+ 006fe698 ["INT_ADD", "register:40f0:8", ["const:6fe698:8", "const:4:8"]]
+ 006fe698 ["CALL", null, ["ram:47ad34:8"]]
- 006fe660 ["INT_ADD", "register:40f0:8", ["const:6fe660:8", "const:4:8"]]
- 006fe660 ["CALL", null, ["ram:47acf4:8"]]
+ 006fe6b8 ["INT_ADD", "register:40f0:8", ["const:6fe6b8:8", "const:4:8"]]
+ 006fe6b8 ["CALL", null, ["ram:47ad34:8"]]
- 006fe63c ["INT_NOTEQUAL", "tmp:0:1", ["register:4040:4", "const:0:4"]]
- 006fe63c ["CBRANCH", null, ["local:b25:8", "tmp:0:1"]]
+ 006fe694 ["INT_NOTEQUAL", "tmp:0:1", ["register:4040:4", "const:0:4"]]
+ 006fe694 ["CBRANCH", null, ["local:b26:8", "tmp:0:1"]]
~~~


<a id="compare-8097cceaa1285faa5f0a599e56e7bd20"></a>

### [`006fe894`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006fe/006fe894.md) → [`006fe8ec`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006fe/006fe8ec.md) FUN_006fe8ec

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
      "definition_site": "006fe900",
      "incomplete_value": false,
      "site": "006fe904",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c77000:8"
          ],
          [
            "leaf",
            "const:58:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "006fe8a8",
      "incomplete_value": false,
      "site": "006fe8ac",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c76000:8"
          ],
          [
            "leaf",
            "const:f88:8"
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
      "006fe904",
      "DATA",
      [
        "storage",
        "00c76f88",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "006fe904",
      "DATA",
      [
        "storage",
        "00c77058",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 006fe8a0 ["INT_ADD", "register:40f0:8", ["const:6fe8a0:8", "const:4:8"]]
- 006fe8a0 ["CALL", null, ["callee:00c57f60:8"]]
+ 006fe8f8 ["INT_ADD", "register:40f0:8", ["const:6fe8f8:8", "const:4:8"]]
+ 006fe8f8 ["CALL", null, ["callee:00c57f60:8"]]
- 006fe8a4 ["COPY", "register:4040:8", ["const:c76000:8"]]
+ 006fe8fc ["COPY", "register:4040:8", ["const:c77000:8"]]
- 006fe8a8 ["COPY", "tmp:0:8", ["const:f88:8"]]
- 006fe8a8 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 006fe8a8 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 006fe8a8 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 006fe900 ["COPY", "tmp:0:8", ["const:58:8"]]
+ 006fe900 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 006fe900 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 006fe900 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-ad66b8e9269f6db9f24eb063f70cc746"></a>

### [`006fe8b8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006fe/006fe8b8.md) → [`006fe910`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006fe/006fe910.md) FUN_006fe910

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
      "definition_site": "006fe914",
      "incomplete_value": false,
      "site": "006fe918",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c77000:8"
          ],
          [
            "leaf",
            "const:58:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "006fe8bc",
      "incomplete_value": false,
      "site": "006fe8c0",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c76000:8"
          ],
          [
            "leaf",
            "const:f88:8"
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
      "006fe918",
      "DATA",
      [
        "storage",
        "00c76f88",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "006fe918",
      "DATA",
      [
        "storage",
        "00c77058",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 006fe8b8 ["COPY", "register:4040:8", ["const:c76000:8"]]
+ 006fe910 ["COPY", "register:4040:8", ["const:c77000:8"]]
- 006fe8bc ["COPY", "tmp:0:8", ["const:f88:8"]]
- 006fe8bc ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 006fe8bc ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 006fe8bc ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 006fe914 ["COPY", "tmp:0:8", ["const:58:8"]]
+ 006fe914 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 006fe914 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 006fe914 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-04eabc3eea41694fb30403579539e12c"></a>

### [`006fe8d0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006fe/006fe8d0.md) → [`006fe928`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006fe/006fe928.md) FUN_006fe928

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
      "site": "006fe944",
      "value": [
        "leaf",
        "ram:47ad34:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "006fe8ec",
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
      "006fe944",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047acf4"
      ]
    ]
  ],
  "added": [
    [
      "006fe944",
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
- 006fe8ec ["INT_ADD", "register:40f0:8", ["const:6fe8ec:8", "const:4:8"]]
- 006fe8ec ["CALL", null, ["ram:47acf4:8"]]
+ 006fe944 ["INT_ADD", "register:40f0:8", ["const:6fe944:8", "const:4:8"]]
+ 006fe944 ["CALL", null, ["ram:47ad34:8"]]
- 006fe8f8 ["INT_ADD", "register:40f0:8", ["const:6fe8f8:8", "const:4:8"]]
- 006fe8f8 ["CALL", null, ["callee:0047ce14:8"]]
+ 006fe950 ["INT_ADD", "register:40f0:8", ["const:6fe950:8", "const:4:8"]]
+ 006fe950 ["CALL", null, ["callee:0047ce14:8"]]
~~~


<a id="compare-0cbb2f3984cfd753b50f9ac84baa3dcd"></a>

### [`006fe93c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006fe/006fe93c.md) → [`006fe994`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006fe/006fe994.md) FUN_006fe994

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)

変更の種類 cfg_edge_inventory, comparison, comparison_count, constant, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_store_alignment

命令の説明率　旧版 85.71% / 新版 85.71%

優先判定に残った影響 `unresolved_store_alignment` 1件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:006fe960",
      "DATA",
      [
        "storage",
        "00c77018",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "006fe9b8",
      "DATA",
      [
        "storage",
        "00c770e8",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 006fe950 ["INT_ADD", "register:40f0:8", ["const:6fe950:8", "const:4:8"]]
- 006fe950 ["CALL", null, ["callee:00c57f60:8"]]
+ 006fe9a8 ["INT_ADD", "register:40f0:8", ["const:6fe9a8:8", "const:4:8"]]
+ 006fe9a8 ["CALL", null, ["callee:00c57f60:8"]]
- 006fe95c ["COPY", "tmp:0:8", ["const:18:8"]]
- 006fe95c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 006fe95c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 006fe95c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 006fe960 ["COPY", "tmp:0:8", ["register:4000:8"]]
- 006fe960 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4040:8"]]
~~~


<a id="compare-5e2c50b0ee4c44d9fb0399ffe3c33cfd"></a>

### [`006fe974`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006fe/006fe974.md) → [`006fe9cc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006fe/006fe9cc.md) FUN_006fe9cc

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
      "definition_site": "006fe9d0",
      "incomplete_value": false,
      "site": "006fe9d4",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c77000:8"
          ],
          [
            "leaf",
            "const:e8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "006fe978",
      "incomplete_value": false,
      "site": "006fe97c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c77000:8"
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
      "006fe9d4",
      "DATA",
      [
        "storage",
        "00c77018",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "006fe9d4",
      "DATA",
      [
        "storage",
        "00c770e8",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 006fe978 ["COPY", "tmp:0:8", ["const:18:8"]]
- 006fe978 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 006fe978 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 006fe978 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 006fe9d0 ["COPY", "tmp:0:8", ["const:e8:8"]]
+ 006fe9d0 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 006fe9d0 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 006fe9d0 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-a5d51635a3c80e72f7470699072a8289"></a>

### [`006fe994`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006fe/006fe994.md) → [`006fe9ec`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006fe/006fe9ec.md) FUN_006fe9ec

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 13件 [`0046d490`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0046d/0046d490.md) [`0047acf4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047a/0047acf4.md) [`0047cdd4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047c/0047cdd4.md) [`0048ce54`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0048c/0048ce54.md) [`0052dd00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0052d/0052dd00.md)
- 新版 呼出元 0件  · 呼出先 13件 [`0046d4d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046d/0046d4d0.md) [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md) [`0047ce14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047ce14.md) [`0048ce94`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048c/0048ce94.md) [`0052dd40`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0052d/0052dd40.md)

変更の種類 branch_condition_or_target, call, call_argument_candidate, call_target, comparison, comparison_count, constant, control_flow, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 84.42% / 新版 84.42%

優先判定に残った影響 `call_argument_candidate` 7件, `call_target` 2件, `unresolved_call_alignment` 1件, `unresolved_store_alignment` 8件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_target",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "006fea28",
      "value": [
        "leaf",
        "ram:47ad34:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "006fe9d0",
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
      "site": "006fea44",
      "value": [
        "leaf",
        "ram:47ad34:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "006fe9ec",
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
      "definition_site": "006fea6c",
      "incomplete_value": true,
      "site": "006fea74",
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
      "006fea28",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047acf4"
      ]
    ],
    [
      "006fea44",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047acf4"
      ]
    ],
    [
      "unmatched:006fea34",
      "READ",
      [
        "storage",
        "002b0f3c",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "006fea28",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ],
    [
      "006fea44",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ],
    [
      "006fea8c",
      "READ",
      [
        "storage",
        "002b0ee0",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 006fe9d0 ["INT_ADD", "register:40f0:8", ["const:6fe9d0:8", "const:4:8"]]
- 006fe9d0 ["CALL", null, ["ram:47acf4:8"]]
+ 006fea28 ["INT_ADD", "register:40f0:8", ["const:6fea28:8", "const:4:8"]]
+ 006fea28 ["CALL", null, ["ram:47ad34:8"]]
- 006fe9ec ["INT_ADD", "register:40f0:8", ["const:6fe9ec:8", "const:4:8"]]
- 006fe9ec ["CALL", null, ["ram:47acf4:8"]]
+ 006fea44 ["INT_ADD", "register:40f0:8", ["const:6fea44:8", "const:4:8"]]
+ 006fea44 ["CALL", null, ["ram:47ad34:8"]]
- 006fea74 ["INT_ADD", "register:40f0:8", ["const:6fea74:8", "const:4:8"]]
- 006fea74 ["CALL", null, ["callee:00c58020:8"]]
+ 006feacc ["INT_ADD", "register:40f0:8", ["const:6feacc:8", "const:4:8"]]
+ 006feacc ["CALL", null, ["callee:00c58020:8"]]
~~~


<a id="compare-091bb825ab368da6841407eadb1cc693"></a>

### [`006fed0c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006fe/006fed0c.md) → [`006fed64`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006fe/006fed64.md) FUN_006fed64

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
      "definition_site": "006fed88",
      "incomplete_value": false,
      "site": "006fed88",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c77000:8"
          ],
          [
            "leaf",
            "const:158:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "006fed30",
      "incomplete_value": false,
      "site": "006fed30",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c77000:8"
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
      "006fed88",
      "DATA",
      [
        "storage",
        "00c77088",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "006fed88",
      "DATA",
      [
        "storage",
        "00c77158",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 006fed20 ["INT_ADD", "register:40f0:8", ["const:6fed20:8", "const:4:8"]]
- 006fed20 ["CALL", null, ["callee:00c57f60:8"]]
+ 006fed78 ["INT_ADD", "register:40f0:8", ["const:6fed78:8", "const:4:8"]]
+ 006fed78 ["CALL", null, ["callee:00c57f60:8"]]
- 006fed2c ["COPY", "tmp:0:8", ["const:88:8"]]
- 006fed2c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 006fed2c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 006fed2c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 006fed84 ["COPY", "tmp:0:8", ["const:158:8"]]
+ 006fed84 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 006fed84 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 006fed84 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-8506204a1183896b86e1d7a7523f0fe4"></a>

### [`006fed40`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006fe/006fed40.md) → [`006fed98`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006fe/006fed98.md) FUN_006fed98

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
      "definition_site": "006feda4",
      "incomplete_value": false,
      "site": "006feda4",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c77000:8"
          ],
          [
            "leaf",
            "const:158:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "006fed4c",
      "incomplete_value": false,
      "site": "006fed4c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c77000:8"
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
      "006feda4",
      "DATA",
      [
        "storage",
        "00c77088",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "006feda4",
      "DATA",
      [
        "storage",
        "00c77158",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 006fed48 ["COPY", "tmp:0:8", ["const:88:8"]]
- 006fed48 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 006fed48 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 006fed48 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 006feda0 ["COPY", "tmp:0:8", ["const:158:8"]]
+ 006feda0 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 006feda0 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 006feda0 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
~~~


<a id="compare-64b48172c6f25ae9c15d779eaa16d2eb"></a>

### [`006fed5c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006fe/006fed5c.md) → [`006fedb4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006fe/006fedb4.md) FUN_006fedb4

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
      "site": "006fedd0",
      "value": [
        "leaf",
        "ram:47ad34:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "006fed78",
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
      "006fedd0",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047acf4"
      ]
    ]
  ],
  "added": [
    [
      "006fedd0",
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
- 006fed78 ["INT_ADD", "register:40f0:8", ["const:6fed78:8", "const:4:8"]]
- 006fed78 ["CALL", null, ["ram:47acf4:8"]]
+ 006fedd0 ["INT_ADD", "register:40f0:8", ["const:6fedd0:8", "const:4:8"]]
+ 006fedd0 ["CALL", null, ["ram:47ad34:8"]]
- 006fed84 ["INT_ADD", "register:40f0:8", ["const:6fed84:8", "const:4:8"]]
- 006fed84 ["CALL", null, ["callee:0047ce14:8"]]
+ 006feddc ["INT_ADD", "register:40f0:8", ["const:6feddc:8", "const:4:8"]]
+ 006feddc ["CALL", null, ["callee:0047ce14:8"]]
~~~


<a id="compare-632e5e03134b2a04dfd3d557b21685db"></a>

### [`006fedc8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006fe/006fedc8.md) → [`006fee20`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006fe/006fee20.md) FUN_006fee20

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
      "unmatched:006fede0",
      "DATA",
      [
        "storage",
        "00c77118",
        null,
        "undefined *"
      ]
    ],
    [
      "unmatched:006fede4",
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
      "006fee38",
      "DATA",
      [
        "storage",
        "00c771e8",
        null,
        "undefined *"
      ]
    ],
    [
      "006fee3c",
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
- 006fedd4 ["INT_ADD", "register:40f0:8", ["const:6fedd4:8", "const:4:8"]]
- 006fedd4 ["CALL", null, ["callee:00c57f60:8"]]
+ 006fee2c ["INT_ADD", "register:40f0:8", ["const:6fee2c:8", "const:4:8"]]
+ 006fee2c ["CALL", null, ["callee:00c57f60:8"]]
- 006feddc ["COPY", "tmp:0:8", ["const:118:8"]]
- 006feddc ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 006feddc ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 006feddc ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 006fede0 ["COPY", "tmp:0:8", ["register:4000:8"]]
- 006fede0 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4040:8"]]
~~~


<a id="compare-c76f04b4d87f1335c5e566c7a9ccf62b"></a>

### [`006fee04`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006fe/006fee04.md) → [`006fee5c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006fe/006fee5c.md) FUN_006fee5c

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 3件 [`0047acf4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047a/0047acf4.md) [`0047cdd4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047c/0047cdd4.md) [`008b9178`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008b9/008b9178.md)
- 新版 呼出元 0件  · 呼出先 3件 [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md) [`0047ce14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047ce14.md) [`008b91d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b9/008b91d0.md)

変更の種類 branch_condition_or_target, call, call_count, cfg_edge_inventory, constant, control_flow, local_def_use, memory_read, memory_read_count, operands_and_dependencies, operation_sequence, unresolved_call_alignment

命令の説明率　旧版 81.25% / 新版 81.25%

優先判定に残った影響 `unresolved_call_alignment` 1件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:006fee20",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047acf4"
      ]
    ]
  ],
  "added": [
    [
      "006fee78",
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
- 006fee0c ["BOOL_NEGATE", "tmp:0:1", ["register:101:1"]]
- 006fee0c ["CBRANCH", null, ["local:b3:8", "tmp:0:1"]]
+ 006fee64 ["BOOL_NEGATE", "tmp:0:1", ["register:101:1"]]
+ 006fee64 ["CBRANCH", null, ["local:b2:8", "tmp:0:1"]]
- 006fee18 ["COPY", "register:40e8:8", ["register:8:8"]]
- 006fee1c ["COPY", "tmp:0:8", ["register:4008:8"]]
- 006fee1c ["LOAD", "register:4098:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-5500afdbbfe963ed05101737a4aca9c7"></a>

### [`006fee70`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006fe/006fee70.md) → [`006feec8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006fe/006feec8.md) FUN_006feec8

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)

変更の種類 call, call_count, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_call_alignment, unresolved_return_alignment, unresolved_store_alignment

命令の説明率　旧版 0.00% / 新版 0.00%

優先判定に残った影響 `unresolved_call_alignment` 1件, `unresolved_return_alignment` 1件, `unresolved_store_alignment` 3件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:006fee70",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "unmatched:006fee7c",
      "UNCONDITIONAL_CALL",
      [
        "mapped_function",
        "00c57f60"
      ]
    ],
    [
      "unmatched:006fee88",
      "DATA",
      [
        "storage",
        "00c77198",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "006feec8",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "006feed4",
      "UNCONDITIONAL_CALL",
      [
        "mapped_function",
        "00c57f60"
      ]
    ],
    [
      "006feee0",
      "DATA",
      [
        "storage",
        "00c77268",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 006fee70 ["COPY", "tmp:0:8", ["register:40e8:8"]]
- 006fee70 ["COPY", "tmp:1:8", ["register:40f0:8"]]
- 006fee70 ["INT_ADD", "register:8:8", ["register:8:8", "const:fffffffffffffff0:8"]]
- 006fee70 ["STORE", null, ["const:1b1:8", "register:8:8", "tmp:0:8"]]
- 006fee74 ["COPY", "register:40e8:8", ["register:8:8"]]
- 006fee78 ["COPY", "register:4000:8", ["const:10:8"]]
~~~


<a id="compare-4646ffa16f3409132b9bdecf8931a750"></a>

### [`006fef98`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006fe/006fef98.md) → [`006feff0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006fe/006feff0.md) FUN_006feff0

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
      "definition_site": "006ff014",
      "incomplete_value": false,
      "site": "006ff014",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c77000:8"
          ],
          [
            "leaf",
            "const:2e8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "006fefbc",
      "incomplete_value": false,
      "site": "006fefbc",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c77000:8"
          ],
          [
            "leaf",
            "const:218:8"
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
      "006ff014",
      "DATA",
      [
        "storage",
        "00c77218",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "006ff014",
      "DATA",
      [
        "storage",
        "00c772e8",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 006fefac ["INT_ADD", "register:40f0:8", ["const:6fefac:8", "const:4:8"]]
- 006fefac ["CALL", null, ["callee:00c57f60:8"]]
+ 006ff004 ["INT_ADD", "register:40f0:8", ["const:6ff004:8", "const:4:8"]]
+ 006ff004 ["CALL", null, ["callee:00c57f60:8"]]
- 006fefb8 ["COPY", "tmp:0:8", ["const:218:8"]]
- 006fefb8 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 006fefb8 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 006fefb8 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 006ff010 ["COPY", "tmp:0:8", ["const:2e8:8"]]
+ 006ff010 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 006ff010 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 006ff010 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-e94e7097290d09ca25150693773a8f59"></a>

### [`006fefe8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006fe/006fefe8.md) → [`006ff040`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006ff/006ff040.md) FUN_006ff040

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 3件 [`0047acf4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047a/0047acf4.md) [`0047cdd4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047c/0047cdd4.md) [`008b9178`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008b9/008b9178.md)
- 新版 呼出元 0件  · 呼出先 3件 [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md) [`0047ce14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047ce14.md) [`008b91d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b9/008b91d0.md)

変更の種類 call, call_argument_candidate, call_count, call_target, cfg_edge_inventory, constant, operands_and_dependencies, operation_sequence, unresolved_call_alignment

命令の説明率　旧版 93.33% / 新版 93.33%

優先判定に残った影響 `call_argument_candidate` 1件, `call_target` 1件, `unresolved_call_alignment` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_target",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "006ff070",
      "value": [
        "leaf",
        "ram:47ad34:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "006ff018",
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
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "006ff09c",
      "incomplete_value": false,
      "site": "006ff0a4",
      "value": [
        "leaf",
        "const:b:8"
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
      "006ff070",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047acf4"
      ]
    ],
    [
      "unmatched:006ff040",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047acf4"
      ]
    ]
  ],
  "added": [
    [
      "006ff070",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ],
    [
      "006ff098",
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
- 006ff018 ["INT_ADD", "register:40f0:8", ["const:6ff018:8", "const:4:8"]]
- 006ff018 ["CALL", null, ["ram:47acf4:8"]]
+ 006ff070 ["INT_ADD", "register:40f0:8", ["const:6ff070:8", "const:4:8"]]
+ 006ff070 ["CALL", null, ["ram:47ad34:8"]]
- 006ff04c ["INT_ADD", "register:40f0:8", ["const:6ff04c:8", "const:4:8"]]
- 006ff04c ["CALL", null, ["callee:0047ce14:8"]]
+ 006ff0a4 ["INT_ADD", "register:40f0:8", ["const:6ff0a4:8", "const:4:8"]]
+ 006ff0a4 ["CALL", null, ["callee:0047ce14:8"]]
- 006ff040 ["INT_ADD", "register:40f0:8", ["const:6ff040:8", "const:4:8"]]
- 006ff040 ["CALL", null, ["ram:47acf4:8"]]
~~~


<a id="compare-04178baedbea2f180f23e1bde4e9eb8f"></a>

### [`006ff08c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006ff/006ff08c.md) → [`006ff0e4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006ff/006ff0e4.md) FUN_006ff0e4

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
      "unmatched:006ff0a4",
      "DATA",
      [
        "storage",
        "00c77298",
        null,
        "undefined *"
      ]
    ],
    [
      "unmatched:006ff0a8",
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
      "006ff0fc",
      "DATA",
      [
        "storage",
        "00c77368",
        null,
        "undefined *"
      ]
    ],
    [
      "006ff100",
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
- 006ff098 ["INT_ADD", "register:40f0:8", ["const:6ff098:8", "const:4:8"]]
- 006ff098 ["CALL", null, ["callee:00c57f60:8"]]
+ 006ff0f0 ["INT_ADD", "register:40f0:8", ["const:6ff0f0:8", "const:4:8"]]
+ 006ff0f0 ["CALL", null, ["callee:00c57f60:8"]]
- 006ff0a0 ["COPY", "tmp:0:8", ["const:298:8"]]
- 006ff0a0 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 006ff0a0 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 006ff0a0 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 006ff0a4 ["COPY", "tmp:0:8", ["register:4000:8"]]
- 006ff0a4 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4040:8"]]
~~~


<a id="compare-36fa5d601030719a4aea5e5e387c914a"></a>

### [`006ff0c8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006ff/006ff0c8.md) → [`006ff120`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006ff/006ff120.md) FUN_006ff120

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 6件 [`00467860`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00467/00467860.md) [`0046bd54`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0046b/0046bd54.md) [`0046c9c4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0046c/0046c9c4.md) [`004700b4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00470/004700b4.md) [`008514f8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00851/008514f8.md)
- 新版 呼出元 0件  · 呼出先 6件 [`004678a0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00467/004678a0.md) [`0046bd94`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046b/0046bd94.md) [`0046ca04`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046c/0046ca04.md) [`004700f4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00470/004700f4.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)

変更の種類 call, call_argument_candidate, call_count, call_target, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_call_alignment

命令の説明率　旧版 91.30% / 新版 91.30%

アドレスに依存する影響 `call_argument_candidate` 1件, `call_target` 1件, `unresolved_branch_alignment` 1件, `unresolved_call_alignment` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "call_target",
    "new": {
      "definition_site": null,
      "incomplete_value": false,
      "site": "006ff15c",
      "value": [
        "leaf",
        "callee:004700f4:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": false,
      "site": "006ff11c",
      "value": [
        "leaf",
        "callee:0046ca04:8"
      ]
    },
    "ordinal": 6,
    "slot": 0
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "006ff158",
      "incomplete_value": true,
      "site": "006ff15c",
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
            "const:360:8"
          ]
        ]
      ]
    },
    "old": null,
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
      "unmatched:006ff104",
      "UNCONDITIONAL_CALL",
      [
        "mapped_function",
        "004700f4"
      ]
    ],
    [
      "006ff15c",
      "UNCONDITIONAL_CALL",
      [
        "mapped_function",
        "0046ca04"
      ]
    ]
  ],
  "added": [
    [
      "006ff15c",
      "UNCONDITIONAL_CALL",
      [
        "mapped_function",
        "004700f4"
      ]
    ],
    [
      "006ff174",
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
- 006ff11c ["INT_ADD", "register:40f0:8", ["const:6ff11c:8", "const:4:8"]]
- 006ff11c ["CALL", null, ["callee:0046ca04:8"]]
+ 006ff15c ["INT_ADD", "register:40f0:8", ["const:6ff15c:8", "const:4:8"]]
+ 006ff15c ["CALL", null, ["callee:004700f4:8"]]
- 006ff0d8 ["INT_ADD", "register:40f0:8", ["const:6ff0d8:8", "const:4:8"]]
- 006ff0d8 ["CALL", null, ["callee:00851550:8"]]
+ 006ff130 ["INT_ADD", "register:40f0:8", ["const:6ff130:8", "const:4:8"]]
+ 006ff130 ["CALL", null, ["callee:00851550:8"]]
- 006ff0e8 ["INT_ADD", "register:40f0:8", ["const:6ff0e8:8", "const:4:8"]]
- 006ff0e8 ["CALL", null, ["callee:00851550:8"]]
+ 006ff140 ["INT_ADD", "register:40f0:8", ["const:6ff140:8", "const:4:8"]]
+ 006ff140 ["CALL", null, ["callee:00851550:8"]]
~~~


<a id="compare-5414a8b237437aaff9655b94c877c4d3"></a>

### [`006ff1ac`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006ff/006ff1ac.md) → [`006ff204`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006ff/006ff204.md) FUN_006ff204

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
      "definition_site": "006ff228",
      "incomplete_value": false,
      "site": "006ff228",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c77000:8"
          ],
          [
            "leaf",
            "const:3e8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "006ff1d0",
      "incomplete_value": false,
      "site": "006ff1d0",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c77000:8"
          ],
          [
            "leaf",
            "const:318:8"
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
      "006ff228",
      "DATA",
      [
        "storage",
        "00c77318",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "006ff228",
      "DATA",
      [
        "storage",
        "00c773e8",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 006ff1c0 ["INT_ADD", "register:40f0:8", ["const:6ff1c0:8", "const:4:8"]]
- 006ff1c0 ["CALL", null, ["callee:00c57f60:8"]]
+ 006ff218 ["INT_ADD", "register:40f0:8", ["const:6ff218:8", "const:4:8"]]
+ 006ff218 ["CALL", null, ["callee:00c57f60:8"]]
- 006ff1cc ["COPY", "tmp:0:8", ["const:318:8"]]
- 006ff1cc ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 006ff1cc ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 006ff1cc ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 006ff224 ["COPY", "tmp:0:8", ["const:3e8:8"]]
+ 006ff224 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 006ff224 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 006ff224 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-548388cf53f2441060f30e4ee9289f75"></a>

### [`006ff2c8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006ff/006ff2c8.md) → [`006ff320`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006ff/006ff320.md) FUN_006ff320

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
      "definition_site": "006ff344",
      "incomplete_value": false,
      "site": "006ff344",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c77000:8"
          ],
          [
            "leaf",
            "const:468:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "006ff2ec",
      "incomplete_value": false,
      "site": "006ff2ec",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c77000:8"
          ],
          [
            "leaf",
            "const:398:8"
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
      "006ff344",
      "DATA",
      [
        "storage",
        "00c77398",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "006ff344",
      "DATA",
      [
        "storage",
        "00c77468",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 006ff2dc ["INT_ADD", "register:40f0:8", ["const:6ff2dc:8", "const:4:8"]]
- 006ff2dc ["CALL", null, ["callee:00c57f60:8"]]
+ 006ff334 ["INT_ADD", "register:40f0:8", ["const:6ff334:8", "const:4:8"]]
+ 006ff334 ["CALL", null, ["callee:00c57f60:8"]]
- 006ff2e8 ["COPY", "tmp:0:8", ["const:398:8"]]
- 006ff2e8 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 006ff2e8 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 006ff2e8 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 006ff340 ["COPY", "tmp:0:8", ["const:468:8"]]
+ 006ff340 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 006ff340 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 006ff340 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-1bef2ab4b4d612db4a66e96fe1c925ae"></a>

### [`006ff318`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006ff/006ff318.md) → [`006ff370`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006ff/006ff370.md) FUN_006ff370

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 15件 [`0047acf4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047a/0047acf4.md) [`0047cdd4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047c/0047cdd4.md) [`0047ce28`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047c/0047ce28.md) [`006b2424`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006b2/006b2424.md) [`006b2430`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006b2/006b2430.md)
- 新版 呼出元 0件  · 呼出先 15件 [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md) [`0047ce14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047ce14.md) [`0047ce68`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047ce68.md) [`006b247c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006b2/006b247c.md) [`006b2488`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006b2/006b2488.md)

変更の種類 branch_condition_or_target, call, call_argument_candidate, call_target, cfg_edge_inventory, constant, control_flow, operands_and_dependencies, store_value, unresolved_call_alignment

命令の説明率　旧版 93.20% / 新版 93.20%

優先判定に残った影響 `call_argument_candidate` 2件, `call_target` 2件, `store_value` 1件, `unresolved_call_alignment` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "006ff500",
      "incomplete_value": false,
      "site": "006ff508",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c77000:8"
          ],
          [
            "leaf",
            "const:4d8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "006ff4a8",
      "incomplete_value": false,
      "site": "006ff4b0",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c77000:8"
          ],
          [
            "leaf",
            "const:408:8"
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
      "site": "006ff3b4",
      "value": [
        "leaf",
        "ram:47ad34:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "006ff35c",
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
      "definition_site": "006ff440",
      "incomplete_value": true,
      "site": "006ff44c",
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
      "006ff3b4",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047acf4"
      ]
    ],
    [
      "006ff4ec",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047acf4"
      ]
    ],
    [
      "006ff508",
      "DATA",
      [
        "storage",
        "00c77408",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "006ff3b4",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ],
    [
      "006ff4ec",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ],
    [
      "006ff508",
      "DATA",
      [
        "storage",
        "00c774d8",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 006ff35c ["INT_ADD", "register:40f0:8", ["const:6ff35c:8", "const:4:8"]]
- 006ff35c ["CALL", null, ["ram:47acf4:8"]]
+ 006ff3b4 ["INT_ADD", "register:40f0:8", ["const:6ff3b4:8", "const:4:8"]]
+ 006ff3b4 ["CALL", null, ["ram:47ad34:8"]]
- 006ff3b4 ["INT_ADD", "register:40f0:8", ["const:6ff3b4:8", "const:4:8"]]
- 006ff3b4 ["CALL", null, ["callee:006b247c:8"]]
+ 006ff40c ["INT_ADD", "register:40f0:8", ["const:6ff40c:8", "const:4:8"]]
+ 006ff40c ["CALL", null, ["callee:006b247c:8"]]
- 006ff44c ["INT_ADD", "register:40f0:8", ["const:6ff44c:8", "const:4:8"]]
- 006ff44c ["CALL", null, ["callee:00aa34d0:8"]]
+ 006ff4a4 ["INT_ADD", "register:40f0:8", ["const:6ff4a4:8", "const:4:8"]]
+ 006ff4a4 ["CALL", null, ["callee:00aa34d0:8"]]
~~~


<a id="compare-d0c117c32b6d45b99ccc858ae4c144a0"></a>

### [`006ff604`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006ff/006ff604.md) → [`006ff65c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006ff/006ff65c.md) FUN_006ff65c

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
      "definition_site": "006ff670",
      "incomplete_value": false,
      "site": "006ff674",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c77000:8"
          ],
          [
            "leaf",
            "const:4d8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "006ff618",
      "incomplete_value": false,
      "site": "006ff61c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c77000:8"
          ],
          [
            "leaf",
            "const:408:8"
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
      "006ff674",
      "DATA",
      [
        "storage",
        "00c77408",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "006ff674",
      "DATA",
      [
        "storage",
        "00c774d8",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 006ff610 ["INT_ADD", "register:40f0:8", ["const:6ff610:8", "const:4:8"]]
- 006ff610 ["CALL", null, ["callee:00c57f60:8"]]
+ 006ff668 ["INT_ADD", "register:40f0:8", ["const:6ff668:8", "const:4:8"]]
+ 006ff668 ["CALL", null, ["callee:00c57f60:8"]]
- 006ff618 ["COPY", "tmp:0:8", ["const:408:8"]]
- 006ff618 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 006ff618 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 006ff618 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 006ff670 ["COPY", "tmp:0:8", ["const:4d8:8"]]
+ 006ff670 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 006ff670 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 006ff670 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-b783be34d9d3bab7a443ebc6d65d763f"></a>

### [`006ff628`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006ff/006ff628.md) → [`006ff680`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006ff/006ff680.md) FUN_006ff680

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
      "definition_site": "006ff684",
      "incomplete_value": false,
      "site": "006ff688",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c77000:8"
          ],
          [
            "leaf",
            "const:4d8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "006ff62c",
      "incomplete_value": false,
      "site": "006ff630",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c77000:8"
          ],
          [
            "leaf",
            "const:408:8"
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
      "006ff688",
      "DATA",
      [
        "storage",
        "00c77408",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "006ff688",
      "DATA",
      [
        "storage",
        "00c774d8",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 006ff62c ["COPY", "tmp:0:8", ["const:408:8"]]
- 006ff62c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 006ff62c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 006ff62c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 006ff684 ["COPY", "tmp:0:8", ["const:4d8:8"]]
+ 006ff684 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 006ff684 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 006ff684 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-5537bd01528911474c2e72cfc07cb669"></a>

### [`006ffdfc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006ff/006ffdfc.md) → [`006ffe54`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006ff/006ffe54.md) FUN_006ffe54

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
      "definition_site": "006ffe68",
      "incomplete_value": false,
      "site": "006ffe6c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c77000:8"
          ],
          [
            "leaf",
            "const:548:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "006ffe10",
      "incomplete_value": false,
      "site": "006ffe14",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c77000:8"
          ],
          [
            "leaf",
            "const:478:8"
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
      "006ffe6c",
      "DATA",
      [
        "storage",
        "00c77478",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "006ffe6c",
      "DATA",
      [
        "storage",
        "00c77548",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 006ffe08 ["INT_ADD", "register:40f0:8", ["const:6ffe08:8", "const:4:8"]]
- 006ffe08 ["CALL", null, ["callee:00c57f60:8"]]
+ 006ffe60 ["INT_ADD", "register:40f0:8", ["const:6ffe60:8", "const:4:8"]]
+ 006ffe60 ["CALL", null, ["callee:00c57f60:8"]]
- 006ffe10 ["COPY", "tmp:0:8", ["const:478:8"]]
- 006ffe10 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 006ffe10 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 006ffe10 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 006ffe68 ["COPY", "tmp:0:8", ["const:548:8"]]
+ 006ffe68 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 006ffe68 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 006ffe68 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-2ced362ed7568553fa8d42a3136f4917"></a>

### [`006ffe38`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006ff/006ffe38.md) → [`006ffe90`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006ff/006ffe90.md) FUN_006ffe90

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
      "site": "006ffeb4",
      "value": [
        "leaf",
        "ram:47ad34:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "006ffe5c",
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
      "006ffeb4",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047acf4"
      ]
    ]
  ],
  "added": [
    [
      "006ffeb4",
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
- 006ffe5c ["INT_ADD", "register:40f0:8", ["const:6ffe5c:8", "const:4:8"]]
- 006ffe5c ["CALL", null, ["ram:47acf4:8"]]
+ 006ffeb4 ["INT_ADD", "register:40f0:8", ["const:6ffeb4:8", "const:4:8"]]
+ 006ffeb4 ["CALL", null, ["ram:47ad34:8"]]
- 006ffe68 ["INT_ADD", "register:40f0:8", ["const:6ffe68:8", "const:4:8"]]
- 006ffe68 ["CALL", null, ["callee:0047ce14:8"]]
+ 006ffec0 ["INT_ADD", "register:40f0:8", ["const:6ffec0:8", "const:4:8"]]
+ 006ffec0 ["CALL", null, ["callee:0047ce14:8"]]
~~~


<a id="compare-891769e6045538e4d8c7872286f749b0"></a>

### [`006ffeac`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006ff/006ffeac.md) → [`006fff04`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006ff/006fff04.md) FUN_006fff04

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
      "definition_site": "006fff18",
      "incomplete_value": false,
      "site": "006fff1c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c77000:8"
          ],
          [
            "leaf",
            "const:5c8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "006ffec0",
      "incomplete_value": false,
      "site": "006ffec4",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c77000:8"
          ],
          [
            "leaf",
            "const:4f8:8"
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
      "006fff1c",
      "DATA",
      [
        "storage",
        "00c774f8",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "006fff1c",
      "DATA",
      [
        "storage",
        "00c775c8",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 006ffeb8 ["INT_ADD", "register:40f0:8", ["const:6ffeb8:8", "const:4:8"]]
- 006ffeb8 ["CALL", null, ["callee:00c57f60:8"]]
+ 006fff10 ["INT_ADD", "register:40f0:8", ["const:6fff10:8", "const:4:8"]]
+ 006fff10 ["CALL", null, ["callee:00c57f60:8"]]
- 006ffec0 ["COPY", "tmp:0:8", ["const:4f8:8"]]
- 006ffec0 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 006ffec0 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 006ffec0 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 006fff18 ["COPY", "tmp:0:8", ["const:5c8:8"]]
+ 006fff18 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 006fff18 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 006fff18 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-b76476dd91152776a532cf7e11697245"></a>

### [`006ffee8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006ff/006ffee8.md) → [`006fff40`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006ff/006fff40.md) FUN_006fff40

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
      "unmatched:006fff0c",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047acf4"
      ]
    ]
  ],
  "added": [
    [
      "006fff64",
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
- 006ffef0 ["BOOL_NEGATE", "tmp:0:1", ["register:101:1"]]
- 006ffef0 ["CBRANCH", null, ["local:b3:8", "tmp:0:1"]]
+ 006fff48 ["BOOL_NEGATE", "tmp:0:1", ["register:101:1"]]
+ 006fff48 ["CBRANCH", null, ["local:b4:8", "tmp:0:1"]]
- 006ffef8 ["INT_NOTEQUAL", "tmp:0:1", ["register:4040:4", "const:0:4"]]
- 006ffef8 ["CBRANCH", null, ["local:b3:8", "tmp:0:1"]]
+ 006fff50 ["INT_NOTEQUAL", "tmp:0:1", ["register:4040:4", "const:0:4"]]
+ 006fff50 ["CBRANCH", null, ["local:b4:8", "tmp:0:1"]]
- 006fff0c ["INT_ADD", "register:40f0:8", ["const:6fff0c:8", "const:4:8"]]
- 006fff0c ["CALL", null, ["ram:47acf4:8"]]
~~~


<a id="compare-b83654b241d30fe1b18b350422b71964"></a>

### [`006fff58`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006ff/006fff58.md) → [`006fffb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006ff/006fffb0.md) FUN_006fffb0

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
      "definition_site": "006fffbc",
      "incomplete_value": false,
      "site": "006fffc0",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c77000:8"
          ],
          [
            "leaf",
            "const:668:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "006fff64",
      "incomplete_value": false,
      "site": "006fff68",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c77000:8"
          ],
          [
            "leaf",
            "const:598:8"
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
      "006fffc0",
      "DATA",
      [
        "storage",
        "00c77598",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "006fffc0",
      "DATA",
      [
        "storage",
        "00c77668",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 006fff64 ["COPY", "tmp:0:8", ["const:598:8"]]
- 006fff64 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 006fff64 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 006fff64 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 006fffbc ["COPY", "tmp:0:8", ["const:668:8"]]
+ 006fffbc ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 006fffbc ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 006fffbc ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
~~~


<a id="compare-e74ce536b97ccf1f56df5986e96d3680"></a>

### [`006fff7c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006ff/006fff7c.md) → [`006fffd4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006ff/006fffd4.md) FUN_006fffd4

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
      "definition_site": "006fffdc",
      "incomplete_value": false,
      "site": "006fffe0",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c77000:8"
          ],
          [
            "leaf",
            "const:668:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "006fff84",
      "incomplete_value": false,
      "site": "006fff88",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c77000:8"
          ],
          [
            "leaf",
            "const:598:8"
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
      "006fffe0",
      "DATA",
      [
        "storage",
        "00c77598",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "006fffe0",
      "DATA",
      [
        "storage",
        "00c77668",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 006fff84 ["COPY", "tmp:0:8", ["const:598:8"]]
- 006fff84 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 006fff84 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 006fff84 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 006fffdc ["COPY", "tmp:0:8", ["const:668:8"]]
+ 006fffdc ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 006fffdc ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 006fffdc ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
- 006fffa8 ["INT_ADD", "register:40f0:8", ["const:6fffa8:8", "const:4:8"]]
- 006fffa8 ["CALL", null, ["callee:00c57f80:8"]]
+ 00700000 ["INT_ADD", "register:40f0:8", ["const:700000:8", "const:4:8"]]
+ 00700000 ["CALL", null, ["callee:00c57f80:8"]]
~~~


<a id="compare-b04cd619e27dc70563238bbc0e8c4822"></a>

### [`006fffbc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006ff/006fffbc.md) → [`00700014`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00700/00700014.md) FUN_00700014

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 3件 [`00470840`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00470/00470840.md) [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md) [`00c58000`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58000.md)
- 新版 呼出元 0件  · 呼出先 3件 [`00470880`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00470/00470880.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c580d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c580d0.md)

変更の種類 constant, operands_and_dependencies, operation_sequence, store_value

命令の説明率　旧版 91.43% / 新版 91.43%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "00700044",
      "incomplete_value": false,
      "site": "00700044",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c77000:8"
          ],
          [
            "leaf",
            "const:668:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "006fffec",
      "incomplete_value": false,
      "site": "006fffec",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c77000:8"
          ],
          [
            "leaf",
            "const:598:8"
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
      "00700044",
      "DATA",
      [
        "storage",
        "00c77598",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00700044",
      "DATA",
      [
        "storage",
        "00c77668",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00700044 ["INT_ADD", "register:40f0:8", ["const:700044:8", "const:4:8"]]
- 00700044 ["CALL", null, ["callee:00470880:8"]]
+ 0070009c ["INT_ADD", "register:40f0:8", ["const:70009c:8", "const:4:8"]]
+ 0070009c ["CALL", null, ["callee:00470880:8"]]
- 006fffd4 ["INT_ADD", "register:40f0:8", ["const:6fffd4:8", "const:4:8"]]
- 006fffd4 ["CALL", null, ["callee:00c57f60:8"]]
+ 0070002c ["INT_ADD", "register:40f0:8", ["const:70002c:8", "const:4:8"]]
+ 0070002c ["CALL", null, ["callee:00c57f60:8"]]
- 006fffe0 ["COPY", "tmp:0:8", ["const:598:8"]]
- 006fffe0 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 006fffe0 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 006fffe0 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00700038 ["COPY", "tmp:0:8", ["const:668:8"]]
+ 00700038 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00700038 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00700038 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-59636cbc96f4d998f907a47bd250117a"></a>

### [`00700070`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00700/00700070.md) → [`007000c8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00700/007000c8.md) FUN_007000c8

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 3件 [`00470840`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00470/00470840.md) [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md) [`00c58000`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58000.md)
- 新版 呼出元 0件  · 呼出先 3件 [`00470880`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00470/00470880.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c580d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c580d0.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 93.55% / 新版 93.55%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "007000f4",
      "incomplete_value": false,
      "site": "007000f4",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c77000:8"
          ],
          [
            "leaf",
            "const:668:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0070009c",
      "incomplete_value": false,
      "site": "0070009c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c77000:8"
          ],
          [
            "leaf",
            "const:598:8"
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
      "007000f4",
      "DATA",
      [
        "storage",
        "00c77598",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "007000f4",
      "DATA",
      [
        "storage",
        "00c77668",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00700094 ["COPY", "tmp:0:8", ["const:598:8"]]
- 00700094 ["INT_CARRY", "register:105:1", ["register:4050:8", "tmp:0:8"]]
- 00700094 ["INT_SCARRY", "register:106:1", ["register:4050:8", "tmp:0:8"]]
- 00700094 ["INT_ADD", "tmp:1:8", ["register:4050:8", "tmp:0:8"]]
+ 007000ec ["COPY", "tmp:0:8", ["const:668:8"]]
+ 007000ec ["INT_CARRY", "register:105:1", ["register:4050:8", "tmp:0:8"]]
+ 007000ec ["INT_SCARRY", "register:106:1", ["register:4050:8", "tmp:0:8"]]
+ 007000ec ["INT_ADD", "tmp:1:8", ["register:4050:8", "tmp:0:8"]]
- 007000b4 ["INT_ADD", "register:40f0:8", ["const:7000b4:8", "const:4:8"]]
- 007000b4 ["CALL", null, ["callee:00c57f60:8"]]
+ 0070010c ["INT_ADD", "register:40f0:8", ["const:70010c:8", "const:4:8"]]
+ 0070010c ["CALL", null, ["callee:00c57f60:8"]]
- 007000cc ["INT_ADD", "register:40f0:8", ["const:7000cc:8", "const:4:8"]]
- 007000cc ["CALL", null, ["callee:00c580d0:8"]]
+ 00700124 ["INT_ADD", "register:40f0:8", ["const:700124:8", "const:4:8"]]
+ 00700124 ["CALL", null, ["callee:00c580d0:8"]]
~~~


<a id="compare-3197c047a37c879a723269903eb26feb"></a>

### [`00700124`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00700/00700124.md) → [`0070017c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00700/0070017c.md) FUN_0070017c

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `equal` · `cfg_change`

- 旧版 呼出元 1件 [`006f24d4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006f2/006f24d4.md) · 呼出先 1件 [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md)
- 新版 呼出元 1件 [`006f252c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006f2/006f252c.md) · 呼出先 1件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)

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
      "definition_site": "00700140",
      "incomplete_value": true,
      "site": "00700144",
      "value": [
        "live",
        "register:4040:8"
      ]
    },
    "ordinal": 0,
    "slot": 1
  }
]
~~~


~~~diff
- 00700144 ["INT_ADD", "register:40f0:8", ["const:700144:8", "const:4:8"]]
- 00700144 ["CALL", null, ["callee:00c57f80:8"]]
+ 0070019c ["INT_ADD", "register:40f0:8", ["const:70019c:8", "const:4:8"]]
+ 0070019c ["CALL", null, ["callee:00c57f80:8"]]
- 00700128 ["INT_EQUAL", "tmp:0:1", ["register:4040:8", "const:0:8"]]
- 00700128 ["CBRANCH", null, ["local:b2:8", "tmp:0:1"]]
+ 00700180 ["INT_EQUAL", "tmp:0:1", ["register:4040:8", "const:0:8"]]
+ 00700180 ["CBRANCH", null, ["local:b3:8", "tmp:0:1"]]
~~~


<a id="compare-c37096cce0234e888ca21a6eb640ed35"></a>

### [`00700158`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00700/00700158.md) → [`007001b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00700/007001b0.md) FUN_007001b0

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `bounded` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 11件 [`008514f8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00851/008514f8.md) [`0085b2ac`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0085b/0085b2ac.md) [`0085b2cc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0085b/0085b2cc.md) [`0085b2d4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0085b/0085b2d4.md) [`0085b2e0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0085b/0085b2e0.md)
- 新版 呼出元 0件  · 呼出先 11件 [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md) [`0085b304`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0085b/0085b304.md) [`0085b324`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0085b/0085b324.md) [`0085b32c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0085b/0085b32c.md) [`0085b338`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0085b/0085b338.md)

変更の種類 branch_condition_or_target, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, store_value, unresolved_store_alignment

命令の説明率　旧版 93.81% / 新版 93.81%

優先判定に残った影響 `unresolved_store_alignment` 9件

アドレスに依存する影響 `store_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00700204",
      "incomplete_value": true,
      "site": "00700204",
      "value": [
        "TRUNC",
        "4",
        [
          [
            "FLOAT_MULT",
            "8",
            [
              "INT2FLOAT",
              "LOAD"
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "007001ac",
      "incomplete_value": true,
      "site": "007001ac",
      "value": [
        "TRUNC",
        "4",
        [
          [
            "FLOAT_MULT",
            "8",
            [
              "INT2FLOAT",
              "LOAD"
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
      "unmatched:00700158",
      "WRITE",
      [
        "storage",
        "Stack[-0x40]",
        null,
        null
      ]
    ],
    [
      "unmatched:0070015c",
      "WRITE",
      [
        "storage",
        "Stack[-0x38]",
        null,
        null
      ]
    ],
    [
      "unmatched:00700160",
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
      "007001b0",
      "WRITE",
      [
        "storage",
        "Stack[-0x40]",
        null,
        null
      ]
    ],
    [
      "007001b4",
      "WRITE",
      [
        "storage",
        "Stack[-0x38]",
        null,
        null
      ]
    ],
    [
      "007001b8",
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
- 00700158 ["INT_ADD", "register:8:8", ["register:8:8", "const:ffffffffffffffc0:8"]]
- 00700158 ["STORE", null, ["const:1b1:8", "register:8:8", "register:5100:8"]]
- 0070015c ["COPY", "tmp:0:8", ["register:40e8:8"]]
- 0070015c ["COPY", "tmp:1:8", ["register:40f0:8"]]
- 0070015c ["INT_ADD", "tmp:2:8", ["register:8:8", "const:8:8"]]
- 0070015c ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
- 00700160 ["INT_ADD", "tmp:0:8", ["register:8:8", "const:18:8"]]
- 00700160 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:40b8:8"]]
~~~


<a id="compare-fa5389282f46ff0966c5429c1bdc108d"></a>

### [`00700344`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00700/00700344.md) → [`0070039c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00700/0070039c.md) FUN_0070039c

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
      "definition_site": "007003a8",
      "incomplete_value": false,
      "site": "007003ac",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c77000:8"
          ],
          [
            "leaf",
            "const:6e8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00700350",
      "incomplete_value": false,
      "site": "00700354",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c77000:8"
          ],
          [
            "leaf",
            "const:618:8"
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
      "007003ac",
      "DATA",
      [
        "storage",
        "00c77618",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "007003ac",
      "DATA",
      [
        "storage",
        "00c776e8",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00700350 ["COPY", "tmp:0:8", ["const:618:8"]]
- 00700350 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 00700350 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 00700350 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 007003a8 ["COPY", "tmp:0:8", ["const:6e8:8"]]
+ 007003a8 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 007003a8 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 007003a8 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
~~~


<a id="compare-a1a7ae69ad97cf8879e5cd149c0f1e12"></a>

### [`00700368`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00700/00700368.md) → [`007003c0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00700/007003c0.md) FUN_007003c0

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
      "definition_site": "007003c8",
      "incomplete_value": false,
      "site": "007003cc",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c77000:8"
          ],
          [
            "leaf",
            "const:6e8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00700370",
      "incomplete_value": false,
      "site": "00700374",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c77000:8"
          ],
          [
            "leaf",
            "const:618:8"
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
      "007003cc",
      "DATA",
      [
        "storage",
        "00c77618",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "007003cc",
      "DATA",
      [
        "storage",
        "00c776e8",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00700370 ["COPY", "tmp:0:8", ["const:618:8"]]
- 00700370 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 00700370 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 00700370 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 007003c8 ["COPY", "tmp:0:8", ["const:6e8:8"]]
+ 007003c8 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 007003c8 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 007003c8 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
- 00700394 ["INT_ADD", "register:40f0:8", ["const:700394:8", "const:4:8"]]
- 00700394 ["CALL", null, ["callee:00c57f80:8"]]
+ 007003ec ["INT_ADD", "register:40f0:8", ["const:7003ec:8", "const:4:8"]]
+ 007003ec ["CALL", null, ["callee:00c57f80:8"]]
~~~


<a id="compare-d0642153b9cf44bbea98b309286e1602"></a>

### [`007003a8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00700/007003a8.md) → [`00700400`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00700/00700400.md) FUN_00700400

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 3件 [`00470840`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00470/00470840.md) [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md) [`00c58000`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58000.md)
- 新版 呼出元 0件  · 呼出先 3件 [`00470880`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00470/00470880.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c580d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c580d0.md)

変更の種類 call_argument_candidate, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_store_alignment

命令の説明率　旧版 74.29% / 新版 74.29%

優先判定に残った影響 `call_argument_candidate` 1件, `unresolved_branch_alignment` 1件, `unresolved_store_alignment` 5件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "0070044c",
      "incomplete_value": true,
      "site": "00700450",
      "value": [
        "live",
        "register:40b0:8"
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
      "unmatched:007003d8",
      "DATA",
      [
        "storage",
        "00c77618",
        null,
        "undefined *"
      ]
    ],
    [
      "unmatched:007003ec",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00700470"
      ]
    ]
  ],
  "added": [
    [
      "00700430",
      "DATA",
      [
        "storage",
        "00c776e8",
        null,
        "undefined *"
      ]
    ],
    [
      "00700444",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00700470"
      ]
    ]
  ]
}
~~~


~~~diff
- 007003f8 ["INT_ADD", "register:40f0:8", ["const:7003f8:8", "const:4:8"]]
- 007003f8 ["CALL", null, ["callee:00c57f60:8"]]
+ 00700450 ["INT_ADD", "register:40f0:8", ["const:700450:8", "const:4:8"]]
+ 00700450 ["CALL", null, ["callee:00c57f60:8"]]
- 007003c0 ["INT_ADD", "register:40f0:8", ["const:7003c0:8", "const:4:8"]]
- 007003c0 ["CALL", null, ["callee:00c57f60:8"]]
+ 00700418 ["INT_ADD", "register:40f0:8", ["const:700418:8", "const:4:8"]]
+ 00700418 ["CALL", null, ["callee:00c57f60:8"]]
- 007003cc ["COPY", "tmp:0:8", ["const:618:8"]]
- 007003cc ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 007003cc ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 007003cc ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-0faaadcd1da2e61aefbb9e3d22018866"></a>

### [`0070045c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00700/0070045c.md) → [`007004b4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00700/007004b4.md) FUN_007004b4

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 3件 [`00470840`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00470/00470840.md) [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md) [`00c58000`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58000.md)
- 新版 呼出元 0件  · 呼出先 3件 [`00470880`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00470/00470880.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c580d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c580d0.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 93.55% / 新版 93.55%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "007004e0",
      "incomplete_value": false,
      "site": "007004e0",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c77000:8"
          ],
          [
            "leaf",
            "const:6e8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00700488",
      "incomplete_value": false,
      "site": "00700488",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c77000:8"
          ],
          [
            "leaf",
            "const:618:8"
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
      "007004e0",
      "DATA",
      [
        "storage",
        "00c77618",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "007004e0",
      "DATA",
      [
        "storage",
        "00c776e8",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00700480 ["COPY", "tmp:0:8", ["const:618:8"]]
- 00700480 ["INT_CARRY", "register:105:1", ["register:4050:8", "tmp:0:8"]]
- 00700480 ["INT_SCARRY", "register:106:1", ["register:4050:8", "tmp:0:8"]]
- 00700480 ["INT_ADD", "tmp:1:8", ["register:4050:8", "tmp:0:8"]]
+ 007004d8 ["COPY", "tmp:0:8", ["const:6e8:8"]]
+ 007004d8 ["INT_CARRY", "register:105:1", ["register:4050:8", "tmp:0:8"]]
+ 007004d8 ["INT_SCARRY", "register:106:1", ["register:4050:8", "tmp:0:8"]]
+ 007004d8 ["INT_ADD", "tmp:1:8", ["register:4050:8", "tmp:0:8"]]
- 007004a0 ["INT_ADD", "register:40f0:8", ["const:7004a0:8", "const:4:8"]]
- 007004a0 ["CALL", null, ["callee:00c57f60:8"]]
+ 007004f8 ["INT_ADD", "register:40f0:8", ["const:7004f8:8", "const:4:8"]]
+ 007004f8 ["CALL", null, ["callee:00c57f60:8"]]
- 007004b8 ["INT_ADD", "register:40f0:8", ["const:7004b8:8", "const:4:8"]]
- 007004b8 ["CALL", null, ["callee:00c580d0:8"]]
+ 00700510 ["INT_ADD", "register:40f0:8", ["const:700510:8", "const:4:8"]]
+ 00700510 ["CALL", null, ["callee:00c580d0:8"]]
~~~


<a id="compare-e0f0c54cc4f352bcbabff8099f5c0fe0"></a>

### [`00700544`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00700/00700544.md) → [`0070059c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00700/0070059c.md) FUN_0070059c

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 11件 [`00467860`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00467/00467860.md) [`00467db4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00467/00467db4.md) [`0046a250`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0046a/0046a250.md) [`0055a5e4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0055a/0055a5e4.md) [`008514f8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00851/008514f8.md)
- 新版 呼出元 0件  · 呼出先 11件 [`004678a0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00467/004678a0.md) [`00467df4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00467/00467df4.md) [`0046a290`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046a/0046a290.md) [`0055a624`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0055a/0055a624.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, memory_read, memory_read_count, operands_and_dependencies, operation_sequence

命令の説明率　旧版 91.34% / 新版 91.34%

優先判定に残った影響 `call_argument_candidate` 12件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "007005fc",
      "incomplete_value": false,
      "site": "00700618",
      "value": [
        "leaf",
        "const:e:8"
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
      "definition_site": "007005e8",
      "incomplete_value": true,
      "site": "007005ec",
      "value": [
        "LOAD",
        "8",
        [
          [
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
    "ordinal": 5,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "007005d4",
      "incomplete_value": false,
      "site": "007005ec",
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
      "unmatched:007005d4",
      "PARAM",
      [
        "storage",
        "00c65e58",
        null,
        "pointer __((offset(0x10)))"
      ]
    ],
    [
      "unmatched:007005d8",
      "READ",
      [
        "storage",
        "00ca4978",
        null,
        "undefined8"
      ]
    ],
    [
      "unmatched:007005e0",
      "PARAM",
      [
        "storage",
        "00c73810",
        null,
        "pointer __((offset(0x10)))"
      ]
    ]
  ],
  "added": [
    [
      "0070062c",
      "PARAM",
      [
        "storage",
        "00c65f28",
        null,
        "pointer __((offset(0x10)))"
      ]
    ],
    [
      "00700630",
      "READ",
      [
        "storage",
        "00ca4a78",
        null,
        "undefined8"
      ]
    ],
    [
      "00700638",
      "PARAM",
      [
        "storage",
        "00c738e0",
        null,
        "pointer __((offset(0x10)))"
      ]
    ]
  ]
}
~~~


~~~diff
- 007005c0 ["INT_ADD", "register:40f0:8", ["const:7005c0:8", "const:4:8"]]
- 007005c0 ["CALL", null, ["callee:00a835f8:8"]]
+ 00700618 ["INT_ADD", "register:40f0:8", ["const:700618:8", "const:4:8"]]
+ 00700618 ["CALL", null, ["callee:00a835f8:8"]]
- 007005ec ["INT_ADD", "register:40f0:8", ["const:7005ec:8", "const:4:8"]]
- 007005ec ["CALL", null, ["callee:00c586e0:8"]]
+ 00700644 ["INT_ADD", "register:40f0:8", ["const:700644:8", "const:4:8"]]
+ 00700644 ["CALL", null, ["callee:00c586e0:8"]]
- 0070060c ["INT_ADD", "register:40f0:8", ["const:70060c:8", "const:4:8"]]
- 0070060c ["CALL", null, ["callee:00ac9150:8"]]
+ 00700664 ["INT_ADD", "register:40f0:8", ["const:700664:8", "const:4:8"]]
+ 00700664 ["CALL", null, ["callee:00ac9150:8"]]
~~~


<a id="compare-fb0d9b7656271135b65206a5b579387c"></a>

### [`00700768`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00700/00700768.md) → [`007007c0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00700/007007c0.md) _INIT_111

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 5件 [`0043ae70`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043a/0043ae70.md) [`0043b7f8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043b7f8.md) [`00c57e30`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e30.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md)
- 新版 呼出元 0件  · 呼出先 5件 [`0043aeb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043a/0043aeb0.md) [`0043b838`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b838.md) [`00c57f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f00.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_call_alignment, unresolved_return_alignment, unresolved_store_alignment

命令の説明率　旧版 76.27% / 新版 76.27%

優先判定に残った影響 `call_argument_candidate` 15件, `unresolved_branch_alignment` 2件, `unresolved_call_alignment` 1件, `unresolved_return_alignment` 1件, `unresolved_store_alignment` 13件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "007008b4",
      "incomplete_value": true,
      "site": "007008c8",
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
    "ordinal": 0,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "007008bc",
      "incomplete_value": true,
      "site": "007008c8",
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
    "ordinal": 0,
    "slot": 3
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "007008c0",
      "incomplete_value": true,
      "site": "007008c8",
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
      "unmatched:00700798",
      "WRITE",
      [
        "storage",
        "Stack[-0x38]",
        null,
        null
      ]
    ],
    [
      "unmatched:007007a4",
      "READ",
      [
        "storage",
        "002b7f26",
        null,
        "string"
      ]
    ],
    [
      "unmatched:007007c0",
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
      "007007f0",
      "WRITE",
      [
        "storage",
        "Stack[-0x38]",
        null,
        null
      ]
    ],
    [
      "007007fc",
      "READ",
      [
        "storage",
        "002b7f66",
        null,
        "string"
      ]
    ],
    [
      "00700818",
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
- 007008c8 ["INT_ADD", "register:40f0:8", ["const:7008c8:8", "const:4:8"]]
- 007008c8 ["CALL", null, ["callee:0043b838:8"]]
+ 00700920 ["INT_ADD", "register:40f0:8", ["const:700920:8", "const:4:8"]]
+ 00700920 ["CALL", null, ["callee:0043b838:8"]]
- 007008dc ["INT_ADD", "register:40f0:8", ["const:7008dc:8", "const:4:8"]]
- 007008dc ["CALL", null, ["callee:0043b838:8"]]
+ 00700934 ["INT_ADD", "register:40f0:8", ["const:700934:8", "const:4:8"]]
+ 00700934 ["CALL", null, ["callee:0043b838:8"]]
- 007008f0 ["INT_ADD", "register:40f0:8", ["const:7008f0:8", "const:4:8"]]
- 007008f0 ["CALL", null, ["callee:0043b838:8"]]
+ 00700948 ["INT_ADD", "register:40f0:8", ["const:700948:8", "const:4:8"]]
+ 00700948 ["CALL", null, ["callee:0043b838:8"]]
~~~


<a id="compare-1f82db059f4d2f52fa35134638e1e7be"></a>

### [`00700af8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00700/00700af8.md) → [`00700b50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00700/00700b50.md) FUN_00700b50

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 1件 [`00856e2c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00856/00856e2c.md) · 呼出先 293件 [`0043bba4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043bba4.md) [`0043ddd8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043d/0043ddd8.md) [`00440b00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00440/00440b00.md) [`00440ec0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00440/00440ec0.md) [`0046c9c4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0046c/0046c9c4.md)
- 新版 呼出元 1件 [`00856e84`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00856/00856e84.md) · 呼出先 293件 [`0043bbe4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bbe4.md) [`0043de18`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043d/0043de18.md) [`00440b40`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00440/00440b40.md) [`00440f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00440/00440f00.md) [`0046ca04`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046c/0046ca04.md)

変更の種類 branch_condition_or_target, branch_value, call, call_argument_candidate, call_target, cfg_edge_inventory, constant, control_flow, local_def_use, operands_and_dependencies, operation_sequence, store_condition, store_destination, store_value, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 85.31% / 新版 85.31%

優先判定に残った影響 `call_argument_candidate` 152件, `call_target` 19件, `store_condition` 4件, `store_destination` 1件, `store_value` 11件, `unresolved_branch_alignment` 105件, `unresolved_call_alignment` 88件, `unresolved_store_alignment` 83件

アドレスに依存する影響 `branch_value` 1件, `call_argument_candidate` 1件, `store_condition` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00700ba8",
      "incomplete_value": true,
      "site": "00700ba8",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:285:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00700b50",
      "incomplete_value": true,
      "site": "00700b50",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:2d9:8"
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
      "definition_site": "00700bac",
      "incomplete_value": true,
      "site": "00700bac",
      "value": [
        "LOAD",
        "8",
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
      "definition_site": "00700b54",
      "incomplete_value": true,
      "site": "00700b54",
      "value": [
        "LOAD",
        "8",
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
    "ordinal": 19,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_destination",
    "new": {
      "definition_site": "00700c9c",
      "incomplete_value": true,
      "site": "00700c9c",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:570:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00700c44",
      "incomplete_value": true,
      "site": "00700c44",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:4a0:8"
              ]
            ]
          ]
        ]
      ]
    },
    "ordinal": 29,
    "slot": 1
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "00700b88",
      "READ",
      [
        "storage",
        "002b92d9",
        null,
        "string"
      ]
    ],
    [
      "00700ba0",
      "READ",
      [
        "storage",
        "002b92de",
        null,
        "string"
      ]
    ],
    [
      "unmatched:00700b90",
      "READ",
      [
        "storage",
        "002b8360",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "00700b88",
      "READ",
      [
        "storage",
        "002b9285",
        null,
        "string"
      ]
    ],
    [
      "00700ba0",
      "READ",
      [
        "storage",
        "002b928a",
        null,
        "string"
      ]
    ],
    [
      "00700be8",
      "READ",
      [
        "storage",
        "002b830c",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 00700bbc ["INT_ADD", "register:40f0:8", ["const:700bbc:8", "const:4:8"]]
- 00700bbc ["CALL", null, ["callee:00936618:8"]]
+ 00700c14 ["INT_ADD", "register:40f0:8", ["const:700c14:8", "const:4:8"]]
+ 00700c14 ["CALL", null, ["callee:00936618:8"]]
- 00700be4 ["INT_ADD", "register:40f0:8", ["const:700be4:8", "const:4:8"]]
- 00700be4 ["CALL", null, ["callee:00c57f80:8"]]
+ 00700c3c ["INT_ADD", "register:40f0:8", ["const:700c3c:8", "const:4:8"]]
+ 00700c3c ["CALL", null, ["callee:00c57f80:8"]]
+ 00700be4 ["COPY", "register:4050:8", ["const:7365:8"]]
~~~


<a id="compare-505f604079b620cc88b8efede2dbd7f4"></a>

### [`00707568`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00707/00707568.md) → [`007075c0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00707/007075c0.md) FUN_007075c0

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 2件 [`00700af8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00700/00700af8.md) [`009348d0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00934/009348d0.md) · 呼出先 14件 [`0047e8dc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047e/0047e8dc.md) [`0047edb4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047e/0047edb4.md) [`005e1b18`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005e1/005e1b18.md) [`005e1b30`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005e1/005e1b30.md) [`006648a0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00664/006648a0.md)
- 新版 呼出元 2件 [`00700b50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00700/00700b50.md) [`00934924`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00934/00934924.md) · 呼出先 14件 [`0047e91c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047e/0047e91c.md) [`0047edf4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047e/0047edf4.md) [`005e1b58`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005e1/005e1b58.md) [`005e1b70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005e1/005e1b70.md) [`006648e0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00664/006648e0.md)

変更の種類 branch_condition_or_target, branch_value, call, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, local_def_use, memory_read, memory_read_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 78.74% / 新版 78.74%

優先判定に残った影響 `call_argument_candidate` 8件, `unresolved_branch_alignment` 3件, `unresolved_call_alignment` 3件, `unresolved_store_alignment` 9件

アドレスに依存する影響 `branch_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "branch_value",
    "new": {
      "definition_site": "007075f4",
      "incomplete_value": true,
      "site": "007075f4",
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
      "definition_site": "0070759c",
      "incomplete_value": true,
      "site": "0070759c",
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
      "definition_site": "007075fc",
      "incomplete_value": false,
      "site": "00707610",
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
      "definition_site": "007075a4",
      "incomplete_value": false,
      "site": "007075b8",
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
      "definition_site": "00707604",
      "incomplete_value": false,
      "site": "00707610",
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
      "definition_site": "007075ac",
      "incomplete_value": false,
      "site": "007075b8",
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
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "007075f0",
      "READ",
      [
        "storage",
        "00ca4978",
        null,
        "undefined8"
      ]
    ],
    [
      "007075fc",
      "PARAM",
      [
        "storage",
        "00c65e58",
        null,
        "pointer __((offset(0x10)))"
      ]
    ],
    [
      "00707604",
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
      "007075f0",
      "READ",
      [
        "storage",
        "00ca4a78",
        null,
        "undefined8"
      ]
    ],
    [
      "007075fc",
      "PARAM",
      [
        "storage",
        "00c65f28",
        null,
        "pointer __((offset(0x10)))"
      ]
    ],
    [
      "00707604",
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
- 007075b8 ["INT_ADD", "register:40f0:8", ["const:7075b8:8", "const:4:8"]]
- 007075b8 ["CALL", null, ["callee:00c586e0:8"]]
+ 00707610 ["INT_ADD", "register:40f0:8", ["const:707610:8", "const:4:8"]]
+ 00707610 ["CALL", null, ["callee:00c586e0:8"]]
- 007075f4 ["INT_RIGHT", "tmp:0:4", ["register:4040:4", "const:0:4"]]
- 007075f4 ["INT_AND", "tmp:1:4", ["tmp:0:4", "const:1:4"]]
- 007075f4 ["INT_EQUAL", "tmp:2:1", ["tmp:1:4", "const:0:4"]]
- 007075f4 ["INT_EQUAL", "tmp:3:1", ["tmp:2:1", "const:1:1"]]
+ 0070764c ["INT_RIGHT", "tmp:0:4", ["register:4040:4", "const:0:4"]]
+ 0070764c ["INT_AND", "tmp:1:4", ["tmp:0:4", "const:1:4"]]
+ 0070764c ["INT_EQUAL", "tmp:2:1", ["tmp:1:4", "const:0:4"]]
+ 0070764c ["INT_EQUAL", "tmp:3:1", ["tmp:2:1", "const:1:1"]]
- 00707610 ["INT_ADD", "tmp:0:8", ["register:4010:8", "const:ca0:8"]]
- 00707610 ["LOAD", "register:4010:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-1e8c6eeec7135ffd935c06cdecbd0af5"></a>

### [`0070784c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00707/0070784c.md) → [`007078a4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00707/007078a4.md) FUN_007078a4

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`00700af8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00700/00700af8.md) · 呼出先 3件 [`009365c4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00936/009365c4.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md)
- 新版 呼出元 1件 [`00700b50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00700/00700b50.md) · 呼出先 3件 [`00936618`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00936/00936618.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 88.89% / 新版 88.89%

優先判定に残った影響 `store_value` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "007078d8",
      "incomplete_value": true,
      "site": "007078ec",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:2b6:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00707880",
      "incomplete_value": true,
      "site": "00707894",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:30a:8"
              ]
            ]
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
      "definition_site": "007078f0",
      "incomplete_value": true,
      "site": "007078f0",
      "value": [
        "LOAD",
        "8",
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
      "definition_site": "00707898",
      "incomplete_value": true,
      "site": "00707898",
      "value": [
        "LOAD",
        "8",
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
      "007078d8",
      "READ",
      [
        "storage",
        "002b930a",
        null,
        "string"
      ]
    ],
    [
      "007078dc",
      "READ",
      [
        "storage",
        "002b9317",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "007078d8",
      "READ",
      [
        "storage",
        "002b92b6",
        null,
        "string"
      ]
    ],
    [
      "007078dc",
      "READ",
      [
        "storage",
        "002b92c3",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 00707878 ["COPY", "tmp:0:8", ["const:30a:8"]]
- 00707878 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 00707878 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 00707878 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 007078d0 ["COPY", "tmp:0:8", ["const:2b6:8"]]
+ 007078d0 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 007078d0 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 007078d0 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
- 007078ac ["INT_ADD", "register:40f0:8", ["const:7078ac:8", "const:4:8"]]
- 007078ac ["CALL", null, ["callee:00936618:8"]]
+ 00707904 ["INT_ADD", "register:40f0:8", ["const:707904:8", "const:4:8"]]
+ 00707904 ["CALL", null, ["callee:00936618:8"]]
- 007078cc ["INT_ADD", "register:40f0:8", ["const:7078cc:8", "const:4:8"]]
- 007078cc ["CALL", null, ["callee:00c57f80:8"]]
+ 00707924 ["INT_ADD", "register:40f0:8", ["const:707924:8", "const:4:8"]]
+ 00707924 ["CALL", null, ["callee:00c57f80:8"]]
~~~


