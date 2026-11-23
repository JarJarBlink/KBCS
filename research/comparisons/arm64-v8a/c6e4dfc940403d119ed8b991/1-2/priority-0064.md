# v16.0.2 → v16.0.3 · 最優先の変更候補 (64)

[一覧の目次](README.md)

<a id="compare-a2f3b289d31dc145b8a00a6275a583ee"></a>

### [`008fd234`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008fd/008fd234.md) → [`008fe1e0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008fe/008fe1e0.md) FUN_008fe1e0

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `bounded` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 2件 [`008fc644`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008fc/008fc644.md) [`008fd554`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008fd/008fd554.md) · 呼出先 9件 [`0048ce94`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048c/0048ce94.md) [`005c17dc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005c1/005c17dc.md) [`005da5c4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005da/005da5c4.md) [`00691858`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00691/00691858.md) [`0071ed58`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0071e/0071ed58.md)
- 新版 呼出元 2件 [`008fd5f0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008fd/008fd5f0.md) [`008fe500`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008fe/008fe500.md) · 呼出先 9件 [`0048d1b4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0048d/0048d1b4.md) [`005c1b8c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005c1/005c1b8c.md) [`005da974`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005da/005da974.md) [`00691c08`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00691/00691c08.md) [`0071f108`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0071f/0071f108.md)

変更の種類 branch_condition_or_target, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, operands_and_dependencies, operation_sequence, unresolved_branch_alignment

命令の説明率　旧版 97.12% / 新版 97.12%

優先判定に残った影響 `unresolved_branch_alignment` 1件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "008fe288",
      "READ",
      [
        "storage",
        "0029f5e8",
        null,
        "string"
      ]
    ],
    [
      "008fe28c",
      "READ",
      [
        "storage",
        "0029f5ef",
        null,
        "string"
      ]
    ],
    [
      "unmatched:008fd3d4",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "008fe378"
      ]
    ]
  ],
  "added": [
    [
      "008fe288",
      "READ",
      [
        "storage",
        "0029f628",
        null,
        "string"
      ]
    ],
    [
      "008fe28c",
      "READ",
      [
        "storage",
        "0029f62f",
        null,
        "string"
      ]
    ],
    [
      "008fe380",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "008fe378"
      ]
    ]
  ]
}
~~~


~~~diff
- 008fd26c ["INT_ADD", "register:40f0:8", ["const:8fd26c:8", "const:4:8"]]
- 008fd26c ["CALL", null, ["callee:008ad384:8"]]
+ 008fe218 ["INT_ADD", "register:40f0:8", ["const:8fe218:8", "const:4:8"]]
+ 008fe218 ["CALL", null, ["callee:008ad384:8"]]
- 008fd290 ["INT_ADD", "register:40f0:8", ["const:8fd290:8", "const:4:8"]]
- 008fd290 ["CALL", null, ["callee:00691c08:8"]]
+ 008fe23c ["INT_ADD", "register:40f0:8", ["const:8fe23c:8", "const:4:8"]]
+ 008fe23c ["CALL", null, ["callee:00691c08:8"]]
- 008fd2b0 ["INT_ADD", "register:40f0:8", ["const:8fd2b0:8", "const:4:8"]]
- 008fd2b0 ["CALL", null, ["callee:00691c08:8"]]
+ 008fe25c ["INT_ADD", "register:40f0:8", ["const:8fe25c:8", "const:4:8"]]
+ 008fe25c ["CALL", null, ["callee:00691c08:8"]]
~~~


<a id="compare-f039f40cc7626e819cbb6a1a2c247ee9"></a>

### [`008fd554`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008fd/008fd554.md) → [`008fe500`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008fe/008fe500.md) FUN_008fe500

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 1件 [`008fed84`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008fe/008fed84.md) · 呼出先 43件 [`0043bb60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bb60.md) [`0043de18`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043d/0043de18.md) [`0046ca04`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046c/0046ca04.md) [`0046e7b8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046e/0046e7b8.md) [`0046e7c8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046e/0046e7c8.md)
- 新版 呼出元 1件 [`008ffd30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008ff/008ffd30.md) · 呼出先 43件 [`0043be80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043be80.md) [`0043e138`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043e/0043e138.md) [`0046cd24`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0046c/0046cd24.md) [`0046ead8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0046e/0046ead8.md) [`0046eae8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0046e/0046eae8.md)

変更の種類 branch_condition_or_target, call, call_argument_candidate, call_target, cfg_edge_inventory, constant, control_flow, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, store_value, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 63.90% / 新版 63.90%

優先判定に残った影響 `call_argument_candidate` 28件, `call_target` 3件, `store_value` 2件, `unresolved_branch_alignment` 27件, `unresolved_call_alignment` 74件, `unresolved_store_alignment` 11件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "008fe694",
      "incomplete_value": false,
      "site": "008fe694",
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
            "const:bd0:8"
          ]
        ]
      ]
    },
    "old": {
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
    "ordinal": 20,
    "slot": 2
  },
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "008fef20",
      "incomplete_value": false,
      "site": "008fef20",
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
            "const:c50:8"
          ]
        ]
      ]
    },
    "old": {
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
    "ordinal": 76,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "call_target",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "008fe564",
      "value": [
        "leaf",
        "ram:47b054:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "008fd5b8",
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
      "unmatched:008fd580",
      "WRITE",
      [
        "storage",
        "Stack[-0x78]",
        null,
        null
      ]
    ],
    [
      "008fe564",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ],
    [
      "008fe58c",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ]
  ],
  "added": [
    [
      "008fe52c",
      "WRITE",
      [
        "storage",
        "Stack[-0x78]",
        null,
        null
      ]
    ],
    [
      "008fe564",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047b054"
      ]
    ],
    [
      "008fe58c",
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
- 008fd5b8 ["INT_ADD", "register:40f0:8", ["const:8fd5b8:8", "const:4:8"]]
- 008fd5b8 ["CALL", null, ["ram:47ad34:8"]]
+ 008fe564 ["INT_ADD", "register:40f0:8", ["const:8fe564:8", "const:4:8"]]
+ 008fe564 ["CALL", null, ["ram:47b054:8"]]
- 008fd5e0 ["INT_ADD", "register:40f0:8", ["const:8fd5e0:8", "const:4:8"]]
- 008fd5e0 ["CALL", null, ["ram:47ad34:8"]]
+ 008fe58c ["INT_ADD", "register:40f0:8", ["const:8fe58c:8", "const:4:8"]]
+ 008fe58c ["CALL", null, ["ram:47b054:8"]]
- 008fd648 ["INT_ADD", "register:40f0:8", ["const:8fd648:8", "const:4:8"]]
- 008fd648 ["CALL", null, ["callee:008ad9e0:8"]]
+ 008fe5f4 ["INT_ADD", "register:40f0:8", ["const:8fe5f4:8", "const:4:8"]]
+ 008fe5f4 ["CALL", null, ["callee:008ad9e0:8"]]
~~~


<a id="compare-c270bc0923a9860fb5af59c5d5766941"></a>

### [`008fe5d8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008fe/008fe5d8.md) → [`008ff584`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008ff/008ff584.md) FUN_008ff584

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `bounded` · 参照 `equal` · `cfg_change`

- 旧版 呼出元 1件 [`008fd554`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008fd/008fd554.md) · 呼出先 2件 [`008aca34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008ac/008aca34.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)
- 新版 呼出元 1件 [`008fe500`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008fe/008fe500.md) · 呼出先 2件 [`008ad9e0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008ad/008ad9e0.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md)

変更の種類 branch_condition_or_target, cfg_edge_inventory, constant, control_flow, control_flow_count, local_def_use, operands_and_dependencies, operation_sequence, unresolved_return_alignment

命令の説明率　旧版 95.83% / 新版 95.83%

優先判定に残った影響 `unresolved_return_alignment` 1件

~~~diff
- 008fe5fc ["INT_ADD", "register:40f0:8", ["const:8fe5fc:8", "const:4:8"]]
- 008fe5fc ["CALL", null, ["callee:008ad9e0:8"]]
+ 008ff5a8 ["INT_ADD", "register:40f0:8", ["const:8ff5a8:8", "const:4:8"]]
+ 008ff5a8 ["CALL", null, ["callee:008ad9e0:8"]]
- 008fe61c ["BOOL_NEGATE", "tmp:0:1", ["register:101:1"]]
- 008fe61c ["CBRANCH", null, ["local:b2:8", "tmp:0:1"]]
+ 008ff5c8 ["BOOL_NEGATE", "tmp:0:1", ["register:101:1"]]
+ 008ff5c8 ["CBRANCH", null, ["local:b3:8", "tmp:0:1"]]
- 008fe630 ["COPY", "register:0:8", ["register:40f0:8"]]
- 008fe630 ["RETURN", null, ["register:0:8"]]
~~~


<a id="compare-d96005c5b73967c2799602403d016338"></a>

### [`008fe684`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008fe/008fe684.md) → [`008ff630`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008ff/008ff630.md) FUN_008ff630

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`008ff094`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008ff/008ff094.md) · 呼出先 12件 [`004678a0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00467/004678a0.md) [`00469184`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00469/00469184.md) [`0046bd94`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046b/0046bd94.md) [`0046ca04`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046c/0046ca04.md) [`0046edcc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046e/0046edcc.md)
- 新版 呼出元 1件 [`00900040`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00900/00900040.md) · 呼出先 12件 [`00467bc0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00467/00467bc0.md) [`004694a4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00469/004694a4.md) [`0046c0b4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0046c/0046c0b4.md) [`0046cd24`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0046c/0046cd24.md) [`0046f0ec`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0046f/0046f0ec.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 83.12% / 新版 83.12%

優先判定に残った影響 `call_argument_candidate` 22件, `unresolved_branch_alignment` 3件, `unresolved_call_alignment` 8件, `unresolved_store_alignment` 13件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "008ff678",
      "incomplete_value": true,
      "site": "008ff684",
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
            "const:ba8:8"
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
      "definition_site": "008ff6f4",
      "incomplete_value": true,
      "site": "008ff71c",
      "value": [
        "LOAD",
        "8",
        [
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
                "register:40b0:8"
              ],
              [
                "leaf",
                "const:a38:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008fe748",
      "incomplete_value": true,
      "site": "008fe770",
      "value": [
        "LOAD",
        "8",
        [
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
                "register:40b0:8"
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
    "ordinal": 4,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "008ff6fc",
      "incomplete_value": false,
      "site": "008ff71c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c66000:8"
          ],
          [
            "leaf",
            "const:ef8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008fe750",
      "incomplete_value": false,
      "site": "008fe770",
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
      "unmatched:008fe688",
      "WRITE",
      [
        "storage",
        "Stack[-0x60]",
        null,
        null
      ]
    ],
    [
      "unmatched:008fe68c",
      "WRITE",
      [
        "storage",
        "Stack[-0x50]",
        null,
        null
      ]
    ],
    [
      "unmatched:008fe690",
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
      "008ff634",
      "WRITE",
      [
        "storage",
        "Stack[-0x60]",
        null,
        null
      ]
    ],
    [
      "008ff638",
      "WRITE",
      [
        "storage",
        "Stack[-0x50]",
        null,
        null
      ]
    ],
    [
      "008ff63c",
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
- 008fe6d8 ["INT_ADD", "register:40f0:8", ["const:8fe6d8:8", "const:4:8"]]
- 008fe6d8 ["CALL", null, ["callee:00c596b0:8"]]
+ 008ff684 ["INT_ADD", "register:40f0:8", ["const:8ff684:8", "const:4:8"]]
+ 008ff684 ["CALL", null, ["callee:00c596b0:8"]]
- 008fe770 ["INT_ADD", "register:40f0:8", ["const:8fe770:8", "const:4:8"]]
- 008fe770 ["CALL", null, ["callee:00c596b0:8"]]
+ 008ff71c ["INT_ADD", "register:40f0:8", ["const:8ff71c:8", "const:4:8"]]
+ 008ff71c ["CALL", null, ["callee:00c596b0:8"]]
- 008fe77c ["INT_ADD", "register:40f0:8", ["const:8fe77c:8", "const:4:8"]]
- 008fe77c ["CALL", null, ["callee:0046f0ec:8"]]
+ 008ff728 ["INT_ADD", "register:40f0:8", ["const:8ff728:8", "const:4:8"]]
+ 008ff728 ["CALL", null, ["callee:0046f0ec:8"]]
~~~


<a id="compare-fc9671e9a53517f377ce895b12584159"></a>

### [`008fea38`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008fe/008fea38.md) → [`008ff9e4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008ff/008ff9e4.md) FUN_008ff9e4

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00856e84`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00856/00856e84.md) · 呼出先 19件 [`005c17dc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005c1/005c17dc.md) [`0066d11c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0066d/0066d11c.md) [`0086a1bc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0086a/0086a1bc.md) [`008fc644`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008fc/008fc644.md) [`008ff920`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008ff/008ff920.md)
- 新版 呼出元 1件 [`00857e30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00857/00857e30.md) · 呼出先 19件 [`005c1b8c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005c1/005c1b8c.md) [`0066d4cc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0066d/0066d4cc.md) [`0086b168`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0086b/0086b168.md) [`008fd5f0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008fd/008fd5f0.md) [`009008cc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00900/009008cc.md)

変更の種類 branch_value, call, call_argument_candidate, call_target, constant, operands_and_dependencies, store_destination, store_value

命令の説明率　旧版 91.44% / 新版 91.44%

優先判定に残った影響 `branch_value` 2件, `call_argument_candidate` 2件, `call_target` 1件, `store_destination` 3件, `store_value` 4件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_destination",
    "new": {
      "definition_site": "008ffb54",
      "incomplete_value": false,
      "site": "008ffb54",
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
            "const:a28:8"
          ]
        ]
      ]
    },
    "old": {
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
    "ordinal": 36,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "008ffb4c",
      "incomplete_value": true,
      "site": "008ffb54",
      "value": [
        "LOAD",
        "8",
        [
          [
            "leaf",
            "const:1b1:8"
          ],
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
                "const:a38:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
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
    "ordinal": 36,
    "slot": 2
  },
  {
    "confidence": "bounded",
    "kind": "store_destination",
    "new": {
      "definition_site": "008ffb58",
      "incomplete_value": false,
      "site": "008ffb58",
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
            "const:a38:8"
          ]
        ]
      ]
    },
    "old": {
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
      "008ffb4c",
      "READ",
      [
        "storage",
        "00ca4a78",
        null,
        "undefined8"
      ]
    ],
    [
      "008ffb50",
      "READ",
      [
        "storage",
        "00ca4a68",
        null,
        "undefined8"
      ]
    ],
    [
      "008ffb54",
      "WRITE",
      [
        "storage",
        "00ca4a68",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "008ffb4c",
      "READ",
      [
        "storage",
        "00ca5a38",
        null,
        "undefined8"
      ]
    ],
    [
      "008ffb50",
      "READ",
      [
        "storage",
        "00ca5a28",
        null,
        "undefined8"
      ]
    ],
    [
      "008ffb54",
      "WRITE",
      [
        "storage",
        "00ca5a28",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 008feba8 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:a68:8"]]
- 008feba8 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4048:8"]]
+ 008ffb54 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:a28:8"]]
+ 008ffb54 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4048:8"]]
- 008febac ["INT_ADD", "tmp:0:8", ["register:40b0:8", "const:a78:8"]]
- 008febac ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4050:8"]]
+ 008ffb58 ["INT_ADD", "tmp:0:8", ["register:40b0:8", "const:a38:8"]]
+ 008ffb58 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4050:8"]]
- 008febc4 ["INT_ADD", "tmp:0:8", ["register:40b0:8", "const:a78:8"]]
- 008febc4 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:40a0:8"]]
+ 008ffb70 ["INT_ADD", "tmp:0:8", ["register:40b0:8", "const:a38:8"]]
+ 008ffb70 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:40a0:8"]]
~~~


<a id="compare-313bbcc4ec61869797082dd061829b01"></a>

### [`008ff250`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008ff/008ff250.md) → [`009001fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00900/009001fc.md) FUN_009001fc

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
      "definition_site": "00900220",
      "incomplete_value": false,
      "site": "00900220",
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
            "const:bd0:8"
          ]
        ]
      ]
    },
    "old": {
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
      "00900220",
      "DATA",
      [
        "storage",
        "00c85c00",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00900220",
      "DATA",
      [
        "storage",
        "00c86bd0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 008ff264 ["INT_ADD", "register:40f0:8", ["const:8ff264:8", "const:4:8"]]
- 008ff264 ["CALL", null, ["callee:00c58f30:8"]]
+ 00900210 ["INT_ADD", "register:40f0:8", ["const:900210:8", "const:4:8"]]
+ 00900210 ["CALL", null, ["callee:00c58f30:8"]]
- 008ff26c ["COPY", "register:4040:8", ["const:c85000:8"]]
+ 00900218 ["COPY", "register:4040:8", ["const:c86000:8"]]
- 008ff270 ["COPY", "tmp:0:8", ["const:c00:8"]]
- 008ff270 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 008ff270 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 008ff270 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 0090021c ["COPY", "tmp:0:8", ["const:bd0:8"]]
+ 0090021c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 0090021c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 0090021c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-aada97a510d494c90915d081e2c1a81b"></a>

### [`008ff284`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008ff/008ff284.md) → [`00900230`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00900/00900230.md) FUN_00900230

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
      "definition_site": "0090023c",
      "incomplete_value": false,
      "site": "0090023c",
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
            "const:bd0:8"
          ]
        ]
      ]
    },
    "old": {
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
      "0090023c",
      "DATA",
      [
        "storage",
        "00c85c00",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "0090023c",
      "DATA",
      [
        "storage",
        "00c86bd0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 008ff288 ["COPY", "register:4048:8", ["const:c85000:8"]]
+ 00900234 ["COPY", "register:4048:8", ["const:c86000:8"]]
- 008ff28c ["COPY", "tmp:0:8", ["const:c00:8"]]
- 008ff28c ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 008ff28c ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 008ff28c ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 00900238 ["COPY", "tmp:0:8", ["const:bd0:8"]]
+ 00900238 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 00900238 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 00900238 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
~~~


<a id="compare-75c35b29789fcd7343aba71b77c335ab"></a>

### [`008ff2a0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008ff/008ff2a0.md) → [`0090024c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00900/0090024c.md) FUN_0090024c

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 3件 [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md) [`0047ce14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047ce14.md) [`008b91d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b9/008b91d0.md)
- 新版 呼出元 0件  · 呼出先 3件 [`0047b054`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047b/0047b054.md) [`0047d134`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047d/0047d134.md) [`008ba17c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008ba/008ba17c.md)

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
      "site": "00900270",
      "value": [
        "leaf",
        "ram:47b054:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "008ff2c4",
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
      "00900270",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ]
  ],
  "added": [
    [
      "00900270",
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
- 008ff2c4 ["INT_ADD", "register:40f0:8", ["const:8ff2c4:8", "const:4:8"]]
- 008ff2c4 ["CALL", null, ["ram:47ad34:8"]]
+ 00900270 ["INT_ADD", "register:40f0:8", ["const:900270:8", "const:4:8"]]
+ 00900270 ["CALL", null, ["ram:47b054:8"]]
- 008ff2d0 ["INT_ADD", "register:40f0:8", ["const:8ff2d0:8", "const:4:8"]]
- 008ff2d0 ["CALL", null, ["callee:0047d134:8"]]
+ 0090027c ["INT_ADD", "register:40f0:8", ["const:90027c:8", "const:4:8"]]
+ 0090027c ["CALL", null, ["callee:0047d134:8"]]
~~~


<a id="compare-1eb20d6a0c5647cc97af1f48f5f0adc4"></a>

### [`008ff318`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008ff/008ff318.md) → [`009002c4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00900/009002c4.md) FUN_009002c4

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 2件 [`005c17dc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005c1/005c17dc.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 0件  · 呼出先 2件 [`005c1b8c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005c1/005c1b8c.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 branch_condition_or_target, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_store_alignment

命令の説明率　旧版 85.71% / 新版 85.71%

優先判定に残った影響 `unresolved_store_alignment` 1件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:008ff334",
      "DATA",
      [
        "storage",
        "00c85c80",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "009002e0",
      "DATA",
      [
        "storage",
        "00c86c50",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 008ff328 ["COPY", "register:4040:8", ["const:c85000:8"]]
+ 009002d4 ["COPY", "register:4040:8", ["const:c86000:8"]]
- 008ff32c ["COPY", "tmp:0:8", ["const:c80:8"]]
- 008ff32c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 008ff32c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 008ff32c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 008ff330 ["COPY", "register:4098:8", ["register:4000:8"]]
~~~


<a id="compare-67ef4ea8fa0a62e0f9eb95fec04448db"></a>

### [`008ff36c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008ff/008ff36c.md) → [`00900318`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00900/00900318.md) FUN_00900318

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 2件 [`005c17dc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005c1/005c17dc.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 0件  · 呼出先 2件 [`005c1b8c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005c1/005c1b8c.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_store_alignment

命令の説明率　旧版 85.00% / 新版 85.00%

優先判定に残った影響 `call_argument_candidate` 1件, `unresolved_store_alignment` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00900324",
      "incomplete_value": true,
      "site": "00900338",
      "value": [
        "LOAD",
        "8",
        [
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
                "register:4000:8"
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
      "unmatched:008ff388",
      "DATA",
      [
        "storage",
        "00c85c80",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00900334",
      "DATA",
      [
        "storage",
        "00c86c50",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 008ff38c ["INT_ADD", "register:40f0:8", ["const:8ff38c:8", "const:4:8"]]
- 008ff38c ["CALL", null, ["callee:005c1b8c:8"]]
+ 00900338 ["INT_ADD", "register:40f0:8", ["const:900338:8", "const:4:8"]]
+ 00900338 ["CALL", null, ["callee:005c1b8c:8"]]
- 008ff37c ["COPY", "register:4040:8", ["const:c85000:8"]]
+ 00900328 ["COPY", "register:4040:8", ["const:c86000:8"]]
- 008ff380 ["COPY", "tmp:0:8", ["const:c80:8"]]
- 008ff380 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 008ff380 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 008ff380 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-48592ca0959196040bdff2fcb4a017ce"></a>

### [`008ff3bc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008ff/008ff3bc.md) → [`00900368`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00900/00900368.md) FUN_00900368

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 2件 [`008ff6d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008ff/008ff6d0.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)
- 新版 呼出元 0件  · 呼出先 2件 [`0090067c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00900/0090067c.md) [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 87.50% / 新版 87.50%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "0090038c",
      "incomplete_value": false,
      "site": "0090038c",
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
            "const:c50:8"
          ]
        ]
      ]
    },
    "old": {
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
      "0090038c",
      "DATA",
      [
        "storage",
        "00c85c80",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "0090038c",
      "DATA",
      [
        "storage",
        "00c86c50",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 008ff3d0 ["INT_ADD", "register:40f0:8", ["const:8ff3d0:8", "const:4:8"]]
- 008ff3d0 ["CALL", null, ["callee:00c58f30:8"]]
+ 0090037c ["INT_ADD", "register:40f0:8", ["const:90037c:8", "const:4:8"]]
+ 0090037c ["CALL", null, ["callee:00c58f30:8"]]
- 008ff3d8 ["COPY", "register:4040:8", ["const:c85000:8"]]
+ 00900384 ["COPY", "register:4040:8", ["const:c86000:8"]]
- 008ff3dc ["COPY", "tmp:0:8", ["const:c80:8"]]
- 008ff3dc ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 008ff3dc ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 008ff3dc ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00900388 ["COPY", "tmp:0:8", ["const:c50:8"]]
+ 00900388 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00900388 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00900388 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-0ce05dadaa957a7e49bc74fa7b0abe30"></a>

### [`008ff410`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008ff/008ff410.md) → [`009003bc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00900/009003bc.md) FUN_009003bc

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 1件 [`008ff6d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008ff/008ff6d0.md)
- 新版 呼出元 0件  · 呼出先 1件 [`0090067c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00900/0090067c.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 71.43% / 新版 71.43%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "009003c8",
      "incomplete_value": false,
      "site": "009003c8",
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
            "const:c50:8"
          ]
        ]
      ]
    },
    "old": {
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
      "009003c8",
      "DATA",
      [
        "storage",
        "00c85c80",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "009003c8",
      "DATA",
      [
        "storage",
        "00c86c50",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 008ff414 ["COPY", "register:4048:8", ["const:c85000:8"]]
+ 009003c0 ["COPY", "register:4048:8", ["const:c86000:8"]]
- 008ff418 ["COPY", "tmp:0:8", ["const:c80:8"]]
- 008ff418 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 008ff418 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 008ff418 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 009003c4 ["COPY", "tmp:0:8", ["const:c50:8"]]
+ 009003c4 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 009003c4 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 009003c4 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
~~~


<a id="compare-dcdf1cbd28f2104d564e4f232d747ca1"></a>

### [`008ff478`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008ff/008ff478.md) → [`00900424`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00900/00900424.md) FUN_00900424

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `equal` · `cfg_change`

- 旧版 呼出元 1件 [`008fd554`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008fd/008fd554.md) · 呼出先 2件 [`005c17dc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005c1/005c17dc.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 1件 [`008fe500`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008fe/008fe500.md) · 呼出先 2件 [`005c1b8c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005c1/005c1b8c.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

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
      "definition_site": "008ff484",
      "incomplete_value": true,
      "site": "008ff490",
      "value": [
        "LOAD",
        "8",
        [
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
                "register:4000:8"
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
    "ordinal": 0,
    "slot": 2
  }
]
~~~


~~~diff
- 008ff490 ["INT_ADD", "register:40f0:8", ["const:8ff490:8", "const:4:8"]]
- 008ff490 ["CALL", null, ["callee:005c1b8c:8"]]
+ 0090043c ["INT_ADD", "register:40f0:8", ["const:90043c:8", "const:4:8"]]
+ 0090043c ["CALL", null, ["callee:005c1b8c:8"]]
- 008ff49c ["INT_ADD", "register:40f0:8", ["const:8ff49c:8", "const:4:8"]]
- 008ff49c ["CALL", null, ["callee:005c1b8c:8"]]
+ 00900448 ["INT_ADD", "register:40f0:8", ["const:900448:8", "const:4:8"]]
+ 00900448 ["CALL", null, ["callee:005c1b8c:8"]]
- 008ff4a4 ["INT_RIGHT", "tmp:0:4", ["register:4040:4", "const:0:4"]]
- 008ff4a4 ["INT_AND", "tmp:1:4", ["tmp:0:4", "const:1:4"]]
- 008ff4a4 ["INT_EQUAL", "tmp:2:1", ["tmp:1:4", "const:0:4"]]
- 008ff4a4 ["INT_EQUAL", "tmp:3:1", ["tmp:2:1", "const:1:1"]]
+ 00900450 ["INT_RIGHT", "tmp:0:4", ["register:4040:4", "const:0:4"]]
+ 00900450 ["INT_AND", "tmp:1:4", ["tmp:0:4", "const:1:4"]]
+ 00900450 ["INT_EQUAL", "tmp:2:1", ["tmp:1:4", "const:0:4"]]
+ 00900450 ["INT_EQUAL", "tmp:3:1", ["tmp:2:1", "const:1:1"]]
~~~


<a id="compare-5d0ff180f8b3aae9a7fb06dff697b17a"></a>

### [`008ff4c0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008ff/008ff4c0.md) → [`0090046c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00900/0090046c.md) FUN_0090046c

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 10件 [`0043bbe4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bbe4.md) [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md) [`0047ce14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047ce14.md) [`0071c4b8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0071c/0071c4b8.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)
- 新版 呼出元 0件  · 呼出先 10件 [`0043bf04`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bf04.md) [`0047b054`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047b/0047b054.md) [`0047d134`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047d/0047d134.md) [`0071c868`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0071c/0071c868.md) [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md)

変更の種類 branch_condition_or_target, call, call_count, constant, control_flow, control_flow_count, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 97.54% / 新版 97.54%

優先判定に残った影響 `unresolved_branch_alignment` 1件, `unresolved_call_alignment` 1件, `unresolved_store_alignment` 1件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:008ff4ec",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ],
    [
      "unmatched:008ff538",
      "DATA",
      [
        "storage",
        "0039b1b8",
        null,
        "dword"
      ]
    ],
    [
      "unmatched:008ff53c",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "0090051c"
      ]
    ]
  ],
  "added": [
    [
      "00900498",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047b054"
      ]
    ],
    [
      "009004e4",
      "DATA",
      [
        "storage",
        "0039b1b8",
        "fde_0039b1b8",
        "dword"
      ]
    ],
    [
      "009004e8",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "0090051c"
      ]
    ]
  ]
}
~~~


~~~diff
- 008ff4e4 ["BOOL_NEGATE", "tmp:0:1", ["register:101:1"]]
- 008ff4e4 ["CBRANCH", null, ["local:b25:8", "tmp:0:1"]]
+ 00900490 ["BOOL_NEGATE", "tmp:0:1", ["register:101:1"]]
+ 00900490 ["CBRANCH", null, ["local:b24:8", "tmp:0:1"]]
- 008ff4ec ["INT_ADD", "register:40f0:8", ["const:8ff4ec:8", "const:4:8"]]
- 008ff4ec ["CALL", null, ["ram:47ad34:8"]]
- 008ff4f8 ["INT_ADD", "register:40f0:8", ["const:8ff4f8:8", "const:4:8"]]
- 008ff4f8 ["CALL", null, ["callee:0047d134:8"]]
+ 009004a4 ["INT_ADD", "register:40f0:8", ["const:9004a4:8", "const:4:8"]]
+ 009004a4 ["CALL", null, ["callee:0047d134:8"]]
~~~


<a id="compare-4933d621e9cdfea74c13cec7cf3e5998"></a>

### [`008ff6d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008ff/008ff6d0.md) → [`0090067c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00900/0090067c.md) FUN_0090067c

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal` · `cfg_change`

- 旧版 呼出元 2件 [`008ff3bc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008ff/008ff3bc.md) [`008ff410`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008ff/008ff410.md) · 呼出先 2件 [`0043bb60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bb60.md) [`00691858`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00691/00691858.md)
- 新版 呼出元 2件 [`00900368`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00900/00900368.md) [`009003bc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00900/009003bc.md) · 呼出先 2件 [`0043be80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043be80.md) [`00691c08`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00691/00691c08.md)

変更の種類 branch_condition_or_target, cfg_edge_inventory, constant, control_flow, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 008ff704 ["INT_RIGHT", "tmp:0:4", ["register:4048:4", "const:0:4"]]
- 008ff704 ["INT_AND", "tmp:1:4", ["tmp:0:4", "const:1:4"]]
- 008ff704 ["INT_EQUAL", "tmp:2:1", ["tmp:1:4", "const:0:4"]]
- 008ff704 ["INT_EQUAL", "tmp:3:1", ["tmp:2:1", "const:0:1"]]
+ 009006b0 ["INT_RIGHT", "tmp:0:4", ["register:4048:4", "const:0:4"]]
+ 009006b0 ["INT_AND", "tmp:1:4", ["tmp:0:4", "const:1:4"]]
+ 009006b0 ["INT_EQUAL", "tmp:2:1", ["tmp:1:4", "const:0:4"]]
+ 009006b0 ["INT_EQUAL", "tmp:3:1", ["tmp:2:1", "const:0:1"]]
- 008ff718 ["BRANCH", null, ["local:b4:8"]]
+ 009006c4 ["BRANCH", null, ["local:b3:8"]]
- 008ff724 ["INT_ADD", "register:40f0:8", ["const:8ff724:8", "const:4:8"]]
- 008ff724 ["CALL", null, ["callee:0043be80:8"]]
+ 009006d0 ["INT_ADD", "register:40f0:8", ["const:9006d0:8", "const:4:8"]]
+ 009006d0 ["CALL", null, ["callee:0043be80:8"]]
~~~


<a id="compare-7296737bf36ab9ca57e0f749a67706e7"></a>

### [`008ff7c8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008ff/008ff7c8.md) → [`00900774`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00900/00900774.md) FUN_00900774

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md)

変更の種類 cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_return_alignment, unresolved_store_alignment

命令の説明率　旧版 61.54% / 新版 61.54%

優先判定に残った影響 `unresolved_return_alignment` 1件, `unresolved_store_alignment` 2件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:008ff7ec",
      "DATA",
      [
        "storage",
        "00c85d00",
        null,
        "undefined *"
      ]
    ],
    [
      "unmatched:008ff7f0",
      "READ",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "unmatched:008ff7f4",
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
      "00900798",
      "DATA",
      [
        "storage",
        "00c86cd0",
        null,
        "undefined *"
      ]
    ],
    [
      "0090079c",
      "READ",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "009007a0",
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
- 008ff7dc ["INT_ADD", "register:40f0:8", ["const:8ff7dc:8", "const:4:8"]]
- 008ff7dc ["CALL", null, ["callee:00c58f30:8"]]
+ 00900788 ["INT_ADD", "register:40f0:8", ["const:900788:8", "const:4:8"]]
+ 00900788 ["CALL", null, ["callee:00c58f30:8"]]
- 008ff7e4 ["COPY", "register:4040:8", ["const:c85000:8"]]
+ 00900790 ["COPY", "register:4040:8", ["const:c86000:8"]]
- 008ff7e8 ["COPY", "tmp:0:8", ["const:d00:8"]]
- 008ff7e8 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 008ff7e8 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 008ff7e8 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-fd3bc8befa48baf9f0d33f33864aeee4"></a>

### [`008ff7fc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008ff/008ff7fc.md) → [`009007a8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00900/009007a8.md) FUN_009007a8

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
      "definition_site": "009007b4",
      "incomplete_value": false,
      "site": "009007b4",
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
            "const:cd0:8"
          ]
        ]
      ]
    },
    "old": {
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
      "009007b4",
      "DATA",
      [
        "storage",
        "00c85d00",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "009007b4",
      "DATA",
      [
        "storage",
        "00c86cd0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 008ff800 ["COPY", "register:4048:8", ["const:c85000:8"]]
+ 009007ac ["COPY", "register:4048:8", ["const:c86000:8"]]
- 008ff804 ["COPY", "tmp:0:8", ["const:d00:8"]]
- 008ff804 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 008ff804 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 008ff804 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 009007b0 ["COPY", "tmp:0:8", ["const:cd0:8"]]
+ 009007b0 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 009007b0 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 009007b0 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
~~~


<a id="compare-d6b128d680258cd7ebeba4d2e09b4a2b"></a>

### [`008ff818`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008ff/008ff818.md) → [`009007c4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00900/009007c4.md) FUN_009007c4

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 4件 [`007562fc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00756/007562fc.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md) [`0085bbc8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0085b/0085bbc8.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)
- 新版 呼出元 0件  · 呼出先 4件 [`007566ac`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00756/007566ac.md) [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md) [`0085cb74`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0085c/0085cb74.md) [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md)

変更の種類 branch_condition_or_target, call, call_count, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 68.63% / 新版 68.63%

優先判定に残った影響 `unresolved_branch_alignment` 1件, `unresolved_call_alignment` 2件, `unresolved_store_alignment` 8件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:008ff818",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "unmatched:008ff81c",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "unmatched:008ff820",
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
      "009007c4",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "009007c8",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "009007cc",
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
- 008ff818 ["COPY", "tmp:0:8", ["register:40e8:8"]]
- 008ff818 ["COPY", "tmp:1:8", ["register:40f0:8"]]
- 008ff818 ["INT_ADD", "register:8:8", ["register:8:8", "const:ffffffffffffffd0:8"]]
- 008ff818 ["STORE", null, ["const:1b1:8", "register:8:8", "tmp:0:8"]]
- 008ff81c ["INT_ADD", "tmp:0:8", ["register:8:8", "const:10:8"]]
- 008ff81c ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:40a8:8"]]
- 008ff820 ["COPY", "tmp:0:8", ["register:40a0:8"]]
- 008ff820 ["COPY", "tmp:1:8", ["register:4098:8"]]
- 008ff820 ["INT_ADD", "tmp:2:8", ["register:8:8", "const:20:8"]]
- 008ff820 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
~~~


<a id="compare-6e6c2b95098a871bee59607c2f6aefed"></a>

### [`008ff920`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008ff/008ff920.md) → [`009008cc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00900/009008cc.md) FUN_009008cc

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 1件 [`008fea38`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008fe/008fea38.md) · 呼出先 29件 [`0043b7a4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b7a4.md) [`0043bb60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bb60.md) [`00447734`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00447/00447734.md) [`00447f34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00447/00447f34.md) [`0046e804`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046e/0046e804.md)
- 新版 呼出元 1件 [`008ff9e4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008ff/008ff9e4.md) · 呼出先 29件 [`0043bac4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bac4.md) [`0043be80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043be80.md) [`00447a54`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00447/00447a54.md) [`00448254`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00448/00448254.md) [`0046eb24`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0046e/0046eb24.md)

変更の種類 branch_condition_or_target, call_argument_candidate, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, store_value, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 51.18% / 新版 51.18%

優先判定に残った影響 `call_argument_candidate` 7件, `store_value` 1件, `unresolved_branch_alignment` 86件, `unresolved_call_alignment` 82件, `unresolved_store_alignment` 134件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "0090185c",
      "incomplete_value": true,
      "site": "0090186c",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:dac:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "009008b0",
      "incomplete_value": true,
      "site": "009008c0",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:cdf:8"
              ]
            ]
          ]
        ]
      ]
    },
    "ordinal": 181,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "009009b4",
      "incomplete_value": false,
      "site": "009009c0",
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
      "definition_site": "008ffa08",
      "incomplete_value": false,
      "site": "008ffa14",
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
    "ordinal": 4,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00900ad4",
      "incomplete_value": true,
      "site": "00900adc",
      "value": [
        "live",
        "register:40a8:8"
      ]
    },
    "old": null,
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
      "unmatched:008ff964",
      "DATA",
      [
        "storage",
        "00c85d80",
        null,
        "pointer"
      ]
    ],
    [
      "unmatched:008ff9a4",
      "READ",
      [
        "storage",
        "00ca5038",
        null,
        "undefined1"
      ]
    ],
    [
      "unmatched:008ff9a8",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "unmatched:00900c2c"
      ]
    ]
  ],
  "added": [
    [
      "00900910",
      "DATA",
      [
        "storage",
        "00c86d50",
        null,
        "pointer"
      ]
    ],
    [
      "00900950",
      "READ",
      [
        "storage",
        "00ca5ff8",
        null,
        "undefined1"
      ]
    ],
    [
      "00900954",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00901bd8"
      ]
    ]
  ]
}
~~~


