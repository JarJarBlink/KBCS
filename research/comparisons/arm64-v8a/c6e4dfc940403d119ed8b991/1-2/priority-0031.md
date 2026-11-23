# v16.0.2 → v16.0.3 · 最優先の変更候補 (31)

[一覧の目次](README.md)

<a id="compare-790acdb4369a5868f77ed4251e94a6ca"></a>

### [`0063125c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00631/0063125c.md) → [`0063160c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00631/0063160c.md) FUN_0063160c

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal` · `cfg_change`

- 旧版 呼出元 1件 [`00629d28`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00629/00629d28.md) · 呼出先 3件 [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md) [`008b6f70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b6/008b6f70.md) [`008b7a20`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b7/008b7a20.md)
- 新版 呼出元 1件 [`0062a0d8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0062a/0062a0d8.md) · 呼出先 3件 [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md) [`008b7f1c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008b7/008b7f1c.md) [`008b89cc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008b8/008b89cc.md)

変更の種類 branch_condition_or_target, cfg_edge_inventory, constant, control_flow, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00631264 ["INT_ADD", "register:40f0:8", ["const:631264:8", "const:4:8"]]
- 00631264 ["CALL", null, ["callee:008524fc:8"]]
+ 00631614 ["INT_ADD", "register:40f0:8", ["const:631614:8", "const:4:8"]]
+ 00631614 ["CALL", null, ["callee:008524fc:8"]]
- 00631274 ["INT_ADD", "register:40f0:8", ["const:631274:8", "const:4:8"]]
- 00631274 ["CALL", null, ["callee:008b89cc:8"]]
+ 00631624 ["INT_ADD", "register:40f0:8", ["const:631624:8", "const:4:8"]]
+ 00631624 ["CALL", null, ["callee:008b89cc:8"]]
- 00631278 ["INT_EQUAL", "tmp:0:1", ["register:4000:8", "const:0:8"]]
- 00631278 ["CBRANCH", null, ["local:b4:8", "tmp:0:1"]]
+ 00631628 ["INT_EQUAL", "tmp:0:1", ["register:4000:8", "const:0:8"]]
+ 00631628 ["CBRANCH", null, ["local:b2:8", "tmp:0:1"]]
~~~


<a id="compare-a47fbc68b32aba6caaac9b5815801f26"></a>

### [`006312a4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00631/006312a4.md) → [`00631654`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00631/00631654.md) FUN_00631654

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `equal` · `cfg_change`

- 旧版 呼出元 2件 [`00629b68`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00629/00629b68.md) [`00629d28`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00629/00629d28.md) · 呼出先 3件 [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md) [`008b6f70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b6/008b6f70.md) [`008b7a20`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b7/008b7a20.md)
- 新版 呼出元 2件 [`00629f18`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00629/00629f18.md) [`0062a0d8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0062a/0062a0d8.md) · 呼出先 3件 [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md) [`008b7f1c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008b7/008b7f1c.md) [`008b89cc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008b8/008b89cc.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, local_def_use, operands_and_dependencies, operation_sequence

命令の説明率　旧版 94.44% / 新版 94.44%

優先判定に残った影響 `call_argument_candidate` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00631680",
      "incomplete_value": true,
      "site": "00631684",
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
            "const:2f38:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "006312d0",
      "incomplete_value": true,
      "site": "006312d4",
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
            "register:4040:8"
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
      "definition_site": "0063167c",
      "incomplete_value": false,
      "site": "00631684",
      "value": [
        "leaf",
        "const:1:8"
      ]
    },
    "old": null,
    "ordinal": 3,
    "slot": 2
  }
]
~~~


~~~diff
- 006312d4 ["INT_ADD", "register:40f0:8", ["const:6312d4:8", "const:4:8"]]
- 006312d4 ["CALL", null, ["callee:008b89cc:8"]]
+ 00631684 ["INT_ADD", "register:40f0:8", ["const:631684:8", "const:4:8"]]
+ 00631684 ["CALL", null, ["callee:008b89cc:8"]]
- 006312ac ["INT_ADD", "register:40f0:8", ["const:6312ac:8", "const:4:8"]]
- 006312ac ["CALL", null, ["callee:008524fc:8"]]
+ 0063165c ["INT_ADD", "register:40f0:8", ["const:63165c:8", "const:4:8"]]
+ 0063165c ["CALL", null, ["callee:008524fc:8"]]
- 006312bc ["INT_ADD", "register:40f0:8", ["const:6312bc:8", "const:4:8"]]
- 006312bc ["CALL", null, ["callee:008b89cc:8"]]
+ 0063166c ["INT_ADD", "register:40f0:8", ["const:63166c:8", "const:4:8"]]
+ 0063166c ["CALL", null, ["callee:008b89cc:8"]]
~~~


<a id="compare-1bf7df49b85b064d0e39a88df88e0ef5"></a>

### [`006312ec`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00631/006312ec.md) → [`0063169c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00631/0063169c.md) FUN_0063169c

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `equal` · `cfg_change`

- 旧版 呼出元 3件 [`00629ba0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00629/00629ba0.md) [`00629bc8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00629/00629bc8.md) [`00629d28`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00629/00629d28.md) · 呼出先 3件 [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md) [`008b6f70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b6/008b6f70.md) [`008b7a20`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b7/008b7a20.md)
- 新版 呼出元 3件 [`00629f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00629/00629f50.md) [`00629f78`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00629/00629f78.md) [`0062a0d8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0062a/0062a0d8.md) · 呼出先 3件 [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md) [`008b7f1c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008b7/008b7f1c.md) [`008b89cc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008b8/008b89cc.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, constant, control_flow, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

優先判定に残った影響 `call_argument_candidate` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "00631300",
      "incomplete_value": true,
      "site": "00631304",
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
            "const:2f38:8"
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
      "definition_site": "006312fc",
      "incomplete_value": false,
      "site": "00631304",
      "value": [
        "leaf",
        "const:1:8"
      ]
    },
    "ordinal": 1,
    "slot": 2
  }
]
~~~


~~~diff
- 00631304 ["INT_ADD", "register:40f0:8", ["const:631304:8", "const:4:8"]]
- 00631304 ["CALL", null, ["callee:008b89cc:8"]]
+ 006316b4 ["INT_ADD", "register:40f0:8", ["const:6316b4:8", "const:4:8"]]
+ 006316b4 ["CALL", null, ["callee:008b89cc:8"]]
- 006312f4 ["INT_ADD", "register:40f0:8", ["const:6312f4:8", "const:4:8"]]
- 006312f4 ["CALL", null, ["callee:008524fc:8"]]
+ 006316a4 ["INT_ADD", "register:40f0:8", ["const:6316a4:8", "const:4:8"]]
+ 006316a4 ["CALL", null, ["callee:008524fc:8"]]
- 00631308 ["INT_EQUAL", "tmp:0:1", ["register:4000:8", "const:0:8"]]
- 00631308 ["CBRANCH", null, ["local:b2:8", "tmp:0:1"]]
+ 006316b8 ["INT_EQUAL", "tmp:0:1", ["register:4000:8", "const:0:8"]]
+ 006316b8 ["CBRANCH", null, ["local:b3:8", "tmp:0:1"]]
~~~


<a id="compare-5eaa5e0e0f56ab40d90b3b1b256dec6e"></a>

### [`00631334`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00631/00631334.md) → [`006316e4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00631/006316e4.md) FUN_006316e4

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 1件 [`00633ccc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00633/00633ccc.md) · 呼出先 45件 [`00440f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00440/00440f00.md) [`00440f9c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00440/00440f9c.md) [`00447f34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00447/00447f34.md) [`0046ca04`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046c/0046ca04.md) [`0046e7b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046e/0046e7b0.md)
- 新版 呼出元 1件 [`0063407c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00634/0063407c.md) · 呼出先 45件 [`00441220`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00441/00441220.md) [`004412bc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00441/004412bc.md) [`00448254`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00448/00448254.md) [`0046cd24`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0046c/0046cd24.md) [`0046ead0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0046e/0046ead0.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, local_def_use, operands_and_dependencies, operation_sequence, store_condition, store_value, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 74.55% / 新版 74.55%

優先判定に残った影響 `call_argument_candidate` 39件, `store_condition` 4件, `unresolved_branch_alignment` 27件, `unresolved_call_alignment` 32件, `unresolved_store_alignment` 89件

アドレスに依存する影響 `store_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00632aec",
      "incomplete_value": true,
      "site": "00632af0",
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
      "definition_site": "0063273c",
      "incomplete_value": true,
      "site": "00632740",
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
    "ordinal": 156,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "0063143c",
      "incomplete_value": true,
      "site": "00631440",
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
    "ordinal": 8,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00631838",
      "incomplete_value": true,
      "site": "00631848",
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
      "unmatched:00631334",
      "WRITE",
      [
        "storage",
        "Stack[-0x60]",
        null,
        null
      ]
    ],
    [
      "unmatched:00631338",
      "WRITE",
      [
        "storage",
        "Stack[-0x50]",
        null,
        null
      ]
    ],
    [
      "unmatched:0063133c",
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
      "006316e4",
      "WRITE",
      [
        "storage",
        "Stack[-0x60]",
        null,
        null
      ]
    ],
    [
      "006316e8",
      "WRITE",
      [
        "storage",
        "Stack[-0x50]",
        null,
        null
      ]
    ],
    [
      "006316ec",
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
- 00631440 ["INT_ADD", "register:40f0:8", ["const:631440:8", "const:4:8"]]
- 00631440 ["CALL", null, ["callee:00a39c20:8"]]
+ 006317f0 ["INT_ADD", "register:40f0:8", ["const:6317f0:8", "const:4:8"]]
+ 006317f0 ["CALL", null, ["callee:00a39c20:8"]]
- 00631498 ["INT_ADD", "register:40f0:8", ["const:631498:8", "const:4:8"]]
- 00631498 ["CALL", null, ["callee:00a38e4c:8"]]
+ 00631848 ["INT_ADD", "register:40f0:8", ["const:631848:8", "const:4:8"]]
+ 00631848 ["CALL", null, ["callee:00a38e4c:8"]]
- 00631638 ["INT_ADD", "register:40f0:8", ["const:631638:8", "const:4:8"]]
- 00631638 ["CALL", null, ["callee:0048aa9c:8"]]
+ 006319e8 ["INT_ADD", "register:40f0:8", ["const:6319e8:8", "const:4:8"]]
+ 006319e8 ["CALL", null, ["callee:0048aa9c:8"]]
~~~


<a id="compare-0f562ea0271e510ccfb070fd28c52d5b"></a>

### [`00632d54`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00632/00632d54.md) → [`00633104`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00633/00633104.md) FUN_00633104

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 2件 [`00633ccc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00633/00633ccc.md) [`00634aa4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00634/00634aa4.md) · 呼出先 15件 [`0047c9a8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047c9a8.md) [`0047edf4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047e/0047edf4.md) [`0048ce94`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048c/0048ce94.md) [`00492e48`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00492/00492e48.md) [`00498210`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00498/00498210.md)
- 新版 呼出元 2件 [`0063407c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00634/0063407c.md) [`00634e54`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00634/00634e54.md) · 呼出先 15件 [`0047ccc8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047c/0047ccc8.md) [`0047f114`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047f/0047f114.md) [`0048d1b4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0048d/0048d1b4.md) [`00493168`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00493/00493168.md) [`00498530`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00498/00498530.md)

変更の種類 branch_condition_or_target, branch_value, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 62.02% / 新版 62.02%

優先判定に残った影響 `call_argument_candidate` 12件, `unresolved_branch_alignment` 14件, `unresolved_call_alignment` 12件, `unresolved_store_alignment` 42件

アドレスに依存する影響 `branch_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "branch_value",
    "new": {
      "definition_site": "006335b4",
      "incomplete_value": true,
      "site": "006335b4",
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
      "definition_site": "00633204",
      "incomplete_value": true,
      "site": "00633204",
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
    "ordinal": 39,
    "slot": 0
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "00632ec4",
      "incomplete_value": true,
      "site": "00632ec8",
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
    "ordinal": 4,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "006332c8",
      "incomplete_value": true,
      "site": "006332cc",
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
      "unmatched:00632d58",
      "WRITE",
      [
        "storage",
        "Stack[-0x60]",
        null,
        null
      ]
    ],
    [
      "unmatched:00632d5c",
      "WRITE",
      [
        "storage",
        "Stack[-0x50]",
        null,
        null
      ]
    ],
    [
      "unmatched:00632d60",
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
      "00633108",
      "WRITE",
      [
        "storage",
        "Stack[-0x60]",
        null,
        null
      ]
    ],
    [
      "0063310c",
      "WRITE",
      [
        "storage",
        "Stack[-0x50]",
        null,
        null
      ]
    ],
    [
      "00633110",
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
- 00632ec8 ["INT_ADD", "register:40f0:8", ["const:632ec8:8", "const:4:8"]]
- 00632ec8 ["CALL", null, ["callee:0048d1b4:8"]]
+ 00633278 ["INT_ADD", "register:40f0:8", ["const:633278:8", "const:4:8"]]
+ 00633278 ["CALL", null, ["callee:0048d1b4:8"]]
- 00632f1c ["INT_ADD", "register:40f0:8", ["const:632f1c:8", "const:4:8"]]
- 00632f1c ["CALL", null, ["callee:0048d1b4:8"]]
+ 006332cc ["INT_ADD", "register:40f0:8", ["const:6332cc:8", "const:4:8"]]
+ 006332cc ["CALL", null, ["callee:0048d1b4:8"]]
- 00632f44 ["INT_ADD", "register:40f0:8", ["const:632f44:8", "const:4:8"]]
- 00632f44 ["CALL", null, ["callee:00633764:8"]]
+ 006332f4 ["INT_ADD", "register:40f0:8", ["const:6332f4:8", "const:4:8"]]
+ 006332f4 ["CALL", null, ["callee:00633764:8"]]
~~~


<a id="compare-fc9e92ccc11e922175fbd555aa2a5d27"></a>

### [`006333b4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00633/006333b4.md) → [`00633764`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00633/00633764.md) FUN_00633764

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 20件 [`00632d54`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00632/00632d54.md) [`00666360`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00666/00666360.md) [`00666c68`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00666/00666c68.md) [`0066f878`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0066f/0066f878.md) [`0067d510`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0067d/0067d510.md) · 呼出先 17件 [`0043bb60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bb60.md) [`0043bbe4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bbe4.md) [`00440fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00440/00440fb0.md) [`0047ef4c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047e/0047ef4c.md) [`0047f18c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047f/0047f18c.md)
- 新版 呼出元 20件 [`00633104`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00633/00633104.md) [`00666710`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00666/00666710.md) [`00667018`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00667/00667018.md) [`0066fc28`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0066f/0066fc28.md) [`0067d8c0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0067d/0067d8c0.md) · 呼出先 17件 [`0043be80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043be80.md) [`0043bf04`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bf04.md) [`004412d0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00441/004412d0.md) [`0047f26c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047f/0047f26c.md) [`0047f4ac`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047f/0047f4ac.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 92.06% / 新版 92.06%

優先判定に残った影響 `call_argument_candidate` 9件, `unresolved_branch_alignment` 2件, `unresolved_call_alignment` 2件, `unresolved_store_alignment` 7件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00633798",
      "incomplete_value": true,
      "site": "006337b0",
      "value": [
        "live",
        "register:4008:8"
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
      "definition_site": "0063379c",
      "incomplete_value": true,
      "site": "006337b0",
      "value": [
        "live",
        "register:4010:8"
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
      "definition_site": "00633468",
      "incomplete_value": true,
      "site": "0063346c",
      "value": [
        "live",
        "register:40a8:8"
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
      "unmatched:006333f8",
      "WRITE",
      [
        "storage",
        "Stack[-0x68]",
        null,
        null
      ]
    ],
    [
      "00633958",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00633814"
      ]
    ],
    [
      "unmatched:0063348c",
      "DATA",
      [
        "storage",
        "00c65578",
        null,
        "pointer"
      ]
    ]
  ],
  "added": [
    [
      "006337a8",
      "WRITE",
      [
        "storage",
        "Stack[-0x68]",
        null,
        null
      ]
    ],
    [
      "006337e0",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00633814"
      ]
    ],
    [
      "0063383c",
      "DATA",
      [
        "storage",
        "00c66548",
        null,
        "pointer"
      ]
    ]
  ]
}
~~~


~~~diff
- 00633400 ["INT_ADD", "register:40f0:8", ["const:633400:8", "const:4:8"]]
- 00633400 ["CALL", null, ["callee:004412d0:8"]]
+ 006337b0 ["INT_ADD", "register:40f0:8", ["const:6337b0:8", "const:4:8"]]
+ 006337b0 ["CALL", null, ["callee:004412d0:8"]]
- 0063346c ["INT_ADD", "register:40f0:8", ["const:63346c:8", "const:4:8"]]
- 0063346c ["CALL", null, ["callee:006358e0:8"]]
+ 0063381c ["INT_ADD", "register:40f0:8", ["const:63381c:8", "const:4:8"]]
+ 0063381c ["CALL", null, ["callee:006358e0:8"]]
- 00633604 ["INT_ADD", "register:40f0:8", ["const:633604:8", "const:4:8"]]
- 00633604 ["CALL", null, ["callee:0047f4ac:8"]]
+ 006339b4 ["INT_ADD", "register:40f0:8", ["const:6339b4:8", "const:4:8"]]
+ 006339b4 ["CALL", null, ["callee:0047f4ac:8"]]
~~~


<a id="compare-370bdb5b6211e443855c5a3cb33234be"></a>

### [`00633824`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00633/00633824.md) → [`00633bd4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00633/00633bd4.md) FUN_00633bd4

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 9件 [`00632d54`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00632/00632d54.md) [`0066f878`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0066f/0066f878.md) [`006b0290`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006b0/006b0290.md) [`007b0a70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007b0/007b0a70.md) [`008c4974`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008c4/008c4974.md) · 呼出先 15件 [`0043bb60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bb60.md) [`0047f290`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047f/0047f290.md) [`0047f49c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047f/0047f49c.md) [`004891a8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00489/004891a8.md) [`00498388`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00498/00498388.md)
- 新版 呼出元 9件 [`00633104`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00633/00633104.md) [`0066fc28`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0066f/0066fc28.md) [`006b0640`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/006b0/006b0640.md) [`007b19d4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007b1/007b19d4.md) [`008c5920`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008c5/008c5920.md) · 呼出先 15件 [`0043be80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043be80.md) [`0047f5b0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047f/0047f5b0.md) [`0047f7bc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047f/0047f7bc.md) [`004894c8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00489/004894c8.md) [`004986a8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00498/004986a8.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_store_alignment

命令の説明率　旧版 89.96% / 新版 89.96%

優先判定に残った影響 `call_argument_candidate` 9件, `unresolved_branch_alignment` 4件, `unresolved_store_alignment` 12件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00633d48",
      "incomplete_value": true,
      "site": "00633d4c",
      "value": [
        "live",
        "register:40d8:8"
      ]
    },
    "old": {
      "definition_site": "00633998",
      "incomplete_value": true,
      "site": "0063399c",
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
            "const:18:8"
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
      "definition_site": "00633a68",
      "incomplete_value": true,
      "site": "00633a6c",
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
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "00633a64",
      "incomplete_value": true,
      "site": "00633a6c",
      "value": [
        "LOAD",
        "8",
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
                "const:8:8"
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
      "unmatched:00633844",
      "WRITE",
      [
        "storage",
        "Stack[-0x13c]",
        null,
        null
      ]
    ],
    [
      "unmatched:00633850",
      "WRITE",
      [
        "storage",
        "Stack[-0x138]",
        null,
        null
      ]
    ],
    [
      "unmatched:00633870",
      "WRITE",
      [
        "storage",
        "Stack[-0x70]",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "00633bf4",
      "WRITE",
      [
        "storage",
        "Stack[-0x13c]",
        null,
        null
      ]
    ],
    [
      "00633c00",
      "WRITE",
      [
        "storage",
        "Stack[-0x138]",
        null,
        null
      ]
    ],
    [
      "00633c20",
      "WRITE",
      [
        "storage",
        "Stack[-0x70]",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 0063399c ["INT_ADD", "register:40f0:8", ["const:63399c:8", "const:4:8"]]
- 0063399c ["CALL", null, ["callee:004894c8:8"]]
+ 00633d4c ["INT_ADD", "register:40f0:8", ["const:633d4c:8", "const:4:8"]]
+ 00633d4c ["CALL", null, ["callee:004894c8:8"]]
- 00633a6c ["INT_ADD", "register:40f0:8", ["const:633a6c:8", "const:4:8"]]
- 00633a6c ["CALL", null, ["callee:0043be80:8"]]
+ 00633e1c ["INT_ADD", "register:40f0:8", ["const:633e1c:8", "const:4:8"]]
+ 00633e1c ["CALL", null, ["callee:0043be80:8"]]
- 00633afc ["INT_ADD", "register:40f0:8", ["const:633afc:8", "const:4:8"]]
- 00633afc ["CALL", null, ["callee:00c58f50:8"]]
+ 00633eac ["INT_ADD", "register:40f0:8", ["const:633eac:8", "const:4:8"]]
+ 00633eac ["CALL", null, ["callee:00c58f50:8"]]
~~~


<a id="compare-386d373c1abc1dc14ed230cc0679a4cf"></a>

### [`00633ccc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00633/00633ccc.md) → [`0063407c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00634/0063407c.md) FUN_0063407c

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 1件 [`00629d28`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00629/00629d28.md) · 呼出先 26件 [`00440f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00440/00440f00.md) [`0046ca04`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046c/0046ca04.md) [`00470880`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00470/00470880.md) [`005d8c08`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005d8/005d8c08.md) [`00631334`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00631/00631334.md)
- 新版 呼出元 1件 [`0062a0d8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0062a/0062a0d8.md) · 呼出先 26件 [`00441220`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00441/00441220.md) [`0046cd24`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0046c/0046cd24.md) [`00470ba0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00470/00470ba0.md) [`005d8fb8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005d8/005d8fb8.md) [`006316e4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00631/006316e4.md)

変更の種類 branch_condition_or_target, call_argument_candidate, comparison, comparison_count, constant, control_flow, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, store_condition, store_value, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 78.56% / 新版 78.56%

優先判定に残った影響 `call_argument_candidate` 16件, `store_condition` 29件, `store_value` 1件, `unresolved_branch_alignment` 26件, `unresolved_call_alignment` 11件, `unresolved_store_alignment` 23件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "00634b18",
      "incomplete_value": false,
      "site": "00634b18",
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
            "const:5c0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00634768",
      "incomplete_value": false,
      "site": "00634768",
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
            "const:5f0:8"
          ]
        ]
      ]
    },
    "ordinal": 101,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "00633d20",
      "incomplete_value": true,
      "site": "00633d28",
      "value": [
        "live",
        "register:4040:8"
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
      "definition_site": "00633d14",
      "incomplete_value": false,
      "site": "00633d28",
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
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00633cd0",
      "WRITE",
      [
        "storage",
        "Stack[-0x60]",
        null,
        null
      ]
    ],
    [
      "unmatched:00633cd4",
      "WRITE",
      [
        "storage",
        "Stack[-0x50]",
        null,
        null
      ]
    ],
    [
      "unmatched:00633cd8",
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
      "00634080",
      "WRITE",
      [
        "storage",
        "Stack[-0x60]",
        null,
        null
      ]
    ],
    [
      "00634084",
      "WRITE",
      [
        "storage",
        "Stack[-0x50]",
        null,
        null
      ]
    ],
    [
      "00634088",
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
- 00633d28 ["INT_ADD", "register:40f0:8", ["const:633d28:8", "const:4:8"]]
- 00633d28 ["CALL", null, ["callee:00c596b0:8"]]
+ 006340d8 ["INT_ADD", "register:40f0:8", ["const:6340d8:8", "const:4:8"]]
+ 006340d8 ["CALL", null, ["callee:00c596b0:8"]]
- 00633d54 ["INT_ADD", "register:40f0:8", ["const:633d54:8", "const:4:8"]]
- 00633d54 ["CALL", null, ["callee:006365b0:8"]]
+ 00634104 ["INT_ADD", "register:40f0:8", ["const:634104:8", "const:4:8"]]
+ 00634104 ["CALL", null, ["callee:006365b0:8"]]
- 00633e40 ["INT_ADD", "register:40f0:8", ["const:633e40:8", "const:4:8"]]
- 00633e40 ["CALL", null, ["callee:00634d4c:8"]]
+ 006341f0 ["INT_ADD", "register:40f0:8", ["const:6341f0:8", "const:4:8"]]
+ 006341f0 ["CALL", null, ["callee:00634d4c:8"]]
~~~


<a id="compare-c7cf837c7274b0f6395dbaf7fea3bf65"></a>

### [`0063499c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00634/0063499c.md) → [`00634d4c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00634/00634d4c.md) FUN_00634d4c

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 5件 [`00633ccc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00633/00633ccc.md) [`0066d6e0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0066d/0066d6e0.md) [`0069e934`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0069e/0069e934.md) [`0069e968`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0069e/0069e968.md) [`00b1f4c4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b1f/00b1f4c4.md) · 呼出先 4件 [`00440f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00440/00440f00.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c580d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c580d0.md)
- 新版 呼出元 5件 [`0063407c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00634/0063407c.md) [`0066da90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0066d/0066da90.md) [`0069ece4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0069e/0069ece4.md) [`0069ed18`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0069e/0069ed18.md) [`00b204b8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b20/00b204b8.md) · 呼出先 4件 [`00441220`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00441/00441220.md) [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c590a0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c590a0.md)

変更の種類 constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, operands_and_dependencies, operation_sequence, unresolved_return_alignment

命令の説明率　旧版 92.86% / 新版 92.86%

アドレスに依存する影響 `unresolved_return_alignment` 1件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00634a44",
      "DATA",
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
      "00634df4",
      "DATA",
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
- 006349ac ["COPY", "register:40e8:8", ["register:8:8"]]
- 006349e4 ["INT_ADD", "register:40f0:8", ["const:6349e4:8", "const:4:8"]]
- 006349e4 ["CALL", null, ["callee:00c58f30:8"]]
+ 00634d94 ["INT_ADD", "register:40f0:8", ["const:634d94:8", "const:4:8"]]
+ 00634d94 ["CALL", null, ["callee:00c58f30:8"]]
- 00634a04 ["INT_ADD", "register:40f0:8", ["const:634a04:8", "const:4:8"]]
- 00634a04 ["CALL", null, ["callee:00c590a0:8"]]
+ 00634db4 ["INT_ADD", "register:40f0:8", ["const:634db4:8", "const:4:8"]]
+ 00634db4 ["CALL", null, ["callee:00c590a0:8"]]
~~~


<a id="compare-199514cfb0ed9dc55c97e48e26f6b6e0"></a>

### [`00634aa4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00634/00634aa4.md) → [`00634e54`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00634/00634e54.md) FUN_00634e54

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 1件 [`00629d28`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00629/00629d28.md) · 呼出先 18件 [`0046edcc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046e/0046edcc.md) [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md) [`0047ce14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047ce14.md) [`00632d54`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00632/00632d54.md) [`00636930`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00636/00636930.md)
- 新版 呼出元 1件 [`0062a0d8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0062a/0062a0d8.md) · 呼出先 18件 [`0046f0ec`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0046f/0046f0ec.md) [`0047b054`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047b/0047b054.md) [`0047d134`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047d/0047d134.md) [`00633104`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00633/00633104.md) [`00636ce0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00636/00636ce0.md)

変更の種類 branch_condition_or_target, call, call_count, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, store_condition, store_value, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 91.71% / 新版 91.71%

優先判定に残った影響 `store_condition` 1件, `store_value` 1件, `unresolved_branch_alignment` 7件, `unresolved_call_alignment` 4件, `unresolved_store_alignment` 3件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "00634f70",
      "incomplete_value": false,
      "site": "00634f78",
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
            "const:6c0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00634bc0",
      "incomplete_value": false,
      "site": "00634bc8",
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
            "const:6f0:8"
          ]
        ]
      ]
    },
    "ordinal": 9,
    "slot": 2
  },
  {
    "confidence": "limited",
    "guard": [
      [
        "FALL_THROUGH",
        "00634fbc"
      ],
      [
        "FALL_THROUGH",
        "0063536c"
      ]
    ],
    "kind": "store_condition",
    "new": {
      "definition_site": "00635368",
      "incomplete_value": true,
      "site": "00635380",
      "value": [
        "INT_EQUAL",
        "1",
        [
          [
            "INT_ADD",
            "4",
            [
              [
                "live",
                "register:4048:4"
              ],
              [
                "live",
                "register:4040:4"
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
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "00634fd0",
      "value": [
        "live",
        "register:101:1"
      ]
    },
    "ordinal": 33,
    "slot": 0
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00634aa8",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "unmatched:00634ad8",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00634ea0"
      ]
    ],
    [
      "unmatched:00634adc",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ]
  ],
  "added": [
    [
      "00634e58",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "00634e88",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00634ea0"
      ]
    ],
    [
      "00634e8c",
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
- 00634f78 ["CBRANCH", null, ["local:b62:8", "register:101:1"]]
- 00634aa4 ["INT_SUB", "register:8:8", ["register:8:8", "const:a0:8"]]
- 00634aa8 ["COPY", "tmp:0:8", ["register:40e8:8"]]
- 00634aa8 ["COPY", "tmp:1:8", ["register:40f0:8"]]
- 00634aa8 ["INT_ADD", "tmp:2:8", ["register:8:8", "const:70:8"]]
- 00634aa8 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
~~~


<a id="compare-e51a205c3300c62bef3bd59b14b196f7"></a>

### [`00635144`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00635/00635144.md) → [`006354f4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00635/006354f4.md) FUN_006354f4

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`0062a27c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0062a/0062a27c.md) · 呼出先 12件 [`004678a0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00467/004678a0.md) [`00467b6c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00467/00467b6c.md) [`00468844`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00468/00468844.md) [`00468fc8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00468/00468fc8.md) [`00469c44`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00469/00469c44.md)
- 新版 呼出元 1件 [`0062a62c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0062a/0062a62c.md) · 呼出先 12件 [`00467bc0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00467/00467bc0.md) [`00467e8c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00467/00467e8c.md) [`00468b64`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00468/00468b64.md) [`004692e8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00469/004692e8.md) [`00469f64`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00469/00469f64.md)

変更の種類 branch_condition_or_target, call, call_argument_candidate, call_count, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_call_alignment

命令の説明率　旧版 88.80% / 新版 88.80%

優先判定に残った影響 `call_argument_candidate` 19件, `unresolved_branch_alignment` 4件, `unresolved_call_alignment` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "00635160",
      "incomplete_value": false,
      "site": "00635174",
      "value": [
        "leaf",
        "const:ff:8"
      ]
    },
    "ordinal": 1,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "00635164",
      "incomplete_value": false,
      "site": "00635174",
      "value": [
        "leaf",
        "const:ff:8"
      ]
    },
    "ordinal": 1,
    "slot": 3
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "00635168",
      "incomplete_value": false,
      "site": "00635174",
      "value": [
        "leaf",
        "const:ff:8"
      ]
    },
    "ordinal": 1,
    "slot": 4
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:0063519c",
      "DATA",
      [
        "storage",
        "00333f88",
        null,
        "fde_table_entry"
      ]
    ],
    [
      "006355c0",
      "UNCONDITIONAL_JUMP",
      [
        "local_branch",
        "unmatched:00635248"
      ]
    ],
    [
      "unmatched:00635244",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "0063580c"
      ]
    ]
  ],
  "added": [
    [
      "0063554c",
      "DATA",
      [
        "storage",
        "00333f88",
        null,
        "fde_table_entry"
      ]
    ],
    [
      "006355c0",
      "UNCONDITIONAL_JUMP",
      [
        "local_branch",
        "006355f8"
      ]
    ],
    [
      "006355f4",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "0063580c"
      ]
    ]
  ]
}
~~~


