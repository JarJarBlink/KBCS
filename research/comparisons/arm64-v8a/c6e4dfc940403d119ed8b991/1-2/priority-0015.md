# v16.0.2 → v16.0.3 · 最優先の変更候補 (15)

[一覧の目次](README.md)

<a id="compare-f26ec8e330e4b7f2d83199e205bed1e8"></a>

### [`00547e04`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00547/00547e04.md) → [`00548124`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00548/00548124.md) FUN_00548124

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`004ff3bc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/004ff/004ff3bc.md) · 呼出先 2件 [`0043bbe4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bbe4.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)
- 新版 呼出元 1件 [`004ff6dc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/004ff/004ff6dc.md) · 呼出先 2件 [`0043bf04`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bf04.md) [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 96.67% / 新版 96.67%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00548160",
      "incomplete_value": true,
      "site": "00548160",
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
      "definition_site": "00547e40",
      "incomplete_value": true,
      "site": "00547e40",
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
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "0054814c",
      "READ",
      [
        "storage",
        "00c9ae10",
        null,
        "pointer"
      ]
    ],
    [
      "00548160",
      "DATA",
      [
        "storage",
        "00c66358",
        null,
        "pointer"
      ]
    ],
    [
      "00548168",
      "READ",
      [
        "storage",
        "00c9ae88",
        null,
        "pointer"
      ]
    ]
  ],
  "added": [
    [
      "0054814c",
      "READ",
      [
        "storage",
        "00c9bde0",
        null,
        "pointer"
      ]
    ],
    [
      "00548160",
      "DATA",
      [
        "storage",
        "00c67328",
        null,
        "pointer"
      ]
    ],
    [
      "00548168",
      "READ",
      [
        "storage",
        "00c9be58",
        null,
        "pointer"
      ]
    ]
  ]
}
~~~


~~~diff
- 00547e20 ["INT_ADD", "register:40f0:8", ["const:547e20:8", "const:4:8"]]
- 00547e20 ["CALL", null, ["callee:00c58f30:8"]]
+ 00548140 ["INT_ADD", "register:40f0:8", ["const:548140:8", "const:4:8"]]
+ 00548140 ["CALL", null, ["callee:00c58f30:8"]]
- 00547e24 ["COPY", "register:4048:8", ["const:c9a000:8"]]
+ 00548144 ["COPY", "register:4048:8", ["const:c9b000:8"]]
- 00547e2c ["INT_ADD", "tmp:0:8", ["register:4048:8", "const:e10:8"]]
- 00547e2c ["LOAD", "register:4048:8", ["const:1b1:8", "tmp:0:8"]]
+ 0054814c ["INT_ADD", "tmp:0:8", ["register:4048:8", "const:de0:8"]]
+ 0054814c ["LOAD", "register:4048:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-0632fbf202bd5a4ebf48ef5428fee696"></a>

### [`00547f6c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00547/00547f6c.md) → [`0054828c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00548/0054828c.md) FUN_0054828c

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`004ff3bc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/004ff/004ff3bc.md) · 呼出先 5件 [`0043bb60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bb60.md) [`0049f46c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0049f/0049f46c.md) [`00535bac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00535/00535bac.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c580d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c580d0.md)
- 新版 呼出元 1件 [`004ff6dc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/004ff/004ff6dc.md) · 呼出先 5件 [`0043be80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043be80.md) [`0049f78c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0049f/0049f78c.md) [`00535ecc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00535/00535ecc.md) [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md) [`00c590a0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c590a0.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 91.78% / 新版 91.78%

優先判定に残った影響 `store_value` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "005482c8",
      "incomplete_value": true,
      "site": "005482cc",
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
      "definition_site": "00547fa8",
      "incomplete_value": true,
      "site": "00547fac",
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
    "ordinal": 12,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00548320",
      "incomplete_value": true,
      "site": "00548320",
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
      "definition_site": "00548000",
      "incomplete_value": true,
      "site": "00548000",
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
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "005482b8",
      "READ",
      [
        "storage",
        "00c9ae10",
        null,
        "pointer"
      ]
    ],
    [
      "005482cc",
      "DATA",
      [
        "storage",
        "00c66358",
        null,
        "pointer"
      ]
    ],
    [
      "00548310",
      "READ",
      [
        "storage",
        "00c9ae88",
        null,
        "pointer"
      ]
    ]
  ],
  "added": [
    [
      "005482b8",
      "READ",
      [
        "storage",
        "00c9bde0",
        null,
        "pointer"
      ]
    ],
    [
      "005482cc",
      "DATA",
      [
        "storage",
        "00c67328",
        null,
        "pointer"
      ]
    ],
    [
      "00548310",
      "READ",
      [
        "storage",
        "00c9be58",
        null,
        "pointer"
      ]
    ]
  ]
}
~~~


~~~diff
- 00547f8c ["COPY", "register:4040:8", ["const:c9a000:8"]]
+ 005482ac ["COPY", "register:4040:8", ["const:c9b000:8"]]
- 00547f98 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:e10:8"]]
- 00547f98 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
+ 005482b8 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:de0:8"]]
+ 005482b8 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
- 00547fc0 ["INT_ADD", "register:40f0:8", ["const:547fc0:8", "const:4:8"]]
- 00547fc0 ["CALL", null, ["callee:00c58f30:8"]]
+ 005482e0 ["INT_ADD", "register:40f0:8", ["const:5482e0:8", "const:4:8"]]
+ 005482e0 ["CALL", null, ["callee:00c58f30:8"]]
~~~


<a id="compare-9eabe71d5dce7d647fa71aff8ae7af0f"></a>

### [`005485c4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00548/005485c4.md) → [`005488e4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00548/005488e4.md) FUN_005488e4

根拠 `code_and_unique_call_neighborhood` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 8件 [`00529df8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00529/00529df8.md) [`0052b778`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0052b/0052b778.md) [`0052c394`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0052c/0052c394.md) [`0052ce30`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0052c/0052ce30.md) [`005483f8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00548/005483f8.md) · 呼出先 1件 [`0043b7b8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b7b8.md)
- 新版 呼出元 8件 [`0052a118`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0052a/0052a118.md) [`0052ba98`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0052b/0052ba98.md) [`0052c6b4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0052c/0052c6b4.md) [`0052d150`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0052d/0052d150.md) [`00548718`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00548/00548718.md) · 呼出先 1件 [`0043bad8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bad8.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 80.00% / 新版 80.00%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "005488f0",
      "incomplete_value": false,
      "site": "005488f4",
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
      "definition_site": "005485d0",
      "incomplete_value": false,
      "site": "005485d4",
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
      "005488f0",
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
      "005488f0",
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
- 005485d4 ["INT_ADD", "register:40f0:8", ["const:5485d4:8", "const:4:8"]]
- 005485d4 ["CALL", null, ["callee:0043bad8:8"]]
+ 005488f4 ["INT_ADD", "register:40f0:8", ["const:5488f4:8", "const:4:8"]]
+ 005488f4 ["CALL", null, ["callee:0043bad8:8"]]
- 005485cc ["COPY", "register:4000:8", ["const:2b7000:8"]]
+ 005488ec ["COPY", "register:4000:8", ["const:2b8000:8"]]
- 005485d0 ["COPY", "tmp:0:8", ["const:f8c:8"]]
- 005485d0 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 005485d0 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 005485d0 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 005488f0 ["COPY", "tmp:0:8", ["const:5b:8"]]
+ 005488f0 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 005488f0 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 005488f0 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
~~~


<a id="compare-da11f236f8079e90b2dea4a2c7eba7e9"></a>

### [`00548aac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00548/00548aac.md) → [`00548dcc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00548/00548dcc.md) FUN_00548dcc

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`00548734`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00548/00548734.md) · 呼出先 1件 [`0043b7b8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b7b8.md)
- 新版 呼出元 1件 [`00548a54`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00548/00548a54.md) · 呼出先 1件 [`0043bad8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bad8.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 80.00% / 新版 80.00%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00548dd8",
      "incomplete_value": false,
      "site": "00548ddc",
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
      "definition_site": "00548ab8",
      "incomplete_value": false,
      "site": "00548abc",
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
      "00548dd8",
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
      "00548dd8",
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
- 00548abc ["INT_ADD", "register:40f0:8", ["const:548abc:8", "const:4:8"]]
- 00548abc ["CALL", null, ["callee:0043bad8:8"]]
+ 00548ddc ["INT_ADD", "register:40f0:8", ["const:548ddc:8", "const:4:8"]]
+ 00548ddc ["CALL", null, ["callee:0043bad8:8"]]
- 00548ab4 ["COPY", "register:4000:8", ["const:2b7000:8"]]
+ 00548dd4 ["COPY", "register:4000:8", ["const:2b8000:8"]]
- 00548ab8 ["COPY", "tmp:0:8", ["const:f8c:8"]]
- 00548ab8 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 00548ab8 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 00548ab8 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 00548dd8 ["COPY", "tmp:0:8", ["const:5b:8"]]
+ 00548dd8 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 00548dd8 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 00548dd8 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
~~~


<a id="compare-ea617ded362943fce91cd3780a8cb14a"></a>

### [`00548ad4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00548/00548ad4.md) → [`00548df4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00548/00548df4.md) FUN_00548df4

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c57f70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f70.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c58f40`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f40.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 76.92% / 新版 76.92%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00548e0c",
      "incomplete_value": true,
      "site": "00548e10",
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
      "definition_site": "00548aec",
      "incomplete_value": true,
      "site": "00548af0",
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
      "00548e08",
      "READ",
      [
        "storage",
        "00c9b1b8",
        null,
        "pointer"
      ]
    ],
    [
      "00548e10",
      "DATA",
      [
        "storage",
        "00c6a860",
        null,
        "pointer"
      ]
    ]
  ],
  "added": [
    [
      "00548e08",
      "READ",
      [
        "storage",
        "00c9c188",
        null,
        "pointer"
      ]
    ],
    [
      "00548e10",
      "DATA",
      [
        "storage",
        "00c6b830",
        null,
        "pointer"
      ]
    ]
  ]
}
~~~


~~~diff
- 00548ae0 ["COPY", "register:4040:8", ["const:c9b000:8"]]
+ 00548e00 ["COPY", "register:4040:8", ["const:c9c000:8"]]
- 00548ae8 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:1b8:8"]]
- 00548ae8 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
+ 00548e08 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:188:8"]]
+ 00548e08 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
- 00548af4 ["INT_ADD", "register:40f0:8", ["const:548af4:8", "const:4:8"]]
- 00548af4 ["CALL", null, ["callee:00c58f40:8"]]
+ 00548e14 ["INT_ADD", "register:40f0:8", ["const:548e14:8", "const:4:8"]]
+ 00548e14 ["CALL", null, ["callee:00c58f40:8"]]
~~~


<a id="compare-7a45d30e7eec337c8fe3ad2be3b78be5"></a>

### [`00548d84`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00548/00548d84.md) → [`005490a4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00549/005490a4.md) FUN_005490a4

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c57f70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f70.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c58f40`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f40.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 76.92% / 新版 76.92%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "005490bc",
      "incomplete_value": true,
      "site": "005490c0",
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
      "definition_site": "00548d9c",
      "incomplete_value": true,
      "site": "00548da0",
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
      "005490b8",
      "READ",
      [
        "storage",
        "00c9b1d0",
        null,
        "pointer"
      ]
    ],
    [
      "005490c0",
      "DATA",
      [
        "storage",
        "00c6a8b0",
        null,
        "pointer"
      ]
    ]
  ],
  "added": [
    [
      "005490b8",
      "READ",
      [
        "storage",
        "00c9c1a0",
        null,
        "pointer"
      ]
    ],
    [
      "005490c0",
      "DATA",
      [
        "storage",
        "00c6b880",
        null,
        "pointer"
      ]
    ]
  ]
}
~~~


~~~diff
- 00548d90 ["COPY", "register:4040:8", ["const:c9b000:8"]]
+ 005490b0 ["COPY", "register:4040:8", ["const:c9c000:8"]]
- 00548d98 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:1d0:8"]]
- 00548d98 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
+ 005490b8 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:1a0:8"]]
+ 005490b8 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
- 00548da4 ["INT_ADD", "register:40f0:8", ["const:548da4:8", "const:4:8"]]
- 00548da4 ["CALL", null, ["callee:00c58f40:8"]]
+ 005490c4 ["INT_ADD", "register:40f0:8", ["const:5490c4:8", "const:4:8"]]
+ 005490c4 ["CALL", null, ["callee:00c58f40:8"]]
~~~


<a id="compare-4f1558ef342a93d61f723a2da83c6135"></a>

### [`00549258`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00549/00549258.md) → [`00549578`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00549/00549578.md) FUN_00549578

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
      "definition_site": "0054958c",
      "incomplete_value": false,
      "site": "00549590",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c6b000:8"
          ],
          [
            "leaf",
            "const:920:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0054926c",
      "incomplete_value": false,
      "site": "00549270",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c6a000:8"
          ],
          [
            "leaf",
            "const:950:8"
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
      "00549590",
      "DATA",
      [
        "storage",
        "00c6a950",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00549590",
      "DATA",
      [
        "storage",
        "00c6b920",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00549264 ["INT_ADD", "register:40f0:8", ["const:549264:8", "const:4:8"]]
- 00549264 ["CALL", null, ["callee:00c58f30:8"]]
+ 00549584 ["INT_ADD", "register:40f0:8", ["const:549584:8", "const:4:8"]]
+ 00549584 ["CALL", null, ["callee:00c58f30:8"]]
- 00549268 ["COPY", "register:4040:8", ["const:c6a000:8"]]
+ 00549588 ["COPY", "register:4040:8", ["const:c6b000:8"]]
- 0054926c ["COPY", "tmp:0:8", ["const:950:8"]]
- 0054926c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 0054926c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 0054926c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 0054958c ["COPY", "tmp:0:8", ["const:920:8"]]
+ 0054958c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 0054958c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 0054958c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-880c27d046aab0a418334d10e95e91d5"></a>

### [`00549360`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00549/00549360.md) → [`00549680`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00549/00549680.md) FUN_00549680

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
      "definition_site": "00549694",
      "incomplete_value": false,
      "site": "00549698",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c6b000:8"
          ],
          [
            "leaf",
            "const:9b0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00549374",
      "incomplete_value": false,
      "site": "00549378",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c6a000:8"
          ],
          [
            "leaf",
            "const:9e0:8"
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
      "00549698",
      "DATA",
      [
        "storage",
        "00c6a9e0",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00549698",
      "DATA",
      [
        "storage",
        "00c6b9b0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 0054936c ["INT_ADD", "register:40f0:8", ["const:54936c:8", "const:4:8"]]
- 0054936c ["CALL", null, ["callee:00c58f30:8"]]
+ 0054968c ["INT_ADD", "register:40f0:8", ["const:54968c:8", "const:4:8"]]
+ 0054968c ["CALL", null, ["callee:00c58f30:8"]]
- 00549370 ["COPY", "register:4040:8", ["const:c6a000:8"]]
+ 00549690 ["COPY", "register:4040:8", ["const:c6b000:8"]]
- 00549374 ["COPY", "tmp:0:8", ["const:9e0:8"]]
- 00549374 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00549374 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00549374 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00549694 ["COPY", "tmp:0:8", ["const:9b0:8"]]
+ 00549694 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00549694 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00549694 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-e232259ee60e0fcd1a390d32ce2a9667"></a>

### [`00549384`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00549/00549384.md) → [`005496a4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00549/005496a4.md) FUN_005496a4

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 0件 
- 新版 呼出元 0件  · 呼出先 0件 

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 50.00% / 新版 50.00%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "005496a8",
      "incomplete_value": true,
      "site": "005496ac",
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
            "const:9b0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00549388",
      "incomplete_value": true,
      "site": "0054938c",
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
            "const:9e0:8"
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
      "005496ac",
      "DATA",
      [
        "storage",
        "00c6a9e0",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "005496ac",
      "DATA",
      [
        "storage",
        "00c6b9b0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00549384 ["COPY", "register:4040:8", ["const:c6a000:8"]]
+ 005496a4 ["COPY", "register:4040:8", ["const:c6b000:8"]]
- 00549388 ["COPY", "tmp:0:8", ["const:9e0:8"]]
- 00549388 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00549388 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00549388 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 005496a8 ["COPY", "tmp:0:8", ["const:9b0:8"]]
+ 005496a8 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 005496a8 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 005496a8 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-3864f95dee0f0907f19e52c06d5edad8"></a>

### [`005498c8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00549/005498c8.md) → [`00549be8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00549/00549be8.md) FUN_00549be8

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`0050aeb8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0050a/0050aeb8.md) · 呼出先 8件 [`00440f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00440/00440f00.md) [`0054067c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00540/0054067c.md) [`00549acc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00549/00549acc.md) [`00549c10`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00549/00549c10.md) [`00549dfc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00549/00549dfc.md)
- 新版 呼出元 1件 [`0050b1d8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0050b/0050b1d8.md) · 呼出先 8件 [`00441220`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00441/00441220.md) [`0054099c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00540/0054099c.md) [`00549dec`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00549/00549dec.md) [`00549f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00549/00549f30.md) [`0054a11c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0054a/0054a11c.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 95.83% / 新版 95.83%

優先判定に残った影響 `store_value` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00549d08",
      "incomplete_value": true,
      "site": "00549d08",
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
      "definition_site": "005499e8",
      "incomplete_value": true,
      "site": "005499e8",
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
    "ordinal": 17,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00549d04",
      "incomplete_value": true,
      "site": "00549d1c",
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
      "definition_site": "005499e4",
      "incomplete_value": true,
      "site": "005499fc",
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
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "00549cbc",
      "READ",
      [
        "storage",
        "00c9b230",
        null,
        "pointer"
      ]
    ],
    [
      "00549cd8",
      "DATA",
      [
        "storage",
        "00c69b50",
        null,
        "pointer"
      ]
    ],
    [
      "00549cf8",
      "READ",
      [
        "storage",
        "00c9ae80",
        null,
        "pointer"
      ]
    ]
  ],
  "added": [
    [
      "00549cbc",
      "READ",
      [
        "storage",
        "00c9c200",
        null,
        "pointer"
      ]
    ],
    [
      "00549cd8",
      "DATA",
      [
        "storage",
        "00c6ab20",
        null,
        "pointer"
      ]
    ],
    [
      "00549cf8",
      "READ",
      [
        "storage",
        "00c9be50",
        null,
        "pointer"
      ]
    ]
  ]
}
~~~


~~~diff
- 00549980 ["INT_ADD", "register:40f0:8", ["const:549980:8", "const:4:8"]]
- 00549980 ["CALL", null, ["callee:00c58f30:8"]]
+ 00549ca0 ["INT_ADD", "register:40f0:8", ["const:549ca0:8", "const:4:8"]]
+ 00549ca0 ["CALL", null, ["callee:00c58f30:8"]]
- 00549994 ["COPY", "register:4048:8", ["const:c9b000:8"]]
+ 00549cb4 ["COPY", "register:4048:8", ["const:c9c000:8"]]
- 0054999c ["INT_ADD", "tmp:0:8", ["register:4048:8", "const:230:8"]]
- 0054999c ["LOAD", "register:4048:8", ["const:1b1:8", "tmp:0:8"]]
+ 00549cbc ["INT_ADD", "tmp:0:8", ["register:4048:8", "const:200:8"]]
+ 00549cbc ["LOAD", "register:4048:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-9ef095964eaf28478c8e2523e76fcc66"></a>

### [`00549acc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00549/00549acc.md) → [`00549dec`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00549/00549dec.md) FUN_00549dec

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 3件 [`0050aeb8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0050a/0050aeb8.md) [`005498c8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00549/005498c8.md) [`00549c10`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00549/00549c10.md) · 呼出先 5件 [`0049f46c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0049f/0049f46c.md) [`005366f4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00536/005366f4.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c580d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c580d0.md) [`00c58c10`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58c10.md)
- 新版 呼出元 3件 [`0050b1d8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0050b/0050b1d8.md) [`00549be8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00549/00549be8.md) [`00549f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00549/00549f30.md) · 呼出先 5件 [`0049f78c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0049f/0049f78c.md) [`00536a14`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00536/00536a14.md) [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md) [`00c590a0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c590a0.md) [`00c59be0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59be0.md)

変更の種類 constant, operands_and_dependencies, operation_sequence, store_value

命令の説明率　旧版 93.44% / 新版 93.44%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00549e20",
      "incomplete_value": true,
      "site": "00549e20",
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
      "definition_site": "00549b00",
      "incomplete_value": true,
      "site": "00549b00",
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
      "00549e10",
      "READ",
      [
        "storage",
        "00c9b238",
        null,
        "pointer"
      ]
    ],
    [
      "00549e20",
      "DATA",
      [
        "storage",
        "00c678e8",
        null,
        "pointer"
      ]
    ]
  ],
  "added": [
    [
      "00549e10",
      "READ",
      [
        "storage",
        "00c9c208",
        null,
        "pointer"
      ]
    ],
    [
      "00549e20",
      "DATA",
      [
        "storage",
        "00c688b8",
        null,
        "pointer"
      ]
    ]
  ]
}
~~~


~~~diff
- 00549ae4 ["COPY", "register:4040:8", ["const:c9b000:8"]]
+ 00549e04 ["COPY", "register:4040:8", ["const:c9c000:8"]]
- 00549af0 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:238:8"]]
- 00549af0 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
+ 00549e10 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:208:8"]]
+ 00549e10 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
- 00549af4 ["COPY", "register:40a0:8", ["register:4000:8"]]
~~~


<a id="compare-afba9fa5d29cf255fb6d955e25972432"></a>

### [`00549dfc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00549/00549dfc.md) → [`0054a11c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0054a/0054a11c.md) FUN_0054a11c

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`005498c8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00549/005498c8.md) · 呼出先 1件 [`0043b7b8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b7b8.md)
- 新版 呼出元 1件 [`00549be8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00549/00549be8.md) · 呼出先 1件 [`0043bad8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bad8.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 80.00% / 新版 80.00%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "0054a128",
      "incomplete_value": false,
      "site": "0054a12c",
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
      "definition_site": "00549e08",
      "incomplete_value": false,
      "site": "00549e0c",
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
      "0054a128",
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
      "0054a128",
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
- 00549e0c ["INT_ADD", "register:40f0:8", ["const:549e0c:8", "const:4:8"]]
- 00549e0c ["CALL", null, ["callee:0043bad8:8"]]
+ 0054a12c ["INT_ADD", "register:40f0:8", ["const:54a12c:8", "const:4:8"]]
+ 0054a12c ["CALL", null, ["callee:0043bad8:8"]]
- 00549e04 ["COPY", "register:4000:8", ["const:2b7000:8"]]
+ 0054a124 ["COPY", "register:4000:8", ["const:2b8000:8"]]
- 00549e08 ["COPY", "tmp:0:8", ["const:f8c:8"]]
- 00549e08 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 00549e08 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 00549e08 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 0054a128 ["COPY", "tmp:0:8", ["const:5b:8"]]
+ 0054a128 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 0054a128 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 0054a128 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
~~~


<a id="compare-b7c9afdad652166ab5cc5a2bddc53e02"></a>

### [`0054b0ac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0054b/0054b0ac.md) → [`0054b3cc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0054b/0054b3cc.md) FUN_0054b3cc

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`00508b4c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00508/00508b4c.md) · 呼出先 2件 [`0043bbe4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bbe4.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)
- 新版 呼出元 1件 [`00508e6c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00508/00508e6c.md) · 呼出先 2件 [`0043bf04`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bf04.md) [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 96.05% / 新版 96.05%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "0054b41c",
      "incomplete_value": true,
      "site": "0054b41c",
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
      "definition_site": "0054b0fc",
      "incomplete_value": true,
      "site": "0054b0fc",
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
      "0054b404",
      "READ",
      [
        "storage",
        "00c9ae10",
        null,
        "pointer"
      ]
    ],
    [
      "0054b41c",
      "DATA",
      [
        "storage",
        "00c66358",
        null,
        "pointer"
      ]
    ]
  ],
  "added": [
    [
      "0054b404",
      "READ",
      [
        "storage",
        "00c9bde0",
        null,
        "pointer"
      ]
    ],
    [
      "0054b41c",
      "DATA",
      [
        "storage",
        "00c67328",
        null,
        "pointer"
      ]
    ]
  ]
}
~~~


~~~diff
- 0054b0c8 ["INT_ADD", "register:40f0:8", ["const:54b0c8:8", "const:4:8"]]
- 0054b0c8 ["CALL", null, ["callee:00c58f30:8"]]
+ 0054b3e8 ["INT_ADD", "register:40f0:8", ["const:54b3e8:8", "const:4:8"]]
+ 0054b3e8 ["CALL", null, ["callee:00c58f30:8"]]
- 0054b0d8 ["COPY", "register:4048:8", ["const:c9a000:8"]]
+ 0054b3f8 ["COPY", "register:4048:8", ["const:c9b000:8"]]
- 0054b0e4 ["INT_ADD", "tmp:0:8", ["register:4048:8", "const:e10:8"]]
- 0054b0e4 ["LOAD", "register:4048:8", ["const:1b1:8", "tmp:0:8"]]
+ 0054b404 ["INT_ADD", "tmp:0:8", ["register:4048:8", "const:de0:8"]]
+ 0054b404 ["LOAD", "register:4048:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-2f3807d2a1c90d9beb7c41c72e310a16"></a>

### [`0054b810`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0054b/0054b810.md) → [`0054bb30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0054b/0054bb30.md) FUN_0054bb30

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`005154f4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00515/005154f4.md) · 呼出先 6件 [`00535bac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00535/00535bac.md) [`0054b8e8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0054b/0054b8e8.md) [`00c53ffc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53ffc.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 1件 [`00515814`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00515/00515814.md) · 呼出先 6件 [`00535ecc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00535/00535ecc.md) [`0054bc08`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0054b/0054bc08.md) [`00c54fec`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54fec.md) [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 94.44% / 新版 94.44%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "0054bb74",
      "incomplete_value": true,
      "site": "0054bb80",
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
      "definition_site": "0054b854",
      "incomplete_value": true,
      "site": "0054b860",
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
      "0054bb64",
      "READ",
      [
        "storage",
        "00c9ae10",
        null,
        "pointer"
      ]
    ],
    [
      "0054bb80",
      "DATA",
      [
        "storage",
        "00c66358",
        null,
        "pointer"
      ]
    ]
  ],
  "added": [
    [
      "0054bb64",
      "READ",
      [
        "storage",
        "00c9bde0",
        null,
        "pointer"
      ]
    ],
    [
      "0054bb80",
      "DATA",
      [
        "storage",
        "00c67328",
        null,
        "pointer"
      ]
    ]
  ]
}
~~~


~~~diff
- 0054b834 ["INT_ADD", "register:40f0:8", ["const:54b834:8", "const:4:8"]]
- 0054b834 ["CALL", null, ["callee:00c58f30:8"]]
+ 0054bb54 ["INT_ADD", "register:40f0:8", ["const:54bb54:8", "const:4:8"]]
+ 0054bb54 ["CALL", null, ["callee:00c58f30:8"]]
- 0054b83c ["COPY", "register:4040:8", ["const:c9a000:8"]]
+ 0054bb5c ["COPY", "register:4040:8", ["const:c9b000:8"]]
- 0054b844 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:e10:8"]]
- 0054b844 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
+ 0054bb64 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:de0:8"]]
+ 0054bb64 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-e8123467c040465d3a1cfff9c878c234"></a>

### [`0054b984`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0054b/0054b984.md) → [`0054bca4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0054b/0054bca4.md) FUN_0054bca4

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 6件 [`00503104`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00503/00503104.md) [`0051140c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00511/0051140c.md) [`00517690`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00517/00517690.md) [`00519e40`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00519/00519e40.md) [`0051c0a8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0051c/0051c0a8.md) · 呼出先 9件 [`00440f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00440/00440f00.md) [`00535bac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00535/00535bac.md) [`0053f044`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0053f/0053f044.md) [`0054bbcc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0054b/0054bbcc.md) [`00c53ffc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53ffc.md)
- 新版 呼出元 6件 [`00503424`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00503/00503424.md) [`0051172c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00511/0051172c.md) [`005179b0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00517/005179b0.md) [`0051a160`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0051a/0051a160.md) [`0051c3c8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0051c/0051c3c8.md) · 呼出先 9件 [`00441220`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00441/00441220.md) [`00535ecc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00535/00535ecc.md) [`0053f364`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0053f/0053f364.md) [`0054beec`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0054b/0054beec.md) [`00c54fec`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54fec.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 97.95% / 新版 97.95%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "0054bd5c",
      "incomplete_value": true,
      "site": "0054bd64",
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
      "definition_site": "0054ba3c",
      "incomplete_value": true,
      "site": "0054ba44",
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
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "0054bd4c",
      "READ",
      [
        "storage",
        "00c9ae10",
        null,
        "pointer"
      ]
    ],
    [
      "0054bd64",
      "DATA",
      [
        "storage",
        "00c66358",
        null,
        "pointer"
      ]
    ],
    [
      "0054bdc0",
      "DATA",
      [
        "storage",
        "00c66358",
        null,
        "pointer"
      ]
    ]
  ],
  "added": [
    [
      "0054bd4c",
      "READ",
      [
        "storage",
        "00c9bde0",
        null,
        "pointer"
      ]
    ],
    [
      "0054bd64",
      "DATA",
      [
        "storage",
        "00c67328",
        null,
        "pointer"
      ]
    ],
    [
      "0054bdc0",
      "DATA",
      [
        "storage",
        "00c67328",
        null,
        "pointer"
      ]
    ]
  ]
}
~~~