~~~diff
- 008ffa14 ["INT_ADD", "register:40f0:8", ["const:8ffa14:8", "const:4:8"]]
- 008ffa14 ["CALL", null, ["callee:0047e96c:8"]]
+ 009009c0 ["INT_ADD", "register:40f0:8", ["const:9009c0:8", "const:4:8"]]
+ 009009c0 ["CALL", null, ["callee:0047e96c:8"]]
- 008ffb30 ["INT_ADD", "register:40f0:8", ["const:8ffb30:8", "const:4:8"]]
- 008ffb30 ["CALL", null, ["callee:0047e96c:8"]]
+ 00900adc ["INT_ADD", "register:40f0:8", ["const:900adc:8", "const:4:8"]]
+ 00900adc ["CALL", null, ["callee:0047e96c:8"]]
- 008fffc8 ["INT_ADD", "register:40f0:8", ["const:8fffc8:8", "const:4:8"]]
- 008fffc8 ["CALL", null, ["callee:0047e96c:8"]]
+ 00900f74 ["INT_ADD", "register:40f0:8", ["const:900f74:8", "const:4:8"]]
+ 00900f74 ["CALL", null, ["callee:0047e96c:8"]]
~~~


<a id="compare-923bd9da3384550b93272f92dfed364b"></a>

### [`009011e0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00901/009011e0.md) → [`0090218c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00902/0090218c.md) FUN_0090218c

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00901308`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00901/00901308.md) · 呼出先 6件 [`0046e8e4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046e/0046e8e4.md) [`0046f01c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046f/0046f01c.md) [`00682364`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00682/00682364.md) [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md)
- 新版 呼出元 1件 [`009022b4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00902/009022b4.md) · 呼出先 6件 [`0046ec04`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0046e/0046ec04.md) [`0046f33c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0046f/0046f33c.md) [`00682714`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00682/00682714.md) [`00c54d90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d90.md) [`00c58f20`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f20.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 94.59% / 新版 94.59%

優先判定に残った影響 `store_value` 2件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "009021a8",
      "incomplete_value": false,
      "site": "009021ac",
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
            "const:d50:8"
          ]
        ]
      ]
    },
    "old": {
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
    "ordinal": 5,
    "slot": 2
  },
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "0090226c",
      "incomplete_value": false,
      "site": "00902270",
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
            "const:8b0:8"
          ]
        ]
      ]
    },
    "old": {
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
      "009021ac",
      "DATA",
      [
        "storage",
        "00c85d80",
        null,
        "pointer"
      ]
    ],
    [
      "00902270",
      "DATA",
      [
        "storage",
        "00c748e0",
        null,
        "pointer"
      ]
    ]
  ],
  "added": [
    [
      "009021ac",
      "DATA",
      [
        "storage",
        "00c86d50",
        null,
        "pointer"
      ]
    ],
    [
      "00902270",
      "DATA",
      [
        "storage",
        "00c758b0",
        null,
        "pointer"
      ]
    ]
  ]
}
~~~


~~~diff
- 009011f8 ["COPY", "register:4040:8", ["const:c85000:8"]]
+ 009021a4 ["COPY", "register:4040:8", ["const:c86000:8"]]
- 009011fc ["COPY", "tmp:0:8", ["const:d80:8"]]
- 009011fc ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 009011fc ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 009011fc ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 009021a8 ["COPY", "tmp:0:8", ["const:d50:8"]]
+ 009021a8 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 009021a8 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 009021a8 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 00901220 ["INT_ADD", "register:40f0:8", ["const:901220:8", "const:4:8"]]
- 00901220 ["CALL", null, ["callee:0046ec04:8"]]
+ 009021cc ["INT_ADD", "register:40f0:8", ["const:9021cc:8", "const:4:8"]]
+ 009021cc ["CALL", null, ["callee:0046ec04:8"]]
~~~


<a id="compare-4c458a537a9a04657fd6955dbf02449d"></a>

### [`0090132c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00901/0090132c.md) → [`009022d8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00902/009022d8.md) FUN_009022d8

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 2件 [`008ff920`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008ff/008ff920.md) [`00a3f3a0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a3f/00a3f3a0.md) · 呼出先 7件 [`00440f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00440/00440f00.md) [`0046e8e4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046e/0046e8e4.md) [`007f1b10`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007f1/007f1b10.md) [`007f1ee8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007f1/007f1ee8.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)
- 新版 呼出元 2件 [`009008cc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00900/009008cc.md) [`00a40394`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a40/00a40394.md) · 呼出先 7件 [`00441220`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00441/00441220.md) [`0046ec04`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0046e/0046ec04.md) [`007f2a74`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007f2/007f2a74.md) [`007f2e4c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007f2/007f2e4c.md) [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md)

変更の種類 branch_condition_or_target, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, operands_and_dependencies, operation_sequence, unresolved_branch_alignment

命令の説明率　旧版 98.31% / 新版 98.31%

優先判定に残った影響 `unresolved_branch_alignment` 1件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00901480",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "0090241c"
      ]
    ]
  ],
  "added": [
    [
      "0090242c",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "0090241c"
      ]
    ]
  ]
}
~~~


~~~diff
- 00901394 ["BOOL_NEGATE", "tmp:0:1", ["register:101:1"]]
- 00901394 ["BOOL_AND", "tmp:1:1", ["register:102:1", "tmp:0:1"]]
- 00901394 ["CBRANCH", null, ["local:b15:8", "tmp:1:1"]]
+ 00902340 ["BOOL_NEGATE", "tmp:0:1", ["register:101:1"]]
+ 00902340 ["BOOL_AND", "tmp:1:1", ["register:102:1", "tmp:0:1"]]
+ 00902340 ["CBRANCH", null, ["local:b16:8", "tmp:1:1"]]
- 009013dc ["BOOL_NEGATE", "tmp:0:1", ["register:101:1"]]
- 009013dc ["BOOL_AND", "tmp:1:1", ["register:102:1", "tmp:0:1"]]
- 009013dc ["CBRANCH", null, ["local:b17:8", "tmp:1:1"]]
+ 00902388 ["BOOL_NEGATE", "tmp:0:1", ["register:101:1"]]
+ 00902388 ["BOOL_AND", "tmp:1:1", ["register:102:1", "tmp:0:1"]]
+ 00902388 ["CBRANCH", null, ["local:b18:8", "tmp:1:1"]]
- 009013ec ["INT_ADD", "register:40f0:8", ["const:9013ec:8", "const:4:8"]]
- 009013ec ["CALL", null, ["callee:00c58f30:8"]]
+ 00902398 ["INT_ADD", "register:40f0:8", ["const:902398:8", "const:4:8"]]
+ 00902398 ["CALL", null, ["callee:00c58f30:8"]]
~~~


<a id="compare-1714807a5715d029bd6b491f2b9e7cbf"></a>