~~~diff
- 00635174 ["INT_ADD", "register:40f0:8", ["const:635174:8", "const:4:8"]]
- 00635174 ["CALL", null, ["callee:00467e8c:8"]]
+ 00635524 ["INT_ADD", "register:40f0:8", ["const:635524:8", "const:4:8"]]
+ 00635524 ["CALL", null, ["callee:00467e8c:8"]]
- 0063518c ["INT_ADD", "register:40f0:8", ["const:63518c:8", "const:4:8"]]
- 0063518c ["CALL", null, ["callee:00468b64:8"]]
+ 0063553c ["INT_ADD", "register:40f0:8", ["const:63553c:8", "const:4:8"]]
+ 0063553c ["CALL", null, ["callee:00468b64:8"]]
- 006351d4 ["INT_ADD", "register:40f0:8", ["const:6351d4:8", "const:4:8"]]
- 006351d4 ["CALL", null, ["callee:00468b64:8"]]
+ 00635584 ["INT_ADD", "register:40f0:8", ["const:635584:8", "const:4:8"]]
+ 00635584 ["CALL", null, ["callee:00468b64:8"]]
~~~


<a id="compare-6106b624d40f4ce19d0c3866602651e1"></a>

### [`00635530`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00635/00635530.md) → [`006358e0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00635/006358e0.md) FUN_006358e0

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `bounded` · 参照 `changed`

