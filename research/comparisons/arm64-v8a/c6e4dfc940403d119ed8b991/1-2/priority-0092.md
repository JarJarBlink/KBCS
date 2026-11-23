# v16.0.2 → v16.0.3 · 最優先の変更候補 (92)

[一覧の目次](README.md)

<a id="compare-7ebfde066edb589ff8971fb7f9a3a434"></a>

### [`00bbc534`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bbc/00bbc534.md) → [`00bbd528`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bbd/00bbd528.md) _ZN8firebase9messaging10UnregisterEv

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 20件 [`00497874`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00497/00497874.md) [`00bbc344`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bbc/00bbc344.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md) [`00c5aad0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aad0.md)
- 新版 呼出元 0件  · 呼出先 20件 [`00497b94`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00497/00497b94.md) [`00bbd338`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bbd/00bbd338.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md) [`00c5baa0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5baa0.md)

変更の種類 branch_value, call_argument_candidate, constant, operands_and_dependencies, store_condition

命令の説明率　旧版 91.45% / 新版 91.45%

優先判定に残った影響 `branch_value` 1件, `call_argument_candidate` 5件, `store_condition` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "branch_value",
    "new": {
      "definition_site": "00bbd558",
      "incomplete_value": true,
      "site": "00bbd558",
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
      "definition_site": "00bbc564",
      "incomplete_value": true,
      "site": "00bbc564",
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
      "definition_site": "00bbd59c",
      "incomplete_value": true,
      "site": "00bbd5a0",
      "value": [
        "LOAD",
        "8",
        [
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
                "const:420:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bbc5a8",
      "incomplete_value": true,
      "site": "00bbc5ac",
      "value": [
        "LOAD",
        "8",
        [
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
                "const:460:8"
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
    "new": {
      "definition_site": "00bbd62c",
      "incomplete_value": false,
      "site": "00bbd630",
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
            "const:993:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bbc638",
      "incomplete_value": false,
      "site": "00bbc63c",
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
            "const:8c8:8"
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
      "00bbd554",
      "READ",
      [
        "storage",
        "01126460",
        null,
        "undefined8"
      ]
    ],
    [
      "00bbd560",
      "READ",
      [
        "storage",
        "01126470",
        null,
        "undefined8"
      ]
    ],
    [
      "00bbd59c",
      "READ",
      [
        "storage",
        "01126460",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00bbd554",
      "READ",
      [
        "storage",
        "01127420",
        null,
        "undefined8"
      ]
    ],
    [
      "00bbd560",
      "READ",
      [
        "storage",
        "01127430",
        null,
        "undefined8"
      ]
    ],
    [
      "00bbd59c",
      "READ",
      [
        "storage",
        "01127420",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bbc5ac ["INT_ADD", "register:40f0:8", ["const:bbc5ac:8", "const:4:8"]]
- 00bbc5ac ["CALL", null, ["callee:00c5c120:8"]]
+ 00bbd5a0 ["INT_ADD", "register:40f0:8", ["const:bbd5a0:8", "const:4:8"]]
+ 00bbd5a0 ["CALL", null, ["callee:00c5c120:8"]]
- 00bbc63c ["INT_ADD", "register:40f0:8", ["const:bbc63c:8", "const:4:8"]]
- 00bbc63c ["CALL", null, ["callee:00c5bd40:8"]]
+ 00bbd630 ["INT_ADD", "register:40f0:8", ["const:bbd630:8", "const:4:8"]]
+ 00bbd630 ["CALL", null, ["callee:00c5bd40:8"]]
- 00bbc648 ["INT_ADD", "register:40f0:8", ["const:bbc648:8", "const:4:8"]]
- 00bbc648 ["CALL", null, ["callee:00c5c0a0:8"]]
+ 00bbd63c ["INT_ADD", "register:40f0:8", ["const:bbd63c:8", "const:4:8"]]
+ 00bbd63c ["CALL", null, ["callee:00c5c0a0:8"]]
~~~


<a id="compare-0be5cd9e6b0899fd0ae5b0e242bd83cf"></a>

### [`00bbc874`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bbc/00bbc874.md) → [`00bbd868`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bbd/00bbd868.md) _ZN8firebase9messaging8GetTokenEv

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00c5d690`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5d690.md) · 呼出先 22件 [`00497874`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00497/00497874.md) [`00b44054`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b44/00b44054.md) [`00bbcb50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bbc/00bbcb50.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 1件 [`00c5e660`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5e/00c5e660.md) · 呼出先 22件 [`00497b94`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00497/00497b94.md) [`00b45048`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b45/00b45048.md) [`00bbdb44`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bbd/00bbdb44.md) [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 branch_value, call_argument_candidate, constant, operands_and_dependencies, store_condition

命令の説明率　旧版 92.65% / 新版 92.65%

優先判定に残った影響 `branch_value` 1件, `call_argument_candidate` 6件, `store_condition` 4件

アドレスに依存する影響 `call_argument_candidate` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "branch_value",
    "new": {
      "definition_site": "00bbd89c",
      "incomplete_value": true,
      "site": "00bbd89c",
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
      "definition_site": "00bbc8a8",
      "incomplete_value": true,
      "site": "00bbc8a8",
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
      "definition_site": "00bbd8a8",
      "incomplete_value": true,
      "site": "00bbd8ac",
      "value": [
        "LOAD",
        "8",
        [
          [
            "leaf",
            "const:1b1:8"
          ],
          [
            "INT_ADD",
            "8",
            [
              [
                "leaf",
                "const:1127000:8"
              ],
              [
                "leaf",
                "const:430:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bbc8b4",
      "incomplete_value": true,
      "site": "00bbc8b8",
      "value": [
        "LOAD",
        "8",
        [
          [
            "leaf",
            "const:1b1:8"
          ],
          [
            "INT_ADD",
            "8",
            [
              [
                "leaf",
                "const:1126000:8"
              ],
              [
                "leaf",
                "const:470:8"
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
    "new": {
      "definition_site": "00bbd8d0",
      "incomplete_value": true,
      "site": "00bbd8e0",
      "value": [
        "LOAD",
        "8",
        [
          [
            "leaf",
            "const:1b1:8"
          ],
          [
            "INT_ADD",
            "8",
            [
              [
                "leaf",
                "const:c9c000:8"
              ],
              [
                "leaf",
                "const:758:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bbc8dc",
      "incomplete_value": true,
      "site": "00bbc8ec",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:788:8"
              ]
            ]
          ]
        ]
      ]
    },
    "ordinal": 3,
    "slot": 4
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "00bbd898",
      "READ",
      [
        "storage",
        "01126460",
        null,
        "undefined8"
      ]
    ],
    [
      "00bbd8a4",
      "READ",
      [
        "storage",
        "01126470",
        null,
        "undefined8"
      ]
    ],
    [
      "00bbd8d0",
      "READ",
      [
        "storage",
        "00c9b788",
        null,
        "pointer"
      ]
    ]
  ],
  "added": [
    [
      "00bbd898",
      "READ",
      [
        "storage",
        "01127420",
        null,
        "undefined8"
      ]
    ],
    [
      "00bbd8a4",
      "READ",
      [
        "storage",
        "01127430",
        null,
        "undefined8"
      ]
    ],
    [
      "00bbd8d0",
      "READ",
      [
        "storage",
        "00c9c758",
        null,
        "pointer"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bbc8b8 ["INT_ADD", "register:40f0:8", ["const:bbc8b8:8", "const:4:8"]]
- 00bbc8b8 ["CALL", null, ["callee:00c5baa0:8"]]
+ 00bbd8ac ["INT_ADD", "register:40f0:8", ["const:bbd8ac:8", "const:4:8"]]
+ 00bbd8ac ["CALL", null, ["callee:00c5baa0:8"]]
- 00bbc8ec ["INT_ADD", "register:40f0:8", ["const:bbc8ec:8", "const:4:8"]]
- 00bbc8ec ["CALL", null, ["callee:00c5bee0:8"]]
+ 00bbd8e0 ["INT_ADD", "register:40f0:8", ["const:bbd8e0:8", "const:4:8"]]
+ 00bbd8e0 ["CALL", null, ["callee:00c5bee0:8"]]
- 00bbc908 ["INT_ADD", "register:40f0:8", ["const:bbc908:8", "const:4:8"]]
- 00bbc908 ["CALL", null, ["callee:00c5c120:8"]]
+ 00bbd8fc ["INT_ADD", "register:40f0:8", ["const:bbd8fc:8", "const:4:8"]]
+ 00bbd8fc ["CALL", null, ["callee:00c5c120:8"]]
~~~


<a id="compare-eddb6bf892aaec88e0f468cef28c211e"></a>

### [`00bbcb50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bbc/00bbcb50.md) → [`00bbdb44`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bbd/00bbdb44.md) FUN_00bbdb44

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`00bbc874`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bbc/00bbc874.md) · 呼出先 15件 [`00c53ffc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53ffc.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md) [`00c580d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c580d0.md)
- 新版 呼出元 1件 [`00bbd868`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bbd/00bbd868.md) · 呼出先 15件 [`00c54fec`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54fec.md) [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md) [`00c590a0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c590a0.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 96.62% / 新版 96.62%

優先判定に残った影響 `call_argument_candidate` 5件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00bbdb78",
      "incomplete_value": false,
      "site": "00bbdb90",
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
            "const:4e6:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bbcb84",
      "incomplete_value": false,
      "site": "00bbcb9c",
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
    "ordinal": 0,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00bbdbf8",
      "incomplete_value": false,
      "site": "00bbdbfc",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:1127000:8"
          ],
          [
            "leaf",
            "const:340:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bbcc04",
      "incomplete_value": false,
      "site": "00bbcc08",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:1126000:8"
          ],
          [
            "leaf",
            "const:380:8"
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
      "definition_site": "00bbdc4c",
      "incomplete_value": false,
      "site": "00bbdc50",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:2ac000:8"
          ],
          [
            "leaf",
            "const:206:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bbcc58",
      "incomplete_value": false,
      "site": "00bbcc5c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:2ac000:8"
          ],
          [
            "leaf",
            "const:139:8"
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
      "00bbdb78",
      "PARAM",
      [
        "storage",
        "002a638e",
        null,
        "undefined1"
      ]
    ],
    [
      "00bbdbf8",
      "PARAM",
      [
        "storage",
        "01126380",
        null,
        null
      ]
    ],
    [
      "00bbdc4c",
      "PARAM",
      [
        "storage",
        "002ac139",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "00bbdb78",
      "PARAM",
      [
        "storage",
        "002a64e6",
        null,
        "undefined1"
      ]
    ],
    [
      "00bbdbf8",
      "PARAM",
      [
        "storage",
        "01127340",
        null,
        null
      ]
    ],
    [
      "00bbdc4c",
      "PARAM",
      [
        "storage",
        "002ac206",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bbcb9c ["INT_ADD", "register:40f0:8", ["const:bbcb9c:8", "const:4:8"]]
- 00bbcb9c ["CALL", null, ["callee:00c5c660:8"]]
+ 00bbdb90 ["INT_ADD", "register:40f0:8", ["const:bbdb90:8", "const:4:8"]]
+ 00bbdb90 ["CALL", null, ["callee:00c5c660:8"]]
- 00bbcc08 ["INT_ADD", "register:40f0:8", ["const:bbcc08:8", "const:4:8"]]
- 00bbcc08 ["CALL", null, ["callee:00c5baa0:8"]]
+ 00bbdbfc ["INT_ADD", "register:40f0:8", ["const:bbdbfc:8", "const:4:8"]]
+ 00bbdbfc ["CALL", null, ["callee:00c5baa0:8"]]
- 00bbcc5c ["INT_ADD", "register:40f0:8", ["const:bbcc5c:8", "const:4:8"]]
- 00bbcc5c ["CALL", null, ["callee:00c5be80:8"]]
+ 00bbdc50 ["INT_ADD", "register:40f0:8", ["const:bbdc50:8", "const:4:8"]]
+ 00bbdc50 ["CALL", null, ["callee:00c5be80:8"]]
~~~


<a id="compare-2c47f789ce52762215fe761cede82ed5"></a>

### [`00bbceb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bbc/00bbceb0.md) → [`00bbdea4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bbd/00bbdea4.md) _ZN8firebase9messaging11DeleteTokenEv

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 20件 [`00497874`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00497/00497874.md) [`00bbc344`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bbc/00bbc344.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md) [`00c5aad0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aad0.md)
- 新版 呼出元 0件  · 呼出先 20件 [`00497b94`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00497/00497b94.md) [`00bbd338`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bbd/00bbd338.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md) [`00c5baa0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5baa0.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 91.45% / 新版 91.45%

優先判定に残った影響 `call_argument_candidate` 7件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00bbdf18",
      "incomplete_value": true,
      "site": "00bbdf1c",
      "value": [
        "LOAD",
        "8",
        [
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
                "const:420:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bbcf24",
      "incomplete_value": true,
      "site": "00bbcf28",
      "value": [
        "LOAD",
        "8",
        [
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
                "const:460:8"
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
    "new": {
      "definition_site": "00bbdf28",
      "incomplete_value": true,
      "site": "00bbdf34",
      "value": [
        "LOAD",
        "8",
        [
          [
            "leaf",
            "const:1b1:8"
          ],
          [
            "INT_ADD",
            "8",
            [
              [
                "leaf",
                "const:1127000:8"
              ],
              [
                "leaf",
                "const:458:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bbcf34",
      "incomplete_value": true,
      "site": "00bbcf40",
      "value": [
        "LOAD",
        "8",
        [
          [
            "leaf",
            "const:1b1:8"
          ],
          [
            "INT_ADD",
            "8",
            [
              [
                "leaf",
                "const:1126000:8"
              ],
              [
                "leaf",
                "const:498:8"
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
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00bbdf2c",
      "incomplete_value": true,
      "site": "00bbdf34",
      "value": [
        "LOAD",
        "8",
        [
          [
            "leaf",
            "const:1b1:8"
          ],
          [
            "INT_ADD",
            "8",
            [
              [
                "leaf",
                "const:1127000:8"
              ],
              [
                "leaf",
                "const:3b8:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bbcf38",
      "incomplete_value": true,
      "site": "00bbcf40",
      "value": [
        "LOAD",
        "8",
        [
          [
            "leaf",
            "const:1b1:8"
          ],
          [
            "INT_ADD",
            "8",
            [
              [
                "leaf",
                "const:1126000:8"
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
      "00bbded0",
      "READ",
      [
        "storage",
        "01126460",
        null,
        "undefined8"
      ]
    ],
    [
      "00bbdedc",
      "READ",
      [
        "storage",
        "01126470",
        null,
        "undefined8"
      ]
    ],
    [
      "00bbdf18",
      "READ",
      [
        "storage",
        "01126460",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00bbded0",
      "READ",
      [
        "storage",
        "01127420",
        null,
        "undefined8"
      ]
    ],
    [
      "00bbdedc",
      "READ",
      [
        "storage",
        "01127430",
        null,
        "undefined8"
      ]
    ],
    [
      "00bbdf18",
      "READ",
      [
        "storage",
        "01127420",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bbcf28 ["INT_ADD", "register:40f0:8", ["const:bbcf28:8", "const:4:8"]]
- 00bbcf28 ["CALL", null, ["callee:00c5c120:8"]]
+ 00bbdf1c ["INT_ADD", "register:40f0:8", ["const:bbdf1c:8", "const:4:8"]]
+ 00bbdf1c ["CALL", null, ["callee:00c5c120:8"]]
- 00bbcf40 ["INT_ADD", "register:40f0:8", ["const:bbcf40:8", "const:4:8"]]
- 00bbcf40 ["CALL", null, ["callee:00497b94:8"]]
+ 00bbdf34 ["INT_ADD", "register:40f0:8", ["const:bbdf34:8", "const:4:8"]]
+ 00bbdf34 ["CALL", null, ["callee:00497b94:8"]]
- 00bbcfb8 ["INT_ADD", "register:40f0:8", ["const:bbcfb8:8", "const:4:8"]]
- 00bbcfb8 ["CALL", null, ["callee:00c5bd40:8"]]
+ 00bbdfac ["INT_ADD", "register:40f0:8", ["const:bbdfac:8", "const:4:8"]]
+ 00bbdfac ["CALL", null, ["callee:00c5bd40:8"]]
~~~


<a id="compare-9efc3bc9b3a9e68906e3b42edb6a669d"></a>

### [`00bbd118`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bbd/00bbd118.md) → [`00bbe10c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bbe/00bbe10c.md) _ZN8firebase9messaging21DeleteTokenLastResultEv

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 8件 [`00c5aad0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aad0.md) [`00c5aae0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aae0.md) [`00c5acb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5acb0.md) [`00c5ad40`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5ad40.md) [`00c5ae20`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5ae20.md)
- 新版 呼出元 0件  · 呼出先 8件 [`00c5baa0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5baa0.md) [`00c5bab0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5bab0.md) [`00c5bc80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5bc80.md) [`00c5bd10`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5bd10.md) [`00c5bdf0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5bdf0.md)

変更の種類 branch_value, call_argument_candidate, constant, operands_and_dependencies, store_condition

命令の説明率　旧版 97.62% / 新版 97.62%

優先判定に残った影響 `call_argument_candidate` 1件

アドレスに依存する影響 `branch_value` 1件, `store_condition` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "branch_value",
    "new": {
      "definition_site": "00bbe128",
      "incomplete_value": true,
      "site": "00bbe128",
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
      "definition_site": "00bbd134",
      "incomplete_value": true,
      "site": "00bbd134",
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
      "definition_site": "00bbe17c",
      "incomplete_value": false,
      "site": "00bbe180",
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
            "const:993:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bbd188",
      "incomplete_value": false,
      "site": "00bbd18c",
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
            "const:8c8:8"
          ]
        ]
      ]
    },
    "ordinal": 6,
    "slot": 1
  },
  {
    "confidence": "limited",
    "guard": [
      [
        "FALL_THROUGH",
        "00bbd134"
      ],
      [
        "FALL_THROUGH",
        "00bbe128"
      ]
    ],
    "kind": "store_condition",
    "new": {
      "definition_site": "00bbe128",
      "incomplete_value": true,
      "site": "00bbe15c",
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
      "definition_site": "00bbd134",
      "incomplete_value": true,
      "site": "00bbd168",
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
      "00bbe120",
      "READ",
      [
        "storage",
        "01126460",
        null,
        "undefined8"
      ]
    ],
    [
      "00bbe17c",
      "PARAM",
      [
        "storage",
        "002a28c8",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "00bbe120",
      "READ",
      [
        "storage",
        "01127420",
        null,
        "undefined8"
      ]
    ],
    [
      "00bbe17c",
      "PARAM",
      [
        "storage",
        "002a2993",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bbd18c ["INT_ADD", "register:40f0:8", ["const:bbd18c:8", "const:4:8"]]
- 00bbd18c ["CALL", null, ["callee:00c5c0a0:8"]]
+ 00bbe180 ["INT_ADD", "register:40f0:8", ["const:bbe180:8", "const:4:8"]]
+ 00bbe180 ["CALL", null, ["callee:00c5c0a0:8"]]
- 00bbd128 ["COPY", "register:4048:8", ["const:1126000:8"]]
+ 00bbe11c ["COPY", "register:4048:8", ["const:1127000:8"]]
- 00bbd12c ["INT_ADD", "tmp:0:8", ["register:4048:8", "const:460:8"]]
- 00bbd12c ["LOAD", "register:4048:8", ["const:1b1:8", "tmp:0:8"]]
+ 00bbe120 ["INT_ADD", "tmp:0:8", ["register:4048:8", "const:420:8"]]
+ 00bbe120 ["LOAD", "register:4048:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-d6b101d43cbf7171b4e3175a7258b916"></a>

### [`00bbd1f4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bbd/00bbd1f4.md) → [`00bbe1e8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bbe/00bbe1e8.md) FUN_00bbe1e8

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed`

- 旧版 呼出元 1件 [`00bb9ab0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bb9/00bb9ab0.md) · 呼出先 4件 [`00bbd25c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bbd/00bbd25c.md) [`00c5aad0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aad0.md) [`00c5aae0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aae0.md) [`00c5d480`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5d480.md)
- 新版 呼出元 1件 [`00bbaaa4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bba/00bbaaa4.md) · 呼出先 4件 [`00bbe250`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bbe/00bbe250.md) [`00c5baa0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5baa0.md) [`00c5bab0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5bab0.md) [`00c5e450`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5e/00c5e450.md)

変更の種類 branch_value, constant, operands_and_dependencies, store_condition, store_destination

命令の説明率　旧版 94.74% / 新版 94.74%

優先判定に残った影響 `store_destination` 1件

アドレスに依存する影響 `branch_value` 1件, `store_condition` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_destination",
    "new": {
      "definition_site": "00bbe214",
      "incomplete_value": false,
      "site": "00bbe214",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:1127000:8"
          ],
          [
            "leaf",
            "const:4c8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bbd220",
      "incomplete_value": false,
      "site": "00bbd220",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:1126000:8"
          ],
          [
            "leaf",
            "const:508:8"
          ]
        ]
      ]
    },
    "ordinal": 4,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "branch_value",
    "new": {
      "definition_site": "00bbe200",
      "incomplete_value": true,
      "site": "00bbe200",
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
      "definition_site": "00bbd20c",
      "incomplete_value": true,
      "site": "00bbd20c",
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
    "guard": [
      [
        "FALL_THROUGH",
        "00bbd20c"
      ],
      [
        "FALL_THROUGH",
        "00bbe200"
      ]
    ],
    "kind": "store_condition",
    "new": {
      "definition_site": "00bbe200",
      "incomplete_value": true,
      "site": "00bbe214",
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
      "definition_site": "00bbd20c",
      "incomplete_value": true,
      "site": "00bbd220",
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
      "00bbe1f8",
      "READ",
      [
        "storage",
        "01126470",
        null,
        "undefined8"
      ]
    ],
    [
      "00bbe214",
      "WRITE",
      [
        "storage",
        "01126508",
        null,
        "undefined1"
      ]
    ]
  ],
  "added": [
    [
      "00bbe1f8",
      "READ",
      [
        "storage",
        "01127430",
        null,
        "undefined8"
      ]
    ],
    [
      "00bbe214",
      "WRITE",
      [
        "storage",
        "011274c8",
        null,
        "undefined1"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bbd220 ["COPY", "tmp:0:4", ["register:4048:4"]]
- 00bbd220 ["INT_ADD", "tmp:1:8", ["register:4040:8", "const:508:8"]]
- 00bbd220 ["STORE", null, ["const:1b1:8", "tmp:1:8", "tmp:0:1"]]
+ 00bbe214 ["COPY", "tmp:0:4", ["register:4048:4"]]
+ 00bbe214 ["INT_ADD", "tmp:1:8", ["register:4040:8", "const:4c8:8"]]
+ 00bbe214 ["STORE", null, ["const:1b1:8", "tmp:1:8", "tmp:0:1"]]
- 00bbd200 ["COPY", "register:4040:8", ["const:1126000:8"]]
+ 00bbe1f4 ["COPY", "register:4040:8", ["const:1127000:8"]]
- 00bbd204 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:470:8"]]
- 00bbd204 ["LOAD", "register:40a0:8", ["const:1b1:8", "tmp:0:8"]]
+ 00bbe1f8 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:430:8"]]
+ 00bbe1f8 ["LOAD", "register:40a0:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-9349f3cdc70dbbb53f77d011024a00f0"></a>

### [`00bbd25c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bbd/00bbd25c.md) → [`00bbe250`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bbe/00bbe250.md) FUN_00bbe250

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 3件 [`00bbd1f4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bbd/00bbd1f4.md) [`00bbd3a4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bbd/00bbd3a4.md) [`00bbd434`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bbd/00bbd434.md) · 呼出先 4件 [`00bbb738`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bbb/00bbb738.md) [`00bbbcdc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bbb/00bbbcdc.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c5ab60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5ab60.md)
- 新版 呼出元 3件 [`00bbe1e8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bbe/00bbe1e8.md) [`00bbe398`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bbe/00bbe398.md) [`00bbe428`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bbe/00bbe428.md) · 呼出先 4件 [`00bbc72c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bbc/00bbc72c.md) [`00bbccd0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bbc/00bbccd0.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c5bb30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5bb30.md)

変更の種類 branch_value, constant, operands_and_dependencies

命令の説明率　旧版 91.46% / 新版 91.46%

優先判定に残った影響 `branch_value` 1件

アドレスに依存する影響 `branch_value` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "branch_value",
    "new": {
      "definition_site": "00bbe268",
      "incomplete_value": true,
      "site": "00bbe268",
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
      "definition_site": "00bbd274",
      "incomplete_value": true,
      "site": "00bbd274",
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
      "definition_site": "00bbe2fc",
      "incomplete_value": true,
      "site": "00bbe2fc",
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
      "definition_site": "00bbd308",
      "incomplete_value": true,
      "site": "00bbd308",
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
    "ordinal": 7,
    "slot": 0
  },
  {
    "confidence": "limited",
    "kind": "branch_value",
    "new": {
      "definition_site": "00bbe32c",
      "incomplete_value": true,
      "site": "00bbe330",
      "value": [
        "INT_EQUAL",
        "1",
        [
          [
            "INT_SUB",
            "8",
            [
              "INT_ADD",
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
      "definition_site": "00bbd338",
      "incomplete_value": true,
      "site": "00bbd33c",
      "value": [
        "INT_EQUAL",
        "1",
        [
          [
            "INT_SUB",
            "8",
            [
              "INT_ADD",
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
      "00bbe264",
      "READ",
      [
        "storage",
        "01126478",
        null,
        "undefined8"
      ]
    ],
    [
      "00bbe28c",
      "READ",
      [
        "storage",
        "01126478",
        null,
        "undefined8"
      ]
    ],
    [
      "00bbe2f8",
      "READ",
      [
        "storage",
        "01126480",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00bbe264",
      "READ",
      [
        "storage",
        "01127438",
        null,
        "undefined8"
      ]
    ],
    [
      "00bbe28c",
      "READ",
      [
        "storage",
        "01127438",
        null,
        "undefined8"
      ]
    ],
    [
      "00bbe2f8",
      "READ",
      [
        "storage",
        "01127440",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bbd26c ["COPY", "register:40a8:8", ["const:1126000:8"]]
+ 00bbe260 ["COPY", "register:40a8:8", ["const:1127000:8"]]
- 00bbd270 ["INT_ADD", "tmp:0:8", ["register:40a8:8", "const:478:8"]]
- 00bbd270 ["LOAD", "register:40a0:8", ["const:1b1:8", "tmp:0:8"]]
+ 00bbe264 ["INT_ADD", "tmp:0:8", ["register:40a8:8", "const:438:8"]]
+ 00bbe264 ["LOAD", "register:40a0:8", ["const:1b1:8", "tmp:0:8"]]
- 00bbd294 ["INT_ADD", "register:40f0:8", ["const:bbd294:8", "const:4:8"]]
- 00bbd294 ["CALL", null, ["callee:00bbc72c:8"]]
+ 00bbe288 ["INT_ADD", "register:40f0:8", ["const:bbe288:8", "const:4:8"]]
+ 00bbe288 ["CALL", null, ["callee:00bbc72c:8"]]
~~~


<a id="compare-5e49416e9384af73baa4552420c2039f"></a>

### [`00bbd3a4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bbd/00bbd3a4.md) → [`00bbe398`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bbe/00bbe398.md) FUN_00bbe398

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed`

- 旧版 呼出元 1件 [`00bb9ab0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bb9/00bb9ab0.md) · 呼出先 4件 [`00bbd25c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bbd/00bbd25c.md) [`00c5aad0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aad0.md) [`00c5aae0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aae0.md) [`00c5d490`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5d490.md)
- 新版 呼出元 1件 [`00bbaaa4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bba/00bbaaa4.md) · 呼出先 4件 [`00bbe250`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bbe/00bbe250.md) [`00c5baa0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5baa0.md) [`00c5bab0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5bab0.md) [`00c5e460`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5e/00c5e460.md)

変更の種類 branch_value, constant, operands_and_dependencies, store_condition, store_destination

命令の説明率　旧版 94.74% / 新版 94.74%

優先判定に残った影響 `store_destination` 1件

アドレスに依存する影響 `branch_value` 1件, `store_condition` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_destination",
    "new": {
      "definition_site": "00bbe3c4",
      "incomplete_value": false,
      "site": "00bbe3c4",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:1127000:8"
          ],
          [
            "leaf",
            "const:4c8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bbd3d0",
      "incomplete_value": false,
      "site": "00bbd3d0",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:1126000:8"
          ],
          [
            "leaf",
            "const:508:8"
          ]
        ]
      ]
    },
    "ordinal": 4,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "branch_value",
    "new": {
      "definition_site": "00bbe3b0",
      "incomplete_value": true,
      "site": "00bbe3b0",
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
      "definition_site": "00bbd3bc",
      "incomplete_value": true,
      "site": "00bbd3bc",
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
    "guard": [
      [
        "FALL_THROUGH",
        "00bbd3bc"
      ],
      [
        "FALL_THROUGH",
        "00bbe3b0"
      ]
    ],
    "kind": "store_condition",
    "new": {
      "definition_site": "00bbe3b0",
      "incomplete_value": true,
      "site": "00bbe3c4",
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
      "definition_site": "00bbd3bc",
      "incomplete_value": true,
      "site": "00bbd3d0",
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
      "00bbe3a8",
      "READ",
      [
        "storage",
        "01126470",
        null,
        "undefined8"
      ]
    ],
    [
      "00bbe3c4",
      "WRITE",
      [
        "storage",
        "01126508",
        null,
        "undefined1"
      ]
    ]
  ],
  "added": [
    [
      "00bbe3a8",
      "READ",
      [
        "storage",
        "01127430",
        null,
        "undefined8"
      ]
    ],
    [
      "00bbe3c4",
      "WRITE",
      [
        "storage",
        "011274c8",
        null,
        "undefined1"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bbd3d0 ["COPY", "tmp:0:4", ["register:4048:4"]]
- 00bbd3d0 ["INT_ADD", "tmp:1:8", ["register:4040:8", "const:508:8"]]
- 00bbd3d0 ["STORE", null, ["const:1b1:8", "tmp:1:8", "tmp:0:1"]]
+ 00bbe3c4 ["COPY", "tmp:0:4", ["register:4048:4"]]
+ 00bbe3c4 ["INT_ADD", "tmp:1:8", ["register:4040:8", "const:4c8:8"]]
+ 00bbe3c4 ["STORE", null, ["const:1b1:8", "tmp:1:8", "tmp:0:1"]]
- 00bbd3b0 ["COPY", "register:4040:8", ["const:1126000:8"]]
+ 00bbe3a4 ["COPY", "register:4040:8", ["const:1127000:8"]]
- 00bbd3b4 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:470:8"]]
- 00bbd3b4 ["LOAD", "register:40a0:8", ["const:1b1:8", "tmp:0:8"]]
+ 00bbe3a8 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:430:8"]]
+ 00bbe3a8 ["LOAD", "register:40a0:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-64815d3492076248cfbddb6623276c46"></a>

### [`00bbd434`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bbd/00bbd434.md) → [`00bbe428`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bbe/00bbe428.md) FUN_00bbe428

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00bbafec`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bba/00bbafec.md) · 呼出先 4件 [`00bbd25c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bbd/00bbd25c.md) [`00c5aad0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aad0.md) [`00c5aae0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aae0.md) [`00c5d480`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5d480.md)
- 新版 呼出元 1件 [`00bbbfe0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bbb/00bbbfe0.md) · 呼出先 4件 [`00bbe250`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bbe/00bbe250.md) [`00c5baa0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5baa0.md) [`00c5bab0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5bab0.md) [`00c5e450`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5e/00c5e450.md)

変更の種類 branch_value, constant, operands_and_dependencies, store_condition, store_destination

命令の説明率　旧版 97.22% / 新版 97.22%

優先判定に残った影響 `store_destination` 1件

アドレスに依存する影響 `branch_value` 1件, `store_condition` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_destination",
    "new": {
      "definition_site": "00bbe454",
      "incomplete_value": false,
      "site": "00bbe454",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:1127000:8"
          ],
          [
            "leaf",
            "const:4c8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bbd460",
      "incomplete_value": false,
      "site": "00bbd460",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:1126000:8"
          ],
          [
            "leaf",
            "const:508:8"
          ]
        ]
      ]
    },
    "ordinal": 4,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "branch_value",
    "new": {
      "definition_site": "00bbe440",
      "incomplete_value": true,
      "site": "00bbe440",
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
      "definition_site": "00bbd44c",
      "incomplete_value": true,
      "site": "00bbd44c",
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
    "guard": [
      [
        "FALL_THROUGH",
        "00bbd44c"
      ],
      [
        "FALL_THROUGH",
        "00bbe440"
      ]
    ],
    "kind": "store_condition",
    "new": {
      "definition_site": "00bbe440",
      "incomplete_value": true,
      "site": "00bbe454",
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
      "definition_site": "00bbd44c",
      "incomplete_value": true,
      "site": "00bbd460",
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
      "00bbe438",
      "READ",
      [
        "storage",
        "01126470",
        null,
        "undefined8"
      ]
    ],
    [
      "00bbe454",
      "WRITE",
      [
        "storage",
        "01126508",
        null,
        "undefined1"
      ]
    ]
  ],
  "added": [
    [
      "00bbe438",
      "READ",
      [
        "storage",
        "01127430",
        null,
        "undefined8"
      ]
    ],
    [
      "00bbe454",
      "WRITE",
      [
        "storage",
        "011274c8",
        null,
        "undefined1"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bbd460 ["COPY", "tmp:0:4", ["register:4048:4"]]
- 00bbd460 ["INT_ADD", "tmp:1:8", ["register:4040:8", "const:508:8"]]
- 00bbd460 ["STORE", null, ["const:1b1:8", "tmp:1:8", "tmp:0:1"]]
+ 00bbe454 ["COPY", "tmp:0:4", ["register:4048:4"]]
+ 00bbe454 ["INT_ADD", "tmp:1:8", ["register:4040:8", "const:4c8:8"]]
+ 00bbe454 ["STORE", null, ["const:1b1:8", "tmp:1:8", "tmp:0:1"]]
- 00bbd440 ["COPY", "register:4040:8", ["const:1126000:8"]]
+ 00bbe434 ["COPY", "register:4040:8", ["const:1127000:8"]]
- 00bbd444 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:470:8"]]
- 00bbd444 ["LOAD", "register:40a0:8", ["const:1b1:8", "tmp:0:8"]]
+ 00bbe438 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:430:8"]]
+ 00bbe438 ["LOAD", "register:40a0:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-596b1d57085ce0389d2dfff91d2976f7"></a>

### [`00bbd75c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bbd/00bbd75c.md) → [`00bbe750`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bbe/00bbe750.md) _INIT_286

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 3件 [`00b655ac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b65/00b655ac.md) [`00c57f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f00.md) [`00c5ad50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5ad50.md)
- 新版 呼出元 0件  · 呼出先 3件 [`00b665a0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b66/00b665a0.md) [`00c58ed0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58ed0.md) [`00c5bd20`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5bd20.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies, operation_sequence

命令の説明率　旧版 79.31% / 新版 79.31%

優先判定に残った影響 `call_argument_candidate` 1件

アドレスに依存する影響 `call_argument_candidate` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00bbe76c",
      "incomplete_value": false,
      "site": "00bbe770",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:1127000:8"
          ],
          [
            "leaf",
            "const:318:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bbd778",
      "incomplete_value": false,
      "site": "00bbd77c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:1126000:8"
          ],
          [
            "leaf",
            "const:358:8"
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
      "definition_site": "00bbe788",
      "incomplete_value": true,
      "site": "00bbe790",
      "value": [
        "LOAD",
        "8",
        [
          [
            "leaf",
            "const:1b1:8"
          ],
          [
            "INT_ADD",
            "8",
            [
              [
                "leaf",
                "const:c9c000:8"
              ],
              [
                "leaf",
                "const:718:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bbd794",
      "incomplete_value": true,
      "site": "00bbd79c",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:748:8"
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
    "new": {
      "definition_site": "00bbe78c",
      "incomplete_value": false,
      "site": "00bbe790",
      "value": [
        "leaf",
        "const:c64030:8"
      ]
    },
    "old": {
      "definition_site": "00bbd798",
      "incomplete_value": false,
      "site": "00bbd79c",
      "value": [
        "leaf",
        "const:c63060:8"
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
      "00bbe76c",
      "PARAM",
      [
        "storage",
        "01126358",
        null,
        null
      ]
    ],
    [
      "00bbe778",
      "READ",
      [
        "storage",
        "00c9b748",
        null,
        "pointer"
      ]
    ],
    [
      "00bbe784",
      "PARAM",
      [
        "storage",
        "01126358",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "00bbe76c",
      "PARAM",
      [
        "storage",
        "01127318",
        null,
        null
      ]
    ],
    [
      "00bbe778",
      "READ",
      [
        "storage",
        "00c9c718",
        null,
        "pointer"
      ]
    ],
    [
      "00bbe784",
      "PARAM",
      [
        "storage",
        "01127318",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 00bbd77c ["INT_ADD", "register:40f0:8", ["const:bbd77c:8", "const:4:8"]]
- 00bbd77c ["CALL", null, ["callee:00c5bd20:8"]]
+ 00bbe770 ["INT_ADD", "register:40f0:8", ["const:bbe770:8", "const:4:8"]]
+ 00bbe770 ["CALL", null, ["callee:00c5bd20:8"]]
- 00bbd79c ["INT_ADD", "register:40f0:8", ["const:bbd79c:8", "const:4:8"]]
- 00bbd79c ["CALL", null, ["callee:00c58ed0:8"]]
+ 00bbe790 ["INT_ADD", "register:40f0:8", ["const:bbe790:8", "const:4:8"]]
+ 00bbe790 ["CALL", null, ["callee:00c58ed0:8"]]
- 00bbd76c ["COPY", "register:4098:8", ["const:1126000:8"]]
+ 00bbe760 ["COPY", "register:4098:8", ["const:1127000:8"]]
~~~


<a id="compare-67e2d4bbd1d836e773f7b9120e90fd75"></a>

### [`00bc13b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bc1/00bc13b0.md) → [`00bc23a4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bc2/00bc23a4.md) _INIT_287

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 3件 [`00bc1308`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bc1/00bc1308.md) [`00bc1310`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bc1/00bc1310.md) [`00c5ac90`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5ac90.md)
- 新版 呼出元 0件  · 呼出先 3件 [`00bc22fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bc2/00bc22fc.md) [`00bc2304`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bc2/00bc2304.md) [`00c5bc60`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5bc60.md)

変更の種類 constant, operands_and_dependencies, store_destination, store_value

命令の説明率　旧版 41.67% / 新版 41.67%

優先判定に残った影響 `store_destination` 4件, `store_value` 3件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_destination",
    "new": {
      "definition_site": "00bc23c4",
      "incomplete_value": false,
      "site": "00bc23c4",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:1127000:8"
          ],
          [
            "leaf",
            "const:4d0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bc13d0",
      "incomplete_value": false,
      "site": "00bc13d0",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:1126000:8"
          ],
          [
            "leaf",
            "const:510:8"
          ]
        ]
      ]
    },
    "ordinal": 0,
    "slot": 1
  },
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "00bc23c4",
      "incomplete_value": false,
      "site": "00bc23c4",
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
            "const:911:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bc13d0",
      "incomplete_value": false,
      "site": "00bc13d0",
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
            "const:844:8"
          ]
        ]
      ]
    },
    "ordinal": 0,
    "slot": 2
  },
  {
    "confidence": "bounded",
    "kind": "store_destination",
    "new": {
      "definition_site": "00bc23c4",
      "incomplete_value": false,
      "site": "00bc23c4",
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
                "const:1127000:8"
              ],
              [
                "leaf",
                "const:4d0:8"
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
      "definition_site": "00bc13d0",
      "incomplete_value": false,
      "site": "00bc13d0",
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
                "const:1126000:8"
              ],
              [
                "leaf",
                "const:510:8"
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
      "00bc23b4",
      "PARAM",
      [
        "storage",
        "01126510",
        null,
        "undefined8"
      ]
    ],
    [
      "00bc23c4",
      "WRITE",
      [
        "storage",
        "01126510",
        null,
        "undefined8"
      ]
    ],
    [
      "00bc23c4",
      "DATA",
      [
        "storage",
        "002a9844",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "00bc23b4",
      "PARAM",
      [
        "storage",
        "011274d0",
        null,
        "undefined8"
      ]
    ],
    [
      "00bc23c4",
      "WRITE",
      [
        "storage",
        "011274d0",
        null,
        "undefined8"
      ]
    ],
    [
      "00bc23c4",
      "DATA",
      [
        "storage",
        "002a9911",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bc13b0 ["COPY", "register:4000:8", ["const:1126000:8"]]
+ 00bc23a4 ["COPY", "register:4000:8", ["const:1127000:8"]]
- 00bc13b8 ["COPY", "register:4048:8", ["const:bc1000:8"]]
+ 00bc23ac ["COPY", "register:4048:8", ["const:bc2000:8"]]
- 00bc13bc ["COPY", "register:4050:8", ["const:bc1000:8"]]
+ 00bc23b0 ["COPY", "register:4050:8", ["const:bc2000:8"]]
~~~


<a id="compare-3df02c0ba870a64605a3db8b6ee70658"></a>

### [`00bc13e8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bc1/00bc13e8.md) → [`00bc23dc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bc2/00bc23dc.md) _ZN8firebase13remote_config12RemoteConfig11GetInstanceEPNS_3AppE

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`00c5ac00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5ac00.md) · 呼出先 11件 [`00bc1b00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bc1/00bc1b00.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c5aad0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aad0.md) [`00c5aae0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aae0.md) [`00c5acc0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5acc0.md)
- 新版 呼出元 1件 [`00c5bbd0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5bbd0.md) · 呼出先 11件 [`00bc2af4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bc2/00bc2af4.md) [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md) [`00c5baa0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5baa0.md) [`00c5bab0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5bab0.md) [`00c5bc90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5bc90.md)

変更の種類 branch_value, call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 98.45% / 新版 98.45%

優先判定に残った影響 `call_argument_candidate` 2件

アドレスに依存する影響 `branch_value` 1件, `call_argument_candidate` 4件

~~~json
[
  {
    "confidence": "limited",
    "kind": "branch_value",
    "new": {
      "definition_site": "00bc2418",
      "incomplete_value": true,
      "site": "00bc2418",
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
      "definition_site": "00bc1424",
      "incomplete_value": true,
      "site": "00bc1424",
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
      "definition_site": "00bc23fc",
      "incomplete_value": true,
      "site": "00bc2400",
      "value": [
        "LOAD",
        "8",
        [
          [
            "leaf",
            "const:1b1:8"
          ],
          [
            "INT_ADD",
            "8",
            [
              [
                "leaf",
                "const:c9c000:8"
              ],
              [
                "leaf",
                "const:9d0:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bc1408",
      "incomplete_value": true,
      "site": "00bc140c",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:a00:8"
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
    "new": {
      "definition_site": "00bc2458",
      "incomplete_value": true,
      "site": "00bc245c",
      "value": [
        "LOAD",
        "8",
        [
          [
            "leaf",
            "const:1b1:8"
          ],
          [
            "INT_ADD",
            "8",
            [
              [
                "leaf",
                "const:c9c000:8"
              ],
              [
                "leaf",
                "const:9d0:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bc1464",
      "incomplete_value": true,
      "site": "00bc1468",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:a00:8"
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
      "00bc23f4",
      "READ",
      [
        "storage",
        "00c9ba00",
        null,
        "pointer"
      ]
    ],
    [
      "00bc23fc",
      "PARAM",
      [
        "storage",
        "01126550",
        "firebase::remote_config::g_rc_mutex",
        "undefined1[40]"
      ]
    ],
    [
      "00bc2404",
      "PARAM",
      [
        "storage",
        "01126550",
        "firebase::remote_config::g_rc_mutex",
        "undefined1[40]"
      ]
    ]
  ],
  "added": [
    [
      "00bc23f4",
      "READ",
      [
        "storage",
        "00c9c9d0",
        null,
        "pointer"
      ]
    ],
    [
      "00bc23fc",
      "PARAM",
      [
        "storage",
        "01127510",
        "firebase::remote_config::g_rc_mutex",
        "undefined1[40]"
      ]
    ],
    [
      "00bc2404",
      "PARAM",
      [
        "storage",
        "01127510",
        "firebase::remote_config::g_rc_mutex",
        "undefined1[40]"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bc140c ["INT_ADD", "register:40f0:8", ["const:bc140c:8", "const:4:8"]]
- 00bc140c ["CALL", null, ["callee:00c5baa0:8"]]
+ 00bc2400 ["INT_ADD", "register:40f0:8", ["const:bc2400:8", "const:4:8"]]
+ 00bc2400 ["CALL", null, ["callee:00c5baa0:8"]]
- 00bc1468 ["INT_ADD", "register:40f0:8", ["const:bc1468:8", "const:4:8"]]
- 00bc1468 ["CALL", null, ["callee:00c5bab0:8"]]
+ 00bc245c ["INT_ADD", "register:40f0:8", ["const:bc245c:8", "const:4:8"]]
+ 00bc245c ["CALL", null, ["callee:00c5bab0:8"]]
- 00bc1488 ["INT_ADD", "register:40f0:8", ["const:bc1488:8", "const:4:8"]]
- 00bc1488 ["CALL", null, ["callee:00c5c0a0:8"]]
+ 00bc247c ["INT_ADD", "register:40f0:8", ["const:bc247c:8", "const:4:8"]]
+ 00bc247c ["CALL", null, ["callee:00c5c0a0:8"]]
~~~


<a id="compare-b17644e21b7d1ed2f872bb6980091bc2"></a>

### [`00bc181c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bc1/00bc181c.md) → [`00bc2810`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bc2/00bc2810.md) _ZN8firebase13remote_config12RemoteConfigC2EPNS_3AppE

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 3件 [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c5b0d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b0d0.md) [`00c5d940`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5d940.md)
- 新版 呼出元 0件  · 呼出先 3件 [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md) [`00c5c0a0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5c0a0.md) [`00c5e910`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5e/00c5e910.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 95.24% / 新版 95.24%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00bc2830",
      "incomplete_value": false,
      "site": "00bc2834",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:2b2000:8"
          ],
          [
            "leaf",
            "const:653:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bc183c",
      "incomplete_value": false,
      "site": "00bc1840",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:2b2000:8"
          ],
          [
            "leaf",
            "const:609:8"
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
      "00bc2830",
      "PARAM",
      [
        "storage",
        "002b2609",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "00bc2830",
      "PARAM",
      [
        "storage",
        "002b2653",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bc1840 ["INT_ADD", "register:40f0:8", ["const:bc1840:8", "const:4:8"]]
- 00bc1840 ["CALL", null, ["callee:00c5c0a0:8"]]
+ 00bc2834 ["INT_ADD", "register:40f0:8", ["const:bc2834:8", "const:4:8"]]
+ 00bc2834 ["CALL", null, ["callee:00c5c0a0:8"]]
- 00bc183c ["COPY", "tmp:0:8", ["const:609:8"]]
- 00bc183c ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 00bc183c ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 00bc183c ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 00bc2830 ["COPY", "tmp:0:8", ["const:653:8"]]
+ 00bc2830 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 00bc2830 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 00bc2830 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
- 00bc184c ["INT_ADD", "register:40f0:8", ["const:bc184c:8", "const:4:8"]]
- 00bc184c ["CALL", null, ["callee:00c58f30:8"]]
+ 00bc2840 ["INT_ADD", "register:40f0:8", ["const:bc2840:8", "const:4:8"]]
+ 00bc2840 ["CALL", null, ["callee:00c58f30:8"]]
~~~


<a id="compare-d1e1a4a137743771bcc94d9920ed1347"></a>

### [`00bc1b00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bc1/00bc1b00.md) → [`00bc2af4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bc2/00bc2af4.md) FUN_00bc2af4

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`00bc13e8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bc1/00bc13e8.md) · 呼出先 2件 [`00c5aeb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aeb0.md) [`00c5d780`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5d780.md)
- 新版 呼出元 1件 [`00bc23dc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bc2/00bc23dc.md) · 呼出先 2件 [`00c5be80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5be80.md) [`00c5e750`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5e/00c5e750.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 92.31% / 新版 92.31%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00bc2b0c",
      "incomplete_value": false,
      "site": "00bc2b14",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:2ac000:8"
          ],
          [
            "leaf",
            "const:242:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bc1b18",
      "incomplete_value": false,
      "site": "00bc1b20",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:2ac000:8"
          ],
          [
            "leaf",
            "const:175:8"
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
      "00bc2b0c",
      "PARAM",
      [
        "storage",
        "002ac175",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "00bc2b0c",
      "PARAM",
      [
        "storage",
        "002ac242",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bc1b20 ["INT_ADD", "register:40f0:8", ["const:bc1b20:8", "const:4:8"]]
- 00bc1b20 ["CALL", null, ["callee:00c5be80:8"]]
+ 00bc2b14 ["INT_ADD", "register:40f0:8", ["const:bc2b14:8", "const:4:8"]]
+ 00bc2b14 ["CALL", null, ["callee:00c5be80:8"]]
- 00bc1b18 ["COPY", "tmp:0:8", ["const:175:8"]]
- 00bc1b18 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 00bc1b18 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 00bc1b18 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 00bc2b0c ["COPY", "tmp:0:8", ["const:242:8"]]
+ 00bc2b0c ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 00bc2b0c ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 00bc2b0c ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
~~~


<a id="compare-97e65d5c02f4c59b560af863f2b5893b"></a>

### [`00bc1b74`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bc1/00bc1b74.md) → [`00bc2b68`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bc2/00bc2b68.md) _INIT_288

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 4件 [`00b655ac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b65/00b655ac.md) [`00bc13e0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bc1/00bc13e0.md) [`00c57f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f00.md) [`00c5ad50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5ad50.md)
- 新版 呼出元 0件  · 呼出先 4件 [`00b665a0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b66/00b665a0.md) [`00bc23d4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bc2/00bc23d4.md) [`00c58ed0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58ed0.md) [`00c5bd20`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5bd20.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies, store_destination, store_value

命令の説明率　旧版 88.89% / 新版 88.89%

優先判定に残った影響 `call_argument_candidate` 2件

アドレスに依存する影響 `call_argument_candidate` 2件, `store_destination` 3件, `store_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_destination",
    "new": {
      "definition_site": "00bc2b8c",
      "incomplete_value": true,
      "site": "00bc2b8c",
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
            "const:8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bc1b98",
      "incomplete_value": true,
      "site": "00bc1b98",
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
            "const:8:8"
          ]
        ]
      ]
    },
    "ordinal": 4,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "store_destination",
    "new": {
      "definition_site": "00bc2b98",
      "incomplete_value": true,
      "site": "00bc2b98",
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
      "definition_site": "00bc1ba4",
      "incomplete_value": true,
      "site": "00bc1ba4",
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
    "ordinal": 5,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "store_destination",
    "new": {
      "definition_site": "00bc2b9c",
      "incomplete_value": true,
      "site": "00bc2b9c",
      "value": [
        "LOAD",
        "8",
        [
          [
            "leaf",
            "const:1b1:8"
          ],
          [
            "INT_ADD",
            "8",
            [
              [
                "leaf",
                "const:c9c000:8"
              ],
              [
                "leaf",
                "const:9d8:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bc1ba8",
      "incomplete_value": true,
      "site": "00bc1ba8",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:a08:8"
              ]
            ]
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
      "00bc2b78",
      "READ",
      [
        "storage",
        "00c9ba08",
        null,
        "pointer"
      ]
    ],
    [
      "00bc2b78",
      "PARAM",
      [
        "storage",
        "01126538",
        "firebase::remote_config::g_rcs",
        "undefined8"
      ]
    ],
    [
      "00bc2b8c",
      "WRITE",
      [
        "storage",
        "01126540",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00bc2b78",
      "READ",
      [
        "storage",
        "00c9c9d8",
        null,
        "pointer"
      ]
    ],
    [
      "00bc2b78",
      "PARAM",
      [
        "storage",
        "011274f8",
        "firebase::remote_config::g_rcs",
        "undefined8"
      ]
    ],
    [
      "00bc2b8c",
      "WRITE",
      [
        "storage",
        "01127500",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bc1bac ["INT_ADD", "register:40f0:8", ["const:bc1bac:8", "const:4:8"]]
- 00bc1bac ["CALL", null, ["callee:00c58ed0:8"]]
+ 00bc2ba0 ["INT_ADD", "register:40f0:8", ["const:bc2ba0:8", "const:4:8"]]
+ 00bc2ba0 ["CALL", null, ["callee:00c58ed0:8"]]
- 00bc1bc0 ["INT_ADD", "register:40f0:8", ["const:bc1bc0:8", "const:4:8"]]
- 00bc1bc0 ["CALL", null, ["callee:00c5bd20:8"]]
+ 00bc2bb4 ["INT_ADD", "register:40f0:8", ["const:bc2bb4:8", "const:4:8"]]
+ 00bc2bb4 ["CALL", null, ["callee:00c5bd20:8"]]
- 00bc1b80 ["COPY", "register:4008:8", ["const:c9b000:8"]]
+ 00bc2b74 ["COPY", "register:4008:8", ["const:c9c000:8"]]
~~~


<a id="compare-c4d7337c9a054872f297d83e59240eff"></a>

### [`00bc1be0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bc1/00bc1be0.md) → [`00bc2bd4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bc2/00bc2bd4.md) _ZN8firebase13remote_config8internal6config19CacheClassFromFilesEP7_JNIEnvP8_jobjectPKNSt6__ndk16vectorINS_8internal12EmbeddedFileENS7_9allo

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c5afe0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5afe0.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c5bfb0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5bfb0.md)

変更の種類 branch_value, call_argument_candidate, constant, operands_and_dependencies, store_condition, store_destination

命令の説明率　旧版 87.50% / 新版 87.50%

優先判定に残った影響 `call_argument_candidate` 1件, `store_destination` 1件

アドレスに依存する影響 `branch_value` 1件, `store_condition` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_destination",
    "new": {
      "definition_site": "00bc2c00",
      "incomplete_value": true,
      "site": "00bc2c00",
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
            "const:538:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bc1c0c",
      "incomplete_value": true,
      "site": "00bc1c0c",
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
            "const:578:8"
          ]
        ]
      ]
    },
    "ordinal": 3,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "branch_value",
    "new": {
      "definition_site": "00bc2be8",
      "incomplete_value": true,
      "site": "00bc2be8",
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
      "definition_site": "00bc1bf4",
      "incomplete_value": true,
      "site": "00bc1bf4",
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
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00bc2bf4",
      "incomplete_value": false,
      "site": "00bc2bf8",
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
            "const:711:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bc1c00",
      "incomplete_value": false,
      "site": "00bc1c04",
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
            "const:63a:8"
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
      "00bc2be4",
      "READ",
      [
        "storage",
        "01126578",
        null,
        "undefined8"
      ]
    ],
    [
      "00bc2bf4",
      "PARAM",
      [
        "storage",
        "002b163a",
        null,
        "string"
      ]
    ],
    [
      "00bc2c00",
      "WRITE",
      [
        "storage",
        "01126578",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00bc2be4",
      "READ",
      [
        "storage",
        "01127538",
        null,
        "undefined8"
      ]
    ],
    [
      "00bc2bf4",
      "PARAM",
      [
        "storage",
        "002b1711",
        null,
        "string"
      ]
    ],
    [
      "00bc2c00",
      "WRITE",
      [
        "storage",
        "01127538",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bc1c04 ["INT_ADD", "register:40f0:8", ["const:bc1c04:8", "const:4:8"]]
- 00bc1c04 ["CALL", null, ["callee:00c5bfb0:8"]]
+ 00bc2bf8 ["INT_ADD", "register:40f0:8", ["const:bc2bf8:8", "const:4:8"]]
+ 00bc2bf8 ["CALL", null, ["callee:00c5bfb0:8"]]
- 00bc1c0c ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:578:8"]]
- 00bc1c0c ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00bc2c00 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:538:8"]]
+ 00bc2c00 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00bc1bec ["COPY", "register:4098:8", ["const:1126000:8"]]
+ 00bc2be0 ["COPY", "register:4098:8", ["const:1127000:8"]]
~~~


<a id="compare-3454796e99b7e90666270f1fd6f7490d"></a>

### [`00bc1c20`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bc1/00bc1c20.md) → [`00bc2c14`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bc2/00bc2c14.md) _ZN8firebase13remote_config8internal6config19CacheClassFromFilesEP7_JNIEnvP8_jobjectPKNSt6__ndk16vectorINS_8internal12EmbeddedFileENS7_9allo

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c5afe0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5afe0.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c5bfb0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5bfb0.md)

変更の種類 branch_value, call_argument_candidate, constant, operands_and_dependencies, store_condition, store_destination

命令の説明率　旧版 87.50% / 新版 87.50%

優先判定に残った影響 `call_argument_candidate` 1件, `store_destination` 1件

アドレスに依存する影響 `branch_value` 1件, `store_condition` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_destination",
    "new": {
      "definition_site": "00bc2c40",
      "incomplete_value": true,
      "site": "00bc2c40",
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
            "const:538:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bc1c4c",
      "incomplete_value": true,
      "site": "00bc1c4c",
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
            "const:578:8"
          ]
        ]
      ]
    },
    "ordinal": 3,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "branch_value",
    "new": {
      "definition_site": "00bc2c28",
      "incomplete_value": true,
      "site": "00bc2c28",
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
      "definition_site": "00bc1c34",
      "incomplete_value": true,
      "site": "00bc1c34",
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
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00bc2c30",
      "incomplete_value": false,
      "site": "00bc2c38",
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
            "const:711:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bc1c3c",
      "incomplete_value": false,
      "site": "00bc1c44",
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
            "const:63a:8"
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
      "00bc2c24",
      "READ",
      [
        "storage",
        "01126578",
        null,
        "undefined8"
      ]
    ],
    [
      "00bc2c30",
      "PARAM",
      [
        "storage",
        "002b163a",
        null,
        "string"
      ]
    ],
    [
      "00bc2c40",
      "WRITE",
      [
        "storage",
        "01126578",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00bc2c24",
      "READ",
      [
        "storage",
        "01127538",
        null,
        "undefined8"
      ]
    ],
    [
      "00bc2c30",
      "PARAM",
      [
        "storage",
        "002b1711",
        null,
        "string"
      ]
    ],
    [
      "00bc2c40",
      "WRITE",
      [
        "storage",
        "01127538",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bc1c44 ["INT_ADD", "register:40f0:8", ["const:bc1c44:8", "const:4:8"]]
- 00bc1c44 ["CALL", null, ["callee:00c5bfb0:8"]]
+ 00bc2c38 ["INT_ADD", "register:40f0:8", ["const:bc2c38:8", "const:4:8"]]
+ 00bc2c38 ["CALL", null, ["callee:00c5bfb0:8"]]
- 00bc1c4c ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:578:8"]]
- 00bc1c4c ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00bc2c40 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:538:8"]]
+ 00bc2c40 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00bc1c2c ["COPY", "register:4098:8", ["const:1126000:8"]]
+ 00bc2c20 ["COPY", "register:4098:8", ["const:1127000:8"]]
~~~


<a id="compare-4e94c9f672deb982a5029c96c4579a17"></a>

### [`00bc1c60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bc1/00bc1c60.md) → [`00bc2c54`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bc2/00bc2c54.md) _ZN8firebase13remote_config8internal6config10CacheClassEP7_JNIEnvP8_jobjectNS_4util16ClassRequirementE

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c5afe0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5afe0.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c5bfb0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5bfb0.md)

変更の種類 branch_value, call_argument_candidate, constant, operands_and_dependencies, store_condition, store_destination

命令の説明率　旧版 88.24% / 新版 88.24%

優先判定に残った影響 `call_argument_candidate` 1件, `store_destination` 1件

アドレスに依存する影響 `branch_value` 1件, `store_condition` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_destination",
    "new": {
      "definition_site": "00bc2c84",
      "incomplete_value": true,
      "site": "00bc2c84",
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
            "const:538:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bc1c90",
      "incomplete_value": true,
      "site": "00bc1c90",
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
            "const:578:8"
          ]
        ]
      ]
    },
    "ordinal": 3,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "branch_value",
    "new": {
      "definition_site": "00bc2c68",
      "incomplete_value": true,
      "site": "00bc2c68",
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
      "definition_site": "00bc1c74",
      "incomplete_value": true,
      "site": "00bc1c74",
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
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00bc2c74",
      "incomplete_value": false,
      "site": "00bc2c7c",
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
            "const:711:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bc1c80",
      "incomplete_value": false,
      "site": "00bc1c88",
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
            "const:63a:8"
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
      "00bc2c64",
      "READ",
      [
        "storage",
        "01126578",
        null,
        "undefined8"
      ]
    ],
    [
      "00bc2c74",
      "PARAM",
      [
        "storage",
        "002b163a",
        null,
        "string"
      ]
    ],
    [
      "00bc2c84",
      "WRITE",
      [
        "storage",
        "01126578",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00bc2c64",
      "READ",
      [
        "storage",
        "01127538",
        null,
        "undefined8"
      ]
    ],
    [
      "00bc2c74",
      "PARAM",
      [
        "storage",
        "002b1711",
        null,
        "string"
      ]
    ],
    [
      "00bc2c84",
      "WRITE",
      [
        "storage",
        "01127538",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bc1c88 ["INT_ADD", "register:40f0:8", ["const:bc1c88:8", "const:4:8"]]
- 00bc1c88 ["CALL", null, ["callee:00c5bfb0:8"]]
+ 00bc2c7c ["INT_ADD", "register:40f0:8", ["const:bc2c7c:8", "const:4:8"]]
+ 00bc2c7c ["CALL", null, ["callee:00c5bfb0:8"]]
- 00bc1c90 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:578:8"]]
- 00bc1c90 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00bc2c84 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:538:8"]]
+ 00bc2c84 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00bc1c6c ["COPY", "register:4098:8", ["const:1126000:8"]]
+ 00bc2c60 ["COPY", "register:4098:8", ["const:1127000:8"]]
~~~


<a id="compare-c8cdfd1508606291c2a53e16c6f554d4"></a>

### [`00bc1ca4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bc1/00bc1ca4.md) → [`00bc2c98`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bc2/00bc2c98.md) _ZN8firebase13remote_config8internal6config10CacheClassEP7_JNIEnvP8_jobject

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c5afe0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5afe0.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c5bfb0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5bfb0.md)

変更の種類 branch_value, call_argument_candidate, constant, operands_and_dependencies, store_condition, store_destination

命令の説明率　旧版 88.24% / 新版 88.24%

優先判定に残った影響 `call_argument_candidate` 1件, `store_destination` 1件

アドレスに依存する影響 `branch_value` 1件, `store_condition` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_destination",
    "new": {
      "definition_site": "00bc2cc8",
      "incomplete_value": true,
      "site": "00bc2cc8",
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
            "const:538:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bc1cd4",
      "incomplete_value": true,
      "site": "00bc1cd4",
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
            "const:578:8"
          ]
        ]
      ]
    },
    "ordinal": 3,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "branch_value",
    "new": {
      "definition_site": "00bc2cac",
      "incomplete_value": true,
      "site": "00bc2cac",
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
      "definition_site": "00bc1cb8",
      "incomplete_value": true,
      "site": "00bc1cb8",
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
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00bc2cb4",
      "incomplete_value": false,
      "site": "00bc2cc0",
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
            "const:711:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bc1cc0",
      "incomplete_value": false,
      "site": "00bc1ccc",
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
            "const:63a:8"
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
      "00bc2ca8",
      "READ",
      [
        "storage",
        "01126578",
        null,
        "undefined8"
      ]
    ],
    [
      "00bc2cb4",
      "PARAM",
      [
        "storage",
        "002b163a",
        null,
        "string"
      ]
    ],
    [
      "00bc2cc8",
      "WRITE",
      [
        "storage",
        "01126578",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00bc2ca8",
      "READ",
      [
        "storage",
        "01127538",
        null,
        "undefined8"
      ]
    ],
    [
      "00bc2cb4",
      "PARAM",
      [
        "storage",
        "002b1711",
        null,
        "string"
      ]
    ],
    [
      "00bc2cc8",
      "WRITE",
      [
        "storage",
        "01127538",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bc1ccc ["INT_ADD", "register:40f0:8", ["const:bc1ccc:8", "const:4:8"]]
- 00bc1ccc ["CALL", null, ["callee:00c5bfb0:8"]]
+ 00bc2cc0 ["INT_ADD", "register:40f0:8", ["const:bc2cc0:8", "const:4:8"]]
+ 00bc2cc0 ["CALL", null, ["callee:00c5bfb0:8"]]
- 00bc1cd4 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:578:8"]]
- 00bc1cd4 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00bc2cc8 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:538:8"]]
+ 00bc2cc8 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00bc1cb0 ["COPY", "register:4098:8", ["const:1126000:8"]]
+ 00bc2ca4 ["COPY", "register:4098:8", ["const:1127000:8"]]
~~~


<a id="compare-d8381b0fe2f078ee4eea03b677116b7f"></a>

### [`00bc1cf4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bc1/00bc1cf4.md) → [`00bc2ce8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bc2/00bc2ce8.md) _ZN8firebase13remote_config8internal6config15RegisterNativesEP7_JNIEnvPK15JNINativeMethodm

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c5b030`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b030.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c5c000`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5c000.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies, store_destination

命令の説明率　旧版 92.59% / 新版 92.59%

優先判定に残った影響 `call_argument_candidate` 1件, `store_destination` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_destination",
    "new": {
      "definition_site": "00bc2d40",
      "incomplete_value": true,
      "site": "00bc2d40",
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
            "const:540:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bc1d4c",
      "incomplete_value": true,
      "site": "00bc1d4c",
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
            "const:580:8"
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
      "definition_site": "00bc2d1c",
      "incomplete_value": true,
      "site": "00bc2d28",
      "value": [
        "LOAD",
        "8",
        [
          [
            "leaf",
            "const:1b1:8"
          ],
          [
            "INT_ADD",
            "8",
            [
              [
                "leaf",
                "const:1127000:8"
              ],
              [
                "leaf",
                "const:538:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bc1d28",
      "incomplete_value": true,
      "site": "00bc1d34",
      "value": [
        "LOAD",
        "8",
        [
          [
            "leaf",
            "const:1b1:8"
          ],
          [
            "INT_ADD",
            "8",
            [
              [
                "leaf",
                "const:1126000:8"
              ],
              [
                "leaf",
                "const:578:8"
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


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "00bc2cfc",
      "READ",
      [
        "storage",
        "01126580",
        null,
        "undefined1"
      ]
    ],
    [
      "00bc2d1c",
      "READ",
      [
        "storage",
        "01126578",
        null,
        "undefined8"
      ]
    ],
    [
      "00bc2d40",
      "WRITE",
      [
        "storage",
        "01126580",
        null,
        "undefined1"
      ]
    ]
  ],
  "added": [
    [
      "00bc2cfc",
      "READ",
      [
        "storage",
        "01127540",
        null,
        "undefined1"
      ]
    ],
    [
      "00bc2d1c",
      "READ",
      [
        "storage",
        "01127538",
        null,
        "undefined8"
      ]
    ],
    [
      "00bc2d40",
      "WRITE",
      [
        "storage",
        "01127540",
        null,
        "undefined1"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bc1d34 ["COPY", "register:0:8", ["register:4040:8"]]
- 00bc1d34 ["INT_ADD", "register:40f0:8", ["const:bc1d34:8", "const:4:8"]]
- 00bc1d34 ["CALLIND", null, ["register:0:8"]]
+ 00bc2d28 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00bc2d28 ["INT_ADD", "register:40f0:8", ["const:bc2d28:8", "const:4:8"]]
+ 00bc2d28 ["CALLIND", null, ["register:0:8"]]
- 00bc1d4c ["COPY", "tmp:0:4", ["register:4000:4"]]
- 00bc1d4c ["INT_ADD", "tmp:1:8", ["register:40a8:8", "const:580:8"]]
- 00bc1d4c ["STORE", null, ["const:1b1:8", "tmp:1:8", "tmp:0:1"]]
+ 00bc2d40 ["COPY", "tmp:0:4", ["register:4000:4"]]
+ 00bc2d40 ["INT_ADD", "tmp:1:8", ["register:40a8:8", "const:540:8"]]
+ 00bc2d40 ["STORE", null, ["const:1b1:8", "tmp:1:8", "tmp:0:1"]]
- 00bc1d04 ["COPY", "register:40a8:8", ["const:1126000:8"]]
+ 00bc2cf8 ["COPY", "register:40a8:8", ["const:1127000:8"]]
~~~


<a id="compare-fe4bc766da6a014e5b422db94ebe79d0"></a>

### [`00bc1d60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bc1/00bc1d60.md) → [`00bc2d54`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bc2/00bc2d54.md) _ZN8firebase13remote_config8internal6config12ReleaseClassEP7_JNIEnv

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c5b030`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b030.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c5c000`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5c000.md)

変更の種類 branch_value, constant, operands_and_dependencies, store_destination

命令の説明率　旧版 89.29% / 新版 89.29%

優先判定に残った影響 `store_destination` 2件

アドレスに依存する影響 `branch_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_destination",
    "new": {
      "definition_site": "00bc2d90",
      "incomplete_value": true,
      "site": "00bc2d90",
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
            "const:540:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bc1d9c",
      "incomplete_value": true,
      "site": "00bc1d9c",
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
            "const:580:8"
          ]
        ]
      ]
    },
    "ordinal": 5,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "store_destination",
    "new": {
      "definition_site": "00bc2db0",
      "incomplete_value": true,
      "site": "00bc2db0",
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
            "const:538:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bc1dbc",
      "incomplete_value": true,
      "site": "00bc1dbc",
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
            "const:578:8"
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
      "definition_site": "00bc2d6c",
      "incomplete_value": true,
      "site": "00bc2d6c",
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
      "definition_site": "00bc1d78",
      "incomplete_value": true,
      "site": "00bc1d78",
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
      "00bc2d68",
      "READ",
      [
        "storage",
        "01126578",
        null,
        "undefined8"
      ]
    ],
    [
      "00bc2d74",
      "READ",
      [
        "storage",
        "01126580",
        null,
        "undefined1"
      ]
    ],
    [
      "00bc2d90",
      "WRITE",
      [
        "storage",
        "01126580",
        null,
        "undefined1"
      ]
    ]
  ],
  "added": [
    [
      "00bc2d68",
      "READ",
      [
        "storage",
        "01127538",
        null,
        "undefined8"
      ]
    ],
    [
      "00bc2d74",
      "READ",
      [
        "storage",
        "01127540",
        null,
        "undefined1"
      ]
    ],
    [
      "00bc2d90",
      "WRITE",
      [
        "storage",
        "01127540",
        null,
        "undefined1"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bc1d9c ["COPY", "tmp:0:4", ["const:0:4"]]
- 00bc1d9c ["COPY", "tmp:1:4", ["tmp:0:4"]]
- 00bc1d9c ["INT_ADD", "tmp:2:8", ["register:40a8:8", "const:580:8"]]
- 00bc1d9c ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:1:1"]]
+ 00bc2d90 ["COPY", "tmp:0:4", ["const:0:4"]]
+ 00bc2d90 ["COPY", "tmp:1:4", ["tmp:0:4"]]
+ 00bc2d90 ["INT_ADD", "tmp:2:8", ["register:40a8:8", "const:540:8"]]
+ 00bc2d90 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:1:1"]]
- 00bc1dbc ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:578:8"]]
- 00bc1dbc ["COPY", "tmp:1:8", ["const:0:8"]]
- 00bc1dbc ["STORE", null, ["const:1b1:8", "tmp:0:8", "tmp:1:8"]]
+ 00bc2db0 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:538:8"]]
+ 00bc2db0 ["COPY", "tmp:1:8", ["const:0:8"]]
+ 00bc2db0 ["STORE", null, ["const:1b1:8", "tmp:0:8", "tmp:1:8"]]
- 00bc1d70 ["COPY", "register:40a0:8", ["const:1126000:8"]]
+ 00bc2d64 ["COPY", "register:40a0:8", ["const:1127000:8"]]
~~~


<a id="compare-60eaf21ef798d1bcfdd7529ad235f85c"></a>

### [`00bc1dd0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bc1/00bc1dd0.md) → [`00bc2dc4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bc2/00bc2dc4.md) _ZN8firebase13remote_config8internal6config14CacheMethodIdsEP7_JNIEnvP8_jobject

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c5afe0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5afe0.md) [`00c5b000`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b000.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c5bfb0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5bfb0.md) [`00c5bfd0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5bfd0.md)

変更の種類 branch_value, call_argument_candidate, constant, operands_and_dependencies, store_condition, store_destination

命令の説明率　旧版 75.00% / 新版 75.00%

優先判定に残った影響 `branch_value` 1件, `call_argument_candidate` 1件, `store_condition` 1件, `store_destination` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_destination",
    "new": {
      "definition_site": "00bc2e04",
      "incomplete_value": true,
      "site": "00bc2e04",
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
            "const:538:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bc1e10",
      "incomplete_value": true,
      "site": "00bc1e10",
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
            "const:578:8"
          ]
        ]
      ]
    },
    "ordinal": 4,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "branch_value",
    "new": {
      "definition_site": "00bc2de0",
      "incomplete_value": true,
      "site": "00bc2de0",
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
      "definition_site": "00bc1dec",
      "incomplete_value": true,
      "site": "00bc1dec",
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
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00bc2de8",
      "incomplete_value": false,
      "site": "00bc2dfc",
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
            "const:711:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bc1df4",
      "incomplete_value": false,
      "site": "00bc1e08",
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
            "const:63a:8"
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
      "00bc2dd8",
      "READ",
      [
        "storage",
        "01126578",
        null,
        "undefined8"
      ]
    ],
    [
      "00bc2de8",
      "PARAM",
      [
        "storage",
        "002b163a",
        null,
        "string"
      ]
    ],
    [
      "00bc2e04",
      "WRITE",
      [
        "storage",
        "01126578",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00bc2dd8",
      "READ",
      [
        "storage",
        "01127538",
        null,
        "undefined8"
      ]
    ],
    [
      "00bc2de8",
      "PARAM",
      [
        "storage",
        "002b1711",
        null,
        "string"
      ]
    ],
    [
      "00bc2e04",
      "WRITE",
      [
        "storage",
        "01127538",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bc1e08 ["INT_ADD", "register:40f0:8", ["const:bc1e08:8", "const:4:8"]]
- 00bc1e08 ["CALL", null, ["callee:00c5bfb0:8"]]
+ 00bc2dfc ["INT_ADD", "register:40f0:8", ["const:bc2dfc:8", "const:4:8"]]
+ 00bc2dfc ["CALL", null, ["callee:00c5bfb0:8"]]
- 00bc1e10 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:578:8"]]
- 00bc1e10 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00bc2e04 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:538:8"]]
+ 00bc2e04 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00bc1ddc ["COPY", "register:40a0:8", ["const:1126000:8"]]
+ 00bc2dd0 ["COPY", "register:40a0:8", ["const:1127000:8"]]
~~~


<a id="compare-7f1458c74cabacb583a1c14916edb5b2"></a>

### [`00bc1e40`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bc1/00bc1e40.md) → [`00bc2e34`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bc2/00bc2e34.md) _ZN8firebase13remote_config8internal6config11GetMethodIdENS2_6MethodE

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c5b0d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b0d0.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c5c0a0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5c0a0.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies, return_value_candidate

命令の説明率　旧版 80.00% / 新版 80.00%

優先判定に残った影響 `call_argument_candidate` 1件, `return_value_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00bc2e50",
      "incomplete_value": false,
      "site": "00bc2e54",
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
            "const:463:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bc1e5c",
      "incomplete_value": false,
      "site": "00bc1e60",
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
            "const:30b:8"
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
    "new": {
      "definition_site": "00bc2e60",
      "incomplete_value": true,
      "site": "00bc2e6c",
      "value": [
        "LOAD",
        "8",
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
      "definition_site": "00bc1e6c",
      "incomplete_value": true,
      "site": "00bc1e78",
      "value": [
        "LOAD",
        "8",
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
      "00bc2e50",
      "PARAM",
      [
        "storage",
        "002a830b",
        null,
        "string"
      ]
    ],
    [
      "00bc2e60",
      "DATA",
      [
        "storage",
        "01126588",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00bc2e50",
      "PARAM",
      [
        "storage",
        "002a8463",
        null,
        "string"
      ]
    ],
    [
      "00bc2e60",
      "DATA",
      [
        "storage",
        "01127548",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bc1e60 ["INT_ADD", "register:40f0:8", ["const:bc1e60:8", "const:4:8"]]
- 00bc1e60 ["CALL", null, ["callee:00c5c0a0:8"]]
+ 00bc2e54 ["INT_ADD", "register:40f0:8", ["const:bc2e54:8", "const:4:8"]]
+ 00bc2e54 ["CALL", null, ["callee:00c5c0a0:8"]]
- 00bc1e5c ["COPY", "tmp:0:8", ["const:30b:8"]]
- 00bc1e5c ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 00bc1e5c ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 00bc1e5c ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 00bc2e50 ["COPY", "tmp:0:8", ["const:463:8"]]
+ 00bc2e50 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 00bc2e50 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 00bc2e50 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
- 00bc1e64 ["COPY", "register:4040:8", ["const:1126000:8"]]
+ 00bc2e58 ["COPY", "register:4040:8", ["const:1127000:8"]]
~~~


<a id="compare-a5bc5bd7213dc154896f48533dfc141c"></a>

### [`00bc1e7c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bc1/00bc1e7c.md) → [`00bc2e70`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bc2/00bc2e70.md) _ZN8firebase13remote_config8internal6config13CacheFieldIdsEP7_JNIEnvP8_jobject

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c5afc0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5afc0.md) [`00c5afe0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5afe0.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c5bf90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5bf90.md) [`00c5bfb0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5bfb0.md)

変更の種類 branch_value, call_argument_candidate, constant, operands_and_dependencies, store_condition, store_destination

命令の説明率　旧版 75.00% / 新版 75.00%

優先判定に残った影響 `branch_value` 1件, `call_argument_candidate` 1件, `store_condition` 1件, `store_destination` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_destination",
    "new": {
      "definition_site": "00bc2eb0",
      "incomplete_value": true,
      "site": "00bc2eb0",
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
            "const:538:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bc1ebc",
      "incomplete_value": true,
      "site": "00bc1ebc",
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
            "const:578:8"
          ]
        ]
      ]
    },
    "ordinal": 4,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "branch_value",
    "new": {
      "definition_site": "00bc2e8c",
      "incomplete_value": true,
      "site": "00bc2e8c",
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
      "definition_site": "00bc1e98",
      "incomplete_value": true,
      "site": "00bc1e98",
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
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00bc2e94",
      "incomplete_value": false,
      "site": "00bc2ea8",
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
            "const:711:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bc1ea0",
      "incomplete_value": false,
      "site": "00bc1eb4",
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
            "const:63a:8"
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
      "00bc2e84",
      "READ",
      [
        "storage",
        "01126578",
        null,
        "undefined8"
      ]
    ],
    [
      "00bc2e94",
      "PARAM",
      [
        "storage",
        "002b163a",
        null,
        "string"
      ]
    ],
    [
      "00bc2eb0",
      "WRITE",
      [
        "storage",
        "01126578",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00bc2e84",
      "READ",
      [
        "storage",
        "01127538",
        null,
        "undefined8"
      ]
    ],
    [
      "00bc2e94",
      "PARAM",
      [
        "storage",
        "002b1711",
        null,
        "string"
      ]
    ],
    [
      "00bc2eb0",
      "WRITE",
      [
        "storage",
        "01127538",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bc1eb4 ["INT_ADD", "register:40f0:8", ["const:bc1eb4:8", "const:4:8"]]
- 00bc1eb4 ["CALL", null, ["callee:00c5bfb0:8"]]
+ 00bc2ea8 ["INT_ADD", "register:40f0:8", ["const:bc2ea8:8", "const:4:8"]]
+ 00bc2ea8 ["CALL", null, ["callee:00c5bfb0:8"]]
- 00bc1ebc ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:578:8"]]
- 00bc1ebc ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00bc2eb0 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:538:8"]]
+ 00bc2eb0 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00bc1e88 ["COPY", "register:40a0:8", ["const:1126000:8"]]
+ 00bc2e7c ["COPY", "register:40a0:8", ["const:1127000:8"]]
~~~


<a id="compare-037d1e2f60e06542c6cd50ea81464ebd"></a>

### [`00bc1eec`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bc1/00bc1eec.md) → [`00bc2ee0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bc2/00bc2ee0.md) _ZN8firebase13remote_config8internal6config10GetFieldIdENS2_5FieldE

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c5b0d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b0d0.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c5c0a0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5c0a0.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies, return_value_candidate

命令の説明率　旧版 80.00% / 新版 80.00%

優先判定に残った影響 `call_argument_candidate` 1件, `return_value_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00bc2efc",
      "incomplete_value": false,
      "site": "00bc2f00",
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
            "const:61a:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bc1f08",
      "incomplete_value": false,
      "site": "00bc1f0c",
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
            "const:54d:8"
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
    "new": {
      "definition_site": "00bc2f0c",
      "incomplete_value": true,
      "site": "00bc2f18",
      "value": [
        "LOAD",
        "8",
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
      "definition_site": "00bc1f18",
      "incomplete_value": true,
      "site": "00bc1f24",
      "value": [
        "LOAD",
        "8",
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
      "00bc2efc",
      "PARAM",
      [
        "storage",
        "002a954d",
        null,
        "string"
      ]
    ],
    [
      "00bc2f0c",
      "DATA",
      [
        "storage",
        "01126618",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "00bc2efc",
      "PARAM",
      [
        "storage",
        "002a961a",
        null,
        "string"
      ]
    ],
    [
      "00bc2f0c",
      "DATA",
      [
        "storage",
        "011275d8",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 00bc1f0c ["INT_ADD", "register:40f0:8", ["const:bc1f0c:8", "const:4:8"]]
- 00bc1f0c ["CALL", null, ["callee:00c5c0a0:8"]]
+ 00bc2f00 ["INT_ADD", "register:40f0:8", ["const:bc2f00:8", "const:4:8"]]
+ 00bc2f00 ["CALL", null, ["callee:00c5c0a0:8"]]
- 00bc1f08 ["COPY", "tmp:0:8", ["const:54d:8"]]
- 00bc1f08 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 00bc1f08 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 00bc1f08 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 00bc2efc ["COPY", "tmp:0:8", ["const:61a:8"]]
+ 00bc2efc ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 00bc2efc ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 00bc2efc ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
- 00bc1f10 ["COPY", "register:4040:8", ["const:1126000:8"]]
+ 00bc2f04 ["COPY", "register:4040:8", ["const:1127000:8"]]
~~~


<a id="compare-df0423066cf291c5f20f3fd387d1196a"></a>

### [`00bc1f28`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bc1/00bc1f28.md) → [`00bc2f1c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bc2/00bc2f1c.md) _ZN8firebase13remote_config8internal12config_value19CacheClassFromFilesEP7_JNIEnvP8_jobjectPKNSt6__ndk16vectorINS_8internal12EmbeddedFileENS

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c5afe0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5afe0.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c5bfb0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5bfb0.md)

変更の種類 branch_value, call_argument_candidate, constant, operands_and_dependencies, store_condition, store_destination

命令の説明率　旧版 87.50% / 新版 87.50%

優先判定に残った影響 `call_argument_candidate` 1件, `store_destination` 1件

アドレスに依存する影響 `branch_value` 1件, `store_condition` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_destination",
    "new": {
      "definition_site": "00bc2f48",
      "incomplete_value": true,
      "site": "00bc2f48",
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
            "const:5e0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bc1f54",
      "incomplete_value": true,
      "site": "00bc1f54",
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
            "const:620:8"
          ]
        ]
      ]
    },
    "ordinal": 3,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "branch_value",
    "new": {
      "definition_site": "00bc2f30",
      "incomplete_value": true,
      "site": "00bc2f30",
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
      "definition_site": "00bc1f3c",
      "incomplete_value": true,
      "site": "00bc1f3c",
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
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00bc2f3c",
      "incomplete_value": false,
      "site": "00bc2f40",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:2c1000:8"
          ],
          [
            "leaf",
            "const:d54:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bc1f48",
      "incomplete_value": false,
      "site": "00bc1f4c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:2c1000:8"
          ],
          [
            "leaf",
            "const:d0a:8"
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
      "00bc2f2c",
      "READ",
      [
        "storage",
        "01126620",
        null,
        "undefined8"
      ]
    ],
    [
      "00bc2f3c",
      "PARAM",
      [
        "storage",
        "002c1d0a",
        null,
        "string"
      ]
    ],
    [
      "00bc2f48",
      "WRITE",
      [
        "storage",
        "01126620",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00bc2f2c",
      "READ",
      [
        "storage",
        "011275e0",
        null,
        "undefined8"
      ]
    ],
    [
      "00bc2f3c",
      "PARAM",
      [
        "storage",
        "002c1d54",
        null,
        "string"
      ]
    ],
    [
      "00bc2f48",
      "WRITE",
      [
        "storage",
        "011275e0",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bc1f4c ["INT_ADD", "register:40f0:8", ["const:bc1f4c:8", "const:4:8"]]
- 00bc1f4c ["CALL", null, ["callee:00c5bfb0:8"]]
+ 00bc2f40 ["INT_ADD", "register:40f0:8", ["const:bc2f40:8", "const:4:8"]]
+ 00bc2f40 ["CALL", null, ["callee:00c5bfb0:8"]]
- 00bc1f54 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:620:8"]]
- 00bc1f54 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00bc2f48 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:5e0:8"]]
+ 00bc2f48 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00bc1f34 ["COPY", "register:4098:8", ["const:1126000:8"]]
+ 00bc2f28 ["COPY", "register:4098:8", ["const:1127000:8"]]
~~~


<a id="compare-42c5ea2d5ba61101c5f381048a8c3620"></a>

### [`00bc1f68`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bc1/00bc1f68.md) → [`00bc2f5c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bc2/00bc2f5c.md) _ZN8firebase13remote_config8internal12config_value19CacheClassFromFilesEP7_JNIEnvP8_jobjectPKNSt6__ndk16vectorINS_8internal12EmbeddedFileENS

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c5afe0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5afe0.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c5bfb0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5bfb0.md)

変更の種類 branch_value, call_argument_candidate, constant, operands_and_dependencies, store_condition, store_destination

命令の説明率　旧版 87.50% / 新版 87.50%

優先判定に残った影響 `call_argument_candidate` 1件, `store_destination` 1件

アドレスに依存する影響 `branch_value` 1件, `store_condition` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_destination",
    "new": {
      "definition_site": "00bc2f88",
      "incomplete_value": true,
      "site": "00bc2f88",
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
            "const:5e0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bc1f94",
      "incomplete_value": true,
      "site": "00bc1f94",
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
            "const:620:8"
          ]
        ]
      ]
    },
    "ordinal": 3,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "branch_value",
    "new": {
      "definition_site": "00bc2f70",
      "incomplete_value": true,
      "site": "00bc2f70",
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
      "definition_site": "00bc1f7c",
      "incomplete_value": true,
      "site": "00bc1f7c",
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
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00bc2f78",
      "incomplete_value": false,
      "site": "00bc2f80",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:2c1000:8"
          ],
          [
            "leaf",
            "const:d54:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bc1f84",
      "incomplete_value": false,
      "site": "00bc1f8c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:2c1000:8"
          ],
          [
            "leaf",
            "const:d0a:8"
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
      "00bc2f6c",
      "READ",
      [
        "storage",
        "01126620",
        null,
        "undefined8"
      ]
    ],
    [
      "00bc2f78",
      "PARAM",
      [
        "storage",
        "002c1d0a",
        null,
        "string"
      ]
    ],
    [
      "00bc2f88",
      "WRITE",
      [
        "storage",
        "01126620",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00bc2f6c",
      "READ",
      [
        "storage",
        "011275e0",
        null,
        "undefined8"
      ]
    ],
    [
      "00bc2f78",
      "PARAM",
      [
        "storage",
        "002c1d54",
        null,
        "string"
      ]
    ],
    [
      "00bc2f88",
      "WRITE",
      [
        "storage",
        "011275e0",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bc1f8c ["INT_ADD", "register:40f0:8", ["const:bc1f8c:8", "const:4:8"]]
- 00bc1f8c ["CALL", null, ["callee:00c5bfb0:8"]]
+ 00bc2f80 ["INT_ADD", "register:40f0:8", ["const:bc2f80:8", "const:4:8"]]
+ 00bc2f80 ["CALL", null, ["callee:00c5bfb0:8"]]
- 00bc1f94 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:620:8"]]
- 00bc1f94 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00bc2f88 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:5e0:8"]]
+ 00bc2f88 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00bc1f74 ["COPY", "register:4098:8", ["const:1126000:8"]]
+ 00bc2f68 ["COPY", "register:4098:8", ["const:1127000:8"]]
~~~


<a id="compare-31431025249314e9601c10eae181047d"></a>

### [`00bc1fa8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bc1/00bc1fa8.md) → [`00bc2f9c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bc2/00bc2f9c.md) _ZN8firebase13remote_config8internal12config_value10CacheClassEP7_JNIEnvP8_jobjectNS_4util16ClassRequirementE

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c5afe0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5afe0.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c5bfb0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5bfb0.md)

変更の種類 branch_value, call_argument_candidate, constant, operands_and_dependencies, store_condition, store_destination

命令の説明率　旧版 88.24% / 新版 88.24%

優先判定に残った影響 `call_argument_candidate` 1件, `store_destination` 1件

アドレスに依存する影響 `branch_value` 1件, `store_condition` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_destination",
    "new": {
      "definition_site": "00bc2fcc",
      "incomplete_value": true,
      "site": "00bc2fcc",
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
            "const:5e0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bc1fd8",
      "incomplete_value": true,
      "site": "00bc1fd8",
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
            "const:620:8"
          ]
        ]
      ]
    },
    "ordinal": 3,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "branch_value",
    "new": {
      "definition_site": "00bc2fb0",
      "incomplete_value": true,
      "site": "00bc2fb0",
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
      "definition_site": "00bc1fbc",
      "incomplete_value": true,
      "site": "00bc1fbc",
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
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00bc2fbc",
      "incomplete_value": false,
      "site": "00bc2fc4",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:2c1000:8"
          ],
          [
            "leaf",
            "const:d54:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bc1fc8",
      "incomplete_value": false,
      "site": "00bc1fd0",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:2c1000:8"
          ],
          [
            "leaf",
            "const:d0a:8"
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
      "00bc2fac",
      "READ",
      [
        "storage",
        "01126620",
        null,
        "undefined8"
      ]
    ],
    [
      "00bc2fbc",
      "PARAM",
      [
        "storage",
        "002c1d0a",
        null,
        "string"
      ]
    ],
    [
      "00bc2fcc",
      "WRITE",
      [
        "storage",
        "01126620",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00bc2fac",
      "READ",
      [
        "storage",
        "011275e0",
        null,
        "undefined8"
      ]
    ],
    [
      "00bc2fbc",
      "PARAM",
      [
        "storage",
        "002c1d54",
        null,
        "string"
      ]
    ],
    [
      "00bc2fcc",
      "WRITE",
      [
        "storage",
        "011275e0",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bc1fd0 ["INT_ADD", "register:40f0:8", ["const:bc1fd0:8", "const:4:8"]]
- 00bc1fd0 ["CALL", null, ["callee:00c5bfb0:8"]]
+ 00bc2fc4 ["INT_ADD", "register:40f0:8", ["const:bc2fc4:8", "const:4:8"]]
+ 00bc2fc4 ["CALL", null, ["callee:00c5bfb0:8"]]
- 00bc1fd8 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:620:8"]]
- 00bc1fd8 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00bc2fcc ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:5e0:8"]]
+ 00bc2fcc ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00bc1fb4 ["COPY", "register:4098:8", ["const:1126000:8"]]
+ 00bc2fa8 ["COPY", "register:4098:8", ["const:1127000:8"]]
~~~


<a id="compare-4624976cfac00af7c829474d5a0efaf7"></a>

### [`00bc1fec`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bc1/00bc1fec.md) → [`00bc2fe0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bc2/00bc2fe0.md) _ZN8firebase13remote_config8internal12config_value10CacheClassEP7_JNIEnvP8_jobject

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c5afe0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5afe0.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c5bfb0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5bfb0.md)

変更の種類 branch_value, call_argument_candidate, constant, operands_and_dependencies, store_condition, store_destination

命令の説明率　旧版 76.47% / 新版 76.47%

優先判定に残った影響 `branch_value` 1件, `call_argument_candidate` 1件, `store_condition` 1件, `store_destination` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_destination",
    "new": {
      "definition_site": "00bc3010",
      "incomplete_value": true,
      "site": "00bc3010",
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
            "const:5e0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bc201c",
      "incomplete_value": true,
      "site": "00bc201c",
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
            "const:620:8"
          ]
        ]
      ]
    },
    "ordinal": 3,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "branch_value",
    "new": {
      "definition_site": "00bc2ff4",
      "incomplete_value": true,
      "site": "00bc2ff4",
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
      "definition_site": "00bc2000",
      "incomplete_value": true,
      "site": "00bc2000",
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
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00bc2ffc",
      "incomplete_value": false,
      "site": "00bc3008",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:2c1000:8"
          ],
          [
            "leaf",
            "const:d54:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bc2008",
      "incomplete_value": false,
      "site": "00bc2014",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:2c1000:8"
          ],
          [
            "leaf",
            "const:d0a:8"
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
      "00bc2ff0",
      "READ",
      [
        "storage",
        "01126620",
        null,
        "undefined8"
      ]
    ],
    [
      "00bc2ffc",
      "PARAM",
      [
        "storage",
        "002c1d0a",
        null,
        "string"
      ]
    ],
    [
      "00bc3010",
      "WRITE",
      [
        "storage",
        "01126620",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00bc2ff0",
      "READ",
      [
        "storage",
        "011275e0",
        null,
        "undefined8"
      ]
    ],
    [
      "00bc2ffc",
      "PARAM",
      [
        "storage",
        "002c1d54",
        null,
        "string"
      ]
    ],
    [
      "00bc3010",
      "WRITE",
      [
        "storage",
        "011275e0",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bc2014 ["INT_ADD", "register:40f0:8", ["const:bc2014:8", "const:4:8"]]
- 00bc2014 ["CALL", null, ["callee:00c5bfb0:8"]]
+ 00bc3008 ["INT_ADD", "register:40f0:8", ["const:bc3008:8", "const:4:8"]]
+ 00bc3008 ["CALL", null, ["callee:00c5bfb0:8"]]
- 00bc201c ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:620:8"]]
- 00bc201c ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00bc3010 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:5e0:8"]]
+ 00bc3010 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00bc1ff8 ["COPY", "register:4098:8", ["const:1126000:8"]]
+ 00bc2fec ["COPY", "register:4098:8", ["const:1127000:8"]]
~~~


<a id="compare-64bd8911b2f383f1a2114692136c72d2"></a>

### [`00bc203c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bc2/00bc203c.md) → [`00bc3030`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bc3/00bc3030.md) _ZN8firebase13remote_config8internal12config_value15RegisterNativesEP7_JNIEnvPK15JNINativeMethodm

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c5b030`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b030.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c5c000`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5c000.md)

変更の種類 constant, operands_and_dependencies, store_destination

命令の説明率　旧版 92.59% / 新版 92.59%

優先判定に残った影響 `store_destination` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_destination",
    "new": {
      "definition_site": "00bc3088",
      "incomplete_value": true,
      "site": "00bc3088",
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
            "const:5e8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bc2094",
      "incomplete_value": true,
      "site": "00bc2094",
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
            "const:628:8"
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
      "00bc3044",
      "READ",
      [
        "storage",
        "01126628",
        null,
        "undefined1"
      ]
    ],
    [
      "00bc3064",
      "READ",
      [
        "storage",
        "01126620",
        null,
        "undefined8"
      ]
    ],
    [
      "00bc3088",
      "WRITE",
      [
        "storage",
        "01126628",
        null,
        "undefined1"
      ]
    ]
  ],
  "added": [
    [
      "00bc3044",
      "READ",
      [
        "storage",
        "011275e8",
        null,
        "undefined1"
      ]
    ],
    [
      "00bc3064",
      "READ",
      [
        "storage",
        "011275e0",
        null,
        "undefined8"
      ]
    ],
    [
      "00bc3088",
      "WRITE",
      [
        "storage",
        "011275e8",
        null,
        "undefined1"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bc2094 ["COPY", "tmp:0:4", ["register:4000:4"]]
- 00bc2094 ["INT_ADD", "tmp:1:8", ["register:40a8:8", "const:628:8"]]
- 00bc2094 ["STORE", null, ["const:1b1:8", "tmp:1:8", "tmp:0:1"]]
+ 00bc3088 ["COPY", "tmp:0:4", ["register:4000:4"]]
+ 00bc3088 ["INT_ADD", "tmp:1:8", ["register:40a8:8", "const:5e8:8"]]
+ 00bc3088 ["STORE", null, ["const:1b1:8", "tmp:1:8", "tmp:0:1"]]
- 00bc204c ["COPY", "register:40a8:8", ["const:1126000:8"]]
+ 00bc3040 ["COPY", "register:40a8:8", ["const:1127000:8"]]
- 00bc2050 ["INT_ADD", "tmp:0:8", ["register:40a8:8", "const:628:8"]]
- 00bc2050 ["LOAD", "tmp:1:1", ["const:1b1:8", "tmp:0:8"]]
- 00bc2050 ["INT_ZEXT", "register:4040:8", ["tmp:1:1"]]
+ 00bc3044 ["INT_ADD", "tmp:0:8", ["register:40a8:8", "const:5e8:8"]]
+ 00bc3044 ["LOAD", "tmp:1:1", ["const:1b1:8", "tmp:0:8"]]
+ 00bc3044 ["INT_ZEXT", "register:4040:8", ["tmp:1:1"]]
~~~


<a id="compare-8dbfdca4391b6812f2eb2ca73b28d5aa"></a>

### [`00bc20a8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bc2/00bc20a8.md) → [`00bc309c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bc3/00bc309c.md) _ZN8firebase13remote_config8internal12config_value12ReleaseClassEP7_JNIEnv

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c5b030`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b030.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c5c000`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5c000.md)

変更の種類 branch_value, call_argument_candidate, constant, operands_and_dependencies, store_destination

命令の説明率　旧版 89.29% / 新版 89.29%

優先判定に残った影響 `call_argument_candidate` 1件, `store_destination` 2件

アドレスに依存する影響 `branch_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_destination",
    "new": {
      "definition_site": "00bc30d8",
      "incomplete_value": true,
      "site": "00bc30d8",
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
            "const:5e8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bc20e4",
      "incomplete_value": true,
      "site": "00bc20e4",
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
            "const:628:8"
          ]
        ]
      ]
    },
    "ordinal": 5,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "store_destination",
    "new": {
      "definition_site": "00bc30f8",
      "incomplete_value": true,
      "site": "00bc30f8",
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
            "const:5e0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bc2104",
      "incomplete_value": true,
      "site": "00bc2104",
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
            "const:620:8"
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
      "definition_site": "00bc30b4",
      "incomplete_value": true,
      "site": "00bc30b4",
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
      "definition_site": "00bc20c0",
      "incomplete_value": true,
      "site": "00bc20c0",
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
      "00bc30b0",
      "READ",
      [
        "storage",
        "01126620",
        null,
        "undefined8"
      ]
    ],
    [
      "00bc30bc",
      "READ",
      [
        "storage",
        "01126628",
        null,
        "undefined1"
      ]
    ],
    [
      "00bc30d8",
      "WRITE",
      [
        "storage",
        "01126628",
        null,
        "undefined1"
      ]
    ]
  ],
  "added": [
    [
      "00bc30b0",
      "READ",
      [
        "storage",
        "011275e0",
        null,
        "undefined8"
      ]
    ],
    [
      "00bc30bc",
      "READ",
      [
        "storage",
        "011275e8",
        null,
        "undefined1"
      ]
    ],
    [
      "00bc30d8",
      "WRITE",
      [
        "storage",
        "011275e8",
        null,
        "undefined1"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bc20e4 ["COPY", "tmp:0:4", ["const:0:4"]]
- 00bc20e4 ["COPY", "tmp:1:4", ["tmp:0:4"]]
- 00bc20e4 ["INT_ADD", "tmp:2:8", ["register:40a8:8", "const:628:8"]]
- 00bc20e4 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:1:1"]]
+ 00bc30d8 ["COPY", "tmp:0:4", ["const:0:4"]]
+ 00bc30d8 ["COPY", "tmp:1:4", ["tmp:0:4"]]
+ 00bc30d8 ["INT_ADD", "tmp:2:8", ["register:40a8:8", "const:5e8:8"]]
+ 00bc30d8 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:1:1"]]
- 00bc2100 ["COPY", "register:0:8", ["register:4040:8"]]
- 00bc2100 ["INT_ADD", "register:40f0:8", ["const:bc2100:8", "const:4:8"]]
- 00bc2100 ["CALLIND", null, ["register:0:8"]]
+ 00bc30f4 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00bc30f4 ["INT_ADD", "register:40f0:8", ["const:bc30f4:8", "const:4:8"]]
+ 00bc30f4 ["CALLIND", null, ["register:0:8"]]
- 00bc2104 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:620:8"]]
- 00bc2104 ["COPY", "tmp:1:8", ["const:0:8"]]
- 00bc2104 ["STORE", null, ["const:1b1:8", "tmp:0:8", "tmp:1:8"]]
+ 00bc30f8 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:5e0:8"]]
+ 00bc30f8 ["COPY", "tmp:1:8", ["const:0:8"]]
+ 00bc30f8 ["STORE", null, ["const:1b1:8", "tmp:0:8", "tmp:1:8"]]
~~~


<a id="compare-e452029fdaafe2e2ace3f019462a03e7"></a>

### [`00bc2118`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bc2/00bc2118.md) → [`00bc310c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bc3/00bc310c.md) _ZN8firebase13remote_config8internal12config_value14CacheMethodIdsEP7_JNIEnvP8_jobject

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c5afe0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5afe0.md) [`00c5b000`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b000.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c5bfb0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5bfb0.md) [`00c5bfd0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5bfd0.md)

変更の種類 branch_value, call_argument_candidate, constant, operands_and_dependencies, store_condition, store_destination

命令の説明率　旧版 75.00% / 新版 75.00%

優先判定に残った影響 `branch_value` 1件, `call_argument_candidate` 1件, `store_condition` 1件, `store_destination` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_destination",
    "new": {
      "definition_site": "00bc314c",
      "incomplete_value": true,
      "site": "00bc314c",
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
            "const:5e0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bc2158",
      "incomplete_value": true,
      "site": "00bc2158",
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
            "const:620:8"
          ]
        ]
      ]
    },
    "ordinal": 4,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "branch_value",
    "new": {
      "definition_site": "00bc3128",
      "incomplete_value": true,
      "site": "00bc3128",
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
      "definition_site": "00bc2134",
      "incomplete_value": true,
      "site": "00bc2134",
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
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00bc3130",
      "incomplete_value": false,
      "site": "00bc3144",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:2c1000:8"
          ],
          [
            "leaf",
            "const:d54:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bc213c",
      "incomplete_value": false,
      "site": "00bc2150",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:2c1000:8"
          ],
          [
            "leaf",
            "const:d0a:8"
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
      "00bc3120",
      "READ",
      [
        "storage",
        "01126620",
        null,
        "undefined8"
      ]
    ],
    [
      "00bc3130",
      "PARAM",
      [
        "storage",
        "002c1d0a",
        null,
        "string"
      ]
    ],
    [
      "00bc314c",
      "WRITE",
      [
        "storage",
        "01126620",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00bc3120",
      "READ",
      [
        "storage",
        "011275e0",
        null,
        "undefined8"
      ]
    ],
    [
      "00bc3130",
      "PARAM",
      [
        "storage",
        "002c1d54",
        null,
        "string"
      ]
    ],
    [
      "00bc314c",
      "WRITE",
      [
        "storage",
        "011275e0",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bc2150 ["INT_ADD", "register:40f0:8", ["const:bc2150:8", "const:4:8"]]
- 00bc2150 ["CALL", null, ["callee:00c5bfb0:8"]]
+ 00bc3144 ["INT_ADD", "register:40f0:8", ["const:bc3144:8", "const:4:8"]]
+ 00bc3144 ["CALL", null, ["callee:00c5bfb0:8"]]
- 00bc2158 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:620:8"]]
- 00bc2158 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00bc314c ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:5e0:8"]]
+ 00bc314c ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00bc2124 ["COPY", "register:40a0:8", ["const:1126000:8"]]
+ 00bc3118 ["COPY", "register:40a0:8", ["const:1127000:8"]]
~~~


<a id="compare-1bd09e47f1847a15ec06b82a0935c484"></a>

### [`00bc2188`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bc2/00bc2188.md) → [`00bc317c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bc3/00bc317c.md) _ZN8firebase13remote_config8internal12config_value11GetMethodIdENS2_6MethodE

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c5b0d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b0d0.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c5c0a0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5c0a0.md)

変更の種類 constant, operands_and_dependencies, return_value_candidate

命令の説明率　旧版 80.00% / 新版 80.00%

優先判定に残った影響 `return_value_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "return_value_candidate",
    "new": {
      "definition_site": "00bc31a8",
      "incomplete_value": true,
      "site": "00bc31b4",
      "value": [
        "LOAD",
        "8",
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
      "definition_site": "00bc21b4",
      "incomplete_value": true,
      "site": "00bc21c0",
      "value": [
        "LOAD",
        "8",
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
      "00bc3198",
      "PARAM",
      [
        "storage",
        "002a830b",
        null,
        "string"
      ]
    ],
    [
      "00bc31a8",
      "DATA",
      [
        "storage",
        "01126630",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00bc3198",
      "PARAM",
      [
        "storage",
        "002a8463",
        null,
        "string"
      ]
    ],
    [
      "00bc31a8",
      "DATA",
      [
        "storage",
        "011275f0",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bc21a4 ["COPY", "tmp:0:8", ["const:30b:8"]]
- 00bc21a4 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 00bc21a4 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 00bc21a4 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 00bc3198 ["COPY", "tmp:0:8", ["const:463:8"]]
+ 00bc3198 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 00bc3198 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 00bc3198 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
- 00bc21a8 ["INT_ADD", "register:40f0:8", ["const:bc21a8:8", "const:4:8"]]
- 00bc21a8 ["CALL", null, ["callee:00c5c0a0:8"]]
+ 00bc319c ["INT_ADD", "register:40f0:8", ["const:bc319c:8", "const:4:8"]]
+ 00bc319c ["CALL", null, ["callee:00c5c0a0:8"]]
- 00bc21ac ["COPY", "register:4040:8", ["const:1126000:8"]]
+ 00bc31a0 ["COPY", "register:4040:8", ["const:1127000:8"]]
~~~


<a id="compare-a4b2874422f6946ab763bf51c2623f72"></a>

### [`00bc21c4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bc2/00bc21c4.md) → [`00bc31b8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bc3/00bc31b8.md) _ZN8firebase13remote_config8internal12config_value13CacheFieldIdsEP7_JNIEnvP8_jobject

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c5afc0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5afc0.md) [`00c5afe0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5afe0.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c5bf90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5bf90.md) [`00c5bfb0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5bfb0.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies, store_destination

命令の説明率　旧版 78.57% / 新版 78.57%

優先判定に残った影響 `call_argument_candidate` 1件, `store_destination` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_destination",
    "new": {
      "definition_site": "00bc31f8",
      "incomplete_value": true,
      "site": "00bc31f8",
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
            "const:5e0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bc2204",
      "incomplete_value": true,
      "site": "00bc2204",
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
            "const:620:8"
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
      "definition_site": "00bc31dc",
      "incomplete_value": false,
      "site": "00bc31f0",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:2c1000:8"
          ],
          [
            "leaf",
            "const:d54:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bc21e8",
      "incomplete_value": false,
      "site": "00bc21fc",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:2c1000:8"
          ],
          [
            "leaf",
            "const:d0a:8"
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
      "00bc31cc",
      "READ",
      [
        "storage",
        "01126620",
        null,
        "undefined8"
      ]
    ],
    [
      "00bc31dc",
      "PARAM",
      [
        "storage",
        "002c1d0a",
        null,
        "string"
      ]
    ],
    [
      "00bc31f8",
      "WRITE",
      [
        "storage",
        "01126620",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00bc31cc",
      "READ",
      [
        "storage",
        "011275e0",
        null,
        "undefined8"
      ]
    ],
    [
      "00bc31dc",
      "PARAM",
      [
        "storage",
        "002c1d54",
        null,
        "string"
      ]
    ],
    [
      "00bc31f8",
      "WRITE",
      [
        "storage",
        "011275e0",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bc21fc ["INT_ADD", "register:40f0:8", ["const:bc21fc:8", "const:4:8"]]
- 00bc21fc ["CALL", null, ["callee:00c5bfb0:8"]]
+ 00bc31f0 ["INT_ADD", "register:40f0:8", ["const:bc31f0:8", "const:4:8"]]
+ 00bc31f0 ["CALL", null, ["callee:00c5bfb0:8"]]
- 00bc2204 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:620:8"]]
- 00bc2204 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00bc31f8 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:5e0:8"]]
+ 00bc31f8 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00bc21d0 ["COPY", "register:40a0:8", ["const:1126000:8"]]
+ 00bc31c4 ["COPY", "register:40a0:8", ["const:1127000:8"]]
~~~


<a id="compare-f565e8c95c3c09fd1805b2ee10e20651"></a>

### [`00bc2234`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bc2/00bc2234.md) → [`00bc3228`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bc3/00bc3228.md) _ZN8firebase13remote_config8internal12config_value10GetFieldIdENS2_5FieldE

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c5b0d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b0d0.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c5c0a0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5c0a0.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies, return_value_candidate

命令の説明率　旧版 80.00% / 新版 80.00%

優先判定に残った影響 `call_argument_candidate` 1件, `return_value_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00bc3244",
      "incomplete_value": false,
      "site": "00bc3248",
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
            "const:61a:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bc2250",
      "incomplete_value": false,
      "site": "00bc2254",
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
            "const:54d:8"
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
    "new": {
      "definition_site": "00bc3254",
      "incomplete_value": true,
      "site": "00bc3260",
      "value": [
        "LOAD",
        "8",
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
      "definition_site": "00bc2260",
      "incomplete_value": true,
      "site": "00bc226c",
      "value": [
        "LOAD",
        "8",
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
      "00bc3244",
      "PARAM",
      [
        "storage",
        "002a954d",
        null,
        "string"
      ]
    ],
    [
      "00bc3254",
      "DATA",
      [
        "storage",
        "01126660",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "00bc3244",
      "PARAM",
      [
        "storage",
        "002a961a",
        null,
        "string"
      ]
    ],
    [
      "00bc3254",
      "DATA",
      [
        "storage",
        "01127620",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 00bc2254 ["INT_ADD", "register:40f0:8", ["const:bc2254:8", "const:4:8"]]
- 00bc2254 ["CALL", null, ["callee:00c5c0a0:8"]]
+ 00bc3248 ["INT_ADD", "register:40f0:8", ["const:bc3248:8", "const:4:8"]]
+ 00bc3248 ["CALL", null, ["callee:00c5c0a0:8"]]
- 00bc2250 ["COPY", "tmp:0:8", ["const:54d:8"]]
- 00bc2250 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 00bc2250 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 00bc2250 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 00bc3244 ["COPY", "tmp:0:8", ["const:61a:8"]]
+ 00bc3244 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 00bc3244 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 00bc3244 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
- 00bc2258 ["COPY", "register:4040:8", ["const:1126000:8"]]
+ 00bc324c ["COPY", "register:4040:8", ["const:1127000:8"]]
~~~


<a id="compare-dea0b6d004cc8bd3f268c33e90b3afb3"></a>

### [`00bc2270`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bc2/00bc2270.md) → [`00bc3264`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bc3/00bc3264.md) _ZN8firebase13remote_config8internal11config_info19CacheClassFromFilesEP7_JNIEnvP8_jobjectPKNSt6__ndk16vectorINS_8internal12EmbeddedFileENS7

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c5afe0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5afe0.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c5bfb0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5bfb0.md)

変更の種類 branch_value, call_argument_candidate, constant, operands_and_dependencies, store_condition, store_destination

命令の説明率　旧版 87.50% / 新版 87.50%

優先判定に残った影響 `call_argument_candidate` 1件, `store_destination` 1件

アドレスに依存する影響 `branch_value` 1件, `store_condition` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_destination",
    "new": {
      "definition_site": "00bc3290",
      "incomplete_value": true,
      "site": "00bc3290",
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
            "const:628:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bc229c",
      "incomplete_value": true,
      "site": "00bc229c",
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
            "const:668:8"
          ]
        ]
      ]
    },
    "ordinal": 3,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "branch_value",
    "new": {
      "definition_site": "00bc3278",
      "incomplete_value": true,
      "site": "00bc3278",
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
      "definition_site": "00bc2284",
      "incomplete_value": true,
      "site": "00bc2284",
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
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00bc3284",
      "incomplete_value": false,
      "site": "00bc3288",
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
            "const:4e4:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bc2290",
      "incomplete_value": false,
      "site": "00bc2294",
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
            "const:38c:8"
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
      "00bc3274",
      "READ",
      [
        "storage",
        "01126668",
        null,
        "undefined8"
      ]
    ],
    [
      "00bc3284",
      "PARAM",
      [
        "storage",
        "002a738c",
        null,
        "string"
      ]
    ],
    [
      "00bc3290",
      "WRITE",
      [
        "storage",
        "01126668",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00bc3274",
      "READ",
      [
        "storage",
        "01127628",
        null,
        "undefined8"
      ]
    ],
    [
      "00bc3284",
      "PARAM",
      [
        "storage",
        "002a74e4",
        null,
        "string"
      ]
    ],
    [
      "00bc3290",
      "WRITE",
      [
        "storage",
        "01127628",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bc2294 ["INT_ADD", "register:40f0:8", ["const:bc2294:8", "const:4:8"]]
- 00bc2294 ["CALL", null, ["callee:00c5bfb0:8"]]
+ 00bc3288 ["INT_ADD", "register:40f0:8", ["const:bc3288:8", "const:4:8"]]
+ 00bc3288 ["CALL", null, ["callee:00c5bfb0:8"]]
- 00bc229c ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:668:8"]]
- 00bc229c ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00bc3290 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:628:8"]]
+ 00bc3290 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00bc227c ["COPY", "register:4098:8", ["const:1126000:8"]]
+ 00bc3270 ["COPY", "register:4098:8", ["const:1127000:8"]]
~~~


<a id="compare-85ea5cd1b6b95e55c7adf07347370b15"></a>

### [`00bc22b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bc2/00bc22b0.md) → [`00bc32a4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bc3/00bc32a4.md) _ZN8firebase13remote_config8internal11config_info19CacheClassFromFilesEP7_JNIEnvP8_jobjectPKNSt6__ndk16vectorINS_8internal12EmbeddedFileENS7

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c5afe0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5afe0.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c5bfb0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5bfb0.md)

変更の種類 branch_value, call_argument_candidate, constant, operands_and_dependencies, store_condition, store_destination

命令の説明率　旧版 87.50% / 新版 87.50%

優先判定に残った影響 `call_argument_candidate` 1件, `store_destination` 1件

アドレスに依存する影響 `branch_value` 1件, `store_condition` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_destination",
    "new": {
      "definition_site": "00bc32d0",
      "incomplete_value": true,
      "site": "00bc32d0",
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
            "const:628:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bc22dc",
      "incomplete_value": true,
      "site": "00bc22dc",
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
            "const:668:8"
          ]
        ]
      ]
    },
    "ordinal": 3,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "branch_value",
    "new": {
      "definition_site": "00bc32b8",
      "incomplete_value": true,
      "site": "00bc32b8",
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
      "definition_site": "00bc22c4",
      "incomplete_value": true,
      "site": "00bc22c4",
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
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00bc32c0",
      "incomplete_value": false,
      "site": "00bc32c8",
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
            "const:4e4:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bc22cc",
      "incomplete_value": false,
      "site": "00bc22d4",
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
            "const:38c:8"
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
      "00bc32b4",
      "READ",
      [
        "storage",
        "01126668",
        null,
        "undefined8"
      ]
    ],
    [
      "00bc32c0",
      "PARAM",
      [
        "storage",
        "002a738c",
        null,
        "string"
      ]
    ],
    [
      "00bc32d0",
      "WRITE",
      [
        "storage",
        "01126668",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00bc32b4",
      "READ",
      [
        "storage",
        "01127628",
        null,
        "undefined8"
      ]
    ],
    [
      "00bc32c0",
      "PARAM",
      [
        "storage",
        "002a74e4",
        null,
        "string"
      ]
    ],
    [
      "00bc32d0",
      "WRITE",
      [
        "storage",
        "01127628",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bc22d4 ["INT_ADD", "register:40f0:8", ["const:bc22d4:8", "const:4:8"]]
- 00bc22d4 ["CALL", null, ["callee:00c5bfb0:8"]]
+ 00bc32c8 ["INT_ADD", "register:40f0:8", ["const:bc32c8:8", "const:4:8"]]
+ 00bc32c8 ["CALL", null, ["callee:00c5bfb0:8"]]
- 00bc22dc ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:668:8"]]
- 00bc22dc ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00bc32d0 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:628:8"]]
+ 00bc32d0 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00bc22bc ["COPY", "register:4098:8", ["const:1126000:8"]]
+ 00bc32b0 ["COPY", "register:4098:8", ["const:1127000:8"]]
~~~


<a id="compare-45a0b27c76cd491d7a321b2a557bbc14"></a>

### [`00bc22f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bc2/00bc22f0.md) → [`00bc32e4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bc3/00bc32e4.md) _ZN8firebase13remote_config8internal11config_info10CacheClassEP7_JNIEnvP8_jobjectNS_4util16ClassRequirementE

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c5afe0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5afe0.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c5bfb0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5bfb0.md)

変更の種類 branch_value, call_argument_candidate, constant, operands_and_dependencies, store_condition, store_destination

命令の説明率　旧版 88.24% / 新版 88.24%

優先判定に残った影響 `call_argument_candidate` 1件, `store_destination` 1件

アドレスに依存する影響 `branch_value` 1件, `store_condition` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_destination",
    "new": {
      "definition_site": "00bc3314",
      "incomplete_value": true,
      "site": "00bc3314",
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
            "const:628:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bc2320",
      "incomplete_value": true,
      "site": "00bc2320",
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
            "const:668:8"
          ]
        ]
      ]
    },
    "ordinal": 3,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "branch_value",
    "new": {
      "definition_site": "00bc32f8",
      "incomplete_value": true,
      "site": "00bc32f8",
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
      "definition_site": "00bc2304",
      "incomplete_value": true,
      "site": "00bc2304",
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
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00bc3304",
      "incomplete_value": false,
      "site": "00bc330c",
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
            "const:4e4:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bc2310",
      "incomplete_value": false,
      "site": "00bc2318",
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
            "const:38c:8"
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
      "00bc32f4",
      "READ",
      [
        "storage",
        "01126668",
        null,
        "undefined8"
      ]
    ],
    [
      "00bc3304",
      "PARAM",
      [
        "storage",
        "002a738c",
        null,
        "string"
      ]
    ],
    [
      "00bc3314",
      "WRITE",
      [
        "storage",
        "01126668",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00bc32f4",
      "READ",
      [
        "storage",
        "01127628",
        null,
        "undefined8"
      ]
    ],
    [
      "00bc3304",
      "PARAM",
      [
        "storage",
        "002a74e4",
        null,
        "string"
      ]
    ],
    [
      "00bc3314",
      "WRITE",
      [
        "storage",
        "01127628",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bc2318 ["INT_ADD", "register:40f0:8", ["const:bc2318:8", "const:4:8"]]
- 00bc2318 ["CALL", null, ["callee:00c5bfb0:8"]]
+ 00bc330c ["INT_ADD", "register:40f0:8", ["const:bc330c:8", "const:4:8"]]
+ 00bc330c ["CALL", null, ["callee:00c5bfb0:8"]]
- 00bc2320 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:668:8"]]
- 00bc2320 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00bc3314 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:628:8"]]
+ 00bc3314 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00bc22fc ["COPY", "register:4098:8", ["const:1126000:8"]]
+ 00bc32f0 ["COPY", "register:4098:8", ["const:1127000:8"]]
~~~


<a id="compare-033a861cd5148b1f1690467e32684d50"></a>

### [`00bc2334`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bc2/00bc2334.md) → [`00bc3328`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bc3/00bc3328.md) _ZN8firebase13remote_config8internal11config_info10CacheClassEP7_JNIEnvP8_jobject

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c5afe0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5afe0.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c5bfb0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5bfb0.md)

変更の種類 branch_value, call_argument_candidate, constant, operands_and_dependencies, store_condition, store_destination

命令の説明率　旧版 88.24% / 新版 88.24%

優先判定に残った影響 `call_argument_candidate` 1件, `store_destination` 1件

アドレスに依存する影響 `branch_value` 1件, `store_condition` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_destination",
    "new": {
      "definition_site": "00bc3358",
      "incomplete_value": true,
      "site": "00bc3358",
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
            "const:628:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bc2364",
      "incomplete_value": true,
      "site": "00bc2364",
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
            "const:668:8"
          ]
        ]
      ]
    },
    "ordinal": 3,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "branch_value",
    "new": {
      "definition_site": "00bc333c",
      "incomplete_value": true,
      "site": "00bc333c",
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
      "definition_site": "00bc2348",
      "incomplete_value": true,
      "site": "00bc2348",
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
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00bc3344",
      "incomplete_value": false,
      "site": "00bc3350",
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
            "const:4e4:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bc2350",
      "incomplete_value": false,
      "site": "00bc235c",
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
            "const:38c:8"
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
      "00bc3338",
      "READ",
      [
        "storage",
        "01126668",
        null,
        "undefined8"
      ]
    ],
    [
      "00bc3344",
      "PARAM",
      [
        "storage",
        "002a738c",
        null,
        "string"
      ]
    ],
    [
      "00bc3358",
      "WRITE",
      [
        "storage",
        "01126668",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00bc3338",
      "READ",
      [
        "storage",
        "01127628",
        null,
        "undefined8"
      ]
    ],
    [
      "00bc3344",
      "PARAM",
      [
        "storage",
        "002a74e4",
        null,
        "string"
      ]
    ],
    [
      "00bc3358",
      "WRITE",
      [
        "storage",
        "01127628",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bc235c ["INT_ADD", "register:40f0:8", ["const:bc235c:8", "const:4:8"]]
- 00bc235c ["CALL", null, ["callee:00c5bfb0:8"]]
+ 00bc3350 ["INT_ADD", "register:40f0:8", ["const:bc3350:8", "const:4:8"]]
+ 00bc3350 ["CALL", null, ["callee:00c5bfb0:8"]]
- 00bc2364 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:668:8"]]
- 00bc2364 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00bc3358 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:628:8"]]
+ 00bc3358 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00bc2340 ["COPY", "register:4098:8", ["const:1126000:8"]]
+ 00bc3334 ["COPY", "register:4098:8", ["const:1127000:8"]]
~~~


<a id="compare-5284280a48a496cc75f5928ebf4c32e5"></a>

### [`00bc2384`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bc2/00bc2384.md) → [`00bc3378`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bc3/00bc3378.md) _ZN8firebase13remote_config8internal11config_info15RegisterNativesEP7_JNIEnvPK15JNINativeMethodm

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c5b030`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b030.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c5c000`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5c000.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies, store_destination

命令の説明率　旧版 92.59% / 新版 92.59%

優先判定に残った影響 `call_argument_candidate` 1件, `store_destination` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_destination",
    "new": {
      "definition_site": "00bc33d0",
      "incomplete_value": true,
      "site": "00bc33d0",
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
            "const:630:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bc23dc",
      "incomplete_value": true,
      "site": "00bc23dc",
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
            "const:670:8"
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
      "definition_site": "00bc33ac",
      "incomplete_value": true,
      "site": "00bc33b8",
      "value": [
        "LOAD",
        "8",
        [
          [
            "leaf",
            "const:1b1:8"
          ],
          [
            "INT_ADD",
            "8",
            [
              [
                "leaf",
                "const:1127000:8"
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
      "definition_site": "00bc23b8",
      "incomplete_value": true,
      "site": "00bc23c4",
      "value": [
        "LOAD",
        "8",
        [
          [
            "leaf",
            "const:1b1:8"
          ],
          [
            "INT_ADD",
            "8",
            [
              [
                "leaf",
                "const:1126000:8"
              ],
              [
                "leaf",
                "const:668:8"
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


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "00bc338c",
      "READ",
      [
        "storage",
        "01126670",
        null,
        "undefined1"
      ]
    ],
    [
      "00bc33ac",
      "READ",
      [
        "storage",
        "01126668",
        null,
        "undefined8"
      ]
    ],
    [
      "00bc33d0",
      "WRITE",
      [
        "storage",
        "01126670",
        null,
        "undefined1"
      ]
    ]
  ],
  "added": [
    [
      "00bc338c",
      "READ",
      [
        "storage",
        "01127630",
        null,
        "undefined1"
      ]
    ],
    [
      "00bc33ac",
      "READ",
      [
        "storage",
        "01127628",
        null,
        "undefined8"
      ]
    ],
    [
      "00bc33d0",
      "WRITE",
      [
        "storage",
        "01127630",
        null,
        "undefined1"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bc23c4 ["COPY", "register:0:8", ["register:4040:8"]]
- 00bc23c4 ["INT_ADD", "register:40f0:8", ["const:bc23c4:8", "const:4:8"]]
- 00bc23c4 ["CALLIND", null, ["register:0:8"]]
+ 00bc33b8 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00bc33b8 ["INT_ADD", "register:40f0:8", ["const:bc33b8:8", "const:4:8"]]
+ 00bc33b8 ["CALLIND", null, ["register:0:8"]]
- 00bc23dc ["COPY", "tmp:0:4", ["register:4000:4"]]
- 00bc23dc ["INT_ADD", "tmp:1:8", ["register:40a8:8", "const:670:8"]]
- 00bc23dc ["STORE", null, ["const:1b1:8", "tmp:1:8", "tmp:0:1"]]
+ 00bc33d0 ["COPY", "tmp:0:4", ["register:4000:4"]]
+ 00bc33d0 ["INT_ADD", "tmp:1:8", ["register:40a8:8", "const:630:8"]]
+ 00bc33d0 ["STORE", null, ["const:1b1:8", "tmp:1:8", "tmp:0:1"]]
- 00bc2394 ["COPY", "register:40a8:8", ["const:1126000:8"]]
+ 00bc3388 ["COPY", "register:40a8:8", ["const:1127000:8"]]
~~~


<a id="compare-3660500ad6be23e002ccf172219ef272"></a>

### [`00bc23f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bc2/00bc23f0.md) → [`00bc33e4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bc3/00bc33e4.md) _ZN8firebase13remote_config8internal11config_info12ReleaseClassEP7_JNIEnv

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c5b030`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b030.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c5c000`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5c000.md)

変更の種類 branch_value, constant, operands_and_dependencies, operation_sequence, store_destination

命令の説明率　旧版 85.71% / 新版 85.71%

優先判定に残った影響 `store_destination` 2件

アドレスに依存する影響 `branch_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_destination",
    "new": {
      "definition_site": "00bc3420",
      "incomplete_value": true,
      "site": "00bc3420",
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
            "const:630:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bc242c",
      "incomplete_value": true,
      "site": "00bc242c",
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
            "const:670:8"
          ]
        ]
      ]
    },
    "ordinal": 5,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "store_destination",
    "new": {
      "definition_site": "00bc3440",
      "incomplete_value": true,
      "site": "00bc3440",
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
            "const:628:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bc244c",
      "incomplete_value": true,
      "site": "00bc244c",
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
            "const:668:8"
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
      "definition_site": "00bc33fc",
      "incomplete_value": true,
      "site": "00bc33fc",
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
      "definition_site": "00bc2408",
      "incomplete_value": true,
      "site": "00bc2408",
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
      "00bc33f8",
      "READ",
      [
        "storage",
        "01126668",
        null,
        "undefined8"
      ]
    ],
    [
      "00bc3404",
      "READ",
      [
        "storage",
        "01126670",
        null,
        "undefined1"
      ]
    ],
    [
      "00bc3420",
      "WRITE",
      [
        "storage",
        "01126670",
        null,
        "undefined1"
      ]
    ]
  ],
  "added": [
    [
      "00bc33f8",
      "READ",
      [
        "storage",
        "01127628",
        null,
        "undefined8"
      ]
    ],
    [
      "00bc3404",
      "READ",
      [
        "storage",
        "01127630",
        null,
        "undefined1"
      ]
    ],
    [
      "00bc3420",
      "WRITE",
      [
        "storage",
        "01127630",
        null,
        "undefined1"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bc242c ["COPY", "tmp:0:4", ["const:0:4"]]
- 00bc242c ["COPY", "tmp:1:4", ["tmp:0:4"]]
- 00bc242c ["INT_ADD", "tmp:2:8", ["register:40a8:8", "const:670:8"]]
- 00bc242c ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:1:1"]]
+ 00bc3420 ["COPY", "tmp:0:4", ["const:0:4"]]
+ 00bc3420 ["COPY", "tmp:1:4", ["tmp:0:4"]]
+ 00bc3420 ["INT_ADD", "tmp:2:8", ["register:40a8:8", "const:630:8"]]
+ 00bc3420 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:1:1"]]
- 00bc244c ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:668:8"]]
- 00bc244c ["COPY", "tmp:1:8", ["const:0:8"]]
- 00bc244c ["STORE", null, ["const:1b1:8", "tmp:0:8", "tmp:1:8"]]
+ 00bc3440 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:628:8"]]
+ 00bc3440 ["COPY", "tmp:1:8", ["const:0:8"]]
+ 00bc3440 ["STORE", null, ["const:1b1:8", "tmp:0:8", "tmp:1:8"]]
- 00bc2400 ["COPY", "register:40a0:8", ["const:1126000:8"]]
+ 00bc33f4 ["COPY", "register:40a0:8", ["const:1127000:8"]]
~~~


<a id="compare-8bf37bc7255b22c76d8c2176f6d84fd5"></a>

### [`00bc2460`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bc2/00bc2460.md) → [`00bc3454`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bc3/00bc3454.md) _ZN8firebase13remote_config8internal11config_info14CacheMethodIdsEP7_JNIEnvP8_jobject

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c5afe0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5afe0.md) [`00c5b000`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b000.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c5bfb0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5bfb0.md) [`00c5bfd0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5bfd0.md)

変更の種類 branch_value, call_argument_candidate, constant, operands_and_dependencies, store_condition, store_destination

命令の説明率　旧版 75.00% / 新版 75.00%

優先判定に残った影響 `branch_value` 1件, `call_argument_candidate` 1件, `store_condition` 1件, `store_destination` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_destination",
    "new": {
      "definition_site": "00bc3494",
      "incomplete_value": true,
      "site": "00bc3494",
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
            "const:628:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bc24a0",
      "incomplete_value": true,
      "site": "00bc24a0",
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
            "const:668:8"
          ]
        ]
      ]
    },
    "ordinal": 4,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "branch_value",
    "new": {
      "definition_site": "00bc3470",
      "incomplete_value": true,
      "site": "00bc3470",
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
      "definition_site": "00bc247c",
      "incomplete_value": true,
      "site": "00bc247c",
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
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00bc3478",
      "incomplete_value": false,
      "site": "00bc348c",
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
            "const:4e4:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bc2484",
      "incomplete_value": false,
      "site": "00bc2498",
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
            "const:38c:8"
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
      "00bc3468",
      "READ",
      [
        "storage",
        "01126668",
        null,
        "undefined8"
      ]
    ],
    [
      "00bc3478",
      "PARAM",
      [
        "storage",
        "002a738c",
        null,
        "string"
      ]
    ],
    [
      "00bc3494",
      "WRITE",
      [
        "storage",
        "01126668",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00bc3468",
      "READ",
      [
        "storage",
        "01127628",
        null,
        "undefined8"
      ]
    ],
    [
      "00bc3478",
      "PARAM",
      [
        "storage",
        "002a74e4",
        null,
        "string"
      ]
    ],
    [
      "00bc3494",
      "WRITE",
      [
        "storage",
        "01127628",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bc2498 ["INT_ADD", "register:40f0:8", ["const:bc2498:8", "const:4:8"]]
- 00bc2498 ["CALL", null, ["callee:00c5bfb0:8"]]
+ 00bc348c ["INT_ADD", "register:40f0:8", ["const:bc348c:8", "const:4:8"]]
+ 00bc348c ["CALL", null, ["callee:00c5bfb0:8"]]
- 00bc24a0 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:668:8"]]
- 00bc24a0 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00bc3494 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:628:8"]]
+ 00bc3494 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00bc246c ["COPY", "register:40a0:8", ["const:1126000:8"]]
+ 00bc3460 ["COPY", "register:40a0:8", ["const:1127000:8"]]
~~~


<a id="compare-f83e91500b2c8f9bcfb3fde46e165f8d"></a>

### [`00bc24d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bc2/00bc24d0.md) → [`00bc34c4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bc3/00bc34c4.md) _ZN8firebase13remote_config8internal11config_info11GetMethodIdENS2_6MethodE

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c5b0d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b0d0.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c5c0a0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5c0a0.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies, return_value_candidate

命令の説明率　旧版 80.00% / 新版 80.00%

優先判定に残った影響 `call_argument_candidate` 1件, `return_value_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00bc34e0",
      "incomplete_value": false,
      "site": "00bc34e4",
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
            "const:463:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bc24ec",
      "incomplete_value": false,
      "site": "00bc24f0",
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
            "const:30b:8"
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
    "new": {
      "definition_site": "00bc34f0",
      "incomplete_value": true,
      "site": "00bc34fc",
      "value": [
        "LOAD",
        "8",
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
      "definition_site": "00bc24fc",
      "incomplete_value": true,
      "site": "00bc2508",
      "value": [
        "LOAD",
        "8",
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
      "00bc34e0",
      "PARAM",
      [
        "storage",
        "002a830b",
        null,
        "string"
      ]
    ],
    [
      "00bc34f0",
      "DATA",
      [
        "storage",
        "01126678",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00bc34e0",
      "PARAM",
      [
        "storage",
        "002a8463",
        null,
        "string"
      ]
    ],
    [
      "00bc34f0",
      "DATA",
      [
        "storage",
        "01127638",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bc24f0 ["INT_ADD", "register:40f0:8", ["const:bc24f0:8", "const:4:8"]]
- 00bc24f0 ["CALL", null, ["callee:00c5c0a0:8"]]
+ 00bc34e4 ["INT_ADD", "register:40f0:8", ["const:bc34e4:8", "const:4:8"]]
+ 00bc34e4 ["CALL", null, ["callee:00c5c0a0:8"]]
- 00bc24ec ["COPY", "tmp:0:8", ["const:30b:8"]]
- 00bc24ec ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 00bc24ec ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 00bc24ec ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 00bc34e0 ["COPY", "tmp:0:8", ["const:463:8"]]
+ 00bc34e0 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 00bc34e0 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 00bc34e0 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
- 00bc24f4 ["COPY", "register:4040:8", ["const:1126000:8"]]
+ 00bc34e8 ["COPY", "register:4040:8", ["const:1127000:8"]]
~~~


<a id="compare-79ef39e130c1d855821cf5f2fe37956a"></a>

### [`00bc250c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bc2/00bc250c.md) → [`00bc3500`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bc3/00bc3500.md) _ZN8firebase13remote_config8internal11config_info13CacheFieldIdsEP7_JNIEnvP8_jobject

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c5afc0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5afc0.md) [`00c5afe0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5afe0.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c5bf90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5bf90.md) [`00c5bfb0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5bfb0.md)

変更の種類 branch_value, constant, operands_and_dependencies, store_condition, store_destination

命令の説明率　旧版 75.00% / 新版 75.00%

優先判定に残った影響 `branch_value` 1件, `store_condition` 1件, `store_destination` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_destination",
    "new": {
      "definition_site": "00bc3540",
      "incomplete_value": true,
      "site": "00bc3540",
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
            "const:628:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bc254c",
      "incomplete_value": true,
      "site": "00bc254c",
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
            "const:668:8"
          ]
        ]
      ]
    },
    "ordinal": 4,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "branch_value",
    "new": {
      "definition_site": "00bc351c",
      "incomplete_value": true,
      "site": "00bc351c",
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
      "definition_site": "00bc2528",
      "incomplete_value": true,
      "site": "00bc2528",
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
        "00bc2528"
      ],
      [
        "FALL_THROUGH",
        "00bc351c"
      ]
    ],
    "kind": "store_condition",
    "new": {
      "definition_site": "00bc351c",
      "incomplete_value": true,
      "site": "00bc3540",
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
      "definition_site": "00bc2528",
      "incomplete_value": true,
      "site": "00bc254c",
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
      "00bc3514",
      "READ",
      [
        "storage",
        "01126668",
        null,
        "undefined8"
      ]
    ],
    [
      "00bc3524",
      "PARAM",
      [
        "storage",
        "002a738c",
        null,
        "string"
      ]
    ],
    [
      "00bc3540",
      "WRITE",
      [
        "storage",
        "01126668",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00bc3514",
      "READ",
      [
        "storage",
        "01127628",
        null,
        "undefined8"
      ]
    ],
    [
      "00bc3524",
      "PARAM",
      [
        "storage",
        "002a74e4",
        null,
        "string"
      ]
    ],
    [
      "00bc3540",
      "WRITE",
      [
        "storage",
        "01127628",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bc254c ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:668:8"]]
- 00bc254c ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00bc3540 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:628:8"]]
+ 00bc3540 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00bc2518 ["COPY", "register:40a0:8", ["const:1126000:8"]]
+ 00bc350c ["COPY", "register:40a0:8", ["const:1127000:8"]]
- 00bc2520 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:668:8"]]
- 00bc2520 ["LOAD", "register:4008:8", ["const:1b1:8", "tmp:0:8"]]
+ 00bc3514 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:628:8"]]
+ 00bc3514 ["LOAD", "register:4008:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-2758e3ed34b40af13d634d4e73d12a5c"></a>

### [`00bc257c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bc2/00bc257c.md) → [`00bc3570`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bc3/00bc3570.md) _ZN8firebase13remote_config8internal11config_info10GetFieldIdENS2_5FieldE

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c5b0d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b0d0.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c5c0a0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5c0a0.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies, return_value_candidate

命令の説明率　旧版 80.00% / 新版 80.00%

優先判定に残った影響 `call_argument_candidate` 1件, `return_value_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00bc358c",
      "incomplete_value": false,
      "site": "00bc3590",
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
            "const:61a:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bc2598",
      "incomplete_value": false,
      "site": "00bc259c",
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
            "const:54d:8"
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
    "new": {
      "definition_site": "00bc359c",
      "incomplete_value": true,
      "site": "00bc35a8",
      "value": [
        "LOAD",
        "8",
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
      "definition_site": "00bc25a8",
      "incomplete_value": true,
      "site": "00bc25b4",
      "value": [
        "LOAD",
        "8",
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
      "00bc358c",
      "PARAM",
      [
        "storage",
        "002a954d",
        null,
        "string"
      ]
    ],
    [
      "00bc359c",
      "DATA",
      [
        "storage",
        "01126690",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "00bc358c",
      "PARAM",
      [
        "storage",
        "002a961a",
        null,
        "string"
      ]
    ],
    [
      "00bc359c",
      "DATA",
      [
        "storage",
        "01127650",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 00bc259c ["INT_ADD", "register:40f0:8", ["const:bc259c:8", "const:4:8"]]
- 00bc259c ["CALL", null, ["callee:00c5c0a0:8"]]
+ 00bc3590 ["INT_ADD", "register:40f0:8", ["const:bc3590:8", "const:4:8"]]
+ 00bc3590 ["CALL", null, ["callee:00c5c0a0:8"]]
- 00bc2598 ["COPY", "tmp:0:8", ["const:54d:8"]]
- 00bc2598 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 00bc2598 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 00bc2598 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 00bc358c ["COPY", "tmp:0:8", ["const:61a:8"]]
+ 00bc358c ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 00bc358c ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 00bc358c ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
- 00bc25a0 ["COPY", "register:4040:8", ["const:1126000:8"]]
+ 00bc3594 ["COPY", "register:4040:8", ["const:1127000:8"]]
~~~


<a id="compare-472ce55f4c33f99421fbf0ac616b504d"></a>

### [`00bc25b8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bc2/00bc25b8.md) → [`00bc35ac`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bc3/00bc35ac.md) _ZN8firebase13remote_config8internal15config_settings19CacheClassFromFilesEP7_JNIEnvP8_jobjectPKNSt6__ndk16vectorINS_8internal12EmbeddedFile

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c5afe0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5afe0.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c5bfb0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5bfb0.md)

変更の種類 branch_value, call_argument_candidate, constant, operands_and_dependencies, store_condition, store_destination

命令の説明率　旧版 87.50% / 新版 87.50%

優先判定に残った影響 `call_argument_candidate` 1件, `store_destination` 1件

アドレスに依存する影響 `branch_value` 1件, `store_condition` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_destination",
    "new": {
      "definition_site": "00bc35d8",
      "incomplete_value": true,
      "site": "00bc35d8",
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
            "const:658:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bc25e4",
      "incomplete_value": true,
      "site": "00bc25e4",
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
            "const:698:8"
          ]
        ]
      ]
    },
    "ordinal": 3,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "branch_value",
    "new": {
      "definition_site": "00bc35c0",
      "incomplete_value": true,
      "site": "00bc35c0",
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
      "definition_site": "00bc25cc",
      "incomplete_value": true,
      "site": "00bc25cc",
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
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00bc35cc",
      "incomplete_value": false,
      "site": "00bc35d0",
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
            "const:c9b:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bc25d8",
      "incomplete_value": false,
      "site": "00bc25dc",
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
            "const:bcc:8"
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
      "00bc35bc",
      "READ",
      [
        "storage",
        "01126698",
        null,
        "undefined8"
      ]
    ],
    [
      "00bc35cc",
      "PARAM",
      [
        "storage",
        "002b8bcc",
        null,
        "string"
      ]
    ],
    [
      "00bc35d8",
      "WRITE",
      [
        "storage",
        "01126698",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00bc35bc",
      "READ",
      [
        "storage",
        "01127658",
        null,
        "undefined8"
      ]
    ],
    [
      "00bc35cc",
      "PARAM",
      [
        "storage",
        "002b8c9b",
        null,
        "string"
      ]
    ],
    [
      "00bc35d8",
      "WRITE",
      [
        "storage",
        "01127658",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bc25dc ["INT_ADD", "register:40f0:8", ["const:bc25dc:8", "const:4:8"]]
- 00bc25dc ["CALL", null, ["callee:00c5bfb0:8"]]
+ 00bc35d0 ["INT_ADD", "register:40f0:8", ["const:bc35d0:8", "const:4:8"]]
+ 00bc35d0 ["CALL", null, ["callee:00c5bfb0:8"]]
- 00bc25e4 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:698:8"]]
- 00bc25e4 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00bc35d8 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:658:8"]]
+ 00bc35d8 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00bc25c4 ["COPY", "register:4098:8", ["const:1126000:8"]]
+ 00bc35b8 ["COPY", "register:4098:8", ["const:1127000:8"]]
~~~


<a id="compare-fd97eafc95c1eabcc5c070e3e4d8821b"></a>

### [`00bc25f8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bc2/00bc25f8.md) → [`00bc35ec`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bc3/00bc35ec.md) _ZN8firebase13remote_config8internal15config_settings19CacheClassFromFilesEP7_JNIEnvP8_jobjectPKNSt6__ndk16vectorINS_8internal12EmbeddedFile

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c5afe0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5afe0.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c5bfb0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5bfb0.md)

変更の種類 branch_value, call_argument_candidate, constant, operands_and_dependencies, store_condition, store_destination

命令の説明率　旧版 87.50% / 新版 87.50%

優先判定に残った影響 `call_argument_candidate` 1件, `store_destination` 1件

アドレスに依存する影響 `branch_value` 1件, `store_condition` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_destination",
    "new": {
      "definition_site": "00bc3618",
      "incomplete_value": true,
      "site": "00bc3618",
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
            "const:658:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bc2624",
      "incomplete_value": true,
      "site": "00bc2624",
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
            "const:698:8"
          ]
        ]
      ]
    },
    "ordinal": 3,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "branch_value",
    "new": {
      "definition_site": "00bc3600",
      "incomplete_value": true,
      "site": "00bc3600",
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
      "definition_site": "00bc260c",
      "incomplete_value": true,
      "site": "00bc260c",
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
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00bc3608",
      "incomplete_value": false,
      "site": "00bc3610",
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
            "const:c9b:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bc2614",
      "incomplete_value": false,
      "site": "00bc261c",
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
            "const:bcc:8"
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
      "00bc35fc",
      "READ",
      [
        "storage",
        "01126698",
        null,
        "undefined8"
      ]
    ],
    [
      "00bc3608",
      "PARAM",
      [
        "storage",
        "002b8bcc",
        null,
        "string"
      ]
    ],
    [
      "00bc3618",
      "WRITE",
      [
        "storage",
        "01126698",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00bc35fc",
      "READ",
      [
        "storage",
        "01127658",
        null,
        "undefined8"
      ]
    ],
    [
      "00bc3608",
      "PARAM",
      [
        "storage",
        "002b8c9b",
        null,
        "string"
      ]
    ],
    [
      "00bc3618",
      "WRITE",
      [
        "storage",
        "01127658",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bc261c ["INT_ADD", "register:40f0:8", ["const:bc261c:8", "const:4:8"]]
- 00bc261c ["CALL", null, ["callee:00c5bfb0:8"]]
+ 00bc3610 ["INT_ADD", "register:40f0:8", ["const:bc3610:8", "const:4:8"]]
+ 00bc3610 ["CALL", null, ["callee:00c5bfb0:8"]]
- 00bc2624 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:698:8"]]
- 00bc2624 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00bc3618 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:658:8"]]
+ 00bc3618 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00bc2604 ["COPY", "register:4098:8", ["const:1126000:8"]]
+ 00bc35f8 ["COPY", "register:4098:8", ["const:1127000:8"]]
~~~


<a id="compare-72bdeadbab4af402794c45265e6ee2fd"></a>

### [`00bc2638`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bc2/00bc2638.md) → [`00bc362c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bc3/00bc362c.md) _ZN8firebase13remote_config8internal15config_settings10CacheClassEP7_JNIEnvP8_jobjectNS_4util16ClassRequirementE

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c5afe0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5afe0.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c5bfb0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5bfb0.md)

変更の種類 branch_value, call_argument_candidate, constant, operands_and_dependencies, store_condition, store_destination

命令の説明率　旧版 88.24% / 新版 88.24%

優先判定に残った影響 `call_argument_candidate` 1件, `store_destination` 1件

アドレスに依存する影響 `branch_value` 1件, `store_condition` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_destination",
    "new": {
      "definition_site": "00bc365c",
      "incomplete_value": true,
      "site": "00bc365c",
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
            "const:658:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bc2668",
      "incomplete_value": true,
      "site": "00bc2668",
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
            "const:698:8"
          ]
        ]
      ]
    },
    "ordinal": 3,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "branch_value",
    "new": {
      "definition_site": "00bc3640",
      "incomplete_value": true,
      "site": "00bc3640",
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
      "definition_site": "00bc264c",
      "incomplete_value": true,
      "site": "00bc264c",
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
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00bc364c",
      "incomplete_value": false,
      "site": "00bc3654",
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
            "const:c9b:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bc2658",
      "incomplete_value": false,
      "site": "00bc2660",
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
            "const:bcc:8"
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
      "00bc363c",
      "READ",
      [
        "storage",
        "01126698",
        null,
        "undefined8"
      ]
    ],
    [
      "00bc364c",
      "PARAM",
      [
        "storage",
        "002b8bcc",
        null,
        "string"
      ]
    ],
    [
      "00bc365c",
      "WRITE",
      [
        "storage",
        "01126698",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00bc363c",
      "READ",
      [
        "storage",
        "01127658",
        null,
        "undefined8"
      ]
    ],
    [
      "00bc364c",
      "PARAM",
      [
        "storage",
        "002b8c9b",
        null,
        "string"
      ]
    ],
    [
      "00bc365c",
      "WRITE",
      [
        "storage",
        "01127658",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bc2660 ["INT_ADD", "register:40f0:8", ["const:bc2660:8", "const:4:8"]]
- 00bc2660 ["CALL", null, ["callee:00c5bfb0:8"]]
+ 00bc3654 ["INT_ADD", "register:40f0:8", ["const:bc3654:8", "const:4:8"]]
+ 00bc3654 ["CALL", null, ["callee:00c5bfb0:8"]]
- 00bc2668 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:698:8"]]
- 00bc2668 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00bc365c ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:658:8"]]
+ 00bc365c ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00bc2644 ["COPY", "register:4098:8", ["const:1126000:8"]]
+ 00bc3638 ["COPY", "register:4098:8", ["const:1127000:8"]]
~~~


<a id="compare-5a47b81ad5d6dae3ca63607ac250927e"></a>

### [`00bc267c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bc2/00bc267c.md) → [`00bc3670`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bc3/00bc3670.md) _ZN8firebase13remote_config8internal15config_settings10CacheClassEP7_JNIEnvP8_jobject

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c5afe0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5afe0.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c5bfb0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5bfb0.md)

変更の種類 branch_value, call_argument_candidate, constant, operands_and_dependencies, store_condition, store_destination

命令の説明率　旧版 88.24% / 新版 88.24%

優先判定に残った影響 `call_argument_candidate` 1件, `store_destination` 1件

アドレスに依存する影響 `branch_value` 1件, `store_condition` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_destination",
    "new": {
      "definition_site": "00bc36a0",
      "incomplete_value": true,
      "site": "00bc36a0",
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
            "const:658:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bc26ac",
      "incomplete_value": true,
      "site": "00bc26ac",
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
            "const:698:8"
          ]
        ]
      ]
    },
    "ordinal": 3,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "branch_value",
    "new": {
      "definition_site": "00bc3684",
      "incomplete_value": true,
      "site": "00bc3684",
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
      "definition_site": "00bc2690",
      "incomplete_value": true,
      "site": "00bc2690",
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
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00bc368c",
      "incomplete_value": false,
      "site": "00bc3698",
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
            "const:c9b:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bc2698",
      "incomplete_value": false,
      "site": "00bc26a4",
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
            "const:bcc:8"
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
      "00bc3680",
      "READ",
      [
        "storage",
        "01126698",
        null,
        "undefined8"
      ]
    ],
    [
      "00bc368c",
      "PARAM",
      [
        "storage",
        "002b8bcc",
        null,
        "string"
      ]
    ],
    [
      "00bc36a0",
      "WRITE",
      [
        "storage",
        "01126698",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00bc3680",
      "READ",
      [
        "storage",
        "01127658",
        null,
        "undefined8"
      ]
    ],
    [
      "00bc368c",
      "PARAM",
      [
        "storage",
        "002b8c9b",
        null,
        "string"
      ]
    ],
    [
      "00bc36a0",
      "WRITE",
      [
        "storage",
        "01127658",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bc26a4 ["INT_ADD", "register:40f0:8", ["const:bc26a4:8", "const:4:8"]]
- 00bc26a4 ["CALL", null, ["callee:00c5bfb0:8"]]
+ 00bc3698 ["INT_ADD", "register:40f0:8", ["const:bc3698:8", "const:4:8"]]
+ 00bc3698 ["CALL", null, ["callee:00c5bfb0:8"]]
- 00bc26ac ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:698:8"]]
- 00bc26ac ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00bc36a0 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:658:8"]]
+ 00bc36a0 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00bc2688 ["COPY", "register:4098:8", ["const:1126000:8"]]
+ 00bc367c ["COPY", "register:4098:8", ["const:1127000:8"]]
~~~


<a id="compare-0746616107f900d4a6cc70ba02a4f5a1"></a>

### [`00bc26cc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bc2/00bc26cc.md) → [`00bc36c0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bc3/00bc36c0.md) _ZN8firebase13remote_config8internal15config_settings15RegisterNativesEP7_JNIEnvPK15JNINativeMethodm

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c5b030`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b030.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c5c000`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5c000.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies, store_destination

命令の説明率　旧版 92.59% / 新版 92.59%

優先判定に残った影響 `call_argument_candidate` 1件, `store_destination` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_destination",
    "new": {
      "definition_site": "00bc3718",
      "incomplete_value": true,
      "site": "00bc3718",
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
            "const:660:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bc2724",
      "incomplete_value": true,
      "site": "00bc2724",
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
            "const:6a0:8"
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
      "definition_site": "00bc36f4",
      "incomplete_value": true,
      "site": "00bc3700",
      "value": [
        "LOAD",
        "8",
        [
          [
            "leaf",
            "const:1b1:8"
          ],
          [
            "INT_ADD",
            "8",
            [
              [
                "leaf",
                "const:1127000:8"
              ],
              [
                "leaf",
                "const:658:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bc2700",
      "incomplete_value": true,
      "site": "00bc270c",
      "value": [
        "LOAD",
        "8",
        [
          [
            "leaf",
            "const:1b1:8"
          ],
          [
            "INT_ADD",
            "8",
            [
              [
                "leaf",
                "const:1126000:8"
              ],
              [
                "leaf",
                "const:698:8"
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


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "00bc36d4",
      "READ",
      [
        "storage",
        "011266a0",
        null,
        "undefined1"
      ]
    ],
    [
      "00bc36f4",
      "READ",
      [
        "storage",
        "01126698",
        null,
        "undefined8"
      ]
    ],
    [
      "00bc3718",
      "WRITE",
      [
        "storage",
        "011266a0",
        null,
        "undefined1"
      ]
    ]
  ],
  "added": [
    [
      "00bc36d4",
      "READ",
      [
        "storage",
        "01127660",
        null,
        "undefined1"
      ]
    ],
    [
      "00bc36f4",
      "READ",
      [
        "storage",
        "01127658",
        null,
        "undefined8"
      ]
    ],
    [
      "00bc3718",
      "WRITE",
      [
        "storage",
        "01127660",
        null,
        "undefined1"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bc270c ["COPY", "register:0:8", ["register:4040:8"]]
- 00bc270c ["INT_ADD", "register:40f0:8", ["const:bc270c:8", "const:4:8"]]
- 00bc270c ["CALLIND", null, ["register:0:8"]]
+ 00bc3700 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00bc3700 ["INT_ADD", "register:40f0:8", ["const:bc3700:8", "const:4:8"]]
+ 00bc3700 ["CALLIND", null, ["register:0:8"]]
- 00bc2724 ["COPY", "tmp:0:4", ["register:4000:4"]]
- 00bc2724 ["INT_ADD", "tmp:1:8", ["register:40a8:8", "const:6a0:8"]]
- 00bc2724 ["STORE", null, ["const:1b1:8", "tmp:1:8", "tmp:0:1"]]
+ 00bc3718 ["COPY", "tmp:0:4", ["register:4000:4"]]
+ 00bc3718 ["INT_ADD", "tmp:1:8", ["register:40a8:8", "const:660:8"]]
+ 00bc3718 ["STORE", null, ["const:1b1:8", "tmp:1:8", "tmp:0:1"]]
- 00bc26dc ["COPY", "register:40a8:8", ["const:1126000:8"]]
+ 00bc36d0 ["COPY", "register:40a8:8", ["const:1127000:8"]]
~~~


<a id="compare-2e0c562067fe67ed18b7d5b87f170181"></a>

### [`00bc2738`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bc2/00bc2738.md) → [`00bc372c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bc3/00bc372c.md) _ZN8firebase13remote_config8internal15config_settings12ReleaseClassEP7_JNIEnv

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c5b030`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b030.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c5c000`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5c000.md)

変更の種類 branch_value, call_argument_candidate, constant, operands_and_dependencies, store_destination

命令の説明率　旧版 89.29% / 新版 89.29%

優先判定に残った影響 `call_argument_candidate` 1件, `store_destination` 2件

アドレスに依存する影響 `branch_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_destination",
    "new": {
      "definition_site": "00bc3768",
      "incomplete_value": true,
      "site": "00bc3768",
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
            "const:660:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bc2774",
      "incomplete_value": true,
      "site": "00bc2774",
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
            "const:6a0:8"
          ]
        ]
      ]
    },
    "ordinal": 5,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "store_destination",
    "new": {
      "definition_site": "00bc3788",
      "incomplete_value": true,
      "site": "00bc3788",
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
            "const:658:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bc2794",
      "incomplete_value": true,
      "site": "00bc2794",
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
            "const:698:8"
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
      "definition_site": "00bc3744",
      "incomplete_value": true,
      "site": "00bc3744",
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
      "definition_site": "00bc2750",
      "incomplete_value": true,
      "site": "00bc2750",
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
      "00bc3740",
      "READ",
      [
        "storage",
        "01126698",
        null,
        "undefined8"
      ]
    ],
    [
      "00bc374c",
      "READ",
      [
        "storage",
        "011266a0",
        null,
        "undefined1"
      ]
    ],
    [
      "00bc3768",
      "WRITE",
      [
        "storage",
        "011266a0",
        null,
        "undefined1"
      ]
    ]
  ],
  "added": [
    [
      "00bc3740",
      "READ",
      [
        "storage",
        "01127658",
        null,
        "undefined8"
      ]
    ],
    [
      "00bc374c",
      "READ",
      [
        "storage",
        "01127660",
        null,
        "undefined1"
      ]
    ],
    [
      "00bc3768",
      "WRITE",
      [
        "storage",
        "01127660",
        null,
        "undefined1"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bc2774 ["COPY", "tmp:0:4", ["const:0:4"]]
- 00bc2774 ["COPY", "tmp:1:4", ["tmp:0:4"]]
- 00bc2774 ["INT_ADD", "tmp:2:8", ["register:40a8:8", "const:6a0:8"]]
- 00bc2774 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:1:1"]]
+ 00bc3768 ["COPY", "tmp:0:4", ["const:0:4"]]
+ 00bc3768 ["COPY", "tmp:1:4", ["tmp:0:4"]]
+ 00bc3768 ["INT_ADD", "tmp:2:8", ["register:40a8:8", "const:660:8"]]
+ 00bc3768 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:1:1"]]
- 00bc2790 ["COPY", "register:0:8", ["register:4040:8"]]
- 00bc2790 ["INT_ADD", "register:40f0:8", ["const:bc2790:8", "const:4:8"]]
- 00bc2790 ["CALLIND", null, ["register:0:8"]]
+ 00bc3784 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00bc3784 ["INT_ADD", "register:40f0:8", ["const:bc3784:8", "const:4:8"]]
+ 00bc3784 ["CALLIND", null, ["register:0:8"]]
- 00bc2794 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:698:8"]]
- 00bc2794 ["COPY", "tmp:1:8", ["const:0:8"]]
- 00bc2794 ["STORE", null, ["const:1b1:8", "tmp:0:8", "tmp:1:8"]]
+ 00bc3788 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:658:8"]]
+ 00bc3788 ["COPY", "tmp:1:8", ["const:0:8"]]
+ 00bc3788 ["STORE", null, ["const:1b1:8", "tmp:0:8", "tmp:1:8"]]
~~~


<a id="compare-8ebe325021111ad57bf98e4754fee0a8"></a>

### [`00bc27a8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bc2/00bc27a8.md) → [`00bc379c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bc3/00bc379c.md) _ZN8firebase13remote_config8internal15config_settings14CacheMethodIdsEP7_JNIEnvP8_jobject

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c5afe0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5afe0.md) [`00c5b000`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b000.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c5bfb0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5bfb0.md) [`00c5bfd0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5bfd0.md)

変更の種類 branch_value, call_argument_candidate, constant, operands_and_dependencies, store_condition, store_destination

命令の説明率　旧版 75.00% / 新版 75.00%

優先判定に残った影響 `branch_value` 1件, `call_argument_candidate` 1件, `store_condition` 1件, `store_destination` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_destination",
    "new": {
      "definition_site": "00bc37dc",
      "incomplete_value": true,
      "site": "00bc37dc",
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
            "const:658:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bc27e8",
      "incomplete_value": true,
      "site": "00bc27e8",
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
            "const:698:8"
          ]
        ]
      ]
    },
    "ordinal": 4,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "branch_value",
    "new": {
      "definition_site": "00bc37b8",
      "incomplete_value": true,
      "site": "00bc37b8",
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
      "definition_site": "00bc27c4",
      "incomplete_value": true,
      "site": "00bc27c4",
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
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00bc37c0",
      "incomplete_value": false,
      "site": "00bc37d4",
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
            "const:c9b:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bc27cc",
      "incomplete_value": false,
      "site": "00bc27e0",
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
            "const:bcc:8"
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
      "00bc37b0",
      "READ",
      [
        "storage",
        "01126698",
        null,
        "undefined8"
      ]
    ],
    [
      "00bc37c0",
      "PARAM",
      [
        "storage",
        "002b8bcc",
        null,
        "string"
      ]
    ],
    [
      "00bc37dc",
      "WRITE",
      [
        "storage",
        "01126698",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00bc37b0",
      "READ",
      [
        "storage",
        "01127658",
        null,
        "undefined8"
      ]
    ],
    [
      "00bc37c0",
      "PARAM",
      [
        "storage",
        "002b8c9b",
        null,
        "string"
      ]
    ],
    [
      "00bc37dc",
      "WRITE",
      [
        "storage",
        "01127658",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bc27e0 ["INT_ADD", "register:40f0:8", ["const:bc27e0:8", "const:4:8"]]
- 00bc27e0 ["CALL", null, ["callee:00c5bfb0:8"]]
+ 00bc37d4 ["INT_ADD", "register:40f0:8", ["const:bc37d4:8", "const:4:8"]]
+ 00bc37d4 ["CALL", null, ["callee:00c5bfb0:8"]]
- 00bc27e8 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:698:8"]]
- 00bc27e8 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00bc37dc ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:658:8"]]
+ 00bc37dc ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00bc27b4 ["COPY", "register:40a0:8", ["const:1126000:8"]]
+ 00bc37a8 ["COPY", "register:40a0:8", ["const:1127000:8"]]
~~~


<a id="compare-810b18862360772f0500fc054efaca6c"></a>

### [`00bc2818`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bc2/00bc2818.md) → [`00bc380c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bc3/00bc380c.md) _ZN8firebase13remote_config8internal15config_settings11GetMethodIdENS2_6MethodE

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c5b0d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b0d0.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c5c0a0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5c0a0.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies, return_value_candidate

命令の説明率　旧版 80.00% / 新版 80.00%

優先判定に残った影響 `call_argument_candidate` 1件, `return_value_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00bc3828",
      "incomplete_value": false,
      "site": "00bc382c",
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
            "const:463:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bc2834",
      "incomplete_value": false,
      "site": "00bc2838",
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
            "const:30b:8"
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
    "new": {
      "definition_site": "00bc3838",
      "incomplete_value": true,
      "site": "00bc3844",
      "value": [
        "LOAD",
        "8",
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
      "definition_site": "00bc2844",
      "incomplete_value": true,
      "site": "00bc2850",
      "value": [
        "LOAD",
        "8",
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
      "00bc3828",
      "PARAM",
      [
        "storage",
        "002a830b",
        null,
        "string"
      ]
    ],
    [
      "00bc3838",
      "DATA",
      [
        "storage",
        "011266a8",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00bc3828",
      "PARAM",
      [
        "storage",
        "002a8463",
        null,
        "string"
      ]
    ],
    [
      "00bc3838",
      "DATA",
      [
        "storage",
        "01127668",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bc2838 ["INT_ADD", "register:40f0:8", ["const:bc2838:8", "const:4:8"]]
- 00bc2838 ["CALL", null, ["callee:00c5c0a0:8"]]
+ 00bc382c ["INT_ADD", "register:40f0:8", ["const:bc382c:8", "const:4:8"]]
+ 00bc382c ["CALL", null, ["callee:00c5c0a0:8"]]
- 00bc2834 ["COPY", "tmp:0:8", ["const:30b:8"]]
- 00bc2834 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 00bc2834 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 00bc2834 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 00bc3828 ["COPY", "tmp:0:8", ["const:463:8"]]
+ 00bc3828 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 00bc3828 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 00bc3828 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
- 00bc283c ["COPY", "register:4040:8", ["const:1126000:8"]]
+ 00bc3830 ["COPY", "register:4040:8", ["const:1127000:8"]]
~~~


<a id="compare-4420baf5391a95dcd1f5c6ec47aded03"></a>

### [`00bc2854`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bc2/00bc2854.md) → [`00bc3848`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bc3/00bc3848.md) _ZN8firebase13remote_config8internal15config_settings13CacheFieldIdsEP7_JNIEnvP8_jobject

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c5afc0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5afc0.md) [`00c5afe0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5afe0.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c5bf90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5bf90.md) [`00c5bfb0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5bfb0.md)

変更の種類 branch_value, constant, operands_and_dependencies, store_condition, store_destination

命令の説明率　旧版 75.00% / 新版 75.00%

優先判定に残った影響 `branch_value` 1件, `store_condition` 1件, `store_destination` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_destination",
    "new": {
      "definition_site": "00bc3888",
      "incomplete_value": true,
      "site": "00bc3888",
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
            "const:658:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bc2894",
      "incomplete_value": true,
      "site": "00bc2894",
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
            "const:698:8"
          ]
        ]
      ]
    },
    "ordinal": 4,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "branch_value",
    "new": {
      "definition_site": "00bc3864",
      "incomplete_value": true,
      "site": "00bc3864",
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
      "definition_site": "00bc2870",
      "incomplete_value": true,
      "site": "00bc2870",
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
        "00bc2870"
      ],
      [
        "FALL_THROUGH",
        "00bc3864"
      ]
    ],
    "kind": "store_condition",
    "new": {
      "definition_site": "00bc3864",
      "incomplete_value": true,
      "site": "00bc3888",
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
      "definition_site": "00bc2870",
      "incomplete_value": true,
      "site": "00bc2894",
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
      "00bc385c",
      "READ",
      [
        "storage",
        "01126698",
        null,
        "undefined8"
      ]
    ],
    [
      "00bc386c",
      "PARAM",
      [
        "storage",
        "002b8bcc",
        null,
        "string"
      ]
    ],
    [
      "00bc3888",
      "WRITE",
      [
        "storage",
        "01126698",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00bc385c",
      "READ",
      [
        "storage",
        "01127658",
        null,
        "undefined8"
      ]
    ],
    [
      "00bc386c",
      "PARAM",
      [
        "storage",
        "002b8c9b",
        null,
        "string"
      ]
    ],
    [
      "00bc3888",
      "WRITE",
      [
        "storage",
        "01127658",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bc2894 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:698:8"]]
- 00bc2894 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00bc3888 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:658:8"]]
+ 00bc3888 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00bc2860 ["COPY", "register:40a0:8", ["const:1126000:8"]]
+ 00bc3854 ["COPY", "register:40a0:8", ["const:1127000:8"]]
- 00bc2868 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:698:8"]]
- 00bc2868 ["LOAD", "register:4008:8", ["const:1b1:8", "tmp:0:8"]]
+ 00bc385c ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:658:8"]]
+ 00bc385c ["LOAD", "register:4008:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-f49b0b59d8ad087dae0b3a583e7a578a"></a>

### [`00bc28c4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bc2/00bc28c4.md) → [`00bc38b8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bc3/00bc38b8.md) _ZN8firebase13remote_config8internal15config_settings10GetFieldIdENS2_5FieldE

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c5b0d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b0d0.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c5c0a0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5c0a0.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies, return_value_candidate

命令の説明率　旧版 80.00% / 新版 80.00%

優先判定に残った影響 `call_argument_candidate` 1件, `return_value_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00bc38d4",
      "incomplete_value": false,
      "site": "00bc38d8",
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
            "const:61a:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bc28e0",
      "incomplete_value": false,
      "site": "00bc28e4",
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
            "const:54d:8"
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
    "new": {
      "definition_site": "00bc38e4",
      "incomplete_value": true,
      "site": "00bc38f0",
      "value": [
        "LOAD",
        "8",
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
      "definition_site": "00bc28f0",
      "incomplete_value": true,
      "site": "00bc28fc",
      "value": [
        "LOAD",
        "8",
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
      "00bc38d4",
      "PARAM",
      [
        "storage",
        "002a954d",
        null,
        "string"
      ]
    ],
    [
      "00bc38e4",
      "DATA",
      [
        "storage",
        "011266b8",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "00bc38d4",
      "PARAM",
      [
        "storage",
        "002a961a",
        null,
        "string"
      ]
    ],
    [
      "00bc38e4",
      "DATA",
      [
        "storage",
        "01127678",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 00bc28e4 ["INT_ADD", "register:40f0:8", ["const:bc28e4:8", "const:4:8"]]
- 00bc28e4 ["CALL", null, ["callee:00c5c0a0:8"]]
+ 00bc38d8 ["INT_ADD", "register:40f0:8", ["const:bc38d8:8", "const:4:8"]]
+ 00bc38d8 ["CALL", null, ["callee:00c5c0a0:8"]]
- 00bc28e0 ["COPY", "tmp:0:8", ["const:54d:8"]]
- 00bc28e0 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 00bc28e0 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 00bc28e0 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 00bc38d4 ["COPY", "tmp:0:8", ["const:61a:8"]]
+ 00bc38d4 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 00bc38d4 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 00bc38d4 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
- 00bc28e8 ["COPY", "register:4040:8", ["const:1126000:8"]]
+ 00bc38dc ["COPY", "register:4040:8", ["const:1127000:8"]]
~~~


<a id="compare-62c696b31c50b5759c481a4a8d58074b"></a>

### [`00bc2900`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bc2/00bc2900.md) → [`00bc38f4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bc3/00bc38f4.md) _ZN8firebase13remote_config8internal23config_settings_builder19CacheClassFromFilesEP7_JNIEnvP8_jobjectPKNSt6__ndk16vectorINS_8internal12Embe

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c5afe0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5afe0.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c5bfb0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5bfb0.md)

変更の種類 branch_value, call_argument_candidate, constant, operands_and_dependencies, store_condition, store_destination

命令の説明率　旧版 87.50% / 新版 87.50%

優先判定に残った影響 `call_argument_candidate` 1件, `store_destination` 1件

アドレスに依存する影響 `branch_value` 1件, `store_condition` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_destination",
    "new": {
      "definition_site": "00bc3920",
      "incomplete_value": true,
      "site": "00bc3920",
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
            "const:680:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bc292c",
      "incomplete_value": true,
      "site": "00bc292c",
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
            "const:6c0:8"
          ]
        ]
      ]
    },
    "ordinal": 3,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "branch_value",
    "new": {
      "definition_site": "00bc3908",
      "incomplete_value": true,
      "site": "00bc3908",
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
      "definition_site": "00bc2914",
      "incomplete_value": true,
      "site": "00bc2914",
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
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00bc3914",
      "incomplete_value": false,
      "site": "00bc3918",
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
            "const:c68:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bc2920",
      "incomplete_value": false,
      "site": "00bc2924",
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
            "const:b8a:8"
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
      "00bc3904",
      "READ",
      [
        "storage",
        "011266c0",
        null,
        "undefined8"
      ]
    ],
    [
      "00bc3914",
      "PARAM",
      [
        "storage",
        "002b9b8a",
        null,
        "string"
      ]
    ],
    [
      "00bc3920",
      "WRITE",
      [
        "storage",
        "011266c0",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00bc3904",
      "READ",
      [
        "storage",
        "01127680",
        null,
        "undefined8"
      ]
    ],
    [
      "00bc3914",
      "PARAM",
      [
        "storage",
        "002b9c68",
        null,
        "string"
      ]
    ],
    [
      "00bc3920",
      "WRITE",
      [
        "storage",
        "01127680",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bc2924 ["INT_ADD", "register:40f0:8", ["const:bc2924:8", "const:4:8"]]
- 00bc2924 ["CALL", null, ["callee:00c5bfb0:8"]]
+ 00bc3918 ["INT_ADD", "register:40f0:8", ["const:bc3918:8", "const:4:8"]]
+ 00bc3918 ["CALL", null, ["callee:00c5bfb0:8"]]
- 00bc292c ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:6c0:8"]]
- 00bc292c ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00bc3920 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:680:8"]]
+ 00bc3920 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00bc290c ["COPY", "register:4098:8", ["const:1126000:8"]]
+ 00bc3900 ["COPY", "register:4098:8", ["const:1127000:8"]]
~~~


<a id="compare-7892cf8f9ffe8660a301fa1ea0c6e5ee"></a>

### [`00bc2940`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bc2/00bc2940.md) → [`00bc3934`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bc3/00bc3934.md) _ZN8firebase13remote_config8internal23config_settings_builder19CacheClassFromFilesEP7_JNIEnvP8_jobjectPKNSt6__ndk16vectorINS_8internal12Embe

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c5afe0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5afe0.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c5bfb0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5bfb0.md)

変更の種類 branch_value, call_argument_candidate, constant, operands_and_dependencies, store_condition, store_destination

命令の説明率　旧版 87.50% / 新版 87.50%

優先判定に残った影響 `call_argument_candidate` 1件, `store_destination` 1件

アドレスに依存する影響 `branch_value` 1件, `store_condition` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_destination",
    "new": {
      "definition_site": "00bc3960",
      "incomplete_value": true,
      "site": "00bc3960",
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
            "const:680:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bc296c",
      "incomplete_value": true,
      "site": "00bc296c",
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
            "const:6c0:8"
          ]
        ]
      ]
    },
    "ordinal": 3,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "branch_value",
    "new": {
      "definition_site": "00bc3948",
      "incomplete_value": true,
      "site": "00bc3948",
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
      "definition_site": "00bc2954",
      "incomplete_value": true,
      "site": "00bc2954",
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
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00bc3950",
      "incomplete_value": false,
      "site": "00bc3958",
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
            "const:c68:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bc295c",
      "incomplete_value": false,
      "site": "00bc2964",
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
            "const:b8a:8"
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
      "00bc3944",
      "READ",
      [
        "storage",
        "011266c0",
        null,
        "undefined8"
      ]
    ],
    [
      "00bc3950",
      "PARAM",
      [
        "storage",
        "002b9b8a",
        null,
        "string"
      ]
    ],
    [
      "00bc3960",
      "WRITE",
      [
        "storage",
        "011266c0",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00bc3944",
      "READ",
      [
        "storage",
        "01127680",
        null,
        "undefined8"
      ]
    ],
    [
      "00bc3950",
      "PARAM",
      [
        "storage",
        "002b9c68",
        null,
        "string"
      ]
    ],
    [
      "00bc3960",
      "WRITE",
      [
        "storage",
        "01127680",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bc2964 ["INT_ADD", "register:40f0:8", ["const:bc2964:8", "const:4:8"]]
- 00bc2964 ["CALL", null, ["callee:00c5bfb0:8"]]
+ 00bc3958 ["INT_ADD", "register:40f0:8", ["const:bc3958:8", "const:4:8"]]
+ 00bc3958 ["CALL", null, ["callee:00c5bfb0:8"]]
- 00bc296c ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:6c0:8"]]
- 00bc296c ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00bc3960 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:680:8"]]
+ 00bc3960 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00bc294c ["COPY", "register:4098:8", ["const:1126000:8"]]
+ 00bc3940 ["COPY", "register:4098:8", ["const:1127000:8"]]
~~~


<a id="compare-980a94623dc7a0b07615f7a206bfc84c"></a>

### [`00bc2980`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bc2/00bc2980.md) → [`00bc3974`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bc3/00bc3974.md) _ZN8firebase13remote_config8internal23config_settings_builder10CacheClassEP7_JNIEnvP8_jobjectNS_4util16ClassRequirementE

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c5afe0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5afe0.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c5bfb0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5bfb0.md)

変更の種類 branch_value, call_argument_candidate, constant, operands_and_dependencies, store_condition, store_destination

命令の説明率　旧版 88.24% / 新版 88.24%

優先判定に残った影響 `call_argument_candidate` 1件, `store_destination` 1件

アドレスに依存する影響 `branch_value` 1件, `store_condition` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_destination",
    "new": {
      "definition_site": "00bc39a4",
      "incomplete_value": true,
      "site": "00bc39a4",
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
            "const:680:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bc29b0",
      "incomplete_value": true,
      "site": "00bc29b0",
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
            "const:6c0:8"
          ]
        ]
      ]
    },
    "ordinal": 3,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "branch_value",
    "new": {
      "definition_site": "00bc3988",
      "incomplete_value": true,
      "site": "00bc3988",
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
      "definition_site": "00bc2994",
      "incomplete_value": true,
      "site": "00bc2994",
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
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00bc3994",
      "incomplete_value": false,
      "site": "00bc399c",
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
            "const:c68:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bc29a0",
      "incomplete_value": false,
      "site": "00bc29a8",
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
            "const:b8a:8"
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
      "00bc3984",
      "READ",
      [
        "storage",
        "011266c0",
        null,
        "undefined8"
      ]
    ],
    [
      "00bc3994",
      "PARAM",
      [
        "storage",
        "002b9b8a",
        null,
        "string"
      ]
    ],
    [
      "00bc39a4",
      "WRITE",
      [
        "storage",
        "011266c0",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00bc3984",
      "READ",
      [
        "storage",
        "01127680",
        null,
        "undefined8"
      ]
    ],
    [
      "00bc3994",
      "PARAM",
      [
        "storage",
        "002b9c68",
        null,
        "string"
      ]
    ],
    [
      "00bc39a4",
      "WRITE",
      [
        "storage",
        "01127680",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bc29a8 ["INT_ADD", "register:40f0:8", ["const:bc29a8:8", "const:4:8"]]
- 00bc29a8 ["CALL", null, ["callee:00c5bfb0:8"]]
+ 00bc399c ["INT_ADD", "register:40f0:8", ["const:bc399c:8", "const:4:8"]]
+ 00bc399c ["CALL", null, ["callee:00c5bfb0:8"]]
- 00bc29b0 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:6c0:8"]]
- 00bc29b0 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00bc39a4 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:680:8"]]
+ 00bc39a4 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00bc298c ["COPY", "register:4098:8", ["const:1126000:8"]]
+ 00bc3980 ["COPY", "register:4098:8", ["const:1127000:8"]]
~~~


<a id="compare-3d8a95840c828c314cdfef86ba4b73d7"></a>

### [`00bc29c4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bc2/00bc29c4.md) → [`00bc39b8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bc3/00bc39b8.md) _ZN8firebase13remote_config8internal23config_settings_builder10CacheClassEP7_JNIEnvP8_jobject

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c5afe0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5afe0.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c5bfb0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5bfb0.md)

変更の種類 branch_value, constant, operands_and_dependencies, store_condition, store_destination

命令の説明率　旧版 88.24% / 新版 88.24%

優先判定に残った影響 `store_destination` 1件

アドレスに依存する影響 `branch_value` 1件, `store_condition` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_destination",
    "new": {
      "definition_site": "00bc39e8",
      "incomplete_value": true,
      "site": "00bc39e8",
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
            "const:680:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bc29f4",
      "incomplete_value": true,
      "site": "00bc29f4",
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
            "const:6c0:8"
          ]
        ]
      ]
    },
    "ordinal": 3,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "branch_value",
    "new": {
      "definition_site": "00bc39cc",
      "incomplete_value": true,
      "site": "00bc39cc",
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
      "definition_site": "00bc29d8",
      "incomplete_value": true,
      "site": "00bc29d8",
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
        "00bc29d8"
      ],
      [
        "FALL_THROUGH",
        "00bc39cc"
      ]
    ],
    "kind": "store_condition",
    "new": {
      "definition_site": "00bc39cc",
      "incomplete_value": true,
      "site": "00bc39e8",
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
      "definition_site": "00bc29d8",
      "incomplete_value": true,
      "site": "00bc29f4",
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
      "00bc39c8",
      "READ",
      [
        "storage",
        "011266c0",
        null,
        "undefined8"
      ]
    ],
    [
      "00bc39d4",
      "PARAM",
      [
        "storage",
        "002b9b8a",
        null,
        "string"
      ]
    ],
    [
      "00bc39e8",
      "WRITE",
      [
        "storage",
        "011266c0",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00bc39c8",
      "READ",
      [
        "storage",
        "01127680",
        null,
        "undefined8"
      ]
    ],
    [
      "00bc39d4",
      "PARAM",
      [
        "storage",
        "002b9c68",
        null,
        "string"
      ]
    ],
    [
      "00bc39e8",
      "WRITE",
      [
        "storage",
        "01127680",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bc29f4 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:6c0:8"]]
- 00bc29f4 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00bc39e8 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:680:8"]]
+ 00bc39e8 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00bc29d0 ["COPY", "register:4098:8", ["const:1126000:8"]]
+ 00bc39c4 ["COPY", "register:4098:8", ["const:1127000:8"]]
- 00bc29d4 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:6c0:8"]]
- 00bc29d4 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
+ 00bc39c8 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:680:8"]]
+ 00bc39c8 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-fa15028b2341b06417efe1ceac7291c9"></a>

### [`00bc2a14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bc2/00bc2a14.md) → [`00bc3a08`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bc3/00bc3a08.md) _ZN8firebase13remote_config8internal23config_settings_builder15RegisterNativesEP7_JNIEnvPK15JNINativeMethodm

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c5b030`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b030.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c5c000`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5c000.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies, store_destination

命令の説明率　旧版 92.59% / 新版 92.59%

優先判定に残った影響 `call_argument_candidate` 1件, `store_destination` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_destination",
    "new": {
      "definition_site": "00bc3a60",
      "incomplete_value": true,
      "site": "00bc3a60",
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
            "const:688:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bc2a6c",
      "incomplete_value": true,
      "site": "00bc2a6c",
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
            "const:6c8:8"
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
      "definition_site": "00bc3a3c",
      "incomplete_value": true,
      "site": "00bc3a48",
      "value": [
        "LOAD",
        "8",
        [
          [
            "leaf",
            "const:1b1:8"
          ],
          [
            "INT_ADD",
            "8",
            [
              [
                "leaf",
                "const:1127000:8"
              ],
              [
                "leaf",
                "const:680:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bc2a48",
      "incomplete_value": true,
      "site": "00bc2a54",
      "value": [
        "LOAD",
        "8",
        [
          [
            "leaf",
            "const:1b1:8"
          ],
          [
            "INT_ADD",
            "8",
            [
              [
                "leaf",
                "const:1126000:8"
              ],
              [
                "leaf",
                "const:6c0:8"
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


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "00bc3a1c",
      "READ",
      [
        "storage",
        "011266c8",
        null,
        "undefined1"
      ]
    ],
    [
      "00bc3a3c",
      "READ",
      [
        "storage",
        "011266c0",
        null,
        "undefined8"
      ]
    ],
    [
      "00bc3a60",
      "WRITE",
      [
        "storage",
        "011266c8",
        null,
        "undefined1"
      ]
    ]
  ],
  "added": [
    [
      "00bc3a1c",
      "READ",
      [
        "storage",
        "01127688",
        null,
        "undefined1"
      ]
    ],
    [
      "00bc3a3c",
      "READ",
      [
        "storage",
        "01127680",
        null,
        "undefined8"
      ]
    ],
    [
      "00bc3a60",
      "WRITE",
      [
        "storage",
        "01127688",
        null,
        "undefined1"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bc2a54 ["COPY", "register:0:8", ["register:4040:8"]]
- 00bc2a54 ["INT_ADD", "register:40f0:8", ["const:bc2a54:8", "const:4:8"]]
- 00bc2a54 ["CALLIND", null, ["register:0:8"]]
+ 00bc3a48 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00bc3a48 ["INT_ADD", "register:40f0:8", ["const:bc3a48:8", "const:4:8"]]
+ 00bc3a48 ["CALLIND", null, ["register:0:8"]]
- 00bc2a6c ["COPY", "tmp:0:4", ["register:4000:4"]]
- 00bc2a6c ["INT_ADD", "tmp:1:8", ["register:40a8:8", "const:6c8:8"]]
- 00bc2a6c ["STORE", null, ["const:1b1:8", "tmp:1:8", "tmp:0:1"]]
+ 00bc3a60 ["COPY", "tmp:0:4", ["register:4000:4"]]
+ 00bc3a60 ["INT_ADD", "tmp:1:8", ["register:40a8:8", "const:688:8"]]
+ 00bc3a60 ["STORE", null, ["const:1b1:8", "tmp:1:8", "tmp:0:1"]]
- 00bc2a24 ["COPY", "register:40a8:8", ["const:1126000:8"]]
+ 00bc3a18 ["COPY", "register:40a8:8", ["const:1127000:8"]]
~~~


<a id="compare-d0ee258b7f99285e69c2cf11d46f1148"></a>

### [`00bc2a80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bc2/00bc2a80.md) → [`00bc3a74`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bc3/00bc3a74.md) _ZN8firebase13remote_config8internal23config_settings_builder12ReleaseClassEP7_JNIEnv

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c5b030`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b030.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c5c000`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5c000.md)

変更の種類 branch_value, call_argument_candidate, constant, operands_and_dependencies, store_destination

命令の説明率　旧版 89.29% / 新版 89.29%

優先判定に残った影響 `call_argument_candidate` 1件, `store_destination` 2件

アドレスに依存する影響 `branch_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_destination",
    "new": {
      "definition_site": "00bc3ab0",
      "incomplete_value": true,
      "site": "00bc3ab0",
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
            "const:688:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bc2abc",
      "incomplete_value": true,
      "site": "00bc2abc",
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
            "const:6c8:8"
          ]
        ]
      ]
    },
    "ordinal": 5,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "store_destination",
    "new": {
      "definition_site": "00bc3ad0",
      "incomplete_value": true,
      "site": "00bc3ad0",
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
            "const:680:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bc2adc",
      "incomplete_value": true,
      "site": "00bc2adc",
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
            "const:6c0:8"
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
      "definition_site": "00bc3a8c",
      "incomplete_value": true,
      "site": "00bc3a8c",
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
      "definition_site": "00bc2a98",
      "incomplete_value": true,
      "site": "00bc2a98",
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
      "00bc3a88",
      "READ",
      [
        "storage",
        "011266c0",
        null,
        "undefined8"
      ]
    ],
    [
      "00bc3a94",
      "READ",
      [
        "storage",
        "011266c8",
        null,
        "undefined1"
      ]
    ],
    [
      "00bc3ab0",
      "WRITE",
      [
        "storage",
        "011266c8",
        null,
        "undefined1"
      ]
    ]
  ],
  "added": [
    [
      "00bc3a88",
      "READ",
      [
        "storage",
        "01127680",
        null,
        "undefined8"
      ]
    ],
    [
      "00bc3a94",
      "READ",
      [
        "storage",
        "01127688",
        null,
        "undefined1"
      ]
    ],
    [
      "00bc3ab0",
      "WRITE",
      [
        "storage",
        "01127688",
        null,
        "undefined1"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bc2abc ["COPY", "tmp:0:4", ["const:0:4"]]
- 00bc2abc ["COPY", "tmp:1:4", ["tmp:0:4"]]
- 00bc2abc ["INT_ADD", "tmp:2:8", ["register:40a8:8", "const:6c8:8"]]
- 00bc2abc ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:1:1"]]
+ 00bc3ab0 ["COPY", "tmp:0:4", ["const:0:4"]]
+ 00bc3ab0 ["COPY", "tmp:1:4", ["tmp:0:4"]]
+ 00bc3ab0 ["INT_ADD", "tmp:2:8", ["register:40a8:8", "const:688:8"]]
+ 00bc3ab0 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:1:1"]]
- 00bc2ad8 ["COPY", "register:0:8", ["register:4040:8"]]
- 00bc2ad8 ["INT_ADD", "register:40f0:8", ["const:bc2ad8:8", "const:4:8"]]
- 00bc2ad8 ["CALLIND", null, ["register:0:8"]]
+ 00bc3acc ["COPY", "register:0:8", ["register:4040:8"]]
+ 00bc3acc ["INT_ADD", "register:40f0:8", ["const:bc3acc:8", "const:4:8"]]
+ 00bc3acc ["CALLIND", null, ["register:0:8"]]
- 00bc2adc ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:6c0:8"]]
- 00bc2adc ["COPY", "tmp:1:8", ["const:0:8"]]
- 00bc2adc ["STORE", null, ["const:1b1:8", "tmp:0:8", "tmp:1:8"]]
+ 00bc3ad0 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:680:8"]]
+ 00bc3ad0 ["COPY", "tmp:1:8", ["const:0:8"]]
+ 00bc3ad0 ["STORE", null, ["const:1b1:8", "tmp:0:8", "tmp:1:8"]]
~~~


<a id="compare-e55493293c5c3ec6e5444f905ce7a4b4"></a>

### [`00bc2af0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bc2/00bc2af0.md) → [`00bc3ae4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bc3/00bc3ae4.md) _ZN8firebase13remote_config8internal23config_settings_builder14CacheMethodIdsEP7_JNIEnvP8_jobject

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c5afe0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5afe0.md) [`00c5b000`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b000.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c5bfb0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5bfb0.md) [`00c5bfd0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5bfd0.md)

変更の種類 branch_value, call_argument_candidate, constant, operands_and_dependencies, store_condition, store_destination

命令の説明率　旧版 75.00% / 新版 75.00%

優先判定に残った影響 `branch_value` 1件, `call_argument_candidate` 1件, `store_condition` 1件, `store_destination` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_destination",
    "new": {
      "definition_site": "00bc3b24",
      "incomplete_value": true,
      "site": "00bc3b24",
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
            "const:680:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bc2b30",
      "incomplete_value": true,
      "site": "00bc2b30",
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
            "const:6c0:8"
          ]
        ]
      ]
    },
    "ordinal": 4,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "branch_value",
    "new": {
      "definition_site": "00bc3b00",
      "incomplete_value": true,
      "site": "00bc3b00",
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
      "definition_site": "00bc2b0c",
      "incomplete_value": true,
      "site": "00bc2b0c",
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
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00bc3b08",
      "incomplete_value": true,
      "site": "00bc3b1c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:4018:8"
          ],
          [
            "leaf",
            "const:c68:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bc2b14",
      "incomplete_value": true,
      "site": "00bc2b28",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:4018:8"
          ],
          [
            "leaf",
            "const:b8a:8"
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
      "00bc3af8",
      "READ",
      [
        "storage",
        "011266c0",
        null,
        "undefined8"
      ]
    ],
    [
      "00bc3b08",
      "PARAM",
      [
        "storage",
        "002b9b8a",
        null,
        "string"
      ]
    ],
    [
      "00bc3b24",
      "WRITE",
      [
        "storage",
        "011266c0",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00bc3af8",
      "READ",
      [
        "storage",
        "01127680",
        null,
        "undefined8"
      ]
    ],
    [
      "00bc3b08",
      "PARAM",
      [
        "storage",
        "002b9c68",
        null,
        "string"
      ]
    ],
    [
      "00bc3b24",
      "WRITE",
      [
        "storage",
        "01127680",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bc2b28 ["INT_ADD", "register:40f0:8", ["const:bc2b28:8", "const:4:8"]]
- 00bc2b28 ["CALL", null, ["callee:00c5bfb0:8"]]
+ 00bc3b1c ["INT_ADD", "register:40f0:8", ["const:bc3b1c:8", "const:4:8"]]
+ 00bc3b1c ["CALL", null, ["callee:00c5bfb0:8"]]
- 00bc2b30 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:6c0:8"]]
- 00bc2b30 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00bc3b24 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:680:8"]]
+ 00bc3b24 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00bc2afc ["COPY", "register:40a0:8", ["const:1126000:8"]]
+ 00bc3af0 ["COPY", "register:40a0:8", ["const:1127000:8"]]
~~~


<a id="compare-2360ffcfc0bc7fb1e6a280452e9bb0a9"></a>

### [`00bc2b60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bc2/00bc2b60.md) → [`00bc3b54`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bc3/00bc3b54.md) _ZN8firebase13remote_config8internal23config_settings_builder11GetMethodIdENS2_6MethodE

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c5b0d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b0d0.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c5c0a0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5c0a0.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies, return_value_candidate

命令の説明率　旧版 80.00% / 新版 80.00%

優先判定に残った影響 `call_argument_candidate` 1件, `return_value_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00bc3b70",
      "incomplete_value": false,
      "site": "00bc3b74",
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
            "const:463:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bc2b7c",
      "incomplete_value": false,
      "site": "00bc2b80",
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
            "const:30b:8"
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
    "new": {
      "definition_site": "00bc3b80",
      "incomplete_value": true,
      "site": "00bc3b8c",
      "value": [
        "LOAD",
        "8",
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
      "definition_site": "00bc2b8c",
      "incomplete_value": true,
      "site": "00bc2b98",
      "value": [
        "LOAD",
        "8",
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
      "00bc3b70",
      "PARAM",
      [
        "storage",
        "002a830b",
        null,
        "string"
      ]
    ],
    [
      "00bc3b80",
      "DATA",
      [
        "storage",
        "011266d0",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00bc3b70",
      "PARAM",
      [
        "storage",
        "002a8463",
        null,
        "string"
      ]
    ],
    [
      "00bc3b80",
      "DATA",
      [
        "storage",
        "01127690",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bc2b80 ["INT_ADD", "register:40f0:8", ["const:bc2b80:8", "const:4:8"]]
- 00bc2b80 ["CALL", null, ["callee:00c5c0a0:8"]]
+ 00bc3b74 ["INT_ADD", "register:40f0:8", ["const:bc3b74:8", "const:4:8"]]
+ 00bc3b74 ["CALL", null, ["callee:00c5c0a0:8"]]
- 00bc2b7c ["COPY", "tmp:0:8", ["const:30b:8"]]
- 00bc2b7c ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 00bc2b7c ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 00bc2b7c ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 00bc3b70 ["COPY", "tmp:0:8", ["const:463:8"]]
+ 00bc3b70 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 00bc3b70 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 00bc3b70 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
- 00bc2b84 ["COPY", "register:4040:8", ["const:1126000:8"]]
+ 00bc3b78 ["COPY", "register:4040:8", ["const:1127000:8"]]
~~~


<a id="compare-bc9453d0cbcb70f87b59545fb380fe77"></a>

### [`00bc2b9c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bc2/00bc2b9c.md) → [`00bc3b90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bc3/00bc3b90.md) _ZN8firebase13remote_config8internal23config_settings_builder13CacheFieldIdsEP7_JNIEnvP8_jobject

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c5afc0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5afc0.md) [`00c5afe0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5afe0.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c5bf90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5bf90.md) [`00c5bfb0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5bfb0.md)

変更の種類 branch_value, call_argument_candidate, constant, operands_and_dependencies, store_condition, store_destination

命令の説明率　旧版 75.00% / 新版 75.00%

優先判定に残った影響 `branch_value` 1件, `call_argument_candidate` 1件, `store_condition` 1件, `store_destination` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_destination",
    "new": {
      "definition_site": "00bc3bd0",
      "incomplete_value": true,
      "site": "00bc3bd0",
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
            "const:680:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bc2bdc",
      "incomplete_value": true,
      "site": "00bc2bdc",
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
            "const:6c0:8"
          ]
        ]
      ]
    },
    "ordinal": 4,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "branch_value",
    "new": {
      "definition_site": "00bc3bac",
      "incomplete_value": true,
      "site": "00bc3bac",
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
      "definition_site": "00bc2bb8",
      "incomplete_value": true,
      "site": "00bc2bb8",
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
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00bc3bb4",
      "incomplete_value": false,
      "site": "00bc3bc8",
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
            "const:c68:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bc2bc0",
      "incomplete_value": false,
      "site": "00bc2bd4",
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
            "const:b8a:8"
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
      "00bc3ba4",
      "READ",
      [
        "storage",
        "011266c0",
        null,
        "undefined8"
      ]
    ],
    [
      "00bc3bb4",
      "PARAM",
      [
        "storage",
        "002b9b8a",
        null,
        "string"
      ]
    ],
    [
      "00bc3bd0",
      "WRITE",
      [
        "storage",
        "011266c0",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00bc3ba4",
      "READ",
      [
        "storage",
        "01127680",
        null,
        "undefined8"
      ]
    ],
    [
      "00bc3bb4",
      "PARAM",
      [
        "storage",
        "002b9c68",
        null,
        "string"
      ]
    ],
    [
      "00bc3bd0",
      "WRITE",
      [
        "storage",
        "01127680",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bc2bd4 ["INT_ADD", "register:40f0:8", ["const:bc2bd4:8", "const:4:8"]]
- 00bc2bd4 ["CALL", null, ["callee:00c5bfb0:8"]]
+ 00bc3bc8 ["INT_ADD", "register:40f0:8", ["const:bc3bc8:8", "const:4:8"]]
+ 00bc3bc8 ["CALL", null, ["callee:00c5bfb0:8"]]
- 00bc2bdc ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:6c0:8"]]
- 00bc2bdc ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00bc3bd0 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:680:8"]]
+ 00bc3bd0 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00bc2ba8 ["COPY", "register:40a0:8", ["const:1126000:8"]]
+ 00bc3b9c ["COPY", "register:40a0:8", ["const:1127000:8"]]
~~~


<a id="compare-aea585b7dd712259bde0e0035b20ee24"></a>

### [`00bc2c0c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bc2/00bc2c0c.md) → [`00bc3c00`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bc3/00bc3c00.md) _ZN8firebase13remote_config8internal23config_settings_builder10GetFieldIdENS2_5FieldE

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c5b0d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b0d0.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c5c0a0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5c0a0.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies, return_value_candidate

命令の説明率　旧版 80.00% / 新版 80.00%

優先判定に残った影響 `call_argument_candidate` 1件, `return_value_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00bc3c1c",
      "incomplete_value": false,
      "site": "00bc3c20",
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
            "const:61a:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bc2c28",
      "incomplete_value": false,
      "site": "00bc2c2c",
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
            "const:54d:8"
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
    "new": {
      "definition_site": "00bc3c2c",
      "incomplete_value": true,
      "site": "00bc3c38",
      "value": [
        "LOAD",
        "8",
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
      "definition_site": "00bc2c38",
      "incomplete_value": true,
      "site": "00bc2c44",
      "value": [
        "LOAD",
        "8",
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
      "00bc3c1c",
      "PARAM",
      [
        "storage",
        "002a954d",
        null,
        "string"
      ]
    ],
    [
      "00bc3c2c",
      "DATA",
      [
        "storage",
        "011266f0",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "00bc3c1c",
      "PARAM",
      [
        "storage",
        "002a961a",
        null,
        "string"
      ]
    ],
    [
      "00bc3c2c",
      "DATA",
      [
        "storage",
        "011276b0",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 00bc2c2c ["INT_ADD", "register:40f0:8", ["const:bc2c2c:8", "const:4:8"]]
- 00bc2c2c ["CALL", null, ["callee:00c5c0a0:8"]]
+ 00bc3c20 ["INT_ADD", "register:40f0:8", ["const:bc3c20:8", "const:4:8"]]
+ 00bc3c20 ["CALL", null, ["callee:00c5c0a0:8"]]
- 00bc2c28 ["COPY", "tmp:0:8", ["const:54d:8"]]
- 00bc2c28 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 00bc2c28 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 00bc2c28 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 00bc3c1c ["COPY", "tmp:0:8", ["const:61a:8"]]
+ 00bc3c1c ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 00bc3c1c ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 00bc3c1c ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
- 00bc2c30 ["COPY", "register:4040:8", ["const:1126000:8"]]
+ 00bc3c24 ["COPY", "register:4040:8", ["const:1127000:8"]]
~~~


<a id="compare-2ec64a9a6104047953f7e69b3c2569dc"></a>

### [`00bc2c48`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bc2/00bc2c48.md) → [`00bc3c3c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bc3/00bc3c3c.md) _ZN8firebase13remote_config8internal22custom_signals_builder19CacheClassFromFilesEP7_JNIEnvP8_jobjectPKNSt6__ndk16vectorINS_8internal12Embed

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c5afe0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5afe0.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c5bfb0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5bfb0.md)

変更の種類 branch_value, call_argument_candidate, constant, operands_and_dependencies, store_condition, store_destination

命令の説明率　旧版 87.50% / 新版 87.50%

優先判定に残った影響 `call_argument_candidate` 1件, `store_destination` 1件

アドレスに依存する影響 `branch_value` 1件, `store_condition` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_destination",
    "new": {
      "definition_site": "00bc3c68",
      "incomplete_value": true,
      "site": "00bc3c68",
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
            "const:6b8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bc2c74",
      "incomplete_value": true,
      "site": "00bc2c74",
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
            "const:6f8:8"
          ]
        ]
      ]
    },
    "ordinal": 3,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "branch_value",
    "new": {
      "definition_site": "00bc3c50",
      "incomplete_value": true,
      "site": "00bc3c50",
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
      "definition_site": "00bc2c5c",
      "incomplete_value": true,
      "site": "00bc2c5c",
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
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00bc3c5c",
      "incomplete_value": false,
      "site": "00bc3c60",
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
            "const:45c:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bc2c68",
      "incomplete_value": false,
      "site": "00bc2c6c",
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
            "const:38f:8"
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
      "00bc3c4c",
      "READ",
      [
        "storage",
        "011266f8",
        null,
        "undefined8"
      ]
    ],
    [
      "00bc3c5c",
      "PARAM",
      [
        "storage",
        "002ae38f",
        null,
        "string"
      ]
    ],
    [
      "00bc3c68",
      "WRITE",
      [
        "storage",
        "011266f8",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00bc3c4c",
      "READ",
      [
        "storage",
        "011276b8",
        null,
        "undefined8"
      ]
    ],
    [
      "00bc3c5c",
      "PARAM",
      [
        "storage",
        "002ae45c",
        null,
        "string"
      ]
    ],
    [
      "00bc3c68",
      "WRITE",
      [
        "storage",
        "011276b8",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bc2c6c ["INT_ADD", "register:40f0:8", ["const:bc2c6c:8", "const:4:8"]]
- 00bc2c6c ["CALL", null, ["callee:00c5bfb0:8"]]
+ 00bc3c60 ["INT_ADD", "register:40f0:8", ["const:bc3c60:8", "const:4:8"]]
+ 00bc3c60 ["CALL", null, ["callee:00c5bfb0:8"]]
- 00bc2c74 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:6f8:8"]]
- 00bc2c74 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00bc3c68 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:6b8:8"]]
+ 00bc3c68 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00bc2c54 ["COPY", "register:4098:8", ["const:1126000:8"]]
+ 00bc3c48 ["COPY", "register:4098:8", ["const:1127000:8"]]
~~~


<a id="compare-e79fd764e749dbc31d0cfad7dc6a02df"></a>

### [`00bc2c88`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bc2/00bc2c88.md) → [`00bc3c7c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bc3/00bc3c7c.md) _ZN8firebase13remote_config8internal22custom_signals_builder19CacheClassFromFilesEP7_JNIEnvP8_jobjectPKNSt6__ndk16vectorINS_8internal12Embed

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c5afe0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5afe0.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c5bfb0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5bfb0.md)

変更の種類 branch_value, call_argument_candidate, constant, operands_and_dependencies, store_condition, store_destination

命令の説明率　旧版 87.50% / 新版 87.50%

優先判定に残った影響 `call_argument_candidate` 1件, `store_destination` 1件

アドレスに依存する影響 `branch_value` 1件, `store_condition` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_destination",
    "new": {
      "definition_site": "00bc3ca8",
      "incomplete_value": true,
      "site": "00bc3ca8",
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
            "const:6b8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bc2cb4",
      "incomplete_value": true,
      "site": "00bc2cb4",
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
            "const:6f8:8"
          ]
        ]
      ]
    },
    "ordinal": 3,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "branch_value",
    "new": {
      "definition_site": "00bc3c90",
      "incomplete_value": true,
      "site": "00bc3c90",
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
      "definition_site": "00bc2c9c",
      "incomplete_value": true,
      "site": "00bc2c9c",
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
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00bc3c98",
      "incomplete_value": false,
      "site": "00bc3ca0",
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
            "const:45c:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bc2ca4",
      "incomplete_value": false,
      "site": "00bc2cac",
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
            "const:38f:8"
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
      "00bc3c8c",
      "READ",
      [
        "storage",
        "011266f8",
        null,
        "undefined8"
      ]
    ],
    [
      "00bc3c98",
      "PARAM",
      [
        "storage",
        "002ae38f",
        null,
        "string"
      ]
    ],
    [
      "00bc3ca8",
      "WRITE",
      [
        "storage",
        "011266f8",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00bc3c8c",
      "READ",
      [
        "storage",
        "011276b8",
        null,
        "undefined8"
      ]
    ],
    [
      "00bc3c98",
      "PARAM",
      [
        "storage",
        "002ae45c",
        null,
        "string"
      ]
    ],
    [
      "00bc3ca8",
      "WRITE",
      [
        "storage",
        "011276b8",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bc2cac ["INT_ADD", "register:40f0:8", ["const:bc2cac:8", "const:4:8"]]
- 00bc2cac ["CALL", null, ["callee:00c5bfb0:8"]]
+ 00bc3ca0 ["INT_ADD", "register:40f0:8", ["const:bc3ca0:8", "const:4:8"]]
+ 00bc3ca0 ["CALL", null, ["callee:00c5bfb0:8"]]
- 00bc2cb4 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:6f8:8"]]
- 00bc2cb4 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00bc3ca8 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:6b8:8"]]
+ 00bc3ca8 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00bc2c94 ["COPY", "register:4098:8", ["const:1126000:8"]]
+ 00bc3c88 ["COPY", "register:4098:8", ["const:1127000:8"]]
~~~


<a id="compare-21207a74125d5841f3493435cbde26b6"></a>

### [`00bc2cc8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bc2/00bc2cc8.md) → [`00bc3cbc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bc3/00bc3cbc.md) _ZN8firebase13remote_config8internal22custom_signals_builder10CacheClassEP7_JNIEnvP8_jobjectNS_4util16ClassRequirementE

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c5afe0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5afe0.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c5bfb0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5bfb0.md)

変更の種類 branch_value, call_argument_candidate, constant, operands_and_dependencies, store_condition, store_destination

命令の説明率　旧版 88.24% / 新版 88.24%

優先判定に残った影響 `call_argument_candidate` 1件, `store_destination` 1件

アドレスに依存する影響 `branch_value` 1件, `store_condition` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_destination",
    "new": {
      "definition_site": "00bc3cec",
      "incomplete_value": true,
      "site": "00bc3cec",
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
            "const:6b8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bc2cf8",
      "incomplete_value": true,
      "site": "00bc2cf8",
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
            "const:6f8:8"
          ]
        ]
      ]
    },
    "ordinal": 3,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "branch_value",
    "new": {
      "definition_site": "00bc3cd0",
      "incomplete_value": true,
      "site": "00bc3cd0",
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
      "definition_site": "00bc2cdc",
      "incomplete_value": true,
      "site": "00bc2cdc",
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
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00bc3cdc",
      "incomplete_value": false,
      "site": "00bc3ce4",
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
            "const:45c:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bc2ce8",
      "incomplete_value": false,
      "site": "00bc2cf0",
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
            "const:38f:8"
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
      "00bc3ccc",
      "READ",
      [
        "storage",
        "011266f8",
        null,
        "undefined8"
      ]
    ],
    [
      "00bc3cdc",
      "PARAM",
      [
        "storage",
        "002ae38f",
        null,
        "string"
      ]
    ],
    [
      "00bc3cec",
      "WRITE",
      [
        "storage",
        "011266f8",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00bc3ccc",
      "READ",
      [
        "storage",
        "011276b8",
        null,
        "undefined8"
      ]
    ],
    [
      "00bc3cdc",
      "PARAM",
      [
        "storage",
        "002ae45c",
        null,
        "string"
      ]
    ],
    [
      "00bc3cec",
      "WRITE",
      [
        "storage",
        "011276b8",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bc2cf0 ["INT_ADD", "register:40f0:8", ["const:bc2cf0:8", "const:4:8"]]
- 00bc2cf0 ["CALL", null, ["callee:00c5bfb0:8"]]
+ 00bc3ce4 ["INT_ADD", "register:40f0:8", ["const:bc3ce4:8", "const:4:8"]]
+ 00bc3ce4 ["CALL", null, ["callee:00c5bfb0:8"]]
- 00bc2cf8 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:6f8:8"]]
- 00bc2cf8 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00bc3cec ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:6b8:8"]]
+ 00bc3cec ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00bc2cd4 ["COPY", "register:4098:8", ["const:1126000:8"]]
+ 00bc3cc8 ["COPY", "register:4098:8", ["const:1127000:8"]]
~~~


<a id="compare-c7d983625d4d9201ca66144820c4255e"></a>

### [`00bc2d0c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bc2/00bc2d0c.md) → [`00bc3d00`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bc3/00bc3d00.md) _ZN8firebase13remote_config8internal22custom_signals_builder10CacheClassEP7_JNIEnvP8_jobject

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c5afe0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5afe0.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c5bfb0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5bfb0.md)

変更の種類 branch_value, call_argument_candidate, constant, operands_and_dependencies, store_condition, store_destination

命令の説明率　旧版 88.24% / 新版 88.24%

優先判定に残った影響 `call_argument_candidate` 1件, `store_destination` 1件

アドレスに依存する影響 `branch_value` 1件, `store_condition` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_destination",
    "new": {
      "definition_site": "00bc3d30",
      "incomplete_value": true,
      "site": "00bc3d30",
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
            "const:6b8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bc2d3c",
      "incomplete_value": true,
      "site": "00bc2d3c",
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
            "const:6f8:8"
          ]
        ]
      ]
    },
    "ordinal": 3,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "branch_value",
    "new": {
      "definition_site": "00bc3d14",
      "incomplete_value": true,
      "site": "00bc3d14",
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
      "definition_site": "00bc2d20",
      "incomplete_value": true,
      "site": "00bc2d20",
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
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00bc3d1c",
      "incomplete_value": false,
      "site": "00bc3d28",
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
            "const:45c:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bc2d28",
      "incomplete_value": false,
      "site": "00bc2d34",
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
            "const:38f:8"
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
      "00bc3d10",
      "READ",
      [
        "storage",
        "011266f8",
        null,
        "undefined8"
      ]
    ],
    [
      "00bc3d1c",
      "PARAM",
      [
        "storage",
        "002ae38f",
        null,
        "string"
      ]
    ],
    [
      "00bc3d30",
      "WRITE",
      [
        "storage",
        "011266f8",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00bc3d10",
      "READ",
      [
        "storage",
        "011276b8",
        null,
        "undefined8"
      ]
    ],
    [
      "00bc3d1c",
      "PARAM",
      [
        "storage",
        "002ae45c",
        null,
        "string"
      ]
    ],
    [
      "00bc3d30",
      "WRITE",
      [
        "storage",
        "011276b8",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bc2d34 ["INT_ADD", "register:40f0:8", ["const:bc2d34:8", "const:4:8"]]
- 00bc2d34 ["CALL", null, ["callee:00c5bfb0:8"]]
+ 00bc3d28 ["INT_ADD", "register:40f0:8", ["const:bc3d28:8", "const:4:8"]]
+ 00bc3d28 ["CALL", null, ["callee:00c5bfb0:8"]]
- 00bc2d3c ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:6f8:8"]]
- 00bc2d3c ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00bc3d30 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:6b8:8"]]
+ 00bc3d30 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00bc2d18 ["COPY", "register:4098:8", ["const:1126000:8"]]
+ 00bc3d0c ["COPY", "register:4098:8", ["const:1127000:8"]]
~~~


<a id="compare-2b562103fd635425beaf984eaca35b27"></a>

### [`00bc2d5c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bc2/00bc2d5c.md) → [`00bc3d50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bc3/00bc3d50.md) _ZN8firebase13remote_config8internal22custom_signals_builder15RegisterNativesEP7_JNIEnvPK15JNINativeMethodm

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c5b030`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b030.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c5c000`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5c000.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies, store_destination

命令の説明率　旧版 92.59% / 新版 92.59%

優先判定に残った影響 `call_argument_candidate` 1件, `store_destination` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_destination",
    "new": {
      "definition_site": "00bc3da8",
      "incomplete_value": true,
      "site": "00bc3da8",
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
            "const:6c0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bc2db4",
      "incomplete_value": true,
      "site": "00bc2db4",
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
            "const:700:8"
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
      "definition_site": "00bc3d84",
      "incomplete_value": true,
      "site": "00bc3d90",
      "value": [
        "LOAD",
        "8",
        [
          [
            "leaf",
            "const:1b1:8"
          ],
          [
            "INT_ADD",
            "8",
            [
              [
                "leaf",
                "const:1127000:8"
              ],
              [
                "leaf",
                "const:6b8:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bc2d90",
      "incomplete_value": true,
      "site": "00bc2d9c",
      "value": [
        "LOAD",
        "8",
        [
          [
            "leaf",
            "const:1b1:8"
          ],
          [
            "INT_ADD",
            "8",
            [
              [
                "leaf",
                "const:1126000:8"
              ],
              [
                "leaf",
                "const:6f8:8"
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


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "00bc3d64",
      "READ",
      [
        "storage",
        "01126700",
        null,
        "undefined1"
      ]
    ],
    [
      "00bc3d84",
      "READ",
      [
        "storage",
        "011266f8",
        null,
        "undefined8"
      ]
    ],
    [
      "00bc3da8",
      "WRITE",
      [
        "storage",
        "01126700",
        null,
        "undefined1"
      ]
    ]
  ],
  "added": [
    [
      "00bc3d64",
      "READ",
      [
        "storage",
        "011276c0",
        null,
        "undefined1"
      ]
    ],
    [
      "00bc3d84",
      "READ",
      [
        "storage",
        "011276b8",
        null,
        "undefined8"
      ]
    ],
    [
      "00bc3da8",
      "WRITE",
      [
        "storage",
        "011276c0",
        null,
        "undefined1"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bc2d9c ["COPY", "register:0:8", ["register:4040:8"]]
- 00bc2d9c ["INT_ADD", "register:40f0:8", ["const:bc2d9c:8", "const:4:8"]]
- 00bc2d9c ["CALLIND", null, ["register:0:8"]]
+ 00bc3d90 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00bc3d90 ["INT_ADD", "register:40f0:8", ["const:bc3d90:8", "const:4:8"]]
+ 00bc3d90 ["CALLIND", null, ["register:0:8"]]
- 00bc2db4 ["COPY", "tmp:0:4", ["register:4000:4"]]
- 00bc2db4 ["INT_ADD", "tmp:1:8", ["register:40a8:8", "const:700:8"]]
- 00bc2db4 ["STORE", null, ["const:1b1:8", "tmp:1:8", "tmp:0:1"]]
+ 00bc3da8 ["COPY", "tmp:0:4", ["register:4000:4"]]
+ 00bc3da8 ["INT_ADD", "tmp:1:8", ["register:40a8:8", "const:6c0:8"]]
+ 00bc3da8 ["STORE", null, ["const:1b1:8", "tmp:1:8", "tmp:0:1"]]
- 00bc2d6c ["COPY", "register:40a8:8", ["const:1126000:8"]]
+ 00bc3d60 ["COPY", "register:40a8:8", ["const:1127000:8"]]
~~~


<a id="compare-cec32d3b12656f5a9076018849dd03fb"></a>

### [`00bc2dc8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bc2/00bc2dc8.md) → [`00bc3dbc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bc3/00bc3dbc.md) _ZN8firebase13remote_config8internal22custom_signals_builder12ReleaseClassEP7_JNIEnv

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c5b030`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b030.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c5c000`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5c000.md)

変更の種類 branch_value, call_argument_candidate, constant, operands_and_dependencies, store_destination

命令の説明率　旧版 89.29% / 新版 89.29%

優先判定に残った影響 `call_argument_candidate` 1件, `store_destination` 2件

アドレスに依存する影響 `branch_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_destination",
    "new": {
      "definition_site": "00bc3df8",
      "incomplete_value": true,
      "site": "00bc3df8",
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
            "const:6c0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bc2e04",
      "incomplete_value": true,
      "site": "00bc2e04",
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
            "const:700:8"
          ]
        ]
      ]
    },
    "ordinal": 5,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "store_destination",
    "new": {
      "definition_site": "00bc3e18",
      "incomplete_value": true,
      "site": "00bc3e18",
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
            "const:6b8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bc2e24",
      "incomplete_value": true,
      "site": "00bc2e24",
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
            "const:6f8:8"
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
      "definition_site": "00bc3dd4",
      "incomplete_value": true,
      "site": "00bc3dd4",
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
      "definition_site": "00bc2de0",
      "incomplete_value": true,
      "site": "00bc2de0",
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
      "00bc3dd0",
      "READ",
      [
        "storage",
        "011266f8",
        null,
        "undefined8"
      ]
    ],
    [
      "00bc3ddc",
      "READ",
      [
        "storage",
        "01126700",
        null,
        "undefined1"
      ]
    ],
    [
      "00bc3df8",
      "WRITE",
      [
        "storage",
        "01126700",
        null,
        "undefined1"
      ]
    ]
  ],
  "added": [
    [
      "00bc3dd0",
      "READ",
      [
        "storage",
        "011276b8",
        null,
        "undefined8"
      ]
    ],
    [
      "00bc3ddc",
      "READ",
      [
        "storage",
        "011276c0",
        null,
        "undefined1"
      ]
    ],
    [
      "00bc3df8",
      "WRITE",
      [
        "storage",
        "011276c0",
        null,
        "undefined1"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bc2e04 ["COPY", "tmp:0:4", ["const:0:4"]]
- 00bc2e04 ["COPY", "tmp:1:4", ["tmp:0:4"]]
- 00bc2e04 ["INT_ADD", "tmp:2:8", ["register:40a8:8", "const:700:8"]]
- 00bc2e04 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:1:1"]]
+ 00bc3df8 ["COPY", "tmp:0:4", ["const:0:4"]]
+ 00bc3df8 ["COPY", "tmp:1:4", ["tmp:0:4"]]
+ 00bc3df8 ["INT_ADD", "tmp:2:8", ["register:40a8:8", "const:6c0:8"]]
+ 00bc3df8 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:1:1"]]
- 00bc2e20 ["COPY", "register:0:8", ["register:4040:8"]]
- 00bc2e20 ["INT_ADD", "register:40f0:8", ["const:bc2e20:8", "const:4:8"]]
- 00bc2e20 ["CALLIND", null, ["register:0:8"]]
+ 00bc3e14 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00bc3e14 ["INT_ADD", "register:40f0:8", ["const:bc3e14:8", "const:4:8"]]
+ 00bc3e14 ["CALLIND", null, ["register:0:8"]]
- 00bc2e24 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:6f8:8"]]
- 00bc2e24 ["COPY", "tmp:1:8", ["const:0:8"]]
- 00bc2e24 ["STORE", null, ["const:1b1:8", "tmp:0:8", "tmp:1:8"]]
+ 00bc3e18 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:6b8:8"]]
+ 00bc3e18 ["COPY", "tmp:1:8", ["const:0:8"]]
+ 00bc3e18 ["STORE", null, ["const:1b1:8", "tmp:0:8", "tmp:1:8"]]
~~~


<a id="compare-cce5f88b0713702e6bb6de9d7108923f"></a>

### [`00bc2e38`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bc2/00bc2e38.md) → [`00bc3e2c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bc3/00bc3e2c.md) _ZN8firebase13remote_config8internal22custom_signals_builder14CacheMethodIdsEP7_JNIEnvP8_jobject

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c5afe0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5afe0.md) [`00c5b000`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b000.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c5bfb0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5bfb0.md) [`00c5bfd0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5bfd0.md)

変更の種類 branch_value, call_argument_candidate, constant, operands_and_dependencies, store_condition, store_destination

命令の説明率　旧版 75.00% / 新版 75.00%

優先判定に残った影響 `branch_value` 1件, `call_argument_candidate` 1件, `store_condition` 1件, `store_destination` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_destination",
    "new": {
      "definition_site": "00bc3e6c",
      "incomplete_value": true,
      "site": "00bc3e6c",
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
            "const:6b8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bc2e78",
      "incomplete_value": true,
      "site": "00bc2e78",
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
            "const:6f8:8"
          ]
        ]
      ]
    },
    "ordinal": 4,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "branch_value",
    "new": {
      "definition_site": "00bc3e48",
      "incomplete_value": true,
      "site": "00bc3e48",
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
      "definition_site": "00bc2e54",
      "incomplete_value": true,
      "site": "00bc2e54",
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
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00bc3e50",
      "incomplete_value": false,
      "site": "00bc3e64",
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
            "const:45c:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bc2e5c",
      "incomplete_value": false,
      "site": "00bc2e70",
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
            "const:38f:8"
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
      "00bc3e40",
      "READ",
      [
        "storage",
        "011266f8",
        null,
        "undefined8"
      ]
    ],
    [
      "00bc3e50",
      "PARAM",
      [
        "storage",
        "002ae38f",
        null,
        "string"
      ]
    ],
    [
      "00bc3e6c",
      "WRITE",
      [
        "storage",
        "011266f8",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00bc3e40",
      "READ",
      [
        "storage",
        "011276b8",
        null,
        "undefined8"
      ]
    ],
    [
      "00bc3e50",
      "PARAM",
      [
        "storage",
        "002ae45c",
        null,
        "string"
      ]
    ],
    [
      "00bc3e6c",
      "WRITE",
      [
        "storage",
        "011276b8",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bc2e70 ["INT_ADD", "register:40f0:8", ["const:bc2e70:8", "const:4:8"]]
- 00bc2e70 ["CALL", null, ["callee:00c5bfb0:8"]]
+ 00bc3e64 ["INT_ADD", "register:40f0:8", ["const:bc3e64:8", "const:4:8"]]
+ 00bc3e64 ["CALL", null, ["callee:00c5bfb0:8"]]
- 00bc2e78 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:6f8:8"]]
- 00bc2e78 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00bc3e6c ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:6b8:8"]]
+ 00bc3e6c ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00bc2e44 ["COPY", "register:40a0:8", ["const:1126000:8"]]
+ 00bc3e38 ["COPY", "register:40a0:8", ["const:1127000:8"]]
~~~


<a id="compare-00cf2023f21fbf5eacc44d6a7282c1b0"></a>

### [`00bc2ea8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bc2/00bc2ea8.md) → [`00bc3e9c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bc3/00bc3e9c.md) _ZN8firebase13remote_config8internal22custom_signals_builder11GetMethodIdENS2_6MethodE

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c5b0d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b0d0.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c5c0a0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5c0a0.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies, return_value_candidate

命令の説明率　旧版 80.00% / 新版 80.00%

優先判定に残った影響 `call_argument_candidate` 1件, `return_value_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00bc3eb8",
      "incomplete_value": false,
      "site": "00bc3ebc",
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
            "const:463:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bc2ec4",
      "incomplete_value": false,
      "site": "00bc2ec8",
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
            "const:30b:8"
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
    "new": {
      "definition_site": "00bc3ec8",
      "incomplete_value": true,
      "site": "00bc3ed4",
      "value": [
        "LOAD",
        "8",
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
      "definition_site": "00bc2ed4",
      "incomplete_value": true,
      "site": "00bc2ee0",
      "value": [
        "LOAD",
        "8",
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
      "00bc3eb8",
      "PARAM",
      [
        "storage",
        "002a830b",
        null,
        "string"
      ]
    ],
    [
      "00bc3ec8",
      "DATA",
      [
        "storage",
        "01126708",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00bc3eb8",
      "PARAM",
      [
        "storage",
        "002a8463",
        null,
        "string"
      ]
    ],
    [
      "00bc3ec8",
      "DATA",
      [
        "storage",
        "011276c8",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bc2ec8 ["INT_ADD", "register:40f0:8", ["const:bc2ec8:8", "const:4:8"]]
- 00bc2ec8 ["CALL", null, ["callee:00c5c0a0:8"]]
+ 00bc3ebc ["INT_ADD", "register:40f0:8", ["const:bc3ebc:8", "const:4:8"]]
+ 00bc3ebc ["CALL", null, ["callee:00c5c0a0:8"]]
- 00bc2ec4 ["COPY", "tmp:0:8", ["const:30b:8"]]
- 00bc2ec4 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 00bc2ec4 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 00bc2ec4 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 00bc3eb8 ["COPY", "tmp:0:8", ["const:463:8"]]
+ 00bc3eb8 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 00bc3eb8 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 00bc3eb8 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
- 00bc2ecc ["COPY", "register:4040:8", ["const:1126000:8"]]
+ 00bc3ec0 ["COPY", "register:4040:8", ["const:1127000:8"]]
~~~


<a id="compare-1c62fcb7dc2d1c13aa1e42c27936f3c0"></a>

### [`00bc2ee4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bc2/00bc2ee4.md) → [`00bc3ed8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bc3/00bc3ed8.md) _ZN8firebase13remote_config8internal22custom_signals_builder13CacheFieldIdsEP7_JNIEnvP8_jobject

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c5afc0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5afc0.md) [`00c5afe0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5afe0.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c5bf90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5bf90.md) [`00c5bfb0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5bfb0.md)

変更の種類 branch_value, call_argument_candidate, constant, operands_and_dependencies, store_condition, store_destination

命令の説明率　旧版 75.00% / 新版 75.00%

優先判定に残った影響 `branch_value` 1件, `call_argument_candidate` 1件, `store_condition` 1件, `store_destination` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_destination",
    "new": {
      "definition_site": "00bc3f18",
      "incomplete_value": true,
      "site": "00bc3f18",
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
            "const:6b8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bc2f24",
      "incomplete_value": true,
      "site": "00bc2f24",
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
            "const:6f8:8"
          ]
        ]
      ]
    },
    "ordinal": 4,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "branch_value",
    "new": {
      "definition_site": "00bc3ef4",
      "incomplete_value": true,
      "site": "00bc3ef4",
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
      "definition_site": "00bc2f00",
      "incomplete_value": true,
      "site": "00bc2f00",
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
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00bc3efc",
      "incomplete_value": false,
      "site": "00bc3f10",
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
            "const:45c:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bc2f08",
      "incomplete_value": false,
      "site": "00bc2f1c",
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
            "const:38f:8"
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
      "00bc3eec",
      "READ",
      [
        "storage",
        "011266f8",
        null,
        "undefined8"
      ]
    ],
    [
      "00bc3efc",
      "PARAM",
      [
        "storage",
        "002ae38f",
        null,
        "string"
      ]
    ],
    [
      "00bc3f18",
      "WRITE",
      [
        "storage",
        "011266f8",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00bc3eec",
      "READ",
      [
        "storage",
        "011276b8",
        null,
        "undefined8"
      ]
    ],
    [
      "00bc3efc",
      "PARAM",
      [
        "storage",
        "002ae45c",
        null,
        "string"
      ]
    ],
    [
      "00bc3f18",
      "WRITE",
      [
        "storage",
        "011276b8",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bc2f1c ["INT_ADD", "register:40f0:8", ["const:bc2f1c:8", "const:4:8"]]
- 00bc2f1c ["CALL", null, ["callee:00c5bfb0:8"]]
+ 00bc3f10 ["INT_ADD", "register:40f0:8", ["const:bc3f10:8", "const:4:8"]]
+ 00bc3f10 ["CALL", null, ["callee:00c5bfb0:8"]]
- 00bc2f24 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:6f8:8"]]
- 00bc2f24 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00bc3f18 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:6b8:8"]]
+ 00bc3f18 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00bc2ef0 ["COPY", "register:40a0:8", ["const:1126000:8"]]
+ 00bc3ee4 ["COPY", "register:40a0:8", ["const:1127000:8"]]
~~~


<a id="compare-c629c135264b368354081688119d1c26"></a>

### [`00bc2f54`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bc2/00bc2f54.md) → [`00bc3f48`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bc3/00bc3f48.md) _ZN8firebase13remote_config8internal22custom_signals_builder10GetFieldIdENS2_5FieldE

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c5b0d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b0d0.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c5c0a0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5c0a0.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 80.00% / 新版 80.00%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00bc3f64",
      "incomplete_value": false,
      "site": "00bc3f68",
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
            "const:61a:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bc2f70",
      "incomplete_value": false,
      "site": "00bc2f74",
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
            "const:54d:8"
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
      "00bc3f64",
      "PARAM",
      [
        "storage",
        "002a954d",
        null,
        "string"
      ]
    ],
    [
      "00bc3f74",
      "DATA",
      [
        "storage",
        "01126730",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "00bc3f64",
      "PARAM",
      [
        "storage",
        "002a961a",
        null,
        "string"
      ]
    ],
    [
      "00bc3f74",
      "DATA",
      [
        "storage",
        "011276f0",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 00bc2f74 ["INT_ADD", "register:40f0:8", ["const:bc2f74:8", "const:4:8"]]
- 00bc2f74 ["CALL", null, ["callee:00c5c0a0:8"]]
+ 00bc3f68 ["INT_ADD", "register:40f0:8", ["const:bc3f68:8", "const:4:8"]]
+ 00bc3f68 ["CALL", null, ["callee:00c5c0a0:8"]]
- 00bc2f70 ["COPY", "tmp:0:8", ["const:54d:8"]]
- 00bc2f70 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 00bc2f70 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 00bc2f70 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 00bc3f64 ["COPY", "tmp:0:8", ["const:61a:8"]]
+ 00bc3f64 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 00bc3f64 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 00bc3f64 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
- 00bc2f78 ["COPY", "register:4040:8", ["const:1126000:8"]]
+ 00bc3f6c ["COPY", "register:4040:8", ["const:1127000:8"]]
~~~


<a id="compare-5449f528f71715631192005a1d422884"></a>

### [`00bc2f90`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bc2/00bc2f90.md) → [`00bc3f84`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bc3/00bc3f84.md) _ZN8firebase13remote_config8internal19throttled_exception19CacheClassFromFilesEP7_JNIEnvP8_jobjectPKNSt6__ndk16vectorINS_8internal12Embedded

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c5afe0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5afe0.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c5bfb0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5bfb0.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies, store_destination

命令の説明率　旧版 81.25% / 新版 81.25%

優先判定に残った影響 `call_argument_candidate` 1件, `store_destination` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_destination",
    "new": {
      "definition_site": "00bc3fb0",
      "incomplete_value": true,
      "site": "00bc3fb0",
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
            "const:6f8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bc2fbc",
      "incomplete_value": true,
      "site": "00bc2fbc",
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
            "const:738:8"
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
      "definition_site": "00bc3fa4",
      "incomplete_value": true,
      "site": "00bc3fa8",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:4018:8"
          ],
          [
            "leaf",
            "const:cb2:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bc2fb0",
      "incomplete_value": true,
      "site": "00bc2fb4",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:4018:8"
          ],
          [
            "leaf",
            "const:bd4:8"
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
      "00bc3f94",
      "READ",
      [
        "storage",
        "01126738",
        null,
        "undefined8"
      ]
    ],
    [
      "00bc3fa4",
      "PARAM",
      [
        "storage",
        "002b9bd4",
        null,
        "string"
      ]
    ],
    [
      "00bc3fb0",
      "WRITE",
      [
        "storage",
        "01126738",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00bc3f94",
      "READ",
      [
        "storage",
        "011276f8",
        null,
        "undefined8"
      ]
    ],
    [
      "00bc3fa4",
      "PARAM",
      [
        "storage",
        "002b9cb2",
        null,
        "string"
      ]
    ],
    [
      "00bc3fb0",
      "WRITE",
      [
        "storage",
        "011276f8",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bc2fb4 ["INT_ADD", "register:40f0:8", ["const:bc2fb4:8", "const:4:8"]]
- 00bc2fb4 ["CALL", null, ["callee:00c5bfb0:8"]]
+ 00bc3fa8 ["INT_ADD", "register:40f0:8", ["const:bc3fa8:8", "const:4:8"]]
+ 00bc3fa8 ["CALL", null, ["callee:00c5bfb0:8"]]
- 00bc2fbc ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:738:8"]]
- 00bc2fbc ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00bc3fb0 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:6f8:8"]]
+ 00bc3fb0 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00bc2f9c ["COPY", "register:4098:8", ["const:1126000:8"]]
+ 00bc3f90 ["COPY", "register:4098:8", ["const:1127000:8"]]
~~~


<a id="compare-8e7ddfe64325b1858239a9c409d1b34e"></a>

### [`00bc2fd0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bc2/00bc2fd0.md) → [`00bc3fc4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bc3/00bc3fc4.md) _ZN8firebase13remote_config8internal19throttled_exception19CacheClassFromFilesEP7_JNIEnvP8_jobjectPKNSt6__ndk16vectorINS_8internal12Embedded

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c5afe0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5afe0.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c5bfb0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5bfb0.md)

変更の種類 branch_value, call_argument_candidate, constant, operands_and_dependencies, store_condition, store_destination

命令の説明率　旧版 87.50% / 新版 87.50%

優先判定に残った影響 `call_argument_candidate` 1件, `store_destination` 1件

アドレスに依存する影響 `branch_value` 1件, `store_condition` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_destination",
    "new": {
      "definition_site": "00bc3ff0",
      "incomplete_value": true,
      "site": "00bc3ff0",
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
            "const:6f8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bc2ffc",
      "incomplete_value": true,
      "site": "00bc2ffc",
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
            "const:738:8"
          ]
        ]
      ]
    },
    "ordinal": 3,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "branch_value",
    "new": {
      "definition_site": "00bc3fd8",
      "incomplete_value": true,
      "site": "00bc3fd8",
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
      "definition_site": "00bc2fe4",
      "incomplete_value": true,
      "site": "00bc2fe4",
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
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00bc3fe0",
      "incomplete_value": false,
      "site": "00bc3fe8",
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
            "const:cb2:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bc2fec",
      "incomplete_value": false,
      "site": "00bc2ff4",
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
            "const:bd4:8"
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
      "00bc3fd4",
      "READ",
      [
        "storage",
        "01126738",
        null,
        "undefined8"
      ]
    ],
    [
      "00bc3fe0",
      "PARAM",
      [
        "storage",
        "002b9bd4",
        null,
        "string"
      ]
    ],
    [
      "00bc3ff0",
      "WRITE",
      [
        "storage",
        "01126738",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00bc3fd4",
      "READ",
      [
        "storage",
        "011276f8",
        null,
        "undefined8"
      ]
    ],
    [
      "00bc3fe0",
      "PARAM",
      [
        "storage",
        "002b9cb2",
        null,
        "string"
      ]
    ],
    [
      "00bc3ff0",
      "WRITE",
      [
        "storage",
        "011276f8",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bc2ff4 ["INT_ADD", "register:40f0:8", ["const:bc2ff4:8", "const:4:8"]]
- 00bc2ff4 ["CALL", null, ["callee:00c5bfb0:8"]]
+ 00bc3fe8 ["INT_ADD", "register:40f0:8", ["const:bc3fe8:8", "const:4:8"]]
+ 00bc3fe8 ["CALL", null, ["callee:00c5bfb0:8"]]
- 00bc2ffc ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:738:8"]]
- 00bc2ffc ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00bc3ff0 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:6f8:8"]]
+ 00bc3ff0 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00bc2fdc ["COPY", "register:4098:8", ["const:1126000:8"]]
+ 00bc3fd0 ["COPY", "register:4098:8", ["const:1127000:8"]]
~~~


<a id="compare-8780c29cba8e6d19380bf7c7431eb46d"></a>

### [`00bc3010`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bc3/00bc3010.md) → [`00bc4004`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bc4/00bc4004.md) _ZN8firebase13remote_config8internal19throttled_exception10CacheClassEP7_JNIEnvP8_jobjectNS_4util16ClassRequirementE

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c5afe0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5afe0.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c5bfb0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5bfb0.md)

変更の種類 branch_value, call_argument_candidate, constant, operands_and_dependencies, store_condition, store_destination

命令の説明率　旧版 88.24% / 新版 88.24%

優先判定に残った影響 `call_argument_candidate` 1件, `store_destination` 1件

アドレスに依存する影響 `branch_value` 1件, `store_condition` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_destination",
    "new": {
      "definition_site": "00bc4034",
      "incomplete_value": true,
      "site": "00bc4034",
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
            "const:6f8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bc3040",
      "incomplete_value": true,
      "site": "00bc3040",
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
            "const:738:8"
          ]
        ]
      ]
    },
    "ordinal": 3,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "branch_value",
    "new": {
      "definition_site": "00bc4018",
      "incomplete_value": true,
      "site": "00bc4018",
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
      "definition_site": "00bc3024",
      "incomplete_value": true,
      "site": "00bc3024",
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
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00bc4024",
      "incomplete_value": false,
      "site": "00bc402c",
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
            "const:cb2:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bc3030",
      "incomplete_value": false,
      "site": "00bc3038",
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
            "const:bd4:8"
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
      "00bc4014",
      "READ",
      [
        "storage",
        "01126738",
        null,
        "undefined8"
      ]
    ],
    [
      "00bc4024",
      "PARAM",
      [
        "storage",
        "002b9bd4",
        null,
        "string"
      ]
    ],
    [
      "00bc4034",
      "WRITE",
      [
        "storage",
        "01126738",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00bc4014",
      "READ",
      [
        "storage",
        "011276f8",
        null,
        "undefined8"
      ]
    ],
    [
      "00bc4024",
      "PARAM",
      [
        "storage",
        "002b9cb2",
        null,
        "string"
      ]
    ],
    [
      "00bc4034",
      "WRITE",
      [
        "storage",
        "011276f8",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bc3038 ["INT_ADD", "register:40f0:8", ["const:bc3038:8", "const:4:8"]]
- 00bc3038 ["CALL", null, ["callee:00c5bfb0:8"]]
+ 00bc402c ["INT_ADD", "register:40f0:8", ["const:bc402c:8", "const:4:8"]]
+ 00bc402c ["CALL", null, ["callee:00c5bfb0:8"]]
- 00bc3040 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:738:8"]]
- 00bc3040 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00bc4034 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:6f8:8"]]
+ 00bc4034 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00bc301c ["COPY", "register:4098:8", ["const:1126000:8"]]
+ 00bc4010 ["COPY", "register:4098:8", ["const:1127000:8"]]
~~~


<a id="compare-d8f20a3d6c141a50606fb1e1a3e3bb15"></a>

### [`00bc3054`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bc3/00bc3054.md) → [`00bc4048`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bc4/00bc4048.md) _ZN8firebase13remote_config8internal19throttled_exception10CacheClassEP7_JNIEnvP8_jobject

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c5afe0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5afe0.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c5bfb0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5bfb0.md)

変更の種類 branch_value, call_argument_candidate, constant, operands_and_dependencies, store_condition, store_destination

命令の説明率　旧版 88.24% / 新版 88.24%

優先判定に残った影響 `call_argument_candidate` 1件, `store_destination` 1件

アドレスに依存する影響 `branch_value` 1件, `store_condition` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_destination",
    "new": {
      "definition_site": "00bc4078",
      "incomplete_value": true,
      "site": "00bc4078",
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
            "const:6f8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bc3084",
      "incomplete_value": true,
      "site": "00bc3084",
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
            "const:738:8"
          ]
        ]
      ]
    },
    "ordinal": 3,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "branch_value",
    "new": {
      "definition_site": "00bc405c",
      "incomplete_value": true,
      "site": "00bc405c",
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
      "definition_site": "00bc3068",
      "incomplete_value": true,
      "site": "00bc3068",
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
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00bc4064",
      "incomplete_value": false,
      "site": "00bc4070",
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
            "const:cb2:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bc3070",
      "incomplete_value": false,
      "site": "00bc307c",
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
            "const:bd4:8"
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
      "00bc4058",
      "READ",
      [
        "storage",
        "01126738",
        null,
        "undefined8"
      ]
    ],
    [
      "00bc4064",
      "PARAM",
      [
        "storage",
        "002b9bd4",
        null,
        "string"
      ]
    ],
    [
      "00bc4078",
      "WRITE",
      [
        "storage",
        "01126738",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00bc4058",
      "READ",
      [
        "storage",
        "011276f8",
        null,
        "undefined8"
      ]
    ],
    [
      "00bc4064",
      "PARAM",
      [
        "storage",
        "002b9cb2",
        null,
        "string"
      ]
    ],
    [
      "00bc4078",
      "WRITE",
      [
        "storage",
        "011276f8",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bc307c ["INT_ADD", "register:40f0:8", ["const:bc307c:8", "const:4:8"]]
- 00bc307c ["CALL", null, ["callee:00c5bfb0:8"]]
+ 00bc4070 ["INT_ADD", "register:40f0:8", ["const:bc4070:8", "const:4:8"]]
+ 00bc4070 ["CALL", null, ["callee:00c5bfb0:8"]]
- 00bc3084 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:738:8"]]
- 00bc3084 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00bc4078 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:6f8:8"]]
+ 00bc4078 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00bc3060 ["COPY", "register:4098:8", ["const:1126000:8"]]
+ 00bc4054 ["COPY", "register:4098:8", ["const:1127000:8"]]
~~~


<a id="compare-893b0477143bcf74945ff4b90e0ddc11"></a>

### [`00bc30a4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bc3/00bc30a4.md) → [`00bc4098`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bc4/00bc4098.md) _ZN8firebase13remote_config8internal19throttled_exception15RegisterNativesEP7_JNIEnvPK15JNINativeMethodm

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c5b030`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b030.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c5c000`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5c000.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies, store_destination

命令の説明率　旧版 92.59% / 新版 92.59%

優先判定に残った影響 `call_argument_candidate` 1件, `store_destination` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_destination",
    "new": {
      "definition_site": "00bc40f0",
      "incomplete_value": true,
      "site": "00bc40f0",
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
            "const:700:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bc30fc",
      "incomplete_value": true,
      "site": "00bc30fc",
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
            "const:740:8"
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
      "definition_site": "00bc40cc",
      "incomplete_value": true,
      "site": "00bc40d8",
      "value": [
        "LOAD",
        "8",
        [
          [
            "leaf",
            "const:1b1:8"
          ],
          [
            "INT_ADD",
            "8",
            [
              [
                "leaf",
                "const:1127000:8"
              ],
              [
                "leaf",
                "const:6f8:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bc30d8",
      "incomplete_value": true,
      "site": "00bc30e4",
      "value": [
        "LOAD",
        "8",
        [
          [
            "leaf",
            "const:1b1:8"
          ],
          [
            "INT_ADD",
            "8",
            [
              [
                "leaf",
                "const:1126000:8"
              ],
              [
                "leaf",
                "const:738:8"
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


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "00bc40ac",
      "READ",
      [
        "storage",
        "01126740",
        null,
        "undefined1"
      ]
    ],
    [
      "00bc40cc",
      "READ",
      [
        "storage",
        "01126738",
        null,
        "undefined8"
      ]
    ],
    [
      "00bc40f0",
      "WRITE",
      [
        "storage",
        "01126740",
        null,
        "undefined1"
      ]
    ]
  ],
  "added": [
    [
      "00bc40ac",
      "READ",
      [
        "storage",
        "01127700",
        null,
        "undefined1"
      ]
    ],
    [
      "00bc40cc",
      "READ",
      [
        "storage",
        "011276f8",
        null,
        "undefined8"
      ]
    ],
    [
      "00bc40f0",
      "WRITE",
      [
        "storage",
        "01127700",
        null,
        "undefined1"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bc30e4 ["COPY", "register:0:8", ["register:4040:8"]]
- 00bc30e4 ["INT_ADD", "register:40f0:8", ["const:bc30e4:8", "const:4:8"]]
- 00bc30e4 ["CALLIND", null, ["register:0:8"]]
+ 00bc40d8 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00bc40d8 ["INT_ADD", "register:40f0:8", ["const:bc40d8:8", "const:4:8"]]
+ 00bc40d8 ["CALLIND", null, ["register:0:8"]]
- 00bc30fc ["COPY", "tmp:0:4", ["register:4000:4"]]
- 00bc30fc ["INT_ADD", "tmp:1:8", ["register:40a8:8", "const:740:8"]]
- 00bc30fc ["STORE", null, ["const:1b1:8", "tmp:1:8", "tmp:0:1"]]
+ 00bc40f0 ["COPY", "tmp:0:4", ["register:4000:4"]]
+ 00bc40f0 ["INT_ADD", "tmp:1:8", ["register:40a8:8", "const:700:8"]]
+ 00bc40f0 ["STORE", null, ["const:1b1:8", "tmp:1:8", "tmp:0:1"]]
- 00bc30b4 ["COPY", "register:40a8:8", ["const:1126000:8"]]
+ 00bc40a8 ["COPY", "register:40a8:8", ["const:1127000:8"]]
~~~


<a id="compare-23c1611770514f01d4a723953701c0ca"></a>

### [`00bc3110`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bc3/00bc3110.md) → [`00bc4104`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bc4/00bc4104.md) _ZN8firebase13remote_config8internal19throttled_exception12ReleaseClassEP7_JNIEnv

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c5b030`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b030.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c5c000`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5c000.md)

変更の種類 branch_value, call_argument_candidate, constant, operands_and_dependencies, store_destination

命令の説明率　旧版 89.29% / 新版 89.29%

優先判定に残った影響 `call_argument_candidate` 1件, `store_destination` 2件

アドレスに依存する影響 `branch_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_destination",
    "new": {
      "definition_site": "00bc4140",
      "incomplete_value": true,
      "site": "00bc4140",
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
            "const:700:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bc314c",
      "incomplete_value": true,
      "site": "00bc314c",
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
            "const:740:8"
          ]
        ]
      ]
    },
    "ordinal": 5,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "store_destination",
    "new": {
      "definition_site": "00bc4160",
      "incomplete_value": true,
      "site": "00bc4160",
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
            "const:6f8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bc316c",
      "incomplete_value": true,
      "site": "00bc316c",
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
            "const:738:8"
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
      "definition_site": "00bc411c",
      "incomplete_value": true,
      "site": "00bc411c",
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
      "definition_site": "00bc3128",
      "incomplete_value": true,
      "site": "00bc3128",
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
      "00bc4118",
      "READ",
      [
        "storage",
        "01126738",
        null,
        "undefined8"
      ]
    ],
    [
      "00bc4124",
      "READ",
      [
        "storage",
        "01126740",
        null,
        "undefined1"
      ]
    ],
    [
      "00bc4140",
      "WRITE",
      [
        "storage",
        "01126740",
        null,
        "undefined1"
      ]
    ]
  ],
  "added": [
    [
      "00bc4118",
      "READ",
      [
        "storage",
        "011276f8",
        null,
        "undefined8"
      ]
    ],
    [
      "00bc4124",
      "READ",
      [
        "storage",
        "01127700",
        null,
        "undefined1"
      ]
    ],
    [
      "00bc4140",
      "WRITE",
      [
        "storage",
        "01127700",
        null,
        "undefined1"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bc314c ["COPY", "tmp:0:4", ["const:0:4"]]
- 00bc314c ["COPY", "tmp:1:4", ["tmp:0:4"]]
- 00bc314c ["INT_ADD", "tmp:2:8", ["register:40a8:8", "const:740:8"]]
- 00bc314c ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:1:1"]]
+ 00bc4140 ["COPY", "tmp:0:4", ["const:0:4"]]
+ 00bc4140 ["COPY", "tmp:1:4", ["tmp:0:4"]]
+ 00bc4140 ["INT_ADD", "tmp:2:8", ["register:40a8:8", "const:700:8"]]
+ 00bc4140 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:1:1"]]
- 00bc3168 ["COPY", "register:0:8", ["register:4040:8"]]
- 00bc3168 ["INT_ADD", "register:40f0:8", ["const:bc3168:8", "const:4:8"]]
- 00bc3168 ["CALLIND", null, ["register:0:8"]]
+ 00bc415c ["COPY", "register:0:8", ["register:4040:8"]]
+ 00bc415c ["INT_ADD", "register:40f0:8", ["const:bc415c:8", "const:4:8"]]
+ 00bc415c ["CALLIND", null, ["register:0:8"]]
- 00bc316c ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:738:8"]]
- 00bc316c ["COPY", "tmp:1:8", ["const:0:8"]]
- 00bc316c ["STORE", null, ["const:1b1:8", "tmp:0:8", "tmp:1:8"]]
+ 00bc4160 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:6f8:8"]]
+ 00bc4160 ["COPY", "tmp:1:8", ["const:0:8"]]
+ 00bc4160 ["STORE", null, ["const:1b1:8", "tmp:0:8", "tmp:1:8"]]
~~~


<a id="compare-83ff424c18517ffc57ebb2c342cf15aa"></a>

### [`00bc3180`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bc3/00bc3180.md) → [`00bc4174`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bc4/00bc4174.md) _ZN8firebase13remote_config8internal19throttled_exception14CacheMethodIdsEP7_JNIEnvP8_jobject

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c5afe0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5afe0.md) [`00c5b000`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b000.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c5bfb0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5bfb0.md) [`00c5bfd0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5bfd0.md)

変更の種類 branch_value, call_argument_candidate, constant, operands_and_dependencies, store_condition, store_destination

命令の説明率　旧版 75.00% / 新版 75.00%

優先判定に残った影響 `branch_value` 1件, `call_argument_candidate` 1件, `store_condition` 1件, `store_destination` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_destination",
    "new": {
      "definition_site": "00bc41b4",
      "incomplete_value": true,
      "site": "00bc41b4",
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
            "const:6f8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bc31c0",
      "incomplete_value": true,
      "site": "00bc31c0",
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
            "const:738:8"
          ]
        ]
      ]
    },
    "ordinal": 4,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "branch_value",
    "new": {
      "definition_site": "00bc4190",
      "incomplete_value": true,
      "site": "00bc4190",
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
      "definition_site": "00bc319c",
      "incomplete_value": true,
      "site": "00bc319c",
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
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00bc4198",
      "incomplete_value": false,
      "site": "00bc41ac",
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
            "const:cb2:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bc31a4",
      "incomplete_value": false,
      "site": "00bc31b8",
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
            "const:bd4:8"
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
      "00bc4188",
      "READ",
      [
        "storage",
        "01126738",
        null,
        "undefined8"
      ]
    ],
    [
      "00bc4198",
      "PARAM",
      [
        "storage",
        "002b9bd4",
        null,
        "string"
      ]
    ],
    [
      "00bc41b4",
      "WRITE",
      [
        "storage",
        "01126738",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00bc4188",
      "READ",
      [
        "storage",
        "011276f8",
        null,
        "undefined8"
      ]
    ],
    [
      "00bc4198",
      "PARAM",
      [
        "storage",
        "002b9cb2",
        null,
        "string"
      ]
    ],
    [
      "00bc41b4",
      "WRITE",
      [
        "storage",
        "011276f8",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bc31b8 ["INT_ADD", "register:40f0:8", ["const:bc31b8:8", "const:4:8"]]
- 00bc31b8 ["CALL", null, ["callee:00c5bfb0:8"]]
+ 00bc41ac ["INT_ADD", "register:40f0:8", ["const:bc41ac:8", "const:4:8"]]
+ 00bc41ac ["CALL", null, ["callee:00c5bfb0:8"]]
- 00bc31c0 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:738:8"]]
- 00bc31c0 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00bc41b4 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:6f8:8"]]
+ 00bc41b4 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00bc318c ["COPY", "register:40a0:8", ["const:1126000:8"]]
+ 00bc4180 ["COPY", "register:40a0:8", ["const:1127000:8"]]
~~~


<a id="compare-d98282bbbfe19f4d257e21da0a48defc"></a>

### [`00bc31f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bc3/00bc31f0.md) → [`00bc41e4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bc4/00bc41e4.md) _ZN8firebase13remote_config8internal19throttled_exception11GetMethodIdENS2_6MethodE

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c5b0d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b0d0.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c5c0a0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5c0a0.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies, return_value_candidate

命令の説明率　旧版 80.00% / 新版 80.00%

優先判定に残った影響 `call_argument_candidate` 1件, `return_value_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00bc4200",
      "incomplete_value": false,
      "site": "00bc4204",
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
            "const:463:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bc320c",
      "incomplete_value": false,
      "site": "00bc3210",
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
            "const:30b:8"
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
    "new": {
      "definition_site": "00bc4210",
      "incomplete_value": true,
      "site": "00bc421c",
      "value": [
        "LOAD",
        "8",
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
      "definition_site": "00bc321c",
      "incomplete_value": true,
      "site": "00bc3228",
      "value": [
        "LOAD",
        "8",
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
      "00bc4200",
      "PARAM",
      [
        "storage",
        "002a830b",
        null,
        "string"
      ]
    ],
    [
      "00bc4210",
      "DATA",
      [
        "storage",
        "01126748",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00bc4200",
      "PARAM",
      [
        "storage",
        "002a8463",
        null,
        "string"
      ]
    ],
    [
      "00bc4210",
      "DATA",
      [
        "storage",
        "01127708",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bc3210 ["INT_ADD", "register:40f0:8", ["const:bc3210:8", "const:4:8"]]
- 00bc3210 ["CALL", null, ["callee:00c5c0a0:8"]]
+ 00bc4204 ["INT_ADD", "register:40f0:8", ["const:bc4204:8", "const:4:8"]]
+ 00bc4204 ["CALL", null, ["callee:00c5c0a0:8"]]
- 00bc320c ["COPY", "tmp:0:8", ["const:30b:8"]]
- 00bc320c ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 00bc320c ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 00bc320c ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 00bc4200 ["COPY", "tmp:0:8", ["const:463:8"]]
+ 00bc4200 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 00bc4200 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 00bc4200 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
- 00bc3214 ["COPY", "register:4040:8", ["const:1126000:8"]]
+ 00bc4208 ["COPY", "register:4040:8", ["const:1127000:8"]]
~~~


<a id="compare-e4c20748205c8598112df542f450625f"></a>

### [`00bc322c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bc3/00bc322c.md) → [`00bc4220`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bc4/00bc4220.md) _ZN8firebase13remote_config8internal19throttled_exception13CacheFieldIdsEP7_JNIEnvP8_jobject

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c5afc0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5afc0.md) [`00c5afe0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5afe0.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c5bf90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5bf90.md) [`00c5bfb0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5bfb0.md)

変更の種類 branch_value, call_argument_candidate, constant, operands_and_dependencies, store_condition, store_destination

命令の説明率　旧版 75.00% / 新版 75.00%

優先判定に残った影響 `branch_value` 1件, `call_argument_candidate` 1件, `store_condition` 1件, `store_destination` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_destination",
    "new": {
      "definition_site": "00bc4260",
      "incomplete_value": true,
      "site": "00bc4260",
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
            "const:6f8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bc326c",
      "incomplete_value": true,
      "site": "00bc326c",
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
            "const:738:8"
          ]
        ]
      ]
    },
    "ordinal": 4,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "branch_value",
    "new": {
      "definition_site": "00bc423c",
      "incomplete_value": true,
      "site": "00bc423c",
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
      "definition_site": "00bc3248",
      "incomplete_value": true,
      "site": "00bc3248",
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
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00bc4244",
      "incomplete_value": false,
      "site": "00bc4258",
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
            "const:cb2:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bc3250",
      "incomplete_value": false,
      "site": "00bc3264",
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
            "const:bd4:8"
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
      "00bc4234",
      "READ",
      [
        "storage",
        "01126738",
        null,
        "undefined8"
      ]
    ],
    [
      "00bc4244",
      "PARAM",
      [
        "storage",
        "002b9bd4",
        null,
        "string"
      ]
    ],
    [
      "00bc4260",
      "WRITE",
      [
        "storage",
        "01126738",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00bc4234",
      "READ",
      [
        "storage",
        "011276f8",
        null,
        "undefined8"
      ]
    ],
    [
      "00bc4244",
      "PARAM",
      [
        "storage",
        "002b9cb2",
        null,
        "string"
      ]
    ],
    [
      "00bc4260",
      "WRITE",
      [
        "storage",
        "011276f8",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bc3264 ["INT_ADD", "register:40f0:8", ["const:bc3264:8", "const:4:8"]]
- 00bc3264 ["CALL", null, ["callee:00c5bfb0:8"]]
+ 00bc4258 ["INT_ADD", "register:40f0:8", ["const:bc4258:8", "const:4:8"]]
+ 00bc4258 ["CALL", null, ["callee:00c5bfb0:8"]]
- 00bc326c ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:738:8"]]
- 00bc326c ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00bc4260 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:6f8:8"]]
+ 00bc4260 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00bc3238 ["COPY", "register:40a0:8", ["const:1126000:8"]]
+ 00bc422c ["COPY", "register:40a0:8", ["const:1127000:8"]]
~~~


<a id="compare-2850f4772f241b5dd2e754fe01f9bfb1"></a>

### [`00bc329c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bc3/00bc329c.md) → [`00bc4290`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bc4/00bc4290.md) _ZN8firebase13remote_config8internal19throttled_exception10GetFieldIdENS2_5FieldE

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c5b0d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b0d0.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c5c0a0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5c0a0.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies, return_value_candidate

命令の説明率　旧版 80.00% / 新版 80.00%

優先判定に残った影響 `call_argument_candidate` 1件, `return_value_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00bc42ac",
      "incomplete_value": false,
      "site": "00bc42b0",
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
            "const:61a:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bc32b8",
      "incomplete_value": false,
      "site": "00bc32bc",
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
            "const:54d:8"
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
    "new": {
      "definition_site": "00bc42bc",
      "incomplete_value": true,
      "site": "00bc42c8",
      "value": [
        "LOAD",
        "8",
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
      "definition_site": "00bc32c8",
      "incomplete_value": true,
      "site": "00bc32d4",
      "value": [
        "LOAD",
        "8",
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
      "00bc42ac",
      "PARAM",
      [
        "storage",
        "002a954d",
        null,
        "string"
      ]
    ],
    [
      "00bc42bc",
      "DATA",
      [
        "storage",
        "01126750",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "00bc42ac",
      "PARAM",
      [
        "storage",
        "002a961a",
        null,
        "string"
      ]
    ],
    [
      "00bc42bc",
      "DATA",
      [
        "storage",
        "01127710",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 00bc32bc ["INT_ADD", "register:40f0:8", ["const:bc32bc:8", "const:4:8"]]
- 00bc32bc ["CALL", null, ["callee:00c5c0a0:8"]]
+ 00bc42b0 ["INT_ADD", "register:40f0:8", ["const:bc42b0:8", "const:4:8"]]
+ 00bc42b0 ["CALL", null, ["callee:00c5c0a0:8"]]
- 00bc32b8 ["COPY", "tmp:0:8", ["const:54d:8"]]
- 00bc32b8 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 00bc32b8 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 00bc32b8 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 00bc42ac ["COPY", "tmp:0:8", ["const:61a:8"]]
+ 00bc42ac ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 00bc42ac ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 00bc42ac ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
- 00bc32c0 ["COPY", "register:4040:8", ["const:1126000:8"]]
+ 00bc42b4 ["COPY", "register:4040:8", ["const:1127000:8"]]
~~~


<a id="compare-5954e93c806d30f6e4c179a7c377443c"></a>

### [`00bc32d8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bc3/00bc32d8.md) → [`00bc42cc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bc4/00bc42cc.md) _ZN8firebase13remote_config8internal26jni_config_update_listener19CacheClassFromFilesEP7_JNIEnvP8_jobjectPKNSt6__ndk16vectorINS_8internal12E

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c5afe0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5afe0.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c5bfb0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5bfb0.md)

変更の種類 branch_value, call_argument_candidate, constant, operands_and_dependencies, store_condition, store_destination

命令の説明率　旧版 87.50% / 新版 87.50%

優先判定に残った影響 `call_argument_candidate` 1件, `store_destination` 1件

アドレスに依存する影響 `branch_value` 1件, `store_condition` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_destination",
    "new": {
      "definition_site": "00bc42f8",
      "incomplete_value": true,
      "site": "00bc42f8",
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
            "const:718:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bc3304",
      "incomplete_value": true,
      "site": "00bc3304",
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
            "const:758:8"
          ]
        ]
      ]
    },
    "ordinal": 3,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "branch_value",
    "new": {
      "definition_site": "00bc42e0",
      "incomplete_value": true,
      "site": "00bc42e0",
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
      "definition_site": "00bc32ec",
      "incomplete_value": true,
      "site": "00bc32ec",
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
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00bc42ec",
      "incomplete_value": false,
      "site": "00bc42f0",
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
            "const:f6d:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bc32f8",
      "incomplete_value": false,
      "site": "00bc32fc",
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
            "const:e9e:8"
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
      "00bc42dc",
      "READ",
      [
        "storage",
        "01126758",
        null,
        "undefined8"
      ]
    ],
    [
      "00bc42ec",
      "PARAM",
      [
        "storage",
        "002b6e9e",
        null,
        "string"
      ]
    ],
    [
      "00bc42f8",
      "WRITE",
      [
        "storage",
        "01126758",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00bc42dc",
      "READ",
      [
        "storage",
        "01127718",
        null,
        "undefined8"
      ]
    ],
    [
      "00bc42ec",
      "PARAM",
      [
        "storage",
        "002b6f6d",
        null,
        "string"
      ]
    ],
    [
      "00bc42f8",
      "WRITE",
      [
        "storage",
        "01127718",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bc32fc ["INT_ADD", "register:40f0:8", ["const:bc32fc:8", "const:4:8"]]
- 00bc32fc ["CALL", null, ["callee:00c5bfb0:8"]]
+ 00bc42f0 ["INT_ADD", "register:40f0:8", ["const:bc42f0:8", "const:4:8"]]
+ 00bc42f0 ["CALL", null, ["callee:00c5bfb0:8"]]
- 00bc3304 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:758:8"]]
- 00bc3304 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00bc42f8 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:718:8"]]
+ 00bc42f8 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00bc32e4 ["COPY", "register:4098:8", ["const:1126000:8"]]
+ 00bc42d8 ["COPY", "register:4098:8", ["const:1127000:8"]]
~~~


<a id="compare-789fb6b74b1cfc9848a4d76e14e45a81"></a>

### [`00bc3318`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bc3/00bc3318.md) → [`00bc430c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bc4/00bc430c.md) _ZN8firebase13remote_config8internal26jni_config_update_listener19CacheClassFromFilesEP7_JNIEnvP8_jobjectPKNSt6__ndk16vectorINS_8internal12E

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c5afe0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5afe0.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c5bfb0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5bfb0.md)

変更の種類 branch_value, call_argument_candidate, constant, operands_and_dependencies, store_condition, store_destination

命令の説明率　旧版 87.50% / 新版 87.50%

優先判定に残った影響 `call_argument_candidate` 1件, `store_destination` 1件

アドレスに依存する影響 `branch_value` 1件, `store_condition` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_destination",
    "new": {
      "definition_site": "00bc4338",
      "incomplete_value": true,
      "site": "00bc4338",
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
            "const:718:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bc3344",
      "incomplete_value": true,
      "site": "00bc3344",
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
            "const:758:8"
          ]
        ]
      ]
    },
    "ordinal": 3,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "branch_value",
    "new": {
      "definition_site": "00bc4320",
      "incomplete_value": true,
      "site": "00bc4320",
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
      "definition_site": "00bc332c",
      "incomplete_value": true,
      "site": "00bc332c",
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
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00bc4328",
      "incomplete_value": false,
      "site": "00bc4330",
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
            "const:f6d:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bc3334",
      "incomplete_value": false,
      "site": "00bc333c",
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
            "const:e9e:8"
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
      "00bc431c",
      "READ",
      [
        "storage",
        "01126758",
        null,
        "undefined8"
      ]
    ],
    [
      "00bc4328",
      "PARAM",
      [
        "storage",
        "002b6e9e",
        null,
        "string"
      ]
    ],
    [
      "00bc4338",
      "WRITE",
      [
        "storage",
        "01126758",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00bc431c",
      "READ",
      [
        "storage",
        "01127718",
        null,
        "undefined8"
      ]
    ],
    [
      "00bc4328",
      "PARAM",
      [
        "storage",
        "002b6f6d",
        null,
        "string"
      ]
    ],
    [
      "00bc4338",
      "WRITE",
      [
        "storage",
        "01127718",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bc333c ["INT_ADD", "register:40f0:8", ["const:bc333c:8", "const:4:8"]]
- 00bc333c ["CALL", null, ["callee:00c5bfb0:8"]]
+ 00bc4330 ["INT_ADD", "register:40f0:8", ["const:bc4330:8", "const:4:8"]]
+ 00bc4330 ["CALL", null, ["callee:00c5bfb0:8"]]
- 00bc3344 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:758:8"]]
- 00bc3344 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00bc4338 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:718:8"]]
+ 00bc4338 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00bc3324 ["COPY", "register:4098:8", ["const:1126000:8"]]
+ 00bc4318 ["COPY", "register:4098:8", ["const:1127000:8"]]
~~~


<a id="compare-ee453da96085832cff98d0c59095f9a6"></a>

### [`00bc3358`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bc3/00bc3358.md) → [`00bc434c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bc4/00bc434c.md) _ZN8firebase13remote_config8internal26jni_config_update_listener10CacheClassEP7_JNIEnvP8_jobjectNS_4util16ClassRequirementE

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c5afe0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5afe0.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c5bfb0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5bfb0.md)

変更の種類 branch_value, call_argument_candidate, constant, operands_and_dependencies, store_condition, store_destination

命令の説明率　旧版 88.24% / 新版 88.24%

優先判定に残った影響 `call_argument_candidate` 1件, `store_destination` 1件

アドレスに依存する影響 `branch_value` 1件, `store_condition` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_destination",
    "new": {
      "definition_site": "00bc437c",
      "incomplete_value": true,
      "site": "00bc437c",
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
            "const:718:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bc3388",
      "incomplete_value": true,
      "site": "00bc3388",
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
            "const:758:8"
          ]
        ]
      ]
    },
    "ordinal": 3,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "branch_value",
    "new": {
      "definition_site": "00bc4360",
      "incomplete_value": true,
      "site": "00bc4360",
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
      "definition_site": "00bc336c",
      "incomplete_value": true,
      "site": "00bc336c",
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
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00bc436c",
      "incomplete_value": false,
      "site": "00bc4374",
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
            "const:f6d:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bc3378",
      "incomplete_value": false,
      "site": "00bc3380",
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
            "const:e9e:8"
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
      "00bc435c",
      "READ",
      [
        "storage",
        "01126758",
        null,
        "undefined8"
      ]
    ],
    [
      "00bc436c",
      "PARAM",
      [
        "storage",
        "002b6e9e",
        null,
        "string"
      ]
    ],
    [
      "00bc437c",
      "WRITE",
      [
        "storage",
        "01126758",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00bc435c",
      "READ",
      [
        "storage",
        "01127718",
        null,
        "undefined8"
      ]
    ],
    [
      "00bc436c",
      "PARAM",
      [
        "storage",
        "002b6f6d",
        null,
        "string"
      ]
    ],
    [
      "00bc437c",
      "WRITE",
      [
        "storage",
        "01127718",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bc3380 ["INT_ADD", "register:40f0:8", ["const:bc3380:8", "const:4:8"]]
- 00bc3380 ["CALL", null, ["callee:00c5bfb0:8"]]
+ 00bc4374 ["INT_ADD", "register:40f0:8", ["const:bc4374:8", "const:4:8"]]
+ 00bc4374 ["CALL", null, ["callee:00c5bfb0:8"]]
- 00bc3388 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:758:8"]]
- 00bc3388 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00bc437c ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:718:8"]]
+ 00bc437c ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00bc3364 ["COPY", "register:4098:8", ["const:1126000:8"]]
+ 00bc4358 ["COPY", "register:4098:8", ["const:1127000:8"]]
~~~


<a id="compare-5abc20fd640d37fc21c406be245c7b9b"></a>

### [`00bc339c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bc3/00bc339c.md) → [`00bc4390`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bc4/00bc4390.md) _ZN8firebase13remote_config8internal26jni_config_update_listener10CacheClassEP7_JNIEnvP8_jobject

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c5afe0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5afe0.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c5bfb0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5bfb0.md)

変更の種類 branch_value, constant, operands_and_dependencies, store_condition, store_destination

命令の説明率　旧版 88.24% / 新版 88.24%

優先判定に残った影響 `store_destination` 1件

アドレスに依存する影響 `branch_value` 1件, `store_condition` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_destination",
    "new": {
      "definition_site": "00bc43c0",
      "incomplete_value": true,
      "site": "00bc43c0",
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
            "const:718:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bc33cc",
      "incomplete_value": true,
      "site": "00bc33cc",
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
            "const:758:8"
          ]
        ]
      ]
    },
    "ordinal": 3,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "branch_value",
    "new": {
      "definition_site": "00bc43a4",
      "incomplete_value": true,
      "site": "00bc43a4",
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
      "definition_site": "00bc33b0",
      "incomplete_value": true,
      "site": "00bc33b0",
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
        "00bc33b0"
      ],
      [
        "FALL_THROUGH",
        "00bc43a4"
      ]
    ],
    "kind": "store_condition",
    "new": {
      "definition_site": "00bc43a4",
      "incomplete_value": true,
      "site": "00bc43c0",
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
      "definition_site": "00bc33b0",
      "incomplete_value": true,
      "site": "00bc33cc",
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
      "00bc43a0",
      "READ",
      [
        "storage",
        "01126758",
        null,
        "undefined8"
      ]
    ],
    [
      "00bc43ac",
      "PARAM",
      [
        "storage",
        "002b6e9e",
        null,
        "string"
      ]
    ],
    [
      "00bc43c0",
      "WRITE",
      [
        "storage",
        "01126758",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00bc43a0",
      "READ",
      [
        "storage",
        "01127718",
        null,
        "undefined8"
      ]
    ],
    [
      "00bc43ac",
      "PARAM",
      [
        "storage",
        "002b6f6d",
        null,
        "string"
      ]
    ],
    [
      "00bc43c0",
      "WRITE",
      [
        "storage",
        "01127718",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bc33cc ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:758:8"]]
- 00bc33cc ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00bc43c0 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:718:8"]]
+ 00bc43c0 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00bc33a8 ["COPY", "register:4098:8", ["const:1126000:8"]]
+ 00bc439c ["COPY", "register:4098:8", ["const:1127000:8"]]
- 00bc33ac ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:758:8"]]
- 00bc33ac ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
+ 00bc43a0 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:718:8"]]
+ 00bc43a0 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-b1c084fcc41916fb93c4c93de91137c6"></a>

### [`00bc33ec`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bc3/00bc33ec.md) → [`00bc43e0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bc4/00bc43e0.md) _ZN8firebase13remote_config8internal26jni_config_update_listener15RegisterNativesEP7_JNIEnvPK15JNINativeMethodm

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c5b030`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b030.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c5c000`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5c000.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies, store_destination

命令の説明率　旧版 88.89% / 新版 88.89%

優先判定に残った影響 `call_argument_candidate` 1件, `store_destination` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_destination",
    "new": {
      "definition_site": "00bc4438",
      "incomplete_value": true,
      "site": "00bc4438",
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
            "const:720:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bc3444",
      "incomplete_value": true,
      "site": "00bc3444",
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
            "const:760:8"
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
      "definition_site": "00bc4414",
      "incomplete_value": true,
      "site": "00bc4420",
      "value": [
        "LOAD",
        "8",
        [
          [
            "leaf",
            "const:1b1:8"
          ],
          [
            "INT_ADD",
            "8",
            [
              [
                "leaf",
                "const:1127000:8"
              ],
              [
                "leaf",
                "const:718:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bc3420",
      "incomplete_value": true,
      "site": "00bc342c",
      "value": [
        "LOAD",
        "8",
        [
          [
            "leaf",
            "const:1b1:8"
          ],
          [
            "INT_ADD",
            "8",
            [
              [
                "leaf",
                "const:1126000:8"
              ],
              [
                "leaf",
                "const:758:8"
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


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "00bc43f4",
      "READ",
      [
        "storage",
        "01126760",
        null,
        "undefined1"
      ]
    ],
    [
      "00bc4414",
      "READ",
      [
        "storage",
        "01126758",
        null,
        "undefined8"
      ]
    ],
    [
      "00bc4438",
      "WRITE",
      [
        "storage",
        "01126760",
        null,
        "undefined1"
      ]
    ]
  ],
  "added": [
    [
      "00bc43f4",
      "READ",
      [
        "storage",
        "01127720",
        null,
        "undefined1"
      ]
    ],
    [
      "00bc4414",
      "READ",
      [
        "storage",
        "01127718",
        null,
        "undefined8"
      ]
    ],
    [
      "00bc4438",
      "WRITE",
      [
        "storage",
        "01127720",
        null,
        "undefined1"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bc342c ["COPY", "register:0:8", ["register:4040:8"]]
- 00bc342c ["INT_ADD", "register:40f0:8", ["const:bc342c:8", "const:4:8"]]
- 00bc342c ["CALLIND", null, ["register:0:8"]]
+ 00bc4420 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00bc4420 ["INT_ADD", "register:40f0:8", ["const:bc4420:8", "const:4:8"]]
+ 00bc4420 ["CALLIND", null, ["register:0:8"]]
- 00bc3444 ["COPY", "tmp:0:4", ["register:4000:4"]]
- 00bc3444 ["INT_ADD", "tmp:1:8", ["register:40a8:8", "const:760:8"]]
- 00bc3444 ["STORE", null, ["const:1b1:8", "tmp:1:8", "tmp:0:1"]]
+ 00bc4438 ["COPY", "tmp:0:4", ["register:4000:4"]]
+ 00bc4438 ["INT_ADD", "tmp:1:8", ["register:40a8:8", "const:720:8"]]
+ 00bc4438 ["STORE", null, ["const:1b1:8", "tmp:1:8", "tmp:0:1"]]
- 00bc33fc ["COPY", "register:40a8:8", ["const:1126000:8"]]
+ 00bc43f0 ["COPY", "register:40a8:8", ["const:1127000:8"]]
~~~


<a id="compare-da773df64870ab7352adeab094d83a4c"></a>

### [`00bc3458`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bc3/00bc3458.md) → [`00bc444c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bc4/00bc444c.md) _ZN8firebase13remote_config8internal26jni_config_update_listener12ReleaseClassEP7_JNIEnv

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c5b030`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b030.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c5c000`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5c000.md)

変更の種類 branch_value, call_argument_candidate, constant, operands_and_dependencies, store_destination

命令の説明率　旧版 89.29% / 新版 89.29%

優先判定に残った影響 `call_argument_candidate` 1件, `store_destination` 2件

アドレスに依存する影響 `branch_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_destination",
    "new": {
      "definition_site": "00bc4488",
      "incomplete_value": true,
      "site": "00bc4488",
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
            "const:720:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bc3494",
      "incomplete_value": true,
      "site": "00bc3494",
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
            "const:760:8"
          ]
        ]
      ]
    },
    "ordinal": 5,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "store_destination",
    "new": {
      "definition_site": "00bc44a8",
      "incomplete_value": true,
      "site": "00bc44a8",
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
            "const:718:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bc34b4",
      "incomplete_value": true,
      "site": "00bc34b4",
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
            "const:758:8"
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
      "definition_site": "00bc4464",
      "incomplete_value": true,
      "site": "00bc4464",
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
      "definition_site": "00bc3470",
      "incomplete_value": true,
      "site": "00bc3470",
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
      "00bc4460",
      "READ",
      [
        "storage",
        "01126758",
        null,
        "undefined8"
      ]
    ],
    [
      "00bc446c",
      "READ",
      [
        "storage",
        "01126760",
        null,
        "undefined1"
      ]
    ],
    [
      "00bc4488",
      "WRITE",
      [
        "storage",
        "01126760",
        null,
        "undefined1"
      ]
    ]
  ],
  "added": [
    [
      "00bc4460",
      "READ",
      [
        "storage",
        "01127718",
        null,
        "undefined8"
      ]
    ],
    [
      "00bc446c",
      "READ",
      [
        "storage",
        "01127720",
        null,
        "undefined1"
      ]
    ],
    [
      "00bc4488",
      "WRITE",
      [
        "storage",
        "01127720",
        null,
        "undefined1"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bc3494 ["COPY", "tmp:0:4", ["const:0:4"]]
- 00bc3494 ["COPY", "tmp:1:4", ["tmp:0:4"]]
- 00bc3494 ["INT_ADD", "tmp:2:8", ["register:40a8:8", "const:760:8"]]
- 00bc3494 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:1:1"]]
+ 00bc4488 ["COPY", "tmp:0:4", ["const:0:4"]]
+ 00bc4488 ["COPY", "tmp:1:4", ["tmp:0:4"]]
+ 00bc4488 ["INT_ADD", "tmp:2:8", ["register:40a8:8", "const:720:8"]]
+ 00bc4488 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:1:1"]]
- 00bc34b0 ["COPY", "register:0:8", ["register:4040:8"]]
- 00bc34b0 ["INT_ADD", "register:40f0:8", ["const:bc34b0:8", "const:4:8"]]
- 00bc34b0 ["CALLIND", null, ["register:0:8"]]
+ 00bc44a4 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00bc44a4 ["INT_ADD", "register:40f0:8", ["const:bc44a4:8", "const:4:8"]]
+ 00bc44a4 ["CALLIND", null, ["register:0:8"]]
- 00bc34b4 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:758:8"]]
- 00bc34b4 ["COPY", "tmp:1:8", ["const:0:8"]]
- 00bc34b4 ["STORE", null, ["const:1b1:8", "tmp:0:8", "tmp:1:8"]]
+ 00bc44a8 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:718:8"]]
+ 00bc44a8 ["COPY", "tmp:1:8", ["const:0:8"]]
+ 00bc44a8 ["STORE", null, ["const:1b1:8", "tmp:0:8", "tmp:1:8"]]
~~~


<a id="compare-8b4a409fcef5fae1d9d93d7f332c6af8"></a>

### [`00bc34c8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bc3/00bc34c8.md) → [`00bc44bc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bc4/00bc44bc.md) _ZN8firebase13remote_config8internal26jni_config_update_listener14CacheMethodIdsEP7_JNIEnvP8_jobject

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c5afe0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5afe0.md) [`00c5b000`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b000.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c5bfb0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5bfb0.md) [`00c5bfd0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5bfd0.md)

変更の種類 branch_value, call_argument_candidate, constant, operands_and_dependencies, store_condition, store_destination

命令の説明率　旧版 75.00% / 新版 75.00%

優先判定に残った影響 `branch_value` 1件, `call_argument_candidate` 1件, `store_condition` 1件, `store_destination` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_destination",
    "new": {
      "definition_site": "00bc44fc",
      "incomplete_value": true,
      "site": "00bc44fc",
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
            "const:718:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bc3508",
      "incomplete_value": true,
      "site": "00bc3508",
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
            "const:758:8"
          ]
        ]
      ]
    },
    "ordinal": 4,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "branch_value",
    "new": {
      "definition_site": "00bc44d8",
      "incomplete_value": true,
      "site": "00bc44d8",
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
      "definition_site": "00bc34e4",
      "incomplete_value": true,
      "site": "00bc34e4",
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
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00bc44e0",
      "incomplete_value": false,
      "site": "00bc44f4",
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
            "const:f6d:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bc34ec",
      "incomplete_value": false,
      "site": "00bc3500",
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
            "const:e9e:8"
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
      "00bc44d0",
      "READ",
      [
        "storage",
        "01126758",
        null,
        "undefined8"
      ]
    ],
    [
      "00bc44e0",
      "PARAM",
      [
        "storage",
        "002b6e9e",
        null,
        "string"
      ]
    ],
    [
      "00bc44fc",
      "WRITE",
      [
        "storage",
        "01126758",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00bc44d0",
      "READ",
      [
        "storage",
        "01127718",
        null,
        "undefined8"
      ]
    ],
    [
      "00bc44e0",
      "PARAM",
      [
        "storage",
        "002b6f6d",
        null,
        "string"
      ]
    ],
    [
      "00bc44fc",
      "WRITE",
      [
        "storage",
        "01127718",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bc3500 ["INT_ADD", "register:40f0:8", ["const:bc3500:8", "const:4:8"]]
- 00bc3500 ["CALL", null, ["callee:00c5bfb0:8"]]
+ 00bc44f4 ["INT_ADD", "register:40f0:8", ["const:bc44f4:8", "const:4:8"]]
+ 00bc44f4 ["CALL", null, ["callee:00c5bfb0:8"]]
- 00bc3508 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:758:8"]]
- 00bc3508 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00bc44fc ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:718:8"]]
+ 00bc44fc ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00bc34d4 ["COPY", "register:40a0:8", ["const:1126000:8"]]
+ 00bc44c8 ["COPY", "register:40a0:8", ["const:1127000:8"]]
~~~


<a id="compare-384c901586f574979771beaeebb39d61"></a>

### [`00bc3538`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bc3/00bc3538.md) → [`00bc452c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bc4/00bc452c.md) _ZN8firebase13remote_config8internal26jni_config_update_listener11GetMethodIdENS2_6MethodE

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c5b0d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b0d0.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c5c0a0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5c0a0.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 80.00% / 新版 80.00%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00bc4548",
      "incomplete_value": false,
      "site": "00bc454c",
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
            "const:463:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bc3554",
      "incomplete_value": false,
      "site": "00bc3558",
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
            "const:30b:8"
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
      "00bc4548",
      "PARAM",
      [
        "storage",
        "002a830b",
        null,
        "string"
      ]
    ],
    [
      "00bc4558",
      "DATA",
      [
        "storage",
        "01126768",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00bc4548",
      "PARAM",
      [
        "storage",
        "002a8463",
        null,
        "string"
      ]
    ],
    [
      "00bc4558",
      "DATA",
      [
        "storage",
        "01127728",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bc3558 ["INT_ADD", "register:40f0:8", ["const:bc3558:8", "const:4:8"]]
- 00bc3558 ["CALL", null, ["callee:00c5c0a0:8"]]
+ 00bc454c ["INT_ADD", "register:40f0:8", ["const:bc454c:8", "const:4:8"]]
+ 00bc454c ["CALL", null, ["callee:00c5c0a0:8"]]
- 00bc3554 ["COPY", "tmp:0:8", ["const:30b:8"]]
- 00bc3554 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 00bc3554 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 00bc3554 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 00bc4548 ["COPY", "tmp:0:8", ["const:463:8"]]
+ 00bc4548 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 00bc4548 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 00bc4548 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
- 00bc355c ["COPY", "register:4040:8", ["const:1126000:8"]]
+ 00bc4550 ["COPY", "register:4040:8", ["const:1127000:8"]]
~~~


<a id="compare-15bec0b739707a29da145cc33006fc0c"></a>

### [`00bc3574`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bc3/00bc3574.md) → [`00bc4568`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bc4/00bc4568.md) _ZN8firebase13remote_config8internal26jni_config_update_listener13CacheFieldIdsEP7_JNIEnvP8_jobject

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c5afc0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5afc0.md) [`00c5afe0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5afe0.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c5bf90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5bf90.md) [`00c5bfb0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5bfb0.md)

変更の種類 branch_value, call_argument_candidate, constant, operands_and_dependencies, store_condition, store_destination

命令の説明率　旧版 75.00% / 新版 75.00%

優先判定に残った影響 `branch_value` 1件, `call_argument_candidate` 1件, `store_condition` 1件, `store_destination` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_destination",
    "new": {
      "definition_site": "00bc45a8",
      "incomplete_value": true,
      "site": "00bc45a8",
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
            "const:718:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bc35b4",
      "incomplete_value": true,
      "site": "00bc35b4",
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
            "const:758:8"
          ]
        ]
      ]
    },
    "ordinal": 4,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "branch_value",
    "new": {
      "definition_site": "00bc4584",
      "incomplete_value": true,
      "site": "00bc4584",
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
      "definition_site": "00bc3590",
      "incomplete_value": true,
      "site": "00bc3590",
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
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00bc458c",
      "incomplete_value": false,
      "site": "00bc45a0",
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
            "const:f6d:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bc3598",
      "incomplete_value": false,
      "site": "00bc35ac",
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
            "const:e9e:8"
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
      "00bc457c",
      "READ",
      [
        "storage",
        "01126758",
        null,
        "undefined8"
      ]
    ],
    [
      "00bc458c",
      "PARAM",
      [
        "storage",
        "002b6e9e",
        null,
        "string"
      ]
    ],
    [
      "00bc45a8",
      "WRITE",
      [
        "storage",
        "01126758",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00bc457c",
      "READ",
      [
        "storage",
        "01127718",
        null,
        "undefined8"
      ]
    ],
    [
      "00bc458c",
      "PARAM",
      [
        "storage",
        "002b6f6d",
        null,
        "string"
      ]
    ],
    [
      "00bc45a8",
      "WRITE",
      [
        "storage",
        "01127718",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bc35ac ["INT_ADD", "register:40f0:8", ["const:bc35ac:8", "const:4:8"]]
- 00bc35ac ["CALL", null, ["callee:00c5bfb0:8"]]
+ 00bc45a0 ["INT_ADD", "register:40f0:8", ["const:bc45a0:8", "const:4:8"]]
+ 00bc45a0 ["CALL", null, ["callee:00c5bfb0:8"]]
- 00bc35b4 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:758:8"]]
- 00bc35b4 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00bc45a8 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:718:8"]]
+ 00bc45a8 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00bc3580 ["COPY", "register:40a0:8", ["const:1126000:8"]]
+ 00bc4574 ["COPY", "register:40a0:8", ["const:1127000:8"]]
~~~


<a id="compare-1f414ab0a7580b1526dc956afa327646"></a>

### [`00bc35e4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bc3/00bc35e4.md) → [`00bc45d8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bc4/00bc45d8.md) _ZN8firebase13remote_config8internal26jni_config_update_listener10GetFieldIdENS2_5FieldE

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c5b0d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b0d0.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c5c0a0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5c0a0.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies, return_value_candidate

命令の説明率　旧版 80.00% / 新版 80.00%

優先判定に残った影響 `call_argument_candidate` 1件, `return_value_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00bc45f4",
      "incomplete_value": false,
      "site": "00bc45f8",
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
            "const:61a:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bc3600",
      "incomplete_value": false,
      "site": "00bc3604",
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
            "const:54d:8"
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
    "new": {
      "definition_site": "00bc4604",
      "incomplete_value": true,
      "site": "00bc4610",
      "value": [
        "LOAD",
        "8",
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
      "definition_site": "00bc3610",
      "incomplete_value": true,
      "site": "00bc361c",
      "value": [
        "LOAD",
        "8",
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
      "00bc45f4",
      "PARAM",
      [
        "storage",
        "002a954d",
        null,
        "string"
      ]
    ],
    [
      "00bc4604",
      "DATA",
      [
        "storage",
        "01126770",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "00bc45f4",
      "PARAM",
      [
        "storage",
        "002a961a",
        null,
        "string"
      ]
    ],
    [
      "00bc4604",
      "DATA",
      [
        "storage",
        "01127730",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 00bc3604 ["INT_ADD", "register:40f0:8", ["const:bc3604:8", "const:4:8"]]
- 00bc3604 ["CALL", null, ["callee:00c5c0a0:8"]]
+ 00bc45f8 ["INT_ADD", "register:40f0:8", ["const:bc45f8:8", "const:4:8"]]
+ 00bc45f8 ["CALL", null, ["callee:00c5c0a0:8"]]
- 00bc3600 ["COPY", "tmp:0:8", ["const:54d:8"]]
- 00bc3600 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 00bc3600 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 00bc3600 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 00bc45f4 ["COPY", "tmp:0:8", ["const:61a:8"]]
+ 00bc45f4 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 00bc45f4 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 00bc45f4 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
- 00bc3608 ["COPY", "register:4040:8", ["const:1126000:8"]]
+ 00bc45fc ["COPY", "register:4040:8", ["const:1127000:8"]]
~~~


<a id="compare-be95fcef0a4b355ab2c487a4b2ea28ad"></a>

### [`00bc3620`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bc3/00bc3620.md) → [`00bc4614`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bc4/00bc4614.md) _ZN8firebase13remote_config8internal13config_update19CacheClassFromFilesEP7_JNIEnvP8_jobjectPKNSt6__ndk16vectorINS_8internal12EmbeddedFileEN

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c5afe0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5afe0.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c5bfb0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5bfb0.md)

変更の種類 branch_value, call_argument_candidate, constant, operands_and_dependencies, store_condition, store_destination

命令の説明率　旧版 87.50% / 新版 87.50%

優先判定に残った影響 `call_argument_candidate` 1件, `store_destination` 1件

アドレスに依存する影響 `branch_value` 1件, `store_condition` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_destination",
    "new": {
      "definition_site": "00bc4640",
      "incomplete_value": true,
      "site": "00bc4640",
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
            "const:738:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bc364c",
      "incomplete_value": true,
      "site": "00bc364c",
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
            "const:778:8"
          ]
        ]
      ]
    },
    "ordinal": 3,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "branch_value",
    "new": {
      "definition_site": "00bc4628",
      "incomplete_value": true,
      "site": "00bc4628",
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
      "definition_site": "00bc3634",
      "incomplete_value": true,
      "site": "00bc3634",
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
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00bc4634",
      "incomplete_value": false,
      "site": "00bc4638",
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
            "const:166:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bc3640",
      "incomplete_value": false,
      "site": "00bc3644",
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
            "const:88:8"
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
      "00bc4624",
      "READ",
      [
        "storage",
        "01126778",
        null,
        "undefined8"
      ]
    ],
    [
      "00bc4634",
      "PARAM",
      [
        "storage",
        "002bc088",
        null,
        "string"
      ]
    ],
    [
      "00bc4640",
      "WRITE",
      [
        "storage",
        "01126778",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00bc4624",
      "READ",
      [
        "storage",
        "01127738",
        null,
        "undefined8"
      ]
    ],
    [
      "00bc4634",
      "PARAM",
      [
        "storage",
        "002bc166",
        null,
        "string"
      ]
    ],
    [
      "00bc4640",
      "WRITE",
      [
        "storage",
        "01127738",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bc3644 ["INT_ADD", "register:40f0:8", ["const:bc3644:8", "const:4:8"]]
- 00bc3644 ["CALL", null, ["callee:00c5bfb0:8"]]
+ 00bc4638 ["INT_ADD", "register:40f0:8", ["const:bc4638:8", "const:4:8"]]
+ 00bc4638 ["CALL", null, ["callee:00c5bfb0:8"]]
- 00bc364c ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:778:8"]]
- 00bc364c ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00bc4640 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:738:8"]]
+ 00bc4640 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00bc362c ["COPY", "register:4098:8", ["const:1126000:8"]]
+ 00bc4620 ["COPY", "register:4098:8", ["const:1127000:8"]]
~~~


<a id="compare-81c183007af51f3f9e5f87d676b4f090"></a>

### [`00bc3660`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bc3/00bc3660.md) → [`00bc4654`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bc4/00bc4654.md) _ZN8firebase13remote_config8internal13config_update19CacheClassFromFilesEP7_JNIEnvP8_jobjectPKNSt6__ndk16vectorINS_8internal12EmbeddedFileEN

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c5afe0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5afe0.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c5bfb0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5bfb0.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies, store_destination

命令の説明率　旧版 87.50% / 新版 87.50%

優先判定に残った影響 `call_argument_candidate` 1件, `store_destination` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_destination",
    "new": {
      "definition_site": "00bc4680",
      "incomplete_value": true,
      "site": "00bc4680",
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
            "const:738:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bc368c",
      "incomplete_value": true,
      "site": "00bc368c",
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
            "const:778:8"
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
      "definition_site": "00bc4670",
      "incomplete_value": false,
      "site": "00bc4678",
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
            "const:166:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bc367c",
      "incomplete_value": false,
      "site": "00bc3684",
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
            "const:88:8"
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
      "00bc4664",
      "READ",
      [
        "storage",
        "01126778",
        null,
        "undefined8"
      ]
    ],
    [
      "00bc4670",
      "PARAM",
      [
        "storage",
        "002bc088",
        null,
        "string"
      ]
    ],
    [
      "00bc4680",
      "WRITE",
      [
        "storage",
        "01126778",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00bc4664",
      "READ",
      [
        "storage",
        "01127738",
        null,
        "undefined8"
      ]
    ],
    [
      "00bc4670",
      "PARAM",
      [
        "storage",
        "002bc166",
        null,
        "string"
      ]
    ],
    [
      "00bc4680",
      "WRITE",
      [
        "storage",
        "01127738",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bc3684 ["INT_ADD", "register:40f0:8", ["const:bc3684:8", "const:4:8"]]
- 00bc3684 ["CALL", null, ["callee:00c5bfb0:8"]]
+ 00bc4678 ["INT_ADD", "register:40f0:8", ["const:bc4678:8", "const:4:8"]]
+ 00bc4678 ["CALL", null, ["callee:00c5bfb0:8"]]
- 00bc368c ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:778:8"]]
- 00bc368c ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00bc4680 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:738:8"]]
+ 00bc4680 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00bc366c ["COPY", "register:4098:8", ["const:1126000:8"]]
+ 00bc4660 ["COPY", "register:4098:8", ["const:1127000:8"]]
~~~


<a id="compare-aa039b1e22dd6993d7ab8396aeeb7bc9"></a>

### [`00bc36a0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bc3/00bc36a0.md) → [`00bc4694`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bc4/00bc4694.md) _ZN8firebase13remote_config8internal13config_update10CacheClassEP7_JNIEnvP8_jobjectNS_4util16ClassRequirementE

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c5afe0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5afe0.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c5bfb0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5bfb0.md)

変更の種類 branch_value, call_argument_candidate, constant, operands_and_dependencies, store_condition, store_destination

命令の説明率　旧版 88.24% / 新版 88.24%

優先判定に残った影響 `call_argument_candidate` 1件, `store_destination` 1件

アドレスに依存する影響 `branch_value` 1件, `store_condition` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_destination",
    "new": {
      "definition_site": "00bc46c4",
      "incomplete_value": true,
      "site": "00bc46c4",
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
            "const:738:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bc36d0",
      "incomplete_value": true,
      "site": "00bc36d0",
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
            "const:778:8"
          ]
        ]
      ]
    },
    "ordinal": 3,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "branch_value",
    "new": {
      "definition_site": "00bc46a8",
      "incomplete_value": true,
      "site": "00bc46a8",
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
      "definition_site": "00bc36b4",
      "incomplete_value": true,
      "site": "00bc36b4",
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
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00bc46b4",
      "incomplete_value": false,
      "site": "00bc46bc",
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
            "const:166:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bc36c0",
      "incomplete_value": false,
      "site": "00bc36c8",
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
            "const:88:8"
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
      "00bc46a4",
      "READ",
      [
        "storage",
        "01126778",
        null,
        "undefined8"
      ]
    ],
    [
      "00bc46b4",
      "PARAM",
      [
        "storage",
        "002bc088",
        null,
        "string"
      ]
    ],
    [
      "00bc46c4",
      "WRITE",
      [
        "storage",
        "01126778",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00bc46a4",
      "READ",
      [
        "storage",
        "01127738",
        null,
        "undefined8"
      ]
    ],
    [
      "00bc46b4",
      "PARAM",
      [
        "storage",
        "002bc166",
        null,
        "string"
      ]
    ],
    [
      "00bc46c4",
      "WRITE",
      [
        "storage",
        "01127738",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bc36c8 ["INT_ADD", "register:40f0:8", ["const:bc36c8:8", "const:4:8"]]
- 00bc36c8 ["CALL", null, ["callee:00c5bfb0:8"]]
+ 00bc46bc ["INT_ADD", "register:40f0:8", ["const:bc46bc:8", "const:4:8"]]
+ 00bc46bc ["CALL", null, ["callee:00c5bfb0:8"]]
- 00bc36d0 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:778:8"]]
- 00bc36d0 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00bc46c4 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:738:8"]]
+ 00bc46c4 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00bc36ac ["COPY", "register:4098:8", ["const:1126000:8"]]
+ 00bc46a0 ["COPY", "register:4098:8", ["const:1127000:8"]]
~~~


<a id="compare-9b2d3e1843eefbe598fee4aa7139e50e"></a>

### [`00bc36e4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bc3/00bc36e4.md) → [`00bc46d8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bc4/00bc46d8.md) _ZN8firebase13remote_config8internal13config_update10CacheClassEP7_JNIEnvP8_jobject

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c5afe0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5afe0.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c5bfb0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5bfb0.md)

変更の種類 branch_value, call_argument_candidate, constant, operands_and_dependencies, store_condition, store_destination

命令の説明率　旧版 88.24% / 新版 88.24%

優先判定に残った影響 `call_argument_candidate` 1件, `store_destination` 1件

アドレスに依存する影響 `branch_value` 1件, `store_condition` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_destination",
    "new": {
      "definition_site": "00bc4708",
      "incomplete_value": true,
      "site": "00bc4708",
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
            "const:738:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bc3714",
      "incomplete_value": true,
      "site": "00bc3714",
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
            "const:778:8"
          ]
        ]
      ]
    },
    "ordinal": 3,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "branch_value",
    "new": {
      "definition_site": "00bc46ec",
      "incomplete_value": true,
      "site": "00bc46ec",
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
      "definition_site": "00bc36f8",
      "incomplete_value": true,
      "site": "00bc36f8",
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
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00bc46f4",
      "incomplete_value": false,
      "site": "00bc4700",
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
            "const:166:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bc3700",
      "incomplete_value": false,
      "site": "00bc370c",
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
            "const:88:8"
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
      "00bc46e8",
      "READ",
      [
        "storage",
        "01126778",
        null,
        "undefined8"
      ]
    ],
    [
      "00bc46f4",
      "PARAM",
      [
        "storage",
        "002bc088",
        null,
        "string"
      ]
    ],
    [
      "00bc4708",
      "WRITE",
      [
        "storage",
        "01126778",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00bc46e8",
      "READ",
      [
        "storage",
        "01127738",
        null,
        "undefined8"
      ]
    ],
    [
      "00bc46f4",
      "PARAM",
      [
        "storage",
        "002bc166",
        null,
        "string"
      ]
    ],
    [
      "00bc4708",
      "WRITE",
      [
        "storage",
        "01127738",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bc370c ["INT_ADD", "register:40f0:8", ["const:bc370c:8", "const:4:8"]]
- 00bc370c ["CALL", null, ["callee:00c5bfb0:8"]]
+ 00bc4700 ["INT_ADD", "register:40f0:8", ["const:bc4700:8", "const:4:8"]]
+ 00bc4700 ["CALL", null, ["callee:00c5bfb0:8"]]
- 00bc3714 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:778:8"]]
- 00bc3714 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00bc4708 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:738:8"]]
+ 00bc4708 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00bc36f0 ["COPY", "register:4098:8", ["const:1126000:8"]]
+ 00bc46e4 ["COPY", "register:4098:8", ["const:1127000:8"]]
~~~


<a id="compare-63ba2d2f035a718826534aa890219a27"></a>

### [`00bc3734`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bc3/00bc3734.md) → [`00bc4728`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bc4/00bc4728.md) _ZN8firebase13remote_config8internal13config_update15RegisterNativesEP7_JNIEnvPK15JNINativeMethodm

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c5b030`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b030.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c5c000`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5c000.md)

変更の種類 constant, operands_and_dependencies, store_destination

命令の説明率　旧版 92.59% / 新版 92.59%

優先判定に残った影響 `store_destination` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_destination",
    "new": {
      "definition_site": "00bc4780",
      "incomplete_value": true,
      "site": "00bc4780",
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
            "const:740:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bc378c",
      "incomplete_value": true,
      "site": "00bc378c",
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
            "const:780:8"
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
      "00bc473c",
      "READ",
      [
        "storage",
        "01126780",
        null,
        "undefined1"
      ]
    ],
    [
      "00bc475c",
      "READ",
      [
        "storage",
        "01126778",
        null,
        "undefined8"
      ]
    ],
    [
      "00bc4780",
      "WRITE",
      [
        "storage",
        "01126780",
        null,
        "undefined1"
      ]
    ]
  ],
  "added": [
    [
      "00bc473c",
      "READ",
      [
        "storage",
        "01127740",
        null,
        "undefined1"
      ]
    ],
    [
      "00bc475c",
      "READ",
      [
        "storage",
        "01127738",
        null,
        "undefined8"
      ]
    ],
    [
      "00bc4780",
      "WRITE",
      [
        "storage",
        "01127740",
        null,
        "undefined1"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bc378c ["COPY", "tmp:0:4", ["register:4000:4"]]
- 00bc378c ["INT_ADD", "tmp:1:8", ["register:40a8:8", "const:780:8"]]
- 00bc378c ["STORE", null, ["const:1b1:8", "tmp:1:8", "tmp:0:1"]]
+ 00bc4780 ["COPY", "tmp:0:4", ["register:4000:4"]]
+ 00bc4780 ["INT_ADD", "tmp:1:8", ["register:40a8:8", "const:740:8"]]
+ 00bc4780 ["STORE", null, ["const:1b1:8", "tmp:1:8", "tmp:0:1"]]
- 00bc3744 ["COPY", "register:40a8:8", ["const:1126000:8"]]
+ 00bc4738 ["COPY", "register:40a8:8", ["const:1127000:8"]]
- 00bc3748 ["INT_ADD", "tmp:0:8", ["register:40a8:8", "const:780:8"]]
- 00bc3748 ["LOAD", "tmp:1:1", ["const:1b1:8", "tmp:0:8"]]
- 00bc3748 ["INT_ZEXT", "register:4040:8", ["tmp:1:1"]]
+ 00bc473c ["INT_ADD", "tmp:0:8", ["register:40a8:8", "const:740:8"]]
+ 00bc473c ["LOAD", "tmp:1:1", ["const:1b1:8", "tmp:0:8"]]
+ 00bc473c ["INT_ZEXT", "register:4040:8", ["tmp:1:1"]]
~~~