### [`00901554`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00901/00901554.md) → [`00902500`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00902/00902500.md) FUN_00902500

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
      "unmatched:0090156c",
      "DATA",
      [
        "storage",
        "00c85da0",
        null,
        "undefined *"
      ]
    ],
    [
      "unmatched:00901570",
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
      "00902518",
      "DATA",
      [
        "storage",
        "00c86d70",
        null,
        "undefined *"
      ]
    ],
    [
      "0090251c",
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
- 00901560 ["INT_ADD", "register:40f0:8", ["const:901560:8", "const:4:8"]]
- 00901560 ["CALL", null, ["callee:00c58f30:8"]]
+ 0090250c ["INT_ADD", "register:40f0:8", ["const:90250c:8", "const:4:8"]]
+ 0090250c ["CALL", null, ["callee:00c58f30:8"]]
- 00901564 ["COPY", "register:4040:8", ["const:c85000:8"]]
+ 00902510 ["COPY", "register:4040:8", ["const:c86000:8"]]
- 00901568 ["COPY", "tmp:0:8", ["const:da0:8"]]
- 00901568 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00901568 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00901568 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-933bdb1c38e8619f99d4b4cc178b816d"></a>

### [`00901578`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00901/00901578.md) → [`00902524`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00902/00902524.md) FUN_00902524

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
      "definition_site": "00902528",
      "incomplete_value": false,
      "site": "0090252c",
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
            "const:d70:8"
          ]
        ]
      ]
    },
    "old": {
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
      "0090252c",
      "DATA",
      [
        "storage",
        "00c85da0",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "0090252c",
      "DATA",
      [
        "storage",
        "00c86d70",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00901578 ["COPY", "register:4040:8", ["const:c85000:8"]]
+ 00902524 ["COPY", "register:4040:8", ["const:c86000:8"]]
- 0090157c ["COPY", "tmp:0:8", ["const:da0:8"]]
- 0090157c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 0090157c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 0090157c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00902528 ["COPY", "tmp:0:8", ["const:d70:8"]]
+ 00902528 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00902528 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00902528 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-f83baa22ce74065c225e136f5dbd8e6c"></a>

### [`009015e0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00901/009015e0.md) → [`0090258c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00902/0090258c.md) FUN_0090258c

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
      "definition_site": "009025b0",
      "incomplete_value": false,
      "site": "009025b0",
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
            "const:df0:8"
          ]
        ]
      ]
    },
    "old": {
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
      "009025b0",
      "DATA",
      [
        "storage",
        "00c85e20",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "009025b0",
      "DATA",
      [
        "storage",
        "00c86df0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 009015f4 ["INT_ADD", "register:40f0:8", ["const:9015f4:8", "const:4:8"]]
- 009015f4 ["CALL", null, ["callee:00c58f30:8"]]
+ 009025a0 ["INT_ADD", "register:40f0:8", ["const:9025a0:8", "const:4:8"]]
+ 009025a0 ["CALL", null, ["callee:00c58f30:8"]]
- 009015fc ["COPY", "register:4040:8", ["const:c85000:8"]]
+ 009025a8 ["COPY", "register:4040:8", ["const:c86000:8"]]
- 00901600 ["COPY", "tmp:0:8", ["const:e20:8"]]
- 00901600 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00901600 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00901600 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 009025ac ["COPY", "tmp:0:8", ["const:df0:8"]]
+ 009025ac ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 009025ac ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 009025ac ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-32e7e1dfafb7319180ac1671aee86012"></a>

### [`00901614`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00901/00901614.md) → [`009025c0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00902/009025c0.md) FUN_009025c0

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
      "unmatched:00901620",
      "DATA",
      [
        "storage",
        "00c85e20",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "009025cc",
      "DATA",
      [
        "storage",
        "00c86df0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00901618 ["COPY", "register:4048:8", ["const:c85000:8"]]
+ 009025c4 ["COPY", "register:4048:8", ["const:c86000:8"]]
- 0090161c ["COPY", "tmp:0:8", ["const:e20:8"]]
- 0090161c ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 0090161c ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 0090161c ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
- 00901620 ["COPY", "tmp:0:8", ["register:4048:8"]]
- 00901620 ["COPY", "tmp:1:8", ["register:4040:8"]]
- 00901620 ["COPY", "tmp:2:8", ["register:4008:8"]]
- 00901620 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
~~~


<a id="compare-0334da7c3a514a3a60014edf26a6db5a"></a>

### [`00901630`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00901/00901630.md) → [`009025dc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00902/009025dc.md) FUN_009025dc

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 5件 [`00901798`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00901/00901798.md) [`0090179c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00901/0090179c.md) [`00ac9604`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00ac9/00ac9604.md) [`00acac44`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00aca/00acac44.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)
- 新版 呼出元 0件  · 呼出先 5件 [`00902744`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00902/00902744.md) [`00902748`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00902/00902748.md) [`00aca5f8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00aca/00aca5f8.md) [`00acbc38`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00acb/00acbc38.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md)

変更の種類 branch_condition_or_target, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_return_alignment, unresolved_store_alignment

命令の説明率　旧版 90.48% / 新版 90.48%

優先判定に残った影響 `unresolved_return_alignment` 1件, `unresolved_store_alignment` 2件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00901670",
      "DATA",
      [
        "storage",
        "00c85e90",
        null,
        "undefined *"
      ]
    ],
    [
      "unmatched:00901670",
      "WRITE",
      [
        "storage",
        "Stack[-0x70]",
        null,
        null
      ]
    ],
    [
      "00902654",
      "READ",
      [
        "storage",
        "00c85eb0",
        null,
        "pointer"
      ]
    ]
  ],
  "added": [
    [
      "0090261c",
      "DATA",
      [
        "storage",
        "00c86e60",
        null,
        "undefined *"
      ]
    ],
    [
      "0090261c",
      "WRITE",
      [
        "storage",
        "Stack[-0x70]",
        null,
        null
      ]
    ],
    [
      "00902654",
      "READ",
      [
        "storage",
        "00c86e80",
        null,
        "pointer"
      ]
    ]
  ]
}
~~~


~~~diff
- 00901660 ["INT_ADD", "register:40f0:8", ["const:901660:8", "const:4:8"]]
- 00901660 ["CALL", null, ["callee:00aca5f8:8"]]
+ 0090260c ["INT_ADD", "register:40f0:8", ["const:90260c:8", "const:4:8"]]
+ 0090260c ["CALL", null, ["callee:00aca5f8:8"]]
- 00901664 ["COPY", "register:4040:8", ["const:c85000:8"]]
+ 00902610 ["COPY", "register:4040:8", ["const:c86000:8"]]
- 00901668 ["COPY", "tmp:0:8", ["const:e90:8"]]
- 00901668 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00901668 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00901668 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-536fad348be5e66152520405ced86813"></a>

### [`00901750`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00901/00901750.md) → [`009026fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00902/009026fc.md) FUN_009026fc

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
      "definition_site": "00902720",
      "incomplete_value": false,
      "site": "00902720",
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
            "const:e60:8"
          ]
        ]
      ]
    },
    "old": {
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
      "00902720",
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
      "00902720",
      "DATA",
      [
        "storage",
        "00c86e60",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00901764 ["INT_ADD", "register:40f0:8", ["const:901764:8", "const:4:8"]]
- 00901764 ["CALL", null, ["callee:00c58f30:8"]]
+ 00902710 ["INT_ADD", "register:40f0:8", ["const:902710:8", "const:4:8"]]
+ 00902710 ["CALL", null, ["callee:00c58f30:8"]]
- 0090176c ["COPY", "register:4040:8", ["const:c85000:8"]]
+ 00902718 ["COPY", "register:4040:8", ["const:c86000:8"]]
- 00901770 ["COPY", "tmp:0:8", ["const:e90:8"]]
- 00901770 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00901770 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00901770 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 0090271c ["COPY", "tmp:0:8", ["const:e60:8"]]
+ 0090271c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 0090271c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 0090271c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-30f1f510cb047ab648ecce349272f7a8"></a>

### [`00901784`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00901/00901784.md) → [`00902730`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00902/00902730.md) FUN_00902730

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
      "definition_site": "0090273c",
      "incomplete_value": false,
      "site": "0090273c",
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
            "const:e60:8"
          ]
        ]
      ]
    },
    "old": {
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
      "0090273c",
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
      "0090273c",
      "DATA",
      [
        "storage",
        "00c86e60",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00901788 ["COPY", "register:4048:8", ["const:c85000:8"]]
+ 00902734 ["COPY", "register:4048:8", ["const:c86000:8"]]
- 0090178c ["COPY", "tmp:0:8", ["const:e90:8"]]
- 0090178c ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 0090178c ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 0090178c ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 00902738 ["COPY", "tmp:0:8", ["const:e60:8"]]
+ 00902738 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 00902738 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 00902738 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
~~~


<a id="compare-ed0972868a63b547f07729607c33fce6"></a>

### [`009017a0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00901/009017a0.md) → [`0090274c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00902/0090274c.md) FUN_0090274c

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 4件 [`007562fc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00756/007562fc.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md) [`0085bbc8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0085b/0085bbc8.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)
- 新版 呼出元 0件  · 呼出先 4件 [`007566ac`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00756/007566ac.md) [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md) [`0085cb74`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0085c/0085cb74.md) [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md)

変更の種類 branch_value, call, call_target, cfg_edge_inventory, constant, control_flow, control_flow_count, local_def_use, operands_and_dependencies, operation_sequence, store_destination, store_value

命令の説明率　旧版 80.43% / 新版 80.43%

優先判定に残った影響 `branch_value` 1件, `call_target` 1件, `store_destination` 3件, `store_value` 2件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_destination",
    "new": {
      "definition_site": "00902780",
      "incomplete_value": false,
      "site": "00902780",
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
            "const:a28:8"
          ]
        ]
      ]
    },
    "old": {
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
    "ordinal": 7,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00902774",
      "incomplete_value": true,
      "site": "00902780",
      "value": [
        "LOAD",
        "8",
        [
          [
            "leaf",
            "const:1b1:8"
          ],
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
                "const:a38:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
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
    "ordinal": 7,
    "slot": 2
  },
  {
    "confidence": "bounded",
    "kind": "store_destination",
    "new": {
      "definition_site": "00902784",
      "incomplete_value": false,
      "site": "00902784",
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
            "const:a38:8"
          ]
        ]
      ]
    },
    "old": {
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
      "00902774",
      "READ",
      [
        "storage",
        "00ca4a78",
        null,
        "undefined8"
      ]
    ],
    [
      "00902778",
      "READ",
      [
        "storage",
        "00ca4a68",
        null,
        "undefined8"
      ]
    ],
    [
      "00902780",
      "WRITE",
      [
        "storage",
        "00ca4a68",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00902774",
      "READ",
      [
        "storage",
        "00ca5a38",
        null,
        "undefined8"
      ]
    ],
    [
      "00902778",
      "READ",
      [
        "storage",
        "00ca5a28",
        null,
        "undefined8"
      ]
    ],
    [
      "00902780",
      "WRITE",
      [
        "storage",
        "00ca5a28",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 009017d4 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:a68:8"]]
- 009017d4 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4048:8"]]
+ 00902780 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:a28:8"]]
+ 00902780 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4048:8"]]
- 009017d8 ["INT_ADD", "tmp:0:8", ["register:40b0:8", "const:a78:8"]]
- 009017d8 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4050:8"]]
+ 00902784 ["INT_ADD", "tmp:0:8", ["register:40b0:8", "const:a38:8"]]
+ 00902784 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4050:8"]]
- 009017e8 ["INT_ADD", "register:40f0:8", ["const:9017e8:8", "const:4:8"]]
- 009017e8 ["CALL", null, ["ram:7562fc:8"]]
+ 00902794 ["INT_ADD", "register:40f0:8", ["const:902794:8", "const:4:8"]]
+ 00902794 ["CALL", null, ["ram:7566ac:8"]]
~~~


<a id="compare-d54364564a7cca86524e8acee12d8c6c"></a>

### [`00901894`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00901/00901894.md) → [`00902840`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00902/00902840.md) _INIT_177

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 5件 [`0043aeb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043a/0043aeb0.md) [`0043b838`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b838.md) [`00c57f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f00.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)
- 新版 呼出元 0件  · 呼出先 5件 [`0043b1d0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043b1d0.md) [`0043bb58`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bb58.md) [`00c58ed0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58ed0.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md)

変更の種類 branch_condition_or_target, call_argument_candidate, comparison, comparison_count, constant, control_flow, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_store_alignment

命令の説明率　旧版 75.14% / 新版 75.14%

優先判定に残った影響 `call_argument_candidate` 10件, `unresolved_store_alignment` 16件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "009029b0",
      "incomplete_value": true,
      "site": "009029b4",
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
    "new": {
      "definition_site": "009029a4",
      "incomplete_value": true,
      "site": "009029b4",
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
    "ordinal": 1,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "009029a8",
      "incomplete_value": true,
      "site": "009029b4",
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
    "slot": 3
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00901898",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "unmatched:0090189c",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "unmatched:009018a0",
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
      "00902844",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "00902848",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "0090284c",
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
- 00901a08 ["INT_ADD", "register:40f0:8", ["const:901a08:8", "const:4:8"]]
- 00901a08 ["CALL", null, ["callee:0043bb58:8"]]
+ 009029b4 ["INT_ADD", "register:40f0:8", ["const:9029b4:8", "const:4:8"]]
+ 009029b4 ["CALL", null, ["callee:0043bb58:8"]]
- 00901a1c ["INT_ADD", "register:40f0:8", ["const:901a1c:8", "const:4:8"]]
- 00901a1c ["CALL", null, ["callee:0043bb58:8"]]
+ 009029c8 ["INT_ADD", "register:40f0:8", ["const:9029c8:8", "const:4:8"]]
+ 009029c8 ["CALL", null, ["callee:0043bb58:8"]]
- 00901ac8 ["INT_ADD", "register:40f0:8", ["const:901ac8:8", "const:4:8"]]
- 00901ac8 ["CALL", null, ["callee:00c58ed0:8"]]
+ 00902a74 ["INT_ADD", "register:40f0:8", ["const:902a74:8", "const:4:8"]]
+ 00902a74 ["CALL", null, ["callee:00c58ed0:8"]]
~~~


<a id="compare-85682b70ecc4256195425f77a8483fca"></a>

### [`00901c24`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00901/00901c24.md) → [`00902bd0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00902/00902bd0.md) FUN_00902bd0

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 3件 [`007ccf44`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007cc/007ccf44.md) [`009e12cc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009e1/009e12cc.md) [`00a47f54`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a47/00a47f54.md) · 呼出先 16件 [`00487e60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00487/00487e60.md) [`00488474`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00488/00488474.md) [`00488698`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00488/00488698.md) [`00596f6c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00596/00596f6c.md) [`00597648`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00597/00597648.md)
- 新版 呼出元 3件 [`007cdea8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007cd/007cdea8.md) [`009e2278`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009e2/009e2278.md) [`00a48f48`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a48/00a48f48.md) · 呼出先 16件 [`00488180`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00488/00488180.md) [`00488794`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00488/00488794.md) [`004889b8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00488/004889b8.md) [`0059728c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00597/0059728c.md) [`00597968`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00597/00597968.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, store_destination, store_value, unresolved_store_alignment

命令の説明率　旧版 85.14% / 新版 85.14%

優先判定に残った影響 `call_argument_candidate` 2件, `store_destination` 1件, `store_value` 3件, `unresolved_store_alignment` 5件

アドレスに依存する影響 `store_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00902d80",
      "incomplete_value": true,
      "site": "00902d84",
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
    "ordinal": 20,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00902d7c",
      "incomplete_value": true,
      "site": "00902d88",
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
    "ordinal": 21,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_destination",
    "new": {
      "definition_site": "00902d94",
      "incomplete_value": true,
      "site": "00902d94",
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
      "unmatched:00901c34",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "unmatched:00901c50",
      "WRITE",
      [
        "storage",
        "Stack[-0x48]",
        null,
        null
      ]
    ],
    [
      "unmatched:00901c70",
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
      "00902be0",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "00902bfc",
      "WRITE",
      [
        "storage",
        "Stack[-0x48]",
        null,
        null
      ]
    ],
    [
      "00902c1c",
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
- 00901c54 ["INT_ADD", "register:40f0:8", ["const:901c54:8", "const:4:8"]]
- 00901c54 ["CALL", null, ["callee:00488180:8"]]
+ 00902c00 ["INT_ADD", "register:40f0:8", ["const:902c00:8", "const:4:8"]]
+ 00902c00 ["CALL", null, ["callee:00488180:8"]]
- 00901c78 ["INT_ADD", "register:40f0:8", ["const:901c78:8", "const:4:8"]]
- 00901c78 ["CALL", null, ["callee:005c1b8c:8"]]
+ 00902c24 ["INT_ADD", "register:40f0:8", ["const:902c24:8", "const:4:8"]]
+ 00902c24 ["CALL", null, ["callee:005c1b8c:8"]]
- 00901c34 ["COPY", "tmp:0:8", ["register:40a0:8"]]
- 00901c34 ["COPY", "tmp:1:8", ["register:4098:8"]]
- 00901c34 ["INT_ADD", "tmp:2:8", ["register:8:8", "const:1e0:8"]]
- 00901c34 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
~~~


<a id="compare-29d246ba1be018ec291671b89ba2ecd6"></a>

### [`00901ee4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00901/00901ee4.md) → [`00902e90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00902/00902e90.md) FUN_00902e90

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 1件 [`00901c24`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00901/00901c24.md) · 呼出先 17件 [`0043bbe4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bbe4.md) [`00440f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00440/00440f00.md) [`004410cc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00441/004410cc.md) [`00493b60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00493/00493b60.md) [`005c17dc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005c1/005c17dc.md)
- 新版 呼出元 1件 [`00902bd0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00902/00902bd0.md) · 呼出先 17件 [`0043bf04`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bf04.md) [`00441220`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00441/00441220.md) [`004413ec`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00441/004413ec.md) [`00493e80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00493/00493e80.md) [`005c1b8c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005c1/005c1b8c.md)

変更の種類 branch_condition_or_target, call, call_argument_candidate, call_count, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, operands_and_dependencies, operation_sequence, store_value, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 87.88% / 新版 87.88%

優先判定に残った影響 `call_argument_candidate` 5件, `store_value` 1件, `unresolved_branch_alignment` 47件, `unresolved_call_alignment` 11件, `unresolved_store_alignment` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00903588",
      "incomplete_value": true,
      "site": "00903594",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:97a:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
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
    "ordinal": 81,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "0090308c",
      "incomplete_value": true,
      "site": "00903094",
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
            "const:10:8"
          ]
        ]
      ]
    },
    "ordinal": 87,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "00903188",
      "incomplete_value": true,
      "site": "00903190",
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
            "const:10:8"
          ]
        ]
      ]
    },
    "ordinal": 90,
    "slot": 1
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00901fe4",
      "READ",
      [
        "storage",
        "Stack[-0x98]",
        null,
        null
      ]
    ],
    [
      "unmatched:00901fe8",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00902fa0"
      ]
    ],
    [
      "unmatched:00901fec",
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
      "00902f90",
      "READ",
      [
        "storage",
        "Stack[-0x98]",
        null,
        null
      ]
    ],
    [
      "00902f94",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00902fa0"
      ]
    ],
    [
      "00902f98",
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
- 009020e8 ["INT_ADD", "register:40f0:8", ["const:9020e8:8", "const:4:8"]]
- 009020e8 ["CALL", null, ["callee:0043bf04:8"]]
+ 00903094 ["INT_ADD", "register:40f0:8", ["const:903094:8", "const:4:8"]]
+ 00903094 ["CALL", null, ["callee:0043bf04:8"]]
- 00903094 ["INT_ADD", "register:40f0:8", ["const:903094:8", "const:4:8"]]
- 00903094 ["CALL", null, ["callee:004413ec:8"]]
+ 00904040 ["INT_ADD", "register:40f0:8", ["const:904040:8", "const:4:8"]]
+ 00904040 ["CALL", null, ["callee:004413ec:8"]]
- 00903190 ["INT_ADD", "register:40f0:8", ["const:903190:8", "const:4:8"]]
- 00903190 ["CALL", null, ["callee:004413ec:8"]]
+ 0090413c ["INT_ADD", "register:40f0:8", ["const:90413c:8", "const:4:8"]]
+ 0090413c ["CALL", null, ["callee:004413ec:8"]]
~~~


<a id="compare-fb00bb52490edb0ab30e81aa5819f620"></a>

### [`009039f4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00903/009039f4.md) → [`009049a0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00904/009049a0.md) FUN_009049a0

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`009039d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00903/009039d0.md) · 呼出先 12件 [`0048795c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00487/0048795c.md) [`0048797c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00487/0048797c.md) [`00487aa4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00487/00487aa4.md) [`00487e60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00487/00487e60.md) [`00488698`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00488/00488698.md)
- 新版 呼出元 1件 [`0090497c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00904/0090497c.md) · 呼出先 12件 [`00487c7c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00487/00487c7c.md) [`00487c9c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00487/00487c9c.md) [`00487dc4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00487/00487dc4.md) [`00488180`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00488/00488180.md) [`004889b8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00488/004889b8.md)

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
      "definition_site": "009049d8",
      "incomplete_value": false,
      "site": "009049dc",
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
    "ordinal": 8,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "009049f4",
      "incomplete_value": true,
      "site": "00904a0c",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:9f0:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
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
    "ordinal": 12,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00904b74",
      "incomplete_value": true,
      "site": "00904b78",
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
      "009049dc",
      "DATA",
      [
        "storage",
        "00c64e08",
        null,
        "undefined *"
      ]
    ],
    [
      "009049f4",
      "READ",
      [
        "storage",
        "002ba912",
        null,
        "string"
      ]
    ],
    [
      "00904b64",
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
      "009049dc",
      "DATA",
      [
        "storage",
        "00c65dd8",
        null,
        "undefined *"
      ]
    ],
    [
      "009049f4",
      "READ",
      [
        "storage",
        "002ba9f0",
        null,
        "string"
      ]
    ],
    [
      "00904b64",
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
- 00903a20 ["INT_ADD", "register:40f0:8", ["const:903a20:8", "const:4:8"]]
- 00903a20 ["CALL", null, ["callee:00488180:8"]]
+ 009049cc ["INT_ADD", "register:40f0:8", ["const:9049cc:8", "const:4:8"]]
+ 009049cc ["CALL", null, ["callee:00488180:8"]]
- 00903a28 ["COPY", "register:4040:8", ["const:c64000:8"]]
+ 009049d4 ["COPY", "register:4040:8", ["const:c65000:8"]]
- 00903a2c ["COPY", "tmp:0:8", ["const:e08:8"]]
- 00903a2c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00903a2c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00903a2c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 009049d8 ["COPY", "tmp:0:8", ["const:dd8:8"]]
+ 009049d8 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 009049d8 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 009049d8 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-b73f35876af21e788ec56e4707a2715f"></a>

### [`00903cc4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00903/00903cc4.md) → [`00904c70`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00904/00904c70.md) FUN_00904c70

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`009039d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00903/009039d0.md) · 呼出先 12件 [`0048795c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00487/0048795c.md) [`0048797c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00487/0048797c.md) [`00487aa4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00487/00487aa4.md) [`00487e60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00487/00487e60.md) [`00488698`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00488/00488698.md)
- 新版 呼出元 1件 [`0090497c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00904/0090497c.md) · 呼出先 12件 [`00487c7c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00487/00487c7c.md) [`00487c9c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00487/00487c9c.md) [`00487dc4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00487/00487dc4.md) [`00488180`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00488/00488180.md) [`004889b8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00488/004889b8.md)

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
      "definition_site": "00904ca8",
      "incomplete_value": false,
      "site": "00904cb0",
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
    "ordinal": 9,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00904cc8",
      "incomplete_value": true,
      "site": "00904ce0",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:db9:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
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
    "ordinal": 13,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00904e48",
      "incomplete_value": true,
      "site": "00904e4c",
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
      "00904cb0",
      "DATA",
      [
        "storage",
        "00c64e08",
        null,
        "undefined *"
      ]
    ],
    [
      "00904cc8",
      "READ",
      [
        "storage",
        "002accec",
        null,
        "string"
      ]
    ],
    [
      "00904e38",
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
      "00904cb0",
      "DATA",
      [
        "storage",
        "00c65dd8",
        null,
        "undefined *"
      ]
    ],
    [
      "00904cc8",
      "READ",
      [
        "storage",
        "002acdb9",
        null,
        "string"
      ]
    ],
    [
      "00904e38",
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
- 00903cf0 ["INT_ADD", "register:40f0:8", ["const:903cf0:8", "const:4:8"]]
- 00903cf0 ["CALL", null, ["callee:00488180:8"]]
+ 00904c9c ["INT_ADD", "register:40f0:8", ["const:904c9c:8", "const:4:8"]]
+ 00904c9c ["CALL", null, ["callee:00488180:8"]]
- 00903cf8 ["COPY", "register:4040:8", ["const:c64000:8"]]
+ 00904ca4 ["COPY", "register:4040:8", ["const:c65000:8"]]
- 00903cfc ["COPY", "tmp:0:8", ["const:e08:8"]]
- 00903cfc ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00903cfc ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00903cfc ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00904ca8 ["COPY", "tmp:0:8", ["const:dd8:8"]]
+ 00904ca8 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00904ca8 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00904ca8 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-921a7ea3d6620f49a8eb3af073d38c3a"></a>

### [`00904334`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00904/00904334.md) → [`009052e0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00905/009052e0.md) FUN_009052e0

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`00901ee4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00901/00901ee4.md) · 呼出先 1件 [`0043b7b8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b7b8.md)
- 新版 呼出元 1件 [`00902e90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00902/00902e90.md) · 呼出先 1件 [`0043bad8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bad8.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 80.00% / 新版 80.00%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "009052ec",
      "incomplete_value": false,
      "site": "009052f0",
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
      "009052ec",
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
      "009052ec",
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
- 00904344 ["INT_ADD", "register:40f0:8", ["const:904344:8", "const:4:8"]]
- 00904344 ["CALL", null, ["callee:0043bad8:8"]]
+ 009052f0 ["INT_ADD", "register:40f0:8", ["const:9052f0:8", "const:4:8"]]
+ 009052f0 ["CALL", null, ["callee:0043bad8:8"]]
- 0090433c ["COPY", "register:4000:8", ["const:2b7000:8"]]
+ 009052e8 ["COPY", "register:4000:8", ["const:2b8000:8"]]
- 00904340 ["COPY", "tmp:0:8", ["const:f8c:8"]]
- 00904340 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 00904340 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 00904340 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 009052ec ["COPY", "tmp:0:8", ["const:5b:8"]]
+ 009052ec ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 009052ec ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 009052ec ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
~~~


<a id="compare-5fbe0f3e1970d75ea2eca7708269f551"></a>

### [`009044cc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00904/009044cc.md) → [`00905478`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00905/00905478.md) FUN_00905478

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`00904348`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00904/00904348.md) · 呼出先 1件 [`0043b7b8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b7b8.md)
- 新版 呼出元 1件 [`009052f4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00905/009052f4.md) · 呼出先 1件 [`0043bad8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bad8.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 80.00% / 新版 80.00%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00905484",
      "incomplete_value": false,
      "site": "00905488",
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
      "00905484",
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
      "00905484",
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
- 009044dc ["INT_ADD", "register:40f0:8", ["const:9044dc:8", "const:4:8"]]
- 009044dc ["CALL", null, ["callee:0043bad8:8"]]
+ 00905488 ["INT_ADD", "register:40f0:8", ["const:905488:8", "const:4:8"]]
+ 00905488 ["CALL", null, ["callee:0043bad8:8"]]
- 009044d4 ["COPY", "register:4000:8", ["const:2b7000:8"]]
+ 00905480 ["COPY", "register:4000:8", ["const:2b8000:8"]]
- 009044d8 ["COPY", "tmp:0:8", ["const:f8c:8"]]
- 009044d8 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 009044d8 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 009044d8 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 00905484 ["COPY", "tmp:0:8", ["const:5b:8"]]
+ 00905484 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 00905484 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 00905484 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
~~~


<a id="compare-34afa6d8e33fcb5e6bc706eabc48238b"></a>

### [`00904664`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00904/00904664.md) → [`00905610`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00905/00905610.md) FUN_00905610

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`009044e0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00904/009044e0.md) · 呼出先 1件 [`0043b7b8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b7b8.md)
- 新版 呼出元 1件 [`0090548c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00905/0090548c.md) · 呼出先 1件 [`0043bad8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bad8.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 80.00% / 新版 80.00%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "0090561c",
      "incomplete_value": false,
      "site": "00905620",
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
      "0090561c",
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
      "0090561c",
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
- 00904674 ["INT_ADD", "register:40f0:8", ["const:904674:8", "const:4:8"]]
- 00904674 ["CALL", null, ["callee:0043bad8:8"]]
+ 00905620 ["INT_ADD", "register:40f0:8", ["const:905620:8", "const:4:8"]]
+ 00905620 ["CALL", null, ["callee:0043bad8:8"]]
- 0090466c ["COPY", "register:4000:8", ["const:2b7000:8"]]
+ 00905618 ["COPY", "register:4000:8", ["const:2b8000:8"]]
- 00904670 ["COPY", "tmp:0:8", ["const:f8c:8"]]
- 00904670 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 00904670 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 00904670 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 0090561c ["COPY", "tmp:0:8", ["const:5b:8"]]
+ 0090561c ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 0090561c ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 0090561c ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
~~~


<a id="compare-70c6c4dffe9adf79fc84bfd04e8335a3"></a>

### [`00904678`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00904/00904678.md) → [`00905624`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00905/00905624.md) _INIT_178

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
      "definition_site": "00905660",
      "incomplete_value": true,
      "site": "0090567c",
      "value": [
        "LOAD",
        "16",
        [
          [
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
    "ordinal": 9,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00905684",
      "incomplete_value": true,
      "site": "009056a0",
      "value": [
        "LOAD",
        "16",
        [
          [
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
    "ordinal": 12,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "009056a4",
      "incomplete_value": true,
      "site": "009056c0",
      "value": [
        "LOAD",
        "16",
        [
          [
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
      "00905660",
      "READ",
      [
        "storage",
        "002b7f66",
        null,
        "string"
      ]
    ],
    [
      "00905684",
      "READ",
      [
        "storage",
        "002b7f79",
        null,
        "string"
      ]
    ],
    [
      "009056a4",
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
      "00905660",
      "READ",
      [
        "storage",
        "002b8035",
        null,
        "string"
      ]
    ],
    [
      "00905684",
      "READ",
      [
        "storage",
        "002b8048",
        null,
        "string"
      ]
    ],
    [
      "009056a4",
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
- 009047d8 ["INT_ADD", "register:40f0:8", ["const:9047d8:8", "const:4:8"]]
- 009047d8 ["CALL", null, ["callee:0043bb58:8"]]
+ 00905784 ["INT_ADD", "register:40f0:8", ["const:905784:8", "const:4:8"]]
+ 00905784 ["CALL", null, ["callee:0043bb58:8"]]
- 009048ac ["INT_ADD", "register:40f0:8", ["const:9048ac:8", "const:4:8"]]
- 009048ac ["CALL", null, ["callee:00c58ed0:8"]]
+ 00905858 ["INT_ADD", "register:40f0:8", ["const:905858:8", "const:4:8"]]
+ 00905858 ["CALL", null, ["callee:00c58ed0:8"]]
- 009046a0 ["COPY", "register:4098:8", ["const:1123000:8"]]
+ 0090564c ["COPY", "register:4098:8", ["const:1124000:8"]]
~~~


<a id="compare-6725e74328541b44ad005b02d728f3de"></a>

### [`00904a08`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00904/00904a08.md) → [`009059b4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00905/009059b4.md) FUN_009059b4

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 2件 [`00911c38`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00911/00911c38.md) [`00a7c564`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a7c/00a7c564.md) · 呼出先 48件 [`0043bb60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bb60.md) [`0043bbe4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bbe4.md) [`0043de18`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043d/0043de18.md) [`00447f34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00447/00447f34.md) [`0046e578`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046e/0046e578.md)
- 新版 呼出元 2件 [`00912be4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00912/00912be4.md) [`00a7d558`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a7d/00a7d558.md) · 呼出先 48件 [`0043be80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043be80.md) [`0043bf04`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bf04.md) [`0043e138`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043e/0043e138.md) [`00448254`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00448/00448254.md) [`0046e898`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0046e/0046e898.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies, operation_sequence, store_destination, store_value

命令の説明率　旧版 85.41% / 新版 85.41%

優先判定に残った影響 `call_argument_candidate` 112件, `store_destination` 77件, `store_value` 87件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "009059f4",
      "incomplete_value": false,
      "site": "009059fc",
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
            "const:ef0:8"
          ]
        ]
      ]
    },
    "old": {
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
    "ordinal": 14,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00905b60",
      "incomplete_value": true,
      "site": "00905b60",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:49d:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
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
    "ordinal": 51,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00905b78",
      "incomplete_value": true,
      "site": "00905b78",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:f91:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
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
      "009059fc",
      "DATA",
      [
        "storage",
        "00c85f20",
        null,
        "pointer"
      ]
    ],
    [
      "00905b30",
      "READ",
      [
        "storage",
        "00ca5038",
        null,
        "undefined1"
      ]
    ],
    [
      "00905b50",
      "READ",
      [
        "storage",
        "002b63ce",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "009059fc",
      "DATA",
      [
        "storage",
        "00c86ef0",
        null,
        "pointer"
      ]
    ],
    [
      "00905b30",
      "READ",
      [
        "storage",
        "00ca5ff8",
        null,
        "undefined1"
      ]
    ],
    [
      "00905b50",
      "READ",
      [
        "storage",
        "002b649d",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 00905008 ["COPY", "tmp:0:8", ["const:171:8"]]
- 00905008 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00905008 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00905008 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00905fb4 ["COPY", "tmp:0:8", ["const:240:8"]]
+ 00905fb4 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00905fb4 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00905fb4 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 00905fc8 ["COPY", "tmp:0:8", ["const:38:8"]]
- 00905fc8 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 00905fc8 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 00905fc8 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 00906f74 ["COPY", "tmp:0:8", ["const:ff8:8"]]
+ 00906f74 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 00906f74 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 00906f74 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
- 00905fcc ["INT_ADD", "register:40f0:8", ["const:905fcc:8", "const:4:8"]]
- 00905fcc ["CALL", null, ["callee:00c58f10:8"]]
+ 00906f78 ["INT_ADD", "register:40f0:8", ["const:906f78:8", "const:4:8"]]
+ 00906f78 ["CALL", null, ["callee:00c58f10:8"]]
~~~


<a id="compare-9282f51192fb24445e98e891aca3a297"></a>

### [`00908368`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00908/00908368.md) → [`00909314`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00909/00909314.md) FUN_00909314

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 2件 [`00904a08`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00904/00904a08.md) [`0098546c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00985/0098546c.md) · 呼出先 16件 [`0047e64c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047e/0047e64c.md) [`0047edf4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047e/0047edf4.md) [`005d872c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005d8/005d872c.md) [`006333b4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00633/006333b4.md) [`00758228`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00758/00758228.md)
- 新版 呼出元 2件 [`009059b4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00905/009059b4.md) [`00986418`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00986/00986418.md) · 呼出先 16件 [`0047e96c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047e/0047e96c.md) [`0047f114`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047f/0047f114.md) [`005d8adc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005d8/005d8adc.md) [`00633764`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00633/00633764.md) [`007585d8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00758/007585d8.md)

変更の種類 branch_condition_or_target, call, call_argument_candidate, call_count, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 20.44% / 新版 20.44%

優先判定に残った影響 `call_argument_candidate` 9件, `unresolved_branch_alignment` 170件, `unresolved_call_alignment` 170件, `unresolved_store_alignment` 278件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "009093f4",
      "incomplete_value": false,
      "site": "009093fc",
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
    "ordinal": 1,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "009099a8",
      "incomplete_value": true,
      "site": "009099b4",
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
    "old": null,
    "ordinal": 49,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00909a10",
      "incomplete_value": false,
      "site": "00909a24",
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
    "old": null,
    "ordinal": 50,
    "slot": 1
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00908394",
      "WRITE",
      [
        "storage",
        "Stack[-0x58]",
        null,
        null
      ]
    ],
    [
      "unmatched:00908398",
      "UNCONDITIONAL_CALL",
      [
        "mapped_function",
        "007585d8"
      ]
    ],
    [
      "unmatched:009083a8",
      "DATA",
      [
        "storage",
        "00c85f40",
        null,
        "pointer"
      ]
    ]
  ],
  "added": [
    [
      "00909340",
      "WRITE",
      [
        "storage",
        "Stack[-0x58]",
        null,
        null
      ]
    ],
    [
      "00909344",
      "UNCONDITIONAL_CALL",
      [
        "mapped_function",
        "007585d8"
      ]
    ],
    [
      "00909354",
      "DATA",
      [
        "storage",
        "00c86f10",
        null,
        "pointer"
      ]
    ]
  ]
}
~~~