- 旧版 呼出元 3件 [`006333b4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00633/006333b4.md) [`00633824`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00633/00633824.md) [`008536f8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00853/008536f8.md) · 呼出先 8件 [`00497b24`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00497/00497b24.md) [`00497cbc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00497/00497cbc.md) [`00497e34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00497/00497e34.md) [`006356f8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00635/006356f8.md) [`006356fc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00635/006356fc.md)
- 新版 呼出元 3件 [`00633764`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00633/00633764.md) [`00633bd4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00633/00633bd4.md) [`008546a4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00854/008546a4.md) · 呼出先 8件 [`00497e44`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00497/00497e44.md) [`00497fdc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00497/00497fdc.md) [`00498154`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00498/00498154.md) [`00635aa8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00635/00635aa8.md) [`00635aac`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00635/00635aac.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 96.15% / 新版 96.15%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "00635940",
      "incomplete_value": false,
      "site": "00635948",
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
            "const:418:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00635590",
      "incomplete_value": false,
      "site": "00635598",
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
            "const:448:8"
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
      "00635948",
      "DATA",
      [
        "storage",
        "00c73448",
        null,
        "undefined *"
      ]
    ],
    [
      "00635980",
      "READ",
      [
        "storage",
        "00c73468",
        null,
        "pointer"
      ]
    ],
    [
      "00635980",
      "READ",
      [
        "storage",
        "00c73470",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00635948",
      "DATA",
      [
        "storage",
        "00c74418",
        null,
        "undefined *"
      ]
    ],
    [
      "00635980",
      "READ",
      [
        "storage",
        "00c74438",
        null,
        "pointer"
      ]
    ],
    [
      "00635980",
      "READ",
      [
        "storage",
        "00c74440",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00635560 ["INT_ADD", "register:40f0:8", ["const:635560:8", "const:4:8"]]
- 00635560 ["CALL", null, ["callee:00c58f30:8"]]
+ 00635910 ["INT_ADD", "register:40f0:8", ["const:635910:8", "const:4:8"]]
+ 00635910 ["CALL", null, ["callee:00c58f30:8"]]
- 00635568 ["INT_ADD", "register:40f0:8", ["const:635568:8", "const:4:8"]]
- 00635568 ["CALL", null, ["callee:00497e44:8"]]
+ 00635918 ["INT_ADD", "register:40f0:8", ["const:635918:8", "const:4:8"]]
+ 00635918 ["CALL", null, ["callee:00497e44:8"]]
- 0063557c ["INT_ADD", "register:40f0:8", ["const:63557c:8", "const:4:8"]]
- 0063557c ["CALL", null, ["callee:00497fdc:8"]]
+ 0063592c ["INT_ADD", "register:40f0:8", ["const:63592c:8", "const:4:8"]]
+ 0063592c ["CALL", null, ["callee:00497fdc:8"]]
~~~


<a id="compare-5b98fec1055fcfe92e2986291c483abf"></a>

### [`006356c4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00635/006356c4.md) → [`00635a74`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00635/00635a74.md) FUN_00635a74

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
      "definition_site": "00635a88",
      "incomplete_value": false,
      "site": "00635a8c",
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
            "const:418:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "006356d8",
      "incomplete_value": false,
      "site": "006356dc",
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
            "const:448:8"
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
      "00635a8c",
      "DATA",
      [
        "storage",
        "00c73448",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00635a8c",
      "DATA",
      [
        "storage",
        "00c74418",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 006356d0 ["INT_ADD", "register:40f0:8", ["const:6356d0:8", "const:4:8"]]
- 006356d0 ["CALL", null, ["callee:00c58f30:8"]]
+ 00635a80 ["INT_ADD", "register:40f0:8", ["const:635a80:8", "const:4:8"]]
+ 00635a80 ["CALL", null, ["callee:00c58f30:8"]]
- 006356d4 ["COPY", "register:4040:8", ["const:c73000:8"]]
+ 00635a84 ["COPY", "register:4040:8", ["const:c74000:8"]]
- 006356d8 ["COPY", "tmp:0:8", ["const:448:8"]]
- 006356d8 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 006356d8 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 006356d8 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00635a88 ["COPY", "tmp:0:8", ["const:418:8"]]
+ 00635a88 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00635a88 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00635a88 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-226eb2475802a8e0f7fc5f87fbdacfc3"></a>

### [`006356e8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00635/006356e8.md) → [`00635a98`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00635/00635a98.md) FUN_00635a98

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
      "definition_site": "00635a9c",
      "incomplete_value": false,
      "site": "00635aa0",
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
            "const:418:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "006356ec",
      "incomplete_value": false,
      "site": "006356f0",
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
            "const:448:8"
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
      "00635aa0",
      "DATA",
      [
        "storage",
        "00c73448",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00635aa0",
      "DATA",
      [
        "storage",
        "00c74418",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 006356e8 ["COPY", "register:4040:8", ["const:c73000:8"]]
+ 00635a98 ["COPY", "register:4040:8", ["const:c74000:8"]]
- 006356ec ["COPY", "tmp:0:8", ["const:448:8"]]
- 006356ec ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 006356ec ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 006356ec ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00635a9c ["COPY", "tmp:0:8", ["const:418:8"]]
+ 00635a9c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00635a9c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00635a9c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-7de65325f88fccf6702e3f63abbca142"></a>

### [`0063572c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00635/0063572c.md) → [`00635adc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00635/00635adc.md) FUN_00635adc

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c58f20`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f20.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 92.59% / 新版 92.59%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "00635af4",
      "incomplete_value": false,
      "site": "00635af8",
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
            "const:4a8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00635744",
      "incomplete_value": false,
      "site": "00635748",
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
            "const:4d8:8"
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
      "00635af8",
      "DATA",
      [
        "storage",
        "00c734d8",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00635af8",
      "DATA",
      [
        "storage",
        "00c744a8",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00635740 ["COPY", "register:4048:8", ["const:c73000:8"]]
+ 00635af0 ["COPY", "register:4048:8", ["const:c74000:8"]]
- 00635744 ["COPY", "tmp:0:8", ["const:4d8:8"]]
- 00635744 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 00635744 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 00635744 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 00635af4 ["COPY", "tmp:0:8", ["const:4a8:8"]]
+ 00635af4 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 00635af4 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 00635af4 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
- 00635770 ["INT_ADD", "register:40f0:8", ["const:635770:8", "const:4:8"]]
- 00635770 ["CALL", null, ["callee:00c58f50:8"]]
+ 00635b20 ["INT_ADD", "register:40f0:8", ["const:635b20:8", "const:4:8"]]
+ 00635b20 ["CALL", null, ["callee:00c58f50:8"]]
~~~


<a id="compare-a07d4302046206994e52169a3f629ab3"></a>

### [`00635798`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00635/00635798.md) → [`00635b48`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00635/00635b48.md) FUN_00635b48

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c58f20`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f20.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 92.59% / 新版 92.59%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "00635b60",
      "incomplete_value": false,
      "site": "00635b64",
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
            "const:4a8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "006357b0",
      "incomplete_value": false,
      "site": "006357b4",
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
            "const:4d8:8"
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
      "00635b64",
      "DATA",
      [
        "storage",
        "00c734d8",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00635b64",
      "DATA",
      [
        "storage",
        "00c744a8",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 006357ac ["COPY", "register:4048:8", ["const:c73000:8"]]
+ 00635b5c ["COPY", "register:4048:8", ["const:c74000:8"]]
- 006357b0 ["COPY", "tmp:0:8", ["const:4d8:8"]]
- 006357b0 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 006357b0 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 006357b0 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 00635b60 ["COPY", "tmp:0:8", ["const:4a8:8"]]
+ 00635b60 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 00635b60 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 00635b60 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
- 006357cc ["INT_ADD", "register:40f0:8", ["const:6357cc:8", "const:4:8"]]
- 006357cc ["CALL", null, ["callee:00c58f20:8"]]
+ 00635b7c ["INT_ADD", "register:40f0:8", ["const:635b7c:8", "const:4:8"]]
+ 00635b7c ["CALL", null, ["callee:00c58f20:8"]]
~~~


<a id="compare-8342b0ad8df1ac996970da3833385c4c"></a>

### [`00635804`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00635/00635804.md) → [`00635bb4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00635/00635bb4.md) FUN_00635bb4

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 2件 [`00635a40`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00635/00635a40.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00635df0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00635/00635df0.md) [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 87.50% / 新版 87.50%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "00635bd8",
      "incomplete_value": false,
      "site": "00635bd8",
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
            "const:4a8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00635828",
      "incomplete_value": false,
      "site": "00635828",
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
            "const:4d8:8"
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
      "00635bd8",
      "DATA",
      [
        "storage",
        "00c734d8",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00635bd8",
      "DATA",
      [
        "storage",
        "00c744a8",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00635818 ["INT_ADD", "register:40f0:8", ["const:635818:8", "const:4:8"]]
- 00635818 ["CALL", null, ["callee:00c58f30:8"]]
+ 00635bc8 ["INT_ADD", "register:40f0:8", ["const:635bc8:8", "const:4:8"]]
+ 00635bc8 ["CALL", null, ["callee:00c58f30:8"]]
- 00635820 ["COPY", "register:4040:8", ["const:c73000:8"]]
+ 00635bd0 ["COPY", "register:4040:8", ["const:c74000:8"]]
- 00635824 ["COPY", "tmp:0:8", ["const:4d8:8"]]
- 00635824 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00635824 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00635824 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00635bd4 ["COPY", "tmp:0:8", ["const:4a8:8"]]
+ 00635bd4 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00635bd4 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00635bd4 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-5d1f6bf29386842593925f96d42d7bed"></a>

### [`00635858`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00635/00635858.md) → [`00635c08`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00635/00635c08.md) FUN_00635c08

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 1件 [`00635a40`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00635/00635a40.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00635df0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00635/00635df0.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 66.67% / 新版 66.67%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "00635c14",
      "incomplete_value": false,
      "site": "00635c14",
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
            "const:4a8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00635864",
      "incomplete_value": false,
      "site": "00635864",
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
            "const:4d8:8"
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
      "00635c14",
      "DATA",
      [
        "storage",
        "00c734d8",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00635c14",
      "DATA",
      [
        "storage",
        "00c744a8",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00635858 ["COPY", "register:4040:8", ["const:c73000:8"]]
+ 00635c08 ["COPY", "register:4040:8", ["const:c74000:8"]]
- 0063585c ["COPY", "tmp:0:8", ["const:4d8:8"]]
- 0063585c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 0063585c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 0063585c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00635c0c ["COPY", "tmp:0:8", ["const:4a8:8"]]
+ 00635c0c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00635c0c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00635c0c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-770d4d6a2e60e12a1577e002932f37c2"></a>

### [`00635b20`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00635/00635b20.md) → [`00635ed0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00635/00635ed0.md) FUN_00635ed0

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 1件 [`00635930`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00635/00635930.md) · 呼出先 7件 [`00489204`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00489/00489204.md) [`00498724`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00498/00498724.md) [`00c53d70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53d70.md) [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md)
- 新版 呼出元 1件 [`00635ce0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00635/00635ce0.md) · 呼出先 7件 [`00489524`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00489/00489524.md) [`00498a44`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00498/00498a44.md) [`00c54d60`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d60.md) [`00c54d90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d90.md) [`00c58f20`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f20.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment

命令の説明率　旧版 85.29% / 新版 85.29%

優先判定に残った影響 `call_argument_candidate` 2件, `unresolved_branch_alignment` 3件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "00635b8c",
      "incomplete_value": false,
      "site": "00635b94",
      "value": [
        "leaf",
        "const:1:8"
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
      "definition_site": "00635b88",
      "incomplete_value": true,
      "site": "00635b94",
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
      "unmatched:00635bb8",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00635f84"
      ]
    ],
    [
      "unmatched:00635be8",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00635fb4"
      ]
    ],
    [
      "unmatched:00635c10",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00636010"
      ]
    ]
  ],
  "added": [
    [
      "00635f68",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00635f84"
      ]
    ],
    [
      "00635f98",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00635fb4"
      ]
    ],
    [
      "00635fc0",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00636010"
      ]
    ]
  ]
}
~~~


~~~diff
- 00635b94 ["INT_ADD", "register:40f0:8", ["const:635b94:8", "const:4:8"]]
- 00635b94 ["CALL", null, ["callee:00c54d60:8"]]
+ 00635f44 ["INT_ADD", "register:40f0:8", ["const:635f44:8", "const:4:8"]]
+ 00635f44 ["CALL", null, ["callee:00c54d60:8"]]
- 00635b50 ["INT_EQUAL", "tmp:0:1", ["register:4000:8", "const:0:8"]]
- 00635b50 ["CBRANCH", null, ["local:b6:8", "tmp:0:1"]]
+ 00635f00 ["INT_EQUAL", "tmp:0:1", ["register:4000:8", "const:0:8"]]
+ 00635f00 ["CBRANCH", null, ["local:b8:8", "tmp:0:1"]]
- 00635b58 ["INT_ADD", "register:40f0:8", ["const:635b58:8", "const:4:8"]]
- 00635b58 ["CALL", null, ["callee:00c59590:8"]]
+ 00635f08 ["INT_ADD", "register:40f0:8", ["const:635f08:8", "const:4:8"]]
+ 00635f08 ["CALL", null, ["callee:00c59590:8"]]
~~~


<a id="compare-88f0515672fe93071fedd2adfd609de0"></a>

### [`00635c64`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00635/00635c64.md) → [`00636014`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00636/00636014.md) FUN_00636014

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c58f20`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f20.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 branch_condition_or_target, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, operands_and_dependencies, operation_sequence, unresolved_branch_alignment

命令の説明率　旧版 95.83% / 新版 95.83%

優先判定に残った影響 `unresolved_branch_alignment` 1件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00635cb4",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "0063603c"
      ]
    ]
  ],
  "added": [
    [
      "00636064",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "0063603c"
      ]
    ]
  ]
}
~~~


~~~diff
- 00635c78 ["INT_RIGHT", "tmp:0:4", ["register:4040:4", "const:0:4"]]
- 00635c78 ["INT_AND", "tmp:1:4", ["tmp:0:4", "const:1:4"]]
- 00635c78 ["INT_EQUAL", "tmp:2:1", ["tmp:1:4", "const:0:4"]]
- 00635c78 ["INT_EQUAL", "tmp:3:1", ["tmp:2:1", "const:0:1"]]
+ 00636028 ["INT_RIGHT", "tmp:0:4", ["register:4040:4", "const:0:4"]]
+ 00636028 ["INT_AND", "tmp:1:4", ["tmp:0:4", "const:1:4"]]
+ 00636028 ["INT_EQUAL", "tmp:2:1", ["tmp:1:4", "const:0:4"]]
+ 00636028 ["INT_EQUAL", "tmp:3:1", ["tmp:2:1", "const:0:1"]]
- 00635c80 ["INT_RIGHT", "tmp:0:4", ["register:4040:4", "const:0:4"]]
- 00635c80 ["INT_AND", "tmp:1:4", ["tmp:0:4", "const:1:4"]]
- 00635c80 ["INT_EQUAL", "tmp:2:1", ["tmp:1:4", "const:0:4"]]
- 00635c80 ["INT_EQUAL", "tmp:3:1", ["tmp:2:1", "const:0:1"]]
+ 00636030 ["INT_RIGHT", "tmp:0:4", ["register:4040:4", "const:0:4"]]
+ 00636030 ["INT_AND", "tmp:1:4", ["tmp:0:4", "const:1:4"]]
+ 00636030 ["INT_EQUAL", "tmp:2:1", ["tmp:1:4", "const:0:4"]]
+ 00636030 ["INT_EQUAL", "tmp:3:1", ["tmp:2:1", "const:0:1"]]
- 00635c9c ["INT_ADD", "register:40f0:8", ["const:635c9c:8", "const:4:8"]]
- 00635c9c ["CALL", null, ["callee:00c58f50:8"]]
+ 0063604c ["INT_ADD", "register:40f0:8", ["const:63604c:8", "const:4:8"]]
+ 0063604c ["CALL", null, ["callee:00c58f50:8"]]
~~~


<a id="compare-5027d37458f751597591d2a93ff3199e"></a>

### [`00635cc4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00635/00635cc4.md) → [`00636074`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00636/00636074.md) FUN_00636074

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c58f20`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f20.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 branch_condition_or_target, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_store_alignment

命令の説明率　旧版 92.59% / 新版 92.59%

優先判定に残った影響 `unresolved_store_alignment` 1件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00635ce0",
      "DATA",
      [
        "storage",
        "00c73558",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00636090",
      "DATA",
      [
        "storage",
        "00c74528",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00635cd8 ["COPY", "register:4048:8", ["const:c73000:8"]]
+ 00636088 ["COPY", "register:4048:8", ["const:c74000:8"]]
- 00635cdc ["COPY", "tmp:0:8", ["const:558:8"]]
- 00635cdc ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 00635cdc ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 00635cdc ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
- 00635ce0 ["COPY", "tmp:0:8", ["register:4000:8"]]
- 00635ce0 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4048:8"]]
~~~


<a id="compare-7bc98342c5e5de9b88d81938d54444bf"></a>

### [`00635d30`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00635/00635d30.md) → [`006360e0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00636/006360e0.md) FUN_006360e0

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c58f20`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f20.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_store_alignment

命令の説明率　旧版 92.59% / 新版 92.59%

優先判定に残った影響 `call_argument_candidate` 1件, `unresolved_store_alignment` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "00635d88",
      "incomplete_value": true,
      "site": "00635d8c",
      "value": [
        "LOAD",
        "8",
        [
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
                "const:28:8"
              ]
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
      "unmatched:00635d4c",
      "DATA",
      [
        "storage",
        "00c73558",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "006360fc",
      "DATA",
      [
        "storage",
        "00c74528",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00635d8c ["INT_ADD", "register:40f0:8", ["const:635d8c:8", "const:4:8"]]
- 00635d8c ["CALL", null, ["callee:00c58f50:8"]]
+ 0063613c ["INT_ADD", "register:40f0:8", ["const:63613c:8", "const:4:8"]]
+ 0063613c ["CALL", null, ["callee:00c58f50:8"]]
- 00635d44 ["COPY", "register:4048:8", ["const:c73000:8"]]
+ 006360f4 ["COPY", "register:4048:8", ["const:c74000:8"]]
- 00635d48 ["COPY", "tmp:0:8", ["const:558:8"]]
- 00635d48 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 00635d48 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 00635d48 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
~~~


<a id="compare-d240e3ec761eca805bd2b00e5dfd4867"></a>

### [`00635d9c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00635/00635d9c.md) → [`0063614c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00636/0063614c.md) FUN_0063614c

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 2件 [`00635fd8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00635/00635fd8.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00636388`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00636/00636388.md) [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md)

変更の種類 cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_return_alignment, unresolved_store_alignment

命令の説明率　旧版 81.25% / 新版 81.25%

優先判定に残った影響 `unresolved_return_alignment` 1件, `unresolved_store_alignment` 1件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00635dc0",
      "DATA",
      [
        "storage",
        "00c73558",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00636170",
      "DATA",
      [
        "storage",
        "00c74528",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00635db0 ["INT_ADD", "register:40f0:8", ["const:635db0:8", "const:4:8"]]
- 00635db0 ["CALL", null, ["callee:00c58f30:8"]]
+ 00636160 ["INT_ADD", "register:40f0:8", ["const:636160:8", "const:4:8"]]
+ 00636160 ["CALL", null, ["callee:00c58f30:8"]]
- 00635db8 ["COPY", "register:4040:8", ["const:c73000:8"]]
+ 00636168 ["COPY", "register:4040:8", ["const:c74000:8"]]
- 00635dbc ["COPY", "tmp:0:8", ["const:558:8"]]
- 00635dbc ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00635dbc ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00635dbc ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-cd32bdb6d788b44b0cf0cf9080708e99"></a>

### [`00635df0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00635/00635df0.md) → [`006361a0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00636/006361a0.md) FUN_006361a0

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 1件 [`00635fd8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00635/00635fd8.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00636388`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00636/00636388.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 66.67% / 新版 66.67%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "006361ac",
      "incomplete_value": false,
      "site": "006361ac",
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
            "const:528:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00635dfc",
      "incomplete_value": false,
      "site": "00635dfc",
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
            "const:558:8"
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
      "006361ac",
      "DATA",
      [
        "storage",
        "00c73558",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "006361ac",
      "DATA",
      [
        "storage",
        "00c74528",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00635df0 ["COPY", "register:4040:8", ["const:c73000:8"]]
+ 006361a0 ["COPY", "register:4040:8", ["const:c74000:8"]]
- 00635df4 ["COPY", "tmp:0:8", ["const:558:8"]]
- 00635df4 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00635df4 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00635df4 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 006361a4 ["COPY", "tmp:0:8", ["const:528:8"]]
+ 006361a4 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 006361a4 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 006361a4 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-8fec99751d49c98d7d4f09ac2543128e"></a>

### [`00635e08`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00635/00635e08.md) → [`006361b8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00636/006361b8.md) FUN_006361b8

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c58f20`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f20.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, operands_and_dependencies, operation_sequence, unresolved_branch_alignment

命令の説明率　旧版 95.83% / 新版 95.83%

優先判定に残った影響 `call_argument_candidate` 1件, `unresolved_branch_alignment` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "006361fc",
      "incomplete_value": true,
      "site": "00636200",
      "value": [
        "LOAD",
        "8",
        [
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
                "const:28:8"
              ]
            ]
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
      "unmatched:00635e2c",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "0063620c"
      ]
    ]
  ],
  "added": [
    [
      "006361dc",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "0063620c"
      ]
    ]
  ]
}
~~~


~~~diff
- 00635e50 ["INT_ADD", "register:40f0:8", ["const:635e50:8", "const:4:8"]]
- 00635e50 ["CALL", null, ["callee:00c58f50:8"]]
+ 00636200 ["INT_ADD", "register:40f0:8", ["const:636200:8", "const:4:8"]]
+ 00636200 ["CALL", null, ["callee:00c58f50:8"]]
- 00635e2c ["INT_EQUAL", "tmp:0:1", ["register:4000:8", "const:0:8"]]
- 00635e2c ["CBRANCH", null, ["local:b8:8", "tmp:0:1"]]
- 00635e40 ["INT_ADD", "register:40f0:8", ["const:635e40:8", "const:4:8"]]
- 00635e40 ["CALL", null, ["callee:00c58f50:8"]]
+ 006361f0 ["INT_ADD", "register:40f0:8", ["const:6361f0:8", "const:4:8"]]
+ 006361f0 ["CALL", null, ["callee:00c58f50:8"]]
~~~


<a id="compare-731823723c5a88476e932905bc94f1c7"></a>

### [`00635e68`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00635/00635e68.md) → [`00636218`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00636/00636218.md) FUN_00636218

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal` · `cfg_change`

- 旧版 呼出元 1件 [`00633824`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00633/00633824.md) · 呼出先 2件 [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 1件 [`00633bd4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00633/00633bd4.md) · 呼出先 2件 [`00c58f20`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f20.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 cfg_edge_inventory, constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00635e90 ["INT_ADD", "register:40f0:8", ["const:635e90:8", "const:4:8"]]
- 00635e90 ["CALL", null, ["callee:00c58f20:8"]]
+ 00636240 ["INT_ADD", "register:40f0:8", ["const:636240:8", "const:4:8"]]
+ 00636240 ["CALL", null, ["callee:00c58f20:8"]]
- 00635ea8 ["INT_ADD", "register:40f0:8", ["const:635ea8:8", "const:4:8"]]
- 00635ea8 ["CALL", null, ["callee:00c58f50:8"]]
+ 00636258 ["INT_ADD", "register:40f0:8", ["const:636258:8", "const:4:8"]]
+ 00636258 ["CALL", null, ["callee:00c58f50:8"]]
- 00635eb8 ["INT_ADD", "register:40f0:8", ["const:635eb8:8", "const:4:8"]]
- 00635eb8 ["CALL", null, ["callee:00c58f50:8"]]
+ 00636268 ["INT_ADD", "register:40f0:8", ["const:636268:8", "const:4:8"]]
+ 00636268 ["CALL", null, ["callee:00c58f50:8"]]
~~~


<a id="compare-af4b52831cec10834733106ee66333b1"></a>

### [`00635ef8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00635/00635ef8.md) → [`006362a8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00636/006362a8.md) FUN_006362a8

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `equal` · `cfg_change`

- 旧版 呼出元 1件 [`00633824`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00633/00633824.md) · 呼出先 1件 [`0043bb60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bb60.md)
- 新版 呼出元 1件 [`00633bd4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00633/00633bd4.md) · 呼出先 1件 [`0043be80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043be80.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, constant, control_flow, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_store_alignment

命令の説明率　旧版 94.74% / 新版 94.74%

優先判定に残った影響 `call_argument_candidate` 3件, `unresolved_store_alignment` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "00635f70",
      "incomplete_value": true,
      "site": "00635f74",
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
            "const:28:8"
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
      "definition_site": "00635f6c",
      "incomplete_value": true,
      "site": "00635f74",
      "value": [
        "LOAD",
        "8",
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
                "const:8:8"
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
    "new": null,
    "old": {
      "definition_site": "00635f6c",
      "incomplete_value": true,
      "site": "00635f74",
      "value": [
        "LOAD",
        "8",
        [
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
                "const:30:8"
              ]
            ]
          ]
        ]
      ]
    },
    "ordinal": 1,
    "slot": 3
  }
]
~~~


~~~diff
- 00635f74 ["INT_ADD", "register:40f0:8", ["const:635f74:8", "const:4:8"]]
- 00635f74 ["CALL", null, ["callee:0043be80:8"]]
+ 00636324 ["INT_ADD", "register:40f0:8", ["const:636324:8", "const:4:8"]]
+ 00636324 ["CALL", null, ["callee:0043be80:8"]]
- 00635f1c ["COPY", "tmp:0:8", ["register:40a8:8"]]
- 00635f1c ["INT_ADD", "register:40a8:8", ["register:40a8:8", "const:10:8"]]
- 00635f1c ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:5000:16"]]
- 00635f20 ["INT_ADD", "register:4040:8", ["register:4040:8", "const:10:8"]]
- 00635f20 ["LOAD", "tmp:0:1", ["const:1b1:8", "register:4040:8"]]
- 00635f20 ["INT_ZEXT", "register:4048:8", ["tmp:0:1"]]
~~~


<a id="compare-50c11cf4134fe852f4f2a104ae2d88d3"></a>

### [`00635fd8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00635/00635fd8.md) → [`00636388`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00636/00636388.md) FUN_00636388

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `equal` · `cfg_change`

- 旧版 呼出元 2件 [`00635d9c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00635/00635d9c.md) [`00635df0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00635/00635df0.md) · 呼出先 2件 [`0043bb60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bb60.md) [`00c53d70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53d70.md)
- 新版 呼出元 2件 [`0063614c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00636/0063614c.md) [`006361a0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00636/006361a0.md) · 呼出先 2件 [`0043be80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043be80.md) [`00c54d60`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d60.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, constant, control_flow, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

優先判定に残った影響 `call_argument_candidate` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "006363ac",
      "incomplete_value": false,
      "site": "006363b0",
      "value": [
        "leaf",
        "const:1:8"
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
      "definition_site": "006363a8",
      "incomplete_value": true,
      "site": "006363b0",
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
            "const:10:8"
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
- 00636000 ["INT_ADD", "register:40f0:8", ["const:636000:8", "const:4:8"]]
- 00636000 ["CALL", null, ["callee:00c54d60:8"]]
+ 006363b0 ["INT_ADD", "register:40f0:8", ["const:6363b0:8", "const:4:8"]]
+ 006363b0 ["CALL", null, ["callee:00c54d60:8"]]
- 00635ff4 ["INT_EQUAL", "tmp:0:1", ["register:4040:8", "const:0:8"]]
- 00635ff4 ["CBRANCH", null, ["local:b3:8", "tmp:0:1"]]
+ 006363a4 ["INT_EQUAL", "tmp:0:1", ["register:4040:8", "const:0:8"]]
+ 006363a4 ["CBRANCH", null, ["local:b2:8", "tmp:0:1"]]
- 0063600c ["INT_RIGHT", "tmp:0:4", ["register:4048:4", "const:0:4"]]
- 0063600c ["INT_AND", "tmp:1:4", ["tmp:0:4", "const:1:4"]]
- 0063600c ["INT_EQUAL", "tmp:2:1", ["tmp:1:4", "const:0:4"]]
- 0063600c ["INT_EQUAL", "tmp:3:1", ["tmp:2:1", "const:0:1"]]
+ 006363bc ["INT_RIGHT", "tmp:0:4", ["register:4048:4", "const:0:4"]]
+ 006363bc ["INT_AND", "tmp:1:4", ["tmp:0:4", "const:1:4"]]
+ 006363bc ["INT_EQUAL", "tmp:2:1", ["tmp:1:4", "const:0:4"]]
+ 006363bc ["INT_EQUAL", "tmp:3:1", ["tmp:2:1", "const:0:1"]]
~~~


<a id="compare-75b83b4d2b207f30981a9661077c9a69"></a>

### [`006360b8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00636/006360b8.md) → [`00636468`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00636/00636468.md) FUN_00636468

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 1件 [`00635ec8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00635/00635ec8.md) · 呼出先 7件 [`0048a874`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048a/0048a874.md) [`00498724`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00498/00498724.md) [`00c53d70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53d70.md) [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md)
- 新版 呼出元 1件 [`00636278`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00636/00636278.md) · 呼出先 7件 [`0048ab94`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0048a/0048ab94.md) [`00498a44`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00498/00498a44.md) [`00c54d60`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d60.md) [`00c54d90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d90.md) [`00c58f20`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f20.md)

変更の種類 branch_condition_or_target, call, call_argument_candidate, call_count, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 75.36% / 新版 75.36%

優先判定に残った影響 `call_argument_candidate` 7件, `unresolved_branch_alignment` 2件, `unresolved_call_alignment` 1件, `unresolved_store_alignment` 5件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "006364c4",
      "incomplete_value": true,
      "site": "006364d0",
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
            "const:10:8"
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
      "definition_site": "006364c8",
      "incomplete_value": true,
      "site": "006364d0",
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
    "ordinal": 1,
    "slot": 3
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "006364b8",
      "incomplete_value": true,
      "site": "006364d0",
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
    "ordinal": 1,
    "slot": 4
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:006360c8",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "unmatched:006360dc",
      "WRITE",
      [
        "storage",
        "Stack[-0x48]",
        null,
        null
      ]
    ],
    [
      "unmatched:006360e4",
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
      "00636478",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "0063648c",
      "WRITE",
      [
        "storage",
        "Stack[-0x48]",
        null,
        null
      ]
    ],
    [
      "00636494",
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
- 00636120 ["INT_ADD", "register:40f0:8", ["const:636120:8", "const:4:8"]]
- 00636120 ["CALL", null, ["callee:0048ab94:8"]]
+ 006364d0 ["INT_ADD", "register:40f0:8", ["const:6364d0:8", "const:4:8"]]
+ 006364d0 ["CALL", null, ["callee:0048ab94:8"]]
- 00636180 ["INT_ADD", "register:40f0:8", ["const:636180:8", "const:4:8"]]
- 00636180 ["CALL", null, ["callee:00c54d90:8"]]
+ 00636530 ["INT_ADD", "register:40f0:8", ["const:636530:8", "const:4:8"]]
+ 00636530 ["CALL", null, ["callee:00c54d90:8"]]
- 006360c8 ["COPY", "tmp:0:8", ["register:40a0:8"]]
- 006360c8 ["COPY", "tmp:1:8", ["register:4098:8"]]
- 006360c8 ["INT_ADD", "tmp:2:8", ["register:8:8", "const:60:8"]]
- 006360c8 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
~~~


<a id="compare-76ce8cc8fdacd16e1e00bb99601f2988"></a>

### [`00636200`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00636/00636200.md) → [`006365b0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00636/006365b0.md) FUN_006365b0

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`00633ccc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00633/00633ccc.md) · 呼出先 1件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 1件 [`0063407c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00634/0063407c.md) · 呼出先 1件 [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 branch_condition_or_target, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, operands_and_dependencies, operation_sequence, store_condition, unresolved_branch_alignment, unresolved_return_alignment

命令の説明率　旧版 84.09% / 新版 84.09%

優先判定に残った影響 `store_condition` 1件, `unresolved_branch_alignment` 3件, `unresolved_return_alignment` 1件

~~~json
[
  {
    "confidence": "limited",
    "guard": [
      [
        "FALL_THROUGH",
        "00636244"
      ],
      [
        "FALL_THROUGH",
        "006365f4"
      ]
    ],
    "kind": "store_condition",
    "new": {
      "definition_site": "006365f4",
      "incomplete_value": true,
      "site": "006365f8",
      "value": [
        "INT_EQUAL",
        "1",
        [
          [
            "live",
            "register:4000:8"
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00636244",
      "incomplete_value": true,
      "site": "00636248",
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
      "unmatched:0063621c",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00636638"
      ]
    ],
    [
      "unmatched:0063622c",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "006365f0"
      ]
    ],
    [
      "unmatched:00636244",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00636600"
      ]
    ]
  ],
  "added": [
    [
      "006365cc",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00636638"
      ]
    ],
    [
      "006365dc",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "006365f0"
      ]
    ],
    [
      "006365f4",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00636600"
      ]
    ]
  ]
}
~~~


~~~diff
- 0063621c ["INT_EQUAL", "tmp:0:1", ["register:40a8:8", "const:0:8"]]
- 0063621c ["CBRANCH", null, ["local:b12:8", "tmp:0:1"]]
- 00636220 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:8:8"]]
- 00636220 ["LOAD", "register:40b0:8", ["const:1b1:8", "tmp:0:8"]]
- 00636224 ["COPY", "register:4000:8", ["register:40a8:8"]]
~~~


<a id="compare-8b2a115a932b6456108ba8b805318d4f"></a>

### [`006362b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00636/006362b0.md) → [`00636660`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00636/00636660.md) FUN_00636660

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`00633ccc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00633/00633ccc.md) · 呼出先 6件 [`00440f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00440/00440f00.md) [`0063650c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00636/0063650c.md) [`00636520`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00636/00636520.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 1件 [`0063407c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00634/0063407c.md) · 呼出先 6件 [`00441220`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00441/00441220.md) [`006368bc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00636/006368bc.md) [`006368d0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00636/006368d0.md) [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, store_condition, unresolved_branch_alignment, unresolved_store_alignment

命令の説明率　旧版 66.36% / 新版 66.36%

優先判定に残った影響 `call_argument_candidate` 1件, `store_condition` 1件, `unresolved_branch_alignment` 1件, `unresolved_store_alignment` 20件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00636788",
      "incomplete_value": true,
      "site": "0063678c",
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
            "INT_SUB",
            "8",
            [
              "LOAD",
              "LOAD"
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "006363d8",
      "incomplete_value": true,
      "site": "006363dc",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:4048:8"
          ],
          [
            "INT_SUB",
            "8",
            [
              "LOAD",
              "LOAD"
            ]
          ]
        ]
      ]
    },
    "ordinal": 1,
    "slot": 4
  },
  {
    "confidence": "limited",
    "guard": [
      [
        "FALL_THROUGH",
        "00636300"
      ],
      [
        "FALL_THROUGH",
        "006366b0"
      ]
    ],
    "kind": "store_condition",
    "new": {
      "definition_site": "006366b0",
      "incomplete_value": true,
      "site": "006366c0",
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
      "definition_site": "00636300",
      "incomplete_value": true,
      "site": "00636310",
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
      "unmatched:006362b4",
      "WRITE",
      [
        "storage",
        "Stack[-0x40]",
        null,
        null
      ]
    ],
    [
      "unmatched:006362b8",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "unmatched:006362bc",
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
      "00636664",
      "WRITE",
      [
        "storage",
        "Stack[-0x40]",
        null,
        null
      ]
    ],
    [
      "00636668",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "0063666c",
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
- 006363dc ["INT_ADD", "register:40f0:8", ["const:6363dc:8", "const:4:8"]]
- 006363dc ["CALL", null, ["callee:006368d0:8"]]
+ 0063678c ["INT_ADD", "register:40f0:8", ["const:63678c:8", "const:4:8"]]
+ 0063678c ["CALL", null, ["callee:006368d0:8"]]
- 006362b0 ["INT_SUB", "register:8:8", ["register:8:8", "const:80:8"]]
- 006362b4 ["COPY", "tmp:0:8", ["register:40e8:8"]]
- 006362b4 ["COPY", "tmp:1:8", ["register:40f0:8"]]
- 006362b4 ["INT_ADD", "tmp:2:8", ["register:8:8", "const:40:8"]]
- 006362b4 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
~~~


<a id="compare-e971c47f5ad9a5484fe5746789e92811"></a>

### [`0063650c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00636/0063650c.md) → [`006368bc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00636/006368bc.md) FUN_006368bc

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`006362b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00636/006362b0.md) · 呼出先 1件 [`0043b7b8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b7b8.md)
- 新版 呼出元 1件 [`00636660`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00636/00636660.md) · 呼出先 1件 [`0043bad8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bad8.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 80.00% / 新版 80.00%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "006368c8",
      "incomplete_value": false,
      "site": "006368cc",
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
      "definition_site": "00636518",
      "incomplete_value": false,
      "site": "0063651c",
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
      "006368c8",
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
      "006368c8",
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
- 0063651c ["INT_ADD", "register:40f0:8", ["const:63651c:8", "const:4:8"]]
- 0063651c ["CALL", null, ["callee:0043bad8:8"]]
+ 006368cc ["INT_ADD", "register:40f0:8", ["const:6368cc:8", "const:4:8"]]
+ 006368cc ["CALL", null, ["callee:0043bad8:8"]]
- 00636514 ["COPY", "register:4000:8", ["const:2b7000:8"]]
+ 006368c4 ["COPY", "register:4000:8", ["const:2b8000:8"]]
- 00636518 ["COPY", "tmp:0:8", ["const:f8c:8"]]
- 00636518 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 00636518 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 00636518 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 006368c8 ["COPY", "tmp:0:8", ["const:5b:8"]]
+ 006368c8 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 006368c8 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 006368c8 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
~~~


<a id="compare-4072a6efe77647a4a7c8f5f6086011cc"></a>

### [`00636520`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00636/00636520.md) → [`006368d0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00636/006368d0.md) FUN_006368d0

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`006362b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00636/006362b0.md) · 呼出先 1件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 1件 [`00636660`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00636/00636660.md) · 呼出先 1件 [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 branch_condition_or_target, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, store_condition, unresolved_branch_alignment, unresolved_store_alignment

命令の説明率　旧版 94.74% / 新版 94.74%

優先判定に残った影響 `store_condition` 1件, `unresolved_branch_alignment` 1件, `unresolved_store_alignment` 3件

~~~json
[
  {
    "confidence": "limited",
    "guard": [
      [
        "FALL_THROUGH",
        "006365e8"
      ],
      [
        "FALL_THROUGH",
        "00636998"
      ]
    ],
    "kind": "store_condition",
    "new": {
      "definition_site": "00636998",
      "incomplete_value": true,
      "site": "0063699c",
      "value": [
        "INT_EQUAL",
        "1",
        [
          [
            "live",
            "register:4000:8"
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "006365e8",
      "incomplete_value": true,
      "site": "006365ec",
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
    "ordinal": 31,
    "slot": 0
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:006365e8",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00636968"
      ]
    ]
  ],
  "added": [
    [
      "00636998",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00636968"
      ]
    ]
  ]
}
~~~


~~~diff
- 00636524 ["CBRANCH", null, ["local:b14:8", "register:101:1"]]
+ 006368d4 ["CBRANCH", null, ["local:b19:8", "register:101:1"]]
- 00636548 ["COPY", "tmp:0:8", ["const:0:8"]]
- 00636548 ["COPY", "tmp:1:8", ["register:4048:8"]]
- 00636548 ["COPY", "tmp:2:8", ["tmp:0:8"]]
- 00636548 ["COPY", "tmp:3:8", ["register:4018:8"]]
- 00636578 ["INT_ADD", "tmp:0:8", ["register:4018:8", "const:30:8"]]
- 00636578 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4048:8"]]
~~~


<a id="compare-a1045c92ba87f6fdf53a10b6f3d2bd8e"></a>

### [`00636604`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00636/00636604.md) → [`006369b4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00636/006369b4.md) FUN_006369b4

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 4件 [`00633ccc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00633/00633ccc.md) [`0066d6e0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0066d/0066d6e0.md) [`007b0a70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007b0/007b0a70.md) [`007cb638`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007cb/007cb638.md) · 呼出先 7件 [`00440f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00440/00440f00.md) [`0063678c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00636/0063678c.md) [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)
- 新版 呼出元 4件 [`0063407c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00634/0063407c.md) [`0066da90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0066d/0066da90.md) [`007b19d4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007b1/007b19d4.md) [`007cc59c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007cc/007cc59c.md) · 呼出先 7件 [`00441220`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00441/00441220.md) [`00636b3c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00636/00636b3c.md) [`00c54d90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d90.md) [`00c58f20`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f20.md) [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_store_alignment

命令の説明率　旧版 82.65% / 新版 82.65%

優先判定に残った影響 `call_argument_candidate` 3件, `unresolved_branch_alignment` 6件, `unresolved_store_alignment` 9件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00636a24",
      "incomplete_value": true,
      "site": "00636a2c",
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
            "const:4:8"
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
      "definition_site": "00636a74",
      "incomplete_value": true,
      "site": "00636a7c",
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
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "00636730",
      "incomplete_value": true,
      "site": "00636734",
      "value": [
        "live",
        "register:40b0:8"
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
      "unmatched:00636604",
      "WRITE",
      [
        "storage",
        "Stack[-0x50]",
        null,
        null
      ]
    ],
    [
      "unmatched:00636608",
      "WRITE",
      [
        "storage",
        "Stack[-0x40]",
        null,
        null
      ]
    ],
    [
      "unmatched:0063660c",
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
      "006369b4",
      "WRITE",
      [
        "storage",
        "Stack[-0x50]",
        null,
        null
      ]
    ],
    [
      "006369b8",
      "WRITE",
      [
        "storage",
        "Stack[-0x40]",
        null,
        null
      ]
    ],
    [
      "006369bc",
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
- 0063667c ["INT_ADD", "register:40f0:8", ["const:63667c:8", "const:4:8"]]
- 0063667c ["CALL", null, ["callee:00c58f30:8"]]
+ 00636a2c ["INT_ADD", "register:40f0:8", ["const:636a2c:8", "const:4:8"]]
+ 00636a2c ["CALL", null, ["callee:00c58f30:8"]]
- 006366cc ["INT_ADD", "register:40f0:8", ["const:6366cc:8", "const:4:8"]]
- 006366cc ["CALL", null, ["callee:00c59130:8"]]
+ 00636a7c ["INT_ADD", "register:40f0:8", ["const:636a7c:8", "const:4:8"]]
+ 00636a7c ["CALL", null, ["callee:00c59130:8"]]
- 00636734 ["INT_ADD", "register:40f0:8", ["const:636734:8", "const:4:8"]]
- 00636734 ["CALL", null, ["callee:00c58f20:8"]]
+ 00636ae4 ["INT_ADD", "register:40f0:8", ["const:636ae4:8", "const:4:8"]]
+ 00636ae4 ["CALL", null, ["callee:00c58f20:8"]]
~~~


<a id="compare-740ce84e1d61943bcf81ea1fc416ba5e"></a>

### [`0063678c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00636/0063678c.md) → [`00636b3c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00636/00636b3c.md) FUN_00636b3c

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 6件 [`00636604`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00636/00636604.md) [`00652da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00652/00652da0.md) [`007412d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00741/007412d0.md) [`00792f0c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00792/00792f0c.md) [`0079422c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00794/0079422c.md) · 呼出先 1件 [`0043b7b8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b7b8.md)
- 新版 呼出元 6件 [`006369b4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00636/006369b4.md) [`00653150`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00653/00653150.md) [`00741680`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00741/00741680.md) [`007932e8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00793/007932e8.md) [`00794608`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00794/00794608.md) · 呼出先 1件 [`0043bad8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bad8.md)

変更の種類 call, call_count, cfg_edge_inventory, comparison, comparison_count, constant, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 0.00% / 新版 0.00%

優先判定に残った影響 `unresolved_call_alignment` 1件, `unresolved_store_alignment` 2件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:0063678c",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "unmatched:00636798",
      "PARAM",
      [
        "storage",
        "002b7f8c",
        null,
        "string"
      ]
    ],
    [
      "unmatched:0063679c",
      "UNCONDITIONAL_CALL",
      [
        "mapped_function",
        "0043bad8"
      ]
    ]
  ],
  "added": [
    [
      "00636b3c",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "00636b48",
      "PARAM",
      [
        "storage",
        "002b805b",
        null,
        "string"
      ]
    ],
    [
      "00636b4c",
      "UNCONDITIONAL_CALL",
      [
        "mapped_function",
        "0043bad8"
      ]
    ]
  ]
}
~~~


~~~diff
- 0063678c ["COPY", "tmp:0:8", ["register:40e8:8"]]
- 0063678c ["COPY", "tmp:1:8", ["register:40f0:8"]]
- 0063678c ["INT_ADD", "register:8:8", ["register:8:8", "const:fffffffffffffff0:8"]]
- 0063678c ["STORE", null, ["const:1b1:8", "register:8:8", "tmp:0:8"]]
- 00636790 ["COPY", "register:40e8:8", ["register:8:8"]]
- 00636794 ["COPY", "register:4000:8", ["const:2b7000:8"]]
~~~


<a id="compare-914db8fe40537542fbce208fa851193e"></a>

### [`006367a4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00636/006367a4.md) → [`00636b54`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00636/00636b54.md) FUN_00636b54

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
      "unmatched:006367bc",
      "DATA",
      [
        "storage",
        "00c735f0",
        null,
        "undefined *"
      ]
    ],
    [
      "unmatched:006367c0",
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
      "00636b6c",
      "DATA",
      [
        "storage",
        "00c745c0",
        null,
        "undefined *"
      ]
    ],
    [
      "00636b70",
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
- 006367b0 ["INT_ADD", "register:40f0:8", ["const:6367b0:8", "const:4:8"]]
- 006367b0 ["CALL", null, ["callee:00c58f30:8"]]
+ 00636b60 ["INT_ADD", "register:40f0:8", ["const:636b60:8", "const:4:8"]]
+ 00636b60 ["CALL", null, ["callee:00c58f30:8"]]
- 006367b4 ["COPY", "register:4040:8", ["const:c73000:8"]]
+ 00636b64 ["COPY", "register:4040:8", ["const:c74000:8"]]
- 006367b8 ["COPY", "tmp:0:8", ["const:5f0:8"]]
- 006367b8 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 006367b8 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 006367b8 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-b32a7bb27825e9e9ecb3d4084daee3d0"></a>

### [`006367c8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00636/006367c8.md) → [`00636b78`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00636/00636b78.md) FUN_00636b78

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
      "unmatched:006367d0",
      "DATA",
      [
        "storage",
        "00c735f0",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00636b80",
      "DATA",
      [
        "storage",
        "00c745c0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 006367c8 ["COPY", "register:4040:8", ["const:c73000:8"]]
- 006367cc ["COPY", "tmp:0:8", ["const:5f0:8"]]
- 006367cc ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 006367cc ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 006367cc ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 006367d0 ["COPY", "tmp:0:8", ["register:4008:8"]]
- 006367d0 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4040:8"]]
~~~


<a id="compare-8de18a5686c24c5c616f80d14dd09798"></a>

### [`006367e0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00636/006367e0.md) → [`00636b90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00636/00636b90.md) FUN_00636b90

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 8件 [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md) [`0047ce14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047ce14.md) [`00629b68`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00629/00629b68.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md) [`008b6efc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b6/008b6efc.md)
- 新版 呼出元 0件  · 呼出先 8件 [`0047b054`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047b/0047b054.md) [`0047d134`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047d/0047d134.md) [`00629f18`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00629/00629f18.md) [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md) [`008b7ea8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008b7/008b7ea8.md)

変更の種類 branch_condition_or_target, call, call_argument_candidate, call_target, cfg_edge_inventory, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment

命令の説明率　旧版 93.33% / 新版 93.33%

優先判定に残った影響 `call_argument_candidate` 1件, `call_target` 2件, `unresolved_branch_alignment` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00636ba4",
      "incomplete_value": true,
      "site": "00636ba8",
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
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "call_target",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "00636c30",
      "value": [
        "leaf",
        "ram:47b054:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "00636880",
      "value": [
        "leaf",
        "ram:47ad34:8"
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
      "site": "00636c3c",
      "value": [
        "leaf",
        "ram:47b054:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "0063688c",
      "value": [
        "leaf",
        "ram:47ad34:8"
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
      "unmatched:0063681c",
      "DATA",
      [
        "storage",
        "00333f9c",
        null,
        "fde_table_entry"
      ]
    ],
    [
      "unmatched:00636870",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00636c54"
      ]
    ],
    [
      "00636c30",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ]
  ],
  "added": [
    [
      "00636bcc",
      "DATA",
      [
        "storage",
        "00333f9c",
        null,
        "fde_table_entry"
      ]
    ],
    [
      "00636c20",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00636c54"
      ]
    ],
    [
      "00636c30",
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
- 006367f8 ["INT_ADD", "register:40f0:8", ["const:6367f8:8", "const:4:8"]]
- 006367f8 ["CALL", null, ["callee:008b7ea8:8"]]
+ 00636ba8 ["INT_ADD", "register:40f0:8", ["const:636ba8:8", "const:4:8"]]
+ 00636ba8 ["CALL", null, ["callee:008b7ea8:8"]]
- 00636880 ["INT_ADD", "register:40f0:8", ["const:636880:8", "const:4:8"]]
- 00636880 ["CALL", null, ["ram:47ad34:8"]]
+ 00636c30 ["INT_ADD", "register:40f0:8", ["const:636c30:8", "const:4:8"]]
+ 00636c30 ["CALL", null, ["ram:47b054:8"]]
- 0063688c ["INT_ADD", "register:40f0:8", ["const:63688c:8", "const:4:8"]]
- 0063688c ["CALL", null, ["ram:47ad34:8"]]
+ 00636c3c ["INT_ADD", "register:40f0:8", ["const:636c3c:8", "const:4:8"]]
+ 00636c3c ["CALL", null, ["ram:47b054:8"]]
~~~


<a id="compare-b3abc5f70131be7da0fc779b96d0e3d5"></a>

### [`006368fc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00636/006368fc.md) → [`00636cac`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00636/00636cac.md) FUN_00636cac

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
      "unmatched:00636914",
      "DATA",
      [
        "storage",
        "00c73670",
        null,
        "undefined *"
      ]
    ],
    [
      "unmatched:00636918",
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
      "00636cc4",
      "DATA",
      [
        "storage",
        "00c74640",
        null,
        "undefined *"
      ]
    ],
    [
      "00636cc8",
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
- 00636908 ["INT_ADD", "register:40f0:8", ["const:636908:8", "const:4:8"]]
- 00636908 ["CALL", null, ["callee:00c58f30:8"]]
+ 00636cb8 ["INT_ADD", "register:40f0:8", ["const:636cb8:8", "const:4:8"]]
+ 00636cb8 ["CALL", null, ["callee:00c58f30:8"]]
- 0063690c ["COPY", "register:4040:8", ["const:c73000:8"]]
+ 00636cbc ["COPY", "register:4040:8", ["const:c74000:8"]]
- 00636910 ["COPY", "tmp:0:8", ["const:670:8"]]
- 00636910 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00636910 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00636910 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-d9f03d4bb4b2d13cbf19486b72eed3eb"></a>

### [`00636920`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00636/00636920.md) → [`00636cd0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00636/00636cd0.md) FUN_00636cd0

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
      "definition_site": "00636cd4",
      "incomplete_value": false,
      "site": "00636cd8",
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
            "const:640:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00636924",
      "incomplete_value": false,
      "site": "00636928",
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
            "const:670:8"
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
      "00636cd8",
      "DATA",
      [
        "storage",
        "00c73670",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00636cd8",
      "DATA",
      [
        "storage",
        "00c74640",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00636920 ["COPY", "register:4040:8", ["const:c73000:8"]]
+ 00636cd0 ["COPY", "register:4040:8", ["const:c74000:8"]]
- 00636924 ["COPY", "tmp:0:8", ["const:670:8"]]
- 00636924 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00636924 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00636924 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00636cd4 ["COPY", "tmp:0:8", ["const:640:8"]]
+ 00636cd4 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00636cd4 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00636cd4 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-448098f4c86ea65527839f429a8178ac"></a>

### [`00636938`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00636/00636938.md) → [`00636ce8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00636/00636ce8.md) FUN_00636ce8

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 3件 [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md) [`0047ce14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047ce14.md) [`008b91d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b9/008b91d0.md)
- 新版 呼出元 0件  · 呼出先 3件 [`0047b054`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047b/0047b054.md) [`0047d134`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047d/0047d134.md) [`008ba17c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008ba/008ba17c.md)

変更の種類 branch_condition_or_target, call, call_count, cfg_edge_inventory, constant, control_flow, operands_and_dependencies, operation_sequence, unresolved_call_alignment

命令の説明率　旧版 94.44% / 新版 94.44%

優先判定に残った影響 `unresolved_call_alignment` 1件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:0063695c",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ]
  ],
  "added": [
    [
      "00636d0c",
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
- 00636940 ["BOOL_NEGATE", "tmp:0:1", ["register:101:1"]]
- 00636940 ["CBRANCH", null, ["local:b3:8", "tmp:0:1"]]
+ 00636cf0 ["BOOL_NEGATE", "tmp:0:1", ["register:101:1"]]
+ 00636cf0 ["CBRANCH", null, ["local:b5:8", "tmp:0:1"]]
- 00636948 ["INT_NOTEQUAL", "tmp:0:1", ["register:4040:4", "const:0:4"]]
- 00636948 ["CBRANCH", null, ["local:b3:8", "tmp:0:1"]]
+ 00636cf8 ["INT_NOTEQUAL", "tmp:0:1", ["register:4040:4", "const:0:4"]]
+ 00636cf8 ["CBRANCH", null, ["local:b5:8", "tmp:0:1"]]
- 0063695c ["INT_ADD", "register:40f0:8", ["const:63695c:8", "const:4:8"]]
- 0063695c ["CALL", null, ["ram:47ad34:8"]]
~~~


<a id="compare-9c7636bb68a3618c42f18f6b7af48428"></a>

### [`006369ac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00636/006369ac.md) → [`00636d5c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00636/00636d5c.md) FUN_00636d5c

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md)

変更の種類 cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_return_alignment, unresolved_store_alignment

命令の説明率　旧版 55.56% / 新版 55.56%

優先判定に残った影響 `unresolved_return_alignment` 1件, `unresolved_store_alignment` 1件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:006369c4",
      "DATA",
      [
        "storage",
        "00c736f0",
        null,
        "undefined *"
      ]
    ],
    [
      "unmatched:006369c8",
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
      "00636d74",
      "DATA",
      [
        "storage",
        "00c746c0",
        null,
        "undefined *"
      ]
    ],
    [
      "00636d78",
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
- 006369b8 ["INT_ADD", "register:40f0:8", ["const:6369b8:8", "const:4:8"]]
- 006369b8 ["CALL", null, ["callee:00c58f30:8"]]
+ 00636d68 ["INT_ADD", "register:40f0:8", ["const:636d68:8", "const:4:8"]]
+ 00636d68 ["CALL", null, ["callee:00c58f30:8"]]
- 006369bc ["COPY", "register:4040:8", ["const:c73000:8"]]
+ 00636d6c ["COPY", "register:4040:8", ["const:c74000:8"]]
- 006369c0 ["COPY", "tmp:0:8", ["const:6f0:8"]]
- 006369c0 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 006369c0 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 006369c0 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-3a19342edfc14a86affbf669224159f9"></a>

### [`006369d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00636/006369d0.md) → [`00636d80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00636/00636d80.md) FUN_00636d80

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
      "unmatched:006369d8",
      "DATA",
      [
        "storage",
        "00c736f0",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00636d88",
      "DATA",
      [
        "storage",
        "00c746c0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 006369d0 ["COPY", "register:4040:8", ["const:c73000:8"]]
- 006369d4 ["COPY", "tmp:0:8", ["const:6f0:8"]]
- 006369d4 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 006369d4 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 006369d4 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 006369d8 ["COPY", "tmp:0:8", ["register:4008:8"]]
- 006369d8 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4040:8"]]
~~~


<a id="compare-2b247c3e7b302ac75c00caf0dc2504ed"></a>

### [`006369e8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00636/006369e8.md) → [`00636d98`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00636/00636d98.md) FUN_00636d98

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 8件 [`00468fc8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00468/00468fc8.md) [`0046af4c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046a/0046af4c.md) [`0046ca04`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046c/0046ca04.md) [`00489f8c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00489/00489f8c.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)
- 新版 呼出元 0件  · 呼出先 8件 [`004692e8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00469/004692e8.md) [`0046b26c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0046b/0046b26c.md) [`0046cd24`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0046c/0046cd24.md) [`0048a2ac`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0048a/0048a2ac.md) [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md)

変更の種類 branch_condition_or_target, call, call_argument_candidate, call_count, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 68.93% / 新版 68.93%

優先判定に残った影響 `call_argument_candidate` 12件, `unresolved_branch_alignment` 5件, `unresolved_call_alignment` 3件, `unresolved_store_alignment` 6件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "00636a18",
      "incomplete_value": true,
      "site": "00636a20",
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
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00636ff4",
      "incomplete_value": false,
      "site": "00637004",
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
      "definition_site": "00636c44",
      "incomplete_value": false,
      "site": "00636c54",
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
    "ordinal": 20,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00636ffc",
      "incomplete_value": false,
      "site": "00637004",
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
            "const:598:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00636c4c",
      "incomplete_value": false,
      "site": "00636c54",
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
            "const:5c8:8"
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
      "unmatched:006369fc",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "unmatched:00636a00",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "unmatched:00636a04",
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
      "00636dac",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "00636db0",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "00636db4",
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
- 00636a20 ["INT_ADD", "register:40f0:8", ["const:636a20:8", "const:4:8"]]
- 00636a20 ["CALL", null, ["callee:008ba294:8"]]
+ 00636dd0 ["INT_ADD", "register:40f0:8", ["const:636dd0:8", "const:4:8"]]
+ 00636dd0 ["CALL", null, ["callee:008ba294:8"]]
- 00636c54 ["INT_ADD", "register:40f0:8", ["const:636c54:8", "const:4:8"]]
- 00636c54 ["CALL", null, ["callee:00c596b0:8"]]
+ 00637004 ["INT_ADD", "register:40f0:8", ["const:637004:8", "const:4:8"]]
+ 00637004 ["CALL", null, ["callee:00c596b0:8"]]
- 00636cb0 ["INT_ADD", "register:40f0:8", ["const:636cb0:8", "const:4:8"]]
- 00636cb0 ["CALL", null, ["callee:0046b26c:8"]]
+ 00637060 ["INT_ADD", "register:40f0:8", ["const:637060:8", "const:4:8"]]
+ 00637060 ["CALL", null, ["callee:0046b26c:8"]]
~~~


<a id="compare-c86feee442fe706fd3e98107560353bc"></a>

### [`00636d48`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00636/00636d48.md) → [`006370f8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00637/006370f8.md) _INIT_80

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 5件 [`0043aeb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043a/0043aeb0.md) [`0043b838`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b838.md) [`00c57f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f00.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)
- 新版 呼出元 0件  · 呼出先 5件 [`0043b1d0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043b1d0.md) [`0043bb58`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bb58.md) [`00c58ed0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58ed0.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md)

変更の種類 branch_condition_or_target, call_argument_candidate, comparison, comparison_count, constant, control_flow, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_store_alignment

命令の説明率　旧版 72.32% / 新版 72.32%

優先判定に残った影響 `call_argument_candidate` 16件, `unresolved_store_alignment` 16件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00637254",
      "incomplete_value": true,
      "site": "00637258",
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
      "definition_site": "00637244",
      "incomplete_value": true,
      "site": "00637258",
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
      "definition_site": "0063724c",
      "incomplete_value": true,
      "site": "00637258",
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
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00636d78",
      "WRITE",
      [
        "storage",
        "Stack[-0x38]",
        null,
        null
      ]
    ],
    [
      "unmatched:00636d84",
      "READ",
      [
        "storage",
        "002b7f66",
        null,
        "string"
      ]
    ],
    [
      "unmatched:00636d8c",
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
      "00637128",
      "WRITE",
      [
        "storage",
        "Stack[-0x38]",
        null,
        null
      ]
    ],
    [
      "00637134",
      "READ",
      [
        "storage",
        "002b8035",
        null,
        "string"
      ]
    ],
    [
      "0063713c",
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
- 00636ea8 ["INT_ADD", "register:40f0:8", ["const:636ea8:8", "const:4:8"]]
- 00636ea8 ["CALL", null, ["callee:0043bb58:8"]]
+ 00637258 ["INT_ADD", "register:40f0:8", ["const:637258:8", "const:4:8"]]
+ 00637258 ["CALL", null, ["callee:0043bb58:8"]]
- 00636ed0 ["INT_ADD", "register:40f0:8", ["const:636ed0:8", "const:4:8"]]
- 00636ed0 ["CALL", null, ["callee:0043bb58:8"]]
+ 00637280 ["INT_ADD", "register:40f0:8", ["const:637280:8", "const:4:8"]]
+ 00637280 ["CALL", null, ["callee:0043bb58:8"]]
- 00636ee4 ["INT_ADD", "register:40f0:8", ["const:636ee4:8", "const:4:8"]]
- 00636ee4 ["CALL", null, ["callee:0043bb58:8"]]
+ 00637294 ["INT_ADD", "register:40f0:8", ["const:637294:8", "const:4:8"]]
+ 00637294 ["CALL", null, ["callee:0043bb58:8"]]
~~~


<a id="compare-e499c935743469e4bd75eefced96fd8c"></a>

### [`006370d8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00637/006370d8.md) → [`00637488`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00637/00637488.md) FUN_00637488

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`00637890`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00637/00637890.md) · 呼出先 5件 [`0044295c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00442/0044295c.md) [`00493b60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00493/00493b60.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md) [`00c58010`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58010.md)
- 新版 呼出元 1件 [`00637c40`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00637/00637c40.md) · 呼出先 5件 [`00442c7c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00442/00442c7c.md) [`00493e80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00493/00493e80.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md) [`00c58fe0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58fe0.md)

変更の種類 branch_condition_or_target, branch_value, call, call_argument_candidate, call_count, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, store_condition, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 65.24% / 新版 65.24%

優先判定に残った影響 `branch_value` 1件, `call_argument_candidate` 6件, `store_condition` 1件, `unresolved_branch_alignment` 19件, `unresolved_call_alignment` 3件, `unresolved_store_alignment` 6件

~~~json
[
  {
    "confidence": "limited",
    "kind": "branch_value",
    "new": {
      "definition_site": "006376ac",
      "incomplete_value": true,
      "site": "006376ac",
      "value": [
        "BOOL_OR",
        "1",
        [
          [
            "BOOL_NEGATE",
            "1",
            [
              "INT_LESSEQUAL"
            ]
          ],
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
      "definition_site": "00637204",
      "incomplete_value": true,
      "site": "00637204",
      "value": [
        "BOOL_OR",
        "1",
        [
          [
            "BOOL_NEGATE",
            "1",
            [
              "INT_LESSEQUAL"
            ]
          ],
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
    "ordinal": 12,
    "slot": 0
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "00637154",
      "incomplete_value": true,
      "site": "00637158",
      "value": [
        "live",
        "register:8:8"
      ]
    },
    "ordinal": 1,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00637594",
      "incomplete_value": true,
      "site": "00637598",
      "value": [
        "LOAD",
        "8",
        [
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
      "unmatched:0063710c",
      "WRITE",
      [
        "storage",
        "Stack[-0x48]",
        null,
        null
      ]
    ],
    [
      "unmatched:00637134",
      "WRITE",
      [
        "storage",
        "Stack[-0x60]",
        null,
        null
      ]
    ],
    [
      "unmatched:00637138",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "unmatched:00637150"
      ]
    ]
  ],
  "added": [
    [
      "006374bc",
      "WRITE",
      [
        "storage",
        "Stack[-0x48]",
        null,
        null
      ]
    ],
    [
      "006374e4",
      "WRITE",
      [
        "storage",
        "Stack[-0x60]",
        null,
        null
      ]
    ],
    [
      "006374e8",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00637500"
      ]
    ]
  ]
}
~~~


~~~diff
- 00637158 ["INT_ADD", "register:40f0:8", ["const:637158:8", "const:4:8"]]
- 00637158 ["CALL", null, ["callee:00493e80:8"]]
+ 00637508 ["INT_ADD", "register:40f0:8", ["const:637508:8", "const:4:8"]]
+ 00637508 ["CALL", null, ["callee:00493e80:8"]]
- 006371e8 ["INT_ADD", "register:40f0:8", ["const:6371e8:8", "const:4:8"]]
- 006371e8 ["CALL", null, ["callee:00c58f50:8"]]
+ 00637598 ["INT_ADD", "register:40f0:8", ["const:637598:8", "const:4:8"]]
+ 00637598 ["CALL", null, ["callee:00c58f50:8"]]
- 00637204 ["BOOL_NEGATE", "tmp:0:1", ["register:102:1"]]
- 00637204 ["BOOL_OR", "tmp:1:1", ["tmp:0:1", "register:101:1"]]
- 00637204 ["CBRANCH", null, ["local:b51:8", "tmp:1:1"]]
+ 006376ac ["BOOL_NEGATE", "tmp:0:1", ["register:102:1"]]
+ 006376ac ["BOOL_OR", "tmp:1:1", ["tmp:0:1", "register:101:1"]]
+ 006376ac ["CBRANCH", null, ["local:b49:8", "tmp:1:1"]]
~~~


<a id="compare-2784cd856e6ec23acf51caae834e735b"></a>

### [`00637460`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00637/00637460.md) → [`00637810`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00637/00637810.md) FUN_00637810

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `observed` · 参照 `equal` · `cfg_change`

- 旧版 呼出元 1件 [`0075ebd8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0075e/0075ebd8.md) · 呼出先 3件 [`005977b8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00597/005977b8.md) [`00597acc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00597/00597acc.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)
- 新版 呼出元 1件 [`0075ef88`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0075e/0075ef88.md) · 呼出先 3件 [`00597ad8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00597/00597ad8.md) [`00597dec`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00597/00597dec.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md)

変更の種類 branch_condition_or_target, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, operands_and_dependencies, operation_sequence

命令の説明率　旧版 97.06% / 新版 97.06%

~~~diff
- 00637480 ["COPY", "register:4040:8", ["const:7102:8"]]
+ 00637830 ["COPY", "register:4040:8", ["const:7103:8"]]
- 006374b8 ["BOOL_NEGATE", "tmp:0:1", ["register:101:1"]]
- 006374b8 ["CBRANCH", null, ["local:b10:8", "tmp:0:1"]]
+ 00637868 ["BOOL_NEGATE", "tmp:0:1", ["register:101:1"]]
+ 00637868 ["CBRANCH", null, ["local:b11:8", "tmp:0:1"]]
- 006374d8 ["INT_EQUAL", "tmp:0:1", ["register:4040:4", "const:0:4"]]
- 006374d8 ["CBRANCH", null, ["local:b8:8", "tmp:0:1"]]
+ 00637888 ["INT_EQUAL", "tmp:0:1", ["register:4040:4", "const:0:4"]]
+ 00637888 ["CBRANCH", null, ["local:b9:8", "tmp:0:1"]]
~~~


<a id="compare-f614e751d22d61111ee757e100b65636"></a>

### [`00637570`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00637/00637570.md) → [`00637920`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00637/00637920.md) FUN_00637920

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `bounded` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 2件 [`00637650`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00637/00637650.md) [`0075ebd8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0075e/0075ebd8.md) · 呼出先 4件 [`0048d3b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048d/0048d3b0.md) [`00492e48`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00492/00492e48.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)
- 新版 呼出元 2件 [`00637a00`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00637/00637a00.md) [`0075ef88`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0075e/0075ef88.md) · 呼出先 4件 [`0048d6d0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0048d/0048d6d0.md) [`00493168`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00493/00493168.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md)

変更の種類 branch_condition_or_target, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_store_alignment

命令の説明率　旧版 82.05% / 新版 82.05%

優先判定に残った影響 `unresolved_branch_alignment` 1件, `unresolved_store_alignment` 4件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:0063759c",
      "WRITE",
      [
        "storage",
        "Stack[-0x40]",
        null,
        null
      ]
    ],
    [
      "unmatched:006375a4",
      "WRITE",
      [
        "storage",
        "Stack[-0x3f]",
        null,
        null
      ]
    ],
    [
      "unmatched:006375a8",
      "WRITE",
      [
        "storage",
        "Stack[-0x3b]",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "0063794c",
      "WRITE",
      [
        "storage",
        "Stack[-0x40]",
        null,
        null
      ]
    ],
    [
      "00637954",
      "WRITE",
      [
        "storage",
        "Stack[-0x3f]",
        null,
        null
      ]
    ],
    [
      "00637958",
      "WRITE",
      [
        "storage",
        "Stack[-0x3b]",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 0063759c ["COPY", "tmp:0:4", ["register:4048:4"]]
- 0063759c ["INT_ADD", "tmp:1:8", ["register:8:8", "const:20:8"]]
- 0063759c ["STORE", null, ["const:1b1:8", "tmp:1:8", "tmp:0:1"]]
- 006375a0 ["COPY", "register:4048:8", ["const:676e:8"]]
- 006375a4 ["COPY", "tmp:0:4", ["register:4040:4"]]
- 006375a4 ["INT_ADD", "tmp:1:8", ["register:8:8", "const:21:8"]]
- 006375a4 ["STORE", null, ["const:1b1:8", "tmp:1:8", "tmp:0:4"]]
~~~


<a id="compare-79a50be212e5e60f032baece518d7c12"></a>

### [`00637650`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00637/00637650.md) → [`00637a00`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00637/00637a00.md) FUN_00637a00

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `bounded` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 3件 [`00637890`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00637/00637890.md) [`00638e2c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00638/00638e2c.md) [`0075ebd8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0075e/0075ebd8.md) · 呼出先 5件 [`0043dbe4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043d/0043dbe4.md) [`00637570`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00637/00637570.md) [`00637728`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00637/00637728.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)
- 新版 呼出元 3件 [`00637c40`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00637/00637c40.md) [`006391dc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00639/006391dc.md) [`0075ef88`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0075e/0075ef88.md) · 呼出先 5件 [`0043df04`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043d/0043df04.md) [`00637920`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00637/00637920.md) [`00637ad8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00637/00637ad8.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md)

変更の種類 branch_condition_or_target, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_return_alignment, unresolved_store_alignment

命令の説明率　旧版 86.49% / 新版 86.49%

優先判定に残った影響 `unresolved_branch_alignment` 1件, `unresolved_return_alignment` 1件, `unresolved_store_alignment` 1件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00637674",
      "WRITE",
      [
        "storage",
        "Stack[-0x38]",
        null,
        null
      ]
    ],
    [
      "unmatched:006376c8",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00637ad4"
      ]
    ]
  ],
  "added": [
    [
      "00637a24",
      "WRITE",
      [
        "storage",
        "Stack[-0x38]",
        null,
        null
      ]
    ],
    [
      "00637a78",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00637ad4"
      ]
    ]
  ]
}
~~~


~~~diff
- 00637670 ["INT_ADD", "tmp:0:8", ["register:40a8:8", "const:28:8"]]
- 00637670 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
- 00637674 ["COPY", "tmp:0:8", ["register:4040:8"]]
- 00637674 ["INT_ADD", "tmp:1:8", ["register:40e8:8", "const:fffffffffffffff8:8"]]
- 00637674 ["STORE", null, ["const:1b1:8", "tmp:1:8", "tmp:0:8"]]
- 0063767c ["INT_ADD", "register:40f0:8", ["const:63767c:8", "const:4:8"]]
- 0063767c ["CALL", null, ["callee:00637ad8:8"]]
+ 00637a2c ["INT_ADD", "register:40f0:8", ["const:637a2c:8", "const:4:8"]]
+ 00637a2c ["CALL", null, ["callee:00637ad8:8"]]
~~~


<a id="compare-adae73a844597cccad94b152cc0d4441"></a>

### [`00637728`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00637/00637728.md) → [`00637ad8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00637/00637ad8.md) FUN_00637ad8

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 3件 [`004896dc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00489/004896dc.md) [`00637650`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00637/00637650.md) [`00638e2c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00638/00638e2c.md) · 呼出先 4件 [`0043dbe4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043d/0043dbe4.md) [`00550c6c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00550/00550c6c.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)
- 新版 呼出元 3件 [`004899fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00489/004899fc.md) [`00637a00`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00637/00637a00.md) [`006391dc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00639/006391dc.md) · 呼出先 4件 [`0043df04`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043d/0043df04.md) [`00550f8c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00550/00550f8c.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md)

変更の種類 branch_condition_or_target, call, call_argument_candidate, call_count, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 78.05% / 新版 78.05%

優先判定に残った影響 `call_argument_candidate` 1件, `unresolved_call_alignment` 1件, `unresolved_store_alignment` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "00637778",
      "incomplete_value": true,
      "site": "00637784",
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
      "unmatched:00637744",
      "WRITE",
      [
        "storage",
        "Stack[-0x28]",
        null,
        null
      ]
    ],
    [
      "unmatched:0063774c",
      "UNCONDITIONAL_CALL",
      [
        "mapped_function",
        "00550f8c"
      ]
    ],
    [
      "unmatched:0063775c",
      "READ",
      [
        "storage",
        "002b3de4",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "00637af4",
      "WRITE",
      [
        "storage",
        "Stack[-0x28]",
        null,
        null
      ]
    ],
    [
      "00637afc",
      "UNCONDITIONAL_CALL",
      [
        "mapped_function",
        "00550f8c"
      ]
    ],
    [
      "00637b0c",
      "READ",
      [
        "storage",
        "002b3ec2",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 00637784 ["INT_ADD", "register:40f0:8", ["const:637784:8", "const:4:8"]]
- 00637784 ["CALL", null, ["callee:0043df04:8"]]
+ 00637b34 ["INT_ADD", "register:40f0:8", ["const:637b34:8", "const:4:8"]]
+ 00637b34 ["CALL", null, ["callee:0043df04:8"]]
- 00637740 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:28:8"]]
- 00637740 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
- 00637744 ["COPY", "tmp:0:8", ["register:4040:8"]]
- 00637744 ["INT_ADD", "tmp:1:8", ["register:40e8:8", "const:fffffffffffffff8:8"]]
- 00637744 ["STORE", null, ["const:1b1:8", "tmp:1:8", "tmp:0:8"]]
~~~


<a id="compare-515ac2c61e217858a66976858e47ee2b"></a>

### [`00637808`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00637/00637808.md) → [`00637bb8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00637/00637bb8.md) FUN_00637bb8

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `bounded` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`0084e5f4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0084e/0084e5f4.md) · 呼出先 1件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 1件 [`0084f5a0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0084f/0084f5a0.md) · 呼出先 1件 [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 branch_condition_or_target, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_store_alignment

命令の説明率　旧版 88.24% / 新版 88.24%

優先判定に残った影響 `unresolved_branch_alignment` 1件, `unresolved_store_alignment` 4件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00637808",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "unmatched:0063780c",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "unmatched:00637824",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00637c08"
      ]
    ]
  ],
  "added": [
    [
      "00637bb8",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "00637bbc",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "00637bd4",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00637c08"
      ]
    ]
  ]
}
~~~


~~~diff
- 00637808 ["COPY", "tmp:0:8", ["register:40e8:8"]]
- 00637808 ["COPY", "tmp:1:8", ["register:40f0:8"]]
- 00637808 ["INT_ADD", "register:8:8", ["register:8:8", "const:ffffffffffffffd0:8"]]
- 00637808 ["STORE", null, ["const:1b1:8", "register:8:8", "tmp:0:8"]]
- 0063780c ["COPY", "tmp:0:8", ["register:40b0:8"]]
- 0063780c ["COPY", "tmp:1:8", ["register:40a8:8"]]
- 0063780c ["INT_ADD", "tmp:2:8", ["register:8:8", "const:10:8"]]
- 0063780c ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
- 00637820 ["INT_LESSEQUAL", "register:105:1", ["register:40a0:8", "register:40a8:8"]]
- 00637820 ["INT_SBORROW", "register:106:1", ["register:40a8:8", "register:40a0:8"]]
- 00637820 ["INT_SUB", "tmp:0:8", ["register:40a8:8", "register:40a0:8"]]
- 00637820 ["INT_SLESS", "register:107:1", ["tmp:0:8", "const:0:8"]]
~~~


<a id="compare-2be4275d1faa2df9aa51ca7e993ed521"></a>

### [`00637890`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00637/00637890.md) → [`00637c40`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00637/00637c40.md) FUN_00637c40

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 2件 [`0075ebd8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0075e/0075ebd8.md) [`00b28ff0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b28/00b28ff0.md) · 呼出先 31件 [`0043bb60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bb60.md) [`0043bbe4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bbe4.md) [`0043dbe4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043d/0043dbe4.md) [`004410cc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00441/004410cc.md) [`00481470`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00481/00481470.md)
- 新版 呼出元 2件 [`0075ef88`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0075e/0075ef88.md) [`00b29fe4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b29/00b29fe4.md) · 呼出先 31件 [`0043be80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043be80.md) [`0043bf04`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bf04.md) [`0043df04`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043d/0043df04.md) [`004413ec`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00441/004413ec.md) [`00481790`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00481/00481790.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, store_condition, store_value, unresolved_branch_alignment, unresolved_call_alignment, unresolved_return_alignment, unresolved_store_alignment

命令の説明率　旧版 76.14% / 新版 76.14%

優先判定に残った影響 `call_argument_candidate` 25件, `store_condition` 2件, `store_value` 1件, `unresolved_branch_alignment` 35件, `unresolved_call_alignment` 17件, `unresolved_return_alignment` 1件, `unresolved_store_alignment` 64件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "00638d24",
      "incomplete_value": false,
      "site": "00638d28",
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
                "const:c66000:8"
              ],
              [
                "leaf",
                "const:5d0:8"
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
      "definition_site": "00638974",
      "incomplete_value": false,
      "site": "00638978",
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
                "const:c65000:8"
              ],
              [
                "leaf",
                "const:600:8"
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
    "ordinal": 208,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00637cb4",
      "incomplete_value": true,
      "site": "00637cc0",
      "value": [
        "live",
        "register:40a0:8"
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
      "definition_site": "00637ca8",
      "incomplete_value": true,
      "site": "00637cc0",
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
      "unmatched:006378a0",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "unmatched:006378a4",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "unmatched:006378a8",
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
      "00637c50",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "00637c54",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "00637c58",
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
- 00637910 ["INT_ADD", "register:40f0:8", ["const:637910:8", "const:4:8"]]
- 00637910 ["CALL", null, ["callee:00639780:8"]]
+ 00637cc0 ["INT_ADD", "register:40f0:8", ["const:637cc0:8", "const:4:8"]]
+ 00637cc0 ["CALL", null, ["callee:00639780:8"]]
- 0063795c ["INT_ADD", "register:40f0:8", ["const:63795c:8", "const:4:8"]]
- 0063795c ["CALL", null, ["callee:00481790:8"]]
+ 00637d0c ["INT_ADD", "register:40f0:8", ["const:637d0c:8", "const:4:8"]]
+ 00637d0c ["CALL", null, ["callee:00481790:8"]]
- 006379a8 ["INT_ADD", "register:40f0:8", ["const:6379a8:8", "const:4:8"]]
- 006379a8 ["CALL", null, ["callee:00c59010:8"]]
+ 00637d58 ["INT_ADD", "register:40f0:8", ["const:637d58:8", "const:4:8"]]
+ 00637d58 ["CALL", null, ["callee:00c59010:8"]]
~~~


<a id="compare-34f033a309e17141cad2910951b99f74"></a>

### [`00638dc8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00638/00638dc8.md) → [`00639178`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00639/00639178.md) FUN_00639178

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 branch_condition_or_target, cfg_edge_inventory, constant, control_flow, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00638ddc ["INT_RIGHT", "tmp:0:4", ["register:4040:4", "const:0:4"]]
- 00638ddc ["INT_AND", "tmp:1:4", ["tmp:0:4", "const:1:4"]]
- 00638ddc ["INT_EQUAL", "tmp:2:1", ["tmp:1:4", "const:0:4"]]
- 00638ddc ["INT_EQUAL", "tmp:3:1", ["tmp:2:1", "const:0:1"]]
+ 0063918c ["INT_RIGHT", "tmp:0:4", ["register:4040:4", "const:0:4"]]
+ 0063918c ["INT_AND", "tmp:1:4", ["tmp:0:4", "const:1:4"]]
+ 0063918c ["INT_EQUAL", "tmp:2:1", ["tmp:1:4", "const:0:4"]]
+ 0063918c ["INT_EQUAL", "tmp:3:1", ["tmp:2:1", "const:0:1"]]
- 00638de4 ["INT_RIGHT", "tmp:0:4", ["register:4040:4", "const:0:4"]]
- 00638de4 ["INT_AND", "tmp:1:4", ["tmp:0:4", "const:1:4"]]
- 00638de4 ["INT_EQUAL", "tmp:2:1", ["tmp:1:4", "const:0:4"]]
- 00638de4 ["INT_EQUAL", "tmp:3:1", ["tmp:2:1", "const:0:1"]]
+ 00639194 ["INT_RIGHT", "tmp:0:4", ["register:4040:4", "const:0:4"]]
+ 00639194 ["INT_AND", "tmp:1:4", ["tmp:0:4", "const:1:4"]]
+ 00639194 ["INT_EQUAL", "tmp:2:1", ["tmp:1:4", "const:0:4"]]
+ 00639194 ["INT_EQUAL", "tmp:3:1", ["tmp:2:1", "const:0:1"]]
- 00638dec ["INT_RIGHT", "tmp:0:4", ["register:4040:4", "const:0:4"]]
- 00638dec ["INT_AND", "tmp:1:4", ["tmp:0:4", "const:1:4"]]
- 00638dec ["INT_EQUAL", "tmp:2:1", ["tmp:1:4", "const:0:4"]]
- 00638dec ["INT_EQUAL", "tmp:3:1", ["tmp:2:1", "const:0:1"]]
+ 0063919c ["INT_RIGHT", "tmp:0:4", ["register:4040:4", "const:0:4"]]
+ 0063919c ["INT_AND", "tmp:1:4", ["tmp:0:4", "const:1:4"]]
+ 0063919c ["INT_EQUAL", "tmp:2:1", ["tmp:1:4", "const:0:4"]]
+ 0063919c ["INT_EQUAL", "tmp:3:1", ["tmp:2:1", "const:0:1"]]
~~~


<a id="compare-95bc1e7a1c44fe063ed708fe021099fd"></a>

### [`00638e2c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00638/00638e2c.md) → [`006391dc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00639/006391dc.md) FUN_006391dc

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 1件 [`0075ebd8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0075e/0075ebd8.md) · 呼出先 18件 [`0043bb60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bb60.md) [`00550c5c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00550/00550c5c.md) [`00550c60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00550/00550c60.md) [`00561d74`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00561/00561d74.md) [`00597650`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00597/00597650.md)
- 新版 呼出元 1件 [`0075ef88`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0075e/0075ef88.md) · 呼出先 18件 [`0043be80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043be80.md) [`00550f7c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00550/00550f7c.md) [`00550f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00550/00550f80.md) [`00562094`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00562/00562094.md) [`00597970`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00597/00597970.md)

変更の種類 branch_condition_or_target, call_argument_candidate, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 86.36% / 新版 86.36%

優先判定に残った影響 `call_argument_candidate` 8件, `unresolved_branch_alignment` 6件, `unresolved_call_alignment` 3件, `unresolved_store_alignment` 9件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "00638e90",
      "incomplete_value": true,
      "site": "00638e94",
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
            "const:40:8"
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
      "definition_site": "006392e4",
      "incomplete_value": true,
      "site": "006392ec",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:c68:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00638f34",
      "incomplete_value": true,
      "site": "00638f3c",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:c98:8"
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
    "new": null,
    "old": {
      "definition_site": "00638f6c",
      "incomplete_value": false,
      "site": "00638f70",
      "value": [
        "leaf",
        "const:1:8"
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
      "unmatched:00638eb0",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00639568"
      ]
    ],
    [
      "unmatched:00638f34",
      "READ",
      [
        "storage",
        "00c9ac98",
        null,
        "pointer"
      ]
    ],
    [
      "unmatched:00638f34",
      "PARAM",
      [
        "storage",
        "00ca5dd0",
        null,
        "undefined1"
      ]
    ]
  ],
  "added": [
    [
      "00639260",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00639568"
      ]
    ],
    [
      "006392e4",
      "READ",
      [
        "storage",
        "00c9bc68",
        null,
        "pointer"
      ]
    ],
    [
      "006392e4",
      "PARAM",
      [
        "storage",
        "00ca6d90",
        null,
        "undefined1"
      ]
    ]
  ]
}
~~~


~~~diff
- 00638e94 ["INT_ADD", "register:40f0:8", ["const:638e94:8", "const:4:8"]]
- 00638e94 ["CALL", null, ["callee:00550f7c:8"]]
+ 00639244 ["INT_ADD", "register:40f0:8", ["const:639244:8", "const:4:8"]]
+ 00639244 ["CALL", null, ["callee:00550f7c:8"]]
- 00638f3c ["INT_ADD", "register:40f0:8", ["const:638f3c:8", "const:4:8"]]
- 00638f3c ["CALL", null, ["callee:00562094:8"]]
+ 006392ec ["INT_ADD", "register:40f0:8", ["const:6392ec:8", "const:4:8"]]
+ 006392ec ["CALL", null, ["callee:00562094:8"]]
- 00638f70 ["INT_ADD", "register:40f0:8", ["const:638f70:8", "const:4:8"]]
- 00638f70 ["CALL", null, ["callee:00c54d60:8"]]
+ 00639320 ["INT_ADD", "register:40f0:8", ["const:639320:8", "const:4:8"]]
+ 00639320 ["CALL", null, ["callee:00c54d60:8"]]
~~~


<a id="compare-cc60a63f590aafb7a9434b90c14db83a"></a>

### [`00639314`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00639/00639314.md) → [`006396c4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00639/006396c4.md) FUN_006396c4

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 3件 [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 0件  · 呼出先 3件 [`00c54d90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d90.md) [`00c58f20`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f20.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

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
      "definition_site": "0063932c",
      "incomplete_value": true,
      "site": "00639334",
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
    "ordinal": 0,
    "slot": 2
  }
]
~~~


~~~diff
- 00639334 ["INT_ADD", "register:40f0:8", ["const:639334:8", "const:4:8"]]
- 00639334 ["CALL", null, ["callee:00c54d90:8"]]
+ 006396e4 ["INT_ADD", "register:40f0:8", ["const:6396e4:8", "const:4:8"]]
+ 006396e4 ["CALL", null, ["callee:00c54d90:8"]]
- 00639328 ["INT_EQUAL", "tmp:0:1", ["register:40a0:8", "const:0:8"]]
- 00639328 ["CBRANCH", null, ["local:b2:8", "tmp:0:1"]]
+ 006396d8 ["INT_EQUAL", "tmp:0:1", ["register:40a0:8", "const:0:8"]]
+ 006396d8 ["CBRANCH", null, ["local:b4:8", "tmp:0:1"]]
- 00639338 ["INT_EQUAL", "tmp:0:1", ["register:4000:8", "const:0:8"]]
- 00639338 ["CBRANCH", null, ["local:b4:8", "tmp:0:1"]]
+ 006396e8 ["INT_EQUAL", "tmp:0:1", ["register:4000:8", "const:0:8"]]
+ 006396e8 ["CBRANCH", null, ["local:b6:8", "tmp:0:1"]]
~~~


<a id="compare-94ac4dfae5040b2367ca39452f6ea6dd"></a>

### [`00639380`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00639/00639380.md) → [`00639730`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00639/00639730.md) FUN_00639730

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c54d90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d90.md) [`00c58f20`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f20.md)

変更の種類 cfg_edge_inventory, constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 0063939c ["INT_ADD", "register:40f0:8", ["const:63939c:8", "const:4:8"]]
- 0063939c ["CALL", null, ["callee:00c54d90:8"]]
+ 0063974c ["INT_ADD", "register:40f0:8", ["const:63974c:8", "const:4:8"]]
+ 0063974c ["CALL", null, ["callee:00c54d90:8"]]
- 006393bc ["COPY", "register:0:8", ["register:4040:8"]]
- 006393bc ["INT_ADD", "register:40f0:8", ["const:6393bc:8", "const:4:8"]]
- 006393bc ["CALLIND", null, ["register:0:8"]]
+ 0063976c ["COPY", "register:0:8", ["register:4040:8"]]
+ 0063976c ["INT_ADD", "register:40f0:8", ["const:63976c:8", "const:4:8"]]
+ 0063976c ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-2d42368da8797fffd916e65252f7340b"></a>

### [`006393d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00639/006393d0.md) → [`00639780`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00639/00639780.md) FUN_00639780

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 6件 [`00637890`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00637/00637890.md) [`0073389c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00733/0073389c.md) [`00733f9c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00733/00733f9c.md) [`0073813c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00738/0073813c.md) [`0088c8c8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0088c/0088c8c8.md) · 呼出先 5件 [`0043bb60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bb60.md) [`0043bbe4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bbe4.md) [`006394fc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00639/006394fc.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)
- 新版 呼出元 6件 [`00637c40`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00637/00637c40.md) [`00733c4c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00733/00733c4c.md) [`0073434c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00734/0073434c.md) [`007384ec`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00738/007384ec.md) [`0088d874`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0088d/0088d874.md) · 呼出先 5件 [`0043be80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043be80.md) [`0043bf04`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bf04.md) [`006398ac`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00639/006398ac.md) [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, return_value_candidate, store_condition, unresolved_branch_alignment, unresolved_store_alignment

命令の説明率　旧版 86.36% / 新版 86.36%

優先判定に残った影響 `call_argument_candidate` 3件, `return_value_candidate` 1件, `store_condition` 1件, `unresolved_branch_alignment` 2件, `unresolved_store_alignment` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "006393f0",
      "incomplete_value": true,
      "site": "00639404",
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
                "const:70:8"
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
      "definition_site": "006393ec",
      "incomplete_value": true,
      "site": "00639404",
      "value": [
        "live",
        "register:4008:8"
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
      "definition_site": "0063941c",
      "incomplete_value": false,
      "site": "00639424",
      "value": [
        "leaf",
        "const:40:8"
      ]
    },
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
      "unmatched:00639400",
      "WRITE",
      [
        "storage",
        "Stack[-0x48]",
        null,
        null
      ]
    ],
    [
      "unmatched:00639484",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00639840"
      ]
    ],
    [
      "unmatched:006394b4",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "006398a8"
      ]
    ]
  ],
  "added": [
    [
      "006397b0",
      "WRITE",
      [
        "storage",
        "Stack[-0x48]",
        null,
        null
      ]
    ],
    [
      "00639834",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00639840"
      ]
    ],
    [
      "00639864",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "006398a8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00639404 ["INT_ADD", "register:40f0:8", ["const:639404:8", "const:4:8"]]
- 00639404 ["CALL", null, ["callee:006398ac:8"]]
+ 006397b4 ["INT_ADD", "register:40f0:8", ["const:6397b4:8", "const:4:8"]]
+ 006397b4 ["CALL", null, ["callee:006398ac:8"]]
- 00639424 ["INT_ADD", "register:40f0:8", ["const:639424:8", "const:4:8"]]
- 00639424 ["CALL", null, ["callee:00c58f30:8"]]
+ 006397d4 ["INT_ADD", "register:40f0:8", ["const:6397d4:8", "const:4:8"]]
+ 006397d4 ["CALL", null, ["callee:00c58f30:8"]]
- 006393f0 ["COPY", "tmp:0:8", ["const:8:8"]]
- 006393f0 ["INT_CARRY", "register:105:1", ["register:8:8", "tmp:0:8"]]
- 006393f0 ["INT_SCARRY", "register:106:1", ["register:8:8", "tmp:0:8"]]
- 006393f0 ["INT_ADD", "tmp:1:8", ["register:8:8", "tmp:0:8"]]
~~~


<a id="compare-07af621bcf69dc67c0dd80fe35824c1f"></a>

### [`006394fc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00639/006394fc.md) → [`006398ac`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00639/006398ac.md) FUN_006398ac

根拠 `code_and_unique_call_neighborhood` · `raw_instruction_pcode` · `bounded` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 8件 [`00637890`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00637/00637890.md) [`006393d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00639/006393d0.md) [`007394fc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00739/007394fc.md) [`0073a0c0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0073a/0073a0c0.md) [`0088f118`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0088f/0088f118.md) · 呼出先 1件 [`00c58120`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58120.md)
- 新版 呼出元 8件 [`00637c40`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00637/00637c40.md) [`00639780`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00639/00639780.md) [`007398ac`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00739/007398ac.md) [`0073a470`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0073a/0073a470.md) [`008900c4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00890/008900c4.md) · 呼出先 1件 [`00c590f0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c590f0.md)

変更の種類 branch_condition_or_target, call, call_count, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 70.77% / 新版 70.77%

優先判定に残った影響 `unresolved_branch_alignment` 4件, `unresolved_call_alignment` 1件, `unresolved_store_alignment` 8件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:006394fc",
      "WRITE",
      [
        "storage",
        "Stack[-0x50]",
        null,
        null
      ]
    ],
    [
      "unmatched:00639500",
      "WRITE",
      [
        "storage",
        "Stack[-0x40]",
        null,
        null
      ]
    ],
    [
      "unmatched:00639504",
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
      "006398ac",
      "WRITE",
      [
        "storage",
        "Stack[-0x50]",
        null,
        null
      ]
    ],
    [
      "006398b0",
      "WRITE",
      [
        "storage",
        "Stack[-0x40]",
        null,
        null
      ]
    ],
    [
      "006398b4",
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
- 006394fc ["COPY", "tmp:0:8", ["register:40e8:8"]]
- 006394fc ["COPY", "tmp:1:8", ["register:40f0:8"]]
- 006394fc ["INT_ADD", "register:8:8", ["register:8:8", "const:ffffffffffffffb0:8"]]
- 006394fc ["STORE", null, ["const:1b1:8", "register:8:8", "tmp:0:8"]]
- 00639500 ["COPY", "tmp:0:8", ["register:40d0:8"]]
- 00639500 ["COPY", "tmp:1:8", ["register:40c8:8"]]
- 00639500 ["INT_ADD", "tmp:2:8", ["register:8:8", "const:10:8"]]
- 00639500 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
- 00639504 ["COPY", "tmp:0:8", ["register:40c0:8"]]
- 00639504 ["COPY", "tmp:1:8", ["register:40b8:8"]]
- 00639504 ["INT_ADD", "tmp:2:8", ["register:8:8", "const:20:8"]]
- 00639504 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
~~~


<a id="compare-b92e4ae526162422bf1097d75ef2556e"></a>

### [`00639650`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00639/00639650.md) → [`00639a00`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00639/00639a00.md) FUN_00639a00

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `bounded` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`00637890`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00637/00637890.md) · 呼出先 6件 [`00440f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00440/00440f00.md) [`00639880`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00639/00639880.md) [`00639a78`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00639/00639a78.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 1件 [`00637c40`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00637/00637c40.md) · 呼出先 6件 [`00441220`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00441/00441220.md) [`00639c30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00639/00639c30.md) [`00639e28`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00639/00639e28.md) [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 branch_condition_or_target, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_return_alignment, unresolved_store_alignment

命令の説明率　旧版 93.13% / 新版 93.13%

優先判定に残った影響 `unresolved_branch_alignment` 1件, `unresolved_return_alignment` 1件, `unresolved_store_alignment` 4件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "00639a50",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "unmatched:0063982c"
      ]
    ],
    [
      "unmatched:0063977c",
      "WRITE",
      [
        "storage",
        "Stack[-0x60]",
        null,
        null
      ]
    ],
    [
      "unmatched:00639830",
      "READ",
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
      "00639a50",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00639bdc"
      ]
    ],
    [
      "00639b2c",
      "WRITE",
      [
        "storage",
        "Stack[-0x60]",
        null,
        null
      ]
    ],
    [
      "00639be0",
      "READ",
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
- 006396e4 ["BOOL_NEGATE", "tmp:0:1", ["register:101:1"]]
- 006396e4 ["BOOL_AND", "tmp:1:1", ["register:102:1", "tmp:0:1"]]
- 006396e4 ["CBRANCH", null, ["local:b24:8", "tmp:1:1"]]
+ 00639a94 ["BOOL_NEGATE", "tmp:0:1", ["register:101:1"]]
+ 00639a94 ["BOOL_AND", "tmp:1:1", ["register:102:1", "tmp:0:1"]]
+ 00639a94 ["CBRANCH", null, ["local:b23:8", "tmp:1:1"]]
- 006396f0 ["INT_ADD", "register:40f0:8", ["const:6396f0:8", "const:4:8"]]
- 006396f0 ["CALL", null, ["callee:00c58f30:8"]]
+ 00639aa0 ["INT_ADD", "register:40f0:8", ["const:639aa0:8", "const:4:8"]]
+ 00639aa0 ["CALL", null, ["callee:00c58f30:8"]]
- 00639760 ["INT_ADD", "tmp:0:8", ["register:4048:8", "const:58:8"]]
- 00639760 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:5040:16"]]
~~~


<a id="compare-2d71196f7488ffec443d29c03e76f6d4"></a>

### [`00639880`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00639/00639880.md) → [`00639c30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00639/00639c30.md) FUN_00639c30

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`00639650`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00639/00639650.md) · 呼出先 1件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 1件 [`00639a00`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00639/00639a00.md) · 呼出先 1件 [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_store_alignment

命令の説明率　旧版 81.40% / 新版 81.40%

優先判定に残った影響 `call_argument_candidate` 2件, `unresolved_branch_alignment` 2件, `unresolved_store_alignment` 9件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "00639960",
      "incomplete_value": true,
      "site": "00639964",
      "value": [
        "LOAD",
        "8",
        [
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
                "const:40:8"
              ]
            ]
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
      "definition_site": "00639980",
      "incomplete_value": true,
      "site": "00639984",
      "value": [
        "LOAD",
        "8",
        [
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
                "const:10:8"
              ]
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
      "unmatched:006398b0",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00639d3c"
      ]
    ],
    [
      "unmatched:00639930",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00639c6c"
      ]
    ]
  ],
  "added": [
    [
      "00639c60",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00639d3c"
      ]
    ],
    [
      "00639ce0",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00639c6c"
      ]
    ]
  ]
}
~~~


