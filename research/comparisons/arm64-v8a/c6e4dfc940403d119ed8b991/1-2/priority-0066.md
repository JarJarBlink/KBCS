# v16.0.2 → v16.0.3 · 最優先の変更候補 (66)

[一覧の目次](README.md)

<a id="compare-bdbf7f1ed57f5acce9de9c5e2c609d4b"></a>

### [`009340cc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00934/009340cc.md) → [`00935078`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00935/00935078.md) FUN_00935078

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 23件 [`0043de18`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043d/0043de18.md) [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md) [`0047ce14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047ce14.md) [`0048ce94`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048c/0048ce94.md) [`006768fc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00676/006768fc.md)
- 新版 呼出元 0件  · 呼出先 23件 [`0043e138`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043e/0043e138.md) [`0047b054`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047b/0047b054.md) [`0047d134`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047d/0047d134.md) [`0048d1b4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0048d/0048d1b4.md) [`00676cac`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00676/00676cac.md)

変更の種類 call, call_argument_candidate, call_target, constant, operands_and_dependencies, store_value

命令の説明率　旧版 94.39% / 新版 94.39%

優先判定に残った影響 `call_argument_candidate` 4件, `call_target` 3件, `store_value` 3件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00935198",
      "incomplete_value": true,
      "site": "009351a8",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:4c:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "009341ec",
      "incomplete_value": true,
      "site": "009341fc",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:f75:8"
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
      "definition_site": "00935228",
      "incomplete_value": true,
      "site": "00935234",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:e76:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0093427c",
      "incomplete_value": true,
      "site": "00934288",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:d98:8"
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
      "definition_site": "009353b8",
      "incomplete_value": false,
      "site": "009353b8",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c88000:8"
          ],
          [
            "leaf",
            "const:9d8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0093440c",
      "incomplete_value": false,
      "site": "0093440c",
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
            "const:a08:8"
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
      "00935198",
      "READ",
      [
        "storage",
        "002aef75",
        null,
        "string"
      ]
    ],
    [
      "009351c0",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ],
    [
      "009351dc",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ]
  ],
  "added": [
    [
      "00935198",
      "READ",
      [
        "storage",
        "002af04c",
        null,
        "string"
      ]
    ],
    [
      "009351c0",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047b054"
      ]
    ],
    [
      "009351dc",
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
- 00934214 ["INT_ADD", "register:40f0:8", ["const:934214:8", "const:4:8"]]
- 00934214 ["CALL", null, ["ram:47ad34:8"]]
+ 009351c0 ["INT_ADD", "register:40f0:8", ["const:9351c0:8", "const:4:8"]]
+ 009351c0 ["CALL", null, ["ram:47b054:8"]]
- 00934230 ["INT_ADD", "register:40f0:8", ["const:934230:8", "const:4:8"]]
- 00934230 ["CALL", null, ["ram:47ad34:8"]]
+ 009351dc ["INT_ADD", "register:40f0:8", ["const:9351dc:8", "const:4:8"]]
+ 009351dc ["CALL", null, ["ram:47b054:8"]]
- 009342cc ["INT_ADD", "register:40f0:8", ["const:9342cc:8", "const:4:8"]]
- 009342cc ["CALL", null, ["callee:0043e138:8"]]
+ 00935278 ["INT_ADD", "register:40f0:8", ["const:935278:8", "const:4:8"]]
+ 00935278 ["CALL", null, ["callee:0043e138:8"]]
~~~


<a id="compare-969e509e9bd2deb40900486a30d4ab46"></a>

### [`00934608`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00934/00934608.md) → [`009355b4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00935/009355b4.md) FUN_009355b4

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
      "definition_site": "009355d8",
      "incomplete_value": false,
      "site": "009355d8",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c88000:8"
          ],
          [
            "leaf",
            "const:9d8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0093462c",
      "incomplete_value": false,
      "site": "0093462c",
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
            "const:a08:8"
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
      "009355d8",
      "DATA",
      [
        "storage",
        "00c87a08",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "009355d8",
      "DATA",
      [
        "storage",
        "00c889d8",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 0093461c ["INT_ADD", "register:40f0:8", ["const:93461c:8", "const:4:8"]]
- 0093461c ["CALL", null, ["callee:00c58f30:8"]]
+ 009355c8 ["INT_ADD", "register:40f0:8", ["const:9355c8:8", "const:4:8"]]
+ 009355c8 ["CALL", null, ["callee:00c58f30:8"]]
- 00934624 ["COPY", "register:4040:8", ["const:c87000:8"]]
+ 009355d0 ["COPY", "register:4040:8", ["const:c88000:8"]]
- 00934628 ["COPY", "tmp:0:8", ["const:a08:8"]]
- 00934628 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00934628 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00934628 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 009355d4 ["COPY", "tmp:0:8", ["const:9d8:8"]]
+ 009355d4 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 009355d4 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 009355d4 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-a1f2e049f7805ab4e453afbdbc016de4"></a>

### [`0093463c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00934/0093463c.md) → [`009355e8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00935/009355e8.md) FUN_009355e8

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
      "definition_site": "009355f4",
      "incomplete_value": false,
      "site": "009355f4",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c88000:8"
          ],
          [
            "leaf",
            "const:9d8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00934648",
      "incomplete_value": false,
      "site": "00934648",
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
            "const:a08:8"
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
      "009355f4",
      "DATA",
      [
        "storage",
        "00c87a08",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "009355f4",
      "DATA",
      [
        "storage",
        "00c889d8",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00934640 ["COPY", "register:4048:8", ["const:c87000:8"]]
+ 009355ec ["COPY", "register:4048:8", ["const:c88000:8"]]
- 00934644 ["COPY", "tmp:0:8", ["const:a08:8"]]
- 00934644 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 00934644 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 00934644 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 009355f0 ["COPY", "tmp:0:8", ["const:9d8:8"]]
+ 009355f0 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 009355f0 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 009355f0 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
~~~


<a id="compare-6606b98454230141f8bf22b3e5b3791f"></a>

### [`00934658`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00934/00934658.md) → [`00935604`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00935/00935604.md) FUN_00935604

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 6件 [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md) [`0047ce14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047ce14.md) [`0060e104`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0060e/0060e104.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md) [`008b91d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b9/008b91d0.md)
- 新版 呼出元 0件  · 呼出先 6件 [`0047b054`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047b/0047b054.md) [`0047d134`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047d/0047d134.md) [`0060e4b4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0060e/0060e4b4.md) [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md) [`008ba17c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008ba/008ba17c.md)

変更の種類 call, call_target, constant, control_flow, operands_and_dependencies

命令の説明率　旧版 96.00% / 新版 96.00%

優先判定に残った影響 `call_target` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_target",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "00935634",
      "value": [
        "leaf",
        "ram:47b054:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "00934688",
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
      "00935634",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ],
    [
      "00935684",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0060e104"
      ]
    ]
  ],
  "added": [
    [
      "00935634",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047b054"
      ]
    ],
    [
      "00935684",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0060e4b4"
      ]
    ]
  ]
}
~~~


~~~diff
- 00934688 ["INT_ADD", "register:40f0:8", ["const:934688:8", "const:4:8"]]
- 00934688 ["CALL", null, ["ram:47ad34:8"]]
+ 00935634 ["INT_ADD", "register:40f0:8", ["const:935634:8", "const:4:8"]]
+ 00935634 ["CALL", null, ["ram:47b054:8"]]
- 00934694 ["INT_ADD", "register:40f0:8", ["const:934694:8", "const:4:8"]]
- 00934694 ["CALL", null, ["callee:0047d134:8"]]
+ 00935640 ["INT_ADD", "register:40f0:8", ["const:935640:8", "const:4:8"]]
+ 00935640 ["CALL", null, ["callee:0047d134:8"]]
- 0093469c ["INT_ADD", "register:40f0:8", ["const:93469c:8", "const:4:8"]]
- 0093469c ["CALL", null, ["callee:008ba17c:8"]]
+ 00935648 ["INT_ADD", "register:40f0:8", ["const:935648:8", "const:4:8"]]
+ 00935648 ["CALL", null, ["callee:008ba17c:8"]]
~~~


<a id="compare-303ae0ddc28e557066719d58d3e4abaf"></a>