~~~diff
- 00908450 ["INT_ADD", "register:40f0:8", ["const:908450:8", "const:4:8"]]
- 00908450 ["CALL", null, ["callee:00633764:8"]]
+ 009093fc ["INT_ADD", "register:40f0:8", ["const:9093fc:8", "const:4:8"]]
+ 009093fc ["CALL", null, ["callee:00633764:8"]]
- 00908a08 ["INT_ADD", "register:40f0:8", ["const:908a08:8", "const:4:8"]]
- 00908a08 ["CALL", null, ["callee:0047e96c:8"]]
+ 009099b4 ["INT_ADD", "register:40f0:8", ["const:9099b4:8", "const:4:8"]]
+ 009099b4 ["CALL", null, ["callee:0047e96c:8"]]
- 00908a78 ["INT_ADD", "register:40f0:8", ["const:908a78:8", "const:4:8"]]
- 00908a78 ["CALL", null, ["callee:0047e96c:8"]]
+ 00909a24 ["INT_ADD", "register:40f0:8", ["const:909a24:8", "const:4:8"]]
+ 00909a24 ["CALL", null, ["callee:0047e96c:8"]]
~~~


<a id="compare-a694eb957d5787d860c245b6452456c0"></a>

### [`0090a158`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0090a/0090a158.md) → [`0090b104`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0090b/0090b104.md) FUN_0090b104

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `equal` · `cfg_change`

- 旧版 呼出元 2件 [`00914e84`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00914/00914e84.md) [`009d3b48`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009d3/009d3b48.md) · 呼出先 2件 [`0043bbe4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bbe4.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)
- 新版 呼出元 2件 [`00915e30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00915/00915e30.md) [`009d4af4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009d4/009d4af4.md) · 呼出先 2件 [`0043bf04`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bf04.md) [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md)

変更の種類 branch_condition_or_target, constant, control_flow, operands_and_dependencies, return_value_candidate

命令の説明率　旧版 100.00% / 新版 100.00%

優先判定に残った影響 `return_value_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "return_value_candidate",
    "new": null,
    "old": {
      "definition_site": "0090a20c",
      "incomplete_value": true,
      "site": "0090a220",
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
            "const:28:8"
          ]
        ]
      ]
    },
    "ordinal": 0,
    "slot": 0
  }
]
~~~


~~~diff
- 0090a1a8 ["INT_EQUAL", "tmp:0:1", ["register:100:1", "register:103:1"]]
- 0090a1a8 ["CBRANCH", null, ["local:b11:8", "tmp:0:1"]]
+ 0090b154 ["INT_EQUAL", "tmp:0:1", ["register:100:1", "register:103:1"]]
+ 0090b154 ["CBRANCH", null, ["local:b10:8", "tmp:0:1"]]
- 0090a1c0 ["INT_ADD", "register:40f0:8", ["const:90a1c0:8", "const:4:8"]]
- 0090a1c0 ["CALL", null, ["callee:00c58f30:8"]]
+ 0090b16c ["INT_ADD", "register:40f0:8", ["const:90b16c:8", "const:4:8"]]
+ 0090b16c ["CALL", null, ["callee:00c58f30:8"]]
- 0090a1ec ["INT_EQUAL", "tmp:0:1", ["register:4040:8", "const:0:8"]]
- 0090a1ec ["CBRANCH", null, ["local:b10:8", "tmp:0:1"]]
+ 0090b198 ["INT_EQUAL", "tmp:0:1", ["register:4040:8", "const:0:8"]]
+ 0090b198 ["CBRANCH", null, ["local:b9:8", "tmp:0:1"]]
~~~


<a id="compare-9f1f306ce28cb9994580ef52cc4758cc"></a>

### [`0090a224`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0090a/0090a224.md) → [`0090b1d0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0090b/0090b1d0.md) FUN_0090b1d0

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 3件 [`00904a08`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00904/00904a08.md) [`0090dd50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0090d/0090dd50.md) [`00914e84`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00914/00914e84.md) · 呼出先 13件 [`00447f34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00447/00447f34.md) [`0047e91c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047e/0047e91c.md) [`0047edf4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047e/0047edf4.md) [`0048ce94`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048c/0048ce94.md) [`00562734`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00562/00562734.md)
- 新版 呼出元 3件 [`009059b4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00905/009059b4.md) [`0090ecfc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0090e/0090ecfc.md) [`00915e30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00915/00915e30.md) · 呼出先 13件 [`00448254`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00448/00448254.md) [`0047ec3c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047e/0047ec3c.md) [`0047f114`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047f/0047f114.md) [`0048d1b4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0048d/0048d1b4.md) [`00562a54`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00562/00562a54.md)

変更の種類 branch_condition_or_target, call_argument_candidate, comparison, comparison_count, constant, control_flow, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_store_alignment

命令の説明率　旧版 85.64% / 新版 85.64%

優先判定に残った影響 `call_argument_candidate` 8件, `unresolved_branch_alignment` 1件, `unresolved_store_alignment` 6件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "0090b220",
      "incomplete_value": true,
      "site": "0090b224",
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
                "const:f0:8"
              ]
            ]
          ],
          [
            "leaf",
            "const:20:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0090a274",
      "incomplete_value": true,
      "site": "0090a278",
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
    "ordinal": 0,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "0090a340",
      "incomplete_value": true,
      "site": "0090a358",
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
      "definition_site": "0090a33c",
      "incomplete_value": true,
      "site": "0090a358",
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
            "live",
            "register:40d0:8"
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
      "unmatched:0090a254",
      "READ",
      [
        "storage",
        "002a9327",
        null,
        "string"
      ]
    ],
    [
      "unmatched:0090a260",
      "WRITE",
      [
        "storage",
        "Stack[-0x68]",
        null,
        null
      ]
    ],
    [
      "unmatched:0090a264",
      "WRITE",
      [
        "storage",
        "Stack[-0xd0]",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "0090b200",
      "READ",
      [
        "storage",
        "002a93f4",
        null,
        "string"
      ]
    ],
    [
      "0090b20c",
      "WRITE",
      [
        "storage",
        "Stack[-0x68]",
        null,
        null
      ]
    ],
    [
      "0090b210",
      "WRITE",
      [
        "storage",
        "Stack[-0xd0]",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 0090a278 ["INT_ADD", "register:40f0:8", ["const:90a278:8", "const:4:8"]]
- 0090a278 ["CALL", null, ["callee:0048d1b4:8"]]
+ 0090b224 ["INT_ADD", "register:40f0:8", ["const:90b224:8", "const:4:8"]]
+ 0090b224 ["CALL", null, ["callee:0048d1b4:8"]]
- 0090a358 ["INT_ADD", "register:40f0:8", ["const:90a358:8", "const:4:8"]]
- 0090a358 ["CALL", null, ["callee:0047ec3c:8"]]
+ 0090b304 ["INT_ADD", "register:40f0:8", ["const:90b304:8", "const:4:8"]]
+ 0090b304 ["CALL", null, ["callee:0047ec3c:8"]]
- 0090a43c ["INT_ADD", "register:40f0:8", ["const:90a43c:8", "const:4:8"]]
- 0090a43c ["CALL", null, ["callee:00c58ed0:8"]]
+ 0090b3e8 ["INT_ADD", "register:40f0:8", ["const:90b3e8:8", "const:4:8"]]
+ 0090b3e8 ["CALL", null, ["callee:00c58ed0:8"]]
~~~


<a id="compare-5b6d1101855b8bad1de1568e175ebbd8"></a>

### [`0090a60c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0090a/0090a60c.md) → [`0090b5b8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0090b/0090b5b8.md) FUN_0090b5b8

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 2件 [`00914e84`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00914/00914e84.md) [`009ccbd0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009cc/009ccbd0.md) · 呼出先 30件 [`0043bbe4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bbe4.md) [`00447734`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00447/00447734.md) [`00447f34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00447/00447f34.md) [`0046e9b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046e/0046e9b0.md) [`0046f0f4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046f/0046f0f4.md)
- 新版 呼出元 2件 [`00915e30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00915/00915e30.md) [`009cdb7c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009cd/009cdb7c.md) · 呼出先 30件 [`0043bf04`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bf04.md) [`00447a54`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00447/00447a54.md) [`00448254`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00448/00448254.md) [`0046ecd0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0046e/0046ecd0.md) [`0046f414`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0046f/0046f414.md)

変更の種類 branch_condition_or_target, branch_value, call_argument_candidate, cfg_edge_inventory, constant, control_flow, local_def_use, operands_and_dependencies, store_value, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 71.34% / 新版 71.34%

優先判定に残った影響 `call_argument_candidate` 9件, `store_value` 17件, `unresolved_branch_alignment` 22件, `unresolved_call_alignment` 37件, `unresolved_store_alignment` 58件

アドレスに依存する影響 `branch_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "0090b9c8",
      "incomplete_value": true,
      "site": "0090b9c8",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:dce:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
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
    "ordinal": 49,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "0090b9cc",
      "incomplete_value": true,
      "site": "0090b9cc",
      "value": [
        "LOAD",
        "8",
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
    "ordinal": 50,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "0090b9f0",
      "incomplete_value": true,
      "site": "0090ba00",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:db6:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
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
      "0090b5e8",
      "READ",
      [
        "storage",
        "00ca4a78",
        null,
        "undefined8"
      ]
    ],
    [
      "0090b5fc",
      "PARAM",
      [
        "storage",
        "00c65f28",
        null,
        "pointer __((offset(0x10)))"
      ]
    ],
    [
      "0090b604",
      "PARAM",
      [
        "storage",
        "00c75090",
        null,
        "pointer __((offset(0x10)))"
      ]
    ]
  ],
  "added": [
    [
      "0090b5e8",
      "READ",
      [
        "storage",
        "00ca5a38",
        null,
        "undefined8"
      ]
    ],
    [
      "0090b5fc",
      "PARAM",
      [
        "storage",
        "00c66ef8",
        null,
        "pointer __((offset(0x10)))"
      ]
    ],
    [
      "0090b604",
      "PARAM",
      [
        "storage",
        "00c76060",
        null,
        "pointer __((offset(0x10)))"
      ]
    ]
  ]
}
~~~


~~~diff
- 0090a640 ["INT_EQUAL", "tmp:0:1", ["register:4040:8", "const:0:8"]]
- 0090a640 ["CBRANCH", null, ["local:b164:8", "tmp:0:1"]]
+ 0090b5ec ["INT_EQUAL", "tmp:0:1", ["register:4040:8", "const:0:8"]]
+ 0090b5ec ["CBRANCH", null, ["local:b165:8", "tmp:0:1"]]
- 0090a664 ["INT_ADD", "register:40f0:8", ["const:90a664:8", "const:4:8"]]
- 0090a664 ["CALL", null, ["callee:00c596b0:8"]]
+ 0090b610 ["INT_ADD", "register:40f0:8", ["const:90b610:8", "const:4:8"]]
+ 0090b610 ["CALL", null, ["callee:00c596b0:8"]]
- 0090a6f8 ["INT_ADD", "register:40f0:8", ["const:90a6f8:8", "const:4:8"]]
- 0090a6f8 ["CALL", null, ["callee:00c58f30:8"]]
+ 0090b6a4 ["INT_ADD", "register:40f0:8", ["const:90b6a4:8", "const:4:8"]]
+ 0090b6a4 ["CALL", null, ["callee:00c58f30:8"]]
~~~


<a id="compare-05a4caa606344c40811229476d14e229"></a>

### [`0090b95c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0090b/0090b95c.md) → [`0090c908`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0090c/0090c908.md) FUN_0090c908

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 3件 [`0090dd50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0090d/0090dd50.md) [`00914e84`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00914/00914e84.md) [`009ccbd0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009cc/009ccbd0.md) · 呼出先 31件 [`0043bbe4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bbe4.md) [`00447f34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00447/00447f34.md) [`0047c9a8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047c9a8.md) [`0047e64c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047e/0047e64c.md) [`0047edf4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047e/0047edf4.md)
- 新版 呼出元 3件 [`0090ecfc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0090e/0090ecfc.md) [`00915e30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00915/00915e30.md) [`009cdb7c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009cd/009cdb7c.md) · 呼出先 31件 [`0043bf04`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bf04.md) [`00448254`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00448/00448254.md) [`0047ccc8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047c/0047ccc8.md) [`0047e96c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047e/0047e96c.md) [`0047f114`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047f/0047f114.md)

変更の種類 branch_condition_or_target, branch_value, call, call_argument_candidate, call_count, constant, control_flow, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, store_value, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 45.66% / 新版 45.66%

優先判定に残った影響 `call_argument_candidate` 22件, `unresolved_branch_alignment` 61件, `unresolved_call_alignment` 61件, `unresolved_store_alignment` 135件

アドレスに依存する影響 `branch_value` 1件, `store_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "0090ce50",
      "incomplete_value": true,
      "site": "0090ce54",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:4e0:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
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
    "ordinal": 64,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "branch_value",
    "new": {
      "definition_site": "0090c93c",
      "incomplete_value": true,
      "site": "0090c93c",
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
    "ordinal": 0,
    "slot": 0
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "0090c954",
      "incomplete_value": true,
      "site": "0090c95c",
      "value": [
        "live",
        "register:4040:8"
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
      "unmatched:0090b960",
      "WRITE",
      [
        "storage",
        "Stack[-0x60]",
        null,
        null
      ]
    ],
    [
      "unmatched:0090b964",
      "WRITE",
      [
        "storage",
        "Stack[-0x50]",
        null,
        null
      ]
    ],
    [
      "unmatched:0090b968",
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
      "0090c90c",
      "WRITE",
      [
        "storage",
        "Stack[-0x60]",
        null,
        null
      ]
    ],
    [
      "0090c910",
      "WRITE",
      [
        "storage",
        "Stack[-0x50]",
        null,
        null
      ]
    ],
    [
      "0090c914",
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
- 0090b9b0 ["INT_ADD", "register:40f0:8", ["const:90b9b0:8", "const:4:8"]]
- 0090b9b0 ["CALL", null, ["callee:00c596b0:8"]]
+ 0090c95c ["INT_ADD", "register:40f0:8", ["const:90c95c:8", "const:4:8"]]
+ 0090c95c ["CALL", null, ["callee:00c596b0:8"]]
- 0090ba54 ["INT_ADD", "register:40f0:8", ["const:90ba54:8", "const:4:8"]]
- 0090ba54 ["CALL", null, ["callee:0047e96c:8"]]
+ 0090ca00 ["INT_ADD", "register:40f0:8", ["const:90ca00:8", "const:4:8"]]
+ 0090ca00 ["CALL", null, ["callee:0047e96c:8"]]
- 0090bc7c ["INT_ADD", "register:40f0:8", ["const:90bc7c:8", "const:4:8"]]
- 0090bc7c ["CALL", null, ["callee:0071b92c:8"]]
+ 0090cc28 ["INT_ADD", "register:40f0:8", ["const:90cc28:8", "const:4:8"]]
+ 0090cc28 ["CALL", null, ["callee:0071b92c:8"]]
~~~


<a id="compare-38c7bd0411ef4b648fc68e4c8ca30c15"></a>

### [`0090cca8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0090c/0090cca8.md) → [`0090dc54`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0090d/0090dc54.md) FUN_0090dc54

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 3件 [`0090dd50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0090d/0090dd50.md) [`00911c38`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00911/00911c38.md) [`00914e84`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00914/00914e84.md) · 呼出先 28件 [`0043bbe4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bbe4.md) [`0046d4d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046d/0046d4d0.md) [`0047e91c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047e/0047e91c.md) [`0047edf4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047e/0047edf4.md) [`0048a77c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048a/0048a77c.md)
- 新版 呼出元 3件 [`0090ecfc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0090e/0090ecfc.md) [`00912be4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00912/00912be4.md) [`00915e30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00915/00915e30.md) · 呼出先 28件 [`0043bf04`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bf04.md) [`0046d7f0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0046d/0046d7f0.md) [`0047ec3c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047e/0047ec3c.md) [`0047f114`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047f/0047f114.md) [`0048aa9c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0048a/0048aa9c.md)

変更の種類 branch_condition_or_target, branch_value, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, store_condition, unresolved_branch_alignment, unresolved_call_alignment, unresolved_return_alignment, unresolved_store_alignment

命令の説明率　旧版 68.80% / 新版 68.80%

優先判定に残った影響 `call_argument_candidate` 20件, `store_condition` 1件, `unresolved_branch_alignment` 16件, `unresolved_call_alignment` 24件, `unresolved_return_alignment` 1件, `unresolved_store_alignment` 52件