~~~diff
- 00639964 ["INT_ADD", "register:40f0:8", ["const:639964:8", "const:4:8"]]
- 00639964 ["CALL", null, ["callee:00c58f50:8"]]
+ 00639d14 ["INT_ADD", "register:40f0:8", ["const:639d14:8", "const:4:8"]]
+ 00639d14 ["CALL", null, ["callee:00c58f50:8"]]
- 00639984 ["INT_ADD", "register:40f0:8", ["const:639984:8", "const:4:8"]]
- 00639984 ["CALL", null, ["callee:00c58f50:8"]]
+ 00639d34 ["INT_ADD", "register:40f0:8", ["const:639d34:8", "const:4:8"]]
+ 00639d34 ["CALL", null, ["callee:00c58f50:8"]]
- 006398a4 ["INT_SUB", "register:4048:8", ["register:40b0:8", "register:40a8:8"]]
~~~


<a id="compare-d2a364260836e8a38a30139acd83e198"></a>

### [`006399d8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00639/006399d8.md) → [`00639d88`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00639/00639d88.md) FUN_00639d88

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 branch_condition_or_target, cfg_edge_inventory, constant, control_flow, control_flow_count, local_def_use, operands_and_dependencies, operation_sequence, store_condition, unresolved_branch_alignment