### [`0093474c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00934/0093474c.md) → [`009356f8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00935/009356f8.md) FUN_009356f8

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
      "definition_site": "00935718",
      "incomplete_value": false,
      "site": "0093571c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c88000:8"
          ],
          [
            "leaf",
            "const:a68:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0093476c",
      "incomplete_value": false,
      "site": "00934770",
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
      "0093571c",
      "DATA",
      [
        "storage",
        "00c87a98",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "0093571c",
      "DATA",
      [
        "storage",
        "00c88a68",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00934760 ["INT_ADD", "register:40f0:8", ["const:934760:8", "const:4:8"]]
- 00934760 ["CALL", null, ["callee:00c58f30:8"]]
+ 0093570c ["INT_ADD", "register:40f0:8", ["const:93570c:8", "const:4:8"]]
+ 0093570c ["CALL", null, ["callee:00c58f30:8"]]
- 00934768 ["COPY", "register:4040:8", ["const:c87000:8"]]
+ 00935714 ["COPY", "register:4040:8", ["const:c88000:8"]]
- 0093476c ["COPY", "tmp:0:8", ["const:a98:8"]]
- 0093476c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 0093476c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 0093476c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00935718 ["COPY", "tmp:0:8", ["const:a68:8"]]
+ 00935718 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00935718 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00935718 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-810d767c71930822810abb31870e3023"></a>

### [`00934784`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00934/00934784.md) → [`00935730`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00935/00935730.md) FUN_00935730

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
      "definition_site": "00935734",
      "incomplete_value": false,
      "site": "00935738",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c88000:8"
          ],
          [
            "leaf",
            "const:a68:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00934788",
      "incomplete_value": false,
      "site": "0093478c",
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
            "const:a98:8"
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
      "00935738",
      "DATA",
      [
        "storage",
        "00c87a98",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00935738",
      "DATA",
      [
        "storage",
        "00c88a68",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00934784 ["COPY", "register:4040:8", ["const:c87000:8"]]
+ 00935730 ["COPY", "register:4040:8", ["const:c88000:8"]]
- 00934788 ["COPY", "tmp:0:8", ["const:a98:8"]]
- 00934788 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00934788 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00934788 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00935734 ["COPY", "tmp:0:8", ["const:a68:8"]]
+ 00935734 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00935734 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00935734 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-5fd32c65f756ab743b7072e13d7f6dc7"></a>

### [`009347a4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00934/009347a4.md) → [`00935750`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00935/00935750.md) FUN_00935750

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 6件 [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md) [`0047ce14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047ce14.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md) [`008b6efc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b6/008b6efc.md) [`008b6f0c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b6/008b6f0c.md)
- 新版 呼出元 0件  · 呼出先 6件 [`0047b054`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047b/0047b054.md) [`0047d134`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047d/0047d134.md) [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md) [`008b7ea8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008b7/008b7ea8.md) [`008b7eb8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008b7/008b7eb8.md)

変更の種類 call, call_target, constant, operands_and_dependencies

命令の説明率　旧版 96.61% / 新版 96.61%

優先判定に残った影響 `call_target` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_target",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "00935778",
      "value": [
        "leaf",
        "ram:47b054:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "009347cc",
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
      "site": "00935784",
      "value": [
        "leaf",
        "ram:47b054:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "009347d8",
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
      "00935778",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ],
    [
      "00935784",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ]
  ],
  "added": [
    [
      "00935778",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047b054"
      ]
    ],
    [
      "00935784",
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
- 009347cc ["INT_ADD", "register:40f0:8", ["const:9347cc:8", "const:4:8"]]
- 009347cc ["CALL", null, ["ram:47ad34:8"]]
+ 00935778 ["INT_ADD", "register:40f0:8", ["const:935778:8", "const:4:8"]]
+ 00935778 ["CALL", null, ["ram:47b054:8"]]
- 009347d8 ["INT_ADD", "register:40f0:8", ["const:9347d8:8", "const:4:8"]]
- 009347d8 ["CALL", null, ["ram:47ad34:8"]]
+ 00935784 ["INT_ADD", "register:40f0:8", ["const:935784:8", "const:4:8"]]
+ 00935784 ["CALL", null, ["ram:47b054:8"]]
- 009347fc ["INT_ADD", "register:40f0:8", ["const:9347fc:8", "const:4:8"]]
- 009347fc ["CALL", null, ["callee:008524fc:8"]]
+ 009357a8 ["INT_ADD", "register:40f0:8", ["const:9357a8:8", "const:4:8"]]
+ 009357a8 ["CALL", null, ["callee:008524fc:8"]]
~~~


<a id="compare-cbe016e06f2223ae381625aa18c9798f"></a>

### [`009348bc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00934/009348bc.md) → [`00935868`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00935/00935868.md) FUN_00935868

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
      "definition_site": "0093588c",
      "incomplete_value": false,
      "site": "00935890",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c88000:8"
          ],
          [
            "leaf",
            "const:ae8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "009348e0",
      "incomplete_value": false,
      "site": "009348e4",
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
            "const:b18:8"
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
      "00935890",
      "DATA",
      [
        "storage",
        "00c87b18",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00935890",
      "DATA",
      [
        "storage",
        "00c88ae8",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 009348d0 ["INT_ADD", "register:40f0:8", ["const:9348d0:8", "const:4:8"]]
- 009348d0 ["CALL", null, ["callee:00c58f30:8"]]
+ 0093587c ["INT_ADD", "register:40f0:8", ["const:93587c:8", "const:4:8"]]
+ 0093587c ["CALL", null, ["callee:00c58f30:8"]]
- 009348dc ["COPY", "register:4040:8", ["const:c87000:8"]]
+ 00935888 ["COPY", "register:4040:8", ["const:c88000:8"]]
- 009348e0 ["COPY", "tmp:0:8", ["const:b18:8"]]
- 009348e0 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 009348e0 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 009348e0 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 0093588c ["COPY", "tmp:0:8", ["const:ae8:8"]]
+ 0093588c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 0093588c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 0093588c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-282c6f5852021678c46733fca762e838"></a>

### [`009348fc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00934/009348fc.md) → [`009358a8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00935/009358a8.md) FUN_009358a8

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
      "definition_site": "009358ac",
      "incomplete_value": false,
      "site": "009358b0",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c88000:8"
          ],
          [
            "leaf",
            "const:ae8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00934900",
      "incomplete_value": false,
      "site": "00934904",
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
            "const:b18:8"
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
      "009358b0",
      "DATA",
      [
        "storage",
        "00c87b18",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "009358b0",
      "DATA",
      [
        "storage",
        "00c88ae8",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 009348fc ["COPY", "register:4040:8", ["const:c87000:8"]]
+ 009358a8 ["COPY", "register:4040:8", ["const:c88000:8"]]
- 00934900 ["COPY", "tmp:0:8", ["const:b18:8"]]
- 00934900 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00934900 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00934900 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 009358ac ["COPY", "tmp:0:8", ["const:ae8:8"]]
+ 009358ac ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 009358ac ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 009358ac ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-7697403b775181a0c3da50ffb8df8b7b"></a>

### [`00934924`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00934/00934924.md) → [`009358d0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00935/009358d0.md) FUN_009358d0

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 18件 [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md) [`0047ce14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047ce14.md) [`005d8c08`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005d8/005d8c08.md) [`007075c0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00707/007075c0.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)
- 新版 呼出元 0件  · 呼出先 18件 [`0047b054`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047b/0047b054.md) [`0047d134`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047d/0047d134.md) [`005d8fb8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005d8/005d8fb8.md) [`00707970`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00707/00707970.md) [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md)

変更の種類 branch_value, call, call_argument_candidate, call_target, constant, operands_and_dependencies, store_value

命令の説明率　旧版 95.59% / 新版 95.59%

優先判定に残った影響 `branch_value` 1件, `call_argument_candidate` 2件, `call_target` 2件, `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "00935b4c",
      "incomplete_value": false,
      "site": "00935b4c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c88000:8"
          ],
          [
            "leaf",
            "const:b58:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00934ba0",
      "incomplete_value": false,
      "site": "00934ba0",
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
            "const:b88:8"
          ]
        ]
      ]
    },
    "ordinal": 23,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "branch_value",
    "new": {
      "definition_site": "009359e0",
      "incomplete_value": true,
      "site": "009359e0",
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
      "definition_site": "00934a34",
      "incomplete_value": true,
      "site": "00934a34",
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
    "ordinal": 5,
    "slot": 0
  },
  {
    "confidence": "limited",
    "kind": "call_target",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "00935910",
      "value": [
        "leaf",
        "ram:47b054:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "00934964",
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
      "00935910",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ],
    [
      "0093592c",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ],
    [
      "009359d0",
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
      "00935910",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047b054"
      ]
    ],
    [
      "0093592c",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047b054"
      ]
    ],
    [
      "009359d0",
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
- 00934964 ["INT_ADD", "register:40f0:8", ["const:934964:8", "const:4:8"]]
- 00934964 ["CALL", null, ["ram:47ad34:8"]]
+ 00935910 ["INT_ADD", "register:40f0:8", ["const:935910:8", "const:4:8"]]
+ 00935910 ["CALL", null, ["ram:47b054:8"]]
- 00934980 ["INT_ADD", "register:40f0:8", ["const:934980:8", "const:4:8"]]
- 00934980 ["CALL", null, ["ram:47ad34:8"]]
+ 0093592c ["INT_ADD", "register:40f0:8", ["const:93592c:8", "const:4:8"]]
+ 0093592c ["CALL", null, ["ram:47b054:8"]]
- 00934a4c ["INT_ADD", "register:40f0:8", ["const:934a4c:8", "const:4:8"]]
- 00934a4c ["CALL", null, ["callee:00c596b0:8"]]
+ 009359f8 ["INT_ADD", "register:40f0:8", ["const:9359f8:8", "const:4:8"]]
+ 009359f8 ["CALL", null, ["callee:00c596b0:8"]]
~~~


<a id="compare-ca4c240b347241f49d3f1506100d9290"></a>

### [`00934d5c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00934/00934d5c.md) → [`00935d08`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00935/00935d08.md) FUN_00935d08

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
      "definition_site": "00935d2c",
      "incomplete_value": false,
      "site": "00935d2c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c88000:8"
          ],
          [
            "leaf",
            "const:b58:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00934d80",
      "incomplete_value": false,
      "site": "00934d80",
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
            "const:b88:8"
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
      "00935d2c",
      "DATA",
      [
        "storage",
        "00c87b88",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00935d2c",
      "DATA",
      [
        "storage",
        "00c88b58",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00934d70 ["INT_ADD", "register:40f0:8", ["const:934d70:8", "const:4:8"]]
- 00934d70 ["CALL", null, ["callee:00c58f30:8"]]
+ 00935d1c ["INT_ADD", "register:40f0:8", ["const:935d1c:8", "const:4:8"]]
+ 00935d1c ["CALL", null, ["callee:00c58f30:8"]]
- 00934d78 ["COPY", "register:4040:8", ["const:c87000:8"]]
+ 00935d24 ["COPY", "register:4040:8", ["const:c88000:8"]]
- 00934d7c ["COPY", "tmp:0:8", ["const:b88:8"]]
- 00934d7c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00934d7c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00934d7c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00935d28 ["COPY", "tmp:0:8", ["const:b58:8"]]
+ 00935d28 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00935d28 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00935d28 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-9a3689b983e22d8aa4487529307cbd9c"></a>

### [`00934d90`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00934/00934d90.md) → [`00935d3c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00935/00935d3c.md) FUN_00935d3c

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
      "definition_site": "00935d48",
      "incomplete_value": false,
      "site": "00935d48",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c88000:8"
          ],
          [
            "leaf",
            "const:b58:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00934d9c",
      "incomplete_value": false,
      "site": "00934d9c",
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
            "const:b88:8"
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
      "00935d48",
      "DATA",
      [
        "storage",
        "00c87b88",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00935d48",
      "DATA",
      [
        "storage",
        "00c88b58",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00934d94 ["COPY", "register:4048:8", ["const:c87000:8"]]
+ 00935d40 ["COPY", "register:4048:8", ["const:c88000:8"]]
- 00934d98 ["COPY", "tmp:0:8", ["const:b88:8"]]
- 00934d98 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 00934d98 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 00934d98 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 00935d44 ["COPY", "tmp:0:8", ["const:b58:8"]]
+ 00935d44 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 00935d44 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 00935d44 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
~~~


<a id="compare-eff3c354d3a89945fc912c095d7c563b"></a>

### [`00934dac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00934/00934dac.md) → [`00935d58`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00935/00935d58.md) FUN_00935d58

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 7件 [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md) [`0047ce14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047ce14.md) [`00726fa0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00726/00726fa0.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md) [`008b6f68`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b6/008b6f68.md)
- 新版 呼出元 0件  · 呼出先 7件 [`0047b054`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047b/0047b054.md) [`0047d134`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047d/0047d134.md) [`00727350`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00727/00727350.md) [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md) [`008b7f14`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008b7/008b7f14.md)

変更の種類 call, call_target, constant, operands_and_dependencies

命令の説明率　旧版 96.72% / 新版 96.72%

優先判定に残った影響 `call_target` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_target",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "00935d7c",
      "value": [
        "leaf",
        "ram:47b054:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "00934dd0",
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
      "site": "00935d88",
      "value": [
        "leaf",
        "ram:47b054:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "00934ddc",
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
      "00935d7c",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ],
    [
      "00935d88",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ]
  ],
  "added": [
    [
      "00935d7c",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047b054"
      ]
    ],
    [
      "00935d88",
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
- 00934dd0 ["INT_ADD", "register:40f0:8", ["const:934dd0:8", "const:4:8"]]
- 00934dd0 ["CALL", null, ["ram:47ad34:8"]]
+ 00935d7c ["INT_ADD", "register:40f0:8", ["const:935d7c:8", "const:4:8"]]
+ 00935d7c ["CALL", null, ["ram:47b054:8"]]
- 00934ddc ["INT_ADD", "register:40f0:8", ["const:934ddc:8", "const:4:8"]]
- 00934ddc ["CALL", null, ["ram:47ad34:8"]]
+ 00935d88 ["INT_ADD", "register:40f0:8", ["const:935d88:8", "const:4:8"]]
+ 00935d88 ["CALL", null, ["ram:47b054:8"]]
- 00934df8 ["INT_ADD", "register:40f0:8", ["const:934df8:8", "const:4:8"]]
- 00934df8 ["CALL", null, ["callee:008524fc:8"]]
+ 00935da4 ["INT_ADD", "register:40f0:8", ["const:935da4:8", "const:4:8"]]
+ 00935da4 ["CALL", null, ["callee:008524fc:8"]]
~~~


<a id="compare-9e859dc50d7e004a0bccd277e236a800"></a>

### [`00934ecc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00934/00934ecc.md) → [`00935e78`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00935/00935e78.md) FUN_00935e78

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
      "definition_site": "00935e8c",
      "incomplete_value": false,
      "site": "00935e90",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c88000:8"
          ],
          [
            "leaf",
            "const:be8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00934ee0",
      "incomplete_value": false,
      "site": "00934ee4",
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
            "const:c18:8"
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
      "00935e90",
      "DATA",
      [
        "storage",
        "00c87c18",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00935e90",
      "DATA",
      [
        "storage",
        "00c88be8",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00934ed8 ["INT_ADD", "register:40f0:8", ["const:934ed8:8", "const:4:8"]]
- 00934ed8 ["CALL", null, ["callee:00c58f30:8"]]
+ 00935e84 ["INT_ADD", "register:40f0:8", ["const:935e84:8", "const:4:8"]]
+ 00935e84 ["CALL", null, ["callee:00c58f30:8"]]
- 00934edc ["COPY", "register:4040:8", ["const:c87000:8"]]
+ 00935e88 ["COPY", "register:4040:8", ["const:c88000:8"]]
- 00934ee0 ["COPY", "tmp:0:8", ["const:c18:8"]]
- 00934ee0 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00934ee0 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00934ee0 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00935e8c ["COPY", "tmp:0:8", ["const:be8:8"]]
+ 00935e8c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00935e8c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00935e8c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-729b0cbb5cbc90726b8419df026ae943"></a>

### [`00934ef0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00934/00934ef0.md) → [`00935e9c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00935/00935e9c.md) FUN_00935e9c

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
      "definition_site": "00935ea0",
      "incomplete_value": false,
      "site": "00935ea4",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c88000:8"
          ],
          [
            "leaf",
            "const:be8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00934ef4",
      "incomplete_value": false,
      "site": "00934ef8",
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
            "const:c18:8"
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
      "00935ea4",
      "DATA",
      [
        "storage",
        "00c87c18",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00935ea4",
      "DATA",
      [
        "storage",
        "00c88be8",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00934ef0 ["COPY", "register:4040:8", ["const:c87000:8"]]
+ 00935e9c ["COPY", "register:4040:8", ["const:c88000:8"]]
- 00934ef4 ["COPY", "tmp:0:8", ["const:c18:8"]]
- 00934ef4 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00934ef4 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00934ef4 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00935ea0 ["COPY", "tmp:0:8", ["const:be8:8"]]
+ 00935ea0 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00935ea0 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00935ea0 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-4f2174f6472528c9b596046b390c9be1"></a>

### [`00934f08`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00934/00934f08.md) → [`00935eb4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00935/00935eb4.md) FUN_00935eb4

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 14件 [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md) [`0047ce14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047ce14.md) [`0048ce94`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048c/0048ce94.md) [`007275f4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00727/007275f4.md) [`007275f8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00727/007275f8.md)
- 新版 呼出元 0件  · 呼出先 14件 [`0047b054`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047b/0047b054.md) [`0047d134`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047d/0047d134.md) [`0048d1b4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0048d/0048d1b4.md) [`007279a4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00727/007279a4.md) [`007279a8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00727/007279a8.md)

変更の種類 call, call_target, comparison, comparison_count, constant, operands_and_dependencies, operation_sequence, store_value

命令の説明率　旧版 91.94% / 新版 91.94%

優先判定に残った影響 `call_target` 2件, `store_value` 3件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00935f84",
      "incomplete_value": true,
      "site": "00935f98",
      "value": [
        "LOAD",
        "16",
        [
          [
            "leaf",
            "const:1b1:8"
          ],
          [
            "INT_ADD",
            "8",
            [
              [
                "leaf",
                "const:2a4000:8"
              ],
              [
                "leaf",
                "const:aed:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00934fd8",
      "incomplete_value": true,
      "site": "00934fec",
      "value": [
        "LOAD",
        "16",
        [
          [
            "leaf",
            "const:1b1:8"
          ],
          [
            "INT_ADD",
            "8",
            [
              [
                "leaf",
                "const:2a4000:8"
              ],
              [
                "leaf",
                "const:a22:8"
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
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00935f9c",
      "incomplete_value": true,
      "site": "00935f9c",
      "value": [
        "LOAD",
        "8",
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
      "definition_site": "00934ff0",
      "incomplete_value": true,
      "site": "00934ff0",
      "value": [
        "LOAD",
        "8",
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
    "ordinal": 12,
    "slot": 2
  },
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "00935fb0",
      "incomplete_value": false,
      "site": "00935fb8",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c88000:8"
          ],
          [
            "leaf",
            "const:c58:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00935004",
      "incomplete_value": false,
      "site": "0093500c",
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
            "const:c88:8"
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
      "00935ef8",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ],
    [
      "00935f3c",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ],
    [
      "00935f84",
      "READ",
      [
        "storage",
        "002a4a22",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "00935ef8",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047b054"
      ]
    ],
    [
      "00935f3c",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047b054"
      ]
    ],
    [
      "00935f84",
      "READ",
      [
        "storage",
        "002a4aed",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 00934f4c ["INT_ADD", "register:40f0:8", ["const:934f4c:8", "const:4:8"]]
- 00934f4c ["CALL", null, ["ram:47ad34:8"]]
+ 00935ef8 ["INT_ADD", "register:40f0:8", ["const:935ef8:8", "const:4:8"]]
+ 00935ef8 ["CALL", null, ["ram:47b054:8"]]
- 00934f90 ["INT_ADD", "register:40f0:8", ["const:934f90:8", "const:4:8"]]
- 00934f90 ["CALL", null, ["ram:47ad34:8"]]
+ 00935f3c ["INT_ADD", "register:40f0:8", ["const:935f3c:8", "const:4:8"]]
+ 00935f3c ["CALL", null, ["ram:47b054:8"]]
- 00934f34 ["INT_ADD", "register:40f0:8", ["const:934f34:8", "const:4:8"]]
- 00934f34 ["CALL", null, ["callee:008524fc:8"]]
+ 00935ee0 ["INT_ADD", "register:40f0:8", ["const:935ee0:8", "const:4:8"]]
+ 00935ee0 ["CALL", null, ["callee:008524fc:8"]]
~~~


<a id="compare-d8f65faffe02e224e2694df077b168c1"></a>

### [`009351b4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00935/009351b4.md) → [`00936160`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00936/00936160.md) FUN_00936160

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
      "definition_site": "00936174",
      "incomplete_value": false,
      "site": "00936178",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c88000:8"
          ],
          [
            "leaf",
            "const:c58:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "009351c8",
      "incomplete_value": false,
      "site": "009351cc",
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
            "const:c88:8"
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
      "00936178",
      "DATA",
      [
        "storage",
        "00c87c88",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00936178",
      "DATA",
      [
        "storage",
        "00c88c58",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 009351c0 ["INT_ADD", "register:40f0:8", ["const:9351c0:8", "const:4:8"]]
- 009351c0 ["CALL", null, ["callee:00c58f30:8"]]
+ 0093616c ["INT_ADD", "register:40f0:8", ["const:93616c:8", "const:4:8"]]
+ 0093616c ["CALL", null, ["callee:00c58f30:8"]]
- 009351c4 ["COPY", "register:4040:8", ["const:c87000:8"]]
+ 00936170 ["COPY", "register:4040:8", ["const:c88000:8"]]
- 009351c8 ["COPY", "tmp:0:8", ["const:c88:8"]]
- 009351c8 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 009351c8 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 009351c8 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00936174 ["COPY", "tmp:0:8", ["const:c58:8"]]
+ 00936174 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00936174 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00936174 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-5a2e3aa48b65da24d4d33bb18cddf22b"></a>

### [`009351d8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00935/009351d8.md) → [`00936184`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00936/00936184.md) FUN_00936184

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
      "definition_site": "00936188",
      "incomplete_value": false,
      "site": "0093618c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c88000:8"
          ],
          [
            "leaf",
            "const:c58:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "009351dc",
      "incomplete_value": false,
      "site": "009351e0",
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
            "const:c88:8"
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
      "0093618c",
      "DATA",
      [
        "storage",
        "00c87c88",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "0093618c",
      "DATA",
      [
        "storage",
        "00c88c58",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 009351d8 ["COPY", "register:4040:8", ["const:c87000:8"]]
+ 00936184 ["COPY", "register:4040:8", ["const:c88000:8"]]
- 009351dc ["COPY", "tmp:0:8", ["const:c88:8"]]
- 009351dc ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 009351dc ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 009351dc ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00936188 ["COPY", "tmp:0:8", ["const:c58:8"]]
+ 00936188 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00936188 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00936188 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-edcf6816ba405e320467eefd806e1a6a"></a>

### [`009351f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00935/009351f0.md) → [`0093619c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00936/0093619c.md) FUN_0093619c

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
      "site": "009361c0",
      "value": [
        "leaf",
        "ram:47b054:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "00935214",
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
      "009361c0",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ]
  ],
  "added": [
    [
      "009361c0",
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
- 00935214 ["INT_ADD", "register:40f0:8", ["const:935214:8", "const:4:8"]]
- 00935214 ["CALL", null, ["ram:47ad34:8"]]
+ 009361c0 ["INT_ADD", "register:40f0:8", ["const:9361c0:8", "const:4:8"]]
+ 009361c0 ["CALL", null, ["ram:47b054:8"]]
- 00935220 ["INT_ADD", "register:40f0:8", ["const:935220:8", "const:4:8"]]
- 00935220 ["CALL", null, ["callee:0047d134:8"]]
+ 009361cc ["INT_ADD", "register:40f0:8", ["const:9361cc:8", "const:4:8"]]
+ 009361cc ["CALL", null, ["callee:0047d134:8"]]
~~~


<a id="compare-5a016b4b7aee59b0452e4c32c89efa50"></a>

### [`00935260`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00935/00935260.md) → [`0093620c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00936/0093620c.md) _INIT_184

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 5件 [`0043aeb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043a/0043aeb0.md) [`0043b838`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b838.md) [`00c57f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f00.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)
- 新版 呼出元 0件  · 呼出先 5件 [`0043b1d0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043b1d0.md) [`0043bb58`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bb58.md) [`00c58ed0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58ed0.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies, store_value

命令の説明率　旧版 88.70% / 新版 88.70%

優先判定に残った影響 `call_argument_candidate` 3件, `store_value` 3件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "0093628c",
      "incomplete_value": true,
      "site": "009362a8",
      "value": [
        "LOAD",
        "16",
        [
          [
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
      "definition_site": "009352e0",
      "incomplete_value": true,
      "site": "009352fc",
      "value": [
        "LOAD",
        "16",
        [
          [
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
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "009362ac",
      "incomplete_value": true,
      "site": "009362c4",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:fe0:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00935300",
      "incomplete_value": true,
      "site": "00935318",
      "value": [
        "LOAD",
        "16",
        [
          [
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
    "ordinal": 18,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "009362e8",
      "incomplete_value": true,
      "site": "00936304",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:f50:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0093533c",
      "incomplete_value": true,
      "site": "00935358",
      "value": [
        "LOAD",
        "16",
        [
          [
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
      "00936248",
      "READ",
      [
        "storage",
        "002b7f66",
        null,
        "string"
      ]
    ],
    [
      "0093626c",
      "READ",
      [
        "storage",
        "002b7f79",
        null,
        "string"
      ]
    ],
    [
      "0093628c",
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
      "00936248",
      "READ",
      [
        "storage",
        "002b8035",
        null,
        "string"
      ]
    ],
    [
      "0093626c",
      "READ",
      [
        "storage",
        "002b8048",
        null,
        "string"
      ]
    ],
    [
      "0093628c",
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
- 00935494 ["INT_ADD", "register:40f0:8", ["const:935494:8", "const:4:8"]]
- 00935494 ["CALL", null, ["callee:00c58ed0:8"]]
+ 00936440 ["INT_ADD", "register:40f0:8", ["const:936440:8", "const:4:8"]]
+ 00936440 ["CALL", null, ["callee:00c58ed0:8"]]
- 00935288 ["COPY", "register:4098:8", ["const:1123000:8"]]
+ 00936234 ["COPY", "register:4098:8", ["const:1124000:8"]]
- 0093528c ["COPY", "tmp:0:8", ["const:b98:8"]]
- 0093528c ["INT_CARRY", "register:105:1", ["register:4098:8", "tmp:0:8"]]
- 0093528c ["INT_SCARRY", "register:106:1", ["register:4098:8", "tmp:0:8"]]
- 0093528c ["INT_ADD", "tmp:1:8", ["register:4098:8", "tmp:0:8"]]
+ 00936238 ["COPY", "tmp:0:8", ["const:b58:8"]]
+ 00936238 ["INT_CARRY", "register:105:1", ["register:4098:8", "tmp:0:8"]]
+ 00936238 ["INT_SCARRY", "register:106:1", ["register:4098:8", "tmp:0:8"]]
+ 00936238 ["INT_ADD", "tmp:1:8", ["register:4098:8", "tmp:0:8"]]
~~~


<a id="compare-d8580211b48f1a4c393b9559de23a445"></a>

### [`009359a4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00935/009359a4.md) → [`00936950`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00936/00936950.md) FUN_00936950

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 3件 [`00acbaf8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00acb/00acbaf8.md) [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md)
- 新版 呼出元 0件  · 呼出先 3件 [`00accaec`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00acc/00accaec.md) [`00c54d90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d90.md) [`00c58f20`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f20.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 94.29% / 新版 94.29%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "00936968",
      "incomplete_value": false,
      "site": "00936974",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c88000:8"
          ],
          [
            "leaf",
            "const:ce8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "009359bc",
      "incomplete_value": false,
      "site": "009359c8",
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
            "const:d18:8"
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
      "00936974",
      "DATA",
      [
        "storage",
        "00c87d18",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00936974",
      "DATA",
      [
        "storage",
        "00c88ce8",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 009359b8 ["COPY", "register:4040:8", ["const:c87000:8"]]
+ 00936964 ["COPY", "register:4040:8", ["const:c88000:8"]]
- 009359bc ["COPY", "tmp:0:8", ["const:d18:8"]]
- 009359bc ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 009359bc ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 009359bc ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00936968 ["COPY", "tmp:0:8", ["const:ce8:8"]]
+ 00936968 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00936968 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00936968 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 009359ec ["COPY", "register:0:8", ["register:4040:8"]]
- 009359ec ["INT_ADD", "register:40f0:8", ["const:9359ec:8", "const:4:8"]]
- 009359ec ["CALLIND", null, ["register:0:8"]]
+ 00936998 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00936998 ["INT_ADD", "register:40f0:8", ["const:936998:8", "const:4:8"]]
+ 00936998 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-32fd9806f6b0dea9d3003cfc5588b249"></a>

### [`00935f5c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00935/00935f5c.md) → [`00936f08`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00936/00936f08.md) FUN_00936f08

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
      "definition_site": "00936f0c",
      "incomplete_value": false,
      "site": "00936f10",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c88000:8"
          ],
          [
            "leaf",
            "const:d38:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00935f60",
      "incomplete_value": false,
      "site": "00935f64",
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
      "00936f10",
      "DATA",
      [
        "storage",
        "00c87d68",
        null,
        "pointer"
      ]
    ]
  ],
  "added": [
    [
      "00936f10",
      "DATA",
      [
        "storage",
        "00c88d38",
        null,
        "pointer"
      ]
    ]
  ]
}
~~~


~~~diff
- 00935f5c ["COPY", "register:4040:8", ["const:c87000:8"]]
+ 00936f08 ["COPY", "register:4040:8", ["const:c88000:8"]]
- 00935f60 ["COPY", "tmp:0:8", ["const:d68:8"]]
- 00935f60 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00935f60 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00935f60 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00936f0c ["COPY", "tmp:0:8", ["const:d38:8"]]
+ 00936f0c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00936f0c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00936f0c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-1ffc06bd7696ff26dd098e710e7814e4"></a>

### [`00935f6c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00935/00935f6c.md) → [`00936f18`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00936/00936f18.md) FUN_00936f18

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
      "definition_site": "00936f28",
      "incomplete_value": false,
      "site": "00936f30",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c88000:8"
          ],
          [
            "leaf",
            "const:d38:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00935f7c",
      "incomplete_value": false,
      "site": "00935f84",
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
      "00936f30",
      "DATA",
      [
        "storage",
        "00c87d68",
        null,
        "pointer"
      ]
    ]
  ],
  "added": [
    [
      "00936f30",
      "DATA",
      [
        "storage",
        "00c88d38",
        null,
        "pointer"
      ]
    ]
  ]
}
~~~


~~~diff
- 00935f78 ["COPY", "register:4040:8", ["const:c87000:8"]]
+ 00936f24 ["COPY", "register:4040:8", ["const:c88000:8"]]
- 00935f7c ["COPY", "tmp:0:8", ["const:d68:8"]]
- 00935f7c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00935f7c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00935f7c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00936f28 ["COPY", "tmp:0:8", ["const:d38:8"]]
+ 00936f28 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00936f28 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00936f28 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 00935f88 ["INT_ADD", "register:40f0:8", ["const:935f88:8", "const:4:8"]]
- 00935f88 ["CALL", null, ["callee:00c58f40:8"]]
+ 00936f34 ["INT_ADD", "register:40f0:8", ["const:936f34:8", "const:4:8"]]
+ 00936f34 ["CALL", null, ["callee:00c58f40:8"]]
~~~


<a id="compare-b2d368610aa2b10cf64fbbf3ab0b5aa8"></a>

### [`00935fac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00935/00935fac.md) → [`00936f58`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00936/00936f58.md) _INIT_185

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 5件 [`0043aeb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043a/0043aeb0.md) [`0043b838`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b838.md) [`00c57f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f00.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)
- 新版 呼出元 0件  · 呼出先 5件 [`0043b1d0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043b1d0.md) [`0043bb58`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bb58.md) [`00c58ed0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58ed0.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies, operation_sequence, store_value

命令の説明率　旧版 85.31% / 新版 85.31%

優先判定に残った影響 `call_argument_candidate` 3件, `store_value` 6件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00936f94",
      "incomplete_value": true,
      "site": "00936fb0",
      "value": [
        "LOAD",
        "16",
        [
          [
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
      "definition_site": "00935fe8",
      "incomplete_value": true,
      "site": "00936004",
      "value": [
        "LOAD",
        "16",
        [
          [
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
      "definition_site": "00936fb8",
      "incomplete_value": true,
      "site": "00936fd4",
      "value": [
        "LOAD",
        "16",
        [
          [
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
      "definition_site": "0093600c",
      "incomplete_value": true,
      "site": "00936028",
      "value": [
        "LOAD",
        "16",
        [
          [
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
      "definition_site": "00936ff8",
      "incomplete_value": true,
      "site": "00937010",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:fe0:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0093604c",
      "incomplete_value": true,
      "site": "00936064",
      "value": [
        "LOAD",
        "16",
        [
          [
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
      "00936f94",
      "READ",
      [
        "storage",
        "002b7f66",
        null,
        "string"
      ]
    ],
    [
      "00936fb8",
      "READ",
      [
        "storage",
        "002b7f79",
        null,
        "string"
      ]
    ],
    [
      "00936fd8",
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
      "00936f94",
      "READ",
      [
        "storage",
        "002b8035",
        null,
        "string"
      ]
    ],
    [
      "00936fb8",
      "READ",
      [
        "storage",
        "002b8048",
        null,
        "string"
      ]
    ],
    [
      "00936fd8",
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
- 009361e0 ["INT_ADD", "register:40f0:8", ["const:9361e0:8", "const:4:8"]]
- 009361e0 ["CALL", null, ["callee:00c58ed0:8"]]
+ 0093718c ["INT_ADD", "register:40f0:8", ["const:93718c:8", "const:4:8"]]
+ 0093718c ["CALL", null, ["callee:00c58ed0:8"]]
- 00935fd4 ["COPY", "register:4098:8", ["const:1123000:8"]]
+ 00936f80 ["COPY", "register:4098:8", ["const:1124000:8"]]
- 00935fd8 ["COPY", "tmp:0:8", ["const:bb0:8"]]
- 00935fd8 ["INT_CARRY", "register:105:1", ["register:4098:8", "tmp:0:8"]]
- 00935fd8 ["INT_SCARRY", "register:106:1", ["register:4098:8", "tmp:0:8"]]
- 00935fd8 ["INT_ADD", "tmp:1:8", ["register:4098:8", "tmp:0:8"]]
+ 00936f84 ["COPY", "tmp:0:8", ["const:b70:8"]]
+ 00936f84 ["INT_CARRY", "register:105:1", ["register:4098:8", "tmp:0:8"]]
+ 00936f84 ["INT_SCARRY", "register:106:1", ["register:4098:8", "tmp:0:8"]]
+ 00936f84 ["INT_ADD", "tmp:1:8", ["register:4098:8", "tmp:0:8"]]
~~~


<a id="compare-cf2b51fe1304261ffe95c8b35fdcb852"></a>

### [`0093633c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00936/0093633c.md) → [`009372e8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00937/009372e8.md) FUN_009372e8

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`00b28ff0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b28/00b28ff0.md) · 呼出先 15件 [`0043bbe4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bbe4.md) [`0046d4d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046d/0046d4d0.md) [`0046d5e8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046d/0046d5e8.md) [`0048796c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00487/0048796c.md) [`00487aa4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00487/00487aa4.md)
- 新版 呼出元 1件 [`00b29fe4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b29/00b29fe4.md) · 呼出先 15件 [`0043bf04`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bf04.md) [`0046d7f0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0046d/0046d7f0.md) [`0046d908`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0046d/0046d908.md) [`00487c8c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00487/00487c8c.md) [`00487dc4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00487/00487dc4.md)

変更の種類 constant, operands_and_dependencies, operation_sequence, store_destination, store_value

命令の説明率　旧版 90.38% / 新版 90.38%

優先判定に残った影響 `store_destination` 1件, `store_value` 5件

アドレスに依存する影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "00937320",
      "incomplete_value": false,
      "site": "0093732c",
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
      "definition_site": "00936374",
      "incomplete_value": false,
      "site": "00936380",
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
      "definition_site": "00937358",
      "incomplete_value": true,
      "site": "00937358",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:644:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "009363ac",
      "incomplete_value": true,
      "site": "009363ac",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:5fa:8"
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
      "definition_site": "009374b8",
      "incomplete_value": true,
      "site": "009374bc",
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
      "definition_site": "0093650c",
      "incomplete_value": true,
      "site": "00936510",
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
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "0093732c",
      "DATA",
      [
        "storage",
        "00c64e08",
        null,
        "undefined *"
      ]
    ],
    [
      "00937340",
      "READ",
      [
        "storage",
        "002c05fa",
        null,
        "string"
      ]
    ],
    [
      "009374a8",
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
      "0093732c",
      "DATA",
      [
        "storage",
        "00c65dd8",
        null,
        "undefined *"
      ]
    ],
    [
      "00937340",
      "READ",
      [
        "storage",
        "002c0644",
        null,
        "string"
      ]
    ],
    [
      "009374a8",
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
- 00936368 ["INT_ADD", "register:40f0:8", ["const:936368:8", "const:4:8"]]
- 00936368 ["CALL", null, ["callee:00488180:8"]]
+ 00937314 ["INT_ADD", "register:40f0:8", ["const:937314:8", "const:4:8"]]
+ 00937314 ["CALL", null, ["callee:00488180:8"]]
- 00936370 ["COPY", "register:4040:8", ["const:c64000:8"]]
+ 0093731c ["COPY", "register:4040:8", ["const:c65000:8"]]
- 00936374 ["COPY", "tmp:0:8", ["const:e08:8"]]
- 00936374 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00936374 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00936374 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00937320 ["COPY", "tmp:0:8", ["const:dd8:8"]]
+ 00937320 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00937320 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00937320 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-57997a79c71970d9fd7dd1d3dcb13fbb"></a>

### [`00936618`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00936/00936618.md) → [`009375c4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00937/009375c4.md) FUN_009375c4

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 39件 [`005bc80c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005bc/005bc80c.md) [`005e7cd8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005e7/005e7cd8.md) [`005ed7d8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005ed/005ed7d8.md) [`005efe4c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005ef/005efe4c.md) [`005f57d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005f5/005f57d0.md) · 呼出先 5件 [`00442970`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00442/00442970.md) [`0046d5e8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046d/0046d5e8.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md) [`00c58120`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58120.md) [`00c58130`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58130.md)
- 新版 呼出元 39件 [`005bcbbc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005bc/005bcbbc.md) [`005e8088`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005e8/005e8088.md) [`005edb88`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005ed/005edb88.md) [`005f01fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005f0/005f01fc.md) [`005f5b80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005f5/005f5b80.md) · 呼出先 5件 [`00442c90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00442/00442c90.md) [`0046d908`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0046d/0046d908.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md) [`00c590f0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c590f0.md) [`00c59100`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59100.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 99.01% / 新版 99.01%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "0093774c",
      "incomplete_value": false,
      "site": "00937750",
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
      "definition_site": "009367a0",
      "incomplete_value": false,
      "site": "009367a4",
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
      "0093774c",
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
      "0093774c",
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
- 009367a4 ["INT_ADD", "register:40f0:8", ["const:9367a4:8", "const:4:8"]]
- 009367a4 ["CALL", null, ["callee:00442c90:8"]]
+ 00937750 ["INT_ADD", "register:40f0:8", ["const:937750:8", "const:4:8"]]
+ 00937750 ["CALL", null, ["callee:00442c90:8"]]
- 009366ac ["INT_ADD", "register:40f0:8", ["const:9366ac:8", "const:4:8"]]
- 009366ac ["CALL", null, ["callee:00c590f0:8"]]
+ 00937658 ["INT_ADD", "register:40f0:8", ["const:937658:8", "const:4:8"]]
+ 00937658 ["CALL", null, ["callee:00c590f0:8"]]
- 009366d4 ["INT_ADD", "register:40f0:8", ["const:9366d4:8", "const:4:8"]]
- 009366d4 ["CALL", null, ["callee:00c590f0:8"]]
+ 00937680 ["INT_ADD", "register:40f0:8", ["const:937680:8", "const:4:8"]]
+ 00937680 ["CALL", null, ["callee:00c590f0:8"]]
~~~


<a id="compare-4fd2acd3cf9efcee3d077a3dce44708f"></a>

### [`009367ac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00936/009367ac.md) → [`00937758`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00937/00937758.md) FUN_00937758

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 6件 [`004901b4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00490/004901b4.md) [`005bc80c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005bc/005bc80c.md) [`00678920`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00678/00678920.md) [`00726818`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00726/00726818.md) [`007738ec`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00773/007738ec.md) · 呼出先 5件 [`00442970`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00442/00442970.md) [`0046d5e8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046d/0046d5e8.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md) [`00c58120`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58120.md) [`00c58320`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58320.md)
- 新版 呼出元 6件 [`004904d4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00490/004904d4.md) [`005bcbbc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005bc/005bcbbc.md) [`00678cd0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00678/00678cd0.md) [`00726bc8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00726/00726bc8.md) [`00773cc8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00773/00773cc8.md) · 呼出先 5件 [`00442c90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00442/00442c90.md) [`0046d908`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0046d/0046d908.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md) [`00c590f0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c590f0.md) [`00c592f0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c592f0.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 99.03% / 新版 99.03%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "009378e8",
      "incomplete_value": false,
      "site": "009378ec",
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
      "definition_site": "0093693c",
      "incomplete_value": false,
      "site": "00936940",
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
      "009378e8",
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
      "009378e8",
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
- 00936940 ["INT_ADD", "register:40f0:8", ["const:936940:8", "const:4:8"]]
- 00936940 ["CALL", null, ["callee:00442c90:8"]]
+ 009378ec ["INT_ADD", "register:40f0:8", ["const:9378ec:8", "const:4:8"]]
+ 009378ec ["CALL", null, ["callee:00442c90:8"]]
- 00936844 ["INT_ADD", "register:40f0:8", ["const:936844:8", "const:4:8"]]
- 00936844 ["CALL", null, ["callee:00c590f0:8"]]
+ 009377f0 ["INT_ADD", "register:40f0:8", ["const:9377f0:8", "const:4:8"]]
+ 009377f0 ["CALL", null, ["callee:00c590f0:8"]]
- 0093686c ["INT_ADD", "register:40f0:8", ["const:93686c:8", "const:4:8"]]
- 0093686c ["CALL", null, ["callee:00c590f0:8"]]
+ 00937818 ["INT_ADD", "register:40f0:8", ["const:937818:8", "const:4:8"]]
+ 00937818 ["CALL", null, ["callee:00c590f0:8"]]
~~~


<a id="compare-d29bc76b8744a28730480278ad1a2068"></a>

### [`00936948`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00936/00936948.md) → [`009378f4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00937/009378f4.md) _INIT_186

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 5件 [`0043aeb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043a/0043aeb0.md) [`0043b838`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b838.md) [`00c57f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f00.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)
- 新版 呼出元 0件  · 呼出先 5件 [`0043b1d0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043b1d0.md) [`0043bb58`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bb58.md) [`00c58ed0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58ed0.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies, operation_sequence, store_value

命令の説明率　旧版 85.88% / 新版 85.88%

優先判定に残った影響 `call_argument_candidate` 3件, `store_value` 5件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00937930",
      "incomplete_value": true,
      "site": "0093794c",
      "value": [
        "LOAD",
        "16",
        [
          [
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
      "definition_site": "00936984",
      "incomplete_value": true,
      "site": "009369a0",
      "value": [
        "LOAD",
        "16",
        [
          [
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
      "definition_site": "00937954",
      "incomplete_value": true,
      "site": "00937970",
      "value": [
        "LOAD",
        "16",
        [
          [
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
      "definition_site": "009369a8",
      "incomplete_value": true,
      "site": "009369c4",
      "value": [
        "LOAD",
        "16",
        [
          [
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
      "definition_site": "00937994",
      "incomplete_value": true,
      "site": "009379ac",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:fe0:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "009369e8",
      "incomplete_value": true,
      "site": "00936a00",
      "value": [
        "LOAD",
        "16",
        [
          [
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
      "00937930",
      "READ",
      [
        "storage",
        "002b7f66",
        null,
        "string"
      ]
    ],
    [
      "00937954",
      "READ",
      [
        "storage",
        "002b7f79",
        null,
        "string"
      ]
    ],
    [
      "00937974",
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
      "00937930",
      "READ",
      [
        "storage",
        "002b8035",
        null,
        "string"
      ]
    ],
    [
      "00937954",
      "READ",
      [
        "storage",
        "002b8048",
        null,
        "string"
      ]
    ],
    [
      "00937974",
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
- 00936b7c ["INT_ADD", "register:40f0:8", ["const:936b7c:8", "const:4:8"]]
- 00936b7c ["CALL", null, ["callee:00c58ed0:8"]]
+ 00937b28 ["INT_ADD", "register:40f0:8", ["const:937b28:8", "const:4:8"]]
+ 00937b28 ["CALL", null, ["callee:00c58ed0:8"]]
- 00936970 ["COPY", "register:4098:8", ["const:1123000:8"]]
+ 0093791c ["COPY", "register:4098:8", ["const:1124000:8"]]
- 00936974 ["COPY", "tmp:0:8", ["const:bc8:8"]]
- 00936974 ["INT_CARRY", "register:105:1", ["register:4098:8", "tmp:0:8"]]
- 00936974 ["INT_SCARRY", "register:106:1", ["register:4098:8", "tmp:0:8"]]
- 00936974 ["INT_ADD", "tmp:1:8", ["register:4098:8", "tmp:0:8"]]
+ 00937920 ["COPY", "tmp:0:8", ["const:b88:8"]]
+ 00937920 ["INT_CARRY", "register:105:1", ["register:4098:8", "tmp:0:8"]]
+ 00937920 ["INT_SCARRY", "register:106:1", ["register:4098:8", "tmp:0:8"]]
+ 00937920 ["INT_ADD", "tmp:1:8", ["register:4098:8", "tmp:0:8"]]
~~~


<a id="compare-6f508495ae6351e03e72ba92f5a814f5"></a>

### [`00936d08`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00936/00936d08.md) → [`00937cb4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00937/00937cb4.md) FUN_00937cb4

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00b28ff0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b28/00b28ff0.md) · 呼出先 21件 [`0043bbe4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bbe4.md) [`00440f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00440/00440f00.md) [`004410cc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00441/004410cc.md) [`00470880`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00470/00470880.md) [`00487e60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00487/00487e60.md)
- 新版 呼出元 1件 [`00b29fe4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b29/00b29fe4.md) · 呼出先 21件 [`0043bf04`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bf04.md) [`00441220`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00441/00441220.md) [`004413ec`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00441/004413ec.md) [`00470ba0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00470/00470ba0.md) [`00488180`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00488/00488180.md)

変更の種類 constant, operands_and_dependencies, operation_sequence, store_destination, store_value

命令の説明率　旧版 95.41% / 新版 95.41%

優先判定に残った影響 `store_destination` 1件, `store_value` 11件

アドレスに依存する影響 `store_value` 2件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "00937cf8",
      "incomplete_value": false,
      "site": "00937d04",
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
      "definition_site": "00936d4c",
      "incomplete_value": false,
      "site": "00936d58",
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
    "ordinal": 14,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00937d18",
      "incomplete_value": true,
      "site": "00937d34",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:735:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00936d6c",
      "incomplete_value": true,
      "site": "00936d88",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:66a:8"
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
      "definition_site": "00937e64",
      "incomplete_value": true,
      "site": "00937e70",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:820:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00936eb8",
      "incomplete_value": true,
      "site": "00936ec4",
      "value": [
        "LOAD",
        "16",
        [
          [
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
      "00937d04",
      "DATA",
      [
        "storage",
        "00c64e08",
        null,
        "undefined *"
      ]
    ],
    [
      "00937d18",
      "READ",
      [
        "storage",
        "002a266a",
        null,
        "string"
      ]
    ],
    [
      "00937e64",
      "READ",
      [
        "storage",
        "002c27d0",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "00937d04",
      "DATA",
      [
        "storage",
        "00c65dd8",
        null,
        "undefined *"
      ]
    ],
    [
      "00937d18",
      "READ",
      [
        "storage",
        "002a2735",
        null,
        "string"
      ]
    ],
    [
      "00937e64",
      "READ",
      [
        "storage",
        "002c2820",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 00936d40 ["INT_ADD", "register:40f0:8", ["const:936d40:8", "const:4:8"]]
- 00936d40 ["CALL", null, ["callee:00488180:8"]]
+ 00937cec ["INT_ADD", "register:40f0:8", ["const:937cec:8", "const:4:8"]]
+ 00937cec ["CALL", null, ["callee:00488180:8"]]
- 00936d48 ["COPY", "register:4040:8", ["const:c64000:8"]]
+ 00937cf4 ["COPY", "register:4040:8", ["const:c65000:8"]]
- 00936d4c ["COPY", "tmp:0:8", ["const:e08:8"]]
- 00936d4c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00936d4c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00936d4c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00937cf8 ["COPY", "tmp:0:8", ["const:dd8:8"]]
+ 00937cf8 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00937cf8 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00937cf8 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-e05b88655d1c2bdc00dc68b5e7c85242"></a>

### [`00938d78`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00938/00938d78.md) → [`00939d24`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00939/00939d24.md) _INIT_187

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 5件 [`0043aeb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043a/0043aeb0.md) [`0043b838`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b838.md) [`00c57f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f00.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)
- 新版 呼出元 0件  · 呼出先 5件 [`0043b1d0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043b1d0.md) [`0043bb58`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bb58.md) [`00c58ed0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58ed0.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies, operation_sequence, store_value

命令の説明率　旧版 87.57% / 新版 87.57%

優先判定に残った影響 `call_argument_candidate` 3件, `store_value` 4件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00939d84",
      "incomplete_value": true,
      "site": "00939da0",
      "value": [
        "LOAD",
        "16",
        [
          [
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
      "definition_site": "00938dd8",
      "incomplete_value": true,
      "site": "00938df4",
      "value": [
        "LOAD",
        "16",
        [
          [
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
      "definition_site": "00939da4",
      "incomplete_value": true,
      "site": "00939dc0",
      "value": [
        "LOAD",
        "16",
        [
          [
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
      "definition_site": "00938df8",
      "incomplete_value": true,
      "site": "00938e14",
      "value": [
        "LOAD",
        "16",
        [
          [
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
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00939de0",
      "incomplete_value": true,
      "site": "00939dfc",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:643:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00938e34",
      "incomplete_value": true,
      "site": "00938e50",
      "value": [
        "LOAD",
        "16",
        [
          [
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
      "00939d60",
      "READ",
      [
        "storage",
        "002b7f66",
        null,
        "string"
      ]
    ],
    [
      "00939d84",
      "READ",
      [
        "storage",
        "002b7f79",
        null,
        "string"
      ]
    ],
    [
      "00939da4",
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
      "00939d60",
      "READ",
      [
        "storage",
        "002b8035",
        null,
        "string"
      ]
    ],
    [
      "00939d84",
      "READ",
      [
        "storage",
        "002b8048",
        null,
        "string"
      ]
    ],
    [
      "00939da4",
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
- 00938fac ["INT_ADD", "register:40f0:8", ["const:938fac:8", "const:4:8"]]
- 00938fac ["CALL", null, ["callee:00c58ed0:8"]]
+ 00939f58 ["INT_ADD", "register:40f0:8", ["const:939f58:8", "const:4:8"]]
+ 00939f58 ["CALL", null, ["callee:00c58ed0:8"]]
- 00938da0 ["COPY", "register:4098:8", ["const:1123000:8"]]
+ 00939d4c ["COPY", "register:4098:8", ["const:1124000:8"]]
- 00938da4 ["COPY", "tmp:0:8", ["const:be0:8"]]
- 00938da4 ["INT_CARRY", "register:105:1", ["register:4098:8", "tmp:0:8"]]
- 00938da4 ["INT_SCARRY", "register:106:1", ["register:4098:8", "tmp:0:8"]]
- 00938da4 ["INT_ADD", "tmp:1:8", ["register:4098:8", "tmp:0:8"]]
+ 00939d50 ["COPY", "tmp:0:8", ["const:ba0:8"]]
+ 00939d50 ["INT_CARRY", "register:105:1", ["register:4098:8", "tmp:0:8"]]
+ 00939d50 ["INT_SCARRY", "register:106:1", ["register:4098:8", "tmp:0:8"]]
+ 00939d50 ["INT_ADD", "tmp:1:8", ["register:4098:8", "tmp:0:8"]]
~~~


<a id="compare-2cacc2b21d9c5d6ce4b4d05e4e175acd"></a>

### [`00939108`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00939/00939108.md) → [`0093a0b4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0093a/0093a0b4.md) FUN_0093a0b4

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00b28ff0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b28/00b28ff0.md) · 呼出先 20件 [`0043bbe4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bbe4.md) [`004410cc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00441/004410cc.md) [`00487e60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00487/00487e60.md) [`00488474`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00488/00488474.md) [`00488698`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00488/00488698.md)
- 新版 呼出元 1件 [`00b29fe4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b29/00b29fe4.md) · 呼出先 20件 [`0043bf04`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bf04.md) [`004413ec`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00441/004413ec.md) [`00488180`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00488/00488180.md) [`00488794`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00488/00488794.md) [`004889b8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00488/004889b8.md)

変更の種類 constant, operands_and_dependencies, store_destination, store_value

命令の説明率　旧版 98.12% / 新版 98.12%

優先判定に残った影響 `store_destination` 1件, `store_value` 6件

アドレスに依存する影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "0093a0f8",
      "incomplete_value": false,
      "site": "0093a104",
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
      "definition_site": "0093914c",
      "incomplete_value": false,
      "site": "00939158",
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
    "ordinal": 14,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "0093a118",
      "incomplete_value": true,
      "site": "0093a130",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:df7:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0093916c",
      "incomplete_value": true,
      "site": "00939184",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:d2a:8"
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
      "definition_site": "0093a134",
      "incomplete_value": true,
      "site": "0093a134",
      "value": [
        "LOAD",
        "8",
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
      "definition_site": "00939188",
      "incomplete_value": true,
      "site": "00939188",
      "value": [
        "LOAD",
        "8",
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
      "0093a104",
      "DATA",
      [
        "storage",
        "00c64e08",
        null,
        "undefined *"
      ]
    ],
    [
      "0093a118",
      "READ",
      [
        "storage",
        "002acd2a",
        null,
        "string"
      ]
    ],
    [
      "0093a120",
      "READ",
      [
        "storage",
        "002acd37",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "0093a104",
      "DATA",
      [
        "storage",
        "00c65dd8",
        null,
        "undefined *"
      ]
    ],
    [
      "0093a118",
      "READ",
      [
        "storage",
        "002acdf7",
        null,
        "string"
      ]
    ],
    [
      "0093a120",
      "READ",
      [
        "storage",
        "002ace04",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 00939140 ["INT_ADD", "register:40f0:8", ["const:939140:8", "const:4:8"]]
- 00939140 ["CALL", null, ["callee:00488180:8"]]
+ 0093a0ec ["INT_ADD", "register:40f0:8", ["const:93a0ec:8", "const:4:8"]]
+ 0093a0ec ["CALL", null, ["callee:00488180:8"]]
- 00939148 ["COPY", "register:4040:8", ["const:c64000:8"]]
+ 0093a0f4 ["COPY", "register:4040:8", ["const:c65000:8"]]
- 0093914c ["COPY", "tmp:0:8", ["const:e08:8"]]
- 0093914c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 0093914c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 0093914c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 0093a0f8 ["COPY", "tmp:0:8", ["const:dd8:8"]]
+ 0093a0f8 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 0093a0f8 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 0093a0f8 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-00888c0de282aa89cbad2c42034d864f"></a>

### [`0093b7c4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0093b/0093b7c4.md) → [`0093c770`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0093c/0093c770.md) FUN_0093c770

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`0089e8d4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0089e/0089e8d4.md) · 呼出先 63件 [`0043b7a4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b7a4.md) [`0043bb60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bb60.md) [`0043bbe4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bbe4.md) [`00440f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00440/00440f00.md) [`00447f34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00447/00447f34.md)
- 新版 呼出元 1件 [`0089f880`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0089f/0089f880.md) · 呼出先 63件 [`0043bac4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bac4.md) [`0043be80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043be80.md) [`0043bf04`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bf04.md) [`00441220`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00441/00441220.md) [`00448254`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00448/00448254.md)

変更の種類 call, call_argument_candidate, call_target, constant, operands_and_dependencies, store_value

命令の説明率　旧版 95.30% / 新版 95.30%

優先判定に残った影響 `call_argument_candidate` 18件, `call_target` 9件, `store_value` 34件

アドレスに依存する影響 `store_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "0093c9b0",
      "incomplete_value": true,
      "site": "0093c9c8",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:aee:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0093ba04",
      "incomplete_value": true,
      "site": "0093ba1c",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:a1f:8"
              ]
            ]
          ]
        ]
      ]
    },
    "ordinal": 37,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "0093cae4",
      "incomplete_value": true,
      "site": "0093caec",
      "value": [
        "LOAD",
        "16",
        [
          [
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
      "definition_site": "0093bb38",
      "incomplete_value": true,
      "site": "0093bb40",
      "value": [
        "LOAD",
        "16",
        [
          [
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
    "ordinal": 52,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "0093caf0",
      "incomplete_value": true,
      "site": "0093caf8",
      "value": [
        "LOAD",
        "16",
        [
          [
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
      "definition_site": "0093bb44",
      "incomplete_value": true,
      "site": "0093bb4c",
      "value": [
        "LOAD",
        "16",
        [
          [
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
      "0093c994",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0048cd38"
      ]
    ],
    [
      "0093c9b0",
      "READ",
      [
        "storage",
        "002b7a1f",
        null,
        "string"
      ]
    ],
    [
      "0093c9c4",
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
      "0093c994",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0048d058"
      ]
    ],
    [
      "0093c9b0",
      "READ",
      [
        "storage",
        "002b7aee",
        null,
        "string"
      ]
    ],
    [
      "0093c9c4",
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
- 0093be68 ["INT_ADD", "register:40f0:8", ["const:93be68:8", "const:4:8"]]
- 0093be68 ["CALL", null, ["callee:00c58f50:8"]]
+ 0093ce14 ["INT_ADD", "register:40f0:8", ["const:93ce14:8", "const:4:8"]]
+ 0093ce14 ["CALL", null, ["callee:00c58f50:8"]]
- 0093c688 ["INT_ADD", "register:40f0:8", ["const:93c688:8", "const:4:8"]]
- 0093c688 ["CALL", null, ["callee:005c1b8c:8"]]
+ 0093d634 ["INT_ADD", "register:40f0:8", ["const:93d634:8", "const:4:8"]]
+ 0093d634 ["CALL", null, ["callee:005c1b8c:8"]]
- 0093ce98 ["INT_ADD", "register:40f0:8", ["const:93ce98:8", "const:4:8"]]
- 0093ce98 ["CALL", null, ["callee:00c58f50:8"]]
+ 0093de44 ["INT_ADD", "register:40f0:8", ["const:93de44:8", "const:4:8"]]
+ 0093de44 ["CALL", null, ["callee:00c58f50:8"]]
~~~


<a id="compare-cc4b807b79ea4e80b6d07ac735724338"></a>

### [`0093f404`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0093f/0093f404.md) → [`009403b0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00940/009403b0.md) FUN_009403b0

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`0093f22c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0093f/0093f22c.md) · 呼出先 1件 [`0043b7b8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b7b8.md)
- 新版 呼出元 1件 [`009401d8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00940/009401d8.md) · 呼出先 1件 [`0043bad8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bad8.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 80.00% / 新版 80.00%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "009403bc",
      "incomplete_value": false,
      "site": "009403c0",
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
      "definition_site": "0093f410",
      "incomplete_value": false,
      "site": "0093f414",
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
      "009403bc",
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
      "009403bc",
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
- 0093f414 ["INT_ADD", "register:40f0:8", ["const:93f414:8", "const:4:8"]]
- 0093f414 ["CALL", null, ["callee:0043bad8:8"]]
+ 009403c0 ["INT_ADD", "register:40f0:8", ["const:9403c0:8", "const:4:8"]]
+ 009403c0 ["CALL", null, ["callee:0043bad8:8"]]
- 0093f40c ["COPY", "register:4000:8", ["const:2b7000:8"]]
+ 009403b8 ["COPY", "register:4000:8", ["const:2b8000:8"]]
- 0093f410 ["COPY", "tmp:0:8", ["const:f8c:8"]]
- 0093f410 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 0093f410 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 0093f410 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 009403bc ["COPY", "tmp:0:8", ["const:5b:8"]]
+ 009403bc ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 009403bc ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 009403bc ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
~~~


<a id="compare-94b04829a77fda5ae3a44862da12c66a"></a>

### [`009447f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00944/009447f0.md) → [`0094579c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00945/0094579c.md) FUN_0094579c

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`0093b7c4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0093b/0093b7c4.md) · 呼出先 1件 [`0043b7b8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b7b8.md)
- 新版 呼出元 1件 [`0093c770`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0093c/0093c770.md) · 呼出先 1件 [`0043bad8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bad8.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 80.00% / 新版 80.00%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "009457a8",
      "incomplete_value": false,
      "site": "009457ac",
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
      "definition_site": "009447fc",
      "incomplete_value": false,
      "site": "00944800",
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
      "009457a8",
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
      "009457a8",
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
- 00944800 ["INT_ADD", "register:40f0:8", ["const:944800:8", "const:4:8"]]
- 00944800 ["CALL", null, ["callee:0043bad8:8"]]
+ 009457ac ["INT_ADD", "register:40f0:8", ["const:9457ac:8", "const:4:8"]]
+ 009457ac ["CALL", null, ["callee:0043bad8:8"]]
- 009447f8 ["COPY", "register:4000:8", ["const:2b7000:8"]]
+ 009457a4 ["COPY", "register:4000:8", ["const:2b8000:8"]]
- 009447fc ["COPY", "tmp:0:8", ["const:f8c:8"]]
- 009447fc ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 009447fc ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 009447fc ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 009457a8 ["COPY", "tmp:0:8", ["const:5b:8"]]
+ 009457a8 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 009457a8 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 009457a8 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
~~~


<a id="compare-755e2c21cd7fd2d228c65c092748897c"></a>

### [`00944804`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00944/00944804.md) → [`009457b0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00945/009457b0.md) FUN_009457b0

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 2件 [`0093b7c4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0093b/0093b7c4.md) [`00944804`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00944/00944804.md) · 呼出先 22件 [`0043b7a4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b7a4.md) [`0043bb60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bb60.md) [`0043de18`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043d/0043de18.md) [`00440fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00440/00440fb0.md) [`00441d2c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00441/00441d2c.md)
- 新版 呼出元 2件 [`0093c770`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0093c/0093c770.md) [`009457b0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00945/009457b0.md) · 呼出先 22件 [`0043bac4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bac4.md) [`0043be80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043be80.md) [`0043e138`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043e/0043e138.md) [`004412d0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00441/004412d0.md) [`0044204c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00442/0044204c.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 98.48% / 新版 98.48%

優先判定に残った影響 `call_argument_candidate` 6件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00945908",
      "incomplete_value": false,
      "site": "00945910",
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
      "definition_site": "0094495c",
      "incomplete_value": false,
      "site": "00944964",
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
      "definition_site": "0094592c",
      "incomplete_value": false,
      "site": "00945938",
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
      "definition_site": "00944980",
      "incomplete_value": false,
      "site": "0094498c",
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
      "definition_site": "00945a60",
      "incomplete_value": false,
      "site": "00945a68",
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
      "definition_site": "00944ab4",
      "incomplete_value": false,
      "site": "00944abc",
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
      "00945908",
      "PARAM",
      [
        "storage",
        "002b7f93",
        null,
        null
      ]
    ],
    [
      "0094592c",
      "PARAM",
      [
        "storage",
        "002c0f29",
        null,
        "string"
      ]
    ],
    [
      "00945a60",
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
      "00945908",
      "PARAM",
      [
        "storage",
        "002b8062",
        null,
        null
      ]
    ],
    [
      "0094592c",
      "PARAM",
      [
        "storage",
        "002c0f73",
        null,
        "string"
      ]
    ],
    [
      "00945a60",
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
- 00944964 ["INT_ADD", "register:40f0:8", ["const:944964:8", "const:4:8"]]
- 00944964 ["CALL", null, ["callee:004421f4:8"]]
+ 00945910 ["INT_ADD", "register:40f0:8", ["const:945910:8", "const:4:8"]]
+ 00945910 ["CALL", null, ["callee:004421f4:8"]]
- 0094498c ["INT_ADD", "register:40f0:8", ["const:94498c:8", "const:4:8"]]
- 0094498c ["CALL", null, ["callee:00442b54:8"]]
+ 00945938 ["INT_ADD", "register:40f0:8", ["const:945938:8", "const:4:8"]]
+ 00945938 ["CALL", null, ["callee:00442b54:8"]]
- 00944abc ["INT_ADD", "register:40f0:8", ["const:944abc:8", "const:4:8"]]
- 00944abc ["CALL", null, ["callee:004421f4:8"]]
+ 00945a68 ["INT_ADD", "register:40f0:8", ["const:945a68:8", "const:4:8"]]
+ 00945a68 ["CALL", null, ["callee:004421f4:8"]]
~~~


<a id="compare-6e7322e838d8793e27cffa9cff21c43b"></a>

### [`009452c8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00945/009452c8.md) → [`00946274`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00946/00946274.md) FUN_00946274

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`0093b7c4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0093b/0093b7c4.md) · 呼出先 1件 [`0043b7b8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b7b8.md)
- 新版 呼出元 1件 [`0093c770`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0093c/0093c770.md) · 呼出先 1件 [`0043bad8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bad8.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 80.00% / 新版 80.00%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00946280",
      "incomplete_value": false,
      "site": "00946284",
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
      "definition_site": "009452d4",
      "incomplete_value": false,
      "site": "009452d8",
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
      "00946280",
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
      "00946280",
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
- 009452d8 ["INT_ADD", "register:40f0:8", ["const:9452d8:8", "const:4:8"]]
- 009452d8 ["CALL", null, ["callee:0043bad8:8"]]
+ 00946284 ["INT_ADD", "register:40f0:8", ["const:946284:8", "const:4:8"]]
+ 00946284 ["CALL", null, ["callee:0043bad8:8"]]
- 009452d0 ["COPY", "register:4000:8", ["const:2b7000:8"]]
+ 0094627c ["COPY", "register:4000:8", ["const:2b8000:8"]]
- 009452d4 ["COPY", "tmp:0:8", ["const:f8c:8"]]
- 009452d4 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 009452d4 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 009452d4 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 00946280 ["COPY", "tmp:0:8", ["const:5b:8"]]
+ 00946280 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 00946280 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 00946280 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
~~~


<a id="compare-7229ac8bc136c5399fae7de7694a0e4c"></a>

### [`00946f30`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00946/00946f30.md) → [`00947edc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00947/00947edc.md) _INIT_188

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
      "definition_site": "00947f18",
      "incomplete_value": true,
      "site": "00947f34",
      "value": [
        "LOAD",
        "16",
        [
          [
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
      "definition_site": "00946f6c",
      "incomplete_value": true,
      "site": "00946f88",
      "value": [
        "LOAD",
        "16",
        [
          [
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
      "definition_site": "00947f3c",
      "incomplete_value": true,
      "site": "00947f58",
      "value": [
        "LOAD",
        "16",
        [
          [
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
      "definition_site": "00946f90",
      "incomplete_value": true,
      "site": "00946fac",
      "value": [
        "LOAD",
        "16",
        [
          [
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
      "definition_site": "00947f5c",
      "incomplete_value": true,
      "site": "00947f78",
      "value": [
        "LOAD",
        "16",
        [
          [
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
      "definition_site": "00946fb0",
      "incomplete_value": true,
      "site": "00946fcc",
      "value": [
        "LOAD",
        "16",
        [
          [
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
      "00947f18",
      "READ",
      [
        "storage",
        "002b7f66",
        null,
        "string"
      ]
    ],
    [
      "00947f3c",
      "READ",
      [
        "storage",
        "002b7f79",
        null,
        "string"
      ]
    ],
    [
      "00947f5c",
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
      "00947f18",
      "READ",
      [
        "storage",
        "002b8035",
        null,
        "string"
      ]
    ],
    [
      "00947f3c",
      "READ",
      [
        "storage",
        "002b8048",
        null,
        "string"
      ]
    ],
    [
      "00947f5c",
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
- 00947090 ["INT_ADD", "register:40f0:8", ["const:947090:8", "const:4:8"]]
- 00947090 ["CALL", null, ["callee:0043bb58:8"]]
+ 0094803c ["INT_ADD", "register:40f0:8", ["const:94803c:8", "const:4:8"]]
+ 0094803c ["CALL", null, ["callee:0043bb58:8"]]
- 00947164 ["INT_ADD", "register:40f0:8", ["const:947164:8", "const:4:8"]]
- 00947164 ["CALL", null, ["callee:00c58ed0:8"]]
+ 00948110 ["INT_ADD", "register:40f0:8", ["const:948110:8", "const:4:8"]]
+ 00948110 ["CALL", null, ["callee:00c58ed0:8"]]
- 00946f58 ["COPY", "register:4098:8", ["const:1123000:8"]]
+ 00947f04 ["COPY", "register:4098:8", ["const:1124000:8"]]
~~~


<a id="compare-604cbe0df9bd6500ce8ade2eb7037e29"></a>

### [`009617f4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00961/009617f4.md) → [`009627a0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00962/009627a0.md) FUN_009627a0

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 25件 [`0047e91c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047e/0047e91c.md) [`0047edf4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047e/0047edf4.md) [`005cc9e0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005cc/005cc9e0.md) [`00604e94`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00604/00604e94.md) [`00664a2c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00664/00664a2c.md)
- 新版 呼出元 0件  · 呼出先 25件 [`0047ec3c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047e/0047ec3c.md) [`0047f114`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047f/0047f114.md) [`005ccd90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005cc/005ccd90.md) [`00605244`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00605/00605244.md) [`00664ddc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00664/00664ddc.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies, store_destination, store_value

命令の説明率　旧版 97.60% / 新版 97.60%

優先判定に残った影響 `call_argument_candidate` 11件, `store_destination` 14件, `store_value` 4件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_destination",
    "new": {
      "definition_site": "009632b8",
      "incomplete_value": false,
      "site": "009632b8",
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
      "definition_site": "0096230c",
      "incomplete_value": false,
      "site": "0096230c",
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
    "ordinal": 38,
    "slot": 1
  },
  {
    "confidence": "bounded",
    "kind": "store_destination",
    "new": {
      "definition_site": "009632bc",
      "incomplete_value": false,
      "site": "009632bc",
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
      "definition_site": "00962310",
      "incomplete_value": false,
      "site": "00962310",
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
    "ordinal": 39,
    "slot": 1
  },
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "009632b8",
      "incomplete_value": false,
      "site": "009632bc",
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
      "definition_site": "0096230c",
      "incomplete_value": false,
      "site": "00962310",
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
      "00962ffc",
      "READ",
      [
        "storage",
        "00ca5038",
        null,
        "undefined1"
      ]
    ],
    [
      "0096301c",
      "PARAM",
      [
        "storage",
        "00ca5000",
        null,
        "undefined8"
      ]
    ],
    [
      "00963090",
      "READ",
      [
        "storage",
        "00c9ad70",
        null,
        "pointer"
      ]
    ]
  ],
  "added": [
    [
      "00962ffc",
      "READ",
      [
        "storage",
        "00ca5ff8",
        null,
        "undefined1"
      ]
    ],
    [
      "0096301c",
      "PARAM",
      [
        "storage",
        "00ca5fc0",
        null,
        "undefined8"
      ]
    ],
    [
      "00963090",
      "READ",
      [
        "storage",
        "00c9bd40",
        null,
        "pointer"
      ]
    ]
  ]
}
~~~


~~~diff
- 009620f4 ["INT_ADD", "register:40f0:8", ["const:9620f4:8", "const:4:8"]]
- 009620f4 ["CALL", null, ["callee:0047ec3c:8"]]
+ 009630a0 ["INT_ADD", "register:40f0:8", ["const:9630a0:8", "const:4:8"]]
+ 009630a0 ["CALL", null, ["callee:0047ec3c:8"]]
- 009622e8 ["INT_ADD", "register:40f0:8", ["const:9622e8:8", "const:4:8"]]
- 009622e8 ["CALL", null, ["callee:00c58ef0:8"]]
+ 00963294 ["INT_ADD", "register:40f0:8", ["const:963294:8", "const:4:8"]]
+ 00963294 ["CALL", null, ["callee:00c58ef0:8"]]
- 00962324 ["INT_ADD", "register:40f0:8", ["const:962324:8", "const:4:8"]]
- 00962324 ["CALL", null, ["callee:00c58ed0:8"]]
+ 009632d0 ["INT_ADD", "register:40f0:8", ["const:9632d0:8", "const:4:8"]]
+ 009632d0 ["CALL", null, ["callee:00c58ed0:8"]]
~~~


<a id="compare-6b3cbd79c6282be6ec640c3e6058a3fd"></a>

### [`0097853c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00978/0097853c.md) → [`009794e8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00979/009794e8.md) FUN_009794e8

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 2件 [`009781fc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00978/009781fc.md) [`0097853c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00978/0097853c.md) · 呼出先 21件 [`0043b7a4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b7a4.md) [`0043bb60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bb60.md) [`0043de18`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043d/0043de18.md) [`00440fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00440/00440fb0.md) [`00441d2c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00441/00441d2c.md)
- 新版 呼出元 2件 [`009791a8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00979/009791a8.md) [`009794e8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00979/009794e8.md) · 呼出先 21件 [`0043bac4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bac4.md) [`0043be80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043be80.md) [`0043e138`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043e/0043e138.md) [`004412d0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00441/004412d0.md) [`0044204c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00442/0044204c.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 99.23% / 新版 99.23%

優先判定に残った影響 `call_argument_candidate` 3件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00979734",
      "incomplete_value": false,
      "site": "0097973c",
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
      "definition_site": "00978788",
      "incomplete_value": false,
      "site": "00978790",
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
    "ordinal": 3,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00979804",
      "incomplete_value": false,
      "site": "00979810",
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
      "definition_site": "00978858",
      "incomplete_value": false,
      "site": "00978864",
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
    "ordinal": 6,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00979f00",
      "incomplete_value": false,
      "site": "00979f08",
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
      "definition_site": "00978f54",
      "incomplete_value": false,
      "site": "00978f5c",
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
      "0097967c",
      "PARAM",
      [
        "storage",
        "002b7f93",
        null,
        null
      ]
    ],
    [
      "00979734",
      "PARAM",
      [
        "storage",
        "002b5e27",
        null,
        null
      ]
    ],
    [
      "00979750",
      "PARAM",
      [
        "storage",
        "002c0f29",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "0097967c",
      "PARAM",
      [
        "storage",
        "002b8062",
        null,
        null
      ]
    ],
    [
      "00979734",
      "PARAM",
      [
        "storage",
        "002b5ef6",
        null,
        null
      ]
    ],
    [
      "00979750",
      "PARAM",
      [
        "storage",
        "002c0f73",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 00978790 ["INT_ADD", "register:40f0:8", ["const:978790:8", "const:4:8"]]
- 00978790 ["CALL", null, ["callee:004421f4:8"]]
+ 0097973c ["INT_ADD", "register:40f0:8", ["const:97973c:8", "const:4:8"]]
+ 0097973c ["CALL", null, ["callee:004421f4:8"]]
- 00978864 ["INT_ADD", "register:40f0:8", ["const:978864:8", "const:4:8"]]
- 00978864 ["CALL", null, ["callee:00442b54:8"]]
+ 00979810 ["INT_ADD", "register:40f0:8", ["const:979810:8", "const:4:8"]]
+ 00979810 ["CALL", null, ["callee:00442b54:8"]]
- 00978f5c ["INT_ADD", "register:40f0:8", ["const:978f5c:8", "const:4:8"]]
- 00978f5c ["CALL", null, ["callee:0043e138:8"]]
+ 00979f08 ["INT_ADD", "register:40f0:8", ["const:979f08:8", "const:4:8"]]
+ 00979f08 ["CALL", null, ["callee:0043e138:8"]]
~~~


<a id="compare-ea6b14e76971486ebe43cbca6da3ccbe"></a>

### [`00979738`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00979/00979738.md) → [`0097a6e4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0097a/0097a6e4.md) FUN_0097a6e4

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 2件 [`0097853c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00978/0097853c.md) [`00979738`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00979/00979738.md) · 呼出先 21件 [`0043b7a4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b7a4.md) [`0043bb60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bb60.md) [`0043de18`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043d/0043de18.md) [`00440fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00440/00440fb0.md) [`00441d2c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00441/00441d2c.md)
- 新版 呼出元 2件 [`009794e8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00979/009794e8.md) [`0097a6e4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0097a/0097a6e4.md) · 呼出先 21件 [`0043bac4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bac4.md) [`0043be80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043be80.md) [`0043e138`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043e/0043e138.md) [`004412d0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00441/004412d0.md) [`0044204c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00442/0044204c.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 99.16% / 新版 99.16%

優先判定に残った影響 `call_argument_candidate` 7件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "0097a86c",
      "incomplete_value": false,
      "site": "0097a874",
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
      "definition_site": "009798c0",
      "incomplete_value": false,
      "site": "009798c8",
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
      "definition_site": "0097a924",
      "incomplete_value": false,
      "site": "0097a92c",
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
      "definition_site": "00979978",
      "incomplete_value": false,
      "site": "00979980",
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
    "ordinal": 3,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "0097a940",
      "incomplete_value": false,
      "site": "0097a94c",
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
      "definition_site": "00979994",
      "incomplete_value": false,
      "site": "009799a0",
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
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "0097a86c",
      "PARAM",
      [
        "storage",
        "002b7f93",
        null,
        null
      ]
    ],
    [
      "0097a924",
      "PARAM",
      [
        "storage",
        "002b5e27",
        null,
        null
      ]
    ],
    [
      "0097a940",
      "PARAM",
      [
        "storage",
        "002c0f29",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "0097a86c",
      "PARAM",
      [
        "storage",
        "002b8062",
        null,
        null
      ]
    ],
    [
      "0097a924",
      "PARAM",
      [
        "storage",
        "002b5ef6",
        null,
        null
      ]
    ],
    [
      "0097a940",
      "PARAM",
      [
        "storage",
        "002c0f73",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 009798c8 ["INT_ADD", "register:40f0:8", ["const:9798c8:8", "const:4:8"]]
- 009798c8 ["CALL", null, ["callee:004421f4:8"]]
+ 0097a874 ["INT_ADD", "register:40f0:8", ["const:97a874:8", "const:4:8"]]
+ 0097a874 ["CALL", null, ["callee:004421f4:8"]]
- 00979980 ["INT_ADD", "register:40f0:8", ["const:979980:8", "const:4:8"]]
- 00979980 ["CALL", null, ["callee:004421f4:8"]]
+ 0097a92c ["INT_ADD", "register:40f0:8", ["const:97a92c:8", "const:4:8"]]
+ 0097a92c ["CALL", null, ["callee:004421f4:8"]]
- 009799a0 ["INT_ADD", "register:40f0:8", ["const:9799a0:8", "const:4:8"]]
- 009799a0 ["CALL", null, ["callee:00442b54:8"]]
+ 0097a94c ["INT_ADD", "register:40f0:8", ["const:97a94c:8", "const:4:8"]]
+ 0097a94c ["CALL", null, ["callee:00442b54:8"]]
~~~


<a id="compare-ca2adc05bf8b704916d94f75708b9d13"></a>

### [`0097a74c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0097a/0097a74c.md) → [`0097b6f8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0097b/0097b6f8.md) FUN_0097b6f8

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 2件 [`00979738`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00979/00979738.md) [`0097a74c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0097a/0097a74c.md) · 呼出先 22件 [`0043b7a4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b7a4.md) [`0043bb60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bb60.md) [`0043de18`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043d/0043de18.md) [`00440fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00440/00440fb0.md) [`00441d2c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00441/00441d2c.md)
- 新版 呼出元 2件 [`0097a6e4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0097a/0097a6e4.md) [`0097b6f8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0097b/0097b6f8.md) · 呼出先 22件 [`0043bac4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bac4.md) [`0043be80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043be80.md) [`0043e138`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043e/0043e138.md) [`004412d0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00441/004412d0.md) [`0044204c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00442/0044204c.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 99.13% / 新版 99.13%

優先判定に残った影響 `call_argument_candidate` 5件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "0097b864",
      "incomplete_value": false,
      "site": "0097b86c",
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
      "definition_site": "0097a8b8",
      "incomplete_value": false,
      "site": "0097a8c0",
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
      "definition_site": "0097b8b8",
      "incomplete_value": false,
      "site": "0097b8c4",
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
      "definition_site": "0097a90c",
      "incomplete_value": false,
      "site": "0097a918",
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
      "definition_site": "0097b9f4",
      "incomplete_value": false,
      "site": "0097b9fc",
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
      "definition_site": "0097aa48",
      "incomplete_value": false,
      "site": "0097aa50",
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
      "0097b864",
      "PARAM",
      [
        "storage",
        "002b7f93",
        null,
        null
      ]
    ],
    [
      "0097b8b8",
      "PARAM",
      [
        "storage",
        "002c0f29",
        null,
        "string"
      ]
    ],
    [
      "0097b9f4",
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
      "0097b864",
      "PARAM",
      [
        "storage",
        "002b8062",
        null,
        null
      ]
    ],
    [
      "0097b8b8",
      "PARAM",
      [
        "storage",
        "002c0f73",
        null,
        "string"
      ]
    ],
    [
      "0097b9f4",
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
- 0097a8c0 ["INT_ADD", "register:40f0:8", ["const:97a8c0:8", "const:4:8"]]
- 0097a8c0 ["CALL", null, ["callee:004421f4:8"]]
+ 0097b86c ["INT_ADD", "register:40f0:8", ["const:97b86c:8", "const:4:8"]]
+ 0097b86c ["CALL", null, ["callee:004421f4:8"]]
- 0097a918 ["INT_ADD", "register:40f0:8", ["const:97a918:8", "const:4:8"]]
- 0097a918 ["CALL", null, ["callee:00442b54:8"]]
+ 0097b8c4 ["INT_ADD", "register:40f0:8", ["const:97b8c4:8", "const:4:8"]]
+ 0097b8c4 ["CALL", null, ["callee:00442b54:8"]]
- 0097aa50 ["INT_ADD", "register:40f0:8", ["const:97aa50:8", "const:4:8"]]
- 0097aa50 ["CALL", null, ["callee:004421f4:8"]]
+ 0097b9fc ["INT_ADD", "register:40f0:8", ["const:97b9fc:8", "const:4:8"]]
+ 0097b9fc ["CALL", null, ["callee:004421f4:8"]]
~~~


<a id="compare-32da280e6722461589178b1b7cfde6eb"></a>

### [`0097b6e8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0097b/0097b6e8.md) → [`0097c694`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0097c/0097c694.md) FUN_0097c694

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 2件 [`0097a74c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0097a/0097a74c.md) [`0097b6e8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0097b/0097b6e8.md) · 呼出先 21件 [`0043b7a4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b7a4.md) [`0043bb60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bb60.md) [`0043de18`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043d/0043de18.md) [`00440fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00440/00440fb0.md) [`00441d2c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00441/00441d2c.md)
- 新版 呼出元 2件 [`0097b6f8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0097b/0097b6f8.md) [`0097c694`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0097c/0097c694.md) · 呼出先 21件 [`0043bac4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bac4.md) [`0043be80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043be80.md) [`0043e138`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043e/0043e138.md) [`004412d0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00441/004412d0.md) [`0044204c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00442/0044204c.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 99.06% / 新版 99.06%

優先判定に残った影響 `call_argument_candidate` 6件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "0097c80c",
      "incomplete_value": false,
      "site": "0097c814",
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
      "definition_site": "0097b860",
      "incomplete_value": false,
      "site": "0097b868",
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
      "definition_site": "0097c8c4",
      "incomplete_value": false,
      "site": "0097c8cc",
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
      "definition_site": "0097b918",
      "incomplete_value": false,
      "site": "0097b920",
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
    "ordinal": 3,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "0097c8e0",
      "incomplete_value": false,
      "site": "0097c8ec",
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
      "definition_site": "0097b934",
      "incomplete_value": false,
      "site": "0097b940",
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
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "0097c80c",
      "PARAM",
      [
        "storage",
        "002b7f93",
        null,
        null
      ]
    ],
    [
      "0097c8c4",
      "PARAM",
      [
        "storage",
        "002b5e27",
        null,
        null
      ]
    ],
    [
      "0097c8e0",
      "PARAM",
      [
        "storage",
        "002c0f29",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "0097c80c",
      "PARAM",
      [
        "storage",
        "002b8062",
        null,
        null
      ]
    ],
    [
      "0097c8c4",
      "PARAM",
      [
        "storage",
        "002b5ef6",
        null,
        null
      ]
    ],
    [
      "0097c8e0",
      "PARAM",
      [
        "storage",
        "002c0f73",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 0097b868 ["INT_ADD", "register:40f0:8", ["const:97b868:8", "const:4:8"]]
- 0097b868 ["CALL", null, ["callee:004421f4:8"]]
+ 0097c814 ["INT_ADD", "register:40f0:8", ["const:97c814:8", "const:4:8"]]
+ 0097c814 ["CALL", null, ["callee:004421f4:8"]]
- 0097b920 ["INT_ADD", "register:40f0:8", ["const:97b920:8", "const:4:8"]]
- 0097b920 ["CALL", null, ["callee:004421f4:8"]]
+ 0097c8cc ["INT_ADD", "register:40f0:8", ["const:97c8cc:8", "const:4:8"]]
+ 0097c8cc ["CALL", null, ["callee:004421f4:8"]]
- 0097b940 ["INT_ADD", "register:40f0:8", ["const:97b940:8", "const:4:8"]]
- 0097b940 ["CALL", null, ["callee:00442b54:8"]]
+ 0097c8ec ["INT_ADD", "register:40f0:8", ["const:97c8ec:8", "const:4:8"]]
+ 0097c8ec ["CALL", null, ["callee:00442b54:8"]]
~~~


<a id="compare-9a0b70a0e22acffb475535eaac54e692"></a>

### [`0097c4fc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0097c/0097c4fc.md) → [`0097d4a8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0097d/0097d4a8.md) FUN_0097d4a8

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 2件 [`0097b6e8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0097b/0097b6e8.md) [`0097c4fc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0097c/0097c4fc.md) · 呼出先 22件 [`0043b7a4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b7a4.md) [`0043bb60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bb60.md) [`0043de18`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043d/0043de18.md) [`00440fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00440/00440fb0.md) [`00441d2c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00441/00441d2c.md)
- 新版 呼出元 2件 [`0097c694`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0097c/0097c694.md) [`0097d4a8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0097d/0097d4a8.md) · 呼出先 22件 [`0043bac4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bac4.md) [`0043be80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043be80.md) [`0043e138`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043e/0043e138.md) [`004412d0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00441/004412d0.md) [`0044204c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00442/0044204c.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 98.98% / 新版 98.98%

優先判定に残った影響 `call_argument_candidate` 7件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "0097d60c",
      "incomplete_value": false,
      "site": "0097d614",
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
      "definition_site": "0097c660",
      "incomplete_value": false,
      "site": "0097c668",
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
      "definition_site": "0097d630",
      "incomplete_value": false,
      "site": "0097d63c",
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
      "definition_site": "0097c684",
      "incomplete_value": false,
      "site": "0097c690",
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
      "definition_site": "0097d764",
      "incomplete_value": false,
      "site": "0097d76c",
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
      "definition_site": "0097c7b8",
      "incomplete_value": false,
      "site": "0097c7c0",
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
      "0097d60c",
      "PARAM",
      [
        "storage",
        "002b7f93",
        null,
        null
      ]
    ],
    [
      "0097d630",
      "PARAM",
      [
        "storage",
        "002c0f29",
        null,
        "string"
      ]
    ],
    [
      "0097d764",
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
      "0097d60c",
      "PARAM",
      [
        "storage",
        "002b8062",
        null,
        null
      ]
    ],
    [
      "0097d630",
      "PARAM",
      [
        "storage",
        "002c0f73",
        null,
        "string"
      ]
    ],
    [
      "0097d764",
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
- 0097c668 ["INT_ADD", "register:40f0:8", ["const:97c668:8", "const:4:8"]]
- 0097c668 ["CALL", null, ["callee:004421f4:8"]]
+ 0097d614 ["INT_ADD", "register:40f0:8", ["const:97d614:8", "const:4:8"]]
+ 0097d614 ["CALL", null, ["callee:004421f4:8"]]
- 0097c690 ["INT_ADD", "register:40f0:8", ["const:97c690:8", "const:4:8"]]
- 0097c690 ["CALL", null, ["callee:00442b54:8"]]
+ 0097d63c ["INT_ADD", "register:40f0:8", ["const:97d63c:8", "const:4:8"]]
+ 0097d63c ["CALL", null, ["callee:00442b54:8"]]
- 0097c7c0 ["INT_ADD", "register:40f0:8", ["const:97c7c0:8", "const:4:8"]]
- 0097c7c0 ["CALL", null, ["callee:004421f4:8"]]
+ 0097d76c ["INT_ADD", "register:40f0:8", ["const:97d76c:8", "const:4:8"]]
+ 0097d76c ["CALL", null, ["callee:004421f4:8"]]
~~~


<a id="compare-19c8e9d16604c2bb6b1b5d0c3e462d82"></a>

### [`0097d214`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0097d/0097d214.md) → [`0097e1c0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0097e/0097e1c0.md) FUN_0097e1c0

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
      "definition_site": "0097e1d4",
      "incomplete_value": false,
      "site": "0097e1d8",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c88000:8"
          ],
          [
            "leaf",
            "const:d88:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0097d228",
      "incomplete_value": false,
      "site": "0097d22c",
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
            "const:db8:8"
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
      "0097e1d8",
      "DATA",
      [
        "storage",
        "00c87db8",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "0097e1d8",
      "DATA",
      [
        "storage",
        "00c88d88",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 0097d220 ["INT_ADD", "register:40f0:8", ["const:97d220:8", "const:4:8"]]
- 0097d220 ["CALL", null, ["callee:00c58f30:8"]]
+ 0097e1cc ["INT_ADD", "register:40f0:8", ["const:97e1cc:8", "const:4:8"]]
+ 0097e1cc ["CALL", null, ["callee:00c58f30:8"]]
- 0097d224 ["COPY", "register:4040:8", ["const:c87000:8"]]
+ 0097e1d0 ["COPY", "register:4040:8", ["const:c88000:8"]]
- 0097d228 ["COPY", "tmp:0:8", ["const:db8:8"]]
- 0097d228 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 0097d228 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 0097d228 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 0097e1d4 ["COPY", "tmp:0:8", ["const:d88:8"]]
+ 0097e1d4 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 0097e1d4 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 0097e1d4 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-73cc2e8c16405e8e933c3ecf1e9c6b83"></a>

### [`0097d250`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0097d/0097d250.md) → [`0097e1fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0097e/0097e1fc.md) FUN_0097e1fc

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
      "site": "0097e220",
      "value": [
        "leaf",
        "ram:47b054:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "0097d274",
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
      "0097e220",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ]
  ],
  "added": [
    [
      "0097e220",
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
- 0097d274 ["INT_ADD", "register:40f0:8", ["const:97d274:8", "const:4:8"]]
- 0097d274 ["CALL", null, ["ram:47ad34:8"]]
+ 0097e220 ["INT_ADD", "register:40f0:8", ["const:97e220:8", "const:4:8"]]
+ 0097e220 ["CALL", null, ["ram:47b054:8"]]
- 0097d280 ["INT_ADD", "register:40f0:8", ["const:97d280:8", "const:4:8"]]
- 0097d280 ["CALL", null, ["callee:0047d134:8"]]
+ 0097e22c ["INT_ADD", "register:40f0:8", ["const:97e22c:8", "const:4:8"]]
+ 0097e22c ["CALL", null, ["callee:0047d134:8"]]
~~~


<a id="compare-848d6a6e63664c357cc5c33b00a54cd2"></a>

### [`0097d2c4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0097d/0097d2c4.md) → [`0097e270`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0097e/0097e270.md) FUN_0097e270

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
      "definition_site": "0097e290",
      "incomplete_value": false,
      "site": "0097e294",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c88000:8"
          ],
          [
            "leaf",
            "const:e08:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0097d2e4",
      "incomplete_value": false,
      "site": "0097d2e8",
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
            "const:e38:8"
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
      "0097e294",
      "DATA",
      [
        "storage",
        "00c87e38",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "0097e294",
      "DATA",
      [
        "storage",
        "00c88e08",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 0097d2d8 ["INT_ADD", "register:40f0:8", ["const:97d2d8:8", "const:4:8"]]
- 0097d2d8 ["CALL", null, ["callee:00c58f30:8"]]
+ 0097e284 ["INT_ADD", "register:40f0:8", ["const:97e284:8", "const:4:8"]]
+ 0097e284 ["CALL", null, ["callee:00c58f30:8"]]
- 0097d2e0 ["COPY", "register:4040:8", ["const:c87000:8"]]
+ 0097e28c ["COPY", "register:4040:8", ["const:c88000:8"]]
- 0097d2e4 ["COPY", "tmp:0:8", ["const:e38:8"]]
- 0097d2e4 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 0097d2e4 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 0097d2e4 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 0097e290 ["COPY", "tmp:0:8", ["const:e08:8"]]
+ 0097e290 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 0097e290 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 0097e290 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-015feb7753fb4e06db6053c2cdae284a"></a>

### [`0097d31c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0097d/0097d31c.md) → [`0097e2c8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0097e/0097e2c8.md) FUN_0097e2c8

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 14件 [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md) [`0047ce14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047ce14.md) [`0048ce94`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048c/0048ce94.md) [`00492e48`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00492/00492e48.md) [`00684ff0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00684/00684ff0.md)
- 新版 呼出元 0件  · 呼出先 14件 [`0047b054`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047b/0047b054.md) [`0047d134`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047d/0047d134.md) [`0048d1b4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0048d/0048d1b4.md) [`00493168`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00493/00493168.md) [`006853a0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00685/006853a0.md)

変更の種類 call, call_target, constant, operands_and_dependencies, operation_sequence, store_value

命令の説明率　旧版 94.02% / 新版 94.02%

優先判定に残った影響 `call_target` 1件, `store_value` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "0097e360",
      "incomplete_value": true,
      "site": "0097e370",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:11a:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0097d3b4",
      "incomplete_value": true,
      "site": "0097d3c4",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:d0:8"
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
      "definition_site": "0097e3b8",
      "incomplete_value": false,
      "site": "0097e3b8",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c88000:8"
          ],
          [
            "leaf",
            "const:e78:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0097d40c",
      "incomplete_value": false,
      "site": "0097d40c",
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
            "const:ea8:8"
          ]
        ]
      ]
    },
    "ordinal": 10,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "call_target",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "0097e30c",
      "value": [
        "leaf",
        "ram:47b054:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "0097d360",
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
      "0097e30c",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ],
    [
      "0097e360",
      "READ",
      [
        "storage",
        "002b30d0",
        null,
        "string"
      ]
    ],
    [
      "0097e3b8",
      "DATA",
      [
        "storage",
        "00c87ea8",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "0097e30c",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047b054"
      ]
    ],
    [
      "0097e360",
      "READ",
      [
        "storage",
        "002b311a",
        null,
        "string"
      ]
    ],
    [
      "0097e3b8",
      "DATA",
      [
        "storage",
        "00c88e78",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 0097d360 ["INT_ADD", "register:40f0:8", ["const:97d360:8", "const:4:8"]]
- 0097d360 ["CALL", null, ["ram:47ad34:8"]]
+ 0097e30c ["INT_ADD", "register:40f0:8", ["const:97e30c:8", "const:4:8"]]
+ 0097e30c ["CALL", null, ["ram:47b054:8"]]
- 0097d36c ["INT_ADD", "register:40f0:8", ["const:97d36c:8", "const:4:8"]]
- 0097d36c ["CALL", null, ["callee:0047d134:8"]]
+ 0097e318 ["INT_ADD", "register:40f0:8", ["const:97e318:8", "const:4:8"]]
+ 0097e318 ["CALL", null, ["callee:0047d134:8"]]
- 0097d3a4 ["INT_ADD", "register:40f0:8", ["const:97d3a4:8", "const:4:8"]]
- 0097d3a4 ["CALL", null, ["callee:008524fc:8"]]
+ 0097e350 ["INT_ADD", "register:40f0:8", ["const:97e350:8", "const:4:8"]]
+ 0097e350 ["CALL", null, ["callee:008524fc:8"]]
~~~


<a id="compare-e5b07f7ba5bec9f3c516d0bdb4165ce4"></a>

### [`0097d5fc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0097d/0097d5fc.md) → [`0097e5a8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0097e/0097e5a8.md) FUN_0097e5a8

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
      "definition_site": "0097e5cc",
      "incomplete_value": false,
      "site": "0097e5cc",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c88000:8"
          ],
          [
            "leaf",
            "const:e78:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0097d620",
      "incomplete_value": false,
      "site": "0097d620",
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
            "const:ea8:8"
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
      "0097e5cc",
      "DATA",
      [
        "storage",
        "00c87ea8",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "0097e5cc",
      "DATA",
      [
        "storage",
        "00c88e78",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 0097d610 ["INT_ADD", "register:40f0:8", ["const:97d610:8", "const:4:8"]]
- 0097d610 ["CALL", null, ["callee:00c58f30:8"]]
+ 0097e5bc ["INT_ADD", "register:40f0:8", ["const:97e5bc:8", "const:4:8"]]
+ 0097e5bc ["CALL", null, ["callee:00c58f30:8"]]
- 0097d618 ["COPY", "register:4040:8", ["const:c87000:8"]]
+ 0097e5c4 ["COPY", "register:4040:8", ["const:c88000:8"]]
- 0097d61c ["COPY", "tmp:0:8", ["const:ea8:8"]]
- 0097d61c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 0097d61c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 0097d61c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 0097e5c8 ["COPY", "tmp:0:8", ["const:e78:8"]]
+ 0097e5c8 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 0097e5c8 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 0097e5c8 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-4c6962be58cfeb0c2e9f78e2a97e9094"></a>

### [`0097d630`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0097d/0097d630.md) → [`0097e5dc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0097e/0097e5dc.md) FUN_0097e5dc

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
      "definition_site": "0097e5e8",
      "incomplete_value": false,
      "site": "0097e5e8",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c88000:8"
          ],
          [
            "leaf",
            "const:e78:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0097d63c",
      "incomplete_value": false,
      "site": "0097d63c",
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
            "const:ea8:8"
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
      "0097e5e8",
      "DATA",
      [
        "storage",
        "00c87ea8",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "0097e5e8",
      "DATA",
      [
        "storage",
        "00c88e78",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 0097d634 ["COPY", "register:4048:8", ["const:c87000:8"]]
+ 0097e5e0 ["COPY", "register:4048:8", ["const:c88000:8"]]
- 0097d638 ["COPY", "tmp:0:8", ["const:ea8:8"]]
- 0097d638 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 0097d638 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 0097d638 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 0097e5e4 ["COPY", "tmp:0:8", ["const:e78:8"]]
+ 0097e5e4 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 0097e5e4 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 0097e5e4 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
~~~


<a id="compare-be07d3728ccef00336ca9b6a310d37b8"></a>

### [`0097d64c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0097d/0097d64c.md) → [`0097e5f8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0097e/0097e5f8.md) FUN_0097e5f8

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 8件 [`0043bbe4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bbe4.md) [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md) [`0047ce14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047ce14.md) [`006899c0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00689/006899c0.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)
- 新版 呼出元 0件  · 呼出先 8件 [`0043bf04`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bf04.md) [`0047b054`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047b/0047b054.md) [`0047d134`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047d/0047d134.md) [`00689d70`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00689/00689d70.md) [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md)

変更の種類 call, call_target, constant, operands_and_dependencies

命令の説明率　旧版 99.26% / 新版 99.26%

優先判定に残った影響 `call_target` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_target",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "0097e630",
      "value": [
        "leaf",
        "ram:47b054:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "0097d684",
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
      "0097e630",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ],
    [
      "0097e688",
      "DATA",
      [
        "storage",
        "0039b22c",
        null,
        "dword"
      ]
    ],
    [
      "0097e73c",
      "DATA",
      [
        "storage",
        "0039b234",
        null,
        "qword"
      ]
    ]
  ],
  "added": [
    [
      "0097e630",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047b054"
      ]
    ],
    [
      "0097e688",
      "DATA",
      [
        "storage",
        "0039b22c",
        null,
        "qword"
      ]
    ],
    [
      "0097e73c",
      "DATA",
      [
        "storage",
        "0039b234",
        null,
        "dword"
      ]
    ]
  ]
}
~~~


~~~diff
- 0097d684 ["INT_ADD", "register:40f0:8", ["const:97d684:8", "const:4:8"]]
- 0097d684 ["CALL", null, ["ram:47ad34:8"]]
+ 0097e630 ["INT_ADD", "register:40f0:8", ["const:97e630:8", "const:4:8"]]
+ 0097e630 ["CALL", null, ["ram:47b054:8"]]
- 0097d690 ["INT_ADD", "register:40f0:8", ["const:97d690:8", "const:4:8"]]
- 0097d690 ["CALL", null, ["callee:0047d134:8"]]
+ 0097e63c ["INT_ADD", "register:40f0:8", ["const:97e63c:8", "const:4:8"]]
+ 0097e63c ["CALL", null, ["callee:0047d134:8"]]
- 0097d738 ["INT_ADD", "register:40f0:8", ["const:97d738:8", "const:4:8"]]
- 0097d738 ["CALL", null, ["callee:00c58f30:8"]]
+ 0097e6e4 ["INT_ADD", "register:40f0:8", ["const:97e6e4:8", "const:4:8"]]
+ 0097e6e4 ["CALL", null, ["callee:00c58f30:8"]]
~~~


<a id="compare-ee4729a582b1fb0d7ab7da9339f691ff"></a>

### [`0097d898`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0097d/0097d898.md) → [`0097e844`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0097e/0097e844.md) FUN_0097e844

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
      "definition_site": "0097e858",
      "incomplete_value": false,
      "site": "0097e85c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c88000:8"
          ],
          [
            "leaf",
            "const:f08:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0097d8ac",
      "incomplete_value": false,
      "site": "0097d8b0",
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
            "const:f38:8"
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
      "0097e85c",
      "DATA",
      [
        "storage",
        "00c87f38",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "0097e85c",
      "DATA",
      [
        "storage",
        "00c88f08",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 0097d8a4 ["INT_ADD", "register:40f0:8", ["const:97d8a4:8", "const:4:8"]]
- 0097d8a4 ["CALL", null, ["callee:00c58f30:8"]]
+ 0097e850 ["INT_ADD", "register:40f0:8", ["const:97e850:8", "const:4:8"]]
+ 0097e850 ["CALL", null, ["callee:00c58f30:8"]]
- 0097d8a8 ["COPY", "register:4040:8", ["const:c87000:8"]]
+ 0097e854 ["COPY", "register:4040:8", ["const:c88000:8"]]
- 0097d8ac ["COPY", "tmp:0:8", ["const:f38:8"]]
- 0097d8ac ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 0097d8ac ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 0097d8ac ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 0097e858 ["COPY", "tmp:0:8", ["const:f08:8"]]
+ 0097e858 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 0097e858 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 0097e858 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-bac5169c4822a4b984ad141cebedd905"></a>

### [`0097d8d4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0097d/0097d8d4.md) → [`0097e880`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0097e/0097e880.md) FUN_0097e880

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 4件 [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md) [`0047ce14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047ce14.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md) [`008b91d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b9/008b91d0.md)
- 新版 呼出元 0件  · 呼出先 4件 [`0047b054`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047b/0047b054.md) [`0047d134`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047d/0047d134.md) [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md) [`008ba17c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008ba/008ba17c.md)

変更の種類 call, call_target, constant, operands_and_dependencies

命令の説明率　旧版 98.04% / 新版 98.04%

優先判定に残った影響 `call_target` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_target",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "0097e8a8",
      "value": [
        "leaf",
        "ram:47b054:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "0097d8fc",
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
      "0097e8a8",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ]
  ],
  "added": [
    [
      "0097e8a8",
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
- 0097d8fc ["INT_ADD", "register:40f0:8", ["const:97d8fc:8", "const:4:8"]]
- 0097d8fc ["CALL", null, ["ram:47ad34:8"]]
+ 0097e8a8 ["INT_ADD", "register:40f0:8", ["const:97e8a8:8", "const:4:8"]]
+ 0097e8a8 ["CALL", null, ["ram:47b054:8"]]
- 0097d908 ["INT_ADD", "register:40f0:8", ["const:97d908:8", "const:4:8"]]
- 0097d908 ["CALL", null, ["callee:0047d134:8"]]
+ 0097e8b4 ["INT_ADD", "register:40f0:8", ["const:97e8b4:8", "const:4:8"]]
+ 0097e8b4 ["CALL", null, ["callee:0047d134:8"]]
- 0097d924 ["INT_ADD", "register:40f0:8", ["const:97d924:8", "const:4:8"]]
- 0097d924 ["CALL", null, ["callee:008524fc:8"]]
+ 0097e8d0 ["INT_ADD", "register:40f0:8", ["const:97e8d0:8", "const:4:8"]]
+ 0097e8d0 ["CALL", null, ["callee:008524fc:8"]]
~~~


<a id="compare-f93d1a6690e0b92f1d7f401393a395d9"></a>

### [`0097d9cc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0097d/0097d9cc.md) → [`0097e978`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0097e/0097e978.md) FUN_0097e978

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
      "definition_site": "0097e98c",
      "incomplete_value": false,
      "site": "0097e990",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c88000:8"
          ],
          [
            "leaf",
            "const:f88:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0097d9e0",
      "incomplete_value": false,
      "site": "0097d9e4",
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
            "const:fb8:8"
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
      "0097e990",
      "DATA",
      [
        "storage",
        "00c87fb8",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "0097e990",
      "DATA",
      [
        "storage",
        "00c88f88",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 0097d9d8 ["INT_ADD", "register:40f0:8", ["const:97d9d8:8", "const:4:8"]]
- 0097d9d8 ["CALL", null, ["callee:00c58f30:8"]]
+ 0097e984 ["INT_ADD", "register:40f0:8", ["const:97e984:8", "const:4:8"]]
+ 0097e984 ["CALL", null, ["callee:00c58f30:8"]]
- 0097d9dc ["COPY", "register:4040:8", ["const:c87000:8"]]
+ 0097e988 ["COPY", "register:4040:8", ["const:c88000:8"]]
- 0097d9e0 ["COPY", "tmp:0:8", ["const:fb8:8"]]
- 0097d9e0 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 0097d9e0 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 0097d9e0 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 0097e98c ["COPY", "tmp:0:8", ["const:f88:8"]]
+ 0097e98c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 0097e98c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 0097e98c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-9d7ae8fe28d8a83465096f2e38a6351f"></a>

### [`0097da08`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0097d/0097da08.md) → [`0097e9b4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0097e/0097e9b4.md) FUN_0097e9b4

根拠 `instruction_blocks_cfg_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 13件 [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md) [`0047ce14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047ce14.md) [`005e81d8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005e8/005e81d8.md) [`0071e3ec`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0071e/0071e3ec.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)
- 新版 呼出元 0件  · 呼出先 13件 [`0047b054`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047b/0047b054.md) [`0047d134`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047d/0047d134.md) [`005e8588`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005e8/005e8588.md) [`0071e79c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0071e/0071e79c.md) [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md)

変更の種類 call, call_target, constant, operands_and_dependencies

命令の説明率　旧版 99.53% / 新版 99.53%

優先判定に残った影響 `call_target` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_target",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "0097ea04",
      "value": [
        "leaf",
        "ram:47b054:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "0097da58",
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
      "site": "0097efb8",
      "value": [
        "leaf",
        "ram:47b054:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "0097e00c",
      "value": [
        "leaf",
        "ram:47ad34:8"
      ]
    },
    "ordinal": 51,
    "slot": 0
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "0097ea04",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ],
    [
      "0097ea84",
      "DATA",
      [
        "storage",
        "0039e374",
        null,
        "dword"
      ]
    ],
    [
      "0097ee88",
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
      "0097ea04",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047b054"
      ]
    ],
    [
      "0097ea84",
      "DATA",
      [
        "storage",
        "0039e374",
        null,
        "byte[51]"
      ]
    ],
    [
      "0097ee88",
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
- 0097da58 ["INT_ADD", "register:40f0:8", ["const:97da58:8", "const:4:8"]]
- 0097da58 ["CALL", null, ["ram:47ad34:8"]]
+ 0097ea04 ["INT_ADD", "register:40f0:8", ["const:97ea04:8", "const:4:8"]]
+ 0097ea04 ["CALL", null, ["ram:47b054:8"]]
- 0097e00c ["INT_ADD", "register:40f0:8", ["const:97e00c:8", "const:4:8"]]
- 0097e00c ["CALL", null, ["ram:47ad34:8"]]
+ 0097efb8 ["INT_ADD", "register:40f0:8", ["const:97efb8:8", "const:4:8"]]
+ 0097efb8 ["CALL", null, ["ram:47b054:8"]]
- 0097da64 ["INT_ADD", "register:40f0:8", ["const:97da64:8", "const:4:8"]]
- 0097da64 ["CALL", null, ["callee:0047d134:8"]]
+ 0097ea10 ["INT_ADD", "register:40f0:8", ["const:97ea10:8", "const:4:8"]]
+ 0097ea10 ["CALL", null, ["callee:0047d134:8"]]
~~~


<a id="compare-0b9e23f434af4d173c72ad163c295746"></a>

### [`0097e0dc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0097e/0097e0dc.md) → [`0097f088`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0097f/0097f088.md) FUN_0097f088

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
      "definition_site": "0097f09c",
      "incomplete_value": false,
      "site": "0097f0a0",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c89000:8"
          ],
          [
            "leaf",
            "const:8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0097e0f0",
      "incomplete_value": false,
      "site": "0097e0f4",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c88000:8"
          ],
          [
            "leaf",
            "const:38:8"
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
      "0097f0a0",
      "DATA",
      [
        "storage",
        "00c88038",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "0097f0a0",
      "DATA",
      [
        "storage",
        "00c89008",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 0097e0e8 ["INT_ADD", "register:40f0:8", ["const:97e0e8:8", "const:4:8"]]
- 0097e0e8 ["CALL", null, ["callee:00c58f30:8"]]
+ 0097f094 ["INT_ADD", "register:40f0:8", ["const:97f094:8", "const:4:8"]]
+ 0097f094 ["CALL", null, ["callee:00c58f30:8"]]
- 0097e0ec ["COPY", "register:4040:8", ["const:c88000:8"]]
+ 0097f098 ["COPY", "register:4040:8", ["const:c89000:8"]]
- 0097e0f0 ["COPY", "tmp:0:8", ["const:38:8"]]
- 0097e0f0 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 0097e0f0 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 0097e0f0 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 0097f09c ["COPY", "tmp:0:8", ["const:8:8"]]
+ 0097f09c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 0097f09c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 0097f09c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-1c50b72ef95545fe9751680dad63d008"></a>

### [`0097e118`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0097e/0097e118.md) → [`0097f0c4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0097f/0097f0c4.md) FUN_0097f0c4

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 10件 [`00468844`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00468/00468844.md) [`0046a928`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046a/0046a928.md) [`0046ca04`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046c/0046ca04.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md) [`008b92e8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b9/008b92e8.md)
- 新版 呼出元 0件  · 呼出先 10件 [`00468b64`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00468/00468b64.md) [`0046ac48`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0046a/0046ac48.md) [`0046cd24`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0046c/0046cd24.md) [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md) [`008ba294`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008ba/008ba294.md)

変更の種類 branch_value, call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 99.43% / 新版 99.43%

優先判定に残った影響 `call_argument_candidate` 2件

アドレスに依存する影響 `branch_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "branch_value",
    "new": {
      "definition_site": "0097f4cc",
      "incomplete_value": true,
      "site": "0097f4cc",
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
      "definition_site": "0097e520",
      "incomplete_value": true,
      "site": "0097e520",
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
    "ordinal": 9,
    "slot": 0
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "0097f4d4",
      "incomplete_value": false,
      "site": "0097f4e4",
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
      "definition_site": "0097e528",
      "incomplete_value": false,
      "site": "0097e538",
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
    "ordinal": 22,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "0097f4dc",
      "incomplete_value": false,
      "site": "0097f4e4",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c72000:8"
          ],
          [
            "leaf",
            "const:218:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0097e530",
      "incomplete_value": false,
      "site": "0097e538",
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
            "const:248:8"
          ]
        ]
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
      "0097f4c8",
      "READ",
      [
        "storage",
        "00ca4a78",
        null,
        "undefined8"
      ]
    ],
    [
      "0097f4d4",
      "PARAM",
      [
        "storage",
        "00c65f28",
        null,
        "pointer __((offset(0x10)))"
      ]
    ],
    [
      "0097f4dc",
      "PARAM",
      [
        "storage",
        "00c71248",
        null,
        "pointer __((offset(0x10)))"
      ]
    ]
  ],
  "added": [
    [
      "0097f4c8",
      "READ",
      [
        "storage",
        "00ca5a38",
        null,
        "undefined8"
      ]
    ],
    [
      "0097f4d4",
      "PARAM",
      [
        "storage",
        "00c66ef8",
        null,
        "pointer __((offset(0x10)))"
      ]
    ],
    [
      "0097f4dc",
      "PARAM",
      [
        "storage",
        "00c72218",
        null,
        "pointer __((offset(0x10)))"
      ]
    ]
  ]
}
~~~


~~~diff
- 0097e538 ["INT_ADD", "register:40f0:8", ["const:97e538:8", "const:4:8"]]
- 0097e538 ["CALL", null, ["callee:00c596b0:8"]]
+ 0097f4e4 ["INT_ADD", "register:40f0:8", ["const:97f4e4:8", "const:4:8"]]
+ 0097f4e4 ["CALL", null, ["callee:00c596b0:8"]]
- 0097e14c ["INT_ADD", "register:40f0:8", ["const:97e14c:8", "const:4:8"]]
- 0097e14c ["CALL", null, ["callee:008ba294:8"]]
+ 0097f0f8 ["INT_ADD", "register:40f0:8", ["const:97f0f8:8", "const:4:8"]]
+ 0097f0f8 ["CALL", null, ["callee:008ba294:8"]]
- 0097e154 ["INT_ADD", "register:40f0:8", ["const:97e154:8", "const:4:8"]]
- 0097e154 ["CALL", null, ["callee:008524fc:8"]]
+ 0097f100 ["INT_ADD", "register:40f0:8", ["const:97f100:8", "const:4:8"]]
+ 0097f100 ["CALL", null, ["callee:008524fc:8"]]
~~~


<a id="compare-e195ff92633174ba4d842388aaba1116"></a>

### [`0097e6c0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0097e/0097e6c0.md) → [`0097f66c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0097f/0097f66c.md) _INIT_189

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 5件 [`0043aeb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043a/0043aeb0.md) [`0043b838`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b838.md) [`00c57f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f00.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)
- 新版 呼出元 0件  · 呼出先 5件 [`0043b1d0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043b1d0.md) [`0043bb58`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bb58.md) [`00c58ed0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58ed0.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md)

変更の種類 constant, operands_and_dependencies, operation_sequence, store_value

命令の説明率　旧版 85.88% / 新版 85.88%

優先判定に残った影響 `store_value` 6件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "0097f6a8",
      "incomplete_value": true,
      "site": "0097f6c4",
      "value": [
        "LOAD",
        "16",
        [
          [
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
      "definition_site": "0097e6fc",
      "incomplete_value": true,
      "site": "0097e718",
      "value": [
        "LOAD",
        "16",
        [
          [
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
      "definition_site": "0097f6cc",
      "incomplete_value": true,
      "site": "0097f6e8",
      "value": [
        "LOAD",
        "16",
        [
          [
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
      "definition_site": "0097e720",
      "incomplete_value": true,
      "site": "0097e73c",
      "value": [
        "LOAD",
        "16",
        [
          [
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
      "definition_site": "0097f6ec",
      "incomplete_value": true,
      "site": "0097f708",
      "value": [
        "LOAD",
        "16",
        [
          [
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
      "definition_site": "0097e740",
      "incomplete_value": true,
      "site": "0097e75c",
      "value": [
        "LOAD",
        "16",
        [
          [
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
      "0097f6a8",
      "READ",
      [
        "storage",
        "002b7f66",
        null,
        "string"
      ]
    ],
    [
      "0097f6cc",
      "READ",
      [
        "storage",
        "002b7f79",
        null,
        "string"
      ]
    ],
    [
      "0097f6ec",
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
      "0097f6a8",
      "READ",
      [
        "storage",
        "002b8035",
        null,
        "string"
      ]
    ],
    [
      "0097f6cc",
      "READ",
      [
        "storage",
        "002b8048",
        null,
        "string"
      ]
    ],
    [
      "0097f6ec",
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
- 0097e6e8 ["COPY", "register:4098:8", ["const:1123000:8"]]
+ 0097f694 ["COPY", "register:4098:8", ["const:1124000:8"]]
- 0097e6ec ["COPY", "tmp:0:8", ["const:c10:8"]]
- 0097e6ec ["INT_CARRY", "register:105:1", ["register:4098:8", "tmp:0:8"]]
- 0097e6ec ["INT_SCARRY", "register:106:1", ["register:4098:8", "tmp:0:8"]]
- 0097e6ec ["INT_ADD", "tmp:1:8", ["register:4098:8", "tmp:0:8"]]
+ 0097f698 ["COPY", "tmp:0:8", ["const:bd0:8"]]
+ 0097f698 ["INT_CARRY", "register:105:1", ["register:4098:8", "tmp:0:8"]]
+ 0097f698 ["INT_SCARRY", "register:106:1", ["register:4098:8", "tmp:0:8"]]
+ 0097f698 ["INT_ADD", "tmp:1:8", ["register:4098:8", "tmp:0:8"]]
- 0097e6f4 ["COPY", "register:4048:8", ["const:2b7000:8"]]
~~~


<a id="compare-f5eac258c6a1966c6482237713aa90ae"></a>

### [`0097ea50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0097e/0097ea50.md) → [`0097f9fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0097f/0097f9fc.md) FUN_0097f9fc

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`0097fb74`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0097f/0097fb74.md) · 呼出先 6件 [`004410cc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00441/004410cc.md) [`005977fc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00597/005977fc.md) [`00597acc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00597/00597acc.md) [`0097f38c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0097f/0097f38c.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 1件 [`00980b20`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00980/00980b20.md) · 呼出先 6件 [`004413ec`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00441/004413ec.md) [`00597b1c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00597/00597b1c.md) [`00597dec`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00597/00597dec.md) [`00980338`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00980/00980338.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 97.18% / 新版 97.18%

優先判定に残った影響 `store_value` 5件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "0097fb40",
      "incomplete_value": true,
      "site": "0097fb40",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:ef7:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0097eb94",
      "incomplete_value": true,
      "site": "0097eb94",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:e19:8"
              ]
            ]
          ]
        ]
      ]
    },
    "ordinal": 28,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "0097fc40",
      "incomplete_value": true,
      "site": "0097fc50",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:462:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0097ec94",
      "incomplete_value": true,
      "site": "0097eca4",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:393:8"
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
      "definition_site": "0097fc40",
      "incomplete_value": true,
      "site": "0097fc54",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:462:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0097ec94",
      "incomplete_value": true,
      "site": "0097eca8",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:393:8"
              ]
            ]
          ]
        ]
      ]
    },
    "ordinal": 42,
    "slot": 2
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "0097fb30",
      "READ",
      [
        "storage",
        "002bce19",
        null,
        "string"
      ]
    ],
    [
      "0097fc40",
      "READ",
      [
        "storage",
        "002b8393",
        null,
        "string"
      ]
    ],
    [
      "0097fe0c",
      "READ",
      [
        "storage",
        "002a2f28",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "0097fb30",
      "READ",
      [
        "storage",
        "002bcef7",
        null,
        "string"
      ]
    ],
    [
      "0097fc40",
      "READ",
      [
        "storage",
        "002b8462",
        null,
        "string"
      ]
    ],
    [
      "0097fe0c",
      "READ",
      [
        "storage",
        "002a2ff3",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 0097eab0 ["INT_ADD", "register:40f0:8", ["const:97eab0:8", "const:4:8"]]
- 0097eab0 ["CALL", null, ["callee:004413ec:8"]]
+ 0097fa5c ["INT_ADD", "register:40f0:8", ["const:97fa5c:8", "const:4:8"]]
+ 0097fa5c ["CALL", null, ["callee:004413ec:8"]]
- 0097ead0 ["COPY", "register:0:8", ["register:4048:8"]]
- 0097ead0 ["INT_ADD", "register:40f0:8", ["const:97ead0:8", "const:4:8"]]
- 0097ead0 ["CALLIND", null, ["register:0:8"]]
+ 0097fa7c ["COPY", "register:0:8", ["register:4048:8"]]
+ 0097fa7c ["INT_ADD", "register:40f0:8", ["const:97fa7c:8", "const:4:8"]]
+ 0097fa7c ["CALLIND", null, ["register:0:8"]]
- 0097eae0 ["INT_ADD", "register:40f0:8", ["const:97eae0:8", "const:4:8"]]
- 0097eae0 ["CALL", null, ["callee:00c58f50:8"]]
+ 0097fa8c ["INT_ADD", "register:40f0:8", ["const:97fa8c:8", "const:4:8"]]
+ 0097fa8c ["CALL", null, ["callee:00c58f50:8"]]
~~~


<a id="compare-ff43ad5315568383f9d13c830078bf72"></a>

### [`0097f8e8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0097f/0097f8e8.md) → [`00980894`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00980/00980894.md) FUN_00980894

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`0043c298`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043c/0043c298.md) · 呼出先 11件 [`0043dbe4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043d/0043dbe4.md) [`0044b884`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0044b/0044b884.md) [`0044ba58`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0044b/0044ba58.md) [`00561d74`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00561/00561d74.md) [`00562010`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00562/00562010.md)
- 新版 呼出元 1件 [`0043c5b8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043c/0043c5b8.md) · 呼出先 11件 [`0043df04`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043d/0043df04.md) [`0044bba4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0044b/0044bba4.md) [`0044bd78`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0044b/0044bd78.md) [`00562094`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00562/00562094.md) [`00562330`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00562/00562330.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies, store_value

命令の説明率　旧版 97.14% / 新版 97.14%

優先判定に残った影響 `call_argument_candidate` 1件, `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "00980948",
      "incomplete_value": false,
      "site": "00980948",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c89000:8"
          ],
          [
            "leaf",
            "const:a0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0097f99c",
      "incomplete_value": false,
      "site": "0097f99c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c88000:8"
          ],
          [
            "leaf",
            "const:d0:8"
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
      "definition_site": "00980920",
      "incomplete_value": true,
      "site": "00980928",
      "value": [
        "LOAD",
        "8",
        [
          [
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
      "definition_site": "0097f974",
      "incomplete_value": true,
      "site": "0097f97c",
      "value": [
        "LOAD",
        "8",
        [
          [
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
      "00980920",
      "READ",
      [
        "storage",
        "00c9ac98",
        null,
        "pointer"
      ]
    ],
    [
      "00980920",
      "PARAM",
      [
        "storage",
        "00ca5dd0",
        null,
        "undefined1"
      ]
    ],
    [
      "00980948",
      "DATA",
      [
        "storage",
        "00c880d0",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00980920",
      "READ",
      [
        "storage",
        "00c9bc68",
        null,
        "pointer"
      ]
    ],
    [
      "00980920",
      "PARAM",
      [
        "storage",
        "00ca6d90",
        null,
        "undefined1"
      ]
    ],
    [
      "00980948",
      "DATA",
      [
        "storage",
        "00c890a0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 0097f97c ["INT_ADD", "register:40f0:8", ["const:97f97c:8", "const:4:8"]]
- 0097f97c ["CALL", null, ["callee:00562094:8"]]
+ 00980928 ["INT_ADD", "register:40f0:8", ["const:980928:8", "const:4:8"]]
+ 00980928 ["CALL", null, ["callee:00562094:8"]]
- 0097f90c ["INT_ADD", "register:40f0:8", ["const:97f90c:8", "const:4:8"]]
- 0097f90c ["CALL", null, ["callee:0044bba4:8"]]
+ 009808b8 ["INT_ADD", "register:40f0:8", ["const:9808b8:8", "const:4:8"]]
+ 009808b8 ["CALL", null, ["callee:0044bba4:8"]]
- 0097f914 ["INT_ADD", "register:40f0:8", ["const:97f914:8", "const:4:8"]]
- 0097f914 ["CALL", null, ["callee:0044bd78:8"]]
+ 009808c0 ["INT_ADD", "register:40f0:8", ["const:9808c0:8", "const:4:8"]]
+ 009808c0 ["CALL", null, ["callee:0044bd78:8"]]
~~~


<a id="compare-a04d7263a356e0656e0569c3f51cd9ee"></a>

### [`0097fb74`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0097f/0097fb74.md) → [`00980b20`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00980/00980b20.md) FUN_00980b20

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 2件 [`009818cc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00981/009818cc.md) [`00b28ff0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b28/00b28ff0.md) · 呼出先 26件 [`0043bb60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bb60.md) [`0043dbe4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043d/0043dbe4.md) [`004410cc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00441/004410cc.md) [`00481470`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00481/00481470.md) [`00481fc4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00481/00481fc4.md)
- 新版 呼出元 2件 [`00982878`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00982/00982878.md) [`00b29fe4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b29/00b29fe4.md) · 呼出先 26件 [`0043be80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043be80.md) [`0043df04`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043d/0043df04.md) [`004413ec`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00441/004413ec.md) [`00481790`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00481/00481790.md) [`004822e4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00482/004822e4.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies, store_value

命令の説明率　旧版 98.43% / 新版 98.43%

優先判定に残った影響 `call_argument_candidate` 3件, `store_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00980b8c",
      "incomplete_value": true,
      "site": "00980b8c",
      "value": [
        "LOAD",
        "8",
        [
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
                "const:3cc:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0097fbe0",
      "incomplete_value": true,
      "site": "0097fbe0",
      "value": [
        "LOAD",
        "8",
        [
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
                "const:2fd:8"
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
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00980ba0",
      "incomplete_value": false,
      "site": "00980ba8",
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
            "const:fba:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0097fbf4",
      "incomplete_value": false,
      "site": "0097fbfc",
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
            "const:edc:8"
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
      "definition_site": "00981474",
      "incomplete_value": false,
      "site": "00981478",
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
      "definition_site": "009804c8",
      "incomplete_value": false,
      "site": "009804cc",
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
    "ordinal": 73,
    "slot": 3
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "00980b78",
      "READ",
      [
        "storage",
        "002b62fd",
        null,
        "string"
      ]
    ],
    [
      "00980ba0",
      "PARAM",
      [
        "storage",
        "002b9edc",
        null,
        null
      ]
    ],
    [
      "00980c48",
      "READ",
      [
        "storage",
        "002a7580",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "00980b78",
      "READ",
      [
        "storage",
        "002b63cc",
        null,
        "string"
      ]
    ],
    [
      "00980ba0",
      "PARAM",
      [
        "storage",
        "002b9fba",
        null,
        null
      ]
    ],
    [
      "00980c48",
      "READ",
      [
        "storage",
        "002a76d8",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 0097fbfc ["INT_ADD", "register:40f0:8", ["const:97fbfc:8", "const:4:8"]]
- 0097fbfc ["CALL", null, ["callee:00c59010:8"]]
+ 00980ba8 ["INT_ADD", "register:40f0:8", ["const:980ba8:8", "const:4:8"]]
+ 00980ba8 ["CALL", null, ["callee:00c59010:8"]]
- 009804cc ["INT_ADD", "register:40f0:8", ["const:9804cc:8", "const:4:8"]]
- 009804cc ["CALL", null, ["callee:009831cc:8"]]
+ 00981478 ["INT_ADD", "register:40f0:8", ["const:981478:8", "const:4:8"]]
+ 00981478 ["CALL", null, ["callee:009831cc:8"]]
- 009804f4 ["INT_ADD", "register:40f0:8", ["const:9804f4:8", "const:4:8"]]
- 009804f4 ["CALL", null, ["callee:009831cc:8"]]
+ 009814a0 ["INT_ADD", "register:40f0:8", ["const:9814a0:8", "const:4:8"]]
+ 009814a0 ["CALL", null, ["callee:009831cc:8"]]
~~~


<a id="compare-288d363d3d37d057768dc4c528ece87e"></a>

### [`009808bc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00980/009808bc.md) → [`00981868`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00981/00981868.md) FUN_00981868

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 2件 [`0089b2e4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0089b/0089b2e4.md) [`00980854`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00980/00980854.md) · 呼出先 13件 [`0043bb60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bb60.md) [`0048cd38`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048c/0048cd38.md) [`0048ce90`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048c/0048ce90.md) [`0048dc8c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048d/0048dc8c.md) [`004906dc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00490/004906dc.md)
- 新版 呼出元 2件 [`0089c290`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0089c/0089c290.md) [`00981800`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00981/00981800.md) · 呼出先 13件 [`0043be80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043be80.md) [`0048d058`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0048d/0048d058.md) [`0048d1b0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0048d/0048d1b0.md) [`0048dfac`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0048d/0048dfac.md) [`004909fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00490/004909fc.md)

変更の種類 call, call_target, constant, operands_and_dependencies

命令の説明率　旧版 98.43% / 新版 98.43%

優先判定に残った影響 `call_target` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_target",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "00981898",
      "value": [
        "leaf",
        "ram:48d058:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "009808ec",
      "value": [
        "leaf",
        "ram:48cd38:8"
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
      "site": "00981b54",
      "value": [
        "leaf",
        "ram:48d058:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "00980ba8",
      "value": [
        "leaf",
        "ram:48cd38:8"
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
      "00981898",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0048cd38"
      ]
    ],
    [
      "00981b30",
      "DATA",
      [
        "storage",
        "0039b1b4",
        null,
        "dword"
      ]
    ],
    [
      "00981b44",
      "DATA",
      [
        "storage",
        "0039b1bc",
        null,
        "qword"
      ]
    ]
  ],
  "added": [
    [
      "00981898",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0048d058"
      ]
    ],
    [
      "00981b30",
      "DATA",
      [
        "storage",
        "0039b1b4",
        null,
        "qword"
      ]
    ],
    [
      "00981b44",
      "DATA",
      [
        "storage",
        "0039b1bc",
        null,
        "dword"
      ]
    ]
  ]
}
~~~


~~~diff
- 009808ec ["INT_ADD", "register:40f0:8", ["const:9808ec:8", "const:4:8"]]
- 009808ec ["CALL", null, ["ram:48cd38:8"]]
+ 00981898 ["INT_ADD", "register:40f0:8", ["const:981898:8", "const:4:8"]]
+ 00981898 ["CALL", null, ["ram:48d058:8"]]
- 00980ba8 ["INT_ADD", "register:40f0:8", ["const:980ba8:8", "const:4:8"]]
- 00980ba8 ["CALL", null, ["ram:48cd38:8"]]
+ 00981b54 ["INT_ADD", "register:40f0:8", ["const:981b54:8", "const:4:8"]]
+ 00981b54 ["CALL", null, ["ram:48d058:8"]]
- 009808f0 ["INT_ADD", "register:40f0:8", ["const:9808f0:8", "const:4:8"]]
- 009808f0 ["CALL", null, ["callee:0048dfac:8"]]
+ 0098189c ["INT_ADD", "register:40f0:8", ["const:98189c:8", "const:4:8"]]
+ 0098189c ["CALL", null, ["callee:0048dfac:8"]]
~~~


<a id="compare-24cff1c9dc8a9bf9c2d76534e6d7d31d"></a>

### [`00980e64`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00980/00980e64.md) → [`00981e10`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00981/00981e10.md) FUN_00981e10

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`009808bc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00980/009808bc.md) · 呼出先 4件 [`0048cec4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048c/0048cec4.md) [`00981774`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00981/00981774.md) [`00982220`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00982/00982220.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)
- 新版 呼出元 1件 [`00981868`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00981/00981868.md) · 呼出先 4件 [`0048d1e4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0048d/0048d1e4.md) [`00982720`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00982/00982720.md) [`009831cc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00983/009831cc.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 95.77% / 新版 95.77%

優先判定に残った影響 `call_argument_candidate` 3件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00981e58",
      "incomplete_value": true,
      "site": "00981e70",
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
            "const:785:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00980eac",
      "incomplete_value": true,
      "site": "00980ec4",
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
            "const:735:8"
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
      "definition_site": "00981e80",
      "incomplete_value": false,
      "site": "00981e98",
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
      "definition_site": "00980ed4",
      "incomplete_value": false,
      "site": "00980eec",
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
    "ordinal": 2,
    "slot": 3
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00981ee0",
      "incomplete_value": false,
      "site": "00981ef8",
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
      "definition_site": "00980f34",
      "incomplete_value": false,
      "site": "00980f4c",
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
    "ordinal": 5,
    "slot": 3
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "00981e58",
      "PARAM",
      [
        "storage",
        "002c8735",
        null,
        null
      ]
    ],
    [
      "00981e80",
      "PARAM",
      [
        "storage",
        "002c8735",
        null,
        null
      ]
    ],
    [
      "00981ee0",
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
      "00981e58",
      "PARAM",
      [
        "storage",
        "002c8785",
        null,
        null
      ]
    ],
    [
      "00981e80",
      "PARAM",
      [
        "storage",
        "002c8785",
        null,
        null
      ]
    ],
    [
      "00981ee0",
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
- 00980ec4 ["INT_ADD", "register:40f0:8", ["const:980ec4:8", "const:4:8"]]
- 00980ec4 ["CALL", null, ["callee:009831cc:8"]]
+ 00981e70 ["INT_ADD", "register:40f0:8", ["const:981e70:8", "const:4:8"]]
+ 00981e70 ["CALL", null, ["callee:009831cc:8"]]
- 00980eec ["INT_ADD", "register:40f0:8", ["const:980eec:8", "const:4:8"]]
- 00980eec ["CALL", null, ["callee:009831cc:8"]]
+ 00981e98 ["INT_ADD", "register:40f0:8", ["const:981e98:8", "const:4:8"]]
+ 00981e98 ["CALL", null, ["callee:009831cc:8"]]
- 00980f4c ["INT_ADD", "register:40f0:8", ["const:980f4c:8", "const:4:8"]]
- 00980f4c ["CALL", null, ["callee:009831cc:8"]]
+ 00981ef8 ["INT_ADD", "register:40f0:8", ["const:981ef8:8", "const:4:8"]]
+ 00981ef8 ["CALL", null, ["callee:009831cc:8"]]
~~~


<a id="compare-29a51e3c893f28526a473a82adb06b9b"></a>

### [`0098187c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00981/0098187c.md) → [`00982828`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00982/00982828.md) FUN_00982828

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 84.62% / 新版 84.62%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "0098284c",
      "incomplete_value": true,
      "site": "0098284c",
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
            "const:a0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "009818a0",
      "incomplete_value": true,
      "site": "009818a0",
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
            "const:d0:8"
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
      "0098284c",
      "DATA",
      [
        "storage",
        "00c880d0",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "0098284c",
      "DATA",
      [
        "storage",
        "00c890a0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00981890 ["INT_ADD", "register:40f0:8", ["const:981890:8", "const:4:8"]]
- 00981890 ["CALL", null, ["callee:00c58f30:8"]]
+ 0098283c ["INT_ADD", "register:40f0:8", ["const:98283c:8", "const:4:8"]]
+ 0098283c ["CALL", null, ["callee:00c58f30:8"]]
- 00981898 ["COPY", "register:4040:8", ["const:c88000:8"]]
+ 00982844 ["COPY", "register:4040:8", ["const:c89000:8"]]
- 0098189c ["COPY", "tmp:0:8", ["const:d0:8"]]
- 0098189c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 0098189c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 0098189c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00982848 ["COPY", "tmp:0:8", ["const:a0:8"]]
+ 00982848 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00982848 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00982848 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-1ce744de89a73672c89a2d606c3f619f"></a>

### [`009818b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00981/009818b0.md) → [`0098285c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00982/0098285c.md) FUN_0098285c

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
      "definition_site": "00982868",
      "incomplete_value": false,
      "site": "00982868",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c89000:8"
          ],
          [
            "leaf",
            "const:a0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "009818bc",
      "incomplete_value": false,
      "site": "009818bc",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c88000:8"
          ],
          [
            "leaf",
            "const:d0:8"
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
      "00982868",
      "DATA",
      [
        "storage",
        "00c880d0",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00982868",
      "DATA",
      [
        "storage",
        "00c890a0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 009818b4 ["COPY", "register:4048:8", ["const:c88000:8"]]
+ 00982860 ["COPY", "register:4048:8", ["const:c89000:8"]]
- 009818b8 ["COPY", "tmp:0:8", ["const:d0:8"]]
- 009818b8 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 009818b8 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 009818b8 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 00982864 ["COPY", "tmp:0:8", ["const:a0:8"]]
+ 00982864 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 00982864 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 00982864 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
~~~


<a id="compare-12ee941d227463e690808808d83072f0"></a>

### [`009818cc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00981/009818cc.md) → [`00982878`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00982/00982878.md) FUN_00982878

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 18件 [`0043dbe4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043d/0043dbe4.md) [`00481470`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00481/00481470.md) [`0048243c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00482/0048243c.md) [`00482578`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00482/00482578.md) [`004825f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00482/004825f0.md)
- 新版 呼出元 0件  · 呼出先 18件 [`0043df04`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043d/0043df04.md) [`00481790`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00481/00481790.md) [`0048275c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00482/0048275c.md) [`00482898`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00482/00482898.md) [`00482910`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00482/00482910.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies, store_value

命令の説明率　旧版 97.18% / 新版 97.18%

優先判定に残った影響 `call_argument_candidate` 1件, `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "00982b10",
      "incomplete_value": false,
      "site": "00982b14",
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
      "definition_site": "00981b64",
      "incomplete_value": false,
      "site": "00981b68",
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
    "ordinal": 27,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00982968",
      "incomplete_value": false,
      "site": "00982970",
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
            "const:fba:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "009819bc",
      "incomplete_value": false,
      "site": "009819c4",
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
            "const:edc:8"
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
      "00982940",
      "READ",
      [
        "storage",
        "002b62fd",
        null,
        "string"
      ]
    ],
    [
      "00982968",
      "PARAM",
      [
        "storage",
        "002b9edc",
        null,
        null
      ]
    ],
    [
      "00982a0c",
      "READ",
      [
        "storage",
        "002a7580",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "00982940",
      "READ",
      [
        "storage",
        "002b63cc",
        null,
        "string"
      ]
    ],
    [
      "00982968",
      "PARAM",
      [
        "storage",
        "002b9fba",
        null,
        null
      ]
    ],
    [
      "00982a0c",
      "READ",
      [
        "storage",
        "002a76d8",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 009819c4 ["INT_ADD", "register:40f0:8", ["const:9819c4:8", "const:4:8"]]
- 009819c4 ["CALL", null, ["callee:00c59010:8"]]
+ 00982970 ["INT_ADD", "register:40f0:8", ["const:982970:8", "const:4:8"]]
+ 00982970 ["CALL", null, ["callee:00c59010:8"]]
- 0098193c ["INT_ADD", "register:40f0:8", ["const:98193c:8", "const:4:8"]]
- 0098193c ["CALL", null, ["callee:00c54d60:8"]]
+ 009828e8 ["INT_ADD", "register:40f0:8", ["const:9828e8:8", "const:4:8"]]
+ 009828e8 ["CALL", null, ["callee:00c54d60:8"]]
- 00981948 ["INT_ADD", "register:40f0:8", ["const:981948:8", "const:4:8"]]
- 00981948 ["CALL", null, ["callee:00597070:8"]]
+ 009828f4 ["INT_ADD", "register:40f0:8", ["const:9828f4:8", "const:4:8"]]
+ 009828f4 ["CALL", null, ["callee:00597070:8"]]
~~~


<a id="compare-a87b4cc1ac694c1c09b387c673f52118"></a>

### [`0098220c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00982/0098220c.md) → [`009831b8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00983/009831b8.md) FUN_009831b8

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`00981e10`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00981/00981e10.md) · 呼出先 1件 [`0043b7b8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b7b8.md)
- 新版 呼出元 1件 [`00982dbc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00982/00982dbc.md) · 呼出先 1件 [`0043bad8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bad8.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 80.00% / 新版 80.00%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "009831c4",
      "incomplete_value": false,
      "site": "009831c8",
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
      "definition_site": "00982218",
      "incomplete_value": false,
      "site": "0098221c",
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
      "009831c4",
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
      "009831c4",
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
- 0098221c ["INT_ADD", "register:40f0:8", ["const:98221c:8", "const:4:8"]]
- 0098221c ["CALL", null, ["callee:0043bad8:8"]]
+ 009831c8 ["INT_ADD", "register:40f0:8", ["const:9831c8:8", "const:4:8"]]
+ 009831c8 ["CALL", null, ["callee:0043bad8:8"]]
- 00982214 ["COPY", "register:4000:8", ["const:2b7000:8"]]
+ 009831c0 ["COPY", "register:4000:8", ["const:2b8000:8"]]
- 00982218 ["COPY", "tmp:0:8", ["const:f8c:8"]]
- 00982218 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 00982218 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 00982218 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 009831c4 ["COPY", "tmp:0:8", ["const:5b:8"]]
+ 009831c4 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 009831c4 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 009831c4 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
~~~


<a id="compare-c0dcacb8645ae6e5e97a99c068c95ad5"></a>

### [`00982a30`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00982/00982a30.md) → [`009839dc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00983/009839dc.md) _INIT_190

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 5件 [`0043aeb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043a/0043aeb0.md) [`0043b838`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b838.md) [`00c57f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f00.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)
- 新版 呼出元 0件  · 呼出先 5件 [`0043b1d0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043b1d0.md) [`0043bb58`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bb58.md) [`00c58ed0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58ed0.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies, operation_sequence, store_value

命令の説明率　旧版 85.88% / 新版 85.88%

優先判定に残った影響 `call_argument_candidate` 3件, `store_value` 5件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00983a18",
      "incomplete_value": true,
      "site": "00983a34",
      "value": [
        "LOAD",
        "16",
        [
          [
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
      "definition_site": "00982a6c",
      "incomplete_value": true,
      "site": "00982a88",
      "value": [
        "LOAD",
        "16",
        [
          [
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
      "definition_site": "00983a5c",
      "incomplete_value": true,
      "site": "00983a78",
      "value": [
        "LOAD",
        "16",
        [
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
                "const:e3d:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00982ab0",
      "incomplete_value": true,
      "site": "00982acc",
      "value": [
        "LOAD",
        "16",
        [
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
                "const:d6e:8"
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
      "definition_site": "00983a7c",
      "incomplete_value": true,
      "site": "00983a94",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:fe0:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00982ad0",
      "incomplete_value": true,
      "site": "00982ae8",
      "value": [
        "LOAD",
        "16",
        [
          [
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
      "00983a18",
      "READ",
      [
        "storage",
        "002b7f66",
        null,
        "string"
      ]
    ],
    [
      "00983a3c",
      "READ",
      [
        "storage",
        "002b7f79",
        null,
        "string"
      ]
    ],
    [
      "00983a5c",
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
      "00983a18",
      "READ",
      [
        "storage",
        "002b8035",
        null,
        "string"
      ]
    ],
    [
      "00983a3c",
      "READ",
      [
        "storage",
        "002b8048",
        null,
        "string"
      ]
    ],
    [
      "00983a5c",
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
- 00982c64 ["INT_ADD", "register:40f0:8", ["const:982c64:8", "const:4:8"]]
- 00982c64 ["CALL", null, ["callee:00c58ed0:8"]]
+ 00983c10 ["INT_ADD", "register:40f0:8", ["const:983c10:8", "const:4:8"]]
+ 00983c10 ["CALL", null, ["callee:00c58ed0:8"]]
- 00982a58 ["COPY", "register:4098:8", ["const:1123000:8"]]
+ 00983a04 ["COPY", "register:4098:8", ["const:1124000:8"]]
- 00982a5c ["COPY", "tmp:0:8", ["const:c28:8"]]
- 00982a5c ["INT_CARRY", "register:105:1", ["register:4098:8", "tmp:0:8"]]
- 00982a5c ["INT_SCARRY", "register:106:1", ["register:4098:8", "tmp:0:8"]]
- 00982a5c ["INT_ADD", "tmp:1:8", ["register:4098:8", "tmp:0:8"]]
+ 00983a08 ["COPY", "tmp:0:8", ["const:be8:8"]]
+ 00983a08 ["INT_CARRY", "register:105:1", ["register:4098:8", "tmp:0:8"]]
+ 00983a08 ["INT_SCARRY", "register:106:1", ["register:4098:8", "tmp:0:8"]]
+ 00983a08 ["INT_ADD", "tmp:1:8", ["register:4098:8", "tmp:0:8"]]
~~~


<a id="compare-22d100645946959134b573942d07d5fd"></a>

### [`00984c88`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00984/00984c88.md) → [`00985c34`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00985/00985c34.md) FUN_00985c34

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 2件 [`006a7064`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006a7/006a7064.md) [`0098dc5c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0098d/0098dc5c.md) · 呼出先 14件 [`0047e91c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047e/0047e91c.md) [`0047edf4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047e/0047edf4.md) [`006667e8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00666/006667e8.md) [`00695c04`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00695/00695c04.md) [`009852e8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00985/009852e8.md)
- 新版 呼出元 2件 [`006a7414`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/006a7/006a7414.md) [`0098ec08`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0098e/0098ec08.md) · 呼出先 14件 [`0047ec3c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047e/0047ec3c.md) [`0047f114`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047f/0047f114.md) [`00666b98`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00666/00666b98.md) [`00695fb4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00695/00695fb4.md) [`00986294`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00986/00986294.md)

変更の種類 branch_value, call_argument_candidate, constant, operands_and_dependencies, store_condition, store_destination, store_value

命令の説明率　旧版 91.67% / 新版 91.67%

優先判定に残った影響 `call_argument_candidate` 13件, `store_destination` 7件, `store_value` 2件

アドレスに依存する影響 `branch_value` 1件, `store_condition` 2件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_destination",
    "new": {
      "definition_site": "00986024",
      "incomplete_value": false,
      "site": "00986024",
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
      "definition_site": "00985078",
      "incomplete_value": false,
      "site": "00985078",
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
    "ordinal": 25,
    "slot": 1
  },
  {
    "confidence": "bounded",
    "kind": "store_destination",
    "new": {
      "definition_site": "00986028",
      "incomplete_value": false,
      "site": "00986028",
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
      "definition_site": "0098507c",
      "incomplete_value": false,
      "site": "0098507c",
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
    "ordinal": 26,
    "slot": 1
  },
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "00986024",
      "incomplete_value": false,
      "site": "00986028",
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
      "definition_site": "00985078",
      "incomplete_value": false,
      "site": "0098507c",
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
      "00985c7c",
      "READ",
      [
        "storage",
        "00ca4a78",
        null,
        "undefined8"
      ]
    ],
    [
      "00985c90",
      "PARAM",
      [
        "storage",
        "00c65f28",
        null,
        "pointer __((offset(0x10)))"
      ]
    ],
    [
      "00985c98",
      "PARAM",
      [
        "storage",
        "00c71290",
        null,
        "pointer __((offset(0x10)))"
      ]
    ]
  ],
  "added": [
    [
      "00985c7c",
      "READ",
      [
        "storage",
        "00ca5a38",
        null,
        "undefined8"
      ]
    ],
    [
      "00985c90",
      "PARAM",
      [
        "storage",
        "00c66ef8",
        null,
        "pointer __((offset(0x10)))"
      ]
    ],
    [
      "00985c98",
      "PARAM",
      [
        "storage",
        "00c72260",
        null,
        "pointer __((offset(0x10)))"
      ]
    ]
  ]
}
~~~


~~~diff
- 00984cf4 ["INT_ADD", "register:40f0:8", ["const:984cf4:8", "const:4:8"]]
- 00984cf4 ["CALL", null, ["callee:00c596b0:8"]]
+ 00985ca0 ["INT_ADD", "register:40f0:8", ["const:985ca0:8", "const:4:8"]]
+ 00985ca0 ["CALL", null, ["callee:00c596b0:8"]]
- 00984dc0 ["INT_ADD", "register:40f0:8", ["const:984dc0:8", "const:4:8"]]
- 00984dc0 ["CALL", null, ["callee:0047ec3c:8"]]
+ 00985d6c ["INT_ADD", "register:40f0:8", ["const:985d6c:8", "const:4:8"]]
+ 00985d6c ["CALL", null, ["callee:0047ec3c:8"]]
- 00984df4 ["INT_ADD", "register:40f0:8", ["const:984df4:8", "const:4:8"]]
- 00984df4 ["CALL", null, ["callee:00695fb4:8"]]
+ 00985da0 ["INT_ADD", "register:40f0:8", ["const:985da0:8", "const:4:8"]]
+ 00985da0 ["CALL", null, ["callee:00695fb4:8"]]
~~~


<a id="compare-583cc99917fc3e45b6cac937f1a15c9c"></a>

### [`0098cfe0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0098c/0098cfe0.md) → [`0098df8c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0098d/0098df8c.md) FUN_0098df8c

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 4件 [`006a7064`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006a7/006a7064.md) [`009617f4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00961/009617f4.md) [`0098546c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00985/0098546c.md) [`0098dc5c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0098d/0098dc5c.md) · 呼出先 18件 [`0044fcfc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0044f/0044fcfc.md) [`0046e578`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046e/0046e578.md) [`0047e91c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047e/0047e91c.md) [`005e2a6c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005e2/005e2a6c.md) [`00604e94`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00604/00604e94.md)
- 新版 呼出元 4件 [`006a7414`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/006a7/006a7414.md) [`009627a0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00962/009627a0.md) [`00986418`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00986/00986418.md) [`0098ec08`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0098e/0098ec08.md) · 呼出先 18件 [`0045001c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00450/0045001c.md) [`0046e898`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0046e/0046e898.md) [`0047ec3c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047e/0047ec3c.md) [`005e2e1c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005e2/005e2e1c.md) [`00605244`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00605/00605244.md)

変更の種類 branch_value, call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 98.65% / 新版 98.65%

優先判定に残った影響 `branch_value` 1件, `call_argument_candidate` 4件

~~~json
[
  {
    "confidence": "limited",
    "kind": "branch_value",
    "new": {
      "definition_site": "0098e018",
      "incomplete_value": true,
      "site": "0098e018",
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
      "definition_site": "0098d06c",
      "incomplete_value": true,
      "site": "0098d06c",
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
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "0098e028",
      "incomplete_value": false,
      "site": "0098e030",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c72000:8"
          ],
          [
            "leaf",
            "const:260:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0098d07c",
      "incomplete_value": false,
      "site": "0098d084",
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
            "const:290:8"
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
    "new": {
      "definition_site": "0098e21c",
      "incomplete_value": true,
      "site": "0098e234",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:d40:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0098d270",
      "incomplete_value": true,
      "site": "0098d288",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:d70:8"
              ]
            ]
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
      "0098e014",
      "READ",
      [
        "storage",
        "00ca4a78",
        null,
        "undefined8"
      ]
    ],
    [
      "0098e020",
      "PARAM",
      [
        "storage",
        "00c65f28",
        null,
        "pointer __((offset(0x10)))"
      ]
    ],
    [
      "0098e028",
      "PARAM",
      [
        "storage",
        "00c71290",
        null,
        "pointer __((offset(0x10)))"
      ]
    ]
  ],
  "added": [
    [
      "0098e014",
      "READ",
      [
        "storage",
        "00ca5a38",
        null,
        "undefined8"
      ]
    ],
    [
      "0098e020",
      "PARAM",
      [
        "storage",
        "00c66ef8",
        null,
        "pointer __((offset(0x10)))"
      ]
    ],
    [
      "0098e028",
      "PARAM",
      [
        "storage",
        "00c72260",
        null,
        "pointer __((offset(0x10)))"
      ]
    ]
  ]
}
~~~


~~~diff
- 0098d084 ["INT_ADD", "register:40f0:8", ["const:98d084:8", "const:4:8"]]
- 0098d084 ["CALL", null, ["callee:00c596b0:8"]]
+ 0098e030 ["INT_ADD", "register:40f0:8", ["const:98e030:8", "const:4:8"]]
+ 0098e030 ["CALL", null, ["callee:00c596b0:8"]]
- 0098d288 ["INT_ADD", "register:40f0:8", ["const:98d288:8", "const:4:8"]]
- 0098d288 ["CALL", null, ["callee:0047ec3c:8"]]
+ 0098e234 ["INT_ADD", "register:40f0:8", ["const:98e234:8", "const:4:8"]]
+ 0098e234 ["CALL", null, ["callee:0047ec3c:8"]]
- 0098d770 ["INT_ADD", "register:40f0:8", ["const:98d770:8", "const:4:8"]]
- 0098d770 ["CALL", null, ["callee:0047ec3c:8"]]
+ 0098e71c ["INT_ADD", "register:40f0:8", ["const:98e71c:8", "const:4:8"]]
+ 0098e71c ["CALL", null, ["callee:0047ec3c:8"]]
~~~


<a id="compare-c052014c503f27c11c2da5cf3db6496e"></a>

### [`00996a14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00996/00996a14.md) → [`009979c0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00997/009979c0.md) FUN_009979c0

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`0098dc5c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0098d/0098dc5c.md) · 呼出先 7件 [`0048ce94`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048c/0048ce94.md) [`008b98b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b9/008b98b0.md) [`008bad20`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008ba/008bad20.md) [`009a3cb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009a3/009a3cb0.md) [`009a3cb4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009a3/009a3cb4.md)
- 新版 呼出元 1件 [`0098ec08`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0098e/0098ec08.md) · 呼出先 7件 [`0048d1b4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0048d/0048d1b4.md) [`008ba85c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008ba/008ba85c.md) [`008bbccc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008bb/008bbccc.md) [`009a4c5c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009a4/009a4c5c.md) [`009a4c60`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009a4/009a4c60.md)

変更の種類 comparison, comparison_count, constant, operands_and_dependencies, operation_sequence, store_value

命令の説明率　旧版 87.88% / 新版 87.88%

優先判定に残った影響 `store_value` 3件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "009979fc",
      "incomplete_value": true,
      "site": "009979fc",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:7d:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00996a50",
      "incomplete_value": true,
      "site": "00996a50",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:f25:8"
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
      "definition_site": "009979f4",
      "incomplete_value": true,
      "site": "00997a00",
      "value": [
        "LOAD",
        "8",
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
      "definition_site": "00996a48",
      "incomplete_value": true,
      "site": "00996a54",
      "value": [
        "LOAD",
        "8",
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
    "ordinal": 8,
    "slot": 2
  },
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "00997a18",
      "incomplete_value": false,
      "site": "00997a20",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c89000:8"
          ],
          [
            "leaf",
            "const:630:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00996a6c",
      "incomplete_value": false,
      "site": "00996a74",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c88000:8"
          ],
          [
            "leaf",
            "const:660:8"
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
      "009979e4",
      "READ",
      [
        "storage",
        "002a7f25",
        null,
        "string"
      ]
    ],
    [
      "009979f4",
      "READ",
      [
        "storage",
        "002a7f2c",
        null,
        "string"
      ]
    ],
    [
      "00997a20",
      "DATA",
      [
        "storage",
        "00c88660",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "009979e4",
      "READ",
      [
        "storage",
        "002a807d",
        null,
        "string"
      ]
    ],
    [
      "009979f4",
      "READ",
      [
        "storage",
        "002a8084",
        null,
        "string"
      ]
    ],
    [
      "00997a20",
      "DATA",
      [
        "storage",
        "00c89630",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00996a2c ["COPY", "register:4048:8", ["const:2a7000:8"]]
+ 009979d8 ["COPY", "register:4048:8", ["const:2a8000:8"]]
- 00996a30 ["COPY", "tmp:0:8", ["const:f25:8"]]
- 00996a30 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 00996a30 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 00996a30 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 009979dc ["COPY", "tmp:0:8", ["const:7d:8"]]
+ 009979dc ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 009979dc ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 009979dc ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
- 00996a64 ["INT_ADD", "register:40f0:8", ["const:996a64:8", "const:4:8"]]
- 00996a64 ["CALL", null, ["callee:0048d1b4:8"]]
+ 00997a10 ["INT_ADD", "register:40f0:8", ["const:997a10:8", "const:4:8"]]
+ 00997a10 ["CALL", null, ["callee:0048d1b4:8"]]
~~~


<a id="compare-47951f65b109769f6174a0c47e3fa8db"></a>

### [`00997090`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00997/00997090.md) → [`0099803c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00998/0099803c.md) FUN_0099803c

根拠 `instruction_blocks_cfg_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00859bb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00859/00859bb0.md) · 呼出先 89件 [`0043bbe4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bbe4.md) [`00467b6c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00467/00467b6c.md) [`00467ba0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00467/00467ba0.md) [`00467f5c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00467/00467f5c.md) [`00467f94`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00467/00467f94.md)
- 新版 呼出元 1件 [`0085ab5c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0085a/0085ab5c.md) · 呼出先 89件 [`0043bf04`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bf04.md) [`00467e8c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00467/00467e8c.md) [`00467ec0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00467/00467ec0.md) [`0046827c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00468/0046827c.md) [`004682b4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00468/004682b4.md)

変更の種類 branch_value, call_argument_candidate, constant, operands_and_dependencies, store_destination, store_value

命令の説明率　旧版 98.66% / 新版 98.66%

優先判定に残った影響 `branch_value` 1件, `call_argument_candidate` 6件, `store_destination` 7件, `store_value` 2件

アドレスに依存する影響 `branch_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_destination",
    "new": {
      "definition_site": "0099c9c0",
      "incomplete_value": false,
      "site": "0099c9c0",
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
      "definition_site": "0099ba14",
      "incomplete_value": false,
      "site": "0099ba14",
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
    "ordinal": 93,
    "slot": 1
  },
  {
    "confidence": "bounded",
    "kind": "store_destination",
    "new": {
      "definition_site": "0099c9c4",
      "incomplete_value": false,
      "site": "0099c9c4",
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
      "definition_site": "0099ba18",
      "incomplete_value": false,
      "site": "0099ba18",
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
    "ordinal": 94,
    "slot": 1
  },
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "0099c9c0",
      "incomplete_value": false,
      "site": "0099c9c4",
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
      "definition_site": "0099ba14",
      "incomplete_value": false,
      "site": "0099ba18",
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
    "ordinal": 94,
    "slot": 2
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "009980a0",
      "READ",
      [
        "storage",
        "00ca4a78",
        null,
        "undefined8"
      ]
    ],
    [
      "009980cc",
      "PARAM",
      [
        "storage",
        "00c65f28",
        null,
        "pointer __((offset(0x10)))"
      ]
    ],
    [
      "009980d4",
      "PARAM",
      [
        "storage",
        "00c71290",
        null,
        "pointer __((offset(0x10)))"
      ]
    ]
  ],
  "added": [
    [
      "009980a0",
      "READ",
      [
        "storage",
        "00ca5a38",
        null,
        "undefined8"
      ]
    ],
    [
      "009980cc",
      "PARAM",
      [
        "storage",
        "00c66ef8",
        null,
        "pointer __((offset(0x10)))"
      ]
    ],
    [
      "009980d4",
      "PARAM",
      [
        "storage",
        "00c72260",
        null,
        "pointer __((offset(0x10)))"
      ]
    ]
  ]
}
~~~


~~~diff
- 0099b81c ["INT_ADD", "register:40f0:8", ["const:99b81c:8", "const:4:8"]]
- 0099b81c ["CALL", null, ["callee:005d8adc:8"]]
+ 0099c7c8 ["INT_ADD", "register:40f0:8", ["const:99c7c8:8", "const:4:8"]]
+ 0099c7c8 ["CALL", null, ["callee:005d8adc:8"]]
- 0099b9f0 ["INT_ADD", "register:40f0:8", ["const:99b9f0:8", "const:4:8"]]
- 0099b9f0 ["CALL", null, ["callee:00c58ef0:8"]]
+ 0099c99c ["INT_ADD", "register:40f0:8", ["const:99c99c:8", "const:4:8"]]
+ 0099c99c ["CALL", null, ["callee:00c58ef0:8"]]
- 0099ba2c ["INT_ADD", "register:40f0:8", ["const:99ba2c:8", "const:4:8"]]
- 0099ba2c ["CALL", null, ["callee:00c58ed0:8"]]
+ 0099c9d8 ["INT_ADD", "register:40f0:8", ["const:99c9d8:8", "const:4:8"]]
+ 0099c9d8 ["CALL", null, ["callee:00c58ed0:8"]]
~~~


<a id="compare-2078886b86f186c194b0b4c3949bb8ab"></a>

### [`0099bac4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0099b/0099bac4.md) → [`0099ca70`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0099c/0099ca70.md) FUN_0099ca70

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 2件 [`00997090`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00997/00997090.md) [`009a3ad8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009a3/009a3ad8.md) · 呼出先 33件 [`00467b6c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00467/00467b6c.md) [`00467ba0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00467/00467ba0.md) [`00467f5c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00467/00467f5c.md) [`00467f94`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00467/00467f94.md) [`00469c44`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00469/00469c44.md)
- 新版 呼出元 2件 [`0099803c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00998/0099803c.md) [`009a4a84`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009a4/009a4a84.md) · 呼出先 33件 [`00467e8c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00467/00467e8c.md) [`00467ec0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00467/00467ec0.md) [`0046827c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00468/0046827c.md) [`004682b4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00468/004682b4.md) [`00469f64`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00469/00469f64.md)

変更の種類 branch_value, call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 98.37% / 新版 98.37%

優先判定に残った影響 `call_argument_candidate` 2件

アドレスに依存する影響 `branch_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "branch_value",
    "new": {
      "definition_site": "0099cac8",
      "incomplete_value": true,
      "site": "0099cac8",
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
      "definition_site": "0099bb1c",
      "incomplete_value": true,
      "site": "0099bb1c",
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
      "definition_site": "0099cad0",
      "incomplete_value": false,
      "site": "0099cae0",
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
      "definition_site": "0099bb24",
      "incomplete_value": false,
      "site": "0099bb34",
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
      "definition_site": "0099cad8",
      "incomplete_value": false,
      "site": "0099cae0",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c72000:8"
          ],
          [
            "leaf",
            "const:260:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0099bb2c",
      "incomplete_value": false,
      "site": "0099bb34",
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
            "const:290:8"
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
      "0099cabc",
      "READ",
      [
        "storage",
        "00ca4a78",
        null,
        "undefined8"
      ]
    ],
    [
      "0099cad0",
      "PARAM",
      [
        "storage",
        "00c65f28",
        null,
        "pointer __((offset(0x10)))"
      ]
    ],
    [
      "0099cad8",
      "PARAM",
      [
        "storage",
        "00c71290",
        null,
        "pointer __((offset(0x10)))"
      ]
    ]
  ],
  "added": [
    [
      "0099cabc",
      "READ",
      [
        "storage",
        "00ca5a38",
        null,
        "undefined8"
      ]
    ],
    [
      "0099cad0",
      "PARAM",
      [
        "storage",
        "00c66ef8",
        null,
        "pointer __((offset(0x10)))"
      ]
    ],
    [
      "0099cad8",
      "PARAM",
      [
        "storage",
        "00c72260",
        null,
        "pointer __((offset(0x10)))"
      ]
    ]
  ]
}
~~~


~~~diff
- 0099bb34 ["INT_ADD", "register:40f0:8", ["const:99bb34:8", "const:4:8"]]
- 0099bb34 ["CALL", null, ["callee:00c596b0:8"]]
+ 0099cae0 ["INT_ADD", "register:40f0:8", ["const:99cae0:8", "const:4:8"]]
+ 0099cae0 ["CALL", null, ["callee:00c596b0:8"]]
- 0099bb0c ["COPY", "register:4040:8", ["const:ca4000:8"]]
+ 0099cab8 ["COPY", "register:4040:8", ["const:ca5000:8"]]
- 0099bb10 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:a78:8"]]
- 0099bb10 ["LOAD", "register:4000:8", ["const:1b1:8", "tmp:0:8"]]
+ 0099cabc ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:a38:8"]]
+ 0099cabc ["LOAD", "register:4000:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-c1dba464d5eab8ecbb077598b0716bb7"></a>

### [`009a14ac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009a1/009a14ac.md) → [`009a2458`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009a2/009a2458.md) FUN_009a2458

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`00997090`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00997/00997090.md) · 呼出先 6件 [`004678a0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00467/004678a0.md) [`00467ba0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00467/00467ba0.md) [`0046a928`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046a/0046a928.md) [`0046af4c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046a/0046af4c.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)
- 新版 呼出元 1件 [`0099803c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00998/0099803c.md) · 呼出先 6件 [`00467bc0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00467/00467bc0.md) [`00467ec0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00467/00467ec0.md) [`0046ac48`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0046a/0046ac48.md) [`0046b26c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0046b/0046b26c.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md)

変更の種類 branch_value, call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 98.11% / 新版 98.11%

優先判定に残った影響 `call_argument_candidate` 1件

アドレスに依存する影響 `branch_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "branch_value",
    "new": {
      "definition_site": "009a249c",
      "incomplete_value": true,
      "site": "009a249c",
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
      "definition_site": "009a14f0",
      "incomplete_value": true,
      "site": "009a14f0",
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
      "definition_site": "009a24ac",
      "incomplete_value": false,
      "site": "009a24b8",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c72000:8"
          ],
          [
            "leaf",
            "const:260:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "009a1500",
      "incomplete_value": false,
      "site": "009a150c",
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
            "const:290:8"
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
      "009a2498",
      "READ",
      [
        "storage",
        "00ca4a78",
        null,
        "undefined8"
      ]
    ],
    [
      "009a24a4",
      "PARAM",
      [
        "storage",
        "00c65f28",
        null,
        "pointer __((offset(0x10)))"
      ]
    ],
    [
      "009a24ac",
      "PARAM",
      [
        "storage",
        "00c71290",
        null,
        "pointer __((offset(0x10)))"
      ]
    ]
  ],
  "added": [
    [
      "009a2498",
      "READ",
      [
        "storage",
        "00ca5a38",
        null,
        "undefined8"
      ]
    ],
    [
      "009a24a4",
      "PARAM",
      [
        "storage",
        "00c66ef8",
        null,
        "pointer __((offset(0x10)))"
      ]
    ],
    [
      "009a24ac",
      "PARAM",
      [
        "storage",
        "00c72260",
        null,
        "pointer __((offset(0x10)))"
      ]
    ]
  ]
}
~~~


~~~diff
- 009a150c ["INT_ADD", "register:40f0:8", ["const:9a150c:8", "const:4:8"]]
- 009a150c ["CALL", null, ["callee:00c596b0:8"]]
+ 009a24b8 ["INT_ADD", "register:40f0:8", ["const:9a24b8:8", "const:4:8"]]
+ 009a24b8 ["CALL", null, ["callee:00c596b0:8"]]
- 009a14e8 ["COPY", "register:4040:8", ["const:ca4000:8"]]
+ 009a2494 ["COPY", "register:4040:8", ["const:ca5000:8"]]
- 009a14ec ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:a78:8"]]
- 009a14ec ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
+ 009a2498 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:a38:8"]]
+ 009a2498 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-18cce4ec1c430e389a4b770bf2ed127f"></a>

### [`009a1654`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009a1/009a1654.md) → [`009a2600`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009a2/009a2600.md) FUN_009a2600

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`00997090`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00997/00997090.md) · 呼出先 9件 [`00440f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00440/00440f00.md) [`0046ca04`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046c/0046ca04.md) [`0072c190`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0072c/0072c190.md) [`0072c334`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0072c/0072c334.md) [`00753528`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00753/00753528.md)
- 新版 呼出元 1件 [`0099803c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00998/0099803c.md) · 呼出先 9件 [`00441220`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00441/00441220.md) [`0046cd24`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0046c/0046cd24.md) [`0072c540`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0072c/0072c540.md) [`0072c6e4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0072c/0072c6e4.md) [`007538d8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00753/007538d8.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 98.39% / 新版 98.39%

優先判定に残った影響 `store_value` 8件

アドレスに依存する影響 `store_value` 3件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "009a26a4",
      "incomplete_value": true,
      "site": "009a26bc",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:300:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "009a16f8",
      "incomplete_value": true,
      "site": "009a1710",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:2b0:8"
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
      "definition_site": "009a26f8",
      "incomplete_value": true,
      "site": "009a2710",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:dc0:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "009a174c",
      "incomplete_value": true,
      "site": "009a1764",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:d70:8"
              ]
            ]
          ]
        ]
      ]
    },
    "ordinal": 28,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "009a2900",
      "incomplete_value": true,
      "site": "009a2924",
      "value": [
        "LOAD",
        "16",
        [
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
                "const:660:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "009a1954",
      "incomplete_value": true,
      "site": "009a1978",
      "value": [
        "LOAD",
        "16",
        [
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
                "const:610:8"
              ]
            ]
          ]
        ]
      ]
    },
    "ordinal": 45,
    "slot": 2
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "009a26a4",
      "READ",
      [
        "storage",
        "002c22b0",
        null,
        null
      ]
    ],
    [
      "009a26f8",
      "READ",
      [
        "storage",
        "002c2d70",
        null,
        null
      ]
    ],
    [
      "009a27f8",
      "READ",
      [
        "storage",
        "002c22b0",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "009a26a4",
      "READ",
      [
        "storage",
        "002c2300",
        null,
        null
      ]
    ],
    [
      "009a26f8",
      "READ",
      [
        "storage",
        "002c2dc0",
        null,
        null
      ]
    ],
    [
      "009a27f8",
      "READ",
      [
        "storage",
        "002c2300",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 009a26bc ["INT_ADD", "register:40f0:8", ["const:9a26bc:8", "const:4:8"]]
- 009a26bc ["CALL", null, ["callee:00c590a0:8"]]
+ 009a3668 ["INT_ADD", "register:40f0:8", ["const:9a3668:8", "const:4:8"]]
+ 009a3668 ["CALL", null, ["callee:00c590a0:8"]]
- 009a2a30 ["INT_ADD", "register:40f0:8", ["const:9a2a30:8", "const:4:8"]]
- 009a2a30 ["CALL", null, ["callee:00441220:8"]]
+ 009a39dc ["INT_ADD", "register:40f0:8", ["const:9a39dc:8", "const:4:8"]]
+ 009a39dc ["CALL", null, ["callee:00441220:8"]]
- 009a16b0 ["INT_ADD", "register:40f0:8", ["const:9a16b0:8", "const:4:8"]]
- 009a16b0 ["CALL", null, ["callee:0072c540:8"]]
+ 009a265c ["INT_ADD", "register:40f0:8", ["const:9a265c:8", "const:4:8"]]
+ 009a265c ["CALL", null, ["callee:0072c540:8"]]
~~~


<a id="compare-651fee06b2e22d65db486ea9e4ee43be"></a>

### [`009a2e10`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009a2/009a2e10.md) → [`009a3dbc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009a3/009a3dbc.md) FUN_009a3dbc

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
      "definition_site": "009a3de0",
      "incomplete_value": false,
      "site": "009a3de0",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c89000:8"
          ],
          [
            "leaf",
            "const:120:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "009a2e34",
      "incomplete_value": false,
      "site": "009a2e34",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c88000:8"
          ],
          [
            "leaf",
            "const:150:8"
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
      "009a3de0",
      "DATA",
      [
        "storage",
        "00c88150",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "009a3de0",
      "DATA",
      [
        "storage",
        "00c89120",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 009a2e24 ["INT_ADD", "register:40f0:8", ["const:9a2e24:8", "const:4:8"]]
- 009a2e24 ["CALL", null, ["callee:00c58f30:8"]]
+ 009a3dd0 ["INT_ADD", "register:40f0:8", ["const:9a3dd0:8", "const:4:8"]]
+ 009a3dd0 ["CALL", null, ["callee:00c58f30:8"]]
- 009a2e2c ["COPY", "register:4040:8", ["const:c88000:8"]]
+ 009a3dd8 ["COPY", "register:4040:8", ["const:c89000:8"]]
- 009a2e30 ["COPY", "tmp:0:8", ["const:150:8"]]
- 009a2e30 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 009a2e30 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 009a2e30 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 009a3ddc ["COPY", "tmp:0:8", ["const:120:8"]]
+ 009a3ddc ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 009a3ddc ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 009a3ddc ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-1272550133c937999343d14ff10c8872"></a>

### [`009a333c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009a3/009a333c.md) → [`009a42e8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009a4/009a42e8.md) FUN_009a42e8

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
      "definition_site": "009a430c",
      "incomplete_value": false,
      "site": "009a430c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c89000:8"
          ],
          [
            "leaf",
            "const:230:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "009a3360",
      "incomplete_value": false,
      "site": "009a3360",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c88000:8"
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
      "009a430c",
      "DATA",
      [
        "storage",
        "00c88260",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "009a430c",
      "DATA",
      [
        "storage",
        "00c89230",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 009a3350 ["INT_ADD", "register:40f0:8", ["const:9a3350:8", "const:4:8"]]
- 009a3350 ["CALL", null, ["callee:00c58f30:8"]]
+ 009a42fc ["INT_ADD", "register:40f0:8", ["const:9a42fc:8", "const:4:8"]]
+ 009a42fc ["CALL", null, ["callee:00c58f30:8"]]
- 009a3358 ["COPY", "register:4040:8", ["const:c88000:8"]]
+ 009a4304 ["COPY", "register:4040:8", ["const:c89000:8"]]
- 009a335c ["COPY", "tmp:0:8", ["const:260:8"]]
- 009a335c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 009a335c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 009a335c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 009a4308 ["COPY", "tmp:0:8", ["const:230:8"]]
+ 009a4308 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 009a4308 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 009a4308 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-615389b5d3374c308c415665d1755970"></a>

### [`009a3600`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009a3/009a3600.md) → [`009a45ac`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009a4/009a45ac.md) FUN_009a45ac

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 5件 [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md) [`0047ce14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047ce14.md) [`008b6efc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b6/008b6efc.md) [`00a46944`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a46/00a46944.md) [`00a46c0c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a46/00a46c0c.md)
- 新版 呼出元 0件  · 呼出先 5件 [`0047b054`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047b/0047b054.md) [`0047d134`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047d/0047d134.md) [`008b7ea8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008b7/008b7ea8.md) [`00a47938`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a47/00a47938.md) [`00a47c00`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a47/00a47c00.md)

変更の種類 call, call_target, constant, operands_and_dependencies

命令の説明率　旧版 95.35% / 新版 95.35%

優先判定に残った影響 `call_target` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_target",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "009a45d0",
      "value": [
        "leaf",
        "ram:47b054:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "009a3624",
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
      "site": "009a45dc",
      "value": [
        "leaf",
        "ram:47b054:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "009a3630",
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
      "009a45d0",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ],
    [
      "009a45dc",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ]
  ],
  "added": [
    [
      "009a45d0",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047b054"
      ]
    ],
    [
      "009a45dc",
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
- 009a3624 ["INT_ADD", "register:40f0:8", ["const:9a3624:8", "const:4:8"]]
- 009a3624 ["CALL", null, ["ram:47ad34:8"]]
+ 009a45d0 ["INT_ADD", "register:40f0:8", ["const:9a45d0:8", "const:4:8"]]
+ 009a45d0 ["CALL", null, ["ram:47b054:8"]]
- 009a3630 ["INT_ADD", "register:40f0:8", ["const:9a3630:8", "const:4:8"]]
- 009a3630 ["CALL", null, ["ram:47ad34:8"]]
+ 009a45dc ["INT_ADD", "register:40f0:8", ["const:9a45dc:8", "const:4:8"]]
+ 009a45dc ["CALL", null, ["ram:47b054:8"]]
- 009a3684 ["INT_ADD", "register:40f0:8", ["const:9a3684:8", "const:4:8"]]
- 009a3684 ["CALL", null, ["callee:008b7ea8:8"]]
+ 009a4630 ["INT_ADD", "register:40f0:8", ["const:9a4630:8", "const:4:8"]]
+ 009a4630 ["CALL", null, ["callee:008b7ea8:8"]]
~~~


<a id="compare-3b347cd51453348912fbc564bb660bbb"></a>

### [`009a3728`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009a3/009a3728.md) → [`009a46d4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009a4/009a46d4.md) FUN_009a46d4

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 5件 [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md) [`0047ce14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047ce14.md) [`008b6fa8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b6/008b6fa8.md) [`009c333c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009c3/009c333c.md) [`009c334c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009c3/009c334c.md)
- 新版 呼出元 0件  · 呼出先 5件 [`0047b054`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047b/0047b054.md) [`0047d134`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047d/0047d134.md) [`008b7f54`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008b7/008b7f54.md) [`009c42e8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009c4/009c42e8.md) [`009c42f8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009c4/009c42f8.md)

変更の種類 call, call_target, constant, operands_and_dependencies

命令の説明率　旧版 97.92% / 新版 97.92%

優先判定に残った影響 `call_target` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_target",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "009a4704",
      "value": [
        "leaf",
        "ram:47b054:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "009a3758",
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
      "site": "009a4710",
      "value": [
        "leaf",
        "ram:47b054:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "009a3764",
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
      "009a4704",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ],
    [
      "009a4710",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ]
  ],
  "added": [
    [
      "009a4704",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047b054"
      ]
    ],
    [
      "009a4710",
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
- 009a3758 ["INT_ADD", "register:40f0:8", ["const:9a3758:8", "const:4:8"]]
- 009a3758 ["CALL", null, ["ram:47ad34:8"]]
+ 009a4704 ["INT_ADD", "register:40f0:8", ["const:9a4704:8", "const:4:8"]]
+ 009a4704 ["CALL", null, ["ram:47b054:8"]]
- 009a3764 ["INT_ADD", "register:40f0:8", ["const:9a3764:8", "const:4:8"]]
- 009a3764 ["CALL", null, ["ram:47ad34:8"]]
+ 009a4710 ["INT_ADD", "register:40f0:8", ["const:9a4710:8", "const:4:8"]]
+ 009a4710 ["CALL", null, ["ram:47b054:8"]]
- 009a3770 ["INT_ADD", "register:40f0:8", ["const:9a3770:8", "const:4:8"]]
- 009a3770 ["CALL", null, ["callee:008b7f54:8"]]
+ 009a471c ["INT_ADD", "register:40f0:8", ["const:9a471c:8", "const:4:8"]]
+ 009a471c ["CALL", null, ["callee:008b7f54:8"]]
~~~


<a id="compare-84bc244bfbd4468853d3f04812c86931"></a>

### [`009a3924`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009a3/009a3924.md) → [`009a48d0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009a4/009a48d0.md) FUN_009a48d0

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 3件 [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md) [`0047ce14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047ce14.md) [`008b91d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b9/008b91d0.md)
- 新版 呼出元 0件  · 呼出先 3件 [`0047b054`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047b/0047b054.md) [`0047d134`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047d/0047d134.md) [`008ba17c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008ba/008ba17c.md)

変更の種類 call, call_target, constant, operands_and_dependencies

命令の説明率　旧版 95.65% / 新版 95.65%

優先判定に残った影響 `call_target` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_target",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "009a48f4",
      "value": [
        "leaf",
        "ram:47b054:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "009a3948",
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
      "009a48f4",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ]
  ],
  "added": [
    [
      "009a48f4",
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
- 009a3948 ["INT_ADD", "register:40f0:8", ["const:9a3948:8", "const:4:8"]]
- 009a3948 ["CALL", null, ["ram:47ad34:8"]]
+ 009a48f4 ["INT_ADD", "register:40f0:8", ["const:9a48f4:8", "const:4:8"]]
+ 009a48f4 ["CALL", null, ["ram:47b054:8"]]
- 009a3954 ["INT_ADD", "register:40f0:8", ["const:9a3954:8", "const:4:8"]]
- 009a3954 ["CALL", null, ["callee:0047d134:8"]]
+ 009a4900 ["INT_ADD", "register:40f0:8", ["const:9a4900:8", "const:4:8"]]
+ 009a4900 ["CALL", null, ["callee:0047d134:8"]]
~~~


<a id="compare-2f2d8c2570e6869294e81973754cb94c"></a>

### [`009a39ac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009a3/009a39ac.md) → [`009a4958`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009a4/009a4958.md) FUN_009a4958

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
      "definition_site": "009a497c",
      "incomplete_value": false,
      "site": "009a497c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c89000:8"
          ],
          [
            "leaf",
            "const:430:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "009a39d0",
      "incomplete_value": false,
      "site": "009a39d0",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c88000:8"
          ],
          [
            "leaf",
            "const:460:8"
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
      "009a497c",
      "DATA",
      [
        "storage",
        "00c88460",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "009a497c",
      "DATA",
      [
        "storage",
        "00c89430",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 009a39c0 ["INT_ADD", "register:40f0:8", ["const:9a39c0:8", "const:4:8"]]
- 009a39c0 ["CALL", null, ["callee:00c58f30:8"]]
+ 009a496c ["INT_ADD", "register:40f0:8", ["const:9a496c:8", "const:4:8"]]
+ 009a496c ["CALL", null, ["callee:00c58f30:8"]]
- 009a39c8 ["COPY", "register:4040:8", ["const:c88000:8"]]
+ 009a4974 ["COPY", "register:4040:8", ["const:c89000:8"]]
- 009a39cc ["COPY", "tmp:0:8", ["const:460:8"]]
- 009a39cc ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 009a39cc ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 009a39cc ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 009a4978 ["COPY", "tmp:0:8", ["const:430:8"]]
+ 009a4978 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 009a4978 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 009a4978 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-f881c5b32425476c5892c2a6ba541fa1"></a>

### [`009a39fc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009a3/009a39fc.md) → [`009a49a8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009a4/009a49a8.md) FUN_009a49a8

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 4件 [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md) [`0047ce14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047ce14.md) [`008b91d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b9/008b91d0.md) [`00a1a6f8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a1a/00a1a6f8.md)
- 新版 呼出元 0件  · 呼出先 4件 [`0047b054`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047b/0047b054.md) [`0047d134`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047d/0047d134.md) [`008ba17c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008ba/008ba17c.md) [`00a1b6a4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a1b/00a1b6a4.md)

変更の種類 call, call_target, constant, operands_and_dependencies

命令の説明率　旧版 95.83% / 新版 95.83%

優先判定に残った影響 `call_target` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_target",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "009a49cc",
      "value": [
        "leaf",
        "ram:47b054:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "009a3a20",
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
      "009a49cc",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ]
  ],
  "added": [
    [
      "009a49cc",
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
- 009a3a20 ["INT_ADD", "register:40f0:8", ["const:9a3a20:8", "const:4:8"]]
- 009a3a20 ["CALL", null, ["ram:47ad34:8"]]
+ 009a49cc ["INT_ADD", "register:40f0:8", ["const:9a49cc:8", "const:4:8"]]
+ 009a49cc ["CALL", null, ["ram:47b054:8"]]
- 009a3a2c ["INT_ADD", "register:40f0:8", ["const:9a3a2c:8", "const:4:8"]]
- 009a3a2c ["CALL", null, ["callee:0047d134:8"]]
+ 009a49d8 ["INT_ADD", "register:40f0:8", ["const:9a49d8:8", "const:4:8"]]
+ 009a49d8 ["CALL", null, ["callee:0047d134:8"]]
~~~


<a id="compare-3b5a6e51bef7c413413d7dcb149ddd78"></a>

### [`009a3a88`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009a3/009a3a88.md) → [`009a4a34`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009a4/009a4a34.md) FUN_009a4a34

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
      "definition_site": "009a4a58",
      "incomplete_value": false,
      "site": "009a4a58",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c89000:8"
          ],
          [
            "leaf",
            "const:4b0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "009a3aac",
      "incomplete_value": false,
      "site": "009a3aac",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c88000:8"
          ],
          [
            "leaf",
            "const:4e0:8"
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
      "009a4a58",
      "DATA",
      [
        "storage",
        "00c884e0",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "009a4a58",
      "DATA",
      [
        "storage",
        "00c894b0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 009a3a9c ["INT_ADD", "register:40f0:8", ["const:9a3a9c:8", "const:4:8"]]
- 009a3a9c ["CALL", null, ["callee:00c58f30:8"]]
+ 009a4a48 ["INT_ADD", "register:40f0:8", ["const:9a4a48:8", "const:4:8"]]
+ 009a4a48 ["CALL", null, ["callee:00c58f30:8"]]
- 009a3aa4 ["COPY", "register:4040:8", ["const:c88000:8"]]
+ 009a4a50 ["COPY", "register:4040:8", ["const:c89000:8"]]
- 009a3aa8 ["COPY", "tmp:0:8", ["const:4e0:8"]]
- 009a3aa8 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 009a3aa8 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 009a3aa8 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 009a4a54 ["COPY", "tmp:0:8", ["const:4b0:8"]]
+ 009a4a54 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 009a4a54 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 009a4a54 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-de40970223e8c4420f5c7802b68484e4"></a>

### [`009a3b58`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009a3/009a3b58.md) → [`009a4b04`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009a4/009a4b04.md) FUN_009a4b04

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
      "site": "009a4b28",
      "value": [
        "leaf",
        "ram:47b054:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "009a3b7c",
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
      "009a4b28",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ]
  ],
  "added": [
    [
      "009a4b28",
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
- 009a3b7c ["INT_ADD", "register:40f0:8", ["const:9a3b7c:8", "const:4:8"]]
- 009a3b7c ["CALL", null, ["ram:47ad34:8"]]
+ 009a4b28 ["INT_ADD", "register:40f0:8", ["const:9a4b28:8", "const:4:8"]]
+ 009a4b28 ["CALL", null, ["ram:47b054:8"]]
- 009a3b88 ["INT_ADD", "register:40f0:8", ["const:9a3b88:8", "const:4:8"]]
- 009a3b88 ["CALL", null, ["callee:0047d134:8"]]
+ 009a4b34 ["INT_ADD", "register:40f0:8", ["const:9a4b34:8", "const:4:8"]]
+ 009a4b34 ["CALL", null, ["callee:0047d134:8"]]
~~~


<a id="compare-2e92138dbb183a620aff512a10ac7707"></a>

### [`009a3bcc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009a3/009a3bcc.md) → [`009a4b78`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009a4/009a4b78.md) FUN_009a4b78

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
      "definition_site": "009a4b8c",
      "incomplete_value": false,
      "site": "009a4b90",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c89000:8"
          ],
          [
            "leaf",
            "const:5b0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "009a3be0",
      "incomplete_value": false,
      "site": "009a3be4",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c88000:8"
          ],
          [
            "leaf",
            "const:5e0:8"
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
      "009a4b90",
      "DATA",
      [
        "storage",
        "00c885e0",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "009a4b90",
      "DATA",
      [
        "storage",
        "00c895b0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 009a3bd8 ["INT_ADD", "register:40f0:8", ["const:9a3bd8:8", "const:4:8"]]
- 009a3bd8 ["CALL", null, ["callee:00c58f30:8"]]
+ 009a4b84 ["INT_ADD", "register:40f0:8", ["const:9a4b84:8", "const:4:8"]]
+ 009a4b84 ["CALL", null, ["callee:00c58f30:8"]]
- 009a3bdc ["COPY", "register:4040:8", ["const:c88000:8"]]
+ 009a4b88 ["COPY", "register:4040:8", ["const:c89000:8"]]
- 009a3be0 ["COPY", "tmp:0:8", ["const:5e0:8"]]
- 009a3be0 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 009a3be0 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 009a3be0 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 009a4b8c ["COPY", "tmp:0:8", ["const:5b0:8"]]
+ 009a4b8c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 009a4b8c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 009a4b8c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-51795d02b71e979fa3b96ecead9f698d"></a>

### [`009a3c08`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009a3/009a3c08.md) → [`009a4bb4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009a4/009a4bb4.md) FUN_009a4bb4

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
      "site": "009a4bd8",
      "value": [
        "leaf",
        "ram:47b054:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "009a3c2c",
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
      "009a4bd8",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ]
  ],
  "added": [
    [
      "009a4bd8",
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
- 009a3c2c ["INT_ADD", "register:40f0:8", ["const:9a3c2c:8", "const:4:8"]]
- 009a3c2c ["CALL", null, ["ram:47ad34:8"]]
+ 009a4bd8 ["INT_ADD", "register:40f0:8", ["const:9a4bd8:8", "const:4:8"]]
+ 009a4bd8 ["CALL", null, ["ram:47b054:8"]]
- 009a3c38 ["INT_ADD", "register:40f0:8", ["const:9a3c38:8", "const:4:8"]]
- 009a3c38 ["CALL", null, ["callee:0047d134:8"]]
+ 009a4be4 ["INT_ADD", "register:40f0:8", ["const:9a4be4:8", "const:4:8"]]
+ 009a4be4 ["CALL", null, ["callee:0047d134:8"]]
~~~


<a id="compare-3152cc3bd9da914f0b721b5a78d00701"></a>

### [`009a3c7c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009a3/009a3c7c.md) → [`009a4c28`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009a4/009a4c28.md) FUN_009a4c28

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
      "definition_site": "009a4c3c",
      "incomplete_value": false,
      "site": "009a4c40",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c89000:8"
          ],
          [
            "leaf",
            "const:630:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "009a3c90",
      "incomplete_value": false,
      "site": "009a3c94",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c88000:8"
          ],
          [
            "leaf",
            "const:660:8"
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
      "009a4c40",
      "DATA",
      [
        "storage",
        "00c88660",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "009a4c40",
      "DATA",
      [
        "storage",
        "00c89630",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 009a3c88 ["INT_ADD", "register:40f0:8", ["const:9a3c88:8", "const:4:8"]]
- 009a3c88 ["CALL", null, ["callee:00c58f30:8"]]
+ 009a4c34 ["INT_ADD", "register:40f0:8", ["const:9a4c34:8", "const:4:8"]]
+ 009a4c34 ["CALL", null, ["callee:00c58f30:8"]]
- 009a3c8c ["COPY", "register:4040:8", ["const:c88000:8"]]
+ 009a4c38 ["COPY", "register:4040:8", ["const:c89000:8"]]
- 009a3c90 ["COPY", "tmp:0:8", ["const:660:8"]]
- 009a3c90 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 009a3c90 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 009a3c90 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 009a4c3c ["COPY", "tmp:0:8", ["const:630:8"]]
+ 009a4c3c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 009a4c3c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 009a4c3c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-c30271680fd7b3363eed030e2a117c34"></a>

### [`009a3cb8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009a3/009a3cb8.md) → [`009a4c64`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009a4/009a4c64.md) FUN_009a4c64

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
      "site": "009a4c88",
      "value": [
        "leaf",
        "ram:47b054:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "009a3cdc",
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
      "009a4c88",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ]
  ],
  "added": [
    [
      "009a4c88",
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
- 009a3cdc ["INT_ADD", "register:40f0:8", ["const:9a3cdc:8", "const:4:8"]]
- 009a3cdc ["CALL", null, ["ram:47ad34:8"]]
+ 009a4c88 ["INT_ADD", "register:40f0:8", ["const:9a4c88:8", "const:4:8"]]
+ 009a4c88 ["CALL", null, ["ram:47b054:8"]]
- 009a3ce8 ["INT_ADD", "register:40f0:8", ["const:9a3ce8:8", "const:4:8"]]
- 009a3ce8 ["CALL", null, ["callee:0047d134:8"]]
+ 009a4c94 ["INT_ADD", "register:40f0:8", ["const:9a4c94:8", "const:4:8"]]
+ 009a4c94 ["CALL", null, ["callee:0047d134:8"]]
~~~


<a id="compare-2a435d049ef61dabcad57ab2b5ee1e96"></a>

### [`009a3d28`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009a3/009a3d28.md) → [`009a4cd4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009a4/009a4cd4.md) _INIT_191

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 5件 [`0043aeb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043a/0043aeb0.md) [`0043b838`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b838.md) [`00c57f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f00.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)
- 新版 呼出元 0件  · 呼出先 5件 [`0043b1d0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043b1d0.md) [`0043bb58`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bb58.md) [`00c58ed0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58ed0.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies, operation_sequence, store_destination, store_value

命令の説明率　旧版 82.49% / 新版 82.49%

優先判定に残った影響 `call_argument_candidate` 3件, `store_destination` 3件, `store_value` 8件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "009a4d10",
      "incomplete_value": true,
      "site": "009a4d2c",
      "value": [
        "LOAD",
        "16",
        [
          [
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
      "definition_site": "009a3d64",
      "incomplete_value": true,
      "site": "009a3d80",
      "value": [
        "LOAD",
        "16",
        [
          [
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
      "definition_site": "009a4d34",
      "incomplete_value": true,
      "site": "009a4d50",
      "value": [
        "LOAD",
        "16",
        [
          [
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
      "definition_site": "009a3d88",
      "incomplete_value": true,
      "site": "009a3da4",
      "value": [
        "LOAD",
        "16",
        [
          [
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
      "definition_site": "009a4d54",
      "incomplete_value": true,
      "site": "009a4d70",
      "value": [
        "LOAD",
        "16",
        [
          [
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
      "definition_site": "009a3da8",
      "incomplete_value": true,
      "site": "009a3dc4",
      "value": [
        "LOAD",
        "16",
        [
          [
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
      "009a4d10",
      "READ",
      [
        "storage",
        "002b7f66",
        null,
        "string"
      ]
    ],
    [
      "009a4d34",
      "READ",
      [
        "storage",
        "002b7f79",
        null,
        "string"
      ]
    ],
    [
      "009a4d54",
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
      "009a4d10",
      "READ",
      [
        "storage",
        "002b8035",
        null,
        "string"
      ]
    ],
    [
      "009a4d34",
      "READ",
      [
        "storage",
        "002b8048",
        null,
        "string"
      ]
    ],
    [
      "009a4d54",
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
- 009a3e88 ["INT_ADD", "register:40f0:8", ["const:9a3e88:8", "const:4:8"]]
- 009a3e88 ["CALL", null, ["callee:0043bb58:8"]]
+ 009a4e34 ["INT_ADD", "register:40f0:8", ["const:9a4e34:8", "const:4:8"]]
+ 009a4e34 ["CALL", null, ["callee:0043bb58:8"]]
- 009a3f5c ["INT_ADD", "register:40f0:8", ["const:9a3f5c:8", "const:4:8"]]
- 009a3f5c ["CALL", null, ["callee:00c58ed0:8"]]
+ 009a4f08 ["INT_ADD", "register:40f0:8", ["const:9a4f08:8", "const:4:8"]]
+ 009a4f08 ["CALL", null, ["callee:00c58ed0:8"]]
- 009a3d50 ["COPY", "register:4098:8", ["const:1123000:8"]]
+ 009a4cfc ["COPY", "register:4098:8", ["const:1124000:8"]]
~~~


<a id="compare-a820079f883c3bb14c730bc6f75c8f68"></a>

### [`009a4788`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009a4/009a4788.md) → [`009a5734`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009a5/009a5734.md) _INIT_192

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 5件 [`0043aeb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043a/0043aeb0.md) [`0043b838`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b838.md) [`00c57f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f00.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)
- 新版 呼出元 0件  · 呼出先 5件 [`0043b1d0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043b1d0.md) [`0043bb58`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bb58.md) [`00c58ed0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58ed0.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies, operation_sequence, store_value

命令の説明率　旧版 87.57% / 新版 87.57%

優先判定に残った影響 `call_argument_candidate` 3件, `store_value` 4件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "009a5770",
      "incomplete_value": true,
      "site": "009a578c",
      "value": [
        "LOAD",
        "16",
        [
          [
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
      "definition_site": "009a47c4",
      "incomplete_value": true,
      "site": "009a47e0",
      "value": [
        "LOAD",
        "16",
        [
          [
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
      "definition_site": "009a57f0",
      "incomplete_value": true,
      "site": "009a580c",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:643:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "009a4844",
      "incomplete_value": true,
      "site": "009a4860",
      "value": [
        "LOAD",
        "16",
        [
          [
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
    "ordinal": 21,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "009a5810",
      "incomplete_value": true,
      "site": "009a582c",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:f50:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "009a4864",
      "incomplete_value": true,
      "site": "009a4880",
      "value": [
        "LOAD",
        "16",
        [
          [
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
      "009a5770",
      "READ",
      [
        "storage",
        "002b7f66",
        null,
        "string"
      ]
    ],
    [
      "009a5794",
      "READ",
      [
        "storage",
        "002b7f79",
        null,
        "string"
      ]
    ],
    [
      "009a57b4",
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
      "009a5770",
      "READ",
      [
        "storage",
        "002b8035",
        null,
        "string"
      ]
    ],
    [
      "009a5794",
      "READ",
      [
        "storage",
        "002b8048",
        null,
        "string"
      ]
    ],
    [
      "009a57b4",
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
- 009a49bc ["INT_ADD", "register:40f0:8", ["const:9a49bc:8", "const:4:8"]]
- 009a49bc ["CALL", null, ["callee:00c58ed0:8"]]
+ 009a5968 ["INT_ADD", "register:40f0:8", ["const:9a5968:8", "const:4:8"]]
+ 009a5968 ["CALL", null, ["callee:00c58ed0:8"]]
- 009a47b0 ["COPY", "register:4098:8", ["const:1123000:8"]]
+ 009a575c ["COPY", "register:4098:8", ["const:1124000:8"]]
- 009a47b4 ["COPY", "tmp:0:8", ["const:c58:8"]]
- 009a47b4 ["INT_CARRY", "register:105:1", ["register:4098:8", "tmp:0:8"]]
- 009a47b4 ["INT_SCARRY", "register:106:1", ["register:4098:8", "tmp:0:8"]]
- 009a47b4 ["INT_ADD", "tmp:1:8", ["register:4098:8", "tmp:0:8"]]
+ 009a5760 ["COPY", "tmp:0:8", ["const:c18:8"]]
+ 009a5760 ["INT_CARRY", "register:105:1", ["register:4098:8", "tmp:0:8"]]
+ 009a5760 ["INT_SCARRY", "register:106:1", ["register:4098:8", "tmp:0:8"]]
+ 009a5760 ["INT_ADD", "tmp:1:8", ["register:4098:8", "tmp:0:8"]]
~~~


<a id="compare-736d58678d0f0affefffbd45335c3c21"></a>

### [`009a4b18`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009a4/009a4b18.md) → [`009a5ac4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009a5/009a5ac4.md) _INIT_193

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
      "definition_site": "009a5b00",
      "incomplete_value": true,
      "site": "009a5b1c",
      "value": [
        "LOAD",
        "16",
        [
          [
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
      "definition_site": "009a4b54",
      "incomplete_value": true,
      "site": "009a4b70",
      "value": [
        "LOAD",
        "16",
        [
          [
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
      "definition_site": "009a5b24",
      "incomplete_value": true,
      "site": "009a5b40",
      "value": [
        "LOAD",
        "16",
        [
          [
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
      "definition_site": "009a4b78",
      "incomplete_value": true,
      "site": "009a4b94",
      "value": [
        "LOAD",
        "16",
        [
          [
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
      "definition_site": "009a5b44",
      "incomplete_value": true,
      "site": "009a5b60",
      "value": [
        "LOAD",
        "16",
        [
          [
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
      "definition_site": "009a4b98",
      "incomplete_value": true,
      "site": "009a4bb4",
      "value": [
        "LOAD",
        "16",
        [
          [
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
      "009a5b00",
      "READ",
      [
        "storage",
        "002b7f66",
        null,
        "string"
      ]
    ],
    [
      "009a5b24",
      "READ",
      [
        "storage",
        "002b7f79",
        null,
        "string"
      ]
    ],
    [
      "009a5b44",
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
      "009a5b00",
      "READ",
      [
        "storage",
        "002b8035",
        null,
        "string"
      ]
    ],
    [
      "009a5b24",
      "READ",
      [
        "storage",
        "002b8048",
        null,
        "string"
      ]
    ],
    [
      "009a5b44",
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
- 009a4c78 ["INT_ADD", "register:40f0:8", ["const:9a4c78:8", "const:4:8"]]
- 009a4c78 ["CALL", null, ["callee:0043bb58:8"]]
+ 009a5c24 ["INT_ADD", "register:40f0:8", ["const:9a5c24:8", "const:4:8"]]
+ 009a5c24 ["CALL", null, ["callee:0043bb58:8"]]
- 009a4d4c ["INT_ADD", "register:40f0:8", ["const:9a4d4c:8", "const:4:8"]]
- 009a4d4c ["CALL", null, ["callee:00c58ed0:8"]]
+ 009a5cf8 ["INT_ADD", "register:40f0:8", ["const:9a5cf8:8", "const:4:8"]]
+ 009a5cf8 ["CALL", null, ["callee:00c58ed0:8"]]
- 009a4b40 ["COPY", "register:4098:8", ["const:1123000:8"]]
+ 009a5aec ["COPY", "register:4098:8", ["const:1124000:8"]]
~~~


<a id="compare-53302975fc2267565d615cbfefe0b3e0"></a>

### [`009a4eb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009a4/009a4eb0.md) → [`009a5e5c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009a5/009a5e5c.md) FUN_009a5e5c

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`0089bce4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0089b/0089bce4.md) · 呼出先 1件 [`0048e0f8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048e/0048e0f8.md)
- 新版 呼出元 1件 [`0089cc90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0089c/0089cc90.md) · 呼出先 1件 [`0048e418`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0048e/0048e418.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 90.91% / 新版 90.91%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "009a5e6c",
      "incomplete_value": false,
      "site": "009a5e74",
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
            "const:c60:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "009a4ec0",
      "incomplete_value": false,
      "site": "009a4ec8",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:1123000:8"
          ],
          [
            "leaf",
            "const:ca0:8"
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
      "009a5e6c",
      "PARAM",
      [
        "storage",
        "01123ca0",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "009a5e6c",
      "PARAM",
      [
        "storage",
        "01124c60",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 009a4ec8 ["INT_ADD", "register:40f0:8", ["const:9a4ec8:8", "const:4:8"]]
- 009a4ec8 ["CALL", null, ["callee:0048e418:8"]]
+ 009a5e74 ["INT_ADD", "register:40f0:8", ["const:9a5e74:8", "const:4:8"]]
+ 009a5e74 ["CALL", null, ["callee:0048e418:8"]]
- 009a4ebc ["COPY", "register:4008:8", ["const:1123000:8"]]
+ 009a5e68 ["COPY", "register:4008:8", ["const:1124000:8"]]
- 009a4ec0 ["COPY", "tmp:0:8", ["const:ca0:8"]]
- 009a4ec0 ["INT_CARRY", "register:105:1", ["register:4008:8", "tmp:0:8"]]
- 009a4ec0 ["INT_SCARRY", "register:106:1", ["register:4008:8", "tmp:0:8"]]
- 009a4ec0 ["INT_ADD", "tmp:1:8", ["register:4008:8", "tmp:0:8"]]
+ 009a5e6c ["COPY", "tmp:0:8", ["const:c60:8"]]
+ 009a5e6c ["INT_CARRY", "register:105:1", ["register:4008:8", "tmp:0:8"]]
+ 009a5e6c ["INT_SCARRY", "register:106:1", ["register:4008:8", "tmp:0:8"]]
+ 009a5e6c ["INT_ADD", "tmp:1:8", ["register:4008:8", "tmp:0:8"]]
~~~


<a id="compare-c33cf8ce197d1309b919e82b5073255a"></a>

### [`009a4edc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009a4/009a4edc.md) → [`009a5e88`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009a5/009a5e88.md) FUN_009a5e88

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`0089bce4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0089b/0089bce4.md) · 呼出先 1件 [`0048e0f8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048e/0048e0f8.md)
- 新版 呼出元 1件 [`0089cc90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0089c/0089cc90.md) · 呼出先 1件 [`0048e418`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0048e/0048e418.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 90.91% / 新版 90.91%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "009a5e98",
      "incomplete_value": false,
      "site": "009a5ea0",
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
            "const:c80:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "009a4eec",
      "incomplete_value": false,
      "site": "009a4ef4",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:1123000:8"
          ],
          [
            "leaf",
            "const:cc0:8"
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
      "009a5e98",
      "PARAM",
      [
        "storage",
        "01123cc0",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "009a5e98",
      "PARAM",
      [
        "storage",
        "01124c80",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 009a4ef4 ["INT_ADD", "register:40f0:8", ["const:9a4ef4:8", "const:4:8"]]
- 009a4ef4 ["CALL", null, ["callee:0048e418:8"]]
+ 009a5ea0 ["INT_ADD", "register:40f0:8", ["const:9a5ea0:8", "const:4:8"]]
+ 009a5ea0 ["CALL", null, ["callee:0048e418:8"]]
- 009a4ee8 ["COPY", "register:4008:8", ["const:1123000:8"]]
+ 009a5e94 ["COPY", "register:4008:8", ["const:1124000:8"]]
- 009a4eec ["COPY", "tmp:0:8", ["const:cc0:8"]]
- 009a4eec ["INT_CARRY", "register:105:1", ["register:4008:8", "tmp:0:8"]]
- 009a4eec ["INT_SCARRY", "register:106:1", ["register:4008:8", "tmp:0:8"]]
- 009a4eec ["INT_ADD", "tmp:1:8", ["register:4008:8", "tmp:0:8"]]
+ 009a5e98 ["COPY", "tmp:0:8", ["const:c80:8"]]
+ 009a5e98 ["INT_CARRY", "register:105:1", ["register:4008:8", "tmp:0:8"]]
+ 009a5e98 ["INT_SCARRY", "register:106:1", ["register:4008:8", "tmp:0:8"]]
+ 009a5e98 ["INT_ADD", "tmp:1:8", ["register:4008:8", "tmp:0:8"]]
~~~


<a id="compare-165ad603669942c304d7d0a77dfdeca2"></a>

### [`009a4f08`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009a4/009a4f08.md) → [`009a5eb4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009a5/009a5eb4.md) FUN_009a5eb4

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `bounded` · 参照 `changed`

- 旧版 呼出元 1件 [`0089bce4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0089b/0089bce4.md) · 呼出先 12件 [`0048e1d4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048e/0048e1d4.md) [`00493cb8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00493/00493cb8.md) [`00493cc0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00493/00493cc0.md) [`00493d28`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00493/00493d28.md) [`009a5114`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009a5/009a5114.md)
- 新版 呼出元 1件 [`0089cc90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0089c/0089cc90.md) · 呼出先 12件 [`0048e4f4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0048e/0048e4f4.md) [`00493fd8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00493/00493fd8.md) [`00493fe0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00493/00493fe0.md) [`00494048`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00494/00494048.md) [`009a60c0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009a6/009a60c0.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 95.29% / 新版 95.29%

優先判定に残った影響 `store_value` 2件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "009a5f40",
      "incomplete_value": false,
      "site": "009a5f40",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c89000:8"
          ],
          [
            "leaf",
            "const:6b0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "009a4f94",
      "incomplete_value": false,
      "site": "009a4f94",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c88000:8"
          ],
          [
            "leaf",
            "const:6e0:8"
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
      "definition_site": "009a5f58",
      "incomplete_value": false,
      "site": "009a5f5c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c89000:8"
          ],
          [
            "leaf",
            "const:740:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "009a4fac",
      "incomplete_value": false,
      "site": "009a4fb0",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c88000:8"
          ],
          [
            "leaf",
            "const:770:8"
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
      "009a5f40",
      "DATA",
      [
        "storage",
        "00c886e0",
        null,
        "undefined *"
      ]
    ],
    [
      "009a5f5c",
      "DATA",
      [
        "storage",
        "00c88770",
        null,
        "undefined *"
      ]
    ],
    [
      "009a5f94",
      "READ",
      [
        "storage",
        "00c88790",
        null,
        "pointer"
      ]
    ]
  ],
  "added": [
    [
      "009a5f40",
      "DATA",
      [
        "storage",
        "00c896b0",
        null,
        "undefined *"
      ]
    ],
    [
      "009a5f5c",
      "DATA",
      [
        "storage",
        "00c89740",
        null,
        "undefined *"
      ]
    ],
    [
      "009a5f94",
      "READ",
      [
        "storage",
        "00c89760",
        null,
        "pointer"
      ]
    ]
  ]
}
~~~


~~~diff
- 009a4f40 ["INT_ADD", "register:40f0:8", ["const:9a4f40:8", "const:4:8"]]
- 009a4f40 ["CALL", null, ["callee:0048e4f4:8"]]
+ 009a5eec ["INT_ADD", "register:40f0:8", ["const:9a5eec:8", "const:4:8"]]
+ 009a5eec ["CALL", null, ["callee:0048e4f4:8"]]
- 009a4f4c ["INT_ADD", "register:40f0:8", ["const:9a4f4c:8", "const:4:8"]]
- 009a4f4c ["CALL", null, ["callee:00494048:8"]]
+ 009a5ef8 ["INT_ADD", "register:40f0:8", ["const:9a5ef8:8", "const:4:8"]]
+ 009a5ef8 ["CALL", null, ["callee:00494048:8"]]
- 009a4f60 ["INT_ADD", "register:40f0:8", ["const:9a4f60:8", "const:4:8"]]
- 009a4f60 ["CALL", null, ["callee:00493fe0:8"]]
+ 009a5f0c ["INT_ADD", "register:40f0:8", ["const:9a5f0c:8", "const:4:8"]]
+ 009a5f0c ["CALL", null, ["callee:00493fe0:8"]]
~~~


<a id="compare-e12b1174f6eef6d01ca987d58c37b942"></a>

### [`009a5114`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009a5/009a5114.md) → [`009a60c0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009a6/009a60c0.md) FUN_009a60c0

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`009a4f08`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009a4/009a4f08.md) · 呼出先 13件 [`00598b74`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00598/00598b74.md) [`00598d34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00598/00598d34.md) [`005a7574`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005a7/005a7574.md) [`00795e7c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00795/00795e7c.md) [`00795eb4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00795/00795eb4.md)
- 新版 呼出元 1件 [`009a5eb4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009a5/009a5eb4.md) · 呼出先 13件 [`00598e94`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00598/00598e94.md) [`00599054`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00599/00599054.md) [`005a7924`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005a7/005a7924.md) [`00796258`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00796/00796258.md) [`00796290`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00796/00796290.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 98.51% / 新版 98.51%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "009a6204",
      "incomplete_value": true,
      "site": "009a6204",
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
            "const:8d0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "009a5258",
      "incomplete_value": true,
      "site": "009a5258",
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
            "const:900:8"
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
      "009a6134",
      "DATA",
      [
        "storage",
        "00c6daf0",
        null,
        "undefined *"
      ]
    ],
    [
      "009a6204",
      "DATA",
      [
        "storage",
        "00c88900",
        null,
        "undefined *"
      ]
    ],
    [
      "009a62b8",
      "READ",
      [
        "storage",
        "00c88928",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "009a6134",
      "DATA",
      [
        "storage",
        "00c6eac0",
        null,
        "undefined *"
      ]
    ],
    [
      "009a6204",
      "DATA",
      [
        "storage",
        "00c898d0",
        null,
        "undefined *"
      ]
    ],
    [
      "009a62b8",
      "READ",
      [
        "storage",
        "00c898f8",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 009a5148 ["INT_ADD", "register:40f0:8", ["const:9a5148:8", "const:4:8"]]
- 009a5148 ["CALL", null, ["callee:00c58f30:8"]]
+ 009a60f4 ["INT_ADD", "register:40f0:8", ["const:9a60f4:8", "const:4:8"]]
+ 009a60f4 ["CALL", null, ["callee:00c58f30:8"]]
- 009a5154 ["INT_ADD", "register:40f0:8", ["const:9a5154:8", "const:4:8"]]
- 009a5154 ["CALL", null, ["callee:005a7924:8"]]
+ 009a6100 ["INT_ADD", "register:40f0:8", ["const:9a6100:8", "const:4:8"]]
+ 009a6100 ["CALL", null, ["callee:005a7924:8"]]
- 009a5168 ["INT_ADD", "register:40f0:8", ["const:9a5168:8", "const:4:8"]]
- 009a5168 ["CALL", null, ["callee:009a901c:8"]]
+ 009a6114 ["INT_ADD", "register:40f0:8", ["const:9a6114:8", "const:4:8"]]
+ 009a6114 ["CALL", null, ["callee:009a901c:8"]]
~~~


<a id="compare-1f6adb5674f81278be6ff1a26388efbe"></a>

### [`009a555c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009a5/009a555c.md) → [`009a6508`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009a6/009a6508.md) FUN_009a6508

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `bounded` · 参照 `changed`

- 旧版 呼出元 1件 [`0089bce4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0089b/0089bce4.md) · 呼出先 12件 [`0048e1d4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048e/0048e1d4.md) [`00493cb8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00493/00493cb8.md) [`00493cc0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00493/00493cc0.md) [`00493d28`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00493/00493d28.md) [`009a5808`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009a5/009a5808.md)
- 新版 呼出元 1件 [`0089cc90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0089c/0089cc90.md) · 呼出先 12件 [`0048e4f4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0048e/0048e4f4.md) [`00493fd8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00493/00493fd8.md) [`00493fe0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00493/00493fe0.md) [`00494048`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00494/00494048.md) [`009a67b4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009a6/009a67b4.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 96.58% / 新版 96.58%

優先判定に残った影響 `store_value` 2件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "009a65fc",
      "incomplete_value": false,
      "site": "009a65fc",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c89000:8"
          ],
          [
            "leaf",
            "const:7c0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "009a5650",
      "incomplete_value": false,
      "site": "009a5650",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c88000:8"
          ],
          [
            "leaf",
            "const:7f0:8"
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
      "definition_site": "009a6618",
      "incomplete_value": false,
      "site": "009a661c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c89000:8"
          ],
          [
            "leaf",
            "const:850:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "009a566c",
      "incomplete_value": false,
      "site": "009a5670",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c88000:8"
          ],
          [
            "leaf",
            "const:880:8"
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
      "009a65fc",
      "DATA",
      [
        "storage",
        "00c887f0",
        null,
        "undefined *"
      ]
    ],
    [
      "009a661c",
      "DATA",
      [
        "storage",
        "00c88880",
        null,
        "undefined *"
      ]
    ],
    [
      "009a6654",
      "READ",
      [
        "storage",
        "00c888a0",
        null,
        "pointer"
      ]
    ]
  ],
  "added": [
    [
      "009a65fc",
      "DATA",
      [
        "storage",
        "00c897c0",
        null,
        "undefined *"
      ]
    ],
    [
      "009a661c",
      "DATA",
      [
        "storage",
        "00c89850",
        null,
        "undefined *"
      ]
    ],
    [
      "009a6654",
      "READ",
      [
        "storage",
        "00c89870",
        null,
        "pointer"
      ]
    ]
  ]
}
~~~


~~~diff
- 009a55b8 ["INT_ADD", "register:40f0:8", ["const:9a55b8:8", "const:4:8"]]
- 009a55b8 ["CALL", null, ["callee:0048e4f4:8"]]
+ 009a6564 ["INT_ADD", "register:40f0:8", ["const:9a6564:8", "const:4:8"]]
+ 009a6564 ["CALL", null, ["callee:0048e4f4:8"]]
- 009a55c4 ["INT_ADD", "register:40f0:8", ["const:9a55c4:8", "const:4:8"]]
- 009a55c4 ["CALL", null, ["callee:00494048:8"]]
+ 009a6570 ["INT_ADD", "register:40f0:8", ["const:9a6570:8", "const:4:8"]]
+ 009a6570 ["CALL", null, ["callee:00494048:8"]]
- 009a55d4 ["INT_ADD", "register:40f0:8", ["const:9a55d4:8", "const:4:8"]]
- 009a55d4 ["CALL", null, ["callee:00494048:8"]]
+ 009a6580 ["INT_ADD", "register:40f0:8", ["const:9a6580:8", "const:4:8"]]
+ 009a6580 ["CALL", null, ["callee:00494048:8"]]
~~~


<a id="compare-a3b36e78d1969f776134308ba9768e77"></a>

### [`009a5808`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009a5/009a5808.md) → [`009a67b4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009a6/009a67b4.md) FUN_009a67b4

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`009a555c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009a5/009a555c.md) · 呼出先 13件 [`00598b74`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00598/00598b74.md) [`00598d34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00598/00598d34.md) [`005a8578`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005a8/005a8578.md) [`00795e7c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00795/00795e7c.md) [`00795eb4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00795/00795eb4.md)
- 新版 呼出元 1件 [`009a6508`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009a6/009a6508.md) · 呼出先 13件 [`00598e94`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00598/00598e94.md) [`00599054`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00599/00599054.md) [`005a8928`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005a8/005a8928.md) [`00796258`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00796/00796258.md) [`00796290`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00796/00796290.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 97.54% / 新版 97.54%

優先判定に残った影響 `store_value` 2件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "009a682c",
      "incomplete_value": false,
      "site": "009a6830",
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
                "const:ab0:8"
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
      "definition_site": "009a5880",
      "incomplete_value": false,
      "site": "009a5884",
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
    "ordinal": 11,
    "slot": 2
  },
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "009a6900",
      "incomplete_value": false,
      "site": "009a6900",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c89000:8"
          ],
          [
            "leaf",
            "const:950:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "009a5954",
      "incomplete_value": false,
      "site": "009a5954",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c88000:8"
          ],
          [
            "leaf",
            "const:980:8"
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
      "009a6830",
      "DATA",
      [
        "storage",
        "00c6daf0",
        null,
        "undefined *"
      ]
    ],
    [
      "009a6900",
      "DATA",
      [
        "storage",
        "00c88980",
        null,
        "undefined *"
      ]
    ],
    [
      "009a69b4",
      "READ",
      [
        "storage",
        "00c889a8",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "009a6830",
      "DATA",
      [
        "storage",
        "00c6eac0",
        null,
        "undefined *"
      ]
    ],
    [
      "009a6900",
      "DATA",
      [
        "storage",
        "00c89950",
        null,
        "undefined *"
      ]
    ],
    [
      "009a69b4",
      "READ",
      [
        "storage",
        "00c89978",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 009a5840 ["INT_ADD", "register:40f0:8", ["const:9a5840:8", "const:4:8"]]
- 009a5840 ["CALL", null, ["callee:00c58f30:8"]]
+ 009a67ec ["INT_ADD", "register:40f0:8", ["const:9a67ec:8", "const:4:8"]]
+ 009a67ec ["CALL", null, ["callee:00c58f30:8"]]
- 009a5850 ["INT_ADD", "register:40f0:8", ["const:9a5850:8", "const:4:8"]]
- 009a5850 ["CALL", null, ["callee:005a8928:8"]]
+ 009a67fc ["INT_ADD", "register:40f0:8", ["const:9a67fc:8", "const:4:8"]]
+ 009a67fc ["CALL", null, ["callee:005a8928:8"]]
- 009a5864 ["INT_ADD", "register:40f0:8", ["const:9a5864:8", "const:4:8"]]
- 009a5864 ["CALL", null, ["callee:009a9778:8"]]
+ 009a6810 ["INT_ADD", "register:40f0:8", ["const:9a6810:8", "const:4:8"]]
+ 009a6810 ["CALL", null, ["callee:009a9778:8"]]
~~~


<a id="compare-7c6c94c989a712d0abe50c49d1795b66"></a>

### [`009a5c58`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009a5/009a5c58.md) → [`009a6c04`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009a6/009a6c04.md) FUN_009a6c04

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 2件 [`009a63f4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009a6/009a63f4.md) [`009a6d50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009a6/009a6d50.md) · 呼出先 12件 [`0043bb60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bb60.md) [`004741d8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00474/004741d8.md) [`0048cd38`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048c/0048cd38.md) [`00492d0c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00492/00492d0c.md) [`00749010`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00749/00749010.md)
- 新版 呼出元 2件 [`009a73a0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009a7/009a73a0.md) [`009a7cfc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009a7/009a7cfc.md) · 呼出先 12件 [`0043be80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043be80.md) [`004744f8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00474/004744f8.md) [`0048d058`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0048d/0048d058.md) [`0049302c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00493/0049302c.md) [`007493c0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00749/007493c0.md)

変更の種類 call, call_argument_candidate, call_target, constant, operands_and_dependencies, operation_sequence, store_value

命令の説明率　旧版 91.01% / 新版 91.01%

優先判定に残った影響 `call_argument_candidate` 1件, `call_target` 1件, `store_value` 8件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "009a6c64",
      "incomplete_value": true,
      "site": "009a6c64",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:a57:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "009a5cb8",
      "incomplete_value": true,
      "site": "009a5cb8",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:979:8"
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
      "definition_site": "009a6e20",
      "incomplete_value": true,
      "site": "009a6e20",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:86:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "009a5e74",
      "incomplete_value": true,
      "site": "009a5e74",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:faf:8"
              ]
            ]
          ]
        ]
      ]
    },
    "ordinal": 29,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "009a6e08",
      "incomplete_value": true,
      "site": "009a6e24",
      "value": [
        "LOAD",
        "8",
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
      "definition_site": "009a5e5c",
      "incomplete_value": true,
      "site": "009a5e78",
      "value": [
        "LOAD",
        "8",
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
    "ordinal": 30,
    "slot": 2
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "009a6c54",
      "READ",
      [
        "storage",
        "002ba979",
        null,
        "string"
      ]
    ],
    [
      "009a6ca4",
      "READ",
      [
        "storage",
        "002c32d0",
        null,
        null
      ]
    ],
    [
      "009a6d34",
      "READ",
      [
        "storage",
        "002c0670",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "009a6c54",
      "READ",
      [
        "storage",
        "002baa57",
        null,
        "string"
      ]
    ],
    [
      "009a6ca4",
      "READ",
      [
        "storage",
        "002c3320",
        null,
        null
      ]
    ],
    [
      "009a6d34",
      "READ",
      [
        "storage",
        "002c06ba",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 009a5f7c ["INT_ADD", "register:40f0:8", ["const:9a5f7c:8", "const:4:8"]]
- 009a5f7c ["CALL", null, ["callee:00c59010:8"]]
+ 009a6f28 ["INT_ADD", "register:40f0:8", ["const:9a6f28:8", "const:4:8"]]
+ 009a6f28 ["CALL", null, ["callee:00c59010:8"]]
- 009a6000 ["INT_ADD", "register:40f0:8", ["const:9a6000:8", "const:4:8"]]
- 009a6000 ["CALL", null, ["ram:48cd38:8"]]
+ 009a6fac ["INT_ADD", "register:40f0:8", ["const:9a6fac:8", "const:4:8"]]
+ 009a6fac ["CALL", null, ["ram:48d058:8"]]
- 009a5ca4 ["COPY", "tmp:0:8", ["const:979:8"]]
- 009a5ca4 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 009a5ca4 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 009a5ca4 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 009a6c50 ["COPY", "tmp:0:8", ["const:a57:8"]]
+ 009a6c50 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 009a6c50 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 009a6c50 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
~~~


<a id="compare-dce53b7c4b99f2345c87d7931d5256fc"></a>

### [`009a62ac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009a6/009a62ac.md) → [`009a7258`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009a7/009a7258.md) FUN_009a7258

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 88.00% / 新版 88.00%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "009a727c",
      "incomplete_value": true,
      "site": "009a7280",
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
                "const:ab0:8"
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
      "definition_site": "009a62d0",
      "incomplete_value": true,
      "site": "009a62d4",
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
      "009a7280",
      "DATA",
      [
        "storage",
        "00c6daf0",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "009a7280",
      "DATA",
      [
        "storage",
        "00c6eac0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 009a62c4 ["COPY", "register:4040:8", ["const:c6d000:8"]]
+ 009a7270 ["COPY", "register:4040:8", ["const:c6e000:8"]]
- 009a62c8 ["COPY", "tmp:0:8", ["const:ae0:8"]]
- 009a62c8 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 009a62c8 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 009a62c8 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 009a7274 ["COPY", "tmp:0:8", ["const:ab0:8"]]
+ 009a7274 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 009a7274 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 009a7274 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 009a62e0 ["INT_ADD", "register:40f0:8", ["const:9a62e0:8", "const:4:8"]]
- 009a62e0 ["CALL", null, ["callee:00c58f50:8"]]
+ 009a728c ["INT_ADD", "register:40f0:8", ["const:9a728c:8", "const:4:8"]]
+ 009a728c ["CALL", null, ["callee:00c58f50:8"]]
~~~


<a id="compare-f2e77378eb2b1a3717618972d4bf193c"></a>

### [`009a63d4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009a6/009a63d4.md) → [`009a7380`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009a7/009a7380.md) FUN_009a7380

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
      "definition_site": "009a7388",
      "incomplete_value": false,
      "site": "009a738c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c89000:8"
          ],
          [
            "leaf",
            "const:6b0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "009a63dc",
      "incomplete_value": false,
      "site": "009a63e0",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c88000:8"
          ],
          [
            "leaf",
            "const:6e0:8"
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
      "009a738c",
      "DATA",
      [
        "storage",
        "00c886e0",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "009a738c",
      "DATA",
      [
        "storage",
        "00c896b0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 009a63d8 ["COPY", "register:4048:8", ["const:c88000:8"]]
+ 009a7384 ["COPY", "register:4048:8", ["const:c89000:8"]]
- 009a63dc ["COPY", "tmp:0:8", ["const:6e0:8"]]
- 009a63dc ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 009a63dc ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 009a63dc ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 009a7388 ["COPY", "tmp:0:8", ["const:6b0:8"]]
+ 009a7388 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 009a7388 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 009a7388 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
~~~


<a id="compare-3087186d052997a17ca3319814fa1636"></a>

### [`009a63f4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009a6/009a63f4.md) → [`009a73a0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009a7/009a73a0.md) FUN_009a73a0

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 9件 [`0043bb60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bb60.md) [`005a784c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005a7/005a784c.md) [`009a5c58`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009a5/009a5c58.md) [`009a68f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009a6/009a68f0.md) [`009a6aa0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009a6/009a6aa0.md)
- 新版 呼出元 0件  · 呼出先 9件 [`0043be80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043be80.md) [`005a7bfc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005a7/005a7bfc.md) [`009a6c04`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009a6/009a6c04.md) [`009a789c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009a7/009a789c.md) [`009a7a4c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009a7/009a7a4c.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 98.58% / 新版 98.58%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "009a75bc",
      "incomplete_value": true,
      "site": "009a75bc",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:9c7:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "009a6610",
      "incomplete_value": true,
      "site": "009a6610",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:8f8:8"
              ]
            ]
          ]
        ]
      ]
    },
    "ordinal": 42,
    "slot": 2
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "009a75a0",
      "READ",
      [
        "storage",
        "002b68f8",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "009a75a0",
      "READ",
      [
        "storage",
        "002b69c7",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 009a6450 ["INT_ADD", "register:40f0:8", ["const:9a6450:8", "const:4:8"]]
- 009a6450 ["CALL", null, ["callee:005a7bfc:8"]]
+ 009a73fc ["INT_ADD", "register:40f0:8", ["const:9a73fc:8", "const:4:8"]]
+ 009a73fc ["CALL", null, ["callee:005a7bfc:8"]]
- 009a64ac ["INT_ADD", "register:40f0:8", ["const:9a64ac:8", "const:4:8"]]
- 009a64ac ["CALL", null, ["callee:0043be80:8"]]
+ 009a7458 ["INT_ADD", "register:40f0:8", ["const:9a7458:8", "const:4:8"]]
+ 009a7458 ["CALL", null, ["callee:0043be80:8"]]
- 009a64dc ["INT_ADD", "register:40f0:8", ["const:9a64dc:8", "const:4:8"]]
- 009a64dc ["CALL", null, ["callee:0043be80:8"]]
+ 009a7488 ["INT_ADD", "register:40f0:8", ["const:9a7488:8", "const:4:8"]]
+ 009a7488 ["CALL", null, ["callee:0043be80:8"]]
~~~