~~~diff
- 0054ba10 ["INT_ADD", "register:40f0:8", ["const:54ba10:8", "const:4:8"]]
- 0054ba10 ["CALL", null, ["callee:00c58f30:8"]]
+ 0054bd30 ["INT_ADD", "register:40f0:8", ["const:54bd30:8", "const:4:8"]]
+ 0054bd30 ["CALL", null, ["callee:00c58f30:8"]]
- 0054ba24 ["COPY", "register:40c8:8", ["const:c9a000:8"]]
+ 0054bd44 ["COPY", "register:40c8:8", ["const:c9b000:8"]]
- 0054ba2c ["INT_ADD", "tmp:0:8", ["register:40c8:8", "const:e10:8"]]
- 0054ba2c ["LOAD", "register:40c8:8", ["const:1b1:8", "tmp:0:8"]]
+ 0054bd4c ["INT_ADD", "tmp:0:8", ["register:40c8:8", "const:de0:8"]]
+ 0054bd4c ["LOAD", "register:40c8:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-18a5c08ac2a69ffbd78d4ae7909a6159"></a>

### [`0054c264`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0054c/0054c264.md) → [`0054c584`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0054c/0054c584.md) FUN_0054c584

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`0054c12c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0054c/0054c12c.md) · 呼出先 1件 [`0043b7b8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b7b8.md)
- 新版 呼出元 1件 [`0054c44c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0054c/0054c44c.md) · 呼出先 1件 [`0043bad8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bad8.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 80.00% / 新版 80.00%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "0054c590",
      "incomplete_value": false,
      "site": "0054c594",
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
      "definition_site": "0054c270",
      "incomplete_value": false,
      "site": "0054c274",
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
      "0054c590",
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
      "0054c590",
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
- 0054c274 ["INT_ADD", "register:40f0:8", ["const:54c274:8", "const:4:8"]]
- 0054c274 ["CALL", null, ["callee:0043bad8:8"]]
+ 0054c594 ["INT_ADD", "register:40f0:8", ["const:54c594:8", "const:4:8"]]
+ 0054c594 ["CALL", null, ["callee:0043bad8:8"]]
- 0054c26c ["COPY", "register:4000:8", ["const:2b7000:8"]]
+ 0054c58c ["COPY", "register:4000:8", ["const:2b8000:8"]]
- 0054c270 ["COPY", "tmp:0:8", ["const:f8c:8"]]
- 0054c270 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 0054c270 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 0054c270 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 0054c590 ["COPY", "tmp:0:8", ["const:5b:8"]]
+ 0054c590 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 0054c590 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 0054c590 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
~~~


<a id="compare-218024f4b8c740028db17451d74a28f2"></a>

### [`0054c770`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0054c/0054c770.md) → [`0054ca90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0054c/0054ca90.md) FUN_0054ca90

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`0054c5a4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0054c/0054c5a4.md) · 呼出先 5件 [`0049f46c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0049f/0049f46c.md) [`00535bac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00535/00535bac.md) [`00c53d70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53d70.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c580d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c580d0.md)
- 新版 呼出元 1件 [`0054c8c4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0054c/0054c8c4.md) · 呼出先 5件 [`0049f78c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0049f/0049f78c.md) [`00535ecc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00535/00535ecc.md) [`00c54d60`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d60.md) [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md) [`00c590a0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c590a0.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 95.31% / 新版 95.31%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "0054cacc",
      "incomplete_value": true,
      "site": "0054cad0",
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
      "definition_site": "0054c7ac",
      "incomplete_value": true,
      "site": "0054c7b0",
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
      "0054cabc",
      "READ",
      [
        "storage",
        "00c9ae10",
        null,
        "pointer"
      ]
    ],
    [
      "0054cad0",
      "DATA",
      [
        "storage",
        "00c66358",
        null,
        "pointer"
      ]
    ]
  ],
  "added": [
    [
      "0054cabc",
      "READ",
      [
        "storage",
        "00c9bde0",
        null,
        "pointer"
      ]
    ],
    [
      "0054cad0",
      "DATA",
      [
        "storage",
        "00c67328",
        null,
        "pointer"
      ]
    ]
  ]
}
~~~


~~~diff
- 0054c790 ["COPY", "register:4040:8", ["const:c9a000:8"]]
+ 0054cab0 ["COPY", "register:4040:8", ["const:c9b000:8"]]
- 0054c79c ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:e10:8"]]
- 0054c79c ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
+ 0054cabc ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:de0:8"]]
+ 0054cabc ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
- 0054c7c4 ["INT_ADD", "register:40f0:8", ["const:54c7c4:8", "const:4:8"]]
- 0054c7c4 ["CALL", null, ["callee:00c58f30:8"]]
+ 0054cae4 ["INT_ADD", "register:40f0:8", ["const:54cae4:8", "const:4:8"]]
+ 0054cae4 ["CALL", null, ["callee:00c58f30:8"]]
~~~


<a id="compare-e566a98e73f113853fcba14a112958a6"></a>

### [`0054c8bc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0054c/0054c8bc.md) → [`0054cbdc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0054c/0054cbdc.md) FUN_0054cbdc

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`0051a7bc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0051a/0051a7bc.md) · 呼出先 6件 [`0043bb60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bb60.md) [`00440f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00440/00440f00.md) [`0053d838`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0053d/0053d838.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 1件 [`0051aadc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0051a/0051aadc.md) · 呼出先 6件 [`0043be80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043be80.md) [`00441220`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00441/00441220.md) [`0053db58`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0053d/0053db58.md) [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 96.75% / 新版 96.75%

優先判定に残った影響 `store_value` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "0054ccb4",
      "incomplete_value": true,
      "site": "0054ccb4",
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
      "definition_site": "0054c994",
      "incomplete_value": true,
      "site": "0054c994",
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
    "ordinal": 12,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "0054ccb4",
      "incomplete_value": true,
      "site": "0054ccb4",
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
      "definition_site": "0054c994",
      "incomplete_value": true,
      "site": "0054c994",
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
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "0054cc9c",
      "READ",
      [
        "storage",
        "00c9b220",
        null,
        "pointer"
      ]
    ],
    [
      "0054cca0",
      "READ",
      [
        "storage",
        "00c9b1f8",
        null,
        "pointer"
      ]
    ],
    [
      "0054ccb4",
      "DATA",
      [
        "storage",
        "00c681e8",
        null,
        "pointer"
      ]
    ]
  ],
  "added": [
    [
      "0054cc9c",
      "READ",
      [
        "storage",
        "00c9c1f0",
        null,
        "pointer"
      ]
    ],
    [
      "0054cca0",
      "READ",
      [
        "storage",
        "00c9c1c8",
        null,
        "pointer"
      ]
    ],
    [
      "0054ccb4",
      "DATA",
      [
        "storage",
        "00c691b8",
        null,
        "pointer"
      ]
    ]
  ]
}
~~~


~~~diff
- 0054c960 ["INT_ADD", "register:40f0:8", ["const:54c960:8", "const:4:8"]]
- 0054c960 ["CALL", null, ["callee:00c58f30:8"]]
+ 0054cc80 ["INT_ADD", "register:40f0:8", ["const:54cc80:8", "const:4:8"]]
+ 0054cc80 ["CALL", null, ["callee:00c58f30:8"]]
- 0054c970 ["COPY", "register:40c8:8", ["const:c9b000:8"]]
+ 0054cc90 ["COPY", "register:40c8:8", ["const:c9c000:8"]]
- 0054c974 ["COPY", "register:40d0:8", ["const:c9b000:8"]]
+ 0054cc94 ["COPY", "register:40d0:8", ["const:c9c000:8"]]
~~~


<a id="compare-59debfb3414ec80527fccb685d9611fb"></a>

### [`0054cbdc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0054c/0054cbdc.md) → [`0054cefc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0054c/0054cefc.md) FUN_0054cefc

根拠 `code_and_unique_call_neighborhood` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 3件 [`0051b15c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0051b/0051b15c.md) [`00527e68`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00527/00527e68.md) [`005283e4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00528/005283e4.md) · 呼出先 1件 [`00442970`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00442/00442970.md)
- 新版 呼出元 3件 [`0051b47c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0051b/0051b47c.md) [`00528188`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00528/00528188.md) [`00528704`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00528/00528704.md) · 呼出先 1件 [`00442c90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00442/00442c90.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 80.00% / 新版 80.00%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "0054cf08",
      "incomplete_value": true,
      "site": "0054cf0c",
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
            "const:5b:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0054cbe8",
      "incomplete_value": true,
      "site": "0054cbec",
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
      "0054cf08",
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
      "0054cf08",
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
- 0054cbec ["INT_ADD", "register:40f0:8", ["const:54cbec:8", "const:4:8"]]
- 0054cbec ["CALL", null, ["callee:00442c90:8"]]
+ 0054cf0c ["INT_ADD", "register:40f0:8", ["const:54cf0c:8", "const:4:8"]]
+ 0054cf0c ["CALL", null, ["callee:00442c90:8"]]
- 0054cbe4 ["COPY", "register:4000:8", ["const:2b7000:8"]]
+ 0054cf04 ["COPY", "register:4000:8", ["const:2b8000:8"]]
- 0054cbe8 ["COPY", "tmp:0:8", ["const:f8c:8"]]
- 0054cbe8 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 0054cbe8 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 0054cbe8 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 0054cf08 ["COPY", "tmp:0:8", ["const:5b:8"]]
+ 0054cf08 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 0054cf08 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 0054cf08 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
~~~


<a id="compare-dce63080caead5446cb1e5e66f6594cf"></a>

### [`0054cc60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0054c/0054cc60.md) → [`0054cf80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0054c/0054cf80.md) FUN_0054cf80

根拠 `code_and_unique_call_neighborhood` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 2件 [`0051bb28`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0051b/0051bb28.md) [`0051c0a8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0051c/0051c0a8.md) · 呼出先 1件 [`0043b7b8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b7b8.md)
- 新版 呼出元 2件 [`0051be48`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0051b/0051be48.md) [`0051c3c8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0051c/0051c3c8.md) · 呼出先 1件 [`0043bad8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bad8.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 80.00% / 新版 80.00%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "0054cf8c",
      "incomplete_value": true,
      "site": "0054cf90",
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
            "const:5b:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0054cc6c",
      "incomplete_value": true,
      "site": "0054cc70",
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
      "0054cf8c",
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
      "0054cf8c",
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
- 0054cc70 ["INT_ADD", "register:40f0:8", ["const:54cc70:8", "const:4:8"]]
- 0054cc70 ["CALL", null, ["callee:0043bad8:8"]]
+ 0054cf90 ["INT_ADD", "register:40f0:8", ["const:54cf90:8", "const:4:8"]]
+ 0054cf90 ["CALL", null, ["callee:0043bad8:8"]]
- 0054cc68 ["COPY", "register:4000:8", ["const:2b7000:8"]]
+ 0054cf88 ["COPY", "register:4000:8", ["const:2b8000:8"]]
- 0054cc6c ["COPY", "tmp:0:8", ["const:f8c:8"]]
- 0054cc6c ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 0054cc6c ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 0054cc6c ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 0054cf8c ["COPY", "tmp:0:8", ["const:5b:8"]]
+ 0054cf8c ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 0054cf8c ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 0054cf8c ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
~~~


<a id="compare-e45fe4caa6422b14b6dc88b7669fac1e"></a>

### [`0054d17c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0054d/0054d17c.md) → [`0054d49c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0054d/0054d49c.md) FUN_0054d49c

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`0051e3d8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0051e/0051e3d8.md) · 呼出先 9件 [`00440f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00440/00440f00.md) [`0046d4d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046d/0046d4d0.md) [`0053afd0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0053a/0053afd0.md) [`0053c980`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0053c/0053c980.md) [`0053fce0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0053f/0053fce0.md)
- 新版 呼出元 1件 [`0051e6f8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0051e/0051e6f8.md) · 呼出先 9件 [`00441220`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00441/00441220.md) [`0046d7f0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0046d/0046d7f0.md) [`0053b2f0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0053b/0053b2f0.md) [`0053cca0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0053c/0053cca0.md) [`00540000`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00540/00540000.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 96.81% / 新版 96.81%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "0054d548",
      "incomplete_value": true,
      "site": "0054d548",
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
      "definition_site": "0054d228",
      "incomplete_value": true,
      "site": "0054d228",
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
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "0054d534",
      "READ",
      [
        "storage",
        "00c9b2b8",
        null,
        "pointer"
      ]
    ],
    [
      "0054d548",
      "DATA",
      [
        "storage",
        "00c68ef8",
        null,
        "pointer"
      ]
    ]
  ],
  "added": [
    [
      "0054d534",
      "READ",
      [
        "storage",
        "00c9c288",
        null,
        "pointer"
      ]
    ],
    [
      "0054d548",
      "DATA",
      [
        "storage",
        "00c69ec8",
        null,
        "pointer"
      ]
    ]
  ]
}
~~~


~~~diff
- 0054d1fc ["INT_ADD", "register:40f0:8", ["const:54d1fc:8", "const:4:8"]]
- 0054d1fc ["CALL", null, ["callee:00c58f30:8"]]
+ 0054d51c ["INT_ADD", "register:40f0:8", ["const:54d51c:8", "const:4:8"]]
+ 0054d51c ["CALL", null, ["callee:00c58f30:8"]]
- 0054d20c ["COPY", "register:4050:8", ["const:c9b000:8"]]
+ 0054d52c ["COPY", "register:4050:8", ["const:c9c000:8"]]
- 0054d214 ["INT_ADD", "tmp:0:8", ["register:4050:8", "const:2b8:8"]]
- 0054d214 ["LOAD", "register:4050:8", ["const:1b1:8", "tmp:0:8"]]
+ 0054d534 ["INT_ADD", "tmp:0:8", ["register:4050:8", "const:288:8"]]
+ 0054d534 ["LOAD", "register:4050:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-5e5fc266dbd5daa69950ab909cd249e0"></a>

### [`0054da58`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0054d/0054da58.md) → [`0054dd78`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0054d/0054dd78.md) FUN_0054dd78

根拠 `code_and_unique_call_neighborhood` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`00527e68`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00527/00527e68.md) · 呼出先 1件 [`00442970`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00442/00442970.md)
- 新版 呼出元 1件 [`00528188`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00528/00528188.md) · 呼出先 1件 [`00442c90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00442/00442c90.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 80.00% / 新版 80.00%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "0054dd84",
      "incomplete_value": false,
      "site": "0054dd88",
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
      "definition_site": "0054da64",
      "incomplete_value": false,
      "site": "0054da68",
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
      "0054dd84",
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
      "0054dd84",
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
- 0054da68 ["INT_ADD", "register:40f0:8", ["const:54da68:8", "const:4:8"]]
- 0054da68 ["CALL", null, ["callee:00442c90:8"]]
+ 0054dd88 ["INT_ADD", "register:40f0:8", ["const:54dd88:8", "const:4:8"]]
+ 0054dd88 ["CALL", null, ["callee:00442c90:8"]]
- 0054da60 ["COPY", "register:4000:8", ["const:2b7000:8"]]
+ 0054dd80 ["COPY", "register:4000:8", ["const:2b8000:8"]]
- 0054da64 ["COPY", "tmp:0:8", ["const:f8c:8"]]
- 0054da64 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 0054da64 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 0054da64 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 0054dd84 ["COPY", "tmp:0:8", ["const:5b:8"]]
+ 0054dd84 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 0054dd84 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 0054dd84 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
~~~


<a id="compare-32dcf59754f59d8fcd409cc57dc13979"></a>

### [`0054dbd4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0054d/0054dbd4.md) → [`0054def4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0054d/0054def4.md) FUN_0054def4

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`0054e780`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0054e/0054e780.md) · 呼出先 1件 [`0043b7b8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b7b8.md)
- 新版 呼出元 1件 [`0054eaa0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0054e/0054eaa0.md) · 呼出先 1件 [`0043bad8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bad8.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 80.00% / 新版 80.00%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "0054df00",
      "incomplete_value": false,
      "site": "0054df04",
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
      "definition_site": "0054dbe0",
      "incomplete_value": false,
      "site": "0054dbe4",
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
      "0054df00",
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
      "0054df00",
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
- 0054dbe4 ["INT_ADD", "register:40f0:8", ["const:54dbe4:8", "const:4:8"]]
- 0054dbe4 ["CALL", null, ["callee:0043bad8:8"]]
+ 0054df04 ["INT_ADD", "register:40f0:8", ["const:54df04:8", "const:4:8"]]
+ 0054df04 ["CALL", null, ["callee:0043bad8:8"]]
- 0054dbdc ["COPY", "register:4000:8", ["const:2b7000:8"]]
+ 0054defc ["COPY", "register:4000:8", ["const:2b8000:8"]]
- 0054dbe0 ["COPY", "tmp:0:8", ["const:f8c:8"]]
- 0054dbe0 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 0054dbe0 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 0054dbe0 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 0054df00 ["COPY", "tmp:0:8", ["const:5b:8"]]
+ 0054df00 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 0054df00 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 0054df00 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
~~~


<a id="compare-53265c837fcbdccc3b5b8c42e1018af5"></a>

### [`0054dd94`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0054d/0054dd94.md) → [`0054e0b4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0054e/0054e0b4.md) FUN_0054e0b4

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`00529df8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00529/00529df8.md) · 呼出先 1件 [`0043b7b8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b7b8.md)
- 新版 呼出元 1件 [`0052a118`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0052a/0052a118.md) · 呼出先 1件 [`0043bad8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bad8.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 80.00% / 新版 80.00%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "0054e0c0",
      "incomplete_value": false,
      "site": "0054e0c4",
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
      "definition_site": "0054dda0",
      "incomplete_value": false,
      "site": "0054dda4",
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
      "0054e0c0",
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
      "0054e0c0",
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
- 0054dda4 ["INT_ADD", "register:40f0:8", ["const:54dda4:8", "const:4:8"]]
- 0054dda4 ["CALL", null, ["callee:0043bad8:8"]]
+ 0054e0c4 ["INT_ADD", "register:40f0:8", ["const:54e0c4:8", "const:4:8"]]
+ 0054e0c4 ["CALL", null, ["callee:0043bad8:8"]]
- 0054dd9c ["COPY", "register:4000:8", ["const:2b7000:8"]]
+ 0054e0bc ["COPY", "register:4000:8", ["const:2b8000:8"]]
- 0054dda0 ["COPY", "tmp:0:8", ["const:f8c:8"]]
- 0054dda0 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 0054dda0 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 0054dda0 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 0054e0c0 ["COPY", "tmp:0:8", ["const:5b:8"]]
+ 0054e0c0 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 0054e0c0 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 0054e0c0 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
~~~


<a id="compare-a4d265bc0dc2e1a5e74c2d1cd04e78f3"></a>

### [`0054e260`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0054e/0054e260.md) → [`0054e580`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0054e/0054e580.md) FUN_0054e580

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`0054dda8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0054d/0054dda8.md) · 呼出先 1件 [`0043b7b8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b7b8.md)
- 新版 呼出元 1件 [`0054e0c8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0054e/0054e0c8.md) · 呼出先 1件 [`0043bad8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bad8.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 80.00% / 新版 80.00%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "0054e58c",
      "incomplete_value": false,
      "site": "0054e590",
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
      "definition_site": "0054e26c",
      "incomplete_value": false,
      "site": "0054e270",
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
      "0054e58c",
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
      "0054e58c",
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
- 0054e270 ["INT_ADD", "register:40f0:8", ["const:54e270:8", "const:4:8"]]
- 0054e270 ["CALL", null, ["callee:0043bad8:8"]]
+ 0054e590 ["INT_ADD", "register:40f0:8", ["const:54e590:8", "const:4:8"]]
+ 0054e590 ["CALL", null, ["callee:0043bad8:8"]]
- 0054e268 ["COPY", "register:4000:8", ["const:2b7000:8"]]
+ 0054e588 ["COPY", "register:4000:8", ["const:2b8000:8"]]
- 0054e26c ["COPY", "tmp:0:8", ["const:f8c:8"]]
- 0054e26c ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 0054e26c ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 0054e26c ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 0054e58c ["COPY", "tmp:0:8", ["const:5b:8"]]
+ 0054e58c ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 0054e58c ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 0054e58c ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
~~~


<a id="compare-941ccbb08f428a27f29891d88ec11d49"></a>

### [`0054ef3c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0054e/0054ef3c.md) → [`0054f25c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0054f/0054f25c.md) FUN_0054f25c

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`0054ed44`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0054e/0054ed44.md) · 呼出先 1件 [`0043b7b8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b7b8.md)
- 新版 呼出元 1件 [`0054f064`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0054f/0054f064.md) · 呼出先 1件 [`0043bad8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bad8.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 80.00% / 新版 80.00%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "0054f268",
      "incomplete_value": false,
      "site": "0054f26c",
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
      "definition_site": "0054ef48",
      "incomplete_value": false,
      "site": "0054ef4c",
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
      "0054f268",
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
      "0054f268",
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
- 0054ef4c ["INT_ADD", "register:40f0:8", ["const:54ef4c:8", "const:4:8"]]
- 0054ef4c ["CALL", null, ["callee:0043bad8:8"]]
+ 0054f26c ["INT_ADD", "register:40f0:8", ["const:54f26c:8", "const:4:8"]]
+ 0054f26c ["CALL", null, ["callee:0043bad8:8"]]
- 0054ef44 ["COPY", "register:4000:8", ["const:2b7000:8"]]
+ 0054f264 ["COPY", "register:4000:8", ["const:2b8000:8"]]
- 0054ef48 ["COPY", "tmp:0:8", ["const:f8c:8"]]
- 0054ef48 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 0054ef48 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 0054ef48 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 0054f268 ["COPY", "tmp:0:8", ["const:5b:8"]]
+ 0054f268 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 0054f268 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 0054f268 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
~~~


<a id="compare-afe04e156959abf510d8f5b5220ab3b9"></a>

### [`0054f470`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0054f/0054f470.md) → [`0054f790`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0054f/0054f790.md) _INIT_25

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 10件 [`00473580`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00473/00473580.md) [`004e74d4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/004e7/004e74d4.md) [`004e767c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/004e7/004e767c.md) [`005154f4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00515/005154f4.md) [`00515610`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00515/00515610.md)
- 新版 呼出元 0件  · 呼出先 10件 [`004738a0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00473/004738a0.md) [`004e77f4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/004e7/004e77f4.md) [`004e799c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/004e7/004e799c.md) [`00515814`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00515/00515814.md) [`00515930`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00515/00515930.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 99.09% / 新版 99.09%

優先判定に残った影響 `call_argument_candidate` 6件

アドレスに依存する影響 `call_argument_candidate` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "0054fab4",
      "incomplete_value": false,
      "site": "0054fac8",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:ca6000:8"
          ],
          [
            "leaf",
            "const:328:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0054f794",
      "incomplete_value": false,
      "site": "0054f7a8",
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
            "const:368:8"
          ]
        ]
      ]
    },
    "ordinal": 12,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "0054fda4",
      "incomplete_value": false,
      "site": "0054fdb8",
      "value": [
        "leaf",
        "const:4e799c:8"
      ]
    },
    "old": {
      "definition_site": "0054fa84",
      "incomplete_value": false,
      "site": "0054fa98",
      "value": [
        "leaf",
        "const:4e767c:8"
      ]
    },
    "ordinal": 35,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "0054fdac",
      "incomplete_value": false,
      "site": "0054fdb8",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:ca6000:8"
          ],
          [
            "leaf",
            "const:328:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0054fa8c",
      "incomplete_value": false,
      "site": "0054fa98",
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
            "const:368:8"
          ]
        ]
      ]
    },
    "ordinal": 35,
    "slot": 2
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "0054f81c",
      "DATA",
      [
        "storage",
        "00415344",
        null,
        "uleb128"
      ]
    ],
    [
      "0054fa98",
      "DATA",
      [
        "storage",
        "00415352",
        null,
        "byte[55]"
      ]
    ],
    [
      "0054fab4",
      "PARAM",
      [
        "storage",
        "00ca5368",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "0054f81c",
      "DATA",
      [
        "storage",
        "00415344",
        null,
        "dword"
      ]
    ],
    [
      "0054fa98",
      "DATA",
      [
        "storage",
        "00415352",
        null,
        "byte[35]"
      ]
    ],
    [
      "0054fab4",
      "PARAM",
      [
        "storage",
        "00ca6328",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 0054f7a8 ["INT_ADD", "register:40f0:8", ["const:54f7a8:8", "const:4:8"]]
- 0054f7a8 ["CALL", null, ["callee:004e77f4:8"]]
+ 0054fac8 ["INT_ADD", "register:40f0:8", ["const:54fac8:8", "const:4:8"]]
+ 0054fac8 ["CALL", null, ["callee:004e77f4:8"]]
- 0054fa98 ["INT_ADD", "register:40f0:8", ["const:54fa98:8", "const:4:8"]]
- 0054fa98 ["CALL", null, ["callee:00c58ed0:8"]]
+ 0054fdb8 ["INT_ADD", "register:40f0:8", ["const:54fdb8:8", "const:4:8"]]
+ 0054fdb8 ["CALL", null, ["callee:00c58ed0:8"]]
- 0054fac8 ["COPY", "register:40b0:8", ["const:c9a000:8"]]
+ 0054fde8 ["COPY", "register:40b0:8", ["const:c9b000:8"]]
~~~


<a id="compare-9d2fdb50fd873191329322b4dfaca176"></a>

### [`00550a0c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00550/00550a0c.md) → [`00550d2c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00550/00550d2c.md) FUN_00550d2c

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 2件 [`007271b8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00727/007271b8.md) [`007275f8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00727/007275f8.md) · 呼出先 1件 [`00576480`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00576/00576480.md)
- 新版 呼出元 2件 [`00727568`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00727/00727568.md) [`007279a8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00727/007279a8.md) · 呼出先 1件 [`005767a0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00576/005767a0.md)

変更の種類 branch_value, constant, operands_and_dependencies

命令の説明率　旧版 72.73% / 新版 72.73%

優先判定に残った影響 `branch_value` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "branch_value",
    "new": {
      "definition_site": "00550d48",
      "incomplete_value": true,
      "site": "00550d48",
      "value": [
        "BOOL_OR",
        "1",
        [
          [
            "FLOAT_NAN",
            "1",
            [
              [
                "live",
                "register:5020:8"
              ]
            ]
          ],
          [
            "FLOAT_NAN",
            "1",
            [
              "LOAD"
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00550a28",
      "incomplete_value": true,
      "site": "00550a28",
      "value": [
        "BOOL_OR",
        "1",
        [
          [
            "FLOAT_NAN",
            "1",
            [
              [
                "live",
                "register:5020:8"
              ]
            ]
          ],
          [
            "FLOAT_NAN",
            "1",
            [
              "LOAD"
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
    "kind": "branch_value",
    "new": {
      "definition_site": "00550d48",
      "incomplete_value": true,
      "site": "00550d4c",
      "value": [
        "FLOAT_LESS",
        "1",
        [
          [
            "live",
            "register:5020:8"
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
      "definition_site": "00550a28",
      "incomplete_value": true,
      "site": "00550a2c",
      "value": [
        "FLOAT_LESS",
        "1",
        [
          [
            "live",
            "register:5020:8"
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
      "00550d44",
      "READ",
      [
        "storage",
        "002c3cc8",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00550d44",
      "READ",
      [
        "storage",
        "002c3d18",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00550a24 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:cc8:8"]]
- 00550a24 ["LOAD", "register:5060:8", ["const:1b1:8", "tmp:0:8"]]
- 00550a24 ["COPY", "register:5068:8", ["const:0:8"]]
- 00550a24 ["COPY", "register:5070:8", ["const:0:8"]]
+ 00550d44 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:d18:8"]]
+ 00550d44 ["LOAD", "register:5060:8", ["const:1b1:8", "tmp:0:8"]]
+ 00550d44 ["COPY", "register:5068:8", ["const:0:8"]]
+ 00550d44 ["COPY", "register:5070:8", ["const:0:8"]]
~~~


<a id="compare-6fd39261086ee17cddc48f945a04aed1"></a>

### [`00550a6c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00550/00550a6c.md) → [`00550d8c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00550/00550d8c.md) FUN_00550d8c

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c57f70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f70.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c58f40`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f40.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 76.92% / 新版 76.92%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00550da4",
      "incomplete_value": true,
      "site": "00550da8",
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
      "definition_site": "00550a84",
      "incomplete_value": true,
      "site": "00550a88",
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
      "00550da0",
      "READ",
      [
        "storage",
        "00c9b2f8",
        null,
        "pointer"
      ]
    ],
    [
      "00550da8",
      "DATA",
      [
        "storage",
        "00c6ac10",
        null,
        "pointer"
      ]
    ]
  ],
  "added": [
    [
      "00550da0",
      "READ",
      [
        "storage",
        "00c9c2c8",
        null,
        "pointer"
      ]
    ],
    [
      "00550da8",
      "DATA",
      [
        "storage",
        "00c6bbe0",
        null,
        "pointer"
      ]
    ]
  ]
}
~~~