命令の説明率　旧版 97.50% / 新版 97.50%

優先判定に残った影響 `store_condition` 1件, `unresolved_branch_alignment` 1件

~~~json
[
  {
    "confidence": "limited",
    "guard": [
      [
        "FALL_THROUGH",
        "006399fc"
      ],
      [
        "FALL_THROUGH",
        "00639dac"
      ]
    ],
    "kind": "store_condition",
    "new": {
      "definition_site": "00639da8",
      "incomplete_value": true,
      "site": "00639db4",
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
                "register:40a0:8"
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
      "site": "00639a04",
      "value": [
        "live",
        "register:101:1"
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
      "unmatched:006399fc",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00639e00"
      ]
    ]
  ],
  "added": [
    [
      "00639dac",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00639e00"
      ]
    ]
  ]
}
~~~


~~~diff
- 006399f0 ["BRANCH", null, ["local:b3:8"]]
+ 00639da0 ["BRANCH", null, ["local:b4:8"]]
- 006399fc ["CBRANCH", null, ["local:b14:8", "register:101:1"]]
- 00639a0c ["INT_RIGHT", "tmp:0:4", ["register:4040:4", "const:0:4"]]
- 00639a0c ["INT_AND", "tmp:1:4", ["tmp:0:4", "const:1:4"]]
- 00639a0c ["INT_EQUAL", "tmp:2:1", ["tmp:1:4", "const:0:4"]]
- 00639a0c ["INT_EQUAL", "tmp:3:1", ["tmp:2:1", "const:0:1"]]
+ 00639dbc ["INT_RIGHT", "tmp:0:4", ["register:4040:4", "const:0:4"]]
+ 00639dbc ["INT_AND", "tmp:1:4", ["tmp:0:4", "const:1:4"]]
+ 00639dbc ["INT_EQUAL", "tmp:2:1", ["tmp:1:4", "const:0:4"]]
+ 00639dbc ["INT_EQUAL", "tmp:3:1", ["tmp:2:1", "const:0:1"]]
~~~


<a id="compare-c732bea1dbb863e5c7709de274c1e05f"></a>

### [`00639a78`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00639/00639a78.md) → [`00639e28`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00639/00639e28.md) FUN_00639e28

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`00639650`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00639/00639650.md) · 呼出先 1件 [`0043b7b8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b7b8.md)
- 新版 呼出元 1件 [`00639a00`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00639/00639a00.md) · 呼出先 1件 [`0043bad8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bad8.md)

変更の種類 call, call_count, cfg_edge_inventory, comparison, comparison_count, constant, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 0.00% / 新版 0.00%

優先判定に残った影響 `unresolved_call_alignment` 1件, `unresolved_store_alignment` 2件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00639a78",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "unmatched:00639a84",
      "PARAM",
      [
        "storage",
        "002b7f8c",
        null,
        "string"
      ]
    ],
    [
      "unmatched:00639a88",
      "UNCONDITIONAL_CALL",
      [
        "mapped_function",
        "0043bad8"
      ]
    ]
  ],
  "added": [
    [
      "00639e28",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "00639e34",
      "PARAM",
      [
        "storage",
        "002b805b",
        null,
        "string"
      ]
    ],
    [
      "00639e38",
      "UNCONDITIONAL_CALL",
      [
        "mapped_function",
        "0043bad8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00639a78 ["COPY", "tmp:0:8", ["register:40e8:8"]]
- 00639a78 ["COPY", "tmp:1:8", ["register:40f0:8"]]
- 00639a78 ["INT_ADD", "register:8:8", ["register:8:8", "const:fffffffffffffff0:8"]]
- 00639a78 ["STORE", null, ["const:1b1:8", "register:8:8", "tmp:0:8"]]
- 00639a7c ["COPY", "register:40e8:8", ["register:8:8"]]
- 00639a80 ["COPY", "register:4000:8", ["const:2b7000:8"]]
~~~


<a id="compare-d1dc3505262ed0fb95d49faee10bcbff"></a>

### [`00639a8c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00639/00639a8c.md) → [`00639e3c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00639/00639e3c.md) FUN_00639e3c

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`00637890`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00637/00637890.md) · 呼出先 3件 [`00494650`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00494/00494650.md) [`00639b34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00639/00639b34.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 1件 [`00637c40`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00637/00637c40.md) · 呼出先 3件 [`00494970`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00494/00494970.md) [`00639ee4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00639/00639ee4.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 branch_condition_or_target, call, call_argument_candidate, call_count, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_call_alignment, unresolved_return_alignment, unresolved_store_alignment

命令の説明率　旧版 66.67% / 新版 66.67%

優先判定に残った影響 `call_argument_candidate` 3件, `unresolved_branch_alignment` 2件, `unresolved_call_alignment` 1件, `unresolved_return_alignment` 1件, `unresolved_store_alignment` 5件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "00639af8",
      "incomplete_value": true,
      "site": "00639b08",
      "value": [
        "LOAD",
        "8",
        [
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
    "ordinal": 1,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "00639afc",
      "incomplete_value": true,
      "site": "00639b08",
      "value": [
        "live",
        "register:4098:8"
      ]
    },
    "ordinal": 1,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00639ecc",
      "incomplete_value": true,
      "site": "00639ed0",
      "value": [
        "live",
        "register:4098:8"
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
      "unmatched:00639a8c",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "unmatched:00639a90",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "unmatched:00639a9c",
      "UNCONDITIONAL_CALL",
      [
        "mapped_function",
        "00639ee4"
      ]
    ]
  ],
  "added": [
    [
      "00639e3c",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "00639e40",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "00639e4c",
      "UNCONDITIONAL_CALL",
      [
        "mapped_function",
        "00639ee4"
      ]
    ]
  ]
}
~~~


~~~diff
- 00639b08 ["INT_ADD", "register:40f0:8", ["const:639b08:8", "const:4:8"]]
- 00639b08 ["CALL", null, ["callee:00494970:8"]]
+ 00639eb8 ["INT_ADD", "register:40f0:8", ["const:639eb8:8", "const:4:8"]]
+ 00639eb8 ["CALL", null, ["callee:00494970:8"]]
- 00639b20 ["INT_ADD", "register:40f0:8", ["const:639b20:8", "const:4:8"]]
- 00639b20 ["CALL", null, ["callee:00c58f50:8"]]
+ 00639ed0 ["INT_ADD", "register:40f0:8", ["const:639ed0:8", "const:4:8"]]
+ 00639ed0 ["CALL", null, ["callee:00c58f50:8"]]
- 00639a8c ["COPY", "tmp:0:8", ["register:40e8:8"]]
- 00639a8c ["COPY", "tmp:1:8", ["register:40f0:8"]]
- 00639a8c ["INT_ADD", "register:8:8", ["register:8:8", "const:ffffffffffffffe0:8"]]
- 00639a8c ["STORE", null, ["const:1b1:8", "register:8:8", "tmp:0:8"]]
~~~


<a id="compare-8d08af510e1d8cee0373ceeb7a47719f"></a>

### [`00639b34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00639/00639b34.md) → [`00639ee4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00639/00639ee4.md) FUN_00639ee4

根拠 `code_and_unique_call_neighborhood` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 2件 [`00639a8c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00639/00639a8c.md) [`00b766d8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b76/00b766d8.md) · 呼出先 1件 [`00c58120`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58120.md)
- 新版 呼出元 2件 [`00639e3c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00639/00639e3c.md) [`00b776cc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b77/00b776cc.md) · 呼出先 1件 [`00c590f0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c590f0.md)

変更の種類 branch_condition_or_target, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, operands_and_dependencies, operation_sequence, return_value_candidate, unresolved_branch_alignment

命令の説明率　旧版 70.77% / 新版 70.77%

優先判定に残った影響 `return_value_candidate` 1件, `unresolved_branch_alignment` 11件

~~~json
[
  {
    "confidence": "limited",
    "kind": "return_value_candidate",
    "new": {
      "definition_site": "00639fcc",
      "incomplete_value": true,
      "site": "00639fe4",
      "value": [
        "live",
        "register:4098:8"
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
      "unmatched:00639bc8",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00639f28"
      ]
    ]
  ],
  "added": [
    [
      "00639f78",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00639f28"
      ]
    ]
  ]
}
~~~


~~~diff
- 00639b54 ["INT_EQUAL", "tmp:0:1", ["register:40b8:8", "const:0:8"]]
- 00639b54 ["CBRANCH", null, ["local:b10:8", "tmp:0:1"]]
+ 00639f04 ["INT_EQUAL", "tmp:0:1", ["register:40b8:8", "const:0:8"]]
+ 00639f04 ["CBRANCH", null, ["local:b11:8", "tmp:0:1"]]
- 00639b70 ["BOOL_NEGATE", "tmp:0:1", ["register:101:1"]]
- 00639b70 ["COPY", "tmp:1:8", ["register:4048:8"]]
- 00639b70 ["CBRANCH", null, ["const:2:4", "tmp:0:1"]]
- 00639b70 ["INT_ADD", "tmp:1:8", ["register:4008:8", "const:1:8"]]
- 00639b74 ["COPY", "tmp:0:8", ["register:4040:8"]]
- 00639b74 ["CBRANCH", null, ["const:2:4", "register:101:1"]]
- 00639b74 ["COPY", "tmp:0:8", ["register:4050:8"]]
- 00639b74 ["COPY", "register:40b0:8", ["tmp:0:8"]]
~~~


<a id="compare-6a05f34ea91c7c93ba2b51014613b111"></a>

### [`00639c3c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00639/00639c3c.md) → [`00639fec`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00639/00639fec.md) FUN_00639fec

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md)

変更の種類 call, call_count, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_call_alignment, unresolved_return_alignment, unresolved_store_alignment

命令の説明率　旧版 0.00% / 新版 0.00%

優先判定に残った影響 `unresolved_call_alignment` 1件, `unresolved_return_alignment` 1件, `unresolved_store_alignment` 3件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00639c3c",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "unmatched:00639c48",
      "UNCONDITIONAL_CALL",
      [
        "mapped_function",
        "00c58f30"
      ]
    ],
    [
      "unmatched:00639c54",
      "DATA",
      [
        "storage",
        "00c73770",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00639fec",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "00639ff8",
      "UNCONDITIONAL_CALL",
      [
        "mapped_function",
        "00c58f30"
      ]
    ],
    [
      "0063a004",
      "DATA",
      [
        "storage",
        "00c74740",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00639c3c ["COPY", "tmp:0:8", ["register:40e8:8"]]
- 00639c3c ["COPY", "tmp:1:8", ["register:40f0:8"]]
- 00639c3c ["INT_ADD", "register:8:8", ["register:8:8", "const:fffffffffffffff0:8"]]
- 00639c3c ["STORE", null, ["const:1b1:8", "register:8:8", "tmp:0:8"]]
- 00639c40 ["COPY", "register:40e8:8", ["register:8:8"]]
- 00639c44 ["COPY", "register:4000:8", ["const:10:8"]]
~~~


<a id="compare-051dc56a6b338c22eee20eb0d76e1a74"></a>

### [`00639c60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00639/00639c60.md) → [`0063a010`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0063a/0063a010.md) FUN_0063a010

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
      "unmatched:00639c68",
      "DATA",
      [
        "storage",
        "00c73770",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "0063a018",
      "DATA",
      [
        "storage",
        "00c74740",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00639c60 ["COPY", "register:4040:8", ["const:c73000:8"]]
- 00639c64 ["COPY", "tmp:0:8", ["const:770:8"]]
- 00639c64 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00639c64 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00639c64 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 00639c68 ["COPY", "tmp:0:8", ["register:4008:8"]]
- 00639c68 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4040:8"]]
~~~


<a id="compare-595e3219ee44658c5ab75af8a99adc67"></a>

### [`00639ca4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00639/00639ca4.md) → [`0063a054`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0063a/0063a054.md) FUN_0063a054

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c54d90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d90.md) [`00c58f20`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f20.md)

変更の種類 branch_condition_or_target, call, call_count, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 82.61% / 新版 82.61%

優先判定に残った影響 `unresolved_branch_alignment` 1件, `unresolved_call_alignment` 1件, `unresolved_store_alignment` 1件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00639cbc",
      "DATA",
      [
        "storage",
        "00c737f0",
        null,
        "undefined *"
      ]
    ],
    [
      "unmatched:00639cc0",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "0063a084"
      ]
    ],
    [
      "unmatched:00639cec",
      "COMPUTED_CALL",
      [
        "unresolved_target",
        null
      ]
    ]
  ],
  "added": [
    [
      "0063a06c",
      "DATA",
      [
        "storage",
        "00c747c0",
        null,
        "undefined *"
      ]
    ],
    [
      "0063a070",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "0063a084"
      ]
    ],
    [
      "0063a09c",
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
- 00639cb4 ["COPY", "register:4040:8", ["const:c73000:8"]]
+ 0063a064 ["COPY", "register:4040:8", ["const:c74000:8"]]
- 00639cb8 ["COPY", "tmp:0:8", ["const:7f0:8"]]
- 00639cb8 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00639cb8 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00639cb8 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 00639cbc ["COPY", "tmp:0:8", ["register:4000:8"]]
- 00639cbc ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4040:8"]]
~~~


<a id="compare-14155321dc3c23817a2d5a95906a71fb"></a>

### [`00639d00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00639/00639d00.md) → [`0063a0b0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0063a/0063a0b0.md) FUN_0063a0b0

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 3件 [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 0件  · 呼出先 3件 [`00c54d90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d90.md) [`00c58f20`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f20.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 branch_condition_or_target, call, call_count, constant, control_flow, local_def_use, operands_and_dependencies, operation_sequence, store_value, unresolved_call_alignment

命令の説明率　旧版 86.96% / 新版 86.96%

優先判定に残った影響 `store_value` 1件, `unresolved_call_alignment` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "0063a0c8",
      "incomplete_value": false,
      "site": "0063a0cc",
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
            "const:7c0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00639d18",
      "incomplete_value": false,
      "site": "00639d1c",
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
            "const:7f0:8"
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
      "0063a0cc",
      "DATA",
      [
        "storage",
        "00c737f0",
        null,
        "undefined *"
      ]
    ],
    [
      "unmatched:00639d40",
      "COMPUTED_CALL",
      [
        "unresolved_target",
        null
      ]
    ]
  ],
  "added": [
    [
      "0063a0cc",
      "DATA",
      [
        "storage",
        "00c747c0",
        null,
        "undefined *"
      ]
    ],
    [
      "0063a0f0",
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
- 00639d14 ["COPY", "register:4040:8", ["const:c73000:8"]]
+ 0063a0c4 ["COPY", "register:4040:8", ["const:c74000:8"]]
- 00639d18 ["COPY", "tmp:0:8", ["const:7f0:8"]]
- 00639d18 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00639d18 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00639d18 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 0063a0c8 ["COPY", "tmp:0:8", ["const:7c0:8"]]
+ 0063a0c8 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 0063a0c8 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 0063a0c8 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 00639d20 ["INT_EQUAL", "tmp:0:1", ["register:40a0:8", "const:0:8"]]
- 00639d20 ["CBRANCH", null, ["local:b4:8", "tmp:0:1"]]
+ 0063a0d0 ["INT_EQUAL", "tmp:0:1", ["register:40a0:8", "const:0:8"]]
+ 0063a0d0 ["CBRANCH", null, ["local:b3:8", "tmp:0:1"]]
~~~


<a id="compare-477c5bb848d06b7c9b4a37a853492b8f"></a>

### [`00639d5c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00639/00639d5c.md) → [`0063a10c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0063a/0063a10c.md) FUN_0063a10c

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c53d70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53d70.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c54d60`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d60.md) [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md)

変更の種類 call_argument_candidate, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_store_alignment

命令の説明率　旧版 80.00% / 新版 80.00%

優先判定に残った影響 `call_argument_candidate` 1件, `unresolved_branch_alignment` 1件, `unresolved_store_alignment` 3件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "00639d6c",
      "incomplete_value": false,
      "site": "00639d70",
      "value": [
        "leaf",
        "const:18:8"
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
      "unmatched:00639d80",
      "DATA",
      [
        "storage",
        "00c737f0",
        null,
        "undefined *"
      ]
    ],
    [
      "unmatched:00639d88",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "0063a150"
      ]
    ]
  ],
  "added": [
    [
      "0063a130",
      "DATA",
      [
        "storage",
        "00c747c0",
        null,
        "undefined *"
      ]
    ],
    [
      "0063a138",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "0063a150"
      ]
    ]
  ]
}
~~~


