# v16.0.2 → v16.0.3 · 最優先の変更候補 (4)

[一覧の目次](README.md)

<a id="compare-5cf7e8c1406fd8b0e73b1583b99d5548"></a>

### [`00463164`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00463/00463164.md) → [`00463484`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00463/00463484.md) FUN_00463484

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 93.10% / 新版 93.10%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "004634b0",
      "incomplete_value": false,
      "site": "004634b0",
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
            "const:5b8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00463190",
      "incomplete_value": false,
      "site": "00463190",
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
            "const:5e8:8"
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
      "004634b0",
      "DATA",
      [
        "storage",
        "00c645e8",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "004634b0",
      "DATA",
      [
        "storage",
        "00c655b8",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00463178 ["INT_ADD", "register:40f0:8", ["const:463178:8", "const:4:8"]]
- 00463178 ["CALL", null, ["callee:00c58f30:8"]]
+ 00463498 ["INT_ADD", "register:40f0:8", ["const:463498:8", "const:4:8"]]
+ 00463498 ["CALL", null, ["callee:00c58f30:8"]]
- 00463184 ["COPY", "register:4040:8", ["const:c64000:8"]]
+ 004634a4 ["COPY", "register:4040:8", ["const:c65000:8"]]
- 00463188 ["COPY", "tmp:0:8", ["const:5e8:8"]]
- 00463188 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00463188 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00463188 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 004634a8 ["COPY", "tmp:0:8", ["const:5b8:8"]]
+ 004634a8 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 004634a8 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 004634a8 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-6587c29b1211635ac532903056ef0d0a"></a>

### [`004631ec`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00463/004631ec.md) → [`0046350c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00463/0046350c.md) FUN_0046350c

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
      "definition_site": "00463528",
      "incomplete_value": false,
      "site": "00463528",
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
            "const:5b8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00463208",
      "incomplete_value": false,
      "site": "00463208",
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
            "const:5e8:8"
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
      "00463528",
      "DATA",
      [
        "storage",
        "00c645e8",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00463528",
      "DATA",
      [
        "storage",
        "00c655b8",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00463200 ["COPY", "register:4048:8", ["const:c64000:8"]]
+ 00463520 ["COPY", "register:4048:8", ["const:c65000:8"]]
- 00463204 ["COPY", "tmp:0:8", ["const:5e8:8"]]
- 00463204 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 00463204 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 00463204 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 00463524 ["COPY", "tmp:0:8", ["const:5b8:8"]]
+ 00463524 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 00463524 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 00463524 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
- 00463228 ["COPY", "register:0:8", ["register:4048:8"]]
- 00463228 ["INT_ADD", "register:40f0:8", ["const:463228:8", "const:4:8"]]
- 00463228 ["CALLIND", null, ["register:0:8"]]
+ 00463548 ["COPY", "register:0:8", ["register:4048:8"]]
+ 00463548 ["INT_ADD", "register:40f0:8", ["const:463548:8", "const:4:8"]]
+ 00463548 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-a45fbd20d40111bf2a43d4ecdd6c2e96"></a>

### [`004632e8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00463/004632e8.md) → [`00463608`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00463/00463608.md) FUN_00463608

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 5件 [`0043bb60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bb60.md) [`004410cc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00441/004410cc.md) [`00459db4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00459/00459db4.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)
- 新版 呼出元 0件  · 呼出先 5件 [`0043be80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043be80.md) [`004413ec`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00441/004413ec.md) [`0045a0d4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0045a/0045a0d4.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 97.79% / 新版 97.79%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "004636ac",
      "incomplete_value": true,
      "site": "004636ac",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:f8e:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0046338c",
      "incomplete_value": true,
      "site": "0046338c",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:f4e:8"
              ]
            ]
          ]
        ]
      ]
    },
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
      "0046369c",
      "READ",
      [
        "storage",
        "002a0f4e",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "0046369c",
      "READ",
      [
        "storage",
        "002a0f8e",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 0046333c ["INT_ADD", "register:40f0:8", ["const:46333c:8", "const:4:8"]]
- 0046333c ["CALL", null, ["callee:004413ec:8"]]
+ 0046365c ["INT_ADD", "register:40f0:8", ["const:46365c:8", "const:4:8"]]
+ 0046365c ["CALL", null, ["callee:004413ec:8"]]
- 00463368 ["INT_ADD", "register:40f0:8", ["const:463368:8", "const:4:8"]]
- 00463368 ["CALL", null, ["callee:00c58f50:8"]]
+ 00463688 ["INT_ADD", "register:40f0:8", ["const:463688:8", "const:4:8"]]
+ 00463688 ["CALL", null, ["callee:00c58f50:8"]]
- 00463374 ["COPY", "tmp:0:8", ["const:f4e:8"]]
- 00463374 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 00463374 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 00463374 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 00463694 ["COPY", "tmp:0:8", ["const:f8e:8"]]
+ 00463694 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 00463694 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 00463694 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
~~~


<a id="compare-c4e05d8844bb6a95d6e389a88cb38f29"></a>

### [`004635ac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00463/004635ac.md) → [`004638cc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00463/004638cc.md) FUN_004638cc

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
      "definition_site": "004638d8",
      "incomplete_value": false,
      "site": "004638e4",
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
            "const:638:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "004635b8",
      "incomplete_value": false,
      "site": "004635c4",
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
      "004638e4",
      "DATA",
      [
        "storage",
        "00c64668",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "004638e4",
      "DATA",
      [
        "storage",
        "00c65638",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 004635b4 ["COPY", "register:4050:8", ["const:c64000:8"]]
+ 004638d4 ["COPY", "register:4050:8", ["const:c65000:8"]]
- 004635b8 ["COPY", "tmp:0:8", ["const:668:8"]]
- 004635b8 ["INT_CARRY", "register:105:1", ["register:4050:8", "tmp:0:8"]]
- 004635b8 ["INT_SCARRY", "register:106:1", ["register:4050:8", "tmp:0:8"]]
- 004635b8 ["INT_ADD", "tmp:1:8", ["register:4050:8", "tmp:0:8"]]
+ 004638d8 ["COPY", "tmp:0:8", ["const:638:8"]]
+ 004638d8 ["INT_CARRY", "register:105:1", ["register:4050:8", "tmp:0:8"]]
+ 004638d8 ["INT_SCARRY", "register:106:1", ["register:4050:8", "tmp:0:8"]]
+ 004638d8 ["INT_ADD", "tmp:1:8", ["register:4050:8", "tmp:0:8"]]
~~~


<a id="compare-35f5a70fa6291baedd19e27430a13608"></a>

### [`004635f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00463/004635f0.md) → [`00463910`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00463/00463910.md) FUN_00463910

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 91.30% / 新版 91.30%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "00463928",
      "incomplete_value": false,
      "site": "00463934",
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
            "const:638:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00463608",
      "incomplete_value": false,
      "site": "00463614",
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
      "00463934",
      "DATA",
      [
        "storage",
        "00c64668",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00463934",
      "DATA",
      [
        "storage",
        "00c65638",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00463604 ["COPY", "register:4040:8", ["const:c64000:8"]]
+ 00463924 ["COPY", "register:4040:8", ["const:c65000:8"]]
- 00463608 ["COPY", "tmp:0:8", ["const:668:8"]]
- 00463608 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00463608 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00463608 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00463928 ["COPY", "tmp:0:8", ["const:638:8"]]
+ 00463928 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00463928 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00463928 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 00463638 ["COPY", "register:0:8", ["register:4040:8"]]
- 00463638 ["INT_ADD", "register:40f0:8", ["const:463638:8", "const:4:8"]]
- 00463638 ["CALLIND", null, ["register:0:8"]]
+ 00463958 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00463958 ["INT_ADD", "register:40f0:8", ["const:463958:8", "const:4:8"]]
+ 00463958 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-3b74bd0fe94407fd98c8378544d29990"></a>

### [`0046364c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00463/0046364c.md) → [`0046396c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00463/0046396c.md) FUN_0046396c

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 93.10% / 新版 93.10%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "00463998",
      "incomplete_value": false,
      "site": "00463998",
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
            "const:638:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00463678",
      "incomplete_value": false,
      "site": "00463678",
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
            "const:668:8"
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
      "00463998",
      "DATA",
      [
        "storage",
        "00c64668",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00463998",
      "DATA",
      [
        "storage",
        "00c65638",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00463660 ["INT_ADD", "register:40f0:8", ["const:463660:8", "const:4:8"]]
- 00463660 ["CALL", null, ["callee:00c58f30:8"]]
+ 00463980 ["INT_ADD", "register:40f0:8", ["const:463980:8", "const:4:8"]]
+ 00463980 ["CALL", null, ["callee:00c58f30:8"]]
- 0046366c ["COPY", "register:4040:8", ["const:c64000:8"]]
+ 0046398c ["COPY", "register:4040:8", ["const:c65000:8"]]
- 00463670 ["COPY", "tmp:0:8", ["const:668:8"]]
- 00463670 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00463670 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00463670 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00463990 ["COPY", "tmp:0:8", ["const:638:8"]]
+ 00463990 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00463990 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00463990 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-21b32559324a4070a0e0688950e7732e"></a>

### [`004636d4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00463/004636d4.md) → [`004639f4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00463/004639f4.md) FUN_004639f4

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
      "definition_site": "00463a10",
      "incomplete_value": false,
      "site": "00463a10",
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
            "const:638:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "004636f0",
      "incomplete_value": false,
      "site": "004636f0",
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
      "00463a10",
      "DATA",
      [
        "storage",
        "00c64668",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00463a10",
      "DATA",
      [
        "storage",
        "00c65638",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 004636e8 ["COPY", "register:4048:8", ["const:c64000:8"]]
+ 00463a08 ["COPY", "register:4048:8", ["const:c65000:8"]]
- 004636ec ["COPY", "tmp:0:8", ["const:668:8"]]
- 004636ec ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 004636ec ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 004636ec ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 00463a0c ["COPY", "tmp:0:8", ["const:638:8"]]
+ 00463a0c ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 00463a0c ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 00463a0c ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
- 00463710 ["COPY", "register:0:8", ["register:4048:8"]]
- 00463710 ["INT_ADD", "register:40f0:8", ["const:463710:8", "const:4:8"]]
- 00463710 ["CALLIND", null, ["register:0:8"]]
+ 00463a30 ["COPY", "register:0:8", ["register:4048:8"]]
+ 00463a30 ["INT_ADD", "register:40f0:8", ["const:463a30:8", "const:4:8"]]
+ 00463a30 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-99a7df74ba87a258ebaf7dc6b345e7ad"></a>

### [`004638c4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00463/004638c4.md) → [`00463be4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00463/00463be4.md) FUN_00463be4

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
      "definition_site": "00463bf0",
      "incomplete_value": false,
      "site": "00463bfc",
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
            "const:6b8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "004638d0",
      "incomplete_value": false,
      "site": "004638dc",
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
      "00463bfc",
      "DATA",
      [
        "storage",
        "00c646e8",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00463bfc",
      "DATA",
      [
        "storage",
        "00c656b8",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 004638cc ["COPY", "register:4050:8", ["const:c64000:8"]]
+ 00463bec ["COPY", "register:4050:8", ["const:c65000:8"]]
- 004638d0 ["COPY", "tmp:0:8", ["const:6e8:8"]]
- 004638d0 ["INT_CARRY", "register:105:1", ["register:4050:8", "tmp:0:8"]]
- 004638d0 ["INT_SCARRY", "register:106:1", ["register:4050:8", "tmp:0:8"]]
- 004638d0 ["INT_ADD", "tmp:1:8", ["register:4050:8", "tmp:0:8"]]
+ 00463bf0 ["COPY", "tmp:0:8", ["const:6b8:8"]]
+ 00463bf0 ["INT_CARRY", "register:105:1", ["register:4050:8", "tmp:0:8"]]
+ 00463bf0 ["INT_SCARRY", "register:106:1", ["register:4050:8", "tmp:0:8"]]
+ 00463bf0 ["INT_ADD", "tmp:1:8", ["register:4050:8", "tmp:0:8"]]
~~~


<a id="compare-e7dd9bf906ff0255c0d0b71973a5062f"></a>

### [`00463908`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00463/00463908.md) → [`00463c28`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00463/00463c28.md) FUN_00463c28

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 91.30% / 新版 91.30%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "00463c40",
      "incomplete_value": false,
      "site": "00463c4c",
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
            "const:6b8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00463920",
      "incomplete_value": false,
      "site": "0046392c",
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
      "00463c4c",
      "DATA",
      [
        "storage",
        "00c646e8",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00463c4c",
      "DATA",
      [
        "storage",
        "00c656b8",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 0046391c ["COPY", "register:4040:8", ["const:c64000:8"]]
+ 00463c3c ["COPY", "register:4040:8", ["const:c65000:8"]]
- 00463920 ["COPY", "tmp:0:8", ["const:6e8:8"]]
- 00463920 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00463920 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00463920 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00463c40 ["COPY", "tmp:0:8", ["const:6b8:8"]]
+ 00463c40 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00463c40 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00463c40 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 00463950 ["COPY", "register:0:8", ["register:4040:8"]]
- 00463950 ["INT_ADD", "register:40f0:8", ["const:463950:8", "const:4:8"]]
- 00463950 ["CALLIND", null, ["register:0:8"]]
+ 00463c70 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00463c70 ["INT_ADD", "register:40f0:8", ["const:463c70:8", "const:4:8"]]
+ 00463c70 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-9a7647949a9aa1d16befe3af551b4517"></a>

### [`00463964`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00463/00463964.md) → [`00463c84`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00463/00463c84.md) FUN_00463c84

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 93.10% / 新版 93.10%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "00463cb0",
      "incomplete_value": false,
      "site": "00463cb0",
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
            "const:6b8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00463990",
      "incomplete_value": false,
      "site": "00463990",
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
            "const:6e8:8"
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
      "00463cb0",
      "DATA",
      [
        "storage",
        "00c646e8",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00463cb0",
      "DATA",
      [
        "storage",
        "00c656b8",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00463978 ["INT_ADD", "register:40f0:8", ["const:463978:8", "const:4:8"]]
- 00463978 ["CALL", null, ["callee:00c58f30:8"]]
+ 00463c98 ["INT_ADD", "register:40f0:8", ["const:463c98:8", "const:4:8"]]
+ 00463c98 ["CALL", null, ["callee:00c58f30:8"]]
- 00463984 ["COPY", "register:4040:8", ["const:c64000:8"]]
+ 00463ca4 ["COPY", "register:4040:8", ["const:c65000:8"]]
- 00463988 ["COPY", "tmp:0:8", ["const:6e8:8"]]
- 00463988 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00463988 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00463988 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00463ca8 ["COPY", "tmp:0:8", ["const:6b8:8"]]
+ 00463ca8 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00463ca8 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00463ca8 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-d8e17ec20cac3585cbe49610012d2573"></a>

### [`004639ec`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00463/004639ec.md) → [`00463d0c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00463/00463d0c.md) FUN_00463d0c

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
      "definition_site": "00463d28",
      "incomplete_value": false,
      "site": "00463d28",
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
            "const:6b8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00463a08",
      "incomplete_value": false,
      "site": "00463a08",
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
      "00463d28",
      "DATA",
      [
        "storage",
        "00c646e8",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00463d28",
      "DATA",
      [
        "storage",
        "00c656b8",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00463a00 ["COPY", "register:4048:8", ["const:c64000:8"]]
+ 00463d20 ["COPY", "register:4048:8", ["const:c65000:8"]]
- 00463a04 ["COPY", "tmp:0:8", ["const:6e8:8"]]
- 00463a04 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 00463a04 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 00463a04 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 00463d24 ["COPY", "tmp:0:8", ["const:6b8:8"]]
+ 00463d24 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 00463d24 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 00463d24 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
- 00463a28 ["COPY", "register:0:8", ["register:4048:8"]]
- 00463a28 ["INT_ADD", "register:40f0:8", ["const:463a28:8", "const:4:8"]]
- 00463a28 ["CALLIND", null, ["register:0:8"]]
+ 00463d48 ["COPY", "register:0:8", ["register:4048:8"]]
+ 00463d48 ["INT_ADD", "register:40f0:8", ["const:463d48:8", "const:4:8"]]
+ 00463d48 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-cde4b8cc25a1a4f463b4287fa66b0bde"></a>

### [`00463b84`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00463/00463b84.md) → [`00463ea4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00463/00463ea4.md) FUN_00463ea4

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
      "definition_site": "00463eb0",
      "incomplete_value": false,
      "site": "00463ebc",
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
            "const:738:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00463b90",
      "incomplete_value": false,
      "site": "00463b9c",
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
      "00463ebc",
      "DATA",
      [
        "storage",
        "00c64768",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00463ebc",
      "DATA",
      [
        "storage",
        "00c65738",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00463b8c ["COPY", "register:4050:8", ["const:c64000:8"]]
+ 00463eac ["COPY", "register:4050:8", ["const:c65000:8"]]
- 00463b90 ["COPY", "tmp:0:8", ["const:768:8"]]
- 00463b90 ["INT_CARRY", "register:105:1", ["register:4050:8", "tmp:0:8"]]
- 00463b90 ["INT_SCARRY", "register:106:1", ["register:4050:8", "tmp:0:8"]]
- 00463b90 ["INT_ADD", "tmp:1:8", ["register:4050:8", "tmp:0:8"]]
+ 00463eb0 ["COPY", "tmp:0:8", ["const:738:8"]]
+ 00463eb0 ["INT_CARRY", "register:105:1", ["register:4050:8", "tmp:0:8"]]
+ 00463eb0 ["INT_SCARRY", "register:106:1", ["register:4050:8", "tmp:0:8"]]
+ 00463eb0 ["INT_ADD", "tmp:1:8", ["register:4050:8", "tmp:0:8"]]
~~~


<a id="compare-097307a59638d8d2c8f58604b504299c"></a>

### [`00463bc8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00463/00463bc8.md) → [`00463ee8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00463/00463ee8.md) FUN_00463ee8

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 91.30% / 新版 91.30%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "00463f00",
      "incomplete_value": false,
      "site": "00463f0c",
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
            "const:738:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00463be0",
      "incomplete_value": false,
      "site": "00463bec",
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
      "00463f0c",
      "DATA",
      [
        "storage",
        "00c64768",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00463f0c",
      "DATA",
      [
        "storage",
        "00c65738",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00463bdc ["COPY", "register:4040:8", ["const:c64000:8"]]
+ 00463efc ["COPY", "register:4040:8", ["const:c65000:8"]]
- 00463be0 ["COPY", "tmp:0:8", ["const:768:8"]]
- 00463be0 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00463be0 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00463be0 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00463f00 ["COPY", "tmp:0:8", ["const:738:8"]]
+ 00463f00 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00463f00 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00463f00 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 00463c10 ["COPY", "register:0:8", ["register:4040:8"]]
- 00463c10 ["INT_ADD", "register:40f0:8", ["const:463c10:8", "const:4:8"]]
- 00463c10 ["CALLIND", null, ["register:0:8"]]
+ 00463f30 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00463f30 ["INT_ADD", "register:40f0:8", ["const:463f30:8", "const:4:8"]]
+ 00463f30 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-debdc292fbfd007a3fcf7ae72803c4e7"></a>

### [`00463c24`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00463/00463c24.md) → [`00463f44`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00463/00463f44.md) FUN_00463f44

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 93.10% / 新版 93.10%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "00463f70",
      "incomplete_value": false,
      "site": "00463f70",
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
            "const:738:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00463c50",
      "incomplete_value": false,
      "site": "00463c50",
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
            "const:768:8"
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
      "00463f70",
      "DATA",
      [
        "storage",
        "00c64768",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00463f70",
      "DATA",
      [
        "storage",
        "00c65738",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00463c38 ["INT_ADD", "register:40f0:8", ["const:463c38:8", "const:4:8"]]
- 00463c38 ["CALL", null, ["callee:00c58f30:8"]]
+ 00463f58 ["INT_ADD", "register:40f0:8", ["const:463f58:8", "const:4:8"]]
+ 00463f58 ["CALL", null, ["callee:00c58f30:8"]]
- 00463c44 ["COPY", "register:4040:8", ["const:c64000:8"]]
+ 00463f64 ["COPY", "register:4040:8", ["const:c65000:8"]]
- 00463c48 ["COPY", "tmp:0:8", ["const:768:8"]]
- 00463c48 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00463c48 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00463c48 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00463f68 ["COPY", "tmp:0:8", ["const:738:8"]]
+ 00463f68 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00463f68 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00463f68 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-1fb3670906746cac93eec91c7ef0bb62"></a>

### [`00463cac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00463/00463cac.md) → [`00463fcc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00463/00463fcc.md) FUN_00463fcc

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
      "definition_site": "00463fe8",
      "incomplete_value": false,
      "site": "00463fe8",
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
            "const:738:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00463cc8",
      "incomplete_value": false,
      "site": "00463cc8",
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
      "00463fe8",
      "DATA",
      [
        "storage",
        "00c64768",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00463fe8",
      "DATA",
      [
        "storage",
        "00c65738",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00463cc0 ["COPY", "register:4048:8", ["const:c64000:8"]]
+ 00463fe0 ["COPY", "register:4048:8", ["const:c65000:8"]]
- 00463cc4 ["COPY", "tmp:0:8", ["const:768:8"]]
- 00463cc4 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 00463cc4 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 00463cc4 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 00463fe4 ["COPY", "tmp:0:8", ["const:738:8"]]
+ 00463fe4 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 00463fe4 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 00463fe4 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
- 00463ce8 ["COPY", "register:0:8", ["register:4048:8"]]
- 00463ce8 ["INT_ADD", "register:40f0:8", ["const:463ce8:8", "const:4:8"]]
- 00463ce8 ["CALLIND", null, ["register:0:8"]]
+ 00464008 ["COPY", "register:0:8", ["register:4048:8"]]
+ 00464008 ["INT_ADD", "register:40f0:8", ["const:464008:8", "const:4:8"]]
+ 00464008 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-fd4cc560b0055a7699440748d91a5842"></a>

### [`00463e44`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00463/00463e44.md) → [`00464164`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00464/00464164.md) FUN_00464164

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
      "definition_site": "00464170",
      "incomplete_value": false,
      "site": "0046417c",
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
            "const:7b8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00463e50",
      "incomplete_value": false,
      "site": "00463e5c",
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
      "0046417c",
      "DATA",
      [
        "storage",
        "00c647e8",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "0046417c",
      "DATA",
      [
        "storage",
        "00c657b8",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00463e4c ["COPY", "register:4050:8", ["const:c64000:8"]]
+ 0046416c ["COPY", "register:4050:8", ["const:c65000:8"]]
- 00463e50 ["COPY", "tmp:0:8", ["const:7e8:8"]]
- 00463e50 ["INT_CARRY", "register:105:1", ["register:4050:8", "tmp:0:8"]]
- 00463e50 ["INT_SCARRY", "register:106:1", ["register:4050:8", "tmp:0:8"]]
- 00463e50 ["INT_ADD", "tmp:1:8", ["register:4050:8", "tmp:0:8"]]
+ 00464170 ["COPY", "tmp:0:8", ["const:7b8:8"]]
+ 00464170 ["INT_CARRY", "register:105:1", ["register:4050:8", "tmp:0:8"]]
+ 00464170 ["INT_SCARRY", "register:106:1", ["register:4050:8", "tmp:0:8"]]
+ 00464170 ["INT_ADD", "tmp:1:8", ["register:4050:8", "tmp:0:8"]]
~~~


<a id="compare-ea796cde7b761382293c4aaba91bff12"></a>

### [`00463e88`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00463/00463e88.md) → [`004641a8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00464/004641a8.md) FUN_004641a8

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 91.30% / 新版 91.30%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "004641c0",
      "incomplete_value": false,
      "site": "004641cc",
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
            "const:7b8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00463ea0",
      "incomplete_value": false,
      "site": "00463eac",
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
      "004641cc",
      "DATA",
      [
        "storage",
        "00c647e8",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "004641cc",
      "DATA",
      [
        "storage",
        "00c657b8",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00463e9c ["COPY", "register:4040:8", ["const:c64000:8"]]
+ 004641bc ["COPY", "register:4040:8", ["const:c65000:8"]]
- 00463ea0 ["COPY", "tmp:0:8", ["const:7e8:8"]]
- 00463ea0 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00463ea0 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00463ea0 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 004641c0 ["COPY", "tmp:0:8", ["const:7b8:8"]]
+ 004641c0 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 004641c0 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 004641c0 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 00463ed0 ["COPY", "register:0:8", ["register:4040:8"]]
- 00463ed0 ["INT_ADD", "register:40f0:8", ["const:463ed0:8", "const:4:8"]]
- 00463ed0 ["CALLIND", null, ["register:0:8"]]
+ 004641f0 ["COPY", "register:0:8", ["register:4040:8"]]
+ 004641f0 ["INT_ADD", "register:40f0:8", ["const:4641f0:8", "const:4:8"]]
+ 004641f0 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-e3714aad9e695625b59676fa36f9d201"></a>

### [`00463ee4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00463/00463ee4.md) → [`00464204`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00464/00464204.md) FUN_00464204

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 93.10% / 新版 93.10%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "00464230",
      "incomplete_value": false,
      "site": "00464230",
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
            "const:7b8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00463f10",
      "incomplete_value": false,
      "site": "00463f10",
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
            "const:7e8:8"
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
      "00464230",
      "DATA",
      [
        "storage",
        "00c647e8",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00464230",
      "DATA",
      [
        "storage",
        "00c657b8",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00463ef8 ["INT_ADD", "register:40f0:8", ["const:463ef8:8", "const:4:8"]]
- 00463ef8 ["CALL", null, ["callee:00c58f30:8"]]
+ 00464218 ["INT_ADD", "register:40f0:8", ["const:464218:8", "const:4:8"]]
+ 00464218 ["CALL", null, ["callee:00c58f30:8"]]
- 00463f04 ["COPY", "register:4040:8", ["const:c64000:8"]]
+ 00464224 ["COPY", "register:4040:8", ["const:c65000:8"]]
- 00463f08 ["COPY", "tmp:0:8", ["const:7e8:8"]]
- 00463f08 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00463f08 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00463f08 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00464228 ["COPY", "tmp:0:8", ["const:7b8:8"]]
+ 00464228 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00464228 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00464228 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-f75f7c5881780d5d5a39b6bffbc5fc36"></a>

### [`00463f6c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00463/00463f6c.md) → [`0046428c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00464/0046428c.md) FUN_0046428c

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
      "definition_site": "004642a8",
      "incomplete_value": false,
      "site": "004642a8",
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
            "const:7b8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00463f88",
      "incomplete_value": false,
      "site": "00463f88",
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
      "004642a8",
      "DATA",
      [
        "storage",
        "00c647e8",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "004642a8",
      "DATA",
      [
        "storage",
        "00c657b8",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00463f80 ["COPY", "register:4048:8", ["const:c64000:8"]]
+ 004642a0 ["COPY", "register:4048:8", ["const:c65000:8"]]
- 00463f84 ["COPY", "tmp:0:8", ["const:7e8:8"]]
- 00463f84 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 00463f84 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 00463f84 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 004642a4 ["COPY", "tmp:0:8", ["const:7b8:8"]]
+ 004642a4 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 004642a4 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 004642a4 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
- 00463fa8 ["COPY", "register:0:8", ["register:4048:8"]]
- 00463fa8 ["INT_ADD", "register:40f0:8", ["const:463fa8:8", "const:4:8"]]
- 00463fa8 ["CALLIND", null, ["register:0:8"]]
+ 004642c8 ["COPY", "register:0:8", ["register:4048:8"]]
+ 004642c8 ["INT_ADD", "register:40f0:8", ["const:4642c8:8", "const:4:8"]]
+ 004642c8 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-3029394234886236b54bca36a44339b0"></a>

### [`00464068`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00464/00464068.md) → [`00464388`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00464/00464388.md) FUN_00464388

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 7件 [`004410cc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00441/004410cc.md) [`00459db4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00459/00459db4.md) [`00461ac0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00461/00461ac0.md) [`004647dc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00464/004647dc.md) [`004648b8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00464/004648b8.md)
- 新版 呼出元 0件  · 呼出先 7件 [`004413ec`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00441/004413ec.md) [`0045a0d4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0045a/0045a0d4.md) [`00461de0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00461/00461de0.md) [`00464afc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00464/00464afc.md) [`00464bd8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00464/00464bd8.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 95.54% / 新版 95.54%

優先判定に残った影響 `store_value` 7件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00464660",
      "incomplete_value": true,
      "site": "00464660",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:bb0:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00464340",
      "incomplete_value": true,
      "site": "00464340",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:a58:8"
              ]
            ]
          ]
        ]
      ]
    },
    "ordinal": 60,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00464654",
      "incomplete_value": true,
      "site": "00464664",
      "value": [
        "LOAD",
        "8",
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
      "definition_site": "00464334",
      "incomplete_value": true,
      "site": "00464344",
      "value": [
        "LOAD",
        "8",
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
    "ordinal": 61,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "004646ec",
      "incomplete_value": true,
      "site": "004646f8",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:75b:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "004643cc",
      "incomplete_value": true,
      "site": "004643d8",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:603:8"
              ]
            ]
          ]
        ]
      ]
    },
    "ordinal": 70,
    "slot": 2
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "00464650",
      "READ",
      [
        "storage",
        "002a8a58",
        null,
        "string"
      ]
    ],
    [
      "00464654",
      "READ",
      [
        "storage",
        "002a8a5f",
        null,
        "string"
      ]
    ],
    [
      "004646ec",
      "READ",
      [
        "storage",
        "002a7603",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "00464650",
      "READ",
      [
        "storage",
        "002a8bb0",
        null,
        "string"
      ]
    ],
    [
      "00464654",
      "READ",
      [
        "storage",
        "002a8bb7",
        null,
        "string"
      ]
    ],
    [
      "004646ec",
      "READ",
      [
        "storage",
        "002a775b",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 004640d0 ["INT_ADD", "register:40f0:8", ["const:4640d0:8", "const:4:8"]]
- 004640d0 ["CALL", null, ["callee:004413ec:8"]]
+ 004643f0 ["INT_ADD", "register:40f0:8", ["const:4643f0:8", "const:4:8"]]
+ 004643f0 ["CALL", null, ["callee:004413ec:8"]]
- 004640fc ["INT_ADD", "register:40f0:8", ["const:4640fc:8", "const:4:8"]]
- 004640fc ["CALL", null, ["callee:00c58f50:8"]]
+ 0046441c ["INT_ADD", "register:40f0:8", ["const:46441c:8", "const:4:8"]]
+ 0046441c ["CALL", null, ["callee:00c58f50:8"]]
- 00464140 ["INT_ADD", "register:40f0:8", ["const:464140:8", "const:4:8"]]
- 00464140 ["CALL", null, ["callee:004413ec:8"]]
+ 00464460 ["INT_ADD", "register:40f0:8", ["const:464460:8", "const:4:8"]]
+ 00464460 ["CALL", null, ["callee:004413ec:8"]]
~~~


<a id="compare-db73891b08afb11971e9e1b88fe298b8"></a>

### [`00464b48`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00464/00464b48.md) → [`00464e68`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00464/00464e68.md) FUN_00464e68

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
      "definition_site": "00464e74",
      "incomplete_value": false,
      "site": "00464e80",
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
            "const:838:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00464b54",
      "incomplete_value": false,
      "site": "00464b60",
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
      "00464e80",
      "DATA",
      [
        "storage",
        "00c64868",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00464e80",
      "DATA",
      [
        "storage",
        "00c65838",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00464b50 ["COPY", "register:4050:8", ["const:c64000:8"]]
+ 00464e70 ["COPY", "register:4050:8", ["const:c65000:8"]]
- 00464b54 ["COPY", "tmp:0:8", ["const:868:8"]]
- 00464b54 ["INT_CARRY", "register:105:1", ["register:4050:8", "tmp:0:8"]]
- 00464b54 ["INT_SCARRY", "register:106:1", ["register:4050:8", "tmp:0:8"]]
- 00464b54 ["INT_ADD", "tmp:1:8", ["register:4050:8", "tmp:0:8"]]
+ 00464e74 ["COPY", "tmp:0:8", ["const:838:8"]]
+ 00464e74 ["INT_CARRY", "register:105:1", ["register:4050:8", "tmp:0:8"]]
+ 00464e74 ["INT_SCARRY", "register:106:1", ["register:4050:8", "tmp:0:8"]]
+ 00464e74 ["INT_ADD", "tmp:1:8", ["register:4050:8", "tmp:0:8"]]
~~~


<a id="compare-36e127d796ea5dcf7eb0ed9c8ec1dc14"></a>

### [`00464b8c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00464/00464b8c.md) → [`00464eac`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00464/00464eac.md) FUN_00464eac

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 91.30% / 新版 91.30%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "00464ec4",
      "incomplete_value": false,
      "site": "00464ed0",
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
            "const:838:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00464ba4",
      "incomplete_value": false,
      "site": "00464bb0",
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
      "00464ed0",
      "DATA",
      [
        "storage",
        "00c64868",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00464ed0",
      "DATA",
      [
        "storage",
        "00c65838",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00464ba0 ["COPY", "register:4040:8", ["const:c64000:8"]]
+ 00464ec0 ["COPY", "register:4040:8", ["const:c65000:8"]]
- 00464ba4 ["COPY", "tmp:0:8", ["const:868:8"]]
- 00464ba4 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00464ba4 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00464ba4 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00464ec4 ["COPY", "tmp:0:8", ["const:838:8"]]
+ 00464ec4 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00464ec4 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00464ec4 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 00464bd4 ["COPY", "register:0:8", ["register:4040:8"]]
- 00464bd4 ["INT_ADD", "register:40f0:8", ["const:464bd4:8", "const:4:8"]]
- 00464bd4 ["CALLIND", null, ["register:0:8"]]
+ 00464ef4 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00464ef4 ["INT_ADD", "register:40f0:8", ["const:464ef4:8", "const:4:8"]]
+ 00464ef4 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-73aee97746d3145f98f0eb1150d486ba"></a>

### [`00464be8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00464/00464be8.md) → [`00464f08`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00464/00464f08.md) FUN_00464f08

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 93.10% / 新版 93.10%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "00464f34",
      "incomplete_value": false,
      "site": "00464f34",
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
            "const:838:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00464c14",
      "incomplete_value": false,
      "site": "00464c14",
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
            "const:868:8"
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
      "00464f34",
      "DATA",
      [
        "storage",
        "00c64868",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00464f34",
      "DATA",
      [
        "storage",
        "00c65838",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00464bfc ["INT_ADD", "register:40f0:8", ["const:464bfc:8", "const:4:8"]]
- 00464bfc ["CALL", null, ["callee:00c58f30:8"]]
+ 00464f1c ["INT_ADD", "register:40f0:8", ["const:464f1c:8", "const:4:8"]]
+ 00464f1c ["CALL", null, ["callee:00c58f30:8"]]
- 00464c08 ["COPY", "register:4040:8", ["const:c64000:8"]]
+ 00464f28 ["COPY", "register:4040:8", ["const:c65000:8"]]
- 00464c0c ["COPY", "tmp:0:8", ["const:868:8"]]
- 00464c0c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00464c0c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00464c0c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00464f2c ["COPY", "tmp:0:8", ["const:838:8"]]
+ 00464f2c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00464f2c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00464f2c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-d5cf36f0dfdf0cd9d3252bfcf51df6f3"></a>

### [`00464c70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00464/00464c70.md) → [`00464f90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00464/00464f90.md) FUN_00464f90

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
      "definition_site": "00464fac",
      "incomplete_value": false,
      "site": "00464fac",
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
            "const:838:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00464c8c",
      "incomplete_value": false,
      "site": "00464c8c",
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
      "00464fac",
      "DATA",
      [
        "storage",
        "00c64868",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00464fac",
      "DATA",
      [
        "storage",
        "00c65838",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00464c84 ["COPY", "register:4048:8", ["const:c64000:8"]]
+ 00464fa4 ["COPY", "register:4048:8", ["const:c65000:8"]]
- 00464c88 ["COPY", "tmp:0:8", ["const:868:8"]]
- 00464c88 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 00464c88 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 00464c88 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 00464fa8 ["COPY", "tmp:0:8", ["const:838:8"]]
+ 00464fa8 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 00464fa8 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 00464fa8 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
- 00464cac ["COPY", "register:0:8", ["register:4048:8"]]
- 00464cac ["INT_ADD", "register:40f0:8", ["const:464cac:8", "const:4:8"]]
- 00464cac ["CALLIND", null, ["register:0:8"]]
+ 00464fcc ["COPY", "register:0:8", ["register:4048:8"]]
+ 00464fcc ["INT_ADD", "register:40f0:8", ["const:464fcc:8", "const:4:8"]]
+ 00464fcc ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-c767878a3f466efcac6a6ec76744979b"></a>

### [`00464e50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00464/00464e50.md) → [`00465170`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00465/00465170.md) FUN_00465170

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
      "definition_site": "0046517c",
      "incomplete_value": false,
      "site": "00465188",
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
            "const:8b8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00464e5c",
      "incomplete_value": false,
      "site": "00464e68",
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
            "const:8e8:8"
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
      "00465188",
      "DATA",
      [
        "storage",
        "00c648e8",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00465188",
      "DATA",
      [
        "storage",
        "00c658b8",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00464e58 ["COPY", "register:4050:8", ["const:c64000:8"]]
+ 00465178 ["COPY", "register:4050:8", ["const:c65000:8"]]
- 00464e5c ["COPY", "tmp:0:8", ["const:8e8:8"]]
- 00464e5c ["INT_CARRY", "register:105:1", ["register:4050:8", "tmp:0:8"]]
- 00464e5c ["INT_SCARRY", "register:106:1", ["register:4050:8", "tmp:0:8"]]
- 00464e5c ["INT_ADD", "tmp:1:8", ["register:4050:8", "tmp:0:8"]]
+ 0046517c ["COPY", "tmp:0:8", ["const:8b8:8"]]
+ 0046517c ["INT_CARRY", "register:105:1", ["register:4050:8", "tmp:0:8"]]
+ 0046517c ["INT_SCARRY", "register:106:1", ["register:4050:8", "tmp:0:8"]]
+ 0046517c ["INT_ADD", "tmp:1:8", ["register:4050:8", "tmp:0:8"]]
~~~


<a id="compare-dd43cad58f3a3a7fd1a7029a2bed8ad4"></a>

### [`00464e94`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00464/00464e94.md) → [`004651b4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00465/004651b4.md) FUN_004651b4

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 91.30% / 新版 91.30%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "004651cc",
      "incomplete_value": false,
      "site": "004651d8",
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
            "const:8b8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00464eac",
      "incomplete_value": false,
      "site": "00464eb8",
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
      "004651d8",
      "DATA",
      [
        "storage",
        "00c648e8",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "004651d8",
      "DATA",
      [
        "storage",
        "00c658b8",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00464ea8 ["COPY", "register:4040:8", ["const:c64000:8"]]
+ 004651c8 ["COPY", "register:4040:8", ["const:c65000:8"]]
- 00464eac ["COPY", "tmp:0:8", ["const:8e8:8"]]
- 00464eac ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00464eac ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00464eac ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 004651cc ["COPY", "tmp:0:8", ["const:8b8:8"]]
+ 004651cc ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 004651cc ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 004651cc ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 00464edc ["COPY", "register:0:8", ["register:4040:8"]]
- 00464edc ["INT_ADD", "register:40f0:8", ["const:464edc:8", "const:4:8"]]
- 00464edc ["CALLIND", null, ["register:0:8"]]
+ 004651fc ["COPY", "register:0:8", ["register:4040:8"]]
+ 004651fc ["INT_ADD", "register:40f0:8", ["const:4651fc:8", "const:4:8"]]
+ 004651fc ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-32ee33f6bceb1c7bd698709271c0a282"></a>

### [`00464ef0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00464/00464ef0.md) → [`00465210`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00465/00465210.md) FUN_00465210

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 93.10% / 新版 93.10%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "0046523c",
      "incomplete_value": false,
      "site": "0046523c",
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
            "const:8b8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00464f1c",
      "incomplete_value": false,
      "site": "00464f1c",
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
            "const:8e8:8"
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
      "0046523c",
      "DATA",
      [
        "storage",
        "00c648e8",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "0046523c",
      "DATA",
      [
        "storage",
        "00c658b8",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00464f04 ["INT_ADD", "register:40f0:8", ["const:464f04:8", "const:4:8"]]
- 00464f04 ["CALL", null, ["callee:00c58f30:8"]]
+ 00465224 ["INT_ADD", "register:40f0:8", ["const:465224:8", "const:4:8"]]
+ 00465224 ["CALL", null, ["callee:00c58f30:8"]]
- 00464f10 ["COPY", "register:4040:8", ["const:c64000:8"]]
+ 00465230 ["COPY", "register:4040:8", ["const:c65000:8"]]
- 00464f14 ["COPY", "tmp:0:8", ["const:8e8:8"]]
- 00464f14 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00464f14 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00464f14 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00465234 ["COPY", "tmp:0:8", ["const:8b8:8"]]
+ 00465234 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00465234 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00465234 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-e140be3e139aeefb11de75ddbe778cee"></a>

### [`00464f78`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00464/00464f78.md) → [`00465298`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00465/00465298.md) FUN_00465298

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
      "definition_site": "004652b4",
      "incomplete_value": false,
      "site": "004652b4",
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
            "const:8b8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00464f94",
      "incomplete_value": false,
      "site": "00464f94",
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
      "004652b4",
      "DATA",
      [
        "storage",
        "00c648e8",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "004652b4",
      "DATA",
      [
        "storage",
        "00c658b8",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00464f8c ["COPY", "register:4048:8", ["const:c64000:8"]]
+ 004652ac ["COPY", "register:4048:8", ["const:c65000:8"]]
- 00464f90 ["COPY", "tmp:0:8", ["const:8e8:8"]]
- 00464f90 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 00464f90 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 00464f90 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 004652b0 ["COPY", "tmp:0:8", ["const:8b8:8"]]
+ 004652b0 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 004652b0 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 004652b0 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
- 00464fb4 ["COPY", "register:0:8", ["register:4048:8"]]
- 00464fb4 ["INT_ADD", "register:40f0:8", ["const:464fb4:8", "const:4:8"]]
- 00464fb4 ["CALLIND", null, ["register:0:8"]]
+ 004652d4 ["COPY", "register:0:8", ["register:4048:8"]]
+ 004652d4 ["INT_ADD", "register:40f0:8", ["const:4652d4:8", "const:4:8"]]
+ 004652d4 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-92f447fa13aab7d9a46ad49d466523f6"></a>

### [`00465150`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00465/00465150.md) → [`00465470`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00465/00465470.md) FUN_00465470

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
      "definition_site": "00465484",
      "incomplete_value": false,
      "site": "00465488",
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
            "const:938:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00465164",
      "incomplete_value": false,
      "site": "00465168",
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
            "const:968:8"
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
      "00465488",
      "DATA",
      [
        "storage",
        "00c64968",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00465488",
      "DATA",
      [
        "storage",
        "00c65938",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 0046515c ["INT_ADD", "register:40f0:8", ["const:46515c:8", "const:4:8"]]
- 0046515c ["CALL", null, ["callee:00c58f30:8"]]
+ 0046547c ["INT_ADD", "register:40f0:8", ["const:46547c:8", "const:4:8"]]
+ 0046547c ["CALL", null, ["callee:00c58f30:8"]]
- 00465160 ["COPY", "register:4040:8", ["const:c64000:8"]]
+ 00465480 ["COPY", "register:4040:8", ["const:c65000:8"]]
- 00465164 ["COPY", "tmp:0:8", ["const:968:8"]]
- 00465164 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00465164 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00465164 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00465484 ["COPY", "tmp:0:8", ["const:938:8"]]
+ 00465484 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00465484 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00465484 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-98f30d578efa38fb2febeb799b6049d6"></a>

### [`00465174`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00465/00465174.md) → [`00465494`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00465/00465494.md) FUN_00465494

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
      "definition_site": "00465498",
      "incomplete_value": false,
      "site": "0046549c",
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
            "const:938:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00465178",
      "incomplete_value": false,
      "site": "0046517c",
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
            "const:968:8"
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
      "0046549c",
      "DATA",
      [
        "storage",
        "00c64968",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "0046549c",
      "DATA",
      [
        "storage",
        "00c65938",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00465174 ["COPY", "register:4040:8", ["const:c64000:8"]]
+ 00465494 ["COPY", "register:4040:8", ["const:c65000:8"]]
- 00465178 ["COPY", "tmp:0:8", ["const:968:8"]]
- 00465178 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00465178 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00465178 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00465498 ["COPY", "tmp:0:8", ["const:938:8"]]
+ 00465498 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00465498 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00465498 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-1439131bc313c2ad53a4209a99a9b480"></a>

### [`0046518c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00465/0046518c.md) → [`004654ac`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00465/004654ac.md) FUN_004654ac

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c57f20`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f20.md) [`00c57f40`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f40.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c58ef0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58ef0.md) [`00c58f10`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f10.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 80.00% / 新版 80.00%

優先判定に残った影響 `call_argument_candidate` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "004654e0",
      "incomplete_value": false,
      "site": "004654e4",
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
            "const:b60:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "004651c0",
      "incomplete_value": false,
      "site": "004651c4",
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
            "const:ba0:8"
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
      "definition_site": "004654f0",
      "incomplete_value": false,
      "site": "004654f4",
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
            "const:b60:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "004651d0",
      "incomplete_value": false,
      "site": "004651d4",
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
            "const:ba0:8"
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
      "004654bc",
      "READ",
      [
        "storage",
        "00ca4ba0",
        null,
        "undefined1"
      ]
    ],
    [
      "004654c8",
      "READ",
      [
        "storage",
        "00ca4b98",
        null,
        "undefined8"
      ]
    ],
    [
      "004654e0",
      "PARAM",
      [
        "storage",
        "00ca4ba0",
        null,
        "undefined1"
      ]
    ]
  ],
  "added": [
    [
      "004654bc",
      "READ",
      [
        "storage",
        "00ca5b60",
        null,
        "undefined1"
      ]
    ],
    [
      "004654c8",
      "READ",
      [
        "storage",
        "00ca5b58",
        null,
        "undefined8"
      ]
    ],
    [
      "004654e0",
      "PARAM",
      [
        "storage",
        "00ca5b60",
        null,
        "undefined1"
      ]
    ]
  ]
}
~~~


~~~diff
- 004651c4 ["INT_ADD", "register:40f0:8", ["const:4651c4:8", "const:4:8"]]
- 004651c4 ["CALL", null, ["callee:00c58ef0:8"]]
+ 004654e4 ["INT_ADD", "register:40f0:8", ["const:4654e4:8", "const:4:8"]]
+ 004654e4 ["CALL", null, ["callee:00c58ef0:8"]]
- 004651d4 ["INT_ADD", "register:40f0:8", ["const:4651d4:8", "const:4:8"]]
- 004651d4 ["CALL", null, ["callee:00c58f10:8"]]
+ 004654f4 ["INT_ADD", "register:40f0:8", ["const:4654f4:8", "const:4:8"]]
+ 004654f4 ["CALL", null, ["callee:00c58f10:8"]]
- 00465194 ["COPY", "register:4040:8", ["const:ca4000:8"]]
+ 004654b4 ["COPY", "register:4040:8", ["const:ca5000:8"]]
~~~


<a id="compare-97adfc04d8ee090649960d66d0b7a413"></a>

### [`00465208`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00465/00465208.md) → [`00465528`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00465/00465528.md) FUN_00465528

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
      "definition_site": "0046553c",
      "incomplete_value": false,
      "site": "00465540",
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
            "const:9b8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0046521c",
      "incomplete_value": false,
      "site": "00465220",
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
      "00465540",
      "DATA",
      [
        "storage",
        "00c649e8",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00465540",
      "DATA",
      [
        "storage",
        "00c659b8",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00465214 ["INT_ADD", "register:40f0:8", ["const:465214:8", "const:4:8"]]
- 00465214 ["CALL", null, ["callee:00c58f30:8"]]
+ 00465534 ["INT_ADD", "register:40f0:8", ["const:465534:8", "const:4:8"]]
+ 00465534 ["CALL", null, ["callee:00c58f30:8"]]
- 00465218 ["COPY", "register:4040:8", ["const:c64000:8"]]
+ 00465538 ["COPY", "register:4040:8", ["const:c65000:8"]]
- 0046521c ["COPY", "tmp:0:8", ["const:9e8:8"]]
- 0046521c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 0046521c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 0046521c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 0046553c ["COPY", "tmp:0:8", ["const:9b8:8"]]
+ 0046553c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 0046553c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 0046553c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-02aef959222d32cca28f3cc2ce068b78"></a>

### [`0046522c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00465/0046522c.md) → [`0046554c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00465/0046554c.md) FUN_0046554c

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
      "definition_site": "00465550",
      "incomplete_value": false,
      "site": "00465554",
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
            "const:9b8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00465230",
      "incomplete_value": false,
      "site": "00465234",
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
      "00465554",
      "DATA",
      [
        "storage",
        "00c649e8",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00465554",
      "DATA",
      [
        "storage",
        "00c659b8",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 0046522c ["COPY", "register:4040:8", ["const:c64000:8"]]
+ 0046554c ["COPY", "register:4040:8", ["const:c65000:8"]]
- 00465230 ["COPY", "tmp:0:8", ["const:9e8:8"]]
- 00465230 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00465230 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00465230 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00465550 ["COPY", "tmp:0:8", ["const:9b8:8"]]
+ 00465550 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00465550 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00465550 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-00eb764547f42372b8f8bbbca4646d84"></a>

### [`00465244`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00465/00465244.md) → [`00465564`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00465/00465564.md) FUN_00465564

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c57f20`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f20.md) [`00c57f40`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f40.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c58ef0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58ef0.md) [`00c58f10`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f10.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 84.62% / 新版 84.62%

優先判定に残った影響 `call_argument_candidate` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "004655a4",
      "incomplete_value": false,
      "site": "004655ac",
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
            "const:b60:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00465284",
      "incomplete_value": false,
      "site": "0046528c",
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
            "const:ba0:8"
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
      "definition_site": "004655bc",
      "incomplete_value": false,
      "site": "004655c0",
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
            "const:b60:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0046529c",
      "incomplete_value": false,
      "site": "004652a0",
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
            "const:ba0:8"
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
      "0046557c",
      "READ",
      [
        "storage",
        "00ca4ba0",
        null,
        "undefined1"
      ]
    ],
    [
      "00465588",
      "READ",
      [
        "storage",
        "00ca4b98",
        null,
        "undefined8"
      ]
    ],
    [
      "004655a4",
      "PARAM",
      [
        "storage",
        "00ca4ba0",
        null,
        "undefined1"
      ]
    ]
  ],
  "added": [
    [
      "0046557c",
      "READ",
      [
        "storage",
        "00ca5b60",
        null,
        "undefined1"
      ]
    ],
    [
      "00465588",
      "READ",
      [
        "storage",
        "00ca5b58",
        null,
        "undefined8"
      ]
    ],
    [
      "004655a4",
      "PARAM",
      [
        "storage",
        "00ca5b60",
        null,
        "undefined1"
      ]
    ]
  ]
}
~~~


~~~diff
- 0046528c ["INT_ADD", "register:40f0:8", ["const:46528c:8", "const:4:8"]]
- 0046528c ["CALL", null, ["callee:00c58ef0:8"]]
+ 004655ac ["INT_ADD", "register:40f0:8", ["const:4655ac:8", "const:4:8"]]
+ 004655ac ["CALL", null, ["callee:00c58ef0:8"]]
- 004652a0 ["INT_ADD", "register:40f0:8", ["const:4652a0:8", "const:4:8"]]
- 004652a0 ["CALL", null, ["callee:00c58f10:8"]]
+ 004655c0 ["INT_ADD", "register:40f0:8", ["const:4655c0:8", "const:4:8"]]
+ 004655c0 ["CALL", null, ["callee:00c58f10:8"]]
- 00465250 ["COPY", "register:4040:8", ["const:ca4000:8"]]
+ 00465570 ["COPY", "register:4040:8", ["const:ca5000:8"]]
~~~


<a id="compare-a1f00f76e877bc2cb6bdc0e53994022a"></a>

### [`004652d8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00465/004652d8.md) → [`004655f8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00465/004655f8.md) FUN_004655f8

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
      "definition_site": "0046560c",
      "incomplete_value": false,
      "site": "00465610",
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
            "const:a38:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "004652ec",
      "incomplete_value": false,
      "site": "004652f0",
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
            "const:a68:8"
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
      "00465610",
      "DATA",
      [
        "storage",
        "00c64a68",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00465610",
      "DATA",
      [
        "storage",
        "00c65a38",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 004652e4 ["INT_ADD", "register:40f0:8", ["const:4652e4:8", "const:4:8"]]
- 004652e4 ["CALL", null, ["callee:00c58f30:8"]]
+ 00465604 ["INT_ADD", "register:40f0:8", ["const:465604:8", "const:4:8"]]
+ 00465604 ["CALL", null, ["callee:00c58f30:8"]]
- 004652e8 ["COPY", "register:4040:8", ["const:c64000:8"]]
+ 00465608 ["COPY", "register:4040:8", ["const:c65000:8"]]
- 004652ec ["COPY", "tmp:0:8", ["const:a68:8"]]
- 004652ec ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 004652ec ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 004652ec ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 0046560c ["COPY", "tmp:0:8", ["const:a38:8"]]
+ 0046560c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 0046560c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 0046560c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-f025bc452c3284235b648543673218ff"></a>

### [`004652fc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00465/004652fc.md) → [`0046561c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00465/0046561c.md) FUN_0046561c

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
      "definition_site": "00465620",
      "incomplete_value": false,
      "site": "00465624",
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
            "const:a38:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00465300",
      "incomplete_value": false,
      "site": "00465304",
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
      "00465624",
      "DATA",
      [
        "storage",
        "00c64a68",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00465624",
      "DATA",
      [
        "storage",
        "00c65a38",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 004652fc ["COPY", "register:4040:8", ["const:c64000:8"]]
+ 0046561c ["COPY", "register:4040:8", ["const:c65000:8"]]
- 00465300 ["COPY", "tmp:0:8", ["const:a68:8"]]
- 00465300 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00465300 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00465300 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00465620 ["COPY", "tmp:0:8", ["const:a38:8"]]
+ 00465620 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00465620 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00465620 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-68bac84f71f02b764627044ed9dc9ba5"></a>

### [`00465314`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00465/00465314.md) → [`00465634`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00465/00465634.md) FUN_00465634

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 5件 [`004410cc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00441/004410cc.md) [`00c57f20`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f20.md) [`00c57f40`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f40.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)
- 新版 呼出元 0件  · 呼出先 5件 [`004413ec`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00441/004413ec.md) [`00c58ef0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58ef0.md) [`00c58f10`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f10.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md)

変更の種類 call_argument_candidate, call_target, constant, operands_and_dependencies, store_value

命令の説明率　旧版 89.73% / 新版 89.73%

優先判定に残った影響 `call_argument_candidate` 7件, `call_target` 1件, `store_value` 1件

アドレスに依存する影響 `call_argument_candidate` 2件, `call_target` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "004656d8",
      "incomplete_value": true,
      "site": "004656d8",
      "value": [
        "LOAD",
        "8",
        [
          [
            "leaf",
            "const:1b1:8"
          ],
          [
            "INT_ADD",
            "8",
            [
              [
                "leaf",
                "const:2bc000:8"
              ],
              [
                "leaf",
                "const:476:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "004653b8",
      "incomplete_value": true,
      "site": "004653b8",
      "value": [
        "LOAD",
        "8",
        [
          [
            "leaf",
            "const:1b1:8"
          ],
          [
            "INT_ADD",
            "8",
            [
              [
                "leaf",
                "const:2bc000:8"
              ],
              [
                "leaf",
                "const:398:8"
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
    "kind": "call_target",
    "new": {
      "definition_site": "004657c4",
      "incomplete_value": true,
      "site": "004657c4",
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
              "LOAD"
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "004654a4",
      "incomplete_value": true,
      "site": "004654a4",
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
              "LOAD"
            ]
          ]
        ]
      ]
    },
    "ordinal": 8,
    "slot": 0
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "004657ac",
      "incomplete_value": true,
      "site": "004657c4",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:b58:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0046548c",
      "incomplete_value": true,
      "site": "004654a4",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:b98:8"
              ]
            ]
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
      "004656c4",
      "READ",
      [
        "storage",
        "002bc398",
        null,
        "string"
      ]
    ],
    [
      "004657a0",
      "READ",
      [
        "storage",
        "00ca4ba0",
        null,
        "undefined1"
      ]
    ],
    [
      "004657ac",
      "READ",
      [
        "storage",
        "00ca4b98",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "004656c4",
      "READ",
      [
        "storage",
        "002bc476",
        null,
        "string"
      ]
    ],
    [
      "004657a0",
      "READ",
      [
        "storage",
        "00ca5b60",
        null,
        "undefined1"
      ]
    ],
    [
      "004657ac",
      "READ",
      [
        "storage",
        "00ca5b58",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 004654a4 ["COPY", "register:0:8", ["register:4040:8"]]
- 004654a4 ["INT_ADD", "register:40f0:8", ["const:4654a4:8", "const:4:8"]]
- 004654a4 ["CALLIND", null, ["register:0:8"]]
+ 004657c4 ["COPY", "register:0:8", ["register:4040:8"]]
+ 004657c4 ["INT_ADD", "register:40f0:8", ["const:4657c4:8", "const:4:8"]]
+ 004657c4 ["CALLIND", null, ["register:0:8"]]
- 004654d0 ["COPY", "register:0:8", ["register:4040:8"]]
- 004654d0 ["INT_ADD", "register:40f0:8", ["const:4654d0:8", "const:4:8"]]
- 004654d0 ["CALLIND", null, ["register:0:8"]]
+ 004657f0 ["COPY", "register:0:8", ["register:4040:8"]]
+ 004657f0 ["INT_ADD", "register:40f0:8", ["const:4657f0:8", "const:4:8"]]
+ 004657f0 ["CALLIND", null, ["register:0:8"]]
- 0046552c ["COPY", "register:0:8", ["register:4040:8"]]
- 0046552c ["INT_ADD", "register:40f0:8", ["const:46552c:8", "const:4:8"]]
- 0046552c ["CALLIND", null, ["register:0:8"]]
+ 0046584c ["COPY", "register:0:8", ["register:4040:8"]]
+ 0046584c ["INT_ADD", "register:40f0:8", ["const:46584c:8", "const:4:8"]]
+ 0046584c ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-97f949d0481f383b9fbf2838c860ad0a"></a>

### [`00465698`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00465/00465698.md) → [`004659b8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00465/004659b8.md) FUN_004659b8

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
      "definition_site": "004659cc",
      "incomplete_value": false,
      "site": "004659d0",
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
            "const:ab8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "004656ac",
      "incomplete_value": false,
      "site": "004656b0",
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
            "const:ae8:8"
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
      "004659d0",
      "DATA",
      [
        "storage",
        "00c64ae8",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "004659d0",
      "DATA",
      [
        "storage",
        "00c65ab8",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 004656a4 ["INT_ADD", "register:40f0:8", ["const:4656a4:8", "const:4:8"]]
- 004656a4 ["CALL", null, ["callee:00c58f30:8"]]
+ 004659c4 ["INT_ADD", "register:40f0:8", ["const:4659c4:8", "const:4:8"]]
+ 004659c4 ["CALL", null, ["callee:00c58f30:8"]]
- 004656a8 ["COPY", "register:4040:8", ["const:c64000:8"]]
+ 004659c8 ["COPY", "register:4040:8", ["const:c65000:8"]]
- 004656ac ["COPY", "tmp:0:8", ["const:ae8:8"]]
- 004656ac ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 004656ac ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 004656ac ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 004659cc ["COPY", "tmp:0:8", ["const:ab8:8"]]
+ 004659cc ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 004659cc ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 004659cc ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-e67c424ca2dafef8ea0ce626f3a9faad"></a>

### [`004656bc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00465/004656bc.md) → [`004659dc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00465/004659dc.md) FUN_004659dc

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
      "definition_site": "004659e0",
      "incomplete_value": false,
      "site": "004659e4",
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
            "const:ab8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "004656c0",
      "incomplete_value": false,
      "site": "004656c4",
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
      "004659e4",
      "DATA",
      [
        "storage",
        "00c64ae8",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "004659e4",
      "DATA",
      [
        "storage",
        "00c65ab8",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 004656bc ["COPY", "register:4040:8", ["const:c64000:8"]]
+ 004659dc ["COPY", "register:4040:8", ["const:c65000:8"]]
- 004656c0 ["COPY", "tmp:0:8", ["const:ae8:8"]]
- 004656c0 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 004656c0 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 004656c0 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 004659e0 ["COPY", "tmp:0:8", ["const:ab8:8"]]
+ 004659e0 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 004659e0 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 004659e0 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-aefd85b917f097a295d2f0ce9236e396"></a>

### [`004656d4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00465/004656d4.md) → [`004659f4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00465/004659f4.md) FUN_004659f4

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c57f20`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f20.md) [`00c57f40`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f40.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c58ef0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58ef0.md) [`00c58f10`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f10.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 84.62% / 新版 84.62%

優先判定に残った影響 `call_argument_candidate` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00465a34",
      "incomplete_value": false,
      "site": "00465a3c",
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
            "const:b60:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00465714",
      "incomplete_value": false,
      "site": "0046571c",
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
            "const:ba0:8"
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
      "definition_site": "00465a4c",
      "incomplete_value": false,
      "site": "00465a50",
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
            "const:b60:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0046572c",
      "incomplete_value": false,
      "site": "00465730",
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
            "const:ba0:8"
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
      "00465a0c",
      "READ",
      [
        "storage",
        "00ca4ba0",
        null,
        "undefined1"
      ]
    ],
    [
      "00465a18",
      "READ",
      [
        "storage",
        "00ca4b98",
        null,
        "undefined8"
      ]
    ],
    [
      "00465a34",
      "PARAM",
      [
        "storage",
        "00ca4ba0",
        null,
        "undefined1"
      ]
    ]
  ],
  "added": [
    [
      "00465a0c",
      "READ",
      [
        "storage",
        "00ca5b60",
        null,
        "undefined1"
      ]
    ],
    [
      "00465a18",
      "READ",
      [
        "storage",
        "00ca5b58",
        null,
        "undefined8"
      ]
    ],
    [
      "00465a34",
      "PARAM",
      [
        "storage",
        "00ca5b60",
        null,
        "undefined1"
      ]
    ]
  ]
}
~~~


~~~diff
- 0046571c ["INT_ADD", "register:40f0:8", ["const:46571c:8", "const:4:8"]]
- 0046571c ["CALL", null, ["callee:00c58ef0:8"]]
+ 00465a3c ["INT_ADD", "register:40f0:8", ["const:465a3c:8", "const:4:8"]]
+ 00465a3c ["CALL", null, ["callee:00c58ef0:8"]]
- 00465730 ["INT_ADD", "register:40f0:8", ["const:465730:8", "const:4:8"]]
- 00465730 ["CALL", null, ["callee:00c58f10:8"]]
+ 00465a50 ["INT_ADD", "register:40f0:8", ["const:465a50:8", "const:4:8"]]
+ 00465a50 ["CALL", null, ["callee:00c58f10:8"]]
- 004656e0 ["COPY", "register:4040:8", ["const:ca4000:8"]]
+ 00465a00 ["COPY", "register:4040:8", ["const:ca5000:8"]]
~~~


<a id="compare-c06a9f5d2d213d838a789ccf186ceb47"></a>

### [`00465764`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00465/00465764.md) → [`00465a84`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00465/00465a84.md) FUN_00465a84

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `bounded` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 92.86% / 新版 92.86%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "00465a9c",
      "incomplete_value": false,
      "site": "00465aa0",
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
            "const:b38:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0046577c",
      "incomplete_value": false,
      "site": "00465780",
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
      "00465aa0",
      "DATA",
      [
        "storage",
        "00c64b68",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00465aa0",
      "DATA",
      [
        "storage",
        "00c65b38",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00465778 ["COPY", "register:4048:8", ["const:c64000:8"]]
+ 00465a98 ["COPY", "register:4048:8", ["const:c65000:8"]]
- 0046577c ["COPY", "tmp:0:8", ["const:b68:8"]]
- 0046577c ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 0046577c ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 0046577c ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 00465a9c ["COPY", "tmp:0:8", ["const:b38:8"]]
+ 00465a9c ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 00465a9c ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 00465a9c ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
- 004657a8 ["INT_ADD", "register:40f0:8", ["const:4657a8:8", "const:4:8"]]
- 004657a8 ["CALL", null, ["callee:00c58f50:8"]]
+ 00465ac8 ["INT_ADD", "register:40f0:8", ["const:465ac8:8", "const:4:8"]]
+ 00465ac8 ["CALL", null, ["callee:00c58f50:8"]]
~~~


<a id="compare-cc51b805789a5c6b1132618363cc8dc8"></a>

### [`004657d4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00465/004657d4.md) → [`00465af4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00465/00465af4.md) FUN_00465af4

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `bounded` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 92.86% / 新版 92.86%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "00465b0c",
      "incomplete_value": false,
      "site": "00465b10",
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
            "const:b38:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "004657ec",
      "incomplete_value": false,
      "site": "004657f0",
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
      "00465b10",
      "DATA",
      [
        "storage",
        "00c64b68",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00465b10",
      "DATA",
      [
        "storage",
        "00c65b38",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 004657e8 ["COPY", "register:4048:8", ["const:c64000:8"]]
+ 00465b08 ["COPY", "register:4048:8", ["const:c65000:8"]]
- 004657ec ["COPY", "tmp:0:8", ["const:b68:8"]]
- 004657ec ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 004657ec ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 004657ec ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 00465b0c ["COPY", "tmp:0:8", ["const:b38:8"]]
+ 00465b0c ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 00465b0c ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 00465b0c ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
- 0046580c ["INT_ADD", "register:40f0:8", ["const:46580c:8", "const:4:8"]]
- 0046580c ["CALL", null, ["callee:00c58f50:8"]]
+ 00465b2c ["INT_ADD", "register:40f0:8", ["const:465b2c:8", "const:4:8"]]
+ 00465b2c ["CALL", null, ["callee:00c58f50:8"]]
~~~


<a id="compare-7fa9f3f208f7d904caa5bdecacfd401c"></a>

### [`00465844`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00465/00465844.md) → [`00465b64`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00465/00465b64.md) FUN_00465b64

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 2件 [`0046690c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00466/0046690c.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00466c2c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00466/00466c2c.md) [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 87.50% / 新版 87.50%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "00465b88",
      "incomplete_value": false,
      "site": "00465b88",
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
            "const:b38:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00465868",
      "incomplete_value": false,
      "site": "00465868",
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
            "const:b68:8"
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
      "00465b88",
      "DATA",
      [
        "storage",
        "00c64b68",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00465b88",
      "DATA",
      [
        "storage",
        "00c65b38",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00465858 ["INT_ADD", "register:40f0:8", ["const:465858:8", "const:4:8"]]
- 00465858 ["CALL", null, ["callee:00c58f30:8"]]
+ 00465b78 ["INT_ADD", "register:40f0:8", ["const:465b78:8", "const:4:8"]]
+ 00465b78 ["CALL", null, ["callee:00c58f30:8"]]
- 00465860 ["COPY", "register:4040:8", ["const:c64000:8"]]
+ 00465b80 ["COPY", "register:4040:8", ["const:c65000:8"]]
- 00465864 ["COPY", "tmp:0:8", ["const:b68:8"]]
- 00465864 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00465864 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00465864 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00465b84 ["COPY", "tmp:0:8", ["const:b38:8"]]
+ 00465b84 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00465b84 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00465b84 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-426fb4e958c0ff66c9975cea7d0e8745"></a>

### [`00465898`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00465/00465898.md) → [`00465bb8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00465/00465bb8.md) FUN_00465bb8

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 1件 [`0046690c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00466/0046690c.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00466c2c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00466/00466c2c.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 71.43% / 新版 71.43%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "00465bc4",
      "incomplete_value": false,
      "site": "00465bc4",
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
            "const:b38:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "004658a4",
      "incomplete_value": false,
      "site": "004658a4",
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
      "00465bc4",
      "DATA",
      [
        "storage",
        "00c64b68",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00465bc4",
      "DATA",
      [
        "storage",
        "00c65b38",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 0046589c ["COPY", "register:4048:8", ["const:c64000:8"]]
+ 00465bbc ["COPY", "register:4048:8", ["const:c65000:8"]]
- 004658a0 ["COPY", "tmp:0:8", ["const:b68:8"]]
- 004658a0 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 004658a0 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 004658a0 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 00465bc0 ["COPY", "tmp:0:8", ["const:b38:8"]]
+ 00465bc0 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 00465bc0 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 00465bc0 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
~~~


<a id="compare-47f80d8d77486d912f616329bd32cb41"></a>

### [`0046597c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00465/0046597c.md) → [`00465c9c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00465/00465c9c.md) FUN_00465c9c

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 22件 [`0043db94`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043d/0043db94.md) [`0044fcfc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0044f/0044fcfc.md) [`004501c0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00450/004501c0.md) [`00450790`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00450/00450790.md) [`0055e8b4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0055e/0055e8b4.md)
- 新版 呼出元 0件  · 呼出先 22件 [`0043deb4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043d/0043deb4.md) [`0045001c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00450/0045001c.md) [`004504e0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00450/004504e0.md) [`00450ab0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00450/00450ab0.md) [`0055ebd4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0055e/0055ebd4.md)

変更の種類 call, call_argument_candidate, call_target, constant, operands_and_dependencies, store_value, unresolved_call_alignment

命令の説明率　旧版 91.84% / 新版 91.84%

優先判定に残った影響 `call_argument_candidate` 20件, `call_target` 4件, `store_value` 9件, `unresolved_call_alignment` 1件

アドレスに依存する影響 `call_argument_candidate` 2件, `call_target` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00465d1c",
      "incomplete_value": true,
      "site": "00465d1c",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:989:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "004659fc",
      "incomplete_value": true,
      "site": "004659fc",
      "value": [
        "LOAD",
        "8",
        [
          [
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
    "ordinal": 14,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00465ef0",
      "incomplete_value": true,
      "site": "00465ef0",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:a0e:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00465bd0",
      "incomplete_value": true,
      "site": "00465bd0",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:937:8"
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
      "definition_site": "004660f0",
      "incomplete_value": true,
      "site": "00466100",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:9db:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00465dd0",
      "incomplete_value": true,
      "site": "00465de0",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:991:8"
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
      "00465d00",
      "READ",
      [
        "storage",
        "002b393f",
        null,
        "string"
      ]
    ],
    [
      "00465dbc",
      "READ",
      [
        "storage",
        "00ca4ba0",
        null,
        "undefined1"
      ]
    ],
    [
      "00465dc8",
      "READ",
      [
        "storage",
        "00ca4b98",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00465d00",
      "READ",
      [
        "storage",
        "002b3989",
        null,
        "string"
      ]
    ],
    [
      "00465dbc",
      "READ",
      [
        "storage",
        "00ca5b60",
        null,
        "undefined1"
      ]
    ],
    [
      "00465dc8",
      "READ",
      [
        "storage",
        "00ca5b58",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00465ba4 ["INT_ADD", "register:40f0:8", ["const:465ba4:8", "const:4:8"]]
- 00465ba4 ["CALL", null, ["callee:00c58f50:8"]]
+ 00465ec4 ["INT_ADD", "register:40f0:8", ["const:465ec4:8", "const:4:8"]]
+ 00465ec4 ["CALL", null, ["callee:00c58f50:8"]]
- 00465cd8 ["COPY", "register:0:8", ["register:4040:8"]]
- 00465cd8 ["INT_ADD", "register:40f0:8", ["const:465cd8:8", "const:4:8"]]
- 00465cd8 ["CALLIND", null, ["register:0:8"]]
+ 00465ff8 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00465ff8 ["INT_ADD", "register:40f0:8", ["const:465ff8:8", "const:4:8"]]
+ 00465ff8 ["CALLIND", null, ["register:0:8"]]
- 00465d1c ["COPY", "register:4040:8", ["const:ca4000:8"]]
+ 0046603c ["COPY", "register:4040:8", ["const:ca5000:8"]]
~~~


<a id="compare-b8f0690958d06522a615c0479151cd74"></a>

### [`00466a00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00466/00466a00.md) → [`00466d20`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00466/00466d20.md) FUN_00466d20

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
      "definition_site": "00466d34",
      "incomplete_value": false,
      "site": "00466d38",
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
            "const:bb8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00466a14",
      "incomplete_value": false,
      "site": "00466a18",
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
            "const:be8:8"
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
      "00466d38",
      "DATA",
      [
        "storage",
        "00c64be8",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00466d38",
      "DATA",
      [
        "storage",
        "00c65bb8",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00466a0c ["INT_ADD", "register:40f0:8", ["const:466a0c:8", "const:4:8"]]
- 00466a0c ["CALL", null, ["callee:00c58f30:8"]]
+ 00466d2c ["INT_ADD", "register:40f0:8", ["const:466d2c:8", "const:4:8"]]
+ 00466d2c ["CALL", null, ["callee:00c58f30:8"]]
- 00466a10 ["COPY", "register:4040:8", ["const:c64000:8"]]
+ 00466d30 ["COPY", "register:4040:8", ["const:c65000:8"]]
- 00466a14 ["COPY", "tmp:0:8", ["const:be8:8"]]
- 00466a14 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00466a14 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00466a14 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00466d34 ["COPY", "tmp:0:8", ["const:bb8:8"]]
+ 00466d34 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00466d34 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00466d34 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-a322f5fdb6264352f64304a06f6ef481"></a>

### [`00466a24`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00466/00466a24.md) → [`00466d44`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00466/00466d44.md) FUN_00466d44

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
      "definition_site": "00466d48",
      "incomplete_value": false,
      "site": "00466d4c",
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
            "const:bb8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00466a28",
      "incomplete_value": false,
      "site": "00466a2c",
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
      "00466d4c",
      "DATA",
      [
        "storage",
        "00c64be8",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00466d4c",
      "DATA",
      [
        "storage",
        "00c65bb8",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00466a24 ["COPY", "register:4040:8", ["const:c64000:8"]]
+ 00466d44 ["COPY", "register:4040:8", ["const:c65000:8"]]
- 00466a28 ["COPY", "tmp:0:8", ["const:be8:8"]]
- 00466a28 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00466a28 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00466a28 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00466d48 ["COPY", "tmp:0:8", ["const:bb8:8"]]
+ 00466d48 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00466d48 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00466d48 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-a634558e75e39590b07ce074dc118f53"></a>

### [`00466a3c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00466/00466a3c.md) → [`00466d5c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00466/00466d5c.md) FUN_00466d5c

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c57f20`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f20.md) [`00c57f40`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f40.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c58ef0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58ef0.md) [`00c58f10`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f10.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 80.95% / 新版 80.95%

優先判定に残った影響 `call_argument_candidate` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00466d94",
      "incomplete_value": false,
      "site": "00466d98",
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
            "const:b60:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00466a74",
      "incomplete_value": false,
      "site": "00466a78",
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
            "const:ba0:8"
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
      "definition_site": "00466da4",
      "incomplete_value": false,
      "site": "00466da8",
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
            "const:b60:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00466a84",
      "incomplete_value": false,
      "site": "00466a88",
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
            "const:ba0:8"
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
      "00466d6c",
      "READ",
      [
        "storage",
        "00ca4ba0",
        null,
        "undefined1"
      ]
    ],
    [
      "00466d78",
      "READ",
      [
        "storage",
        "00ca4b98",
        null,
        "undefined8"
      ]
    ],
    [
      "00466d94",
      "PARAM",
      [
        "storage",
        "00ca4ba0",
        null,
        "undefined1"
      ]
    ]
  ],
  "added": [
    [
      "00466d6c",
      "READ",
      [
        "storage",
        "00ca5b60",
        null,
        "undefined1"
      ]
    ],
    [
      "00466d78",
      "READ",
      [
        "storage",
        "00ca5b58",
        null,
        "undefined8"
      ]
    ],
    [
      "00466d94",
      "PARAM",
      [
        "storage",
        "00ca5b60",
        null,
        "undefined1"
      ]
    ]
  ]
}
~~~


~~~diff
- 00466a78 ["INT_ADD", "register:40f0:8", ["const:466a78:8", "const:4:8"]]
- 00466a78 ["CALL", null, ["callee:00c58ef0:8"]]
+ 00466d98 ["INT_ADD", "register:40f0:8", ["const:466d98:8", "const:4:8"]]
+ 00466d98 ["CALL", null, ["callee:00c58ef0:8"]]
- 00466a88 ["INT_ADD", "register:40f0:8", ["const:466a88:8", "const:4:8"]]
- 00466a88 ["CALL", null, ["callee:00c58f10:8"]]
+ 00466da8 ["INT_ADD", "register:40f0:8", ["const:466da8:8", "const:4:8"]]
+ 00466da8 ["CALL", null, ["callee:00c58f10:8"]]
- 00466a44 ["COPY", "register:4040:8", ["const:ca4000:8"]]
+ 00466d64 ["COPY", "register:4040:8", ["const:ca5000:8"]]
~~~


<a id="compare-d47cb6db35b44efedb5dfcdcffdbac29"></a>

### [`00466ac0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00466/00466ac0.md) → [`00466de0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00466/00466de0.md) FUN_00466de0

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
      "definition_site": "00466df4",
      "incomplete_value": false,
      "site": "00466df8",
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
            "const:c38:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00466ad4",
      "incomplete_value": false,
      "site": "00466ad8",
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
            "const:c68:8"
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
      "00466df8",
      "DATA",
      [
        "storage",
        "00c64c68",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00466df8",
      "DATA",
      [
        "storage",
        "00c65c38",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00466acc ["INT_ADD", "register:40f0:8", ["const:466acc:8", "const:4:8"]]
- 00466acc ["CALL", null, ["callee:00c58f30:8"]]
+ 00466dec ["INT_ADD", "register:40f0:8", ["const:466dec:8", "const:4:8"]]
+ 00466dec ["CALL", null, ["callee:00c58f30:8"]]
- 00466ad0 ["COPY", "register:4040:8", ["const:c64000:8"]]
+ 00466df0 ["COPY", "register:4040:8", ["const:c65000:8"]]
- 00466ad4 ["COPY", "tmp:0:8", ["const:c68:8"]]
- 00466ad4 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00466ad4 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00466ad4 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00466df4 ["COPY", "tmp:0:8", ["const:c38:8"]]
+ 00466df4 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00466df4 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00466df4 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-7d48dff761a14de206c76391e132e2d3"></a>

### [`00466ae4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00466/00466ae4.md) → [`00466e04`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00466/00466e04.md) FUN_00466e04

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
      "definition_site": "00466e08",
      "incomplete_value": false,
      "site": "00466e0c",
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
            "const:c38:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00466ae8",
      "incomplete_value": false,
      "site": "00466aec",
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
      "00466e0c",
      "DATA",
      [
        "storage",
        "00c64c68",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00466e0c",
      "DATA",
      [
        "storage",
        "00c65c38",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00466ae4 ["COPY", "register:4040:8", ["const:c64000:8"]]
+ 00466e04 ["COPY", "register:4040:8", ["const:c65000:8"]]
- 00466ae8 ["COPY", "tmp:0:8", ["const:c68:8"]]
- 00466ae8 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00466ae8 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00466ae8 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00466e08 ["COPY", "tmp:0:8", ["const:c38:8"]]
+ 00466e08 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00466e08 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00466e08 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-fe8ffd0ac5865686aa733c71a644cf3f"></a>

### [`00466afc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00466/00466afc.md) → [`00466e1c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00466/00466e1c.md) FUN_00466e1c

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c57f20`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f20.md) [`00c57f40`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f40.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c58ef0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58ef0.md) [`00c58f10`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f10.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 80.95% / 新版 80.95%

優先判定に残った影響 `call_argument_candidate` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00466e54",
      "incomplete_value": false,
      "site": "00466e58",
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
            "const:b60:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00466b34",
      "incomplete_value": false,
      "site": "00466b38",
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
            "const:ba0:8"
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
      "definition_site": "00466e64",
      "incomplete_value": false,
      "site": "00466e68",
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
            "const:b60:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00466b44",
      "incomplete_value": false,
      "site": "00466b48",
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
            "const:ba0:8"
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
      "00466e2c",
      "READ",
      [
        "storage",
        "00ca4ba0",
        null,
        "undefined1"
      ]
    ],
    [
      "00466e38",
      "READ",
      [
        "storage",
        "00ca4b98",
        null,
        "undefined8"
      ]
    ],
    [
      "00466e54",
      "PARAM",
      [
        "storage",
        "00ca4ba0",
        null,
        "undefined1"
      ]
    ]
  ],
  "added": [
    [
      "00466e2c",
      "READ",
      [
        "storage",
        "00ca5b60",
        null,
        "undefined1"
      ]
    ],
    [
      "00466e38",
      "READ",
      [
        "storage",
        "00ca5b58",
        null,
        "undefined8"
      ]
    ],
    [
      "00466e54",
      "PARAM",
      [
        "storage",
        "00ca5b60",
        null,
        "undefined1"
      ]
    ]
  ]
}
~~~


~~~diff
- 00466b38 ["INT_ADD", "register:40f0:8", ["const:466b38:8", "const:4:8"]]
- 00466b38 ["CALL", null, ["callee:00c58ef0:8"]]
+ 00466e58 ["INT_ADD", "register:40f0:8", ["const:466e58:8", "const:4:8"]]
+ 00466e58 ["CALL", null, ["callee:00c58ef0:8"]]
- 00466b48 ["INT_ADD", "register:40f0:8", ["const:466b48:8", "const:4:8"]]
- 00466b48 ["CALL", null, ["callee:00c58f10:8"]]
+ 00466e68 ["INT_ADD", "register:40f0:8", ["const:466e68:8", "const:4:8"]]
+ 00466e68 ["CALL", null, ["callee:00c58f10:8"]]
- 00466b04 ["COPY", "register:4040:8", ["const:ca4000:8"]]
+ 00466e24 ["COPY", "register:4040:8", ["const:ca5000:8"]]
~~~


<a id="compare-fb70f979b6855eaa1778b270f36380d6"></a>

### [`00466b78`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00466/00466b78.md) → [`00466e98`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00466/00466e98.md) FUN_00466e98

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
      "definition_site": "00466ea4",
      "incomplete_value": false,
      "site": "00466eb0",
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
            "const:cb8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00466b84",
      "incomplete_value": false,
      "site": "00466b90",
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
      "00466eb0",
      "DATA",
      [
        "storage",
        "00c64ce8",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00466eb0",
      "DATA",
      [
        "storage",
        "00c65cb8",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00466b80 ["COPY", "register:4050:8", ["const:c64000:8"]]
+ 00466ea0 ["COPY", "register:4050:8", ["const:c65000:8"]]
- 00466b84 ["COPY", "tmp:0:8", ["const:ce8:8"]]
- 00466b84 ["INT_CARRY", "register:105:1", ["register:4050:8", "tmp:0:8"]]
- 00466b84 ["INT_SCARRY", "register:106:1", ["register:4050:8", "tmp:0:8"]]
- 00466b84 ["INT_ADD", "tmp:1:8", ["register:4050:8", "tmp:0:8"]]
+ 00466ea4 ["COPY", "tmp:0:8", ["const:cb8:8"]]
+ 00466ea4 ["INT_CARRY", "register:105:1", ["register:4050:8", "tmp:0:8"]]
+ 00466ea4 ["INT_SCARRY", "register:106:1", ["register:4050:8", "tmp:0:8"]]
+ 00466ea4 ["INT_ADD", "tmp:1:8", ["register:4050:8", "tmp:0:8"]]
~~~


<a id="compare-53835ecf927b6e84e47b366781af0ce6"></a>

### [`00466bbc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00466/00466bbc.md) → [`00466edc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00466/00466edc.md) FUN_00466edc

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 91.30% / 新版 91.30%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "00466ef4",
      "incomplete_value": false,
      "site": "00466f00",
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
            "const:cb8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00466bd4",
      "incomplete_value": false,
      "site": "00466be0",
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
            "const:ce8:8"
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
      "00466f00",
      "DATA",
      [
        "storage",
        "00c64ce8",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00466f00",
      "DATA",
      [
        "storage",
        "00c65cb8",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00466bd0 ["COPY", "register:4040:8", ["const:c64000:8"]]
+ 00466ef0 ["COPY", "register:4040:8", ["const:c65000:8"]]
- 00466bd4 ["COPY", "tmp:0:8", ["const:ce8:8"]]
- 00466bd4 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00466bd4 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00466bd4 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00466ef4 ["COPY", "tmp:0:8", ["const:cb8:8"]]
+ 00466ef4 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00466ef4 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00466ef4 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 00466c04 ["COPY", "register:0:8", ["register:4040:8"]]
- 00466c04 ["INT_ADD", "register:40f0:8", ["const:466c04:8", "const:4:8"]]
- 00466c04 ["CALLIND", null, ["register:0:8"]]
+ 00466f24 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00466f24 ["INT_ADD", "register:40f0:8", ["const:466f24:8", "const:4:8"]]
+ 00466f24 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-d410545c950962d8d3b8024be747f5e2"></a>

### [`00466c18`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00466/00466c18.md) → [`00466f38`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00466/00466f38.md) FUN_00466f38

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 93.10% / 新版 93.10%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "00466f64",
      "incomplete_value": false,
      "site": "00466f64",
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
            "const:cb8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00466c44",
      "incomplete_value": false,
      "site": "00466c44",
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
            "const:ce8:8"
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
      "00466f64",
      "DATA",
      [
        "storage",
        "00c64ce8",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00466f64",
      "DATA",
      [
        "storage",
        "00c65cb8",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00466c2c ["INT_ADD", "register:40f0:8", ["const:466c2c:8", "const:4:8"]]
- 00466c2c ["CALL", null, ["callee:00c58f30:8"]]
+ 00466f4c ["INT_ADD", "register:40f0:8", ["const:466f4c:8", "const:4:8"]]
+ 00466f4c ["CALL", null, ["callee:00c58f30:8"]]
- 00466c38 ["COPY", "register:4040:8", ["const:c64000:8"]]
+ 00466f58 ["COPY", "register:4040:8", ["const:c65000:8"]]
- 00466c3c ["COPY", "tmp:0:8", ["const:ce8:8"]]
- 00466c3c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00466c3c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00466c3c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00466f5c ["COPY", "tmp:0:8", ["const:cb8:8"]]
+ 00466f5c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00466f5c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00466f5c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-fc105ac341b9d59131e0078568dfab79"></a>

### [`00466ca0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00466/00466ca0.md) → [`00466fc0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00466/00466fc0.md) FUN_00466fc0

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
      "definition_site": "00466fdc",
      "incomplete_value": false,
      "site": "00466fdc",
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
            "const:cb8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00466cbc",
      "incomplete_value": false,
      "site": "00466cbc",
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
            "const:ce8:8"
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
      "00466fdc",
      "DATA",
      [
        "storage",
        "00c64ce8",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00466fdc",
      "DATA",
      [
        "storage",
        "00c65cb8",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00466cb4 ["COPY", "register:4048:8", ["const:c64000:8"]]
+ 00466fd4 ["COPY", "register:4048:8", ["const:c65000:8"]]
- 00466cb8 ["COPY", "tmp:0:8", ["const:ce8:8"]]
- 00466cb8 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 00466cb8 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 00466cb8 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 00466fd8 ["COPY", "tmp:0:8", ["const:cb8:8"]]
+ 00466fd8 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 00466fd8 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 00466fd8 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
- 00466cdc ["COPY", "register:0:8", ["register:4048:8"]]
- 00466cdc ["INT_ADD", "register:40f0:8", ["const:466cdc:8", "const:4:8"]]
- 00466cdc ["CALLIND", null, ["register:0:8"]]
+ 00466ffc ["COPY", "register:0:8", ["register:4048:8"]]
+ 00466ffc ["INT_ADD", "register:40f0:8", ["const:466ffc:8", "const:4:8"]]
+ 00466ffc ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-4946c481bd61496b63ddd41e21ad73b8"></a>

### [`00466f4c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00466/00466f4c.md) → [`0046726c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00467/0046726c.md) FUN_0046726c

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
      "definition_site": "00467280",
      "incomplete_value": false,
      "site": "00467284",
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
            "const:d38:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00466f60",
      "incomplete_value": false,
      "site": "00466f64",
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
            "const:d68:8"
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
      "00467284",
      "DATA",
      [
        "storage",
        "00c64d68",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00467284",
      "DATA",
      [
        "storage",
        "00c65d38",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00466f58 ["INT_ADD", "register:40f0:8", ["const:466f58:8", "const:4:8"]]
- 00466f58 ["CALL", null, ["callee:00c58f30:8"]]
+ 00467278 ["INT_ADD", "register:40f0:8", ["const:467278:8", "const:4:8"]]
+ 00467278 ["CALL", null, ["callee:00c58f30:8"]]
- 00466f5c ["COPY", "register:4040:8", ["const:c64000:8"]]
+ 0046727c ["COPY", "register:4040:8", ["const:c65000:8"]]
- 00466f60 ["COPY", "tmp:0:8", ["const:d68:8"]]
- 00466f60 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00466f60 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00466f60 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00467280 ["COPY", "tmp:0:8", ["const:d38:8"]]
+ 00467280 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00467280 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00467280 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-5edd844e20d8ea66edc0a13d45b75478"></a>

### [`00466f70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00466/00466f70.md) → [`00467290`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00467/00467290.md) FUN_00467290

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
      "definition_site": "00467294",
      "incomplete_value": false,
      "site": "00467298",
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
            "const:d38:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00466f74",
      "incomplete_value": false,
      "site": "00466f78",
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
      "00467298",
      "DATA",
      [
        "storage",
        "00c64d68",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00467298",
      "DATA",
      [
        "storage",
        "00c65d38",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00466f70 ["COPY", "register:4040:8", ["const:c64000:8"]]
+ 00467290 ["COPY", "register:4040:8", ["const:c65000:8"]]
- 00466f74 ["COPY", "tmp:0:8", ["const:d68:8"]]
- 00466f74 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00466f74 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00466f74 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00467294 ["COPY", "tmp:0:8", ["const:d38:8"]]
+ 00467294 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00467294 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00467294 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-c610a6837afb013905de96010185afe5"></a>

### [`00466f88`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00466/00466f88.md) → [`004672a8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00467/004672a8.md) FUN_004672a8

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 9件 [`004410cc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00441/004410cc.md) [`00459510`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00459/00459510.md) [`00596d50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00596/00596d50.md) [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f20`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f20.md)
- 新版 呼出元 0件  · 呼出先 9件 [`004413ec`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00441/004413ec.md) [`00459830`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00459/00459830.md) [`00597070`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00597/00597070.md) [`00c54d90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d90.md) [`00c58ef0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58ef0.md)

変更の種類 call_argument_candidate, call_target, constant, operands_and_dependencies, store_value

命令の説明率　旧版 89.63% / 新版 89.63%

優先判定に残った影響 `call_argument_candidate` 8件, `store_value` 1件

アドレスに依存する影響 `call_argument_candidate` 4件, `call_target` 3件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "0046735c",
      "incomplete_value": true,
      "site": "0046735c",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:7ad:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0046703c",
      "incomplete_value": true,
      "site": "0046703c",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:6cf:8"
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
      "definition_site": "00467308",
      "incomplete_value": true,
      "site": "0046730c",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:d10:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00466fe8",
      "incomplete_value": true,
      "site": "00466fec",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:d40:8"
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
    "kind": "call_target",
    "new": {
      "definition_site": "004673c4",
      "incomplete_value": true,
      "site": "004673c4",
      "value": [
        "LOAD",
        "8",
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
                "const:80:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "004670a4",
      "incomplete_value": true,
      "site": "004670a4",
      "value": [
        "LOAD",
        "8",
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
                "const:80:8"
              ]
            ]
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
      "00467308",
      "READ",
      [
        "storage",
        "00c9ad40",
        null,
        "pointer"
      ]
    ],
    [
      "00467308",
      "PARAM",
      [
        "storage",
        "01127600",
        "std::__ndk1::cout",
        "undefined8"
      ]
    ],
    [
      "0046734c",
      "READ",
      [
        "storage",
        "002bd6cf",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "00467308",
      "READ",
      [
        "storage",
        "00c9bd10",
        null,
        "pointer"
      ]
    ],
    [
      "00467308",
      "PARAM",
      [
        "storage",
        "011285c0",
        "std::__ndk1::cout",
        "undefined8"
      ]
    ],
    [
      "0046734c",
      "READ",
      [
        "storage",
        "002bd7ad",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 00466fec ["INT_ADD", "register:40f0:8", ["const:466fec:8", "const:4:8"]]
- 00466fec ["CALL", null, ["callee:00459830:8"]]
+ 0046730c ["INT_ADD", "register:40f0:8", ["const:46730c:8", "const:4:8"]]
+ 0046730c ["CALL", null, ["callee:00459830:8"]]
- 004670a4 ["COPY", "register:0:8", ["register:4040:8"]]
- 004670a4 ["INT_ADD", "register:40f0:8", ["const:4670a4:8", "const:4:8"]]
- 004670a4 ["CALLIND", null, ["register:0:8"]]
+ 004673c4 ["COPY", "register:0:8", ["register:4040:8"]]
+ 004673c4 ["INT_ADD", "register:40f0:8", ["const:4673c4:8", "const:4:8"]]
+ 004673c4 ["CALLIND", null, ["register:0:8"]]
- 004670cc ["COPY", "register:0:8", ["register:4040:8"]]
- 004670cc ["INT_ADD", "register:40f0:8", ["const:4670cc:8", "const:4:8"]]
- 004670cc ["CALLIND", null, ["register:0:8"]]
+ 004673ec ["COPY", "register:0:8", ["register:4040:8"]]
+ 004673ec ["INT_ADD", "register:40f0:8", ["const:4673ec:8", "const:4:8"]]
+ 004673ec ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-4c51548766c936f394ef189517ff02e0"></a>

### [`00467298`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00467/00467298.md) → [`004675b8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00467/004675b8.md) _INIT_11

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 5件 [`0043aeb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043a/0043aeb0.md) [`0043b838`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b838.md) [`00c57f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f00.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)
- 新版 呼出元 0件  · 呼出先 5件 [`0043b1d0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043b1d0.md) [`0043bb58`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bb58.md) [`00c58ed0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58ed0.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies, operation_sequence, store_destination, store_value

命令の説明率　旧版 83.05% / 新版 83.05%

優先判定に残った影響 `call_argument_candidate` 4件, `store_destination` 3件, `store_value` 8件

アドレスに依存する影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "004675f4",
      "incomplete_value": true,
      "site": "00467610",
      "value": [
        "LOAD",
        "16",
        [
          [
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
      "definition_site": "004672d4",
      "incomplete_value": true,
      "site": "004672f0",
      "value": [
        "LOAD",
        "16",
        [
          [
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
      "definition_site": "00467618",
      "incomplete_value": true,
      "site": "00467634",
      "value": [
        "LOAD",
        "16",
        [
          [
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
      "definition_site": "004672f8",
      "incomplete_value": true,
      "site": "00467314",
      "value": [
        "LOAD",
        "16",
        [
          [
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
      "definition_site": "00467638",
      "incomplete_value": true,
      "site": "00467654",
      "value": [
        "LOAD",
        "16",
        [
          [
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
      "definition_site": "00467318",
      "incomplete_value": true,
      "site": "00467334",
      "value": [
        "LOAD",
        "16",
        [
          [
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
      "004675f4",
      "READ",
      [
        "storage",
        "002b7f66",
        null,
        "string"
      ]
    ],
    [
      "00467618",
      "READ",
      [
        "storage",
        "002b7f79",
        null,
        "string"
      ]
    ],
    [
      "00467638",
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
      "004675f4",
      "READ",
      [
        "storage",
        "002b8035",
        null,
        "string"
      ]
    ],
    [
      "00467618",
      "READ",
      [
        "storage",
        "002b8048",
        null,
        "string"
      ]
    ],
    [
      "00467638",
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
- 004673f8 ["INT_ADD", "register:40f0:8", ["const:4673f8:8", "const:4:8"]]
- 004673f8 ["CALL", null, ["callee:0043bb58:8"]]
+ 00467718 ["INT_ADD", "register:40f0:8", ["const:467718:8", "const:4:8"]]
+ 00467718 ["CALL", null, ["callee:0043bb58:8"]]
- 004674cc ["INT_ADD", "register:40f0:8", ["const:4674cc:8", "const:4:8"]]
- 004674cc ["CALL", null, ["callee:00c58ed0:8"]]
+ 004677ec ["INT_ADD", "register:40f0:8", ["const:4677ec:8", "const:4:8"]]
+ 004677ec ["CALL", null, ["callee:00c58ed0:8"]]
- 004672c0 ["COPY", "register:4098:8", ["const:ca4000:8"]]
+ 004675e0 ["COPY", "register:4098:8", ["const:ca5000:8"]]
~~~


<a id="compare-0d4a6750cbba1f61c647f168cb79308e"></a>

### [`00467690`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00467/00467690.md) → [`004679b0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00467/004679b0.md) FUN_004679b0

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 2件 [`0046de64`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046d/0046de64.md) [`005fc3e0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005fc/005fc3e0.md) · 呼出先 0件 
- 新版 呼出元 2件 [`0046e184`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0046e/0046e184.md) [`005fc790`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005fc/005fc790.md) · 呼出先 0件 

変更の種類 constant, operands_and_dependencies, operation_sequence, store_value

命令の説明率　旧版 72.73% / 新版 72.73%

優先判定に残った影響 `store_value` 1件

アドレスに依存する影響 `store_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "004679bc",
      "incomplete_value": true,
      "site": "004679c8",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:e28:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0046769c",
      "incomplete_value": true,
      "site": "004676a8",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:dd8:8"
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
    "kind": "store_value",
    "new": {
      "definition_site": "004679c4",
      "incomplete_value": true,
      "site": "004679cc",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:e30:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "004676a4",
      "incomplete_value": true,
      "site": "004676ac",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:de0:8"
              ]
            ]
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
      "004679bc",
      "READ",
      [
        "storage",
        "002c3dd8",
        null,
        "undefined8"
      ]
    ],
    [
      "004679c4",
      "READ",
      [
        "storage",
        "002c3de0",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "004679bc",
      "READ",
      [
        "storage",
        "002c3e28",
        null,
        "undefined8"
      ]
    ],
    [
      "004679c4",
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
- 0046769c ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:dd8:8"]]
- 0046769c ["LOAD", "register:5000:8", ["const:1b1:8", "tmp:0:8"]]
- 0046769c ["COPY", "register:5008:8", ["const:0:8"]]
- 0046769c ["COPY", "register:5010:8", ["const:0:8"]]
+ 004679bc ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:e28:8"]]
+ 004679bc ["LOAD", "register:5000:8", ["const:1b1:8", "tmp:0:8"]]
+ 004679bc ["COPY", "register:5008:8", ["const:0:8"]]
+ 004679bc ["COPY", "register:5010:8", ["const:0:8"]]
- 004676a0 ["COPY", "register:4040:8", ["const:2c3000:8"]]
- 004676a4 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:de0:8"]]
- 004676a4 ["LOAD", "register:5040:8", ["const:1b1:8", "tmp:0:8"]]
- 004676a4 ["COPY", "register:5048:8", ["const:0:8"]]
- 004676a4 ["COPY", "register:5050:8", ["const:0:8"]]
+ 004679c4 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:e30:8"]]
+ 004679c4 ["LOAD", "register:5040:8", ["const:1b1:8", "tmp:0:8"]]
+ 004679c4 ["COPY", "register:5048:8", ["const:0:8"]]
+ 004679c4 ["COPY", "register:5050:8", ["const:0:8"]]
~~~


<a id="compare-46060e97d80ff577ffe38bbfdf0573fc"></a>

### [`004676bc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00467/004676bc.md) → [`004679dc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00467/004679dc.md) FUN_004679dc

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 2件 [`00a47158`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a47/00a47158.md) [`00a47688`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a47/00a47688.md) · 呼出先 0件 
- 新版 呼出元 2件 [`00a4814c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a48/00a4814c.md) [`00a4867c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a48/00a4867c.md) · 呼出先 0件 

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 55.56% / 新版 55.56%

優先判定に残った影響 `store_value` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "004679e8",
      "incomplete_value": true,
      "site": "004679f4",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:e28:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "004676c8",
      "incomplete_value": true,
      "site": "004676d4",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:dd8:8"
              ]
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
    "kind": "store_value",
    "new": {
      "definition_site": "004679ec",
      "incomplete_value": true,
      "site": "004679f8",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:e30:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "004676cc",
      "incomplete_value": true,
      "site": "004676d8",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:de0:8"
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
      "004679e8",
      "READ",
      [
        "storage",
        "002c3dd8",
        null,
        "undefined8"
      ]
    ],
    [
      "004679ec",
      "READ",
      [
        "storage",
        "002c3de0",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "004679e8",
      "READ",
      [
        "storage",
        "002c3e28",
        null,
        "undefined8"
      ]
    ],
    [
      "004679ec",
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
- 004676c8 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:dd8:8"]]
- 004676c8 ["LOAD", "register:5040:8", ["const:1b1:8", "tmp:0:8"]]
- 004676c8 ["COPY", "register:5048:8", ["const:0:8"]]
- 004676c8 ["COPY", "register:5050:8", ["const:0:8"]]
+ 004679e8 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:e28:8"]]
+ 004679e8 ["LOAD", "register:5040:8", ["const:1b1:8", "tmp:0:8"]]
+ 004679e8 ["COPY", "register:5048:8", ["const:0:8"]]
+ 004679e8 ["COPY", "register:5050:8", ["const:0:8"]]
- 004676cc ["INT_ADD", "tmp:0:8", ["register:4048:8", "const:de0:8"]]
- 004676cc ["LOAD", "register:5000:8", ["const:1b1:8", "tmp:0:8"]]
- 004676cc ["COPY", "register:5008:8", ["const:0:8"]]
- 004676cc ["COPY", "register:5010:8", ["const:0:8"]]
+ 004679ec ["INT_ADD", "tmp:0:8", ["register:4048:8", "const:e30:8"]]
+ 004679ec ["LOAD", "register:5000:8", ["const:1b1:8", "tmp:0:8"]]
+ 004679ec ["COPY", "register:5008:8", ["const:0:8"]]
+ 004679ec ["COPY", "register:5010:8", ["const:0:8"]]
~~~


<a id="compare-28fe35272cee0182055903b499b2e7b4"></a>

### [`004678a0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00467/004678a0.md) → [`00467bc0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00467/00467bc0.md) FUN_00467bc0

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 154件 [`005c4998`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005c4/005c4998.md) [`005c7d40`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005c7/005c7d40.md) [`005e0464`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005e0/005e0464.md) [`005e40b4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005e4/005e40b4.md) [`005ed2b4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005ed/005ed2b4.md) · 呼出先 5件 [`00467930`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00467/00467930.md) [`0046795c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00467/0046795c.md) [`00c57f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f00.md) [`00c57f20`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f20.md) [`00c57f40`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f40.md)
- 新版 呼出元 154件 [`005c4d48`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005c4/005c4d48.md) [`005c80f0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005c8/005c80f0.md) [`005e0814`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005e0/005e0814.md) [`005e4464`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005e4/005e4464.md) [`005ed664`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005ed/005ed664.md) · 呼出先 5件 [`00467c50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00467/00467c50.md) [`00467c7c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00467/00467c7c.md) [`00c58ed0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58ed0.md) [`00c58ef0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58ef0.md) [`00c58f10`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f10.md)

変更の種類 call, call_argument_candidate, call_target, constant, operands_and_dependencies, operation_sequence, return_value_candidate

命令の説明率　旧版 63.33% / 新版 63.33%

優先判定に残った影響 `call_argument_candidate` 5件, `call_target` 1件, `return_value_candidate` 1件

アドレスに依存する影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00467bf4",
      "incomplete_value": false,
      "site": "00467bf8",
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
            "const:cd0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "004678d4",
      "incomplete_value": false,
      "site": "004678d8",
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
            "const:d10:8"
          ]
        ]
      ]
    },
    "ordinal": 0,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "call_target",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "00467c08",
      "value": [
        "leaf",
        "ram:467c50:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "004678e8",
      "value": [
        "leaf",
        "ram:467930:8"
      ]
    },
    "ordinal": 1,
    "slot": 0
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00467c04",
      "incomplete_value": false,
      "site": "00467c08",
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
            "const:c68:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "004678e4",
      "incomplete_value": false,
      "site": "004678e8",
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
            "const:ca8:8"
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
      "00467bd4",
      "READ",
      [
        "storage",
        "00ca4d10",
        null,
        "undefined1"
      ]
    ],
    [
      "00467be0",
      "DATA",
      [
        "storage",
        "00ca4ca8",
        null,
        null
      ]
    ],
    [
      "00467bf4",
      "PARAM",
      [
        "storage",
        "00ca4d10",
        null,
        "undefined1"
      ]
    ]
  ],
  "added": [
    [
      "00467bd4",
      "READ",
      [
        "storage",
        "00ca5cd0",
        null,
        "undefined1"
      ]
    ],
    [
      "00467be0",
      "DATA",
      [
        "storage",
        "00ca5c68",
        null,
        null
      ]
    ],
    [
      "00467bf4",
      "PARAM",
      [
        "storage",
        "00ca5cd0",
        null,
        "undefined1"
      ]
    ]
  ]
}
~~~


~~~diff
- 004678d8 ["INT_ADD", "register:40f0:8", ["const:4678d8:8", "const:4:8"]]
- 004678d8 ["CALL", null, ["callee:00c58ef0:8"]]
+ 00467bf8 ["INT_ADD", "register:40f0:8", ["const:467bf8:8", "const:4:8"]]
+ 00467bf8 ["CALL", null, ["callee:00c58ef0:8"]]
- 004678e8 ["INT_ADD", "register:40f0:8", ["const:4678e8:8", "const:4:8"]]
- 004678e8 ["CALL", null, ["ram:467930:8"]]
+ 00467c08 ["INT_ADD", "register:40f0:8", ["const:467c08:8", "const:4:8"]]
+ 00467c08 ["CALL", null, ["ram:467c50:8"]]
- 00467904 ["INT_ADD", "register:40f0:8", ["const:467904:8", "const:4:8"]]
- 00467904 ["CALL", null, ["callee:00c58ed0:8"]]
+ 00467c24 ["INT_ADD", "register:40f0:8", ["const:467c24:8", "const:4:8"]]
+ 00467c24 ["CALL", null, ["callee:00c58ed0:8"]]
~~~


<a id="compare-490a782449bc3305a8005217ea7c1ef7"></a>

### [`004679ac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00467/004679ac.md) → [`00467ccc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00467/00467ccc.md) FUN_00467ccc

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00b2c29c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b2c/00b2c29c.md) · 呼出先 11件 [`00467dfc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00467/00467dfc.md) [`0046ca94`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046c/0046ca94.md) [`0046cb4c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046c/0046cb4c.md) [`0055a664`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0055a/0055a664.md) [`0055a6e4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0055a/0055a6e4.md)
- 新版 呼出元 1件 [`00b2d290`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b2d/00b2d290.md) · 呼出先 11件 [`0046811c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00468/0046811c.md) [`0046cdb4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0046c/0046cdb4.md) [`0046ce6c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0046c/0046ce6c.md) [`0055a984`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0055a/0055a984.md) [`0055aa04`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0055a/0055aa04.md)

変更の種類 call, call_argument_candidate, call_target, constant, operands_and_dependencies, store_value

命令の説明率　旧版 92.96% / 新版 92.96%

優先判定に残った影響 `call_argument_candidate` 2件, `call_target` 1件, `store_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00467d84",
      "incomplete_value": true,
      "site": "00467d8c",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:9a0:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00467a64",
      "incomplete_value": true,
      "site": "00467a6c",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:950:8"
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
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00467d20",
      "incomplete_value": false,
      "site": "00467d24",
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
            "const:d30:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00467a00",
      "incomplete_value": false,
      "site": "00467a04",
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
            "const:d70:8"
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
      "definition_site": "00467d44",
      "incomplete_value": false,
      "site": "00467d48",
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
            "const:d30:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00467a24",
      "incomplete_value": false,
      "site": "00467a28",
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
            "const:d70:8"
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
      "00467d20",
      "PARAM",
      [
        "storage",
        "00ca4d70",
        null,
        "undefined8"
      ]
    ],
    [
      "00467d44",
      "PARAM",
      [
        "storage",
        "00ca4d70",
        null,
        "undefined8"
      ]
    ],
    [
      "00467d68",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0055a6e4"
      ]
    ]
  ],
  "added": [
    [
      "00467d20",
      "PARAM",
      [
        "storage",
        "00ca5d30",
        null,
        "undefined8"
      ]
    ],
    [
      "00467d44",
      "PARAM",
      [
        "storage",
        "00ca5d30",
        null,
        "undefined8"
      ]
    ],
    [
      "00467d68",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0055aa04"
      ]
    ]
  ]
}
~~~


~~~diff
- 00467a04 ["INT_ADD", "register:40f0:8", ["const:467a04:8", "const:4:8"]]
- 00467a04 ["CALL", null, ["callee:0046cdb4:8"]]
+ 00467d24 ["INT_ADD", "register:40f0:8", ["const:467d24:8", "const:4:8"]]
+ 00467d24 ["CALL", null, ["callee:0046cdb4:8"]]
- 00467a28 ["INT_ADD", "register:40f0:8", ["const:467a28:8", "const:4:8"]]
- 00467a28 ["CALL", null, ["callee:0046ce6c:8"]]
+ 00467d48 ["INT_ADD", "register:40f0:8", ["const:467d48:8", "const:4:8"]]
+ 00467d48 ["CALL", null, ["callee:0046ce6c:8"]]
- 00467a48 ["INT_ADD", "register:40f0:8", ["const:467a48:8", "const:4:8"]]
- 00467a48 ["CALL", null, ["ram:55a6e4:8"]]
+ 00467d68 ["INT_ADD", "register:40f0:8", ["const:467d68:8", "const:4:8"]]
+ 00467d68 ["CALL", null, ["ram:55aa04:8"]]
~~~


<a id="compare-fd1e9390c05a30509e544e485218f232"></a>

### [`00467ac8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00467/00467ac8.md) → [`00467de8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00467/00467de8.md) FUN_00467de8

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 11件 [`005f46ec`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005f4/005f46ec.md) [`005f4dac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005f4/005f4dac.md) [`0065cd0c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0065c/0065cd0c.md) [`0065d670`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0065d/0065d670.md) [`00707f38`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00707/00707f38.md) · 呼出先 4件 [`0046ca94`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046c/0046ca94.md) [`0046cb4c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046c/0046cb4c.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md) [`0085adb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0085a/0085adb0.md)
- 新版 呼出元 11件 [`005f4a9c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005f4/005f4a9c.md) [`005f515c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005f5/005f515c.md) [`0065d0bc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0065d/0065d0bc.md) [`0065da20`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0065d/0065da20.md) [`007082e8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00708/007082e8.md) · 呼出先 4件 [`0046cdb4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0046c/0046cdb4.md) [`0046ce6c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0046c/0046ce6c.md) [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md) [`0085bd5c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0085b/0085bd5c.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 92.31% / 新版 92.31%

優先判定に残った影響 `call_argument_candidate` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00467e04",
      "incomplete_value": true,
      "site": "00467e0c",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:c08:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00467ae4",
      "incomplete_value": true,
      "site": "00467aec",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:c38:8"
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
      "definition_site": "00467e24",
      "incomplete_value": false,
      "site": "00467e28",
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
            "const:d30:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00467b04",
      "incomplete_value": false,
      "site": "00467b08",
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
            "const:d70:8"
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
      "00467e04",
      "READ",
      [
        "storage",
        "00c9ac38",
        null,
        "pointer"
      ]
    ],
    [
      "00467e04",
      "PARAM",
      [
        "storage",
        "00ca4d70",
        null,
        "undefined8"
      ]
    ],
    [
      "00467e24",
      "PARAM",
      [
        "storage",
        "00ca4d70",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00467e04",
      "READ",
      [
        "storage",
        "00c9bc08",
        null,
        "pointer"
      ]
    ],
    [
      "00467e04",
      "PARAM",
      [
        "storage",
        "00ca5d30",
        null,
        "undefined8"
      ]
    ],
    [
      "00467e24",
      "PARAM",
      [
        "storage",
        "00ca5d30",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00467aec ["INT_ADD", "register:40f0:8", ["const:467aec:8", "const:4:8"]]
- 00467aec ["CALL", null, ["callee:0046cdb4:8"]]
+ 00467e0c ["INT_ADD", "register:40f0:8", ["const:467e0c:8", "const:4:8"]]
+ 00467e0c ["CALL", null, ["callee:0046cdb4:8"]]
- 00467b08 ["INT_ADD", "register:40f0:8", ["const:467b08:8", "const:4:8"]]
- 00467b08 ["CALL", null, ["callee:0046ce6c:8"]]
+ 00467e28 ["INT_ADD", "register:40f0:8", ["const:467e28:8", "const:4:8"]]
+ 00467e28 ["CALL", null, ["callee:0046ce6c:8"]]
- 00467adc ["COPY", "register:4000:8", ["const:c9a000:8"]]
+ 00467dfc ["COPY", "register:4000:8", ["const:c9b000:8"]]
~~~


<a id="compare-037845f13f633d340ab865bad96be88c"></a>

### [`00467b3c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00467/00467b3c.md) → [`00467e5c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00467/00467e5c.md) FUN_00467e5c

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 4件 [`006bf8e4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006bf/006bf8e4.md) [`00707f38`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00707/00707f38.md) [`00789e38`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00789/00789e38.md) [`00859bb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00859/00859bb0.md) · 呼出先 3件 [`00467dfc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00467/00467dfc.md) [`0055a6e4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0055a/0055a6e4.md) [`0055a6e8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0055a/0055a6e8.md)
- 新版 呼出元 4件 [`006bfc94`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/006bf/006bfc94.md) [`007082e8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00708/007082e8.md) [`0078a214`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0078a/0078a214.md) [`0085ab5c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0085a/0085ab5c.md) · 呼出先 3件 [`0046811c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00468/0046811c.md) [`0055aa04`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0055a/0055aa04.md) [`0055aa08`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0055a/0055aa08.md)

変更の種類 call, call_target, constant, operands_and_dependencies

命令の説明率　旧版 91.67% / 新版 91.67%

優先判定に残った影響 `call_target` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_target",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "00467e74",
      "value": [
        "leaf",
        "ram:55aa04:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "00467b54",
      "value": [
        "leaf",
        "ram:55a6e4:8"
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
      "00467e74",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0055a6e4"
      ]
    ]
  ],
  "added": [
    [
      "00467e74",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0055aa04"
      ]
    ]
  ]
}
~~~


~~~diff
- 00467b54 ["INT_ADD", "register:40f0:8", ["const:467b54:8", "const:4:8"]]
- 00467b54 ["CALL", null, ["ram:55a6e4:8"]]
+ 00467e74 ["INT_ADD", "register:40f0:8", ["const:467e74:8", "const:4:8"]]
+ 00467e74 ["CALL", null, ["ram:55aa04:8"]]
- 00467b50 ["INT_ADD", "register:40f0:8", ["const:467b50:8", "const:4:8"]]
- 00467b50 ["CALL", null, ["callee:0046811c:8"]]
+ 00467e70 ["INT_ADD", "register:40f0:8", ["const:467e70:8", "const:4:8"]]
+ 00467e70 ["CALL", null, ["callee:0046811c:8"]]
~~~


<a id="compare-1e3bebd4fe4ac44880bad327898479e0"></a>

### [`00467eec`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00467/00467eec.md) → [`0046820c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00468/0046820c.md) FUN_0046820c

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 3件 [`005ed2b4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005ed/005ed2b4.md) [`00707f38`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00707/00707f38.md) [`00789e38`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00789/00789e38.md) · 呼出先 5件 [`00467dfc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00467/00467dfc.md) [`0055a6e4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0055a/0055a6e4.md) [`0055a6e8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0055a/0055a6e8.md) [`0055a6ec`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0055a/0055a6ec.md) [`0055a6f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0055a/0055a6f0.md)
- 新版 呼出元 3件 [`005ed664`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005ed/005ed664.md) [`007082e8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00708/007082e8.md) [`0078a214`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0078a/0078a214.md) · 呼出先 5件 [`0046811c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00468/0046811c.md) [`0055aa04`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0055a/0055aa04.md) [`0055aa08`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0055a/0055aa08.md) [`0055aa0c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0055a/0055aa0c.md) [`0055aa10`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0055a/0055aa10.md)

変更の種類 call, call_target, constant, operands_and_dependencies

命令の説明率　旧版 96.43% / 新版 96.43%

優先判定に残った影響 `call_target` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_target",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "0046822c",
      "value": [
        "leaf",
        "ram:55aa04:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "00467f0c",
      "value": [
        "leaf",
        "ram:55a6e4:8"
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
      "0046822c",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0055a6e4"
      ]
    ]
  ],
  "added": [
    [
      "0046822c",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0055aa04"
      ]
    ]
  ]
}
~~~


~~~diff
- 00467f0c ["INT_ADD", "register:40f0:8", ["const:467f0c:8", "const:4:8"]]
- 00467f0c ["CALL", null, ["ram:55a6e4:8"]]
+ 0046822c ["INT_ADD", "register:40f0:8", ["const:46822c:8", "const:4:8"]]
+ 0046822c ["CALL", null, ["ram:55aa04:8"]]
- 00467f08 ["INT_ADD", "register:40f0:8", ["const:467f08:8", "const:4:8"]]
- 00467f08 ["CALL", null, ["callee:0046811c:8"]]
+ 00468228 ["INT_ADD", "register:40f0:8", ["const:468228:8", "const:4:8"]]
+ 00468228 ["CALL", null, ["callee:0046811c:8"]]
- 00467f18 ["INT_ADD", "register:40f0:8", ["const:467f18:8", "const:4:8"]]
- 00467f18 ["CALL", null, ["callee:0055aa08:8"]]
+ 00468238 ["INT_ADD", "register:40f0:8", ["const:468238:8", "const:4:8"]]
+ 00468238 ["CALL", null, ["callee:0055aa08:8"]]
~~~


<a id="compare-b274adb06ec2de35bed544980acb189b"></a>

### [`00468200`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00468/00468200.md) → [`00468520`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00468/00468520.md) FUN_00468520

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 5件 [`005ed2b4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005ed/005ed2b4.md) [`005ef5ec`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005ef/005ef5ec.md) [`006b621c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006b6/006b621c.md) [`007df140`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007df/007df140.md) [`00925a24`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00925/00925a24.md) · 呼出先 12件 [`00440f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00440/00440f00.md) [`00467dfc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00467/00467dfc.md) [`00468528`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00468/00468528.md) [`00468540`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00468/00468540.md) [`0046c48c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046c/0046c48c.md)
- 新版 呼出元 5件 [`005ed664`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005ed/005ed664.md) [`005ef99c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005ef/005ef99c.md) [`006b65cc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/006b6/006b65cc.md) [`007e00a4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007e0/007e00a4.md) [`009269d0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00926/009269d0.md) · 呼出先 12件 [`00441220`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00441/00441220.md) [`0046811c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00468/0046811c.md) [`00468848`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00468/00468848.md) [`00468860`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00468/00468860.md) [`0046c7ac`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0046c/0046c7ac.md)

変更の種類 branch_value, call_argument_candidate, constant, operands_and_dependencies, store_destination

命令の説明率　旧版 89.60% / 新版 89.60%

優先判定に残った影響 `call_argument_candidate` 8件, `store_destination` 4件

アドレスに依存する影響 `branch_value` 1件, `call_argument_candidate` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_destination",
    "new": {
      "definition_site": "004685dc",
      "incomplete_value": true,
      "site": "004685dc",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:4050:8"
          ],
          [
            "leaf",
            "const:ce0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "004682bc",
      "incomplete_value": true,
      "site": "004682bc",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:4050:8"
          ],
          [
            "leaf",
            "const:d20:8"
          ]
        ]
      ]
    },
    "ordinal": 28,
    "slot": 1
  },
  {
    "confidence": "bounded",
    "kind": "store_destination",
    "new": {
      "definition_site": "004686d4",
      "incomplete_value": false,
      "site": "004686d4",
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
            "const:cd8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "004683b4",
      "incomplete_value": false,
      "site": "004683b4",
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
            "const:d18:8"
          ]
        ]
      ]
    },
    "ordinal": 35,
    "slot": 1
  },
  {
    "confidence": "bounded",
    "kind": "store_destination",
    "new": {
      "definition_site": "004686d4",
      "incomplete_value": false,
      "site": "004686d4",
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
                "const:cd8:8"
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
      "definition_site": "004683b4",
      "incomplete_value": false,
      "site": "004683b4",
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
                "const:d18:8"
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
    "ordinal": 36,
    "slot": 1
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "0046855c",
      "READ",
      [
        "storage",
        "00ca4d30",
        null,
        "undefined1"
      ]
    ],
    [
      "00468578",
      "READ",
      [
        "storage",
        "00ca4d18",
        null,
        "undefined8"
      ]
    ],
    [
      "00468580",
      "WRITE",
      [
        "storage",
        "00ca4d20",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "0046855c",
      "READ",
      [
        "storage",
        "00ca5cf0",
        null,
        "undefined1"
      ]
    ],
    [
      "00468578",
      "READ",
      [
        "storage",
        "00ca5cd8",
        null,
        "undefined8"
      ]
    ],
    [
      "00468580",
      "WRITE",
      [
        "storage",
        "00ca5ce0",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 004682bc ["INT_ADD", "tmp:0:8", ["register:4050:8", "const:d20:8"]]
- 004682bc ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:40e0:8"]]
+ 004685dc ["INT_ADD", "tmp:0:8", ["register:4050:8", "const:ce0:8"]]
+ 004685dc ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:40e0:8"]]
- 00468414 ["INT_ADD", "register:40f0:8", ["const:468414:8", "const:4:8"]]
- 00468414 ["CALL", null, ["callee:00468860:8"]]
+ 00468734 ["INT_ADD", "register:40f0:8", ["const:468734:8", "const:4:8"]]
+ 00468734 ["CALL", null, ["callee:00468860:8"]]
- 00468494 ["INT_ADD", "register:40f0:8", ["const:468494:8", "const:4:8"]]
- 00468494 ["CALL", null, ["callee:0046c7ac:8"]]
+ 004687b4 ["INT_ADD", "register:40f0:8", ["const:4687b4:8", "const:4:8"]]
+ 004687b4 ["CALL", null, ["callee:0046c7ac:8"]]
~~~


<a id="compare-eff65cde453022749c3a78f089205f3d"></a>

### [`0046c48c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046c/0046c48c.md) → [`0046c7ac`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0046c/0046c7ac.md) FUN_0046c7ac

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 10件 [`00468200`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00468/00468200.md) [`00468540`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00468/00468540.md) [`005554b8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00555/005554b8.md) [`00555e4c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00555/00555e4c.md) [`00559c50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00559/00559c50.md) · 呼出先 1件 [`0043b7b8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b7b8.md)
- 新版 呼出元 10件 [`00468520`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00468/00468520.md) [`00468860`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00468/00468860.md) [`005557d8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00555/005557d8.md) [`0055616c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00556/0055616c.md) [`00559f70`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00559/00559f70.md) · 呼出先 1件 [`0043bad8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bad8.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 80.00% / 新版 80.00%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "0046c7b8",
      "incomplete_value": false,
      "site": "0046c7bc",
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
      "definition_site": "0046c498",
      "incomplete_value": false,
      "site": "0046c49c",
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
      "0046c7b8",
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
      "0046c7b8",
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
- 0046c49c ["INT_ADD", "register:40f0:8", ["const:46c49c:8", "const:4:8"]]
- 0046c49c ["CALL", null, ["callee:0043bad8:8"]]
+ 0046c7bc ["INT_ADD", "register:40f0:8", ["const:46c7bc:8", "const:4:8"]]
+ 0046c7bc ["CALL", null, ["callee:0043bad8:8"]]
- 0046c494 ["COPY", "register:4000:8", ["const:2b7000:8"]]
+ 0046c7b4 ["COPY", "register:4000:8", ["const:2b8000:8"]]
- 0046c498 ["COPY", "tmp:0:8", ["const:f8c:8"]]
- 0046c498 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 0046c498 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 0046c498 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 0046c7b8 ["COPY", "tmp:0:8", ["const:5b:8"]]
+ 0046c7b8 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 0046c7b8 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 0046c7b8 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
~~~


<a id="compare-46f227a0b818a0bb496e8bbe1b31de05"></a>

### [`0046c4a0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046c/0046c4a0.md) → [`0046c7c0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0046c/0046c7c0.md) FUN_0046c7c0

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 7件 [`0046803c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00468/0046803c.md) [`005599a4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00559/005599a4.md) [`005de6c0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005de/005de6c0.md) [`00812f24`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00812/00812f24.md) [`00813ea8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00813/00813ea8.md) · 呼出先 1件 [`0043b7b8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b7b8.md)
- 新版 呼出元 7件 [`0046835c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00468/0046835c.md) [`00559cc4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00559/00559cc4.md) [`005dea70`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005de/005dea70.md) [`00813e88`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00813/00813e88.md) [`00814e0c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00814/00814e0c.md) · 呼出先 1件 [`0043bad8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bad8.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 80.00% / 新版 80.00%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "0046c7cc",
      "incomplete_value": false,
      "site": "0046c7d0",
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
      "definition_site": "0046c4ac",
      "incomplete_value": false,
      "site": "0046c4b0",
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
      "0046c7cc",
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
      "0046c7cc",
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
- 0046c4b0 ["INT_ADD", "register:40f0:8", ["const:46c4b0:8", "const:4:8"]]
- 0046c4b0 ["CALL", null, ["callee:0043bad8:8"]]
+ 0046c7d0 ["INT_ADD", "register:40f0:8", ["const:46c7d0:8", "const:4:8"]]
+ 0046c7d0 ["CALL", null, ["callee:0043bad8:8"]]
- 0046c4a8 ["COPY", "register:4000:8", ["const:2b7000:8"]]
+ 0046c7c8 ["COPY", "register:4000:8", ["const:2b8000:8"]]
- 0046c4ac ["COPY", "tmp:0:8", ["const:f8c:8"]]
- 0046c4ac ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 0046c4ac ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 0046c4ac ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 0046c7cc ["COPY", "tmp:0:8", ["const:5b:8"]]
+ 0046c7cc ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 0046c7cc ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 0046c7cc ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
~~~


<a id="compare-8e2951d558a75bb56270f040d692f5fb"></a>

### [`0046c654`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046c/0046c654.md) → [`0046c974`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0046c/0046c974.md) FUN_0046c974

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`0046c4b4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046c/0046c4b4.md) · 呼出先 1件 [`0043b7b8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b7b8.md)
- 新版 呼出元 1件 [`0046c7d4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0046c/0046c7d4.md) · 呼出先 1件 [`0043bad8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bad8.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 80.00% / 新版 80.00%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "0046c980",
      "incomplete_value": false,
      "site": "0046c984",
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
      "definition_site": "0046c660",
      "incomplete_value": false,
      "site": "0046c664",
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
      "0046c980",
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
      "0046c980",
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
- 0046c664 ["INT_ADD", "register:40f0:8", ["const:46c664:8", "const:4:8"]]
- 0046c664 ["CALL", null, ["callee:0043bad8:8"]]
+ 0046c984 ["INT_ADD", "register:40f0:8", ["const:46c984:8", "const:4:8"]]
+ 0046c984 ["CALL", null, ["callee:0043bad8:8"]]
- 0046c65c ["COPY", "register:4000:8", ["const:2b7000:8"]]
+ 0046c97c ["COPY", "register:4000:8", ["const:2b8000:8"]]
- 0046c660 ["COPY", "tmp:0:8", ["const:f8c:8"]]
- 0046c660 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 0046c660 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 0046c660 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 0046c980 ["COPY", "tmp:0:8", ["const:5b:8"]]
+ 0046c980 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 0046c980 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 0046c980 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
~~~


<a id="compare-46f7a0fe2e59d70129d7aebb52bf15f8"></a>

### [`0046c668`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046c/0046c668.md) → [`0046c988`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0046c/0046c988.md) _INIT_12

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 5件 [`0043aeb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043a/0043aeb0.md) [`0043b838`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b838.md) [`00c57f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f00.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)
- 新版 呼出元 0件  · 呼出先 5件 [`0043b1d0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043b1d0.md) [`0043bb58`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bb58.md) [`00c58ed0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58ed0.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies, operation_sequence, store_destination, store_value

命令の説明率　旧版 83.05% / 新版 83.05%

優先判定に残った影響 `call_argument_candidate` 4件, `store_destination` 3件, `store_value` 8件

アドレスに依存する影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "0046c9c4",
      "incomplete_value": true,
      "site": "0046c9e0",
      "value": [
        "LOAD",
        "16",
        [
          [
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
      "definition_site": "0046c6a4",
      "incomplete_value": true,
      "site": "0046c6c0",
      "value": [
        "LOAD",
        "16",
        [
          [
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
      "definition_site": "0046c9e8",
      "incomplete_value": true,
      "site": "0046ca04",
      "value": [
        "LOAD",
        "16",
        [
          [
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
      "definition_site": "0046c6c8",
      "incomplete_value": true,
      "site": "0046c6e4",
      "value": [
        "LOAD",
        "16",
        [
          [
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
      "definition_site": "0046ca08",
      "incomplete_value": true,
      "site": "0046ca24",
      "value": [
        "LOAD",
        "16",
        [
          [
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
      "definition_site": "0046c6e8",
      "incomplete_value": true,
      "site": "0046c704",
      "value": [
        "LOAD",
        "16",
        [
          [
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
      "0046c9c4",
      "READ",
      [
        "storage",
        "002b7f66",
        null,
        "string"
      ]
    ],
    [
      "0046c9e8",
      "READ",
      [
        "storage",
        "002b7f79",
        null,
        "string"
      ]
    ],
    [
      "0046ca08",
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
      "0046c9c4",
      "READ",
      [
        "storage",
        "002b8035",
        null,
        "string"
      ]
    ],
    [
      "0046c9e8",
      "READ",
      [
        "storage",
        "002b8048",
        null,
        "string"
      ]
    ],
    [
      "0046ca08",
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
- 0046c7c8 ["INT_ADD", "register:40f0:8", ["const:46c7c8:8", "const:4:8"]]
- 0046c7c8 ["CALL", null, ["callee:0043bb58:8"]]
+ 0046cae8 ["INT_ADD", "register:40f0:8", ["const:46cae8:8", "const:4:8"]]
+ 0046cae8 ["CALL", null, ["callee:0043bb58:8"]]
- 0046c89c ["INT_ADD", "register:40f0:8", ["const:46c89c:8", "const:4:8"]]
- 0046c89c ["CALL", null, ["callee:00c58ed0:8"]]
+ 0046cbbc ["INT_ADD", "register:40f0:8", ["const:46cbbc:8", "const:4:8"]]
+ 0046cbbc ["CALL", null, ["callee:00c58ed0:8"]]
- 0046c690 ["COPY", "register:4098:8", ["const:ca4000:8"]]
+ 0046c9b0 ["COPY", "register:4098:8", ["const:ca5000:8"]]
~~~


<a id="compare-f884ed1a87bf7677f5ba7a801b87a180"></a>

### [`0046cae4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046c/0046cae4.md) → [`0046ce04`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0046c/0046ce04.md) FUN_0046ce04

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed`

- 旧版 呼出元 1件 [`00b2bc68`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b2b/00b2bc68.md) · 呼出先 0件 
- 新版 呼出元 1件 [`00b2cc5c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b2c/00b2cc5c.md) · 呼出先 0件 

変更の種類 constant, operands_and_dependencies, store_destination

命令の説明率　旧版 75.00% / 新版 75.00%

優先判定に残った影響 `store_destination` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_destination",
    "new": {
      "definition_site": "0046ce0c",
      "incomplete_value": false,
      "site": "0046ce0c",
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
            "const:d74:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0046caec",
      "incomplete_value": false,
      "site": "0046caec",
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
            "const:db4:8"
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
      "0046ce0c",
      "WRITE",
      [
        "storage",
        "00ca4db4",
        null,
        "undefined1"
      ]
    ]
  ],
  "added": [
    [
      "0046ce0c",
      "WRITE",
      [
        "storage",
        "00ca5d74",
        null,
        "undefined1"
      ]
    ]
  ]
}
~~~


~~~diff
- 0046caec ["COPY", "tmp:0:4", ["register:4048:4"]]
- 0046caec ["INT_ADD", "tmp:1:8", ["register:4040:8", "const:db4:8"]]
- 0046caec ["STORE", null, ["const:1b1:8", "tmp:1:8", "tmp:0:1"]]
+ 0046ce0c ["COPY", "tmp:0:4", ["register:4048:4"]]
+ 0046ce0c ["INT_ADD", "tmp:1:8", ["register:4040:8", "const:d74:8"]]
+ 0046ce0c ["STORE", null, ["const:1b1:8", "tmp:1:8", "tmp:0:1"]]
- 0046cae4 ["COPY", "register:4040:8", ["const:ca4000:8"]]
+ 0046ce04 ["COPY", "register:4040:8", ["const:ca5000:8"]]
~~~


<a id="compare-35649ad298e03ca3f3059cdbc8df133d"></a>

### [`0046cb4c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046c/0046cb4c.md) → [`0046ce6c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0046c/0046ce6c.md) FUN_0046ce6c

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 26件 [`004679ac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00467/004679ac.md) [`00467ac8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00467/00467ac8.md) [`00490b74`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00490/00490b74.md) [`00492160`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00492/00492160.md) [`004925ac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00492/004925ac.md) · 呼出先 0件 
- 新版 呼出元 26件 [`00467ccc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00467/00467ccc.md) [`00467de8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00467/00467de8.md) [`00490e94`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00490/00490e94.md) [`00492480`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00492/00492480.md) [`004928cc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00492/004928cc.md) · 呼出先 0件 

変更の種類 constant, operands_and_dependencies, return_value_candidate

命令の説明率　旧版 60.00% / 新版 60.00%

優先判定に残った影響 `return_value_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "return_value_candidate",
    "new": {
      "definition_site": "0046ceac",
      "incomplete_value": true,
      "site": "0046ceb0",
      "value": [
        "TRUNC",
        "4",
        [
          [
            "FLOAT_DIV",
            "4",
            [
              "FLOAT_MULT",
              "INT2FLOAT"
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0046cb8c",
      "incomplete_value": true,
      "site": "0046cb90",
      "value": [
        "TRUNC",
        "4",
        [
          [
            "FLOAT_DIV",
            "4",
            [
              "FLOAT_MULT",
              "INT2FLOAT"
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
      "0046ce90",
      "READ",
      [
        "storage",
        "00ca4da4",
        null,
        "undefined4"
      ]
    ],
    [
      "0046ce94",
      "READ",
      [
        "storage",
        "00ca4d78",
        null,
        "undefined4"
      ]
    ]
  ],
  "added": [
    [
      "0046ce90",
      "READ",
      [
        "storage",
        "00ca5d64",
        null,
        "undefined4"
      ]
    ],
    [
      "0046ce94",
      "READ",
      [
        "storage",
        "00ca5d38",
        null,
        "undefined4"
      ]
    ]
  ]
}
~~~


~~~diff
- 0046cb64 ["COPY", "register:4040:8", ["const:ca4000:8"]]
+ 0046ce84 ["COPY", "register:4040:8", ["const:ca5000:8"]]
- 0046cb68 ["COPY", "tmp:0:8", ["const:d78:8"]]
- 0046cb68 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 0046cb68 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 0046cb68 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 0046ce88 ["COPY", "tmp:0:8", ["const:d38:8"]]
+ 0046ce88 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 0046ce88 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 0046ce88 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-ea2dc19acd5907cce2dd901f883a3324"></a>

### [`0046cc5c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046c/0046cc5c.md) → [`0046cf7c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0046c/0046cf7c.md) FUN_0046cf7c

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 5件 [`005f6c94`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005f6/005f6c94.md) [`005f7170`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005f7/005f7170.md) [`00707f38`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00707/00707f38.md) [`00a47f54`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a47/00a47f54.md) [`00a4f368`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a4f/00a4f368.md) · 呼出先 0件 
- 新版 呼出元 5件 [`005f7044`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005f7/005f7044.md) [`005f7520`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005f7/005f7520.md) [`007082e8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00708/007082e8.md) [`00a48f48`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a48/00a48f48.md) [`00a5035c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a50/00a5035c.md) · 呼出先 0件 

変更の種類 constant, operands_and_dependencies, return_value_candidate

命令の説明率　旧版 59.09% / 新版 59.09%

優先判定に残った影響 `return_value_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "return_value_candidate",
    "new": {
      "definition_site": "0046cfc4",
      "incomplete_value": true,
      "site": "0046cfc8",
      "value": [
        "INT_ZEXT",
        "8",
        [
          [
            "INT_SUB",
            "4",
            [
              [
                "live",
                "register:4048:4"
              ],
              "TRUNC"
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0046cca4",
      "incomplete_value": true,
      "site": "0046cca8",
      "value": [
        "INT_ZEXT",
        "8",
        [
          [
            "INT_SUB",
            "4",
            [
              [
                "live",
                "register:4048:4"
              ],
              "TRUNC"
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
      "0046cfa0",
      "READ",
      [
        "storage",
        "00ca4da8",
        null,
        "undefined4"
      ]
    ],
    [
      "0046cfa4",
      "READ",
      [
        "storage",
        "00ca4d7c",
        null,
        "undefined4"
      ]
    ]
  ],
  "added": [
    [
      "0046cfa0",
      "READ",
      [
        "storage",
        "00ca5d68",
        null,
        "undefined4"
      ]
    ],
    [
      "0046cfa4",
      "READ",
      [
        "storage",
        "00ca5d3c",
        null,
        "undefined4"
      ]
    ]
  ]
}
~~~


~~~diff
- 0046cc74 ["COPY", "register:4040:8", ["const:ca4000:8"]]
+ 0046cf94 ["COPY", "register:4040:8", ["const:ca5000:8"]]
- 0046cc78 ["COPY", "tmp:0:8", ["const:d7c:8"]]
- 0046cc78 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 0046cc78 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 0046cc78 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 0046cf98 ["COPY", "tmp:0:8", ["const:d3c:8"]]
+ 0046cf98 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 0046cf98 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 0046cf98 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-4c4f6e1d851fead38dda0b359ba9a5de"></a>

### [`0046cd34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046c/0046cd34.md) → [`0046d054`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0046d/0046d054.md) _INIT_13

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 5件 [`0043aeb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043a/0043aeb0.md) [`0043b838`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b838.md) [`00c57f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f00.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)
- 新版 呼出元 0件  · 呼出先 5件 [`0043b1d0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043b1d0.md) [`0043bb58`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bb58.md) [`00c58ed0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58ed0.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies, operation_sequence, store_destination, store_value

命令の説明率　旧版 80.54% / 新版 80.54%

優先判定に残った影響 `call_argument_candidate` 4件, `store_destination` 8件, `store_value` 8件

アドレスに依存する影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "0046d090",
      "incomplete_value": true,
      "site": "0046d0ac",
      "value": [
        "LOAD",
        "16",
        [
          [
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
      "definition_site": "0046cd70",
      "incomplete_value": true,
      "site": "0046cd8c",
      "value": [
        "LOAD",
        "16",
        [
          [
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
      "definition_site": "0046d0b4",
      "incomplete_value": true,
      "site": "0046d0d0",
      "value": [
        "LOAD",
        "16",
        [
          [
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
      "definition_site": "0046cd94",
      "incomplete_value": true,
      "site": "0046cdb0",
      "value": [
        "LOAD",
        "16",
        [
          [
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
      "definition_site": "0046d0d4",
      "incomplete_value": true,
      "site": "0046d0f0",
      "value": [
        "LOAD",
        "16",
        [
          [
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
      "definition_site": "0046cdb4",
      "incomplete_value": true,
      "site": "0046cdd0",
      "value": [
        "LOAD",
        "16",
        [
          [
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
      "0046d090",
      "READ",
      [
        "storage",
        "002b7f66",
        null,
        "string"
      ]
    ],
    [
      "0046d0b4",
      "READ",
      [
        "storage",
        "002b7f79",
        null,
        "string"
      ]
    ],
    [
      "0046d0d4",
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
      "0046d090",
      "READ",
      [
        "storage",
        "002b8035",
        null,
        "string"
      ]
    ],
    [
      "0046d0b4",
      "READ",
      [
        "storage",
        "002b8048",
        null,
        "string"
      ]
    ],
    [
      "0046d0d4",
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
- 0046ce94 ["INT_ADD", "register:40f0:8", ["const:46ce94:8", "const:4:8"]]
- 0046ce94 ["CALL", null, ["callee:0043bb58:8"]]
+ 0046d1b4 ["INT_ADD", "register:40f0:8", ["const:46d1b4:8", "const:4:8"]]
+ 0046d1b4 ["CALL", null, ["callee:0043bb58:8"]]
- 0046cf68 ["INT_ADD", "register:40f0:8", ["const:46cf68:8", "const:4:8"]]
- 0046cf68 ["CALL", null, ["callee:00c58ed0:8"]]
+ 0046d288 ["INT_ADD", "register:40f0:8", ["const:46d288:8", "const:4:8"]]
+ 0046d288 ["CALL", null, ["callee:00c58ed0:8"]]
- 0046cd5c ["COPY", "register:4098:8", ["const:ca4000:8"]]
+ 0046d07c ["COPY", "register:4098:8", ["const:ca5000:8"]]
~~~


<a id="compare-07cb0c744a20b36533e6c287f0da4379"></a>

### [`0046d0e4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046d/0046d0e4.md) → [`0046d404`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0046d/0046d404.md) FUN_0046d404

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 2件 [`0048ce94`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048c/0048ce94.md) [`00b1f4c4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b1f/00b1f4c4.md) · 呼出先 4件 [`0046d158`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046d/0046d158.md) [`00c57f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f00.md) [`00c57f20`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f20.md) [`00c57f40`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f40.md)
- 新版 呼出元 2件 [`0048d1b4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0048d/0048d1b4.md) [`00b204b8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b20/00b204b8.md) · 呼出先 4件 [`0046d478`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0046d/0046d478.md) [`00c58ed0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58ed0.md) [`00c58ef0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58ef0.md) [`00c58f10`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f10.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies, return_value_candidate, store_destination, store_value

命令の説明率　旧版 62.07% / 新版 62.07%

優先判定に残った影響 `call_argument_candidate` 4件, `return_value_candidate` 1件, `store_destination` 3件, `store_value` 1件

アドレスに依存する影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_destination",
    "new": {
      "definition_site": "0046d458",
      "incomplete_value": false,
      "site": "0046d458",
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
                "const:d78:8"
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
      "definition_site": "0046d138",
      "incomplete_value": false,
      "site": "0046d138",
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
                "const:db8:8"
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
    "ordinal": 2,
    "slot": 1
  },
  {
    "confidence": "bounded",
    "kind": "store_destination",
    "new": {
      "definition_site": "0046d45c",
      "incomplete_value": false,
      "site": "0046d45c",
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
                "const:d78:8"
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
      "definition_site": "0046d13c",
      "incomplete_value": false,
      "site": "0046d13c",
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
                "const:db8:8"
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
    "ordinal": 3,
    "slot": 1
  },
  {
    "confidence": "bounded",
    "kind": "store_destination",
    "new": {
      "definition_site": "0046d460",
      "incomplete_value": false,
      "site": "0046d460",
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
            "const:d78:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0046d140",
      "incomplete_value": false,
      "site": "0046d140",
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
            "const:db8:8"
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
      "0046d414",
      "READ",
      [
        "storage",
        "00ca4dd0",
        null,
        "undefined1"
      ]
    ],
    [
      "0046d420",
      "DATA",
      [
        "storage",
        "00ca4db8",
        null,
        "undefined8"
      ]
    ],
    [
      "0046d430",
      "PARAM",
      [
        "storage",
        "00ca4dd0",
        null,
        "undefined1"
      ]
    ]
  ],
  "added": [
    [
      "0046d414",
      "READ",
      [
        "storage",
        "00ca5d90",
        null,
        "undefined1"
      ]
    ],
    [
      "0046d420",
      "DATA",
      [
        "storage",
        "00ca5d78",
        null,
        "undefined8"
      ]
    ],
    [
      "0046d430",
      "PARAM",
      [
        "storage",
        "00ca5d90",
        null,
        "undefined1"
      ]
    ]
  ]
}
~~~


~~~diff
- 0046d114 ["INT_ADD", "register:40f0:8", ["const:46d114:8", "const:4:8"]]
- 0046d114 ["CALL", null, ["callee:00c58ef0:8"]]
+ 0046d434 ["INT_ADD", "register:40f0:8", ["const:46d434:8", "const:4:8"]]
+ 0046d434 ["CALL", null, ["callee:00c58ef0:8"]]
- 0046d144 ["INT_ADD", "register:40f0:8", ["const:46d144:8", "const:4:8"]]
- 0046d144 ["CALL", null, ["callee:00c58ed0:8"]]
+ 0046d464 ["INT_ADD", "register:40f0:8", ["const:46d464:8", "const:4:8"]]
+ 0046d464 ["CALL", null, ["callee:00c58ed0:8"]]
- 0046d150 ["INT_ADD", "register:40f0:8", ["const:46d150:8", "const:4:8"]]
- 0046d150 ["CALL", null, ["callee:00c58f10:8"]]
+ 0046d470 ["INT_ADD", "register:40f0:8", ["const:46d470:8", "const:4:8"]]
+ 0046d470 ["CALL", null, ["callee:00c58f10:8"]]
~~~


<a id="compare-84ca88c8bfaac3eadc137122c22fbf54"></a>

### [`0046d160`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046d/0046d160.md) → [`0046d480`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0046d/0046d480.md) FUN_0046d480

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`00b1f4c4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b1f/00b1f4c4.md) · 呼出先 15件 [`0043bbe4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bbe4.md) [`0046d4d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046d/0046d4d0.md) [`0046d5e8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046d/0046d5e8.md) [`0048796c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00487/0048796c.md) [`00487aa4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00487/00487aa4.md)
- 新版 呼出元 1件 [`00b204b8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b20/00b204b8.md) · 呼出先 15件 [`0043bf04`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bf04.md) [`0046d7f0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0046d/0046d7f0.md) [`0046d908`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0046d/0046d908.md) [`00487c8c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00487/00487c8c.md) [`00487dc4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00487/00487dc4.md)

変更の種類 constant, operands_and_dependencies, operation_sequence, store_destination, store_value

命令の説明率　旧版 89.10% / 新版 89.10%

優先判定に残った影響 `store_destination` 1件, `store_value` 6件

アドレスに依存する影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "0046d4cc",
      "incomplete_value": false,
      "site": "0046d4d8",
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
      "definition_site": "0046d1ac",
      "incomplete_value": false,
      "site": "0046d1b8",
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
      "definition_site": "0046d4f0",
      "incomplete_value": true,
      "site": "0046d4f0",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:3ee:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0046d1d0",
      "incomplete_value": true,
      "site": "0046d1d0",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:323:8"
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
      "definition_site": "0046d4e8",
      "incomplete_value": true,
      "site": "0046d4f4",
      "value": [
        "LOAD",
        "8",
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
      "definition_site": "0046d1c8",
      "incomplete_value": true,
      "site": "0046d1d4",
      "value": [
        "LOAD",
        "8",
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
      "0046d4d8",
      "DATA",
      [
        "storage",
        "00c64e08",
        null,
        "undefined *"
      ]
    ],
    [
      "0046d4e0",
      "READ",
      [
        "storage",
        "002a5323",
        null,
        "string"
      ]
    ],
    [
      "0046d4e8",
      "READ",
      [
        "storage",
        "002a532a",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "0046d4d8",
      "DATA",
      [
        "storage",
        "00c65dd8",
        null,
        "undefined *"
      ]
    ],
    [
      "0046d4e0",
      "READ",
      [
        "storage",
        "002a53ee",
        null,
        "string"
      ]
    ],
    [
      "0046d4e8",
      "READ",
      [
        "storage",
        "002a53f5",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 0046d190 ["INT_ADD", "register:40f0:8", ["const:46d190:8", "const:4:8"]]
- 0046d190 ["CALL", null, ["callee:0046d7f0:8"]]
+ 0046d4b0 ["INT_ADD", "register:40f0:8", ["const:46d4b0:8", "const:4:8"]]
+ 0046d4b0 ["CALL", null, ["callee:0046d7f0:8"]]
- 0046d1a4 ["INT_ADD", "register:40f0:8", ["const:46d1a4:8", "const:4:8"]]
- 0046d1a4 ["CALL", null, ["callee:00488180:8"]]
+ 0046d4c4 ["INT_ADD", "register:40f0:8", ["const:46d4c4:8", "const:4:8"]]
+ 0046d4c4 ["CALL", null, ["callee:00488180:8"]]
- 0046d1a8 ["COPY", "register:4040:8", ["const:c64000:8"]]
+ 0046d4c8 ["COPY", "register:4040:8", ["const:c65000:8"]]
~~~


<a id="compare-54d21b5114988cba81d97c23ca166bfc"></a>

### [`0046d530`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046d/0046d530.md) → [`0046d850`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0046d/0046d850.md) FUN_0046d850

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 4件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c58070`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58070.md) [`00c58080`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58080.md) [`00c58090`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58090.md)
- 新版 呼出元 0件  · 呼出先 4件 [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c59040`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59040.md) [`00c59050`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59050.md) [`00c59060`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59060.md)

変更の種類 constant, operands_and_dependencies, operation_sequence, store_destination, store_value

命令の説明率　旧版 73.91% / 新版 73.91%

優先判定に残った影響 `store_destination` 1件, `store_value` 3件

アドレスに依存する影響 `store_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "0046d880",
      "incomplete_value": true,
      "site": "0046d888",
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
      "definition_site": "0046d560",
      "incomplete_value": true,
      "site": "0046d568",
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
    "ordinal": 6,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "0046d88c",
      "incomplete_value": true,
      "site": "0046d88c",
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
      "definition_site": "0046d56c",
      "incomplete_value": true,
      "site": "0046d56c",
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
    "ordinal": 7,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_destination",
    "new": {
      "definition_site": "0046d89c",
      "incomplete_value": true,
      "site": "0046d89c",
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
      "definition_site": "0046d57c",
      "incomplete_value": true,
      "site": "0046d57c",
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
      "0046d86c",
      "READ",
      [
        "storage",
        "00c9ac80",
        null,
        "pointer"
      ]
    ],
    [
      "0046d870",
      "READ",
      [
        "storage",
        "00c9ac88",
        null,
        "pointer"
      ]
    ],
    [
      "0046d87c",
      "READ",
      [
        "storage",
        "00c932d0",
        "std::__ndk1::basic_ostringstream<char,std::__ndk1::char_traits<char>,std::__ndk1::allocator<char>>::VTT",
        "pointer __((offset(0x18)))"
      ]
    ]
  ],
  "added": [
    [
      "0046d86c",
      "READ",
      [
        "storage",
        "00c9bc50",
        null,
        "pointer"
      ]
    ],
    [
      "0046d870",
      "READ",
      [
        "storage",
        "00c9bc58",
        null,
        "pointer"
      ]
    ],
    [
      "0046d87c",
      "READ",
      [
        "storage",
        "00c942a0",
        "std::__ndk1::basic_ostringstream<char,std::__ndk1::char_traits<char>,std::__ndk1::allocator<char>>::VTT",
        "pointer __((offset(0x18)))"
      ]
    ]
  ]
}
~~~


~~~diff
- 0046d540 ["COPY", "register:4040:8", ["const:c9a000:8"]]
+ 0046d860 ["COPY", "register:4040:8", ["const:c9b000:8"]]
- 0046d544 ["COPY", "register:40b0:8", ["const:c9a000:8"]]
+ 0046d864 ["COPY", "register:40b0:8", ["const:c9b000:8"]]
- 0046d54c ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:c80:8"]]
- 0046d54c ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
+ 0046d86c ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:c50:8"]]
+ 0046d86c ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-ba8872e9b424c94f7d56d226b2745e6c"></a>

### [`0046db40`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046d/0046db40.md) → [`0046de60`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0046d/0046de60.md) FUN_0046de60

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 15件 [`0046d800`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046d/0046d800.md) [`0055fcbc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0055f/0055fcbc.md) [`0055fd14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0055f/0055fd14.md) [`005e81d8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005e8/005e81d8.md) [`00865b4c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00865/00865b4c.md) · 呼出先 2件 [`0046dc70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046d/0046dc70.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)
- 新版 呼出元 15件 [`0046db20`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0046d/0046db20.md) [`0055ffdc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0055f/0055ffdc.md) [`00560034`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00560/00560034.md) [`005e8588`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005e8/005e8588.md) [`00866af8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00866/00866af8.md) · 呼出先 2件 [`0046df90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0046d/0046df90.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 94.74% / 新版 94.74%

優先判定に残った影響 `store_value` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "0046df38",
      "incomplete_value": true,
      "site": "0046df50",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:780:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0046dc18",
      "incomplete_value": true,
      "site": "0046dc30",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:730:8"
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
      "definition_site": "0046df54",
      "incomplete_value": true,
      "site": "0046df60",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:bf0:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0046dc34",
      "incomplete_value": true,
      "site": "0046dc40",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:ba0:8"
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
      "0046df38",
      "READ",
      [
        "storage",
        "002c2730",
        null,
        null
      ]
    ],
    [
      "0046df54",
      "READ",
      [
        "storage",
        "002c2ba0",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "0046df38",
      "READ",
      [
        "storage",
        "002c2780",
        null,
        null
      ]
    ],
    [
      "0046df54",
      "READ",
      [
        "storage",
        "002c2bf0",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 0046dbf4 ["INT_ADD", "register:40f0:8", ["const:46dbf4:8", "const:4:8"]]
- 0046dbf4 ["CALL", null, ["callee:0046df90:8"]]
+ 0046df14 ["INT_ADD", "register:40f0:8", ["const:46df14:8", "const:4:8"]]
+ 0046df14 ["CALL", null, ["callee:0046df90:8"]]
- 0046dc18 ["INT_ADD", "tmp:0:8", ["register:4048:8", "const:730:8"]]
- 0046dc18 ["LOAD", "register:5020:16", ["const:1b1:8", "tmp:0:8"]]
- 0046dc18 ["COPY", "register:5030:8", ["const:0:8"]]
- 0046dc18 ["COPY", "register:5038:8", ["const:0:8"]]
+ 0046df38 ["INT_ADD", "tmp:0:8", ["register:4048:8", "const:780:8"]]
+ 0046df38 ["LOAD", "register:5020:16", ["const:1b1:8", "tmp:0:8"]]
+ 0046df38 ["COPY", "register:5030:8", ["const:0:8"]]
+ 0046df38 ["COPY", "register:5038:8", ["const:0:8"]]
- 0046dc34 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:ba0:8"]]
- 0046dc34 ["LOAD", "register:5020:16", ["const:1b1:8", "tmp:0:8"]]
- 0046dc34 ["COPY", "register:5030:8", ["const:0:8"]]
- 0046dc34 ["COPY", "register:5038:8", ["const:0:8"]]
+ 0046df54 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:bf0:8"]]
+ 0046df54 ["LOAD", "register:5020:16", ["const:1b1:8", "tmp:0:8"]]
+ 0046df54 ["COPY", "register:5030:8", ["const:0:8"]]
+ 0046df54 ["COPY", "register:5038:8", ["const:0:8"]]
~~~


<a id="compare-70c71bfef3b047824f6959c683471264"></a>

### [`0046e804`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046e/0046e804.md) → [`0046eb24`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0046e/0046eb24.md) FUN_0046eb24

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 25件 [`005df710`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005df/005df710.md) [`005e4fb4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005e4/005e4fb4.md) [`006824a4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00682/006824a4.md) [`0078c274`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0078c/0078c274.md) [`007bbe74`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007bb/007bbe74.md) · 呼出先 1件 [`00c58260`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58260.md)
- 新版 呼出元 25件 [`005dfac0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005df/005dfac0.md) [`005e5364`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005e5/005e5364.md) [`00682854`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00682/00682854.md) [`0078c650`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0078c/0078c650.md) [`007bcdd8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007bc/007bcdd8.md) · 呼出先 1件 [`00c59230`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59230.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 94.12% / 新版 94.12%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "0046eb50",
      "incomplete_value": false,
      "site": "0046eb58",
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
      "definition_site": "0046e830",
      "incomplete_value": false,
      "site": "0046e838",
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
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "0046eb50",
      "PARAM",
      [
        "storage",
        "002a638e",
        null,
        "undefined1"
      ]
    ]
  ],
  "added": [
    [
      "0046eb50",
      "PARAM",
      [
        "storage",
        "002a64e6",
        null,
        "undefined1"
      ]
    ]
  ]
}
~~~


~~~diff
- 0046e838 ["INT_ADD", "register:40f0:8", ["const:46e838:8", "const:4:8"]]
- 0046e838 ["CALL", null, ["callee:00c59230:8"]]
+ 0046eb58 ["INT_ADD", "register:40f0:8", ["const:46eb58:8", "const:4:8"]]
+ 0046eb58 ["CALL", null, ["callee:00c59230:8"]]
- 0046e830 ["COPY", "tmp:0:8", ["const:38e:8"]]
- 0046e830 ["INT_CARRY", "register:105:1", ["register:4008:8", "tmp:0:8"]]
- 0046e830 ["INT_SCARRY", "register:106:1", ["register:4008:8", "tmp:0:8"]]
- 0046e830 ["INT_ADD", "tmp:1:8", ["register:4008:8", "tmp:0:8"]]
+ 0046eb50 ["COPY", "tmp:0:8", ["const:4e6:8"]]
+ 0046eb50 ["INT_CARRY", "register:105:1", ["register:4008:8", "tmp:0:8"]]
+ 0046eb50 ["INT_SCARRY", "register:106:1", ["register:4008:8", "tmp:0:8"]]
+ 0046eb50 ["INT_ADD", "tmp:1:8", ["register:4008:8", "tmp:0:8"]]
~~~


<a id="compare-b87cac54b51d2d78113667e2c1eb3ab0"></a>

### [`0046e8e4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046e/0046e8e4.md) → [`0046ec04`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0046e/0046ec04.md) FUN_0046ec04

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 38件 [`005df7b8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005df/005df7b8.md) [`005e50f8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005e5/005e50f8.md) [`00682258`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00682/00682258.md) [`0078de24`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0078d/0078de24.md) [`0078deac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0078d/0078deac.md) · 呼出先 2件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c58260`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58260.md)
- 新版 呼出元 38件 [`005dfb68`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005df/005dfb68.md) [`005e54a8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005e5/005e54a8.md) [`00682608`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00682/00682608.md) [`0078e200`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0078e/0078e200.md) [`0078e288`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0078e/0078e288.md) · 呼出先 2件 [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c59230`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59230.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 98.00% / 新版 98.00%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "0046ec4c",
      "incomplete_value": false,
      "site": "0046ec54",
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
      "definition_site": "0046e92c",
      "incomplete_value": false,
      "site": "0046e934",
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
      "0046ec4c",
      "PARAM",
      [
        "storage",
        "002a638e",
        null,
        "undefined1"
      ]
    ]
  ],
  "added": [
    [
      "0046ec4c",
      "PARAM",
      [
        "storage",
        "002a64e6",
        null,
        "undefined1"
      ]
    ]
  ]
}
~~~


~~~diff
- 0046e934 ["INT_ADD", "register:40f0:8", ["const:46e934:8", "const:4:8"]]
- 0046e934 ["CALL", null, ["callee:00c59230:8"]]
+ 0046ec54 ["INT_ADD", "register:40f0:8", ["const:46ec54:8", "const:4:8"]]
+ 0046ec54 ["CALL", null, ["callee:00c59230:8"]]
- 0046e918 ["INT_ADD", "register:40f0:8", ["const:46e918:8", "const:4:8"]]
- 0046e918 ["CALL", null, ["callee:00c58f50:8"]]
+ 0046ec38 ["INT_ADD", "register:40f0:8", ["const:46ec38:8", "const:4:8"]]
+ 0046ec38 ["CALL", null, ["callee:00c58f50:8"]]
- 0046e92c ["COPY", "tmp:0:8", ["const:38e:8"]]
- 0046e92c ["INT_CARRY", "register:105:1", ["register:4008:8", "tmp:0:8"]]
- 0046e92c ["INT_SCARRY", "register:106:1", ["register:4008:8", "tmp:0:8"]]
- 0046e92c ["INT_ADD", "tmp:1:8", ["register:4008:8", "tmp:0:8"]]
+ 0046ec4c ["COPY", "tmp:0:8", ["const:4e6:8"]]
+ 0046ec4c ["INT_CARRY", "register:105:1", ["register:4008:8", "tmp:0:8"]]
+ 0046ec4c ["INT_SCARRY", "register:106:1", ["register:4008:8", "tmp:0:8"]]
+ 0046ec4c ["INT_ADD", "tmp:1:8", ["register:4008:8", "tmp:0:8"]]
~~~


<a id="compare-ce4c4058fbf037d67e628e4ea543a5d2"></a>

### [`0046e9b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046e/0046e9b0.md) → [`0046ecd0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0046e/0046ecd0.md) FUN_0046ecd0

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 36件 [`005e1bf8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005e1/005e1bf8.md) [`005e3154`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005e3/005e3154.md) [`005e9534`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005e9/005e9534.md) [`00631334`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00631/00631334.md) [`0063a7e4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0063a/0063a7e4.md) · 呼出先 15件 [`004701a4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00470/004701a4.md) [`004703a8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00470/004703a8.md) [`0048795c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00487/0048795c.md) [`0048797c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00487/0048797c.md) [`00487e60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00487/00487e60.md)
- 新版 呼出元 36件 [`005e1fa8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005e1/005e1fa8.md) [`005e3504`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005e3/005e3504.md) [`005e98e4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005e9/005e98e4.md) [`006316e4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00631/006316e4.md) [`0063ab94`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0063a/0063ab94.md) · 呼出先 15件 [`004704c4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00470/004704c4.md) [`004706c8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00470/004706c8.md) [`00487c7c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00487/00487c7c.md) [`00487c9c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00487/00487c9c.md) [`00488180`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00488/00488180.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies, store_destination, store_value

命令の説明率　旧版 95.20% / 新版 95.20%

優先判定に残った影響 `call_argument_candidate` 1件, `store_destination` 1件, `store_value` 4件

アドレスに依存する影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "0046ed14",
      "incomplete_value": false,
      "site": "0046ed18",
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
      "definition_site": "0046e9f4",
      "incomplete_value": false,
      "site": "0046e9f8",
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
      "definition_site": "0046f00c",
      "incomplete_value": true,
      "site": "0046f010",
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
      "definition_site": "0046ecec",
      "incomplete_value": true,
      "site": "0046ecf0",
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
    "ordinal": 31,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "0046f008",
      "incomplete_value": true,
      "site": "0046f014",
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
      "definition_site": "0046ece8",
      "incomplete_value": true,
      "site": "0046ecf4",
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
      "0046ed18",
      "DATA",
      [
        "storage",
        "00c64e08",
        null,
        "undefined *"
      ]
    ],
    [
      "0046ed30",
      "PARAM",
      [
        "storage",
        "002a638e",
        null,
        "undefined1"
      ]
    ],
    [
      "0046effc",
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
      "0046ed18",
      "DATA",
      [
        "storage",
        "00c65dd8",
        null,
        "undefined *"
      ]
    ],
    [
      "0046ed30",
      "PARAM",
      [
        "storage",
        "002a64e6",
        null,
        "undefined1"
      ]
    ],
    [
      "0046effc",
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
- 0046e9f4 ["COPY", "tmp:0:8", ["const:e08:8"]]
- 0046e9f4 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 0046e9f4 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 0046e9f4 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 0046ed14 ["COPY", "tmp:0:8", ["const:dd8:8"]]
+ 0046ed14 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 0046ed14 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 0046ed14 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 0046ea18 ["INT_ADD", "register:40f0:8", ["const:46ea18:8", "const:4:8"]]
- 0046ea18 ["CALL", null, ["callee:00c59230:8"]]
+ 0046ed38 ["INT_ADD", "register:40f0:8", ["const:46ed38:8", "const:4:8"]]
+ 0046ed38 ["CALL", null, ["callee:00c59230:8"]]
- 0046e9e8 ["INT_ADD", "register:40f0:8", ["const:46e9e8:8", "const:4:8"]]
- 0046e9e8 ["CALL", null, ["callee:00488180:8"]]
+ 0046ed08 ["INT_ADD", "register:40f0:8", ["const:46ed08:8", "const:4:8"]]
+ 0046ed08 ["CALL", null, ["callee:00488180:8"]]
~~~


<a id="compare-e3b47decace0d4578cc31906b9b95d37"></a>

### [`0046ef38`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046e/0046ef38.md) → [`0046f258`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0046f/0046f258.md) FUN_0046f258

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 26件 [`005f0e94`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005f0/005f0e94.md) [`0067e3f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0067e/0067e3f0.md) [`0070e05c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0070e/0070e05c.md) [`0078c274`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0078c/0078c274.md) [`007b0a70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007b0/007b0a70.md) · 呼出先 1件 [`00c58260`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58260.md)
- 新版 呼出元 26件 [`005f1244`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005f1/005f1244.md) [`0067e7a0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0067e/0067e7a0.md) [`0070e40c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0070e/0070e40c.md) [`0078c650`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0078c/0078c650.md) [`007b19d4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007b1/007b19d4.md) · 呼出先 1件 [`00c59230`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59230.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 95.65% / 新版 95.65%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "0046f298",
      "incomplete_value": false,
      "site": "0046f2a0",
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
      "definition_site": "0046ef78",
      "incomplete_value": false,
      "site": "0046ef80",
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
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "0046f298",
      "PARAM",
      [
        "storage",
        "002a638e",
        null,
        "undefined1"
      ]
    ]
  ],
  "added": [
    [
      "0046f298",
      "PARAM",
      [
        "storage",
        "002a64e6",
        null,
        "undefined1"
      ]
    ]
  ]
}
~~~


~~~diff
- 0046ef80 ["INT_ADD", "register:40f0:8", ["const:46ef80:8", "const:4:8"]]
- 0046ef80 ["CALL", null, ["callee:00c59230:8"]]
+ 0046f2a0 ["INT_ADD", "register:40f0:8", ["const:46f2a0:8", "const:4:8"]]
+ 0046f2a0 ["CALL", null, ["callee:00c59230:8"]]
- 0046ef78 ["COPY", "tmp:0:8", ["const:38e:8"]]
- 0046ef78 ["INT_CARRY", "register:105:1", ["register:4008:8", "tmp:0:8"]]
- 0046ef78 ["INT_SCARRY", "register:106:1", ["register:4008:8", "tmp:0:8"]]
- 0046ef78 ["INT_ADD", "tmp:1:8", ["register:4008:8", "tmp:0:8"]]
+ 0046f298 ["COPY", "tmp:0:8", ["const:4e6:8"]]
+ 0046f298 ["INT_CARRY", "register:105:1", ["register:4008:8", "tmp:0:8"]]
+ 0046f298 ["INT_SCARRY", "register:106:1", ["register:4008:8", "tmp:0:8"]]
+ 0046f298 ["INT_ADD", "tmp:1:8", ["register:4008:8", "tmp:0:8"]]
~~~


<a id="compare-5968fb962e3c42d816c629f91986d6d9"></a>

### [`0046f01c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046f/0046f01c.md) → [`0046f33c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0046f/0046f33c.md) FUN_0046f33c

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 31件 [`005f0f3c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005f0/005f0f3c.md) [`0067e54c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0067e/0067e54c.md) [`00682038`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00682/00682038.md) [`0070e1a0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0070e/0070e1a0.md) [`0078de24`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0078d/0078de24.md) · 呼出先 4件 [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c58260`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58260.md)
- 新版 呼出元 31件 [`005f12ec`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005f1/005f12ec.md) [`0067e8fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0067e/0067e8fc.md) [`006823e8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00682/006823e8.md) [`0070e550`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0070e/0070e550.md) [`0078e200`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0078e/0078e200.md) · 呼出先 4件 [`00c54d90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d90.md) [`00c58f20`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f20.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c59230`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59230.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 98.11% / 新版 98.11%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "0046f370",
      "incomplete_value": false,
      "site": "0046f378",
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
      "definition_site": "0046f050",
      "incomplete_value": false,
      "site": "0046f058",
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
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "0046f370",
      "PARAM",
      [
        "storage",
        "002a638e",
        null,
        "undefined1"
      ]
    ]
  ],
  "added": [
    [
      "0046f370",
      "PARAM",
      [
        "storage",
        "002a64e6",
        null,
        "undefined1"
      ]
    ]
  ]
}
~~~


~~~diff
- 0046f058 ["INT_ADD", "register:40f0:8", ["const:46f058:8", "const:4:8"]]
- 0046f058 ["CALL", null, ["callee:00c59230:8"]]
+ 0046f378 ["INT_ADD", "register:40f0:8", ["const:46f378:8", "const:4:8"]]
+ 0046f378 ["CALL", null, ["callee:00c59230:8"]]
- 0046f050 ["COPY", "tmp:0:8", ["const:38e:8"]]
- 0046f050 ["INT_CARRY", "register:105:1", ["register:4008:8", "tmp:0:8"]]
- 0046f050 ["INT_SCARRY", "register:106:1", ["register:4008:8", "tmp:0:8"]]
- 0046f050 ["INT_ADD", "tmp:1:8", ["register:4008:8", "tmp:0:8"]]
+ 0046f370 ["COPY", "tmp:0:8", ["const:4e6:8"]]
+ 0046f370 ["INT_CARRY", "register:105:1", ["register:4008:8", "tmp:0:8"]]
+ 0046f370 ["INT_SCARRY", "register:106:1", ["register:4008:8", "tmp:0:8"]]
+ 0046f370 ["INT_ADD", "tmp:1:8", ["register:4008:8", "tmp:0:8"]]
- 0046f068 ["INT_ADD", "register:40f0:8", ["const:46f068:8", "const:4:8"]]
- 0046f068 ["CALL", null, ["callee:00c58f50:8"]]
+ 0046f388 ["INT_ADD", "register:40f0:8", ["const:46f388:8", "const:4:8"]]
+ 0046f388 ["CALL", null, ["callee:00c58f50:8"]]
~~~


<a id="compare-d901da894b63fbf7d70befd9bae0403a"></a>

### [`0046f0f4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046f/0046f0f4.md) → [`0046f414`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0046f/0046f414.md) FUN_0046f414

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 36件 [`005e1bf8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005e1/005e1bf8.md) [`005e3154`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005e3/005e3154.md) [`005e9534`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005e9/005e9534.md) [`00631334`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00631/00631334.md) [`0063a7e4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0063a/0063a7e4.md) · 呼出先 16件 [`004704e8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00470/004704e8.md) [`00470754`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00470/00470754.md) [`00470894`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00470/00470894.md) [`0048795c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00487/0048795c.md) [`0048797c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00487/0048797c.md)
- 新版 呼出元 36件 [`005e1fa8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005e1/005e1fa8.md) [`005e3504`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005e3/005e3504.md) [`005e98e4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005e9/005e98e4.md) [`006316e4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00631/006316e4.md) [`0063ab94`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0063a/0063ab94.md) · 呼出先 16件 [`00470808`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00470/00470808.md) [`00470a74`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00470/00470a74.md) [`00470bb4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00470/00470bb4.md) [`00487c7c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00487/00487c7c.md) [`00487c9c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00487/00487c9c.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies, store_destination, store_value

命令の説明率　旧版 96.60% / 新版 96.60%

優先判定に残った影響 `call_argument_candidate` 1件, `store_destination` 1件, `store_value` 4件

アドレスに依存する影響 `store_value` 2件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "0046f454",
      "incomplete_value": false,
      "site": "0046f45c",
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
      "definition_site": "0046f134",
      "incomplete_value": false,
      "site": "0046f13c",
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
      "definition_site": "0046f7d4",
      "incomplete_value": true,
      "site": "0046f7e0",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:488:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0046f4b4",
      "incomplete_value": true,
      "site": "0046f4c0",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:438:8"
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
      "definition_site": "0046f8ec",
      "incomplete_value": true,
      "site": "0046f8f0",
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
      "definition_site": "0046f5cc",
      "incomplete_value": true,
      "site": "0046f5d0",
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
      "0046f45c",
      "DATA",
      [
        "storage",
        "00c64e08",
        null,
        "undefined *"
      ]
    ],
    [
      "0046f490",
      "PARAM",
      [
        "storage",
        "002a638e",
        null,
        "undefined1"
      ]
    ],
    [
      "0046f7d4",
      "READ",
      [
        "storage",
        "002c4438",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "0046f45c",
      "DATA",
      [
        "storage",
        "00c65dd8",
        null,
        "undefined *"
      ]
    ],
    [
      "0046f490",
      "PARAM",
      [
        "storage",
        "002a64e6",
        null,
        "undefined1"
      ]
    ],
    [
      "0046f7d4",
      "READ",
      [
        "storage",
        "002c4488",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 0046f178 ["INT_ADD", "register:40f0:8", ["const:46f178:8", "const:4:8"]]
- 0046f178 ["CALL", null, ["callee:00c59230:8"]]
+ 0046f498 ["INT_ADD", "register:40f0:8", ["const:46f498:8", "const:4:8"]]
+ 0046f498 ["CALL", null, ["callee:00c59230:8"]]
- 0046f12c ["INT_ADD", "register:40f0:8", ["const:46f12c:8", "const:4:8"]]
- 0046f12c ["CALL", null, ["callee:00488180:8"]]
+ 0046f44c ["INT_ADD", "register:40f0:8", ["const:46f44c:8", "const:4:8"]]
+ 0046f44c ["CALL", null, ["callee:00488180:8"]]
- 0046f130 ["COPY", "register:4040:8", ["const:c64000:8"]]
+ 0046f450 ["COPY", "register:4040:8", ["const:c65000:8"]]
~~~


<a id="compare-2c4e3989922d9d252b9ba38c52011979"></a>

### [`00470394`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00470/00470394.md) → [`004706b4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00470/004706b4.md) FUN_004706b4

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 5件 [`004701a4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00470/004701a4.md) [`007bbe74`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007bb/007bbe74.md) [`007f1b10`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007f1/007f1b10.md) [`008ff920`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008ff/008ff920.md) [`00a3f3a0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a3f/00a3f3a0.md) · 呼出先 1件 [`0043b7b8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b7b8.md)
- 新版 呼出元 5件 [`004704c4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00470/004704c4.md) [`007bcdd8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007bc/007bcdd8.md) [`007f2a74`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007f2/007f2a74.md) [`009008cc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00900/009008cc.md) [`00a40394`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a40/00a40394.md) · 呼出先 1件 [`0043bad8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bad8.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 80.00% / 新版 80.00%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "004706c0",
      "incomplete_value": false,
      "site": "004706c4",
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
      "definition_site": "004703a0",
      "incomplete_value": false,
      "site": "004703a4",
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
      "004706c0",
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
      "004706c0",
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
- 004703a4 ["INT_ADD", "register:40f0:8", ["const:4703a4:8", "const:4:8"]]
- 004703a4 ["CALL", null, ["callee:0043bad8:8"]]
+ 004706c4 ["INT_ADD", "register:40f0:8", ["const:4706c4:8", "const:4:8"]]
+ 004706c4 ["CALL", null, ["callee:0043bad8:8"]]
- 0047039c ["COPY", "register:4000:8", ["const:2b7000:8"]]
+ 004706bc ["COPY", "register:4000:8", ["const:2b8000:8"]]
- 004703a0 ["COPY", "tmp:0:8", ["const:f8c:8"]]
- 004703a0 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 004703a0 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 004703a0 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 004706c0 ["COPY", "tmp:0:8", ["const:5b:8"]]
+ 004706c0 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 004706c0 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 004706c0 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
~~~


<a id="compare-8cca34cf6388fcc615a3b9c94c32d863"></a>

### [`004704d4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00470/004704d4.md) → [`004707f4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00470/004707f4.md) FUN_004707f4

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 2件 [`004703a8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00470/004703a8.md) [`007f1d08`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007f1/007f1d08.md) · 呼出先 1件 [`0043b7b8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b7b8.md)
- 新版 呼出元 2件 [`004706c8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00470/004706c8.md) [`007f2c6c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007f2/007f2c6c.md) · 呼出先 1件 [`0043bad8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bad8.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 80.00% / 新版 80.00%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00470800",
      "incomplete_value": false,
      "site": "00470804",
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
      "definition_site": "004704e0",
      "incomplete_value": false,
      "site": "004704e4",
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
      "00470800",
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
      "00470800",
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
- 004704e4 ["INT_ADD", "register:40f0:8", ["const:4704e4:8", "const:4:8"]]
- 004704e4 ["CALL", null, ["callee:0043bad8:8"]]
+ 00470804 ["INT_ADD", "register:40f0:8", ["const:470804:8", "const:4:8"]]
+ 00470804 ["CALL", null, ["callee:0043bad8:8"]]
- 004704dc ["COPY", "register:4000:8", ["const:2b7000:8"]]
+ 004707fc ["COPY", "register:4000:8", ["const:2b8000:8"]]
- 004704e0 ["COPY", "tmp:0:8", ["const:f8c:8"]]
- 004704e0 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 004704e0 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 004704e0 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 00470800 ["COPY", "tmp:0:8", ["const:5b:8"]]
+ 00470800 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 00470800 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 00470800 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
~~~


<a id="compare-8fb72b39d859aedb936f9bb1d7ee0f82"></a>

### [`004704e8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00470/004704e8.md) → [`00470808`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00470/00470808.md) FUN_00470808

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`0046f0f4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046f/0046f0f4.md) · 呼出先 6件 [`00440f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00440/00440f00.md) [`00467628`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00467/00467628.md) [`00470740`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00470/00470740.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 1件 [`0046f414`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0046f/0046f414.md) · 呼出先 6件 [`00441220`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00441/00441220.md) [`00467948`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00467/00467948.md) [`00470a60`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00470/00470a60.md) [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 call, call_target, constant, operands_and_dependencies

命令の説明率　旧版 98.55% / 新版 98.55%

優先判定に残った影響 `call_target` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_target",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "00470904",
      "value": [
        "leaf",
        "ram:467948:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "004705e4",
      "value": [
        "leaf",
        "ram:467628:8"
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
      "site": "0047098c",
      "value": [
        "leaf",
        "ram:467948:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "0047066c",
      "value": [
        "leaf",
        "ram:467628:8"
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
      "00470904",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "00467628"
      ]
    ],
    [
      "0047098c",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "00467628"
      ]
    ]
  ],
  "added": [
    [
      "00470904",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "00467948"
      ]
    ],
    [
      "0047098c",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "00467948"
      ]
    ]
  ]
}
~~~


~~~diff
- 004705e4 ["INT_ADD", "register:40f0:8", ["const:4705e4:8", "const:4:8"]]
- 004705e4 ["CALL", null, ["ram:467628:8"]]
+ 00470904 ["INT_ADD", "register:40f0:8", ["const:470904:8", "const:4:8"]]
+ 00470904 ["CALL", null, ["ram:467948:8"]]
- 0047066c ["INT_ADD", "register:40f0:8", ["const:47066c:8", "const:4:8"]]
- 0047066c ["CALL", null, ["ram:467628:8"]]
+ 0047098c ["INT_ADD", "register:40f0:8", ["const:47098c:8", "const:4:8"]]
+ 0047098c ["CALL", null, ["ram:467948:8"]]
- 004705a0 ["INT_ADD", "register:40f0:8", ["const:4705a0:8", "const:4:8"]]
- 004705a0 ["CALL", null, ["callee:00c58f30:8"]]
+ 004708c0 ["INT_ADD", "register:40f0:8", ["const:4708c0:8", "const:4:8"]]
+ 004708c0 ["CALL", null, ["callee:00c58f30:8"]]
~~~


<a id="compare-de94df89c41ec23e54adc048b779f5b8"></a>

### [`00470740`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00470/00470740.md) → [`00470a60`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00470/00470a60.md) FUN_00470a60

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`004704e8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00470/004704e8.md) · 呼出先 1件 [`0043b7b8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b7b8.md)
- 新版 呼出元 1件 [`00470808`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00470/00470808.md) · 呼出先 1件 [`0043bad8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bad8.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 80.00% / 新版 80.00%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00470a6c",
      "incomplete_value": false,
      "site": "00470a70",
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
      "definition_site": "0047074c",
      "incomplete_value": false,
      "site": "00470750",
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
      "00470a6c",
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
      "00470a6c",
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
- 00470750 ["INT_ADD", "register:40f0:8", ["const:470750:8", "const:4:8"]]
- 00470750 ["CALL", null, ["callee:0043bad8:8"]]
+ 00470a70 ["INT_ADD", "register:40f0:8", ["const:470a70:8", "const:4:8"]]
+ 00470a70 ["CALL", null, ["callee:0043bad8:8"]]
- 00470748 ["COPY", "register:4000:8", ["const:2b7000:8"]]
+ 00470a68 ["COPY", "register:4000:8", ["const:2b8000:8"]]
- 0047074c ["COPY", "tmp:0:8", ["const:f8c:8"]]
- 0047074c ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 0047074c ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 0047074c ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 00470a6c ["COPY", "tmp:0:8", ["const:5b:8"]]
+ 00470a6c ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 00470a6c ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 00470a6c ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
~~~


<a id="compare-064559db5cc55efa7e4840bff758fe9f"></a>

### [`00470880`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00470/00470880.md) → [`00470ba0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00470/00470ba0.md) FUN_00470ba0

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 262件 [`0046f79c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046f/0046f79c.md) [`00470754`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00470/00470754.md) [`004709d4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00470/004709d4.md) [`0047af50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047af50.md) [`0049e504`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0049e/0049e504.md) · 呼出先 1件 [`0043b7b8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b7b8.md)
- 新版 呼出元 262件 [`0046fabc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0046f/0046fabc.md) [`00470a74`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00470/00470a74.md) [`00470cf4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00470/00470cf4.md) [`0047b270`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047b/0047b270.md) [`0049e824`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0049e/0049e824.md) · 呼出先 1件 [`0043bad8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bad8.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 80.00% / 新版 80.00%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00470bac",
      "incomplete_value": false,
      "site": "00470bb0",
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
      "definition_site": "0047088c",
      "incomplete_value": false,
      "site": "00470890",
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
      "00470bac",
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
      "00470bac",
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
- 00470890 ["INT_ADD", "register:40f0:8", ["const:470890:8", "const:4:8"]]
- 00470890 ["CALL", null, ["callee:0043bad8:8"]]
+ 00470bb0 ["INT_ADD", "register:40f0:8", ["const:470bb0:8", "const:4:8"]]
+ 00470bb0 ["CALL", null, ["callee:0043bad8:8"]]
- 00470888 ["COPY", "register:4000:8", ["const:2b7000:8"]]
+ 00470ba8 ["COPY", "register:4000:8", ["const:2b8000:8"]]
- 0047088c ["COPY", "tmp:0:8", ["const:f8c:8"]]
- 0047088c ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 0047088c ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 0047088c ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 00470bac ["COPY", "tmp:0:8", ["const:5b:8"]]
+ 00470bac ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 00470bac ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 00470bac ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
~~~


<a id="compare-7d8effa77bbb617efdd57252dd657906"></a>

### [`004709c0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00470/004709c0.md) → [`00470ce0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00470/00470ce0.md) FUN_00470ce0

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`00470894`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00470/00470894.md) · 呼出先 1件 [`0043b7b8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b7b8.md)
- 新版 呼出元 1件 [`00470bb4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00470/00470bb4.md) · 呼出先 1件 [`0043bad8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bad8.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 80.00% / 新版 80.00%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00470cec",
      "incomplete_value": false,
      "site": "00470cf0",
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
      "definition_site": "004709cc",
      "incomplete_value": false,
      "site": "004709d0",
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
      "00470cec",
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
      "00470cec",
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
- 004709d0 ["INT_ADD", "register:40f0:8", ["const:4709d0:8", "const:4:8"]]
- 004709d0 ["CALL", null, ["callee:0043bad8:8"]]
+ 00470cf0 ["INT_ADD", "register:40f0:8", ["const:470cf0:8", "const:4:8"]]
+ 00470cf0 ["CALL", null, ["callee:0043bad8:8"]]
- 004709c8 ["COPY", "register:4000:8", ["const:2b7000:8"]]
+ 00470ce8 ["COPY", "register:4000:8", ["const:2b8000:8"]]
- 004709cc ["COPY", "tmp:0:8", ["const:f8c:8"]]
- 004709cc ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 004709cc ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 004709cc ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 00470cec ["COPY", "tmp:0:8", ["const:5b:8"]]
+ 00470cec ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 00470cec ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 00470cec ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
~~~


<a id="compare-2fa5dd216b0b17b3044b91ecace5d67a"></a>

### [`00470b04`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00470/00470b04.md) → [`00470e24`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00470/00470e24.md) _INIT_14

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 5件 [`0043aeb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043a/0043aeb0.md) [`0043b838`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b838.md) [`00c57f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f00.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)
- 新版 呼出元 0件  · 呼出先 5件 [`0043b1d0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043b1d0.md) [`0043bb58`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bb58.md) [`00c58ed0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58ed0.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies, operation_sequence, store_destination, store_value

命令の説明率　旧版 83.05% / 新版 83.05%

優先判定に残った影響 `call_argument_candidate` 4件, `store_destination` 3件, `store_value` 8件

アドレスに依存する影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00470e60",
      "incomplete_value": true,
      "site": "00470e7c",
      "value": [
        "LOAD",
        "16",
        [
          [
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
      "definition_site": "00470b40",
      "incomplete_value": true,
      "site": "00470b5c",
      "value": [
        "LOAD",
        "16",
        [
          [
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
      "definition_site": "00470e84",
      "incomplete_value": true,
      "site": "00470ea0",
      "value": [
        "LOAD",
        "16",
        [
          [
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
      "definition_site": "00470b64",
      "incomplete_value": true,
      "site": "00470b80",
      "value": [
        "LOAD",
        "16",
        [
          [
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
      "definition_site": "00470ea4",
      "incomplete_value": true,
      "site": "00470ec0",
      "value": [
        "LOAD",
        "16",
        [
          [
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
      "definition_site": "00470b84",
      "incomplete_value": true,
      "site": "00470ba0",
      "value": [
        "LOAD",
        "16",
        [
          [
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
      "00470e60",
      "READ",
      [
        "storage",
        "002b7f66",
        null,
        "string"
      ]
    ],
    [
      "00470e84",
      "READ",
      [
        "storage",
        "002b7f79",
        null,
        "string"
      ]
    ],
    [
      "00470ea4",
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
      "00470e60",
      "READ",
      [
        "storage",
        "002b8035",
        null,
        "string"
      ]
    ],
    [
      "00470e84",
      "READ",
      [
        "storage",
        "002b8048",
        null,
        "string"
      ]
    ],
    [
      "00470ea4",
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
- 00470c64 ["INT_ADD", "register:40f0:8", ["const:470c64:8", "const:4:8"]]
- 00470c64 ["CALL", null, ["callee:0043bb58:8"]]
+ 00470f84 ["INT_ADD", "register:40f0:8", ["const:470f84:8", "const:4:8"]]
+ 00470f84 ["CALL", null, ["callee:0043bb58:8"]]
- 00470d38 ["INT_ADD", "register:40f0:8", ["const:470d38:8", "const:4:8"]]
- 00470d38 ["CALL", null, ["callee:00c58ed0:8"]]
+ 00471058 ["INT_ADD", "register:40f0:8", ["const:471058:8", "const:4:8"]]
+ 00471058 ["CALL", null, ["callee:00c58ed0:8"]]
- 00470b2c ["COPY", "register:4098:8", ["const:ca4000:8"]]
+ 00470e4c ["COPY", "register:4098:8", ["const:ca5000:8"]]
~~~


<a id="compare-8283fe725be287fc5b6a56bf620f22d9"></a>

### [`00470f74`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00470/00470f74.md) → [`00471294`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00471/00471294.md) FUN_00471294

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 3件 [`00851a64`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851a64.md) [`00876f5c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00876/00876f5c.md) [`00b11d1c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b11/00b11d1c.md) · 呼出先 32件 [`0043bb60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bb60.md) [`0043dbe4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043d/0043dbe4.md) [`00471d5c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00471/00471d5c.md) [`00471ff4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00471/00471ff4.md) [`004720f8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00472/004720f8.md)
- 新版 呼出元 3件 [`00852a10`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/00852a10.md) [`00877f08`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00877/00877f08.md) [`00b12d10`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b12/00b12d10.md) · 呼出先 32件 [`0043be80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043be80.md) [`0043df04`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043d/0043df04.md) [`0047207c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00472/0047207c.md) [`00472314`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00472/00472314.md) [`00472418`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00472/00472418.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies, store_destination, store_value

命令の説明率　旧版 97.28% / 新版 97.28%

優先判定に残った影響 `call_argument_candidate` 2件, `store_destination` 1件, `store_value` 3件

アドレスに依存する影響 `store_value` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "0047169c",
      "incomplete_value": true,
      "site": "004716a0",
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
      "definition_site": "0047137c",
      "incomplete_value": true,
      "site": "00471380",
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
    "ordinal": 32,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00471698",
      "incomplete_value": true,
      "site": "004716a4",
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
      "definition_site": "00471378",
      "incomplete_value": true,
      "site": "00471384",
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
    "ordinal": 33,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_destination",
    "new": {
      "definition_site": "004716b0",
      "incomplete_value": true,
      "site": "004716b0",
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
      "definition_site": "00471390",
      "incomplete_value": true,
      "site": "00471390",
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
    "ordinal": 34,
    "slot": 1
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "004715dc",
      "PARAM",
      [
        "storage",
        "002c8735",
        null,
        null
      ]
    ],
    [
      "0047168c",
      "READ",
      [
        "storage",
        "00c9ac80",
        null,
        "pointer"
      ]
    ],
    [
      "00471690",
      "READ",
      [
        "storage",
        "00c9ac88",
        null,
        "pointer"
      ]
    ]
  ],
  "added": [
    [
      "004715dc",
      "PARAM",
      [
        "storage",
        "002c8785",
        null,
        null
      ]
    ],
    [
      "0047168c",
      "READ",
      [
        "storage",
        "00c9bc50",
        null,
        "pointer"
      ]
    ],
    [
      "00471690",
      "READ",
      [
        "storage",
        "00c9bc58",
        null,
        "pointer"
      ]
    ]
  ]
}
~~~


~~~diff
- 004712c0 ["INT_ADD", "register:40f0:8", ["const:4712c0:8", "const:4:8"]]
- 004712c0 ["CALL", null, ["callee:0047207c:8"]]
+ 004715e0 ["INT_ADD", "register:40f0:8", ["const:4715e0:8", "const:4:8"]]
+ 004715e0 ["CALL", null, ["callee:0047207c:8"]]
- 00471460 ["INT_ADD", "register:40f0:8", ["const:471460:8", "const:4:8"]]
- 00471460 ["CALL", null, ["callee:00472418:8"]]
+ 00471780 ["INT_ADD", "register:40f0:8", ["const:471780:8", "const:4:8"]]
+ 00471780 ["CALL", null, ["callee:00472418:8"]]
- 00470fb8 ["INT_ADD", "register:40f0:8", ["const:470fb8:8", "const:4:8"]]
- 00470fb8 ["CALL", null, ["callee:00481790:8"]]
+ 004712d8 ["INT_ADD", "register:40f0:8", ["const:4712d8:8", "const:4:8"]]
+ 004712d8 ["CALL", null, ["callee:00481790:8"]]
~~~


<a id="compare-4c2af4bfef51f072ac099a3a1eed44fc"></a>

### [`00471970`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00471/00471970.md) → [`00471c90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00471/00471c90.md) FUN_00471c90

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 4件 [`00484800`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00484/00484800.md) [`004887d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00488/004887d0.md) [`004896dc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00489/004896dc.md) [`00b11188`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b11/00b11188.md) · 呼出先 14件 [`0043bb60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bb60.md) [`0043dbe4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043d/0043dbe4.md) [`00471ff4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00471/00471ff4.md) [`004720f8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00472/004720f8.md) [`004723a4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00472/004723a4.md)
- 新版 呼出元 4件 [`00484b20`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00484/00484b20.md) [`00488af0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00488/00488af0.md) [`004899fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00489/004899fc.md) [`00b1217c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b12/00b1217c.md) · 呼出先 14件 [`0043be80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043be80.md) [`0043df04`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043d/0043df04.md) [`00472314`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00472/00472314.md) [`00472418`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00472/00472418.md) [`004726c4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00472/004726c4.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 99.32% / 新版 99.32%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00471ddc",
      "incomplete_value": false,
      "site": "00471df0",
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
            "const:785:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00471abc",
      "incomplete_value": false,
      "site": "00471ad0",
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
    "ordinal": 11,
    "slot": 3
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "00471ddc",
      "PARAM",
      [
        "storage",
        "002c8735",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "00471ddc",
      "PARAM",
      [
        "storage",
        "002c8785",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 00471ad0 ["INT_ADD", "register:40f0:8", ["const:471ad0:8", "const:4:8"]]
- 00471ad0 ["CALL", null, ["callee:00472418:8"]]
+ 00471df0 ["INT_ADD", "register:40f0:8", ["const:471df0:8", "const:4:8"]]
+ 00471df0 ["CALL", null, ["callee:00472418:8"]]
- 004719a8 ["INT_ADD", "register:40f0:8", ["const:4719a8:8", "const:4:8"]]
- 004719a8 ["CALL", null, ["callee:00c59180:8"]]
+ 00471cc8 ["INT_ADD", "register:40f0:8", ["const:471cc8:8", "const:4:8"]]
+ 00471cc8 ["CALL", null, ["callee:00c59180:8"]]
- 004719b4 ["INT_ADD", "register:40f0:8", ["const:4719b4:8", "const:4:8"]]
- 004719b4 ["CALL", null, ["callee:004726c4:8"]]
+ 00471cd4 ["INT_ADD", "register:40f0:8", ["const:471cd4:8", "const:4:8"]]
+ 00471cd4 ["CALL", null, ["callee:004726c4:8"]]
~~~


<a id="compare-9ce1b42664e1cbd52252b0fb6de5dbe8"></a>

### [`004726b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00472/004726b0.md) → [`004729d0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00472/004729d0.md) _INIT_15

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 5件 [`0043aeb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043a/0043aeb0.md) [`0043b838`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b838.md) [`00c57f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f00.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)
- 新版 呼出元 0件  · 呼出先 5件 [`0043b1d0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043b1d0.md) [`0043bb58`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bb58.md) [`00c58ed0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58ed0.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies, operation_sequence, store_destination, store_value

命令の説明率　旧版 83.05% / 新版 83.05%

優先判定に残った影響 `call_argument_candidate` 4件, `store_destination` 3件, `store_value` 8件

アドレスに依存する影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00472a0c",
      "incomplete_value": true,
      "site": "00472a28",
      "value": [
        "LOAD",
        "16",
        [
          [
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
      "definition_site": "004726ec",
      "incomplete_value": true,
      "site": "00472708",
      "value": [
        "LOAD",
        "16",
        [
          [
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
      "definition_site": "00472a30",
      "incomplete_value": true,
      "site": "00472a4c",
      "value": [
        "LOAD",
        "16",
        [
          [
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
      "definition_site": "00472710",
      "incomplete_value": true,
      "site": "0047272c",
      "value": [
        "LOAD",
        "16",
        [
          [
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
      "definition_site": "00472a50",
      "incomplete_value": true,
      "site": "00472a6c",
      "value": [
        "LOAD",
        "16",
        [
          [
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
      "definition_site": "00472730",
      "incomplete_value": true,
      "site": "0047274c",
      "value": [
        "LOAD",
        "16",
        [
          [
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
      "00472a0c",
      "READ",
      [
        "storage",
        "002b7f66",
        null,
        "string"
      ]
    ],
    [
      "00472a30",
      "READ",
      [
        "storage",
        "002b7f79",
        null,
        "string"
      ]
    ],
    [
      "00472a50",
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
      "00472a0c",
      "READ",
      [
        "storage",
        "002b8035",
        null,
        "string"
      ]
    ],
    [
      "00472a30",
      "READ",
      [
        "storage",
        "002b8048",
        null,
        "string"
      ]
    ],
    [
      "00472a50",
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
- 00472810 ["INT_ADD", "register:40f0:8", ["const:472810:8", "const:4:8"]]
- 00472810 ["CALL", null, ["callee:0043bb58:8"]]
+ 00472b30 ["INT_ADD", "register:40f0:8", ["const:472b30:8", "const:4:8"]]
+ 00472b30 ["CALL", null, ["callee:0043bb58:8"]]
- 004728e4 ["INT_ADD", "register:40f0:8", ["const:4728e4:8", "const:4:8"]]
- 004728e4 ["CALL", null, ["callee:00c58ed0:8"]]
+ 00472c04 ["INT_ADD", "register:40f0:8", ["const:472c04:8", "const:4:8"]]
+ 00472c04 ["CALL", null, ["callee:00c58ed0:8"]]
- 004726d8 ["COPY", "register:4098:8", ["const:ca4000:8"]]
+ 004729f8 ["COPY", "register:4098:8", ["const:ca5000:8"]]
~~~


<a id="compare-93c8a07aaf59ac0ff857a10bf1c75242"></a>

### [`00472de4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00472/00472de4.md) → [`00473104`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00473/00473104.md) FUN_00473104

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 9件 [`00769ddc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00769/00769ddc.md) [`0085155c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/0085155c.md) [`00853360`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00853/00853360.md) [`00856e84`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00856/00856e84.md) [`0088c178`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0088c/0088c178.md) · 呼出先 5件 [`00472e74`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00472/00472e74.md) [`00473068`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00473/00473068.md) [`00c57f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f00.md) [`00c57f20`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f20.md) [`00c57f40`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f40.md)
- 新版 呼出元 9件 [`0076a1b8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0076a/0076a1b8.md) [`00852508`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/00852508.md) [`0085430c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00854/0085430c.md) [`00857e30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00857/00857e30.md) [`0088d124`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0088d/0088d124.md) · 呼出先 5件 [`00473194`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00473/00473194.md) [`00473388`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00473/00473388.md) [`00c58ed0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58ed0.md) [`00c58ef0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58ef0.md) [`00c58f10`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f10.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies, operation_sequence, return_value_candidate

命令の説明率　旧版 66.67% / 新版 66.67%

優先判定に残った影響 `call_argument_candidate` 5件, `return_value_candidate` 1件

アドレスに依存する影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00473138",
      "incomplete_value": false,
      "site": "0047313c",
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
            "const:ea8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00472e18",
      "incomplete_value": false,
      "site": "00472e1c",
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
            "const:ee8:8"
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
      "definition_site": "00473148",
      "incomplete_value": false,
      "site": "0047314c",
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
            "const:e60:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00472e28",
      "incomplete_value": false,
      "site": "00472e2c",
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
            "const:ea0:8"
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
      "definition_site": "00473154",
      "incomplete_value": false,
      "site": "00473168",
      "value": [
        "leaf",
        "const:473388:8"
      ]
    },
    "old": {
      "definition_site": "00472e34",
      "incomplete_value": false,
      "site": "00472e48",
      "value": [
        "leaf",
        "const:473068:8"
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
      "00473118",
      "READ",
      [
        "storage",
        "00ca4ee8",
        null,
        "undefined1"
      ]
    ],
    [
      "00473124",
      "DATA",
      [
        "storage",
        "00ca4ea0",
        null,
        null
      ]
    ],
    [
      "00473138",
      "PARAM",
      [
        "storage",
        "00ca4ee8",
        null,
        "undefined1"
      ]
    ]
  ],
  "added": [
    [
      "00473118",
      "READ",
      [
        "storage",
        "00ca5ea8",
        null,
        "undefined1"
      ]
    ],
    [
      "00473124",
      "DATA",
      [
        "storage",
        "00ca5e60",
        null,
        null
      ]
    ],
    [
      "00473138",
      "PARAM",
      [
        "storage",
        "00ca5ea8",
        null,
        "undefined1"
      ]
    ]
  ]
}
~~~


~~~diff
- 00472e1c ["INT_ADD", "register:40f0:8", ["const:472e1c:8", "const:4:8"]]
- 00472e1c ["CALL", null, ["callee:00c58ef0:8"]]
+ 0047313c ["INT_ADD", "register:40f0:8", ["const:47313c:8", "const:4:8"]]
+ 0047313c ["CALL", null, ["callee:00c58ef0:8"]]
- 00472e2c ["INT_ADD", "register:40f0:8", ["const:472e2c:8", "const:4:8"]]
- 00472e2c ["CALL", null, ["callee:00473194:8"]]
+ 0047314c ["INT_ADD", "register:40f0:8", ["const:47314c:8", "const:4:8"]]
+ 0047314c ["CALL", null, ["callee:00473194:8"]]
- 00472e48 ["INT_ADD", "register:40f0:8", ["const:472e48:8", "const:4:8"]]
- 00472e48 ["CALL", null, ["callee:00c58ed0:8"]]
+ 00473168 ["INT_ADD", "register:40f0:8", ["const:473168:8", "const:4:8"]]
+ 00473168 ["CALL", null, ["callee:00c58ed0:8"]]
~~~


<a id="compare-fcc54c67ec55cc4d8f016450a660c47f"></a>

### [`00472e74`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00472/00472e74.md) → [`00473194`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00473/00473194.md) FUN_00473194

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `bounded` · 参照 `changed`

- 旧版 呼出元 3件 [`00472de4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00472/00472de4.md) [`00476708`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00476/00476708.md) [`00477a0c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00477/00477a0c.md) · 呼出先 1件 [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)
- 新版 呼出元 3件 [`00473104`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00473/00473104.md) [`00476a28`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00476/00476a28.md) [`00477d2c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00477/00477d2c.md) · 呼出先 1件 [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 92.45% / 新版 92.45%

優先判定に残った影響 `store_value` 2件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "004731d8",
      "incomplete_value": false,
      "site": "004731dc",
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
            "const:e50:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00472eb8",
      "incomplete_value": false,
      "site": "00472ebc",
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
            "const:e80:8"
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
      "definition_site": "00473220",
      "incomplete_value": false,
      "site": "00473224",
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
            "const:ea0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00472f00",
      "incomplete_value": false,
      "site": "00472f04",
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
            "const:ed0:8"
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
      "004731dc",
      "DATA",
      [
        "storage",
        "00c64e80",
        null,
        "undefined *"
      ]
    ],
    [
      "00473224",
      "DATA",
      [
        "storage",
        "00c64ed0",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "004731dc",
      "DATA",
      [
        "storage",
        "00c65e50",
        null,
        "undefined *"
      ]
    ],
    [
      "00473224",
      "DATA",
      [
        "storage",
        "00c65ea0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00472eac ["INT_ADD", "register:40f0:8", ["const:472eac:8", "const:4:8"]]
- 00472eac ["CALL", null, ["callee:00c58f30:8"]]
+ 004731cc ["INT_ADD", "register:40f0:8", ["const:4731cc:8", "const:4:8"]]
+ 004731cc ["CALL", null, ["callee:00c58f30:8"]]
- 00472eb4 ["COPY", "register:4040:8", ["const:c64000:8"]]
+ 004731d4 ["COPY", "register:4040:8", ["const:c65000:8"]]
- 00472eb8 ["COPY", "tmp:0:8", ["const:e80:8"]]
- 00472eb8 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00472eb8 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00472eb8 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 004731d8 ["COPY", "tmp:0:8", ["const:e50:8"]]
+ 004731d8 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 004731d8 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 004731d8 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-5cd2cd35fca2e348445d6156ae3522e3"></a>

### [`00473068`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00473/00473068.md) → [`00473388`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00473/00473388.md) FUN_00473388

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 3件 [`00472de4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00472/00472de4.md) [`00476708`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00476/00476708.md) [`00477a0c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00477/00477a0c.md) · 呼出先 9件 [`00474f08`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00474/00474f08.md) [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md) [`00c581b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c581b0.md) [`00c581c0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c581c0.md)
- 新版 呼出元 3件 [`00473104`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00473/00473104.md) [`00476a28`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00476/00476a28.md) [`00477d2c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00477/00477d2c.md) · 呼出先 9件 [`00475228`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00475/00475228.md) [`00c54d90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d90.md) [`00c58f20`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f20.md) [`00c59180`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59180.md) [`00c59190`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59190.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 98.82% / 新版 98.82%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "004733ac",
      "incomplete_value": false,
      "site": "004733b0",
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
            "const:f4:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0047308c",
      "incomplete_value": false,
      "site": "00473090",
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
            "const:25:8"
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
      "004733ac",
      "PARAM",
      [
        "storage",
        "002b8025",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "004733ac",
      "PARAM",
      [
        "storage",
        "002b80f4",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 00473090 ["INT_ADD", "register:40f0:8", ["const:473090:8", "const:4:8"]]
- 00473090 ["CALL", null, ["callee:00c59510:8"]]
+ 004733b0 ["INT_ADD", "register:40f0:8", ["const:4733b0:8", "const:4:8"]]
+ 004733b0 ["CALL", null, ["callee:00c59510:8"]]
- 0047308c ["COPY", "tmp:0:8", ["const:25:8"]]
- 0047308c ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 0047308c ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 0047308c ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 004733ac ["COPY", "tmp:0:8", ["const:f4:8"]]
+ 004733ac ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 004733ac ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 004733ac ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
- 0047309c ["INT_ADD", "register:40f0:8", ["const:47309c:8", "const:4:8"]]
- 0047309c ["CALL", null, ["callee:00c59180:8"]]
+ 004733bc ["INT_ADD", "register:40f0:8", ["const:4733bc:8", "const:4:8"]]
+ 004733bc ["CALL", null, ["callee:00c59180:8"]]
~~~


<a id="compare-07d1d44d1ad533d732d809c474377bd5"></a>

### [`004731d4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00473/004731d4.md) → [`004734f4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00473/004734f4.md) FUN_004734f4

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `bounded` · 参照 `changed`

- 旧版 呼出元 1件 [`0085155c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/0085155c.md) · 呼出先 4件 [`004758b8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00475/004758b8.md) [`004758bc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00475/004758bc.md) [`005509ec`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00550/005509ec.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)
- 新版 呼出元 1件 [`00852508`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/00852508.md) · 呼出先 4件 [`00475bd8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00475/00475bd8.md) [`00475bdc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00475/00475bdc.md) [`00550d0c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00550/00550d0c.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 94.29% / 新版 94.29%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "00473520",
      "incomplete_value": false,
      "site": "00473520",
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
            "const:ef0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00473200",
      "incomplete_value": false,
      "site": "00473200",
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
            "const:f20:8"
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
      "00473520",
      "DATA",
      [
        "storage",
        "00c64f20",
        null,
        "undefined *"
      ]
    ],
    [
      "00473554",
      "READ",
      [
        "storage",
        "00c64f40",
        null,
        "pointer"
      ]
    ],
    [
      "00473554",
      "READ",
      [
        "storage",
        "00c64f48",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00473520",
      "DATA",
      [
        "storage",
        "00c65ef0",
        null,
        "undefined *"
      ]
    ],
    [
      "00473554",
      "READ",
      [
        "storage",
        "00c65f10",
        null,
        "pointer"
      ]
    ],
    [
      "00473554",
      "READ",
      [
        "storage",
        "00c65f18",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 004731f4 ["COPY", "register:4040:8", ["const:c64000:8"]]
+ 00473514 ["COPY", "register:4040:8", ["const:c65000:8"]]
- 004731f8 ["COPY", "tmp:0:8", ["const:f20:8"]]
- 004731f8 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 004731f8 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 004731f8 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00473518 ["COPY", "tmp:0:8", ["const:ef0:8"]]
+ 00473518 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00473518 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00473518 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 0047320c ["INT_ADD", "register:40f0:8", ["const:47320c:8", "const:4:8"]]
- 0047320c ["CALL", null, ["callee:00550d0c:8"]]
+ 0047352c ["INT_ADD", "register:40f0:8", ["const:47352c:8", "const:4:8"]]
+ 0047352c ["CALL", null, ["callee:00550d0c:8"]]
~~~


<a id="compare-cde67971e4b14494088588d857e805e3"></a>

### [`004732b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00473/004732b0.md) → [`004735d0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00473/004735d0.md) FUN_004735d0

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 4件 [`00769ddc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00769/00769ddc.md) [`00853360`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00853/00853360.md) [`00922e1c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00922/00922e1c.md) [`00a8a488`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a8a/00a8a488.md) · 呼出先 10件 [`00475de0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00475/00475de0.md) [`00768420`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00768/00768420.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)
- 新版 呼出元 4件 [`0076a1b8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0076a/0076a1b8.md) [`0085430c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00854/0085430c.md) [`00923dc8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00923/00923dc8.md) [`00a8b47c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a8b/00a8b47c.md) · 呼出先 10件 [`00476100`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00476/00476100.md) [`007687fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00768/007687fc.md) [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md) [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md)

変更の種類 call, call_argument_candidate, call_target, constant, operands_and_dependencies

命令の説明率　旧版 96.36% / 新版 96.36%

優先判定に残った影響 `call_argument_candidate` 1件, `call_target` 1件

アドレスに依存する影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_target",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "004735f8",
      "value": [
        "leaf",
        "ram:7687fc:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "004732d8",
      "value": [
        "leaf",
        "ram:768420:8"
      ]
    },
    "ordinal": 1,
    "slot": 0
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00473634",
      "incomplete_value": false,
      "site": "00473640",
      "value": [
        "leaf",
        "const:476100:8"
      ]
    },
    "old": {
      "definition_site": "00473314",
      "incomplete_value": false,
      "site": "00473320",
      "value": [
        "leaf",
        "const:475de0:8"
      ]
    },
    "ordinal": 5,
    "slot": 3
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "0047369c",
      "incomplete_value": false,
      "site": "004736a0",
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
            "const:fa5:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0047337c",
      "incomplete_value": false,
      "site": "00473380",
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
            "const:eda:8"
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
      "004735f8",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "00768420"
      ]
    ],
    [
      "00473634",
      "PARAM",
      [
        "storage",
        "00475de0",
        null,
        null
      ]
    ],
    [
      "0047369c",
      "PARAM",
      [
        "storage",
        "002a3eda",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "004735f8",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "007687fc"
      ]
    ],
    [
      "00473634",
      "PARAM",
      [
        "storage",
        "00476100",
        null,
        null
      ]
    ],
    [
      "0047369c",
      "PARAM",
      [
        "storage",
        "002a3fa5",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 004732d8 ["INT_ADD", "register:40f0:8", ["const:4732d8:8", "const:4:8"]]
- 004732d8 ["CALL", null, ["ram:768420:8"]]
+ 004735f8 ["INT_ADD", "register:40f0:8", ["const:4735f8:8", "const:4:8"]]
+ 004735f8 ["CALL", null, ["ram:7687fc:8"]]
- 00473320 ["INT_ADD", "register:40f0:8", ["const:473320:8", "const:4:8"]]
- 00473320 ["CALL", null, ["callee:00c591b0:8"]]
+ 00473640 ["INT_ADD", "register:40f0:8", ["const:473640:8", "const:4:8"]]
+ 00473640 ["CALL", null, ["callee:00c591b0:8"]]
- 00473380 ["INT_ADD", "register:40f0:8", ["const:473380:8", "const:4:8"]]
- 00473380 ["CALL", null, ["callee:00c591c0:8"]]
+ 004736a0 ["INT_ADD", "register:40f0:8", ["const:4736a0:8", "const:4:8"]]
+ 004736a0 ["CALL", null, ["callee:00c591c0:8"]]
~~~