~~~diff
- 00550a78 ["COPY", "register:4040:8", ["const:c9b000:8"]]
+ 00550d98 ["COPY", "register:4040:8", ["const:c9c000:8"]]
- 00550a80 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:2f8:8"]]
- 00550a80 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
+ 00550da0 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:2c8:8"]]
+ 00550da0 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
- 00550a8c ["INT_ADD", "register:40f0:8", ["const:550a8c:8", "const:4:8"]]
- 00550a8c ["CALL", null, ["callee:00c58f40:8"]]
+ 00550dac ["INT_ADD", "register:40f0:8", ["const:550dac:8", "const:4:8"]]
+ 00550dac ["CALL", null, ["callee:00c58f40:8"]]
~~~


<a id="compare-df4622e905bfbb09be69cb27a2a41d5a"></a>

### [`00550aac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00550/00550aac.md) → [`00550dcc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00550/00550dcc.md) FUN_00550dcc

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00550aa0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00550/00550aa0.md) · 呼出先 12件 [`0045a708`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0045a/0045a708.md) [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md) [`00c57fc0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fc0.md) [`00c583c0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c583c0.md)
- 新版 呼出元 1件 [`00550dc0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00550/00550dc0.md) · 呼出先 12件 [`0045aa28`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0045a/0045aa28.md) [`00c54d90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d90.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md) [`00c58f90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f90.md) [`00c59390`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59390.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies, store_value

命令の説明率　旧版 94.52% / 新版 94.52%

優先判定に残った影響 `call_argument_candidate` 1件, `store_value` 1件

アドレスに依存する影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00550e70",
      "incomplete_value": true,
      "site": "00550e74",
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
      "definition_site": "00550b50",
      "incomplete_value": true,
      "site": "00550b54",
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
    "ordinal": 8,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00550e4c",
      "incomplete_value": true,
      "site": "00550e54",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:cf8:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00550b2c",
      "incomplete_value": true,
      "site": "00550b34",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:d28:8"
              ]
            ]
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
      "definition_site": "00550e48",
      "incomplete_value": false,
      "site": "00550e54",
      "value": [
        "leaf",
        "const:45aa28:8"
      ]
    },
    "old": {
      "definition_site": "00550b28",
      "incomplete_value": false,
      "site": "00550b34",
      "value": [
        "leaf",
        "const:45a708:8"
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
      "00550e48",
      "PARAM",
      [
        "storage",
        "0045a708",
        null,
        null
      ]
    ],
    [
      "00550e4c",
      "READ",
      [
        "storage",
        "00c9ad28",
        null,
        "pointer"
      ]
    ],
    [
      "00550e4c",
      "PARAM",
      [
        "storage",
        "00c92d80",
        "std::__ndk1::future_error::typeinfo",
        "pointer __((offset(0x10)))"
      ]
    ]
  ],
  "added": [
    [
      "00550e48",
      "PARAM",
      [
        "storage",
        "0045aa28",
        null,
        null
      ]
    ],
    [
      "00550e4c",
      "READ",
      [
        "storage",
        "00c9bcf8",
        null,
        "pointer"
      ]
    ],
    [
      "00550e4c",
      "PARAM",
      [
        "storage",
        "00c93d50",
        "std::__ndk1::future_error::typeinfo",
        "pointer __((offset(0x10)))"
      ]
    ]
  ]
}
~~~


~~~diff
- 00550b34 ["INT_ADD", "register:40f0:8", ["const:550b34:8", "const:4:8"]]
- 00550b34 ["CALL", null, ["callee:00c593d0:8"]]
+ 00550e54 ["INT_ADD", "register:40f0:8", ["const:550e54:8", "const:4:8"]]
+ 00550e54 ["CALL", null, ["callee:00c593d0:8"]]
- 00550aec ["INT_ADD", "register:40f0:8", ["const:550aec:8", "const:4:8"]]
- 00550aec ["CALL", null, ["callee:00c59390:8"]]
+ 00550e0c ["INT_ADD", "register:40f0:8", ["const:550e0c:8", "const:4:8"]]
+ 00550e0c ["CALL", null, ["callee:00c59390:8"]]
- 00550b04 ["INT_ADD", "register:40f0:8", ["const:550b04:8", "const:4:8"]]
- 00550b04 ["CALL", null, ["callee:00c593b0:8"]]
+ 00550e24 ["INT_ADD", "register:40f0:8", ["const:550e24:8", "const:4:8"]]
+ 00550e24 ["CALL", null, ["callee:00c593b0:8"]]
~~~


<a id="compare-6a41b793cfd76b97d4771442fa13fb5a"></a>

### [`00550f74`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00550/00550f74.md) → [`00551294`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00551/00551294.md) FUN_00551294

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`005550f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00555/005550f0.md) · 呼出先 5件 [`0055e580`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0055e/0055e580.md) [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)
- 新版 呼出元 1件 [`00555410`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00555/00555410.md) · 呼出先 5件 [`0055e8a0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0055e/0055e8a0.md) [`00c54d90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d90.md) [`00c58f20`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f20.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 95.91% / 新版 95.91%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "005512d8",
      "incomplete_value": false,
      "site": "005512dc",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c6b000:8"
          ],
          [
            "leaf",
            "const:c80:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00550fb8",
      "incomplete_value": false,
      "site": "00550fbc",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c6a000:8"
          ],
          [
            "leaf",
            "const:cb0:8"
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
      "005512dc",
      "DATA",
      [
        "storage",
        "00c6acb0",
        null,
        "undefined *"
      ]
    ],
    [
      "005512f8",
      "DATA",
      [
        "storage",
        "00c6ad18",
        null,
        "undefined *"
      ]
    ],
    [
      "00551314",
      "READ",
      [
        "storage",
        "00c9b310",
        null,
        "pointer"
      ]
    ]
  ],
  "added": [
    [
      "005512dc",
      "DATA",
      [
        "storage",
        "00c6bc80",
        null,
        "undefined *"
      ]
    ],
    [
      "005512f8",
      "DATA",
      [
        "storage",
        "00c6bce8",
        null,
        "undefined *"
      ]
    ],
    [
      "00551314",
      "READ",
      [
        "storage",
        "00c9c2e0",
        null,
        "pointer"
      ]
    ]
  ]
}
~~~


~~~diff
- 00550fac ["INT_ADD", "register:40f0:8", ["const:550fac:8", "const:4:8"]]
- 00550fac ["CALL", null, ["callee:0055e8a0:8"]]
+ 005512cc ["INT_ADD", "register:40f0:8", ["const:5512cc:8", "const:4:8"]]
+ 005512cc ["CALL", null, ["callee:0055e8a0:8"]]
- 00550fb4 ["COPY", "register:4040:8", ["const:c6a000:8"]]
+ 005512d4 ["COPY", "register:4040:8", ["const:c6b000:8"]]
- 00550fb8 ["COPY", "tmp:0:8", ["const:cb0:8"]]
- 00550fb8 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00550fb8 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00550fb8 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 005512d8 ["COPY", "tmp:0:8", ["const:c80:8"]]
+ 005512d8 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 005512d8 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 005512d8 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-5a3b0946c4aad864b4a6c50443a4b464"></a>