~~~diff
- 00639d70 ["INT_ADD", "register:40f0:8", ["const:639d70:8", "const:4:8"]]
- 00639d70 ["CALL", null, ["callee:00c58f30:8"]]
+ 0063a120 ["INT_ADD", "register:40f0:8", ["const:63a120:8", "const:4:8"]]
+ 0063a120 ["CALL", null, ["callee:00c58f30:8"]]
- 00639d78 ["COPY", "register:4048:8", ["const:c73000:8"]]
+ 0063a128 ["COPY", "register:4048:8", ["const:c74000:8"]]
- 00639d7c ["COPY", "tmp:0:8", ["const:7f0:8"]]
- 00639d7c ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 00639d7c ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 00639d7c ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
~~~


<a id="compare-a0977804e253df357a4d60d98073abb5"></a>

### [`00639dac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00639/00639dac.md) → [`0063a15c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0063a/0063a15c.md) FUN_0063a15c

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c53d70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53d70.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c54d60`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d60.md)

変更の種類 branch_condition_or_target, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, store_condition, unresolved_branch_alignment, unresolved_store_alignment

命令の説明率　旧版 53.85% / 新版 53.85%

優先判定に残った影響 `store_condition` 2件, `unresolved_branch_alignment` 1件, `unresolved_store_alignment` 3件

~~~json
[
  {
    "confidence": "limited",
    "guard": [
      [
        "FALL_THROUGH",
        "00639dc0"
      ],
      [
        "FALL_THROUGH",
        "0063a170"
      ]
    ],
    "kind": "store_condition",
    "new": {
      "definition_site": "0063a170",
      "incomplete_value": true,
      "site": "0063a174",
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
      "definition_site": "00639dc0",
      "incomplete_value": true,
      "site": "00639dc4",
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
  },
  {
    "confidence": "limited",
    "guard": [
      [
        "FALL_THROUGH",
        "00639dc0"
      ],
      [
        "FALL_THROUGH",
        "0063a170"
      ]
    ],
    "kind": "store_condition",
    "new": {
      "definition_site": "0063a170",
      "incomplete_value": true,
      "site": "0063a174",
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
      "definition_site": "00639dc0",
      "incomplete_value": true,
      "site": "00639dc4",
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
      "unmatched:00639db8",
      "DATA",
      [
        "storage",
        "00c737f0",
        null,
        "undefined *"
      ]
    ],
    [
      "unmatched:00639dc0",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "0063a18c"
      ]
    ]
  ],
  "added": [
    [
      "0063a168",
      "DATA",
      [
        "storage",
        "00c747c0",
        null,
        "undefined *"
      ]
    ],
    [
      "0063a170",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "0063a18c"
      ]
    ]
  ]
}
~~~


~~~diff
- 00639dac ["INT_ADD", "tmp:0:8", ["register:4000:8", "const:8:8"]]
- 00639dac ["LOAD", "tmp:1:8", ["const:1b1:8", "tmp:0:8"]]
- 00639dac ["INT_ADD", "tmp:2:8", ["tmp:0:8", "const:8:8"]]
- 00639dac ["LOAD", "tmp:3:8", ["const:1b1:8", "tmp:2:8"]]
- 00639db0 ["COPY", "register:4048:8", ["const:c73000:8"]]
- 00639db4 ["COPY", "tmp:0:8", ["const:7f0:8"]]
- 00639db4 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 00639db4 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 00639db4 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
~~~


<a id="compare-fb75cfb1856d693ee2d3e409fea630ea"></a>

### [`00639de0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00639/00639de0.md) → [`0063a190`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0063a/0063a190.md) FUN_0063a190

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 1件 [`00638e2c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00638/00638e2c.md) · 呼出先 2件 [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md)
- 新版 呼出元 1件 [`006391dc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00639/006391dc.md) · 呼出先 2件 [`00c54d90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d90.md) [`00c58f20`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f20.md)

変更の種類 branch_condition_or_target, call, call_count, cfg_edge_inventory, constant, control_flow, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 75.00% / 新版 75.00%

優先判定に残った影響 `unresolved_call_alignment` 1件, `unresolved_store_alignment` 3件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00639de0",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "unmatched:00639de4",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "unmatched:00639e1c",
      "COMPUTED_CALL",
      [
        "unresolved_target",
        null
      ]
    ]
  ],
  "added": [
    [
      "0063a190",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "0063a194",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "0063a1cc",
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
- 00639de0 ["COPY", "tmp:0:8", ["register:40e8:8"]]
- 00639de0 ["COPY", "tmp:1:8", ["register:40f0:8"]]
- 00639de0 ["INT_ADD", "register:8:8", ["register:8:8", "const:ffffffffffffffe0:8"]]
- 00639de0 ["STORE", null, ["const:1b1:8", "register:8:8", "tmp:0:8"]]
- 00639de4 ["INT_ADD", "tmp:0:8", ["register:8:8", "const:10:8"]]
- 00639de4 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4098:8"]]
- 00639de8 ["COPY", "register:40e8:8", ["register:8:8"]]
~~~


<a id="compare-23d969911eb5629f68c0f923dbec5212"></a>

### [`00639e30`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00639/00639e30.md) → [`0063a1e0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0063a/0063a1e0.md) FUN_0063a1e0

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 1件 [`00638e2c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00638/00638e2c.md) · 呼出先 3件 [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 1件 [`006391dc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00639/006391dc.md) · 呼出先 3件 [`00c54d90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d90.md) [`00c58f20`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f20.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 branch_condition_or_target, call, call_count, cfg_edge_inventory, constant, control_flow, local_def_use, memory_read, memory_read_count, operands_and_dependencies, operation_sequence, unresolved_call_alignment

命令の説明率　旧版 90.00% / 新版 90.00%

優先判定に残った影響 `unresolved_call_alignment` 1件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00639e64",
      "COMPUTED_CALL",
      [
        "unresolved_target",
        null
      ]
    ]
  ],
  "added": [
    [
      "0063a214",
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
- 00639e44 ["INT_EQUAL", "tmp:0:1", ["register:40a0:8", "const:0:8"]]
- 00639e44 ["CBRANCH", null, ["local:b3:8", "tmp:0:1"]]
+ 0063a1f4 ["INT_EQUAL", "tmp:0:1", ["register:40a0:8", "const:0:8"]]
+ 0063a1f4 ["CBRANCH", null, ["local:b4:8", "tmp:0:1"]]
- 00639e50 ["INT_ADD", "register:40f0:8", ["const:639e50:8", "const:4:8"]]
- 00639e50 ["CALL", null, ["callee:00c54d90:8"]]
+ 0063a200 ["INT_ADD", "register:40f0:8", ["const:63a200:8", "const:4:8"]]
+ 0063a200 ["CALL", null, ["callee:00c54d90:8"]]
- 00639e54 ["INT_NOTEQUAL", "tmp:0:1", ["register:4000:8", "const:0:8"]]
- 00639e54 ["CBRANCH", null, ["local:b3:8", "tmp:0:1"]]
+ 0063a204 ["INT_NOTEQUAL", "tmp:0:1", ["register:4000:8", "const:0:8"]]
+ 0063a204 ["CBRANCH", null, ["local:b4:8", "tmp:0:1"]]
~~~


<a id="compare-232a9e8e2438d7e8e07fbd68c2e2797e"></a>

### [`00639e80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00639/00639e80.md) → [`0063a230`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0063a/0063a230.md) FUN_0063a230

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 4件 [`00c53d70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53d70.md) [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)
- 新版 呼出元 0件  · 呼出先 4件 [`00c54d60`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d60.md) [`00c54d90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d90.md) [`00c58f20`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f20.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md)

変更の種類 branch_condition_or_target, call, call_count, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_call_alignment

命令の説明率　旧版 85.37% / 新版 85.37%