アドレスに依存する影響 `branch_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "branch_value",
    "new": {
      "definition_site": "0090dc90",
      "incomplete_value": true,
      "site": "0090dc90",
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
    "ordinal": 0,
    "slot": 0
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "0090dc98",
      "incomplete_value": false,
      "site": "0090dcac",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c66000:8"
          ],
          [
            "leaf",
            "const:ef8:8"
          ]
        ]
      ]
    },
    "old": {
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
    "ordinal": 0,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "0090dca0",
      "incomplete_value": false,
      "site": "0090dcac",
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
            "const:60:8"
          ]
        ]
      ]
    },
    "old": {
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
      "unmatched:0090ccd8",
      "WRITE",
      [
        "storage",
        "Stack[-0x78]",
        null,
        null
      ]
    ],
    [
      "0090dc8c",
      "READ",
      [
        "storage",
        "00ca4a78",
        null,
        "undefined8"
      ]
    ],
    [
      "unmatched:0090ccec",
      "PARAM",
      [
        "storage",
        "00c65f28",
        null,
        "pointer __((offset(0x10)))"
      ]
    ]
  ],
  "added": [
    [
      "0090dc84",
      "WRITE",
      [
        "storage",
        "Stack[-0x78]",
        null,
        null
      ]
    ],
    [
      "0090dc8c",
      "READ",
      [
        "storage",
        "00ca5a38",
        null,
        "undefined8"
      ]
    ],
    [
      "0090dc98",
      "PARAM",
      [
        "storage",
        "00c66ef8",
        null,
        "pointer __((offset(0x10)))"
      ]
    ]
  ]
}
~~~


~~~diff
- 0090cce4 ["INT_EQUAL", "tmp:0:1", ["register:4040:8", "const:0:8"]]
- 0090cce4 ["CBRANCH", null, ["local:b2:8", "tmp:0:1"]]
+ 0090dc90 ["INT_EQUAL", "tmp:0:1", ["register:4040:8", "const:0:8"]]
+ 0090dc90 ["CBRANCH", null, ["local:b4:8", "tmp:0:1"]]
- 0090cd00 ["INT_ADD", "register:40f0:8", ["const:90cd00:8", "const:4:8"]]
- 0090cd00 ["CALL", null, ["callee:00c596b0:8"]]
+ 0090dcac ["INT_ADD", "register:40f0:8", ["const:90dcac:8", "const:4:8"]]
+ 0090dcac ["CALL", null, ["callee:00c596b0:8"]]
- 0090cda8 ["INT_ADD", "register:40f0:8", ["const:90cda8:8", "const:4:8"]]
- 0090cda8 ["CALL", null, ["callee:0047ec3c:8"]]
+ 0090dd54 ["INT_ADD", "register:40f0:8", ["const:90dd54:8", "const:4:8"]]
+ 0090dd54 ["CALL", null, ["callee:0047ec3c:8"]]
~~~


<a id="compare-466c0f1e167beb1ca88724ab45592083"></a>

### [`0090d888`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0090d/0090d888.md) → [`0090e834`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0090e/0090e834.md) FUN_0090e834

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`009d3b48`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009d3/009d3b48.md) · 呼出先 7件 [`00440f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00440/00440f00.md) [`00470880`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00470/00470880.md) [`00494650`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00494/00494650.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 1件 [`009d4af4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009d4/009d4af4.md) · 呼出先 7件 [`00441220`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00441/00441220.md) [`00470ba0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00470/00470ba0.md) [`00494970`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00494/00494970.md) [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, store_condition, unresolved_branch_alignment, unresolved_store_alignment

命令の説明率　旧版 86.40% / 新版 86.40%

優先判定に残った影響 `call_argument_candidate` 2件, `store_condition` 3件, `unresolved_branch_alignment` 6件, `unresolved_store_alignment` 5件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "0090e950",
      "incomplete_value": true,
      "site": "0090e964",
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
    "new": {
      "definition_site": "0090e954",
      "incomplete_value": true,
      "site": "0090e964",
      "value": [
        "live",
        "register:4098:8"
      ]
    },
    "old": null,
    "ordinal": 1,
    "slot": 2
  },
  {
    "confidence": "limited",
    "guard": [
      [
        "FALL_THROUGH",
        "0090d8d4"
      ],
      [
        "FALL_THROUGH",
        "0090e880"
      ]
    ],
    "kind": "store_condition",
    "new": {
      "definition_site": "0090e87c",
      "incomplete_value": true,
      "site": "0090e8a4",
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
    "old": {
      "definition_site": "0090d8d0",
      "incomplete_value": true,
      "site": "0090d8f8",
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
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:0090d8b8",
      "WRITE",
      [
        "storage",
        "Stack[-0x78]",
        null,
        null
      ]
    ],
    [
      "unmatched:0090d8c0",
      "DATA",
      [
        "storage",
        "0033a428",
        null,
        "fde_table_entry"
      ]
    ],
    [
      "unmatched:0090d8c8",
      "WRITE",
      [
        "storage",
        "Stack[-0x90]",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "0090e864",
      "WRITE",
      [
        "storage",
        "Stack[-0x78]",
        null,
        null
      ]
    ],
    [
      "0090e86c",
      "DATA",
      [
        "storage",
        "0033a428",
        null,
        "fde_table_entry"
      ]
    ],
    [
      "0090e874",
      "WRITE",
      [
        "storage",
        "Stack[-0x90]",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 0090d9b8 ["INT_ADD", "register:40f0:8", ["const:90d9b8:8", "const:4:8"]]
- 0090d9b8 ["CALL", null, ["callee:00c590a0:8"]]
+ 0090e964 ["INT_ADD", "register:40f0:8", ["const:90e964:8", "const:4:8"]]
+ 0090e964 ["CALL", null, ["callee:00c590a0:8"]]
- 0090d8b8 ["COPY", "tmp:0:8", ["register:4040:8"]]
- 0090d8b8 ["INT_ADD", "tmp:1:8", ["register:40e8:8", "const:ffffffffffffffe8:8"]]
- 0090d8b8 ["STORE", null, ["const:1b1:8", "tmp:1:8", "tmp:0:8"]]
- 0090d8bc ["INT_LEFT", "tmp:0:8", ["const:33a:8", "const:c:4"]]
- 0090d8bc ["COPY", "tmp:1:8", ["tmp:0:8"]]
- 0090d8bc ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:1:8"]]
- 0090d8bc ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:1:8"]]
~~~


<a id="compare-0aa6533824ed526b9c05e2d412a5f7da"></a>

### [`009115b4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00911/009115b4.md) → [`00912560`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00912/00912560.md) FUN_00912560

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 3件 [`0090dd50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0090d/0090dd50.md) [`00911c38`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00911/00911c38.md) [`00914e84`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00914/00914e84.md) · 呼出先 29件 [`0043bbe4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bbe4.md) [`0046ca04`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046c/0046ca04.md) [`00489f8c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00489/00489f8c.md) [`0048ce90`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048c/0048ce90.md) [`0048cec4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048c/0048cec4.md)
- 新版 呼出元 3件 [`0090ecfc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0090e/0090ecfc.md) [`00912be4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00912/00912be4.md) [`00915e30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00915/00915e30.md) · 呼出先 29件 [`0043bf04`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bf04.md) [`0046cd24`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0046c/0046cd24.md) [`0048a2ac`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0048a/0048a2ac.md) [`0048d1b0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0048d/0048d1b0.md) [`0048d1e4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0048d/0048d1e4.md)

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
      "definition_site": "009125f0",
      "incomplete_value": true,
      "site": "00912604",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:410:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
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
    "ordinal": 17,
    "slot": 2
  },
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "00912a5c",
      "incomplete_value": false,
      "site": "00912a5c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c87000:8"
          ],
          [
            "leaf",
            "const:2b0:8"
          ]
        ]
      ]
    },
    "old": {
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
    "ordinal": 47,
    "slot": 2
  },
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "00912b00",
      "incomplete_value": false,
      "site": "00912b04",
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
                "const:c8c000:8"
              ],
              [
                "leaf",
                "const:840:8"
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
      "009125d0",
      "READ",
      [
        "storage",
        "002c3e08",
        null,
        "undefined8"
      ]
    ],
    [
      "009125f0",
      "READ",
      [
        "storage",
        "002c43c0",
        null,
        "undefined8"
      ]
    ],
    [
      "00912984",
      "READ",
      [
        "storage",
        "00ca4a78",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "009125d0",
      "READ",
      [
        "storage",
        "002c3e58",
        null,
        "undefined8"
      ]
    ],
    [
      "009125f0",
      "READ",
      [
        "storage",
        "002c4410",
        null,
        "undefined8"
      ]
    ],
    [
      "00912984",
      "READ",
      [
        "storage",
        "00ca5a38",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 009119fc ["INT_ADD", "register:40f0:8", ["const:9119fc:8", "const:4:8"]]
- 009119fc ["CALL", null, ["callee:00c596b0:8"]]
+ 009129a8 ["INT_ADD", "register:40f0:8", ["const:9129a8:8", "const:4:8"]]
+ 009129a8 ["CALL", null, ["callee:00c596b0:8"]]
- 009115f4 ["INT_ADD", "register:40f0:8", ["const:9115f4:8", "const:4:8"]]
- 009115f4 ["CALL", null, ["callee:0046cd24:8"]]
+ 009125a0 ["INT_ADD", "register:40f0:8", ["const:9125a0:8", "const:4:8"]]
+ 009125a0 ["CALL", null, ["callee:0046cd24:8"]]
- 00911624 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:e08:8"]]
- 00911624 ["LOAD", "register:5000:8", ["const:1b1:8", "tmp:0:8"]]
- 00911624 ["COPY", "register:5008:8", ["const:0:8"]]
- 00911624 ["COPY", "register:5010:8", ["const:0:8"]]
+ 009125d0 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:e58:8"]]
+ 009125d0 ["LOAD", "register:5000:8", ["const:1b1:8", "tmp:0:8"]]
+ 009125d0 ["COPY", "register:5008:8", ["const:0:8"]]
+ 009125d0 ["COPY", "register:5010:8", ["const:0:8"]]
~~~


<a id="compare-7ac4ea8abec6e04f9736f992f3fd6c3b"></a>

### [`0091a2e8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0091a/0091a2e8.md) → [`0091b294`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0091b/0091b294.md) FUN_0091b294

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 2件 [`0089d520`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0089d/0089d520.md) [`00914e84`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00914/00914e84.md) · 呼出先 19件 [`0043bbe4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bbe4.md) [`00440f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00440/00440f00.md) [`00440f9c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00440/00440f9c.md) [`0044d20c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0044d/0044d20c.md) [`005645c8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00564/005645c8.md)
- 新版 呼出元 2件 [`0089e4cc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0089e/0089e4cc.md) [`00915e30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00915/00915e30.md) · 呼出先 19件 [`0043bf04`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bf04.md) [`00441220`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00441/00441220.md) [`004412bc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00441/004412bc.md) [`0044d52c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0044d/0044d52c.md) [`005648e8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00564/005648e8.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies, operation_sequence

命令の説明率　旧版 97.80% / 新版 97.80%

優先判定に残った影響 `call_argument_candidate` 4件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "0091b2f8",
      "incomplete_value": false,
      "site": "0091b300",
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
            "const:5f7:8"
          ]
        ]
      ]
    },
    "old": {
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
    "ordinal": 0,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "0091b314",
      "incomplete_value": false,
      "site": "0091b31c",
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
            "const:a24:8"
          ]
        ]
      ]
    },
    "old": {
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
    "ordinal": 1,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "0091b330",
      "incomplete_value": false,
      "site": "0091b338",
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
            "const:6c7:8"
          ]
        ]
      ]
    },
    "old": {
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
      "0091b2e4",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "unmatched:0091a380"
      ]
    ],
    [
      "0091b2ec",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "unmatched:0091a364"
      ]
    ],
    [
      "0091b2f8",
      "PARAM",
      [
        "storage",
        "002b5519",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "0091b2e4",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "0091b32c"
      ]
    ],
    [
      "0091b2ec",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "0091b310"
      ]
    ],
    [
      "0091b2f8",
      "PARAM",
      [
        "storage",
        "002b55f7",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 0091a354 ["INT_ADD", "register:40f0:8", ["const:91a354:8", "const:4:8"]]
- 0091a354 ["CALL", null, ["callee:00c59230:8"]]
+ 0091b300 ["INT_ADD", "register:40f0:8", ["const:91b300:8", "const:4:8"]]
+ 0091b300 ["CALL", null, ["callee:00c59230:8"]]
- 0091a370 ["INT_ADD", "register:40f0:8", ["const:91a370:8", "const:4:8"]]
- 0091a370 ["CALL", null, ["callee:00c59230:8"]]
+ 0091b31c ["INT_ADD", "register:40f0:8", ["const:91b31c:8", "const:4:8"]]
+ 0091b31c ["CALL", null, ["callee:00c59230:8"]]
- 0091a38c ["INT_ADD", "register:40f0:8", ["const:91a38c:8", "const:4:8"]]
- 0091a38c ["CALL", null, ["callee:00c59230:8"]]
+ 0091b338 ["INT_ADD", "register:40f0:8", ["const:91b338:8", "const:4:8"]]
+ 0091b338 ["CALL", null, ["callee:00c59230:8"]]
~~~


<a id="compare-fe59a2cd0b021146e1836dda9a2a6533"></a>

### [`0091aa74`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0091a/0091aa74.md) → [`0091ba20`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0091b/0091ba20.md) FUN_0091ba20

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 4件 [`009115b4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00911/009115b4.md) [`00914e84`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00914/00914e84.md) [`0091abcc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0091a/0091abcc.md) [`009224e8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00922/009224e8.md) · 呼出先 8件 [`0043bbe4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bbe4.md) [`0071ad2c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0071a/0071ad2c.md) [`0071ad54`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0071a/0071ad54.md) [`0071b57c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0071b/0071b57c.md) [`0071b92c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0071b/0071b92c.md)
- 新版 呼出元 4件 [`00912560`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00912/00912560.md) [`00915e30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00915/00915e30.md) [`0091bb78`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0091b/0091bb78.md) [`00923494`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00923/00923494.md) · 呼出先 8件 [`0043bf04`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bf04.md) [`0071b0dc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0071b/0071b0dc.md) [`0071b104`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0071b/0071b104.md) [`0071b92c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0071b/0071b92c.md) [`0071bcdc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0071b/0071bcdc.md)

変更の種類 call, call_target, constant, operands_and_dependencies

命令の説明率　旧版 98.84% / 新版 98.84%

優先判定に残った影響 `call_target` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_target",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "0091ba38",
      "value": [
        "leaf",
        "ram:812924:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "0091aa8c",
      "value": [
        "leaf",
        "ram:8119c0:8"
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
      "0091ba38",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "008119c0"
      ]
    ]
  ],
  "added": [
    [
      "0091ba38",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "00812924"
      ]
    ]
  ]
}
~~~


~~~diff
- 0091aa8c ["INT_ADD", "register:40f0:8", ["const:91aa8c:8", "const:4:8"]]
- 0091aa8c ["CALL", null, ["ram:8119c0:8"]]
+ 0091ba38 ["INT_ADD", "register:40f0:8", ["const:91ba38:8", "const:4:8"]]
+ 0091ba38 ["CALL", null, ["ram:812924:8"]]
- 0091aaa8 ["INT_ADD", "register:40f0:8", ["const:91aaa8:8", "const:4:8"]]
- 0091aaa8 ["CALL", null, ["callee:0071bcdc:8"]]
+ 0091ba54 ["INT_ADD", "register:40f0:8", ["const:91ba54:8", "const:4:8"]]
+ 0091ba54 ["CALL", null, ["callee:0071bcdc:8"]]
- 0091ab00 ["INT_ADD", "register:40f0:8", ["const:91ab00:8", "const:4:8"]]
- 0091ab00 ["CALL", null, ["callee:00c58f30:8"]]
+ 0091baac ["INT_ADD", "register:40f0:8", ["const:91baac:8", "const:4:8"]]
+ 0091baac ["CALL", null, ["callee:00c58f30:8"]]
~~~


<a id="compare-7e01bc27f160f88d29c9995337932edd"></a>

### [`0091abcc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0091a/0091abcc.md) → [`0091bb78`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0091b/0091bb78.md) FUN_0091bb78

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`00859bb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00859/00859bb0.md) · 呼出先 71件 [`0043bbe4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bbe4.md) [`00467ac8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00467/00467ac8.md) [`00467b6c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00467/00467b6c.md) [`00467ba0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00467/00467ba0.md) [`00467f94`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00467/00467f94.md)
- 新版 呼出元 1件 [`0085ab5c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0085a/0085ab5c.md) · 呼出先 71件 [`0043bf04`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bf04.md) [`00467de8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00467/00467de8.md) [`00467e8c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00467/00467e8c.md) [`00467ec0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00467/00467ec0.md) [`004682b4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00468/004682b4.md)

変更の種類 branch_value, call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 98.99% / 新版 98.99%

優先判定に残った影響 `branch_value` 1件, `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "branch_value",
    "new": {
      "definition_site": "0091bc08",
      "incomplete_value": true,
      "site": "0091bc08",
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
      "definition_site": "0091ac5c",
      "incomplete_value": true,
      "site": "0091ac5c",
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
      "definition_site": "0091bc18",
      "incomplete_value": true,
      "site": "0091bc20",
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
            "const:60:8"
          ]
        ]
      ]
    },
    "old": {
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
      "0091bbe8",
      "READ",
      [
        "storage",
        "00ca4a78",
        null,
        "undefined8"
      ]
    ],
    [
      "0091bc10",
      "PARAM",
      [
        "storage",
        "00c65f28",
        null,
        "pointer __((offset(0x10)))"
      ]
    ],
    [
      "0091bc18",
      "PARAM",
      [
        "storage",
        "00c75090",
        null,
        "pointer __((offset(0x10)))"
      ]
    ]
  ],
  "added": [
    [
      "0091bbe8",
      "READ",
      [
        "storage",
        "00ca5a38",
        null,
        "undefined8"
      ]
    ],
    [
      "0091bc10",
      "PARAM",
      [
        "storage",
        "00c66ef8",
        null,
        "pointer __((offset(0x10)))"
      ]
    ],
    [
      "0091bc18",
      "PARAM",
      [
        "storage",
        "00c76060",
        null,
        "pointer __((offset(0x10)))"
      ]
    ]
  ]
}
~~~


~~~diff
- 0091ac74 ["INT_ADD", "register:40f0:8", ["const:91ac74:8", "const:4:8"]]
- 0091ac74 ["CALL", null, ["callee:00c596b0:8"]]
+ 0091bc20 ["INT_ADD", "register:40f0:8", ["const:91bc20:8", "const:4:8"]]
+ 0091bc20 ["CALL", null, ["callee:00c596b0:8"]]
- 0091ac28 ["COPY", "register:4050:8", ["const:ca4000:8"]]
+ 0091bbd4 ["COPY", "register:4050:8", ["const:ca5000:8"]]
- 0091ac3c ["INT_ADD", "tmp:0:8", ["register:4050:8", "const:a78:8"]]
- 0091ac3c ["LOAD", "register:4000:8", ["const:1b1:8", "tmp:0:8"]]
+ 0091bbe8 ["INT_ADD", "tmp:0:8", ["register:4050:8", "const:a38:8"]]
+ 0091bbe8 ["LOAD", "register:4000:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-b7b17c272c72601fbaf1e7809e9bfc16"></a>

### [`0091ffb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0091f/0091ffb0.md) → [`00920f5c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00920/00920f5c.md) FUN_00920f5c

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 3件 [`00920308`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00920/00920308.md) [`00a7dbd0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a7d/00a7dbd0.md) [`00a7dc5c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a7d/00a7dc5c.md) · 呼出先 7件 [`0046e8e4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046e/0046e8e4.md) [`0046f01c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046f/0046f01c.md) [`00672788`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00672/00672788.md) [`00682258`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00682/00682258.md) [`0092032c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00920/0092032c.md)
- 新版 呼出元 3件 [`009212b4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00921/009212b4.md) [`00a7ebc4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a7e/00a7ebc4.md) [`00a7ec50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a7e/00a7ec50.md) · 呼出先 7件 [`0046ec04`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0046e/0046ec04.md) [`0046f33c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0046f/0046f33c.md) [`00672b38`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00672/00672b38.md) [`00682608`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00682/00682608.md) [`009212d8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00921/009212d8.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 99.07% / 新版 99.07%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "00920f78",
      "incomplete_value": false,
      "site": "00920f7c",
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
            "const:ef0:8"
          ]
        ]
      ]
    },
    "old": {
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
      "00920f7c",
      "DATA",
      [
        "storage",
        "00c85f20",
        null,
        "pointer"
      ]
    ]
  ],
  "added": [
    [
      "00920f7c",
      "DATA",
      [
        "storage",
        "00c86ef0",
        null,
        "pointer"
      ]
    ]
  ]
}
~~~


~~~diff
- 0091ffc8 ["COPY", "register:4040:8", ["const:c85000:8"]]
+ 00920f74 ["COPY", "register:4040:8", ["const:c86000:8"]]
- 0091ffcc ["COPY", "tmp:0:8", ["const:f20:8"]]
- 0091ffcc ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 0091ffcc ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 0091ffcc ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00920f78 ["COPY", "tmp:0:8", ["const:ef0:8"]]
+ 00920f78 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00920f78 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00920f78 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 0091ffe0 ["INT_ADD", "register:40f0:8", ["const:91ffe0:8", "const:4:8"]]
- 0091ffe0 ["CALL", null, ["callee:00c54d90:8"]]
+ 00920f8c ["INT_ADD", "register:40f0:8", ["const:920f8c:8", "const:4:8"]]
+ 00920f8c ["CALL", null, ["callee:00c54d90:8"]]
~~~


<a id="compare-dfa9a1b9f240e6c951716a4a36348091"></a>

### [`0092032c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00920/0092032c.md) → [`009212d8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00921/009212d8.md) FUN_009212d8

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 2件 [`0091ffb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0091f/0091ffb0.md) [`00920530`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00920/00920530.md) · 呼出先 5件 [`00672788`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00672/00672788.md) [`00682364`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00682/00682364.md) [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 2件 [`00920f5c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00920/00920f5c.md) [`009214dc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00921/009214dc.md) · 呼出先 5件 [`00672b38`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00672/00672b38.md) [`00682714`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00682/00682714.md) [`00c54d90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d90.md) [`00c58f20`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f20.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 95.35% / 新版 95.35%

優先判定に残った影響 `store_value` 3件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "009212f4",
      "incomplete_value": false,
      "site": "009212f8",
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
            "const:f10:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00920348",
      "incomplete_value": false,
      "site": "0092034c",
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
            "const:f40:8"
          ]
        ]
      ]
    },
    "ordinal": 6,
    "slot": 2
  },
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "009213c8",
      "incomplete_value": false,
      "site": "009213cc",
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
            "const:3d0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0092041c",
      "incomplete_value": false,
      "site": "00920420",
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
    "ordinal": 9,
    "slot": 2
  },
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "00921404",
      "incomplete_value": false,
      "site": "00921408",
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
            "const:8b0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00920458",
      "incomplete_value": false,
      "site": "0092045c",
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
      "009212f8",
      "DATA",
      [
        "storage",
        "00c85f40",
        null,
        "pointer"
      ]
    ],
    [
      "009213cc",
      "DATA",
      [
        "storage",
        "00c78400",
        null,
        "pointer"
      ]
    ],
    [
      "00921408",
      "DATA",
      [
        "storage",
        "00c748e0",
        null,
        "pointer"
      ]
    ]
  ],
  "added": [
    [
      "009212f8",
      "DATA",
      [
        "storage",
        "00c86f10",
        null,
        "pointer"
      ]
    ],
    [
      "009213cc",
      "DATA",
      [
        "storage",
        "00c793d0",
        null,
        "pointer"
      ]
    ],
    [
      "00921408",
      "DATA",
      [
        "storage",
        "00c758b0",
        null,
        "pointer"
      ]
    ]
  ]
}
~~~


~~~diff
- 00920344 ["COPY", "register:4040:8", ["const:c85000:8"]]
+ 009212f0 ["COPY", "register:4040:8", ["const:c86000:8"]]
- 00920348 ["COPY", "tmp:0:8", ["const:f40:8"]]
- 00920348 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00920348 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00920348 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 009212f4 ["COPY", "tmp:0:8", ["const:f10:8"]]
+ 009212f4 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 009212f4 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 009212f4 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 00920360 ["INT_ADD", "register:40f0:8", ["const:920360:8", "const:4:8"]]
- 00920360 ["CALL", null, ["callee:00c58f50:8"]]
+ 0092130c ["INT_ADD", "register:40f0:8", ["const:92130c:8", "const:4:8"]]
+ 0092130c ["CALL", null, ["callee:00c58f50:8"]]
~~~


<a id="compare-e4573726253221caf6fca49f2804243c"></a>

### [`00920554`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00920/00920554.md) → [`00921500`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00921/00921500.md) FUN_00921500

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 2件 [`0090a034`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0090a/0090a034.md) [`00920554`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00920/00920554.md) · 呼出先 22件 [`0043b7a4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b7a4.md) [`0043bb60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bb60.md) [`0043de18`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043d/0043de18.md) [`00440fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00440/00440fb0.md) [`00441d2c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00441/00441d2c.md)
- 新版 呼出元 2件 [`0090afe0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0090a/0090afe0.md) [`00921500`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00921/00921500.md) · 呼出先 22件 [`0043bac4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bac4.md) [`0043be80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043be80.md) [`0043e138`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043e/0043e138.md) [`004412d0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00441/004412d0.md) [`0044204c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00442/0044204c.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 98.77% / 新版 98.77%

優先判定に残った影響 `call_argument_candidate` 5件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "0092165c",
      "incomplete_value": true,
      "site": "00921664",
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
            "const:62:8"
          ]
        ]
      ]
    },
    "old": {
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
    "ordinal": 2,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "009217fc",
      "incomplete_value": false,
      "site": "00921808",
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
            "const:f73:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00920850",
      "incomplete_value": false,
      "site": "0092085c",
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
    "ordinal": 10,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "009218bc",
      "incomplete_value": false,
      "site": "009218c8",
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
            "const:4e7:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00920910",
      "incomplete_value": false,
      "site": "0092091c",
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
      "0092165c",
      "PARAM",
      [
        "storage",
        "002b7f93",
        null,
        null
      ]
    ],
    [
      "009216b0",
      "PARAM",
      [
        "storage",
        "002c0f29",
        null,
        "string"
      ]
    ],
    [
      "009217e4",
      "PARAM",
      [
        "storage",
        "002b5e27",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "0092165c",
      "PARAM",
      [
        "storage",
        "002b8062",
        null,
        null
      ]
    ],
    [
      "009216b0",
      "PARAM",
      [
        "storage",
        "002c0f73",
        null,
        "string"
      ]
    ],
    [
      "009217e4",
      "PARAM",
      [
        "storage",
        "002b5ef6",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 009206b8 ["INT_ADD", "register:40f0:8", ["const:9206b8:8", "const:4:8"]]
- 009206b8 ["CALL", null, ["callee:004421f4:8"]]
+ 00921664 ["INT_ADD", "register:40f0:8", ["const:921664:8", "const:4:8"]]
+ 00921664 ["CALL", null, ["callee:004421f4:8"]]
- 0092085c ["INT_ADD", "register:40f0:8", ["const:92085c:8", "const:4:8"]]
- 0092085c ["CALL", null, ["callee:00442b54:8"]]
+ 00921808 ["INT_ADD", "register:40f0:8", ["const:921808:8", "const:4:8"]]
+ 00921808 ["CALL", null, ["callee:00442b54:8"]]
- 0092091c ["INT_ADD", "register:40f0:8", ["const:92091c:8", "const:4:8"]]
- 0092091c ["CALL", null, ["callee:0044204c:8"]]
+ 009218c8 ["INT_ADD", "register:40f0:8", ["const:9218c8:8", "const:4:8"]]
+ 009218c8 ["CALL", null, ["callee:0044204c:8"]]
~~~


<a id="compare-2e5c1d3ed92eb81cbfd6dc154fd59553"></a>

### [`00920f40`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00920/00920f40.md) → [`00921eec`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00921/00921eec.md) FUN_00921eec

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 6件 [`00904a08`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00904/00904a08.md) [`00920f40`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00920/00920f40.md) [`00a6fdf8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a6f/00a6fdf8.md) [`00a735a0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a73/00a735a0.md) [`00a7c564`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a7c/00a7c564.md) · 呼出先 22件 [`0043b7a4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b7a4.md) [`0043bb60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bb60.md) [`0043de18`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043d/0043de18.md) [`00440fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00440/00440fb0.md) [`00441d2c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00441/00441d2c.md)
- 新版 呼出元 6件 [`009059b4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00905/009059b4.md) [`00921eec`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00921/00921eec.md) [`00a70dec`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a70/00a70dec.md) [`00a74594`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a74/00a74594.md) [`00a7d558`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a7d/00a7d558.md) · 呼出先 22件 [`0043bac4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bac4.md) [`0043be80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043be80.md) [`0043e138`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043e/0043e138.md) [`004412d0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00441/004412d0.md) [`0044204c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00442/0044204c.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 98.58% / 新版 98.58%

優先判定に残った影響 `call_argument_candidate` 5件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "0092203c",
      "incomplete_value": false,
      "site": "00922044",
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
            "const:62:8"
          ]
        ]
      ]
    },
    "old": {
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
    "ordinal": 2,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00922090",
      "incomplete_value": false,
      "site": "0092209c",
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
            "const:f73:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "009210e4",
      "incomplete_value": false,
      "site": "009210f0",
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
    "ordinal": 4,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "009221c4",
      "incomplete_value": false,
      "site": "009221cc",
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
            "const:ef6:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00921218",
      "incomplete_value": false,
      "site": "00921220",
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
      "0092203c",
      "PARAM",
      [
        "storage",
        "002b7f93",
        null,
        null
      ]
    ],
    [
      "00922090",
      "PARAM",
      [
        "storage",
        "002c0f29",
        null,
        "string"
      ]
    ],
    [
      "009221c4",
      "PARAM",
      [
        "storage",
        "002b5e27",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "0092203c",
      "PARAM",
      [
        "storage",
        "002b8062",
        null,
        null
      ]
    ],
    [
      "00922090",
      "PARAM",
      [
        "storage",
        "002c0f73",
        null,
        "string"
      ]
    ],
    [
      "009221c4",
      "PARAM",
      [
        "storage",
        "002b5ef6",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 00921098 ["INT_ADD", "register:40f0:8", ["const:921098:8", "const:4:8"]]
- 00921098 ["CALL", null, ["callee:004421f4:8"]]
+ 00922044 ["INT_ADD", "register:40f0:8", ["const:922044:8", "const:4:8"]]
+ 00922044 ["CALL", null, ["callee:004421f4:8"]]
- 009210f0 ["INT_ADD", "register:40f0:8", ["const:9210f0:8", "const:4:8"]]
- 009210f0 ["CALL", null, ["callee:00442b54:8"]]
+ 0092209c ["INT_ADD", "register:40f0:8", ["const:92209c:8", "const:4:8"]]
+ 0092209c ["CALL", null, ["callee:00442b54:8"]]
- 00921220 ["INT_ADD", "register:40f0:8", ["const:921220:8", "const:4:8"]]
- 00921220 ["CALL", null, ["callee:004421f4:8"]]
+ 009221cc ["INT_ADD", "register:40f0:8", ["const:9221cc:8", "const:4:8"]]
+ 009221cc ["CALL", null, ["callee:004421f4:8"]]
~~~


<a id="compare-c23fd4568e87553bc653871df12c76a4"></a>

### [`009217c0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00921/009217c0.md) → [`0092276c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00922/0092276c.md) FUN_0092276c

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
      "definition_site": "00922790",
      "incomplete_value": false,
      "site": "00922790",
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
            "const:f30:8"
          ]
        ]
      ]
    },
    "old": {
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
      "00922790",
      "DATA",
      [
        "storage",
        "00c85f60",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00922790",
      "DATA",
      [
        "storage",
        "00c86f30",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 009217d4 ["INT_ADD", "register:40f0:8", ["const:9217d4:8", "const:4:8"]]
- 009217d4 ["CALL", null, ["callee:00c58f30:8"]]
+ 00922780 ["INT_ADD", "register:40f0:8", ["const:922780:8", "const:4:8"]]
+ 00922780 ["CALL", null, ["callee:00c58f30:8"]]
- 009217dc ["COPY", "register:4040:8", ["const:c85000:8"]]
+ 00922788 ["COPY", "register:4040:8", ["const:c86000:8"]]
- 009217e0 ["COPY", "tmp:0:8", ["const:f60:8"]]
- 009217e0 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 009217e0 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 009217e0 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 0092278c ["COPY", "tmp:0:8", ["const:f30:8"]]
+ 0092278c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 0092278c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 0092278c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-14cb1a3a4680b968436234af973df01d"></a>

### [`00921858`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00921/00921858.md) → [`00922804`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00922/00922804.md) FUN_00922804

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
      "definition_site": "00922828",
      "incomplete_value": false,
      "site": "00922828",
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
            "const:fb0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0092187c",
      "incomplete_value": false,
      "site": "0092187c",
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
            "const:fe0:8"
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
      "00922828",
      "DATA",
      [
        "storage",
        "00c85fe0",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00922828",
      "DATA",
      [
        "storage",
        "00c86fb0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 0092186c ["INT_ADD", "register:40f0:8", ["const:92186c:8", "const:4:8"]]
- 0092186c ["CALL", null, ["callee:00c58f30:8"]]
+ 00922818 ["INT_ADD", "register:40f0:8", ["const:922818:8", "const:4:8"]]
+ 00922818 ["CALL", null, ["callee:00c58f30:8"]]
- 00921874 ["COPY", "register:4040:8", ["const:c85000:8"]]
+ 00922820 ["COPY", "register:4040:8", ["const:c86000:8"]]
- 00921878 ["COPY", "tmp:0:8", ["const:fe0:8"]]
- 00921878 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00921878 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00921878 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00922824 ["COPY", "tmp:0:8", ["const:fb0:8"]]
+ 00922824 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00922824 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00922824 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-120986ee4635b6965f818bf21f0766e2"></a>

### [`009218e4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00921/009218e4.md) → [`00922890`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00922/00922890.md) FUN_00922890

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
      "definition_site": "009228a4",
      "incomplete_value": false,
      "site": "009228a8",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c87000:8"
          ],
          [
            "leaf",
            "const:30:8"
          ]
        ]
      ]
    },
    "old": {
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
      "009228a8",
      "DATA",
      [
        "storage",
        "00c86060",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "009228a8",
      "DATA",
      [
        "storage",
        "00c87030",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 009218f0 ["INT_ADD", "register:40f0:8", ["const:9218f0:8", "const:4:8"]]
- 009218f0 ["CALL", null, ["callee:00c58f30:8"]]
+ 0092289c ["INT_ADD", "register:40f0:8", ["const:92289c:8", "const:4:8"]]
+ 0092289c ["CALL", null, ["callee:00c58f30:8"]]
- 009218f4 ["COPY", "register:4040:8", ["const:c86000:8"]]
+ 009228a0 ["COPY", "register:4040:8", ["const:c87000:8"]]
- 009218f8 ["COPY", "tmp:0:8", ["const:60:8"]]
- 009218f8 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 009218f8 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 009218f8 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 009228a4 ["COPY", "tmp:0:8", ["const:30:8"]]
+ 009228a4 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 009228a4 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 009228a4 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-d8f670535c2c7f99d9552740b11d9544"></a>

### [`00921920`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00921/00921920.md) → [`009228cc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00922/009228cc.md) FUN_009228cc

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 3件 [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md) [`0047ce14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047ce14.md) [`008b91d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b9/008b91d0.md)
- 新版 呼出元 0件  · 呼出先 3件 [`0047b054`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047b/0047b054.md) [`0047d134`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047d/0047d134.md) [`008ba17c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008ba/008ba17c.md)

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
      "site": "009228f0",
      "value": [
        "leaf",
        "ram:47b054:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "00921944",
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
      "009228f0",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ]
  ],
  "added": [
    [
      "009228f0",
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
- 00921944 ["INT_ADD", "register:40f0:8", ["const:921944:8", "const:4:8"]]
- 00921944 ["CALL", null, ["ram:47ad34:8"]]
+ 009228f0 ["INT_ADD", "register:40f0:8", ["const:9228f0:8", "const:4:8"]]
+ 009228f0 ["CALL", null, ["ram:47b054:8"]]
- 00921950 ["INT_ADD", "register:40f0:8", ["const:921950:8", "const:4:8"]]
- 00921950 ["CALL", null, ["callee:0047d134:8"]]
+ 009228fc ["INT_ADD", "register:40f0:8", ["const:9228fc:8", "const:4:8"]]
+ 009228fc ["CALL", null, ["callee:0047d134:8"]]
~~~


<a id="compare-7b9e0d17a6e599a4a47373d0a6f10677"></a>

### [`00921994`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00921/00921994.md) → [`00922940`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00922/00922940.md) FUN_00922940

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
      "definition_site": "00922954",
      "incomplete_value": false,
      "site": "00922958",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c87000:8"
          ],
          [
            "leaf",
            "const:b0:8"
          ]
        ]
      ]
    },
    "old": {
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
      "00922958",
      "DATA",
      [
        "storage",
        "00c860e0",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00922958",
      "DATA",
      [
        "storage",
        "00c870b0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 009219a0 ["INT_ADD", "register:40f0:8", ["const:9219a0:8", "const:4:8"]]
- 009219a0 ["CALL", null, ["callee:00c58f30:8"]]
+ 0092294c ["INT_ADD", "register:40f0:8", ["const:92294c:8", "const:4:8"]]
+ 0092294c ["CALL", null, ["callee:00c58f30:8"]]
- 009219a4 ["COPY", "register:4040:8", ["const:c86000:8"]]
+ 00922950 ["COPY", "register:4040:8", ["const:c87000:8"]]
- 009219a8 ["COPY", "tmp:0:8", ["const:e0:8"]]
- 009219a8 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 009219a8 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 009219a8 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00922954 ["COPY", "tmp:0:8", ["const:b0:8"]]
+ 00922954 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00922954 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00922954 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-fdfc2812ad6dfb5c36c5c0271c6ad315"></a>

### [`009219d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00921/009219d0.md) → [`0092297c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00922/0092297c.md) FUN_0092297c

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 3件 [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md) [`0047ce14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047ce14.md) [`008b91d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b9/008b91d0.md)
- 新版 呼出元 0件  · 呼出先 3件 [`0047b054`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047b/0047b054.md) [`0047d134`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047d/0047d134.md) [`008ba17c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008ba/008ba17c.md)

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
      "site": "009229a4",
      "value": [
        "leaf",
        "ram:47b054:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "009219f8",
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
      "009229a4",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ]
  ],
  "added": [
    [
      "009229a4",
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
- 009219f8 ["INT_ADD", "register:40f0:8", ["const:9219f8:8", "const:4:8"]]
- 009219f8 ["CALL", null, ["ram:47ad34:8"]]
+ 009229a4 ["INT_ADD", "register:40f0:8", ["const:9229a4:8", "const:4:8"]]
+ 009229a4 ["CALL", null, ["ram:47b054:8"]]
- 00921a04 ["INT_ADD", "register:40f0:8", ["const:921a04:8", "const:4:8"]]
- 00921a04 ["CALL", null, ["callee:0047d134:8"]]
+ 009229b0 ["INT_ADD", "register:40f0:8", ["const:9229b0:8", "const:4:8"]]
+ 009229b0 ["CALL", null, ["callee:0047d134:8"]]
~~~


<a id="compare-819cb40e5e5f46321942460f0010f632"></a>

### [`00921a48`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00921/00921a48.md) → [`009229f4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00922/009229f4.md) FUN_009229f4

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
      "definition_site": "00922a08",
      "incomplete_value": false,
      "site": "00922a0c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c87000:8"
          ],
          [
            "leaf",
            "const:130:8"
          ]
        ]
      ]
    },
    "old": {
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
      "00922a0c",
      "DATA",
      [
        "storage",
        "00c86160",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00922a0c",
      "DATA",
      [
        "storage",
        "00c87130",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00921a54 ["INT_ADD", "register:40f0:8", ["const:921a54:8", "const:4:8"]]
- 00921a54 ["CALL", null, ["callee:00c58f30:8"]]
+ 00922a00 ["INT_ADD", "register:40f0:8", ["const:922a00:8", "const:4:8"]]
+ 00922a00 ["CALL", null, ["callee:00c58f30:8"]]
- 00921a58 ["COPY", "register:4040:8", ["const:c86000:8"]]
+ 00922a04 ["COPY", "register:4040:8", ["const:c87000:8"]]
- 00921a5c ["COPY", "tmp:0:8", ["const:160:8"]]
- 00921a5c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00921a5c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00921a5c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00922a08 ["COPY", "tmp:0:8", ["const:130:8"]]
+ 00922a08 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00922a08 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00922a08 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-ef29e1b686aa54a2a26417b10aaa35b9"></a>

### [`00921a84`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00921/00921a84.md) → [`00922a30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00922/00922a30.md) FUN_00922a30

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 3件 [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md) [`0047ce14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047ce14.md) [`008b91d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b9/008b91d0.md)
- 新版 呼出元 0件  · 呼出先 3件 [`0047b054`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047b/0047b054.md) [`0047d134`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047d/0047d134.md) [`008ba17c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008ba/008ba17c.md)

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
      "site": "00922a58",
      "value": [
        "leaf",
        "ram:47b054:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "00921aac",
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
      "00922a58",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ]
  ],
  "added": [
    [
      "00922a58",
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
- 00921aac ["INT_ADD", "register:40f0:8", ["const:921aac:8", "const:4:8"]]
- 00921aac ["CALL", null, ["ram:47ad34:8"]]
+ 00922a58 ["INT_ADD", "register:40f0:8", ["const:922a58:8", "const:4:8"]]
+ 00922a58 ["CALL", null, ["ram:47b054:8"]]
- 00921ab8 ["INT_ADD", "register:40f0:8", ["const:921ab8:8", "const:4:8"]]
- 00921ab8 ["CALL", null, ["callee:0047d134:8"]]
+ 00922a64 ["INT_ADD", "register:40f0:8", ["const:922a64:8", "const:4:8"]]
+ 00922a64 ["CALL", null, ["callee:0047d134:8"]]
~~~


<a id="compare-fbe2d77a6e83d9f8158fa27c22d9944f"></a>

### [`00921afc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00921/00921afc.md) → [`00922aa8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00922/00922aa8.md) FUN_00922aa8

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
      "definition_site": "00922abc",
      "incomplete_value": false,
      "site": "00922ac0",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c87000:8"
          ],
          [
            "leaf",
            "const:1b0:8"
          ]
        ]
      ]
    },
    "old": {
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
      "00922ac0",
      "DATA",
      [
        "storage",
        "00c861e0",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00922ac0",
      "DATA",
      [
        "storage",
        "00c871b0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00921b08 ["INT_ADD", "register:40f0:8", ["const:921b08:8", "const:4:8"]]
- 00921b08 ["CALL", null, ["callee:00c58f30:8"]]
+ 00922ab4 ["INT_ADD", "register:40f0:8", ["const:922ab4:8", "const:4:8"]]
+ 00922ab4 ["CALL", null, ["callee:00c58f30:8"]]
- 00921b0c ["COPY", "register:4040:8", ["const:c86000:8"]]
+ 00922ab8 ["COPY", "register:4040:8", ["const:c87000:8"]]
- 00921b10 ["COPY", "tmp:0:8", ["const:1e0:8"]]
- 00921b10 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00921b10 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00921b10 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00922abc ["COPY", "tmp:0:8", ["const:1b0:8"]]
+ 00922abc ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00922abc ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00922abc ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-18a0248e77e5091df4bcf531959a2b9e"></a>

### [`00921b38`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00921/00921b38.md) → [`00922ae4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00922/00922ae4.md) FUN_00922ae4

根拠 `instruction_blocks_cfg_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 8件 [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md) [`0047ce14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047ce14.md) [`005e81d8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005e8/005e81d8.md) [`0071e3ec`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0071e/0071e3ec.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)
- 新版 呼出元 0件  · 呼出先 8件 [`0047b054`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047b/0047b054.md) [`0047d134`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047d/0047d134.md) [`005e8588`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005e8/005e8588.md) [`0071e79c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0071e/0071e79c.md) [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md)

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
      "site": "00922b20",
      "value": [
        "leaf",
        "ram:47b054:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "00921b74",
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
      "site": "00922cd4",
      "value": [
        "leaf",
        "ram:47b054:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "00921d28",
      "value": [
        "leaf",
        "ram:47ad34:8"
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
      "00922b20",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ],
    [
      "00922b74",
      "DATA",
      [
        "storage",
        "0039e374",
        null,
        "dword"
      ]
    ],
    [
      "00922bf8",
      "DATA",
      [
        "storage",
        "0039e374",
        null,
        "dword"
      ]
    ]
  ],
  "added": [
    [
      "00922b20",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047b054"
      ]
    ],
    [
      "00922b74",
      "DATA",
      [
        "storage",
        "0039e374",
        null,
        "byte[51]"
      ]
    ],
    [
      "00922bf8",
      "DATA",
      [
        "storage",
        "0039e374",
        null,
        "byte[51]"
      ]
    ]
  ]
}
~~~


~~~diff
- 00921b74 ["INT_ADD", "register:40f0:8", ["const:921b74:8", "const:4:8"]]
- 00921b74 ["CALL", null, ["ram:47ad34:8"]]
+ 00922b20 ["INT_ADD", "register:40f0:8", ["const:922b20:8", "const:4:8"]]
+ 00922b20 ["CALL", null, ["ram:47b054:8"]]
- 00921d28 ["INT_ADD", "register:40f0:8", ["const:921d28:8", "const:4:8"]]
- 00921d28 ["CALL", null, ["ram:47ad34:8"]]
+ 00922cd4 ["INT_ADD", "register:40f0:8", ["const:922cd4:8", "const:4:8"]]
+ 00922cd4 ["CALL", null, ["ram:47b054:8"]]
- 00921b80 ["INT_ADD", "register:40f0:8", ["const:921b80:8", "const:4:8"]]
- 00921b80 ["CALL", null, ["callee:0047d134:8"]]
+ 00922b2c ["INT_ADD", "register:40f0:8", ["const:922b2c:8", "const:4:8"]]
+ 00922b2c ["CALL", null, ["callee:0047d134:8"]]
~~~


<a id="compare-dc683e04c67965898b8d9faf4f7613ef"></a>

### [`00921db8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00921/00921db8.md) → [`00922d64`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00922/00922d64.md) FUN_00922d64

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
      "definition_site": "00922d88",
      "incomplete_value": false,
      "site": "00922d88",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c87000:8"
          ],
          [
            "leaf",
            "const:230:8"
          ]
        ]
      ]
    },
    "old": {
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
      "00922d88",
      "DATA",
      [
        "storage",
        "00c86260",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00922d88",
      "DATA",
      [
        "storage",
        "00c87230",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00921dcc ["INT_ADD", "register:40f0:8", ["const:921dcc:8", "const:4:8"]]
- 00921dcc ["CALL", null, ["callee:00c58f30:8"]]
+ 00922d78 ["INT_ADD", "register:40f0:8", ["const:922d78:8", "const:4:8"]]
+ 00922d78 ["CALL", null, ["callee:00c58f30:8"]]
- 00921dd4 ["COPY", "register:4040:8", ["const:c86000:8"]]
+ 00922d80 ["COPY", "register:4040:8", ["const:c87000:8"]]
- 00921dd8 ["COPY", "tmp:0:8", ["const:260:8"]]
- 00921dd8 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00921dd8 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00921dd8 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00922d84 ["COPY", "tmp:0:8", ["const:230:8"]]
+ 00922d84 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00922d84 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00922d84 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-cc13c51eef40781904058b731eb6ea13"></a>

### [`00921e64`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00921/00921e64.md) → [`00922e10`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00922/00922e10.md) FUN_00922e10

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
      "definition_site": "00922e34",
      "incomplete_value": false,
      "site": "00922e34",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c87000:8"
          ],
          [
            "leaf",
            "const:2b0:8"
          ]
        ]
      ]
    },
    "old": {
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
      "00922e34",
      "DATA",
      [
        "storage",
        "00c862e0",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00922e34",
      "DATA",
      [
        "storage",
        "00c872b0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00921e78 ["INT_ADD", "register:40f0:8", ["const:921e78:8", "const:4:8"]]
- 00921e78 ["CALL", null, ["callee:00c58f30:8"]]
+ 00922e24 ["INT_ADD", "register:40f0:8", ["const:922e24:8", "const:4:8"]]
+ 00922e24 ["CALL", null, ["callee:00c58f30:8"]]
- 00921e80 ["COPY", "register:4040:8", ["const:c86000:8"]]
+ 00922e2c ["COPY", "register:4040:8", ["const:c87000:8"]]
- 00921e84 ["COPY", "tmp:0:8", ["const:2e0:8"]]
- 00921e84 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00921e84 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00921e84 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00922e30 ["COPY", "tmp:0:8", ["const:2b0:8"]]
+ 00922e30 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00922e30 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00922e30 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-22f0896f146093554dcde5a7eb4540e7"></a>

### [`00921e98`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00921/00921e98.md) → [`00922e44`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00922/00922e44.md) FUN_00922e44

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
      "definition_site": "00922e50",
      "incomplete_value": false,
      "site": "00922e50",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c87000:8"
          ],
          [
            "leaf",
            "const:2b0:8"
          ]
        ]
      ]
    },
    "old": {
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
      "00922e50",
      "DATA",
      [
        "storage",
        "00c862e0",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00922e50",
      "DATA",
      [
        "storage",
        "00c872b0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00921e9c ["COPY", "register:4048:8", ["const:c86000:8"]]
+ 00922e48 ["COPY", "register:4048:8", ["const:c87000:8"]]
- 00921ea0 ["COPY", "tmp:0:8", ["const:2e0:8"]]
- 00921ea0 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 00921ea0 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 00921ea0 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 00922e4c ["COPY", "tmp:0:8", ["const:2b0:8"]]
+ 00922e4c ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 00922e4c ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 00922e4c ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
~~~


<a id="compare-1cd8239a9ea1ca16bd266ddc97aefd7a"></a>

### [`00921eb4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00921/00921eb4.md) → [`00922e60`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00922/00922e60.md) FUN_00922e60

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 17件 [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md) [`0047ce14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047ce14.md) [`00489f8c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00489/00489f8c.md) [`0048ce94`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048c/0048ce94.md) [`008b92f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b9/008b92f0.md)
- 新版 呼出元 0件  · 呼出先 17件 [`0047b054`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047b/0047b054.md) [`0047d134`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047d/0047d134.md) [`0048a2ac`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0048a/0048a2ac.md) [`0048d1b4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0048d/0048d1b4.md) [`008ba29c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008ba/008ba29c.md)

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
      "definition_site": "00922f00",
      "incomplete_value": true,
      "site": "00922f10",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:dc8:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
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
    "ordinal": 12,
    "slot": 2
  },
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "00922f30",
      "incomplete_value": false,
      "site": "00922f30",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c87000:8"
          ],
          [
            "leaf",
            "const:320:8"
          ]
        ]
      ]
    },
    "old": {
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
    "ordinal": 14,
    "slot": 2
  },
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "00923054",
      "incomplete_value": false,
      "site": "00923054",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c87000:8"
          ],
          [
            "leaf",
            "const:4a0:8"
          ]
        ]
      ]
    },
    "old": {
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
      "00922ea0",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ],
    [
      "00922ebc",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ],
    [
      "00922f00",
      "READ",
      [
        "storage",
        "002adcfb",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "00922ea0",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047b054"
      ]
    ],
    [
      "00922ebc",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047b054"
      ]
    ],
    [
      "00922f00",
      "READ",
      [
        "storage",
        "002addc8",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 00921ef4 ["INT_ADD", "register:40f0:8", ["const:921ef4:8", "const:4:8"]]
- 00921ef4 ["CALL", null, ["ram:47ad34:8"]]
+ 00922ea0 ["INT_ADD", "register:40f0:8", ["const:922ea0:8", "const:4:8"]]
+ 00922ea0 ["CALL", null, ["ram:47b054:8"]]
- 00921f10 ["INT_ADD", "register:40f0:8", ["const:921f10:8", "const:4:8"]]
- 00921f10 ["CALL", null, ["ram:47ad34:8"]]
+ 00922ebc ["INT_ADD", "register:40f0:8", ["const:922ebc:8", "const:4:8"]]
+ 00922ebc ["CALL", null, ["ram:47b054:8"]]
- 0092202c ["INT_ADD", "register:40f0:8", ["const:92202c:8", "const:4:8"]]
- 0092202c ["CALL", null, ["callee:00c596b0:8"]]
+ 00922fd8 ["INT_ADD", "register:40f0:8", ["const:922fd8:8", "const:4:8"]]
+ 00922fd8 ["CALL", null, ["callee:00c596b0:8"]]
~~~


<a id="compare-5461f0cd1080722d53c1b806d6f87189"></a>

### [`009222b8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00922/009222b8.md) → [`00923264`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00923/00923264.md) FUN_00923264

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
      "definition_site": "00923284",
      "incomplete_value": false,
      "site": "00923288",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c87000:8"
          ],
          [
            "leaf",
            "const:320:8"
          ]
        ]
      ]
    },
    "old": {
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
      "00923288",
      "DATA",
      [
        "storage",
        "00c86350",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00923288",
      "DATA",
      [
        "storage",
        "00c87320",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 009222cc ["INT_ADD", "register:40f0:8", ["const:9222cc:8", "const:4:8"]]
- 009222cc ["CALL", null, ["callee:00c58f30:8"]]
+ 00923278 ["INT_ADD", "register:40f0:8", ["const:923278:8", "const:4:8"]]
+ 00923278 ["CALL", null, ["callee:00c58f30:8"]]
- 009222d4 ["COPY", "register:4040:8", ["const:c86000:8"]]
+ 00923280 ["COPY", "register:4040:8", ["const:c87000:8"]]
- 009222d8 ["COPY", "tmp:0:8", ["const:350:8"]]
- 009222d8 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 009222d8 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 009222d8 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00923284 ["COPY", "tmp:0:8", ["const:320:8"]]
+ 00923284 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00923284 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00923284 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-6653bbb11912b66befe253c3884b17b9"></a>

### [`009222f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00922/009222f0.md) → [`0092329c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00923/0092329c.md) FUN_0092329c

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
      "definition_site": "009232a0",
      "incomplete_value": false,
      "site": "009232a4",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c87000:8"
          ],
          [
            "leaf",
            "const:320:8"
          ]
        ]
      ]
    },
    "old": {
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
      "009232a4",
      "DATA",
      [
        "storage",
        "00c86350",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "009232a4",
      "DATA",
      [
        "storage",
        "00c87320",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 009222f0 ["COPY", "register:4040:8", ["const:c86000:8"]]
+ 0092329c ["COPY", "register:4040:8", ["const:c87000:8"]]
- 009222f4 ["COPY", "tmp:0:8", ["const:350:8"]]
- 009222f4 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 009222f4 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 009222f4 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 009232a0 ["COPY", "tmp:0:8", ["const:320:8"]]
+ 009232a0 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 009232a0 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 009232a0 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-d607eda8a57dc21446d1e6f79da8bc9b"></a>

### [`00922310`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00922/00922310.md) → [`009232bc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00923/009232bc.md) FUN_009232bc

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 8件 [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md) [`0047cacc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047cacc.md) [`0047ce14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047ce14.md) [`00888480`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00888/00888480.md) [`008b91d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b9/008b91d0.md)
- 新版 呼出元 0件  · 呼出先 8件 [`0047b054`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047b/0047b054.md) [`0047cdec`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047c/0047cdec.md) [`0047d134`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047d/0047d134.md) [`0088942c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00889/0088942c.md) [`008ba17c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008ba/008ba17c.md)

変更の種類 call, call_target, constant, operands_and_dependencies, store_value

命令の説明率　旧版 94.12% / 新版 94.12%

優先判定に残った影響 `call_target` 2件, `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "00923364",
      "incomplete_value": false,
      "site": "00923364",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c87000:8"
          ],
          [
            "leaf",
            "const:390:8"
          ]
        ]
      ]
    },
    "old": {
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
    "ordinal": 5,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "call_target",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "0092330c",
      "value": [
        "leaf",
        "ram:47b054:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "00922360",
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
      "site": "0092334c",
      "value": [
        "leaf",
        "ram:47b054:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "009223a0",
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
      "009232fc",
      "DATA",
      [
        "storage",
        "003c78b4",
        null,
        "byte[11]"
      ]
    ],
    [
      "0092330c",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ],
    [
      "0092334c",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ]
  ],
  "added": [
    [
      "009232fc",
      "DATA",
      [
        "storage",
        "003c78b4",
        "fde_003c78b4",
        "dword"
      ]
    ],
    [
      "0092330c",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047b054"
      ]
    ],
    [
      "0092334c",
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
- 00922360 ["INT_ADD", "register:40f0:8", ["const:922360:8", "const:4:8"]]
- 00922360 ["CALL", null, ["ram:47ad34:8"]]
+ 0092330c ["INT_ADD", "register:40f0:8", ["const:92330c:8", "const:4:8"]]
+ 0092330c ["CALL", null, ["ram:47b054:8"]]
- 009223a0 ["INT_ADD", "register:40f0:8", ["const:9223a0:8", "const:4:8"]]
- 009223a0 ["CALL", null, ["ram:47ad34:8"]]
+ 0092334c ["INT_ADD", "register:40f0:8", ["const:92334c:8", "const:4:8"]]
+ 0092334c ["CALL", null, ["ram:47b054:8"]]
- 0092236c ["INT_ADD", "register:40f0:8", ["const:92236c:8", "const:4:8"]]
- 0092236c ["CALL", null, ["callee:0047d134:8"]]
+ 00923318 ["INT_ADD", "register:40f0:8", ["const:923318:8", "const:4:8"]]
+ 00923318 ["CALL", null, ["callee:0047d134:8"]]
~~~


<a id="compare-3fc20d70f6ea08493e0270cbb638f04e"></a>

### [`00922498`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00922/00922498.md) → [`00923444`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00923/00923444.md) FUN_00923444

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
      "definition_site": "00923468",
      "incomplete_value": false,
      "site": "00923468",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c87000:8"
          ],
          [
            "leaf",
            "const:390:8"
          ]
        ]
      ]
    },
    "old": {
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
      "00923468",
      "DATA",
      [
        "storage",
        "00c863c0",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00923468",
      "DATA",
      [
        "storage",
        "00c87390",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 009224ac ["INT_ADD", "register:40f0:8", ["const:9224ac:8", "const:4:8"]]
- 009224ac ["CALL", null, ["callee:00c58f30:8"]]
+ 00923458 ["INT_ADD", "register:40f0:8", ["const:923458:8", "const:4:8"]]
+ 00923458 ["CALL", null, ["callee:00c58f30:8"]]
- 009224b4 ["COPY", "register:4040:8", ["const:c86000:8"]]
+ 00923460 ["COPY", "register:4040:8", ["const:c87000:8"]]
- 009224b8 ["COPY", "tmp:0:8", ["const:3c0:8"]]
- 009224b8 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 009224b8 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 009224b8 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00923464 ["COPY", "tmp:0:8", ["const:390:8"]]
+ 00923464 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00923464 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00923464 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-34433a0aa09552e57e5bcaeb70409ed1"></a>

### [`009224cc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00922/009224cc.md) → [`00923478`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00923/00923478.md) FUN_00923478

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
      "definition_site": "00923484",
      "incomplete_value": false,
      "site": "00923484",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c87000:8"
          ],
          [
            "leaf",
            "const:390:8"
          ]
        ]
      ]
    },
    "old": {
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
      "00923484",
      "DATA",
      [
        "storage",
        "00c863c0",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00923484",
      "DATA",
      [
        "storage",
        "00c87390",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 009224d0 ["COPY", "register:4048:8", ["const:c86000:8"]]
+ 0092347c ["COPY", "register:4048:8", ["const:c87000:8"]]
- 009224d4 ["COPY", "tmp:0:8", ["const:3c0:8"]]
- 009224d4 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 009224d4 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 009224d4 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 00923480 ["COPY", "tmp:0:8", ["const:390:8"]]
+ 00923480 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 00923480 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 00923480 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
~~~


<a id="compare-d13a9e8ad963e859a05b8629128d6639"></a>

### [`009227a8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00922/009227a8.md) → [`00923754`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00923/00923754.md) FUN_00923754

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
      "definition_site": "00923768",
      "incomplete_value": false,
      "site": "0092376c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c87000:8"
          ],
          [
            "leaf",
            "const:400:8"
          ]
        ]
      ]
    },
    "old": {
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
      "0092376c",
      "DATA",
      [
        "storage",
        "00c86430",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "0092376c",
      "DATA",
      [
        "storage",
        "00c87400",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 009227b4 ["INT_ADD", "register:40f0:8", ["const:9227b4:8", "const:4:8"]]
- 009227b4 ["CALL", null, ["callee:00c58f30:8"]]
+ 00923760 ["INT_ADD", "register:40f0:8", ["const:923760:8", "const:4:8"]]
+ 00923760 ["CALL", null, ["callee:00c58f30:8"]]
- 009227b8 ["COPY", "register:4040:8", ["const:c86000:8"]]
+ 00923764 ["COPY", "register:4040:8", ["const:c87000:8"]]
- 009227bc ["COPY", "tmp:0:8", ["const:430:8"]]
- 009227bc ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 009227bc ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 009227bc ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00923768 ["COPY", "tmp:0:8", ["const:400:8"]]
+ 00923768 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00923768 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00923768 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-339e7449ad9c4729ae7c005111d4691d"></a>

### [`009227e4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00922/009227e4.md) → [`00923790`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00923/00923790.md) FUN_00923790

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 3件 [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md) [`0047ce14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047ce14.md) [`008b91d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b9/008b91d0.md)
- 新版 呼出元 0件  · 呼出先 3件 [`0047b054`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047b/0047b054.md) [`0047d134`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047d/0047d134.md) [`008ba17c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008ba/008ba17c.md)

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
      "site": "009237b4",
      "value": [
        "leaf",
        "ram:47b054:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "00922808",
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
      "009237b4",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ]
  ],
  "added": [
    [
      "009237b4",
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
- 00922808 ["INT_ADD", "register:40f0:8", ["const:922808:8", "const:4:8"]]
- 00922808 ["CALL", null, ["ram:47ad34:8"]]
+ 009237b4 ["INT_ADD", "register:40f0:8", ["const:9237b4:8", "const:4:8"]]
+ 009237b4 ["CALL", null, ["ram:47b054:8"]]
- 00922814 ["INT_ADD", "register:40f0:8", ["const:922814:8", "const:4:8"]]
- 00922814 ["CALL", null, ["callee:0047d134:8"]]
+ 009237c0 ["INT_ADD", "register:40f0:8", ["const:9237c0:8", "const:4:8"]]
+ 009237c0 ["CALL", null, ["callee:0047d134:8"]]
~~~


<a id="compare-fa10fb5ee0e014f42b94e492b607cc0f"></a>

### [`00922858`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00922/00922858.md) → [`00923804`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00923/00923804.md) FUN_00923804

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
      "definition_site": "00923828",
      "incomplete_value": false,
      "site": "0092382c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c87000:8"
          ],
          [
            "leaf",
            "const:4a0:8"
          ]
        ]
      ]
    },
    "old": {
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
      "0092382c",
      "DATA",
      [
        "storage",
        "00c864d0",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "0092382c",
      "DATA",
      [
        "storage",
        "00c874a0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 0092286c ["INT_ADD", "register:40f0:8", ["const:92286c:8", "const:4:8"]]
- 0092286c ["CALL", null, ["callee:00c58f30:8"]]
+ 00923818 ["INT_ADD", "register:40f0:8", ["const:923818:8", "const:4:8"]]
+ 00923818 ["CALL", null, ["callee:00c58f30:8"]]
- 00922878 ["COPY", "register:4040:8", ["const:c86000:8"]]
+ 00923824 ["COPY", "register:4040:8", ["const:c87000:8"]]
- 0092287c ["COPY", "tmp:0:8", ["const:4d0:8"]]
- 0092287c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 0092287c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 0092287c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00923828 ["COPY", "tmp:0:8", ["const:4a0:8"]]
+ 00923828 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00923828 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00923828 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-d04ff61869ca3a7595fdde02b3894737"></a>

### [`00922898`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00922/00922898.md) → [`00923844`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00923/00923844.md) FUN_00923844

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
      "definition_site": "00923848",
      "incomplete_value": false,
      "site": "0092384c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c87000:8"
          ],
          [
            "leaf",
            "const:4a0:8"
          ]
        ]
      ]
    },
    "old": {
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
      "0092384c",
      "DATA",
      [
        "storage",
        "00c864d0",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "0092384c",
      "DATA",
      [
        "storage",
        "00c874a0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00922898 ["COPY", "register:4040:8", ["const:c86000:8"]]
+ 00923844 ["COPY", "register:4040:8", ["const:c87000:8"]]
- 0092289c ["COPY", "tmp:0:8", ["const:4d0:8"]]
- 0092289c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 0092289c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 0092289c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00923848 ["COPY", "tmp:0:8", ["const:4a0:8"]]
+ 00923848 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00923848 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00923848 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-c86a1f07843263d99d85996244c0bec4"></a>

### [`009228c0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00922/009228c0.md) → [`0092386c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00923/0092386c.md) FUN_0092386c

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 5件 [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md) [`0047ce14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047ce14.md) [`00859ba4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00859/00859ba4.md) [`0085b338`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0085b/0085b338.md) [`009dce94`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009dc/009dce94.md)
- 新版 呼出元 0件  · 呼出先 5件 [`0047b054`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047b/0047b054.md) [`0047d134`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047d/0047d134.md) [`0085ab50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0085a/0085ab50.md) [`0085c2e4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0085c/0085c2e4.md) [`009dde40`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009dd/009dde40.md)

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
      "site": "009238b0",
      "value": [
        "leaf",
        "ram:47b054:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "00922904",
      "value": [
        "leaf",
        "ram:47ad34:8"
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
      "site": "009238fc",
      "value": [
        "leaf",
        "ram:47b054:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "00922950",
      "value": [
        "leaf",
        "ram:47ad34:8"
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
      "009238b0",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ],
    [
      "009238f0",
      "DATA",
      [
        "storage",
        "003c78b4",
        null,
        "byte[11]"
      ]
    ],
    [
      "009238f8",
      "DATA",
      [
        "storage",
        "003c78b4",
        null,
        "byte[11]"
      ]
    ]
  ],
  "added": [
    [
      "009238b0",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047b054"
      ]
    ],
    [
      "009238f0",
      "DATA",
      [
        "storage",
        "003c78b4",
        "fde_003c78b4",
        "dword"
      ]
    ],
    [
      "009238f8",
      "DATA",
      [
        "storage",
        "003c78b4",
        "fde_003c78b4",
        "dword"
      ]
    ]
  ]
}
~~~


~~~diff
- 00922904 ["INT_ADD", "register:40f0:8", ["const:922904:8", "const:4:8"]]
- 00922904 ["CALL", null, ["ram:47ad34:8"]]
+ 009238b0 ["INT_ADD", "register:40f0:8", ["const:9238b0:8", "const:4:8"]]
+ 009238b0 ["CALL", null, ["ram:47b054:8"]]
- 00922950 ["INT_ADD", "register:40f0:8", ["const:922950:8", "const:4:8"]]
- 00922950 ["CALL", null, ["ram:47ad34:8"]]
+ 009238fc ["INT_ADD", "register:40f0:8", ["const:9238fc:8", "const:4:8"]]
+ 009238fc ["CALL", null, ["ram:47b054:8"]]
- 009228e0 ["INT_ADD", "register:40f0:8", ["const:9228e0:8", "const:4:8"]]
- 009228e0 ["CALL", null, ["callee:0085ab50:8"]]
+ 0092388c ["INT_ADD", "register:40f0:8", ["const:92388c:8", "const:4:8"]]
+ 0092388c ["CALL", null, ["callee:0085ab50:8"]]
~~~


<a id="compare-51f8aa33ea4d3d78617d841b2afb387b"></a>

### [`009229a8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00922/009229a8.md) → [`00923954`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00923/00923954.md) FUN_00923954

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
      "definition_site": "00923978",
      "incomplete_value": false,
      "site": "0092397c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c87000:8"
          ],
          [
            "leaf",
            "const:520:8"
          ]
        ]
      ]
    },
    "old": {
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
      "0092397c",
      "DATA",
      [
        "storage",
        "00c86550",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "0092397c",
      "DATA",
      [
        "storage",
        "00c87520",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 009229bc ["INT_ADD", "register:40f0:8", ["const:9229bc:8", "const:4:8"]]
- 009229bc ["CALL", null, ["callee:00c58f30:8"]]
+ 00923968 ["INT_ADD", "register:40f0:8", ["const:923968:8", "const:4:8"]]
+ 00923968 ["CALL", null, ["callee:00c58f30:8"]]
- 009229c8 ["COPY", "register:4040:8", ["const:c86000:8"]]
+ 00923974 ["COPY", "register:4040:8", ["const:c87000:8"]]
- 009229cc ["COPY", "tmp:0:8", ["const:550:8"]]
- 009229cc ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 009229cc ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 009229cc ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00923978 ["COPY", "tmp:0:8", ["const:520:8"]]
+ 00923978 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00923978 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00923978 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-4a84f938f5f762293c6df789e6db92bf"></a>

### [`009229e8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00922/009229e8.md) → [`00923994`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00923/00923994.md) FUN_00923994

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
      "definition_site": "00923998",
      "incomplete_value": false,
      "site": "0092399c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c87000:8"
          ],
          [
            "leaf",
            "const:520:8"
          ]
        ]
      ]
    },
    "old": {
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
      "0092399c",
      "DATA",
      [
        "storage",
        "00c86550",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "0092399c",
      "DATA",
      [
        "storage",
        "00c87520",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 009229e8 ["COPY", "register:4040:8", ["const:c86000:8"]]
+ 00923994 ["COPY", "register:4040:8", ["const:c87000:8"]]
- 009229ec ["COPY", "tmp:0:8", ["const:550:8"]]
- 009229ec ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 009229ec ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 009229ec ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00923998 ["COPY", "tmp:0:8", ["const:520:8"]]
+ 00923998 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00923998 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00923998 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-b456f1f623378a2bf3ddd9d128c43b5f"></a>

### [`00922a8c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00922/00922a8c.md) → [`00923a38`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00923/00923a38.md) _INIT_179

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
      "definition_site": "00923a74",
      "incomplete_value": true,
      "site": "00923a90",
      "value": [
        "LOAD",
        "16",
        [
          [
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
    "ordinal": 9,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00923a98",
      "incomplete_value": true,
      "site": "00923ab4",
      "value": [
        "LOAD",
        "16",
        [
          [
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
    "ordinal": 12,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00923ab8",
      "incomplete_value": true,
      "site": "00923ad4",
      "value": [
        "LOAD",
        "16",
        [
          [
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
      "00923a74",
      "READ",
      [
        "storage",
        "002b7f66",
        null,
        "string"
      ]
    ],
    [
      "00923a98",
      "READ",
      [
        "storage",
        "002b7f79",
        null,
        "string"
      ]
    ],
    [
      "00923ab8",
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
      "00923a74",
      "READ",
      [
        "storage",
        "002b8035",
        null,
        "string"
      ]
    ],
    [
      "00923a98",
      "READ",
      [
        "storage",
        "002b8048",
        null,
        "string"
      ]
    ],
    [
      "00923ab8",
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
- 00922bec ["INT_ADD", "register:40f0:8", ["const:922bec:8", "const:4:8"]]
- 00922bec ["CALL", null, ["callee:0043bb58:8"]]
+ 00923b98 ["INT_ADD", "register:40f0:8", ["const:923b98:8", "const:4:8"]]
+ 00923b98 ["CALL", null, ["callee:0043bb58:8"]]
- 00922cc0 ["INT_ADD", "register:40f0:8", ["const:922cc0:8", "const:4:8"]]
- 00922cc0 ["CALL", null, ["callee:00c58ed0:8"]]
+ 00923c6c ["INT_ADD", "register:40f0:8", ["const:923c6c:8", "const:4:8"]]
+ 00923c6c ["CALL", null, ["callee:00c58ed0:8"]]
- 00922ab4 ["COPY", "register:4098:8", ["const:1123000:8"]]
+ 00923a60 ["COPY", "register:4098:8", ["const:1124000:8"]]
~~~


<a id="compare-b43bb2928417a1e8ed7fac46c715d714"></a>

### [`0092491c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00924/0092491c.md) → [`009258c8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00925/009258c8.md) FUN_009258c8

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00856e84`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00856/00856e84.md) · 呼出先 26件 [`0044e220`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0044e/0044e220.md) [`0046ca04`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046c/0046ca04.md) [`0046d7f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046d/0046d7f0.md) [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md) [`0047cacc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047cacc.md)
- 新版 呼出元 1件 [`00857e30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00857/00857e30.md) · 呼出先 25件 [`0046cd24`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0046c/0046cd24.md) [`0046db10`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0046d/0046db10.md) [`0047b054`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047b/0047b054.md) [`0047cdec`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047c/0047cdec.md) [`0047d134`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047d/0047d134.md)

変更の種類 call, call_target, constant, operands_and_dependencies, operation_sequence, store_value

命令の説明率　旧版 97.83% / 新版 97.83%

優先判定に残った影響 `call_target` 8件, `store_value` 3件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00925b50",
      "incomplete_value": true,
      "site": "00925b60",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:1ee:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00924ba4",
      "incomplete_value": true,
      "site": "00924bb4",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:1a4:8"
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
      "definition_site": "00925b54",
      "incomplete_value": true,
      "site": "00925b64",
      "value": [
        "LOAD",
        "8",
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
      "definition_site": "00924ba8",
      "incomplete_value": true,
      "site": "00924bb8",
      "value": [
        "LOAD",
        "8",
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
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00925b58",
      "incomplete_value": true,
      "site": "00925b68",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:330:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00924bac",
      "incomplete_value": true,
      "site": "00924bbc",
      "value": [
        "LOAD",
        "16",
        [
          [
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
      "00925a10",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ],
    [
      "00925aec",
      "DATA",
      [
        "storage",
        "0044e210",
        null,
        null
      ]
    ],
    [
      "00925aec",
      "DATA",
      [
        "storage",
        "0044e214",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "00925a10",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047b054"
      ]
    ],
    [
      "00925b50",
      "READ",
      [
        "storage",
        "002c01ee",
        null,
        "string"
      ]
    ],
    [
      "00925b54",
      "READ",
      [
        "storage",
        "002c01fe",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 00924a64 ["INT_ADD", "register:40f0:8", ["const:924a64:8", "const:4:8"]]
- 00924a64 ["CALL", null, ["ram:47ad34:8"]]
+ 00925a10 ["INT_ADD", "register:40f0:8", ["const:925a10:8", "const:4:8"]]
+ 00925a10 ["CALL", null, ["ram:47b054:8"]]
- 00924c98 ["INT_ADD", "register:40f0:8", ["const:924c98:8", "const:4:8"]]
- 00924c98 ["CALL", null, ["ram:47ad34:8"]]
+ 00925c44 ["INT_ADD", "register:40f0:8", ["const:925c44:8", "const:4:8"]]
+ 00925c44 ["CALL", null, ["ram:47b054:8"]]
- 009252a8 ["INT_ADD", "register:40f0:8", ["const:9252a8:8", "const:4:8"]]
- 009252a8 ["CALL", null, ["ram:47ad34:8"]]
+ 00926254 ["INT_ADD", "register:40f0:8", ["const:926254:8", "const:4:8"]]
+ 00926254 ["CALL", null, ["ram:47b054:8"]]
~~~


<a id="compare-504d7d79d033e3dd15c25b991b25654e"></a>

### [`00925584`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00925/00925584.md) → [`00926530`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00926/00926530.md) FUN_00926530

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 2件 [`006bbcf0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006bb/006bbcf0.md) [`0092491c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00924/0092491c.md) · 呼出先 15件 [`0048ce94`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048c/0048ce94.md) [`00597efc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00597/00597efc.md) [`00851a64`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851a64.md) [`008b98b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b9/008b98b0.md) [`008bb144`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008bb/008bb144.md)
- 新版 呼出元 2件 [`006bc0a0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/006bc/006bc0a0.md) [`009258c8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00925/009258c8.md) · 呼出先 15件 [`0048d1b4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0048d/0048d1b4.md) [`0059821c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00598/0059821c.md) [`00852a10`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/00852a10.md) [`008ba85c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008ba/008ba85c.md) [`008bc0f0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008bc/008bc0f0.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies, store_value

命令の説明率　旧版 97.16% / 新版 97.16%

優先判定に残った影響 `call_argument_candidate` 1件, `store_value` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "009265e0",
      "incomplete_value": true,
      "site": "009265e0",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:984:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
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
    "ordinal": 14,
    "slot": 2
  },
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "00926714",
      "incomplete_value": false,
      "site": "00926714",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c87000:8"
          ],
          [
            "leaf",
            "const:5e8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00925768",
      "incomplete_value": false,
      "site": "00925768",
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
    "ordinal": 34,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "0092667c",
      "incomplete_value": false,
      "site": "00926684",
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
            "const:848:8"
          ]
        ]
      ]
    },
    "old": {
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
      "0092655c",
      "DATA",
      [
        "storage",
        "00393ca8",
        null,
        "byte[59]"
      ]
    ],
    [
      "009265cc",
      "READ",
      [
        "storage",
        "002b68b5",
        null,
        "string"
      ]
    ],
    [
      "0092667c",
      "PARAM",
      [
        "storage",
        "002bc76a",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "0092655c",
      "DATA",
      [
        "storage",
        "00393ca8",
        null,
        "qword"
      ]
    ],
    [
      "009265cc",
      "READ",
      [
        "storage",
        "002b6984",
        null,
        "string"
      ]
    ],
    [
      "0092667c",
      "PARAM",
      [
        "storage",
        "002bc848",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 009256d8 ["INT_ADD", "register:40f0:8", ["const:9256d8:8", "const:4:8"]]
- 009256d8 ["CALL", null, ["callee:00c59010:8"]]
+ 00926684 ["INT_ADD", "register:40f0:8", ["const:926684:8", "const:4:8"]]
+ 00926684 ["CALL", null, ["callee:00c59010:8"]]
- 009255d8 ["INT_ADD", "register:40f0:8", ["const:9255d8:8", "const:4:8"]]
- 009255d8 ["CALL", null, ["callee:00a66e50:8"]]
+ 00926584 ["INT_ADD", "register:40f0:8", ["const:926584:8", "const:4:8"]]
+ 00926584 ["CALL", null, ["callee:00a66e50:8"]]
- 00925600 ["INT_ADD", "register:40f0:8", ["const:925600:8", "const:4:8"]]
- 00925600 ["CALL", null, ["callee:0059821c:8"]]
+ 009265ac ["INT_ADD", "register:40f0:8", ["const:9265ac:8", "const:4:8"]]
+ 009265ac ["CALL", null, ["callee:0059821c:8"]]
~~~


<a id="compare-8a57498d2f9753b0d71e11fcffc1810b"></a>

### [`00926604`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00926/00926604.md) → [`009275b0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00927/009275b0.md) FUN_009275b0

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00922e1c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00922/00922e1c.md) · 呼出先 25件 [`0046e7c0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046e/0046e7c0.md) [`0046e804`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046e/0046e804.md) [`0046e9b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046e/0046e9b0.md) [`0046ef38`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046e/0046ef38.md) [`0046f0f4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046f/0046f0f4.md)
- 新版 呼出元 1件 [`00923dc8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00923/00923dc8.md) · 呼出先 25件 [`0046eae0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0046e/0046eae0.md) [`0046eb24`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0046e/0046eb24.md) [`0046ecd0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0046e/0046ecd0.md) [`0046f258`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0046f/0046f258.md) [`0046f414`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0046f/0046f414.md)

変更の種類 call, call_argument_candidate, call_target, constant, operands_and_dependencies, store_destination, store_value

命令の説明率　旧版 85.71% / 新版 85.71%

優先判定に残った影響 `call_argument_candidate` 4件, `call_target` 2件, `store_destination` 7件, `store_value` 11件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "009275ec",
      "incomplete_value": false,
      "site": "009275f8",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c87000:8"
          ],
          [
            "leaf",
            "const:5c8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00926640",
      "incomplete_value": false,
      "site": "0092664c",
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
    "ordinal": 12,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00927698",
      "incomplete_value": true,
      "site": "00927698",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:6cd:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
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
    "ordinal": 26,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "0092769c",
      "incomplete_value": true,
      "site": "0092769c",
      "value": [
        "LOAD",
        "8",
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
      "009275f8",
      "DATA",
      [
        "storage",
        "00c865f8",
        null,
        "pointer"
      ]
    ],
    [
      "00927678",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "00470e94"
      ]
    ],
    [
      "00927688",
      "READ",
      [
        "storage",
        "002b95fe",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "009275f8",
      "DATA",
      [
        "storage",
        "00c875c8",
        null,
        "pointer"
      ]
    ],
    [
      "00927678",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "004711b4"
      ]
    ],
    [
      "00927688",
      "READ",
      [
        "storage",
        "002b96cd",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 009266cc ["INT_ADD", "register:40f0:8", ["const:9266cc:8", "const:4:8"]]
- 009266cc ["CALL", null, ["ram:470e94:8"]]
+ 00927678 ["INT_ADD", "register:40f0:8", ["const:927678:8", "const:4:8"]]
+ 00927678 ["CALL", null, ["ram:4711b4:8"]]
- 00926700 ["INT_ADD", "register:40f0:8", ["const:926700:8", "const:4:8"]]
- 00926700 ["CALL", null, ["ram:470e94:8"]]
+ 009276ac ["INT_ADD", "register:40f0:8", ["const:9276ac:8", "const:4:8"]]
+ 009276ac ["CALL", null, ["ram:4711b4:8"]]
- 00926db0 ["INT_ADD", "register:40f0:8", ["const:926db0:8", "const:4:8"]]
- 00926db0 ["CALL", null, ["callee:00c58ed0:8"]]
+ 00927d5c ["INT_ADD", "register:40f0:8", ["const:927d5c:8", "const:4:8"]]
+ 00927d5c ["CALL", null, ["callee:00c58ed0:8"]]
~~~


<a id="compare-c777fc7ea6de5f101b1174e74aeefa9f"></a>

### [`00926eb4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00926/00926eb4.md) → [`00927e60`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00927/00927e60.md) FUN_00927e60

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`009270f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00927/009270f0.md) · 呼出先 6件 [`0046e8e4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046e/0046e8e4.md) [`0046f01c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046f/0046f01c.md) [`00672b88`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00672/00672b88.md) [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md)
- 新版 呼出元 1件 [`0092809c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00928/0092809c.md) · 呼出先 6件 [`0046ec04`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0046e/0046ec04.md) [`0046f33c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0046f/0046f33c.md) [`00672f38`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00672/00672f38.md) [`00c54d90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d90.md) [`00c58f20`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f20.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 98.60% / 新版 98.60%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "00927e7c",
      "incomplete_value": false,
      "site": "00927e80",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c87000:8"
          ],
          [
            "leaf",
            "const:5c8:8"
          ]
        ]
      ]
    },
    "old": {
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
      "00927e80",
      "DATA",
      [
        "storage",
        "00c865f8",
        null,
        "pointer"
      ]
    ]
  ],
  "added": [
    [
      "00927e80",
      "DATA",
      [
        "storage",
        "00c875c8",
        null,
        "pointer"
      ]
    ]
  ]
}
~~~


~~~diff
- 00926ecc ["COPY", "register:4040:8", ["const:c86000:8"]]
+ 00927e78 ["COPY", "register:4040:8", ["const:c87000:8"]]
- 00926ed0 ["COPY", "tmp:0:8", ["const:5f8:8"]]
- 00926ed0 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00926ed0 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00926ed0 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00927e7c ["COPY", "tmp:0:8", ["const:5c8:8"]]
+ 00927e7c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00927e7c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00927e7c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 00926f0c ["INT_ADD", "register:40f0:8", ["const:926f0c:8", "const:4:8"]]
- 00926f0c ["CALL", null, ["callee:00c54d90:8"]]
+ 00927eb8 ["INT_ADD", "register:40f0:8", ["const:927eb8:8", "const:4:8"]]
+ 00927eb8 ["CALL", null, ["callee:00c54d90:8"]]
~~~


<a id="compare-df1b486e6a4e2728f92933fac188b282"></a>

### [`00927118`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00927/00927118.md) → [`009280c4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00928/009280c4.md) FUN_009280c4

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
      "definition_site": "009280e4",
      "incomplete_value": false,
      "site": "009280e8",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c87000:8"
          ],
          [
            "leaf",
            "const:5e8:8"
          ]
        ]
      ]
    },
    "old": {
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
      "009280e8",
      "DATA",
      [
        "storage",
        "00c86618",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "009280e8",
      "DATA",
      [
        "storage",
        "00c875e8",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 0092712c ["INT_ADD", "register:40f0:8", ["const:92712c:8", "const:4:8"]]
- 0092712c ["CALL", null, ["callee:00c58f30:8"]]
+ 009280d8 ["INT_ADD", "register:40f0:8", ["const:9280d8:8", "const:4:8"]]
+ 009280d8 ["CALL", null, ["callee:00c58f30:8"]]
- 00927134 ["COPY", "register:4040:8", ["const:c86000:8"]]
+ 009280e0 ["COPY", "register:4040:8", ["const:c87000:8"]]
- 00927138 ["COPY", "tmp:0:8", ["const:618:8"]]
- 00927138 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00927138 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00927138 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 009280e4 ["COPY", "tmp:0:8", ["const:5e8:8"]]
+ 009280e4 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 009280e4 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 009280e4 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-e02df029b160e9ddd4ec4068d88db4ff"></a>

### [`00927150`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00927/00927150.md) → [`009280fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00928/009280fc.md) FUN_009280fc

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
      "definition_site": "00928100",
      "incomplete_value": false,
      "site": "00928104",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c87000:8"
          ],
          [
            "leaf",
            "const:5e8:8"
          ]
        ]
      ]
    },
    "old": {
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
      "00928104",
      "DATA",
      [
        "storage",
        "00c86618",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00928104",
      "DATA",
      [
        "storage",
        "00c875e8",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00927150 ["COPY", "register:4040:8", ["const:c86000:8"]]
+ 009280fc ["COPY", "register:4040:8", ["const:c87000:8"]]
- 00927154 ["COPY", "tmp:0:8", ["const:618:8"]]
- 00927154 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00927154 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00927154 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00928100 ["COPY", "tmp:0:8", ["const:5e8:8"]]
+ 00928100 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00928100 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00928100 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-0cc10cfaf22582b736aff6fb717a171a"></a>

### [`00927170`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00927/00927170.md) → [`0092811c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00928/0092811c.md) FUN_0092811c

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 5件 [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md) [`0047ce14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047ce14.md) [`00851a64`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851a64.md) [`008b91d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b9/008b91d0.md) [`009d8894`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009d8/009d8894.md)
- 新版 呼出元 0件  · 呼出先 5件 [`0047b054`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047b/0047b054.md) [`0047d134`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047d/0047d134.md) [`00852a10`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/00852a10.md) [`008ba17c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008ba/008ba17c.md) [`009d9840`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009d9/009d9840.md)

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
      "site": "0092814c",
      "value": [
        "leaf",
        "ram:47b054:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "009271a0",
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
      "0092814c",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ]
  ],
  "added": [
    [
      "0092814c",
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
- 009271a0 ["INT_ADD", "register:40f0:8", ["const:9271a0:8", "const:4:8"]]
- 009271a0 ["CALL", null, ["ram:47ad34:8"]]
+ 0092814c ["INT_ADD", "register:40f0:8", ["const:92814c:8", "const:4:8"]]
+ 0092814c ["CALL", null, ["ram:47b054:8"]]
- 009271ac ["INT_ADD", "register:40f0:8", ["const:9271ac:8", "const:4:8"]]
- 009271ac ["CALL", null, ["callee:0047d134:8"]]
+ 00928158 ["INT_ADD", "register:40f0:8", ["const:928158:8", "const:4:8"]]
+ 00928158 ["CALL", null, ["callee:0047d134:8"]]
- 009271e4 ["INT_ADD", "register:40f0:8", ["const:9271e4:8", "const:4:8"]]
- 009271e4 ["CALL", null, ["callee:009d9840:8"]]
+ 00928190 ["INT_ADD", "register:40f0:8", ["const:928190:8", "const:4:8"]]
+ 00928190 ["CALL", null, ["callee:009d9840:8"]]
~~~


<a id="compare-8c1679dc0722d5dc48f10e0f7b52e4fc"></a>

### [`00927238`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00927/00927238.md) → [`009281e4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00928/009281e4.md) _INIT_180

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 5件 [`0043aeb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043a/0043aeb0.md) [`0043b838`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b838.md) [`00c57f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f00.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)
- 新版 呼出元 0件  · 呼出先 5件 [`0043b1d0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043b1d0.md) [`0043bb58`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bb58.md) [`00c58ed0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58ed0.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies, operation_sequence, store_value

命令の説明率　旧版 87.01% / 新版 87.01%

優先判定に残った影響 `call_argument_candidate` 3件, `store_value` 3件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00928220",
      "incomplete_value": true,
      "site": "0092823c",
      "value": [
        "LOAD",
        "16",
        [
          [
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
    "ordinal": 9,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "009282c0",
      "incomplete_value": true,
      "site": "009282dc",
      "value": [
        "LOAD",
        "16",
        [
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
                "const:f50:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
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
    "ordinal": 24,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "009282e0",
      "incomplete_value": true,
      "site": "00928324",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:f87:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
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
      "00928220",
      "READ",
      [
        "storage",
        "002b7f66",
        null,
        "string"
      ]
    ],
    [
      "00928244",
      "READ",
      [
        "storage",
        "002b7f79",
        null,
        "string"
      ]
    ],
    [
      "00928264",
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
      "00928220",
      "READ",
      [
        "storage",
        "002b8035",
        null,
        "string"
      ]
    ],
    [
      "00928244",
      "READ",
      [
        "storage",
        "002b8048",
        null,
        "string"
      ]
    ],
    [
      "00928264",
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
- 0092746c ["INT_ADD", "register:40f0:8", ["const:92746c:8", "const:4:8"]]
- 0092746c ["CALL", null, ["callee:00c58ed0:8"]]
+ 00928418 ["INT_ADD", "register:40f0:8", ["const:928418:8", "const:4:8"]]
+ 00928418 ["CALL", null, ["callee:00c58ed0:8"]]
- 00927260 ["COPY", "register:4098:8", ["const:1123000:8"]]
+ 0092820c ["COPY", "register:4098:8", ["const:1124000:8"]]
- 00927264 ["COPY", "tmp:0:8", ["const:b30:8"]]
- 00927264 ["INT_CARRY", "register:105:1", ["register:4098:8", "tmp:0:8"]]
- 00927264 ["INT_SCARRY", "register:106:1", ["register:4098:8", "tmp:0:8"]]
- 00927264 ["INT_ADD", "tmp:1:8", ["register:4098:8", "tmp:0:8"]]
+ 00928210 ["COPY", "tmp:0:8", ["const:af0:8"]]
+ 00928210 ["INT_CARRY", "register:105:1", ["register:4098:8", "tmp:0:8"]]
+ 00928210 ["INT_SCARRY", "register:106:1", ["register:4098:8", "tmp:0:8"]]
+ 00928210 ["INT_ADD", "tmp:1:8", ["register:4098:8", "tmp:0:8"]]
~~~


<a id="compare-1f2b1901834ac39eb3fafaf9f4edd668"></a>

### [`009275c8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00927/009275c8.md) → [`00928574`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00928/00928574.md) _INIT_181

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
      "definition_site": "009285b0",
      "incomplete_value": true,
      "site": "009285cc",
      "value": [
        "LOAD",
        "16",
        [
          [
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
    "ordinal": 9,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "009285d4",
      "incomplete_value": true,
      "site": "009285f0",
      "value": [
        "LOAD",
        "16",
        [
          [
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
    "ordinal": 12,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "009285f4",
      "incomplete_value": true,
      "site": "00928610",
      "value": [
        "LOAD",
        "16",
        [
          [
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
      "009285b0",
      "READ",
      [
        "storage",
        "002b7f66",
        null,
        "string"
      ]
    ],
    [
      "009285d4",
      "READ",
      [
        "storage",
        "002b7f79",
        null,
        "string"
      ]
    ],
    [
      "009285f4",
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
      "009285b0",
      "READ",
      [
        "storage",
        "002b8035",
        null,
        "string"
      ]
    ],
    [
      "009285d4",
      "READ",
      [
        "storage",
        "002b8048",
        null,
        "string"
      ]
    ],
    [
      "009285f4",
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
- 00927728 ["INT_ADD", "register:40f0:8", ["const:927728:8", "const:4:8"]]
- 00927728 ["CALL", null, ["callee:0043bb58:8"]]
+ 009286d4 ["INT_ADD", "register:40f0:8", ["const:9286d4:8", "const:4:8"]]
+ 009286d4 ["CALL", null, ["callee:0043bb58:8"]]
- 009277fc ["INT_ADD", "register:40f0:8", ["const:9277fc:8", "const:4:8"]]
- 009277fc ["CALL", null, ["callee:00c58ed0:8"]]
+ 009287a8 ["INT_ADD", "register:40f0:8", ["const:9287a8:8", "const:4:8"]]
+ 009287a8 ["CALL", null, ["callee:00c58ed0:8"]]
- 009275f0 ["COPY", "register:4098:8", ["const:1123000:8"]]
+ 0092859c ["COPY", "register:4098:8", ["const:1124000:8"]]
~~~


<a id="compare-03e5e65282e32b05a66c7da274548ab5"></a>

### [`00927958`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00927/00927958.md) → [`00928904`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00928/00928904.md) _INIT_182

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 5件 [`0043aeb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043a/0043aeb0.md) [`0043b838`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b838.md) [`00c57f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f00.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)
- 新版 呼出元 0件  · 呼出先 5件 [`0043b1d0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043b1d0.md) [`0043bb58`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bb58.md) [`00c58ed0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58ed0.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies, operation_sequence, store_value

命令の説明率　旧版 85.88% / 新版 85.88%

優先判定に残った影響 `call_argument_candidate` 3件, `store_value` 6件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00928940",
      "incomplete_value": true,
      "site": "0092895c",
      "value": [
        "LOAD",
        "16",
        [
          [
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
      "definition_site": "00927994",
      "incomplete_value": true,
      "site": "009279b0",
      "value": [
        "LOAD",
        "16",
        [
          [
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
      "definition_site": "00928964",
      "incomplete_value": true,
      "site": "00928980",
      "value": [
        "LOAD",
        "16",
        [
          [
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
      "definition_site": "009279b8",
      "incomplete_value": true,
      "site": "009279d4",
      "value": [
        "LOAD",
        "16",
        [
          [
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
      "definition_site": "00928984",
      "incomplete_value": true,
      "site": "009289a0",
      "value": [
        "LOAD",
        "16",
        [
          [
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
      "definition_site": "009279d8",
      "incomplete_value": true,
      "site": "009279f4",
      "value": [
        "LOAD",
        "16",
        [
          [
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
      "00928940",
      "READ",
      [
        "storage",
        "002b7f66",
        null,
        "string"
      ]
    ],
    [
      "00928964",
      "READ",
      [
        "storage",
        "002b7f79",
        null,
        "string"
      ]
    ],
    [
      "00928984",
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
      "00928940",
      "READ",
      [
        "storage",
        "002b8035",
        null,
        "string"
      ]
    ],
    [
      "00928964",
      "READ",
      [
        "storage",
        "002b8048",
        null,
        "string"
      ]
    ],
    [
      "00928984",
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
- 00927b8c ["INT_ADD", "register:40f0:8", ["const:927b8c:8", "const:4:8"]]
- 00927b8c ["CALL", null, ["callee:00c58ed0:8"]]
+ 00928b38 ["INT_ADD", "register:40f0:8", ["const:928b38:8", "const:4:8"]]
+ 00928b38 ["CALL", null, ["callee:00c58ed0:8"]]
- 00927980 ["COPY", "register:4098:8", ["const:1123000:8"]]
+ 0092892c ["COPY", "register:4098:8", ["const:1124000:8"]]
- 00927984 ["COPY", "tmp:0:8", ["const:b68:8"]]
- 00927984 ["INT_CARRY", "register:105:1", ["register:4098:8", "tmp:0:8"]]
- 00927984 ["INT_SCARRY", "register:106:1", ["register:4098:8", "tmp:0:8"]]
- 00927984 ["INT_ADD", "tmp:1:8", ["register:4098:8", "tmp:0:8"]]
+ 00928930 ["COPY", "tmp:0:8", ["const:b28:8"]]
+ 00928930 ["INT_CARRY", "register:105:1", ["register:4098:8", "tmp:0:8"]]
+ 00928930 ["INT_SCARRY", "register:106:1", ["register:4098:8", "tmp:0:8"]]
+ 00928930 ["INT_ADD", "tmp:1:8", ["register:4098:8", "tmp:0:8"]]
~~~


<a id="compare-66925c8f5902e74a7e494697e942e908"></a>

### [`0092836c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00928/0092836c.md) → [`00929318`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00929/00929318.md) FUN_00929318

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`009281f4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00928/009281f4.md) · 呼出先 18件 [`0043bbe4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bbe4.md) [`00447f34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00447/00447f34.md) [`0048796c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00487/0048796c.md) [`0048797c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00487/0048797c.md) [`00487aa4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00487/00487aa4.md)
- 新版 呼出元 1件 [`009291a0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00929/009291a0.md) · 呼出先 18件 [`0043bf04`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bf04.md) [`00448254`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00448/00448254.md) [`00487c8c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00487/00487c8c.md) [`00487c9c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00487/00487c9c.md) [`00487dc4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00487/00487dc4.md)

変更の種類 constant, operands_and_dependencies, operation_sequence, store_destination, store_value

命令の説明率　旧版 93.73% / 新版 93.73%

優先判定に残った影響 `store_destination` 1件, `store_value` 6件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "0092936c",
      "incomplete_value": false,
      "site": "00929378",
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
      "definition_site": "009283c0",
      "incomplete_value": false,
      "site": "009283cc",
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
      "definition_site": "00929390",
      "incomplete_value": true,
      "site": "00929390",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:98f:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "009283e4",
      "incomplete_value": true,
      "site": "009283e4",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:8c0:8"
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
      "definition_site": "00929394",
      "incomplete_value": true,
      "site": "00929394",
      "value": [
        "LOAD",
        "8",
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
      "definition_site": "009283e8",
      "incomplete_value": true,
      "site": "009283e8",
      "value": [
        "LOAD",
        "8",
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
      "00929378",
      "DATA",
      [
        "storage",
        "00c64e08",
        null,
        "undefined *"
      ]
    ],
    [
      "00929380",
      "READ",
      [
        "storage",
        "002b68c0",
        null,
        null
      ]
    ],
    [
      "00929388",
      "READ",
      [
        "storage",
        "002b68c5",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "00929378",
      "DATA",
      [
        "storage",
        "00c65dd8",
        null,
        "undefined *"
      ]
    ],
    [
      "00929380",
      "READ",
      [
        "storage",
        "002b698f",
        null,
        null
      ]
    ],
    [
      "00929388",
      "READ",
      [
        "storage",
        "002b6994",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 009283b8 ["INT_ADD", "register:40f0:8", ["const:9283b8:8", "const:4:8"]]
- 009283b8 ["CALL", null, ["callee:00488180:8"]]
+ 00929364 ["INT_ADD", "register:40f0:8", ["const:929364:8", "const:4:8"]]
+ 00929364 ["CALL", null, ["callee:00488180:8"]]
- 009283bc ["COPY", "register:4040:8", ["const:c64000:8"]]
+ 00929368 ["COPY", "register:4040:8", ["const:c65000:8"]]
- 009283c0 ["COPY", "tmp:0:8", ["const:e08:8"]]
- 009283c0 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 009283c0 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 009283c0 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 0092936c ["COPY", "tmp:0:8", ["const:dd8:8"]]
+ 0092936c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 0092936c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 0092936c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-080e5052151d45514699a63847db166f"></a>

### [`00928828`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00928/00928828.md) → [`009297d4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00929/009297d4.md) FUN_009297d4

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 3件 [`009281f4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00928/009281f4.md) [`009291cc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00929/009291cc.md) [`009294ec`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00929/009294ec.md) · 呼出先 29件 [`0043bb60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bb60.md) [`00442970`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00442/00442970.md) [`00447f34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00447/00447f34.md) [`0046ca04`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046c/0046ca04.md) [`0047e64c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047e/0047e64c.md)
- 新版 呼出元 3件 [`009291a0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00929/009291a0.md) [`0092a178`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0092a/0092a178.md) [`0092a498`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0092a/0092a498.md) · 呼出先 29件 [`0043be80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043be80.md) [`00442c90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00442/00442c90.md) [`00448254`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00448/00448254.md) [`0046cd24`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0046c/0046cd24.md) [`0047e96c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047e/0047e96c.md)

変更の種類 branch_value, call_argument_candidate, constant, memory_read, memory_read_count, operands_and_dependencies, operation_sequence, store_destination, store_value

命令の説明率　旧版 93.84% / 新版 93.84%

優先判定に残った影響 `call_argument_candidate` 6件, `store_destination` 4件, `store_value` 6件

アドレスに依存する影響 `branch_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00929854",
      "incomplete_value": true,
      "site": "0092986c",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:667:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "009288a8",
      "incomplete_value": true,
      "site": "009288c0",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:627:8"
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
      "definition_site": "00929890",
      "incomplete_value": true,
      "site": "009298a0",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:423:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "009288e4",
      "incomplete_value": true,
      "site": "009288f4",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:345:8"
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
      "definition_site": "009298a4",
      "incomplete_value": true,
      "site": "009298a4",
      "value": [
        "LOAD",
        "8",
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
      "definition_site": "009288f8",
      "incomplete_value": true,
      "site": "009288f8",
      "value": [
        "LOAD",
        "8",
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
      "00929808",
      "READ",
      [
        "storage",
        "00ca4a78",
        null,
        "undefined8"
      ]
    ],
    [
      "00929814",
      "PARAM",
      [
        "storage",
        "00c65f28",
        null,
        "pointer __((offset(0x10)))"
      ]
    ],
    [
      "0092981c",
      "PARAM",
      [
        "storage",
        "00c77ad8",
        null,
        "pointer __((offset(0x10)))"
      ]
    ]
  ],
  "added": [
    [
      "00929808",
      "READ",
      [
        "storage",
        "00ca5a38",
        null,
        "undefined8"
      ]
    ],
    [
      "00929814",
      "PARAM",
      [
        "storage",
        "00c66ef8",
        null,
        "pointer __((offset(0x10)))"
      ]
    ],
    [
      "0092981c",
      "PARAM",
      [
        "storage",
        "00c78aa8",
        null,
        "pointer __((offset(0x10)))"
      ]
    ]
  ]
}
~~~


~~~diff
- 0092887c ["INT_ADD", "register:40f0:8", ["const:92887c:8", "const:4:8"]]
- 0092887c ["CALL", null, ["callee:00c596b0:8"]]
+ 00929828 ["INT_ADD", "register:40f0:8", ["const:929828:8", "const:4:8"]]
+ 00929828 ["CALL", null, ["callee:00c596b0:8"]]
- 00928a90 ["INT_ADD", "register:40f0:8", ["const:928a90:8", "const:4:8"]]
- 00928a90 ["CALL", null, ["callee:00442c90:8"]]
+ 00929a3c ["INT_ADD", "register:40f0:8", ["const:929a3c:8", "const:4:8"]]
+ 00929a3c ["CALL", null, ["callee:00442c90:8"]]
- 00928b44 ["INT_ADD", "register:40f0:8", ["const:928b44:8", "const:4:8"]]
- 00928b44 ["CALL", null, ["callee:00442c90:8"]]
+ 00929af0 ["INT_ADD", "register:40f0:8", ["const:929af0:8", "const:4:8"]]
+ 00929af0 ["CALL", null, ["callee:00442c90:8"]]
~~~


<a id="compare-0ab225efb1a1e7f54fa33aa4440bc19d"></a>

### [`009291f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00929/009291f0.md) → [`0092a19c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0092a/0092a19c.md) FUN_0092a19c

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 2件 [`00769ddc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00769/00769ddc.md) [`007738ec`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00773/007738ec.md) · 呼出先 1件 [`00442970`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00442/00442970.md)
- 新版 呼出元 2件 [`0076a1b8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0076a/0076a1b8.md) [`00773cc8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00773/00773cc8.md) · 呼出先 1件 [`00442c90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00442/00442c90.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 95.24% / 新版 95.24%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "0092a1dc",
      "incomplete_value": true,
      "site": "0092a1e0",
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
            "const:1b0:8"
          ]
        ]
      ]
    },
    "old": {
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
      "0092a1dc",
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
      "0092a1dc",
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
- 00929234 ["INT_ADD", "register:40f0:8", ["const:929234:8", "const:4:8"]]
- 00929234 ["CALL", null, ["callee:00442c90:8"]]
+ 0092a1e0 ["INT_ADD", "register:40f0:8", ["const:92a1e0:8", "const:4:8"]]
+ 0092a1e0 ["CALL", null, ["callee:00442c90:8"]]
- 00929230 ["COPY", "tmp:0:8", ["const:170:8"]]
- 00929230 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 00929230 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 00929230 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 0092a1dc ["COPY", "tmp:0:8", ["const:1b0:8"]]
+ 0092a1dc ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 0092a1dc ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 0092a1dc ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
~~~


<a id="compare-0de098f1884ccbcdb9881073b1c6f7ef"></a>

### [`0092929c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00929/0092929c.md) → [`0092a248`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0092a/0092a248.md) FUN_0092a248

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `bounded` · 参照 `changed`

- 旧版 呼出元 5件 [`00853cd0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00853/00853cd0.md) [`008546c8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00854/008546c8.md) [`00856e84`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00856/00856e84.md) [`00928828`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00928/00928828.md) [`009294ec`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00929/009294ec.md) · 呼出先 14件 [`005509f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00550/005509f0.md) [`0069ef6c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0069e/0069ef6c.md) [`006a2bd0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006a2/006a2bd0.md) [`006a2da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006a2/006a2da0.md) [`006a2da4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006a2/006a2da4.md)
- 新版 呼出元 5件 [`00854c7c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00854/00854c7c.md) [`00855674`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00855/00855674.md) [`00857e30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00857/00857e30.md) [`009297d4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00929/009297d4.md) [`0092a498`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0092a/0092a498.md) · 呼出先 14件 [`00550d10`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00550/00550d10.md) [`0069f31c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0069f/0069f31c.md) [`006a2f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/006a2/006a2f80.md) [`006a3150`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/006a3/006a3150.md) [`006a3154`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/006a3/006a3154.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 95.54% / 新版 95.54%

優先判定に残った影響 `store_value` 2件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "0092a27c",
      "incomplete_value": false,
      "site": "0092a284",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c87000:8"
          ],
          [
            "leaf",
            "const:868:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "009292d0",
      "incomplete_value": false,
      "site": "009292d8",
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
    "ordinal": 7,
    "slot": 2
  },
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "0092a38c",
      "incomplete_value": false,
      "site": "0092a394",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c87000:8"
          ],
          [
            "leaf",
            "const:8e8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "009293e0",
      "incomplete_value": false,
      "site": "009293e8",
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
      "0092a284",
      "DATA",
      [
        "storage",
        "00c86898",
        null,
        "undefined *"
      ]
    ],
    [
      "0092a358",
      "PARAM",
      [
        "storage",
        "006a2da0",
        null,
        null
      ]
    ],
    [
      "0092a394",
      "DATA",
      [
        "storage",
        "00c86918",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "0092a284",
      "DATA",
      [
        "storage",
        "00c87868",
        null,
        "undefined *"
      ]
    ],
    [
      "0092a358",
      "PARAM",
      [
        "storage",
        "006a3150",
        null,
        null
      ]
    ],
    [
      "0092a394",
      "DATA",
      [
        "storage",
        "00c878e8",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 009292cc ["COPY", "register:4040:8", ["const:c86000:8"]]
+ 0092a278 ["COPY", "register:4040:8", ["const:c87000:8"]]
- 009292d0 ["COPY", "tmp:0:8", ["const:898:8"]]
- 009292d0 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 009292d0 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 009292d0 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 0092a27c ["COPY", "tmp:0:8", ["const:868:8"]]
+ 0092a27c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 0092a27c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 0092a27c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 009292e4 ["INT_ADD", "register:40f0:8", ["const:9292e4:8", "const:4:8"]]
- 009292e4 ["CALL", null, ["callee:00c59620:8"]]
+ 0092a290 ["INT_ADD", "register:40f0:8", ["const:92a290:8", "const:4:8"]]
+ 0092a290 ["CALL", null, ["callee:00c59620:8"]]
~~~


<a id="compare-1c3c7a0ed1488b01ecd87eb145225eb2"></a>

### [`009294ec`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00929/009294ec.md) → [`0092a498`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0092a/0092a498.md) FUN_0092a498

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 2件 [`00929d04`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00929/00929d04.md) [`00929dd8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00929/00929dd8.md) · 呼出先 27件 [`00442970`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00442/00442970.md) [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md) [`0047ce14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047ce14.md) [`0048ce94`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048c/0048ce94.md) [`0048cec4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048c/0048cec4.md)
- 新版 呼出元 2件 [`0092acb0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0092a/0092acb0.md) [`0092ad84`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0092a/0092ad84.md) · 呼出先 27件 [`00442c90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00442/00442c90.md) [`0047b054`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047b/0047b054.md) [`0047d134`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047d/0047d134.md) [`0048d1b4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0048d/0048d1b4.md) [`0048d1e4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0048d/0048d1e4.md)

変更の種類 call, call_argument_candidate, call_target, constant, operands_and_dependencies, operation_sequence, store_value

命令の説明率　旧版 95.37% / 新版 95.37%

優先判定に残った影響 `call_argument_candidate` 2件, `call_target` 2件, `store_value` 4件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "0092a5bc",
      "incomplete_value": true,
      "site": "0092a5bc",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:dd7:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
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
    "ordinal": 12,
    "slot": 2
  },
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "0092a600",
      "incomplete_value": false,
      "site": "0092a600",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c87000:8"
          ],
          [
            "leaf",
            "const:768:8"
          ]
        ]
      ]
    },
    "old": {
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
    "ordinal": 14,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "0092a6b4",
      "incomplete_value": true,
      "site": "0092a6b4",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:dd7:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
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
      "0092a51c",
      "PARAM",
      [
        "storage",
        "002a0170",
        null,
        "string"
      ]
    ],
    [
      "0092a5a4",
      "READ",
      [
        "storage",
        "002a5c7f",
        null,
        "string"
      ]
    ],
    [
      "0092a600",
      "DATA",
      [
        "storage",
        "00c86798",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "0092a51c",
      "PARAM",
      [
        "storage",
        "002a01b0",
        null,
        "string"
      ]
    ],
    [
      "0092a5a4",
      "READ",
      [
        "storage",
        "002a5dd7",
        null,
        "string"
      ]
    ],
    [
      "0092a600",
      "DATA",
      [
        "storage",
        "00c87768",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00929574 ["INT_ADD", "register:40f0:8", ["const:929574:8", "const:4:8"]]
- 00929574 ["CALL", null, ["callee:00442c90:8"]]
+ 0092a520 ["INT_ADD", "register:40f0:8", ["const:92a520:8", "const:4:8"]]
+ 0092a520 ["CALL", null, ["callee:00442c90:8"]]
- 009296dc ["INT_ADD", "register:40f0:8", ["const:9296dc:8", "const:4:8"]]
- 009296dc ["CALL", null, ["callee:00442c90:8"]]
+ 0092a688 ["INT_ADD", "register:40f0:8", ["const:92a688:8", "const:4:8"]]
+ 0092a688 ["CALL", null, ["callee:00442c90:8"]]
- 00929878 ["INT_ADD", "register:40f0:8", ["const:929878:8", "const:4:8"]]
- 00929878 ["CALL", null, ["ram:47ad34:8"]]
+ 0092a824 ["INT_ADD", "register:40f0:8", ["const:92a824:8", "const:4:8"]]
+ 0092a824 ["CALL", null, ["ram:47b054:8"]]
~~~


<a id="compare-06733528737c2bffd631e5f48e447532"></a>

### [`00929cb4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00929/00929cb4.md) → [`0092ac60`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0092a/0092ac60.md) FUN_0092ac60

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
      "definition_site": "0092ac84",
      "incomplete_value": false,
      "site": "0092ac84",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c87000:8"
          ],
          [
            "leaf",
            "const:668:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00929cd8",
      "incomplete_value": false,
      "site": "00929cd8",
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
      "0092ac84",
      "DATA",
      [
        "storage",
        "00c86698",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "0092ac84",
      "DATA",
      [
        "storage",
        "00c87668",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00929cc8 ["INT_ADD", "register:40f0:8", ["const:929cc8:8", "const:4:8"]]
- 00929cc8 ["CALL", null, ["callee:00c58f30:8"]]
+ 0092ac74 ["INT_ADD", "register:40f0:8", ["const:92ac74:8", "const:4:8"]]
+ 0092ac74 ["CALL", null, ["callee:00c58f30:8"]]
- 00929cd0 ["COPY", "register:4040:8", ["const:c86000:8"]]
+ 0092ac7c ["COPY", "register:4040:8", ["const:c87000:8"]]
- 00929cd4 ["COPY", "tmp:0:8", ["const:698:8"]]
- 00929cd4 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00929cd4 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00929cd4 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 0092ac80 ["COPY", "tmp:0:8", ["const:668:8"]]
+ 0092ac80 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 0092ac80 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 0092ac80 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-da44b2b37ec741a5d64455cc7e35e3d5"></a>

### [`00929ce8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00929/00929ce8.md) → [`0092ac94`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0092a/0092ac94.md) FUN_0092ac94

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
      "definition_site": "0092aca0",
      "incomplete_value": false,
      "site": "0092aca0",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c87000:8"
          ],
          [
            "leaf",
            "const:668:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00929cf4",
      "incomplete_value": false,
      "site": "00929cf4",
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
      "0092aca0",
      "DATA",
      [
        "storage",
        "00c86698",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "0092aca0",
      "DATA",
      [
        "storage",
        "00c87668",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00929cec ["COPY", "register:4048:8", ["const:c86000:8"]]
+ 0092ac98 ["COPY", "register:4048:8", ["const:c87000:8"]]
- 00929cf0 ["COPY", "tmp:0:8", ["const:698:8"]]
- 00929cf0 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 00929cf0 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 00929cf0 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 0092ac9c ["COPY", "tmp:0:8", ["const:668:8"]]
+ 0092ac9c ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 0092ac9c ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 0092ac9c ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
~~~


<a id="compare-3e7551de0530f50bfe7d39a9576327e7"></a>

### [`00929d04`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00929/00929d04.md) → [`0092acb0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0092a/0092acb0.md) FUN_0092acb0

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 3件 [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md) [`0047ce14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047ce14.md) [`009294ec`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00929/009294ec.md)
- 新版 呼出元 0件  · 呼出先 3件 [`0047b054`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047b/0047b054.md) [`0047d134`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047d/0047d134.md) [`0092a498`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0092a/0092a498.md)

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
      "site": "0092acd0",
      "value": [
        "leaf",
        "ram:47b054:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "00929d24",
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
      "site": "0092acdc",
      "value": [
        "leaf",
        "ram:47b054:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "00929d30",
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
      "0092acd0",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ],
    [
      "0092acdc",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ]
  ],
  "added": [
    [
      "0092acd0",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047b054"
      ]
    ],
    [
      "0092acdc",
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
- 00929d24 ["INT_ADD", "register:40f0:8", ["const:929d24:8", "const:4:8"]]
- 00929d24 ["CALL", null, ["ram:47ad34:8"]]
+ 0092acd0 ["INT_ADD", "register:40f0:8", ["const:92acd0:8", "const:4:8"]]
+ 0092acd0 ["CALL", null, ["ram:47b054:8"]]
- 00929d30 ["INT_ADD", "register:40f0:8", ["const:929d30:8", "const:4:8"]]
- 00929d30 ["CALL", null, ["ram:47ad34:8"]]
+ 0092acdc ["INT_ADD", "register:40f0:8", ["const:92acdc:8", "const:4:8"]]
+ 0092acdc ["CALL", null, ["ram:47b054:8"]]
~~~


<a id="compare-80c38ba1adac449d6ae691b0bb6a2adb"></a>

### [`00929d88`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00929/00929d88.md) → [`0092ad34`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0092a/0092ad34.md) FUN_0092ad34

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
      "definition_site": "0092ad58",
      "incomplete_value": false,
      "site": "0092ad58",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c87000:8"
          ],
          [
            "leaf",
            "const:6e8:8"
          ]
        ]
      ]
    },
    "old": {
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
      "0092ad58",
      "DATA",
      [
        "storage",
        "00c86718",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "0092ad58",
      "DATA",
      [
        "storage",
        "00c876e8",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00929d9c ["INT_ADD", "register:40f0:8", ["const:929d9c:8", "const:4:8"]]
- 00929d9c ["CALL", null, ["callee:00c58f30:8"]]
+ 0092ad48 ["INT_ADD", "register:40f0:8", ["const:92ad48:8", "const:4:8"]]
+ 0092ad48 ["CALL", null, ["callee:00c58f30:8"]]
- 00929da4 ["COPY", "register:4040:8", ["const:c86000:8"]]
+ 0092ad50 ["COPY", "register:4040:8", ["const:c87000:8"]]
- 00929da8 ["COPY", "tmp:0:8", ["const:718:8"]]
- 00929da8 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00929da8 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00929da8 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 0092ad54 ["COPY", "tmp:0:8", ["const:6e8:8"]]
+ 0092ad54 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 0092ad54 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 0092ad54 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