### [`005512b4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00551/005512b4.md) → [`005515d4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00551/005515d4.md) FUN_005515d4

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 4件 [`00618240`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00618/00618240.md) [`008aac80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008aa/008aac80.md) [`008abd50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008ab/008abd50.md) [`008d8ec0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008d8/008d8ec0.md) · 呼出先 6件 [`00552034`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00552/00552034.md) [`0055c724`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0055c/0055c724.md) [`00597f0c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00597/00597f0c.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 4件 [`006185f0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00618/006185f0.md) [`008abc2c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008ab/008abc2c.md) [`008accfc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008ac/008accfc.md) [`008d9e6c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008d9/008d9e6c.md) · 呼出先 6件 [`00552354`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00552/00552354.md) [`0055ca44`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0055c/0055ca44.md) [`0059822c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00598/0059822c.md) [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 constant, operands_and_dependencies, operation_sequence, store_value

命令の説明率　旧版 87.95% / 新版 87.95%

優先判定に残った影響 `store_value` 4件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "0055162c",
      "incomplete_value": true,
      "site": "00551634",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:c20:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0055130c",
      "incomplete_value": true,
      "site": "00551314",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:bd0:8"
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
      "definition_site": "00551628",
      "incomplete_value": true,
      "site": "00551638",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:2ee:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00551308",
      "incomplete_value": true,
      "site": "00551318",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:223:8"
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
      "definition_site": "00551628",
      "incomplete_value": true,
      "site": "00551638",
      "value": [
        "LOAD",
        "16",
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
      "definition_site": "00551308",
      "incomplete_value": true,
      "site": "00551318",
      "value": [
        "LOAD",
        "16",
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
      "00551628",
      "READ",
      [
        "storage",
        "002a3223",
        null,
        "string"
      ]
    ],
    [
      "00551628",
      "READ",
      [
        "storage",
        "002a3233",
        null,
        "string"
      ]
    ],
    [
      "0055162c",
      "READ",
      [
        "storage",
        "002c2bd0",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "00551628",
      "READ",
      [
        "storage",
        "002a32ee",
        null,
        "string"
      ]
    ],
    [
      "00551628",
      "READ",
      [
        "storage",
        "002a32fe",
        null,
        "string"
      ]
    ],
    [
      "0055162c",
      "READ",
      [
        "storage",
        "002c2c20",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 005512f8 ["INT_ADD", "register:40f0:8", ["const:5512f8:8", "const:4:8"]]
- 005512f8 ["CALL", null, ["callee:00c58f30:8"]]
+ 00551618 ["INT_ADD", "register:40f0:8", ["const:551618:8", "const:4:8"]]
+ 00551618 ["CALL", null, ["callee:00c58f30:8"]]
- 00551300 ["COPY", "tmp:0:8", ["const:223:8"]]
- 00551300 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00551300 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00551300 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00551620 ["COPY", "tmp:0:8", ["const:2ee:8"]]
+ 00551620 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00551620 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00551620 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 00551304 ["COPY", "register:4048:8", ["const:2c2000:8"]]
~~~


<a id="compare-9e3a96f5f5bdb5f656729974d5d8c9ea"></a>

### [`00551e00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00551/00551e00.md) → [`00552120`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00552/00552120.md) FUN_00552120

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 4件 [`0055e664`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0055e/0055e664.md) [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)
- 新版 呼出元 0件  · 呼出先 4件 [`0055e984`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0055e/0055e984.md) [`00c54d90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d90.md) [`00c58f20`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f20.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md)

変更の種類 call_argument_candidate, call_target, constant, operands_and_dependencies

命令の説明率　旧版 91.53% / 新版 91.53%

優先判定に残った影響 `call_argument_candidate` 1件, `call_target` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_target",
    "new": {
      "definition_site": "00552170",
      "incomplete_value": true,
      "site": "00552170",
      "value": [
        "LOAD",
        "8",
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
                "const:20:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00551e50",
      "incomplete_value": true,
      "site": "00551e50",
      "value": [
        "LOAD",
        "8",
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
                "const:20:8"
              ]
            ]
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
      "definition_site": "00552160",
      "incomplete_value": true,
      "site": "00552170",
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
      "definition_site": "00551e40",
      "incomplete_value": true,
      "site": "00551e50",
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
      "00552158",
      "READ",
      [
        "storage",
        "00c9b310",
        null,
        "pointer"
      ]
    ],
    [
      "00552160",
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
      "00552158",
      "READ",
      [
        "storage",
        "00c9c2e0",
        null,
        "pointer"
      ]
    ],
    [
      "00552160",
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
- 00551e50 ["COPY", "register:0:8", ["register:4048:8"]]
- 00551e50 ["INT_ADD", "register:40f0:8", ["const:551e50:8", "const:4:8"]]
- 00551e50 ["CALLIND", null, ["register:0:8"]]
+ 00552170 ["COPY", "register:0:8", ["register:4048:8"]]
+ 00552170 ["INT_ADD", "register:40f0:8", ["const:552170:8", "const:4:8"]]
+ 00552170 ["CALLIND", null, ["register:0:8"]]
- 00551e24 ["INT_ADD", "register:40f0:8", ["const:551e24:8", "const:4:8"]]
- 00551e24 ["CALL", null, ["callee:0055e984:8"]]
+ 00552144 ["INT_ADD", "register:40f0:8", ["const:552144:8", "const:4:8"]]
+ 00552144 ["CALL", null, ["callee:0055e984:8"]]
- 00551e2c ["COPY", "register:4040:8", ["const:c9b000:8"]]
+ 0055214c ["COPY", "register:4040:8", ["const:c9c000:8"]]
~~~


<a id="compare-43f1ea2312bb58a58b0829028c9b1c87"></a>

### [`00551f4c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00551/00551f4c.md) → [`0055226c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00552/0055226c.md) FUN_0055226c

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 3件 [`0055e5ec`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0055e/0055e5ec.md) [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md)
- 新版 呼出元 0件  · 呼出先 3件 [`0055e90c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0055e/0055e90c.md) [`00c54d90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d90.md) [`00c58f20`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f20.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 85.71% / 新版 85.71%

優先判定に残った影響 `store_value` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "0055227c",
      "incomplete_value": true,
      "site": "00552288",
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
            "const:c80:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00551f5c",
      "incomplete_value": true,
      "site": "00551f68",
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
            "const:cb0:8"
          ]
        ]
      ]
    },
    "ordinal": 4,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "0055228c",
      "incomplete_value": true,
      "site": "00552290",
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
                "register:4040:8"
              ],
              [
                "leaf",
                "const:c80:8"
              ]
            ]
          ],
          [
            "leaf",
            "const:68:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00551f6c",
      "incomplete_value": true,
      "site": "00551f70",
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
                "register:4040:8"
              ],
              [
                "leaf",
                "const:cb0:8"
              ]
            ]
          ],
          [
            "leaf",
            "const:68:8"
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
      "00552288",
      "DATA",
      [
        "storage",
        "00c6acb0",
        null,
        "undefined *"
      ]
    ],
    [
      "00552290",
      "DATA",
      [
        "storage",
        "00c6ad18",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00552288",
      "DATA",
      [
        "storage",
        "00c6bc80",
        null,
        "undefined *"
      ]
    ],
    [
      "00552290",
      "DATA",
      [
        "storage",
        "00c6bce8",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00551f58 ["COPY", "register:4040:8", ["const:c6a000:8"]]
+ 00552278 ["COPY", "register:4040:8", ["const:c6b000:8"]]
- 00551f5c ["COPY", "tmp:0:8", ["const:cb0:8"]]
- 00551f5c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00551f5c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00551f5c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 0055227c ["COPY", "tmp:0:8", ["const:c80:8"]]
+ 0055227c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 0055227c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 0055227c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 00551f80 ["INT_ADD", "register:40f0:8", ["const:551f80:8", "const:4:8"]]
- 00551f80 ["CALL", null, ["callee:00c54d90:8"]]
+ 005522a0 ["INT_ADD", "register:40f0:8", ["const:5522a0:8", "const:4:8"]]
+ 005522a0 ["CALL", null, ["callee:00c54d90:8"]]
~~~


<a id="compare-8b099323a7ce7b8401f4f8581ab7231b"></a>

### [`00551fbc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00551/00551fbc.md) → [`005522dc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00552/005522dc.md) FUN_005522dc

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 4件 [`0055e5ec`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0055e/0055e5ec.md) [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 0件  · 呼出先 4件 [`0055e90c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0055e/0055e90c.md) [`00c54d90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d90.md) [`00c58f20`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f20.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 86.67% / 新版 86.67%

優先判定に残った影響 `store_value` 2件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "005522ec",
      "incomplete_value": false,
      "site": "005522f8",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c6b000:8"
          ],
          [
            "leaf",
            "const:c80:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00551fcc",
      "incomplete_value": false,
      "site": "00551fd8",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c6a000:8"
          ],
          [
            "leaf",
            "const:cb0:8"
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
      "definition_site": "005522fc",
      "incomplete_value": false,
      "site": "00552300",
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
                "const:c6b000:8"
              ],
              [
                "leaf",
                "const:c80:8"
              ]
            ]
          ],
          [
            "leaf",
            "const:68:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00551fdc",
      "incomplete_value": false,
      "site": "00551fe0",
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
                "const:c6a000:8"
              ],
              [
                "leaf",
                "const:cb0:8"
              ]
            ]
          ],
          [
            "leaf",
            "const:68:8"
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
      "005522f8",
      "DATA",
      [
        "storage",
        "00c6acb0",
        null,
        "undefined *"
      ]
    ],
    [
      "00552300",
      "DATA",
      [
        "storage",
        "00c6ad18",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "005522f8",
      "DATA",
      [
        "storage",
        "00c6bc80",
        null,
        "undefined *"
      ]
    ],
    [
      "00552300",
      "DATA",
      [
        "storage",
        "00c6bce8",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00551fc8 ["COPY", "register:4040:8", ["const:c6a000:8"]]
+ 005522e8 ["COPY", "register:4040:8", ["const:c6b000:8"]]
- 00551fcc ["COPY", "tmp:0:8", ["const:cb0:8"]]
- 00551fcc ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00551fcc ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00551fcc ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 005522ec ["COPY", "tmp:0:8", ["const:c80:8"]]
+ 005522ec ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 005522ec ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 005522ec ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 00551ff0 ["INT_ADD", "register:40f0:8", ["const:551ff0:8", "const:4:8"]]
- 00551ff0 ["CALL", null, ["callee:00c54d90:8"]]
+ 00552310 ["INT_ADD", "register:40f0:8", ["const:552310:8", "const:4:8"]]
+ 00552310 ["CALL", null, ["callee:00c54d90:8"]]
~~~


<a id="compare-4ff71bd23f7fc4cae36f20c360478b64"></a>

### [`00552034`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00552/00552034.md) → [`00552354`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00552/00552354.md) FUN_00552354

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 2件 [`005512b4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00551/005512b4.md) [`00552034`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00552/00552034.md) · 呼出先 22件 [`0043b7a4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b7a4.md) [`0043bb60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bb60.md) [`0043de18`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043d/0043de18.md) [`00440fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00440/00440fb0.md) [`00441d2c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00441/00441d2c.md)
- 新版 呼出元 2件 [`005515d4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00551/005515d4.md) [`00552354`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00552/00552354.md) · 呼出先 22件 [`0043bac4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bac4.md) [`0043be80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043be80.md) [`0043e138`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043e/0043e138.md) [`004412d0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00441/004412d0.md) [`0044204c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00442/0044204c.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 98.54% / 新版 98.54%

優先判定に残った影響 `call_argument_candidate` 5件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "005524bc",
      "incomplete_value": false,
      "site": "005524c4",
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
      "definition_site": "0055219c",
      "incomplete_value": false,
      "site": "005521a4",
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
      "definition_site": "0055261c",
      "incomplete_value": false,
      "site": "00552624",
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
      "definition_site": "005522fc",
      "incomplete_value": false,
      "site": "00552304",
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
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00552634",
      "incomplete_value": false,
      "site": "00552640",
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
      "definition_site": "00552314",
      "incomplete_value": false,
      "site": "00552320",
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
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "005524bc",
      "PARAM",
      [
        "storage",
        "002b7f93",
        null,
        null
      ]
    ],
    [
      "005524e0",
      "PARAM",
      [
        "storage",
        "002c0f29",
        null,
        "string"
      ]
    ],
    [
      "0055261c",
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
      "005524bc",
      "PARAM",
      [
        "storage",
        "002b8062",
        null,
        null
      ]
    ],
    [
      "005524e0",
      "PARAM",
      [
        "storage",
        "002c0f73",
        null,
        "string"
      ]
    ],
    [
      "0055261c",
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
- 005521a4 ["INT_ADD", "register:40f0:8", ["const:5521a4:8", "const:4:8"]]
- 005521a4 ["CALL", null, ["callee:004421f4:8"]]
+ 005524c4 ["INT_ADD", "register:40f0:8", ["const:5524c4:8", "const:4:8"]]
+ 005524c4 ["CALL", null, ["callee:004421f4:8"]]
- 00552304 ["INT_ADD", "register:40f0:8", ["const:552304:8", "const:4:8"]]
- 00552304 ["CALL", null, ["callee:004421f4:8"]]
+ 00552624 ["INT_ADD", "register:40f0:8", ["const:552624:8", "const:4:8"]]
+ 00552624 ["CALL", null, ["callee:004421f4:8"]]
- 00552320 ["INT_ADD", "register:40f0:8", ["const:552320:8", "const:4:8"]]
- 00552320 ["CALL", null, ["callee:00442b54:8"]]
+ 00552640 ["INT_ADD", "register:40f0:8", ["const:552640:8", "const:4:8"]]
+ 00552640 ["CALL", null, ["callee:00442b54:8"]]
~~~


<a id="compare-47b132bd75d1a3b13cf6e3bde933be81"></a>

### [`00552880`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00552/00552880.md) → [`00552ba0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00552/00552ba0.md) FUN_00552ba0

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 2件 [`00552034`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00552/00552034.md) [`00552880`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00552/00552880.md) · 呼出先 22件 [`0043b7a4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b7a4.md) [`0043bb60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bb60.md) [`0043de18`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043d/0043de18.md) [`00440fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00440/00440fb0.md) [`00441d2c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00441/00441d2c.md)
- 新版 呼出元 2件 [`00552354`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00552/00552354.md) [`00552ba0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00552/00552ba0.md) · 呼出先 22件 [`0043bac4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bac4.md) [`0043be80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043be80.md) [`0043e138`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043e/0043e138.md) [`004412d0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00441/004412d0.md) [`0044204c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00442/0044204c.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 98.53% / 新版 98.53%

優先判定に残った影響 `call_argument_candidate` 6件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00552d04",
      "incomplete_value": false,
      "site": "00552d0c",
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
      "definition_site": "005529e4",
      "incomplete_value": false,
      "site": "005529ec",
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
      "definition_site": "00552d28",
      "incomplete_value": false,
      "site": "00552d34",
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
      "definition_site": "00552a08",
      "incomplete_value": false,
      "site": "00552a14",
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
      "definition_site": "00552e64",
      "incomplete_value": false,
      "site": "00552e6c",
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
      "definition_site": "00552b44",
      "incomplete_value": false,
      "site": "00552b4c",
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
      "00552d04",
      "PARAM",
      [
        "storage",
        "002b7f93",
        null,
        null
      ]
    ],
    [
      "00552d28",
      "PARAM",
      [
        "storage",
        "002c0f29",
        null,
        "string"
      ]
    ],
    [
      "00552e64",
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
      "00552d04",
      "PARAM",
      [
        "storage",
        "002b8062",
        null,
        null
      ]
    ],
    [
      "00552d28",
      "PARAM",
      [
        "storage",
        "002c0f73",
        null,
        "string"
      ]
    ],
    [
      "00552e64",
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
- 005529ec ["INT_ADD", "register:40f0:8", ["const:5529ec:8", "const:4:8"]]
- 005529ec ["CALL", null, ["callee:004421f4:8"]]
+ 00552d0c ["INT_ADD", "register:40f0:8", ["const:552d0c:8", "const:4:8"]]
+ 00552d0c ["CALL", null, ["callee:004421f4:8"]]
- 00552a14 ["INT_ADD", "register:40f0:8", ["const:552a14:8", "const:4:8"]]
- 00552a14 ["CALL", null, ["callee:00442b54:8"]]
+ 00552d34 ["INT_ADD", "register:40f0:8", ["const:552d34:8", "const:4:8"]]
+ 00552d34 ["CALL", null, ["callee:00442b54:8"]]
- 00552b4c ["INT_ADD", "register:40f0:8", ["const:552b4c:8", "const:4:8"]]
- 00552b4c ["CALL", null, ["callee:004421f4:8"]]
+ 00552e6c ["INT_ADD", "register:40f0:8", ["const:552e6c:8", "const:4:8"]]
+ 00552e6c ["CALL", null, ["callee:004421f4:8"]]
~~~


<a id="compare-9879f47bb46266701b740e661a3d8a5d"></a>

### [`005530b8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00553/005530b8.md) → [`005533d8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00553/005533d8.md) FUN_005533d8

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 2件 [`00552880`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00552/00552880.md) [`005530b8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00553/005530b8.md) · 呼出先 22件 [`0043b7a4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b7a4.md) [`0043bb60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bb60.md) [`0043de18`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043d/0043de18.md) [`00440fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00440/00440fb0.md) [`00441d2c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00441/00441d2c.md)
- 新版 呼出元 2件 [`00552ba0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00552/00552ba0.md) [`005533d8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00553/005533d8.md) · 呼出先 22件 [`0043bac4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bac4.md) [`0043be80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043be80.md) [`0043e138`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043e/0043e138.md) [`004412d0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00441/004412d0.md) [`0044204c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00442/0044204c.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 98.52% / 新版 98.52%

優先判定に残った影響 `call_argument_candidate` 6件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00553538",
      "incomplete_value": false,
      "site": "00553540",
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
      "definition_site": "00553218",
      "incomplete_value": false,
      "site": "00553220",
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
      "definition_site": "0055355c",
      "incomplete_value": false,
      "site": "00553568",
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
      "definition_site": "0055323c",
      "incomplete_value": false,
      "site": "00553248",
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
      "definition_site": "00553698",
      "incomplete_value": false,
      "site": "005536a0",
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
      "definition_site": "00553378",
      "incomplete_value": false,
      "site": "00553380",
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
      "00553538",
      "PARAM",
      [
        "storage",
        "002b7f93",
        null,
        null
      ]
    ],
    [
      "0055355c",
      "PARAM",
      [
        "storage",
        "002c0f29",
        null,
        "string"
      ]
    ],
    [
      "00553698",
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
      "00553538",
      "PARAM",
      [
        "storage",
        "002b8062",
        null,
        null
      ]
    ],
    [
      "0055355c",
      "PARAM",
      [
        "storage",
        "002c0f73",
        null,
        "string"
      ]
    ],
    [
      "00553698",
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
- 00553220 ["INT_ADD", "register:40f0:8", ["const:553220:8", "const:4:8"]]
- 00553220 ["CALL", null, ["callee:004421f4:8"]]
+ 00553540 ["INT_ADD", "register:40f0:8", ["const:553540:8", "const:4:8"]]
+ 00553540 ["CALL", null, ["callee:004421f4:8"]]
- 00553248 ["INT_ADD", "register:40f0:8", ["const:553248:8", "const:4:8"]]
- 00553248 ["CALL", null, ["callee:00442b54:8"]]
+ 00553568 ["INT_ADD", "register:40f0:8", ["const:553568:8", "const:4:8"]]
+ 00553568 ["CALL", null, ["callee:00442b54:8"]]
- 00553380 ["INT_ADD", "register:40f0:8", ["const:553380:8", "const:4:8"]]
- 00553380 ["CALL", null, ["callee:004421f4:8"]]
+ 005536a0 ["INT_ADD", "register:40f0:8", ["const:5536a0:8", "const:4:8"]]
+ 005536a0 ["CALL", null, ["callee:004421f4:8"]]
~~~


<a id="compare-8a8e120f3a238b5f576510014b718061"></a>

### [`005538ec`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00553/005538ec.md) → [`00553c0c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00553/00553c0c.md) FUN_00553c0c

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 2件 [`005530b8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00553/005530b8.md) [`005538ec`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00553/005538ec.md) · 呼出先 22件 [`0043b7a4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b7a4.md) [`0043bb60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bb60.md) [`0043de18`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043d/0043de18.md) [`00440fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00440/00440fb0.md) [`00441d2c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00441/00441d2c.md)
- 新版 呼出元 2件 [`005533d8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00553/005533d8.md) [`00553c0c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00553/00553c0c.md) · 呼出先 22件 [`0043bac4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bac4.md) [`0043be80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043be80.md) [`0043e138`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043e/0043e138.md) [`004412d0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00441/004412d0.md) [`0044204c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00442/0044204c.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 98.51% / 新版 98.51%

優先判定に残った影響 `call_argument_candidate` 6件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00553d68",
      "incomplete_value": false,
      "site": "00553d70",
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
      "definition_site": "00553a48",
      "incomplete_value": false,
      "site": "00553a50",
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
      "definition_site": "00553d8c",
      "incomplete_value": false,
      "site": "00553d98",
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
      "definition_site": "00553a6c",
      "incomplete_value": false,
      "site": "00553a78",
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
      "definition_site": "00553ec8",
      "incomplete_value": false,
      "site": "00553ed0",
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
      "definition_site": "00553ba8",
      "incomplete_value": false,
      "site": "00553bb0",
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
      "00553d68",
      "PARAM",
      [
        "storage",
        "002b7f93",
        null,
        null
      ]
    ],
    [
      "00553d8c",
      "PARAM",
      [
        "storage",
        "002c0f29",
        null,
        "string"
      ]
    ],
    [
      "00553ec8",
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
      "00553d68",
      "PARAM",
      [
        "storage",
        "002b8062",
        null,
        null
      ]
    ],
    [
      "00553d8c",
      "PARAM",
      [
        "storage",
        "002c0f73",
        null,
        "string"
      ]
    ],
    [
      "00553ec8",
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
- 00553a50 ["INT_ADD", "register:40f0:8", ["const:553a50:8", "const:4:8"]]
- 00553a50 ["CALL", null, ["callee:004421f4:8"]]
+ 00553d70 ["INT_ADD", "register:40f0:8", ["const:553d70:8", "const:4:8"]]
+ 00553d70 ["CALL", null, ["callee:004421f4:8"]]
- 00553a78 ["INT_ADD", "register:40f0:8", ["const:553a78:8", "const:4:8"]]
- 00553a78 ["CALL", null, ["callee:00442b54:8"]]
+ 00553d98 ["INT_ADD", "register:40f0:8", ["const:553d98:8", "const:4:8"]]
+ 00553d98 ["CALL", null, ["callee:00442b54:8"]]
- 00553bb0 ["INT_ADD", "register:40f0:8", ["const:553bb0:8", "const:4:8"]]
- 00553bb0 ["CALL", null, ["callee:004421f4:8"]]
+ 00553ed0 ["INT_ADD", "register:40f0:8", ["const:553ed0:8", "const:4:8"]]
+ 00553ed0 ["CALL", null, ["callee:004421f4:8"]]
~~~


<a id="compare-c4c49812cb8d7860b476243f3f3b4773"></a>

### [`0055410c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00554/0055410c.md) → [`0055442c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00554/0055442c.md) FUN_0055442c

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 2件 [`005538ec`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00553/005538ec.md) [`0055410c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00554/0055410c.md) · 呼出先 22件 [`0043b7a4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b7a4.md) [`0043bb60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bb60.md) [`0043de18`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043d/0043de18.md) [`00440fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00440/00440fb0.md) [`00441d2c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00441/00441d2c.md)
- 新版 呼出元 2件 [`00553c0c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00553/00553c0c.md) [`0055442c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00554/0055442c.md) · 呼出先 22件 [`0043bac4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bac4.md) [`0043be80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043be80.md) [`0043e138`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043e/0043e138.md) [`004412d0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00441/004412d0.md) [`0044204c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00442/0044204c.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 98.48% / 新版 98.48%

優先判定に残った影響 `call_argument_candidate` 7件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00554580",
      "incomplete_value": false,
      "site": "00554588",
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
      "definition_site": "00554260",
      "incomplete_value": false,
      "site": "00554268",
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
      "definition_site": "005545a4",
      "incomplete_value": false,
      "site": "005545b0",
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
      "definition_site": "00554284",
      "incomplete_value": false,
      "site": "00554290",
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
      "definition_site": "005546dc",
      "incomplete_value": false,
      "site": "005546e4",
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
      "definition_site": "005543bc",
      "incomplete_value": false,
      "site": "005543c4",
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
      "00554580",
      "PARAM",
      [
        "storage",
        "002b7f93",
        null,
        null
      ]
    ],
    [
      "005545a4",
      "PARAM",
      [
        "storage",
        "002c0f29",
        null,
        "string"
      ]
    ],
    [
      "005546dc",
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
      "00554580",
      "PARAM",
      [
        "storage",
        "002b8062",
        null,
        null
      ]
    ],
    [
      "005545a4",
      "PARAM",
      [
        "storage",
        "002c0f73",
        null,
        "string"
      ]
    ],
    [
      "005546dc",
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
- 00554268 ["INT_ADD", "register:40f0:8", ["const:554268:8", "const:4:8"]]
- 00554268 ["CALL", null, ["callee:004421f4:8"]]
+ 00554588 ["INT_ADD", "register:40f0:8", ["const:554588:8", "const:4:8"]]
+ 00554588 ["CALL", null, ["callee:004421f4:8"]]
- 00554290 ["INT_ADD", "register:40f0:8", ["const:554290:8", "const:4:8"]]
- 00554290 ["CALL", null, ["callee:00442b54:8"]]
+ 005545b0 ["INT_ADD", "register:40f0:8", ["const:5545b0:8", "const:4:8"]]
+ 005545b0 ["CALL", null, ["callee:00442b54:8"]]
- 005543c4 ["INT_ADD", "register:40f0:8", ["const:5543c4:8", "const:4:8"]]
- 005543c4 ["CALL", null, ["callee:004421f4:8"]]
+ 005546e4 ["INT_ADD", "register:40f0:8", ["const:5546e4:8", "const:4:8"]]
+ 005546e4 ["CALL", null, ["callee:004421f4:8"]]
~~~


<a id="compare-0b03ead0d43a0cf673d2d815ad5fee1b"></a>

### [`00554908`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00554/00554908.md) → [`00554c28`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00554/00554c28.md) FUN_00554c28

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 3件 [`0055410c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00554/0055410c.md) [`00554908`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00554/00554908.md) [`0085b488`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0085b/0085b488.md) · 呼出先 22件 [`0043b7a4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b7a4.md) [`0043bb60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bb60.md) [`0043de18`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043d/0043de18.md) [`00440fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00440/00440fb0.md) [`00441d2c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00441/00441d2c.md)
- 新版 呼出元 3件 [`0055442c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00554/0055442c.md) [`00554c28`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00554/00554c28.md) [`0085c434`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0085c/0085c434.md) · 呼出先 22件 [`0043bac4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bac4.md) [`0043be80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043be80.md) [`0043e138`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043e/0043e138.md) [`004412d0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00441/004412d0.md) [`0044204c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00442/0044204c.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 98.46% / 新版 98.46%

優先判定に残った影響 `call_argument_candidate` 5件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00554d78",
      "incomplete_value": false,
      "site": "00554d80",
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
      "definition_site": "00554a58",
      "incomplete_value": false,
      "site": "00554a60",
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
      "definition_site": "00554ed4",
      "incomplete_value": false,
      "site": "00554edc",
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
      "definition_site": "00554bb4",
      "incomplete_value": false,
      "site": "00554bbc",
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
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00554eec",
      "incomplete_value": false,
      "site": "00554ef8",
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
      "definition_site": "00554bcc",
      "incomplete_value": false,
      "site": "00554bd8",
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
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "00554d78",
      "PARAM",
      [
        "storage",
        "002b7f93",
        null,
        null
      ]
    ],
    [
      "00554d9c",
      "PARAM",
      [
        "storage",
        "002c0f29",
        null,
        "string"
      ]
    ],
    [
      "00554ed4",
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
      "00554d78",
      "PARAM",
      [
        "storage",
        "002b8062",
        null,
        null
      ]
    ],
    [
      "00554d9c",
      "PARAM",
      [
        "storage",
        "002c0f73",
        null,
        "string"
      ]
    ],
    [
      "00554ed4",
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
- 00554a60 ["INT_ADD", "register:40f0:8", ["const:554a60:8", "const:4:8"]]
- 00554a60 ["CALL", null, ["callee:004421f4:8"]]
+ 00554d80 ["INT_ADD", "register:40f0:8", ["const:554d80:8", "const:4:8"]]
+ 00554d80 ["CALL", null, ["callee:004421f4:8"]]
- 00554bbc ["INT_ADD", "register:40f0:8", ["const:554bbc:8", "const:4:8"]]
- 00554bbc ["CALL", null, ["callee:004421f4:8"]]
+ 00554edc ["INT_ADD", "register:40f0:8", ["const:554edc:8", "const:4:8"]]
+ 00554edc ["CALL", null, ["callee:004421f4:8"]]
- 00554bd8 ["INT_ADD", "register:40f0:8", ["const:554bd8:8", "const:4:8"]]
- 00554bd8 ["CALL", null, ["callee:00442b54:8"]]
+ 00554ef8 ["INT_ADD", "register:40f0:8", ["const:554ef8:8", "const:4:8"]]
+ 00554ef8 ["CALL", null, ["callee:00442b54:8"]]
~~~


<a id="compare-24fdd92e311499d21f2fa823444dd538"></a>

### [`005550f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00555/005550f0.md) → [`00555410`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00555/00555410.md) FUN_00555410

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `bounded` · 参照 `changed`

- 旧版 呼出元 1件 [`00551eec`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00551/00551eec.md) · 呼出先 6件 [`00550f74`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00550/00550f74.md) [`00555254`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00555/00555254.md) [`00c53d70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53d70.md) [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md)
- 新版 呼出元 1件 [`0055220c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00552/0055220c.md) · 呼出先 6件 [`00551294`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00551/00551294.md) [`00555574`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00555/00555574.md) [`00c54d60`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d60.md) [`00c54d90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d90.md) [`00c58f20`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f20.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 96.97% / 新版 96.97%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "00555448",
      "incomplete_value": false,
      "site": "00555464",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c6b000:8"
          ],
          [
            "leaf",
            "const:d78:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00555128",
      "incomplete_value": false,
      "site": "00555144",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c6a000:8"
          ],
          [
            "leaf",
            "const:da8:8"
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
      "00555464",
      "DATA",
      [
        "storage",
        "00c6ada8",
        null,
        "pointer"
      ]
    ],
    [
      "005554f8",
      "READ",
      [
        "storage",
        "00c6adb8",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00555464",
      "DATA",
      [
        "storage",
        "00c6bd78",
        null,
        "pointer"
      ]
    ],
    [
      "005554f8",
      "READ",
      [
        "storage",
        "00c6bd88",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00555118 ["INT_ADD", "register:40f0:8", ["const:555118:8", "const:4:8"]]
- 00555118 ["CALL", null, ["callee:00c58f30:8"]]
+ 00555438 ["INT_ADD", "register:40f0:8", ["const:555438:8", "const:4:8"]]
+ 00555438 ["CALL", null, ["callee:00c58f30:8"]]
- 00555124 ["COPY", "register:4040:8", ["const:c6a000:8"]]
+ 00555444 ["COPY", "register:4040:8", ["const:c6b000:8"]]
- 00555128 ["COPY", "tmp:0:8", ["const:da8:8"]]
- 00555128 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00555128 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00555128 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00555448 ["COPY", "tmp:0:8", ["const:d78:8"]]
+ 00555448 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00555448 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00555448 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-7cf03473a9a430f73a911281314c9ec5"></a>

### [`00555214`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00555/00555214.md) → [`00555534`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00555/00555534.md) FUN_00555534

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57f70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f70.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c58f40`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f40.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 50.00% / 新版 50.00%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "00555538",
      "incomplete_value": false,
      "site": "0055553c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c6b000:8"
          ],
          [
            "leaf",
            "const:d78:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00555218",
      "incomplete_value": false,
      "site": "0055521c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c6a000:8"
          ],
          [
            "leaf",
            "const:da8:8"
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
      "0055553c",
      "DATA",
      [
        "storage",
        "00c6ada8",
        null,
        "pointer"
      ]
    ]
  ],
  "added": [
    [
      "0055553c",
      "DATA",
      [
        "storage",
        "00c6bd78",
        null,
        "pointer"
      ]
    ]
  ]
}
~~~


~~~diff
- 00555214 ["COPY", "register:4040:8", ["const:c6a000:8"]]
+ 00555534 ["COPY", "register:4040:8", ["const:c6b000:8"]]
- 00555218 ["COPY", "tmp:0:8", ["const:da8:8"]]
- 00555218 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00555218 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00555218 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00555538 ["COPY", "tmp:0:8", ["const:d78:8"]]
+ 00555538 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00555538 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00555538 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-ac9df3ab913bf2deca4597028f50f20d"></a>

### [`00555224`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00555/00555224.md) → [`00555544`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00555/00555544.md) FUN_00555544

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c57f70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f70.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c58f40`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f40.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 83.33% / 新版 83.33%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "00555554",
      "incomplete_value": false,
      "site": "0055555c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c6b000:8"
          ],
          [
            "leaf",
            "const:d78:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00555234",
      "incomplete_value": false,
      "site": "0055523c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c6a000:8"
          ],
          [
            "leaf",
            "const:da8:8"
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
      "0055555c",
      "DATA",
      [
        "storage",
        "00c6ada8",
        null,
        "pointer"
      ]
    ]
  ],
  "added": [
    [
      "0055555c",
      "DATA",
      [
        "storage",
        "00c6bd78",
        null,
        "pointer"
      ]
    ]
  ]
}
~~~


~~~diff
- 00555230 ["COPY", "register:4040:8", ["const:c6a000:8"]]
+ 00555550 ["COPY", "register:4040:8", ["const:c6b000:8"]]
- 00555234 ["COPY", "tmp:0:8", ["const:da8:8"]]
- 00555234 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00555234 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00555234 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00555554 ["COPY", "tmp:0:8", ["const:d78:8"]]
+ 00555554 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00555554 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00555554 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 00555240 ["INT_ADD", "register:40f0:8", ["const:555240:8", "const:4:8"]]
- 00555240 ["CALL", null, ["callee:00c58f40:8"]]
+ 00555560 ["INT_ADD", "register:40f0:8", ["const:555560:8", "const:4:8"]]
+ 00555560 ["CALL", null, ["callee:00c58f40:8"]]
~~~


<a id="compare-00eeef5028f9282ebba49cf04c71ad78"></a>

### [`005552b4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00555/005552b4.md) → [`005555d4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00555/005555d4.md) FUN_005555d4

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed`

- 旧版 呼出元 1件 [`00590df8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00590/00590df8.md) · 呼出先 0件 
- 新版 呼出元 1件 [`00591118`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00591/00591118.md) · 呼出先 0件 

変更の種類 constant, operands_and_dependencies, store_destination

命令の説明率　旧版 80.00% / 新版 80.00%

優先判定に残った影響 `store_destination` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_destination",
    "new": {
      "definition_site": "005555e0",
      "incomplete_value": false,
      "site": "005555e0",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:ca6000:8"
          ],
          [
            "leaf",
            "const:cc8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "005552c0",
      "incomplete_value": false,
      "site": "005552c0",
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
            "const:d08:8"
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
      "005555d8",
      "READ",
      [
        "storage",
        "00ca5d08",
        null,
        "undefined4"
      ]
    ],
    [
      "005555e0",
      "WRITE",
      [
        "storage",
        "00ca5d08",
        null,
        "undefined4"
      ]
    ]
  ],
  "added": [
    [
      "005555d8",
      "READ",
      [
        "storage",
        "00ca6cc8",
        null,
        "undefined4"
      ]
    ],
    [
      "005555e0",
      "WRITE",
      [
        "storage",
        "00ca6cc8",
        null,
        "undefined4"
      ]
    ]
  ]
}
~~~


~~~diff
- 005552c0 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:d08:8"]]
- 005552c0 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4048:4"]]
+ 005555e0 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:cc8:8"]]
+ 005555e0 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4048:4"]]
- 005552b4 ["COPY", "register:4040:8", ["const:ca5000:8"]]
+ 005555d4 ["COPY", "register:4040:8", ["const:ca6000:8"]]
- 005552b8 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:d08:8"]]
- 005552b8 ["LOAD", "tmp:1:4", ["const:1b1:8", "tmp:0:8"]]
- 005552b8 ["INT_ZEXT", "register:4048:8", ["tmp:1:4"]]
+ 005555d8 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:cc8:8"]]
+ 005555d8 ["LOAD", "tmp:1:4", ["const:1b1:8", "tmp:0:8"]]
+ 005555d8 ["INT_ZEXT", "register:4048:8", ["tmp:1:4"]]
~~~


<a id="compare-b2c0e1226ab06374da89ae27c2638bbf"></a>

### [`005554b8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00555/005554b8.md) → [`005557d8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00555/005557d8.md) FUN_005557d8

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`00555304`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00555/00555304.md) · 呼出先 13件 [`00440f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00440/00440f00.md) [`00468528`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00468/00468528.md) [`0046c48c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046c/0046c48c.md) [`00555e4c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00555/00555e4c.md) [`0055a734`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0055a/0055a734.md)
- 新版 呼出元 1件 [`00555624`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00555/00555624.md) · 呼出先 13件 [`00441220`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00441/00441220.md) [`00468848`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00468/00468848.md) [`0046c7ac`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0046c/0046c7ac.md) [`0055616c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00556/0055616c.md) [`0055aa54`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0055a/0055aa54.md)

変更の種類 branch_value, call_argument_candidate, constant, operands_and_dependencies, operation_sequence, store_destination

命令の説明率　旧版 95.19% / 新版 95.19%

優先判定に残った影響 `call_argument_candidate` 3件, `store_destination` 6件

アドレスに依存する影響 `branch_value` 5件, `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_destination",
    "new": {
      "definition_site": "005558a8",
      "incomplete_value": true,
      "site": "005558a8",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:4048:8"
          ],
          [
            "leaf",
            "const:d18:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00555588",
      "incomplete_value": true,
      "site": "00555588",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:4048:8"
          ],
          [
            "leaf",
            "const:d58:8"
          ]
        ]
      ]
    },
    "ordinal": 29,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "store_destination",
    "new": {
      "definition_site": "0055597c",
      "incomplete_value": true,
      "site": "0055597c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:4048:8"
          ],
          [
            "leaf",
            "const:d18:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0055565c",
      "incomplete_value": true,
      "site": "0055565c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:4048:8"
          ],
          [
            "leaf",
            "const:d58:8"
          ]
        ]
      ]
    },
    "ordinal": 47,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "store_destination",
    "new": {
      "definition_site": "00555a54",
      "incomplete_value": true,
      "site": "00555a54",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:4048:8"
          ],
          [
            "leaf",
            "const:d18:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00555734",
      "incomplete_value": true,
      "site": "00555734",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:4048:8"
          ],
          [
            "leaf",
            "const:d58:8"
          ]
        ]
      ]
    },
    "ordinal": 63,
    "slot": 1
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "00555830",
      "READ",
      [
        "storage",
        "00ca5d68",
        null,
        "undefined1"
      ]
    ],
    [
      "00555838",
      "READ",
      [
        "storage",
        "00ca5d50",
        null,
        "undefined8"
      ]
    ],
    [
      "0055583c",
      "WRITE",
      [
        "storage",
        "00ca5d58",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00555830",
      "READ",
      [
        "storage",
        "00ca6d28",
        null,
        "undefined1"
      ]
    ],
    [
      "00555838",
      "READ",
      [
        "storage",
        "00ca6d10",
        null,
        "undefined8"
      ]
    ],
    [
      "0055583c",
      "WRITE",
      [
        "storage",
        "00ca6d18",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00555588 ["INT_ADD", "tmp:0:8", ["register:4048:8", "const:d58:8"]]
- 00555588 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:40d8:8"]]
+ 005558a8 ["INT_ADD", "tmp:0:8", ["register:4048:8", "const:d18:8"]]
+ 005558a8 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:40d8:8"]]
- 00555654 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:d60:8"]]
- 00555654 ["LOAD", "register:40c8:8", ["const:1b1:8", "tmp:0:8"]]
+ 00555974 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:d20:8"]]
+ 00555974 ["LOAD", "register:40c8:8", ["const:1b1:8", "tmp:0:8"]]
- 0055565c ["INT_ADD", "tmp:0:8", ["register:4048:8", "const:d58:8"]]
- 0055565c ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:40d0:8"]]
+ 0055597c ["INT_ADD", "tmp:0:8", ["register:4048:8", "const:d18:8"]]
+ 0055597c ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:40d0:8"]]
~~~


<a id="compare-0ad5e0563e39bd7c913fde70b6620e6a"></a>

### [`00555e4c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00555/00555e4c.md) → [`0055616c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00556/0055616c.md) FUN_0055616c

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 2件 [`005554b8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00555/005554b8.md) [`00555cd4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00555/00555cd4.md) · 呼出先 10件 [`00440f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00440/00440f00.md) [`0046c48c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046c/0046c48c.md) [`005598b4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00559/005598b4.md) [`0055b288`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0055b/0055b288.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)
- 新版 呼出元 2件 [`005557d8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00555/005557d8.md) [`00555ff4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00555/00555ff4.md) · 呼出先 10件 [`00441220`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00441/00441220.md) [`0046c7ac`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0046c/0046c7ac.md) [`00559bd4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00559/00559bd4.md) [`0055b5a8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0055b/0055b5a8.md) [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 99.17% / 新版 99.17%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "0055732c",
      "incomplete_value": true,
      "site": "00557330",
      "value": [
        "LOAD",
        "8",
        [
          [
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
      "definition_site": "0055700c",
      "incomplete_value": true,
      "site": "00557010",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:190:8"
              ]
            ]
          ]
        ]
      ]
    },
    "ordinal": 211,
    "slot": 2
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "005561ac",
      "READ",
      [
        "storage",
        "00c9b320",
        null,
        "pointer"
      ]
    ],
    [
      "005561b8",
      "READ",
      [
        "storage",
        "00ca6554",
        null,
        "undefined4"
      ]
    ],
    [
      "0055629c",
      "READ",
      [
        "storage",
        "00ca6550",
        null,
        "undefined4"
      ]
    ]
  ],
  "added": [
    [
      "005561ac",
      "READ",
      [
        "storage",
        "00c9c2f0",
        null,
        "pointer"
      ]
    ],
    [
      "005561b8",
      "READ",
      [
        "storage",
        "00ca7514",
        null,
        "undefined4"
      ]
    ],
    [
      "0055629c",
      "READ",
      [
        "storage",
        "00ca7510",
        null,
        "undefined4"
      ]
    ]
  ]
}
~~~


~~~diff
- 00555e80 ["COPY", "register:4050:8", ["const:c9b000:8"]]
+ 005561a0 ["COPY", "register:4050:8", ["const:c9c000:8"]]
- 00555e8c ["INT_ADD", "tmp:0:8", ["register:4050:8", "const:320:8"]]
- 00555e8c ["LOAD", "register:4050:8", ["const:1b1:8", "tmp:0:8"]]
+ 005561ac ["INT_ADD", "tmp:0:8", ["register:4050:8", "const:2f0:8"]]
+ 005561ac ["LOAD", "register:4050:8", ["const:1b1:8", "tmp:0:8"]]
- 00555f74 ["COPY", "register:4040:8", ["const:ca6000:8"]]
+ 00556294 ["COPY", "register:4040:8", ["const:ca7000:8"]]
~~~


<a id="compare-0283816df3278f1e2955e80d38c280cd"></a>

### [`005599a4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00559/005599a4.md) → [`00559cc4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00559/00559cc4.md) FUN_00559cc4

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`0055a57c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0055a/0055a57c.md) · 呼出先 14件 [`00468528`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00468/00468528.md) [`0046c4a0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046c/0046c4a0.md) [`00555cd4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00555/00555cd4.md) [`00559c50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00559/00559c50.md) [`00559f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00559/00559f80.md)
- 新版 呼出元 1件 [`0055a89c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0055a/0055a89c.md) · 呼出先 14件 [`00468848`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00468/00468848.md) [`0046c7c0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0046c/0046c7c0.md) [`00555ff4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00555/00555ff4.md) [`00559f70`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00559/00559f70.md) [`0055a2a0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0055a/0055a2a0.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 94.58% / 新版 94.58%

優先判定に残った影響 `call_argument_candidate` 5件

アドレスに依存する影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00559de8",
      "incomplete_value": false,
      "site": "00559dec",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:ca6000:8"
          ],
          [
            "leaf",
            "const:cd0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00559ac8",
      "incomplete_value": false,
      "site": "00559acc",
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
            "const:d10:8"
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
      "definition_site": "00559e4c",
      "incomplete_value": false,
      "site": "00559e50",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:ca6000:8"
          ],
          [
            "leaf",
            "const:cd0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00559b2c",
      "incomplete_value": false,
      "site": "00559b30",
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
            "const:d10:8"
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
      "definition_site": "00559e94",
      "incomplete_value": false,
      "site": "00559ea4",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:ca6000:8"
          ],
          [
            "leaf",
            "const:ce8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00559b74",
      "incomplete_value": false,
      "site": "00559b84",
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
            "const:d28:8"
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
      "00559cfc",
      "READ",
      [
        "storage",
        "00ca5d28",
        null,
        "undefined1"
      ]
    ],
    [
      "00559d04",
      "READ",
      [
        "storage",
        "00ca5d10",
        null,
        "undefined8"
      ]
    ],
    [
      "00559d08",
      "WRITE",
      [
        "storage",
        "00ca5d18",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00559cfc",
      "READ",
      [
        "storage",
        "00ca6ce8",
        null,
        "undefined1"
      ]
    ],
    [
      "00559d04",
      "READ",
      [
        "storage",
        "00ca6cd0",
        null,
        "undefined8"
      ]
    ],
    [
      "00559d08",
      "WRITE",
      [
        "storage",
        "00ca6cd8",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00559acc ["INT_ADD", "register:40f0:8", ["const:559acc:8", "const:4:8"]]
- 00559acc ["CALL", null, ["callee:00559f70:8"]]
+ 00559dec ["INT_ADD", "register:40f0:8", ["const:559dec:8", "const:4:8"]]
+ 00559dec ["CALL", null, ["callee:00559f70:8"]]
- 00559b30 ["INT_ADD", "register:40f0:8", ["const:559b30:8", "const:4:8"]]
- 00559b30 ["CALL", null, ["callee:0055a2a0:8"]]
+ 00559e50 ["INT_ADD", "register:40f0:8", ["const:559e50:8", "const:4:8"]]
+ 00559e50 ["CALL", null, ["callee:0055a2a0:8"]]
- 00559b84 ["INT_ADD", "register:40f0:8", ["const:559b84:8", "const:4:8"]]
- 00559b84 ["CALL", null, ["callee:00c58ef0:8"]]
+ 00559ea4 ["INT_ADD", "register:40f0:8", ["const:559ea4:8", "const:4:8"]]
+ 00559ea4 ["CALL", null, ["callee:00c58ef0:8"]]
~~~


<a id="compare-3853a6359adf8023bf54412cc3efd71a"></a>

### [`0055a478`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0055a/0055a478.md) → [`0055a798`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0055a/0055a798.md) FUN_0055a798

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`0046803c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00468/0046803c.md) · 呼出先 8件 [`00468528`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00468/00468528.md) [`00555cd4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00555/00555cd4.md) [`00559c50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00559/00559c50.md) [`00559f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00559/00559f80.md) [`0058ffe8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0058f/0058ffe8.md)
- 新版 呼出元 1件 [`0046835c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00468/0046835c.md) · 呼出先 8件 [`00468848`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00468/00468848.md) [`00555ff4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00555/00555ff4.md) [`00559f70`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00559/00559f70.md) [`0055a2a0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0055a/0055a2a0.md) [`00590308`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00590/00590308.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies, operation_sequence

命令の説明率　旧版 84.62% / 新版 84.62%

優先判定に残った影響 `call_argument_candidate` 3件

アドレスに依存する影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "0055a838",
      "incomplete_value": false,
      "site": "0055a844",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:ca6000:8"
          ],
          [
            "leaf",
            "const:d08:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0055a518",
      "incomplete_value": false,
      "site": "0055a524",
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
            "const:d48:8"
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
      "definition_site": "0055a860",
      "incomplete_value": false,
      "site": "0055a878",
      "value": [
        "leaf",
        "const:468848:8"
      ]
    },
    "old": {
      "definition_site": "0055a540",
      "incomplete_value": false,
      "site": "0055a558",
      "value": [
        "leaf",
        "const:468528:8"
      ]
    },
    "ordinal": 3,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "0055a868",
      "incomplete_value": false,
      "site": "0055a878",
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
            "const:30:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0055a548",
      "incomplete_value": false,
      "site": "0055a558",
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
    "ordinal": 3,
    "slot": 3
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "0055a7b0",
      "READ",
      [
        "storage",
        "00ca5d48",
        null,
        "undefined1"
      ]
    ],
    [
      "0055a7c0",
      "READ",
      [
        "storage",
        "00ca5d30",
        null,
        "undefined8"
      ]
    ],
    [
      "0055a7d0",
      "PARAM",
      [
        "storage",
        "00ca5d30",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "0055a7b0",
      "READ",
      [
        "storage",
        "00ca6d08",
        null,
        "undefined1"
      ]
    ],
    [
      "0055a7c0",
      "READ",
      [
        "storage",
        "00ca6cf0",
        null,
        "undefined8"
      ]
    ],
    [
      "0055a7d0",
      "PARAM",
      [
        "storage",
        "00ca6cf0",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 0055a524 ["INT_ADD", "register:40f0:8", ["const:55a524:8", "const:4:8"]]
- 0055a524 ["CALL", null, ["callee:00c58ef0:8"]]
+ 0055a844 ["INT_ADD", "register:40f0:8", ["const:55a844:8", "const:4:8"]]
+ 0055a844 ["CALL", null, ["callee:00c58ef0:8"]]
- 0055a558 ["INT_ADD", "register:40f0:8", ["const:55a558:8", "const:4:8"]]
- 0055a558 ["CALL", null, ["callee:00c58ed0:8"]]
+ 0055a878 ["INT_ADD", "register:40f0:8", ["const:55a878:8", "const:4:8"]]
+ 0055a878 ["CALL", null, ["callee:00c58ed0:8"]]
- 0055a564 ["INT_ADD", "register:40f0:8", ["const:55a564:8", "const:4:8"]]
- 0055a564 ["CALL", null, ["callee:00c58f10:8"]]
+ 0055a884 ["INT_ADD", "register:40f0:8", ["const:55a884:8", "const:4:8"]]
+ 0055a884 ["CALL", null, ["callee:00c58f10:8"]]
~~~


<a id="compare-a470100792866f778a743df9ecf7f03e"></a>

### [`0055a5e8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0055a/0055a5e8.md) → [`0055a908`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0055a/0055a908.md) FUN_0055a908

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 4件 [`00468d48`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00468/00468d48.md) [`00468e60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00468/00468e60.md) [`0046aa3c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046a/0046aa3c.md) [`0046ab88`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046a/0046ab88.md) · 呼出先 0件 
- 新版 呼出元 4件 [`00469068`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00469/00469068.md) [`00469180`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00469/00469180.md) [`0046ad5c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0046a/0046ad5c.md) [`0046aea8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0046a/0046aea8.md) · 呼出先 0件 

変更の種類 constant, operands_and_dependencies, return_value_candidate

命令の説明率　旧版 50.00% / 新版 50.00%

優先判定に残った影響 `return_value_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "return_value_candidate",
    "new": {
      "definition_site": "0055a910",
      "incomplete_value": true,
      "site": "0055a914",
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
    "old": {
      "definition_site": "0055a5f0",
      "incomplete_value": true,
      "site": "0055a5f4",
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
      "0055a910",
      "READ",
      [
        "storage",
        "00ca6510",
        null,
        "undefined4"
      ]
    ]
  ],
  "added": [
    [
      "0055a910",
      "READ",
      [
        "storage",
        "00ca74d0",
        null,
        "undefined4"
      ]
    ]
  ]
}
~~~


~~~diff
- 0055a5e8 ["COPY", "register:4040:8", ["const:ca6000:8"]]
+ 0055a908 ["COPY", "register:4040:8", ["const:ca7000:8"]]
- 0055a5ec ["COPY", "tmp:0:8", ["const:510:8"]]
- 0055a5ec ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 0055a5ec ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 0055a5ec ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 0055a90c ["COPY", "tmp:0:8", ["const:4d0:8"]]
+ 0055a90c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 0055a90c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 0055a90c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-8d343afd245e153645259551cc6e060d"></a>

### [`0055a63c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0055a/0055a63c.md) → [`0055a95c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0055a/0055a95c.md) FUN_0055a95c

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 5件 [`00467dfc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00467/00467dfc.md) [`00468d48`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00468/00468d48.md) [`00468e60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00468/00468e60.md) [`0046aa3c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046a/0046aa3c.md) [`0046ab88`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046a/0046ab88.md) · 呼出先 0件 
- 新版 呼出元 5件 [`0046811c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00468/0046811c.md) [`00469068`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00469/00469068.md) [`00469180`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00469/00469180.md) [`0046ad5c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0046a/0046ad5c.md) [`0046aea8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0046a/0046aea8.md) · 呼出先 0件 

変更の種類 constant, operands_and_dependencies, store_destination

命令の説明率　旧版 70.00% / 新版 70.00%

優先判定に残った影響 `store_destination` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_destination",
    "new": {
      "definition_site": "0055a97c",
      "incomplete_value": true,
      "site": "0055a97c",
      "value": [
        "LOAD",
        "8",
        [
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
                "const:308:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0055a65c",
      "incomplete_value": true,
      "site": "0055a65c",
      "value": [
        "LOAD",
        "8",
        [
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
                "const:338:8"
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
      "0055a968",
      "READ",
      [
        "storage",
        "00c9b310",
        null,
        "pointer"
      ]
    ],
    [
      "0055a96c",
      "READ",
      [
        "storage",
        "00ca6610",
        null,
        "undefined8"
      ]
    ],
    [
      "0055a974",
      "READ",
      [
        "storage",
        "00c9b338",
        null,
        "pointer"
      ]
    ]
  ],
  "added": [
    [
      "0055a968",
      "READ",
      [
        "storage",
        "00c9c2e0",
        null,
        "pointer"
      ]
    ],
    [
      "0055a96c",
      "READ",
      [
        "storage",
        "00ca75d0",
        null,
        "undefined8"
      ]
    ],
    [
      "0055a974",
      "READ",
      [
        "storage",
        "00c9c308",
        null,
        "pointer"
      ]
    ]
  ]
}
~~~


~~~diff
- 0055a63c ["COPY", "register:4040:8", ["const:c9b000:8"]]
+ 0055a95c ["COPY", "register:4040:8", ["const:c9c000:8"]]
- 0055a644 ["COPY", "register:4048:8", ["const:c9b000:8"]]
+ 0055a964 ["COPY", "register:4048:8", ["const:c9c000:8"]]
- 0055a648 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:310:8"]]
- 0055a648 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
+ 0055a968 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:2e0:8"]]
+ 0055a968 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-b9eef6fcfcbb46301f78afdf3642e395"></a>

### [`0055a664`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0055a/0055a664.md) → [`0055a984`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0055a/0055a984.md) FUN_0055a984

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 3件 [`004679ac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00467/004679ac.md) [`00467b6c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00467/00467b6c.md) [`00467f5c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00467/00467f5c.md) · 呼出先 0件 
- 新版 呼出元 3件 [`00467ccc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00467/00467ccc.md) [`00467e8c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00467/00467e8c.md) [`0046827c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00468/0046827c.md) · 呼出先 0件 

変更の種類 constant, operands_and_dependencies, store_destination

命令の説明率　旧版 50.00% / 新版 50.00%

優先判定に残った影響 `store_destination` 8件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_destination",
    "new": {
      "definition_site": "0055a994",
      "incomplete_value": true,
      "site": "0055a994",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:310:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0055a674",
      "incomplete_value": true,
      "site": "0055a674",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:340:8"
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
    "kind": "store_destination",
    "new": {
      "definition_site": "0055a994",
      "incomplete_value": true,
      "site": "0055a994",
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
            "const:4:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0055a674",
      "incomplete_value": true,
      "site": "0055a674",
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
            "const:4:8"
          ]
        ]
      ]
    },
    "ordinal": 1,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "store_destination",
    "new": {
      "definition_site": "0055a9a4",
      "incomplete_value": true,
      "site": "0055a9a4",
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
      "definition_site": "0055a684",
      "incomplete_value": true,
      "site": "0055a684",
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
      "0055a990",
      "READ",
      [
        "storage",
        "00c9b340",
        null,
        "pointer"
      ]
    ],
    [
      "0055a994",
      "WRITE",
      [
        "storage",
        "00ca3ef0",
        null,
        "undefined4"
      ]
    ],
    [
      "0055a994",
      "WRITE",
      [
        "storage",
        "00ca3ef4",
        null,
        "undefined4"
      ]
    ]
  ],
  "added": [
    [
      "0055a990",
      "READ",
      [
        "storage",
        "00c9c310",
        null,
        "pointer"
      ]
    ],
    [
      "0055a994",
      "WRITE",
      [
        "storage",
        "00ca4ec0",
        null,
        "undefined4"
      ]
    ],
    [
      "0055a994",
      "WRITE",
      [
        "storage",
        "00ca4ec4",
        null,
        "undefined4"
      ]
    ]
  ]
}
~~~


~~~diff
- 0055a664 ["COPY", "register:4040:8", ["const:c9b000:8"]]
+ 0055a984 ["COPY", "register:4040:8", ["const:c9c000:8"]]
- 0055a66c ["COPY", "register:4048:8", ["const:c9b000:8"]]
+ 0055a98c ["COPY", "register:4048:8", ["const:c9c000:8"]]
- 0055a670 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:340:8"]]
- 0055a670 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
+ 0055a990 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:310:8"]]
+ 0055a990 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-8dc0aefa359a41aafe856eac946c942a"></a>

### [`0055a6f4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0055a/0055a6f4.md) → [`0055aa14`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0055a/0055aa14.md) FUN_0055aa14

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 5件 [`00618240`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00618/00618240.md) [`008aac80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008aa/008aac80.md) [`008abd50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008ab/008abd50.md) [`008d8ec0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008d8/008d8ec0.md) [`00b2cee4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b2c/00b2cee4.md) · 呼出先 0件 
- 新版 呼出元 5件 [`006185f0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00618/006185f0.md) [`008abc2c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008ab/008abc2c.md) [`008accfc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008ac/008accfc.md) [`008d9e6c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008d9/008d9e6c.md) [`00b2ded8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b2d/00b2ded8.md) · 呼出先 0件 

変更の種類 constant, operands_and_dependencies, return_value_candidate

命令の説明率　旧版 50.00% / 新版 50.00%

優先判定に残った影響 `return_value_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "return_value_candidate",
    "new": {
      "definition_site": "0055aa1c",
      "incomplete_value": true,
      "site": "0055aa20",
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
    "old": {
      "definition_site": "0055a6fc",
      "incomplete_value": true,
      "site": "0055a700",
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
      "0055aa1c",
      "READ",
      [
        "storage",
        "00ca6560",
        null,
        "undefined4"
      ]
    ]
  ],
  "added": [
    [
      "0055aa1c",
      "READ",
      [
        "storage",
        "00ca7520",
        null,
        "undefined4"
      ]
    ]
  ]
}
~~~


~~~diff
- 0055a6f4 ["COPY", "register:4040:8", ["const:ca6000:8"]]
+ 0055aa14 ["COPY", "register:4040:8", ["const:ca7000:8"]]
- 0055a6f8 ["COPY", "tmp:0:8", ["const:560:8"]]
- 0055a6f8 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 0055a6f8 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 0055a6f8 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 0055aa18 ["COPY", "tmp:0:8", ["const:520:8"]]
+ 0055aa18 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 0055aa18 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 0055aa18 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-e238e37d6c7c9729701c50b220ba9974"></a>

### [`0055a704`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0055a/0055a704.md) → [`0055aa24`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0055a/0055aa24.md) FUN_0055aa24

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 5件 [`00618240`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00618/00618240.md) [`008aac80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008aa/008aac80.md) [`008abd50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008ab/008abd50.md) [`008d8ec0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008d8/008d8ec0.md) [`00b2cee4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b2c/00b2cee4.md) · 呼出先 0件 
- 新版 呼出元 5件 [`006185f0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00618/006185f0.md) [`008abc2c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008ab/008abc2c.md) [`008accfc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008ac/008accfc.md) [`008d9e6c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008d9/008d9e6c.md) [`00b2ded8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b2d/00b2ded8.md) · 呼出先 0件 

変更の種類 constant, operands_and_dependencies, return_value_candidate

命令の説明率　旧版 50.00% / 新版 50.00%

優先判定に残った影響 `return_value_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "return_value_candidate",
    "new": {
      "definition_site": "0055aa2c",
      "incomplete_value": true,
      "site": "0055aa30",
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
    "old": {
      "definition_site": "0055a70c",
      "incomplete_value": true,
      "site": "0055a710",
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
      "0055aa2c",
      "READ",
      [
        "storage",
        "00ca655c",
        null,
        "undefined4"
      ]
    ]
  ],
  "added": [
    [
      "0055aa2c",
      "READ",
      [
        "storage",
        "00ca751c",
        null,
        "undefined4"
      ]
    ]
  ]
}
~~~


~~~diff
- 0055a704 ["COPY", "register:4040:8", ["const:ca6000:8"]]
+ 0055aa24 ["COPY", "register:4040:8", ["const:ca7000:8"]]
- 0055a708 ["COPY", "tmp:0:8", ["const:55c:8"]]
- 0055a708 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 0055a708 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 0055a708 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 0055aa28 ["COPY", "tmp:0:8", ["const:51c:8"]]
+ 0055aa28 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 0055aa28 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 0055aa28 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-ed3cd4bdc4622048b01cd18ab2aa954d"></a>

### [`0055a714`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0055a/0055a714.md) → [`0055aa34`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0055a/0055aa34.md) FUN_0055aa34

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`00859bb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00859/00859bb0.md) · 呼出先 0件 
- 新版 呼出元 1件 [`0085ab5c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0085a/0085ab5c.md) · 呼出先 0件 

変更の種類 constant, operands_and_dependencies, return_value_candidate

命令の説明率　旧版 50.00% / 新版 50.00%

優先判定に残った影響 `return_value_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "return_value_candidate",
    "new": {
      "definition_site": "0055aa3c",
      "incomplete_value": true,
      "site": "0055aa40",
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
    "old": {
      "definition_site": "0055a71c",
      "incomplete_value": true,
      "site": "0055a720",
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
      "0055aa3c",
      "READ",
      [
        "storage",
        "00ca6568",
        null,
        "undefined4"
      ]
    ]
  ],
  "added": [
    [
      "0055aa3c",
      "READ",
      [
        "storage",
        "00ca7528",
        null,
        "undefined4"
      ]
    ]
  ]
}
~~~


~~~diff
- 0055a714 ["COPY", "register:4040:8", ["const:ca6000:8"]]
+ 0055aa34 ["COPY", "register:4040:8", ["const:ca7000:8"]]
- 0055a718 ["COPY", "tmp:0:8", ["const:568:8"]]
- 0055a718 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 0055a718 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 0055a718 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 0055aa38 ["COPY", "tmp:0:8", ["const:528:8"]]
+ 0055aa38 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 0055aa38 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 0055aa38 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-d3c603af5abd99cf086c0d023d798681"></a>

### [`0055a724`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0055a/0055a724.md) → [`0055aa44`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0055a/0055aa44.md) FUN_0055aa44

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`00859bb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00859/00859bb0.md) · 呼出先 0件 
- 新版 呼出元 1件 [`0085ab5c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0085a/0085ab5c.md) · 呼出先 0件 

変更の種類 constant, operands_and_dependencies, return_value_candidate

命令の説明率　旧版 50.00% / 新版 50.00%

優先判定に残った影響 `return_value_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "return_value_candidate",
    "new": {
      "definition_site": "0055aa4c",
      "incomplete_value": true,
      "site": "0055aa50",
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
    "old": {
      "definition_site": "0055a72c",
      "incomplete_value": true,
      "site": "0055a730",
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
      "0055aa4c",
      "READ",
      [
        "storage",
        "00ca6564",
        null,
        "undefined4"
      ]
    ]
  ],
  "added": [
    [
      "0055aa4c",
      "READ",
      [
        "storage",
        "00ca7524",
        null,
        "undefined4"
      ]
    ]
  ]
}
~~~


~~~diff
- 0055a724 ["COPY", "register:4040:8", ["const:ca6000:8"]]
+ 0055aa44 ["COPY", "register:4040:8", ["const:ca7000:8"]]
- 0055a728 ["COPY", "tmp:0:8", ["const:564:8"]]
- 0055a728 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 0055a728 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 0055a728 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 0055aa48 ["COPY", "tmp:0:8", ["const:524:8"]]
+ 0055aa48 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 0055aa48 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 0055aa48 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-ff3817824de4757684859a3ce1ad68d6"></a>

### [`0055b178`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0055b/0055b178.md) → [`0055b498`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0055b/0055b498.md) FUN_0055b498

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`0055a734`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0055a/0055a734.md) · 呼出先 1件 [`0043b7b8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b7b8.md)
- 新版 呼出元 1件 [`0055aa54`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0055a/0055aa54.md) · 呼出先 1件 [`0043bad8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bad8.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 80.00% / 新版 80.00%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "0055b4a4",
      "incomplete_value": false,
      "site": "0055b4a8",
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
      "definition_site": "0055b184",
      "incomplete_value": false,
      "site": "0055b188",
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
      "0055b4a4",
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
      "0055b4a4",
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
- 0055b188 ["INT_ADD", "register:40f0:8", ["const:55b188:8", "const:4:8"]]
- 0055b188 ["CALL", null, ["callee:0043bad8:8"]]
+ 0055b4a8 ["INT_ADD", "register:40f0:8", ["const:55b4a8:8", "const:4:8"]]
+ 0055b4a8 ["CALL", null, ["callee:0043bad8:8"]]
- 0055b180 ["COPY", "register:4000:8", ["const:2b7000:8"]]
+ 0055b4a0 ["COPY", "register:4000:8", ["const:2b8000:8"]]
- 0055b184 ["COPY", "tmp:0:8", ["const:f8c:8"]]
- 0055b184 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 0055b184 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 0055b184 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 0055b4a4 ["COPY", "tmp:0:8", ["const:5b:8"]]
+ 0055b4a4 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 0055b4a4 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 0055b4a4 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
~~~


<a id="compare-73f758acfdd22a752ed4141e7eca6e86"></a>

### [`0055b18c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0055b/0055b18c.md) → [`0055b4ac`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0055b/0055b4ac.md) FUN_0055b4ac

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`0055a734`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0055a/0055a734.md) · 呼出先 1件 [`0043b7b8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b7b8.md)
- 新版 呼出元 1件 [`0055aa54`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0055a/0055aa54.md) · 呼出先 1件 [`0043bad8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bad8.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 80.00% / 新版 80.00%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "0055b4b8",
      "incomplete_value": false,
      "site": "0055b4bc",
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
      "definition_site": "0055b198",
      "incomplete_value": false,
      "site": "0055b19c",
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
      "0055b4b8",
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
      "0055b4b8",
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
- 0055b19c ["INT_ADD", "register:40f0:8", ["const:55b19c:8", "const:4:8"]]
- 0055b19c ["CALL", null, ["callee:0043bad8:8"]]
+ 0055b4bc ["INT_ADD", "register:40f0:8", ["const:55b4bc:8", "const:4:8"]]
+ 0055b4bc ["CALL", null, ["callee:0043bad8:8"]]
- 0055b194 ["COPY", "register:4000:8", ["const:2b7000:8"]]
+ 0055b4b4 ["COPY", "register:4000:8", ["const:2b8000:8"]]
- 0055b198 ["COPY", "tmp:0:8", ["const:f8c:8"]]
- 0055b198 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 0055b198 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 0055b198 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 0055b4b8 ["COPY", "tmp:0:8", ["const:5b:8"]]
+ 0055b4b8 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 0055b4b8 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 0055b4b8 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
~~~


<a id="compare-ad782415913031c0a030fa4229d71ad1"></a>

### [`0055b288`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0055b/0055b288.md) → [`0055b5a8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0055b/0055b5a8.md) FUN_0055b5a8

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 5件 [`00555304`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00555/00555304.md) [`00555cd4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00555/00555cd4.md) [`00555e4c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00555/00555e4c.md) [`005598b4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00559/005598b4.md) [`00559f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00559/00559f80.md) · 呼出先 1件 [`0043b7b8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b7b8.md)
- 新版 呼出元 5件 [`00555624`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00555/00555624.md) [`00555ff4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00555/00555ff4.md) [`0055616c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00556/0055616c.md) [`00559bd4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00559/00559bd4.md) [`0055a2a0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0055a/0055a2a0.md) · 呼出先 1件 [`0043bad8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bad8.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 80.00% / 新版 80.00%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "0055b5b4",
      "incomplete_value": false,
      "site": "0055b5b8",
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
      "definition_site": "0055b294",
      "incomplete_value": false,
      "site": "0055b298",
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
      "0055b5b4",
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
      "0055b5b4",
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
- 0055b298 ["INT_ADD", "register:40f0:8", ["const:55b298:8", "const:4:8"]]
- 0055b298 ["CALL", null, ["callee:0043bad8:8"]]
+ 0055b5b8 ["INT_ADD", "register:40f0:8", ["const:55b5b8:8", "const:4:8"]]
+ 0055b5b8 ["CALL", null, ["callee:0043bad8:8"]]
- 0055b290 ["COPY", "register:4000:8", ["const:2b7000:8"]]
+ 0055b5b0 ["COPY", "register:4000:8", ["const:2b8000:8"]]
- 0055b294 ["COPY", "tmp:0:8", ["const:f8c:8"]]
- 0055b294 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 0055b294 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 0055b294 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 0055b5b4 ["COPY", "tmp:0:8", ["const:5b:8"]]
+ 0055b5b4 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 0055b5b4 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 0055b5b4 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
~~~


<a id="compare-8c797ffc73b14acb41cc23a8852d4851"></a>

### [`0055b29c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0055b/0055b29c.md) → [`0055b5bc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0055b/0055b5bc.md) FUN_0055b5bc

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`0055c3a0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0055c/0055c3a0.md) · 呼出先 5件 [`0055b3c0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0055b/0055b3c0.md) [`0055c714`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0055c/0055c714.md) [`0055c71c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0055c/0055c71c.md) [`0055e580`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0055e/0055e580.md) [`00c53d70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53d70.md)
- 新版 呼出元 1件 [`0055c6c0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0055c/0055c6c0.md) · 呼出先 5件 [`0055b6e0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0055b/0055b6e0.md) [`0055ca34`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0055c/0055ca34.md) [`0055ca3c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0055c/0055ca3c.md) [`0055e8a0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0055e/0055e8a0.md) [`00c54d60`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d60.md)

変更の種類 constant, operands_and_dependencies, operation_sequence, store_value

命令の説明率　旧版 82.81% / 新版 82.81%

優先判定に残った影響 `store_value` 6件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "0055b5dc",
      "incomplete_value": false,
      "site": "0055b5dc",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c6b000:8"
          ],
          [
            "leaf",
            "const:ed8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0055b2bc",
      "incomplete_value": false,
      "site": "0055b2bc",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c6a000:8"
          ],
          [
            "leaf",
            "const:f08:8"
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
      "definition_site": "0055b5f8",
      "incomplete_value": false,
      "site": "0055b5f8",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c6b000:8"
          ],
          [
            "leaf",
            "const:de8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0055b2d8",
      "incomplete_value": false,
      "site": "0055b2d8",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c6a000:8"
          ],
          [
            "leaf",
            "const:e18:8"
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
      "definition_site": "0055b5f8",
      "incomplete_value": false,
      "site": "0055b5f8",
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
                "const:c6b000:8"
              ],
              [
                "leaf",
                "const:de8:8"
              ]
            ]
          ],
          [
            "leaf",
            "const:68:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0055b2d8",
      "incomplete_value": false,
      "site": "0055b2d8",
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
                "const:c6a000:8"
              ],
              [
                "leaf",
                "const:e18:8"
              ]
            ]
          ],
          [
            "leaf",
            "const:68:8"
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
      "0055b5dc",
      "DATA",
      [
        "storage",
        "00c6af08",
        null,
        "undefined *"
      ]
    ],
    [
      "0055b5f8",
      "DATA",
      [
        "storage",
        "00c6ae18",
        null,
        "undefined *"
      ]
    ],
    [
      "0055b5f8",
      "DATA",
      [
        "storage",
        "00c6ae80",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "0055b5dc",
      "DATA",
      [
        "storage",
        "00c6bed8",
        null,
        "undefined *"
      ]
    ],
    [
      "0055b5f8",
      "DATA",
      [
        "storage",
        "00c6bde8",
        null,
        "undefined *"
      ]
    ],
    [
      "0055b5f8",
      "DATA",
      [
        "storage",
        "00c6be50",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 0055b2ac ["COPY", "register:4040:8", ["const:c6a000:8"]]
+ 0055b5cc ["COPY", "register:4040:8", ["const:c6b000:8"]]
- 0055b2b0 ["COPY", "tmp:0:8", ["const:f08:8"]]
- 0055b2b0 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 0055b2b0 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 0055b2b0 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 0055b5d0 ["COPY", "tmp:0:8", ["const:ed8:8"]]
+ 0055b5d0 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 0055b5d0 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 0055b5d0 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 0055b2c0 ["INT_ADD", "register:40f0:8", ["const:55b2c0:8", "const:4:8"]]
- 0055b2c0 ["CALL", null, ["callee:0055e8a0:8"]]
+ 0055b5e0 ["INT_ADD", "register:40f0:8", ["const:55b5e0:8", "const:4:8"]]
+ 0055b5e0 ["CALL", null, ["callee:0055e8a0:8"]]
~~~


<a id="compare-240fa68fad65a4fba3dfb09523828730"></a>

### [`0055c3a0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0055c/0055c3a0.md) → [`0055c6c0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0055c/0055c6c0.md) FUN_0055c6c0

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `bounded` · 参照 `changed`

- 旧版 呼出元 2件 [`004894e8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00489/004894e8.md) [`00a99514`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a99/00a99514.md) · 呼出先 2件 [`0055b29c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0055b/0055b29c.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)
- 新版 呼出元 2件 [`00489808`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00489/00489808.md) [`00a9a508`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a9a/00a9a508.md) · 呼出先 2件 [`0055b5bc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0055b/0055b5bc.md) [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 92.31% / 新版 92.31%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "0055c6f0",
      "incomplete_value": false,
      "site": "0055c6fc",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c6b000:8"
          ],
          [
            "leaf",
            "const:f00:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0055c3d0",
      "incomplete_value": false,
      "site": "0055c3dc",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c6a000:8"
          ],
          [
            "leaf",
            "const:f30:8"
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
      "0055c6fc",
      "DATA",
      [
        "storage",
        "00c6af30",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "0055c6fc",
      "DATA",
      [
        "storage",
        "00c6bf00",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 0055c3c4 ["INT_ADD", "register:40f0:8", ["const:55c3c4:8", "const:4:8"]]
- 0055c3c4 ["CALL", null, ["callee:00c58f30:8"]]
+ 0055c6e4 ["INT_ADD", "register:40f0:8", ["const:55c6e4:8", "const:4:8"]]
+ 0055c6e4 ["CALL", null, ["callee:00c58f30:8"]]
- 0055c3cc ["COPY", "register:4040:8", ["const:c6a000:8"]]
+ 0055c6ec ["COPY", "register:4040:8", ["const:c6b000:8"]]
- 0055c3d0 ["COPY", "tmp:0:8", ["const:f30:8"]]
- 0055c3d0 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 0055c3d0 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 0055c3d0 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 0055c6f0 ["COPY", "tmp:0:8", ["const:f00:8"]]
+ 0055c6f0 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 0055c6f0 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 0055c6f0 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-7a8eb4ff8a5e9174773ef268ead223b9"></a>

### [`0055c424`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0055c/0055c424.md) → [`0055c744`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0055c/0055c744.md) FUN_0055c744

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 3件 [`0055e5ec`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0055e/0055e5ec.md) [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md)
- 新版 呼出元 0件  · 呼出先 3件 [`0055e90c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0055e/0055e90c.md) [`00c54d90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d90.md) [`00c58f20`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f20.md)

変更の種類 constant, operands_and_dependencies, operation_sequence, store_value

命令の説明率　旧版 85.00% / 新版 85.00%

優先判定に残った影響 `store_value` 2件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "0055c758",
      "incomplete_value": false,
      "site": "0055c764",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c6b000:8"
          ],
          [
            "leaf",
            "const:de8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0055c438",
      "incomplete_value": false,
      "site": "0055c444",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c6a000:8"
          ],
          [
            "leaf",
            "const:e18:8"
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
      "definition_site": "0055c770",
      "incomplete_value": false,
      "site": "0055c770",
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
                "const:c6b000:8"
              ],
              [
                "leaf",
                "const:de8:8"
              ]
            ]
          ],
          [
            "leaf",
            "const:68:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0055c450",
      "incomplete_value": false,
      "site": "0055c450",
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
                "const:c6a000:8"
              ],
              [
                "leaf",
                "const:e18:8"
              ]
            ]
          ],
          [
            "leaf",
            "const:68:8"
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
      "0055c764",
      "DATA",
      [
        "storage",
        "00c6ae18",
        null,
        "undefined *"
      ]
    ],
    [
      "0055c770",
      "DATA",
      [
        "storage",
        "00c6ae80",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "0055c764",
      "DATA",
      [
        "storage",
        "00c6bde8",
        null,
        "undefined *"
      ]
    ],
    [
      "0055c770",
      "DATA",
      [
        "storage",
        "00c6be50",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 0055c434 ["COPY", "register:4040:8", ["const:c6a000:8"]]
+ 0055c754 ["COPY", "register:4040:8", ["const:c6b000:8"]]
- 0055c438 ["COPY", "tmp:0:8", ["const:e18:8"]]
- 0055c438 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 0055c438 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 0055c438 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 0055c758 ["COPY", "tmp:0:8", ["const:de8:8"]]
+ 0055c758 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 0055c758 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 0055c758 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 0055c440 ["COPY", "register:40a0:8", ["register:4000:8"]]
~~~


<a id="compare-6199980f219e8eb6b6e5280d454db850"></a>

### [`0055c4c4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0055c/0055c4c4.md) → [`0055c7e4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0055c/0055c7e4.md) FUN_0055c7e4

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 4件 [`0055e5ec`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0055e/0055e5ec.md) [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 0件  · 呼出先 4件 [`0055e90c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0055e/0055e90c.md) [`00c54d90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d90.md) [`00c58f20`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f20.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 constant, operands_and_dependencies, operation_sequence, store_value

命令の説明率　旧版 85.71% / 新版 85.71%

優先判定に残った影響 `store_value` 2件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "0055c7f8",
      "incomplete_value": false,
      "site": "0055c804",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c6b000:8"
          ],
          [
            "leaf",
            "const:de8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0055c4d8",
      "incomplete_value": false,
      "site": "0055c4e4",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c6a000:8"
          ],
          [
            "leaf",
            "const:e18:8"
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
      "definition_site": "0055c810",
      "incomplete_value": false,
      "site": "0055c810",
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
                "const:c6b000:8"
              ],
              [
                "leaf",
                "const:de8:8"
              ]
            ]
          ],
          [
            "leaf",
            "const:68:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0055c4f0",
      "incomplete_value": false,
      "site": "0055c4f0",
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
                "const:c6a000:8"
              ],
              [
                "leaf",
                "const:e18:8"
              ]
            ]
          ],
          [
            "leaf",
            "const:68:8"
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
      "0055c804",
      "DATA",
      [
        "storage",
        "00c6ae18",
        null,
        "undefined *"
      ]
    ],
    [
      "0055c810",
      "DATA",
      [
        "storage",
        "00c6ae80",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "0055c804",
      "DATA",
      [
        "storage",
        "00c6bde8",
        null,
        "undefined *"
      ]
    ],
    [
      "0055c810",
      "DATA",
      [
        "storage",
        "00c6be50",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 0055c4d4 ["COPY", "register:4040:8", ["const:c6a000:8"]]
+ 0055c7f4 ["COPY", "register:4040:8", ["const:c6b000:8"]]
- 0055c4d8 ["COPY", "tmp:0:8", ["const:e18:8"]]
- 0055c4d8 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 0055c4d8 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 0055c4d8 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 0055c7f8 ["COPY", "tmp:0:8", ["const:de8:8"]]
+ 0055c7f8 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 0055c7f8 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 0055c7f8 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 0055c4e0 ["COPY", "register:4098:8", ["register:4000:8"]]
~~~


<a id="compare-937c10633d450e7ce34dafe7997138bd"></a>

### [`0055c56c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0055c/0055c56c.md) → [`0055c88c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0055c/0055c88c.md) FUN_0055c88c

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 3件 [`0055e5ec`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0055e/0055e5ec.md) [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md)
- 新版 呼出元 0件  · 呼出先 3件 [`0055e90c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0055e/0055e90c.md) [`00c54d90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d90.md) [`00c58f20`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f20.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 91.67% / 新版 91.67%

優先判定に残った影響 `store_value` 2件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "0055c8ac",
      "incomplete_value": false,
      "site": "0055c8ac",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c6b000:8"
          ],
          [
            "leaf",
            "const:de8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0055c58c",
      "incomplete_value": false,
      "site": "0055c58c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c6a000:8"
          ],
          [
            "leaf",
            "const:e18:8"
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
      "definition_site": "0055c8ac",
      "incomplete_value": false,
      "site": "0055c8ac",
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
                "const:c6b000:8"
              ],
              [
                "leaf",
                "const:de8:8"
              ]
            ]
          ],
          [
            "leaf",
            "const:68:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0055c58c",
      "incomplete_value": false,
      "site": "0055c58c",
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
                "const:c6a000:8"
              ],
              [
                "leaf",
                "const:e18:8"
              ]
            ]
          ],
          [
            "leaf",
            "const:68:8"
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
      "0055c8ac",
      "DATA",
      [
        "storage",
        "00c6ae18",
        null,
        "undefined *"
      ]
    ],
    [
      "0055c8ac",
      "DATA",
      [
        "storage",
        "00c6ae80",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "0055c8ac",
      "DATA",
      [
        "storage",
        "00c6bde8",
        null,
        "undefined *"
      ]
    ],
    [
      "0055c8ac",
      "DATA",
      [
        "storage",
        "00c6be50",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 0055c578 ["COPY", "register:4040:8", ["const:c6a000:8"]]
+ 0055c898 ["COPY", "register:4040:8", ["const:c6b000:8"]]
- 0055c57c ["COPY", "tmp:0:8", ["const:e18:8"]]
- 0055c57c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 0055c57c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 0055c57c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 0055c89c ["COPY", "tmp:0:8", ["const:de8:8"]]
+ 0055c89c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 0055c89c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 0055c89c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 0055c59c ["INT_ADD", "register:40f0:8", ["const:55c59c:8", "const:4:8"]]
- 0055c59c ["CALL", null, ["callee:00c54d90:8"]]
+ 0055c8bc ["INT_ADD", "register:40f0:8", ["const:55c8bc:8", "const:4:8"]]
+ 0055c8bc ["CALL", null, ["callee:00c54d90:8"]]
~~~


<a id="compare-31707046625fc6e2c4813133d45d55b4"></a>

### [`0055c6a4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0055c/0055c6a4.md) → [`0055c9c4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0055c/0055c9c4.md) FUN_0055c9c4

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57f70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f70.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c58f40`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f40.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 50.00% / 新版 50.00%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "0055c9c8",
      "incomplete_value": false,
      "site": "0055c9cc",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c6b000:8"
          ],
          [
            "leaf",
            "const:f00:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0055c6a8",
      "incomplete_value": false,
      "site": "0055c6ac",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c6a000:8"
          ],
          [
            "leaf",
            "const:f30:8"
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
      "0055c9cc",
      "DATA",
      [
        "storage",
        "00c6af30",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "0055c9cc",
      "DATA",
      [
        "storage",
        "00c6bf00",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 0055c6a4 ["COPY", "register:4040:8", ["const:c6a000:8"]]
+ 0055c9c4 ["COPY", "register:4040:8", ["const:c6b000:8"]]
- 0055c6a8 ["COPY", "tmp:0:8", ["const:f30:8"]]
- 0055c6a8 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 0055c6a8 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 0055c6a8 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 0055c9c8 ["COPY", "tmp:0:8", ["const:f00:8"]]
+ 0055c9c8 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 0055c9c8 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 0055c9c8 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-2ee943c638fd394522b645d83a7656b2"></a>

### [`0055c724`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0055c/0055c724.md) → [`0055ca44`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0055c/0055ca44.md) FUN_0055ca44

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `bounded` · 参照 `changed`

- 旧版 呼出元 3件 [`005512b4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00551/005512b4.md) [`0055b4f8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0055b/0055b4f8.md) [`00a99514`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a99/00a99514.md) · 呼出先 2件 [`0055c8c8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0055c/0055c8c8.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)
- 新版 呼出元 3件 [`005515d4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00551/005515d4.md) [`0055b818`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0055b/0055b818.md) [`00a9a508`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a9a/00a9a508.md) · 呼出先 2件 [`0055cbe8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0055c/0055cbe8.md) [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md)

変更の種類 constant, operands_and_dependencies, operation_sequence, store_value

命令の説明率　旧版 82.35% / 新版 82.35%

優先判定に残った影響 `store_value` 2件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "0055ca70",
      "incomplete_value": false,
      "site": "0055ca78",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c6b000:8"
          ],
          [
            "leaf",
            "const:fa0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0055c750",
      "incomplete_value": false,
      "site": "0055c758",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c6a000:8"
          ],
          [
            "leaf",
            "const:fd0:8"
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
      "definition_site": "0055ca84",
      "incomplete_value": false,
      "site": "0055ca84",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c6b000:8"
          ],
          [
            "leaf",
            "const:f50:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0055c764",
      "incomplete_value": false,
      "site": "0055c764",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c6a000:8"
          ],
          [
            "leaf",
            "const:f80:8"
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
      "0055ca78",
      "DATA",
      [
        "storage",
        "00c6afd0",
        null,
        "undefined *"
      ]
    ],
    [
      "0055ca84",
      "DATA",
      [
        "storage",
        "00c6af80",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "0055ca78",
      "DATA",
      [
        "storage",
        "00c6bfa0",
        null,
        "undefined *"
      ]
    ],
    [
      "0055ca84",
      "DATA",
      [
        "storage",
        "00c6bf50",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 0055c748 ["INT_ADD", "register:40f0:8", ["const:55c748:8", "const:4:8"]]
- 0055c748 ["CALL", null, ["callee:00c58f30:8"]]
+ 0055ca68 ["INT_ADD", "register:40f0:8", ["const:55ca68:8", "const:4:8"]]
+ 0055ca68 ["CALL", null, ["callee:00c58f30:8"]]
- 0055c74c ["COPY", "register:4040:8", ["const:c6a000:8"]]
+ 0055ca6c ["COPY", "register:4040:8", ["const:c6b000:8"]]
- 0055c750 ["COPY", "tmp:0:8", ["const:fd0:8"]]
- 0055c750 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 0055c750 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 0055c750 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 0055ca70 ["COPY", "tmp:0:8", ["const:fa0:8"]]
+ 0055ca70 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 0055ca70 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 0055ca70 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-6de3906adad756eff1a5e80b4eb8d8a7"></a>

### [`0055c864`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0055c/0055c864.md) → [`0055cb84`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0055c/0055cb84.md) FUN_0055cb84

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 77.78% / 新版 77.78%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "0055cb90",
      "incomplete_value": false,
      "site": "0055cb94",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c6b000:8"
          ],
          [
            "leaf",
            "const:f50:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0055c870",
      "incomplete_value": false,
      "site": "0055c874",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c6a000:8"
          ],
          [
            "leaf",
            "const:f80:8"
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
      "0055cb94",
      "DATA",
      [
        "storage",
        "00c6af80",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "0055cb94",
      "DATA",
      [
        "storage",
        "00c6bf50",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 0055c86c ["COPY", "register:4048:8", ["const:c6a000:8"]]
+ 0055cb8c ["COPY", "register:4048:8", ["const:c6b000:8"]]
- 0055c870 ["COPY", "tmp:0:8", ["const:f80:8"]]
- 0055c870 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 0055c870 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 0055c870 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 0055cb90 ["COPY", "tmp:0:8", ["const:f50:8"]]
+ 0055cb90 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 0055cb90 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 0055cb90 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
~~~


<a id="compare-e1e52bbc788c5c7580b75dedec051e81"></a>

### [`0055c888`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0055c/0055c888.md) → [`0055cba8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0055c/0055cba8.md) FUN_0055cba8

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
      "definition_site": "0055cbb0",
      "incomplete_value": false,
      "site": "0055cbb4",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c6b000:8"
          ],
          [
            "leaf",
            "const:f50:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0055c890",
      "incomplete_value": false,
      "site": "0055c894",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c6a000:8"
          ],
          [
            "leaf",
            "const:f80:8"
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
      "0055cbb4",
      "DATA",
      [
        "storage",
        "00c6af80",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "0055cbb4",
      "DATA",
      [
        "storage",
        "00c6bf50",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 0055c88c ["COPY", "register:4048:8", ["const:c6a000:8"]]
+ 0055cbac ["COPY", "register:4048:8", ["const:c6b000:8"]]
- 0055c890 ["COPY", "tmp:0:8", ["const:f80:8"]]
- 0055c890 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 0055c890 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 0055c890 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 0055cbb0 ["COPY", "tmp:0:8", ["const:f50:8"]]
+ 0055cbb0 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 0055cbb0 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 0055cbb0 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
- 0055c8b4 ["INT_ADD", "register:40f0:8", ["const:55c8b4:8", "const:4:8"]]
- 0055c8b4 ["CALL", null, ["callee:00c58f50:8"]]
+ 0055cbd4 ["INT_ADD", "register:40f0:8", ["const:55cbd4:8", "const:4:8"]]
+ 0055cbd4 ["CALL", null, ["callee:00c58f50:8"]]
~~~


<a id="compare-1c70c0c46eeb1afefefd620ed5970a76"></a>

### [`0055c9f4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0055c/0055c9f4.md) → [`0055cd14`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0055c/0055cd14.md) FUN_0055cd14

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57f70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f70.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c58f40`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f40.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 50.00% / 新版 50.00%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "0055cd18",
      "incomplete_value": false,
      "site": "0055cd1c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c6b000:8"
          ],
          [
            "leaf",
            "const:fa0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0055c9f8",
      "incomplete_value": false,
      "site": "0055c9fc",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c6a000:8"
          ],
          [
            "leaf",
            "const:fd0:8"
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
      "0055cd1c",
      "DATA",
      [
        "storage",
        "00c6afd0",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "0055cd1c",
      "DATA",
      [
        "storage",
        "00c6bfa0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 0055c9f4 ["COPY", "register:4040:8", ["const:c6a000:8"]]
+ 0055cd14 ["COPY", "register:4040:8", ["const:c6b000:8"]]
- 0055c9f8 ["COPY", "tmp:0:8", ["const:fd0:8"]]
- 0055c9f8 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 0055c9f8 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 0055c9f8 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 0055cd18 ["COPY", "tmp:0:8", ["const:fa0:8"]]
+ 0055cd18 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 0055cd18 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 0055cd18 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-1d913b9f5367f46b22ab36b372958041"></a>

### [`0055ca04`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0055c/0055ca04.md) → [`0055cd24`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0055c/0055cd24.md) FUN_0055cd24

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c57f70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f70.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c58f40`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f40.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 83.33% / 新版 83.33%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "0055cd34",
      "incomplete_value": false,
      "site": "0055cd3c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c6b000:8"
          ],
          [
            "leaf",
            "const:fa0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0055ca14",
      "incomplete_value": false,
      "site": "0055ca1c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c6a000:8"
          ],
          [
            "leaf",
            "const:fd0:8"
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
      "0055cd3c",
      "DATA",
      [
        "storage",
        "00c6afd0",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "0055cd3c",
      "DATA",
      [
        "storage",
        "00c6bfa0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 0055ca10 ["COPY", "register:4040:8", ["const:c6a000:8"]]
+ 0055cd30 ["COPY", "register:4040:8", ["const:c6b000:8"]]
- 0055ca14 ["COPY", "tmp:0:8", ["const:fd0:8"]]
- 0055ca14 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 0055ca14 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 0055ca14 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 0055cd34 ["COPY", "tmp:0:8", ["const:fa0:8"]]
+ 0055cd34 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 0055cd34 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 0055cd34 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 0055ca20 ["INT_ADD", "register:40f0:8", ["const:55ca20:8", "const:4:8"]]
- 0055ca20 ["CALL", null, ["callee:00c58f40:8"]]
+ 0055cd40 ["INT_ADD", "register:40f0:8", ["const:55cd40:8", "const:4:8"]]
+ 0055cd40 ["CALL", null, ["callee:00c58f40:8"]]
~~~


<a id="compare-3dcec318ebde5d744f5ca4ddbe99eafe"></a>

### [`0055ca44`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0055c/0055ca44.md) → [`0055cd64`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0055c/0055cd64.md) FUN_0055cd64

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `bounded` · 参照 `changed`

- 旧版 呼出元 1件 [`0055c804`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0055c/0055c804.md) · 呼出先 3件 [`0055c8c8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0055c/0055c8c8.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c58010`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58010.md)
- 新版 呼出元 1件 [`0055cb24`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0055c/0055cb24.md) · 呼出先 3件 [`0055cbe8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0055c/0055cbe8.md) [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md) [`00c58fe0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58fe0.md)

変更の種類 constant, operands_and_dependencies, operation_sequence, store_value

命令の説明率　旧版 86.05% / 新版 86.05%

優先判定に残った影響 `store_value` 2件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "0055cd94",
      "incomplete_value": false,
      "site": "0055cda0",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c6b000:8"
          ],
          [
            "leaf",
            "const:fa0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0055ca74",
      "incomplete_value": false,
      "site": "0055ca80",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c6a000:8"
          ],
          [
            "leaf",
            "const:fd0:8"
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
      "definition_site": "0055cdb4",
      "incomplete_value": false,
      "site": "0055cdb4",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c6b000:8"
          ],
          [
            "leaf",
            "const:f50:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0055ca94",
      "incomplete_value": false,
      "site": "0055ca94",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c6a000:8"
          ],
          [
            "leaf",
            "const:f80:8"
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
      "0055cda0",
      "DATA",
      [
        "storage",
        "00c6afd0",
        null,
        "undefined *"
      ]
    ],
    [
      "0055cdb4",
      "DATA",
      [
        "storage",
        "00c6af80",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "0055cda0",
      "DATA",
      [
        "storage",
        "00c6bfa0",
        null,
        "undefined *"
      ]
    ],
    [
      "0055cdb4",
      "DATA",
      [
        "storage",
        "00c6bf50",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 0055ca6c ["INT_ADD", "register:40f0:8", ["const:55ca6c:8", "const:4:8"]]
- 0055ca6c ["CALL", null, ["callee:00c58f30:8"]]
+ 0055cd8c ["INT_ADD", "register:40f0:8", ["const:55cd8c:8", "const:4:8"]]
+ 0055cd8c ["CALL", null, ["callee:00c58f30:8"]]
- 0055ca70 ["COPY", "register:4040:8", ["const:c6a000:8"]]
+ 0055cd90 ["COPY", "register:4040:8", ["const:c6b000:8"]]
- 0055ca74 ["COPY", "tmp:0:8", ["const:fd0:8"]]
- 0055ca74 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 0055ca74 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 0055ca74 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 0055cd94 ["COPY", "tmp:0:8", ["const:fa0:8"]]
+ 0055cd94 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 0055cd94 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 0055cd94 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-0c8fe9e4f5d77611e1f014d5c59ad945"></a>

### [`0055cb20`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0055c/0055cb20.md) → [`0055ce40`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0055c/0055ce40.md) FUN_0055ce40

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`0055d430`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0055d/0055d430.md) · 呼出先 11件 [`0046c48c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046c/0046c48c.md) [`00535bac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00535/00535bac.md) [`0055d508`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0055d/0055d508.md) [`00c53d70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53d70.md) [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md)
- 新版 呼出元 1件 [`0055d750`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0055d/0055d750.md) · 呼出先 11件 [`0046c7ac`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0046c/0046c7ac.md) [`00535ecc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00535/00535ecc.md) [`0055d828`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0055d/0055d828.md) [`00c54d60`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d60.md) [`00c54d90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d90.md)

変更の種類 constant, operands_and_dependencies, operation_sequence, store_value

命令の説明率　旧版 96.50% / 新版 96.50%

優先判定に残った影響 `store_value` 2件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "0055ce70",
      "incomplete_value": false,
      "site": "0055ce7c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c6b000:8"
          ],
          [
            "leaf",
            "const:ff0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0055cb50",
      "incomplete_value": false,
      "site": "0055cb5c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c6b000:8"
          ],
          [
            "leaf",
            "const:20:8"
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
      "definition_site": "0055cec4",
      "incomplete_value": false,
      "site": "0055ced0",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c6c000:8"
          ],
          [
            "leaf",
            "const:30:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0055cba4",
      "incomplete_value": false,
      "site": "0055cbb0",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c6b000:8"
          ],
          [
            "leaf",
            "const:60:8"
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
      "0055ce7c",
      "DATA",
      [
        "storage",
        "00c6b020",
        null,
        "undefined *"
      ]
    ],
    [
      "0055ced0",
      "DATA",
      [
        "storage",
        "00c6b060",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "0055ce7c",
      "DATA",
      [
        "storage",
        "00c6bff0",
        null,
        "undefined *"
      ]
    ],
    [
      "0055ced0",
      "DATA",
      [
        "storage",
        "00c6c030",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 0055cb50 ["COPY", "tmp:0:8", ["const:20:8"]]
- 0055cb50 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 0055cb50 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 0055cb50 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 0055ce70 ["COPY", "tmp:0:8", ["const:ff0:8"]]
+ 0055ce70 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 0055ce70 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 0055ce70 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 0055cb54 ["COPY", "register:40a0:8", ["register:4000:8"]]
- 0055cb94 ["INT_ADD", "register:40f0:8", ["const:55cb94:8", "const:4:8"]]
- 0055cb94 ["CALL", null, ["callee:00c58f30:8"]]
+ 0055ceb4 ["INT_ADD", "register:40f0:8", ["const:55ceb4:8", "const:4:8"]]
+ 0055ceb4 ["CALL", null, ["callee:00c58f30:8"]]
~~~


<a id="compare-3ddbcc0c7b7ecea88aa06b0df002844d"></a>

### [`0055d430`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0055d/0055d430.md) → [`0055d750`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0055d/0055d750.md) FUN_0055d750

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `bounded` · 参照 `changed`

- 旧版 呼出元 1件 [`00467c30`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00467/00467c30.md) · 呼出先 2件 [`0055cb20`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0055c/0055cb20.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)
- 新版 呼出元 1件 [`00467f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00467/00467f50.md) · 呼出先 2件 [`0055ce40`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0055c/0055ce40.md) [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 92.86% / 新版 92.86%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "0055d784",
      "incomplete_value": false,
      "site": "0055d790",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c6c000:8"
          ],
          [
            "leaf",
            "const:c0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0055d464",
      "incomplete_value": false,
      "site": "0055d470",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c6b000:8"
          ],
          [
            "leaf",
            "const:f0:8"
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
      "0055d790",
      "DATA",
      [
        "storage",
        "00c6b0f0",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "0055d790",
      "DATA",
      [
        "storage",
        "00c6c0c0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 0055d458 ["INT_ADD", "register:40f0:8", ["const:55d458:8", "const:4:8"]]
- 0055d458 ["CALL", null, ["callee:00c58f30:8"]]
+ 0055d778 ["INT_ADD", "register:40f0:8", ["const:55d778:8", "const:4:8"]]
+ 0055d778 ["CALL", null, ["callee:00c58f30:8"]]
- 0055d460 ["COPY", "register:4040:8", ["const:c6b000:8"]]
+ 0055d780 ["COPY", "register:4040:8", ["const:c6c000:8"]]
- 0055d464 ["COPY", "tmp:0:8", ["const:f0:8"]]
- 0055d464 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 0055d464 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 0055d464 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 0055d784 ["COPY", "tmp:0:8", ["const:c0:8"]]
+ 0055d784 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 0055d784 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 0055d784 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-f15b8ff2038c1530afac3e69ccae57f4"></a>

### [`0055d4bc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0055d/0055d4bc.md) → [`0055d7dc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0055d/0055d7dc.md) FUN_0055d7dc

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57f70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f70.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c58f40`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f40.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 50.00% / 新版 50.00%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "0055d7e0",
      "incomplete_value": false,
      "site": "0055d7e4",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c6c000:8"
          ],
          [
            "leaf",
            "const:30:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0055d4c0",
      "incomplete_value": false,
      "site": "0055d4c4",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c6b000:8"
          ],
          [
            "leaf",
            "const:60:8"
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
      "0055d7e4",
      "DATA",
      [
        "storage",
        "00c6b060",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "0055d7e4",
      "DATA",
      [
        "storage",
        "00c6c030",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 0055d4bc ["COPY", "register:4040:8", ["const:c6b000:8"]]
+ 0055d7dc ["COPY", "register:4040:8", ["const:c6c000:8"]]
- 0055d4c0 ["COPY", "tmp:0:8", ["const:60:8"]]
- 0055d4c0 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 0055d4c0 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 0055d4c0 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 0055d7e0 ["COPY", "tmp:0:8", ["const:30:8"]]
+ 0055d7e0 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 0055d7e0 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 0055d7e0 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-b4ba9570e52ab069291668b07993759b"></a>

### [`0055d4cc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0055d/0055d4cc.md) → [`0055d7ec`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0055d/0055d7ec.md) FUN_0055d7ec

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c57f70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f70.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c58f40`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f40.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 83.33% / 新版 83.33%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "0055d7fc",
      "incomplete_value": false,
      "site": "0055d804",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c6c000:8"
          ],
          [
            "leaf",
            "const:30:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0055d4dc",
      "incomplete_value": false,
      "site": "0055d4e4",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c6b000:8"
          ],
          [
            "leaf",
            "const:60:8"
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
      "0055d804",
      "DATA",
      [
        "storage",
        "00c6b060",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "0055d804",
      "DATA",
      [
        "storage",
        "00c6c030",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 0055d4d8 ["COPY", "register:4040:8", ["const:c6b000:8"]]
+ 0055d7f8 ["COPY", "register:4040:8", ["const:c6c000:8"]]
- 0055d4dc ["COPY", "tmp:0:8", ["const:60:8"]]
- 0055d4dc ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 0055d4dc ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 0055d4dc ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 0055d7fc ["COPY", "tmp:0:8", ["const:30:8"]]
+ 0055d7fc ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 0055d7fc ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 0055d7fc ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 0055d4e8 ["INT_ADD", "register:40f0:8", ["const:55d4e8:8", "const:4:8"]]
- 0055d4e8 ["CALL", null, ["callee:00c58f40:8"]]
+ 0055d808 ["INT_ADD", "register:40f0:8", ["const:55d808:8", "const:4:8"]]
+ 0055d808 ["CALL", null, ["callee:00c58f40:8"]]
~~~


<a id="compare-7168d0bad9a1c0da2a78f3b69cd88a44"></a>

### [`0055d508`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0055d/0055d508.md) → [`0055d828`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0055d/0055d828.md) FUN_0055d828

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`0055cb20`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0055c/0055cb20.md) · 呼出先 1件 [`0055df40`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0055d/0055df40.md)
- 新版 呼出元 1件 [`0055ce40`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0055c/0055ce40.md) · 呼出先 1件 [`0055e260`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0055e/0055e260.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 94.12% / 新版 94.12%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "0055d844",
      "incomplete_value": true,
      "site": "0055d848",
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
            "const:80:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0055d524",
      "incomplete_value": true,
      "site": "0055d528",
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
            "const:b0:8"
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
      "0055d848",
      "DATA",
      [
        "storage",
        "00c6b0b0",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "0055d848",
      "DATA",
      [
        "storage",
        "00c6c080",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 0055d520 ["COPY", "register:4040:8", ["const:c6b000:8"]]
+ 0055d840 ["COPY", "register:4040:8", ["const:c6c000:8"]]
- 0055d524 ["COPY", "tmp:0:8", ["const:b0:8"]]
- 0055d524 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 0055d524 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 0055d524 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 0055d844 ["COPY", "tmp:0:8", ["const:80:8"]]
+ 0055d844 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 0055d844 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 0055d844 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 0055d578 ["INT_ADD", "register:40f0:8", ["const:55d578:8", "const:4:8"]]
- 0055d578 ["CALL", null, ["callee:0055e260:8"]]
+ 0055d898 ["INT_ADD", "register:40f0:8", ["const:55d898:8", "const:4:8"]]
+ 0055d898 ["CALL", null, ["callee:0055e260:8"]]
~~~


<a id="compare-70d852e2edc387ecdd544e7d38c92212"></a>

### [`0055e4bc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0055e/0055e4bc.md) → [`0055e7dc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0055e/0055e7dc.md) FUN_0055e7dc

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57f70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f70.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c58f40`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f40.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 50.00% / 新版 50.00%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "0055e7e0",
      "incomplete_value": false,
      "site": "0055e7e4",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c6c000:8"
          ],
          [
            "leaf",
            "const:c0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0055e4c0",
      "incomplete_value": false,
      "site": "0055e4c4",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c6b000:8"
          ],
          [
            "leaf",
            "const:f0:8"
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
      "0055e7e4",
      "DATA",
      [
        "storage",
        "00c6b0f0",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "0055e7e4",
      "DATA",
      [
        "storage",
        "00c6c0c0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 0055e4bc ["COPY", "register:4040:8", ["const:c6b000:8"]]
+ 0055e7dc ["COPY", "register:4040:8", ["const:c6c000:8"]]
- 0055e4c0 ["COPY", "tmp:0:8", ["const:f0:8"]]
- 0055e4c0 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 0055e4c0 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 0055e4c0 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 0055e7e0 ["COPY", "tmp:0:8", ["const:c0:8"]]
+ 0055e7e0 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 0055e7e0 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 0055e7e0 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-03737e368460763e6937285a64a3dbe5"></a>

### [`0055e4cc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0055e/0055e4cc.md) → [`0055e7ec`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0055e/0055e7ec.md) FUN_0055e7ec

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c57f70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f70.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c58f40`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f40.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 83.33% / 新版 83.33%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "0055e7fc",
      "incomplete_value": false,
      "site": "0055e804",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c6c000:8"
          ],
          [
            "leaf",
            "const:c0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0055e4dc",
      "incomplete_value": false,
      "site": "0055e4e4",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c6b000:8"
          ],
          [
            "leaf",
            "const:f0:8"
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
      "0055e804",
      "DATA",
      [
        "storage",
        "00c6b0f0",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "0055e804",
      "DATA",
      [
        "storage",
        "00c6c0c0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 0055e4d8 ["COPY", "register:4040:8", ["const:c6b000:8"]]
+ 0055e7f8 ["COPY", "register:4040:8", ["const:c6c000:8"]]
- 0055e4dc ["COPY", "tmp:0:8", ["const:f0:8"]]
- 0055e4dc ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 0055e4dc ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 0055e4dc ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 0055e7fc ["COPY", "tmp:0:8", ["const:c0:8"]]
+ 0055e7fc ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 0055e7fc ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 0055e7fc ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 0055e4e8 ["INT_ADD", "register:40f0:8", ["const:55e4e8:8", "const:4:8"]]
- 0055e4e8 ["CALL", null, ["callee:00c58f40:8"]]
+ 0055e808 ["INT_ADD", "register:40f0:8", ["const:55e808:8", "const:4:8"]]
+ 0055e808 ["CALL", null, ["callee:00c58f40:8"]]
~~~


<a id="compare-50d1e8c0a635b2826e8ff90b00a78aed"></a>

### [`0055e4fc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0055e/0055e4fc.md) → [`0055e81c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0055e/0055e81c.md) FUN_0055e81c

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 3件 [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 0件  · 呼出先 3件 [`00c54d90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d90.md) [`00c58f20`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f20.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 93.75% / 新版 93.75%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "0055e834",
      "incomplete_value": false,
      "site": "0055e838",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c6b000:8"
          ],
          [
            "leaf",
            "const:ff0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0055e514",
      "incomplete_value": false,
      "site": "0055e518",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c6b000:8"
          ],
          [
            "leaf",
            "const:20:8"
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
      "0055e838",
      "DATA",
      [
        "storage",
        "00c6b020",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "0055e838",
      "DATA",
      [
        "storage",
        "00c6bff0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 0055e514 ["COPY", "tmp:0:8", ["const:20:8"]]
- 0055e514 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 0055e514 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 0055e514 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 0055e834 ["COPY", "tmp:0:8", ["const:ff0:8"]]
+ 0055e834 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 0055e834 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 0055e834 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 0055e528 ["INT_ADD", "register:40f0:8", ["const:55e528:8", "const:4:8"]]
- 0055e528 ["CALL", null, ["callee:00c54d90:8"]]
+ 0055e848 ["INT_ADD", "register:40f0:8", ["const:55e848:8", "const:4:8"]]
+ 0055e848 ["CALL", null, ["callee:00c54d90:8"]]
- 0055e53c ["COPY", "register:0:8", ["register:4040:8"]]
- 0055e53c ["INT_ADD", "register:40f0:8", ["const:55e53c:8", "const:4:8"]]
- 0055e53c ["CALLIND", null, ["register:0:8"]]
+ 0055e85c ["COPY", "register:0:8", ["register:4040:8"]]
+ 0055e85c ["INT_ADD", "register:40f0:8", ["const:55e85c:8", "const:4:8"]]
+ 0055e85c ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-b3da6e9b323379094bdfe681cc005c6c"></a>

### [`0055e5ec`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0055e/0055e5ec.md) → [`0055e90c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0055e/0055e90c.md) FUN_0055e90c

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 6件 [`00551f4c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00551/00551f4c.md) [`00551fbc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00551/00551fbc.md) [`0055c424`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0055c/0055c424.md) [`0055c4c4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0055c/0055c4c4.md) [`0055c56c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0055c/0055c56c.md) · 呼出先 2件 [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md)
- 新版 呼出元 6件 [`0055226c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00552/0055226c.md) [`005522dc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00552/005522dc.md) [`0055c744`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0055c/0055c744.md) [`0055c7e4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0055c/0055c7e4.md) [`0055c88c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0055c/0055c88c.md) · 呼出先 2件 [`00c54d90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d90.md) [`00c58f20`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f20.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 91.30% / 新版 91.30%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "0055e920",
      "incomplete_value": false,
      "site": "0055e924",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c6c000:8"
          ],
          [
            "leaf",
            "const:110:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0055e600",
      "incomplete_value": false,
      "site": "0055e604",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c6b000:8"
          ],
          [
            "leaf",
            "const:140:8"
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
      "0055e924",
      "DATA",
      [
        "storage",
        "00c6b140",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "0055e924",
      "DATA",
      [
        "storage",
        "00c6c110",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 0055e5fc ["COPY", "register:4040:8", ["const:c6b000:8"]]
+ 0055e91c ["COPY", "register:4040:8", ["const:c6c000:8"]]
- 0055e600 ["COPY", "tmp:0:8", ["const:140:8"]]
- 0055e600 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 0055e600 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 0055e600 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 0055e920 ["COPY", "tmp:0:8", ["const:110:8"]]
+ 0055e920 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 0055e920 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 0055e920 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 0055e614 ["INT_ADD", "register:40f0:8", ["const:55e614:8", "const:4:8"]]
- 0055e614 ["CALL", null, ["callee:00c54d90:8"]]
+ 0055e934 ["INT_ADD", "register:40f0:8", ["const:55e934:8", "const:4:8"]]
+ 0055e934 ["CALL", null, ["callee:00c54d90:8"]]
~~~


<a id="compare-92796104c911aa45a98cd098bd5b4bae"></a>

### [`0055ed48`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0055e/0055ed48.md) → [`0055f068`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0055f/0055f068.md) FUN_0055f068

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`0048d464`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048d/0048d464.md) · 呼出先 7件 [`005814d4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00581/005814d4.md) [`00597658`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00597/00597658.md) [`00c53d70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53d70.md) [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md)
- 新版 呼出元 1件 [`0048d784`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0048d/0048d784.md) · 呼出先 7件 [`005817f4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00581/005817f4.md) [`00597978`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00597/00597978.md) [`00c54d60`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d60.md) [`00c54d90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d90.md) [`00c58f20`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f20.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 97.00% / 新版 97.00%

優先判定に残った影響 `store_value` 3件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "0055f25c",
      "incomplete_value": false,
      "site": "0055f264",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c6c000:8"
          ],
          [
            "leaf",
            "const:1e8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0055ef3c",
      "incomplete_value": false,
      "site": "0055ef44",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c6b000:8"
          ],
          [
            "leaf",
            "const:218:8"
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
      "definition_site": "0055f288",
      "incomplete_value": false,
      "site": "0055f288",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c6c000:8"
          ],
          [
            "leaf",
            "const:170:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0055ef68",
      "incomplete_value": false,
      "site": "0055ef68",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c6b000:8"
          ],
          [
            "leaf",
            "const:1a0:8"
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
      "definition_site": "0055f2a4",
      "incomplete_value": false,
      "site": "0055f2a4",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c6c000:8"
          ],
          [
            "leaf",
            "const:170:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0055ef84",
      "incomplete_value": false,
      "site": "0055ef84",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c6b000:8"
          ],
          [
            "leaf",
            "const:1a0:8"
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
      "0055f264",
      "DATA",
      [
        "storage",
        "00c6b218",
        null,
        "undefined *"
      ]
    ],
    [
      "0055f288",
      "DATA",
      [
        "storage",
        "00c6b1a0",
        null,
        "undefined *"
      ]
    ],
    [
      "0055f2a4",
      "DATA",
      [
        "storage",
        "00c6b1a0",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "0055f264",
      "DATA",
      [
        "storage",
        "00c6c1e8",
        null,
        "undefined *"
      ]
    ],
    [
      "0055f288",
      "DATA",
      [
        "storage",
        "00c6c170",
        null,
        "undefined *"
      ]
    ],
    [
      "0055f2a4",
      "DATA",
      [
        "storage",
        "00c6c170",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 0055ed94 ["COPY", "register:0:8", ["register:4040:8"]]
- 0055ed94 ["INT_ADD", "register:40f0:8", ["const:55ed94:8", "const:4:8"]]
- 0055ed94 ["CALLIND", null, ["register:0:8"]]
+ 0055f0b4 ["COPY", "register:0:8", ["register:4040:8"]]
+ 0055f0b4 ["INT_ADD", "register:40f0:8", ["const:55f0b4:8", "const:4:8"]]
+ 0055f0b4 ["CALLIND", null, ["register:0:8"]]
- 0055edac ["INT_ADD", "register:40f0:8", ["const:55edac:8", "const:4:8"]]
- 0055edac ["CALL", null, ["callee:005817f4:8"]]
+ 0055f0cc ["INT_ADD", "register:40f0:8", ["const:55f0cc:8", "const:4:8"]]
+ 0055f0cc ["CALL", null, ["callee:005817f4:8"]]
- 0055edc8 ["COPY", "register:0:8", ["register:4048:8"]]
- 0055edc8 ["INT_ADD", "register:40f0:8", ["const:55edc8:8", "const:4:8"]]
- 0055edc8 ["CALLIND", null, ["register:0:8"]]
+ 0055f0e8 ["COPY", "register:0:8", ["register:4048:8"]]
+ 0055f0e8 ["INT_ADD", "register:40f0:8", ["const:55f0e8:8", "const:4:8"]]
+ 0055f0e8 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-5589c1a08092026b913e2b0d8156523d"></a>

### [`0055f388`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0055f/0055f388.md) → [`0055f6a8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0055f/0055f6a8.md) FUN_0055f6a8

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c54d90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d90.md) [`00c58f20`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f20.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 94.87% / 新版 94.87%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "0055f6c0",
      "incomplete_value": false,
      "site": "0055f6c4",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c6c000:8"
          ],
          [
            "leaf",
            "const:170:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0055f3a0",
      "incomplete_value": false,
      "site": "0055f3a4",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c6b000:8"
          ],
          [
            "leaf",
            "const:1a0:8"
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
      "0055f6c4",
      "DATA",
      [
        "storage",
        "00c6b1a0",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "0055f6c4",
      "DATA",
      [
        "storage",
        "00c6c170",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 0055f39c ["COPY", "register:4040:8", ["const:c6b000:8"]]
+ 0055f6bc ["COPY", "register:4040:8", ["const:c6c000:8"]]
- 0055f3a0 ["COPY", "tmp:0:8", ["const:1a0:8"]]
- 0055f3a0 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 0055f3a0 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 0055f3a0 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 0055f6c0 ["COPY", "tmp:0:8", ["const:170:8"]]
+ 0055f6c0 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 0055f6c0 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 0055f6c0 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 0055f3b4 ["INT_ADD", "register:40f0:8", ["const:55f3b4:8", "const:4:8"]]
- 0055f3b4 ["CALL", null, ["callee:00c54d90:8"]]
+ 0055f6d4 ["INT_ADD", "register:40f0:8", ["const:55f6d4:8", "const:4:8"]]
+ 0055f6d4 ["CALL", null, ["callee:00c54d90:8"]]
~~~


<a id="compare-23f36eba646ce1b65c4ea8ae0f5fc0a5"></a>

### [`0055f424`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0055f/0055f424.md) → [`0055f744`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0055f/0055f744.md) FUN_0055f744

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 3件 [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 0件  · 呼出先 3件 [`00c54d90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d90.md) [`00c58f20`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f20.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 94.29% / 新版 94.29%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "0055f75c",
      "incomplete_value": false,
      "site": "0055f760",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c6c000:8"
          ],
          [
            "leaf",
            "const:170:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0055f43c",
      "incomplete_value": false,
      "site": "0055f440",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c6b000:8"
          ],
          [
            "leaf",
            "const:1a0:8"
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
      "0055f760",
      "DATA",
      [
        "storage",
        "00c6b1a0",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "0055f760",
      "DATA",
      [
        "storage",
        "00c6c170",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 0055f438 ["COPY", "register:4040:8", ["const:c6b000:8"]]
+ 0055f758 ["COPY", "register:4040:8", ["const:c6c000:8"]]
- 0055f43c ["COPY", "tmp:0:8", ["const:1a0:8"]]
- 0055f43c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 0055f43c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 0055f43c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 0055f75c ["COPY", "tmp:0:8", ["const:170:8"]]
+ 0055f75c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 0055f75c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 0055f75c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 0055f450 ["INT_ADD", "register:40f0:8", ["const:55f450:8", "const:4:8"]]
- 0055f450 ["CALL", null, ["callee:00c54d90:8"]]
+ 0055f770 ["INT_ADD", "register:40f0:8", ["const:55f770:8", "const:4:8"]]
+ 0055f770 ["CALL", null, ["callee:00c54d90:8"]]
~~~


<a id="compare-386fe2be9f05bd7c887d8babdfb662b9"></a>

### [`0055f4b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0055f/0055f4b0.md) → [`0055f7d0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0055f/0055f7d0.md) FUN_0055f7d0

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57f70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f70.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c58f40`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f40.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 50.00% / 新版 50.00%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "0055f7d4",
      "incomplete_value": false,
      "site": "0055f7d8",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c6c000:8"
          ],
          [
            "leaf",
            "const:1e8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0055f4b4",
      "incomplete_value": false,
      "site": "0055f4b8",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c6b000:8"
          ],
          [
            "leaf",
            "const:218:8"
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
      "0055f7d8",
      "DATA",
      [
        "storage",
        "00c6b218",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "0055f7d8",
      "DATA",
      [
        "storage",
        "00c6c1e8",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 0055f4b0 ["COPY", "register:4040:8", ["const:c6b000:8"]]
+ 0055f7d0 ["COPY", "register:4040:8", ["const:c6c000:8"]]
- 0055f4b4 ["COPY", "tmp:0:8", ["const:218:8"]]
- 0055f4b4 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 0055f4b4 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 0055f4b4 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 0055f7d4 ["COPY", "tmp:0:8", ["const:1e8:8"]]
+ 0055f7d4 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 0055f7d4 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 0055f7d4 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-b7cf0fa82c522ebd1a160a0218494a02"></a>

### [`0055f4c0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0055f/0055f4c0.md) → [`0055f7e0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0055f/0055f7e0.md) FUN_0055f7e0

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c57f70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f70.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c58f40`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f40.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 83.33% / 新版 83.33%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "0055f7f0",
      "incomplete_value": false,
      "site": "0055f7f8",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c6c000:8"
          ],
          [
            "leaf",
            "const:1e8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0055f4d0",
      "incomplete_value": false,
      "site": "0055f4d8",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c6b000:8"
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
      "0055f7f8",
      "DATA",
      [
        "storage",
        "00c6b218",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "0055f7f8",
      "DATA",
      [
        "storage",
        "00c6c1e8",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 0055f4cc ["COPY", "register:4040:8", ["const:c6b000:8"]]
+ 0055f7ec ["COPY", "register:4040:8", ["const:c6c000:8"]]
- 0055f4d0 ["COPY", "tmp:0:8", ["const:218:8"]]
- 0055f4d0 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 0055f4d0 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 0055f4d0 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 0055f7f0 ["COPY", "tmp:0:8", ["const:1e8:8"]]
+ 0055f7f0 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 0055f7f0 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 0055f7f0 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 0055f4dc ["INT_ADD", "register:40f0:8", ["const:55f4dc:8", "const:4:8"]]
- 0055f4dc ["CALL", null, ["callee:00c58f40:8"]]
+ 0055f7fc ["INT_ADD", "register:40f0:8", ["const:55f7fc:8", "const:4:8"]]
+ 0055f7fc ["CALL", null, ["callee:00c58f40:8"]]
~~~


<a id="compare-655adc251a2b48e7ceb1f1736fa2ffd4"></a>

### [`0055f504`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0055f/0055f504.md) → [`0055f824`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0055f/0055f824.md) FUN_0055f824

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 18件 [`0048039c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00480/0048039c.md) [`00480430`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00480/00480430.md) [`004804c4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00480/004804c4.md) [`00480668`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00480/00480668.md) [`004806fc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00480/004806fc.md) · 呼出先 2件 [`00c57f20`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f20.md) [`00c57f40`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f40.md)
- 新版 呼出元 18件 [`004806bc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00480/004806bc.md) [`00480750`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00480/00480750.md) [`004807e4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00480/004807e4.md) [`00480988`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00480/00480988.md) [`00480a1c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00480/00480a1c.md) · 呼出先 2件 [`00c58ef0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58ef0.md) [`00c58f10`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f10.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies, operation_sequence, return_value_candidate, store_destination

命令の説明率　旧版 68.18% / 新版 68.18%

優先判定に残った影響 `call_argument_candidate` 2件, `return_value_candidate` 1件, `store_destination` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_destination",
    "new": {
      "definition_site": "0055f86c",
      "incomplete_value": true,
      "site": "0055f86c",
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
            "const:d34:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0055f54c",
      "incomplete_value": true,
      "site": "0055f54c",
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
            "const:d74:8"
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
      "definition_site": "0055f850",
      "incomplete_value": false,
      "site": "0055f854",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:ca6000:8"
          ],
          [
            "leaf",
            "const:d38:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0055f530",
      "incomplete_value": false,
      "site": "0055f534",
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
    "ordinal": 0,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "0055f868",
      "incomplete_value": false,
      "site": "0055f870",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:ca6000:8"
          ],
          [
            "leaf",
            "const:d38:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0055f548",
      "incomplete_value": false,
      "site": "0055f550",
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
      "0055f834",
      "READ",
      [
        "storage",
        "00ca5d78",
        null,
        "undefined1"
      ]
    ],
    [
      "0055f840",
      "READ",
      [
        "storage",
        "00ca5d74",
        null,
        "undefined1"
      ]
    ],
    [
      "0055f850",
      "PARAM",
      [
        "storage",
        "00ca5d78",
        null,
        "undefined1"
      ]
    ]
  ],
  "added": [
    [
      "0055f834",
      "READ",
      [
        "storage",
        "00ca6d38",
        null,
        "undefined1"
      ]
    ],
    [
      "0055f840",
      "READ",
      [
        "storage",
        "00ca6d34",
        null,
        "undefined1"
      ]
    ],
    [
      "0055f850",
      "PARAM",
      [
        "storage",
        "00ca6d38",
        null,
        "undefined1"
      ]
    ]
  ]
}
~~~


~~~diff
- 0055f534 ["INT_ADD", "register:40f0:8", ["const:55f534:8", "const:4:8"]]
- 0055f534 ["CALL", null, ["callee:00c58ef0:8"]]
+ 0055f854 ["INT_ADD", "register:40f0:8", ["const:55f854:8", "const:4:8"]]
+ 0055f854 ["CALL", null, ["callee:00c58ef0:8"]]
- 0055f54c ["COPY", "tmp:0:4", ["register:4048:4"]]
- 0055f54c ["INT_ADD", "tmp:1:8", ["register:4040:8", "const:d74:8"]]
- 0055f54c ["STORE", null, ["const:1b1:8", "tmp:1:8", "tmp:0:1"]]
+ 0055f86c ["COPY", "tmp:0:4", ["register:4048:4"]]
+ 0055f86c ["INT_ADD", "tmp:1:8", ["register:4040:8", "const:d34:8"]]
+ 0055f86c ["STORE", null, ["const:1b1:8", "tmp:1:8", "tmp:0:1"]]
- 0055f550 ["INT_ADD", "register:40f0:8", ["const:55f550:8", "const:4:8"]]
- 0055f550 ["CALL", null, ["callee:00c58f10:8"]]
+ 0055f870 ["INT_ADD", "register:40f0:8", ["const:55f870:8", "const:4:8"]]
+ 0055f870 ["CALL", null, ["callee:00c58f10:8"]]
~~~


<a id="compare-8075714e57725d278911f159ca64ba30"></a>

### [`0055f5b8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0055f/0055f5b8.md) → [`0055f8d8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0055f/0055f8d8.md) FUN_0055f8d8

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 2件 [`005610f4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00561/005610f4.md) [`00a9f48c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a9f/00a9f48c.md) · 呼出先 5件 [`00560400`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00560/00560400.md) [`005604a8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00560/005604a8.md) [`00c57f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f00.md) [`00c57f20`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f20.md) [`00c57f40`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f40.md)
- 新版 呼出元 2件 [`00561414`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00561/00561414.md) [`00aa0480`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00aa0/00aa0480.md) · 呼出先 5件 [`00560720`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00560/00560720.md) [`005607c8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00560/005607c8.md) [`00c58ed0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58ed0.md) [`00c58ef0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58ef0.md) [`00c58f10`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f10.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 79.41% / 新版 79.41%

優先判定に残った影響 `call_argument_candidate` 4件

アドレスに依存する影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "0055f91c",
      "incomplete_value": true,
      "site": "0055f920",
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
            "const:d50:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0055f5fc",
      "incomplete_value": true,
      "site": "0055f600",
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
            "const:d90:8"
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
      "definition_site": "0055f938",
      "incomplete_value": false,
      "site": "0055f94c",
      "value": [
        "leaf",
        "const:5607c8:8"
      ]
    },
    "old": {
      "definition_site": "0055f618",
      "incomplete_value": false,
      "site": "0055f62c",
      "value": [
        "leaf",
        "const:5604a8:8"
      ]
    },
    "ordinal": 2,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "0055f940",
      "incomplete_value": false,
      "site": "0055f94c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:ca6000:8"
          ],
          [
            "leaf",
            "const:d40:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0055f620",
      "incomplete_value": false,
      "site": "0055f62c",
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
            "const:d80:8"
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
      "0055f8f0",
      "READ",
      [
        "storage",
        "00ca5d90",
        null,
        "undefined1"
      ]
    ],
    [
      "0055f8fc",
      "READ",
      [
        "storage",
        "00ca5d80",
        null,
        "undefined8"
      ]
    ],
    [
      "0055f91c",
      "PARAM",
      [
        "storage",
        "00ca5d90",
        null,
        "undefined1"
      ]
    ]
  ],
  "added": [
    [
      "0055f8f0",
      "READ",
      [
        "storage",
        "00ca6d50",
        null,
        "undefined1"
      ]
    ],
    [
      "0055f8fc",
      "READ",
      [
        "storage",
        "00ca6d40",
        null,
        "undefined8"
      ]
    ],
    [
      "0055f91c",
      "PARAM",
      [
        "storage",
        "00ca6d50",
        null,
        "undefined1"
      ]
    ]
  ]
}
~~~


~~~diff
- 0055f600 ["INT_ADD", "register:40f0:8", ["const:55f600:8", "const:4:8"]]
- 0055f600 ["CALL", null, ["callee:00c58ef0:8"]]
+ 0055f920 ["INT_ADD", "register:40f0:8", ["const:55f920:8", "const:4:8"]]
+ 0055f920 ["CALL", null, ["callee:00c58ef0:8"]]
- 0055f62c ["INT_ADD", "register:40f0:8", ["const:55f62c:8", "const:4:8"]]
- 0055f62c ["CALL", null, ["callee:00c58ed0:8"]]
+ 0055f94c ["INT_ADD", "register:40f0:8", ["const:55f94c:8", "const:4:8"]]
+ 0055f94c ["CALL", null, ["callee:00c58ed0:8"]]
- 0055f638 ["INT_ADD", "register:40f0:8", ["const:55f638:8", "const:4:8"]]
- 0055f638 ["CALL", null, ["callee:00c58f10:8"]]
+ 0055f958 ["INT_ADD", "register:40f0:8", ["const:55f958:8", "const:4:8"]]
+ 0055f958 ["CALL", null, ["callee:00c58f10:8"]]
~~~


<a id="compare-fdd906007ba5925a8d6ecce62ad606e4"></a>

### [`0055f658`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0055f/0055f658.md) → [`0055f978`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0055f/0055f978.md) FUN_0055f978

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00a75e1c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a75/00a75e1c.md) · 呼出先 5件 [`00560400`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00560/00560400.md) [`005604a8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00560/005604a8.md) [`00c57f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f00.md) [`00c57f20`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f20.md) [`00c57f40`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f40.md)
- 新版 呼出元 1件 [`00a76e10`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a76/00a76e10.md) · 呼出先 5件 [`00560720`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00560/00560720.md) [`005607c8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00560/005607c8.md) [`00c58ed0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58ed0.md) [`00c58ef0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58ef0.md) [`00c58f10`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f10.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 69.44% / 新版 69.44%

優先判定に残った影響 `call_argument_candidate` 4件

アドレスに依存する影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "0055f9c4",
      "incomplete_value": false,
      "site": "0055f9c8",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:ca6000:8"
          ],
          [
            "leaf",
            "const:d50:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0055f6a4",
      "incomplete_value": false,
      "site": "0055f6a8",
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
            "const:d90:8"
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
      "definition_site": "0055f9e0",
      "incomplete_value": false,
      "site": "0055f9f4",
      "value": [
        "leaf",
        "const:5607c8:8"
      ]
    },
    "old": {
      "definition_site": "0055f6c0",
      "incomplete_value": false,
      "site": "0055f6d4",
      "value": [
        "leaf",
        "const:5604a8:8"
      ]
    },
    "ordinal": 2,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "0055f9e8",
      "incomplete_value": false,
      "site": "0055f9f4",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:ca6000:8"
          ],
          [
            "leaf",
            "const:d40:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0055f6c8",
      "incomplete_value": false,
      "site": "0055f6d4",
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
            "const:d80:8"
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
      "0055f990",
      "READ",
      [
        "storage",
        "00ca5d90",
        null,
        "undefined1"
      ]
    ],
    [
      "0055f9a4",
      "READ",
      [
        "storage",
        "00ca5d80",
        null,
        "undefined8"
      ]
    ],
    [
      "0055f9c4",
      "PARAM",
      [
        "storage",
        "00ca5d90",
        null,
        "undefined1"
      ]
    ]
  ],
  "added": [
    [
      "0055f990",
      "READ",
      [
        "storage",
        "00ca6d50",
        null,
        "undefined1"
      ]
    ],
    [
      "0055f9a4",
      "READ",
      [
        "storage",
        "00ca6d40",
        null,
        "undefined8"
      ]
    ],
    [
      "0055f9c4",
      "PARAM",
      [
        "storage",
        "00ca6d50",
        null,
        "undefined1"
      ]
    ]
  ]
}
~~~


~~~diff
- 0055f6a8 ["INT_ADD", "register:40f0:8", ["const:55f6a8:8", "const:4:8"]]
- 0055f6a8 ["CALL", null, ["callee:00c58ef0:8"]]
+ 0055f9c8 ["INT_ADD", "register:40f0:8", ["const:55f9c8:8", "const:4:8"]]
+ 0055f9c8 ["CALL", null, ["callee:00c58ef0:8"]]
- 0055f6d4 ["INT_ADD", "register:40f0:8", ["const:55f6d4:8", "const:4:8"]]
- 0055f6d4 ["CALL", null, ["callee:00c58ed0:8"]]
+ 0055f9f4 ["INT_ADD", "register:40f0:8", ["const:55f9f4:8", "const:4:8"]]
+ 0055f9f4 ["CALL", null, ["callee:00c58ed0:8"]]
- 0055f6e0 ["INT_ADD", "register:40f0:8", ["const:55f6e0:8", "const:4:8"]]
- 0055f6e0 ["CALL", null, ["callee:00c58f10:8"]]
+ 0055fa00 ["INT_ADD", "register:40f0:8", ["const:55fa00:8", "const:4:8"]]
+ 0055fa00 ["CALL", null, ["callee:00c58f10:8"]]
~~~


<a id="compare-d5395325b833fd0ffaba13d2a776ae7e"></a>

### [`0055f708`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0055f/0055f708.md) → [`0055fa28`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0055f/0055fa28.md) FUN_0055fa28

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 9件 [`0055f8a8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0055f/0055f8a8.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md) [`00c58070`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58070.md) [`00c58080`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58080.md)
- 新版 呼出元 0件  · 呼出先 9件 [`0055fbc8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0055f/0055fbc8.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md) [`00c59040`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59040.md) [`00c59050`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59050.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 93.02% / 新版 93.02%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "0055fad0",
      "incomplete_value": true,
      "site": "0055fad4",
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
      "definition_site": "0055f7b0",
      "incomplete_value": true,
      "site": "0055f7b4",
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
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "0055fa58",
      "READ",
      [
        "storage",
        "00c9ad58",
        null,
        "pointer"
      ]
    ],
    [
      "0055fa60",
      "READ",
      [
        "storage",
        "00c9ac88",
        null,
        "pointer"
      ]
    ],
    [
      "0055fa74",
      "READ",
      [
        "storage",
        "00c932d8",
        null,
        "pointer __((offset(0x18)))"
      ]
    ]
  ],
  "added": [
    [
      "0055fa58",
      "READ",
      [
        "storage",
        "00c9bd28",
        null,
        "pointer"
      ]
    ],
    [
      "0055fa60",
      "READ",
      [
        "storage",
        "00c9bc58",
        null,
        "pointer"
      ]
    ],
    [
      "0055fa74",
      "READ",
      [
        "storage",
        "00c942a8",
        null,
        "pointer __((offset(0x18)))"
      ]
    ]
  ]
}
~~~


~~~diff
- 0055f72c ["COPY", "register:40c8:8", ["const:c9a000:8"]]
+ 0055fa4c ["COPY", "register:40c8:8", ["const:c9b000:8"]]
- 0055f730 ["COPY", "register:40c0:8", ["const:c9a000:8"]]
+ 0055fa50 ["COPY", "register:40c0:8", ["const:c9b000:8"]]
- 0055f738 ["INT_ADD", "tmp:0:8", ["register:40c8:8", "const:d58:8"]]
- 0055f738 ["LOAD", "register:40c8:8", ["const:1b1:8", "tmp:0:8"]]
+ 0055fa58 ["INT_ADD", "tmp:0:8", ["register:40c8:8", "const:d28:8"]]
+ 0055fa58 ["LOAD", "register:40c8:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-c116348d0992a82d750c0daabbf6a963"></a>

### [`0055f8a8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0055f/0055f8a8.md) → [`0055fbc8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0055f/0055fbc8.md) FUN_0055fbc8

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`0055f708`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0055f/0055f708.md) · 呼出先 6件 [`00459510`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00459/00459510.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md) [`00c582d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c582d0.md) [`00c58340`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58340.md) [`00c58350`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58350.md)
- 新版 呼出元 1件 [`0055fa28`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0055f/0055fa28.md) · 呼出先 6件 [`00459830`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00459/00459830.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md) [`00c592a0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c592a0.md) [`00c59310`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59310.md) [`00c59320`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59320.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 97.28% / 新版 97.28%

優先判定に残った影響 `call_argument_candidate` 4件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "0055fc34",
      "incomplete_value": true,
      "site": "0055fc38",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:cd0:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0055f914",
      "incomplete_value": true,
      "site": "0055f918",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:d00:8"
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
    "new": {
      "definition_site": "0055fc90",
      "incomplete_value": true,
      "site": "0055fc94",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:cd0:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0055f970",
      "incomplete_value": true,
      "site": "0055f974",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:d00:8"
              ]
            ]
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
      "definition_site": "0055fce0",
      "incomplete_value": true,
      "site": "0055fce4",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:cd0:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0055f9c0",
      "incomplete_value": true,
      "site": "0055f9c4",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:d00:8"
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
      "0055fc34",
      "READ",
      [
        "storage",
        "00c9ad00",
        null,
        "pointer"
      ]
    ],
    [
      "0055fc34",
      "PARAM",
      [
        "storage",
        "01127f18",
        "std::__ndk1::ctype<char>::id",
        "undefined8"
      ]
    ],
    [
      "0055fc90",
      "READ",
      [
        "storage",
        "00c9ad00",
        null,
        "pointer"
      ]
    ]
  ],
  "added": [
    [
      "0055fc34",
      "READ",
      [
        "storage",
        "00c9bcd0",
        null,
        "pointer"
      ]
    ],
    [
      "0055fc34",
      "PARAM",
      [
        "storage",
        "01128ed8",
        "std::__ndk1::ctype<char>::id",
        "undefined8"
      ]
    ],
    [
      "0055fc90",
      "READ",
      [
        "storage",
        "00c9bcd0",
        null,
        "pointer"
      ]
    ]
  ]
}
~~~


~~~diff
- 0055f918 ["INT_ADD", "register:40f0:8", ["const:55f918:8", "const:4:8"]]
- 0055f918 ["CALL", null, ["callee:00c59320:8"]]
+ 0055fc38 ["INT_ADD", "register:40f0:8", ["const:55fc38:8", "const:4:8"]]
+ 0055fc38 ["CALL", null, ["callee:00c59320:8"]]
- 0055f974 ["INT_ADD", "register:40f0:8", ["const:55f974:8", "const:4:8"]]
- 0055f974 ["CALL", null, ["callee:00c59320:8"]]
+ 0055fc94 ["INT_ADD", "register:40f0:8", ["const:55fc94:8", "const:4:8"]]
+ 0055fc94 ["CALL", null, ["callee:00c59320:8"]]
- 0055f9c4 ["INT_ADD", "register:40f0:8", ["const:55f9c4:8", "const:4:8"]]
- 0055f9c4 ["CALL", null, ["callee:00c59320:8"]]
+ 0055fce4 ["INT_ADD", "register:40f0:8", ["const:55fce4:8", "const:4:8"]]
+ 0055fce4 ["CALL", null, ["callee:00c59320:8"]]
~~~


<a id="compare-70fec05d182bb2c988c5fd38a1c4ecc3"></a>

### [`00560080`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00560/00560080.md) → [`005603a0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00560/005603a0.md) FUN_005603a0

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 2件 [`0055ff98`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0055f/0055ff98.md) [`005977fc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00597/005977fc.md) · 呼出先 4件 [`00548298`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00548/00548298.md) [`00c582b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c582b0.md) [`00c582c0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c582c0.md) [`00c58500`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58500.md)
- 新版 呼出元 2件 [`005602b8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00560/005602b8.md) [`00597b1c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00597/00597b1c.md) · 呼出先 4件 [`005485b8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00548/005485b8.md) [`00c59280`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59280.md) [`00c59290`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59290.md) [`00c594d0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c594d0.md)

変更の種類 constant, operands_and_dependencies, store_destination, store_value

命令の説明率　旧版 80.70% / 新版 80.70%

優先判定に残った影響 `store_destination` 1件, `store_value` 4件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "005603e4",
      "incomplete_value": true,
      "site": "005603e4",
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
      "definition_site": "005600c4",
      "incomplete_value": true,
      "site": "005600c4",
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
    "ordinal": 11,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "005603dc",
      "incomplete_value": true,
      "site": "005603e8",
      "value": [
        "LOAD",
        "8",
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
      "definition_site": "005600bc",
      "incomplete_value": true,
      "site": "005600c8",
      "value": [
        "LOAD",
        "8",
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
    "ordinal": 12,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_destination",
    "new": {
      "definition_site": "005603f4",
      "incomplete_value": true,
      "site": "005603f4",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:4000:8"
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
      "definition_site": "005600d4",
      "incomplete_value": true,
      "site": "005600d4",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:4000:8"
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
      "005603c4",
      "READ",
      [
        "storage",
        "00c9b360",
        null,
        "pointer"
      ]
    ],
    [
      "005603c8",
      "READ",
      [
        "storage",
        "00c9b358",
        null,
        "pointer"
      ]
    ],
    [
      "005603dc",
      "READ",
      [
        "storage",
        "00c93348",
        null,
        "pointer __((offset(0x18)))"
      ]
    ]
  ],
  "added": [
    [
      "005603c4",
      "READ",
      [
        "storage",
        "00c9c330",
        null,
        "pointer"
      ]
    ],
    [
      "005603c8",
      "READ",
      [
        "storage",
        "00c9c328",
        null,
        "pointer"
      ]
    ],
    [
      "005603dc",
      "READ",
      [
        "storage",
        "00c94318",
        null,
        "pointer __((offset(0x18)))"
      ]
    ]
  ]
}
~~~


~~~diff
- 00560098 ["COPY", "register:40c8:8", ["const:c9b000:8"]]
+ 005603b8 ["COPY", "register:40c8:8", ["const:c9c000:8"]]
- 0056009c ["COPY", "register:40c0:8", ["const:c9b000:8"]]
+ 005603bc ["COPY", "register:40c0:8", ["const:c9c000:8"]]
- 005600a4 ["INT_ADD", "tmp:0:8", ["register:40c8:8", "const:360:8"]]
- 005600a4 ["LOAD", "register:40c8:8", ["const:1b1:8", "tmp:0:8"]]
+ 005603c4 ["INT_ADD", "tmp:0:8", ["register:40c8:8", "const:330:8"]]
+ 005603c4 ["LOAD", "register:40c8:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-f52f19cf0d0fa5de0d8634e5cfcdb367"></a>

### [`005601ac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00560/005601ac.md) → [`005604cc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00560/005604cc.md) FUN_005604cc

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`0055ff98`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0055f/0055ff98.md) · 呼出先 6件 [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md) [`00c580d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c580d0.md) [`00c58340`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58340.md) [`00c58350`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58350.md) [`00c58360`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58360.md)
- 新版 呼出元 1件 [`005602b8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00560/005602b8.md) · 呼出先 6件 [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md) [`00c590a0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c590a0.md) [`00c59310`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59310.md) [`00c59320`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59320.md) [`00c59330`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59330.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 97.98% / 新版 97.98%

優先判定に残った影響 `call_argument_candidate` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "0056053c",
      "incomplete_value": true,
      "site": "00560540",
      "value": [
        "LOAD",
        "8",
        [
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
                "register:4008:8"
              ],
              [
                "leaf",
                "const:cd0:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0056021c",
      "incomplete_value": true,
      "site": "00560220",
      "value": [
        "LOAD",
        "8",
        [
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
                "register:4008:8"
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
    "ordinal": 1,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "005605f4",
      "incomplete_value": true,
      "site": "005605f8",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:cd0:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "005602d4",
      "incomplete_value": true,
      "site": "005602d8",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:d00:8"
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
      "0056053c",
      "READ",
      [
        "storage",
        "00c9ad00",
        null,
        "pointer"
      ]
    ],
    [
      "0056053c",
      "PARAM",
      [
        "storage",
        "01127f18",
        "std::__ndk1::ctype<char>::id",
        "undefined8"
      ]
    ],
    [
      "005605f4",
      "READ",
      [
        "storage",
        "00c9ad00",
        null,
        "pointer"
      ]
    ]
  ],
  "added": [
    [
      "0056053c",
      "READ",
      [
        "storage",
        "00c9bcd0",
        null,
        "pointer"
      ]
    ],
    [
      "0056053c",
      "PARAM",
      [
        "storage",
        "01128ed8",
        "std::__ndk1::ctype<char>::id",
        "undefined8"
      ]
    ],
    [
      "005605f4",
      "READ",
      [
        "storage",
        "00c9bcd0",
        null,
        "pointer"
      ]
    ]
  ]
}
~~~


~~~diff
- 00560220 ["INT_ADD", "register:40f0:8", ["const:560220:8", "const:4:8"]]
- 00560220 ["CALL", null, ["callee:00c59320:8"]]
+ 00560540 ["INT_ADD", "register:40f0:8", ["const:560540:8", "const:4:8"]]
+ 00560540 ["CALL", null, ["callee:00c59320:8"]]
- 005602d8 ["INT_ADD", "register:40f0:8", ["const:5602d8:8", "const:4:8"]]
- 005602d8 ["CALL", null, ["callee:00c59320:8"]]
+ 005605f8 ["INT_ADD", "register:40f0:8", ["const:5605f8:8", "const:4:8"]]
+ 005605f8 ["CALL", null, ["callee:00c59320:8"]]
- 00560210 ["INT_ADD", "register:40f0:8", ["const:560210:8", "const:4:8"]]
- 00560210 ["CALL", null, ["callee:00c59310:8"]]
+ 00560530 ["INT_ADD", "register:40f0:8", ["const:560530:8", "const:4:8"]]
+ 00560530 ["CALL", null, ["callee:00c59310:8"]]
~~~


<a id="compare-5df8f6c3fba82efb5fabd19dc3cff2c3"></a>

### [`00560384`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00560/00560384.md) → [`005606a4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00560/005606a4.md) FUN_005606a4

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 4件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c58070`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58070.md) [`00c58090`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58090.md) [`00c598e0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c59/00c598e0.md)
- 新版 呼出元 0件  · 呼出先 4件 [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c59040`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59040.md) [`00c59060`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59060.md) [`00c5a8b0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5a/00c5a8b0.md)

変更の種類 constant, operands_and_dependencies, operation_sequence, store_destination, store_value

命令の説明率　旧版 67.74% / 新版 67.74%

優先判定に残った影響 `store_destination` 1件, `store_value` 3件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "005606c8",
      "incomplete_value": true,
      "site": "005606d0",
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
      "definition_site": "005603a8",
      "incomplete_value": true,
      "site": "005603b0",
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
    "ordinal": 5,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_destination",
    "new": {
      "definition_site": "005606dc",
      "incomplete_value": true,
      "site": "005606dc",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:4000:8"
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
      "definition_site": "005603bc",
      "incomplete_value": true,
      "site": "005603bc",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:4000:8"
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
    "ordinal": 6,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "005606dc",
      "incomplete_value": true,
      "site": "005606dc",
      "value": [
        "LOAD",
        "8",
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
                "const:18:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "005603bc",
      "incomplete_value": true,
      "site": "005603bc",
      "value": [
        "LOAD",
        "8",
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
                "const:18:8"
              ]
            ]
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
      "005606c0",
      "READ",
      [
        "storage",
        "00c9b358",
        null,
        "pointer"
      ]
    ],
    [
      "005606c8",
      "READ",
      [
        "storage",
        "00c93340",
        "std::__ndk1::basic_istringstream<char,std::__ndk1::char_traits<char>,std::__ndk1::allocator<char>>::VTT",
        "pointer __((offset(0x18)))"
      ]
    ],
    [
      "005606cc",
      "READ",
      [
        "storage",
        "00c93358",
        null,
        "pointer __((offset(0x40)))"
      ]
    ]
  ],
  "added": [
    [
      "005606c0",
      "READ",
      [
        "storage",
        "00c9c328",
        null,
        "pointer"
      ]
    ],
    [
      "005606c8",
      "READ",
      [
        "storage",
        "00c94310",
        "std::__ndk1::basic_istringstream<char,std::__ndk1::char_traits<char>,std::__ndk1::allocator<char>>::VTT",
        "pointer __((offset(0x18)))"
      ]
    ],
    [
      "005606cc",
      "READ",
      [
        "storage",
        "00c94328",
        null,
        "pointer __((offset(0x40)))"
      ]
    ]
  ]
}
~~~


~~~diff
- 00560394 ["COPY", "register:40a8:8", ["const:c9b000:8"]]
+ 005606b4 ["COPY", "register:40a8:8", ["const:c9c000:8"]]
- 00560398 ["COPY", "register:4048:8", ["const:c9a000:8"]]
+ 005606b8 ["COPY", "register:4048:8", ["const:c9b000:8"]]
- 005603a0 ["INT_ADD", "tmp:0:8", ["register:40a8:8", "const:358:8"]]
- 005603a0 ["LOAD", "register:40a8:8", ["const:1b1:8", "tmp:0:8"]]
+ 005606c0 ["INT_ADD", "tmp:0:8", ["register:40a8:8", "const:328:8"]]
+ 005606c0 ["LOAD", "register:40a8:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-637791a212a154bc22e9b0167f2439c0"></a>

### [`00560400`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00560/00560400.md) → [`00560720`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00560/00560720.md) FUN_00560720

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 2件 [`0055f5b8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0055f/0055f5b8.md) [`0055f658`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0055f/0055f658.md) · 呼出先 2件 [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c58480`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58480.md)
- 新版 呼出元 2件 [`0055f8d8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0055f/0055f8d8.md) [`0055f978`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0055f/0055f978.md) · 呼出先 2件 [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md) [`00c59450`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59450.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 91.89% / 新版 91.89%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00560730",
      "incomplete_value": false,
      "site": "00560738",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:ca6000:8"
          ],
          [
            "leaf",
            "const:d30:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00560410",
      "incomplete_value": false,
      "site": "00560418",
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
            "const:d70:8"
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
      "00560730",
      "PARAM",
      [
        "storage",
        "00ca5d70",
        null,
        null
      ]
    ],
    [
      "00560758",
      "DATA",
      [
        "storage",
        "00c6b2f0",
        null,
        "undefined *"
      ]
    ],
    [
      "00560764",
      "DATA",
      [
        "storage",
        "00c6b268",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00560730",
      "PARAM",
      [
        "storage",
        "00ca6d30",
        null,
        null
      ]
    ],
    [
      "00560758",
      "DATA",
      [
        "storage",
        "00c6c2c0",
        null,
        "undefined *"
      ]
    ],
    [
      "00560764",
      "DATA",
      [
        "storage",
        "00c6c238",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00560418 ["INT_ADD", "register:40f0:8", ["const:560418:8", "const:4:8"]]
- 00560418 ["CALL", null, ["callee:00c59450:8"]]
+ 00560738 ["INT_ADD", "register:40f0:8", ["const:560738:8", "const:4:8"]]
+ 00560738 ["CALL", null, ["callee:00c59450:8"]]
- 0056040c ["COPY", "register:4000:8", ["const:ca5000:8"]]
+ 0056072c ["COPY", "register:4000:8", ["const:ca6000:8"]]
- 00560410 ["COPY", "tmp:0:8", ["const:d70:8"]]
- 00560410 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 00560410 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 00560410 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 00560730 ["COPY", "tmp:0:8", ["const:d30:8"]]
+ 00560730 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 00560730 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 00560730 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
~~~


<a id="compare-965880c49888d5cd3ff026d02c7546e2"></a>

### [`00560784`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00560/00560784.md) → [`00560aa4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00560/00560aa4.md) FUN_00560aa4

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57f70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f70.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c58f40`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f40.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 50.00% / 新版 50.00%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "00560aa8",
      "incomplete_value": false,
      "site": "00560aac",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c6c000:8"
          ],
          [
            "leaf",
            "const:2c0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00560788",
      "incomplete_value": false,
      "site": "0056078c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c6b000:8"
          ],
          [
            "leaf",
            "const:2f0:8"
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
      "00560aac",
      "DATA",
      [
        "storage",
        "00c6b2f0",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00560aac",
      "DATA",
      [
        "storage",
        "00c6c2c0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00560784 ["COPY", "register:4040:8", ["const:c6b000:8"]]
+ 00560aa4 ["COPY", "register:4040:8", ["const:c6c000:8"]]
- 00560788 ["COPY", "tmp:0:8", ["const:2f0:8"]]
- 00560788 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00560788 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00560788 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00560aa8 ["COPY", "tmp:0:8", ["const:2c0:8"]]
+ 00560aa8 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00560aa8 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00560aa8 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-9698cf46b9d8836c9658c4153dcf1c37"></a>

### [`00560794`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00560/00560794.md) → [`00560ab4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00560/00560ab4.md) FUN_00560ab4

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c57f70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f70.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c58f40`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f40.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 83.33% / 新版 83.33%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "00560ac4",
      "incomplete_value": false,
      "site": "00560acc",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c6c000:8"
          ],
          [
            "leaf",
            "const:2c0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "005607a4",
      "incomplete_value": false,
      "site": "005607ac",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c6b000:8"
          ],
          [
            "leaf",
            "const:2f0:8"
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
      "00560acc",
      "DATA",
      [
        "storage",
        "00c6b2f0",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00560acc",
      "DATA",
      [
        "storage",
        "00c6c2c0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 005607a0 ["COPY", "register:4040:8", ["const:c6b000:8"]]
+ 00560ac0 ["COPY", "register:4040:8", ["const:c6c000:8"]]
- 005607a4 ["COPY", "tmp:0:8", ["const:2f0:8"]]
- 005607a4 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 005607a4 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 005607a4 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00560ac4 ["COPY", "tmp:0:8", ["const:2c0:8"]]
+ 00560ac4 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00560ac4 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00560ac4 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 005607b0 ["INT_ADD", "register:40f0:8", ["const:5607b0:8", "const:4:8"]]
- 005607b0 ["CALL", null, ["callee:00c58f40:8"]]
+ 00560ad0 ["INT_ADD", "register:40f0:8", ["const:560ad0:8", "const:4:8"]]
+ 00560ad0 ["CALL", null, ["callee:00c58f40:8"]]
~~~


<a id="compare-55b899381aac8f2b88ede998ca244f09"></a>

### [`005607cc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00560/005607cc.md) → [`00560aec`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00560/00560aec.md) _INIT_26

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 5件 [`00bfadf4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bfa/00bfadf4.md) [`00c57f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f00.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md) [`00c58470`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58470.md)
- 新版 呼出元 0件  · 呼出先 5件 [`00bfbde8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bfb/00bfbde8.md) [`00c58ed0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58ed0.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md) [`00c59440`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59440.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies, store_value

命令の説明率　旧版 82.93% / 新版 82.93%

優先判定に残った影響 `call_argument_candidate` 4件, `store_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00560b28",
      "incomplete_value": true,
      "site": "00560b28",
      "value": [
        "LOAD",
        "8",
        [
          [
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
      "definition_site": "00560808",
      "incomplete_value": true,
      "site": "00560808",
      "value": [
        "LOAD",
        "8",
        [
          [
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
    "ordinal": 7,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00560b34",
      "incomplete_value": false,
      "site": "00560b3c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:ca6000:8"
          ],
          [
            "leaf",
            "const:d30:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00560814",
      "incomplete_value": false,
      "site": "0056081c",
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
            "const:d70:8"
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
      "definition_site": "00560b5c",
      "incomplete_value": true,
      "site": "00560b68",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:d20:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0056083c",
      "incomplete_value": true,
      "site": "00560848",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:d50:8"
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
      "00560b0c",
      "READ",
      [
        "storage",
        "002b8dc9",
        null,
        "string"
      ]
    ],
    [
      "00560b34",
      "PARAM",
      [
        "storage",
        "00ca5d70",
        null,
        null
      ]
    ],
    [
      "00560b58",
      "PARAM",
      [
        "storage",
        "00ca5d70",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "00560b0c",
      "READ",
      [
        "storage",
        "002b8e98",
        null,
        "string"
      ]
    ],
    [
      "00560b34",
      "PARAM",
      [
        "storage",
        "00ca6d30",
        null,
        null
      ]
    ],
    [
      "00560b58",
      "PARAM",
      [
        "storage",
        "00ca6d30",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 0056081c ["INT_ADD", "register:40f0:8", ["const:56081c:8", "const:4:8"]]
- 0056081c ["CALL", null, ["callee:00c59440:8"]]
+ 00560b3c ["INT_ADD", "register:40f0:8", ["const:560b3c:8", "const:4:8"]]
+ 00560b3c ["CALL", null, ["callee:00c59440:8"]]
- 00560848 ["INT_ADD", "register:40f0:8", ["const:560848:8", "const:4:8"]]
- 00560848 ["CALL", null, ["callee:00c58ed0:8"]]
+ 00560b68 ["INT_ADD", "register:40f0:8", ["const:560b68:8", "const:4:8"]]
+ 00560b68 ["CALL", null, ["callee:00c58ed0:8"]]
- 005607e4 ["COPY", "tmp:0:8", ["const:dc9:8"]]
- 005607e4 ["INT_CARRY", "register:105:1", ["register:4050:8", "tmp:0:8"]]
- 005607e4 ["INT_SCARRY", "register:106:1", ["register:4050:8", "tmp:0:8"]]
- 005607e4 ["INT_ADD", "tmp:1:8", ["register:4050:8", "tmp:0:8"]]
+ 00560b04 ["COPY", "tmp:0:8", ["const:e98:8"]]
+ 00560b04 ["INT_CARRY", "register:105:1", ["register:4050:8", "tmp:0:8"]]
+ 00560b04 ["INT_SCARRY", "register:106:1", ["register:4050:8", "tmp:0:8"]]
+ 00560b04 ["INT_ADD", "tmp:1:8", ["register:4050:8", "tmp:0:8"]]
~~~


<a id="compare-c2e46c0fc62e094a48e7da3bc8baacee"></a>

### [`0056089c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00560/0056089c.md) → [`00560bbc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00560/00560bbc.md) FUN_00560bbc

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed`

- 旧版 呼出元 12件 [`004737bc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00473/004737bc.md) [`00856e84`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00856/00856e84.md) [`008810f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00881/008810f0.md) [`00930a94`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00930/00930a94.md) [`009315b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00931/009315b0.md) · 呼出先 1件 [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)
- 新版 呼出元 12件 [`00473adc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00473/00473adc.md) [`00857e30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00857/00857e30.md) [`0088209c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00882/0088209c.md) [`00931a40`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00931/00931a40.md) [`0093255c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00932/0093255c.md) · 呼出先 1件 [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md)

変更の種類 constant, operands_and_dependencies, operation_sequence, store_value

命令の説明率　旧版 72.22% / 新版 72.22%

優先判定に残った影響 `store_value` 2件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "00560bd8",
      "incomplete_value": false,
      "site": "00560be0",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c6c000:8"
          ],
          [
            "leaf",
            "const:370:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "005608b8",
      "incomplete_value": false,
      "site": "005608c0",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c6b000:8"
          ],
          [
            "leaf",
            "const:3a0:8"
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
      "definition_site": "00560bf0",
      "incomplete_value": false,
      "site": "00560bf0",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c6c000:8"
          ],
          [
            "leaf",
            "const:3c0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "005608d0",
      "incomplete_value": false,
      "site": "005608d0",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c6b000:8"
          ],
          [
            "leaf",
            "const:3f0:8"
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
      "00560be0",
      "DATA",
      [
        "storage",
        "00c6b3a0",
        null,
        "undefined *"
      ]
    ],
    [
      "00560bf0",
      "DATA",
      [
        "storage",
        "00c6b3f0",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00560be0",
      "DATA",
      [
        "storage",
        "00c6c370",
        null,
        "undefined *"
      ]
    ],
    [
      "00560bf0",
      "DATA",
      [
        "storage",
        "00c6c3c0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 005608b0 ["INT_ADD", "register:40f0:8", ["const:5608b0:8", "const:4:8"]]
- 005608b0 ["CALL", null, ["callee:00c58f30:8"]]
+ 00560bd0 ["INT_ADD", "register:40f0:8", ["const:560bd0:8", "const:4:8"]]
+ 00560bd0 ["CALL", null, ["callee:00c58f30:8"]]
- 005608b4 ["COPY", "register:4040:8", ["const:c6b000:8"]]
+ 00560bd4 ["COPY", "register:4040:8", ["const:c6c000:8"]]
- 005608b8 ["COPY", "tmp:0:8", ["const:3a0:8"]]
- 005608b8 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 005608b8 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 005608b8 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00560bd8 ["COPY", "tmp:0:8", ["const:370:8"]]
+ 00560bd8 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00560bd8 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00560bd8 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-0e5592d530658b1f1b2632c7b43ccfa9"></a>

### [`005608e4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00560/005608e4.md) → [`00560c04`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00560/00560c04.md) FUN_00560c04

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 6件 [`00550a54`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00550/00550a54.md) [`00560e88`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00560/00560e88.md) [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)
- 新版 呼出元 0件  · 呼出先 6件 [`00550d74`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00550/00550d74.md) [`005611a8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00561/005611a8.md) [`00c54d90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d90.md) [`00c58f20`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f20.md) [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 98.18% / 新版 98.18%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "00560c9c",
      "incomplete_value": false,
      "site": "00560c9c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c6c000:8"
          ],
          [
            "leaf",
            "const:410:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0056097c",
      "incomplete_value": false,
      "site": "0056097c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c6b000:8"
          ],
          [
            "leaf",
            "const:440:8"
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
      "00560c9c",
      "DATA",
      [
        "storage",
        "00c6b440",
        null,
        "undefined *"
      ]
    ],
    [
      "00560d1c",
      "READ",
      [
        "storage",
        "00c6b468",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00560c9c",
      "DATA",
      [
        "storage",
        "00c6c410",
        null,
        "undefined *"
      ]
    ],
    [
      "00560d1c",
      "READ",
      [
        "storage",
        "00c6c438",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00560914 ["INT_ADD", "register:40f0:8", ["const:560914:8", "const:4:8"]]
- 00560914 ["CALL", null, ["callee:00550d74:8"]]
+ 00560c34 ["INT_ADD", "register:40f0:8", ["const:560c34:8", "const:4:8"]]
+ 00560c34 ["CALL", null, ["callee:00550d74:8"]]
- 00560934 ["COPY", "register:0:8", ["register:4040:8"]]
- 00560934 ["INT_ADD", "register:40f0:8", ["const:560934:8", "const:4:8"]]
- 00560934 ["CALLIND", null, ["register:0:8"]]
+ 00560c54 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00560c54 ["INT_ADD", "register:40f0:8", ["const:560c54:8", "const:4:8"]]
+ 00560c54 ["CALLIND", null, ["register:0:8"]]
- 00560958 ["COPY", "register:0:8", ["register:4040:8"]]
- 00560958 ["INT_ADD", "register:40f0:8", ["const:560958:8", "const:4:8"]]
- 00560958 ["CALLIND", null, ["register:0:8"]]
+ 00560c78 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00560c78 ["INT_ADD", "register:40f0:8", ["const:560c78:8", "const:4:8"]]
+ 00560c78 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-0aa484894c92b048304c689343da589a"></a>

### [`00560ba8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00560/00560ba8.md) → [`00560ec8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00560/00560ec8.md) FUN_00560ec8

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 90.00% / 新版 90.00%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "00560ee0",
      "incomplete_value": false,
      "site": "00560ee4",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c6c000:8"
          ],
          [
            "leaf",
            "const:310:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00560bc0",
      "incomplete_value": false,
      "site": "00560bc4",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c6b000:8"
          ],
          [
            "leaf",
            "const:340:8"
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
      "00560ee4",
      "DATA",
      [
        "storage",
        "00c6b340",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00560ee4",
      "DATA",
      [
        "storage",
        "00c6c310",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00560bbc ["COPY", "register:4048:8", ["const:c6b000:8"]]
+ 00560edc ["COPY", "register:4048:8", ["const:c6c000:8"]]
- 00560bc0 ["COPY", "tmp:0:8", ["const:340:8"]]
- 00560bc0 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 00560bc0 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 00560bc0 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 00560ee0 ["COPY", "tmp:0:8", ["const:310:8"]]
+ 00560ee0 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 00560ee0 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 00560ee0 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
- 00560bd0 ["INT_ADD", "register:40f0:8", ["const:560bd0:8", "const:4:8"]]
- 00560bd0 ["CALL", null, ["callee:00c58f50:8"]]
+ 00560ef0 ["INT_ADD", "register:40f0:8", ["const:560ef0:8", "const:4:8"]]
+ 00560ef0 ["CALL", null, ["callee:00c58f50:8"]]
~~~