優先判定に残った影響 `unresolved_branch_alignment` 1件, `unresolved_call_alignment` 2件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00639ea8",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "0063a268"
      ]
    ],
    [
      "unmatched:00639ec8",
      "COMPUTED_CALL",
      [
        "unresolved_target",
        null
      ]
    ],
    [
      "unmatched:00639ef0",
      "COMPUTED_CALL",
      [
        "unresolved_target",
        null
      ]
    ]
  ],
  "added": [
    [
      "0063a258",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "0063a268"
      ]
    ],
    [
      "0063a278",
      "COMPUTED_CALL",
      [
        "unresolved_target",
        null
      ]
    ],
    [
      "0063a2a0",
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
- 00639ea8 ["INT_EQUAL", "tmp:0:1", ["register:4040:8", "const:0:8"]]
- 00639ea8 ["CBRANCH", null, ["local:b3:8", "tmp:0:1"]]
- 00639eb4 ["INT_ADD", "register:40f0:8", ["const:639eb4:8", "const:4:8"]]
- 00639eb4 ["CALL", null, ["callee:00c54d60:8"]]
+ 0063a264 ["INT_ADD", "register:40f0:8", ["const:63a264:8", "const:4:8"]]
+ 0063a264 ["CALL", null, ["callee:00c54d60:8"]]
- 00639ec0 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:38:8"]]
- 00639ec0 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-0c17ab8400cad8eb56cda89030393b75"></a>

### [`00639f70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00639/00639f70.md) → [`0063a320`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0063a/0063a320.md) FUN_0063a320

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 3件 [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 0件  · 呼出先 3件 [`00c54d90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d90.md) [`00c58f20`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f20.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 93.33% / 新版 93.33%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "0063a338",
      "incomplete_value": false,
      "site": "0063a33c",
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
            "const:840:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00639f88",
      "incomplete_value": false,
      "site": "00639f8c",
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
            "const:870:8"
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
      "0063a33c",
      "DATA",
      [
        "storage",
        "00c73870",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "0063a33c",
      "DATA",
      [
        "storage",
        "00c74840",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00639f84 ["COPY", "register:4040:8", ["const:c73000:8"]]
+ 0063a334 ["COPY", "register:4040:8", ["const:c74000:8"]]
- 00639f88 ["COPY", "tmp:0:8", ["const:870:8"]]
- 00639f88 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00639f88 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00639f88 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 0063a338 ["COPY", "tmp:0:8", ["const:840:8"]]
+ 0063a338 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 0063a338 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 0063a338 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 00639f9c ["INT_ADD", "register:40f0:8", ["const:639f9c:8", "const:4:8"]]
- 00639f9c ["CALL", null, ["callee:00c54d90:8"]]
+ 0063a34c ["INT_ADD", "register:40f0:8", ["const:63a34c:8", "const:4:8"]]
+ 0063a34c ["CALL", null, ["callee:00c54d90:8"]]
~~~


<a id="compare-4662b10e4caaaf4cf39d5b38938c32ef"></a>

### [`00639fe8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00639/00639fe8.md) → [`0063a398`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0063a/0063a398.md) FUN_0063a398

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 3件 [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 0件  · 呼出先 3件 [`00c54d90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d90.md) [`00c58f20`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f20.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 93.33% / 新版 93.33%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "0063a3b0",
      "incomplete_value": false,
      "site": "0063a3b4",
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
            "const:840:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0063a000",
      "incomplete_value": false,
      "site": "0063a004",
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
            "const:870:8"
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
      "0063a3b4",
      "DATA",
      [
        "storage",
        "00c73870",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "0063a3b4",
      "DATA",
      [
        "storage",
        "00c74840",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00639ffc ["COPY", "register:4040:8", ["const:c73000:8"]]
+ 0063a3ac ["COPY", "register:4040:8", ["const:c74000:8"]]
- 0063a000 ["COPY", "tmp:0:8", ["const:870:8"]]
- 0063a000 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 0063a000 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 0063a000 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 0063a3b0 ["COPY", "tmp:0:8", ["const:840:8"]]
+ 0063a3b0 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 0063a3b0 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 0063a3b0 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 0063a014 ["INT_ADD", "register:40f0:8", ["const:63a014:8", "const:4:8"]]
- 0063a014 ["CALL", null, ["callee:00c54d90:8"]]
+ 0063a3c4 ["INT_ADD", "register:40f0:8", ["const:63a3c4:8", "const:4:8"]]
+ 0063a3c4 ["CALL", null, ["callee:00c54d90:8"]]
~~~


<a id="compare-068869250acd7dff78c07fead8180aaf"></a>

### [`0063a060`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0063a/0063a060.md) → [`0063a410`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0063a/0063a410.md) FUN_0063a410

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `bounded` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 3件 [`0043bb60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bb60.md) [`00c53d70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53d70.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)
- 新版 呼出元 0件  · 呼出先 3件 [`0043be80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043be80.md) [`00c54d60`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d60.md) [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md)

変更の種類 branch_condition_or_target, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_store_alignment

命令の説明率　旧版 78.12% / 新版 78.12%

優先判定に残った影響 `unresolved_store_alignment` 6件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:0063a060",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "unmatched:0063a064",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "unmatched:0063a090",
      "DATA",
      [
        "storage",
        "00c73870",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "0063a410",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "0063a414",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "0063a440",
      "DATA",
      [
        "storage",
        "00c74840",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 0063a060 ["COPY", "tmp:0:8", ["register:40e8:8"]]
- 0063a060 ["COPY", "tmp:1:8", ["register:40f0:8"]]
- 0063a060 ["INT_ADD", "register:8:8", ["register:8:8", "const:ffffffffffffffe0:8"]]
- 0063a060 ["STORE", null, ["const:1b1:8", "register:8:8", "tmp:0:8"]]
- 0063a064 ["COPY", "tmp:0:8", ["register:40a0:8"]]
- 0063a064 ["COPY", "tmp:1:8", ["register:4098:8"]]
- 0063a064 ["INT_ADD", "tmp:2:8", ["register:8:8", "const:10:8"]]
- 0063a064 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
- 0063a068 ["COPY", "register:40e8:8", ["register:8:8"]]
~~~


<a id="compare-dbeb0d39bb5a3a2d286386282c6b85c6"></a>

### [`0063a0f4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0063a/0063a0f4.md) → [`0063a4a4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0063a/0063a4a4.md) FUN_0063a4a4

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `bounded` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 2件 [`0043bb60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bb60.md) [`00c53d70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53d70.md)
- 新版 呼出元 0件  · 呼出先 2件 [`0043be80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043be80.md) [`00c54d60`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d60.md)

変更の種類 constant, operands_and_dependencies, operation_sequence, store_value

命令の説明率　旧版 89.66% / 新版 89.66%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "0063a4c4",
      "incomplete_value": false,
      "site": "0063a4c4",
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
            "const:840:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0063a114",
      "incomplete_value": false,
      "site": "0063a114",
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
            "const:870:8"
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
      "0063a4c4",
      "DATA",
      [
        "storage",
        "00c73870",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "0063a4c4",
      "DATA",
      [
        "storage",
        "00c74840",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 0063a104 ["COPY", "register:4048:8", ["const:c73000:8"]]
+ 0063a4b4 ["COPY", "register:4048:8", ["const:c74000:8"]]
- 0063a108 ["COPY", "tmp:0:8", ["const:870:8"]]
- 0063a108 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 0063a108 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 0063a108 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 0063a4b8 ["COPY", "tmp:0:8", ["const:840:8"]]
+ 0063a4b8 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 0063a4b8 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 0063a4b8 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
- 0063a110 ["COPY", "register:40a0:8", ["register:4000:8"]]
~~~


<a id="compare-d043fef8a3d13f38d09d8c6ab47f3ca6"></a>

### [`0063a1d4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0063a/0063a1d4.md) → [`0063a584`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0063a/0063a584.md) FUN_0063a584

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 1件 [`00638e2c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00638/00638e2c.md) · 呼出先 3件 [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 1件 [`006391dc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00639/006391dc.md) · 呼出先 3件 [`00c54d90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d90.md) [`00c58f20`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f20.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 call, call_count, cfg_edge_inventory, constant, local_def_use, memory_read, memory_read_count, operands_and_dependencies, operation_sequence, unresolved_call_alignment

命令の説明率　旧版 92.59% / 新版 92.59%

アドレスに依存する影響 `unresolved_call_alignment` 1件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:0063a228",
      "COMPUTED_CALL",
      [
        "unresolved_target",
        null
      ]
    ]
  ],
  "added": [
    [
      "0063a5d8",
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
- 0063a1f4 ["INT_ADD", "register:40f0:8", ["const:63a1f4:8", "const:4:8"]]
- 0063a1f4 ["CALL", null, ["callee:00c54d90:8"]]
+ 0063a5a4 ["INT_ADD", "register:40f0:8", ["const:63a5a4:8", "const:4:8"]]
+ 0063a5a4 ["CALL", null, ["callee:00c54d90:8"]]
- 0063a208 ["INT_ADD", "register:40f0:8", ["const:63a208:8", "const:4:8"]]
- 0063a208 ["CALL", null, ["callee:00c58f50:8"]]
+ 0063a5b8 ["INT_ADD", "register:40f0:8", ["const:63a5b8:8", "const:4:8"]]
+ 0063a5b8 ["CALL", null, ["callee:00c58f50:8"]]
- 0063a224 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:10:8"]]
- 0063a224 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-34986ce5ec731868ea05b33f4c455587"></a>

### [`0063a240`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0063a/0063a240.md) → [`0063a5f0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0063a/0063a5f0.md) FUN_0063a5f0

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 9件 [`00481470`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00481/00481470.md) [`0048243c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00482/0048243c.md) [`00482578`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00482/00482578.md) [`00482b4c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00482/00482b4c.md) [`00c53d70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53d70.md)
- 新版 呼出元 0件  · 呼出先 9件 [`00481790`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00481/00481790.md) [`0048275c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00482/0048275c.md) [`00482898`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00482/00482898.md) [`00482e6c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00482/00482e6c.md) [`00c54d60`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d60.md)

変更の種類 branch_condition_or_target, call, call_count, constant, control_flow, local_def_use, memory_read, memory_read_count, operands_and_dependencies, operation_sequence, store_value, unresolved_branch_alignment, unresolved_call_alignment

命令の説明率　旧版 90.53% / 新版 90.53%

優先判定に残った影響 `store_value` 1件, `unresolved_branch_alignment` 1件, `unresolved_call_alignment` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "0063a6a0",
      "incomplete_value": false,
      "site": "0063a6a4",
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
                "const:c66000:8"
              ],
              [
                "leaf",
                "const:5d0:8"
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
      "definition_site": "0063a2f0",
      "incomplete_value": false,
      "site": "0063a2f4",
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
                "const:c65000:8"
              ],
              [
                "leaf",
                "const:600:8"
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
      "0063a6a4",
      "DATA",
      [
        "storage",
        "00c65610",
        null,
        "undefined *"
      ]
    ],
    [
      "unmatched:0063a3a4",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "0063a79c"
      ]
    ],
    [
      "unmatched:0063a318",
      "COMPUTED_CALL",
      [
        "unresolved_target",
        null
      ]
    ]
  ],
  "added": [
    [
      "0063a6a4",
      "DATA",
      [
        "storage",
        "00c665e0",
        null,
        "undefined *"
      ]
    ],
    [
      "0063a754",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "0063a79c"
      ]
    ],
    [
      "0063a6c8",
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
- 0063a260 ["INT_RIGHT", "tmp:0:4", ["register:4040:4", "const:0:4"]]
- 0063a260 ["INT_AND", "tmp:1:4", ["tmp:0:4", "const:1:4"]]
- 0063a260 ["INT_EQUAL", "tmp:2:1", ["tmp:1:4", "const:0:4"]]
- 0063a260 ["INT_EQUAL", "tmp:3:1", ["tmp:2:1", "const:0:1"]]
+ 0063a610 ["INT_RIGHT", "tmp:0:4", ["register:4040:4", "const:0:4"]]
+ 0063a610 ["INT_AND", "tmp:1:4", ["tmp:0:4", "const:1:4"]]
+ 0063a610 ["INT_EQUAL", "tmp:2:1", ["tmp:1:4", "const:0:4"]]
+ 0063a610 ["INT_EQUAL", "tmp:3:1", ["tmp:2:1", "const:0:1"]]
- 0063a26c ["INT_ADD", "register:40f0:8", ["const:63a26c:8", "const:4:8"]]
- 0063a26c ["CALL", null, ["callee:00481790:8"]]
+ 0063a61c ["INT_ADD", "register:40f0:8", ["const:63a61c:8", "const:4:8"]]
+ 0063a61c ["CALL", null, ["callee:00481790:8"]]
- 0063a27c ["INT_ADD", "register:40f0:8", ["const:63a27c:8", "const:4:8"]]
- 0063a27c ["CALL", null, ["callee:0048275c:8"]]
+ 0063a62c ["INT_ADD", "register:40f0:8", ["const:63a62c:8", "const:4:8"]]
+ 0063a62c ["CALL", null, ["callee:0048275c:8"]]
~~~


<a id="compare-d0ddce0ca5d0c439c75cfa9a2ff5b287"></a>

### [`0063a418`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0063a/0063a418.md) → [`0063a7c8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0063a/0063a7c8.md) _INIT_81

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 5件 [`0043aeb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043a/0043aeb0.md) [`0043b838`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b838.md) [`00c57f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f00.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)
- 新版 呼出元 0件  · 呼出先 5件 [`0043b1d0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043b1d0.md) [`0043bb58`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bb58.md) [`00c58ed0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58ed0.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md)

変更の種類 call_argument_candidate, comparison, comparison_count, constant, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, store_value, unresolved_store_alignment

命令の説明率　旧版 65.54% / 新版 65.54%

優先判定に残った影響 `call_argument_candidate` 4件, `store_value` 2件, `unresolved_store_alignment` 30件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "0063a804",
      "incomplete_value": true,
      "site": "0063a820",
      "value": [
        "LOAD",
        "16",
        [
          [
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
      "definition_site": "0063a454",
      "incomplete_value": true,
      "site": "0063a470",
      "value": [
        "LOAD",
        "16",
        [
          [
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
      "definition_site": "0063a828",
      "incomplete_value": true,
      "site": "0063a844",
      "value": [
        "LOAD",
        "16",
        [
          [
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
      "definition_site": "0063a478",
      "incomplete_value": true,
      "site": "0063a494",
      "value": [
        "LOAD",
        "16",
        [
          [
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
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "0063a914",
      "incomplete_value": true,
      "site": "0063a928",
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
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "0063a804",
      "READ",
      [
        "storage",
        "002b7f66",
        null,
        "string"
      ]
    ],
    [
      "0063a828",
      "READ",
      [
        "storage",
        "002b7f79",
        null,
        "string"
      ]
    ],
    [
      "0063a848",
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
      "0063a804",
      "READ",
      [
        "storage",
        "002b8035",
        null,
        "string"
      ]
    ],
    [
      "0063a828",
      "READ",
      [
        "storage",
        "002b8048",
        null,
        "string"
      ]
    ],
    [
      "0063a848",
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
- 0063a578 ["INT_ADD", "register:40f0:8", ["const:63a578:8", "const:4:8"]]
- 0063a578 ["CALL", null, ["callee:0043bb58:8"]]
+ 0063a928 ["INT_ADD", "register:40f0:8", ["const:63a928:8", "const:4:8"]]
+ 0063a928 ["CALL", null, ["callee:0043bb58:8"]]
- 0063a64c ["INT_ADD", "register:40f0:8", ["const:63a64c:8", "const:4:8"]]
- 0063a64c ["CALL", null, ["callee:00c58ed0:8"]]
+ 0063a9fc ["INT_ADD", "register:40f0:8", ["const:63a9fc:8", "const:4:8"]]
+ 0063a9fc ["CALL", null, ["callee:00c58ed0:8"]]
- 0063a440 ["COPY", "register:4098:8", ["const:ca6000:8"]]
+ 0063a7f0 ["COPY", "register:4098:8", ["const:ca7000:8"]]
~~~


<a id="compare-70062dc6e04f14c386f0591c02634c65"></a>

### [`0063a7e4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0063a/0063a7e4.md) → [`0063ab94`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0063a/0063ab94.md) FUN_0063ab94

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 1件 [`0064da2c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0064d/0064da2c.md) · 呼出先 17件 [`00447f34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00447/00447f34.md) [`0046e9b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046e/0046e9b0.md) [`0046f0f4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046f/0046f0f4.md) [`0046f724`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046f/0046f724.md) [`0046f784`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046f/0046f784.md)
- 新版 呼出元 1件 [`0064dddc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0064d/0064dddc.md) · 呼出先 17件 [`00448254`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00448/00448254.md) [`0046ecd0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0046e/0046ecd0.md) [`0046f414`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0046f/0046f414.md) [`0046fa44`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0046f/0046fa44.md) [`0046faa4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0046f/0046faa4.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, local_def_use, memory_read, memory_read_count, operands_and_dependencies, operation_sequence, store_value, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 81.25% / 新版 81.25%

優先判定に残った影響 `call_argument_candidate` 5件, `store_value` 9件, `unresolved_branch_alignment` 1件, `unresolved_call_alignment` 4件, `unresolved_store_alignment` 7件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "0063abdc",
      "incomplete_value": true,
      "site": "0063abec",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:348:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0063a82c",
      "incomplete_value": true,
      "site": "0063a83c",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:308:8"
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
      "definition_site": "0063abe0",
      "incomplete_value": true,
      "site": "0063abf0",
      "value": [
        "LOAD",
        "16",
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
      "definition_site": "0063a830",
      "incomplete_value": true,
      "site": "0063a840",
      "value": [
        "LOAD",
        "16",
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
      "definition_site": "0063abe4",
      "incomplete_value": true,
      "site": "0063abf4",
      "value": [
        "LOAD",
        "16",
        [
          [
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
    "old": {
      "definition_site": "0063a834",
      "incomplete_value": true,
      "site": "0063a844",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:a40:8"
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
      "unmatched:0063a810",
      "READ",
      [
        "storage",
        "00ca5038",
        null,
        "undefined1"
      ]
    ],
    [
      "0063abdc",
      "READ",
      [
        "storage",
        "002a1308",
        null,
        "string"
      ]
    ],
    [
      "0063abe0",
      "READ",
      [
        "storage",
        "002a1317",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "0063abc0",
      "READ",
      [
        "storage",
        "00ca5ff8",
        null,
        "undefined1"
      ]
    ],
    [
      "0063abdc",
      "READ",
      [
        "storage",
        "002a1348",
        null,
        "string"
      ]
    ],
    [
      "0063abe0",
      "READ",
      [
        "storage",
        "002a1357",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 0063a8c0 ["INT_ADD", "register:40f0:8", ["const:63a8c0:8", "const:4:8"]]
- 0063a8c0 ["CALL", null, ["callee:0047e96c:8"]]
+ 0063ac70 ["INT_ADD", "register:40f0:8", ["const:63ac70:8", "const:4:8"]]
+ 0063ac70 ["CALL", null, ["callee:0047e96c:8"]]
- 0063a9f4 ["INT_ADD", "register:40f0:8", ["const:63a9f4:8", "const:4:8"]]
- 0063a9f4 ["CALL", null, ["callee:0046ecd0:8"]]
+ 0063ada4 ["INT_ADD", "register:40f0:8", ["const:63ada4:8", "const:4:8"]]
+ 0063ada4 ["CALL", null, ["callee:0046ecd0:8"]]
- 0063aa58 ["INT_ADD", "register:40f0:8", ["const:63aa58:8", "const:4:8"]]
- 0063aa58 ["CALL", null, ["callee:0046ecd0:8"]]
+ 0063ae08 ["INT_ADD", "register:40f0:8", ["const:63ae08:8", "const:4:8"]]
+ 0063ae08 ["CALL", null, ["callee:0046ecd0:8"]]
~~~


<a id="compare-efd304617fd1ab9254cfed7c68edccbd"></a>

### [`0063ae18`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0063a/0063ae18.md) → [`0063b1c8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0063b/0063b1c8.md) FUN_0063b1c8

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 2件 [`0064ecf8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0064e/0064ecf8.md) [`006b2bb4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006b2/006b2bb4.md) · 呼出先 7件 [`0046ca04`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046c/0046ca04.md) [`0046d7f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046d/0046d7f0.md) [`0046ee98`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046e/0046ee98.md) [`0063a7a8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0063a/0063a7a8.md) [`006dc8bc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006dc/006dc8bc.md)
- 新版 呼出元 2件 [`0064f0a8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0064f/0064f0a8.md) [`006b2f64`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/006b2/006b2f64.md) · 呼出先 7件 [`0046cd24`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0046c/0046cd24.md) [`0046db10`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0046d/0046db10.md) [`0046f1b8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0046f/0046f1b8.md) [`0063ab58`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0063a/0063ab58.md) [`006dcc6c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/006dc/006dcc6c.md)

変更の種類 branch_condition_or_target, call, call_argument_candidate, call_count, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, store_condition, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 65.07% / 新版 65.07%

優先判定に残った影響 `call_argument_candidate` 2件, `store_condition` 1件, `unresolved_branch_alignment` 13件, `unresolved_call_alignment` 28件, `unresolved_store_alignment` 10件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "0063b2bc",
      "incomplete_value": true,
      "site": "0063b2c8",
      "value": [
        "live",
        "register:4098:8"
      ]
    },
    "old": null,
    "ordinal": 7,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "0063b048",
      "incomplete_value": true,
      "site": "0063b04c",
      "value": [
        "live",
        "register:4098:8"
      ]
    },
    "ordinal": 16,
    "slot": 1
  },
  {
    "confidence": "limited",
    "guard": [
      [
        "FALL_THROUGH",
        "0063aec0"
      ],
      [
        "FALL_THROUGH",
        "0063b270"
      ]
    ],
    "kind": "store_condition",
    "new": {
      "definition_site": "0063b270",
      "incomplete_value": true,
      "site": "0063b274",
      "value": [
        "INT_NOTEQUAL",
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
      "definition_site": "0063aec0",
      "incomplete_value": true,
      "site": "0063aec4",
      "value": [
        "INT_NOTEQUAL",
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
                "register:40a8:4"
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
      "unmatched:0063ae18",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "unmatched:0063ae1c",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "unmatched:0063ae20",
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
      "0063b1c8",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "0063b1cc",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "0063b1d0",
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
- 0063af18 ["INT_ADD", "register:40f0:8", ["const:63af18:8", "const:4:8"]]
- 0063af18 ["CALL", null, ["callee:006dcc8c:8"]]
+ 0063b2c8 ["INT_ADD", "register:40f0:8", ["const:63b2c8:8", "const:4:8"]]
+ 0063b2c8 ["CALL", null, ["callee:006dcc8c:8"]]
- 0063b04c ["INT_ADD", "register:40f0:8", ["const:63b04c:8", "const:4:8"]]
- 0063b04c ["CALL", null, ["callee:006dcc8c:8"]]
+ 0063b3fc ["INT_ADD", "register:40f0:8", ["const:63b3fc:8", "const:4:8"]]
+ 0063b3fc ["CALL", null, ["callee:006dcc8c:8"]]
- 0063b274 ["INT_ADD", "register:40f0:8", ["const:63b274:8", "const:4:8"]]
- 0063b274 ["CALL", null, ["callee:0046cd24:8"]]
+ 0063b624 ["INT_ADD", "register:40f0:8", ["const:63b624:8", "const:4:8"]]
+ 0063b624 ["CALL", null, ["callee:0046cd24:8"]]
~~~


<a id="compare-a96b33d7f709104c3332968c504c155b"></a>

### [`0063b674`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0063b/0063b674.md) → [`0063ba24`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0063b/0063ba24.md) FUN_0063ba24

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 2件 [`0063c60c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0063c/0063c60c.md) [`0063cd5c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0063c/0063cd5c.md) · 呼出先 6件 [`0046ca04`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046c/0046ca04.md) [`0046d7f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046d/0046d7f0.md) [`0046ee98`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046e/0046ee98.md) [`00470120`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00470/00470120.md) [`0063b804`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0063b/0063b804.md)
- 新版 呼出元 2件 [`0063c9bc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0063c/0063c9bc.md) [`0063d10c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0063d/0063d10c.md) · 呼出先 6件 [`0046cd24`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0046c/0046cd24.md) [`0046db10`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0046d/0046db10.md) [`0046f1b8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0046f/0046f1b8.md) [`00470440`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00470/00470440.md) [`0063bbb4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0063b/0063bbb4.md)

変更の種類 branch_condition_or_target, cfg_edge_inventory, constant, control_flow, control_flow_count, local_def_use, operands_and_dependencies, operation_sequence, store_condition, unresolved_branch_alignment

命令の説明率　旧版 96.00% / 新版 96.00%

優先判定に残った影響 `store_condition` 2件, `unresolved_branch_alignment` 1件

~~~json
[
  {
    "confidence": "limited",
    "guard": [
      [
        "CONDITIONAL_JUMP",
        "0063b794"
      ],
      [
        "CONDITIONAL_JUMP",
        "0063bb44"
      ]
    ],
    "kind": "store_condition",
    "new": {
      "definition_site": "0063bb30",
      "incomplete_value": true,
      "site": "0063bb70",
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
                "register:40a0:4"
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
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "0063b7c0",
      "value": [
        "live",
        "register:101:1"
      ]
    },
    "ordinal": 20,
    "slot": 0
  },
  {
    "confidence": "limited",
    "guard": [
      [
        "CONDITIONAL_JUMP",
        "0063b794"
      ],
      [
        "CONDITIONAL_JUMP",
        "0063bb44"
      ]
    ],
    "kind": "store_condition",
    "new": {
      "definition_site": "0063bb30",
      "incomplete_value": true,
      "site": "0063bb74",
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
                "register:40a0:4"
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
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "0063b7c4",
      "value": [
        "live",
        "register:101:1"
      ]
    },
    "ordinal": 21,
    "slot": 0
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "0063ba48",
      "DATA",
      [
        "storage",
        "00434fd0",
        null,
        "byte[35]"
      ]
    ],
    [
      "0063ba4c",
      "DATA",
      [
        "storage",
        "00434fc8",
        null,
        "byte[35]"
      ]
    ],
    [
      "unmatched:0063b794",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "0063bb68"
      ]
    ]
  ],
  "added": [
    [
      "0063ba48",
      "DATA",
      [
        "storage",
        "00434fd0",
        null,
        "byte[51]"
      ]
    ],
    [
      "0063ba4c",
      "DATA",
      [
        "storage",
        "00434fc8",
        null,
        "byte[51]"
      ]
    ],
    [
      "0063bb44",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "0063bb68"
      ]
    ]
  ]
}
~~~


~~~diff
- 0063b68c ["INT_ADD", "register:40f0:8", ["const:63b68c:8", "const:4:8"]]
- 0063b68c ["CALL", null, ["callee:008524fc:8"]]
+ 0063ba3c ["INT_ADD", "register:40f0:8", ["const:63ba3c:8", "const:4:8"]]
+ 0063ba3c ["CALL", null, ["callee:008524fc:8"]]
- 0063b6a0 ["INT_SUB", "register:4040:8", ["register:4048:8", "register:4040:8"]]
- 0063b6a4 ["COPY", "register:4048:8", ["const:6db7:8"]]
~~~


<a id="compare-7030581d8fd4bc6b3fb2f0edfba07d40"></a>

### [`0063b804`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0063b/0063b804.md) → [`0063bbb4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0063b/0063bbb4.md) FUN_0063bbb4

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 2件 [`0063b674`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0063b/0063b674.md) [`0064da2c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0064d/0064da2c.md) · 呼出先 16件 [`00447f34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00447/00447f34.md) [`0046e9b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046e/0046e9b0.md) [`0046f0f4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046f/0046f0f4.md) [`0046f724`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046f/0046f724.md) [`0046f784`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046f/0046f784.md)
- 新版 呼出元 2件 [`0063ba24`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0063b/0063ba24.md) [`0064dddc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0064d/0064dddc.md) · 呼出先 16件 [`00448254`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00448/00448254.md) [`0046ecd0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0046e/0046ecd0.md) [`0046f414`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0046f/0046f414.md) [`0046fa44`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0046f/0046fa44.md) [`0046faa4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0046f/0046faa4.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, store_value, unresolved_store_alignment

命令の説明率　旧版 84.23% / 新版 84.23%

優先判定に残った影響 `call_argument_candidate` 3件, `store_value` 3件, `unresolved_store_alignment` 20件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "0063be0c",
      "incomplete_value": true,
      "site": "0063be24",
      "value": [
        "LOAD",
        "16",
        [
          [
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
      "definition_site": "0063ba5c",
      "incomplete_value": true,
      "site": "0063ba74",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:cf0:8"
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
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "0063be18",
      "incomplete_value": true,
      "site": "0063be28",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:e0:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0063ba68",
      "incomplete_value": true,
      "site": "0063ba78",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:96:8"
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
    "kind": "store_value",
    "new": {
      "definition_site": "0063be18",
      "incomplete_value": true,
      "site": "0063be28",
      "value": [
        "LOAD",
        "16",
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
      "definition_site": "0063ba68",
      "incomplete_value": true,
      "site": "0063ba78",
      "value": [
        "LOAD",
        "16",
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
      "unmatched:0063b808",
      "WRITE",
      [
        "storage",
        "Stack[-0x60]",
        null,
        null
      ]
    ],
    [
      "unmatched:0063b80c",
      "WRITE",
      [
        "storage",
        "Stack[-0x50]",
        null,
        null
      ]
    ],
    [
      "unmatched:0063b810",
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
      "0063bbb8",
      "WRITE",
      [
        "storage",
        "Stack[-0x60]",
        null,
        null
      ]
    ],
    [
      "0063bbbc",
      "WRITE",
      [
        "storage",
        "Stack[-0x50]",
        null,
        null
      ]
    ],
    [
      "0063bbc0",
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
- 0063ba38 ["INT_ADD", "register:40f0:8", ["const:63ba38:8", "const:4:8"]]
- 0063ba38 ["CALL", null, ["callee:00c58ed0:8"]]
+ 0063bde8 ["INT_ADD", "register:40f0:8", ["const:63bde8:8", "const:4:8"]]
+ 0063bde8 ["CALL", null, ["callee:00c58ed0:8"]]
- 0063baf4 ["INT_ADD", "register:40f0:8", ["const:63baf4:8", "const:4:8"]]
- 0063baf4 ["CALL", null, ["callee:0046ecd0:8"]]
+ 0063bea4 ["INT_ADD", "register:40f0:8", ["const:63bea4:8", "const:4:8"]]
+ 0063bea4 ["CALL", null, ["callee:0046ecd0:8"]]
- 0063b804 ["INT_SUB", "register:8:8", ["register:8:8", "const:110:8"]]
~~~


<a id="compare-e8b28f6a1dcd20eee15780eebde7e493"></a>

### [`0063bcd8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0063b/0063bcd8.md) → [`0063c088`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0063c/0063c088.md) FUN_0063c088

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 2件 [`0063d0f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0063d/0063d0f0.md) [`0064ecf8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0064e/0064ecf8.md) · 呼出先 11件 [`0046ca04`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046c/0046ca04.md) [`0046d7f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046d/0046d7f0.md) [`0046ee98`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046e/0046ee98.md) [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md) [`0047ce14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047ce14.md)
- 新版 呼出元 2件 [`0063d4a0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0063d/0063d4a0.md) [`0064f0a8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0064f/0064f0a8.md) · 呼出先 11件 [`0046cd24`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0046c/0046cd24.md) [`0046db10`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0046d/0046db10.md) [`0046f1b8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0046f/0046f1b8.md) [`0047b054`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047b/0047b054.md) [`0047d134`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047d/0047d134.md)

変更の種類 branch_condition_or_target, call, call_argument_candidate, call_count, call_target, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, store_value, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 84.27% / 新版 84.27%

優先判定に残った影響 `call_argument_candidate` 7件, `call_target` 1件, `unresolved_branch_alignment` 10件, `unresolved_call_alignment` 21件, `unresolved_store_alignment` 6件

アドレスに依存する影響 `store_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "0063c384",
      "incomplete_value": true,
      "site": "0063c38c",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:110:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0063bfd4",
      "incomplete_value": true,
      "site": "0063bfdc",
      "value": [
        "LOAD",
        "8",
        [
          [
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
    "ordinal": 15,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "0063c114",
      "incomplete_value": false,
      "site": "0063c11c",
      "value": [
        "leaf",
        "const:b:8"
      ]
    },
    "old": null,
    "ordinal": 9,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "0063c118",
      "incomplete_value": false,
      "site": "0063c11c",
      "value": [
        "leaf",
        "const:0:8"
      ]
    },
    "old": null,
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
      "unmatched:0063bcd8",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "unmatched:0063bcdc",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "unmatched:0063bce0",
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
      "0063c088",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "0063c08c",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "0063c090",
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
- 0063bd6c ["INT_ADD", "register:40f0:8", ["const:63bd6c:8", "const:4:8"]]
- 0063bd6c ["CALL", null, ["callee:0047d134:8"]]
+ 0063c11c ["INT_ADD", "register:40f0:8", ["const:63c11c:8", "const:4:8"]]
+ 0063c11c ["CALL", null, ["callee:0047d134:8"]]
- 0063be20 ["INT_ADD", "register:40f0:8", ["const:63be20:8", "const:4:8"]]
- 0063be20 ["CALL", null, ["callee:009ddecc:8"]]
+ 0063c1d0 ["INT_ADD", "register:40f0:8", ["const:63c1d0:8", "const:4:8"]]
+ 0063c1d0 ["CALL", null, ["callee:009ddecc:8"]]
- 0063be74 ["INT_ADD", "register:40f0:8", ["const:63be74:8", "const:4:8"]]
- 0063be74 ["CALL", null, ["ram:63acf4:8"]]
+ 0063c224 ["INT_ADD", "register:40f0:8", ["const:63c224:8", "const:4:8"]]
+ 0063c224 ["CALL", null, ["ram:63b0a4:8"]]
~~~


<a id="compare-dc7918d553d6071e97057794feb1d073"></a>

### [`0063c498`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0063c/0063c498.md) → [`0063c848`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0063c/0063c848.md) FUN_0063c848

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `observed` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`0063d184`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0063d/0063d184.md) · 呼出先 7件 [`004678a0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00467/004678a0.md) [`00467b6c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00467/00467b6c.md) [`0046bd94`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046b/0046bd94.md) [`0046e7e0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046e/0046e7e0.md) [`004700f4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00470/004700f4.md)
- 新版 呼出元 1件 [`0063d534`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0063d/0063d534.md) · 呼出先 7件 [`00467bc0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00467/00467bc0.md) [`00467e8c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00467/00467e8c.md) [`0046c0b4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0046c/0046c0b4.md) [`0046eb00`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0046e/0046eb00.md) [`00470414`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00470/00470414.md)

変更の種類 call_argument_candidate, cfg_edge_inventory, constant, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_store_alignment

命令の説明率　旧版 93.42% / 新版 93.42%

アドレスに依存する影響 `call_argument_candidate` 5件, `unresolved_store_alignment` 8件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "0063c86c",
      "incomplete_value": false,
      "site": "0063c878",
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
    "ordinal": 1,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "0063c8d0",
      "incomplete_value": true,
      "site": "0063c8dc",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:40a0:8"
          ],
          [
            "live",
            "register:40b0:8"
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
      "definition_site": "0063c8d8",
      "incomplete_value": true,
      "site": "0063c8dc",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "INT_ADD",
            "8",
            [
              "INT_ADD",
              "INT_LEFT"
            ]
          ],
          [
            "leaf",
            "const:d8:8"
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
      "unmatched:0063c498",
      "WRITE",
      [
        "storage",
        "Stack[-0x40]",
        null,
        null
      ]
    ],
    [
      "unmatched:0063c49c",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "unmatched:0063c4a0",
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
      "0063c848",
      "WRITE",
      [
        "storage",
        "Stack[-0x40]",
        null,
        null
      ]
    ],
    [
      "0063c84c",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "0063c850",
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
- 0063c4c8 ["INT_ADD", "register:40f0:8", ["const:63c4c8:8", "const:4:8"]]
- 0063c4c8 ["CALL", null, ["callee:00470440:8"]]
+ 0063c878 ["INT_ADD", "register:40f0:8", ["const:63c878:8", "const:4:8"]]
+ 0063c878 ["CALL", null, ["callee:00470440:8"]]
- 0063c52c ["INT_ADD", "register:40f0:8", ["const:63c52c:8", "const:4:8"]]
- 0063c52c ["CALL", null, ["callee:00470414:8"]]
+ 0063c8dc ["INT_ADD", "register:40f0:8", ["const:63c8dc:8", "const:4:8"]]
+ 0063c8dc ["CALL", null, ["callee:00470414:8"]]
- 0063c498 ["COPY", "tmp:0:8", ["register:40e8:8"]]
- 0063c498 ["COPY", "tmp:1:8", ["register:40f0:8"]]
- 0063c498 ["INT_ADD", "register:8:8", ["register:8:8", "const:ffffffffffffffc0:8"]]
- 0063c498 ["STORE", null, ["const:1b1:8", "register:8:8", "tmp:0:8"]]
~~~


<a id="compare-8723399a29daa5908ddf142381fa289b"></a>

### [`0063c60c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0063c/0063c60c.md) → [`0063c9bc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0063c/0063c9bc.md) FUN_0063c9bc

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 5件 [`006ea5e0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006ea/006ea5e0.md) [`006ee798`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006ee/006ee798.md) [`006f252c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006f2/006f252c.md) [`006fb24c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006fb/006fb24c.md) [`006fda84`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006fd/006fda84.md) · 呼出先 13件 [`00440f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00440/00440f00.md) [`00470880`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00470/00470880.md) [`0063b674`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0063b/0063b674.md) [`0063cd5c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0063c/0063cd5c.md) [`00652b4c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00652/00652b4c.md)
- 新版 呼出元 5件 [`006ea990`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/006ea/006ea990.md) [`006eeb48`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/006ee/006eeb48.md) [`006f28dc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/006f2/006f28dc.md) [`006fb5fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/006fb/006fb5fc.md) [`006fde34`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/006fd/006fde34.md) · 呼出先 13件 [`00441220`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00441/00441220.md) [`00470ba0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00470/00470ba0.md) [`0063ba24`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0063b/0063ba24.md) [`0063d10c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0063d/0063d10c.md) [`00652efc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00652/00652efc.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, local_def_use, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 63.03% / 新版 63.03%

優先判定に残った影響 `call_argument_candidate` 4件, `unresolved_branch_alignment` 28件, `unresolved_call_alignment` 9件, `unresolved_store_alignment` 22件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "0063ce5c",
      "incomplete_value": true,
      "site": "0063ce60",
      "value": [
        "INT_SUB",
        "8",
        [
          [
            "INT_LEFT",
            "8",
            [
              [
                "live",
                "register:40c0:8"
              ],
              [
                "leaf",
                "const:6:8"
              ]
            ]
          ],
          [
            "INT_LEFT",
            "8",
            [
              [
                "live",
                "register:40c0:8"
              ],
              [
                "leaf",
                "const:3:4"
              ]
            ]
          ]
        ]
      ]
    },
    "old": null,
    "ordinal": 21,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "0063cae0",
      "incomplete_value": true,
      "site": "0063caec",
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
                "register:4000:8"
              ],
              "INT_MULT"
            ]
          ],
          [
            "live",
            "register:40a8:8"
          ]
        ]
      ]
    },
    "ordinal": 22,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "0063cacc",
      "incomplete_value": true,
      "site": "0063caec",
      "value": [
        "live",
        "register:40a8:8"
      ]
    },
    "ordinal": 22,
    "slot": 3
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "0063cc04",
      "UNCONDITIONAL_JUMP",
      [
        "local_branch",
        "unmatched:0063c888"
      ]
    ],
    [
      "unmatched:0063c87c",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "unmatched:0063c864"
      ]
    ],
    [
      "unmatched:0063c884",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "0063cc50"
      ]
    ]
  ],
  "added": [
    [
      "0063cc04",
      "UNCONDITIONAL_JUMP",
      [
        "local_branch",
        "0063cc38"
      ]
    ],
    [
      "0063cc2c",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "0063cc14"
      ]
    ],
    [
      "0063cc34",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "0063cc50"
      ]
    ]
  ]
}
~~~


~~~diff
- 0063cab0 ["INT_ADD", "register:40f0:8", ["const:63cab0:8", "const:4:8"]]
- 0063cab0 ["CALL", null, ["callee:00c58f30:8"]]
+ 0063ce60 ["INT_ADD", "register:40f0:8", ["const:63ce60:8", "const:4:8"]]
+ 0063ce60 ["CALL", null, ["callee:00c58f30:8"]]
- 0063caec ["INT_ADD", "register:40f0:8", ["const:63caec:8", "const:4:8"]]
- 0063caec ["CALL", null, ["callee:00c590a0:8"]]
+ 0063ce9c ["INT_ADD", "register:40f0:8", ["const:63ce9c:8", "const:4:8"]]
+ 0063ce9c ["CALL", null, ["callee:00c590a0:8"]]
- 0063cb00 ["INT_ADD", "register:40f0:8", ["const:63cb00:8", "const:4:8"]]
- 0063cb00 ["CALL", null, ["callee:00c58f50:8"]]
+ 0063ceb0 ["INT_ADD", "register:40f0:8", ["const:63ceb0:8", "const:4:8"]]
+ 0063ceb0 ["CALL", null, ["callee:00c58f50:8"]]
~~~


<a id="compare-d3e34ffb2bd67dc59c4f2772d1d33b20"></a>

### [`0063cd5c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0063c/0063cd5c.md) → [`0063d10c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0063d/0063d10c.md) FUN_0063d10c

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 4件 [`0063c60c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0063c/0063c60c.md) [`0064e3bc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0064e/0064e3bc.md) [`0064e580`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0064e/0064e580.md) [`006ea5e0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006ea/006ea5e0.md) · 呼出先 8件 [`00440f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00440/00440f00.md) [`00470880`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00470/00470880.md) [`0063b674`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0063b/0063b674.md) [`00652b4c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00652/00652b4c.md) [`0071bf30`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0071b/0071bf30.md)
- 新版 呼出元 4件 [`0063c9bc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0063c/0063c9bc.md) [`0064e76c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0064e/0064e76c.md) [`0064e930`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0064e/0064e930.md) [`006ea990`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/006ea/006ea990.md) · 呼出先 8件 [`00441220`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00441/00441220.md) [`00470ba0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00470/00470ba0.md) [`0063ba24`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0063b/0063ba24.md) [`00652efc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00652/00652efc.md) [`0071c2e0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0071c/0071c2e0.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_store_alignment

命令の説明率　旧版 83.17% / 新版 83.17%

優先判定に残った影響 `call_argument_candidate` 8件, `unresolved_branch_alignment` 5件, `unresolved_store_alignment` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "0063cdec",
      "incomplete_value": false,
      "site": "0063cdf4",
      "value": [
        "leaf",
        "const:5c:8"
      ]
    },
    "ordinal": 2,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "0063d24c",
      "incomplete_value": true,
      "site": "0063d258",
      "value": [
        "live",
        "register:40b0:8"
      ]
    },
    "old": {
      "definition_site": "0063ce9c",
      "incomplete_value": true,
      "site": "0063cea8",
      "value": [
        "INT_SUB",
        "8",
        [
          [
            "live",
            "register:4040:8"
          ],
          [
            "live",
            "register:40a8:8"
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
      "definition_site": "0063ce84",
      "incomplete_value": true,
      "site": "0063cea8",
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
      "unmatched:0063ce28",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "0063d444"
      ]
    ],
    [
      "unmatched:0063ceec",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "0063d35c"
      ]
    ],
    [
      "unmatched:0063cf3c",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "0063d43c"
      ]
    ]
  ],
  "added": [
    [
      "0063d1d8",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "0063d444"
      ]
    ],
    [
      "0063d29c",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "0063d35c"
      ]
    ],
    [
      "0063d2ec",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "0063d43c"
      ]
    ]
  ]
}
~~~


~~~diff
- 0063cdf4 ["INT_ADD", "register:40f0:8", ["const:63cdf4:8", "const:4:8"]]
- 0063cdf4 ["CALL", null, ["callee:0071c2e0:8"]]
+ 0063d1a4 ["INT_ADD", "register:40f0:8", ["const:63d1a4:8", "const:4:8"]]
+ 0063d1a4 ["CALL", null, ["callee:0071c2e0:8"]]
- 0063cea8 ["INT_ADD", "register:40f0:8", ["const:63cea8:8", "const:4:8"]]
- 0063cea8 ["CALL", null, ["callee:00c590a0:8"]]
+ 0063d258 ["INT_ADD", "register:40f0:8", ["const:63d258:8", "const:4:8"]]
+ 0063d258 ["CALL", null, ["callee:00c590a0:8"]]
- 0063cf10 ["INT_ADD", "register:40f0:8", ["const:63cf10:8", "const:4:8"]]
- 0063cf10 ["CALL", null, ["callee:0071c2e0:8"]]
+ 0063d2c0 ["INT_ADD", "register:40f0:8", ["const:63d2c0:8", "const:4:8"]]
+ 0063d2c0 ["CALL", null, ["callee:0071c2e0:8"]]
~~~


<a id="compare-2e92a2250bff80e9a5a186cc6d6389b5"></a>

### [`0063d09c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0063d/0063d09c.md) → [`0063d44c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0063d/0063d44c.md) FUN_0063d44c

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 6件 [`0064ecf8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0064e/0064ecf8.md) [`006bbcf0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006bb/006bbcf0.md) [`00700b50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00700/00700b50.md) [`007200e8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00720/007200e8.md) [`007ccf44`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007cc/007ccf44.md) · 呼出先 2件 [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md)
- 新版 呼出元 6件 [`0064f0a8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0064f/0064f0a8.md) [`006bc0a0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/006bc/006bc0a0.md) [`00700f00`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00700/00700f00.md) [`00720498`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00720/00720498.md) [`007cdea8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007cd/007cdea8.md) · 呼出先 2件 [`00c54d90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d90.md) [`00c58f20`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f20.md)

変更の種類 branch_condition_or_target, call, call_count, cfg_edge_inventory, constant, control_flow, local_def_use, memory_read, memory_read_count, operands_and_dependencies, operation_sequence, unresolved_call_alignment

命令の説明率　旧版 90.48% / 新版 90.48%

優先判定に残った影響 `unresolved_call_alignment` 1件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:0063d0dc",
      "COMPUTED_CALL",
      [
        "unresolved_target",
        null
      ]
    ]
  ],
  "added": [
    [
      "0063d48c",
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
- 0063d0b0 ["INT_EQUAL", "tmp:0:1", ["register:4098:8", "const:0:8"]]
- 0063d0b0 ["CBRANCH", null, ["local:b2:8", "tmp:0:1"]]
+ 0063d460 ["INT_EQUAL", "tmp:0:1", ["register:4098:8", "const:0:8"]]
+ 0063d460 ["CBRANCH", null, ["local:b3:8", "tmp:0:1"]]
- 0063d0bc ["INT_ADD", "register:40f0:8", ["const:63d0bc:8", "const:4:8"]]
- 0063d0bc ["CALL", null, ["callee:00c54d90:8"]]
+ 0063d46c ["INT_ADD", "register:40f0:8", ["const:63d46c:8", "const:4:8"]]
+ 0063d46c ["CALL", null, ["callee:00c54d90:8"]]
- 0063d0c0 ["INT_EQUAL", "tmp:0:1", ["register:4000:8", "const:0:8"]]
- 0063d0c0 ["CBRANCH", null, ["local:b3:8", "tmp:0:1"]]
+ 0063d470 ["INT_EQUAL", "tmp:0:1", ["register:4000:8", "const:0:8"]]
+ 0063d470 ["CBRANCH", null, ["local:b4:8", "tmp:0:1"]]
~~~


<a id="compare-bd952d84e128295cc1351f6405d81407"></a>

### [`0063d0f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0063d/0063d0f0.md) → [`0063d4a0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0063d/0063d4a0.md) FUN_0063d4a0

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `bounded` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`006b2bb4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006b2/006b2bb4.md) · 呼出先 1件 [`0063bcd8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0063b/0063bcd8.md)
- 新版 呼出元 1件 [`006b2f64`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/006b2/006b2f64.md) · 呼出先 1件 [`0063c088`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0063c/0063c088.md)

変更の種類 branch_condition_or_target, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, operands_and_dependencies, operation_sequence, unresolved_branch_alignment

命令の説明率　旧版 89.19% / 新版 89.19%

優先判定に残った影響 `unresolved_branch_alignment` 1件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:0063d16c",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "0063d4e8"
      ]
    ]
  ],
  "added": [
    [
      "0063d51c",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "0063d4e8"
      ]
    ]
  ]
}
~~~


~~~diff
- 0063d134 ["INT_MULT", "register:4048:8", ["register:4048:8", "register:40a8:8"]]
- 0063d14c ["INT_ADD", "register:40f0:8", ["const:63d14c:8", "const:4:8"]]
- 0063d14c ["CALL", null, ["callee:0063c088:8"]]
+ 0063d4fc ["INT_ADD", "register:40f0:8", ["const:63d4fc:8", "const:4:8"]]
+ 0063d4fc ["CALL", null, ["callee:0063c088:8"]]
- 0063d164 ["INT_MULT", "register:4048:8", ["register:4048:8", "register:40a8:8"]]
~~~


<a id="compare-9894e5133711d248e1b69046b5302fdb"></a>

### [`0063d28c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0063d/0063d28c.md) → [`0063d63c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0063d/0063d63c.md) FUN_0063d63c

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`0063dd50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0063d/0063dd50.md) · 呼出先 12件 [`0043bbe4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bbe4.md) [`0048795c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00487/0048795c.md) [`0048797c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00487/0048797c.md) [`00487e60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00487/00487e60.md) [`00488698`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00488/00488698.md)
- 新版 呼出元 1件 [`0063e100`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0063e/0063e100.md) · 呼出先 12件 [`0043bf04`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bf04.md) [`00487c7c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00487/00487c7c.md) [`00487c9c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00487/00487c9c.md) [`00488180`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00488/00488180.md) [`004889b8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00488/004889b8.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, store_value, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 55.90% / 新版 55.90%

優先判定に残った影響 `call_argument_candidate` 2件, `store_value` 4件, `unresolved_branch_alignment` 26件, `unresolved_call_alignment` 9件, `unresolved_store_alignment` 48件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "0063d678",
      "incomplete_value": false,
      "site": "0063d67c",
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
      "definition_site": "0063d2c8",
      "incomplete_value": false,
      "site": "0063d2cc",
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
    "ordinal": 12,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "0063d694",
      "incomplete_value": true,
      "site": "0063d6a4",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:6ba:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0063d2e4",
      "incomplete_value": true,
      "site": "0063d2f4",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:5dc:8"
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
      "definition_site": "0063d698",
      "incomplete_value": true,
      "site": "0063d6a8",
      "value": [
        "LOAD",
        "16",
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
      "definition_site": "0063d2e8",
      "incomplete_value": true,
      "site": "0063d2f8",
      "value": [
        "LOAD",
        "16",
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
      "0063d67c",
      "DATA",
      [
        "storage",
        "00c64e08",
        null,
        "undefined *"
      ]
    ],
    [
      "0063d694",
      "READ",
      [
        "storage",
        "002bb5dc",
        null,
        "string"
      ]
    ],
    [
      "0063d698",
      "READ",
      [
        "storage",
        "002bb5e6",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "0063d67c",
      "DATA",
      [
        "storage",
        "00c65dd8",
        null,
        "undefined *"
      ]
    ],
    [
      "0063d694",
      "READ",
      [
        "storage",
        "002bb6ba",
        null,
        "string"
      ]
    ],
    [
      "0063d698",
      "READ",
      [
        "storage",
        "002bb6c4",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 0063d67c ["INT_EQUAL", "tmp:0:1", ["register:100:1", "register:103:1"]]
- 0063d67c ["CBRANCH", null, ["local:b62:8", "tmp:0:1"]]
- 0063d6a4 ["INT_ADD", "tmp:0:8", ["register:4000:8", "const:20:8"]]
- 0063d6a4 ["COPY", "tmp:1:8", ["const:0:8"]]
- 0063d6a4 ["STORE", null, ["const:1b1:8", "tmp:0:8", "tmp:1:8"]]
- 0063d6a8 ["COPY", "tmp:0:8", ["const:0:8"]]
- 0063d6a8 ["COPY", "tmp:1:8", ["const:0:8"]]
- 0063d6a8 ["COPY", "tmp:2:8", ["tmp:1:8"]]
- 0063d6a8 ["COPY", "tmp:3:8", ["tmp:0:8"]]
~~~


<a id="compare-cc711fd08f4ddaf9aa26f2bef4eda74e"></a>

### [`0063d954`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0063d/0063d954.md) → [`0063dd04`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0063d/0063dd04.md) FUN_0063dd04

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 2件 [`00641644`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00641/00641644.md) [`00641944`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00641/00641944.md) · 呼出先 8件 [`0043bbe4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bbe4.md) [`0063dd08`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0063d/0063dd08.md) [`00727a28`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00727/00727a28.md) [`008003d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00800/008003d0.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)
- 新版 呼出元 2件 [`006419f4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00641/006419f4.md) [`00641cf4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00641/00641cf4.md) · 呼出先 8件 [`0043bf04`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bf04.md) [`0063e0b8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0063e/0063e0b8.md) [`00727dd8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00727/00727dd8.md) [`00801334`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00801/00801334.md) [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md)

変更の種類 branch_condition_or_target, call_argument_candidate, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, store_condition, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 91.67% / 新版 91.67%

優先判定に残った影響 `call_argument_candidate` 2件, `store_condition` 1件, `unresolved_branch_alignment` 6件, `unresolved_call_alignment` 1件, `unresolved_store_alignment` 5件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "0063decc",
      "incomplete_value": true,
      "site": "0063ded0",
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
              "INT_LEFT"
            ]
          ],
          [
            "leaf",
            "const:714:8"
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
      "definition_site": "0063df30",
      "incomplete_value": true,
      "site": "0063df34",
      "value": [
        "INT_ZEXT",
        "8",
        [
          [
            "INT_ADD",
            "4",
            [
              [
                "live",
                "register:4040:4"
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
    "old": null,
    "ordinal": 10,
    "slot": 1
  },
  {
    "confidence": "limited",
    "guard": [
      [
        "FALL_THROUGH",
        "0063da30"
      ],
      [
        "FALL_THROUGH",
        "0063dde0"
      ]
    ],
    "kind": "store_condition",
    "new": {
      "definition_site": "0063dde0",
      "incomplete_value": true,
      "site": "0063dde4",
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
    "old": {
      "definition_site": "0063da30",
      "incomplete_value": true,
      "site": "0063da34",
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
      "unmatched:0063d968",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "unmatched:0063d96c",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "unmatched:0063da30",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "0063ddec"
      ]
    ]
  ],
  "added": [
    [
      "0063dd18",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "0063dd1c",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "0063dde0",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "0063ddec"
      ]
    ]
  ]
}
~~~


~~~diff
- 0063db20 ["INT_ADD", "register:40f0:8", ["const:63db20:8", "const:4:8"]]
- 0063db20 ["CALL", null, ["callee:00b30a48:8"]]
+ 0063ded0 ["INT_ADD", "register:40f0:8", ["const:63ded0:8", "const:4:8"]]
+ 0063ded0 ["CALL", null, ["callee:00b30a48:8"]]
- 0063db84 ["INT_ADD", "register:40f0:8", ["const:63db84:8", "const:4:8"]]
- 0063db84 ["CALL", null, ["callee:00801334:8"]]
+ 0063df34 ["INT_ADD", "register:40f0:8", ["const:63df34:8", "const:4:8"]]
+ 0063df34 ["CALL", null, ["callee:00801334:8"]]
- 0063d968 ["COPY", "tmp:0:8", ["register:40b0:8"]]
- 0063d968 ["COPY", "tmp:1:8", ["register:40a8:8"]]
- 0063d968 ["INT_ADD", "tmp:2:8", ["register:8:8", "const:20:8"]]
- 0063d968 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
~~~


<a id="compare-3875236446e87b747ae5a4c8fcbfbf82"></a>

### [`0063dd50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0063d/0063dd50.md) → [`0063e100`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0063e/0063e100.md) FUN_0063e100

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 1件 [`00b11e20`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b11/00b11e20.md) · 呼出先 28件 [`0043bbe4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bbe4.md) [`00440f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00440/00440f00.md) [`00440f9c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00440/00440f9c.md) [`00447f34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00447/00447f34.md) [`00470880`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00470/00470880.md)
- 新版 呼出元 1件 [`00b12e14`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b12/00b12e14.md) · 呼出先 28件 [`0043bf04`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bf04.md) [`00441220`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00441/00441220.md) [`004412bc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00441/004412bc.md) [`00448254`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00448/00448254.md) [`00470ba0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00470/00470ba0.md)

変更の種類 branch_condition_or_target, call, call_argument_candidate, call_count, call_target, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, store_condition, store_destination, unresolved_branch_alignment, unresolved_call_alignment, unresolved_return_alignment, unresolved_store_alignment

命令の説明率　旧版 25.52% / 新版 25.52%

優先判定に残った影響 `call_argument_candidate` 20件, `call_target` 1件, `store_condition` 3件, `store_destination` 3件, `unresolved_branch_alignment` 273件, `unresolved_call_alignment` 144件, `unresolved_return_alignment` 1件, `unresolved_store_alignment` 471件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_destination",
    "new": {
      "definition_site": "0063ec44",
      "incomplete_value": true,
      "site": "0063ec44",
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
    "old": {
      "definition_site": "0063fb08",
      "incomplete_value": true,
      "site": "0063fb08",
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
            "const:48:8"
          ]
        ]
      ]
    },
    "ordinal": 477,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "store_destination",
    "new": {
      "definition_site": "0063ec44",
      "incomplete_value": true,
      "site": "0063ec44",
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
                "const:70:8"
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
      "definition_site": "0063fb08",
      "incomplete_value": true,
      "site": "0063fb08",
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
              [
                "leaf",
                "const:48:8"
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
    "ordinal": 478,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "store_destination",
    "new": {
      "definition_site": "0063ec48",
      "incomplete_value": true,
      "site": "0063ec48",
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
            "const:80:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0063fb0c",
      "incomplete_value": true,
      "site": "0063fb0c",
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
            "const:58:8"
          ]
        ]
      ]
    },
    "ordinal": 479,
    "slot": 1
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:0063dd50",
      "WRITE",
      [
        "storage",
        "Stack[-0x60]",
        null,
        null
      ]
    ],
    [
      "unmatched:0063dd54",
      "WRITE",
      [
        "storage",
        "Stack[-0x50]",
        null,
        null
      ]
    ],
    [
      "unmatched:0063dd58",
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
      "0063e100",
      "WRITE",
      [
        "storage",
        "Stack[-0x60]",
        null,
        null
      ]
    ],
    [
      "0063e104",
      "WRITE",
      [
        "storage",
        "Stack[-0x50]",
        null,
        null
      ]
    ],
    [
      "0063e108",
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
- 0063de58 ["INT_ADD", "register:40f0:8", ["const:63de58:8", "const:4:8"]]
- 0063de58 ["CALL", null, ["callee:00487c9c:8"]]
+ 0063e208 ["INT_ADD", "register:40f0:8", ["const:63e208:8", "const:4:8"]]
+ 0063e208 ["CALL", null, ["callee:00487c9c:8"]]
- 0063e100 ["INT_ADD", "register:40f0:8", ["const:63e100:8", "const:4:8"]]
- 0063e100 ["CALL", null, ["callee:00c590a0:8"]]
+ 0063e4b0 ["INT_ADD", "register:40f0:8", ["const:63e4b0:8", "const:4:8"]]
+ 0063e4b0 ["CALL", null, ["callee:00c590a0:8"]]
+ 0063e100 ["COPY", "tmp:0:8", ["register:40e8:8"]]
+ 0063e100 ["COPY", "tmp:1:8", ["register:40f0:8"]]
+ 0063e100 ["INT_ADD", "register:8:8", ["register:8:8", "const:ffffffffffffffa0:8"]]
+ 0063e100 ["STORE", null, ["const:1b1:8", "register:8:8", "tmp:0:8"]]
~~~


<a id="compare-5d6f50ec88ecc1ecec78a4e4c1dca9d1"></a>

### [`00640954`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00640/00640954.md) → [`00640d04`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00640/00640d04.md) FUN_00640d04

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `bounded` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`0064ecf8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0064e/0064ecf8.md) · 呼出先 1件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 1件 [`0064f0a8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0064f/0064f0a8.md) · 呼出先 1件 [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 branch_condition_or_target, constant, control_flow, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_store_alignment

命令の説明率　旧版 89.74% / 新版 89.74%

優先判定に残った影響 `unresolved_store_alignment` 5件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00640954",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "unmatched:00640958",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "unmatched:0064095c",
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
      "00640d04",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "00640d08",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "00640d0c",
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
- 00640954 ["COPY", "tmp:0:8", ["register:40e8:8"]]
- 00640954 ["COPY", "tmp:1:8", ["register:40f0:8"]]
- 00640954 ["INT_ADD", "register:8:8", ["register:8:8", "const:ffffffffffffffd0:8"]]
- 00640954 ["STORE", null, ["const:1b1:8", "register:8:8", "tmp:0:8"]]
- 00640958 ["INT_ADD", "tmp:0:8", ["register:8:8", "const:10:8"]]
- 00640958 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:40a8:8"]]
- 0064095c ["COPY", "tmp:0:8", ["register:40a0:8"]]
- 0064095c ["COPY", "tmp:1:8", ["register:4098:8"]]
- 0064095c ["INT_ADD", "tmp:2:8", ["register:8:8", "const:20:8"]]
- 0064095c ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
~~~


<a id="compare-e732f768611cc7ad52011b9ff11882a1"></a>

### [`006411b4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00641/006411b4.md) → [`00641564`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00641/00641564.md) FUN_00641564

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 6件 [`006465f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00646/006465f0.md) [`0064bec8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0064b/0064bec8.md) [`0064dc08`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0064d/0064dc08.md) [`0064df50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0064d/0064df50.md) [`0064e1dc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0064e/0064e1dc.md) · 呼出先 3件 [`0043bbe4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bbe4.md) [`0064133c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00641/0064133c.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)
- 新版 呼出元 6件 [`006469a0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00646/006469a0.md) [`0064c278`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0064c/0064c278.md) [`0064dfb8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0064d/0064dfb8.md) [`0064e300`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0064e/0064e300.md) [`0064e58c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0064e/0064e58c.md) · 呼出先 3件 [`0043bf04`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bf04.md) [`006416ec`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00641/006416ec.md) [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_store_alignment

命令の説明率　旧版 94.90% / 新版 94.90%

優先判定に残った影響 `call_argument_candidate` 2件, `unresolved_branch_alignment` 2件, `unresolved_store_alignment` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "0064121c",
      "incomplete_value": false,
      "site": "00641224",
      "value": [
        "leaf",
        "const:40:8"
      ]
    },
    "ordinal": 0,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00641668",
      "incomplete_value": false,
      "site": "00641670",
      "value": [
        "leaf",
        "const:78:8"
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
      "unmatched:006411e4",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "006415ac"
      ]
    ],
    [
      "unmatched:006412b0",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00641648"
      ]
    ]
  ],
  "added": [
    [
      "00641594",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "006415ac"
      ]
    ],
    [
      "00641660",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00641648"
      ]
    ]
  ]
}
~~~


~~~diff
- 00641224 ["INT_ADD", "register:40f0:8", ["const:641224:8", "const:4:8"]]
- 00641224 ["CALL", null, ["callee:00c58f30:8"]]
+ 006415d4 ["INT_ADD", "register:40f0:8", ["const:6415d4:8", "const:4:8"]]
+ 006415d4 ["CALL", null, ["callee:00c58f30:8"]]
- 006412c0 ["INT_ADD", "register:40f0:8", ["const:6412c0:8", "const:4:8"]]
- 006412c0 ["CALL", null, ["callee:00c58f30:8"]]
+ 00641670 ["INT_ADD", "register:40f0:8", ["const:641670:8", "const:4:8"]]
+ 00641670 ["CALL", null, ["callee:00c58f30:8"]]
- 006411e4 ["INT_NOTEQUAL", "tmp:0:1", ["register:4048:8", "const:0:8"]]
- 006411e4 ["CBRANCH", null, ["local:b4:8", "tmp:0:1"]]
~~~


<a id="compare-742bf3ce367a4bc428702074535f7648"></a>

### [`00641e1c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00641/00641e1c.md) → [`006421cc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00642/006421cc.md) FUN_006421cc

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `bounded` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`0064ecf8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0064e/0064ecf8.md) · 呼出先 4件 [`0064172c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00641/0064172c.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)
- 新版 呼出元 1件 [`0064f0a8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0064f/0064f0a8.md) · 呼出先 4件 [`00641adc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00641/00641adc.md) [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md)

変更の種類 branch_condition_or_target, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment

命令の説明率　旧版 97.75% / 新版 97.75%

優先判定に残った影響 `unresolved_branch_alignment` 1件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00641e5c",
      "DATA",
      [
        "storage",
        "004362b0",
        null,
        "byte[63]"
      ]
    ],
    [
      "unmatched:00641e60",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00642244"
      ]
    ],
    [
      "0064225c",
      "DATA",
      [
        "storage",
        "004362d8",
        null,
        "byte[63]"
      ]
    ]
  ],
  "added": [
    [
      "0064220c",
      "DATA",
      [
        "storage",
        "004362b0",
        null,
        "byte[51]"
      ]
    ],
    [
      "00642210",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00642244"
      ]
    ],
    [
      "0064225c",
      "DATA",
      [
        "storage",
        "004362d8",
        null,
        "byte[51]"
      ]
    ]
  ]
}
~~~


~~~diff
- 00641e50 ["INT_ADD", "register:40f0:8", ["const:641e50:8", "const:4:8"]]
- 00641e50 ["CALL", null, ["callee:008524fc:8"]]
+ 00642200 ["INT_ADD", "register:40f0:8", ["const:642200:8", "const:4:8"]]
+ 00642200 ["CALL", null, ["callee:008524fc:8"]]
- 00641e5c ["COPY", "tmp:0:8", ["register:40b8:8"]]
- 00641e5c ["LOAD", "register:4048:8", ["const:1b1:8", "tmp:0:8"]]
- 00641e60 ["INT_EQUAL", "tmp:0:1", ["register:4048:8", "const:0:8"]]
- 00641e60 ["CBRANCH", null, ["local:b6:8", "tmp:0:1"]]
~~~


<a id="compare-0649e19a9cae09b5e58e145a965e79f8"></a>

### [`00642050`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00642/00642050.md) → [`00642400`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00642/00642400.md) FUN_00642400

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 2件 [`00643130`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00643/00643130.md) [`006452d4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00645/006452d4.md) · 呼出先 19件 [`0043bb60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bb60.md) [`00447734`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00447/00447734.md) [`00447f34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00447/00447f34.md) [`00470880`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00470/00470880.md) [`0047e64c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047e/0047e64c.md)
- 新版 呼出元 2件 [`006434e0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00643/006434e0.md) [`00645684`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00645/00645684.md) · 呼出先 19件 [`0043be80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043be80.md) [`00447a54`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00447/00447a54.md) [`00448254`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00448/00448254.md) [`00470ba0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00470/00470ba0.md) [`0047e96c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047e/0047e96c.md)

変更の種類 branch_condition_or_target, call, call_argument_candidate, call_count, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, store_value, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 84.17% / 新版 84.17%

優先判定に残った影響 `call_argument_candidate` 12件, `store_value` 8件, `unresolved_branch_alignment` 3件, `unresolved_call_alignment` 6件, `unresolved_store_alignment` 18件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00642744",
      "incomplete_value": true,
      "site": "00642750",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:1d8:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00642394",
      "incomplete_value": true,
      "site": "006423a0",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:109:8"
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
      "definition_site": "00642820",
      "incomplete_value": true,
      "site": "0064282c",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:471:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00642470",
      "incomplete_value": true,
      "site": "0064247c",
      "value": [
        "LOAD",
        "8",
        [
          [
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
    "ordinal": 48,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00642a34",
      "incomplete_value": true,
      "site": "00642a3c",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:c06:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00642684",
      "incomplete_value": true,
      "site": "0064268c",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:aae:8"
              ]
            ]
          ]
        ]
      ]
    },
    "ordinal": 66,
    "slot": 2
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:006420f4",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "006425e4"
      ]
    ],
    [
      "unmatched:00642188",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00642554"
      ]
    ],
    [
      "unmatched:006421c8",
      "READ",
      [
        "storage",
        "002c2ad0",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "006424a4",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "006425e4"
      ]
    ],
    [
      "00642538",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00642554"
      ]
    ],
    [
      "00642578",
      "READ",
      [
        "storage",
        "002c2b20",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 0064211c ["INT_ADD", "register:40f0:8", ["const:64211c:8", "const:4:8"]]
- 0064211c ["CALL", null, ["callee:00c54d90:8"]]
+ 006424cc ["INT_ADD", "register:40f0:8", ["const:6424cc:8", "const:4:8"]]
+ 006424cc ["CALL", null, ["callee:00c54d90:8"]]
- 00642138 ["INT_ADD", "register:40f0:8", ["const:642138:8", "const:4:8"]]
- 00642138 ["CALL", null, ["callee:00c58f20:8"]]
+ 006424e8 ["INT_ADD", "register:40f0:8", ["const:6424e8:8", "const:4:8"]]
+ 006424e8 ["CALL", null, ["callee:00c58f20:8"]]
- 00642368 ["INT_ADD", "register:40f0:8", ["const:642368:8", "const:4:8"]]
- 00642368 ["CALL", null, ["callee:00447a54:8"]]
+ 00642718 ["INT_ADD", "register:40f0:8", ["const:642718:8", "const:4:8"]]
+ 00642718 ["CALL", null, ["callee:00447a54:8"]]
~~~


<a id="compare-96df9407ccc56f3b25414d15a3ac85ae"></a>

### [`00645010`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00645/00645010.md) → [`006453c0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00645/006453c0.md) FUN_006453c0

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`00643130`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00643/00643130.md) · 呼出先 7件 [`00440f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00440/00440f00.md) [`00653174`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00653/00653174.md) [`00653188`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00653/00653188.md) [`00653370`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00653/00653370.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)
- 新版 呼出元 1件 [`006434e0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00643/006434e0.md) · 呼出先 7件 [`00441220`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00441/00441220.md) [`00653524`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00653/00653524.md) [`00653538`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00653/00653538.md) [`00653720`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00653/00653720.md) [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md)

変更の種類 branch_condition_or_target, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, store_condition, unresolved_branch_alignment, unresolved_store_alignment

命令の説明率　旧版 82.74% / 新版 82.74%

優先判定に残った影響 `store_condition` 13件, `unresolved_branch_alignment` 5件, `unresolved_store_alignment` 15件

~~~json
[
  {
    "confidence": "limited",
    "guard": [
      [
        "FALL_THROUGH",
        "0064506c"
      ],
      [
        "FALL_THROUGH",
        "0064541c"
      ]
    ],
    "kind": "store_condition",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "00645424",
      "value": [
        "live",
        "register:102:1"
      ]
    },
    "old": {
      "definition_site": "00645068",
      "incomplete_value": true,
      "site": "00645074",
      "value": [
        "INT_LESSEQUAL",
        "1",
        [
          [
            "live",
            "register:40a8:8"
          ],
          [
            "INT_SUB",
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
        "0064506c"
      ],
      [
        "FALL_THROUGH",
        "0064541c"
      ]
    ],
    "kind": "store_condition",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "00645424",
      "value": [
        "live",
        "register:102:1"
      ]
    },
    "old": {
      "definition_site": "00645068",
      "incomplete_value": true,
      "site": "00645074",
      "value": [
        "INT_LESSEQUAL",
        "1",
        [
          [
            "live",
            "register:40a8:8"
          ],
          [
            "INT_SUB",
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
        "0064506c"
      ],
      [
        "FALL_THROUGH",
        "0064541c"
      ]
    ],
    "kind": "store_condition",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "00645428",
      "value": [
        "live",
        "register:102:1"
      ]
    },
    "old": {
      "definition_site": "00645068",
      "incomplete_value": true,
      "site": "00645078",
      "value": [
        "INT_LESSEQUAL",
        "1",
        [
          [
            "live",
            "register:40a8:8"
          ],
          [
            "INT_SUB",
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
      "unmatched:00645020",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "unmatched:00645024",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "unmatched:0064503c",
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
      "006453d0",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "006453d4",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "006453ec",
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
- 00645020 ["COPY", "tmp:0:8", ["register:40b0:8"]]
- 00645020 ["COPY", "tmp:1:8", ["register:40a8:8"]]
- 00645020 ["INT_ADD", "tmp:2:8", ["register:8:8", "const:60:8"]]
- 00645020 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
- 00645024 ["COPY", "tmp:0:8", ["register:40a0:8"]]
- 00645024 ["COPY", "tmp:1:8", ["register:4098:8"]]
- 00645024 ["INT_ADD", "tmp:2:8", ["register:8:8", "const:70:8"]]
- 00645024 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
- 00645028 ["COPY", "tmp:0:8", ["const:30:8"]]
- 00645028 ["INT_CARRY", "register:105:1", ["register:8:8", "tmp:0:8"]]
- 00645028 ["INT_SCARRY", "register:106:1", ["register:8:8", "tmp:0:8"]]
- 00645028 ["INT_ADD", "tmp:1:8", ["register:8:8", "tmp:0:8"]]
~~~


<a id="compare-aacb1e03a2cdbf005b1d09807d7bbdb8"></a>

### [`006460c0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00646/006460c0.md) → [`00646470`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00646/00646470.md) FUN_00646470

根拠 `instruction_blocks_cfg_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00651ae4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00651/00651ae4.md) · 呼出先 13件 [`004678a0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00467/004678a0.md) [`00467b6c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00467/00467b6c.md) [`00467f94`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00467/00467f94.md) [`00468844`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00468/00468844.md) [`00469c44`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00469/00469c44.md)
- 新版 呼出元 1件 [`00651e94`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00651/00651e94.md) · 呼出先 13件 [`00467bc0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00467/00467bc0.md) [`00467e8c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00467/00467e8c.md) [`004682b4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00468/004682b4.md) [`00468b64`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00468/00468b64.md) [`00469f64`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00469/00469f64.md)

変更の種類 branch_value, call, call_argument_candidate, call_target, constant, operands_and_dependencies

命令の説明率　旧版 98.49% / 新版 98.49%

優先判定に残った影響 `branch_value` 1件, `call_argument_candidate` 2件, `call_target` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "branch_value",
    "new": {
      "definition_site": "006464a8",
      "incomplete_value": true,
      "site": "006464a8",
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
      "definition_site": "006460f8",
      "incomplete_value": true,
      "site": "006460f8",
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
      "definition_site": "006464b0",
      "incomplete_value": false,
      "site": "006464c0",
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
      "definition_site": "00646100",
      "incomplete_value": false,
      "site": "00646110",
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
      "definition_site": "006464b8",
      "incomplete_value": false,
      "site": "006464c0",
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
            "const:8b0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00646108",
      "incomplete_value": false,
      "site": "00646110",
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
      "006464a0",
      "READ",
      [
        "storage",
        "00ca4a78",
        null,
        "undefined8"
      ]
    ],
    [
      "006464b0",
      "PARAM",
      [
        "storage",
        "00c65f28",
        null,
        "pointer __((offset(0x10)))"
      ]
    ],
    [
      "006464b8",
      "PARAM",
      [
        "storage",
        "00c738e0",
        null,
        "pointer __((offset(0x10)))"
      ]
    ]
  ],
  "added": [
    [
      "006464a0",
      "READ",
      [
        "storage",
        "00ca5a38",
        null,
        "undefined8"
      ]
    ],
    [
      "006464b0",
      "PARAM",
      [
        "storage",
        "00c66ef8",
        null,
        "pointer __((offset(0x10)))"
      ]
    ],
    [
      "006464b8",
      "PARAM",
      [
        "storage",
        "00c748b0",
        null,
        "pointer __((offset(0x10)))"
      ]
    ]
  ]
}
~~~


~~~diff
- 00646110 ["INT_ADD", "register:40f0:8", ["const:646110:8", "const:4:8"]]
- 00646110 ["CALL", null, ["callee:00c596b0:8"]]
+ 006464c0 ["INT_ADD", "register:40f0:8", ["const:6464c0:8", "const:4:8"]]
+ 006464c0 ["CALL", null, ["callee:00c596b0:8"]]
- 006461e4 ["INT_ADD", "register:40f0:8", ["const:6461e4:8", "const:4:8"]]
- 006461e4 ["CALL", null, ["ram:6465f0:8"]]
+ 00646594 ["INT_ADD", "register:40f0:8", ["const:646594:8", "const:4:8"]]
+ 00646594 ["CALL", null, ["ram:6469a0:8"]]
- 006464a8 ["INT_ADD", "register:40f0:8", ["const:6464a8:8", "const:4:8"]]
- 006464a8 ["CALL", null, ["callee:008524fc:8"]]
+ 00646858 ["INT_ADD", "register:40f0:8", ["const:646858:8", "const:4:8"]]
+ 00646858 ["CALL", null, ["callee:008524fc:8"]]
~~~


<a id="compare-1ccd7f083712f0f938bab9c385281f45"></a>

### [`0064a570`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0064a/0064a570.md) → [`0064a920`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0064a/0064a920.md) FUN_0064a920

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `equal` · `cfg_change`

- 旧版 呼出元 2件 [`006465f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00646/006465f0.md) [`006535e0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00653/006535e0.md) · 呼出先 6件 [`00641944`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00641/00641944.md) [`00646024`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00646/00646024.md) [`0064df50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0064d/0064df50.md) [`0064e1dc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0064e/0064e1dc.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)
- 新版 呼出元 2件 [`006469a0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00646/006469a0.md) [`00653990`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00653/00653990.md) · 呼出先 6件 [`00641cf4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00641/00641cf4.md) [`006463d4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00646/006463d4.md) [`0064e300`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0064e/0064e300.md) [`0064e58c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0064e/0064e58c.md) [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, constant, control_flow, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

優先判定に残った影響 `call_argument_candidate` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "0064a598",
      "incomplete_value": true,
      "site": "0064a5a4",
      "value": [
        "live",
        "register:40a8:8"
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
      "definition_site": "0064a594",
      "incomplete_value": true,
      "site": "0064a5a4",
      "value": [
        "INT_ZEXT",
        "8",
        [
          [
            "INT_AND",
            "4",
            [
              [
                "live",
                "register:40b0:4"
              ],
              [
                "leaf",
                "const:1:4"
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
- 0064a5a4 ["INT_ADD", "register:40f0:8", ["const:64a5a4:8", "const:4:8"]]
- 0064a5a4 ["CALL", null, ["callee:0064e300:8"]]
+ 0064a954 ["INT_ADD", "register:40f0:8", ["const:64a954:8", "const:4:8"]]
+ 0064a954 ["CALL", null, ["callee:0064e300:8"]]
- 0064a590 ["INT_RIGHT", "tmp:0:4", ["register:4008:4", "const:0:4"]]
- 0064a590 ["INT_AND", "tmp:1:4", ["tmp:0:4", "const:1:4"]]
- 0064a590 ["INT_EQUAL", "tmp:2:1", ["tmp:1:4", "const:0:4"]]
- 0064a590 ["INT_EQUAL", "tmp:3:1", ["tmp:2:1", "const:1:1"]]
+ 0064a940 ["INT_RIGHT", "tmp:0:4", ["register:4008:4", "const:0:4"]]
+ 0064a940 ["INT_AND", "tmp:1:4", ["tmp:0:4", "const:1:4"]]
+ 0064a940 ["INT_EQUAL", "tmp:2:1", ["tmp:1:4", "const:0:4"]]
+ 0064a940 ["INT_EQUAL", "tmp:3:1", ["tmp:2:1", "const:1:1"]]
- 0064a5a8 ["INT_RIGHT", "tmp:0:4", ["register:4000:4", "const:0:4"]]
- 0064a5a8 ["INT_AND", "tmp:1:4", ["tmp:0:4", "const:1:4"]]
- 0064a5a8 ["INT_EQUAL", "tmp:2:1", ["tmp:1:4", "const:0:4"]]
- 0064a5a8 ["INT_EQUAL", "tmp:3:1", ["tmp:2:1", "const:1:1"]]
+ 0064a958 ["INT_RIGHT", "tmp:0:4", ["register:4000:4", "const:0:4"]]
+ 0064a958 ["INT_AND", "tmp:1:4", ["tmp:0:4", "const:1:4"]]
+ 0064a958 ["INT_EQUAL", "tmp:2:1", ["tmp:1:4", "const:0:4"]]
+ 0064a958 ["INT_EQUAL", "tmp:3:1", ["tmp:2:1", "const:1:1"]]
~~~


